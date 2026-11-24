/* A small full-timeline atlas backed by a bounded window of crisp frames. */
(() => {
  "use strict";

  const clamp = (x, min, max) => Math.min(max, Math.max(min, x));
  const framePath = (path, prefix, ext, i) => path + prefix + String(i + 1).padStart(3, "0") + ext;

  function imageJob(url, key, priority) {
    const image = new Image();
    image._scrubKey = key;
    image.decoding = "async";
    image.fetchPriority = priority;
    let finish, timer;
    const promise = new Promise((resolve) => {
      let finished = false;
      finish = (ready) => {
        if (finished) return;
        finished = true;
        clearTimeout(timer);
        image.onload = image.onerror = null;
        if (!ready) image.removeAttribute("src");
        resolve(ready && image.naturalWidth ? image : null);
      };
      timer = setTimeout(() => finish(false), 9000);
      image.onload = () => {
        if (typeof image.decode === "function") {
          image.decode().then(() => finish(true), () => finish(Boolean(image.naturalWidth)));
        } else finish(true);
      };
      image.onerror = () => finish(false);
      image.src = url;
    });
    return { promise, cancel: () => finish(false) };
  }

  const picture = (image, key = image._scrubKey) => ({
    image, key, sx: 0, sy: 0, w: image.naturalWidth, h: image.naturalHeight,
  });

  function store({ count, path, hiPath, prefix, ext, name, atlas, touch, saveData }) {
    const end = count - 1;
    const details = new Map(), pending = new Map(), failed = new Set();
    const ahead = saveData ? 5 : touch ? 13 : 16;
    const behind = saveData ? 3 : touch ? 7 : 9;
    const limit = saveData ? 1 : touch ? 3 : 4;
    let tiles = [], preparing = null, enabled = false, active = true;
    let center = 0, direction = 1, high = null, highJob = null, failedHigh = -1;
    const url = (dir, i) => framePath(dir, prefix, ext, i);

    function loadDetail(i) {
      const job = imageJob(url(path, i), `${name}-${i}`, i === center ? "high" : "auto");
      pending.set(i, job);
      return job.promise.then((img) => {
        if (pending.get(i) !== job) return null;
        pending.delete(i);
        if (img) details.set(i, picture(img));
        else failed.add(i);
        pump();
        return img;
      });
    }

    function trim() {
      const keep = active ? ahead + 3 : 1;
      for (const i of details.keys()) if (Math.abs(i - center) > keep) details.delete(i);
      // Stop obsolete requests after a fling rather than holding up the new playhead.
      for (const [i, job] of pending) {
        if (active && Math.abs(i - center) <= ahead + 4) continue;
        pending.delete(i);
        job.cancel();
      }
      if (high && Math.abs(high.index - center) > 1) high = null;
      if (highJob && (!active || Math.abs(highJob.index - center) > 1)) {
        highJob.job.cancel();
        highJob = null;
      }
    }

    function pump() {
      if (!enabled || !active) return;
      const canLoad = (i) => i >= 0 && i <= end && !details.has(i) && !pending.has(i) && !failed.has(i);
      if (pending.size < limit && canLoad(center)) loadDetail(center);
      for (let d = 1; d <= ahead && pending.size < limit; d++) {
        const forward = center + d * direction, reverse = center - d * direction;
        if (canLoad(forward)) loadDetail(forward);
        if (pending.size < limit && d <= behind && canLoad(reverse)) loadDetail(reverse);
      }
    }

    function prepare(onProgress = () => {}) {
      if (preparing) return preparing;
      let complete = 0;
      const tick = () => onProgress(++complete / 2);
      // Only two resources gate entry; the preview covers every scroll position.
      const preview = imageJob(atlas.src, `${name}-atlas`, "high").promise.then((img) => {
        if (img && img.naturalWidth === atlas.width * atlas.columns) {
          const n = Math.ceil(count / atlas.step);
          if (img.naturalHeight >= Math.ceil(n / atlas.columns) * atlas.height) {
            tiles = Array.from({ length: n }, (_, i) => ({
              image: img, key: `${name}-tile-${i}`,
              sx: (i % atlas.columns) * atlas.width,
              sy: Math.floor(i / atlas.columns) * atlas.height,
              w: atlas.width, h: atlas.height,
            }));
          }
        }
        tick();
      });
      failed.delete(0);
      const first = (details.has(0) ? Promise.resolve() : loadDetail(0)).then(tick);
      preparing = Promise.all([preview, first]).then(() => {
        if (!tiles.length && !details.has(0)) throw new Error("Could not prepare opening frames");
      }).catch((error) => { preparing = null; throw error; });
      return preparing;
    }

    function setActive(next) {
      if (next === active) return;
      active = next;
      if (enabled) trim();
      pump();
    }

    function update(position, idle) {
      const next = clamp(Math.round(position), 0, end);
      if (next !== center) {
        direction = Math.sign(next - center);
        center = next;
        trim();
        pump();
      }
      if (!hiPath || !idle || !active || highJob || high?.index === center || failedHigh === center) return;
      const index = center;
      const job = imageJob(url(hiPath, index), `${name}-hi-${index}`, "low");
      highJob = { index, job };
      job.promise.then((img) => {
        if (highJob?.job !== job) return;
        highJob = null;
        if (img) high = { index, frame: picture(img) };
        else failedHigh = index;
      });
    }

    const blend = (a, b, weight, allow) => {
      if (!a || !b || a === b || !allow) return { a: weight >= 0.5 ? b || a : a || b };
      const mix = Math.round(weight * 8) / 8;
      return mix === 0 ? { a } : mix === 1 ? { a: b } : { a, b, mix };
    };

    function sample(position, idle, allowBlend) {
      const p = clamp(position, 0, end);
      const i = Math.round(p), lower = Math.floor(p), upper = Math.ceil(p);
      if (idle && high?.index === i) return { a: high.frame };
      if (idle && details.has(i)) return { a: details.get(i) };
      const a = details.get(lower), b = details.get(upper);
      if (a && b) return blend(a, b, p - lower, allowBlend);
      if (tiles.length) {
        // Use the same tier for both sides so the blend doesn't flash in and out of focus.
        const t = p / atlas.step;
        const left = Math.floor(t), right = Math.min(tiles.length - 1, Math.ceil(t));
        return blend(tiles[left], tiles[right], t - left, allowBlend);
      }
      // No preview (offline/unsupported): fall back to the closest available detailed image.
      let nearest = null, distance = Infinity;
      for (const [idx, frame] of details) {
        const delta = Math.abs(idx - p);
        if (delta < distance) { nearest = frame; distance = delta; }
      }
      return { a: nearest };
    }

    return {
      prepare, setActive, update, sample,
      openingPreview: () => ({ a: tiles[0] }),
      start: () => { if (!enabled) { enabled = true; pump(); } },
      prime: (image) => details.set(0, picture(image, `${name}-0`)),
    };
  }

  function renderer(canvas, { cover = false, background = "#F4EBDB", touch }) {
    const context = canvas.getContext("2d", { alpha: false });
    const dpr = Math.min(window.devicePixelRatio || 1, touch ? 1.25 : 1.6);
    let drawn = "", geometry = "";

    function resize(width, height) {
      if (!context || width < 1 || height < 1) return;
      const scale = Math.min(dpr, Math.sqrt(1_400_000 / (width * height)));
      const w = Math.round(width * scale), h = Math.round(height * scale);
      if (canvas.width === w && canvas.height === h) return;
      canvas.width = w;
      canvas.height = h;
      context.imageSmoothingQuality = "medium";
      if (!cover) {
        context.fillStyle = background;
        context.fillRect(0, 0, w, h);
      }
      drawn = geometry = "";
    }

    function paint({ a, b, mix }) {
      if (!context || !a) return false;
      const key = b ? `${a.key}:${b.key}:${mix}` : a.key;
      if (key === drawn) return true;
      const cw = canvas.width, ch = canvas.height;
      const scale = cover ? Math.max(cw / a.w, ch / a.h) : Math.min(cw / a.w, ch / a.h) * .97;
      const dw = Math.round(a.w * scale), dh = Math.round(a.h * scale);
      const x = Math.round((cw - dw) / 2), y = Math.round((ch - dh) * (cover ? .5 : .42));
      const next = `${x}:${y}:${dw}:${dh}`;
      if (!cover && next !== geometry) {
        context.fillStyle = background;
        context.fillRect(0, 0, cw, ch);
        geometry = next;
      }
      context.drawImage(a.image, a.sx, a.sy, a.w, a.h, x, y, dw, dh);
      if (b) {
        context.globalAlpha = mix;
        context.drawImage(b.image, b.sx, b.sy, b.w, b.h, x, y, dw, dh);
        context.globalAlpha = 1;
      }
      drawn = key;
      return true;
    }

    return { resize, paint };
  }

  window.WeddingFrameCinema = { store, renderer };
})();
