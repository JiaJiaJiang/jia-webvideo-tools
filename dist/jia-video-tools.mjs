(function(){"use strict";try{if(typeof document<"u"){var a=document.createElement("style");a.appendChild(document.createTextNode("#jia-video-tool[data-v-703a244b]{position:fixed;border:1px solid #ccc;background-color:#999;border-radius:.3em}#jia-video-tool [opt][data-v-703a244b]{user-select:none;cursor:pointer;padding:0 .1em;vertical-align:middle}#jia-video-tool [opt][data-v-703a244b]:hover,#jia-video-tool [opt][actived=true][data-v-703a244b]{background-color:#333}#jia-video-tool>div[data-v-703a244b]{padding:.2em;display:flex}#jia-video-tool>div div[data-v-703a244b]{word-wrap:nowrap;word-break:keep-all;display:inline-block}#jia-video-tool #row2>input[data-v-703a244b]{width:4em}#jia-video-tool input[data-v-703a244b]{min-width:3em}#range_selector[data-v-703a244b]{border:2px dashed #6d8500;box-shadow:0 0 0 100vmax #000a;position:fixed;pointer-events:none}dialog[data-v-703a244b]{position:fixed;display:flex;padding:0;top:0;left:0;justify-content:center;border:0;max-width:100vw;max-height:100vh;align-items:center;width:100%;height:100%;background:#000000b4}dialog canvas[data-v-703a244b],dialog img[data-v-703a244b]{max-width:90%;max-height:90%;border:2px solid #000}.fadeLoop[data-v-703a244b]{animation:fadeLoop-703a244b 1s infinite}@keyframes fadeLoop-703a244b{0%{opacity:1}50%{opacity:0}to{opacity:1}}")),document.head.appendChild(a)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Rn(e, t) {
  const n = new Set(e.split(","));
  return t ? (r) => n.has(r.toLowerCase()) : (r) => n.has(r);
}
const et = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, wr = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], _t = () => {
}, Zl = () => !1, jr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), gi = (e) => e.startsWith("onUpdate:"), dt = Object.assign, Eo = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Xl = Object.prototype.hasOwnProperty, Ie = (e, t) => Xl.call(e, t), Ee = Array.isArray, mr = (e) => bi(e) === "[object Map]", Ql = (e) => bi(e) === "[object Set]", Oe = (e) => typeof e == "function", Ot = (e) => typeof e == "string", Hr = (e) => typeof e == "symbol", lt = (e) => e !== null && typeof e == "object", bo = (e) => (lt(e) || Oe(e)) && Oe(e.then) && Oe(e.catch), ec = Object.prototype.toString, bi = (e) => ec.call(e), No = (e) => bi(e).slice(8, -1), tc = (e) => bi(e) === "[object Object]", Oo = (e) => Ot(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Mr = /* @__PURE__ */ Rn(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), nc = /* @__PURE__ */ Rn(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), Ni = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, rc = /-(\w)/g, Or = Ni((e) => e.replace(rc, (t, n) => n ? n.toUpperCase() : "")), ic = /\B([A-Z])/g, qn = Ni(
  (e) => e.replace(ic, "-$1").toLowerCase()
), Oi = Ni((e) => e.charAt(0).toUpperCase() + e.slice(1)), tr = Ni((e) => e ? `on${Oi(e)}` : ""), cr = (e, t) => !Object.is(e, t), pr = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, Cs = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, Qi = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Yo;
const xo = () => Yo || (Yo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Gn(e) {
  if (Ee(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], i = Ot(r) ? cc(r) : Gn(r);
      if (i)
        for (const o in i)
          t[o] = i[o];
    }
    return t;
  } else if (Ot(e) || lt(e))
    return e;
}
const oc = /;(?![^(]*\))/g, sc = /:([^]+)/, lc = /\/\*[^]*?\*\//g;
function cc(e) {
  const t = {};
  return e.replace(lc, "").split(oc).forEach((n) => {
    if (n) {
      const r = n.split(sc);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function Ao(e) {
  let t = "";
  if (Ot(e))
    t = e;
  else if (Ee(e))
    for (let n = 0; n < e.length; n++) {
      const r = Ao(e[n]);
      r && (t += r + " ");
    }
  else if (lt(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const ac = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", fc = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", uc = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", hc = /* @__PURE__ */ Rn(ac), dc = /* @__PURE__ */ Rn(fc), pc = /* @__PURE__ */ Rn(uc), gc = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", vc = /* @__PURE__ */ Rn(gc);
function Is(e) {
  return !!e || e === "";
}
/**
* @vue/reactivity v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Yn(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let sn;
class _c {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = sn, !t && sn && (this.index = (sn.scopes || (sn.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = sn;
      try {
        return sn = this, t();
      } finally {
        sn = n;
      }
    } else
      process.env.NODE_ENV !== "production" && Yn("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    sn = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    sn = this.parent;
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
function wc(e, t = sn) {
  t && t.active && t.effects.push(e);
}
function mc() {
  return sn;
}
let rr;
class Do {
  constructor(t, n, r, i) {
    this.fn = t, this.trigger = n, this.scheduler = r, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, wc(this, i);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, Tn();
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t];
        if (n.computed && (yc(n.computed), this._dirtyLevel >= 4))
          break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), Mn();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let t = zn, n = rr;
    try {
      return zn = !0, rr = this, this._runnings++, Jo(this), this.fn();
    } finally {
      Zo(this), this._runnings--, rr = n, zn = t;
    }
  }
  stop() {
    this.active && (Jo(this), Zo(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function yc(e) {
  return e.value;
}
function Jo(e) {
  e._trackId++, e._depsLength = 0;
}
function Zo(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++)
      Us(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function Us(e, t) {
  const n = e.get(t);
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup());
}
let zn = !0, eo = 0;
const Ps = [];
function Tn() {
  Ps.push(zn), zn = !1;
}
function Mn() {
  const e = Ps.pop();
  zn = e === void 0 ? !0 : e;
}
function So() {
  eo++;
}
function Vo() {
  for (eo--; !eo && to.length; )
    to.shift()();
}
function $s(e, t, n) {
  var r;
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const i = e.deps[e._depsLength];
    i !== t ? (i && Us(i, e), e.deps[e._depsLength++] = t) : e._depsLength++, process.env.NODE_ENV !== "production" && ((r = e.onTrack) == null || r.call(e, dt({ effect: e }, n)));
  }
}
const to = [];
function Fs(e, t, n) {
  var r;
  So();
  for (const i of e.keys()) {
    let o;
    i._dirtyLevel < t && (o ?? (o = e.get(i) === i._trackId)) && (i._shouldSchedule || (i._shouldSchedule = i._dirtyLevel === 0), i._dirtyLevel = t), i._shouldSchedule && (o ?? (o = e.get(i) === i._trackId)) && (process.env.NODE_ENV !== "production" && ((r = i.onTrigger) == null || r.call(i, dt({ effect: i }, n))), i.trigger(), (!i._runnings || i.allowRecurse) && i._dirtyLevel !== 2 && (i._shouldSchedule = !1, i.scheduler && to.push(i.scheduler)));
  }
  Vo();
}
const Ls = (e, t) => {
  const n = /* @__PURE__ */ new Map();
  return n.cleanup = e, n.computed = t, n;
}, no = /* @__PURE__ */ new WeakMap(), ir = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), ro = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
function Ut(e, t, n) {
  if (zn && rr) {
    let r = no.get(e);
    r || no.set(e, r = /* @__PURE__ */ new Map());
    let i = r.get(n);
    i || r.set(n, i = Ls(() => r.delete(n))), $s(
      rr,
      i,
      process.env.NODE_ENV !== "production" ? {
        target: e,
        type: t,
        key: n
      } : void 0
    );
  }
}
function mn(e, t, n, r, i, o) {
  const c = no.get(e);
  if (!c)
    return;
  let u = [];
  if (t === "clear")
    u = [...c.values()];
  else if (n === "length" && Ee(e)) {
    const f = Number(r);
    c.forEach((d, E) => {
      (E === "length" || !Hr(E) && E >= f) && u.push(d);
    });
  } else
    switch (n !== void 0 && u.push(c.get(n)), t) {
      case "add":
        Ee(e) ? Oo(n) && u.push(c.get("length")) : (u.push(c.get(ir)), mr(e) && u.push(c.get(ro)));
        break;
      case "delete":
        Ee(e) || (u.push(c.get(ir)), mr(e) && u.push(c.get(ro)));
        break;
      case "set":
        mr(e) && u.push(c.get(ir));
        break;
    }
  So();
  for (const f of u)
    f && Fs(
      f,
      4,
      process.env.NODE_ENV !== "production" ? {
        target: e,
        type: t,
        key: n,
        newValue: r,
        oldValue: i,
        oldTarget: o
      } : void 0
    );
  Vo();
}
const Ec = /* @__PURE__ */ Rn("__proto__,__v_isRef,__isVue"), ks = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Hr)
), Xo = /* @__PURE__ */ bc();
function bc() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const r = Ce(this);
      for (let o = 0, c = this.length; o < c; o++)
        Ut(r, "get", o + "");
      const i = r[t](...n);
      return i === -1 || i === !1 ? r[t](...n.map(Ce)) : i;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      Tn(), So();
      const r = Ce(this)[t].apply(this, n);
      return Vo(), Mn(), r;
    };
  }), e;
}
function Nc(e) {
  Hr(e) || (e = String(e));
  const t = Ce(this);
  return Ut(t, "has", e), t.hasOwnProperty(e);
}
class js {
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
      return r === (i ? o ? qs : Ks : o ? zs : Ws).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const c = Ee(t);
    if (!i) {
      if (c && Ie(Xo, n))
        return Reflect.get(Xo, n, r);
      if (n === "hasOwnProperty")
        return Nc;
    }
    const u = Reflect.get(t, n, r);
    return (Hr(n) ? ks.has(n) : Ec(n)) || (i || Ut(t, "get", n), o) ? u : Ht(u) ? c && Oo(n) ? u : u.value : lt(u) ? i ? Ys(u) : To(u) : u;
  }
}
class Hs extends js {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, i) {
    let o = t[n];
    if (!this._isShallow) {
      const f = xr(o);
      if (!Er(r) && !xr(r) && (o = Ce(o), r = Ce(r)), !Ee(t) && Ht(o) && !Ht(r))
        return f ? !1 : (o.value = r, !0);
    }
    const c = Ee(t) && Oo(n) ? Number(n) < t.length : Ie(t, n), u = Reflect.set(t, n, r, i);
    return t === Ce(i) && (c ? cr(r, o) && mn(t, "set", n, r, o) : mn(t, "add", n, r)), u;
  }
  deleteProperty(t, n) {
    const r = Ie(t, n), i = t[n], o = Reflect.deleteProperty(t, n);
    return o && r && mn(t, "delete", n, void 0, i), o;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!Hr(n) || !ks.has(n)) && Ut(t, "has", n), r;
  }
  ownKeys(t) {
    return Ut(
      t,
      "iterate",
      Ee(t) ? "length" : ir
    ), Reflect.ownKeys(t);
  }
}
class Bs extends js {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return process.env.NODE_ENV !== "production" && Yn(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return process.env.NODE_ENV !== "production" && Yn(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const Oc = /* @__PURE__ */ new Hs(), xc = /* @__PURE__ */ new Bs(), Ac = /* @__PURE__ */ new Hs(
  !0
), Dc = /* @__PURE__ */ new Bs(!0), Ro = (e) => e, xi = (e) => Reflect.getPrototypeOf(e);
function Qr(e, t, n = !1, r = !1) {
  e = e.__v_raw;
  const i = Ce(e), o = Ce(t);
  n || (cr(t, o) && Ut(i, "get", t), Ut(i, "get", o));
  const { has: c } = xi(i), u = r ? Ro : n ? Co : Mo;
  if (c.call(i, t))
    return u(e.get(t));
  if (c.call(i, o))
    return u(e.get(o));
  e !== i && e.get(t);
}
function ei(e, t = !1) {
  const n = this.__v_raw, r = Ce(n), i = Ce(e);
  return t || (cr(e, i) && Ut(r, "has", e), Ut(r, "has", i)), e === i ? n.has(e) : n.has(e) || n.has(i);
}
function ti(e, t = !1) {
  return e = e.__v_raw, !t && Ut(Ce(e), "iterate", ir), Reflect.get(e, "size", e);
}
function Qo(e) {
  e = Ce(e);
  const t = Ce(this);
  return xi(t).has.call(t, e) || (t.add(e), mn(t, "add", e, e)), this;
}
function es(e, t) {
  t = Ce(t);
  const n = Ce(this), { has: r, get: i } = xi(n);
  let o = r.call(n, e);
  o ? process.env.NODE_ENV !== "production" && Gs(n, r, e) : (e = Ce(e), o = r.call(n, e));
  const c = i.call(n, e);
  return n.set(e, t), o ? cr(t, c) && mn(n, "set", e, t, c) : mn(n, "add", e, t), this;
}
function ts(e) {
  const t = Ce(this), { has: n, get: r } = xi(t);
  let i = n.call(t, e);
  i ? process.env.NODE_ENV !== "production" && Gs(t, n, e) : (e = Ce(e), i = n.call(t, e));
  const o = r ? r.call(t, e) : void 0, c = t.delete(e);
  return i && mn(t, "delete", e, void 0, o), c;
}
function ns() {
  const e = Ce(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? mr(e) ? new Map(e) : new Set(e) : void 0, r = e.clear();
  return t && mn(e, "clear", void 0, void 0, n), r;
}
function ni(e, t) {
  return function(r, i) {
    const o = this, c = o.__v_raw, u = Ce(c), f = t ? Ro : e ? Co : Mo;
    return !e && Ut(u, "iterate", ir), c.forEach((d, E) => r.call(i, f(d), f(E), o));
  };
}
function ri(e, t, n) {
  return function(...r) {
    const i = this.__v_raw, o = Ce(i), c = mr(o), u = e === "entries" || e === Symbol.iterator && c, f = e === "keys" && c, d = i[e](...r), E = n ? Ro : t ? Co : Mo;
    return !t && Ut(
      o,
      "iterate",
      f ? ro : ir
    ), {
      // iterator protocol
      next() {
        const { value: _, done: D } = d.next();
        return D ? { value: _, done: D } : {
          value: u ? [E(_[0]), E(_[1])] : E(_),
          done: D
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Ln(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      Yn(
        `${Oi(e)} operation ${n}failed: target is readonly.`,
        Ce(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Sc() {
  const e = {
    get(o) {
      return Qr(this, o);
    },
    get size() {
      return ti(this);
    },
    has: ei,
    add: Qo,
    set: es,
    delete: ts,
    clear: ns,
    forEach: ni(!1, !1)
  }, t = {
    get(o) {
      return Qr(this, o, !1, !0);
    },
    get size() {
      return ti(this);
    },
    has: ei,
    add: Qo,
    set: es,
    delete: ts,
    clear: ns,
    forEach: ni(!1, !0)
  }, n = {
    get(o) {
      return Qr(this, o, !0);
    },
    get size() {
      return ti(this, !0);
    },
    has(o) {
      return ei.call(this, o, !0);
    },
    add: Ln("add"),
    set: Ln("set"),
    delete: Ln("delete"),
    clear: Ln("clear"),
    forEach: ni(!0, !1)
  }, r = {
    get(o) {
      return Qr(this, o, !0, !0);
    },
    get size() {
      return ti(this, !0);
    },
    has(o) {
      return ei.call(this, o, !0);
    },
    add: Ln("add"),
    set: Ln("set"),
    delete: Ln("delete"),
    clear: Ln("clear"),
    forEach: ni(!0, !0)
  };
  return [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((o) => {
    e[o] = ri(o, !1, !1), n[o] = ri(o, !0, !1), t[o] = ri(o, !1, !0), r[o] = ri(
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
  Vc,
  Rc,
  Tc,
  Mc
] = /* @__PURE__ */ Sc();
function Ai(e, t) {
  const n = t ? e ? Mc : Tc : e ? Rc : Vc;
  return (r, i, o) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? r : Reflect.get(
    Ie(n, i) && i in r ? n : r,
    i,
    o
  );
}
const Cc = {
  get: /* @__PURE__ */ Ai(!1, !1)
}, Ic = {
  get: /* @__PURE__ */ Ai(!1, !0)
}, Uc = {
  get: /* @__PURE__ */ Ai(!0, !1)
}, Pc = {
  get: /* @__PURE__ */ Ai(!0, !0)
};
function Gs(e, t, n) {
  const r = Ce(n);
  if (r !== n && t.call(e, r)) {
    const i = No(e);
    Yn(
      `Reactive ${i} contains both the raw and reactive versions of the same object${i === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Ws = /* @__PURE__ */ new WeakMap(), zs = /* @__PURE__ */ new WeakMap(), Ks = /* @__PURE__ */ new WeakMap(), qs = /* @__PURE__ */ new WeakMap();
function $c(e) {
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
function Fc(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : $c(No(e));
}
function To(e) {
  return xr(e) ? e : Di(
    e,
    !1,
    Oc,
    Cc,
    Ws
  );
}
function Lc(e) {
  return Di(
    e,
    !1,
    Ac,
    Ic,
    zs
  );
}
function Ys(e) {
  return Di(
    e,
    !0,
    xc,
    Uc,
    Ks
  );
}
function wn(e) {
  return Di(
    e,
    !0,
    Dc,
    Pc,
    qs
  );
}
function Di(e, t, n, r, i) {
  if (!lt(e))
    return process.env.NODE_ENV !== "production" && Yn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = i.get(e);
  if (o)
    return o;
  const c = Fc(e);
  if (c === 0)
    return e;
  const u = new Proxy(
    e,
    c === 2 ? r : n
  );
  return i.set(e, u), u;
}
function yr(e) {
  return xr(e) ? yr(e.__v_raw) : !!(e && e.__v_isReactive);
}
function xr(e) {
  return !!(e && e.__v_isReadonly);
}
function Er(e) {
  return !!(e && e.__v_isShallow);
}
function io(e) {
  return e ? !!e.__v_raw : !1;
}
function Ce(e) {
  const t = e && e.__v_raw;
  return t ? Ce(t) : e;
}
function kc(e) {
  return Object.isExtensible(e) && Cs(e, "__v_skip", !0), e;
}
const Mo = (e) => lt(e) ? To(e) : e, Co = (e) => lt(e) ? Ys(e) : e, jc = "Computed is still dirty after getter evaluation, likely because a computed is mutating its own dependency in its getter. State mutations in computed getters should be avoided.  Check the docs for more details: https://vuejs.org/guide/essentials/computed.html#getters-should-be-side-effect-free";
class Js {
  constructor(t, n, r, i) {
    this.getter = t, this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new Do(
      () => t(this._value),
      () => $i(
        this,
        this.effect._dirtyLevel === 2 ? 2 : 3
      )
    ), this.effect.computed = this, this.effect.active = this._cacheable = !i, this.__v_isReadonly = r;
  }
  get value() {
    const t = Ce(this);
    return (!t._cacheable || t.effect.dirty) && cr(t._value, t._value = t.effect.run()) && $i(t, 4), Bc(t), t.effect._dirtyLevel >= 2 && (process.env.NODE_ENV !== "production" && this._warnRecursive && Yn(jc, `

getter: `, this.getter), $i(t, 2)), t._value;
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
function Hc(e, t, n = !1) {
  let r, i;
  const o = Oe(e);
  o ? (r = e, i = process.env.NODE_ENV !== "production" ? () => {
    Yn("Write operation failed: computed value is readonly");
  } : _t) : (r = e.get, i = e.set);
  const c = new Js(r, i, o || !i, n);
  return process.env.NODE_ENV !== "production" && t && !n && (c.effect.onTrack = t.onTrack, c.effect.onTrigger = t.onTrigger), c;
}
function Bc(e) {
  var t;
  zn && rr && (e = Ce(e), $s(
    rr,
    (t = e.dep) != null ? t : e.dep = Ls(
      () => e.dep = void 0,
      e instanceof Js ? e : void 0
    ),
    process.env.NODE_ENV !== "production" ? {
      target: e,
      type: "get",
      key: "value"
    } : void 0
  ));
}
function $i(e, t = 4, n) {
  e = Ce(e);
  const r = e.dep;
  r && Fs(
    r,
    t,
    process.env.NODE_ENV !== "production" ? {
      target: e,
      type: "set",
      key: "value",
      newValue: n
    } : void 0
  );
}
function Ht(e) {
  return !!(e && e.__v_isRef === !0);
}
function Gc(e) {
  return Ht(e) ? e.value : e;
}
const Wc = {
  get: (e, t, n) => Gc(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const i = e[t];
    return Ht(i) && !Ht(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function Zs(e) {
  return yr(e) ? e : new Proxy(e, Wc);
}
/**
* @vue/runtime-core v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const or = [];
function li(e) {
  or.push(e);
}
function ci() {
  or.pop();
}
function K(e, ...t) {
  Tn();
  const n = or.length ? or[or.length - 1].component : null, r = n && n.appContext.config.warnHandler, i = zc();
  if (r)
    Sn(
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
          ({ vnode: o }) => `at <${Ci(n, o.type)}>`
        ).join(`
`),
        i
      ]
    );
  else {
    const o = [`[Vue warn]: ${e}`, ...t];
    i.length && o.push(`
`, ...Kc(i)), console.warn(...o);
  }
  Mn();
}
function zc() {
  let e = or[or.length - 1];
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
function Kc(e) {
  const t = [];
  return e.forEach((n, r) => {
    t.push(...r === 0 ? [] : [`
`], ...qc(n));
  }), t;
}
function qc({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", r = e.component ? e.component.parent == null : !1, i = ` at <${Ci(
    e.component,
    e.type,
    r
  )}`, o = ">" + n;
  return e.props ? [i, ...Yc(e.props), o] : [i + o];
}
function Yc(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((r) => {
    t.push(...Xs(r, e[r]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Xs(e, t, n) {
  return Ot(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : Ht(t) ? (t = Xs(e, Ce(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : Oe(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = Ce(t), n ? t : [`${e}=`, t]);
}
const Io = {
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
function Sn(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (i) {
    Br(i, t, n);
  }
}
function hn(e, t, n, r) {
  if (Oe(e)) {
    const i = Sn(e, t, n, r);
    return i && bo(i) && i.catch((o) => {
      Br(o, t, n);
    }), i;
  }
  if (Ee(e)) {
    const i = [];
    for (let o = 0; o < e.length; o++)
      i.push(hn(e[o], t, n, r));
    return i;
  } else
    process.env.NODE_ENV !== "production" && K(
      `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
    );
}
function Br(e, t, n, r = !0) {
  const i = t ? t.vnode : null;
  if (t) {
    let o = t.parent;
    const c = t.proxy, u = process.env.NODE_ENV !== "production" ? Io[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
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
      Tn(), Sn(
        f,
        null,
        10,
        [e, c, u]
      ), Mn();
      return;
    }
  }
  Jc(e, n, i, r);
}
function Jc(e, t, n, r = !0) {
  if (process.env.NODE_ENV !== "production") {
    const i = Io[t];
    if (n && li(n), K(`Unhandled error${i ? ` during execution of ${i}` : ""}`), n && ci(), r)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let $r = !1, oo = !1;
const kt = [];
let _n = 0;
const br = [];
let Dn = null, jn = 0;
const Qs = /* @__PURE__ */ Promise.resolve();
let Uo = null;
const Zc = 100;
function Xc(e) {
  const t = Uo || Qs;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Qc(e) {
  let t = _n + 1, n = kt.length;
  for (; t < n; ) {
    const r = t + n >>> 1, i = kt[r], o = Fr(i);
    o < e || o === e && i.pre ? t = r + 1 : n = r;
  }
  return t;
}
function Si(e) {
  (!kt.length || !kt.includes(
    e,
    $r && e.allowRecurse ? _n + 1 : _n
  )) && (e.id == null ? kt.push(e) : kt.splice(Qc(e.id), 0, e), el());
}
function el() {
  !$r && !oo && (oo = !0, Uo = Qs.then(rl));
}
function ea(e) {
  const t = kt.indexOf(e);
  t > _n && kt.splice(t, 1);
}
function tl(e) {
  Ee(e) ? br.push(...e) : (!Dn || !Dn.includes(
    e,
    e.allowRecurse ? jn + 1 : jn
  )) && br.push(e), el();
}
function rs(e, t, n = $r ? _n + 1 : 0) {
  for (process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < kt.length; n++) {
    const r = kt[n];
    if (r && r.pre) {
      if (e && r.id !== e.uid || process.env.NODE_ENV !== "production" && Po(t, r))
        continue;
      kt.splice(n, 1), n--, r();
    }
  }
}
function nl(e) {
  if (br.length) {
    const t = [...new Set(br)].sort(
      (n, r) => Fr(n) - Fr(r)
    );
    if (br.length = 0, Dn) {
      Dn.push(...t);
      return;
    }
    for (Dn = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), jn = 0; jn < Dn.length; jn++)
      process.env.NODE_ENV !== "production" && Po(e, Dn[jn]) || Dn[jn]();
    Dn = null, jn = 0;
  }
}
const Fr = (e) => e.id == null ? 1 / 0 : e.id, ta = (e, t) => {
  const n = Fr(e) - Fr(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function rl(e) {
  oo = !1, $r = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), kt.sort(ta);
  const t = process.env.NODE_ENV !== "production" ? (n) => Po(e, n) : _t;
  try {
    for (_n = 0; _n < kt.length; _n++) {
      const n = kt[_n];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        Sn(n, null, 14);
      }
    }
  } finally {
    _n = 0, kt.length = 0, nl(e), $r = !1, Uo = null, (kt.length || br.length) && rl(e);
  }
}
function Po(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > Zc) {
      const r = t.ownerInstance, i = r && Il(r.type);
      return Br(
        `Maximum recursive updates exceeded${i ? ` in component <${i}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
        null,
        10
      ), !0;
    } else
      e.set(t, n + 1);
  }
}
let sr = !1;
const gr = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (xo().__VUE_HMR_RUNTIME__ = {
  createRecord: Fi(il),
  rerender: Fi(ia),
  reload: Fi(oa)
});
const ar = /* @__PURE__ */ new Map();
function na(e) {
  const t = e.type.__hmrId;
  let n = ar.get(t);
  n || (il(t, e.type), n = ar.get(t)), n.instances.add(e);
}
function ra(e) {
  ar.get(e.type.__hmrId).instances.delete(e);
}
function il(e, t) {
  return ar.has(e) ? !1 : (ar.set(e, {
    initialDef: Cr(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Cr(e) {
  return Ul(e) ? e.__vccOpts : e;
}
function ia(e, t) {
  const n = ar.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((r) => {
    t && (r.render = t, Cr(r.type).render = t), r.renderCache = [], sr = !0, r.effect.dirty = !0, r.update(), sr = !1;
  }));
}
function oa(e, t) {
  const n = ar.get(e);
  if (!n)
    return;
  t = Cr(t), is(n.initialDef, t);
  const r = [...n.instances];
  for (const i of r) {
    const o = Cr(i.type);
    gr.has(o) || (o !== n.initialDef && is(o, t), gr.add(o)), i.appContext.propsCache.delete(i.type), i.appContext.emitsCache.delete(i.type), i.appContext.optionsCache.delete(i.type), i.ceReload ? (gr.add(o), i.ceReload(t.styles), gr.delete(o)) : i.parent ? (i.parent.effect.dirty = !0, Si(i.parent.update)) : i.appContext.reload ? i.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  tl(() => {
    for (const i of r)
      gr.delete(
        Cr(i.type)
      );
  });
}
function is(e, t) {
  dt(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Fi(e) {
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
let an, Vr = [], so = !1;
function Gr(e, ...t) {
  an ? an.emit(e, ...t) : so || Vr.push({ event: e, args: t });
}
function $o(e, t) {
  var n, r;
  an = e, an ? (an.enabled = !0, Vr.forEach(({ event: i, args: o }) => an.emit(i, ...o)), Vr = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !((r = (n = window.navigator) == null ? void 0 : n.userAgent) != null && r.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((o) => {
    $o(o, t);
  }), setTimeout(() => {
    an || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, so = !0, Vr = []);
  }, 3e3)) : (so = !0, Vr = []);
}
function sa(e, t) {
  Gr("app:init", e, t, {
    Fragment: ln,
    Text: Wr,
    Comment: en,
    Static: hi
  });
}
function la(e) {
  Gr("app:unmount", e);
}
const ca = /* @__PURE__ */ Fo(
  "component:added"
  /* COMPONENT_ADDED */
), ol = /* @__PURE__ */ Fo(
  "component:updated"
  /* COMPONENT_UPDATED */
), aa = /* @__PURE__ */ Fo(
  "component:removed"
  /* COMPONENT_REMOVED */
), fa = (e) => {
  an && typeof an.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !an.cleanupBuffer(e) && aa(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Fo(e) {
  return (t) => {
    Gr(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const ua = /* @__PURE__ */ sl(
  "perf:start"
  /* PERFORMANCE_START */
), ha = /* @__PURE__ */ sl(
  "perf:end"
  /* PERFORMANCE_END */
);
function sl(e) {
  return (t, n, r) => {
    Gr(e, t.appContext.app, t.uid, t, n, r);
  };
}
function da(e, t, n) {
  Gr(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
function pa(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const r = e.vnode.props || et;
  if (process.env.NODE_ENV !== "production") {
    const {
      emitsOptions: E,
      propsOptions: [_]
    } = e;
    if (E)
      if (!(t in E))
        (!_ || !(tr(t) in _)) && K(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${tr(t)}" prop.`
        );
      else {
        const D = E[t];
        Oe(D) && (D(...n) || K(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let i = n;
  const o = t.startsWith("update:"), c = o && t.slice(7);
  if (c && c in r) {
    const E = `${c === "modelValue" ? "model" : c}Modifiers`, { number: _, trim: D } = r[E] || et;
    D && (i = n.map(($) => Ot($) ? $.trim() : $)), _ && (i = n.map(Qi));
  }
  if (process.env.NODE_ENV !== "production" && da(e, t, i), process.env.NODE_ENV !== "production") {
    const E = t.toLowerCase();
    E !== t && r[tr(E)] && K(
      `Event "${E}" is emitted in component ${Ci(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${qn(
        t
      )}" instead of "${t}".`
    );
  }
  let u, f = r[u = tr(t)] || // also try camelCase event handler (#2249)
  r[u = tr(Or(t))];
  !f && o && (f = r[u = tr(qn(t))]), f && hn(
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
    e.emitted[u] = !0, hn(
      d,
      e,
      6,
      i
    );
  }
}
function ll(e, t, n = !1) {
  const r = t.emitsCache, i = r.get(e);
  if (i !== void 0)
    return i;
  const o = e.emits;
  let c = {}, u = !1;
  if (!Oe(e)) {
    const f = (d) => {
      const E = ll(d, t, !0);
      E && (u = !0, dt(c, E));
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  return !o && !u ? (lt(e) && r.set(e, null), null) : (Ee(o) ? o.forEach((f) => c[f] = null) : dt(c, o), lt(e) && r.set(e, c), c);
}
function Vi(e, t) {
  return !e || !jr(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Ie(e, t[0].toLowerCase() + t.slice(1)) || Ie(e, qn(t)) || Ie(e, t));
}
let jt = null, cl = null;
function vi(e) {
  const t = jt;
  return jt = e, cl = e && e.type.__scopeId || null, t;
}
function ga(e, t = jt, n) {
  if (!t || e._n)
    return e;
  const r = (...i) => {
    r._d && vs(-1);
    const o = vi(t);
    let c;
    try {
      c = e(...i);
    } finally {
      vi(o), r._d && vs(1);
    }
    return process.env.NODE_ENV !== "production" && ol(t), c;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
let lo = !1;
function _i() {
  lo = !0;
}
function Li(e) {
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
    props: _,
    data: D,
    setupState: $,
    ctx: ee,
    inheritAttrs: ce
  } = e, Ge = vi(e);
  let xe, Ae;
  process.env.NODE_ENV !== "production" && (lo = !1);
  try {
    if (n.shapeFlag & 4) {
      const Be = i || r, Se = process.env.NODE_ENV !== "production" && $.__isScriptSetup ? new Proxy(Be, {
        get(ae, be, Le) {
          return K(
            `Property '${String(
              be
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(ae, be, Le);
        }
      }) : Be;
      xe = cn(
        d.call(
          Se,
          Be,
          E,
          process.env.NODE_ENV !== "production" ? wn(_) : _,
          $,
          D,
          ee
        )
      ), Ae = u;
    } else {
      const Be = t;
      process.env.NODE_ENV !== "production" && u === _ && _i(), xe = cn(
        Be.length > 1 ? Be(
          process.env.NODE_ENV !== "production" ? wn(_) : _,
          process.env.NODE_ENV !== "production" ? {
            get attrs() {
              return _i(), wn(u);
            },
            slots: c,
            emit: f
          } : { attrs: u, slots: c, emit: f }
        ) : Be(
          process.env.NODE_ENV !== "production" ? wn(_) : _,
          null
        )
      ), Ae = t.props ? u : va(u);
    }
  } catch (Be) {
    Ur.length = 0, Br(Be, e, 1), xe = Vn(en);
  }
  let Pe = xe, je;
  if (process.env.NODE_ENV !== "production" && xe.patchFlag > 0 && xe.patchFlag & 2048 && ([Pe, je] = al(xe)), Ae && ce !== !1) {
    const Be = Object.keys(Ae), { shapeFlag: Se } = Pe;
    if (Be.length) {
      if (Se & 7)
        o && Be.some(gi) && (Ae = _a(
          Ae,
          o
        )), Pe = Jn(Pe, Ae, !1, !0);
      else if (process.env.NODE_ENV !== "production" && !lo && Pe.type !== en) {
        const ae = Object.keys(u), be = [], Le = [];
        for (let We = 0, tt = ae.length; We < tt; We++) {
          const At = ae[We];
          jr(At) ? gi(At) || be.push(At[2].toLowerCase() + At.slice(3)) : Le.push(At);
        }
        Le.length && K(
          `Extraneous non-props attributes (${Le.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`
        ), be.length && K(
          `Extraneous non-emits event listeners (${be.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (process.env.NODE_ENV !== "production" && !os(Pe) && K(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), Pe = Jn(Pe, null, !1, !0), Pe.dirs = Pe.dirs ? Pe.dirs.concat(n.dirs) : n.dirs), n.transition && (process.env.NODE_ENV !== "production" && !os(Pe) && K(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), Pe.transition = n.transition), process.env.NODE_ENV !== "production" && je ? je(Pe) : xe = Pe, vi(Ge), xe;
}
const al = (e) => {
  const t = e.children, n = e.dynamicChildren, r = Lo(t, !1);
  if (r) {
    if (process.env.NODE_ENV !== "production" && r.patchFlag > 0 && r.patchFlag & 2048)
      return al(r);
  } else
    return [e, void 0];
  const i = t.indexOf(r), o = n ? n.indexOf(r) : -1, c = (u) => {
    t[i] = u, n && (o > -1 ? n[o] = u : u.patchFlag > 0 && (e.dynamicChildren = [...n, u]));
  };
  return [cn(r), c];
};
function Lo(e, t = !0) {
  let n;
  for (let r = 0; r < e.length; r++) {
    const i = e[r];
    if (Go(i)) {
      if (i.type !== en || i.children === "v-if") {
        if (n)
          return;
        if (n = i, process.env.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return Lo(n.children);
      }
    } else
      return;
  }
  return n;
}
const va = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || jr(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, _a = (e, t) => {
  const n = {};
  for (const r in e)
    (!gi(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
}, os = (e) => e.shapeFlag & 7 || e.type === en;
function wa(e, t, n) {
  const { props: r, children: i, component: o } = e, { props: c, children: u, patchFlag: f } = t, d = o.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (i || u) && sr || t.dirs || t.transition)
    return !0;
  if (n && f >= 0) {
    if (f & 1024)
      return !0;
    if (f & 16)
      return r ? ss(r, c, d) : !!c;
    if (f & 8) {
      const E = t.dynamicProps;
      for (let _ = 0; _ < E.length; _++) {
        const D = E[_];
        if (c[D] !== r[D] && !Vi(d, D))
          return !0;
      }
    }
  } else
    return (i || u) && (!u || !u.$stable) ? !0 : r === c ? !1 : r ? c ? ss(r, c, d) : !0 : !!c;
  return !1;
}
function ss(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < r.length; i++) {
    const o = r[i];
    if (t[o] !== e[o] && !Vi(n, o))
      return !0;
  }
  return !1;
}
function ma({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const ya = Symbol.for("v-ndc"), Ea = (e) => e.__isSuspense;
function ba(e, t) {
  t && t.pendingBranch ? Ee(e) ? t.effects.push(...e) : t.effects.push(e) : tl(e);
}
const Na = Symbol.for("v-scx"), Oa = () => {
  {
    const e = fi(Na);
    return e || process.env.NODE_ENV !== "production" && K(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
}, ii = {};
function ki(e, t, n) {
  return process.env.NODE_ENV !== "production" && !Oe(t) && K(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), fl(e, t, n);
}
function fl(e, t, {
  immediate: n,
  deep: r,
  flush: i,
  once: o,
  onTrack: c,
  onTrigger: u
} = et) {
  if (t && o) {
    const ae = t;
    t = (...be) => {
      ae(...be), Se();
    };
  }
  process.env.NODE_ENV !== "production" && r !== void 0 && typeof r == "number" && K(
    'watch() "deep" option with number value will be used as watch depth in future versions. Please use a boolean instead to avoid potential breakage.'
  ), process.env.NODE_ENV !== "production" && !t && (n !== void 0 && K(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && K(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && K(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const f = (ae) => {
    K(
      "Invalid watch source: ",
      ae,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, d = Mt, E = (ae) => r === !0 ? ae : (
    // for deep: false, only traverse root-level properties
    nr(ae, r === !1 ? 1 : void 0)
  );
  let _, D = !1, $ = !1;
  if (Ht(e) ? (_ = () => e.value, D = Er(e)) : yr(e) ? (_ = () => E(e), D = !0) : Ee(e) ? ($ = !0, D = e.some((ae) => yr(ae) || Er(ae)), _ = () => e.map((ae) => {
    if (Ht(ae))
      return ae.value;
    if (yr(ae))
      return E(ae);
    if (Oe(ae))
      return Sn(ae, d, 2);
    process.env.NODE_ENV !== "production" && f(ae);
  })) : Oe(e) ? t ? _ = () => Sn(e, d, 2) : _ = () => (ee && ee(), hn(
    e,
    d,
    3,
    [ce]
  )) : (_ = _t, process.env.NODE_ENV !== "production" && f(e)), t && r) {
    const ae = _;
    _ = () => nr(ae());
  }
  let ee, ce = (ae) => {
    ee = je.onStop = () => {
      Sn(ae, d, 4), ee = je.onStop = void 0;
    };
  }, Ge;
  if (Ti)
    if (ce = _t, t ? n && hn(t, d, 3, [
      _(),
      $ ? [] : void 0,
      ce
    ]) : _(), i === "sync") {
      const ae = Oa();
      Ge = ae.__watcherHandles || (ae.__watcherHandles = []);
    } else
      return _t;
  let xe = $ ? new Array(e.length).fill(ii) : ii;
  const Ae = () => {
    if (!(!je.active || !je.dirty))
      if (t) {
        const ae = je.run();
        (r || D || ($ ? ae.some((be, Le) => cr(be, xe[Le])) : cr(ae, xe))) && (ee && ee(), hn(t, d, 3, [
          ae,
          // pass undefined as the old value when it's changed for the first time
          xe === ii ? void 0 : $ && xe[0] === ii ? [] : xe,
          ce
        ]), xe = ae);
      } else
        je.run();
  };
  Ae.allowRecurse = !!t;
  let Pe;
  i === "sync" ? Pe = Ae : i === "post" ? Pe = () => Xt(Ae, d && d.suspense) : (Ae.pre = !0, d && (Ae.id = d.uid), Pe = () => Si(Ae));
  const je = new Do(_, _t, Pe), Be = mc(), Se = () => {
    je.stop(), Be && Eo(Be.effects, je);
  };
  return process.env.NODE_ENV !== "production" && (je.onTrack = c, je.onTrigger = u), t ? n ? Ae() : xe = je.run() : i === "post" ? Xt(
    je.run.bind(je),
    d && d.suspense
  ) : je.run(), Ge && Ge.push(Se), Se;
}
function xa(e, t, n) {
  const r = this.proxy, i = Ot(e) ? e.includes(".") ? ul(r, e) : () => r[e] : e.bind(r, r);
  let o;
  Oe(t) ? o = t : (o = t.handler, n = t);
  const c = zr(this), u = fl(i, o.bind(r), n);
  return c(), u;
}
function ul(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let i = 0; i < n.length && r; i++)
      r = r[n[i]];
    return r;
  };
}
function nr(e, t = 1 / 0, n) {
  if (t <= 0 || !lt(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, Ht(e))
    nr(e.value, t, n);
  else if (Ee(e))
    for (let r = 0; r < e.length; r++)
      nr(e[r], t, n);
  else if (Ql(e) || mr(e))
    e.forEach((r) => {
      nr(r, t, n);
    });
  else if (tc(e))
    for (const r in e)
      nr(e[r], t, n);
  return e;
}
function hl(e) {
  nc(e) && K("Do not use built-in directive ids as custom directive id: " + e);
}
function Zt(e, t) {
  if (jt === null)
    return process.env.NODE_ENV !== "production" && K("withDirectives can only be used inside render functions."), e;
  const n = Mi(jt) || jt.proxy, r = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [o, c, u, f = et] = t[i];
    o && (Oe(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && nr(c), r.push({
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
function Xn(e, t, n, r) {
  const i = e.dirs, o = t && t.dirs;
  for (let c = 0; c < i.length; c++) {
    const u = i[c];
    o && (u.oldValue = o[c].value);
    let f = u.dir[r];
    f && (Tn(), hn(f, n, 8, [
      e.el,
      u,
      e,
      t
    ]), Mn());
  }
}
const ai = (e) => !!e.type.__asyncLoader, ko = (e) => e.type.__isKeepAlive;
function Aa(e, t) {
  dl(e, "a", t);
}
function Da(e, t) {
  dl(e, "da", t);
}
function dl(e, t, n = Mt) {
  const r = e.__wdc || (e.__wdc = () => {
    let i = n;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (Ri(t, r, n), n) {
    let i = n.parent;
    for (; i && i.parent; )
      ko(i.parent.vnode) && Sa(r, t, n, i), i = i.parent;
  }
}
function Sa(e, t, n, r) {
  const i = Ri(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  pl(() => {
    Eo(r[t], i);
  }, n);
}
function Ri(e, t, n = Mt, r = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...c) => {
      if (n.isUnmounted)
        return;
      Tn();
      const u = zr(n), f = hn(t, n, e, c);
      return u(), Mn(), f;
    });
    return r ? i.unshift(o) : i.push(o), o;
  } else if (process.env.NODE_ENV !== "production") {
    const i = tr(Io[e].replace(/ hook$/, ""));
    K(
      `${i} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Cn = (e) => (t, n = Mt) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!Ti || e === "sp") && Ri(e, (...r) => t(...r), n)
), Va = Cn("bm"), Ra = Cn("m"), Ta = Cn("bu"), Ma = Cn("u"), Ca = Cn("bum"), pl = Cn("um"), Ia = Cn("sp"), Ua = Cn(
  "rtg"
), Pa = Cn(
  "rtc"
);
function $a(e, t = Mt) {
  Ri("ec", e, t);
}
const co = (e) => e ? Ml(e) ? Mi(e) || e.proxy : co(e.parent) : null, lr = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ dt(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? wn(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? wn(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? wn(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? wn(e.refs) : e.refs,
    $parent: (e) => co(e.parent),
    $root: (e) => co(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Ho(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      e.effect.dirty = !0, Si(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Xc.bind(e.proxy)),
    $watch: (e) => xa.bind(e)
  })
), jo = (e) => e === "_" || e === "$", ji = (e, t) => e !== et && !e.__isScriptSetup && Ie(e, t), gl = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: i, props: o, accessCache: c, type: u, appContext: f } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let d;
    if (t[0] !== "$") {
      const $ = c[t];
      if ($ !== void 0)
        switch ($) {
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
        if (ji(r, t))
          return c[t] = 1, r[t];
        if (i !== et && Ie(i, t))
          return c[t] = 2, i[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (d = e.propsOptions[0]) && Ie(d, t)
        )
          return c[t] = 3, o[t];
        if (n !== et && Ie(n, t))
          return c[t] = 4, n[t];
        ao && (c[t] = 0);
      }
    }
    const E = lr[t];
    let _, D;
    if (E)
      return t === "$attrs" ? (Ut(e.attrs, "get", ""), process.env.NODE_ENV !== "production" && _i()) : process.env.NODE_ENV !== "production" && t === "$slots" && Ut(e, "get", t), E(e);
    if (
      // css module (injected by vue-loader)
      (_ = u.__cssModules) && (_ = _[t])
    )
      return _;
    if (n !== et && Ie(n, t))
      return c[t] = 4, n[t];
    if (
      // global properties
      D = f.config.globalProperties, Ie(D, t)
    )
      return D[t];
    process.env.NODE_ENV !== "production" && jt && (!Ot(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (i !== et && jo(t[0]) && Ie(i, t) ? K(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === jt && K(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: i, ctx: o } = e;
    return ji(i, t) ? (i[t] = n, !0) : process.env.NODE_ENV !== "production" && i.__isScriptSetup && Ie(i, t) ? (K(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : r !== et && Ie(r, t) ? (r[t] = n, !0) : Ie(e.props, t) ? (process.env.NODE_ENV !== "production" && K(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && K(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(o, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: i, propsOptions: o }
  }, c) {
    let u;
    return !!n[c] || e !== et && Ie(e, c) || ji(t, c) || (u = o[0]) && Ie(u, c) || Ie(r, c) || Ie(lr, c) || Ie(i.config.globalProperties, c);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Ie(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (gl.ownKeys = (e) => (K(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function Fa(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(lr).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => lr[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: _t
    });
  }), t;
}
function La(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((r) => {
    Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[r],
      set: _t
    });
  });
}
function ka(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(Ce(n)).forEach((r) => {
    if (!n.__isScriptSetup) {
      if (jo(r[0])) {
        K(
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
        set: _t
      });
    }
  });
}
function ls(e) {
  return Ee(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function ja() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? K(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let ao = !0;
function Ha(e) {
  const t = Ho(e), n = e.proxy, r = e.ctx;
  ao = !1, t.beforeCreate && cs(t.beforeCreate, e, "bc");
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
    beforeMount: _,
    mounted: D,
    beforeUpdate: $,
    updated: ee,
    activated: ce,
    deactivated: Ge,
    beforeDestroy: xe,
    beforeUnmount: Ae,
    destroyed: Pe,
    unmounted: je,
    render: Be,
    renderTracked: Se,
    renderTriggered: ae,
    errorCaptured: be,
    serverPrefetch: Le,
    // public API
    expose: We,
    inheritAttrs: tt,
    // assets
    components: At,
    directives: In,
    filters: fr
  } = t, zt = process.env.NODE_ENV !== "production" ? ja() : null;
  if (process.env.NODE_ENV !== "production") {
    const [Me] = e.propsOptions;
    if (Me)
      for (const Re in Me)
        zt("Props", Re);
  }
  if (d && Ba(d, r, zt), c)
    for (const Me in c) {
      const Re = c[Me];
      Oe(Re) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(r, Me, {
        value: Re.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : r[Me] = Re.bind(n), process.env.NODE_ENV !== "production" && zt("Methods", Me)) : process.env.NODE_ENV !== "production" && K(
        `Method "${Me}" has type "${typeof Re}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (i) {
    process.env.NODE_ENV !== "production" && !Oe(i) && K(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const Me = i.call(n, n);
    if (process.env.NODE_ENV !== "production" && bo(Me) && K(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !lt(Me))
      process.env.NODE_ENV !== "production" && K("data() should return an object.");
    else if (e.data = To(Me), process.env.NODE_ENV !== "production")
      for (const Re in Me)
        zt("Data", Re), jo(Re[0]) || Object.defineProperty(r, Re, {
          configurable: !0,
          enumerable: !0,
          get: () => Me[Re],
          set: _t
        });
  }
  if (ao = !0, o)
    for (const Me in o) {
      const Re = o[Me], Pt = Oe(Re) ? Re.bind(n, n) : Oe(Re.get) ? Re.get.bind(n, n) : _t;
      process.env.NODE_ENV !== "production" && Pt === _t && K(`Computed property "${Me}" has no getter.`);
      const on = !Oe(Re) && Oe(Re.set) ? Re.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        K(
          `Write operation failed: computed property "${Me}" is readonly.`
        );
      } : _t, Ct = Tf({
        get: Pt,
        set: on
      });
      Object.defineProperty(r, Me, {
        enumerable: !0,
        configurable: !0,
        get: () => Ct.value,
        set: (Kt) => Ct.value = Kt
      }), process.env.NODE_ENV !== "production" && zt("Computed", Me);
    }
  if (u)
    for (const Me in u)
      vl(u[Me], r, n, Me);
  if (f) {
    const Me = Oe(f) ? f.call(n) : f;
    Reflect.ownKeys(Me).forEach((Re) => {
      Ya(Re, Me[Re]);
    });
  }
  E && cs(E, e, "c");
  function qe(Me, Re) {
    Ee(Re) ? Re.forEach((Pt) => Me(Pt.bind(n))) : Re && Me(Re.bind(n));
  }
  if (qe(Va, _), qe(Ra, D), qe(Ta, $), qe(Ma, ee), qe(Aa, ce), qe(Da, Ge), qe($a, be), qe(Pa, Se), qe(Ua, ae), qe(Ca, Ae), qe(pl, je), qe(Ia, Le), Ee(We))
    if (We.length) {
      const Me = e.exposed || (e.exposed = {});
      We.forEach((Re) => {
        Object.defineProperty(Me, Re, {
          get: () => n[Re],
          set: (Pt) => n[Re] = Pt
        });
      });
    } else
      e.exposed || (e.exposed = {});
  Be && e.render === _t && (e.render = Be), tt != null && (e.inheritAttrs = tt), At && (e.components = At), In && (e.directives = In);
}
function Ba(e, t, n = _t) {
  Ee(e) && (e = fo(e));
  for (const r in e) {
    const i = e[r];
    let o;
    lt(i) ? "default" in i ? o = fi(
      i.from || r,
      i.default,
      !0
    ) : o = fi(i.from || r) : o = fi(i), Ht(o) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (c) => o.value = c
    }) : t[r] = o, process.env.NODE_ENV !== "production" && n("Inject", r);
  }
}
function cs(e, t, n) {
  hn(
    Ee(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function vl(e, t, n, r) {
  const i = r.includes(".") ? ul(n, r) : () => n[r];
  if (Ot(e)) {
    const o = t[e];
    Oe(o) ? ki(i, o) : process.env.NODE_ENV !== "production" && K(`Invalid watch handler specified by key "${e}"`, o);
  } else if (Oe(e))
    ki(i, e.bind(n));
  else if (lt(e))
    if (Ee(e))
      e.forEach((o) => vl(o, t, n, r));
    else {
      const o = Oe(e.handler) ? e.handler.bind(n) : t[e.handler];
      Oe(o) ? ki(i, o, e) : process.env.NODE_ENV !== "production" && K(`Invalid watch handler specified by key "${e.handler}"`, o);
    }
  else
    process.env.NODE_ENV !== "production" && K(`Invalid watch option: "${r}"`, e);
}
function Ho(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: i,
    optionsCache: o,
    config: { optionMergeStrategies: c }
  } = e.appContext, u = o.get(t);
  let f;
  return u ? f = u : !i.length && !n && !r ? f = t : (f = {}, i.length && i.forEach(
    (d) => wi(f, d, c, !0)
  ), wi(f, t, c)), lt(t) && o.set(t, f), f;
}
function wi(e, t, n, r = !1) {
  const { mixins: i, extends: o } = t;
  o && wi(e, o, n, !0), i && i.forEach(
    (c) => wi(e, c, n, !0)
  );
  for (const c in t)
    if (r && c === "expose")
      process.env.NODE_ENV !== "production" && K(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const u = Ga[c] || n && n[c];
      e[c] = u ? u(e[c], t[c]) : t[c];
    }
  return e;
}
const Ga = {
  data: as,
  props: fs,
  emits: fs,
  // objects
  methods: Rr,
  computed: Rr,
  // lifecycle
  beforeCreate: Wt,
  created: Wt,
  beforeMount: Wt,
  mounted: Wt,
  beforeUpdate: Wt,
  updated: Wt,
  beforeDestroy: Wt,
  beforeUnmount: Wt,
  destroyed: Wt,
  unmounted: Wt,
  activated: Wt,
  deactivated: Wt,
  errorCaptured: Wt,
  serverPrefetch: Wt,
  // assets
  components: Rr,
  directives: Rr,
  // watch
  watch: za,
  // provide / inject
  provide: as,
  inject: Wa
};
function as(e, t) {
  return t ? e ? function() {
    return dt(
      Oe(e) ? e.call(this, this) : e,
      Oe(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Wa(e, t) {
  return Rr(fo(e), fo(t));
}
function fo(e) {
  if (Ee(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Wt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Rr(e, t) {
  return e ? dt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function fs(e, t) {
  return e ? Ee(e) && Ee(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : dt(
    /* @__PURE__ */ Object.create(null),
    ls(e),
    ls(t ?? {})
  ) : t;
}
function za(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = dt(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = Wt(e[r], t[r]);
  return n;
}
function _l() {
  return {
    app: null,
    config: {
      isNativeTag: Zl,
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
let Ka = 0;
function qa(e, t) {
  return function(r, i = null) {
    Oe(r) || (r = dt({}, r)), i != null && !lt(i) && (process.env.NODE_ENV !== "production" && K("root props passed to app.mount() must be an object."), i = null);
    const o = _l(), c = /* @__PURE__ */ new WeakSet();
    let u = !1;
    const f = o.app = {
      _uid: Ka++,
      _component: r,
      _props: i,
      _container: null,
      _context: o,
      _instance: null,
      version: ys,
      get config() {
        return o.config;
      },
      set config(d) {
        process.env.NODE_ENV !== "production" && K(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(d, ...E) {
        return c.has(d) ? process.env.NODE_ENV !== "production" && K("Plugin has already been applied to target app.") : d && Oe(d.install) ? (c.add(d), d.install(f, ...E)) : Oe(d) ? (c.add(d), d(f, ...E)) : process.env.NODE_ENV !== "production" && K(
          'A plugin must either be a function or an object with an "install" function.'
        ), f;
      },
      mixin(d) {
        return o.mixins.includes(d) ? process.env.NODE_ENV !== "production" && K(
          "Mixin has already been applied to target app" + (d.name ? `: ${d.name}` : "")
        ) : o.mixins.push(d), f;
      },
      component(d, E) {
        return process.env.NODE_ENV !== "production" && _o(d, o.config), E ? (process.env.NODE_ENV !== "production" && o.components[d] && K(`Component "${d}" has already been registered in target app.`), o.components[d] = E, f) : o.components[d];
      },
      directive(d, E) {
        return process.env.NODE_ENV !== "production" && hl(d), E ? (process.env.NODE_ENV !== "production" && o.directives[d] && K(`Directive "${d}" has already been registered in target app.`), o.directives[d] = E, f) : o.directives[d];
      },
      mount(d, E, _) {
        if (u)
          process.env.NODE_ENV !== "production" && K(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          process.env.NODE_ENV !== "production" && d.__vue_app__ && K(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const D = Vn(r, i);
          return D.appContext = o, _ === !0 ? _ = "svg" : _ === !1 && (_ = void 0), process.env.NODE_ENV !== "production" && (o.reload = () => {
            e(
              Jn(D),
              d,
              _
            );
          }), E && t ? t(D, d) : e(D, d, _), u = !0, f._container = d, d.__vue_app__ = f, process.env.NODE_ENV !== "production" && (f._instance = D.component, sa(f, ys)), Mi(D.component) || D.component.proxy;
        }
      },
      unmount() {
        u ? (e(null, f._container), process.env.NODE_ENV !== "production" && (f._instance = null, la(f)), delete f._container.__vue_app__) : process.env.NODE_ENV !== "production" && K("Cannot unmount an app that is not mounted.");
      },
      provide(d, E) {
        return process.env.NODE_ENV !== "production" && d in o.provides && K(
          `App already provides property with key "${String(d)}". It will be overwritten with the new value.`
        ), o.provides[d] = E, f;
      },
      runWithContext(d) {
        const E = Ir;
        Ir = f;
        try {
          return d();
        } finally {
          Ir = E;
        }
      }
    };
    return f;
  };
}
let Ir = null;
function Ya(e, t) {
  if (!Mt)
    process.env.NODE_ENV !== "production" && K("provide() can only be used inside setup().");
  else {
    let n = Mt.provides;
    const r = Mt.parent && Mt.parent.provides;
    r === n && (n = Mt.provides = Object.create(r)), n[e] = t;
  }
}
function fi(e, t, n = !1) {
  const r = Mt || jt;
  if (r || Ir) {
    const i = r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : Ir._context.provides;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && Oe(t) ? t.call(r && r.proxy) : t;
    process.env.NODE_ENV !== "production" && K(`injection "${String(e)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && K("inject() can only be used inside setup() or functional components.");
}
const wl = {}, ml = () => Object.create(wl), yl = (e) => Object.getPrototypeOf(e) === wl;
function Ja(e, t, n, r = !1) {
  const i = {}, o = ml();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), El(e, t, i, o);
  for (const c in e.propsOptions[0])
    c in i || (i[c] = void 0);
  process.env.NODE_ENV !== "production" && Nl(t || {}, i, e), n ? e.props = r ? i : Lc(i) : e.type.props ? e.props = i : e.props = o, e.attrs = o;
}
function Za(e) {
  for (; e; ) {
    if (e.type.__hmrId)
      return !0;
    e = e.parent;
  }
}
function Xa(e, t, n, r) {
  const {
    props: i,
    attrs: o,
    vnode: { patchFlag: c }
  } = e, u = Ce(i), [f] = e.propsOptions;
  let d = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(process.env.NODE_ENV !== "production" && Za(e)) && (r || c > 0) && !(c & 16)
  ) {
    if (c & 8) {
      const E = e.vnode.dynamicProps;
      for (let _ = 0; _ < E.length; _++) {
        let D = E[_];
        if (Vi(e.emitsOptions, D))
          continue;
        const $ = t[D];
        if (f)
          if (Ie(o, D))
            $ !== o[D] && (o[D] = $, d = !0);
          else {
            const ee = Or(D);
            i[ee] = uo(
              f,
              u,
              ee,
              $,
              e,
              !1
            );
          }
        else
          $ !== o[D] && (o[D] = $, d = !0);
      }
    }
  } else {
    El(e, t, i, o) && (d = !0);
    let E;
    for (const _ in u)
      (!t || // for camelCase
      !Ie(t, _) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((E = qn(_)) === _ || !Ie(t, E))) && (f ? n && // for camelCase
      (n[_] !== void 0 || // for kebab-case
      n[E] !== void 0) && (i[_] = uo(
        f,
        u,
        _,
        void 0,
        e,
        !0
      )) : delete i[_]);
    if (o !== u)
      for (const _ in o)
        (!t || !Ie(t, _)) && (delete o[_], d = !0);
  }
  d && mn(e.attrs, "set", ""), process.env.NODE_ENV !== "production" && Nl(t || {}, i, e);
}
function El(e, t, n, r) {
  const [i, o] = e.propsOptions;
  let c = !1, u;
  if (t)
    for (let f in t) {
      if (Mr(f))
        continue;
      const d = t[f];
      let E;
      i && Ie(i, E = Or(f)) ? !o || !o.includes(E) ? n[E] = d : (u || (u = {}))[E] = d : Vi(e.emitsOptions, f) || (!(f in r) || d !== r[f]) && (r[f] = d, c = !0);
    }
  if (o) {
    const f = Ce(n), d = u || et;
    for (let E = 0; E < o.length; E++) {
      const _ = o[E];
      n[_] = uo(
        i,
        f,
        _,
        d[_],
        e,
        !Ie(d, _)
      );
    }
  }
  return c;
}
function uo(e, t, n, r, i, o) {
  const c = e[n];
  if (c != null) {
    const u = Ie(c, "default");
    if (u && r === void 0) {
      const f = c.default;
      if (c.type !== Function && !c.skipFactory && Oe(f)) {
        const { propsDefaults: d } = i;
        if (n in d)
          r = d[n];
        else {
          const E = zr(i);
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
    ] && (r === "" || r === qn(n)) && (r = !0));
  }
  return r;
}
function bl(e, t, n = !1) {
  const r = t.propsCache, i = r.get(e);
  if (i)
    return i;
  const o = e.props, c = {}, u = [];
  let f = !1;
  if (!Oe(e)) {
    const E = (_) => {
      f = !0;
      const [D, $] = bl(_, t, !0);
      dt(c, D), $ && u.push(...$);
    };
    !n && t.mixins.length && t.mixins.forEach(E), e.extends && E(e.extends), e.mixins && e.mixins.forEach(E);
  }
  if (!o && !f)
    return lt(e) && r.set(e, wr), wr;
  if (Ee(o))
    for (let E = 0; E < o.length; E++) {
      process.env.NODE_ENV !== "production" && !Ot(o[E]) && K("props must be strings when using array syntax.", o[E]);
      const _ = Or(o[E]);
      us(_) && (c[_] = et);
    }
  else if (o) {
    process.env.NODE_ENV !== "production" && !lt(o) && K("invalid props options", o);
    for (const E in o) {
      const _ = Or(E);
      if (us(_)) {
        const D = o[E], $ = c[_] = Ee(D) || Oe(D) ? { type: D } : dt({}, D);
        if ($) {
          const ee = ds(Boolean, $.type), ce = ds(String, $.type);
          $[
            0
            /* shouldCast */
          ] = ee > -1, $[
            1
            /* shouldCastTrue */
          ] = ce < 0 || ee < ce, (ee > -1 || Ie($, "default")) && u.push(_);
        }
      }
    }
  }
  const d = [c, u];
  return lt(e) && r.set(e, d), d;
}
function us(e) {
  return e[0] !== "$" && !Mr(e) ? !0 : (process.env.NODE_ENV !== "production" && K(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function ho(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function hs(e, t) {
  return ho(e) === ho(t);
}
function ds(e, t) {
  return Ee(t) ? t.findIndex((n) => hs(n, e)) : Oe(t) && hs(t, e) ? 0 : -1;
}
function Nl(e, t, n) {
  const r = Ce(t), i = n.propsOptions[0];
  for (const o in i) {
    let c = i[o];
    c != null && Qa(
      o,
      r[o],
      c,
      process.env.NODE_ENV !== "production" ? wn(r) : r,
      !Ie(e, o) && !Ie(e, qn(o))
    );
  }
}
function Qa(e, t, n, r, i) {
  const { type: o, required: c, validator: u, skipCheck: f } = n;
  if (c && i) {
    K('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !c)) {
    if (o != null && o !== !0 && !f) {
      let d = !1;
      const E = Ee(o) ? o : [o], _ = [];
      for (let D = 0; D < E.length && !d; D++) {
        const { valid: $, expectedType: ee } = tf(t, E[D]);
        _.push(ee || ""), d = $;
      }
      if (!d) {
        K(nf(e, t, _));
        return;
      }
    }
    u && !u(t, r) && K('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const ef = /* @__PURE__ */ Rn(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function tf(e, t) {
  let n;
  const r = ho(t);
  if (ef(r)) {
    const i = typeof e;
    n = i === r.toLowerCase(), !n && i === "object" && (n = e instanceof t);
  } else
    r === "Object" ? n = lt(e) : r === "Array" ? n = Ee(e) : r === "null" ? n = e === null : n = e instanceof t;
  return {
    valid: n,
    expectedType: r
  };
}
function nf(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let r = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(Oi).join(" | ")}`;
  const i = n[0], o = No(t), c = ps(t, i), u = ps(t, o);
  return n.length === 1 && gs(i) && !rf(i, o) && (r += ` with value ${c}`), r += `, got ${o} `, gs(o) && (r += `with value ${u}.`), r;
}
function ps(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function gs(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function rf(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const Ol = (e) => e[0] === "_" || e === "$stable", Bo = (e) => Ee(e) ? e.map(cn) : [cn(e)], of = (e, t, n) => {
  if (t._n)
    return t;
  const r = ga((...i) => (process.env.NODE_ENV !== "production" && Mt && (!n || n.root === Mt.root) && K(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Bo(t(...i))), n);
  return r._c = !1, r;
}, xl = (e, t, n) => {
  const r = e._ctx;
  for (const i in e) {
    if (Ol(i))
      continue;
    const o = e[i];
    if (Oe(o))
      t[i] = of(i, o, r);
    else if (o != null) {
      process.env.NODE_ENV !== "production" && K(
        `Non-function value encountered for slot "${i}". Prefer function slots for better performance.`
      );
      const c = Bo(o);
      t[i] = () => c;
    }
  }
}, Al = (e, t) => {
  process.env.NODE_ENV !== "production" && !ko(e.vnode) && K(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = Bo(t);
  e.slots.default = () => n;
}, sf = (e, t) => {
  const n = e.slots = ml();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (dt(n, t), Cs(n, "_", r, !0)) : xl(t, n);
  } else
    t && Al(e, t);
}, lf = (e, t, n) => {
  const { vnode: r, slots: i } = e;
  let o = !0, c = et;
  if (r.shapeFlag & 32) {
    const u = t._;
    u ? process.env.NODE_ENV !== "production" && sr ? (dt(i, t), mn(e, "set", "$slots")) : n && u === 1 ? o = !1 : (dt(i, t), !n && u === 1 && delete i._) : (o = !t.$stable, xl(t, i)), c = t;
  } else
    t && (Al(e, t), c = { default: 1 });
  if (o)
    for (const u in i)
      !Ol(u) && c[u] == null && delete i[u];
};
function po(e, t, n, r, i = !1) {
  if (Ee(e)) {
    e.forEach(
      (D, $) => po(
        D,
        t && (Ee(t) ? t[$] : t),
        n,
        r,
        i
      )
    );
    return;
  }
  if (ai(r) && !i)
    return;
  const o = r.shapeFlag & 4 ? Mi(r.component) || r.component.proxy : r.el, c = i ? null : o, { i: u, r: f } = e;
  if (process.env.NODE_ENV !== "production" && !u) {
    K(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const d = t && t.r, E = u.refs === et ? u.refs = {} : u.refs, _ = u.setupState;
  if (d != null && d !== f && (Ot(d) ? (E[d] = null, Ie(_, d) && (_[d] = null)) : Ht(d) && (d.value = null)), Oe(f))
    Sn(f, u, 12, [c, E]);
  else {
    const D = Ot(f), $ = Ht(f);
    if (D || $) {
      const ee = () => {
        if (e.f) {
          const ce = D ? Ie(_, f) ? _[f] : E[f] : f.value;
          i ? Ee(ce) && Eo(ce, o) : Ee(ce) ? ce.includes(o) || ce.push(o) : D ? (E[f] = [o], Ie(_, f) && (_[f] = E[f])) : (f.value = [o], e.k && (E[e.k] = f.value));
        } else
          D ? (E[f] = c, Ie(_, f) && (_[f] = c)) : $ ? (f.value = c, e.k && (E[e.k] = c)) : process.env.NODE_ENV !== "production" && K("Invalid template ref type:", f, `(${typeof f})`);
      };
      c ? (ee.id = -1, Xt(ee, n)) : ee();
    } else
      process.env.NODE_ENV !== "production" && K("Invalid template ref type:", f, `(${typeof f})`);
  }
}
let Ar, Wn;
function xn(e, t) {
  e.appContext.config.performance && mi() && Wn.mark(`vue-${t}-${e.uid}`), process.env.NODE_ENV !== "production" && ua(e, t, mi() ? Wn.now() : Date.now());
}
function An(e, t) {
  if (e.appContext.config.performance && mi()) {
    const n = `vue-${t}-${e.uid}`, r = n + ":end";
    Wn.mark(r), Wn.measure(
      `<${Ci(e, e.type)}> ${t}`,
      n,
      r
    ), Wn.clearMarks(n), Wn.clearMarks(r);
  }
  process.env.NODE_ENV !== "production" && ha(e, t, mi() ? Wn.now() : Date.now());
}
function mi() {
  return Ar !== void 0 || (typeof window < "u" && window.performance ? (Ar = !0, Wn = window.performance) : Ar = !1), Ar;
}
function cf() {
  const e = [];
  if (process.env.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const Xt = ba;
function af(e) {
  return ff(e);
}
function ff(e, t) {
  cf();
  const n = xo();
  n.__VUE__ = !0, process.env.NODE_ENV !== "production" && $o(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: r,
    remove: i,
    patchProp: o,
    createElement: c,
    createText: u,
    createComment: f,
    setText: d,
    setElementText: E,
    parentNode: _,
    nextSibling: D,
    setScopeId: $ = _t,
    insertStaticContent: ee
  } = e, ce = (p, m, V, M = null, C = null, j = null, z = void 0, H = null, W = process.env.NODE_ENV !== "production" && sr ? !1 : !!m.dynamicChildren) => {
    if (p === m)
      return;
    p && !Dr(p, m) && (M = Ye(p), qt(p, C, j, !0), p = null), m.patchFlag === -2 && (W = !1, m.dynamicChildren = null);
    const { type: I, ref: J, shapeFlag: fe } = m;
    switch (I) {
      case Wr:
        Ge(p, m, V, M);
        break;
      case en:
        xe(p, m, V, M);
        break;
      case hi:
        p == null ? Ae(m, V, M, z) : process.env.NODE_ENV !== "production" && Pe(p, m, V, z);
        break;
      case ln:
        In(
          p,
          m,
          V,
          M,
          C,
          j,
          z,
          H,
          W
        );
        break;
      default:
        fe & 1 ? Se(
          p,
          m,
          V,
          M,
          C,
          j,
          z,
          H,
          W
        ) : fe & 6 ? fr(
          p,
          m,
          V,
          M,
          C,
          j,
          z,
          H,
          W
        ) : fe & 64 || fe & 128 ? I.process(
          p,
          m,
          V,
          M,
          C,
          j,
          z,
          H,
          W,
          bn
        ) : process.env.NODE_ENV !== "production" && K("Invalid VNode type:", I, `(${typeof I})`);
    }
    J != null && C && po(J, p && p.ref, j, m || p, !m);
  }, Ge = (p, m, V, M) => {
    if (p == null)
      r(
        m.el = u(m.children),
        V,
        M
      );
    else {
      const C = m.el = p.el;
      m.children !== p.children && d(C, m.children);
    }
  }, xe = (p, m, V, M) => {
    p == null ? r(
      m.el = f(m.children || ""),
      V,
      M
    ) : m.el = p.el;
  }, Ae = (p, m, V, M) => {
    [p.el, p.anchor] = ee(
      p.children,
      m,
      V,
      M,
      p.el,
      p.anchor
    );
  }, Pe = (p, m, V, M) => {
    if (m.children !== p.children) {
      const C = D(p.anchor);
      Be(p), [m.el, m.anchor] = ee(
        m.children,
        V,
        C,
        M
      );
    } else
      m.el = p.el, m.anchor = p.anchor;
  }, je = ({ el: p, anchor: m }, V, M) => {
    let C;
    for (; p && p !== m; )
      C = D(p), r(p, V, M), p = C;
    r(m, V, M);
  }, Be = ({ el: p, anchor: m }) => {
    let V;
    for (; p && p !== m; )
      V = D(p), i(p), p = V;
    i(m);
  }, Se = (p, m, V, M, C, j, z, H, W) => {
    m.type === "svg" ? z = "svg" : m.type === "math" && (z = "mathml"), p == null ? ae(
      m,
      V,
      M,
      C,
      j,
      z,
      H,
      W
    ) : We(
      p,
      m,
      C,
      j,
      z,
      H,
      W
    );
  }, ae = (p, m, V, M, C, j, z, H) => {
    let W, I;
    const { props: J, shapeFlag: fe, transition: re, dirs: ge } = p;
    if (W = p.el = c(
      p.type,
      j,
      J && J.is,
      J
    ), fe & 8 ? E(W, p.children) : fe & 16 && Le(
      p.children,
      W,
      null,
      M,
      C,
      Hi(p, j),
      z,
      H
    ), ge && Xn(p, null, M, "created"), be(W, p, p.scopeId, z, M), J) {
      for (const $e in J)
        $e !== "value" && !Mr($e) && o(
          W,
          $e,
          null,
          J[$e],
          j,
          p.children,
          M,
          C,
          $t
        );
      "value" in J && o(W, "value", null, J.value, j), (I = J.onVnodeBeforeMount) && vn(I, M, p);
    }
    process.env.NODE_ENV !== "production" && (Object.defineProperty(W, "__vnode", {
      value: p,
      enumerable: !1
    }), Object.defineProperty(W, "__vueParentComponent", {
      value: M,
      enumerable: !1
    })), ge && Xn(p, null, M, "beforeMount");
    const De = uf(C, re);
    De && re.beforeEnter(W), r(W, m, V), ((I = J && J.onVnodeMounted) || De || ge) && Xt(() => {
      I && vn(I, M, p), De && re.enter(W), ge && Xn(p, null, M, "mounted");
    }, C);
  }, be = (p, m, V, M, C) => {
    if (V && $(p, V), M)
      for (let j = 0; j < M.length; j++)
        $(p, M[j]);
    if (C) {
      let j = C.subTree;
      if (process.env.NODE_ENV !== "production" && j.patchFlag > 0 && j.patchFlag & 2048 && (j = Lo(j.children) || j), m === j) {
        const z = C.vnode;
        be(
          p,
          z,
          z.scopeId,
          z.slotScopeIds,
          C.parent
        );
      }
    }
  }, Le = (p, m, V, M, C, j, z, H, W = 0) => {
    for (let I = W; I < p.length; I++) {
      const J = p[I] = H ? Hn(p[I]) : cn(p[I]);
      ce(
        null,
        J,
        m,
        V,
        M,
        C,
        j,
        z,
        H
      );
    }
  }, We = (p, m, V, M, C, j, z) => {
    const H = m.el = p.el;
    let { patchFlag: W, dynamicChildren: I, dirs: J } = m;
    W |= p.patchFlag & 16;
    const fe = p.props || et, re = m.props || et;
    let ge;
    if (V && Qn(V, !1), (ge = re.onVnodeBeforeUpdate) && vn(ge, V, m, p), J && Xn(m, p, V, "beforeUpdate"), V && Qn(V, !0), process.env.NODE_ENV !== "production" && sr && (W = 0, z = !1, I = null), I ? (tt(
      p.dynamicChildren,
      I,
      H,
      V,
      M,
      Hi(m, C),
      j
    ), process.env.NODE_ENV !== "production" && ui(p, m)) : z || Pt(
      p,
      m,
      H,
      null,
      V,
      M,
      Hi(m, C),
      j,
      !1
    ), W > 0) {
      if (W & 16)
        At(
          H,
          m,
          fe,
          re,
          V,
          M,
          C
        );
      else if (W & 2 && fe.class !== re.class && o(H, "class", null, re.class, C), W & 4 && o(H, "style", fe.style, re.style, C), W & 8) {
        const De = m.dynamicProps;
        for (let $e = 0; $e < De.length; $e++) {
          const ze = De[$e], Ue = fe[ze], Ke = re[ze];
          (Ke !== Ue || ze === "value") && o(
            H,
            ze,
            Ue,
            Ke,
            C,
            p.children,
            V,
            M,
            $t
          );
        }
      }
      W & 1 && p.children !== m.children && E(H, m.children);
    } else
      !z && I == null && At(
        H,
        m,
        fe,
        re,
        V,
        M,
        C
      );
    ((ge = re.onVnodeUpdated) || J) && Xt(() => {
      ge && vn(ge, V, m, p), J && Xn(m, p, V, "updated");
    }, M);
  }, tt = (p, m, V, M, C, j, z) => {
    for (let H = 0; H < m.length; H++) {
      const W = p[H], I = m[H], J = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        W.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (W.type === ln || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Dr(W, I) || // - In the case of a component, it could contain anything.
        W.shapeFlag & 70) ? _(W.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          V
        )
      );
      ce(
        W,
        I,
        J,
        null,
        M,
        C,
        j,
        z,
        !0
      );
    }
  }, At = (p, m, V, M, C, j, z) => {
    if (V !== M) {
      if (V !== et)
        for (const H in V)
          !Mr(H) && !(H in M) && o(
            p,
            H,
            V[H],
            null,
            z,
            m.children,
            C,
            j,
            $t
          );
      for (const H in M) {
        if (Mr(H))
          continue;
        const W = M[H], I = V[H];
        W !== I && H !== "value" && o(
          p,
          H,
          I,
          W,
          z,
          m.children,
          C,
          j,
          $t
        );
      }
      "value" in M && o(p, "value", V.value, M.value, z);
    }
  }, In = (p, m, V, M, C, j, z, H, W) => {
    const I = m.el = p ? p.el : u(""), J = m.anchor = p ? p.anchor : u("");
    let { patchFlag: fe, dynamicChildren: re, slotScopeIds: ge } = m;
    process.env.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (sr || fe & 2048) && (fe = 0, W = !1, re = null), ge && (H = H ? H.concat(ge) : ge), p == null ? (r(I, V, M), r(J, V, M), Le(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      m.children || [],
      V,
      J,
      C,
      j,
      z,
      H,
      W
    )) : fe > 0 && fe & 64 && re && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    p.dynamicChildren ? (tt(
      p.dynamicChildren,
      re,
      V,
      C,
      j,
      z,
      H
    ), process.env.NODE_ENV !== "production" ? ui(p, m) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (m.key != null || C && m === C.subTree) && ui(
        p,
        m,
        !0
        /* shallow */
      )
    )) : Pt(
      p,
      m,
      V,
      J,
      C,
      j,
      z,
      H,
      W
    );
  }, fr = (p, m, V, M, C, j, z, H, W) => {
    m.slotScopeIds = H, p == null ? m.shapeFlag & 512 ? C.ctx.activate(
      m,
      V,
      M,
      z,
      W
    ) : zt(
      m,
      V,
      M,
      C,
      j,
      z,
      W
    ) : qe(p, m, W);
  }, zt = (p, m, V, M, C, j, z) => {
    const H = p.component = Ef(
      p,
      M,
      C
    );
    if (process.env.NODE_ENV !== "production" && H.type.__hmrId && na(H), process.env.NODE_ENV !== "production" && (li(p), xn(H, "mount")), ko(p) && (H.ctx.renderer = bn), process.env.NODE_ENV !== "production" && xn(H, "init"), Of(H), process.env.NODE_ENV !== "production" && An(H, "init"), H.asyncDep) {
      if (C && C.registerDep(H, Me), !p.el) {
        const W = H.subTree = Vn(en);
        xe(null, W, m, V);
      }
    } else
      Me(
        H,
        p,
        m,
        V,
        C,
        j,
        z
      );
    process.env.NODE_ENV !== "production" && (ci(), An(H, "mount"));
  }, qe = (p, m, V) => {
    const M = m.component = p.component;
    if (wa(p, m, V))
      if (M.asyncDep && !M.asyncResolved) {
        process.env.NODE_ENV !== "production" && li(m), Re(M, m, V), process.env.NODE_ENV !== "production" && ci();
        return;
      } else
        M.next = m, ea(M.update), M.effect.dirty = !0, M.update();
    else
      m.el = p.el, M.vnode = m;
  }, Me = (p, m, V, M, C, j, z) => {
    const H = () => {
      if (p.isMounted) {
        let { next: J, bu: fe, u: re, parent: ge, vnode: De } = p;
        {
          const Yt = Dl(p);
          if (Yt) {
            J && (J.el = De.el, Re(p, J, z)), Yt.asyncDep.then(() => {
              p.isUnmounted || H();
            });
            return;
          }
        }
        let $e = J, ze;
        process.env.NODE_ENV !== "production" && li(J || p.vnode), Qn(p, !1), J ? (J.el = De.el, Re(p, J, z)) : J = De, fe && pr(fe), (ze = J.props && J.props.onVnodeBeforeUpdate) && vn(ze, ge, J, De), Qn(p, !0), process.env.NODE_ENV !== "production" && xn(p, "render");
        const Ue = Li(p);
        process.env.NODE_ENV !== "production" && An(p, "render");
        const Ke = p.subTree;
        p.subTree = Ue, process.env.NODE_ENV !== "production" && xn(p, "patch"), ce(
          Ke,
          Ue,
          // parent may have changed if it's in a teleport
          _(Ke.el),
          // anchor may have changed if it's in a fragment
          Ye(Ke),
          p,
          C,
          j
        ), process.env.NODE_ENV !== "production" && An(p, "patch"), J.el = Ue.el, $e === null && ma(p, Ue.el), re && Xt(re, C), (ze = J.props && J.props.onVnodeUpdated) && Xt(
          () => vn(ze, ge, J, De),
          C
        ), process.env.NODE_ENV !== "production" && ol(p), process.env.NODE_ENV !== "production" && ci();
      } else {
        let J;
        const { el: fe, props: re } = m, { bm: ge, m: De, parent: $e } = p, ze = ai(m);
        if (Qn(p, !1), ge && pr(ge), !ze && (J = re && re.onVnodeBeforeMount) && vn(J, $e, m), Qn(p, !0), fe && dn) {
          const Ue = () => {
            process.env.NODE_ENV !== "production" && xn(p, "render"), p.subTree = Li(p), process.env.NODE_ENV !== "production" && An(p, "render"), process.env.NODE_ENV !== "production" && xn(p, "hydrate"), dn(
              fe,
              p.subTree,
              p,
              C,
              null
            ), process.env.NODE_ENV !== "production" && An(p, "hydrate");
          };
          ze ? m.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !p.isUnmounted && Ue()
          ) : Ue();
        } else {
          process.env.NODE_ENV !== "production" && xn(p, "render");
          const Ue = p.subTree = Li(p);
          process.env.NODE_ENV !== "production" && An(p, "render"), process.env.NODE_ENV !== "production" && xn(p, "patch"), ce(
            null,
            Ue,
            V,
            M,
            p,
            C,
            j
          ), process.env.NODE_ENV !== "production" && An(p, "patch"), m.el = Ue.el;
        }
        if (De && Xt(De, C), !ze && (J = re && re.onVnodeMounted)) {
          const Ue = m;
          Xt(
            () => vn(J, $e, Ue),
            C
          );
        }
        (m.shapeFlag & 256 || $e && ai($e.vnode) && $e.vnode.shapeFlag & 256) && p.a && Xt(p.a, C), p.isMounted = !0, process.env.NODE_ENV !== "production" && ca(p), m = V = M = null;
      }
    }, W = p.effect = new Do(
      H,
      _t,
      () => Si(I),
      p.scope
      // track it in component's effect scope
    ), I = p.update = () => {
      W.dirty && W.run();
    };
    I.id = p.uid, Qn(p, !0), process.env.NODE_ENV !== "production" && (W.onTrack = p.rtc ? (J) => pr(p.rtc, J) : void 0, W.onTrigger = p.rtg ? (J) => pr(p.rtg, J) : void 0, I.ownerInstance = p), I();
  }, Re = (p, m, V) => {
    m.component = p;
    const M = p.vnode.props;
    p.vnode = m, p.next = null, Xa(p, m.props, M, V), lf(p, m.children, V), Tn(), rs(p), Mn();
  }, Pt = (p, m, V, M, C, j, z, H, W = !1) => {
    const I = p && p.children, J = p ? p.shapeFlag : 0, fe = m.children, { patchFlag: re, shapeFlag: ge } = m;
    if (re > 0) {
      if (re & 128) {
        Ct(
          I,
          fe,
          V,
          M,
          C,
          j,
          z,
          H,
          W
        );
        return;
      } else if (re & 256) {
        on(
          I,
          fe,
          V,
          M,
          C,
          j,
          z,
          H,
          W
        );
        return;
      }
    }
    ge & 8 ? (J & 16 && $t(I, C, j), fe !== I && E(V, fe)) : J & 16 ? ge & 16 ? Ct(
      I,
      fe,
      V,
      M,
      C,
      j,
      z,
      H,
      W
    ) : $t(I, C, j, !0) : (J & 8 && E(V, ""), ge & 16 && Le(
      fe,
      V,
      M,
      C,
      j,
      z,
      H,
      W
    ));
  }, on = (p, m, V, M, C, j, z, H, W) => {
    p = p || wr, m = m || wr;
    const I = p.length, J = m.length, fe = Math.min(I, J);
    let re;
    for (re = 0; re < fe; re++) {
      const ge = m[re] = W ? Hn(m[re]) : cn(m[re]);
      ce(
        p[re],
        ge,
        V,
        null,
        C,
        j,
        z,
        H,
        W
      );
    }
    I > J ? $t(
      p,
      C,
      j,
      !0,
      !1,
      fe
    ) : Le(
      m,
      V,
      M,
      C,
      j,
      z,
      H,
      W,
      fe
    );
  }, Ct = (p, m, V, M, C, j, z, H, W) => {
    let I = 0;
    const J = m.length;
    let fe = p.length - 1, re = J - 1;
    for (; I <= fe && I <= re; ) {
      const ge = p[I], De = m[I] = W ? Hn(m[I]) : cn(m[I]);
      if (Dr(ge, De))
        ce(
          ge,
          De,
          V,
          null,
          C,
          j,
          z,
          H,
          W
        );
      else
        break;
      I++;
    }
    for (; I <= fe && I <= re; ) {
      const ge = p[fe], De = m[re] = W ? Hn(m[re]) : cn(m[re]);
      if (Dr(ge, De))
        ce(
          ge,
          De,
          V,
          null,
          C,
          j,
          z,
          H,
          W
        );
      else
        break;
      fe--, re--;
    }
    if (I > fe) {
      if (I <= re) {
        const ge = re + 1, De = ge < J ? m[ge].el : M;
        for (; I <= re; )
          ce(
            null,
            m[I] = W ? Hn(m[I]) : cn(m[I]),
            V,
            De,
            C,
            j,
            z,
            H,
            W
          ), I++;
      }
    } else if (I > re)
      for (; I <= fe; )
        qt(p[I], C, j, !0), I++;
    else {
      const ge = I, De = I, $e = /* @__PURE__ */ new Map();
      for (I = De; I <= re; I++) {
        const y = m[I] = W ? Hn(m[I]) : cn(m[I]);
        y.key != null && (process.env.NODE_ENV !== "production" && $e.has(y.key) && K(
          "Duplicate keys found during update:",
          JSON.stringify(y.key),
          "Make sure keys are unique."
        ), $e.set(y.key, I));
      }
      let ze, Ue = 0;
      const Ke = re - De + 1;
      let Yt = !1, Un = 0;
      const w = new Array(Ke);
      for (I = 0; I < Ke; I++)
        w[I] = 0;
      for (I = ge; I <= fe; I++) {
        const y = p[I];
        if (Ue >= Ke) {
          qt(y, C, j, !0);
          continue;
        }
        let O;
        if (y.key != null)
          O = $e.get(y.key);
        else
          for (ze = De; ze <= re; ze++)
            if (w[ze - De] === 0 && Dr(y, m[ze])) {
              O = ze;
              break;
            }
        O === void 0 ? qt(y, C, j, !0) : (w[O - De] = I + 1, O >= Un ? Un = O : Yt = !0, ce(
          y,
          m[O],
          V,
          null,
          C,
          j,
          z,
          H,
          W
        ), Ue++);
      }
      const b = Yt ? hf(w) : wr;
      for (ze = b.length - 1, I = Ke - 1; I >= 0; I--) {
        const y = De + I, O = m[y], P = y + 1 < J ? m[y + 1].el : M;
        w[I] === 0 ? ce(
          null,
          O,
          V,
          P,
          C,
          j,
          z,
          H,
          W
        ) : Yt && (ze < 0 || I !== b[ze] ? Kt(O, V, P, 2) : ze--);
      }
    }
  }, Kt = (p, m, V, M, C = null) => {
    const { el: j, type: z, transition: H, children: W, shapeFlag: I } = p;
    if (I & 6) {
      Kt(p.component.subTree, m, V, M);
      return;
    }
    if (I & 128) {
      p.suspense.move(m, V, M);
      return;
    }
    if (I & 64) {
      z.move(p, m, V, bn);
      return;
    }
    if (z === ln) {
      r(j, m, V);
      for (let fe = 0; fe < W.length; fe++)
        Kt(W[fe], m, V, M);
      r(p.anchor, m, V);
      return;
    }
    if (z === hi) {
      je(p, m, V);
      return;
    }
    if (M !== 2 && I & 1 && H)
      if (M === 0)
        H.beforeEnter(j), r(j, m, V), Xt(() => H.enter(j), C);
      else {
        const { leave: fe, delayLeave: re, afterLeave: ge } = H, De = () => r(j, m, V), $e = () => {
          fe(j, () => {
            De(), ge && ge();
          });
        };
        re ? re(j, De, $e) : $e();
      }
    else
      r(j, m, V);
  }, qt = (p, m, V, M = !1, C = !1) => {
    const {
      type: j,
      props: z,
      ref: H,
      children: W,
      dynamicChildren: I,
      shapeFlag: J,
      patchFlag: fe,
      dirs: re
    } = p;
    if (H != null && po(H, null, V, p, !0), J & 256) {
      m.ctx.deactivate(p);
      return;
    }
    const ge = J & 1 && re, De = !ai(p);
    let $e;
    if (De && ($e = z && z.onVnodeBeforeUnmount) && vn($e, m, p), J & 6)
      wt(p.component, V, M);
    else {
      if (J & 128) {
        p.suspense.unmount(V, M);
        return;
      }
      ge && Xn(p, null, m, "beforeUnmount"), J & 64 ? p.type.remove(
        p,
        m,
        V,
        C,
        bn,
        M
      ) : I && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (j !== ln || fe > 0 && fe & 64) ? $t(
        I,
        m,
        V,
        !1,
        !0
      ) : (j === ln && fe & 384 || !C && J & 16) && $t(W, m, V), M && yn(p);
    }
    (De && ($e = z && z.onVnodeUnmounted) || ge) && Xt(() => {
      $e && vn($e, m, p), ge && Xn(p, null, m, "unmounted");
    }, V);
  }, yn = (p) => {
    const { type: m, el: V, anchor: M, transition: C } = p;
    if (m === ln) {
      process.env.NODE_ENV !== "production" && p.patchFlag > 0 && p.patchFlag & 2048 && C && !C.persisted ? p.children.forEach((z) => {
        z.type === en ? i(z.el) : yn(z);
      }) : En(V, M);
      return;
    }
    if (m === hi) {
      Be(p);
      return;
    }
    const j = () => {
      i(V), C && !C.persisted && C.afterLeave && C.afterLeave();
    };
    if (p.shapeFlag & 1 && C && !C.persisted) {
      const { leave: z, delayLeave: H } = C, W = () => z(V, j);
      H ? H(p.el, j, W) : W();
    } else
      j();
  }, En = (p, m) => {
    let V;
    for (; p !== m; )
      V = D(p), i(p), p = V;
    i(m);
  }, wt = (p, m, V) => {
    process.env.NODE_ENV !== "production" && p.type.__hmrId && ra(p);
    const { bum: M, scope: C, update: j, subTree: z, um: H } = p;
    M && pr(M), C.stop(), j && (j.active = !1, qt(z, p, m, V)), H && Xt(H, m), Xt(() => {
      p.isUnmounted = !0;
    }, m), m && m.pendingBranch && !m.isUnmounted && p.asyncDep && !p.asyncResolved && p.suspenseId === m.pendingId && (m.deps--, m.deps === 0 && m.resolve()), process.env.NODE_ENV !== "production" && fa(p);
  }, $t = (p, m, V, M = !1, C = !1, j = 0) => {
    for (let z = j; z < p.length; z++)
      qt(p[z], m, V, M, C);
  }, Ye = (p) => p.shapeFlag & 6 ? Ye(p.component.subTree) : p.shapeFlag & 128 ? p.suspense.next() : D(p.anchor || p.el);
  let rt = !1;
  const ur = (p, m, V) => {
    p == null ? m._vnode && qt(m._vnode, null, null, !0) : ce(
      m._vnode || null,
      p,
      m,
      null,
      null,
      null,
      V
    ), rt || (rt = !0, rs(), nl(), rt = !1), m._vnode = p;
  }, bn = {
    p: ce,
    um: qt,
    m: Kt,
    r: yn,
    mt: zt,
    mc: Le,
    pc: Pt,
    pbc: tt,
    n: Ye,
    o: e
  };
  let hr, dn;
  return {
    render: ur,
    hydrate: hr,
    createApp: qa(ur, hr)
  };
}
function Hi({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Qn({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function uf(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function ui(e, t, n = !1) {
  const r = e.children, i = t.children;
  if (Ee(r) && Ee(i))
    for (let o = 0; o < r.length; o++) {
      const c = r[o];
      let u = i[o];
      u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = i[o] = Hn(i[o]), u.el = c.el), n || ui(c, u)), u.type === Wr && (u.el = c.el), process.env.NODE_ENV !== "production" && u.type === en && !u.el && (u.el = c.el);
    }
}
function hf(e) {
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
function Dl(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Dl(t);
}
const df = (e) => e.__isTeleport, ln = Symbol.for("v-fgt"), Wr = Symbol.for("v-txt"), en = Symbol.for("v-cmt"), hi = Symbol.for("v-stc"), Ur = [];
let fn = null;
function Tr(e = !1) {
  Ur.push(fn = e ? null : []);
}
function pf() {
  Ur.pop(), fn = Ur[Ur.length - 1] || null;
}
let Lr = 1;
function vs(e) {
  Lr += e;
}
function Sl(e) {
  return e.dynamicChildren = Lr > 0 ? fn || wr : null, pf(), Lr > 0 && fn && fn.push(e), e;
}
function oi(e, t, n, r, i, o) {
  return Sl(
    He(
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
function gf(e, t, n, r, i) {
  return Sl(
    Vn(
      e,
      t,
      n,
      r,
      i,
      !0
    )
  );
}
function Go(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Dr(e, t) {
  return process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && gr.has(t.type) ? (e.shapeFlag &= -257, t.shapeFlag &= -513, !1) : e.type === t.type && e.key === t.key;
}
const vf = (...e) => Rl(
  ...e
), Vl = ({ key: e }) => e ?? null, di = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Ot(e) || Ht(e) || Oe(e) ? { i: jt, r: e, k: t, f: !!n } : e : null);
function He(e, t = null, n = null, r = 0, i = null, o = e === ln ? 0 : 1, c = !1, u = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Vl(t),
    ref: t && di(t),
    scopeId: cl,
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
    ctx: jt
  };
  return u ? (Wo(f, n), o & 128 && e.normalize(f)) : n && (f.shapeFlag |= Ot(n) ? 8 : 16), process.env.NODE_ENV !== "production" && f.key !== f.key && K("VNode created with invalid key (NaN). VNode type:", f.type), Lr > 0 && // avoid a block node from tracking itself
  !c && // has current parent block
  fn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (f.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  f.patchFlag !== 32 && fn.push(f), f;
}
const Vn = process.env.NODE_ENV !== "production" ? vf : Rl;
function Rl(e, t = null, n = null, r = 0, i = null, o = !1) {
  if ((!e || e === ya) && (process.env.NODE_ENV !== "production" && !e && K(`Invalid vnode type when creating vnode: ${e}.`), e = en), Go(e)) {
    const u = Jn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Wo(u, n), Lr > 0 && !o && fn && (u.shapeFlag & 6 ? fn[fn.indexOf(e)] = u : fn.push(u)), u.patchFlag |= -2, u;
  }
  if (Ul(e) && (e = e.__vccOpts), t) {
    t = _f(t);
    let { class: u, style: f } = t;
    u && !Ot(u) && (t.class = Ao(u)), lt(f) && (io(f) && !Ee(f) && (f = dt({}, f)), t.style = Gn(f));
  }
  const c = Ot(e) ? 1 : Ea(e) ? 128 : df(e) ? 64 : lt(e) ? 4 : Oe(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && c & 4 && io(e) && (e = Ce(e), K(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), He(
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
function _f(e) {
  return e ? io(e) || yl(e) ? dt({}, e) : e : null;
}
function Jn(e, t, n = !1, r = !1) {
  const { props: i, ref: o, patchFlag: c, children: u, transition: f } = e, d = t ? wf(i || {}, t) : i, E = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && Vl(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? Ee(o) ? o.concat(di(t)) : [o, di(t)] : di(t)
    ) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && c === -1 && Ee(u) ? u.map(Tl) : u,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== ln ? c === -1 ? 16 : c | 16 : c,
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
    ssContent: e.ssContent && Jn(e.ssContent),
    ssFallback: e.ssFallback && Jn(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return f && r && (E.transition = f.clone(E)), E;
}
function Tl(e) {
  const t = Jn(e);
  return Ee(e.children) && (t.children = e.children.map(Tl)), t;
}
function go(e = " ", t = 0) {
  return Vn(Wr, null, e, t);
}
function Bi(e = "", t = !1) {
  return t ? (Tr(), gf(en, null, e)) : Vn(en, null, e);
}
function cn(e) {
  return e == null || typeof e == "boolean" ? Vn(en) : Ee(e) ? Vn(
    ln,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? Hn(e) : Vn(Wr, null, String(e));
}
function Hn(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Jn(e);
}
function Wo(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (Ee(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), Wo(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !yl(t) ? t._ctx = jt : i === 3 && jt && (jt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    Oe(t) ? (t = { default: t, _ctx: jt }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [go(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function wf(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const i in r)
      if (i === "class")
        t.class !== r.class && (t.class = Ao([t.class, r.class]));
      else if (i === "style")
        t.style = Gn([t.style, r.style]);
      else if (jr(i)) {
        const o = t[i], c = r[i];
        c && o !== c && !(Ee(o) && o.includes(c)) && (t[i] = o ? [].concat(o, c) : c);
      } else
        i !== "" && (t[i] = r[i]);
  }
  return t;
}
function vn(e, t, n, r = null) {
  hn(e, t, 7, [
    n,
    r
  ]);
}
const mf = _l();
let yf = 0;
function Ef(e, t, n) {
  const r = e.type, i = (t ? t.appContext : e.appContext) || mf, o = {
    uid: yf++,
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
    scope: new _c(
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
    propsOptions: bl(r, i),
    emitsOptions: ll(r, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: et,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: et,
    data: et,
    props: et,
    attrs: et,
    slots: et,
    refs: et,
    setupState: et,
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
  return process.env.NODE_ENV !== "production" ? o.ctx = Fa(o) : o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = pa.bind(null, o), e.ce && e.ce(o), o;
}
let Mt = null;
const bf = () => Mt || jt;
let yi, vo;
{
  const e = xo(), t = (n, r) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(r), (o) => {
      i.length > 1 ? i.forEach((c) => c(o)) : i[0](o);
    };
  };
  yi = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Mt = n
  ), vo = t(
    "__VUE_SSR_SETTERS__",
    (n) => Ti = n
  );
}
const zr = (e) => {
  const t = Mt;
  return yi(e), e.scope.on(), () => {
    e.scope.off(), yi(t);
  };
}, _s = () => {
  Mt && Mt.scope.off(), yi(null);
}, Nf = /* @__PURE__ */ Rn("slot,component");
function _o(e, { isNativeTag: t }) {
  (Nf(e) || t(e)) && K(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function Ml(e) {
  return e.vnode.shapeFlag & 4;
}
let Ti = !1;
function Of(e, t = !1) {
  t && vo(t);
  const { props: n, children: r } = e.vnode, i = Ml(e);
  Ja(e, n, i, t), sf(e, r);
  const o = i ? xf(e, t) : void 0;
  return t && vo(!1), o;
}
function xf(e, t) {
  var n;
  const r = e.type;
  if (process.env.NODE_ENV !== "production") {
    if (r.name && _o(r.name, e.appContext.config), r.components) {
      const o = Object.keys(r.components);
      for (let c = 0; c < o.length; c++)
        _o(o[c], e.appContext.config);
    }
    if (r.directives) {
      const o = Object.keys(r.directives);
      for (let c = 0; c < o.length; c++)
        hl(o[c]);
    }
    r.compilerOptions && Af() && K(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, gl), process.env.NODE_ENV !== "production" && La(e);
  const { setup: i } = r;
  if (i) {
    const o = e.setupContext = i.length > 1 ? Sf(e) : null, c = zr(e);
    Tn();
    const u = Sn(
      i,
      e,
      0,
      [
        process.env.NODE_ENV !== "production" ? wn(e.props) : e.props,
        o
      ]
    );
    if (Mn(), c(), bo(u)) {
      if (u.then(_s, _s), t)
        return u.then((f) => {
          ws(e, f, t);
        }).catch((f) => {
          Br(f, e, 0);
        });
      if (e.asyncDep = u, process.env.NODE_ENV !== "production" && !e.suspense) {
        const f = (n = r.name) != null ? n : "Anonymous";
        K(
          `Component <${f}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      ws(e, u, t);
  } else
    Cl(e, t);
}
function ws(e, t, n) {
  Oe(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : lt(t) ? (process.env.NODE_ENV !== "production" && Go(t) && K(
    "setup() should not return VNodes directly - return a render function instead."
  ), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = Zs(t), process.env.NODE_ENV !== "production" && ka(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && K(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), Cl(e, n);
}
let wo;
const Af = () => !wo;
function Cl(e, t, n) {
  const r = e.type;
  if (!e.render) {
    if (!t && wo && !r.render) {
      const i = r.template || Ho(e).template;
      if (i) {
        process.env.NODE_ENV !== "production" && xn(e, "compile");
        const { isCustomElement: o, compilerOptions: c } = e.appContext.config, { delimiters: u, compilerOptions: f } = r, d = dt(
          dt(
            {
              isCustomElement: o,
              delimiters: u
            },
            c
          ),
          f
        );
        r.render = wo(i, d), process.env.NODE_ENV !== "production" && An(e, "compile");
      }
    }
    e.render = r.render || _t;
  }
  {
    const i = zr(e);
    Tn();
    try {
      Ha(e);
    } finally {
      Mn(), i();
    }
  }
  process.env.NODE_ENV !== "production" && !r.render && e.render === _t && !t && (r.template ? K(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : K("Component is missing template or render function."));
}
const ms = process.env.NODE_ENV !== "production" ? {
  get(e, t) {
    return _i(), Ut(e, "get", ""), e[t];
  },
  set() {
    return K("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return K("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return Ut(e, "get", ""), e[t];
  }
};
function Df(e) {
  return e.slotsProxy || (e.slotsProxy = new Proxy(e.slots, {
    get(t, n) {
      return Ut(e, "get", "$slots"), t[n];
    }
  }));
}
function Sf(e) {
  const t = (n) => {
    if (process.env.NODE_ENV !== "production" && (e.exposed && K("expose() should be called only once per setup()."), n != null)) {
      let r = typeof n;
      r === "object" && (Ee(n) ? r = "array" : Ht(n) && (r = "ref")), r !== "object" && K(
        `expose() should be passed a plain object, received ${r}.`
      );
    }
    e.exposed = n || {};
  };
  if (process.env.NODE_ENV !== "production") {
    let n;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, ms));
      },
      get slots() {
        return Df(e);
      },
      get emit() {
        return (r, ...i) => e.emit(r, ...i);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, ms),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function Mi(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Zs(kc(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in lr)
          return lr[n](e);
      },
      has(t, n) {
        return n in t || n in lr;
      }
    }));
}
const Vf = /(?:^|[-_])(\w)/g, Rf = (e) => e.replace(Vf, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Il(e, t = !0) {
  return Oe(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Ci(e, t, n = !1) {
  let r = Il(t);
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
  return r ? Rf(r) : n ? "App" : "Anonymous";
}
function Ul(e) {
  return Oe(e) && "__vccOpts" in e;
}
const Tf = (e, t) => {
  const n = Hc(e, t, Ti);
  if (process.env.NODE_ENV !== "production") {
    const r = bf();
    r && r.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function Mf() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, r = { style: "color:#eb2f96" }, i = {
    header(_) {
      return lt(_) ? _.__isVue ? ["div", e, "VueInstance"] : Ht(_) ? [
        "div",
        {},
        ["span", e, E(_)],
        "<",
        u(_.value),
        ">"
      ] : yr(_) ? [
        "div",
        {},
        ["span", e, Er(_) ? "ShallowReactive" : "Reactive"],
        "<",
        u(_),
        `>${xr(_) ? " (readonly)" : ""}`
      ] : xr(_) ? [
        "div",
        {},
        ["span", e, Er(_) ? "ShallowReadonly" : "Readonly"],
        "<",
        u(_),
        ">"
      ] : null : null;
    },
    hasBody(_) {
      return _ && _.__isVue;
    },
    body(_) {
      if (_ && _.__isVue)
        return [
          "div",
          {},
          ...o(_.$)
        ];
    }
  };
  function o(_) {
    const D = [];
    _.type.props && _.props && D.push(c("props", Ce(_.props))), _.setupState !== et && D.push(c("setup", _.setupState)), _.data !== et && D.push(c("data", Ce(_.data)));
    const $ = f(_, "computed");
    $ && D.push(c("computed", $));
    const ee = f(_, "inject");
    return ee && D.push(c("injected", ee)), D.push([
      "div",
      {},
      [
        "span",
        {
          style: r.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: _ }]
    ]), D;
  }
  function c(_, D) {
    return D = dt({}, D), Object.keys(D).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        _
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(D).map(($) => [
          "div",
          {},
          ["span", r, $ + ": "],
          u(D[$], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function u(_, D = !0) {
    return typeof _ == "number" ? ["span", t, _] : typeof _ == "string" ? ["span", n, JSON.stringify(_)] : typeof _ == "boolean" ? ["span", r, _] : lt(_) ? ["object", { object: D ? Ce(_) : _ }] : ["span", n, String(_)];
  }
  function f(_, D) {
    const $ = _.type;
    if (Oe($))
      return;
    const ee = {};
    for (const ce in _.ctx)
      d($, ce, D) && (ee[ce] = _.ctx[ce]);
    return ee;
  }
  function d(_, D, $) {
    const ee = _[$];
    if (Ee(ee) && ee.includes(D) || lt(ee) && D in ee || _.extends && d(_.extends, D, $) || _.mixins && _.mixins.some((ce) => d(ce, D, $)))
      return !0;
  }
  function E(_) {
    return Er(_) ? "ShallowRef" : _.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(i) : window.devtoolsFormatters = [i];
}
const ys = "3.4.27", Kn = process.env.NODE_ENV !== "production" ? K : _t;
process.env.NODE_ENV;
process.env.NODE_ENV;
/**
* @vue/runtime-dom v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Cf = "http://www.w3.org/2000/svg", If = "http://www.w3.org/1998/Math/MathML", Bn = typeof document < "u" ? document : null, Es = Bn && /* @__PURE__ */ Bn.createElement("template"), Uf = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const i = t === "svg" ? Bn.createElementNS(Cf, e) : t === "mathml" ? Bn.createElementNS(If, e) : Bn.createElement(e, n ? { is: n } : void 0);
    return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
  },
  createText: (e) => Bn.createTextNode(e),
  createComment: (e) => Bn.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Bn.querySelector(e),
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
      Es.innerHTML = r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e;
      const u = Es.content;
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
}, Pf = Symbol("_vtc");
function $f(e, t, n) {
  const r = e[Pf];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Ei = Symbol("_vod"), Pl = Symbol("_vsh"), kn = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[Ei] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Sr(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: r }) {
    !t != !n && (r ? t ? (r.beforeEnter(e), Sr(e, !0), r.enter(e)) : r.leave(e, () => {
      Sr(e, !1);
    }) : Sr(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Sr(e, t);
  }
};
process.env.NODE_ENV !== "production" && (kn.name = "show");
function Sr(e, t) {
  e.style.display = t ? e[Ei] : "none", e[Pl] = !t;
}
const Ff = Symbol(process.env.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), Lf = /(^|;)\s*display\s*:/;
function kf(e, t, n) {
  const r = e.style, i = Ot(n);
  let o = !1;
  if (n && !i) {
    if (t)
      if (Ot(t))
        for (const c of t.split(";")) {
          const u = c.slice(0, c.indexOf(":")).trim();
          n[u] == null && pi(r, u, "");
        }
      else
        for (const c in t)
          n[c] == null && pi(r, c, "");
    for (const c in n)
      c === "display" && (o = !0), pi(r, c, n[c]);
  } else if (i) {
    if (t !== n) {
      const c = r[Ff];
      c && (n += ";" + c), r.cssText = n, o = Lf.test(n);
    }
  } else
    t && e.removeAttribute("style");
  Ei in e && (e[Ei] = o ? r.display : "", e[Pl] && (r.display = "none"));
}
const jf = /[^\\];\s*$/, bs = /\s*!important$/;
function pi(e, t, n) {
  if (Ee(n))
    n.forEach((r) => pi(e, t, r));
  else if (n == null && (n = ""), process.env.NODE_ENV !== "production" && jf.test(n) && Kn(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = Hf(e, t);
    bs.test(n) ? e.setProperty(
      qn(r),
      n.replace(bs, ""),
      "important"
    ) : e[r] = n;
  }
}
const Ns = ["Webkit", "Moz", "ms"], Gi = {};
function Hf(e, t) {
  const n = Gi[t];
  if (n)
    return n;
  let r = Or(t);
  if (r !== "filter" && r in e)
    return Gi[t] = r;
  r = Oi(r);
  for (let i = 0; i < Ns.length; i++) {
    const o = Ns[i] + r;
    if (o in e)
      return Gi[t] = o;
  }
  return t;
}
const Os = "http://www.w3.org/1999/xlink";
function Bf(e, t, n, r, i) {
  if (r && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(Os, t.slice(6, t.length)) : e.setAttributeNS(Os, t, n);
  else {
    const o = vc(t);
    n == null || o && !Is(n) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : n);
  }
}
function Gf(e, t, n, r, i, o, c) {
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
    d === "boolean" ? n = Is(n) : n == null && d === "string" ? (n = "", f = !0) : d === "number" && (n = 0, f = !0);
  }
  try {
    e[t] = n;
  } catch (d) {
    process.env.NODE_ENV !== "production" && !f && Kn(
      `Failed setting prop "${t}" on <${u.toLowerCase()}>: value ${n} is invalid.`,
      d
    );
  }
  f && e.removeAttribute(t);
}
function vr(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function Wf(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const xs = Symbol("_vei");
function zf(e, t, n, r, i = null) {
  const o = e[xs] || (e[xs] = {}), c = o[t];
  if (r && c)
    c.value = process.env.NODE_ENV !== "production" ? Ds(r, t) : r;
  else {
    const [u, f] = Kf(t);
    if (r) {
      const d = o[t] = Jf(
        process.env.NODE_ENV !== "production" ? Ds(r, t) : r,
        i
      );
      vr(e, u, d, f);
    } else
      c && (Wf(e, u, c, f), o[t] = void 0);
  }
}
const As = /(?:Once|Passive|Capture)$/;
function Kf(e) {
  let t;
  if (As.test(e)) {
    t = {};
    let r;
    for (; r = e.match(As); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : qn(e.slice(2)), t];
}
let Wi = 0;
const qf = /* @__PURE__ */ Promise.resolve(), Yf = () => Wi || (qf.then(() => Wi = 0), Wi = Date.now());
function Jf(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    hn(
      Zf(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = Yf(), n;
}
function Ds(e, t) {
  return Oe(e) || Ee(e) ? e : (Kn(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), _t);
}
function Zf(e, t) {
  if (Ee(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (r) => (i) => !i._stopped && r && r(i)
    );
  } else
    return t;
}
const Ss = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Xf = (e, t, n, r, i, o, c, u, f) => {
  const d = i === "svg";
  t === "class" ? $f(e, r, d) : t === "style" ? kf(e, n, r) : jr(t) ? gi(t) || zf(e, t, n, r, c) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Qf(e, t, r, d)) ? Gf(
    e,
    t,
    r,
    o,
    c,
    u,
    f
  ) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Bf(e, t, r, d));
};
function Qf(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Ss(t) && Oe(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Ss(t) && Ot(n) ? !1 : t in e;
}
const Vs = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Ee(t) ? (n) => pr(t, n) : t;
};
function eu(e) {
  e.target.composing = !0;
}
function Rs(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const zi = Symbol("_assign"), er = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
    e[zi] = Vs(i);
    const o = r || i.props && i.props.type === "number";
    vr(e, t ? "change" : "input", (c) => {
      if (c.target.composing)
        return;
      let u = e.value;
      n && (u = u.trim()), o && (u = Qi(u)), e[zi](u);
    }), n && vr(e, "change", () => {
      e.value = e.value.trim();
    }), t || (vr(e, "compositionstart", eu), vr(e, "compositionend", Rs), vr(e, "change", Rs));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, modifiers: { lazy: n, trim: r, number: i } }, o) {
    if (e[zi] = Vs(o), e.composing)
      return;
    const c = (i || e.type === "number") && !/^0\d/.test(e.value) ? Qi(e.value) : e.value, u = t ?? "";
    c !== u && (document.activeElement === e && e.type !== "range" && (n || r && e.value.trim() === u) || (e.value = u));
  }
}, tu = ["ctrl", "shift", "alt", "meta"], nu = {
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
  exact: (e, t) => tu.some((n) => e[`${n}Key`] && !t.includes(n))
}, ru = (e, t) => {
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = (i, ...o) => {
    for (let c = 0; c < t.length; c++) {
      const u = nu[t[c]];
      if (u && u(i, t))
        return;
    }
    return e(i, ...o);
  });
}, iu = /* @__PURE__ */ dt({ patchProp: Xf }, Uf);
let Ts;
function ou() {
  return Ts || (Ts = af(iu));
}
const su = (...e) => {
  const t = ou().createApp(...e);
  process.env.NODE_ENV !== "production" && (cu(t), au(t));
  const { mount: n } = t;
  return t.mount = (r) => {
    const i = fu(r);
    if (!i)
      return;
    const o = t._component;
    !Oe(o) && !o.render && !o.template && (o.template = i.innerHTML), i.innerHTML = "";
    const c = n(i, !1, lu(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), c;
  }, t;
};
function lu(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function cu(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => hc(t) || dc(t) || pc(t),
    writable: !1
  });
}
function au(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        Kn(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, r = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return Kn(r), n;
      },
      set() {
        Kn(r);
      }
    });
  }
}
function fu(e) {
  if (Ot(e)) {
    const t = document.querySelector(e);
    return process.env.NODE_ENV !== "production" && !t && Kn(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return process.env.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && Kn(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
/**
* vue v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function uu() {
  Mf();
}
process.env.NODE_ENV !== "production" && uu();
function hu(e) {
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
var $l = {};
(function(e) {
  var t = Object.defineProperty, n = (w) => t(w, "__esModule", { value: !0 }), r = (w, b) => {
    for (var y in b)
      t(w, y, { get: b[y], enumerable: !0 });
  };
  n(e), r(e, {
    decode: () => ze,
    encode: () => $e
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
  function o(w) {
    let b = 0, y = -1;
    const O = w.length - 4 | 0;
    for (; O > b; )
      y = i[(y ^ w[b++]) & 255] ^ y >>> 8, y = i[(y ^ w[b++]) & 255] ^ y >>> 8, y = i[(y ^ w[b++]) & 255] ^ y >>> 8, y = i[(y ^ w[b++]) & 255] ^ y >>> 8;
    for (; b < w.length; )
      y = i[(y ^ w[b++]) & 255] ^ y >>> 8;
    return (y ^ 4294967295) >>> 0;
  }
  function c(w, b = !1) {
    if (w instanceof ArrayBuffer)
      return new Uint8Array(w);
    if (b && w instanceof SharedArrayBuffer)
      return new Uint8Array(w);
    if (ArrayBuffer.isView(w))
      return new Uint8Array(w.buffer, w.byteOffset, w.byteLength);
    throw new TypeError("The provided value is not of type '(ArrayBuffer or ArrayBufferView)'");
  }
  function u(w, b = !1) {
    let y = 0, O = 0;
    w.forEach((T) => y += T.byteLength == null ? T.length : T.byteLength);
    const P = new Uint8Array(b ? new SharedArrayBuffer(y) : y);
    return w.forEach((T) => {
      const pe = Array.isArray(T) ? T : c(T, !0);
      P.set(pe, O), O += pe.length;
    }), P;
  }
  var f = Uint8Array, d = Uint16Array, E = Uint32Array, _ = f.of(16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15), D = f.of(0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0), $ = f.of(0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0), ee = function(w, b) {
    for (var y = new d(31), O = 0; O < 31; ++O)
      y[O] = b += 1 << w[O - 1];
    for (var P = new E(y[30]), O = 1; O < 30; ++O)
      for (var T = y[O]; T < y[O + 1]; ++T)
        P[T] = T - y[O] << 5 | O;
    return [y, P];
  }, ce = ee(D, 2), Ge = ce[0], xe = ce[1];
  Ge[28] = 258, xe[258] = 28;
  for (var Ae = ee($, 0), Pe = Ae[0], je = Ae[1], Be = new d(32768), Se = 0; Se < 32768; ++Se)
    ae = (Se & 43690) >>> 1 | (Se & 21845) << 1, ae = (ae & 52428) >>> 2 | (ae & 13107) << 2, ae = (ae & 61680) >>> 4 | (ae & 3855) << 4, Be[Se] = ((ae & 65280) >>> 8 | (ae & 255) << 8) >>> 1;
  for (var ae, be = function(w, b, y) {
    for (var O = w.length, P = 0, T = new d(b); P < O; ++P)
      ++T[w[P] - 1];
    var pe = new d(b);
    for (P = 0; P < b; ++P)
      pe[P] = pe[P - 1] + T[P - 1] << 1;
    var me;
    if (y) {
      me = new d(1 << b);
      var Z = 15 - b;
      for (P = 0; P < O; ++P)
        if (w[P])
          for (var X = P << 4 | w[P], G = b - w[P], _e = pe[w[P] - 1]++ << G, oe = _e | (1 << G) - 1; _e <= oe; ++_e)
            me[Be[_e] >>> Z] = X;
    } else
      for (me = new d(O), P = 0; P < O; ++P)
        w[P] && (me[P] = Be[pe[w[P] - 1]++] >>> 15 - w[P]);
    return me;
  }, Le = new f(288), Se = 0; Se < 144; ++Se)
    Le[Se] = 8;
  for (var Se = 144; Se < 256; ++Se)
    Le[Se] = 9;
  for (var Se = 256; Se < 280; ++Se)
    Le[Se] = 7;
  for (var Se = 280; Se < 288; ++Se)
    Le[Se] = 8;
  for (var We = new f(32), Se = 0; Se < 32; ++Se)
    We[Se] = 5;
  var tt = be(Le, 9, 0), At = be(Le, 9, 1), In = be(We, 5, 0), fr = be(We, 5, 1), zt = function(w) {
    for (var b = w[0], y = 1; y < w.length; ++y)
      w[y] > b && (b = w[y]);
    return b;
  }, qe = function(w, b, y) {
    var O = b >> 3 | 0;
    return (w[O] | w[O + 1] << 8) >> (b & 7) & y;
  }, Me = function(w, b) {
    var y = b >> 3 | 0;
    return (w[y] | w[y + 1] << 8 | w[y + 2] << 16) >> (b & 7);
  }, Re = function(w) {
    return (w >> 3 | 0) + (w & 7 && 1);
  }, Pt = function(w, b, y) {
    (y == null || y > w.length) && (y = w.length);
    var O = new (w instanceof d ? d : w instanceof E ? E : f)(y - b);
    return O.set(w.subarray(b, y)), O;
  }, on = function(w, b, y) {
    var O = w.length;
    if (!O || y && !y.l && O < 5)
      return b || new f(0);
    var P = !b || y, T = !y || y.i;
    y || (y = {}), b || (b = new f(O * 3));
    var pe = function(dr) {
      var Zn = b.length;
      if (dr > Zn) {
        var Pn = new f(Math.max(Zn * 2, dr));
        Pn.set(b), b = Pn;
      }
    }, me = y.f || 0, Z = y.p || 0, X = y.b || 0, G = y.l, _e = y.d, oe = y.m, Te = y.n, ue = O * 8;
    do {
      if (!G) {
        y.f = me = qe(w, Z, 1);
        var ke = qe(w, Z + 1, 3);
        if (Z += 3, ke)
          if (ke === 1)
            G = At, _e = fr, oe = 9, Te = 5;
          else if (ke === 2) {
            var Fe = qe(w, Z, 31) + 257, ye = qe(w, Z + 10, 15) + 4, ot = Fe + qe(w, Z + 5, 31) + 1;
            Z += 14;
            for (var at = new f(ot), ft = new f(19), Ne = 0; Ne < ye; ++Ne)
              ft[_[Ne]] = qe(w, Z + Ne * 3, 7);
            Z += ye * 3;
            for (var mt = zt(ft), yt = (1 << mt) - 1, pn = be(ft, mt, 1), Ne = 0; Ne < ot; ) {
              var Et = pn[qe(w, Z, yt)];
              Z += Et & 15;
              var nt = Et >>> 4;
              if (nt < 16)
                at[Ne++] = nt;
              else {
                var Ft = 0, ut = 0;
                for (nt === 16 ? (ut = 3 + qe(w, Z, 3), Z += 2, Ft = at[Ne - 1]) : nt === 17 ? (ut = 3 + qe(w, Z, 7), Z += 3) : nt === 18 && (ut = 11 + qe(w, Z, 127), Z += 7); ut--; )
                  at[Ne++] = Ft;
              }
            }
            var Dt = at.subarray(0, Fe), ht = at.subarray(Fe);
            oe = zt(Dt), Te = zt(ht), G = be(Dt, oe, 1), _e = be(ht, Te, 1);
          } else
            throw "invalid block type";
        else {
          var nt = Re(Z) + 4, pt = w[nt - 4] | w[nt - 3] << 8, le = nt + pt;
          if (le > O) {
            if (T)
              throw "unexpected EOF";
            break;
          }
          P && pe(X + pt), b.set(w.subarray(nt, le), X), y.b = X += pt, y.p = Z = le * 8;
          continue;
        }
        if (Z > ue) {
          if (T)
            throw "unexpected EOF";
          break;
        }
      }
      P && pe(X + 131072);
      for (var gt = (1 << oe) - 1, Bt = (1 << Te) - 1, Jt = Z; ; Jt = Z) {
        var Ft = G[Me(w, Z) & gt], nn = Ft >>> 4;
        if (Z += Ft & 15, Z > ue) {
          if (T)
            throw "unexpected EOF";
          break;
        }
        if (!Ft)
          throw "invalid length/literal";
        if (nn < 256)
          b[X++] = nn;
        else if (nn === 256) {
          Jt = Z, G = null;
          break;
        } else {
          var Gt = nn - 254;
          if (nn > 264) {
            var Ne = nn - 257, Qt = D[Ne];
            Gt = qe(w, Z, (1 << Qt) - 1) + Ge[Ne], Z += Qt;
          }
          var rn = _e[Me(w, Z) & Bt], Lt = rn >>> 4;
          if (!rn)
            throw "invalid distance";
          Z += rn & 15;
          var ht = Pe[Lt];
          if (Lt > 3) {
            var Qt = $[Lt];
            ht += Me(w, Z) & (1 << Qt) - 1, Z += Qt;
          }
          if (Z > ue) {
            if (T)
              throw "unexpected EOF";
            break;
          }
          P && pe(X + 131072);
          for (var St = X + Gt; X < St; X += 4)
            b[X] = b[X - ht], b[X + 1] = b[X + 1 - ht], b[X + 2] = b[X + 2 - ht], b[X + 3] = b[X + 3 - ht];
          X = St;
        }
      }
      y.l = G, y.p = Jt, y.b = X, G && (me = 1, y.m = oe, y.d = _e, y.n = Te);
    } while (!me);
    return X === b.length ? b : Pt(b, 0, X);
  }, Ct = function(w, b, y) {
    y <<= b & 7;
    var O = b >> 3 | 0;
    w[O] |= y, w[O + 1] |= y >>> 8;
  }, Kt = function(w, b, y) {
    y <<= b & 7;
    var O = b >> 3 | 0;
    w[O] |= y, w[O + 1] |= y >>> 8, w[O + 2] |= y >>> 16;
  }, qt = function(w, b) {
    for (var y = [], O = 0; O < w.length; ++O)
      w[O] && y.push({ s: O, f: w[O] });
    var P = y.length, T = y.slice();
    if (!P)
      return [ur, 0];
    if (P === 1) {
      var pe = new f(y[0].s + 1);
      return pe[y[0].s] = 1, [pe, 1];
    }
    y.sort(function(ot, at) {
      return ot.f - at.f;
    }), y.push({ s: -1, f: 25001 });
    var me = y[0], Z = y[1], X = 0, G = 1, _e = 2;
    for (y[0] = { s: -1, f: me.f + Z.f, l: me, r: Z }; G !== P - 1; )
      me = y[y[X].f < y[_e].f ? X++ : _e++], Z = y[X !== G && y[X].f < y[_e].f ? X++ : _e++], y[G++] = { s: -1, f: me.f + Z.f, l: me, r: Z };
    for (var oe = T[0].s, O = 1; O < P; ++O)
      T[O].s > oe && (oe = T[O].s);
    var Te = new d(oe + 1), ue = yn(y[G - 1], Te, 0);
    if (ue > b) {
      var O = 0, ke = 0, nt = ue - b, pt = 1 << nt;
      for (T.sort(function(at, ft) {
        return Te[ft.s] - Te[at.s] || at.f - ft.f;
      }); O < P; ++O) {
        var le = T[O].s;
        if (Te[le] > b)
          ke += pt - (1 << ue - Te[le]), Te[le] = b;
        else
          break;
      }
      for (ke >>>= nt; ke > 0; ) {
        var Fe = T[O].s;
        Te[Fe] < b ? ke -= 1 << b - Te[Fe]++ - 1 : ++O;
      }
      for (; O >= 0 && ke; --O) {
        var ye = T[O].s;
        Te[ye] === b && (--Te[ye], ++ke);
      }
      ue = b;
    }
    return [new f(Te), ue];
  }, yn = function(w, b, y) {
    return w.s === -1 ? Math.max(yn(w.l, b, y + 1), yn(w.r, b, y + 1)) : b[w.s] = y;
  }, En = function(w) {
    for (var b = w.length; b && !w[--b]; )
      ;
    for (var y = new d(++b), O = 0, P = w[0], T = 1, pe = function(Z) {
      y[O++] = Z;
    }, me = 1; me <= b; ++me)
      if (w[me] === P && me !== b)
        ++T;
      else {
        if (!P && T > 2) {
          for (; T > 138; T -= 138)
            pe(32754);
          T > 2 && (pe(T > 10 ? T - 11 << 5 | 28690 : T - 3 << 5 | 12305), T = 0);
        } else if (T > 3) {
          for (pe(P), --T; T > 6; T -= 6)
            pe(8304);
          T > 2 && (pe(T - 3 << 5 | 8208), T = 0);
        }
        for (; T--; )
          pe(P);
        T = 1, P = w[me];
      }
    return [y.subarray(0, O), b];
  }, wt = function(w, b) {
    for (var y = 0, O = 0; O < b.length; ++O)
      y += w[O] * b[O];
    return y;
  }, $t = function(w, b, y) {
    var O = y.length, P = Re(b + 2);
    w[P] = O & 255, w[P + 1] = O >>> 8, w[P + 2] = w[P] ^ 255, w[P + 3] = w[P + 1] ^ 255;
    for (var T = 0; T < O; ++T)
      w[P + T + 4] = y[T];
    return (P + 4 + O) * 8;
  }, Ye = function(w, b, y, O, P, T, pe, me, Z, X, G) {
    Ct(b, G++, y), ++P[256];
    for (var _e = qt(P, 15), oe = _e[0], Te = _e[1], ue = qt(T, 15), ke = ue[0], nt = ue[1], pt = En(oe), le = pt[0], Fe = pt[1], ye = En(ke), ot = ye[0], at = ye[1], ft = new d(19), Ne = 0; Ne < le.length; ++Ne)
      ft[le[Ne] & 31]++;
    for (var Ne = 0; Ne < ot.length; ++Ne)
      ft[ot[Ne] & 31]++;
    for (var mt = qt(ft, 7), yt = mt[0], pn = mt[1], Et = 19; Et > 4 && !yt[_[Et - 1]]; --Et)
      ;
    var Ft = X + 5 << 3, ut = wt(P, Le) + wt(T, We) + pe, Dt = wt(P, oe) + wt(T, ke) + pe + 14 + 3 * Et + wt(ft, yt) + (2 * ft[16] + 3 * ft[17] + 7 * ft[18]);
    if (Ft <= ut && Ft <= Dt)
      return $t(b, G, w.subarray(Z, Z + X));
    var ht, gt, Bt, Jt;
    if (Ct(b, G, 1 + (Dt < ut)), G += 2, Dt < ut) {
      ht = be(oe, Te, 0), gt = oe, Bt = be(ke, nt, 0), Jt = ke;
      var nn = be(yt, pn, 0);
      Ct(b, G, Fe - 257), Ct(b, G + 5, at - 1), Ct(b, G + 10, Et - 4), G += 14;
      for (var Ne = 0; Ne < Et; ++Ne)
        Ct(b, G + 3 * Ne, yt[_[Ne]]);
      G += 3 * Et;
      for (var Gt = [le, ot], Qt = 0; Qt < 2; ++Qt)
        for (var rn = Gt[Qt], Ne = 0; Ne < rn.length; ++Ne) {
          var Lt = rn[Ne] & 31;
          Ct(b, G, nn[Lt]), G += yt[Lt], Lt > 15 && (Ct(b, G, rn[Ne] >>> 5 & 127), G += rn[Ne] >>> 12);
        }
    } else
      ht = tt, gt = Le, Bt = In, Jt = We;
    for (var Ne = 0; Ne < me; ++Ne)
      if (O[Ne] > 255) {
        var Lt = O[Ne] >>> 18 & 31;
        Kt(b, G, ht[Lt + 257]), G += gt[Lt + 257], Lt > 7 && (Ct(b, G, O[Ne] >>> 23 & 31), G += D[Lt]);
        var St = O[Ne] & 31;
        Kt(b, G, Bt[St]), G += Jt[St], St > 3 && (Kt(b, G, O[Ne] >>> 5 & 8191), G += $[St]);
      } else
        Kt(b, G, ht[O[Ne]]), G += gt[O[Ne]];
    return Kt(b, G, ht[256]), G + gt[256];
  }, rt = E.of(65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632), ur = new f(0), bn = function(w, b, y, O, P, T) {
    var pe = w.length, me = new f(O + pe + 5 * (1 + Math.ceil(pe / 7e3)) + P), Z = me.subarray(O, me.length - P), X = 0;
    if (!b || pe < 8)
      for (var G = 0; G <= pe; G += 65535) {
        var _e = G + 65535;
        _e < pe ? X = $t(Z, X, w.subarray(G, _e)) : (Z[G] = T, X = $t(Z, X, w.subarray(G, pe)));
      }
    else {
      for (var oe = rt[b - 1], Te = oe >>> 13, ue = oe & 8191, ke = (1 << y) - 1, nt = new d(32768), pt = new d(ke + 1), le = Math.ceil(y / 3), Fe = 2 * le, ye = function($n) {
        return (w[$n] ^ w[$n + 1] << le ^ w[$n + 2] << Fe) & ke;
      }, ot = new E(25e3), at = new d(288), ft = new d(32), Ne = 0, mt = 0, G = 0, yt = 0, pn = 0, Et = 0; G < pe; ++G) {
        var Ft = ye(G), ut = G & 32767, Dt = pt[Ft];
        if (nt[ut] = Dt, pt[Ft] = ut, pn <= G) {
          var ht = pe - G;
          if ((Ne > 7e3 || yt > 24576) && ht > 423) {
            X = Ye(w, Z, 0, ot, at, ft, mt, yt, Et, G - Et, X), yt = Ne = mt = 0, Et = G;
            for (var gt = 0; gt < 286; ++gt)
              at[gt] = 0;
            for (var gt = 0; gt < 30; ++gt)
              ft[gt] = 0;
          }
          var Bt = 2, Jt = 0, nn = ue, Gt = ut - Dt & 32767;
          if (ht > 2 && Ft === ye(G - Gt))
            for (var Qt = Math.min(Te, ht) - 1, rn = Math.min(32767, G), Lt = Math.min(258, ht); Gt <= rn && --nn && ut !== Dt; ) {
              if (w[G + Bt] === w[G + Bt - Gt]) {
                for (var St = 0; St < Lt && w[G + St] === w[G + St - Gt]; ++St)
                  ;
                if (St > Bt) {
                  if (Bt = St, Jt = Gt, St > Qt)
                    break;
                  for (var dr = Math.min(Gt, St - 2), Zn = 0, gt = 0; gt < dr; ++gt) {
                    var Pn = G - Gt + gt + 32768 & 32767, Ii = nt[Pn], Kr = Pn - Ii + 32768 & 32767;
                    Kr > Zn && (Zn = Kr, Dt = Pn);
                  }
                }
              }
              ut = Dt, Dt = nt[ut], Gt += ut - Dt + 32768 & 32767;
            }
          if (Jt) {
            ot[yt++] = 268435456 | xe[Bt] << 18 | je[Jt];
            var qr = xe[Bt] & 31, Yr = je[Jt] & 31;
            mt += D[qr] + $[Yr], ++at[257 + qr], ++ft[Yr], pn = G + Bt, ++Ne;
          } else
            ot[yt++] = w[G], ++at[w[G]];
        }
      }
      X = Ye(w, Z, T, ot, at, ft, mt, yt, Et, G - Et, X);
    }
    return Pt(me, 0, O + Re(X) + P);
  }, hr = function() {
    var w = 1, b = 0;
    return {
      p: function(y) {
        for (var O = w, P = b, T = y.length | 0, pe = 0; pe !== T; ) {
          for (var me = Math.min(pe + 2655, T); pe < me; ++pe)
            P += O += y[pe];
          O = (O & 65535) + 15 * (O >> 16), P = (P & 65535) + 15 * (P >> 16);
        }
        w = O, b = P;
      },
      d: function() {
        return w %= 65521, b %= 65521, (w & 255) << 24 | w >>> 8 << 16 | (b & 255) << 8 | b >>> 8;
      }
    };
  }, dn = function(w, b, y, O, P) {
    return bn(w, b.level == null ? 6 : b.level, b.mem == null ? Math.ceil(Math.max(8, Math.min(13, Math.log(w.length))) * 1.5) : 12 + b.mem, y, O, !P);
  }, p = function(w, b, y) {
    for (; y; ++b)
      w[b] = y, y >>>= 8;
  }, m = function(w, b) {
    var y = b.level, O = y === 0 ? 0 : y < 6 ? 1 : y === 9 ? 3 : 2;
    w[0] = 120, w[1] = O << 6 | (O ? 32 - 2 * O : 1);
  }, V = function(w) {
    if ((w[0] & 15) !== 8 || w[0] >>> 4 > 7 || (w[0] << 8 | w[1]) % 31)
      throw "invalid zlib data";
    if (w[1] & 32)
      throw "invalid zlib data: preset dictionaries not supported";
  };
  function M(w, b) {
    b || (b = {});
    var y = hr();
    y.p(w);
    var O = dn(w, b, 2, 4);
    return m(O, b), p(O, O.length - 4, y.d()), O;
  }
  function C(w, b) {
    return on((V(w), w.subarray(2, -4)), b);
  }
  function j(w, b) {
    return M(w, { level: b });
  }
  function z(w, b) {
    try {
      return C(w, new Uint8Array(b));
    } catch (y) {
      throw y.message ? y : new Error(y);
    }
  }
  var H = new Uint8Array([73, 72, 68, 82]), W = new Uint8Array([73, 68, 65, 84]), I = new Uint8Array([73, 69, 78, 68]), J = o(new Uint8Array([73, 69, 78, 68])), fe = new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]), re = {
    GREYSCALE: 0,
    TRUECOLOR: 2,
    INDEXED_COLOR: 3,
    GREYSCALE_ALPHA: 4,
    TRUECOLOR_ALPHA: 6
  }, ge = {
    1: re.GREYSCALE,
    2: re.GREYSCALE_ALPHA,
    3: re.TRUECOLOR,
    4: re.TRUECOLOR_ALPHA
  }, De = new TextEncoder();
  function $e(w, { text: b, width: y, height: O, channels: P, depth: T = 8, level: pe = 0 }) {
    let me = 0, Z = 0;
    const X = y * P, G = new Uint8Array(O + w.length);
    for (; me < w.length; )
      G[Z++] = 0, G.set(w.subarray(me, me += X), Z), Z += X;
    if (b) {
      let ue = [];
      for (const ke in b) {
        if (!b[ke])
          continue;
        const nt = De.encode(ke), pt = De.encode(b[ke]), le = new Uint8Array(13 + nt.length + pt.length), Fe = new DataView(le.buffer);
        le[4] = 116, le[5] = 69, le[6] = 88, le[7] = 116, le.set(nt, 8), ue.push(le), le.set(pt, 9 + nt.length), Fe.setUint32(0, le.length - 12), Fe.setUint32(le.length - 4, o(le.subarray(4, le.length - 4)));
      }
      b = u(ue);
    }
    me = b ? b.length : 0;
    const _e = j(G, pe), oe = new Uint8Array(49 + me + fe.length + _e.length);
    oe[26] = 0, oe[27] = 0, oe[28] = 0, oe[24] = T, oe.set(fe, 0), oe.set(H, 12), oe.set(W, 37), oe.set(_e, 41), oe[25] = ge[P], b && oe.set(b, 45 + _e.length), oe.set(I, 49 + me + _e.length);
    const Te = new DataView(oe.buffer);
    return Te.setUint32(8, 13), Te.setUint32(16, y), Te.setUint32(20, O), Te.setUint32(33, _e.length), Te.setUint32(45 + me + _e.length, 0), Te.setUint32(53 + me + _e.length, J), Te.setUint32(29, o(new Uint8Array(oe.buffer, 12, 17))), Te.setUint32(41 + _e.length, o(new Uint8Array(oe.buffer, 37, 4 + _e.length))), oe;
  }
  function ze(w) {
    let b = new DataView(w.buffer, w.byteOffset, w.byteLength);
    const y = b.getUint32(16), O = b.getUint32(20), P = w[24], T = w[25];
    let pe = { 3: 1, 0: 1, 4: 2, 2: 3, 6: 4 }[T];
    const me = pe * P / 8, Z = y * me;
    let X = new Uint8Array(O * Z), G = 0, _e = 0, oe = 33;
    const Te = [];
    let ue, ke;
    const nt = w.length - 5;
    let pt;
    for (; (pt = b.getUint32(4 + oe)) !== 1229278788; ) {
      if (pt === 1229209940)
        Te.push(w.subarray(8 + oe, 8 + oe + b.getUint32(oe)));
      else if (pt === 1347179589) {
        if (ue)
          throw new Error("PLTE can only occur once in an image");
        ue = new Uint32Array(b.getUint32(oe));
        for (let le = 0; le < ue.length * 8; le += 3)
          ue[le / 3] = w[8 + oe + le] << 24 | w[8 + oe + le + 1] << 16 | w[8 + oe + le + 2] << 8 | 255;
      } else if (pt === 1951551059) {
        if (ke)
          throw new Error("tRNS can only occur once in an image");
        ke = new Uint8Array(b.getUint32(oe));
        for (let le = 0; le < ke.length; le++)
          ke[le] = w[8 + oe + le];
      }
      if (oe += 12 + b.getUint32(oe), oe > nt)
        break;
    }
    for (w = z(Te.length === 1 ? Te[0] : u(Te), O + O * Z); G < w.byteLength; ) {
      const le = w[G++], Fe = w.subarray(G, G += Z);
      le === 0 ? X.set(Fe, _e) : le === 1 ? Ue(Fe, X, _e, me, Z) : le === 2 ? Ke(Fe, X, _e, me, Z) : le === 3 ? Yt(Fe, X, _e, me, Z) : le === 4 && Un(Fe, X, _e, me, Z), _e += Z;
    }
    if (T === 3) {
      if (!ue)
        throw new Error("Indexed color PNG has no PLTE");
      if (ke)
        for (let ye = 0; ye < ke.length; ye++)
          ue[ye] &= 4294967040 | ke[ye];
      pe = 4;
      const le = new Uint8Array(y * O * 4), Fe = new DataView(le.buffer, le.byteOffset, le.byteLength);
      for (let ye = 0; ye < X.length; ye++)
        Fe.setUint32(ye * 4, ue[X[ye]], !1);
      X = le;
    }
    if (P !== 8) {
      const le = new Uint8Array(X.length / P * 8);
      for (let Fe = 0; Fe < X.length; Fe += 2)
        le[Fe / 2] = X[Fe];
      X = le;
    }
    if (pe !== 4) {
      const le = new Uint8Array(y * O * 4), Fe = new DataView(le.buffer);
      if (pe === 1)
        for (let ye = 0; ye < y * O; ye++) {
          const ot = X[ye];
          Fe.setUint32(ye * 4, ot << 24 | ot << 16 | ot << 8 | 255, !1);
        }
      else if (pe === 2)
        for (let ye = 0; ye < y * O * 2; ye += 2) {
          const ot = X[ye];
          Fe.setUint32(ye * 2, ot << 24 | ot << 16 | ot << 8 | X[ye + 1], !1);
        }
      else if (pe === 3) {
        le.fill(255);
        for (let ye = 0; ye < y * O; ye++)
          le.set(X.subarray(ye * 3, ye * 3 + 3), ye * 4);
      }
      X = le;
    }
    return { width: y, height: O, pixels: X };
  }
  function Ue(w, b, y, O, P) {
    let T = 0;
    for (; T < O; )
      b[T + y] = w[T++];
    for (; T < P; )
      b[T + y] = w[T] + b[T++ + y - O];
  }
  function Ke(w, b, y, O, P) {
    if (y === 0)
      b.set(w, y);
    else {
      let T = 0;
      for (; T < P; )
        b[T + y] = w[T] + b[T++ + y - P];
    }
  }
  function Yt(w, b, y, O, P) {
    let T = 0;
    if (y === 0) {
      for (; T < O; )
        b[T] = w[T++];
      for (; T < P; )
        b[T] = w[T] + (b[T++ - O] >> 1);
    } else {
      for (; T < O; )
        b[T + y] = w[T] + (b[T++ + y - P] >> 1);
      for (; T < P; )
        b[T + y] = w[T] + (b[T + y - O] + b[T++ + y - P] >> 1);
    }
  }
  function Un(w, b, y, O, P) {
    let T = 0;
    if (y === 0) {
      for (; T < O; )
        b[T] = w[T++];
      for (; T < P; )
        b[T] = w[T] + b[T++ - O];
    } else {
      for (; T < O; )
        b[T + y] = w[T] + b[T++ + y - P];
      for (; T < P; ) {
        const pe = b[T + y - O], me = b[T + y - P], Z = b[T + y - O - P], X = pe + me - Z, G = Math.abs(X - pe), _e = Math.abs(X - me), oe = Math.abs(X - Z);
        b[T + y] = w[T++] + (G <= _e && G <= oe ? pe : _e <= oe ? me : Z);
      }
    }
  }
})($l);
function Fl(e, t = !1) {
  if (e instanceof ArrayBuffer)
    return new Uint8Array(e);
  if (t && e instanceof SharedArrayBuffer)
    return new Uint8Array(e);
  if (ArrayBuffer.isView(e))
    return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
  throw new TypeError("The provided value is not of type '(ArrayBuffer or ArrayBufferView)'");
}
function du(e, t = !1) {
  let n = 0, r = 0;
  e.forEach((o) => n += o.byteLength == null ? o.length : o.byteLength);
  const i = new Uint8Array(t ? new SharedArrayBuffer(n) : n);
  return e.forEach((o) => {
    const c = Array.isArray(o) ? o : Fl(o, !0);
    i.set(c, r), r += c.length;
  }), i;
}
var pu = { view: Fl, from_parts: du };
const gu = "imagescript", vu = "1.3.0", _u = "zero-dependency javascript image manipulation", wu = "ImageScript.js", mu = "ImageScript.d.ts", yu = {
  test: "node ./tests/run.js",
  coverage: "nyc --reporter=html npm test"
}, Eu = {
  type: "git",
  url: "git+https://github.com/matmen/ImageScript.git"
}, bu = [
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
], Nu = "Mathis Mensing <mathis@matmen.dev>", Ou = "(AGPL-3.0-or-later OR MIT)", xu = {
  url: "https://github.com/matmen/ImageScript/issues"
}, Au = "https://github.com/matmen/ImageScript#readme", Du = {
  node: ">=14.0.0"
}, Su = {
  name: gu,
  version: vu,
  description: _u,
  main: wu,
  types: mu,
  scripts: yu,
  repository: Eu,
  keywords: bu,
  author: Nu,
  license: Ou,
  bugs: xu,
  homepage: Au,
  engines: Du
};
function Vu(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Ll = { exports: {} };
const Ru = {}, Tu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Ru }, Symbol.toStringTag, { value: "Module" })), tn = /* @__PURE__ */ hu(Tu), { arch: Mu, platform: Cu } = tn;
try {
  Ll.exports = Vu(`./bin/${Mu()}-${Cu()}.node`);
} catch (e) {
  throw new Error("unsupported arch/platform: " + e.message);
}
var Iu = Ll.exports, kl = {};
(function(e) {
  var t = Object.defineProperty, n = (l) => t(l, "__esModule", { value: !0 }), r = (l, s) => {
    n(l);
    for (var a in s)
      t(l, a, { get: s[a], enumerable: !0 });
  };
  r(e, {
    Color: () => Ae,
    default: () => qo
  });
  var i = {};
  r(i, {
    blend: () => Ge,
    default: () => Ae,
    from_rgba: () => D,
    parse: () => xe,
    to_rgba: () => _
  });
  var o = /^#?([\da-f]{3,4})$/, c = /^#?((?:[\da-f]{2}){3,4})$/, u = /^rgba?\((?<r>(?:\d*\.)?\d+)(?: +| *, *)(?<g>(?:\d*\.)?\d+)(?: +| *, *)(?<b>(?:\d*\.)?\d+)(?:(?: +| *, *)(?<a>\d+|\d*\.\d+|\d+(?:\.\d+)?%))?\)$/, f = /^rgba?\((?<r>(?:\d*\.)?\d+)%(?: +| *, *)(?<g>(?:\d*\.)?\d+)%(?: +| *, *)(?<b>(?:\d*\.)?\d+)%(?:(?: +| *, *)(?<a>\d+|\d*\.\d+|\d+(?:\.\d+)?%))?\)$/, d = /^hsla?\((?<h>(?:\d*\.)?\d+)(?<t>|deg|rad|grad|turn)(?: +| *, *)(?<s>(?:\d*\.)?\d+)%(?: +| *, *)(?<l>(?:\d*\.)?\d+)%(?:(?: +| *, *)(?<a>\d+|\d*\.\d+|\d+(?:\.\d+)?%))?\)$/;
  function E(l, s, a) {
    return Math.min(Math.max(Math.round(a), l), s);
  }
  function _(l) {
    return [l >> 24 & 255, l >> 16 & 255, l >> 8 & 255, l & 255];
  }
  function D(l, s, a, h) {
    return (l & 255) << 24 | (s & 255) << 16 | (a & 255) << 8 | h & 255;
  }
  function $(l) {
    return E(0, 255, l[l.length - 1] === "%" ? 255 / 100 * parseFloat(l) : +l * 255);
  }
  function ee(l, s) {
    if (s === "turn")
      return l / 1;
    if (s === "grad")
      return l / 400;
    if (!s || s === "deg")
      return l / 360;
    if (s === "rad")
      return l / (2 * Math.PI);
  }
  function ce(l, s, a) {
    return a < 0 ? a += 1 : a > 1 && (a -= 1), a < 1 / 2 ? s : a < 1 / 6 ? l + 6 * a * (s - l) : a < 2 / 3 ? l + 6 * (s - l) * (2 / 3 - a) : l;
  }
  function Ge(l, s) {
    const a = l & 255, h = a + 1 | 0, v = 256 - a | 0, g = h * (l >>> 24) + v * (s >>> 24) >> 8, N = h * (l >> 8 & 255) + v * (s >> 8 & 255) >> 8, S = h * (l >> 16 & 255) + v * (s >> 16 & 255) >> 8;
    return (g & 255) << 24 | (S & 255) << 16 | (N & 255) << 8 | Math.max(a, s & 255) & 255;
  }
  function xe(l) {
    let s = null;
    return (s = Pe.get(l)) !== void 0 ? s : (s = c.exec(l)) ? parseInt(`${s[1]}${s[1].length === 8 ? "" : "ff"}`, 16) : (s = d.exec(l)) ? Ae.hsla(ee(s[1], s[2]), s[3] / 100, s[4] / 100, s[5] ? 1 / 255 * $(s[5]) : 1) : (s = u.exec(l)) ? Ae.rgba(E(0, 255, +s[1]), E(0, 255, +s[2]), E(0, 255, +s[3]), s[4] ? $(s[4]) : 255) : (s = o.exec(l)) ? parseInt(`${s[1][0]}${s[1][0]}${s[1][1]}${s[1][1]}${s[1][2]}${s[1][2]}${s[1].length === 3 ? "ff" : `${s[1][3]}${s[1][3]}`}`, 16) : (s = f.exec(l)) ? Ae.rgba(E(0, 255, +s[1] * (255 / 100)), E(0, 255, +s[2] * (255 / 100)), E(0, 255, +s[3] * (255 / 100)), s[4] ? $(s[4]) : 255) : null;
  }
  var Ae = class {
    constructor(l) {
      if (this.value = xe(String(l).toLowerCase()), this.value === null)
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
      const v = a < 0.5 ? a + s * a : a + s - a * s, g = 2 * a - v, N = ce(g, v, l), S = ce(g, v, l + 1 / 3), A = ce(g, v, l - 1 / 3);
      return this.rgba(S * 255, N * 355, A * 255, h * 255);
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
      for (const l of Pe.keys())
        if (this.value === Pe.get(l))
          return l;
      return null;
    }
    toString(l) {
      const s = String(l).toLowerCase(), a = this.rgba;
      return s === "rgb" || s === "rgba" ? `rgb${s[3] ? "a" : ""}(${a[0]}, ${a[1]}, ${a[2]}${s[3] ? `, ${E(0, 100, 100 / 255 * a[3])}%` : ""})` : s === "16" || s === "hex" ? `#${a[0].toString(16).padStart(2, "0")}${a[1].toString(16).padStart(2, "0")}${a[2].toString(16).padStart(2, "0")}${a[3] === 255 ? "" : a[3].toString(16).padStart(2, "0")}` : this.value.toString();
    }
  }, Pe = /* @__PURE__ */ new Map([
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
  function je(l, s = !1) {
    if (l instanceof ArrayBuffer)
      return new Uint8Array(l);
    if (s && l instanceof SharedArrayBuffer)
      return new Uint8Array(l);
    if (ArrayBuffer.isView(l))
      return new Uint8Array(l.buffer, l.byteOffset, l.byteLength);
    throw new TypeError("The provided value is not of type '(ArrayBuffer or ArrayBufferView)'");
  }
  var Be = {};
  r(Be, {
    horizontal: () => Se,
    vertical: () => ae
  });
  function Se(l) {
    let s = 0;
    const a = l.u32, h = l.width | 0, v = l.height | 0;
    for (let g = 0; g < v; g++)
      a.subarray(s, s += h).reverse();
  }
  function ae(l) {
    const s = l.u32, a = l.width | 0, h = l.height | 0, v = l.height / 2 | 0;
    for (let g = 0; g < v; g++) {
      const N = g * a | 0, S = a * (h - 1 - g) | 0;
      for (let A = 0; A < a; A++) {
        const R = A + N, x = A + S, k = s[R], U = s[x];
        s[x] = k, s[R] = U;
      }
    }
  }
  var be = {};
  r(be, {
    color: () => Le,
    fn: () => We,
    swap: () => tt
  });
  function Le(l, s) {
    s.view.setUint32(0, l), s.u32.fill(s.u32[0]);
  }
  function We(l, s) {
    let a = 0;
    const h = s.view, v = s.width | 0, g = s.height | 0;
    for (let N = 1; N <= g; N++)
      for (let S = 1; S <= v; S++)
        h.setUint32(a, l(S, N), !1), a += 4;
  }
  function tt(l, s, a) {
    {
      const g = new Uint32Array(2), N = new DataView(g.buffer);
      l = (N.setUint32(0, l), g[0]), s = (N.setUint32(4, s), g[1]);
    }
    const h = a.u32, v = a.u32.length | 0;
    for (let g = 0; g < v; g++)
      l === h[g] && (h[g] = s);
  }
  var At = {};
  r(At, {
    box: () => fr,
    cubic: () => In,
    gaussian: () => zt
  });
  function In(l) {
    const s = l.width, a = l.height;
    l.resize("cubic", Math.max(1, 8e-3 * s), Math.max(1, 8e-3 * a)), l.resize("cubic", s, a);
  }
  function fr(l, s) {
    if (!l)
      return;
    const a = s.u8, h = s.width, v = s.height, g = s.u8.slice();
    qe(a, g, h, v, l);
  }
  function zt(l, s) {
    if (0 >= l)
      return;
    const a = Math.exp(0.726 ** 2) / l, h = Math.exp(-a), v = Math.exp(a * -2), g = s.u8.slice(), N = (1 - h) ** 2 / (1 - v + 2 * a * h), S = -v, A = 2 * h, R = -N * v, x = N * h * (a - 1), k = N * h * (a + 1), U = (N + x) / (1 - A - S), Q = s.width | 0, ne = (k + R) / (1 - A - S), ie = s.height | 0, Y = new Float32Array(4 * Math.max(Q, ie));
    Pt(g, s.u8, Y, Q, ie, N, x, k, R, A, S, U, ne), Pt(s.u8, g, Y, ie, Q, N, x, k, R, A, S, U, ne);
  }
  function qe(l, s, a, h, v) {
    const g = 1 / (1 + v + v);
    Re(l, s, a, h, v, g), Me(l, s, a, h, v, g);
  }
  function Me(l, s, a, h, v, g) {
    for (var N = 0; N < h; N++) {
      let S = N * a, A = S, R = v + S;
      const x = 4 * S, k = 4 * (a - 1 + S), U = s[x], Q = s[1 + x], ne = s[2 + x], ie = s[3 + x], Y = s[k], te = s[1 + k], F = s[2 + k], de = s[3 + k];
      let q = U * (1 + v), se = Q * (1 + v), we = ne * (1 + v), ve = ie * (1 + v);
      for (let B = 0; B < v; B++) {
        const L = 4 * (B + S);
        q += s[L], se += s[1 + L], we += s[2 + L], ve += s[3 + L];
      }
      for (let B = 0; B <= v; B++) {
        let L = 4 * R++;
        q += s[L] - U, se += s[1 + L] - Q, we += s[2 + L] - ne, ve += s[3 + L] - ie, L = 4 * S++, l[L] = Math.round(q * g), l[1 + L] = Math.round(se * g), l[2 + L] = Math.round(we * g), l[3 + L] = Math.round(ve * g);
      }
      for (let B = 1 + v; B < a - v; B++) {
        let L = 4 * R++;
        const Ve = 4 * A++;
        q += s[L] - s[Ve], se += s[1 + L] - s[1 + Ve], we += s[2 + L] - s[2 + Ve], ve += s[3 + L] - s[3 + Ve], L = 4 * S++, l[L] = Math.round(q * g), l[1 + L] = Math.round(se * g), l[2 + L] = Math.round(we * g), l[3 + L] = Math.round(ve * g);
      }
      for (let B = a - v; B < a; B++) {
        let L = 4 * A++;
        q += Y - s[L], se += te - s[1 + L], we += F - s[2 + L], ve += de - s[3 + L], L = 4 * S++, l[L] = Math.round(q * g), l[1 + L] = Math.round(se * g), l[2 + L] = Math.round(we * g), l[3 + L] = Math.round(ve * g);
      }
    }
  }
  function Re(l, s, a, h, v, g) {
    for (var N = 0; N < a; N++) {
      let S = N, A = S;
      const R = 4 * S;
      let x = S + a * v;
      const k = 4 * (S + a * (h - 1)), U = s[R], Q = s[1 + R], ne = s[2 + R], ie = s[3 + R], Y = s[k], te = s[1 + k], F = s[2 + k], de = s[3 + k];
      let q = U * (1 + v), se = Q * (1 + v), we = ne * (1 + v), ve = ie * (1 + v);
      for (let B = 0; B < v; B++) {
        const L = 4 * (S + B * a);
        q += s[L], se += s[1 + L], we += s[2 + L], ve += s[3 + L];
      }
      for (let B = 0; B <= v; B++) {
        let L = 4 * x;
        q += s[L] - U, se += s[1 + L] - Q, we += s[2 + L] - ne, ve += s[3 + L] - ie, L = 4 * S, l[L] = Math.round(q * g), l[1 + L] = Math.round(se * g), l[2 + L] = Math.round(we * g), l[3 + L] = Math.round(ve * g), x += a, S += a;
      }
      for (let B = 1 + v; B < h - v; B++) {
        let L = 4 * x;
        const Ve = 4 * A;
        q += s[L] - s[Ve], se += s[1 + L] - s[1 + Ve], we += s[2 + L] - s[2 + Ve], ve += s[3 + L] - s[3 + Ve], L = 4 * S, l[L] = Math.round(q * g), l[1 + L] = Math.round(se * g), l[2 + L] = Math.round(we * g), l[3 + L] = Math.round(ve * g), A += a, x += a, S += a;
      }
      for (let B = h - v; B < h; B++) {
        let L = 4 * A;
        q += Y - s[L], se += te - s[1 + L], we += F - s[2 + L], ve += de - s[3 + L], L = 4 * S, l[L] = Math.round(q * g), l[1 + L] = Math.round(se * g), l[2 + L] = Math.round(we * g), l[3 + L] = Math.round(ve * g), A += a, S += a;
      }
    }
  }
  function Pt(l, s, a, h, v, g, N, S, A, R, x, k, U) {
    const Q = h * 4, ne = v * 4, ie = v * (h - 1);
    for (let Y = 0; Y < v; Y++) {
      let te = 0, F = Y * Q | 0, de = 4 * (Y + ie) | 0, q = s[F], se = s[1 + F], we = s[2 + F], ve = s[3 + F], B = k * q, L = k * se, Ve = k * we, ct = k * ve, Je = B, st = L, Ze = Ve, it = ct;
      for (let Rt = 0; Rt < h; Rt++) {
        const bt = s[F++], Tt = s[F++], It = s[F++], vt = s[F++], Nt = g * bt + N * q + R * B + x * Je, Fn = g * Tt + N * se + R * L + x * st, Nn = g * It + N * we + R * Ve + x * Ze, gn = g * vt + N * ve + R * ct + x * it;
        Je = B, B = Nt, q = bt, st = L, L = Fn, se = Tt, Ze = Ve, Ve = Nn, we = It, it = ct, ct = gn, ve = vt, a[te++] = B, a[te++] = L, a[te++] = Ve, a[te++] = ct;
      }
      F -= 4, te -= 4, Je = U * (q = s[F]), st = U * (se = s[1 + F]), Ze = U * (we = s[2 + F]), it = U * (ve = s[3 + F]), B = Je, L = st, Ve = Ze, ct = it;
      let Xe = q, Qe = se, xt = we, Vt = ve;
      for (let Rt = h - 1; 0 <= Rt; Rt--) {
        const bt = S * Xe + A * q + R * B + x * Je, Tt = S * Qe + A * se + R * L + x * st, It = S * xt + A * we + R * Ve + x * Ze, vt = S * Vt + A * ve + R * ct + x * it;
        Je = B, B = bt, q = Xe, st = L, L = Tt, se = Qe, Ze = Ve, Ve = It, we = xt, it = ct, ct = vt, ve = Vt, Xe = s[F], Qe = s[1 + F], xt = s[2 + F], Vt = s[3 + F], l[de] = B + a[te], l[1 + de] = L + a[1 + te], l[2 + de] = Ve + a[2 + te], l[3 + de] = ct + a[3 + te], F -= 4, te -= 4, de -= ne;
      }
    }
  }
  var on = {};
  r(on, {
    circle: () => yn,
    crop: () => qt,
    cut: () => Kt
  });
  function Ct(l, s, a) {
    const h = s < l ? l : s;
    return h > a ? a : h;
  }
  function Kt(l, s, a, h, v) {
    a |= 0, h |= 0;
    const g = new v.constructor(a, h), N = g.u32, S = v.u32, A = v.width | 0;
    for (let R = 0; R < h; R++) {
      const x = l + A * (s + R);
      N.set(S.subarray(x, a + x), R * a);
    }
    return g;
  }
  function qt(l, s, a, h, v) {
    a |= 0, h |= 0;
    const g = v.u32, N = v.width | 0, S = v.u32 = new Uint32Array(a * h);
    for (let A = 0; A < h; A++) {
      const R = l + N * (s + A);
      S.set(g.subarray(R, a + R), A * a);
    }
    v.width = a, v.height = h, v.u8 = new Uint8Array(v.u32.buffer), v.view = new DataView(v.u32.buffer);
  }
  function yn(l, s) {
    const a = s.u8, h = s.u32, v = s.width | 0, g = s.height | 0, N = Math.min(v, g) / 2, S = v / 2, A = g / 2, R = N ** 2, x = l ** (1 / 2);
    for (let k = 0; k < g; k++) {
      const U = (k - A) ** 2, Q = k * v;
      for (let ne = 0; ne < v; ne++) {
        const ie = U + (ne - S) ** 2;
        ie > R ? h[ne + Q] = 0 : l && (a[3 + 4 * (ne + Q)] *= Ct(0, 1 - ie / R * x, 1));
      }
    }
    return s;
  }
  var En = {};
  r(En, {
    cubic: () => hr,
    linear: () => bn,
    nearest: () => ur
  });
  function wt(l, s, a) {
    return a * s + l * (1 - a);
  }
  function $t(l, s, a) {
    const h = s < l ? l : s;
    return h > a ? a : h;
  }
  function Ye(l, s, a, h) {
    return 4 * ($t(0, l, a - 1) + $t(0, s, h - 1) * a);
  }
  function rt(l, s, a, h, v) {
    const g = a / 2 + l / -2, N = l + a * 2 - h / 2 - s * 2.5, S = h / 2 + l / -2 + s * 1.5 - a * 1.5, A = v * v;
    return s + g * v + N * A + S * v * A;
  }
  function ur(l, s, a) {
    l = l | 0, s = s | 0;
    const h = a.u32, v = a.width | 0, g = a.height | 0, N = a.u32 = new Uint32Array(l * s), S = 1 / l, A = 1 / s, R = S * v, x = A * g;
    for (let k = 0; k < s; k++) {
      const U = k * l, Q = v * (k * x | 0);
      for (let ne = 0; ne < l; ne++)
        N[ne + U] = h[Q + (ne * R | 0)];
    }
    a.width = l, a.height = s, a.u8 = new Uint8Array(N.buffer), a.view = new DataView(N.buffer);
  }
  function bn(l, s, a) {
    l = l | 0, s = s | 0;
    const h = a.u8, v = a.width | 0, g = a.height | 0, N = new Uint8ClampedArray(4 * l * s);
    let S = 0;
    const A = 1 / (l - 1), R = 1 / (s - 1);
    for (let x = 0; x < s; x++) {
      const k = g * (x * R) - 0.5, U = k | 0, Q = k - U;
      for (let ne = 0; ne < l; ne++) {
        const ie = v * (ne * A) - 0.5, Y = ie | 0, te = ie - Y, F = Ye(Y, U, v, g), de = Ye(1 + Y, U, v, g), q = Ye(Y, 1 + U, v, g), se = Ye(1 + Y, 1 + U, v, g);
        N[S++] = wt(wt(h[F], h[q], te), wt(h[de], h[se], te), Q), N[S++] = wt(wt(h[1 + F], h[1 + q], te), wt(h[1 + de], h[1 + se], te), Q), N[S++] = wt(wt(h[2 + F], h[2 + q], te), wt(h[2 + de], h[2 + se], te), Q), N[S++] = wt(wt(h[3 + F], h[3 + q], te), wt(h[3 + de], h[3 + se], te), Q);
      }
    }
    a.width = l, a.height = s, a.u8 = new Uint8Array(N.buffer), a.view = new DataView(N.buffer), a.u32 = new Uint32Array(N.buffer);
  }
  function hr(l, s, a) {
    l = l | 0, s = s | 0;
    const h = a.u8, v = a.width | 0, g = a.height | 0, N = new Uint8ClampedArray(4 * l * s);
    let S = 0;
    const A = 1 / (l - 1), R = 1 / (s - 1);
    for (let x = 0; x < s; x++) {
      const k = g * (x * R) - 0.5, U = k | 0, Q = k - U;
      for (let ne = 0; ne < l; ne++) {
        const ie = v * (ne * A) - 0.5, Y = ie | 0, te = ie - Y, F = Ye(Y - 1, U - 1, v, g), de = Ye(0 + Y, U - 1, v, g), q = Ye(1 + Y, U - 1, v, g), se = Ye(2 + Y, U - 1, v, g), we = Ye(Y - 1, U, v, g), ve = Ye(0 + Y, U, v, g), B = Ye(1 + Y, U, v, g), L = Ye(2 + Y, U, v, g), Ve = Ye(Y - 1, 1 + U, v, g), ct = Ye(0 + Y, 1 + U, v, g), Je = Ye(1 + Y, 1 + U, v, g), st = Ye(2 + Y, 1 + U, v, g), Ze = Ye(Y - 1, 2 + U, v, g), it = Ye(0 + Y, 2 + U, v, g), Xe = Ye(1 + Y, 2 + U, v, g), Qe = Ye(2 + Y, 2 + U, v, g), xt = rt(h[F], h[de], h[q], h[se], te), Vt = rt(h[1 + F], h[1 + de], h[1 + q], h[1 + se], te), Rt = rt(h[2 + F], h[2 + de], h[2 + q], h[2 + se], te), bt = rt(h[3 + F], h[3 + de], h[3 + q], h[3 + se], te), Tt = rt(h[we], h[ve], h[B], h[L], te), It = rt(h[1 + we], h[1 + ve], h[1 + B], h[1 + L], te), vt = rt(h[2 + we], h[2 + ve], h[2 + B], h[2 + L], te), Nt = rt(h[3 + we], h[3 + ve], h[3 + B], h[3 + L], te), Fn = rt(h[Ve], h[ct], h[Je], h[st], te), Nn = rt(h[1 + Ve], h[1 + ct], h[1 + Je], h[1 + st], te), gn = rt(h[2 + Ve], h[2 + ct], h[2 + Je], h[2 + st], te), Ui = rt(h[3 + Ve], h[3 + ct], h[3 + Je], h[3 + st], te), Jr = rt(h[Ze], h[it], h[Xe], h[Qe], te), Zr = rt(h[1 + Ze], h[1 + it], h[1 + Xe], h[1 + Qe], te), Xr = rt(h[2 + Ze], h[2 + it], h[2 + Xe], h[2 + Qe], te), Jl = rt(h[3 + Ze], h[3 + it], h[3 + Xe], h[3 + Qe], te);
        N[S++] = rt(xt, Tt, Fn, Jr, Q), N[S++] = rt(Vt, It, Nn, Zr, Q), N[S++] = rt(Rt, vt, gn, Xr, Q), N[S++] = rt(bt, Nt, Ui, Jl, Q);
      }
    }
    a.width = l, a.height = s, a.u8 = new Uint8Array(N.buffer), a.view = new DataView(N.buffer), a.u32 = new Uint32Array(N.buffer);
  }
  var dn = {};
  r(dn, {
    rotate: () => M,
    rotate180: () => p,
    rotate270: () => V,
    rotate90: () => m
  });
  function p(l) {
    l.u32.reverse();
  }
  function m(l) {
    const s = l.u32, a = l.u32.slice(), h = l.width | 0, v = l.height | 0;
    l.width = v, l.height = h;
    for (let g = 0; g < h; g++) {
      const N = g * h, S = v - 1 - g;
      for (let A = 0; A < v; A++)
        s[S + A * h] = a[A + N];
    }
  }
  function V(l) {
    const s = l.u32, a = l.u32.slice(), h = l.width | 0, v = l.height | 0;
    l.width = v, l.height = h;
    for (let g = 0; g < h; g++) {
      const N = g * h | 0, S = g + h * (h - 1) | 0;
      for (let A = 0; A < v; A++)
        s[S - A * h] = a[A + N];
    }
  }
  function M(l, s, a) {
    const h = Math.PI * ((360 - l) / 180), v = Math.sin(h), g = Math.cos(h), N = (a ? Math.abs(s.width * v) + Math.abs(s.height * g) : s.width) | 0, S = (a ? Math.abs(s.width * g) + Math.abs(s.height * v) : s.height) | 0, A = N === s.width && S === s.height, R = A ? s.clone() : s, x = { width: N, height: S, u8: A ? s.u8 : new Uint8Array(4 * N * S) }, k = N / 2 - 0.5, U = S / 2 - 0.5, Q = s.width / 2 - 0.5, ne = s.height / 2 - 0.5;
    let ie = 0;
    do {
      let Y = 0;
      const te = Q - v * (ie - U), F = ne + g * (ie - U);
      do
        C(R, x, Y, ie, te + g * (Y - k), F + v * (Y - k));
      while (Y++ < N);
    } while (ie++ < S);
    s.u8 = x.u8, s.width = N, s.height = S, s.view = new DataView(x.u8.buffer, x.u8.byteOffset, x.u8.byteLength), s.u32 = new Uint32Array(x.u8.buffer, x.u8.byteOffset, x.u8.byteLength / 4);
  }
  function C(l, s, a, h, v, g) {
    const N = ~~v, S = ~~g, A = v - N, R = g - S, x = 4 * (a + h * s.width), k = { r: 0, g: 0, b: 0, a: 0 };
    j(N, S, (1 - A) * (1 - R), k, l), j(1 + N, S, A * (1 - R), k, l), j(N, 1 + S, (1 - A) * R, k, l), j(1 + N, 1 + S, A * R, k, l), s.u8[3 + x] = k.a, s.u8[x] = k.r / k.a, s.u8[1 + x] = k.g / k.a, s.u8[2 + x] = k.b / k.a;
  }
  function j(l, s, a, h, v) {
    if (l > 0 && s > 0 && l < v.width && s < v.height) {
      const g = 4 * (l + s * v.width), N = a * v.u8[3 + g];
      h.a += N, h.r += N * v.u8[g], h.g += N * v.u8[1 + g], h.b += N * v.u8[2 + g];
    }
  }
  var z = {};
  r(z, {
    blend: () => W,
    replace: () => H
  });
  function H(l, s, a, h) {
    const v = l.u32, g = s.u32, N = s.width | 0, S = l.width | 0, A = s.height | 0, R = l.height | 0, x = (a > 0 ? 0 : -a) | 0, k = (h > 0 ? 0 : -h) | 0, U = (h > 0 ? h : 0) | 0, Q = (a > 0 ? a : 0) | 0, ne = Math.min(S, a + N) - Q | 0, ie = Math.min(R, h + A) - U | 0;
    if (!(0 >= ne || 0 >= ie))
      for (let Y = 0; Y < ie; Y++) {
        const te = x + N * (Y + k), F = Q + S * (Y + U);
        v.subarray(F, ne + F).set(g.subarray(te, ne + te));
      }
  }
  function W(l, s, a, h) {
    const v = l.u32, g = s.u32, N = s.width | 0, S = l.width | 0, A = s.height | 0, R = l.height | 0, x = (a > 0 ? 0 : -a) | 0, k = (h > 0 ? 0 : -h) | 0, U = (h > 0 ? h : 0) | 0, Q = (a > 0 ? a : 0) | 0, ne = Math.min(S, a + N) - Q | 0, ie = Math.min(R, h + A) - U | 0;
    if (!(0 >= ne || 0 >= ie))
      for (let Y = 0; Y < ie; Y++) {
        const te = x + N * (Y + k), F = Q + S * (Y + U);
        for (let de = 0; de < ne; de++) {
          const q = g[de + te], se = q >> 24 & 255;
          if (se !== 0)
            if (se === 255)
              v[de + F] = q;
            else {
              const we = 1 + se, ve = 256 - se, B = v[de + F], L = we * (q & 255) + ve * (B & 255) >> 8, Ve = we * (q >> 8 & 255) + ve * (B >> 8 & 255) >> 8, ct = we * (q >> 16 & 255) + ve * (B >> 16 & 255) >> 8;
              v[de + F] = Math.max(se, B >> 24 & 255) << 24 | (ct & 255) << 16 | (Ve & 255) << 8 | L;
            }
        }
      }
  }
  var I = {};
  r(I, {
    cords: () => J,
    rgba: () => fe,
    u32: () => re
  });
  function* J(l) {
    const s = l.width | 0, a = l.height | 0;
    for (let h = 0; h < a; h++)
      for (let v = 0; v < s; v++)
        yield [v, h];
  }
  function* fe(l) {
    let s = 0;
    const a = l.u8, h = l.width | 0, v = l.height | 0;
    for (let g = 0; g < v; g++)
      for (let N = 0; N < h; N++)
        yield [N, g, a.subarray(s, s += 4)];
  }
  function* re(l) {
    let s = 0;
    const a = l.view, h = l.width | 0, v = l.height | 0;
    for (let g = 0; g < v; g++)
      for (let N = 0; N < h; N++)
        yield [N, g, a.getUint32(s, !1)], s += 4;
  }
  var ge = new Uint32Array([
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
  function De(l) {
    let s = 0, a = -1;
    const h = l.length - 4 | 0;
    for (; h > s; )
      a = ge[(a ^ l[s++]) & 255] ^ a >>> 8, a = ge[(a ^ l[s++]) & 255] ^ a >>> 8, a = ge[(a ^ l[s++]) & 255] ^ a >>> 8, a = ge[(a ^ l[s++]) & 255] ^ a >>> 8;
    for (; s < l.length; )
      a = ge[(a ^ l[s++]) & 255] ^ a >>> 8;
    return (a ^ 4294967295) >>> 0;
  }
  function $e(l, s = !1) {
    if (l instanceof ArrayBuffer)
      return new Uint8Array(l);
    if (s && l instanceof SharedArrayBuffer)
      return new Uint8Array(l);
    if (ArrayBuffer.isView(l))
      return new Uint8Array(l.buffer, l.byteOffset, l.byteLength);
    throw new TypeError("The provided value is not of type '(ArrayBuffer or ArrayBufferView)'");
  }
  function ze(l, s = !1) {
    let a = 0, h = 0;
    l.forEach((g) => a += g.byteLength == null ? g.length : g.byteLength);
    const v = new Uint8Array(s ? new SharedArrayBuffer(a) : a);
    return l.forEach((g) => {
      const N = Array.isArray(g) ? g : $e(g, !0);
      v.set(N, h), h += N.length;
    }), v;
  }
  var Ue = Uint8Array, Ke = Uint16Array, Yt = Uint32Array, Un = Ue.of(16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15), w = Ue.of(0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0), b = Ue.of(0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0), y = function(l, s) {
    for (var a = new Ke(31), h = 0; h < 31; ++h)
      a[h] = s += 1 << l[h - 1];
    for (var v = new Yt(a[30]), h = 1; h < 30; ++h)
      for (var g = a[h]; g < a[h + 1]; ++g)
        v[g] = g - a[h] << 5 | h;
    return [a, v];
  }, O = y(w, 2), P = O[0], T = O[1];
  P[28] = 258, T[258] = 28;
  var pe = y(b, 0), me = pe[0], Z = pe[1], X = new Ke(32768);
  for (ue = 0; ue < 32768; ++ue)
    G = (ue & 43690) >>> 1 | (ue & 21845) << 1, G = (G & 52428) >>> 2 | (G & 13107) << 2, G = (G & 61680) >>> 4 | (G & 3855) << 4, X[ue] = ((G & 65280) >>> 8 | (G & 255) << 8) >>> 1;
  var ue, G, _e = function(l, s, a) {
    for (var h = l.length, v = 0, g = new Ke(s); v < h; ++v)
      ++g[l[v] - 1];
    var N = new Ke(s);
    for (v = 0; v < s; ++v)
      N[v] = N[v - 1] + g[v - 1] << 1;
    var S;
    if (a) {
      S = new Ke(1 << s);
      var A = 15 - s;
      for (v = 0; v < h; ++v)
        if (l[v])
          for (var R = v << 4 | l[v], x = s - l[v], k = N[l[v] - 1]++ << x, U = k | (1 << x) - 1; k <= U; ++k)
            S[X[k] >>> A] = R;
    } else
      for (S = new Ke(h), v = 0; v < h; ++v)
        l[v] && (S[v] = X[N[l[v] - 1]++] >>> 15 - l[v]);
    return S;
  }, oe = new Ue(288);
  for (ue = 0; ue < 144; ++ue)
    oe[ue] = 8;
  var ue;
  for (ue = 144; ue < 256; ++ue)
    oe[ue] = 9;
  var ue;
  for (ue = 256; ue < 280; ++ue)
    oe[ue] = 7;
  var ue;
  for (ue = 280; ue < 288; ++ue)
    oe[ue] = 8;
  var ue, Te = new Ue(32);
  for (ue = 0; ue < 32; ++ue)
    Te[ue] = 5;
  var ue, ke = _e(oe, 9, 0), nt = _e(oe, 9, 1), pt = _e(Te, 5, 0), le = _e(Te, 5, 1), Fe = function(l) {
    for (var s = l[0], a = 1; a < l.length; ++a)
      l[a] > s && (s = l[a]);
    return s;
  }, ye = function(l, s, a) {
    var h = s >> 3 | 0;
    return (l[h] | l[h + 1] << 8) >> (s & 7) & a;
  }, ot = function(l, s) {
    var a = s >> 3 | 0;
    return (l[a] | l[a + 1] << 8 | l[a + 2] << 16) >> (s & 7);
  }, at = function(l) {
    return (l >> 3 | 0) + (l & 7 && 1);
  }, ft = function(l, s, a) {
    (a == null || a > l.length) && (a = l.length);
    var h = new (l instanceof Ke ? Ke : l instanceof Yt ? Yt : Ue)(a - s);
    return h.set(l.subarray(s, a)), h;
  }, Ne = function(l, s, a) {
    var h = l.length;
    if (!h || a && !a.l && h < 5)
      return s || new Ue(0);
    var v = !s || a, g = !a || a.i;
    a || (a = {}), s || (s = new Ue(h * 3));
    var N = function(Fn) {
      var Nn = s.length;
      if (Fn > Nn) {
        var gn = new Ue(Math.max(Nn * 2, Fn));
        gn.set(s), s = gn;
      }
    }, S = a.f || 0, A = a.p || 0, R = a.b || 0, x = a.l, k = a.d, U = a.m, Q = a.n, ne = h * 8;
    do {
      if (!x) {
        a.f = S = ye(l, A, 1);
        var ie = ye(l, A + 1, 3);
        if (A += 3, ie)
          if (ie === 1)
            x = nt, k = le, U = 9, Q = 5;
          else if (ie === 2) {
            var de = ye(l, A, 31) + 257, q = ye(l, A + 10, 15) + 4, se = de + ye(l, A + 5, 31) + 1;
            A += 14;
            for (var we = new Ue(se), ve = new Ue(19), B = 0; B < q; ++B)
              ve[Un[B]] = ye(l, A + B * 3, 7);
            A += q * 3;
            for (var L = Fe(ve), Ve = (1 << L) - 1, ct = _e(ve, L, 1), B = 0; B < se; ) {
              var Je = ct[ye(l, A, Ve)];
              A += Je & 15;
              var Y = Je >>> 4;
              if (Y < 16)
                we[B++] = Y;
              else {
                var st = 0, Ze = 0;
                for (Y === 16 ? (Ze = 3 + ye(l, A, 3), A += 2, st = we[B - 1]) : Y === 17 ? (Ze = 3 + ye(l, A, 7), A += 3) : Y === 18 && (Ze = 11 + ye(l, A, 127), A += 7); Ze--; )
                  we[B++] = st;
              }
            }
            var it = we.subarray(0, de), Xe = we.subarray(de);
            U = Fe(it), Q = Fe(Xe), x = _e(it, U, 1), k = _e(Xe, Q, 1);
          } else
            throw "invalid block type";
        else {
          var Y = at(A) + 4, te = l[Y - 4] | l[Y - 3] << 8, F = Y + te;
          if (F > h) {
            if (g)
              throw "unexpected EOF";
            break;
          }
          v && N(R + te), s.set(l.subarray(Y, F), R), a.b = R += te, a.p = A = F * 8;
          continue;
        }
        if (A > ne) {
          if (g)
            throw "unexpected EOF";
          break;
        }
      }
      v && N(R + 131072);
      for (var Qe = (1 << U) - 1, xt = (1 << Q) - 1, Vt = A; ; Vt = A) {
        var st = x[ot(l, A) & Qe], Rt = st >>> 4;
        if (A += st & 15, A > ne) {
          if (g)
            throw "unexpected EOF";
          break;
        }
        if (!st)
          throw "invalid length/literal";
        if (Rt < 256)
          s[R++] = Rt;
        else if (Rt === 256) {
          Vt = A, x = null;
          break;
        } else {
          var bt = Rt - 254;
          if (Rt > 264) {
            var B = Rt - 257, Tt = w[B];
            bt = ye(l, A, (1 << Tt) - 1) + P[B], A += Tt;
          }
          var It = k[ot(l, A) & xt], vt = It >>> 4;
          if (!It)
            throw "invalid distance";
          A += It & 15;
          var Xe = me[vt];
          if (vt > 3) {
            var Tt = b[vt];
            Xe += ot(l, A) & (1 << Tt) - 1, A += Tt;
          }
          if (A > ne) {
            if (g)
              throw "unexpected EOF";
            break;
          }
          v && N(R + 131072);
          for (var Nt = R + bt; R < Nt; R += 4)
            s[R] = s[R - Xe], s[R + 1] = s[R + 1 - Xe], s[R + 2] = s[R + 2 - Xe], s[R + 3] = s[R + 3 - Xe];
          R = Nt;
        }
      }
      a.l = x, a.p = Vt, a.b = R, x && (S = 1, a.m = U, a.d = k, a.n = Q);
    } while (!S);
    return R === s.length ? s : ft(s, 0, R);
  }, mt = function(l, s, a) {
    a <<= s & 7;
    var h = s >> 3 | 0;
    l[h] |= a, l[h + 1] |= a >>> 8;
  }, yt = function(l, s, a) {
    a <<= s & 7;
    var h = s >> 3 | 0;
    l[h] |= a, l[h + 1] |= a >>> 8, l[h + 2] |= a >>> 16;
  }, pn = function(l, s) {
    for (var a = [], h = 0; h < l.length; ++h)
      l[h] && a.push({ s: h, f: l[h] });
    var v = a.length, g = a.slice();
    if (!v)
      return [Bt, 0];
    if (v === 1) {
      var N = new Ue(a[0].s + 1);
      return N[a[0].s] = 1, [N, 1];
    }
    a.sort(function(se, we) {
      return se.f - we.f;
    }), a.push({ s: -1, f: 25001 });
    var S = a[0], A = a[1], R = 0, x = 1, k = 2;
    for (a[0] = { s: -1, f: S.f + A.f, l: S, r: A }; x !== v - 1; )
      S = a[a[R].f < a[k].f ? R++ : k++], A = a[R !== x && a[R].f < a[k].f ? R++ : k++], a[x++] = { s: -1, f: S.f + A.f, l: S, r: A };
    for (var U = g[0].s, h = 1; h < v; ++h)
      g[h].s > U && (U = g[h].s);
    var Q = new Ke(U + 1), ne = Et(a[x - 1], Q, 0);
    if (ne > s) {
      var h = 0, ie = 0, Y = ne - s, te = 1 << Y;
      for (g.sort(function(we, ve) {
        return Q[ve.s] - Q[we.s] || we.f - ve.f;
      }); h < v; ++h) {
        var F = g[h].s;
        if (Q[F] > s)
          ie += te - (1 << ne - Q[F]), Q[F] = s;
        else
          break;
      }
      for (ie >>>= Y; ie > 0; ) {
        var de = g[h].s;
        Q[de] < s ? ie -= 1 << s - Q[de]++ - 1 : ++h;
      }
      for (; h >= 0 && ie; --h) {
        var q = g[h].s;
        Q[q] === s && (--Q[q], ++ie);
      }
      ne = s;
    }
    return [new Ue(Q), ne];
  }, Et = function(l, s, a) {
    return l.s === -1 ? Math.max(Et(l.l, s, a + 1), Et(l.r, s, a + 1)) : s[l.s] = a;
  }, Ft = function(l) {
    for (var s = l.length; s && !l[--s]; )
      ;
    for (var a = new Ke(++s), h = 0, v = l[0], g = 1, N = function(A) {
      a[h++] = A;
    }, S = 1; S <= s; ++S)
      if (l[S] === v && S !== s)
        ++g;
      else {
        if (!v && g > 2) {
          for (; g > 138; g -= 138)
            N(32754);
          g > 2 && (N(g > 10 ? g - 11 << 5 | 28690 : g - 3 << 5 | 12305), g = 0);
        } else if (g > 3) {
          for (N(v), --g; g > 6; g -= 6)
            N(8304);
          g > 2 && (N(g - 3 << 5 | 8208), g = 0);
        }
        for (; g--; )
          N(v);
        g = 1, v = l[S];
      }
    return [a.subarray(0, h), s];
  }, ut = function(l, s) {
    for (var a = 0, h = 0; h < s.length; ++h)
      a += l[h] * s[h];
    return a;
  }, Dt = function(l, s, a) {
    var h = a.length, v = at(s + 2);
    l[v] = h & 255, l[v + 1] = h >>> 8, l[v + 2] = l[v] ^ 255, l[v + 3] = l[v + 1] ^ 255;
    for (var g = 0; g < h; ++g)
      l[v + g + 4] = a[g];
    return (v + 4 + h) * 8;
  }, ht = function(l, s, a, h, v, g, N, S, A, R, x) {
    mt(s, x++, a), ++v[256];
    for (var k = pn(v, 15), U = k[0], Q = k[1], ne = pn(g, 15), ie = ne[0], Y = ne[1], te = Ft(U), F = te[0], de = te[1], q = Ft(ie), se = q[0], we = q[1], ve = new Ke(19), B = 0; B < F.length; ++B)
      ve[F[B] & 31]++;
    for (var B = 0; B < se.length; ++B)
      ve[se[B] & 31]++;
    for (var L = pn(ve, 7), Ve = L[0], ct = L[1], Je = 19; Je > 4 && !Ve[Un[Je - 1]]; --Je)
      ;
    var st = R + 5 << 3, Ze = ut(v, oe) + ut(g, Te) + N, it = ut(v, U) + ut(g, ie) + N + 14 + 3 * Je + ut(ve, Ve) + (2 * ve[16] + 3 * ve[17] + 7 * ve[18]);
    if (st <= Ze && st <= it)
      return Dt(s, x, l.subarray(A, A + R));
    var Xe, Qe, xt, Vt;
    if (mt(s, x, 1 + (it < Ze)), x += 2, it < Ze) {
      Xe = _e(U, Q, 0), Qe = U, xt = _e(ie, Y, 0), Vt = ie;
      var Rt = _e(Ve, ct, 0);
      mt(s, x, de - 257), mt(s, x + 5, we - 1), mt(s, x + 10, Je - 4), x += 14;
      for (var B = 0; B < Je; ++B)
        mt(s, x + 3 * B, Ve[Un[B]]);
      x += 3 * Je;
      for (var bt = [F, se], Tt = 0; Tt < 2; ++Tt)
        for (var It = bt[Tt], B = 0; B < It.length; ++B) {
          var vt = It[B] & 31;
          mt(s, x, Rt[vt]), x += Ve[vt], vt > 15 && (mt(s, x, It[B] >>> 5 & 127), x += It[B] >>> 12);
        }
    } else
      Xe = ke, Qe = oe, xt = pt, Vt = Te;
    for (var B = 0; B < S; ++B)
      if (h[B] > 255) {
        var vt = h[B] >>> 18 & 31;
        yt(s, x, Xe[vt + 257]), x += Qe[vt + 257], vt > 7 && (mt(s, x, h[B] >>> 23 & 31), x += w[vt]);
        var Nt = h[B] & 31;
        yt(s, x, xt[Nt]), x += Vt[Nt], Nt > 3 && (yt(s, x, h[B] >>> 5 & 8191), x += b[Nt]);
      } else
        yt(s, x, Xe[h[B]]), x += Qe[h[B]];
    return yt(s, x, Xe[256]), x + Qe[256];
  }, gt = Yt.of(65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632), Bt = new Ue(0), Jt = function(l, s, a, h, v, g) {
    var N = l.length, S = new Ue(h + N + 5 * (1 + Math.ceil(N / 7e3)) + v), A = S.subarray(h, S.length - v), R = 0;
    if (!s || N < 8)
      for (var x = 0; x <= N; x += 65535) {
        var k = x + 65535;
        k < N ? R = Dt(A, R, l.subarray(x, k)) : (A[x] = g, R = Dt(A, R, l.subarray(x, N)));
      }
    else {
      for (var U = gt[s - 1], Q = U >>> 13, ne = U & 8191, ie = (1 << a) - 1, Y = new Ke(32768), te = new Ke(ie + 1), F = Math.ceil(a / 3), de = 2 * F, q = function(Pi) {
        return (l[Pi] ^ l[Pi + 1] << F ^ l[Pi + 2] << de) & ie;
      }, se = new Yt(25e3), we = new Ke(288), ve = new Ke(32), B = 0, L = 0, x = 0, Ve = 0, ct = 0, Je = 0; x < N; ++x) {
        var st = q(x), Ze = x & 32767, it = te[st];
        if (Y[Ze] = it, te[st] = Ze, ct <= x) {
          var Xe = N - x;
          if ((B > 7e3 || Ve > 24576) && Xe > 423) {
            R = ht(l, A, 0, se, we, ve, L, Ve, Je, x - Je, R), Ve = B = L = 0, Je = x;
            for (var Qe = 0; Qe < 286; ++Qe)
              we[Qe] = 0;
            for (var Qe = 0; Qe < 30; ++Qe)
              ve[Qe] = 0;
          }
          var xt = 2, Vt = 0, Rt = ne, bt = Ze - it & 32767;
          if (Xe > 2 && st === q(x - bt))
            for (var Tt = Math.min(Q, Xe) - 1, It = Math.min(32767, x), vt = Math.min(258, Xe); bt <= It && --Rt && Ze !== it; ) {
              if (l[x + xt] === l[x + xt - bt]) {
                for (var Nt = 0; Nt < vt && l[x + Nt] === l[x + Nt - bt]; ++Nt)
                  ;
                if (Nt > xt) {
                  if (xt = Nt, Vt = bt, Nt > Tt)
                    break;
                  for (var Fn = Math.min(bt, Nt - 2), Nn = 0, Qe = 0; Qe < Fn; ++Qe) {
                    var gn = x - bt + Qe + 32768 & 32767, Ui = Y[gn], Jr = gn - Ui + 32768 & 32767;
                    Jr > Nn && (Nn = Jr, it = gn);
                  }
                }
              }
              Ze = it, it = Y[Ze], bt += Ze - it + 32768 & 32767;
            }
          if (Vt) {
            se[Ve++] = 268435456 | T[xt] << 18 | Z[Vt];
            var Zr = T[xt] & 31, Xr = Z[Vt] & 31;
            L += w[Zr] + b[Xr], ++we[257 + Zr], ++ve[Xr], ct = x + xt, ++B;
          } else
            se[Ve++] = l[x], ++we[l[x]];
        }
      }
      R = ht(l, A, g, se, we, ve, L, Ve, Je, x - Je, R);
    }
    return ft(S, 0, h + at(R) + v);
  }, nn = function() {
    var l = 1, s = 0;
    return {
      p: function(a) {
        for (var h = l, v = s, g = a.length | 0, N = 0; N !== g; ) {
          for (var S = Math.min(N + 2655, g); N < S; ++N)
            v += h += a[N];
          h = (h & 65535) + 15 * (h >> 16), v = (v & 65535) + 15 * (v >> 16);
        }
        l = h, s = v;
      },
      d: function() {
        return l %= 65521, s %= 65521, (l & 255) << 24 | l >>> 8 << 16 | (s & 255) << 8 | s >>> 8;
      }
    };
  }, Gt = function(l, s, a, h, v) {
    return Jt(l, s.level == null ? 6 : s.level, s.mem == null ? Math.ceil(Math.max(8, Math.min(13, Math.log(l.length))) * 1.5) : 12 + s.mem, a, h, !v);
  }, Qt = function(l, s, a) {
    for (; a; ++s)
      l[s] = a, a >>>= 8;
  }, rn = function(l, s) {
    var a = s.level, h = a === 0 ? 0 : a < 6 ? 1 : a === 9 ? 3 : 2;
    l[0] = 120, l[1] = h << 6 | (h ? 32 - 2 * h : 1);
  }, Lt = function(l) {
    if ((l[0] & 15) !== 8 || l[0] >>> 4 > 7 || (l[0] << 8 | l[1]) % 31)
      throw "invalid zlib data";
    if (l[1] & 32)
      throw "invalid zlib data: preset dictionaries not supported";
  };
  function St(l, s) {
    s || (s = {});
    var a = nn();
    a.p(l);
    var h = Gt(l, s, 2, 4);
    return rn(h, s), Qt(h, h.length - 4, a.d()), h;
  }
  function dr(l, s) {
    return Ne((Lt(l), l.subarray(2, -4)), s);
  }
  function Zn(l, s) {
    return St(l, { level: s });
  }
  function Pn(l, s) {
    try {
      return dr(l, new Uint8Array(s));
    } catch (a) {
      throw a.message ? a : new Error(a);
    }
  }
  var Ii = new Uint8Array([73, 72, 68, 82]), Kr = new Uint8Array([73, 68, 65, 84]), qr = new Uint8Array([73, 69, 78, 68]), Yr = De(new Uint8Array([73, 69, 78, 68])), zo = new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]), $n = {
    GREYSCALE: 0,
    TRUECOLOR: 2,
    INDEXED_COLOR: 3,
    GREYSCALE_ALPHA: 4,
    TRUECOLOR_ALPHA: 6
  }, Bl = {
    1: $n.GREYSCALE,
    2: $n.GREYSCALE_ALPHA,
    3: $n.TRUECOLOR,
    4: $n.TRUECOLOR_ALPHA
  }, Ko = new TextEncoder();
  function Gl(l, { text: s, width: a, height: h, channels: v, depth: g = 8, level: N = 0 }) {
    let S = 0, A = 0;
    const R = a * v, x = new Uint8Array(h + l.length);
    for (; S < l.length; )
      x[A++] = 0, x.set(l.subarray(S, S += R), A), A += R;
    if (s) {
      let ne = [];
      for (const ie in s) {
        if (!s[ie])
          continue;
        const Y = Ko.encode(ie), te = Ko.encode(s[ie]), F = new Uint8Array(13 + Y.length + te.length), de = new DataView(F.buffer);
        F[4] = 116, F[5] = 69, F[6] = 88, F[7] = 116, F.set(Y, 8), ne.push(F), F.set(te, 9 + Y.length), de.setUint32(0, F.length - 12), de.setUint32(F.length - 4, De(F.subarray(4, F.length - 4)));
      }
      s = ze(ne);
    }
    S = s ? s.length : 0;
    const k = Zn(x, N), U = new Uint8Array(49 + S + zo.length + k.length);
    U[26] = 0, U[27] = 0, U[28] = 0, U[24] = g, U.set(zo, 0), U.set(Ii, 12), U.set(Kr, 37), U.set(k, 41), U[25] = Bl[v], s && U.set(s, 45 + k.length), U.set(qr, 49 + S + k.length);
    const Q = new DataView(U.buffer);
    return Q.setUint32(8, 13), Q.setUint32(16, a), Q.setUint32(20, h), Q.setUint32(33, k.length), Q.setUint32(45 + S + k.length, 0), Q.setUint32(53 + S + k.length, Yr), Q.setUint32(29, De(new Uint8Array(U.buffer, 12, 17))), Q.setUint32(41 + k.length, De(new Uint8Array(U.buffer, 37, 4 + k.length))), U;
  }
  function Wl(l) {
    let s = new DataView(l.buffer, l.byteOffset, l.byteLength);
    const a = s.getUint32(16), h = s.getUint32(20), v = l[24], g = l[25];
    let N = { 3: 1, 0: 1, 4: 2, 2: 3, 6: 4 }[g];
    const S = N * v / 8, A = a * S;
    let R = new Uint8Array(h * A), x = 0, k = 0, U = 33;
    const Q = [];
    let ne, ie;
    const Y = l.length - 5;
    let te;
    for (; (te = s.getUint32(4 + U)) !== 1229278788; ) {
      if (te === 1229209940)
        Q.push(l.subarray(8 + U, 8 + U + s.getUint32(U)));
      else if (te === 1347179589) {
        if (ne)
          throw new Error("PLTE can only occur once in an image");
        ne = new Uint32Array(s.getUint32(U));
        for (let F = 0; F < ne.length * 8; F += 3)
          ne[F / 3] = l[8 + U + F] << 24 | l[8 + U + F + 1] << 16 | l[8 + U + F + 2] << 8 | 255;
      } else if (te === 1951551059) {
        if (ie)
          throw new Error("tRNS can only occur once in an image");
        ie = new Uint8Array(s.getUint32(U));
        for (let F = 0; F < ie.length; F++)
          ie[F] = l[8 + U + F];
      }
      if (U += 12 + s.getUint32(U), U > Y)
        break;
    }
    for (l = Pn(Q.length === 1 ? Q[0] : ze(Q), h + h * A); x < l.byteLength; ) {
      const F = l[x++], de = l.subarray(x, x += A);
      F === 0 ? R.set(de, k) : F === 1 ? zl(de, R, k, S, A) : F === 2 ? Kl(de, R, k, S, A) : F === 3 ? ql(de, R, k, S, A) : F === 4 && Yl(de, R, k, S, A), k += A;
    }
    if (g === 3) {
      if (!ne)
        throw new Error("Indexed color PNG has no PLTE");
      if (ie)
        for (let q = 0; q < ie.length; q++)
          ne[q] &= 4294967040 | ie[q];
      N = 4;
      const F = new Uint8Array(a * h * 4), de = new DataView(F.buffer, F.byteOffset, F.byteLength);
      for (let q = 0; q < R.length; q++)
        de.setUint32(q * 4, ne[R[q]], !1);
      R = F;
    }
    if (v !== 8) {
      const F = new Uint8Array(R.length / v * 8);
      for (let de = 0; de < R.length; de += 2)
        F[de / 2] = R[de];
      R = F;
    }
    if (N !== 4) {
      const F = new Uint8Array(a * h * 4), de = new DataView(F.buffer);
      if (N === 1)
        for (let q = 0; q < a * h; q++) {
          const se = R[q];
          de.setUint32(q * 4, se << 24 | se << 16 | se << 8 | 255, !1);
        }
      else if (N === 2)
        for (let q = 0; q < a * h * 2; q += 2) {
          const se = R[q];
          de.setUint32(q * 2, se << 24 | se << 16 | se << 8 | R[q + 1], !1);
        }
      else if (N === 3) {
        F.fill(255);
        for (let q = 0; q < a * h; q++)
          F.set(R.subarray(q * 3, q * 3 + 3), q * 4);
      }
      R = F;
    }
    return { width: a, height: h, buffer: R };
  }
  function zl(l, s, a, h, v) {
    let g = 0;
    for (; g < h; )
      s[g + a] = l[g++];
    for (; g < v; )
      s[g + a] = l[g] + s[g++ + a - h];
  }
  function Kl(l, s, a, h, v) {
    if (a === 0)
      s.set(l, a);
    else {
      let g = 0;
      for (; g < v; )
        s[g + a] = l[g] + s[g++ + a - v];
    }
  }
  function ql(l, s, a, h, v) {
    let g = 0;
    if (a === 0) {
      for (; g < h; )
        s[g] = l[g++];
      for (; g < v; )
        s[g] = l[g] + (s[g++ - h] >> 1);
    } else {
      for (; g < h; )
        s[g + a] = l[g] + (s[g++ + a - v] >> 1);
      for (; g < v; )
        s[g + a] = l[g] + (s[g + a - h] + s[g++ + a - v] >> 1);
    }
  }
  function Yl(l, s, a, h, v) {
    let g = 0;
    if (a === 0) {
      for (; g < h; )
        s[g] = l[g++];
      for (; g < v; )
        s[g] = l[g] + s[g++ - h];
    } else {
      for (; g < h; )
        s[g + a] = l[g] + s[g++ + a - v];
      for (; g < v; ) {
        const N = s[g + a - h], S = s[g + a - v], A = s[g + a - h - v], R = N + S - A, x = Math.abs(R - N), k = Math.abs(R - S), U = Math.abs(R - A);
        s[g + a] = l[g++] + (x <= k && x <= U ? N : k <= U ? S : A);
      }
    }
  }
  var qo = class {
    constructor(l, s, a) {
      if (this.width = l | 0, this.height = s | 0, this.u8 = a ? je(a) : new Uint8Array(4 * this.width * this.height), this.view = new DataView(this.u8.buffer, this.u8.byteOffset, this.u8.byteLength), this.u32 = new Uint32Array(this.u8.buffer, this.u8.byteOffset, this.u8.byteLength / 4), this.u8.length !== 4 * this.width * this.height)
        throw new RangeError("invalid capacity of buffer");
    }
    [Symbol.iterator]() {
      return I.cords(this);
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
      return z.blend(this, l, s | 0, a | 0), this;
    }
    replace(l, s = 0, a = 0) {
      return z.replace(this, l, s | 0, a | 0), this;
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
      return qo.from(Wl(s));
    }
    encode(l, s = {}) {
      var a;
      if (l !== "png")
        throw new RangeError("invalid image format");
      return Gl(this.u8, { channels: 4, width: this.width, height: this.height, level: (a = { none: 0, fast: 3, default: 6, best: 9 }[s.compression]) != null ? a : 3 });
    }
    pixels(l) {
      if (l === "rgba")
        return I.rgba(this);
      if (!l || l === "int")
        return I.u32(this);
      throw new RangeError("invalid iterator type");
    }
    flip(l) {
      if (l === "vertical")
        Be.vertical(this);
      else if (l === "horizontal")
        Be.horizontal(this);
      else
        throw new RangeError("invalid flip type");
      return this;
    }
    crop(l, s, a, h, v) {
      if (l === "circle")
        on.circle(s || 0, this);
      else if (l === "box")
        on.crop(s | 0, a | 0, h | 0, v | 0, this);
      else
        throw new RangeError("invalid crop type");
      return this;
    }
    cut(l, s, a, h, v) {
      if (l === "circle")
        return on.circle(s || 0, this.clone());
      if (l === "box")
        return on.cut(s | 0, a | 0, h | 0, v | 0, this);
      throw new RangeError("invalid cut type");
    }
    rotate(l, s = !0) {
      return (l %= 360) === 0 ? this : (l === 90 ? dn.rotate90(this) : l === 180 ? dn.rotate180(this) : l === 270 ? dn.rotate270(this) : dn.rotate(l, this, s), this);
    }
    blur(l, s) {
      if (l === "cubic")
        At.cubic(this);
      else if (l === "box")
        At.box(+s, this);
      else if (l === "gaussian")
        At.gaussian(+s, this);
      else
        throw new RangeError("invalid blur type");
      return this;
    }
    fill(l) {
      const s = typeof l;
      if (s === "function")
        be.fn(l, this);
      else if (s === "number")
        be.color(l, this);
      else if (l instanceof Ae)
        be.color(l.valueOf(), this);
      else if (Array.isArray(l))
        be.color(i.from_rgba(...l), this);
      else
        throw new TypeError("invalid fill color");
      return this;
    }
    swap(l, s) {
      const a = typeof l;
      if (a === typeof s && a === "number")
        be.swap(l, s, this);
      else if (l instanceof Ae && s instanceof Ae)
        be.swap(l.valueOf(), s.valueOf(), this);
      else if (Array.isArray(l) && Array.isArray(s))
        be.swap(i.from_rgba(...l), i.from_rgba(...s), this);
      else
        throw new RangeError("invalid swap color");
      return this;
    }
    resize(l, s, a) {
      if (s === this.width && a === this.height)
        return this;
      if (l === "cubic")
        En.cubic(s, a, this);
      else if (l === "linear")
        En.linear(s, a, this);
      else if (l === "nearest")
        En.nearest(s, a, this);
      else
        throw new RangeError("invalid resize type");
      return this;
    }
  };
})(kl);
const Uu = "svg", { join: Pu } = tn, { promises: { readFile: $u } } = tn, Fu = process.env.IMAGESCRIPT_WASM_SIMD ? "simd" : "any";
let Ki = null;
var Lu = {
  async init() {
    return Ki || (Ki = new WebAssembly.Module(await $u(Pu(__dirname, `../${Fu}/${Uu}.wasm`)))), this.new();
  },
  new() {
    const e = new WebAssembly.Instance(Ki).exports;
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
};
const ku = "gif", { join: ju } = tn, { promises: { readFile: Hu } } = tn, Bu = process.env.IMAGESCRIPT_WASM_SIMD ? "simd" : "any";
let qi = null;
var Gu = {
  async init() {
    return qi || (qi = new WebAssembly.Module(await Hu(ju(__dirname, `../${Bu}/${ku}.wasm`)))), this.new();
  },
  new() {
    const e = new WebAssembly.Instance(qi, { env: { push_to_stream(i, o) {
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
};
const Wu = "png", { join: zu } = tn, { promises: { readFile: Ku } } = tn, qu = process.env.IMAGESCRIPT_WASM_SIMD ? "simd" : "any";
let Yi = null;
var Yu = {
  async init() {
    return Yi || (Yi = new WebAssembly.Module(await Ku(zu(__dirname, `../${qu}/${Wu}.wasm`)))), this.new();
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
    } = new WebAssembly.Instance(Yi, {
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
        const E = o(), _ = c(), D = e.slice(d, d + 4 * E * _);
        return t(d), { width: E, height: _, framebuffer: D };
      }
    };
  }
};
const Ju = "font", { join: Zu } = tn, { promises: { readFile: Xu } } = tn, Qu = process.env.IMAGESCRIPT_WASM_SIMD ? "simd" : "any";
let Ji = null;
var eh = {
  async init() {
    return Ji || (Ji = new WebAssembly.Module(await Xu(Zu(__dirname, `../${Qu}/${Ju}.wasm`)))), this.new();
  },
  new() {
    let e = null;
    const t = new WebAssembly.Instance(Ji).exports;
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
        const E = t.font_metrics(this.ptr, String.prototype.charCodeAt.call(f, 0), d), _ = JSON.parse(i(n.u8(t.font_metrics_buffer(E), n.length())));
        return t.font_metrics_free(E), _;
      }
      rasterize(f, d = this.scale) {
        const E = t.font_rasterize(this.ptr, String.prototype.charCodeAt.call(f, 0), d), _ = {
          buffer: n.u8(t.font_rasterize_buffer(E), n.length()).slice(),
          metrics: JSON.parse(i(n.u8(t.font_rasterize_metrics(E), n.length())))
        };
        return t.font_rasterize_free(E), _;
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
        const _ = E || {};
        e && this.refs.push(f);
        const D = n.alloc(d.length);
        n.u8(D, d.length).set(d);
        const $ = "r" in _ || "g" in _ || "b" in _;
        t.layout_append(this.ptr, f.ptr, D, d.length, _.scale == null ? f.scale : _.scale, $, _.r, _.g, _.b);
      }
      rasterize(f, d, E) {
        const _ = t.layout_rasterize(this.ptr, f, d, E), D = {
          width: t.layout_rasterize_width(_),
          height: t.layout_rasterize_height(_),
          buffer: n.u8(t.layout_rasterize_buffer(_), n.length()).slice()
        };
        return t.layout_rasterize_free(_), D;
      }
    }
    return { Font: o, Layout: c };
  }
};
const th = "jpeg", { join: nh } = tn, { promises: { readFile: rh } } = tn, ih = process.env.IMAGESCRIPT_WASM_SIMD ? "simd" : "any";
let Zi = null;
var oh = {
  async init() {
    return Zi || (Zi = new WebAssembly.Module(await rh(nh(__dirname, `../${ih}/${th}.wasm`)))), this.new();
  },
  new() {
    const e = new WebAssembly.Instance(Zi).exports;
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
};
const sh = "tiff", { join: lh } = tn, { promises: { readFile: ch } } = tn, ah = process.env.IMAGESCRIPT_WASM_SIMD ? "simd" : "any";
let Xi = null;
var fh = {
  async init() {
    return Xi || (Xi = new WebAssembly.Module(await ch(lh(__dirname, `../${ah}/${sh}.wasm`)))), this.new();
  },
  new() {
    const e = new WebAssembly.Instance(Xi).exports;
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
const uh = $l, jl = pu, { version: hh } = Su, mo = Iu, { default: On } = kl, dh = Lu, ph = Gu, gh = Yu, vh = eh, _h = oh, wh = fh, si = {
  PNG: 2303741511,
  JPEG: 16767231,
  TIFF: 1229531648,
  GIF: 4671814
};
class he {
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
    for (const t of new On(this.width, this.height, this.bitmap)[Symbol.iterator]())
      yield (t[0]++, t[1]++, t);
  }
  /**
   * Yields an [x, y, color] array for every pixel in the image
   * @yields {number[]} The coordinates and color of the pixel ([x, y, color])
   */
  *iterateWithColors() {
    for (const t of new On(this.width, this.height, this.bitmap).pixels("int"))
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
    return he.rgbaToColor(t, n, r, 255);
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
      const f = (_, D, $) => ($ < 0 && ($ += 1), $ > 1 && ($ -= 1), $ < 0.16666666666666666 ? _ + (D - _) * 6 * $ : $ < 0.5 ? D : $ < 0.6666666666666666 ? _ + (D - _) * (0.6666666666666666 - $) * 6 : _), d = r < 0.5 ? r * (1 + n) : r + n - r * n, E = 2 * r - d;
      o = f(E, d, t + 1 / 3), c = f(E, d, t), u = f(E, d, t - 1 / 3);
    }
    return he.rgbaToColor(o * 255, c * 255, u * 255, i * 255);
  }
  /**
   * Converts HSL colors to RGBA colors (assuming an opacity of 255)
   * @param {number} h hue (0..1)
   * @param {number} s saturation (0..1)
   * @param {number} l lightness (0..1)
   * @returns {number} color
   */
  static hslToColor(t, n, r) {
    return he.hslaToColor(t, n, r, 1);
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
    return he.colorToRGBA(t).slice(0, 3);
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
      throw new RangeError(`${he.__out_of_bounds__} (x=${t})<1`);
    if (t > this.width)
      throw new RangeError(`${he.__out_of_bounds__} (x=${t})>(width=${this.width})`);
    if (n < 1)
      throw new RangeError(`${he.__out_of_bounds__} (y=${n})<1`);
    if (n > this.height)
      throw new RangeError(`${he.__out_of_bounds__} (y=${n})>(height=${this.height})`);
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
    return new On(this.width, this.height, this.bitmap).fill(t), this;
  }
  /**
   * Clones the current image
   * @returns {Image}
   */
  clone() {
    const t = new he(this.width, this.height);
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
  scale(t, n = he.RESIZE_NEAREST_NEIGHBOR) {
    const r = this.__scale__(t, n);
    return this.__apply__(r);
  }
  /** @private */
  __scale__(t, n = he.RESIZE_NEAREST_NEIGHBOR) {
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
  resize(t, n, r = he.RESIZE_NEAREST_NEIGHBOR) {
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
  contain(t, n, r = he.RESIZE_NEAREST_NEIGHBOR) {
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
  fit(t, n, r = he.RESIZE_NEAREST_NEIGHBOR) {
    const i = new he(t, n);
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
  cover(t, n, r = he.RESIZE_NEAREST_NEIGHBOR) {
    const i = t / n > this.width / this.height ? t / this.width : n / this.height, o = this.scale(i, r);
    return o.crop((o.width - t) / 2, (o.height - n) / 2, t, n);
  }
  /** @private */
  __resize__(t, n, r = he.RESIZE_NEAREST_NEIGHBOR) {
    if (t === he.RESIZE_AUTO && n === he.RESIZE_AUTO)
      throw new Error("RESIZE_AUTO can only be used for either width or height, not for both");
    if (t === he.RESIZE_AUTO ? t = this.width / this.height * n : n === he.RESIZE_AUTO && (n = this.height / this.width * t), t = Math.floor(t), n = Math.floor(n), t < 1)
      throw new RangeError("Image has to be at least 1 pixel wide");
    if (n < 1)
      throw new RangeError("Image has to be at least 1 pixel high");
    let i;
    if (r === he.RESIZE_NEAREST_NEIGHBOR)
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
    const r = new this.constructor(t, n), i = new On(this.width, this.height, this.bitmap).resize("nearest", t, n);
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
    return new On(this.width, this.height, this.bitmap).crop("circle", n), this;
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
      const [o, c, u, f] = he.rgbaToHSLA(...this.getRGBAAt(r, i));
      return he.hslaToColor(o, c, t * (n ? 1 : u), f);
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
      const [o, c, u, f] = he.rgbaToHSLA(...this.getRGBAAt(r, i));
      return he.hslaToColor(o, t * (n ? 1 : c), u, f);
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
    return new On(this.width, this.height, this.bitmap).overlay(new On(t.width, t.height, t.bitmap), n, r), this;
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
      const [i, o, c, u] = he.rgbaToHSLA(...he.colorToRGBA(r));
      this.__set_pixel__(t, n, he.hslaToColor(i, o, 1 - c, u));
    }
    return this;
  }
  /**
   * Inverts the images saturation
   * @returns {Image}
   */
  invertSaturation() {
    for (const [t, n, r] of this.iterateWithColors()) {
      const [i, o, c, u] = he.rgbaToHSLA(...he.colorToRGBA(r));
      this.__set_pixel__(t, n, he.hslaToColor(i, 1 - o, c, u));
    }
    return this;
  }
  /**
   * Inverts the images hue
   * @returns {Image}
   */
  invertHue() {
    for (const [t, n, r] of this.iterateWithColors()) {
      const [i, o, c, u] = he.rgbaToHSLA(...he.colorToRGBA(r));
      this.__set_pixel__(t, n, he.hslaToColor(1 - i, o, c, u));
    }
    return this;
  }
  /**
   * Shifts the images hue
   * @param {number} degrees How many degrees to shift the hue by
   */
  hueShift(t) {
    for (const [n, r, i] of this.iterateWithColors()) {
      const [o, c, u, f] = he.rgbaToHSLA(...he.colorToRGBA(i));
      this.__set_pixel__(n, r, he.hslaToColor(o + t / 360, c, u, f));
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
    return he.rgbaToColor(...t.map((r) => r / n), 255);
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
      const _ = this.__view__.getUint32(E, !1), [D, $, ee] = he.rgbaToHSLA(...he.colorToRGBA(_)).map((Ge) => ~~(Ge * 63));
      if (t && ee < r || n && ee > 63 - r)
        continue;
      const ce = D << 12 | $ << 6 | ee;
      i[ce] = (i[ce] || 0) + 1;
    }
    let o = -1, c = 0;
    if (i.forEach((E, _) => {
      E < o || (o = E, c = _);
    }), c === -1)
      return this.dominantColor(t, n, r - 1);
    const u = c >>> 12 & 63, f = c >>> 6 & 63, d = c & 63;
    return he.hslaToColor(u / 63, f / 63, d / 63, 1);
  }
  /**
   * Rotates the image the given amount of degrees
   * @param {number} angle The angle to rotate the image for (in degrees)
   * @param {boolean} resize Whether to resize the image so it fits all pixels or just ignore outlying pixels
   */
  rotate(t, n = !0) {
    const r = new On(this.width, this.height, this.bitmap).rotate(360 - t % 360, n), i = new he(r.width, r.height);
    return i.bitmap.set(r.u8), this.__apply__(i);
  }
  /**
   * Flips / mirrors the image horizontally or vertically
   * @param {'horizontal' | 'vertical'} direction The direction to flip
   */
  flip(t) {
    const n = new On(this.width, this.height, this.bitmap).flip(t);
    return this.bitmap.set(n.u8), this;
  }
  /**
   * @private
   * @param {Image|Frame} image
   * @returns {Image|Frame}
   */
  __apply__(t) {
    return this.__width__ = t.__width__, this.__height__ = t.__height__, this.__view__ = t.__view__, this.__u32__ = t.__u32__, this.bitmap = t.bitmap, t instanceof un ? un.from(this, t.duration, t.xOffset, t.yOffset, t.disposalMode) : this;
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
      let E = r[f], _ = i[f - 1];
      _ === void 0 && (_ = i[f]);
      const D = i[f], $ = this.__gradient__(_, D);
      u.push({ min: d, max: E, gradient: $ });
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
    return (_) => {
      const D = r + _ * u, $ = i + _ * f, ee = o + _ * d, ce = c + _ * E;
      return (D & 255) << 24 | ($ & 255) << 16 | (ee & 255) << 8 | ce & 255;
    };
  }
  fisheye(t = 2) {
    const n = new he(this.width, this.height), r = this.width, i = this.height, o = this.__u32__, c = n.__u32__, u = 1 / r, f = 1 / i;
    for (const [E, _] of this) {
      const D = E * u - 0.5, $ = _ * f - 0.5, ee = Math.sqrt(D ** 2 + $ ** 2), ce = 2 * ee ** t, Ge = (ce * D / ee + 0.5) * r | 0, xe = (ce * $ / ee + 0.5) * i | 0;
      Ge < 1 || Ge > r || xe < 1 || xe > i || isNaN(Ge) || isNaN(xe) || (c[_ * r + E] = o[r * xe + Ge]);
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
    comment: _
  } = {}) {
    return uh.encode(this.bitmap, {
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
        Software: u === void 0 ? `github.com/matmen/ImageScript v${hh}` : u,
        Disclaimer: f,
        Warning: d,
        Source: E,
        Comment: _
      }
    });
  }
  /**
   * Encodes the image into a JPEG
   * @param {number} [quality=90] The JPEG quality to use (1-100)
   * @return {Promise<Uint8Array>}
   */
  async encodeJPEG(t = 90) {
    return mo.jpeg.encode_async(this.bitmap, {
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
    return mo.webp.encode_async(this.bitmap, {
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
    t = jl.view(t);
    const r = new DataView(t.buffer, t.byteOffset, t.byteLength);
    if (Nr.isPNG(r)) {
      const { width: i, height: o, framebuffer: c } = (await gh.init()).decode(t);
      n = new he(i, o), n.bitmap.set(c);
    } else if (Nr.isJPEG(r)) {
      const i = (await _h.init()).decode(t), o = i.width, c = i.height, u = i.format;
      n = new he(o, c);
      const f = i.buffer;
      if (u === 0) {
        const d = new DataView(n.bitmap.buffer);
        for (let E = 0; E < f.length; E++) {
          const _ = f[E];
          d.setUint32(E * 4, _ << 24 | _ << 16 | _ << 8 | 255, !1);
        }
      } else if (u === 1) {
        n.bitmap.fill(255);
        for (let d = 0; d < o * c; d++)
          n.bitmap.set(f.subarray(d * 3, d * 3 + 3), d * 4);
      } else if (u === 2)
        for (let d = 0; d < f.length; d += 4)
          n.bitmap[d] = 255 * (1 - f[d] / 255) * (1 - f[d + 3] / 255), n.bitmap[d + 1] = 255 * (1 - f[d + 1] / 255) * (1 - f[d + 3] / 255), n.bitmap[d + 2] = 255 * (1 - f[d + 2] / 255) * (1 - f[d + 3] / 255), n.bitmap[d + 3] = 255;
    } else if (Nr.isTIFF(r)) {
      const i = (await wh.init()).decode(t);
      n = new he(i.width, i.height), n.bitmap.set(i.buffer);
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
    const i = (await dh.init()).rasterize(t, r, n), o = new he(i.width, i.height);
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
  static async renderText(t, n, r, i = 4294967295, o = new Hl()) {
    const { Font: c, Layout: u } = await vh.init();
    t = new c(n, t);
    const [f, d, E, _] = he.colorToRGBA(i), D = new u();
    D.reset({
      max_width: o.maxWidth,
      max_height: o.maxHeight,
      wrap_style: o.wrapStyle,
      vertical_align: o.verticalAlign,
      horizontal_align: o.horizontalAlign,
      wrap_hard_breaks: o.wrapHardBreaks
    }), D.append(t, r, { scale: n });
    const $ = D.rasterize(f, d, E), ee = new he($.width, $.height);
    return ee.bitmap.set($.buffer), ee.height > o.maxHeight && ee.crop(0, 0, ee.width, Math.floor(D.lines() / ee.height * o.maxHeight) * (ee.height / D.lines())), t.free(), D.free(), ee.opacity(_ / 255);
  }
}
class un extends he {
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
  constructor(t, n, r = 100, i = 0, o = 0, c = un.DISPOSAL_KEEP) {
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
    this.__disposalMode__ = un.__convert_disposal_mode__(t);
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
  static from(t, n, r, i, o = un.DISPOSAL_KEEP) {
    if (!(t instanceof he))
      throw new TypeError("Invalid image passed");
    const c = new un(t.width, t.height, n, r, i, o);
    return c.bitmap.set(t.bitmap), c;
  }
  resize(t, n, r = he.RESIZE_NEAREST_NEIGHBOR) {
    const i = this.width, o = this.height, c = super.resize(t, n, r);
    return this.xOffset *= c.width / i, this.yOffset *= c.height / o, c;
  }
}
class kr extends Array {
  /**
   * Creates a new GIF image.
   * @param {Frame[]} frames The frames to create the GIF from
   * @param {number} [loopCount=-1] How often to loop the GIF for (-1 = unlimited)
   * @property {number} loopCount How often the GIF will loop for
   */
  constructor(t, n = -1) {
    super(...t);
    for (const r of this)
      if (!(r instanceof un))
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
    return new kr(r, this.loopCount);
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
    const n = new mo.gif.encoder(this.width, this.height);
    for (const r of this) {
      if (!(r instanceof un))
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
    t = jl.view(t);
    const i = new DataView(t.buffer, t.byteOffset, t.byteLength);
    if (Nr.isGIF(i)) {
      const o = [], c = new (await ph.init()).Decoder(t), u = c.width | 0, f = c.height | 0, d = new Uint32Array(c.width * c.height), E = new Uint8Array(d.buffer, d.byteOffset, d.byteLength);
      for (const _ of c.frames()) {
        let D = 0, $ = 0;
        const ee = _.x | 0, ce = _.y | 0, Ge = _.buffer, xe = _.dispose, Ae = _.width | 0, Pe = _.height | 0, je = new Uint32Array(Ge.buffer, Ge.byteOffset, Ae * Pe), Se = o[o.push(new un(u, f, 10 * _.delay, 0, 0, 3)) - 1].bitmap, ae = new Uint32Array(Se.buffer);
        if (Se.set(E), xe === 2)
          for (let be = 0; be < Pe; be++) {
            const Le = ee + u * (be + ce) | 0;
            for (let We = 0; We < Ae; We++) {
              const tt = We + Le;
              Ge[3 + D] === 0 ? ae[tt] = d[tt] : ae[tt] = je[$], $++, D += 4;
            }
          }
        else if (xe === 3)
          for (let be = 0; be < Pe; be++) {
            const Le = ee + u * (be + ce) | 0;
            for (let We = 0; We < Ae; We++) {
              const tt = We + Le;
              Ge[3 + D] === 0 ? ae[tt] = d[tt] : ae[tt] = je[$], $++, D += 4, d[tt] = 0;
            }
          }
        else if (xe === 0 || xe === 1) {
          Se.set(E);
          for (let be = 0; be < Pe; be++) {
            const Le = ee + u * (be + ce) | 0;
            for (let We = 0; We < Ae; We++) {
              const tt = We + Le;
              Ge[3 + D] === 0 ? ae[tt] = d[tt] : ae[tt] = je[$], $++, D += 4, d[tt] = ae[tt];
            }
          }
        }
        if (n)
          break;
      }
      r = new kr(o);
    } else
      throw new Error("Unsupported image type");
    return r;
  }
  resize(t, n, r = he.RESIZE_NEAREST_NEIGHBOR) {
    for (const i of this)
      i.resize(t, n, r);
  }
}
class Hl {
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
class Nr {
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
    return t.getUint32(0, !1) === si.PNG;
  }
  /**
   * @param {DataView} view
   * @returns {boolean}
   */
  static isJPEG(t) {
    return t.getUint32(0, !1) >>> 8 === si.JPEG;
  }
  /**
   * @param {DataView} view
   * @returns {boolean}
   */
  static isTIFF(t) {
    return t.getUint32(0, !1) === si.TIFF;
  }
  /**
   * @param {DataView} view
   * @returns {boolean}
   */
  static isGIF(t) {
    return t.getUint32(0, !1) >>> 8 === si.GIF;
  }
}
function mh(e, t) {
  return Nr.getType(e) === "gif" ? kr.decode(e, t) : he.decode(e);
}
var Ms = { Image: he, GIF: kr, Frame: un, TextLayout: Hl, ImageType: Nr, decode: mh };
const yh = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, i] of t)
    n[r] = i;
  return n;
}, Eh = {
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
        await new Promise((E, _) => {
          function D() {
            if (c.gifRangeSelector) {
              const Ae = c.gifRangeOpt;
              t.ctx.drawImage(e, Ae.x, Ae.y, Ae.width, Ae.height, 0, 0, t.width, t.height);
            } else
              t.ctx.drawImage(e, 0, 0, t.width, t.height);
            const ee = t.ctx.getImageData(0, 0, t.width, t.height), ce = Date.now(), Ge = ce - o, xe = c.frameDiff(ee, r);
            if (n.length && (n[n.length - 1].duration = Ge), xe !== 0) {
              const Ae = new Ms.Frame(xe.diffImageData.width, xe.diffImageData.height, i, xe.x, xe.y);
              Ae.bitmap = xe.diffImageData.data, n.push(Ae), r = ee, o = ce;
            }
          }
          D();
          const $ = setInterval(async () => {
            (e.currentTime >= this.gifTime[1] || !this.gifRecording) && (clearInterval($), e.pause(), this.gifRecording ? E() : _("abort")), D();
          }, i);
        });
        const u = new Ms.GIF(n, this.gifLoop ? -1 : 0);
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
}, bh = ["actived"], Nh = { id: "time_tool" }, Oh = ["value"], xh = {
  key: 0,
  id: "row1"
}, Ah = ["actived"], Dh = { title: "GIF缩放" }, Sh = ["actived"], Vh = {
  title: "正在录制",
  class: "fadeLoop"
}, Rh = {
  title: "正在编码",
  class: "fadeLoop"
}, Th = {
  id: "row2",
  style: { display: "flex" }
}, Mh = ["max"], Ch = ["max"], Ih = ["max"], Uh = ["max"], Ph = { ref: "canvas" }, $h = { ref: "img" };
function Fh(e, t, n, r, i, o) {
  return Tr(), oi(ln, null, [
    i.showing && i.gifRangeSelector ? (Tr(), oi("div", {
      key: 0,
      id: "range_selector",
      style: Gn(o.gifRangeSelectorStyle())
    }, null, 4)) : Bi("", !0),
    i.showing == "toolbar" ? (Tr(), oi("div", {
      key: 1,
      id: "jia-video-tool",
      style: Gn({ left: i.x + "px", top: i.y + "px" }),
      onDrag: t[25] || (t[25] = () => {
      })
    }, [
      He("div", null, [
        He("div", {
          title: "截图",
          onClick: t[0] || (t[0] = (...c) => o.screenshot && o.screenshot(...c)),
          opt: ""
        }, "📷"),
        He("div", {
          title: "截取GIF",
          actived: i.tool == "gif",
          onClick: t[1] || (t[1] = (c) => i.tool = i.tool === "gif" ? "" : "gif"),
          opt: ""
        }, " ✂", 8, bh),
        He("div", Nh, [
          He("div", {
            title: "时间微调←",
            onClick: t[2] || (t[2] = (c) => o.timeOffset(-1)),
            opt: ""
          }, "◀️"),
          He("div", {
            title: "时间微调→",
            onClick: t[3] || (t[3] = (c) => o.timeOffset(1)),
            opt: ""
          }, "▶️"),
          He("input", {
            title: "当前视频时间（秒）",
            value: i.time,
            type: "text",
            onChange: t[4] || (t[4] = (c) => o.setTime(c.target.value)),
            onWheel: t[5] || (t[5] = (c) => o.wheelTime(c)),
            style: Gn(o.fitInputValue(i.time))
          }, null, 44, Oh)
        ]),
        He("div", {
          onClick: t[6] || (t[6] = (...c) => o.hide && o.hide(...c)),
          opt: ""
        }, "❌")
      ]),
      i.tool == "gif" ? (Tr(), oi("div", xh, [
        He("div", {
          title: "设置开始时间",
          opt: "",
          onClick: t[7] || (t[7] = (c) => i.gifTime[0] = o.getTime())
        }, "⏺️"),
        He("div", {
          title: "设置结束时间",
          opt: "",
          onClick: t[8] || (t[8] = (c) => i.gifTime[1] = o.getTime())
        }, "⏹️"),
        He("div", null, [
          Zt(He("input", {
            "onUpdate:modelValue": t[9] || (t[9] = (c) => i.gifTime[0] = c),
            placeholder: "start",
            style: Gn(o.fitInputValue(i.gifTime[0])),
            onDblclick: t[10] || (t[10] = (c) => o.setTime(o.tText(i.gifTime[0])))
          }, null, 36), [
            [er, i.gifTime[0]]
          ])
        ]),
        He("div", null, [
          Zt(He("input", {
            "onUpdate:modelValue": t[11] || (t[11] = (c) => i.gifTime[1] = c),
            placeholder: "end",
            style: Gn(o.fitInputValue(i.gifTime[1])),
            onDblclick: t[12] || (t[12] = (c) => o.setTime(o.tText(i.gifTime[1])))
          }, null, 36), [
            [er, i.gifTime[1]]
          ])
        ]),
        He("div", {
          title: "GIF循环",
          opt: "",
          actived: i.gifLoop,
          onClick: t[13] || (t[13] = (c) => i.gifLoop = !i.gifLoop)
        }, "🔁", 8, Ah),
        He("div", Dh, [
          go("🔍"),
          Zt(He("input", {
            type: "number",
            max: "1",
            min: "0.1",
            step: "0.1",
            "onUpdate:modelValue": t[14] || (t[14] = (c) => i.gifScale = c),
            style: { width: "2.5em" }
          }, null, 512), [
            [er, i.gifScale]
          ])
        ]),
        He("div", {
          title: "框选区域",
          opt: "",
          actived: i.gifRangeSelector,
          onClick: t[15] || (t[15] = (c) => i.gifRangeSelector = !i.gifRangeSelector)
        }, "🔲", 8, Sh),
        Zt(He("div", {
          title: "开始录制",
          opt: "",
          onClick: t[16] || (t[16] = (...c) => o.startRecordGIF && o.startRecordGIF(...c))
        }, "✅ ", 512), [
          [kn, !i.gifEncoding && !i.gifRecording]
        ]),
        Zt(He("div", Vh, "🎦", 512), [
          [kn, i.gifRecording]
        ]),
        Zt(He("div", Rh, "🕒", 512), [
          [kn, i.gifEncoding]
        ])
      ])) : Bi("", !0),
      Zt(He("div", Th, [
        go(" 范围: "),
        Zt(He("input", {
          title: "x(滚轮调整)",
          placeholder: "x",
          "onUpdate:modelValue": t[17] || (t[17] = (c) => i.gifRangeOpt.x = c),
          type: "number",
          min: "0",
          step: "1",
          max: i.video.videoWidth - i.gifRangeOpt.width,
          onWheel: t[18] || (t[18] = (c) => o.wheelNumber(c, "x"))
        }, null, 40, Mh), [
          [er, i.gifRangeOpt.x]
        ]),
        Zt(He("input", {
          title: "y(滚轮调整)",
          placeholder: "y",
          "onUpdate:modelValue": t[19] || (t[19] = (c) => i.gifRangeOpt.y = c),
          type: "number",
          min: "0",
          step: "1",
          max: i.video.videoHeight - i.gifRangeOpt.height,
          onWheel: t[20] || (t[20] = (c) => o.wheelNumber(c, "y"))
        }, null, 40, Ch), [
          [er, i.gifRangeOpt.y]
        ]),
        Zt(He("input", {
          title: "width(滚轮调整)",
          placeholder: "width",
          "onUpdate:modelValue": t[21] || (t[21] = (c) => i.gifRangeOpt.width = c),
          type: "number",
          max: i.video.videoWidth - i.gifRangeOpt.x + 1,
          onWheel: t[22] || (t[22] = (c) => o.wheelNumber(c, "width")),
          min: "0",
          step: "1"
        }, null, 40, Ih), [
          [er, i.gifRangeOpt.width]
        ]),
        Zt(He("input", {
          title: "height(滚轮调整)",
          placeholder: "height",
          "onUpdate:modelValue": t[23] || (t[23] = (c) => i.gifRangeOpt.height = c),
          type: "number",
          max: i.video.videoHeight - i.gifRangeOpt.y + 1,
          onWheel: t[24] || (t[24] = (c) => o.wheelNumber(c, "height")),
          min: "0",
          step: "1"
        }, null, 40, Uh), [
          [er, i.gifRangeOpt.height]
        ])
      ], 512), [
        [kn, i.tool == "gif" && i.gifRangeSelector]
      ])
    ], 36)) : Bi("", !0),
    Zt(He("dialog", {
      ref: "dialog",
      onClick: t[26] || (t[26] = ru((...c) => o.hide && o.hide(...c), ["left"]))
    }, [
      Zt(He("canvas", Ph, null, 512), [
        [kn, i.result === "canvas"]
      ]),
      Zt(He("img", $h, null, 512), [
        [kn, i.result === "img"]
      ])
    ], 512), [
      [kn, i.showing == "result"]
    ])
  ], 64);
}
const Lh = /* @__PURE__ */ yh(Eh, [["render", Fh], ["__scopeId", "data-v-703a244b"]]), kh = su(Lh), yo = document.createElement("div");
yo.style = "position:fixed;top:0;left:0;z-index:2147483647;";
let Pr, _r;
window.addEventListener("mousedown", (e) => {
  if (!(e.button === 2 && e.altKey))
    return;
  e.preventDefault(), e.stopPropagation(), _r && !document.contains(_r) && (_r = null);
  let t = e.target, n;
  if (t.localName === "video" ? n = t : n = t.querySelector("video"), !n) {
    let r = 5;
    for (; r-- && (t = t.parentNode, !(t === document || (n = t.querySelector("video"), n))); )
      ;
  }
  n ? (_r = n, Pr || (document.body.appendChild(yo), Pr = kh.mount(yo)), Pr.show(e.clientX, e.clientY, n, e.shiftKey ? void 0 : "screenshot")) : n = _r;
});
document.addEventListener("contextmenu", (e) => {
  !Pr || !Pr.showing || !e.altKey || (e.preventDefault(), e.stopPropagation());
});
window.addEventListener("keydown", (e) => {
  if (!e.code.startsWith("Arrow") || !(e.ctrlKey || e.shiftKey) || e.repeat)
    return;
  let t, n;
  const r = [...document.querySelectorAll("video")].filter((i) => (i === _r && (n = i), i.duration >= 300));
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
