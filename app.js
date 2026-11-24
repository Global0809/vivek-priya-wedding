/* ═══════════════════════════════════════════════════════════
   ROYAL WEDDING INVITE — ENGINE
   Frame-scrub cinema · petals · scratch card
   synth bells · countdown · RSVP · 3D-world portal
   ═══════════════════════════════════════════════════════════ */
(() => {
"use strict";

const CFG = window.WEDDING_CONFIG;
const REDUCED = matchMedia("(prefers-reduced-motion: reduce)").matches;
const IS_TOUCH = matchMedia("(pointer: coarse)").matches;
const SAVE_DATA = !!(navigator.connection && navigator.connection.saveData);
const DPR = Math.min(window.devicePixelRatio || 1, IS_TOUCH ? 1.5 : 2);
const $ = (s) => document.querySelector(s);
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const lerp = (a, b, t) => a + (b - a) * t;
/* QA shim: "?tick" drives the loop with setTimeout where rAF is unavailable
   (hidden-tab automated testing). Real visitors always get rAF. */
const RAF = /[?&]tick/.test(location.search)
  ? (fn) => setTimeout(() => fn(performance.now()), 16)
  : (fn) => requestAnimationFrame(fn);

/* ── Theme from config ──────────────────────────────────── */
{
  const t = CFG.theme, r = document.documentElement.style;
  r.setProperty("--maroon", t.maroon);
  r.setProperty("--maroon-deep", t.maroonDeep);
  r.setProperty("--gold", t.gold);
  r.setProperty("--gold-soft", t.goldSoft);
  r.setProperty("--ivory", t.ivory);
  r.setProperty("--ink", t.inkOnIvory);
}

/* ── Stable viewport unit (no URL-bar jumps) ────────────── */
let vhPx = Math.max(window.innerHeight, 1) / 100;
const setVh = () => {
  if (window.innerHeight < 120) return;   // ignore transient 0-height resize events
  vhPx = window.innerHeight / 100;
  document.documentElement.style.setProperty("--vh", vhPx + "px");
};
setVh();
let lastW = window.innerWidth, rzTimer = 0;
const remeasure = () => {
  setVh();
  scrub.resize();
  petals.resize();
  sanctum.resize();
};
window.addEventListener("resize", () => {
  // On touch devices ignore height-only resizes (URL bar collapse)
  if (IS_TOUCH && window.innerWidth === lastW) return;
  lastW = window.innerWidth;
  remeasure();
  clearTimeout(rzTimer);
  rzTimer = setTimeout(remeasure, 280);   // settle pass after the browser finishes resizing
});
window.addEventListener("orientationchange", () => {
  clearTimeout(rzTimer);
  rzTimer = setTimeout(remeasure, 350);
});

/* ═══════════════ AUDIO — synthesized temple sounds ═══════ */
const audio = (() => {
  let ctx = null, master = null, bgm = null, bgmGain = null, noiseBuf = null;
  let worldSuspended = false;
  let muted = false;
  try { muted = localStorage.getItem("wed-muted") === "1"; } catch {}
  let bgmFadeToken = 0;

  const init = () => {
    if (ctx) { ctx.resume().catch(() => {}); return; }
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    try { ctx = new AudioContext(); } catch { return; }
    ctx.resume().catch(() => {});                   // iOS ships it suspended
    master = ctx.createGain();
    master.gain.value = muted ? 0 : 1;
    master.connect(ctx.destination);
    noiseBuf = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate);
    const nd = noiseBuf.getChannelData(0);
    for (let i = 0; i < nd.length; i++) nd[i] = Math.random() * 2 - 1;
  };

  const getBgmLevel = () => bgmGain ? bgmGain.gain.value : bgm.volume;
  const setBgmLevel = (value) => {
    if (bgmGain) bgmGain.gain.value = value;
    else bgm.volume = value;
  };

  const playBgm = (duration = 1900) => {
    if (!bgm || muted || worldSuspended || document.hidden) return;
    const token = bgmFadeToken;
    bgm.play().then(() => {
      if (token === bgmFadeToken && !worldSuspended && !document.hidden && !muted) {
        fadeBgmTo(0.32, duration);
      }
    }).catch(() => {}); // The sound button can retry when playback was blocked.
  };

  /* Start only after a trusted tap. WebAudio gain also fades on iOS. */
  const startBgm = () => {
    if (!CFG.bgm) return;
    if (!bgm) {
      bgm = new Audio();
      bgm.preload = "none";
      bgm.loop = true;
      bgm.playsInline = true;
      if (ctx && master) {
        const gain = ctx.createGain();
        try {
          gain.connect(master);
          ctx.createMediaElementSource(bgm).connect(gain);
          bgmGain = gain;
        } catch { gain.disconnect(); }
      }
      setBgmLevel(0);
      bgm.muted = muted;
      bgm.src = CFG.bgm;
    }
    if (bgm.paused) playBgm();
  };

  const fadeBgmTo = (target, duration = 600, pauseAtEnd = false) => {
    if (!bgm) return;
    const token = ++bgmFadeToken;
    const from = getBgmLevel();
    const started = performance.now();
    const step = (now) => {
      if (token !== bgmFadeToken || !bgm) return;
      const p = Math.min(1, (now - started) / Math.max(1, duration));
      const eased = 1 - Math.pow(1 - p, 2);
      setBgmLevel(from + (target - from) * eased);
      if (p < 1) requestAnimationFrame(step);
      else if (pauseAtEnd) bgm.pause();
    };
    requestAnimationFrame(step);
  };

  /* Soft airy whoosh for scroll gusts */
  let lastWhoosh = -1;
  const whoosh = (strength = 0.5) => {
    if (!ctx || muted) return;
    const t = ctx.currentTime;
    if (t - lastWhoosh < 0.65) return;
    lastWhoosh = t;
    const src = ctx.createBufferSource(), f = ctx.createBiquadFilter(), g = ctx.createGain();
    src.buffer = noiseBuf; src.loop = true;
    f.type = "bandpass"; f.Q.value = 0.6;
    f.frequency.setValueAtTime(300, t);
    f.frequency.exponentialRampToValueAtTime(1400, t + 0.28);
    f.frequency.exponentialRampToValueAtTime(240, t + 0.7);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.05 * strength, t + 0.16);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.7);
    src.connect(f).connect(g).connect(master);
    src.start(t); src.stop(t + 0.75);
  };

  /* Scratchy foil texture while the finger rubs */
  let lastScratch = 0;
  const scratchNoise = () => {
    if (!ctx || muted) return;
    const t = ctx.currentTime;
    if (t - lastScratch < 0.07) return;
    lastScratch = t;
    const src = ctx.createBufferSource(), f = ctx.createBiquadFilter(), g = ctx.createGain();
    src.buffer = noiseBuf;
    src.playbackRate.value = 0.8 + Math.random() * 0.5;
    f.type = "highpass"; f.frequency.value = 2400 + Math.random() * 1200;
    g.gain.setValueAtTime(0.028, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.08);
    src.connect(f).connect(g).connect(master);
    src.start(t); src.stop(t + 0.09);
  };

  /* Temple bell — inharmonic partials + strike noise */
  const bell = (base = 432, vol = 0.5, dur = 3.2) => {
    if (!ctx || muted) return;
    const now = ctx.currentTime;
    const partials = [[1, 1], [2.74, 0.45], [5.4, 0.22], [8.93, 0.09]];
    partials.forEach(([ratio, g]) => {
      const o = ctx.createOscillator(), gn = ctx.createGain();
      o.type = "sine";
      o.frequency.value = base * ratio;
      o.detune.value = (Math.random() - 0.5) * 6;
      gn.gain.setValueAtTime(vol * g * 0.32, now);
      gn.gain.exponentialRampToValueAtTime(0.0001, now + dur * (1 - ratio * 0.06));
      o.connect(gn).connect(master);
      o.start(now); o.stop(now + dur);
    });
    // strike transient
    const nb = ctx.createBuffer(1, ctx.sampleRate * 0.05, ctx.sampleRate);
    const d = nb.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / d.length);
    const src = ctx.createBufferSource(), f = ctx.createBiquadFilter(), g2 = ctx.createGain();
    src.buffer = nb; f.type = "bandpass"; f.frequency.value = base * 2.7; f.Q.value = 2;
    g2.gain.value = vol * 0.25;
    src.connect(f).connect(g2).connect(master);
    src.start(now);
  };

  const chime = () => bell(864, 0.22, 1.6);

  const toggleMute = () => {
    muted = !muted;
    try { localStorage.setItem("wed-muted", muted ? "1" : "0"); } catch {}
    if (master) master.gain.linearRampToValueAtTime(muted ? 0 : 1, ctx.currentTime + 0.3);
    if (bgm) {
      bgm.muted = muted;
      if (!muted && !worldSuspended && !document.hidden) {
        if (bgm.paused) playBgm(450);
        else fadeBgmTo(0.32, 450);
      }
    }
    return muted;
  };

  const fadeForWorld = (duration = 720) => {
    worldSuspended = true;
    if (ctx && master) {
      const now = ctx.currentTime;
      master.gain.cancelScheduledValues(now);
      master.gain.setValueAtTime(master.gain.value, now);
      master.gain.linearRampToValueAtTime(0.0001, now + duration / 1000);
    }
    fadeBgmTo(0, duration, true);
  };

  const pauseForWorld = () => {
    worldSuspended = true;
    ++bgmFadeToken;
    if (bgm) {
      bgm.pause();
      setBgmLevel(0);
    }
    if (ctx && ctx.state !== "closed") ctx.suspend().catch(() => {});
  };

  const restoreAfterWorld = () => {
    worldSuspended = false;
    ++bgmFadeToken;
    if (ctx && ctx.state !== "closed") ctx.resume().catch(() => {});
    if (ctx && master) {
      const now = ctx.currentTime;
      master.gain.cancelScheduledValues(now);
      master.gain.setValueAtTime(master.gain.value, now);
      master.gain.linearRampToValueAtTime(muted ? 0.0001 : 1, now + 0.45);
    }
    if (bgm && !muted) {
      setBgmLevel(0);
      playBgm(650);
    }
  };

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      ++bgmFadeToken;
      if (ctx) ctx.suspend().catch(() => {});
      if (bgm) bgm.pause();
    } else if (!worldSuspended) {
      if (ctx) ctx.resume().catch(() => {});
      playBgm(450);
    }
  });

  return {
    init, bell, chime, startBgm, whoosh, scratchNoise, toggleMute,
    fadeForWorld, pauseForWorld, restoreAfterWorld, isMuted: () => muted,
    hasBgm: () => !!bgm,
  };
})();

/* ═══════════════ SCROLL CINEMA — full-range preview + detail ═══════ */
const cinema = window.WeddingFrameCinema;
const hiCapable = !IS_TOUCH && !SAVE_DATA && innerWidth >= 900
  && Number(navigator.deviceMemory || 8) >= 4
  && !/(^|-)2g$/.test(navigator.connection?.effectiveType || "");
const frames = cinema.store({
  ...CFG.frames, path: CFG.frames.loPath, hiPath: hiCapable ? CFG.frames.hiPath : null,
  name: "hero", touch: IS_TOUCH, saveData: SAVE_DATA,
  atlas: { src: "assets/scrub/hero.webp", columns: 8, width: 240, height: 320, step: 4 },
});

const scrub = (() => {
  const canvas = $("#scrub"), hero = $("#hero");
  const draw = cinema.renderer(canvas, { background: CFG.theme.ivory, touch: IS_TOUCH });
  const SCRUB_VH = IS_TOUCH ? 450 : 340;
  let active = true, scrollStart = 0, scrollDistance = 1;
  let cur = 0, lastTarget = 0, lastInput = -1;

  const measureScrollRange = (rect = hero.getBoundingClientRect()) => {
    scrollStart = window.scrollY + rect.top;
    scrollDistance = Math.max(rect.height - vhPx * 100, 1);
  };

  new IntersectionObserver(([entry]) => {
    active = entry.isIntersecting;
    frames.setActive(active);
    if (active) measureScrollRange(entry.boundingClientRect);
  }, { rootMargin: "160px 0px" }).observe(hero);

  const resize = () => {
    hero.style.height = ((REDUCED ? 100 : SCRUB_VH + 100) * vhPx) + "px";
    draw.resize(canvas.clientWidth, canvas.clientHeight);
    measureScrollRange();
    if (REDUCED) draw.paint(frames.sample(0, true, false));
  };

  const tick = (dt, now, y, allowBlend) => {
    if (!active) return 0;
    const target = clamp((y - scrollStart) / scrollDistance, 0, 1) * (CFG.frames.count - 1);
    if (target !== lastTarget || lastInput < 0) { lastTarget = target; lastInput = now; }
    const gap = Math.abs(target - cur);
    const response = gap > 8 ? 34 : 24;
    cur = gap < .025 ? target : lerp(cur, target, 1 - Math.exp(-dt * response));
    const still = Math.abs(target - cur) < .13 && now - lastInput > 165;
    frames.update(target, allowBlend && still && now - lastInput > 480);
    draw.paint(frames.sample(still ? target : cur, still, allowBlend));
    return gap;
  };

  const firstPaint = () => {
    // Touch the atlas behind the seal so its first upload doesn't interrupt a swipe.
    draw.paint(frames.openingPreview());
    draw.paint(frames.sample(0, true, false));
  };
  return { resize, tick, firstPaint };
})();

/* ═══════════════ PETALS — ambient particle system ════════ */
const petals = (() => {
  const canvas = $("#petals"), c = canvas.getContext("2d");
  let petalDpr = IS_TOUCH ? 1 : Math.min(DPR, 1.25);
  const COLORS = [
    ["#8C2B47", "#5C1428"],   // rose maroon
    ["#E5B54B", "#C9922B"],   // marigold
    ["#F4EBDB", "#E0CDA8"],   // ivory
  ];
  /* Pre-render each petal once. Drawing sprites is considerably cheaper than
     rebuilding a gradient and Bezier path for every particle on every frame. */
  const SPRITES = COLORS.map(([c1, c2]) => {
    const sprite = document.createElement("canvas");
    sprite.width = 48; sprite.height = 64;
    const sc = sprite.getContext("2d");
    const gradient = sc.createLinearGradient(24, 2, 24, 62);
    gradient.addColorStop(0, c1); gradient.addColorStop(1, c2);
    sc.fillStyle = gradient;
    sc.beginPath();
    sc.moveTo(24, 2);
    sc.quadraticCurveTo(46, 21, 24, 62);
    sc.quadraticCurveTo(2, 21, 24, 2);
    sc.fill();
    return sprite;
  });
  let list = [], gust = 0, running = false, lowPerf = false, paintAcc = 0;

  const resize = () => {
    canvas.width = Math.round(innerWidth * petalDpr);
    canvas.height = Math.round(innerHeight * petalDpr);
  };

  const spawn = (x, y, burst = false) => {
    const sprite = (Math.random() * SPRITES.length) | 0;
    list.push({
      x: x ?? Math.random() * innerWidth,
      y: y ?? -30,
      s: 7 + Math.random() * 11,
      vy: (burst ? 1.5 : 0.35) + Math.random() * 0.55,
      vx: burst ? (Math.random() - 0.5) * 3 : 0,
      ph: Math.random() * Math.PI * 2,
      rot: Math.random() * Math.PI * 2,
      vr: (Math.random() - 0.5) * 0.04,
      sprite,
      burst,
      life: 1,
      fade: burst ? 0.004 : 0,
    });
  };

  const baseCount = () => (lowPerf ? 2 : IS_TOUCH ? 4 : 8);

  const step = (dt, scrolling) => {
    if (!running) return;
    paintAcc += dt;
    const interval = 1 / (scrolling ? 15 : lowPerf ? 18 : IS_TOUCH ? 24 : 30);
    if (paintAcc < interval) return;
    dt = Math.min(paintAcc, 0.06);
    paintAcc = 0;
    c.clearRect(0, 0, canvas.width, canvas.height);
    const n = baseCount();
    if (list.length < n && Math.random() < 0.1) spawn();
    gust *= Math.pow(0.92, dt * 60);
    for (let i = list.length - 1; i >= 0; i--) {
      const p = list[i];
      p.ph += dt * 1.6;
      p.x += (Math.sin(p.ph) * 0.5 + p.vx) * dt * 60;
      p.y += (p.vy + gust) * dt * 60;
      p.rot += (p.vr + Math.sin(p.ph) * 0.008) * dt * 60;
      p.vx *= Math.pow(0.97, dt * 60);
      if (p.fade) p.life -= p.fade * dt * 600;
      if (p.y > innerHeight + 40 || p.life <= 0) { list.splice(i, 1); continue; }
      // draw petal
      c.save();
      c.translate(p.x * petalDpr, p.y * petalDpr);
      c.rotate(p.rot);
      c.scale(petalDpr, petalDpr);
      c.globalAlpha = 0.78 * Math.max(p.life, 0);
      c.drawImage(SPRITES[p.sprite], -p.s * 0.78, -p.s, p.s * 1.56, p.s * 2);
      c.restore();
    }
  };

  return {
    resize, step,
    start: () => { running = true; paintAcc = 1; gust = 0; },
    addGust: (g) => { if (running) gust = clamp(gust + g, -2, 4); },
    burst: (x, y, n = 12) => {
      if (!running) return;
      const cap = lowPerf ? 6 : IS_TOUCH ? 8 : 12;
      for (let i = 0; i < Math.min(n, cap); i++) spawn(x + (Math.random() - 0.5) * 60, y + (Math.random() - 0.5) * 40, true);
    },
    setLowPerf: () => {
      lowPerf = true;
      if (petalDpr > 1) { petalDpr = 1; resize(); }
      let ambient = 0, transient = 0;
      list = list.filter((p) => p.burst ? transient++ < 6 : ambient++ < 2);
    },
  };
})();

/* ═══════════════ COUNTDOWN ═══════════════════════════════ */
(() => {
  const tgt = new Date(CFG.wedding.dateISO).getTime();
  const el = { d: $("#cd-d"), h: $("#cd-h"), m: $("#cd-m"), s: $("#cd-s") };
  const pad = (n) => String(n).padStart(2, "0");
  const set = (node, txt) => { if (node.textContent !== txt) node.textContent = txt; };
  const upd = () => {
    let ms = tgt - Date.now();
    if (ms <= 0) {
      $("#countdown").innerHTML = `<p class="countdown-complete">॥ शुभ विवाह ॥ Today, forever begins.</p>`;
      clearInterval(iv);
      return;
    }
    set(el.d, pad(ms / 864e5 | 0));
    set(el.h, pad((ms / 36e5 | 0) % 24));
    set(el.m, pad((ms / 6e4 | 0) % 60));
    set(el.s, pad((ms / 1e3 | 0) % 60));
  };
  const iv = setInterval(upd, 1000);
  upd();
})();

/* ═══════════════ EVENT CARDS ═════════════════════════════ */
(() => {
  const ICONS = {
    haldi: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M4 13h16c0 3.5-2.5 7-8 7s-8-3.5-8-7z"/><path d="M12 10c0-2.4 1.8-3.2 1.8-5M9 10c0-1.7 1.2-2.3 1.2-3.8M15 10c0-1.7 1.2-2.3 1.2-3.8"/></svg>`,
    sangeet: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M9 18V6l10-2v11"/><circle cx="6.5" cy="18" r="2.5"/><circle cx="16.5" cy="15" r="2.5"/></svg>`,
    wedding: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M12 3c2.8 3.2 5 5.9 5 9a5 5 0 0 1-10 0c0-3.1 2.2-5.8 5-9z"/><path d="M12 21v-4"/><path d="M7 21h10"/></svg>`,
    reception: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M7 3h4l-1.2 7a2.8 2.8 0 1 1-1.6 0z" transform="rotate(-14 9 12)"/><path d="M13 3h4l-1.2 7a2.8 2.8 0 1 1-1.6 0z" transform="rotate(14 15 12)"/><path d="M12 2l.5 1.5M10 1.5l0 1"/></svg>`,
  };
  const wrap = $("#event-cards");
  const cards = [];
  let currentDate = "";
  CFG.events.forEach((ev) => {
    if (ev.date !== currentDate) {
      currentDate = ev.date;
      const day = document.createElement("h3");
      day.className = "event-day";
      day.textContent = ev.date;
      wrap.appendChild(day);
    }
    const card = document.createElement("article");
    card.className = "event-card";
    card.style.setProperty("--accent", ev.accent);
    card.innerHTML = `
      <span class="event-ico" aria-hidden="true">${ICONS[ev.icon] || ICONS.wedding}</span>
      <h4 class="event-name"></h4>
      <p class="event-meta"></p>`;
    card.querySelector(".event-name").textContent = ev.name;
    const meta = card.querySelector(".event-meta");
    if (ev.time) {
      const time = document.createElement("b");
      time.textContent = ev.time;
      meta.append(time, document.createElement("br"));
    }
    meta.append(ev.venue);
    if (ev.address) meta.append(document.createElement("br"), ev.address);
    if (ev.mapsQuery) {
      const link = document.createElement("a");
      link.className = "event-map";
      link.href = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(ev.mapsQuery);
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = "Open in Google Maps";
      link.setAttribute("aria-label", "Open " + ev.name + " location in Google Maps");
      card.appendChild(link);
    }
    wrap.appendChild(card);
    cards.push(card);
  });

  let chimed = 0;
  const show = (el, stagger) => setTimeout(() => {
    el.classList.add("shown");
    if (chimed++ < 4) audio.chime();
  }, 120 * stagger);
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        show(e.target, cards.indexOf(e.target));
        io.unobserve(e.target);
      });
    }, { threshold: 0.25 });
    cards.forEach((el) => io.observe(el));
  } else {
    cards.forEach((el, i) => show(el, i));
  }
})();

/* ═══════════════ SCRATCH CARD ════════════════════════════ */
(() => {
  const heading = $("#scratch-heading");
  const message = $("#scratch-message");
  const canvas = $("#scratch-foil");
  const wrap = $("#scratch-wrap");
  if (!heading || !message || !canvas || !wrap || !CFG.scratch) return;
  heading.textContent = CFG.scratch.heading;
  message.textContent = CFG.scratch.message;

  const c = canvas.getContext("2d");
  let painted = false, cleared = false, strokes = 0, foilW = 0, foilH = 0;

  /* Run the decorative border only while the card is near the viewport. */
  if (!REDUCED && "IntersectionObserver" in window) {
    const borderObserver = new IntersectionObserver(([entry]) => {
      wrap.classList.toggle("scratch-border-active", entry.isIntersecting);
    }, { rootMargin: "14% 0px", threshold: 0.04 });
    borderObserver.observe(wrap);
  } else if (!REDUCED) wrap.classList.add("scratch-border-active");

  const paintFoil = () => {
    foilW = wrap.clientWidth; foilH = wrap.clientHeight;
    const w = canvas.width = foilW * DPR;
    const h = canvas.height = foilH * DPR;
    const g = c.createLinearGradient(0, 0, w * 0.3, h);
    g.addColorStop(0, "#D9B45C"); g.addColorStop(0.35, "#B8923B");
    g.addColorStop(0.55, "#EBD292"); g.addColorStop(0.8, "#C09A40");
    g.addColorStop(1, "#A37F2E");
    c.fillStyle = g;
    c.fillRect(0, 0, w, h);
    // speckle texture
    c.globalAlpha = 0.12;
    for (let i = 0, count = IS_TOUCH ? 320 : 600; i < count; i++) {
      c.fillStyle = Math.random() > 0.5 ? "#fff" : "#6b5215";
      c.fillRect(Math.random() * w, Math.random() * h, 2, 2);
    }
    c.globalAlpha = 1;
    // ornament ring + text
    c.strokeStyle = "rgba(90,60,10,.55)";
    c.lineWidth = 2 * DPR;
    c.setLineDash([6 * DPR, 5 * DPR]);
    c.beginPath(); c.arc(w / 2, h / 2, Math.min(w, h) * 0.3, 0, Math.PI * 2); c.stroke();
    c.setLineDash([]);
    c.fillStyle = "rgba(74,15,34,.78)";
    c.font = `600 ${15 * DPR}px Cinzel, serif`;
    c.textAlign = "center";
    c.fillText("SCRATCH HERE", w / 2, h / 2 - 6 * DPR);
    c.font = `${24 * DPR}px serif`;
    c.fillText("🪙", w / 2, h / 2 + 26 * DPR);
    painted = true;
  };
  const prepareFoil = () => { if (!painted && !cleared) paintFoil(); };
  if ("IntersectionObserver" in window) {
    const foilObserver = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      prepareFoil();
      foilObserver.disconnect();
    }, { rootMargin: "700px 0px" });
    foilObserver.observe(wrap);
  } else setTimeout(prepareFoil, 0);
  /* Repaint only on REAL size changes (rotation) — a repaint wipes scratch
     progress, and mobile URL-bar collapse fires tiny resizes constantly. */
  new ResizeObserver(() => {
    if (!painted || cleared || strokes > 0) return;   // never wipe scratch progress
    const dw = Math.abs(wrap.clientWidth - foilW), dh = Math.abs(wrap.clientHeight - foilH);
    if (dw < 24 && dh < 24) return;
    foilW = wrap.clientWidth; foilH = wrap.clientHeight;
    paintFoil();
  }).observe(wrap);

  /* Track the scratched area on a tiny logical grid. This avoids expensive
     full-canvas pixel readbacks while a finger is moving. */
  const GRID_W = 36, GRID_H = 48;
  const scratched = new Uint8Array(GRID_W * GRID_H);
  let scratchedCells = 0;
  const markScratched = (from, to) => {
    const ax = from ? from.x / canvas.width * GRID_W : to.x / canvas.width * GRID_W;
    const ay = from ? from.y / canvas.height * GRID_H : to.y / canvas.height * GRID_H;
    const bx = to.x / canvas.width * GRID_W;
    const by = to.y / canvas.height * GRID_H;
    const rx = Math.max(1, c.lineWidth * 0.5 / canvas.width * GRID_W);
    const ry = Math.max(1, c.lineWidth * 0.5 / canvas.height * GRID_H);
    const steps = Math.max(1, Math.ceil(Math.hypot(bx - ax, by - ay) / Math.max(1, Math.min(rx, ry) * .55)));
    for (let step = 0; step <= steps; step++) {
      const t = step / steps;
      const gx = lerp(ax, bx, t), gy = lerp(ay, by, t);
      const x0 = Math.max(0, Math.floor(gx - rx)), x1 = Math.min(GRID_W - 1, Math.ceil(gx + rx));
      const y0 = Math.max(0, Math.floor(gy - ry)), y1 = Math.min(GRID_H - 1, Math.ceil(gy + ry));
      for (let y = y0; y <= y1; y++) {
        for (let x = x0; x <= x1; x++) {
          const dx = (x + .5 - gx) / rx, dy = (y + .5 - gy) / ry;
          const cell = y * GRID_W + x;
          if (dx * dx + dy * dy <= 1 && !scratched[cell]) {
            scratched[cell] = 1;
            scratchedCells++;
          }
        }
      }
    }
    return scratchedCells / scratched.length > .55;
  };

  let last = null, scratchRect = null, activePointer = null;
  const DBG = /[?&]tick/.test(location.search) ? (window.__scratchDbg = { calls: 0, drawn: 0, blocked: "" }) : null;
  const scratch = (e) => {
    if (DBG) DBG.calls++;
    if (cleared || !painted) { if (DBG) DBG.blocked = `cleared=${cleared} painted=${painted}`; return; }
    if (DBG) DBG.drawn++;
    const r = scratchRect || canvas.getBoundingClientRect();
    const x = (e.clientX - r.left) * (canvas.width / r.width);
    const y = (e.clientY - r.top) * (canvas.height / r.height);
    c.globalCompositeOperation = "destination-out";
    c.lineWidth = 46 * DPR;
    c.lineCap = "round";
    c.beginPath();
    if (last) c.moveTo(last.x, last.y); else c.moveTo(x - 0.1, y);
    c.lineTo(x, y);
    c.stroke();
    c.globalCompositeOperation = "source-over";
    const enough = markScratched(last, { x, y });
    last = { x, y };
    audio.scratchNoise();
    if (++strokes % 4 === 0 && enough) reveal();
  };

  const reveal = () => {
    cleared = true;
    canvas.classList.add("cleared");
    wrap.classList.add("celebrate");
    // a small ceremony: three rising bells + petal fountain + shimmer flash
    audio.bell(520, 0.5, 2.6);
    setTimeout(() => audio.bell(660, 0.42, 2.4), 260);
    setTimeout(() => audio.bell(880, 0.36, 3.0), 540);
    if (navigator.vibrate) navigator.vibrate([30, 80, 30, 80, 60]);
    const r = wrap.getBoundingClientRect();
    petals.burst(r.left + r.width / 2, r.top + r.height / 3, IS_TOUCH ? 8 : 12);
    setTimeout(() => petals.burst(r.left + r.width / 2, r.top + r.height / 2, IS_TOUCH ? 5 : 8), 450);
    setTimeout(() => petals.burst(r.left + r.width / 2, r.top + r.height / 4, IS_TOUCH ? 4 : 6), 900);
  };

  canvas.addEventListener("pointerdown", (e) => {
    e.preventDefault();
    prepareFoil();
    try { canvas.setPointerCapture(e.pointerId); } catch {}
    activePointer = e.pointerId;
    scratchRect = canvas.getBoundingClientRect();
    last = null;
    scratch(e);
  }, { passive: false });
  canvas.addEventListener("pointermove", (e) => {
    if (e.pointerId !== activePointer) return;
    e.preventDefault();
    const coalesced = typeof e.getCoalescedEvents === "function" ? e.getCoalescedEvents() : null;
    const samples = coalesced?.length ? coalesced : [e];
    samples.forEach(scratch);
  }, { passive: false });
  ["pointerup", "pointercancel", "lostpointercapture"].forEach((eventName) => canvas.addEventListener(eventName, () => {
    activePointer = null;
    last = null;
    scratchRect = null;
  }));
})();

/* ═══════════════ SANCTUM — scroll-unlocked hidden film ═══ */
const sanctum = (() => {
  const sec = $("#sanctum");
  if (!sec || REDUCED) return { tick: () => {}, resize: () => {} };
  const S = CFG.sanctum;
  $("#sanctum-eyebrow").textContent = S.eyebrow;
  $("#sanctum-heading").textContent = S.heading;
  $("#sanctum-hint").textContent = S.hint;
  $("#sanctum-veil-text").textContent = S.veilText;
  const canvas = $("#sanctum-canvas");
  const draw = cinema.renderer(canvas, { cover: true, touch: IS_TOUCH });
  const store = cinema.store({
    ...S, name: "sanctum", touch: IS_TOUCH, saveData: SAVE_DATA,
    atlas: { src: "assets/scrub/sanctum.webp", columns: 8, width: 168, height: 224, step: 4 },
  });
  const progressEl = $("#sanctum-progress"), veilText = $("#sanctum-veil-text");
  const fill = $("#sanctum-fill");
  let state = "locked", inView = false, attempts = 0, cur = 0;
  let scrollStart = 0, scrollDistance = 1, progressFrame = -1;
  let lastTarget = 0, lastInput = -1;

  const measure = (rect = sec.getBoundingClientRect()) => {
    scrollStart = window.scrollY + rect.top;
    scrollDistance = Math.max(rect.height - vhPx * 100, 1);
  };

  const resize = () => {
    measure();
    draw.resize(canvas.clientWidth, canvas.clientHeight);
  };

  const load = () => {
    attempts++;
    state = "loading";
    sec.classList.add("loading");
    veilText.textContent = "Unfolding…";
    progressEl.classList.remove("hidden");
    store.prepare((f) => {
      progressEl.textContent = Math.round(f * 100) + "%";
    }).then(() => {
      state = "unlocked";
      resize();
      const target = clamp((scrollY - scrollStart) / scrollDistance, 0, 1) * (S.count - 1);
      cur = target;
      store.update(target, false);
      draw.paint(store.openingPreview());
      draw.paint(store.sample(target, true, false));
      store.start();
      sec.classList.remove("loading");
      sec.classList.add("unlocked");
      if (inView) {
        audio.bell(560, 0.5, 3.4);
        if (navigator.vibrate) navigator.vibrate([20, 60, 30]);
        setTimeout(() => {
          if (!inView) return;
          const r = sec.querySelector("#sanctum-portal").getBoundingClientRect();
          petals.burst(r.left + r.width / 2, r.top + r.height / 3, IS_TOUCH ? 8 : 12);
        }, 920);
      }
    }).catch(() => {
      state = "locked";
      sec.classList.remove("loading");
      veilText.textContent = S.veilText;
      progressEl.classList.add("hidden");
    });
  };

  new IntersectionObserver(([entry]) => {
    inView = entry.isIntersecting;
    store.setActive(inView);
    if (inView) {
      measure(entry.boundingClientRect);
      if (state === "locked" && attempts < 2) load();
    }
  }, { rootMargin: SAVE_DATA ? "250px 0px" : "850px 0px" }).observe(sec);

  const tick = (dt, now, y, allowBlend) => {
    if (state !== "unlocked" || !inView) return;
    const target = clamp((y - scrollStart) / scrollDistance, 0, 1) * (S.count - 1);
    if (target !== lastTarget || lastInput < 0) { lastTarget = target; lastInput = now; }
    const gap = Math.abs(target - cur);
    cur = gap < .025 ? target : lerp(cur, target, 1 - Math.exp(-dt * (gap > 8 ? 32 : 23)));
    const still = Math.abs(target - cur) < .13 && now - lastInput > 165;
    store.update(target, false);
    draw.paint(store.sample(still ? target : cur, still, allowBlend));
    const i = Math.round(cur);
    if (i !== progressFrame) {
      progressFrame = i;
      fill.style.transform = `scaleX(${(i / (S.count - 1)).toFixed(3)})`;
    }
  };
  return { tick, resize };
})();

/* ═══════════════ DECOR REVEAL — no per-frame parallax ════ */
(() => {
  const io = new IntersectionObserver((es) => {
    es.forEach((e) => {
      e.target.classList.toggle("shown", e.isIntersecting);
    });
  }, { threshold: 0.04 });
  document.querySelectorAll(".decor, .foot-diya").forEach((el) => io.observe(el));
})();

/* ═══════════════ VENUE + RSVP ════════════════════════════ */
(() => {
  const venueName = $("#venue-name");
  const venueAddress = $("#venue-address");
  const mapsButton = $("#maps-btn");
  if (venueName) venueName.textContent = CFG.venue.name;
  if (venueAddress) venueAddress.textContent = CFG.venue.address;
  const mapsHref = CFG.venue.mapsUrl || ("https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(CFG.venue.mapsQuery));
  if (mapsButton) mapsButton.href = mapsHref;
  const mapLink = $("#map-link");
  if (mapLink) mapLink.href = mapsHref;
  const rsvpDeadline = $("#rsvp-deadline");
  if (rsvpDeadline && CFG.rsvp) rsvpDeadline.textContent = CFG.rsvp.deadline;

  const modal = $("#rsvp-modal"), slot = $("#rsvp-frame-slot"), rsvpButton = $("#rsvp-btn");
  if (!modal || !slot || !rsvpButton || !CFG.rsvp) return;
  const hasRealForm = CFG.rsvp.formUrl && !/PLACEHOLDER/i.test(CFG.rsvp.formUrl);
  let built = false, returnFocus = null;
  const buildRsvp = () => {
    if (built) return;
    built = true;
    if (hasRealForm) {
      const f = document.createElement("iframe");
      f.src = CFG.rsvp.formUrl;
      f.loading = "lazy";
      f.title = "Wedding RSVP form";
      slot.appendChild(f);
      return;
    }
    // Native royal RSVP (no Google Form configured yet)
    slot.innerHTML = `
      <form id="rsvp-form" novalidate>
        <label class="rf-label">Your name
          <input class="rf-input" name="name" type="text" autocomplete="name" placeholder="Guest of honour" required>
        </label>
        <div class="rf-label">Will you grace the occasion?
          <div class="rf-choices">
            <label class="rf-chip"><input type="radio" name="attending" value="yes" checked><span>Joyfully accepts</span></label>
            <label class="rf-chip"><input type="radio" name="attending" value="no"><span>Regretfully declines</span></label>
          </div>
        </div>
        <label class="rf-label">Guests attending
          <select class="rf-input" name="count">
            <option>1</option><option>2</option><option>3</option><option>4</option><option>5+</option>
          </select>
        </label>
        <label class="rf-label">A note for the couple <span class="rf-opt">(optional)</span>
          <textarea class="rf-input" name="note" rows="2" placeholder="Blessings, wishes, song requests…"></textarea>
        </label>
        <button class="btn-maroon rf-submit" type="submit">Send with love</button>
      </form>
      <div id="rsvp-done" class="hidden">
        <p class="rf-done-mark">🪷</p>
        <h4 class="gold-foil">धन्यवाद · Thank you</h4>
        <p class="rf-done-text">Your response has been received.<br>We can't wait to celebrate with you.</p>
      </div>`;
    slot.querySelector("#rsvp-form").addEventListener("submit", (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(e.target).entries());
      if (!data.name || !data.name.trim()) { e.target.querySelector("[name=name]").focus(); return; }
      try { localStorage.setItem("wed-rsvp", JSON.stringify({ ...data, at: new Date().toISOString() })); } catch {}
      e.target.classList.add("hidden");
      slot.querySelector("#rsvp-done").classList.remove("hidden");
      audio.bell(660, 0.45, 2.6);
      setTimeout(() => audio.bell(880, 0.32, 2.4), 300);
      if (navigator.vibrate) navigator.vibrate([25, 60, 40]);
      const r = modal.querySelector(".modal-sheet").getBoundingClientRect();
      petals.burst(r.left + r.width / 2, r.top + 80, IS_TOUCH ? 7 : 10);
    });
  };
  rsvpButton.addEventListener("click", () => {
    returnFocus = document.activeElement;
    buildRsvp();
    modal.classList.remove("hidden");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    audio.chime();
    requestAnimationFrame(() => (slot.querySelector("input, select, textarea, button") || $("#rsvp-close")).focus());
  });
  const close = () => {
    modal.classList.add("hidden");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (returnFocus && returnFocus.focus) returnFocus.focus();
  };
  $("#rsvp-close").addEventListener("click", close);
  modal.addEventListener("click", (e) => { if (e.target === modal) close(); });
  addEventListener("keydown", (e) => {
    if (modal.classList.contains("hidden")) return;
    if (e.key === "Escape") { close(); return; }
    if (e.key !== "Tab") return;
    const focusable = [...modal.querySelectorAll('button, input, select, textarea, iframe, [href], [tabindex]:not([tabindex="-1"])')]
      .filter((el) => !el.disabled && el.offsetParent !== null);
    if (!focusable.length) return;
    const first = focusable[0], last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });
})();

/* ═══════════════ FILM BANDS — lazy cinematic loops ═══════ */
const finale = (() => {
  const el = document.getElementById("finale");
  let done = false;
  const reveal = () => {
    if (done || !el) return;
    done = true;
    el.classList.add("shown");
    audio.chime();
  };
  let tick = () => {};
  if (el && "IntersectionObserver" in window) {
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { reveal(); io.disconnect(); }
    }, { rootMargin: "0px 0px -22% 0px", threshold: 0.01 });
    io.observe(el);
  } else if (el) {
    tick = () => { if (el.getBoundingClientRect().top < innerHeight * 0.78) reveal(); };
  }
  return { tick };
})();

/* The invitation and 3D world stay as separate routes. This transition starts
   the heavier world only after a deliberate tap, then releases this page. */
(() => {
  const link = $("#world-portal-link"), overlay = $("#portal-transition");
  if (!link || !overlay) return;
  const isPrimaryActivation = (e) => !e.defaultPrevented && e.button === 0
    && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey;
  const rememberAudioIntent = () => {
    try {
      const intent = audio.isMuted() ? "muted" : "play";
      sessionStorage.setItem("wedding-world-audio-intent", intent);
      // The world starts its own score from the beginning; never carry this
      // page's media time into the 3D scene.
      sessionStorage.removeItem("wedding-world-audio-state");
    } catch { /* private modes may restrict storage; the world still opens directly */ }
  };
  let leaving = false, navTimer = 0;
  const reset = () => {
    const shouldRestore = leaving || document.body.classList.contains("portal-opening");
    leaving = false;
    clearTimeout(navTimer);
    document.body.classList.remove("portal-opening");
    document.body.removeAttribute("aria-busy");
    link.removeAttribute("aria-disabled");
    overlay.setAttribute("aria-hidden", "true");
    overlay.style.removeProperty("--portal-x");
    overlay.style.removeProperty("--portal-y");
    if (shouldRestore) audio.restoreAfterWorld();
  };
  addEventListener("pagehide", () => { if (leaving) audio.pauseForWorld(); });
  addEventListener("pageshow", reset);

  if (REDUCED) {
    link.addEventListener("click", (e) => {
      if (!isPrimaryActivation(e)) return;
      leaving = true;
      rememberAudioIntent();
      audio.pauseForWorld();
    });
    return;
  }

  link.addEventListener("click", (e) => {
    if (!isPrimaryActivation(e)) return;
    e.preventDefault();
    if (leaving) return;
    leaving = true;
    rememberAudioIntent();

    const visual = link.querySelector(".world-portal-visual");
    const r = (visual || link).getBoundingClientRect();
    overlay.style.setProperty("--portal-x", `${r.left + r.width / 2}px`);
    overlay.style.setProperty("--portal-y", `${r.top + r.height / 2}px`);
    overlay.setAttribute("aria-hidden", "false");
    document.body.classList.add("portal-opening");
    document.body.setAttribute("aria-busy", "true");
    link.setAttribute("aria-disabled", "true");

    audio.bell(540, 0.22, 1.3);
    audio.whoosh(0.9);
    audio.fadeForWorld(360);
    document.querySelectorAll("video").forEach((video) => video.pause());

    navTimer = setTimeout(() => {
      // Safari may keep a page alive briefly during same-tab navigation.
      // Stop the invitation score synchronously before the world takes over.
      audio.pauseForWorld();
      try { location.assign(link.href); }
      catch { location.href = link.href; }
    }, 820);
  });
})();

const films = (() => {
  const vids = [...document.querySelectorAll(".film-band video")];
  const visible = new Set();
  const timers = new WeakMap();
  const pauseAll = () => vids.forEach((v) => { if (!v.paused) v.pause(); });
  const wake = (v) => {
    if (!v.poster && v.dataset.poster) v.poster = v.dataset.poster;
    if (!v.src && v.dataset.src) v.src = v.dataset.src;
    if (v.paused) v.play().catch(() => {});
  };
  let tick = () => {};
  if ("IntersectionObserver" in window) {
    const posterObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const v = entry.target;
        if (!v.poster && v.dataset.poster) v.poster = v.dataset.poster;
        posterObserver.unobserve(v);
      });
    }, { rootMargin: "600px 0px" });
    const playObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const v = entry.target;
        clearTimeout(timers.get(v));
        if (entry.isIntersecting) {
          visible.add(v);
          const timer = setTimeout(() => {
            if (visible.has(v) && !document.hidden) wake(v);
          }, IS_TOUCH ? 160 : 0);
          timers.set(v, timer);
        } else {
          visible.delete(v);
          if (!v.paused) v.pause();
        }
      });
    }, { rootMargin: IS_TOUCH ? "40px 0px" : "140px 0px", threshold: 0.01 });
    vids.forEach((v) => { posterObserver.observe(v); playObserver.observe(v); });
  } else {
    let acc = 0;
    tick = (dt) => {
      acc += dt;
      if (acc < 0.5 || !vids.length) return;
      acc = 0;
      vids.forEach((v) => {
        const r = v.getBoundingClientRect();
        const near = r.bottom > -100 && r.top < innerHeight + 100;
        if (near) wake(v);
        else if (!v.paused) v.pause();
      });
    };
  }
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) pauseAll();
    else visible.forEach(wake);
  });
  addEventListener("pagehide", pauseAll);
  return { tick };
})();

/* ═══════════════ SOUND TOGGLE ════════════════════════════ */
(() => {
  const b = $("#sound-toggle");
  if (audio.isMuted()) b.classList.add("muted");
  b.addEventListener("click", () => {
    if (!audio.hasBgm()) {
      audio.init();
      if (audio.isMuted()) b.classList.toggle("muted", audio.toggleMute());
      audio.startBgm();
      if (!audio.isMuted()) audio.chime();
      return;
    }
    audio.init();
    b.classList.toggle("muted", audio.toggleMute());
    if (!audio.isMuted()) audio.chime();
  });
})();

/* ═══════════════ FINISHING TOUCHES ═══════════════════════ */
(() => {
  /* Names → letter spans for the cascade entrance */
  const names = $(".names");
  if (names) {
    names.setAttribute("aria-label", names.textContent.trim());
    let li = 0;
    const split = (node) => {
      [...node.childNodes].forEach((n) => {
        if (n.nodeType === 3) {
          const frag = document.createDocumentFragment();
          for (const ch of n.textContent) {
            if (ch.trim() === "") { frag.appendChild(document.createTextNode(ch)); continue; }
            const s = document.createElement("span");
            s.className = "ltr";
            s.style.setProperty("--li", li++);
            s.textContent = ch;
            s.setAttribute("aria-hidden", "true");
            frag.appendChild(s);
          }
          node.replaceChild(frag, n);
        } else if (n.nodeType === 1) {
          n.classList.add("ltr");
          n.style.setProperty("--li", li++);
          n.setAttribute("aria-hidden", "true");
        }
      });
    };
    split(names);
  }

  /* Self-drawing flourish under every section title */
  const FLOURISH = `<svg class="flourish" viewBox="0 0 150 26" aria-hidden="true">
    <path d="M5 13 C 30 13, 40 4, 62 12"/><path d="M145 13 C 120 13, 110 22, 88 14"/>
    <circle cx="75" cy="13" r="7.5"/>
    <rect class="gem" x="71" y="9" width="8" height="8"/>
  </svg>`;
  document.querySelectorAll(".sec-head").forEach((h) => {
    h.insertAdjacentHTML("beforeend", FLOURISH);
  });
  const headIO = new IntersectionObserver((es) => {
    es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("shown"); headIO.unobserve(e.target); } });
  }, { threshold: 0.5 });
  document.querySelectorAll(".sec-head").forEach((h) => headIO.observe(h));

  /* One quiet entrance per major glass surface. Nothing follows the scroll
     frame-by-frame: once visible, each observer releases its element. */
  const revealItems = document.querySelectorAll(
    ".family-pair, .countdown-card, .film-band, #scratch-wrap, .venue-card, .sarbala-card, .rsvp-block"
  );
  revealItems.forEach((el) => el.classList.add("soft-reveal"));
  if (REDUCED || !("IntersectionObserver" in window)) {
    revealItems.forEach((el) => el.classList.add("revealed"));
  } else {
    const revealIO = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("revealed");
        revealIO.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -8%", threshold: 0.12 });
    revealItems.forEach((el) => revealIO.observe(el));
  }

  /* Tap sparkle — a pinch of petals wherever a finger lands */
  let lastSpark = 0;
  document.addEventListener("pointerdown", (e) => {
    const t = performance.now();
    if (t - lastSpark < 450 || REDUCED) return;
    lastSpark = t;
    petals.burst(e.clientX, e.clientY, IS_TOUCH ? 1 : 2);
  }, { passive: true });
})();

/* ═══════════════ MANDALA (loader SVG petals) ═════════════ */
(() => {
  const ring = $("#petal-ring");
  const NS = "http://www.w3.org/2000/svg";
  for (let i = 0; i < 24; i++) {
    const p = document.createElementNS(NS, "path");
    p.setAttribute("d", "M0,-88 C6,-76 6,-66 0,-58 C-6,-66 -6,-76 0,-88 Z");
    p.setAttribute("fill", i % 2 ? "rgba(201,162,75,.5)" : "none");
    p.setAttribute("stroke", "currentColor");
    p.setAttribute("stroke-width", ".7");
    p.setAttribute("transform", `rotate(${i * 15})`);
    ring.appendChild(p);
  }
})();

/* ═══════════════ MAIN LOOP + FPS GUARD ═══════════════════ */
const threadEl = $("#thread");
const doc = document.documentElement;
let pageScrollRange = Math.max(doc.scrollHeight - vhPx * 100, 1);
const refreshScrollRange = () => { pageScrollRange = Math.max(doc.scrollHeight - vhPx * 100, 1); };
const refreshPageMetrics = () => {
  refreshScrollRange();
  sanctum.resize();
};
if ("ResizeObserver" in window) new ResizeObserver(refreshPageMetrics).observe(document.body);
addEventListener("load", refreshPageMetrics, { once: true });
let lastT = performance.now(), fpsAcc = 0, fpsN = 0, degraded = false, lastSp = -1, lastY = -1;
const mainLoop = (t) => {
  const elapsed = Math.max(0, (t - lastT) / 1000);
  const dt = Math.min(elapsed, 0.05);
  lastT = t;
  const y = window.scrollY;
  const scrolling = Math.abs(y - lastY) > 1;
  lastY = y;
  const blend = !degraded && !SAVE_DATA;
  const vel = scrub.tick(dt, t, y, blend);
  petals.addGust(Math.min(vel * 0.004, 0.4));
  if (vel > 7) audio.whoosh(Math.min(vel / 26, 1));   // airy gust on brisk scrolls
  sanctum.tick(dt, t, y, blend);
  petals.step(dt, scrolling);
  films.tick(dt);
  finale.tick();
  // golden scroll thread
  const sp = clamp(y / pageScrollRange, 0, 1);
  if (Math.abs(sp - lastSp) > 0.0004) {
    threadEl.style.setProperty("--sp", sp.toFixed(4));
    lastSp = sp;
  }
  // fps monitor
  if (elapsed < .25) { fpsAcc += elapsed; fpsN++; }
  if (fpsAcc > 2 && !degraded) {
    if (fpsN / fpsAcc < 44) { degraded = true; petals.setLowPerf(); }
    fpsAcc = 0; fpsN = 0;
  }
  RAF(mainLoop);
};

/* ═══════════════ BOOT — the seal opens ═══════════════════ */
(() => {
  const loader = $("#loader"), sealBtn = $("#seal-btn");
  const pctEl = $("#loader-pct"), copyEl = $("#loader-copy");
  const statusEl = $("#loader-status"), tapEl = $("#loader-tap");
  const retryEl = $("#loader-retry");
  const ring = $("#progress-ring");
  const CIRC = 414.7;

  scrub.resize();
  petals.resize();

  if (REDUCED) {
    // Reduced motion: static invitation, no film scrub, no petals
    loader.classList.add("gone");
    document.body.classList.remove("is-loading");
    $("#hero").classList.add("entered");
    $("#hero").style.height = "calc(var(--vh) * 100)";
    const img = new Image();
    img.onload = () => { frames.prime(img); scrub.firstPaint(); };
    img.src = CFG.frames.loPath + CFG.frames.prefix + "001" + CFG.frames.ext;
    $("#sound-toggle").classList.remove("hidden");
    return;
  }

  const ringPetals = [...document.querySelectorAll("#petal-ring path")];
  ringPetals.forEach((p) => { p.style.opacity = .18; p.style.transition = "opacity .6s ease"; });
  const slowNotice = setTimeout(() => {
    copyEl.textContent = "Smoothing every frame…";
  }, 12000);
  retryEl.addEventListener("click", () => location.reload(), { once: true });
  frames.prepare((f) => {
    pctEl.textContent = Math.round(f * 100) + "%";
    ring.style.strokeDashoffset = CIRC * (1 - f);
    // the mandala blooms petal by petal as the world loads
    const lit = Math.round(f * ringPetals.length);
    for (let k = 0; k < lit; k++) ringPetals[k].style.opacity = 1;
  }).then(() => {
    clearTimeout(slowNotice);
    try { scrub.firstPaint(); } catch { /* paint must never block entry */ }
    statusEl.classList.add("hidden");
    tapEl.classList.remove("hidden");
    sealBtn.disabled = false;
    // Use the natural pause before the seal tap to decode the opening runway.
    // The queue remains bounded, so this adds readiness rather than a bulk preload.
    if (!SAVE_DATA) frames.start();
  }).catch(() => {
    clearTimeout(slowNotice);
    copyEl.textContent = "Preparation paused";
    pctEl.textContent = "";
    retryEl.classList.remove("hidden");
  });

  sealBtn.addEventListener("click", () => {
    audio.init();
    audio.bell(432, 0.55, 4);                // the seal breaks with a temple bell
    setTimeout(() => audio.bell(648, 0.3, 3), 350);
    audio.whoosh(1);                         // doors part with a breath of air
    audio.startBgm();                        // the score begins inside the tap gesture
    loader.classList.add("open");
    $("#hero").classList.add("entered");     // names cascade in as the doors part
    frames.start();
    setTimeout(() => {
      loader.classList.add("gone");
      document.body.classList.remove("is-loading");
      $("#sound-toggle").classList.remove("hidden");
      $("#thread").classList.add("on");
      lastT = performance.now();
      RAF(mainLoop);
      // Let the opening frame runway and soundtrack settle before ambient petals begin.
      setTimeout(() => petals.start(), IS_TOUCH ? 3500 : 2500);
    }, 1500);
  }, { once: true });
})();

})();
