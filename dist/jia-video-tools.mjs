(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode("#jia-video-tool[data-v-dee80196]{position:fixed;border:1px solid #ccc;background-color:#999;border-radius:.3em}#jia-video-tool [opt][data-v-dee80196]{user-select:none;cursor:pointer;padding:0 .1em;vertical-align:middle}#jia-video-tool [opt][data-v-dee80196]:hover,#jia-video-tool [opt][actived=true][data-v-dee80196]{background-color:#333}#jia-video-tool>div[data-v-dee80196]{padding:.2em;display:flex}#jia-video-tool>div div[data-v-dee80196]{word-wrap:nowrap;word-break:keep-all;display:inline-block}#jia-video-tool #row2>input[data-v-dee80196]{width:4em}#jia-video-tool input[data-v-dee80196]{min-width:3em}#range_selector[data-v-dee80196]{border:2px dashed #6d8500;box-shadow:0 0 0 100vmax #000a;position:fixed;pointer-events:none}dialog[data-v-dee80196]{position:fixed;display:flex;padding:0;top:0;left:0;justify-content:center;border:0;max-width:100vw;max-height:100vh;align-items:center;width:100%;height:100%;background:#000000b4}dialog canvas[data-v-dee80196],dialog img[data-v-dee80196]{max-width:90%;max-height:90%;border:2px solid #000}.fadeLoop[data-v-dee80196]{animation:fadeLoop-dee80196 1s infinite}@keyframes fadeLoop-dee80196{0%{opacity:1}50%{opacity:0}to{opacity:1}}")),document.head.appendChild(e)}}catch(d){console.error("vite-plugin-css-injected-by-js",d)}})();
var Ci = {};
/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Le(e, t) {
  const n = new Set(e.split(","));
  return t ? (o) => n.has(o.toLowerCase()) : (o) => n.has(o);
}
const K = Ci.NODE_ENV !== "production" ? Object.freeze({}) : {}, yt = Ci.NODE_ENV !== "production" ? Object.freeze([]) : [], X = () => {
}, Ar = () => !1, Wt = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), gn = (e) => e.startsWith("onUpdate:"), Y = Object.assign, ho = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, jr = Object.prototype.hasOwnProperty, A = (e, t) => jr.call(e, t), T = Array.isArray, vt = (e) => vn(e) === "[object Map]", Lr = (e) => vn(e) === "[object Set]", S = (e) => typeof e == "function", Q = (e) => typeof e == "string", Gt = (e) => typeof e == "symbol", W = (e) => e !== null && typeof e == "object", go = (e) => (W(e) || S(e)) && S(e.then) && S(e.catch), $r = Object.prototype.toString, vn = (e) => $r.call(e), mo = (e) => vn(e).slice(8, -1), Hr = (e) => vn(e) === "[object Object]", _o = (e) => Q(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, jt = /* @__PURE__ */ Le(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Ur = /* @__PURE__ */ Le(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), On = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, kr = /-(\w)/g, Vt = On((e) => e.replace(kr, (t, n) => n ? n.toUpperCase() : "")), Kr = /\B([A-Z])/g, et = On(
  (e) => e.replace(Kr, "-$1").toLowerCase()
), wn = On((e) => e.charAt(0).toUpperCase() + e.slice(1)), st = On((e) => e ? `on${wn(e)}` : ""), pt = (e, t) => !Object.is(e, t), _t = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, Ti = (e, t, n, o = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: o,
    value: n
  });
}, qn = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Wo;
const Eo = () => Wo || (Wo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Je(e) {
  if (T(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], i = Q(o) ? qr(o) : Je(o);
      if (i)
        for (const r in i)
          t[r] = i[r];
    }
    return t;
  } else if (Q(e) || W(e))
    return e;
}
const Br = /;(?![^(]*\))/g, Wr = /:([^]+)/, Gr = /\/\*[^]*?\*\//g;
function qr(e) {
  const t = {};
  return e.replace(Gr, "").split(Br).forEach((n) => {
    if (n) {
      const o = n.split(Wr);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function No(e) {
  let t = "";
  if (Q(e))
    t = e;
  else if (T(e))
    for (let n = 0; n < e.length; n++) {
      const o = No(e[n]);
      o && (t += o + " ");
    }
  else if (W(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const zr = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Yr = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", Jr = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", Xr = /* @__PURE__ */ Le(zr), Qr = /* @__PURE__ */ Le(Yr), Zr = /* @__PURE__ */ Le(Jr), es = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ts = /* @__PURE__ */ Le(es);
function Si(e) {
  return !!e || e === "";
}
var Z = {};
function tt(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Ee;
class ns {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = Ee, !t && Ee && (this.index = (Ee.scopes || (Ee.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = Ee;
      try {
        return Ee = this, t();
      } finally {
        Ee = n;
      }
    } else
      Z.NODE_ENV !== "production" && tt("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    Ee = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    Ee = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, o;
      for (n = 0, o = this.effects.length; n < o; n++)
        this.effects[n].stop();
      for (n = 0, o = this.cleanups.length; n < o; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, o = this.scopes.length; n < o; n++)
          this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const i = this.parent.scopes.pop();
        i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function os(e, t = Ee) {
  t && t.active && t.effects.push(e);
}
function is() {
  return Ee;
}
let ct;
class bo {
  constructor(t, n, o, i) {
    this.fn = t, this.trigger = n, this.scheduler = o, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, os(this, i);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, $e();
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t];
        if (n.computed && (rs(n.computed), this._dirtyLevel >= 4))
          break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), He();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let t = Qe, n = ct;
    try {
      return Qe = !0, ct = this, this._runnings++, Go(this), this.fn();
    } finally {
      qo(this), this._runnings--, ct = n, Qe = t;
    }
  }
  stop() {
    this.active && (Go(this), qo(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function rs(e) {
  return e.value;
}
function Go(e) {
  e._trackId++, e._depsLength = 0;
}
function qo(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++)
      Ri(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function Ri(e, t) {
  const n = e.get(t);
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup());
}
let Qe = !0, zn = 0;
const Ii = [];
function $e() {
  Ii.push(Qe), Qe = !1;
}
function He() {
  const e = Ii.pop();
  Qe = e === void 0 ? !0 : e;
}
function yo() {
  zn++;
}
function vo() {
  for (zn--; !zn && Yn.length; )
    Yn.shift()();
}
function Pi(e, t, n) {
  var o;
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const i = e.deps[e._depsLength];
    i !== t ? (i && Ri(i, e), e.deps[e._depsLength++] = t) : e._depsLength++, Z.NODE_ENV !== "production" && ((o = e.onTrack) == null || o.call(e, Y({ effect: e }, n)));
  }
}
const Yn = [];
function Mi(e, t, n) {
  var o;
  yo();
  for (const i of e.keys()) {
    let r;
    i._dirtyLevel < t && (r ?? (r = e.get(i) === i._trackId)) && (i._shouldSchedule || (i._shouldSchedule = i._dirtyLevel === 0), i._dirtyLevel = t), i._shouldSchedule && (r ?? (r = e.get(i) === i._trackId)) && (Z.NODE_ENV !== "production" && ((o = i.onTrigger) == null || o.call(i, Y({ effect: i }, n))), i.trigger(), (!i._runnings || i.allowRecurse) && i._dirtyLevel !== 2 && (i._shouldSchedule = !1, i.scheduler && Yn.push(i.scheduler)));
  }
  vo();
}
const Fi = (e, t) => {
  const n = /* @__PURE__ */ new Map();
  return n.cleanup = e, n.computed = t, n;
}, Jn = /* @__PURE__ */ new WeakMap(), ft = Symbol(Z.NODE_ENV !== "production" ? "iterate" : ""), Xn = Symbol(Z.NODE_ENV !== "production" ? "Map key iterate" : "");
function ne(e, t, n) {
  if (Qe && ct) {
    let o = Jn.get(e);
    o || Jn.set(e, o = /* @__PURE__ */ new Map());
    let i = o.get(n);
    i || o.set(n, i = Fi(() => o.delete(n))), Pi(
      ct,
      i,
      Z.NODE_ENV !== "production" ? {
        target: e,
        type: t,
        key: n
      } : void 0
    );
  }
}
function Te(e, t, n, o, i, r) {
  const s = Jn.get(e);
  if (!s)
    return;
  let c = [];
  if (t === "clear")
    c = [...s.values()];
  else if (n === "length" && T(e)) {
    const f = Number(o);
    s.forEach((d, g) => {
      (g === "length" || !Gt(g) && g >= f) && c.push(d);
    });
  } else
    switch (n !== void 0 && c.push(s.get(n)), t) {
      case "add":
        T(e) ? _o(n) && c.push(s.get("length")) : (c.push(s.get(ft)), vt(e) && c.push(s.get(Xn)));
        break;
      case "delete":
        T(e) || (c.push(s.get(ft)), vt(e) && c.push(s.get(Xn)));
        break;
      case "set":
        vt(e) && c.push(s.get(ft));
        break;
    }
  yo();
  for (const f of c)
    f && Mi(
      f,
      4,
      Z.NODE_ENV !== "production" ? {
        target: e,
        type: t,
        key: n,
        newValue: o,
        oldValue: i,
        oldTarget: r
      } : void 0
    );
  vo();
}
const ss = /* @__PURE__ */ Le("__proto__,__v_isRef,__isVue"), Ai = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Gt)
), zo = /* @__PURE__ */ ls();
function ls() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const o = F(this);
      for (let r = 0, s = this.length; r < s; r++)
        ne(o, "get", r + "");
      const i = o[t](...n);
      return i === -1 || i === !1 ? o[t](...n.map(F)) : i;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      $e(), yo();
      const o = F(this)[t].apply(this, n);
      return vo(), He(), o;
    };
  }), e;
}
function cs(e) {
  Gt(e) || (e = String(e));
  const t = F(this);
  return ne(t, "has", e), t.hasOwnProperty(e);
}
class ji {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, o) {
    const i = this._isReadonly, r = this._isShallow;
    if (n === "__v_isReactive")
      return !i;
    if (n === "__v_isReadonly")
      return i;
    if (n === "__v_isShallow")
      return r;
    if (n === "__v_raw")
      return o === (i ? r ? Bi : Ki : r ? ki : Ui).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
    const s = T(t);
    if (!i) {
      if (s && A(zo, n))
        return Reflect.get(zo, n, o);
      if (n === "hasOwnProperty")
        return cs;
    }
    const c = Reflect.get(t, n, o);
    return (Gt(n) ? Ai.has(n) : ss(n)) || (i || ne(t, "get", n), r) ? c : re(c) ? s && _o(n) ? c : c.value : W(c) ? i ? Wi(c) : wo(c) : c;
  }
}
class Li extends ji {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, i) {
    let r = t[n];
    if (!this._isShallow) {
      const f = Dt(r);
      if (!wt(o) && !Dt(o) && (r = F(r), o = F(o)), !T(t) && re(r) && !re(o))
        return f ? !1 : (r.value = o, !0);
    }
    const s = T(t) && _o(n) ? Number(n) < t.length : A(t, n), c = Reflect.set(t, n, o, i);
    return t === F(i) && (s ? pt(o, r) && Te(t, "set", n, o, r) : Te(t, "add", n, o)), c;
  }
  deleteProperty(t, n) {
    const o = A(t, n), i = t[n], r = Reflect.deleteProperty(t, n);
    return r && o && Te(t, "delete", n, void 0, i), r;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!Gt(n) || !Ai.has(n)) && ne(t, "has", n), o;
  }
  ownKeys(t) {
    return ne(
      t,
      "iterate",
      T(t) ? "length" : ft
    ), Reflect.ownKeys(t);
  }
}
class $i extends ji {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return Z.NODE_ENV !== "production" && tt(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return Z.NODE_ENV !== "production" && tt(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const fs = /* @__PURE__ */ new Li(), us = /* @__PURE__ */ new $i(), as = /* @__PURE__ */ new Li(
  !0
), ds = /* @__PURE__ */ new $i(!0), Oo = (e) => e, xn = (e) => Reflect.getPrototypeOf(e);
function Zt(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const i = F(e), r = F(t);
  n || (pt(t, r) && ne(i, "get", t), ne(i, "get", r));
  const { has: s } = xn(i), c = o ? Oo : n ? Vo : xo;
  if (s.call(i, t))
    return c(e.get(t));
  if (s.call(i, r))
    return c(e.get(r));
  e !== i && e.get(t);
}
function en(e, t = !1) {
  const n = this.__v_raw, o = F(n), i = F(e);
  return t || (pt(e, i) && ne(o, "has", e), ne(o, "has", i)), e === i ? n.has(e) : n.has(e) || n.has(i);
}
function tn(e, t = !1) {
  return e = e.__v_raw, !t && ne(F(e), "iterate", ft), Reflect.get(e, "size", e);
}
function Yo(e) {
  e = F(e);
  const t = F(this);
  return xn(t).has.call(t, e) || (t.add(e), Te(t, "add", e, e)), this;
}
function Jo(e, t) {
  t = F(t);
  const n = F(this), { has: o, get: i } = xn(n);
  let r = o.call(n, e);
  r ? Z.NODE_ENV !== "production" && Hi(n, o, e) : (e = F(e), r = o.call(n, e));
  const s = i.call(n, e);
  return n.set(e, t), r ? pt(t, s) && Te(n, "set", e, t, s) : Te(n, "add", e, t), this;
}
function Xo(e) {
  const t = F(this), { has: n, get: o } = xn(t);
  let i = n.call(t, e);
  i ? Z.NODE_ENV !== "production" && Hi(t, n, e) : (e = F(e), i = n.call(t, e));
  const r = o ? o.call(t, e) : void 0, s = t.delete(e);
  return i && Te(t, "delete", e, void 0, r), s;
}
function Qo() {
  const e = F(this), t = e.size !== 0, n = Z.NODE_ENV !== "production" ? vt(e) ? new Map(e) : new Set(e) : void 0, o = e.clear();
  return t && Te(e, "clear", void 0, void 0, n), o;
}
function nn(e, t) {
  return function(o, i) {
    const r = this, s = r.__v_raw, c = F(s), f = t ? Oo : e ? Vo : xo;
    return !e && ne(c, "iterate", ft), s.forEach((d, g) => o.call(i, f(d), f(g), r));
  };
}
function on(e, t, n) {
  return function(...o) {
    const i = this.__v_raw, r = F(i), s = vt(r), c = e === "entries" || e === Symbol.iterator && s, f = e === "keys" && s, d = i[e](...o), g = n ? Oo : t ? Vo : xo;
    return !t && ne(
      r,
      "iterate",
      f ? Xn : ft
    ), {
      // iterator protocol
      next() {
        const { value: p, done: N } = d.next();
        return N ? { value: p, done: N } : {
          value: c ? [g(p[0]), g(p[1])] : g(p),
          done: N
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function We(e) {
  return function(...t) {
    if (Z.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      tt(
        `${wn(e)} operation ${n}failed: target is readonly.`,
        F(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function ps() {
  const e = {
    get(r) {
      return Zt(this, r);
    },
    get size() {
      return tn(this);
    },
    has: en,
    add: Yo,
    set: Jo,
    delete: Xo,
    clear: Qo,
    forEach: nn(!1, !1)
  }, t = {
    get(r) {
      return Zt(this, r, !1, !0);
    },
    get size() {
      return tn(this);
    },
    has: en,
    add: Yo,
    set: Jo,
    delete: Xo,
    clear: Qo,
    forEach: nn(!1, !0)
  }, n = {
    get(r) {
      return Zt(this, r, !0);
    },
    get size() {
      return tn(this, !0);
    },
    has(r) {
      return en.call(this, r, !0);
    },
    add: We("add"),
    set: We("set"),
    delete: We("delete"),
    clear: We("clear"),
    forEach: nn(!0, !1)
  }, o = {
    get(r) {
      return Zt(this, r, !0, !0);
    },
    get size() {
      return tn(this, !0);
    },
    has(r) {
      return en.call(this, r, !0);
    },
    add: We("add"),
    set: We("set"),
    delete: We("delete"),
    clear: We("clear"),
    forEach: nn(!0, !0)
  };
  return [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((r) => {
    e[r] = on(r, !1, !1), n[r] = on(r, !0, !1), t[r] = on(r, !1, !0), o[r] = on(
      r,
      !0,
      !0
    );
  }), [
    e,
    n,
    t,
    o
  ];
}
const [
  hs,
  gs,
  ms,
  _s
] = /* @__PURE__ */ ps();
function Vn(e, t) {
  const n = t ? e ? _s : ms : e ? gs : hs;
  return (o, i, r) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? o : Reflect.get(
    A(n, i) && i in o ? n : o,
    i,
    r
  );
}
const Es = {
  get: /* @__PURE__ */ Vn(!1, !1)
}, Ns = {
  get: /* @__PURE__ */ Vn(!1, !0)
}, bs = {
  get: /* @__PURE__ */ Vn(!0, !1)
}, ys = {
  get: /* @__PURE__ */ Vn(!0, !0)
};
function Hi(e, t, n) {
  const o = F(n);
  if (o !== n && t.call(e, o)) {
    const i = mo(e);
    tt(
      `Reactive ${i} contains both the raw and reactive versions of the same object${i === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Ui = /* @__PURE__ */ new WeakMap(), ki = /* @__PURE__ */ new WeakMap(), Ki = /* @__PURE__ */ new WeakMap(), Bi = /* @__PURE__ */ new WeakMap();
function vs(e) {
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
function Os(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : vs(mo(e));
}
function wo(e) {
  return Dt(e) ? e : Dn(
    e,
    !1,
    fs,
    Es,
    Ui
  );
}
function ws(e) {
  return Dn(
    e,
    !1,
    as,
    Ns,
    ki
  );
}
function Wi(e) {
  return Dn(
    e,
    !0,
    us,
    bs,
    Ki
  );
}
function Ce(e) {
  return Dn(
    e,
    !0,
    ds,
    ys,
    Bi
  );
}
function Dn(e, t, n, o, i) {
  if (!W(e))
    return Z.NODE_ENV !== "production" && tt(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = i.get(e);
  if (r)
    return r;
  const s = Os(e);
  if (s === 0)
    return e;
  const c = new Proxy(
    e,
    s === 2 ? o : n
  );
  return i.set(e, c), c;
}
function Ot(e) {
  return Dt(e) ? Ot(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Dt(e) {
  return !!(e && e.__v_isReadonly);
}
function wt(e) {
  return !!(e && e.__v_isShallow);
}
function Qn(e) {
  return e ? !!e.__v_raw : !1;
}
function F(e) {
  const t = e && e.__v_raw;
  return t ? F(t) : e;
}
function xs(e) {
  return Object.isExtensible(e) && Ti(e, "__v_skip", !0), e;
}
const xo = (e) => W(e) ? wo(e) : e, Vo = (e) => W(e) ? Wi(e) : e, Vs = "Computed is still dirty after getter evaluation, likely because a computed is mutating its own dependency in its getter. State mutations in computed getters should be avoided.  Check the docs for more details: https://vuejs.org/guide/essentials/computed.html#getters-should-be-side-effect-free";
class Gi {
  constructor(t, n, o, i) {
    this.getter = t, this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new bo(
      () => t(this._value),
      () => jn(
        this,
        this.effect._dirtyLevel === 2 ? 2 : 3
      )
    ), this.effect.computed = this, this.effect.active = this._cacheable = !i, this.__v_isReadonly = o;
  }
  get value() {
    const t = F(this);
    return (!t._cacheable || t.effect.dirty) && pt(t._value, t._value = t.effect.run()) && jn(t, 4), Cs(t), t.effect._dirtyLevel >= 2 && (Z.NODE_ENV !== "production" && this._warnRecursive && tt(Vs, `

getter: `, this.getter), jn(t, 2)), t._value;
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
function Ds(e, t, n = !1) {
  let o, i;
  const r = S(e);
  r ? (o = e, i = Z.NODE_ENV !== "production" ? () => {
    tt("Write operation failed: computed value is readonly");
  } : X) : (o = e.get, i = e.set);
  const s = new Gi(o, i, r || !i, n);
  return Z.NODE_ENV !== "production" && t && !n && (s.effect.onTrack = t.onTrack, s.effect.onTrigger = t.onTrigger), s;
}
function Cs(e) {
  var t;
  Qe && ct && (e = F(e), Pi(
    ct,
    (t = e.dep) != null ? t : e.dep = Fi(
      () => e.dep = void 0,
      e instanceof Gi ? e : void 0
    ),
    Z.NODE_ENV !== "production" ? {
      target: e,
      type: "get",
      key: "value"
    } : void 0
  ));
}
function jn(e, t = 4, n) {
  e = F(e);
  const o = e.dep;
  o && Mi(
    o,
    t,
    Z.NODE_ENV !== "production" ? {
      target: e,
      type: "set",
      key: "value",
      newValue: n
    } : void 0
  );
}
function re(e) {
  return !!(e && e.__v_isRef === !0);
}
function Ts(e) {
  return re(e) ? e.value : e;
}
const Ss = {
  get: (e, t, n) => Ts(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const i = e[t];
    return re(i) && !re(n) ? (i.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function qi(e) {
  return Ot(e) ? e : new Proxy(e, Ss);
}
var a = {};
const ut = [];
function ln(e) {
  ut.push(e);
}
function cn() {
  ut.pop();
}
function O(e, ...t) {
  $e();
  const n = ut.length ? ut[ut.length - 1].component : null, o = n && n.appContext.config.warnHandler, i = Rs();
  if (o)
    Fe(
      o,
      n,
      11,
      [
        e + t.map((r) => {
          var s, c;
          return (c = (s = r.toString) == null ? void 0 : s.call(r)) != null ? c : JSON.stringify(r);
        }).join(""),
        n && n.proxy,
        i.map(
          ({ vnode: r }) => `at <${Pn(n, r.type)}>`
        ).join(`
`),
        i
      ]
    );
  else {
    const r = [`[Vue warn]: ${e}`, ...t];
    i.length && r.push(`
`, ...Is(i)), console.warn(...r);
  }
  He();
}
function Rs() {
  let e = ut[ut.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const o = e.component && e.component.parent;
    e = o && o.vnode;
  }
  return t;
}
function Is(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...Ps(n));
  }), t;
}
function Ps({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, i = ` at <${Pn(
    e.component,
    e.type,
    o
  )}`, r = ">" + n;
  return e.props ? [i, ...Ms(e.props), r] : [i + r];
}
function Ms(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...zi(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function zi(e, t, n) {
  return Q(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : re(t) ? (t = zi(e, F(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : S(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = F(t), n ? t : [`${e}=`, t]);
}
const Do = {
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
function Fe(e, t, n, o) {
  try {
    return o ? e(...o) : e();
  } catch (i) {
    qt(i, t, n);
  }
}
function ve(e, t, n, o) {
  if (S(e)) {
    const i = Fe(e, t, n, o);
    return i && go(i) && i.catch((r) => {
      qt(r, t, n);
    }), i;
  }
  if (T(e)) {
    const i = [];
    for (let r = 0; r < e.length; r++)
      i.push(ve(e[r], t, n, o));
    return i;
  } else
    a.NODE_ENV !== "production" && O(
      `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
    );
}
function qt(e, t, n, o = !0) {
  const i = t ? t.vnode : null;
  if (t) {
    let r = t.parent;
    const s = t.proxy, c = a.NODE_ENV !== "production" ? Do[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; r; ) {
      const d = r.ec;
      if (d) {
        for (let g = 0; g < d.length; g++)
          if (d[g](e, s, c) === !1)
            return;
      }
      r = r.parent;
    }
    const f = t.appContext.config.errorHandler;
    if (f) {
      $e(), Fe(
        f,
        null,
        10,
        [e, s, c]
      ), He();
      return;
    }
  }
  Fs(e, n, i, o);
}
function Fs(e, t, n, o = !0) {
  if (a.NODE_ENV !== "production") {
    const i = Do[t];
    if (n && ln(n), O(`Unhandled error${i ? ` during execution of ${i}` : ""}`), n && cn(), o)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let kt = !1, Zn = !1;
const oe = [];
let Ve = 0;
const xt = [];
let Me = null, qe = 0;
const Yi = /* @__PURE__ */ Promise.resolve();
let Co = null;
const As = 100;
function js(e) {
  const t = Co || Yi;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ls(e) {
  let t = Ve + 1, n = oe.length;
  for (; t < n; ) {
    const o = t + n >>> 1, i = oe[o], r = Kt(i);
    r < e || r === e && i.pre ? t = o + 1 : n = o;
  }
  return t;
}
function Cn(e) {
  (!oe.length || !oe.includes(
    e,
    kt && e.allowRecurse ? Ve + 1 : Ve
  )) && (e.id == null ? oe.push(e) : oe.splice(Ls(e.id), 0, e), Ji());
}
function Ji() {
  !kt && !Zn && (Zn = !0, Co = Yi.then(Zi));
}
function $s(e) {
  const t = oe.indexOf(e);
  t > Ve && oe.splice(t, 1);
}
function Xi(e) {
  T(e) ? xt.push(...e) : (!Me || !Me.includes(
    e,
    e.allowRecurse ? qe + 1 : qe
  )) && xt.push(e), Ji();
}
function Zo(e, t, n = kt ? Ve + 1 : 0) {
  for (a.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < oe.length; n++) {
    const o = oe[n];
    if (o && o.pre) {
      if (e && o.id !== e.uid || a.NODE_ENV !== "production" && To(t, o))
        continue;
      oe.splice(n, 1), n--, o();
    }
  }
}
function Qi(e) {
  if (xt.length) {
    const t = [...new Set(xt)].sort(
      (n, o) => Kt(n) - Kt(o)
    );
    if (xt.length = 0, Me) {
      Me.push(...t);
      return;
    }
    for (Me = t, a.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), qe = 0; qe < Me.length; qe++)
      a.NODE_ENV !== "production" && To(e, Me[qe]) || Me[qe]();
    Me = null, qe = 0;
  }
}
const Kt = (e) => e.id == null ? 1 / 0 : e.id, Hs = (e, t) => {
  const n = Kt(e) - Kt(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function Zi(e) {
  Zn = !1, kt = !0, a.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), oe.sort(Hs);
  const t = a.NODE_ENV !== "production" ? (n) => To(e, n) : X;
  try {
    for (Ve = 0; Ve < oe.length; Ve++) {
      const n = oe[Ve];
      if (n && n.active !== !1) {
        if (a.NODE_ENV !== "production" && t(n))
          continue;
        Fe(n, null, 14);
      }
    }
  } finally {
    Ve = 0, oe.length = 0, Qi(e), kt = !1, Co = null, (oe.length || xt.length) && Zi(e);
  }
}
function To(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > As) {
      const o = t.ownerInstance, i = o && Rr(o.type);
      return qt(
        `Maximum recursive updates exceeded${i ? ` in component <${i}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
        null,
        10
      ), !0;
    } else
      e.set(t, n + 1);
  }
}
let at = !1;
const Et = /* @__PURE__ */ new Set();
a.NODE_ENV !== "production" && (Eo().__VUE_HMR_RUNTIME__ = {
  createRecord: Ln(er),
  rerender: Ln(Ks),
  reload: Ln(Bs)
});
const ht = /* @__PURE__ */ new Map();
function Us(e) {
  const t = e.type.__hmrId;
  let n = ht.get(t);
  n || (er(t, e.type), n = ht.get(t)), n.instances.add(e);
}
function ks(e) {
  ht.get(e.type.__hmrId).instances.delete(e);
}
function er(e, t) {
  return ht.has(e) ? !1 : (ht.set(e, {
    initialDef: Lt(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Lt(e) {
  return Ir(e) ? e.__vccOpts : e;
}
function Ks(e, t) {
  const n = ht.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, Lt(o.type).render = t), o.renderCache = [], at = !0, o.effect.dirty = !0, o.update(), at = !1;
  }));
}
function Bs(e, t) {
  const n = ht.get(e);
  if (!n)
    return;
  t = Lt(t), ei(n.initialDef, t);
  const o = [...n.instances];
  for (const i of o) {
    const r = Lt(i.type);
    Et.has(r) || (r !== n.initialDef && ei(r, t), Et.add(r)), i.appContext.propsCache.delete(i.type), i.appContext.emitsCache.delete(i.type), i.appContext.optionsCache.delete(i.type), i.ceReload ? (Et.add(r), i.ceReload(t.styles), Et.delete(r)) : i.parent ? (i.parent.effect.dirty = !0, Cn(i.parent.update)) : i.appContext.reload ? i.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  Xi(() => {
    for (const i of o)
      Et.delete(
        Lt(i.type)
      );
  });
}
function ei(e, t) {
  Y(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Ln(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (o) {
      console.error(o), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let De, Mt = [], eo = !1;
function zt(e, ...t) {
  De ? De.emit(e, ...t) : eo || Mt.push({ event: e, args: t });
}
function tr(e, t) {
  var n, o;
  De = e, De ? (De.enabled = !0, Mt.forEach(({ event: i, args: r }) => De.emit(i, ...r)), Mt = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !((o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    tr(r, t);
  }), setTimeout(() => {
    De || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, eo = !0, Mt = []);
  }, 3e3)) : (eo = !0, Mt = []);
}
function Ws(e, t) {
  zt("app:init", e, t, {
    Fragment: Ne,
    Text: Yt,
    Comment: pe,
    Static: dn
  });
}
function Gs(e) {
  zt("app:unmount", e);
}
const qs = /* @__PURE__ */ So(
  "component:added"
  /* COMPONENT_ADDED */
), nr = /* @__PURE__ */ So(
  "component:updated"
  /* COMPONENT_UPDATED */
), zs = /* @__PURE__ */ So(
  "component:removed"
  /* COMPONENT_REMOVED */
), Ys = (e) => {
  De && typeof De.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !De.cleanupBuffer(e) && zs(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function So(e) {
  return (t) => {
    zt(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const Js = /* @__PURE__ */ or(
  "perf:start"
  /* PERFORMANCE_START */
), Xs = /* @__PURE__ */ or(
  "perf:end"
  /* PERFORMANCE_END */
);
function or(e) {
  return (t, n, o) => {
    zt(e, t.appContext.app, t.uid, t, n, o);
  };
}
function Qs(e, t, n) {
  zt(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
function Zs(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const o = e.vnode.props || K;
  if (a.NODE_ENV !== "production") {
    const {
      emitsOptions: g,
      propsOptions: [p]
    } = e;
    if (g)
      if (!(t in g))
        (!p || !(st(t) in p)) && O(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${st(t)}" prop.`
        );
      else {
        const N = g[t];
        S(N) && (N(...n) || O(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let i = n;
  const r = t.startsWith("update:"), s = r && t.slice(7);
  if (s && s in o) {
    const g = `${s === "modelValue" ? "model" : s}Modifiers`, { number: p, trim: N } = o[g] || K;
    N && (i = n.map((V) => Q(V) ? V.trim() : V)), p && (i = n.map(qn));
  }
  if (a.NODE_ENV !== "production" && Qs(e, t, i), a.NODE_ENV !== "production") {
    const g = t.toLowerCase();
    g !== t && o[st(g)] && O(
      `Event "${g}" is emitted in component ${Pn(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${et(
        t
      )}" instead of "${t}".`
    );
  }
  let c, f = o[c = st(t)] || // also try camelCase event handler (#2249)
  o[c = st(Vt(t))];
  !f && r && (f = o[c = st(et(t))]), f && ve(
    f,
    e,
    6,
    i
  );
  const d = o[c + "Once"];
  if (d) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[c])
      return;
    e.emitted[c] = !0, ve(
      d,
      e,
      6,
      i
    );
  }
}
function ir(e, t, n = !1) {
  const o = t.emitsCache, i = o.get(e);
  if (i !== void 0)
    return i;
  const r = e.emits;
  let s = {}, c = !1;
  if (!S(e)) {
    const f = (d) => {
      const g = ir(d, t, !0);
      g && (c = !0, Y(s, g));
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  return !r && !c ? (W(e) && o.set(e, null), null) : (T(r) ? r.forEach((f) => s[f] = null) : Y(s, r), W(e) && o.set(e, s), s);
}
function Tn(e, t) {
  return !e || !Wt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), A(e, t[0].toLowerCase() + t.slice(1)) || A(e, et(t)) || A(e, t));
}
let ie = null, rr = null;
function mn(e) {
  const t = ie;
  return ie = e, rr = e && e.type.__scopeId || null, t;
}
function el(e, t = ie, n) {
  if (!t || e._n)
    return e;
  const o = (...i) => {
    o._d && di(-1);
    const r = mn(t);
    let s;
    try {
      s = e(...i);
    } finally {
      mn(r), o._d && di(1);
    }
    return a.NODE_ENV !== "production" && nr(t), s;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
let to = !1;
function _n() {
  to = !0;
}
function $n(e) {
  const {
    type: t,
    vnode: n,
    proxy: o,
    withProxy: i,
    propsOptions: [r],
    slots: s,
    attrs: c,
    emit: f,
    render: d,
    renderCache: g,
    props: p,
    data: N,
    setupState: V,
    ctx: I,
    inheritAttrs: P
  } = e, he = mn(e);
  let k, B;
  a.NODE_ENV !== "production" && (to = !1);
  try {
    if (n.shapeFlag & 4) {
      const J = i || o, ge = a.NODE_ENV !== "production" && V.__isScriptSetup ? new Proxy(J, {
        get(M, se, le) {
          return O(
            `Property '${String(
              se
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(M, se, le);
        }
      }) : J;
      k = be(
        d.call(
          ge,
          J,
          g,
          a.NODE_ENV !== "production" ? Ce(p) : p,
          V,
          N,
          I
        )
      ), B = c;
    } else {
      const J = t;
      a.NODE_ENV !== "production" && c === p && _n(), k = be(
        J.length > 1 ? J(
          a.NODE_ENV !== "production" ? Ce(p) : p,
          a.NODE_ENV !== "production" ? {
            get attrs() {
              return _n(), Ce(c);
            },
            slots: s,
            emit: f
          } : { attrs: c, slots: s, emit: f }
        ) : J(
          a.NODE_ENV !== "production" ? Ce(p) : p,
          null
        )
      ), B = t.props ? c : tl(c);
    }
  } catch (J) {
    Ht.length = 0, qt(J, e, 1), k = Ae(pe);
  }
  let q = k, z;
  if (a.NODE_ENV !== "production" && k.patchFlag > 0 && k.patchFlag & 2048 && ([q, z] = sr(k)), B && P !== !1) {
    const J = Object.keys(B), { shapeFlag: ge } = q;
    if (J.length) {
      if (ge & 7)
        r && J.some(gn) && (B = nl(
          B,
          r
        )), q = nt(q, B, !1, !0);
      else if (a.NODE_ENV !== "production" && !to && q.type !== pe) {
        const M = Object.keys(c), se = [], le = [];
        for (let Se = 0, ke = M.length; Se < ke; Se++) {
          const me = M[Se];
          Wt(me) ? gn(me) || se.push(me[2].toLowerCase() + me.slice(3)) : le.push(me);
        }
        le.length && O(
          `Extraneous non-props attributes (${le.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`
        ), se.length && O(
          `Extraneous non-emits event listeners (${se.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (a.NODE_ENV !== "production" && !ti(q) && O(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), q = nt(q, null, !1, !0), q.dirs = q.dirs ? q.dirs.concat(n.dirs) : n.dirs), n.transition && (a.NODE_ENV !== "production" && !ti(q) && O(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), q.transition = n.transition), a.NODE_ENV !== "production" && z ? z(q) : k = q, mn(he), k;
}
const sr = (e) => {
  const t = e.children, n = e.dynamicChildren, o = Ro(t, !1);
  if (o) {
    if (a.NODE_ENV !== "production" && o.patchFlag > 0 && o.patchFlag & 2048)
      return sr(o);
  } else
    return [e, void 0];
  const i = t.indexOf(o), r = n ? n.indexOf(o) : -1, s = (c) => {
    t[i] = c, n && (r > -1 ? n[r] = c : c.patchFlag > 0 && (e.dynamicChildren = [...n, c]));
  };
  return [be(o), s];
};
function Ro(e, t = !0) {
  let n;
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    if (Ao(i)) {
      if (i.type !== pe || i.children === "v-if") {
        if (n)
          return;
        if (n = i, a.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return Ro(n.children);
      }
    } else
      return;
  }
  return n;
}
const tl = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Wt(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, nl = (e, t) => {
  const n = {};
  for (const o in e)
    (!gn(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, ti = (e) => e.shapeFlag & 7 || e.type === pe;
function ol(e, t, n) {
  const { props: o, children: i, component: r } = e, { props: s, children: c, patchFlag: f } = t, d = r.emitsOptions;
  if (a.NODE_ENV !== "production" && (i || c) && at || t.dirs || t.transition)
    return !0;
  if (n && f >= 0) {
    if (f & 1024)
      return !0;
    if (f & 16)
      return o ? ni(o, s, d) : !!s;
    if (f & 8) {
      const g = t.dynamicProps;
      for (let p = 0; p < g.length; p++) {
        const N = g[p];
        if (s[N] !== o[N] && !Tn(d, N))
          return !0;
      }
    }
  } else
    return (i || c) && (!c || !c.$stable) ? !0 : o === s ? !1 : o ? s ? ni(o, s, d) : !0 : !!s;
  return !1;
}
function ni(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < o.length; i++) {
    const r = o[i];
    if (t[r] !== e[r] && !Tn(n, r))
      return !0;
  }
  return !1;
}
function il({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.el = e.el), o === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const rl = Symbol.for("v-ndc"), sl = (e) => e.__isSuspense;
function ll(e, t) {
  t && t.pendingBranch ? T(e) ? t.effects.push(...e) : t.effects.push(e) : Xi(e);
}
const cl = Symbol.for("v-scx"), fl = () => {
  {
    const e = un(cl);
    return e || a.NODE_ENV !== "production" && O(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
}, rn = {};
function Hn(e, t, n) {
  return a.NODE_ENV !== "production" && !S(t) && O(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), lr(e, t, n);
}
function lr(e, t, {
  immediate: n,
  deep: o,
  flush: i,
  once: r,
  onTrack: s,
  onTrigger: c
} = K) {
  if (t && r) {
    const M = t;
    t = (...se) => {
      M(...se), ge();
    };
  }
  a.NODE_ENV !== "production" && o !== void 0 && typeof o == "number" && O(
    'watch() "deep" option with number value will be used as watch depth in future versions. Please use a boolean instead to avoid potential breakage.'
  ), a.NODE_ENV !== "production" && !t && (n !== void 0 && O(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && O(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && O(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const f = (M) => {
    O(
      "Invalid watch source: ",
      M,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, d = te, g = (M) => o === !0 ? M : (
    // for deep: false, only traverse root-level properties
    lt(M, o === !1 ? 1 : void 0)
  );
  let p, N = !1, V = !1;
  if (re(e) ? (p = () => e.value, N = wt(e)) : Ot(e) ? (p = () => g(e), N = !0) : T(e) ? (V = !0, N = e.some((M) => Ot(M) || wt(M)), p = () => e.map((M) => {
    if (re(M))
      return M.value;
    if (Ot(M))
      return g(M);
    if (S(M))
      return Fe(M, d, 2);
    a.NODE_ENV !== "production" && f(M);
  })) : S(e) ? t ? p = () => Fe(e, d, 2) : p = () => (I && I(), ve(
    e,
    d,
    3,
    [P]
  )) : (p = X, a.NODE_ENV !== "production" && f(e)), t && o) {
    const M = p;
    p = () => lt(M());
  }
  let I, P = (M) => {
    I = z.onStop = () => {
      Fe(M, d, 4), I = z.onStop = void 0;
    };
  }, he;
  if (Rn)
    if (P = X, t ? n && ve(t, d, 3, [
      p(),
      V ? [] : void 0,
      P
    ]) : p(), i === "sync") {
      const M = fl();
      he = M.__watcherHandles || (M.__watcherHandles = []);
    } else
      return X;
  let k = V ? new Array(e.length).fill(rn) : rn;
  const B = () => {
    if (!(!z.active || !z.dirty))
      if (t) {
        const M = z.run();
        (o || N || (V ? M.some((se, le) => pt(se, k[le])) : pt(M, k))) && (I && I(), ve(t, d, 3, [
          M,
          // pass undefined as the old value when it's changed for the first time
          k === rn ? void 0 : V && k[0] === rn ? [] : k,
          P
        ]), k = M);
      } else
        z.run();
  };
  B.allowRecurse = !!t;
  let q;
  i === "sync" ? q = B : i === "post" ? q = () => de(B, d && d.suspense) : (B.pre = !0, d && (B.id = d.uid), q = () => Cn(B));
  const z = new bo(p, X, q), J = is(), ge = () => {
    z.stop(), J && ho(J.effects, z);
  };
  return a.NODE_ENV !== "production" && (z.onTrack = s, z.onTrigger = c), t ? n ? B() : k = z.run() : i === "post" ? de(
    z.run.bind(z),
    d && d.suspense
  ) : z.run(), he && he.push(ge), ge;
}
function ul(e, t, n) {
  const o = this.proxy, i = Q(e) ? e.includes(".") ? cr(o, e) : () => o[e] : e.bind(o, o);
  let r;
  S(t) ? r = t : (r = t.handler, n = t);
  const s = Jt(this), c = lr(i, r.bind(o), n);
  return s(), c;
}
function cr(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let i = 0; i < n.length && o; i++)
      o = o[n[i]];
    return o;
  };
}
function lt(e, t = 1 / 0, n) {
  if (t <= 0 || !W(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, re(e))
    lt(e.value, t, n);
  else if (T(e))
    for (let o = 0; o < e.length; o++)
      lt(e[o], t, n);
  else if (Lr(e) || vt(e))
    e.forEach((o) => {
      lt(o, t, n);
    });
  else if (Hr(e))
    for (const o in e)
      lt(e[o], t, n);
  return e;
}
function fr(e) {
  Ur(e) && O("Do not use built-in directive ids as custom directive id: " + e);
}
function ae(e, t) {
  if (ie === null)
    return a.NODE_ENV !== "production" && O("withDirectives can only be used inside render functions."), e;
  const n = In(ie) || ie.proxy, o = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [r, s, c, f = K] = t[i];
    r && (S(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && lt(s), o.push({
      dir: r,
      instance: n,
      value: s,
      oldValue: void 0,
      arg: c,
      modifiers: f
    }));
  }
  return e;
}
function ot(e, t, n, o) {
  const i = e.dirs, r = t && t.dirs;
  for (let s = 0; s < i.length; s++) {
    const c = i[s];
    r && (c.oldValue = r[s].value);
    let f = c.dir[o];
    f && ($e(), ve(f, n, 8, [
      e.el,
      c,
      e,
      t
    ]), He());
  }
}
const fn = (e) => !!e.type.__asyncLoader, Io = (e) => e.type.__isKeepAlive;
function al(e, t) {
  ur(e, "a", t);
}
function dl(e, t) {
  ur(e, "da", t);
}
function ur(e, t, n = te) {
  const o = e.__wdc || (e.__wdc = () => {
    let i = n;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (Sn(t, o, n), n) {
    let i = n.parent;
    for (; i && i.parent; )
      Io(i.parent.vnode) && pl(o, t, n, i), i = i.parent;
  }
}
function pl(e, t, n, o) {
  const i = Sn(
    t,
    e,
    o,
    !0
    /* prepend */
  );
  ar(() => {
    ho(o[t], i);
  }, n);
}
function Sn(e, t, n = te, o = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...s) => {
      if (n.isUnmounted)
        return;
      $e();
      const c = Jt(n), f = ve(t, n, e, s);
      return c(), He(), f;
    });
    return o ? i.unshift(r) : i.push(r), r;
  } else if (a.NODE_ENV !== "production") {
    const i = st(Do[e].replace(/ hook$/, ""));
    O(
      `${i} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Ue = (e) => (t, n = te) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!Rn || e === "sp") && Sn(e, (...o) => t(...o), n)
), hl = Ue("bm"), gl = Ue("m"), ml = Ue("bu"), _l = Ue("u"), El = Ue("bum"), ar = Ue("um"), Nl = Ue("sp"), bl = Ue(
  "rtg"
), yl = Ue(
  "rtc"
);
function vl(e, t = te) {
  Sn("ec", e, t);
}
const no = (e) => e ? Tr(e) ? In(e) || e.proxy : no(e.parent) : null, dt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Y(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => a.NODE_ENV !== "production" ? Ce(e.props) : e.props,
    $attrs: (e) => a.NODE_ENV !== "production" ? Ce(e.attrs) : e.attrs,
    $slots: (e) => a.NODE_ENV !== "production" ? Ce(e.slots) : e.slots,
    $refs: (e) => a.NODE_ENV !== "production" ? Ce(e.refs) : e.refs,
    $parent: (e) => no(e.parent),
    $root: (e) => no(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Mo(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      e.effect.dirty = !0, Cn(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = js.bind(e.proxy)),
    $watch: (e) => ul.bind(e)
  })
), Po = (e) => e === "_" || e === "$", Un = (e, t) => e !== K && !e.__isScriptSetup && A(e, t), dr = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: o, data: i, props: r, accessCache: s, type: c, appContext: f } = e;
    if (a.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let d;
    if (t[0] !== "$") {
      const V = s[t];
      if (V !== void 0)
        switch (V) {
          case 1:
            return o[t];
          case 2:
            return i[t];
          case 4:
            return n[t];
          case 3:
            return r[t];
        }
      else {
        if (Un(o, t))
          return s[t] = 1, o[t];
        if (i !== K && A(i, t))
          return s[t] = 2, i[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (d = e.propsOptions[0]) && A(d, t)
        )
          return s[t] = 3, r[t];
        if (n !== K && A(n, t))
          return s[t] = 4, n[t];
        oo && (s[t] = 0);
      }
    }
    const g = dt[t];
    let p, N;
    if (g)
      return t === "$attrs" ? (ne(e.attrs, "get", ""), a.NODE_ENV !== "production" && _n()) : a.NODE_ENV !== "production" && t === "$slots" && ne(e, "get", t), g(e);
    if (
      // css module (injected by vue-loader)
      (p = c.__cssModules) && (p = p[t])
    )
      return p;
    if (n !== K && A(n, t))
      return s[t] = 4, n[t];
    if (
      // global properties
      N = f.config.globalProperties, A(N, t)
    )
      return N[t];
    a.NODE_ENV !== "production" && ie && (!Q(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (i !== K && Po(t[0]) && A(i, t) ? O(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === ie && O(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: i, ctx: r } = e;
    return Un(i, t) ? (i[t] = n, !0) : a.NODE_ENV !== "production" && i.__isScriptSetup && A(i, t) ? (O(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== K && A(o, t) ? (o[t] = n, !0) : A(e.props, t) ? (a.NODE_ENV !== "production" && O(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (a.NODE_ENV !== "production" && O(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (a.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(r, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: i, propsOptions: r }
  }, s) {
    let c;
    return !!n[s] || e !== K && A(e, s) || Un(t, s) || (c = r[0]) && A(c, s) || A(o, s) || A(dt, s) || A(i.config.globalProperties, s);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : A(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
a.NODE_ENV !== "production" && (dr.ownKeys = (e) => (O(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function Ol(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(dt).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => dt[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: X
    });
  }), t;
}
function wl(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((o) => {
    Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[o],
      set: X
    });
  });
}
function xl(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(F(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (Po(o[0])) {
        O(
          `setup() return property ${JSON.stringify(
            o
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, o, {
        enumerable: !0,
        configurable: !0,
        get: () => n[o],
        set: X
      });
    }
  });
}
function oi(e) {
  return T(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Vl() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? O(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let oo = !0;
function Dl(e) {
  const t = Mo(e), n = e.proxy, o = e.ctx;
  oo = !1, t.beforeCreate && ii(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: r,
    methods: s,
    watch: c,
    provide: f,
    inject: d,
    // lifecycle
    created: g,
    beforeMount: p,
    mounted: N,
    beforeUpdate: V,
    updated: I,
    activated: P,
    deactivated: he,
    beforeDestroy: k,
    beforeUnmount: B,
    destroyed: q,
    unmounted: z,
    render: J,
    renderTracked: ge,
    renderTriggered: M,
    errorCaptured: se,
    serverPrefetch: le,
    // public API
    expose: Se,
    inheritAttrs: ke,
    // assets
    components: me,
    directives: Xt,
    filters: Lo
  } = t, Ke = a.NODE_ENV !== "production" ? Vl() : null;
  if (a.NODE_ENV !== "production") {
    const [$] = e.propsOptions;
    if ($)
      for (const L in $)
        Ke("Props", L);
  }
  if (d && Cl(d, o, Ke), s)
    for (const $ in s) {
      const L = s[$];
      S(L) ? (a.NODE_ENV !== "production" ? Object.defineProperty(o, $, {
        value: L.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[$] = L.bind(n), a.NODE_ENV !== "production" && Ke("Methods", $)) : a.NODE_ENV !== "production" && O(
        `Method "${$}" has type "${typeof L}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (i) {
    a.NODE_ENV !== "production" && !S(i) && O(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const $ = i.call(n, n);
    if (a.NODE_ENV !== "production" && go($) && O(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !W($))
      a.NODE_ENV !== "production" && O("data() should return an object.");
    else if (e.data = wo($), a.NODE_ENV !== "production")
      for (const L in $)
        Ke("Data", L), Po(L[0]) || Object.defineProperty(o, L, {
          configurable: !0,
          enumerable: !0,
          get: () => $[L],
          set: X
        });
  }
  if (oo = !0, r)
    for (const $ in r) {
      const L = r[$], Oe = S(L) ? L.bind(n, n) : S(L.get) ? L.get.bind(n, n) : X;
      a.NODE_ENV !== "production" && Oe === X && O(`Computed property "${$}" has no getter.`);
      const Mn = !S(L) && S(L.set) ? L.set.bind(n) : a.NODE_ENV !== "production" ? () => {
        O(
          `Write operation failed: computed property "${$}" is readonly.`
        );
      } : X, Ct = gc({
        get: Oe,
        set: Mn
      });
      Object.defineProperty(o, $, {
        enumerable: !0,
        configurable: !0,
        get: () => Ct.value,
        set: (gt) => Ct.value = gt
      }), a.NODE_ENV !== "production" && Ke("Computed", $);
    }
  if (c)
    for (const $ in c)
      pr(c[$], o, n, $);
  if (f) {
    const $ = S(f) ? f.call(n) : f;
    Reflect.ownKeys($).forEach((L) => {
      Ml(L, $[L]);
    });
  }
  g && ii(g, e, "c");
  function ue($, L) {
    T(L) ? L.forEach((Oe) => $(Oe.bind(n))) : L && $(L.bind(n));
  }
  if (ue(hl, p), ue(gl, N), ue(ml, V), ue(_l, I), ue(al, P), ue(dl, he), ue(vl, se), ue(yl, ge), ue(bl, M), ue(El, B), ue(ar, z), ue(Nl, le), T(Se))
    if (Se.length) {
      const $ = e.exposed || (e.exposed = {});
      Se.forEach((L) => {
        Object.defineProperty($, L, {
          get: () => n[L],
          set: (Oe) => n[L] = Oe
        });
      });
    } else
      e.exposed || (e.exposed = {});
  J && e.render === X && (e.render = J), ke != null && (e.inheritAttrs = ke), me && (e.components = me), Xt && (e.directives = Xt);
}
function Cl(e, t, n = X) {
  T(e) && (e = io(e));
  for (const o in e) {
    const i = e[o];
    let r;
    W(i) ? "default" in i ? r = un(
      i.from || o,
      i.default,
      !0
    ) : r = un(i.from || o) : r = un(i), re(r) ? Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (s) => r.value = s
    }) : t[o] = r, a.NODE_ENV !== "production" && n("Inject", o);
  }
}
function ii(e, t, n) {
  ve(
    T(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function pr(e, t, n, o) {
  const i = o.includes(".") ? cr(n, o) : () => n[o];
  if (Q(e)) {
    const r = t[e];
    S(r) ? Hn(i, r) : a.NODE_ENV !== "production" && O(`Invalid watch handler specified by key "${e}"`, r);
  } else if (S(e))
    Hn(i, e.bind(n));
  else if (W(e))
    if (T(e))
      e.forEach((r) => pr(r, t, n, o));
    else {
      const r = S(e.handler) ? e.handler.bind(n) : t[e.handler];
      S(r) ? Hn(i, r, e) : a.NODE_ENV !== "production" && O(`Invalid watch handler specified by key "${e.handler}"`, r);
    }
  else
    a.NODE_ENV !== "production" && O(`Invalid watch option: "${o}"`, e);
}
function Mo(e) {
  const t = e.type, { mixins: n, extends: o } = t, {
    mixins: i,
    optionsCache: r,
    config: { optionMergeStrategies: s }
  } = e.appContext, c = r.get(t);
  let f;
  return c ? f = c : !i.length && !n && !o ? f = t : (f = {}, i.length && i.forEach(
    (d) => En(f, d, s, !0)
  ), En(f, t, s)), W(t) && r.set(t, f), f;
}
function En(e, t, n, o = !1) {
  const { mixins: i, extends: r } = t;
  r && En(e, r, n, !0), i && i.forEach(
    (s) => En(e, s, n, !0)
  );
  for (const s in t)
    if (o && s === "expose")
      a.NODE_ENV !== "production" && O(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const c = Tl[s] || n && n[s];
      e[s] = c ? c(e[s], t[s]) : t[s];
    }
  return e;
}
const Tl = {
  data: ri,
  props: si,
  emits: si,
  // objects
  methods: Ft,
  computed: Ft,
  // lifecycle
  beforeCreate: fe,
  created: fe,
  beforeMount: fe,
  mounted: fe,
  beforeUpdate: fe,
  updated: fe,
  beforeDestroy: fe,
  beforeUnmount: fe,
  destroyed: fe,
  unmounted: fe,
  activated: fe,
  deactivated: fe,
  errorCaptured: fe,
  serverPrefetch: fe,
  // assets
  components: Ft,
  directives: Ft,
  // watch
  watch: Rl,
  // provide / inject
  provide: ri,
  inject: Sl
};
function ri(e, t) {
  return t ? e ? function() {
    return Y(
      S(e) ? e.call(this, this) : e,
      S(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Sl(e, t) {
  return Ft(io(e), io(t));
}
function io(e) {
  if (T(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function fe(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Ft(e, t) {
  return e ? Y(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function si(e, t) {
  return e ? T(e) && T(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Y(
    /* @__PURE__ */ Object.create(null),
    oi(e),
    oi(t ?? {})
  ) : t;
}
function Rl(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = Y(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = fe(e[o], t[o]);
  return n;
}
function hr() {
  return {
    app: null,
    config: {
      isNativeTag: Ar,
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
let Il = 0;
function Pl(e, t) {
  return function(o, i = null) {
    S(o) || (o = Y({}, o)), i != null && !W(i) && (a.NODE_ENV !== "production" && O("root props passed to app.mount() must be an object."), i = null);
    const r = hr(), s = /* @__PURE__ */ new WeakSet();
    let c = !1;
    const f = r.app = {
      _uid: Il++,
      _component: o,
      _props: i,
      _container: null,
      _context: r,
      _instance: null,
      version: mi,
      get config() {
        return r.config;
      },
      set config(d) {
        a.NODE_ENV !== "production" && O(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(d, ...g) {
        return s.has(d) ? a.NODE_ENV !== "production" && O("Plugin has already been applied to target app.") : d && S(d.install) ? (s.add(d), d.install(f, ...g)) : S(d) ? (s.add(d), d(f, ...g)) : a.NODE_ENV !== "production" && O(
          'A plugin must either be a function or an object with an "install" function.'
        ), f;
      },
      mixin(d) {
        return r.mixins.includes(d) ? a.NODE_ENV !== "production" && O(
          "Mixin has already been applied to target app" + (d.name ? `: ${d.name}` : "")
        ) : r.mixins.push(d), f;
      },
      component(d, g) {
        return a.NODE_ENV !== "production" && uo(d, r.config), g ? (a.NODE_ENV !== "production" && r.components[d] && O(`Component "${d}" has already been registered in target app.`), r.components[d] = g, f) : r.components[d];
      },
      directive(d, g) {
        return a.NODE_ENV !== "production" && fr(d), g ? (a.NODE_ENV !== "production" && r.directives[d] && O(`Directive "${d}" has already been registered in target app.`), r.directives[d] = g, f) : r.directives[d];
      },
      mount(d, g, p) {
        if (c)
          a.NODE_ENV !== "production" && O(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          a.NODE_ENV !== "production" && d.__vue_app__ && O(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const N = Ae(o, i);
          return N.appContext = r, p === !0 ? p = "svg" : p === !1 && (p = void 0), a.NODE_ENV !== "production" && (r.reload = () => {
            e(
              nt(N),
              d,
              p
            );
          }), g && t ? t(N, d) : e(N, d, p), c = !0, f._container = d, d.__vue_app__ = f, a.NODE_ENV !== "production" && (f._instance = N.component, Ws(f, mi)), In(N.component) || N.component.proxy;
        }
      },
      unmount() {
        c ? (e(null, f._container), a.NODE_ENV !== "production" && (f._instance = null, Gs(f)), delete f._container.__vue_app__) : a.NODE_ENV !== "production" && O("Cannot unmount an app that is not mounted.");
      },
      provide(d, g) {
        return a.NODE_ENV !== "production" && d in r.provides && O(
          `App already provides property with key "${String(d)}". It will be overwritten with the new value.`
        ), r.provides[d] = g, f;
      },
      runWithContext(d) {
        const g = $t;
        $t = f;
        try {
          return d();
        } finally {
          $t = g;
        }
      }
    };
    return f;
  };
}
let $t = null;
function Ml(e, t) {
  if (!te)
    a.NODE_ENV !== "production" && O("provide() can only be used inside setup().");
  else {
    let n = te.provides;
    const o = te.parent && te.parent.provides;
    o === n && (n = te.provides = Object.create(o)), n[e] = t;
  }
}
function un(e, t, n = !1) {
  const o = te || ie;
  if (o || $t) {
    const i = o ? o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : $t._context.provides;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && S(t) ? t.call(o && o.proxy) : t;
    a.NODE_ENV !== "production" && O(`injection "${String(e)}" not found.`);
  } else
    a.NODE_ENV !== "production" && O("inject() can only be used inside setup() or functional components.");
}
const gr = {}, mr = () => Object.create(gr), _r = (e) => Object.getPrototypeOf(e) === gr;
function Fl(e, t, n, o = !1) {
  const i = {}, r = mr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Er(e, t, i, r);
  for (const s in e.propsOptions[0])
    s in i || (i[s] = void 0);
  a.NODE_ENV !== "production" && br(t || {}, i, e), n ? e.props = o ? i : ws(i) : e.type.props ? e.props = i : e.props = r, e.attrs = r;
}
function Al(e) {
  for (; e; ) {
    if (e.type.__hmrId)
      return !0;
    e = e.parent;
  }
}
function jl(e, t, n, o) {
  const {
    props: i,
    attrs: r,
    vnode: { patchFlag: s }
  } = e, c = F(i), [f] = e.propsOptions;
  let d = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(a.NODE_ENV !== "production" && Al(e)) && (o || s > 0) && !(s & 16)
  ) {
    if (s & 8) {
      const g = e.vnode.dynamicProps;
      for (let p = 0; p < g.length; p++) {
        let N = g[p];
        if (Tn(e.emitsOptions, N))
          continue;
        const V = t[N];
        if (f)
          if (A(r, N))
            V !== r[N] && (r[N] = V, d = !0);
          else {
            const I = Vt(N);
            i[I] = ro(
              f,
              c,
              I,
              V,
              e,
              !1
            );
          }
        else
          V !== r[N] && (r[N] = V, d = !0);
      }
    }
  } else {
    Er(e, t, i, r) && (d = !0);
    let g;
    for (const p in c)
      (!t || // for camelCase
      !A(t, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((g = et(p)) === p || !A(t, g))) && (f ? n && // for camelCase
      (n[p] !== void 0 || // for kebab-case
      n[g] !== void 0) && (i[p] = ro(
        f,
        c,
        p,
        void 0,
        e,
        !0
      )) : delete i[p]);
    if (r !== c)
      for (const p in r)
        (!t || !A(t, p)) && (delete r[p], d = !0);
  }
  d && Te(e.attrs, "set", ""), a.NODE_ENV !== "production" && br(t || {}, i, e);
}
function Er(e, t, n, o) {
  const [i, r] = e.propsOptions;
  let s = !1, c;
  if (t)
    for (let f in t) {
      if (jt(f))
        continue;
      const d = t[f];
      let g;
      i && A(i, g = Vt(f)) ? !r || !r.includes(g) ? n[g] = d : (c || (c = {}))[g] = d : Tn(e.emitsOptions, f) || (!(f in o) || d !== o[f]) && (o[f] = d, s = !0);
    }
  if (r) {
    const f = F(n), d = c || K;
    for (let g = 0; g < r.length; g++) {
      const p = r[g];
      n[p] = ro(
        i,
        f,
        p,
        d[p],
        e,
        !A(d, p)
      );
    }
  }
  return s;
}
function ro(e, t, n, o, i, r) {
  const s = e[n];
  if (s != null) {
    const c = A(s, "default");
    if (c && o === void 0) {
      const f = s.default;
      if (s.type !== Function && !s.skipFactory && S(f)) {
        const { propsDefaults: d } = i;
        if (n in d)
          o = d[n];
        else {
          const g = Jt(i);
          o = d[n] = f.call(
            null,
            t
          ), g();
        }
      } else
        o = f;
    }
    s[
      0
      /* shouldCast */
    ] && (r && !c ? o = !1 : s[
      1
      /* shouldCastTrue */
    ] && (o === "" || o === et(n)) && (o = !0));
  }
  return o;
}
function Nr(e, t, n = !1) {
  const o = t.propsCache, i = o.get(e);
  if (i)
    return i;
  const r = e.props, s = {}, c = [];
  let f = !1;
  if (!S(e)) {
    const g = (p) => {
      f = !0;
      const [N, V] = Nr(p, t, !0);
      Y(s, N), V && c.push(...V);
    };
    !n && t.mixins.length && t.mixins.forEach(g), e.extends && g(e.extends), e.mixins && e.mixins.forEach(g);
  }
  if (!r && !f)
    return W(e) && o.set(e, yt), yt;
  if (T(r))
    for (let g = 0; g < r.length; g++) {
      a.NODE_ENV !== "production" && !Q(r[g]) && O("props must be strings when using array syntax.", r[g]);
      const p = Vt(r[g]);
      li(p) && (s[p] = K);
    }
  else if (r) {
    a.NODE_ENV !== "production" && !W(r) && O("invalid props options", r);
    for (const g in r) {
      const p = Vt(g);
      if (li(p)) {
        const N = r[g], V = s[p] = T(N) || S(N) ? { type: N } : Y({}, N);
        if (V) {
          const I = fi(Boolean, V.type), P = fi(String, V.type);
          V[
            0
            /* shouldCast */
          ] = I > -1, V[
            1
            /* shouldCastTrue */
          ] = P < 0 || I < P, (I > -1 || A(V, "default")) && c.push(p);
        }
      }
    }
  }
  const d = [s, c];
  return W(e) && o.set(e, d), d;
}
function li(e) {
  return e[0] !== "$" && !jt(e) ? !0 : (a.NODE_ENV !== "production" && O(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function so(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function ci(e, t) {
  return so(e) === so(t);
}
function fi(e, t) {
  return T(t) ? t.findIndex((n) => ci(n, e)) : S(t) && ci(t, e) ? 0 : -1;
}
function br(e, t, n) {
  const o = F(t), i = n.propsOptions[0];
  for (const r in i) {
    let s = i[r];
    s != null && Ll(
      r,
      o[r],
      s,
      a.NODE_ENV !== "production" ? Ce(o) : o,
      !A(e, r) && !A(e, et(r))
    );
  }
}
function Ll(e, t, n, o, i) {
  const { type: r, required: s, validator: c, skipCheck: f } = n;
  if (s && i) {
    O('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !s)) {
    if (r != null && r !== !0 && !f) {
      let d = !1;
      const g = T(r) ? r : [r], p = [];
      for (let N = 0; N < g.length && !d; N++) {
        const { valid: V, expectedType: I } = Hl(t, g[N]);
        p.push(I || ""), d = V;
      }
      if (!d) {
        O(Ul(e, t, p));
        return;
      }
    }
    c && !c(t, o) && O('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const $l = /* @__PURE__ */ Le(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function Hl(e, t) {
  let n;
  const o = so(t);
  if ($l(o)) {
    const i = typeof e;
    n = i === o.toLowerCase(), !n && i === "object" && (n = e instanceof t);
  } else
    o === "Object" ? n = W(e) : o === "Array" ? n = T(e) : o === "null" ? n = e === null : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function Ul(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(wn).join(" | ")}`;
  const i = n[0], r = mo(t), s = ui(t, i), c = ui(t, r);
  return n.length === 1 && ai(i) && !kl(i, r) && (o += ` with value ${s}`), o += `, got ${r} `, ai(r) && (o += `with value ${c}.`), o;
}
function ui(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function ai(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function kl(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const yr = (e) => e[0] === "_" || e === "$stable", Fo = (e) => T(e) ? e.map(be) : [be(e)], Kl = (e, t, n) => {
  if (t._n)
    return t;
  const o = el((...i) => (a.NODE_ENV !== "production" && te && (!n || n.root === te.root) && O(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Fo(t(...i))), n);
  return o._c = !1, o;
}, vr = (e, t, n) => {
  const o = e._ctx;
  for (const i in e) {
    if (yr(i))
      continue;
    const r = e[i];
    if (S(r))
      t[i] = Kl(i, r, o);
    else if (r != null) {
      a.NODE_ENV !== "production" && O(
        `Non-function value encountered for slot "${i}". Prefer function slots for better performance.`
      );
      const s = Fo(r);
      t[i] = () => s;
    }
  }
}, Or = (e, t) => {
  a.NODE_ENV !== "production" && !Io(e.vnode) && O(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = Fo(t);
  e.slots.default = () => n;
}, Bl = (e, t) => {
  const n = e.slots = mr();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (Y(n, t), Ti(n, "_", o, !0)) : vr(t, n);
  } else
    t && Or(e, t);
}, Wl = (e, t, n) => {
  const { vnode: o, slots: i } = e;
  let r = !0, s = K;
  if (o.shapeFlag & 32) {
    const c = t._;
    c ? a.NODE_ENV !== "production" && at ? (Y(i, t), Te(e, "set", "$slots")) : n && c === 1 ? r = !1 : (Y(i, t), !n && c === 1 && delete i._) : (r = !t.$stable, vr(t, i)), s = t;
  } else
    t && (Or(e, t), s = { default: 1 });
  if (r)
    for (const c in i)
      !yr(c) && s[c] == null && delete i[c];
};
function lo(e, t, n, o, i = !1) {
  if (T(e)) {
    e.forEach(
      (N, V) => lo(
        N,
        t && (T(t) ? t[V] : t),
        n,
        o,
        i
      )
    );
    return;
  }
  if (fn(o) && !i)
    return;
  const r = o.shapeFlag & 4 ? In(o.component) || o.component.proxy : o.el, s = i ? null : r, { i: c, r: f } = e;
  if (a.NODE_ENV !== "production" && !c) {
    O(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const d = t && t.r, g = c.refs === K ? c.refs = {} : c.refs, p = c.setupState;
  if (d != null && d !== f && (Q(d) ? (g[d] = null, A(p, d) && (p[d] = null)) : re(d) && (d.value = null)), S(f))
    Fe(f, c, 12, [s, g]);
  else {
    const N = Q(f), V = re(f);
    if (N || V) {
      const I = () => {
        if (e.f) {
          const P = N ? A(p, f) ? p[f] : g[f] : f.value;
          i ? T(P) && ho(P, r) : T(P) ? P.includes(r) || P.push(r) : N ? (g[f] = [r], A(p, f) && (p[f] = g[f])) : (f.value = [r], e.k && (g[e.k] = f.value));
        } else
          N ? (g[f] = s, A(p, f) && (p[f] = s)) : V ? (f.value = s, e.k && (g[e.k] = s)) : a.NODE_ENV !== "production" && O("Invalid template ref type:", f, `(${typeof f})`);
      };
      s ? (I.id = -1, de(I, n)) : I();
    } else
      a.NODE_ENV !== "production" && O("Invalid template ref type:", f, `(${typeof f})`);
  }
}
let Rt, Xe;
function Ie(e, t) {
  e.appContext.config.performance && Nn() && Xe.mark(`vue-${t}-${e.uid}`), a.NODE_ENV !== "production" && Js(e, t, Nn() ? Xe.now() : Date.now());
}
function Pe(e, t) {
  if (e.appContext.config.performance && Nn()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end";
    Xe.mark(o), Xe.measure(
      `<${Pn(e, e.type)}> ${t}`,
      n,
      o
    ), Xe.clearMarks(n), Xe.clearMarks(o);
  }
  a.NODE_ENV !== "production" && Xs(e, t, Nn() ? Xe.now() : Date.now());
}
function Nn() {
  return Rt !== void 0 || (typeof window < "u" && window.performance ? (Rt = !0, Xe = window.performance) : Rt = !1), Rt;
}
function Gl() {
  const e = [];
  if (a.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const de = ll;
function ql(e) {
  return zl(e);
}
function zl(e, t) {
  Gl();
  const n = Eo();
  n.__VUE__ = !0, a.NODE_ENV !== "production" && tr(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: o,
    remove: i,
    patchProp: r,
    createElement: s,
    createText: c,
    createComment: f,
    setText: d,
    setElementText: g,
    parentNode: p,
    nextSibling: N,
    setScopeId: V = X,
    insertStaticContent: I
  } = e, P = (l, u, h, m = null, _ = null, y = null, w = void 0, b = null, v = a.NODE_ENV !== "production" && at ? !1 : !!u.dynamicChildren) => {
    if (l === u)
      return;
    l && !It(l, u) && (m = Qt(l), Be(l, _, y, !0), l = null), u.patchFlag === -2 && (v = !1, u.dynamicChildren = null);
    const { type: E, ref: x, shapeFlag: C } = u;
    switch (E) {
      case Yt:
        he(l, u, h, m);
        break;
      case pe:
        k(l, u, h, m);
        break;
      case dn:
        l == null ? B(u, h, m, w) : a.NODE_ENV !== "production" && q(l, u, h, w);
        break;
      case Ne:
        Xt(
          l,
          u,
          h,
          m,
          _,
          y,
          w,
          b,
          v
        );
        break;
      default:
        C & 1 ? ge(
          l,
          u,
          h,
          m,
          _,
          y,
          w,
          b,
          v
        ) : C & 6 ? Lo(
          l,
          u,
          h,
          m,
          _,
          y,
          w,
          b,
          v
        ) : C & 64 || C & 128 ? E.process(
          l,
          u,
          h,
          m,
          _,
          y,
          w,
          b,
          v,
          Tt
        ) : a.NODE_ENV !== "production" && O("Invalid VNode type:", E, `(${typeof E})`);
    }
    x != null && _ && lo(x, l && l.ref, y, u || l, !u);
  }, he = (l, u, h, m) => {
    if (l == null)
      o(
        u.el = c(u.children),
        h,
        m
      );
    else {
      const _ = u.el = l.el;
      u.children !== l.children && d(_, u.children);
    }
  }, k = (l, u, h, m) => {
    l == null ? o(
      u.el = f(u.children || ""),
      h,
      m
    ) : u.el = l.el;
  }, B = (l, u, h, m) => {
    [l.el, l.anchor] = I(
      l.children,
      u,
      h,
      m,
      l.el,
      l.anchor
    );
  }, q = (l, u, h, m) => {
    if (u.children !== l.children) {
      const _ = N(l.anchor);
      J(l), [u.el, u.anchor] = I(
        u.children,
        h,
        _,
        m
      );
    } else
      u.el = l.el, u.anchor = l.anchor;
  }, z = ({ el: l, anchor: u }, h, m) => {
    let _;
    for (; l && l !== u; )
      _ = N(l), o(l, h, m), l = _;
    o(u, h, m);
  }, J = ({ el: l, anchor: u }) => {
    let h;
    for (; l && l !== u; )
      h = N(l), i(l), l = h;
    i(u);
  }, ge = (l, u, h, m, _, y, w, b, v) => {
    u.type === "svg" ? w = "svg" : u.type === "math" && (w = "mathml"), l == null ? M(
      u,
      h,
      m,
      _,
      y,
      w,
      b,
      v
    ) : Se(
      l,
      u,
      _,
      y,
      w,
      b,
      v
    );
  }, M = (l, u, h, m, _, y, w, b) => {
    let v, E;
    const { props: x, shapeFlag: C, transition: D, dirs: R } = l;
    if (v = l.el = s(
      l.type,
      y,
      x && x.is,
      x
    ), C & 8 ? g(v, l.children) : C & 16 && le(
      l.children,
      v,
      null,
      m,
      _,
      kn(l, y),
      w,
      b
    ), R && ot(l, null, m, "created"), se(v, l, l.scopeId, w, m), x) {
      for (const U in x)
        U !== "value" && !jt(U) && r(
          v,
          U,
          null,
          x[U],
          y,
          l.children,
          m,
          _,
          Re
        );
      "value" in x && r(v, "value", null, x.value, y), (E = x.onVnodeBeforeMount) && xe(E, m, l);
    }
    a.NODE_ENV !== "production" && (Object.defineProperty(v, "__vnode", {
      value: l,
      enumerable: !1
    }), Object.defineProperty(v, "__vueParentComponent", {
      value: m,
      enumerable: !1
    })), R && ot(l, null, m, "beforeMount");
    const j = Yl(_, D);
    j && D.beforeEnter(v), o(v, u, h), ((E = x && x.onVnodeMounted) || j || R) && de(() => {
      E && xe(E, m, l), j && D.enter(v), R && ot(l, null, m, "mounted");
    }, _);
  }, se = (l, u, h, m, _) => {
    if (h && V(l, h), m)
      for (let y = 0; y < m.length; y++)
        V(l, m[y]);
    if (_) {
      let y = _.subTree;
      if (a.NODE_ENV !== "production" && y.patchFlag > 0 && y.patchFlag & 2048 && (y = Ro(y.children) || y), u === y) {
        const w = _.vnode;
        se(
          l,
          w,
          w.scopeId,
          w.slotScopeIds,
          _.parent
        );
      }
    }
  }, le = (l, u, h, m, _, y, w, b, v = 0) => {
    for (let E = v; E < l.length; E++) {
      const x = l[E] = b ? ze(l[E]) : be(l[E]);
      P(
        null,
        x,
        u,
        h,
        m,
        _,
        y,
        w,
        b
      );
    }
  }, Se = (l, u, h, m, _, y, w) => {
    const b = u.el = l.el;
    let { patchFlag: v, dynamicChildren: E, dirs: x } = u;
    v |= l.patchFlag & 16;
    const C = l.props || K, D = u.props || K;
    let R;
    if (h && it(h, !1), (R = D.onVnodeBeforeUpdate) && xe(R, h, u, l), x && ot(u, l, h, "beforeUpdate"), h && it(h, !0), a.NODE_ENV !== "production" && at && (v = 0, w = !1, E = null), E ? (ke(
      l.dynamicChildren,
      E,
      b,
      h,
      m,
      kn(u, _),
      y
    ), a.NODE_ENV !== "production" && an(l, u)) : w || Oe(
      l,
      u,
      b,
      null,
      h,
      m,
      kn(u, _),
      y,
      !1
    ), v > 0) {
      if (v & 16)
        me(
          b,
          u,
          C,
          D,
          h,
          m,
          _
        );
      else if (v & 2 && C.class !== D.class && r(b, "class", null, D.class, _), v & 4 && r(b, "style", C.style, D.style, _), v & 8) {
        const j = u.dynamicProps;
        for (let U = 0; U < j.length; U++) {
          const G = j[U], ee = C[G], _e = D[G];
          (_e !== ee || G === "value") && r(
            b,
            G,
            ee,
            _e,
            _,
            l.children,
            h,
            m,
            Re
          );
        }
      }
      v & 1 && l.children !== u.children && g(b, u.children);
    } else
      !w && E == null && me(
        b,
        u,
        C,
        D,
        h,
        m,
        _
      );
    ((R = D.onVnodeUpdated) || x) && de(() => {
      R && xe(R, h, u, l), x && ot(u, l, h, "updated");
    }, m);
  }, ke = (l, u, h, m, _, y, w) => {
    for (let b = 0; b < u.length; b++) {
      const v = l[b], E = u[b], x = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        v.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (v.type === Ne || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !It(v, E) || // - In the case of a component, it could contain anything.
        v.shapeFlag & 70) ? p(v.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          h
        )
      );
      P(
        v,
        E,
        x,
        null,
        m,
        _,
        y,
        w,
        !0
      );
    }
  }, me = (l, u, h, m, _, y, w) => {
    if (h !== m) {
      if (h !== K)
        for (const b in h)
          !jt(b) && !(b in m) && r(
            l,
            b,
            h[b],
            null,
            w,
            u.children,
            _,
            y,
            Re
          );
      for (const b in m) {
        if (jt(b))
          continue;
        const v = m[b], E = h[b];
        v !== E && b !== "value" && r(
          l,
          b,
          E,
          v,
          w,
          u.children,
          _,
          y,
          Re
        );
      }
      "value" in m && r(l, "value", h.value, m.value, w);
    }
  }, Xt = (l, u, h, m, _, y, w, b, v) => {
    const E = u.el = l ? l.el : c(""), x = u.anchor = l ? l.anchor : c("");
    let { patchFlag: C, dynamicChildren: D, slotScopeIds: R } = u;
    a.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (at || C & 2048) && (C = 0, v = !1, D = null), R && (b = b ? b.concat(R) : R), l == null ? (o(E, h, m), o(x, h, m), le(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      u.children || [],
      h,
      x,
      _,
      y,
      w,
      b,
      v
    )) : C > 0 && C & 64 && D && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    l.dynamicChildren ? (ke(
      l.dynamicChildren,
      D,
      h,
      _,
      y,
      w,
      b
    ), a.NODE_ENV !== "production" ? an(l, u) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (u.key != null || _ && u === _.subTree) && an(
        l,
        u,
        !0
        /* shallow */
      )
    )) : Oe(
      l,
      u,
      h,
      x,
      _,
      y,
      w,
      b,
      v
    );
  }, Lo = (l, u, h, m, _, y, w, b, v) => {
    u.slotScopeIds = b, l == null ? u.shapeFlag & 512 ? _.ctx.activate(
      u,
      h,
      m,
      w,
      v
    ) : Ke(
      u,
      h,
      m,
      _,
      y,
      w,
      v
    ) : ue(l, u, v);
  }, Ke = (l, u, h, m, _, y, w) => {
    const b = l.component = rc(
      l,
      m,
      _
    );
    if (a.NODE_ENV !== "production" && b.type.__hmrId && Us(b), a.NODE_ENV !== "production" && (ln(l), Ie(b, "mount")), Io(l) && (b.ctx.renderer = Tt), a.NODE_ENV !== "production" && Ie(b, "init"), cc(b), a.NODE_ENV !== "production" && Pe(b, "init"), b.asyncDep) {
      if (_ && _.registerDep(b, $), !l.el) {
        const v = b.subTree = Ae(pe);
        k(null, v, u, h);
      }
    } else
      $(
        b,
        l,
        u,
        h,
        _,
        y,
        w
      );
    a.NODE_ENV !== "production" && (cn(), Pe(b, "mount"));
  }, ue = (l, u, h) => {
    const m = u.component = l.component;
    if (ol(l, u, h))
      if (m.asyncDep && !m.asyncResolved) {
        a.NODE_ENV !== "production" && ln(u), L(m, u, h), a.NODE_ENV !== "production" && cn();
        return;
      } else
        m.next = u, $s(m.update), m.effect.dirty = !0, m.update();
    else
      u.el = l.el, m.vnode = u;
  }, $ = (l, u, h, m, _, y, w) => {
    const b = () => {
      if (l.isMounted) {
        let { next: x, bu: C, u: D, parent: R, vnode: j } = l;
        {
          const mt = wr(l);
          if (mt) {
            x && (x.el = j.el, L(l, x, w)), mt.asyncDep.then(() => {
              l.isUnmounted || b();
            });
            return;
          }
        }
        let U = x, G;
        a.NODE_ENV !== "production" && ln(x || l.vnode), it(l, !1), x ? (x.el = j.el, L(l, x, w)) : x = j, C && _t(C), (G = x.props && x.props.onVnodeBeforeUpdate) && xe(G, R, x, j), it(l, !0), a.NODE_ENV !== "production" && Ie(l, "render");
        const ee = $n(l);
        a.NODE_ENV !== "production" && Pe(l, "render");
        const _e = l.subTree;
        l.subTree = ee, a.NODE_ENV !== "production" && Ie(l, "patch"), P(
          _e,
          ee,
          // parent may have changed if it's in a teleport
          p(_e.el),
          // anchor may have changed if it's in a fragment
          Qt(_e),
          l,
          _,
          y
        ), a.NODE_ENV !== "production" && Pe(l, "patch"), x.el = ee.el, U === null && il(l, ee.el), D && de(D, _), (G = x.props && x.props.onVnodeUpdated) && de(
          () => xe(G, R, x, j),
          _
        ), a.NODE_ENV !== "production" && nr(l), a.NODE_ENV !== "production" && cn();
      } else {
        let x;
        const { el: C, props: D } = u, { bm: R, m: j, parent: U } = l, G = fn(u);
        if (it(l, !1), R && _t(R), !G && (x = D && D.onVnodeBeforeMount) && xe(x, U, u), it(l, !0), C && Uo) {
          const ee = () => {
            a.NODE_ENV !== "production" && Ie(l, "render"), l.subTree = $n(l), a.NODE_ENV !== "production" && Pe(l, "render"), a.NODE_ENV !== "production" && Ie(l, "hydrate"), Uo(
              C,
              l.subTree,
              l,
              _,
              null
            ), a.NODE_ENV !== "production" && Pe(l, "hydrate");
          };
          G ? u.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !l.isUnmounted && ee()
          ) : ee();
        } else {
          a.NODE_ENV !== "production" && Ie(l, "render");
          const ee = l.subTree = $n(l);
          a.NODE_ENV !== "production" && Pe(l, "render"), a.NODE_ENV !== "production" && Ie(l, "patch"), P(
            null,
            ee,
            h,
            m,
            l,
            _,
            y
          ), a.NODE_ENV !== "production" && Pe(l, "patch"), u.el = ee.el;
        }
        if (j && de(j, _), !G && (x = D && D.onVnodeMounted)) {
          const ee = u;
          de(
            () => xe(x, U, ee),
            _
          );
        }
        (u.shapeFlag & 256 || U && fn(U.vnode) && U.vnode.shapeFlag & 256) && l.a && de(l.a, _), l.isMounted = !0, a.NODE_ENV !== "production" && qs(l), u = h = m = null;
      }
    }, v = l.effect = new bo(
      b,
      X,
      () => Cn(E),
      l.scope
      // track it in component's effect scope
    ), E = l.update = () => {
      v.dirty && v.run();
    };
    E.id = l.uid, it(l, !0), a.NODE_ENV !== "production" && (v.onTrack = l.rtc ? (x) => _t(l.rtc, x) : void 0, v.onTrigger = l.rtg ? (x) => _t(l.rtg, x) : void 0, E.ownerInstance = l), E();
  }, L = (l, u, h) => {
    u.component = l;
    const m = l.vnode.props;
    l.vnode = u, l.next = null, jl(l, u.props, m, h), Wl(l, u.children, h), $e(), Zo(l), He();
  }, Oe = (l, u, h, m, _, y, w, b, v = !1) => {
    const E = l && l.children, x = l ? l.shapeFlag : 0, C = u.children, { patchFlag: D, shapeFlag: R } = u;
    if (D > 0) {
      if (D & 128) {
        Ct(
          E,
          C,
          h,
          m,
          _,
          y,
          w,
          b,
          v
        );
        return;
      } else if (D & 256) {
        Mn(
          E,
          C,
          h,
          m,
          _,
          y,
          w,
          b,
          v
        );
        return;
      }
    }
    R & 8 ? (x & 16 && Re(E, _, y), C !== E && g(h, C)) : x & 16 ? R & 16 ? Ct(
      E,
      C,
      h,
      m,
      _,
      y,
      w,
      b,
      v
    ) : Re(E, _, y, !0) : (x & 8 && g(h, ""), R & 16 && le(
      C,
      h,
      m,
      _,
      y,
      w,
      b,
      v
    ));
  }, Mn = (l, u, h, m, _, y, w, b, v) => {
    l = l || yt, u = u || yt;
    const E = l.length, x = u.length, C = Math.min(E, x);
    let D;
    for (D = 0; D < C; D++) {
      const R = u[D] = v ? ze(u[D]) : be(u[D]);
      P(
        l[D],
        R,
        h,
        null,
        _,
        y,
        w,
        b,
        v
      );
    }
    E > x ? Re(
      l,
      _,
      y,
      !0,
      !1,
      C
    ) : le(
      u,
      h,
      m,
      _,
      y,
      w,
      b,
      v,
      C
    );
  }, Ct = (l, u, h, m, _, y, w, b, v) => {
    let E = 0;
    const x = u.length;
    let C = l.length - 1, D = x - 1;
    for (; E <= C && E <= D; ) {
      const R = l[E], j = u[E] = v ? ze(u[E]) : be(u[E]);
      if (It(R, j))
        P(
          R,
          j,
          h,
          null,
          _,
          y,
          w,
          b,
          v
        );
      else
        break;
      E++;
    }
    for (; E <= C && E <= D; ) {
      const R = l[C], j = u[D] = v ? ze(u[D]) : be(u[D]);
      if (It(R, j))
        P(
          R,
          j,
          h,
          null,
          _,
          y,
          w,
          b,
          v
        );
      else
        break;
      C--, D--;
    }
    if (E > C) {
      if (E <= D) {
        const R = D + 1, j = R < x ? u[R].el : m;
        for (; E <= D; )
          P(
            null,
            u[E] = v ? ze(u[E]) : be(u[E]),
            h,
            j,
            _,
            y,
            w,
            b,
            v
          ), E++;
      }
    } else if (E > D)
      for (; E <= C; )
        Be(l[E], _, y, !0), E++;
    else {
      const R = E, j = E, U = /* @__PURE__ */ new Map();
      for (E = j; E <= D; E++) {
        const ce = u[E] = v ? ze(u[E]) : be(u[E]);
        ce.key != null && (a.NODE_ENV !== "production" && U.has(ce.key) && O(
          "Duplicate keys found during update:",
          JSON.stringify(ce.key),
          "Make sure keys are unique."
        ), U.set(ce.key, E));
      }
      let G, ee = 0;
      const _e = D - j + 1;
      let mt = !1, ko = 0;
      const St = new Array(_e);
      for (E = 0; E < _e; E++)
        St[E] = 0;
      for (E = R; E <= C; E++) {
        const ce = l[E];
        if (ee >= _e) {
          Be(ce, _, y, !0);
          continue;
        }
        let we;
        if (ce.key != null)
          we = U.get(ce.key);
        else
          for (G = j; G <= D; G++)
            if (St[G - j] === 0 && It(ce, u[G])) {
              we = G;
              break;
            }
        we === void 0 ? Be(ce, _, y, !0) : (St[we - j] = E + 1, we >= ko ? ko = we : mt = !0, P(
          ce,
          u[we],
          h,
          null,
          _,
          y,
          w,
          b,
          v
        ), ee++);
      }
      const Ko = mt ? Jl(St) : yt;
      for (G = Ko.length - 1, E = _e - 1; E >= 0; E--) {
        const ce = j + E, we = u[ce], Bo = ce + 1 < x ? u[ce + 1].el : m;
        St[E] === 0 ? P(
          null,
          we,
          h,
          Bo,
          _,
          y,
          w,
          b,
          v
        ) : mt && (G < 0 || E !== Ko[G] ? gt(we, h, Bo, 2) : G--);
      }
    }
  }, gt = (l, u, h, m, _ = null) => {
    const { el: y, type: w, transition: b, children: v, shapeFlag: E } = l;
    if (E & 6) {
      gt(l.component.subTree, u, h, m);
      return;
    }
    if (E & 128) {
      l.suspense.move(u, h, m);
      return;
    }
    if (E & 64) {
      w.move(l, u, h, Tt);
      return;
    }
    if (w === Ne) {
      o(y, u, h);
      for (let C = 0; C < v.length; C++)
        gt(v[C], u, h, m);
      o(l.anchor, u, h);
      return;
    }
    if (w === dn) {
      z(l, u, h);
      return;
    }
    if (m !== 2 && E & 1 && b)
      if (m === 0)
        b.beforeEnter(y), o(y, u, h), de(() => b.enter(y), _);
      else {
        const { leave: C, delayLeave: D, afterLeave: R } = b, j = () => o(y, u, h), U = () => {
          C(y, () => {
            j(), R && R();
          });
        };
        D ? D(y, j, U) : U();
      }
    else
      o(y, u, h);
  }, Be = (l, u, h, m = !1, _ = !1) => {
    const {
      type: y,
      props: w,
      ref: b,
      children: v,
      dynamicChildren: E,
      shapeFlag: x,
      patchFlag: C,
      dirs: D
    } = l;
    if (b != null && lo(b, null, h, l, !0), x & 256) {
      u.ctx.deactivate(l);
      return;
    }
    const R = x & 1 && D, j = !fn(l);
    let U;
    if (j && (U = w && w.onVnodeBeforeUnmount) && xe(U, u, l), x & 6)
      Fr(l.component, h, m);
    else {
      if (x & 128) {
        l.suspense.unmount(h, m);
        return;
      }
      R && ot(l, null, u, "beforeUnmount"), x & 64 ? l.type.remove(
        l,
        u,
        h,
        _,
        Tt,
        m
      ) : E && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (y !== Ne || C > 0 && C & 64) ? Re(
        E,
        u,
        h,
        !1,
        !0
      ) : (y === Ne && C & 384 || !_ && x & 16) && Re(v, u, h), m && Fn(l);
    }
    (j && (U = w && w.onVnodeUnmounted) || R) && de(() => {
      U && xe(U, u, l), R && ot(l, null, u, "unmounted");
    }, h);
  }, Fn = (l) => {
    const { type: u, el: h, anchor: m, transition: _ } = l;
    if (u === Ne) {
      a.NODE_ENV !== "production" && l.patchFlag > 0 && l.patchFlag & 2048 && _ && !_.persisted ? l.children.forEach((w) => {
        w.type === pe ? i(w.el) : Fn(w);
      }) : Mr(h, m);
      return;
    }
    if (u === dn) {
      J(l);
      return;
    }
    const y = () => {
      i(h), _ && !_.persisted && _.afterLeave && _.afterLeave();
    };
    if (l.shapeFlag & 1 && _ && !_.persisted) {
      const { leave: w, delayLeave: b } = _, v = () => w(h, y);
      b ? b(l.el, y, v) : v();
    } else
      y();
  }, Mr = (l, u) => {
    let h;
    for (; l !== u; )
      h = N(l), i(l), l = h;
    i(u);
  }, Fr = (l, u, h) => {
    a.NODE_ENV !== "production" && l.type.__hmrId && ks(l);
    const { bum: m, scope: _, update: y, subTree: w, um: b } = l;
    m && _t(m), _.stop(), y && (y.active = !1, Be(w, l, u, h)), b && de(b, u), de(() => {
      l.isUnmounted = !0;
    }, u), u && u.pendingBranch && !u.isUnmounted && l.asyncDep && !l.asyncResolved && l.suspenseId === u.pendingId && (u.deps--, u.deps === 0 && u.resolve()), a.NODE_ENV !== "production" && Ys(l);
  }, Re = (l, u, h, m = !1, _ = !1, y = 0) => {
    for (let w = y; w < l.length; w++)
      Be(l[w], u, h, m, _);
  }, Qt = (l) => l.shapeFlag & 6 ? Qt(l.component.subTree) : l.shapeFlag & 128 ? l.suspense.next() : N(l.anchor || l.el);
  let An = !1;
  const $o = (l, u, h) => {
    l == null ? u._vnode && Be(u._vnode, null, null, !0) : P(
      u._vnode || null,
      l,
      u,
      null,
      null,
      null,
      h
    ), An || (An = !0, Zo(), Qi(), An = !1), u._vnode = l;
  }, Tt = {
    p: P,
    um: Be,
    m: gt,
    r: Fn,
    mt: Ke,
    mc: le,
    pc: Oe,
    pbc: ke,
    n: Qt,
    o: e
  };
  let Ho, Uo;
  return {
    render: $o,
    hydrate: Ho,
    createApp: Pl($o, Ho)
  };
}
function kn({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function it({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function Yl(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function an(e, t, n = !1) {
  const o = e.children, i = t.children;
  if (T(o) && T(i))
    for (let r = 0; r < o.length; r++) {
      const s = o[r];
      let c = i[r];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = i[r] = ze(i[r]), c.el = s.el), n || an(s, c)), c.type === Yt && (c.el = s.el), a.NODE_ENV !== "production" && c.type === pe && !c.el && (c.el = s.el);
    }
}
function Jl(e) {
  const t = e.slice(), n = [0];
  let o, i, r, s, c;
  const f = e.length;
  for (o = 0; o < f; o++) {
    const d = e[o];
    if (d !== 0) {
      if (i = n[n.length - 1], e[i] < d) {
        t[o] = i, n.push(o);
        continue;
      }
      for (r = 0, s = n.length - 1; r < s; )
        c = r + s >> 1, e[n[c]] < d ? r = c + 1 : s = c;
      d < e[n[r]] && (r > 0 && (t[o] = n[r - 1]), n[r] = o);
    }
  }
  for (r = n.length, s = n[r - 1]; r-- > 0; )
    n[r] = s, s = t[s];
  return n;
}
function wr(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : wr(t);
}
const Xl = (e) => e.__isTeleport, Ne = Symbol.for("v-fgt"), Yt = Symbol.for("v-txt"), pe = Symbol.for("v-cmt"), dn = Symbol.for("v-stc"), Ht = [];
let ye = null;
function At(e = !1) {
  Ht.push(ye = e ? null : []);
}
function Ql() {
  Ht.pop(), ye = Ht[Ht.length - 1] || null;
}
let Bt = 1;
function di(e) {
  Bt += e;
}
function xr(e) {
  return e.dynamicChildren = Bt > 0 ? ye || yt : null, Ql(), Bt > 0 && ye && ye.push(e), e;
}
function sn(e, t, n, o, i, r) {
  return xr(
    H(
      e,
      t,
      n,
      o,
      i,
      r,
      !0
    )
  );
}
function Zl(e, t, n, o, i) {
  return xr(
    Ae(
      e,
      t,
      n,
      o,
      i,
      !0
    )
  );
}
function Ao(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function It(e, t) {
  return a.NODE_ENV !== "production" && t.shapeFlag & 6 && Et.has(t.type) ? (e.shapeFlag &= -257, t.shapeFlag &= -513, !1) : e.type === t.type && e.key === t.key;
}
const ec = (...e) => Dr(
  ...e
), Vr = ({ key: e }) => e ?? null, pn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Q(e) || re(e) || S(e) ? { i: ie, r: e, k: t, f: !!n } : e : null);
function H(e, t = null, n = null, o = 0, i = null, r = e === Ne ? 0 : 1, s = !1, c = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Vr(t),
    ref: t && pn(t),
    scopeId: rr,
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
    shapeFlag: r,
    patchFlag: o,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: ie
  };
  return c ? (jo(f, n), r & 128 && e.normalize(f)) : n && (f.shapeFlag |= Q(n) ? 8 : 16), a.NODE_ENV !== "production" && f.key !== f.key && O("VNode created with invalid key (NaN). VNode type:", f.type), Bt > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  ye && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (f.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  f.patchFlag !== 32 && ye.push(f), f;
}
const Ae = a.NODE_ENV !== "production" ? ec : Dr;
function Dr(e, t = null, n = null, o = 0, i = null, r = !1) {
  if ((!e || e === rl) && (a.NODE_ENV !== "production" && !e && O(`Invalid vnode type when creating vnode: ${e}.`), e = pe), Ao(e)) {
    const c = nt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && jo(c, n), Bt > 0 && !r && ye && (c.shapeFlag & 6 ? ye[ye.indexOf(e)] = c : ye.push(c)), c.patchFlag |= -2, c;
  }
  if (Ir(e) && (e = e.__vccOpts), t) {
    t = tc(t);
    let { class: c, style: f } = t;
    c && !Q(c) && (t.class = No(c)), W(f) && (Qn(f) && !T(f) && (f = Y({}, f)), t.style = Je(f));
  }
  const s = Q(e) ? 1 : sl(e) ? 128 : Xl(e) ? 64 : W(e) ? 4 : S(e) ? 2 : 0;
  return a.NODE_ENV !== "production" && s & 4 && Qn(e) && (e = F(e), O(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), H(
    e,
    t,
    n,
    o,
    i,
    s,
    r,
    !0
  );
}
function tc(e) {
  return e ? Qn(e) || _r(e) ? Y({}, e) : e : null;
}
function nt(e, t, n = !1, o = !1) {
  const { props: i, ref: r, patchFlag: s, children: c, transition: f } = e, d = t ? nc(i || {}, t) : i, g = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && Vr(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? T(r) ? r.concat(pn(t)) : [r, pn(t)] : pn(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: a.NODE_ENV !== "production" && s === -1 && T(c) ? c.map(Cr) : c,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Ne ? s === -1 ? 16 : s | 16 : s,
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
    ssContent: e.ssContent && nt(e.ssContent),
    ssFallback: e.ssFallback && nt(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return f && o && (g.transition = f.clone(g)), g;
}
function Cr(e) {
  const t = nt(e);
  return T(e.children) && (t.children = e.children.map(Cr)), t;
}
function co(e = " ", t = 0) {
  return Ae(Yt, null, e, t);
}
function Kn(e = "", t = !1) {
  return t ? (At(), Zl(pe, null, e)) : Ae(pe, null, e);
}
function be(e) {
  return e == null || typeof e == "boolean" ? Ae(pe) : T(e) ? Ae(
    Ne,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? ze(e) : Ae(Yt, null, String(e));
}
function ze(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : nt(e);
}
function jo(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (T(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), jo(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !_r(t) ? t._ctx = ie : i === 3 && ie && (ie.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    S(t) ? (t = { default: t, _ctx: ie }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [co(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function nc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const i in o)
      if (i === "class")
        t.class !== o.class && (t.class = No([t.class, o.class]));
      else if (i === "style")
        t.style = Je([t.style, o.style]);
      else if (Wt(i)) {
        const r = t[i], s = o[i];
        s && r !== s && !(T(r) && r.includes(s)) && (t[i] = r ? [].concat(r, s) : s);
      } else
        i !== "" && (t[i] = o[i]);
  }
  return t;
}
function xe(e, t, n, o = null) {
  ve(e, t, 7, [
    n,
    o
  ]);
}
const oc = hr();
let ic = 0;
function rc(e, t, n) {
  const o = e.type, i = (t ? t.appContext : e.appContext) || oc, r = {
    uid: ic++,
    vnode: e,
    type: o,
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
    scope: new ns(
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
    propsOptions: Nr(o, i),
    emitsOptions: ir(o, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: K,
    // inheritAttrs
    inheritAttrs: o.inheritAttrs,
    // state
    ctx: K,
    data: K,
    props: K,
    attrs: K,
    slots: K,
    refs: K,
    setupState: K,
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
  return a.NODE_ENV !== "production" ? r.ctx = Ol(r) : r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = Zs.bind(null, r), e.ce && e.ce(r), r;
}
let te = null;
const sc = () => te || ie;
let bn, fo;
{
  const e = Eo(), t = (n, o) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(o), (r) => {
      i.length > 1 ? i.forEach((s) => s(r)) : i[0](r);
    };
  };
  bn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => te = n
  ), fo = t(
    "__VUE_SSR_SETTERS__",
    (n) => Rn = n
  );
}
const Jt = (e) => {
  const t = te;
  return bn(e), e.scope.on(), () => {
    e.scope.off(), bn(t);
  };
}, pi = () => {
  te && te.scope.off(), bn(null);
}, lc = /* @__PURE__ */ Le("slot,component");
function uo(e, { isNativeTag: t }) {
  (lc(e) || t(e)) && O(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function Tr(e) {
  return e.vnode.shapeFlag & 4;
}
let Rn = !1;
function cc(e, t = !1) {
  t && fo(t);
  const { props: n, children: o } = e.vnode, i = Tr(e);
  Fl(e, n, i, t), Bl(e, o);
  const r = i ? fc(e, t) : void 0;
  return t && fo(!1), r;
}
function fc(e, t) {
  var n;
  const o = e.type;
  if (a.NODE_ENV !== "production") {
    if (o.name && uo(o.name, e.appContext.config), o.components) {
      const r = Object.keys(o.components);
      for (let s = 0; s < r.length; s++)
        uo(r[s], e.appContext.config);
    }
    if (o.directives) {
      const r = Object.keys(o.directives);
      for (let s = 0; s < r.length; s++)
        fr(r[s]);
    }
    o.compilerOptions && uc() && O(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, dr), a.NODE_ENV !== "production" && wl(e);
  const { setup: i } = o;
  if (i) {
    const r = e.setupContext = i.length > 1 ? dc(e) : null, s = Jt(e);
    $e();
    const c = Fe(
      i,
      e,
      0,
      [
        a.NODE_ENV !== "production" ? Ce(e.props) : e.props,
        r
      ]
    );
    if (He(), s(), go(c)) {
      if (c.then(pi, pi), t)
        return c.then((f) => {
          hi(e, f, t);
        }).catch((f) => {
          qt(f, e, 0);
        });
      if (e.asyncDep = c, a.NODE_ENV !== "production" && !e.suspense) {
        const f = (n = o.name) != null ? n : "Anonymous";
        O(
          `Component <${f}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      hi(e, c, t);
  } else
    Sr(e, t);
}
function hi(e, t, n) {
  S(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : W(t) ? (a.NODE_ENV !== "production" && Ao(t) && O(
    "setup() should not return VNodes directly - return a render function instead."
  ), a.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = qi(t), a.NODE_ENV !== "production" && xl(e)) : a.NODE_ENV !== "production" && t !== void 0 && O(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), Sr(e, n);
}
let ao;
const uc = () => !ao;
function Sr(e, t, n) {
  const o = e.type;
  if (!e.render) {
    if (!t && ao && !o.render) {
      const i = o.template || Mo(e).template;
      if (i) {
        a.NODE_ENV !== "production" && Ie(e, "compile");
        const { isCustomElement: r, compilerOptions: s } = e.appContext.config, { delimiters: c, compilerOptions: f } = o, d = Y(
          Y(
            {
              isCustomElement: r,
              delimiters: c
            },
            s
          ),
          f
        );
        o.render = ao(i, d), a.NODE_ENV !== "production" && Pe(e, "compile");
      }
    }
    e.render = o.render || X;
  }
  {
    const i = Jt(e);
    $e();
    try {
      Dl(e);
    } finally {
      He(), i();
    }
  }
  a.NODE_ENV !== "production" && !o.render && e.render === X && !t && (o.template ? O(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : O("Component is missing template or render function."));
}
const gi = a.NODE_ENV !== "production" ? {
  get(e, t) {
    return _n(), ne(e, "get", ""), e[t];
  },
  set() {
    return O("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return O("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return ne(e, "get", ""), e[t];
  }
};
function ac(e) {
  return e.slotsProxy || (e.slotsProxy = new Proxy(e.slots, {
    get(t, n) {
      return ne(e, "get", "$slots"), t[n];
    }
  }));
}
function dc(e) {
  const t = (n) => {
    if (a.NODE_ENV !== "production" && (e.exposed && O("expose() should be called only once per setup()."), n != null)) {
      let o = typeof n;
      o === "object" && (T(n) ? o = "array" : re(n) && (o = "ref")), o !== "object" && O(
        `expose() should be passed a plain object, received ${o}.`
      );
    }
    e.exposed = n || {};
  };
  if (a.NODE_ENV !== "production") {
    let n;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, gi));
      },
      get slots() {
        return ac(e);
      },
      get emit() {
        return (o, ...i) => e.emit(o, ...i);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, gi),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function In(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(qi(xs(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in dt)
          return dt[n](e);
      },
      has(t, n) {
        return n in t || n in dt;
      }
    }));
}
const pc = /(?:^|[-_])(\w)/g, hc = (e) => e.replace(pc, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Rr(e, t = !0) {
  return S(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Pn(e, t, n = !1) {
  let o = Rr(t);
  if (!o && t.__file) {
    const i = t.__file.match(/([^/\\]+)\.\w+$/);
    i && (o = i[1]);
  }
  if (!o && e && e.parent) {
    const i = (r) => {
      for (const s in r)
        if (r[s] === t)
          return s;
    };
    o = i(
      e.components || e.parent.type.components
    ) || i(e.appContext.components);
  }
  return o ? hc(o) : n ? "App" : "Anonymous";
}
function Ir(e) {
  return S(e) && "__vccOpts" in e;
}
const gc = (e, t) => {
  const n = Ds(e, t, Rn);
  if (a.NODE_ENV !== "production") {
    const o = sc();
    o && o.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function mc() {
  if (a.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, o = { style: "color:#eb2f96" }, i = {
    header(p) {
      return W(p) ? p.__isVue ? ["div", e, "VueInstance"] : re(p) ? [
        "div",
        {},
        ["span", e, g(p)],
        "<",
        c(p.value),
        ">"
      ] : Ot(p) ? [
        "div",
        {},
        ["span", e, wt(p) ? "ShallowReactive" : "Reactive"],
        "<",
        c(p),
        `>${Dt(p) ? " (readonly)" : ""}`
      ] : Dt(p) ? [
        "div",
        {},
        ["span", e, wt(p) ? "ShallowReadonly" : "Readonly"],
        "<",
        c(p),
        ">"
      ] : null : null;
    },
    hasBody(p) {
      return p && p.__isVue;
    },
    body(p) {
      if (p && p.__isVue)
        return [
          "div",
          {},
          ...r(p.$)
        ];
    }
  };
  function r(p) {
    const N = [];
    p.type.props && p.props && N.push(s("props", F(p.props))), p.setupState !== K && N.push(s("setup", p.setupState)), p.data !== K && N.push(s("data", F(p.data)));
    const V = f(p, "computed");
    V && N.push(s("computed", V));
    const I = f(p, "inject");
    return I && N.push(s("injected", I)), N.push([
      "div",
      {},
      [
        "span",
        {
          style: o.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: p }]
    ]), N;
  }
  function s(p, N) {
    return N = Y({}, N), Object.keys(N).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        p
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(N).map((V) => [
          "div",
          {},
          ["span", o, V + ": "],
          c(N[V], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function c(p, N = !0) {
    return typeof p == "number" ? ["span", t, p] : typeof p == "string" ? ["span", n, JSON.stringify(p)] : typeof p == "boolean" ? ["span", o, p] : W(p) ? ["object", { object: N ? F(p) : p }] : ["span", n, String(p)];
  }
  function f(p, N) {
    const V = p.type;
    if (S(V))
      return;
    const I = {};
    for (const P in p.ctx)
      d(V, P, N) && (I[P] = p.ctx[P]);
    return I;
  }
  function d(p, N, V) {
    const I = p[V];
    if (T(I) && I.includes(N) || W(I) && N in I || p.extends && d(p.extends, N, V) || p.mixins && p.mixins.some((P) => d(P, N, V)))
      return !0;
  }
  function g(p) {
    return wt(p) ? "ShallowRef" : p.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(i) : window.devtoolsFormatters = [i];
}
const mi = "3.4.27", Ze = a.NODE_ENV !== "production" ? O : X;
var je = {};
const _c = "http://www.w3.org/2000/svg", Ec = "http://www.w3.org/1998/Math/MathML", Ye = typeof document < "u" ? document : null, _i = Ye && /* @__PURE__ */ Ye.createElement("template"), Nc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const i = t === "svg" ? Ye.createElementNS(_c, e) : t === "mathml" ? Ye.createElementNS(Ec, e) : Ye.createElement(e, n ? { is: n } : void 0);
    return e === "select" && o && o.multiple != null && i.setAttribute("multiple", o.multiple), i;
  },
  createText: (e) => Ye.createTextNode(e),
  createComment: (e) => Ye.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Ye.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, o, i, r) {
    const s = n ? n.previousSibling : t.lastChild;
    if (i && (i === r || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), n), !(i === r || !(i = i.nextSibling)); )
        ;
    else {
      _i.innerHTML = o === "svg" ? `<svg>${e}</svg>` : o === "mathml" ? `<math>${e}</math>` : e;
      const c = _i.content;
      if (o === "svg" || o === "mathml") {
        const f = c.firstChild;
        for (; f.firstChild; )
          c.appendChild(f.firstChild);
        c.removeChild(f);
      }
      t.insertBefore(c, n);
    }
    return [
      // first
      s ? s.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, bc = Symbol("_vtc");
function yc(e, t, n) {
  const o = e[bc];
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const yn = Symbol("_vod"), Pr = Symbol("_vsh"), Ge = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[yn] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Pt(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: o }) {
    !t != !n && (o ? t ? (o.beforeEnter(e), Pt(e, !0), o.enter(e)) : o.leave(e, () => {
      Pt(e, !1);
    }) : Pt(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Pt(e, t);
  }
};
je.NODE_ENV !== "production" && (Ge.name = "show");
function Pt(e, t) {
  e.style.display = t ? e[yn] : "none", e[Pr] = !t;
}
const vc = Symbol(je.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), Oc = /(^|;)\s*display\s*:/;
function wc(e, t, n) {
  const o = e.style, i = Q(n);
  let r = !1;
  if (n && !i) {
    if (t)
      if (Q(t))
        for (const s of t.split(";")) {
          const c = s.slice(0, s.indexOf(":")).trim();
          n[c] == null && hn(o, c, "");
        }
      else
        for (const s in t)
          n[s] == null && hn(o, s, "");
    for (const s in n)
      s === "display" && (r = !0), hn(o, s, n[s]);
  } else if (i) {
    if (t !== n) {
      const s = o[vc];
      s && (n += ";" + s), o.cssText = n, r = Oc.test(n);
    }
  } else
    t && e.removeAttribute("style");
  yn in e && (e[yn] = r ? o.display : "", e[Pr] && (o.display = "none"));
}
const xc = /[^\\];\s*$/, Ei = /\s*!important$/;
function hn(e, t, n) {
  if (T(n))
    n.forEach((o) => hn(e, t, o));
  else if (n == null && (n = ""), je.NODE_ENV !== "production" && xc.test(n) && Ze(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = Vc(e, t);
    Ei.test(n) ? e.setProperty(
      et(o),
      n.replace(Ei, ""),
      "important"
    ) : e[o] = n;
  }
}
const Ni = ["Webkit", "Moz", "ms"], Bn = {};
function Vc(e, t) {
  const n = Bn[t];
  if (n)
    return n;
  let o = Vt(t);
  if (o !== "filter" && o in e)
    return Bn[t] = o;
  o = wn(o);
  for (let i = 0; i < Ni.length; i++) {
    const r = Ni[i] + o;
    if (r in e)
      return Bn[t] = r;
  }
  return t;
}
const bi = "http://www.w3.org/1999/xlink";
function Dc(e, t, n, o, i) {
  if (o && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(bi, t.slice(6, t.length)) : e.setAttributeNS(bi, t, n);
  else {
    const r = ts(t);
    n == null || r && !Si(n) ? e.removeAttribute(t) : e.setAttribute(t, r ? "" : n);
  }
}
function Cc(e, t, n, o, i, r, s) {
  if (t === "innerHTML" || t === "textContent") {
    o && s(o, i, r), e[t] = n ?? "";
    return;
  }
  const c = e.tagName;
  if (t === "value" && c !== "PROGRESS" && // custom elements may use _value internally
  !c.includes("-")) {
    const d = c === "OPTION" ? e.getAttribute("value") || "" : e.value, g = n ?? "";
    (d !== g || !("_value" in e)) && (e.value = g), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let f = !1;
  if (n === "" || n == null) {
    const d = typeof e[t];
    d === "boolean" ? n = Si(n) : n == null && d === "string" ? (n = "", f = !0) : d === "number" && (n = 0, f = !0);
  }
  try {
    e[t] = n;
  } catch (d) {
    je.NODE_ENV !== "production" && !f && Ze(
      `Failed setting prop "${t}" on <${c.toLowerCase()}>: value ${n} is invalid.`,
      d
    );
  }
  f && e.removeAttribute(t);
}
function Nt(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function Tc(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
const yi = Symbol("_vei");
function Sc(e, t, n, o, i = null) {
  const r = e[yi] || (e[yi] = {}), s = r[t];
  if (o && s)
    s.value = je.NODE_ENV !== "production" ? Oi(o, t) : o;
  else {
    const [c, f] = Rc(t);
    if (o) {
      const d = r[t] = Mc(
        je.NODE_ENV !== "production" ? Oi(o, t) : o,
        i
      );
      Nt(e, c, d, f);
    } else
      s && (Tc(e, c, s, f), r[t] = void 0);
  }
}
const vi = /(?:Once|Passive|Capture)$/;
function Rc(e) {
  let t;
  if (vi.test(e)) {
    t = {};
    let o;
    for (; o = e.match(vi); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : et(e.slice(2)), t];
}
let Wn = 0;
const Ic = /* @__PURE__ */ Promise.resolve(), Pc = () => Wn || (Ic.then(() => Wn = 0), Wn = Date.now());
function Mc(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    ve(
      Fc(o, n.value),
      t,
      5,
      [o]
    );
  };
  return n.value = e, n.attached = Pc(), n;
}
function Oi(e, t) {
  return S(e) || T(e) ? e : (Ze(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), X);
}
function Fc(e, t) {
  if (T(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (o) => (i) => !i._stopped && o && o(i)
    );
  } else
    return t;
}
const wi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Ac = (e, t, n, o, i, r, s, c, f) => {
  const d = i === "svg";
  t === "class" ? yc(e, o, d) : t === "style" ? wc(e, n, o) : Wt(t) ? gn(t) || Sc(e, t, n, o, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : jc(e, t, o, d)) ? Cc(
    e,
    t,
    o,
    r,
    s,
    c,
    f
  ) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), Dc(e, t, o, d));
};
function jc(e, t, n, o) {
  if (o)
    return !!(t === "innerHTML" || t === "textContent" || t in e && wi(t) && S(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return wi(t) && Q(n) ? !1 : t in e;
}
const xi = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return T(t) ? (n) => _t(t, n) : t;
};
function Lc(e) {
  e.target.composing = !0;
}
function Vi(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Gn = Symbol("_assign"), rt = {
  created(e, { modifiers: { lazy: t, trim: n, number: o } }, i) {
    e[Gn] = xi(i);
    const r = o || i.props && i.props.type === "number";
    Nt(e, t ? "change" : "input", (s) => {
      if (s.target.composing)
        return;
      let c = e.value;
      n && (c = c.trim()), r && (c = qn(c)), e[Gn](c);
    }), n && Nt(e, "change", () => {
      e.value = e.value.trim();
    }), t || (Nt(e, "compositionstart", Lc), Nt(e, "compositionend", Vi), Nt(e, "change", Vi));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, modifiers: { lazy: n, trim: o, number: i } }, r) {
    if (e[Gn] = xi(r), e.composing)
      return;
    const s = (i || e.type === "number") && !/^0\d/.test(e.value) ? qn(e.value) : e.value, c = t ?? "";
    s !== c && (document.activeElement === e && e.type !== "range" && (n || o && e.value.trim() === c) || (e.value = c));
  }
}, $c = ["ctrl", "shift", "alt", "meta"], Hc = {
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
  exact: (e, t) => $c.some((n) => e[`${n}Key`] && !t.includes(n))
}, Uc = (e, t) => {
  const n = e._withMods || (e._withMods = {}), o = t.join(".");
  return n[o] || (n[o] = (i, ...r) => {
    for (let s = 0; s < t.length; s++) {
      const c = Hc[t[s]];
      if (c && c(i, t))
        return;
    }
    return e(i, ...r);
  });
}, kc = /* @__PURE__ */ Y({ patchProp: Ac }, Nc);
let Di;
function Kc() {
  return Di || (Di = ql(kc));
}
const Bc = (...e) => {
  const t = Kc().createApp(...e);
  je.NODE_ENV !== "production" && (Gc(t), qc(t));
  const { mount: n } = t;
  return t.mount = (o) => {
    const i = zc(o);
    if (!i)
      return;
    const r = t._component;
    !S(r) && !r.render && !r.template && (r.template = i.innerHTML), i.innerHTML = "";
    const s = n(i, !1, Wc(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), s;
  }, t;
};
function Wc(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Gc(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => Xr(t) || Qr(t) || Zr(t),
    writable: !1
  });
}
function qc(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        Ze(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, o = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return Ze(o), n;
      },
      set() {
        Ze(o);
      }
    });
  }
}
function zc(e) {
  if (Q(e)) {
    const t = document.querySelector(e);
    return je.NODE_ENV !== "production" && !t && Ze(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return je.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && Ze(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
var Yc = {};
function Jc() {
  mc();
}
Yc.NODE_ENV !== "production" && Jc();
const Xc = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, i] of t)
    n[o] = i;
  return n;
}, { Frame: Qc, GIF: Zc } = ImageScript, ef = {
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
    show(e, t, n, o = this.tool) {
      if (this.video = n, !n) {
        this.hide();
        return;
      }
      if (o == "screenshot") {
        this.showing = !1, this.screenshot();
        return;
      } else
        this.showing = "toolbar";
      this.tool = o, this.time = this.getTime(), this.x = e, this.y = t;
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
      let o = Number(n.value), i = Number(n.max);
      Number.isSafeInteger(o) || (o = 0), o += e.wheelDeltaY * (e.shiftKey ? 10 : 1), o < 0 && (o = 0), o > i && (o = i), this.gifRangeOpt[t] = o;
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
        let o;
        e.currentTime = this.gifTime[0];
        const i = 1e3 / 24;
        let r = 0;
        e.play();
        const s = this;
        await new Promise((g, p) => {
          function N() {
            if (s.gifRangeSelector) {
              const B = s.gifRangeOpt;
              t.ctx.drawImage(e, B.x, B.y, B.width, B.height, 0, 0, t.width, t.height);
            } else
              t.ctx.drawImage(e, 0, 0, t.width, t.height);
            const I = t.ctx.getImageData(0, 0, t.width, t.height), P = Date.now(), he = P - r, k = s.frameDiff(I, o);
            if (n.length && (n[n.length - 1].duration = he), k !== 0) {
              const B = new Qc(k.diffImageData.width, k.diffImageData.height, i, k.x, k.y);
              B.bitmap = k.diffImageData.data, n.push(B), o = I, r = P;
            }
          }
          N();
          const V = setInterval(async () => {
            (e.currentTime >= this.gifTime[1] || !this.gifRecording) && (clearInterval(V), e.pause(), this.gifRecording ? g() : p("abort")), N();
          }, i);
        });
        const c = new Zc(n, this.gifLoop ? -1 : 0);
        this.gifRecording = !1, this.gifEncoding = !0, this.$forceUpdate();
        const f = await c.encode(90), d = URL.createObjectURL(new Blob([f], { type: "image/gif" }));
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
      const n = 5, o = this.$refs.canvas, i = e.data, r = t.data, s = o.ctx.createImageData(e), c = s.data;
      for (let f = 0; f < i.length; f += 4)
        Math.max(
          Math.abs(i[f] - r[f]),
          Math.abs(i[f + 1] - r[f + 1]),
          Math.abs(i[f + 2] - r[f + 2]),
          Math.abs(i[f + 3] - r[f + 3])
        ) > n && (c[f] = i[f], c[f + 1] = i[f + 1], c[f + 2] = i[f + 2], c[f + 3] = i[f + 3]);
      return { x: 0, y: 0, diffImageData: s };
    },
    canvasFitVideo(e = 1, t = !1) {
      const n = this.video, o = this.$refs.canvas;
      t ? (o.width = Math.floor(this.gifRangeOpt.width * e), o.height = Math.floor(this.gifRangeOpt.height * e)) : (o.width = Math.floor(n.videoWidth * e), o.height = Math.floor(n.videoHeight * e)), o.style["aspect-ratio"] = o.width / o.height;
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
}, tf = ["actived"], nf = { id: "time_tool" }, of = ["value"], rf = {
  key: 0,
  id: "row1"
}, sf = ["actived"], lf = { title: "GIF缩放" }, cf = ["actived"], ff = {
  title: "正在录制",
  class: "fadeLoop"
}, uf = {
  title: "正在编码",
  class: "fadeLoop"
}, af = {
  id: "row2",
  style: { display: "flex" }
}, df = ["max"], pf = ["max"], hf = ["max"], gf = ["max"], mf = { ref: "canvas" }, _f = { ref: "img" };
function Ef(e, t, n, o, i, r) {
  return At(), sn(Ne, null, [
    i.showing && i.gifRangeSelector ? (At(), sn("div", {
      key: 0,
      id: "range_selector",
      style: Je(r.gifRangeSelectorStyle())
    }, null, 4)) : Kn("", !0),
    i.showing == "toolbar" ? (At(), sn("div", {
      key: 1,
      id: "jia-video-tool",
      style: Je({ left: i.x + "px", top: i.y + "px" }),
      onDrag: t[25] || (t[25] = () => {
      })
    }, [
      H("div", null, [
        H("div", {
          title: "截图",
          onClick: t[0] || (t[0] = (...s) => r.screenshot && r.screenshot(...s)),
          opt: ""
        }, "📷"),
        H("div", {
          title: "截取GIF",
          actived: i.tool == "gif",
          onClick: t[1] || (t[1] = (s) => i.tool = i.tool === "gif" ? "" : "gif"),
          opt: ""
        }, " ✂", 8, tf),
        H("div", nf, [
          H("div", {
            title: "时间微调←",
            onClick: t[2] || (t[2] = (s) => r.timeOffset(-1)),
            opt: ""
          }, "◀️"),
          H("div", {
            title: "时间微调→",
            onClick: t[3] || (t[3] = (s) => r.timeOffset(1)),
            opt: ""
          }, "▶️"),
          H("input", {
            title: "当前视频时间（秒）",
            value: i.time,
            type: "text",
            onChange: t[4] || (t[4] = (s) => r.setTime(s.target.value)),
            onWheel: t[5] || (t[5] = (s) => r.wheelTime(s)),
            style: Je(r.fitInputValue(i.time))
          }, null, 44, of)
        ]),
        H("div", {
          onClick: t[6] || (t[6] = (...s) => r.hide && r.hide(...s)),
          opt: ""
        }, "❌")
      ]),
      i.tool == "gif" ? (At(), sn("div", rf, [
        H("div", {
          title: "设置开始时间",
          opt: "",
          onClick: t[7] || (t[7] = (s) => i.gifTime[0] = r.getTime())
        }, "⏺️"),
        H("div", {
          title: "设置结束时间",
          opt: "",
          onClick: t[8] || (t[8] = (s) => i.gifTime[1] = r.getTime())
        }, "⏹️"),
        H("div", null, [
          ae(H("input", {
            "onUpdate:modelValue": t[9] || (t[9] = (s) => i.gifTime[0] = s),
            placeholder: "start",
            style: Je(r.fitInputValue(i.gifTime[0])),
            onDblclick: t[10] || (t[10] = (s) => r.setTime(r.tText(i.gifTime[0])))
          }, null, 36), [
            [rt, i.gifTime[0]]
          ])
        ]),
        H("div", null, [
          ae(H("input", {
            "onUpdate:modelValue": t[11] || (t[11] = (s) => i.gifTime[1] = s),
            placeholder: "end",
            style: Je(r.fitInputValue(i.gifTime[1])),
            onDblclick: t[12] || (t[12] = (s) => r.setTime(r.tText(i.gifTime[1])))
          }, null, 36), [
            [rt, i.gifTime[1]]
          ])
        ]),
        H("div", {
          title: "GIF循环",
          opt: "",
          actived: i.gifLoop,
          onClick: t[13] || (t[13] = (s) => i.gifLoop = !i.gifLoop)
        }, "🔁", 8, sf),
        H("div", lf, [
          co("🔍"),
          ae(H("input", {
            type: "number",
            max: "1",
            min: "0.1",
            step: "0.1",
            "onUpdate:modelValue": t[14] || (t[14] = (s) => i.gifScale = s),
            style: { width: "2.5em" }
          }, null, 512), [
            [rt, i.gifScale]
          ])
        ]),
        H("div", {
          title: "框选区域",
          opt: "",
          actived: i.gifRangeSelector,
          onClick: t[15] || (t[15] = (s) => i.gifRangeSelector = !i.gifRangeSelector)
        }, "🔲", 8, cf),
        ae(H("div", {
          title: "开始录制",
          opt: "",
          onClick: t[16] || (t[16] = (...s) => r.startRecordGIF && r.startRecordGIF(...s))
        }, "✅ ", 512), [
          [Ge, !i.gifEncoding && !i.gifRecording]
        ]),
        ae(H("div", ff, "🎦", 512), [
          [Ge, i.gifRecording]
        ]),
        ae(H("div", uf, "🕒", 512), [
          [Ge, i.gifEncoding]
        ])
      ])) : Kn("", !0),
      ae(H("div", af, [
        co(" 范围: "),
        ae(H("input", {
          title: "x(滚轮调整)",
          placeholder: "x",
          "onUpdate:modelValue": t[17] || (t[17] = (s) => i.gifRangeOpt.x = s),
          type: "number",
          min: "0",
          step: "1",
          max: i.video.videoWidth - i.gifRangeOpt.width,
          onWheel: t[18] || (t[18] = (s) => r.wheelNumber(s, "x"))
        }, null, 40, df), [
          [rt, i.gifRangeOpt.x]
        ]),
        ae(H("input", {
          title: "y(滚轮调整)",
          placeholder: "y",
          "onUpdate:modelValue": t[19] || (t[19] = (s) => i.gifRangeOpt.y = s),
          type: "number",
          min: "0",
          step: "1",
          max: i.video.videoHeight - i.gifRangeOpt.height,
          onWheel: t[20] || (t[20] = (s) => r.wheelNumber(s, "y"))
        }, null, 40, pf), [
          [rt, i.gifRangeOpt.y]
        ]),
        ae(H("input", {
          title: "width(滚轮调整)",
          placeholder: "width",
          "onUpdate:modelValue": t[21] || (t[21] = (s) => i.gifRangeOpt.width = s),
          type: "number",
          max: i.video.videoWidth - i.gifRangeOpt.x + 1,
          onWheel: t[22] || (t[22] = (s) => r.wheelNumber(s, "width")),
          min: "0",
          step: "1"
        }, null, 40, hf), [
          [rt, i.gifRangeOpt.width]
        ]),
        ae(H("input", {
          title: "height(滚轮调整)",
          placeholder: "height",
          "onUpdate:modelValue": t[23] || (t[23] = (s) => i.gifRangeOpt.height = s),
          type: "number",
          max: i.video.videoHeight - i.gifRangeOpt.y + 1,
          onWheel: t[24] || (t[24] = (s) => r.wheelNumber(s, "height")),
          min: "0",
          step: "1"
        }, null, 40, gf), [
          [rt, i.gifRangeOpt.height]
        ])
      ], 512), [
        [Ge, i.tool == "gif" && i.gifRangeSelector]
      ])
    ], 36)) : Kn("", !0),
    ae(H("dialog", {
      ref: "dialog",
      onClick: t[26] || (t[26] = Uc((...s) => r.hide && r.hide(...s), ["left"]))
    }, [
      ae(H("canvas", mf, null, 512), [
        [Ge, i.result === "canvas"]
      ]),
      ae(H("img", _f, null, 512), [
        [Ge, i.result === "img"]
      ])
    ], 512), [
      [Ge, i.showing == "result"]
    ])
  ], 64);
}
const Nf = /* @__PURE__ */ Xc(ef, [["render", Ef], ["__scopeId", "data-v-dee80196"]]), bf = Bc(Nf), po = document.createElement("div");
po.style = "position:fixed;top:0;left:0;z-index:2147483647;font-size: 12px!important;";
let Ut, bt;
window.addEventListener("mousedown", (e) => {
  if (!(e.button === 2 && e.altKey))
    return;
  e.preventDefault(), e.stopPropagation(), bt && !document.contains(bt) && (bt = null);
  let t = e.target, n;
  if (t.localName === "video" ? n = t : n = t.querySelector("video"), !n) {
    let o = 5;
    for (; o-- && (t = t.parentNode, !(t === document || (n = t.querySelector("video"), n))); )
      ;
  }
  n ? (bt = n, Ut || (document.body.appendChild(po), Ut = bf.mount(po)), Ut.show(e.clientX, e.clientY, n, e.shiftKey ? void 0 : "screenshot")) : n = bt;
});
document.addEventListener("contextmenu", (e) => {
  !Ut || !Ut.showing || !e.altKey || (e.preventDefault(), e.stopPropagation());
});
window.addEventListener("keydown", (e) => {
  if (!e.code.startsWith("Arrow") || !(e.ctrlKey || e.shiftKey) || e.repeat)
    return;
  let t, n;
  const o = [...document.querySelectorAll("video")].filter((i) => (i === bt && (n = i), i.duration >= 300));
  if (o.length !== 0 && (o.length > 1 ? t = o.filter((i) => !i.paused)[0] : n ? t = n : t = o[0], !!t))
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
