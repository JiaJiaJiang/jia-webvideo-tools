(function(){"use strict";try{if(typeof document<"u"){var a=document.createElement("style");a.appendChild(document.createTextNode("#jia-video-tool[data-v-703a244b]{position:fixed;border:1px solid #ccc;background-color:#999;border-radius:.3em}#jia-video-tool [opt][data-v-703a244b]{user-select:none;cursor:pointer;padding:0 .1em;vertical-align:middle}#jia-video-tool [opt][data-v-703a244b]:hover,#jia-video-tool [opt][actived=true][data-v-703a244b]{background-color:#333}#jia-video-tool>div[data-v-703a244b]{padding:.2em;display:flex}#jia-video-tool>div div[data-v-703a244b]{word-wrap:nowrap;word-break:keep-all;display:inline-block}#jia-video-tool #row2>input[data-v-703a244b]{width:4em}#jia-video-tool input[data-v-703a244b]{min-width:3em}#range_selector[data-v-703a244b]{border:2px dashed #6d8500;box-shadow:0 0 0 100vmax #000a;position:fixed;pointer-events:none}dialog[data-v-703a244b]{position:fixed;display:flex;padding:0;top:0;left:0;justify-content:center;border:0;max-width:100vw;max-height:100vh;align-items:center;width:100%;height:100%;background:#000000b4}dialog canvas[data-v-703a244b],dialog img[data-v-703a244b]{max-width:90%;max-height:90%;border:2px solid #000}.fadeLoop[data-v-703a244b]{animation:fadeLoop-703a244b 1s infinite}@keyframes fadeLoop-703a244b{0%{opacity:1}50%{opacity:0}to{opacity:1}}")),document.head.appendChild(a)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
var Us = {};
/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Cn(e, t) {
  const n = new Set(e.split(","));
  return t ? (r) => n.has(r.toLowerCase()) : (r) => n.has(r);
}
const tt = Us.NODE_ENV !== "production" ? Object.freeze({}) : {}, Er = Us.NODE_ENV !== "production" ? Object.freeze([]) : [], mt = () => {
}, tc = () => !1, Gr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), mi = (e) => e.startsWith("onUpdate:"), pt = Object.assign, Oo = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, nc = Object.prototype.hasOwnProperty, Ue = (e, t) => nc.call(e, t), be = Array.isArray, br = (e) => xi(e) === "[object Map]", rc = (e) => xi(e) === "[object Set]", xe = (e) => typeof e == "function", xt = (e) => typeof e == "string", Wr = (e) => typeof e == "symbol", ct = (e) => e !== null && typeof e == "object", xo = (e) => (ct(e) || xe(e)) && xe(e.then) && xe(e.catch), ic = Object.prototype.toString, xi = (e) => ic.call(e), Ao = (e) => xi(e).slice(8, -1), oc = (e) => xi(e) === "[object Object]", Do = (e) => xt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Ur = /* @__PURE__ */ Cn(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), sc = /* @__PURE__ */ Cn(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), Ai = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, lc = /-(\w)/g, Dr = Ai((e) => e.replace(lc, (t, n) => n ? n.toUpperCase() : "")), cc = /\B([A-Z])/g, Zn = Ai(
  (e) => e.replace(cc, "-$1").toLowerCase()
), Di = Ai((e) => e.charAt(0).toUpperCase() + e.slice(1)), ir = Ai((e) => e ? `on${Di(e)}` : ""), ur = (e, t) => !Object.is(e, t), wr = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, Ps = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, no = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Zo;
const So = () => Zo || (Zo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Kn(e) {
  if (be(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], i = xt(r) ? hc(r) : Kn(r);
      if (i)
        for (const o in i)
          t[o] = i[o];
    }
    return t;
  } else if (xt(e) || ct(e))
    return e;
}
const ac = /;(?![^(]*\))/g, fc = /:([^]+)/, uc = /\/\*[^]*?\*\//g;
function hc(e) {
  const t = {};
  return e.replace(uc, "").split(ac).forEach((n) => {
    if (n) {
      const r = n.split(fc);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function Vo(e) {
  let t = "";
  if (xt(e))
    t = e;
  else if (be(e))
    for (let n = 0; n < e.length; n++) {
      const r = Vo(e[n]);
      r && (t += r + " ");
    }
  else if (ct(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const dc = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", pc = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", gc = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", _c = /* @__PURE__ */ Cn(dc), wc = /* @__PURE__ */ Cn(pc), mc = /* @__PURE__ */ Cn(gc), vc = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", yc = /* @__PURE__ */ Cn(vc);
function $s(e) {
  return !!e || e === "";
}
var Dt = {};
function Xn(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let cn;
class Ec {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = cn, !t && cn && (this.index = (cn.scopes || (cn.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = cn;
      try {
        return cn = this, t();
      } finally {
        cn = n;
      }
    } else
      Dt.NODE_ENV !== "production" && Xn("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    cn = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    cn = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++)
        this.effects[n].stop();
      for (n = 0, r = this.cleanups.length; n < r; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, r = this.scopes.length; n < r; n++)
          this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const i = this.parent.scopes.pop();
        i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function bc(e, t = cn) {
  t && t.active && t.effects.push(e);
}
function Nc() {
  return cn;
}
let sr;
class Ro {
  constructor(t, n, r, i) {
    this.fn = t, this.trigger = n, this.scheduler = r, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, bc(this, i);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, In();
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t];
        if (n.computed && (Oc(n.computed), this._dirtyLevel >= 4))
          break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), Un();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let t = Yn, n = sr;
    try {
      return Yn = !0, sr = this, this._runnings++, Xo(this), this.fn();
    } finally {
      Qo(this), this._runnings--, sr = n, Yn = t;
    }
  }
  stop() {
    this.active && (Xo(this), Qo(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function Oc(e) {
  return e.value;
}
function Xo(e) {
  e._trackId++, e._depsLength = 0;
}
function Qo(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++)
      Fs(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function Fs(e, t) {
  const n = e.get(t);
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup());
}
let Yn = !0, ro = 0;
const Ls = [];
function In() {
  Ls.push(Yn), Yn = !1;
}
function Un() {
  const e = Ls.pop();
  Yn = e === void 0 ? !0 : e;
}
function To() {
  ro++;
}
function Mo() {
  for (ro--; !ro && io.length; )
    io.shift()();
}
function ks(e, t, n) {
  var r;
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const i = e.deps[e._depsLength];
    i !== t ? (i && Fs(i, e), e.deps[e._depsLength++] = t) : e._depsLength++, Dt.NODE_ENV !== "production" && ((r = e.onTrack) == null || r.call(e, pt({ effect: e }, n)));
  }
}
const io = [];
function js(e, t, n) {
  var r;
  To();
  for (const i of e.keys()) {
    let o;
    i._dirtyLevel < t && (o ?? (o = e.get(i) === i._trackId)) && (i._shouldSchedule || (i._shouldSchedule = i._dirtyLevel === 0), i._dirtyLevel = t), i._shouldSchedule && (o ?? (o = e.get(i) === i._trackId)) && (Dt.NODE_ENV !== "production" && ((r = i.onTrigger) == null || r.call(i, pt({ effect: i }, n))), i.trigger(), (!i._runnings || i.allowRecurse) && i._dirtyLevel !== 2 && (i._shouldSchedule = !1, i.scheduler && io.push(i.scheduler)));
  }
  Mo();
}
const Hs = (e, t) => {
  const n = /* @__PURE__ */ new Map();
  return n.cleanup = e, n.computed = t, n;
}, oo = /* @__PURE__ */ new WeakMap(), lr = Symbol(Dt.NODE_ENV !== "production" ? "iterate" : ""), so = Symbol(Dt.NODE_ENV !== "production" ? "Map key iterate" : "");
function $t(e, t, n) {
  if (Yn && sr) {
    let r = oo.get(e);
    r || oo.set(e, r = /* @__PURE__ */ new Map());
    let i = r.get(n);
    i || r.set(n, i = Hs(() => r.delete(n))), ks(
      sr,
      i,
      Dt.NODE_ENV !== "production" ? {
        target: e,
        type: t,
        key: n
      } : void 0
    );
  }
}
function En(e, t, n, r, i, o) {
  const c = oo.get(e);
  if (!c)
    return;
  let u = [];
  if (t === "clear")
    u = [...c.values()];
  else if (n === "length" && be(e)) {
    const f = Number(r);
    c.forEach((d, E) => {
      (E === "length" || !Wr(E) && E >= f) && u.push(d);
    });
  } else
    switch (n !== void 0 && u.push(c.get(n)), t) {
      case "add":
        be(e) ? Do(n) && u.push(c.get("length")) : (u.push(c.get(lr)), br(e) && u.push(c.get(so)));
        break;
      case "delete":
        be(e) || (u.push(c.get(lr)), br(e) && u.push(c.get(so)));
        break;
      case "set":
        br(e) && u.push(c.get(lr));
        break;
    }
  To();
  for (const f of u)
    f && js(
      f,
      4,
      Dt.NODE_ENV !== "production" ? {
        target: e,
        type: t,
        key: n,
        newValue: r,
        oldValue: i,
        oldTarget: o
      } : void 0
    );
  Mo();
}
const xc = /* @__PURE__ */ Cn("__proto__,__v_isRef,__isVue"), Bs = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Wr)
), es = /* @__PURE__ */ Ac();
function Ac() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const r = Ie(this);
      for (let o = 0, c = this.length; o < c; o++)
        $t(r, "get", o + "");
      const i = r[t](...n);
      return i === -1 || i === !1 ? r[t](...n.map(Ie)) : i;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      In(), To();
      const r = Ie(this)[t].apply(this, n);
      return Mo(), Un(), r;
    };
  }), e;
}
function Dc(e) {
  Wr(e) || (e = String(e));
  const t = Ie(this);
  return $t(t, "has", e), t.hasOwnProperty(e);
}
class Gs {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, r) {
    const i = this._isReadonly, o = this._isShallow;
    if (n === "__v_isReactive")
      return !i;
    if (n === "__v_isReadonly")
      return i;
    if (n === "__v_isShallow")
      return o;
    if (n === "__v_raw")
      return r === (i ? o ? Zs : Js : o ? Ys : qs).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const c = be(t);
    if (!i) {
      if (c && Ue(es, n))
        return Reflect.get(es, n, r);
      if (n === "hasOwnProperty")
        return Dc;
    }
    const u = Reflect.get(t, n, r);
    return (Wr(n) ? Bs.has(n) : xc(n)) || (i || $t(t, "get", n), o) ? u : Gt(u) ? c && Do(n) ? u : u.value : ct(u) ? i ? Xs(u) : Io(u) : u;
  }
}
class Ws extends Gs {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, i) {
    let o = t[n];
    if (!this._isShallow) {
      const f = Sr(o);
      if (!Or(r) && !Sr(r) && (o = Ie(o), r = Ie(r)), !be(t) && Gt(o) && !Gt(r))
        return f ? !1 : (o.value = r, !0);
    }
    const c = be(t) && Do(n) ? Number(n) < t.length : Ue(t, n), u = Reflect.set(t, n, r, i);
    return t === Ie(i) && (c ? ur(r, o) && En(t, "set", n, r, o) : En(t, "add", n, r)), u;
  }
  deleteProperty(t, n) {
    const r = Ue(t, n), i = t[n], o = Reflect.deleteProperty(t, n);
    return o && r && En(t, "delete", n, void 0, i), o;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!Wr(n) || !Bs.has(n)) && $t(t, "has", n), r;
  }
  ownKeys(t) {
    return $t(
      t,
      "iterate",
      be(t) ? "length" : lr
    ), Reflect.ownKeys(t);
  }
}
class zs extends Gs {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return Dt.NODE_ENV !== "production" && Xn(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return Dt.NODE_ENV !== "production" && Xn(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const Sc = /* @__PURE__ */ new Ws(), Vc = /* @__PURE__ */ new zs(), Rc = /* @__PURE__ */ new Ws(
  !0
), Tc = /* @__PURE__ */ new zs(!0), Co = (e) => e, Si = (e) => Reflect.getPrototypeOf(e);
function ni(e, t, n = !1, r = !1) {
  e = e.__v_raw;
  const i = Ie(e), o = Ie(t);
  n || (ur(t, o) && $t(i, "get", t), $t(i, "get", o));
  const { has: c } = Si(i), u = r ? Co : n ? Po : Uo;
  if (c.call(i, t))
    return u(e.get(t));
  if (c.call(i, o))
    return u(e.get(o));
  e !== i && e.get(t);
}
function ri(e, t = !1) {
  const n = this.__v_raw, r = Ie(n), i = Ie(e);
  return t || (ur(e, i) && $t(r, "has", e), $t(r, "has", i)), e === i ? n.has(e) : n.has(e) || n.has(i);
}
function ii(e, t = !1) {
  return e = e.__v_raw, !t && $t(Ie(e), "iterate", lr), Reflect.get(e, "size", e);
}
function ts(e) {
  e = Ie(e);
  const t = Ie(this);
  return Si(t).has.call(t, e) || (t.add(e), En(t, "add", e, e)), this;
}
function ns(e, t) {
  t = Ie(t);
  const n = Ie(this), { has: r, get: i } = Si(n);
  let o = r.call(n, e);
  o ? Dt.NODE_ENV !== "production" && Ks(n, r, e) : (e = Ie(e), o = r.call(n, e));
  const c = i.call(n, e);
  return n.set(e, t), o ? ur(t, c) && En(n, "set", e, t, c) : En(n, "add", e, t), this;
}
function rs(e) {
  const t = Ie(this), { has: n, get: r } = Si(t);
  let i = n.call(t, e);
  i ? Dt.NODE_ENV !== "production" && Ks(t, n, e) : (e = Ie(e), i = n.call(t, e));
  const o = r ? r.call(t, e) : void 0, c = t.delete(e);
  return i && En(t, "delete", e, void 0, o), c;
}
function is() {
  const e = Ie(this), t = e.size !== 0, n = Dt.NODE_ENV !== "production" ? br(e) ? new Map(e) : new Set(e) : void 0, r = e.clear();
  return t && En(e, "clear", void 0, void 0, n), r;
}
function oi(e, t) {
  return function(r, i) {
    const o = this, c = o.__v_raw, u = Ie(c), f = t ? Co : e ? Po : Uo;
    return !e && $t(u, "iterate", lr), c.forEach((d, E) => r.call(i, f(d), f(E), o));
  };
}
function si(e, t, n) {
  return function(...r) {
    const i = this.__v_raw, o = Ie(i), c = br(o), u = e === "entries" || e === Symbol.iterator && c, f = e === "keys" && c, d = i[e](...r), E = n ? Co : t ? Po : Uo;
    return !t && $t(
      o,
      "iterate",
      f ? so : lr
    ), {
      // iterator protocol
      next() {
        const { value: w, done: S } = d.next();
        return S ? { value: w, done: S } : {
          value: u ? [E(w[0]), E(w[1])] : E(w),
          done: S
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Hn(e) {
  return function(...t) {
    if (Dt.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      Xn(
        `${Di(e)} operation ${n}failed: target is readonly.`,
        Ie(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Mc() {
  const e = {
    get(o) {
      return ni(this, o);
    },
    get size() {
      return ii(this);
    },
    has: ri,
    add: ts,
    set: ns,
    delete: rs,
    clear: is,
    forEach: oi(!1, !1)
  }, t = {
    get(o) {
      return ni(this, o, !1, !0);
    },
    get size() {
      return ii(this);
    },
    has: ri,
    add: ts,
    set: ns,
    delete: rs,
    clear: is,
    forEach: oi(!1, !0)
  }, n = {
    get(o) {
      return ni(this, o, !0);
    },
    get size() {
      return ii(this, !0);
    },
    has(o) {
      return ri.call(this, o, !0);
    },
    add: Hn("add"),
    set: Hn("set"),
    delete: Hn("delete"),
    clear: Hn("clear"),
    forEach: oi(!0, !1)
  }, r = {
    get(o) {
      return ni(this, o, !0, !0);
    },
    get size() {
      return ii(this, !0);
    },
    has(o) {
      return ri.call(this, o, !0);
    },
    add: Hn("add"),
    set: Hn("set"),
    delete: Hn("delete"),
    clear: Hn("clear"),
    forEach: oi(!0, !0)
  };
  return [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((o) => {
    e[o] = si(o, !1, !1), n[o] = si(o, !0, !1), t[o] = si(o, !1, !0), r[o] = si(
      o,
      !0,
      !0
    );
  }), [
    e,
    n,
    t,
    r
  ];
}
const [
  Cc,
  Ic,
  Uc,
  Pc
] = /* @__PURE__ */ Mc();
function Vi(e, t) {
  const n = t ? e ? Pc : Uc : e ? Ic : Cc;
  return (r, i, o) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? r : Reflect.get(
    Ue(n, i) && i in r ? n : r,
    i,
    o
  );
}
const $c = {
  get: /* @__PURE__ */ Vi(!1, !1)
}, Fc = {
  get: /* @__PURE__ */ Vi(!1, !0)
}, Lc = {
  get: /* @__PURE__ */ Vi(!0, !1)
}, kc = {
  get: /* @__PURE__ */ Vi(!0, !0)
};
function Ks(e, t, n) {
  const r = Ie(n);
  if (r !== n && t.call(e, r)) {
    const i = Ao(e);
    Xn(
      `Reactive ${i} contains both the raw and reactive versions of the same object${i === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const qs = /* @__PURE__ */ new WeakMap(), Ys = /* @__PURE__ */ new WeakMap(), Js = /* @__PURE__ */ new WeakMap(), Zs = /* @__PURE__ */ new WeakMap();
function jc(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Hc(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : jc(Ao(e));
}
function Io(e) {
  return Sr(e) ? e : Ri(
    e,
    !1,
    Sc,
    $c,
    qs
  );
}
function Bc(e) {
  return Ri(
    e,
    !1,
    Rc,
    Fc,
    Ys
  );
}
function Xs(e) {
  return Ri(
    e,
    !0,
    Vc,
    Lc,
    Js
  );
}
function yn(e) {
  return Ri(
    e,
    !0,
    Tc,
    kc,
    Zs
  );
}
function Ri(e, t, n, r, i) {
  if (!ct(e))
    return Dt.NODE_ENV !== "production" && Xn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = i.get(e);
  if (o)
    return o;
  const c = Hc(e);
  if (c === 0)
    return e;
  const u = new Proxy(
    e,
    c === 2 ? r : n
  );
  return i.set(e, u), u;
}
function Nr(e) {
  return Sr(e) ? Nr(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Sr(e) {
  return !!(e && e.__v_isReadonly);
}
function Or(e) {
  return !!(e && e.__v_isShallow);
}
function lo(e) {
  return e ? !!e.__v_raw : !1;
}
function Ie(e) {
  const t = e && e.__v_raw;
  return t ? Ie(t) : e;
}
function Gc(e) {
  return Object.isExtensible(e) && Ps(e, "__v_skip", !0), e;
}
const Uo = (e) => ct(e) ? Io(e) : e, Po = (e) => ct(e) ? Xs(e) : e, Wc = "Computed is still dirty after getter evaluation, likely because a computed is mutating its own dependency in its getter. State mutations in computed getters should be avoided.  Check the docs for more details: https://vuejs.org/guide/essentials/computed.html#getters-should-be-side-effect-free";
class Qs {
  constructor(t, n, r, i) {
    this.getter = t, this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new Ro(
      () => t(this._value),
      () => ki(
        this,
        this.effect._dirtyLevel === 2 ? 2 : 3
      )
    ), this.effect.computed = this, this.effect.active = this._cacheable = !i, this.__v_isReadonly = r;
  }
  get value() {
    const t = Ie(this);
    return (!t._cacheable || t.effect.dirty) && ur(t._value, t._value = t.effect.run()) && ki(t, 4), Kc(t), t.effect._dirtyLevel >= 2 && (Dt.NODE_ENV !== "production" && this._warnRecursive && Xn(Wc, `

getter: `, this.getter), ki(t, 2)), t._value;
  }
  set value(t) {
    this._setter(t);
  }
  // #region polyfill _dirty for backward compatibility third party code for Vue <= 3.3.x
  get _dirty() {
    return this.effect.dirty;
  }
  set _dirty(t) {
    this.effect.dirty = t;
  }
  // #endregion
}
function zc(e, t, n = !1) {
  let r, i;
  const o = xe(e);
  o ? (r = e, i = Dt.NODE_ENV !== "production" ? () => {
    Xn("Write operation failed: computed value is readonly");
  } : mt) : (r = e.get, i = e.set);
  const c = new Qs(r, i, o || !i, n);
  return Dt.NODE_ENV !== "production" && t && !n && (c.effect.onTrack = t.onTrack, c.effect.onTrigger = t.onTrigger), c;
}
function Kc(e) {
  var t;
  Yn && sr && (e = Ie(e), ks(
    sr,
    (t = e.dep) != null ? t : e.dep = Hs(
      () => e.dep = void 0,
      e instanceof Qs ? e : void 0
    ),
    Dt.NODE_ENV !== "production" ? {
      target: e,
      type: "get",
      key: "value"
    } : void 0
  ));
}
function ki(e, t = 4, n) {
  e = Ie(e);
  const r = e.dep;
  r && js(
    r,
    t,
    Dt.NODE_ENV !== "production" ? {
      target: e,
      type: "set",
      key: "value",
      newValue: n
    } : void 0
  );
}
function Gt(e) {
  return !!(e && e.__v_isRef === !0);
}
function qc(e) {
  return Gt(e) ? e.value : e;
}
const Yc = {
  get: (e, t, n) => qc(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const i = e[t];
    return Gt(i) && !Gt(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function el(e) {
  return Nr(e) ? e : new Proxy(e, Yc);
}
var N = {};
const cr = [];
function fi(e) {
  cr.push(e);
}
function ui() {
  cr.pop();
}
function q(e, ...t) {
  In();
  const n = cr.length ? cr[cr.length - 1].component : null, r = n && n.appContext.config.warnHandler, i = Jc();
  if (r)
    Rn(
      r,
      n,
      11,
      [
        e + t.map((o) => {
          var c, u;
          return (u = (c = o.toString) == null ? void 0 : c.call(o)) != null ? u : JSON.stringify(o);
        }).join(""),
        n && n.proxy,
        i.map(
          ({ vnode: o }) => `at <${Pi(n, o.type)}>`
        ).join(`
`),
        i
      ]
    );
  else {
    const o = [`[Vue warn]: ${e}`, ...t];
    i.length && o.push(`
`, ...Zc(i)), console.warn(...o);
  }
  Un();
}
function Jc() {
  let e = cr[cr.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const r = e.component && e.component.parent;
    e = r && r.vnode;
  }
  return t;
}
function Zc(e) {
  const t = [];
  return e.forEach((n, r) => {
    t.push(...r === 0 ? [] : [`
`], ...Xc(n));
  }), t;
}
function Xc({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", r = e.component ? e.component.parent == null : !1, i = ` at <${Pi(
    e.component,
    e.type,
    r
  )}`, o = ">" + n;
  return e.props ? [i, ...Qc(e.props), o] : [i + o];
}
function Qc(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((r) => {
    t.push(...tl(r, e[r]));
  }), n.length > 3 && t.push(" ..."), t;
}
function tl(e, t, n) {
  return xt(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : Gt(t) ? (t = tl(e, Ie(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : xe(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = Ie(t), n ? t : [`${e}=`, t]);
}
const $o = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."
};
function Rn(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (i) {
    zr(i, t, n);
  }
}
function dn(e, t, n, r) {
  if (xe(e)) {
    const i = Rn(e, t, n, r);
    return i && xo(i) && i.catch((o) => {
      zr(o, t, n);
    }), i;
  }
  if (be(e)) {
    const i = [];
    for (let o = 0; o < e.length; o++)
      i.push(dn(e[o], t, n, r));
    return i;
  } else
    N.NODE_ENV !== "production" && q(
      `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
    );
}
function zr(e, t, n, r = !0) {
  const i = t ? t.vnode : null;
  if (t) {
    let o = t.parent;
    const c = t.proxy, u = N.NODE_ENV !== "production" ? $o[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; o; ) {
      const d = o.ec;
      if (d) {
        for (let E = 0; E < d.length; E++)
          if (d[E](e, c, u) === !1)
            return;
      }
      o = o.parent;
    }
    const f = t.appContext.config.errorHandler;
    if (f) {
      In(), Rn(
        f,
        null,
        10,
        [e, c, u]
      ), Un();
      return;
    }
  }
  ea(e, n, i, r);
}
function ea(e, t, n, r = !0) {
  if (N.NODE_ENV !== "production") {
    const i = $o[t];
    if (n && fi(n), q(`Unhandled error${i ? ` during execution of ${i}` : ""}`), n && ui(), r)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let kr = !1, co = !1;
const Ht = [];
let mn = 0;
const xr = [];
let Vn = null, Gn = 0;
const nl = /* @__PURE__ */ Promise.resolve();
let Fo = null;
const ta = 100;
function na(e) {
  const t = Fo || nl;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function ra(e) {
  let t = mn + 1, n = Ht.length;
  for (; t < n; ) {
    const r = t + n >>> 1, i = Ht[r], o = jr(i);
    o < e || o === e && i.pre ? t = r + 1 : n = r;
  }
  return t;
}
function Ti(e) {
  (!Ht.length || !Ht.includes(
    e,
    kr && e.allowRecurse ? mn + 1 : mn
  )) && (e.id == null ? Ht.push(e) : Ht.splice(ra(e.id), 0, e), rl());
}
function rl() {
  !kr && !co && (co = !0, Fo = nl.then(sl));
}
function ia(e) {
  const t = Ht.indexOf(e);
  t > mn && Ht.splice(t, 1);
}
function il(e) {
  be(e) ? xr.push(...e) : (!Vn || !Vn.includes(
    e,
    e.allowRecurse ? Gn + 1 : Gn
  )) && xr.push(e), rl();
}
function os(e, t, n = kr ? mn + 1 : 0) {
  for (N.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < Ht.length; n++) {
    const r = Ht[n];
    if (r && r.pre) {
      if (e && r.id !== e.uid || N.NODE_ENV !== "production" && Lo(t, r))
        continue;
      Ht.splice(n, 1), n--, r();
    }
  }
}
function ol(e) {
  if (xr.length) {
    const t = [...new Set(xr)].sort(
      (n, r) => jr(n) - jr(r)
    );
    if (xr.length = 0, Vn) {
      Vn.push(...t);
      return;
    }
    for (Vn = t, N.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Gn = 0; Gn < Vn.length; Gn++)
      N.NODE_ENV !== "production" && Lo(e, Vn[Gn]) || Vn[Gn]();
    Vn = null, Gn = 0;
  }
}
const jr = (e) => e.id == null ? 1 / 0 : e.id, oa = (e, t) => {
  const n = jr(e) - jr(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function sl(e) {
  co = !1, kr = !0, N.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Ht.sort(oa);
  const t = N.NODE_ENV !== "production" ? (n) => Lo(e, n) : mt;
  try {
    for (mn = 0; mn < Ht.length; mn++) {
      const n = Ht[mn];
      if (n && n.active !== !1) {
        if (N.NODE_ENV !== "production" && t(n))
          continue;
        Rn(n, null, 14);
      }
    }
  } finally {
    mn = 0, Ht.length = 0, ol(e), kr = !1, Fo = null, (Ht.length || xr.length) && sl(e);
  }
}
function Lo(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > ta) {
      const r = t.ownerInstance, i = r && Fl(r.type);
      return zr(
        `Maximum recursive updates exceeded${i ? ` in component <${i}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
        null,
        10
      ), !0;
    } else
      e.set(t, n + 1);
  }
}
let ar = !1;
const mr = /* @__PURE__ */ new Set();
N.NODE_ENV !== "production" && (So().__VUE_HMR_RUNTIME__ = {
  createRecord: ji(ll),
  rerender: ji(ca),
  reload: ji(aa)
});
const hr = /* @__PURE__ */ new Map();
function sa(e) {
  const t = e.type.__hmrId;
  let n = hr.get(t);
  n || (ll(t, e.type), n = hr.get(t)), n.instances.add(e);
}
function la(e) {
  hr.get(e.type.__hmrId).instances.delete(e);
}
function ll(e, t) {
  return hr.has(e) ? !1 : (hr.set(e, {
    initialDef: Pr(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Pr(e) {
  return Ll(e) ? e.__vccOpts : e;
}
function ca(e, t) {
  const n = hr.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((r) => {
    t && (r.render = t, Pr(r.type).render = t), r.renderCache = [], ar = !0, r.effect.dirty = !0, r.update(), ar = !1;
  }));
}
function aa(e, t) {
  const n = hr.get(e);
  if (!n)
    return;
  t = Pr(t), ss(n.initialDef, t);
  const r = [...n.instances];
  for (const i of r) {
    const o = Pr(i.type);
    mr.has(o) || (o !== n.initialDef && ss(o, t), mr.add(o)), i.appContext.propsCache.delete(i.type), i.appContext.emitsCache.delete(i.type), i.appContext.optionsCache.delete(i.type), i.ceReload ? (mr.add(o), i.ceReload(t.styles), mr.delete(o)) : i.parent ? (i.parent.effect.dirty = !0, Ti(i.parent.update)) : i.appContext.reload ? i.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  il(() => {
    for (const i of r)
      mr.delete(
        Pr(i.type)
      );
  });
}
function ss(e, t) {
  pt(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function ji(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (r) {
      console.error(r), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let vn, Mr = [], ao = !1;
function Kr(e, ...t) {
  vn ? vn.emit(e, ...t) : ao || Mr.push({ event: e, args: t });
}
function cl(e, t) {
  var n, r;
  vn = e, vn ? (vn.enabled = !0, Mr.forEach(({ event: i, args: o }) => vn.emit(i, ...o)), Mr = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !((r = (n = window.navigator) == null ? void 0 : n.userAgent) != null && r.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((o) => {
    cl(o, t);
  }), setTimeout(() => {
    vn || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, ao = !0, Mr = []);
  }, 3e3)) : (ao = !0, Mr = []);
}
function fa(e, t) {
  Kr("app:init", e, t, {
    Fragment: an,
    Text: qr,
    Comment: nn,
    Static: gi
  });
}
function ua(e) {
  Kr("app:unmount", e);
}
const ha = /* @__PURE__ */ ko(
  "component:added"
  /* COMPONENT_ADDED */
), al = /* @__PURE__ */ ko(
  "component:updated"
  /* COMPONENT_UPDATED */
), da = /* @__PURE__ */ ko(
  "component:removed"
  /* COMPONENT_REMOVED */
), pa = (e) => {
  vn && typeof vn.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !vn.cleanupBuffer(e) && da(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ko(e) {
  return (t) => {
    Kr(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const ga = /* @__PURE__ */ fl(
  "perf:start"
  /* PERFORMANCE_START */
), _a = /* @__PURE__ */ fl(
  "perf:end"
  /* PERFORMANCE_END */
);
function fl(e) {
  return (t, n, r) => {
    Kr(e, t.appContext.app, t.uid, t, n, r);
  };
}
function wa(e, t, n) {
  Kr(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
function ma(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const r = e.vnode.props || tt;
  if (N.NODE_ENV !== "production") {
    const {
      emitsOptions: E,
      propsOptions: [w]
    } = e;
    if (E)
      if (!(t in E))
        (!w || !(ir(t) in w)) && q(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${ir(t)}" prop.`
        );
      else {
        const S = E[t];
        xe(S) && (S(...n) || q(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let i = n;
  const o = t.startsWith("update:"), c = o && t.slice(7);
  if (c && c in r) {
    const E = `${c === "modelValue" ? "model" : c}Modifiers`, { number: w, trim: S } = r[E] || tt;
    S && (i = n.map((F) => xt(F) ? F.trim() : F)), w && (i = n.map(no));
  }
  if (N.NODE_ENV !== "production" && wa(e, t, i), N.NODE_ENV !== "production") {
    const E = t.toLowerCase();
    E !== t && r[ir(E)] && q(
      `Event "${E}" is emitted in component ${Pi(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Zn(
        t
      )}" instead of "${t}".`
    );
  }
  let u, f = r[u = ir(t)] || // also try camelCase event handler (#2249)
  r[u = ir(Dr(t))];
  !f && o && (f = r[u = ir(Zn(t))]), f && dn(
    f,
    e,
    6,
    i
  );
  const d = r[u + "Once"];
  if (d) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[u])
      return;
    e.emitted[u] = !0, dn(
      d,
      e,
      6,
      i
    );
  }
}
function ul(e, t, n = !1) {
  const r = t.emitsCache, i = r.get(e);
  if (i !== void 0)
    return i;
  const o = e.emits;
  let c = {}, u = !1;
  if (!xe(e)) {
    const f = (d) => {
      const E = ul(d, t, !0);
      E && (u = !0, pt(c, E));
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  return !o && !u ? (ct(e) && r.set(e, null), null) : (be(o) ? o.forEach((f) => c[f] = null) : pt(c, o), ct(e) && r.set(e, c), c);
}
function Mi(e, t) {
  return !e || !Gr(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Ue(e, t[0].toLowerCase() + t.slice(1)) || Ue(e, Zn(t)) || Ue(e, t));
}
let Bt = null, hl = null;
function vi(e) {
  const t = Bt;
  return Bt = e, hl = e && e.type.__scopeId || null, t;
}
function va(e, t = Bt, n) {
  if (!t || e._n)
    return e;
  const r = (...i) => {
    r._d && ms(-1);
    const o = vi(t);
    let c;
    try {
      c = e(...i);
    } finally {
      vi(o), r._d && ms(1);
    }
    return N.NODE_ENV !== "production" && al(t), c;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
let fo = !1;
function yi() {
  fo = !0;
}
function Hi(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: i,
    propsOptions: [o],
    slots: c,
    attrs: u,
    emit: f,
    render: d,
    renderCache: E,
    props: w,
    data: S,
    setupState: F,
    ctx: te,
    inheritAttrs: ae
  } = e, We = vi(e);
  let Ae, De;
  N.NODE_ENV !== "production" && (fo = !1);
  try {
    if (n.shapeFlag & 4) {
      const Ge = i || r, Ve = N.NODE_ENV !== "production" && F.__isScriptSetup ? new Proxy(Ge, {
        get(fe, Ne, ke) {
          return q(
            `Property '${String(
              Ne
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(fe, Ne, ke);
        }
      }) : Ge;
      Ae = fn(
        d.call(
          Ve,
          Ge,
          E,
          N.NODE_ENV !== "production" ? yn(w) : w,
          F,
          S,
          te
        )
      ), De = u;
    } else {
      const Ge = t;
      N.NODE_ENV !== "production" && u === w && yi(), Ae = fn(
        Ge.length > 1 ? Ge(
          N.NODE_ENV !== "production" ? yn(w) : w,
          N.NODE_ENV !== "production" ? {
            get attrs() {
              return yi(), yn(u);
            },
            slots: c,
            emit: f
          } : { attrs: u, slots: c, emit: f }
        ) : Ge(
          N.NODE_ENV !== "production" ? yn(w) : w,
          null
        )
      ), De = t.props ? u : ya(u);
    }
  } catch (Ge) {
    Fr.length = 0, zr(Ge, e, 1), Ae = Tn(nn);
  }
  let $e = Ae, He;
  if (N.NODE_ENV !== "production" && Ae.patchFlag > 0 && Ae.patchFlag & 2048 && ([$e, He] = dl(Ae)), De && ae !== !1) {
    const Ge = Object.keys(De), { shapeFlag: Ve } = $e;
    if (Ge.length) {
      if (Ve & 7)
        o && Ge.some(mi) && (De = Ea(
          De,
          o
        )), $e = Qn($e, De, !1, !0);
      else if (N.NODE_ENV !== "production" && !fo && $e.type !== nn) {
        const fe = Object.keys(u), Ne = [], ke = [];
        for (let ze = 0, nt = fe.length; ze < nt; ze++) {
          const St = fe[ze];
          Gr(St) ? mi(St) || Ne.push(St[2].toLowerCase() + St.slice(3)) : ke.push(St);
        }
        ke.length && q(
          `Extraneous non-props attributes (${ke.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`
        ), Ne.length && q(
          `Extraneous non-emits event listeners (${Ne.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (N.NODE_ENV !== "production" && !ls($e) && q(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), $e = Qn($e, null, !1, !0), $e.dirs = $e.dirs ? $e.dirs.concat(n.dirs) : n.dirs), n.transition && (N.NODE_ENV !== "production" && !ls($e) && q(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), $e.transition = n.transition), N.NODE_ENV !== "production" && He ? He($e) : Ae = $e, vi(We), Ae;
}
const dl = (e) => {
  const t = e.children, n = e.dynamicChildren, r = jo(t, !1);
  if (r) {
    if (N.NODE_ENV !== "production" && r.patchFlag > 0 && r.patchFlag & 2048)
      return dl(r);
  } else
    return [e, void 0];
  const i = t.indexOf(r), o = n ? n.indexOf(r) : -1, c = (u) => {
    t[i] = u, n && (o > -1 ? n[o] = u : u.patchFlag > 0 && (e.dynamicChildren = [...n, u]));
  };
  return [fn(r), c];
};
function jo(e, t = !0) {
  let n;
  for (let r = 0; r < e.length; r++) {
    const i = e[r];
    if (zo(i)) {
      if (i.type !== nn || i.children === "v-if") {
        if (n)
          return;
        if (n = i, N.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return jo(n.children);
      }
    } else
      return;
  }
  return n;
}
const ya = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Gr(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Ea = (e, t) => {
  const n = {};
  for (const r in e)
    (!mi(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
}, ls = (e) => e.shapeFlag & 7 || e.type === nn;
function ba(e, t, n) {
  const { props: r, children: i, component: o } = e, { props: c, children: u, patchFlag: f } = t, d = o.emitsOptions;
  if (N.NODE_ENV !== "production" && (i || u) && ar || t.dirs || t.transition)
    return !0;
  if (n && f >= 0) {
    if (f & 1024)
      return !0;
    if (f & 16)
      return r ? cs(r, c, d) : !!c;
    if (f & 8) {
      const E = t.dynamicProps;
      for (let w = 0; w < E.length; w++) {
        const S = E[w];
        if (c[S] !== r[S] && !Mi(d, S))
          return !0;
      }
    }
  } else
    return (i || u) && (!u || !u.$stable) ? !0 : r === c ? !1 : r ? c ? cs(r, c, d) : !0 : !!c;
  return !1;
}
function cs(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < r.length; i++) {
    const o = r[i];
    if (t[o] !== e[o] && !Mi(n, o))
      return !0;
  }
  return !1;
}
function Na({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const Oa = Symbol.for("v-ndc"), xa = (e) => e.__isSuspense;
function Aa(e, t) {
  t && t.pendingBranch ? be(e) ? t.effects.push(...e) : t.effects.push(e) : il(e);
}
const Da = Symbol.for("v-scx"), Sa = () => {
  {
    const e = di(Da);
    return e || N.NODE_ENV !== "production" && q(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
}, li = {};
function Bi(e, t, n) {
  return N.NODE_ENV !== "production" && !xe(t) && q(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), pl(e, t, n);
}
function pl(e, t, {
  immediate: n,
  deep: r,
  flush: i,
  once: o,
  onTrack: c,
  onTrigger: u
} = tt) {
  if (t && o) {
    const fe = t;
    t = (...Ne) => {
      fe(...Ne), Ve();
    };
  }
  N.NODE_ENV !== "production" && r !== void 0 && typeof r == "number" && q(
    'watch() "deep" option with number value will be used as watch depth in future versions. Please use a boolean instead to avoid potential breakage.'
  ), N.NODE_ENV !== "production" && !t && (n !== void 0 && q(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && q(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && q(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const f = (fe) => {
    q(
      "Invalid watch source: ",
      fe,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, d = It, E = (fe) => r === !0 ? fe : (
    // for deep: false, only traverse root-level properties
    or(fe, r === !1 ? 1 : void 0)
  );
  let w, S = !1, F = !1;
  if (Gt(e) ? (w = () => e.value, S = Or(e)) : Nr(e) ? (w = () => E(e), S = !0) : be(e) ? (F = !0, S = e.some((fe) => Nr(fe) || Or(fe)), w = () => e.map((fe) => {
    if (Gt(fe))
      return fe.value;
    if (Nr(fe))
      return E(fe);
    if (xe(fe))
      return Rn(fe, d, 2);
    N.NODE_ENV !== "production" && f(fe);
  })) : xe(e) ? t ? w = () => Rn(e, d, 2) : w = () => (te && te(), dn(
    e,
    d,
    3,
    [ae]
  )) : (w = mt, N.NODE_ENV !== "production" && f(e)), t && r) {
    const fe = w;
    w = () => or(fe());
  }
  let te, ae = (fe) => {
    te = He.onStop = () => {
      Rn(fe, d, 4), te = He.onStop = void 0;
    };
  }, We;
  if (Ii)
    if (ae = mt, t ? n && dn(t, d, 3, [
      w(),
      F ? [] : void 0,
      ae
    ]) : w(), i === "sync") {
      const fe = Sa();
      We = fe.__watcherHandles || (fe.__watcherHandles = []);
    } else
      return mt;
  let Ae = F ? new Array(e.length).fill(li) : li;
  const De = () => {
    if (!(!He.active || !He.dirty))
      if (t) {
        const fe = He.run();
        (r || S || (F ? fe.some((Ne, ke) => ur(Ne, Ae[ke])) : ur(fe, Ae))) && (te && te(), dn(t, d, 3, [
          fe,
          // pass undefined as the old value when it's changed for the first time
          Ae === li ? void 0 : F && Ae[0] === li ? [] : Ae,
          ae
        ]), Ae = fe);
      } else
        He.run();
  };
  De.allowRecurse = !!t;
  let $e;
  i === "sync" ? $e = De : i === "post" ? $e = () => en(De, d && d.suspense) : (De.pre = !0, d && (De.id = d.uid), $e = () => Ti(De));
  const He = new Ro(w, mt, $e), Ge = Nc(), Ve = () => {
    He.stop(), Ge && Oo(Ge.effects, He);
  };
  return N.NODE_ENV !== "production" && (He.onTrack = c, He.onTrigger = u), t ? n ? De() : Ae = He.run() : i === "post" ? en(
    He.run.bind(He),
    d && d.suspense
  ) : He.run(), We && We.push(Ve), Ve;
}
function Va(e, t, n) {
  const r = this.proxy, i = xt(e) ? e.includes(".") ? gl(r, e) : () => r[e] : e.bind(r, r);
  let o;
  xe(t) ? o = t : (o = t.handler, n = t);
  const c = Yr(this), u = pl(i, o.bind(r), n);
  return c(), u;
}
function gl(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let i = 0; i < n.length && r; i++)
      r = r[n[i]];
    return r;
  };
}
function or(e, t = 1 / 0, n) {
  if (t <= 0 || !ct(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, Gt(e))
    or(e.value, t, n);
  else if (be(e))
    for (let r = 0; r < e.length; r++)
      or(e[r], t, n);
  else if (rc(e) || br(e))
    e.forEach((r) => {
      or(r, t, n);
    });
  else if (oc(e))
    for (const r in e)
      or(e[r], t, n);
  return e;
}
function _l(e) {
  sc(e) && q("Do not use built-in directive ids as custom directive id: " + e);
}
function Qt(e, t) {
  if (Bt === null)
    return N.NODE_ENV !== "production" && q("withDirectives can only be used inside render functions."), e;
  const n = Ui(Bt) || Bt.proxy, r = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [o, c, u, f = tt] = t[i];
    o && (xe(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && or(c), r.push({
      dir: o,
      instance: n,
      value: c,
      oldValue: void 0,
      arg: u,
      modifiers: f
    }));
  }
  return e;
}
function tr(e, t, n, r) {
  const i = e.dirs, o = t && t.dirs;
  for (let c = 0; c < i.length; c++) {
    const u = i[c];
    o && (u.oldValue = o[c].value);
    let f = u.dir[r];
    f && (In(), dn(f, n, 8, [
      e.el,
      u,
      e,
      t
    ]), Un());
  }
}
const hi = (e) => !!e.type.__asyncLoader, Ho = (e) => e.type.__isKeepAlive;
function Ra(e, t) {
  wl(e, "a", t);
}
function Ta(e, t) {
  wl(e, "da", t);
}
function wl(e, t, n = It) {
  const r = e.__wdc || (e.__wdc = () => {
    let i = n;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (Ci(t, r, n), n) {
    let i = n.parent;
    for (; i && i.parent; )
      Ho(i.parent.vnode) && Ma(r, t, n, i), i = i.parent;
  }
}
function Ma(e, t, n, r) {
  const i = Ci(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  ml(() => {
    Oo(r[t], i);
  }, n);
}
function Ci(e, t, n = It, r = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...c) => {
      if (n.isUnmounted)
        return;
      In();
      const u = Yr(n), f = dn(t, n, e, c);
      return u(), Un(), f;
    });
    return r ? i.unshift(o) : i.push(o), o;
  } else if (N.NODE_ENV !== "production") {
    const i = ir($o[e].replace(/ hook$/, ""));
    q(
      `${i} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Pn = (e) => (t, n = It) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!Ii || e === "sp") && Ci(e, (...r) => t(...r), n)
), Ca = Pn("bm"), Ia = Pn("m"), Ua = Pn("bu"), Pa = Pn("u"), $a = Pn("bum"), ml = Pn("um"), Fa = Pn("sp"), La = Pn(
  "rtg"
), ka = Pn(
  "rtc"
);
function ja(e, t = It) {
  Ci("ec", e, t);
}
const uo = (e) => e ? Pl(e) ? Ui(e) || e.proxy : uo(e.parent) : null, fr = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ pt(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => N.NODE_ENV !== "production" ? yn(e.props) : e.props,
    $attrs: (e) => N.NODE_ENV !== "production" ? yn(e.attrs) : e.attrs,
    $slots: (e) => N.NODE_ENV !== "production" ? yn(e.slots) : e.slots,
    $refs: (e) => N.NODE_ENV !== "production" ? yn(e.refs) : e.refs,
    $parent: (e) => uo(e.parent),
    $root: (e) => uo(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Go(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      e.effect.dirty = !0, Ti(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = na.bind(e.proxy)),
    $watch: (e) => Va.bind(e)
  })
), Bo = (e) => e === "_" || e === "$", Gi = (e, t) => e !== tt && !e.__isScriptSetup && Ue(e, t), vl = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: i, props: o, accessCache: c, type: u, appContext: f } = e;
    if (N.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let d;
    if (t[0] !== "$") {
      const F = c[t];
      if (F !== void 0)
        switch (F) {
          case 1:
            return r[t];
          case 2:
            return i[t];
          case 4:
            return n[t];
          case 3:
            return o[t];
        }
      else {
        if (Gi(r, t))
          return c[t] = 1, r[t];
        if (i !== tt && Ue(i, t))
          return c[t] = 2, i[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (d = e.propsOptions[0]) && Ue(d, t)
        )
          return c[t] = 3, o[t];
        if (n !== tt && Ue(n, t))
          return c[t] = 4, n[t];
        ho && (c[t] = 0);
      }
    }
    const E = fr[t];
    let w, S;
    if (E)
      return t === "$attrs" ? ($t(e.attrs, "get", ""), N.NODE_ENV !== "production" && yi()) : N.NODE_ENV !== "production" && t === "$slots" && $t(e, "get", t), E(e);
    if (
      // css module (injected by vue-loader)
      (w = u.__cssModules) && (w = w[t])
    )
      return w;
    if (n !== tt && Ue(n, t))
      return c[t] = 4, n[t];
    if (
      // global properties
      S = f.config.globalProperties, Ue(S, t)
    )
      return S[t];
    N.NODE_ENV !== "production" && Bt && (!xt(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (i !== tt && Bo(t[0]) && Ue(i, t) ? q(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === Bt && q(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: i, ctx: o } = e;
    return Gi(i, t) ? (i[t] = n, !0) : N.NODE_ENV !== "production" && i.__isScriptSetup && Ue(i, t) ? (q(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : r !== tt && Ue(r, t) ? (r[t] = n, !0) : Ue(e.props, t) ? (N.NODE_ENV !== "production" && q(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (N.NODE_ENV !== "production" && q(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (N.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(o, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: i, propsOptions: o }
  }, c) {
    let u;
    return !!n[c] || e !== tt && Ue(e, c) || Gi(t, c) || (u = o[0]) && Ue(u, c) || Ue(r, c) || Ue(fr, c) || Ue(i.config.globalProperties, c);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Ue(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
N.NODE_ENV !== "production" && (vl.ownKeys = (e) => (q(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function Ha(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(fr).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => fr[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: mt
    });
  }), t;
}
function Ba(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((r) => {
    Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[r],
      set: mt
    });
  });
}
function Ga(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(Ie(n)).forEach((r) => {
    if (!n.__isScriptSetup) {
      if (Bo(r[0])) {
        q(
          `setup() return property ${JSON.stringify(
            r
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, r, {
        enumerable: !0,
        configurable: !0,
        get: () => n[r],
        set: mt
      });
    }
  });
}
function as(e) {
  return be(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Wa() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? q(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let ho = !0;
function za(e) {
  const t = Go(e), n = e.proxy, r = e.ctx;
  ho = !1, t.beforeCreate && fs(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: o,
    methods: c,
    watch: u,
    provide: f,
    inject: d,
    // lifecycle
    created: E,
    beforeMount: w,
    mounted: S,
    beforeUpdate: F,
    updated: te,
    activated: ae,
    deactivated: We,
    beforeDestroy: Ae,
    beforeUnmount: De,
    destroyed: $e,
    unmounted: He,
    render: Ge,
    renderTracked: Ve,
    renderTriggered: fe,
    errorCaptured: Ne,
    serverPrefetch: ke,
    // public API
    expose: ze,
    inheritAttrs: nt,
    // assets
    components: St,
    directives: $n,
    filters: dr
  } = t, qt = N.NODE_ENV !== "production" ? Wa() : null;
  if (N.NODE_ENV !== "production") {
    const [Ce] = e.propsOptions;
    if (Ce)
      for (const Te in Ce)
        qt("Props", Te);
  }
  if (d && Ka(d, r, qt), c)
    for (const Ce in c) {
      const Te = c[Ce];
      xe(Te) ? (N.NODE_ENV !== "production" ? Object.defineProperty(r, Ce, {
        value: Te.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : r[Ce] = Te.bind(n), N.NODE_ENV !== "production" && qt("Methods", Ce)) : N.NODE_ENV !== "production" && q(
        `Method "${Ce}" has type "${typeof Te}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (i) {
    N.NODE_ENV !== "production" && !xe(i) && q(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const Ce = i.call(n, n);
    if (N.NODE_ENV !== "production" && xo(Ce) && q(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !ct(Ce))
      N.NODE_ENV !== "production" && q("data() should return an object.");
    else if (e.data = Io(Ce), N.NODE_ENV !== "production")
      for (const Te in Ce)
        qt("Data", Te), Bo(Te[0]) || Object.defineProperty(r, Te, {
          configurable: !0,
          enumerable: !0,
          get: () => Ce[Te],
          set: mt
        });
  }
  if (ho = !0, o)
    for (const Ce in o) {
      const Te = o[Ce], Ft = xe(Te) ? Te.bind(n, n) : xe(Te.get) ? Te.get.bind(n, n) : mt;
      N.NODE_ENV !== "production" && Ft === mt && q(`Computed property "${Ce}" has no getter.`);
      const ln = !xe(Te) && xe(Te.set) ? Te.set.bind(n) : N.NODE_ENV !== "production" ? () => {
        q(
          `Write operation failed: computed property "${Ce}" is readonly.`
        );
      } : mt, Ut = Uf({
        get: Ft,
        set: ln
      });
      Object.defineProperty(r, Ce, {
        enumerable: !0,
        configurable: !0,
        get: () => Ut.value,
        set: (Yt) => Ut.value = Yt
      }), N.NODE_ENV !== "production" && qt("Computed", Ce);
    }
  if (u)
    for (const Ce in u)
      yl(u[Ce], r, n, Ce);
  if (f) {
    const Ce = xe(f) ? f.call(n) : f;
    Reflect.ownKeys(Ce).forEach((Te) => {
      Qa(Te, Ce[Te]);
    });
  }
  E && fs(E, e, "c");
  function Ye(Ce, Te) {
    be(Te) ? Te.forEach((Ft) => Ce(Ft.bind(n))) : Te && Ce(Te.bind(n));
  }
  if (Ye(Ca, w), Ye(Ia, S), Ye(Ua, F), Ye(Pa, te), Ye(Ra, ae), Ye(Ta, We), Ye(ja, Ne), Ye(ka, Ve), Ye(La, fe), Ye($a, De), Ye(ml, He), Ye(Fa, ke), be(ze))
    if (ze.length) {
      const Ce = e.exposed || (e.exposed = {});
      ze.forEach((Te) => {
        Object.defineProperty(Ce, Te, {
          get: () => n[Te],
          set: (Ft) => n[Te] = Ft
        });
      });
    } else
      e.exposed || (e.exposed = {});
  Ge && e.render === mt && (e.render = Ge), nt != null && (e.inheritAttrs = nt), St && (e.components = St), $n && (e.directives = $n);
}
function Ka(e, t, n = mt) {
  be(e) && (e = po(e));
  for (const r in e) {
    const i = e[r];
    let o;
    ct(i) ? "default" in i ? o = di(
      i.from || r,
      i.default,
      !0
    ) : o = di(i.from || r) : o = di(i), Gt(o) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (c) => o.value = c
    }) : t[r] = o, N.NODE_ENV !== "production" && n("Inject", r);
  }
}
function fs(e, t, n) {
  dn(
    be(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function yl(e, t, n, r) {
  const i = r.includes(".") ? gl(n, r) : () => n[r];
  if (xt(e)) {
    const o = t[e];
    xe(o) ? Bi(i, o) : N.NODE_ENV !== "production" && q(`Invalid watch handler specified by key "${e}"`, o);
  } else if (xe(e))
    Bi(i, e.bind(n));
  else if (ct(e))
    if (be(e))
      e.forEach((o) => yl(o, t, n, r));
    else {
      const o = xe(e.handler) ? e.handler.bind(n) : t[e.handler];
      xe(o) ? Bi(i, o, e) : N.NODE_ENV !== "production" && q(`Invalid watch handler specified by key "${e.handler}"`, o);
    }
  else
    N.NODE_ENV !== "production" && q(`Invalid watch option: "${r}"`, e);
}
function Go(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: i,
    optionsCache: o,
    config: { optionMergeStrategies: c }
  } = e.appContext, u = o.get(t);
  let f;
  return u ? f = u : !i.length && !n && !r ? f = t : (f = {}, i.length && i.forEach(
    (d) => Ei(f, d, c, !0)
  ), Ei(f, t, c)), ct(t) && o.set(t, f), f;
}
function Ei(e, t, n, r = !1) {
  const { mixins: i, extends: o } = t;
  o && Ei(e, o, n, !0), i && i.forEach(
    (c) => Ei(e, c, n, !0)
  );
  for (const c in t)
    if (r && c === "expose")
      N.NODE_ENV !== "production" && q(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const u = qa[c] || n && n[c];
      e[c] = u ? u(e[c], t[c]) : t[c];
    }
  return e;
}
const qa = {
  data: us,
  props: hs,
  emits: hs,
  // objects
  methods: Cr,
  computed: Cr,
  // lifecycle
  beforeCreate: Kt,
  created: Kt,
  beforeMount: Kt,
  mounted: Kt,
  beforeUpdate: Kt,
  updated: Kt,
  beforeDestroy: Kt,
  beforeUnmount: Kt,
  destroyed: Kt,
  unmounted: Kt,
  activated: Kt,
  deactivated: Kt,
  errorCaptured: Kt,
  serverPrefetch: Kt,
  // assets
  components: Cr,
  directives: Cr,
  // watch
  watch: Ja,
  // provide / inject
  provide: us,
  inject: Ya
};
function us(e, t) {
  return t ? e ? function() {
    return pt(
      xe(e) ? e.call(this, this) : e,
      xe(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Ya(e, t) {
  return Cr(po(e), po(t));
}
function po(e) {
  if (be(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Kt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Cr(e, t) {
  return e ? pt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function hs(e, t) {
  return e ? be(e) && be(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : pt(
    /* @__PURE__ */ Object.create(null),
    as(e),
    as(t ?? {})
  ) : t;
}
function Ja(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = pt(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = Kt(e[r], t[r]);
  return n;
}
function El() {
  return {
    app: null,
    config: {
      isNativeTag: tc,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let Za = 0;
function Xa(e, t) {
  return function(r, i = null) {
    xe(r) || (r = pt({}, r)), i != null && !ct(i) && (N.NODE_ENV !== "production" && q("root props passed to app.mount() must be an object."), i = null);
    const o = El(), c = /* @__PURE__ */ new WeakSet();
    let u = !1;
    const f = o.app = {
      _uid: Za++,
      _component: r,
      _props: i,
      _container: null,
      _context: o,
      _instance: null,
      version: bs,
      get config() {
        return o.config;
      },
      set config(d) {
        N.NODE_ENV !== "production" && q(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(d, ...E) {
        return c.has(d) ? N.NODE_ENV !== "production" && q("Plugin has already been applied to target app.") : d && xe(d.install) ? (c.add(d), d.install(f, ...E)) : xe(d) ? (c.add(d), d(f, ...E)) : N.NODE_ENV !== "production" && q(
          'A plugin must either be a function or an object with an "install" function.'
        ), f;
      },
      mixin(d) {
        return o.mixins.includes(d) ? N.NODE_ENV !== "production" && q(
          "Mixin has already been applied to target app" + (d.name ? `: ${d.name}` : "")
        ) : o.mixins.push(d), f;
      },
      component(d, E) {
        return N.NODE_ENV !== "production" && yo(d, o.config), E ? (N.NODE_ENV !== "production" && o.components[d] && q(`Component "${d}" has already been registered in target app.`), o.components[d] = E, f) : o.components[d];
      },
      directive(d, E) {
        return N.NODE_ENV !== "production" && _l(d), E ? (N.NODE_ENV !== "production" && o.directives[d] && q(`Directive "${d}" has already been registered in target app.`), o.directives[d] = E, f) : o.directives[d];
      },
      mount(d, E, w) {
        if (u)
          N.NODE_ENV !== "production" && q(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          N.NODE_ENV !== "production" && d.__vue_app__ && q(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const S = Tn(r, i);
          return S.appContext = o, w === !0 ? w = "svg" : w === !1 && (w = void 0), N.NODE_ENV !== "production" && (o.reload = () => {
            e(
              Qn(S),
              d,
              w
            );
          }), E && t ? t(S, d) : e(S, d, w), u = !0, f._container = d, d.__vue_app__ = f, N.NODE_ENV !== "production" && (f._instance = S.component, fa(f, bs)), Ui(S.component) || S.component.proxy;
        }
      },
      unmount() {
        u ? (e(null, f._container), N.NODE_ENV !== "production" && (f._instance = null, ua(f)), delete f._container.__vue_app__) : N.NODE_ENV !== "production" && q("Cannot unmount an app that is not mounted.");
      },
      provide(d, E) {
        return N.NODE_ENV !== "production" && d in o.provides && q(
          `App already provides property with key "${String(d)}". It will be overwritten with the new value.`
        ), o.provides[d] = E, f;
      },
      runWithContext(d) {
        const E = $r;
        $r = f;
        try {
          return d();
        } finally {
          $r = E;
        }
      }
    };
    return f;
  };
}
let $r = null;
function Qa(e, t) {
  if (!It)
    N.NODE_ENV !== "production" && q("provide() can only be used inside setup().");
  else {
    let n = It.provides;
    const r = It.parent && It.parent.provides;
    r === n && (n = It.provides = Object.create(r)), n[e] = t;
  }
}
function di(e, t, n = !1) {
  const r = It || Bt;
  if (r || $r) {
    const i = r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : $r._context.provides;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && xe(t) ? t.call(r && r.proxy) : t;
    N.NODE_ENV !== "production" && q(`injection "${String(e)}" not found.`);
  } else
    N.NODE_ENV !== "production" && q("inject() can only be used inside setup() or functional components.");
}
const bl = {}, Nl = () => Object.create(bl), Ol = (e) => Object.getPrototypeOf(e) === bl;
function ef(e, t, n, r = !1) {
  const i = {}, o = Nl();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), xl(e, t, i, o);
  for (const c in e.propsOptions[0])
    c in i || (i[c] = void 0);
  N.NODE_ENV !== "production" && Dl(t || {}, i, e), n ? e.props = r ? i : Bc(i) : e.type.props ? e.props = i : e.props = o, e.attrs = o;
}
function tf(e) {
  for (; e; ) {
    if (e.type.__hmrId)
      return !0;
    e = e.parent;
  }
}
function nf(e, t, n, r) {
  const {
    props: i,
    attrs: o,
    vnode: { patchFlag: c }
  } = e, u = Ie(i), [f] = e.propsOptions;
  let d = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(N.NODE_ENV !== "production" && tf(e)) && (r || c > 0) && !(c & 16)
  ) {
    if (c & 8) {
      const E = e.vnode.dynamicProps;
      for (let w = 0; w < E.length; w++) {
        let S = E[w];
        if (Mi(e.emitsOptions, S))
          continue;
        const F = t[S];
        if (f)
          if (Ue(o, S))
            F !== o[S] && (o[S] = F, d = !0);
          else {
            const te = Dr(S);
            i[te] = go(
              f,
              u,
              te,
              F,
              e,
              !1
            );
          }
        else
          F !== o[S] && (o[S] = F, d = !0);
      }
    }
  } else {
    xl(e, t, i, o) && (d = !0);
    let E;
    for (const w in u)
      (!t || // for camelCase
      !Ue(t, w) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((E = Zn(w)) === w || !Ue(t, E))) && (f ? n && // for camelCase
      (n[w] !== void 0 || // for kebab-case
      n[E] !== void 0) && (i[w] = go(
        f,
        u,
        w,
        void 0,
        e,
        !0
      )) : delete i[w]);
    if (o !== u)
      for (const w in o)
        (!t || !Ue(t, w)) && (delete o[w], d = !0);
  }
  d && En(e.attrs, "set", ""), N.NODE_ENV !== "production" && Dl(t || {}, i, e);
}
function xl(e, t, n, r) {
  const [i, o] = e.propsOptions;
  let c = !1, u;
  if (t)
    for (let f in t) {
      if (Ur(f))
        continue;
      const d = t[f];
      let E;
      i && Ue(i, E = Dr(f)) ? !o || !o.includes(E) ? n[E] = d : (u || (u = {}))[E] = d : Mi(e.emitsOptions, f) || (!(f in r) || d !== r[f]) && (r[f] = d, c = !0);
    }
  if (o) {
    const f = Ie(n), d = u || tt;
    for (let E = 0; E < o.length; E++) {
      const w = o[E];
      n[w] = go(
        i,
        f,
        w,
        d[w],
        e,
        !Ue(d, w)
      );
    }
  }
  return c;
}
function go(e, t, n, r, i, o) {
  const c = e[n];
  if (c != null) {
    const u = Ue(c, "default");
    if (u && r === void 0) {
      const f = c.default;
      if (c.type !== Function && !c.skipFactory && xe(f)) {
        const { propsDefaults: d } = i;
        if (n in d)
          r = d[n];
        else {
          const E = Yr(i);
          r = d[n] = f.call(
            null,
            t
          ), E();
        }
      } else
        r = f;
    }
    c[
      0
      /* shouldCast */
    ] && (o && !u ? r = !1 : c[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === Zn(n)) && (r = !0));
  }
  return r;
}
function Al(e, t, n = !1) {
  const r = t.propsCache, i = r.get(e);
  if (i)
    return i;
  const o = e.props, c = {}, u = [];
  let f = !1;
  if (!xe(e)) {
    const E = (w) => {
      f = !0;
      const [S, F] = Al(w, t, !0);
      pt(c, S), F && u.push(...F);
    };
    !n && t.mixins.length && t.mixins.forEach(E), e.extends && E(e.extends), e.mixins && e.mixins.forEach(E);
  }
  if (!o && !f)
    return ct(e) && r.set(e, Er), Er;
  if (be(o))
    for (let E = 0; E < o.length; E++) {
      N.NODE_ENV !== "production" && !xt(o[E]) && q("props must be strings when using array syntax.", o[E]);
      const w = Dr(o[E]);
      ds(w) && (c[w] = tt);
    }
  else if (o) {
    N.NODE_ENV !== "production" && !ct(o) && q("invalid props options", o);
    for (const E in o) {
      const w = Dr(E);
      if (ds(w)) {
        const S = o[E], F = c[w] = be(S) || xe(S) ? { type: S } : pt({}, S);
        if (F) {
          const te = gs(Boolean, F.type), ae = gs(String, F.type);
          F[
            0
            /* shouldCast */
          ] = te > -1, F[
            1
            /* shouldCastTrue */
          ] = ae < 0 || te < ae, (te > -1 || Ue(F, "default")) && u.push(w);
        }
      }
    }
  }
  const d = [c, u];
  return ct(e) && r.set(e, d), d;
}
function ds(e) {
  return e[0] !== "$" && !Ur(e) ? !0 : (N.NODE_ENV !== "production" && q(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function _o(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function ps(e, t) {
  return _o(e) === _o(t);
}
function gs(e, t) {
  return be(t) ? t.findIndex((n) => ps(n, e)) : xe(t) && ps(t, e) ? 0 : -1;
}
function Dl(e, t, n) {
  const r = Ie(t), i = n.propsOptions[0];
  for (const o in i) {
    let c = i[o];
    c != null && rf(
      o,
      r[o],
      c,
      N.NODE_ENV !== "production" ? yn(r) : r,
      !Ue(e, o) && !Ue(e, Zn(o))
    );
  }
}
function rf(e, t, n, r, i) {
  const { type: o, required: c, validator: u, skipCheck: f } = n;
  if (c && i) {
    q('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !c)) {
    if (o != null && o !== !0 && !f) {
      let d = !1;
      const E = be(o) ? o : [o], w = [];
      for (let S = 0; S < E.length && !d; S++) {
        const { valid: F, expectedType: te } = sf(t, E[S]);
        w.push(te || ""), d = F;
      }
      if (!d) {
        q(lf(e, t, w));
        return;
      }
    }
    u && !u(t, r) && q('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const of = /* @__PURE__ */ Cn(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function sf(e, t) {
  let n;
  const r = _o(t);
  if (of(r)) {
    const i = typeof e;
    n = i === r.toLowerCase(), !n && i === "object" && (n = e instanceof t);
  } else
    r === "Object" ? n = ct(e) : r === "Array" ? n = be(e) : r === "null" ? n = e === null : n = e instanceof t;
  return {
    valid: n,
    expectedType: r
  };
}
function lf(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let r = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(Di).join(" | ")}`;
  const i = n[0], o = Ao(t), c = _s(t, i), u = _s(t, o);
  return n.length === 1 && ws(i) && !cf(i, o) && (r += ` with value ${c}`), r += `, got ${o} `, ws(o) && (r += `with value ${u}.`), r;
}
function _s(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function ws(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function cf(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const Sl = (e) => e[0] === "_" || e === "$stable", Wo = (e) => be(e) ? e.map(fn) : [fn(e)], af = (e, t, n) => {
  if (t._n)
    return t;
  const r = va((...i) => (N.NODE_ENV !== "production" && It && (!n || n.root === It.root) && q(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Wo(t(...i))), n);
  return r._c = !1, r;
}, Vl = (e, t, n) => {
  const r = e._ctx;
  for (const i in e) {
    if (Sl(i))
      continue;
    const o = e[i];
    if (xe(o))
      t[i] = af(i, o, r);
    else if (o != null) {
      N.NODE_ENV !== "production" && q(
        `Non-function value encountered for slot "${i}". Prefer function slots for better performance.`
      );
      const c = Wo(o);
      t[i] = () => c;
    }
  }
}, Rl = (e, t) => {
  N.NODE_ENV !== "production" && !Ho(e.vnode) && q(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = Wo(t);
  e.slots.default = () => n;
}, ff = (e, t) => {
  const n = e.slots = Nl();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (pt(n, t), Ps(n, "_", r, !0)) : Vl(t, n);
  } else
    t && Rl(e, t);
}, uf = (e, t, n) => {
  const { vnode: r, slots: i } = e;
  let o = !0, c = tt;
  if (r.shapeFlag & 32) {
    const u = t._;
    u ? N.NODE_ENV !== "production" && ar ? (pt(i, t), En(e, "set", "$slots")) : n && u === 1 ? o = !1 : (pt(i, t), !n && u === 1 && delete i._) : (o = !t.$stable, Vl(t, i)), c = t;
  } else
    t && (Rl(e, t), c = { default: 1 });
  if (o)
    for (const u in i)
      !Sl(u) && c[u] == null && delete i[u];
};
function wo(e, t, n, r, i = !1) {
  if (be(e)) {
    e.forEach(
      (S, F) => wo(
        S,
        t && (be(t) ? t[F] : t),
        n,
        r,
        i
      )
    );
    return;
  }
  if (hi(r) && !i)
    return;
  const o = r.shapeFlag & 4 ? Ui(r.component) || r.component.proxy : r.el, c = i ? null : o, { i: u, r: f } = e;
  if (N.NODE_ENV !== "production" && !u) {
    q(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const d = t && t.r, E = u.refs === tt ? u.refs = {} : u.refs, w = u.setupState;
  if (d != null && d !== f && (xt(d) ? (E[d] = null, Ue(w, d) && (w[d] = null)) : Gt(d) && (d.value = null)), xe(f))
    Rn(f, u, 12, [c, E]);
  else {
    const S = xt(f), F = Gt(f);
    if (S || F) {
      const te = () => {
        if (e.f) {
          const ae = S ? Ue(w, f) ? w[f] : E[f] : f.value;
          i ? be(ae) && Oo(ae, o) : be(ae) ? ae.includes(o) || ae.push(o) : S ? (E[f] = [o], Ue(w, f) && (w[f] = E[f])) : (f.value = [o], e.k && (E[e.k] = f.value));
        } else
          S ? (E[f] = c, Ue(w, f) && (w[f] = c)) : F ? (f.value = c, e.k && (E[e.k] = c)) : N.NODE_ENV !== "production" && q("Invalid template ref type:", f, `(${typeof f})`);
      };
      c ? (te.id = -1, en(te, n)) : te();
    } else
      N.NODE_ENV !== "production" && q("Invalid template ref type:", f, `(${typeof f})`);
  }
}
let Vr, qn;
function Dn(e, t) {
  e.appContext.config.performance && bi() && qn.mark(`vue-${t}-${e.uid}`), N.NODE_ENV !== "production" && ga(e, t, bi() ? qn.now() : Date.now());
}
function Sn(e, t) {
  if (e.appContext.config.performance && bi()) {
    const n = `vue-${t}-${e.uid}`, r = n + ":end";
    qn.mark(r), qn.measure(
      `<${Pi(e, e.type)}> ${t}`,
      n,
      r
    ), qn.clearMarks(n), qn.clearMarks(r);
  }
  N.NODE_ENV !== "production" && _a(e, t, bi() ? qn.now() : Date.now());
}
function bi() {
  return Vr !== void 0 || (typeof window < "u" && window.performance ? (Vr = !0, qn = window.performance) : Vr = !1), Vr;
}
function hf() {
  const e = [];
  if (N.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const en = Aa;
function df(e) {
  return pf(e);
}
function pf(e, t) {
  hf();
  const n = So();
  n.__VUE__ = !0, N.NODE_ENV !== "production" && cl(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: r,
    remove: i,
    patchProp: o,
    createElement: c,
    createText: u,
    createComment: f,
    setText: d,
    setElementText: E,
    parentNode: w,
    nextSibling: S,
    setScopeId: F = mt,
    insertStaticContent: te
  } = e, ae = (p, v, R, C = null, I = null, H = null, K = void 0, B = null, z = N.NODE_ENV !== "production" && ar ? !1 : !!v.dynamicChildren) => {
    if (p === v)
      return;
    p && !Rr(p, v) && (C = Je(p), Jt(p, I, H, !0), p = null), v.patchFlag === -2 && (z = !1, v.dynamicChildren = null);
    const { type: U, ref: Z, shapeFlag: ue } = v;
    switch (U) {
      case qr:
        We(p, v, R, C);
        break;
      case nn:
        Ae(p, v, R, C);
        break;
      case gi:
        p == null ? De(v, R, C, K) : N.NODE_ENV !== "production" && $e(p, v, R, K);
        break;
      case an:
        $n(
          p,
          v,
          R,
          C,
          I,
          H,
          K,
          B,
          z
        );
        break;
      default:
        ue & 1 ? Ve(
          p,
          v,
          R,
          C,
          I,
          H,
          K,
          B,
          z
        ) : ue & 6 ? dr(
          p,
          v,
          R,
          C,
          I,
          H,
          K,
          B,
          z
        ) : ue & 64 || ue & 128 ? U.process(
          p,
          v,
          R,
          C,
          I,
          H,
          K,
          B,
          z,
          On
        ) : N.NODE_ENV !== "production" && q("Invalid VNode type:", U, `(${typeof U})`);
    }
    Z != null && I && wo(Z, p && p.ref, H, v || p, !v);
  }, We = (p, v, R, C) => {
    if (p == null)
      r(
        v.el = u(v.children),
        R,
        C
      );
    else {
      const I = v.el = p.el;
      v.children !== p.children && d(I, v.children);
    }
  }, Ae = (p, v, R, C) => {
    p == null ? r(
      v.el = f(v.children || ""),
      R,
      C
    ) : v.el = p.el;
  }, De = (p, v, R, C) => {
    [p.el, p.anchor] = te(
      p.children,
      v,
      R,
      C,
      p.el,
      p.anchor
    );
  }, $e = (p, v, R, C) => {
    if (v.children !== p.children) {
      const I = S(p.anchor);
      Ge(p), [v.el, v.anchor] = te(
        v.children,
        R,
        I,
        C
      );
    } else
      v.el = p.el, v.anchor = p.anchor;
  }, He = ({ el: p, anchor: v }, R, C) => {
    let I;
    for (; p && p !== v; )
      I = S(p), r(p, R, C), p = I;
    r(v, R, C);
  }, Ge = ({ el: p, anchor: v }) => {
    let R;
    for (; p && p !== v; )
      R = S(p), i(p), p = R;
    i(v);
  }, Ve = (p, v, R, C, I, H, K, B, z) => {
    v.type === "svg" ? K = "svg" : v.type === "math" && (K = "mathml"), p == null ? fe(
      v,
      R,
      C,
      I,
      H,
      K,
      B,
      z
    ) : ze(
      p,
      v,
      I,
      H,
      K,
      B,
      z
    );
  }, fe = (p, v, R, C, I, H, K, B) => {
    let z, U;
    const { props: Z, shapeFlag: ue, transition: ie, dirs: _e } = p;
    if (z = p.el = c(
      p.type,
      H,
      Z && Z.is,
      Z
    ), ue & 8 ? E(z, p.children) : ue & 16 && ke(
      p.children,
      z,
      null,
      C,
      I,
      Wi(p, H),
      K,
      B
    ), _e && tr(p, null, C, "created"), Ne(z, p, p.scopeId, K, C), Z) {
      for (const Fe in Z)
        Fe !== "value" && !Ur(Fe) && o(
          z,
          Fe,
          null,
          Z[Fe],
          H,
          p.children,
          C,
          I,
          Lt
        );
      "value" in Z && o(z, "value", null, Z.value, H), (U = Z.onVnodeBeforeMount) && wn(U, C, p);
    }
    N.NODE_ENV !== "production" && (Object.defineProperty(z, "__vnode", {
      value: p,
      enumerable: !1
    }), Object.defineProperty(z, "__vueParentComponent", {
      value: C,
      enumerable: !1
    })), _e && tr(p, null, C, "beforeMount");
    const Se = gf(I, ie);
    Se && ie.beforeEnter(z), r(z, v, R), ((U = Z && Z.onVnodeMounted) || Se || _e) && en(() => {
      U && wn(U, C, p), Se && ie.enter(z), _e && tr(p, null, C, "mounted");
    }, I);
  }, Ne = (p, v, R, C, I) => {
    if (R && F(p, R), C)
      for (let H = 0; H < C.length; H++)
        F(p, C[H]);
    if (I) {
      let H = I.subTree;
      if (N.NODE_ENV !== "production" && H.patchFlag > 0 && H.patchFlag & 2048 && (H = jo(H.children) || H), v === H) {
        const K = I.vnode;
        Ne(
          p,
          K,
          K.scopeId,
          K.slotScopeIds,
          I.parent
        );
      }
    }
  }, ke = (p, v, R, C, I, H, K, B, z = 0) => {
    for (let U = z; U < p.length; U++) {
      const Z = p[U] = B ? Wn(p[U]) : fn(p[U]);
      ae(
        null,
        Z,
        v,
        R,
        C,
        I,
        H,
        K,
        B
      );
    }
  }, ze = (p, v, R, C, I, H, K) => {
    const B = v.el = p.el;
    let { patchFlag: z, dynamicChildren: U, dirs: Z } = v;
    z |= p.patchFlag & 16;
    const ue = p.props || tt, ie = v.props || tt;
    let _e;
    if (R && nr(R, !1), (_e = ie.onVnodeBeforeUpdate) && wn(_e, R, v, p), Z && tr(v, p, R, "beforeUpdate"), R && nr(R, !0), N.NODE_ENV !== "production" && ar && (z = 0, K = !1, U = null), U ? (nt(
      p.dynamicChildren,
      U,
      B,
      R,
      C,
      Wi(v, I),
      H
    ), N.NODE_ENV !== "production" && pi(p, v)) : K || Ft(
      p,
      v,
      B,
      null,
      R,
      C,
      Wi(v, I),
      H,
      !1
    ), z > 0) {
      if (z & 16)
        St(
          B,
          v,
          ue,
          ie,
          R,
          C,
          I
        );
      else if (z & 2 && ue.class !== ie.class && o(B, "class", null, ie.class, I), z & 4 && o(B, "style", ue.style, ie.style, I), z & 8) {
        const Se = v.dynamicProps;
        for (let Fe = 0; Fe < Se.length; Fe++) {
          const Ke = Se[Fe], Pe = ue[Ke], qe = ie[Ke];
          (qe !== Pe || Ke === "value") && o(
            B,
            Ke,
            Pe,
            qe,
            I,
            p.children,
            R,
            C,
            Lt
          );
        }
      }
      z & 1 && p.children !== v.children && E(B, v.children);
    } else
      !K && U == null && St(
        B,
        v,
        ue,
        ie,
        R,
        C,
        I
      );
    ((_e = ie.onVnodeUpdated) || Z) && en(() => {
      _e && wn(_e, R, v, p), Z && tr(v, p, R, "updated");
    }, C);
  }, nt = (p, v, R, C, I, H, K) => {
    for (let B = 0; B < v.length; B++) {
      const z = p[B], U = v[B], Z = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        z.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (z.type === an || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Rr(z, U) || // - In the case of a component, it could contain anything.
        z.shapeFlag & 70) ? w(z.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          R
        )
      );
      ae(
        z,
        U,
        Z,
        null,
        C,
        I,
        H,
        K,
        !0
      );
    }
  }, St = (p, v, R, C, I, H, K) => {
    if (R !== C) {
      if (R !== tt)
        for (const B in R)
          !Ur(B) && !(B in C) && o(
            p,
            B,
            R[B],
            null,
            K,
            v.children,
            I,
            H,
            Lt
          );
      for (const B in C) {
        if (Ur(B))
          continue;
        const z = C[B], U = R[B];
        z !== U && B !== "value" && o(
          p,
          B,
          U,
          z,
          K,
          v.children,
          I,
          H,
          Lt
        );
      }
      "value" in C && o(p, "value", R.value, C.value, K);
    }
  }, $n = (p, v, R, C, I, H, K, B, z) => {
    const U = v.el = p ? p.el : u(""), Z = v.anchor = p ? p.anchor : u("");
    let { patchFlag: ue, dynamicChildren: ie, slotScopeIds: _e } = v;
    N.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (ar || ue & 2048) && (ue = 0, z = !1, ie = null), _e && (B = B ? B.concat(_e) : _e), p == null ? (r(U, R, C), r(Z, R, C), ke(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      v.children || [],
      R,
      Z,
      I,
      H,
      K,
      B,
      z
    )) : ue > 0 && ue & 64 && ie && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    p.dynamicChildren ? (nt(
      p.dynamicChildren,
      ie,
      R,
      I,
      H,
      K,
      B
    ), N.NODE_ENV !== "production" ? pi(p, v) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (v.key != null || I && v === I.subTree) && pi(
        p,
        v,
        !0
        /* shallow */
      )
    )) : Ft(
      p,
      v,
      R,
      Z,
      I,
      H,
      K,
      B,
      z
    );
  }, dr = (p, v, R, C, I, H, K, B, z) => {
    v.slotScopeIds = B, p == null ? v.shapeFlag & 512 ? I.ctx.activate(
      v,
      R,
      C,
      K,
      z
    ) : qt(
      v,
      R,
      C,
      I,
      H,
      K,
      z
    ) : Ye(p, v, z);
  }, qt = (p, v, R, C, I, H, K) => {
    const B = p.component = xf(
      p,
      C,
      I
    );
    if (N.NODE_ENV !== "production" && B.type.__hmrId && sa(B), N.NODE_ENV !== "production" && (fi(p), Dn(B, "mount")), Ho(p) && (B.ctx.renderer = On), N.NODE_ENV !== "production" && Dn(B, "init"), Sf(B), N.NODE_ENV !== "production" && Sn(B, "init"), B.asyncDep) {
      if (I && I.registerDep(B, Ce), !p.el) {
        const z = B.subTree = Tn(nn);
        Ae(null, z, v, R);
      }
    } else
      Ce(
        B,
        p,
        v,
        R,
        I,
        H,
        K
      );
    N.NODE_ENV !== "production" && (ui(), Sn(B, "mount"));
  }, Ye = (p, v, R) => {
    const C = v.component = p.component;
    if (ba(p, v, R))
      if (C.asyncDep && !C.asyncResolved) {
        N.NODE_ENV !== "production" && fi(v), Te(C, v, R), N.NODE_ENV !== "production" && ui();
        return;
      } else
        C.next = v, ia(C.update), C.effect.dirty = !0, C.update();
    else
      v.el = p.el, C.vnode = v;
  }, Ce = (p, v, R, C, I, H, K) => {
    const B = () => {
      if (p.isMounted) {
        let { next: Z, bu: ue, u: ie, parent: _e, vnode: Se } = p;
        {
          const Zt = Tl(p);
          if (Zt) {
            Z && (Z.el = Se.el, Te(p, Z, K)), Zt.asyncDep.then(() => {
              p.isUnmounted || B();
            });
            return;
          }
        }
        let Fe = Z, Ke;
        N.NODE_ENV !== "production" && fi(Z || p.vnode), nr(p, !1), Z ? (Z.el = Se.el, Te(p, Z, K)) : Z = Se, ue && wr(ue), (Ke = Z.props && Z.props.onVnodeBeforeUpdate) && wn(Ke, _e, Z, Se), nr(p, !0), N.NODE_ENV !== "production" && Dn(p, "render");
        const Pe = Hi(p);
        N.NODE_ENV !== "production" && Sn(p, "render");
        const qe = p.subTree;
        p.subTree = Pe, N.NODE_ENV !== "production" && Dn(p, "patch"), ae(
          qe,
          Pe,
          // parent may have changed if it's in a teleport
          w(qe.el),
          // anchor may have changed if it's in a fragment
          Je(qe),
          p,
          I,
          H
        ), N.NODE_ENV !== "production" && Sn(p, "patch"), Z.el = Pe.el, Fe === null && Na(p, Pe.el), ie && en(ie, I), (Ke = Z.props && Z.props.onVnodeUpdated) && en(
          () => wn(Ke, _e, Z, Se),
          I
        ), N.NODE_ENV !== "production" && al(p), N.NODE_ENV !== "production" && ui();
      } else {
        let Z;
        const { el: ue, props: ie } = v, { bm: _e, m: Se, parent: Fe } = p, Ke = hi(v);
        if (nr(p, !1), _e && wr(_e), !Ke && (Z = ie && ie.onVnodeBeforeMount) && wn(Z, Fe, v), nr(p, !0), ue && pn) {
          const Pe = () => {
            N.NODE_ENV !== "production" && Dn(p, "render"), p.subTree = Hi(p), N.NODE_ENV !== "production" && Sn(p, "render"), N.NODE_ENV !== "production" && Dn(p, "hydrate"), pn(
              ue,
              p.subTree,
              p,
              I,
              null
            ), N.NODE_ENV !== "production" && Sn(p, "hydrate");
          };
          Ke ? v.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !p.isUnmounted && Pe()
          ) : Pe();
        } else {
          N.NODE_ENV !== "production" && Dn(p, "render");
          const Pe = p.subTree = Hi(p);
          N.NODE_ENV !== "production" && Sn(p, "render"), N.NODE_ENV !== "production" && Dn(p, "patch"), ae(
            null,
            Pe,
            R,
            C,
            p,
            I,
            H
          ), N.NODE_ENV !== "production" && Sn(p, "patch"), v.el = Pe.el;
        }
        if (Se && en(Se, I), !Ke && (Z = ie && ie.onVnodeMounted)) {
          const Pe = v;
          en(
            () => wn(Z, Fe, Pe),
            I
          );
        }
        (v.shapeFlag & 256 || Fe && hi(Fe.vnode) && Fe.vnode.shapeFlag & 256) && p.a && en(p.a, I), p.isMounted = !0, N.NODE_ENV !== "production" && ha(p), v = R = C = null;
      }
    }, z = p.effect = new Ro(
      B,
      mt,
      () => Ti(U),
      p.scope
      // track it in component's effect scope
    ), U = p.update = () => {
      z.dirty && z.run();
    };
    U.id = p.uid, nr(p, !0), N.NODE_ENV !== "production" && (z.onTrack = p.rtc ? (Z) => wr(p.rtc, Z) : void 0, z.onTrigger = p.rtg ? (Z) => wr(p.rtg, Z) : void 0, U.ownerInstance = p), U();
  }, Te = (p, v, R) => {
    v.component = p;
    const C = p.vnode.props;
    p.vnode = v, p.next = null, nf(p, v.props, C, R), uf(p, v.children, R), In(), os(p), Un();
  }, Ft = (p, v, R, C, I, H, K, B, z = !1) => {
    const U = p && p.children, Z = p ? p.shapeFlag : 0, ue = v.children, { patchFlag: ie, shapeFlag: _e } = v;
    if (ie > 0) {
      if (ie & 128) {
        Ut(
          U,
          ue,
          R,
          C,
          I,
          H,
          K,
          B,
          z
        );
        return;
      } else if (ie & 256) {
        ln(
          U,
          ue,
          R,
          C,
          I,
          H,
          K,
          B,
          z
        );
        return;
      }
    }
    _e & 8 ? (Z & 16 && Lt(U, I, H), ue !== U && E(R, ue)) : Z & 16 ? _e & 16 ? Ut(
      U,
      ue,
      R,
      C,
      I,
      H,
      K,
      B,
      z
    ) : Lt(U, I, H, !0) : (Z & 8 && E(R, ""), _e & 16 && ke(
      ue,
      R,
      C,
      I,
      H,
      K,
      B,
      z
    ));
  }, ln = (p, v, R, C, I, H, K, B, z) => {
    p = p || Er, v = v || Er;
    const U = p.length, Z = v.length, ue = Math.min(U, Z);
    let ie;
    for (ie = 0; ie < ue; ie++) {
      const _e = v[ie] = z ? Wn(v[ie]) : fn(v[ie]);
      ae(
        p[ie],
        _e,
        R,
        null,
        I,
        H,
        K,
        B,
        z
      );
    }
    U > Z ? Lt(
      p,
      I,
      H,
      !0,
      !1,
      ue
    ) : ke(
      v,
      R,
      C,
      I,
      H,
      K,
      B,
      z,
      ue
    );
  }, Ut = (p, v, R, C, I, H, K, B, z) => {
    let U = 0;
    const Z = v.length;
    let ue = p.length - 1, ie = Z - 1;
    for (; U <= ue && U <= ie; ) {
      const _e = p[U], Se = v[U] = z ? Wn(v[U]) : fn(v[U]);
      if (Rr(_e, Se))
        ae(
          _e,
          Se,
          R,
          null,
          I,
          H,
          K,
          B,
          z
        );
      else
        break;
      U++;
    }
    for (; U <= ue && U <= ie; ) {
      const _e = p[ue], Se = v[ie] = z ? Wn(v[ie]) : fn(v[ie]);
      if (Rr(_e, Se))
        ae(
          _e,
          Se,
          R,
          null,
          I,
          H,
          K,
          B,
          z
        );
      else
        break;
      ue--, ie--;
    }
    if (U > ue) {
      if (U <= ie) {
        const _e = ie + 1, Se = _e < Z ? v[_e].el : C;
        for (; U <= ie; )
          ae(
            null,
            v[U] = z ? Wn(v[U]) : fn(v[U]),
            R,
            Se,
            I,
            H,
            K,
            B,
            z
          ), U++;
      }
    } else if (U > ie)
      for (; U <= ue; )
        Jt(p[U], I, H, !0), U++;
    else {
      const _e = U, Se = U, Fe = /* @__PURE__ */ new Map();
      for (U = Se; U <= ie; U++) {
        const y = v[U] = z ? Wn(v[U]) : fn(v[U]);
        y.key != null && (N.NODE_ENV !== "production" && Fe.has(y.key) && q(
          "Duplicate keys found during update:",
          JSON.stringify(y.key),
          "Make sure keys are unique."
        ), Fe.set(y.key, U));
      }
      let Ke, Pe = 0;
      const qe = ie - Se + 1;
      let Zt = !1, Fn = 0;
      const m = new Array(qe);
      for (U = 0; U < qe; U++)
        m[U] = 0;
      for (U = _e; U <= ue; U++) {
        const y = p[U];
        if (Pe >= qe) {
          Jt(y, I, H, !0);
          continue;
        }
        let x;
        if (y.key != null)
          x = Fe.get(y.key);
        else
          for (Ke = Se; Ke <= ie; Ke++)
            if (m[Ke - Se] === 0 && Rr(y, v[Ke])) {
              x = Ke;
              break;
            }
        x === void 0 ? Jt(y, I, H, !0) : (m[x - Se] = U + 1, x >= Fn ? Fn = x : Zt = !0, ae(
          y,
          v[x],
          R,
          null,
          I,
          H,
          K,
          B,
          z
        ), Pe++);
      }
      const b = Zt ? _f(m) : Er;
      for (Ke = b.length - 1, U = qe - 1; U >= 0; U--) {
        const y = Se + U, x = v[y], $ = y + 1 < Z ? v[y + 1].el : C;
        m[U] === 0 ? ae(
          null,
          x,
          R,
          $,
          I,
          H,
          K,
          B,
          z
        ) : Zt && (Ke < 0 || U !== b[Ke] ? Yt(x, R, $, 2) : Ke--);
      }
    }
  }, Yt = (p, v, R, C, I = null) => {
    const { el: H, type: K, transition: B, children: z, shapeFlag: U } = p;
    if (U & 6) {
      Yt(p.component.subTree, v, R, C);
      return;
    }
    if (U & 128) {
      p.suspense.move(v, R, C);
      return;
    }
    if (U & 64) {
      K.move(p, v, R, On);
      return;
    }
    if (K === an) {
      r(H, v, R);
      for (let ue = 0; ue < z.length; ue++)
        Yt(z[ue], v, R, C);
      r(p.anchor, v, R);
      return;
    }
    if (K === gi) {
      He(p, v, R);
      return;
    }
    if (C !== 2 && U & 1 && B)
      if (C === 0)
        B.beforeEnter(H), r(H, v, R), en(() => B.enter(H), I);
      else {
        const { leave: ue, delayLeave: ie, afterLeave: _e } = B, Se = () => r(H, v, R), Fe = () => {
          ue(H, () => {
            Se(), _e && _e();
          });
        };
        ie ? ie(H, Se, Fe) : Fe();
      }
    else
      r(H, v, R);
  }, Jt = (p, v, R, C = !1, I = !1) => {
    const {
      type: H,
      props: K,
      ref: B,
      children: z,
      dynamicChildren: U,
      shapeFlag: Z,
      patchFlag: ue,
      dirs: ie
    } = p;
    if (B != null && wo(B, null, R, p, !0), Z & 256) {
      v.ctx.deactivate(p);
      return;
    }
    const _e = Z & 1 && ie, Se = !hi(p);
    let Fe;
    if (Se && (Fe = K && K.onVnodeBeforeUnmount) && wn(Fe, v, p), Z & 6)
      vt(p.component, R, C);
    else {
      if (Z & 128) {
        p.suspense.unmount(R, C);
        return;
      }
      _e && tr(p, null, v, "beforeUnmount"), Z & 64 ? p.type.remove(
        p,
        v,
        R,
        I,
        On,
        C
      ) : U && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (H !== an || ue > 0 && ue & 64) ? Lt(
        U,
        v,
        R,
        !1,
        !0
      ) : (H === an && ue & 384 || !I && Z & 16) && Lt(z, v, R), C && bn(p);
    }
    (Se && (Fe = K && K.onVnodeUnmounted) || _e) && en(() => {
      Fe && wn(Fe, v, p), _e && tr(p, null, v, "unmounted");
    }, R);
  }, bn = (p) => {
    const { type: v, el: R, anchor: C, transition: I } = p;
    if (v === an) {
      N.NODE_ENV !== "production" && p.patchFlag > 0 && p.patchFlag & 2048 && I && !I.persisted ? p.children.forEach((K) => {
        K.type === nn ? i(K.el) : bn(K);
      }) : Nn(R, C);
      return;
    }
    if (v === gi) {
      Ge(p);
      return;
    }
    const H = () => {
      i(R), I && !I.persisted && I.afterLeave && I.afterLeave();
    };
    if (p.shapeFlag & 1 && I && !I.persisted) {
      const { leave: K, delayLeave: B } = I, z = () => K(R, H);
      B ? B(p.el, H, z) : z();
    } else
      H();
  }, Nn = (p, v) => {
    let R;
    for (; p !== v; )
      R = S(p), i(p), p = R;
    i(v);
  }, vt = (p, v, R) => {
    N.NODE_ENV !== "production" && p.type.__hmrId && la(p);
    const { bum: C, scope: I, update: H, subTree: K, um: B } = p;
    C && wr(C), I.stop(), H && (H.active = !1, Jt(K, p, v, R)), B && en(B, v), en(() => {
      p.isUnmounted = !0;
    }, v), v && v.pendingBranch && !v.isUnmounted && p.asyncDep && !p.asyncResolved && p.suspenseId === v.pendingId && (v.deps--, v.deps === 0 && v.resolve()), N.NODE_ENV !== "production" && pa(p);
  }, Lt = (p, v, R, C = !1, I = !1, H = 0) => {
    for (let K = H; K < p.length; K++)
      Jt(p[K], v, R, C, I);
  }, Je = (p) => p.shapeFlag & 6 ? Je(p.component.subTree) : p.shapeFlag & 128 ? p.suspense.next() : S(p.anchor || p.el);
  let it = !1;
  const pr = (p, v, R) => {
    p == null ? v._vnode && Jt(v._vnode, null, null, !0) : ae(
      v._vnode || null,
      p,
      v,
      null,
      null,
      null,
      R
    ), it || (it = !0, os(), ol(), it = !1), v._vnode = p;
  }, On = {
    p: ae,
    um: Jt,
    m: Yt,
    r: bn,
    mt: qt,
    mc: ke,
    pc: Ft,
    pbc: nt,
    n: Je,
    o: e
  };
  let gr, pn;
  return {
    render: pr,
    hydrate: gr,
    createApp: Xa(pr, gr)
  };
}
function Wi({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function nr({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function gf(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function pi(e, t, n = !1) {
  const r = e.children, i = t.children;
  if (be(r) && be(i))
    for (let o = 0; o < r.length; o++) {
      const c = r[o];
      let u = i[o];
      u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = i[o] = Wn(i[o]), u.el = c.el), n || pi(c, u)), u.type === qr && (u.el = c.el), N.NODE_ENV !== "production" && u.type === nn && !u.el && (u.el = c.el);
    }
}
function _f(e) {
  const t = e.slice(), n = [0];
  let r, i, o, c, u;
  const f = e.length;
  for (r = 0; r < f; r++) {
    const d = e[r];
    if (d !== 0) {
      if (i = n[n.length - 1], e[i] < d) {
        t[r] = i, n.push(r);
        continue;
      }
      for (o = 0, c = n.length - 1; o < c; )
        u = o + c >> 1, e[n[u]] < d ? o = u + 1 : c = u;
      d < e[n[o]] && (o > 0 && (t[r] = n[o - 1]), n[o] = r);
    }
  }
  for (o = n.length, c = n[o - 1]; o-- > 0; )
    n[o] = c, c = t[c];
  return n;
}
function Tl(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Tl(t);
}
const wf = (e) => e.__isTeleport, an = Symbol.for("v-fgt"), qr = Symbol.for("v-txt"), nn = Symbol.for("v-cmt"), gi = Symbol.for("v-stc"), Fr = [];
let un = null;
function Ir(e = !1) {
  Fr.push(un = e ? null : []);
}
function mf() {
  Fr.pop(), un = Fr[Fr.length - 1] || null;
}
let Hr = 1;
function ms(e) {
  Hr += e;
}
function Ml(e) {
  return e.dynamicChildren = Hr > 0 ? un || Er : null, mf(), Hr > 0 && un && un.push(e), e;
}
function ci(e, t, n, r, i, o) {
  return Ml(
    Be(
      e,
      t,
      n,
      r,
      i,
      o,
      !0
    )
  );
}
function vf(e, t, n, r, i) {
  return Ml(
    Tn(
      e,
      t,
      n,
      r,
      i,
      !0
    )
  );
}
function zo(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Rr(e, t) {
  return N.NODE_ENV !== "production" && t.shapeFlag & 6 && mr.has(t.type) ? (e.shapeFlag &= -257, t.shapeFlag &= -513, !1) : e.type === t.type && e.key === t.key;
}
const yf = (...e) => Il(
  ...e
), Cl = ({ key: e }) => e ?? null, _i = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? xt(e) || Gt(e) || xe(e) ? { i: Bt, r: e, k: t, f: !!n } : e : null);
function Be(e, t = null, n = null, r = 0, i = null, o = e === an ? 0 : 1, c = !1, u = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Cl(t),
    ref: t && _i(t),
    scopeId: hl,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: r,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: Bt
  };
  return u ? (Ko(f, n), o & 128 && e.normalize(f)) : n && (f.shapeFlag |= xt(n) ? 8 : 16), N.NODE_ENV !== "production" && f.key !== f.key && q("VNode created with invalid key (NaN). VNode type:", f.type), Hr > 0 && // avoid a block node from tracking itself
  !c && // has current parent block
  un && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (f.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  f.patchFlag !== 32 && un.push(f), f;
}
const Tn = N.NODE_ENV !== "production" ? yf : Il;
function Il(e, t = null, n = null, r = 0, i = null, o = !1) {
  if ((!e || e === Oa) && (N.NODE_ENV !== "production" && !e && q(`Invalid vnode type when creating vnode: ${e}.`), e = nn), zo(e)) {
    const u = Qn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Ko(u, n), Hr > 0 && !o && un && (u.shapeFlag & 6 ? un[un.indexOf(e)] = u : un.push(u)), u.patchFlag |= -2, u;
  }
  if (Ll(e) && (e = e.__vccOpts), t) {
    t = Ef(t);
    let { class: u, style: f } = t;
    u && !xt(u) && (t.class = Vo(u)), ct(f) && (lo(f) && !be(f) && (f = pt({}, f)), t.style = Kn(f));
  }
  const c = xt(e) ? 1 : xa(e) ? 128 : wf(e) ? 64 : ct(e) ? 4 : xe(e) ? 2 : 0;
  return N.NODE_ENV !== "production" && c & 4 && lo(e) && (e = Ie(e), q(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), Be(
    e,
    t,
    n,
    r,
    i,
    c,
    o,
    !0
  );
}
function Ef(e) {
  return e ? lo(e) || Ol(e) ? pt({}, e) : e : null;
}
function Qn(e, t, n = !1, r = !1) {
  const { props: i, ref: o, patchFlag: c, children: u, transition: f } = e, d = t ? bf(i || {}, t) : i, E = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && Cl(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? be(o) ? o.concat(_i(t)) : [o, _i(t)] : _i(t)
    ) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: N.NODE_ENV !== "production" && c === -1 && be(u) ? u.map(Ul) : u,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== an ? c === -1 ? 16 : c | 16 : c,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: f,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Qn(e.ssContent),
    ssFallback: e.ssFallback && Qn(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return f && r && (E.transition = f.clone(E)), E;
}
function Ul(e) {
  const t = Qn(e);
  return be(e.children) && (t.children = e.children.map(Ul)), t;
}
function mo(e = " ", t = 0) {
  return Tn(qr, null, e, t);
}
function zi(e = "", t = !1) {
  return t ? (Ir(), vf(nn, null, e)) : Tn(nn, null, e);
}
function fn(e) {
  return e == null || typeof e == "boolean" ? Tn(nn) : be(e) ? Tn(
    an,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? Wn(e) : Tn(qr, null, String(e));
}
function Wn(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Qn(e);
}
function Ko(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (be(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), Ko(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !Ol(t) ? t._ctx = Bt : i === 3 && Bt && (Bt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    xe(t) ? (t = { default: t, _ctx: Bt }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [mo(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function bf(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const i in r)
      if (i === "class")
        t.class !== r.class && (t.class = Vo([t.class, r.class]));
      else if (i === "style")
        t.style = Kn([t.style, r.style]);
      else if (Gr(i)) {
        const o = t[i], c = r[i];
        c && o !== c && !(be(o) && o.includes(c)) && (t[i] = o ? [].concat(o, c) : c);
      } else
        i !== "" && (t[i] = r[i]);
  }
  return t;
}
function wn(e, t, n, r = null) {
  dn(e, t, 7, [
    n,
    r
  ]);
}
const Nf = El();
let Of = 0;
function xf(e, t, n) {
  const r = e.type, i = (t ? t.appContext : e.appContext) || Nf, o = {
    uid: Of++,
    vnode: e,
    type: r,
    parent: t,
    appContext: i,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    scope: new Ec(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(i.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Al(r, i),
    emitsOptions: ul(r, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: tt,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: tt,
    data: tt,
    props: tt,
    attrs: tt,
    slots: tt,
    refs: tt,
    setupState: tt,
    setupContext: null,
    attrsProxy: null,
    slotsProxy: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return N.NODE_ENV !== "production" ? o.ctx = Ha(o) : o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = ma.bind(null, o), e.ce && e.ce(o), o;
}
let It = null;
const Af = () => It || Bt;
let Ni, vo;
{
  const e = So(), t = (n, r) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(r), (o) => {
      i.length > 1 ? i.forEach((c) => c(o)) : i[0](o);
    };
  };
  Ni = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => It = n
  ), vo = t(
    "__VUE_SSR_SETTERS__",
    (n) => Ii = n
  );
}
const Yr = (e) => {
  const t = It;
  return Ni(e), e.scope.on(), () => {
    e.scope.off(), Ni(t);
  };
}, vs = () => {
  It && It.scope.off(), Ni(null);
}, Df = /* @__PURE__ */ Cn("slot,component");
function yo(e, { isNativeTag: t }) {
  (Df(e) || t(e)) && q(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function Pl(e) {
  return e.vnode.shapeFlag & 4;
}
let Ii = !1;
function Sf(e, t = !1) {
  t && vo(t);
  const { props: n, children: r } = e.vnode, i = Pl(e);
  ef(e, n, i, t), ff(e, r);
  const o = i ? Vf(e, t) : void 0;
  return t && vo(!1), o;
}
function Vf(e, t) {
  var n;
  const r = e.type;
  if (N.NODE_ENV !== "production") {
    if (r.name && yo(r.name, e.appContext.config), r.components) {
      const o = Object.keys(r.components);
      for (let c = 0; c < o.length; c++)
        yo(o[c], e.appContext.config);
    }
    if (r.directives) {
      const o = Object.keys(r.directives);
      for (let c = 0; c < o.length; c++)
        _l(o[c]);
    }
    r.compilerOptions && Rf() && q(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, vl), N.NODE_ENV !== "production" && Ba(e);
  const { setup: i } = r;
  if (i) {
    const o = e.setupContext = i.length > 1 ? Mf(e) : null, c = Yr(e);
    In();
    const u = Rn(
      i,
      e,
      0,
      [
        N.NODE_ENV !== "production" ? yn(e.props) : e.props,
        o
      ]
    );
    if (Un(), c(), xo(u)) {
      if (u.then(vs, vs), t)
        return u.then((f) => {
          ys(e, f, t);
        }).catch((f) => {
          zr(f, e, 0);
        });
      if (e.asyncDep = u, N.NODE_ENV !== "production" && !e.suspense) {
        const f = (n = r.name) != null ? n : "Anonymous";
        q(
          `Component <${f}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      ys(e, u, t);
  } else
    $l(e, t);
}
function ys(e, t, n) {
  xe(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ct(t) ? (N.NODE_ENV !== "production" && zo(t) && q(
    "setup() should not return VNodes directly - return a render function instead."
  ), N.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = el(t), N.NODE_ENV !== "production" && Ga(e)) : N.NODE_ENV !== "production" && t !== void 0 && q(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), $l(e, n);
}
let Eo;
const Rf = () => !Eo;
function $l(e, t, n) {
  const r = e.type;
  if (!e.render) {
    if (!t && Eo && !r.render) {
      const i = r.template || Go(e).template;
      if (i) {
        N.NODE_ENV !== "production" && Dn(e, "compile");
        const { isCustomElement: o, compilerOptions: c } = e.appContext.config, { delimiters: u, compilerOptions: f } = r, d = pt(
          pt(
            {
              isCustomElement: o,
              delimiters: u
            },
            c
          ),
          f
        );
        r.render = Eo(i, d), N.NODE_ENV !== "production" && Sn(e, "compile");
      }
    }
    e.render = r.render || mt;
  }
  {
    const i = Yr(e);
    In();
    try {
      za(e);
    } finally {
      Un(), i();
    }
  }
  N.NODE_ENV !== "production" && !r.render && e.render === mt && !t && (r.template ? q(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : q("Component is missing template or render function."));
}
const Es = N.NODE_ENV !== "production" ? {
  get(e, t) {
    return yi(), $t(e, "get", ""), e[t];
  },
  set() {
    return q("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return q("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return $t(e, "get", ""), e[t];
  }
};
function Tf(e) {
  return e.slotsProxy || (e.slotsProxy = new Proxy(e.slots, {
    get(t, n) {
      return $t(e, "get", "$slots"), t[n];
    }
  }));
}
function Mf(e) {
  const t = (n) => {
    if (N.NODE_ENV !== "production" && (e.exposed && q("expose() should be called only once per setup()."), n != null)) {
      let r = typeof n;
      r === "object" && (be(n) ? r = "array" : Gt(n) && (r = "ref")), r !== "object" && q(
        `expose() should be passed a plain object, received ${r}.`
      );
    }
    e.exposed = n || {};
  };
  if (N.NODE_ENV !== "production") {
    let n;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, Es));
      },
      get slots() {
        return Tf(e);
      },
      get emit() {
        return (r, ...i) => e.emit(r, ...i);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, Es),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function Ui(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(el(Gc(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in fr)
          return fr[n](e);
      },
      has(t, n) {
        return n in t || n in fr;
      }
    }));
}
const Cf = /(?:^|[-_])(\w)/g, If = (e) => e.replace(Cf, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Fl(e, t = !0) {
  return xe(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Pi(e, t, n = !1) {
  let r = Fl(t);
  if (!r && t.__file) {
    const i = t.__file.match(/([^/\\]+)\.\w+$/);
    i && (r = i[1]);
  }
  if (!r && e && e.parent) {
    const i = (o) => {
      for (const c in o)
        if (o[c] === t)
          return c;
    };
    r = i(
      e.components || e.parent.type.components
    ) || i(e.appContext.components);
  }
  return r ? If(r) : n ? "App" : "Anonymous";
}
function Ll(e) {
  return xe(e) && "__vccOpts" in e;
}
const Uf = (e, t) => {
  const n = zc(e, t, Ii);
  if (N.NODE_ENV !== "production") {
    const r = Af();
    r && r.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function Pf() {
  if (N.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, r = { style: "color:#eb2f96" }, i = {
    header(w) {
      return ct(w) ? w.__isVue ? ["div", e, "VueInstance"] : Gt(w) ? [
        "div",
        {},
        ["span", e, E(w)],
        "<",
        u(w.value),
        ">"
      ] : Nr(w) ? [
        "div",
        {},
        ["span", e, Or(w) ? "ShallowReactive" : "Reactive"],
        "<",
        u(w),
        `>${Sr(w) ? " (readonly)" : ""}`
      ] : Sr(w) ? [
        "div",
        {},
        ["span", e, Or(w) ? "ShallowReadonly" : "Readonly"],
        "<",
        u(w),
        ">"
      ] : null : null;
    },
    hasBody(w) {
      return w && w.__isVue;
    },
    body(w) {
      if (w && w.__isVue)
        return [
          "div",
          {},
          ...o(w.$)
        ];
    }
  };
  function o(w) {
    const S = [];
    w.type.props && w.props && S.push(c("props", Ie(w.props))), w.setupState !== tt && S.push(c("setup", w.setupState)), w.data !== tt && S.push(c("data", Ie(w.data)));
    const F = f(w, "computed");
    F && S.push(c("computed", F));
    const te = f(w, "inject");
    return te && S.push(c("injected", te)), S.push([
      "div",
      {},
      [
        "span",
        {
          style: r.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: w }]
    ]), S;
  }
  function c(w, S) {
    return S = pt({}, S), Object.keys(S).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        w
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(S).map((F) => [
          "div",
          {},
          ["span", r, F + ": "],
          u(S[F], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function u(w, S = !0) {
    return typeof w == "number" ? ["span", t, w] : typeof w == "string" ? ["span", n, JSON.stringify(w)] : typeof w == "boolean" ? ["span", r, w] : ct(w) ? ["object", { object: S ? Ie(w) : w }] : ["span", n, String(w)];
  }
  function f(w, S) {
    const F = w.type;
    if (xe(F))
      return;
    const te = {};
    for (const ae in w.ctx)
      d(F, ae, S) && (te[ae] = w.ctx[ae]);
    return te;
  }
  function d(w, S, F) {
    const te = w[F];
    if (be(te) && te.includes(S) || ct(te) && S in te || w.extends && d(w.extends, S, F) || w.mixins && w.mixins.some((ae) => d(ae, S, F)))
      return !0;
  }
  function E(w) {
    return Or(w) ? "ShallowRef" : w.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(i) : window.devtoolsFormatters = [i];
}
const bs = "3.4.27", Jn = N.NODE_ENV !== "production" ? q : mt;
var Mn = {};
const $f = "http://www.w3.org/2000/svg", Ff = "http://www.w3.org/1998/Math/MathML", zn = typeof document < "u" ? document : null, Ns = zn && /* @__PURE__ */ zn.createElement("template"), Lf = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const i = t === "svg" ? zn.createElementNS($f, e) : t === "mathml" ? zn.createElementNS(Ff, e) : zn.createElement(e, n ? { is: n } : void 0);
    return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
  },
  createText: (e) => zn.createTextNode(e),
  createComment: (e) => zn.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => zn.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, r, i, o) {
    const c = n ? n.previousSibling : t.lastChild;
    if (i && (i === o || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), n), !(i === o || !(i = i.nextSibling)); )
        ;
    else {
      Ns.innerHTML = r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e;
      const u = Ns.content;
      if (r === "svg" || r === "mathml") {
        const f = u.firstChild;
        for (; f.firstChild; )
          u.appendChild(f.firstChild);
        u.removeChild(f);
      }
      t.insertBefore(u, n);
    }
    return [
      // first
      c ? c.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, kf = Symbol("_vtc");
function jf(e, t, n) {
  const r = e[kf];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Oi = Symbol("_vod"), kl = Symbol("_vsh"), Bn = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[Oi] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Tr(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: r }) {
    !t != !n && (r ? t ? (r.beforeEnter(e), Tr(e, !0), r.enter(e)) : r.leave(e, () => {
      Tr(e, !1);
    }) : Tr(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Tr(e, t);
  }
};
Mn.NODE_ENV !== "production" && (Bn.name = "show");
function Tr(e, t) {
  e.style.display = t ? e[Oi] : "none", e[kl] = !t;
}
const Hf = Symbol(Mn.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), Bf = /(^|;)\s*display\s*:/;
function Gf(e, t, n) {
  const r = e.style, i = xt(n);
  let o = !1;
  if (n && !i) {
    if (t)
      if (xt(t))
        for (const c of t.split(";")) {
          const u = c.slice(0, c.indexOf(":")).trim();
          n[u] == null && wi(r, u, "");
        }
      else
        for (const c in t)
          n[c] == null && wi(r, c, "");
    for (const c in n)
      c === "display" && (o = !0), wi(r, c, n[c]);
  } else if (i) {
    if (t !== n) {
      const c = r[Hf];
      c && (n += ";" + c), r.cssText = n, o = Bf.test(n);
    }
  } else
    t && e.removeAttribute("style");
  Oi in e && (e[Oi] = o ? r.display : "", e[kl] && (r.display = "none"));
}
const Wf = /[^\\];\s*$/, Os = /\s*!important$/;
function wi(e, t, n) {
  if (be(n))
    n.forEach((r) => wi(e, t, r));
  else if (n == null && (n = ""), Mn.NODE_ENV !== "production" && Wf.test(n) && Jn(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = zf(e, t);
    Os.test(n) ? e.setProperty(
      Zn(r),
      n.replace(Os, ""),
      "important"
    ) : e[r] = n;
  }
}
const xs = ["Webkit", "Moz", "ms"], Ki = {};
function zf(e, t) {
  const n = Ki[t];
  if (n)
    return n;
  let r = Dr(t);
  if (r !== "filter" && r in e)
    return Ki[t] = r;
  r = Di(r);
  for (let i = 0; i < xs.length; i++) {
    const o = xs[i] + r;
    if (o in e)
      return Ki[t] = o;
  }
  return t;
}
const As = "http://www.w3.org/1999/xlink";
function Kf(e, t, n, r, i) {
  if (r && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(As, t.slice(6, t.length)) : e.setAttributeNS(As, t, n);
  else {
    const o = yc(t);
    n == null || o && !$s(n) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : n);
  }
}
function qf(e, t, n, r, i, o, c) {
  if (t === "innerHTML" || t === "textContent") {
    r && c(r, i, o), e[t] = n ?? "";
    return;
  }
  const u = e.tagName;
  if (t === "value" && u !== "PROGRESS" && // custom elements may use _value internally
  !u.includes("-")) {
    const d = u === "OPTION" ? e.getAttribute("value") || "" : e.value, E = n ?? "";
    (d !== E || !("_value" in e)) && (e.value = E), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let f = !1;
  if (n === "" || n == null) {
    const d = typeof e[t];
    d === "boolean" ? n = $s(n) : n == null && d === "string" ? (n = "", f = !0) : d === "number" && (n = 0, f = !0);
  }
  try {
    e[t] = n;
  } catch (d) {
    Mn.NODE_ENV !== "production" && !f && Jn(
      `Failed setting prop "${t}" on <${u.toLowerCase()}>: value ${n} is invalid.`,
      d
    );
  }
  f && e.removeAttribute(t);
}
function vr(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function Yf(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Ds = Symbol("_vei");
function Jf(e, t, n, r, i = null) {
  const o = e[Ds] || (e[Ds] = {}), c = o[t];
  if (r && c)
    c.value = Mn.NODE_ENV !== "production" ? Vs(r, t) : r;
  else {
    const [u, f] = Zf(t);
    if (r) {
      const d = o[t] = eu(
        Mn.NODE_ENV !== "production" ? Vs(r, t) : r,
        i
      );
      vr(e, u, d, f);
    } else
      c && (Yf(e, u, c, f), o[t] = void 0);
  }
}
const Ss = /(?:Once|Passive|Capture)$/;
function Zf(e) {
  let t;
  if (Ss.test(e)) {
    t = {};
    let r;
    for (; r = e.match(Ss); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Zn(e.slice(2)), t];
}
let qi = 0;
const Xf = /* @__PURE__ */ Promise.resolve(), Qf = () => qi || (Xf.then(() => qi = 0), qi = Date.now());
function eu(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    dn(
      tu(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = Qf(), n;
}
function Vs(e, t) {
  return xe(e) || be(e) ? e : (Jn(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), mt);
}
function tu(e, t) {
  if (be(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (r) => (i) => !i._stopped && r && r(i)
    );
  } else
    return t;
}
const Rs = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, nu = (e, t, n, r, i, o, c, u, f) => {
  const d = i === "svg";
  t === "class" ? jf(e, r, d) : t === "style" ? Gf(e, n, r) : Gr(t) ? mi(t) || Jf(e, t, n, r, c) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : ru(e, t, r, d)) ? qf(
    e,
    t,
    r,
    o,
    c,
    u,
    f
  ) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Kf(e, t, r, d));
};
function ru(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Rs(t) && xe(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Rs(t) && xt(n) ? !1 : t in e;
}
const Ts = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return be(t) ? (n) => wr(t, n) : t;
};
function iu(e) {
  e.target.composing = !0;
}
function Ms(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Yi = Symbol("_assign"), rr = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
    e[Yi] = Ts(i);
    const o = r || i.props && i.props.type === "number";
    vr(e, t ? "change" : "input", (c) => {
      if (c.target.composing)
        return;
      let u = e.value;
      n && (u = u.trim()), o && (u = no(u)), e[Yi](u);
    }), n && vr(e, "change", () => {
      e.value = e.value.trim();
    }), t || (vr(e, "compositionstart", iu), vr(e, "compositionend", Ms), vr(e, "change", Ms));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, modifiers: { lazy: n, trim: r, number: i } }, o) {
    if (e[Yi] = Ts(o), e.composing)
      return;
    const c = (i || e.type === "number") && !/^0\d/.test(e.value) ? no(e.value) : e.value, u = t ?? "";
    c !== u && (document.activeElement === e && e.type !== "range" && (n || r && e.value.trim() === u) || (e.value = u));
  }
}, ou = ["ctrl", "shift", "alt", "meta"], su = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => ou.some((n) => e[`${n}Key`] && !t.includes(n))
}, lu = (e, t) => {
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = (i, ...o) => {
    for (let c = 0; c < t.length; c++) {
      const u = su[t[c]];
      if (u && u(i, t))
        return;
    }
    return e(i, ...o);
  });
}, cu = /* @__PURE__ */ pt({ patchProp: nu }, Lf);
let Cs;
function au() {
  return Cs || (Cs = df(cu));
}
const fu = (...e) => {
  const t = au().createApp(...e);
  Mn.NODE_ENV !== "production" && (hu(t), du(t));
  const { mount: n } = t;
  return t.mount = (r) => {
    const i = pu(r);
    if (!i)
      return;
    const o = t._component;
    !xe(o) && !o.render && !o.template && (o.template = i.innerHTML), i.innerHTML = "";
    const c = n(i, !1, uu(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), c;
  }, t;
};
function uu(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function hu(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => _c(t) || wc(t) || mc(t),
    writable: !1
  });
}
function du(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        Jn(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, r = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return Jn(r), n;
      },
      set() {
        Jn(r);
      }
    });
  }
}
function pu(e) {
  if (xt(e)) {
    const t = document.querySelector(e);
    return Mn.NODE_ENV !== "production" && !t && Jn(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return Mn.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && Jn(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
var gu = {};
function _u() {
  Pf();
}
gu.NODE_ENV !== "production" && _u();
function wu(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else
    n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(r) {
    var i = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(n, r, i.get ? i : {
      enumerable: !0,
      get: function() {
        return e[r];
      }
    });
  }), n;
}
var jl = {};
(function(e) {
  var t = Object.defineProperty, n = (m) => t(m, "__esModule", { value: !0 }), r = (m, b) => {
    for (var y in b)
      t(m, y, { get: b[y], enumerable: !0 });
  };
  n(e), r(e, {
    decode: () => Ke,
    encode: () => Fe
  });
  var i = new Uint32Array([
    0,
    1996959894,
    3993919788,
    2567524794,
    124634137,
    1886057615,
    3915621685,
    2657392035,
    249268274,
    2044508324,
    3772115230,
    2547177864,
    162941995,
    2125561021,
    3887607047,
    2428444049,
    498536548,
    1789927666,
    4089016648,
    2227061214,
    450548861,
    1843258603,
    4107580753,
    2211677639,
    325883990,
    1684777152,
    4251122042,
    2321926636,
    335633487,
    1661365465,
    4195302755,
    2366115317,
    997073096,
    1281953886,
    3579855332,
    2724688242,
    1006888145,
    1258607687,
    3524101629,
    2768942443,
    901097722,
    1119000684,
    3686517206,
    2898065728,
    853044451,
    1172266101,
    3705015759,
    2882616665,
    651767980,
    1373503546,
    3369554304,
    3218104598,
    565507253,
    1454621731,
    3485111705,
    3099436303,
    671266974,
    1594198024,
    3322730930,
    2970347812,
    795835527,
    1483230225,
    3244367275,
    3060149565,
    1994146192,
    31158534,
    2563907772,
    4023717930,
    1907459465,
    112637215,
    2680153253,
    3904427059,
    2013776290,
    251722036,
    2517215374,
    3775830040,
    2137656763,
    141376813,
    2439277719,
    3865271297,
    1802195444,
    476864866,
    2238001368,
    4066508878,
    1812370925,
    453092731,
    2181625025,
    4111451223,
    1706088902,
    314042704,
    2344532202,
    4240017532,
    1658658271,
    366619977,
    2362670323,
    4224994405,
    1303535960,
    984961486,
    2747007092,
    3569037538,
    1256170817,
    1037604311,
    2765210733,
    3554079995,
    1131014506,
    879679996,
    2909243462,
    3663771856,
    1141124467,
    855842277,
    2852801631,
    3708648649,
    1342533948,
    654459306,
    3188396048,
    3373015174,
    1466479909,
    544179635,
    3110523913,
    3462522015,
    1591671054,
    702138776,
    2966460450,
    3352799412,
    1504918807,
    783551873,
    3082640443,
    3233442989,
    3988292384,
    2596254646,
    62317068,
    1957810842,
    3939845945,
    2647816111,
    81470997,
    1943803523,
    3814918930,
    2489596804,
    225274430,
    2053790376,
    3826175755,
    2466906013,
    167816743,
    2097651377,
    4027552580,
    2265490386,
    503444072,
    1762050814,
    4150417245,
    2154129355,
    426522225,
    1852507879,
    4275313526,
    2312317920,
    282753626,
    1742555852,
    4189708143,
    2394877945,
    397917763,
    1622183637,
    3604390888,
    2714866558,
    953729732,
    1340076626,
    3518719985,
    2797360999,
    1068828381,
    1219638859,
    3624741850,
    2936675148,
    906185462,
    1090812512,
    3747672003,
    2825379669,
    829329135,
    1181335161,
    3412177804,
    3160834842,
    628085408,
    1382605366,
    3423369109,
    3138078467,
    570562233,
    1426400815,
    3317316542,
    2998733608,
    733239954,
    1555261956,
    3268935591,
    3050360625,
    752459403,
    1541320221,
    2607071920,
    3965973030,
    1969922972,
    40735498,
    2617837225,
    3943577151,
    1913087877,
    83908371,
    2512341634,
    3803740692,
    2075208622,
    213261112,
    2463272603,
    3855990285,
    2094854071,
    198958881,
    2262029012,
    4057260610,
    1759359992,
    534414190,
    2176718541,
    4139329115,
    1873836001,
    414664567,
    2282248934,
    4279200368,
    1711684554,
    285281116,
    2405801727,
    4167216745,
    1634467795,
    376229701,
    2685067896,
    3608007406,
    1308918612,
    956543938,
    2808555105,
    3495958263,
    1231636301,
    1047427035,
    2932959818,
    3654703836,
    1088359270,
    936918e3,
    2847714899,
    3736837829,
    1202900863,
    817233897,
    3183342108,
    3401237130,
    1404277552,
    615818150,
    3134207493,
    3453421203,
    1423857449,
    601450431,
    3009837614,
    3294710456,
    1567103746,
    711928724,
    3020668471,
    3272380065,
    1510334235,
    755167117
  ]);
  function o(m) {
    let b = 0, y = -1;
    const x = m.length - 4 | 0;
    for (; x > b; )
      y = i[(y ^ m[b++]) & 255] ^ y >>> 8, y = i[(y ^ m[b++]) & 255] ^ y >>> 8, y = i[(y ^ m[b++]) & 255] ^ y >>> 8, y = i[(y ^ m[b++]) & 255] ^ y >>> 8;
    for (; b < m.length; )
      y = i[(y ^ m[b++]) & 255] ^ y >>> 8;
    return (y ^ 4294967295) >>> 0;
  }
  function c(m, b = !1) {
    if (m instanceof ArrayBuffer)
      return new Uint8Array(m);
    if (b && m instanceof SharedArrayBuffer)
      return new Uint8Array(m);
    if (ArrayBuffer.isView(m))
      return new Uint8Array(m.buffer, m.byteOffset, m.byteLength);
    throw new TypeError("The provided value is not of type '(ArrayBuffer or ArrayBufferView)'");
  }
  function u(m, b = !1) {
    let y = 0, x = 0;
    m.forEach((M) => y += M.byteLength == null ? M.length : M.byteLength);
    const $ = new Uint8Array(b ? new SharedArrayBuffer(y) : y);
    return m.forEach((M) => {
      const ge = Array.isArray(M) ? M : c(M, !0);
      $.set(ge, x), x += ge.length;
    }), $;
  }
  var f = Uint8Array, d = Uint16Array, E = Uint32Array, w = f.of(16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15), S = f.of(0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0), F = f.of(0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0), te = function(m, b) {
    for (var y = new d(31), x = 0; x < 31; ++x)
      y[x] = b += 1 << m[x - 1];
    for (var $ = new E(y[30]), x = 1; x < 30; ++x)
      for (var M = y[x]; M < y[x + 1]; ++M)
        $[M] = M - y[x] << 5 | x;
    return [y, $];
  }, ae = te(S, 2), We = ae[0], Ae = ae[1];
  We[28] = 258, Ae[258] = 28;
  for (var De = te(F, 0), $e = De[0], He = De[1], Ge = new d(32768), Ve = 0; Ve < 32768; ++Ve)
    fe = (Ve & 43690) >>> 1 | (Ve & 21845) << 1, fe = (fe & 52428) >>> 2 | (fe & 13107) << 2, fe = (fe & 61680) >>> 4 | (fe & 3855) << 4, Ge[Ve] = ((fe & 65280) >>> 8 | (fe & 255) << 8) >>> 1;
  for (var fe, Ne = function(m, b, y) {
    for (var x = m.length, $ = 0, M = new d(b); $ < x; ++$)
      ++M[m[$] - 1];
    var ge = new d(b);
    for ($ = 0; $ < b; ++$)
      ge[$] = ge[$ - 1] + M[$ - 1] << 1;
    var ye;
    if (y) {
      ye = new d(1 << b);
      var X = 15 - b;
      for ($ = 0; $ < x; ++$)
        if (m[$])
          for (var Q = $ << 4 | m[$], W = b - m[$], me = ge[m[$] - 1]++ << W, se = me | (1 << W) - 1; me <= se; ++me)
            ye[Ge[me] >>> X] = Q;
    } else
      for (ye = new d(x), $ = 0; $ < x; ++$)
        m[$] && (ye[$] = Ge[ge[m[$] - 1]++] >>> 15 - m[$]);
    return ye;
  }, ke = new f(288), Ve = 0; Ve < 144; ++Ve)
    ke[Ve] = 8;
  for (var Ve = 144; Ve < 256; ++Ve)
    ke[Ve] = 9;
  for (var Ve = 256; Ve < 280; ++Ve)
    ke[Ve] = 7;
  for (var Ve = 280; Ve < 288; ++Ve)
    ke[Ve] = 8;
  for (var ze = new f(32), Ve = 0; Ve < 32; ++Ve)
    ze[Ve] = 5;
  var nt = Ne(ke, 9, 0), St = Ne(ke, 9, 1), $n = Ne(ze, 5, 0), dr = Ne(ze, 5, 1), qt = function(m) {
    for (var b = m[0], y = 1; y < m.length; ++y)
      m[y] > b && (b = m[y]);
    return b;
  }, Ye = function(m, b, y) {
    var x = b >> 3 | 0;
    return (m[x] | m[x + 1] << 8) >> (b & 7) & y;
  }, Ce = function(m, b) {
    var y = b >> 3 | 0;
    return (m[y] | m[y + 1] << 8 | m[y + 2] << 16) >> (b & 7);
  }, Te = function(m) {
    return (m >> 3 | 0) + (m & 7 && 1);
  }, Ft = function(m, b, y) {
    (y == null || y > m.length) && (y = m.length);
    var x = new (m instanceof d ? d : m instanceof E ? E : f)(y - b);
    return x.set(m.subarray(b, y)), x;
  }, ln = function(m, b, y) {
    var x = m.length;
    if (!x || y && !y.l && x < 5)
      return b || new f(0);
    var $ = !b || y, M = !y || y.i;
    y || (y = {}), b || (b = new f(x * 3));
    var ge = function(_r) {
      var er = b.length;
      if (_r > er) {
        var Ln = new f(Math.max(er * 2, _r));
        Ln.set(b), b = Ln;
      }
    }, ye = y.f || 0, X = y.p || 0, Q = y.b || 0, W = y.l, me = y.d, se = y.m, Me = y.n, he = x * 8;
    do {
      if (!W) {
        y.f = ye = Ye(m, X, 1);
        var je = Ye(m, X + 1, 3);
        if (X += 3, je)
          if (je === 1)
            W = St, me = dr, se = 9, Me = 5;
          else if (je === 2) {
            var Le = Ye(m, X, 31) + 257, Ee = Ye(m, X + 10, 15) + 4, st = Le + Ye(m, X + 5, 31) + 1;
            X += 14;
            for (var ft = new f(st), ut = new f(19), Oe = 0; Oe < Ee; ++Oe)
              ut[w[Oe]] = Ye(m, X + Oe * 3, 7);
            X += Ee * 3;
            for (var yt = qt(ut), Et = (1 << yt) - 1, gn = Ne(ut, yt, 1), Oe = 0; Oe < st; ) {
              var bt = gn[Ye(m, X, Et)];
              X += bt & 15;
              var rt = bt >>> 4;
              if (rt < 16)
                ft[Oe++] = rt;
              else {
                var kt = 0, ht = 0;
                for (rt === 16 ? (ht = 3 + Ye(m, X, 3), X += 2, kt = ft[Oe - 1]) : rt === 17 ? (ht = 3 + Ye(m, X, 7), X += 3) : rt === 18 && (ht = 11 + Ye(m, X, 127), X += 7); ht--; )
                  ft[Oe++] = kt;
              }
            }
            var Vt = ft.subarray(0, Le), dt = ft.subarray(Le);
            se = qt(Vt), Me = qt(dt), W = Ne(Vt, se, 1), me = Ne(dt, Me, 1);
          } else
            throw "invalid block type";
        else {
          var rt = Te(X) + 4, gt = m[rt - 4] | m[rt - 3] << 8, ce = rt + gt;
          if (ce > x) {
            if (M)
              throw "unexpected EOF";
            break;
          }
          $ && ge(Q + gt), b.set(m.subarray(rt, ce), Q), y.b = Q += gt, y.p = X = ce * 8;
          continue;
        }
        if (X > he) {
          if (M)
            throw "unexpected EOF";
          break;
        }
      }
      $ && ge(Q + 131072);
      for (var _t = (1 << se) - 1, Wt = (1 << Me) - 1, Xt = X; ; Xt = X) {
        var kt = W[Ce(m, X) & _t], on = kt >>> 4;
        if (X += kt & 15, X > he) {
          if (M)
            throw "unexpected EOF";
          break;
        }
        if (!kt)
          throw "invalid length/literal";
        if (on < 256)
          b[Q++] = on;
        else if (on === 256) {
          Xt = X, W = null;
          break;
        } else {
          var zt = on - 254;
          if (on > 264) {
            var Oe = on - 257, tn = S[Oe];
            zt = Ye(m, X, (1 << tn) - 1) + We[Oe], X += tn;
          }
          var sn = me[Ce(m, X) & Wt], jt = sn >>> 4;
          if (!sn)
            throw "invalid distance";
          X += sn & 15;
          var dt = $e[jt];
          if (jt > 3) {
            var tn = F[jt];
            dt += Ce(m, X) & (1 << tn) - 1, X += tn;
          }
          if (X > he) {
            if (M)
              throw "unexpected EOF";
            break;
          }
          $ && ge(Q + 131072);
          for (var Rt = Q + zt; Q < Rt; Q += 4)
            b[Q] = b[Q - dt], b[Q + 1] = b[Q + 1 - dt], b[Q + 2] = b[Q + 2 - dt], b[Q + 3] = b[Q + 3 - dt];
          Q = Rt;
        }
      }
      y.l = W, y.p = Xt, y.b = Q, W && (ye = 1, y.m = se, y.d = me, y.n = Me);
    } while (!ye);
    return Q === b.length ? b : Ft(b, 0, Q);
  }, Ut = function(m, b, y) {
    y <<= b & 7;
    var x = b >> 3 | 0;
    m[x] |= y, m[x + 1] |= y >>> 8;
  }, Yt = function(m, b, y) {
    y <<= b & 7;
    var x = b >> 3 | 0;
    m[x] |= y, m[x + 1] |= y >>> 8, m[x + 2] |= y >>> 16;
  }, Jt = function(m, b) {
    for (var y = [], x = 0; x < m.length; ++x)
      m[x] && y.push({ s: x, f: m[x] });
    var $ = y.length, M = y.slice();
    if (!$)
      return [pr, 0];
    if ($ === 1) {
      var ge = new f(y[0].s + 1);
      return ge[y[0].s] = 1, [ge, 1];
    }
    y.sort(function(st, ft) {
      return st.f - ft.f;
    }), y.push({ s: -1, f: 25001 });
    var ye = y[0], X = y[1], Q = 0, W = 1, me = 2;
    for (y[0] = { s: -1, f: ye.f + X.f, l: ye, r: X }; W !== $ - 1; )
      ye = y[y[Q].f < y[me].f ? Q++ : me++], X = y[Q !== W && y[Q].f < y[me].f ? Q++ : me++], y[W++] = { s: -1, f: ye.f + X.f, l: ye, r: X };
    for (var se = M[0].s, x = 1; x < $; ++x)
      M[x].s > se && (se = M[x].s);
    var Me = new d(se + 1), he = bn(y[W - 1], Me, 0);
    if (he > b) {
      var x = 0, je = 0, rt = he - b, gt = 1 << rt;
      for (M.sort(function(ft, ut) {
        return Me[ut.s] - Me[ft.s] || ft.f - ut.f;
      }); x < $; ++x) {
        var ce = M[x].s;
        if (Me[ce] > b)
          je += gt - (1 << he - Me[ce]), Me[ce] = b;
        else
          break;
      }
      for (je >>>= rt; je > 0; ) {
        var Le = M[x].s;
        Me[Le] < b ? je -= 1 << b - Me[Le]++ - 1 : ++x;
      }
      for (; x >= 0 && je; --x) {
        var Ee = M[x].s;
        Me[Ee] === b && (--Me[Ee], ++je);
      }
      he = b;
    }
    return [new f(Me), he];
  }, bn = function(m, b, y) {
    return m.s === -1 ? Math.max(bn(m.l, b, y + 1), bn(m.r, b, y + 1)) : b[m.s] = y;
  }, Nn = function(m) {
    for (var b = m.length; b && !m[--b]; )
      ;
    for (var y = new d(++b), x = 0, $ = m[0], M = 1, ge = function(X) {
      y[x++] = X;
    }, ye = 1; ye <= b; ++ye)
      if (m[ye] === $ && ye !== b)
        ++M;
      else {
        if (!$ && M > 2) {
          for (; M > 138; M -= 138)
            ge(32754);
          M > 2 && (ge(M > 10 ? M - 11 << 5 | 28690 : M - 3 << 5 | 12305), M = 0);
        } else if (M > 3) {
          for (ge($), --M; M > 6; M -= 6)
            ge(8304);
          M > 2 && (ge(M - 3 << 5 | 8208), M = 0);
        }
        for (; M--; )
          ge($);
        M = 1, $ = m[ye];
      }
    return [y.subarray(0, x), b];
  }, vt = function(m, b) {
    for (var y = 0, x = 0; x < b.length; ++x)
      y += m[x] * b[x];
    return y;
  }, Lt = function(m, b, y) {
    var x = y.length, $ = Te(b + 2);
    m[$] = x & 255, m[$ + 1] = x >>> 8, m[$ + 2] = m[$] ^ 255, m[$ + 3] = m[$ + 1] ^ 255;
    for (var M = 0; M < x; ++M)
      m[$ + M + 4] = y[M];
    return ($ + 4 + x) * 8;
  }, Je = function(m, b, y, x, $, M, ge, ye, X, Q, W) {
    Ut(b, W++, y), ++$[256];
    for (var me = Jt($, 15), se = me[0], Me = me[1], he = Jt(M, 15), je = he[0], rt = he[1], gt = Nn(se), ce = gt[0], Le = gt[1], Ee = Nn(je), st = Ee[0], ft = Ee[1], ut = new d(19), Oe = 0; Oe < ce.length; ++Oe)
      ut[ce[Oe] & 31]++;
    for (var Oe = 0; Oe < st.length; ++Oe)
      ut[st[Oe] & 31]++;
    for (var yt = Jt(ut, 7), Et = yt[0], gn = yt[1], bt = 19; bt > 4 && !Et[w[bt - 1]]; --bt)
      ;
    var kt = Q + 5 << 3, ht = vt($, ke) + vt(M, ze) + ge, Vt = vt($, se) + vt(M, je) + ge + 14 + 3 * bt + vt(ut, Et) + (2 * ut[16] + 3 * ut[17] + 7 * ut[18]);
    if (kt <= ht && kt <= Vt)
      return Lt(b, W, m.subarray(X, X + Q));
    var dt, _t, Wt, Xt;
    if (Ut(b, W, 1 + (Vt < ht)), W += 2, Vt < ht) {
      dt = Ne(se, Me, 0), _t = se, Wt = Ne(je, rt, 0), Xt = je;
      var on = Ne(Et, gn, 0);
      Ut(b, W, Le - 257), Ut(b, W + 5, ft - 1), Ut(b, W + 10, bt - 4), W += 14;
      for (var Oe = 0; Oe < bt; ++Oe)
        Ut(b, W + 3 * Oe, Et[w[Oe]]);
      W += 3 * bt;
      for (var zt = [ce, st], tn = 0; tn < 2; ++tn)
        for (var sn = zt[tn], Oe = 0; Oe < sn.length; ++Oe) {
          var jt = sn[Oe] & 31;
          Ut(b, W, on[jt]), W += Et[jt], jt > 15 && (Ut(b, W, sn[Oe] >>> 5 & 127), W += sn[Oe] >>> 12);
        }
    } else
      dt = nt, _t = ke, Wt = $n, Xt = ze;
    for (var Oe = 0; Oe < ye; ++Oe)
      if (x[Oe] > 255) {
        var jt = x[Oe] >>> 18 & 31;
        Yt(b, W, dt[jt + 257]), W += _t[jt + 257], jt > 7 && (Ut(b, W, x[Oe] >>> 23 & 31), W += S[jt]);
        var Rt = x[Oe] & 31;
        Yt(b, W, Wt[Rt]), W += Xt[Rt], Rt > 3 && (Yt(b, W, x[Oe] >>> 5 & 8191), W += F[Rt]);
      } else
        Yt(b, W, dt[x[Oe]]), W += _t[x[Oe]];
    return Yt(b, W, dt[256]), W + _t[256];
  }, it = E.of(65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632), pr = new f(0), On = function(m, b, y, x, $, M) {
    var ge = m.length, ye = new f(x + ge + 5 * (1 + Math.ceil(ge / 7e3)) + $), X = ye.subarray(x, ye.length - $), Q = 0;
    if (!b || ge < 8)
      for (var W = 0; W <= ge; W += 65535) {
        var me = W + 65535;
        me < ge ? Q = Lt(X, Q, m.subarray(W, me)) : (X[W] = M, Q = Lt(X, Q, m.subarray(W, ge)));
      }
    else {
      for (var se = it[b - 1], Me = se >>> 13, he = se & 8191, je = (1 << y) - 1, rt = new d(32768), gt = new d(je + 1), ce = Math.ceil(y / 3), Le = 2 * ce, Ee = function(kn) {
        return (m[kn] ^ m[kn + 1] << ce ^ m[kn + 2] << Le) & je;
      }, st = new E(25e3), ft = new d(288), ut = new d(32), Oe = 0, yt = 0, W = 0, Et = 0, gn = 0, bt = 0; W < ge; ++W) {
        var kt = Ee(W), ht = W & 32767, Vt = gt[kt];
        if (rt[ht] = Vt, gt[kt] = ht, gn <= W) {
          var dt = ge - W;
          if ((Oe > 7e3 || Et > 24576) && dt > 423) {
            Q = Je(m, X, 0, st, ft, ut, yt, Et, bt, W - bt, Q), Et = Oe = yt = 0, bt = W;
            for (var _t = 0; _t < 286; ++_t)
              ft[_t] = 0;
            for (var _t = 0; _t < 30; ++_t)
              ut[_t] = 0;
          }
          var Wt = 2, Xt = 0, on = he, zt = ht - Vt & 32767;
          if (dt > 2 && kt === Ee(W - zt))
            for (var tn = Math.min(Me, dt) - 1, sn = Math.min(32767, W), jt = Math.min(258, dt); zt <= sn && --on && ht !== Vt; ) {
              if (m[W + Wt] === m[W + Wt - zt]) {
                for (var Rt = 0; Rt < jt && m[W + Rt] === m[W + Rt - zt]; ++Rt)
                  ;
                if (Rt > Wt) {
                  if (Wt = Rt, Xt = zt, Rt > tn)
                    break;
                  for (var _r = Math.min(zt, Rt - 2), er = 0, _t = 0; _t < _r; ++_t) {
                    var Ln = W - zt + _t + 32768 & 32767, $i = rt[Ln], Jr = Ln - $i + 32768 & 32767;
                    Jr > er && (er = Jr, Vt = Ln);
                  }
                }
              }
              ht = Vt, Vt = rt[ht], zt += ht - Vt + 32768 & 32767;
            }
          if (Xt) {
            st[Et++] = 268435456 | Ae[Wt] << 18 | He[Xt];
            var Zr = Ae[Wt] & 31, Xr = He[Xt] & 31;
            yt += S[Zr] + F[Xr], ++ft[257 + Zr], ++ut[Xr], gn = W + Wt, ++Oe;
          } else
            st[Et++] = m[W], ++ft[m[W]];
        }
      }
      Q = Je(m, X, M, st, ft, ut, yt, Et, bt, W - bt, Q);
    }
    return Ft(ye, 0, x + Te(Q) + $);
  }, gr = function() {
    var m = 1, b = 0;
    return {
      p: function(y) {
        for (var x = m, $ = b, M = y.length | 0, ge = 0; ge !== M; ) {
          for (var ye = Math.min(ge + 2655, M); ge < ye; ++ge)
            $ += x += y[ge];
          x = (x & 65535) + 15 * (x >> 16), $ = ($ & 65535) + 15 * ($ >> 16);
        }
        m = x, b = $;
      },
      d: function() {
        return m %= 65521, b %= 65521, (m & 255) << 24 | m >>> 8 << 16 | (b & 255) << 8 | b >>> 8;
      }
    };
  }, pn = function(m, b, y, x, $) {
    return On(m, b.level == null ? 6 : b.level, b.mem == null ? Math.ceil(Math.max(8, Math.min(13, Math.log(m.length))) * 1.5) : 12 + b.mem, y, x, !$);
  }, p = function(m, b, y) {
    for (; y; ++b)
      m[b] = y, y >>>= 8;
  }, v = function(m, b) {
    var y = b.level, x = y === 0 ? 0 : y < 6 ? 1 : y === 9 ? 3 : 2;
    m[0] = 120, m[1] = x << 6 | (x ? 32 - 2 * x : 1);
  }, R = function(m) {
    if ((m[0] & 15) !== 8 || m[0] >>> 4 > 7 || (m[0] << 8 | m[1]) % 31)
      throw "invalid zlib data";
    if (m[1] & 32)
      throw "invalid zlib data: preset dictionaries not supported";
  };
  function C(m, b) {
    b || (b = {});
    var y = gr();
    y.p(m);
    var x = pn(m, b, 2, 4);
    return v(x, b), p(x, x.length - 4, y.d()), x;
  }
  function I(m, b) {
    return ln((R(m), m.subarray(2, -4)), b);
  }
  function H(m, b) {
    return C(m, { level: b });
  }
  function K(m, b) {
    try {
      return I(m, new Uint8Array(b));
    } catch (y) {
      throw y.message ? y : new Error(y);
    }
  }
  var B = new Uint8Array([73, 72, 68, 82]), z = new Uint8Array([73, 68, 65, 84]), U = new Uint8Array([73, 69, 78, 68]), Z = o(new Uint8Array([73, 69, 78, 68])), ue = new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]), ie = {
    GREYSCALE: 0,
    TRUECOLOR: 2,
    INDEXED_COLOR: 3,
    GREYSCALE_ALPHA: 4,
    TRUECOLOR_ALPHA: 6
  }, _e = {
    1: ie.GREYSCALE,
    2: ie.GREYSCALE_ALPHA,
    3: ie.TRUECOLOR,
    4: ie.TRUECOLOR_ALPHA
  }, Se = new TextEncoder();
  function Fe(m, { text: b, width: y, height: x, channels: $, depth: M = 8, level: ge = 0 }) {
    let ye = 0, X = 0;
    const Q = y * $, W = new Uint8Array(x + m.length);
    for (; ye < m.length; )
      W[X++] = 0, W.set(m.subarray(ye, ye += Q), X), X += Q;
    if (b) {
      let he = [];
      for (const je in b) {
        if (!b[je])
          continue;
        const rt = Se.encode(je), gt = Se.encode(b[je]), ce = new Uint8Array(13 + rt.length + gt.length), Le = new DataView(ce.buffer);
        ce[4] = 116, ce[5] = 69, ce[6] = 88, ce[7] = 116, ce.set(rt, 8), he.push(ce), ce.set(gt, 9 + rt.length), Le.setUint32(0, ce.length - 12), Le.setUint32(ce.length - 4, o(ce.subarray(4, ce.length - 4)));
      }
      b = u(he);
    }
    ye = b ? b.length : 0;
    const me = H(W, ge), se = new Uint8Array(49 + ye + ue.length + me.length);
    se[26] = 0, se[27] = 0, se[28] = 0, se[24] = M, se.set(ue, 0), se.set(B, 12), se.set(z, 37), se.set(me, 41), se[25] = _e[$], b && se.set(b, 45 + me.length), se.set(U, 49 + ye + me.length);
    const Me = new DataView(se.buffer);
    return Me.setUint32(8, 13), Me.setUint32(16, y), Me.setUint32(20, x), Me.setUint32(33, me.length), Me.setUint32(45 + ye + me.length, 0), Me.setUint32(53 + ye + me.length, Z), Me.setUint32(29, o(new Uint8Array(se.buffer, 12, 17))), Me.setUint32(41 + me.length, o(new Uint8Array(se.buffer, 37, 4 + me.length))), se;
  }
  function Ke(m) {
    let b = new DataView(m.buffer, m.byteOffset, m.byteLength);
    const y = b.getUint32(16), x = b.getUint32(20), $ = m[24], M = m[25];
    let ge = { 3: 1, 0: 1, 4: 2, 2: 3, 6: 4 }[M];
    const ye = ge * $ / 8, X = y * ye;
    let Q = new Uint8Array(x * X), W = 0, me = 0, se = 33;
    const Me = [];
    let he, je;
    const rt = m.length - 5;
    let gt;
    for (; (gt = b.getUint32(4 + se)) !== 1229278788; ) {
      if (gt === 1229209940)
        Me.push(m.subarray(8 + se, 8 + se + b.getUint32(se)));
      else if (gt === 1347179589) {
        if (he)
          throw new Error("PLTE can only occur once in an image");
        he = new Uint32Array(b.getUint32(se));
        for (let ce = 0; ce < he.length * 8; ce += 3)
          he[ce / 3] = m[8 + se + ce] << 24 | m[8 + se + ce + 1] << 16 | m[8 + se + ce + 2] << 8 | 255;
      } else if (gt === 1951551059) {
        if (je)
          throw new Error("tRNS can only occur once in an image");
        je = new Uint8Array(b.getUint32(se));
        for (let ce = 0; ce < je.length; ce++)
          je[ce] = m[8 + se + ce];
      }
      if (se += 12 + b.getUint32(se), se > rt)
        break;
    }
    for (m = K(Me.length === 1 ? Me[0] : u(Me), x + x * X); W < m.byteLength; ) {
      const ce = m[W++], Le = m.subarray(W, W += X);
      ce === 0 ? Q.set(Le, me) : ce === 1 ? Pe(Le, Q, me, ye, X) : ce === 2 ? qe(Le, Q, me, ye, X) : ce === 3 ? Zt(Le, Q, me, ye, X) : ce === 4 && Fn(Le, Q, me, ye, X), me += X;
    }
    if (M === 3) {
      if (!he)
        throw new Error("Indexed color PNG has no PLTE");
      if (je)
        for (let Ee = 0; Ee < je.length; Ee++)
          he[Ee] &= 4294967040 | je[Ee];
      ge = 4;
      const ce = new Uint8Array(y * x * 4), Le = new DataView(ce.buffer, ce.byteOffset, ce.byteLength);
      for (let Ee = 0; Ee < Q.length; Ee++)
        Le.setUint32(Ee * 4, he[Q[Ee]], !1);
      Q = ce;
    }
    if ($ !== 8) {
      const ce = new Uint8Array(Q.length / $ * 8);
      for (let Le = 0; Le < Q.length; Le += 2)
        ce[Le / 2] = Q[Le];
      Q = ce;
    }
    if (ge !== 4) {
      const ce = new Uint8Array(y * x * 4), Le = new DataView(ce.buffer);
      if (ge === 1)
        for (let Ee = 0; Ee < y * x; Ee++) {
          const st = Q[Ee];
          Le.setUint32(Ee * 4, st << 24 | st << 16 | st << 8 | 255, !1);
        }
      else if (ge === 2)
        for (let Ee = 0; Ee < y * x * 2; Ee += 2) {
          const st = Q[Ee];
          Le.setUint32(Ee * 2, st << 24 | st << 16 | st << 8 | Q[Ee + 1], !1);
        }
      else if (ge === 3) {
        ce.fill(255);
        for (let Ee = 0; Ee < y * x; Ee++)
          ce.set(Q.subarray(Ee * 3, Ee * 3 + 3), Ee * 4);
      }
      Q = ce;
    }
    return { width: y, height: x, pixels: Q };
  }
  function Pe(m, b, y, x, $) {
    let M = 0;
    for (; M < x; )
      b[M + y] = m[M++];
    for (; M < $; )
      b[M + y] = m[M] + b[M++ + y - x];
  }
  function qe(m, b, y, x, $) {
    if (y === 0)
      b.set(m, y);
    else {
      let M = 0;
      for (; M < $; )
        b[M + y] = m[M] + b[M++ + y - $];
    }
  }
  function Zt(m, b, y, x, $) {
    let M = 0;
    if (y === 0) {
      for (; M < x; )
        b[M] = m[M++];
      for (; M < $; )
        b[M] = m[M] + (b[M++ - x] >> 1);
    } else {
      for (; M < x; )
        b[M + y] = m[M] + (b[M++ + y - $] >> 1);
      for (; M < $; )
        b[M + y] = m[M] + (b[M + y - x] + b[M++ + y - $] >> 1);
    }
  }
  function Fn(m, b, y, x, $) {
    let M = 0;
    if (y === 0) {
      for (; M < x; )
        b[M] = m[M++];
      for (; M < $; )
        b[M] = m[M] + b[M++ - x];
    } else {
      for (; M < x; )
        b[M + y] = m[M] + b[M++ + y - $];
      for (; M < $; ) {
        const ge = b[M + y - x], ye = b[M + y - $], X = b[M + y - x - $], Q = ge + ye - X, W = Math.abs(Q - ge), me = Math.abs(Q - ye), se = Math.abs(Q - X);
        b[M + y] = m[M++] + (W <= me && W <= se ? ge : me <= se ? ye : X);
      }
    }
  }
})(jl);
function Hl(e, t = !1) {
  if (e instanceof ArrayBuffer)
    return new Uint8Array(e);
  if (t && e instanceof SharedArrayBuffer)
    return new Uint8Array(e);
  if (ArrayBuffer.isView(e))
    return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
  throw new TypeError("The provided value is not of type '(ArrayBuffer or ArrayBufferView)'");
}
function mu(e, t = !1) {
  let n = 0, r = 0;
  e.forEach((o) => n += o.byteLength == null ? o.length : o.byteLength);
  const i = new Uint8Array(t ? new SharedArrayBuffer(n) : n);
  return e.forEach((o) => {
    const c = Array.isArray(o) ? o : Hl(o, !0);
    i.set(c, r), r += c.length;
  }), i;
}
var vu = { view: Hl, from_parts: mu };
const yu = "imagescript", Eu = "1.3.0", bu = "zero-dependency javascript image manipulation", Nu = "ImageScript.js", Ou = "ImageScript.d.ts", xu = {
  test: "node ./tests/run.js",
  coverage: "nyc --reporter=html npm test"
}, Au = {
  type: "git",
  url: "git+https://github.com/matmen/ImageScript.git"
}, Du = [
  "image",
  "image processing",
  "image manipulation",
  "png",
  "jpeg",
  "jpg",
  "scale",
  "resize",
  "crop",
  "webp",
  "svg",
  "bitmap",
  "gif",
  "picture",
  "thumbnail"
], Su = "Mathis Mensing <mathis@matmen.dev>", Vu = "(AGPL-3.0-or-later OR MIT)", Ru = {
  url: "https://github.com/matmen/ImageScript/issues"
}, Tu = "https://github.com/matmen/ImageScript#readme", Mu = {
  node: ">=14.0.0"
}, Cu = {
  name: yu,
  version: Eu,
  description: bu,
  main: Nu,
  types: Ou,
  scripts: xu,
  repository: Au,
  keywords: Du,
  author: Su,
  license: Vu,
  bugs: Ru,
  homepage: Tu,
  engines: Mu
};
function Iu(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Bl = { exports: {} };
const Uu = {}, Pu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Uu }, Symbol.toStringTag, { value: "Module" })), rn = /* @__PURE__ */ wu(Pu), { arch: $u, platform: Fu } = rn;
try {
  Bl.exports = Iu(`./bin/${$u()}-${Fu()}.node`);
} catch (e) {
  throw new Error("unsupported arch/platform: " + e.message);
}
var Lu = Bl.exports, Gl = {};
(function(e) {
  var t = Object.defineProperty, n = (l) => t(l, "__esModule", { value: !0 }), r = (l, s) => {
    n(l);
    for (var a in s)
      t(l, a, { get: s[a], enumerable: !0 });
  };
  r(e, {
    Color: () => De,
    default: () => Jo
  });
  var i = {};
  r(i, {
    blend: () => We,
    default: () => De,
    from_rgba: () => S,
    parse: () => Ae,
    to_rgba: () => w
  });
  var o = /^#?([\da-f]{3,4})$/, c = /^#?((?:[\da-f]{2}){3,4})$/, u = /^rgba?\((?<r>(?:\d*\.)?\d+)(?: +| *, *)(?<g>(?:\d*\.)?\d+)(?: +| *, *)(?<b>(?:\d*\.)?\d+)(?:(?: +| *, *)(?<a>\d+|\d*\.\d+|\d+(?:\.\d+)?%))?\)$/, f = /^rgba?\((?<r>(?:\d*\.)?\d+)%(?: +| *, *)(?<g>(?:\d*\.)?\d+)%(?: +| *, *)(?<b>(?:\d*\.)?\d+)%(?:(?: +| *, *)(?<a>\d+|\d*\.\d+|\d+(?:\.\d+)?%))?\)$/, d = /^hsla?\((?<h>(?:\d*\.)?\d+)(?<t>|deg|rad|grad|turn)(?: +| *, *)(?<s>(?:\d*\.)?\d+)%(?: +| *, *)(?<l>(?:\d*\.)?\d+)%(?:(?: +| *, *)(?<a>\d+|\d*\.\d+|\d+(?:\.\d+)?%))?\)$/;
  function E(l, s, a) {
    return Math.min(Math.max(Math.round(a), l), s);
  }
  function w(l) {
    return [l >> 24 & 255, l >> 16 & 255, l >> 8 & 255, l & 255];
  }
  function S(l, s, a, h) {
    return (l & 255) << 24 | (s & 255) << 16 | (a & 255) << 8 | h & 255;
  }
  function F(l) {
    return E(0, 255, l[l.length - 1] === "%" ? 255 / 100 * parseFloat(l) : +l * 255);
  }
  function te(l, s) {
    if (s === "turn")
      return l / 1;
    if (s === "grad")
      return l / 400;
    if (!s || s === "deg")
      return l / 360;
    if (s === "rad")
      return l / (2 * Math.PI);
  }
  function ae(l, s, a) {
    return a < 0 ? a += 1 : a > 1 && (a -= 1), a < 1 / 2 ? s : a < 1 / 6 ? l + 6 * a * (s - l) : a < 2 / 3 ? l + 6 * (s - l) * (2 / 3 - a) : l;
  }
  function We(l, s) {
    const a = l & 255, h = a + 1 | 0, _ = 256 - a | 0, g = h * (l >>> 24) + _ * (s >>> 24) >> 8, O = h * (l >> 8 & 255) + _ * (s >> 8 & 255) >> 8, V = h * (l >> 16 & 255) + _ * (s >> 16 & 255) >> 8;
    return (g & 255) << 24 | (V & 255) << 16 | (O & 255) << 8 | Math.max(a, s & 255) & 255;
  }
  function Ae(l) {
    let s = null;
    return (s = $e.get(l)) !== void 0 ? s : (s = c.exec(l)) ? parseInt(`${s[1]}${s[1].length === 8 ? "" : "ff"}`, 16) : (s = d.exec(l)) ? De.hsla(te(s[1], s[2]), s[3] / 100, s[4] / 100, s[5] ? 1 / 255 * F(s[5]) : 1) : (s = u.exec(l)) ? De.rgba(E(0, 255, +s[1]), E(0, 255, +s[2]), E(0, 255, +s[3]), s[4] ? F(s[4]) : 255) : (s = o.exec(l)) ? parseInt(`${s[1][0]}${s[1][0]}${s[1][1]}${s[1][1]}${s[1][2]}${s[1][2]}${s[1].length === 3 ? "ff" : `${s[1][3]}${s[1][3]}`}`, 16) : (s = f.exec(l)) ? De.rgba(E(0, 255, +s[1] * (255 / 100)), E(0, 255, +s[2] * (255 / 100)), E(0, 255, +s[3] * (255 / 100)), s[4] ? F(s[4]) : 255) : null;
  }
  var De = class {
    constructor(l) {
      if (this.value = Ae(String(l).toLowerCase()), this.value === null)
        throw new Error(`invalid css color (${l})`);
    }
    static rgb(l, s, a) {
      return this.rgba(l, s, a, 255);
    }
    static rgba(l, s, a, h) {
      return (l & 255) << 24 | (s & 255) << 16 | (a & 255) << 8 | h & 255;
    }
    static hsla(l, s, a, h) {
      if (s = Math.min(1, Math.max(0, s)), h = Math.min(1, Math.max(0, h)), s === 0)
        return this.rgba(255, 255, 255, h * 255);
      l %= 1, a = Math.min(1, Math.max(0, a));
      const _ = a < 0.5 ? a + s * a : a + s - a * s, g = 2 * a - _, O = ae(g, _, l), V = ae(g, _, l + 1 / 3), D = ae(g, _, l - 1 / 3);
      return this.rgba(V * 255, O * 355, D * 255, h * 255);
    }
    valueOf() {
      return this.value;
    }
    toJSON() {
      return this.value >>> 0;
    }
    get rgb() {
      return [this.value >>> 24, this.value >> 16 & 255, this.value >> 8 & 255];
    }
    get rgba() {
      return [this.value >>> 24, this.value >> 16 & 255, this.value >> 8 & 255, this.value & 255];
    }
    get name() {
      for (const l of $e.keys())
        if (this.value === $e.get(l))
          return l;
      return null;
    }
    toString(l) {
      const s = String(l).toLowerCase(), a = this.rgba;
      return s === "rgb" || s === "rgba" ? `rgb${s[3] ? "a" : ""}(${a[0]}, ${a[1]}, ${a[2]}${s[3] ? `, ${E(0, 100, 100 / 255 * a[3])}%` : ""})` : s === "16" || s === "hex" ? `#${a[0].toString(16).padStart(2, "0")}${a[1].toString(16).padStart(2, "0")}${a[2].toString(16).padStart(2, "0")}${a[3] === 255 ? "" : a[3].toString(16).padStart(2, "0")}` : this.value.toString();
    }
  }, $e = /* @__PURE__ */ new Map([
    ["aliceblue", 4042850303],
    ["antiquewhite", 4209760255],
    ["aqua", 16777215],
    ["aquamarine", 2147472639],
    ["azure", 4043309055],
    ["beige", 4126530815],
    ["bisque", 4293182719],
    ["black", 255],
    ["blanchedalmond", 4293643775],
    ["blue", 65535],
    ["blueviolet", 2318131967],
    ["brown", 2771004159],
    ["burlywood", 3736635391],
    ["cadetblue", 1604231423],
    ["chartreuse", 2147418367],
    ["chocolate", 3530104575],
    ["coral", 4286533887],
    ["cornflowerblue", 1687547391],
    ["cornsilk", 4294499583],
    ["crimson", 3692313855],
    ["cyan", 16777215],
    ["darkblue", 35839],
    ["darkcyan", 9145343],
    ["darkgoldenrod", 3095792639],
    ["darkgray", 2846468607],
    ["darkgreen", 6553855],
    ["darkgrey", 2846468607],
    ["darkkhaki", 3182914559],
    ["darkmagenta", 2332068863],
    ["darkolivegreen", 1433087999],
    ["darkorange", 4287365375],
    ["darkorchid", 2570243327],
    ["darkred", 2332033279],
    ["darksalmon", 3918953215],
    ["darkseagreen", 2411499519],
    ["darkslateblue", 1211993087],
    ["darkslategray", 793726975],
    ["darkslategrey", 793726975],
    ["darkturquoise", 13554175],
    ["darkviolet", 2483082239],
    ["deeppink", 4279538687],
    ["deepskyblue", 12582911],
    ["dimgray", 1768516095],
    ["dimgrey", 1768516095],
    ["dodgerblue", 512819199],
    ["firebrick", 2988581631],
    ["floralwhite", 4294635775],
    ["forestgreen", 579543807],
    ["fuchsia", 4278255615],
    ["gainsboro", 3705462015],
    ["ghostwhite", 4177068031],
    ["gold", 4292280575],
    ["goldenrod", 3668254975],
    ["gray", 2155905279],
    ["green", 8388863],
    ["greenyellow", 2919182335],
    ["grey", 2155905279],
    ["honeydew", 4043305215],
    ["hotpink", 4285117695],
    ["indianred", 3445382399],
    ["indigo", 1258324735],
    ["ivory", 4294963455],
    ["khaki", 4041641215],
    ["lavender", 3873897215],
    ["lavenderblush", 4293981695],
    ["lawngreen", 2096890111],
    ["lemonchiffon", 4294626815],
    ["lightblue", 2916673279],
    ["lightcoral", 4034953471],
    ["lightcyan", 3774873599],
    ["lightgoldenrodyellow", 4210742015],
    ["lightgray", 3553874943],
    ["lightgreen", 2431553791],
    ["lightgrey", 3553874943],
    ["lightpink", 4290167295],
    ["lightsalmon", 4288707327],
    ["lightseagreen", 548580095],
    ["lightskyblue", 2278488831],
    ["lightslategray", 2005441023],
    ["lightslategrey", 2005441023],
    ["lightsteelblue", 2965692159],
    ["lightyellow", 4294959359],
    ["lime", 16711935],
    ["limegreen", 852308735],
    ["linen", 4210091775],
    ["magenta", 4278255615],
    ["maroon", 2147483903],
    ["mediumaquamarine", 1724754687],
    ["mediumblue", 52735],
    ["mediumorchid", 3126187007],
    ["mediumpurple", 2473647103],
    ["mediumseagreen", 1018393087],
    ["mediumslateblue", 2070474495],
    ["mediumspringgreen", 16423679],
    ["mediumturquoise", 1221709055],
    ["mediumvioletred", 3340076543],
    ["midnightblue", 421097727],
    ["mintcream", 4127193855],
    ["mistyrose", 4293190143],
    ["moccasin", 4293178879],
    ["navajowhite", 4292783615],
    ["navy", 33023],
    ["oldlace", 4260751103],
    ["olive", 2155872511],
    ["olivedrab", 1804477439],
    ["orange", 4289003775],
    ["orangered", 4282712319],
    ["orchid", 3664828159],
    ["palegoldenrod", 4008225535],
    ["palegreen", 2566625535],
    ["paleturquoise", 2951671551],
    ["palevioletred", 3681588223],
    ["papayawhip", 4293907967],
    ["peachpuff", 4292524543],
    ["peru", 3448061951],
    ["pink", 4290825215],
    ["plum", 3718307327],
    ["powderblue", 2967529215],
    ["purple", 2147516671],
    ["rebeccapurple", 1714657791],
    ["red", 4278190335],
    ["rosybrown", 3163525119],
    ["royalblue", 1097458175],
    ["saddlebrown", 2336560127],
    ["salmon", 4202722047],
    ["sandybrown", 4104413439],
    ["seagreen", 780883967],
    ["seashell", 4294307583],
    ["sienna", 2689740287],
    ["silver", 3233857791],
    ["skyblue", 2278484991],
    ["slateblue", 1784335871],
    ["slategray", 1887473919],
    ["slategrey", 1887473919],
    ["snow", 4294638335],
    ["springgreen", 16744447],
    ["steelblue", 1182971135],
    ["tan", 3535047935],
    ["teal", 8421631],
    ["thistle", 3636451583],
    ["tomato", 4284696575],
    ["transparent", 0],
    ["turquoise", 1088475391],
    ["violet", 4001558271],
    ["wheat", 4125012991],
    ["white", 4294967295],
    ["whitesmoke", 4126537215],
    ["yellow", 4294902015],
    ["yellowgreen", 2597139199]
  ]);
  function He(l, s = !1) {
    if (l instanceof ArrayBuffer)
      return new Uint8Array(l);
    if (s && l instanceof SharedArrayBuffer)
      return new Uint8Array(l);
    if (ArrayBuffer.isView(l))
      return new Uint8Array(l.buffer, l.byteOffset, l.byteLength);
    throw new TypeError("The provided value is not of type '(ArrayBuffer or ArrayBufferView)'");
  }
  var Ge = {};
  r(Ge, {
    horizontal: () => Ve,
    vertical: () => fe
  });
  function Ve(l) {
    let s = 0;
    const a = l.u32, h = l.width | 0, _ = l.height | 0;
    for (let g = 0; g < _; g++)
      a.subarray(s, s += h).reverse();
  }
  function fe(l) {
    const s = l.u32, a = l.width | 0, h = l.height | 0, _ = l.height / 2 | 0;
    for (let g = 0; g < _; g++) {
      const O = g * a | 0, V = a * (h - 1 - g) | 0;
      for (let D = 0; D < a; D++) {
        const T = D + O, A = D + V, j = s[T], P = s[A];
        s[A] = j, s[T] = P;
      }
    }
  }
  var Ne = {};
  r(Ne, {
    color: () => ke,
    fn: () => ze,
    swap: () => nt
  });
  function ke(l, s) {
    s.view.setUint32(0, l), s.u32.fill(s.u32[0]);
  }
  function ze(l, s) {
    let a = 0;
    const h = s.view, _ = s.width | 0, g = s.height | 0;
    for (let O = 1; O <= g; O++)
      for (let V = 1; V <= _; V++)
        h.setUint32(a, l(V, O), !1), a += 4;
  }
  function nt(l, s, a) {
    {
      const g = new Uint32Array(2), O = new DataView(g.buffer);
      l = (O.setUint32(0, l), g[0]), s = (O.setUint32(4, s), g[1]);
    }
    const h = a.u32, _ = a.u32.length | 0;
    for (let g = 0; g < _; g++)
      l === h[g] && (h[g] = s);
  }
  var St = {};
  r(St, {
    box: () => dr,
    cubic: () => $n,
    gaussian: () => qt
  });
  function $n(l) {
    const s = l.width, a = l.height;
    l.resize("cubic", Math.max(1, 8e-3 * s), Math.max(1, 8e-3 * a)), l.resize("cubic", s, a);
  }
  function dr(l, s) {
    if (!l)
      return;
    const a = s.u8, h = s.width, _ = s.height, g = s.u8.slice();
    Ye(a, g, h, _, l);
  }
  function qt(l, s) {
    if (0 >= l)
      return;
    const a = Math.exp(0.726 ** 2) / l, h = Math.exp(-a), _ = Math.exp(a * -2), g = s.u8.slice(), O = (1 - h) ** 2 / (1 - _ + 2 * a * h), V = -_, D = 2 * h, T = -O * _, A = O * h * (a - 1), j = O * h * (a + 1), P = (O + A) / (1 - D - V), ee = s.width | 0, re = (j + T) / (1 - D - V), oe = s.height | 0, J = new Float32Array(4 * Math.max(ee, oe));
    Ft(g, s.u8, J, ee, oe, O, A, j, T, D, V, P, re), Ft(s.u8, g, J, oe, ee, O, A, j, T, D, V, P, re);
  }
  function Ye(l, s, a, h, _) {
    const g = 1 / (1 + _ + _);
    Te(l, s, a, h, _, g), Ce(l, s, a, h, _, g);
  }
  function Ce(l, s, a, h, _, g) {
    for (var O = 0; O < h; O++) {
      let V = O * a, D = V, T = _ + V;
      const A = 4 * V, j = 4 * (a - 1 + V), P = s[A], ee = s[1 + A], re = s[2 + A], oe = s[3 + A], J = s[j], ne = s[1 + j], L = s[2 + j], pe = s[3 + j];
      let Y = P * (1 + _), le = ee * (1 + _), ve = re * (1 + _), we = oe * (1 + _);
      for (let G = 0; G < _; G++) {
        const k = 4 * (G + V);
        Y += s[k], le += s[1 + k], ve += s[2 + k], we += s[3 + k];
      }
      for (let G = 0; G <= _; G++) {
        let k = 4 * T++;
        Y += s[k] - P, le += s[1 + k] - ee, ve += s[2 + k] - re, we += s[3 + k] - oe, k = 4 * V++, l[k] = Math.round(Y * g), l[1 + k] = Math.round(le * g), l[2 + k] = Math.round(ve * g), l[3 + k] = Math.round(we * g);
      }
      for (let G = 1 + _; G < a - _; G++) {
        let k = 4 * T++;
        const Re = 4 * D++;
        Y += s[k] - s[Re], le += s[1 + k] - s[1 + Re], ve += s[2 + k] - s[2 + Re], we += s[3 + k] - s[3 + Re], k = 4 * V++, l[k] = Math.round(Y * g), l[1 + k] = Math.round(le * g), l[2 + k] = Math.round(ve * g), l[3 + k] = Math.round(we * g);
      }
      for (let G = a - _; G < a; G++) {
        let k = 4 * D++;
        Y += J - s[k], le += ne - s[1 + k], ve += L - s[2 + k], we += pe - s[3 + k], k = 4 * V++, l[k] = Math.round(Y * g), l[1 + k] = Math.round(le * g), l[2 + k] = Math.round(ve * g), l[3 + k] = Math.round(we * g);
      }
    }
  }
  function Te(l, s, a, h, _, g) {
    for (var O = 0; O < a; O++) {
      let V = O, D = V;
      const T = 4 * V;
      let A = V + a * _;
      const j = 4 * (V + a * (h - 1)), P = s[T], ee = s[1 + T], re = s[2 + T], oe = s[3 + T], J = s[j], ne = s[1 + j], L = s[2 + j], pe = s[3 + j];
      let Y = P * (1 + _), le = ee * (1 + _), ve = re * (1 + _), we = oe * (1 + _);
      for (let G = 0; G < _; G++) {
        const k = 4 * (V + G * a);
        Y += s[k], le += s[1 + k], ve += s[2 + k], we += s[3 + k];
      }
      for (let G = 0; G <= _; G++) {
        let k = 4 * A;
        Y += s[k] - P, le += s[1 + k] - ee, ve += s[2 + k] - re, we += s[3 + k] - oe, k = 4 * V, l[k] = Math.round(Y * g), l[1 + k] = Math.round(le * g), l[2 + k] = Math.round(ve * g), l[3 + k] = Math.round(we * g), A += a, V += a;
      }
      for (let G = 1 + _; G < h - _; G++) {
        let k = 4 * A;
        const Re = 4 * D;
        Y += s[k] - s[Re], le += s[1 + k] - s[1 + Re], ve += s[2 + k] - s[2 + Re], we += s[3 + k] - s[3 + Re], k = 4 * V, l[k] = Math.round(Y * g), l[1 + k] = Math.round(le * g), l[2 + k] = Math.round(ve * g), l[3 + k] = Math.round(we * g), D += a, A += a, V += a;
      }
      for (let G = h - _; G < h; G++) {
        let k = 4 * D;
        Y += J - s[k], le += ne - s[1 + k], ve += L - s[2 + k], we += pe - s[3 + k], k = 4 * V, l[k] = Math.round(Y * g), l[1 + k] = Math.round(le * g), l[2 + k] = Math.round(ve * g), l[3 + k] = Math.round(we * g), D += a, V += a;
      }
    }
  }
  function Ft(l, s, a, h, _, g, O, V, D, T, A, j, P) {
    const ee = h * 4, re = _ * 4, oe = _ * (h - 1);
    for (let J = 0; J < _; J++) {
      let ne = 0, L = J * ee | 0, pe = 4 * (J + oe) | 0, Y = s[L], le = s[1 + L], ve = s[2 + L], we = s[3 + L], G = j * Y, k = j * le, Re = j * ve, at = j * we, Ze = G, lt = k, Xe = Re, ot = at;
      for (let Mt = 0; Mt < h; Mt++) {
        const Nt = s[L++], Ct = s[L++], Pt = s[L++], wt = s[L++], Ot = g * Nt + O * Y + T * G + A * Ze, jn = g * Ct + O * le + T * k + A * lt, xn = g * Pt + O * ve + T * Re + A * Xe, _n = g * wt + O * we + T * at + A * ot;
        Ze = G, G = Ot, Y = Nt, lt = k, k = jn, le = Ct, Xe = Re, Re = xn, ve = Pt, ot = at, at = _n, we = wt, a[ne++] = G, a[ne++] = k, a[ne++] = Re, a[ne++] = at;
      }
      L -= 4, ne -= 4, Ze = P * (Y = s[L]), lt = P * (le = s[1 + L]), Xe = P * (ve = s[2 + L]), ot = P * (we = s[3 + L]), G = Ze, k = lt, Re = Xe, at = ot;
      let Qe = Y, et = le, At = ve, Tt = we;
      for (let Mt = h - 1; 0 <= Mt; Mt--) {
        const Nt = V * Qe + D * Y + T * G + A * Ze, Ct = V * et + D * le + T * k + A * lt, Pt = V * At + D * ve + T * Re + A * Xe, wt = V * Tt + D * we + T * at + A * ot;
        Ze = G, G = Nt, Y = Qe, lt = k, k = Ct, le = et, Xe = Re, Re = Pt, ve = At, ot = at, at = wt, we = Tt, Qe = s[L], et = s[1 + L], At = s[2 + L], Tt = s[3 + L], l[pe] = G + a[ne], l[1 + pe] = k + a[1 + ne], l[2 + pe] = Re + a[2 + ne], l[3 + pe] = at + a[3 + ne], L -= 4, ne -= 4, pe -= re;
      }
    }
  }
  var ln = {};
  r(ln, {
    circle: () => bn,
    crop: () => Jt,
    cut: () => Yt
  });
  function Ut(l, s, a) {
    const h = s < l ? l : s;
    return h > a ? a : h;
  }
  function Yt(l, s, a, h, _) {
    a |= 0, h |= 0;
    const g = new _.constructor(a, h), O = g.u32, V = _.u32, D = _.width | 0;
    for (let T = 0; T < h; T++) {
      const A = l + D * (s + T);
      O.set(V.subarray(A, a + A), T * a);
    }
    return g;
  }
  function Jt(l, s, a, h, _) {
    a |= 0, h |= 0;
    const g = _.u32, O = _.width | 0, V = _.u32 = new Uint32Array(a * h);
    for (let D = 0; D < h; D++) {
      const T = l + O * (s + D);
      V.set(g.subarray(T, a + T), D * a);
    }
    _.width = a, _.height = h, _.u8 = new Uint8Array(_.u32.buffer), _.view = new DataView(_.u32.buffer);
  }
  function bn(l, s) {
    const a = s.u8, h = s.u32, _ = s.width | 0, g = s.height | 0, O = Math.min(_, g) / 2, V = _ / 2, D = g / 2, T = O ** 2, A = l ** (1 / 2);
    for (let j = 0; j < g; j++) {
      const P = (j - D) ** 2, ee = j * _;
      for (let re = 0; re < _; re++) {
        const oe = P + (re - V) ** 2;
        oe > T ? h[re + ee] = 0 : l && (a[3 + 4 * (re + ee)] *= Ut(0, 1 - oe / T * A, 1));
      }
    }
    return s;
  }
  var Nn = {};
  r(Nn, {
    cubic: () => gr,
    linear: () => On,
    nearest: () => pr
  });
  function vt(l, s, a) {
    return a * s + l * (1 - a);
  }
  function Lt(l, s, a) {
    const h = s < l ? l : s;
    return h > a ? a : h;
  }
  function Je(l, s, a, h) {
    return 4 * (Lt(0, l, a - 1) + Lt(0, s, h - 1) * a);
  }
  function it(l, s, a, h, _) {
    const g = a / 2 + l / -2, O = l + a * 2 - h / 2 - s * 2.5, V = h / 2 + l / -2 + s * 1.5 - a * 1.5, D = _ * _;
    return s + g * _ + O * D + V * _ * D;
  }
  function pr(l, s, a) {
    l = l | 0, s = s | 0;
    const h = a.u32, _ = a.width | 0, g = a.height | 0, O = a.u32 = new Uint32Array(l * s), V = 1 / l, D = 1 / s, T = V * _, A = D * g;
    for (let j = 0; j < s; j++) {
      const P = j * l, ee = _ * (j * A | 0);
      for (let re = 0; re < l; re++)
        O[re + P] = h[ee + (re * T | 0)];
    }
    a.width = l, a.height = s, a.u8 = new Uint8Array(O.buffer), a.view = new DataView(O.buffer);
  }
  function On(l, s, a) {
    l = l | 0, s = s | 0;
    const h = a.u8, _ = a.width | 0, g = a.height | 0, O = new Uint8ClampedArray(4 * l * s);
    let V = 0;
    const D = 1 / (l - 1), T = 1 / (s - 1);
    for (let A = 0; A < s; A++) {
      const j = g * (A * T) - 0.5, P = j | 0, ee = j - P;
      for (let re = 0; re < l; re++) {
        const oe = _ * (re * D) - 0.5, J = oe | 0, ne = oe - J, L = Je(J, P, _, g), pe = Je(1 + J, P, _, g), Y = Je(J, 1 + P, _, g), le = Je(1 + J, 1 + P, _, g);
        O[V++] = vt(vt(h[L], h[Y], ne), vt(h[pe], h[le], ne), ee), O[V++] = vt(vt(h[1 + L], h[1 + Y], ne), vt(h[1 + pe], h[1 + le], ne), ee), O[V++] = vt(vt(h[2 + L], h[2 + Y], ne), vt(h[2 + pe], h[2 + le], ne), ee), O[V++] = vt(vt(h[3 + L], h[3 + Y], ne), vt(h[3 + pe], h[3 + le], ne), ee);
      }
    }
    a.width = l, a.height = s, a.u8 = new Uint8Array(O.buffer), a.view = new DataView(O.buffer), a.u32 = new Uint32Array(O.buffer);
  }
  function gr(l, s, a) {
    l = l | 0, s = s | 0;
    const h = a.u8, _ = a.width | 0, g = a.height | 0, O = new Uint8ClampedArray(4 * l * s);
    let V = 0;
    const D = 1 / (l - 1), T = 1 / (s - 1);
    for (let A = 0; A < s; A++) {
      const j = g * (A * T) - 0.5, P = j | 0, ee = j - P;
      for (let re = 0; re < l; re++) {
        const oe = _ * (re * D) - 0.5, J = oe | 0, ne = oe - J, L = Je(J - 1, P - 1, _, g), pe = Je(0 + J, P - 1, _, g), Y = Je(1 + J, P - 1, _, g), le = Je(2 + J, P - 1, _, g), ve = Je(J - 1, P, _, g), we = Je(0 + J, P, _, g), G = Je(1 + J, P, _, g), k = Je(2 + J, P, _, g), Re = Je(J - 1, 1 + P, _, g), at = Je(0 + J, 1 + P, _, g), Ze = Je(1 + J, 1 + P, _, g), lt = Je(2 + J, 1 + P, _, g), Xe = Je(J - 1, 2 + P, _, g), ot = Je(0 + J, 2 + P, _, g), Qe = Je(1 + J, 2 + P, _, g), et = Je(2 + J, 2 + P, _, g), At = it(h[L], h[pe], h[Y], h[le], ne), Tt = it(h[1 + L], h[1 + pe], h[1 + Y], h[1 + le], ne), Mt = it(h[2 + L], h[2 + pe], h[2 + Y], h[2 + le], ne), Nt = it(h[3 + L], h[3 + pe], h[3 + Y], h[3 + le], ne), Ct = it(h[ve], h[we], h[G], h[k], ne), Pt = it(h[1 + ve], h[1 + we], h[1 + G], h[1 + k], ne), wt = it(h[2 + ve], h[2 + we], h[2 + G], h[2 + k], ne), Ot = it(h[3 + ve], h[3 + we], h[3 + G], h[3 + k], ne), jn = it(h[Re], h[at], h[Ze], h[lt], ne), xn = it(h[1 + Re], h[1 + at], h[1 + Ze], h[1 + lt], ne), _n = it(h[2 + Re], h[2 + at], h[2 + Ze], h[2 + lt], ne), Fi = it(h[3 + Re], h[3 + at], h[3 + Ze], h[3 + lt], ne), Qr = it(h[Xe], h[ot], h[Qe], h[et], ne), ei = it(h[1 + Xe], h[1 + ot], h[1 + Qe], h[1 + et], ne), ti = it(h[2 + Xe], h[2 + ot], h[2 + Qe], h[2 + et], ne), ec = it(h[3 + Xe], h[3 + ot], h[3 + Qe], h[3 + et], ne);
        O[V++] = it(At, Ct, jn, Qr, ee), O[V++] = it(Tt, Pt, xn, ei, ee), O[V++] = it(Mt, wt, _n, ti, ee), O[V++] = it(Nt, Ot, Fi, ec, ee);
      }
    }
    a.width = l, a.height = s, a.u8 = new Uint8Array(O.buffer), a.view = new DataView(O.buffer), a.u32 = new Uint32Array(O.buffer);
  }
  var pn = {};
  r(pn, {
    rotate: () => C,
    rotate180: () => p,
    rotate270: () => R,
    rotate90: () => v
  });
  function p(l) {
    l.u32.reverse();
  }
  function v(l) {
    const s = l.u32, a = l.u32.slice(), h = l.width | 0, _ = l.height | 0;
    l.width = _, l.height = h;
    for (let g = 0; g < h; g++) {
      const O = g * h, V = _ - 1 - g;
      for (let D = 0; D < _; D++)
        s[V + D * h] = a[D + O];
    }
  }
  function R(l) {
    const s = l.u32, a = l.u32.slice(), h = l.width | 0, _ = l.height | 0;
    l.width = _, l.height = h;
    for (let g = 0; g < h; g++) {
      const O = g * h | 0, V = g + h * (h - 1) | 0;
      for (let D = 0; D < _; D++)
        s[V - D * h] = a[D + O];
    }
  }
  function C(l, s, a) {
    const h = Math.PI * ((360 - l) / 180), _ = Math.sin(h), g = Math.cos(h), O = (a ? Math.abs(s.width * _) + Math.abs(s.height * g) : s.width) | 0, V = (a ? Math.abs(s.width * g) + Math.abs(s.height * _) : s.height) | 0, D = O === s.width && V === s.height, T = D ? s.clone() : s, A = { width: O, height: V, u8: D ? s.u8 : new Uint8Array(4 * O * V) }, j = O / 2 - 0.5, P = V / 2 - 0.5, ee = s.width / 2 - 0.5, re = s.height / 2 - 0.5;
    let oe = 0;
    do {
      let J = 0;
      const ne = ee - _ * (oe - P), L = re + g * (oe - P);
      do
        I(T, A, J, oe, ne + g * (J - j), L + _ * (J - j));
      while (J++ < O);
    } while (oe++ < V);
    s.u8 = A.u8, s.width = O, s.height = V, s.view = new DataView(A.u8.buffer, A.u8.byteOffset, A.u8.byteLength), s.u32 = new Uint32Array(A.u8.buffer, A.u8.byteOffset, A.u8.byteLength / 4);
  }
  function I(l, s, a, h, _, g) {
    const O = ~~_, V = ~~g, D = _ - O, T = g - V, A = 4 * (a + h * s.width), j = { r: 0, g: 0, b: 0, a: 0 };
    H(O, V, (1 - D) * (1 - T), j, l), H(1 + O, V, D * (1 - T), j, l), H(O, 1 + V, (1 - D) * T, j, l), H(1 + O, 1 + V, D * T, j, l), s.u8[3 + A] = j.a, s.u8[A] = j.r / j.a, s.u8[1 + A] = j.g / j.a, s.u8[2 + A] = j.b / j.a;
  }
  function H(l, s, a, h, _) {
    if (l > 0 && s > 0 && l < _.width && s < _.height) {
      const g = 4 * (l + s * _.width), O = a * _.u8[3 + g];
      h.a += O, h.r += O * _.u8[g], h.g += O * _.u8[1 + g], h.b += O * _.u8[2 + g];
    }
  }
  var K = {};
  r(K, {
    blend: () => z,
    replace: () => B
  });
  function B(l, s, a, h) {
    const _ = l.u32, g = s.u32, O = s.width | 0, V = l.width | 0, D = s.height | 0, T = l.height | 0, A = (a > 0 ? 0 : -a) | 0, j = (h > 0 ? 0 : -h) | 0, P = (h > 0 ? h : 0) | 0, ee = (a > 0 ? a : 0) | 0, re = Math.min(V, a + O) - ee | 0, oe = Math.min(T, h + D) - P | 0;
    if (!(0 >= re || 0 >= oe))
      for (let J = 0; J < oe; J++) {
        const ne = A + O * (J + j), L = ee + V * (J + P);
        _.subarray(L, re + L).set(g.subarray(ne, re + ne));
      }
  }
  function z(l, s, a, h) {
    const _ = l.u32, g = s.u32, O = s.width | 0, V = l.width | 0, D = s.height | 0, T = l.height | 0, A = (a > 0 ? 0 : -a) | 0, j = (h > 0 ? 0 : -h) | 0, P = (h > 0 ? h : 0) | 0, ee = (a > 0 ? a : 0) | 0, re = Math.min(V, a + O) - ee | 0, oe = Math.min(T, h + D) - P | 0;
    if (!(0 >= re || 0 >= oe))
      for (let J = 0; J < oe; J++) {
        const ne = A + O * (J + j), L = ee + V * (J + P);
        for (let pe = 0; pe < re; pe++) {
          const Y = g[pe + ne], le = Y >> 24 & 255;
          if (le !== 0)
            if (le === 255)
              _[pe + L] = Y;
            else {
              const ve = 1 + le, we = 256 - le, G = _[pe + L], k = ve * (Y & 255) + we * (G & 255) >> 8, Re = ve * (Y >> 8 & 255) + we * (G >> 8 & 255) >> 8, at = ve * (Y >> 16 & 255) + we * (G >> 16 & 255) >> 8;
              _[pe + L] = Math.max(le, G >> 24 & 255) << 24 | (at & 255) << 16 | (Re & 255) << 8 | k;
            }
        }
      }
  }
  var U = {};
  r(U, {
    cords: () => Z,
    rgba: () => ue,
    u32: () => ie
  });
  function* Z(l) {
    const s = l.width | 0, a = l.height | 0;
    for (let h = 0; h < a; h++)
      for (let _ = 0; _ < s; _++)
        yield [_, h];
  }
  function* ue(l) {
    let s = 0;
    const a = l.u8, h = l.width | 0, _ = l.height | 0;
    for (let g = 0; g < _; g++)
      for (let O = 0; O < h; O++)
        yield [O, g, a.subarray(s, s += 4)];
  }
  function* ie(l) {
    let s = 0;
    const a = l.view, h = l.width | 0, _ = l.height | 0;
    for (let g = 0; g < _; g++)
      for (let O = 0; O < h; O++)
        yield [O, g, a.getUint32(s, !1)], s += 4;
  }
  var _e = new Uint32Array([
    0,
    1996959894,
    3993919788,
    2567524794,
    124634137,
    1886057615,
    3915621685,
    2657392035,
    249268274,
    2044508324,
    3772115230,
    2547177864,
    162941995,
    2125561021,
    3887607047,
    2428444049,
    498536548,
    1789927666,
    4089016648,
    2227061214,
    450548861,
    1843258603,
    4107580753,
    2211677639,
    325883990,
    1684777152,
    4251122042,
    2321926636,
    335633487,
    1661365465,
    4195302755,
    2366115317,
    997073096,
    1281953886,
    3579855332,
    2724688242,
    1006888145,
    1258607687,
    3524101629,
    2768942443,
    901097722,
    1119000684,
    3686517206,
    2898065728,
    853044451,
    1172266101,
    3705015759,
    2882616665,
    651767980,
    1373503546,
    3369554304,
    3218104598,
    565507253,
    1454621731,
    3485111705,
    3099436303,
    671266974,
    1594198024,
    3322730930,
    2970347812,
    795835527,
    1483230225,
    3244367275,
    3060149565,
    1994146192,
    31158534,
    2563907772,
    4023717930,
    1907459465,
    112637215,
    2680153253,
    3904427059,
    2013776290,
    251722036,
    2517215374,
    3775830040,
    2137656763,
    141376813,
    2439277719,
    3865271297,
    1802195444,
    476864866,
    2238001368,
    4066508878,
    1812370925,
    453092731,
    2181625025,
    4111451223,
    1706088902,
    314042704,
    2344532202,
    4240017532,
    1658658271,
    366619977,
    2362670323,
    4224994405,
    1303535960,
    984961486,
    2747007092,
    3569037538,
    1256170817,
    1037604311,
    2765210733,
    3554079995,
    1131014506,
    879679996,
    2909243462,
    3663771856,
    1141124467,
    855842277,
    2852801631,
    3708648649,
    1342533948,
    654459306,
    3188396048,
    3373015174,
    1466479909,
    544179635,
    3110523913,
    3462522015,
    1591671054,
    702138776,
    2966460450,
    3352799412,
    1504918807,
    783551873,
    3082640443,
    3233442989,
    3988292384,
    2596254646,
    62317068,
    1957810842,
    3939845945,
    2647816111,
    81470997,
    1943803523,
    3814918930,
    2489596804,
    225274430,
    2053790376,
    3826175755,
    2466906013,
    167816743,
    2097651377,
    4027552580,
    2265490386,
    503444072,
    1762050814,
    4150417245,
    2154129355,
    426522225,
    1852507879,
    4275313526,
    2312317920,
    282753626,
    1742555852,
    4189708143,
    2394877945,
    397917763,
    1622183637,
    3604390888,
    2714866558,
    953729732,
    1340076626,
    3518719985,
    2797360999,
    1068828381,
    1219638859,
    3624741850,
    2936675148,
    906185462,
    1090812512,
    3747672003,
    2825379669,
    829329135,
    1181335161,
    3412177804,
    3160834842,
    628085408,
    1382605366,
    3423369109,
    3138078467,
    570562233,
    1426400815,
    3317316542,
    2998733608,
    733239954,
    1555261956,
    3268935591,
    3050360625,
    752459403,
    1541320221,
    2607071920,
    3965973030,
    1969922972,
    40735498,
    2617837225,
    3943577151,
    1913087877,
    83908371,
    2512341634,
    3803740692,
    2075208622,
    213261112,
    2463272603,
    3855990285,
    2094854071,
    198958881,
    2262029012,
    4057260610,
    1759359992,
    534414190,
    2176718541,
    4139329115,
    1873836001,
    414664567,
    2282248934,
    4279200368,
    1711684554,
    285281116,
    2405801727,
    4167216745,
    1634467795,
    376229701,
    2685067896,
    3608007406,
    1308918612,
    956543938,
    2808555105,
    3495958263,
    1231636301,
    1047427035,
    2932959818,
    3654703836,
    1088359270,
    936918e3,
    2847714899,
    3736837829,
    1202900863,
    817233897,
    3183342108,
    3401237130,
    1404277552,
    615818150,
    3134207493,
    3453421203,
    1423857449,
    601450431,
    3009837614,
    3294710456,
    1567103746,
    711928724,
    3020668471,
    3272380065,
    1510334235,
    755167117
  ]);
  function Se(l) {
    let s = 0, a = -1;
    const h = l.length - 4 | 0;
    for (; h > s; )
      a = _e[(a ^ l[s++]) & 255] ^ a >>> 8, a = _e[(a ^ l[s++]) & 255] ^ a >>> 8, a = _e[(a ^ l[s++]) & 255] ^ a >>> 8, a = _e[(a ^ l[s++]) & 255] ^ a >>> 8;
    for (; s < l.length; )
      a = _e[(a ^ l[s++]) & 255] ^ a >>> 8;
    return (a ^ 4294967295) >>> 0;
  }
  function Fe(l, s = !1) {
    if (l instanceof ArrayBuffer)
      return new Uint8Array(l);
    if (s && l instanceof SharedArrayBuffer)
      return new Uint8Array(l);
    if (ArrayBuffer.isView(l))
      return new Uint8Array(l.buffer, l.byteOffset, l.byteLength);
    throw new TypeError("The provided value is not of type '(ArrayBuffer or ArrayBufferView)'");
  }
  function Ke(l, s = !1) {
    let a = 0, h = 0;
    l.forEach((g) => a += g.byteLength == null ? g.length : g.byteLength);
    const _ = new Uint8Array(s ? new SharedArrayBuffer(a) : a);
    return l.forEach((g) => {
      const O = Array.isArray(g) ? g : Fe(g, !0);
      _.set(O, h), h += O.length;
    }), _;
  }
  var Pe = Uint8Array, qe = Uint16Array, Zt = Uint32Array, Fn = Pe.of(16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15), m = Pe.of(0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0), b = Pe.of(0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0), y = function(l, s) {
    for (var a = new qe(31), h = 0; h < 31; ++h)
      a[h] = s += 1 << l[h - 1];
    for (var _ = new Zt(a[30]), h = 1; h < 30; ++h)
      for (var g = a[h]; g < a[h + 1]; ++g)
        _[g] = g - a[h] << 5 | h;
    return [a, _];
  }, x = y(m, 2), $ = x[0], M = x[1];
  $[28] = 258, M[258] = 28;
  var ge = y(b, 0), ye = ge[0], X = ge[1], Q = new qe(32768);
  for (he = 0; he < 32768; ++he)
    W = (he & 43690) >>> 1 | (he & 21845) << 1, W = (W & 52428) >>> 2 | (W & 13107) << 2, W = (W & 61680) >>> 4 | (W & 3855) << 4, Q[he] = ((W & 65280) >>> 8 | (W & 255) << 8) >>> 1;
  var he, W, me = function(l, s, a) {
    for (var h = l.length, _ = 0, g = new qe(s); _ < h; ++_)
      ++g[l[_] - 1];
    var O = new qe(s);
    for (_ = 0; _ < s; ++_)
      O[_] = O[_ - 1] + g[_ - 1] << 1;
    var V;
    if (a) {
      V = new qe(1 << s);
      var D = 15 - s;
      for (_ = 0; _ < h; ++_)
        if (l[_])
          for (var T = _ << 4 | l[_], A = s - l[_], j = O[l[_] - 1]++ << A, P = j | (1 << A) - 1; j <= P; ++j)
            V[Q[j] >>> D] = T;
    } else
      for (V = new qe(h), _ = 0; _ < h; ++_)
        l[_] && (V[_] = Q[O[l[_] - 1]++] >>> 15 - l[_]);
    return V;
  }, se = new Pe(288);
  for (he = 0; he < 144; ++he)
    se[he] = 8;
  var he;
  for (he = 144; he < 256; ++he)
    se[he] = 9;
  var he;
  for (he = 256; he < 280; ++he)
    se[he] = 7;
  var he;
  for (he = 280; he < 288; ++he)
    se[he] = 8;
  var he, Me = new Pe(32);
  for (he = 0; he < 32; ++he)
    Me[he] = 5;
  var he, je = me(se, 9, 0), rt = me(se, 9, 1), gt = me(Me, 5, 0), ce = me(Me, 5, 1), Le = function(l) {
    for (var s = l[0], a = 1; a < l.length; ++a)
      l[a] > s && (s = l[a]);
    return s;
  }, Ee = function(l, s, a) {
    var h = s >> 3 | 0;
    return (l[h] | l[h + 1] << 8) >> (s & 7) & a;
  }, st = function(l, s) {
    var a = s >> 3 | 0;
    return (l[a] | l[a + 1] << 8 | l[a + 2] << 16) >> (s & 7);
  }, ft = function(l) {
    return (l >> 3 | 0) + (l & 7 && 1);
  }, ut = function(l, s, a) {
    (a == null || a > l.length) && (a = l.length);
    var h = new (l instanceof qe ? qe : l instanceof Zt ? Zt : Pe)(a - s);
    return h.set(l.subarray(s, a)), h;
  }, Oe = function(l, s, a) {
    var h = l.length;
    if (!h || a && !a.l && h < 5)
      return s || new Pe(0);
    var _ = !s || a, g = !a || a.i;
    a || (a = {}), s || (s = new Pe(h * 3));
    var O = function(jn) {
      var xn = s.length;
      if (jn > xn) {
        var _n = new Pe(Math.max(xn * 2, jn));
        _n.set(s), s = _n;
      }
    }, V = a.f || 0, D = a.p || 0, T = a.b || 0, A = a.l, j = a.d, P = a.m, ee = a.n, re = h * 8;
    do {
      if (!A) {
        a.f = V = Ee(l, D, 1);
        var oe = Ee(l, D + 1, 3);
        if (D += 3, oe)
          if (oe === 1)
            A = rt, j = ce, P = 9, ee = 5;
          else if (oe === 2) {
            var pe = Ee(l, D, 31) + 257, Y = Ee(l, D + 10, 15) + 4, le = pe + Ee(l, D + 5, 31) + 1;
            D += 14;
            for (var ve = new Pe(le), we = new Pe(19), G = 0; G < Y; ++G)
              we[Fn[G]] = Ee(l, D + G * 3, 7);
            D += Y * 3;
            for (var k = Le(we), Re = (1 << k) - 1, at = me(we, k, 1), G = 0; G < le; ) {
              var Ze = at[Ee(l, D, Re)];
              D += Ze & 15;
              var J = Ze >>> 4;
              if (J < 16)
                ve[G++] = J;
              else {
                var lt = 0, Xe = 0;
                for (J === 16 ? (Xe = 3 + Ee(l, D, 3), D += 2, lt = ve[G - 1]) : J === 17 ? (Xe = 3 + Ee(l, D, 7), D += 3) : J === 18 && (Xe = 11 + Ee(l, D, 127), D += 7); Xe--; )
                  ve[G++] = lt;
              }
            }
            var ot = ve.subarray(0, pe), Qe = ve.subarray(pe);
            P = Le(ot), ee = Le(Qe), A = me(ot, P, 1), j = me(Qe, ee, 1);
          } else
            throw "invalid block type";
        else {
          var J = ft(D) + 4, ne = l[J - 4] | l[J - 3] << 8, L = J + ne;
          if (L > h) {
            if (g)
              throw "unexpected EOF";
            break;
          }
          _ && O(T + ne), s.set(l.subarray(J, L), T), a.b = T += ne, a.p = D = L * 8;
          continue;
        }
        if (D > re) {
          if (g)
            throw "unexpected EOF";
          break;
        }
      }
      _ && O(T + 131072);
      for (var et = (1 << P) - 1, At = (1 << ee) - 1, Tt = D; ; Tt = D) {
        var lt = A[st(l, D) & et], Mt = lt >>> 4;
        if (D += lt & 15, D > re) {
          if (g)
            throw "unexpected EOF";
          break;
        }
        if (!lt)
          throw "invalid length/literal";
        if (Mt < 256)
          s[T++] = Mt;
        else if (Mt === 256) {
          Tt = D, A = null;
          break;
        } else {
          var Nt = Mt - 254;
          if (Mt > 264) {
            var G = Mt - 257, Ct = m[G];
            Nt = Ee(l, D, (1 << Ct) - 1) + $[G], D += Ct;
          }
          var Pt = j[st(l, D) & At], wt = Pt >>> 4;
          if (!Pt)
            throw "invalid distance";
          D += Pt & 15;
          var Qe = ye[wt];
          if (wt > 3) {
            var Ct = b[wt];
            Qe += st(l, D) & (1 << Ct) - 1, D += Ct;
          }
          if (D > re) {
            if (g)
              throw "unexpected EOF";
            break;
          }
          _ && O(T + 131072);
          for (var Ot = T + Nt; T < Ot; T += 4)
            s[T] = s[T - Qe], s[T + 1] = s[T + 1 - Qe], s[T + 2] = s[T + 2 - Qe], s[T + 3] = s[T + 3 - Qe];
          T = Ot;
        }
      }
      a.l = A, a.p = Tt, a.b = T, A && (V = 1, a.m = P, a.d = j, a.n = ee);
    } while (!V);
    return T === s.length ? s : ut(s, 0, T);
  }, yt = function(l, s, a) {
    a <<= s & 7;
    var h = s >> 3 | 0;
    l[h] |= a, l[h + 1] |= a >>> 8;
  }, Et = function(l, s, a) {
    a <<= s & 7;
    var h = s >> 3 | 0;
    l[h] |= a, l[h + 1] |= a >>> 8, l[h + 2] |= a >>> 16;
  }, gn = function(l, s) {
    for (var a = [], h = 0; h < l.length; ++h)
      l[h] && a.push({ s: h, f: l[h] });
    var _ = a.length, g = a.slice();
    if (!_)
      return [Wt, 0];
    if (_ === 1) {
      var O = new Pe(a[0].s + 1);
      return O[a[0].s] = 1, [O, 1];
    }
    a.sort(function(le, ve) {
      return le.f - ve.f;
    }), a.push({ s: -1, f: 25001 });
    var V = a[0], D = a[1], T = 0, A = 1, j = 2;
    for (a[0] = { s: -1, f: V.f + D.f, l: V, r: D }; A !== _ - 1; )
      V = a[a[T].f < a[j].f ? T++ : j++], D = a[T !== A && a[T].f < a[j].f ? T++ : j++], a[A++] = { s: -1, f: V.f + D.f, l: V, r: D };
    for (var P = g[0].s, h = 1; h < _; ++h)
      g[h].s > P && (P = g[h].s);
    var ee = new qe(P + 1), re = bt(a[A - 1], ee, 0);
    if (re > s) {
      var h = 0, oe = 0, J = re - s, ne = 1 << J;
      for (g.sort(function(ve, we) {
        return ee[we.s] - ee[ve.s] || ve.f - we.f;
      }); h < _; ++h) {
        var L = g[h].s;
        if (ee[L] > s)
          oe += ne - (1 << re - ee[L]), ee[L] = s;
        else
          break;
      }
      for (oe >>>= J; oe > 0; ) {
        var pe = g[h].s;
        ee[pe] < s ? oe -= 1 << s - ee[pe]++ - 1 : ++h;
      }
      for (; h >= 0 && oe; --h) {
        var Y = g[h].s;
        ee[Y] === s && (--ee[Y], ++oe);
      }
      re = s;
    }
    return [new Pe(ee), re];
  }, bt = function(l, s, a) {
    return l.s === -1 ? Math.max(bt(l.l, s, a + 1), bt(l.r, s, a + 1)) : s[l.s] = a;
  }, kt = function(l) {
    for (var s = l.length; s && !l[--s]; )
      ;
    for (var a = new qe(++s), h = 0, _ = l[0], g = 1, O = function(D) {
      a[h++] = D;
    }, V = 1; V <= s; ++V)
      if (l[V] === _ && V !== s)
        ++g;
      else {
        if (!_ && g > 2) {
          for (; g > 138; g -= 138)
            O(32754);
          g > 2 && (O(g > 10 ? g - 11 << 5 | 28690 : g - 3 << 5 | 12305), g = 0);
        } else if (g > 3) {
          for (O(_), --g; g > 6; g -= 6)
            O(8304);
          g > 2 && (O(g - 3 << 5 | 8208), g = 0);
        }
        for (; g--; )
          O(_);
        g = 1, _ = l[V];
      }
    return [a.subarray(0, h), s];
  }, ht = function(l, s) {
    for (var a = 0, h = 0; h < s.length; ++h)
      a += l[h] * s[h];
    return a;
  }, Vt = function(l, s, a) {
    var h = a.length, _ = ft(s + 2);
    l[_] = h & 255, l[_ + 1] = h >>> 8, l[_ + 2] = l[_] ^ 255, l[_ + 3] = l[_ + 1] ^ 255;
    for (var g = 0; g < h; ++g)
      l[_ + g + 4] = a[g];
    return (_ + 4 + h) * 8;
  }, dt = function(l, s, a, h, _, g, O, V, D, T, A) {
    yt(s, A++, a), ++_[256];
    for (var j = gn(_, 15), P = j[0], ee = j[1], re = gn(g, 15), oe = re[0], J = re[1], ne = kt(P), L = ne[0], pe = ne[1], Y = kt(oe), le = Y[0], ve = Y[1], we = new qe(19), G = 0; G < L.length; ++G)
      we[L[G] & 31]++;
    for (var G = 0; G < le.length; ++G)
      we[le[G] & 31]++;
    for (var k = gn(we, 7), Re = k[0], at = k[1], Ze = 19; Ze > 4 && !Re[Fn[Ze - 1]]; --Ze)
      ;
    var lt = T + 5 << 3, Xe = ht(_, se) + ht(g, Me) + O, ot = ht(_, P) + ht(g, oe) + O + 14 + 3 * Ze + ht(we, Re) + (2 * we[16] + 3 * we[17] + 7 * we[18]);
    if (lt <= Xe && lt <= ot)
      return Vt(s, A, l.subarray(D, D + T));
    var Qe, et, At, Tt;
    if (yt(s, A, 1 + (ot < Xe)), A += 2, ot < Xe) {
      Qe = me(P, ee, 0), et = P, At = me(oe, J, 0), Tt = oe;
      var Mt = me(Re, at, 0);
      yt(s, A, pe - 257), yt(s, A + 5, ve - 1), yt(s, A + 10, Ze - 4), A += 14;
      for (var G = 0; G < Ze; ++G)
        yt(s, A + 3 * G, Re[Fn[G]]);
      A += 3 * Ze;
      for (var Nt = [L, le], Ct = 0; Ct < 2; ++Ct)
        for (var Pt = Nt[Ct], G = 0; G < Pt.length; ++G) {
          var wt = Pt[G] & 31;
          yt(s, A, Mt[wt]), A += Re[wt], wt > 15 && (yt(s, A, Pt[G] >>> 5 & 127), A += Pt[G] >>> 12);
        }
    } else
      Qe = je, et = se, At = gt, Tt = Me;
    for (var G = 0; G < V; ++G)
      if (h[G] > 255) {
        var wt = h[G] >>> 18 & 31;
        Et(s, A, Qe[wt + 257]), A += et[wt + 257], wt > 7 && (yt(s, A, h[G] >>> 23 & 31), A += m[wt]);
        var Ot = h[G] & 31;
        Et(s, A, At[Ot]), A += Tt[Ot], Ot > 3 && (Et(s, A, h[G] >>> 5 & 8191), A += b[Ot]);
      } else
        Et(s, A, Qe[h[G]]), A += et[h[G]];
    return Et(s, A, Qe[256]), A + et[256];
  }, _t = Zt.of(65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632), Wt = new Pe(0), Xt = function(l, s, a, h, _, g) {
    var O = l.length, V = new Pe(h + O + 5 * (1 + Math.ceil(O / 7e3)) + _), D = V.subarray(h, V.length - _), T = 0;
    if (!s || O < 8)
      for (var A = 0; A <= O; A += 65535) {
        var j = A + 65535;
        j < O ? T = Vt(D, T, l.subarray(A, j)) : (D[A] = g, T = Vt(D, T, l.subarray(A, O)));
      }
    else {
      for (var P = _t[s - 1], ee = P >>> 13, re = P & 8191, oe = (1 << a) - 1, J = new qe(32768), ne = new qe(oe + 1), L = Math.ceil(a / 3), pe = 2 * L, Y = function(Li) {
        return (l[Li] ^ l[Li + 1] << L ^ l[Li + 2] << pe) & oe;
      }, le = new Zt(25e3), ve = new qe(288), we = new qe(32), G = 0, k = 0, A = 0, Re = 0, at = 0, Ze = 0; A < O; ++A) {
        var lt = Y(A), Xe = A & 32767, ot = ne[lt];
        if (J[Xe] = ot, ne[lt] = Xe, at <= A) {
          var Qe = O - A;
          if ((G > 7e3 || Re > 24576) && Qe > 423) {
            T = dt(l, D, 0, le, ve, we, k, Re, Ze, A - Ze, T), Re = G = k = 0, Ze = A;
            for (var et = 0; et < 286; ++et)
              ve[et] = 0;
            for (var et = 0; et < 30; ++et)
              we[et] = 0;
          }
          var At = 2, Tt = 0, Mt = re, Nt = Xe - ot & 32767;
          if (Qe > 2 && lt === Y(A - Nt))
            for (var Ct = Math.min(ee, Qe) - 1, Pt = Math.min(32767, A), wt = Math.min(258, Qe); Nt <= Pt && --Mt && Xe !== ot; ) {
              if (l[A + At] === l[A + At - Nt]) {
                for (var Ot = 0; Ot < wt && l[A + Ot] === l[A + Ot - Nt]; ++Ot)
                  ;
                if (Ot > At) {
                  if (At = Ot, Tt = Nt, Ot > Ct)
                    break;
                  for (var jn = Math.min(Nt, Ot - 2), xn = 0, et = 0; et < jn; ++et) {
                    var _n = A - Nt + et + 32768 & 32767, Fi = J[_n], Qr = _n - Fi + 32768 & 32767;
                    Qr > xn && (xn = Qr, ot = _n);
                  }
                }
              }
              Xe = ot, ot = J[Xe], Nt += Xe - ot + 32768 & 32767;
            }
          if (Tt) {
            le[Re++] = 268435456 | M[At] << 18 | X[Tt];
            var ei = M[At] & 31, ti = X[Tt] & 31;
            k += m[ei] + b[ti], ++ve[257 + ei], ++we[ti], at = A + At, ++G;
          } else
            le[Re++] = l[A], ++ve[l[A]];
        }
      }
      T = dt(l, D, g, le, ve, we, k, Re, Ze, A - Ze, T);
    }
    return ut(V, 0, h + ft(T) + _);
  }, on = function() {
    var l = 1, s = 0;
    return {
      p: function(a) {
        for (var h = l, _ = s, g = a.length | 0, O = 0; O !== g; ) {
          for (var V = Math.min(O + 2655, g); O < V; ++O)
            _ += h += a[O];
          h = (h & 65535) + 15 * (h >> 16), _ = (_ & 65535) + 15 * (_ >> 16);
        }
        l = h, s = _;
      },
      d: function() {
        return l %= 65521, s %= 65521, (l & 255) << 24 | l >>> 8 << 16 | (s & 255) << 8 | s >>> 8;
      }
    };
  }, zt = function(l, s, a, h, _) {
    return Xt(l, s.level == null ? 6 : s.level, s.mem == null ? Math.ceil(Math.max(8, Math.min(13, Math.log(l.length))) * 1.5) : 12 + s.mem, a, h, !_);
  }, tn = function(l, s, a) {
    for (; a; ++s)
      l[s] = a, a >>>= 8;
  }, sn = function(l, s) {
    var a = s.level, h = a === 0 ? 0 : a < 6 ? 1 : a === 9 ? 3 : 2;
    l[0] = 120, l[1] = h << 6 | (h ? 32 - 2 * h : 1);
  }, jt = function(l) {
    if ((l[0] & 15) !== 8 || l[0] >>> 4 > 7 || (l[0] << 8 | l[1]) % 31)
      throw "invalid zlib data";
    if (l[1] & 32)
      throw "invalid zlib data: preset dictionaries not supported";
  };
  function Rt(l, s) {
    s || (s = {});
    var a = on();
    a.p(l);
    var h = zt(l, s, 2, 4);
    return sn(h, s), tn(h, h.length - 4, a.d()), h;
  }
  function _r(l, s) {
    return Oe((jt(l), l.subarray(2, -4)), s);
  }
  function er(l, s) {
    return Rt(l, { level: s });
  }
  function Ln(l, s) {
    try {
      return _r(l, new Uint8Array(s));
    } catch (a) {
      throw a.message ? a : new Error(a);
    }
  }
  var $i = new Uint8Array([73, 72, 68, 82]), Jr = new Uint8Array([73, 68, 65, 84]), Zr = new Uint8Array([73, 69, 78, 68]), Xr = Se(new Uint8Array([73, 69, 78, 68])), qo = new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]), kn = {
    GREYSCALE: 0,
    TRUECOLOR: 2,
    INDEXED_COLOR: 3,
    GREYSCALE_ALPHA: 4,
    TRUECOLOR_ALPHA: 6
  }, Kl = {
    1: kn.GREYSCALE,
    2: kn.GREYSCALE_ALPHA,
    3: kn.TRUECOLOR,
    4: kn.TRUECOLOR_ALPHA
  }, Yo = new TextEncoder();
  function ql(l, { text: s, width: a, height: h, channels: _, depth: g = 8, level: O = 0 }) {
    let V = 0, D = 0;
    const T = a * _, A = new Uint8Array(h + l.length);
    for (; V < l.length; )
      A[D++] = 0, A.set(l.subarray(V, V += T), D), D += T;
    if (s) {
      let re = [];
      for (const oe in s) {
        if (!s[oe])
          continue;
        const J = Yo.encode(oe), ne = Yo.encode(s[oe]), L = new Uint8Array(13 + J.length + ne.length), pe = new DataView(L.buffer);
        L[4] = 116, L[5] = 69, L[6] = 88, L[7] = 116, L.set(J, 8), re.push(L), L.set(ne, 9 + J.length), pe.setUint32(0, L.length - 12), pe.setUint32(L.length - 4, Se(L.subarray(4, L.length - 4)));
      }
      s = Ke(re);
    }
    V = s ? s.length : 0;
    const j = er(A, O), P = new Uint8Array(49 + V + qo.length + j.length);
    P[26] = 0, P[27] = 0, P[28] = 0, P[24] = g, P.set(qo, 0), P.set($i, 12), P.set(Jr, 37), P.set(j, 41), P[25] = Kl[_], s && P.set(s, 45 + j.length), P.set(Zr, 49 + V + j.length);
    const ee = new DataView(P.buffer);
    return ee.setUint32(8, 13), ee.setUint32(16, a), ee.setUint32(20, h), ee.setUint32(33, j.length), ee.setUint32(45 + V + j.length, 0), ee.setUint32(53 + V + j.length, Xr), ee.setUint32(29, Se(new Uint8Array(P.buffer, 12, 17))), ee.setUint32(41 + j.length, Se(new Uint8Array(P.buffer, 37, 4 + j.length))), P;
  }
  function Yl(l) {
    let s = new DataView(l.buffer, l.byteOffset, l.byteLength);
    const a = s.getUint32(16), h = s.getUint32(20), _ = l[24], g = l[25];
    let O = { 3: 1, 0: 1, 4: 2, 2: 3, 6: 4 }[g];
    const V = O * _ / 8, D = a * V;
    let T = new Uint8Array(h * D), A = 0, j = 0, P = 33;
    const ee = [];
    let re, oe;
    const J = l.length - 5;
    let ne;
    for (; (ne = s.getUint32(4 + P)) !== 1229278788; ) {
      if (ne === 1229209940)
        ee.push(l.subarray(8 + P, 8 + P + s.getUint32(P)));
      else if (ne === 1347179589) {
        if (re)
          throw new Error("PLTE can only occur once in an image");
        re = new Uint32Array(s.getUint32(P));
        for (let L = 0; L < re.length * 8; L += 3)
          re[L / 3] = l[8 + P + L] << 24 | l[8 + P + L + 1] << 16 | l[8 + P + L + 2] << 8 | 255;
      } else if (ne === 1951551059) {
        if (oe)
          throw new Error("tRNS can only occur once in an image");
        oe = new Uint8Array(s.getUint32(P));
        for (let L = 0; L < oe.length; L++)
          oe[L] = l[8 + P + L];
      }
      if (P += 12 + s.getUint32(P), P > J)
        break;
    }
    for (l = Ln(ee.length === 1 ? ee[0] : Ke(ee), h + h * D); A < l.byteLength; ) {
      const L = l[A++], pe = l.subarray(A, A += D);
      L === 0 ? T.set(pe, j) : L === 1 ? Jl(pe, T, j, V, D) : L === 2 ? Zl(pe, T, j, V, D) : L === 3 ? Xl(pe, T, j, V, D) : L === 4 && Ql(pe, T, j, V, D), j += D;
    }
    if (g === 3) {
      if (!re)
        throw new Error("Indexed color PNG has no PLTE");
      if (oe)
        for (let Y = 0; Y < oe.length; Y++)
          re[Y] &= 4294967040 | oe[Y];
      O = 4;
      const L = new Uint8Array(a * h * 4), pe = new DataView(L.buffer, L.byteOffset, L.byteLength);
      for (let Y = 0; Y < T.length; Y++)
        pe.setUint32(Y * 4, re[T[Y]], !1);
      T = L;
    }
    if (_ !== 8) {
      const L = new Uint8Array(T.length / _ * 8);
      for (let pe = 0; pe < T.length; pe += 2)
        L[pe / 2] = T[pe];
      T = L;
    }
    if (O !== 4) {
      const L = new Uint8Array(a * h * 4), pe = new DataView(L.buffer);
      if (O === 1)
        for (let Y = 0; Y < a * h; Y++) {
          const le = T[Y];
          pe.setUint32(Y * 4, le << 24 | le << 16 | le << 8 | 255, !1);
        }
      else if (O === 2)
        for (let Y = 0; Y < a * h * 2; Y += 2) {
          const le = T[Y];
          pe.setUint32(Y * 2, le << 24 | le << 16 | le << 8 | T[Y + 1], !1);
        }
      else if (O === 3) {
        L.fill(255);
        for (let Y = 0; Y < a * h; Y++)
          L.set(T.subarray(Y * 3, Y * 3 + 3), Y * 4);
      }
      T = L;
    }
    return { width: a, height: h, buffer: T };
  }
  function Jl(l, s, a, h, _) {
    let g = 0;
    for (; g < h; )
      s[g + a] = l[g++];
    for (; g < _; )
      s[g + a] = l[g] + s[g++ + a - h];
  }
  function Zl(l, s, a, h, _) {
    if (a === 0)
      s.set(l, a);
    else {
      let g = 0;
      for (; g < _; )
        s[g + a] = l[g] + s[g++ + a - _];
    }
  }
  function Xl(l, s, a, h, _) {
    let g = 0;
    if (a === 0) {
      for (; g < h; )
        s[g] = l[g++];
      for (; g < _; )
        s[g] = l[g] + (s[g++ - h] >> 1);
    } else {
      for (; g < h; )
        s[g + a] = l[g] + (s[g++ + a - _] >> 1);
      for (; g < _; )
        s[g + a] = l[g] + (s[g + a - h] + s[g++ + a - _] >> 1);
    }
  }
  function Ql(l, s, a, h, _) {
    let g = 0;
    if (a === 0) {
      for (; g < h; )
        s[g] = l[g++];
      for (; g < _; )
        s[g] = l[g] + s[g++ - h];
    } else {
      for (; g < h; )
        s[g + a] = l[g] + s[g++ + a - _];
      for (; g < _; ) {
        const O = s[g + a - h], V = s[g + a - _], D = s[g + a - h - _], T = O + V - D, A = Math.abs(T - O), j = Math.abs(T - V), P = Math.abs(T - D);
        s[g + a] = l[g++] + (A <= j && A <= P ? O : j <= P ? V : D);
      }
    }
  }
  var Jo = class {
    constructor(l, s, a) {
      if (this.width = l | 0, this.height = s | 0, this.u8 = a ? He(a) : new Uint8Array(4 * this.width * this.height), this.view = new DataView(this.u8.buffer, this.u8.byteOffset, this.u8.byteLength), this.u32 = new Uint32Array(this.u8.buffer, this.u8.byteOffset, this.u8.byteLength / 4), this.u8.length !== 4 * this.width * this.height)
        throw new RangeError("invalid capacity of buffer");
    }
    [Symbol.iterator]() {
      return U.cords(this);
    }
    toString() {
      return `framebuffer<${this.width}x${this.height}>`;
    }
    get(l, s) {
      return this.view.getUint32((l | 0) + (s | 0) * this.width, !1);
    }
    clone() {
      return new this.constructor(this.width, this.height, this.u8.slice());
    }
    set(l, s, a) {
      this.view.setUint32((l | 0) + (s | 0) * this.width, a, !1);
    }
    toJSON() {
      return { width: this.width, height: this.height, buffer: Array.from(this.u8) };
    }
    scale(l, s) {
      return this.resize(l, s * this.width, s * this.height);
    }
    overlay(l, s = 0, a = 0) {
      return K.blend(this, l, s | 0, a | 0), this;
    }
    replace(l, s = 0, a = 0) {
      return K.replace(this, l, s | 0, a | 0), this;
    }
    at(l, s) {
      const a = 4 * ((l | 0) + (s | 0) * this.width);
      return this.u8.subarray(a, 4 + a);
    }
    static from(l) {
      return new this(l.width, l.height, l.u8 || l.buffer);
    }
    static decode(l, s) {
      if (l !== "png")
        throw new RangeError("invalid image format");
      return Jo.from(Yl(s));
    }
    encode(l, s = {}) {
      var a;
      if (l !== "png")
        throw new RangeError("invalid image format");
      return ql(this.u8, { channels: 4, width: this.width, height: this.height, level: (a = { none: 0, fast: 3, default: 6, best: 9 }[s.compression]) != null ? a : 3 });
    }
    pixels(l) {
      if (l === "rgba")
        return U.rgba(this);
      if (!l || l === "int")
        return U.u32(this);
      throw new RangeError("invalid iterator type");
    }
    flip(l) {
      if (l === "vertical")
        Ge.vertical(this);
      else if (l === "horizontal")
        Ge.horizontal(this);
      else
        throw new RangeError("invalid flip type");
      return this;
    }
    crop(l, s, a, h, _) {
      if (l === "circle")
        ln.circle(s || 0, this);
      else if (l === "box")
        ln.crop(s | 0, a | 0, h | 0, _ | 0, this);
      else
        throw new RangeError("invalid crop type");
      return this;
    }
    cut(l, s, a, h, _) {
      if (l === "circle")
        return ln.circle(s || 0, this.clone());
      if (l === "box")
        return ln.cut(s | 0, a | 0, h | 0, _ | 0, this);
      throw new RangeError("invalid cut type");
    }
    rotate(l, s = !0) {
      return (l %= 360) === 0 ? this : (l === 90 ? pn.rotate90(this) : l === 180 ? pn.rotate180(this) : l === 270 ? pn.rotate270(this) : pn.rotate(l, this, s), this);
    }
    blur(l, s) {
      if (l === "cubic")
        St.cubic(this);
      else if (l === "box")
        St.box(+s, this);
      else if (l === "gaussian")
        St.gaussian(+s, this);
      else
        throw new RangeError("invalid blur type");
      return this;
    }
    fill(l) {
      const s = typeof l;
      if (s === "function")
        Ne.fn(l, this);
      else if (s === "number")
        Ne.color(l, this);
      else if (l instanceof De)
        Ne.color(l.valueOf(), this);
      else if (Array.isArray(l))
        Ne.color(i.from_rgba(...l), this);
      else
        throw new TypeError("invalid fill color");
      return this;
    }
    swap(l, s) {
      const a = typeof l;
      if (a === typeof s && a === "number")
        Ne.swap(l, s, this);
      else if (l instanceof De && s instanceof De)
        Ne.swap(l.valueOf(), s.valueOf(), this);
      else if (Array.isArray(l) && Array.isArray(s))
        Ne.swap(i.from_rgba(...l), i.from_rgba(...s), this);
      else
        throw new RangeError("invalid swap color");
      return this;
    }
    resize(l, s, a) {
      if (s === this.width && a === this.height)
        return this;
      if (l === "cubic")
        Nn.cubic(s, a, this);
      else if (l === "linear")
        Nn.linear(s, a, this);
      else if (l === "nearest")
        Nn.nearest(s, a, this);
      else
        throw new RangeError("invalid resize type");
      return this;
    }
  };
})(Gl);
var ku = {};
const ju = "svg", { join: Hu } = rn, { promises: { readFile: Bu } } = rn, Gu = ku.IMAGESCRIPT_WASM_SIMD ? "simd" : "any";
let Ji = null;
var Wu = {
  async init() {
    return Ji || (Ji = new WebAssembly.Module(await Bu(Hu(__dirname, `../${Gu}/${ju}.wasm`)))), this.new();
  },
  new() {
    const e = new WebAssembly.Instance(Ji).exports;
    class t {
      static length() {
        return e.wlen();
      }
      static alloc(o) {
        return e.walloc(o);
      }
      static free(o, c) {
        return e.wfree(o, c);
      }
      static u8(o, c) {
        return new Uint8Array(e.memory.buffer, o, c);
      }
      static u32(o, c) {
        return new Uint32Array(e.memory.buffer, o, c);
      }
      static copy_and_free(o, c) {
        let u = t.u8(o, c).slice();
        return e.wfree(o, c), u;
      }
    }
    function n(i, o) {
      if (!o)
        return r(i, 0, 0);
      if (o.zoom)
        return r(i, 1, o.zoom);
      if (o.width)
        return r(i, 2, o.width);
      if (o.height)
        return r(i, 3, o.height);
    }
    function r(i, o, c) {
      const u = t.alloc(i.length);
      t.u8(u, i.length).set(i);
      const f = e.rasterize(u, i.length, o, c);
      if (f === 0)
        throw new Error("svg: failed to parse");
      if (f === 1)
        throw new Error("svg: failed to rasterize");
      const d = {
        width: e.rasterize_width(f),
        height: e.rasterize_height(f),
        buffer: t.u8(e.rasterize_buffer(f), t.length()).slice()
      };
      return e.rasterize_free(f), d;
    }
    return { load: n, rasterize: r };
  }
}, zu = {};
const Ku = "gif", { join: qu } = rn, { promises: { readFile: Yu } } = rn, Ju = zu.IMAGESCRIPT_WASM_SIMD ? "simd" : "any";
let Zi = null;
var Zu = {
  async init() {
    return Zi || (Zi = new WebAssembly.Module(await Yu(qu(__dirname, `../${Ju}/${Ku}.wasm`)))), this.new();
  },
  new() {
    const e = new WebAssembly.Instance(Zi, { env: { push_to_stream(i, o) {
    } } }).exports;
    class t {
      static length() {
        return e.wlen();
      }
      static alloc(o) {
        return e.walloc(o);
      }
      static free(o, c) {
        return e.wfree(o, c);
      }
      static u8(o, c) {
        return new Uint8Array(e.memory.buffer, o, c);
      }
      static u32(o, c) {
        return new Uint32Array(e.memory.buffer, o, c);
      }
      static copy_and_free(o, c) {
        let u = t.u8(o, c).slice();
        return e.wfree(o, c), u;
      }
    }
    function n(i) {
      return [...new r(i).frames()];
    }
    class r {
      constructor(o, c = 0) {
        const u = t.alloc(o.length);
        if (t.u8(u, o.length).set(o), this.ptr = e.decoder_new(u, o.length, c), this.ptr === 0)
          throw new Error("gif: failed to parse gif header");
        this.width = e.decoder_width(this.ptr), this.height = e.decoder_height(this.ptr);
      }
      free() {
        this.ptr = e.decoder_free(this.ptr);
      }
      *frames() {
        let o;
        for (; o = this.frame(); )
          yield o;
      }
      frame() {
        const o = e.decoder_frame(this.ptr);
        if (o === 1)
          return null;
        if (o === 0)
          throw this.free(), new Error("gif: failed to decode frame");
        const c = {
          x: e.decoder_frame_x(o),
          y: e.decoder_frame_y(o),
          delay: e.decoder_frame_delay(o),
          width: e.decoder_frame_width(o),
          height: e.decoder_frame_height(o),
          dispose: e.decoder_frame_dispose(o),
          buffer: t.u8(e.decoder_frame_buffer(o), t.length()).slice()
        };
        return e.decoder_frame_free(o), c;
      }
    }
    return { load: n, Decoder: r };
  }
}, Xu = {};
const Qu = "png", { join: eh } = rn, { promises: { readFile: th } } = rn, nh = Xu.IMAGESCRIPT_WASM_SIMD ? "simd" : "any";
let Xi = null;
var rh = {
  async init() {
    return Xi || (Xi = new WebAssembly.Module(await th(eh(__dirname, `../${nh}/${Qu}.wasm`)))), this.new();
  },
  new() {
    let e;
    const {
      wfree: t,
      walloc: n,
      decode: r,
      memory: i,
      width: o,
      height: c
    } = new WebAssembly.Instance(Xi, {
      env: {
        emscripten_notify_memory_growth() {
          e = new Uint8Array(i.buffer);
        }
      }
    }).exports;
    return e = new Uint8Array(i.buffer), {
      decode(u) {
        const f = n(u.length);
        e.set(u, f);
        const d = r(f, u.length);
        if (t(f), 0 > d)
          throw new Error(`png: failed to decode (${d})`);
        const E = o(), w = c(), S = e.slice(d, d + 4 * E * w);
        return t(d), { width: E, height: w, framebuffer: S };
      }
    };
  }
}, ih = {};
const oh = "font", { join: sh } = rn, { promises: { readFile: lh } } = rn, ch = ih.IMAGESCRIPT_WASM_SIMD ? "simd" : "any";
let Qi = null;
var ah = {
  async init() {
    return Qi || (Qi = new WebAssembly.Module(await lh(sh(__dirname, `../${ch}/${oh}.wasm`)))), this.new();
  },
  new() {
    let e = null;
    const t = new WebAssembly.Instance(Qi).exports;
    class n {
      static length() {
        return t.wlen();
      }
      static alloc(f) {
        return t.walloc(f);
      }
      static free(f, d) {
        return t.wfree(f, d);
      }
      static u8(f, d) {
        return new Uint8Array(t.memory.buffer, f, d);
      }
      static u32(f, d) {
        return new Uint32Array(t.memory.buffer, f, d);
      }
      static copy_and_free(f, d) {
        let E = n.u8(f, d).slice();
        return t.wfree(f, d), E;
      }
    }
    const r = "Deno" in globalThis ? Deno.core.encode : (() => {
      const u = new TextEncoder();
      return (f) => u.encode(f);
    })(), i = "Deno" in globalThis ? Deno.core.decode : (() => {
      const u = new TextDecoder();
      return (f) => u.decode(f);
    })();
    "FinalizationRegistry" in globalThis && (e = new FinalizationRegistry(([u, f]) => {
      u === 0 && t.font_free(f), u === 1 && t.layout_free(f);
    }));
    class o {
      constructor(f, d) {
        this.scale = f;
        const E = n.alloc(d.length);
        if (n.u8(E, d.length).set(d), this.ptr = t.font_new(E, d.length, f), !this.ptr)
          throw new Error("invalid font");
        e && e.register(this, [0, this.ptr], this);
      }
      free() {
        this.ptr = t.font_free(this.ptr), e && e.unregister(this);
      }
      has(f) {
        return t.font_has(this.ptr, String.prototype.charCodeAt.call(f, 0));
      }
      metrics(f, d = this.scale) {
        const E = t.font_metrics(this.ptr, String.prototype.charCodeAt.call(f, 0), d), w = JSON.parse(i(n.u8(t.font_metrics_buffer(E), n.length())));
        return t.font_metrics_free(E), w;
      }
      rasterize(f, d = this.scale) {
        const E = t.font_rasterize(this.ptr, String.prototype.charCodeAt.call(f, 0), d), w = {
          buffer: n.u8(t.font_rasterize_buffer(E), n.length()).slice(),
          metrics: JSON.parse(i(n.u8(t.font_rasterize_metrics(E), n.length())))
        };
        return t.font_rasterize_free(E), w;
      }
    }
    class c {
      constructor() {
        this.ptr = t.layout_new(), e && (this.refs = []), e && e.register(this, [1, this.ptr], this);
      }
      clear() {
        t.layout_clear(this.ptr), e && (this.refs.length = 0);
      }
      lines() {
        return t.layout_lines(this.ptr);
      }
      free() {
        e && (this.refs.length = 0), this.ptr = t.layout_free(this.ptr), e && e.unregister(this);
      }
      reset(f = {}) {
        f = r(JSON.stringify(f)), e && (this.refs.length = 0);
        const d = n.alloc(f.length);
        n.u8(d, f.length).set(f), t.layout_reset(this.ptr, d, f.length);
      }
      append(f, d, E) {
        d = r(d);
        const w = E || {};
        e && this.refs.push(f);
        const S = n.alloc(d.length);
        n.u8(S, d.length).set(d);
        const F = "r" in w || "g" in w || "b" in w;
        t.layout_append(this.ptr, f.ptr, S, d.length, w.scale == null ? f.scale : w.scale, F, w.r, w.g, w.b);
      }
      rasterize(f, d, E) {
        const w = t.layout_rasterize(this.ptr, f, d, E), S = {
          width: t.layout_rasterize_width(w),
          height: t.layout_rasterize_height(w),
          buffer: n.u8(t.layout_rasterize_buffer(w), n.length()).slice()
        };
        return t.layout_rasterize_free(w), S;
      }
    }
    return { Font: o, Layout: c };
  }
}, fh = {};
const uh = "jpeg", { join: hh } = rn, { promises: { readFile: dh } } = rn, ph = fh.IMAGESCRIPT_WASM_SIMD ? "simd" : "any";
let eo = null;
var gh = {
  async init() {
    return eo || (eo = new WebAssembly.Module(await dh(hh(__dirname, `../${ph}/${uh}.wasm`)))), this.new();
  },
  new() {
    const e = new WebAssembly.Instance(eo).exports;
    class t {
      static length() {
        return e.wlen();
      }
      static alloc(o) {
        return e.walloc(o);
      }
      static free(o, c) {
        return e.wfree(o, c);
      }
      static u8(o, c) {
        return new Uint8Array(e.memory.buffer, o, c);
      }
      static u32(o, c) {
        return new Uint32Array(e.memory.buffer, o, c);
      }
      static copy_and_free(o, c) {
        let u = t.u8(o, c).slice();
        return e.wfree(o, c), u;
      }
    }
    function n(i, o, c) {
      const u = t.alloc(i.length);
      t.u8(u, i.length).set(i);
      const f = e.decode(u, i.length, o, c);
      if (f === 0)
        throw new Error("jpg: failed to decode");
      if (f === 1)
        throw new Error("jpg: failed to scale decoder");
      const d = {
        width: e.decode_width(f),
        height: e.decode_height(f),
        format: e.decode_format(f),
        buffer: t.u8(e.decode_buffer(f), t.length()).slice()
      };
      return e.decode_free(f), d;
    }
    function r(i) {
      const o = n(i), c = o.buffer;
      if (o.format !== 2 && (o.buffer = new Uint8Array(4 * o.width * o.height)), o.format === 0) {
        let u = 0;
        const f = new DataView(o.buffer.buffer);
        for (; u < c.length; )
          f.setUint32(4 * u, c[u] << 24 | c[u] << 16 | c[u++] << 8 | 255, !1);
      } else if (o.format === 2) {
        let u = 0;
        for (; u < c.length; ) {
          const f = c[3 + u];
          c[u] = f * c[u++] / 255, c[u] = f * c[u++] / 255, c[u] = f * c[u++] / 255, c[u++] = 255;
        }
      } else if (o.format === 1) {
        let u = 0, f = 0;
        o.buffer.fill(255);
        const d = 3 * o.width * o.height;
        for (; u < d; )
          o.buffer[f++] = c[u++], o.buffer[f++] = c[u++], o.buffer[f++] = c[u++], f++;
      }
      return o;
    }
    return { load: r, decode: n };
  }
}, _h = {};
const wh = "tiff", { join: mh } = rn, { promises: { readFile: vh } } = rn, yh = _h.IMAGESCRIPT_WASM_SIMD ? "simd" : "any";
let to = null;
var Eh = {
  async init() {
    return to || (to = new WebAssembly.Module(await vh(mh(__dirname, `../${yh}/${wh}.wasm`)))), this.new();
  },
  new() {
    const e = new WebAssembly.Instance(to).exports;
    class t {
      static length() {
        return e.wlen();
      }
      static alloc(i) {
        return e.walloc(i);
      }
      static free(i, o) {
        return e.wfree(i, o);
      }
      static u8(i, o) {
        return new Uint8Array(e.memory.buffer, i, o);
      }
      static u32(i, o) {
        return new Uint32Array(e.memory.buffer, i, o);
      }
      static copy_and_free(i, o) {
        let c = t.u8(i, o).slice();
        return e.wfree(i, o), c;
      }
    }
    function n(r) {
      const i = t.alloc(r.length);
      t.u8(i, r.length).set(r);
      const o = e.decode(i, r.length);
      if (o === 0)
        throw new Error("tiff: failed to decode");
      const c = {
        width: e.decode_width(o),
        height: e.decode_height(o),
        buffer: t.u8(e.decode_buffer(o), t.length()).slice()
      };
      return e.decode_free(o), c;
    }
    return { decode: n, load: n };
  }
};
const bh = jl, Wl = vu, { version: Nh } = Cu, bo = Lu, { default: An } = Gl, Oh = Wu, xh = Zu, Ah = rh, Dh = ah, Sh = gh, Vh = Eh, ai = {
  PNG: 2303741511,
  JPEG: 16767231,
  TIFF: 1229531648,
  GIF: 4671814
};
class de {
  /**
   * Creates a new image with the given dimensions
   * @param {number} width
   * @param {number} height
   * @returns {Image}
   */
  constructor(t, n) {
    if (t = ~~t, n = ~~n, t < 1)
      throw new RangeError("Image has to be at least 1 pixel wide");
    if (n < 1)
      throw new RangeError("Image has to be at least 1 pixel high");
    this.__width__ = t, this.__height__ = n, this.__buffer__ = new ArrayBuffer(t * n * 4), this.__view__ = new DataView(this.__buffer__), this.__u32__ = new Uint32Array(this.__buffer__), this.bitmap = new Uint8ClampedArray(this.__buffer__);
  }
  /**
   * @private
   * @returns {string}
   */
  toString() {
    return `Image<${this.width}x${this.height}>`;
  }
  /**
   * The images width
   * @returns {number}
   */
  get width() {
    return this.__width__;
  }
  /**
   * The images height
   * @returns {number}
   */
  get height() {
    return this.__height__;
  }
  /**
   * Yields an [x, y] array for every pixel in the image
   * @yields {number[]} The coordinates of the pixel ([x, y])
   * @returns {void}
   */
  *[Symbol.iterator]() {
    for (const t of new An(this.width, this.height, this.bitmap)[Symbol.iterator]())
      yield (t[0]++, t[1]++, t);
  }
  /**
   * Yields an [x, y, color] array for every pixel in the image
   * @yields {number[]} The coordinates and color of the pixel ([x, y, color])
   */
  *iterateWithColors() {
    for (const t of new An(this.width, this.height, this.bitmap).pixels("int"))
      yield (t[0]++, t[1]++, t);
  }
  /**
   * Converts RGBA components to an RGBA value
   * @param {number} r red (0..255)
   * @param {number} g green (0..255)
   * @param {number} b blue (0..255)
   * @param {number} a alpha (0..255)
   * @returns {number} RGBA value
   */
  static rgbaToColor(t, n, r, i) {
    return ((t & 255) << 24 | (n & 255) << 16 | (r & 255) << 8 | i & 255) >>> 0;
  }
  /**
   * Converts RGB components to an RGBA value (assuming alpha = 255)
   * @param {number} r red (0..255)
   * @param {number} g green (0..255)
   * @param {number} b blue (0..255)
   * @returns {number} RGBA value
   */
  static rgbToColor(t, n, r) {
    return de.rgbaToColor(t, n, r, 255);
  }
  /**
   * Converts HSLA colors to RGBA colors
   * @param {number} h hue (0..1)
   * @param {number} s saturation (0..1)
   * @param {number} l lightness (0..1)
   * @param {number} a opacity (0..1)
   * @returns {number} color
   */
  static hslaToColor(t, n, r, i) {
    t %= 1, n = Math.min(1, Math.max(0, n)), r = Math.min(1, Math.max(0, r)), i = Math.min(1, Math.max(0, i));
    let o, c, u;
    if (n === 0)
      o = c = u = r;
    else {
      const f = (w, S, F) => (F < 0 && (F += 1), F > 1 && (F -= 1), F < 0.16666666666666666 ? w + (S - w) * 6 * F : F < 0.5 ? S : F < 0.6666666666666666 ? w + (S - w) * (0.6666666666666666 - F) * 6 : w), d = r < 0.5 ? r * (1 + n) : r + n - r * n, E = 2 * r - d;
      o = f(E, d, t + 1 / 3), c = f(E, d, t), u = f(E, d, t - 1 / 3);
    }
    return de.rgbaToColor(o * 255, c * 255, u * 255, i * 255);
  }
  /**
   * Converts HSL colors to RGBA colors (assuming an opacity of 255)
   * @param {number} h hue (0..1)
   * @param {number} s saturation (0..1)
   * @param {number} l lightness (0..1)
   * @returns {number} color
   */
  static hslToColor(t, n, r) {
    return de.hslaToColor(t, n, r, 1);
  }
  /**
   * Converts an RGBA value to an array of HSLA values
   * @param r {number} (0..255)
   * @param g {number} (0..255)
   * @param b {number} (0..255)
   * @param a {number} (0..255)
   * @returns {number[]} The HSLA values ([H, S, L, A])
   */
  static rgbaToHSLA(t, n, r, i) {
    t /= 255, n /= 255, r /= 255;
    const o = Math.max(t, n, r), c = Math.min(t, n, r);
    let u, f, d = (o + c) / 2;
    if (o === c)
      u = f = 0;
    else {
      const E = o - c;
      switch (f = d > 0.5 ? E / (2 - o - c) : E / (o + c), o) {
        case t:
          u = (n - r) / E + (n < r ? 6 : 0);
          break;
        case n:
          u = (r - t) / E + 2;
          break;
        case r:
          u = (t - n) / E + 4;
          break;
      }
      u /= 6;
    }
    return [u, f, d, i / 255];
  }
  /**
   * Converts a color value to an array of RGBA values
   * @param {number} color The color value to convert
   * @returns {number[]} The RGBA values ([R, G, B, A])
   */
  static colorToRGBA(t) {
    return [t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, t & 255];
  }
  /**
   * Converts a color value to an array of RGB values (ignoring the colors alpha)
   * @param {number} color The color value to convert
   * @returns {number[]} The RGB values ([R, G, B])
   */
  static colorToRGB(t) {
    return de.colorToRGBA(t).slice(0, 3);
  }
  /**
   * Gets the pixel color at the specified position
   * @param {number} x
   * @param {number} y
   * @returns {number} The color value
   */
  getPixelAt(t, n) {
    return this.__check_boundaries__(t, n), this.__view__.getUint32(((~~n - 1) * this.width + (~~t - 1)) * 4, !1);
  }
  /**
   * Gets the pixel color at the specified position
   * @param {number} x
   * @param {number} y
   * @returns {Uint8ClampedArray} The RGBA value
   */
  getRGBAAt(t, n) {
    this.__check_boundaries__(t, n);
    const r = ((~~n - 1) * this.width + (~~t - 1)) * 4;
    return this.bitmap.subarray(r, r + 4);
  }
  /**
   * Sets the pixel color for the specified position
   * @param {number} x
   * @param {number} y
   * @param {number} pixelColor
   */
  setPixelAt(t, n, r) {
    return t = ~~t, n = ~~n, this.__check_boundaries__(t, n), this.__set_pixel__(t, n, r), this;
  }
  /**
   * @private
   * @param {number} x
   * @param {number} y
   * @param {number} pixelColor
   */
  __set_pixel__(t, n, r) {
    this.__view__.setUint32(((n - 1) * this.width + (t - 1)) * 4, r, !1);
  }
  /**
   * @private
   * @param {number} x
   * @param {number} y
   */
  __check_boundaries__(t, n) {
    if (isNaN(t))
      throw new TypeError(`Invalid pixel coordinates (x=${t})`);
    if (isNaN(n))
      throw new TypeError(`Invalid pixel coordinates (y=${n})`);
    if (t < 1)
      throw new RangeError(`${de.__out_of_bounds__} (x=${t})<1`);
    if (t > this.width)
      throw new RangeError(`${de.__out_of_bounds__} (x=${t})>(width=${this.width})`);
    if (n < 1)
      throw new RangeError(`${de.__out_of_bounds__} (y=${n})<1`);
    if (n > this.height)
      throw new RangeError(`${de.__out_of_bounds__} (y=${n})>(height=${this.height})`);
  }
  /**
   * @private
   */
  static get __out_of_bounds__() {
    return "Tried referencing a pixel outside of the images boundaries:";
  }
  /**
   * @callback colorFunction
   * @param {number} x
   * @param {number} y
   * @returns {number} pixel color
   */
  /**
   * Fills the image data with the supplied color
   * @param {number|colorFunction} color
   * @returns {Image}
   */
  fill(t) {
    return new An(this.width, this.height, this.bitmap).fill(t), this;
  }
  /**
   * Clones the current image
   * @returns {Image}
   */
  clone() {
    const t = new de(this.width, this.height);
    return t.bitmap.set(this.bitmap), t;
  }
  /**
   * Use {@link https://en.wikipedia.org/wiki/Image_scaling#Nearest-neighbor_interpolation Nearest-neighbor} resizing.
   * @returns {string}
   */
  static get RESIZE_NEAREST_NEIGHBOR() {
    return "RESIZE_NEAREST_NEIGHBOR";
  }
  /**
   * Used for automatically preserving an images aspect ratio when resizing.
   * @returns {number}
   */
  static get RESIZE_AUTO() {
    return -1;
  }
  /**
   * Resizes the image by the given factor
   * @param {number} factor The factor to resize the image with
   * @param {string} [mode=Image.RESIZE_NEAREST_NEIGHBOR] The resizing mode to use
   * @returns {Image}
   */
  scale(t, n = de.RESIZE_NEAREST_NEIGHBOR) {
    const r = this.__scale__(t, n);
    return this.__apply__(r);
  }
  /** @private */
  __scale__(t, n = de.RESIZE_NEAREST_NEIGHBOR) {
    return t === 1 ? this : this.__resize__(this.width * t, this.height * t, n);
  }
  /**
   * Resizes the image to the given dimensions.
   * Use {@link Image.RESIZE_AUTO} as either width or height to automatically preserve the aspect ratio.
   * @param {number} width The new width
   * @param {number} height The new height
   * @param {string} [mode=Image.RESIZE_NEAREST_NEIGHBOR] The resizing mode to use
   * @returns {Image} The resized image
   */
  resize(t, n, r = de.RESIZE_NEAREST_NEIGHBOR) {
    const i = this.__resize__(t, n, r);
    return this.__apply__(i);
  }
  /**
   * Resizes the image so it is contained in the given bounding box.
   * Can return an image with one axis smaller than the given bounding box.
   * @param {number} width The width of the bounding box
   * @param {number} height The height of the bounding box
   * @param {string} [mode=Image.RESIZE_NEAREST_NEIGHBOR] The resizing mode to use
   * @returns {Image} The resized image
   */
  contain(t, n, r = de.RESIZE_NEAREST_NEIGHBOR) {
    const i = t / n > this.width / this.height ? n / this.height : t / this.width;
    return this.scale(i, r);
  }
  /**
   * Resizes the image so it is contained in the given bounding box, placing it in the center of the given bounding box.
   * Always returns the exact dimensions of the bounding box.
   * @param {number} width The width of the bounding box
   * @param {number} height The height of the bounding box
   * @param {string} [mode=Image.RESIZE_NEAREST_NEIGHBOR] The resizing mode to use
   * @returns {Image} The resized image
   */
  fit(t, n, r = de.RESIZE_NEAREST_NEIGHBOR) {
    const i = new de(t, n);
    return this.contain(t, n, r), i.composite(this, (t - this.width) / 2, (n - this.height) / 2), this.__apply__(i);
  }
  /**
   * Resizes the image so it covers the given bounding box, cropping the overflowing edges.
   * Always returns the exact dimensions of the bounding box.
   * @param {number} width The width of the bounding box
   * @param {number} height The height of the bounding box
   * @param {string} [mode=Image.RESIZE_NEAREST_NEIGHBOR] The resizing mode to use
   * @returns {Image} The resized image
   */
  cover(t, n, r = de.RESIZE_NEAREST_NEIGHBOR) {
    const i = t / n > this.width / this.height ? t / this.width : n / this.height, o = this.scale(i, r);
    return o.crop((o.width - t) / 2, (o.height - n) / 2, t, n);
  }
  /** @private */
  __resize__(t, n, r = de.RESIZE_NEAREST_NEIGHBOR) {
    if (t === de.RESIZE_AUTO && n === de.RESIZE_AUTO)
      throw new Error("RESIZE_AUTO can only be used for either width or height, not for both");
    if (t === de.RESIZE_AUTO ? t = this.width / this.height * n : n === de.RESIZE_AUTO && (n = this.height / this.width * t), t = Math.floor(t), n = Math.floor(n), t < 1)
      throw new RangeError("Image has to be at least 1 pixel wide");
    if (n < 1)
      throw new RangeError("Image has to be at least 1 pixel high");
    let i;
    if (r === de.RESIZE_NEAREST_NEIGHBOR)
      i = this.__resize_nearest_neighbor__(t, n);
    else
      throw new Error("Invalid resize mode");
    return i;
  }
  /**
   * @private
   * @param {number} width The new width
   * @param {number} height The new height
   */
  __resize_nearest_neighbor__(t, n) {
    const r = new this.constructor(t, n), i = new An(this.width, this.height, this.bitmap).resize("nearest", t, n);
    return r.bitmap.set(i.u8), r;
  }
  /**
   * Crops an image to the specified dimensions
   * @param {number} x The x offset
   * @param {number} y The y offset
   * @param {number} width The new images width
   * @param {number} height The new images height
   * @returns {Image}
   */
  crop(t, n, r, i) {
    return r > this.width && (r = this.width), i > this.height && (i = this.height), this.__apply__(this.__crop__(~~t, ~~n, ~~r, ~~i));
  }
  /**
   * @param {number} x
   * @param {number} y
   * @param {number} width
   * @param {number} height
   * @returns {Image}
   * @private
   */
  __crop__(t, n, r, i) {
    t = ~~t, n = ~~n;
    const o = new this.constructor(r, i);
    for (let c = 0; c < i; c++) {
      const u = (c + n) * this.width + t;
      o.__u32__.set(this.__u32__.subarray(u, u + r), c * r);
    }
    return o;
  }
  /**
   * Draws a box at the specified coordinates
   * @param {number} x The x offset
   * @param {number} y The y offset
   * @param {number} width The box width
   * @param {number} height The box height
   * @param {number|colorFunction} color The color to fill the box in with
   * @returns {Image}
   */
  drawBox(t, n, r, i, o) {
    if (t = ~~(t - 1), n = ~~(n - 1), r = ~~r, i = ~~i, typeof o == "function")
      for (let c = 1; c <= i; c++)
        for (let u = 1; u <= r; u++) {
          const f = u + t, d = c + n;
          if (Math.min(f, d) < 1 || f > this.width || d > this.height)
            continue;
          const E = o(u, c);
          this.__set_pixel__(f, d, E);
        }
    else
      return this.__fast_box__(t, n, r, i, o);
    return this;
  }
  /**
   * @private
   * @param {number} x
   * @param {number} y
   * @param {number} width
   * @param {number} height
   * @param {number} color
   */
  __fast_box__(t, n, r, i, o) {
    t < 0 && (r += t, t = 0), n < 0 && (i += n, n = 0);
    const c = Math.max(Math.min(t + r, this.width), 1);
    let u = c;
    for (; t <= --u; )
      this.__view__.setUint32(4 * (u + n * this.width), o);
    const f = 4 * (c + n * this.width), d = 4 * (t + n * this.width);
    let E = Math.max(Math.min(n + i, this.height), 1);
    for (; n < --E; )
      this.bitmap.copyWithin(4 * (t + E * this.width), d, f);
    return this;
  }
  /**
   * Draws a circle at the specified coordinates with the specified radius
   * @param {number} x The center x position
   * @param {number} y The center y position
   * @param {number} radius The circles radius
   * @param {number|colorFunction} color
   * @returns {Image}
   */
  drawCircle(t, n, r, i) {
    const o = r ** 2;
    for (let c = Math.max(1, n - r); c <= Math.min(n + r, this.height); c++)
      for (let u = Math.max(1, t - r); u <= Math.min(t + r, this.width); u++)
        (u - t) ** 2 + (c - n) ** 2 < o && this.__set_pixel__(u, c, typeof i == "function" ? i(u - t + r, c - n + r) : i);
    return this;
  }
  /**
   * Crops the image into a circle
   * @param {boolean} [max=false] Whether to use the larger dimension for the size
   * @param {number} [feathering=0] How much feathering to apply to the edges
   * @returns {Image}
   */
  cropCircle(t = !1, n = 0) {
    return new An(this.width, this.height, this.bitmap).crop("circle", n), this;
  }
  /**
   * Sets the images opacity
   * @param {number} opacity The opacity to apply (0..1)
   * @param {boolean} absolute Whether to scale the current opacity (false) or just set the new opacity (true)
   * @returns {Image}
   */
  opacity(t, n = !1) {
    if (isNaN(t) || t < 0)
      throw new RangeError("Invalid opacity value");
    return this.__set_channel_value__(t, n, 3), this;
  }
  /**
   * Sets the red channels saturation
   * @param {number} saturation The saturation to apply (0..1)
   * @param {boolean} absolute Whether to scale the current saturation (false) or just set the new saturation (true)
   * @returns {Image}
   */
  red(t, n = !1) {
    if (isNaN(t) || t < 0)
      throw new RangeError("Invalid saturation value");
    return this.__set_channel_value__(t, n, 0), this;
  }
  /**
   * Sets the green channels saturation
   * @param {number} saturation The saturation to apply (0..1)
   * @param {boolean} absolute Whether to scale the current saturation (false) or just set the new saturation (true)
   * @returns {Image}
   */
  green(t, n = !1) {
    if (isNaN(t) || t < 0)
      throw new RangeError("Invalid saturation value");
    return this.__set_channel_value__(t, n, 1), this;
  }
  /**
   * Sets the blue channels saturation
   * @param {number} saturation The saturation to apply (0..1)
   * @param {boolean} absolute Whether to scale the current saturation (false) or just set the new saturation (true)
   * @returns {Image}
   */
  blue(t, n = !1) {
    if (isNaN(t) || t < 0)
      throw new RangeError("Invalid saturation value");
    return this.__set_channel_value__(t, n, 2), this;
  }
  /**
   * @private
   * @param {number} value
   * @param {boolean} absolute
   * @param {number} offset
   */
  __set_channel_value__(t, n, r) {
    for (let i = r; i < this.bitmap.length; i += 4)
      this.bitmap[i] = t * (n ? 255 : this.bitmap[i]);
  }
  /**
   * Sets the brightness of the image
   * @param {number} value The lightness to apply (0..1)
   * @param {boolean} absolute Whether to scale the current lightness (false) or just set the new lightness (true)
   * @returns {Image}
   */
  lightness(t, n = !1) {
    if (isNaN(t) || t < 0)
      throw new RangeError("Invalid lightness value");
    return this.fill((r, i) => {
      const [o, c, u, f] = de.rgbaToHSLA(...this.getRGBAAt(r, i));
      return de.hslaToColor(o, c, t * (n ? 1 : u), f);
    });
  }
  /**
   * Sets the saturation of the image
   * @param {number} value The saturation to apply (0..1)
   * @param {boolean} absolute Whether to scale the current saturation (false) or just set the new saturation (true)
   * @returns {Image}
   */
  saturation(t, n = !1) {
    if (isNaN(t) || t < 0)
      throw new RangeError("Invalid saturation value");
    return this.fill((r, i) => {
      const [o, c, u, f] = de.rgbaToHSLA(...this.getRGBAAt(r, i));
      return de.hslaToColor(o, t * (n ? 1 : c), u, f);
    });
  }
  /**
   * Composites (overlays) the source onto this image at the specified coordinates
   * @param {Image} source The image to place
   * @param {number} [x=0] The x position to place the image at
   * @param {number} [y=0] The y position to place the image at
   * @returns {Image}
   */
  composite(t, n = 0, r = 0) {
    return new An(this.width, this.height, this.bitmap).overlay(new An(t.width, t.height, t.bitmap), n, r), this;
  }
  /**
   * Inverts the images colors
   * @returns {Image}
   */
  invert() {
    for (const [t, n, r] of this.iterateWithColors())
      this.__set_pixel__(t, n, 4294967295 - r & 4294967040 | r & 255);
    return this;
  }
  /**
   * Inverts the images value (lightness)
   * @returns {Image}
   */
  invertValue() {
    for (const [t, n, r] of this.iterateWithColors()) {
      const [i, o, c, u] = de.rgbaToHSLA(...de.colorToRGBA(r));
      this.__set_pixel__(t, n, de.hslaToColor(i, o, 1 - c, u));
    }
    return this;
  }
  /**
   * Inverts the images saturation
   * @returns {Image}
   */
  invertSaturation() {
    for (const [t, n, r] of this.iterateWithColors()) {
      const [i, o, c, u] = de.rgbaToHSLA(...de.colorToRGBA(r));
      this.__set_pixel__(t, n, de.hslaToColor(i, 1 - o, c, u));
    }
    return this;
  }
  /**
   * Inverts the images hue
   * @returns {Image}
   */
  invertHue() {
    for (const [t, n, r] of this.iterateWithColors()) {
      const [i, o, c, u] = de.rgbaToHSLA(...de.colorToRGBA(r));
      this.__set_pixel__(t, n, de.hslaToColor(1 - i, o, c, u));
    }
    return this;
  }
  /**
   * Shifts the images hue
   * @param {number} degrees How many degrees to shift the hue by
   */
  hueShift(t) {
    for (const [n, r, i] of this.iterateWithColors()) {
      const [o, c, u, f] = de.rgbaToHSLA(...de.colorToRGBA(i));
      this.__set_pixel__(n, r, de.hslaToColor(o + t / 360, c, u, f));
    }
    return this;
  }
  /**
   * Gets the average color of the image
   * @returns {number}
   */
  averageColor() {
    let t = [0, 0, 0], n = 0;
    for (let r = 0; r < this.bitmap.length; r += 4) {
      const i = this.bitmap.subarray(r, r + 4);
      for (let o = 0; o < 3; o++)
        t[o] += i[o];
      n += i[3] / 255;
    }
    return de.rgbaToColor(...t.map((r) => r / n), 255);
  }
  /**
   * Gets the images dominant color
   * @param {boolean} [ignoreBlack=true] Whether to ignore dark colors below the threshold
   * @param {boolean} [ignoreWhite=true] Whether to ignore light colors above the threshold
   * @param {number} [bwThreshold=0xf] The black/white threshold (0-64)
   * @return {number} The images dominant color
   */
  dominantColor(t = !0, n = !0, r = 15) {
    const i = new Array(262143);
    for (let E = 0; E < this.bitmap.length; E += 4) {
      const w = this.__view__.getUint32(E, !1), [S, F, te] = de.rgbaToHSLA(...de.colorToRGBA(w)).map((We) => ~~(We * 63));
      if (t && te < r || n && te > 63 - r)
        continue;
      const ae = S << 12 | F << 6 | te;
      i[ae] = (i[ae] || 0) + 1;
    }
    let o = -1, c = 0;
    if (i.forEach((E, w) => {
      E < o || (o = E, c = w);
    }), c === -1)
      return this.dominantColor(t, n, r - 1);
    const u = c >>> 12 & 63, f = c >>> 6 & 63, d = c & 63;
    return de.hslaToColor(u / 63, f / 63, d / 63, 1);
  }
  /**
   * Rotates the image the given amount of degrees
   * @param {number} angle The angle to rotate the image for (in degrees)
   * @param {boolean} resize Whether to resize the image so it fits all pixels or just ignore outlying pixels
   */
  rotate(t, n = !0) {
    const r = new An(this.width, this.height, this.bitmap).rotate(360 - t % 360, n), i = new de(r.width, r.height);
    return i.bitmap.set(r.u8), this.__apply__(i);
  }
  /**
   * Flips / mirrors the image horizontally or vertically
   * @param {'horizontal' | 'vertical'} direction The direction to flip
   */
  flip(t) {
    const n = new An(this.width, this.height, this.bitmap).flip(t);
    return this.bitmap.set(n.u8), this;
  }
  /**
   * @private
   * @param {Image|Frame} image
   * @returns {Image|Frame}
   */
  __apply__(t) {
    return this.__width__ = t.__width__, this.__height__ = t.__height__, this.__view__ = t.__view__, this.__u32__ = t.__u32__, this.bitmap = t.bitmap, t instanceof hn ? hn.from(this, t.duration, t.xOffset, t.yOffset, t.disposalMode) : this;
  }
  /**
   * Creates a multi-point gradient generator
   * @param {Object<number, number>} colors The gradient points to use (e.g. `{0: 0xff0000ff, 1: 0x00ff00ff}`)
   * @return {(function(number): number)} The gradient generator. The function argument is the position in the gradient (0..1).
   */
  static gradient(t) {
    const n = Object.entries(t).sort((f, d) => f[0] - d[0]), r = n.map((f) => parseFloat(f[0])), i = n.map((f) => f[1]);
    if (r.length === 0)
      throw new RangeError("Invalid gradient point count");
    if (r.length === 1)
      return () => i[0];
    if (r.length === 2) {
      const f = this.__gradient__(i[0], i[1]);
      return (d) => d <= r[0] ? i[0] : d >= r[1] ? i[1] : f((d - r[0]) / (r[1] - r[0]));
    }
    const o = Math.min(...r), c = Math.max(...r);
    let u = [];
    for (let f = 0; f < r.length; f++) {
      let d = r[f - 1];
      if (d === void 0)
        continue;
      let E = r[f], w = i[f - 1];
      w === void 0 && (w = i[f]);
      const S = i[f], F = this.__gradient__(w, S);
      u.push({ min: d, max: E, gradient: F });
    }
    return (f) => {
      if (f <= o)
        return u[0].gradient(0);
      if (f >= c)
        return u[u.length - 1].gradient(1);
      for (const d of u)
        if (f >= d.min && f <= d.max)
          return d.gradient((f - d.min) / (d.max - d.min));
      throw new RangeError(`Invalid gradient position: ${f}`);
    };
  }
  /**
   * Rounds the images corners
   * @param {number} [radius=min(width,height)/4] The radius of the corners
   * @return {Image}
   */
  roundCorners(t = Math.min(this.width, this.height) / 4) {
    const n = t ** 2;
    for (let r = 1; r <= t; r++) {
      const i = (r - t) ** 2;
      for (let o = 1; o <= t; o++)
        i + (o - t) ** 2 > n && (this.bitmap[((o - 1) * this.width + r - 1) * 4 + 3] = 0);
    }
    for (let r = 1; r <= t; r++) {
      const i = (r - t) ** 2;
      for (let o = this.height - t; o <= this.height; o++)
        i + (this.height - o - t) ** 2 > n && (this.bitmap[((o - 1) * this.width + r - 1) * 4 + 3] = 0);
    }
    for (let r = this.width - t; r <= this.width; r++) {
      const i = (this.width - r - t) ** 2;
      for (let o = 1; o <= t; o++)
        i + (o - t) ** 2 > n && (this.bitmap[((o - 1) * this.width + r - 1) * 4 + 3] = 0);
    }
    for (let r = this.width - t; r <= this.width; r++) {
      const i = (this.width - r - t) ** 2;
      for (let o = this.height - t; o <= this.height; o++)
        i + (this.height - o - t) ** 2 > n && (this.bitmap[((o - 1) * this.width + r - 1) * 4 + 3] = 0);
    }
    return this;
  }
  /**
   * @private
   */
  static __gradient__(t, n) {
    const r = t >>> 24, i = t >> 16 & 255, o = t >> 8 & 255, c = t & 255, u = (n >>> 24) - r, f = (n >> 16 & 255) - i, d = (n >> 8 & 255) - o, E = (n & 255) - c;
    return (w) => {
      const S = r + w * u, F = i + w * f, te = o + w * d, ae = c + w * E;
      return (S & 255) << 24 | (F & 255) << 16 | (te & 255) << 8 | ae & 255;
    };
  }
  fisheye(t = 2) {
    const n = new de(this.width, this.height), r = this.width, i = this.height, o = this.__u32__, c = n.__u32__, u = 1 / r, f = 1 / i;
    for (const [E, w] of this) {
      const S = E * u - 0.5, F = w * f - 0.5, te = Math.sqrt(S ** 2 + F ** 2), ae = 2 * te ** t, We = (ae * S / te + 0.5) * r | 0, Ae = (ae * F / te + 0.5) * i | 0;
      We < 1 || We > r || Ae < 1 || Ae > i || isNaN(We) || isNaN(Ae) || (c[w * r + E] = o[r * Ae + We]);
    }
    const d = o.length * 0.5 + r / 2;
    return c[d] = o[d], this.__apply__(n);
  }
  /**
   * @typedef {object} PNGMetadata
   * @property {string} [title] The images title
   * @property {string} [author] The images author
   * @property {string} [description] The images description
   * @property {string} [copyright] The images copyright info
   * @property {string|number|Date} [creationTime=Date.now()] The images creation timestamp
   * @property {string} [software="github.com/matmen/ImageScript vX.X.X"] The software used to create this image
   * @property {string} [disclaimer] A disclaimer for the image
   * @property {string} [warning] A warning for the image
   * @property {string} [source] The images source
   * @property {string} [comment] A comment for the image
   */
  /**
   * Encodes the image into a PNG
   * @param {number} compression The compression level to use (0-9)
   * @param {PNGMetadata} [meta={}] Image metadata
   * @return {Promise<Uint8Array>} The encoded data
   */
  async encode(t = 1, {
    title: n,
    author: r,
    description: i,
    copyright: o,
    creationTime: c,
    software: u,
    disclaimer: f,
    warning: d,
    source: E,
    comment: w
  } = {}) {
    return bh.encode(this.bitmap, {
      width: this.width,
      height: this.height,
      level: t,
      channels: 4,
      text: {
        Title: n,
        Author: r,
        Description: i,
        Copyright: o,
        "Creation Time": new Date(c === void 0 ? Date.now() : c).toUTCString(),
        Software: u === void 0 ? `github.com/matmen/ImageScript v${Nh}` : u,
        Disclaimer: f,
        Warning: d,
        Source: E,
        Comment: w
      }
    });
  }
  /**
   * Encodes the image into a JPEG
   * @param {number} [quality=90] The JPEG quality to use (1-100)
   * @return {Promise<Uint8Array>}
   */
  async encodeJPEG(t = 90) {
    return bo.jpeg.encode_async(this.bitmap, {
      quality: t,
      width: this.width,
      height: this.height
    });
  }
  /**
   * Encodes the image into a WEBP
   * @param {null|number} [quality=null] The WEBP quality to use (0-100) (null is lossless)
   * @return {Promise<Uint8Array>}
   */
  async encodeWEBP(t = null) {
    return bo.webp.encode_async(this.bitmap, {
      quality: t,
      width: this.width,
      height: this.height
    });
  }
  /**
   * Decodes an image (PNG, JPEG or TIFF)
   * @param {Buffer|Uint8Array} data The binary data to decode
   * @return {Promise<Image>} The decoded image
   */
  static async decode(t) {
    let n;
    t = Wl.view(t);
    const r = new DataView(t.buffer, t.byteOffset, t.byteLength);
    if (Ar.isPNG(r)) {
      const { width: i, height: o, framebuffer: c } = (await Ah.init()).decode(t);
      n = new de(i, o), n.bitmap.set(c);
    } else if (Ar.isJPEG(r)) {
      const i = (await Sh.init()).decode(t), o = i.width, c = i.height, u = i.format;
      n = new de(o, c);
      const f = i.buffer;
      if (u === 0) {
        const d = new DataView(n.bitmap.buffer);
        for (let E = 0; E < f.length; E++) {
          const w = f[E];
          d.setUint32(E * 4, w << 24 | w << 16 | w << 8 | 255, !1);
        }
      } else if (u === 1) {
        n.bitmap.fill(255);
        for (let d = 0; d < o * c; d++)
          n.bitmap.set(f.subarray(d * 3, d * 3 + 3), d * 4);
      } else if (u === 2)
        for (let d = 0; d < f.length; d += 4)
          n.bitmap[d] = 255 * (1 - f[d] / 255) * (1 - f[d + 3] / 255), n.bitmap[d + 1] = 255 * (1 - f[d + 1] / 255) * (1 - f[d + 3] / 255), n.bitmap[d + 2] = 255 * (1 - f[d + 2] / 255) * (1 - f[d + 3] / 255), n.bitmap[d + 3] = 255;
    } else if (Ar.isTIFF(r)) {
      const i = (await Vh.init()).decode(t);
      n = new de(i.width, i.height), n.bitmap.set(i.buffer);
    } else
      throw new Error("Unsupported image type");
    return n;
  }
  /**
   * Scale the SVG by the given amount. For use with {@link Image.renderSVG}
   * @return {number}
   */
  static get SVG_MODE_SCALE() {
    return 1;
  }
  /**
   * Scale the SVG to fit the given width. For use with {@link Image.renderSVG}
   * @return {number}
   */
  static get SVG_MODE_WIDTH() {
    return 2;
  }
  /**
   * Scale the SVG to fit the given height. For use with {@link Image.renderSVG}
   * @return {number}
   */
  static get SVG_MODE_HEIGHT() {
    return 3;
  }
  /**
   * Creates a new image from the given SVG
   * @param {string} svg The SVG content
   * @param {number} size The size to use
   * @param {number} mode The SVG resizing mode to use (one of {@link SVG_MODE_SCALE}, {@link SVG_MODE_WIDTH}, {@link SVG_MODE_HEIGHT})
   * @return {Promise<Image>} The rendered SVG graphic
   */
  static async renderSVG(t, n = 1, r = this.SVG_MODE_SCALE) {
    if (![this.SVG_MODE_WIDTH, this.SVG_MODE_HEIGHT, this.SVG_MODE_SCALE].includes(r))
      throw new Error("Invalid SVG scaling mode");
    if (r === this.SVG_MODE_SCALE && n <= 0)
      throw new RangeError("SVG scale must be > 0");
    if (r !== this.SVG_MODE_SCALE && n < 1)
      throw new RangeError("SVG size must be >= 1");
    typeof t == "string" && (t = Buffer.from(t));
    const i = (await Oh.init()).rasterize(t, r, n), o = new de(i.width, i.height);
    return o.bitmap.set(i.buffer), o;
  }
  /**
   * Creates a new image containing the rendered text.
   * @param {Uint8Array} font TrueType (ttf/ttc) or OpenType (otf) font buffer to use
   * @param {number} scale Font size to use
   * @param {string} text Text to render
   * @param {number} [color=0xffffffff] Text color to use
   * @param {TextLayout} [layout] The text layout to use
   * @return {Promise<Image>} The rendered text
   */
  static async renderText(t, n, r, i = 4294967295, o = new zl()) {
    const { Font: c, Layout: u } = await Dh.init();
    t = new c(n, t);
    const [f, d, E, w] = de.colorToRGBA(i), S = new u();
    S.reset({
      max_width: o.maxWidth,
      max_height: o.maxHeight,
      wrap_style: o.wrapStyle,
      vertical_align: o.verticalAlign,
      horizontal_align: o.horizontalAlign,
      wrap_hard_breaks: o.wrapHardBreaks
    }), S.append(t, r, { scale: n });
    const F = S.rasterize(f, d, E), te = new de(F.width, F.height);
    return te.bitmap.set(F.buffer), te.height > o.maxHeight && te.crop(0, 0, te.width, Math.floor(S.lines() / te.height * o.maxHeight) * (te.height / S.lines())), t.free(), S.free(), te.opacity(w / 255);
  }
}
class hn extends de {
  /**
   * GIF frame disposal mode KEEP. For use with {@link Frame}
   * @returns {string}
   */
  static get DISPOSAL_KEEP() {
    return "keep";
  }
  /**
   * GIF frame disposal mode PREVIOUS. For use with {@link Frame}
   * @returns {string}
   */
  static get DISPOSAL_PREVIOUS() {
    return "previous";
  }
  /**
   * GIF frame disposal mode BACKGROUND. For use with {@link Frame}
   * @returns {string}
   */
  static get DISPOSAL_BACKGROUND() {
    return "background";
  }
  static __convert_disposal_mode__(t) {
    if (typeof t == "string" && (t = ["any", "keep", "previous", "background"].indexOf(t)), t < 0 || t > 3)
      throw new RangeError("Invalid disposal mode");
    return t;
  }
  /**
   * Creates a new, blank frame
   * @param {number} width
   * @param {number} height
   * @param {number} [duration = 100] The frames duration (in ms)
   * @param {number} [xOffset=0] The frames offset on the x-axis
   * @param {number} [yOffset=0] The frames offset on the y-axis
   * @param {string|number} [disposalMode=Frame.DISPOSAL_KEEP] The frame's disposal mode ({@link Frame.DISPOSAL_KEEP}, {@link Frame.DISPOSAL_PREVIOUS} or {@link Frame.DISPOSAL_BACKGROUND})
   * @return {Frame}
   */
  constructor(t, n, r = 100, i = 0, o = 0, c = hn.DISPOSAL_KEEP) {
    if (isNaN(r) || r < 0)
      throw new RangeError("Invalid frame duration");
    super(t, n), this.duration = r, this.xOffset = i, this.yOffset = o, this.disposalMode = c;
  }
  /**
   * The Frame's disposal mode
   * @returns {number}
   */
  get disposalMode() {
    return this.__disposalMode__;
  }
  /**
   * Sets the frame's disposal mode, converting it to the internal numeric value.
   * @param {string|number} disposalMode The frame's disposal mode
   */
  set disposalMode(t) {
    this.__disposalMode__ = hn.__convert_disposal_mode__(t);
  }
  toString() {
    return `Frame<${this.width}x${this.height}x${this.duration}ms>`;
  }
  /**
   * Converts an Image instance to a Frame, cloning it in the process
   * @param {Image} image The image to create the frame from
   * @param {number} [duration = 100] The frames duration (in ms)
   * @param {number} [xOffset=0] The frames offset on the x-axis
   * @param {number} [yOffset=0] The frames offset on the y-axis
   * @param {string|number} [disposalMode=Frame.DISPOSAL_KEEP] The frames disposal mode ({@link Frame.DISPOSAL_KEEP}, {@link Frame.DISPOSAL_PREVIOUS} or {@link Frame.DISPOSAL_BACKGROUND})
   * @return {Frame}
   */
  static from(t, n, r, i, o = hn.DISPOSAL_KEEP) {
    if (!(t instanceof de))
      throw new TypeError("Invalid image passed");
    const c = new hn(t.width, t.height, n, r, i, o);
    return c.bitmap.set(t.bitmap), c;
  }
  resize(t, n, r = de.RESIZE_NEAREST_NEIGHBOR) {
    const i = this.width, o = this.height, c = super.resize(t, n, r);
    return this.xOffset *= c.width / i, this.yOffset *= c.height / o, c;
  }
}
class Br extends Array {
  /**
   * Creates a new GIF image.
   * @param {Frame[]} frames The frames to create the GIF from
   * @param {number} [loopCount=-1] How often to loop the GIF for (-1 = unlimited)
   * @property {number} loopCount How often the GIF will loop for
   */
  constructor(t, n = -1) {
    super(...t);
    for (const r of this)
      if (!(r instanceof hn))
        throw new TypeError(`Frame ${this.indexOf(r)} is not an instance of Frame`);
    if (n < -1 || isNaN(n))
      throw new RangeError("Invalid loop count");
    this.loopCount = n;
  }
  /**
   * The GIFs width
   * @returns {number}
   */
  get width() {
    let t = 0;
    for (const n of this) {
      let r = n.width + n.xOffset;
      t < r && (t = r);
    }
    return t;
  }
  /**
   * The GIFs height
   * @returns {number}
   */
  get height() {
    let t = 0;
    for (const n of this) {
      let r = n.height + n.yOffset;
      t < r && (t = r);
    }
    return t;
  }
  toString() {
    return `GIF<${this.width}x${this.height}x${this.duration}ms>`;
  }
  /**
   * @returns {Generator<Frame, void, *>}
   */
  *[Symbol.iterator]() {
    for (let t = 0; t < this.length; t++)
      yield this[t];
  }
  slice(t, n) {
    n === 1 / 0 && (n = this.length);
    const r = new Array(n - t);
    for (let i = 0; i < r.length; i++)
      r[i] = this[i + t];
    return new Br(r, this.loopCount);
  }
  /**
   * The GIFs duration (in ms)
   * @return {number}
   */
  get duration() {
    return this.reduce((t, n) => t + n.duration, 0);
  }
  /**
   * Encodes the image into a GIF
   * @param {number} [quality=95] GIF quality 0-100
   * @return {Promise<Uint8Array>} The encoded data
   */
  async encode(t = 95) {
    const n = new bo.gif.encoder(this.width, this.height);
    for (const r of this) {
      if (!(r instanceof hn))
        throw new Error("GIF contains invalid frames");
      n.add(r.bitmap, {
        quality: t,
        x: r.xOffset,
        y: r.yOffset,
        width: r.width,
        speed: null,
        // 1-10
        height: r.height,
        colors: null,
        // 2-256
        delay: ~~(r.duration / 10),
        dispose: ["any", "keep", "previous", "background"][r.disposalMode]
      });
    }
    return n.finish({ repeat: this.loopCount === -1 ? null : this.loopCount });
  }
  /**
   * Decodes a GIF image
   * @param {Buffer|Uint8Array} data The binary data to decode
   * @param {boolean} [onlyExtractFirstFrame=false] Whether to end GIF decoding after the first frame
   * @return {Promise<GIF>} The decoded GIF
   */
  static async decode(t, n = !1) {
    let r;
    t = Wl.view(t);
    const i = new DataView(t.buffer, t.byteOffset, t.byteLength);
    if (Ar.isGIF(i)) {
      const o = [], c = new (await xh.init()).Decoder(t), u = c.width | 0, f = c.height | 0, d = new Uint32Array(c.width * c.height), E = new Uint8Array(d.buffer, d.byteOffset, d.byteLength);
      for (const w of c.frames()) {
        let S = 0, F = 0;
        const te = w.x | 0, ae = w.y | 0, We = w.buffer, Ae = w.dispose, De = w.width | 0, $e = w.height | 0, He = new Uint32Array(We.buffer, We.byteOffset, De * $e), Ve = o[o.push(new hn(u, f, 10 * w.delay, 0, 0, 3)) - 1].bitmap, fe = new Uint32Array(Ve.buffer);
        if (Ve.set(E), Ae === 2)
          for (let Ne = 0; Ne < $e; Ne++) {
            const ke = te + u * (Ne + ae) | 0;
            for (let ze = 0; ze < De; ze++) {
              const nt = ze + ke;
              We[3 + S] === 0 ? fe[nt] = d[nt] : fe[nt] = He[F], F++, S += 4;
            }
          }
        else if (Ae === 3)
          for (let Ne = 0; Ne < $e; Ne++) {
            const ke = te + u * (Ne + ae) | 0;
            for (let ze = 0; ze < De; ze++) {
              const nt = ze + ke;
              We[3 + S] === 0 ? fe[nt] = d[nt] : fe[nt] = He[F], F++, S += 4, d[nt] = 0;
            }
          }
        else if (Ae === 0 || Ae === 1) {
          Ve.set(E);
          for (let Ne = 0; Ne < $e; Ne++) {
            const ke = te + u * (Ne + ae) | 0;
            for (let ze = 0; ze < De; ze++) {
              const nt = ze + ke;
              We[3 + S] === 0 ? fe[nt] = d[nt] : fe[nt] = He[F], F++, S += 4, d[nt] = fe[nt];
            }
          }
        }
        if (n)
          break;
      }
      r = new Br(o);
    } else
      throw new Error("Unsupported image type");
    return r;
  }
  resize(t, n, r = de.RESIZE_NEAREST_NEIGHBOR) {
    for (const i of this)
      i.resize(t, n, r);
  }
}
class zl {
  /**
   * Layout options for {@link Image.renderText}
   * @param {object} [options]
   * @param {number} [options.maxWidth=Infinity] The texts max width
   * @param {number} [options.maxHeight=Infinity] The texts max height
   * @param {string} [options.wrapStyle='word'] The texts wrap style when reaching the max width (word, char)
   * @param {string} [options.verticalAlign='left'] The vertical align mode (left, center, right)
   * @param {string} [options.horizontalAlign='top'] The horizontal align mode (top, middle, bottom)
   * @param {boolean} [options.wrapHardBreaks=true] Whether to force wrap at new line characters
   */
  constructor(t) {
    const { maxWidth: n, maxHeight: r, wrapStyle: i, verticalAlign: o, horizontalAlign: c, wrapHardBreaks: u } = t || {};
    if (this.maxWidth = n || 1 / 0, isNaN(this.maxWidth) || this.maxWidth < 1)
      throw new RangeError("Invalid maxWidth");
    if (this.maxHeight = r || 1 / 0, isNaN(this.maxHeight) || this.maxHeight < 1)
      throw new RangeError("Invalid maxHeight");
    if (this.wrapStyle = i || "word", !["word", "char"].includes(this.wrapStyle))
      throw new RangeError("Invalid wrapStyle");
    if (this.verticalAlign = o || "left", !["left", "center", "right"].includes(this.verticalAlign))
      throw new RangeError("Invalid verticalAlign");
    if (this.horizontalAlign = c || "top", !["top", "middle", "bottom"].includes(this.horizontalAlign))
      throw new RangeError("Invalid horizontalAlign");
    if (this.wrapHardBreaks = typeof u > "u" ? !0 : u, typeof this.wrapHardBreaks != "boolean")
      throw new TypeError("Invalid wrapHardBreaks");
  }
}
class Ar {
  /**
   * Gets an images type (png, jpeg, tiff, gif)
   * @param {Buffer|Uint8Array} data The image binary to get the type of
   * @returns {string|null} The image type (png, jpeg, tiff, gif, null)
   */
  static getType(t) {
    let n;
    return ArrayBuffer.isView(t) ? (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength), n = new DataView(t.buffer, t.byteOffset, t.byteLength)) : (t = new Uint8Array(t), n = new DataView(t.buffer)), this.isPNG(n) ? "png" : this.isJPEG(n) ? "jpeg" : this.isTIFF(n) ? "tiff" : this.isGIF(n) ? "gif" : null;
  }
  /**
   * @param {DataView} view
   * @returns {boolean}
   */
  static isPNG(t) {
    return t.getUint32(0, !1) === ai.PNG;
  }
  /**
   * @param {DataView} view
   * @returns {boolean}
   */
  static isJPEG(t) {
    return t.getUint32(0, !1) >>> 8 === ai.JPEG;
  }
  /**
   * @param {DataView} view
   * @returns {boolean}
   */
  static isTIFF(t) {
    return t.getUint32(0, !1) === ai.TIFF;
  }
  /**
   * @param {DataView} view
   * @returns {boolean}
   */
  static isGIF(t) {
    return t.getUint32(0, !1) >>> 8 === ai.GIF;
  }
}
function Rh(e, t) {
  return Ar.getType(e) === "gif" ? Br.decode(e, t) : de.decode(e);
}
var Is = { Image: de, GIF: Br, Frame: hn, TextLayout: zl, ImageType: Ar, decode: Rh };
const Th = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, i] of t)
    n[r] = i;
  return n;
}, Mh = {
  props: [],
  data() {
    return {
      createdBlobURLs: /* @__PURE__ */ new Set(),
      video: null,
      showing: !1,
      tool: null,
      result: null,
      time: 0,
      gifTime: [0, 0],
      gifLoop: !0,
      gifScale: 1,
      gifRecording: !1,
      gifEncoding: !1,
      gifRangeSelector: !1,
      gifRangeOpt: { x: 0, y: 0, width: 500, height: 500 },
      x: 0,
      y: 0
    };
  },
  watch: {},
  computed: {
    /* time:{
    	get(){
    		return this.tText(this.getTime());
    	},
    	set(v){
    		this.setTime(v);
    	}
    } */
  },
  methods: {
    setTime(e) {
      this.video.currentTime = e, this.time = this.video.currentTime;
    },
    getTime() {
      return this.video.currentTime;
    },
    tText(e) {
      return e.toFixed(6) * 1;
    },
    videoBound() {
      return this.video.getBoundingClientRect();
    },
    gifRangeSelectorStyle() {
      const e = this.video, t = this.videoBound(), n = t.width / e.videoWidth;
      return {
        width: n * this.gifRangeOpt.width + "px",
        height: n * this.gifRangeOpt.height + "px",
        left: t.left + this.gifRangeOpt.x * n + "px",
        top: t.top + this.gifRangeOpt.y * n + "px"
      };
    },
    show(e, t, n, r = this.tool) {
      if (this.video = n, !n) {
        this.hide();
        return;
      }
      if (r == "screenshot") {
        this.showing = !1, this.screenshot();
        return;
      } else
        this.showing = "toolbar";
      this.tool = r, this.time = this.getTime(), this.x = e, this.y = t;
    },
    hide() {
      this.showing = !1;
      for (let e of this.createdBlobURLs)
        URL.revokeObjectURL(e);
      this.stopRecordGIF();
    },
    timeOffset(e) {
      this.video && (this.video.paused || this.video.pause(), this.setTime(this.video.currentTime + e * (1 / 23)));
    },
    screenshot() {
      this.video && (this.canvasFitVideo(), this.$refs.canvas.ctx.drawImage(this.video, 0, 0), this.result = "canvas", this.showing = "result");
    },
    wheelNumber(e, t) {
      e.preventDefault(), e.stopPropagation();
      const n = e.target;
      let r = Number(n.value), i = Number(n.max);
      Number.isSafeInteger(r) || (r = 0), r += e.wheelDeltaY * (e.shiftKey ? 10 : 1), r < 0 && (r = 0), r > i && (r = i), this.gifRangeOpt[t] = r;
    },
    wheelTime(e) {
      e.preventDefault(), e.stopPropagation(), e.wheelDeltaY > 0 ? this.timeOffset(1) : this.timeOffset(-1);
    },
    async startRecordGIF() {
      if (!this.video)
        return;
      const e = this.video, t = this.$refs.canvas;
      e.pause();
      try {
        this.gifRecording = !0, this.canvasFitVideo(this.gifScale ?? 1, this.gifRangeSelector);
        const n = [];
        let r;
        e.currentTime = this.gifTime[0];
        const i = 1e3 / 24;
        let o = 0;
        e.play();
        const c = this;
        await new Promise((E, w) => {
          function S() {
            if (c.gifRangeSelector) {
              const De = c.gifRangeOpt;
              t.ctx.drawImage(e, De.x, De.y, De.width, De.height, 0, 0, t.width, t.height);
            } else
              t.ctx.drawImage(e, 0, 0, t.width, t.height);
            const te = t.ctx.getImageData(0, 0, t.width, t.height), ae = Date.now(), We = ae - o, Ae = c.frameDiff(te, r);
            if (n.length && (n[n.length - 1].duration = We), Ae !== 0) {
              const De = new Is.Frame(Ae.diffImageData.width, Ae.diffImageData.height, i, Ae.x, Ae.y);
              De.bitmap = Ae.diffImageData.data, n.push(De), r = te, o = ae;
            }
          }
          S();
          const F = setInterval(async () => {
            (e.currentTime >= this.gifTime[1] || !this.gifRecording) && (clearInterval(F), e.pause(), this.gifRecording ? E() : w("abort")), S();
          }, i);
        });
        const u = new Is.GIF(n, this.gifLoop ? -1 : 0);
        this.gifRecording = !1, this.gifEncoding = !0, this.$forceUpdate();
        const f = await u.encode(90), d = URL.createObjectURL(new Blob([f], { type: "image/gif" }));
        this.createdBlobURLs.add(d), this.result = "img", this.showing = "result", this.$refs.img.src = d;
      } catch (n) {
        console.error(n), n !== "abort" && alert(`Failed to record gif: ${n.message}`);
      } finally {
        this.stopRecordGIF();
      }
    },
    stopRecordGIF() {
      this.gifEncoding = !1, this.gifRecording = !1, this.gifRangeSelector = !1;
    },
    frameDiff(e, t) {
      if (!t)
        return { x: 0, y: 0, diffImageData: e };
      const n = 5, r = this.$refs.canvas, i = e.data, o = t.data, c = r.ctx.createImageData(e), u = c.data;
      for (let f = 0; f < i.length; f += 4)
        Math.max(
          Math.abs(i[f] - o[f]),
          Math.abs(i[f + 1] - o[f + 1]),
          Math.abs(i[f + 2] - o[f + 2]),
          Math.abs(i[f + 3] - o[f + 3])
        ) > n && (u[f] = i[f], u[f + 1] = i[f + 1], u[f + 2] = i[f + 2], u[f + 3] = i[f + 3]);
      return { x: 0, y: 0, diffImageData: c };
    },
    canvasFitVideo(e = 1, t = !1) {
      const n = this.video, r = this.$refs.canvas;
      t ? (r.width = Math.floor(this.gifRangeOpt.width * e), r.height = Math.floor(this.gifRangeOpt.height * e)) : (r.width = Math.floor(n.videoWidth * e), r.height = Math.floor(n.videoHeight * e)), r.style["aspect-ratio"] = r.width / r.height;
    },
    fitInputValue(e) {
      return { width: String(e).length / 1.8 + "em" };
    }
  },
  mounted() {
    this.$refs.canvas.ctx = this.$refs.canvas.getContext("2d", { willReadFrequently: !0 }), this.$refs.canvas.ctx.imageSmoothingQuality = "high", this.wheelEvent = (e) => {
      this.$forceUpdate();
    }, window.addEventListener("wheel", this.wheelEvent);
  },
  unmounted() {
    window.removeEventListener("wheel", this.wheelEvent);
  }
}, Ch = ["actived"], Ih = { id: "time_tool" }, Uh = ["value"], Ph = {
  key: 0,
  id: "row1"
}, $h = ["actived"], Fh = { title: "GIF缩放" }, Lh = ["actived"], kh = {
  title: "正在录制",
  class: "fadeLoop"
}, jh = {
  title: "正在编码",
  class: "fadeLoop"
}, Hh = {
  id: "row2",
  style: { display: "flex" }
}, Bh = ["max"], Gh = ["max"], Wh = ["max"], zh = ["max"], Kh = { ref: "canvas" }, qh = { ref: "img" };
function Yh(e, t, n, r, i, o) {
  return Ir(), ci(an, null, [
    i.showing && i.gifRangeSelector ? (Ir(), ci("div", {
      key: 0,
      id: "range_selector",
      style: Kn(o.gifRangeSelectorStyle())
    }, null, 4)) : zi("", !0),
    i.showing == "toolbar" ? (Ir(), ci("div", {
      key: 1,
      id: "jia-video-tool",
      style: Kn({ left: i.x + "px", top: i.y + "px" }),
      onDrag: t[25] || (t[25] = () => {
      })
    }, [
      Be("div", null, [
        Be("div", {
          title: "截图",
          onClick: t[0] || (t[0] = (...c) => o.screenshot && o.screenshot(...c)),
          opt: ""
        }, "📷"),
        Be("div", {
          title: "截取GIF",
          actived: i.tool == "gif",
          onClick: t[1] || (t[1] = (c) => i.tool = i.tool === "gif" ? "" : "gif"),
          opt: ""
        }, " ✂", 8, Ch),
        Be("div", Ih, [
          Be("div", {
            title: "时间微调←",
            onClick: t[2] || (t[2] = (c) => o.timeOffset(-1)),
            opt: ""
          }, "◀️"),
          Be("div", {
            title: "时间微调→",
            onClick: t[3] || (t[3] = (c) => o.timeOffset(1)),
            opt: ""
          }, "▶️"),
          Be("input", {
            title: "当前视频时间（秒）",
            value: i.time,
            type: "text",
            onChange: t[4] || (t[4] = (c) => o.setTime(c.target.value)),
            onWheel: t[5] || (t[5] = (c) => o.wheelTime(c)),
            style: Kn(o.fitInputValue(i.time))
          }, null, 44, Uh)
        ]),
        Be("div", {
          onClick: t[6] || (t[6] = (...c) => o.hide && o.hide(...c)),
          opt: ""
        }, "❌")
      ]),
      i.tool == "gif" ? (Ir(), ci("div", Ph, [
        Be("div", {
          title: "设置开始时间",
          opt: "",
          onClick: t[7] || (t[7] = (c) => i.gifTime[0] = o.getTime())
        }, "⏺️"),
        Be("div", {
          title: "设置结束时间",
          opt: "",
          onClick: t[8] || (t[8] = (c) => i.gifTime[1] = o.getTime())
        }, "⏹️"),
        Be("div", null, [
          Qt(Be("input", {
            "onUpdate:modelValue": t[9] || (t[9] = (c) => i.gifTime[0] = c),
            placeholder: "start",
            style: Kn(o.fitInputValue(i.gifTime[0])),
            onDblclick: t[10] || (t[10] = (c) => o.setTime(o.tText(i.gifTime[0])))
          }, null, 36), [
            [rr, i.gifTime[0]]
          ])
        ]),
        Be("div", null, [
          Qt(Be("input", {
            "onUpdate:modelValue": t[11] || (t[11] = (c) => i.gifTime[1] = c),
            placeholder: "end",
            style: Kn(o.fitInputValue(i.gifTime[1])),
            onDblclick: t[12] || (t[12] = (c) => o.setTime(o.tText(i.gifTime[1])))
          }, null, 36), [
            [rr, i.gifTime[1]]
          ])
        ]),
        Be("div", {
          title: "GIF循环",
          opt: "",
          actived: i.gifLoop,
          onClick: t[13] || (t[13] = (c) => i.gifLoop = !i.gifLoop)
        }, "🔁", 8, $h),
        Be("div", Fh, [
          mo("🔍"),
          Qt(Be("input", {
            type: "number",
            max: "1",
            min: "0.1",
            step: "0.1",
            "onUpdate:modelValue": t[14] || (t[14] = (c) => i.gifScale = c),
            style: { width: "2.5em" }
          }, null, 512), [
            [rr, i.gifScale]
          ])
        ]),
        Be("div", {
          title: "框选区域",
          opt: "",
          actived: i.gifRangeSelector,
          onClick: t[15] || (t[15] = (c) => i.gifRangeSelector = !i.gifRangeSelector)
        }, "🔲", 8, Lh),
        Qt(Be("div", {
          title: "开始录制",
          opt: "",
          onClick: t[16] || (t[16] = (...c) => o.startRecordGIF && o.startRecordGIF(...c))
        }, "✅ ", 512), [
          [Bn, !i.gifEncoding && !i.gifRecording]
        ]),
        Qt(Be("div", kh, "🎦", 512), [
          [Bn, i.gifRecording]
        ]),
        Qt(Be("div", jh, "🕒", 512), [
          [Bn, i.gifEncoding]
        ])
      ])) : zi("", !0),
      Qt(Be("div", Hh, [
        mo(" 范围: "),
        Qt(Be("input", {
          title: "x(滚轮调整)",
          placeholder: "x",
          "onUpdate:modelValue": t[17] || (t[17] = (c) => i.gifRangeOpt.x = c),
          type: "number",
          min: "0",
          step: "1",
          max: i.video.videoWidth - i.gifRangeOpt.width,
          onWheel: t[18] || (t[18] = (c) => o.wheelNumber(c, "x"))
        }, null, 40, Bh), [
          [rr, i.gifRangeOpt.x]
        ]),
        Qt(Be("input", {
          title: "y(滚轮调整)",
          placeholder: "y",
          "onUpdate:modelValue": t[19] || (t[19] = (c) => i.gifRangeOpt.y = c),
          type: "number",
          min: "0",
          step: "1",
          max: i.video.videoHeight - i.gifRangeOpt.height,
          onWheel: t[20] || (t[20] = (c) => o.wheelNumber(c, "y"))
        }, null, 40, Gh), [
          [rr, i.gifRangeOpt.y]
        ]),
        Qt(Be("input", {
          title: "width(滚轮调整)",
          placeholder: "width",
          "onUpdate:modelValue": t[21] || (t[21] = (c) => i.gifRangeOpt.width = c),
          type: "number",
          max: i.video.videoWidth - i.gifRangeOpt.x + 1,
          onWheel: t[22] || (t[22] = (c) => o.wheelNumber(c, "width")),
          min: "0",
          step: "1"
        }, null, 40, Wh), [
          [rr, i.gifRangeOpt.width]
        ]),
        Qt(Be("input", {
          title: "height(滚轮调整)",
          placeholder: "height",
          "onUpdate:modelValue": t[23] || (t[23] = (c) => i.gifRangeOpt.height = c),
          type: "number",
          max: i.video.videoHeight - i.gifRangeOpt.y + 1,
          onWheel: t[24] || (t[24] = (c) => o.wheelNumber(c, "height")),
          min: "0",
          step: "1"
        }, null, 40, zh), [
          [rr, i.gifRangeOpt.height]
        ])
      ], 512), [
        [Bn, i.tool == "gif" && i.gifRangeSelector]
      ])
    ], 36)) : zi("", !0),
    Qt(Be("dialog", {
      ref: "dialog",
      onClick: t[26] || (t[26] = lu((...c) => o.hide && o.hide(...c), ["left"]))
    }, [
      Qt(Be("canvas", Kh, null, 512), [
        [Bn, i.result === "canvas"]
      ]),
      Qt(Be("img", qh, null, 512), [
        [Bn, i.result === "img"]
      ])
    ], 512), [
      [Bn, i.showing == "result"]
    ])
  ], 64);
}
const Jh = /* @__PURE__ */ Th(Mh, [["render", Yh], ["__scopeId", "data-v-703a244b"]]), Zh = fu(Jh), No = document.createElement("div");
No.style = "position:fixed;top:0;left:0;z-index:2147483647;";
let Lr, yr;
window.addEventListener("mousedown", (e) => {
  if (!(e.button === 2 && e.altKey))
    return;
  e.preventDefault(), e.stopPropagation(), yr && !document.contains(yr) && (yr = null);
  let t = e.target, n;
  if (t.localName === "video" ? n = t : n = t.querySelector("video"), !n) {
    let r = 5;
    for (; r-- && (t = t.parentNode, !(t === document || (n = t.querySelector("video"), n))); )
      ;
  }
  n ? (yr = n, Lr || (document.body.appendChild(No), Lr = Zh.mount(No)), Lr.show(e.clientX, e.clientY, n, e.shiftKey ? void 0 : "screenshot")) : n = yr;
});
document.addEventListener("contextmenu", (e) => {
  !Lr || !Lr.showing || !e.altKey || (e.preventDefault(), e.stopPropagation());
});
window.addEventListener("keydown", (e) => {
  if (!e.code.startsWith("Arrow") || !(e.ctrlKey || e.shiftKey) || e.repeat)
    return;
  let t, n;
  const r = [...document.querySelectorAll("video")].filter((i) => (i === yr && (n = i), i.duration >= 300));
  if (r.length !== 0 && (r.length > 1 ? t = r.filter((i) => !i.paused)[0] : n ? t = n : t = r[0], !!t))
    switch ((e.code === "ArrowRight" || e.code === "ArrowLeft") && (e.preventDefault(), e.stopPropagation()), e.code) {
      case "ArrowRight":
        t.currentTime += 90 - t.playbackRate * 5;
        break;
      case "ArrowLeft":
        t.currentTime -= 90;
        break;
    }
});
//# sourceMappingURL=jia-video-tools.mjs.map
