(function(){"use strict";try{if(typeof document<"u"){var d=document.createElement("style");d.appendChild(document.createTextNode(".jia-webvideo-tools-abs6r98e54aw3e{object-fit:fill!important}#range_selector[data-v-3fd5322d],#jia-video-tool[data-v-3fd5322d]{position:fixed}#jia-video-tool[data-v-3fd5322d]{position:fixed;border:1px solid #ccc;background-color:#999;border-radius:.3em}#jia-video-tool [opt][data-v-3fd5322d]{user-select:none;cursor:pointer;padding:0 .1em;vertical-align:middle}#jia-video-tool [opt][data-v-3fd5322d]:hover,#jia-video-tool [opt][actived=true][data-v-3fd5322d]{background-color:#333}#jia-video-tool>div[data-v-3fd5322d]{padding:.2em;display:flex}#jia-video-tool>div div[data-v-3fd5322d]{word-wrap:nowrap;word-break:keep-all;display:inline-block}#jia-video-tool #row2>input[data-v-3fd5322d]{width:4em}#jia-video-tool input[data-v-3fd5322d]{min-width:3em}#range_selector[data-v-3fd5322d]{border:2px dashed #6d8500;box-shadow:0 0 0 100vmax #000a;position:fixed;pointer-events:none}dialog[data-v-3fd5322d]{position:fixed;display:flex;padding:0;top:0;left:0;justify-content:center;border:0;max-width:100vw;max-height:100vh;align-items:center;width:100%;height:100%;background:#000000b4}dialog canvas[data-v-3fd5322d],dialog img[data-v-3fd5322d]{max-width:90%;max-height:90%;border:2px solid #000}.fadeLoop[data-v-3fd5322d]{animation:fadeLoop-3fd5322d 1s infinite}@keyframes fadeLoop-3fd5322d{0%{opacity:1}50%{opacity:0}to{opacity:1}}")),document.head.appendChild(d)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
var Ci = {};
/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function je(e, t) {
  const n = new Set(e.split(","));
  return t ? (o) => n.has(o.toLowerCase()) : (o) => n.has(o);
}
const k = Ci.NODE_ENV !== "production" ? Object.freeze({}) : {}, yt = Ci.NODE_ENV !== "production" ? Object.freeze([]) : [], Y = () => {
}, Ar = () => !1, Wt = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), gn = (e) => e.startsWith("onUpdate:"), q = Object.assign, ho = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Lr = Object.prototype.hasOwnProperty, A = (e, t) => Lr.call(e, t), I = Array.isArray, vt = (e) => vn(e) === "[object Map]", jr = (e) => vn(e) === "[object Set]", R = (e) => typeof e == "function", X = (e) => typeof e == "string", Gt = (e) => typeof e == "symbol", K = (e) => e !== null && typeof e == "object", go = (e) => (K(e) || R(e)) && R(e.then) && R(e.catch), $r = Object.prototype.toString, vn = (e) => $r.call(e), mo = (e) => vn(e).slice(8, -1), Hr = (e) => vn(e) === "[object Object]", _o = (e) => X(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Lt = /* @__PURE__ */ je(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Ur = /* @__PURE__ */ je(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), On = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, kr = /-(\w)/g, Vt = On((e) => e.replace(kr, (t, n) => n ? n.toUpperCase() : "")), Kr = /\B([A-Z])/g, et = On(
  (e) => e.replace(Kr, "-$1").toLowerCase()
), wn = On((e) => e.charAt(0).toUpperCase() + e.slice(1)), st = On((e) => e ? `on${wn(e)}` : ""), pt = (e, t) => !Object.is(e, t), _t = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, Si = (e, t, n, o = !1) => {
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
function Ye(e) {
  if (I(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], i = X(o) ? qr(o) : Ye(o);
      if (i)
        for (const r in i)
          t[r] = i[r];
    }
    return t;
  } else if (X(e) || K(e))
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
function bo(e) {
  let t = "";
  if (X(e))
    t = e;
  else if (I(e))
    for (let n = 0; n < e.length; n++) {
      const o = bo(e[n]);
      o && (t += o + " ");
    }
  else if (K(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const zr = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Jr = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", Yr = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", Xr = /* @__PURE__ */ je(zr), Qr = /* @__PURE__ */ je(Jr), Zr = /* @__PURE__ */ je(Yr), es = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ts = /* @__PURE__ */ je(es);
function Ti(e) {
  return !!e || e === "";
}
var Z = {};
function tt(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let _e;
class ns {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = _e, !t && _e && (this.index = (_e.scopes || (_e.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = _e;
      try {
        return _e = this, t();
      } finally {
        _e = n;
      }
    } else
      Z.NODE_ENV !== "production" && tt("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    _e = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    _e = this.parent;
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
function os(e, t = _e) {
  t && t.active && t.effects.push(e);
}
function is() {
  return _e;
}
let ct;
class No {
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
      Ii(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function Ii(e, t) {
  const n = e.get(t);
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup());
}
let Qe = !0, zn = 0;
const Ri = [];
function $e() {
  Ri.push(Qe), Qe = !1;
}
function He() {
  const e = Ri.pop();
  Qe = e === void 0 ? !0 : e;
}
function yo() {
  zn++;
}
function vo() {
  for (zn--; !zn && Jn.length; )
    Jn.shift()();
}
function Pi(e, t, n) {
  var o;
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const i = e.deps[e._depsLength];
    i !== t ? (i && Ii(i, e), e.deps[e._depsLength++] = t) : e._depsLength++, Z.NODE_ENV !== "production" && ((o = e.onTrack) == null || o.call(e, q({ effect: e }, n)));
  }
}
const Jn = [];
function Mi(e, t, n) {
  var o;
  yo();
  for (const i of e.keys()) {
    let r;
    i._dirtyLevel < t && (r ?? (r = e.get(i) === i._trackId)) && (i._shouldSchedule || (i._shouldSchedule = i._dirtyLevel === 0), i._dirtyLevel = t), i._shouldSchedule && (r ?? (r = e.get(i) === i._trackId)) && (Z.NODE_ENV !== "production" && ((o = i.onTrigger) == null || o.call(i, q({ effect: i }, n))), i.trigger(), (!i._runnings || i.allowRecurse) && i._dirtyLevel !== 2 && (i._shouldSchedule = !1, i.scheduler && Jn.push(i.scheduler)));
  }
  vo();
}
const Fi = (e, t) => {
  const n = /* @__PURE__ */ new Map();
  return n.cleanup = e, n.computed = t, n;
}, Yn = /* @__PURE__ */ new WeakMap(), ut = Symbol(Z.NODE_ENV !== "production" ? "iterate" : ""), Xn = Symbol(Z.NODE_ENV !== "production" ? "Map key iterate" : "");
function ne(e, t, n) {
  if (Qe && ct) {
    let o = Yn.get(e);
    o || Yn.set(e, o = /* @__PURE__ */ new Map());
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
function Se(e, t, n, o, i, r) {
  const s = Yn.get(e);
  if (!s)
    return;
  let c = [];
  if (t === "clear")
    c = [...s.values()];
  else if (n === "length" && I(e)) {
    const f = Number(o);
    s.forEach((p, g) => {
      (g === "length" || !Gt(g) && g >= f) && c.push(p);
    });
  } else
    switch (n !== void 0 && c.push(s.get(n)), t) {
      case "add":
        I(e) ? _o(n) && c.push(s.get("length")) : (c.push(s.get(ut)), vt(e) && c.push(s.get(Xn)));
        break;
      case "delete":
        I(e) || (c.push(s.get(ut)), vt(e) && c.push(s.get(Xn)));
        break;
      case "set":
        vt(e) && c.push(s.get(ut));
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
const ss = /* @__PURE__ */ je("__proto__,__v_isRef,__isVue"), Ai = new Set(
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
class Li {
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
    const s = I(t);
    if (!i) {
      if (s && A(zo, n))
        return Reflect.get(zo, n, o);
      if (n === "hasOwnProperty")
        return cs;
    }
    const c = Reflect.get(t, n, o);
    return (Gt(n) ? Ai.has(n) : ss(n)) || (i || ne(t, "get", n), r) ? c : re(c) ? s && _o(n) ? c : c.value : K(c) ? i ? Wi(c) : wo(c) : c;
  }
}
class ji extends Li {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, i) {
    let r = t[n];
    if (!this._isShallow) {
      const f = Dt(r);
      if (!wt(o) && !Dt(o) && (r = F(r), o = F(o)), !I(t) && re(r) && !re(o))
        return f ? !1 : (r.value = o, !0);
    }
    const s = I(t) && _o(n) ? Number(n) < t.length : A(t, n), c = Reflect.set(t, n, o, i);
    return t === F(i) && (s ? pt(o, r) && Se(t, "set", n, o, r) : Se(t, "add", n, o)), c;
  }
  deleteProperty(t, n) {
    const o = A(t, n), i = t[n], r = Reflect.deleteProperty(t, n);
    return r && o && Se(t, "delete", n, void 0, i), r;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!Gt(n) || !Ai.has(n)) && ne(t, "has", n), o;
  }
  ownKeys(t) {
    return ne(
      t,
      "iterate",
      I(t) ? "length" : ut
    ), Reflect.ownKeys(t);
  }
}
class $i extends Li {
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
const us = /* @__PURE__ */ new ji(), fs = /* @__PURE__ */ new $i(), as = /* @__PURE__ */ new ji(
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
  return e = e.__v_raw, !t && ne(F(e), "iterate", ut), Reflect.get(e, "size", e);
}
function Jo(e) {
  e = F(e);
  const t = F(this);
  return xn(t).has.call(t, e) || (t.add(e), Se(t, "add", e, e)), this;
}
function Yo(e, t) {
  t = F(t);
  const n = F(this), { has: o, get: i } = xn(n);
  let r = o.call(n, e);
  r ? Z.NODE_ENV !== "production" && Hi(n, o, e) : (e = F(e), r = o.call(n, e));
  const s = i.call(n, e);
  return n.set(e, t), r ? pt(t, s) && Se(n, "set", e, t, s) : Se(n, "add", e, t), this;
}
function Xo(e) {
  const t = F(this), { has: n, get: o } = xn(t);
  let i = n.call(t, e);
  i ? Z.NODE_ENV !== "production" && Hi(t, n, e) : (e = F(e), i = n.call(t, e));
  const r = o ? o.call(t, e) : void 0, s = t.delete(e);
  return i && Se(t, "delete", e, void 0, r), s;
}
function Qo() {
  const e = F(this), t = e.size !== 0, n = Z.NODE_ENV !== "production" ? vt(e) ? new Map(e) : new Set(e) : void 0, o = e.clear();
  return t && Se(e, "clear", void 0, void 0, n), o;
}
function nn(e, t) {
  return function(o, i) {
    const r = this, s = r.__v_raw, c = F(s), f = t ? Oo : e ? Vo : xo;
    return !e && ne(c, "iterate", ut), s.forEach((p, g) => o.call(i, f(p), f(g), r));
  };
}
function on(e, t, n) {
  return function(...o) {
    const i = this.__v_raw, r = F(i), s = vt(r), c = e === "entries" || e === Symbol.iterator && s, f = e === "keys" && s, p = i[e](...o), g = n ? Oo : t ? Vo : xo;
    return !t && ne(
      r,
      "iterate",
      f ? Xn : ut
    ), {
      // iterator protocol
      next() {
        const { value: d, done: E } = p.next();
        return E ? { value: d, done: E } : {
          value: c ? [g(d[0]), g(d[1])] : g(d),
          done: E
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
    add: Jo,
    set: Yo,
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
    add: Jo,
    set: Yo,
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
}, bs = {
  get: /* @__PURE__ */ Vn(!1, !0)
}, Ns = {
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
    us,
    Es,
    Ui
  );
}
function ws(e) {
  return Dn(
    e,
    !1,
    as,
    bs,
    ki
  );
}
function Wi(e) {
  return Dn(
    e,
    !0,
    fs,
    Ns,
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
  if (!K(e))
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
  return Object.isExtensible(e) && Si(e, "__v_skip", !0), e;
}
const xo = (e) => K(e) ? wo(e) : e, Vo = (e) => K(e) ? Wi(e) : e, Vs = "Computed is still dirty after getter evaluation, likely because a computed is mutating its own dependency in its getter. State mutations in computed getters should be avoided.  Check the docs for more details: https://vuejs.org/guide/essentials/computed.html#getters-should-be-side-effect-free";
class Gi {
  constructor(t, n, o, i) {
    this.getter = t, this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new No(
      () => t(this._value),
      () => Ln(
        this,
        this.effect._dirtyLevel === 2 ? 2 : 3
      )
    ), this.effect.computed = this, this.effect.active = this._cacheable = !i, this.__v_isReadonly = o;
  }
  get value() {
    const t = F(this);
    return (!t._cacheable || t.effect.dirty) && pt(t._value, t._value = t.effect.run()) && Ln(t, 4), Cs(t), t.effect._dirtyLevel >= 2 && (Z.NODE_ENV !== "production" && this._warnRecursive && tt(Vs, `

getter: `, this.getter), Ln(t, 2)), t._value;
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
  const r = R(e);
  r ? (o = e, i = Z.NODE_ENV !== "production" ? () => {
    tt("Write operation failed: computed value is readonly");
  } : Y) : (o = e.get, i = e.set);
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
function Ln(e, t = 4, n) {
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
function Ss(e) {
  return re(e) ? e.value : e;
}
const Ts = {
  get: (e, t, n) => Ss(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const i = e[t];
    return re(i) && !re(n) ? (i.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function qi(e) {
  return Ot(e) ? e : new Proxy(e, Ts);
}
var a = {};
const ft = [];
function ln(e) {
  ft.push(e);
}
function cn() {
  ft.pop();
}
function O(e, ...t) {
  $e();
  const n = ft.length ? ft[ft.length - 1].component : null, o = n && n.appContext.config.warnHandler, i = Is();
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
`, ...Rs(i)), console.warn(...r);
  }
  He();
}
function Is() {
  let e = ft[ft.length - 1];
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
function Rs(e) {
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
  return X(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : re(t) ? (t = zi(e, F(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : R(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = F(t), n ? t : [`${e}=`, t]);
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
function ye(e, t, n, o) {
  if (R(e)) {
    const i = Fe(e, t, n, o);
    return i && go(i) && i.catch((r) => {
      qt(r, t, n);
    }), i;
  }
  if (I(e)) {
    const i = [];
    for (let r = 0; r < e.length; r++)
      i.push(ye(e[r], t, n, o));
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
      const p = r.ec;
      if (p) {
        for (let g = 0; g < p.length; g++)
          if (p[g](e, s, c) === !1)
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
const Ji = /* @__PURE__ */ Promise.resolve();
let Co = null;
const As = 100;
function Ls(e) {
  const t = Co || Ji;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function js(e) {
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
  )) && (e.id == null ? oe.push(e) : oe.splice(js(e.id), 0, e), Yi());
}
function Yi() {
  !kt && !Zn && (Zn = !0, Co = Ji.then(Zi));
}
function $s(e) {
  const t = oe.indexOf(e);
  t > Ve && oe.splice(t, 1);
}
function Xi(e) {
  I(e) ? xt.push(...e) : (!Me || !Me.includes(
    e,
    e.allowRecurse ? qe + 1 : qe
  )) && xt.push(e), Yi();
}
function Zo(e, t, n = kt ? Ve + 1 : 0) {
  for (a.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < oe.length; n++) {
    const o = oe[n];
    if (o && o.pre) {
      if (e && o.id !== e.uid || a.NODE_ENV !== "production" && So(t, o))
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
      a.NODE_ENV !== "production" && So(e, Me[qe]) || Me[qe]();
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
  const t = a.NODE_ENV !== "production" ? (n) => So(e, n) : Y;
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
function So(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > As) {
      const o = t.ownerInstance, i = o && Ir(o.type);
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
  createRecord: jn(er),
  rerender: jn(Ks),
  reload: jn(Bs)
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
    initialDef: jt(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function jt(e) {
  return Rr(e) ? e.__vccOpts : e;
}
function Ks(e, t) {
  const n = ht.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, jt(o.type).render = t), o.renderCache = [], at = !0, o.effect.dirty = !0, o.update(), at = !1;
  }));
}
function Bs(e, t) {
  const n = ht.get(e);
  if (!n)
    return;
  t = jt(t), ei(n.initialDef, t);
  const o = [...n.instances];
  for (const i of o) {
    const r = jt(i.type);
    Et.has(r) || (r !== n.initialDef && ei(r, t), Et.add(r)), i.appContext.propsCache.delete(i.type), i.appContext.emitsCache.delete(i.type), i.appContext.optionsCache.delete(i.type), i.ceReload ? (Et.add(r), i.ceReload(t.styles), Et.delete(r)) : i.parent ? (i.parent.effect.dirty = !0, Cn(i.parent.update)) : i.appContext.reload ? i.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  Xi(() => {
    for (const i of o)
      Et.delete(
        jt(i.type)
      );
  });
}
function ei(e, t) {
  q(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function jn(e) {
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
    Fragment: Ee,
    Text: Jt,
    Comment: pe,
    Static: dn
  });
}
function Gs(e) {
  zt("app:unmount", e);
}
const qs = /* @__PURE__ */ To(
  "component:added"
  /* COMPONENT_ADDED */
), nr = /* @__PURE__ */ To(
  "component:updated"
  /* COMPONENT_UPDATED */
), zs = /* @__PURE__ */ To(
  "component:removed"
  /* COMPONENT_REMOVED */
), Js = (e) => {
  De && typeof De.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !De.cleanupBuffer(e) && zs(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function To(e) {
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
const Ys = /* @__PURE__ */ or(
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
  const o = e.vnode.props || k;
  if (a.NODE_ENV !== "production") {
    const {
      emitsOptions: g,
      propsOptions: [d]
    } = e;
    if (g)
      if (!(t in g))
        (!d || !(st(t) in d)) && O(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${st(t)}" prop.`
        );
      else {
        const E = g[t];
        R(E) && (E(...n) || O(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let i = n;
  const r = t.startsWith("update:"), s = r && t.slice(7);
  if (s && s in o) {
    const g = `${s === "modelValue" ? "model" : s}Modifiers`, { number: d, trim: E } = o[g] || k;
    E && (i = n.map((w) => X(w) ? w.trim() : w)), d && (i = n.map(qn));
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
  !f && r && (f = o[c = st(et(t))]), f && ye(
    f,
    e,
    6,
    i
  );
  const p = o[c + "Once"];
  if (p) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[c])
      return;
    e.emitted[c] = !0, ye(
      p,
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
  if (!R(e)) {
    const f = (p) => {
      const g = ir(p, t, !0);
      g && (c = !0, q(s, g));
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  return !r && !c ? (K(e) && o.set(e, null), null) : (I(r) ? r.forEach((f) => s[f] = null) : q(s, r), K(e) && o.set(e, s), s);
}
function Sn(e, t) {
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
    render: p,
    renderCache: g,
    props: d,
    data: E,
    setupState: w,
    ctx: T,
    inheritAttrs: D
  } = e, ve = mn(e);
  let z, Q;
  a.NODE_ENV !== "production" && (to = !1);
  try {
    if (n.shapeFlag & 4) {
      const J = i || o, he = a.NODE_ENV !== "production" && w.__isScriptSetup ? new Proxy(J, {
        get(M, se, le) {
          return O(
            `Property '${String(
              se
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(M, se, le);
        }
      }) : J;
      z = be(
        p.call(
          he,
          J,
          g,
          a.NODE_ENV !== "production" ? Ce(d) : d,
          w,
          E,
          T
        )
      ), Q = c;
    } else {
      const J = t;
      a.NODE_ENV !== "production" && c === d && _n(), z = be(
        J.length > 1 ? J(
          a.NODE_ENV !== "production" ? Ce(d) : d,
          a.NODE_ENV !== "production" ? {
            get attrs() {
              return _n(), Ce(c);
            },
            slots: s,
            emit: f
          } : { attrs: c, slots: s, emit: f }
        ) : J(
          a.NODE_ENV !== "production" ? Ce(d) : d,
          null
        )
      ), Q = t.props ? c : tl(c);
    }
  } catch (J) {
    Ht.length = 0, qt(J, e, 1), z = Ae(pe);
  }
  let W = z, G;
  if (a.NODE_ENV !== "production" && z.patchFlag > 0 && z.patchFlag & 2048 && ([W, G] = sr(z)), Q && D !== !1) {
    const J = Object.keys(Q), { shapeFlag: he } = W;
    if (J.length) {
      if (he & 7)
        r && J.some(gn) && (Q = nl(
          Q,
          r
        )), W = nt(W, Q, !1, !0);
      else if (a.NODE_ENV !== "production" && !to && W.type !== pe) {
        const M = Object.keys(c), se = [], le = [];
        for (let Te = 0, ke = M.length; Te < ke; Te++) {
          const ge = M[Te];
          Wt(ge) ? gn(ge) || se.push(ge[2].toLowerCase() + ge.slice(3)) : le.push(ge);
        }
        le.length && O(
          `Extraneous non-props attributes (${le.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`
        ), se.length && O(
          `Extraneous non-emits event listeners (${se.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (a.NODE_ENV !== "production" && !ti(W) && O(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), W = nt(W, null, !1, !0), W.dirs = W.dirs ? W.dirs.concat(n.dirs) : n.dirs), n.transition && (a.NODE_ENV !== "production" && !ti(W) && O(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), W.transition = n.transition), a.NODE_ENV !== "production" && G ? G(W) : z = W, mn(ve), z;
}
const sr = (e) => {
  const t = e.children, n = e.dynamicChildren, o = Io(t, !1);
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
function Io(e, t = !0) {
  let n;
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    if (Ao(i)) {
      if (i.type !== pe || i.children === "v-if") {
        if (n)
          return;
        if (n = i, a.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return Io(n.children);
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
  const { props: o, children: i, component: r } = e, { props: s, children: c, patchFlag: f } = t, p = r.emitsOptions;
  if (a.NODE_ENV !== "production" && (i || c) && at || t.dirs || t.transition)
    return !0;
  if (n && f >= 0) {
    if (f & 1024)
      return !0;
    if (f & 16)
      return o ? ni(o, s, p) : !!s;
    if (f & 8) {
      const g = t.dynamicProps;
      for (let d = 0; d < g.length; d++) {
        const E = g[d];
        if (s[E] !== o[E] && !Sn(p, E))
          return !0;
      }
    }
  } else
    return (i || c) && (!c || !c.$stable) ? !0 : o === s ? !1 : o ? s ? ni(o, s, p) : !0 : !!s;
  return !1;
}
function ni(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < o.length; i++) {
    const r = o[i];
    if (t[r] !== e[r] && !Sn(n, r))
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
  t && t.pendingBranch ? I(e) ? t.effects.push(...e) : t.effects.push(e) : Xi(e);
}
const cl = Symbol.for("v-scx"), ul = () => {
  {
    const e = fn(cl);
    return e || a.NODE_ENV !== "production" && O(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
}, rn = {};
function Hn(e, t, n) {
  return a.NODE_ENV !== "production" && !R(t) && O(
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
} = k) {
  if (t && r) {
    const M = t;
    t = (...se) => {
      M(...se), he();
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
  }, p = te, g = (M) => o === !0 ? M : (
    // for deep: false, only traverse root-level properties
    lt(M, o === !1 ? 1 : void 0)
  );
  let d, E = !1, w = !1;
  if (re(e) ? (d = () => e.value, E = wt(e)) : Ot(e) ? (d = () => g(e), E = !0) : I(e) ? (w = !0, E = e.some((M) => Ot(M) || wt(M)), d = () => e.map((M) => {
    if (re(M))
      return M.value;
    if (Ot(M))
      return g(M);
    if (R(M))
      return Fe(M, p, 2);
    a.NODE_ENV !== "production" && f(M);
  })) : R(e) ? t ? d = () => Fe(e, p, 2) : d = () => (T && T(), ye(
    e,
    p,
    3,
    [D]
  )) : (d = Y, a.NODE_ENV !== "production" && f(e)), t && o) {
    const M = d;
    d = () => lt(M());
  }
  let T, D = (M) => {
    T = G.onStop = () => {
      Fe(M, p, 4), T = G.onStop = void 0;
    };
  }, ve;
  if (In)
    if (D = Y, t ? n && ye(t, p, 3, [
      d(),
      w ? [] : void 0,
      D
    ]) : d(), i === "sync") {
      const M = ul();
      ve = M.__watcherHandles || (M.__watcherHandles = []);
    } else
      return Y;
  let z = w ? new Array(e.length).fill(rn) : rn;
  const Q = () => {
    if (!(!G.active || !G.dirty))
      if (t) {
        const M = G.run();
        (o || E || (w ? M.some((se, le) => pt(se, z[le])) : pt(M, z))) && (T && T(), ye(t, p, 3, [
          M,
          // pass undefined as the old value when it's changed for the first time
          z === rn ? void 0 : w && z[0] === rn ? [] : z,
          D
        ]), z = M);
      } else
        G.run();
  };
  Q.allowRecurse = !!t;
  let W;
  i === "sync" ? W = Q : i === "post" ? W = () => de(Q, p && p.suspense) : (Q.pre = !0, p && (Q.id = p.uid), W = () => Cn(Q));
  const G = new No(d, Y, W), J = is(), he = () => {
    G.stop(), J && ho(J.effects, G);
  };
  return a.NODE_ENV !== "production" && (G.onTrack = s, G.onTrigger = c), t ? n ? Q() : z = G.run() : i === "post" ? de(
    G.run.bind(G),
    p && p.suspense
  ) : G.run(), ve && ve.push(he), he;
}
function fl(e, t, n) {
  const o = this.proxy, i = X(e) ? e.includes(".") ? cr(o, e) : () => o[e] : e.bind(o, o);
  let r;
  R(t) ? r = t : (r = t.handler, n = t);
  const s = Yt(this), c = lr(i, r.bind(o), n);
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
  if (t <= 0 || !K(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, re(e))
    lt(e.value, t, n);
  else if (I(e))
    for (let o = 0; o < e.length; o++)
      lt(e[o], t, n);
  else if (jr(e) || vt(e))
    e.forEach((o) => {
      lt(o, t, n);
    });
  else if (Hr(e))
    for (const o in e)
      lt(e[o], t, n);
  return e;
}
function ur(e) {
  Ur(e) && O("Do not use built-in directive ids as custom directive id: " + e);
}
function ae(e, t) {
  if (ie === null)
    return a.NODE_ENV !== "production" && O("withDirectives can only be used inside render functions."), e;
  const n = Rn(ie) || ie.proxy, o = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [r, s, c, f = k] = t[i];
    r && (R(r) && (r = {
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
    f && ($e(), ye(f, n, 8, [
      e.el,
      c,
      e,
      t
    ]), He());
  }
}
const un = (e) => !!e.type.__asyncLoader, Ro = (e) => e.type.__isKeepAlive;
function al(e, t) {
  fr(e, "a", t);
}
function dl(e, t) {
  fr(e, "da", t);
}
function fr(e, t, n = te) {
  const o = e.__wdc || (e.__wdc = () => {
    let i = n;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (Tn(t, o, n), n) {
    let i = n.parent;
    for (; i && i.parent; )
      Ro(i.parent.vnode) && pl(o, t, n, i), i = i.parent;
  }
}
function pl(e, t, n, o) {
  const i = Tn(
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
function Tn(e, t, n = te, o = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...s) => {
      if (n.isUnmounted)
        return;
      $e();
      const c = Yt(n), f = ye(t, n, e, s);
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
  (!In || e === "sp") && Tn(e, (...o) => t(...o), n)
), hl = Ue("bm"), gl = Ue("m"), ml = Ue("bu"), _l = Ue("u"), El = Ue("bum"), ar = Ue("um"), bl = Ue("sp"), Nl = Ue(
  "rtg"
), yl = Ue(
  "rtc"
);
function vl(e, t = te) {
  Tn("ec", e, t);
}
const no = (e) => e ? Sr(e) ? Rn(e) || e.proxy : no(e.parent) : null, dt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ q(/* @__PURE__ */ Object.create(null), {
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
    $nextTick: (e) => e.n || (e.n = Ls.bind(e.proxy)),
    $watch: (e) => fl.bind(e)
  })
), Po = (e) => e === "_" || e === "$", Un = (e, t) => e !== k && !e.__isScriptSetup && A(e, t), dr = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: o, data: i, props: r, accessCache: s, type: c, appContext: f } = e;
    if (a.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let p;
    if (t[0] !== "$") {
      const w = s[t];
      if (w !== void 0)
        switch (w) {
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
        if (i !== k && A(i, t))
          return s[t] = 2, i[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (p = e.propsOptions[0]) && A(p, t)
        )
          return s[t] = 3, r[t];
        if (n !== k && A(n, t))
          return s[t] = 4, n[t];
        oo && (s[t] = 0);
      }
    }
    const g = dt[t];
    let d, E;
    if (g)
      return t === "$attrs" ? (ne(e.attrs, "get", ""), a.NODE_ENV !== "production" && _n()) : a.NODE_ENV !== "production" && t === "$slots" && ne(e, "get", t), g(e);
    if (
      // css module (injected by vue-loader)
      (d = c.__cssModules) && (d = d[t])
    )
      return d;
    if (n !== k && A(n, t))
      return s[t] = 4, n[t];
    if (
      // global properties
      E = f.config.globalProperties, A(E, t)
    )
      return E[t];
    a.NODE_ENV !== "production" && ie && (!X(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (i !== k && Po(t[0]) && A(i, t) ? O(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === ie && O(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: i, ctx: r } = e;
    return Un(i, t) ? (i[t] = n, !0) : a.NODE_ENV !== "production" && i.__isScriptSetup && A(i, t) ? (O(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== k && A(o, t) ? (o[t] = n, !0) : A(e.props, t) ? (a.NODE_ENV !== "production" && O(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (a.NODE_ENV !== "production" && O(
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
    return !!n[s] || e !== k && A(e, s) || Un(t, s) || (c = r[0]) && A(c, s) || A(o, s) || A(dt, s) || A(i.config.globalProperties, s);
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
      set: Y
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
      set: Y
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
        set: Y
      });
    }
  });
}
function oi(e) {
  return I(e) ? e.reduce(
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
    inject: p,
    // lifecycle
    created: g,
    beforeMount: d,
    mounted: E,
    beforeUpdate: w,
    updated: T,
    activated: D,
    deactivated: ve,
    beforeDestroy: z,
    beforeUnmount: Q,
    destroyed: W,
    unmounted: G,
    render: J,
    renderTracked: he,
    renderTriggered: M,
    errorCaptured: se,
    serverPrefetch: le,
    // public API
    expose: Te,
    inheritAttrs: ke,
    // assets
    components: ge,
    directives: Xt,
    filters: jo
  } = t, Ke = a.NODE_ENV !== "production" ? Vl() : null;
  if (a.NODE_ENV !== "production") {
    const [$] = e.propsOptions;
    if ($)
      for (const j in $)
        Ke("Props", j);
  }
  if (p && Cl(p, o, Ke), s)
    for (const $ in s) {
      const j = s[$];
      R(j) ? (a.NODE_ENV !== "production" ? Object.defineProperty(o, $, {
        value: j.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[$] = j.bind(n), a.NODE_ENV !== "production" && Ke("Methods", $)) : a.NODE_ENV !== "production" && O(
        `Method "${$}" has type "${typeof j}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (i) {
    a.NODE_ENV !== "production" && !R(i) && O(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const $ = i.call(n, n);
    if (a.NODE_ENV !== "production" && go($) && O(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !K($))
      a.NODE_ENV !== "production" && O("data() should return an object.");
    else if (e.data = wo($), a.NODE_ENV !== "production")
      for (const j in $)
        Ke("Data", j), Po(j[0]) || Object.defineProperty(o, j, {
          configurable: !0,
          enumerable: !0,
          get: () => $[j],
          set: Y
        });
  }
  if (oo = !0, r)
    for (const $ in r) {
      const j = r[$], Oe = R(j) ? j.bind(n, n) : R(j.get) ? j.get.bind(n, n) : Y;
      a.NODE_ENV !== "production" && Oe === Y && O(`Computed property "${$}" has no getter.`);
      const Mn = !R(j) && R(j.set) ? j.set.bind(n) : a.NODE_ENV !== "production" ? () => {
        O(
          `Write operation failed: computed property "${$}" is readonly.`
        );
      } : Y, Ct = gc({
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
    const $ = R(f) ? f.call(n) : f;
    Reflect.ownKeys($).forEach((j) => {
      Ml(j, $[j]);
    });
  }
  g && ii(g, e, "c");
  function fe($, j) {
    I(j) ? j.forEach((Oe) => $(Oe.bind(n))) : j && $(j.bind(n));
  }
  if (fe(hl, d), fe(gl, E), fe(ml, w), fe(_l, T), fe(al, D), fe(dl, ve), fe(vl, se), fe(yl, he), fe(Nl, M), fe(El, Q), fe(ar, G), fe(bl, le), I(Te))
    if (Te.length) {
      const $ = e.exposed || (e.exposed = {});
      Te.forEach((j) => {
        Object.defineProperty($, j, {
          get: () => n[j],
          set: (Oe) => n[j] = Oe
        });
      });
    } else
      e.exposed || (e.exposed = {});
  J && e.render === Y && (e.render = J), ke != null && (e.inheritAttrs = ke), ge && (e.components = ge), Xt && (e.directives = Xt);
}
function Cl(e, t, n = Y) {
  I(e) && (e = io(e));
  for (const o in e) {
    const i = e[o];
    let r;
    K(i) ? "default" in i ? r = fn(
      i.from || o,
      i.default,
      !0
    ) : r = fn(i.from || o) : r = fn(i), re(r) ? Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (s) => r.value = s
    }) : t[o] = r, a.NODE_ENV !== "production" && n("Inject", o);
  }
}
function ii(e, t, n) {
  ye(
    I(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function pr(e, t, n, o) {
  const i = o.includes(".") ? cr(n, o) : () => n[o];
  if (X(e)) {
    const r = t[e];
    R(r) ? Hn(i, r) : a.NODE_ENV !== "production" && O(`Invalid watch handler specified by key "${e}"`, r);
  } else if (R(e))
    Hn(i, e.bind(n));
  else if (K(e))
    if (I(e))
      e.forEach((r) => pr(r, t, n, o));
    else {
      const r = R(e.handler) ? e.handler.bind(n) : t[e.handler];
      R(r) ? Hn(i, r, e) : a.NODE_ENV !== "production" && O(`Invalid watch handler specified by key "${e.handler}"`, r);
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
    (p) => En(f, p, s, !0)
  ), En(f, t, s)), K(t) && r.set(t, f), f;
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
      const c = Sl[s] || n && n[s];
      e[s] = c ? c(e[s], t[s]) : t[s];
    }
  return e;
}
const Sl = {
  data: ri,
  props: si,
  emits: si,
  // objects
  methods: Ft,
  computed: Ft,
  // lifecycle
  beforeCreate: ue,
  created: ue,
  beforeMount: ue,
  mounted: ue,
  beforeUpdate: ue,
  updated: ue,
  beforeDestroy: ue,
  beforeUnmount: ue,
  destroyed: ue,
  unmounted: ue,
  activated: ue,
  deactivated: ue,
  errorCaptured: ue,
  serverPrefetch: ue,
  // assets
  components: Ft,
  directives: Ft,
  // watch
  watch: Il,
  // provide / inject
  provide: ri,
  inject: Tl
};
function ri(e, t) {
  return t ? e ? function() {
    return q(
      R(e) ? e.call(this, this) : e,
      R(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Tl(e, t) {
  return Ft(io(e), io(t));
}
function io(e) {
  if (I(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ue(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Ft(e, t) {
  return e ? q(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function si(e, t) {
  return e ? I(e) && I(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : q(
    /* @__PURE__ */ Object.create(null),
    oi(e),
    oi(t ?? {})
  ) : t;
}
function Il(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = q(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = ue(e[o], t[o]);
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
let Rl = 0;
function Pl(e, t) {
  return function(o, i = null) {
    R(o) || (o = q({}, o)), i != null && !K(i) && (a.NODE_ENV !== "production" && O("root props passed to app.mount() must be an object."), i = null);
    const r = hr(), s = /* @__PURE__ */ new WeakSet();
    let c = !1;
    const f = r.app = {
      _uid: Rl++,
      _component: o,
      _props: i,
      _container: null,
      _context: r,
      _instance: null,
      version: mi,
      get config() {
        return r.config;
      },
      set config(p) {
        a.NODE_ENV !== "production" && O(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(p, ...g) {
        return s.has(p) ? a.NODE_ENV !== "production" && O("Plugin has already been applied to target app.") : p && R(p.install) ? (s.add(p), p.install(f, ...g)) : R(p) ? (s.add(p), p(f, ...g)) : a.NODE_ENV !== "production" && O(
          'A plugin must either be a function or an object with an "install" function.'
        ), f;
      },
      mixin(p) {
        return r.mixins.includes(p) ? a.NODE_ENV !== "production" && O(
          "Mixin has already been applied to target app" + (p.name ? `: ${p.name}` : "")
        ) : r.mixins.push(p), f;
      },
      component(p, g) {
        return a.NODE_ENV !== "production" && fo(p, r.config), g ? (a.NODE_ENV !== "production" && r.components[p] && O(`Component "${p}" has already been registered in target app.`), r.components[p] = g, f) : r.components[p];
      },
      directive(p, g) {
        return a.NODE_ENV !== "production" && ur(p), g ? (a.NODE_ENV !== "production" && r.directives[p] && O(`Directive "${p}" has already been registered in target app.`), r.directives[p] = g, f) : r.directives[p];
      },
      mount(p, g, d) {
        if (c)
          a.NODE_ENV !== "production" && O(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          a.NODE_ENV !== "production" && p.__vue_app__ && O(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const E = Ae(o, i);
          return E.appContext = r, d === !0 ? d = "svg" : d === !1 && (d = void 0), a.NODE_ENV !== "production" && (r.reload = () => {
            e(
              nt(E),
              p,
              d
            );
          }), g && t ? t(E, p) : e(E, p, d), c = !0, f._container = p, p.__vue_app__ = f, a.NODE_ENV !== "production" && (f._instance = E.component, Ws(f, mi)), Rn(E.component) || E.component.proxy;
        }
      },
      unmount() {
        c ? (e(null, f._container), a.NODE_ENV !== "production" && (f._instance = null, Gs(f)), delete f._container.__vue_app__) : a.NODE_ENV !== "production" && O("Cannot unmount an app that is not mounted.");
      },
      provide(p, g) {
        return a.NODE_ENV !== "production" && p in r.provides && O(
          `App already provides property with key "${String(p)}". It will be overwritten with the new value.`
        ), r.provides[p] = g, f;
      },
      runWithContext(p) {
        const g = $t;
        $t = f;
        try {
          return p();
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
function fn(e, t, n = !1) {
  const o = te || ie;
  if (o || $t) {
    const i = o ? o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : $t._context.provides;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && R(t) ? t.call(o && o.proxy) : t;
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
  a.NODE_ENV !== "production" && Nr(t || {}, i, e), n ? e.props = o ? i : ws(i) : e.type.props ? e.props = i : e.props = r, e.attrs = r;
}
function Al(e) {
  for (; e; ) {
    if (e.type.__hmrId)
      return !0;
    e = e.parent;
  }
}
function Ll(e, t, n, o) {
  const {
    props: i,
    attrs: r,
    vnode: { patchFlag: s }
  } = e, c = F(i), [f] = e.propsOptions;
  let p = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(a.NODE_ENV !== "production" && Al(e)) && (o || s > 0) && !(s & 16)
  ) {
    if (s & 8) {
      const g = e.vnode.dynamicProps;
      for (let d = 0; d < g.length; d++) {
        let E = g[d];
        if (Sn(e.emitsOptions, E))
          continue;
        const w = t[E];
        if (f)
          if (A(r, E))
            w !== r[E] && (r[E] = w, p = !0);
          else {
            const T = Vt(E);
            i[T] = ro(
              f,
              c,
              T,
              w,
              e,
              !1
            );
          }
        else
          w !== r[E] && (r[E] = w, p = !0);
      }
    }
  } else {
    Er(e, t, i, r) && (p = !0);
    let g;
    for (const d in c)
      (!t || // for camelCase
      !A(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((g = et(d)) === d || !A(t, g))) && (f ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[g] !== void 0) && (i[d] = ro(
        f,
        c,
        d,
        void 0,
        e,
        !0
      )) : delete i[d]);
    if (r !== c)
      for (const d in r)
        (!t || !A(t, d)) && (delete r[d], p = !0);
  }
  p && Se(e.attrs, "set", ""), a.NODE_ENV !== "production" && Nr(t || {}, i, e);
}
function Er(e, t, n, o) {
  const [i, r] = e.propsOptions;
  let s = !1, c;
  if (t)
    for (let f in t) {
      if (Lt(f))
        continue;
      const p = t[f];
      let g;
      i && A(i, g = Vt(f)) ? !r || !r.includes(g) ? n[g] = p : (c || (c = {}))[g] = p : Sn(e.emitsOptions, f) || (!(f in o) || p !== o[f]) && (o[f] = p, s = !0);
    }
  if (r) {
    const f = F(n), p = c || k;
    for (let g = 0; g < r.length; g++) {
      const d = r[g];
      n[d] = ro(
        i,
        f,
        d,
        p[d],
        e,
        !A(p, d)
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
      if (s.type !== Function && !s.skipFactory && R(f)) {
        const { propsDefaults: p } = i;
        if (n in p)
          o = p[n];
        else {
          const g = Yt(i);
          o = p[n] = f.call(
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
function br(e, t, n = !1) {
  const o = t.propsCache, i = o.get(e);
  if (i)
    return i;
  const r = e.props, s = {}, c = [];
  let f = !1;
  if (!R(e)) {
    const g = (d) => {
      f = !0;
      const [E, w] = br(d, t, !0);
      q(s, E), w && c.push(...w);
    };
    !n && t.mixins.length && t.mixins.forEach(g), e.extends && g(e.extends), e.mixins && e.mixins.forEach(g);
  }
  if (!r && !f)
    return K(e) && o.set(e, yt), yt;
  if (I(r))
    for (let g = 0; g < r.length; g++) {
      a.NODE_ENV !== "production" && !X(r[g]) && O("props must be strings when using array syntax.", r[g]);
      const d = Vt(r[g]);
      li(d) && (s[d] = k);
    }
  else if (r) {
    a.NODE_ENV !== "production" && !K(r) && O("invalid props options", r);
    for (const g in r) {
      const d = Vt(g);
      if (li(d)) {
        const E = r[g], w = s[d] = I(E) || R(E) ? { type: E } : q({}, E);
        if (w) {
          const T = ui(Boolean, w.type), D = ui(String, w.type);
          w[
            0
            /* shouldCast */
          ] = T > -1, w[
            1
            /* shouldCastTrue */
          ] = D < 0 || T < D, (T > -1 || A(w, "default")) && c.push(d);
        }
      }
    }
  }
  const p = [s, c];
  return K(e) && o.set(e, p), p;
}
function li(e) {
  return e[0] !== "$" && !Lt(e) ? !0 : (a.NODE_ENV !== "production" && O(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function so(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function ci(e, t) {
  return so(e) === so(t);
}
function ui(e, t) {
  return I(t) ? t.findIndex((n) => ci(n, e)) : R(t) && ci(t, e) ? 0 : -1;
}
function Nr(e, t, n) {
  const o = F(t), i = n.propsOptions[0];
  for (const r in i) {
    let s = i[r];
    s != null && jl(
      r,
      o[r],
      s,
      a.NODE_ENV !== "production" ? Ce(o) : o,
      !A(e, r) && !A(e, et(r))
    );
  }
}
function jl(e, t, n, o, i) {
  const { type: r, required: s, validator: c, skipCheck: f } = n;
  if (s && i) {
    O('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !s)) {
    if (r != null && r !== !0 && !f) {
      let p = !1;
      const g = I(r) ? r : [r], d = [];
      for (let E = 0; E < g.length && !p; E++) {
        const { valid: w, expectedType: T } = Hl(t, g[E]);
        d.push(T || ""), p = w;
      }
      if (!p) {
        O(Ul(e, t, d));
        return;
      }
    }
    c && !c(t, o) && O('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const $l = /* @__PURE__ */ je(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function Hl(e, t) {
  let n;
  const o = so(t);
  if ($l(o)) {
    const i = typeof e;
    n = i === o.toLowerCase(), !n && i === "object" && (n = e instanceof t);
  } else
    o === "Object" ? n = K(e) : o === "Array" ? n = I(e) : o === "null" ? n = e === null : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function Ul(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(wn).join(" | ")}`;
  const i = n[0], r = mo(t), s = fi(t, i), c = fi(t, r);
  return n.length === 1 && ai(i) && !kl(i, r) && (o += ` with value ${s}`), o += `, got ${r} `, ai(r) && (o += `with value ${c}.`), o;
}
function fi(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function ai(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function kl(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const yr = (e) => e[0] === "_" || e === "$stable", Fo = (e) => I(e) ? e.map(be) : [be(e)], Kl = (e, t, n) => {
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
    if (R(r))
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
  a.NODE_ENV !== "production" && !Ro(e.vnode) && O(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = Fo(t);
  e.slots.default = () => n;
}, Bl = (e, t) => {
  const n = e.slots = mr();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (q(n, t), Si(n, "_", o, !0)) : vr(t, n);
  } else
    t && Or(e, t);
}, Wl = (e, t, n) => {
  const { vnode: o, slots: i } = e;
  let r = !0, s = k;
  if (o.shapeFlag & 32) {
    const c = t._;
    c ? a.NODE_ENV !== "production" && at ? (q(i, t), Se(e, "set", "$slots")) : n && c === 1 ? r = !1 : (q(i, t), !n && c === 1 && delete i._) : (r = !t.$stable, vr(t, i)), s = t;
  } else
    t && (Or(e, t), s = { default: 1 });
  if (r)
    for (const c in i)
      !yr(c) && s[c] == null && delete i[c];
};
function lo(e, t, n, o, i = !1) {
  if (I(e)) {
    e.forEach(
      (E, w) => lo(
        E,
        t && (I(t) ? t[w] : t),
        n,
        o,
        i
      )
    );
    return;
  }
  if (un(o) && !i)
    return;
  const r = o.shapeFlag & 4 ? Rn(o.component) || o.component.proxy : o.el, s = i ? null : r, { i: c, r: f } = e;
  if (a.NODE_ENV !== "production" && !c) {
    O(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const p = t && t.r, g = c.refs === k ? c.refs = {} : c.refs, d = c.setupState;
  if (p != null && p !== f && (X(p) ? (g[p] = null, A(d, p) && (d[p] = null)) : re(p) && (p.value = null)), R(f))
    Fe(f, c, 12, [s, g]);
  else {
    const E = X(f), w = re(f);
    if (E || w) {
      const T = () => {
        if (e.f) {
          const D = E ? A(d, f) ? d[f] : g[f] : f.value;
          i ? I(D) && ho(D, r) : I(D) ? D.includes(r) || D.push(r) : E ? (g[f] = [r], A(d, f) && (d[f] = g[f])) : (f.value = [r], e.k && (g[e.k] = f.value));
        } else
          E ? (g[f] = s, A(d, f) && (d[f] = s)) : w ? (f.value = s, e.k && (g[e.k] = s)) : a.NODE_ENV !== "production" && O("Invalid template ref type:", f, `(${typeof f})`);
      };
      s ? (T.id = -1, de(T, n)) : T();
    } else
      a.NODE_ENV !== "production" && O("Invalid template ref type:", f, `(${typeof f})`);
  }
}
let It, Xe;
function Re(e, t) {
  e.appContext.config.performance && bn() && Xe.mark(`vue-${t}-${e.uid}`), a.NODE_ENV !== "production" && Ys(e, t, bn() ? Xe.now() : Date.now());
}
function Pe(e, t) {
  if (e.appContext.config.performance && bn()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end";
    Xe.mark(o), Xe.measure(
      `<${Pn(e, e.type)}> ${t}`,
      n,
      o
    ), Xe.clearMarks(n), Xe.clearMarks(o);
  }
  a.NODE_ENV !== "production" && Xs(e, t, bn() ? Xe.now() : Date.now());
}
function bn() {
  return It !== void 0 || (typeof window < "u" && window.performance ? (It = !0, Xe = window.performance) : It = !1), It;
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
    setText: p,
    setElementText: g,
    parentNode: d,
    nextSibling: E,
    setScopeId: w = Y,
    insertStaticContent: T
  } = e, D = (l, u, h, m = null, _ = null, y = null, x = void 0, N = null, v = a.NODE_ENV !== "production" && at ? !1 : !!u.dynamicChildren) => {
    if (l === u)
      return;
    l && !Rt(l, u) && (m = Qt(l), Be(l, _, y, !0), l = null), u.patchFlag === -2 && (v = !1, u.dynamicChildren = null);
    const { type: b, ref: V, shapeFlag: S } = u;
    switch (b) {
      case Jt:
        ve(l, u, h, m);
        break;
      case pe:
        z(l, u, h, m);
        break;
      case dn:
        l == null ? Q(u, h, m, x) : a.NODE_ENV !== "production" && W(l, u, h, x);
        break;
      case Ee:
        Xt(
          l,
          u,
          h,
          m,
          _,
          y,
          x,
          N,
          v
        );
        break;
      default:
        S & 1 ? he(
          l,
          u,
          h,
          m,
          _,
          y,
          x,
          N,
          v
        ) : S & 6 ? jo(
          l,
          u,
          h,
          m,
          _,
          y,
          x,
          N,
          v
        ) : S & 64 || S & 128 ? b.process(
          l,
          u,
          h,
          m,
          _,
          y,
          x,
          N,
          v,
          St
        ) : a.NODE_ENV !== "production" && O("Invalid VNode type:", b, `(${typeof b})`);
    }
    V != null && _ && lo(V, l && l.ref, y, u || l, !u);
  }, ve = (l, u, h, m) => {
    if (l == null)
      o(
        u.el = c(u.children),
        h,
        m
      );
    else {
      const _ = u.el = l.el;
      u.children !== l.children && p(_, u.children);
    }
  }, z = (l, u, h, m) => {
    l == null ? o(
      u.el = f(u.children || ""),
      h,
      m
    ) : u.el = l.el;
  }, Q = (l, u, h, m) => {
    [l.el, l.anchor] = T(
      l.children,
      u,
      h,
      m,
      l.el,
      l.anchor
    );
  }, W = (l, u, h, m) => {
    if (u.children !== l.children) {
      const _ = E(l.anchor);
      J(l), [u.el, u.anchor] = T(
        u.children,
        h,
        _,
        m
      );
    } else
      u.el = l.el, u.anchor = l.anchor;
  }, G = ({ el: l, anchor: u }, h, m) => {
    let _;
    for (; l && l !== u; )
      _ = E(l), o(l, h, m), l = _;
    o(u, h, m);
  }, J = ({ el: l, anchor: u }) => {
    let h;
    for (; l && l !== u; )
      h = E(l), i(l), l = h;
    i(u);
  }, he = (l, u, h, m, _, y, x, N, v) => {
    u.type === "svg" ? x = "svg" : u.type === "math" && (x = "mathml"), l == null ? M(
      u,
      h,
      m,
      _,
      y,
      x,
      N,
      v
    ) : Te(
      l,
      u,
      _,
      y,
      x,
      N,
      v
    );
  }, M = (l, u, h, m, _, y, x, N) => {
    let v, b;
    const { props: V, shapeFlag: S, transition: C, dirs: P } = l;
    if (v = l.el = s(
      l.type,
      y,
      V && V.is,
      V
    ), S & 8 ? g(v, l.children) : S & 16 && le(
      l.children,
      v,
      null,
      m,
      _,
      kn(l, y),
      x,
      N
    ), P && ot(l, null, m, "created"), se(v, l, l.scopeId, x, m), V) {
      for (const U in V)
        U !== "value" && !Lt(U) && r(
          v,
          U,
          null,
          V[U],
          y,
          l.children,
          m,
          _,
          Ie
        );
      "value" in V && r(v, "value", null, V.value, y), (b = V.onVnodeBeforeMount) && xe(b, m, l);
    }
    a.NODE_ENV !== "production" && (Object.defineProperty(v, "__vnode", {
      value: l,
      enumerable: !1
    }), Object.defineProperty(v, "__vueParentComponent", {
      value: m,
      enumerable: !1
    })), P && ot(l, null, m, "beforeMount");
    const L = Jl(_, C);
    L && C.beforeEnter(v), o(v, u, h), ((b = V && V.onVnodeMounted) || L || P) && de(() => {
      b && xe(b, m, l), L && C.enter(v), P && ot(l, null, m, "mounted");
    }, _);
  }, se = (l, u, h, m, _) => {
    if (h && w(l, h), m)
      for (let y = 0; y < m.length; y++)
        w(l, m[y]);
    if (_) {
      let y = _.subTree;
      if (a.NODE_ENV !== "production" && y.patchFlag > 0 && y.patchFlag & 2048 && (y = Io(y.children) || y), u === y) {
        const x = _.vnode;
        se(
          l,
          x,
          x.scopeId,
          x.slotScopeIds,
          _.parent
        );
      }
    }
  }, le = (l, u, h, m, _, y, x, N, v = 0) => {
    for (let b = v; b < l.length; b++) {
      const V = l[b] = N ? ze(l[b]) : be(l[b]);
      D(
        null,
        V,
        u,
        h,
        m,
        _,
        y,
        x,
        N
      );
    }
  }, Te = (l, u, h, m, _, y, x) => {
    const N = u.el = l.el;
    let { patchFlag: v, dynamicChildren: b, dirs: V } = u;
    v |= l.patchFlag & 16;
    const S = l.props || k, C = u.props || k;
    let P;
    if (h && it(h, !1), (P = C.onVnodeBeforeUpdate) && xe(P, h, u, l), V && ot(u, l, h, "beforeUpdate"), h && it(h, !0), a.NODE_ENV !== "production" && at && (v = 0, x = !1, b = null), b ? (ke(
      l.dynamicChildren,
      b,
      N,
      h,
      m,
      kn(u, _),
      y
    ), a.NODE_ENV !== "production" && an(l, u)) : x || Oe(
      l,
      u,
      N,
      null,
      h,
      m,
      kn(u, _),
      y,
      !1
    ), v > 0) {
      if (v & 16)
        ge(
          N,
          u,
          S,
          C,
          h,
          m,
          _
        );
      else if (v & 2 && S.class !== C.class && r(N, "class", null, C.class, _), v & 4 && r(N, "style", S.style, C.style, _), v & 8) {
        const L = u.dynamicProps;
        for (let U = 0; U < L.length; U++) {
          const B = L[U], ee = S[B], me = C[B];
          (me !== ee || B === "value") && r(
            N,
            B,
            ee,
            me,
            _,
            l.children,
            h,
            m,
            Ie
          );
        }
      }
      v & 1 && l.children !== u.children && g(N, u.children);
    } else
      !x && b == null && ge(
        N,
        u,
        S,
        C,
        h,
        m,
        _
      );
    ((P = C.onVnodeUpdated) || V) && de(() => {
      P && xe(P, h, u, l), V && ot(u, l, h, "updated");
    }, m);
  }, ke = (l, u, h, m, _, y, x) => {
    for (let N = 0; N < u.length; N++) {
      const v = l[N], b = u[N], V = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        v.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (v.type === Ee || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Rt(v, b) || // - In the case of a component, it could contain anything.
        v.shapeFlag & 70) ? d(v.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          h
        )
      );
      D(
        v,
        b,
        V,
        null,
        m,
        _,
        y,
        x,
        !0
      );
    }
  }, ge = (l, u, h, m, _, y, x) => {
    if (h !== m) {
      if (h !== k)
        for (const N in h)
          !Lt(N) && !(N in m) && r(
            l,
            N,
            h[N],
            null,
            x,
            u.children,
            _,
            y,
            Ie
          );
      for (const N in m) {
        if (Lt(N))
          continue;
        const v = m[N], b = h[N];
        v !== b && N !== "value" && r(
          l,
          N,
          b,
          v,
          x,
          u.children,
          _,
          y,
          Ie
        );
      }
      "value" in m && r(l, "value", h.value, m.value, x);
    }
  }, Xt = (l, u, h, m, _, y, x, N, v) => {
    const b = u.el = l ? l.el : c(""), V = u.anchor = l ? l.anchor : c("");
    let { patchFlag: S, dynamicChildren: C, slotScopeIds: P } = u;
    a.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (at || S & 2048) && (S = 0, v = !1, C = null), P && (N = N ? N.concat(P) : P), l == null ? (o(b, h, m), o(V, h, m), le(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      u.children || [],
      h,
      V,
      _,
      y,
      x,
      N,
      v
    )) : S > 0 && S & 64 && C && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    l.dynamicChildren ? (ke(
      l.dynamicChildren,
      C,
      h,
      _,
      y,
      x,
      N
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
      V,
      _,
      y,
      x,
      N,
      v
    );
  }, jo = (l, u, h, m, _, y, x, N, v) => {
    u.slotScopeIds = N, l == null ? u.shapeFlag & 512 ? _.ctx.activate(
      u,
      h,
      m,
      x,
      v
    ) : Ke(
      u,
      h,
      m,
      _,
      y,
      x,
      v
    ) : fe(l, u, v);
  }, Ke = (l, u, h, m, _, y, x) => {
    const N = l.component = rc(
      l,
      m,
      _
    );
    if (a.NODE_ENV !== "production" && N.type.__hmrId && Us(N), a.NODE_ENV !== "production" && (ln(l), Re(N, "mount")), Ro(l) && (N.ctx.renderer = St), a.NODE_ENV !== "production" && Re(N, "init"), cc(N), a.NODE_ENV !== "production" && Pe(N, "init"), N.asyncDep) {
      if (_ && _.registerDep(N, $), !l.el) {
        const v = N.subTree = Ae(pe);
        z(null, v, u, h);
      }
    } else
      $(
        N,
        l,
        u,
        h,
        _,
        y,
        x
      );
    a.NODE_ENV !== "production" && (cn(), Pe(N, "mount"));
  }, fe = (l, u, h) => {
    const m = u.component = l.component;
    if (ol(l, u, h))
      if (m.asyncDep && !m.asyncResolved) {
        a.NODE_ENV !== "production" && ln(u), j(m, u, h), a.NODE_ENV !== "production" && cn();
        return;
      } else
        m.next = u, $s(m.update), m.effect.dirty = !0, m.update();
    else
      u.el = l.el, m.vnode = u;
  }, $ = (l, u, h, m, _, y, x) => {
    const N = () => {
      if (l.isMounted) {
        let { next: V, bu: S, u: C, parent: P, vnode: L } = l;
        {
          const mt = wr(l);
          if (mt) {
            V && (V.el = L.el, j(l, V, x)), mt.asyncDep.then(() => {
              l.isUnmounted || N();
            });
            return;
          }
        }
        let U = V, B;
        a.NODE_ENV !== "production" && ln(V || l.vnode), it(l, !1), V ? (V.el = L.el, j(l, V, x)) : V = L, S && _t(S), (B = V.props && V.props.onVnodeBeforeUpdate) && xe(B, P, V, L), it(l, !0), a.NODE_ENV !== "production" && Re(l, "render");
        const ee = $n(l);
        a.NODE_ENV !== "production" && Pe(l, "render");
        const me = l.subTree;
        l.subTree = ee, a.NODE_ENV !== "production" && Re(l, "patch"), D(
          me,
          ee,
          // parent may have changed if it's in a teleport
          d(me.el),
          // anchor may have changed if it's in a fragment
          Qt(me),
          l,
          _,
          y
        ), a.NODE_ENV !== "production" && Pe(l, "patch"), V.el = ee.el, U === null && il(l, ee.el), C && de(C, _), (B = V.props && V.props.onVnodeUpdated) && de(
          () => xe(B, P, V, L),
          _
        ), a.NODE_ENV !== "production" && nr(l), a.NODE_ENV !== "production" && cn();
      } else {
        let V;
        const { el: S, props: C } = u, { bm: P, m: L, parent: U } = l, B = un(u);
        if (it(l, !1), P && _t(P), !B && (V = C && C.onVnodeBeforeMount) && xe(V, U, u), it(l, !0), S && Uo) {
          const ee = () => {
            a.NODE_ENV !== "production" && Re(l, "render"), l.subTree = $n(l), a.NODE_ENV !== "production" && Pe(l, "render"), a.NODE_ENV !== "production" && Re(l, "hydrate"), Uo(
              S,
              l.subTree,
              l,
              _,
              null
            ), a.NODE_ENV !== "production" && Pe(l, "hydrate");
          };
          B ? u.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !l.isUnmounted && ee()
          ) : ee();
        } else {
          a.NODE_ENV !== "production" && Re(l, "render");
          const ee = l.subTree = $n(l);
          a.NODE_ENV !== "production" && Pe(l, "render"), a.NODE_ENV !== "production" && Re(l, "patch"), D(
            null,
            ee,
            h,
            m,
            l,
            _,
            y
          ), a.NODE_ENV !== "production" && Pe(l, "patch"), u.el = ee.el;
        }
        if (L && de(L, _), !B && (V = C && C.onVnodeMounted)) {
          const ee = u;
          de(
            () => xe(V, U, ee),
            _
          );
        }
        (u.shapeFlag & 256 || U && un(U.vnode) && U.vnode.shapeFlag & 256) && l.a && de(l.a, _), l.isMounted = !0, a.NODE_ENV !== "production" && qs(l), u = h = m = null;
      }
    }, v = l.effect = new No(
      N,
      Y,
      () => Cn(b),
      l.scope
      // track it in component's effect scope
    ), b = l.update = () => {
      v.dirty && v.run();
    };
    b.id = l.uid, it(l, !0), a.NODE_ENV !== "production" && (v.onTrack = l.rtc ? (V) => _t(l.rtc, V) : void 0, v.onTrigger = l.rtg ? (V) => _t(l.rtg, V) : void 0, b.ownerInstance = l), b();
  }, j = (l, u, h) => {
    u.component = l;
    const m = l.vnode.props;
    l.vnode = u, l.next = null, Ll(l, u.props, m, h), Wl(l, u.children, h), $e(), Zo(l), He();
  }, Oe = (l, u, h, m, _, y, x, N, v = !1) => {
    const b = l && l.children, V = l ? l.shapeFlag : 0, S = u.children, { patchFlag: C, shapeFlag: P } = u;
    if (C > 0) {
      if (C & 128) {
        Ct(
          b,
          S,
          h,
          m,
          _,
          y,
          x,
          N,
          v
        );
        return;
      } else if (C & 256) {
        Mn(
          b,
          S,
          h,
          m,
          _,
          y,
          x,
          N,
          v
        );
        return;
      }
    }
    P & 8 ? (V & 16 && Ie(b, _, y), S !== b && g(h, S)) : V & 16 ? P & 16 ? Ct(
      b,
      S,
      h,
      m,
      _,
      y,
      x,
      N,
      v
    ) : Ie(b, _, y, !0) : (V & 8 && g(h, ""), P & 16 && le(
      S,
      h,
      m,
      _,
      y,
      x,
      N,
      v
    ));
  }, Mn = (l, u, h, m, _, y, x, N, v) => {
    l = l || yt, u = u || yt;
    const b = l.length, V = u.length, S = Math.min(b, V);
    let C;
    for (C = 0; C < S; C++) {
      const P = u[C] = v ? ze(u[C]) : be(u[C]);
      D(
        l[C],
        P,
        h,
        null,
        _,
        y,
        x,
        N,
        v
      );
    }
    b > V ? Ie(
      l,
      _,
      y,
      !0,
      !1,
      S
    ) : le(
      u,
      h,
      m,
      _,
      y,
      x,
      N,
      v,
      S
    );
  }, Ct = (l, u, h, m, _, y, x, N, v) => {
    let b = 0;
    const V = u.length;
    let S = l.length - 1, C = V - 1;
    for (; b <= S && b <= C; ) {
      const P = l[b], L = u[b] = v ? ze(u[b]) : be(u[b]);
      if (Rt(P, L))
        D(
          P,
          L,
          h,
          null,
          _,
          y,
          x,
          N,
          v
        );
      else
        break;
      b++;
    }
    for (; b <= S && b <= C; ) {
      const P = l[S], L = u[C] = v ? ze(u[C]) : be(u[C]);
      if (Rt(P, L))
        D(
          P,
          L,
          h,
          null,
          _,
          y,
          x,
          N,
          v
        );
      else
        break;
      S--, C--;
    }
    if (b > S) {
      if (b <= C) {
        const P = C + 1, L = P < V ? u[P].el : m;
        for (; b <= C; )
          D(
            null,
            u[b] = v ? ze(u[b]) : be(u[b]),
            h,
            L,
            _,
            y,
            x,
            N,
            v
          ), b++;
      }
    } else if (b > C)
      for (; b <= S; )
        Be(l[b], _, y, !0), b++;
    else {
      const P = b, L = b, U = /* @__PURE__ */ new Map();
      for (b = L; b <= C; b++) {
        const ce = u[b] = v ? ze(u[b]) : be(u[b]);
        ce.key != null && (a.NODE_ENV !== "production" && U.has(ce.key) && O(
          "Duplicate keys found during update:",
          JSON.stringify(ce.key),
          "Make sure keys are unique."
        ), U.set(ce.key, b));
      }
      let B, ee = 0;
      const me = C - L + 1;
      let mt = !1, ko = 0;
      const Tt = new Array(me);
      for (b = 0; b < me; b++)
        Tt[b] = 0;
      for (b = P; b <= S; b++) {
        const ce = l[b];
        if (ee >= me) {
          Be(ce, _, y, !0);
          continue;
        }
        let we;
        if (ce.key != null)
          we = U.get(ce.key);
        else
          for (B = L; B <= C; B++)
            if (Tt[B - L] === 0 && Rt(ce, u[B])) {
              we = B;
              break;
            }
        we === void 0 ? Be(ce, _, y, !0) : (Tt[we - L] = b + 1, we >= ko ? ko = we : mt = !0, D(
          ce,
          u[we],
          h,
          null,
          _,
          y,
          x,
          N,
          v
        ), ee++);
      }
      const Ko = mt ? Yl(Tt) : yt;
      for (B = Ko.length - 1, b = me - 1; b >= 0; b--) {
        const ce = L + b, we = u[ce], Bo = ce + 1 < V ? u[ce + 1].el : m;
        Tt[b] === 0 ? D(
          null,
          we,
          h,
          Bo,
          _,
          y,
          x,
          N,
          v
        ) : mt && (B < 0 || b !== Ko[B] ? gt(we, h, Bo, 2) : B--);
      }
    }
  }, gt = (l, u, h, m, _ = null) => {
    const { el: y, type: x, transition: N, children: v, shapeFlag: b } = l;
    if (b & 6) {
      gt(l.component.subTree, u, h, m);
      return;
    }
    if (b & 128) {
      l.suspense.move(u, h, m);
      return;
    }
    if (b & 64) {
      x.move(l, u, h, St);
      return;
    }
    if (x === Ee) {
      o(y, u, h);
      for (let S = 0; S < v.length; S++)
        gt(v[S], u, h, m);
      o(l.anchor, u, h);
      return;
    }
    if (x === dn) {
      G(l, u, h);
      return;
    }
    if (m !== 2 && b & 1 && N)
      if (m === 0)
        N.beforeEnter(y), o(y, u, h), de(() => N.enter(y), _);
      else {
        const { leave: S, delayLeave: C, afterLeave: P } = N, L = () => o(y, u, h), U = () => {
          S(y, () => {
            L(), P && P();
          });
        };
        C ? C(y, L, U) : U();
      }
    else
      o(y, u, h);
  }, Be = (l, u, h, m = !1, _ = !1) => {
    const {
      type: y,
      props: x,
      ref: N,
      children: v,
      dynamicChildren: b,
      shapeFlag: V,
      patchFlag: S,
      dirs: C
    } = l;
    if (N != null && lo(N, null, h, l, !0), V & 256) {
      u.ctx.deactivate(l);
      return;
    }
    const P = V & 1 && C, L = !un(l);
    let U;
    if (L && (U = x && x.onVnodeBeforeUnmount) && xe(U, u, l), V & 6)
      Fr(l.component, h, m);
    else {
      if (V & 128) {
        l.suspense.unmount(h, m);
        return;
      }
      P && ot(l, null, u, "beforeUnmount"), V & 64 ? l.type.remove(
        l,
        u,
        h,
        _,
        St,
        m
      ) : b && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (y !== Ee || S > 0 && S & 64) ? Ie(
        b,
        u,
        h,
        !1,
        !0
      ) : (y === Ee && S & 384 || !_ && V & 16) && Ie(v, u, h), m && Fn(l);
    }
    (L && (U = x && x.onVnodeUnmounted) || P) && de(() => {
      U && xe(U, u, l), P && ot(l, null, u, "unmounted");
    }, h);
  }, Fn = (l) => {
    const { type: u, el: h, anchor: m, transition: _ } = l;
    if (u === Ee) {
      a.NODE_ENV !== "production" && l.patchFlag > 0 && l.patchFlag & 2048 && _ && !_.persisted ? l.children.forEach((x) => {
        x.type === pe ? i(x.el) : Fn(x);
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
      const { leave: x, delayLeave: N } = _, v = () => x(h, y);
      N ? N(l.el, y, v) : v();
    } else
      y();
  }, Mr = (l, u) => {
    let h;
    for (; l !== u; )
      h = E(l), i(l), l = h;
    i(u);
  }, Fr = (l, u, h) => {
    a.NODE_ENV !== "production" && l.type.__hmrId && ks(l);
    const { bum: m, scope: _, update: y, subTree: x, um: N } = l;
    m && _t(m), _.stop(), y && (y.active = !1, Be(x, l, u, h)), N && de(N, u), de(() => {
      l.isUnmounted = !0;
    }, u), u && u.pendingBranch && !u.isUnmounted && l.asyncDep && !l.asyncResolved && l.suspenseId === u.pendingId && (u.deps--, u.deps === 0 && u.resolve()), a.NODE_ENV !== "production" && Js(l);
  }, Ie = (l, u, h, m = !1, _ = !1, y = 0) => {
    for (let x = y; x < l.length; x++)
      Be(l[x], u, h, m, _);
  }, Qt = (l) => l.shapeFlag & 6 ? Qt(l.component.subTree) : l.shapeFlag & 128 ? l.suspense.next() : E(l.anchor || l.el);
  let An = !1;
  const $o = (l, u, h) => {
    l == null ? u._vnode && Be(u._vnode, null, null, !0) : D(
      u._vnode || null,
      l,
      u,
      null,
      null,
      null,
      h
    ), An || (An = !0, Zo(), Qi(), An = !1), u._vnode = l;
  }, St = {
    p: D,
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
function Jl(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function an(e, t, n = !1) {
  const o = e.children, i = t.children;
  if (I(o) && I(i))
    for (let r = 0; r < o.length; r++) {
      const s = o[r];
      let c = i[r];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = i[r] = ze(i[r]), c.el = s.el), n || an(s, c)), c.type === Jt && (c.el = s.el), a.NODE_ENV !== "production" && c.type === pe && !c.el && (c.el = s.el);
    }
}
function Yl(e) {
  const t = e.slice(), n = [0];
  let o, i, r, s, c;
  const f = e.length;
  for (o = 0; o < f; o++) {
    const p = e[o];
    if (p !== 0) {
      if (i = n[n.length - 1], e[i] < p) {
        t[o] = i, n.push(o);
        continue;
      }
      for (r = 0, s = n.length - 1; r < s; )
        c = r + s >> 1, e[n[c]] < p ? r = c + 1 : s = c;
      p < e[n[r]] && (r > 0 && (t[o] = n[r - 1]), n[r] = o);
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
const Xl = (e) => e.__isTeleport, Ee = Symbol.for("v-fgt"), Jt = Symbol.for("v-txt"), pe = Symbol.for("v-cmt"), dn = Symbol.for("v-stc"), Ht = [];
let Ne = null;
function At(e = !1) {
  Ht.push(Ne = e ? null : []);
}
function Ql() {
  Ht.pop(), Ne = Ht[Ht.length - 1] || null;
}
let Bt = 1;
function di(e) {
  Bt += e;
}
function xr(e) {
  return e.dynamicChildren = Bt > 0 ? Ne || yt : null, Ql(), Bt > 0 && Ne && Ne.push(e), e;
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
function Rt(e, t) {
  return a.NODE_ENV !== "production" && t.shapeFlag & 6 && Et.has(t.type) ? (e.shapeFlag &= -257, t.shapeFlag &= -513, !1) : e.type === t.type && e.key === t.key;
}
const ec = (...e) => Dr(
  ...e
), Vr = ({ key: e }) => e ?? null, pn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? X(e) || re(e) || R(e) ? { i: ie, r: e, k: t, f: !!n } : e : null);
function H(e, t = null, n = null, o = 0, i = null, r = e === Ee ? 0 : 1, s = !1, c = !1) {
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
  return c ? (Lo(f, n), r & 128 && e.normalize(f)) : n && (f.shapeFlag |= X(n) ? 8 : 16), a.NODE_ENV !== "production" && f.key !== f.key && O("VNode created with invalid key (NaN). VNode type:", f.type), Bt > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  Ne && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (f.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  f.patchFlag !== 32 && Ne.push(f), f;
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
    return n && Lo(c, n), Bt > 0 && !r && Ne && (c.shapeFlag & 6 ? Ne[Ne.indexOf(e)] = c : Ne.push(c)), c.patchFlag |= -2, c;
  }
  if (Rr(e) && (e = e.__vccOpts), t) {
    t = tc(t);
    let { class: c, style: f } = t;
    c && !X(c) && (t.class = bo(c)), K(f) && (Qn(f) && !I(f) && (f = q({}, f)), t.style = Ye(f));
  }
  const s = X(e) ? 1 : sl(e) ? 128 : Xl(e) ? 64 : K(e) ? 4 : R(e) ? 2 : 0;
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
  return e ? Qn(e) || _r(e) ? q({}, e) : e : null;
}
function nt(e, t, n = !1, o = !1) {
  const { props: i, ref: r, patchFlag: s, children: c, transition: f } = e, p = t ? nc(i || {}, t) : i, g = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: p,
    key: p && Vr(p),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? I(r) ? r.concat(pn(t)) : [r, pn(t)] : pn(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: a.NODE_ENV !== "production" && s === -1 && I(c) ? c.map(Cr) : c,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Ee ? s === -1 ? 16 : s | 16 : s,
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
  return I(e.children) && (t.children = e.children.map(Cr)), t;
}
function co(e = " ", t = 0) {
  return Ae(Jt, null, e, t);
}
function Kn(e = "", t = !1) {
  return t ? (At(), Zl(pe, null, e)) : Ae(pe, null, e);
}
function be(e) {
  return e == null || typeof e == "boolean" ? Ae(pe) : I(e) ? Ae(
    Ee,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? ze(e) : Ae(Jt, null, String(e));
}
function ze(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : nt(e);
}
function Lo(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (I(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), Lo(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !_r(t) ? t._ctx = ie : i === 3 && ie && (ie.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    R(t) ? (t = { default: t, _ctx: ie }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [co(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function nc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const i in o)
      if (i === "class")
        t.class !== o.class && (t.class = bo([t.class, o.class]));
      else if (i === "style")
        t.style = Ye([t.style, o.style]);
      else if (Wt(i)) {
        const r = t[i], s = o[i];
        s && r !== s && !(I(r) && r.includes(s)) && (t[i] = r ? [].concat(r, s) : s);
      } else
        i !== "" && (t[i] = o[i]);
  }
  return t;
}
function xe(e, t, n, o = null) {
  ye(e, t, 7, [
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
    propsOptions: br(o, i),
    emitsOptions: ir(o, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: k,
    // inheritAttrs
    inheritAttrs: o.inheritAttrs,
    // state
    ctx: k,
    data: k,
    props: k,
    attrs: k,
    slots: k,
    refs: k,
    setupState: k,
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
let Nn, uo;
{
  const e = Eo(), t = (n, o) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(o), (r) => {
      i.length > 1 ? i.forEach((s) => s(r)) : i[0](r);
    };
  };
  Nn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => te = n
  ), uo = t(
    "__VUE_SSR_SETTERS__",
    (n) => In = n
  );
}
const Yt = (e) => {
  const t = te;
  return Nn(e), e.scope.on(), () => {
    e.scope.off(), Nn(t);
  };
}, pi = () => {
  te && te.scope.off(), Nn(null);
}, lc = /* @__PURE__ */ je("slot,component");
function fo(e, { isNativeTag: t }) {
  (lc(e) || t(e)) && O(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function Sr(e) {
  return e.vnode.shapeFlag & 4;
}
let In = !1;
function cc(e, t = !1) {
  t && uo(t);
  const { props: n, children: o } = e.vnode, i = Sr(e);
  Fl(e, n, i, t), Bl(e, o);
  const r = i ? uc(e, t) : void 0;
  return t && uo(!1), r;
}
function uc(e, t) {
  var n;
  const o = e.type;
  if (a.NODE_ENV !== "production") {
    if (o.name && fo(o.name, e.appContext.config), o.components) {
      const r = Object.keys(o.components);
      for (let s = 0; s < r.length; s++)
        fo(r[s], e.appContext.config);
    }
    if (o.directives) {
      const r = Object.keys(o.directives);
      for (let s = 0; s < r.length; s++)
        ur(r[s]);
    }
    o.compilerOptions && fc() && O(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, dr), a.NODE_ENV !== "production" && wl(e);
  const { setup: i } = o;
  if (i) {
    const r = e.setupContext = i.length > 1 ? dc(e) : null, s = Yt(e);
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
    Tr(e, t);
}
function hi(e, t, n) {
  R(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : K(t) ? (a.NODE_ENV !== "production" && Ao(t) && O(
    "setup() should not return VNodes directly - return a render function instead."
  ), a.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = qi(t), a.NODE_ENV !== "production" && xl(e)) : a.NODE_ENV !== "production" && t !== void 0 && O(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), Tr(e, n);
}
let ao;
const fc = () => !ao;
function Tr(e, t, n) {
  const o = e.type;
  if (!e.render) {
    if (!t && ao && !o.render) {
      const i = o.template || Mo(e).template;
      if (i) {
        a.NODE_ENV !== "production" && Re(e, "compile");
        const { isCustomElement: r, compilerOptions: s } = e.appContext.config, { delimiters: c, compilerOptions: f } = o, p = q(
          q(
            {
              isCustomElement: r,
              delimiters: c
            },
            s
          ),
          f
        );
        o.render = ao(i, p), a.NODE_ENV !== "production" && Pe(e, "compile");
      }
    }
    e.render = o.render || Y;
  }
  {
    const i = Yt(e);
    $e();
    try {
      Dl(e);
    } finally {
      He(), i();
    }
  }
  a.NODE_ENV !== "production" && !o.render && e.render === Y && !t && (o.template ? O(
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
      o === "object" && (I(n) ? o = "array" : re(n) && (o = "ref")), o !== "object" && O(
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
function Rn(e) {
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
function Ir(e, t = !0) {
  return R(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Pn(e, t, n = !1) {
  let o = Ir(t);
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
function Rr(e) {
  return R(e) && "__vccOpts" in e;
}
const gc = (e, t) => {
  const n = Ds(e, t, In);
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
    header(d) {
      return K(d) ? d.__isVue ? ["div", e, "VueInstance"] : re(d) ? [
        "div",
        {},
        ["span", e, g(d)],
        "<",
        c(d.value),
        ">"
      ] : Ot(d) ? [
        "div",
        {},
        ["span", e, wt(d) ? "ShallowReactive" : "Reactive"],
        "<",
        c(d),
        `>${Dt(d) ? " (readonly)" : ""}`
      ] : Dt(d) ? [
        "div",
        {},
        ["span", e, wt(d) ? "ShallowReadonly" : "Readonly"],
        "<",
        c(d),
        ">"
      ] : null : null;
    },
    hasBody(d) {
      return d && d.__isVue;
    },
    body(d) {
      if (d && d.__isVue)
        return [
          "div",
          {},
          ...r(d.$)
        ];
    }
  };
  function r(d) {
    const E = [];
    d.type.props && d.props && E.push(s("props", F(d.props))), d.setupState !== k && E.push(s("setup", d.setupState)), d.data !== k && E.push(s("data", F(d.data)));
    const w = f(d, "computed");
    w && E.push(s("computed", w));
    const T = f(d, "inject");
    return T && E.push(s("injected", T)), E.push([
      "div",
      {},
      [
        "span",
        {
          style: o.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: d }]
    ]), E;
  }
  function s(d, E) {
    return E = q({}, E), Object.keys(E).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        d
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(E).map((w) => [
          "div",
          {},
          ["span", o, w + ": "],
          c(E[w], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function c(d, E = !0) {
    return typeof d == "number" ? ["span", t, d] : typeof d == "string" ? ["span", n, JSON.stringify(d)] : typeof d == "boolean" ? ["span", o, d] : K(d) ? ["object", { object: E ? F(d) : d }] : ["span", n, String(d)];
  }
  function f(d, E) {
    const w = d.type;
    if (R(w))
      return;
    const T = {};
    for (const D in d.ctx)
      p(w, D, E) && (T[D] = d.ctx[D]);
    return T;
  }
  function p(d, E, w) {
    const T = d[w];
    if (I(T) && T.includes(E) || K(T) && E in T || d.extends && p(d.extends, E, w) || d.mixins && d.mixins.some((D) => p(D, E, w)))
      return !0;
  }
  function g(d) {
    return wt(d) ? "ShallowRef" : d.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(i) : window.devtoolsFormatters = [i];
}
const mi = "3.4.27", Ze = a.NODE_ENV !== "production" ? O : Y;
var Le = {};
const _c = "http://www.w3.org/2000/svg", Ec = "http://www.w3.org/1998/Math/MathML", Je = typeof document < "u" ? document : null, _i = Je && /* @__PURE__ */ Je.createElement("template"), bc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const i = t === "svg" ? Je.createElementNS(_c, e) : t === "mathml" ? Je.createElementNS(Ec, e) : Je.createElement(e, n ? { is: n } : void 0);
    return e === "select" && o && o.multiple != null && i.setAttribute("multiple", o.multiple), i;
  },
  createText: (e) => Je.createTextNode(e),
  createComment: (e) => Je.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Je.querySelector(e),
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
}, Nc = Symbol("_vtc");
function yc(e, t, n) {
  const o = e[Nc];
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
Le.NODE_ENV !== "production" && (Ge.name = "show");
function Pt(e, t) {
  e.style.display = t ? e[yn] : "none", e[Pr] = !t;
}
const vc = Symbol(Le.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), Oc = /(^|;)\s*display\s*:/;
function wc(e, t, n) {
  const o = e.style, i = X(n);
  let r = !1;
  if (n && !i) {
    if (t)
      if (X(t))
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
  if (I(n))
    n.forEach((o) => hn(e, t, o));
  else if (n == null && (n = ""), Le.NODE_ENV !== "production" && xc.test(n) && Ze(
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
const bi = ["Webkit", "Moz", "ms"], Bn = {};
function Vc(e, t) {
  const n = Bn[t];
  if (n)
    return n;
  let o = Vt(t);
  if (o !== "filter" && o in e)
    return Bn[t] = o;
  o = wn(o);
  for (let i = 0; i < bi.length; i++) {
    const r = bi[i] + o;
    if (r in e)
      return Bn[t] = r;
  }
  return t;
}
const Ni = "http://www.w3.org/1999/xlink";
function Dc(e, t, n, o, i) {
  if (o && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(Ni, t.slice(6, t.length)) : e.setAttributeNS(Ni, t, n);
  else {
    const r = ts(t);
    n == null || r && !Ti(n) ? e.removeAttribute(t) : e.setAttribute(t, r ? "" : n);
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
    const p = c === "OPTION" ? e.getAttribute("value") || "" : e.value, g = n ?? "";
    (p !== g || !("_value" in e)) && (e.value = g), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let f = !1;
  if (n === "" || n == null) {
    const p = typeof e[t];
    p === "boolean" ? n = Ti(n) : n == null && p === "string" ? (n = "", f = !0) : p === "number" && (n = 0, f = !0);
  }
  try {
    e[t] = n;
  } catch (p) {
    Le.NODE_ENV !== "production" && !f && Ze(
      `Failed setting prop "${t}" on <${c.toLowerCase()}>: value ${n} is invalid.`,
      p
    );
  }
  f && e.removeAttribute(t);
}
function bt(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function Sc(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
const yi = Symbol("_vei");
function Tc(e, t, n, o, i = null) {
  const r = e[yi] || (e[yi] = {}), s = r[t];
  if (o && s)
    s.value = Le.NODE_ENV !== "production" ? Oi(o, t) : o;
  else {
    const [c, f] = Ic(t);
    if (o) {
      const p = r[t] = Mc(
        Le.NODE_ENV !== "production" ? Oi(o, t) : o,
        i
      );
      bt(e, c, p, f);
    } else
      s && (Sc(e, c, s, f), r[t] = void 0);
  }
}
const vi = /(?:Once|Passive|Capture)$/;
function Ic(e) {
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
const Rc = /* @__PURE__ */ Promise.resolve(), Pc = () => Wn || (Rc.then(() => Wn = 0), Wn = Date.now());
function Mc(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    ye(
      Fc(o, n.value),
      t,
      5,
      [o]
    );
  };
  return n.value = e, n.attached = Pc(), n;
}
function Oi(e, t) {
  return R(e) || I(e) ? e : (Ze(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), Y);
}
function Fc(e, t) {
  if (I(t)) {
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
  const p = i === "svg";
  t === "class" ? yc(e, o, p) : t === "style" ? wc(e, n, o) : Wt(t) ? gn(t) || Tc(e, t, n, o, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Lc(e, t, o, p)) ? Cc(
    e,
    t,
    o,
    r,
    s,
    c,
    f
  ) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), Dc(e, t, o, p));
};
function Lc(e, t, n, o) {
  if (o)
    return !!(t === "innerHTML" || t === "textContent" || t in e && wi(t) && R(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return wi(t) && X(n) ? !1 : t in e;
}
const xi = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return I(t) ? (n) => _t(t, n) : t;
};
function jc(e) {
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
    bt(e, t ? "change" : "input", (s) => {
      if (s.target.composing)
        return;
      let c = e.value;
      n && (c = c.trim()), r && (c = qn(c)), e[Gn](c);
    }), n && bt(e, "change", () => {
      e.value = e.value.trim();
    }), t || (bt(e, "compositionstart", jc), bt(e, "compositionend", Vi), bt(e, "change", Vi));
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
}, kc = /* @__PURE__ */ q({ patchProp: Ac }, bc);
let Di;
function Kc() {
  return Di || (Di = ql(kc));
}
const Bc = (...e) => {
  const t = Kc().createApp(...e);
  Le.NODE_ENV !== "production" && (Gc(t), qc(t));
  const { mount: n } = t;
  return t.mount = (o) => {
    const i = zc(o);
    if (!i)
      return;
    const r = t._component;
    !R(r) && !r.render && !r.template && (r.template = i.innerHTML), i.innerHTML = "";
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
  if (X(e)) {
    const t = document.querySelector(e);
    return Le.NODE_ENV !== "production" && !t && Ze(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return Le.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && Ze(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
var Jc = {};
function Yc() {
  mc();
}
Jc.NODE_ENV !== "production" && Yc();
const { Frame: Xc, GIF: Qc } = ImageScript;
async function Zc(e, t) {
  let n;
  const { width: o, height: i } = e[0].imageData, { loop: r = -1 } = t, s = new Uint8ClampedArray(o * i * 4), c = [];
  for (let d of e) {
    const E = d.imageData, w = eu(E, n?.imageData, s);
    if (w === 0)
      c[c.length - 1].duration += d.duration;
    else {
      const T = new Xc(w.diffImageData.width, w.diffImageData.height, d.duration, w.x, w.y);
      T.bitmap = w.diffImageData.data, c.push(T), n = d;
    }
    await tu();
  }
  const p = await new Qc(c, r).encode(92);
  return URL.createObjectURL(new Blob([p], { type: "image/gif" }));
}
function eu(e, t, n) {
  if (!t)
    return { x: 0, y: 0, diffImageData: e };
  const { width: o, height: i } = e, r = 5;
  let s = [o, i], c = [0, 0];
  const f = e.data, p = t.data;
  for (let w = 0; w < o; w++)
    for (let T = 0; T < i; T++) {
      const D = (T * o + w) * 4;
      Math.max(
        Math.abs(f[D] - p[D]),
        Math.abs(f[D + 1] - p[D + 1]),
        Math.abs(f[D + 2] - p[D + 2]),
        Math.abs(f[D + 3] - p[D + 3])
      ) > r ? (w < s[0] ? s[0] = w : w > c[0] && (c[0] = w), T < s[1] ? s[1] = T : T > c[1] && (c[1] = T), n[D] = f[D], n[D + 1] = f[D + 1], n[D + 2] = f[D + 2], n[D + 3] = f[D + 3]) : n.fill(0, D, D + 4);
    }
  const g = c[0] - s[0] + 1, d = c[1] - s[1] + 1;
  if (g <= 0 || d <= 0)
    return 0;
  const E = new ImageData(g, d);
  if (g === o && d === i)
    E.data.set(n);
  else
    for (let w = 0; w < d; w++) {
      const T = (s[1] + w) * o * 4 + s[0] * 4;
      E.data.set(n.subarray(T, T + g * 4), w * g * 4);
    }
  return {
    x: s[0],
    y: s[1],
    diffImageData: E
  };
}
async function tu() {
  return new Promise((e) => requestAnimationFrame(e));
}
const nu = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, i] of t)
    n[o] = i;
  return n;
}, ou = {
  props: [],
  data() {
    return {
      createdBlobURLs: /* @__PURE__ */ new Set(),
      video: null,
      showing: !1,
      tool: "",
      result: null,
      time: 0,
      gifTime: [0, 0],
      gifLoop: !0,
      gifScale: 1,
      gifRecording: !1,
      gifEncoding: !1,
      rangeSelector: !1,
      rangeOpt: { x: 0, y: 0, width: 500, height: 500 },
      x: 0,
      y: 0,
      saveableSettings: ["gifTime", "gifLoop", "gifScale", "rangeSelector", "rangeOpt"]
    };
  },
  watch: {
    rangeSelector(e) {
      const t = this.video;
      e ? t.classList.add("jia-webvideo-tools-abs6r98e54aw3e") : t.classList.remove("jia-webvideo-tools-abs6r98e54aw3e");
    }
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
    rangeSelectorStyle() {
      const e = this.video, t = this.videoBound(), n = t.width / e.videoWidth, o = t.height / e.videoHeight;
      return {
        width: n * this.rangeOpt.width + "px",
        height: o * this.rangeOpt.height + "px",
        left: t.left + this.rangeOpt.x * n + "px",
        top: t.top + this.rangeOpt.y * o + "px"
      };
    },
    show(e, t, n, o = this.tool) {
      if (this.video = n, !n) {
        this.hide();
        return;
      }
      if (o == "screenshot") {
        this.showing = !1, this.screenshot(!1);
        return;
      } else
        this.showing = "toolbar";
      this.tool = o, this.time = this.getTime(), this.x = e, this.y = t;
    },
    hide() {
      this.showing = !1;
      for (let e of this.createdBlobURLs)
        URL.revokeObjectURL(e);
      this.rangeSelector = !1, this.stopRecordGIF();
    },
    timeOffset(e) {
      this.video && (this.video.paused || this.video.pause(), this.setTime(this.video.currentTime + e * (1 / 23)));
    },
    updateCanvas(e) {
      const t = this.video, n = this.$refs.canvas;
      if (e) {
        const o = this.rangeOpt;
        n.ctx.drawImage(t, o.x, o.y, o.width, o.height, 0, 0, n.width, n.height);
      } else
        n.ctx.drawImage(t, 0, 0, n.width, n.height);
    },
    screenshot(e = this.rangeSelector) {
      this.video && (this.canvasFitVideo(1, e), this.updateCanvas(e), this.result = "canvas", this.showing = "result", this.saveSetting());
    },
    wheelNumber(e, t) {
      e.preventDefault(), e.stopPropagation();
      const n = e.target;
      if (n.disabled)
        return;
      let o = Number(n.value), i = Number(n.max);
      Number.isSafeInteger(o) || (o = 0), o += e.wheelDeltaY * (e.shiftKey ? 10 : 1), o < 0 && (o = 0), o > i && (o = i), this.rangeOpt[t] = o;
    },
    wheelTime(e) {
      e.preventDefault(), e.stopPropagation(), e.wheelDeltaY > 0 ? this.timeOffset(1) : this.timeOffset(-1);
    },
    async startRecordGIF() {
      const e = this.video;
      if (!e)
        return;
      if (!e.src.startsWith("blob")) {
        const o = new URL(e.src);
        if (o.host !== location.host && !e.hasAttribute("crossOrigin") && e.setAttribute("crossOrigin", "anonymous"), location.protocol !== "http:" && o.protocol !== location.protocol) {
          const i = e.playbackRate;
          o.protocol = location.protocol, e.src = o.toString(), e.playbackRate = i;
        }
      }
      if (this.gifTime[0] >= this.gifTime[1]) {
        alert("请选择正确的时间范围");
        return;
      }
      const t = this.$refs.canvas, n = this.rangeSelector;
      t.style["aspect-ratio"] = t.width / t.height, this.saveSetting(), e.pause();
      try {
        this.gifRecording = !0, this.canvasFitVideo(this.gifScale ?? 1, n);
        const o = [], i = 1e3 / 24;
        e.currentTime = this.gifTime[0];
        let r = 0;
        const s = this;
        if (await new Promise(async (f, p) => {
          function g() {
            if (e.currentTime > s.gifTime[1] || !s.gifRecording) {
              e.pause(), s.gifRecording ? f() : p("abort");
              return;
            }
            s.updateCanvas(n);
            const d = performance.now(), E = d - r;
            if (o.length && (o[o.length - 1].duration = E, E < i - 4)) {
              requestAnimationFrame(g);
              return;
            }
            const w = t.ctx.getImageData(0, 0, t.width, t.height);
            o.push({ imageData: w, duration: i }), r = d, requestAnimationFrame(g);
          }
          await iu(100), await e.play(), g();
        }), o.length < 2)
          throw "视频太短，无法生成gif";
        this.gifRecording = !1, this.gifEncoding = !0, this.$forceUpdate();
        const c = await Zc(o, {
          loop: this.gifLoop ? -1 : 0
        });
        this.createdBlobURLs.add(c), this.result = "img", this.showing = "result", this.$refs.img.src = c;
      } catch (o) {
        console.error(o), o !== "abort" && alert(`Failed to record gif: ${o.message}`);
      } finally {
        this.stopRecordGIF();
      }
    },
    stopRecordGIF() {
      this.gifEncoding = !1, this.gifRecording = !1;
    },
    canvasFitVideo(e = 1, t = !1) {
      const n = this.video, o = this.$refs.canvas;
      t ? (o.width = Math.floor(this.rangeOpt.width * e), o.height = Math.floor(this.rangeOpt.height * e)) : (o.width = Math.floor(n.videoWidth * e), o.height = Math.floor(n.videoHeight * e)), o.style["aspect-ratio"] = o.width / o.height;
    },
    fitInputValue(e) {
      return { width: String(e).length / 1.8 + "em" };
    },
    saveSetting() {
      const e = {
        lastLocation: location.href
      };
      for (let t of this.saveableSettings) {
        if (!(t in this))
          throw `setting "${t} not defined"`;
        e[t] = this[t];
      }
      localStorage.setItem("jia-webvideo-tools", JSON.stringify(e));
    },
    loadSetting() {
      let e = JSON.parse(localStorage.getItem("jia-webvideo-tools") || "{}");
      e.lastLocation !== location.href && (e = {});
      for (let t of this.saveableSettings)
        t in e && (this[t] = e[t]);
    }
  },
  mounted() {
    this.$refs.canvas.ctx = this.$refs.canvas.getContext("2d", { willReadFrequently: !0 }), this.$refs.canvas.ctx.imageSmoothingQuality = "high", this.wheelEvent = (e) => {
      this.$forceUpdate();
    }, window.addEventListener("wheel", this.wheelEvent), this.loadSetting();
  },
  unmounted() {
    window.removeEventListener("wheel", this.wheelEvent);
  }
};
async function iu(e) {
  return new Promise((t) => setTimeout(t, e));
}
const ru = ["actived"], su = ["actived"], lu = { id: "time_tool" }, cu = ["value"], uu = {
  key: 0,
  id: "row1"
}, fu = ["actived"], au = { title: "GIF缩放" }, du = {
  title: "正在录制",
  class: "fadeLoop"
}, pu = {
  title: "正在编码",
  class: "fadeLoop"
}, hu = {
  id: "row2",
  style: { display: "flex" }
}, gu = ["max"], mu = ["max"], _u = ["max", "disabled"], Eu = ["max", "disabled"], bu = { ref: "canvas" }, Nu = { ref: "img" };
function yu(e, t, n, o, i, r) {
  return At(), sn(Ee, null, [
    i.showing && i.rangeSelector ? (At(), sn("div", {
      key: 0,
      id: "range_selector",
      style: Ye(r.rangeSelectorStyle())
    }, null, 4)) : Kn("", !0),
    i.showing == "toolbar" ? (At(), sn("div", {
      key: 1,
      id: "jia-video-tool",
      style: Ye({ left: i.x + "px", top: i.y + "px" }),
      onDrag: t[25] || (t[25] = () => {
      })
    }, [
      H("div", null, [
        H("div", {
          title: "截图",
          onClick: t[0] || (t[0] = (s) => r.screenshot()),
          opt: ""
        }, "📷"),
        H("div", {
          title: "截取GIF",
          actived: i.tool == "gif",
          onClick: t[1] || (t[1] = (s) => i.tool = i.tool === "gif" ? "" : "gif"),
          opt: ""
        }, " ✂", 8, ru),
        H("div", {
          title: "框选区域",
          opt: "",
          actived: i.rangeSelector,
          onClick: t[2] || (t[2] = (s) => i.rangeSelector = !i.rangeSelector)
        }, " 🔲", 8, su),
        H("div", lu, [
          H("div", {
            title: "时间微调←",
            onClick: t[3] || (t[3] = (s) => r.timeOffset(-1)),
            opt: ""
          }, "◀️"),
          H("div", {
            title: "时间微调→",
            onClick: t[4] || (t[4] = (s) => r.timeOffset(1)),
            opt: ""
          }, "▶️"),
          H("input", {
            title: "当前视频时间（秒）",
            value: i.time,
            type: "text",
            onChange: t[5] || (t[5] = (s) => r.setTime(s.target.value)),
            onWheel: t[6] || (t[6] = (s) => r.wheelTime(s)),
            style: Ye(r.fitInputValue(i.time))
          }, null, 44, cu)
        ]),
        H("div", {
          onClick: t[7] || (t[7] = (...s) => r.hide && r.hide(...s)),
          opt: ""
        }, "❌")
      ]),
      i.tool == "gif" ? (At(), sn("div", uu, [
        H("div", {
          title: "设置开始时间",
          opt: "",
          onClick: t[8] || (t[8] = (s) => i.gifTime[0] = r.getTime())
        }, "⏺️"),
        H("div", {
          title: "设置结束时间",
          opt: "",
          onClick: t[9] || (t[9] = (s) => i.gifTime[1] = r.getTime())
        }, "⏹️"),
        H("div", null, [
          ae(H("input", {
            "onUpdate:modelValue": t[10] || (t[10] = (s) => i.gifTime[0] = s),
            placeholder: "start",
            style: Ye(r.fitInputValue(i.gifTime[0])),
            onDblclick: t[11] || (t[11] = (s) => r.setTime(r.tText(i.gifTime[0])))
          }, null, 36), [
            [
              rt,
              i.gifTime[0],
              void 0,
              { number: !0 }
            ]
          ])
        ]),
        H("div", null, [
          ae(H("input", {
            "onUpdate:modelValue": t[12] || (t[12] = (s) => i.gifTime[1] = s),
            placeholder: "end",
            style: Ye(r.fitInputValue(i.gifTime[1])),
            onDblclick: t[13] || (t[13] = (s) => r.setTime(r.tText(i.gifTime[1])))
          }, null, 36), [
            [
              rt,
              i.gifTime[1],
              void 0,
              { number: !0 }
            ]
          ])
        ]),
        H("div", {
          title: "GIF循环",
          opt: "",
          actived: i.gifLoop,
          onClick: t[14] || (t[14] = (s) => i.gifLoop = !i.gifLoop)
        }, "🔁", 8, fu),
        H("div", au, [
          co("🔍"),
          ae(H("input", {
            type: "number",
            max: "1",
            min: "0.1",
            step: "0.1",
            "onUpdate:modelValue": t[15] || (t[15] = (s) => i.gifScale = s),
            style: { width: "2.5em" }
          }, null, 512), [
            [
              rt,
              i.gifScale,
              void 0,
              { number: !0 }
            ]
          ])
        ]),
        ae(H("div", {
          title: "开始录制",
          opt: "",
          onClick: t[16] || (t[16] = (...s) => r.startRecordGIF && r.startRecordGIF(...s))
        }, "✅ ", 512), [
          [Ge, !i.gifEncoding && !i.gifRecording]
        ]),
        ae(H("div", du, "🎦", 512), [
          [Ge, i.gifRecording]
        ]),
        ae(H("div", pu, "🕒", 512), [
          [Ge, i.gifEncoding]
        ])
      ])) : Kn("", !0),
      ae(H("div", hu, [
        co(" 范围: "),
        ae(H("input", {
          title: "x(滚轮调整)",
          placeholder: "x",
          "onUpdate:modelValue": t[17] || (t[17] = (s) => i.rangeOpt.x = s),
          type: "number",
          min: "0",
          step: "1",
          max: i.video.videoWidth - i.rangeOpt.width,
          onWheel: t[18] || (t[18] = (s) => r.wheelNumber(s, "x"))
        }, null, 40, gu), [
          [
            rt,
            i.rangeOpt.x,
            void 0,
            { number: !0 }
          ]
        ]),
        ae(H("input", {
          title: "y(滚轮调整)",
          placeholder: "y",
          "onUpdate:modelValue": t[19] || (t[19] = (s) => i.rangeOpt.y = s),
          type: "number",
          min: "0",
          step: "1",
          max: i.video.videoHeight - i.rangeOpt.height,
          onWheel: t[20] || (t[20] = (s) => r.wheelNumber(s, "y"))
        }, null, 40, mu), [
          [
            rt,
            i.rangeOpt.y,
            void 0,
            { number: !0 }
          ]
        ]),
        ae(H("input", {
          title: "width(滚轮调整)",
          placeholder: "width",
          "onUpdate:modelValue": t[21] || (t[21] = (s) => i.rangeOpt.width = s),
          type: "number",
          max: i.video.videoWidth - i.rangeOpt.x + 1,
          onWheel: t[22] || (t[22] = (s) => r.wheelNumber(s, "width")),
          disabled: i.gifRecording,
          min: "0",
          step: "1"
        }, null, 40, _u), [
          [
            rt,
            i.rangeOpt.width,
            void 0,
            { number: !0 }
          ]
        ]),
        ae(H("input", {
          title: "height(滚轮调整)",
          placeholder: "height",
          "onUpdate:modelValue": t[23] || (t[23] = (s) => i.rangeOpt.height = s),
          type: "number",
          max: i.video.videoHeight - i.rangeOpt.y + 1,
          disabled: i.gifRecording,
          onWheel: t[24] || (t[24] = (s) => r.wheelNumber(s, "height")),
          min: "0",
          step: "1"
        }, null, 40, Eu), [
          [
            rt,
            i.rangeOpt.height,
            void 0,
            { number: !0 }
          ]
        ])
      ], 512), [
        [Ge, i.rangeSelector]
      ])
    ], 36)) : Kn("", !0),
    ae(H("dialog", {
      ref: "dialog",
      onClick: t[26] || (t[26] = Uc((...s) => r.hide && r.hide(...s), ["left"]))
    }, [
      ae(H("canvas", bu, null, 512), [
        [Ge, i.result === "canvas"]
      ]),
      ae(H("img", Nu, null, 512), [
        [Ge, i.result === "img"]
      ])
    ], 512), [
      [Ge, i.showing == "result"]
    ])
  ], 64);
}
const vu = /* @__PURE__ */ nu(ou, [["render", yu], ["__scopeId", "data-v-3fd5322d"]]), Ou = Bc(vu), po = document.createElement("div");
po.style = "position:fixed;top:0;left:0;z-index:2147483647;font-size: 12px!important;";
let Ut, Nt;
window.addEventListener("mousedown", (e) => {
  if (!(e.button === 2 && e.altKey))
    return;
  e.preventDefault(), e.stopPropagation(), Nt && !document.contains(Nt) && (Nt = null);
  let t = e.target, n;
  if (t.localName === "video" ? n = t : n = t.querySelector("video"), !n) {
    let o = 5;
    for (; o-- && (t = t.parentNode, !(t === document || (n = t.querySelector("video"), n))); )
      ;
  }
  n ? (Nt = n, Ut || (document.body.appendChild(po), Ut = Ou.mount(po)), Ut.show(e.clientX, e.clientY, n, e.shiftKey ? void 0 : "screenshot")) : n = Nt;
});
document.addEventListener("contextmenu", (e) => {
  !Ut || !Ut.showing || !e.altKey || (e.preventDefault(), e.stopPropagation());
});
window.addEventListener("keydown", (e) => {
  if (!e.code || !e.code.startsWith("Arrow") || !(e.ctrlKey || e.shiftKey) || e.repeat)
    return;
  let t, n;
  const o = [...document.querySelectorAll("video")].filter((i) => (i === Nt && (n = i), i.duration >= 300));
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
