(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode("#jia-video-tool[data-v-dee80196]{position:fixed;border:1px solid #ccc;background-color:#999;border-radius:.3em}#jia-video-tool [opt][data-v-dee80196]{user-select:none;cursor:pointer;padding:0 .1em;vertical-align:middle}#jia-video-tool [opt][data-v-dee80196]:hover,#jia-video-tool [opt][actived=true][data-v-dee80196]{background-color:#333}#jia-video-tool>div[data-v-dee80196]{padding:.2em;display:flex}#jia-video-tool>div div[data-v-dee80196]{word-wrap:nowrap;word-break:keep-all;display:inline-block}#jia-video-tool #row2>input[data-v-dee80196]{width:4em}#jia-video-tool input[data-v-dee80196]{min-width:3em}#range_selector[data-v-dee80196]{border:2px dashed #6d8500;box-shadow:0 0 0 100vmax #000a;position:fixed;pointer-events:none}dialog[data-v-dee80196]{position:fixed;display:flex;padding:0;top:0;left:0;justify-content:center;border:0;max-width:100vw;max-height:100vh;align-items:center;width:100%;height:100%;background:#000000b4}dialog canvas[data-v-dee80196],dialog img[data-v-dee80196]{max-width:90%;max-height:90%;border:2px solid #000}.fadeLoop[data-v-dee80196]{animation:fadeLoop-dee80196 1s infinite}@keyframes fadeLoop-dee80196{0%{opacity:1}50%{opacity:0}to{opacity:1}}")),document.head.appendChild(e)}}catch(d){console.error("vite-plugin-css-injected-by-js",d)}})();
/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Fe(e, t) {
  const n = new Set(e.split(","));
  return t ? (o) => n.has(o.toLowerCase()) : (o) => n.has(o);
}
const k = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, _t = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], J = () => {
}, Ir = () => !1, kt = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), dn = (e) => e.startsWith("onUpdate:"), z = Object.assign, fo = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Pr = Object.prototype.hasOwnProperty, F = (e, t) => Pr.call(e, t), C = Array.isArray, Et = (e) => En(e) === "[object Map]", Mr = (e) => En(e) === "[object Set]", T = (e) => typeof e == "function", X = (e) => typeof e == "string", Kt = (e) => typeof e == "symbol", B = (e) => e !== null && typeof e == "object", ao = (e) => (B(e) || T(e)) && T(e.then) && T(e.catch), Fr = Object.prototype.toString, En = (e) => Fr.call(e), po = (e) => En(e).slice(8, -1), Ar = (e) => En(e) === "[object Object]", ho = (e) => X(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Mt = /* @__PURE__ */ Fe(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), jr = /* @__PURE__ */ Fe(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), Nn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Lr = /-(\w)/g, Ot = Nn((e) => e.replace(Lr, (t, n) => n ? n.toUpperCase() : "")), $r = /\B([A-Z])/g, Xe = Nn(
  (e) => e.replace($r, "-$1").toLowerCase()
), bn = Nn((e) => e.charAt(0).toUpperCase() + e.slice(1)), ot = Nn((e) => e ? `on${bn(e)}` : ""), ft = (e, t) => !Object.is(e, t), ht = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, Vi = (e, t, n, o = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: o,
    value: n
  });
}, Bn = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Ko;
const go = () => Ko || (Ko = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function qe(e) {
  if (C(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], i = X(o) ? Kr(o) : qe(o);
      if (i)
        for (const r in i)
          t[r] = i[r];
    }
    return t;
  } else if (X(e) || B(e))
    return e;
}
const Hr = /;(?![^(]*\))/g, Ur = /:([^]+)/, kr = /\/\*[^]*?\*\//g;
function Kr(e) {
  const t = {};
  return e.replace(kr, "").split(Hr).forEach((n) => {
    if (n) {
      const o = n.split(Ur);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function mo(e) {
  let t = "";
  if (X(e))
    t = e;
  else if (C(e))
    for (let n = 0; n < e.length; n++) {
      const o = mo(e[n]);
      o && (t += o + " ");
    }
  else if (B(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Br = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Wr = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", Gr = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", qr = /* @__PURE__ */ Fe(Br), zr = /* @__PURE__ */ Fe(Wr), Yr = /* @__PURE__ */ Fe(Gr), Jr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Xr = /* @__PURE__ */ Fe(Jr);
function Di(e) {
  return !!e || e === "";
}
/**
* @vue/reactivity v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Qe(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let me;
class Qr {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = me, !t && me && (this.index = (me.scopes || (me.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = me;
      try {
        return me = this, t();
      } finally {
        me = n;
      }
    } else
      process.env.NODE_ENV !== "production" && Qe("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    me = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    me = this.parent;
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
function Zr(e, t = me) {
  t && t.active && t.effects.push(e);
}
function es() {
  return me;
}
let rt;
class vo {
  constructor(t, n, o, i) {
    this.fn = t, this.trigger = n, this.scheduler = o, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, Zr(this, i);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, Ae();
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t];
        if (n.computed && (ts(n.computed), this._dirtyLevel >= 4))
          break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), je();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let t = Ye, n = rt;
    try {
      return Ye = !0, rt = this, this._runnings++, Bo(this), this.fn();
    } finally {
      Wo(this), this._runnings--, rt = n, Ye = t;
    }
  }
  stop() {
    this.active && (Bo(this), Wo(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function ts(e) {
  return e.value;
}
function Bo(e) {
  e._trackId++, e._depsLength = 0;
}
function Wo(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++)
      Ci(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function Ci(e, t) {
  const n = e.get(t);
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup());
}
let Ye = !0, Wn = 0;
const Ti = [];
function Ae() {
  Ti.push(Ye), Ye = !1;
}
function je() {
  const e = Ti.pop();
  Ye = e === void 0 ? !0 : e;
}
function _o() {
  Wn++;
}
function Eo() {
  for (Wn--; !Wn && Gn.length; )
    Gn.shift()();
}
function Si(e, t, n) {
  var o;
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const i = e.deps[e._depsLength];
    i !== t ? (i && Ci(i, e), e.deps[e._depsLength++] = t) : e._depsLength++, process.env.NODE_ENV !== "production" && ((o = e.onTrack) == null || o.call(e, z({ effect: e }, n)));
  }
}
const Gn = [];
function Ri(e, t, n) {
  var o;
  _o();
  for (const i of e.keys()) {
    let r;
    i._dirtyLevel < t && (r ?? (r = e.get(i) === i._trackId)) && (i._shouldSchedule || (i._shouldSchedule = i._dirtyLevel === 0), i._dirtyLevel = t), i._shouldSchedule && (r ?? (r = e.get(i) === i._trackId)) && (process.env.NODE_ENV !== "production" && ((o = i.onTrigger) == null || o.call(i, z({ effect: i }, n))), i.trigger(), (!i._runnings || i.allowRecurse) && i._dirtyLevel !== 2 && (i._shouldSchedule = !1, i.scheduler && Gn.push(i.scheduler)));
  }
  Eo();
}
const Ii = (e, t) => {
  const n = /* @__PURE__ */ new Map();
  return n.cleanup = e, n.computed = t, n;
}, qn = /* @__PURE__ */ new WeakMap(), st = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), zn = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
function ee(e, t, n) {
  if (Ye && rt) {
    let o = qn.get(e);
    o || qn.set(e, o = /* @__PURE__ */ new Map());
    let i = o.get(n);
    i || o.set(n, i = Ii(() => o.delete(n))), Si(
      rt,
      i,
      process.env.NODE_ENV !== "production" ? {
        target: e,
        type: t,
        key: n
      } : void 0
    );
  }
}
function De(e, t, n, o, i, r) {
  const s = qn.get(e);
  if (!s)
    return;
  let c = [];
  if (t === "clear")
    c = [...s.values()];
  else if (n === "length" && C(e)) {
    const u = Number(o);
    s.forEach((a, h) => {
      (h === "length" || !Kt(h) && h >= u) && c.push(a);
    });
  } else
    switch (n !== void 0 && c.push(s.get(n)), t) {
      case "add":
        C(e) ? ho(n) && c.push(s.get("length")) : (c.push(s.get(st)), Et(e) && c.push(s.get(zn)));
        break;
      case "delete":
        C(e) || (c.push(s.get(st)), Et(e) && c.push(s.get(zn)));
        break;
      case "set":
        Et(e) && c.push(s.get(st));
        break;
    }
  _o();
  for (const u of c)
    u && Ri(
      u,
      4,
      process.env.NODE_ENV !== "production" ? {
        target: e,
        type: t,
        key: n,
        newValue: o,
        oldValue: i,
        oldTarget: r
      } : void 0
    );
  Eo();
}
const ns = /* @__PURE__ */ Fe("__proto__,__v_isRef,__isVue"), Pi = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Kt)
), Go = /* @__PURE__ */ os();
function os() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const o = M(this);
      for (let r = 0, s = this.length; r < s; r++)
        ee(o, "get", r + "");
      const i = o[t](...n);
      return i === -1 || i === !1 ? o[t](...n.map(M)) : i;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      Ae(), _o();
      const o = M(this)[t].apply(this, n);
      return Eo(), je(), o;
    };
  }), e;
}
function is(e) {
  Kt(e) || (e = String(e));
  const t = M(this);
  return ee(t, "has", e), t.hasOwnProperty(e);
}
class Mi {
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
      return o === (i ? r ? Ui : Hi : r ? $i : Li).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
    const s = C(t);
    if (!i) {
      if (s && F(Go, n))
        return Reflect.get(Go, n, o);
      if (n === "hasOwnProperty")
        return is;
    }
    const c = Reflect.get(t, n, o);
    return (Kt(n) ? Pi.has(n) : ns(n)) || (i || ee(t, "get", n), r) ? c : oe(c) ? s && ho(n) ? c : c.value : B(c) ? i ? ki(c) : bo(c) : c;
  }
}
class Fi extends Mi {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, i) {
    let r = t[n];
    if (!this._isShallow) {
      const u = wt(r);
      if (!bt(o) && !wt(o) && (r = M(r), o = M(o)), !C(t) && oe(r) && !oe(o))
        return u ? !1 : (r.value = o, !0);
    }
    const s = C(t) && ho(n) ? Number(n) < t.length : F(t, n), c = Reflect.set(t, n, o, i);
    return t === M(i) && (s ? ft(o, r) && De(t, "set", n, o, r) : De(t, "add", n, o)), c;
  }
  deleteProperty(t, n) {
    const o = F(t, n), i = t[n], r = Reflect.deleteProperty(t, n);
    return r && o && De(t, "delete", n, void 0, i), r;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!Kt(n) || !Pi.has(n)) && ee(t, "has", n), o;
  }
  ownKeys(t) {
    return ee(
      t,
      "iterate",
      C(t) ? "length" : st
    ), Reflect.ownKeys(t);
  }
}
class Ai extends Mi {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return process.env.NODE_ENV !== "production" && Qe(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return process.env.NODE_ENV !== "production" && Qe(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const rs = /* @__PURE__ */ new Fi(), ss = /* @__PURE__ */ new Ai(), ls = /* @__PURE__ */ new Fi(
  !0
), cs = /* @__PURE__ */ new Ai(!0), No = (e) => e, yn = (e) => Reflect.getPrototypeOf(e);
function Jt(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const i = M(e), r = M(t);
  n || (ft(t, r) && ee(i, "get", t), ee(i, "get", r));
  const { has: s } = yn(i), c = o ? No : n ? Oo : yo;
  if (s.call(i, t))
    return c(e.get(t));
  if (s.call(i, r))
    return c(e.get(r));
  e !== i && e.get(t);
}
function Xt(e, t = !1) {
  const n = this.__v_raw, o = M(n), i = M(e);
  return t || (ft(e, i) && ee(o, "has", e), ee(o, "has", i)), e === i ? n.has(e) : n.has(e) || n.has(i);
}
function Qt(e, t = !1) {
  return e = e.__v_raw, !t && ee(M(e), "iterate", st), Reflect.get(e, "size", e);
}
function qo(e) {
  e = M(e);
  const t = M(this);
  return yn(t).has.call(t, e) || (t.add(e), De(t, "add", e, e)), this;
}
function zo(e, t) {
  t = M(t);
  const n = M(this), { has: o, get: i } = yn(n);
  let r = o.call(n, e);
  r ? process.env.NODE_ENV !== "production" && ji(n, o, e) : (e = M(e), r = o.call(n, e));
  const s = i.call(n, e);
  return n.set(e, t), r ? ft(t, s) && De(n, "set", e, t, s) : De(n, "add", e, t), this;
}
function Yo(e) {
  const t = M(this), { has: n, get: o } = yn(t);
  let i = n.call(t, e);
  i ? process.env.NODE_ENV !== "production" && ji(t, n, e) : (e = M(e), i = n.call(t, e));
  const r = o ? o.call(t, e) : void 0, s = t.delete(e);
  return i && De(t, "delete", e, void 0, r), s;
}
function Jo() {
  const e = M(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? Et(e) ? new Map(e) : new Set(e) : void 0, o = e.clear();
  return t && De(e, "clear", void 0, void 0, n), o;
}
function Zt(e, t) {
  return function(o, i) {
    const r = this, s = r.__v_raw, c = M(s), u = t ? No : e ? Oo : yo;
    return !e && ee(c, "iterate", st), s.forEach((a, h) => o.call(i, u(a), u(h), r));
  };
}
function en(e, t, n) {
  return function(...o) {
    const i = this.__v_raw, r = M(i), s = Et(r), c = e === "entries" || e === Symbol.iterator && s, u = e === "keys" && s, a = i[e](...o), h = n ? No : t ? Oo : yo;
    return !t && ee(
      r,
      "iterate",
      u ? zn : st
    ), {
      // iterator protocol
      next() {
        const { value: d, done: _ } = a.next();
        return _ ? { value: d, done: _ } : {
          value: c ? [h(d[0]), h(d[1])] : h(d),
          done: _
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function ke(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      Qe(
        `${bn(e)} operation ${n}failed: target is readonly.`,
        M(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function us() {
  const e = {
    get(r) {
      return Jt(this, r);
    },
    get size() {
      return Qt(this);
    },
    has: Xt,
    add: qo,
    set: zo,
    delete: Yo,
    clear: Jo,
    forEach: Zt(!1, !1)
  }, t = {
    get(r) {
      return Jt(this, r, !1, !0);
    },
    get size() {
      return Qt(this);
    },
    has: Xt,
    add: qo,
    set: zo,
    delete: Yo,
    clear: Jo,
    forEach: Zt(!1, !0)
  }, n = {
    get(r) {
      return Jt(this, r, !0);
    },
    get size() {
      return Qt(this, !0);
    },
    has(r) {
      return Xt.call(this, r, !0);
    },
    add: ke("add"),
    set: ke("set"),
    delete: ke("delete"),
    clear: ke("clear"),
    forEach: Zt(!0, !1)
  }, o = {
    get(r) {
      return Jt(this, r, !0, !0);
    },
    get size() {
      return Qt(this, !0);
    },
    has(r) {
      return Xt.call(this, r, !0);
    },
    add: ke("add"),
    set: ke("set"),
    delete: ke("delete"),
    clear: ke("clear"),
    forEach: Zt(!0, !0)
  };
  return [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((r) => {
    e[r] = en(r, !1, !1), n[r] = en(r, !0, !1), t[r] = en(r, !1, !0), o[r] = en(
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
  fs,
  as,
  ds,
  ps
] = /* @__PURE__ */ us();
function On(e, t) {
  const n = t ? e ? ps : ds : e ? as : fs;
  return (o, i, r) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? o : Reflect.get(
    F(n, i) && i in o ? n : o,
    i,
    r
  );
}
const hs = {
  get: /* @__PURE__ */ On(!1, !1)
}, gs = {
  get: /* @__PURE__ */ On(!1, !0)
}, ms = {
  get: /* @__PURE__ */ On(!0, !1)
}, vs = {
  get: /* @__PURE__ */ On(!0, !0)
};
function ji(e, t, n) {
  const o = M(n);
  if (o !== n && t.call(e, o)) {
    const i = po(e);
    Qe(
      `Reactive ${i} contains both the raw and reactive versions of the same object${i === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Li = /* @__PURE__ */ new WeakMap(), $i = /* @__PURE__ */ new WeakMap(), Hi = /* @__PURE__ */ new WeakMap(), Ui = /* @__PURE__ */ new WeakMap();
function _s(e) {
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
function Es(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : _s(po(e));
}
function bo(e) {
  return wt(e) ? e : wn(
    e,
    !1,
    rs,
    hs,
    Li
  );
}
function Ns(e) {
  return wn(
    e,
    !1,
    ls,
    gs,
    $i
  );
}
function ki(e) {
  return wn(
    e,
    !0,
    ss,
    ms,
    Hi
  );
}
function Ve(e) {
  return wn(
    e,
    !0,
    cs,
    vs,
    Ui
  );
}
function wn(e, t, n, o, i) {
  if (!B(e))
    return process.env.NODE_ENV !== "production" && Qe(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = i.get(e);
  if (r)
    return r;
  const s = Es(e);
  if (s === 0)
    return e;
  const c = new Proxy(
    e,
    s === 2 ? o : n
  );
  return i.set(e, c), c;
}
function Nt(e) {
  return wt(e) ? Nt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function wt(e) {
  return !!(e && e.__v_isReadonly);
}
function bt(e) {
  return !!(e && e.__v_isShallow);
}
function Yn(e) {
  return e ? !!e.__v_raw : !1;
}
function M(e) {
  const t = e && e.__v_raw;
  return t ? M(t) : e;
}
function bs(e) {
  return Object.isExtensible(e) && Vi(e, "__v_skip", !0), e;
}
const yo = (e) => B(e) ? bo(e) : e, Oo = (e) => B(e) ? ki(e) : e, ys = "Computed is still dirty after getter evaluation, likely because a computed is mutating its own dependency in its getter. State mutations in computed getters should be avoided.  Check the docs for more details: https://vuejs.org/guide/essentials/computed.html#getters-should-be-side-effect-free";
class Ki {
  constructor(t, n, o, i) {
    this.getter = t, this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new vo(
      () => t(this._value),
      () => Mn(
        this,
        this.effect._dirtyLevel === 2 ? 2 : 3
      )
    ), this.effect.computed = this, this.effect.active = this._cacheable = !i, this.__v_isReadonly = o;
  }
  get value() {
    const t = M(this);
    return (!t._cacheable || t.effect.dirty) && ft(t._value, t._value = t.effect.run()) && Mn(t, 4), ws(t), t.effect._dirtyLevel >= 2 && (process.env.NODE_ENV !== "production" && this._warnRecursive && Qe(ys, `

getter: `, this.getter), Mn(t, 2)), t._value;
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
function Os(e, t, n = !1) {
  let o, i;
  const r = T(e);
  r ? (o = e, i = process.env.NODE_ENV !== "production" ? () => {
    Qe("Write operation failed: computed value is readonly");
  } : J) : (o = e.get, i = e.set);
  const s = new Ki(o, i, r || !i, n);
  return process.env.NODE_ENV !== "production" && t && !n && (s.effect.onTrack = t.onTrack, s.effect.onTrigger = t.onTrigger), s;
}
function ws(e) {
  var t;
  Ye && rt && (e = M(e), Si(
    rt,
    (t = e.dep) != null ? t : e.dep = Ii(
      () => e.dep = void 0,
      e instanceof Ki ? e : void 0
    ),
    process.env.NODE_ENV !== "production" ? {
      target: e,
      type: "get",
      key: "value"
    } : void 0
  ));
}
function Mn(e, t = 4, n) {
  e = M(e);
  const o = e.dep;
  o && Ri(
    o,
    t,
    process.env.NODE_ENV !== "production" ? {
      target: e,
      type: "set",
      key: "value",
      newValue: n
    } : void 0
  );
}
function oe(e) {
  return !!(e && e.__v_isRef === !0);
}
function xs(e) {
  return oe(e) ? e.value : e;
}
const Vs = {
  get: (e, t, n) => xs(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const i = e[t];
    return oe(i) && !oe(n) ? (i.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function Bi(e) {
  return Nt(e) ? e : new Proxy(e, Vs);
}
/**
* @vue/runtime-core v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const lt = [];
function on(e) {
  lt.push(e);
}
function rn() {
  lt.pop();
}
function y(e, ...t) {
  Ae();
  const n = lt.length ? lt[lt.length - 1].component : null, o = n && n.appContext.config.warnHandler, i = Ds();
  if (o)
    Pe(
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
          ({ vnode: r }) => `at <${Sn(n, r.type)}>`
        ).join(`
`),
        i
      ]
    );
  else {
    const r = [`[Vue warn]: ${e}`, ...t];
    i.length && r.push(`
`, ...Cs(i)), console.warn(...r);
  }
  je();
}
function Ds() {
  let e = lt[lt.length - 1];
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
function Cs(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...Ts(n));
  }), t;
}
function Ts({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, i = ` at <${Sn(
    e.component,
    e.type,
    o
  )}`, r = ">" + n;
  return e.props ? [i, ...Ss(e.props), r] : [i + r];
}
function Ss(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...Wi(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Wi(e, t, n) {
  return X(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : oe(t) ? (t = Wi(e, M(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : T(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = M(t), n ? t : [`${e}=`, t]);
}
const wo = {
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
function Pe(e, t, n, o) {
  try {
    return o ? e(...o) : e();
  } catch (i) {
    Bt(i, t, n);
  }
}
function be(e, t, n, o) {
  if (T(e)) {
    const i = Pe(e, t, n, o);
    return i && ao(i) && i.catch((r) => {
      Bt(r, t, n);
    }), i;
  }
  if (C(e)) {
    const i = [];
    for (let r = 0; r < e.length; r++)
      i.push(be(e[r], t, n, o));
    return i;
  } else
    process.env.NODE_ENV !== "production" && y(
      `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
    );
}
function Bt(e, t, n, o = !0) {
  const i = t ? t.vnode : null;
  if (t) {
    let r = t.parent;
    const s = t.proxy, c = process.env.NODE_ENV !== "production" ? wo[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; r; ) {
      const a = r.ec;
      if (a) {
        for (let h = 0; h < a.length; h++)
          if (a[h](e, s, c) === !1)
            return;
      }
      r = r.parent;
    }
    const u = t.appContext.config.errorHandler;
    if (u) {
      Ae(), Pe(
        u,
        null,
        10,
        [e, s, c]
      ), je();
      return;
    }
  }
  Rs(e, n, i, o);
}
function Rs(e, t, n, o = !0) {
  if (process.env.NODE_ENV !== "production") {
    const i = wo[t];
    if (n && on(n), y(`Unhandled error${i ? ` during execution of ${i}` : ""}`), n && rn(), o)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let $t = !1, Jn = !1;
const te = [];
let xe = 0;
const yt = [];
let Ie = null, Be = 0;
const Gi = /* @__PURE__ */ Promise.resolve();
let xo = null;
const Is = 100;
function Ps(e) {
  const t = xo || Gi;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ms(e) {
  let t = xe + 1, n = te.length;
  for (; t < n; ) {
    const o = t + n >>> 1, i = te[o], r = Ht(i);
    r < e || r === e && i.pre ? t = o + 1 : n = o;
  }
  return t;
}
function xn(e) {
  (!te.length || !te.includes(
    e,
    $t && e.allowRecurse ? xe + 1 : xe
  )) && (e.id == null ? te.push(e) : te.splice(Ms(e.id), 0, e), qi());
}
function qi() {
  !$t && !Jn && (Jn = !0, xo = Gi.then(Ji));
}
function Fs(e) {
  const t = te.indexOf(e);
  t > xe && te.splice(t, 1);
}
function zi(e) {
  C(e) ? yt.push(...e) : (!Ie || !Ie.includes(
    e,
    e.allowRecurse ? Be + 1 : Be
  )) && yt.push(e), qi();
}
function Xo(e, t, n = $t ? xe + 1 : 0) {
  for (process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < te.length; n++) {
    const o = te[n];
    if (o && o.pre) {
      if (e && o.id !== e.uid || process.env.NODE_ENV !== "production" && Vo(t, o))
        continue;
      te.splice(n, 1), n--, o();
    }
  }
}
function Yi(e) {
  if (yt.length) {
    const t = [...new Set(yt)].sort(
      (n, o) => Ht(n) - Ht(o)
    );
    if (yt.length = 0, Ie) {
      Ie.push(...t);
      return;
    }
    for (Ie = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Be = 0; Be < Ie.length; Be++)
      process.env.NODE_ENV !== "production" && Vo(e, Ie[Be]) || Ie[Be]();
    Ie = null, Be = 0;
  }
}
const Ht = (e) => e.id == null ? 1 / 0 : e.id, As = (e, t) => {
  const n = Ht(e) - Ht(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function Ji(e) {
  Jn = !1, $t = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), te.sort(As);
  const t = process.env.NODE_ENV !== "production" ? (n) => Vo(e, n) : J;
  try {
    for (xe = 0; xe < te.length; xe++) {
      const n = te[xe];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        Pe(n, null, 14);
      }
    }
  } finally {
    xe = 0, te.length = 0, Yi(e), $t = !1, xo = null, (te.length || yt.length) && Ji(e);
  }
}
function Vo(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > Is) {
      const o = t.ownerInstance, i = o && Dr(o.type);
      return Bt(
        `Maximum recursive updates exceeded${i ? ` in component <${i}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
        null,
        10
      ), !0;
    } else
      e.set(t, n + 1);
  }
}
let ct = !1;
const gt = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (go().__VUE_HMR_RUNTIME__ = {
  createRecord: Fn(Xi),
  rerender: Fn($s),
  reload: Fn(Hs)
});
const at = /* @__PURE__ */ new Map();
function js(e) {
  const t = e.type.__hmrId;
  let n = at.get(t);
  n || (Xi(t, e.type), n = at.get(t)), n.instances.add(e);
}
function Ls(e) {
  at.get(e.type.__hmrId).instances.delete(e);
}
function Xi(e, t) {
  return at.has(e) ? !1 : (at.set(e, {
    initialDef: Ft(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Ft(e) {
  return Cr(e) ? e.__vccOpts : e;
}
function $s(e, t) {
  const n = at.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, Ft(o.type).render = t), o.renderCache = [], ct = !0, o.effect.dirty = !0, o.update(), ct = !1;
  }));
}
function Hs(e, t) {
  const n = at.get(e);
  if (!n)
    return;
  t = Ft(t), Qo(n.initialDef, t);
  const o = [...n.instances];
  for (const i of o) {
    const r = Ft(i.type);
    gt.has(r) || (r !== n.initialDef && Qo(r, t), gt.add(r)), i.appContext.propsCache.delete(i.type), i.appContext.emitsCache.delete(i.type), i.appContext.optionsCache.delete(i.type), i.ceReload ? (gt.add(r), i.ceReload(t.styles), gt.delete(r)) : i.parent ? (i.parent.effect.dirty = !0, xn(i.parent.update)) : i.appContext.reload ? i.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  zi(() => {
    for (const i of o)
      gt.delete(
        Ft(i.type)
      );
  });
}
function Qo(e, t) {
  z(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Fn(e) {
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
let Ee, Rt = [], Xn = !1;
function Wt(e, ...t) {
  Ee ? Ee.emit(e, ...t) : Xn || Rt.push({ event: e, args: t });
}
function Do(e, t) {
  var n, o;
  Ee = e, Ee ? (Ee.enabled = !0, Rt.forEach(({ event: i, args: r }) => Ee.emit(i, ...r)), Rt = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !((o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    Do(r, t);
  }), setTimeout(() => {
    Ee || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Xn = !0, Rt = []);
  }, 3e3)) : (Xn = !0, Rt = []);
}
function Us(e, t) {
  Wt("app:init", e, t, {
    Fragment: ve,
    Text: Gt,
    Comment: ae,
    Static: un
  });
}
function ks(e) {
  Wt("app:unmount", e);
}
const Ks = /* @__PURE__ */ Co(
  "component:added"
  /* COMPONENT_ADDED */
), Qi = /* @__PURE__ */ Co(
  "component:updated"
  /* COMPONENT_UPDATED */
), Bs = /* @__PURE__ */ Co(
  "component:removed"
  /* COMPONENT_REMOVED */
), Ws = (e) => {
  Ee && typeof Ee.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Ee.cleanupBuffer(e) && Bs(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Co(e) {
  return (t) => {
    Wt(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const Gs = /* @__PURE__ */ Zi(
  "perf:start"
  /* PERFORMANCE_START */
), qs = /* @__PURE__ */ Zi(
  "perf:end"
  /* PERFORMANCE_END */
);
function Zi(e) {
  return (t, n, o) => {
    Wt(e, t.appContext.app, t.uid, t, n, o);
  };
}
function zs(e, t, n) {
  Wt(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
function Ys(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const o = e.vnode.props || k;
  if (process.env.NODE_ENV !== "production") {
    const {
      emitsOptions: h,
      propsOptions: [d]
    } = e;
    if (h)
      if (!(t in h))
        (!d || !(ot(t) in d)) && y(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${ot(t)}" prop.`
        );
      else {
        const _ = h[t];
        T(_) && (_(...n) || y(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let i = n;
  const r = t.startsWith("update:"), s = r && t.slice(7);
  if (s && s in o) {
    const h = `${s === "modelValue" ? "model" : s}Modifiers`, { number: d, trim: _ } = o[h] || k;
    _ && (i = n.map((x) => X(x) ? x.trim() : x)), d && (i = n.map(Bn));
  }
  if (process.env.NODE_ENV !== "production" && zs(e, t, i), process.env.NODE_ENV !== "production") {
    const h = t.toLowerCase();
    h !== t && o[ot(h)] && y(
      `Event "${h}" is emitted in component ${Sn(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Xe(
        t
      )}" instead of "${t}".`
    );
  }
  let c, u = o[c = ot(t)] || // also try camelCase event handler (#2249)
  o[c = ot(Ot(t))];
  !u && r && (u = o[c = ot(Xe(t))]), u && be(
    u,
    e,
    6,
    i
  );
  const a = o[c + "Once"];
  if (a) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[c])
      return;
    e.emitted[c] = !0, be(
      a,
      e,
      6,
      i
    );
  }
}
function er(e, t, n = !1) {
  const o = t.emitsCache, i = o.get(e);
  if (i !== void 0)
    return i;
  const r = e.emits;
  let s = {}, c = !1;
  if (!T(e)) {
    const u = (a) => {
      const h = er(a, t, !0);
      h && (c = !0, z(s, h));
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !r && !c ? (B(e) && o.set(e, null), null) : (C(r) ? r.forEach((u) => s[u] = null) : z(s, r), B(e) && o.set(e, s), s);
}
function Vn(e, t) {
  return !e || !kt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), F(e, t[0].toLowerCase() + t.slice(1)) || F(e, Xe(t)) || F(e, t));
}
let ne = null, tr = null;
function pn(e) {
  const t = ne;
  return ne = e, tr = e && e.type.__scopeId || null, t;
}
function Js(e, t = ne, n) {
  if (!t || e._n)
    return e;
  const o = (...i) => {
    o._d && fi(-1);
    const r = pn(t);
    let s;
    try {
      s = e(...i);
    } finally {
      pn(r), o._d && fi(1);
    }
    return process.env.NODE_ENV !== "production" && Qi(t), s;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
let Qn = !1;
function hn() {
  Qn = !0;
}
function An(e) {
  const {
    type: t,
    vnode: n,
    proxy: o,
    withProxy: i,
    propsOptions: [r],
    slots: s,
    attrs: c,
    emit: u,
    render: a,
    renderCache: h,
    props: d,
    data: _,
    setupState: x,
    ctx: R,
    inheritAttrs: I
  } = e, de = pn(e);
  let U, K;
  process.env.NODE_ENV !== "production" && (Qn = !1);
  try {
    if (n.shapeFlag & 4) {
      const Y = i || o, pe = process.env.NODE_ENV !== "production" && x.__isScriptSetup ? new Proxy(Y, {
        get(P, ie, re) {
          return y(
            `Property '${String(
              ie
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(P, ie, re);
        }
      }) : Y;
      U = _e(
        a.call(
          pe,
          Y,
          h,
          process.env.NODE_ENV !== "production" ? Ve(d) : d,
          x,
          _,
          R
        )
      ), K = c;
    } else {
      const Y = t;
      process.env.NODE_ENV !== "production" && c === d && hn(), U = _e(
        Y.length > 1 ? Y(
          process.env.NODE_ENV !== "production" ? Ve(d) : d,
          process.env.NODE_ENV !== "production" ? {
            get attrs() {
              return hn(), Ve(c);
            },
            slots: s,
            emit: u
          } : { attrs: c, slots: s, emit: u }
        ) : Y(
          process.env.NODE_ENV !== "production" ? Ve(d) : d,
          null
        )
      ), K = t.props ? c : Xs(c);
    }
  } catch (Y) {
    jt.length = 0, Bt(Y, e, 1), U = Me(ae);
  }
  let G = U, q;
  if (process.env.NODE_ENV !== "production" && U.patchFlag > 0 && U.patchFlag & 2048 && ([G, q] = nr(U)), K && I !== !1) {
    const Y = Object.keys(K), { shapeFlag: pe } = G;
    if (Y.length) {
      if (pe & 7)
        r && Y.some(dn) && (K = Qs(
          K,
          r
        )), G = Ze(G, K, !1, !0);
      else if (process.env.NODE_ENV !== "production" && !Qn && G.type !== ae) {
        const P = Object.keys(c), ie = [], re = [];
        for (let Ce = 0, $e = P.length; Ce < $e; Ce++) {
          const he = P[Ce];
          kt(he) ? dn(he) || ie.push(he[2].toLowerCase() + he.slice(3)) : re.push(he);
        }
        re.length && y(
          `Extraneous non-props attributes (${re.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`
        ), ie.length && y(
          `Extraneous non-emits event listeners (${ie.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (process.env.NODE_ENV !== "production" && !Zo(G) && y(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), G = Ze(G, null, !1, !0), G.dirs = G.dirs ? G.dirs.concat(n.dirs) : n.dirs), n.transition && (process.env.NODE_ENV !== "production" && !Zo(G) && y(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), G.transition = n.transition), process.env.NODE_ENV !== "production" && q ? q(G) : U = G, pn(de), U;
}
const nr = (e) => {
  const t = e.children, n = e.dynamicChildren, o = To(t, !1);
  if (o) {
    if (process.env.NODE_ENV !== "production" && o.patchFlag > 0 && o.patchFlag & 2048)
      return nr(o);
  } else
    return [e, void 0];
  const i = t.indexOf(o), r = n ? n.indexOf(o) : -1, s = (c) => {
    t[i] = c, n && (r > -1 ? n[r] = c : c.patchFlag > 0 && (e.dynamicChildren = [...n, c]));
  };
  return [_e(o), s];
};
function To(e, t = !0) {
  let n;
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    if (Mo(i)) {
      if (i.type !== ae || i.children === "v-if") {
        if (n)
          return;
        if (n = i, process.env.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return To(n.children);
      }
    } else
      return;
  }
  return n;
}
const Xs = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || kt(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Qs = (e, t) => {
  const n = {};
  for (const o in e)
    (!dn(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, Zo = (e) => e.shapeFlag & 7 || e.type === ae;
function Zs(e, t, n) {
  const { props: o, children: i, component: r } = e, { props: s, children: c, patchFlag: u } = t, a = r.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (i || c) && ct || t.dirs || t.transition)
    return !0;
  if (n && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return o ? ei(o, s, a) : !!s;
    if (u & 8) {
      const h = t.dynamicProps;
      for (let d = 0; d < h.length; d++) {
        const _ = h[d];
        if (s[_] !== o[_] && !Vn(a, _))
          return !0;
      }
    }
  } else
    return (i || c) && (!c || !c.$stable) ? !0 : o === s ? !1 : o ? s ? ei(o, s, a) : !0 : !!s;
  return !1;
}
function ei(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < o.length; i++) {
    const r = o[i];
    if (t[r] !== e[r] && !Vn(n, r))
      return !0;
  }
  return !1;
}
function el({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.el = e.el), o === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const tl = Symbol.for("v-ndc"), nl = (e) => e.__isSuspense;
function ol(e, t) {
  t && t.pendingBranch ? C(e) ? t.effects.push(...e) : t.effects.push(e) : zi(e);
}
const il = Symbol.for("v-scx"), rl = () => {
  {
    const e = ln(il);
    return e || process.env.NODE_ENV !== "production" && y(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
}, tn = {};
function jn(e, t, n) {
  return process.env.NODE_ENV !== "production" && !T(t) && y(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), or(e, t, n);
}
function or(e, t, {
  immediate: n,
  deep: o,
  flush: i,
  once: r,
  onTrack: s,
  onTrigger: c
} = k) {
  if (t && r) {
    const P = t;
    t = (...ie) => {
      P(...ie), pe();
    };
  }
  process.env.NODE_ENV !== "production" && o !== void 0 && typeof o == "number" && y(
    'watch() "deep" option with number value will be used as watch depth in future versions. Please use a boolean instead to avoid potential breakage.'
  ), process.env.NODE_ENV !== "production" && !t && (n !== void 0 && y(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && y(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && y(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const u = (P) => {
    y(
      "Invalid watch source: ",
      P,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, a = Z, h = (P) => o === !0 ? P : (
    // for deep: false, only traverse root-level properties
    it(P, o === !1 ? 1 : void 0)
  );
  let d, _ = !1, x = !1;
  if (oe(e) ? (d = () => e.value, _ = bt(e)) : Nt(e) ? (d = () => h(e), _ = !0) : C(e) ? (x = !0, _ = e.some((P) => Nt(P) || bt(P)), d = () => e.map((P) => {
    if (oe(P))
      return P.value;
    if (Nt(P))
      return h(P);
    if (T(P))
      return Pe(P, a, 2);
    process.env.NODE_ENV !== "production" && u(P);
  })) : T(e) ? t ? d = () => Pe(e, a, 2) : d = () => (R && R(), be(
    e,
    a,
    3,
    [I]
  )) : (d = J, process.env.NODE_ENV !== "production" && u(e)), t && o) {
    const P = d;
    d = () => it(P());
  }
  let R, I = (P) => {
    R = q.onStop = () => {
      Pe(P, a, 4), R = q.onStop = void 0;
    };
  }, de;
  if (Cn)
    if (I = J, t ? n && be(t, a, 3, [
      d(),
      x ? [] : void 0,
      I
    ]) : d(), i === "sync") {
      const P = rl();
      de = P.__watcherHandles || (P.__watcherHandles = []);
    } else
      return J;
  let U = x ? new Array(e.length).fill(tn) : tn;
  const K = () => {
    if (!(!q.active || !q.dirty))
      if (t) {
        const P = q.run();
        (o || _ || (x ? P.some((ie, re) => ft(ie, U[re])) : ft(P, U))) && (R && R(), be(t, a, 3, [
          P,
          // pass undefined as the old value when it's changed for the first time
          U === tn ? void 0 : x && U[0] === tn ? [] : U,
          I
        ]), U = P);
      } else
        q.run();
  };
  K.allowRecurse = !!t;
  let G;
  i === "sync" ? G = K : i === "post" ? G = () => fe(K, a && a.suspense) : (K.pre = !0, a && (K.id = a.uid), G = () => xn(K));
  const q = new vo(d, J, G), Y = es(), pe = () => {
    q.stop(), Y && fo(Y.effects, q);
  };
  return process.env.NODE_ENV !== "production" && (q.onTrack = s, q.onTrigger = c), t ? n ? K() : U = q.run() : i === "post" ? fe(
    q.run.bind(q),
    a && a.suspense
  ) : q.run(), de && de.push(pe), pe;
}
function sl(e, t, n) {
  const o = this.proxy, i = X(e) ? e.includes(".") ? ir(o, e) : () => o[e] : e.bind(o, o);
  let r;
  T(t) ? r = t : (r = t.handler, n = t);
  const s = qt(this), c = or(i, r.bind(o), n);
  return s(), c;
}
function ir(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let i = 0; i < n.length && o; i++)
      o = o[n[i]];
    return o;
  };
}
function it(e, t = 1 / 0, n) {
  if (t <= 0 || !B(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, oe(e))
    it(e.value, t, n);
  else if (C(e))
    for (let o = 0; o < e.length; o++)
      it(e[o], t, n);
  else if (Mr(e) || Et(e))
    e.forEach((o) => {
      it(o, t, n);
    });
  else if (Ar(e))
    for (const o in e)
      it(e[o], t, n);
  return e;
}
function rr(e) {
  jr(e) && y("Do not use built-in directive ids as custom directive id: " + e);
}
function ue(e, t) {
  if (ne === null)
    return process.env.NODE_ENV !== "production" && y("withDirectives can only be used inside render functions."), e;
  const n = Tn(ne) || ne.proxy, o = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [r, s, c, u = k] = t[i];
    r && (T(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && it(s), o.push({
      dir: r,
      instance: n,
      value: s,
      oldValue: void 0,
      arg: c,
      modifiers: u
    }));
  }
  return e;
}
function et(e, t, n, o) {
  const i = e.dirs, r = t && t.dirs;
  for (let s = 0; s < i.length; s++) {
    const c = i[s];
    r && (c.oldValue = r[s].value);
    let u = c.dir[o];
    u && (Ae(), be(u, n, 8, [
      e.el,
      c,
      e,
      t
    ]), je());
  }
}
const sn = (e) => !!e.type.__asyncLoader, So = (e) => e.type.__isKeepAlive;
function ll(e, t) {
  sr(e, "a", t);
}
function cl(e, t) {
  sr(e, "da", t);
}
function sr(e, t, n = Z) {
  const o = e.__wdc || (e.__wdc = () => {
    let i = n;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (Dn(t, o, n), n) {
    let i = n.parent;
    for (; i && i.parent; )
      So(i.parent.vnode) && ul(o, t, n, i), i = i.parent;
  }
}
function ul(e, t, n, o) {
  const i = Dn(
    t,
    e,
    o,
    !0
    /* prepend */
  );
  lr(() => {
    fo(o[t], i);
  }, n);
}
function Dn(e, t, n = Z, o = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...s) => {
      if (n.isUnmounted)
        return;
      Ae();
      const c = qt(n), u = be(t, n, e, s);
      return c(), je(), u;
    });
    return o ? i.unshift(r) : i.push(r), r;
  } else if (process.env.NODE_ENV !== "production") {
    const i = ot(wo[e].replace(/ hook$/, ""));
    y(
      `${i} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Le = (e) => (t, n = Z) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!Cn || e === "sp") && Dn(e, (...o) => t(...o), n)
), fl = Le("bm"), al = Le("m"), dl = Le("bu"), pl = Le("u"), hl = Le("bum"), lr = Le("um"), gl = Le("sp"), ml = Le(
  "rtg"
), vl = Le(
  "rtc"
);
function _l(e, t = Z) {
  Dn("ec", e, t);
}
const Zn = (e) => e ? xr(e) ? Tn(e) || e.proxy : Zn(e.parent) : null, ut = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ z(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? Ve(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? Ve(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? Ve(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? Ve(e.refs) : e.refs,
    $parent: (e) => Zn(e.parent),
    $root: (e) => Zn(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Io(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      e.effect.dirty = !0, xn(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ps.bind(e.proxy)),
    $watch: (e) => sl.bind(e)
  })
), Ro = (e) => e === "_" || e === "$", Ln = (e, t) => e !== k && !e.__isScriptSetup && F(e, t), cr = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: o, data: i, props: r, accessCache: s, type: c, appContext: u } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let a;
    if (t[0] !== "$") {
      const x = s[t];
      if (x !== void 0)
        switch (x) {
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
        if (Ln(o, t))
          return s[t] = 1, o[t];
        if (i !== k && F(i, t))
          return s[t] = 2, i[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (a = e.propsOptions[0]) && F(a, t)
        )
          return s[t] = 3, r[t];
        if (n !== k && F(n, t))
          return s[t] = 4, n[t];
        eo && (s[t] = 0);
      }
    }
    const h = ut[t];
    let d, _;
    if (h)
      return t === "$attrs" ? (ee(e.attrs, "get", ""), process.env.NODE_ENV !== "production" && hn()) : process.env.NODE_ENV !== "production" && t === "$slots" && ee(e, "get", t), h(e);
    if (
      // css module (injected by vue-loader)
      (d = c.__cssModules) && (d = d[t])
    )
      return d;
    if (n !== k && F(n, t))
      return s[t] = 4, n[t];
    if (
      // global properties
      _ = u.config.globalProperties, F(_, t)
    )
      return _[t];
    process.env.NODE_ENV !== "production" && ne && (!X(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (i !== k && Ro(t[0]) && F(i, t) ? y(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === ne && y(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: i, ctx: r } = e;
    return Ln(i, t) ? (i[t] = n, !0) : process.env.NODE_ENV !== "production" && i.__isScriptSetup && F(i, t) ? (y(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== k && F(o, t) ? (o[t] = n, !0) : F(e.props, t) ? (process.env.NODE_ENV !== "production" && y(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && y(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(r, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: i, propsOptions: r }
  }, s) {
    let c;
    return !!n[s] || e !== k && F(e, s) || Ln(t, s) || (c = r[0]) && F(c, s) || F(o, s) || F(ut, s) || F(i.config.globalProperties, s);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : F(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (cr.ownKeys = (e) => (y(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function El(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(ut).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => ut[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: J
    });
  }), t;
}
function Nl(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((o) => {
    Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[o],
      set: J
    });
  });
}
function bl(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(M(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (Ro(o[0])) {
        y(
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
        set: J
      });
    }
  });
}
function ti(e) {
  return C(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function yl() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? y(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let eo = !0;
function Ol(e) {
  const t = Io(e), n = e.proxy, o = e.ctx;
  eo = !1, t.beforeCreate && ni(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: r,
    methods: s,
    watch: c,
    provide: u,
    inject: a,
    // lifecycle
    created: h,
    beforeMount: d,
    mounted: _,
    beforeUpdate: x,
    updated: R,
    activated: I,
    deactivated: de,
    beforeDestroy: U,
    beforeUnmount: K,
    destroyed: G,
    unmounted: q,
    render: Y,
    renderTracked: pe,
    renderTriggered: P,
    errorCaptured: ie,
    serverPrefetch: re,
    // public API
    expose: Ce,
    inheritAttrs: $e,
    // assets
    components: he,
    directives: zt,
    filters: Ao
  } = t, He = process.env.NODE_ENV !== "production" ? yl() : null;
  if (process.env.NODE_ENV !== "production") {
    const [L] = e.propsOptions;
    if (L)
      for (const j in L)
        He("Props", j);
  }
  if (a && wl(a, o, He), s)
    for (const L in s) {
      const j = s[L];
      T(j) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(o, L, {
        value: j.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[L] = j.bind(n), process.env.NODE_ENV !== "production" && He("Methods", L)) : process.env.NODE_ENV !== "production" && y(
        `Method "${L}" has type "${typeof j}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (i) {
    process.env.NODE_ENV !== "production" && !T(i) && y(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const L = i.call(n, n);
    if (process.env.NODE_ENV !== "production" && ao(L) && y(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !B(L))
      process.env.NODE_ENV !== "production" && y("data() should return an object.");
    else if (e.data = bo(L), process.env.NODE_ENV !== "production")
      for (const j in L)
        He("Data", j), Ro(j[0]) || Object.defineProperty(o, j, {
          configurable: !0,
          enumerable: !0,
          get: () => L[j],
          set: J
        });
  }
  if (eo = !0, r)
    for (const L in r) {
      const j = r[L], ye = T(j) ? j.bind(n, n) : T(j.get) ? j.get.bind(n, n) : J;
      process.env.NODE_ENV !== "production" && ye === J && y(`Computed property "${L}" has no getter.`);
      const Rn = !T(j) && T(j.set) ? j.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        y(
          `Write operation failed: computed property "${L}" is readonly.`
        );
      } : J, xt = ac({
        get: ye,
        set: Rn
      });
      Object.defineProperty(o, L, {
        enumerable: !0,
        configurable: !0,
        get: () => xt.value,
        set: (dt) => xt.value = dt
      }), process.env.NODE_ENV !== "production" && He("Computed", L);
    }
  if (c)
    for (const L in c)
      ur(c[L], o, n, L);
  if (u) {
    const L = T(u) ? u.call(n) : u;
    Reflect.ownKeys(L).forEach((j) => {
      Sl(j, L[j]);
    });
  }
  h && ni(h, e, "c");
  function ce(L, j) {
    C(j) ? j.forEach((ye) => L(ye.bind(n))) : j && L(j.bind(n));
  }
  if (ce(fl, d), ce(al, _), ce(dl, x), ce(pl, R), ce(ll, I), ce(cl, de), ce(_l, ie), ce(vl, pe), ce(ml, P), ce(hl, K), ce(lr, q), ce(gl, re), C(Ce))
    if (Ce.length) {
      const L = e.exposed || (e.exposed = {});
      Ce.forEach((j) => {
        Object.defineProperty(L, j, {
          get: () => n[j],
          set: (ye) => n[j] = ye
        });
      });
    } else
      e.exposed || (e.exposed = {});
  Y && e.render === J && (e.render = Y), $e != null && (e.inheritAttrs = $e), he && (e.components = he), zt && (e.directives = zt);
}
function wl(e, t, n = J) {
  C(e) && (e = to(e));
  for (const o in e) {
    const i = e[o];
    let r;
    B(i) ? "default" in i ? r = ln(
      i.from || o,
      i.default,
      !0
    ) : r = ln(i.from || o) : r = ln(i), oe(r) ? Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (s) => r.value = s
    }) : t[o] = r, process.env.NODE_ENV !== "production" && n("Inject", o);
  }
}
function ni(e, t, n) {
  be(
    C(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function ur(e, t, n, o) {
  const i = o.includes(".") ? ir(n, o) : () => n[o];
  if (X(e)) {
    const r = t[e];
    T(r) ? jn(i, r) : process.env.NODE_ENV !== "production" && y(`Invalid watch handler specified by key "${e}"`, r);
  } else if (T(e))
    jn(i, e.bind(n));
  else if (B(e))
    if (C(e))
      e.forEach((r) => ur(r, t, n, o));
    else {
      const r = T(e.handler) ? e.handler.bind(n) : t[e.handler];
      T(r) ? jn(i, r, e) : process.env.NODE_ENV !== "production" && y(`Invalid watch handler specified by key "${e.handler}"`, r);
    }
  else
    process.env.NODE_ENV !== "production" && y(`Invalid watch option: "${o}"`, e);
}
function Io(e) {
  const t = e.type, { mixins: n, extends: o } = t, {
    mixins: i,
    optionsCache: r,
    config: { optionMergeStrategies: s }
  } = e.appContext, c = r.get(t);
  let u;
  return c ? u = c : !i.length && !n && !o ? u = t : (u = {}, i.length && i.forEach(
    (a) => gn(u, a, s, !0)
  ), gn(u, t, s)), B(t) && r.set(t, u), u;
}
function gn(e, t, n, o = !1) {
  const { mixins: i, extends: r } = t;
  r && gn(e, r, n, !0), i && i.forEach(
    (s) => gn(e, s, n, !0)
  );
  for (const s in t)
    if (o && s === "expose")
      process.env.NODE_ENV !== "production" && y(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const c = xl[s] || n && n[s];
      e[s] = c ? c(e[s], t[s]) : t[s];
    }
  return e;
}
const xl = {
  data: oi,
  props: ii,
  emits: ii,
  // objects
  methods: It,
  computed: It,
  // lifecycle
  beforeCreate: le,
  created: le,
  beforeMount: le,
  mounted: le,
  beforeUpdate: le,
  updated: le,
  beforeDestroy: le,
  beforeUnmount: le,
  destroyed: le,
  unmounted: le,
  activated: le,
  deactivated: le,
  errorCaptured: le,
  serverPrefetch: le,
  // assets
  components: It,
  directives: It,
  // watch
  watch: Dl,
  // provide / inject
  provide: oi,
  inject: Vl
};
function oi(e, t) {
  return t ? e ? function() {
    return z(
      T(e) ? e.call(this, this) : e,
      T(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Vl(e, t) {
  return It(to(e), to(t));
}
function to(e) {
  if (C(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function le(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function It(e, t) {
  return e ? z(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function ii(e, t) {
  return e ? C(e) && C(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : z(
    /* @__PURE__ */ Object.create(null),
    ti(e),
    ti(t ?? {})
  ) : t;
}
function Dl(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = z(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = le(e[o], t[o]);
  return n;
}
function fr() {
  return {
    app: null,
    config: {
      isNativeTag: Ir,
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
let Cl = 0;
function Tl(e, t) {
  return function(o, i = null) {
    T(o) || (o = z({}, o)), i != null && !B(i) && (process.env.NODE_ENV !== "production" && y("root props passed to app.mount() must be an object."), i = null);
    const r = fr(), s = /* @__PURE__ */ new WeakSet();
    let c = !1;
    const u = r.app = {
      _uid: Cl++,
      _component: o,
      _props: i,
      _container: null,
      _context: r,
      _instance: null,
      version: hi,
      get config() {
        return r.config;
      },
      set config(a) {
        process.env.NODE_ENV !== "production" && y(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(a, ...h) {
        return s.has(a) ? process.env.NODE_ENV !== "production" && y("Plugin has already been applied to target app.") : a && T(a.install) ? (s.add(a), a.install(u, ...h)) : T(a) ? (s.add(a), a(u, ...h)) : process.env.NODE_ENV !== "production" && y(
          'A plugin must either be a function or an object with an "install" function.'
        ), u;
      },
      mixin(a) {
        return r.mixins.includes(a) ? process.env.NODE_ENV !== "production" && y(
          "Mixin has already been applied to target app" + (a.name ? `: ${a.name}` : "")
        ) : r.mixins.push(a), u;
      },
      component(a, h) {
        return process.env.NODE_ENV !== "production" && lo(a, r.config), h ? (process.env.NODE_ENV !== "production" && r.components[a] && y(`Component "${a}" has already been registered in target app.`), r.components[a] = h, u) : r.components[a];
      },
      directive(a, h) {
        return process.env.NODE_ENV !== "production" && rr(a), h ? (process.env.NODE_ENV !== "production" && r.directives[a] && y(`Directive "${a}" has already been registered in target app.`), r.directives[a] = h, u) : r.directives[a];
      },
      mount(a, h, d) {
        if (c)
          process.env.NODE_ENV !== "production" && y(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          process.env.NODE_ENV !== "production" && a.__vue_app__ && y(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const _ = Me(o, i);
          return _.appContext = r, d === !0 ? d = "svg" : d === !1 && (d = void 0), process.env.NODE_ENV !== "production" && (r.reload = () => {
            e(
              Ze(_),
              a,
              d
            );
          }), h && t ? t(_, a) : e(_, a, d), c = !0, u._container = a, a.__vue_app__ = u, process.env.NODE_ENV !== "production" && (u._instance = _.component, Us(u, hi)), Tn(_.component) || _.component.proxy;
        }
      },
      unmount() {
        c ? (e(null, u._container), process.env.NODE_ENV !== "production" && (u._instance = null, ks(u)), delete u._container.__vue_app__) : process.env.NODE_ENV !== "production" && y("Cannot unmount an app that is not mounted.");
      },
      provide(a, h) {
        return process.env.NODE_ENV !== "production" && a in r.provides && y(
          `App already provides property with key "${String(a)}". It will be overwritten with the new value.`
        ), r.provides[a] = h, u;
      },
      runWithContext(a) {
        const h = At;
        At = u;
        try {
          return a();
        } finally {
          At = h;
        }
      }
    };
    return u;
  };
}
let At = null;
function Sl(e, t) {
  if (!Z)
    process.env.NODE_ENV !== "production" && y("provide() can only be used inside setup().");
  else {
    let n = Z.provides;
    const o = Z.parent && Z.parent.provides;
    o === n && (n = Z.provides = Object.create(o)), n[e] = t;
  }
}
function ln(e, t, n = !1) {
  const o = Z || ne;
  if (o || At) {
    const i = o ? o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : At._context.provides;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && T(t) ? t.call(o && o.proxy) : t;
    process.env.NODE_ENV !== "production" && y(`injection "${String(e)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && y("inject() can only be used inside setup() or functional components.");
}
const ar = {}, dr = () => Object.create(ar), pr = (e) => Object.getPrototypeOf(e) === ar;
function Rl(e, t, n, o = !1) {
  const i = {}, r = dr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), hr(e, t, i, r);
  for (const s in e.propsOptions[0])
    s in i || (i[s] = void 0);
  process.env.NODE_ENV !== "production" && mr(t || {}, i, e), n ? e.props = o ? i : Ns(i) : e.type.props ? e.props = i : e.props = r, e.attrs = r;
}
function Il(e) {
  for (; e; ) {
    if (e.type.__hmrId)
      return !0;
    e = e.parent;
  }
}
function Pl(e, t, n, o) {
  const {
    props: i,
    attrs: r,
    vnode: { patchFlag: s }
  } = e, c = M(i), [u] = e.propsOptions;
  let a = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(process.env.NODE_ENV !== "production" && Il(e)) && (o || s > 0) && !(s & 16)
  ) {
    if (s & 8) {
      const h = e.vnode.dynamicProps;
      for (let d = 0; d < h.length; d++) {
        let _ = h[d];
        if (Vn(e.emitsOptions, _))
          continue;
        const x = t[_];
        if (u)
          if (F(r, _))
            x !== r[_] && (r[_] = x, a = !0);
          else {
            const R = Ot(_);
            i[R] = no(
              u,
              c,
              R,
              x,
              e,
              !1
            );
          }
        else
          x !== r[_] && (r[_] = x, a = !0);
      }
    }
  } else {
    hr(e, t, i, r) && (a = !0);
    let h;
    for (const d in c)
      (!t || // for camelCase
      !F(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((h = Xe(d)) === d || !F(t, h))) && (u ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[h] !== void 0) && (i[d] = no(
        u,
        c,
        d,
        void 0,
        e,
        !0
      )) : delete i[d]);
    if (r !== c)
      for (const d in r)
        (!t || !F(t, d)) && (delete r[d], a = !0);
  }
  a && De(e.attrs, "set", ""), process.env.NODE_ENV !== "production" && mr(t || {}, i, e);
}
function hr(e, t, n, o) {
  const [i, r] = e.propsOptions;
  let s = !1, c;
  if (t)
    for (let u in t) {
      if (Mt(u))
        continue;
      const a = t[u];
      let h;
      i && F(i, h = Ot(u)) ? !r || !r.includes(h) ? n[h] = a : (c || (c = {}))[h] = a : Vn(e.emitsOptions, u) || (!(u in o) || a !== o[u]) && (o[u] = a, s = !0);
    }
  if (r) {
    const u = M(n), a = c || k;
    for (let h = 0; h < r.length; h++) {
      const d = r[h];
      n[d] = no(
        i,
        u,
        d,
        a[d],
        e,
        !F(a, d)
      );
    }
  }
  return s;
}
function no(e, t, n, o, i, r) {
  const s = e[n];
  if (s != null) {
    const c = F(s, "default");
    if (c && o === void 0) {
      const u = s.default;
      if (s.type !== Function && !s.skipFactory && T(u)) {
        const { propsDefaults: a } = i;
        if (n in a)
          o = a[n];
        else {
          const h = qt(i);
          o = a[n] = u.call(
            null,
            t
          ), h();
        }
      } else
        o = u;
    }
    s[
      0
      /* shouldCast */
    ] && (r && !c ? o = !1 : s[
      1
      /* shouldCastTrue */
    ] && (o === "" || o === Xe(n)) && (o = !0));
  }
  return o;
}
function gr(e, t, n = !1) {
  const o = t.propsCache, i = o.get(e);
  if (i)
    return i;
  const r = e.props, s = {}, c = [];
  let u = !1;
  if (!T(e)) {
    const h = (d) => {
      u = !0;
      const [_, x] = gr(d, t, !0);
      z(s, _), x && c.push(...x);
    };
    !n && t.mixins.length && t.mixins.forEach(h), e.extends && h(e.extends), e.mixins && e.mixins.forEach(h);
  }
  if (!r && !u)
    return B(e) && o.set(e, _t), _t;
  if (C(r))
    for (let h = 0; h < r.length; h++) {
      process.env.NODE_ENV !== "production" && !X(r[h]) && y("props must be strings when using array syntax.", r[h]);
      const d = Ot(r[h]);
      ri(d) && (s[d] = k);
    }
  else if (r) {
    process.env.NODE_ENV !== "production" && !B(r) && y("invalid props options", r);
    for (const h in r) {
      const d = Ot(h);
      if (ri(d)) {
        const _ = r[h], x = s[d] = C(_) || T(_) ? { type: _ } : z({}, _);
        if (x) {
          const R = li(Boolean, x.type), I = li(String, x.type);
          x[
            0
            /* shouldCast */
          ] = R > -1, x[
            1
            /* shouldCastTrue */
          ] = I < 0 || R < I, (R > -1 || F(x, "default")) && c.push(d);
        }
      }
    }
  }
  const a = [s, c];
  return B(e) && o.set(e, a), a;
}
function ri(e) {
  return e[0] !== "$" && !Mt(e) ? !0 : (process.env.NODE_ENV !== "production" && y(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function oo(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function si(e, t) {
  return oo(e) === oo(t);
}
function li(e, t) {
  return C(t) ? t.findIndex((n) => si(n, e)) : T(t) && si(t, e) ? 0 : -1;
}
function mr(e, t, n) {
  const o = M(t), i = n.propsOptions[0];
  for (const r in i) {
    let s = i[r];
    s != null && Ml(
      r,
      o[r],
      s,
      process.env.NODE_ENV !== "production" ? Ve(o) : o,
      !F(e, r) && !F(e, Xe(r))
    );
  }
}
function Ml(e, t, n, o, i) {
  const { type: r, required: s, validator: c, skipCheck: u } = n;
  if (s && i) {
    y('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !s)) {
    if (r != null && r !== !0 && !u) {
      let a = !1;
      const h = C(r) ? r : [r], d = [];
      for (let _ = 0; _ < h.length && !a; _++) {
        const { valid: x, expectedType: R } = Al(t, h[_]);
        d.push(R || ""), a = x;
      }
      if (!a) {
        y(jl(e, t, d));
        return;
      }
    }
    c && !c(t, o) && y('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const Fl = /* @__PURE__ */ Fe(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function Al(e, t) {
  let n;
  const o = oo(t);
  if (Fl(o)) {
    const i = typeof e;
    n = i === o.toLowerCase(), !n && i === "object" && (n = e instanceof t);
  } else
    o === "Object" ? n = B(e) : o === "Array" ? n = C(e) : o === "null" ? n = e === null : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function jl(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(bn).join(" | ")}`;
  const i = n[0], r = po(t), s = ci(t, i), c = ci(t, r);
  return n.length === 1 && ui(i) && !Ll(i, r) && (o += ` with value ${s}`), o += `, got ${r} `, ui(r) && (o += `with value ${c}.`), o;
}
function ci(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function ui(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Ll(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const vr = (e) => e[0] === "_" || e === "$stable", Po = (e) => C(e) ? e.map(_e) : [_e(e)], $l = (e, t, n) => {
  if (t._n)
    return t;
  const o = Js((...i) => (process.env.NODE_ENV !== "production" && Z && (!n || n.root === Z.root) && y(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Po(t(...i))), n);
  return o._c = !1, o;
}, _r = (e, t, n) => {
  const o = e._ctx;
  for (const i in e) {
    if (vr(i))
      continue;
    const r = e[i];
    if (T(r))
      t[i] = $l(i, r, o);
    else if (r != null) {
      process.env.NODE_ENV !== "production" && y(
        `Non-function value encountered for slot "${i}". Prefer function slots for better performance.`
      );
      const s = Po(r);
      t[i] = () => s;
    }
  }
}, Er = (e, t) => {
  process.env.NODE_ENV !== "production" && !So(e.vnode) && y(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = Po(t);
  e.slots.default = () => n;
}, Hl = (e, t) => {
  const n = e.slots = dr();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (z(n, t), Vi(n, "_", o, !0)) : _r(t, n);
  } else
    t && Er(e, t);
}, Ul = (e, t, n) => {
  const { vnode: o, slots: i } = e;
  let r = !0, s = k;
  if (o.shapeFlag & 32) {
    const c = t._;
    c ? process.env.NODE_ENV !== "production" && ct ? (z(i, t), De(e, "set", "$slots")) : n && c === 1 ? r = !1 : (z(i, t), !n && c === 1 && delete i._) : (r = !t.$stable, _r(t, i)), s = t;
  } else
    t && (Er(e, t), s = { default: 1 });
  if (r)
    for (const c in i)
      !vr(c) && s[c] == null && delete i[c];
};
function io(e, t, n, o, i = !1) {
  if (C(e)) {
    e.forEach(
      (_, x) => io(
        _,
        t && (C(t) ? t[x] : t),
        n,
        o,
        i
      )
    );
    return;
  }
  if (sn(o) && !i)
    return;
  const r = o.shapeFlag & 4 ? Tn(o.component) || o.component.proxy : o.el, s = i ? null : r, { i: c, r: u } = e;
  if (process.env.NODE_ENV !== "production" && !c) {
    y(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const a = t && t.r, h = c.refs === k ? c.refs = {} : c.refs, d = c.setupState;
  if (a != null && a !== u && (X(a) ? (h[a] = null, F(d, a) && (d[a] = null)) : oe(a) && (a.value = null)), T(u))
    Pe(u, c, 12, [s, h]);
  else {
    const _ = X(u), x = oe(u);
    if (_ || x) {
      const R = () => {
        if (e.f) {
          const I = _ ? F(d, u) ? d[u] : h[u] : u.value;
          i ? C(I) && fo(I, r) : C(I) ? I.includes(r) || I.push(r) : _ ? (h[u] = [r], F(d, u) && (d[u] = h[u])) : (u.value = [r], e.k && (h[e.k] = u.value));
        } else
          _ ? (h[u] = s, F(d, u) && (d[u] = s)) : x ? (u.value = s, e.k && (h[e.k] = s)) : process.env.NODE_ENV !== "production" && y("Invalid template ref type:", u, `(${typeof u})`);
      };
      s ? (R.id = -1, fe(R, n)) : R();
    } else
      process.env.NODE_ENV !== "production" && y("Invalid template ref type:", u, `(${typeof u})`);
  }
}
let Ct, ze;
function Se(e, t) {
  e.appContext.config.performance && mn() && ze.mark(`vue-${t}-${e.uid}`), process.env.NODE_ENV !== "production" && Gs(e, t, mn() ? ze.now() : Date.now());
}
function Re(e, t) {
  if (e.appContext.config.performance && mn()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end";
    ze.mark(o), ze.measure(
      `<${Sn(e, e.type)}> ${t}`,
      n,
      o
    ), ze.clearMarks(n), ze.clearMarks(o);
  }
  process.env.NODE_ENV !== "production" && qs(e, t, mn() ? ze.now() : Date.now());
}
function mn() {
  return Ct !== void 0 || (typeof window < "u" && window.performance ? (Ct = !0, ze = window.performance) : Ct = !1), Ct;
}
function kl() {
  const e = [];
  if (process.env.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const fe = ol;
function Kl(e) {
  return Bl(e);
}
function Bl(e, t) {
  kl();
  const n = go();
  n.__VUE__ = !0, process.env.NODE_ENV !== "production" && Do(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: o,
    remove: i,
    patchProp: r,
    createElement: s,
    createText: c,
    createComment: u,
    setText: a,
    setElementText: h,
    parentNode: d,
    nextSibling: _,
    setScopeId: x = J,
    insertStaticContent: R
  } = e, I = (l, f, p, g = null, m = null, N = null, O = void 0, E = null, b = process.env.NODE_ENV !== "production" && ct ? !1 : !!f.dynamicChildren) => {
    if (l === f)
      return;
    l && !Tt(l, f) && (g = Yt(l), Ue(l, m, N, !0), l = null), f.patchFlag === -2 && (b = !1, f.dynamicChildren = null);
    const { type: v, ref: w, shapeFlag: D } = f;
    switch (v) {
      case Gt:
        de(l, f, p, g);
        break;
      case ae:
        U(l, f, p, g);
        break;
      case un:
        l == null ? K(f, p, g, O) : process.env.NODE_ENV !== "production" && G(l, f, p, O);
        break;
      case ve:
        zt(
          l,
          f,
          p,
          g,
          m,
          N,
          O,
          E,
          b
        );
        break;
      default:
        D & 1 ? pe(
          l,
          f,
          p,
          g,
          m,
          N,
          O,
          E,
          b
        ) : D & 6 ? Ao(
          l,
          f,
          p,
          g,
          m,
          N,
          O,
          E,
          b
        ) : D & 64 || D & 128 ? v.process(
          l,
          f,
          p,
          g,
          m,
          N,
          O,
          E,
          b,
          Vt
        ) : process.env.NODE_ENV !== "production" && y("Invalid VNode type:", v, `(${typeof v})`);
    }
    w != null && m && io(w, l && l.ref, N, f || l, !f);
  }, de = (l, f, p, g) => {
    if (l == null)
      o(
        f.el = c(f.children),
        p,
        g
      );
    else {
      const m = f.el = l.el;
      f.children !== l.children && a(m, f.children);
    }
  }, U = (l, f, p, g) => {
    l == null ? o(
      f.el = u(f.children || ""),
      p,
      g
    ) : f.el = l.el;
  }, K = (l, f, p, g) => {
    [l.el, l.anchor] = R(
      l.children,
      f,
      p,
      g,
      l.el,
      l.anchor
    );
  }, G = (l, f, p, g) => {
    if (f.children !== l.children) {
      const m = _(l.anchor);
      Y(l), [f.el, f.anchor] = R(
        f.children,
        p,
        m,
        g
      );
    } else
      f.el = l.el, f.anchor = l.anchor;
  }, q = ({ el: l, anchor: f }, p, g) => {
    let m;
    for (; l && l !== f; )
      m = _(l), o(l, p, g), l = m;
    o(f, p, g);
  }, Y = ({ el: l, anchor: f }) => {
    let p;
    for (; l && l !== f; )
      p = _(l), i(l), l = p;
    i(f);
  }, pe = (l, f, p, g, m, N, O, E, b) => {
    f.type === "svg" ? O = "svg" : f.type === "math" && (O = "mathml"), l == null ? P(
      f,
      p,
      g,
      m,
      N,
      O,
      E,
      b
    ) : Ce(
      l,
      f,
      m,
      N,
      O,
      E,
      b
    );
  }, P = (l, f, p, g, m, N, O, E) => {
    let b, v;
    const { props: w, shapeFlag: D, transition: V, dirs: S } = l;
    if (b = l.el = s(
      l.type,
      N,
      w && w.is,
      w
    ), D & 8 ? h(b, l.children) : D & 16 && re(
      l.children,
      b,
      null,
      g,
      m,
      $n(l, N),
      O,
      E
    ), S && et(l, null, g, "created"), ie(b, l, l.scopeId, O, g), w) {
      for (const H in w)
        H !== "value" && !Mt(H) && r(
          b,
          H,
          null,
          w[H],
          N,
          l.children,
          g,
          m,
          Te
        );
      "value" in w && r(b, "value", null, w.value, N), (v = w.onVnodeBeforeMount) && we(v, g, l);
    }
    process.env.NODE_ENV !== "production" && (Object.defineProperty(b, "__vnode", {
      value: l,
      enumerable: !1
    }), Object.defineProperty(b, "__vueParentComponent", {
      value: g,
      enumerable: !1
    })), S && et(l, null, g, "beforeMount");
    const A = Wl(m, V);
    A && V.beforeEnter(b), o(b, f, p), ((v = w && w.onVnodeMounted) || A || S) && fe(() => {
      v && we(v, g, l), A && V.enter(b), S && et(l, null, g, "mounted");
    }, m);
  }, ie = (l, f, p, g, m) => {
    if (p && x(l, p), g)
      for (let N = 0; N < g.length; N++)
        x(l, g[N]);
    if (m) {
      let N = m.subTree;
      if (process.env.NODE_ENV !== "production" && N.patchFlag > 0 && N.patchFlag & 2048 && (N = To(N.children) || N), f === N) {
        const O = m.vnode;
        ie(
          l,
          O,
          O.scopeId,
          O.slotScopeIds,
          m.parent
        );
      }
    }
  }, re = (l, f, p, g, m, N, O, E, b = 0) => {
    for (let v = b; v < l.length; v++) {
      const w = l[v] = E ? We(l[v]) : _e(l[v]);
      I(
        null,
        w,
        f,
        p,
        g,
        m,
        N,
        O,
        E
      );
    }
  }, Ce = (l, f, p, g, m, N, O) => {
    const E = f.el = l.el;
    let { patchFlag: b, dynamicChildren: v, dirs: w } = f;
    b |= l.patchFlag & 16;
    const D = l.props || k, V = f.props || k;
    let S;
    if (p && tt(p, !1), (S = V.onVnodeBeforeUpdate) && we(S, p, f, l), w && et(f, l, p, "beforeUpdate"), p && tt(p, !0), process.env.NODE_ENV !== "production" && ct && (b = 0, O = !1, v = null), v ? ($e(
      l.dynamicChildren,
      v,
      E,
      p,
      g,
      $n(f, m),
      N
    ), process.env.NODE_ENV !== "production" && cn(l, f)) : O || ye(
      l,
      f,
      E,
      null,
      p,
      g,
      $n(f, m),
      N,
      !1
    ), b > 0) {
      if (b & 16)
        he(
          E,
          f,
          D,
          V,
          p,
          g,
          m
        );
      else if (b & 2 && D.class !== V.class && r(E, "class", null, V.class, m), b & 4 && r(E, "style", D.style, V.style, m), b & 8) {
        const A = f.dynamicProps;
        for (let H = 0; H < A.length; H++) {
          const W = A[H], Q = D[W], ge = V[W];
          (ge !== Q || W === "value") && r(
            E,
            W,
            Q,
            ge,
            m,
            l.children,
            p,
            g,
            Te
          );
        }
      }
      b & 1 && l.children !== f.children && h(E, f.children);
    } else
      !O && v == null && he(
        E,
        f,
        D,
        V,
        p,
        g,
        m
      );
    ((S = V.onVnodeUpdated) || w) && fe(() => {
      S && we(S, p, f, l), w && et(f, l, p, "updated");
    }, g);
  }, $e = (l, f, p, g, m, N, O) => {
    for (let E = 0; E < f.length; E++) {
      const b = l[E], v = f[E], w = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        b.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (b.type === ve || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Tt(b, v) || // - In the case of a component, it could contain anything.
        b.shapeFlag & 70) ? d(b.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          p
        )
      );
      I(
        b,
        v,
        w,
        null,
        g,
        m,
        N,
        O,
        !0
      );
    }
  }, he = (l, f, p, g, m, N, O) => {
    if (p !== g) {
      if (p !== k)
        for (const E in p)
          !Mt(E) && !(E in g) && r(
            l,
            E,
            p[E],
            null,
            O,
            f.children,
            m,
            N,
            Te
          );
      for (const E in g) {
        if (Mt(E))
          continue;
        const b = g[E], v = p[E];
        b !== v && E !== "value" && r(
          l,
          E,
          v,
          b,
          O,
          f.children,
          m,
          N,
          Te
        );
      }
      "value" in g && r(l, "value", p.value, g.value, O);
    }
  }, zt = (l, f, p, g, m, N, O, E, b) => {
    const v = f.el = l ? l.el : c(""), w = f.anchor = l ? l.anchor : c("");
    let { patchFlag: D, dynamicChildren: V, slotScopeIds: S } = f;
    process.env.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (ct || D & 2048) && (D = 0, b = !1, V = null), S && (E = E ? E.concat(S) : S), l == null ? (o(v, p, g), o(w, p, g), re(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      f.children || [],
      p,
      w,
      m,
      N,
      O,
      E,
      b
    )) : D > 0 && D & 64 && V && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    l.dynamicChildren ? ($e(
      l.dynamicChildren,
      V,
      p,
      m,
      N,
      O,
      E
    ), process.env.NODE_ENV !== "production" ? cn(l, f) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (f.key != null || m && f === m.subTree) && cn(
        l,
        f,
        !0
        /* shallow */
      )
    )) : ye(
      l,
      f,
      p,
      w,
      m,
      N,
      O,
      E,
      b
    );
  }, Ao = (l, f, p, g, m, N, O, E, b) => {
    f.slotScopeIds = E, l == null ? f.shapeFlag & 512 ? m.ctx.activate(
      f,
      p,
      g,
      O,
      b
    ) : He(
      f,
      p,
      g,
      m,
      N,
      O,
      b
    ) : ce(l, f, b);
  }, He = (l, f, p, g, m, N, O) => {
    const E = l.component = tc(
      l,
      g,
      m
    );
    if (process.env.NODE_ENV !== "production" && E.type.__hmrId && js(E), process.env.NODE_ENV !== "production" && (on(l), Se(E, "mount")), So(l) && (E.ctx.renderer = Vt), process.env.NODE_ENV !== "production" && Se(E, "init"), ic(E), process.env.NODE_ENV !== "production" && Re(E, "init"), E.asyncDep) {
      if (m && m.registerDep(E, L), !l.el) {
        const b = E.subTree = Me(ae);
        U(null, b, f, p);
      }
    } else
      L(
        E,
        l,
        f,
        p,
        m,
        N,
        O
      );
    process.env.NODE_ENV !== "production" && (rn(), Re(E, "mount"));
  }, ce = (l, f, p) => {
    const g = f.component = l.component;
    if (Zs(l, f, p))
      if (g.asyncDep && !g.asyncResolved) {
        process.env.NODE_ENV !== "production" && on(f), j(g, f, p), process.env.NODE_ENV !== "production" && rn();
        return;
      } else
        g.next = f, Fs(g.update), g.effect.dirty = !0, g.update();
    else
      f.el = l.el, g.vnode = f;
  }, L = (l, f, p, g, m, N, O) => {
    const E = () => {
      if (l.isMounted) {
        let { next: w, bu: D, u: V, parent: S, vnode: A } = l;
        {
          const pt = Nr(l);
          if (pt) {
            w && (w.el = A.el, j(l, w, O)), pt.asyncDep.then(() => {
              l.isUnmounted || E();
            });
            return;
          }
        }
        let H = w, W;
        process.env.NODE_ENV !== "production" && on(w || l.vnode), tt(l, !1), w ? (w.el = A.el, j(l, w, O)) : w = A, D && ht(D), (W = w.props && w.props.onVnodeBeforeUpdate) && we(W, S, w, A), tt(l, !0), process.env.NODE_ENV !== "production" && Se(l, "render");
        const Q = An(l);
        process.env.NODE_ENV !== "production" && Re(l, "render");
        const ge = l.subTree;
        l.subTree = Q, process.env.NODE_ENV !== "production" && Se(l, "patch"), I(
          ge,
          Q,
          // parent may have changed if it's in a teleport
          d(ge.el),
          // anchor may have changed if it's in a fragment
          Yt(ge),
          l,
          m,
          N
        ), process.env.NODE_ENV !== "production" && Re(l, "patch"), w.el = Q.el, H === null && el(l, Q.el), V && fe(V, m), (W = w.props && w.props.onVnodeUpdated) && fe(
          () => we(W, S, w, A),
          m
        ), process.env.NODE_ENV !== "production" && Qi(l), process.env.NODE_ENV !== "production" && rn();
      } else {
        let w;
        const { el: D, props: V } = f, { bm: S, m: A, parent: H } = l, W = sn(f);
        if (tt(l, !1), S && ht(S), !W && (w = V && V.onVnodeBeforeMount) && we(w, H, f), tt(l, !0), D && $o) {
          const Q = () => {
            process.env.NODE_ENV !== "production" && Se(l, "render"), l.subTree = An(l), process.env.NODE_ENV !== "production" && Re(l, "render"), process.env.NODE_ENV !== "production" && Se(l, "hydrate"), $o(
              D,
              l.subTree,
              l,
              m,
              null
            ), process.env.NODE_ENV !== "production" && Re(l, "hydrate");
          };
          W ? f.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !l.isUnmounted && Q()
          ) : Q();
        } else {
          process.env.NODE_ENV !== "production" && Se(l, "render");
          const Q = l.subTree = An(l);
          process.env.NODE_ENV !== "production" && Re(l, "render"), process.env.NODE_ENV !== "production" && Se(l, "patch"), I(
            null,
            Q,
            p,
            g,
            l,
            m,
            N
          ), process.env.NODE_ENV !== "production" && Re(l, "patch"), f.el = Q.el;
        }
        if (A && fe(A, m), !W && (w = V && V.onVnodeMounted)) {
          const Q = f;
          fe(
            () => we(w, H, Q),
            m
          );
        }
        (f.shapeFlag & 256 || H && sn(H.vnode) && H.vnode.shapeFlag & 256) && l.a && fe(l.a, m), l.isMounted = !0, process.env.NODE_ENV !== "production" && Ks(l), f = p = g = null;
      }
    }, b = l.effect = new vo(
      E,
      J,
      () => xn(v),
      l.scope
      // track it in component's effect scope
    ), v = l.update = () => {
      b.dirty && b.run();
    };
    v.id = l.uid, tt(l, !0), process.env.NODE_ENV !== "production" && (b.onTrack = l.rtc ? (w) => ht(l.rtc, w) : void 0, b.onTrigger = l.rtg ? (w) => ht(l.rtg, w) : void 0, v.ownerInstance = l), v();
  }, j = (l, f, p) => {
    f.component = l;
    const g = l.vnode.props;
    l.vnode = f, l.next = null, Pl(l, f.props, g, p), Ul(l, f.children, p), Ae(), Xo(l), je();
  }, ye = (l, f, p, g, m, N, O, E, b = !1) => {
    const v = l && l.children, w = l ? l.shapeFlag : 0, D = f.children, { patchFlag: V, shapeFlag: S } = f;
    if (V > 0) {
      if (V & 128) {
        xt(
          v,
          D,
          p,
          g,
          m,
          N,
          O,
          E,
          b
        );
        return;
      } else if (V & 256) {
        Rn(
          v,
          D,
          p,
          g,
          m,
          N,
          O,
          E,
          b
        );
        return;
      }
    }
    S & 8 ? (w & 16 && Te(v, m, N), D !== v && h(p, D)) : w & 16 ? S & 16 ? xt(
      v,
      D,
      p,
      g,
      m,
      N,
      O,
      E,
      b
    ) : Te(v, m, N, !0) : (w & 8 && h(p, ""), S & 16 && re(
      D,
      p,
      g,
      m,
      N,
      O,
      E,
      b
    ));
  }, Rn = (l, f, p, g, m, N, O, E, b) => {
    l = l || _t, f = f || _t;
    const v = l.length, w = f.length, D = Math.min(v, w);
    let V;
    for (V = 0; V < D; V++) {
      const S = f[V] = b ? We(f[V]) : _e(f[V]);
      I(
        l[V],
        S,
        p,
        null,
        m,
        N,
        O,
        E,
        b
      );
    }
    v > w ? Te(
      l,
      m,
      N,
      !0,
      !1,
      D
    ) : re(
      f,
      p,
      g,
      m,
      N,
      O,
      E,
      b,
      D
    );
  }, xt = (l, f, p, g, m, N, O, E, b) => {
    let v = 0;
    const w = f.length;
    let D = l.length - 1, V = w - 1;
    for (; v <= D && v <= V; ) {
      const S = l[v], A = f[v] = b ? We(f[v]) : _e(f[v]);
      if (Tt(S, A))
        I(
          S,
          A,
          p,
          null,
          m,
          N,
          O,
          E,
          b
        );
      else
        break;
      v++;
    }
    for (; v <= D && v <= V; ) {
      const S = l[D], A = f[V] = b ? We(f[V]) : _e(f[V]);
      if (Tt(S, A))
        I(
          S,
          A,
          p,
          null,
          m,
          N,
          O,
          E,
          b
        );
      else
        break;
      D--, V--;
    }
    if (v > D) {
      if (v <= V) {
        const S = V + 1, A = S < w ? f[S].el : g;
        for (; v <= V; )
          I(
            null,
            f[v] = b ? We(f[v]) : _e(f[v]),
            p,
            A,
            m,
            N,
            O,
            E,
            b
          ), v++;
      }
    } else if (v > V)
      for (; v <= D; )
        Ue(l[v], m, N, !0), v++;
    else {
      const S = v, A = v, H = /* @__PURE__ */ new Map();
      for (v = A; v <= V; v++) {
        const se = f[v] = b ? We(f[v]) : _e(f[v]);
        se.key != null && (process.env.NODE_ENV !== "production" && H.has(se.key) && y(
          "Duplicate keys found during update:",
          JSON.stringify(se.key),
          "Make sure keys are unique."
        ), H.set(se.key, v));
      }
      let W, Q = 0;
      const ge = V - A + 1;
      let pt = !1, Ho = 0;
      const Dt = new Array(ge);
      for (v = 0; v < ge; v++)
        Dt[v] = 0;
      for (v = S; v <= D; v++) {
        const se = l[v];
        if (Q >= ge) {
          Ue(se, m, N, !0);
          continue;
        }
        let Oe;
        if (se.key != null)
          Oe = H.get(se.key);
        else
          for (W = A; W <= V; W++)
            if (Dt[W - A] === 0 && Tt(se, f[W])) {
              Oe = W;
              break;
            }
        Oe === void 0 ? Ue(se, m, N, !0) : (Dt[Oe - A] = v + 1, Oe >= Ho ? Ho = Oe : pt = !0, I(
          se,
          f[Oe],
          p,
          null,
          m,
          N,
          O,
          E,
          b
        ), Q++);
      }
      const Uo = pt ? Gl(Dt) : _t;
      for (W = Uo.length - 1, v = ge - 1; v >= 0; v--) {
        const se = A + v, Oe = f[se], ko = se + 1 < w ? f[se + 1].el : g;
        Dt[v] === 0 ? I(
          null,
          Oe,
          p,
          ko,
          m,
          N,
          O,
          E,
          b
        ) : pt && (W < 0 || v !== Uo[W] ? dt(Oe, p, ko, 2) : W--);
      }
    }
  }, dt = (l, f, p, g, m = null) => {
    const { el: N, type: O, transition: E, children: b, shapeFlag: v } = l;
    if (v & 6) {
      dt(l.component.subTree, f, p, g);
      return;
    }
    if (v & 128) {
      l.suspense.move(f, p, g);
      return;
    }
    if (v & 64) {
      O.move(l, f, p, Vt);
      return;
    }
    if (O === ve) {
      o(N, f, p);
      for (let D = 0; D < b.length; D++)
        dt(b[D], f, p, g);
      o(l.anchor, f, p);
      return;
    }
    if (O === un) {
      q(l, f, p);
      return;
    }
    if (g !== 2 && v & 1 && E)
      if (g === 0)
        E.beforeEnter(N), o(N, f, p), fe(() => E.enter(N), m);
      else {
        const { leave: D, delayLeave: V, afterLeave: S } = E, A = () => o(N, f, p), H = () => {
          D(N, () => {
            A(), S && S();
          });
        };
        V ? V(N, A, H) : H();
      }
    else
      o(N, f, p);
  }, Ue = (l, f, p, g = !1, m = !1) => {
    const {
      type: N,
      props: O,
      ref: E,
      children: b,
      dynamicChildren: v,
      shapeFlag: w,
      patchFlag: D,
      dirs: V
    } = l;
    if (E != null && io(E, null, p, l, !0), w & 256) {
      f.ctx.deactivate(l);
      return;
    }
    const S = w & 1 && V, A = !sn(l);
    let H;
    if (A && (H = O && O.onVnodeBeforeUnmount) && we(H, f, l), w & 6)
      Rr(l.component, p, g);
    else {
      if (w & 128) {
        l.suspense.unmount(p, g);
        return;
      }
      S && et(l, null, f, "beforeUnmount"), w & 64 ? l.type.remove(
        l,
        f,
        p,
        m,
        Vt,
        g
      ) : v && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (N !== ve || D > 0 && D & 64) ? Te(
        v,
        f,
        p,
        !1,
        !0
      ) : (N === ve && D & 384 || !m && w & 16) && Te(b, f, p), g && In(l);
    }
    (A && (H = O && O.onVnodeUnmounted) || S) && fe(() => {
      H && we(H, f, l), S && et(l, null, f, "unmounted");
    }, p);
  }, In = (l) => {
    const { type: f, el: p, anchor: g, transition: m } = l;
    if (f === ve) {
      process.env.NODE_ENV !== "production" && l.patchFlag > 0 && l.patchFlag & 2048 && m && !m.persisted ? l.children.forEach((O) => {
        O.type === ae ? i(O.el) : In(O);
      }) : Sr(p, g);
      return;
    }
    if (f === un) {
      Y(l);
      return;
    }
    const N = () => {
      i(p), m && !m.persisted && m.afterLeave && m.afterLeave();
    };
    if (l.shapeFlag & 1 && m && !m.persisted) {
      const { leave: O, delayLeave: E } = m, b = () => O(p, N);
      E ? E(l.el, N, b) : b();
    } else
      N();
  }, Sr = (l, f) => {
    let p;
    for (; l !== f; )
      p = _(l), i(l), l = p;
    i(f);
  }, Rr = (l, f, p) => {
    process.env.NODE_ENV !== "production" && l.type.__hmrId && Ls(l);
    const { bum: g, scope: m, update: N, subTree: O, um: E } = l;
    g && ht(g), m.stop(), N && (N.active = !1, Ue(O, l, f, p)), E && fe(E, f), fe(() => {
      l.isUnmounted = !0;
    }, f), f && f.pendingBranch && !f.isUnmounted && l.asyncDep && !l.asyncResolved && l.suspenseId === f.pendingId && (f.deps--, f.deps === 0 && f.resolve()), process.env.NODE_ENV !== "production" && Ws(l);
  }, Te = (l, f, p, g = !1, m = !1, N = 0) => {
    for (let O = N; O < l.length; O++)
      Ue(l[O], f, p, g, m);
  }, Yt = (l) => l.shapeFlag & 6 ? Yt(l.component.subTree) : l.shapeFlag & 128 ? l.suspense.next() : _(l.anchor || l.el);
  let Pn = !1;
  const jo = (l, f, p) => {
    l == null ? f._vnode && Ue(f._vnode, null, null, !0) : I(
      f._vnode || null,
      l,
      f,
      null,
      null,
      null,
      p
    ), Pn || (Pn = !0, Xo(), Yi(), Pn = !1), f._vnode = l;
  }, Vt = {
    p: I,
    um: Ue,
    m: dt,
    r: In,
    mt: He,
    mc: re,
    pc: ye,
    pbc: $e,
    n: Yt,
    o: e
  };
  let Lo, $o;
  return {
    render: jo,
    hydrate: Lo,
    createApp: Tl(jo, Lo)
  };
}
function $n({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function tt({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function Wl(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function cn(e, t, n = !1) {
  const o = e.children, i = t.children;
  if (C(o) && C(i))
    for (let r = 0; r < o.length; r++) {
      const s = o[r];
      let c = i[r];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = i[r] = We(i[r]), c.el = s.el), n || cn(s, c)), c.type === Gt && (c.el = s.el), process.env.NODE_ENV !== "production" && c.type === ae && !c.el && (c.el = s.el);
    }
}
function Gl(e) {
  const t = e.slice(), n = [0];
  let o, i, r, s, c;
  const u = e.length;
  for (o = 0; o < u; o++) {
    const a = e[o];
    if (a !== 0) {
      if (i = n[n.length - 1], e[i] < a) {
        t[o] = i, n.push(o);
        continue;
      }
      for (r = 0, s = n.length - 1; r < s; )
        c = r + s >> 1, e[n[c]] < a ? r = c + 1 : s = c;
      a < e[n[r]] && (r > 0 && (t[o] = n[r - 1]), n[r] = o);
    }
  }
  for (r = n.length, s = n[r - 1]; r-- > 0; )
    n[r] = s, s = t[s];
  return n;
}
function Nr(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Nr(t);
}
const ql = (e) => e.__isTeleport, ve = Symbol.for("v-fgt"), Gt = Symbol.for("v-txt"), ae = Symbol.for("v-cmt"), un = Symbol.for("v-stc"), jt = [];
let Ne = null;
function Pt(e = !1) {
  jt.push(Ne = e ? null : []);
}
function zl() {
  jt.pop(), Ne = jt[jt.length - 1] || null;
}
let Ut = 1;
function fi(e) {
  Ut += e;
}
function br(e) {
  return e.dynamicChildren = Ut > 0 ? Ne || _t : null, zl(), Ut > 0 && Ne && Ne.push(e), e;
}
function nn(e, t, n, o, i, r) {
  return br(
    $(
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
function Yl(e, t, n, o, i) {
  return br(
    Me(
      e,
      t,
      n,
      o,
      i,
      !0
    )
  );
}
function Mo(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Tt(e, t) {
  return process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && gt.has(t.type) ? (e.shapeFlag &= -257, t.shapeFlag &= -513, !1) : e.type === t.type && e.key === t.key;
}
const Jl = (...e) => Or(
  ...e
), yr = ({ key: e }) => e ?? null, fn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? X(e) || oe(e) || T(e) ? { i: ne, r: e, k: t, f: !!n } : e : null);
function $(e, t = null, n = null, o = 0, i = null, r = e === ve ? 0 : 1, s = !1, c = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && yr(t),
    ref: t && fn(t),
    scopeId: tr,
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
    ctx: ne
  };
  return c ? (Fo(u, n), r & 128 && e.normalize(u)) : n && (u.shapeFlag |= X(n) ? 8 : 16), process.env.NODE_ENV !== "production" && u.key !== u.key && y("VNode created with invalid key (NaN). VNode type:", u.type), Ut > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  Ne && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && Ne.push(u), u;
}
const Me = process.env.NODE_ENV !== "production" ? Jl : Or;
function Or(e, t = null, n = null, o = 0, i = null, r = !1) {
  if ((!e || e === tl) && (process.env.NODE_ENV !== "production" && !e && y(`Invalid vnode type when creating vnode: ${e}.`), e = ae), Mo(e)) {
    const c = Ze(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Fo(c, n), Ut > 0 && !r && Ne && (c.shapeFlag & 6 ? Ne[Ne.indexOf(e)] = c : Ne.push(c)), c.patchFlag |= -2, c;
  }
  if (Cr(e) && (e = e.__vccOpts), t) {
    t = Xl(t);
    let { class: c, style: u } = t;
    c && !X(c) && (t.class = mo(c)), B(u) && (Yn(u) && !C(u) && (u = z({}, u)), t.style = qe(u));
  }
  const s = X(e) ? 1 : nl(e) ? 128 : ql(e) ? 64 : B(e) ? 4 : T(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && s & 4 && Yn(e) && (e = M(e), y(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), $(
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
function Xl(e) {
  return e ? Yn(e) || pr(e) ? z({}, e) : e : null;
}
function Ze(e, t, n = !1, o = !1) {
  const { props: i, ref: r, patchFlag: s, children: c, transition: u } = e, a = t ? Ql(i || {}, t) : i, h = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: a,
    key: a && yr(a),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? C(r) ? r.concat(fn(t)) : [r, fn(t)] : fn(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && s === -1 && C(c) ? c.map(wr) : c,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== ve ? s === -1 ? 16 : s | 16 : s,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: u,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Ze(e.ssContent),
    ssFallback: e.ssFallback && Ze(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return u && o && (h.transition = u.clone(h)), h;
}
function wr(e) {
  const t = Ze(e);
  return C(e.children) && (t.children = e.children.map(wr)), t;
}
function ro(e = " ", t = 0) {
  return Me(Gt, null, e, t);
}
function Hn(e = "", t = !1) {
  return t ? (Pt(), Yl(ae, null, e)) : Me(ae, null, e);
}
function _e(e) {
  return e == null || typeof e == "boolean" ? Me(ae) : C(e) ? Me(
    ve,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? We(e) : Me(Gt, null, String(e));
}
function We(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ze(e);
}
function Fo(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (C(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), Fo(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !pr(t) ? t._ctx = ne : i === 3 && ne && (ne.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    T(t) ? (t = { default: t, _ctx: ne }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [ro(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Ql(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const i in o)
      if (i === "class")
        t.class !== o.class && (t.class = mo([t.class, o.class]));
      else if (i === "style")
        t.style = qe([t.style, o.style]);
      else if (kt(i)) {
        const r = t[i], s = o[i];
        s && r !== s && !(C(r) && r.includes(s)) && (t[i] = r ? [].concat(r, s) : s);
      } else
        i !== "" && (t[i] = o[i]);
  }
  return t;
}
function we(e, t, n, o = null) {
  be(e, t, 7, [
    n,
    o
  ]);
}
const Zl = fr();
let ec = 0;
function tc(e, t, n) {
  const o = e.type, i = (t ? t.appContext : e.appContext) || Zl, r = {
    uid: ec++,
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
    scope: new Qr(
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
    propsOptions: gr(o, i),
    emitsOptions: er(o, i),
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
  return process.env.NODE_ENV !== "production" ? r.ctx = El(r) : r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = Ys.bind(null, r), e.ce && e.ce(r), r;
}
let Z = null;
const nc = () => Z || ne;
let vn, so;
{
  const e = go(), t = (n, o) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(o), (r) => {
      i.length > 1 ? i.forEach((s) => s(r)) : i[0](r);
    };
  };
  vn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Z = n
  ), so = t(
    "__VUE_SSR_SETTERS__",
    (n) => Cn = n
  );
}
const qt = (e) => {
  const t = Z;
  return vn(e), e.scope.on(), () => {
    e.scope.off(), vn(t);
  };
}, ai = () => {
  Z && Z.scope.off(), vn(null);
}, oc = /* @__PURE__ */ Fe("slot,component");
function lo(e, { isNativeTag: t }) {
  (oc(e) || t(e)) && y(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function xr(e) {
  return e.vnode.shapeFlag & 4;
}
let Cn = !1;
function ic(e, t = !1) {
  t && so(t);
  const { props: n, children: o } = e.vnode, i = xr(e);
  Rl(e, n, i, t), Hl(e, o);
  const r = i ? rc(e, t) : void 0;
  return t && so(!1), r;
}
function rc(e, t) {
  var n;
  const o = e.type;
  if (process.env.NODE_ENV !== "production") {
    if (o.name && lo(o.name, e.appContext.config), o.components) {
      const r = Object.keys(o.components);
      for (let s = 0; s < r.length; s++)
        lo(r[s], e.appContext.config);
    }
    if (o.directives) {
      const r = Object.keys(o.directives);
      for (let s = 0; s < r.length; s++)
        rr(r[s]);
    }
    o.compilerOptions && sc() && y(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, cr), process.env.NODE_ENV !== "production" && Nl(e);
  const { setup: i } = o;
  if (i) {
    const r = e.setupContext = i.length > 1 ? cc(e) : null, s = qt(e);
    Ae();
    const c = Pe(
      i,
      e,
      0,
      [
        process.env.NODE_ENV !== "production" ? Ve(e.props) : e.props,
        r
      ]
    );
    if (je(), s(), ao(c)) {
      if (c.then(ai, ai), t)
        return c.then((u) => {
          di(e, u, t);
        }).catch((u) => {
          Bt(u, e, 0);
        });
      if (e.asyncDep = c, process.env.NODE_ENV !== "production" && !e.suspense) {
        const u = (n = o.name) != null ? n : "Anonymous";
        y(
          `Component <${u}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      di(e, c, t);
  } else
    Vr(e, t);
}
function di(e, t, n) {
  T(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : B(t) ? (process.env.NODE_ENV !== "production" && Mo(t) && y(
    "setup() should not return VNodes directly - return a render function instead."
  ), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = Bi(t), process.env.NODE_ENV !== "production" && bl(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && y(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), Vr(e, n);
}
let co;
const sc = () => !co;
function Vr(e, t, n) {
  const o = e.type;
  if (!e.render) {
    if (!t && co && !o.render) {
      const i = o.template || Io(e).template;
      if (i) {
        process.env.NODE_ENV !== "production" && Se(e, "compile");
        const { isCustomElement: r, compilerOptions: s } = e.appContext.config, { delimiters: c, compilerOptions: u } = o, a = z(
          z(
            {
              isCustomElement: r,
              delimiters: c
            },
            s
          ),
          u
        );
        o.render = co(i, a), process.env.NODE_ENV !== "production" && Re(e, "compile");
      }
    }
    e.render = o.render || J;
  }
  {
    const i = qt(e);
    Ae();
    try {
      Ol(e);
    } finally {
      je(), i();
    }
  }
  process.env.NODE_ENV !== "production" && !o.render && e.render === J && !t && (o.template ? y(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : y("Component is missing template or render function."));
}
const pi = process.env.NODE_ENV !== "production" ? {
  get(e, t) {
    return hn(), ee(e, "get", ""), e[t];
  },
  set() {
    return y("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return y("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return ee(e, "get", ""), e[t];
  }
};
function lc(e) {
  return e.slotsProxy || (e.slotsProxy = new Proxy(e.slots, {
    get(t, n) {
      return ee(e, "get", "$slots"), t[n];
    }
  }));
}
function cc(e) {
  const t = (n) => {
    if (process.env.NODE_ENV !== "production" && (e.exposed && y("expose() should be called only once per setup()."), n != null)) {
      let o = typeof n;
      o === "object" && (C(n) ? o = "array" : oe(n) && (o = "ref")), o !== "object" && y(
        `expose() should be passed a plain object, received ${o}.`
      );
    }
    e.exposed = n || {};
  };
  if (process.env.NODE_ENV !== "production") {
    let n;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, pi));
      },
      get slots() {
        return lc(e);
      },
      get emit() {
        return (o, ...i) => e.emit(o, ...i);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, pi),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function Tn(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Bi(bs(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in ut)
          return ut[n](e);
      },
      has(t, n) {
        return n in t || n in ut;
      }
    }));
}
const uc = /(?:^|[-_])(\w)/g, fc = (e) => e.replace(uc, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Dr(e, t = !0) {
  return T(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Sn(e, t, n = !1) {
  let o = Dr(t);
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
  return o ? fc(o) : n ? "App" : "Anonymous";
}
function Cr(e) {
  return T(e) && "__vccOpts" in e;
}
const ac = (e, t) => {
  const n = Os(e, t, Cn);
  if (process.env.NODE_ENV !== "production") {
    const o = nc();
    o && o.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function dc() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, o = { style: "color:#eb2f96" }, i = {
    header(d) {
      return B(d) ? d.__isVue ? ["div", e, "VueInstance"] : oe(d) ? [
        "div",
        {},
        ["span", e, h(d)],
        "<",
        c(d.value),
        ">"
      ] : Nt(d) ? [
        "div",
        {},
        ["span", e, bt(d) ? "ShallowReactive" : "Reactive"],
        "<",
        c(d),
        `>${wt(d) ? " (readonly)" : ""}`
      ] : wt(d) ? [
        "div",
        {},
        ["span", e, bt(d) ? "ShallowReadonly" : "Readonly"],
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
    const _ = [];
    d.type.props && d.props && _.push(s("props", M(d.props))), d.setupState !== k && _.push(s("setup", d.setupState)), d.data !== k && _.push(s("data", M(d.data)));
    const x = u(d, "computed");
    x && _.push(s("computed", x));
    const R = u(d, "inject");
    return R && _.push(s("injected", R)), _.push([
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
    ]), _;
  }
  function s(d, _) {
    return _ = z({}, _), Object.keys(_).length ? [
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
        ...Object.keys(_).map((x) => [
          "div",
          {},
          ["span", o, x + ": "],
          c(_[x], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function c(d, _ = !0) {
    return typeof d == "number" ? ["span", t, d] : typeof d == "string" ? ["span", n, JSON.stringify(d)] : typeof d == "boolean" ? ["span", o, d] : B(d) ? ["object", { object: _ ? M(d) : d }] : ["span", n, String(d)];
  }
  function u(d, _) {
    const x = d.type;
    if (T(x))
      return;
    const R = {};
    for (const I in d.ctx)
      a(x, I, _) && (R[I] = d.ctx[I]);
    return R;
  }
  function a(d, _, x) {
    const R = d[x];
    if (C(R) && R.includes(_) || B(R) && _ in R || d.extends && a(d.extends, _, x) || d.mixins && d.mixins.some((I) => a(I, _, x)))
      return !0;
  }
  function h(d) {
    return bt(d) ? "ShallowRef" : d.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(i) : window.devtoolsFormatters = [i];
}
const hi = "3.4.27", Je = process.env.NODE_ENV !== "production" ? y : J;
process.env.NODE_ENV;
process.env.NODE_ENV;
/**
* @vue/runtime-dom v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const pc = "http://www.w3.org/2000/svg", hc = "http://www.w3.org/1998/Math/MathML", Ge = typeof document < "u" ? document : null, gi = Ge && /* @__PURE__ */ Ge.createElement("template"), gc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const i = t === "svg" ? Ge.createElementNS(pc, e) : t === "mathml" ? Ge.createElementNS(hc, e) : Ge.createElement(e, n ? { is: n } : void 0);
    return e === "select" && o && o.multiple != null && i.setAttribute("multiple", o.multiple), i;
  },
  createText: (e) => Ge.createTextNode(e),
  createComment: (e) => Ge.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Ge.querySelector(e),
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
      gi.innerHTML = o === "svg" ? `<svg>${e}</svg>` : o === "mathml" ? `<math>${e}</math>` : e;
      const c = gi.content;
      if (o === "svg" || o === "mathml") {
        const u = c.firstChild;
        for (; u.firstChild; )
          c.appendChild(u.firstChild);
        c.removeChild(u);
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
}, mc = Symbol("_vtc");
function vc(e, t, n) {
  const o = e[mc];
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const _n = Symbol("_vod"), Tr = Symbol("_vsh"), Ke = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[_n] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : St(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: o }) {
    !t != !n && (o ? t ? (o.beforeEnter(e), St(e, !0), o.enter(e)) : o.leave(e, () => {
      St(e, !1);
    }) : St(e, t));
  },
  beforeUnmount(e, { value: t }) {
    St(e, t);
  }
};
process.env.NODE_ENV !== "production" && (Ke.name = "show");
function St(e, t) {
  e.style.display = t ? e[_n] : "none", e[Tr] = !t;
}
const _c = Symbol(process.env.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), Ec = /(^|;)\s*display\s*:/;
function Nc(e, t, n) {
  const o = e.style, i = X(n);
  let r = !1;
  if (n && !i) {
    if (t)
      if (X(t))
        for (const s of t.split(";")) {
          const c = s.slice(0, s.indexOf(":")).trim();
          n[c] == null && an(o, c, "");
        }
      else
        for (const s in t)
          n[s] == null && an(o, s, "");
    for (const s in n)
      s === "display" && (r = !0), an(o, s, n[s]);
  } else if (i) {
    if (t !== n) {
      const s = o[_c];
      s && (n += ";" + s), o.cssText = n, r = Ec.test(n);
    }
  } else
    t && e.removeAttribute("style");
  _n in e && (e[_n] = r ? o.display : "", e[Tr] && (o.display = "none"));
}
const bc = /[^\\];\s*$/, mi = /\s*!important$/;
function an(e, t, n) {
  if (C(n))
    n.forEach((o) => an(e, t, o));
  else if (n == null && (n = ""), process.env.NODE_ENV !== "production" && bc.test(n) && Je(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = yc(e, t);
    mi.test(n) ? e.setProperty(
      Xe(o),
      n.replace(mi, ""),
      "important"
    ) : e[o] = n;
  }
}
const vi = ["Webkit", "Moz", "ms"], Un = {};
function yc(e, t) {
  const n = Un[t];
  if (n)
    return n;
  let o = Ot(t);
  if (o !== "filter" && o in e)
    return Un[t] = o;
  o = bn(o);
  for (let i = 0; i < vi.length; i++) {
    const r = vi[i] + o;
    if (r in e)
      return Un[t] = r;
  }
  return t;
}
const _i = "http://www.w3.org/1999/xlink";
function Oc(e, t, n, o, i) {
  if (o && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(_i, t.slice(6, t.length)) : e.setAttributeNS(_i, t, n);
  else {
    const r = Xr(t);
    n == null || r && !Di(n) ? e.removeAttribute(t) : e.setAttribute(t, r ? "" : n);
  }
}
function wc(e, t, n, o, i, r, s) {
  if (t === "innerHTML" || t === "textContent") {
    o && s(o, i, r), e[t] = n ?? "";
    return;
  }
  const c = e.tagName;
  if (t === "value" && c !== "PROGRESS" && // custom elements may use _value internally
  !c.includes("-")) {
    const a = c === "OPTION" ? e.getAttribute("value") || "" : e.value, h = n ?? "";
    (a !== h || !("_value" in e)) && (e.value = h), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let u = !1;
  if (n === "" || n == null) {
    const a = typeof e[t];
    a === "boolean" ? n = Di(n) : n == null && a === "string" ? (n = "", u = !0) : a === "number" && (n = 0, u = !0);
  }
  try {
    e[t] = n;
  } catch (a) {
    process.env.NODE_ENV !== "production" && !u && Je(
      `Failed setting prop "${t}" on <${c.toLowerCase()}>: value ${n} is invalid.`,
      a
    );
  }
  u && e.removeAttribute(t);
}
function mt(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function xc(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
const Ei = Symbol("_vei");
function Vc(e, t, n, o, i = null) {
  const r = e[Ei] || (e[Ei] = {}), s = r[t];
  if (o && s)
    s.value = process.env.NODE_ENV !== "production" ? bi(o, t) : o;
  else {
    const [c, u] = Dc(t);
    if (o) {
      const a = r[t] = Sc(
        process.env.NODE_ENV !== "production" ? bi(o, t) : o,
        i
      );
      mt(e, c, a, u);
    } else
      s && (xc(e, c, s, u), r[t] = void 0);
  }
}
const Ni = /(?:Once|Passive|Capture)$/;
function Dc(e) {
  let t;
  if (Ni.test(e)) {
    t = {};
    let o;
    for (; o = e.match(Ni); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Xe(e.slice(2)), t];
}
let kn = 0;
const Cc = /* @__PURE__ */ Promise.resolve(), Tc = () => kn || (Cc.then(() => kn = 0), kn = Date.now());
function Sc(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    be(
      Rc(o, n.value),
      t,
      5,
      [o]
    );
  };
  return n.value = e, n.attached = Tc(), n;
}
function bi(e, t) {
  return T(e) || C(e) ? e : (Je(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), J);
}
function Rc(e, t) {
  if (C(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (o) => (i) => !i._stopped && o && o(i)
    );
  } else
    return t;
}
const yi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Ic = (e, t, n, o, i, r, s, c, u) => {
  const a = i === "svg";
  t === "class" ? vc(e, o, a) : t === "style" ? Nc(e, n, o) : kt(t) ? dn(t) || Vc(e, t, n, o, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Pc(e, t, o, a)) ? wc(
    e,
    t,
    o,
    r,
    s,
    c,
    u
  ) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), Oc(e, t, o, a));
};
function Pc(e, t, n, o) {
  if (o)
    return !!(t === "innerHTML" || t === "textContent" || t in e && yi(t) && T(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return yi(t) && X(n) ? !1 : t in e;
}
const Oi = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return C(t) ? (n) => ht(t, n) : t;
};
function Mc(e) {
  e.target.composing = !0;
}
function wi(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Kn = Symbol("_assign"), nt = {
  created(e, { modifiers: { lazy: t, trim: n, number: o } }, i) {
    e[Kn] = Oi(i);
    const r = o || i.props && i.props.type === "number";
    mt(e, t ? "change" : "input", (s) => {
      if (s.target.composing)
        return;
      let c = e.value;
      n && (c = c.trim()), r && (c = Bn(c)), e[Kn](c);
    }), n && mt(e, "change", () => {
      e.value = e.value.trim();
    }), t || (mt(e, "compositionstart", Mc), mt(e, "compositionend", wi), mt(e, "change", wi));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, modifiers: { lazy: n, trim: o, number: i } }, r) {
    if (e[Kn] = Oi(r), e.composing)
      return;
    const s = (i || e.type === "number") && !/^0\d/.test(e.value) ? Bn(e.value) : e.value, c = t ?? "";
    s !== c && (document.activeElement === e && e.type !== "range" && (n || o && e.value.trim() === c) || (e.value = c));
  }
}, Fc = ["ctrl", "shift", "alt", "meta"], Ac = {
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
  exact: (e, t) => Fc.some((n) => e[`${n}Key`] && !t.includes(n))
}, jc = (e, t) => {
  const n = e._withMods || (e._withMods = {}), o = t.join(".");
  return n[o] || (n[o] = (i, ...r) => {
    for (let s = 0; s < t.length; s++) {
      const c = Ac[t[s]];
      if (c && c(i, t))
        return;
    }
    return e(i, ...r);
  });
}, Lc = /* @__PURE__ */ z({ patchProp: Ic }, gc);
let xi;
function $c() {
  return xi || (xi = Kl(Lc));
}
const Hc = (...e) => {
  const t = $c().createApp(...e);
  process.env.NODE_ENV !== "production" && (kc(t), Kc(t));
  const { mount: n } = t;
  return t.mount = (o) => {
    const i = Bc(o);
    if (!i)
      return;
    const r = t._component;
    !T(r) && !r.render && !r.template && (r.template = i.innerHTML), i.innerHTML = "";
    const s = n(i, !1, Uc(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), s;
  }, t;
};
function Uc(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function kc(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => qr(t) || zr(t) || Yr(t),
    writable: !1
  });
}
function Kc(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        Je(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, o = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return Je(o), n;
      },
      set() {
        Je(o);
      }
    });
  }
}
function Bc(e) {
  if (X(e)) {
    const t = document.querySelector(e);
    return process.env.NODE_ENV !== "production" && !t && Je(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return process.env.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && Je(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
/**
* vue v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Wc() {
  dc();
}
process.env.NODE_ENV !== "production" && Wc();
const Gc = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, i] of t)
    n[o] = i;
  return n;
}, { Frame: qc, GIF: zc } = ImageScript, Yc = {
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
        await new Promise((h, d) => {
          function _() {
            if (s.gifRangeSelector) {
              const K = s.gifRangeOpt;
              t.ctx.drawImage(e, K.x, K.y, K.width, K.height, 0, 0, t.width, t.height);
            } else
              t.ctx.drawImage(e, 0, 0, t.width, t.height);
            const R = t.ctx.getImageData(0, 0, t.width, t.height), I = Date.now(), de = I - r, U = s.frameDiff(R, o);
            if (n.length && (n[n.length - 1].duration = de), U !== 0) {
              const K = new qc(U.diffImageData.width, U.diffImageData.height, i, U.x, U.y);
              K.bitmap = U.diffImageData.data, n.push(K), o = R, r = I;
            }
          }
          _();
          const x = setInterval(async () => {
            (e.currentTime >= this.gifTime[1] || !this.gifRecording) && (clearInterval(x), e.pause(), this.gifRecording ? h() : d("abort")), _();
          }, i);
        });
        const c = new zc(n, this.gifLoop ? -1 : 0);
        this.gifRecording = !1, this.gifEncoding = !0, this.$forceUpdate();
        const u = await c.encode(90), a = URL.createObjectURL(new Blob([u], { type: "image/gif" }));
        this.createdBlobURLs.add(a), this.result = "img", this.showing = "result", this.$refs.img.src = a;
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
      for (let u = 0; u < i.length; u += 4)
        Math.max(
          Math.abs(i[u] - r[u]),
          Math.abs(i[u + 1] - r[u + 1]),
          Math.abs(i[u + 2] - r[u + 2]),
          Math.abs(i[u + 3] - r[u + 3])
        ) > n && (c[u] = i[u], c[u + 1] = i[u + 1], c[u + 2] = i[u + 2], c[u + 3] = i[u + 3]);
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
}, Jc = ["actived"], Xc = { id: "time_tool" }, Qc = ["value"], Zc = {
  key: 0,
  id: "row1"
}, eu = ["actived"], tu = { title: "GIF缩放" }, nu = ["actived"], ou = {
  title: "正在录制",
  class: "fadeLoop"
}, iu = {
  title: "正在编码",
  class: "fadeLoop"
}, ru = {
  id: "row2",
  style: { display: "flex" }
}, su = ["max"], lu = ["max"], cu = ["max"], uu = ["max"], fu = { ref: "canvas" }, au = { ref: "img" };
function du(e, t, n, o, i, r) {
  return Pt(), nn(ve, null, [
    i.showing && i.gifRangeSelector ? (Pt(), nn("div", {
      key: 0,
      id: "range_selector",
      style: qe(r.gifRangeSelectorStyle())
    }, null, 4)) : Hn("", !0),
    i.showing == "toolbar" ? (Pt(), nn("div", {
      key: 1,
      id: "jia-video-tool",
      style: qe({ left: i.x + "px", top: i.y + "px" }),
      onDrag: t[25] || (t[25] = () => {
      })
    }, [
      $("div", null, [
        $("div", {
          title: "截图",
          onClick: t[0] || (t[0] = (...s) => r.screenshot && r.screenshot(...s)),
          opt: ""
        }, "📷"),
        $("div", {
          title: "截取GIF",
          actived: i.tool == "gif",
          onClick: t[1] || (t[1] = (s) => i.tool = i.tool === "gif" ? "" : "gif"),
          opt: ""
        }, " ✂", 8, Jc),
        $("div", Xc, [
          $("div", {
            title: "时间微调←",
            onClick: t[2] || (t[2] = (s) => r.timeOffset(-1)),
            opt: ""
          }, "◀️"),
          $("div", {
            title: "时间微调→",
            onClick: t[3] || (t[3] = (s) => r.timeOffset(1)),
            opt: ""
          }, "▶️"),
          $("input", {
            title: "当前视频时间（秒）",
            value: i.time,
            type: "text",
            onChange: t[4] || (t[4] = (s) => r.setTime(s.target.value)),
            onWheel: t[5] || (t[5] = (s) => r.wheelTime(s)),
            style: qe(r.fitInputValue(i.time))
          }, null, 44, Qc)
        ]),
        $("div", {
          onClick: t[6] || (t[6] = (...s) => r.hide && r.hide(...s)),
          opt: ""
        }, "❌")
      ]),
      i.tool == "gif" ? (Pt(), nn("div", Zc, [
        $("div", {
          title: "设置开始时间",
          opt: "",
          onClick: t[7] || (t[7] = (s) => i.gifTime[0] = r.getTime())
        }, "⏺️"),
        $("div", {
          title: "设置结束时间",
          opt: "",
          onClick: t[8] || (t[8] = (s) => i.gifTime[1] = r.getTime())
        }, "⏹️"),
        $("div", null, [
          ue($("input", {
            "onUpdate:modelValue": t[9] || (t[9] = (s) => i.gifTime[0] = s),
            placeholder: "start",
            style: qe(r.fitInputValue(i.gifTime[0])),
            onDblclick: t[10] || (t[10] = (s) => r.setTime(r.tText(i.gifTime[0])))
          }, null, 36), [
            [nt, i.gifTime[0]]
          ])
        ]),
        $("div", null, [
          ue($("input", {
            "onUpdate:modelValue": t[11] || (t[11] = (s) => i.gifTime[1] = s),
            placeholder: "end",
            style: qe(r.fitInputValue(i.gifTime[1])),
            onDblclick: t[12] || (t[12] = (s) => r.setTime(r.tText(i.gifTime[1])))
          }, null, 36), [
            [nt, i.gifTime[1]]
          ])
        ]),
        $("div", {
          title: "GIF循环",
          opt: "",
          actived: i.gifLoop,
          onClick: t[13] || (t[13] = (s) => i.gifLoop = !i.gifLoop)
        }, "🔁", 8, eu),
        $("div", tu, [
          ro("🔍"),
          ue($("input", {
            type: "number",
            max: "1",
            min: "0.1",
            step: "0.1",
            "onUpdate:modelValue": t[14] || (t[14] = (s) => i.gifScale = s),
            style: { width: "2.5em" }
          }, null, 512), [
            [nt, i.gifScale]
          ])
        ]),
        $("div", {
          title: "框选区域",
          opt: "",
          actived: i.gifRangeSelector,
          onClick: t[15] || (t[15] = (s) => i.gifRangeSelector = !i.gifRangeSelector)
        }, "🔲", 8, nu),
        ue($("div", {
          title: "开始录制",
          opt: "",
          onClick: t[16] || (t[16] = (...s) => r.startRecordGIF && r.startRecordGIF(...s))
        }, "✅ ", 512), [
          [Ke, !i.gifEncoding && !i.gifRecording]
        ]),
        ue($("div", ou, "🎦", 512), [
          [Ke, i.gifRecording]
        ]),
        ue($("div", iu, "🕒", 512), [
          [Ke, i.gifEncoding]
        ])
      ])) : Hn("", !0),
      ue($("div", ru, [
        ro(" 范围: "),
        ue($("input", {
          title: "x(滚轮调整)",
          placeholder: "x",
          "onUpdate:modelValue": t[17] || (t[17] = (s) => i.gifRangeOpt.x = s),
          type: "number",
          min: "0",
          step: "1",
          max: i.video.videoWidth - i.gifRangeOpt.width,
          onWheel: t[18] || (t[18] = (s) => r.wheelNumber(s, "x"))
        }, null, 40, su), [
          [nt, i.gifRangeOpt.x]
        ]),
        ue($("input", {
          title: "y(滚轮调整)",
          placeholder: "y",
          "onUpdate:modelValue": t[19] || (t[19] = (s) => i.gifRangeOpt.y = s),
          type: "number",
          min: "0",
          step: "1",
          max: i.video.videoHeight - i.gifRangeOpt.height,
          onWheel: t[20] || (t[20] = (s) => r.wheelNumber(s, "y"))
        }, null, 40, lu), [
          [nt, i.gifRangeOpt.y]
        ]),
        ue($("input", {
          title: "width(滚轮调整)",
          placeholder: "width",
          "onUpdate:modelValue": t[21] || (t[21] = (s) => i.gifRangeOpt.width = s),
          type: "number",
          max: i.video.videoWidth - i.gifRangeOpt.x + 1,
          onWheel: t[22] || (t[22] = (s) => r.wheelNumber(s, "width")),
          min: "0",
          step: "1"
        }, null, 40, cu), [
          [nt, i.gifRangeOpt.width]
        ]),
        ue($("input", {
          title: "height(滚轮调整)",
          placeholder: "height",
          "onUpdate:modelValue": t[23] || (t[23] = (s) => i.gifRangeOpt.height = s),
          type: "number",
          max: i.video.videoHeight - i.gifRangeOpt.y + 1,
          onWheel: t[24] || (t[24] = (s) => r.wheelNumber(s, "height")),
          min: "0",
          step: "1"
        }, null, 40, uu), [
          [nt, i.gifRangeOpt.height]
        ])
      ], 512), [
        [Ke, i.tool == "gif" && i.gifRangeSelector]
      ])
    ], 36)) : Hn("", !0),
    ue($("dialog", {
      ref: "dialog",
      onClick: t[26] || (t[26] = jc((...s) => r.hide && r.hide(...s), ["left"]))
    }, [
      ue($("canvas", fu, null, 512), [
        [Ke, i.result === "canvas"]
      ]),
      ue($("img", au, null, 512), [
        [Ke, i.result === "img"]
      ])
    ], 512), [
      [Ke, i.showing == "result"]
    ])
  ], 64);
}
const pu = /* @__PURE__ */ Gc(Yc, [["render", du], ["__scopeId", "data-v-dee80196"]]), hu = Hc(pu), uo = document.createElement("div");
uo.style = "position:fixed;top:0;left:0;z-index:2147483647;";
let Lt, vt;
window.addEventListener("mousedown", (e) => {
  if (!(e.button === 2 && e.altKey))
    return;
  e.preventDefault(), e.stopPropagation(), vt && !document.contains(vt) && (vt = null);
  let t = e.target, n;
  if (t.localName === "video" ? n = t : n = t.querySelector("video"), !n) {
    let o = 5;
    for (; o-- && (t = t.parentNode, !(t === document || (n = t.querySelector("video"), n))); )
      ;
  }
  n ? (vt = n, Lt || (document.body.appendChild(uo), Lt = hu.mount(uo)), Lt.show(e.clientX, e.clientY, n, e.shiftKey ? void 0 : "screenshot")) : n = vt;
});
document.addEventListener("contextmenu", (e) => {
  !Lt || !Lt.showing || !e.altKey || (e.preventDefault(), e.stopPropagation());
});
window.addEventListener("keydown", (e) => {
  if (!e.code.startsWith("Arrow") || !(e.ctrlKey || e.shiftKey) || e.repeat)
    return;
  let t, n;
  const o = [...document.querySelectorAll("video")].filter((i) => (i === vt && (n = i), i.duration >= 300));
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
