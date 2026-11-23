(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Dc="169",us={ROTATE:0,DOLLY:1,PAN:2},_i={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Jd=0,bl=1,$d=2,Uc=1,pu=2,qn=3,In=0,Ge=1,fe=2,Jn=0,ds=1,Qs=2,Tl=3,Al=4,Qd=5,Pi=100,tf=101,ef=102,nf=103,sf=104,of=200,rf=201,af=202,cf=203,ka=204,Ga=205,lf=206,hf=207,uf=208,df=209,ff=210,pf=211,mf=212,gf=213,_f=214,Ha=0,Va=1,Wa=2,xs=3,Xa=4,Ya=5,qa=6,Ka=7,mu=0,vf=1,xf=2,vi=0,gu=1,_u=2,vu=3,Nc=4,Mf=5,xu=6,Mu=7,yu=300,Ms=301,ys=302,ur=303,Za=304,Ar=306,Ui=1e3,Zn=1001,ja=1002,tn=1003,yf=1004,So=1005,dn=1006,Yr=1007,Ii=1008,ti=1009,Su=1010,wu=1011,to=1012,Fc=1013,Ni=1014,Nn=1015,$n=1016,Oc=1017,Bc=1018,Ss=1020,Eu=35902,bu=1021,Tu=1022,Rn=1023,Au=1024,Ru=1025,fs=1026,ws=1027,zc=1028,kc=1029,Cu=1030,Gc=1031,Hc=1033,tr=33776,er=33777,nr=33778,ir=33779,Ja=35840,$a=35841,Qa=35842,tc=35843,ec=36196,nc=37492,ic=37496,sc=37808,oc=37809,rc=37810,ac=37811,cc=37812,lc=37813,hc=37814,uc=37815,dc=37816,fc=37817,pc=37818,mc=37819,gc=37820,_c=37821,sr=36492,vc=36494,xc=36495,Pu=36283,Mc=36284,yc=36285,Sc=36286,Sf=3200,wf=3201,Lu=0,Ef=1,gi="",En="srgb",Mi="srgb-linear",Vc="display-p3",Rr="display-p3-linear",dr="linear",ye="srgb",fr="rec709",pr="p3",Vi=7680,Rl=519,bf=512,Tf=513,Af=514,Iu=515,Rf=516,Cf=517,Pf=518,Lf=519,Cl=35044,Wc=35048,Pl="300 es",jn=2e3,mr=2001;class Bi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}}const He=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ll=1234567;const qs=Math.PI/180,eo=180/Math.PI;function zi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(He[i&255]+He[i>>8&255]+He[i>>16&255]+He[i>>24&255]+"-"+He[t&255]+He[t>>8&255]+"-"+He[t>>16&15|64]+He[t>>24&255]+"-"+He[e&63|128]+He[e>>8&255]+"-"+He[e>>16&255]+He[e>>24&255]+He[n&255]+He[n>>8&255]+He[n>>16&255]+He[n>>24&255]).toLowerCase()}function Ue(i,t,e){return Math.max(t,Math.min(e,i))}function Xc(i,t){return(i%t+t)%t}function If(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Df(i,t,e){return i!==t?(e-i)/(t-i):0}function Ks(i,t,e){return(1-e)*i+e*t}function Uf(i,t,e,n){return Ks(i,t,1-Math.exp(-e*n))}function Nf(i,t=1){return t-Math.abs(Xc(i,t*2)-t)}function Ff(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Of(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Bf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function zf(i,t){return i+Math.random()*(t-i)}function kf(i){return i*(.5-Math.random())}function Gf(i){i!==void 0&&(Ll=i);let t=Ll+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Hf(i){return i*qs}function Vf(i){return i*eo}function Wf(i){return(i&i-1)===0&&i!==0}function Xf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Yf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function qf(i,t,e,n,s){const o=Math.cos,r=Math.sin,a=o(e/2),c=r(e/2),l=o((t+n)/2),h=r((t+n)/2),d=o((t-n)/2),p=r((t-n)/2),f=o((n-t)/2),g=r((n-t)/2);switch(s){case"XYX":i.set(a*h,c*d,c*p,a*l);break;case"YZY":i.set(c*p,a*h,c*d,a*l);break;case"ZXZ":i.set(c*d,c*p,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function rs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function qe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Pe={DEG2RAD:qs,RAD2DEG:eo,generateUUID:zi,clamp:Ue,euclideanModulo:Xc,mapLinear:If,inverseLerp:Df,lerp:Ks,damp:Uf,pingpong:Nf,smoothstep:Ff,smootherstep:Of,randInt:Bf,randFloat:zf,randFloatSpread:kf,seededRandom:Gf,degToRad:Hf,radToDeg:Vf,isPowerOfTwo:Wf,ceilPowerOfTwo:Xf,floorPowerOfTwo:Yf,setQuaternionFromProperEuler:qf,normalize:qe,denormalize:rs};class at{constructor(t=0,e=0){at.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*s+t.x,this.y=o*s+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ee{constructor(t,e,n,s,o,r,a,c,l){ee.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,c,l)}set(t,e,n,s,o,r,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=o,h[5]=c,h[6]=n,h[7]=r,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],p=n[2],f=n[5],g=n[8],_=s[0],m=s[3],u=s[6],M=s[1],v=s[4],y=s[7],A=s[2],E=s[5],T=s[8];return o[0]=r*_+a*M+c*A,o[3]=r*m+a*v+c*E,o[6]=r*u+a*y+c*T,o[1]=l*_+h*M+d*A,o[4]=l*m+h*v+d*E,o[7]=l*u+h*y+d*T,o[2]=p*_+f*M+g*A,o[5]=p*m+f*v+g*E,o[8]=p*u+f*y+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*r*h-e*a*l-n*o*h+n*a*c+s*o*l-s*r*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=h*r-a*l,p=a*c-h*o,f=l*o-r*c,g=e*d+n*p+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(s*l-h*n)*_,t[2]=(a*n-s*r)*_,t[3]=p*_,t[4]=(h*e-s*c)*_,t[5]=(s*o-a*e)*_,t[6]=f*_,t[7]=(n*c-l*e)*_,t[8]=(r*e-n*o)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,o,r,a){const c=Math.cos(o),l=Math.sin(o);return this.set(n*c,n*l,-n*(c*r+l*a)+r+t,-s*l,s*c,-s*(-l*r+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(qr.makeScale(t,e)),this}rotate(t){return this.premultiply(qr.makeRotation(-t)),this}translate(t,e){return this.premultiply(qr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const qr=new ee;function Du(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function gr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Kf(){const i=gr("canvas");return i.style.display="block",i}const Il={};function or(i){i in Il||(Il[i]=!0,console.warn(i))}function Zf(i,t,e){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}function jf(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Jf(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Dl=new ee().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ul=new ee().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ds={[Mi]:{transfer:dr,primaries:fr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[En]:{transfer:ye,primaries:fr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Rr]:{transfer:dr,primaries:pr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Ul),fromReference:i=>i.applyMatrix3(Dl)},[Vc]:{transfer:ye,primaries:pr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Ul),fromReference:i=>i.applyMatrix3(Dl).convertLinearToSRGB()}},$f=new Set([Mi,Rr]),de={enabled:!0,_workingColorSpace:Mi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!$f.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Ds[t].toReference,s=Ds[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Ds[i].primaries},getTransfer:function(i){return i===gi?dr:Ds[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(Ds[t].luminanceCoefficients)}};function ps(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Kr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Wi;class Qf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Wi===void 0&&(Wi=gr("canvas")),Wi.width=t.width,Wi.height=t.height;const n=Wi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Wi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=gr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=ps(o[r]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ps(e[n]/255)*255):e[n]=ps(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let tp=0;class Uu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=zi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(Zr(s[r].image)):o.push(Zr(s[r]))}else o=Zr(s);n.url=o}return e||(t.images[this.uuid]=n),n}}function Zr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Qf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ep=0;class Ye extends Bi{constructor(t=Ye.DEFAULT_IMAGE,e=Ye.DEFAULT_MAPPING,n=Zn,s=Zn,o=dn,r=Ii,a=Rn,c=ti,l=Ye.DEFAULT_ANISOTROPY,h=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=zi(),this.name="",this.source=new Uu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ee,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==yu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ui:t.x=t.x-Math.floor(t.x);break;case Zn:t.x=t.x<0?0:1;break;case ja:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ui:t.y=t.y-Math.floor(t.y);break;case Zn:t.y=t.y<0?0:1;break;case ja:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ye.DEFAULT_IMAGE=null;Ye.DEFAULT_MAPPING=yu;Ye.DEFAULT_ANISOTROPY=1;class xe{constructor(t=0,e=0,n=0,s=1){xe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*s+r[15]*o,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,o;const c=t.elements,l=c[0],h=c[4],d=c[8],p=c[1],f=c[5],g=c[9],_=c[2],m=c[6],u=c[10];if(Math.abs(h-p)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+p)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(l+1)/2,y=(f+1)/2,A=(u+1)/2,E=(h+p)/4,T=(d+_)/4,C=(g+m)/4;return v>y&&v>A?v<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(v),s=E/n,o=T/n):y>A?y<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(y),n=E/s,o=C/s):A<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(A),n=T/o,s=C/o),this.set(n,s,o,e),this}let M=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(p-h)*(p-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(d-_)/M,this.z=(p-h)/M,this.w=Math.acos((l+f+u-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class np extends Bi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new Ye(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Uu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cn extends np{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Nu extends Ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ip extends Ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,o,r,a){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3];const p=o[r+0],f=o[r+1],g=o[r+2],_=o[r+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=p,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(d!==_||c!==p||l!==f||h!==g){let m=1-a;const u=c*p+l*f+h*g+d*_,M=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){const A=Math.sqrt(v),E=Math.atan2(A,u*M);m=Math.sin(m*E)/A,a=Math.sin(a*E)/A}const y=a*M;if(c=c*m+p*y,l=l*m+f*y,h=h*m+g*y,d=d*m+_*y,m===1-a){const A=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=A,l*=A,h*=A,d*=A}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,o,r){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=o[r],p=o[r+1],f=o[r+2],g=o[r+3];return t[e]=a*g+h*d+c*f-l*p,t[e+1]=c*g+h*p+l*d-a*f,t[e+2]=l*g+h*f+a*p-c*d,t[e+3]=h*g-a*d-c*p-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),d=a(o/2),p=c(n/2),f=c(s/2),g=c(o/2);switch(r){case"XYZ":this._x=p*h*d+l*f*g,this._y=l*f*d-p*h*g,this._z=l*h*g+p*f*d,this._w=l*h*d-p*f*g;break;case"YXZ":this._x=p*h*d+l*f*g,this._y=l*f*d-p*h*g,this._z=l*h*g-p*f*d,this._w=l*h*d+p*f*g;break;case"ZXY":this._x=p*h*d-l*f*g,this._y=l*f*d+p*h*g,this._z=l*h*g+p*f*d,this._w=l*h*d-p*f*g;break;case"ZYX":this._x=p*h*d-l*f*g,this._y=l*f*d+p*h*g,this._z=l*h*g-p*f*d,this._w=l*h*d+p*f*g;break;case"YZX":this._x=p*h*d+l*f*g,this._y=l*f*d+p*h*g,this._z=l*h*g-p*f*d,this._w=l*h*d-p*f*g;break;case"XZY":this._x=p*h*d-l*f*g,this._y=l*f*d-p*h*g,this._z=l*h*g+p*f*d,this._w=l*h*d+p*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],o=e[8],r=e[1],a=e[5],c=e[9],l=e[2],h=e[6],d=e[10],p=n+a+d;if(p>0){const f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(h-c)*f,this._y=(o-l)*f,this._z=(r-s)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(h-c)/f,this._x=.25*f,this._y=(s+r)/f,this._z=(o+l)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(o-l)/f,this._x=(s+r)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(r-s)/f,this._x=(o+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ue(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,o=t._z,r=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+r*a+s*l-o*c,this._y=s*h+r*c+o*a-n*l,this._z=o*h+r*l+n*c-s*a,this._w=r*h-n*a-s*c-o*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,o=this._z,r=this._w;let a=r*t._w+n*t._x+s*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=s,this._z=o,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*r+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*o+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-e)*h)/l,p=Math.sin(e*h)/l;return this._w=r*d+this._w*p,this._x=n*d+this._x*p,this._y=s*d+this._y*p,this._z=o*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Nl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Nl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*s,this.y=o[1]*e+o[4]*n+o[7]*s,this.z=o[2]*e+o[5]*n+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*s+o[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,o=t.x,r=t.y,a=t.z,c=t.w,l=2*(r*s-a*n),h=2*(a*e-o*s),d=2*(o*n-r*e);return this.x=e+c*l+r*d-a*h,this.y=n+c*h+a*l-o*d,this.z=s+c*d+o*h-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s,this.y=o[1]*e+o[5]*n+o[9]*s,this.z=o[2]*e+o[6]*n+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,o=t.z,r=e.x,a=e.y,c=e.z;return this.x=s*c-o*a,this.y=o*r-n*c,this.z=n*a-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return jr.copy(this).projectOnVector(t),this.sub(jr)}reflect(t){return this.sub(jr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const jr=new I,Nl=new Fn;class ki{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Mn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,Mn):Mn.fromBufferAttribute(o,r),Mn.applyMatrix4(t.matrixWorld),this.expandByPoint(Mn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),wo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),wo.copy(n.boundingBox)),wo.applyMatrix4(t.matrixWorld),this.union(wo)}const s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Mn),Mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Us),Eo.subVectors(this.max,Us),Xi.subVectors(t.a,Us),Yi.subVectors(t.b,Us),qi.subVectors(t.c,Us),ri.subVectors(Yi,Xi),ai.subVectors(qi,Yi),wi.subVectors(Xi,qi);let e=[0,-ri.z,ri.y,0,-ai.z,ai.y,0,-wi.z,wi.y,ri.z,0,-ri.x,ai.z,0,-ai.x,wi.z,0,-wi.x,-ri.y,ri.x,0,-ai.y,ai.x,0,-wi.y,wi.x,0];return!Jr(e,Xi,Yi,qi,Eo)||(e=[1,0,0,0,1,0,0,0,1],!Jr(e,Xi,Yi,qi,Eo))?!1:(bo.crossVectors(ri,ai),e=[bo.x,bo.y,bo.z],Jr(e,Xi,Yi,qi,Eo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Mn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Mn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(kn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const kn=[new I,new I,new I,new I,new I,new I,new I,new I],Mn=new I,wo=new ki,Xi=new I,Yi=new I,qi=new I,ri=new I,ai=new I,wi=new I,Us=new I,Eo=new I,bo=new I,Ei=new I;function Jr(i,t,e,n,s){for(let o=0,r=i.length-3;o<=r;o+=3){Ei.fromArray(i,o);const a=s.x*Math.abs(Ei.x)+s.y*Math.abs(Ei.y)+s.z*Math.abs(Ei.z),c=t.dot(Ei),l=e.dot(Ei),h=n.dot(Ei);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const sp=new ki,Ns=new I,$r=new I;class ho{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):sp.setFromPoints(t).getCenter(n);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ns.subVectors(t,this.center);const e=Ns.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ns,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):($r.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ns.copy(t.center).add($r)),this.expandByPoint(Ns.copy(t.center).sub($r))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Gn=new I,Qr=new I,To=new I,ci=new I,ta=new I,Ao=new I,ea=new I;class Fu{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Gn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Gn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Gn.copy(this.origin).addScaledVector(this.direction,e),Gn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Qr.copy(t).add(e).multiplyScalar(.5),To.copy(e).sub(t).normalize(),ci.copy(this.origin).sub(Qr);const o=t.distanceTo(e)*.5,r=-this.direction.dot(To),a=ci.dot(this.direction),c=-ci.dot(To),l=ci.lengthSq(),h=Math.abs(1-r*r);let d,p,f,g;if(h>0)if(d=r*c-a,p=r*a-c,g=o*h,d>=0)if(p>=-g)if(p<=g){const _=1/h;d*=_,p*=_,f=d*(d+r*p+2*a)+p*(r*d+p+2*c)+l}else p=o,d=Math.max(0,-(r*p+a)),f=-d*d+p*(p+2*c)+l;else p=-o,d=Math.max(0,-(r*p+a)),f=-d*d+p*(p+2*c)+l;else p<=-g?(d=Math.max(0,-(-r*o+a)),p=d>0?-o:Math.min(Math.max(-o,-c),o),f=-d*d+p*(p+2*c)+l):p<=g?(d=0,p=Math.min(Math.max(-o,-c),o),f=p*(p+2*c)+l):(d=Math.max(0,-(r*o+a)),p=d>0?o:Math.min(Math.max(-o,-c),o),f=-d*d+p*(p+2*c)+l);else p=r>0?-o:o,d=Math.max(0,-(r*p+a)),f=-d*d+p*(p+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Qr).addScaledVector(To,p),f}intersectSphere(t,e){Gn.subVectors(t.center,this.origin);const n=Gn.dot(this.direction),s=Gn.dot(Gn)-n*n,o=t.radius*t.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=n-r,c=n+r;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,o,r,a,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,p=this.origin;return l>=0?(n=(t.min.x-p.x)*l,s=(t.max.x-p.x)*l):(n=(t.max.x-p.x)*l,s=(t.min.x-p.x)*l),h>=0?(o=(t.min.y-p.y)*h,r=(t.max.y-p.y)*h):(o=(t.max.y-p.y)*h,r=(t.min.y-p.y)*h),n>r||o>s||((o>n||isNaN(n))&&(n=o),(r<s||isNaN(s))&&(s=r),d>=0?(a=(t.min.z-p.z)*d,c=(t.max.z-p.z)*d):(a=(t.max.z-p.z)*d,c=(t.min.z-p.z)*d),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Gn)!==null}intersectTriangle(t,e,n,s,o){ta.subVectors(e,t),Ao.subVectors(n,t),ea.crossVectors(ta,Ao);let r=this.direction.dot(ea),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;ci.subVectors(this.origin,t);const c=a*this.direction.dot(Ao.crossVectors(ci,Ao));if(c<0)return null;const l=a*this.direction.dot(ta.cross(ci));if(l<0||c+l>r)return null;const h=-a*ci.dot(ea);return h<0?null:this.at(h/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Me{constructor(t,e,n,s,o,r,a,c,l,h,d,p,f,g,_,m){Me.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,c,l,h,d,p,f,g,_,m)}set(t,e,n,s,o,r,a,c,l,h,d,p,f,g,_,m){const u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=s,u[1]=o,u[5]=r,u[9]=a,u[13]=c,u[2]=l,u[6]=h,u[10]=d,u[14]=p,u[3]=f,u[7]=g,u[11]=_,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Me().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Ki.setFromMatrixColumn(t,0).length(),o=1/Ki.setFromMatrixColumn(t,1).length(),r=1/Ki.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(o),d=Math.sin(o);if(t.order==="XYZ"){const p=r*h,f=r*d,g=a*h,_=a*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=f+g*l,e[5]=p-_*l,e[9]=-a*c,e[2]=_-p*l,e[6]=g+f*l,e[10]=r*c}else if(t.order==="YXZ"){const p=c*h,f=c*d,g=l*h,_=l*d;e[0]=p+_*a,e[4]=g*a-f,e[8]=r*l,e[1]=r*d,e[5]=r*h,e[9]=-a,e[2]=f*a-g,e[6]=_+p*a,e[10]=r*c}else if(t.order==="ZXY"){const p=c*h,f=c*d,g=l*h,_=l*d;e[0]=p-_*a,e[4]=-r*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=r*h,e[9]=_-p*a,e[2]=-r*l,e[6]=a,e[10]=r*c}else if(t.order==="ZYX"){const p=r*h,f=r*d,g=a*h,_=a*d;e[0]=c*h,e[4]=g*l-f,e[8]=p*l+_,e[1]=c*d,e[5]=_*l+p,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=r*c}else if(t.order==="YZX"){const p=r*c,f=r*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-p*d,e[8]=g*d+f,e[1]=d,e[5]=r*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*d+g,e[10]=p-_*d}else if(t.order==="XZY"){const p=r*c,f=r*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=p*d+_,e[5]=r*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*h,e[10]=_*d+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(op,t,rp)}lookAt(t,e,n){const s=this.elements;return cn.subVectors(t,e),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),li.crossVectors(n,cn),li.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),li.crossVectors(n,cn)),li.normalize(),Ro.crossVectors(cn,li),s[0]=li.x,s[4]=Ro.x,s[8]=cn.x,s[1]=li.y,s[5]=Ro.y,s[9]=cn.y,s[2]=li.z,s[6]=Ro.z,s[10]=cn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],p=n[9],f=n[13],g=n[2],_=n[6],m=n[10],u=n[14],M=n[3],v=n[7],y=n[11],A=n[15],E=s[0],T=s[4],C=s[8],U=s[12],x=s[1],S=s[5],D=s[9],z=s[13],G=s[2],Q=s[6],W=s[10],lt=s[14],F=s[3],dt=s[7],et=s[11],xt=s[15];return o[0]=r*E+a*x+c*G+l*F,o[4]=r*T+a*S+c*Q+l*dt,o[8]=r*C+a*D+c*W+l*et,o[12]=r*U+a*z+c*lt+l*xt,o[1]=h*E+d*x+p*G+f*F,o[5]=h*T+d*S+p*Q+f*dt,o[9]=h*C+d*D+p*W+f*et,o[13]=h*U+d*z+p*lt+f*xt,o[2]=g*E+_*x+m*G+u*F,o[6]=g*T+_*S+m*Q+u*dt,o[10]=g*C+_*D+m*W+u*et,o[14]=g*U+_*z+m*lt+u*xt,o[3]=M*E+v*x+y*G+A*F,o[7]=M*T+v*S+y*Q+A*dt,o[11]=M*C+v*D+y*W+A*et,o[15]=M*U+v*z+y*lt+A*xt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],o=t[12],r=t[1],a=t[5],c=t[9],l=t[13],h=t[2],d=t[6],p=t[10],f=t[14],g=t[3],_=t[7],m=t[11],u=t[15];return g*(+o*c*d-s*l*d-o*a*p+n*l*p+s*a*f-n*c*f)+_*(+e*c*f-e*l*p+o*r*p-s*r*f+s*l*h-o*c*h)+m*(+e*l*d-e*a*f-o*r*d+n*r*f+o*a*h-n*l*h)+u*(-s*a*h-e*c*d+e*a*p+s*r*d-n*r*p+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=t[9],p=t[10],f=t[11],g=t[12],_=t[13],m=t[14],u=t[15],M=d*m*l-_*p*l+_*c*f-a*m*f-d*c*u+a*p*u,v=g*p*l-h*m*l-g*c*f+r*m*f+h*c*u-r*p*u,y=h*_*l-g*d*l+g*a*f-r*_*f-h*a*u+r*d*u,A=g*d*c-h*_*c-g*a*p+r*_*p+h*a*m-r*d*m,E=e*M+n*v+s*y+o*A;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/E;return t[0]=M*T,t[1]=(_*p*o-d*m*o-_*s*f+n*m*f+d*s*u-n*p*u)*T,t[2]=(a*m*o-_*c*o+_*s*l-n*m*l-a*s*u+n*c*u)*T,t[3]=(d*c*o-a*p*o-d*s*l+n*p*l+a*s*f-n*c*f)*T,t[4]=v*T,t[5]=(h*m*o-g*p*o+g*s*f-e*m*f-h*s*u+e*p*u)*T,t[6]=(g*c*o-r*m*o-g*s*l+e*m*l+r*s*u-e*c*u)*T,t[7]=(r*p*o-h*c*o+h*s*l-e*p*l-r*s*f+e*c*f)*T,t[8]=y*T,t[9]=(g*d*o-h*_*o-g*n*f+e*_*f+h*n*u-e*d*u)*T,t[10]=(r*_*o-g*a*o+g*n*l-e*_*l-r*n*u+e*a*u)*T,t[11]=(h*a*o-r*d*o-h*n*l+e*d*l+r*n*f-e*a*f)*T,t[12]=A*T,t[13]=(h*_*s-g*d*s+g*n*p-e*_*p-h*n*m+e*d*m)*T,t[14]=(g*a*s-r*_*s-g*n*c+e*_*c+r*n*m-e*a*m)*T,t[15]=(r*d*s-h*a*s+h*n*c-e*d*c-r*n*p+e*a*p)*T,this}scale(t){const e=this.elements,n=t.x,s=t.y,o=t.z;return e[0]*=n,e[4]*=s,e[8]*=o,e[1]*=n,e[5]*=s,e[9]*=o,e[2]*=n,e[6]*=s,e[10]*=o,e[3]*=n,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),o=1-n,r=t.x,a=t.y,c=t.z,l=o*r,h=o*a;return this.set(l*r+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*r,0,l*c-s*a,h*c+s*r,o*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,o,r){return this.set(1,n,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,o=e._x,r=e._y,a=e._z,c=e._w,l=o+o,h=r+r,d=a+a,p=o*l,f=o*h,g=o*d,_=r*h,m=r*d,u=a*d,M=c*l,v=c*h,y=c*d,A=n.x,E=n.y,T=n.z;return s[0]=(1-(_+u))*A,s[1]=(f+y)*A,s[2]=(g-v)*A,s[3]=0,s[4]=(f-y)*E,s[5]=(1-(p+u))*E,s[6]=(m+M)*E,s[7]=0,s[8]=(g+v)*T,s[9]=(m-M)*T,s[10]=(1-(p+_))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let o=Ki.set(s[0],s[1],s[2]).length();const r=Ki.set(s[4],s[5],s[6]).length(),a=Ki.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],yn.copy(this);const l=1/o,h=1/r,d=1/a;return yn.elements[0]*=l,yn.elements[1]*=l,yn.elements[2]*=l,yn.elements[4]*=h,yn.elements[5]*=h,yn.elements[6]*=h,yn.elements[8]*=d,yn.elements[9]*=d,yn.elements[10]*=d,e.setFromRotationMatrix(yn),n.x=o,n.y=r,n.z=a,this}makePerspective(t,e,n,s,o,r,a=jn){const c=this.elements,l=2*o/(e-t),h=2*o/(n-s),d=(e+t)/(e-t),p=(n+s)/(n-s);let f,g;if(a===jn)f=-(r+o)/(r-o),g=-2*r*o/(r-o);else if(a===mr)f=-r/(r-o),g=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,o,r,a=jn){const c=this.elements,l=1/(e-t),h=1/(n-s),d=1/(r-o),p=(e+t)*l,f=(n+s)*h;let g,_;if(a===jn)g=(r+o)*d,_=-2*d;else if(a===mr)g=o*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ki=new I,yn=new Me,op=new I(0,0,0),rp=new I(1,1,1),li=new I,Ro=new I,cn=new I,Fl=new Me,Ol=new Fn;class On{constructor(t=0,e=0,n=0,s=On.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,o=s[0],r=s[4],a=s[8],c=s[1],l=s[5],h=s[9],d=s[2],p=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ue(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ue(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(Ue(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-Ue(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(Ue(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ue(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Fl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Fl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ol.setFromEuler(this),this.setFromQuaternion(Ol,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}On.DEFAULT_ORDER="XYZ";class Ou{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ap=0;const Bl=new I,Zi=new Fn,Hn=new Me,Co=new I,Fs=new I,cp=new I,lp=new Fn,zl=new I(1,0,0),kl=new I(0,1,0),Gl=new I(0,0,1),Hl={type:"added"},hp={type:"removed"},ji={type:"childadded",child:null},na={type:"childremoved",child:null};class Ae extends Bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ae.DEFAULT_UP.clone();const t=new I,e=new On,n=new Fn,s=new I(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Me},normalMatrix:{value:new ee}}),this.matrix=new Me,this.matrixWorld=new Me,this.matrixAutoUpdate=Ae.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ou,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Zi.setFromAxisAngle(t,e),this.quaternion.multiply(Zi),this}rotateOnWorldAxis(t,e){return Zi.setFromAxisAngle(t,e),this.quaternion.premultiply(Zi),this}rotateX(t){return this.rotateOnAxis(zl,t)}rotateY(t){return this.rotateOnAxis(kl,t)}rotateZ(t){return this.rotateOnAxis(Gl,t)}translateOnAxis(t,e){return Bl.copy(t).applyQuaternion(this.quaternion),this.position.add(Bl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(zl,t)}translateY(t){return this.translateOnAxis(kl,t)}translateZ(t){return this.translateOnAxis(Gl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Co.copy(t):Co.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(Fs,Co,this.up):Hn.lookAt(Co,Fs,this.up),this.quaternion.setFromRotationMatrix(Hn),s&&(Hn.extractRotation(s.matrixWorld),Zi.setFromRotationMatrix(Hn),this.quaternion.premultiply(Zi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Hl),ji.child=t,this.dispatchEvent(ji),ji.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(hp),na.child=t,this.dispatchEvent(na),na.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Hn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Hn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Hl),ji.child=t,this.dispatchEvent(ji),ji.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,t,cp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,lp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];o(t.shapes,d)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(o(t.materials,this.material[c]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(o(t.animations,c))}}if(e){const a=r(t.geometries),c=r(t.materials),l=r(t.textures),h=r(t.images),d=r(t.shapes),p=r(t.skeletons),f=r(t.animations),g=r(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),p.length>0&&(n.skeletons=p),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function r(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ae.DEFAULT_UP=new I(0,1,0);Ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Sn=new I,Vn=new I,ia=new I,Wn=new I,Ji=new I,$i=new I,Vl=new I,sa=new I,oa=new I,ra=new I,aa=new xe,ca=new xe,la=new xe;class Tn{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Sn.subVectors(t,e),s.cross(Sn);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,n,s,o){Sn.subVectors(s,e),Vn.subVectors(n,e),ia.subVectors(t,e);const r=Sn.dot(Sn),a=Sn.dot(Vn),c=Sn.dot(ia),l=Vn.dot(Vn),h=Vn.dot(ia),d=r*l-a*a;if(d===0)return o.set(0,0,0),null;const p=1/d,f=(l*c-a*h)*p,g=(r*h-a*c)*p;return o.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Wn)===null?!1:Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getInterpolation(t,e,n,s,o,r,a,c){return this.getBarycoord(t,e,n,s,Wn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,Wn.x),c.addScaledVector(r,Wn.y),c.addScaledVector(a,Wn.z),c)}static getInterpolatedAttribute(t,e,n,s,o,r){return aa.setScalar(0),ca.setScalar(0),la.setScalar(0),aa.fromBufferAttribute(t,e),ca.fromBufferAttribute(t,n),la.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(aa,o.x),r.addScaledVector(ca,o.y),r.addScaledVector(la,o.z),r}static isFrontFacing(t,e,n,s){return Sn.subVectors(n,e),Vn.subVectors(t,e),Sn.cross(Vn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Sn.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),Sn.cross(Vn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Tn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Tn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,o){return Tn.getInterpolation(t,this.a,this.b,this.c,e,n,s,o)}containsPoint(t){return Tn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Tn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,o=this.c;let r,a;Ji.subVectors(s,n),$i.subVectors(o,n),sa.subVectors(t,n);const c=Ji.dot(sa),l=$i.dot(sa);if(c<=0&&l<=0)return e.copy(n);oa.subVectors(t,s);const h=Ji.dot(oa),d=$i.dot(oa);if(h>=0&&d<=h)return e.copy(s);const p=c*d-h*l;if(p<=0&&c>=0&&h<=0)return r=c/(c-h),e.copy(n).addScaledVector(Ji,r);ra.subVectors(t,o);const f=Ji.dot(ra),g=$i.dot(ra);if(g>=0&&f<=g)return e.copy(o);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector($i,a);const m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return Vl.subVectors(o,s),a=(d-h)/(d-h+(f-g)),e.copy(s).addScaledVector(Vl,a);const u=1/(m+_+p);return r=_*u,a=p*u,e.copy(n).addScaledVector(Ji,r).addScaledVector($i,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Bu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},Po={h:0,s:0,l:0};function ha(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Zt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=En){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,de.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=de.workingColorSpace){return this.r=t,this.g=e,this.b=n,de.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=de.workingColorSpace){if(t=Xc(t,1),e=Ue(e,0,1),n=Ue(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=ha(r,o,t+1/3),this.g=ha(r,o,t),this.b=ha(r,o,t-1/3)}return de.toWorkingColorSpace(this,s),this}setStyle(t,e=En){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=En){const n=Bu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ps(t.r),this.g=ps(t.g),this.b=ps(t.b),this}copyLinearToSRGB(t){return this.r=Kr(t.r),this.g=Kr(t.g),this.b=Kr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=En){return de.fromWorkingColorSpace(Ve.copy(this),t),Math.round(Ue(Ve.r*255,0,255))*65536+Math.round(Ue(Ve.g*255,0,255))*256+Math.round(Ue(Ve.b*255,0,255))}getHexString(t=En){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=de.workingColorSpace){de.fromWorkingColorSpace(Ve.copy(this),e);const n=Ve.r,s=Ve.g,o=Ve.b,r=Math.max(n,s,o),a=Math.min(n,s,o);let c,l;const h=(a+r)/2;if(a===r)c=0,l=0;else{const d=r-a;switch(l=h<=.5?d/(r+a):d/(2-r-a),r){case n:c=(s-o)/d+(s<o?6:0);break;case s:c=(o-n)/d+2;break;case o:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=de.workingColorSpace){return de.fromWorkingColorSpace(Ve.copy(this),e),t.r=Ve.r,t.g=Ve.g,t.b=Ve.b,t}getStyle(t=En){de.fromWorkingColorSpace(Ve.copy(this),t);const e=Ve.r,n=Ve.g,s=Ve.b;return t!==En?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(hi),this.setHSL(hi.h+t,hi.s+e,hi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(hi),t.getHSL(Po);const n=Ks(hi.h,Po.h,e),s=Ks(hi.s,Po.s,e),o=Ks(hi.l,Po.l,e);return this.setHSL(n,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*s,this.g=o[1]*e+o[4]*n+o[7]*s,this.b=o[2]*e+o[5]*n+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ve=new Zt;Zt.NAMES=Bu;let up=0;class uo extends Bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=zi(),this.name="",this.type="Material",this.blending=ds,this.side=In,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ka,this.blendDst=Ga,this.blendEquation=Pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Zt(0,0,0),this.blendAlpha=0,this.depthFunc=xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vi,this.stencilZFail=Vi,this.stencilZPass=Vi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ds&&(n.blending=this.blending),this.side!==In&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ka&&(n.blendSrc=this.blendSrc),this.blendDst!==Ga&&(n.blendDst=this.blendDst),this.blendEquation!==Pi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==xs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Vi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Vi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const r=[];for(const a in o){const c=o[a];delete c.metadata,r.push(c)}return r}if(e){const o=s(t.textures),r=s(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class si extends uo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=mu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ie=new I,Lo=new at;class en{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Cl,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Lo.fromBufferAttribute(this,e),Lo.applyMatrix3(t),this.setXY(e,Lo.x,Lo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix3(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=rs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=qe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=rs(e,this.array)),e}setX(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=rs(e,this.array)),e}setY(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=rs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=rs(e,this.array)),e}setW(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array),s=qe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array),s=qe(s,this.array),o=qe(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Cl&&(t.usage=this.usage),t}}class zu extends en{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class ku extends en{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class se extends en{constructor(t,e,n){super(new Float32Array(t),e,n)}}let dp=0;const pn=new Me,ua=new Ae,Qi=new I,ln=new ki,Os=new ki,Oe=new I;class Be extends Bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=zi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Du(t)?ku:zu)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new ee().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return pn.makeRotationFromQuaternion(t),this.applyMatrix4(pn),this}rotateX(t){return pn.makeRotationX(t),this.applyMatrix4(pn),this}rotateY(t){return pn.makeRotationY(t),this.applyMatrix4(pn),this}rotateZ(t){return pn.makeRotationZ(t),this.applyMatrix4(pn),this}translate(t,e,n){return pn.makeTranslation(t,e,n),this.applyMatrix4(pn),this}scale(t,e,n){return pn.makeScale(t,e,n),this.applyMatrix4(pn),this}lookAt(t){return ua.lookAt(t),ua.updateMatrix(),this.applyMatrix4(ua.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qi).negate(),this.translate(Qi.x,Qi.y,Qi.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const o=t[n];e.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new se(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ki);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const o=e[n];ln.setFromBufferAttribute(o),this.morphTargetsRelative?(Oe.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Oe),Oe.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Oe)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ho);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(ln.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];Os.setFromBufferAttribute(a),this.morphTargetsRelative?(Oe.addVectors(ln.min,Os.min),ln.expandByPoint(Oe),Oe.addVectors(ln.max,Os.max),ln.expandByPoint(Oe)):(ln.expandByPoint(Os.min),ln.expandByPoint(Os.max))}ln.getCenter(n);let s=0;for(let o=0,r=t.count;o<r;o++)Oe.fromBufferAttribute(t,o),s=Math.max(s,n.distanceToSquared(Oe));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Oe.fromBufferAttribute(a,l),c&&(Qi.fromBufferAttribute(t,l),Oe.add(Qi)),s=Math.max(s,n.distanceToSquared(Oe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new en(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],c=[];for(let C=0;C<n.count;C++)a[C]=new I,c[C]=new I;const l=new I,h=new I,d=new I,p=new at,f=new at,g=new at,_=new I,m=new I;function u(C,U,x){l.fromBufferAttribute(n,C),h.fromBufferAttribute(n,U),d.fromBufferAttribute(n,x),p.fromBufferAttribute(o,C),f.fromBufferAttribute(o,U),g.fromBufferAttribute(o,x),h.sub(l),d.sub(l),f.sub(p),g.sub(p);const S=1/(f.x*g.y-g.x*f.y);isFinite(S)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(S),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(S),a[C].add(_),a[U].add(_),a[x].add(_),c[C].add(m),c[U].add(m),c[x].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let C=0,U=M.length;C<U;++C){const x=M[C],S=x.start,D=x.count;for(let z=S,G=S+D;z<G;z+=3)u(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const v=new I,y=new I,A=new I,E=new I;function T(C){A.fromBufferAttribute(s,C),E.copy(A);const U=a[C];v.copy(U),v.sub(A.multiplyScalar(A.dot(U))).normalize(),y.crossVectors(E,U);const S=y.dot(c[C])<0?-1:1;r.setXYZW(C,v.x,v.y,v.z,S)}for(let C=0,U=M.length;C<U;++C){const x=M[C],S=x.start,D=x.count;for(let z=S,G=S+D;z<G;z+=3)T(t.getX(z+0)),T(t.getX(z+1)),T(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new en(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,f=n.count;p<f;p++)n.setXYZ(p,0,0,0);const s=new I,o=new I,r=new I,a=new I,c=new I,l=new I,h=new I,d=new I;if(t)for(let p=0,f=t.count;p<f;p+=3){const g=t.getX(p+0),_=t.getX(p+1),m=t.getX(p+2);s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,_),r.fromBufferAttribute(e,m),h.subVectors(r,o),d.subVectors(s,o),h.cross(d),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let p=0,f=e.count;p<f;p+=3)s.fromBufferAttribute(e,p+0),o.fromBufferAttribute(e,p+1),r.fromBufferAttribute(e,p+2),h.subVectors(r,o),d.subVectors(s,o),h.cross(d),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Oe.fromBufferAttribute(t,e),Oe.normalize(),t.setXYZ(e,Oe.x,Oe.y,Oe.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,d=a.normalized,p=new l.constructor(c.length*h);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let u=0;u<h;u++)p[g++]=l[f++]}return new en(p,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Be,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const o=this.morphAttributes;for(const a in o){const c=[],l=o[a];for(let h=0,d=l.length;h<d;h++){const p=l[h],f=t(p,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,c=r.length;a<c;a++){const l=r[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let o=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,p=l.length;d<p;d++){const f=l[d];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const o=t.morphAttributes;for(const l in o){const h=[],d=o[l];for(let p=0,f=d.length;p<f;p++)h.push(d[p].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let l=0,h=r.length;l<h;l++){const d=r[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wl=new Me,bi=new Fu,Io=new ho,Xl=new I,Do=new I,Uo=new I,No=new I,da=new I,Fo=new I,Yl=new I,Oo=new I;class Z extends Ae{constructor(t=new Be,e=new si){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(o&&a){Fo.set(0,0,0);for(let c=0,l=o.length;c<l;c++){const h=a[c],d=o[c];h!==0&&(da.fromBufferAttribute(d,t),r?Fo.addScaledVector(da,h):Fo.addScaledVector(da.sub(e),h))}e.add(Fo)}return e}raycast(t,e){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Io.copy(n.boundingSphere),Io.applyMatrix4(o),bi.copy(t.ray).recast(t.near),!(Io.containsPoint(bi.origin)===!1&&(bi.intersectSphere(Io,Xl)===null||bi.origin.distanceToSquared(Xl)>(t.far-t.near)**2))&&(Wl.copy(o).invert(),bi.copy(t.ray).applyMatrix4(Wl),!(n.boundingBox!==null&&bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,bi)))}_computeIntersections(t,e,n){let s;const o=this.geometry,r=this.material,a=o.index,c=o.attributes.position,l=o.attributes.uv,h=o.attributes.uv1,d=o.attributes.normal,p=o.groups,f=o.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,_=p.length;g<_;g++){const m=p[g],u=r[m.materialIndex],M=Math.max(m.start,f.start),v=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=M,A=v;y<A;y+=3){const E=a.getX(y),T=a.getX(y+1),C=a.getX(y+2);s=Bo(this,u,t,n,l,h,d,E,T,C),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,u=_;m<u;m+=3){const M=a.getX(m),v=a.getX(m+1),y=a.getX(m+2);s=Bo(this,r,t,n,l,h,d,M,v,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(r))for(let g=0,_=p.length;g<_;g++){const m=p[g],u=r[m.materialIndex],M=Math.max(m.start,f.start),v=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let y=M,A=v;y<A;y+=3){const E=y,T=y+1,C=y+2;s=Bo(this,u,t,n,l,h,d,E,T,C),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,u=_;m<u;m+=3){const M=m,v=m+1,y=m+2;s=Bo(this,r,t,n,l,h,d,M,v,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function fp(i,t,e,n,s,o,r,a){let c;if(t.side===Ge?c=n.intersectTriangle(r,o,s,!0,a):c=n.intersectTriangle(s,o,r,t.side===In,a),c===null)return null;Oo.copy(a),Oo.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Oo);return l<e.near||l>e.far?null:{distance:l,point:Oo.clone(),object:i}}function Bo(i,t,e,n,s,o,r,a,c,l){i.getVertexPosition(a,Do),i.getVertexPosition(c,Uo),i.getVertexPosition(l,No);const h=fp(i,t,e,n,Do,Uo,No,Yl);if(h){const d=new I;Tn.getBarycoord(Yl,Do,Uo,No,d),s&&(h.uv=Tn.getInterpolatedAttribute(s,a,c,l,d,new at)),o&&(h.uv1=Tn.getInterpolatedAttribute(o,a,c,l,d,new at)),r&&(h.normal=Tn.getInterpolatedAttribute(r,a,c,l,d,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const p={a,b:c,c:l,normal:new I,materialIndex:0};Tn.getNormal(Do,Uo,No,p.normal),h.face=p,h.barycoord=d}return h}class Ct extends Be{constructor(t=1,e=1,n=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const c=[],l=[],h=[],d=[];let p=0,f=0;g("z","y","x",-1,-1,n,e,t,r,o,0),g("z","y","x",1,-1,n,e,-t,r,o,1),g("x","z","y",1,1,t,n,e,s,r,2),g("x","z","y",1,-1,t,n,-e,s,r,3),g("x","y","z",1,-1,t,e,n,s,o,4),g("x","y","z",-1,-1,t,e,-n,s,o,5),this.setIndex(c),this.setAttribute("position",new se(l,3)),this.setAttribute("normal",new se(h,3)),this.setAttribute("uv",new se(d,2));function g(_,m,u,M,v,y,A,E,T,C,U){const x=y/T,S=A/C,D=y/2,z=A/2,G=E/2,Q=T+1,W=C+1;let lt=0,F=0;const dt=new I;for(let et=0;et<W;et++){const xt=et*S-z;for(let kt=0;kt<Q;kt++){const Xt=kt*x-D;dt[_]=Xt*M,dt[m]=xt*v,dt[u]=G,l.push(dt.x,dt.y,dt.z),dt[_]=0,dt[m]=0,dt[u]=E>0?1:-1,h.push(dt.x,dt.y,dt.z),d.push(kt/T),d.push(1-et/C),lt+=1}}for(let et=0;et<C;et++)for(let xt=0;xt<T;xt++){const kt=p+xt+Q*et,Xt=p+xt+Q*(et+1),B=p+(xt+1)+Q*(et+1),K=p+(xt+1)+Q*et;c.push(kt,Xt,K),c.push(Xt,B,K),F+=6}a.addGroup(f,F,U),f+=F,p+=lt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ct(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Es(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ze(i){const t={};for(let e=0;e<i.length;e++){const n=Es(i[e]);for(const s in n)t[s]=n[s]}return t}function pp(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Gu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:de.workingColorSpace}const no={clone:Es,merge:Ze};var mp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class je extends uo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mp,this.fragmentShader=gp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Es(t.uniforms),this.uniformsGroups=pp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Hu extends Ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Me,this.projectionMatrix=new Me,this.projectionMatrixInverse=new Me,this.coordinateSystem=jn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ui=new I,ql=new at,Kl=new at;class un extends Hu{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=eo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(qs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return eo*2*Math.atan(Math.tan(qs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ui.x,ui.y).multiplyScalar(-t/ui.z),ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ui.x,ui.y).multiplyScalar(-t/ui.z)}getViewSize(t,e){return this.getViewBounds(t,ql,Kl),e.subVectors(Kl,ql)}setViewOffset(t,e,n,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(qs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;o+=r.offsetX*s/c,e-=r.offsetY*n/l,s*=r.width/c,n*=r.height/l}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ts=-90,es=1;class _p extends Ae{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new un(ts,es,t,e);s.layers=this.layers,this.add(s);const o=new un(ts,es,t,e);o.layers=this.layers,this.add(o);const r=new un(ts,es,t,e);r.layers=this.layers,this.add(r);const a=new un(ts,es,t,e);a.layers=this.layers,this.add(a);const c=new un(ts,es,t,e);c.layers=this.layers,this.add(c);const l=new un(ts,es,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,o,r,a,c]=e;for(const l of e)this.remove(l);if(t===jn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===mr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,c,l,h]=this.children,d=t.getRenderTarget(),p=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,o),t.setRenderTarget(n,1,s),t.render(e,r),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,p,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Vu extends Ye{constructor(t,e,n,s,o,r,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Ms,super(t,e,n,s,o,r,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class vp extends Cn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Vu(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:dn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ct(5,5,5),o=new je({name:"CubemapFromEquirect",uniforms:Es(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ge,blending:Jn});o.uniforms.tEquirect.value=e;const r=new Z(s,o),a=e.minFilter;return e.minFilter===Ii&&(e.minFilter=dn),new _p(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,s){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,s);t.setRenderTarget(o)}}const fa=new I,xp=new I,Mp=new ee;class mi{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=fa.subVectors(n,e).cross(xp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(fa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Mp.getNormalMatrix(t),s=this.coplanarPoint(fa).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ti=new ho,zo=new I;class Yc{constructor(t=new mi,e=new mi,n=new mi,s=new mi,o=new mi,r=new mi){this.planes=[t,e,n,s,o,r]}set(t,e,n,s,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=jn){const n=this.planes,s=t.elements,o=s[0],r=s[1],a=s[2],c=s[3],l=s[4],h=s[5],d=s[6],p=s[7],f=s[8],g=s[9],_=s[10],m=s[11],u=s[12],M=s[13],v=s[14],y=s[15];if(n[0].setComponents(c-o,p-l,m-f,y-u).normalize(),n[1].setComponents(c+o,p+l,m+f,y+u).normalize(),n[2].setComponents(c+r,p+h,m+g,y+M).normalize(),n[3].setComponents(c-r,p-h,m-g,y-M).normalize(),n[4].setComponents(c-a,p-d,m-_,y-v).normalize(),e===jn)n[5].setComponents(c+a,p+d,m+_,y+v).normalize();else if(e===mr)n[5].setComponents(a,d,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(t){return Ti.center.set(0,0,0),Ti.radius=.7071067811865476,Ti.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(zo.x=s.normal.x>0?t.max.x:t.min.x,zo.y=s.normal.y>0?t.max.y:t.min.y,zo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(zo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Wu(){let i=null,t=!1,e=null,n=null;function s(o,r){e(o,r),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function yp(i){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,d=l.byteLength,p=i.createBuffer();i.bindBuffer(c,p),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){const h=c.array,d=c.updateRanges;if(i.bindBuffer(l,a),d.length===0)i.bufferSubData(l,0,h);else{d.sort((f,g)=>f.start-g.start);let p=0;for(let f=1;f<d.length;f++){const g=d[p],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++p,d[p]=_)}d.length=p+1;for(let f=0,g=d.length;f<g;f++){const _=d[f];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function r(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:o,update:r}}class be extends Be{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const o=t/2,r=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,d=t/a,p=e/c,f=[],g=[],_=[],m=[];for(let u=0;u<h;u++){const M=u*p-r;for(let v=0;v<l;v++){const y=v*d-o;g.push(y,-M,0),_.push(0,0,1),m.push(v/a),m.push(1-u/c)}}for(let u=0;u<c;u++)for(let M=0;M<a;M++){const v=M+l*u,y=M+l*(u+1),A=M+1+l*(u+1),E=M+1+l*u;f.push(v,y,E),f.push(y,A,E)}this.setIndex(f),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(_,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new be(t.width,t.height,t.widthSegments,t.heightSegments)}}var Sp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ep=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ap=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Cp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Lp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ip=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Dp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Up=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Np=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Fp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Op=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Bp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Wp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Xp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Yp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,qp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Kp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$p="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qp=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,t0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,e0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,n0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,i0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,s0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,o0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,r0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,a0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,c0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,l0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,h0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,u0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,d0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,f0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,p0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,m0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,g0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,v0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,x0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,M0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,y0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,S0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,w0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,E0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,b0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,T0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,A0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,R0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,C0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,P0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,L0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,I0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,D0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,U0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,N0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,F0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,O0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,B0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,z0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,k0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,G0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,V0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,W0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,X0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Y0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,q0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,K0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Z0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,j0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,J0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Q0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,em=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,im=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,sm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,om=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,rm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,am=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,lm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,um=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,mm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Mm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ym=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Em=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Am=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Rm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Cm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Pm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Im=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Um=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Nm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Fm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Om=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,km=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Hm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Vm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ym=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Km=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,jm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$m=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,te={alphahash_fragment:Sp,alphahash_pars_fragment:wp,alphamap_fragment:Ep,alphamap_pars_fragment:bp,alphatest_fragment:Tp,alphatest_pars_fragment:Ap,aomap_fragment:Rp,aomap_pars_fragment:Cp,batching_pars_vertex:Pp,batching_vertex:Lp,begin_vertex:Ip,beginnormal_vertex:Dp,bsdfs:Up,iridescence_fragment:Np,bumpmap_pars_fragment:Fp,clipping_planes_fragment:Op,clipping_planes_pars_fragment:Bp,clipping_planes_pars_vertex:zp,clipping_planes_vertex:kp,color_fragment:Gp,color_pars_fragment:Hp,color_pars_vertex:Vp,color_vertex:Wp,common:Xp,cube_uv_reflection_fragment:Yp,defaultnormal_vertex:qp,displacementmap_pars_vertex:Kp,displacementmap_vertex:Zp,emissivemap_fragment:jp,emissivemap_pars_fragment:Jp,colorspace_fragment:$p,colorspace_pars_fragment:Qp,envmap_fragment:t0,envmap_common_pars_fragment:e0,envmap_pars_fragment:n0,envmap_pars_vertex:i0,envmap_physical_pars_fragment:p0,envmap_vertex:s0,fog_vertex:o0,fog_pars_vertex:r0,fog_fragment:a0,fog_pars_fragment:c0,gradientmap_pars_fragment:l0,lightmap_pars_fragment:h0,lights_lambert_fragment:u0,lights_lambert_pars_fragment:d0,lights_pars_begin:f0,lights_toon_fragment:m0,lights_toon_pars_fragment:g0,lights_phong_fragment:_0,lights_phong_pars_fragment:v0,lights_physical_fragment:x0,lights_physical_pars_fragment:M0,lights_fragment_begin:y0,lights_fragment_maps:S0,lights_fragment_end:w0,logdepthbuf_fragment:E0,logdepthbuf_pars_fragment:b0,logdepthbuf_pars_vertex:T0,logdepthbuf_vertex:A0,map_fragment:R0,map_pars_fragment:C0,map_particle_fragment:P0,map_particle_pars_fragment:L0,metalnessmap_fragment:I0,metalnessmap_pars_fragment:D0,morphinstance_vertex:U0,morphcolor_vertex:N0,morphnormal_vertex:F0,morphtarget_pars_vertex:O0,morphtarget_vertex:B0,normal_fragment_begin:z0,normal_fragment_maps:k0,normal_pars_fragment:G0,normal_pars_vertex:H0,normal_vertex:V0,normalmap_pars_fragment:W0,clearcoat_normal_fragment_begin:X0,clearcoat_normal_fragment_maps:Y0,clearcoat_pars_fragment:q0,iridescence_pars_fragment:K0,opaque_fragment:Z0,packing:j0,premultiplied_alpha_fragment:J0,project_vertex:$0,dithering_fragment:Q0,dithering_pars_fragment:tm,roughnessmap_fragment:em,roughnessmap_pars_fragment:nm,shadowmap_pars_fragment:im,shadowmap_pars_vertex:sm,shadowmap_vertex:om,shadowmask_pars_fragment:rm,skinbase_vertex:am,skinning_pars_vertex:cm,skinning_vertex:lm,skinnormal_vertex:hm,specularmap_fragment:um,specularmap_pars_fragment:dm,tonemapping_fragment:fm,tonemapping_pars_fragment:pm,transmission_fragment:mm,transmission_pars_fragment:gm,uv_pars_fragment:_m,uv_pars_vertex:vm,uv_vertex:xm,worldpos_vertex:Mm,background_vert:ym,background_frag:Sm,backgroundCube_vert:wm,backgroundCube_frag:Em,cube_vert:bm,cube_frag:Tm,depth_vert:Am,depth_frag:Rm,distanceRGBA_vert:Cm,distanceRGBA_frag:Pm,equirect_vert:Lm,equirect_frag:Im,linedashed_vert:Dm,linedashed_frag:Um,meshbasic_vert:Nm,meshbasic_frag:Fm,meshlambert_vert:Om,meshlambert_frag:Bm,meshmatcap_vert:zm,meshmatcap_frag:km,meshnormal_vert:Gm,meshnormal_frag:Hm,meshphong_vert:Vm,meshphong_frag:Wm,meshphysical_vert:Xm,meshphysical_frag:Ym,meshtoon_vert:qm,meshtoon_frag:Km,points_vert:Zm,points_frag:jm,shadow_vert:Jm,shadow_frag:$m,sprite_vert:Qm,sprite_frag:tg},Rt={common:{diffuse:{value:new Zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ee}},envmap:{envMap:{value:null},envMapRotation:{value:new ee},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ee}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ee}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ee},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ee},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ee},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ee}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ee}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ee}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0},uvTransform:{value:new ee}},sprite:{diffuse:{value:new Zt(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}}},Un={basic:{uniforms:Ze([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:Ze([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new Zt(0)}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:Ze([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new Zt(0)},specular:{value:new Zt(1118481)},shininess:{value:30}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:Ze([Rt.common,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.roughnessmap,Rt.metalnessmap,Rt.fog,Rt.lights,{emissive:{value:new Zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:Ze([Rt.common,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.gradientmap,Rt.fog,Rt.lights,{emissive:{value:new Zt(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:Ze([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:Ze([Rt.points,Rt.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:Ze([Rt.common,Rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:Ze([Rt.common,Rt.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:Ze([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:Ze([Rt.sprite,Rt.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ee}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distanceRGBA:{uniforms:Ze([Rt.common,Rt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distanceRGBA_vert,fragmentShader:te.distanceRGBA_frag},shadow:{uniforms:Ze([Rt.lights,Rt.fog,{color:{value:new Zt(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};Un.physical={uniforms:Ze([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ee},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ee},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ee},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ee},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ee},sheen:{value:0},sheenColor:{value:new Zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ee},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ee},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ee},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ee},attenuationDistance:{value:0},attenuationColor:{value:new Zt(0)},specularColor:{value:new Zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ee},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ee},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ee}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};const ko={r:0,b:0,g:0},Ai=new On,eg=new Me;function ng(i,t,e,n,s,o,r){const a=new Zt(0);let c=o===!0?0:1,l,h,d=null,p=0,f=null;function g(M){let v=M.isScene===!0?M.background:null;return v&&v.isTexture&&(v=(M.backgroundBlurriness>0?e:t).get(v)),v}function _(M){let v=!1;const y=g(M);y===null?u(a,c):y&&y.isColor&&(u(y,1),v=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,v){const y=g(v);y&&(y.isCubeTexture||y.mapping===Ar)?(h===void 0&&(h=new Z(new Ct(1,1,1),new je({name:"BackgroundCubeMaterial",uniforms:Es(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ai.copy(v.backgroundRotation),Ai.x*=-1,Ai.y*=-1,Ai.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ai.y*=-1,Ai.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(eg.makeRotationFromEuler(Ai)),h.material.toneMapped=de.getTransfer(y.colorSpace)!==ye,(d!==y||p!==y.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,d=y,p=y.version,f=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Z(new be(2,2),new je({name:"BackgroundMaterial",uniforms:Es(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=de.getTransfer(y.colorSpace)!==ye,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||p!==y.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,d=y,p=y.version,f=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function u(M,v){M.getRGB(ko,Gu(i)),n.buffers.color.setClear(ko.r,ko.g,ko.b,v,r)}return{getClearColor:function(){return a},setClearColor:function(M,v=1){a.set(M),c=v,u(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,u(a,c)},render:_,addToRenderList:m}}function ig(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null);let o=s,r=!1;function a(x,S,D,z,G){let Q=!1;const W=d(z,D,S);o!==W&&(o=W,l(o.object)),Q=f(x,z,D,G),Q&&g(x,z,D,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(Q||r)&&(r=!1,y(x,S,D,z),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function c(){return i.createVertexArray()}function l(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function d(x,S,D){const z=D.wireframe===!0;let G=n[x.id];G===void 0&&(G={},n[x.id]=G);let Q=G[S.id];Q===void 0&&(Q={},G[S.id]=Q);let W=Q[z];return W===void 0&&(W=p(c()),Q[z]=W),W}function p(x){const S=[],D=[],z=[];for(let G=0;G<e;G++)S[G]=0,D[G]=0,z[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:D,attributeDivisors:z,object:x,attributes:{},index:null}}function f(x,S,D,z){const G=o.attributes,Q=S.attributes;let W=0;const lt=D.getAttributes();for(const F in lt)if(lt[F].location>=0){const et=G[F];let xt=Q[F];if(xt===void 0&&(F==="instanceMatrix"&&x.instanceMatrix&&(xt=x.instanceMatrix),F==="instanceColor"&&x.instanceColor&&(xt=x.instanceColor)),et===void 0||et.attribute!==xt||xt&&et.data!==xt.data)return!0;W++}return o.attributesNum!==W||o.index!==z}function g(x,S,D,z){const G={},Q=S.attributes;let W=0;const lt=D.getAttributes();for(const F in lt)if(lt[F].location>=0){let et=Q[F];et===void 0&&(F==="instanceMatrix"&&x.instanceMatrix&&(et=x.instanceMatrix),F==="instanceColor"&&x.instanceColor&&(et=x.instanceColor));const xt={};xt.attribute=et,et&&et.data&&(xt.data=et.data),G[F]=xt,W++}o.attributes=G,o.attributesNum=W,o.index=z}function _(){const x=o.newAttributes;for(let S=0,D=x.length;S<D;S++)x[S]=0}function m(x){u(x,0)}function u(x,S){const D=o.newAttributes,z=o.enabledAttributes,G=o.attributeDivisors;D[x]=1,z[x]===0&&(i.enableVertexAttribArray(x),z[x]=1),G[x]!==S&&(i.vertexAttribDivisor(x,S),G[x]=S)}function M(){const x=o.newAttributes,S=o.enabledAttributes;for(let D=0,z=S.length;D<z;D++)S[D]!==x[D]&&(i.disableVertexAttribArray(D),S[D]=0)}function v(x,S,D,z,G,Q,W){W===!0?i.vertexAttribIPointer(x,S,D,G,Q):i.vertexAttribPointer(x,S,D,z,G,Q)}function y(x,S,D,z){_();const G=z.attributes,Q=D.getAttributes(),W=S.defaultAttributeValues;for(const lt in Q){const F=Q[lt];if(F.location>=0){let dt=G[lt];if(dt===void 0&&(lt==="instanceMatrix"&&x.instanceMatrix&&(dt=x.instanceMatrix),lt==="instanceColor"&&x.instanceColor&&(dt=x.instanceColor)),dt!==void 0){const et=dt.normalized,xt=dt.itemSize,kt=t.get(dt);if(kt===void 0)continue;const Xt=kt.buffer,B=kt.type,K=kt.bytesPerElement,mt=B===i.INT||B===i.UNSIGNED_INT||dt.gpuType===Fc;if(dt.isInterleavedBufferAttribute){const X=dt.data,gt=X.stride,pt=dt.offset;if(X.isInstancedInterleavedBuffer){for(let St=0;St<F.locationSize;St++)u(F.location+St,X.meshPerAttribute);x.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let St=0;St<F.locationSize;St++)m(F.location+St);i.bindBuffer(i.ARRAY_BUFFER,Xt);for(let St=0;St<F.locationSize;St++)v(F.location+St,xt/F.locationSize,B,et,gt*K,(pt+xt/F.locationSize*St)*K,mt)}else{if(dt.isInstancedBufferAttribute){for(let X=0;X<F.locationSize;X++)u(F.location+X,dt.meshPerAttribute);x.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let X=0;X<F.locationSize;X++)m(F.location+X);i.bindBuffer(i.ARRAY_BUFFER,Xt);for(let X=0;X<F.locationSize;X++)v(F.location+X,xt/F.locationSize,B,et,xt*K,xt/F.locationSize*X*K,mt)}}else if(W!==void 0){const et=W[lt];if(et!==void 0)switch(et.length){case 2:i.vertexAttrib2fv(F.location,et);break;case 3:i.vertexAttrib3fv(F.location,et);break;case 4:i.vertexAttrib4fv(F.location,et);break;default:i.vertexAttrib1fv(F.location,et)}}}}M()}function A(){C();for(const x in n){const S=n[x];for(const D in S){const z=S[D];for(const G in z)h(z[G].object),delete z[G];delete S[D]}delete n[x]}}function E(x){if(n[x.id]===void 0)return;const S=n[x.id];for(const D in S){const z=S[D];for(const G in z)h(z[G].object),delete z[G];delete S[D]}delete n[x.id]}function T(x){for(const S in n){const D=n[S];if(D[x.id]===void 0)continue;const z=D[x.id];for(const G in z)h(z[G].object),delete z[G];delete D[x.id]}}function C(){U(),r=!0,o!==s&&(o=s,l(o.object))}function U(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:U,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function sg(i,t,e){let n;function s(l){n=l}function o(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function r(l,h,d){d!==0&&(i.drawArraysInstanced(n,l,h,d),e.update(h,n,d))}function a(l,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];e.update(f,n,1)}function c(l,h,d,p){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)r(l[g],h[g],p[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,p,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_];for(let _=0;_<p.length;_++)e.update(g,n,p[_])}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function og(i,t,e,n){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(T){return!(T!==Rn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const C=T===$n&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==ti&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Nn&&!C)}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=e.logarithmicDepthBuffer===!0,p=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(p===!0){const T=t.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:p,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:M,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:A,maxSamples:E}}function rg(i){const t=this;let e=null,n=0,s=!1,o=!1;const r=new mi,a=new ee,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){const f=d.length!==0||p||n!==0||s;return s=p,n=d.length,f},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,p){e=h(d,p,0)},this.setState=function(d,p,f){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,u=i.get(d);if(!s||g===null||g.length===0||o&&!m)o?h(null):l();else{const M=o?0:n,v=M*4;let y=u.clippingState||null;c.value=y,y=h(g,p,v,f);for(let A=0;A!==v;++A)y[A]=e[A];u.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,p,f,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const u=f+_*4,M=p.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<u)&&(m=new Float32Array(u));for(let v=0,y=f;v!==_;++v,y+=4)r.copy(d[v]).applyMatrix4(M,a),r.normal.toArray(m,y),m[y+3]=r.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function ag(i){let t=new WeakMap;function e(r,a){return a===ur?r.mapping=Ms:a===Za&&(r.mapping=ys),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===ur||a===Za)if(t.has(r)){const c=t.get(r).texture;return e(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new vp(c.height);return l.fromEquirectangularTexture(i,r),t.set(r,l),r.addEventListener("dispose",s),e(l.texture,r.mapping)}else return null}}return r}function s(r){const a=r.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}class qc extends Hu{constructor(t=-1,e=1,n=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-t,r=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=l*this.view.offsetX,r=o+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ls=4,Zl=[.125,.215,.35,.446,.526,.582],Li=20,pa=new qc,jl=new Zt;let ma=null,ga=0,_a=0,va=!1;const Ci=(1+Math.sqrt(5))/2,ns=1/Ci,Jl=[new I(-Ci,ns,0),new I(Ci,ns,0),new I(-ns,0,Ci),new I(ns,0,Ci),new I(0,Ci,-ns),new I(0,Ci,ns),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class $l{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ma=this._renderer.getRenderTarget(),ga=this._renderer.getActiveCubeFace(),_a=this._renderer.getActiveMipmapLevel(),va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,s,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=eh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=th(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ma,ga,_a),this._renderer.xr.enabled=va,t.scissorTest=!1,Go(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ms||t.mapping===ys?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ma=this._renderer.getRenderTarget(),ga=this._renderer.getActiveCubeFace(),_a=this._renderer.getActiveMipmapLevel(),va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:$n,format:Rn,colorSpace:Mi,depthBuffer:!1},s=Ql(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ql(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cg(o)),this._blurMaterial=lg(o,t,e)}return s}_compileMaterial(t){const e=new Z(this._lodPlanes[0],t);this._renderer.compile(e,pa)}_sceneToCubeUV(t,e,n,s){const a=new un(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(jl),h.toneMapping=vi,h.autoClear=!1;const f=new si({name:"PMREM.Background",side:Ge,depthWrite:!1,depthTest:!1}),g=new Z(new Ct,f);let _=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(jl),_=!0);for(let u=0;u<6;u++){const M=u%3;M===0?(a.up.set(0,c[u],0),a.lookAt(l[u],0,0)):M===1?(a.up.set(0,0,c[u]),a.lookAt(0,l[u],0)):(a.up.set(0,c[u],0),a.lookAt(0,0,l[u]));const v=this._cubeSize;Go(s,M*v,u>2?v:0,v,v),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=p,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ms||t.mapping===ys;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=eh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=th());const o=s?this._cubemapMaterial:this._equirectMaterial,r=new Z(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const c=this._cubeSize;Go(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(r,pa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=Jl[(s-o-1)%Jl.length];this._blur(t,o-1,o,r,a)}e.autoClear=n}_blur(t,e,n,s,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,s,"latitudinal",o),this._halfBlur(r,t,n,n,s,"longitudinal",o)}_halfBlur(t,e,n,s,o,r,a){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Z(this._lodPlanes[s],l),p=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(o)?Math.PI/(2*f):2*Math.PI/(2*Li-1),_=o/g,m=isFinite(o)?1+Math.floor(h*_):Li;m>Li&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Li}`);const u=[];let M=0;for(let T=0;T<Li;++T){const C=T/_,U=Math.exp(-C*C/2);u.push(U),T===0?M+=U:T<m&&(M+=2*U)}for(let T=0;T<u.length;T++)u[T]=u[T]/M;p.envMap.value=t.texture,p.samples.value=m,p.weights.value=u,p.latitudinal.value=r==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:v}=this;p.dTheta.value=g,p.mipInt.value=v-n;const y=this._sizeLods[s],A=3*y*(s>v-ls?s-v+ls:0),E=4*(this._cubeSize-y);Go(e,A,E,3*y,2*y),c.setRenderTarget(e),c.render(d,pa)}}function cg(i){const t=[],e=[],n=[];let s=i;const o=i-ls+1+Zl.length;for(let r=0;r<o;r++){const a=Math.pow(2,s);e.push(a);let c=1/a;r>i-ls?c=Zl[r-i+ls-1]:r===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,d=1+l,p=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,_=3,m=2,u=1,M=new Float32Array(_*g*f),v=new Float32Array(m*g*f),y=new Float32Array(u*g*f);for(let E=0;E<f;E++){const T=E%3*2/3-1,C=E>2?0:-1,U=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];M.set(U,_*g*E),v.set(p,m*g*E);const x=[E,E,E,E,E,E];y.set(x,u*g*E)}const A=new Be;A.setAttribute("position",new en(M,_)),A.setAttribute("uv",new en(v,m)),A.setAttribute("faceIndex",new en(y,u)),t.push(A),s>ls&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ql(i,t,e){const n=new Cn(i,t,e);return n.texture.mapping=Ar,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Go(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function lg(i,t,e){const n=new Float32Array(Li),s=new I(0,1,0);return new je({name:"SphericalGaussianBlur",defines:{n:Li,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function th(){return new je({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function eh(){return new je({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Kc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function hg(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===ur||c===Za,h=c===Ms||c===ys;if(l||h){let d=t.get(a);const p=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return e===null&&(e=new $l(i)),d=l?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new $l(i)),d=l?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",o),d.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function o(a){const c=a.target;c.removeEventListener("dispose",o);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function ug(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&or("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function dg(i,t,e,n){const s={},o=new WeakMap;function r(d){const p=d.target;p.index!==null&&t.remove(p.index);for(const g in p.attributes)t.remove(p.attributes[g]);for(const g in p.morphAttributes){const _=p.morphAttributes[g];for(let m=0,u=_.length;m<u;m++)t.remove(_[m])}p.removeEventListener("dispose",r),delete s[p.id];const f=o.get(p);f&&(t.remove(f),o.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function a(d,p){return s[p.id]===!0||(p.addEventListener("dispose",r),s[p.id]=!0,e.memory.geometries++),p}function c(d){const p=d.attributes;for(const g in p)t.update(p[g],i.ARRAY_BUFFER);const f=d.morphAttributes;for(const g in f){const _=f[g];for(let m=0,u=_.length;m<u;m++)t.update(_[m],i.ARRAY_BUFFER)}}function l(d){const p=[],f=d.index,g=d.attributes.position;let _=0;if(f!==null){const M=f.array;_=f.version;for(let v=0,y=M.length;v<y;v+=3){const A=M[v+0],E=M[v+1],T=M[v+2];p.push(A,E,E,T,T,A)}}else if(g!==void 0){const M=g.array;_=g.version;for(let v=0,y=M.length/3-1;v<y;v+=3){const A=v+0,E=v+1,T=v+2;p.push(A,E,E,T,T,A)}}else return;const m=new(Du(p)?ku:zu)(p,1);m.version=_;const u=o.get(d);u&&t.remove(u),o.set(d,m)}function h(d){const p=o.get(d);if(p){const f=d.index;f!==null&&p.version<f.version&&l(d)}else l(d);return o.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function fg(i,t,e){let n;function s(p){n=p}let o,r;function a(p){o=p.type,r=p.bytesPerElement}function c(p,f){i.drawElements(n,f,o,p*r),e.update(f,n,1)}function l(p,f,g){g!==0&&(i.drawElementsInstanced(n,f,o,p*r,g),e.update(f,n,g))}function h(p,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,o,p,0,g);let m=0;for(let u=0;u<g;u++)m+=f[u];e.update(m,n,1)}function d(p,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<p.length;u++)l(p[u]/r,f[u],_[u]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,o,p,0,_,0,g);let u=0;for(let M=0;M<g;M++)u+=f[M];for(let M=0;M<_.length;M++)e.update(u,n,_[M])}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function pg(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case i.TRIANGLES:e.triangles+=a*(o/3);break;case i.LINES:e.lines+=a*(o/2);break;case i.LINE_STRIP:e.lines+=a*(o-1);break;case i.LINE_LOOP:e.lines+=a*o;break;case i.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function mg(i,t,e){const n=new WeakMap,s=new xe;function o(r,a,c){const l=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let p=n.get(a);if(p===void 0||p.count!==d){let U=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",U)};p!==void 0&&p.texture.dispose();const f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],u=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let v=0;f===!0&&(v=1),g===!0&&(v=2),_===!0&&(v=3);let y=a.attributes.position.count*v,A=1;y>t.maxTextureSize&&(A=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const E=new Float32Array(y*A*4*d),T=new Nu(E,y,A,d);T.type=Nn,T.needsUpdate=!0;const C=v*4;for(let x=0;x<d;x++){const S=m[x],D=u[x],z=M[x],G=y*A*4*x;for(let Q=0;Q<S.count;Q++){const W=Q*C;f===!0&&(s.fromBufferAttribute(S,Q),E[G+W+0]=s.x,E[G+W+1]=s.y,E[G+W+2]=s.z,E[G+W+3]=0),g===!0&&(s.fromBufferAttribute(D,Q),E[G+W+4]=s.x,E[G+W+5]=s.y,E[G+W+6]=s.z,E[G+W+7]=0),_===!0&&(s.fromBufferAttribute(z,Q),E[G+W+8]=s.x,E[G+W+9]=s.y,E[G+W+10]=s.z,E[G+W+11]=z.itemSize===4?s.w:1)}}p={count:d,texture:T,size:new at(y,A)},n.set(a,p),a.addEventListener("dispose",U)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",r.morphTexture,e);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];const g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:o}}function gg(i,t,e,n){let s=new WeakMap;function o(c){const l=n.render.frame,h=c.geometry,d=t.get(c,h);if(s.get(d)!==l&&(t.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==l&&(p.update(),s.set(p,l))}return d}function r(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:o,dispose:r}}class Xu extends Ye{constructor(t,e,n,s,o,r,a,c,l,h=fs){if(h!==fs&&h!==ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===fs&&(n=Ni),n===void 0&&h===ws&&(n=Ss),super(null,s,o,r,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:tn,this.minFilter=c!==void 0?c:tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Yu=new Ye,nh=new Xu(1,1),qu=new Nu,Ku=new ip,Zu=new Vu,ih=[],sh=[],oh=new Float32Array(16),rh=new Float32Array(9),ah=new Float32Array(4);function Rs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let o=ih[s];if(o===void 0&&(o=new Float32Array(s),ih[s]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,i[r].toArray(o,a)}return o}function Ne(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Fe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Cr(i,t){let e=sh[t];e===void 0&&(e=new Int32Array(t),sh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function _g(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function vg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2fv(this.addr,t),Fe(e,t)}}function xg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ne(e,t))return;i.uniform3fv(this.addr,t),Fe(e,t)}}function Mg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4fv(this.addr,t),Fe(e,t)}}function yg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Fe(e,t)}else{if(Ne(e,n))return;ah.set(n),i.uniformMatrix2fv(this.addr,!1,ah),Fe(e,n)}}function Sg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Fe(e,t)}else{if(Ne(e,n))return;rh.set(n),i.uniformMatrix3fv(this.addr,!1,rh),Fe(e,n)}}function wg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Fe(e,t)}else{if(Ne(e,n))return;oh.set(n),i.uniformMatrix4fv(this.addr,!1,oh),Fe(e,n)}}function Eg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function bg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2iv(this.addr,t),Fe(e,t)}}function Tg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3iv(this.addr,t),Fe(e,t)}}function Ag(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4iv(this.addr,t),Fe(e,t)}}function Rg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Cg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2uiv(this.addr,t),Fe(e,t)}}function Pg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3uiv(this.addr,t),Fe(e,t)}}function Lg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4uiv(this.addr,t),Fe(e,t)}}function Ig(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let o;this.type===i.SAMPLER_2D_SHADOW?(nh.compareFunction=Iu,o=nh):o=Yu,e.setTexture2D(t||o,s)}function Dg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Ku,s)}function Ug(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Zu,s)}function Ng(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||qu,s)}function Fg(i){switch(i){case 5126:return _g;case 35664:return vg;case 35665:return xg;case 35666:return Mg;case 35674:return yg;case 35675:return Sg;case 35676:return wg;case 5124:case 35670:return Eg;case 35667:case 35671:return bg;case 35668:case 35672:return Tg;case 35669:case 35673:return Ag;case 5125:return Rg;case 36294:return Cg;case 36295:return Pg;case 36296:return Lg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ig;case 35679:case 36299:case 36307:return Dg;case 35680:case 36300:case 36308:case 36293:return Ug;case 36289:case 36303:case 36311:case 36292:return Ng}}function Og(i,t){i.uniform1fv(this.addr,t)}function Bg(i,t){const e=Rs(t,this.size,2);i.uniform2fv(this.addr,e)}function zg(i,t){const e=Rs(t,this.size,3);i.uniform3fv(this.addr,e)}function kg(i,t){const e=Rs(t,this.size,4);i.uniform4fv(this.addr,e)}function Gg(i,t){const e=Rs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Hg(i,t){const e=Rs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Vg(i,t){const e=Rs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Wg(i,t){i.uniform1iv(this.addr,t)}function Xg(i,t){i.uniform2iv(this.addr,t)}function Yg(i,t){i.uniform3iv(this.addr,t)}function qg(i,t){i.uniform4iv(this.addr,t)}function Kg(i,t){i.uniform1uiv(this.addr,t)}function Zg(i,t){i.uniform2uiv(this.addr,t)}function jg(i,t){i.uniform3uiv(this.addr,t)}function Jg(i,t){i.uniform4uiv(this.addr,t)}function $g(i,t,e){const n=this.cache,s=t.length,o=Cr(e,s);Ne(n,o)||(i.uniform1iv(this.addr,o),Fe(n,o));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||Yu,o[r])}function Qg(i,t,e){const n=this.cache,s=t.length,o=Cr(e,s);Ne(n,o)||(i.uniform1iv(this.addr,o),Fe(n,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||Ku,o[r])}function t_(i,t,e){const n=this.cache,s=t.length,o=Cr(e,s);Ne(n,o)||(i.uniform1iv(this.addr,o),Fe(n,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||Zu,o[r])}function e_(i,t,e){const n=this.cache,s=t.length,o=Cr(e,s);Ne(n,o)||(i.uniform1iv(this.addr,o),Fe(n,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||qu,o[r])}function n_(i){switch(i){case 5126:return Og;case 35664:return Bg;case 35665:return zg;case 35666:return kg;case 35674:return Gg;case 35675:return Hg;case 35676:return Vg;case 5124:case 35670:return Wg;case 35667:case 35671:return Xg;case 35668:case 35672:return Yg;case 35669:case 35673:return qg;case 5125:return Kg;case 36294:return Zg;case 36295:return jg;case 36296:return Jg;case 35678:case 36198:case 36298:case 36306:case 35682:return $g;case 35679:case 36299:case 36307:return Qg;case 35680:case 36300:case 36308:case 36293:return t_;case 36289:case 36303:case 36311:case 36292:return e_}}class i_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Fg(e.type)}}class s_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=n_(e.type)}}class o_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(t,e[a.id],n)}}}const xa=/(\w+)(\])?(\[|\.)?/g;function ch(i,t){i.seq.push(t),i.map[t.id]=t}function r_(i,t,e){const n=i.name,s=n.length;for(xa.lastIndex=0;;){const o=xa.exec(n),r=xa.lastIndex;let a=o[1];const c=o[2]==="]",l=o[3];if(c&&(a=a|0),l===void 0||l==="["&&r+2===s){ch(e,l===void 0?new i_(a,i,t):new s_(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new o_(a),ch(e,d)),e=d}}}class rr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=t.getActiveUniform(e,s),r=t.getUniformLocation(e,o.name);r_(o,r,this)}}setValue(t,e,n,s){const o=this.map[e];o!==void 0&&o.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let o=0,r=e.length;o!==r;++o){const a=e[o],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,o=t.length;s!==o;++s){const r=t[s];r.id in e&&n.push(r)}return n}}function lh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const a_=37297;let c_=0;function l_(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}function h_(i){const t=de.getPrimaries(de.workingColorSpace),e=de.getPrimaries(i);let n;switch(t===e?n="":t===pr&&e===fr?n="LinearDisplayP3ToLinearSRGB":t===fr&&e===pr&&(n="LinearSRGBToLinearDisplayP3"),i){case Mi:case Rr:return[n,"LinearTransferOETF"];case En:case Vc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function hh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+l_(i.getShaderSource(t),r)}else return s}function u_(i,t){const e=h_(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function d_(i,t){let e;switch(t){case gu:e="Linear";break;case _u:e="Reinhard";break;case vu:e="Cineon";break;case Nc:e="ACESFilmic";break;case xu:e="AgX";break;case Mu:e="Neutral";break;case Mf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ho=new I;function f_(){de.getLuminanceCoefficients(Ho);const i=Ho.x.toFixed(4),t=Ho.y.toFixed(4),e=Ho.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function p_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ws).join(`
`)}function m_(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function g_(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=i.getActiveAttrib(t,s),r=o.name;let a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:i.getAttribLocation(t,r),locationSize:a}}return e}function Ws(i){return i!==""}function uh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function dh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const __=/^[ \t]*#include +<([\w\d./]+)>/gm;function wc(i){return i.replace(__,x_)}const v_=new Map;function x_(i,t){let e=te[t];if(e===void 0){const n=v_.get(t);if(n!==void 0)e=te[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return wc(e)}const M_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fh(i){return i.replace(M_,y_)}function y_(i,t,e,n){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function ph(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function S_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Uc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===pu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===qn&&(t="SHADOWMAP_TYPE_VSM"),t}function w_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ms:case ys:t="ENVMAP_TYPE_CUBE";break;case Ar:t="ENVMAP_TYPE_CUBE_UV";break}return t}function E_(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ys:t="ENVMAP_MODE_REFRACTION";break}return t}function b_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case mu:t="ENVMAP_BLENDING_MULTIPLY";break;case vf:t="ENVMAP_BLENDING_MIX";break;case xf:t="ENVMAP_BLENDING_ADD";break}return t}function T_(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function A_(i,t,e,n){const s=i.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const c=S_(e),l=w_(e),h=E_(e),d=b_(e),p=T_(e),f=p_(e),g=m_(o),_=s.createProgram();let m,u,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ws).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ws).join(`
`),u.length>0&&(u+=`
`)):(m=[ph(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ws).join(`
`),u=[ph(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==vi?"#define TONE_MAPPING":"",e.toneMapping!==vi?te.tonemapping_pars_fragment:"",e.toneMapping!==vi?d_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,u_("linearToOutputTexel",e.outputColorSpace),f_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ws).join(`
`)),r=wc(r),r=uh(r,e),r=dh(r,e),a=wc(a),a=uh(a,e),a=dh(a,e),r=fh(r),a=fh(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",e.glslVersion===Pl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Pl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const v=M+m+r,y=M+u+a,A=lh(s,s.VERTEX_SHADER,v),E=lh(s,s.FRAGMENT_SHADER,y);s.attachShader(_,A),s.attachShader(_,E),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(S){if(i.debug.checkShaderErrors){const D=s.getProgramInfoLog(_).trim(),z=s.getShaderInfoLog(A).trim(),G=s.getShaderInfoLog(E).trim();let Q=!0,W=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,A,E);else{const lt=hh(s,A,"vertex"),F=hh(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+D+`
`+lt+`
`+F)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(z===""||G==="")&&(W=!1);W&&(S.diagnostics={runnable:Q,programLog:D,vertexShader:{log:z,prefix:m},fragmentShader:{log:G,prefix:u}})}s.deleteShader(A),s.deleteShader(E),C=new rr(s,_),U=g_(s,_)}let C;this.getUniforms=function(){return C===void 0&&T(this),C};let U;this.getAttributes=function(){return U===void 0&&T(this),U};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(_,a_)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=c_++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=E,this}let R_=0;class C_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new P_(t),e.set(t,n)),n}}class P_{constructor(t){this.id=R_++,this.code=t,this.usedTimes=0}}function L_(i,t,e,n,s,o,r){const a=new Ou,c=new C_,l=new Set,h=[],d=s.logarithmicDepthBuffer,p=s.reverseDepthBuffer,f=s.vertexTextures;let g=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return l.add(x),x===0?"uv":`uv${x}`}function u(x,S,D,z,G){const Q=z.fog,W=G.geometry,lt=x.isMeshStandardMaterial?z.environment:null,F=(x.isMeshStandardMaterial?e:t).get(x.envMap||lt),dt=F&&F.mapping===Ar?F.image.height:null,et=_[x.type];x.precision!==null&&(g=s.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));const xt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,kt=xt!==void 0?xt.length:0;let Xt=0;W.morphAttributes.position!==void 0&&(Xt=1),W.morphAttributes.normal!==void 0&&(Xt=2),W.morphAttributes.color!==void 0&&(Xt=3);let B,K,mt,X;if(et){const $e=Un[et];B=$e.vertexShader,K=$e.fragmentShader}else B=x.vertexShader,K=x.fragmentShader,c.update(x),mt=c.getVertexShaderID(x),X=c.getFragmentShaderID(x);const gt=i.getRenderTarget(),pt=G.isInstancedMesh===!0,St=G.isBatchedMesh===!0,qt=!!x.map,Nt=!!x.matcap,P=!!F,Gt=!!x.aoMap,Dt=!!x.lightMap,It=!!x.bumpMap,bt=!!x.normalMap,Qt=!!x.displacementMap,Ft=!!x.emissiveMap,R=!!x.metalnessMap,w=!!x.roughnessMap,q=x.anisotropy>0,ot=x.clearcoat>0,ft=x.dispersion>0,ct=x.iridescence>0,Ut=x.sheen>0,L=x.transmission>0,Y=q&&!!x.anisotropyMap,it=ot&&!!x.clearcoatMap,V=ot&&!!x.clearcoatNormalMap,tt=ot&&!!x.clearcoatRoughnessMap,vt=ct&&!!x.iridescenceMap,Mt=ct&&!!x.iridescenceThicknessMap,ht=Ut&&!!x.sheenColorMap,Pt=Ut&&!!x.sheenRoughnessMap,ut=!!x.specularMap,Tt=!!x.specularColorMap,N=!!x.specularIntensityMap,_t=L&&!!x.transmissionMap,j=L&&!!x.thicknessMap,st=!!x.gradientMap,Et=!!x.alphaMap,At=x.alphaTest>0,ne=!!x.alphaHash,Le=!!x.extensions;let Je=vi;x.toneMapped&&(gt===null||gt.isXRRenderTarget===!0)&&(Je=i.toneMapping);const ue={shaderID:et,shaderType:x.type,shaderName:x.name,vertexShader:B,fragmentShader:K,defines:x.defines,customVertexShaderID:mt,customFragmentShaderID:X,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,batching:St,batchingColor:St&&G._colorsTexture!==null,instancing:pt,instancingColor:pt&&G.instanceColor!==null,instancingMorph:pt&&G.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:gt===null?i.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:Mi,alphaToCoverage:!!x.alphaToCoverage,map:qt,matcap:Nt,envMap:P,envMapMode:P&&F.mapping,envMapCubeUVHeight:dt,aoMap:Gt,lightMap:Dt,bumpMap:It,normalMap:bt,displacementMap:f&&Qt,emissiveMap:Ft,normalMapObjectSpace:bt&&x.normalMapType===Ef,normalMapTangentSpace:bt&&x.normalMapType===Lu,metalnessMap:R,roughnessMap:w,anisotropy:q,anisotropyMap:Y,clearcoat:ot,clearcoatMap:it,clearcoatNormalMap:V,clearcoatRoughnessMap:tt,dispersion:ft,iridescence:ct,iridescenceMap:vt,iridescenceThicknessMap:Mt,sheen:Ut,sheenColorMap:ht,sheenRoughnessMap:Pt,specularMap:ut,specularColorMap:Tt,specularIntensityMap:N,transmission:L,transmissionMap:_t,thicknessMap:j,gradientMap:st,opaque:x.transparent===!1&&x.blending===ds&&x.alphaToCoverage===!1,alphaMap:Et,alphaTest:At,alphaHash:ne,combine:x.combine,mapUv:qt&&m(x.map.channel),aoMapUv:Gt&&m(x.aoMap.channel),lightMapUv:Dt&&m(x.lightMap.channel),bumpMapUv:It&&m(x.bumpMap.channel),normalMapUv:bt&&m(x.normalMap.channel),displacementMapUv:Qt&&m(x.displacementMap.channel),emissiveMapUv:Ft&&m(x.emissiveMap.channel),metalnessMapUv:R&&m(x.metalnessMap.channel),roughnessMapUv:w&&m(x.roughnessMap.channel),anisotropyMapUv:Y&&m(x.anisotropyMap.channel),clearcoatMapUv:it&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:V&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:vt&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:ht&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&m(x.sheenRoughnessMap.channel),specularMapUv:ut&&m(x.specularMap.channel),specularColorMapUv:Tt&&m(x.specularColorMap.channel),specularIntensityMapUv:N&&m(x.specularIntensityMap.channel),transmissionMapUv:_t&&m(x.transmissionMap.channel),thicknessMapUv:j&&m(x.thicknessMap.channel),alphaMapUv:Et&&m(x.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(bt||q),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!W.attributes.uv&&(qt||Et),fog:!!Q,useFog:x.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:p,skinning:G.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:kt,morphTextureStride:Xt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Je,decodeVideoTexture:qt&&x.map.isVideoTexture===!0&&de.getTransfer(x.map.colorSpace)===ye,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===fe,flipSided:x.side===Ge,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Le&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&x.extensions.multiDraw===!0||St)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ue.vertexUv1s=l.has(1),ue.vertexUv2s=l.has(2),ue.vertexUv3s=l.has(3),l.clear(),ue}function M(x){const S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(const D in x.defines)S.push(D),S.push(x.defines[D]);return x.isRawShaderMaterial===!1&&(v(S,x),y(S,x),S.push(i.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function v(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapCubeUVHeight),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.morphAttributeCount),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function y(x,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.alphaToCoverage&&a.enable(20),x.push(a.mask)}function A(x){const S=_[x.type];let D;if(S){const z=Un[S];D=no.clone(z.uniforms)}else D=x.uniforms;return D}function E(x,S){let D;for(let z=0,G=h.length;z<G;z++){const Q=h[z];if(Q.cacheKey===S){D=Q,++D.usedTimes;break}}return D===void 0&&(D=new A_(i,S,x,o),h.push(D)),D}function T(x){if(--x.usedTimes===0){const S=h.indexOf(x);h[S]=h[h.length-1],h.pop(),x.destroy()}}function C(x){c.remove(x)}function U(){c.dispose()}return{getParameters:u,getProgramCacheKey:M,getUniforms:A,acquireProgram:E,releaseProgram:T,releaseShaderCache:C,programs:h,dispose:U}}function I_(){let i=new WeakMap;function t(r){return i.has(r)}function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function n(r){i.delete(r)}function s(r,a,c){i.get(r)[a]=c}function o(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:o}}function D_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function mh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function gh(){const i=[];let t=0;const e=[],n=[],s=[];function o(){t=0,e.length=0,n.length=0,s.length=0}function r(d,p,f,g,_,m){let u=i[t];return u===void 0?(u={id:d.id,object:d,geometry:p,material:f,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},i[t]=u):(u.id=d.id,u.object=d,u.geometry=p,u.material=f,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=_,u.group=m),t++,u}function a(d,p,f,g,_,m){const u=r(d,p,f,g,_,m);f.transmission>0?n.push(u):f.transparent===!0?s.push(u):e.push(u)}function c(d,p,f,g,_,m){const u=r(d,p,f,g,_,m);f.transmission>0?n.unshift(u):f.transparent===!0?s.unshift(u):e.unshift(u)}function l(d,p){e.length>1&&e.sort(d||D_),n.length>1&&n.sort(p||mh),s.length>1&&s.sort(p||mh)}function h(){for(let d=t,p=i.length;d<p;d++){const f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:o,push:a,unshift:c,finish:h,sort:l}}function U_(){let i=new WeakMap;function t(n,s){const o=i.get(n);let r;return o===void 0?(r=new gh,i.set(n,[r])):s>=o.length?(r=new gh,o.push(r)):r=o[s],r}function e(){i=new WeakMap}return{get:t,dispose:e}}function N_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Zt};break;case"SpotLight":e={position:new I,direction:new I,color:new Zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Zt,groundColor:new Zt};break;case"RectAreaLight":e={color:new Zt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function F_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let O_=0;function B_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function z_(i){const t=new N_,e=F_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);const s=new I,o=new Me,r=new Me;function a(l){let h=0,d=0,p=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let f=0,g=0,_=0,m=0,u=0,M=0,v=0,y=0,A=0,E=0,T=0;l.sort(B_);for(let U=0,x=l.length;U<x;U++){const S=l[U],D=S.color,z=S.intensity,G=S.distance,Q=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)h+=D.r*z,d+=D.g*z,p+=D.b*z;else if(S.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(S.sh.coefficients[W],z);T++}else if(S.isDirectionalLight){const W=t.get(S);if(W.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){const lt=S.shadow,F=e.get(S);F.shadowIntensity=lt.intensity,F.shadowBias=lt.bias,F.shadowNormalBias=lt.normalBias,F.shadowRadius=lt.radius,F.shadowMapSize=lt.mapSize,n.directionalShadow[f]=F,n.directionalShadowMap[f]=Q,n.directionalShadowMatrix[f]=S.shadow.matrix,M++}n.directional[f]=W,f++}else if(S.isSpotLight){const W=t.get(S);W.position.setFromMatrixPosition(S.matrixWorld),W.color.copy(D).multiplyScalar(z),W.distance=G,W.coneCos=Math.cos(S.angle),W.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),W.decay=S.decay,n.spot[_]=W;const lt=S.shadow;if(S.map&&(n.spotLightMap[A]=S.map,A++,lt.updateMatrices(S),S.castShadow&&E++),n.spotLightMatrix[_]=lt.matrix,S.castShadow){const F=e.get(S);F.shadowIntensity=lt.intensity,F.shadowBias=lt.bias,F.shadowNormalBias=lt.normalBias,F.shadowRadius=lt.radius,F.shadowMapSize=lt.mapSize,n.spotShadow[_]=F,n.spotShadowMap[_]=Q,y++}_++}else if(S.isRectAreaLight){const W=t.get(S);W.color.copy(D).multiplyScalar(z),W.halfWidth.set(S.width*.5,0,0),W.halfHeight.set(0,S.height*.5,0),n.rectArea[m]=W,m++}else if(S.isPointLight){const W=t.get(S);if(W.color.copy(S.color).multiplyScalar(S.intensity),W.distance=S.distance,W.decay=S.decay,S.castShadow){const lt=S.shadow,F=e.get(S);F.shadowIntensity=lt.intensity,F.shadowBias=lt.bias,F.shadowNormalBias=lt.normalBias,F.shadowRadius=lt.radius,F.shadowMapSize=lt.mapSize,F.shadowCameraNear=lt.camera.near,F.shadowCameraFar=lt.camera.far,n.pointShadow[g]=F,n.pointShadowMap[g]=Q,n.pointShadowMatrix[g]=S.shadow.matrix,v++}n.point[g]=W,g++}else if(S.isHemisphereLight){const W=t.get(S);W.skyColor.copy(S.color).multiplyScalar(z),W.groundColor.copy(S.groundColor).multiplyScalar(z),n.hemi[u]=W,u++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Rt.LTC_FLOAT_1,n.rectAreaLTC2=Rt.LTC_FLOAT_2):(n.rectAreaLTC1=Rt.LTC_HALF_1,n.rectAreaLTC2=Rt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=p;const C=n.hash;(C.directionalLength!==f||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==u||C.numDirectionalShadows!==M||C.numPointShadows!==v||C.numSpotShadows!==y||C.numSpotMaps!==A||C.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=u,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=y+A-E,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=T,C.directionalLength=f,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=u,C.numDirectionalShadows=M,C.numPointShadows=v,C.numSpotShadows=y,C.numSpotMaps=A,C.numLightProbes=T,n.version=O_++)}function c(l,h){let d=0,p=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let u=0,M=l.length;u<M;u++){const v=l[u];if(v.isDirectionalLight){const y=n.directional[d];y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(v.isSpotLight){const y=n.spot[f];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),f++}else if(v.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),r.identity(),o.copy(v.matrixWorld),o.premultiply(m),r.extractRotation(o),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(r),y.halfHeight.applyMatrix4(r),g++}else if(v.isPointLight){const y=n.point[p];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),p++}else if(v.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function _h(i){const t=new z_(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function o(h){e.push(h)}function r(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:o,pushShadow:r}}function k_(i){let t=new WeakMap;function e(s,o=0){const r=t.get(s);let a;return r===void 0?(a=new _h(i),t.set(s,[a])):o>=r.length?(a=new _h(i),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class G_ extends uo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class H_ extends uo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const V_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,W_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function X_(i,t,e){let n=new Yc;const s=new at,o=new at,r=new xe,a=new G_({depthPacking:wf}),c=new H_,l={},h=e.maxTextureSize,d={[In]:Ge,[Ge]:In,[fe]:fe},p=new je({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:V_,fragmentShader:W_}),f=p.clone();f.defines.HORIZONTAL_PASS=1;const g=new Be;g.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Z(g,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uc;let u=this.type;this.render=function(E,T,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const U=i.getRenderTarget(),x=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Jn),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const z=u!==qn&&this.type===qn,G=u===qn&&this.type!==qn;for(let Q=0,W=E.length;Q<W;Q++){const lt=E[Q],F=lt.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",lt,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);const dt=F.getFrameExtents();if(s.multiply(dt),o.copy(F.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(o.x=Math.floor(h/dt.x),s.x=o.x*dt.x,F.mapSize.x=o.x),s.y>h&&(o.y=Math.floor(h/dt.y),s.y=o.y*dt.y,F.mapSize.y=o.y)),F.map===null||z===!0||G===!0){const xt=this.type!==qn?{minFilter:tn,magFilter:tn}:{};F.map!==null&&F.map.dispose(),F.map=new Cn(s.x,s.y,xt),F.map.texture.name=lt.name+".shadowMap",F.camera.updateProjectionMatrix()}i.setRenderTarget(F.map),i.clear();const et=F.getViewportCount();for(let xt=0;xt<et;xt++){const kt=F.getViewport(xt);r.set(o.x*kt.x,o.y*kt.y,o.x*kt.z,o.y*kt.w),D.viewport(r),F.updateMatrices(lt,xt),n=F.getFrustum(),y(T,C,F.camera,lt,this.type)}F.isPointLightShadow!==!0&&this.type===qn&&M(F,C),F.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(U,x,S)};function M(E,T){const C=t.update(_);p.defines.VSM_SAMPLES!==E.blurSamples&&(p.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Cn(s.x,s.y)),p.uniforms.shadow_pass.value=E.map.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(T,null,C,p,_,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(T,null,C,f,_,null)}function v(E,T,C,U){let x=null;const S=C.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(S!==void 0)x=S;else if(x=C.isPointLight===!0?c:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const D=x.uuid,z=T.uuid;let G=l[D];G===void 0&&(G={},l[D]=G);let Q=G[z];Q===void 0&&(Q=x.clone(),G[z]=Q,T.addEventListener("dispose",A)),x=Q}if(x.visible=T.visible,x.wireframe=T.wireframe,U===qn?x.side=T.shadowSide!==null?T.shadowSide:T.side:x.side=T.shadowSide!==null?T.shadowSide:d[T.side],x.alphaMap=T.alphaMap,x.alphaTest=T.alphaTest,x.map=T.map,x.clipShadows=T.clipShadows,x.clippingPlanes=T.clippingPlanes,x.clipIntersection=T.clipIntersection,x.displacementMap=T.displacementMap,x.displacementScale=T.displacementScale,x.displacementBias=T.displacementBias,x.wireframeLinewidth=T.wireframeLinewidth,x.linewidth=T.linewidth,C.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const D=i.properties.get(x);D.light=C}return x}function y(E,T,C,U,x){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&x===qn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,E.matrixWorld);const z=t.update(E),G=E.material;if(Array.isArray(G)){const Q=z.groups;for(let W=0,lt=Q.length;W<lt;W++){const F=Q[W],dt=G[F.materialIndex];if(dt&&dt.visible){const et=v(E,dt,U,x);E.onBeforeShadow(i,E,T,C,z,et,F),i.renderBufferDirect(C,null,z,et,E,F),E.onAfterShadow(i,E,T,C,z,et,F)}}}else if(G.visible){const Q=v(E,G,U,x);E.onBeforeShadow(i,E,T,C,z,Q,null),i.renderBufferDirect(C,null,z,Q,E,null),E.onAfterShadow(i,E,T,C,z,Q,null)}}const D=E.children;for(let z=0,G=D.length;z<G;z++)y(D[z],T,C,U,x)}function A(E){E.target.removeEventListener("dispose",A);for(const C in l){const U=l[C],x=E.target.uuid;x in U&&(U[x].dispose(),delete U[x])}}}const Y_={[Ha]:Va,[Wa]:qa,[Xa]:Ka,[xs]:Ya,[Va]:Ha,[qa]:Wa,[Ka]:Xa,[Ya]:xs};function q_(i){function t(){let N=!1;const _t=new xe;let j=null;const st=new xe(0,0,0,0);return{setMask:function(Et){j!==Et&&!N&&(i.colorMask(Et,Et,Et,Et),j=Et)},setLocked:function(Et){N=Et},setClear:function(Et,At,ne,Le,Je){Je===!0&&(Et*=Le,At*=Le,ne*=Le),_t.set(Et,At,ne,Le),st.equals(_t)===!1&&(i.clearColor(Et,At,ne,Le),st.copy(_t))},reset:function(){N=!1,j=null,st.set(-1,0,0,0)}}}function e(){let N=!1,_t=!1,j=null,st=null,Et=null;return{setReversed:function(At){_t=At},setTest:function(At){At?mt(i.DEPTH_TEST):X(i.DEPTH_TEST)},setMask:function(At){j!==At&&!N&&(i.depthMask(At),j=At)},setFunc:function(At){if(_t&&(At=Y_[At]),st!==At){switch(At){case Ha:i.depthFunc(i.NEVER);break;case Va:i.depthFunc(i.ALWAYS);break;case Wa:i.depthFunc(i.LESS);break;case xs:i.depthFunc(i.LEQUAL);break;case Xa:i.depthFunc(i.EQUAL);break;case Ya:i.depthFunc(i.GEQUAL);break;case qa:i.depthFunc(i.GREATER);break;case Ka:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}st=At}},setLocked:function(At){N=At},setClear:function(At){Et!==At&&(i.clearDepth(At),Et=At)},reset:function(){N=!1,j=null,st=null,Et=null}}}function n(){let N=!1,_t=null,j=null,st=null,Et=null,At=null,ne=null,Le=null,Je=null;return{setTest:function(ue){N||(ue?mt(i.STENCIL_TEST):X(i.STENCIL_TEST))},setMask:function(ue){_t!==ue&&!N&&(i.stencilMask(ue),_t=ue)},setFunc:function(ue,$e,zn){(j!==ue||st!==$e||Et!==zn)&&(i.stencilFunc(ue,$e,zn),j=ue,st=$e,Et=zn)},setOp:function(ue,$e,zn){(At!==ue||ne!==$e||Le!==zn)&&(i.stencilOp(ue,$e,zn),At=ue,ne=$e,Le=zn)},setLocked:function(ue){N=ue},setClear:function(ue){Je!==ue&&(i.clearStencil(ue),Je=ue)},reset:function(){N=!1,_t=null,j=null,st=null,Et=null,At=null,ne=null,Le=null,Je=null}}}const s=new t,o=new e,r=new n,a=new WeakMap,c=new WeakMap;let l={},h={},d=new WeakMap,p=[],f=null,g=!1,_=null,m=null,u=null,M=null,v=null,y=null,A=null,E=new Zt(0,0,0),T=0,C=!1,U=null,x=null,S=null,D=null,z=null;const G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,W=0;const lt=i.getParameter(i.VERSION);lt.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(lt)[1]),Q=W>=1):lt.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(lt)[1]),Q=W>=2);let F=null,dt={};const et=i.getParameter(i.SCISSOR_BOX),xt=i.getParameter(i.VIEWPORT),kt=new xe().fromArray(et),Xt=new xe().fromArray(xt);function B(N,_t,j,st){const Et=new Uint8Array(4),At=i.createTexture();i.bindTexture(N,At),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ne=0;ne<j;ne++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(_t,0,i.RGBA,1,1,st,0,i.RGBA,i.UNSIGNED_BYTE,Et):i.texImage2D(_t+ne,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Et);return At}const K={};K[i.TEXTURE_2D]=B(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=B(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=B(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=B(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),r.setClear(0),mt(i.DEPTH_TEST),o.setFunc(xs),Dt(!1),It(bl),mt(i.CULL_FACE),P(Jn);function mt(N){l[N]!==!0&&(i.enable(N),l[N]=!0)}function X(N){l[N]!==!1&&(i.disable(N),l[N]=!1)}function gt(N,_t){return h[N]!==_t?(i.bindFramebuffer(N,_t),h[N]=_t,N===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=_t),N===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=_t),!0):!1}function pt(N,_t){let j=p,st=!1;if(N){j=d.get(_t),j===void 0&&(j=[],d.set(_t,j));const Et=N.textures;if(j.length!==Et.length||j[0]!==i.COLOR_ATTACHMENT0){for(let At=0,ne=Et.length;At<ne;At++)j[At]=i.COLOR_ATTACHMENT0+At;j.length=Et.length,st=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,st=!0);st&&i.drawBuffers(j)}function St(N){return f!==N?(i.useProgram(N),f=N,!0):!1}const qt={[Pi]:i.FUNC_ADD,[tf]:i.FUNC_SUBTRACT,[ef]:i.FUNC_REVERSE_SUBTRACT};qt[nf]=i.MIN,qt[sf]=i.MAX;const Nt={[of]:i.ZERO,[rf]:i.ONE,[af]:i.SRC_COLOR,[ka]:i.SRC_ALPHA,[ff]:i.SRC_ALPHA_SATURATE,[uf]:i.DST_COLOR,[lf]:i.DST_ALPHA,[cf]:i.ONE_MINUS_SRC_COLOR,[Ga]:i.ONE_MINUS_SRC_ALPHA,[df]:i.ONE_MINUS_DST_COLOR,[hf]:i.ONE_MINUS_DST_ALPHA,[pf]:i.CONSTANT_COLOR,[mf]:i.ONE_MINUS_CONSTANT_COLOR,[gf]:i.CONSTANT_ALPHA,[_f]:i.ONE_MINUS_CONSTANT_ALPHA};function P(N,_t,j,st,Et,At,ne,Le,Je,ue){if(N===Jn){g===!0&&(X(i.BLEND),g=!1);return}if(g===!1&&(mt(i.BLEND),g=!0),N!==Qd){if(N!==_||ue!==C){if((m!==Pi||v!==Pi)&&(i.blendEquation(i.FUNC_ADD),m=Pi,v=Pi),ue)switch(N){case ds:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qs:i.blendFunc(i.ONE,i.ONE);break;case Tl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Al:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case ds:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qs:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Tl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Al:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}u=null,M=null,y=null,A=null,E.set(0,0,0),T=0,_=N,C=ue}return}Et=Et||_t,At=At||j,ne=ne||st,(_t!==m||Et!==v)&&(i.blendEquationSeparate(qt[_t],qt[Et]),m=_t,v=Et),(j!==u||st!==M||At!==y||ne!==A)&&(i.blendFuncSeparate(Nt[j],Nt[st],Nt[At],Nt[ne]),u=j,M=st,y=At,A=ne),(Le.equals(E)===!1||Je!==T)&&(i.blendColor(Le.r,Le.g,Le.b,Je),E.copy(Le),T=Je),_=N,C=!1}function Gt(N,_t){N.side===fe?X(i.CULL_FACE):mt(i.CULL_FACE);let j=N.side===Ge;_t&&(j=!j),Dt(j),N.blending===ds&&N.transparent===!1?P(Jn):P(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);const st=N.stencilWrite;r.setTest(st),st&&(r.setMask(N.stencilWriteMask),r.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),r.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Qt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?mt(i.SAMPLE_ALPHA_TO_COVERAGE):X(i.SAMPLE_ALPHA_TO_COVERAGE)}function Dt(N){U!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),U=N)}function It(N){N!==Jd?(mt(i.CULL_FACE),N!==x&&(N===bl?i.cullFace(i.BACK):N===$d?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):X(i.CULL_FACE),x=N}function bt(N){N!==S&&(Q&&i.lineWidth(N),S=N)}function Qt(N,_t,j){N?(mt(i.POLYGON_OFFSET_FILL),(D!==_t||z!==j)&&(i.polygonOffset(_t,j),D=_t,z=j)):X(i.POLYGON_OFFSET_FILL)}function Ft(N){N?mt(i.SCISSOR_TEST):X(i.SCISSOR_TEST)}function R(N){N===void 0&&(N=i.TEXTURE0+G-1),F!==N&&(i.activeTexture(N),F=N)}function w(N,_t,j){j===void 0&&(F===null?j=i.TEXTURE0+G-1:j=F);let st=dt[j];st===void 0&&(st={type:void 0,texture:void 0},dt[j]=st),(st.type!==N||st.texture!==_t)&&(F!==j&&(i.activeTexture(j),F=j),i.bindTexture(N,_t||K[N]),st.type=N,st.texture=_t)}function q(){const N=dt[F];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function ot(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ft(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ct(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ut(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function L(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Y(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function it(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function V(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function tt(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function vt(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Mt(N){kt.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),kt.copy(N))}function ht(N){Xt.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),Xt.copy(N))}function Pt(N,_t){let j=c.get(_t);j===void 0&&(j=new WeakMap,c.set(_t,j));let st=j.get(N);st===void 0&&(st=i.getUniformBlockIndex(_t,N.name),j.set(N,st))}function ut(N,_t){const st=c.get(_t).get(N);a.get(_t)!==st&&(i.uniformBlockBinding(_t,st,N.__bindingPointIndex),a.set(_t,st))}function Tt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},F=null,dt={},h={},d=new WeakMap,p=[],f=null,g=!1,_=null,m=null,u=null,M=null,v=null,y=null,A=null,E=new Zt(0,0,0),T=0,C=!1,U=null,x=null,S=null,D=null,z=null,kt.set(0,0,i.canvas.width,i.canvas.height),Xt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),r.reset()}return{buffers:{color:s,depth:o,stencil:r},enable:mt,disable:X,bindFramebuffer:gt,drawBuffers:pt,useProgram:St,setBlending:P,setMaterial:Gt,setFlipSided:Dt,setCullFace:It,setLineWidth:bt,setPolygonOffset:Qt,setScissorTest:Ft,activeTexture:R,bindTexture:w,unbindTexture:q,compressedTexImage2D:ot,compressedTexImage3D:ft,texImage2D:tt,texImage3D:vt,updateUBOMapping:Pt,uniformBlockBinding:ut,texStorage2D:it,texStorage3D:V,texSubImage2D:ct,texSubImage3D:Ut,compressedTexSubImage2D:L,compressedTexSubImage3D:Y,scissor:Mt,viewport:ht,reset:Tt}}function vh(i,t,e,n){const s=K_(n);switch(e){case bu:return i*t;case Au:return i*t;case Ru:return i*t*2;case zc:return i*t/s.components*s.byteLength;case kc:return i*t/s.components*s.byteLength;case Cu:return i*t*2/s.components*s.byteLength;case Gc:return i*t*2/s.components*s.byteLength;case Tu:return i*t*3/s.components*s.byteLength;case Rn:return i*t*4/s.components*s.byteLength;case Hc:return i*t*4/s.components*s.byteLength;case tr:case er:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case nr:case ir:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $a:case tc:return Math.max(i,16)*Math.max(t,8)/4;case Ja:case Qa:return Math.max(i,8)*Math.max(t,8)/2;case ec:case nc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ic:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case sc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case oc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case rc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ac:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case cc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case lc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case hc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case uc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case dc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case fc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case pc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case mc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case gc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case _c:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case sr:case vc:case xc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Pu:case Mc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case yc:case Sc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function K_(i){switch(i){case ti:case Su:return{byteLength:1,components:1};case to:case wu:case $n:return{byteLength:2,components:1};case Oc:case Bc:return{byteLength:2,components:4};case Ni:case Fc:case Nn:return{byteLength:4,components:1};case Eu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Z_(i,t,e,n,s,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new at,h=new WeakMap;let d;const p=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,w){return f?new OffscreenCanvas(R,w):gr("canvas")}function _(R,w,q){let ot=1;const ft=Ft(R);if((ft.width>q||ft.height>q)&&(ot=q/Math.max(ft.width,ft.height)),ot<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const ct=Math.floor(ot*ft.width),Ut=Math.floor(ot*ft.height);d===void 0&&(d=g(ct,Ut));const L=w?g(ct,Ut):d;return L.width=ct,L.height=Ut,L.getContext("2d").drawImage(R,0,0,ct,Ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ft.width+"x"+ft.height+") to ("+ct+"x"+Ut+")."),L}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ft.width+"x"+ft.height+")."),R;return R}function m(R){return R.generateMipmaps&&R.minFilter!==tn&&R.minFilter!==dn}function u(R){i.generateMipmap(R)}function M(R,w,q,ot,ft=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ct=w;if(w===i.RED&&(q===i.FLOAT&&(ct=i.R32F),q===i.HALF_FLOAT&&(ct=i.R16F),q===i.UNSIGNED_BYTE&&(ct=i.R8)),w===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(ct=i.R8UI),q===i.UNSIGNED_SHORT&&(ct=i.R16UI),q===i.UNSIGNED_INT&&(ct=i.R32UI),q===i.BYTE&&(ct=i.R8I),q===i.SHORT&&(ct=i.R16I),q===i.INT&&(ct=i.R32I)),w===i.RG&&(q===i.FLOAT&&(ct=i.RG32F),q===i.HALF_FLOAT&&(ct=i.RG16F),q===i.UNSIGNED_BYTE&&(ct=i.RG8)),w===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(ct=i.RG8UI),q===i.UNSIGNED_SHORT&&(ct=i.RG16UI),q===i.UNSIGNED_INT&&(ct=i.RG32UI),q===i.BYTE&&(ct=i.RG8I),q===i.SHORT&&(ct=i.RG16I),q===i.INT&&(ct=i.RG32I)),w===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(ct=i.RGB8UI),q===i.UNSIGNED_SHORT&&(ct=i.RGB16UI),q===i.UNSIGNED_INT&&(ct=i.RGB32UI),q===i.BYTE&&(ct=i.RGB8I),q===i.SHORT&&(ct=i.RGB16I),q===i.INT&&(ct=i.RGB32I)),w===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(ct=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(ct=i.RGBA16UI),q===i.UNSIGNED_INT&&(ct=i.RGBA32UI),q===i.BYTE&&(ct=i.RGBA8I),q===i.SHORT&&(ct=i.RGBA16I),q===i.INT&&(ct=i.RGBA32I)),w===i.RGB&&q===i.UNSIGNED_INT_5_9_9_9_REV&&(ct=i.RGB9_E5),w===i.RGBA){const Ut=ft?dr:de.getTransfer(ot);q===i.FLOAT&&(ct=i.RGBA32F),q===i.HALF_FLOAT&&(ct=i.RGBA16F),q===i.UNSIGNED_BYTE&&(ct=Ut===ye?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(ct=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(ct=i.RGB5_A1)}return(ct===i.R16F||ct===i.R32F||ct===i.RG16F||ct===i.RG32F||ct===i.RGBA16F||ct===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function v(R,w){let q;return R?w===null||w===Ni||w===Ss?q=i.DEPTH24_STENCIL8:w===Nn?q=i.DEPTH32F_STENCIL8:w===to&&(q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Ni||w===Ss?q=i.DEPTH_COMPONENT24:w===Nn?q=i.DEPTH_COMPONENT32F:w===to&&(q=i.DEPTH_COMPONENT16),q}function y(R,w){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==tn&&R.minFilter!==dn?Math.log2(Math.max(w.width,w.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?w.mipmaps.length:1}function A(R){const w=R.target;w.removeEventListener("dispose",A),T(w),w.isVideoTexture&&h.delete(w)}function E(R){const w=R.target;w.removeEventListener("dispose",E),U(w)}function T(R){const w=n.get(R);if(w.__webglInit===void 0)return;const q=R.source,ot=p.get(q);if(ot){const ft=ot[w.__cacheKey];ft.usedTimes--,ft.usedTimes===0&&C(R),Object.keys(ot).length===0&&p.delete(q)}n.remove(R)}function C(R){const w=n.get(R);i.deleteTexture(w.__webglTexture);const q=R.source,ot=p.get(q);delete ot[w.__cacheKey],r.memory.textures--}function U(R){const w=n.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let ot=0;ot<6;ot++){if(Array.isArray(w.__webglFramebuffer[ot]))for(let ft=0;ft<w.__webglFramebuffer[ot].length;ft++)i.deleteFramebuffer(w.__webglFramebuffer[ot][ft]);else i.deleteFramebuffer(w.__webglFramebuffer[ot]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[ot])}else{if(Array.isArray(w.__webglFramebuffer))for(let ot=0;ot<w.__webglFramebuffer.length;ot++)i.deleteFramebuffer(w.__webglFramebuffer[ot]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ot=0;ot<w.__webglColorRenderbuffer.length;ot++)w.__webglColorRenderbuffer[ot]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[ot]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const q=R.textures;for(let ot=0,ft=q.length;ot<ft;ot++){const ct=n.get(q[ot]);ct.__webglTexture&&(i.deleteTexture(ct.__webglTexture),r.memory.textures--),n.remove(q[ot])}n.remove(R)}let x=0;function S(){x=0}function D(){const R=x;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),x+=1,R}function z(R){const w=[];return w.push(R.wrapS),w.push(R.wrapT),w.push(R.wrapR||0),w.push(R.magFilter),w.push(R.minFilter),w.push(R.anisotropy),w.push(R.internalFormat),w.push(R.format),w.push(R.type),w.push(R.generateMipmaps),w.push(R.premultiplyAlpha),w.push(R.flipY),w.push(R.unpackAlignment),w.push(R.colorSpace),w.join()}function G(R,w){const q=n.get(R);if(R.isVideoTexture&&bt(R),R.isRenderTargetTexture===!1&&R.version>0&&q.__version!==R.version){const ot=R.image;if(ot===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ot.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Xt(q,R,w);return}}e.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+w)}function Q(R,w){const q=n.get(R);if(R.version>0&&q.__version!==R.version){Xt(q,R,w);return}e.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+w)}function W(R,w){const q=n.get(R);if(R.version>0&&q.__version!==R.version){Xt(q,R,w);return}e.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+w)}function lt(R,w){const q=n.get(R);if(R.version>0&&q.__version!==R.version){B(q,R,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+w)}const F={[Ui]:i.REPEAT,[Zn]:i.CLAMP_TO_EDGE,[ja]:i.MIRRORED_REPEAT},dt={[tn]:i.NEAREST,[yf]:i.NEAREST_MIPMAP_NEAREST,[So]:i.NEAREST_MIPMAP_LINEAR,[dn]:i.LINEAR,[Yr]:i.LINEAR_MIPMAP_NEAREST,[Ii]:i.LINEAR_MIPMAP_LINEAR},et={[bf]:i.NEVER,[Lf]:i.ALWAYS,[Tf]:i.LESS,[Iu]:i.LEQUAL,[Af]:i.EQUAL,[Pf]:i.GEQUAL,[Rf]:i.GREATER,[Cf]:i.NOTEQUAL};function xt(R,w){if(w.type===Nn&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===dn||w.magFilter===Yr||w.magFilter===So||w.magFilter===Ii||w.minFilter===dn||w.minFilter===Yr||w.minFilter===So||w.minFilter===Ii)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,F[w.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,F[w.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,F[w.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,dt[w.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,dt[w.minFilter]),w.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,et[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===tn||w.minFilter!==So&&w.minFilter!==Ii||w.type===Nn&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function kt(R,w){let q=!1;R.__webglInit===void 0&&(R.__webglInit=!0,w.addEventListener("dispose",A));const ot=w.source;let ft=p.get(ot);ft===void 0&&(ft={},p.set(ot,ft));const ct=z(w);if(ct!==R.__cacheKey){ft[ct]===void 0&&(ft[ct]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,q=!0),ft[ct].usedTimes++;const Ut=ft[R.__cacheKey];Ut!==void 0&&(ft[R.__cacheKey].usedTimes--,Ut.usedTimes===0&&C(w)),R.__cacheKey=ct,R.__webglTexture=ft[ct].texture}return q}function Xt(R,w,q){let ot=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ot=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ot=i.TEXTURE_3D);const ft=kt(R,w),ct=w.source;e.bindTexture(ot,R.__webglTexture,i.TEXTURE0+q);const Ut=n.get(ct);if(ct.version!==Ut.__version||ft===!0){e.activeTexture(i.TEXTURE0+q);const L=de.getPrimaries(de.workingColorSpace),Y=w.colorSpace===gi?null:de.getPrimaries(w.colorSpace),it=w.colorSpace===gi||L===Y?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let V=_(w.image,!1,s.maxTextureSize);V=Qt(w,V);const tt=o.convert(w.format,w.colorSpace),vt=o.convert(w.type);let Mt=M(w.internalFormat,tt,vt,w.colorSpace,w.isVideoTexture);xt(ot,w);let ht;const Pt=w.mipmaps,ut=w.isVideoTexture!==!0,Tt=Ut.__version===void 0||ft===!0,N=ct.dataReady,_t=y(w,V);if(w.isDepthTexture)Mt=v(w.format===ws,w.type),Tt&&(ut?e.texStorage2D(i.TEXTURE_2D,1,Mt,V.width,V.height):e.texImage2D(i.TEXTURE_2D,0,Mt,V.width,V.height,0,tt,vt,null));else if(w.isDataTexture)if(Pt.length>0){ut&&Tt&&e.texStorage2D(i.TEXTURE_2D,_t,Mt,Pt[0].width,Pt[0].height);for(let j=0,st=Pt.length;j<st;j++)ht=Pt[j],ut?N&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,ht.width,ht.height,tt,vt,ht.data):e.texImage2D(i.TEXTURE_2D,j,Mt,ht.width,ht.height,0,tt,vt,ht.data);w.generateMipmaps=!1}else ut?(Tt&&e.texStorage2D(i.TEXTURE_2D,_t,Mt,V.width,V.height),N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,V.width,V.height,tt,vt,V.data)):e.texImage2D(i.TEXTURE_2D,0,Mt,V.width,V.height,0,tt,vt,V.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ut&&Tt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,_t,Mt,Pt[0].width,Pt[0].height,V.depth);for(let j=0,st=Pt.length;j<st;j++)if(ht=Pt[j],w.format!==Rn)if(tt!==null)if(ut){if(N)if(w.layerUpdates.size>0){const Et=vh(ht.width,ht.height,w.format,w.type);for(const At of w.layerUpdates){const ne=ht.data.subarray(At*Et/ht.data.BYTES_PER_ELEMENT,(At+1)*Et/ht.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,At,ht.width,ht.height,1,tt,ne,0,0)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,ht.width,ht.height,V.depth,tt,ht.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,Mt,ht.width,ht.height,V.depth,0,ht.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ut?N&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,ht.width,ht.height,V.depth,tt,vt,ht.data):e.texImage3D(i.TEXTURE_2D_ARRAY,j,Mt,ht.width,ht.height,V.depth,0,tt,vt,ht.data)}else{ut&&Tt&&e.texStorage2D(i.TEXTURE_2D,_t,Mt,Pt[0].width,Pt[0].height);for(let j=0,st=Pt.length;j<st;j++)ht=Pt[j],w.format!==Rn?tt!==null?ut?N&&e.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,ht.width,ht.height,tt,ht.data):e.compressedTexImage2D(i.TEXTURE_2D,j,Mt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?N&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,ht.width,ht.height,tt,vt,ht.data):e.texImage2D(i.TEXTURE_2D,j,Mt,ht.width,ht.height,0,tt,vt,ht.data)}else if(w.isDataArrayTexture)if(ut){if(Tt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,_t,Mt,V.width,V.height,V.depth),N)if(w.layerUpdates.size>0){const j=vh(V.width,V.height,w.format,w.type);for(const st of w.layerUpdates){const Et=V.data.subarray(st*j/V.data.BYTES_PER_ELEMENT,(st+1)*j/V.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,st,V.width,V.height,1,tt,vt,Et)}w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,V.width,V.height,V.depth,tt,vt,V.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Mt,V.width,V.height,V.depth,0,tt,vt,V.data);else if(w.isData3DTexture)ut?(Tt&&e.texStorage3D(i.TEXTURE_3D,_t,Mt,V.width,V.height,V.depth),N&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,V.width,V.height,V.depth,tt,vt,V.data)):e.texImage3D(i.TEXTURE_3D,0,Mt,V.width,V.height,V.depth,0,tt,vt,V.data);else if(w.isFramebufferTexture){if(Tt)if(ut)e.texStorage2D(i.TEXTURE_2D,_t,Mt,V.width,V.height);else{let j=V.width,st=V.height;for(let Et=0;Et<_t;Et++)e.texImage2D(i.TEXTURE_2D,Et,Mt,j,st,0,tt,vt,null),j>>=1,st>>=1}}else if(Pt.length>0){if(ut&&Tt){const j=Ft(Pt[0]);e.texStorage2D(i.TEXTURE_2D,_t,Mt,j.width,j.height)}for(let j=0,st=Pt.length;j<st;j++)ht=Pt[j],ut?N&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,tt,vt,ht):e.texImage2D(i.TEXTURE_2D,j,Mt,tt,vt,ht);w.generateMipmaps=!1}else if(ut){if(Tt){const j=Ft(V);e.texStorage2D(i.TEXTURE_2D,_t,Mt,j.width,j.height)}N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,tt,vt,V)}else e.texImage2D(i.TEXTURE_2D,0,Mt,tt,vt,V);m(w)&&u(ot),Ut.__version=ct.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function B(R,w,q){if(w.image.length!==6)return;const ot=kt(R,w),ft=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+q);const ct=n.get(ft);if(ft.version!==ct.__version||ot===!0){e.activeTexture(i.TEXTURE0+q);const Ut=de.getPrimaries(de.workingColorSpace),L=w.colorSpace===gi?null:de.getPrimaries(w.colorSpace),Y=w.colorSpace===gi||Ut===L?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Y);const it=w.isCompressedTexture||w.image[0].isCompressedTexture,V=w.image[0]&&w.image[0].isDataTexture,tt=[];for(let st=0;st<6;st++)!it&&!V?tt[st]=_(w.image[st],!0,s.maxCubemapSize):tt[st]=V?w.image[st].image:w.image[st],tt[st]=Qt(w,tt[st]);const vt=tt[0],Mt=o.convert(w.format,w.colorSpace),ht=o.convert(w.type),Pt=M(w.internalFormat,Mt,ht,w.colorSpace),ut=w.isVideoTexture!==!0,Tt=ct.__version===void 0||ot===!0,N=ft.dataReady;let _t=y(w,vt);xt(i.TEXTURE_CUBE_MAP,w);let j;if(it){ut&&Tt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,_t,Pt,vt.width,vt.height);for(let st=0;st<6;st++){j=tt[st].mipmaps;for(let Et=0;Et<j.length;Et++){const At=j[Et];w.format!==Rn?Mt!==null?ut?N&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Et,0,0,At.width,At.height,Mt,At.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Et,Pt,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ut?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Et,0,0,At.width,At.height,Mt,ht,At.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Et,Pt,At.width,At.height,0,Mt,ht,At.data)}}}else{if(j=w.mipmaps,ut&&Tt){j.length>0&&_t++;const st=Ft(tt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,_t,Pt,st.width,st.height)}for(let st=0;st<6;st++)if(V){ut?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,tt[st].width,tt[st].height,Mt,ht,tt[st].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Pt,tt[st].width,tt[st].height,0,Mt,ht,tt[st].data);for(let Et=0;Et<j.length;Et++){const ne=j[Et].image[st].image;ut?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Et+1,0,0,ne.width,ne.height,Mt,ht,ne.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Et+1,Pt,ne.width,ne.height,0,Mt,ht,ne.data)}}else{ut?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Mt,ht,tt[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Pt,Mt,ht,tt[st]);for(let Et=0;Et<j.length;Et++){const At=j[Et];ut?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Et+1,0,0,Mt,ht,At.image[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Et+1,Pt,Mt,ht,At.image[st])}}}m(w)&&u(i.TEXTURE_CUBE_MAP),ct.__version=ft.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function K(R,w,q,ot,ft,ct){const Ut=o.convert(q.format,q.colorSpace),L=o.convert(q.type),Y=M(q.internalFormat,Ut,L,q.colorSpace);if(!n.get(w).__hasExternalTextures){const V=Math.max(1,w.width>>ct),tt=Math.max(1,w.height>>ct);ft===i.TEXTURE_3D||ft===i.TEXTURE_2D_ARRAY?e.texImage3D(ft,ct,Y,V,tt,w.depth,0,Ut,L,null):e.texImage2D(ft,ct,Y,V,tt,0,Ut,L,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),It(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ot,ft,n.get(q).__webglTexture,0,Dt(w)):(ft===i.TEXTURE_2D||ft>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ft<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ot,ft,n.get(q).__webglTexture,ct),e.bindFramebuffer(i.FRAMEBUFFER,null)}function mt(R,w,q){if(i.bindRenderbuffer(i.RENDERBUFFER,R),w.depthBuffer){const ot=w.depthTexture,ft=ot&&ot.isDepthTexture?ot.type:null,ct=v(w.stencilBuffer,ft),Ut=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,L=Dt(w);It(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,L,ct,w.width,w.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,L,ct,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,ct,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ut,i.RENDERBUFFER,R)}else{const ot=w.textures;for(let ft=0;ft<ot.length;ft++){const ct=ot[ft],Ut=o.convert(ct.format,ct.colorSpace),L=o.convert(ct.type),Y=M(ct.internalFormat,Ut,L,ct.colorSpace),it=Dt(w);q&&It(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,it,Y,w.width,w.height):It(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,it,Y,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Y,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function X(R,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),G(w.depthTexture,0);const ot=n.get(w.depthTexture).__webglTexture,ft=Dt(w);if(w.depthTexture.format===fs)It(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ot,0,ft):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ot,0);else if(w.depthTexture.format===ws)It(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ot,0,ft):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ot,0);else throw new Error("Unknown depthTexture format")}function gt(R){const w=n.get(R),q=R.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==R.depthTexture){const ot=R.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ot){const ft=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ot.removeEventListener("dispose",ft)};ot.addEventListener("dispose",ft),w.__depthDisposeCallback=ft}w.__boundDepthTexture=ot}if(R.depthTexture&&!w.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");X(w.__webglFramebuffer,R)}else if(q){w.__webglDepthbuffer=[];for(let ot=0;ot<6;ot++)if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[ot]),w.__webglDepthbuffer[ot]===void 0)w.__webglDepthbuffer[ot]=i.createRenderbuffer(),mt(w.__webglDepthbuffer[ot],R,!1);else{const ft=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=w.__webglDepthbuffer[ot];i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,ft,i.RENDERBUFFER,ct)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),mt(w.__webglDepthbuffer,R,!1);else{const ot=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ft),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,ft)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function pt(R,w,q){const ot=n.get(R);w!==void 0&&K(ot.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&gt(R)}function St(R){const w=R.texture,q=n.get(R),ot=n.get(w);R.addEventListener("dispose",E);const ft=R.textures,ct=R.isWebGLCubeRenderTarget===!0,Ut=ft.length>1;if(Ut||(ot.__webglTexture===void 0&&(ot.__webglTexture=i.createTexture()),ot.__version=w.version,r.memory.textures++),ct){q.__webglFramebuffer=[];for(let L=0;L<6;L++)if(w.mipmaps&&w.mipmaps.length>0){q.__webglFramebuffer[L]=[];for(let Y=0;Y<w.mipmaps.length;Y++)q.__webglFramebuffer[L][Y]=i.createFramebuffer()}else q.__webglFramebuffer[L]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){q.__webglFramebuffer=[];for(let L=0;L<w.mipmaps.length;L++)q.__webglFramebuffer[L]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(Ut)for(let L=0,Y=ft.length;L<Y;L++){const it=n.get(ft[L]);it.__webglTexture===void 0&&(it.__webglTexture=i.createTexture(),r.memory.textures++)}if(R.samples>0&&It(R)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let L=0;L<ft.length;L++){const Y=ft[L];q.__webglColorRenderbuffer[L]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[L]);const it=o.convert(Y.format,Y.colorSpace),V=o.convert(Y.type),tt=M(Y.internalFormat,it,V,Y.colorSpace,R.isXRRenderTarget===!0),vt=Dt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,vt,tt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+L,i.RENDERBUFFER,q.__webglColorRenderbuffer[L])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),mt(q.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ct){e.bindTexture(i.TEXTURE_CUBE_MAP,ot.__webglTexture),xt(i.TEXTURE_CUBE_MAP,w);for(let L=0;L<6;L++)if(w.mipmaps&&w.mipmaps.length>0)for(let Y=0;Y<w.mipmaps.length;Y++)K(q.__webglFramebuffer[L][Y],R,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+L,Y);else K(q.__webglFramebuffer[L],R,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+L,0);m(w)&&u(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ut){for(let L=0,Y=ft.length;L<Y;L++){const it=ft[L],V=n.get(it);e.bindTexture(i.TEXTURE_2D,V.__webglTexture),xt(i.TEXTURE_2D,it),K(q.__webglFramebuffer,R,it,i.COLOR_ATTACHMENT0+L,i.TEXTURE_2D,0),m(it)&&u(i.TEXTURE_2D)}e.unbindTexture()}else{let L=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(L=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(L,ot.__webglTexture),xt(L,w),w.mipmaps&&w.mipmaps.length>0)for(let Y=0;Y<w.mipmaps.length;Y++)K(q.__webglFramebuffer[Y],R,w,i.COLOR_ATTACHMENT0,L,Y);else K(q.__webglFramebuffer,R,w,i.COLOR_ATTACHMENT0,L,0);m(w)&&u(L),e.unbindTexture()}R.depthBuffer&&gt(R)}function qt(R){const w=R.textures;for(let q=0,ot=w.length;q<ot;q++){const ft=w[q];if(m(ft)){const ct=R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ut=n.get(ft).__webglTexture;e.bindTexture(ct,Ut),u(ct),e.unbindTexture()}}}const Nt=[],P=[];function Gt(R){if(R.samples>0){if(It(R)===!1){const w=R.textures,q=R.width,ot=R.height;let ft=i.COLOR_BUFFER_BIT;const ct=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ut=n.get(R),L=w.length>1;if(L)for(let Y=0;Y<w.length;Y++)e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer);for(let Y=0;Y<w.length;Y++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ft|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ft|=i.STENCIL_BUFFER_BIT)),L){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ut.__webglColorRenderbuffer[Y]);const it=n.get(w[Y]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,it,0)}i.blitFramebuffer(0,0,q,ot,0,0,q,ot,ft,i.NEAREST),c===!0&&(Nt.length=0,P.length=0,Nt.push(i.COLOR_ATTACHMENT0+Y),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Nt.push(ct),P.push(ct),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,P)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Nt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),L)for(let Y=0;Y<w.length;Y++){e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,Ut.__webglColorRenderbuffer[Y]);const it=n.get(w[Y]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.TEXTURE_2D,it,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const w=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function Dt(R){return Math.min(s.maxSamples,R.samples)}function It(R){const w=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function bt(R){const w=r.render.frame;h.get(R)!==w&&(h.set(R,w),R.update())}function Qt(R,w){const q=R.colorSpace,ot=R.format,ft=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||q!==Mi&&q!==gi&&(de.getTransfer(q)===ye?(ot!==Rn||ft!==ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),w}function Ft(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=D,this.resetTextureUnits=S,this.setTexture2D=G,this.setTexture2DArray=Q,this.setTexture3D=W,this.setTextureCube=lt,this.rebindTextures=pt,this.setupRenderTarget=St,this.updateRenderTargetMipmap=qt,this.updateMultisampleRenderTarget=Gt,this.setupDepthRenderbuffer=gt,this.setupFrameBufferTexture=K,this.useMultisampledRTT=It}function j_(i,t){function e(n,s=gi){let o;const r=de.getTransfer(s);if(n===ti)return i.UNSIGNED_BYTE;if(n===Oc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Bc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Eu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Su)return i.BYTE;if(n===wu)return i.SHORT;if(n===to)return i.UNSIGNED_SHORT;if(n===Fc)return i.INT;if(n===Ni)return i.UNSIGNED_INT;if(n===Nn)return i.FLOAT;if(n===$n)return i.HALF_FLOAT;if(n===bu)return i.ALPHA;if(n===Tu)return i.RGB;if(n===Rn)return i.RGBA;if(n===Au)return i.LUMINANCE;if(n===Ru)return i.LUMINANCE_ALPHA;if(n===fs)return i.DEPTH_COMPONENT;if(n===ws)return i.DEPTH_STENCIL;if(n===zc)return i.RED;if(n===kc)return i.RED_INTEGER;if(n===Cu)return i.RG;if(n===Gc)return i.RG_INTEGER;if(n===Hc)return i.RGBA_INTEGER;if(n===tr||n===er||n===nr||n===ir)if(r===ye)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===tr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===er)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===nr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ir)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===tr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===er)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===nr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ir)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ja||n===$a||n===Qa||n===tc)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Ja)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===$a)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Qa)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===tc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ec||n===nc||n===ic)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===ec||n===nc)return r===ye?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===ic)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===sc||n===oc||n===rc||n===ac||n===cc||n===lc||n===hc||n===uc||n===dc||n===fc||n===pc||n===mc||n===gc||n===_c)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===sc)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===oc)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===rc)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ac)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===cc)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===lc)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===hc)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===uc)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===dc)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===fc)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===pc)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===mc)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===gc)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===_c)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===sr||n===vc||n===xc)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===sr)return r===ye?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===vc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===xc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Pu||n===Mc||n===yc||n===Sc)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===sr)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Mc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===yc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Sc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ss?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class J_ extends un{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class wt extends Ae{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $_={type:"move"};class Ma{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,o=null,r=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),u=this._getHandJoint(l,_);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],p=h.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&p>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&p<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($_)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=o!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new wt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Q_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ev{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ye,o=t.properties.get(s);o.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new je({vertexShader:Q_,fragmentShader:tv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Z(new be(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class nv extends Bi{constructor(t,e){super();const n=this;let s=null,o=1,r=null,a="local-floor",c=1,l=null,h=null,d=null,p=null,f=null,g=null;const _=new ev,m=e.getContextAttributes();let u=null,M=null;const v=[],y=[],A=new at;let E=null;const T=new un;T.layers.enable(1),T.viewport=new xe;const C=new un;C.layers.enable(2),C.viewport=new xe;const U=[T,C],x=new J_;x.layers.enable(1),x.layers.enable(2);let S=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let K=v[B];return K===void 0&&(K=new Ma,v[B]=K),K.getTargetRaySpace()},this.getControllerGrip=function(B){let K=v[B];return K===void 0&&(K=new Ma,v[B]=K),K.getGripSpace()},this.getHand=function(B){let K=v[B];return K===void 0&&(K=new Ma,v[B]=K),K.getHandSpace()};function z(B){const K=y.indexOf(B.inputSource);if(K===-1)return;const mt=v[K];mt!==void 0&&(mt.update(B.inputSource,B.frame,l||r),mt.dispatchEvent({type:B.type,data:B.inputSource}))}function G(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",Q);for(let B=0;B<v.length;B++){const K=y[B];K!==null&&(y[B]=null,v[B].disconnect(K))}S=null,D=null,_.reset(),t.setRenderTarget(u),f=null,p=null,d=null,s=null,M=null,Xt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){o=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(B){l=B},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(B){if(s=B,s!==null){if(u=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",G),s.addEventListener("inputsourceschange",Q),m.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(A),s.renderState.layers===void 0){const K={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};f=new XRWebGLLayer(s,e,K),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Cn(f.framebufferWidth,f.framebufferHeight,{format:Rn,type:ti,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let K=null,mt=null,X=null;m.depth&&(X=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,K=m.stencil?ws:fs,mt=m.stencil?Ss:Ni);const gt={colorFormat:e.RGBA8,depthFormat:X,scaleFactor:o};d=new XRWebGLBinding(s,e),p=d.createProjectionLayer(gt),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),M=new Cn(p.textureWidth,p.textureHeight,{format:Rn,type:ti,depthTexture:new Xu(p.textureWidth,p.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await s.requestReferenceSpace(a),Xt.setContext(s),Xt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Q(B){for(let K=0;K<B.removed.length;K++){const mt=B.removed[K],X=y.indexOf(mt);X>=0&&(y[X]=null,v[X].disconnect(mt))}for(let K=0;K<B.added.length;K++){const mt=B.added[K];let X=y.indexOf(mt);if(X===-1){for(let pt=0;pt<v.length;pt++)if(pt>=y.length){y.push(mt),X=pt;break}else if(y[pt]===null){y[pt]=mt,X=pt;break}if(X===-1)break}const gt=v[X];gt&&gt.connect(mt)}}const W=new I,lt=new I;function F(B,K,mt){W.setFromMatrixPosition(K.matrixWorld),lt.setFromMatrixPosition(mt.matrixWorld);const X=W.distanceTo(lt),gt=K.projectionMatrix.elements,pt=mt.projectionMatrix.elements,St=gt[14]/(gt[10]-1),qt=gt[14]/(gt[10]+1),Nt=(gt[9]+1)/gt[5],P=(gt[9]-1)/gt[5],Gt=(gt[8]-1)/gt[0],Dt=(pt[8]+1)/pt[0],It=St*Gt,bt=St*Dt,Qt=X/(-Gt+Dt),Ft=Qt*-Gt;if(K.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(Ft),B.translateZ(Qt),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert(),gt[10]===-1)B.projectionMatrix.copy(K.projectionMatrix),B.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const R=St+Qt,w=qt+Qt,q=It-Ft,ot=bt+(X-Ft),ft=Nt*qt/w*R,ct=P*qt/w*R;B.projectionMatrix.makePerspective(q,ot,ft,ct,R,w),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}}function dt(B,K){K===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(K.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(s===null)return;let K=B.near,mt=B.far;_.texture!==null&&(_.depthNear>0&&(K=_.depthNear),_.depthFar>0&&(mt=_.depthFar)),x.near=C.near=T.near=K,x.far=C.far=T.far=mt,(S!==x.near||D!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),S=x.near,D=x.far);const X=B.parent,gt=x.cameras;dt(x,X);for(let pt=0;pt<gt.length;pt++)dt(gt[pt],X);gt.length===2?F(x,T,C):x.projectionMatrix.copy(T.projectionMatrix),et(B,x,X)};function et(B,K,mt){mt===null?B.matrix.copy(K.matrixWorld):(B.matrix.copy(mt.matrixWorld),B.matrix.invert(),B.matrix.multiply(K.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(K.projectionMatrix),B.projectionMatrixInverse.copy(K.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=eo*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(p===null&&f===null))return c},this.setFoveation=function(B){c=B,p!==null&&(p.fixedFoveation=B),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=B)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let xt=null;function kt(B,K){if(h=K.getViewerPose(l||r),g=K,h!==null){const mt=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let X=!1;mt.length!==x.cameras.length&&(x.cameras.length=0,X=!0);for(let pt=0;pt<mt.length;pt++){const St=mt[pt];let qt=null;if(f!==null)qt=f.getViewport(St);else{const P=d.getViewSubImage(p,St);qt=P.viewport,pt===0&&(t.setRenderTargetTextures(M,P.colorTexture,p.ignoreDepthValues?void 0:P.depthStencilTexture),t.setRenderTarget(M))}let Nt=U[pt];Nt===void 0&&(Nt=new un,Nt.layers.enable(pt),Nt.viewport=new xe,U[pt]=Nt),Nt.matrix.fromArray(St.transform.matrix),Nt.matrix.decompose(Nt.position,Nt.quaternion,Nt.scale),Nt.projectionMatrix.fromArray(St.projectionMatrix),Nt.projectionMatrixInverse.copy(Nt.projectionMatrix).invert(),Nt.viewport.set(qt.x,qt.y,qt.width,qt.height),pt===0&&(x.matrix.copy(Nt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),X===!0&&x.cameras.push(Nt)}const gt=s.enabledFeatures;if(gt&&gt.includes("depth-sensing")){const pt=d.getDepthInformation(mt[0]);pt&&pt.isValid&&pt.texture&&_.init(t,pt,s.renderState)}}for(let mt=0;mt<v.length;mt++){const X=y[mt],gt=v[mt];X!==null&&gt!==void 0&&gt.update(X,K,l||r)}xt&&xt(B,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}const Xt=new Wu;Xt.setAnimationLoop(kt),this.setAnimationLoop=function(B){xt=B},this.dispose=function(){}}}const Ri=new On,iv=new Me;function sv(i,t){function e(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,Gu(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,M,v,y){u.isMeshBasicMaterial||u.isMeshLambertMaterial?o(m,u):u.isMeshToonMaterial?(o(m,u),d(m,u)):u.isMeshPhongMaterial?(o(m,u),h(m,u)):u.isMeshStandardMaterial?(o(m,u),p(m,u),u.isMeshPhysicalMaterial&&f(m,u,y)):u.isMeshMatcapMaterial?(o(m,u),g(m,u)):u.isMeshDepthMaterial?o(m,u):u.isMeshDistanceMaterial?(o(m,u),_(m,u)):u.isMeshNormalMaterial?o(m,u):u.isLineBasicMaterial?(r(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?c(m,u,M,v):u.isSpriteMaterial?l(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function o(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,e(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Ge&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,e(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Ge&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,e(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,e(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const M=t.get(u),v=M.envMap,y=M.envMapRotation;v&&(m.envMap.value=v,Ri.copy(y),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),m.envMapRotation.value.setFromMatrix4(iv.makeRotationFromEuler(Ri)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,m.aoMapTransform))}function r(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function c(m,u,M,v){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*M,m.scale.value=v*.5,u.map&&(m.map.value=u.map,e(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function l(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function p(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function f(m,u,M){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Ge&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function _(m,u){const M=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ov(i,t,e,n){let s={},o={},r=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,v){const y=v.program;n.uniformBlockBinding(M,y)}function l(M,v){let y=s[M.id];y===void 0&&(g(M),y=h(M),s[M.id]=y,M.addEventListener("dispose",m));const A=v.program;n.updateUBOMapping(M,A);const E=t.render.frame;o[M.id]!==E&&(p(M),o[M.id]=E)}function h(M){const v=d();M.__bindingPointIndex=v;const y=i.createBuffer(),A=M.__size,E=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,A,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,y),y}function d(){for(let M=0;M<a;M++)if(r.indexOf(M)===-1)return r.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(M){const v=s[M.id],y=M.uniforms,A=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let E=0,T=y.length;E<T;E++){const C=Array.isArray(y[E])?y[E]:[y[E]];for(let U=0,x=C.length;U<x;U++){const S=C[U];if(f(S,E,U,A)===!0){const D=S.__offset,z=Array.isArray(S.value)?S.value:[S.value];let G=0;for(let Q=0;Q<z.length;Q++){const W=z[Q],lt=_(W);typeof W=="number"||typeof W=="boolean"?(S.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,D+G,S.__data)):W.isMatrix3?(S.__data[0]=W.elements[0],S.__data[1]=W.elements[1],S.__data[2]=W.elements[2],S.__data[3]=0,S.__data[4]=W.elements[3],S.__data[5]=W.elements[4],S.__data[6]=W.elements[5],S.__data[7]=0,S.__data[8]=W.elements[6],S.__data[9]=W.elements[7],S.__data[10]=W.elements[8],S.__data[11]=0):(W.toArray(S.__data,G),G+=lt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,D,S.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(M,v,y,A){const E=M.value,T=v+"_"+y;if(A[T]===void 0)return typeof E=="number"||typeof E=="boolean"?A[T]=E:A[T]=E.clone(),!0;{const C=A[T];if(typeof E=="number"||typeof E=="boolean"){if(C!==E)return A[T]=E,!0}else if(C.equals(E)===!1)return C.copy(E),!0}return!1}function g(M){const v=M.uniforms;let y=0;const A=16;for(let T=0,C=v.length;T<C;T++){const U=Array.isArray(v[T])?v[T]:[v[T]];for(let x=0,S=U.length;x<S;x++){const D=U[x],z=Array.isArray(D.value)?D.value:[D.value];for(let G=0,Q=z.length;G<Q;G++){const W=z[G],lt=_(W),F=y%A,dt=F%lt.boundary,et=F+dt;y+=dt,et!==0&&A-et<lt.storage&&(y+=A-et),D.__data=new Float32Array(lt.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=y,y+=lt.storage}}}const E=y%A;return E>0&&(y+=A-E),M.__size=y,M.__cache={},this}function _(M){const v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function m(M){const v=M.target;v.removeEventListener("dispose",m);const y=r.indexOf(v.__bindingPointIndex);r.splice(y,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete o[v.id]}function u(){for(const M in s)i.deleteBuffer(s[M]);r=[],s={},o={}}return{bind:c,update:l,dispose:u}}class rv{constructor(t={}){const{canvas:e=Kf(),context:n=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=r;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const u=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=En,this.toneMapping=vi,this.toneMappingExposure=1;const v=this;let y=!1,A=0,E=0,T=null,C=-1,U=null;const x=new xe,S=new xe;let D=null;const z=new Zt(0);let G=0,Q=e.width,W=e.height,lt=1,F=null,dt=null;const et=new xe(0,0,Q,W),xt=new xe(0,0,Q,W);let kt=!1;const Xt=new Yc;let B=!1,K=!1;const mt=new Me,X=new Me,gt=new I,pt=new xe,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qt=!1;function Nt(){return T===null?lt:1}let P=n;function Gt(b,k){return e.getContext(b,k)}try{const b={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Dc}`),e.addEventListener("webglcontextlost",st,!1),e.addEventListener("webglcontextrestored",Et,!1),e.addEventListener("webglcontextcreationerror",At,!1),P===null){const k="webgl2";if(P=Gt(k,b),P===null)throw Gt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Dt,It,bt,Qt,Ft,R,w,q,ot,ft,ct,Ut,L,Y,it,V,tt,vt,Mt,ht,Pt,ut,Tt,N;function _t(){Dt=new ug(P),Dt.init(),ut=new j_(P,Dt),It=new og(P,Dt,t,ut),bt=new q_(P),It.reverseDepthBuffer&&bt.buffers.depth.setReversed(!0),Qt=new pg(P),Ft=new I_,R=new Z_(P,Dt,bt,Ft,It,ut,Qt),w=new ag(v),q=new hg(v),ot=new yp(P),Tt=new ig(P,ot),ft=new dg(P,ot,Qt,Tt),ct=new gg(P,ft,ot,Qt),Mt=new mg(P,It,R),V=new rg(Ft),Ut=new L_(v,w,q,Dt,It,Tt,V),L=new sv(v,Ft),Y=new U_,it=new k_(Dt),vt=new ng(v,w,q,bt,ct,p,c),tt=new X_(v,ct,It),N=new ov(P,Qt,It,bt),ht=new sg(P,Dt,Qt),Pt=new fg(P,Dt,Qt),Qt.programs=Ut.programs,v.capabilities=It,v.extensions=Dt,v.properties=Ft,v.renderLists=Y,v.shadowMap=tt,v.state=bt,v.info=Qt}_t();const j=new nv(v,P);this.xr=j,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const b=Dt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Dt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return lt},this.setPixelRatio=function(b){b!==void 0&&(lt=b,this.setSize(Q,W,!1))},this.getSize=function(b){return b.set(Q,W)},this.setSize=function(b,k,J=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=b,W=k,e.width=Math.floor(b*lt),e.height=Math.floor(k*lt),J===!0&&(e.style.width=b+"px",e.style.height=k+"px"),this.setViewport(0,0,b,k)},this.getDrawingBufferSize=function(b){return b.set(Q*lt,W*lt).floor()},this.setDrawingBufferSize=function(b,k,J){Q=b,W=k,lt=J,e.width=Math.floor(b*J),e.height=Math.floor(k*J),this.setViewport(0,0,b,k)},this.getCurrentViewport=function(b){return b.copy(x)},this.getViewport=function(b){return b.copy(et)},this.setViewport=function(b,k,J,$){b.isVector4?et.set(b.x,b.y,b.z,b.w):et.set(b,k,J,$),bt.viewport(x.copy(et).multiplyScalar(lt).round())},this.getScissor=function(b){return b.copy(xt)},this.setScissor=function(b,k,J,$){b.isVector4?xt.set(b.x,b.y,b.z,b.w):xt.set(b,k,J,$),bt.scissor(S.copy(xt).multiplyScalar(lt).round())},this.getScissorTest=function(){return kt},this.setScissorTest=function(b){bt.setScissorTest(kt=b)},this.setOpaqueSort=function(b){F=b},this.setTransparentSort=function(b){dt=b},this.getClearColor=function(b){return b.copy(vt.getClearColor())},this.setClearColor=function(){vt.setClearColor.apply(vt,arguments)},this.getClearAlpha=function(){return vt.getClearAlpha()},this.setClearAlpha=function(){vt.setClearAlpha.apply(vt,arguments)},this.clear=function(b=!0,k=!0,J=!0){let $=0;if(b){let H=!1;if(T!==null){const yt=T.texture.format;H=yt===Hc||yt===Gc||yt===kc}if(H){const yt=T.texture.type,Lt=yt===ti||yt===Ni||yt===to||yt===Ss||yt===Oc||yt===Bc,Ot=vt.getClearColor(),zt=vt.getClearAlpha(),jt=Ot.r,Jt=Ot.g,Ht=Ot.b;Lt?(f[0]=jt,f[1]=Jt,f[2]=Ht,f[3]=zt,P.clearBufferuiv(P.COLOR,0,f)):(g[0]=jt,g[1]=Jt,g[2]=Ht,g[3]=zt,P.clearBufferiv(P.COLOR,0,g))}else $|=P.COLOR_BUFFER_BIT}k&&($|=P.DEPTH_BUFFER_BIT,P.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),J&&($|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",st,!1),e.removeEventListener("webglcontextrestored",Et,!1),e.removeEventListener("webglcontextcreationerror",At,!1),Y.dispose(),it.dispose(),Ft.dispose(),w.dispose(),q.dispose(),ct.dispose(),Tt.dispose(),N.dispose(),Ut.dispose(),j.dispose(),j.removeEventListener("sessionstart",_l),j.removeEventListener("sessionend",vl),Si.stop()};function st(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function Et(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const b=Qt.autoReset,k=tt.enabled,J=tt.autoUpdate,$=tt.needsUpdate,H=tt.type;_t(),Qt.autoReset=b,tt.enabled=k,tt.autoUpdate=J,tt.needsUpdate=$,tt.type=H}function At(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ne(b){const k=b.target;k.removeEventListener("dispose",ne),Le(k)}function Le(b){Je(b),Ft.remove(b)}function Je(b){const k=Ft.get(b).programs;k!==void 0&&(k.forEach(function(J){Ut.releaseProgram(J)}),b.isShaderMaterial&&Ut.releaseShaderCache(b))}this.renderBufferDirect=function(b,k,J,$,H,yt){k===null&&(k=St);const Lt=H.isMesh&&H.matrixWorld.determinant()<0,Ot=qd(b,k,J,$,H);bt.setMaterial($,Lt);let zt=J.index,jt=1;if($.wireframe===!0){if(zt=ft.getWireframeAttribute(J),zt===void 0)return;jt=2}const Jt=J.drawRange,Ht=J.attributes.position;let ge=Jt.start*jt,Se=(Jt.start+Jt.count)*jt;yt!==null&&(ge=Math.max(ge,yt.start*jt),Se=Math.min(Se,(yt.start+yt.count)*jt)),zt!==null?(ge=Math.max(ge,0),Se=Math.min(Se,zt.count)):Ht!=null&&(ge=Math.max(ge,0),Se=Math.min(Se,Ht.count));const Te=Se-ge;if(Te<0||Te===1/0)return;Tt.setup(H,$,Ot,J,zt);let rn,pe=ht;if(zt!==null&&(rn=ot.get(zt),pe=Pt,pe.setIndex(rn)),H.isMesh)$.wireframe===!0?(bt.setLineWidth($.wireframeLinewidth*Nt()),pe.setMode(P.LINES)):pe.setMode(P.TRIANGLES);else if(H.isLine){let Wt=$.linewidth;Wt===void 0&&(Wt=1),bt.setLineWidth(Wt*Nt()),H.isLineSegments?pe.setMode(P.LINES):H.isLineLoop?pe.setMode(P.LINE_LOOP):pe.setMode(P.LINE_STRIP)}else H.isPoints?pe.setMode(P.POINTS):H.isSprite&&pe.setMode(P.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)pe.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(Dt.get("WEBGL_multi_draw"))pe.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Wt=H._multiDrawStarts,ze=H._multiDrawCounts,me=H._multiDrawCount,xn=zt?ot.get(zt).bytesPerElement:1,Hi=Ft.get($).currentProgram.getUniforms();for(let an=0;an<me;an++)Hi.setValue(P,"_gl_DrawID",an),pe.render(Wt[an]/xn,ze[an])}else if(H.isInstancedMesh)pe.renderInstances(ge,Te,H.count);else if(J.isInstancedBufferGeometry){const Wt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,ze=Math.min(J.instanceCount,Wt);pe.renderInstances(ge,Te,ze)}else pe.render(ge,Te)};function ue(b,k,J){b.transparent===!0&&b.side===fe&&b.forceSinglePass===!1?(b.side=Ge,b.needsUpdate=!0,yo(b,k,J),b.side=In,b.needsUpdate=!0,yo(b,k,J),b.side=fe):yo(b,k,J)}this.compile=function(b,k,J=null){J===null&&(J=b),m=it.get(J),m.init(k),M.push(m),J.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),b!==J&&b.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights();const $=new Set;return b.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const yt=H.material;if(yt)if(Array.isArray(yt))for(let Lt=0;Lt<yt.length;Lt++){const Ot=yt[Lt];ue(Ot,J,H),$.add(Ot)}else ue(yt,J,H),$.add(yt)}),M.pop(),m=null,$},this.compileAsync=function(b,k,J=null){const $=this.compile(b,k,J);return new Promise(H=>{function yt(){if($.forEach(function(Lt){Ft.get(Lt).currentProgram.isReady()&&$.delete(Lt)}),$.size===0){H(b);return}setTimeout(yt,10)}Dt.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let $e=null;function zn(b){$e&&$e(b)}function _l(){Si.stop()}function vl(){Si.start()}const Si=new Wu;Si.setAnimationLoop(zn),typeof self<"u"&&Si.setContext(self),this.setAnimationLoop=function(b){$e=b,j.setAnimationLoop(b),b===null?Si.stop():Si.start()},j.addEventListener("sessionstart",_l),j.addEventListener("sessionend",vl),this.render=function(b,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(k),k=j.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,k,T),m=it.get(b,M.length),m.init(k),M.push(m),X.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Xt.setFromProjectionMatrix(X),K=this.localClippingEnabled,B=V.init(this.clippingPlanes,K),_=Y.get(b,u.length),_.init(),u.push(_),j.enabled===!0&&j.isPresenting===!0){const yt=v.xr.getDepthSensingMesh();yt!==null&&Hr(yt,k,-1/0,v.sortObjects)}Hr(b,k,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(F,dt),qt=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,qt&&vt.addToRenderList(_,b),this.info.render.frame++,B===!0&&V.beginShadows();const J=m.state.shadowsArray;tt.render(J,b,k),B===!0&&V.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=_.opaque,H=_.transmissive;if(m.setupLights(),k.isArrayCamera){const yt=k.cameras;if(H.length>0)for(let Lt=0,Ot=yt.length;Lt<Ot;Lt++){const zt=yt[Lt];Ml($,H,b,zt)}qt&&vt.render(b);for(let Lt=0,Ot=yt.length;Lt<Ot;Lt++){const zt=yt[Lt];xl(_,b,zt,zt.viewport)}}else H.length>0&&Ml($,H,b,k),qt&&vt.render(b),xl(_,b,k);T!==null&&(R.updateMultisampleRenderTarget(T),R.updateRenderTargetMipmap(T)),b.isScene===!0&&b.onAfterRender(v,b,k),Tt.resetDefaultState(),C=-1,U=null,M.pop(),M.length>0?(m=M[M.length-1],B===!0&&V.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,u.pop(),u.length>0?_=u[u.length-1]:_=null};function Hr(b,k,J,$){if(b.visible===!1)return;if(b.layers.test(k.layers)){if(b.isGroup)J=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(k);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Xt.intersectsSprite(b)){$&&pt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(X);const Lt=ct.update(b),Ot=b.material;Ot.visible&&_.push(b,Lt,Ot,J,pt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Xt.intersectsObject(b))){const Lt=ct.update(b),Ot=b.material;if($&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),pt.copy(b.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),pt.copy(Lt.boundingSphere.center)),pt.applyMatrix4(b.matrixWorld).applyMatrix4(X)),Array.isArray(Ot)){const zt=Lt.groups;for(let jt=0,Jt=zt.length;jt<Jt;jt++){const Ht=zt[jt],ge=Ot[Ht.materialIndex];ge&&ge.visible&&_.push(b,Lt,ge,J,pt.z,Ht)}}else Ot.visible&&_.push(b,Lt,Ot,J,pt.z,null)}}const yt=b.children;for(let Lt=0,Ot=yt.length;Lt<Ot;Lt++)Hr(yt[Lt],k,J,$)}function xl(b,k,J,$){const H=b.opaque,yt=b.transmissive,Lt=b.transparent;m.setupLightsView(J),B===!0&&V.setGlobalState(v.clippingPlanes,J),$&&bt.viewport(x.copy($)),H.length>0&&Mo(H,k,J),yt.length>0&&Mo(yt,k,J),Lt.length>0&&Mo(Lt,k,J),bt.buffers.depth.setTest(!0),bt.buffers.depth.setMask(!0),bt.buffers.color.setMask(!0),bt.setPolygonOffset(!1)}function Ml(b,k,J,$){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[$.id]===void 0&&(m.state.transmissionRenderTarget[$.id]=new Cn(1,1,{generateMipmaps:!0,type:Dt.has("EXT_color_buffer_half_float")||Dt.has("EXT_color_buffer_float")?$n:ti,minFilter:Ii,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:de.workingColorSpace}));const yt=m.state.transmissionRenderTarget[$.id],Lt=$.viewport||x;yt.setSize(Lt.z,Lt.w);const Ot=v.getRenderTarget();v.setRenderTarget(yt),v.getClearColor(z),G=v.getClearAlpha(),G<1&&v.setClearColor(16777215,.5),v.clear(),qt&&vt.render(J);const zt=v.toneMapping;v.toneMapping=vi;const jt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),m.setupLightsView($),B===!0&&V.setGlobalState(v.clippingPlanes,$),Mo(b,J,$),R.updateMultisampleRenderTarget(yt),R.updateRenderTargetMipmap(yt),Dt.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let Ht=0,ge=k.length;Ht<ge;Ht++){const Se=k[Ht],Te=Se.object,rn=Se.geometry,pe=Se.material,Wt=Se.group;if(pe.side===fe&&Te.layers.test($.layers)){const ze=pe.side;pe.side=Ge,pe.needsUpdate=!0,yl(Te,J,$,rn,pe,Wt),pe.side=ze,pe.needsUpdate=!0,Jt=!0}}Jt===!0&&(R.updateMultisampleRenderTarget(yt),R.updateRenderTargetMipmap(yt))}v.setRenderTarget(Ot),v.setClearColor(z,G),jt!==void 0&&($.viewport=jt),v.toneMapping=zt}function Mo(b,k,J){const $=k.isScene===!0?k.overrideMaterial:null;for(let H=0,yt=b.length;H<yt;H++){const Lt=b[H],Ot=Lt.object,zt=Lt.geometry,jt=$===null?Lt.material:$,Jt=Lt.group;Ot.layers.test(J.layers)&&yl(Ot,k,J,zt,jt,Jt)}}function yl(b,k,J,$,H,yt){b.onBeforeRender(v,k,J,$,H,yt),b.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),H.onBeforeRender(v,k,J,$,b,yt),H.transparent===!0&&H.side===fe&&H.forceSinglePass===!1?(H.side=Ge,H.needsUpdate=!0,v.renderBufferDirect(J,k,$,H,b,yt),H.side=In,H.needsUpdate=!0,v.renderBufferDirect(J,k,$,H,b,yt),H.side=fe):v.renderBufferDirect(J,k,$,H,b,yt),b.onAfterRender(v,k,J,$,H,yt)}function yo(b,k,J){k.isScene!==!0&&(k=St);const $=Ft.get(b),H=m.state.lights,yt=m.state.shadowsArray,Lt=H.state.version,Ot=Ut.getParameters(b,H.state,yt,k,J),zt=Ut.getProgramCacheKey(Ot);let jt=$.programs;$.environment=b.isMeshStandardMaterial?k.environment:null,$.fog=k.fog,$.envMap=(b.isMeshStandardMaterial?q:w).get(b.envMap||$.environment),$.envMapRotation=$.environment!==null&&b.envMap===null?k.environmentRotation:b.envMapRotation,jt===void 0&&(b.addEventListener("dispose",ne),jt=new Map,$.programs=jt);let Jt=jt.get(zt);if(Jt!==void 0){if($.currentProgram===Jt&&$.lightsStateVersion===Lt)return wl(b,Ot),Jt}else Ot.uniforms=Ut.getUniforms(b),b.onBeforeCompile(Ot,v),Jt=Ut.acquireProgram(Ot,zt),jt.set(zt,Jt),$.uniforms=Ot.uniforms;const Ht=$.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ht.clippingPlanes=V.uniform),wl(b,Ot),$.needsLights=Zd(b),$.lightsStateVersion=Lt,$.needsLights&&(Ht.ambientLightColor.value=H.state.ambient,Ht.lightProbe.value=H.state.probe,Ht.directionalLights.value=H.state.directional,Ht.directionalLightShadows.value=H.state.directionalShadow,Ht.spotLights.value=H.state.spot,Ht.spotLightShadows.value=H.state.spotShadow,Ht.rectAreaLights.value=H.state.rectArea,Ht.ltc_1.value=H.state.rectAreaLTC1,Ht.ltc_2.value=H.state.rectAreaLTC2,Ht.pointLights.value=H.state.point,Ht.pointLightShadows.value=H.state.pointShadow,Ht.hemisphereLights.value=H.state.hemi,Ht.directionalShadowMap.value=H.state.directionalShadowMap,Ht.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ht.spotShadowMap.value=H.state.spotShadowMap,Ht.spotLightMatrix.value=H.state.spotLightMatrix,Ht.spotLightMap.value=H.state.spotLightMap,Ht.pointShadowMap.value=H.state.pointShadowMap,Ht.pointShadowMatrix.value=H.state.pointShadowMatrix),$.currentProgram=Jt,$.uniformsList=null,Jt}function Sl(b){if(b.uniformsList===null){const k=b.currentProgram.getUniforms();b.uniformsList=rr.seqWithValue(k.seq,b.uniforms)}return b.uniformsList}function wl(b,k){const J=Ft.get(b);J.outputColorSpace=k.outputColorSpace,J.batching=k.batching,J.batchingColor=k.batchingColor,J.instancing=k.instancing,J.instancingColor=k.instancingColor,J.instancingMorph=k.instancingMorph,J.skinning=k.skinning,J.morphTargets=k.morphTargets,J.morphNormals=k.morphNormals,J.morphColors=k.morphColors,J.morphTargetsCount=k.morphTargetsCount,J.numClippingPlanes=k.numClippingPlanes,J.numIntersection=k.numClipIntersection,J.vertexAlphas=k.vertexAlphas,J.vertexTangents=k.vertexTangents,J.toneMapping=k.toneMapping}function qd(b,k,J,$,H){k.isScene!==!0&&(k=St),R.resetTextureUnits();const yt=k.fog,Lt=$.isMeshStandardMaterial?k.environment:null,Ot=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Mi,zt=($.isMeshStandardMaterial?q:w).get($.envMap||Lt),jt=$.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Jt=!!J.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ht=!!J.morphAttributes.position,ge=!!J.morphAttributes.normal,Se=!!J.morphAttributes.color;let Te=vi;$.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Te=v.toneMapping);const rn=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,pe=rn!==void 0?rn.length:0,Wt=Ft.get($),ze=m.state.lights;if(B===!0&&(K===!0||b!==U)){const fn=b===U&&$.id===C;V.setState($,b,fn)}let me=!1;$.version===Wt.__version?(Wt.needsLights&&Wt.lightsStateVersion!==ze.state.version||Wt.outputColorSpace!==Ot||H.isBatchedMesh&&Wt.batching===!1||!H.isBatchedMesh&&Wt.batching===!0||H.isBatchedMesh&&Wt.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Wt.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Wt.instancing===!1||!H.isInstancedMesh&&Wt.instancing===!0||H.isSkinnedMesh&&Wt.skinning===!1||!H.isSkinnedMesh&&Wt.skinning===!0||H.isInstancedMesh&&Wt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Wt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Wt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Wt.instancingMorph===!1&&H.morphTexture!==null||Wt.envMap!==zt||$.fog===!0&&Wt.fog!==yt||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==V.numPlanes||Wt.numIntersection!==V.numIntersection)||Wt.vertexAlphas!==jt||Wt.vertexTangents!==Jt||Wt.morphTargets!==Ht||Wt.morphNormals!==ge||Wt.morphColors!==Se||Wt.toneMapping!==Te||Wt.morphTargetsCount!==pe)&&(me=!0):(me=!0,Wt.__version=$.version);let xn=Wt.currentProgram;me===!0&&(xn=yo($,k,H));let Hi=!1,an=!1,Vr=!1;const Ce=xn.getUniforms(),oi=Wt.uniforms;if(bt.useProgram(xn.program)&&(Hi=!0,an=!0,Vr=!0),$.id!==C&&(C=$.id,an=!0),Hi||U!==b){It.reverseDepthBuffer?(mt.copy(b.projectionMatrix),jf(mt),Jf(mt),Ce.setValue(P,"projectionMatrix",mt)):Ce.setValue(P,"projectionMatrix",b.projectionMatrix),Ce.setValue(P,"viewMatrix",b.matrixWorldInverse);const fn=Ce.map.cameraPosition;fn!==void 0&&fn.setValue(P,gt.setFromMatrixPosition(b.matrixWorld)),It.logarithmicDepthBuffer&&Ce.setValue(P,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Ce.setValue(P,"isOrthographic",b.isOrthographicCamera===!0),U!==b&&(U=b,an=!0,Vr=!0)}if(H.isSkinnedMesh){Ce.setOptional(P,H,"bindMatrix"),Ce.setOptional(P,H,"bindMatrixInverse");const fn=H.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),Ce.setValue(P,"boneTexture",fn.boneTexture,R))}H.isBatchedMesh&&(Ce.setOptional(P,H,"batchingTexture"),Ce.setValue(P,"batchingTexture",H._matricesTexture,R),Ce.setOptional(P,H,"batchingIdTexture"),Ce.setValue(P,"batchingIdTexture",H._indirectTexture,R),Ce.setOptional(P,H,"batchingColorTexture"),H._colorsTexture!==null&&Ce.setValue(P,"batchingColorTexture",H._colorsTexture,R));const Wr=J.morphAttributes;if((Wr.position!==void 0||Wr.normal!==void 0||Wr.color!==void 0)&&Mt.update(H,J,xn),(an||Wt.receiveShadow!==H.receiveShadow)&&(Wt.receiveShadow=H.receiveShadow,Ce.setValue(P,"receiveShadow",H.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(oi.envMap.value=zt,oi.flipEnvMap.value=zt.isCubeTexture&&zt.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&k.environment!==null&&(oi.envMapIntensity.value=k.environmentIntensity),an&&(Ce.setValue(P,"toneMappingExposure",v.toneMappingExposure),Wt.needsLights&&Kd(oi,Vr),yt&&$.fog===!0&&L.refreshFogUniforms(oi,yt),L.refreshMaterialUniforms(oi,$,lt,W,m.state.transmissionRenderTarget[b.id]),rr.upload(P,Sl(Wt),oi,R)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(rr.upload(P,Sl(Wt),oi,R),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Ce.setValue(P,"center",H.center),Ce.setValue(P,"modelViewMatrix",H.modelViewMatrix),Ce.setValue(P,"normalMatrix",H.normalMatrix),Ce.setValue(P,"modelMatrix",H.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const fn=$.uniformsGroups;for(let Xr=0,jd=fn.length;Xr<jd;Xr++){const El=fn[Xr];N.update(El,xn),N.bind(El,xn)}}return xn}function Kd(b,k){b.ambientLightColor.needsUpdate=k,b.lightProbe.needsUpdate=k,b.directionalLights.needsUpdate=k,b.directionalLightShadows.needsUpdate=k,b.pointLights.needsUpdate=k,b.pointLightShadows.needsUpdate=k,b.spotLights.needsUpdate=k,b.spotLightShadows.needsUpdate=k,b.rectAreaLights.needsUpdate=k,b.hemisphereLights.needsUpdate=k}function Zd(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(b,k,J){Ft.get(b.texture).__webglTexture=k,Ft.get(b.depthTexture).__webglTexture=J;const $=Ft.get(b);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=J===void 0,$.__autoAllocateDepthBuffer||Dt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,k){const J=Ft.get(b);J.__webglFramebuffer=k,J.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(b,k=0,J=0){T=b,A=k,E=J;let $=!0,H=null,yt=!1,Lt=!1;if(b){const zt=Ft.get(b);if(zt.__useDefaultFramebuffer!==void 0)bt.bindFramebuffer(P.FRAMEBUFFER,null),$=!1;else if(zt.__webglFramebuffer===void 0)R.setupRenderTarget(b);else if(zt.__hasExternalTextures)R.rebindTextures(b,Ft.get(b.texture).__webglTexture,Ft.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Ht=b.depthTexture;if(zt.__boundDepthTexture!==Ht){if(Ht!==null&&Ft.has(Ht)&&(b.width!==Ht.image.width||b.height!==Ht.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(b)}}const jt=b.texture;(jt.isData3DTexture||jt.isDataArrayTexture||jt.isCompressedArrayTexture)&&(Lt=!0);const Jt=Ft.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Jt[k])?H=Jt[k][J]:H=Jt[k],yt=!0):b.samples>0&&R.useMultisampledRTT(b)===!1?H=Ft.get(b).__webglMultisampledFramebuffer:Array.isArray(Jt)?H=Jt[J]:H=Jt,x.copy(b.viewport),S.copy(b.scissor),D=b.scissorTest}else x.copy(et).multiplyScalar(lt).floor(),S.copy(xt).multiplyScalar(lt).floor(),D=kt;if(bt.bindFramebuffer(P.FRAMEBUFFER,H)&&$&&bt.drawBuffers(b,H),bt.viewport(x),bt.scissor(S),bt.setScissorTest(D),yt){const zt=Ft.get(b.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+k,zt.__webglTexture,J)}else if(Lt){const zt=Ft.get(b.texture),jt=k||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,zt.__webglTexture,J||0,jt)}C=-1},this.readRenderTargetPixels=function(b,k,J,$,H,yt,Lt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=Ft.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ot=Ot[Lt]),Ot){bt.bindFramebuffer(P.FRAMEBUFFER,Ot);try{const zt=b.texture,jt=zt.format,Jt=zt.type;if(!It.textureFormatReadable(jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!It.textureTypeReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=b.width-$&&J>=0&&J<=b.height-H&&P.readPixels(k,J,$,H,ut.convert(jt),ut.convert(Jt),yt)}finally{const zt=T!==null?Ft.get(T).__webglFramebuffer:null;bt.bindFramebuffer(P.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(b,k,J,$,H,yt,Lt){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=Ft.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ot=Ot[Lt]),Ot){const zt=b.texture,jt=zt.format,Jt=zt.type;if(!It.textureFormatReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!It.textureTypeReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=b.width-$&&J>=0&&J<=b.height-H){bt.bindFramebuffer(P.FRAMEBUFFER,Ot);const Ht=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Ht),P.bufferData(P.PIXEL_PACK_BUFFER,yt.byteLength,P.STREAM_READ),P.readPixels(k,J,$,H,ut.convert(jt),ut.convert(Jt),0);const ge=T!==null?Ft.get(T).__webglFramebuffer:null;bt.bindFramebuffer(P.FRAMEBUFFER,ge);const Se=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Zf(P,Se,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Ht),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,yt),P.deleteBuffer(Ht),P.deleteSync(Se),yt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,k=null,J=0){b.isTexture!==!0&&(or("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,b=arguments[1]);const $=Math.pow(2,-J),H=Math.floor(b.image.width*$),yt=Math.floor(b.image.height*$),Lt=k!==null?k.x:0,Ot=k!==null?k.y:0;R.setTexture2D(b,0),P.copyTexSubImage2D(P.TEXTURE_2D,J,0,0,Lt,Ot,H,yt),bt.unbindTexture()},this.copyTextureToTexture=function(b,k,J=null,$=null,H=0){b.isTexture!==!0&&(or("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,b=arguments[1],k=arguments[2],H=arguments[3]||0,J=null);let yt,Lt,Ot,zt,jt,Jt;J!==null?(yt=J.max.x-J.min.x,Lt=J.max.y-J.min.y,Ot=J.min.x,zt=J.min.y):(yt=b.image.width,Lt=b.image.height,Ot=0,zt=0),$!==null?(jt=$.x,Jt=$.y):(jt=0,Jt=0);const Ht=ut.convert(k.format),ge=ut.convert(k.type);R.setTexture2D(k,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,k.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,k.unpackAlignment);const Se=P.getParameter(P.UNPACK_ROW_LENGTH),Te=P.getParameter(P.UNPACK_IMAGE_HEIGHT),rn=P.getParameter(P.UNPACK_SKIP_PIXELS),pe=P.getParameter(P.UNPACK_SKIP_ROWS),Wt=P.getParameter(P.UNPACK_SKIP_IMAGES),ze=b.isCompressedTexture?b.mipmaps[H]:b.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,ze.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ze.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ot),P.pixelStorei(P.UNPACK_SKIP_ROWS,zt),b.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,H,jt,Jt,yt,Lt,Ht,ge,ze.data):b.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,H,jt,Jt,ze.width,ze.height,Ht,ze.data):P.texSubImage2D(P.TEXTURE_2D,H,jt,Jt,yt,Lt,Ht,ge,ze),P.pixelStorei(P.UNPACK_ROW_LENGTH,Se),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Te),P.pixelStorei(P.UNPACK_SKIP_PIXELS,rn),P.pixelStorei(P.UNPACK_SKIP_ROWS,pe),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Wt),H===0&&k.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),bt.unbindTexture()},this.copyTextureToTexture3D=function(b,k,J=null,$=null,H=0){b.isTexture!==!0&&(or("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,$=arguments[1]||null,b=arguments[2],k=arguments[3],H=arguments[4]||0);let yt,Lt,Ot,zt,jt,Jt,Ht,ge,Se;const Te=b.isCompressedTexture?b.mipmaps[H]:b.image;J!==null?(yt=J.max.x-J.min.x,Lt=J.max.y-J.min.y,Ot=J.max.z-J.min.z,zt=J.min.x,jt=J.min.y,Jt=J.min.z):(yt=Te.width,Lt=Te.height,Ot=Te.depth,zt=0,jt=0,Jt=0),$!==null?(Ht=$.x,ge=$.y,Se=$.z):(Ht=0,ge=0,Se=0);const rn=ut.convert(k.format),pe=ut.convert(k.type);let Wt;if(k.isData3DTexture)R.setTexture3D(k,0),Wt=P.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)R.setTexture2DArray(k,0),Wt=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,k.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,k.unpackAlignment);const ze=P.getParameter(P.UNPACK_ROW_LENGTH),me=P.getParameter(P.UNPACK_IMAGE_HEIGHT),xn=P.getParameter(P.UNPACK_SKIP_PIXELS),Hi=P.getParameter(P.UNPACK_SKIP_ROWS),an=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Te.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Te.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,zt),P.pixelStorei(P.UNPACK_SKIP_ROWS,jt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Jt),b.isDataTexture||b.isData3DTexture?P.texSubImage3D(Wt,H,Ht,ge,Se,yt,Lt,Ot,rn,pe,Te.data):k.isCompressedArrayTexture?P.compressedTexSubImage3D(Wt,H,Ht,ge,Se,yt,Lt,Ot,rn,Te.data):P.texSubImage3D(Wt,H,Ht,ge,Se,yt,Lt,Ot,rn,pe,Te),P.pixelStorei(P.UNPACK_ROW_LENGTH,ze),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,me),P.pixelStorei(P.UNPACK_SKIP_PIXELS,xn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Hi),P.pixelStorei(P.UNPACK_SKIP_IMAGES,an),H===0&&k.generateMipmaps&&P.generateMipmap(Wt),bt.unbindTexture()},this.initRenderTarget=function(b){Ft.get(b).__webglFramebuffer===void 0&&R.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?R.setTextureCube(b,0):b.isData3DTexture?R.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?R.setTexture2DArray(b,0):R.setTexture2D(b,0),bt.unbindTexture()},this.resetState=function(){A=0,E=0,T=null,bt.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Vc?"display-p3":"srgb",e.unpackColorSpace=de.workingColorSpace===Rr?"display-p3":"srgb"}}class Zc{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Zt(t),this.density=e}clone(){return new Zc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class av extends Ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new On,this.environmentIntensity=1,this.environmentRotation=new On,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class cv extends Ye{constructor(t=null,e=1,n=1,s,o,r,a,c,l=tn,h=tn,d,p){super(null,r,a,c,l,h,s,o,d,p),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xh extends en{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const is=new Me,Mh=new Me,Vo=[],yh=new ki,lv=new Me,Bs=new Z,zs=new ho;class fo extends Z{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new xh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,lv)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ki),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,is),yh.copy(t.boundingBox).applyMatrix4(is),this.boundingBox.union(yh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ho),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,is),zs.copy(t.boundingSphere).applyMatrix4(is),this.boundingSphere.union(zs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,o=n.length+1,r=t*o+1;for(let a=0;a<n.length;a++)n[a]=s[r+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Bs.geometry=this.geometry,Bs.material=this.material,Bs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zs.copy(this.boundingSphere),zs.applyMatrix4(n),t.ray.intersectsSphere(zs)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,is),Mh.multiplyMatrices(n,is),Bs.matrixWorld=Mh,Bs.raycast(t,Vo);for(let r=0,a=Vo.length;r<a;r++){const c=Vo[r];c.instanceId=o,c.object=this,e.push(c)}Vo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new xh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new cv(new Float32Array(s*this.count),s,this.count,zc,Nn));const o=this.morphTexture.source.data.data;let r=0;for(let l=0;l<n.length;l++)r+=n[l];const a=this.geometry.morphTargetsRelative?1:1-r,c=s*t;o[c]=a,o.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Fi extends Ye{constructor(t,e,n,s,o,r,a,c,l){super(t,e,n,s,o,r,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Bn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),o+=n.distanceTo(s),e.push(o),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const o=n.length;let r;e?r=e:r=t*n[o-1];let a=0,c=o-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-r,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===r)return s/(o-1);const h=n[s],p=n[s+1]-h,f=(r-h)/p;return(s+f)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);const r=this.getPoint(s),a=this.getPoint(o),c=e||(r.isVector2?new at:new I);return c.copy(a).sub(r).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new I,s=[],o=[],r=[],a=new I,c=new Me;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new I)}o[0]=new I,r[0]=new I;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),d=Math.abs(s[0].y),p=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),p<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let f=1;f<=t;f++){if(o[f]=o[f-1].clone(),r[f]=r[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ue(s[f-1].dot(s[f]),-1,1));o[f].applyMatrix4(c.makeRotationAxis(a,g))}r[f].crossVectors(s[f],o[f])}if(e===!0){let f=Math.acos(Ue(o[0].dot(o[t]),-1,1));f/=t,s[0].dot(a.crossVectors(o[0],o[t]))>0&&(f=-f);for(let g=1;g<=t;g++)o[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),r[g].crossVectors(s[g],o[g])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class jc extends Bn{constructor(t=0,e=0,n=1,s=1,o=0,r=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new at){const n=e,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);const a=this.aStartAngle+t*o;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),p=c-this.aX,f=l-this.aY;c=p*h-f*d+this.aX,l=p*d+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class hv extends jc{constructor(t,e,n,s,o,r){super(t,e,n,n,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function Jc(){let i=0,t=0,e=0,n=0;function s(o,r,a,c){i=o,t=a,e=-3*o+3*r-2*a-c,n=2*o-2*r+a+c}return{initCatmullRom:function(o,r,a,c,l){s(r,a,l*(a-o),l*(c-r))},initNonuniformCatmullRom:function(o,r,a,c,l,h,d){let p=(r-o)/l-(a-o)/(l+h)+(a-r)/h,f=(a-r)/h-(c-r)/(h+d)+(c-a)/d;p*=h,f*=h,s(r,a,p,f)},calc:function(o){const r=o*o,a=r*o;return i+t*o+e*r+n*a}}}const Wo=new I,ya=new Jc,Sa=new Jc,wa=new Jc;class uv extends Bn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){const n=e,s=this.points,o=s.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),c=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:c===0&&a===o-1&&(a=o-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%o]:(Wo.subVectors(s[0],s[1]).add(s[0]),l=Wo);const d=s[a%o],p=s[(a+1)%o];if(this.closed||a+2<o?h=s[(a+2)%o]:(Wo.subVectors(s[o-1],s[o-2]).add(s[o-1]),h=Wo),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(p),f),m=Math.pow(p.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),ya.initNonuniformCatmullRom(l.x,d.x,p.x,h.x,g,_,m),Sa.initNonuniformCatmullRom(l.y,d.y,p.y,h.y,g,_,m),wa.initNonuniformCatmullRom(l.z,d.z,p.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(ya.initCatmullRom(l.x,d.x,p.x,h.x,this.tension),Sa.initCatmullRom(l.y,d.y,p.y,h.y,this.tension),wa.initCatmullRom(l.z,d.z,p.z,h.z,this.tension));return n.set(ya.calc(c),Sa.calc(c),wa.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Sh(i,t,e,n,s){const o=(n-t)*.5,r=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+o+r)*c+(-3*e+3*n-2*o-r)*a+o*i+e}function dv(i,t){const e=1-i;return e*e*t}function fv(i,t){return 2*(1-i)*i*t}function pv(i,t){return i*i*t}function Zs(i,t,e,n){return dv(i,t)+fv(i,e)+pv(i,n)}function mv(i,t){const e=1-i;return e*e*e*t}function gv(i,t){const e=1-i;return 3*e*e*i*t}function _v(i,t){return 3*(1-i)*i*i*t}function vv(i,t){return i*i*i*t}function js(i,t,e,n,s){return mv(i,t)+gv(i,e)+_v(i,n)+vv(i,s)}class ju extends Bn{constructor(t=new at,e=new at,n=new at,s=new at){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new at){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(js(t,s.x,o.x,r.x,a.x),js(t,s.y,o.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class xv extends Bn{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(js(t,s.x,o.x,r.x,a.x),js(t,s.y,o.y,r.y,a.y),js(t,s.z,o.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ju extends Bn{constructor(t=new at,e=new at){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new at){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new at){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Mv extends Bn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class $u extends Bn{constructor(t=new at,e=new at,n=new at){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new at){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(Zs(t,s.x,o.x,r.x),Zs(t,s.y,o.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class yv extends Bn{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(Zs(t,s.x,o.x,r.x),Zs(t,s.y,o.y,r.y),Zs(t,s.z,o.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Qu extends Bn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new at){const n=e,s=this.points,o=(s.length-1)*t,r=Math.floor(o),a=o-r,c=s[r===0?r:r-1],l=s[r],h=s[r>s.length-2?s.length-1:r+1],d=s[r>s.length-3?s.length-1:r+2];return n.set(Sh(a,c.x,l.x,h.x,d.x),Sh(a,c.y,l.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new at().fromArray(s))}return this}}var wh=Object.freeze({__proto__:null,ArcCurve:hv,CatmullRomCurve3:uv,CubicBezierCurve:ju,CubicBezierCurve3:xv,EllipseCurve:jc,LineCurve:Ju,LineCurve3:Mv,QuadraticBezierCurve:$u,QuadraticBezierCurve3:yv,SplineCurve:Qu});class Sv extends Bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new wh[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=n){const r=s[o]-n,a=this.curves[o],c=a.getLength(),l=c===0?0:1-r/c;return a.getPointAt(l,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,o=this.curves;s<o.length;s++){const r=o[s],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,c=r.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new wh[s.type]().fromJSON(s))}return this}}class Eh extends Sv{constructor(t){super(),this.type="Path",this.currentPoint=new at,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Ju(this.currentPoint.clone(),new at(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const o=new $u(this.currentPoint.clone(),new at(t,e),new at(n,s));return this.curves.push(o),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,o,r){const a=new ju(this.currentPoint.clone(),new at(t,e),new at(n,s),new at(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Qu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,o,r){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,o,r),this}absarc(t,e,n,s,o,r){return this.absellipse(t,e,n,n,s,o,r),this}ellipse(t,e,n,s,o,r,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,o,r,a,c),this}absellipse(t,e,n,s,o,r,a,c){const l=new jc(t,e,n,s,o,r,a,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class io extends Be{constructor(t=[new at(0,-.5),new at(.5,0),new at(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ue(s,0,Math.PI*2);const o=[],r=[],a=[],c=[],l=[],h=1/e,d=new I,p=new at,f=new I,g=new I,_=new I;let m=0,u=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:m=t[M+1].x-t[M].x,u=t[M+1].y-t[M].y,f.x=u*1,f.y=-m,f.z=u*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:m=t[M+1].x-t[M].x,u=t[M+1].y-t[M].y,f.x=u*1,f.y=-m,f.z=u*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(g)}for(let M=0;M<=e;M++){const v=n+M*h*s,y=Math.sin(v),A=Math.cos(v);for(let E=0;E<=t.length-1;E++){d.x=t[E].x*y,d.y=t[E].y,d.z=t[E].x*A,r.push(d.x,d.y,d.z),p.x=M/e,p.y=E/(t.length-1),a.push(p.x,p.y);const T=c[3*E+0]*y,C=c[3*E+1],U=c[3*E+0]*A;l.push(T,C,U)}}for(let M=0;M<e;M++)for(let v=0;v<t.length-1;v++){const y=v+M*t.length,A=y,E=y+t.length,T=y+t.length+1,C=y+1;o.push(A,E,C),o.push(T,C,E)}this.setIndex(o),this.setAttribute("position",new se(r,3)),this.setAttribute("uv",new se(a,2)),this.setAttribute("normal",new se(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new io(t.points,t.segments,t.phiStart,t.phiLength)}}class ei extends Be{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const o=[],r=[],a=[],c=[],l=new I,h=new at;r.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,p=3;d<=e;d++,p+=3){const f=n+d/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),r.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(r[p]/t+1)/2,h.y=(r[p+1]/t+1)/2,c.push(h.x,h.y)}for(let d=1;d<=e;d++)o.push(d,d+1,0);this.setIndex(o),this.setAttribute("position",new se(r,3)),this.setAttribute("normal",new se(a,3)),this.setAttribute("uv",new se(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ei(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class rt extends Be{constructor(t=1,e=1,n=1,s=32,o=1,r=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),o=Math.floor(o);const h=[],d=[],p=[],f=[];let g=0;const _=[],m=n/2;let u=0;M(),r===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new se(d,3)),this.setAttribute("normal",new se(p,3)),this.setAttribute("uv",new se(f,2));function M(){const y=new I,A=new I;let E=0;const T=(e-t)/n;for(let C=0;C<=o;C++){const U=[],x=C/o,S=x*(e-t)+t;for(let D=0;D<=s;D++){const z=D/s,G=z*c+a,Q=Math.sin(G),W=Math.cos(G);A.x=S*Q,A.y=-x*n+m,A.z=S*W,d.push(A.x,A.y,A.z),y.set(Q,T,W).normalize(),p.push(y.x,y.y,y.z),f.push(z,1-x),U.push(g++)}_.push(U)}for(let C=0;C<s;C++)for(let U=0;U<o;U++){const x=_[U][C],S=_[U+1][C],D=_[U+1][C+1],z=_[U][C+1];t>0&&(h.push(x,S,z),E+=3),e>0&&(h.push(S,D,z),E+=3)}l.addGroup(u,E,0),u+=E}function v(y){const A=g,E=new at,T=new I;let C=0;const U=y===!0?t:e,x=y===!0?1:-1;for(let D=1;D<=s;D++)d.push(0,m*x,0),p.push(0,x,0),f.push(.5,.5),g++;const S=g;for(let D=0;D<=s;D++){const G=D/s*c+a,Q=Math.cos(G),W=Math.sin(G);T.x=U*W,T.y=m*x,T.z=U*Q,d.push(T.x,T.y,T.z),p.push(0,x,0),E.x=Q*.5+.5,E.y=W*.5*x+.5,f.push(E.x,E.y),g++}for(let D=0;D<s;D++){const z=A+D,G=S+D;y===!0?h.push(G,G+1,z):h.push(G+1,G,z),C+=3}l.addGroup(u,C,y===!0?1:2),u+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class $t extends rt{constructor(t=1,e=1,n=32,s=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,n,s,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new $t(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Pr extends Be{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const o=[],r=[];a(s),l(n),h(),this.setAttribute("position",new se(o,3)),this.setAttribute("normal",new se(o.slice(),3)),this.setAttribute("uv",new se(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const v=new I,y=new I,A=new I;for(let E=0;E<e.length;E+=3)f(e[E+0],v),f(e[E+1],y),f(e[E+2],A),c(v,y,A,M)}function c(M,v,y,A){const E=A+1,T=[];for(let C=0;C<=E;C++){T[C]=[];const U=M.clone().lerp(y,C/E),x=v.clone().lerp(y,C/E),S=E-C;for(let D=0;D<=S;D++)D===0&&C===E?T[C][D]=U:T[C][D]=U.clone().lerp(x,D/S)}for(let C=0;C<E;C++)for(let U=0;U<2*(E-C)-1;U++){const x=Math.floor(U/2);U%2===0?(p(T[C][x+1]),p(T[C+1][x]),p(T[C][x])):(p(T[C][x+1]),p(T[C+1][x+1]),p(T[C+1][x]))}}function l(M){const v=new I;for(let y=0;y<o.length;y+=3)v.x=o[y+0],v.y=o[y+1],v.z=o[y+2],v.normalize().multiplyScalar(M),o[y+0]=v.x,o[y+1]=v.y,o[y+2]=v.z}function h(){const M=new I;for(let v=0;v<o.length;v+=3){M.x=o[v+0],M.y=o[v+1],M.z=o[v+2];const y=m(M)/2/Math.PI+.5,A=u(M)/Math.PI+.5;r.push(y,1-A)}g(),d()}function d(){for(let M=0;M<r.length;M+=6){const v=r[M+0],y=r[M+2],A=r[M+4],E=Math.max(v,y,A),T=Math.min(v,y,A);E>.9&&T<.1&&(v<.2&&(r[M+0]+=1),y<.2&&(r[M+2]+=1),A<.2&&(r[M+4]+=1))}}function p(M){o.push(M.x,M.y,M.z)}function f(M,v){const y=M*3;v.x=t[y+0],v.y=t[y+1],v.z=t[y+2]}function g(){const M=new I,v=new I,y=new I,A=new I,E=new at,T=new at,C=new at;for(let U=0,x=0;U<o.length;U+=9,x+=6){M.set(o[U+0],o[U+1],o[U+2]),v.set(o[U+3],o[U+4],o[U+5]),y.set(o[U+6],o[U+7],o[U+8]),E.set(r[x+0],r[x+1]),T.set(r[x+2],r[x+3]),C.set(r[x+4],r[x+5]),A.copy(M).add(v).add(y).divideScalar(3);const S=m(A);_(E,x+0,M,S),_(T,x+2,v,S),_(C,x+4,y,S)}}function _(M,v,y,A){A<0&&M.x===1&&(r[v]=M.x-1),y.x===0&&y.z===0&&(r[v]=A/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function u(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pr(t.vertices,t.indices,t.radius,t.details)}}class $c extends Pr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,o=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(o,r,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new $c(t.radius,t.detail)}}class td extends Eh{constructor(t){super(t),this.uuid=zi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Eh().fromJSON(s))}return this}}const wv={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let o=ed(i,0,s,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,c,l,h,d,p,f;if(n&&(o=Rv(i,t,o,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let g=e;g<s;g+=e)d=i[g],p=i[g+1],d<a&&(a=d),p<c&&(c=p),d>l&&(l=d),p>h&&(h=p);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return so(o,r,e,a,c,f,0),r}};function ed(i,t,e,n,s){let o,r;if(s===zv(i,t,e,n)>0)for(o=t;o<e;o+=n)r=bh(o,i[o],i[o+1],r);else for(o=e-n;o>=t;o-=n)r=bh(o,i[o],i[o+1],r);return r&&Lr(r,r.next)&&(ro(r),r=r.next),r}function Oi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Lr(e,e.next)||Ee(e.prev,e,e.next)===0)){if(ro(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function so(i,t,e,n,s,o,r){if(!i)return;!r&&o&&Dv(i,n,s,o);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,o?bv(i,n,s,o):Ev(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),ro(i),i=l.next,a=l.next;continue}if(i=l,i===a){r?r===1?(i=Tv(Oi(i),t,e),so(i,t,e,n,s,o,2)):r===2&&Av(i,t,e,n,s,o):so(Oi(i),t,e,n,s,o,1);break}}}function Ev(i){const t=i.prev,e=i,n=i.next;if(Ee(t,e,n)>=0)return!1;const s=t.x,o=e.x,r=n.x,a=t.y,c=e.y,l=n.y,h=s<o?s<r?s:r:o<r?o:r,d=a<c?a<l?a:l:c<l?c:l,p=s>o?s>r?s:r:o>r?o:r,f=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=p&&g.y>=d&&g.y<=f&&hs(s,a,o,c,r,l,g.x,g.y)&&Ee(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function bv(i,t,e,n){const s=i.prev,o=i,r=i.next;if(Ee(s,o,r)>=0)return!1;const a=s.x,c=o.x,l=r.x,h=s.y,d=o.y,p=r.y,f=a<c?a<l?a:l:c<l?c:l,g=h<d?h<p?h:p:d<p?d:p,_=a>c?a>l?a:l:c>l?c:l,m=h>d?h>p?h:p:d>p?d:p,u=Ec(f,g,t,e,n),M=Ec(_,m,t,e,n);let v=i.prevZ,y=i.nextZ;for(;v&&v.z>=u&&y&&y.z<=M;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==r&&hs(a,h,c,d,l,p,v.x,v.y)&&Ee(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=f&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==r&&hs(a,h,c,d,l,p,y.x,y.y)&&Ee(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=u;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==r&&hs(a,h,c,d,l,p,v.x,v.y)&&Ee(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=M;){if(y.x>=f&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==r&&hs(a,h,c,d,l,p,y.x,y.y)&&Ee(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Tv(i,t,e){let n=i;do{const s=n.prev,o=n.next.next;!Lr(s,o)&&nd(s,n,n.next,o)&&oo(s,o)&&oo(o,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(o.i/e|0),ro(n),ro(n.next),n=i=o),n=n.next}while(n!==i);return Oi(n)}function Av(i,t,e,n,s,o){let r=i;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&Fv(r,a)){let c=id(r,a);r=Oi(r,r.next),c=Oi(c,c.next),so(r,t,e,n,s,o,0),so(c,t,e,n,s,o,0);return}a=a.next}r=r.next}while(r!==i)}function Rv(i,t,e,n){const s=[];let o,r,a,c,l;for(o=0,r=t.length;o<r;o++)a=t[o]*n,c=o<r-1?t[o+1]*n:i.length,l=ed(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(Nv(l));for(s.sort(Cv),o=0;o<s.length;o++)e=Pv(s[o],e);return e}function Cv(i,t){return i.x-t.x}function Pv(i,t){const e=Lv(i,t);if(!e)return t;const n=id(e,i);return Oi(n,n.next),Oi(e,e.next)}function Lv(i,t){let e=t,n=-1/0,s;const o=i.x,r=i.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const p=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(p<=o&&p>n&&(n=p,s=e.x<e.next.x?e:e.next,p===o))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let h=1/0,d;e=s;do o>=e.x&&e.x>=c&&o!==e.x&&hs(r<l?o:n,r,c,l,r<l?n:o,r,e.x,e.y)&&(d=Math.abs(r-e.y)/(o-e.x),oo(e,i)&&(d<h||d===h&&(e.x>s.x||e.x===s.x&&Iv(s,e)))&&(s=e,h=d)),e=e.next;while(e!==a);return s}function Iv(i,t){return Ee(i.prev,i,t.prev)<0&&Ee(t.next,i,i.next)<0}function Dv(i,t,e,n){let s=i;do s.z===0&&(s.z=Ec(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Uv(s)}function Uv(i){let t,e,n,s,o,r,a,c,l=1;do{for(e=i,i=null,o=null,r=0;e;){for(r++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),o?o.nextZ=s:i=s,s.prevZ=o,o=s;e=n}o.nextZ=null,l*=2}while(r>1);return i}function Ec(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Nv(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function hs(i,t,e,n,s,o,r,a){return(s-r)*(t-a)>=(i-r)*(o-a)&&(i-r)*(n-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(s-r)*(n-a)}function Fv(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Ov(i,t)&&(oo(i,t)&&oo(t,i)&&Bv(i,t)&&(Ee(i.prev,i,t.prev)||Ee(i,t.prev,t))||Lr(i,t)&&Ee(i.prev,i,i.next)>0&&Ee(t.prev,t,t.next)>0)}function Ee(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Lr(i,t){return i.x===t.x&&i.y===t.y}function nd(i,t,e,n){const s=Yo(Ee(i,t,e)),o=Yo(Ee(i,t,n)),r=Yo(Ee(e,n,i)),a=Yo(Ee(e,n,t));return!!(s!==o&&r!==a||s===0&&Xo(i,e,t)||o===0&&Xo(i,n,t)||r===0&&Xo(e,i,n)||a===0&&Xo(e,t,n))}function Xo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Yo(i){return i>0?1:i<0?-1:0}function Ov(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&nd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function oo(i,t){return Ee(i.prev,i,i.next)<0?Ee(i,t,i.next)>=0&&Ee(i,i.prev,t)>=0:Ee(i,t,i.prev)<0||Ee(i,i.next,t)<0}function Bv(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,o=(i.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&s<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function id(i,t){const e=new bc(i.i,i.x,i.y),n=new bc(t.i,t.x,t.y),s=i.next,o=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function bh(i,t,e,n){const s=new bc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ro(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function bc(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function zv(i,t,e,n){let s=0;for(let o=t,r=e-n;o<e;o+=n)s+=(i[r]-i[o])*(i[o+1]+i[r+1]),r=o;return s}class Js{static area(t){const e=t.length;let n=0;for(let s=e-1,o=0;o<e;s=o++)n+=t[s].x*t[o].y-t[o].x*t[s].y;return n*.5}static isClockWise(t){return Js.area(t)<0}static triangulateShape(t,e){const n=[],s=[],o=[];Th(t),Ah(n,t);let r=t.length;e.forEach(Th);for(let c=0;c<e.length;c++)s.push(r),r+=e[c].length,Ah(n,e[c]);const a=wv.triangulate(n,s);for(let c=0;c<a.length;c+=3)o.push(a.slice(c,c+3));return o}}function Th(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Ah(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class ae extends Pr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,o,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ae(t.radius,t.detail)}}class ao extends Be{constructor(t=.5,e=1,n=32,s=1,o=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:o,thetaLength:r},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],h=[];let d=t;const p=(e-t)/s,f=new I,g=new at;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const u=o+m/n*r;f.x=d*Math.cos(u),f.y=d*Math.sin(u),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}d+=p}for(let _=0;_<s;_++){const m=_*(n+1);for(let u=0;u<n;u++){const M=u+m,v=M,y=M+n+1,A=M+n+2,E=M+1;a.push(v,y,E),a.push(y,A,E)}}this.setIndex(a),this.setAttribute("position",new se(c,3)),this.setAttribute("normal",new se(l,3)),this.setAttribute("uv",new se(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ao(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Qc extends Be{constructor(t=new td([new at(0,.5),new at(-.5,-.5),new at(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],o=[],r=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new se(s,3)),this.setAttribute("normal",new se(o,3)),this.setAttribute("uv",new se(r,2));function l(h){const d=s.length/3,p=h.extractPoints(e);let f=p.shape;const g=p.holes;Js.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,u=g.length;m<u;m++){const M=g[m];Js.isClockWise(M)===!0&&(g[m]=M.reverse())}const _=Js.triangulateShape(f,g);for(let m=0,u=g.length;m<u;m++){const M=g[m];f=f.concat(M)}for(let m=0,u=f.length;m<u;m++){const M=f[m];s.push(M.x,M.y,0),o.push(0,0,1),r.push(M.x,M.y)}for(let m=0,u=_.length;m<u;m++){const M=_[m],v=M[0]+d,y=M[1]+d,A=M[2]+d;n.push(v,y,A),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return kv(e,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const r=e[t.shapes[s]];n.push(r)}return new Qc(n,t.curveSegments)}}function kv(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class Bt extends Be{constructor(t=1,e=32,n=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(r+a,Math.PI);let l=0;const h=[],d=new I,p=new I,f=[],g=[],_=[],m=[];for(let u=0;u<=n;u++){const M=[],v=u/n;let y=0;u===0&&r===0?y=.5/e:u===n&&c===Math.PI&&(y=-.5/e);for(let A=0;A<=e;A++){const E=A/e;d.x=-t*Math.cos(s+E*o)*Math.sin(r+v*a),d.y=t*Math.cos(r+v*a),d.z=t*Math.sin(s+E*o)*Math.sin(r+v*a),g.push(d.x,d.y,d.z),p.copy(d).normalize(),_.push(p.x,p.y,p.z),m.push(E+y,1-v),M.push(l++)}h.push(M)}for(let u=0;u<n;u++)for(let M=0;M<e;M++){const v=h[u][M+1],y=h[u][M],A=h[u+1][M],E=h[u+1][M+1];(u!==0||r>0)&&f.push(v,y,E),(u!==n-1||c<Math.PI)&&f.push(y,A,E)}this.setIndex(f),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(_,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bt(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class he extends Be{constructor(t=1,e=.4,n=12,s=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:o},n=Math.floor(n),s=Math.floor(s);const r=[],a=[],c=[],l=[],h=new I,d=new I,p=new I;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const _=g/s*o,m=f/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(_),d.y=(t+e*Math.cos(m))*Math.sin(_),d.z=e*Math.sin(m),a.push(d.x,d.y,d.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),p.subVectors(d,h).normalize(),c.push(p.x,p.y,p.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const _=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,u=(s+1)*(f-1)+g,M=(s+1)*f+g;r.push(_,m,M),r.push(m,u,M)}this.setIndex(r),this.setAttribute("position",new se(a,3)),this.setAttribute("normal",new se(c,3)),this.setAttribute("uv",new se(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new he(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Gv extends je{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class nt extends uo{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lu,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ir extends Ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Hv extends Ir{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ea=new Me,Rh=new I,Ch=new I;class sd{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.map=null,this.mapPass=null,this.matrix=new Me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yc,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Rh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Rh),Ch.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ch),e.updateMatrixWorld(),Ea.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ea),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ea)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Ph=new Me,ks=new I,ba=new I;class Vv extends sd{constructor(){super(new un(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new at(4,2),this._viewportCount=6,this._viewports=[new xe(2,1,1,1),new xe(0,1,1,1),new xe(3,1,1,1),new xe(1,1,1,1),new xe(3,0,1,1),new xe(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,o=t.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),ks.setFromMatrixPosition(t.matrixWorld),n.position.copy(ks),ba.copy(n.position),ba.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ba),n.updateMatrixWorld(),s.makeTranslation(-ks.x,-ks.y,-ks.z),Ph.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ph)}}class od extends Ir{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Vv}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Wv extends sd{constructor(){super(new qc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class tl extends Ir{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.target=new Ae,this.shadow=new Wv}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Xv extends Ir{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class rd{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Lh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Lh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Lh(){return performance.now()}class Ih{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ue(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Yv extends Bi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dc);const Dh={type:"change"},el={type:"start"},ad={type:"end"},qo=new Fu,Uh=new mi,qv=Math.cos(70*Pe.DEG2RAD),De=new I,Qe=2*Math.PI,ve={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ta=1e-6;class Kv extends Yv{constructor(t,e=null){super(t,e),this.state=ve.NONE,this.enabled=!0,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:us.ROTATE,MIDDLE:us.DOLLY,RIGHT:us.PAN},this.touches={ONE:_i.ROTATE,TWO:_i.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new Fn,this._lastTargetPosition=new I,this._quat=new Fn().setFromUnitVectors(t.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ih,this._sphericalDelta=new Ih,this._scale=1,this._panOffset=new I,this._rotateStart=new at,this._rotateEnd=new at,this._rotateDelta=new at,this._panStart=new at,this._panEnd=new at,this._panDelta=new at,this._dollyStart=new at,this._dollyEnd=new at,this._dollyDelta=new at,this._dollyDirection=new I,this._mouse=new at,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=jv.bind(this),this._onPointerDown=Zv.bind(this),this._onPointerUp=Jv.bind(this),this._onContextMenu=sx.bind(this),this._onMouseWheel=tx.bind(this),this._onKeyDown=ex.bind(this),this._onTouchStart=nx.bind(this),this._onTouchMove=ix.bind(this),this._onMouseDown=$v.bind(this),this._onMouseMove=Qv.bind(this),this._interceptControlDown=ox.bind(this),this._interceptControlUp=rx.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Dh),this.update(),this.state=ve.NONE}update(t=null){const e=this.object.position;De.copy(e).sub(this.target),De.applyQuaternion(this._quat),this._spherical.setFromVector3(De),this.autoRotate&&this.state===ve.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Qe:n>Math.PI&&(n-=Qe),s<-Math.PI?s+=Qe:s>Math.PI&&(s-=Qe),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=r!=this._spherical.radius}if(De.setFromSpherical(this._spherical),De.applyQuaternion(this._quatInverse),e.copy(this.target).add(De),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){const a=De.length();r=this._clampDistance(a*this._scale);const c=a-r;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),o=!!c}else if(this.object.isOrthographicCamera){const a=new I(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=c!==this.object.zoom;const l=new I(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),r=De.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(qo.origin.copy(this.object.position),qo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(qo.direction))<qv?this.object.lookAt(this.target):(Uh.setFromNormalAndCoplanarPoint(this.object.up,this.target),qo.intersectPlane(Uh,this.target))))}else if(this.object.isOrthographicCamera){const r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>Ta||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ta||this._lastTargetPosition.distanceToSquared(this.target)>Ta?(this.dispatchEvent(Dh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Qe/60*this.autoRotateSpeed*t:Qe/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){De.setFromMatrixColumn(e,0),De.multiplyScalar(-t),this._panOffset.add(De)}_panUp(t,e){this.screenSpacePanning===!0?De.setFromMatrixColumn(e,1):(De.setFromMatrixColumn(e,0),De.crossVectors(this.object.up,De)),De.multiplyScalar(t),this._panOffset.add(De)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;De.copy(s).sub(this.target);let o=De.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*o/n.clientHeight,this.object.matrix),this._panUp(2*e*o/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,o=e-n.top,r=n.width,a=n.height;this._mouse.x=s/r*2-1,this._mouse.y=-(o/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Qe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Qe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Qe*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Qe*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Qe*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Qe*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(n*n+s*s);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._rotateEnd.set(s,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Qe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Qe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const r=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(r,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new at,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Zv(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function jv(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Jv(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ad),this.state=ve.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function $v(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case us.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ve.DOLLY;break;case us.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ve.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ve.ROTATE}break;case us.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ve.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ve.PAN}break;default:this.state=ve.NONE}this.state!==ve.NONE&&this.dispatchEvent(el)}function Qv(i){switch(this.state){case ve.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ve.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ve.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function tx(i){this.enabled===!1||this.enableZoom===!1||this.state!==ve.NONE||(i.preventDefault(),this.dispatchEvent(el),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(ad))}function ex(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function nx(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case _i.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ve.TOUCH_ROTATE;break;case _i.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ve.TOUCH_PAN;break;default:this.state=ve.NONE}break;case 2:switch(this.touches.TWO){case _i.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ve.TOUCH_DOLLY_PAN;break;case _i.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ve.TOUCH_DOLLY_ROTATE;break;default:this.state=ve.NONE}break;default:this.state=ve.NONE}this.state!==ve.NONE&&this.dispatchEvent(el)}function ix(i){switch(this._trackPointer(i),this.state){case ve.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ve.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ve.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ve.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ve.NONE}}function sx(i){this.enabled!==!1&&i.preventDefault()}function ox(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function rx(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const cd={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Cs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const ax=new qc(-1,1,1,-1,0,1);class cx extends Be{constructor(){super(),this.setAttribute("position",new se([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new se([0,2,0,0,2,0],2))}}const lx=new cx;class nl{constructor(t){this._mesh=new Z(lx,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,ax)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class ld extends Cs{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof je?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=no.clone(t.uniforms),this.material=new je({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new nl(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Nh extends Cs{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),o=t.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let r,a;this.inverse?(r=0,a=1):(r=1,a=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),o.buffers.stencil.setFunc(s.ALWAYS,r,4294967295),o.buffers.stencil.setClear(a),o.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(s.EQUAL,1,4294967295),o.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),o.buffers.stencil.setLocked(!0)}}class hx extends Cs{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class ux{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new at);this._width=n.width,this._height=n.height,e=new Cn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:$n}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ld(cd),this.copyPass.material.blending=Jn,this.clock=new rd}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,o=this.passes.length;s<o;s++){const r=this.passes[s];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),r.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),r.needsSwap){if(n){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Nh!==void 0&&(r instanceof Nh?n=!0:r instanceof hx&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new at);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class dx extends Cs{constructor(t,e,n=null,s=null,o=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Zt}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let o,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(o=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),t.autoClear=s}}const fx={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Zt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class bs extends Cs{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new at(t.x,t.y):new at(256,256),this.clearColor=new Zt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new Cn(o,r,{type:$n}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const p=new Cn(o,r,{type:$n});p.texture.name="UnrealBloomPass.h"+d,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);const f=new Cn(o,r,{type:$n});f.texture.name="UnrealBloomPass.v"+d,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),o=Math.round(o/2),r=Math.round(r/2)}const a=fx;this.highPassUniforms=no.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new je({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new at(1/o,1/r),o=Math.round(o/2),r=Math.round(r/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=cd;this.copyUniforms=no.clone(h.uniforms),this.blendMaterial=new je({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Qs,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Zt,this.oldClearAlpha=1,this.basic=new si,this.fsQuad=new nl(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(n,s),this.renderTargetsVertical[o].setSize(n,s),this.separableBlurMaterials[o].uniforms.invSize.value=new at(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,o){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const r=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),o&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=bs.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=bs.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=r}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new je({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new at(.5,.5)},direction:{value:new at(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new je({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}bs.BlurDirectionX=new at(1,0);bs.BlurDirectionY=new at(0,1);const px={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class mx extends Cs{constructor(){super();const t=px;this.uniforms=no.clone(t.uniforms),this.material=new Gv({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new nl(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},de.getTransfer(this._outputColorSpace)===ye&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===gu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===_u?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===vu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Nc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===xu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Mu&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const gx={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new at(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
		precision highp float;

		uniform sampler2D tDiffuse;

		uniform vec2 resolution;

		varying vec2 vUv;

		// FXAA 3.11 implementation by NVIDIA, ported to WebGL by Agost Biro (biro@archilogic.com)

		//----------------------------------------------------------------------------------
		// File:        es3-keplerFXAAassetsshaders/FXAA_DefaultES.frag
		// SDK Version: v3.00
		// Email:       gameworks@nvidia.com
		// Site:        http://developer.nvidia.com/
		//
		// Copyright (c) 2014-2015, NVIDIA CORPORATION. All rights reserved.
		//
		// Redistribution and use in source and binary forms, with or without
		// modification, are permitted provided that the following conditions
		// are met:
		//  * Redistributions of source code must retain the above copyright
		//    notice, this list of conditions and the following disclaimer.
		//  * Redistributions in binary form must reproduce the above copyright
		//    notice, this list of conditions and the following disclaimer in the
		//    documentation and/or other materials provided with the distribution.
		//  * Neither the name of NVIDIA CORPORATION nor the names of its
		//    contributors may be used to endorse or promote products derived
		//    from this software without specific prior written permission.
		//
		// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS ''AS IS'' AND ANY
		// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
		// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
		// PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
		// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
		// EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
		// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
		// PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
		// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
		// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
		// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
		//
		//----------------------------------------------------------------------------------

		#ifndef FXAA_DISCARD
			//
			// Only valid for PC OpenGL currently.
			// Probably will not work when FXAA_GREEN_AS_LUMA = 1.
			//
			// 1 = Use discard on pixels which don't need AA.
			//     For APIs which enable concurrent TEX+ROP from same surface.
			// 0 = Return unchanged color on pixels which don't need AA.
			//
			#define FXAA_DISCARD 0
		#endif

		/*--------------------------------------------------------------------------*/
		#define FxaaTexTop(t, p) texture2D(t, p, -100.0)
		#define FxaaTexOff(t, p, o, r) texture2D(t, p + (o * r), -100.0)
		/*--------------------------------------------------------------------------*/

		#define NUM_SAMPLES 5

		// assumes colors have premultipliedAlpha, so that the calculated color contrast is scaled by alpha
		float contrast( vec4 a, vec4 b ) {
			vec4 diff = abs( a - b );
			return max( max( max( diff.r, diff.g ), diff.b ), diff.a );
		}

		/*============================================================================

									FXAA3 QUALITY - PC

		============================================================================*/

		/*--------------------------------------------------------------------------*/
		vec4 FxaaPixelShader(
			vec2 posM,
			sampler2D tex,
			vec2 fxaaQualityRcpFrame,
			float fxaaQualityEdgeThreshold,
			float fxaaQualityinvEdgeThreshold
		) {
			vec4 rgbaM = FxaaTexTop(tex, posM);
			vec4 rgbaS = FxaaTexOff(tex, posM, vec2( 0.0, 1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaE = FxaaTexOff(tex, posM, vec2( 1.0, 0.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaN = FxaaTexOff(tex, posM, vec2( 0.0,-1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaW = FxaaTexOff(tex, posM, vec2(-1.0, 0.0), fxaaQualityRcpFrame.xy);
			// . S .
			// W M E
			// . N .

			bool earlyExit = max( max( max(
					contrast( rgbaM, rgbaN ),
					contrast( rgbaM, rgbaS ) ),
					contrast( rgbaM, rgbaE ) ),
					contrast( rgbaM, rgbaW ) )
					< fxaaQualityEdgeThreshold;
			// . 0 .
			// 0 0 0
			// . 0 .

			#if (FXAA_DISCARD == 1)
				if(earlyExit) FxaaDiscard;
			#else
				if(earlyExit) return rgbaM;
			#endif

			float contrastN = contrast( rgbaM, rgbaN );
			float contrastS = contrast( rgbaM, rgbaS );
			float contrastE = contrast( rgbaM, rgbaE );
			float contrastW = contrast( rgbaM, rgbaW );

			float relativeVContrast = ( contrastN + contrastS ) - ( contrastE + contrastW );
			relativeVContrast *= fxaaQualityinvEdgeThreshold;

			bool horzSpan = relativeVContrast > 0.;
			// . 1 .
			// 0 0 0
			// . 1 .

			// 45 deg edge detection and corners of objects, aka V/H contrast is too similar
			if( abs( relativeVContrast ) < .3 ) {
				// locate the edge
				vec2 dirToEdge;
				dirToEdge.x = contrastE > contrastW ? 1. : -1.;
				dirToEdge.y = contrastS > contrastN ? 1. : -1.;
				// . 2 .      . 1 .
				// 1 0 2  ~=  0 0 1
				// . 1 .      . 0 .

				// tap 2 pixels and see which ones are "outside" the edge, to
				// determine if the edge is vertical or horizontal

				vec4 rgbaAlongH = FxaaTexOff(tex, posM, vec2( dirToEdge.x, -dirToEdge.y ), fxaaQualityRcpFrame.xy);
				float matchAlongH = contrast( rgbaM, rgbaAlongH );
				// . 1 .
				// 0 0 1
				// . 0 H

				vec4 rgbaAlongV = FxaaTexOff(tex, posM, vec2( -dirToEdge.x, dirToEdge.y ), fxaaQualityRcpFrame.xy);
				float matchAlongV = contrast( rgbaM, rgbaAlongV );
				// V 1 .
				// 0 0 1
				// . 0 .

				relativeVContrast = matchAlongV - matchAlongH;
				relativeVContrast *= fxaaQualityinvEdgeThreshold;

				if( abs( relativeVContrast ) < .3 ) { // 45 deg edge
					// 1 1 .
					// 0 0 1
					// . 0 1

					// do a simple blur
					return mix(
						rgbaM,
						(rgbaN + rgbaS + rgbaE + rgbaW) * .25,
						.4
					);
				}

				horzSpan = relativeVContrast > 0.;
			}

			if(!horzSpan) rgbaN = rgbaW;
			if(!horzSpan) rgbaS = rgbaE;
			// . 0 .      1
			// 1 0 1  ->  0
			// . 0 .      1

			bool pairN = contrast( rgbaM, rgbaN ) > contrast( rgbaM, rgbaS );
			if(!pairN) rgbaN = rgbaS;

			vec2 offNP;
			offNP.x = (!horzSpan) ? 0.0 : fxaaQualityRcpFrame.x;
			offNP.y = ( horzSpan) ? 0.0 : fxaaQualityRcpFrame.y;

			bool doneN = false;
			bool doneP = false;

			float nDist = 0.;
			float pDist = 0.;

			vec2 posN = posM;
			vec2 posP = posM;

			int iterationsUsedN = 0;
			int iterationsUsedP = 0;
			for( int i = 0; i < NUM_SAMPLES; i++ ) {

				float increment = float(i + 1);

				if(!doneN) {
					nDist += increment;
					posN = posM + offNP * nDist;
					vec4 rgbaEndN = FxaaTexTop(tex, posN.xy);
					doneN = contrast( rgbaEndN, rgbaM ) > contrast( rgbaEndN, rgbaN );
					iterationsUsedN = i;
				}

				if(!doneP) {
					pDist += increment;
					posP = posM - offNP * pDist;
					vec4 rgbaEndP = FxaaTexTop(tex, posP.xy);
					doneP = contrast( rgbaEndP, rgbaM ) > contrast( rgbaEndP, rgbaN );
					iterationsUsedP = i;
				}

				if(doneN || doneP) break;
			}


			if ( !doneP && !doneN ) return rgbaM; // failed to find end of edge

			float dist = min(
				doneN ? float( iterationsUsedN ) / float( NUM_SAMPLES - 1 ) : 1.,
				doneP ? float( iterationsUsedP ) / float( NUM_SAMPLES - 1 ) : 1.
			);

			// hacky way of reduces blurriness of mostly diagonal edges
			// but reduces AA quality
			dist = pow(dist, .5);

			dist = 1. - dist;

			return mix(
				rgbaM,
				rgbaN,
				dist * .5
			);
		}

		void main() {
			const float edgeDetectionQuality = .2;
			const float invEdgeDetectionQuality = 1. / edgeDetectionQuality;

			gl_FragColor = FxaaPixelShader(
				vUv,
				tDiffuse,
				resolution,
				edgeDetectionQuality, // [0,1] contrast needed, otherwise early discard
				invEdgeDetectionQuality
			);

		}
	`},O={white:16446432,ivory:16775404,cream:15984072,gold:13938487,goldBright:16766044,brass:12618285,bronze:9067038,burgundy:6165024,burgundyDeep:3803666,crimson:9182251,maroon:4853272,marigold:16747546,marigoldDeep:15231496,jasmine:16774888,saffron:16741656,rose:14241642,leaf:3107370,skin:13208158,skinDark:10906174,flame:16757575,emberGlow:16743214};function _x(){const i=new wt,t=new nt({color:O.white,roughness:.62,metalness:.05}),e=new nt({color:O.ivory,roughness:.55,metalness:.06}),n=new nt({color:O.gold,metalness:.9,roughness:.32,emissive:O.brass,emissiveIntensity:.22}),s=new nt({color:O.goldBright,metalness:.85,roughness:.28,emissive:O.goldBright,emissiveIntensity:.9}),o=new nt({color:O.burgundy,roughness:.82,metalness:.04}),r=new nt({color:O.cream,roughness:.8,metalness:.02}),a=new nt({color:O.marigold,roughness:.6,metalness:0,emissive:O.marigoldDeep,emissiveIntensity:.28}),c=new nt({color:O.jasmine,roughness:.7,metalness:0,emissive:O.jasmine,emissiveIntensity:.15}),l=new nt({color:O.leaf,roughness:.8,metalness:0}),h=new nt({color:O.bronze,roughness:.85,metalness:.1}),d=new nt({color:O.emberGlow,emissive:O.emberGlow,emissiveIntensity:2,roughness:.5}),p=new nt({color:O.saffron,emissive:O.marigold,emissiveIntensity:2.4,roughness:.4}),f=new nt({color:O.goldBright,emissive:O.goldBright,emissiveIntensity:3,roughness:.35}),g=new nt({color:O.burgundyDeep,roughness:.9,metalness:.05}),_=(P,Gt,Dt,It,bt,Qt=i)=>{const Ft=new Z(P,Gt);return Ft.position.set(Dt,It,bt),Qt.add(Ft),Ft},m=.52;_(new Ct(7.2,.18,7.2),t,0,.09,0),_(new Ct(6.5,.18,6.5),e,0,.27,0),_(new Ct(5.9,.16,5.9),t,0,.44,0),_(new Ct(5.94,.03,5.94),n,0,m+.005,0),_(new Ct(5.4,.035,5.4),t,0,m+.01,0),_(new Ct(3.4,.16,.7),e,0,.08,4.05);const u=3.15,M=[0,60,120,180,240,300].map(P=>P*Math.PI/180),v=new Ct(.72,.34,.72),y=new rt(.36,.4,.12,8),A=new rt(.24,.28,2.6,10),E=new rt(.29,.29,.08,8),T=new rt(.27,.24,.12,8),C=new rt(.46,.26,.36,8),U=new rt(.58,.46,.16,8),x=new Ct(.6,.18,.6),S=[];for(const P of M){const Gt=Math.cos(P)*u,Dt=Math.sin(P)*u,It=new wt;It.position.set(Gt,m,Dt),It.rotation.y=-P,_(v,t,0,.17,0,It),_(y,n,0,.4,0,It),_(A,t,0,1.76,0,It),_(E,n,0,1.15,0,It),_(E,n,0,2.25,0,It),_(T,n,0,3.12,0,It),_(C,e,0,3.36,0,It),_(U,n,0,3.62,0,It),_(x,t,0,3.79,0,It),i.add(It),S.push(new I(Gt,m+3.88,Dt))}_(new rt(3.95,3.95,.5,6),t,0,4.5,0),_(new rt(4.02,4.02,.14,6),n,0,4.28,0),_(new rt(3.3,3.7,.45,12),e,0,4.98,0),_(new rt(3.35,3.35,.06,12),n,0,5.22,0),_(new rt(2.5,3.2,.42,12),t,0,5.41,0);const D=new $t(.24,.5,6),z=12,G=2.45;for(let P=0;P<z;P++){const Gt=P/z*Math.PI*2;_(D,n,Math.cos(Gt)*G,5.72,Math.sin(Gt)*G)}_(new Bt(1.95,16,8,0,Math.PI*2,0,Math.PI*.5),e,0,5.62,0);const Q=new Ct(.06,1.95,.14),W=8;for(let P=0;P<W;P++){const Gt=P/W*Math.PI*2,Dt=_(Q,n,0,0,0);Dt.position.set(Math.cos(Gt)*1.02,6.55,Math.sin(Gt)*1.02),Dt.rotation.y=-Gt,Dt.rotation.z=.62}_(new rt(.55,1.7,.35,12),t,0,7.42,0),_(new rt(.34,.5,.16,12),n,0,7.62,0),_(new Bt(.3,10,8),n,0,7.94,0),_(new rt(.1,.16,.18,8),n,0,8.2,0),_(new rt(.2,.2,.05,8),s,0,8.32,0),_(new $t(.12,.34,8),n,0,8.55,0),_(new Bt(.08,6,4),s,0,8.78,0),_(new rt(3.62,3.9,.55,20,1,!0),o,0,4.42,0),_(new rt(3.92,3.92,.12,20,1,!0),n,0,4.66,0),_(new rt(3.58,3.62,.14,20,1,!0),r,0,4.18,0);const lt=new $t(.2,.34,6),F=new Bt(.055,5,3),dt=16,et=3.75;for(let P=0;P<dt;P++){const Gt=P/dt*Math.PI*2,Dt=Math.cos(Gt)*et,It=Math.sin(Gt)*et,bt=_(lt,P%2?r:o,Dt,4.1,It);bt.rotation.x=Math.PI,_(F,n,Dt,3.9,It)}const xt=new Bt(.135,5,3),kt=(P,Gt,Dt,It)=>{for(let bt=0;bt<=Dt;bt++){const Qt=bt/Dt,Ft=P.x+(Gt.x-P.x)*Qt,R=P.z+(Gt.z-P.z)*Qt,w=P.y+(Gt.y-P.y)*Qt-Math.sin(Math.PI*Qt)*It;_(xt,bt%2?c:a,Ft,w,R)}};for(let P=0;P<M.length;P++){if(P===1)continue;const Gt=S[P],Dt=S[(P+1)%M.length],It=new I(Gt.x,Gt.y-.15,Gt.z),bt=new I(Dt.x,Dt.y-.15,Dt.z);kt(It,bt,7,.72)}const Xt=S[1],B=S[2],K=new I(Xt.x,Xt.y+.05,Xt.z),mt=new I(B.x,B.y+.05,B.z);kt(K,mt,8,.55);const X=new $t(.11,.42,6),gt=new Bt(.1,5,4),pt=7;for(let P=1;P<pt;P++){const Gt=P/pt,Dt=K.x+(mt.x-K.x)*Gt,It=K.z+(mt.z-K.z)*Gt,bt=K.y+(mt.y-K.y)*Gt-Math.sin(Math.PI*Gt)*.55,Qt=_(X,P%2?l:a,Dt,bt-.32,It);Qt.rotation.x=Math.PI,_(gt,P%2?a:c,Dt,bt-.56,It)}const St=new wt;St.position.set(0,m,0),_(new Ct(1.5,.14,1.5),e,0,.07,0,St),_(new Ct(1.12,.42,1.12),t,0,.35,0,St),_(new Ct(1.34,.1,1.34),n,0,.61,0,St),_(new Ct(1.3,.06,1.3),g,0,.69,0,St),_(new rt(.44,.4,.14,12),g,0,.73,0,St);const qt=new rt(.05,.05,.72,6),Nt=.78;for(let P=0;P<4;P++){const Gt=_(qt,h,0,Nt,0,St);Gt.rotation.z=Math.PI/2,Gt.rotation.y=P/4*Math.PI}return _(new $t(.3,.62,8),d,0,1.12,0,St),_(new $t(.19,.5,8),p,0,1.22,0,St),_(new $t(.1,.36,8),f,0,1.32,0,St),_(new Bt(.22,8,6),d,0,.92,0,St),i.add(St),i}const _r=new nt({color:O.white,roughness:.55,metalness:0}),vx=new nt({color:O.ivory,roughness:.6,metalness:0}),hn=new nt({color:O.gold,roughness:.32,metalness:.9,emissive:O.brass,emissiveIntensity:.12}),xx=new nt({color:O.brass,roughness:.4,metalness:.85}),Mx=new nt({color:O.burgundy,roughness:.8,metalness:0}),vr=new nt({color:O.marigold,roughness:.75,metalness:0,emissive:O.marigoldDeep,emissiveIntensity:.18}),hd=new nt({color:O.jasmine,roughness:.7,metalness:0}),yx=new nt({color:O.rose,roughness:.75,metalness:0}),Fh=new nt({color:O.leaf,roughness:.8,metalness:0}),Oh=new nt({color:O.goldBright,roughness:.4,metalness:0,emissive:O.emberGlow,emissiveIntensity:1.4}),Sx={blob:new ae(1,0)};function xr(i,t){const e=new Z(Sx.blob,i);return e.scale.setScalar(t),e}function wx(){const i=new wt,t=2.7,e=2.6,n=.42,s=new Ct(n,e,n),o=new Ct(n*1.7,.5,n*1.7),r=new rt(n*.9,n*1,.28,8),a=new Ct(n*1.12,.14,n*1.12),c=new Ct(n*1.5,.32,n*1.5);for(let M=-1;M<=1;M+=2){const v=M*t,y=new Z(o,hn);y.position.set(v,.25,0),i.add(y);const A=new Z(r,vx);A.position.set(v,.5+.14,0),i.add(A);const E=new Z(s,_r);E.position.set(v,.64+e/2,0),i.add(E);for(const x of[1.4,2.9]){const S=new Z(a,hn);S.position.set(v,x,0),i.add(S)}const T=new Z(c,hn);T.position.set(v,.64+e+.16,0),i.add(T);const C=xr(hn,.16);C.scale.y=.2,C.position.set(v,.64+e+.34,0),i.add(C);const U=new Z(new $t(.09,.26,8),hn);U.position.set(v,.64+e+.5,0),i.add(U)}const l=.64+e+.32,h=new he(.34,.07,4,6,Math.PI),d=7,p=.7;for(let M=0;M<d;M++){const v=M/(d-1),y=(v-.5)*2*t,A=l+Math.sin(v*Math.PI)*p,E=new Z(h,hn);E.position.set(y,A,0),E.rotation.z=Math.PI,i.add(E)}const f=new Z(new Ct(t*2+n,.24,.24),_r);f.position.set(0,l+p+.28,0),i.add(f);const g=new Z(new Ct(t*2+n,.08,.28),hn);g.position.set(0,l+p+.42,0),i.add(g);const _=9;for(let M=0;M<_;M++){const v=M/(_-1),y=(v-.5)*2*t,A=Math.sin(v*Math.PI),E=l+A*p,T=.5+(1-A)*.7,C=3;for(let U=0;U<C;U++){const x=E-(U+1)*(T/C),S=(M+U)%3,z=xr(S===0?hd:vr,.09+(U===C-1?.02:0));z.position.set(y,x,.05),i.add(z)}}const m=new $t(.14,.4,3),u=5;for(let M=0;M<u;M++){const y=(M/(u-1)-.5)*(t*1.7),A=new Z(m,Mx);A.position.set(y,l+p+.04,.16),A.rotation.x=Math.PI,A.rotation.z=Math.PI/4,i.add(A)}return i}function Ex(){const i=new wt,t=1.5,e=1.8,n=.09,s=new rt(n,n,e,8);for(let h=-1;h<=1;h+=2){const d=new Z(s,Fh);d.position.set(h*t,e/2,0),i.add(d)}const o=new he(t,n,5,16,Math.PI),r=new Z(o,Fh);r.position.set(0,e,0),i.add(r);const a=[vr,yx,hd,vr];function c(h,d){for(let f=0;f<2;f++){const g=a[Math.random()*a.length|0],_=xr(g,.12+Math.random()*.07);_.position.set(h+(Math.random()-.5)*.22,d+(Math.random()-.5)*.22,(Math.random()-.5)*.22),i.add(_)}}for(let h=-1;h<=1;h+=2)for(let d=0;d<=4;d++)c(h*t,.25+(e-.1)*(d/4));const l=9;for(let h=0;h<=l;h++){const d=h/l*Math.PI,p=Math.cos(d)*t,f=e+Math.sin(d)*t;c(p,f)}return i}function bx(){const i=new wt,t=new Z(new Ct(.7,.22,.7),hn);t.position.y=.11,i.add(t);const e=new Z(new Ct(.54,.18,.54),_r);e.position.y=.22+.09,i.add(e);const n=1.9,s=.4+n/2,o=new Z(new rt(.18,.22,n,8),_r);o.position.y=s,i.add(o);const r=new rt(.24,.24,.09,8),a=new Z(r,hn);a.position.y=.46,i.add(a);const c=new Z(r,hn);c.position.y=.4+n-.06,i.add(c);const l=.4+n+.02,h=new $t(.12,.34,4),d=8;for(let u=0;u<d;u++){const M=u/d*Math.PI*2,v=new Z(h,hn);v.position.set(Math.cos(M)*.19,l+.1,Math.sin(M)*.19),v.rotation.z=Math.cos(M)*.6,v.rotation.x=-Math.sin(M)*.6,i.add(v)}for(let u=0;u<d;u++){const M=u/d*Math.PI*2+Math.PI/d,v=new Z(h,hn);v.scale.setScalar(.8),v.position.set(Math.cos(M)*.1,l+.16,Math.sin(M)*.1),v.rotation.z=Math.cos(M)*.3,v.rotation.x=-Math.sin(M)*.3,i.add(v)}const p=l+.34,f=new Z(new rt(.26,.14,.16,12),xx);f.position.y=p,i.add(f);const g=new Z(new he(.25,.03,6,14),hn);g.rotation.x=Math.PI/2,g.position.y=p+.08,i.add(g);const _=new Z(new $t(.1,.32,8),Oh);_.position.y=p+.24,i.add(_);const m=xr(Oh,.07);return m.position.y=p+.14,i.add(m),i}function Tx(){const i=new wt,t=new nt({color:O.ivory,roughness:.62,metalness:0}),e=new nt({color:O.bronze,roughness:.55,metalness:.2}),n=new nt({color:O.burgundy,roughness:.82,metalness:0}),s=new nt({color:O.burgundyDeep,roughness:.85,metalness:0}),o=new nt({color:O.gold,roughness:.34,metalness:.9,emissive:O.brass,emissiveIntensity:.28}),r=new nt({color:O.goldBright,roughness:.3,metalness:.85,emissive:O.goldBright,emissiveIntensity:.75}),a=new nt({color:O.saffron,roughness:.6,metalness:0,emissive:O.marigoldDeep,emissiveIntensity:.4}),c=new nt({color:O.cream,roughness:.7,metalness:.06}),l=new nt({color:O.ivory,roughness:.68,metalness:.05}),h=new nt({color:O.skin,roughness:.75,metalness:0}),d=new nt({color:O.skinDark,roughness:.78,metalness:0}),p=new nt({color:1708040,roughness:.4,metalness:0}),f=new nt({color:O.jasmine,roughness:.5,metalness:0,emissive:O.jasmine,emissiveIntensity:.35}),g=new nt({color:O.marigold,roughness:.6,metalness:0,emissive:O.marigoldDeep,emissiveIntensity:.3}),_=new nt({color:O.leaf,roughness:.8,metalness:0}),m=new nt({color:O.maroon,roughness:.7,metalness:.1}),u=(ut,Tt,N,_t,j)=>{const st=new Z(ut,Tt);return st.position.set(N||0,_t||0,j||0),st},M=u(new Ct(.64,.8,1.58),t,0,1.3,0);i.add(M),i.add(u(new Ct(.58,.62,.36),t,0,1.2,.84)),i.add(u(new Bt(.4,7,5),t,0,1.36,-.74));const v=new rt(.1,.07,1.02,6),y=new Ct(.16,.12,.2),A=new rt(.115,.115,.07,6),E=[[.23,.56],[-.23,.56],[.25,-.56],[-.25,-.56]],T=[Math.PI/2,Math.PI*1.5,0,Math.PI],C=[];for(let ut=0;ut<E.length;ut++){const[Tt,N]=E[ut],_t=new wt;_t.position.set(Tt,1.06,N);const j=u(v,t,0,-.51,0),st=new wt;st.position.y=-1,st.add(u(y,e,0,0,0));const Et=u(A,o,0,-.74,0);_t.add(j,st,Et),i.add(_t),C.push({hip:_t,foot:st,offset:T[ut]})}const U=new wt;U.position.set(0,1.44,-.9);const x=u(new rt(.12,.02,1,6),t,0,-.44,-.14);x.rotation.x=-.34,U.add(x),i.add(U);const S=new wt;S.position.set(0,1.52,.72),i.add(S);const D=u(new rt(.2,.3,.74,6),t,0,.3,.2);D.rotation.x=.62,S.add(D);const z=u(new Ct(.27,.31,.44),t,0,.64,.53);z.rotation.x=.28,S.add(z);const G=u(new Ct(.2,.19,.24),t,0,.52,.8);G.rotation.x=.28,S.add(G);const Q=new ae(.035,0);S.add(u(Q,p,.11,.68,.62)),S.add(u(Q,p,-.11,.68,.62));const W=new $t(.06,.19,4),lt=u(W,t,.09,.84,.42);lt.rotation.x=-.15;const F=u(W,t,-.09,.84,.42);F.rotation.x=-.15,S.add(lt,F);const dt=u(new Ct(.2,.24,.05),o,0,.7,.67);dt.rotation.x=.28,S.add(dt),S.add(u(new Ct(.29,.05,.05),o,0,.6,.67));const et=u(new Ct(.03,.34,.03),o,.14,.56,.66);et.rotation.x=.28;const xt=u(new Ct(.03,.34,.03),o,-.14,.56,.66);xt.rotation.x=.28,S.add(et,xt);const kt=u(new he(.11,.02,3,6),o,0,.5,.78);kt.rotation.x=Math.PI/2+.28,S.add(kt),S.add(u(new rt(.05,.05,.06,8),o,0,.86,.36)),S.add(u(new $t(.1,.42,6),a,0,1.06,.34)),S.add(u(new $t(.05,.22,6),r,0,1.2,.34));const Xt=new Ct(.05,.6,1.24);i.add(u(Xt,n,.36,1.12,-.05)),i.add(u(Xt,n,-.36,1.12,-.05));const B=new Ct(.06,.09,1.28);i.add(u(B,o,.36,.83,-.05)),i.add(u(B,o,-.36,.83,-.05));const K=new rt(.08,.08,.03,6);for(const ut of[.32,-.36]){const Tt=u(K,o,.385,1.16,ut);Tt.rotation.z=Math.PI/2;const N=u(K,o,-.385,1.16,ut);N.rotation.z=Math.PI/2,i.add(Tt,N)}const mt=new $t(.035,.16,4);for(const ut of[.4,0,-.42]){const Tt=u(mt,r,.37,.72,ut);Tt.rotation.x=Math.PI;const N=u(mt,r,-.37,.72,ut);N.rotation.x=Math.PI,i.add(Tt,N)}i.add(u(new Ct(.72,.08,1.22),s,0,1.68,-.05)),i.add(u(new Ct(.76,.05,.12),o,0,1.7,.56)),i.add(u(new Ct(.76,.05,.12),o,0,1.7,-.66));const X=new wt;X.position.set(0,0,.06),i.add(X),X.add(u(new rt(.24,.28,.22,8),l,0,1.86,0)),X.add(u(new rt(.2,.27,.72,8),l,0,2.3,.02)),X.add(u(new Bt(.24,6,5),l,0,2.6,.02)),X.add(u(new Ct(.035,.72,.035),o,0,2.3,.26));const gt=u(new Ct(.05,.22,.04),n,.09,2.56,.22);gt.rotation.z=.35;const pt=u(new Ct(.05,.22,.04),n,-.09,2.56,.22);pt.rotation.z=-.35,X.add(gt,pt);const St=new ae(.028,0);for(let ut=0;ut<5;ut++)X.add(u(St,r,0,2.56-ut*.13,.27));const qt=new rt(.1,.075,.66,6),Nt=u(qt,c,.3,1.64,.08);Nt.rotation.x=.55,Nt.rotation.z=.14;const P=u(qt,c,-.3,1.64,.08);P.rotation.x=.55,P.rotation.z=-.14,X.add(Nt,P);const Gt=new Ct(.11,.09,.18),Dt=new $t(.045,.1,4);for(const ut of[.32,-.32]){X.add(u(Gt,s,ut,1.36,.28));const Tt=u(Dt,o,ut,1.4,.4);Tt.rotation.x=-1.3,X.add(Tt);const N=u(new he(.09,.022,4,6),o,ut,1.31,.27);X.add(N),X.add(u(new Ct(.02,.28,.02),o,ut,1.5,.24))}const It=new rt(.062,.055,.52,6),bt=u(It,l,.24,2.34,.16);bt.rotation.x=.75,bt.rotation.z=.28;const Qt=u(It,l,-.25,2.3,.04);Qt.rotation.x=.35,Qt.rotation.z=-.28,X.add(bt,Qt);const Ft=new ae(.06,0),R=u(Ft,h,.32,2.12,.34),w=u(Ft,h,-.34,2.1,.12);X.add(R,w),X.add(u(new rt(.07,.08,.11,6),h,0,2.72,.02));const q=u(new ae(.17,1),h,0,2.88,.03);X.add(q),X.add(u(new ae(.024,0),p,.06,2.9,.18)),X.add(u(new ae(.024,0),p,-.06,2.9,.18)),X.add(u(new $t(.03,.06,4),d,0,2.85,.2)),X.add(u(new Ct(.11,.02,.03),d,0,2.81,.18)),X.add(u(new Bt(.21,8,6),n,0,3.02,0));const ot=u(new he(.19,.055,6,9),o,0,2.96,0);ot.rotation.x=Math.PI/2,X.add(ot),X.add(u(new Bt(.12,5,4),s,.06,3.14,-.04)),X.add(u(new ae(.055,0),r,0,3.04,.19)),X.add(u(new $t(.035,.2,6),r,0,3.24,.15)),X.add(u(new Ct(.34,.025,.025),o,0,2.94,.19));const ft=new Ct(.016,.28,.016),ct=new Bt(.02,4,3);for(let ut=0;ut<8;ut++){const Tt=-.14+ut*.04,N=.19-Math.abs(ut-3.5)*.006;X.add(u(ft,f,Tt,2.78,N)),X.add(u(ct,g,Tt,2.64,N))}const Ut=u(new he(.2,.05,5,10),g,0,2.5,.08);Ut.rotation.x=1.35,Ut.scale.set(1,1.25,1),X.add(Ut);const L=new he(.09,.045,4,6,Math.PI),Y=u(L,g,.09,2.28,.24);Y.rotation.z=.2;const it=u(L,g,-.09,2.28,.24);it.rotation.z=-.2,X.add(Y,it),X.add(u(new Bt(.03,4,3),_,.2,2.5,.12)),X.add(u(new Bt(.03,4,3),_,-.2,2.5,.12));const V=new wt;V.position.set(-.26,2,.02),V.rotation.z=.5,V.rotation.x=-.15;const tt=u(new rt(.03,.02,.62,6),s,0,-.28,0);V.add(tt),V.add(u(new rt(.032,.032,.05,6),o,0,.02,0)),V.add(u(new rt(.03,.03,.05,6),o,0,-.55,0)),V.add(u(new Ct(.14,.03,.03),r,0,.08,0)),V.add(u(new rt(.02,.022,.12,6),d,0,.16,0)),V.add(u(new ae(.03,0),r,0,.23,0)),X.add(V);const vt=new rt(.012,.012,1,4),Mt=u(vt,m,.12,1.75,.66);Mt.rotation.x=-.9;const ht=u(vt,m,-0,1.78,.62);return ht.rotation.x=-.78,i.add(Mt,ht),{group:i,update:(ut,Tt,N={amount:0,phase:0})=>{const _t=N.amount||0,j=N.phase||0;for(const At of C){const ne=Math.sin(j+At.offset)*.3*_t;At.hip.rotation.x=ne,At.foot.rotation.x=-ne*.8}const st=Math.pow(Math.max(0,Math.sin(ut*.73+.8)),12);S.rotation.x=Math.sin(ut*.9)*.05+Math.sin(j*2)*.018*_t,S.rotation.y=Math.sin(ut*.43)*.025,S.position.y=1.52+Math.sin(ut*.9)*.01,lt.rotation.x=-.15-st*.22,F.rotation.x=-.15-Math.pow(Math.max(0,Math.sin(ut*.73+2.5)),12)*.22,U.rotation.z=Math.sin(ut*.8+.5)*.15,U.rotation.x=Math.sin(ut*.6)*.05;const Et=1+Math.sin(ut*1.4)*.016;M.scale.set(Et,1,Et),X.rotation.x=Math.sin(ut*1.4+.3)*.013+Math.sin(j)*.008*_t,X.position.y=Math.sin(ut*1.4)*.009+Math.abs(Math.sin(j))*.018*_t,X.rotation.z=Math.sin(ut*.7)*.006,bt.rotation.x=.75+Math.sin(ut*1.2+.4)*.018+Math.sin(j)*.018*_t,V.rotation.z=.5+Math.sin(ut*1.1)*.02},gaitScale:3.8,gaitOffset:0}}function Ax(){const i=new wt,t=new wt;i.add(t);const e=new nt({color:O.burgundy,roughness:.82,metalness:.04}),n=new nt({color:O.maroon,roughness:.85,metalness:.04}),s=new nt({color:O.crimson,roughness:.8,metalness:.04}),o=new nt({color:O.gold,metalness:.92,roughness:.32,emissive:O.brass,emissiveIntensity:.35}),r=new nt({color:O.goldBright,metalness:.85,roughness:.28,emissive:O.goldBright,emissiveIntensity:.6}),a=new nt({color:O.crimson,roughness:.68,metalness:.05,emissive:O.maroon,emissiveIntensity:.12,side:fe}),c=new nt({color:O.skin,roughness:.64,metalness:0}),l=new nt({color:1445639,roughness:.5,metalness:.06}),h=(X,gt,pt,St,qt)=>{const Nt=new Z(X,gt);return Nt.position.set(pt||0,St||0,qt||0),t.add(Nt),Nt},d=h(new rt(.18,.6,1.03,18,1,!0),e,0,.535,0);d.rotation.y=Math.PI/20,h(new rt(.42,.635,.34,18,1,!0),n,0,.19,0);const p=h(new ei(.635,20),n,0,.02,0);p.rotation.x=-Math.PI/2,h(new rt(.64,.66,.11,18,1,!0),o,0,.075,0),h(new rt(.628,.645,.05,16,1,!0),r,0,.35,0),h(new rt(.45,.465,.05,16,1,!0),o,0,.55,0),h(new rt(.31,.32,.045,16,1,!0),r,0,.78,0);const f=h(new Ct(.05,.98,.02),o,0,.54,.44);f.rotation.x=-.12,h(new rt(.145,.19,.37,14,1,!0),s,0,1.235,0),h(new rt(.192,.196,.06,16,1,!0),o,0,1.055,0),h(new rt(.135,.155,.05,14,1,!0),r,0,1.4,0),h(new rt(.05,.055,.1,8),c,0,1.46,.005),h(new Bt(.115,11,7),c,0,1.615,.012).scale.set(.94,1.05,.98),h(new Bt(.128,11,6,0,Math.PI*2,0,Math.PI*.6),l,0,1.625,-.014).scale.set(1,1.02,1.03),h(new Bt(.045,6,3),l,-.095,1.575,-.02),h(new Bt(.045,6,3),l,.095,1.575,-.02),h(new Bt(.07,8,5),l,0,1.55,-.125).scale.set(1,.9,.85);const u=h(new rt(.032,.014,.3,8,1,!0),l,0,1.36,-.125);u.rotation.x=-.12;const M=h(new he(.055,.008,4,8),r,0,1.55,-.115);M.rotation.x=Math.PI/2.4,h(new ei(.011,8),s,0,1.645,.115),h(new Bt(.011,5,3),l,-.042,1.615,.108),h(new Bt(.011,5,3),l,.042,1.615,.108);const v=h(new Ct(.006,.11,.005),r,0,1.7,.088);v.rotation.x=-.32,h(new ae(.019,0),r,0,1.655,.108);const y=h(new he(.017,.005,4,8),r,.028,1.585,.108);y.rotation.y=.4;const A=X=>{h(new ae(.016,0),r,X,1.585,.03),h(new $t(.022,.045,8),o,X,1.545,.03).rotation.x=Math.PI};A(-.108),A(.108),h(new rt(.066,.07,.02,16,1,!0),r,0,1.44,.02).scale.set(1,1,.72);const T=h(new he(.085,.013,4,12),o,0,1.4,.028);T.rotation.x=Math.PI/2,T.scale.set(1,.72,1),h(new ae(.018,0),r,0,1.335,.14),h(new rt(.205,.205,.022,16,1,!0),r,0,1.03,0).scale.set(1,1,.9),h(new ae(.016,0),o,0,.99,.2);const U=(X,gt,pt,St,qt,Nt,P,Gt,Dt,It)=>{const bt=new I(X,gt,pt),Qt=new I(St,qt,Nt),Ft=new I().subVectors(Qt,bt),R=Ft.length(),w=new rt(Gt,P,R,It,1,!1),q=new Z(w,Dt);return q.position.copy(bt).addScaledVector(Ft,.5),q.quaternion.setFromUnitVectors(new I(0,1,0),Ft.normalize()),t.add(q),q};U(-.17,1.4,.02,-.215,1.23,.11,.05,.038,s,8),U(-.215,1.23,.11,-.13,1.155,.205,.036,.028,c,8),U(.17,1.4,.02,.215,1.23,.11,.05,.038,s,8),U(.215,1.23,.11,.13,1.155,.205,.036,.028,c,8);const x=new rt(.048,.048,.02,8,1,!0),S=X=>{for(let gt=0;gt<2;gt++){const pt=.16+gt*.028,St=new Z(x,gt%2?o:r);St.position.set(X,1.165-gt*.006,pt),St.rotation.x=Math.PI/2-.5,St.rotation.z=X<0?.5:-.5,t.add(St)}};S(-.128),S(.128),h(new Bt(.038,6,4),c,-.13,1.15,.21),h(new Bt(.038,6,4),c,.13,1.15,.21);const D=(X,gt,pt,St,qt)=>{const Nt=new be(X,gt,pt,St),P=Nt.attributes.position;for(let Gt=0;Gt<P.count;Gt++){const It=(P.getY(Gt)+gt/2)/gt;P.setZ(Gt,P.getZ(Gt)+Math.sin(It*Math.PI)*qt*-.5+(1-It)*qt)}return P.needsUpdate=!0,Nt.computeVertexNormals(),Nt};h(new Bt(.135,10,4,0,Math.PI*2,0,Math.PI*.42),a,0,1.63,-.01).scale.set(1.05,.85,1.08);const G=h(D(.48,.82,3,5,.11),a,0,1.32,-.15);G.rotation.x=.06;const Q=h(new be(.48,.05),r,0,.93,-.185);Q.rotation.x=.06;const W=h(D(.22,.6,2,4,.05),a,-.185,1.2,.05);W.rotation.set(0,.28,.14),h(new be(.22,.045),r,-.225,.91,.07).rotation.set(0,.28,.14);const F=new wt;t.add(F);const dt=[new nt({color:O.marigold,roughness:.6,emissive:O.marigoldDeep,emissiveIntensity:.3}),new nt({color:O.jasmine,roughness:.68,emissive:O.jasmine,emissiveIntensity:.18}),new nt({color:O.rose,roughness:.65}),new nt({color:O.saffron,roughness:.6,emissive:O.marigoldDeep,emissiveIntensity:.25})],et=new ae(.042,0),xt=9;for(let X=0;X<xt;X++){const gt=X/(xt-1),pt=new Z(et,dt[X%dt.length]);pt.position.set(-.145+.29*gt,1.15-.34*Math.sin(Math.PI*gt),.225+.03*Math.sin(Math.PI*gt)),pt.scale.setScalar(.9+Math.random()*.35),pt.rotation.set(Math.random(),Math.random(),Math.random()),F.add(pt)}const kt=new nt({color:O.leaf,roughness:.75,side:fe}),Xt=new be(.05,.09);[[-.15,1.15,.2,-.5],[.15,1.15,.2,.5]].forEach(X=>{const gt=new Z(Xt,kt);gt.position.set(X[0],X[1],X[2]),gt.rotation.z=X[3],F.add(gt)});const B=Math.random()*Math.PI*2;let K=0;return{group:i,update:X=>{const gt=X+B;t.rotation.z=Math.sin(gt*.7)*.018,t.rotation.y=Math.sin(gt*.42)*.035,t.rotation.x=K*.025+Math.sin(gt*.5)*.005,t.position.y=(Math.sin(gt*1.35)*.5+.5)*.01,G.rotation.z=Math.sin(gt*.9)*.02,W.rotation.z=.14+Math.sin(gt*1.1+.6)*.03,F.rotation.z=Math.sin(gt*.8+.4)*.03,F.rotation.x=Math.sin(gt*.7)*.006,F.position.y=K*.018+Math.sin(gt*1.2)*.004,F.position.z=K*.008},setArrival(X){K=Pe.clamp(X,0,1)}}}function Rx(){const i=new wt,t=new nt({color:8356488,roughness:.9,metalness:0}),e=new nt({color:7172213,roughness:.9,metalness:0}),n=new nt({color:O.ivory,roughness:.35,metalness:.05}),s=new nt({color:1708040,roughness:.4,metalness:0}),o=new nt({color:O.gold,metalness:.9,roughness:.3,emissive:O.brass,emissiveIntensity:.18}),r=new nt({color:O.goldBright,metalness:.6,roughness:.35,emissive:O.goldBright,emissiveIntensity:1.1}),a=new nt({color:O.burgundy,roughness:.85,metalness:0}),c=new nt({color:O.burgundyDeep,roughness:.85,metalness:0}),l=new nt({color:O.crimson,roughness:.3,metalness:.2,emissive:O.rose,emissiveIntensity:.5}),h=new wt;i.add(h);const d=new Z(new Bt(1,12,8),t);d.scale.set(1.4,1.15,2),d.position.set(0,1.95,-.2),d.castShadow=!0,h.add(d);const p=new Z(new Bt(1,8,6),t);p.scale.set(1.25,1.15,.9),p.position.set(0,1.9,-1.9),h.add(p);const f=new Z(new rt(.85,1.05,.9,10,1,!0),t);f.rotation.x=Math.PI/2.3,f.position.set(0,2.35,1.6),h.add(f);const g=new Z(new Bt(.85,10,8),t);g.scale.set(1,1.05,.95),g.position.set(0,2.5,2.4),g.castShadow=!0,h.add(g);const _=new Z(new Bt(.55,8,6),t);_.scale.set(1,.9,.7),_.position.set(0,2.95,2.55),h.add(_);const m=new Z(new Bt(.55,8,6),e);m.scale.set(.85,1,.8),m.position.set(0,2.25,2.95),h.add(m);for(const B of[-1,1]){const K=new Z(new Bt(.11,6,5),s);K.position.set(B*.5,2.55,2.85),h.add(K)}const u=[];for(const B of[-1,1]){const K=new wt;K.position.set(B*.72,2.65,2.15);const mt=new Z(new Bt(.72,8,6),t);mt.scale.set(.1,1.05,.85),mt.position.set(B*.08,-.15,-.35),K.add(mt);const X=new Z(new ao(.5,.62,10),o);X.scale.set(.85,1,1),X.rotation.y=Math.PI/2,X.position.set(B*.1,-.15,-.35),K.add(X),h.add(K),u.push({pivot:K,sx:B,base:B*.32}),K.rotation.y=B*.32}const M=new wt;M.position.set(0,2.15,3.05),M.rotation.x=-.35,h.add(M);const v=[];let y=M;const A=6,E=.36,T=[-.12,-.14,-.16,-.1,.2,.4];for(let B=0;B<A;B++){const K=new wt;K.position.y=B===0?0:-E;const mt=T[B];K.rotation.x=mt,y.add(K);const X=.3*(1-B*.12),gt=.3*(1-(B+1)*.12),pt=new Z(new rt(gt,X,E,6,1,!0),t);if(pt.position.y=-E/2,K.add(pt),B===2||B===4){const St=new Z(new rt(X+.03,X+.03,.06,6,1,!0),o);St.position.y=-.03,K.add(St)}v.push({seg:K,baseX:mt,i:B}),y=K}const C=new Z(new Bt(.11,6,5),e);C.position.y=-E,y.add(C);for(const B of[-1,1]){const K=new Z(new $t(.11,.95,6),n);K.rotation.set(1.15,0,B*.18),K.position.set(B*.34,2.05,3.1),h.add(K);const mt=new Z(new rt(.1,.12,.1,6),o);mt.rotation.set(1.15,0,B*.18),mt.position.set(B*.34,2.16,2.98),h.add(mt)}const U=[[.72,.95],[-.72,.95],[.72,-1.35],[-.72,-1.35]],x=[Math.PI/2,Math.PI*1.5,0,Math.PI],S=[];for(let B=0;B<U.length;B++){const[K,mt]=U[B],X=new wt;X.position.set(K,1.755,mt);const gt=new Z(new rt(.3,.38,1.75,8),t);gt.position.set(0,-.875,0),gt.castShadow=!0,X.add(gt);const pt=new wt;pt.position.y=-1.615,X.add(pt);const St=new Z(new rt(.42,.44,.28,8),e);pt.add(St);for(let Nt=-1;Nt<=1;Nt++){const P=new Z(new ae(.08,0),n);P.scale.set(1,.7,.6),P.position.set(Nt*.15,-.08,.38),pt.add(P)}const qt=new Z(new rt(.42,.42,.22,8,1,!0),o);if(qt.position.y=-1.335,X.add(qt),mt>0)for(let Nt=-1;Nt<=1;Nt++){const P=new Z(new ae(.08,0),r);P.position.set(Nt*.28,-1.475,.3),X.add(P)}i.add(X),S.push({hip:X,footGroup:pt,offset:x[B]})}const D=new wt;D.position.set(0,2.4,-2.55),D.rotation.x=.5,h.add(D);const z=new Z(new rt(.06,.09,1.5,5),e);z.position.y=-.75,D.add(z);const G=new Z(new $t(.14,.4,5),c);G.rotation.x=Math.PI,G.position.y=-1.55,D.add(G);const Q=new Z(new Ct(2,.1,2.7),a);Q.position.set(0,3,-.4),h.add(Q);for(const B of[-1,1]){const K=new Z(new Ct(.1,1.3,2.6),a);K.rotation.z=B*.12,K.position.set(B*1.4,2.25,-.4),h.add(K);const mt=new Z(new Ct(.12,.18,2.6),o);mt.rotation.z=B*.12,mt.position.set(B*1.52,1.62,-.4),h.add(mt);for(let pt=0;pt<5;pt++){const St=-1.4+pt*.5,qt=new Z(new $t(.05,.28,4),o);if(qt.rotation.x=Math.PI,qt.position.set(B*1.58,1.42,-.4+(St+.4)*.9),h.add(qt),pt%2===0){const Nt=new Z(new ae(.06,0),r);Nt.position.set(B*1.6,1.28,-.4+(St+.4)*.9),h.add(Nt)}}const X=new Z(new rt(.22,.22,.05,8),o);X.rotation.z=Math.PI/2,X.rotation.x=B*.12,X.position.set(B*1.47,2.3,-.2),h.add(X);const gt=new Z(new ae(.09,0),l);gt.position.set(B*1.52,2.3,-.2),h.add(gt)}const W=new Z(new Ct(.16,.14,2.7),o);W.position.set(0,3.07,-.4),h.add(W);const lt=new Z(new Ct(1.35,.4,1.5),c);lt.position.set(0,3.28,-.5),h.add(lt);for(const B of[.35,-1.35]){const K=new Z(new rt(.18,.18,1.4,8),o);K.rotation.z=Math.PI/2,K.position.set(0,3.4,B),h.add(K)}for(const B of[-.6,.6])for(const K of[.35,-1.35]){const mt=new Z(new ae(.11,0),r);mt.position.set(B,3.52,K),h.add(mt)}const F=new wt;F.position.set(0,2.95,2.75),F.rotation.x=-.35,h.add(F);const dt=new Z(new Ct(.95,.72,.08),a);F.add(dt);const et=new Z(new Ct(1.02,.8,.05),o);et.position.z=-.02,F.add(et);for(let B=-2;B<=2;B++){const K=new Z(new ae(.07,0),l);K.position.set(B*.18,.12,.06),F.add(K)}const xt=new Z(new Bt(.14,8,6),r);xt.scale.set(1,1,.6),xt.position.set(0,-.08,.08),F.add(xt);const kt=new Z(new $t(.09,.24,6),r);kt.rotation.x=Math.PI,kt.position.set(0,-.5,.05),F.add(kt);for(const B of[-1,1]){const K=new Z(new ao(.14,.24,8),o);K.position.set(B*.68,2.35,2.62),K.rotation.y=B*.5,h.add(K)}function Xt(B,K,mt={amount:0,phase:0}){const X=mt.amount||0,gt=mt.phase||0;for(const pt of S){const St=Math.sin(gt+pt.offset)*.16*X;pt.hip.rotation.x=St,pt.footGroup.rotation.x=-St*.78}h.position.x=Math.sin(B*.5)*.05+Math.sin(gt)*.025*X,h.position.y=Math.sin(B*1)*.02+Math.abs(Math.sin(gt))*.018*X,h.rotation.z=Math.sin(B*.5)*.012+Math.sin(gt)*.008*X;for(const pt of u)pt.pivot.rotation.y=pt.base+Math.sin(B*.9+pt.sx)*.18*pt.sx,pt.pivot.rotation.x=Math.sin(B*.9+pt.sx)*.05;for(const pt of v){const St=(pt.i+1)/A;pt.seg.rotation.z=Math.sin(B*.8+pt.i*.5)*.05*St,pt.seg.rotation.x=pt.baseX+Math.sin(B*.7+pt.i*.4)*.03*St+Math.sin(B*1.65+pt.i*.7)*.012*St}F.rotation.z=Math.sin(B*.65)*.018,D.rotation.z=Math.sin(B*.6)*.15}return{group:i,update:Xt,gaitScale:2.4,gaitOffset:0,bannerMount:h}}const Yt={skin:new nt({color:O.skin,roughness:.85,metalness:0}),white:new nt({color:O.ivory,roughness:.8,metalness:0}),cream:new nt({color:O.cream,roughness:.8,metalness:0}),burgundy:new nt({color:O.burgundy,roughness:.7,metalness:0,side:fe}),crimson:new nt({color:O.crimson,roughness:.7,metalness:0,side:fe}),gold:new nt({color:O.gold,roughness:.35,metalness:.9,emissive:O.goldBright,emissiveIntensity:.18}),brass:new nt({color:O.brass,roughness:.4,metalness:.85,emissive:O.marigold,emissiveIntensity:.12}),bronze:new nt({color:O.bronze,roughness:.6,metalness:.4}),marigold:new nt({color:O.marigold,roughness:.7,metalness:0,emissive:O.marigoldDeep,emissiveIntensity:.15}),jasmine:new nt({color:O.jasmine,roughness:.75,metalness:0}),leaf:new nt({color:O.leaf,roughness:.7,metalness:0})},Kt=(i,t)=>new Z(i,t);function Bh(i){const t=new wt,e=Kt(new rt(.045,.04,.42,6),Yt.white);e.position.y=-.21,t.add(e);const n=Kt(new he(.045,.014,3,6),Yt.gold);n.rotation.x=Math.PI/2,n.position.y=-.41,t.add(n);const s=Kt(new Bt(.05,5,3),Yt.skin);return s.position.y=-.45,t.add(s),t.position.set(i*.17,1.24,0),t}function zh(i){const t=new wt;t.position.set(i,.44,0);const e=Kt(new rt(.06,.05,.42,6),Yt.skin);e.position.y=-.21,t.add(e);const n=new wt;n.position.y=-.41;const s=Kt(new Ct(.09,.055,.17),Yt.bronze);return s.position.z=.03,n.add(s),t.add(n),{g:t,footPivot:n}}function Cx(){const i=new wt,t=Kt(new rt(.03,.035,1.9,6),Yt.bronze);t.position.y=2.05,i.add(t);const e=Kt(new Bt(.62,10,3,0,Math.PI*2,0,Math.PI/2),Yt.burgundy);e.position.y=2.9,i.add(e);const n=Kt(new he(.6,.045,3,8),Yt.gold);n.rotation.x=Math.PI/2,n.position.y=2.9,i.add(n);const s=Kt(new he(.63,.05,3,8),Yt.jasmine);s.rotation.x=Math.PI/2,s.position.y=2.84,i.add(s);const o=Kt(new $t(.05,.22,6),Yt.gold);o.position.y=3.28,i.add(o);const r=Kt(new ae(.055,0),Yt.gold);return r.position.y=3.14,i.add(r),{group:i,mode:"overhead"}}function Px(){const i=new wt,t=Kt(new he(.3,.05,4,10),Yt.marigold);i.add(t);for(let e=0;e<6;e++){const n=e/6*Math.PI*2,s=Kt(new ae(.06,0),e%2?Yt.jasmine:Yt.marigold);s.position.set(Math.cos(n)*.3,Math.sin(n)*.3,0),i.add(s)}return i.position.set(0,1.16,.34),i.rotation.x=.25,{group:i,mode:"hold"}}function Lx(){const i=new wt,t=Kt(new rt(.02,.02,.5,6),Yt.bronze);t.rotation.z=-.5,t.position.set(.12,.05,.28),i.add(t);const e=Kt(new rt(.006,.006,.16,4),Yt.brass);e.position.set(.32,-.05,.42),i.add(e);const n=Kt(new rt(.07,.07,.14,6,1,!0),Yt.brass);n.position.set(.32,-.2,.42),i.add(n);const s=Kt(new $t(.1,.09,6),Yt.brass);s.position.set(.32,-.09,.42),i.add(s);const o=Kt(new rt(.075,.06,.03,6),Yt.brass);o.position.set(.32,-.28,.42),i.add(o);const r=Yt.brass.clone();r.color.setHex(O.flame),r.emissive.setHex(O.emberGlow),r.emissiveIntensity=1.4,r.metalness=0,r.roughness=.4;const a=Kt(new ae(.05,0),r);return a.scale.y=1.5,a.position.set(.32,-.2,.42),i.add(a),i.position.set(-.18,1.62,.08),{group:i,mode:"raise-r",flame:a}}function Ix(){const i=new wt,t=Kt(new rt(.025,.03,2.4,6),Yt.bronze);t.position.y=1.2,i.add(t);const e=Kt(new $t(.06,.2,6),Yt.gold);e.position.y=2.5,i.add(e);const n=new td;n.moveTo(0,0),n.lineTo(.7,-.18),n.lineTo(0,-.5),n.lineTo(0,0);const s=Kt(new Qc(n),Yt.burgundy);s.position.set(.03,2.3,0),i.add(s);const o=Kt(new Ct(.03,.5,.02),Yt.gold);return o.position.set(.03,2.05,.005),i.add(o),i.position.set(.22,0,.05),{group:i,mode:"stave-r"}}function Dx(){const i=new wt,t=Kt(new rt(.16,.16,.34,10),Yt.bronze);t.rotation.z=Math.PI/2,i.add(t);const e=Kt(new he(.16,.025,3,10),Yt.cream);e.position.x=.17,i.add(e);const n=Kt(new he(.16,.025,3,10),Yt.cream);n.position.x=-.17,i.add(n);const s=Kt(new Ct(.04,.5,.02),Yt.crimson);return s.rotation.z=.9,s.position.y=.28,i.add(s),i.position.set(0,1,.26),{group:i,mode:"drum"}}function Ux(){const i=new wt,t=Kt(new rt(.018,.03,.34,6),Yt.bronze);i.add(t);const e=Kt(new $t(.07,.1,6,1,!0),Yt.brass);e.position.y=-.21,i.add(e);const n=Kt(new rt(.008,.012,.05,5),Yt.gold);return n.position.y=.19,i.add(n),i.position.set(.02,1.34,.2),i.rotation.x=.9,{group:i,mode:"play"}}function Nx(){const i=new wt,t=Kt(new rt(.022,.028,1.1,6),Yt.gold);t.rotation.x=Math.PI/2,t.position.z=.55,i.add(t);const e=Kt(new $t(.11,.16,8,1,!0),Yt.gold);e.rotation.x=-Math.PI/2,e.position.z=1.16,i.add(e);const n=Kt(new he(.03,.012,3,8),Yt.brass);return n.rotation.y=Math.PI/2,n.position.z=.35,i.add(n),i.position.set(0,1.32,.14),i.rotation.x=-.12,{group:i,mode:"play"}}function Fx(){const i=new wt,t=Kt(new rt(.018,.022,.34,6),Yt.gold);t.position.y=-.17,i.add(t);const e=Kt(new Bt(.035,6,4),Yt.gold);i.add(e);for(let n=0;n<5;n++){const s=(n-2)*.32,o=Kt(new $t(.035,.42,5),Yt.leaf);o.position.set(Math.sin(s)*.16,.2+Math.cos(s)*.05,0),o.rotation.z=-s,i.add(o);const r=Kt(new ae(.035,0),Yt.gold);r.position.set(Math.sin(s)*.28,.38+Math.cos(s)*.05,0),i.add(r)}return i.position.set(.18,1.62,.06),i.rotation.z=-.25,{group:i,mode:"raise-r"}}const kh={chhatri:Cx,garland:Px,lamp:Lx,flag:Ix,dhol:Dx,shehnai:Ux,turhi:Nx,morchhal:Fx};function Ox(i){switch(i){case"overhead":return{l:{x:-2.5,z:.35},r:{x:-2.5,z:-.35}};case"hold":return{l:{x:-1.35,z:.25},r:{x:-1.35,z:-.25}};case"raise-r":return{l:{x:.12,z:.1},r:{x:-2.2,z:-.2}};case"stave-r":return{l:{x:.12,z:.1},r:{x:-.55,z:-.42}};case"drum":return{l:{x:-.95,z:.55},r:{x:-.95,z:-.55}};case"play":return{l:{x:-1.7,z:.35},r:{x:-1.7,z:-.35}};default:return{l:{x:.12,z:.1},r:{x:.12,z:-.1}}}}function ud(i={}){const t=i.phase||0,e=kh[i.item]?i.item:"garland",n=new wt,s=zh(-.09),o=zh(.09);n.add(s.g,o.g);const r=Kt(new rt(.2,.28,.5,8),Yt.white);r.position.y=.62,n.add(r);const a=Kt(new rt(.15,.2,.5,8),Yt.white);a.position.y=1.1,n.add(a);const c=Kt(new he(.2,.03,3,8),Yt.gold);c.rotation.x=Math.PI/2,c.position.y=.87,n.add(c);const l=Kt(new Ct(.44,.13,.04),Yt.burgundy);l.rotation.z=.6,l.position.set(0,1.06,.19),n.add(l);const h=Kt(new he(.1,.025,3,8),Yt.gold);h.rotation.x=Math.PI/2,h.position.y=1.34,n.add(h);const d=Kt(new rt(.04,.045,.08,6),Yt.skin);d.position.y=1.39,n.add(d);const p=Kt(new Bt(.12,8,5),Yt.skin);p.position.y=1.53,n.add(p);const f=Kt(new $t(.02,.05,4),Yt.skin);f.rotation.x=Math.PI/2,f.position.set(0,1.52,.12),n.add(f);const g=Kt(new Bt(.135,8,5),Yt.white);g.scale.y=.8,g.position.y=1.63,n.add(g);const _=Kt(new he(.135,.035,3,8),Yt.burgundy);_.rotation.x=Math.PI/2+.15,_.position.y=1.6,n.add(_);const m=Kt(new $t(.03,.14,5),Yt.marigold);m.position.set(0,1.76,-.05),m.rotation.x=-.3,n.add(m);const u=Kt(new ae(.03,0),Yt.gold);u.position.set(0,1.62,.13),n.add(u);const M=Bh(1),v=Bh(-1);n.add(M),n.add(v);const{group:y,mode:A,flame:E}=kh[e]();n.add(y);const T=Ox(A);M.rotation.set(T.l.x,0,T.l.z),v.rotation.set(T.r.x,0,T.r.z);const C={x:T.l.x,z:T.l.z},U={x:T.r.x,z:T.r.z},x=A==="play"||A==="drum";function S(D,z,G={amount:0,phase:0}){const Q=Math.sin(D*2+t),W=G.amount||0,lt=Math.sin(G.phase||0)*.38*W;if(s.g.rotation.x=lt,o.g.rotation.x=-lt,s.footPivot.rotation.x=-lt*.78,o.footPivot.rotation.x=lt*.78,n.position.y=(Q*.5+.5)*.018+Math.abs(Math.sin(G.phase||0))*.026*W,A==="drum"){const F=Math.abs(Math.sin(D*7+t)),dt=Math.abs(Math.sin(D*7+t+1.2));M.rotation.x=C.x-F*.35,v.rotation.x=U.x-dt*.35}else M.rotation.x=C.x+Q*.05,v.rotation.x=U.x-Q*.05;n.rotation.z=x?Math.sin(D*1.6+t)*.045:0,E&&(E.material.emissiveIntensity=1.2+Math.sin(D*9+t)*.35,E.scale.x=1+Math.sin(D*11+t)*.12)}return{group:n,update:S,gaitScale:6,gaitOffset:t}}const dd=new nt({color:O.skin,roughness:.85,metalness:0}),Bx=new nt({color:O.skinDark,roughness:.85,metalness:0}),Gh=new nt({color:1708040,roughness:.8,metalness:0}),zx=new nt({color:O.bronze,roughness:.55,metalness:.3});new nt({color:O.cream,roughness:.8,metalness:0});const Xn=new nt({color:O.gold,roughness:.34,metalness:.9,emissive:O.goldBright,emissiveIntensity:.2}),Hh=new Map;function Dn(i,t=!1){const e=i+(t?"d":"");let n=Hh.get(e);return n||(n=new nt({color:i,roughness:.82,metalness:0,side:t?fe:In}),Hh.set(e,n)),n}const _e=(i,t)=>new Z(i,t),Yn={magenta:14037868,teal:829048,royal:3890139,emerald:627304,violet:7358696},Vh={armsUpM:{female:!1,cloth:O.saffron,legs:O.cream,turban:Yn.teal,sash:O.burgundy},bhangraM:{female:!1,cloth:Yn.royal,legs:O.cream,turban:Yn.magenta,sash:O.gold},clapM:{female:!1,cloth:Yn.emerald,legs:O.cream,turban:O.saffron,sash:O.burgundy},jumpM:{female:!1,cloth:O.marigoldDeep,legs:O.cream,turban:Yn.teal,sash:O.burgundy},spinF:{female:!0,choli:Yn.teal,lehenga:Yn.magenta,dupatta:O.burgundy},thumkaF:{female:!0,choli:Yn.emerald,lehenga:Yn.violet,dupatta:O.marigold}};function Wh(i,t){const e=new wt,n=_e(new rt(.05,.044,.34,6),t);n.position.y=-.17,e.add(n);const s=new wt;s.position.y=-.34,e.add(s);const o=_e(new rt(.042,.036,.3,6),t);o.position.y=-.15,s.add(o);const r=_e(new Bt(.052,6,4),dd);return r.position.y=-.32,s.add(r),e.position.set(i*.18,1.24,0),{g:e,elbow:s}}function Xh(i,t){const e=new wt,n=_e(new rt(.07,.06,.4,6),t);n.position.y=-.2,e.add(n);const s=new wt;s.position.y=-.42,e.add(s);const o=_e(new rt(.057,.05,.4,6),t);o.position.y=-.2,s.add(o);const r=_e(new Ct(.09,.055,.18),zx);return r.position.set(0,-.42,.045),s.add(r),e.position.set(i,.86,0),{g:e,knee:s}}function fd(i={}){const t=i.phase||0,e=Vh[i.variant]?i.variant:"armsUpM",n=Vh[e],s=new wt,o=new wt;s.add(o);const r=Math.random()<.5?dd:Bx,a=n.female?r:Dn(n.legs),c=Xh(-.09,a),l=Xh(.09,a);o.add(c.g,l.g);let h=null;if(n.female){const E=_e(new rt(.15,.17,.28,8),Dn(n.choli));E.position.y=1.12,o.add(E);const T=_e(new rt(.14,.15,.16,6),r);T.position.y=.94,o.add(T);const C=_e(new he(.15,.02,3,8),Xn);C.rotation.x=Math.PI/2,C.position.y=.99,o.add(C),h=new wt,h.position.y=.9;const U=_e(new $t(.56,.78,12,1,!0),Dn(n.lehenga,!0));U.position.y=-.39,h.add(U);const x=_e(new he(.55,.03,3,12),Xn);x.rotation.x=Math.PI/2,x.position.y=-.78,h.add(x),o.add(h)}else{const E=Dn(n.cloth),T=_e(new rt(.16,.19,.5,8),E);T.position.y=1.06,o.add(T);const C=_e(new rt(.19,.26,.34,8),E);C.position.y=.72,o.add(C);const U=_e(new he(.255,.02,3,8),Xn);U.rotation.x=Math.PI/2,U.position.y=.56,o.add(U);const x=_e(new Ct(.03,.5,.03),Xn);x.position.set(0,1.06,.185),o.add(x);const S=_e(new Ct(.42,.12,.04),Dn(n.sash));S.rotation.z=.62,S.position.set(0,1.05,.18),o.add(S)}const d=_e(new rt(.04,.045,.08,6),r);d.position.y=1.38,o.add(d);const p=_e(new Bt(.115,8,6),r);p.position.y=1.52,o.add(p);const f=_e(new $t(.02,.05,4),r);if(f.rotation.x=Math.PI/2,f.position.set(0,1.51,.11),o.add(f),n.female){const E=_e(new Bt(.12,8,5),Gh);E.scale.set(1,1,.7),E.position.set(0,1.53,-.03),o.add(E);const T=_e(new Bt(.06,6,4),Gh);T.position.set(0,1.46,-.14),o.add(T);const C=_e(new Bt(.15,8,4,0,Math.PI*2,0,Math.PI/2),Dn(n.dupatta,!0));C.scale.set(1,.85,1),C.position.set(0,1.55,-.02),o.add(C);const U=_e(new ae(.022,0),Xn);U.position.set(0,1.6,.05),o.add(U)}else{const E=_e(new Bt(.135,8,5),Dn(n.turban));E.scale.y=.82,E.position.y=1.62,o.add(E);const T=_e(new he(.135,.032,3,8),Xn);T.rotation.x=Math.PI/2+.14,T.position.y=1.59,o.add(T);const C=_e(new $t(.03,.15,5),Dn(n.sash||O.marigold));C.position.set(0,1.76,-.04),C.rotation.x=-.35,o.add(C);const U=_e(new ae(.028,0),Xn);U.position.set(0,1.61,.12),o.add(U)}const g=n.female?Dn(n.choli):Dn(n.cloth),_=Wh(1,g),m=Wh(-1,g);o.add(_.g,m.g);const u=new he(.045,.012,3,6),M=_e(u,Xn);M.rotation.x=Math.PI/2,M.position.y=-.28,_.elbow.add(M);const v=_e(u,Xn);v.rotation.x=Math.PI/2,v.position.y=-.28,m.elbow.add(v);const y=(E,T,C,U=0,x=0)=>{E.g.rotation.set(T,0,C),E.elbow.rotation.set(U,0,x)};function A(E,T,C={amount:0,phase:0}){const U=E+t;if(c.g.rotation.x=0,l.g.rotation.x=0,c.knee.rotation.x=0,l.knee.rotation.x=0,e==="bhangraM"){const D=Math.sin(U*3),z=(D+1)*.5;o.position.set(0,Math.abs(D)*.1+.02,0),o.rotation.set(0,D*.4,0);const G=-2.85,Q=-1.35;y(m,Q+(G-Q)*z,-.3-.6*(1-z),-.2,0),y(_,G+(Q-G)*z,.3+.6*z,-.2,0),l.g.rotation.x=-.7*(1-z),c.g.rotation.x=-.7*z,l.knee.rotation.x=-.4*(1-z),c.knee.rotation.x=-.4*z}else if(e==="clapM"){const D=Math.sin(U*2.4);o.position.set(D*.13,Math.abs(Math.sin(U*4.8))*.05,0),o.rotation.set(0,0,D*.07);const G=.12+(Math.sin(U*7)*.5+.5)*.42;y(_,-2.95,G,-.15,0),y(m,-2.95,-G,-.15,0),c.g.rotation.x=Math.max(0,D)*.35,l.g.rotation.x=Math.max(0,-D)*.35}else if(e==="jumpM"){const D=Math.abs(Math.sin(U*2.5)),z=Math.pow(D,.65);o.position.set(0,z*.42,0),o.rotation.set(0,0,Math.sin(U*2.5)*.05);const G=Math.sin(U*9)*.18;y(_,-2.9+G,.3,-.2*z,0),y(m,-2.9-G,-.3,-.2*z,0),c.g.rotation.x=-.25*D,l.g.rotation.x=-.25*D,c.knee.rotation.x=-1*D,l.knee.rotation.x=-1*D}else if(e==="spinF"){o.rotation.set(0,U*3.4,.05),o.position.set(0,.02+Math.abs(Math.sin(U*6))*.03,0);const D=1.28+Math.sin(U*6)*.08;h&&h.scale.set(D,1,D);const z=Math.sin(U*4)*.12;y(_,-1.5,.75+z,-.35,0),y(m,-1.5,-.75-z,-.35,0)}else if(e==="thumkaF"){const D=Math.sin(U*2.6);o.position.set(D*.07,Math.abs(Math.sin(U*5.2))*.04,0),o.rotation.set(0,0,D*.12),h&&(h.rotation.z=-D*.16),y(m,-2.65,-.22+Math.sin(U*5)*.12,0,Math.sin(U*8)*.4),y(_,-.7,.95,-1.5,0),c.knee.rotation.x=-Math.abs(D)*.12,l.knee.rotation.x=-Math.abs(D)*.12}else{const D=Math.abs(Math.sin(U*3.2)),z=Math.sin(U*6);o.position.set(0,D*.2,0),o.rotation.set(0,0,Math.sin(U*3.2)*.05),y(_,-2.8+z*.18,.32+z*.15,0,Math.sin(U*10)*.5),y(m,-2.8-z*.18,-.32-z*.15,0,-Math.sin(U*10)*.5),c.knee.rotation.x=-D*.28,l.knee.rotation.x=-D*.28}const x=C.amount||0,S=Math.sin(C.phase||0)*.24*x;c.g.rotation.x+=S,l.g.rotation.x-=S,o.position.y+=Math.abs(Math.sin(C.phase||0))*.025*x}return A(0),{group:s,update:A,gaitScale:6,gaitOffset:t}}const re={legM:new rt(.055,.062,.5,6),shoe:new Ct(.09,.05,.17),coat:new rt(.155,.24,.62,8,1,!0),coatHem:new rt(.245,.258,.06,8,1,!0),torso:new rt(.14,.18,.4,8),skirt:new rt(.13,.5,.9,10,1,!0),skirtHem:new ei(.5,10),skirtBand:new rt(.5,.52,.07,10,1,!0),waistBand:new rt(.185,.19,.05,10,1,!0),neck:new rt(.04,.045,.08,6,1,!0),head:new Bt(.108,7,5),nose:new $t(.02,.05,4),turban:new Bt(.135,8,5,0,Math.PI*2,0,Math.PI*.62),turbanBnd:new he(.135,.032,3,8),plume:new $t(.03,.13,5),jewel:new ae(.028,0),hairCap:new Bt(.118,8,5,0,Math.PI*2,0,Math.PI*.6),sideHair:new Bt(.05,5,4),braid:new rt(.032,.016,.3,6),bindi:new ei(.012,6),earring:new ae(.018,0),necklace:new he(.07,.012,3,8),upper:new rt(.05,.044,.26,6,1,!0),fore:new rt(.044,.038,.24,6,1,!0),hand:new Bt(.048,5,4),cuff:new rt(.05,.05,.025,6,1,!0),sash:new Ct(.42,.12,.03),dupatta:new be(.34,.62),dupTrim:new be(.34,.04),petal:new be(.03,.045)},we=(i,t=.82,e=.04,n)=>new nt(Object.assign({color:i,roughness:t,metalness:e},n)),ce={skin:we(O.skin,.78,0),hair:we(1708296,.6,.05),cream:we(O.cream,.85,0),bronze:we(O.bronze,.6,.35),ivory:we(O.ivory,.72,.03,{side:fe}),gold:we(O.gold,.34,.9,{emissive:O.brass,emissiveIntensity:.3}),goldB:we(O.goldBright,.3,.85,{emissive:O.gold,emissiveIntensity:.5}),burg:we(O.burgundy,.82,.04),marigold:we(O.marigold,.6,0,{emissive:O.marigoldDeep,emissiveIntensity:.25}),petalA:we(O.marigold,.55,0,{emissive:O.marigoldDeep,emissiveIntensity:.35,side:fe}),petalB:we(O.rose,.6,0,{emissive:O.crimson,emissiveIntensity:.2,side:fe})},kx=[we(3890139,.8,.05),we(627304,.8,.05),we(O.crimson,.8,.05),we(829048,.8,.05),we(7358696,.8,.05),we(O.marigoldDeep,.8,.05)],Gx=[we(14037868,.82,.04),we(627304,.82,.04),we(3890139,.82,.04),we(O.crimson,.82,.04),we(7358696,.82,.04),we(O.marigold,.82,.04)],Yh=i=>i[Math.random()*i.length|0];function qh(i,t){const e=new wt;e.position.set(i*.15,1.3,0);const n=new Z(re.upper,t);n.position.y=-.13,e.add(n);const s=new wt;s.position.y=-.26,e.add(s);const o=new Z(re.fore,ce.skin);o.position.y=-.12,s.add(o);const r=new Z(re.cuff,ce.gold);r.position.y=-.225,s.add(r);const a=new Z(re.hand,ce.skin);return a.position.y=-.25,s.add(a),{shoulder:e,fore:s,hand:a}}function il(i={}){const t=i.phase||0,e={clapping:1,namaste:1,cheering:1,showering:1,throwing:1}[i.variant]?i.variant:"clapping",n=typeof i.gender=="string"?i.gender==="female":Math.random()<.5,s=new wt,o=new wt;s.add(o);const r=(v,y,A,E,T,C)=>{const U=new Z(v,y);return U.position.set(A,E,T),(C||o).add(U),U},a=Yh(n?Gx:kx),c=[];if(n){const v=r(re.skirt,a,0,.47,0);v.rotation.y=Math.PI/12;const y=r(re.skirtHem,ce.burg,0,.02,0);y.rotation.x=-Math.PI/2,r(re.skirtBand,ce.gold,0,.06,0),r(re.waistBand,ce.goldB,0,.94,0)}else{for(const v of[-.085,.085]){const y=new wt;y.position.set(v,.52,0),o.add(y),r(re.legM,ce.cream,0,-.25,0,y);const A=new wt;A.position.y=-.49,y.add(A),r(re.shoe,ce.bronze,0,0,.03,A),c.push({hip:y,foot:A})}r(re.coat,a,0,.7,0),r(re.coatHem,ce.gold,0,.42,0)}r(re.torso,a,0,1.16,0);const l=r(new he(.1,.02,3,8),ce.goldB,0,1.34,0);if(l.rotation.x=Math.PI/2,n)r(re.dupatta,ce.ivory,-.14,1.12,-.02).rotation.set(.12,.32,.14),r(re.dupTrim,ce.goldB,-.14,.83,-.02).rotation.set(.12,.32,.14),r(re.necklace,ce.gold,0,1.33,.04).rotation.x=Math.PI/2;else{const v=r(re.sash,ce.burg,0,1.12,.17);v.rotation.z=.6,r(new rt(.185,.185,.05,8,1,!0),ce.gold,0,.98,0)}r(re.neck,ce.skin,0,1.4,.004),r(re.head,ce.skin,0,1.51,.008).scale.set(.96,1.05,.98);const d=r(re.nose,ce.skin,0,1.5,.1);if(d.rotation.x=Math.PI/2,n){r(re.hairCap,ce.hair,0,1.52,-.012).scale.set(1,1.04,1.02),r(re.sideHair,ce.hair,-.082,1.47,-.02),r(re.sideHair,ce.hair,.082,1.47,-.02);const y=r(re.braid,ce.hair,0,1.3,-.1);y.rotation.x=-.15,r(re.bindi,ce.goldB,0,1.535,.098),r(re.earring,ce.goldB,-.098,1.46,.03),r(re.earring,ce.goldB,.098,1.46,.03),r(re.jewel,ce.goldB,0,1.6,.06).scale.setScalar(.6)}else{const v=r(re.turban,a,0,1.6,-.005);v.scale.y=.82;const y=r(re.turbanBnd,ce.burg,0,1.58,0);y.rotation.x=Math.PI/2+.16;const A=r(re.plume,ce.marigold,0,1.77,-.04);A.rotation.x=-.35,r(re.jewel,ce.goldB,0,1.6,.12)}const p=a,f=qh(-1,p),g=qh(1,p);if(o.add(f.shoulder,g.shoulder),n){const v=new Z(re.cuff,ce.goldB);v.position.y=-.19,f.fore.add(v);const y=new Z(re.cuff,ce.goldB);y.position.y=-.19,g.fore.add(y)}let _=null;if(e==="showering"){_=[];const v=new wt;o.add(v);for(let y=0;y<8;y++){const A=new Z(re.petal,y%2?ce.petalA:ce.petalB),E=(Math.random()-.5)*.34,T=.28+Math.random()*.14,C=1.55+Math.random()*.15;A.position.set(E,C,T),v.add(A),_.push({m:A,x0:E,y0:C,z0:T,sp:.25+Math.random()*.2,ph:Math.random()})}}let m=e==="throwing"?0:1,u=m;Kh(e,f,g,0,t,u);function M(v,y,A={amount:0,phase:0}){o.position.y=(Math.sin(v*2.2+t)*.5+.5)*.02,o.position.x=0,o.position.z=0,o.rotation.set(0,0,0);const E=1-Math.exp(-7*Math.max(y||.016,.001));if(u=Pe.lerp(u,m,E),Kh(e,f,g,v,t,u),e==="namaste")o.rotation.x=.05+(Math.sin(v*.8+t)*.5+.5)*.06,o.rotation.y=Math.sin(v*.5+t)*.03;else if(e==="cheering")o.rotation.z=Math.sin(v*2+t)*.05,o.position.x=Math.sin(v*2+t)*.03;else if(e==="clapping")o.position.y+=(Math.sin(v*4+t)*.5+.5)*.012;else if(e==="showering"){o.rotation.y=Math.sin(v*1.2+t)*.05;for(const U of _){const x=(v*U.sp+U.ph)%1;U.m.position.set(U.x0+Math.sin(x*6+U.ph*6)*.06,U.y0-x*.75,U.z0+x*.28),U.m.rotation.set(x*7,x*5+U.ph,U.ph*3)}}else e==="throwing"&&(o.rotation.y=Math.sin(v*3.35+t)*.08*u,o.rotation.z=-Math.max(0,Math.sin(v*3.35+t))*.055*u);const T=A.amount||0,C=Math.sin(A.phase||0)*.34*T;c.length?(c[0].hip.rotation.x=C,c[1].hip.rotation.x=-C,c[0].foot.rotation.x=-C*.78,c[1].foot.rotation.x=C*.78):o.rotation.z+=Math.sin(A.phase||0)*.028*T,o.position.y+=Math.abs(Math.sin(A.phase||0))*.022*T}return{group:s,update:M,gaitScale:6,gaitOffset:t,throwHand:g.hand,setCelebrating:v=>{m=v?1:0}}}function Kh(i,t,e,n,s,o=1){if(i==="namaste")t.shoulder.rotation.set(-.9,0,.52),e.shoulder.rotation.set(-.9,0,-.52),t.fore.rotation.x=-1.15,e.fore.rotation.x=-1.15;else if(i==="clapping"){const a=.36+Math.sin(n*4+s)*.13;t.shoulder.rotation.set(-1.12,0,a),e.shoulder.rotation.set(-1.12,0,-a),t.fore.rotation.x=-.72,e.fore.rotation.x=-.72}else if(i==="cheering"){const r=Math.sin(n*6+s);e.shoulder.rotation.set(-2.5+r*.14,0,-.2+r*.36),e.fore.rotation.x=-.2+r*.1,t.shoulder.rotation.set(-.12,0,.16+Math.sin(n*2+s)*.05),t.fore.rotation.x=-.45}else if(i==="throwing"){const a=(Math.sin(n*3.35+s)*.5+.5)*o;t.shoulder.rotation.set(-1.12,0,.34),t.fore.rotation.x=-.92,e.shoulder.rotation.set(-.92-a*1.62,0,-.12-a*.24),e.fore.rotation.x=-.8+a*.68}else{const r=Math.sin(n*3+s),a=Math.sin(n*3+s+1.1);t.shoulder.rotation.set(-1.7+r*.28,0,.16),e.shoulder.rotation.set(-1.7+a*.28,0,-.16),t.fore.rotation.x=-.35-r*.18,e.fore.rotation.x=-.35-a*.18}}function sl(){return new nt({color:O.brass,metalness:.9,roughness:.35})}function Hx(){return new nt({color:O.gold,metalness:.85,roughness:.3})}function pd(){const i=new wt,t=[new at(0,0),new at(.06,0),new at(.078,.055),new at(.062,.058),new at(.045,.022),new at(0,.02)],e=new Z(new io(t,12),sl());i.add(e);const n=[new at(0,0),new at(.02,.018),new at(.033,.045),new at(.026,.08),new at(.011,.115),new at(0,.15)],s=new Z(new io(n,8),new nt({color:O.flame,emissive:O.flame,emissiveIntensity:1.3,roughness:.6,metalness:0}));return s.position.y=.03,i.add(s),i}function Vx(){const i=new wt,t=Hx(),e=new Z(new rt(.15,.17,.34,6,1,!0),new nt({color:O.marigold,emissive:O.marigoldDeep,emissiveIntensity:.3,transparent:!0,opacity:.5,roughness:.5,metalness:.1,side:fe}));e.position.y=.21,i.add(e);const n=new nt({color:O.jasmine,emissive:O.flame,emissiveIntensity:1.1,roughness:.5,metalness:0}),s=new Z(new ae(.06,0),n);s.position.y=.21,i.add(s);const o=new rt(.19,.19,.03,6),r=new Z(o,t);r.position.y=.045,i.add(r);const a=new Z(o,t);a.position.y=.37,i.add(a);const c=new Ct(.015,.34,.015);for(let f=0;f<6;f++){const g=f/6*Math.PI*2,_=new Z(c,t);_.position.set(Math.cos(g)*.165,.21,Math.sin(g)*.165),i.add(_)}const l=new Z(new $t(.2,.13,6),t);l.position.y=.44,i.add(l);const h=new Z(new ae(.035,0),t);h.position.y=.52,i.add(h);const d=new Z(new he(.035,.012,4,10),t);return d.position.y=.56,i.add(d),{group:i,update:f=>{n.emissiveIntensity=1.1+Math.sin(f*9)*.15+Math.sin(f*23)*.06}}}function Wx(i=3,t="mixed"){const e=new wt,n=new nt({color:O.marigold,emissive:O.marigoldDeep,emissiveIntensity:.25,roughness:.7,metalness:0}),s=new nt({color:O.marigoldDeep,roughness:.75,metalness:0}),o=new nt({color:O.jasmine,emissive:O.jasmine,emissiveIntensity:.12,roughness:.75,metalness:0});let r;t==="marigold"?r=[n,s]:t==="jasmine"?r=[o,o]:r=[n,o];const a=i*.12,c=Math.min(18,Math.max(6,Math.round(i/.18))),l=new ae(.05,0);for(let h=0;h<c;h++){const d=c===1?0:h/(c-1)*2-1,p=d*(i/2),f=-a*(1-d*d),g=new Z(l,r[h%r.length]);g.position.set(p,f,0);const _=.85+Math.random()*.4;g.scale.setScalar(_),g.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,0),e.add(g)}return e}function Xx(){const i=new wt,t=[new at(0,0),new at(.07,0),new at(.11,.1),new at(.095,.2),new at(.055,.255),new at(.085,.3),new at(.062,.305),new at(.045,.27),new at(0,.26)],e=new Z(new io(t,12),sl());i.add(e);const n=new nt({color:O.leaf,roughness:.65,metalness:0}),s=new $t(.05,.2,4),o=6;for(let c=0;c<o;c++){const l=c/o*Math.PI*2,h=new Z(s,n);h.scale.set(1,1,.35),h.position.set(Math.cos(l)*.075,.33,Math.sin(l)*.075),h.rotation.y=-l,h.rotation.z=Math.cos(l)*.5,h.rotation.x=Math.sin(l)*.5,i.add(h)}const r=new Z(new Bt(.075,10,7),new nt({color:O.bronze,roughness:.85,metalness:0}));r.position.y=.35,i.add(r);const a=new Z(new he(.072,.008,4,12),new nt({color:O.crimson,roughness:.8,metalness:0}));return a.rotation.x=Math.PI/2,a.position.y=.235,i.add(a),i}function ol(){const i=new wt,t=new Z(new rt(.2,.19,.025,12),sl());t.position.y=.0125,i.add(t);const e=[new nt({color:O.marigold,emissive:O.marigoldDeep,emissiveIntensity:.2,roughness:.7,metalness:0,side:fe}),new nt({color:O.saffron,roughness:.7,metalness:0,side:fe}),new nt({color:O.jasmine,roughness:.75,metalness:0,side:fe})],n=new ei(.03,6),s=24;for(let o=0;o<s;o++){const r=new Z(n,e[o%e.length]),a=Math.sqrt(Math.random())*.17,c=Math.random()*Math.PI*2;r.position.set(Math.cos(c)*a,.026+Math.random()*.03,Math.sin(c)*a),r.rotation.x=-Math.PI/2+(Math.random()-.5)*.8,r.rotation.z=Math.random()*Math.PI*2,r.scale.setScalar(.7+Math.random()*.6),i.add(r)}return i}function mn(i){return"#"+i.toString(16).padStart(6,"0")}function Yx(i,t,e){const n=i+t*2,s=256,o=64,r=document.createElement("canvas");r.width=s,r.height=o;const a=r.getContext("2d"),c=document.createElement("canvas");c.width=s,c.height=o;const l=c.getContext("2d"),h=t/n,d=h+e/n,p=1-d,f=1-h;l.fillStyle="#000",l.fillRect(0,0,s,o);for(let v=0;v<s;v++){const y=v/s;let A,E=null;y<h||y>f?A=mn(O.cream):y<d||y>p?(A=mn(O.gold),E=mn(O.goldBright)):A=mn(O.burgundy),a.fillStyle=A,a.fillRect(v,0,1,o),E&&(l.fillStyle=E,l.fillRect(v,0,1,o))}const g=Math.floor(s*(d+.02)),_=Math.floor(s*(p-.02));for(let v=0;v<o;v++){const y=v%6<3?"rgba(0,0,0,0.06)":"rgba(255,255,255,0.03)";a.fillStyle=y,a.fillRect(g,v,_-g,1)}a.fillStyle=mn(O.goldBright);const m=s*.5;for(let v=4;v<o;v+=16)a.beginPath(),a.moveTo(m,v),a.lineTo(m+5,v+5),a.lineTo(m,v+10),a.lineTo(m-5,v+5),a.closePath(),a.fill();const u=new Fi(r);u.wrapS=Zn,u.wrapT=Ui,u.anisotropy=4;const M=new Fi(c);return M.wrapS=Zn,M.wrapT=Ui,{map:u,emap:M}}function qx(i,t){const e=[];if(!i||i.length<2)return e;e.push({x:i[0][0],z:i[0][1]});let n=0;for(let o=0;o<i.length-1;o++){const r=i[o][0],a=i[o][1],c=i[o+1][0],l=i[o+1][1],h=c-r,d=l-a,p=Math.hypot(h,d);if(p<1e-5)continue;const f=h/p,g=d/p;let _=t-n;for(;_<p;)e.push({x:r+f*_,z:a+g*_}),_+=t;n=p-(_-t)}const s=i[i.length-1];return e.push({x:s[0],z:s[1]}),e}function Kx(i){const t=new wt,e=i.points||[],n=i.width,s=i.getHeight||(()=>0),o=n*.16,r=n*.05,a=n*.5+o,c=qx(e,1.5);if(c.length<2)return t;const l=c.length,h=9,d=i.lift,p=new Float32Array(l*h*3),f=new Float32Array(l*h*2),g=[],_=3;let m=0;for(let E=0;E<l;E++){const T=c[E],C=c[Math.max(0,E-1)],U=c[Math.min(l-1,E+1)];let x=U.x-C.x,S=U.z-C.z;const D=Math.hypot(x,S)||1;x/=D,S/=D;const z=-S,G=x;E>0&&(m+=Math.hypot(T.x-c[E-1].x,T.z-c[E-1].z));for(let Q=0;Q<h;Q++){const W=Q/(h-1),lt=(W-.5)*2*a,F=T.x+z*lt,dt=T.z+G*lt,et=s(F,dt)+d,xt=(E*h+Q)*3;p[xt]=F,p[xt+1]=et,p[xt+2]=dt;const kt=(E*h+Q)*2;f[kt]=W,f[kt+1]=m/_}if(E<l-1)for(let Q=0;Q<h-1;Q++){const W=E*h+Q,lt=W+1,F=(E+1)*h+Q,dt=F+1;g.push(W,F,lt,lt,F,dt)}}const u=new Be;u.setAttribute("position",new en(p,3)),u.setAttribute("uv",new en(f,2)),u.setIndex(g),u.computeVertexNormals();const{map:M,emap:v}=Yx(n,o,r),y=new nt({map:M,emissiveMap:v,emissive:O.goldBright,emissiveIntensity:.45,roughness:.82,metalness:0,side:fe,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}),A=new Z(u,y);return A.receiveShadow=!0,t.add(A),t}function Zx(){const t=document.createElement("canvas");t.width=512,t.height=512;const e=t.getContext("2d"),n=512/2,s=mn(O.burgundy),o=mn(O.gold),r=mn(O.goldBright),a=mn(O.jasmine),c=mn(O.marigold),l=mn(O.saffron);e.fillStyle=mn(O.cream),e.beginPath(),e.arc(n,n,512*.5,0,Math.PI*2),e.fill(),e.fillStyle=s,e.beginPath(),e.arc(n,n,512*.48,0,Math.PI*2),e.fill();const h=(m,u,M)=>{e.strokeStyle=M,e.lineWidth=u,e.beginPath(),e.arc(n,n,m,0,Math.PI*2),e.stroke()};h(512*.46,6,r),h(512*.44,3,a),h(512*.3,5,o),h(512*.2,3,a);const d=(m,u,M,v,y,A)=>{for(let E=0;E<m;E++){const T=E/m*Math.PI*2,C=n+Math.cos(T)*(u+M)*.5,U=n+Math.sin(T)*(u+M)*.5;e.save(),e.translate(C,U),e.rotate(T+Math.PI/2),e.fillStyle=y,e.strokeStyle=A,e.lineWidth=2,e.beginPath(),e.ellipse(0,0,v,(M-u)*.5,0,0,Math.PI*2),e.fill(),e.stroke(),e.restore()}};d(24,512*.3,512*.44,512*.028,c,r),d(16,512*.2,512*.3,512*.03,a,o),d(12,512*.08,512*.2,512*.034,l,r),e.fillStyle=o,e.beginPath(),e.arc(n,n,512*.08,0,Math.PI*2),e.fill(),e.fillStyle=s,e.beginPath(),e.arc(n,n,512*.05,0,Math.PI*2),e.fill(),e.fillStyle=r,e.beginPath(),e.arc(n,n,512*.02,0,Math.PI*2),e.fill(),e.strokeStyle=r,e.lineWidth=2;for(let m=0;m<24;m++){const u=m/24*Math.PI*2;e.beginPath(),e.moveTo(n+Math.cos(u)*512*.08,n+Math.sin(u)*512*.08),e.lineTo(n+Math.cos(u)*512*.2,n+Math.sin(u)*512*.2),e.stroke()}const p=document.createElement("canvas");p.width=512,p.height=512;const f=p.getContext("2d");f.fillStyle="#000",f.fillRect(0,0,512,512),f.strokeStyle=r,f.fillStyle=r,f.lineWidth=6,f.beginPath(),f.arc(n,n,512*.46,0,Math.PI*2),f.stroke(),f.lineWidth=5,f.beginPath(),f.arc(n,n,512*.3,0,Math.PI*2),f.stroke(),f.beginPath(),f.arc(n,n,512*.02,0,Math.PI*2),f.fill(),f.lineWidth=2;for(let m=0;m<24;m++){const u=m/24*Math.PI*2;f.beginPath(),f.moveTo(n+Math.cos(u)*512*.08,n+Math.sin(u)*512*.08),f.lineTo(n+Math.cos(u)*512*.2,n+Math.sin(u)*512*.2),f.stroke()}const g=new Fi(t),_=new Fi(p);return{map:g,emap:_}}function md(i){const t=new wt,e=i||3,n=new ei(e,48),{map:s,emap:o}=Zx(),r=new nt({map:s,emissiveMap:o,emissive:O.goldBright,emissiveIntensity:.6,roughness:.7,metalness:.15,side:fe,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}),a=new Z(n,r);return a.rotation.x=-Math.PI/2,a.position.y=.05,a.receiveShadow=!0,t.add(a),t}const Aa=new Zt;function jx(i){let t=0;for(let n=0;n<i.length;n++)t+=i[n][1];let e=Math.random()*t;for(let n=0;n<i.length;n++)if(e-=i[n][1],e<=0)return i[n][0];return i[i.length-1][0]}function Jx(i={}){const t=i.area||{cx:0,cz:0,radius:24},e=t.cx||0,n=t.cz||0,s=t.radius||24,o=i.top!=null?i.top:14,r=typeof i.getHeight=="function"?i.getHeight:()=>0,a=70,c=new be(.16,.24,2,1);{const F=c.attributes.position,dt=.08;for(let et=0;et<F.count;et++){const xt=F.getX(et),kt=F.getY(et),Xt=xt/dt,B=.05*(1-Xt*Xt),K=1-.35*Math.max(0,kt/.12);F.setX(et,xt*K),F.setZ(et,B)}F.needsUpdate=!0,c.computeVertexNormals()}const l=new nt({color:16777215,roughness:.62,metalness:0,side:fe,emissive:new Zt(O.marigold),emissiveIntensity:.18}),h=new fo(c,l,a);h.instanceMatrix.setUsage(Wc),h.frustumCulled=!1;const d=[[O.marigold,4],[O.marigoldDeep,2.5],[O.saffron,2],[O.rose,2.5],[O.jasmine,2],[O.goldBright,1.5],[O.gold,1]],p=new Float32Array(a),f=new Float32Array(a),g=new Float32Array(a),_=new Float32Array(a),m=new Float32Array(a),u=new Float32Array(a),M=new Float32Array(a),v=new Float32Array(a),y=new Float32Array(a),A=new Float32Array(a),E=new Float32Array(a),T=new Float32Array(a),C=new Float32Array(a),U=new Float32Array(a),x=new Float32Array(a),S=new Float32Array(a),D=new Float32Array(a);function z(F){const dt=Math.random()*Math.PI*2,et=Math.sqrt(Math.random())*s;p[F]=e+Math.cos(dt)*et,f[F]=n+Math.sin(dt)*et}const G=new Ae;for(let F=0;F<a;F++){z(F);const dt=r(p[F],f[F]);g[F]=dt+Math.random()*(o-dt+2),_[F]=.24+Math.random()*.4,m[F]=.5+Math.random()*.9,u[F]=Math.random()*Math.PI*2,M[F]=.25+Math.random()*.5,v[F]=.4+Math.random()*.8,y[F]=Math.random()*Math.PI*2,A[F]=.2+Math.random()*.45,E[F]=Math.random()*Math.PI*2,T[F]=Math.random()*Math.PI*2,C[F]=Math.random()*Math.PI*2,U[F]=(Math.random()-.5)*1.6,x[F]=(Math.random()-.5)*2.2,S[F]=(Math.random()-.5)*1.6,D[F]=.75+Math.random()*.8,Aa.setHex(jx(d));const et=.85+Math.random()*.3;Aa.multiplyScalar(et),h.setColorAt(F,Aa)}h.instanceColor&&(h.instanceColor.needsUpdate=!0);const Q=new wt;Q.add(h);function W(F,dt){dt==null&&(dt=.016),dt>.1&&(dt=.1);for(let et=0;et<a;et++){g[et]-=_[et]*dt;const xt=p[et]+Math.sin(F*m[et]+u[et])*M[et],kt=f[et]+Math.cos(F*v[et]+y[et])*A[et],Xt=r(xt,kt);if(g[et]<=Xt+.05){z(et),g[et]=o+Math.random()*3,_[et]=.24+Math.random()*.4;continue}E[et]+=U[et]*dt,T[et]+=x[et]*dt,C[et]+=S[et]*dt,G.position.set(xt,g[et],kt),G.rotation.set(E[et],T[et],C[et]),G.scale.setScalar(D[et]),G.updateMatrix(),h.setMatrixAt(et,G.matrix)}h.instanceMatrix.needsUpdate=!0}W(0,0);function lt(F,dt,et=7){for(let xt=0;xt<a;xt++){const kt=Math.random()*Math.PI*2,Xt=Math.sqrt(Math.random())*et;p[xt]=F+Math.cos(kt)*Xt,f[xt]=dt+Math.sin(kt)*Xt;const B=r(p[xt],f[xt]);g[xt]=B+5+Math.random()*7,_[xt]=.5+Math.random()*.65}}return{group:Q,update:W,burst:lt}}function $x(i={}){const t=i.origin||[-60,90,-40],e=i.color!=null?i.color:O.flame,n=Math.max(4,Math.min(10,i.count||8)),s=new wt;s.position.set(t[0],t[1],t[2]);const o=new I(-t[0],-t[1],-t[2]).normalize(),r=64,a=document.createElement("canvas");a.width=r,a.height=r;const c=a.getContext("2d"),l=c.createImageData(r,r);for(let A=0;A<r;A++){const E=A/(r-1),T=Math.pow(1-E,1.3);for(let C=0;C<r;C++){const U=C/(r-1),x=Math.sin(U*Math.PI),S=T*Math.pow(x,1.4),D=(A*r+C)*4;l.data[D]=255,l.data[D+1]=255,l.data[D+2]=255,l.data[D+3]=Math.max(0,Math.min(255,S*255))}}c.putImageData(l,0,0);const h=new Fi(a);h.colorSpace=En,h.minFilter=dn,h.magFilter=dn;const d=120,p=10,f=new be(p,d,1,1);f.translate(0,-d*.5,0);const g=new I(0,-1,0),_=new Fn().setFromUnitVectors(g,o),m=Math.abs(o.y)>.9?new I(1,0,0):new I(0,1,0),u=new I().crossVectors(o,m).normalize(),M=[];for(let A=0;A<n;A++){const E=(A/(n-1)-.5)*.5,T=new Fn().setFromAxisAngle(u,E),C=new si({color:new Zt(e),map:h,transparent:!0,opacity:.05+Math.random()*.04,blending:Qs,depthWrite:!1,side:fe,toneMapped:!1}),U=new wt;U.quaternion.copy(T).multiply(_);const x=new Z(f,C),S=new Z(f,C);S.rotation.y=Math.PI*.5,U.add(x,S);const D=.7+Math.random()*.7;U.scale.set(D,1,1),s.add(U),M.push({pivot:U,mat:C,baseOpacity:C.opacity,shimmerSpeed:.3+Math.random()*.7,shimmerPhase:Math.random()*Math.PI*2,swayAxis:u.clone(),swayAmp:.02+Math.random()*.04,swaySpeed:.15+Math.random()*.25,swayPhase:Math.random()*Math.PI*2,baseQuat:U.quaternion.clone()})}const v=new Fn;function y(A){for(let E=0;E<M.length;E++){const T=M[E];T.mat.opacity=T.baseOpacity*(.65+.35*Math.sin(A*T.shimmerSpeed+T.shimmerPhase));const C=Math.sin(A*T.swaySpeed+T.swayPhase)*T.swayAmp;v.setFromAxisAngle(T.swayAxis,C),T.pivot.quaternion.copy(v).multiply(T.baseQuat)}}return{group:s,update:y}}const xi={fogColor:16756838,ambient:{color:16767392,intensity:.42},keyLight:{color:16757596,intensity:2.6},hemi:{sky:16766362,ground:6175262,intensity:.55}};function gd(i,t={}){const e=t.w||1024,n=t.h||256,s=document.createElement("canvas");s.width=e,s.height=n;const o=s.getContext("2d");o.fillStyle=t.bg||"#5e1220",o.fillRect(0,0,e,n),o.strokeStyle=t.border||"#e9c46a",o.lineWidth=20,o.strokeRect(12,12,e-24,n-24),o.fillStyle=t.border||"#e9c46a",[[30,30],[e-30,30],[30,n-30],[e-30,n-30]].forEach(([h,d])=>{o.beginPath(),o.arc(h,d,10,0,Math.PI*2),o.fill()}),o.fillStyle=t.fg||"#ffd97a";let r=t.size||128;o.font="bold "+r+'px Georgia, "Times New Roman", serif';const a=e-96,c=o.measureText(i).width;c>a&&(r*=a/c,o.font="bold "+r+'px Georgia, "Times New Roman", serif'),o.textAlign="center",o.textBaseline="middle",o.fillText(i,e/2,n/2+6);const l=new Fi(s);return l.anisotropy=4,l}function Qx(i,t={}){const e=new wt,n=new wt;e.add(n);const s=new nt({color:O.cream,roughness:.6,metalness:.2}),o=new nt({color:O.crimson,roughness:.5,metalness:.1}),r=new nt({color:O.gold,roughness:.3,metalness:.85,emissive:O.brass,emissiveIntensity:.25}),a=new wt;a.scale.setScalar(1.9),n.add(a);const c=new Z(new rt(.45,.34,4,8),s);c.rotation.x=Math.PI/2,a.add(c);const l=new Z(new $t(.34,.8,8),r);l.rotation.x=Math.PI/2,l.position.z=2.4,a.add(l);const h=new Z(new Ct(4.6,.1,.8),o);h.position.z=.2,a.add(h);const d=new Z(new Ct(1.7,.08,.5),o);d.position.z=-1.9,a.add(d);const p=new Z(new Ct(.08,.7,.6),o);p.position.set(0,.36,-1.9),a.add(p);const f=40,g=7,_=new be(f,g,48,1),m=gd(i,{size:132,w:1536}),u=m.clone();u.wrapS=Ui,u.repeat.x=-1,u.offset.x=1,u.needsUpdate=!0;const M=new nt({map:m,side:In,roughness:.85,metalness:0}),v=new nt({map:u,side:Ge,roughness:.85,metalness:0}),y=new Z(_,M),A=new Z(_,v);y.rotation.y=A.rotation.y=Math.PI/2,y.position.z=A.position.z=-6-f/2,n.add(y,A);const E=_.attributes.position.array.slice(),T=t.radius||55,C=t.height||30,U=t.speed||.085;return{group:e,update:x=>{const S=x*U;e.position.set(Math.cos(S)*T,C+Math.sin(x*.25)*2.5,Math.sin(S)*T);const D=-Math.sin(S),z=Math.cos(S);e.rotation.y=Math.atan2(D,z),n.rotation.z=-.32+Math.sin(x*.8)*.05;const G=_.attributes.position;for(let Q=0;Q<G.count;Q++){const W=E[Q*3];G.setZ(Q,Math.sin(W*.28+x*3.6)*.45)}G.needsUpdate=!0}}}function tM(i=0){const t=new wt,e=new nt({color:16579830,roughness:.6,metalness:0}),n=new nt({color:O.saffron,roughness:.5}),s=new Z(new Bt(.55,10,8),e);s.scale.set(1,.72,1.55),s.position.y=.28,t.add(s);const o=new Z(new $t(.22,.55,6),e);o.position.set(0,.42,-.62),o.rotation.x=-1,t.add(o);const r=new Z(new rt(.09,.12,.45,6),e);r.position.set(0,.55,.55),r.rotation.x=.35,t.add(r);const a=new Z(new rt(.075,.09,.4,6),e);a.position.set(0,.88,.68),a.rotation.x=-.25,t.add(a);const c=new Z(new Bt(.14,8,6),e);c.position.set(0,1.05,.78),t.add(c);const l=new Z(new $t(.055,.2,5),n);l.rotation.x=Math.PI/2,l.position.set(0,1.02,.95),t.add(l);const h=2+i%1*1.2;return{group:t,update:d=>{const p=d*.14+i;t.position.set(Math.cos(p)*h,Math.sin(d*.8+i)*.05,Math.sin(p)*h),t.rotation.y=-p+Math.PI/2}}}function eM(i={}){const t=i.count||36,e=[...i.origin||[0,2.2,0]];let n=i.ground!==void 0?i.ground:e[1]-2;const s=new be(.17,.09),o=new nt({color:9359770,side:fe,roughness:.7,metalness:0,emissive:3107370,emissiveIntensity:.12}),r=new fo(s,o,t);r.instanceMatrix.setUsage(Wc);const a=new Ae,c=[],l=()=>({x:e[0],y:e[1],z:e[2],vx:(Math.random()-.5)*1.6,vy:2.4+Math.random()*2.4,vz:(Math.random()-.5)*1.6,rot:Math.random()*6.28,vr:(Math.random()-.5)*9,delay:Math.random()*1.5});for(let h=0;h<t;h++)c.push(l());return{group:r,setOrigin:(h,d,p,f=n)=>{e[0]=h,e[1]=d,e[2]=p,n=f;for(let g=0;g<t;g++)c[g].delay>0&&(c[g].x=h,c[g].y=d,c[g].z=p)},update:(h,d)=>{d=Math.min(d||.016,.05);for(let p=0;p<t;p++){const f=c[p];if(f.delay>0){f.delay-=d,a.position.set(0,-999,0),a.updateMatrix(),r.setMatrixAt(p,a.matrix);continue}f.vy-=6.2*d,f.x+=f.vx*d,f.y+=f.vy*d,f.z+=f.vz*d,f.rot+=f.vr*d,f.y<n&&Object.assign(f,l()),a.position.set(f.x,f.y,f.z),a.rotation.set(f.rot*.5,f.rot,f.rot*.3),a.updateMatrix(),r.setMatrixAt(p,a.matrix)}r.instanceMatrix.needsUpdate=!0}}}function nM(i={}){const t=i.origin||[0,1.2,0],e=i.rise||11,n=i.cycle||4.2,s=26,o=new wt,r=new Z(new rt(.05,.09,.45,6),new nt({color:O.crimson,emissive:O.marigold,emissiveIntensity:.8}));o.add(r);const a=new si({color:O.goldBright,transparent:!0,opacity:1}),c=new fo(new Bt(.07,5,4),a,s);c.instanceMatrix.setUsage(Wc),o.add(c);const l=new Ae,h=[];for(let p=0;p<s;p++){const f=Math.random()*Math.PI*2,g=Math.acos(2*Math.random()-1),_=3+Math.random()*3.2;h.push({vx:Math.sin(g)*Math.cos(f)*_,vy:Math.cos(g)*_,vz:Math.sin(g)*Math.sin(f)*_})}const d=new Zt;return{group:o,update:p=>{const f=p%n,g=t[1]+e;if(f<1.2)r.visible=!0,c.visible=!1,r.position.set(t[0],t[1]+f/1.2*e,t[2]);else{r.visible=!1,c.visible=!0;const _=f-1.2,m=Math.max(0,1-_/1.7);a.opacity=m,d.setHSL(Math.floor(p/n)*.27%1,.9,.62),a.color.copy(d);for(let u=0;u<s;u++){const M=h[u];l.position.set(t[0]+M.vx*_,g+M.vy*_-3.1*_*_,t[2]+M.vz*_),l.scale.setScalar(.5+m*.7),l.updateMatrix(),c.setMatrixAt(u,l.matrix)}c.instanceMatrix.needsUpdate=!0}}}}function iM(i="TEAM GROOM",t={}){const e=new wt,n=t.width||3.15,s=t.height||.84,o=t.poleHeight||1.4,r=new be(n,s,14,1),a=gd(i,{size:126,w:768,h:224}),c=a.clone();c.wrapS=Ui,c.repeat.x=-1,c.offset.x=1,c.needsUpdate=!0;const l=new nt({map:a,side:In,roughness:.82,metalness:0,emissive:2754576,emissiveIntensity:.15}),h=new nt({map:c,side:Ge,roughness:.82,metalness:0,emissive:2754576,emissiveIntensity:.15}),d=new Z(r,l);d.position.y=s/2;const p=new Z(r,h);p.position.y=s/2,e.add(d,p);const f=new nt({color:O.brass,metalness:.9,roughness:.3}),g=new rt(.04,.04,o,6),_=s/2-.1,m=_+o/2;[-1,1].forEach(M=>{const v=new Z(g,f);v.position.set(M*n/2,_,0),e.add(v);const y=new Z(new Bt(.09,6,5),f);y.position.set(M*n/2,Math.max(s+.08,m+.02),0),e.add(y)});const u=r.attributes.position.array.slice();return{group:e,update:M=>{const v=r.attributes.position;for(let y=0;y<v.count;y++){const A=u[y*3];v.setZ(y,Math.sin(A*1.5+M*3.2)*.14)}v.needsUpdate=!0}}}const Ra=.48,sM=96,Ca=60/sM/4,oM=.26,Ko={opening:{track:.8,drone:.52,air:.1,melody:.38,rhythm:.14},procession:{track:.7,drone:.44,air:.11,melody:.5,rhythm:.52},arrival:{track:.57,drone:.42,air:.12,melody:.52,rhythm:.58},celebration:{track:.76,drone:.46,air:.1,melody:.48,rhythm:.44}},Zh=[.13,0,0,.045,.095,0,.06,0,.13,0,0,.045,.095,0,.075,.052],jh=[0,0,.055,0,0,.042,0,.052,0,0,.055,0,0,.042,.06,0],Jh=[.021,0,0,0,.018,0,0,0,.021,0,0,0,.018,0,0,0],Pa=[261.63,293.66,329.63,349.23,392,440,493.88,523.25],ss=[0,2,1,0,2,3,4,3,2,1,0,1,2,4,3,2];function rM({button:i=null,onStateChange:t=null,initialTrackTime:e=0,pianoTrackUrl:n=null}={}){let s=null,o=null,r=null,a=null,c=null,l=!1,h=!1,d=!1,p=0,f=!1,g="opening",_="",m=0,u=0,M=null,v=null,y=0,A=null,E=null,T=null,C=!1,U=!1,x=Number.isFinite(Number(e))?Math.max(0,Number(e)):null,S=0;const D={drone:null,air:null,melody:null,rhythm:null};function z(L,Y){if(L)try{if(typeof L.cancelAndHoldAtTime=="function")L.cancelAndHoldAtTime(Y);else{const it=L.value;L.cancelScheduledValues(Y),L.setValueAtTime(it,Y)}}catch{L.cancelScheduledValues(Y),L.setValueAtTime(L.value,Y)}}function G(L,Y,it=.4,V=null){if(!s||!L)return;const tt=Math.max(s.currentTime,V??s.currentTime);z(L,tt),L.linearRampToValueAtTime(Y,tt+it)}function Q(L,Y,it,V,tt){L.cancelScheduledValues(Y),L.setValueAtTime(1e-4,Y),L.exponentialRampToValueAtTime(Math.max(2e-4,it),Y+V),L.exponentialRampToValueAtTime(1e-4,Y+V+tt)}function W(L,Y,it=0){if(typeof s.createStereoPanner=="function"){const V=s.createStereoPanner();V.pan.value=Math.max(-1,Math.min(1,it)),L.connect(V),V.connect(Y)}else L.connect(Y)}function lt(L,Y=.55,it=null){if(!s||!l)return;_=Ko[L]?L:"opening";const V=Ko[_],tt=C,vt=tt?_==="arrival"?.78:_==="procession"?.7:_==="celebration"?.58:.34:1;G(T==null?void 0:T.gain,V.track,Y,it),G(D.drone.gain,V.drone*(tt?.11:1),Y,it),G(D.air.gain,V.air*(tt?.82:1),Y,it),G(D.melody.gain,V.melody*(tt?.07:1),Y,it),G(D.rhythm.gain,V.rhythm*vt,Y,it)}function F(L){const Y=!!L;if(C===Y){bt();return}C=Y,Y&&(!E||(s==null?void 0:s.state)==="running")&&ot.forEach(it=>window.removeEventListener(it,ft)),l&&lt(g,Y?.7:.28),bt()}function dt(){if(!(!A||x==null||A.readyState<1))try{const L=Number.isFinite(A.duration)&&A.duration>0?A.duration:null;A.currentTime=L?x%L:x,x=null}catch{}}function et(L=!1){if(!(!A||U||h||document.hidden)&&(dt(),!(!L&&!A.paused)))try{const Y=A.play();Y!=null&&Y.then?Y.then(()=>F(!0)).catch(()=>F(!1)):F(!0)}catch{F(!1)}}function xt(){if(!(!n||A||U))try{A=new Audio,A.src=n,A.preload="metadata",A.loop=!0,A.playsInline=!0,A.setAttribute("playsinline",""),A.volume=Ra*Ko.opening.track,A.addEventListener("loadedmetadata",dt,{once:!0}),A.addEventListener("playing",()=>F(!0)),A.addEventListener("pause",()=>F(!1)),A.addEventListener("error",()=>{U=!0,F(!1)})}catch{}}function kt(){if(!(!A||typeof(s==null?void 0:s.createMediaElementSource)!="function"))try{const L=s.createGain();L.gain.value=1e-4,L.connect(r);const Y=s.createMediaElementSource(A);Y.connect(L),E=Y,T=L,A.volume=1}catch{}}function Xt(){if(!(!A||A.paused)){try{A.pause()}catch{}F(!1)}}function B(L,Y=!1){g=Ko[L]?L:"opening",g!=="arrival"&&(d=!1,p=0),l&&(Y||!_)&&lt(g,Y?.08:.55)}function K(L,Y,it,V=.05,tt=null){if(!s)return;const vt=s.createOscillator(),Mt=s.createOscillator();if(vt.type="sawtooth",Mt.type="triangle",vt.frequency.setValueAtTime(Y,L),Mt.frequency.setValueAtTime(Y,L),Mt.detune.value=5,tt){const j=L+it*.62;vt.frequency.setValueAtTime(Y,j),Mt.frequency.setValueAtTime(Y,j),vt.frequency.exponentialRampToValueAtTime(tt,L+it*.94),Mt.frequency.exponentialRampToValueAtTime(tt,L+it*.94)}const ht=s.createGain();ht.gain.value=.62;const Pt=s.createGain();Pt.gain.value=.34;const ut=s.createBiquadFilter();ut.type="lowpass",ut.frequency.value=1650,ut.Q.value=.75;const Tt=s.createGain();Tt.gain.setValueAtTime(1e-4,L),Tt.gain.exponentialRampToValueAtTime(V,L+.035),Tt.gain.setValueAtTime(V*.9,L+Math.max(.05,it-.055)),Tt.gain.exponentialRampToValueAtTime(1e-4,L+it);const N=s.createOscillator();N.frequency.value=5.1;const _t=s.createGain();_t.gain.value=10,N.connect(_t),_t.connect(vt.detune),_t.connect(Mt.detune),vt.connect(ht),Mt.connect(Pt),ht.connect(ut),Pt.connect(ut),ut.connect(Tt),Tt.connect(D.melody),vt.start(L),Mt.start(L),N.start(L),vt.stop(L+it+.04),Mt.stop(L+it+.04),N.stop(L+it+.04)}function mt(L,Y,it,V=!1,tt=null){if(!s||it<=0)return;const vt=tt||D.rhythm,Mt=s.createOscillator();Mt.type="triangle",Mt.frequency.setValueAtTime(Y*1.75,L),Mt.frequency.exponentialRampToValueAtTime(Y,L+.055);const ht=s.createGain();if(Q(ht.gain,L,it,.003,V?.27:.15),Mt.connect(ht),ht.connect(vt),Mt.start(L),Mt.stop(L+(V?.3:.18)),V&&c){const Pt=s.createBufferSource();Pt.buffer=c;const ut=s.createBiquadFilter();ut.type="bandpass",ut.frequency.value=1250,ut.Q.value=.85;const Tt=s.createGain();Q(Tt.gain,L,it*.2,.002,.07),Pt.connect(ut),ut.connect(Tt),Tt.connect(vt),Pt.start(L,0,.085),Pt.stop(L+.09)}}function X(L,Y=.035,it=!1){if(!s)return;const V=s.createOscillator();V.type="triangle",V.frequency.setValueAtTime(it?205:178,L),V.frequency.exponentialRampToValueAtTime(it?88:74,L+.08);const tt=s.createGain();Q(tt.gain,L,Y,.002,.1),V.connect(tt),tt.connect(D.rhythm),V.start(L),V.stop(L+.115)}function gt(L,Y=.02){if(!s||!c)return;const it=s.createBufferSource();it.buffer=c;const V=s.createBiquadFilter();V.type="highpass",V.frequency.value=5200;const tt=s.createGain();Q(tt.gain,L,Y,.002,.17),it.connect(V),V.connect(tt),tt.connect(D.rhythm),it.start(L,.18,.19),it.stop(L+.2)}function pt(L,Y,it=.017){s&&[1,2.01].forEach((V,tt)=>{const vt=s.createOscillator();vt.type=tt?"sine":"triangle",vt.frequency.value=Y*V;const Mt=s.createGain();Q(Mt.gain,L,it/(tt+1),.003,.42+tt*.12),vt.connect(Mt),Mt.connect(D.melody),vt.start(L),vt.stop(L+.58)})}function St(L,Y=622.25,it=.028,V=null){if(!s)return;const tt=V||D.melody;[1,2.01,2.72].forEach((vt,Mt)=>{const ht=s.createOscillator();ht.type="sine",ht.frequency.value=Y*vt;const Pt=s.createGain();Q(Pt.gain,L,it/Math.pow(Mt+1,1.25),.006,1.45+Mt*.28),ht.connect(Pt),Pt.connect(tt),ht.start(L),ht.stop(L+2.35)})}function qt(L,Y=2.25,it=.055){if(!s||!a)return;const V=s.createOscillator();V.type="triangle";const tt=s.createOscillator();tt.type="sine",V.frequency.setValueAtTime(146.83,L),tt.frequency.setValueAtTime(293.66,L),V.frequency.exponentialRampToValueAtTime(155.56,L+Y*.72),tt.frequency.exponentialRampToValueAtTime(311.13,L+Y*.72);const vt=s.createGain();vt.gain.value=.76;const Mt=s.createGain();Mt.gain.value=.28;const ht=s.createBiquadFilter();ht.type="bandpass",ht.frequency.value=480,ht.Q.value=.75;const Pt=s.createGain();Pt.gain.setValueAtTime(1e-4,L),Pt.gain.exponentialRampToValueAtTime(it,L+.08),Pt.gain.setValueAtTime(it*.92,L+Y*.68),Pt.gain.exponentialRampToValueAtTime(1e-4,L+Y);const ut=s.createOscillator();ut.frequency.value=4.6;const Tt=s.createGain();Tt.gain.value=5,ut.connect(Tt),Tt.connect(V.detune),Tt.connect(tt.detune),V.connect(vt),tt.connect(Mt),vt.connect(ht),Mt.connect(ht),ht.connect(Pt),Pt.connect(a),V.start(L),tt.start(L),ut.start(L),V.stop(L+Y+.05),tt.stop(L+Y+.05),ut.stop(L+Y+.05)}function Nt(L,Y=.045,it=0){if(!s||!c||!a)return;const V=s.createBufferSource();V.buffer=c;const tt=s.createBiquadFilter();tt.type="bandpass",tt.frequency.value=1700+Math.random()*1200,tt.Q.value=.55;const vt=s.createGain();Q(vt.gain,L,Y,.0015,.12),V.connect(tt),tt.connect(vt),W(vt,a,it);const Mt=Math.max(0,c.duration-.16);V.start(L,Math.random()*Mt,.15),V.stop(L+.155);const ht=s.createOscillator();ht.type="sine",ht.frequency.setValueAtTime(125,L),ht.frequency.exponentialRampToValueAtTime(48,L+.15);const Pt=s.createGain();Q(Pt.gain,L,Y*.24,.003,.18),ht.connect(Pt),W(Pt,a,it),ht.start(L),ht.stop(L+.2)}function P(L,Y){const it=Y%16,V=Math.floor(Y/16);it===0&&_!==g&&lt(g,.42,L);const tt=_||g,vt=tt==="opening",Mt=tt==="procession"||tt==="arrival",ht=tt==="arrival"?1.06:tt==="celebration"?.82:1;if(C){vt?it===0&&V>0&&V%4===0&&St(L,587.33,.018):((it===0||it===8&&tt!=="celebration")&&mt(L,132,(tt==="arrival"?.09:.065)*ht,!0),(it===4||it===12)&&gt(L,tt==="arrival"?.018:.013),Mt&&(it===5||it===13)&&X(L,tt==="arrival"?.034:.026,it===13),it===0&&V>0&&V%6===0&&St(L,659.25,.016));return}vt?(it===0||it===8)&&mt(L,132,.047,!0):(Zh[it]&&mt(L,132,Zh[it]*ht,!0),jh[it]&&mt(L,225,jh[it]*ht,!1),Jh[it]&&gt(L,Jh[it]*(tt==="arrival"?1.08:1)),Mt&&(it===5||it===13)&&X(L,tt==="arrival"?.04:.033,it===13));const Pt=vt?4:2;if(Y%Pt===0){const ut=Math.floor(Y/Pt)%ss.length,Tt=ss[ut],N=ss[(ut+1)%ss.length],_t=Ca*Pt-.035,j=ut%8===7?Pa[N]:null;K(L,Pa[Tt],_t,vt?.041:.052,j)}if(!vt&&(it===3||it===11)&&V%2===0){const ut=ss[(Math.floor(Y/2)+2)%ss.length];pt(L,Pa[ut]*2,tt==="arrival"?.019:.015)}it===0&&V>0&&V%(vt?2:4)===0&&St(L,vt?587.33:659.25,vt?.025:.021)}function Gt(){if(!s||s.state!=="running"||h)return;const L=s.currentTime;m<L-Ca&&(m=L+.055);let Y=0;for(;m<L+oM&&Y++<8;)P(m,u),m+=Ca,u++}function Dt(L,Y=2.75){r&&(z(r.gain,L),r.gain.linearRampToValueAtTime(.29,L+.07),r.gain.setValueAtTime(.29,L+Y-.38),r.gain.linearRampToValueAtTime(1,L+Y))}function It(){if(!s||!l||s.state!=="running"||h){d=g==="arrival",p=d?performance.now():0;return}if(g!=="arrival"){d=!1,p=0;return}d=!1,p=0,f=!0;const L=s.currentTime+.065;Dt(L,3.75),qt(L,2.7,.074),[0,.18,.36,.56,.8,1.08].forEach((Y,it)=>mt(L+Y,it%2?215:132,.125+it*.006,!0,a)),St(L+.82,523.25,.052,a),St(L+1.02,659.25,.038,a),[[1.18,.078,-.7],[1.36,.064,.62],[1.58,.073,-.18],[1.9,.061,.34],[2.26,.069,-.5],[2.7,.058,.7]].forEach(([Y,it,V])=>Nt(L+Y,it,V))}function bt(){const L=Qt();if(i){i.textContent=L?"🔊":"🔇",i.setAttribute("aria-pressed",String(L));const Y=L?"Mute wedding music":"Play wedding music";i.setAttribute("aria-label",Y),i.title=Y}if(typeof t=="function")try{t({playing:L,musicPlaying:C,muted:h})}catch{}}function Qt(){return!h&&!!(l&&(s==null?void 0:s.state)==="running"||C&&!E)}function Ft(L=!1){var Mt;if(!s)return Promise.resolve(!1);if(v&&!L)return v;const Y=++y;let it=0,V;try{V=s.state==="running"?Promise.resolve():Promise.resolve((Mt=s.resume)==null?void 0:Mt.call(s))}catch(ht){V=Promise.reject(ht)}const tt=new Promise(ht=>{it=window.setTimeout(ht,L?900:650)});return v=Promise.race([V,tt]).then(()=>{if(l=(s==null?void 0:s.state)==="running",!l)return!1;lt(g,.1),m<s.currentTime+.025&&(m=s.currentTime+.07),G(o==null?void 0:o.gain,h?1e-4:Ra,.5);const ht=p>0&&performance.now()-p<1400;return d&&g==="arrival"&&ht?It():(d=!1,p=0,!f&&g==="opening"&&(f=!0,St(s.currentTime+.1,587.33,.026,a))),(!A||C)&&ot.forEach(Pt=>window.removeEventListener(Pt,ft)),!0}).catch(()=>(l=!1,!1)).finally(()=>{window.clearTimeout(it),Y===y&&(v=null),bt()}),v}function R(L=!1){if(xt(),s){const Y=Ft(L);return et(L),Y}try{const Y=window.AudioContext||window.webkitAudioContext;if(!Y)return et(L),Promise.resolve(!1);try{s=new Y({latencyHint:"balanced"})}catch{s=new Y}const it=s.createDynamicsCompressor();it.threshold.value=-15,it.knee.value=14,it.ratio.value=6,it.attack.value=.008,it.release.value=.24,o=s.createGain(),o.gain.value=1e-4,r=s.createGain(),r.gain.value=1,a=s.createGain(),a.gain.value=.92,r.connect(o),a.connect(o),o.connect(it),it.connect(s.destination);for(const Tt of Object.keys(D))D[Tt]=s.createGain(),D[Tt].gain.value=.001,D[Tt].connect(r);[130.81,196,261.63].forEach((Tt,N)=>{const _t=s.createOscillator();_t.type=N===0?"sine":"triangle",_t.frequency.value=Tt;const j=s.createGain();j.gain.value=[.14,.075,.045][N];const st=s.createBiquadFilter();st.type="lowpass",st.frequency.value=700;const Et=s.createOscillator();Et.frequency.value=.075+N*.028;const At=s.createGain();At.gain.value=2.2,Et.connect(At),At.connect(_t.detune),_t.connect(j),j.connect(st),st.connect(D.drone),_t.start(),Et.start()});const V=s.sampleRate;c=s.createBuffer(1,V,s.sampleRate);const tt=c.getChannelData(0);for(let Tt=0;Tt<V;Tt++)tt[Tt]=(Math.random()*2-1)*.45;const vt=Math.min(256,Math.floor(V/4));for(let Tt=0;Tt<vt;Tt++){const N=(Tt+1)/vt,_t=V-vt+Tt;tt[_t]=tt[_t]*(1-N)+tt[Tt]*N}const Mt=s.createBufferSource();Mt.buffer=c,Mt.loop=!0;const ht=s.createBiquadFilter();ht.type="bandpass",ht.frequency.value=1100,ht.Q.value=.55;const Pt=s.createGain();Pt.gain.value=.022,Mt.connect(ht),ht.connect(Pt),Pt.connect(D.air),Mt.start(),m=s.currentTime+.075,M=window.setInterval(Gt,75),kt();const ut=Ft(L);return et(L),ut}catch{return l=!1,s=null,o=null,M&&window.clearInterval(M),M=null,et(L),bt(),Promise.resolve()}}function w(){h=!h;const L=++S;h?window.setTimeout(()=>{h&&L===S&&Xt()},320):(Ft(!0),et(!0)),G(o==null?void 0:o.gain,h?1e-4:Ra,.28),bt()}function q(){h=!0,++S,Xt(),G(o==null?void 0:o.gain,1e-4,.18),ot.forEach(L=>window.removeEventListener(L,ft)),bt()}const ot=window.PointerEvent?["pointerdown","keydown"]:["touchstart","keydown"];function ft(L){L.target instanceof Element&&L.target.closest("#soundBtn")||(h=!1,R(!0),bt())}ot.forEach(L=>window.addEventListener(L,ft,{passive:!0})),i==null||i.addEventListener("click",L=>{L.stopPropagation(),Qt()?w():(h=!1,R(!0)),bt()});function ct(){var L;Xt(),Promise.resolve((L=s==null?void 0:s.suspend)==null?void 0:L.call(s)).catch(()=>{})}function Ut(){h||(Ft(),et())}return document.addEventListener("visibilitychange",()=>{document.hidden?ct():Ut()}),window.addEventListener("pagehide",ct),window.addEventListener("pageshow",L=>{L.persisted&&Ut()}),bt(),{setPhase:B,playArrivalCue:It,start:R,stayMuted:q,isMusicPlaying:()=>!!(C&&!h&&(!E||(s==null?void 0:s.state)==="running"))}}const aM=""+new URL("ishq-sufiyana-piano-CHjIQRfE.mp3",import.meta.url).href,$h={bride:"Priya",groom:"Vivek"},Zo=[-2,-29],Tc=Math.atan2(8,2),Mr=[6,-27];function nn(i){const t=i[0]-Zo[0],e=i[1]-Zo[1],n=Math.cos(Tc),s=Math.sin(Tc);return[Zo[0]+t*n+e*s,Zo[1]-t*s+e*n]}function as(i){return{...i,pos:nn(i.pos),...i.faceToward?{faceToward:nn(i.faceToward)}:{}}}const Vt={mandap:{pos:nn([-2,-34]),faceToward:Mr},bride:{pos:nn([-2,-28]),faceToward:Mr},horseGroom:{pos:[24,14],faceToward:[23,-8]},elephant:{pos:[24,27],faceToward:[24,8]},path:{points:[[14,44],[20,34],[24,22],[25,8],[23,-8],[16,-20],[6,-27],[-2,-29]],width:7},toranGates:[{pos:[19.5,35],faceToward:[23,20]},{pos:[24.5,6],faceToward:[24,-8]},{pos:[10,-25],faceToward:[-2,-29]}],attendants:[{item:"chhatri",pos:[20.5,14],faceToward:[23,-8]},{item:"chhatri",pos:[28,14],faceToward:[23,-8]},{item:"dhol",pos:[16.9,-13.8],faceToward:[0,-30]},{item:"shehnai",pos:[18.9,-15],faceToward:[0,-30]},{item:"turhi",pos:[21,-16.2],faceToward:[0,-30]},{item:"flag",pos:[20,27],faceToward:[24,12]},{item:"morchhal",pos:[28,27],faceToward:[24,12]},as({item:"lamp",pos:[-6.5,-22.8],faceToward:[-2,-30]}),as({item:"garland",pos:[2.5,-22.2],faceToward:[-2,-30]}),as({item:"lamp",pos:[-8.5,-30.5],faceToward:[-2,-30]})],petalArea:{cx:16,cz:0,radius:32},camera:{introFrom:[-8,25,70],target:[18,3,38],introDurationSec:4.5},dancers:[{variant:"armsUpM",pos:[20.5,7]},{variant:"bhangraM",pos:[29,7]},{variant:"spinF",pos:[20,0]},{variant:"jumpM",pos:[28,0]},{variant:"clapM",pos:[19.2,-7]},{variant:"thumkaF",pos:[27.2,-7]}],brideDancers:[as({variant:"spinF",pos:[-5.5,-27.5],faceToward:[-5.5,6]}),as({variant:"thumkaF",pos:[1.5,-27.5],faceToward:[1.5,6]})],guests:[{variant:"cheering",pos:[18,30],faceToward:[24,26]},{variant:"namaste",pos:[30,10],faceToward:[25,8]},{variant:"clapping",pos:[16,-14],faceToward:[21,-18]}],groomMusicians:[{item:"shehnai",pos:[21,18],faceToward:[23,-8]},{item:"dhol",pos:[27,18],faceToward:[23,-8]}],moneyThrower:{pos:[31.5,15],faceToward:[24,14]},fireworkGuy:{pos:[16.5,15],faceToward:[24,14]},swans:[{pos:[-4,-2],phase:0},{pos:[3,3],phase:2.1}]};var fu;const le=((fu=window.matchMedia)==null?void 0:fu.call(window,"(pointer: coarse)").matches)||/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent),ni=[],ar=[],We={holdEnd:5.1,travelEnd:29,arrivalEnd:45,anchorStart:.5,anchorEnd:58};let yr="opening",Ke=0,Ac=!1,Dr=1/0,Ur=!0;const oe=new av;oe.fog=new Zc(xi.fogColor,le?.0052:.006);const ke=new un(52,window.innerWidth/window.innerHeight,.1,1e3);ke.position.set(...Vt.camera.introFrom);const sn=new rv({antialias:!le});sn.setSize(window.innerWidth,window.innerHeight);sn.setPixelRatio(Math.min(window.devicePixelRatio,le?1.25:2));sn.shadowMap.enabled=!0;sn.shadowMap.type=le?Uc:pu;sn.toneMapping=Nc;sn.toneMappingExposure=1;const cM=document.getElementById("root")??document.body;cM.appendChild(sn.domElement);const Ps=new ux(sn);Ps.addPass(new dx(oe,ke));const _d=new bs(new at(window.innerWidth,window.innerHeight),.58,.6,.72);Ps.addPass(_d);let $s=null;if(!le){$s=new ld(gx);const i=sn.getPixelRatio();$s.uniforms.resolution.value.set(1/(window.innerWidth*i),1/(window.innerHeight*i)),Ps.addPass($s)}Ps.addPass(new mx);const ie=new Kv(ke,sn.domElement);ie.enableDamping=!0;ie.dampingFactor=le?.08:.05;ie.rotateSpeed=le?.65:1;ie.zoomSpeed=le?.85:1;ie.panSpeed=le?.75:1;ie.touches.ONE=_i.ROTATE;ie.touches.TWO=_i.DOLLY_PAN;ie.zoomToCursor=!0;ie.maxPolarAngle=Math.PI/2.08;ie.minDistance=6;ie.maxDistance=135;ie.target.set(...Vt.camera.target);ie.enabled=!0;const Nr=document.createElement("canvas");Nr.width=1024;Nr.height=1024;const Ls=Nr.getContext("2d"),_n=Ls.createLinearGradient(0,0,0,1024);_n.addColorStop(0,"#0a0520");_n.addColorStop(.15,"#1a0a3a");_n.addColorStop(.3,"#4a1555");_n.addColorStop(.42,"#8b2252");_n.addColorStop(.52,"#d4553a");_n.addColorStop(.6,"#e87730");_n.addColorStop(.68,"#f09838");_n.addColorStop(.76,"#f5be5a");_n.addColorStop(.85,"#fad48e");_n.addColorStop(.92,"#ffe8c0");_n.addColorStop(1,"#fff0d6");Ls.fillStyle=_n;Ls.fillRect(0,0,1024,1024);const po=Ls.createRadialGradient(512,620,0,512,620,250);po.addColorStop(0,"rgba(255,240,200,0.5)");po.addColorStop(.3,"rgba(255,180,80,0.3)");po.addColorStop(.7,"rgba(255,100,50,0.1)");po.addColorStop(1,"rgba(255,80,30,0)");Ls.fillStyle=po;Ls.fillRect(0,0,1024,1024);const rl=new Fi(Nr);rl.mapping=ur;oe.background=rl;oe.environment=rl;const lM=new Xv(xi.ambient.color,xi.ambient.intensity);oe.add(lM);const vn=new tl(xi.keyLight.color,xi.keyLight.intensity);vn.position.set(-50,22,-40);vn.castShadow=!0;vn.shadow.mapSize.set(le?1024:2048,le?1024:2048);vn.shadow.camera.left=-70;vn.shadow.camera.right=70;vn.shadow.camera.top=70;vn.shadow.camera.bottom=-70;vn.shadow.camera.near=.5;vn.shadow.camera.far=170;vn.shadow.bias=-.001;vn.shadow.normalBias=.02;oe.add(vn);const al=new tl(16750933,.45);al.position.set(30,10,20);oe.add(al);const cl=new tl(16733474,.5);cl.position.set(-40,6,-30);oe.add(cl);const hM=new Hv(xi.hemi.sky,xi.hemi.ground,xi.hemi.intensity);oe.add(hM);const Fr=new wt,uM=new Z(new Bt(5,32,32),new si({color:16770464}));Fr.add(uM);for(let i=0;i<3;i++){const t=new Z(new Bt(7+i*3,32,32),new si({color:new Zt().setHSL(.08,.9,.6-i*.1),transparent:!0,opacity:.15-i*.04,side:Ge}));Fr.add(t)}const cr=new I(-55,12,-80);Fr.position.copy(cr);oe.add(Fr);function Qh(i,t){let e=0;e+=Math.sin(i*.05)*Math.cos(t*.05)*4,e+=Math.sin(i*.1+1)*Math.cos(t*.08)*2,e+=Math.sin(i*.02)*Math.sin(t*.03)*6,e+=Math.cos(i*.15)*Math.sin(t*.12)*1.5,e+=Math.sin(i*.07+2)*Math.cos(t*.06-1)*1.5;const n=i*i+t*t;return n<400&&(e*=.3*(n/400)),e}function gn(i,t){const e=Qh(i,t),n=pM(i,t),s=1-lr(Sr+7,Sr+17,n.d),o=Math.hypot(i-Vt.mandap.pos[0],t-(Vt.bride.pos[1]-3)),r=1-lr(11,22,o),a=Math.max(s,r)*lr(15,20.5,Math.hypot(i,t));if(a<=0)return e;const l=Qh(n.cx,n.cz)+1.44;return e+(l-e)*a}function Or(i,t,e,n){return Math.atan2(e-i,n-t)}const vd=.32,mo=.06,xd=.015;function dM(i,t,e={}){const n=t.pos[0],s=t.pos[1],o=e.footprint??.7,r=e.y!==void 0?e.y:go(n,s,o)+(e.clearance??xd);return i.position.set(n,r,s),t.faceToward&&(i.rotation.y=Or(n,s,t.faceToward[0],t.faceToward[1])),oe.add(i),i}function Re(i,t,e={}){if(i.isObject3D)return dM(i,t,e),i;const n=new wt,s=t.pos[0],o=t.pos[1],r=e.footprint??1;n.position.set(s,e.y!==void 0?e.y:go(s,o,r)+(e.clearance??mo),o),t.faceToward&&(n.rotation.y=Or(s,o,t.faceToward[0],t.faceToward[1])),n.add(i.group),oe.add(n);const a={amount:0,phase:i.gaitOffset??0,gaitScale:i.gaitScale??6};return n.userData.locomotion=a,typeof i.update=="function"&&ni.push((c,l)=>i.update(c,l,a)),n}function on(i,t){const e=Sr+Vt.path.width*.16+.08;return gn(i,t)+(Md(i,t)<=e?vd:0)}function go(i,t,e){let n=on(i,t);const s=e>.05?[e*.5,e]:[];for(const o of s)for(let r=0;r<16;r++){const a=r/16*Math.PI*2;n=Math.max(n,on(i+Math.cos(a)*o,t+Math.sin(a)*o))}return n}const An=Vt.path.points,Sr=Vt.path.width/2;function fM(i,t,e,n){const s=e[0],o=e[1],r=n[0],a=n[1],c=r-s,l=a-o,h=c*c+l*l||1e-6;let d=((i-s)*c+(t-o)*l)/h;d=Math.max(0,Math.min(1,d));const p=s+d*c,f=o+d*l;return Math.hypot(i-p,t-f)}function Md(i,t){let e=1/0;for(let n=0;n<An.length-1;n++)e=Math.min(e,fM(i,t,An[n],An[n+1]));return e}function lr(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function pM(i,t){let e=1/0,n=An[0][0],s=An[0][1];for(let o=0;o<An.length-1;o++){const r=An[o],a=An[o+1],c=a[0]-r[0],l=a[1]-r[1],h=c*c+l*l||1e-6;let d=((i-r[0])*c+(t-r[1])*l)/h;d=Math.max(0,Math.min(1,d));const p=r[0]+d*c,f=r[1]+d*l,g=Math.hypot(i-p,t-f);g<e&&(e=g,n=p,s=f)}return{d:e,cx:n,cz:s}}const Kn=[];let Rc=0;for(let i=0;i<An.length-1;i++){const t=An[i],e=An[i+1],n=Math.hypot(e[0]-t[0],e[1]-t[1]);Kn.push({a:t,b:e,start:Rc,len:n}),Rc+=n}const Gs={x:0,z:0},La={x:0,z:0},Ia={x:0,z:0};function ms(i,t={x:0,z:0}){let e=Kn[0];if(i>=Rc)e=Kn[Kn.length-1];else if(i>0){for(let s=0;s<Kn.length;s++)if(i<=Kn[s].start+Kn[s].len){e=Kn[s];break}}const n=(i-e.start)/e.len;return t.x=Pe.lerp(e.a[0],e.b[0],n),t.z=Pe.lerp(e.a[1],e.b[1],n),t}function mM(i,t){let e=1/0,n=0;for(const s of Kn){const o=s.b[0]-s.a[0],r=s.b[1]-s.a[1],a=Pe.clamp(((i-s.a[0])*o+(t-s.a[1])*r)/(s.len*s.len),0,1),c=s.a[0]+o*a,l=s.a[1]+r*a,h=Math.hypot(i-c,t-l);h<e&&(e=h,n=s.start+s.len*a)}return n}const gM=Vt.toranGates.map(i=>mM(i.pos[0],i.pos[1]));function yd(i){let t=0;for(const e of gM)t=Math.max(t,1-lr(1.8,4.8,Math.abs(i-e)));return t}function _M(i){return 1-yd(i)*.5}function vM(i,t,e){const n=gn(i,t),s=on(i,t);return e>=0?s:n+(s-n)*bn((e+8)/8)}function Sd(i,t,e={}){ms(i,Gs),ms(i-.7,La),ms(i+.7,Ia);let n=Ia.x-La.x,s=Ia.z-La.z;const o=1/(Math.hypot(n,s)||1);return n*=o,s*=o,e.x=Gs.x-s*t,e.z=Gs.z+n*t,e.y=vM(e.x,e.z,i)+mo,e.yaw=Math.atan2(n,s),e.centerX=Gs.x,e.centerZ=Gs.z,e}function bn(i){const t=Pe.clamp(i,0,1);return t*t*t*(t*(t*6-15)+10)}function Da(i,t,e){return i+Math.atan2(Math.sin(t-i),Math.cos(t-i))*e}const wd=[[19.7,44.7],[10.7,39.3],[27.4,-11.6],[17.1,-10.4],[17.6,-25.3],[11.6,-16.7]],xM=[{x:Vt.mandap.pos[0],z:Vt.mandap.pos[1],r:11},{x:Vt.bride.pos[0],z:Vt.bride.pos[1],r:3},{x:Vt.horseGroom.pos[0],z:Vt.horseGroom.pos[1],r:6.5},{x:Vt.elephant.pos[0],z:Vt.elephant.pos[1],r:7.5},...Vt.toranGates.map(i=>({x:i.pos[0],z:i.pos[1],r:4.5})),...wd.map(i=>({x:i[0],z:i[1],r:1.8})),...Vt.attendants.map(i=>({x:i.pos[0],z:i.pos[1],r:2.2})),...Vt.dancers.map(i=>({x:i.pos[0],z:i.pos[1],r:2})),...Vt.brideDancers.map(i=>({x:i.pos[0],z:i.pos[1],r:2})),...Vt.guests.map(i=>({x:i.pos[0],z:i.pos[1],r:2})),{x:Vt.moneyThrower.pos[0],z:Vt.moneyThrower.pos[1],r:2},{x:Vt.fireworkGuy.pos[0],z:Vt.fireworkGuy.pos[1],r:2},{x:24,z:-2,r:13}];function MM(i,t){for(const e of xM){const n=i-e.x,s=t-e.z;if(n*n+s*s<e.r*e.r)return!0}return!1}function Is(i,t,e=1.5){return Md(i,t)<Sr+e||MM(i,t)}function ll(i){const t=-20+i*25+Math.sin(i*4)*8+Math.cos(i*2.5)*5,e=-70+i*75+Math.sin(i*3)*6;return new at(t,e)}function Ed(i){const t=30-i*28+Math.sin(i*3.5+1)*7,e=-65+i*68+Math.cos(i*2.8+2)*5;return new at(t,e)}const bd=Array.from({length:101},(i,t)=>{const e=t/100;return{a:ll(e),b:Ed(e),widthA:2+Math.sin(e*6)*.5,widthB:1.6+Math.sin(e*5+1)*.4}});function _o(i,t,e=3.5){for(const n of bd)if((i-n.a.x)**2+(t-n.a.y)**2<e*e||(i-n.b.x)**2+(t-n.b.y)**2<e*e)return!0;return!1}function yM(){const i=le?140:200,t=new be(200,200,i,i),e=t.attributes.position,n=new Float32Array(e.count*3);for(let o=0;o<e.count;o++){const r=e.getX(o),a=-e.getY(o);let c=gn(r,a),l=0;for(const d of bd){const p=Math.hypot(r-d.a.x,a-d.a.y);p<d.widthA&&(l=Math.max(l,(1-p/d.widthA)*2.5));const f=Math.hypot(r-d.b.x,a-d.b.y);f<d.widthB&&(l=Math.max(l,(1-f/d.widthB)*2.2))}c-=l,e.setZ(o,c);const h=new Zt;l>.5?h.setHSL(.08,.3,.25):c<-1?h.setHSL(.28,.5,.22):c<2?h.setHSL(.3,.55,.28+Math.random()*.04):c<5?h.setHSL(.25,.45,.3+Math.random()*.03):h.setHSL(.22,.35,.32+Math.random()*.03),n[o*3]=h.r,n[o*3+1]=h.g,n[o*3+2]=h.b}t.setAttribute("color",new en(n,3)),t.computeVertexNormals(),t.rotateX(-Math.PI/2);const s=new Z(t,new nt({vertexColors:!0,roughness:.92,metalness:0,envMapIntensity:.3}));s.receiveShadow=!0,oe.add(s)}yM();function Td(i,t,e,n){const s=[];for(let h=0;h<=1;h+=1/t)s.push(i(h));const o=[],r=[],a=[];for(let h=0;h<s.length;h++){const d=s[h],p=h/(s.length-1);let f;if(h<s.length-1){const u=s[h+1];f=new at(u.x-d.x,u.y-d.y).normalize()}else{const u=s[h-1];f=new at(d.x-u.x,d.y-u.y).normalize()}const g=new at(-f.y,f.x),_=e+Math.sin(p*6)*n,m=Math.min(gn(d.x+g.x*_,d.y+g.y*_),gn(d.x-g.x*_,d.y-g.y*_),gn(d.x,d.y))+.15;if(o.push(d.x+g.x*_,m,d.y+g.y*_,d.x-g.x*_,m,d.y-g.y*_),a.push(0,p*8,1,p*8),h<s.length-1){const u=h*2;r.push(u,u+1,u+2,u+1,u+3,u+2)}}const c=new Be;c.setAttribute("position",new se(o,3)),c.setAttribute("uv",new se(a,2)),c.setIndex(r),c.computeVertexNormals();const l=new Z(c,new nt({color:1728640,roughness:.05,metalness:.7,transparent:!0,opacity:.7,envMapIntensity:1.5,side:fe,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}));return oe.add(l),l}Td(ll,80,2,.5);Td(Ed,80,1.5,.4);const Br=new Z(new ei(15.5,72),new nt({color:1730696,roughness:.02,metalness:.8,transparent:!0,opacity:.82,envMapIntensity:2,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}));Br.rotation.x=-Math.PI/2;Br.position.set(0,.32,0);oe.add(Br);const hl=new Z(new ao(14.5,17.5,72),new nt({color:869461,roughness:.2,metalness:.4,transparent:!0,opacity:.5,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}));hl.rotation.x=-Math.PI/2;hl.position.set(0,.26,0);oe.add(hl);const co=new Z(new be(5,22),new si({color:16764006,transparent:!0,opacity:.22,side:fe,blending:Qs}));co.rotation.x=-Math.PI/2;co.position.set(-3,.26,-6);oe.add(co);function SM(i,t,e=1){const n=new wt,s=new Z(new rt(.15*e,.35*e,3.5*e,8),new nt({color:4861458,roughness:.95}));s.position.y=1.75*e,s.castShadow=!le,n.add(s);const o=[1922082,2779950,1723680,2647600];for(let r=0;r<4;r++){const a=new $t((2.5-r*.5)*e,(2.2-r*.3)*e,7+Math.floor(Math.random()*3)),c=a.attributes.position;for(let h=0;h<c.count;h++)c.setX(h,c.getX(h)+(Math.random()-.5)*.2*e),c.setZ(h,c.getZ(h)+(Math.random()-.5)*.2*e);a.computeVertexNormals();const l=new Z(a,new nt({color:o[r%4],roughness:.85}));l.position.y=(3.2+r*1.1)*e,l.rotation.y=Math.random()*Math.PI,l.castShadow=!le,n.add(l)}return n.position.set(i,gn(i,t),t),n}for(let i=0;i<80;i++){const t=(Math.random()-.5)*130,e=(Math.random()-.5)*130;t*t+e*e<350||_o(t,e,4)||Is(t,e,11)||oe.add(SM(t,e,.6+Math.random()*.9))}function wM(i,t,e=1){const n=new wt,s=new Z(new rt(.12*e,.25*e,4*e,6),new nt({color:9139029,roughness:.9}));s.position.y=2*e,s.castShadow=!le,n.add(s);const o=new ae(2.2*e,2),r=o.attributes.position;for(let c=0;c<r.count;c++)r.setX(c,r.getX(c)+(Math.random()-.5)*.4*e),r.setY(c,r.getY(c)+(Math.random()-.5)*.3*e),r.setZ(c,r.getZ(c)+(Math.random()-.5)*.4*e);o.computeVertexNormals();const a=new Z(o,new nt({color:new Zt().setHSL(.25+Math.random()*.1,.5,.25+Math.random()*.1),roughness:.85}));return a.position.y=4.5*e,a.castShadow=!le,n.add(a),n.position.set(i,gn(i,t),t),n}for(let i=0;i<30;i++){const t=(Math.random()-.5)*110,e=(Math.random()-.5)*110;t*t+e*e<350||_o(t,e,4)||Is(t,e,11)||oe.add(wM(t,e,.5+Math.random()*.7))}function Ad(i,t,e){const n=new $c(e,2),s=n.attributes.position;for(let a=0;a<s.count;a++)s.setX(a,s.getX(a)+(Math.random()-.5)*e*.35),s.setY(a,s.getY(a)*(.5+Math.random()*.3)+(Math.random()-.5)*e*.2),s.setZ(a,s.getZ(a)+(Math.random()-.5)*e*.35);n.computeVertexNormals();const o=.35+Math.random()*.2,r=new Z(n,new nt({color:new Zt(o,o*.95,o*.9),roughness:.95,metalness:.02}));r.position.set(i,gn(i,t)+e*.2,t),r.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*.5),r.castShadow=!le,oe.add(r)}for(let i=0;i<1;i+=.05){if(Math.random()>.6)continue;const t=ll(i),e=(Math.random()>.5?1:-1)*(2.5+Math.random()*2),n=t.x+e,s=t.y+(Math.random()-.5)*2;Is(n,s,1)||Ad(n,s,.4+Math.random()*.8)}for(let i=0;i<26;i++){const t=(Math.random()-.5)*100,e=(Math.random()-.5)*100;t*t+e*e<250||_o(t,e,3)||Is(t,e,1)||Ad(t,e,.4+Math.random()*1.2)}const EM=new Bt(.12,5,5),bM=[O.marigold,O.rose,16768324,O.saffron,O.jasmine,16729190,16755234];bM.forEach(i=>{const t=new nt({color:i,roughness:.5,emissive:i,emissiveIntensity:.06}),e=44,n=new fo(EM,t,e),s=new Ae;let o=0;for(let r=0;r<e;r++){const a=(Math.random()-.5)*90,c=(Math.random()-.5)*90;a*a+c*c<250||_o(a,c,3)||Is(a,c,.5)||(s.position.set(a,gn(a,c)+.25,c),s.scale.setScalar(.5+Math.random()*.8),s.updateMatrix(),n.setMatrixAt(o++,s.matrix))}n.count=o,oe.add(n)});const Rd=new be(.15,.6);Rd.translate(0,.3,0);const Cd=le?500:850,ul=new fo(Rd,new nt({color:3832366,roughness:.9,side:fe,alphaTest:.5}),Cd),Hs=new Ae;let Pd=0;for(let i=0;i<Cd;i++){const t=(Math.random()-.5)*100,e=(Math.random()-.5)*100;t*t+e*e<300||_o(t,e,2.5)||Is(t,e,.5)||(Hs.position.set(t,gn(t,e),e),Hs.rotation.y=Math.random()*Math.PI*2,Hs.scale.set(.8+Math.random()*.6,.6+Math.random()*1,1),Hs.updateMatrix(),ul.setMatrixAt(Pd++,Hs.matrix))}ul.count=Pd;oe.add(ul);function Gi(i,t,e,n){const s=new wt,o=new $t(n,e,8),r=o.attributes.position;for(let l=0;l<r.count;l++)r.setX(l,r.getX(l)+(Math.random()-.5)*n*.18),r.setZ(l,r.getZ(l)+(Math.random()-.5)*n*.18),r.getY(l)<e*.3&&r.setY(l,r.getY(l)+(Math.random()-.5)*e*.08);o.computeVertexNormals();const a=new Float32Array(r.count*3);for(let l=0;l<r.count;l++){const h=(r.getY(l)+e/2)/e,d=new Zt;h>.8?d.setHSL(0,0,.85+Math.random()*.1):h>.6?d.lerpColors(new Zt(5598062),new Zt(14544639),(h-.6)/.2):d.setHSL(.28,.3,.25+h*.15),a[l*3]=d.r,a[l*3+1]=d.g,a[l*3+2]=d.b}o.setAttribute("color",new se(a,3));const c=new Z(o,new nt({vertexColors:!0,roughness:.95,flatShading:!0}));c.position.set(i,e/2-5,t),c.castShadow=!le,s.add(c);for(let l=0;l<2;l++){const h=new $t(n*(.5+Math.random()*.3),e*(.5+Math.random()*.3),6),d=new Z(h,new nt({color:4872798,roughness:.95,flatShading:!0}));d.position.set(i+(Math.random()-.5)*n*.8,e*(.2+Math.random()*.15)-5,t+(Math.random()-.5)*n*.3),s.add(d)}oe.add(s)}Gi(-55,-75,45,22);Gi(-28,-85,55,28);Gi(5,-90,50,25);Gi(35,-80,42,20);Gi(60,-75,48,23);Gi(-70,-80,35,18);Gi(80,-70,38,19);function TM(i,t,e){const n=new wt,s=new Zt().setHSL(.07,.4,.75+Math.random()*.2),o=new nt({color:s,roughness:1,transparent:!0,opacity:.75,emissive:16737843,emissiveIntensity:.15});for(let r=0;r<5+Math.floor(Math.random()*5);r++){const a=new Z(new Bt(1.5+Math.random()*3,10,8),o);a.position.set((Math.random()-.5)*8,(Math.random()-.5)*1.5,(Math.random()-.5)*4),a.scale.y=.5+Math.random()*.2,n.add(a)}return n.position.set(i,t,e),n}const Ld=[];for(let i=0;i<6;i++){const t=TM((Math.random()-.5)*180,24+Math.random()*18,-40+(Math.random()-.5)*80);t.userData={baseY:t.position.y,driftSpeed:.36*(i%2===0?1:.7)},oe.add(t),Ld.push(t)}const Id=[];for(let i=0;i<5;i++){const t=new wt,e=new si({color:1710618,side:fe}),n=new Z(new be(1.2,.15),e);n.position.x=-.6,t.add(n);const s=new Z(new be(1.2,.15),e);s.position.x=.6,t.add(s),t.position.set(-40+Math.random()*30,30+Math.random()*14,-50+Math.random()*30),t.userData={phase:Math.random()*Math.PI*2,speed:.3+Math.random()*.5,baseY:t.position.y},oe.add(t),Id.push(t)}const Dd=[];for(let i=0;i<6;i++){const t=new wt,e=[O.marigold,16768324,O.rose,48340,O.gold][Math.floor(Math.random()*5)],n=new nt({color:e,side:fe,roughness:.3,emissive:e,emissiveIntensity:.12}),s=new Z(new be(.5,.35),n);s.position.x=-.25,t.add(s);const o=new Z(new be(.5,.35),n);o.position.x=.25,t.add(o),t.position.set(6+(Math.random()-.5)*40,3+Math.random()*5,-6+(Math.random()-.5)*40),t.userData={baseX:t.position.x,baseY:t.position.y,baseZ:t.position.z,phase:Math.random()*Math.PI*2,speed:.5+Math.random()},oe.add(t),Dd.push(t)}const AM=Kx({points:Vt.path.points,width:Vt.path.width,getHeight:gn,lift:vd});oe.add(AM);const Ud=md(3.2),jo=nn([-2,-30]);Ud.position.set(jo[0],on(jo[0],jo[1])+.02,jo[1]);oe.add(Ud);const Nd=md(2.4);Nd.position.set(14,on(14,44)+.02,44);oe.add(Nd);const ii=Vt.mandap,zr=go(ii.pos[0],ii.pos[1],3.7),kr=new Z(new Ct(7.35,12,7.35),new nt({color:O.cream,roughness:.9,metalness:.02}));kr.position.set(ii.pos[0],zr+.04-6,ii.pos[1]);kr.rotation.y=Or(ii.pos[0],ii.pos[1],Mr[0],Mr[1]);kr.receiveShadow=!0;oe.add(kr);Re(_x(),ii,{y:zr});const dl=new od(16743214,le?2:2.6,28,2);dl.position.set(ii.pos[0],zr+2.2,ii.pos[1]);oe.add(dl);const vo=new od(16756810,1.3,20,2);vo.position.set(Vt.horseGroom.pos[0],on(Vt.horseGroom.pos[0],Vt.horseGroom.pos[1])+3,Vt.horseGroom.pos[1]);oe.add(vo);Vt.toranGates.forEach(i=>Re(wx(),i,{footprint:3.2}));wd.forEach(i=>Re(bx(),{pos:i},{footprint:.9}));const Ua=as({pos:[-2,-25.5],faceToward:[-2,-20]});Re(Ex(),Ua,{y:on(Ua.pos[0],Ua.pos[1])+xd});function yi(i,t){return ar.push({wrap:i,locomotion:i.userData.locomotion,offset:t.offset||0,lane:t.lane||0,finalDistance:t.finalDistance,finalLane:t.finalLane??t.lane??0,faceCenter:!!t.faceCenter,bob:t.bob||0,pose:{},initialized:!1}),i}const RM=go(Vt.horseGroom.pos[0],Vt.horseGroom.pos[1],1.6)+mo,CM=Tx(),Pn=Re(CM,Vt.horseGroom,{y:RM});yi(Pn,{finalDistance:83,bob:.025});const Fd=Ax(),Ln=Re(Fd,Vt.bride,{y:on(Vt.bride.pos[0],Vt.bride.pos[1])+mo}),PM=Ln.rotation.y;Pn.add(vo);vo.position.set(0,3,0);const LM=go(Vt.elephant.pos[0],Vt.elephant.pos[1],3.9)+mo,Od=Rx(),Bd=Re(Od,Vt.elephant,{y:LM});yi(Bd,{offset:-8,finalDistance:59,bob:.018});const lo=iM("TEAM GROOM",{poleHeight:1});lo.group.position.set(0,3.18,-.55);Od.bannerMount.add(lo.group);ni.push(lo.update);const IM=[{offset:-1,lane:-2.4,finalDistance:81.5,finalLane:-2.4},{offset:-1,lane:2.4,finalDistance:81.5,finalLane:2.4},{offset:4,lane:-2.8,finalDistance:68,finalLane:-2.7,faceCenter:!0},{offset:4,lane:0,finalDistance:68,finalLane:0,faceCenter:!1},{offset:4,lane:2.8,finalDistance:68,finalLane:2.7,faceCenter:!0},{offset:-15,lane:-2.8,finalDistance:59,finalLane:-3.4},{offset:-15,lane:2.8,finalDistance:59,finalLane:3.4}],DM=Vt.attendants.map((i,t)=>Re(ud({item:i.item,phase:t*.7}),i));IM.forEach((i,t)=>yi(DM[t],i));const zd=Vt.groomMusicians.map((i,t)=>Re(ud({item:i.item,phase:3+t}),i));yi(zd[0],{offset:-3,lane:-2.2,finalDistance:78.5,finalLane:-1.8,faceCenter:!0});yi(zd[1],{offset:-3,lane:2.2,finalDistance:78.5,finalLane:1.8,faceCenter:!0});const UM=Vt.dancers.map((i,t)=>Re(fd({variant:i.variant,phase:t*.8}),{pos:i.pos,faceToward:Vt.horseGroom.pos})),NM=[{offset:7,lane:-3,finalDistance:64,finalLane:-4.4},{offset:7,lane:3,finalDistance:64,finalLane:4.4},{offset:12,lane:-3,finalDistance:72,finalLane:-4.4},{offset:12,lane:3,finalDistance:72,finalLane:4.4},{offset:15,lane:-3.7,finalDistance:80.5,finalLane:-4.4},{offset:15,lane:3.7,finalDistance:80.5,finalLane:4.4}];NM.forEach((i,t)=>yi(UM[t],{...i,faceCenter:!0}));Vt.brideDancers.forEach((i,t)=>Re(fd({variant:i.variant,phase:1+t}),i));Vt.guests.forEach((i,t)=>Re(il({variant:i.variant,phase:t*1.1}),i));const wr=il({variant:"throwing",phase:.5,gender:"male"}),fl=Re(wr,Vt.moneyThrower);yi(fl,{offset:-5,lane:-3.1,finalDistance:85,finalLane:-4.6,faceCenter:!0});const Di=eM({origin:[0,1.6,.35],ground:.05,count:le?26:44}),tu=new I,Vs=new I;Di.group.visible=!1;fl.add(Di.group);ni.push((i,t)=>{if(!Di.group.visible)return;const e=Math.max(0,i-Dr);if(e>10.2){Di.group.visible=!1,wr.setCelebrating(!1);return}wr.throwHand.getWorldPosition(tu),Vs.copy(tu),fl.worldToLocal(Vs),Di.setOrigin(Vs.x,Vs.y,Vs.z,.05),Di.update(e,t)});const kd=Re(il({variant:"cheering",phase:2.3,gender:"male"}),Vt.fireworkGuy);yi(kd,{offset:-5,lane:3.1,finalDistance:85,finalLane:4.6,faceCenter:!0});const gs=nM({origin:[0,1.6,0],rise:13,cycle:3.4});gs.group.visible=!1;kd.add(gs.group);ni.push(i=>{if(!gs.group.visible)return;const t=Math.max(0,i-Dr);if(t>9.4){gs.group.visible=!1;return}gs.update(t)});const eu=nn([-2,-30]),FM=on(eu[0],eu[1]);[-3.4,3.4].forEach(i=>{Re(Xx(),{pos:nn([-2+i,-30.4])})});for(let i=0;i<9;i++)Re(pd(),{pos:nn([-6+i,-29.6])});for(let i=0;i<5;i++){const t=i/4*Math.PI;Re(pd(),{pos:nn([-2+Math.cos(t)*3,-30+Math.sin(t)*3])})}Re(ol(),{pos:nn([-3.6,-29])});Re(ol(),{pos:nn([-.4,-29])});Re(ol(),{pos:nn([-2,-27.6])});const OM=[...[-2.6,2.6].map(i=>{const t=nn([-2+i,-30.2]);return{pos:t,y:on(t[0],t[1])+3.1}}),...Vt.toranGates.map(i=>({pos:i.pos,y:on(i.pos[0],i.pos[1])+3.6}))];OM.forEach(i=>Re(Vx(),{pos:i.pos},{y:i.y}));const pl=Wx(5.2,"mixed"),nu=nn([-2,-30.2]);pl.position.set(nu[0],FM+3,nu[1]);pl.rotation.y=Tc;oe.add(pl);const Er=Jx({area:Vt.petalArea,top:zr+16,getHeight:on});Re(Er,{pos:[0,0]},{y:0});const Cc=$x({origin:[cr.x,cr.y,cr.z],color:O.flame,count:le?6:8});oe.add(Cc.group);Cc.update&&ni.push(Cc.update);Vt.swans.forEach(i=>{const t=tM(i.phase),e=new wt;e.position.set(i.pos[0],.34,i.pos[1]),e.add(t.group),oe.add(e),ni.push(t.update)});const Gd=Qx($h.groom+" weds "+$h.bride,{radius:55,height:30,speed:.085});oe.add(Gd.group);ni.push(Gd.update);let cs=We.anchorStart;const Na={x:0,z:0};let Xs=0;function Jo(i){yr!==i&&(yr=i,ZM(i))}function BM(i){if(Ac)return;Ac=!0,Dr=i,Xs=0,wr.setCelebrating(!0),Di.group.visible=!0,gs.group.visible=!0,Er.burst((Pn.position.x+Ln.position.x)*.5,(Pn.position.z+Ln.position.z)*.5,8),jM();const t=document.getElementById("arrivalMoment");t&&(t.setAttribute("aria-hidden","false"),t.classList.add("show"),setTimeout(()=>{t.classList.remove("show"),t.setAttribute("aria-hidden","true")},5200))}function zM(i,t){let e=0;i<We.holdEnd?(cs=We.anchorStart,Ke=0,Jo("opening")):i<We.travelEnd?(e=bn((i-We.holdEnd)/(We.travelEnd-We.holdEnd)),cs=Pe.lerp(We.anchorStart,We.anchorEnd,e),Ke=0,Jo("procession")):i<We.arrivalEnd?(cs=We.anchorEnd,Ke=bn((i-We.travelEnd)/(We.arrivalEnd-We.travelEnd)),Jo("arrival")):(cs=We.anchorEnd,Ke=1,Jo("celebration"));const n=yr==="procession"||yr==="arrival";let s=0;for(let a=0;a<ar.length;a++){const c=ar[a],l=c.wrap.position.x,h=c.wrap.position.z,d=c.initialized,p=Ke>0?Pe.lerp(We.anchorEnd+c.offset,c.finalDistance,Ke):cs+c.offset,g=(Ke>0?Pe.lerp(c.lane,c.finalLane,Ke):c.lane)*_M(p);c.wrap===Bd&&(s=bn(yd(p)));const _=Sd(p,g,c.pose);let m=_.yaw;if(c.faceCenter&&Ke>.45){ms(p,Na);const v=Math.atan2(Na.x-_.x,Na.z-_.z);m=Da(m,v,bn((Ke-.45)/.55))}const u=n?1-Ke:0,M=c.bob?(Math.sin(i*(c===ar[0]?5.8:3.8)+a*.7)*.5+.5)*c.bob*u:0;if(c.wrap.position.set(_.x,_.y+M,_.z),c.locomotion){const v=d?Math.min(Math.hypot(_.x-l,_.z-h),.4):0,y=t>1e-4?v/t:0;c.locomotion.phase+=v*c.locomotion.gaitScale;const A=Pe.clamp(y/1.1,0,1),E=1-Math.exp(-8*Math.max(t,.001));c.locomotion.amount=Pe.lerp(c.locomotion.amount,A,E)}if(!c.initialized)c.wrap.rotation.y=m,c.initialized=!0;else{const v=1-Math.exp(-10*Math.max(t,.001));c.wrap.rotation.y=Da(c.wrap.rotation.y,m,v)}}lo.group.rotation.x=-s*1.4,lo.group.position.y=3.18-s*.1;const o=bn((Ke-.12)/.68),r=Or(Ln.position.x,Ln.position.z,Pn.position.x,Pn.position.z);Ln.rotation.y=Da(PM,r,o),Fd.setArrival(bn((Ke-.48)/.42)),!Ac&&Ke>=.72&&BM(i)}const kM=new I(...Vt.camera.introFrom),GM=new I(...Vt.camera.target),Pc=Vt.camera.introDurationSec;let iu=!0;const di=new I,fi=new I,su=new I,$o={},Fa={x:0,z:0},Oa={x:0,z:0},Hd=new I,Vd=new I;let ml=!1,Ys=1;const ou=26,Qo=[{at:0,angle:-.45,radius:24,height:14,elephant:0},{at:.18,angle:.95,radius:11.5,height:6.3,elephant:0},{at:.38,angle:2,radius:15,height:8.5,elephant:1},{at:.6,angle:2.65,radius:14,height:7.2,elephant:0},{at:.8,angle:4.2,radius:20,height:12.5,elephant:0},{at:1,angle:Math.PI*2-.45,radius:24,height:14,elephant:0}],os={angle:0,radius:0,height:0,elephant:0};let hr=0;function HM(i,t){let e=1;for(;e<Qo.length-1&&i>Qo[e].at;)e++;const n=Qo[e-1],s=Qo[e],o=bn((i-n.at)/(s.at-n.at));return t.angle=Pe.lerp(n.angle,s.angle,o),t.radius=Pe.lerp(n.radius,s.radius,o),t.height=Pe.lerp(n.height,s.height,o),t.elephant=Pe.lerp(n.elephant,s.elephant,o),t}ie.enablePan=!0;ie.screenSpacePanning=!1;ie.minPolarAngle=.05;ie.maxPolarAngle=Math.PI/2-.02;ie.minDistance=6;ie.maxDistance=150;ie.autoRotateSpeed=.35;let Gr=!1,Ts=0;const VM=4,Qn=document.getElementById("followBtn");function Wd(){Ur=!1,ml=!0,ie.autoRotate=!1,Ts=0,Qn==null||Qn.classList.add("show")}function WM(){Hd.copy(ke.position),Vd.copy(ie.target),Ys=0,hr=0,ml=!0,Ur=!0,Gr=!1,ie.autoRotate=!1,Ts=0,Qn==null||Qn.classList.remove("show")}function XM(i,t){const e=!ml&&i<Pc;e||(hr=(hr+Math.min(Math.max(t,0),.05))%ou),HM(hr/ou,os);const n=bn((Ke-.08)/.82),s=os.elephant*(1-n),o=Pe.lerp(4,1.5,n),r=Pe.lerp(cs+o,84,n)-s*8;if(Sd(r,0,$o),di.set($o.x,$o.y+2.35+s*1.2,$o.z),n>0){const u=(Pn.position.x+Ln.position.x)*.5,M=Math.max(Pn.position.y+2,Ln.position.y+1.4),v=(Pn.position.z+Ln.position.z)*.5;su.set(u,M,v),di.lerp(su,n)}ms(r-3,Fa),ms(r+3,Oa);let a=Oa.x-Fa.x,c=Oa.z-Fa.z;const l=Math.hypot(a,c)||1;a/=l,c/=l;const h=-c,d=a,p=1-Pe.smoothstep(ke.aspect,.65,.95),f=os.radius+p*3.5;let g=Math.sin(os.angle)*f*Pe.lerp(1,.88,p);const _=Math.cos(os.angle)*f;let m=os.height+p*2.2;if(g+=Math.sin(i*.28)*Pe.lerp(.16,.08,p),m+=Math.sin(i*.22+1.1)*.07,fi.set(di.x+h*g-a*_,di.y+m,di.z+d*g-c*_),fi.y=Math.max(fi.y,on(fi.x,fi.z)+2.4),e){const u=bn(i/Pc);ke.position.lerpVectors(kM,fi,u),ie.target.lerpVectors(GM,di,u)}else if(Ys<1){Ys=Math.min(1,Ys+Math.max(t,.001)/1.45);const u=bn(Ys);ke.position.lerpVectors(Hd,fi,u),ie.target.lerpVectors(Vd,di,u)}else{const u=Math.max(t,.001),M=1-Math.exp(-1.8*u),v=1-Math.exp(-3*u);ke.position.lerp(fi,M),ie.target.lerp(di,v)}ie.autoRotate=!1,ie.update()}const Xe=Object.create(null),gl=new Set(["KeyW","KeyA","KeyS","KeyD","KeyQ","KeyE","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space","ShiftLeft","ShiftRight"]);window.addEventListener("keydown",i=>{gl.has(i.code)&&(Wd(),Xe[i.code]=!0,(i.code==="Space"||i.code.startsWith("Arrow"))&&i.preventDefault())});window.addEventListener("keyup",i=>{gl.has(i.code)&&(Xe[i.code]=!1)});const pi=new I,Ba=new I,wn=new I;function YM(i){if(pi.subVectors(ie.target,ke.position),pi.y=0,pi.lengthSq()<1e-6||(pi.normalize(),Ba.set(-pi.z,0,pi.x),wn.set(0,0,0),(Xe.KeyW||Xe.ArrowUp)&&wn.add(pi),(Xe.KeyS||Xe.ArrowDown)&&wn.sub(pi),(Xe.KeyD||Xe.ArrowRight)&&wn.add(Ba),(Xe.KeyA||Xe.ArrowLeft)&&wn.sub(Ba),(Xe.KeyE||Xe.Space)&&(wn.y+=1),Xe.KeyQ&&(wn.y-=1),wn.lengthSq()===0))return;const t=Xe.ShiftLeft||Xe.ShiftRight?34:13;wn.normalize().multiplyScalar(t*i),ke.position.add(wn),ie.target.add(wn);const e=on(ke.position.x,ke.position.z)+1.5;if(ke.position.y<e){const n=e-ke.position.y;ke.position.y+=n,ie.target.y+=n}ie.autoRotate=!1,Ts=0,As&&As.classList.add("gone")}const ru=document.getElementById("loading"),As=document.getElementById("titlecard"),br=document.getElementById("hint"),_s=document.getElementById("interactionTip"),au=document.getElementById("interactionTipText");let vs=0,cu=!1,lu=!1,Lc=null,Xd=0;try{const i=sessionStorage.getItem("wedding-world-audio-intent"),t=JSON.parse(sessionStorage.getItem("wedding-world-audio-state")||"null");if(Lc=(t==null?void 0:t.intent)||i,Number.isFinite(Number(t==null?void 0:t.currentTime))){const e=Number.isFinite(Number(t==null?void 0:t.capturedAt))?Math.min(8,Math.max(0,(Date.now()-Number(t.capturedAt))/1e3)):0;Xd=Math.max(0,Number(t.currentTime)+e)}sessionStorage.removeItem("wedding-world-audio-intent"),sessionStorage.removeItem("wedding-world-audio-state")}catch{}function qM(){lu||(lu=!0,ru&&ru.classList.add("hidden"))}function xo(){_s&&(vs&&(clearTimeout(vs),vs=0),_s.classList.remove("show"),_s.setAttribute("aria-hidden","true"))}function Ic(i,t=3400){!le||!_s||!au||document.hidden||(vs&&clearTimeout(vs),au.textContent=i,_s.setAttribute("aria-hidden","false"),_s.classList.add("show"),vs=window.setTimeout(xo,t))}function KM(){le&&(window.setTimeout(()=>Ic("Drag one finger to look around",3200),7200),window.setTimeout(()=>Ic("Pinch with two fingers to move closer",3400),14500))}ie.addEventListener("start",()=>{Gr=!0,Wd(),As&&As.classList.add("gone"),br&&br.classList.add("gone"),xo()});ie.addEventListener("end",()=>{Gr=!1,Ts=0,le&&!cu&&(cu=!0,window.setTimeout(()=>{Ur||Ic("Tap Follow baraat to return to the cinematic",3600)},900))});sn.domElement.addEventListener("pointerdown",xo,{passive:!0});Qn==null||Qn.addEventListener("click",()=>{xo(),WM()});function Yd(){for(const i of gl)Xe[i]=!1}window.addEventListener("blur",Yd);document.addEventListener("visibilitychange",()=>{document.hidden&&(Yd(),xo())});const Tr=rM({button:document.getElementById("soundBtn"),initialTrackTime:Xd,pianoTrackUrl:aM});Lc==="play"?Tr.start():Lc==="muted"&&Tr.stayMuted();function ZM(i,t=!1){Tr.setPhase(i,t)}function jM(){Tr.playArrivalCue()}const JM=new rd;let hu=0;function $M(){const i=Math.min(JM.getDelta(),.05);hu+=i;const t=hu;Br.material.color.setHSL(.52,.55,.3+Math.sin(t*.3)*.03),co.material.opacity=.16+Math.sin(t*2)*.07,co.scale.x=1+Math.sin(t*1.5)*.2,Ld.forEach((o,r)=>{o.position.x+=o.userData.driftSpeed*i,o.position.x>100&&(o.position.x=-100),o.position.y=o.userData.baseY+Math.sin(t*.3+r)*.24}),Dd.forEach(o=>{const r=o.userData;o.position.x=r.baseX+Math.sin(t*r.speed+r.phase)*1.25,o.position.z=r.baseZ+Math.cos(t*r.speed*.87+r.phase)*1.05,o.position.y=r.baseY+Math.sin(t*2+r.phase)*.5,o.rotation.y=t*r.speed;const a=Math.sin(t*12+r.phase)*.6;o.children[0].rotation.y=a,o.children[1].rotation.y=-a}),Id.forEach(o=>{const r=o.userData;o.position.x+=r.speed*2*i,o.position.y=r.baseY+Math.sin(t*1.5+r.phase)*.35,o.position.x>60&&(o.position.x=-60);const a=Math.sin(t*4+r.phase)*.4;o.children[0].rotation.z=a,o.children[1].rotation.z=-a}),zM(t,i);const e=t-Dr;e>=1.65&&!(Xs&1)&&(Xs|=1,Er.burst(Pn.position.x,Pn.position.z,le?5.2:6.4)),e>=3.85&&!(Xs&2)&&(Xs|=2,Er.burst(Ln.position.x,Ln.position.z,le?4.8:5.8));const n=e>=0&&e<6.4?Math.sin(Math.PI*e/6.4):0,s=n>0?n*(.72+Math.pow(Math.sin(e*7.5),2)*.28):0;dl.intensity=(le?2:2.6)+Math.sin(t*9)*.25+Math.sin(t*23)*.12+s*(le?2.25:2.8),vo.intensity=1.3+s*(le?1.25:1.8),al.intensity=.45+s*.28,cl.intensity=.5+s*.34,_d.strength=.58+s*(le?.24:.46);for(let o=0;o<ni.length;o++)ni[o](t,i);Ur?XM(t,i):(YM(i),Gr||(Ts+=i,!le&&Ts>VM&&(ie.autoRotate=!0)),ie.update()),Ps.render(),iu&&(iu=!1,qM(),setTimeout(()=>{As&&As.classList.add("gone")},(Pc+2)*1e3),le?KM():setTimeout(()=>{br&&br.classList.add("gone")},14e3))}sn.setAnimationLoop($M);let za=0,uu=window.innerWidth,du=window.innerHeight;window.addEventListener("resize",()=>{za||(za=requestAnimationFrame(()=>{za=0;const i=window.innerWidth,t=window.innerHeight;if(!(i===uu&&t===du)&&(uu=i,du=t,ke.aspect=i/t,ke.updateProjectionMatrix(),sn.setSize(i,t),Ps.setSize(i,t),$s)){const e=sn.getPixelRatio();$s.uniforms.resolution.value.set(1/(i*e),1/(t*e))}}))});
