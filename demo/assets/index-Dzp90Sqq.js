function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/AboutView-DQEAxb3S.js","assets/AboutView-C6Dx7pxG.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Il(t,e){const n=new Set(t.split(","));return e?i=>n.has(i.toLowerCase()):i=>n.has(i)}const ot={},ps=[],sn=()=>{},ng=()=>!1,Do=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Ul=t=>t.startsWith("onUpdate:"),Tt=Object.assign,Dl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},ig=Object.prototype.hasOwnProperty,qe=(t,e)=>ig.call(t,e),Oe=Array.isArray,Ys=t=>Oo(t)==="[object Map]",sg=t=>Oo(t)==="[object Set]",Ve=t=>typeof t=="function",At=t=>typeof t=="string",No=t=>typeof t=="symbol",ht=t=>t!==null&&typeof t=="object",sd=t=>(ht(t)||Ve(t))&&Ve(t.then)&&Ve(t.catch),rg=Object.prototype.toString,Oo=t=>rg.call(t),og=t=>Oo(t).slice(8,-1),ag=t=>Oo(t)==="[object Object]",Nl=t=>At(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,js=Il(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Fo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},lg=/-(\w)/g,Ms=Fo(t=>t.replace(lg,(e,n)=>n?n.toUpperCase():"")),cg=/\B([A-Z])/g,Ps=Fo(t=>t.replace(cg,"-$1").toLowerCase()),rd=Fo(t=>t.charAt(0).toUpperCase()+t.slice(1)),aa=Fo(t=>t?`on${rd(t)}`:""),_i=(t,e)=>!Object.is(t,e),la=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},xo=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},hg=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Pc;const od=()=>Pc||(Pc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ol(t){if(Oe(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=At(i)?pg(i):Ol(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(At(t)||ht(t))return t}const ug=/;(?![^(]*\))/g,dg=/:([^]+)/,fg=/\/\*[^]*?\*\//g;function pg(t){const e={};return t.replace(fg,"").split(ug).forEach(n=>{if(n){const i=n.split(dg);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Fl(t){let e="";if(At(t))e=t;else if(Oe(t))for(let n=0;n<t.length;n++){const i=Fl(t[n]);i&&(e+=i+" ")}else if(ht(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const mg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",gg=Il(mg);function ad(t){return!!t||t===""}/**
* @vue/reactivity v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let cn;class _g{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=cn,!e&&cn&&(this.index=(cn.scopes||(cn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=cn;try{return cn=this,e()}finally{cn=n}}}on(){cn=this}off(){cn=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function vg(t,e=cn){e&&e.active&&e.effects.push(t)}function xg(){return cn}let Oi;class Bl{constructor(e,n,i,s){this.fn=e,this.trigger=n,this.scheduler=i,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,vg(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Vi();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(Eg(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),ki()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=ci,n=Oi;try{return ci=!0,Oi=this,this._runnings++,Ic(this),this.fn()}finally{Uc(this),this._runnings--,Oi=n,ci=e}}stop(){var e;this.active&&(Ic(this),Uc(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function Eg(t){return t.value}function Ic(t){t._trackId++,t._depsLength=0}function Uc(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)ld(t.deps[e],t);t.deps.length=t._depsLength}}function ld(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let ci=!0,ja=0;const cd=[];function Vi(){cd.push(ci),ci=!1}function ki(){const t=cd.pop();ci=t===void 0?!0:t}function zl(){ja++}function Hl(){for(ja--;!ja&&$a.length;)$a.shift()()}function hd(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const i=t.deps[t._depsLength];i!==e?(i&&ld(i,t),t.deps[t._depsLength++]=e):t._depsLength++}}const $a=[];function ud(t,e,n){zl();for(const i of t.keys()){let s;i._dirtyLevel<e&&(s??(s=t.get(i)===i._trackId))&&(i._shouldSchedule||(i._shouldSchedule=i._dirtyLevel===0),i._dirtyLevel=e),i._shouldSchedule&&(s??(s=t.get(i)===i._trackId))&&(i.trigger(),(!i._runnings||i.allowRecurse)&&i._dirtyLevel!==2&&(i._shouldSchedule=!1,i.scheduler&&$a.push(i.scheduler)))}Hl()}const dd=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Ka=new WeakMap,Fi=Symbol(""),Za=Symbol("");function Gt(t,e,n){if(ci&&Oi){let i=Ka.get(t);i||Ka.set(t,i=new Map);let s=i.get(n);s||i.set(n,s=dd(()=>i.delete(n))),hd(Oi,s)}}function Wn(t,e,n,i,s,r){const a=Ka.get(t);if(!a)return;let o=[];if(e==="clear")o=[...a.values()];else if(n==="length"&&Oe(t)){const l=Number(i);a.forEach((c,h)=>{(h==="length"||!No(h)&&h>=l)&&o.push(c)})}else switch(n!==void 0&&o.push(a.get(n)),e){case"add":Oe(t)?Nl(n)&&o.push(a.get("length")):(o.push(a.get(Fi)),Ys(t)&&o.push(a.get(Za)));break;case"delete":Oe(t)||(o.push(a.get(Fi)),Ys(t)&&o.push(a.get(Za)));break;case"set":Ys(t)&&o.push(a.get(Fi));break}zl();for(const l of o)l&&ud(l,4);Hl()}const Mg=Il("__proto__,__v_isRef,__isVue"),fd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(No)),Dc=Sg();function Sg(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=Ye(this);for(let r=0,a=this.length;r<a;r++)Gt(i,"get",r+"");const s=i[e](...n);return s===-1||s===!1?i[e](...n.map(Ye)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Vi(),zl();const i=Ye(this)[e].apply(this,n);return Hl(),ki(),i}}),t}function yg(t){const e=Ye(this);return Gt(e,"has",t),e.hasOwnProperty(t)}class pd{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){const s=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return r;if(n==="__v_raw")return i===(s?r?Og:vd:r?_d:gd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=Oe(e);if(!s){if(a&&qe(Dc,n))return Reflect.get(Dc,n,i);if(n==="hasOwnProperty")return yg}const o=Reflect.get(e,n,i);return(No(n)?fd.has(n):Mg(n))||(s||Gt(e,"get",n),r)?o:Wt(o)?a&&Nl(n)?o:o.value:ht(o)?s?Ed(o):zo(o):o}}class md extends pd{constructor(e=!1){super(!1,e)}set(e,n,i,s){let r=e[n];if(!this._isShallow){const l=Ss(r);if(!Eo(i)&&!Ss(i)&&(r=Ye(r),i=Ye(i)),!Oe(e)&&Wt(r)&&!Wt(i))return l?!1:(r.value=i,!0)}const a=Oe(e)&&Nl(n)?Number(n)<e.length:qe(e,n),o=Reflect.set(e,n,i,s);return e===Ye(s)&&(a?_i(i,r)&&Wn(e,"set",n,i):Wn(e,"add",n,i)),o}deleteProperty(e,n){const i=qe(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&i&&Wn(e,"delete",n,void 0),s}has(e,n){const i=Reflect.has(e,n);return(!No(n)||!fd.has(n))&&Gt(e,"has",n),i}ownKeys(e){return Gt(e,"iterate",Oe(e)?"length":Fi),Reflect.ownKeys(e)}}class wg extends pd{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const bg=new md,Tg=new wg,Ag=new md(!0),Vl=t=>t,Bo=t=>Reflect.getPrototypeOf(t);function Ur(t,e,n=!1,i=!1){t=t.__v_raw;const s=Ye(t),r=Ye(e);n||(_i(e,r)&&Gt(s,"get",e),Gt(s,"get",r));const{has:a}=Bo(s),o=i?Vl:n?Wl:cr;if(a.call(s,e))return o(t.get(e));if(a.call(s,r))return o(t.get(r));t!==s&&t.get(e)}function Dr(t,e=!1){const n=this.__v_raw,i=Ye(n),s=Ye(t);return e||(_i(t,s)&&Gt(i,"has",t),Gt(i,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Nr(t,e=!1){return t=t.__v_raw,!e&&Gt(Ye(t),"iterate",Fi),Reflect.get(t,"size",t)}function Nc(t){t=Ye(t);const e=Ye(this);return Bo(e).has.call(e,t)||(e.add(t),Wn(e,"add",t,t)),this}function Oc(t,e){e=Ye(e);const n=Ye(this),{has:i,get:s}=Bo(n);let r=i.call(n,t);r||(t=Ye(t),r=i.call(n,t));const a=s.call(n,t);return n.set(t,e),r?_i(e,a)&&Wn(n,"set",t,e):Wn(n,"add",t,e),this}function Fc(t){const e=Ye(this),{has:n,get:i}=Bo(e);let s=n.call(e,t);s||(t=Ye(t),s=n.call(e,t)),i&&i.call(e,t);const r=e.delete(t);return s&&Wn(e,"delete",t,void 0),r}function Bc(){const t=Ye(this),e=t.size!==0,n=t.clear();return e&&Wn(t,"clear",void 0,void 0),n}function Or(t,e){return function(i,s){const r=this,a=r.__v_raw,o=Ye(a),l=e?Vl:t?Wl:cr;return!t&&Gt(o,"iterate",Fi),a.forEach((c,h)=>i.call(s,l(c),l(h),r))}}function Fr(t,e,n){return function(...i){const s=this.__v_raw,r=Ye(s),a=Ys(r),o=t==="entries"||t===Symbol.iterator&&a,l=t==="keys"&&a,c=s[t](...i),h=n?Vl:e?Wl:cr;return!e&&Gt(r,"iterate",l?Za:Fi),{next(){const{value:u,done:d}=c.next();return d?{value:u,done:d}:{value:o?[h(u[0]),h(u[1])]:h(u),done:d}},[Symbol.iterator](){return this}}}}function jn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Rg(){const t={get(r){return Ur(this,r)},get size(){return Nr(this)},has:Dr,add:Nc,set:Oc,delete:Fc,clear:Bc,forEach:Or(!1,!1)},e={get(r){return Ur(this,r,!1,!0)},get size(){return Nr(this)},has:Dr,add:Nc,set:Oc,delete:Fc,clear:Bc,forEach:Or(!1,!0)},n={get(r){return Ur(this,r,!0)},get size(){return Nr(this,!0)},has(r){return Dr.call(this,r,!0)},add:jn("add"),set:jn("set"),delete:jn("delete"),clear:jn("clear"),forEach:Or(!0,!1)},i={get(r){return Ur(this,r,!0,!0)},get size(){return Nr(this,!0)},has(r){return Dr.call(this,r,!0)},add:jn("add"),set:jn("set"),delete:jn("delete"),clear:jn("clear"),forEach:Or(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Fr(r,!1,!1),n[r]=Fr(r,!0,!1),e[r]=Fr(r,!1,!0),i[r]=Fr(r,!0,!0)}),[t,n,e,i]}const[Cg,Lg,Pg,Ig]=Rg();function kl(t,e){const n=e?t?Ig:Pg:t?Lg:Cg;return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(qe(n,s)&&s in i?n:i,s,r)}const Ug={get:kl(!1,!1)},Dg={get:kl(!1,!0)},Ng={get:kl(!0,!1)},gd=new WeakMap,_d=new WeakMap,vd=new WeakMap,Og=new WeakMap;function Fg(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Bg(t){return t.__v_skip||!Object.isExtensible(t)?0:Fg(og(t))}function zo(t){return Ss(t)?t:Gl(t,!1,bg,Ug,gd)}function xd(t){return Gl(t,!1,Ag,Dg,_d)}function Ed(t){return Gl(t,!0,Tg,Ng,vd)}function Gl(t,e,n,i,s){if(!ht(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=s.get(t);if(r)return r;const a=Bg(t);if(a===0)return t;const o=new Proxy(t,a===2?i:n);return s.set(t,o),o}function ms(t){return Ss(t)?ms(t.__v_raw):!!(t&&t.__v_isReactive)}function Ss(t){return!!(t&&t.__v_isReadonly)}function Eo(t){return!!(t&&t.__v_isShallow)}function Md(t){return ms(t)||Ss(t)}function Ye(t){const e=t&&t.__v_raw;return e?Ye(e):t}function Sd(t){return Object.isExtensible(t)&&xo(t,"__v_skip",!0),t}const cr=t=>ht(t)?zo(t):t,Wl=t=>ht(t)?Ed(t):t;class yd{constructor(e,n,i,s){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Bl(()=>e(this._value),()=>lo(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=Ye(this);return(!e._cacheable||e.effect.dirty)&&_i(e._value,e._value=e.effect.run())&&lo(e,4),wd(e),e.effect._dirtyLevel>=2&&lo(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function zg(t,e,n=!1){let i,s;const r=Ve(t);return r?(i=t,s=sn):(i=t.get,s=t.set),new yd(i,s,r||!s,n)}function wd(t){var e;ci&&Oi&&(t=Ye(t),hd(Oi,(e=t.dep)!=null?e:t.dep=dd(()=>t.dep=void 0,t instanceof yd?t:void 0)))}function lo(t,e=4,n){t=Ye(t);const i=t.dep;i&&ud(i,e)}function Wt(t){return!!(t&&t.__v_isRef===!0)}function Hg(t){return bd(t,!1)}function Vg(t){return bd(t,!0)}function bd(t,e){return Wt(t)?t:new kg(t,e)}class kg{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Ye(e),this._value=n?e:cr(e)}get value(){return wd(this),this._value}set value(e){const n=this.__v_isShallow||Eo(e)||Ss(e);e=n?e:Ye(e),_i(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:cr(e),lo(this,4))}}function gs(t){return Wt(t)?t.value:t}const Gg={get:(t,e,n)=>gs(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return Wt(s)&&!Wt(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function Td(t){return ms(t)?t:new Proxy(t,Gg)}/**
* @vue/runtime-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function hi(t,e,n,i){try{return i?t(...i):t()}catch(s){Ho(s,e,n)}}function pn(t,e,n,i){if(Ve(t)){const r=hi(t,e,n,i);return r&&sd(r)&&r.catch(a=>{Ho(a,e,n)}),r}const s=[];for(let r=0;r<t.length;r++)s.push(pn(t[r],e,n,i));return s}function Ho(t,e,n,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const a=e.proxy,o=`https://vuejs.org/error-reference/#runtime-${n}`;for(;r;){const c=r.ec;if(c){for(let h=0;h<c.length;h++)if(c[h](t,a,o)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){hi(l,null,10,[t,a,o]);return}}Wg(t,n,s,i)}function Wg(t,e,n,i=!0){console.error(t)}let hr=!1,Ja=!1;const Pt=[];let wn=0;const _s=[];let ni=null,Ui=0;const Ad=Promise.resolve();let Xl=null;function Rd(t){const e=Xl||Ad;return t?e.then(this?t.bind(this):t):e}function Xg(t){let e=wn+1,n=Pt.length;for(;e<n;){const i=e+n>>>1,s=Pt[i],r=ur(s);r<t||r===t&&s.pre?e=i+1:n=i}return e}function ql(t){(!Pt.length||!Pt.includes(t,hr&&t.allowRecurse?wn+1:wn))&&(t.id==null?Pt.push(t):Pt.splice(Xg(t.id),0,t),Cd())}function Cd(){!hr&&!Ja&&(Ja=!0,Xl=Ad.then(Pd))}function qg(t){const e=Pt.indexOf(t);e>wn&&Pt.splice(e,1)}function Yg(t){Oe(t)?_s.push(...t):(!ni||!ni.includes(t,t.allowRecurse?Ui+1:Ui))&&_s.push(t),Cd()}function zc(t,e,n=hr?wn+1:0){for(;n<Pt.length;n++){const i=Pt[n];if(i&&i.pre){if(t&&i.id!==t.uid)continue;Pt.splice(n,1),n--,i()}}}function Ld(t){if(_s.length){const e=[...new Set(_s)].sort((n,i)=>ur(n)-ur(i));if(_s.length=0,ni){ni.push(...e);return}for(ni=e,Ui=0;Ui<ni.length;Ui++)ni[Ui]();ni=null,Ui=0}}const ur=t=>t.id==null?1/0:t.id,jg=(t,e)=>{const n=ur(t)-ur(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Pd(t){Ja=!1,hr=!0,Pt.sort(jg);try{for(wn=0;wn<Pt.length;wn++){const e=Pt[wn];e&&e.active!==!1&&hi(e,null,14)}}finally{wn=0,Pt.length=0,Ld(),hr=!1,Xl=null,(Pt.length||_s.length)&&Pd()}}function $g(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||ot;let s=n;const r=e.startsWith("update:"),a=r&&e.slice(7);if(a&&a in i){const h=`${a==="modelValue"?"model":a}Modifiers`,{number:u,trim:d}=i[h]||ot;d&&(s=n.map(p=>At(p)?p.trim():p)),u&&(s=n.map(hg))}let o,l=i[o=aa(e)]||i[o=aa(Ms(e))];!l&&r&&(l=i[o=aa(Ps(e))]),l&&pn(l,t,6,s);const c=i[o+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[o])return;t.emitted[o]=!0,pn(c,t,6,s)}}function Id(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let a={},o=!1;if(!Ve(t)){const l=c=>{const h=Id(c,e,!0);h&&(o=!0,Tt(a,h))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!o?(ht(t)&&i.set(t,null),null):(Oe(r)?r.forEach(l=>a[l]=null):Tt(a,r),ht(t)&&i.set(t,a),a)}function Vo(t,e){return!t||!Do(e)?!1:(e=e.slice(2).replace(/Once$/,""),qe(t,e[0].toLowerCase()+e.slice(1))||qe(t,Ps(e))||qe(t,e))}let Tn=null,Ud=null;function Mo(t){const e=Tn;return Tn=t,Ud=t&&t.type.__scopeId||null,e}function Kg(t,e=Tn,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&$c(-1);const r=Mo(e);let a;try{a=t(...s)}finally{Mo(r),i._d&&$c(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function ca(t){const{type:e,vnode:n,proxy:i,withProxy:s,props:r,propsOptions:[a],slots:o,attrs:l,emit:c,render:h,renderCache:u,data:d,setupState:p,ctx:_,inheritAttrs:v}=t;let m,f;const y=Mo(t);try{if(n.shapeFlag&4){const R=s||i,O=R;m=Sn(h.call(O,R,u,r,p,d,_)),f=l}else{const R=e;m=Sn(R.length>1?R(r,{attrs:l,slots:o,emit:c}):R(r,null)),f=e.props?l:Zg(l)}}catch(R){Zs.length=0,Ho(R,t,1),m=jt(dr)}let E=m;if(f&&v!==!1){const R=Object.keys(f),{shapeFlag:O}=E;R.length&&O&7&&(a&&R.some(Ul)&&(f=Jg(f,a)),E=ys(E,f))}return n.dirs&&(E=ys(E),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&(E.transition=n.transition),m=E,Mo(y),m}const Zg=t=>{let e;for(const n in t)(n==="class"||n==="style"||Do(n))&&((e||(e={}))[n]=t[n]);return e},Jg=(t,e)=>{const n={};for(const i in t)(!Ul(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function Qg(t,e,n){const{props:i,children:s,component:r}=t,{props:a,children:o,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Hc(i,a,c):!!a;if(l&8){const h=e.dynamicProps;for(let u=0;u<h.length;u++){const d=h[u];if(a[d]!==i[d]&&!Vo(c,d))return!0}}}else return(s||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?Hc(i,a,c):!0:!!a;return!1}function Hc(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==t[r]&&!Vo(n,r))return!0}return!1}function e_({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const t_=Symbol.for("v-ndc"),n_=t=>t.__isSuspense;function i_(t,e){e&&e.pendingBranch?Oe(t)?e.effects.push(...t):e.effects.push(t):Yg(t)}const s_=Symbol.for("v-scx"),r_=()=>Xn(s_),Br={};function co(t,e,n){return Dd(t,e,n)}function Dd(t,e,{immediate:n,deep:i,flush:s,once:r,onTrack:a,onTrigger:o}=ot){if(e&&r){const C=e;e=(...P)=>{C(...P),O()}}const l=Bt,c=C=>i===!0?C:cs(C,i===!1?1:void 0);let h,u=!1,d=!1;if(Wt(t)?(h=()=>t.value,u=Eo(t)):ms(t)?(h=()=>c(t),u=!0):Oe(t)?(d=!0,u=t.some(C=>ms(C)||Eo(C)),h=()=>t.map(C=>{if(Wt(C))return C.value;if(ms(C))return c(C);if(Ve(C))return hi(C,l,2)})):Ve(t)?e?h=()=>hi(t,l,2):h=()=>(p&&p(),pn(t,l,3,[_])):h=sn,e&&i){const C=h;h=()=>cs(C())}let p,_=C=>{p=E.onStop=()=>{hi(C,l,4),p=E.onStop=void 0}},v;if(Xo)if(_=sn,e?n&&pn(e,l,3,[h(),d?[]:void 0,_]):h(),s==="sync"){const C=r_();v=C.__watcherHandles||(C.__watcherHandles=[])}else return sn;let m=d?new Array(t.length).fill(Br):Br;const f=()=>{if(!(!E.active||!E.dirty))if(e){const C=E.run();(i||u||(d?C.some((P,ie)=>_i(P,m[ie])):_i(C,m)))&&(p&&p(),pn(e,l,3,[C,m===Br?void 0:d&&m[0]===Br?[]:m,_]),m=C)}else E.run()};f.allowRecurse=!!e;let y;s==="sync"?y=f:s==="post"?y=()=>Ht(f,l&&l.suspense):(f.pre=!0,l&&(f.id=l.uid),y=()=>ql(f));const E=new Bl(h,sn,y),R=xg(),O=()=>{E.stop(),R&&Dl(R.effects,E)};return e?n?f():m=E.run():s==="post"?Ht(E.run.bind(E),l&&l.suspense):E.run(),v&&v.push(O),O}function o_(t,e,n){const i=this.proxy,s=At(t)?t.includes(".")?Nd(i,t):()=>i[t]:t.bind(i,i);let r;Ve(e)?r=e:(r=e.handler,n=e);const a=Sr(this),o=Dd(s,r.bind(i),n);return a(),o}function Nd(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}function cs(t,e,n=0,i){if(!ht(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(i=i||new Set,i.has(t))return t;if(i.add(t),Wt(t))cs(t.value,e,n,i);else if(Oe(t))for(let s=0;s<t.length;s++)cs(t[s],e,n,i);else if(sg(t)||Ys(t))t.forEach(s=>{cs(s,e,n,i)});else if(ag(t))for(const s in t)cs(t[s],e,n,i);return t}function bi(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let a=0;a<s.length;a++){const o=s[a];r&&(o.oldValue=r[a].value);let l=o.dir[i];l&&(Vi(),pn(l,n,8,[t.el,o,t,e]),ki())}}/*! #__NO_SIDE_EFFECTS__ */function Mr(t,e){return Ve(t)?Tt({name:t.name},e,{setup:t}):t}const ho=t=>!!t.type.__asyncLoader,Od=t=>t.type.__isKeepAlive;function a_(t,e){Fd(t,"a",e)}function l_(t,e){Fd(t,"da",e)}function Fd(t,e,n=Bt){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ko(e,i,n),n){let s=n.parent;for(;s&&s.parent;)Od(s.parent.vnode)&&c_(i,e,n,s),s=s.parent}}function c_(t,e,n,i){const s=ko(e,t,i,!0);zd(()=>{Dl(i[e],s)},n)}function ko(t,e,n=Bt,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...a)=>{if(n.isUnmounted)return;Vi();const o=Sr(n),l=pn(e,n,t,a);return o(),ki(),l});return i?s.unshift(r):s.push(r),r}}const Yn=t=>(e,n=Bt)=>(!Xo||t==="sp")&&ko(t,(...i)=>e(...i),n),h_=Yn("bm"),Bd=Yn("m"),u_=Yn("bu"),d_=Yn("u"),f_=Yn("bum"),zd=Yn("um"),p_=Yn("sp"),m_=Yn("rtg"),g_=Yn("rtc");function __(t,e=Bt){ko("ec",t,e)}const Qa=t=>t?Qd(t)?Zl(t)||t.proxy:Qa(t.parent):null,$s=Tt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Qa(t.parent),$root:t=>Qa(t.root),$emit:t=>t.emit,$options:t=>Yl(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,ql(t.update)}),$nextTick:t=>t.n||(t.n=Rd.bind(t.proxy)),$watch:t=>o_.bind(t)}),ha=(t,e)=>t!==ot&&!t.__isScriptSetup&&qe(t,e),v_={get({_:t},e){const{ctx:n,setupState:i,data:s,props:r,accessCache:a,type:o,appContext:l}=t;let c;if(e[0]!=="$"){const p=a[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(ha(i,e))return a[e]=1,i[e];if(s!==ot&&qe(s,e))return a[e]=2,s[e];if((c=t.propsOptions[0])&&qe(c,e))return a[e]=3,r[e];if(n!==ot&&qe(n,e))return a[e]=4,n[e];el&&(a[e]=0)}}const h=$s[e];let u,d;if(h)return e==="$attrs"&&Gt(t,"get",e),h(t);if((u=o.__cssModules)&&(u=u[e]))return u;if(n!==ot&&qe(n,e))return a[e]=4,n[e];if(d=l.config.globalProperties,qe(d,e))return d[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return ha(s,e)?(s[e]=n,!0):i!==ot&&qe(i,e)?(i[e]=n,!0):qe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:r}},a){let o;return!!n[a]||t!==ot&&qe(t,a)||ha(e,a)||(o=r[0])&&qe(o,a)||qe(i,a)||qe($s,a)||qe(s.config.globalProperties,a)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:qe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Vc(t){return Oe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let el=!0;function x_(t){const e=Yl(t),n=t.proxy,i=t.ctx;el=!1,e.beforeCreate&&kc(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:a,watch:o,provide:l,inject:c,created:h,beforeMount:u,mounted:d,beforeUpdate:p,updated:_,activated:v,deactivated:m,beforeDestroy:f,beforeUnmount:y,destroyed:E,unmounted:R,render:O,renderTracked:C,renderTriggered:P,errorCaptured:ie,serverPrefetch:me,expose:M,inheritAttrs:T,components:oe,directives:ue,filters:N}=e;if(c&&E_(c,i,null),a)for(const J in a){const X=a[J];Ve(X)&&(i[J]=X.bind(n))}if(s){const J=s.call(n,n);ht(J)&&(t.data=zo(J))}if(el=!0,r)for(const J in r){const X=r[J],ee=Ve(X)?X.bind(n,n):Ve(X.get)?X.get.bind(n,n):sn,le=!Ve(X)&&Ve(X.set)?X.set.bind(n):sn,ae=hn({get:ee,set:le});Object.defineProperty(i,J,{enumerable:!0,configurable:!0,get:()=>ae.value,set:xe=>ae.value=xe})}if(o)for(const J in o)Hd(o[J],i,n,J);if(l){const J=Ve(l)?l.call(n):l;Reflect.ownKeys(J).forEach(X=>{uo(X,J[X])})}h&&kc(h,t,"c");function k(J,X){Oe(X)?X.forEach(ee=>J(ee.bind(n))):X&&J(X.bind(n))}if(k(h_,u),k(Bd,d),k(u_,p),k(d_,_),k(a_,v),k(l_,m),k(__,ie),k(g_,C),k(m_,P),k(f_,y),k(zd,R),k(p_,me),Oe(M))if(M.length){const J=t.exposed||(t.exposed={});M.forEach(X=>{Object.defineProperty(J,X,{get:()=>n[X],set:ee=>n[X]=ee})})}else t.exposed||(t.exposed={});O&&t.render===sn&&(t.render=O),T!=null&&(t.inheritAttrs=T),oe&&(t.components=oe),ue&&(t.directives=ue)}function E_(t,e,n=sn){Oe(t)&&(t=tl(t));for(const i in t){const s=t[i];let r;ht(s)?"default"in s?r=Xn(s.from||i,s.default,!0):r=Xn(s.from||i):r=Xn(s),Wt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:a=>r.value=a}):e[i]=r}}function kc(t,e,n){pn(Oe(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Hd(t,e,n,i){const s=i.includes(".")?Nd(n,i):()=>n[i];if(At(t)){const r=e[t];Ve(r)&&co(s,r)}else if(Ve(t))co(s,t.bind(n));else if(ht(t))if(Oe(t))t.forEach(r=>Hd(r,e,n,i));else{const r=Ve(t.handler)?t.handler.bind(n):e[t.handler];Ve(r)&&co(s,r,t)}}function Yl(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:a}}=t.appContext,o=r.get(e);let l;return o?l=o:!s.length&&!n&&!i?l=e:(l={},s.length&&s.forEach(c=>So(l,c,a,!0)),So(l,e,a)),ht(e)&&r.set(e,l),l}function So(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&So(t,r,n,!0),s&&s.forEach(a=>So(t,a,n,!0));for(const a in e)if(!(i&&a==="expose")){const o=M_[a]||n&&n[a];t[a]=o?o(t[a],e[a]):e[a]}return t}const M_={data:Gc,props:Wc,emits:Wc,methods:qs,computed:qs,beforeCreate:Ut,created:Ut,beforeMount:Ut,mounted:Ut,beforeUpdate:Ut,updated:Ut,beforeDestroy:Ut,beforeUnmount:Ut,destroyed:Ut,unmounted:Ut,activated:Ut,deactivated:Ut,errorCaptured:Ut,serverPrefetch:Ut,components:qs,directives:qs,watch:y_,provide:Gc,inject:S_};function Gc(t,e){return e?t?function(){return Tt(Ve(t)?t.call(this,this):t,Ve(e)?e.call(this,this):e)}:e:t}function S_(t,e){return qs(tl(t),tl(e))}function tl(t){if(Oe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ut(t,e){return t?[...new Set([].concat(t,e))]:e}function qs(t,e){return t?Tt(Object.create(null),t,e):e}function Wc(t,e){return t?Oe(t)&&Oe(e)?[...new Set([...t,...e])]:Tt(Object.create(null),Vc(t),Vc(e??{})):e}function y_(t,e){if(!t)return e;if(!e)return t;const n=Tt(Object.create(null),t);for(const i in e)n[i]=Ut(t[i],e[i]);return n}function Vd(){return{app:null,config:{isNativeTag:ng,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let w_=0;function b_(t,e){return function(i,s=null){Ve(i)||(i=Tt({},i)),s!=null&&!ht(s)&&(s=null);const r=Vd(),a=new WeakSet;let o=!1;const l=r.app={_uid:w_++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:K_,get config(){return r.config},set config(c){},use(c,...h){return a.has(c)||(c&&Ve(c.install)?(a.add(c),c.install(l,...h)):Ve(c)&&(a.add(c),c(l,...h))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,h){return h?(r.components[c]=h,l):r.components[c]},directive(c,h){return h?(r.directives[c]=h,l):r.directives[c]},mount(c,h,u){if(!o){const d=jt(i,s);return d.appContext=r,u===!0?u="svg":u===!1&&(u=void 0),h&&e?e(d,c):t(d,c,u),o=!0,l._container=c,c.__vue_app__=l,Zl(d.component)||d.component.proxy}},unmount(){o&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,h){return r.provides[c]=h,l},runWithContext(c){const h=Ks;Ks=l;try{return c()}finally{Ks=h}}};return l}}let Ks=null;function uo(t,e){if(Bt){let n=Bt.provides;const i=Bt.parent&&Bt.parent.provides;i===n&&(n=Bt.provides=Object.create(i)),n[t]=e}}function Xn(t,e,n=!1){const i=Bt||Tn;if(i||Ks){const s=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:Ks._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Ve(e)?e.call(i&&i.proxy):e}}function T_(t,e,n,i=!1){const s={},r={};xo(r,Wo,1),t.propsDefaults=Object.create(null),kd(t,e,s,r);for(const a in t.propsOptions[0])a in s||(s[a]=void 0);n?t.props=i?s:xd(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function A_(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:a}}=t,o=Ye(s),[l]=t.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const h=t.vnode.dynamicProps;for(let u=0;u<h.length;u++){let d=h[u];if(Vo(t.emitsOptions,d))continue;const p=e[d];if(l)if(qe(r,d))p!==r[d]&&(r[d]=p,c=!0);else{const _=Ms(d);s[_]=nl(l,o,_,p,t,!1)}else p!==r[d]&&(r[d]=p,c=!0)}}}else{kd(t,e,s,r)&&(c=!0);let h;for(const u in o)(!e||!qe(e,u)&&((h=Ps(u))===u||!qe(e,h)))&&(l?n&&(n[u]!==void 0||n[h]!==void 0)&&(s[u]=nl(l,o,u,void 0,t,!0)):delete s[u]);if(r!==o)for(const u in r)(!e||!qe(e,u))&&(delete r[u],c=!0)}c&&Wn(t,"set","$attrs")}function kd(t,e,n,i){const[s,r]=t.propsOptions;let a=!1,o;if(e)for(let l in e){if(js(l))continue;const c=e[l];let h;s&&qe(s,h=Ms(l))?!r||!r.includes(h)?n[h]=c:(o||(o={}))[h]=c:Vo(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(r){const l=Ye(n),c=o||ot;for(let h=0;h<r.length;h++){const u=r[h];n[u]=nl(s,l,u,c[u],t,!qe(c,u))}}return a}function nl(t,e,n,i,s,r){const a=t[n];if(a!=null){const o=qe(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&Ve(l)){const{propsDefaults:c}=s;if(n in c)i=c[n];else{const h=Sr(s);i=c[n]=l.call(null,e),h()}}else i=l}a[0]&&(r&&!o?i=!1:a[1]&&(i===""||i===Ps(n))&&(i=!0))}return i}function Gd(t,e,n=!1){const i=e.propsCache,s=i.get(t);if(s)return s;const r=t.props,a={},o=[];let l=!1;if(!Ve(t)){const h=u=>{l=!0;const[d,p]=Gd(u,e,!0);Tt(a,d),p&&o.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!r&&!l)return ht(t)&&i.set(t,ps),ps;if(Oe(r))for(let h=0;h<r.length;h++){const u=Ms(r[h]);Xc(u)&&(a[u]=ot)}else if(r)for(const h in r){const u=Ms(h);if(Xc(u)){const d=r[h],p=a[u]=Oe(d)||Ve(d)?{type:d}:Tt({},d);if(p){const _=jc(Boolean,p.type),v=jc(String,p.type);p[0]=_>-1,p[1]=v<0||_<v,(_>-1||qe(p,"default"))&&o.push(u)}}}const c=[a,o];return ht(t)&&i.set(t,c),c}function Xc(t){return t[0]!=="$"&&!js(t)}function qc(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function Yc(t,e){return qc(t)===qc(e)}function jc(t,e){return Oe(e)?e.findIndex(n=>Yc(n,t)):Ve(e)&&Yc(e,t)?0:-1}const Wd=t=>t[0]==="_"||t==="$stable",jl=t=>Oe(t)?t.map(Sn):[Sn(t)],R_=(t,e,n)=>{if(e._n)return e;const i=Kg((...s)=>jl(e(...s)),n);return i._c=!1,i},Xd=(t,e,n)=>{const i=t._ctx;for(const s in t){if(Wd(s))continue;const r=t[s];if(Ve(r))e[s]=R_(s,r,i);else if(r!=null){const a=jl(r);e[s]=()=>a}}},qd=(t,e)=>{const n=jl(e);t.slots.default=()=>n},C_=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Ye(e),xo(e,"_",n)):Xd(e,t.slots={})}else t.slots={},e&&qd(t,e);xo(t.slots,Wo,1)},L_=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,a=ot;if(i.shapeFlag&32){const o=e._;o?n&&o===1?r=!1:(Tt(s,e),!n&&o===1&&delete s._):(r=!e.$stable,Xd(e,s)),a=e}else e&&(qd(t,e),a={default:1});if(r)for(const o in s)!Wd(o)&&a[o]==null&&delete s[o]};function il(t,e,n,i,s=!1){if(Oe(t)){t.forEach((d,p)=>il(d,e&&(Oe(e)?e[p]:e),n,i,s));return}if(ho(i)&&!s)return;const r=i.shapeFlag&4?Zl(i.component)||i.component.proxy:i.el,a=s?null:r,{i:o,r:l}=t,c=e&&e.r,h=o.refs===ot?o.refs={}:o.refs,u=o.setupState;if(c!=null&&c!==l&&(At(c)?(h[c]=null,qe(u,c)&&(u[c]=null)):Wt(c)&&(c.value=null)),Ve(l))hi(l,o,12,[a,h]);else{const d=At(l),p=Wt(l);if(d||p){const _=()=>{if(t.f){const v=d?qe(u,l)?u[l]:h[l]:l.value;s?Oe(v)&&Dl(v,r):Oe(v)?v.includes(r)||v.push(r):d?(h[l]=[r],qe(u,l)&&(u[l]=h[l])):(l.value=[r],t.k&&(h[t.k]=l.value))}else d?(h[l]=a,qe(u,l)&&(u[l]=a)):p&&(l.value=a,t.k&&(h[t.k]=a))};a?(_.id=-1,Ht(_,n)):_()}}}const Ht=i_;function P_(t){return I_(t)}function I_(t,e){const n=od();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:a,createText:o,createComment:l,setText:c,setElementText:h,parentNode:u,nextSibling:d,setScopeId:p=sn,insertStaticContent:_}=t,v=(w,b,I,z=null,q=null,Q=null,x=void 0,g=null,L=!!b.dynamicChildren)=>{if(w===b)return;w&&!Bs(w,b)&&(z=B(w),xe(w,q,Q,!0),w=null),b.patchFlag===-2&&(L=!1,b.dynamicChildren=null);const{type:U,ref:F,shapeFlag:G}=b;switch(U){case Go:m(w,b,I,z);break;case dr:f(w,b,I,z);break;case da:w==null&&y(b,I,z,x);break;case zn:oe(w,b,I,z,q,Q,x,g,L);break;default:G&1?O(w,b,I,z,q,Q,x,g,L):G&6?ue(w,b,I,z,q,Q,x,g,L):(G&64||G&128)&&U.process(w,b,I,z,q,Q,x,g,L,de)}F!=null&&q&&il(F,w&&w.ref,Q,b||w,!b)},m=(w,b,I,z)=>{if(w==null)i(b.el=o(b.children),I,z);else{const q=b.el=w.el;b.children!==w.children&&c(q,b.children)}},f=(w,b,I,z)=>{w==null?i(b.el=l(b.children||""),I,z):b.el=w.el},y=(w,b,I,z)=>{[w.el,w.anchor]=_(w.children,b,I,z,w.el,w.anchor)},E=({el:w,anchor:b},I,z)=>{let q;for(;w&&w!==b;)q=d(w),i(w,I,z),w=q;i(b,I,z)},R=({el:w,anchor:b})=>{let I;for(;w&&w!==b;)I=d(w),s(w),w=I;s(b)},O=(w,b,I,z,q,Q,x,g,L)=>{b.type==="svg"?x="svg":b.type==="math"&&(x="mathml"),w==null?C(b,I,z,q,Q,x,g,L):me(w,b,q,Q,x,g,L)},C=(w,b,I,z,q,Q,x,g)=>{let L,U;const{props:F,shapeFlag:G,transition:re,dirs:te}=w;if(L=w.el=a(w.type,Q,F&&F.is,F),G&8?h(L,w.children):G&16&&ie(w.children,L,null,z,q,ua(w,Q),x,g),te&&bi(w,null,z,"created"),P(L,w,w.scopeId,x,z),F){for(const ve in F)ve!=="value"&&!js(ve)&&r(L,ve,null,F[ve],Q,w.children,z,q,ge);"value"in F&&r(L,"value",null,F.value,Q),(U=F.onVnodeBeforeMount)&&xn(U,z,w)}te&&bi(w,null,z,"beforeMount");const ce=U_(q,re);ce&&re.beforeEnter(L),i(L,b,I),((U=F&&F.onVnodeMounted)||ce||te)&&Ht(()=>{U&&xn(U,z,w),ce&&re.enter(L),te&&bi(w,null,z,"mounted")},q)},P=(w,b,I,z,q)=>{if(I&&p(w,I),z)for(let Q=0;Q<z.length;Q++)p(w,z[Q]);if(q){let Q=q.subTree;if(b===Q){const x=q.vnode;P(w,x,x.scopeId,x.slotScopeIds,q.parent)}}},ie=(w,b,I,z,q,Q,x,g,L=0)=>{for(let U=L;U<w.length;U++){const F=w[U]=g?ii(w[U]):Sn(w[U]);v(null,F,b,I,z,q,Q,x,g)}},me=(w,b,I,z,q,Q,x)=>{const g=b.el=w.el;let{patchFlag:L,dynamicChildren:U,dirs:F}=b;L|=w.patchFlag&16;const G=w.props||ot,re=b.props||ot;let te;if(I&&Ti(I,!1),(te=re.onVnodeBeforeUpdate)&&xn(te,I,b,w),F&&bi(b,w,I,"beforeUpdate"),I&&Ti(I,!0),U?M(w.dynamicChildren,U,g,I,z,ua(b,q),Q):x||X(w,b,g,null,I,z,ua(b,q),Q,!1),L>0){if(L&16)T(g,b,G,re,I,z,q);else if(L&2&&G.class!==re.class&&r(g,"class",null,re.class,q),L&4&&r(g,"style",G.style,re.style,q),L&8){const ce=b.dynamicProps;for(let ve=0;ve<ce.length;ve++){const Se=ce[ve],se=G[Se],Fe=re[Se];(Fe!==se||Se==="value")&&r(g,Se,se,Fe,q,w.children,I,z,ge)}}L&1&&w.children!==b.children&&h(g,b.children)}else!x&&U==null&&T(g,b,G,re,I,z,q);((te=re.onVnodeUpdated)||F)&&Ht(()=>{te&&xn(te,I,b,w),F&&bi(b,w,I,"updated")},z)},M=(w,b,I,z,q,Q,x)=>{for(let g=0;g<b.length;g++){const L=w[g],U=b[g],F=L.el&&(L.type===zn||!Bs(L,U)||L.shapeFlag&70)?u(L.el):I;v(L,U,F,null,z,q,Q,x,!0)}},T=(w,b,I,z,q,Q,x)=>{if(I!==z){if(I!==ot)for(const g in I)!js(g)&&!(g in z)&&r(w,g,I[g],null,x,b.children,q,Q,ge);for(const g in z){if(js(g))continue;const L=z[g],U=I[g];L!==U&&g!=="value"&&r(w,g,U,L,x,b.children,q,Q,ge)}"value"in z&&r(w,"value",I.value,z.value,x)}},oe=(w,b,I,z,q,Q,x,g,L)=>{const U=b.el=w?w.el:o(""),F=b.anchor=w?w.anchor:o("");let{patchFlag:G,dynamicChildren:re,slotScopeIds:te}=b;te&&(g=g?g.concat(te):te),w==null?(i(U,I,z),i(F,I,z),ie(b.children||[],I,F,q,Q,x,g,L)):G>0&&G&64&&re&&w.dynamicChildren?(M(w.dynamicChildren,re,I,q,Q,x,g),(b.key!=null||q&&b===q.subTree)&&Yd(w,b,!0)):X(w,b,I,F,q,Q,x,g,L)},ue=(w,b,I,z,q,Q,x,g,L)=>{b.slotScopeIds=g,w==null?b.shapeFlag&512?q.ctx.activate(b,I,z,x,L):N(b,I,z,q,Q,x,L):K(w,b,L)},N=(w,b,I,z,q,Q,x)=>{const g=w.component=W_(w,z,q);if(Od(w)&&(g.ctx.renderer=de),X_(g),g.asyncDep){if(q&&q.registerDep(g,k),!w.el){const L=g.subTree=jt(dr);f(null,L,b,I)}}else k(g,w,b,I,q,Q,x)},K=(w,b,I)=>{const z=b.component=w.component;if(Qg(w,b,I))if(z.asyncDep&&!z.asyncResolved){J(z,b,I);return}else z.next=b,qg(z.update),z.effect.dirty=!0,z.update();else b.el=w.el,z.vnode=b},k=(w,b,I,z,q,Q,x)=>{const g=()=>{if(w.isMounted){let{next:F,bu:G,u:re,parent:te,vnode:ce}=w;{const Ue=jd(w);if(Ue){F&&(F.el=ce.el,J(w,F,x)),Ue.asyncDep.then(()=>{w.isUnmounted||g()});return}}let ve=F,Se;Ti(w,!1),F?(F.el=ce.el,J(w,F,x)):F=ce,G&&la(G),(Se=F.props&&F.props.onVnodeBeforeUpdate)&&xn(Se,te,F,ce),Ti(w,!0);const se=ca(w),Fe=w.subTree;w.subTree=se,v(Fe,se,u(Fe.el),B(Fe),w,q,Q),F.el=se.el,ve===null&&e_(w,se.el),re&&Ht(re,q),(Se=F.props&&F.props.onVnodeUpdated)&&Ht(()=>xn(Se,te,F,ce),q)}else{let F;const{el:G,props:re}=b,{bm:te,m:ce,parent:ve}=w,Se=ho(b);if(Ti(w,!1),te&&la(te),!Se&&(F=re&&re.onVnodeBeforeMount)&&xn(F,ve,b),Ti(w,!0),G&&D){const se=()=>{w.subTree=ca(w),D(G,w.subTree,w,q,null)};Se?b.type.__asyncLoader().then(()=>!w.isUnmounted&&se()):se()}else{const se=w.subTree=ca(w);v(null,se,I,z,w,q,Q),b.el=se.el}if(ce&&Ht(ce,q),!Se&&(F=re&&re.onVnodeMounted)){const se=b;Ht(()=>xn(F,ve,se),q)}(b.shapeFlag&256||ve&&ho(ve.vnode)&&ve.vnode.shapeFlag&256)&&w.a&&Ht(w.a,q),w.isMounted=!0,b=I=z=null}},L=w.effect=new Bl(g,sn,()=>ql(U),w.scope),U=w.update=()=>{L.dirty&&L.run()};U.id=w.uid,Ti(w,!0),U()},J=(w,b,I)=>{b.component=w;const z=w.vnode.props;w.vnode=b,w.next=null,A_(w,b.props,z,I),L_(w,b.children,I),Vi(),zc(w),ki()},X=(w,b,I,z,q,Q,x,g,L=!1)=>{const U=w&&w.children,F=w?w.shapeFlag:0,G=b.children,{patchFlag:re,shapeFlag:te}=b;if(re>0){if(re&128){le(U,G,I,z,q,Q,x,g,L);return}else if(re&256){ee(U,G,I,z,q,Q,x,g,L);return}}te&8?(F&16&&ge(U,q,Q),G!==U&&h(I,G)):F&16?te&16?le(U,G,I,z,q,Q,x,g,L):ge(U,q,Q,!0):(F&8&&h(I,""),te&16&&ie(G,I,z,q,Q,x,g,L))},ee=(w,b,I,z,q,Q,x,g,L)=>{w=w||ps,b=b||ps;const U=w.length,F=b.length,G=Math.min(U,F);let re;for(re=0;re<G;re++){const te=b[re]=L?ii(b[re]):Sn(b[re]);v(w[re],te,I,null,q,Q,x,g,L)}U>F?ge(w,q,Q,!0,!1,G):ie(b,I,z,q,Q,x,g,L,G)},le=(w,b,I,z,q,Q,x,g,L)=>{let U=0;const F=b.length;let G=w.length-1,re=F-1;for(;U<=G&&U<=re;){const te=w[U],ce=b[U]=L?ii(b[U]):Sn(b[U]);if(Bs(te,ce))v(te,ce,I,null,q,Q,x,g,L);else break;U++}for(;U<=G&&U<=re;){const te=w[G],ce=b[re]=L?ii(b[re]):Sn(b[re]);if(Bs(te,ce))v(te,ce,I,null,q,Q,x,g,L);else break;G--,re--}if(U>G){if(U<=re){const te=re+1,ce=te<F?b[te].el:z;for(;U<=re;)v(null,b[U]=L?ii(b[U]):Sn(b[U]),I,ce,q,Q,x,g,L),U++}}else if(U>re)for(;U<=G;)xe(w[U],q,Q,!0),U++;else{const te=U,ce=U,ve=new Map;for(U=ce;U<=re;U++){const Ae=b[U]=L?ii(b[U]):Sn(b[U]);Ae.key!=null&&ve.set(Ae.key,U)}let Se,se=0;const Fe=re-ce+1;let Ue=!1,Pe=0;const be=new Array(Fe);for(U=0;U<Fe;U++)be[U]=0;for(U=te;U<=G;U++){const Ae=w[U];if(se>=Fe){xe(Ae,q,Q,!0);continue}let Be;if(Ae.key!=null)Be=ve.get(Ae.key);else for(Se=ce;Se<=re;Se++)if(be[Se-ce]===0&&Bs(Ae,b[Se])){Be=Se;break}Be===void 0?xe(Ae,q,Q,!0):(be[Be-ce]=U+1,Be>=Pe?Pe=Be:Ue=!0,v(Ae,b[Be],I,null,q,Q,x,g,L),se++)}const ye=Ue?D_(be):ps;for(Se=ye.length-1,U=Fe-1;U>=0;U--){const Ae=ce+U,Be=b[Ae],Je=Ae+1<F?b[Ae+1].el:z;be[U]===0?v(null,Be,I,Je,q,Q,x,g,L):Ue&&(Se<0||U!==ye[Se]?ae(Be,I,Je,2):Se--)}}},ae=(w,b,I,z,q=null)=>{const{el:Q,type:x,transition:g,children:L,shapeFlag:U}=w;if(U&6){ae(w.component.subTree,b,I,z);return}if(U&128){w.suspense.move(b,I,z);return}if(U&64){x.move(w,b,I,de);return}if(x===zn){i(Q,b,I);for(let G=0;G<L.length;G++)ae(L[G],b,I,z);i(w.anchor,b,I);return}if(x===da){E(w,b,I);return}if(z!==2&&U&1&&g)if(z===0)g.beforeEnter(Q),i(Q,b,I),Ht(()=>g.enter(Q),q);else{const{leave:G,delayLeave:re,afterLeave:te}=g,ce=()=>i(Q,b,I),ve=()=>{G(Q,()=>{ce(),te&&te()})};re?re(Q,ce,ve):ve()}else i(Q,b,I)},xe=(w,b,I,z=!1,q=!1)=>{const{type:Q,props:x,ref:g,children:L,dynamicChildren:U,shapeFlag:F,patchFlag:G,dirs:re}=w;if(g!=null&&il(g,null,I,w,!0),F&256){b.ctx.deactivate(w);return}const te=F&1&&re,ce=!ho(w);let ve;if(ce&&(ve=x&&x.onVnodeBeforeUnmount)&&xn(ve,b,w),F&6)he(w.component,I,z);else{if(F&128){w.suspense.unmount(I,z);return}te&&bi(w,null,b,"beforeUnmount"),F&64?w.type.remove(w,b,I,q,de,z):U&&(Q!==zn||G>0&&G&64)?ge(U,b,I,!1,!0):(Q===zn&&G&384||!q&&F&16)&&ge(L,b,I),z&&Re(w)}(ce&&(ve=x&&x.onVnodeUnmounted)||te)&&Ht(()=>{ve&&xn(ve,b,w),te&&bi(w,null,b,"unmounted")},I)},Re=w=>{const{type:b,el:I,anchor:z,transition:q}=w;if(b===zn){$(I,z);return}if(b===da){R(w);return}const Q=()=>{s(I),q&&!q.persisted&&q.afterLeave&&q.afterLeave()};if(w.shapeFlag&1&&q&&!q.persisted){const{leave:x,delayLeave:g}=q,L=()=>x(I,Q);g?g(w.el,Q,L):L()}else Q()},$=(w,b)=>{let I;for(;w!==b;)I=d(w),s(w),w=I;s(b)},he=(w,b,I)=>{const{bum:z,scope:q,update:Q,subTree:x,um:g}=w;z&&la(z),q.stop(),Q&&(Q.active=!1,xe(x,w,b,I)),g&&Ht(g,b),Ht(()=>{w.isUnmounted=!0},b),b&&b.pendingBranch&&!b.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===b.pendingId&&(b.deps--,b.deps===0&&b.resolve())},ge=(w,b,I,z=!1,q=!1,Q=0)=>{for(let x=Q;x<w.length;x++)xe(w[x],b,I,z,q)},B=w=>w.shapeFlag&6?B(w.component.subTree):w.shapeFlag&128?w.suspense.next():d(w.anchor||w.el);let ne=!1;const Z=(w,b,I)=>{w==null?b._vnode&&xe(b._vnode,null,null,!0):v(b._vnode||null,w,b,null,null,null,I),ne||(ne=!0,zc(),Ld(),ne=!1),b._vnode=w},de={p:v,um:xe,m:ae,r:Re,mt:N,mc:ie,pc:X,pbc:M,n:B,o:t};let Ee,D;return e&&([Ee,D]=e(de)),{render:Z,hydrate:Ee,createApp:b_(Z,Ee)}}function ua({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ti({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function U_(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Yd(t,e,n=!1){const i=t.children,s=e.children;if(Oe(i)&&Oe(s))for(let r=0;r<i.length;r++){const a=i[r];let o=s[r];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=s[r]=ii(s[r]),o.el=a.el),n||Yd(a,o)),o.type===Go&&(o.el=a.el)}}function D_(t){const e=t.slice(),n=[0];let i,s,r,a,o;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(s=n[n.length-1],t[s]<c){e[i]=s,n.push(i);continue}for(r=0,a=n.length-1;r<a;)o=r+a>>1,t[n[o]]<c?r=o+1:a=o;c<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,a=n[r-1];r-- >0;)n[r]=a,a=e[a];return n}function jd(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:jd(e)}const N_=t=>t.__isTeleport,zn=Symbol.for("v-fgt"),Go=Symbol.for("v-txt"),dr=Symbol.for("v-cmt"),da=Symbol.for("v-stc"),Zs=[];let fn=null;function $l(t=!1){Zs.push(fn=t?null:[])}function O_(){Zs.pop(),fn=Zs[Zs.length-1]||null}let fr=1;function $c(t){fr+=t}function $d(t){return t.dynamicChildren=fr>0?fn||ps:null,O_(),fr>0&&fn&&fn.push(t),t}function Kd(t,e,n,i,s,r){return $d(Jd(t,e,n,i,s,r,!0))}function F_(t,e,n,i,s){return $d(jt(t,e,n,i,s,!0))}function sl(t){return t?t.__v_isVNode===!0:!1}function Bs(t,e){return t.type===e.type&&t.key===e.key}const Wo="__vInternal",Zd=({key:t})=>t??null,fo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?At(t)||Wt(t)||Ve(t)?{i:Tn,r:t,k:e,f:!!n}:t:null);function Jd(t,e=null,n=null,i=0,s=null,r=t===zn?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Zd(e),ref:e&&fo(e),scopeId:Ud,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Tn};return o?(Kl(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=At(n)?8:16),fr>0&&!a&&fn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&fn.push(l),l}const jt=B_;function B_(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===t_)&&(t=dr),sl(t)){const o=ys(t,e,!0);return n&&Kl(o,n),fr>0&&!r&&fn&&(o.shapeFlag&6?fn[fn.indexOf(t)]=o:fn.push(o)),o.patchFlag|=-2,o}if($_(t)&&(t=t.__vccOpts),e){e=z_(e);let{class:o,style:l}=e;o&&!At(o)&&(e.class=Fl(o)),ht(l)&&(Md(l)&&!Oe(l)&&(l=Tt({},l)),e.style=Ol(l))}const a=At(t)?1:n_(t)?128:N_(t)?64:ht(t)?4:Ve(t)?2:0;return Jd(t,e,n,i,s,a,r,!0)}function z_(t){return t?Md(t)||Wo in t?Tt({},t):t:null}function ys(t,e,n=!1){const{props:i,ref:s,patchFlag:r,children:a}=t,o=e?V_(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:o,key:o&&Zd(o),ref:e&&e.ref?n&&s?Oe(s)?s.concat(fo(e)):[s,fo(e)]:fo(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==zn?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ys(t.ssContent),ssFallback:t.ssFallback&&ys(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function H_(t=" ",e=0){return jt(Go,null,t,e)}function Sn(t){return t==null||typeof t=="boolean"?jt(dr):Oe(t)?jt(zn,null,t.slice()):typeof t=="object"?ii(t):jt(Go,null,String(t))}function ii(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ys(t)}function Kl(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(Oe(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Kl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Wo in e)?e._ctx=Tn:s===3&&Tn&&(Tn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Ve(e)?(e={default:e,_ctx:Tn},n=32):(e=String(e),i&64?(n=16,e=[H_(e)]):n=8);t.children=e,t.shapeFlag|=n}function V_(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Fl([e.class,i.class]));else if(s==="style")e.style=Ol([e.style,i.style]);else if(Do(s)){const r=e[s],a=i[s];a&&r!==a&&!(Oe(r)&&r.includes(a))&&(e[s]=r?[].concat(r,a):a)}else s!==""&&(e[s]=i[s])}return e}function xn(t,e,n,i=null){pn(t,e,7,[n,i])}const k_=Vd();let G_=0;function W_(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||k_,r={uid:G_++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new _g(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Gd(i,s),emitsOptions:Id(i,s),emit:null,emitted:null,propsDefaults:ot,inheritAttrs:i.inheritAttrs,ctx:ot,data:ot,props:ot,attrs:ot,slots:ot,refs:ot,setupState:ot,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=$g.bind(null,r),t.ce&&t.ce(r),r}let Bt=null,yo,rl;{const t=od(),e=(n,i)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(i),r=>{s.length>1?s.forEach(a=>a(r)):s[0](r)}};yo=e("__VUE_INSTANCE_SETTERS__",n=>Bt=n),rl=e("__VUE_SSR_SETTERS__",n=>Xo=n)}const Sr=t=>{const e=Bt;return yo(t),t.scope.on(),()=>{t.scope.off(),yo(e)}},Kc=()=>{Bt&&Bt.scope.off(),yo(null)};function Qd(t){return t.vnode.shapeFlag&4}let Xo=!1;function X_(t,e=!1){e&&rl(e);const{props:n,children:i}=t.vnode,s=Qd(t);T_(t,n,s,e),C_(t,i);const r=s?q_(t,e):void 0;return e&&rl(!1),r}function q_(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Sd(new Proxy(t.ctx,v_));const{setup:i}=n;if(i){const s=t.setupContext=i.length>1?j_(t):null,r=Sr(t);Vi();const a=hi(i,t,0,[t.props,s]);if(ki(),r(),sd(a)){if(a.then(Kc,Kc),e)return a.then(o=>{Zc(t,o,e)}).catch(o=>{Ho(o,t,0)});t.asyncDep=a}else Zc(t,a,e)}else ef(t,e)}function Zc(t,e,n){Ve(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ht(e)&&(t.setupState=Td(e)),ef(t,n)}let Jc;function ef(t,e,n){const i=t.type;if(!t.render){if(!e&&Jc&&!i.render){const s=i.template||Yl(t).template;if(s){const{isCustomElement:r,compilerOptions:a}=t.appContext.config,{delimiters:o,compilerOptions:l}=i,c=Tt(Tt({isCustomElement:r,delimiters:o},a),l);i.render=Jc(s,c)}}t.render=i.render||sn}{const s=Sr(t);Vi();try{x_(t)}finally{ki(),s()}}}function Y_(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Gt(t,"get","$attrs"),e[n]}}))}function j_(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Y_(t)},slots:t.slots,emit:t.emit,expose:e}}function Zl(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Td(Sd(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in $s)return $s[n](t)},has(e,n){return n in e||n in $s}}))}function $_(t){return Ve(t)&&"__vccOpts"in t}const hn=(t,e)=>zg(t,e,Xo);function tf(t,e,n){const i=arguments.length;return i===2?ht(e)&&!Oe(e)?sl(e)?jt(t,null,[e]):jt(t,e):jt(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&sl(n)&&(n=[n]),jt(t,e,n))}const K_="3.4.21";/**
* @vue/runtime-dom v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Z_="http://www.w3.org/2000/svg",J_="http://www.w3.org/1998/Math/MathML",si=typeof document<"u"?document:null,Qc=si&&si.createElement("template"),Q_={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e==="svg"?si.createElementNS(Z_,t):e==="mathml"?si.createElementNS(J_,t):si.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>si.createTextNode(t),createComment:t=>si.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>si.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const a=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{Qc.innerHTML=i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t;const o=Qc.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},ev=Symbol("_vtc");function tv(t,e,n){const i=t[ev];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const eh=Symbol("_vod"),nv=Symbol("_vsh"),iv=Symbol(""),sv=/(^|;)\s*display\s*:/;function rv(t,e,n){const i=t.style,s=At(n);let r=!1;if(n&&!s){if(e)if(At(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();n[o]==null&&po(i,o,"")}else for(const a in e)n[a]==null&&po(i,a,"");for(const a in n)a==="display"&&(r=!0),po(i,a,n[a])}else if(s){if(e!==n){const a=i[iv];a&&(n+=";"+a),i.cssText=n,r=sv.test(n)}}else e&&t.removeAttribute("style");eh in t&&(t[eh]=r?i.display:"",t[nv]&&(i.display="none"))}const th=/\s*!important$/;function po(t,e,n){if(Oe(n))n.forEach(i=>po(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=ov(t,e);th.test(n)?t.setProperty(Ps(i),n.replace(th,""),"important"):t[i]=n}}const nh=["Webkit","Moz","ms"],fa={};function ov(t,e){const n=fa[e];if(n)return n;let i=Ms(e);if(i!=="filter"&&i in t)return fa[e]=i;i=rd(i);for(let s=0;s<nh.length;s++){const r=nh[s]+i;if(r in t)return fa[e]=r}return e}const ih="http://www.w3.org/1999/xlink";function av(t,e,n,i,s){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(ih,e.slice(6,e.length)):t.setAttributeNS(ih,e,n);else{const r=gg(e);n==null||r&&!ad(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function lv(t,e,n,i,s,r,a){if(e==="innerHTML"||e==="textContent"){i&&a(i,s,r),t[e]=n??"";return}const o=t.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){const c=o==="OPTION"?t.getAttribute("value")||"":t.value,h=n??"";(c!==h||!("_value"in t))&&(t.value=h),n==null&&t.removeAttribute(e),t._value=n;return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=ad(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function cv(t,e,n,i){t.addEventListener(e,n,i)}function hv(t,e,n,i){t.removeEventListener(e,n,i)}const sh=Symbol("_vei");function uv(t,e,n,i,s=null){const r=t[sh]||(t[sh]={}),a=r[e];if(i&&a)a.value=i;else{const[o,l]=dv(e);if(i){const c=r[e]=mv(i,s);cv(t,o,c,l)}else a&&(hv(t,o,a,l),r[e]=void 0)}}const rh=/(?:Once|Passive|Capture)$/;function dv(t){let e;if(rh.test(t)){e={};let i;for(;i=t.match(rh);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ps(t.slice(2)),e]}let pa=0;const fv=Promise.resolve(),pv=()=>pa||(fv.then(()=>pa=0),pa=Date.now());function mv(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;pn(gv(i,n.value),e,5,[i])};return n.value=t,n.attached=pv(),n}function gv(t,e){if(Oe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const oh=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,_v=(t,e,n,i,s,r,a,o,l)=>{const c=s==="svg";e==="class"?tv(t,i,c):e==="style"?rv(t,n,i):Do(e)?Ul(e)||uv(t,e,n,i,a):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):vv(t,e,i,c))?lv(t,e,i,r,a,o,l):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),av(t,e,i,c))};function vv(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&oh(e)&&Ve(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return oh(e)&&At(n)?!1:e in t}const xv=Tt({patchProp:_v},Q_);let ah;function Ev(){return ah||(ah=P_(xv))}const Mv=(...t)=>{const e=Ev().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=yv(i);if(!s)return;const r=e._component;!Ve(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const a=n(s,!1,Sv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function Sv(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function yv(t){return At(t)?document.querySelector(t):t}/*!
  * vue-router v4.3.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const os=typeof document<"u";function wv(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Ke=Object.assign;function ma(t,e){const n={};for(const i in e){const s=e[i];n[i]=gn(s)?s.map(t):t(s)}return n}const Js=()=>{},gn=Array.isArray,nf=/#/g,bv=/&/g,Tv=/\//g,Av=/=/g,Rv=/\?/g,sf=/\+/g,Cv=/%5B/g,Lv=/%5D/g,rf=/%5E/g,Pv=/%60/g,of=/%7B/g,Iv=/%7C/g,af=/%7D/g,Uv=/%20/g;function Jl(t){return encodeURI(""+t).replace(Iv,"|").replace(Cv,"[").replace(Lv,"]")}function Dv(t){return Jl(t).replace(of,"{").replace(af,"}").replace(rf,"^")}function ol(t){return Jl(t).replace(sf,"%2B").replace(Uv,"+").replace(nf,"%23").replace(bv,"%26").replace(Pv,"`").replace(of,"{").replace(af,"}").replace(rf,"^")}function Nv(t){return ol(t).replace(Av,"%3D")}function Ov(t){return Jl(t).replace(nf,"%23").replace(Rv,"%3F")}function Fv(t){return t==null?"":Ov(t).replace(Tv,"%2F")}function pr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Bv=/\/$/,zv=t=>t.replace(Bv,"");function ga(t,e,n="/"){let i,s={},r="",a="";const o=e.indexOf("#");let l=e.indexOf("?");return o<l&&o>=0&&(l=-1),l>-1&&(i=e.slice(0,l),r=e.slice(l+1,o>-1?o:e.length),s=t(r)),o>-1&&(i=i||e.slice(0,o),a=e.slice(o,e.length)),i=Gv(i??e,n),{fullPath:i+(r&&"?")+r+a,path:i,query:s,hash:pr(a)}}function Hv(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function lh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Vv(t,e,n){const i=e.matched.length-1,s=n.matched.length-1;return i>-1&&i===s&&ws(e.matched[i],n.matched[s])&&lf(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ws(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function lf(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!kv(t[n],e[n]))return!1;return!0}function kv(t,e){return gn(t)?ch(t,e):gn(e)?ch(e,t):t===e}function ch(t,e){return gn(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function Gv(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=n.length-1,a,o;for(a=0;a<i.length;a++)if(o=i[a],o!==".")if(o==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+i.slice(a).join("/")}var mr;(function(t){t.pop="pop",t.push="push"})(mr||(mr={}));var Qs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Qs||(Qs={}));function Wv(t){if(!t)if(os){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),zv(t)}const Xv=/^[^#]+#/;function qv(t,e){return t.replace(Xv,"#")+e}function Yv(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const qo=()=>({left:window.scrollX,top:window.scrollY});function jv(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Yv(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function hh(t,e){return(history.state?history.state.position-e:-1)+t}const al=new Map;function $v(t,e){al.set(t,e)}function Kv(t){const e=al.get(t);return al.delete(t),e}let Zv=()=>location.protocol+"//"+location.host;function cf(t,e){const{pathname:n,search:i,hash:s}=e,r=t.indexOf("#");if(r>-1){let o=s.includes(t.slice(r))?t.slice(r).length:1,l=s.slice(o);return l[0]!=="/"&&(l="/"+l),lh(l,"")}return lh(n,t)+i+s}function Jv(t,e,n,i){let s=[],r=[],a=null;const o=({state:d})=>{const p=cf(t,location),_=n.value,v=e.value;let m=0;if(d){if(n.value=p,e.value=d,a&&a===_){a=null;return}m=v?d.position-v.position:0}else i(p);s.forEach(f=>{f(n.value,_,{delta:m,type:mr.pop,direction:m?m>0?Qs.forward:Qs.back:Qs.unknown})})};function l(){a=n.value}function c(d){s.push(d);const p=()=>{const _=s.indexOf(d);_>-1&&s.splice(_,1)};return r.push(p),p}function h(){const{history:d}=window;d.state&&d.replaceState(Ke({},d.state,{scroll:qo()}),"")}function u(){for(const d of r)d();r=[],window.removeEventListener("popstate",o),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",o),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:l,listen:c,destroy:u}}function uh(t,e,n,i=!1,s=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:s?qo():null}}function Qv(t){const{history:e,location:n}=window,i={value:cf(t,n)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,h){const u=t.indexOf("#"),d=u>-1?(n.host&&document.querySelector("base")?t:t.slice(u))+l:Zv()+t+l;try{e[h?"replaceState":"pushState"](c,"",d),s.value=c}catch(p){console.error(p),n[h?"replace":"assign"](d)}}function a(l,c){const h=Ke({},e.state,uh(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,h,!0),i.value=l}function o(l,c){const h=Ke({},s.value,e.state,{forward:l,scroll:qo()});r(h.current,h,!0);const u=Ke({},uh(i.value,l,null),{position:h.position+1},c);r(l,u,!1),i.value=l}return{location:i,state:s,push:o,replace:a}}function e0(t){t=Wv(t);const e=Qv(t),n=Jv(t,e.state,e.location,e.replace);function i(r,a=!0){a||n.pauseListeners(),history.go(r)}const s=Ke({location:"",base:t,go:i,createHref:qv.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function t0(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),e0(t)}function n0(t){return typeof t=="string"||t&&typeof t=="object"}function hf(t){return typeof t=="string"||typeof t=="symbol"}const $n={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},uf=Symbol("");var dh;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(dh||(dh={}));function bs(t,e){return Ke(new Error,{type:t,[uf]:!0},e)}function In(t,e){return t instanceof Error&&uf in t&&(e==null||!!(t.type&e))}const fh="[^/]+?",i0={sensitive:!1,strict:!1,start:!0,end:!0},s0=/[.+*?^${}()[\]/\\]/g;function r0(t,e){const n=Ke({},i0,e),i=[];let s=n.start?"^":"";const r=[];for(const c of t){const h=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let u=0;u<c.length;u++){const d=c[u];let p=40+(n.sensitive?.25:0);if(d.type===0)u||(s+="/"),s+=d.value.replace(s0,"\\$&"),p+=40;else if(d.type===1){const{value:_,repeatable:v,optional:m,regexp:f}=d;r.push({name:_,repeatable:v,optional:m});const y=f||fh;if(y!==fh){p+=10;try{new RegExp(`(${y})`)}catch(R){throw new Error(`Invalid custom RegExp for param "${_}" (${y}): `+R.message)}}let E=v?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;u||(E=m&&c.length<2?`(?:/${E})`:"/"+E),m&&(E+="?"),s+=E,p+=20,m&&(p+=-8),v&&(p+=-20),y===".*"&&(p+=-50)}h.push(p)}i.push(h)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const a=new RegExp(s,n.sensitive?"":"i");function o(c){const h=c.match(a),u={};if(!h)return null;for(let d=1;d<h.length;d++){const p=h[d]||"",_=r[d-1];u[_.name]=p&&_.repeatable?p.split("/"):p}return u}function l(c){let h="",u=!1;for(const d of t){(!u||!h.endsWith("/"))&&(h+="/"),u=!1;for(const p of d)if(p.type===0)h+=p.value;else if(p.type===1){const{value:_,repeatable:v,optional:m}=p,f=_ in c?c[_]:"";if(gn(f)&&!v)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const y=gn(f)?f.join("/"):f;if(!y)if(m)d.length<2&&(h.endsWith("/")?h=h.slice(0,-1):u=!0);else throw new Error(`Missing required param "${_}"`);h+=y}}return h||"/"}return{re:a,score:i,keys:r,parse:o,stringify:l}}function o0(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function a0(t,e){let n=0;const i=t.score,s=e.score;for(;n<i.length&&n<s.length;){const r=o0(i[n],s[n]);if(r)return r;n++}if(Math.abs(s.length-i.length)===1){if(ph(i))return 1;if(ph(s))return-1}return s.length-i.length}function ph(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const l0={type:0,value:""},c0=/[a-zA-Z0-9_]/;function h0(t){if(!t)return[[]];if(t==="/")return[[l0]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=0,i=n;const s=[];let r;function a(){r&&s.push(r),r=[]}let o=0,l,c="",h="";function u(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:h,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;o<t.length;){if(l=t[o++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&u(),a()):l===":"?(u(),n=1):d();break;case 4:d(),n=i;break;case 1:l==="("?n=2:c0.test(l)?d():(u(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&o--);break;case 2:l===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+l:n=3:h+=l;break;case 3:u(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&o--,h="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),u(),a(),s}function u0(t,e,n){const i=r0(h0(t.path),n),s=Ke(i,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function d0(t,e){const n=[],i=new Map;e=_h({strict:!1,end:!0,sensitive:!1},e);function s(h){return i.get(h)}function r(h,u,d){const p=!d,_=f0(h);_.aliasOf=d&&d.record;const v=_h(e,h),m=[_];if("alias"in h){const E=typeof h.alias=="string"?[h.alias]:h.alias;for(const R of E)m.push(Ke({},_,{components:d?d.record.components:_.components,path:R,aliasOf:d?d.record:_}))}let f,y;for(const E of m){const{path:R}=E;if(u&&R[0]!=="/"){const O=u.record.path,C=O[O.length-1]==="/"?"":"/";E.path=u.record.path+(R&&C+R)}if(f=u0(E,u,v),d?d.alias.push(f):(y=y||f,y!==f&&y.alias.push(f),p&&h.name&&!gh(f)&&a(h.name)),_.children){const O=_.children;for(let C=0;C<O.length;C++)r(O[C],f,d&&d.children[C])}d=d||f,(f.record.components&&Object.keys(f.record.components).length||f.record.name||f.record.redirect)&&l(f)}return y?()=>{a(y)}:Js}function a(h){if(hf(h)){const u=i.get(h);u&&(i.delete(h),n.splice(n.indexOf(u),1),u.children.forEach(a),u.alias.forEach(a))}else{const u=n.indexOf(h);u>-1&&(n.splice(u,1),h.record.name&&i.delete(h.record.name),h.children.forEach(a),h.alias.forEach(a))}}function o(){return n}function l(h){let u=0;for(;u<n.length&&a0(h,n[u])>=0&&(h.record.path!==n[u].record.path||!df(h,n[u]));)u++;n.splice(u,0,h),h.record.name&&!gh(h)&&i.set(h.record.name,h)}function c(h,u){let d,p={},_,v;if("name"in h&&h.name){if(d=i.get(h.name),!d)throw bs(1,{location:h});v=d.record.name,p=Ke(mh(u.params,d.keys.filter(y=>!y.optional).concat(d.parent?d.parent.keys.filter(y=>y.optional):[]).map(y=>y.name)),h.params&&mh(h.params,d.keys.map(y=>y.name))),_=d.stringify(p)}else if(h.path!=null)_=h.path,d=n.find(y=>y.re.test(_)),d&&(p=d.parse(_),v=d.record.name);else{if(d=u.name?i.get(u.name):n.find(y=>y.re.test(u.path)),!d)throw bs(1,{location:h,currentLocation:u});v=d.record.name,p=Ke({},u.params,h.params),_=d.stringify(p)}const m=[];let f=d;for(;f;)m.unshift(f.record),f=f.parent;return{name:v,path:_,params:p,matched:m,meta:m0(m)}}return t.forEach(h=>r(h)),{addRoute:r,resolve:c,removeRoute:a,getRoutes:o,getRecordMatcher:s}}function mh(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function f0(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:p0(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function p0(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function gh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function m0(t){return t.reduce((e,n)=>Ke(e,n.meta),{})}function _h(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function df(t,e){return e.children.some(n=>n===t||df(t,n))}function g0(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(sf," "),a=r.indexOf("="),o=pr(a<0?r:r.slice(0,a)),l=a<0?null:pr(r.slice(a+1));if(o in e){let c=e[o];gn(c)||(c=e[o]=[c]),c.push(l)}else e[o]=l}return e}function vh(t){let e="";for(let n in t){const i=t[n];if(n=Nv(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(gn(i)?i.map(r=>r&&ol(r)):[i&&ol(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function _0(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=gn(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const v0=Symbol(""),xh=Symbol(""),Ql=Symbol(""),ff=Symbol(""),ll=Symbol("");function zs(){let t=[];function e(i){return t.push(i),()=>{const s=t.indexOf(i);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function ri(t,e,n,i,s,r=a=>a()){const a=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((o,l)=>{const c=d=>{d===!1?l(bs(4,{from:n,to:e})):d instanceof Error?l(d):n0(d)?l(bs(2,{from:e,to:d})):(a&&i.enterCallbacks[s]===a&&typeof d=="function"&&a.push(d),o())},h=r(()=>t.call(i&&i.instances[s],e,n,c));let u=Promise.resolve(h);t.length<3&&(u=u.then(c)),u.catch(d=>l(d))})}function _a(t,e,n,i,s=r=>r()){const r=[];for(const a of t)for(const o in a.components){let l=a.components[o];if(!(e!=="beforeRouteEnter"&&!a.instances[o]))if(x0(l)){const h=(l.__vccOpts||l)[e];h&&r.push(ri(h,n,i,a,o,s))}else{let c=l();r.push(()=>c.then(h=>{if(!h)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${a.path}"`));const u=wv(h)?h.default:h;a.components[o]=u;const p=(u.__vccOpts||u)[e];return p&&ri(p,n,i,a,o,s)()}))}}return r}function x0(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Eh(t){const e=Xn(Ql),n=Xn(ff),i=hn(()=>e.resolve(gs(t.to))),s=hn(()=>{const{matched:l}=i.value,{length:c}=l,h=l[c-1],u=n.matched;if(!h||!u.length)return-1;const d=u.findIndex(ws.bind(null,h));if(d>-1)return d;const p=Mh(l[c-2]);return c>1&&Mh(h)===p&&u[u.length-1].path!==p?u.findIndex(ws.bind(null,l[c-2])):d}),r=hn(()=>s.value>-1&&y0(n.params,i.value.params)),a=hn(()=>s.value>-1&&s.value===n.matched.length-1&&lf(n.params,i.value.params));function o(l={}){return S0(l)?e[gs(t.replace)?"replace":"push"](gs(t.to)).catch(Js):Promise.resolve()}return{route:i,href:hn(()=>i.value.href),isActive:r,isExactActive:a,navigate:o}}const E0=Mr({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Eh,setup(t,{slots:e}){const n=zo(Eh(t)),{options:i}=Xn(Ql),s=hn(()=>({[Sh(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Sh(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:tf("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),M0=E0;function S0(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function y0(t,e){for(const n in e){const i=e[n],s=t[n];if(typeof i=="string"){if(i!==s)return!1}else if(!gn(s)||s.length!==i.length||i.some((r,a)=>r!==s[a]))return!1}return!0}function Mh(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Sh=(t,e,n)=>t??e??n,w0=Mr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=Xn(ll),s=hn(()=>t.route||i.value),r=Xn(xh,0),a=hn(()=>{let c=gs(r);const{matched:h}=s.value;let u;for(;(u=h[c])&&!u.components;)c++;return c}),o=hn(()=>s.value.matched[a.value]);uo(xh,hn(()=>a.value+1)),uo(v0,o),uo(ll,s);const l=Hg();return co(()=>[l.value,o.value,t.name],([c,h,u],[d,p,_])=>{h&&(h.instances[u]=c,p&&p!==h&&c&&c===d&&(h.leaveGuards.size||(h.leaveGuards=p.leaveGuards),h.updateGuards.size||(h.updateGuards=p.updateGuards))),c&&h&&(!p||!ws(h,p)||!d)&&(h.enterCallbacks[u]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=s.value,h=t.name,u=o.value,d=u&&u.components[h];if(!d)return yh(n.default,{Component:d,route:c});const p=u.props[h],_=p?p===!0?c.params:typeof p=="function"?p(c):p:null,m=tf(d,Ke({},_,e,{onVnodeUnmounted:f=>{f.component.isUnmounted&&(u.instances[h]=null)},ref:l}));return yh(n.default,{Component:m,route:c})||m}}});function yh(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const b0=w0;function T0(t){const e=d0(t.routes,t),n=t.parseQuery||g0,i=t.stringifyQuery||vh,s=t.history,r=zs(),a=zs(),o=zs(),l=Vg($n);let c=$n;os&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=ma.bind(null,B=>""+B),u=ma.bind(null,Fv),d=ma.bind(null,pr);function p(B,ne){let Z,de;return hf(B)?(Z=e.getRecordMatcher(B),de=ne):de=B,e.addRoute(de,Z)}function _(B){const ne=e.getRecordMatcher(B);ne&&e.removeRoute(ne)}function v(){return e.getRoutes().map(B=>B.record)}function m(B){return!!e.getRecordMatcher(B)}function f(B,ne){if(ne=Ke({},ne||l.value),typeof B=="string"){const b=ga(n,B,ne.path),I=e.resolve({path:b.path},ne),z=s.createHref(b.fullPath);return Ke(b,I,{params:d(I.params),hash:pr(b.hash),redirectedFrom:void 0,href:z})}let Z;if(B.path!=null)Z=Ke({},B,{path:ga(n,B.path,ne.path).path});else{const b=Ke({},B.params);for(const I in b)b[I]==null&&delete b[I];Z=Ke({},B,{params:u(b)}),ne.params=u(ne.params)}const de=e.resolve(Z,ne),Ee=B.hash||"";de.params=h(d(de.params));const D=Hv(i,Ke({},B,{hash:Dv(Ee),path:de.path})),w=s.createHref(D);return Ke({fullPath:D,hash:Ee,query:i===vh?_0(B.query):B.query||{}},de,{redirectedFrom:void 0,href:w})}function y(B){return typeof B=="string"?ga(n,B,l.value.path):Ke({},B)}function E(B,ne){if(c!==B)return bs(8,{from:ne,to:B})}function R(B){return P(B)}function O(B){return R(Ke(y(B),{replace:!0}))}function C(B){const ne=B.matched[B.matched.length-1];if(ne&&ne.redirect){const{redirect:Z}=ne;let de=typeof Z=="function"?Z(B):Z;return typeof de=="string"&&(de=de.includes("?")||de.includes("#")?de=y(de):{path:de},de.params={}),Ke({query:B.query,hash:B.hash,params:de.path!=null?{}:B.params},de)}}function P(B,ne){const Z=c=f(B),de=l.value,Ee=B.state,D=B.force,w=B.replace===!0,b=C(Z);if(b)return P(Ke(y(b),{state:typeof b=="object"?Ke({},Ee,b.state):Ee,force:D,replace:w}),ne||Z);const I=Z;I.redirectedFrom=ne;let z;return!D&&Vv(i,de,Z)&&(z=bs(16,{to:I,from:de}),ae(de,de,!0,!1)),(z?Promise.resolve(z):M(I,de)).catch(q=>In(q)?In(q,2)?q:le(q):X(q,I,de)).then(q=>{if(q){if(In(q,2))return P(Ke({replace:w},y(q.to),{state:typeof q.to=="object"?Ke({},Ee,q.to.state):Ee,force:D}),ne||I)}else q=oe(I,de,!0,w,Ee);return T(I,de,q),q})}function ie(B,ne){const Z=E(B,ne);return Z?Promise.reject(Z):Promise.resolve()}function me(B){const ne=$.values().next().value;return ne&&typeof ne.runWithContext=="function"?ne.runWithContext(B):B()}function M(B,ne){let Z;const[de,Ee,D]=A0(B,ne);Z=_a(de.reverse(),"beforeRouteLeave",B,ne);for(const b of de)b.leaveGuards.forEach(I=>{Z.push(ri(I,B,ne))});const w=ie.bind(null,B,ne);return Z.push(w),ge(Z).then(()=>{Z=[];for(const b of r.list())Z.push(ri(b,B,ne));return Z.push(w),ge(Z)}).then(()=>{Z=_a(Ee,"beforeRouteUpdate",B,ne);for(const b of Ee)b.updateGuards.forEach(I=>{Z.push(ri(I,B,ne))});return Z.push(w),ge(Z)}).then(()=>{Z=[];for(const b of D)if(b.beforeEnter)if(gn(b.beforeEnter))for(const I of b.beforeEnter)Z.push(ri(I,B,ne));else Z.push(ri(b.beforeEnter,B,ne));return Z.push(w),ge(Z)}).then(()=>(B.matched.forEach(b=>b.enterCallbacks={}),Z=_a(D,"beforeRouteEnter",B,ne,me),Z.push(w),ge(Z))).then(()=>{Z=[];for(const b of a.list())Z.push(ri(b,B,ne));return Z.push(w),ge(Z)}).catch(b=>In(b,8)?b:Promise.reject(b))}function T(B,ne,Z){o.list().forEach(de=>me(()=>de(B,ne,Z)))}function oe(B,ne,Z,de,Ee){const D=E(B,ne);if(D)return D;const w=ne===$n,b=os?history.state:{};Z&&(de||w?s.replace(B.fullPath,Ke({scroll:w&&b&&b.scroll},Ee)):s.push(B.fullPath,Ee)),l.value=B,ae(B,ne,Z,w),le()}let ue;function N(){ue||(ue=s.listen((B,ne,Z)=>{if(!he.listening)return;const de=f(B),Ee=C(de);if(Ee){P(Ke(Ee,{replace:!0}),de).catch(Js);return}c=de;const D=l.value;os&&$v(hh(D.fullPath,Z.delta),qo()),M(de,D).catch(w=>In(w,12)?w:In(w,2)?(P(w.to,de).then(b=>{In(b,20)&&!Z.delta&&Z.type===mr.pop&&s.go(-1,!1)}).catch(Js),Promise.reject()):(Z.delta&&s.go(-Z.delta,!1),X(w,de,D))).then(w=>{w=w||oe(de,D,!1),w&&(Z.delta&&!In(w,8)?s.go(-Z.delta,!1):Z.type===mr.pop&&In(w,20)&&s.go(-1,!1)),T(de,D,w)}).catch(Js)}))}let K=zs(),k=zs(),J;function X(B,ne,Z){le(B);const de=k.list();return de.length?de.forEach(Ee=>Ee(B,ne,Z)):console.error(B),Promise.reject(B)}function ee(){return J&&l.value!==$n?Promise.resolve():new Promise((B,ne)=>{K.add([B,ne])})}function le(B){return J||(J=!B,N(),K.list().forEach(([ne,Z])=>B?Z(B):ne()),K.reset()),B}function ae(B,ne,Z,de){const{scrollBehavior:Ee}=t;if(!os||!Ee)return Promise.resolve();const D=!Z&&Kv(hh(B.fullPath,0))||(de||!Z)&&history.state&&history.state.scroll||null;return Rd().then(()=>Ee(B,ne,D)).then(w=>w&&jv(w)).catch(w=>X(w,B,ne))}const xe=B=>s.go(B);let Re;const $=new Set,he={currentRoute:l,listening:!0,addRoute:p,removeRoute:_,hasRoute:m,getRoutes:v,resolve:f,options:t,push:R,replace:O,go:xe,back:()=>xe(-1),forward:()=>xe(1),beforeEach:r.add,beforeResolve:a.add,afterEach:o.add,onError:k.add,isReady:ee,install(B){const ne=this;B.component("RouterLink",M0),B.component("RouterView",b0),B.config.globalProperties.$router=ne,Object.defineProperty(B.config.globalProperties,"$route",{enumerable:!0,get:()=>gs(l)}),os&&!Re&&l.value===$n&&(Re=!0,R(s.location).catch(Ee=>{}));const Z={};for(const Ee in $n)Object.defineProperty(Z,Ee,{get:()=>l.value[Ee],enumerable:!0});B.provide(Ql,ne),B.provide(ff,xd(Z)),B.provide(ll,l);const de=B.unmount;$.add(B),B.unmount=function(){$.delete(B),$.size<1&&(c=$n,ue&&ue(),ue=null,l.value=$n,Re=!1,J=!1),de()}}};function ge(B){return B.reduce((ne,Z)=>ne.then(()=>me(Z)),Promise.resolve())}return he}function A0(t,e){const n=[],i=[],s=[],r=Math.max(e.matched.length,t.matched.length);for(let a=0;a<r;a++){const o=e.matched[a];o&&(t.matched.find(c=>ws(c,o))?i.push(o):n.push(o));const l=t.matched[a];l&&(e.matched.find(c=>ws(c,l))||s.push(l))}return[n,i,s]}const R0=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ec="161",C0=0,wh=1,L0=2,pf=1,P0=2,Bn=3,vi=0,Vt=1,Hn=2,ui=0,vs=1,bh=2,Th=3,Ah=4,I0=5,Di=100,U0=101,D0=102,Rh=103,Ch=104,N0=200,O0=201,F0=202,B0=203,cl=204,hl=205,z0=206,H0=207,V0=208,k0=209,G0=210,W0=211,X0=212,q0=213,Y0=214,j0=0,$0=1,K0=2,wo=3,Z0=4,J0=5,Q0=6,ex=7,mf=0,tx=1,nx=2,di=0,ix=1,sx=2,rx=3,ox=4,ax=5,lx=6,gf=300,Ts=301,As=302,ul=303,dl=304,Yo=306,fl=1e3,un=1001,pl=1002,Ft=1003,Lh=1004,Hs=1005,Ot=1006,va=1007,ai=1008,fi=1009,cx=1010,hx=1011,tc=1012,_f=1013,li=1014,Vn=1015,gr=1016,vf=1017,xf=1018,Bi=1020,ux=1021,dn=1023,dx=1024,fx=1025,zi=1026,Rs=1027,px=1028,Ef=1029,mx=1030,Mf=1031,Sf=1033,xa=33776,Ea=33777,Ma=33778,Sa=33779,Ph=35840,Ih=35841,Uh=35842,Dh=35843,yf=36196,Nh=37492,Oh=37496,Fh=37808,Bh=37809,zh=37810,Hh=37811,Vh=37812,kh=37813,Gh=37814,Wh=37815,Xh=37816,qh=37817,Yh=37818,jh=37819,$h=37820,Kh=37821,ya=36492,Zh=36494,Jh=36495,gx=36283,Qh=36284,eu=36285,tu=36286,wf=3e3,Hi=3001,_x=3200,vx=3201,xx=0,Ex=1,nn="",Mt="srgb",Ln="srgb-linear",nc="display-p3",jo="display-p3-linear",bo="linear",st="srgb",To="rec709",Ao="p3",Wi=7680,nu=519,Mx=512,Sx=513,yx=514,bf=515,wx=516,bx=517,Tx=518,Ax=519,iu=35044,su="300 es",ml=1035,kn=2e3,Ro=2001;class Is{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ru=1234567;const er=Math.PI/180,_r=180/Math.PI;function Us(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ct[t&255]+Ct[t>>8&255]+Ct[t>>16&255]+Ct[t>>24&255]+"-"+Ct[e&255]+Ct[e>>8&255]+"-"+Ct[e>>16&15|64]+Ct[e>>24&255]+"-"+Ct[n&63|128]+Ct[n>>8&255]+"-"+Ct[n>>16&255]+Ct[n>>24&255]+Ct[i&255]+Ct[i>>8&255]+Ct[i>>16&255]+Ct[i>>24&255]).toLowerCase()}function yt(t,e,n){return Math.max(e,Math.min(n,t))}function ic(t,e){return(t%e+e)%e}function Rx(t,e,n,i,s){return i+(t-e)*(s-i)/(n-e)}function Cx(t,e,n){return t!==e?(n-t)/(e-t):0}function tr(t,e,n){return(1-n)*t+n*e}function Lx(t,e,n,i){return tr(t,e,1-Math.exp(-n*i))}function Px(t,e=1){return e-Math.abs(ic(t,e*2)-e)}function Ix(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function Ux(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function Dx(t,e){return t+Math.floor(Math.random()*(e-t+1))}function Nx(t,e){return t+Math.random()*(e-t)}function Ox(t){return t*(.5-Math.random())}function Fx(t){t!==void 0&&(ru=t);let e=ru+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Bx(t){return t*er}function zx(t){return t*_r}function gl(t){return(t&t-1)===0&&t!==0}function Hx(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function Co(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Vx(t,e,n,i,s){const r=Math.cos,a=Math.sin,o=r(n/2),l=a(n/2),c=r((e+i)/2),h=a((e+i)/2),u=r((e-i)/2),d=a((e-i)/2),p=r((i-e)/2),_=a((i-e)/2);switch(s){case"XYX":t.set(o*h,l*u,l*d,o*c);break;case"YZY":t.set(l*d,o*h,l*u,o*c);break;case"ZXZ":t.set(l*u,l*d,o*h,o*c);break;case"XZX":t.set(o*h,l*_,l*p,o*c);break;case"YXY":t.set(l*p,o*h,l*_,o*c);break;case"ZYZ":t.set(l*_,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function as(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Dt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const vt={DEG2RAD:er,RAD2DEG:_r,generateUUID:Us,clamp:yt,euclideanModulo:ic,mapLinear:Rx,inverseLerp:Cx,lerp:tr,damp:Lx,pingpong:Px,smoothstep:Ix,smootherstep:Ux,randInt:Dx,randFloat:Nx,randFloatSpread:Ox,seededRandom:Fx,degToRad:Bx,radToDeg:zx,isPowerOfTwo:gl,ceilPowerOfTwo:Hx,floorPowerOfTwo:Co,setQuaternionFromProperEuler:Vx,normalize:Dt,denormalize:as};class Xe{constructor(e=0,n=0){Xe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),s=Math.sin(n),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,n,i,s,r,a,o,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,a,o,l,c)}set(e,n,i,s,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=n,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],p=i[5],_=i[8],v=s[0],m=s[3],f=s[6],y=s[1],E=s[4],R=s[7],O=s[2],C=s[5],P=s[8];return r[0]=a*v+o*y+l*O,r[3]=a*m+o*E+l*C,r[6]=a*f+o*R+l*P,r[1]=c*v+h*y+u*O,r[4]=c*m+h*E+u*C,r[7]=c*f+h*R+u*P,r[2]=d*v+p*y+_*O,r[5]=d*m+p*E+_*C,r[8]=d*f+p*R+_*P,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return n*a*h-n*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,p=c*r-a*l,_=n*u+i*d+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=u*v,e[1]=(s*c-h*i)*v,e[2]=(o*i-s*a)*v,e[3]=d*v,e[4]=(h*n-s*l)*v,e[5]=(s*r-o*n)*v,e[6]=p*v,e[7]=(i*l-c*n)*v,e[8]=(a*n-i*r)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(wa.makeScale(e,n)),this}rotate(e){return this.premultiply(wa.makeRotation(-e)),this}translate(e,n){return this.premultiply(wa.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const wa=new Ge;function Tf(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Lo(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function kx(){const t=Lo("canvas");return t.style.display="block",t}const ou={};function xs(t){t in ou||(ou[t]=!0,console.warn(t))}const au=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),lu=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),zr={[Ln]:{transfer:bo,primaries:To,toReference:t=>t,fromReference:t=>t},[Mt]:{transfer:st,primaries:To,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[jo]:{transfer:bo,primaries:Ao,toReference:t=>t.applyMatrix3(lu),fromReference:t=>t.applyMatrix3(au)},[nc]:{transfer:st,primaries:Ao,toReference:t=>t.convertSRGBToLinear().applyMatrix3(lu),fromReference:t=>t.applyMatrix3(au).convertLinearToSRGB()}},Gx=new Set([Ln,jo]),Ze={enabled:!0,_workingColorSpace:Ln,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!Gx.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=zr[e].toReference,s=zr[n].fromReference;return s(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return zr[t].primaries},getTransfer:function(t){return t===nn?bo:zr[t].transfer}};function Es(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ba(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Xi;class Af{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Xi===void 0&&(Xi=Lo("canvas")),Xi.width=e.width,Xi.height=e.height;const i=Xi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Xi}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Lo("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Es(r[a]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Es(n[i]/255)*255):n[i]=Es(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Wx=0;class Rf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wx++}),this.uuid=Us(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ta(s[a].image)):r.push(Ta(s[a]))}else r=Ta(s);i.url=r}return n||(e.images[this.uuid]=i),i}}function Ta(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Af.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Xx=0;class zt extends Is{constructor(e=zt.DEFAULT_IMAGE,n=zt.DEFAULT_MAPPING,i=un,s=un,r=Ot,a=ai,o=dn,l=fi,c=zt.DEFAULT_ANISOTROPY,h=nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xx++}),this.uuid=Us(),this.name="",this.source=new Rf(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(xs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Hi?Mt:nn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fl:e.x=e.x-Math.floor(e.x);break;case un:e.x=e.x<0?0:1;break;case pl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fl:e.y=e.y-Math.floor(e.y);break;case un:e.y=e.y<0?0:1;break;case pl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return xs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Mt?Hi:wf}set encoding(e){xs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Hi?Mt:nn}}zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=gf;zt.DEFAULT_ANISOTROPY=1;class bt{constructor(e=0,n=0,i=0,s=1){bt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*n+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*n+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*n+a[7]*i+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],_=l[9],v=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const E=(c+1)/2,R=(p+1)/2,O=(f+1)/2,C=(h+d)/4,P=(u+v)/4,ie=(_+m)/4;return E>R&&E>O?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=C/i,r=P/i):R>O?R<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(R),i=C/s,r=ie/s):O<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(O),i=P/r,s=ie/r),this.set(i,s,r,n),this}let y=Math.sqrt((m-_)*(m-_)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-_)/y,this.y=(u-v)/y,this.z=(d-h)/y,this.w=Math.acos((c+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qx extends Is{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new bt(0,0,e,n),this.scissorTest=!1,this.viewport=new bt(0,0,e,n);const s={width:e,height:n,depth:1};i.encoding!==void 0&&(xs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Hi?Mt:nn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ot,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new zt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Rf(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xi extends qx{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Cf extends zt{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yx extends zt{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ds{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3];const d=r[a+0],p=r[a+1],_=r[a+2],v=r[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=h,e[n+3]=u;return}if(o===1){e[n+0]=d,e[n+1]=p,e[n+2]=_,e[n+3]=v;return}if(u!==v||l!==d||c!==p||h!==_){let m=1-o;const f=l*d+c*p+h*_+u*v,y=f>=0?1:-1,E=1-f*f;if(E>Number.EPSILON){const O=Math.sqrt(E),C=Math.atan2(O,f*y);m=Math.sin(m*C)/O,o=Math.sin(o*C)/O}const R=o*y;if(l=l*m+d*R,c=c*m+p*R,h=h*m+_*R,u=u*m+v*R,m===1-o){const O=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=O,c*=O,h*=O,u*=O}}e[n]=l,e[n+1]=c,e[n+2]=h,e[n+3]=u}static multiplyQuaternionsFlat(e,n,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[a],d=r[a+1],p=r[a+2],_=r[a+3];return e[n]=o*_+h*u+l*p-c*d,e[n+1]=l*_+h*d+c*u-o*p,e[n+2]=c*_+h*p+o*d-l*u,e[n+3]=h*_-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),u=o(r/2),d=l(i/2),p=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*p*_,this._y=c*p*u-d*h*_,this._z=c*h*_+d*p*u,this._w=c*h*u-d*p*_;break;case"YXZ":this._x=d*h*u+c*p*_,this._y=c*p*u-d*h*_,this._z=c*h*_-d*p*u,this._w=c*h*u+d*p*_;break;case"ZXY":this._x=d*h*u-c*p*_,this._y=c*p*u+d*h*_,this._z=c*h*_+d*p*u,this._w=c*h*u-d*p*_;break;case"ZYX":this._x=d*h*u-c*p*_,this._y=c*p*u+d*h*_,this._z=c*h*_-d*p*u,this._w=c*h*u+d*p*_;break;case"YZX":this._x=d*h*u+c*p*_,this._y=c*p*u+d*h*_,this._z=c*h*_-d*p*u,this._w=c*h*u-d*p*_;break;case"XZY":this._x=d*h*u-c*p*_,this._y=c*p*u-d*h*_,this._z=c*h*_+d*p*u,this._w=c*h*u+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],s=n[4],r=n[8],a=n[1],o=n[5],l=n[9],c=n[2],h=n[6],u=n[10],d=i+o+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(i>o&&i>u){const p=2*Math.sqrt(1+i-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-i-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-i-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,s=e._y,r=e._z,a=e._w,o=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-n;return this._w=p*a+n*this._w,this._x=p*i+n*this._x,this._y=p*s+n*this._y,this._z=p*r+n*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-n)*h)/c,d=Math.sin(n*h)/c;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(n*Math.cos(s),i*Math.sin(r),i*Math.cos(r),n*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,n=0,i=0){V.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(cu.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(cu.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*n-r*s),u=2*(r*i-a*n);return this.x=n+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,s=e.y,r=e.z,a=n.x,o=n.y,l=n.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Aa.copy(this).projectOnVector(e),this.sub(Aa)}reflect(e){return this.sub(Aa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Aa=new V,cu=new Ds;class Ns{constructor(e=new V(1/0,1/0,1/0),n=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(rn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(rn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=rn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,rn):rn.fromBufferAttribute(r,a),rn.applyMatrix4(e.matrixWorld),this.expandByPoint(rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Hr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Hr.copy(i.boundingBox)),Hr.applyMatrix4(e.matrixWorld),this.union(Hr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,rn),rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vs),Vr.subVectors(this.max,Vs),qi.subVectors(e.a,Vs),Yi.subVectors(e.b,Vs),ji.subVectors(e.c,Vs),Kn.subVectors(Yi,qi),Zn.subVectors(ji,Yi),Ai.subVectors(qi,ji);let n=[0,-Kn.z,Kn.y,0,-Zn.z,Zn.y,0,-Ai.z,Ai.y,Kn.z,0,-Kn.x,Zn.z,0,-Zn.x,Ai.z,0,-Ai.x,-Kn.y,Kn.x,0,-Zn.y,Zn.x,0,-Ai.y,Ai.x,0];return!Ra(n,qi,Yi,ji,Vr)||(n=[1,0,0,0,1,0,0,0,1],!Ra(n,qi,Yi,ji,Vr))?!1:(kr.crossVectors(Kn,Zn),n=[kr.x,kr.y,kr.z],Ra(n,qi,Yi,ji,Vr))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Un),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Un=[new V,new V,new V,new V,new V,new V,new V,new V],rn=new V,Hr=new Ns,qi=new V,Yi=new V,ji=new V,Kn=new V,Zn=new V,Ai=new V,Vs=new V,Vr=new V,kr=new V,Ri=new V;function Ra(t,e,n,i,s){for(let r=0,a=t.length-3;r<=a;r+=3){Ri.fromArray(t,r);const o=s.x*Math.abs(Ri.x)+s.y*Math.abs(Ri.y)+s.z*Math.abs(Ri.z),l=e.dot(Ri),c=n.dot(Ri),h=i.dot(Ri);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const jx=new Ns,ks=new V,Ca=new V;class sc{constructor(e=new V,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):jx.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ks.subVectors(e,this.center);const n=ks.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(ks,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ca.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ks.copy(e.center).add(Ca)),this.expandByPoint(ks.copy(e.center).sub(Ca))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Dn=new V,La=new V,Gr=new V,Jn=new V,Pa=new V,Wr=new V,Ia=new V;class Lf{constructor(e=new V,n=new V(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Dn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Dn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Dn.copy(this.origin).addScaledVector(this.direction,n),Dn.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){La.copy(e).add(n).multiplyScalar(.5),Gr.copy(n).sub(e).normalize(),Jn.copy(this.origin).sub(La);const r=e.distanceTo(n)*.5,a=-this.direction.dot(Gr),o=Jn.dot(this.direction),l=-Jn.dot(Gr),c=Jn.lengthSq(),h=Math.abs(1-a*a);let u,d,p,_;if(h>0)if(u=a*l-o,d=a*o-l,_=r*h,u>=0)if(d>=-_)if(d<=_){const v=1/h;u*=v,d*=v,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-_?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=_?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(La).addScaledVector(Gr,d),p}intersectSphere(e,n){Dn.subVectors(e.center,this.origin);const i=Dn.dot(this.direction),s=Dn.dot(Dn)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,Dn)!==null}intersectTriangle(e,n,i,s,r){Pa.subVectors(n,e),Wr.subVectors(i,e),Ia.crossVectors(Pa,Wr);let a=this.direction.dot(Ia),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Jn.subVectors(this.origin,e);const l=o*this.direction.dot(Wr.crossVectors(Jn,Wr));if(l<0)return null;const c=o*this.direction.dot(Pa.cross(Jn));if(c<0||l+c>a)return null;const h=-o*Jn.dot(Ia);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dt{constructor(e,n,i,s,r,a,o,l,c,h,u,d,p,_,v,m){dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,a,o,l,c,h,u,d,p,_,v,m)}set(e,n,i,s,r,a,o,l,c,h,u,d,p,_,v,m){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=_,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,s=1/$i.setFromMatrixColumn(e,0).length(),r=1/$i.setFromMatrixColumn(e,1).length(),a=1/$i.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=a*h,p=a*u,_=o*h,v=o*u;n[0]=l*h,n[4]=-l*u,n[8]=c,n[1]=p+_*c,n[5]=d-v*c,n[9]=-o*l,n[2]=v-d*c,n[6]=_+p*c,n[10]=a*l}else if(e.order==="YXZ"){const d=l*h,p=l*u,_=c*h,v=c*u;n[0]=d+v*o,n[4]=_*o-p,n[8]=a*c,n[1]=a*u,n[5]=a*h,n[9]=-o,n[2]=p*o-_,n[6]=v+d*o,n[10]=a*l}else if(e.order==="ZXY"){const d=l*h,p=l*u,_=c*h,v=c*u;n[0]=d-v*o,n[4]=-a*u,n[8]=_+p*o,n[1]=p+_*o,n[5]=a*h,n[9]=v-d*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const d=a*h,p=a*u,_=o*h,v=o*u;n[0]=l*h,n[4]=_*c-p,n[8]=d*c+v,n[1]=l*u,n[5]=v*c+d,n[9]=p*c-_,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,_=o*l,v=o*c;n[0]=l*h,n[4]=v-d*u,n[8]=_*u+p,n[1]=u,n[5]=a*h,n[9]=-o*h,n[2]=-c*h,n[6]=p*u+_,n[10]=d-v*u}else if(e.order==="XZY"){const d=a*l,p=a*c,_=o*l,v=o*c;n[0]=l*h,n[4]=-u,n[8]=c*h,n[1]=d*u+v,n[5]=a*h,n[9]=p*u-_,n[2]=_*u-p,n[6]=o*h,n[10]=v*u+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose($x,e,Kx)}lookAt(e,n,i){const s=this.elements;return qt.subVectors(e,n),qt.lengthSq()===0&&(qt.z=1),qt.normalize(),Qn.crossVectors(i,qt),Qn.lengthSq()===0&&(Math.abs(i.z)===1?qt.x+=1e-4:qt.z+=1e-4,qt.normalize(),Qn.crossVectors(i,qt)),Qn.normalize(),Xr.crossVectors(qt,Qn),s[0]=Qn.x,s[4]=Xr.x,s[8]=qt.x,s[1]=Qn.y,s[5]=Xr.y,s[9]=qt.y,s[2]=Qn.z,s[6]=Xr.z,s[10]=qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],p=i[13],_=i[2],v=i[6],m=i[10],f=i[14],y=i[3],E=i[7],R=i[11],O=i[15],C=s[0],P=s[4],ie=s[8],me=s[12],M=s[1],T=s[5],oe=s[9],ue=s[13],N=s[2],K=s[6],k=s[10],J=s[14],X=s[3],ee=s[7],le=s[11],ae=s[15];return r[0]=a*C+o*M+l*N+c*X,r[4]=a*P+o*T+l*K+c*ee,r[8]=a*ie+o*oe+l*k+c*le,r[12]=a*me+o*ue+l*J+c*ae,r[1]=h*C+u*M+d*N+p*X,r[5]=h*P+u*T+d*K+p*ee,r[9]=h*ie+u*oe+d*k+p*le,r[13]=h*me+u*ue+d*J+p*ae,r[2]=_*C+v*M+m*N+f*X,r[6]=_*P+v*T+m*K+f*ee,r[10]=_*ie+v*oe+m*k+f*le,r[14]=_*me+v*ue+m*J+f*ae,r[3]=y*C+E*M+R*N+O*X,r[7]=y*P+E*T+R*K+O*ee,r[11]=y*ie+E*oe+R*k+O*le,r[15]=y*me+E*ue+R*J+O*ae,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],_=e[3],v=e[7],m=e[11],f=e[15];return _*(+r*l*u-s*c*u-r*o*d+i*c*d+s*o*p-i*l*p)+v*(+n*l*p-n*c*d+r*a*d-s*a*p+s*c*h-r*l*h)+m*(+n*c*u-n*o*p-r*a*u+i*a*p+r*o*h-i*c*h)+f*(-s*o*h-n*l*u+n*o*d+s*a*u-i*a*d+i*l*h)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],_=e[12],v=e[13],m=e[14],f=e[15],y=u*m*c-v*d*c+v*l*p-o*m*p-u*l*f+o*d*f,E=_*d*c-h*m*c-_*l*p+a*m*p+h*l*f-a*d*f,R=h*v*c-_*u*c+_*o*p-a*v*p-h*o*f+a*u*f,O=_*u*l-h*v*l-_*o*d+a*v*d+h*o*m-a*u*m,C=n*y+i*E+s*R+r*O;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/C;return e[0]=y*P,e[1]=(v*d*r-u*m*r-v*s*p+i*m*p+u*s*f-i*d*f)*P,e[2]=(o*m*r-v*l*r+v*s*c-i*m*c-o*s*f+i*l*f)*P,e[3]=(u*l*r-o*d*r-u*s*c+i*d*c+o*s*p-i*l*p)*P,e[4]=E*P,e[5]=(h*m*r-_*d*r+_*s*p-n*m*p-h*s*f+n*d*f)*P,e[6]=(_*l*r-a*m*r-_*s*c+n*m*c+a*s*f-n*l*f)*P,e[7]=(a*d*r-h*l*r+h*s*c-n*d*c-a*s*p+n*l*p)*P,e[8]=R*P,e[9]=(_*u*r-h*v*r-_*i*p+n*v*p+h*i*f-n*u*f)*P,e[10]=(a*v*r-_*o*r+_*i*c-n*v*c-a*i*f+n*o*f)*P,e[11]=(h*o*r-a*u*r-h*i*c+n*u*c+a*i*p-n*o*p)*P,e[12]=O*P,e[13]=(h*v*s-_*u*s+_*i*d-n*v*d-h*i*m+n*u*m)*P,e[14]=(_*o*s-a*v*s-_*i*l+n*v*l+a*i*m-n*o*m)*P,e[15]=(a*u*s-h*o*s+h*i*l-n*u*l-a*i*d+n*o*d)*P,this}scale(e){const n=this.elements,i=e.x,s=e.y,r=e.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),s=Math.sin(n),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){const s=this.elements,r=n._x,a=n._y,o=n._z,l=n._w,c=r+r,h=a+a,u=o+o,d=r*c,p=r*h,_=r*u,v=a*h,m=a*u,f=o*u,y=l*c,E=l*h,R=l*u,O=i.x,C=i.y,P=i.z;return s[0]=(1-(v+f))*O,s[1]=(p+R)*O,s[2]=(_-E)*O,s[3]=0,s[4]=(p-R)*C,s[5]=(1-(d+f))*C,s[6]=(m+y)*C,s[7]=0,s[8]=(_+E)*P,s[9]=(m-y)*P,s[10]=(1-(d+v))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){const s=this.elements;let r=$i.set(s[0],s[1],s[2]).length();const a=$i.set(s[4],s[5],s[6]).length(),o=$i.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],on.copy(this);const c=1/r,h=1/a,u=1/o;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=h,on.elements[5]*=h,on.elements[6]*=h,on.elements[8]*=u,on.elements[9]*=u,on.elements[10]*=u,n.setFromRotationMatrix(on),i.x=r,i.y=a,i.z=o,this}makePerspective(e,n,i,s,r,a,o=kn){const l=this.elements,c=2*r/(n-e),h=2*r/(i-s),u=(n+e)/(n-e),d=(i+s)/(i-s);let p,_;if(o===kn)p=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Ro)p=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,s,r,a,o=kn){const l=this.elements,c=1/(n-e),h=1/(i-s),u=1/(a-r),d=(n+e)*c,p=(i+s)*h;let _,v;if(o===kn)_=(a+r)*u,v=-2*u;else if(o===Ro)_=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const $i=new V,on=new dt,$x=new V(0,0,0),Kx=new V(1,1,1),Qn=new V,Xr=new V,qt=new V,hu=new dt,uu=new Ds;class yr{constructor(e=0,n=0,i=0,s=yr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(n){case"XYZ":this._y=Math.asin(yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(yt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-yt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return hu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hu,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return uu.setFromEuler(this),this.setFromQuaternion(uu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yr.DEFAULT_ORDER="XYZ";class rc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Zx=0;const du=new V,Ki=new Ds,Nn=new dt,qr=new V,Gs=new V,Jx=new V,Qx=new Ds,fu=new V(1,0,0),pu=new V(0,1,0),mu=new V(0,0,1),eE={type:"added"},tE={type:"removed"};class Kt extends Is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zx++}),this.uuid=Us(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Kt.DEFAULT_UP.clone();const e=new V,n=new yr,i=new Ds,s=new V(1,1,1);function r(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new dt},normalMatrix:{value:new Ge}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=Kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ki.setFromAxisAngle(e,n),this.quaternion.multiply(Ki),this}rotateOnWorldAxis(e,n){return Ki.setFromAxisAngle(e,n),this.quaternion.premultiply(Ki),this}rotateX(e){return this.rotateOnAxis(fu,e)}rotateY(e){return this.rotateOnAxis(pu,e)}rotateZ(e){return this.rotateOnAxis(mu,e)}translateOnAxis(e,n){return du.copy(e).applyQuaternion(this.quaternion),this.position.add(du.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(fu,e)}translateY(e){return this.translateOnAxis(pu,e)}translateZ(e){return this.translateOnAxis(mu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?qr.copy(e):qr.set(e,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(Gs,qr,this.up):Nn.lookAt(qr,Gs,this.up),this.quaternion.setFromRotationMatrix(Nn),s&&(Nn.extractRotation(s.matrixWorld),Ki.setFromRotationMatrix(Nn),this.quaternion.premultiply(Ki.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(eE)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(tE)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Nn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Nn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,e,Jx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,Qx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++){const r=n[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++){const o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=s,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Kt.DEFAULT_UP=new V(0,1,0);Kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const an=new V,On=new V,Ua=new V,Fn=new V,Zi=new V,Ji=new V,gu=new V,Da=new V,Na=new V,Oa=new V;class bn{constructor(e=new V,n=new V,i=new V){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),an.subVectors(e,n),s.cross(an);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,n,i,s,r){an.subVectors(s,n),On.subVectors(i,n),Ua.subVectors(e,n);const a=an.dot(an),o=an.dot(On),l=an.dot(Ua),c=On.dot(On),h=On.dot(Ua),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(c*l-o*h)*d,_=(a*h-o*l)*d;return r.set(1-p-_,_,p)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(e,n,i,s,r,a,o,l){return this.getBarycoord(e,n,i,s,Fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Fn.x),l.addScaledVector(a,Fn.y),l.addScaledVector(o,Fn.z),l)}static isFrontFacing(e,n,i,s){return an.subVectors(i,n),On.subVectors(e,n),an.cross(On).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return an.subVectors(this.c,this.b),On.subVectors(this.a,this.b),an.cross(On).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return bn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,s,r){return bn.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}containsPoint(e){return bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,s=this.b,r=this.c;let a,o;Zi.subVectors(s,i),Ji.subVectors(r,i),Da.subVectors(e,i);const l=Zi.dot(Da),c=Ji.dot(Da);if(l<=0&&c<=0)return n.copy(i);Na.subVectors(e,s);const h=Zi.dot(Na),u=Ji.dot(Na);if(h>=0&&u<=h)return n.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),n.copy(i).addScaledVector(Zi,a);Oa.subVectors(e,r);const p=Zi.dot(Oa),_=Ji.dot(Oa);if(_>=0&&p<=_)return n.copy(r);const v=p*c-l*_;if(v<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(Ji,o);const m=h*_-p*u;if(m<=0&&u-h>=0&&p-_>=0)return gu.subVectors(r,s),o=(u-h)/(u-h+(p-_)),n.copy(s).addScaledVector(gu,o);const f=1/(m+v+d);return a=v*f,o=d*f,n.copy(i).addScaledVector(Zi,a).addScaledVector(Ji,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Pf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},Yr={h:0,s:0,l:0};function Fa(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,n),this}setRGB(e,n,i,s=Ze.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ze.toWorkingColorSpace(this,s),this}setHSL(e,n,i,s=Ze.workingColorSpace){if(e=ic(e,1),n=yt(n,0,1),i=yt(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,a=2*i-r;this.r=Fa(a,r,e+1/3),this.g=Fa(a,r,e),this.b=Fa(a,r,e-1/3)}return Ze.toWorkingColorSpace(this,s),this}setStyle(e,n=Mt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(r,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Mt){const i=Pf[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Es(e.r),this.g=Es(e.g),this.b=Es(e.b),this}copyLinearToSRGB(e){return this.r=ba(e.r),this.g=ba(e.g),this.b=ba(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mt){return Ze.fromWorkingColorSpace(Lt.copy(this),e),Math.round(yt(Lt.r*255,0,255))*65536+Math.round(yt(Lt.g*255,0,255))*256+Math.round(yt(Lt.b*255,0,255))}getHexString(e=Mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ze.workingColorSpace){Ze.fromWorkingColorSpace(Lt.copy(this),n);const i=Lt.r,s=Lt.g,r=Lt.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,n=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(Lt.copy(this),n),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=Mt){Ze.fromWorkingColorSpace(Lt.copy(this),e);const n=Lt.r,i=Lt.g,s=Lt.b;return e!==Mt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(ei),this.setHSL(ei.h+e,ei.s+n,ei.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ei),e.getHSL(Yr);const i=tr(ei.h,Yr.h,n),s=tr(ei.s,Yr.s,n),r=tr(ei.l,Yr.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Lt=new Qe;Qe.NAMES=Pf;let nE=0;class $o extends Is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nE++}),this.uuid=Us(),this.name="",this.type="Material",this.blending=vs,this.side=vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cl,this.blendDst=hl,this.blendEquation=Di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=wo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wi,this.stencilZFail=Wi,this.stencilZPass=Wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==vs&&(i.blending=this.blending),this.side!==vi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==cl&&(i.blendSrc=this.blendSrc),this.blendDst!==hl&&(i.blendDst=this.blendDst),this.blendEquation!==Di&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==wo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==nu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Wi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Wi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(n){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class oc extends $o{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=mf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ut=new V,jr=new Xe;class Rn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=iu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Vn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return xs("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)jr.fromBufferAttribute(this,n),jr.applyMatrix3(e),this.setXY(n,jr.x,jr.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)ut.fromBufferAttribute(this,n),ut.applyMatrix3(e),this.setXYZ(n,ut.x,ut.y,ut.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)ut.fromBufferAttribute(this,n),ut.applyMatrix4(e),this.setXYZ(n,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)ut.fromBufferAttribute(this,n),ut.applyNormalMatrix(e),this.setXYZ(n,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)ut.fromBufferAttribute(this,n),ut.transformDirection(e),this.setXYZ(n,ut.x,ut.y,ut.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=as(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Dt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=as(n,this.array)),n}setX(e,n){return this.normalized&&(n=Dt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=as(n,this.array)),n}setY(e,n){return this.normalized&&(n=Dt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=as(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Dt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=as(n,this.array)),n}setW(e,n){return this.normalized&&(n=Dt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Dt(n,this.array),i=Dt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=Dt(n,this.array),i=Dt(i,this.array),s=Dt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e*=this.itemSize,this.normalized&&(n=Dt(n,this.array),i=Dt(i,this.array),s=Dt(s,this.array),r=Dt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==iu&&(e.usage=this.usage),e}}class If extends Rn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Uf extends Rn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Cn extends Rn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let iE=0;const Qt=new dt,Ba=new Kt,Qi=new V,Yt=new Ns,Ws=new Ns,gt=new V;class Si extends Is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:iE++}),this.uuid=Us(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Tf(e)?Uf:If)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ge().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qt.makeRotationFromQuaternion(e),this.applyMatrix4(Qt),this}rotateX(e){return Qt.makeRotationX(e),this.applyMatrix4(Qt),this}rotateY(e){return Qt.makeRotationY(e),this.applyMatrix4(Qt),this}rotateZ(e){return Qt.makeRotationZ(e),this.applyMatrix4(Qt),this}translate(e,n,i){return Qt.makeTranslation(e,n,i),this.applyMatrix4(Qt),this}scale(e,n,i){return Qt.makeScale(e,n,i),this.applyMatrix4(Qt),this}lookAt(e){return Ba.lookAt(e),Ba.updateMatrix(),this.applyMatrix4(Ba.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qi).negate(),this.translate(Qi.x,Qi.y,Qi.z),this}setFromPoints(e){const n=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];n.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Cn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ns);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){const r=n[i];Yt.setFromBufferAttribute(r),this.morphTargetsRelative?(gt.addVectors(this.boundingBox.min,Yt.min),this.boundingBox.expandByPoint(gt),gt.addVectors(this.boundingBox.max,Yt.max),this.boundingBox.expandByPoint(gt)):(this.boundingBox.expandByPoint(Yt.min),this.boundingBox.expandByPoint(Yt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if(Yt.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const o=n[r];Ws.setFromBufferAttribute(o),this.morphTargetsRelative?(gt.addVectors(Yt.min,Ws.min),Yt.expandByPoint(gt),gt.addVectors(Yt.max,Ws.max),Yt.expandByPoint(gt)):(Yt.expandByPoint(Ws.min),Yt.expandByPoint(Ws.max))}Yt.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)gt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(gt));if(n)for(let r=0,a=n.length;r<a;r++){const o=n[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)gt.fromBufferAttribute(o,c),l&&(Qi.fromBufferAttribute(e,c),gt.add(Qi)),s=Math.max(s,i.distanceToSquared(gt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,s=n.position.array,r=n.normal.array,a=n.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Rn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let M=0;M<o;M++)c[M]=new V,h[M]=new V;const u=new V,d=new V,p=new V,_=new Xe,v=new Xe,m=new Xe,f=new V,y=new V;function E(M,T,oe){u.fromArray(s,M*3),d.fromArray(s,T*3),p.fromArray(s,oe*3),_.fromArray(a,M*2),v.fromArray(a,T*2),m.fromArray(a,oe*2),d.sub(u),p.sub(u),v.sub(_),m.sub(_);const ue=1/(v.x*m.y-m.x*v.y);isFinite(ue)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-v.y).multiplyScalar(ue),y.copy(p).multiplyScalar(v.x).addScaledVector(d,-m.x).multiplyScalar(ue),c[M].add(f),c[T].add(f),c[oe].add(f),h[M].add(y),h[T].add(y),h[oe].add(y))}let R=this.groups;R.length===0&&(R=[{start:0,count:i.length}]);for(let M=0,T=R.length;M<T;++M){const oe=R[M],ue=oe.start,N=oe.count;for(let K=ue,k=ue+N;K<k;K+=3)E(i[K+0],i[K+1],i[K+2])}const O=new V,C=new V,P=new V,ie=new V;function me(M){P.fromArray(r,M*3),ie.copy(P);const T=c[M];O.copy(T),O.sub(P.multiplyScalar(P.dot(T))).normalize(),C.crossVectors(ie,T);const ue=C.dot(h[M])<0?-1:1;l[M*4]=O.x,l[M*4+1]=O.y,l[M*4+2]=O.z,l[M*4+3]=ue}for(let M=0,T=R.length;M<T;++M){const oe=R[M],ue=oe.start,N=oe.count;for(let K=ue,k=ue+N;K<k;K+=3)me(i[K+0]),me(i[K+1]),me(i[K+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Rn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const s=new V,r=new V,a=new V,o=new V,l=new V,c=new V,h=new V,u=new V;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(n,_),r.fromBufferAttribute(n,v),a.fromBufferAttribute(n,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)s.fromBufferAttribute(n,d+0),r.fromBufferAttribute(n,d+1),a.fromBufferAttribute(n,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)gt.fromBufferAttribute(e,n),gt.normalize(),e.setXYZ(n,gt.x,gt.y,gt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let p=0,_=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*h;for(let f=0;f<h;f++)d[_++]=c[p++]}return new Rn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Si,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);n.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=e(d,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(n))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _u=new dt,Ci=new Lf,$r=new sc,vu=new V,es=new V,ts=new V,ns=new V,za=new V,Kr=new V,Zr=new Xe,Jr=new Xe,Qr=new Xe,xu=new V,Eu=new V,Mu=new V,eo=new V,to=new V;class An extends Kt{constructor(e=new Si,n=new oc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,n){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Kr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(za.fromBufferAttribute(u,e),a?Kr.addScaledVector(za,h):Kr.addScaledVector(za.sub(n),h))}n.add(Kr)}return n}raycast(e,n){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),$r.copy(i.boundingSphere),$r.applyMatrix4(r),Ci.copy(e.ray).recast(e.near),!($r.containsPoint(Ci.origin)===!1&&(Ci.intersectSphere($r,vu)===null||Ci.origin.distanceToSquared(vu)>(e.far-e.near)**2))&&(_u.copy(r).invert(),Ci.copy(e.ray).applyMatrix4(_u),!(i.boundingBox!==null&&Ci.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ci)))}_computeIntersections(e,n,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,v=d.length;_<v;_++){const m=d[_],f=a[m.materialIndex],y=Math.max(m.start,p.start),E=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let R=y,O=E;R<O;R+=3){const C=o.getX(R),P=o.getX(R+1),ie=o.getX(R+2);s=no(this,f,e,i,c,h,u,C,P,ie),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const _=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=_,f=v;m<f;m+=3){const y=o.getX(m),E=o.getX(m+1),R=o.getX(m+2);s=no(this,a,e,i,c,h,u,y,E,R),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,v=d.length;_<v;_++){const m=d[_],f=a[m.materialIndex],y=Math.max(m.start,p.start),E=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let R=y,O=E;R<O;R+=3){const C=R,P=R+1,ie=R+2;s=no(this,f,e,i,c,h,u,C,P,ie),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const _=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=_,f=v;m<f;m+=3){const y=m,E=m+1,R=m+2;s=no(this,a,e,i,c,h,u,y,E,R),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}}function sE(t,e,n,i,s,r,a,o){let l;if(e.side===Vt?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===vi,o),l===null)return null;to.copy(o),to.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(to);return c<n.near||c>n.far?null:{distance:c,point:to.clone(),object:t}}function no(t,e,n,i,s,r,a,o,l,c){t.getVertexPosition(o,es),t.getVertexPosition(l,ts),t.getVertexPosition(c,ns);const h=sE(t,e,n,i,es,ts,ns,eo);if(h){s&&(Zr.fromBufferAttribute(s,o),Jr.fromBufferAttribute(s,l),Qr.fromBufferAttribute(s,c),h.uv=bn.getInterpolation(eo,es,ts,ns,Zr,Jr,Qr,new Xe)),r&&(Zr.fromBufferAttribute(r,o),Jr.fromBufferAttribute(r,l),Qr.fromBufferAttribute(r,c),h.uv1=bn.getInterpolation(eo,es,ts,ns,Zr,Jr,Qr,new Xe),h.uv2=h.uv1),a&&(xu.fromBufferAttribute(a,o),Eu.fromBufferAttribute(a,l),Mu.fromBufferAttribute(a,c),h.normal=bn.getInterpolation(eo,es,ts,ns,xu,Eu,Mu,new V),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new V,materialIndex:0};bn.getNormal(es,ts,ns,u.normal),h.face=u}return h}class wr extends Si{constructor(e=1,n=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,p=0;_("z","y","x",-1,-1,i,n,e,a,r,0),_("z","y","x",1,-1,i,n,-e,a,r,1),_("x","z","y",1,1,e,i,n,s,a,2),_("x","z","y",1,-1,e,i,-n,s,a,3),_("x","y","z",1,-1,e,n,i,s,r,4),_("x","y","z",-1,-1,e,n,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Cn(c,3)),this.setAttribute("normal",new Cn(h,3)),this.setAttribute("uv",new Cn(u,2));function _(v,m,f,y,E,R,O,C,P,ie,me){const M=R/P,T=O/ie,oe=R/2,ue=O/2,N=C/2,K=P+1,k=ie+1;let J=0,X=0;const ee=new V;for(let le=0;le<k;le++){const ae=le*T-ue;for(let xe=0;xe<K;xe++){const Re=xe*M-oe;ee[v]=Re*y,ee[m]=ae*E,ee[f]=N,c.push(ee.x,ee.y,ee.z),ee[v]=0,ee[m]=0,ee[f]=C>0?1:-1,h.push(ee.x,ee.y,ee.z),u.push(xe/P),u.push(1-le/ie),J+=1}}for(let le=0;le<ie;le++)for(let ae=0;ae<P;ae++){const xe=d+ae+K*le,Re=d+ae+K*(le+1),$=d+(ae+1)+K*(le+1),he=d+(ae+1)+K*le;l.push(xe,Re,he),l.push(Re,$,he),X+=6}o.addGroup(p,X,me),p+=X,d+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Cs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const s=t[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone():Array.isArray(s)?e[n][i]=s.slice():e[n][i]=s}}return e}function Nt(t){const e={};for(let n=0;n<t.length;n++){const i=Cs(t[n]);for(const s in i)e[s]=i[s]}return e}function rE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Df(t){return t.getRenderTarget()===null?t.outputColorSpace:Ze.workingColorSpace}const oE={clone:Cs,merge:Nt};var aE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ei extends $o{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=aE,this.fragmentShader=lE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cs(e.uniforms),this.uniformsGroups=rE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?n.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[s]={type:"m4",value:a.toArray()}:n.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Nf extends Kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=kn}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ti=new V,Su=new Xe,yu=new Xe;class tn extends Nf{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=_r*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(er*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _r*2*Math.atan(Math.tan(er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ti.x,ti.y).multiplyScalar(-e/ti.z),ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ti.x,ti.y).multiplyScalar(-e/ti.z)}getViewSize(e,n){return this.getViewBounds(e,Su,yu),n.subVectors(yu,Su)}setViewOffset(e,n,i,s,r,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(er*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,n-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const is=-90,ss=1;class cE extends Kt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new tn(is,ss,e,n);s.layers=this.layers,this.add(s);const r=new tn(is,ss,e,n);r.layers=this.layers,this.add(r);const a=new tn(is,ss,e,n);a.layers=this.layers,this.add(a);const o=new tn(is,ss,e,n);o.layers=this.layers,this.add(o);const l=new tn(is,ss,e,n);l.layers=this.layers,this.add(l);const c=new tn(is,ss,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,s,r,a,o,l]=n;for(const c of n)this.remove(c);if(e===kn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ro)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(n,r),e.setRenderTarget(i,1,s),e.render(n,a),e.setRenderTarget(i,2,s),e.render(n,o),e.setRenderTarget(i,3,s),e.render(n,l),e.setRenderTarget(i,4,s),e.render(n,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(n,h),e.setRenderTarget(u,d,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Of extends zt{constructor(e,n,i,s,r,a,o,l,c,h){e=e!==void 0?e:[],n=n!==void 0?n:Ts,super(e,n,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class hE extends xi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];n.encoding!==void 0&&(xs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Hi?Mt:nn),this.texture=new Of(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ot}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new wr(5,5,5),r=new Ei({name:"CubemapFromEquirect",uniforms:Cs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Vt,blending:ui});r.uniforms.tEquirect.value=n;const a=new An(s,r),o=n.minFilter;return n.minFilter===ai&&(n.minFilter=Ot),new cE(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,s);e.setRenderTarget(r)}}const Ha=new V,uE=new V,dE=new Ge;class Pi{constructor(e=new V(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const s=Ha.subVectors(i,n).cross(uE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Ha),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:n.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||dE.getNormalMatrix(e),s=this.coplanarPoint(Ha).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Li=new sc,io=new V;class ac{constructor(e=new Pi,n=new Pi,i=new Pi,s=new Pi,r=new Pi,a=new Pi){this.planes=[e,n,i,s,r,a]}set(e,n,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=kn){const i=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],p=s[8],_=s[9],v=s[10],m=s[11],f=s[12],y=s[13],E=s[14],R=s[15];if(i[0].setComponents(l-r,d-c,m-p,R-f).normalize(),i[1].setComponents(l+r,d+c,m+p,R+f).normalize(),i[2].setComponents(l+a,d+h,m+_,R+y).normalize(),i[3].setComponents(l-a,d-h,m-_,R-y).normalize(),i[4].setComponents(l-o,d-u,m-v,R-E).normalize(),n===kn)i[5].setComponents(l+o,d+u,m+v,R+E).normalize();else if(n===Ro)i[5].setComponents(o,u,v,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Li.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Li.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Li)}intersectsSprite(e){return Li.center.set(0,0,0),Li.radius=.7071067811865476,Li.applyMatrix4(e.matrixWorld),this.intersectsSphere(Li)}intersectsSphere(e){const n=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(io.x=s.normal.x>0?e.max.x:e.min.x,io.y=s.normal.y>0?e.max.y:e.min.y,io.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(io)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ff(){let t=null,e=!1,n=null,i=null;function s(r,a){n(r,a),i=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function fE(t,e){const n=e.isWebGL2,i=new WeakMap;function s(c,h){const u=c.array,d=c.usage,p=u.byteLength,_=t.createBuffer();t.bindBuffer(h,_),t.bufferData(h,u,d),c.onUploadCallback();let v;if(u instanceof Float32Array)v=t.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)v=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)v=t.SHORT;else if(u instanceof Uint32Array)v=t.UNSIGNED_INT;else if(u instanceof Int32Array)v=t.INT;else if(u instanceof Int8Array)v=t.BYTE;else if(u instanceof Uint8Array)v=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)v=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:_,type:v,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:p}}function r(c,h,u){const d=h.array,p=h._updateRange,_=h.updateRanges;if(t.bindBuffer(u,c),p.count===-1&&_.length===0&&t.bufferSubData(u,0,d),_.length!==0){for(let v=0,m=_.length;v<m;v++){const f=_[v];n?t.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):t.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}p.count!==-1&&(n?t.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):t.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h&&(t.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);if(u===void 0)i.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:a,remove:o,update:l}}class Ko extends Si{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};const r=e/2,a=n/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=n/l,p=[],_=[],v=[],m=[];for(let f=0;f<h;f++){const y=f*d-a;for(let E=0;E<c;E++){const R=E*u-r;_.push(R,-y,0),v.push(0,0,1),m.push(E/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<o;y++){const E=y+c*f,R=y+c*(f+1),O=y+1+c*(f+1),C=y+1+c*f;p.push(E,R,C),p.push(R,O,C)}this.setIndex(p),this.setAttribute("position",new Cn(_,3)),this.setAttribute("normal",new Cn(v,3)),this.setAttribute("uv",new Cn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ko(e.width,e.height,e.widthSegments,e.heightSegments)}}var pE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mE=`#ifdef USE_ALPHAHASH
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
#endif`,gE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_E=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,EE=`#ifdef USE_AOMAP
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
#endif`,ME=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,SE=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,yE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,wE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,TE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,AE=`#ifdef USE_IRIDESCENCE
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
#endif`,RE=`#ifdef USE_BUMPMAP
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
#endif`,CE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,LE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,PE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,IE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,UE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,DE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,NE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,OE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,FE=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,BE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zE=`vec3 transformedNormal = objectNormal;
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
#endif`,HE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,VE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,GE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,WE="gl_FragColor = linearToOutputTexel( gl_FragColor );",XE=`
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
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,qE=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,YE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jE=`#ifdef USE_ENVMAP
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
#endif`,$E=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,KE=`#ifdef USE_ENVMAP
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
#endif`,ZE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,JE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,QE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,eM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tM=`#ifdef USE_GRADIENTMAP
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
}`,nM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,iM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,oM=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,aM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,lM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dM=`PhysicalMaterial material;
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
#endif`,fM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,pM=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,mM=`#if defined( RE_IndirectDiffuse )
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
#endif`,gM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_M=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,EM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,MM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,SM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wM=`#if defined( USE_POINTS_UV )
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
#endif`,bM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,TM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,AM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,RM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,CM=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,LM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,PM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,IM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,UM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,OM=`#ifdef USE_NORMALMAP
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
#endif`,FM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,BM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,HM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,VM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,GM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,WM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,XM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,YM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$M=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,KM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ZM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,JM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,QM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,eS=`#ifdef USE_SKINNING
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
#endif`,tS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nS=`#ifdef USE_SKINNING
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
#endif`,iS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,oS=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,aS=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,lS=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,cS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pS=`uniform sampler2D t2D;
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
}`,mS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_S=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xS=`#include <common>
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
}`,ES=`#if DEPTH_PACKING == 3200
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
	#endif
}`,MS=`#define DISTANCE
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
}`,SS=`#define DISTANCE
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
}`,yS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bS=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,TS=`uniform vec3 diffuse;
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
}`,AS=`#include <common>
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
}`,RS=`uniform vec3 diffuse;
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
}`,CS=`#define LAMBERT
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
}`,LS=`#define LAMBERT
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
}`,PS=`#define MATCAP
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
}`,IS=`#define MATCAP
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
}`,US=`#define NORMAL
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
}`,DS=`#define NORMAL
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
}`,NS=`#define PHONG
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
}`,OS=`#define PHONG
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
}`,FS=`#define STANDARD
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
}`,BS=`#define STANDARD
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
}`,zS=`#define TOON
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
}`,HS=`#define TOON
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
}`,VS=`uniform float size;
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
}`,kS=`uniform vec3 diffuse;
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
}`,GS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,WS=`uniform vec3 color;
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
}`,XS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,qS=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:pE,alphahash_pars_fragment:mE,alphamap_fragment:gE,alphamap_pars_fragment:_E,alphatest_fragment:vE,alphatest_pars_fragment:xE,aomap_fragment:EE,aomap_pars_fragment:ME,batching_pars_vertex:SE,batching_vertex:yE,begin_vertex:wE,beginnormal_vertex:bE,bsdfs:TE,iridescence_fragment:AE,bumpmap_pars_fragment:RE,clipping_planes_fragment:CE,clipping_planes_pars_fragment:LE,clipping_planes_pars_vertex:PE,clipping_planes_vertex:IE,color_fragment:UE,color_pars_fragment:DE,color_pars_vertex:NE,color_vertex:OE,common:FE,cube_uv_reflection_fragment:BE,defaultnormal_vertex:zE,displacementmap_pars_vertex:HE,displacementmap_vertex:VE,emissivemap_fragment:kE,emissivemap_pars_fragment:GE,colorspace_fragment:WE,colorspace_pars_fragment:XE,envmap_fragment:qE,envmap_common_pars_fragment:YE,envmap_pars_fragment:jE,envmap_pars_vertex:$E,envmap_physical_pars_fragment:aM,envmap_vertex:KE,fog_vertex:ZE,fog_pars_vertex:JE,fog_fragment:QE,fog_pars_fragment:eM,gradientmap_pars_fragment:tM,lightmap_fragment:nM,lightmap_pars_fragment:iM,lights_lambert_fragment:sM,lights_lambert_pars_fragment:rM,lights_pars_begin:oM,lights_toon_fragment:lM,lights_toon_pars_fragment:cM,lights_phong_fragment:hM,lights_phong_pars_fragment:uM,lights_physical_fragment:dM,lights_physical_pars_fragment:fM,lights_fragment_begin:pM,lights_fragment_maps:mM,lights_fragment_end:gM,logdepthbuf_fragment:_M,logdepthbuf_pars_fragment:vM,logdepthbuf_pars_vertex:xM,logdepthbuf_vertex:EM,map_fragment:MM,map_pars_fragment:SM,map_particle_fragment:yM,map_particle_pars_fragment:wM,metalnessmap_fragment:bM,metalnessmap_pars_fragment:TM,morphcolor_vertex:AM,morphnormal_vertex:RM,morphtarget_pars_vertex:CM,morphtarget_vertex:LM,normal_fragment_begin:PM,normal_fragment_maps:IM,normal_pars_fragment:UM,normal_pars_vertex:DM,normal_vertex:NM,normalmap_pars_fragment:OM,clearcoat_normal_fragment_begin:FM,clearcoat_normal_fragment_maps:BM,clearcoat_pars_fragment:zM,iridescence_pars_fragment:HM,opaque_fragment:VM,packing:kM,premultiplied_alpha_fragment:GM,project_vertex:WM,dithering_fragment:XM,dithering_pars_fragment:qM,roughnessmap_fragment:YM,roughnessmap_pars_fragment:jM,shadowmap_pars_fragment:$M,shadowmap_pars_vertex:KM,shadowmap_vertex:ZM,shadowmask_pars_fragment:JM,skinbase_vertex:QM,skinning_pars_vertex:eS,skinning_vertex:tS,skinnormal_vertex:nS,specularmap_fragment:iS,specularmap_pars_fragment:sS,tonemapping_fragment:rS,tonemapping_pars_fragment:oS,transmission_fragment:aS,transmission_pars_fragment:lS,uv_pars_fragment:cS,uv_pars_vertex:hS,uv_vertex:uS,worldpos_vertex:dS,background_vert:fS,background_frag:pS,backgroundCube_vert:mS,backgroundCube_frag:gS,cube_vert:_S,cube_frag:vS,depth_vert:xS,depth_frag:ES,distanceRGBA_vert:MS,distanceRGBA_frag:SS,equirect_vert:yS,equirect_frag:wS,linedashed_vert:bS,linedashed_frag:TS,meshbasic_vert:AS,meshbasic_frag:RS,meshlambert_vert:CS,meshlambert_frag:LS,meshmatcap_vert:PS,meshmatcap_frag:IS,meshnormal_vert:US,meshnormal_frag:DS,meshphong_vert:NS,meshphong_frag:OS,meshphysical_vert:FS,meshphysical_frag:BS,meshtoon_vert:zS,meshtoon_frag:HS,points_vert:VS,points_frag:kS,shadow_vert:GS,shadow_frag:WS,sprite_vert:XS,sprite_frag:qS},_e={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},yn={basic:{uniforms:Nt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Nt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Qe(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Nt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Nt([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Nt([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Qe(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Nt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Nt([_e.points,_e.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Nt([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Nt([_e.common,_e.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Nt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Nt([_e.sprite,_e.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:Nt([_e.common,_e.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:Nt([_e.lights,_e.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};yn.physical={uniforms:Nt([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const so={r:0,b:0,g:0};function YS(t,e,n,i,s,r,a){const o=new Qe(0);let l=r===!0?0:1,c,h,u=null,d=0,p=null;function _(m,f){let y=!1,E=f.isScene===!0?f.background:null;E&&E.isTexture&&(E=(f.backgroundBlurriness>0?n:e).get(E)),E===null?v(o,l):E&&E.isColor&&(v(E,1),y=!0);const R=t.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||y)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),E&&(E.isCubeTexture||E.mapping===Yo)?(h===void 0&&(h=new An(new wr(1,1,1),new Ei({name:"BackgroundCubeMaterial",uniforms:Cs(yn.backgroundCube.uniforms),vertexShader:yn.backgroundCube.vertexShader,fragmentShader:yn.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(O,C,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=Ze.getTransfer(E.colorSpace)!==st,(u!==E||d!==E.version||p!==t.toneMapping)&&(h.material.needsUpdate=!0,u=E,d=E.version,p=t.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new An(new Ko(2,2),new Ei({name:"BackgroundMaterial",uniforms:Cs(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:vi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(E.colorSpace)!==st,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||d!==E.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,u=E,d=E.version,p=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function v(m,f){m.getRGB(so,Df(t)),i.buffers.color.setClear(so.r,so.g,so.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(m,f=1){o.set(m),l=f,v(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,v(o,l)},render:_}}function jS(t,e,n,i){const s=t.getParameter(t.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||r!==null,o={},l=m(null);let c=l,h=!1;function u(N,K,k,J,X){let ee=!1;if(a){const le=v(J,k,K);c!==le&&(c=le,p(c.object)),ee=f(N,J,k,X),ee&&y(N,J,k,X)}else{const le=K.wireframe===!0;(c.geometry!==J.id||c.program!==k.id||c.wireframe!==le)&&(c.geometry=J.id,c.program=k.id,c.wireframe=le,ee=!0)}X!==null&&n.update(X,t.ELEMENT_ARRAY_BUFFER),(ee||h)&&(h=!1,ie(N,K,k,J),X!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(X).buffer))}function d(){return i.isWebGL2?t.createVertexArray():r.createVertexArrayOES()}function p(N){return i.isWebGL2?t.bindVertexArray(N):r.bindVertexArrayOES(N)}function _(N){return i.isWebGL2?t.deleteVertexArray(N):r.deleteVertexArrayOES(N)}function v(N,K,k){const J=k.wireframe===!0;let X=o[N.id];X===void 0&&(X={},o[N.id]=X);let ee=X[K.id];ee===void 0&&(ee={},X[K.id]=ee);let le=ee[J];return le===void 0&&(le=m(d()),ee[J]=le),le}function m(N){const K=[],k=[],J=[];for(let X=0;X<s;X++)K[X]=0,k[X]=0,J[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:k,attributeDivisors:J,object:N,attributes:{},index:null}}function f(N,K,k,J){const X=c.attributes,ee=K.attributes;let le=0;const ae=k.getAttributes();for(const xe in ae)if(ae[xe].location>=0){const $=X[xe];let he=ee[xe];if(he===void 0&&(xe==="instanceMatrix"&&N.instanceMatrix&&(he=N.instanceMatrix),xe==="instanceColor"&&N.instanceColor&&(he=N.instanceColor)),$===void 0||$.attribute!==he||he&&$.data!==he.data)return!0;le++}return c.attributesNum!==le||c.index!==J}function y(N,K,k,J){const X={},ee=K.attributes;let le=0;const ae=k.getAttributes();for(const xe in ae)if(ae[xe].location>=0){let $=ee[xe];$===void 0&&(xe==="instanceMatrix"&&N.instanceMatrix&&($=N.instanceMatrix),xe==="instanceColor"&&N.instanceColor&&($=N.instanceColor));const he={};he.attribute=$,$&&$.data&&(he.data=$.data),X[xe]=he,le++}c.attributes=X,c.attributesNum=le,c.index=J}function E(){const N=c.newAttributes;for(let K=0,k=N.length;K<k;K++)N[K]=0}function R(N){O(N,0)}function O(N,K){const k=c.newAttributes,J=c.enabledAttributes,X=c.attributeDivisors;k[N]=1,J[N]===0&&(t.enableVertexAttribArray(N),J[N]=1),X[N]!==K&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,K),X[N]=K)}function C(){const N=c.newAttributes,K=c.enabledAttributes;for(let k=0,J=K.length;k<J;k++)K[k]!==N[k]&&(t.disableVertexAttribArray(k),K[k]=0)}function P(N,K,k,J,X,ee,le){le===!0?t.vertexAttribIPointer(N,K,k,X,ee):t.vertexAttribPointer(N,K,k,J,X,ee)}function ie(N,K,k,J){if(i.isWebGL2===!1&&(N.isInstancedMesh||J.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;E();const X=J.attributes,ee=k.getAttributes(),le=K.defaultAttributeValues;for(const ae in ee){const xe=ee[ae];if(xe.location>=0){let Re=X[ae];if(Re===void 0&&(ae==="instanceMatrix"&&N.instanceMatrix&&(Re=N.instanceMatrix),ae==="instanceColor"&&N.instanceColor&&(Re=N.instanceColor)),Re!==void 0){const $=Re.normalized,he=Re.itemSize,ge=n.get(Re);if(ge===void 0)continue;const B=ge.buffer,ne=ge.type,Z=ge.bytesPerElement,de=i.isWebGL2===!0&&(ne===t.INT||ne===t.UNSIGNED_INT||Re.gpuType===_f);if(Re.isInterleavedBufferAttribute){const Ee=Re.data,D=Ee.stride,w=Re.offset;if(Ee.isInstancedInterleavedBuffer){for(let b=0;b<xe.locationSize;b++)O(xe.location+b,Ee.meshPerAttribute);N.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let b=0;b<xe.locationSize;b++)R(xe.location+b);t.bindBuffer(t.ARRAY_BUFFER,B);for(let b=0;b<xe.locationSize;b++)P(xe.location+b,he/xe.locationSize,ne,$,D*Z,(w+he/xe.locationSize*b)*Z,de)}else{if(Re.isInstancedBufferAttribute){for(let Ee=0;Ee<xe.locationSize;Ee++)O(xe.location+Ee,Re.meshPerAttribute);N.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Re.meshPerAttribute*Re.count)}else for(let Ee=0;Ee<xe.locationSize;Ee++)R(xe.location+Ee);t.bindBuffer(t.ARRAY_BUFFER,B);for(let Ee=0;Ee<xe.locationSize;Ee++)P(xe.location+Ee,he/xe.locationSize,ne,$,he*Z,he/xe.locationSize*Ee*Z,de)}}else if(le!==void 0){const $=le[ae];if($!==void 0)switch($.length){case 2:t.vertexAttrib2fv(xe.location,$);break;case 3:t.vertexAttrib3fv(xe.location,$);break;case 4:t.vertexAttrib4fv(xe.location,$);break;default:t.vertexAttrib1fv(xe.location,$)}}}}C()}function me(){oe();for(const N in o){const K=o[N];for(const k in K){const J=K[k];for(const X in J)_(J[X].object),delete J[X];delete K[k]}delete o[N]}}function M(N){if(o[N.id]===void 0)return;const K=o[N.id];for(const k in K){const J=K[k];for(const X in J)_(J[X].object),delete J[X];delete K[k]}delete o[N.id]}function T(N){for(const K in o){const k=o[K];if(k[N.id]===void 0)continue;const J=k[N.id];for(const X in J)_(J[X].object),delete J[X];delete k[N.id]}}function oe(){ue(),h=!0,c!==l&&(c=l,p(c.object))}function ue(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:oe,resetDefaultState:ue,dispose:me,releaseStatesOfGeometry:M,releaseStatesOfProgram:T,initAttributes:E,enableAttribute:R,disableUnusedAttributes:C}}function $S(t,e,n,i){const s=i.isWebGL2;let r;function a(h){r=h}function o(h,u){t.drawArrays(r,h,u),n.update(u,r,1)}function l(h,u,d){if(d===0)return;let p,_;if(s)p=t,_="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[_](r,h,u,d),n.update(u,r,d)}function c(h,u,d){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<d;_++)this.render(h[_],u[_]);else{p.multiDrawArraysWEBGL(r,h,0,u,0,d);let _=0;for(let v=0;v<d;v++)_+=u[v];n.update(_,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function KS(t,e,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(P){if(P==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let o=n.precision!==void 0?n.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),h=n.logarithmicDepthBuffer===!0,u=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),v=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),f=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),E=d>0,R=a||e.has("OES_texture_float"),O=E&&R,C=a?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:_,maxAttributes:v,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:y,vertexTextures:E,floatFragmentTextures:R,floatVertexTextures:O,maxSamples:C}}function ZS(t){const e=this;let n=null,i=0,s=!1,r=!1;const a=new Pi,o=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||i!==0||s;return s=d,i=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){n=h(u,d,0)},this.setState=function(u,d,p){const _=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,f=t.get(u);if(!s||_===null||_.length===0||r&&!m)r?h(null):c();else{const y=r?0:i,E=y*4;let R=f.clippingState||null;l.value=R,R=h(_,d,E,p);for(let O=0;O!==E;++O)R[O]=n[O];f.clippingState=R,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,p,_){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,_!==!0||m===null){const f=p+v*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<f)&&(m=new Float32Array(f));for(let E=0,R=p;E!==v;++E,R+=4)a.copy(u[E]).applyMatrix4(y,o),a.normal.toArray(m,R),m[R+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function JS(t){let e=new WeakMap;function n(a,o){return o===ul?a.mapping=Ts:o===dl&&(a.mapping=As),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===ul||o===dl)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new hE(l.height);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",s),n(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class QS extends Nf{constructor(e=-1,n=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+n,l=s-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const hs=4,wu=[.125,.215,.35,.446,.526,.582],Ni=20,Va=new QS,bu=new Qe;let ka=null,Ga=0,Wa=0;const Ii=(1+Math.sqrt(5))/2,rs=1/Ii,Tu=[new V(1,1,1),new V(-1,1,1),new V(1,1,-1),new V(-1,1,-1),new V(0,Ii,rs),new V(0,Ii,-rs),new V(rs,0,Ii),new V(-rs,0,Ii),new V(Ii,rs,0),new V(-Ii,rs,0)];class Au{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,s=100){ka=this._renderer.getRenderTarget(),Ga=this._renderer.getActiveCubeFace(),Wa=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),n>0&&this._blur(r,0,0,n),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ka,Ga,Wa),e.scissorTest=!1,ro(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ts||e.mapping===As?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ka=this._renderer.getRenderTarget(),Ga=this._renderer.getActiveCubeFace(),Wa=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Ot,minFilter:Ot,generateMipmaps:!1,type:gr,format:dn,colorSpace:Ln,depthBuffer:!1},s=Ru(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ru(e,n,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ey(r)),this._blurMaterial=ty(r,e,n)}return s}_compileMaterial(e){const n=new An(this._lodPlanes[0],e);this._renderer.compile(n,Va)}_sceneToCubeUV(e,n,i,s){const o=new tn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(bu),h.toneMapping=di,h.autoClear=!1;const p=new oc({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1}),_=new An(new wr,p);let v=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(bu),v=!0);for(let f=0;f<6;f++){const y=f%3;y===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):y===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const E=this._cubeSize;ro(s,y*E,f>2?E:0,E,E),h.setRenderTarget(s),v&&h.render(_,o),h.render(e,o)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,s=e.mapping===Ts||e.mapping===As;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cu());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new An(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;ro(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,Va)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Tu[(s-1)%Tu.length];this._blur(e,s-1,s,r,a)}n.autoClear=i}_blur(e,n,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,n,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new An(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ni-1),v=r/_,m=isFinite(r)?1+Math.floor(h*v):Ni;m>Ni&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ni}`);const f=[];let y=0;for(let P=0;P<Ni;++P){const ie=P/v,me=Math.exp(-ie*ie/2);f.push(me),P===0?y+=me:P<m&&(y+=2*me)}for(let P=0;P<f.length;P++)f[P]=f[P]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:E}=this;d.dTheta.value=_,d.mipInt.value=E-i;const R=this._sizeLods[s],O=3*R*(s>E-hs?s-E+hs:0),C=4*(this._cubeSize-R);ro(n,O,C,3*R,2*R),l.setRenderTarget(n),l.render(u,Va)}}function ey(t){const e=[],n=[],i=[];let s=t;const r=t-hs+1+wu.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);n.push(o);let l=1/o;a>t-hs?l=wu[a-t+hs-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,_=6,v=3,m=2,f=1,y=new Float32Array(v*_*p),E=new Float32Array(m*_*p),R=new Float32Array(f*_*p);for(let C=0;C<p;C++){const P=C%3*2/3-1,ie=C>2?0:-1,me=[P,ie,0,P+2/3,ie,0,P+2/3,ie+1,0,P,ie,0,P+2/3,ie+1,0,P,ie+1,0];y.set(me,v*_*C),E.set(d,m*_*C);const M=[C,C,C,C,C,C];R.set(M,f*_*C)}const O=new Si;O.setAttribute("position",new Rn(y,v)),O.setAttribute("uv",new Rn(E,m)),O.setAttribute("faceIndex",new Rn(R,f)),e.push(O),s>hs&&s--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Ru(t,e,n){const i=new xi(t,e,n);return i.texture.mapping=Yo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ro(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function ty(t,e,n){const i=new Float32Array(Ni),s=new V(0,1,0);return new Ei({name:"SphericalGaussianBlur",defines:{n:Ni,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:lc(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Cu(){return new Ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lc(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Lu(){return new Ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function lc(){return`

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
	`}function ny(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===ul||l===dl,h=l===Ts||l===As;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return n===null&&(n=new Au(t)),u=c?n.fromEquirectangular(o,u):n.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{const u=o.image;if(c&&u&&u.height>0||h&&u&&s(u)){n===null&&(n=new Au(t));const d=c?n.fromEquirectangular(o):n.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function iy(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=t.getExtension(i)}return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const s=n(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function sy(t,e,n,i){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const v=d.morphAttributes[_];for(let m=0,f=v.length;m<f;m++)e.remove(v[m])}d.removeEventListener("dispose",a),delete s[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,n.memory.geometries++),d}function l(u){const d=u.attributes;for(const _ in d)e.update(d[_],t.ARRAY_BUFFER);const p=u.morphAttributes;for(const _ in p){const v=p[_];for(let m=0,f=v.length;m<f;m++)e.update(v[m],t.ARRAY_BUFFER)}}function c(u){const d=[],p=u.index,_=u.attributes.position;let v=0;if(p!==null){const y=p.array;v=p.version;for(let E=0,R=y.length;E<R;E+=3){const O=y[E+0],C=y[E+1],P=y[E+2];d.push(O,C,C,P,P,O)}}else if(_!==void 0){const y=_.array;v=_.version;for(let E=0,R=y.length/3-1;E<R;E+=3){const O=E+0,C=E+1,P=E+2;d.push(O,C,C,P,P,O)}}else return;const m=new(Tf(d)?Uf:If)(d,1);m.version=v;const f=r.get(u);f&&e.remove(f),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function ry(t,e,n,i){const s=i.isWebGL2;let r;function a(p){r=p}let o,l;function c(p){o=p.type,l=p.bytesPerElement}function h(p,_){t.drawElements(r,_,o,p*l),n.update(_,r,1)}function u(p,_,v){if(v===0)return;let m,f;if(s)m=t,f="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](r,_,o,p*l,v),n.update(_,r,v)}function d(p,_,v){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<v;f++)this.render(p[f]/l,_[f]);else{m.multiDrawElementsWEBGL(r,_,0,o,p,0,v);let f=0;for(let y=0;y<v;y++)f+=_[y];n.update(f,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function oy(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(r/3);break;case t.LINES:n.lines+=o*(r/2);break;case t.LINE_STRIP:n.lines+=o*(r-1);break;case t.LINE_LOOP:n.lines+=o*r;break;case t.POINTS:n.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function ay(t,e){return t[0]-e[0]}function ly(t,e){return Math.abs(e[1])-Math.abs(t[1])}function cy(t,e,n){const i={},s=new Float32Array(8),r=new WeakMap,a=new bt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=p!==void 0?p.length:0;let v=r.get(h);if(v===void 0||v.count!==_){let N=function(){oe.dispose(),r.delete(h),h.removeEventListener("dispose",N)};v!==void 0&&v.texture.dispose();const y=h.morphAttributes.position!==void 0,E=h.morphAttributes.normal!==void 0,R=h.morphAttributes.color!==void 0,O=h.morphAttributes.position||[],C=h.morphAttributes.normal||[],P=h.morphAttributes.color||[];let ie=0;y===!0&&(ie=1),E===!0&&(ie=2),R===!0&&(ie=3);let me=h.attributes.position.count*ie,M=1;me>e.maxTextureSize&&(M=Math.ceil(me/e.maxTextureSize),me=e.maxTextureSize);const T=new Float32Array(me*M*4*_),oe=new Cf(T,me,M,_);oe.type=Vn,oe.needsUpdate=!0;const ue=ie*4;for(let K=0;K<_;K++){const k=O[K],J=C[K],X=P[K],ee=me*M*4*K;for(let le=0;le<k.count;le++){const ae=le*ue;y===!0&&(a.fromBufferAttribute(k,le),T[ee+ae+0]=a.x,T[ee+ae+1]=a.y,T[ee+ae+2]=a.z,T[ee+ae+3]=0),E===!0&&(a.fromBufferAttribute(J,le),T[ee+ae+4]=a.x,T[ee+ae+5]=a.y,T[ee+ae+6]=a.z,T[ee+ae+7]=0),R===!0&&(a.fromBufferAttribute(X,le),T[ee+ae+8]=a.x,T[ee+ae+9]=a.y,T[ee+ae+10]=a.z,T[ee+ae+11]=X.itemSize===4?a.w:1)}}v={count:_,texture:oe,size:new Xe(me,M)},r.set(h,v),h.addEventListener("dispose",N)}let m=0;for(let y=0;y<d.length;y++)m+=d[y];const f=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(t,"morphTargetBaseInfluence",f),u.getUniforms().setValue(t,"morphTargetInfluences",d),u.getUniforms().setValue(t,"morphTargetsTexture",v.texture,n),u.getUniforms().setValue(t,"morphTargetsTextureSize",v.size)}else{const p=d===void 0?0:d.length;let _=i[h.id];if(_===void 0||_.length!==p){_=[];for(let E=0;E<p;E++)_[E]=[E,0];i[h.id]=_}for(let E=0;E<p;E++){const R=_[E];R[0]=E,R[1]=d[E]}_.sort(ly);for(let E=0;E<8;E++)E<p&&_[E][1]?(o[E][0]=_[E][0],o[E][1]=_[E][1]):(o[E][0]=Number.MAX_SAFE_INTEGER,o[E][1]=0);o.sort(ay);const v=h.morphAttributes.position,m=h.morphAttributes.normal;let f=0;for(let E=0;E<8;E++){const R=o[E],O=R[0],C=R[1];O!==Number.MAX_SAFE_INTEGER&&C?(v&&h.getAttribute("morphTarget"+E)!==v[O]&&h.setAttribute("morphTarget"+E,v[O]),m&&h.getAttribute("morphNormal"+E)!==m[O]&&h.setAttribute("morphNormal"+E,m[O]),s[E]=C,f+=C):(v&&h.hasAttribute("morphTarget"+E)===!0&&h.deleteAttribute("morphTarget"+E),m&&h.hasAttribute("morphNormal"+E)===!0&&h.deleteAttribute("morphNormal"+E),s[E]=0)}const y=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(t,"morphTargetBaseInfluence",y),u.getUniforms().setValue(t,"morphTargetInfluences",s)}}return{update:l}}function hy(t,e,n,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:r,dispose:a}}class Bf extends zt{constructor(e,n,i,s,r,a,o,l,c,h){if(h=h!==void 0?h:zi,h!==zi&&h!==Rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===zi&&(i=li),i===void 0&&h===Rs&&(i=Bi),super(null,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:Ft,this.minFilter=l!==void 0?l:Ft,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const zf=new zt,Hf=new Bf(1,1);Hf.compareFunction=bf;const Vf=new Cf,kf=new Yx,Gf=new Of,Pu=[],Iu=[],Uu=new Float32Array(16),Du=new Float32Array(9),Nu=new Float32Array(4);function Os(t,e,n){const i=t[0];if(i<=0||i>0)return t;const s=e*n;let r=Pu[s];if(r===void 0&&(r=new Float32Array(s),Pu[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(r,o)}return r}function ft(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function pt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Zo(t,e){let n=Iu[e];n===void 0&&(n=new Int32Array(e),Iu[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function uy(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function dy(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(ft(n,e))return;t.uniform2fv(this.addr,e),pt(n,e)}}function fy(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(ft(n,e))return;t.uniform3fv(this.addr,e),pt(n,e)}}function py(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(ft(n,e))return;t.uniform4fv(this.addr,e),pt(n,e)}}function my(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(ft(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),pt(n,e)}else{if(ft(n,i))return;Nu.set(i),t.uniformMatrix2fv(this.addr,!1,Nu),pt(n,i)}}function gy(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(ft(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),pt(n,e)}else{if(ft(n,i))return;Du.set(i),t.uniformMatrix3fv(this.addr,!1,Du),pt(n,i)}}function _y(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(ft(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),pt(n,e)}else{if(ft(n,i))return;Uu.set(i),t.uniformMatrix4fv(this.addr,!1,Uu),pt(n,i)}}function vy(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function xy(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(ft(n,e))return;t.uniform2iv(this.addr,e),pt(n,e)}}function Ey(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(ft(n,e))return;t.uniform3iv(this.addr,e),pt(n,e)}}function My(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(ft(n,e))return;t.uniform4iv(this.addr,e),pt(n,e)}}function Sy(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function yy(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(ft(n,e))return;t.uniform2uiv(this.addr,e),pt(n,e)}}function wy(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(ft(n,e))return;t.uniform3uiv(this.addr,e),pt(n,e)}}function by(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(ft(n,e))return;t.uniform4uiv(this.addr,e),pt(n,e)}}function Ty(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);const r=this.type===t.SAMPLER_2D_SHADOW?Hf:zf;n.setTexture2D(e||r,s)}function Ay(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||kf,s)}function Ry(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||Gf,s)}function Cy(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||Vf,s)}function Ly(t){switch(t){case 5126:return uy;case 35664:return dy;case 35665:return fy;case 35666:return py;case 35674:return my;case 35675:return gy;case 35676:return _y;case 5124:case 35670:return vy;case 35667:case 35671:return xy;case 35668:case 35672:return Ey;case 35669:case 35673:return My;case 5125:return Sy;case 36294:return yy;case 36295:return wy;case 36296:return by;case 35678:case 36198:case 36298:case 36306:case 35682:return Ty;case 35679:case 36299:case 36307:return Ay;case 35680:case 36300:case 36308:case 36293:return Ry;case 36289:case 36303:case 36311:case 36292:return Cy}}function Py(t,e){t.uniform1fv(this.addr,e)}function Iy(t,e){const n=Os(e,this.size,2);t.uniform2fv(this.addr,n)}function Uy(t,e){const n=Os(e,this.size,3);t.uniform3fv(this.addr,n)}function Dy(t,e){const n=Os(e,this.size,4);t.uniform4fv(this.addr,n)}function Ny(t,e){const n=Os(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Oy(t,e){const n=Os(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Fy(t,e){const n=Os(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function By(t,e){t.uniform1iv(this.addr,e)}function zy(t,e){t.uniform2iv(this.addr,e)}function Hy(t,e){t.uniform3iv(this.addr,e)}function Vy(t,e){t.uniform4iv(this.addr,e)}function ky(t,e){t.uniform1uiv(this.addr,e)}function Gy(t,e){t.uniform2uiv(this.addr,e)}function Wy(t,e){t.uniform3uiv(this.addr,e)}function Xy(t,e){t.uniform4uiv(this.addr,e)}function qy(t,e,n){const i=this.cache,s=e.length,r=Zo(n,s);ft(i,r)||(t.uniform1iv(this.addr,r),pt(i,r));for(let a=0;a!==s;++a)n.setTexture2D(e[a]||zf,r[a])}function Yy(t,e,n){const i=this.cache,s=e.length,r=Zo(n,s);ft(i,r)||(t.uniform1iv(this.addr,r),pt(i,r));for(let a=0;a!==s;++a)n.setTexture3D(e[a]||kf,r[a])}function jy(t,e,n){const i=this.cache,s=e.length,r=Zo(n,s);ft(i,r)||(t.uniform1iv(this.addr,r),pt(i,r));for(let a=0;a!==s;++a)n.setTextureCube(e[a]||Gf,r[a])}function $y(t,e,n){const i=this.cache,s=e.length,r=Zo(n,s);ft(i,r)||(t.uniform1iv(this.addr,r),pt(i,r));for(let a=0;a!==s;++a)n.setTexture2DArray(e[a]||Vf,r[a])}function Ky(t){switch(t){case 5126:return Py;case 35664:return Iy;case 35665:return Uy;case 35666:return Dy;case 35674:return Ny;case 35675:return Oy;case 35676:return Fy;case 5124:case 35670:return By;case 35667:case 35671:return zy;case 35668:case 35672:return Hy;case 35669:case 35673:return Vy;case 5125:return ky;case 36294:return Gy;case 36295:return Wy;case 36296:return Xy;case 35678:case 36198:case 36298:case 36306:case 35682:return qy;case 35679:case 36299:case 36307:return Yy;case 35680:case 36300:case 36308:case 36293:return jy;case 36289:case 36303:case 36311:case 36292:return $y}}class Zy{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Ly(n.type)}}class Jy{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Ky(n.type)}}class Qy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,n[o.id],i)}}}const Xa=/(\w+)(\])?(\[|\.)?/g;function Ou(t,e){t.seq.push(e),t.map[e.id]=e}function ew(t,e,n){const i=t.name,s=i.length;for(Xa.lastIndex=0;;){const r=Xa.exec(i),a=Xa.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Ou(n,c===void 0?new Zy(o,t,e):new Jy(o,t,e));break}else{let u=n.map[o];u===void 0&&(u=new Qy(o),Ou(n,u)),n=u}}}class mo{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(n,s),a=e.getUniformLocation(n,r.name);ew(r,a,this)}}setValue(e,n,i,s){const r=this.map[n];r!==void 0&&r.setValue(e,i,s)}setOptional(e,n,i){const s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let r=0,a=n.length;r!==a;++r){const o=n[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,n){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in n&&i.push(a)}return i}}function Fu(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const tw=37297;let nw=0;function iw(t,e){const n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function sw(t){const e=Ze.getPrimaries(Ze.workingColorSpace),n=Ze.getPrimaries(t);let i;switch(e===n?i="":e===Ao&&n===To?i="LinearDisplayP3ToLinearSRGB":e===To&&n===Ao&&(i="LinearSRGBToLinearDisplayP3"),t){case Ln:case jo:return[i,"LinearTransferOETF"];case Mt:case nc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Bu(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=t.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return n.toUpperCase()+`

`+s+`

`+iw(t.getShaderSource(e),a)}else return s}function rw(t,e){const n=sw(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function ow(t,e){let n;switch(e){case ix:n="Linear";break;case sx:n="Reinhard";break;case rx:n="OptimizedCineon";break;case ox:n="ACESFilmic";break;case lx:n="AgX";break;case ax:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function aw(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.alphaToCoverage||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(us).join(`
`)}function lw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(us).join(`
`)}function cw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function hw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=t.getActiveAttrib(e,s),a=r.name;let o=1;r.type===t.FLOAT_MAT2&&(o=2),r.type===t.FLOAT_MAT3&&(o=3),r.type===t.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function us(t){return t!==""}function zu(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hu(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const uw=/^[ \t]*#include +<([\w\d./]+)>/gm;function _l(t){return t.replace(uw,fw)}const dw=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function fw(t,e){let n=ze[e];if(n===void 0){const i=dw.get(e);if(i!==void 0)n=ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return _l(n)}const pw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vu(t){return t.replace(pw,mw)}function mw(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ku(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	`;return t.isWebGL2&&(e+=`precision ${t.precision} sampler3D;
		precision ${t.precision} sampler2DArray;
		precision ${t.precision} sampler2DShadow;
		precision ${t.precision} samplerCubeShadow;
		precision ${t.precision} sampler2DArrayShadow;
		precision ${t.precision} isampler2D;
		precision ${t.precision} isampler3D;
		precision ${t.precision} isamplerCube;
		precision ${t.precision} isampler2DArray;
		precision ${t.precision} usampler2D;
		precision ${t.precision} usampler3D;
		precision ${t.precision} usamplerCube;
		precision ${t.precision} usampler2DArray;
		`),t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function gw(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===pf?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===P0?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Bn&&(e="SHADOWMAP_TYPE_VSM"),e}function _w(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ts:case As:e="ENVMAP_TYPE_CUBE";break;case Yo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function vw(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case As:e="ENVMAP_MODE_REFRACTION";break}return e}function xw(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case mf:e="ENVMAP_BLENDING_MULTIPLY";break;case tx:e="ENVMAP_BLENDING_MIX";break;case nx:e="ENVMAP_BLENDING_ADD";break}return e}function Ew(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Mw(t,e,n,i){const s=t.getContext(),r=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=gw(n),c=_w(n),h=vw(n),u=xw(n),d=Ew(n),p=n.isWebGL2?"":aw(n),_=lw(n),v=cw(r),m=s.createProgram();let f,y,E=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(us).join(`
`),f.length>0&&(f+=`
`),y=[p,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(us).join(`
`),y.length>0&&(y+=`
`)):(f=[ku(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(us).join(`
`),y=[p,ku(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==di?"#define TONE_MAPPING":"",n.toneMapping!==di?ze.tonemapping_pars_fragment:"",n.toneMapping!==di?ow("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,rw("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(us).join(`
`)),a=_l(a),a=zu(a,n),a=Hu(a,n),o=_l(o),o=zu(o,n),o=Hu(o,n),a=Vu(a),o=Vu(o),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,f=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,y=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===su?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===su?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const R=E+f+a,O=E+y+o,C=Fu(s,s.VERTEX_SHADER,R),P=Fu(s,s.FRAGMENT_SHADER,O);s.attachShader(m,C),s.attachShader(m,P),n.index0AttributeName!==void 0?s.bindAttribLocation(m,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function ie(oe){if(t.debug.checkShaderErrors){const ue=s.getProgramInfoLog(m).trim(),N=s.getShaderInfoLog(C).trim(),K=s.getShaderInfoLog(P).trim();let k=!0,J=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(k=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,m,C,P);else{const X=Bu(s,C,"vertex"),ee=Bu(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+oe.name+`
Material Type: `+oe.type+`

Program Info Log: `+ue+`
`+X+`
`+ee)}else ue!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ue):(N===""||K==="")&&(J=!1);J&&(oe.diagnostics={runnable:k,programLog:ue,vertexShader:{log:N,prefix:f},fragmentShader:{log:K,prefix:y}})}s.deleteShader(C),s.deleteShader(P),me=new mo(s,m),M=hw(s,m)}let me;this.getUniforms=function(){return me===void 0&&ie(this),me};let M;this.getAttributes=function(){return M===void 0&&ie(this),M};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(m,tw)),T},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=nw++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=C,this.fragmentShader=P,this}let Sw=0;class yw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(n),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new ww(e),n.set(e,i)),i}}class ww{constructor(e){this.id=Sw++,this.code=e,this.usedTimes=0}}function bw(t,e,n,i,s,r,a){const o=new rc,l=new yw,c=new Set,h=[],u=s.isWebGL2,d=s.logarithmicDepthBuffer,p=s.vertexTextures;let _=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(M){return c.add(M),M===0?"uv":`uv${M}`}function f(M,T,oe,ue,N){const K=ue.fog,k=N.geometry,J=M.isMeshStandardMaterial?ue.environment:null,X=(M.isMeshStandardMaterial?n:e).get(M.envMap||J),ee=X&&X.mapping===Yo?X.image.height:null,le=v[M.type];M.precision!==null&&(_=s.getMaxPrecision(M.precision),_!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",_,"instead."));const ae=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,xe=ae!==void 0?ae.length:0;let Re=0;k.morphAttributes.position!==void 0&&(Re=1),k.morphAttributes.normal!==void 0&&(Re=2),k.morphAttributes.color!==void 0&&(Re=3);let $,he,ge,B;if(le){const nt=yn[le];$=nt.vertexShader,he=nt.fragmentShader}else $=M.vertexShader,he=M.fragmentShader,l.update(M),ge=l.getVertexShaderID(M),B=l.getFragmentShaderID(M);const ne=t.getRenderTarget(),Z=N.isInstancedMesh===!0,de=N.isBatchedMesh===!0,Ee=!!M.map,D=!!M.matcap,w=!!X,b=!!M.aoMap,I=!!M.lightMap,z=!!M.bumpMap,q=!!M.normalMap,Q=!!M.displacementMap,x=!!M.emissiveMap,g=!!M.metalnessMap,L=!!M.roughnessMap,U=M.anisotropy>0,F=M.clearcoat>0,G=M.iridescence>0,re=M.sheen>0,te=M.transmission>0,ce=U&&!!M.anisotropyMap,ve=F&&!!M.clearcoatMap,Se=F&&!!M.clearcoatNormalMap,se=F&&!!M.clearcoatRoughnessMap,Fe=G&&!!M.iridescenceMap,Ue=G&&!!M.iridescenceThicknessMap,Pe=re&&!!M.sheenColorMap,be=re&&!!M.sheenRoughnessMap,ye=!!M.specularMap,Ae=!!M.specularColorMap,Be=!!M.specularIntensityMap,Je=te&&!!M.transmissionMap,We=te&&!!M.thicknessMap,tt=!!M.gradientMap,A=!!M.alphaMap,fe=M.alphaTest>0,pe=!!M.alphaHash,we=!!M.extensions;let Ce=di;M.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Ce=t.toneMapping);const $e={isWebGL2:u,shaderID:le,shaderType:M.type,shaderName:M.name,vertexShader:$,fragmentShader:he,defines:M.defines,customVertexShaderID:ge,customFragmentShaderID:B,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:_,batching:de,instancing:Z,instancingColor:Z&&N.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:ne===null?t.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Ln,alphaToCoverage:!!M.alphaToCoverage,map:Ee,matcap:D,envMap:w,envMapMode:w&&X.mapping,envMapCubeUVHeight:ee,aoMap:b,lightMap:I,bumpMap:z,normalMap:q,displacementMap:p&&Q,emissiveMap:x,normalMapObjectSpace:q&&M.normalMapType===Ex,normalMapTangentSpace:q&&M.normalMapType===xx,metalnessMap:g,roughnessMap:L,anisotropy:U,anisotropyMap:ce,clearcoat:F,clearcoatMap:ve,clearcoatNormalMap:Se,clearcoatRoughnessMap:se,iridescence:G,iridescenceMap:Fe,iridescenceThicknessMap:Ue,sheen:re,sheenColorMap:Pe,sheenRoughnessMap:be,specularMap:ye,specularColorMap:Ae,specularIntensityMap:Be,transmission:te,transmissionMap:Je,thicknessMap:We,gradientMap:tt,opaque:M.transparent===!1&&M.blending===vs&&M.alphaToCoverage===!1,alphaMap:A,alphaTest:fe,alphaHash:pe,combine:M.combine,mapUv:Ee&&m(M.map.channel),aoMapUv:b&&m(M.aoMap.channel),lightMapUv:I&&m(M.lightMap.channel),bumpMapUv:z&&m(M.bumpMap.channel),normalMapUv:q&&m(M.normalMap.channel),displacementMapUv:Q&&m(M.displacementMap.channel),emissiveMapUv:x&&m(M.emissiveMap.channel),metalnessMapUv:g&&m(M.metalnessMap.channel),roughnessMapUv:L&&m(M.roughnessMap.channel),anisotropyMapUv:ce&&m(M.anisotropyMap.channel),clearcoatMapUv:ve&&m(M.clearcoatMap.channel),clearcoatNormalMapUv:Se&&m(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&m(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&m(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&m(M.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&m(M.sheenColorMap.channel),sheenRoughnessMapUv:be&&m(M.sheenRoughnessMap.channel),specularMapUv:ye&&m(M.specularMap.channel),specularColorMapUv:Ae&&m(M.specularColorMap.channel),specularIntensityMapUv:Be&&m(M.specularIntensityMap.channel),transmissionMapUv:Je&&m(M.transmissionMap.channel),thicknessMapUv:We&&m(M.thicknessMap.channel),alphaMapUv:A&&m(M.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(q||U),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!k.attributes.uv&&(Ee||A),fog:!!K,useFog:M.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:N.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:Re,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&oe.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ce,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Ee&&M.map.isVideoTexture===!0&&Ze.getTransfer(M.map.colorSpace)===st,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Hn,flipSided:M.side===Vt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:we&&M.extensions.derivatives===!0,extensionFragDepth:we&&M.extensions.fragDepth===!0,extensionDrawBuffers:we&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:we&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:we&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:we&&M.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return $e.vertexUv1s=c.has(1),$e.vertexUv2s=c.has(2),$e.vertexUv3s=c.has(3),c.clear(),$e}function y(M){const T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(const oe in M.defines)T.push(oe),T.push(M.defines[oe]);return M.isRawShaderMaterial===!1&&(E(T,M),R(T,M),T.push(t.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function E(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function R(M,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),M.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.alphaToCoverage&&o.enable(20),M.push(o.mask)}function O(M){const T=v[M.type];let oe;if(T){const ue=yn[T];oe=oE.clone(ue.uniforms)}else oe=M.uniforms;return oe}function C(M,T){let oe;for(let ue=0,N=h.length;ue<N;ue++){const K=h[ue];if(K.cacheKey===T){oe=K,++oe.usedTimes;break}}return oe===void 0&&(oe=new Mw(t,T,M,r),h.push(oe)),oe}function P(M){if(--M.usedTimes===0){const T=h.indexOf(M);h[T]=h[h.length-1],h.pop(),M.destroy()}}function ie(M){l.remove(M)}function me(){l.dispose()}return{getParameters:f,getProgramCacheKey:y,getUniforms:O,acquireProgram:C,releaseProgram:P,releaseShaderCache:ie,programs:h,dispose:me}}function Tw(){let t=new WeakMap;function e(r){let a=t.get(r);return a===void 0&&(a={},t.set(r,a)),a}function n(r){t.delete(r)}function i(r,a,o){t.get(r)[a]=o}function s(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:s}}function Aw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Gu(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Wu(){const t=[];let e=0;const n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function a(u,d,p,_,v,m){let f=t[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:_,renderOrder:u.renderOrder,z:v,group:m},t[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=_,f.renderOrder=u.renderOrder,f.z=v,f.group=m),e++,f}function o(u,d,p,_,v,m){const f=a(u,d,p,_,v,m);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):n.push(f)}function l(u,d,p,_,v,m){const f=a(u,d,p,_,v,m);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):n.unshift(f)}function c(u,d){n.length>1&&n.sort(u||Aw),i.length>1&&i.sort(d||Gu),s.length>1&&s.sort(d||Gu)}function h(){for(let u=e,d=t.length;u<d;u++){const p=t[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function Rw(){let t=new WeakMap;function e(i,s){const r=t.get(i);let a;return r===void 0?(a=new Wu,t.set(i,[a])):s>=r.length?(a=new Wu,r.push(a)):a=r[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function Cw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new V,color:new Qe};break;case"SpotLight":n={position:new V,direction:new V,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new V,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new V,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":n={color:new Qe,position:new V,halfWidth:new V,halfHeight:new V};break}return t[e.id]=n,n}}}function Lw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Pw=0;function Iw(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Uw(t,e){const n=new Cw,i=Lw(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new V);const r=new V,a=new dt,o=new dt;function l(h,u){let d=0,p=0,_=0;for(let oe=0;oe<9;oe++)s.probe[oe].set(0,0,0);let v=0,m=0,f=0,y=0,E=0,R=0,O=0,C=0,P=0,ie=0,me=0;h.sort(Iw);const M=u===!0?Math.PI:1;for(let oe=0,ue=h.length;oe<ue;oe++){const N=h[oe],K=N.color,k=N.intensity,J=N.distance,X=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)d+=K.r*k*M,p+=K.g*k*M,_+=K.b*k*M;else if(N.isLightProbe){for(let ee=0;ee<9;ee++)s.probe[ee].addScaledVector(N.sh.coefficients[ee],k);me++}else if(N.isDirectionalLight){const ee=n.get(N);if(ee.color.copy(N.color).multiplyScalar(N.intensity*M),N.castShadow){const le=N.shadow,ae=i.get(N);ae.shadowBias=le.bias,ae.shadowNormalBias=le.normalBias,ae.shadowRadius=le.radius,ae.shadowMapSize=le.mapSize,s.directionalShadow[v]=ae,s.directionalShadowMap[v]=X,s.directionalShadowMatrix[v]=N.shadow.matrix,R++}s.directional[v]=ee,v++}else if(N.isSpotLight){const ee=n.get(N);ee.position.setFromMatrixPosition(N.matrixWorld),ee.color.copy(K).multiplyScalar(k*M),ee.distance=J,ee.coneCos=Math.cos(N.angle),ee.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),ee.decay=N.decay,s.spot[f]=ee;const le=N.shadow;if(N.map&&(s.spotLightMap[P]=N.map,P++,le.updateMatrices(N),N.castShadow&&ie++),s.spotLightMatrix[f]=le.matrix,N.castShadow){const ae=i.get(N);ae.shadowBias=le.bias,ae.shadowNormalBias=le.normalBias,ae.shadowRadius=le.radius,ae.shadowMapSize=le.mapSize,s.spotShadow[f]=ae,s.spotShadowMap[f]=X,C++}f++}else if(N.isRectAreaLight){const ee=n.get(N);ee.color.copy(K).multiplyScalar(k),ee.halfWidth.set(N.width*.5,0,0),ee.halfHeight.set(0,N.height*.5,0),s.rectArea[y]=ee,y++}else if(N.isPointLight){const ee=n.get(N);if(ee.color.copy(N.color).multiplyScalar(N.intensity*M),ee.distance=N.distance,ee.decay=N.decay,N.castShadow){const le=N.shadow,ae=i.get(N);ae.shadowBias=le.bias,ae.shadowNormalBias=le.normalBias,ae.shadowRadius=le.radius,ae.shadowMapSize=le.mapSize,ae.shadowCameraNear=le.camera.near,ae.shadowCameraFar=le.camera.far,s.pointShadow[m]=ae,s.pointShadowMap[m]=X,s.pointShadowMatrix[m]=N.shadow.matrix,O++}s.point[m]=ee,m++}else if(N.isHemisphereLight){const ee=n.get(N);ee.skyColor.copy(N.color).multiplyScalar(k*M),ee.groundColor.copy(N.groundColor).multiplyScalar(k*M),s.hemi[E]=ee,E++}}y>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=_e.LTC_FLOAT_1,s.rectAreaLTC2=_e.LTC_FLOAT_2):(s.rectAreaLTC1=_e.LTC_HALF_1,s.rectAreaLTC2=_e.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=_e.LTC_FLOAT_1,s.rectAreaLTC2=_e.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=_e.LTC_HALF_1,s.rectAreaLTC2=_e.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=p,s.ambient[2]=_;const T=s.hash;(T.directionalLength!==v||T.pointLength!==m||T.spotLength!==f||T.rectAreaLength!==y||T.hemiLength!==E||T.numDirectionalShadows!==R||T.numPointShadows!==O||T.numSpotShadows!==C||T.numSpotMaps!==P||T.numLightProbes!==me)&&(s.directional.length=v,s.spot.length=f,s.rectArea.length=y,s.point.length=m,s.hemi.length=E,s.directionalShadow.length=R,s.directionalShadowMap.length=R,s.pointShadow.length=O,s.pointShadowMap.length=O,s.spotShadow.length=C,s.spotShadowMap.length=C,s.directionalShadowMatrix.length=R,s.pointShadowMatrix.length=O,s.spotLightMatrix.length=C+P-ie,s.spotLightMap.length=P,s.numSpotLightShadowsWithMaps=ie,s.numLightProbes=me,T.directionalLength=v,T.pointLength=m,T.spotLength=f,T.rectAreaLength=y,T.hemiLength=E,T.numDirectionalShadows=R,T.numPointShadows=O,T.numSpotShadows=C,T.numSpotMaps=P,T.numLightProbes=me,s.version=Pw++)}function c(h,u){let d=0,p=0,_=0,v=0,m=0;const f=u.matrixWorldInverse;for(let y=0,E=h.length;y<E;y++){const R=h[y];if(R.isDirectionalLight){const O=s.directional[d];O.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),O.direction.sub(r),O.direction.transformDirection(f),d++}else if(R.isSpotLight){const O=s.spot[_];O.position.setFromMatrixPosition(R.matrixWorld),O.position.applyMatrix4(f),O.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),O.direction.sub(r),O.direction.transformDirection(f),_++}else if(R.isRectAreaLight){const O=s.rectArea[v];O.position.setFromMatrixPosition(R.matrixWorld),O.position.applyMatrix4(f),o.identity(),a.copy(R.matrixWorld),a.premultiply(f),o.extractRotation(a),O.halfWidth.set(R.width*.5,0,0),O.halfHeight.set(0,R.height*.5,0),O.halfWidth.applyMatrix4(o),O.halfHeight.applyMatrix4(o),v++}else if(R.isPointLight){const O=s.point[p];O.position.setFromMatrixPosition(R.matrixWorld),O.position.applyMatrix4(f),p++}else if(R.isHemisphereLight){const O=s.hemi[m];O.direction.setFromMatrixPosition(R.matrixWorld),O.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:s}}function Xu(t,e){const n=new Uw(t,e),i=[],s=[];function r(){i.length=0,s.length=0}function a(u){i.push(u)}function o(u){s.push(u)}function l(u){n.setup(i,u)}function c(u){n.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:n},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Dw(t,e){let n=new WeakMap;function i(r,a=0){const o=n.get(r);let l;return o===void 0?(l=new Xu(t,e),n.set(r,[l])):a>=o.length?(l=new Xu(t,e),o.push(l)):l=o[a],l}function s(){n=new WeakMap}return{get:i,dispose:s}}class Nw extends $o{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_x,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ow extends $o{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Fw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bw=`uniform sampler2D shadow_pass;
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
}`;function zw(t,e,n){let i=new ac;const s=new Xe,r=new Xe,a=new bt,o=new Nw({depthPacking:vx}),l=new Ow,c={},h=n.maxTextureSize,u={[vi]:Vt,[Vt]:vi,[Hn]:Hn},d=new Ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:Fw,fragmentShader:Bw}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new Si;_.setAttribute("position",new Rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new An(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pf;let f=this.type;this.render=function(C,P,ie){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const me=t.getRenderTarget(),M=t.getActiveCubeFace(),T=t.getActiveMipmapLevel(),oe=t.state;oe.setBlending(ui),oe.buffers.color.setClear(1,1,1,1),oe.buffers.depth.setTest(!0),oe.setScissorTest(!1);const ue=f!==Bn&&this.type===Bn,N=f===Bn&&this.type!==Bn;for(let K=0,k=C.length;K<k;K++){const J=C[K],X=J.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const ee=X.getFrameExtents();if(s.multiply(ee),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ee.x),s.x=r.x*ee.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ee.y),s.y=r.y*ee.y,X.mapSize.y=r.y)),X.map===null||ue===!0||N===!0){const ae=this.type!==Bn?{minFilter:Ft,magFilter:Ft}:{};X.map!==null&&X.map.dispose(),X.map=new xi(s.x,s.y,ae),X.map.texture.name=J.name+".shadowMap",X.camera.updateProjectionMatrix()}t.setRenderTarget(X.map),t.clear();const le=X.getViewportCount();for(let ae=0;ae<le;ae++){const xe=X.getViewport(ae);a.set(r.x*xe.x,r.y*xe.y,r.x*xe.z,r.y*xe.w),oe.viewport(a),X.updateMatrices(J,ae),i=X.getFrustum(),R(P,ie,X.camera,J,this.type)}X.isPointLightShadow!==!0&&this.type===Bn&&y(X,ie),X.needsUpdate=!1}f=this.type,m.needsUpdate=!1,t.setRenderTarget(me,M,T)};function y(C,P){const ie=e.update(v);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new xi(s.x,s.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(P,null,ie,d,v,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(P,null,ie,p,v,null)}function E(C,P,ie,me){let M=null;const T=ie.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(T!==void 0)M=T;else if(M=ie.isPointLight===!0?l:o,t.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const oe=M.uuid,ue=P.uuid;let N=c[oe];N===void 0&&(N={},c[oe]=N);let K=N[ue];K===void 0&&(K=M.clone(),N[ue]=K,P.addEventListener("dispose",O)),M=K}if(M.visible=P.visible,M.wireframe=P.wireframe,me===Bn?M.side=P.shadowSide!==null?P.shadowSide:P.side:M.side=P.shadowSide!==null?P.shadowSide:u[P.side],M.alphaMap=P.alphaMap,M.alphaTest=P.alphaTest,M.map=P.map,M.clipShadows=P.clipShadows,M.clippingPlanes=P.clippingPlanes,M.clipIntersection=P.clipIntersection,M.displacementMap=P.displacementMap,M.displacementScale=P.displacementScale,M.displacementBias=P.displacementBias,M.wireframeLinewidth=P.wireframeLinewidth,M.linewidth=P.linewidth,ie.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const oe=t.properties.get(M);oe.light=ie}return M}function R(C,P,ie,me,M){if(C.visible===!1)return;if(C.layers.test(P.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===Bn)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,C.matrixWorld);const ue=e.update(C),N=C.material;if(Array.isArray(N)){const K=ue.groups;for(let k=0,J=K.length;k<J;k++){const X=K[k],ee=N[X.materialIndex];if(ee&&ee.visible){const le=E(C,ee,me,M);C.onBeforeShadow(t,C,P,ie,ue,le,X),t.renderBufferDirect(ie,null,ue,le,C,X),C.onAfterShadow(t,C,P,ie,ue,le,X)}}}else if(N.visible){const K=E(C,N,me,M);C.onBeforeShadow(t,C,P,ie,ue,K,null),t.renderBufferDirect(ie,null,ue,K,C,null),C.onAfterShadow(t,C,P,ie,ue,K,null)}}const oe=C.children;for(let ue=0,N=oe.length;ue<N;ue++)R(oe[ue],P,ie,me,M)}function O(C){C.target.removeEventListener("dispose",O);for(const ie in c){const me=c[ie],M=C.target.uuid;M in me&&(me[M].dispose(),delete me[M])}}}function Hw(t,e,n){const i=n.isWebGL2;function s(){let A=!1;const fe=new bt;let pe=null;const we=new bt(0,0,0,0);return{setMask:function(Ce){pe!==Ce&&!A&&(t.colorMask(Ce,Ce,Ce,Ce),pe=Ce)},setLocked:function(Ce){A=Ce},setClear:function(Ce,$e,nt,Et,Zt){Zt===!0&&(Ce*=Et,$e*=Et,nt*=Et),fe.set(Ce,$e,nt,Et),we.equals(fe)===!1&&(t.clearColor(Ce,$e,nt,Et),we.copy(fe))},reset:function(){A=!1,pe=null,we.set(-1,0,0,0)}}}function r(){let A=!1,fe=null,pe=null,we=null;return{setTest:function(Ce){Ce?Z(t.DEPTH_TEST):de(t.DEPTH_TEST)},setMask:function(Ce){fe!==Ce&&!A&&(t.depthMask(Ce),fe=Ce)},setFunc:function(Ce){if(pe!==Ce){switch(Ce){case j0:t.depthFunc(t.NEVER);break;case $0:t.depthFunc(t.ALWAYS);break;case K0:t.depthFunc(t.LESS);break;case wo:t.depthFunc(t.LEQUAL);break;case Z0:t.depthFunc(t.EQUAL);break;case J0:t.depthFunc(t.GEQUAL);break;case Q0:t.depthFunc(t.GREATER);break;case ex:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}pe=Ce}},setLocked:function(Ce){A=Ce},setClear:function(Ce){we!==Ce&&(t.clearDepth(Ce),we=Ce)},reset:function(){A=!1,fe=null,pe=null,we=null}}}function a(){let A=!1,fe=null,pe=null,we=null,Ce=null,$e=null,nt=null,Et=null,Zt=null;return{setTest:function(it){A||(it?Z(t.STENCIL_TEST):de(t.STENCIL_TEST))},setMask:function(it){fe!==it&&!A&&(t.stencilMask(it),fe=it)},setFunc:function(it,It,vn){(pe!==it||we!==It||Ce!==vn)&&(t.stencilFunc(it,It,vn),pe=it,we=It,Ce=vn)},setOp:function(it,It,vn){($e!==it||nt!==It||Et!==vn)&&(t.stencilOp(it,It,vn),$e=it,nt=It,Et=vn)},setLocked:function(it){A=it},setClear:function(it){Zt!==it&&(t.clearStencil(it),Zt=it)},reset:function(){A=!1,fe=null,pe=null,we=null,Ce=null,$e=null,nt=null,Et=null,Zt=null}}}const o=new s,l=new r,c=new a,h=new WeakMap,u=new WeakMap;let d={},p={},_=new WeakMap,v=[],m=null,f=!1,y=null,E=null,R=null,O=null,C=null,P=null,ie=null,me=new Qe(0,0,0),M=0,T=!1,oe=null,ue=null,N=null,K=null,k=null;const J=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,ee=0;const le=t.getParameter(t.VERSION);le.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(le)[1]),X=ee>=1):le.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(le)[1]),X=ee>=2);let ae=null,xe={};const Re=t.getParameter(t.SCISSOR_BOX),$=t.getParameter(t.VIEWPORT),he=new bt().fromArray(Re),ge=new bt().fromArray($);function B(A,fe,pe,we){const Ce=new Uint8Array(4),$e=t.createTexture();t.bindTexture(A,$e),t.texParameteri(A,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(A,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let nt=0;nt<pe;nt++)i&&(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)?t.texImage3D(fe,0,t.RGBA,1,1,we,0,t.RGBA,t.UNSIGNED_BYTE,Ce):t.texImage2D(fe+nt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Ce);return $e}const ne={};ne[t.TEXTURE_2D]=B(t.TEXTURE_2D,t.TEXTURE_2D,1),ne[t.TEXTURE_CUBE_MAP]=B(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ne[t.TEXTURE_2D_ARRAY]=B(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ne[t.TEXTURE_3D]=B(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Z(t.DEPTH_TEST),l.setFunc(wo),Q(!1),x(wh),Z(t.CULL_FACE),z(ui);function Z(A){d[A]!==!0&&(t.enable(A),d[A]=!0)}function de(A){d[A]!==!1&&(t.disable(A),d[A]=!1)}function Ee(A,fe){return p[A]!==fe?(t.bindFramebuffer(A,fe),p[A]=fe,i&&(A===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=fe),A===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=fe)),!0):!1}function D(A,fe){let pe=v,we=!1;if(A)if(pe=_.get(fe),pe===void 0&&(pe=[],_.set(fe,pe)),A.isWebGLMultipleRenderTargets){const Ce=A.texture;if(pe.length!==Ce.length||pe[0]!==t.COLOR_ATTACHMENT0){for(let $e=0,nt=Ce.length;$e<nt;$e++)pe[$e]=t.COLOR_ATTACHMENT0+$e;pe.length=Ce.length,we=!0}}else pe[0]!==t.COLOR_ATTACHMENT0&&(pe[0]=t.COLOR_ATTACHMENT0,we=!0);else pe[0]!==t.BACK&&(pe[0]=t.BACK,we=!0);we&&(n.isWebGL2?t.drawBuffers(pe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(pe))}function w(A){return m!==A?(t.useProgram(A),m=A,!0):!1}const b={[Di]:t.FUNC_ADD,[U0]:t.FUNC_SUBTRACT,[D0]:t.FUNC_REVERSE_SUBTRACT};if(i)b[Rh]=t.MIN,b[Ch]=t.MAX;else{const A=e.get("EXT_blend_minmax");A!==null&&(b[Rh]=A.MIN_EXT,b[Ch]=A.MAX_EXT)}const I={[N0]:t.ZERO,[O0]:t.ONE,[F0]:t.SRC_COLOR,[cl]:t.SRC_ALPHA,[G0]:t.SRC_ALPHA_SATURATE,[V0]:t.DST_COLOR,[z0]:t.DST_ALPHA,[B0]:t.ONE_MINUS_SRC_COLOR,[hl]:t.ONE_MINUS_SRC_ALPHA,[k0]:t.ONE_MINUS_DST_COLOR,[H0]:t.ONE_MINUS_DST_ALPHA,[W0]:t.CONSTANT_COLOR,[X0]:t.ONE_MINUS_CONSTANT_COLOR,[q0]:t.CONSTANT_ALPHA,[Y0]:t.ONE_MINUS_CONSTANT_ALPHA};function z(A,fe,pe,we,Ce,$e,nt,Et,Zt,it){if(A===ui){f===!0&&(de(t.BLEND),f=!1);return}if(f===!1&&(Z(t.BLEND),f=!0),A!==I0){if(A!==y||it!==T){if((E!==Di||C!==Di)&&(t.blendEquation(t.FUNC_ADD),E=Di,C=Di),it)switch(A){case vs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case bh:t.blendFunc(t.ONE,t.ONE);break;case Th:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ah:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}else switch(A){case vs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case bh:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Th:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ah:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}R=null,O=null,P=null,ie=null,me.set(0,0,0),M=0,y=A,T=it}return}Ce=Ce||fe,$e=$e||pe,nt=nt||we,(fe!==E||Ce!==C)&&(t.blendEquationSeparate(b[fe],b[Ce]),E=fe,C=Ce),(pe!==R||we!==O||$e!==P||nt!==ie)&&(t.blendFuncSeparate(I[pe],I[we],I[$e],I[nt]),R=pe,O=we,P=$e,ie=nt),(Et.equals(me)===!1||Zt!==M)&&(t.blendColor(Et.r,Et.g,Et.b,Zt),me.copy(Et),M=Zt),y=A,T=!1}function q(A,fe){A.side===Hn?de(t.CULL_FACE):Z(t.CULL_FACE);let pe=A.side===Vt;fe&&(pe=!pe),Q(pe),A.blending===vs&&A.transparent===!1?z(ui):z(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.blendColor,A.blendAlpha,A.premultipliedAlpha),l.setFunc(A.depthFunc),l.setTest(A.depthTest),l.setMask(A.depthWrite),o.setMask(A.colorWrite);const we=A.stencilWrite;c.setTest(we),we&&(c.setMask(A.stencilWriteMask),c.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),c.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),L(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?Z(t.SAMPLE_ALPHA_TO_COVERAGE):de(t.SAMPLE_ALPHA_TO_COVERAGE)}function Q(A){oe!==A&&(A?t.frontFace(t.CW):t.frontFace(t.CCW),oe=A)}function x(A){A!==C0?(Z(t.CULL_FACE),A!==ue&&(A===wh?t.cullFace(t.BACK):A===L0?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):de(t.CULL_FACE),ue=A}function g(A){A!==N&&(X&&t.lineWidth(A),N=A)}function L(A,fe,pe){A?(Z(t.POLYGON_OFFSET_FILL),(K!==fe||k!==pe)&&(t.polygonOffset(fe,pe),K=fe,k=pe)):de(t.POLYGON_OFFSET_FILL)}function U(A){A?Z(t.SCISSOR_TEST):de(t.SCISSOR_TEST)}function F(A){A===void 0&&(A=t.TEXTURE0+J-1),ae!==A&&(t.activeTexture(A),ae=A)}function G(A,fe,pe){pe===void 0&&(ae===null?pe=t.TEXTURE0+J-1:pe=ae);let we=xe[pe];we===void 0&&(we={type:void 0,texture:void 0},xe[pe]=we),(we.type!==A||we.texture!==fe)&&(ae!==pe&&(t.activeTexture(pe),ae=pe),t.bindTexture(A,fe||ne[A]),we.type=A,we.texture=fe)}function re(){const A=xe[ae];A!==void 0&&A.type!==void 0&&(t.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function te(){try{t.compressedTexImage2D.apply(t,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ce(){try{t.compressedTexImage3D.apply(t,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ve(){try{t.texSubImage2D.apply(t,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Se(){try{t.texSubImage3D.apply(t,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function se(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Fe(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Ue(){try{t.texStorage2D.apply(t,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Pe(){try{t.texStorage3D.apply(t,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function be(){try{t.texImage2D.apply(t,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ye(){try{t.texImage3D.apply(t,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Ae(A){he.equals(A)===!1&&(t.scissor(A.x,A.y,A.z,A.w),he.copy(A))}function Be(A){ge.equals(A)===!1&&(t.viewport(A.x,A.y,A.z,A.w),ge.copy(A))}function Je(A,fe){let pe=u.get(fe);pe===void 0&&(pe=new WeakMap,u.set(fe,pe));let we=pe.get(A);we===void 0&&(we=t.getUniformBlockIndex(fe,A.name),pe.set(A,we))}function We(A,fe){const we=u.get(fe).get(A);h.get(fe)!==we&&(t.uniformBlockBinding(fe,we,A.__bindingPointIndex),h.set(fe,we))}function tt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},ae=null,xe={},p={},_=new WeakMap,v=[],m=null,f=!1,y=null,E=null,R=null,O=null,C=null,P=null,ie=null,me=new Qe(0,0,0),M=0,T=!1,oe=null,ue=null,N=null,K=null,k=null,he.set(0,0,t.canvas.width,t.canvas.height),ge.set(0,0,t.canvas.width,t.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Z,disable:de,bindFramebuffer:Ee,drawBuffers:D,useProgram:w,setBlending:z,setMaterial:q,setFlipSided:Q,setCullFace:x,setLineWidth:g,setPolygonOffset:L,setScissorTest:U,activeTexture:F,bindTexture:G,unbindTexture:re,compressedTexImage2D:te,compressedTexImage3D:ce,texImage2D:be,texImage3D:ye,updateUBOMapping:Je,uniformBlockBinding:We,texStorage2D:Ue,texStorage3D:Pe,texSubImage2D:ve,texSubImage3D:Se,compressedTexSubImage2D:se,compressedTexSubImage3D:Fe,scissor:Ae,viewport:Be,reset:tt}}function Vw(t,e,n,i,s,r,a){const o=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(x,g){return p?new OffscreenCanvas(x,g):Lo("canvas")}function v(x,g,L,U){let F=1;if((x.width>U||x.height>U)&&(F=U/Math.max(x.width,x.height)),F<1||g===!0)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap){const G=g?Co:Math.floor,re=G(F*x.width),te=G(F*x.height);u===void 0&&(u=_(re,te));const ce=L?_(re,te):u;return ce.width=re,ce.height=te,ce.getContext("2d").drawImage(x,0,0,re,te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+x.width+"x"+x.height+") to ("+re+"x"+te+")."),ce}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+x.width+"x"+x.height+")."),x;return x}function m(x){return gl(x.width)&&gl(x.height)}function f(x){return o?!1:x.wrapS!==un||x.wrapT!==un||x.minFilter!==Ft&&x.minFilter!==Ot}function y(x,g){return x.generateMipmaps&&g&&x.minFilter!==Ft&&x.minFilter!==Ot}function E(x){t.generateMipmap(x)}function R(x,g,L,U,F=!1){if(o===!1)return g;if(x!==null){if(t[x]!==void 0)return t[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let G=g;if(g===t.RED&&(L===t.FLOAT&&(G=t.R32F),L===t.HALF_FLOAT&&(G=t.R16F),L===t.UNSIGNED_BYTE&&(G=t.R8)),g===t.RED_INTEGER&&(L===t.UNSIGNED_BYTE&&(G=t.R8UI),L===t.UNSIGNED_SHORT&&(G=t.R16UI),L===t.UNSIGNED_INT&&(G=t.R32UI),L===t.BYTE&&(G=t.R8I),L===t.SHORT&&(G=t.R16I),L===t.INT&&(G=t.R32I)),g===t.RG&&(L===t.FLOAT&&(G=t.RG32F),L===t.HALF_FLOAT&&(G=t.RG16F),L===t.UNSIGNED_BYTE&&(G=t.RG8)),g===t.RGBA){const re=F?bo:Ze.getTransfer(U);L===t.FLOAT&&(G=t.RGBA32F),L===t.HALF_FLOAT&&(G=t.RGBA16F),L===t.UNSIGNED_BYTE&&(G=re===st?t.SRGB8_ALPHA8:t.RGBA8),L===t.UNSIGNED_SHORT_4_4_4_4&&(G=t.RGBA4),L===t.UNSIGNED_SHORT_5_5_5_1&&(G=t.RGB5_A1)}return(G===t.R16F||G===t.R32F||G===t.RG16F||G===t.RG32F||G===t.RGBA16F||G===t.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function O(x,g,L){return y(x,L)===!0||x.isFramebufferTexture&&x.minFilter!==Ft&&x.minFilter!==Ot?Math.log2(Math.max(g.width,g.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?g.mipmaps.length:1}function C(x){return x===Ft||x===Lh||x===Hs?t.NEAREST:t.LINEAR}function P(x){const g=x.target;g.removeEventListener("dispose",P),me(g),g.isVideoTexture&&h.delete(g)}function ie(x){const g=x.target;g.removeEventListener("dispose",ie),T(g)}function me(x){const g=i.get(x);if(g.__webglInit===void 0)return;const L=x.source,U=d.get(L);if(U){const F=U[g.__cacheKey];F.usedTimes--,F.usedTimes===0&&M(x),Object.keys(U).length===0&&d.delete(L)}i.remove(x)}function M(x){const g=i.get(x);t.deleteTexture(g.__webglTexture);const L=x.source,U=d.get(L);delete U[g.__cacheKey],a.memory.textures--}function T(x){const g=x.texture,L=i.get(x),U=i.get(g);if(U.__webglTexture!==void 0&&(t.deleteTexture(U.__webglTexture),a.memory.textures--),x.depthTexture&&x.depthTexture.dispose(),x.isWebGLCubeRenderTarget)for(let F=0;F<6;F++){if(Array.isArray(L.__webglFramebuffer[F]))for(let G=0;G<L.__webglFramebuffer[F].length;G++)t.deleteFramebuffer(L.__webglFramebuffer[F][G]);else t.deleteFramebuffer(L.__webglFramebuffer[F]);L.__webglDepthbuffer&&t.deleteRenderbuffer(L.__webglDepthbuffer[F])}else{if(Array.isArray(L.__webglFramebuffer))for(let F=0;F<L.__webglFramebuffer.length;F++)t.deleteFramebuffer(L.__webglFramebuffer[F]);else t.deleteFramebuffer(L.__webglFramebuffer);if(L.__webglDepthbuffer&&t.deleteRenderbuffer(L.__webglDepthbuffer),L.__webglMultisampledFramebuffer&&t.deleteFramebuffer(L.__webglMultisampledFramebuffer),L.__webglColorRenderbuffer)for(let F=0;F<L.__webglColorRenderbuffer.length;F++)L.__webglColorRenderbuffer[F]&&t.deleteRenderbuffer(L.__webglColorRenderbuffer[F]);L.__webglDepthRenderbuffer&&t.deleteRenderbuffer(L.__webglDepthRenderbuffer)}if(x.isWebGLMultipleRenderTargets)for(let F=0,G=g.length;F<G;F++){const re=i.get(g[F]);re.__webglTexture&&(t.deleteTexture(re.__webglTexture),a.memory.textures--),i.remove(g[F])}i.remove(g),i.remove(x)}let oe=0;function ue(){oe=0}function N(){const x=oe;return x>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+s.maxTextures),oe+=1,x}function K(x){const g=[];return g.push(x.wrapS),g.push(x.wrapT),g.push(x.wrapR||0),g.push(x.magFilter),g.push(x.minFilter),g.push(x.anisotropy),g.push(x.internalFormat),g.push(x.format),g.push(x.type),g.push(x.generateMipmaps),g.push(x.premultiplyAlpha),g.push(x.flipY),g.push(x.unpackAlignment),g.push(x.colorSpace),g.join()}function k(x,g){const L=i.get(x);if(x.isVideoTexture&&q(x),x.isRenderTargetTexture===!1&&x.version>0&&L.__version!==x.version){const U=x.image;if(U===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(U.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{he(L,x,g);return}}n.bindTexture(t.TEXTURE_2D,L.__webglTexture,t.TEXTURE0+g)}function J(x,g){const L=i.get(x);if(x.version>0&&L.__version!==x.version){he(L,x,g);return}n.bindTexture(t.TEXTURE_2D_ARRAY,L.__webglTexture,t.TEXTURE0+g)}function X(x,g){const L=i.get(x);if(x.version>0&&L.__version!==x.version){he(L,x,g);return}n.bindTexture(t.TEXTURE_3D,L.__webglTexture,t.TEXTURE0+g)}function ee(x,g){const L=i.get(x);if(x.version>0&&L.__version!==x.version){ge(L,x,g);return}n.bindTexture(t.TEXTURE_CUBE_MAP,L.__webglTexture,t.TEXTURE0+g)}const le={[fl]:t.REPEAT,[un]:t.CLAMP_TO_EDGE,[pl]:t.MIRRORED_REPEAT},ae={[Ft]:t.NEAREST,[Lh]:t.NEAREST_MIPMAP_NEAREST,[Hs]:t.NEAREST_MIPMAP_LINEAR,[Ot]:t.LINEAR,[va]:t.LINEAR_MIPMAP_NEAREST,[ai]:t.LINEAR_MIPMAP_LINEAR},xe={[Mx]:t.NEVER,[Ax]:t.ALWAYS,[Sx]:t.LESS,[bf]:t.LEQUAL,[yx]:t.EQUAL,[Tx]:t.GEQUAL,[wx]:t.GREATER,[bx]:t.NOTEQUAL};function Re(x,g,L){if(g.type===Vn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Ot||g.magFilter===va||g.magFilter===Hs||g.magFilter===ai||g.minFilter===Ot||g.minFilter===va||g.minFilter===Hs||g.minFilter===ai)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),L?(t.texParameteri(x,t.TEXTURE_WRAP_S,le[g.wrapS]),t.texParameteri(x,t.TEXTURE_WRAP_T,le[g.wrapT]),(x===t.TEXTURE_3D||x===t.TEXTURE_2D_ARRAY)&&t.texParameteri(x,t.TEXTURE_WRAP_R,le[g.wrapR]),t.texParameteri(x,t.TEXTURE_MAG_FILTER,ae[g.magFilter]),t.texParameteri(x,t.TEXTURE_MIN_FILTER,ae[g.minFilter])):(t.texParameteri(x,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(x,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(x===t.TEXTURE_3D||x===t.TEXTURE_2D_ARRAY)&&t.texParameteri(x,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(g.wrapS!==un||g.wrapT!==un)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(x,t.TEXTURE_MAG_FILTER,C(g.magFilter)),t.texParameteri(x,t.TEXTURE_MIN_FILTER,C(g.minFilter)),g.minFilter!==Ft&&g.minFilter!==Ot&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),g.compareFunction&&(t.texParameteri(x,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(x,t.TEXTURE_COMPARE_FUNC,xe[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");if(g.magFilter===Ft||g.minFilter!==Hs&&g.minFilter!==ai||g.type===Vn&&e.has("OES_texture_float_linear")===!1||o===!1&&g.type===gr&&e.has("OES_texture_half_float_linear")===!1)return;(g.anisotropy>1||i.get(g).__currentAnisotropy)&&(t.texParameterf(x,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy)}}function $(x,g){let L=!1;x.__webglInit===void 0&&(x.__webglInit=!0,g.addEventListener("dispose",P));const U=g.source;let F=d.get(U);F===void 0&&(F={},d.set(U,F));const G=K(g);if(G!==x.__cacheKey){F[G]===void 0&&(F[G]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,L=!0),F[G].usedTimes++;const re=F[x.__cacheKey];re!==void 0&&(F[x.__cacheKey].usedTimes--,re.usedTimes===0&&M(g)),x.__cacheKey=G,x.__webglTexture=F[G].texture}return L}function he(x,g,L){let U=t.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(U=t.TEXTURE_2D_ARRAY),g.isData3DTexture&&(U=t.TEXTURE_3D);const F=$(x,g),G=g.source;n.bindTexture(U,x.__webglTexture,t.TEXTURE0+L);const re=i.get(G);if(G.version!==re.__version||F===!0){n.activeTexture(t.TEXTURE0+L);const te=Ze.getPrimaries(Ze.workingColorSpace),ce=g.colorSpace===nn?null:Ze.getPrimaries(g.colorSpace),ve=g.colorSpace===nn||te===ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Se=f(g)&&m(g.image)===!1;let se=v(g.image,Se,!1,s.maxTextureSize);se=Q(g,se);const Fe=m(se)||o,Ue=r.convert(g.format,g.colorSpace);let Pe=r.convert(g.type),be=R(g.internalFormat,Ue,Pe,g.colorSpace,g.isVideoTexture);Re(U,g,Fe);let ye;const Ae=g.mipmaps,Be=o&&g.isVideoTexture!==!0&&be!==yf,Je=re.__version===void 0||F===!0,We=G.dataReady,tt=O(g,se,Fe);if(g.isDepthTexture)be=t.DEPTH_COMPONENT,o?g.type===Vn?be=t.DEPTH_COMPONENT32F:g.type===li?be=t.DEPTH_COMPONENT24:g.type===Bi?be=t.DEPTH24_STENCIL8:be=t.DEPTH_COMPONENT16:g.type===Vn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),g.format===zi&&be===t.DEPTH_COMPONENT&&g.type!==tc&&g.type!==li&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),g.type=li,Pe=r.convert(g.type)),g.format===Rs&&be===t.DEPTH_COMPONENT&&(be=t.DEPTH_STENCIL,g.type!==Bi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),g.type=Bi,Pe=r.convert(g.type))),Je&&(Be?n.texStorage2D(t.TEXTURE_2D,1,be,se.width,se.height):n.texImage2D(t.TEXTURE_2D,0,be,se.width,se.height,0,Ue,Pe,null));else if(g.isDataTexture)if(Ae.length>0&&Fe){Be&&Je&&n.texStorage2D(t.TEXTURE_2D,tt,be,Ae[0].width,Ae[0].height);for(let A=0,fe=Ae.length;A<fe;A++)ye=Ae[A],Be?We&&n.texSubImage2D(t.TEXTURE_2D,A,0,0,ye.width,ye.height,Ue,Pe,ye.data):n.texImage2D(t.TEXTURE_2D,A,be,ye.width,ye.height,0,Ue,Pe,ye.data);g.generateMipmaps=!1}else Be?(Je&&n.texStorage2D(t.TEXTURE_2D,tt,be,se.width,se.height),We&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,se.width,se.height,Ue,Pe,se.data)):n.texImage2D(t.TEXTURE_2D,0,be,se.width,se.height,0,Ue,Pe,se.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Be&&Je&&n.texStorage3D(t.TEXTURE_2D_ARRAY,tt,be,Ae[0].width,Ae[0].height,se.depth);for(let A=0,fe=Ae.length;A<fe;A++)ye=Ae[A],g.format!==dn?Ue!==null?Be?We&&n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,A,0,0,0,ye.width,ye.height,se.depth,Ue,ye.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,A,be,ye.width,ye.height,se.depth,0,ye.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?We&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,A,0,0,0,ye.width,ye.height,se.depth,Ue,Pe,ye.data):n.texImage3D(t.TEXTURE_2D_ARRAY,A,be,ye.width,ye.height,se.depth,0,Ue,Pe,ye.data)}else{Be&&Je&&n.texStorage2D(t.TEXTURE_2D,tt,be,Ae[0].width,Ae[0].height);for(let A=0,fe=Ae.length;A<fe;A++)ye=Ae[A],g.format!==dn?Ue!==null?Be?We&&n.compressedTexSubImage2D(t.TEXTURE_2D,A,0,0,ye.width,ye.height,Ue,ye.data):n.compressedTexImage2D(t.TEXTURE_2D,A,be,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?We&&n.texSubImage2D(t.TEXTURE_2D,A,0,0,ye.width,ye.height,Ue,Pe,ye.data):n.texImage2D(t.TEXTURE_2D,A,be,ye.width,ye.height,0,Ue,Pe,ye.data)}else if(g.isDataArrayTexture)Be?(Je&&n.texStorage3D(t.TEXTURE_2D_ARRAY,tt,be,se.width,se.height,se.depth),We&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,Ue,Pe,se.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,be,se.width,se.height,se.depth,0,Ue,Pe,se.data);else if(g.isData3DTexture)Be?(Je&&n.texStorage3D(t.TEXTURE_3D,tt,be,se.width,se.height,se.depth),We&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,Ue,Pe,se.data)):n.texImage3D(t.TEXTURE_3D,0,be,se.width,se.height,se.depth,0,Ue,Pe,se.data);else if(g.isFramebufferTexture){if(Je)if(Be)n.texStorage2D(t.TEXTURE_2D,tt,be,se.width,se.height);else{let A=se.width,fe=se.height;for(let pe=0;pe<tt;pe++)n.texImage2D(t.TEXTURE_2D,pe,be,A,fe,0,Ue,Pe,null),A>>=1,fe>>=1}}else if(Ae.length>0&&Fe){Be&&Je&&n.texStorage2D(t.TEXTURE_2D,tt,be,Ae[0].width,Ae[0].height);for(let A=0,fe=Ae.length;A<fe;A++)ye=Ae[A],Be?We&&n.texSubImage2D(t.TEXTURE_2D,A,0,0,Ue,Pe,ye):n.texImage2D(t.TEXTURE_2D,A,be,Ue,Pe,ye);g.generateMipmaps=!1}else Be?(Je&&n.texStorage2D(t.TEXTURE_2D,tt,be,se.width,se.height),We&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ue,Pe,se)):n.texImage2D(t.TEXTURE_2D,0,be,Ue,Pe,se);y(g,Fe)&&E(U),re.__version=G.version,g.onUpdate&&g.onUpdate(g)}x.__version=g.version}function ge(x,g,L){if(g.image.length!==6)return;const U=$(x,g),F=g.source;n.bindTexture(t.TEXTURE_CUBE_MAP,x.__webglTexture,t.TEXTURE0+L);const G=i.get(F);if(F.version!==G.__version||U===!0){n.activeTexture(t.TEXTURE0+L);const re=Ze.getPrimaries(Ze.workingColorSpace),te=g.colorSpace===nn?null:Ze.getPrimaries(g.colorSpace),ce=g.colorSpace===nn||re===te?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const ve=g.isCompressedTexture||g.image[0].isCompressedTexture,Se=g.image[0]&&g.image[0].isDataTexture,se=[];for(let A=0;A<6;A++)!ve&&!Se?se[A]=v(g.image[A],!1,!0,s.maxCubemapSize):se[A]=Se?g.image[A].image:g.image[A],se[A]=Q(g,se[A]);const Fe=se[0],Ue=m(Fe)||o,Pe=r.convert(g.format,g.colorSpace),be=r.convert(g.type),ye=R(g.internalFormat,Pe,be,g.colorSpace),Ae=o&&g.isVideoTexture!==!0,Be=G.__version===void 0||U===!0,Je=F.dataReady;let We=O(g,Fe,Ue);Re(t.TEXTURE_CUBE_MAP,g,Ue);let tt;if(ve){Ae&&Be&&n.texStorage2D(t.TEXTURE_CUBE_MAP,We,ye,Fe.width,Fe.height);for(let A=0;A<6;A++){tt=se[A].mipmaps;for(let fe=0;fe<tt.length;fe++){const pe=tt[fe];g.format!==dn?Pe!==null?Ae?Je&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+A,fe,0,0,pe.width,pe.height,Pe,pe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+A,fe,ye,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ae?Je&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+A,fe,0,0,pe.width,pe.height,Pe,be,pe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+A,fe,ye,pe.width,pe.height,0,Pe,be,pe.data)}}}else{tt=g.mipmaps,Ae&&Be&&(tt.length>0&&We++,n.texStorage2D(t.TEXTURE_CUBE_MAP,We,ye,se[0].width,se[0].height));for(let A=0;A<6;A++)if(Se){Ae?Je&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+A,0,0,0,se[A].width,se[A].height,Pe,be,se[A].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+A,0,ye,se[A].width,se[A].height,0,Pe,be,se[A].data);for(let fe=0;fe<tt.length;fe++){const we=tt[fe].image[A].image;Ae?Je&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+A,fe+1,0,0,we.width,we.height,Pe,be,we.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+A,fe+1,ye,we.width,we.height,0,Pe,be,we.data)}}else{Ae?Je&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+A,0,0,0,Pe,be,se[A]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+A,0,ye,Pe,be,se[A]);for(let fe=0;fe<tt.length;fe++){const pe=tt[fe];Ae?Je&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+A,fe+1,0,0,Pe,be,pe.image[A]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+A,fe+1,ye,Pe,be,pe.image[A])}}}y(g,Ue)&&E(t.TEXTURE_CUBE_MAP),G.__version=F.version,g.onUpdate&&g.onUpdate(g)}x.__version=g.version}function B(x,g,L,U,F,G){const re=r.convert(L.format,L.colorSpace),te=r.convert(L.type),ce=R(L.internalFormat,re,te,L.colorSpace);if(!i.get(g).__hasExternalTextures){const Se=Math.max(1,g.width>>G),se=Math.max(1,g.height>>G);F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY?n.texImage3D(F,G,ce,Se,se,g.depth,0,re,te,null):n.texImage2D(F,G,ce,Se,se,0,re,te,null)}n.bindFramebuffer(t.FRAMEBUFFER,x),z(g)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,U,F,i.get(L).__webglTexture,0,I(g)):(F===t.TEXTURE_2D||F>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&F<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,U,F,i.get(L).__webglTexture,G),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ne(x,g,L){if(t.bindRenderbuffer(t.RENDERBUFFER,x),g.depthBuffer&&!g.stencilBuffer){let U=o===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(L||z(g)){const F=g.depthTexture;F&&F.isDepthTexture&&(F.type===Vn?U=t.DEPTH_COMPONENT32F:F.type===li&&(U=t.DEPTH_COMPONENT24));const G=I(g);z(g)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,G,U,g.width,g.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,G,U,g.width,g.height)}else t.renderbufferStorage(t.RENDERBUFFER,U,g.width,g.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,x)}else if(g.depthBuffer&&g.stencilBuffer){const U=I(g);L&&z(g)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,U,t.DEPTH24_STENCIL8,g.width,g.height):z(g)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,U,t.DEPTH24_STENCIL8,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,g.width,g.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,x)}else{const U=g.isWebGLMultipleRenderTargets===!0?g.texture:[g.texture];for(let F=0;F<U.length;F++){const G=U[F],re=r.convert(G.format,G.colorSpace),te=r.convert(G.type),ce=R(G.internalFormat,re,te,G.colorSpace),ve=I(g);L&&z(g)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ve,ce,g.width,g.height):z(g)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ve,ce,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,ce,g.width,g.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Z(x,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,x),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),k(g.depthTexture,0);const U=i.get(g.depthTexture).__webglTexture,F=I(g);if(g.depthTexture.format===zi)z(g)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,U,0,F):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,U,0);else if(g.depthTexture.format===Rs)z(g)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,U,0,F):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,U,0);else throw new Error("Unknown depthTexture format")}function de(x){const g=i.get(x),L=x.isWebGLCubeRenderTarget===!0;if(x.depthTexture&&!g.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");Z(g.__webglFramebuffer,x)}else if(L){g.__webglDepthbuffer=[];for(let U=0;U<6;U++)n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[U]),g.__webglDepthbuffer[U]=t.createRenderbuffer(),ne(g.__webglDepthbuffer[U],x,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer=t.createRenderbuffer(),ne(g.__webglDepthbuffer,x,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ee(x,g,L){const U=i.get(x);g!==void 0&&B(U.__webglFramebuffer,x,x.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),L!==void 0&&de(x)}function D(x){const g=x.texture,L=i.get(x),U=i.get(g);x.addEventListener("dispose",ie),x.isWebGLMultipleRenderTargets!==!0&&(U.__webglTexture===void 0&&(U.__webglTexture=t.createTexture()),U.__version=g.version,a.memory.textures++);const F=x.isWebGLCubeRenderTarget===!0,G=x.isWebGLMultipleRenderTargets===!0,re=m(x)||o;if(F){L.__webglFramebuffer=[];for(let te=0;te<6;te++)if(o&&g.mipmaps&&g.mipmaps.length>0){L.__webglFramebuffer[te]=[];for(let ce=0;ce<g.mipmaps.length;ce++)L.__webglFramebuffer[te][ce]=t.createFramebuffer()}else L.__webglFramebuffer[te]=t.createFramebuffer()}else{if(o&&g.mipmaps&&g.mipmaps.length>0){L.__webglFramebuffer=[];for(let te=0;te<g.mipmaps.length;te++)L.__webglFramebuffer[te]=t.createFramebuffer()}else L.__webglFramebuffer=t.createFramebuffer();if(G)if(s.drawBuffers){const te=x.texture;for(let ce=0,ve=te.length;ce<ve;ce++){const Se=i.get(te[ce]);Se.__webglTexture===void 0&&(Se.__webglTexture=t.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&x.samples>0&&z(x)===!1){const te=G?g:[g];L.__webglMultisampledFramebuffer=t.createFramebuffer(),L.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let ce=0;ce<te.length;ce++){const ve=te[ce];L.__webglColorRenderbuffer[ce]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,L.__webglColorRenderbuffer[ce]);const Se=r.convert(ve.format,ve.colorSpace),se=r.convert(ve.type),Fe=R(ve.internalFormat,Se,se,ve.colorSpace,x.isXRRenderTarget===!0),Ue=I(x);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ue,Fe,x.width,x.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,L.__webglColorRenderbuffer[ce])}t.bindRenderbuffer(t.RENDERBUFFER,null),x.depthBuffer&&(L.__webglDepthRenderbuffer=t.createRenderbuffer(),ne(L.__webglDepthRenderbuffer,x,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(F){n.bindTexture(t.TEXTURE_CUBE_MAP,U.__webglTexture),Re(t.TEXTURE_CUBE_MAP,g,re);for(let te=0;te<6;te++)if(o&&g.mipmaps&&g.mipmaps.length>0)for(let ce=0;ce<g.mipmaps.length;ce++)B(L.__webglFramebuffer[te][ce],x,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+te,ce);else B(L.__webglFramebuffer[te],x,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);y(g,re)&&E(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(G){const te=x.texture;for(let ce=0,ve=te.length;ce<ve;ce++){const Se=te[ce],se=i.get(Se);n.bindTexture(t.TEXTURE_2D,se.__webglTexture),Re(t.TEXTURE_2D,Se,re),B(L.__webglFramebuffer,x,Se,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,0),y(Se,re)&&E(t.TEXTURE_2D)}n.unbindTexture()}else{let te=t.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(o?te=x.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(te,U.__webglTexture),Re(te,g,re),o&&g.mipmaps&&g.mipmaps.length>0)for(let ce=0;ce<g.mipmaps.length;ce++)B(L.__webglFramebuffer[ce],x,g,t.COLOR_ATTACHMENT0,te,ce);else B(L.__webglFramebuffer,x,g,t.COLOR_ATTACHMENT0,te,0);y(g,re)&&E(te),n.unbindTexture()}x.depthBuffer&&de(x)}function w(x){const g=m(x)||o,L=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let U=0,F=L.length;U<F;U++){const G=L[U];if(y(G,g)){const re=x.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,te=i.get(G).__webglTexture;n.bindTexture(re,te),E(re),n.unbindTexture()}}}function b(x){if(o&&x.samples>0&&z(x)===!1){const g=x.isWebGLMultipleRenderTargets?x.texture:[x.texture],L=x.width,U=x.height;let F=t.COLOR_BUFFER_BIT;const G=[],re=x.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,te=i.get(x),ce=x.isWebGLMultipleRenderTargets===!0;if(ce)for(let ve=0;ve<g.length;ve++)n.bindFramebuffer(t.FRAMEBUFFER,te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,te.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,te.__webglFramebuffer);for(let ve=0;ve<g.length;ve++){G.push(t.COLOR_ATTACHMENT0+ve),x.depthBuffer&&G.push(re);const Se=te.__ignoreDepthValues!==void 0?te.__ignoreDepthValues:!1;if(Se===!1&&(x.depthBuffer&&(F|=t.DEPTH_BUFFER_BIT),x.stencilBuffer&&(F|=t.STENCIL_BUFFER_BIT)),ce&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,te.__webglColorRenderbuffer[ve]),Se===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[re]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[re])),ce){const se=i.get(g[ve]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,se,0)}t.blitFramebuffer(0,0,L,U,0,0,L,U,F,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,G)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ce)for(let ve=0;ve<g.length;ve++){n.bindFramebuffer(t.FRAMEBUFFER,te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,te.__webglColorRenderbuffer[ve]);const Se=i.get(g[ve]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,Se,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,te.__webglMultisampledFramebuffer)}}function I(x){return Math.min(s.maxSamples,x.samples)}function z(x){const g=i.get(x);return o&&x.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function q(x){const g=a.render.frame;h.get(x)!==g&&(h.set(x,g),x.update())}function Q(x,g){const L=x.colorSpace,U=x.format,F=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||x.format===ml||L!==Ln&&L!==nn&&(Ze.getTransfer(L)===st?o===!1?e.has("EXT_sRGB")===!0&&U===dn?(x.format=ml,x.minFilter=Ot,x.generateMipmaps=!1):g=Af.sRGBToLinear(g):(U!==dn||F!==fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),g}this.allocateTextureUnit=N,this.resetTextureUnits=ue,this.setTexture2D=k,this.setTexture2DArray=J,this.setTexture3D=X,this.setTextureCube=ee,this.rebindTextures=Ee,this.setupRenderTarget=D,this.updateRenderTargetMipmap=w,this.updateMultisampleRenderTarget=b,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=B,this.useMultisampledRTT=z}function kw(t,e,n){const i=n.isWebGL2;function s(r,a=nn){let o;const l=Ze.getTransfer(a);if(r===fi)return t.UNSIGNED_BYTE;if(r===vf)return t.UNSIGNED_SHORT_4_4_4_4;if(r===xf)return t.UNSIGNED_SHORT_5_5_5_1;if(r===cx)return t.BYTE;if(r===hx)return t.SHORT;if(r===tc)return t.UNSIGNED_SHORT;if(r===_f)return t.INT;if(r===li)return t.UNSIGNED_INT;if(r===Vn)return t.FLOAT;if(r===gr)return i?t.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===ux)return t.ALPHA;if(r===dn)return t.RGBA;if(r===dx)return t.LUMINANCE;if(r===fx)return t.LUMINANCE_ALPHA;if(r===zi)return t.DEPTH_COMPONENT;if(r===Rs)return t.DEPTH_STENCIL;if(r===ml)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===px)return t.RED;if(r===Ef)return t.RED_INTEGER;if(r===mx)return t.RG;if(r===Mf)return t.RG_INTEGER;if(r===Sf)return t.RGBA_INTEGER;if(r===xa||r===Ea||r===Ma||r===Sa)if(l===st)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===xa)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ea)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ma)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Sa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===xa)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ea)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ma)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Sa)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ph||r===Ih||r===Uh||r===Dh)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Ph)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ih)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Uh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Dh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===yf)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Nh||r===Oh)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Nh)return l===st?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Oh)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Fh||r===Bh||r===zh||r===Hh||r===Vh||r===kh||r===Gh||r===Wh||r===Xh||r===qh||r===Yh||r===jh||r===$h||r===Kh)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Fh)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Bh)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===zh)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Hh)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Vh)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===kh)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Gh)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Wh)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Xh)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===qh)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Yh)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===jh)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===$h)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Kh)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ya||r===Zh||r===Jh)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===ya)return l===st?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Zh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Jh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===gx||r===Qh||r===eu||r===tu)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===ya)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Qh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===eu)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===tu)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Bi?i?t.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):t[r]!==void 0?t[r]:null}return{convert:s}}class Gw extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ds extends Kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ww={type:"move"};class qa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ds,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ds,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ds,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const m=n.getJointPose(v,i),f=this._getHandJoint(c,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,_=.005;c.inputState.pinching&&d>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ww)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ds;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const Xw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Yw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const s=new zt,r=e.properties.get(s);r.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=s}}render(e,n){if(this.texture!==null){if(this.mesh===null){const i=n.cameras[0].viewport,s=new Ei({extensions:{fragDepth:!0},vertexShader:Xw,fragmentShader:qw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new An(new Ko(20,20),s)}e.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}}class jw extends Is{constructor(e,n){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,_=null;const v=new Yw,m=n.getContextAttributes();let f=null,y=null;const E=[],R=[],O=new Xe;let C=null;const P=new tn;P.layers.enable(1),P.viewport=new bt;const ie=new tn;ie.layers.enable(2),ie.viewport=new bt;const me=[P,ie],M=new Gw;M.layers.enable(1),M.layers.enable(2);let T=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let he=E[$];return he===void 0&&(he=new qa,E[$]=he),he.getTargetRaySpace()},this.getControllerGrip=function($){let he=E[$];return he===void 0&&(he=new qa,E[$]=he),he.getGripSpace()},this.getHand=function($){let he=E[$];return he===void 0&&(he=new qa,E[$]=he),he.getHandSpace()};function ue($){const he=R.indexOf($.inputSource);if(he===-1)return;const ge=E[he];ge!==void 0&&(ge.update($.inputSource,$.frame,c||a),ge.dispatchEvent({type:$.type,data:$.inputSource}))}function N(){s.removeEventListener("select",ue),s.removeEventListener("selectstart",ue),s.removeEventListener("selectend",ue),s.removeEventListener("squeeze",ue),s.removeEventListener("squeezestart",ue),s.removeEventListener("squeezeend",ue),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",K);for(let $=0;$<E.length;$++){const he=R[$];he!==null&&(R[$]=null,E[$].disconnect(he))}T=null,oe=null,v.reset(),e.setRenderTarget(f),p=null,d=null,u=null,s=null,y=null,Re.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(O.width,O.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",ue),s.addEventListener("selectstart",ue),s.addEventListener("selectend",ue),s.addEventListener("squeeze",ue),s.addEventListener("squeezestart",ue),s.addEventListener("squeezeend",ue),s.addEventListener("end",N),s.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(O),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const he={antialias:s.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,n,he),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new xi(p.framebufferWidth,p.framebufferHeight,{format:dn,type:fi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let he=null,ge=null,B=null;m.depth&&(B=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,he=m.stencil?Rs:zi,ge=m.stencil?Bi:li);const ne={colorFormat:n.RGBA8,depthFormat:B,scaleFactor:r};u=new XRWebGLBinding(s,n),d=u.createProjectionLayer(ne),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new xi(d.textureWidth,d.textureHeight,{format:dn,type:fi,depthTexture:new Bf(d.textureWidth,d.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});const Z=e.properties.get(y);Z.__ignoreDepthValues=d.ignoreDepthValues}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Re.setContext(s),Re.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function K($){for(let he=0;he<$.removed.length;he++){const ge=$.removed[he],B=R.indexOf(ge);B>=0&&(R[B]=null,E[B].disconnect(ge))}for(let he=0;he<$.added.length;he++){const ge=$.added[he];let B=R.indexOf(ge);if(B===-1){for(let Z=0;Z<E.length;Z++)if(Z>=R.length){R.push(ge),B=Z;break}else if(R[Z]===null){R[Z]=ge,B=Z;break}if(B===-1)break}const ne=E[B];ne&&ne.connect(ge)}}const k=new V,J=new V;function X($,he,ge){k.setFromMatrixPosition(he.matrixWorld),J.setFromMatrixPosition(ge.matrixWorld);const B=k.distanceTo(J),ne=he.projectionMatrix.elements,Z=ge.projectionMatrix.elements,de=ne[14]/(ne[10]-1),Ee=ne[14]/(ne[10]+1),D=(ne[9]+1)/ne[5],w=(ne[9]-1)/ne[5],b=(ne[8]-1)/ne[0],I=(Z[8]+1)/Z[0],z=de*b,q=de*I,Q=B/(-b+I),x=Q*-b;he.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(x),$.translateZ(Q),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert();const g=de+Q,L=Ee+Q,U=z-x,F=q+(B-x),G=D*Ee/L*g,re=w*Ee/L*g;$.projectionMatrix.makePerspective(U,F,G,re,g,L),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}function ee($,he){he===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(he.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;v.texture!==null&&($.near=v.depthNear,$.far=v.depthFar),M.near=ie.near=P.near=$.near,M.far=ie.far=P.far=$.far,(T!==M.near||oe!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),T=M.near,oe=M.far,P.near=T,P.far=oe,ie.near=T,ie.far=oe,P.updateProjectionMatrix(),ie.updateProjectionMatrix(),$.updateProjectionMatrix());const he=$.parent,ge=M.cameras;ee(M,he);for(let B=0;B<ge.length;B++)ee(ge[B],he);ge.length===2?X(M,P,ie):M.projectionMatrix.copy(P.projectionMatrix),le($,M,he)};function le($,he,ge){ge===null?$.matrix.copy(he.matrixWorld):($.matrix.copy(ge.matrixWorld),$.matrix.invert(),$.matrix.multiply(he.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(he.projectionMatrix),$.projectionMatrixInverse.copy(he.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=_r*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return v.texture!==null};let ae=null;function xe($,he){if(h=he.getViewerPose(c||a),_=he,h!==null){const ge=h.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let B=!1;ge.length!==M.cameras.length&&(M.cameras.length=0,B=!0);for(let Z=0;Z<ge.length;Z++){const de=ge[Z];let Ee=null;if(p!==null)Ee=p.getViewport(de);else{const w=u.getViewSubImage(d,de);Ee=w.viewport,Z===0&&(e.setRenderTargetTextures(y,w.colorTexture,d.ignoreDepthValues?void 0:w.depthStencilTexture),e.setRenderTarget(y))}let D=me[Z];D===void 0&&(D=new tn,D.layers.enable(Z),D.viewport=new bt,me[Z]=D),D.matrix.fromArray(de.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(de.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),Z===0&&(M.matrix.copy(D.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),B===!0&&M.cameras.push(D)}const ne=s.enabledFeatures;if(ne&&ne.includes("depth-sensing")){const Z=u.getDepthInformation(ge[0]);Z&&Z.isValid&&Z.texture&&v.init(e,Z,s.renderState)}}for(let ge=0;ge<E.length;ge++){const B=R[ge],ne=E[ge];B!==null&&ne!==void 0&&ne.update(B,he,c||a)}v.render(e,M),ae&&ae($,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),_=null}const Re=new Ff;Re.setAnimationLoop(xe),this.setAnimationLoop=function($){ae=$},this.dispose=function(){}}}function $w(t,e){function n(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Df(t)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,y,E,R){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,R)):f.isMeshMatcapMaterial?(r(m,f),_(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),v(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,y,E):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Vt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Vt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const y=e.get(f).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const E=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*E,n(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,y,E){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*y,m.scale.value=E*.5,f.map&&(m.map.value=f.map,n(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,y){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Vt&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){const y=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Kw(t,e,n,i){let s={},r={},a=[];const o=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,E){const R=E.program;i.uniformBlockBinding(y,R)}function c(y,E){let R=s[y.id];R===void 0&&(_(y),R=h(y),s[y.id]=R,y.addEventListener("dispose",m));const O=E.program;i.updateUBOMapping(y,O);const C=e.render.frame;r[y.id]!==C&&(d(y),r[y.id]=C)}function h(y){const E=u();y.__bindingPointIndex=E;const R=t.createBuffer(),O=y.__size,C=y.usage;return t.bindBuffer(t.UNIFORM_BUFFER,R),t.bufferData(t.UNIFORM_BUFFER,O,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,E,R),R}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const E=s[y.id],R=y.uniforms,O=y.__cache;t.bindBuffer(t.UNIFORM_BUFFER,E);for(let C=0,P=R.length;C<P;C++){const ie=Array.isArray(R[C])?R[C]:[R[C]];for(let me=0,M=ie.length;me<M;me++){const T=ie[me];if(p(T,C,me,O)===!0){const oe=T.__offset,ue=Array.isArray(T.value)?T.value:[T.value];let N=0;for(let K=0;K<ue.length;K++){const k=ue[K],J=v(k);typeof k=="number"||typeof k=="boolean"?(T.__data[0]=k,t.bufferSubData(t.UNIFORM_BUFFER,oe+N,T.__data)):k.isMatrix3?(T.__data[0]=k.elements[0],T.__data[1]=k.elements[1],T.__data[2]=k.elements[2],T.__data[3]=0,T.__data[4]=k.elements[3],T.__data[5]=k.elements[4],T.__data[6]=k.elements[5],T.__data[7]=0,T.__data[8]=k.elements[6],T.__data[9]=k.elements[7],T.__data[10]=k.elements[8],T.__data[11]=0):(k.toArray(T.__data,N),N+=J.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,oe,T.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(y,E,R,O){const C=y.value,P=E+"_"+R;if(O[P]===void 0)return typeof C=="number"||typeof C=="boolean"?O[P]=C:O[P]=C.clone(),!0;{const ie=O[P];if(typeof C=="number"||typeof C=="boolean"){if(ie!==C)return O[P]=C,!0}else if(ie.equals(C)===!1)return ie.copy(C),!0}return!1}function _(y){const E=y.uniforms;let R=0;const O=16;for(let P=0,ie=E.length;P<ie;P++){const me=Array.isArray(E[P])?E[P]:[E[P]];for(let M=0,T=me.length;M<T;M++){const oe=me[M],ue=Array.isArray(oe.value)?oe.value:[oe.value];for(let N=0,K=ue.length;N<K;N++){const k=ue[N],J=v(k),X=R%O;X!==0&&O-X<J.boundary&&(R+=O-X),oe.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),oe.__offset=R,R+=J.storage}}}const C=R%O;return C>0&&(R+=O-C),y.__size=R,y.__cache={},this}function v(y){const E={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(E.boundary=4,E.storage=4):y.isVector2?(E.boundary=8,E.storage=8):y.isVector3||y.isColor?(E.boundary=16,E.storage=12):y.isVector4?(E.boundary=16,E.storage=16):y.isMatrix3?(E.boundary=48,E.storage=48):y.isMatrix4?(E.boundary=64,E.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),E}function m(y){const E=y.target;E.removeEventListener("dispose",m);const R=a.indexOf(E.__bindingPointIndex);a.splice(R,1),t.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function f(){for(const y in s)t.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}class Wf{constructor(e={}){const{canvas:n=kx(),context:i=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=a;const p=new Uint32Array(4),_=new Int32Array(4);let v=null,m=null;const f=[],y=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Mt,this._useLegacyLights=!1,this.toneMapping=di,this.toneMappingExposure=1;const E=this;let R=!1,O=0,C=0,P=null,ie=-1,me=null;const M=new bt,T=new bt;let oe=null;const ue=new Qe(0);let N=0,K=n.width,k=n.height,J=1,X=null,ee=null;const le=new bt(0,0,K,k),ae=new bt(0,0,K,k);let xe=!1;const Re=new ac;let $=!1,he=!1,ge=null;const B=new dt,ne=new Xe,Z=new V,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ee(){return P===null?J:1}let D=i;function w(S,H){for(let Y=0;Y<S.length;Y++){const j=S[Y],W=n.getContext(j,H);if(W!==null)return W}return null}try{const S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${ec}`),n.addEventListener("webglcontextlost",tt,!1),n.addEventListener("webglcontextrestored",A,!1),n.addEventListener("webglcontextcreationerror",fe,!1),D===null){const H=["webgl2","webgl","experimental-webgl"];if(E.isWebGL1Renderer===!0&&H.shift(),D=w(H,S),D===null)throw w(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&D instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),D.getShaderPrecisionFormat===void 0&&(D.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let b,I,z,q,Q,x,g,L,U,F,G,re,te,ce,ve,Se,se,Fe,Ue,Pe,be,ye,Ae,Be;function Je(){b=new iy(D),I=new KS(D,b,e),b.init(I),ye=new kw(D,b,I),z=new Hw(D,b,I),q=new oy(D),Q=new Tw,x=new Vw(D,b,z,Q,I,ye,q),g=new JS(E),L=new ny(E),U=new fE(D,I),Ae=new jS(D,b,U,I),F=new sy(D,U,q,Ae),G=new hy(D,F,U,q),Ue=new cy(D,I,x),Se=new ZS(Q),re=new bw(E,g,L,b,I,Ae,Se),te=new $w(E,Q),ce=new Rw,ve=new Dw(b,I),Fe=new YS(E,g,L,z,G,d,l),se=new zw(E,G,I),Be=new Kw(D,q,I,z),Pe=new $S(D,b,q,I),be=new ry(D,b,q,I),q.programs=re.programs,E.capabilities=I,E.extensions=b,E.properties=Q,E.renderLists=ce,E.shadowMap=se,E.state=z,E.info=q}Je();const We=new jw(E,D);this.xr=We,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const S=b.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=b.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(S){S!==void 0&&(J=S,this.setSize(K,k,!1))},this.getSize=function(S){return S.set(K,k)},this.setSize=function(S,H,Y=!0){if(We.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=S,k=H,n.width=Math.floor(S*J),n.height=Math.floor(H*J),Y===!0&&(n.style.width=S+"px",n.style.height=H+"px"),this.setViewport(0,0,S,H)},this.getDrawingBufferSize=function(S){return S.set(K*J,k*J).floor()},this.setDrawingBufferSize=function(S,H,Y){K=S,k=H,J=Y,n.width=Math.floor(S*Y),n.height=Math.floor(H*Y),this.setViewport(0,0,S,H)},this.getCurrentViewport=function(S){return S.copy(M)},this.getViewport=function(S){return S.copy(le)},this.setViewport=function(S,H,Y,j){S.isVector4?le.set(S.x,S.y,S.z,S.w):le.set(S,H,Y,j),z.viewport(M.copy(le).multiplyScalar(J).floor())},this.getScissor=function(S){return S.copy(ae)},this.setScissor=function(S,H,Y,j){S.isVector4?ae.set(S.x,S.y,S.z,S.w):ae.set(S,H,Y,j),z.scissor(T.copy(ae).multiplyScalar(J).floor())},this.getScissorTest=function(){return xe},this.setScissorTest=function(S){z.setScissorTest(xe=S)},this.setOpaqueSort=function(S){X=S},this.setTransparentSort=function(S){ee=S},this.getClearColor=function(S){return S.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor.apply(Fe,arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha.apply(Fe,arguments)},this.clear=function(S=!0,H=!0,Y=!0){let j=0;if(S){let W=!1;if(P!==null){const Me=P.texture.format;W=Me===Sf||Me===Mf||Me===Ef}if(W){const Me=P.texture.type,Te=Me===fi||Me===li||Me===tc||Me===Bi||Me===vf||Me===xf,Le=Fe.getClearColor(),Ie=Fe.getClearAlpha(),He=Le.r,De=Le.g,Ne=Le.b;Te?(p[0]=He,p[1]=De,p[2]=Ne,p[3]=Ie,D.clearBufferuiv(D.COLOR,0,p)):(_[0]=He,_[1]=De,_[2]=Ne,_[3]=Ie,D.clearBufferiv(D.COLOR,0,_))}else j|=D.COLOR_BUFFER_BIT}H&&(j|=D.DEPTH_BUFFER_BIT),Y&&(j|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",tt,!1),n.removeEventListener("webglcontextrestored",A,!1),n.removeEventListener("webglcontextcreationerror",fe,!1),ce.dispose(),ve.dispose(),Q.dispose(),g.dispose(),L.dispose(),G.dispose(),Ae.dispose(),Be.dispose(),re.dispose(),We.dispose(),We.removeEventListener("sessionstart",Zt),We.removeEventListener("sessionend",it),ge&&(ge.dispose(),ge=null),It.stop()};function tt(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function A(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const S=q.autoReset,H=se.enabled,Y=se.autoUpdate,j=se.needsUpdate,W=se.type;Je(),q.autoReset=S,se.enabled=H,se.autoUpdate=Y,se.needsUpdate=j,se.type=W}function fe(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function pe(S){const H=S.target;H.removeEventListener("dispose",pe),we(H)}function we(S){Ce(S),Q.remove(S)}function Ce(S){const H=Q.get(S).programs;H!==void 0&&(H.forEach(function(Y){re.releaseProgram(Y)}),S.isShaderMaterial&&re.releaseShaderCache(S))}this.renderBufferDirect=function(S,H,Y,j,W,Me){H===null&&(H=de);const Te=W.isMesh&&W.matrixWorld.determinant()<0,Le=Jm(S,H,Y,j,W);z.setMaterial(j,Te);let Ie=Y.index,He=1;if(j.wireframe===!0){if(Ie=F.getWireframeAttribute(Y),Ie===void 0)return;He=2}const De=Y.drawRange,Ne=Y.attributes.position;let ct=De.start*He,Xt=(De.start+De.count)*He;Me!==null&&(ct=Math.max(ct,Me.start*He),Xt=Math.min(Xt,(Me.start+Me.count)*He)),Ie!==null?(ct=Math.max(ct,0),Xt=Math.min(Xt,Ie.count)):Ne!=null&&(ct=Math.max(ct,0),Xt=Math.min(Xt,Ne.count));const mt=Xt-ct;if(mt<0||mt===1/0)return;Ae.setup(W,j,Le,Y,Ie);let Pn,at=Pe;if(Ie!==null&&(Pn=U.get(Ie),at=be,at.setIndex(Pn)),W.isMesh)j.wireframe===!0?(z.setLineWidth(j.wireframeLinewidth*Ee()),at.setMode(D.LINES)):at.setMode(D.TRIANGLES);else if(W.isLine){let ke=j.linewidth;ke===void 0&&(ke=1),z.setLineWidth(ke*Ee()),W.isLineSegments?at.setMode(D.LINES):W.isLineLoop?at.setMode(D.LINE_LOOP):at.setMode(D.LINE_STRIP)}else W.isPoints?at.setMode(D.POINTS):W.isSprite&&at.setMode(D.TRIANGLES);if(W.isBatchedMesh)at.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else if(W.isInstancedMesh)at.renderInstances(ct,mt,W.count);else if(Y.isInstancedBufferGeometry){const ke=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,ia=Math.min(Y.instanceCount,ke);at.renderInstances(ct,mt,ia)}else at.render(ct,mt)};function $e(S,H,Y){S.transparent===!0&&S.side===Hn&&S.forceSinglePass===!1?(S.side=Vt,S.needsUpdate=!0,Ir(S,H,Y),S.side=vi,S.needsUpdate=!0,Ir(S,H,Y),S.side=Hn):Ir(S,H,Y)}this.compile=function(S,H,Y=null){Y===null&&(Y=S),m=ve.get(Y),m.init(),y.push(m),Y.traverseVisible(function(W){W.isLight&&W.layers.test(H.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),S!==Y&&S.traverseVisible(function(W){W.isLight&&W.layers.test(H.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),m.setupLights(E._useLegacyLights);const j=new Set;return S.traverse(function(W){const Me=W.material;if(Me)if(Array.isArray(Me))for(let Te=0;Te<Me.length;Te++){const Le=Me[Te];$e(Le,Y,W),j.add(Le)}else $e(Me,Y,W),j.add(Me)}),y.pop(),m=null,j},this.compileAsync=function(S,H,Y=null){const j=this.compile(S,H,Y);return new Promise(W=>{function Me(){if(j.forEach(function(Te){Q.get(Te).currentProgram.isReady()&&j.delete(Te)}),j.size===0){W(S);return}setTimeout(Me,10)}b.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let nt=null;function Et(S){nt&&nt(S)}function Zt(){It.stop()}function it(){It.start()}const It=new Ff;It.setAnimationLoop(Et),typeof self<"u"&&It.setContext(self),this.setAnimationLoop=function(S){nt=S,We.setAnimationLoop(S),S===null?It.stop():It.start()},We.addEventListener("sessionstart",Zt),We.addEventListener("sessionend",it),this.render=function(S,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),We.enabled===!0&&We.isPresenting===!0&&(We.cameraAutoUpdate===!0&&We.updateCamera(H),H=We.getCamera()),S.isScene===!0&&S.onBeforeRender(E,S,H,P),m=ve.get(S,y.length),m.init(),y.push(m),B.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Re.setFromProjectionMatrix(B),he=this.localClippingEnabled,$=Se.init(this.clippingPlanes,he),v=ce.get(S,f.length),v.init(),f.push(v),vn(S,H,0,E.sortObjects),v.finish(),E.sortObjects===!0&&v.sort(X,ee),this.info.render.frame++,$===!0&&Se.beginShadows();const Y=m.state.shadowsArray;if(se.render(Y,S,H),$===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset(),(We.enabled===!1||We.isPresenting===!1||We.hasDepthSensing()===!1)&&Fe.render(v,S),m.setupLights(E._useLegacyLights),H.isArrayCamera){const j=H.cameras;for(let W=0,Me=j.length;W<Me;W++){const Te=j[W];bc(v,S,Te,Te.viewport)}}else bc(v,S,H);P!==null&&(x.updateMultisampleRenderTarget(P),x.updateRenderTargetMipmap(P)),S.isScene===!0&&S.onAfterRender(E,S,H),Ae.resetDefaultState(),ie=-1,me=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,f.pop(),f.length>0?v=f[f.length-1]:v=null};function vn(S,H,Y,j){if(S.visible===!1)return;if(S.layers.test(H.layers)){if(S.isGroup)Y=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(H);else if(S.isLight)m.pushLight(S),S.castShadow&&m.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Re.intersectsSprite(S)){j&&Z.setFromMatrixPosition(S.matrixWorld).applyMatrix4(B);const Te=G.update(S),Le=S.material;Le.visible&&v.push(S,Te,Le,Y,Z.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Re.intersectsObject(S))){const Te=G.update(S),Le=S.material;if(j&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Z.copy(S.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Z.copy(Te.boundingSphere.center)),Z.applyMatrix4(S.matrixWorld).applyMatrix4(B)),Array.isArray(Le)){const Ie=Te.groups;for(let He=0,De=Ie.length;He<De;He++){const Ne=Ie[He],ct=Le[Ne.materialIndex];ct&&ct.visible&&v.push(S,Te,ct,Y,Z.z,Ne)}}else Le.visible&&v.push(S,Te,Le,Y,Z.z,null)}}const Me=S.children;for(let Te=0,Le=Me.length;Te<Le;Te++)vn(Me[Te],H,Y,j)}function bc(S,H,Y,j){const W=S.opaque,Me=S.transmissive,Te=S.transparent;m.setupLightsView(Y),$===!0&&Se.setGlobalState(E.clippingPlanes,Y),Me.length>0&&Zm(W,Me,H,Y),j&&z.viewport(M.copy(j)),W.length>0&&Pr(W,H,Y),Me.length>0&&Pr(Me,H,Y),Te.length>0&&Pr(Te,H,Y),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function Zm(S,H,Y,j){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;const Me=I.isWebGL2;ge===null&&(ge=new xi(1,1,{generateMipmaps:!0,type:b.has("EXT_color_buffer_half_float")?gr:fi,minFilter:ai,samples:Me?4:0})),E.getDrawingBufferSize(ne),Me?ge.setSize(ne.x,ne.y):ge.setSize(Co(ne.x),Co(ne.y));const Te=E.getRenderTarget();E.setRenderTarget(ge),E.getClearColor(ue),N=E.getClearAlpha(),N<1&&E.setClearColor(16777215,.5),E.clear();const Le=E.toneMapping;E.toneMapping=di,Pr(S,Y,j),x.updateMultisampleRenderTarget(ge),x.updateRenderTargetMipmap(ge);let Ie=!1;for(let He=0,De=H.length;He<De;He++){const Ne=H[He],ct=Ne.object,Xt=Ne.geometry,mt=Ne.material,Pn=Ne.group;if(mt.side===Hn&&ct.layers.test(j.layers)){const at=mt.side;mt.side=Vt,mt.needsUpdate=!0,Tc(ct,Y,j,Xt,mt,Pn),mt.side=at,mt.needsUpdate=!0,Ie=!0}}Ie===!0&&(x.updateMultisampleRenderTarget(ge),x.updateRenderTargetMipmap(ge)),E.setRenderTarget(Te),E.setClearColor(ue,N),E.toneMapping=Le}function Pr(S,H,Y){const j=H.isScene===!0?H.overrideMaterial:null;for(let W=0,Me=S.length;W<Me;W++){const Te=S[W],Le=Te.object,Ie=Te.geometry,He=j===null?Te.material:j,De=Te.group;Le.layers.test(Y.layers)&&Tc(Le,H,Y,Ie,He,De)}}function Tc(S,H,Y,j,W,Me){S.onBeforeRender(E,H,Y,j,W,Me),S.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),W.onBeforeRender(E,H,Y,j,S,Me),W.transparent===!0&&W.side===Hn&&W.forceSinglePass===!1?(W.side=Vt,W.needsUpdate=!0,E.renderBufferDirect(Y,H,j,W,S,Me),W.side=vi,W.needsUpdate=!0,E.renderBufferDirect(Y,H,j,W,S,Me),W.side=Hn):E.renderBufferDirect(Y,H,j,W,S,Me),S.onAfterRender(E,H,Y,j,W,Me)}function Ir(S,H,Y){H.isScene!==!0&&(H=de);const j=Q.get(S),W=m.state.lights,Me=m.state.shadowsArray,Te=W.state.version,Le=re.getParameters(S,W.state,Me,H,Y),Ie=re.getProgramCacheKey(Le);let He=j.programs;j.environment=S.isMeshStandardMaterial?H.environment:null,j.fog=H.fog,j.envMap=(S.isMeshStandardMaterial?L:g).get(S.envMap||j.environment),He===void 0&&(S.addEventListener("dispose",pe),He=new Map,j.programs=He);let De=He.get(Ie);if(De!==void 0){if(j.currentProgram===De&&j.lightsStateVersion===Te)return Rc(S,Le),De}else Le.uniforms=re.getUniforms(S),S.onBuild(Y,Le,E),S.onBeforeCompile(Le,E),De=re.acquireProgram(Le,Ie),He.set(Ie,De),j.uniforms=Le.uniforms;const Ne=j.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ne.clippingPlanes=Se.uniform),Rc(S,Le),j.needsLights=eg(S),j.lightsStateVersion=Te,j.needsLights&&(Ne.ambientLightColor.value=W.state.ambient,Ne.lightProbe.value=W.state.probe,Ne.directionalLights.value=W.state.directional,Ne.directionalLightShadows.value=W.state.directionalShadow,Ne.spotLights.value=W.state.spot,Ne.spotLightShadows.value=W.state.spotShadow,Ne.rectAreaLights.value=W.state.rectArea,Ne.ltc_1.value=W.state.rectAreaLTC1,Ne.ltc_2.value=W.state.rectAreaLTC2,Ne.pointLights.value=W.state.point,Ne.pointLightShadows.value=W.state.pointShadow,Ne.hemisphereLights.value=W.state.hemi,Ne.directionalShadowMap.value=W.state.directionalShadowMap,Ne.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ne.spotShadowMap.value=W.state.spotShadowMap,Ne.spotLightMatrix.value=W.state.spotLightMatrix,Ne.spotLightMap.value=W.state.spotLightMap,Ne.pointShadowMap.value=W.state.pointShadowMap,Ne.pointShadowMatrix.value=W.state.pointShadowMatrix),j.currentProgram=De,j.uniformsList=null,De}function Ac(S){if(S.uniformsList===null){const H=S.currentProgram.getUniforms();S.uniformsList=mo.seqWithValue(H.seq,S.uniforms)}return S.uniformsList}function Rc(S,H){const Y=Q.get(S);Y.outputColorSpace=H.outputColorSpace,Y.batching=H.batching,Y.instancing=H.instancing,Y.instancingColor=H.instancingColor,Y.skinning=H.skinning,Y.morphTargets=H.morphTargets,Y.morphNormals=H.morphNormals,Y.morphColors=H.morphColors,Y.morphTargetsCount=H.morphTargetsCount,Y.numClippingPlanes=H.numClippingPlanes,Y.numIntersection=H.numClipIntersection,Y.vertexAlphas=H.vertexAlphas,Y.vertexTangents=H.vertexTangents,Y.toneMapping=H.toneMapping}function Jm(S,H,Y,j,W){H.isScene!==!0&&(H=de),x.resetTextureUnits();const Me=H.fog,Te=j.isMeshStandardMaterial?H.environment:null,Le=P===null?E.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ln,Ie=(j.isMeshStandardMaterial?L:g).get(j.envMap||Te),He=j.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,De=!!Y.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Ne=!!Y.morphAttributes.position,ct=!!Y.morphAttributes.normal,Xt=!!Y.morphAttributes.color;let mt=di;j.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(mt=E.toneMapping);const Pn=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,at=Pn!==void 0?Pn.length:0,ke=Q.get(j),ia=m.state.lights;if($===!0&&(he===!0||S!==me)){const Jt=S===me&&j.id===ie;Se.setState(j,S,Jt)}let lt=!1;j.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==ia.state.version||ke.outputColorSpace!==Le||W.isBatchedMesh&&ke.batching===!1||!W.isBatchedMesh&&ke.batching===!0||W.isInstancedMesh&&ke.instancing===!1||!W.isInstancedMesh&&ke.instancing===!0||W.isSkinnedMesh&&ke.skinning===!1||!W.isSkinnedMesh&&ke.skinning===!0||W.isInstancedMesh&&ke.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&ke.instancingColor===!1&&W.instanceColor!==null||ke.envMap!==Ie||j.fog===!0&&ke.fog!==Me||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==Se.numPlanes||ke.numIntersection!==Se.numIntersection)||ke.vertexAlphas!==He||ke.vertexTangents!==De||ke.morphTargets!==Ne||ke.morphNormals!==ct||ke.morphColors!==Xt||ke.toneMapping!==mt||I.isWebGL2===!0&&ke.morphTargetsCount!==at)&&(lt=!0):(lt=!0,ke.__version=j.version);let yi=ke.currentProgram;lt===!0&&(yi=Ir(j,H,W));let Cc=!1,Fs=!1,sa=!1;const Rt=yi.getUniforms(),wi=ke.uniforms;if(z.useProgram(yi.program)&&(Cc=!0,Fs=!0,sa=!0),j.id!==ie&&(ie=j.id,Fs=!0),Cc||me!==S){Rt.setValue(D,"projectionMatrix",S.projectionMatrix),Rt.setValue(D,"viewMatrix",S.matrixWorldInverse);const Jt=Rt.map.cameraPosition;Jt!==void 0&&Jt.setValue(D,Z.setFromMatrixPosition(S.matrixWorld)),I.logarithmicDepthBuffer&&Rt.setValue(D,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Rt.setValue(D,"isOrthographic",S.isOrthographicCamera===!0),me!==S&&(me=S,Fs=!0,sa=!0)}if(W.isSkinnedMesh){Rt.setOptional(D,W,"bindMatrix"),Rt.setOptional(D,W,"bindMatrixInverse");const Jt=W.skeleton;Jt&&(I.floatVertexTextures?(Jt.boneTexture===null&&Jt.computeBoneTexture(),Rt.setValue(D,"boneTexture",Jt.boneTexture,x)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}W.isBatchedMesh&&(Rt.setOptional(D,W,"batchingTexture"),Rt.setValue(D,"batchingTexture",W._matricesTexture,x));const ra=Y.morphAttributes;if((ra.position!==void 0||ra.normal!==void 0||ra.color!==void 0&&I.isWebGL2===!0)&&Ue.update(W,Y,yi),(Fs||ke.receiveShadow!==W.receiveShadow)&&(ke.receiveShadow=W.receiveShadow,Rt.setValue(D,"receiveShadow",W.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(wi.envMap.value=Ie,wi.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),Fs&&(Rt.setValue(D,"toneMappingExposure",E.toneMappingExposure),ke.needsLights&&Qm(wi,sa),Me&&j.fog===!0&&te.refreshFogUniforms(wi,Me),te.refreshMaterialUniforms(wi,j,J,k,ge),mo.upload(D,Ac(ke),wi,x)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(mo.upload(D,Ac(ke),wi,x),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Rt.setValue(D,"center",W.center),Rt.setValue(D,"modelViewMatrix",W.modelViewMatrix),Rt.setValue(D,"normalMatrix",W.normalMatrix),Rt.setValue(D,"modelMatrix",W.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Jt=j.uniformsGroups;for(let oa=0,tg=Jt.length;oa<tg;oa++)if(I.isWebGL2){const Lc=Jt[oa];Be.update(Lc,yi),Be.bind(Lc,yi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return yi}function Qm(S,H){S.ambientLightColor.needsUpdate=H,S.lightProbe.needsUpdate=H,S.directionalLights.needsUpdate=H,S.directionalLightShadows.needsUpdate=H,S.pointLights.needsUpdate=H,S.pointLightShadows.needsUpdate=H,S.spotLights.needsUpdate=H,S.spotLightShadows.needsUpdate=H,S.rectAreaLights.needsUpdate=H,S.hemisphereLights.needsUpdate=H}function eg(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(S,H,Y){Q.get(S.texture).__webglTexture=H,Q.get(S.depthTexture).__webglTexture=Y;const j=Q.get(S);j.__hasExternalTextures=!0,j.__hasExternalTextures&&(j.__autoAllocateDepthBuffer=Y===void 0,j.__autoAllocateDepthBuffer||b.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,H){const Y=Q.get(S);Y.__webglFramebuffer=H,Y.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(S,H=0,Y=0){P=S,O=H,C=Y;let j=!0,W=null,Me=!1,Te=!1;if(S){const Ie=Q.get(S);Ie.__useDefaultFramebuffer!==void 0?(z.bindFramebuffer(D.FRAMEBUFFER,null),j=!1):Ie.__webglFramebuffer===void 0?x.setupRenderTarget(S):Ie.__hasExternalTextures&&x.rebindTextures(S,Q.get(S.texture).__webglTexture,Q.get(S.depthTexture).__webglTexture);const He=S.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Te=!0);const De=Q.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(De[H])?W=De[H][Y]:W=De[H],Me=!0):I.isWebGL2&&S.samples>0&&x.useMultisampledRTT(S)===!1?W=Q.get(S).__webglMultisampledFramebuffer:Array.isArray(De)?W=De[Y]:W=De,M.copy(S.viewport),T.copy(S.scissor),oe=S.scissorTest}else M.copy(le).multiplyScalar(J).floor(),T.copy(ae).multiplyScalar(J).floor(),oe=xe;if(z.bindFramebuffer(D.FRAMEBUFFER,W)&&I.drawBuffers&&j&&z.drawBuffers(S,W),z.viewport(M),z.scissor(T),z.setScissorTest(oe),Me){const Ie=Q.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ie.__webglTexture,Y)}else if(Te){const Ie=Q.get(S.texture),He=H||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ie.__webglTexture,Y||0,He)}ie=-1},this.readRenderTargetPixels=function(S,H,Y,j,W,Me,Te){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=Q.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Te!==void 0&&(Le=Le[Te]),Le){z.bindFramebuffer(D.FRAMEBUFFER,Le);try{const Ie=S.texture,He=Ie.format,De=Ie.type;if(He!==dn&&ye.convert(He)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ne=De===gr&&(b.has("EXT_color_buffer_half_float")||I.isWebGL2&&b.has("EXT_color_buffer_float"));if(De!==fi&&ye.convert(De)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_TYPE)&&!(De===Vn&&(I.isWebGL2||b.has("OES_texture_float")||b.has("WEBGL_color_buffer_float")))&&!Ne){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=S.width-j&&Y>=0&&Y<=S.height-W&&D.readPixels(H,Y,j,W,ye.convert(He),ye.convert(De),Me)}finally{const Ie=P!==null?Q.get(P).__webglFramebuffer:null;z.bindFramebuffer(D.FRAMEBUFFER,Ie)}}},this.copyFramebufferToTexture=function(S,H,Y=0){const j=Math.pow(2,-Y),W=Math.floor(H.image.width*j),Me=Math.floor(H.image.height*j);x.setTexture2D(H,0),D.copyTexSubImage2D(D.TEXTURE_2D,Y,0,0,S.x,S.y,W,Me),z.unbindTexture()},this.copyTextureToTexture=function(S,H,Y,j=0){const W=H.image.width,Me=H.image.height,Te=ye.convert(Y.format),Le=ye.convert(Y.type);x.setTexture2D(Y,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,Y.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,Y.unpackAlignment),H.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,j,S.x,S.y,W,Me,Te,Le,H.image.data):H.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,j,S.x,S.y,H.mipmaps[0].width,H.mipmaps[0].height,Te,H.mipmaps[0].data):D.texSubImage2D(D.TEXTURE_2D,j,S.x,S.y,Te,Le,H.image),j===0&&Y.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),z.unbindTexture()},this.copyTextureToTexture3D=function(S,H,Y,j,W=0){if(E.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Me=S.max.x-S.min.x+1,Te=S.max.y-S.min.y+1,Le=S.max.z-S.min.z+1,Ie=ye.convert(j.format),He=ye.convert(j.type);let De;if(j.isData3DTexture)x.setTexture3D(j,0),De=D.TEXTURE_3D;else if(j.isDataArrayTexture||j.isCompressedArrayTexture)x.setTexture2DArray(j,0),De=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,j.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,j.unpackAlignment);const Ne=D.getParameter(D.UNPACK_ROW_LENGTH),ct=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Xt=D.getParameter(D.UNPACK_SKIP_PIXELS),mt=D.getParameter(D.UNPACK_SKIP_ROWS),Pn=D.getParameter(D.UNPACK_SKIP_IMAGES),at=Y.isCompressedTexture?Y.mipmaps[W]:Y.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,at.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,at.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,S.min.x),D.pixelStorei(D.UNPACK_SKIP_ROWS,S.min.y),D.pixelStorei(D.UNPACK_SKIP_IMAGES,S.min.z),Y.isDataTexture||Y.isData3DTexture?D.texSubImage3D(De,W,H.x,H.y,H.z,Me,Te,Le,Ie,He,at.data):Y.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),D.compressedTexSubImage3D(De,W,H.x,H.y,H.z,Me,Te,Le,Ie,at.data)):D.texSubImage3D(De,W,H.x,H.y,H.z,Me,Te,Le,Ie,He,at),D.pixelStorei(D.UNPACK_ROW_LENGTH,Ne),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ct),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Xt),D.pixelStorei(D.UNPACK_SKIP_ROWS,mt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Pn),W===0&&j.generateMipmaps&&D.generateMipmap(De),z.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?x.setTextureCube(S,0):S.isData3DTexture?x.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?x.setTexture2DArray(S,0):x.setTexture2D(S,0),z.unbindTexture()},this.resetState=function(){O=0,C=0,P=null,z.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===nc?"display-p3":"srgb",n.unpackColorSpace=Ze.workingColorSpace===jo?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Mt?Hi:wf}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Hi?Mt:Ln}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Zw extends Wf{}Zw.prototype.isWebGL1Renderer=!0;class qu extends Kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class Jw{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,s=this.getPoint(0),r=0;n.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),n.push(r),s=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let s=0;const r=i.length;let a;n?a=n:a=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);const h=i[s],d=i[s+1]-h,p=(a-h)/d;return(s+p)/(r-1)}getTangent(e,n){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=n||(a.isVector2?new Xe:new V);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new V,s=[],r=[],a=[],o=new V,l=new dt;for(let p=0;p<=e;p++){const _=p/e;s[p]=this.getTangentAt(_,new V)}r[0]=new V,a[0]=new V;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(yt(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,_))}a[p].crossVectors(s[p],r[p])}if(n===!0){let p=Math.acos(yt(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let _=1;_<=e;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],p*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function Yu(t,e,n,i,s){const r=(i-e)*.5,a=(s-n)*.5,o=t*t,l=t*o;return(2*n-2*i+r+a)*l+(-3*n+3*i-2*r-a)*o+r*t+n}class Qw extends Jw{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new Xe){const i=n,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return i.set(Yu(o,l.x,c.x,h.x,u.x),Yu(o,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const s=e.points[n];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const s=this.points[n];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const s=e.points[n];this.points.push(new Xe().fromArray(s))}return this}}class cc extends Si{constructor(e=1,n=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new V,d=new V,p=[],_=[],v=[],m=[];for(let f=0;f<=i;f++){const y=[],E=f/i;let R=0;f===0&&a===0?R=.5/n:f===i&&l===Math.PI&&(R=-.5/n);for(let O=0;O<=n;O++){const C=O/n;u.x=-e*Math.cos(s+C*r)*Math.sin(a+E*o),u.y=e*Math.cos(a+E*o),u.z=e*Math.sin(s+C*r)*Math.sin(a+E*o),_.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(C+R,1-E),y.push(c++)}h.push(y)}for(let f=0;f<i;f++)for(let y=0;y<n;y++){const E=h[f][y+1],R=h[f][y],O=h[f+1][y],C=h[f+1][y+1];(f!==0||a>0)&&p.push(E,R,C),(f!==i-1||l<Math.PI)&&p.push(R,O,C)}this.setIndex(p),this.setAttribute("position",new Cn(_,3)),this.setAttribute("normal",new Cn(v,3)),this.setAttribute("uv",new Cn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}const vl={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class eb{constructor(e,n,i){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const p=c[u],_=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return _}return null}}}const tb=new eb;let hc=class{constructor(e){this.manager=e!==void 0?e:tb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(s,r){i.load(e,s,n,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};hc.DEFAULT_MATERIAL_NAME="__DEFAULT";class nb{constructor(e,n,i=0,s=1/0){this.ray=new Lf(e,n),this.near=i,this.far=s,this.camera=null,this.layers=new rc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}intersectObject(e,n=!0,i=[]){return xl(e,this,i,n),i.sort(ju),i}intersectObjects(e,n=!0,i=[]){for(let s=0,r=e.length;s<r;s++)xl(e[s],this,i,n);return i.sort(ju),i}}function ju(t,e){return t.distance-e.distance}function xl(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),i===!0){const s=t.children;for(let r=0,a=s.length;r<a;r++)xl(s[r],e,n,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ec}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ec);/*!
 * PhotoSphereViewer 5.7.2
 * @copyright 2014-2015 Jérémy Heleine
 * @copyright 2024 Damien "Mistic" Sorel
 * @licence MIT (https://opensource.org/licenses/MIT)
 */var ib=Object.defineProperty,uc=(t,e)=>{for(var n in e)ib(t,n,{get:e[n],enumerable:!0})},sb={};uc(sb,{ACTIONS:()=>Zf,ANIMATION_MIN_DURATION:()=>El,CAPTURE_EVENTS_CLASS:()=>Tr,CTRLZOOM_TIMEOUT:()=>Kf,DBLCLICK_DELAY:()=>Yf,DEFAULT_TRANSITION:()=>Xf,EASINGS:()=>go,ICONS:()=>_n,IDS:()=>wt,INERTIA_WINDOW:()=>Ml,KEY_CODES:()=>_t,LONGTOUCH_DELAY:()=>jf,MOVE_THRESHOLD:()=>qf,SPHERE_RADIUS:()=>br,TWOFINGERSOVERLAY_DELAY:()=>$f,VIEWER_DATA:()=>Mi});var rb=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="40 40 432 432"><g transform="rotate(0, 256, 256)"><path fill="currentColor" d="M425.23 210.55H227.39a5 5 0 01-3.53-8.53l56.56-56.57a45.5 45.5 0 000-64.28 45.15 45.15 0 00-32.13-13.3 45.15 45.15 0 00-32.14 13.3L41.32 256l174.83 174.83a45.15 45.15 0 0032.14 13.3 45.15 45.15 0 0032.13-13.3 45.5 45.5 0 000-64.28l-56.57-56.57a5 5 0 013.54-8.53h197.84c25.06 0 45.45-20.39 45.45-45.45s-20.4-45.45-45.45-45.45z"/></g><!-- Created by Flatart from the Noun Project --></svg>
`,ob='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g fill="currentColor" transform=" translate(50, 50) rotate(45)"><rect x="-5" y="-65" width="10" height="130"/><rect x="-65" y="-5" width="130" height="10"/></g></svg>',ab=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M83.3 35.6h-17V3H32.2v32.6H16.6l33.6 32.7 33-32.7z"/><path fill="currentColor" d="M83.3 64.2v16.3H16.6V64.2H-.1v32.6H100V64.2H83.3z"/><!--Created by Michael Zenaty from the Noun Project--></svg>
`,lb=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M100 40H87.1V18.8h-21V6H100zM100 93.2H66V80.3h21.1v-21H100zM34 93.2H0v-34h12.9v21.1h21zM12.9 40H0V6h34v12.9H12.8z"/><!--Created by Garrett Knoll from the Noun Project--></svg>
`,cb=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M66 7h13v21h21v13H66zM66 60.3h34v12.9H79v21H66zM0 60.3h34v34H21V73.1H0zM21 7h13v34H0V28h21z"/><!--Created by Garrett Knoll from the Noun Project--></svg>
`,hb=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="currentColor" d="M28.3 26.1c-1 2.6-1.9 4.8-2.6 7-2.5 7.4-5 14.7-7.2 22-1.3 4.4.5 7.2 4.3 7.8 1.3.2 2.8.2 4.2-.1 8.2-2 11.9-8.6 15.7-15.2l-2.2 2a18.8 18.8 0 0 1-7.4 5.2 2 2 0 0 1-1.6-.2c-.2-.1 0-1 0-1.4l.8-1.8L41.9 28c.5-1.4.9-3 .7-4.4-.2-2.6-3-4.4-6.3-4.4-8.8.2-15 4.5-19.5 11.8-.2.3-.2.6-.3 1.3 3.7-2.8 6.8-6.1 11.8-6.2z"/><circle fill="currentColor" cx="39.3" cy="9.2" r="8.2"/><!--Created by Arafat Uddin from the Noun Project--></svg>
`,ub=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 10 80 80"><g fill="currentColor"><circle r="10" cx="20" cy="20"/><circle r="10" cx="50" cy="20"/><circle r="10" cx="80" cy="20"/><circle r="10" cx="20" cy="50"/><circle r="10" cx="50" cy="50"/><circle r="10" cx="80" cy="50"/><circle r="10" cx="20" cy="80"/><circle r="10" cx="50" cy="80"/><circle r="10" cx="80" cy="80"/></g><!-- Created by Richard Kunák from the Noun Project--></svg>
`,db=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="currentColor" d="M14.043 12.22a7.738 7.738 0 1 0-1.823 1.822l4.985 4.985c.503.504 1.32.504 1.822 0a1.285 1.285 0 0 0 0-1.822l-4.984-4.985zm-6.305 1.043a5.527 5.527 0 1 1 0-11.053 5.527 5.527 0 0 1 0 11.053z"/><path fill="currentColor" d="M8.728 4.009H6.744v2.737H4.006V8.73h2.738v2.736h1.984V8.73h2.737V6.746H8.728z"/><!--Created by Ryan Canning from the Noun Project--></svg>
`,fb=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="currentColor" d="M14.043 12.22a7.738 7.738 0 1 0-1.823 1.822l4.985 4.985c.503.504 1.32.504 1.822 0a1.285 1.285 0 0 0 0-1.822l-4.984-4.985zm-6.305 1.043a5.527 5.527 0 1 1 0-11.053 5.527 5.527 0 0 1 0 11.053z"/><path fill="currentColor" d="M4.006 6.746h7.459V8.73H4.006z"/><!--Created by Ryan Canning from the Noun Project--></svg>
`,Xf=1500,El=500,qf=4,Yf=300,jf=500,$f=100,Kf=2e3,Ml=300,br=10,Mi="photoSphereViewer",Tr="psv--capture-event",Zf=(t=>(t.ROTATE_UP="ROTATE_UP",t.ROTATE_DOWN="ROTATE_DOWN",t.ROTATE_RIGHT="ROTATE_RIGHT",t.ROTATE_LEFT="ROTATE_LEFT",t.ZOOM_IN="ZOOM_IN",t.ZOOM_OUT="ZOOM_OUT",t))(Zf||{}),wt={MENU:"menu",TWO_FINGERS:"twoFingers",CTRL_ZOOM:"ctrlZoom",ERROR:"error",DESCRIPTION:"description"},_t={Enter:"Enter",Control:"Control",Escape:"Escape",Space:" ",PageUp:"PageUp",PageDown:"PageDown",ArrowLeft:"ArrowLeft",ArrowUp:"ArrowUp",ArrowRight:"ArrowRight",ArrowDown:"ArrowDown",Delete:"Delete",Plus:"+",Minus:"-"},_n={arrow:rb,close:ob,download:ab,fullscreenIn:lb,fullscreenOut:cb,info:hb,menu:ub,zoomIn:db,zoomOut:fb},go={linear:t=>t,inQuad:t=>t*t,outQuad:t=>t*(2-t),inOutQuad:t=>t<.5?2*t*t:-1+(4-2*t)*t,inCubic:t=>t*t*t,outCubic:t=>--t*t*t+1,inOutCubic:t=>t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1,inQuart:t=>t*t*t*t,outQuart:t=>1- --t*t*t*t,inOutQuart:t=>t<.5?8*t*t*t*t:1-8*--t*t*t*t,inQuint:t=>t*t*t*t*t,outQuint:t=>1+--t*t*t*t*t,inOutQuint:t=>t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t,inSine:t=>1-Math.cos(t*(Math.PI/2)),outSine:t=>Math.sin(t*(Math.PI/2)),inOutSine:t=>.5-.5*Math.cos(Math.PI*t),inExpo:t=>Math.pow(2,10*(t-1)),outExpo:t=>1-Math.pow(2,-10*t),inOutExpo:t=>(t=t*2-1)<0?.5*Math.pow(2,10*t):1-.5*Math.pow(2,-10*t),inCirc:t=>1-Math.sqrt(1-t*t),outCirc:t=>Math.sqrt(1-(t-1)*(t-1)),inOutCirc:t=>(t*=2)<1?.5-.5*Math.sqrt(1-t*t):.5+.5*Math.sqrt(1-(t-=2)*t)},pb={};uc(pb,{Animation:()=>xr,Dynamic:()=>_o,MultiDynamic:()=>mp,PressHandler:()=>ta,Slider:()=>_p,SliderDirection:()=>gp,addClasses:()=>fc,angle:()=>Jf,applyEulerInverse:()=>Tl,checkStylesheet:()=>pp,checkVersion:()=>Ec,cleanCssPosition:()=>dp,clone:()=>vr,createTexture:()=>bl,cssPositionIsOrdered:()=>xc,dasherize:()=>vb,deepEqual:()=>cp,deepmerge:()=>ap,distance:()=>dc,exitFullscreen:()=>op,firstNonNull:()=>En,getAbortError:()=>yl,getAngle:()=>ep,getClosest:()=>pc,getConfigParser:()=>ea,getElement:()=>tp,getPosition:()=>ip,getShortestArc:()=>Qf,getStyleProperty:()=>Gn,getTouchData:()=>Sl,getXMPValue:()=>Mn,greatArcDistance:()=>gb,hasParent:()=>np,invertResolvableBoolean:()=>Qo,isAbortError:()=>up,isEmpty:()=>lp,isExtendedPosition:()=>vc,isFullscreenEnabled:()=>sp,isNil:()=>mn,isPlainObject:()=>gc,logWarn:()=>xt,parseAngle:()=>oi,parsePoint:()=>xb,parseSpeed:()=>fp,removeClasses:()=>_b,requestFullscreen:()=>rp,resolveBoolean:()=>_c,speedToDuration:()=>wl,sum:()=>mb,throttle:()=>mc,toggleClass:()=>Jo,wrap:()=>nr});function nr(t,e){let n=t%e;return n<0&&(n+=e),n}function mb(t){return t.reduce((e,n)=>e+n,0)}function dc(t,e){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function Jf(t,e){return Math.atan2(e.y-t.y,e.x-t.x)}function Qf(t,e){return[0,Math.PI*2,-Math.PI*2].reduce((i,s)=>{const r=e-t+s;return Math.abs(r)<Math.abs(i)?r:i},1/0)}function ep(t,e){return Math.acos(Math.cos(t.pitch)*Math.cos(e.pitch)*Math.cos(t.yaw-e.yaw)+Math.sin(t.pitch)*Math.sin(e.pitch))}function gb([t,e],[n,i]){t-n>Math.PI?t-=2*Math.PI:t-n<-Math.PI&&(t+=2*Math.PI);const s=(n-t)*Math.cos((e+i)/2),r=i-e;return Math.sqrt(s*s+r*r)}function tp(t){return typeof t=="string"?t.match(/^[a-z]/i)?document.getElementById(t):document.querySelector(t):t}function Jo(t,e,n){n===void 0?t.classList.toggle(e):n?t.classList.add(e):n||t.classList.remove(e)}function fc(t,e){t.classList.add(...e.split(" "))}function _b(t,e){t.classList.remove(...e.split(" "))}function np(t,e){let n=t;do{if(n===e)return!0;n=n.parentElement}while(n);return!1}function pc(t,e){if(!(t!=null&&t.matches))return null;let n=t;do{if(n.matches(e))return n;n=n.parentElement}while(n);return null}function ip(t){let e=0,n=0,i=t;for(;i;)e+=i.offsetLeft-i.scrollLeft+i.clientLeft,n+=i.offsetTop-i.scrollTop+i.clientTop,i=i.offsetParent;return{x:e,y:n}}function Gn(t,e){return window.getComputedStyle(t).getPropertyValue(e)}function Sl(t){if(t.touches.length<2)return null;const e={x:t.touches[0].clientX,y:t.touches[0].clientY},n={x:t.touches[1].clientX,y:t.touches[1].clientY};return{distance:dc(e,n),angle:Jf(e,n),center:{x:(e.x+n.x)/2,y:(e.y+n.y)/2}}}function sp(t){return(document.fullscreenElement||document.webkitFullscreenElement)===t}function rp(t){(t.requestFullscreen||t.webkitRequestFullscreen).call(t)}function op(){(document.exitFullscreen||document.webkitExitFullscreen).call(document)}function vb(t){return t.replace(/[A-Z](?:(?=[^A-Z])|[A-Z]*(?=[A-Z][^A-Z]|$))/g,(e,n)=>(n>0?"-":"")+e.toLowerCase())}function mc(t,e){let n=!1;return function(...i){n||(n=!0,setTimeout(()=>{t.apply(this,i),n=!1},e))}}function gc(t){if(typeof t!="object"||t===null||Object.prototype.toString.call(t)!=="[object Object]")return!1;if(Object.getPrototypeOf(t)===null)return!0;let e=t;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function ap(t,e){const n=e;return function i(s,r){return Array.isArray(r)?(!s||!Array.isArray(s)?s=[]:s.length=0,r.forEach((a,o)=>{s[o]=i(null,a)})):typeof r=="object"?((!s||Array.isArray(s))&&(s={}),Object.keys(r).forEach(a=>{typeof r[a]!="object"||!r[a]||!gc(r[a])?s[a]=r[a]:r[a]!==n&&(s[a]?i(s[a],r[a]):s[a]=i(null,r[a]))})):s=r,s}(t,e)}function vr(t){return ap(null,t)}function lp(t){return!t||Object.keys(t).length===0&&t.constructor===Object}function mn(t){return t==null}function En(...t){for(const e of t)if(!mn(e))return e;return null}function cp(t,e){if(t===e)return!0;if($u(t)&&$u(e)){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n of Object.keys(t))if(!cp(t[n],e[n]))return!1;return!0}else return!1}function $u(t){return typeof t=="object"&&t!==null}var je=class hp extends Error{constructor(e){var n;super(e),this.name="PSVError",(n=Error.captureStackTrace)==null||n.call(Error,this,hp)}};function _c(t,e){gc(t)?(e(t.initial,!0),t.promise.then(n=>e(n,!1))):e(t,!0)}function Qo(t){return{initial:!t.initial,promise:t.promise.then(e=>!e)}}function yl(){const t=new Error("Loading was aborted.");return t.name="AbortError",t}function up(t){return(t==null?void 0:t.name)==="AbortError"}function xt(t){console.warn(`PhotoSphereViewer: ${t}`)}function vc(t){return t?[["textureX","textureY"],["yaw","pitch"]].some(([e,n])=>t[e]!==void 0&&t[n]!==void 0):!1}function Mn(t,e){let n=t.match("<GPano:"+e+">(.*)</GPano:"+e+">");if(n!==null){const i=parseInt(n[1],10);return isNaN(i)?null:i}if(n=t.match("GPano:"+e+'="(.*?)"'),n!==null){const i=parseInt(n[1],10);return isNaN(i)?null:i}return null}var Ku={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Po=["left","center","right"],Io=["top","center","bottom"],Zu=[...Po,...Io],en="center";function xb(t){if(!t)return{x:.5,y:.5};if(typeof t=="object")return t;let e=t.toLocaleLowerCase().split(" ").slice(0,2);e.length===1&&(Ku[e[0]]?e=[e[0],en]:e=[e[0],e[0]]);const n=e[1]!=="left"&&e[1]!=="right"&&e[0]!=="top"&&e[0]!=="bottom";e=e.map(s=>Ku[s]||s),n||e.reverse();const i=e.join(" ").match(/^([0-9.]+)% ([0-9.]+)%$/);return i?{x:parseFloat(i[1])/100,y:parseFloat(i[2])/100}:{x:.5,y:.5}}function dp(t,{allowCenter:e,cssOrder:n}={allowCenter:!0,cssOrder:!0}){return t?(typeof t=="string"&&(t=t.split(" ")),t.length===1&&(t[0]===en?t=[en,en]:Po.indexOf(t[0])!==-1?t=[en,t[0]]:Io.indexOf(t[0])!==-1&&(t=[t[0],en])),t.length!==2||Zu.indexOf(t[0])===-1||Zu.indexOf(t[1])===-1?(xt(`Unparsable position ${t}`),null):!e&&t[0]===en&&t[1]===en?(xt("Invalid position center center"),null):(n&&!xc(t)&&(t=[t[1],t[0]]),t[1]===en&&Po.indexOf(t[0])!==-1&&(t=[en,t[0]]),t[0]===en&&Io.indexOf(t[1])!==-1&&(t=[t[1],en]),t)):null}function xc(t){return Io.indexOf(t[0])!==-1&&Po.indexOf(t[1])!==-1}function fp(t){let e;if(typeof t=="string"){const n=t.toString().trim();let i=parseFloat(n.replace(/^(-?[0-9]+(?:\.[0-9]*)?).*$/,"$1"));const s=n.replace(/^-?[0-9]+(?:\.[0-9]*)?(.*)$/,"$1").trim();switch(s.match(/(pm|per minute)$/)&&(i/=60),s){case"dpm":case"degrees per minute":case"dps":case"degrees per second":e=vt.degToRad(i);break;case"rdpm":case"radians per minute":case"rdps":case"radians per second":e=i;break;case"rpm":case"revolutions per minute":case"rps":case"revolutions per second":e=i*Math.PI*2;break;default:throw new je(`Unknown speed unit "${s}"`)}}else e=t;return e}function wl(t,e){if(typeof t!="number"){const n=fp(t);return e/Math.abs(n)*1e3}else return Math.abs(t)}function oi(t,e=!1,n=e){let i;if(typeof t=="string"){const s=t.toLowerCase().trim().match(/^(-?[0-9]+(?:\.[0-9]*)?)(.*)$/);if(!s)throw new je(`Unknown angle "${t}"`);const r=parseFloat(s[1]),a=s[2];if(a)switch(a){case"deg":case"degs":i=vt.degToRad(r);break;case"rad":case"rads":i=r;break;default:throw new je(`Unknown angle unit "${a}"`)}else i=r}else if(typeof t=="number"&&!isNaN(t))i=t;else throw new je(`Unknown angle "${t}"`);return i=nr(e?i+Math.PI:i,Math.PI*2),e?vt.clamp(i-Math.PI,-Math.PI/(n?2:1),Math.PI/(n?2:1)):i}function bl(t,e=!1){const n=new zt(t);return n.needsUpdate=!0,n.minFilter=e?ai:Ot,n.generateMipmaps=e,n.anisotropy=e?2:1,n}var Ju=new Ds;function Tl(t,e){Ju.setFromEuler(e).invert(),t.applyQuaternion(Ju)}function ea(t,e){const n=function(i){if(!i)return vr(t);const s=vr({...t,...i}),r={};for(let[a,o]of Object.entries(s)){if(e&&a in e)o=e[a](o,{rawConfig:s,defValue:t[a]});else if(!(a in t)){xt(`Unknown option ${a}`);continue}r[a]=o}return r};return n.defaults=t,n.parsers=e||{},n}function pp(t,e){Gn(t,`--psv-${e}-loaded`)!=="true"&&console.error(`PhotoSphereViewer: stylesheet "@photo-sphere-viewer/${e}/index.css" is not loaded`)}function Ec(t,e,n){e&&e!==n&&console.error(`PhotoSphereViewer: @photo-sphere-viewer/${t} is in version ${e} but @photo-sphere-viewer/core is in version ${n}`)}var xr=class{constructor(t){this.easing=go.linear,this.callbacks=[],this.resolved=!1,this.cancelled=!1,this.options=t,t?(t.easing&&(this.easing=typeof t.easing=="function"?t.easing:go[t.easing]||go.linear),this.delayTimeout=setTimeout(()=>{this.delayTimeout=void 0,this.animationFrame=window.requestAnimationFrame(e=>this.__run(e))},t.delay||0)):this.resolved=!0}__run(t){if(this.cancelled)return;this.start||(this.start=t);const e=(t-this.start)/this.options.duration,n={};if(e<1){for(const[i,s]of Object.entries(this.options.properties))if(s){const r=s.start+(s.end-s.start)*this.easing(e);n[i]=r}this.options.onTick(n,e),this.animationFrame=window.requestAnimationFrame(i=>this.__run(i))}else{for(const[i,s]of Object.entries(this.options.properties))s&&(n[i]=s.end);this.options.onTick(n,1),this.__resolve(!0),this.animationFrame=void 0}}__resolve(t){t?this.resolved=!0:this.cancelled=!0,this.callbacks.forEach(e=>e(t)),this.callbacks.length=0}then(t){return this.resolved||this.cancelled?Promise.resolve(this.resolved).then(t):new Promise(e=>{this.callbacks.push(e)}).then(t)}cancel(){!this.cancelled&&!this.resolved&&(this.__resolve(!1),this.delayTimeout&&(window.clearTimeout(this.delayTimeout),this.delayTimeout=void 0),this.animationFrame&&(window.cancelAnimationFrame(this.animationFrame),this.animationFrame=void 0))}},_o=class{constructor(t,e){if(this.fn=t,this.mode=0,this.speed=0,this.speedMult=0,this.currentSpeed=0,this.target=0,this.__current=0,this.min=e.min,this.max=e.max,this.wrap=e.wrap,this.current=e.defaultValue,this.wrap&&this.min!==0)throw new je("invalid config");this.fn&&this.fn(this.current)}get current(){return this.__current}set current(t){this.__current=t}setSpeed(t){this.speed=t}goto(t,e=1){this.mode=2,this.target=this.wrap?nr(t,this.max):vt.clamp(t,this.min,this.max),this.speedMult=e}step(t,e=1){e===0?this.setValue(this.current+t):(this.mode!==2&&(this.target=this.current),this.goto(this.target+t,e))}roll(t=!1,e=1){this.mode=1,this.target=t?-1/0:1/0,this.speedMult=e}stop(){this.mode=0}setValue(t){return this.target=this.wrap?nr(t,this.max):vt.clamp(t,this.min,this.max),this.mode=0,this.currentSpeed=0,this.target!==this.current?(this.current=this.target,this.fn&&this.fn(this.current),!0):!1}update(t){if(this.mode===2){this.wrap&&Math.abs(this.target-this.current)>this.max/2&&(this.current=this.current<this.target?this.current+this.max:this.current-this.max);const i=this.currentSpeed*this.currentSpeed/(this.speed*this.speedMult*4);Math.abs(this.target-this.current)<=i&&(this.mode=0)}let e=this.mode===0?0:this.speed*this.speedMult;this.target<this.current&&(e=-e),this.currentSpeed<e?this.currentSpeed=Math.min(e,this.currentSpeed+t/1e3*this.speed*this.speedMult*2):this.currentSpeed>e&&(this.currentSpeed=Math.max(e,this.currentSpeed-t/1e3*this.speed*this.speedMult*2));let n=null;return this.current>this.target&&this.currentSpeed?n=Math.max(this.target,this.current+this.currentSpeed*t/1e3):this.current<this.target&&this.currentSpeed&&(n=Math.min(this.target,this.current+this.currentSpeed*t/1e3)),n!==null&&(n=this.wrap?nr(n,this.max):vt.clamp(n,this.min,this.max),n!==this.current)?(this.current=n,this.fn&&this.fn(this.current),!0):!1}},mp=class{constructor(t,e){this.fn=t,this.dynamics=e,this.fn&&this.fn(this.current)}get current(){return Object.entries(this.dynamics).reduce((t,[e,n])=>(t[e]=n.current,t),{})}setSpeed(t){for(const e of Object.values(this.dynamics))e.setSpeed(t)}goto(t,e=1){for(const[n,i]of Object.entries(t))this.dynamics[n].goto(i,e)}step(t,e=1){if(e===0)this.setValue(Object.keys(t).reduce((n,i)=>(n[i]=t[i]+this.dynamics[i].current,n),{}));else for(const[n,i]of Object.entries(t))this.dynamics[n].step(i,e)}roll(t,e=1){for(const[n,i]of Object.entries(t))this.dynamics[n].roll(i,e)}stop(){for(const t of Object.values(this.dynamics))t.stop()}setValue(t){let e=!1;for(const[n,i]of Object.entries(t))e=this.dynamics[n].setValue(i)||e;return e&&this.fn&&this.fn(this.current),e}update(t){let e=!1;for(const n of Object.values(this.dynamics))e=n.update(t)||e;return e&&this.fn&&this.fn(this.current),e}},ta=class{constructor(t=200){this.delay=t,this.time=0,this.delay=t}get pending(){return this.time!==0}down(){this.timeout&&(clearTimeout(this.timeout),this.timeout=void 0),this.time=new Date().getTime()}up(t){if(!this.time)return;Date.now()-this.time<this.delay?this.timeout=setTimeout(()=>{t(),this.timeout=void 0,this.time=0},this.delay):(t(),this.time=0)}},gp=(t=>(t.VERTICAL="VERTICAL",t.HORIZONTAL="HORIZONTAL",t))(gp||{}),_p=class{constructor(t,e,n){this.container=t,this.direction=e,this.listener=n,this.mousedown=!1,this.mouseover=!1,this.container.addEventListener("click",this),this.container.addEventListener("mousedown",this),this.container.addEventListener("mouseenter",this),this.container.addEventListener("mouseleave",this),this.container.addEventListener("touchstart",this),this.container.addEventListener("mousemove",this,!0),this.container.addEventListener("touchmove",this,!0),window.addEventListener("mouseup",this),window.addEventListener("touchend",this)}get isVertical(){return this.direction==="VERTICAL"}get isHorizontal(){return this.direction==="HORIZONTAL"}destroy(){window.removeEventListener("mouseup",this),window.removeEventListener("touchend",this)}handleEvent(t){switch(t.type){case"click":t.stopPropagation();break;case"mousedown":this.__onMouseDown(t);break;case"mouseenter":this.__onMouseEnter(t);break;case"mouseleave":this.__onMouseLeave(t);break;case"touchstart":this.__onTouchStart(t);break;case"mousemove":this.__onMouseMove(t);break;case"touchmove":this.__onTouchMove(t);break;case"mouseup":this.__onMouseUp(t);break;case"touchend":this.__onTouchEnd(t);break}}__onMouseDown(t){this.mousedown=!0,this.__update(t.clientX,t.clientY,!0)}__onMouseEnter(t){this.mouseover=!0,this.__update(t.clientX,t.clientY,!0)}__onTouchStart(t){this.mouseover=!0,this.mousedown=!0;const e=t.changedTouches[0];this.__update(e.clientX,e.clientY,!0)}__onMouseMove(t){(this.mousedown||this.mouseover)&&(t.stopPropagation(),this.__update(t.clientX,t.clientY,!0))}__onTouchMove(t){if(this.mousedown||this.mouseover){t.stopPropagation();const e=t.changedTouches[0];this.__update(e.clientX,e.clientY,!0)}}__onMouseUp(t){this.mousedown&&(this.mousedown=!1,this.__update(t.clientX,t.clientY,!1))}__onMouseLeave(t){this.mouseover&&(this.mouseover=!1,this.__update(t.clientX,t.clientY,!0))}__onTouchEnd(t){if(this.mousedown){this.mouseover=!1,this.mousedown=!1;const e=t.changedTouches[0];this.__update(e.clientX,e.clientY,!1)}}__update(t,e,n){const i=this.container.getBoundingClientRect(),s=this.isVertical?e:t,r=i[this.isVertical?"bottom":"left"],a=i[this.isVertical?"height":"width"],o=Math.abs((r-s)/a);this.listener({value:o,click:!n,mousedown:this.mousedown,mouseover:this.mouseover,cursor:{clientX:t,clientY:e}})}},Eb={};uc(Eb,{BeforeAnimateEvent:()=>Mc,BeforeRenderEvent:()=>yp,BeforeRotateEvent:()=>Tp,ClickEvent:()=>Cp,ConfigChangedEvent:()=>kt,DoubleClickEvent:()=>Dp,FullscreenEvent:()=>ir,HideNotificationEvent:()=>sr,HideOverlayEvent:()=>Vp,HidePanelEvent:()=>pi,HideTooltipEvent:()=>qp,KeypressEvent:()=>mi,LoadProgressEvent:()=>Zp,ObjectEnterEvent:()=>Im,ObjectEvent:()=>na,ObjectHoverEvent:()=>Fm,ObjectLeaveEvent:()=>Rl,PanoramaErrorEvent:()=>rm,PanoramaLoadEvent:()=>em,PanoramaLoadedEvent:()=>Al,PositionUpdatedEvent:()=>rr,ReadyEvent:()=>or,RenderEvent:()=>dm,ShowNotificationEvent:()=>ar,ShowOverlayEvent:()=>_m,ShowPanelEvent:()=>gi,ShowTooltipEvent:()=>Sm,SizeUpdatedEvent:()=>lr,StopAllEvent:()=>Am,ViewerEvent:()=>et,ZoomUpdatedEvent:()=>qn});var Mb=class extends Event{constructor(t,e=!1){super(t,{cancelable:e})}},vp=class extends EventTarget{dispatchEvent(t){return super.dispatchEvent(t)}addEventListener(t,e,n){super.addEventListener(t,e,n)}removeEventListener(t,e,n){super.removeEventListener(t,e,n)}},et=class extends Mb{},xp=class Ep extends et{constructor(e,n){super(Ep.type,!0),this.position=e,this.zoomLevel=n}};xp.type="before-animate";var Mc=xp,Mp=class Sp extends et{constructor(e,n){super(Sp.type),this.timestamp=e,this.elapsed=n}};Mp.type="before-render";var yp=Mp,wp=class bp extends et{constructor(e){super(bp.type,!0),this.position=e}};wp.type="before-rotate";var Tp=wp,Ap=class Rp extends et{constructor(e){super(Rp.type),this.data=e}};Ap.type="click";var Cp=Ap,Lp=class Pp extends et{constructor(e){super(Pp.type),this.options=e}containsOptions(...e){return e.some(n=>this.options.includes(n))}};Lp.type="config-changed";var kt=Lp,Ip=class Up extends et{constructor(e){super(Up.type),this.data=e}};Ip.type="dblclick";var Dp=Ip,Np=class Op extends et{constructor(e){super(Op.type),this.fullscreenEnabled=e}};Np.type="fullscreen";var ir=Np,Fp=class Bp extends et{constructor(e){super(Bp.type),this.notificationId=e}};Fp.type="hide-notification";var sr=Fp,zp=class Hp extends et{constructor(e){super(Hp.type),this.overlayId=e}};zp.type="hide-overlay";var Vp=zp,kp=class Gp extends et{constructor(e){super(Gp.type),this.panelId=e}};kp.type="hide-panel";var pi=kp,Wp=class Xp extends et{constructor(e){super(Xp.type),this.tooltipData=e}};Wp.type="hide-tooltip";var qp=Wp,Yp=class jp extends et{constructor(e){super(jp.type,!0),this.key=e}};Yp.type="key-press";var mi=Yp,$p=class Kp extends et{constructor(e){super(Kp.type),this.progress=e}};$p.type="load-progress";var Zp=$p,Jp=class Qp extends et{constructor(e){super(Qp.type),this.panorama=e}};Jp.type="panorama-load";var em=Jp,tm=class nm extends et{constructor(e){super(nm.type),this.data=e}};tm.type="panorama-loaded";var Al=tm,im=class sm extends et{constructor(e,n){super(sm.type),this.panorama=e,this.error=n}};im.type="panorama-error";var rm=im,om=class am extends et{constructor(e){super(am.type),this.position=e}};om.type="position-updated";var rr=om,lm=class cm extends et{constructor(){super(cm.type)}};lm.type="ready";var or=lm,hm=class um extends et{constructor(){super(um.type)}};hm.type="render";var dm=hm,fm=class pm extends et{constructor(e){super(pm.type),this.notificationId=e}};fm.type="show-notification";var ar=fm,mm=class gm extends et{constructor(e){super(gm.type),this.overlayId=e}};mm.type="show-overlay";var _m=mm,vm=class xm extends et{constructor(e){super(xm.type),this.panelId=e}};vm.type="show-panel";var gi=vm,Em=class Mm extends et{constructor(e,n){super(Mm.type),this.tooltip=e,this.tooltipData=n}};Em.type="show-tooltip";var Sm=Em,ym=class wm extends et{constructor(e){super(wm.type),this.size=e}};ym.type="size-updated";var lr=ym,bm=class Tm extends et{constructor(){super(Tm.type)}};bm.type="stop-all";var Am=bm,Rm=class Cm extends et{constructor(e){super(Cm.type),this.zoomLevel=e}};Rm.type="zoom-updated";var qn=Rm,na=class extends et{constructor(t,e,n,i,s){super(t),this.originalEvent=e,this.object=n,this.viewerPoint=i,this.userDataKey=s}},Lm=class Pm extends na{constructor(e,n,i,s){super(Pm.type,e,n,i,s)}};Lm.type="enter-object";var Im=Lm,Um=class Dm extends na{constructor(e,n,i,s){super(Dm.type,e,n,i,s)}};Um.type="leave-object";var Rl=Um,Nm=class Om extends na{constructor(e,n,i,s){super(Om.type,e,n,i,s)}};Nm.type="hover-object";var Fm=Nm,Sc=class{constructor(t){this.viewer=t}init(){}destroy(){}supportsTransition(t){return!1}supportsPreload(t){return!1}textureCoordsToSphericalCoords(t,e){throw new je("Current adapter does not support texture coordinates.")}sphericalCoordsToTextureCoords(t,e){throw new je("Current adapter does not support texture coordinates.")}};Sc.supportsDownload=!1;function Qu(t){if(t){for(const[,e]of[["_",t],...Object.entries(t)])if(e.prototype instanceof Sc)return Ec(e.id,e.VERSION,"5.7.2"),e}return null}var Xs=`${Mi}_touchSupport`,St={loaded:!1,pixelRatio:1,isWebGLSupported:!1,maxTextureWidth:0,isTouchEnabled:null,fullscreenEvent:null,__maxCanvasWidth:null,get maxCanvasWidth(){return this.__maxCanvasWidth===null&&(this.__maxCanvasWidth=wb(this.maxTextureWidth)),this.__maxCanvasWidth},load(){if(!this.loaded){const t=Sb();this.pixelRatio=window.devicePixelRatio||1,this.isWebGLSupported=t!==null,this.maxTextureWidth=t?t.getParameter(t.MAX_TEXTURE_SIZE):0,this.isTouchEnabled=yb(),this.fullscreenEvent=bb(),this.loaded=!0}if(!St.isWebGLSupported)throw new je("WebGL is not supported.");if(St.maxTextureWidth===0)throw new je("Unable to detect system capabilities")}};function Sb(){const t=document.createElement("canvas"),e=["webgl2","webgl","experimental-webgl","moz-webgl","webkit-3d"];let n=null;return t.getContext&&e.some(i=>{try{return n=t.getContext(i),n!==null}catch{return!1}})?n:null}function yb(){let t="ontouchstart"in window||navigator.maxTouchPoints>0;Xs in localStorage&&(t=localStorage[Xs]==="true");const e=new Promise(n=>{const i=()=>{window.removeEventListener("mousedown",s),window.removeEventListener("touchstart",r),clearTimeout(o)},s=()=>{i(),localStorage[Xs]=!1,n(!1)},r=()=>{i(),localStorage[Xs]=!0,n(!0)},a=()=>{i(),localStorage[Xs]=t,n(t)};window.addEventListener("mousedown",s,!1),window.addEventListener("touchstart",r,!1);const o=setTimeout(a,1e4)});return{initial:t,promise:e}}function wb(t){const e=document.createElement("canvas"),n=e.getContext("2d");for(e.width=t,e.height=t/2;e.width>1024;){n.fillStyle="white",n.fillRect(0,0,1,1);try{if(n.getImageData(0,0,1,1).data[0]>0)return e.width}catch{}e.width/=2,e.height/=2}throw new je("Unable to detect system capabilities")}function bb(){return"exitFullscreen"in document?"fullscreenchange":"webkitExitFullscreen"in document?"webkitfullscreenchange":null}function Tb(){self.onmessage=r=>{const a=r.data.panoData,o=new OffscreenCanvas(a.fullWidth,a.fullHeight),l=o.getContext("2d"),c=new OffscreenCanvas(a.croppedWidth,a.croppedHeight);c.getContext("2d").putImageData(r.data.image,0,0),t(o,c,a),postMessage(l.getImageData(0,0,o.width,o.height))};function t(r,a,o){const l=o.fullHeight-o.croppedHeight-o.croppedY,c=o.fullWidth-o.croppedWidth-o.croppedX,h=o.croppedY+o.croppedHeight/2,u=r.width/32,d=u,p=10,_=`blur(${u}px)`,v=r.getContext("2d");if(v.drawImage(a,o.croppedX,o.croppedY,o.croppedWidth,o.croppedHeight),o.croppedY>0){if(o.croppedX>0||c>0){v.filter="none";const m=s(v,o.croppedX,o.croppedY,p,p,2),f=s(v,r.width-c-11,o.croppedY,p,p,2),y=n(m,f);o.croppedX>0&&(v.fillStyle=i(v,0,o.croppedX,y,m),v.fillRect(-d,-d,o.croppedX+d*2,h+d)),c>0&&(v.fillStyle=i(v,r.width-c,r.width,f,y),v.fillRect(r.width-c-d,-d,c+d*2,h+d))}v.filter=_,v.drawImage(a,0,0,a.width,p,o.croppedX,-d,o.croppedWidth,o.croppedY+d*2),v.fillStyle=e(s(v,0,0,r.width,p,p)),v.fillRect(-d,-d,r.width+d*2,d*2)}if(l>0){if(o.croppedX>0||c>0){v.filter="none";const m=s(v,o.croppedX,r.height-l-1-p,p,p,2),f=s(v,r.width-c-1-p,r.height-l-1-p,p,p,2),y=n(m,f);o.croppedX>0&&(v.fillStyle=i(v,0,o.croppedX,y,m),v.fillRect(-d,h,o.croppedX+d*2,r.height-h+d)),c>0&&(v.fillStyle=i(v,r.width-c,r.width,f,y),v.fillRect(r.width-c-d,h,c+d*2,r.height-h+d))}v.filter=_,v.drawImage(a,0,a.height-p,a.width,p,o.croppedX,r.height-l-d,o.croppedWidth,l+d*2),v.fillStyle=e(s(v,0,r.height-1-p,r.width,p,p)),v.fillRect(-d,r.height-d,r.width+d*2,d*2)}o.croppedX>0&&(v.filter=_,v.drawImage(a,a.width-p,0,p,a.height,-d,o.croppedY,d*2,o.croppedHeight),v.drawImage(a,0,0,p,a.height,0,o.croppedY,o.croppedX+d,o.croppedHeight)),c>0&&(v.filter=_,v.drawImage(a,0,0,p,a.height,r.width-d,o.croppedY,d*2,o.croppedHeight),v.drawImage(a,a.width-p,0,p,a.height,r.width-c-d,o.croppedY,c+d,o.croppedHeight)),v.filter="none",v.drawImage(a,o.croppedX,o.croppedY,o.croppedWidth,o.croppedHeight)}function e(r){return`rgb(${r.r}, ${r.g}, ${r.b})`}function n(r,a){return{r:Math.round(r.r/2+a.r/2),g:Math.round(r.g/2+a.g/2),b:Math.round(r.b/2+a.b/2)}}function i(r,a,o,l,c){const h=r.createLinearGradient(a,0,o,0);return h.addColorStop(0,e(l)),h.addColorStop(1,e(c)),h}function s(r,a,o,l,c,h){h=Math.round(h);let u=0,d=0,p=0,_=0;const v=r.getImageData(a,o,l,c);for(let m=0;m<c;m+=h)for(let f=0;f<l;f+=h){const y=4*(m*l+f);u+=v.data[y],d+=v.data[y+1],p+=v.data[y+2],_++}return u=Math.round(u/_),d=Math.round(d/_),p=Math.round(p/_),{r:u,g:d,b:p}}}var Ab=URL.createObjectURL(new Blob(["(",Tb.toString(),")()"],{type:"application/javascript"})),Rb=ea({backgroundColor:"#000",interpolateBackground:!1,resolution:64,useXmpData:!0,blur:!1},{resolution:t=>{if(!t||!vt.isPowerOfTwo(t))throw new je("EquirectangularAdapter resolution must be power of two");return t}}),Ar=class extends Sc{constructor(t,e){super(t),this.config=Rb(e),this.config.interpolateBackground&&(window.Worker?this.interpolationWorker=new Worker(Ab):(xt("Web Worker API not available"),this.config.interpolateBackground=!1)),this.SPHERE_SEGMENTS=this.config.resolution,this.SPHERE_HORIZONTAL_SEGMENTS=this.SPHERE_SEGMENTS/2}supportsTransition(){return!0}supportsPreload(){return!0}destroy(){var t;(t=this.interpolationWorker)==null||t.terminate(),super.destroy()}textureCoordsToSphericalCoords(t,e){if(mn(t.textureX)||mn(t.textureY))throw new je("Texture position is missing 'textureX' or 'textureY'");const n=(t.textureX+e.croppedX)/e.fullWidth*Math.PI*2,i=(t.textureY+e.croppedY)/e.fullHeight*Math.PI;return{yaw:n>=Math.PI?n-Math.PI:n+Math.PI,pitch:Math.PI/2-i}}sphericalCoordsToTextureCoords(t,e){const n=t.yaw/Math.PI/2*e.fullWidth,i=t.pitch/Math.PI*e.fullHeight;return{textureX:Math.round(t.yaw<Math.PI?n+e.fullWidth/2:n-e.fullWidth/2)-e.croppedX,textureY:Math.round(e.fullHeight/2-i)-e.croppedY}}async loadTexture(t,e=!0,n,i=this.config.useXmpData){if(typeof t!="string")return Promise.reject(new je("Invalid panorama url, are you using the right adapter?"));const s=await this.viewer.textureLoader.loadFile(t,e?c=>this.viewer.loader.setProgress(c):null,t),r=i?await this.loadXMP(s):null,a=await this.viewer.textureLoader.blobToImage(s);typeof n=="function"&&(n=n(a,r)),!n&&!r&&(n=this.__defaultPanoData(a));const o={isEquirectangular:!0,fullWidth:En(n==null?void 0:n.fullWidth,r==null?void 0:r.fullWidth,a.width),fullHeight:En(n==null?void 0:n.fullHeight,r==null?void 0:r.fullHeight,a.height),croppedWidth:En(n==null?void 0:n.croppedWidth,r==null?void 0:r.croppedWidth,a.width),croppedHeight:En(n==null?void 0:n.croppedHeight,r==null?void 0:r.croppedHeight,a.height),croppedX:En(n==null?void 0:n.croppedX,r==null?void 0:r.croppedX,0),croppedY:En(n==null?void 0:n.croppedY,r==null?void 0:r.croppedY,0),poseHeading:En(n==null?void 0:n.poseHeading,r==null?void 0:r.poseHeading,0),posePitch:En(n==null?void 0:n.posePitch,r==null?void 0:r.posePitch,0),poseRoll:En(n==null?void 0:n.poseRoll,r==null?void 0:r.poseRoll,0)};(o.croppedWidth!==a.width||o.croppedHeight!==a.height)&&xt(`Invalid panoData, croppedWidth/croppedHeight is not coherent with the loaded image.
            panoData: ${o.croppedWidth}x${o.croppedHeight}, image: ${a.width}x${a.height}`),Math.abs(o.fullWidth-o.fullHeight*2)>1&&(xt("Invalid panoData, fullWidth should be twice fullHeight"),o.fullWidth=o.fullHeight*2),o.croppedX+o.croppedWidth>o.fullWidth&&(xt("Invalid panoData, croppedX + croppedWidth > fullWidth"),o.croppedX=o.fullWidth-o.croppedWidth),o.croppedY+o.croppedHeight>o.fullHeight&&(xt("Invalid panoData, croppedY + croppedHeight > fullHeight"),o.croppedY=o.fullHeight-o.croppedHeight);const l=this.createEquirectangularTexture(a,o);return{panorama:t,texture:l,panoData:o,cacheKey:t}}async loadXMP(t){const e=await this.loadBlobAsString(t),n=e.indexOf("<x:xmpmeta"),i=e.indexOf("</x:xmpmeta>"),s=e.substring(n,i);return n!==-1&&i!==-1&&s.includes("GPano:")?{isEquirectangular:!0,fullWidth:Mn(s,"FullPanoWidthPixels"),fullHeight:Mn(s,"FullPanoHeightPixels"),croppedWidth:Mn(s,"CroppedAreaImageWidthPixels"),croppedHeight:Mn(s,"CroppedAreaImageHeightPixels"),croppedX:Mn(s,"CroppedAreaLeftPixels"),croppedY:Mn(s,"CroppedAreaTopPixels"),poseHeading:Mn(s,"PoseHeadingDegrees"),posePitch:Mn(s,"PosePitchDegrees"),poseRoll:Mn(s,"PoseRollDegrees")}:null}loadBlobAsString(t){return new Promise((e,n)=>{const i=new FileReader;i.onload=()=>e(i.result),i.onerror=n,i.readAsText(t)})}createEquirectangularTexture(t,e){if(this.config.blur||e.fullWidth>St.maxTextureWidth||e.croppedWidth!==e.fullWidth||e.croppedHeight!==e.fullHeight){const n=Math.min(1,St.maxCanvasWidth/e.fullWidth),i={fullWidth:e.fullWidth*n,fullHeight:e.fullHeight*n,croppedWidth:e.croppedWidth*n,croppedHeight:e.croppedHeight*n,croppedX:e.croppedX*n,croppedY:e.croppedY*n},s=document.createElement("canvas");s.width=i.fullWidth,s.height=i.fullHeight;const r=s.getContext("2d");if(this.config.backgroundColor&&(r.fillStyle=this.config.backgroundColor,r.fillRect(0,0,s.width,s.height)),this.config.blur){const o=s.width/2048,l=Math.ceil(o*2);i.croppedWidth===s.width&&(r.drawImage(t,0,0,l/n,t.height,0,i.croppedY,l,i.croppedHeight),r.drawImage(t,t.width-l/n,0,l/n,t.height,s.width-l,i.croppedY,l,i.croppedHeight)),i.croppedHeight===s.height&&(r.drawImage(t,0,0,1,1,i.croppedX,0,i.croppedWidth,l),r.drawImage(t,0,t.height-1,1,1,i.croppedX,s.height-l,i.croppedWidth,l)),r.filter=`blur(${o}px)`}r.drawImage(t,i.croppedX,i.croppedY,i.croppedWidth,i.croppedHeight);const a=bl(s);return this.config.interpolateBackground&&(e.croppedWidth!==e.fullWidth||e.croppedHeight!==e.fullHeight)&&(this.interpolationWorker.postMessage({image:r.getImageData(i.croppedX,i.croppedY,i.croppedWidth,i.croppedHeight),panoData:i}),this.interpolationWorker.onmessage=o=>{r.putImageData(o.data,0,0),a.needsUpdate=!0,this.viewer.needsUpdate()}),a}return bl(t)}createMesh(t=1){const e=new cc(br*t,this.SPHERE_SEGMENTS,this.SPHERE_HORIZONTAL_SEGMENTS,-Math.PI/2).scale(-1,1,1);return new An(e,new oc)}setTexture(t,e){t.material.map=e.texture}setTextureOpacity(t,e){t.material.opacity=e,t.material.transparent=e<1}disposeTexture(t){var e;(e=t.texture)==null||e.dispose()}__defaultPanoData(t){const e=Math.max(t.width,t.height*2),n=Math.round(e/2),i=Math.round((e-t.width)/2),s=Math.round((n-t.height)/2);return{isEquirectangular:!0,fullWidth:e,fullHeight:n,croppedWidth:t.width,croppedHeight:t.height,croppedX:i,croppedY:s}}};Ar.id="equirectangular";Ar.VERSION="5.7.2";Ar.supportsDownload=!0;var Gi=class Bm{constructor(e,n){this.parent=e,this.children=[],this.container=document.createElement("div"),this.state={visible:!0},this.viewer=e instanceof Bm?e.viewer:e,this.container.className=n.className||"",this.parent.children.push(this),this.parent.container.appendChild(this.container)}destroy(){this.parent.container.removeChild(this.container);const e=this.parent.children.indexOf(this);e!==-1&&this.parent.children.splice(e,1),this.children.slice().forEach(n=>n.destroy()),this.children.length=0}toggle(e=!this.isVisible()){e?this.show():this.hide()}hide(e){this.container.style.display="none",this.state.visible=!1}show(e){this.container.style.display="",this.state.visible=!0}isVisible(){return this.state.visible}},Cb=ea({id:null,className:null,title:null,hoverScale:!1,collapsable:!1,tabbable:!0,icon:null,iconActive:null}),$t=class extends Gi{constructor(t,e){super(t,{className:`psv-button ${e.hoverScale?"psv-button--hover-scale":""} ${e.className||""}`}),this.state={visible:!0,enabled:!0,supported:!0,collapsed:!1,active:!1,width:0},this.config=Cb(e),this.config.id=this.constructor.id,e.icon&&this.__setIcon(e.icon),this.state.width=this.container.offsetWidth,this.config.title?this.container.title=this.config.title:this.id&&this.id in this.viewer.config.lang&&(this.container.title=this.viewer.config.lang[this.id]),e.tabbable&&(this.container.tabIndex=0),this.container.addEventListener("click",n=>{this.state.enabled&&this.onClick(),n.stopPropagation()}),this.container.addEventListener("keydown",n=>{n.key===_t.Enter&&this.state.enabled&&(this.onClick(),n.stopPropagation())})}get id(){return this.config.id}get title(){return this.container.title}get content(){return this.container.innerHTML}get width(){return this.state.width}get collapsable(){return this.config.collapsable}show(t=!0){this.isVisible()||(this.state.visible=!0,this.state.collapsed||(this.container.style.display=""),t&&this.viewer.navbar.autoSize())}hide(t=!0){this.isVisible()&&(this.state.visible=!1,this.container.style.display="none",t&&this.viewer.navbar.autoSize())}checkSupported(){_c(this.isSupported(),(t,e)=>{this.state&&(this.state.supported=t,e?t||this.hide():this.toggle(t))})}autoSize(){}isSupported(){return!0}toggleActive(t=!this.state.active){t!==this.state.active&&(this.state.active=t,Jo(this.container,"psv-button--active",this.state.active),this.config.iconActive&&this.__setIcon(this.state.active?this.config.iconActive:this.config.icon))}disable(){this.container.classList.add("psv-button--disabled"),this.state.enabled=!1}enable(){this.container.classList.remove("psv-button--disabled"),this.state.enabled=!0}collapse(){this.state.collapsed=!0,this.container.style.display="none"}uncollapse(){this.state.collapsed=!1,this.state.visible&&(this.container.style.display="")}__setIcon(t){this.container.innerHTML=t,fc(this.container.querySelector("svg"),"psv-button-svg")}},Lb=class extends $t{constructor(t,e){var n,i;super(t,{className:`psv-custom-button ${e.className||""}`,hoverScale:!1,collapsable:e.collapsable!==!1,tabbable:e.tabbable!==!1,title:e.title}),this.customOnClick=e.onClick,e.id?this.config.id=e.id:this.config.id="psvButton-"+Math.random().toString(36).substring(2),e.content&&(typeof e.content=="string"?this.container.innerHTML=e.content:(this.container.classList.add("psv-custom-button--no-padding"),e.content.style.height="100%",(i=(n=e.content).attachViewer)==null||i.call(n,this.viewer),this.container.appendChild(e.content))),this.state.width=this.container.offsetWidth,e.disabled&&this.disable(),e.visible===!1&&this.hide()}onClick(){var t;(t=this.customOnClick)==null||t.call(this,this.viewer)}},Er=class extends $t{constructor(t){super(t,{className:"psv-description-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:_n.info}),this.mode=0,this.viewer.addEventListener(sr.type,this),this.viewer.addEventListener(ar.type,this),this.viewer.addEventListener(pi.type,this),this.viewer.addEventListener(gi.type,this),this.viewer.addEventListener(kt.type,this)}destroy(){this.viewer.removeEventListener(sr.type,this),this.viewer.removeEventListener(ar.type,this),this.viewer.removeEventListener(pi.type,this),this.viewer.removeEventListener(gi.type,this),this.viewer.removeEventListener(kt.type,this),super.destroy()}handleEvent(t){if(t instanceof kt){t.containsOptions("description")&&this.autoSize(!0);return}if(!this.mode)return;let e=!1;t instanceof sr?e=this.mode===1:t instanceof ar?e=this.mode===1&&t.notificationId!==wt.DESCRIPTION:t instanceof pi?e=this.mode===2:t instanceof gi&&(e=this.mode===2&&t.panelId!==wt.DESCRIPTION),e&&(this.toggleActive(!1),this.mode=0)}onClick(){this.mode?this.__close():this.__open()}hide(t){super.hide(t),this.mode&&this.__close()}autoSize(t=!1){if(t){const e=this.viewer.navbar.getButton("caption",!1),n=e&&!e.isVisible(),i=!!this.viewer.config.description;n||i?this.show(!1):this.hide(!1)}}__close(){switch(this.mode){case 1:this.viewer.notification.hide(wt.DESCRIPTION);break;case 2:this.viewer.panel.hide(wt.DESCRIPTION);break}}__open(){this.toggleActive(!0),this.viewer.config.description?(this.mode=2,this.viewer.panel.show({id:wt.DESCRIPTION,content:(this.viewer.config.caption?`<p>${this.viewer.config.caption}</p>`:"")+this.viewer.config.description})):(this.mode=1,this.viewer.notification.show({id:wt.DESCRIPTION,content:this.viewer.config.caption}))}};Er.id="description";var zm=class extends $t{constructor(t){super(t,{className:"psv-download-button",hoverScale:!0,collapsable:!0,tabbable:!0,icon:_n.download}),this.viewer.addEventListener(kt.type,this)}destroy(){this.viewer.removeEventListener(kt.type,this),super.destroy()}handleEvent(t){t instanceof kt&&t.containsOptions("downloadUrl")&&this.checkSupported()}onClick(){const t=document.createElement("a");t.href=this.viewer.config.downloadUrl||this.viewer.config.panorama,t.href.startsWith("data:")&&!this.viewer.config.downloadName?t.download="panorama."+t.href.substring(0,t.href.indexOf(";")).split("/").pop():t.download=this.viewer.config.downloadName||t.href.split("/").pop(),t.target="_blank",this.viewer.container.appendChild(t),t.click(),setTimeout(()=>{this.viewer.container.removeChild(t)},100)}checkSupported(){this.viewer.adapter.constructor.supportsDownload||this.viewer.config.downloadUrl?this.show():this.hide()}};zm.id="download";var Hm=class extends $t{constructor(t){super(t,{className:"psv-fullscreen-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:_n.fullscreenIn,iconActive:_n.fullscreenOut}),this.viewer.addEventListener(ir.type,this)}destroy(){this.viewer.removeEventListener(ir.type,this),super.destroy()}handleEvent(t){t instanceof ir&&this.toggleActive(t.fullscreenEnabled)}onClick(){this.viewer.toggleFullscreen()}};Hm.id="fullscreen";var Pb="psvButton",Ib=(t,e)=>`
<div class="psv-panel-menu psv-panel-menu--stripped">
  <h1 class="psv-panel-menu-title">${_n.menu} ${e}</h1>
  <ul class="psv-panel-menu-list">
    ${t.map(n=>`
    <li data-psv-button="${n.id}" class="psv-panel-menu-item" tabindex="0">
      <span class="psv-panel-menu-item-icon">${n.content}</span>
      <span class="psv-panel-menu-item-label">${n.title}</span>
    </li>
    `).join("")}
  </ul>
</div>
`,vo=class extends $t{constructor(t){super(t,{className:"psv-menu-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:_n.menu}),this.viewer.addEventListener(gi.type,this),this.viewer.addEventListener(pi.type,this),super.hide()}destroy(){this.viewer.removeEventListener(gi.type,this),this.viewer.removeEventListener(pi.type,this),super.destroy()}handleEvent(t){t instanceof gi?this.toggleActive(t.panelId===wt.MENU):t instanceof pi&&this.toggleActive(!1)}onClick(){this.state.active?this.__hideMenu():this.__showMenu()}hide(t){super.hide(t),this.__hideMenu()}show(t){super.show(t),this.state.active&&this.__showMenu()}__showMenu(){this.viewer.panel.show({id:wt.MENU,content:Ib(this.viewer.navbar.collapsed,this.viewer.config.lang.menu),noMargin:!0,clickHandler:t=>{const e=t?pc(t,"li"):void 0,n=e?e.dataset[Pb]:void 0;n&&(this.viewer.navbar.getButton(n).onClick(),this.__hideMenu())}})}__hideMenu(){this.viewer.panel.hide(wt.MENU)}};vo.id="menu";function Ub(t){let e=0;switch(t){case 0:e=90;break;case 1:e=-90;break;case 3:e=180;break;default:e=0;break}return _n.arrow.replace("rotate(0",`rotate(${e}`)}var Rr=class extends $t{constructor(t,e){super(t,{className:"psv-move-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:Ub(e)}),this.direction=e,this.handler=new ta,this.container.addEventListener("mousedown",this),this.container.addEventListener("keydown",this),this.container.addEventListener("keyup",this),this.viewer.container.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchend",this)}destroy(){this.__onMouseUp(),this.viewer.container.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchend",this),super.destroy()}handleEvent(t){switch(t.type){case"mousedown":this.__onMouseDown();break;case"mouseup":this.__onMouseUp();break;case"touchend":this.__onMouseUp();break;case"keydown":t.key===_t.Enter&&this.__onMouseDown();break;case"keyup":t.key===_t.Enter&&this.__onMouseUp();break}}onClick(){}isSupported(){return Qo(St.isTouchEnabled)}__onMouseDown(){if(!this.state.enabled)return;const t={};switch(this.direction){case 0:t.pitch=!1;break;case 1:t.pitch=!0;break;case 3:t.yaw=!1;break;default:t.yaw=!0;break}this.viewer.stopAll(),this.viewer.dynamics.position.roll(t),this.handler.down()}__onMouseUp(){this.state.enabled&&this.handler.up(()=>{this.viewer.dynamics.position.stop(),this.viewer.resetIdleTimer()})}};Rr.groupId="move";var Vm=class extends Rr{constructor(t){super(t,1)}};Vm.id="moveDown";var km=class extends Rr{constructor(t){super(t,2)}};km.id="moveLeft";var Gm=class extends Rr{constructor(t){super(t,3)}};Gm.id="moveRight";var Wm=class extends Rr{constructor(t){super(t,0)}};Wm.id="moveUp";var yc=class extends $t{constructor(t,e,n){super(t,{className:"psv-zoom-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:e}),this.direction=n,this.handler=new ta,this.container.addEventListener("mousedown",this),this.container.addEventListener("keydown",this),this.container.addEventListener("keyup",this),this.viewer.container.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchend",this)}destroy(){this.__onMouseUp(),this.viewer.container.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchend",this),super.destroy()}handleEvent(t){switch(t.type){case"mousedown":this.__onMouseDown();break;case"mouseup":this.__onMouseUp();break;case"touchend":this.__onMouseUp();break;case"keydown":t.key===_t.Enter&&this.__onMouseDown();break;case"keyup":t.key===_t.Enter&&this.__onMouseUp();break}}onClick(){}isSupported(){return Qo(St.isTouchEnabled)}__onMouseDown(){this.state.enabled&&(this.viewer.dynamics.zoom.roll(this.direction===1),this.handler.down())}__onMouseUp(){this.state.enabled&&this.handler.up(()=>this.viewer.dynamics.zoom.stop())}};yc.groupId="zoom";var Xm=class extends yc{constructor(t){super(t,_n.zoomIn,0)}};Xm.id="zoomIn";var qm=class extends yc{constructor(t){super(t,_n.zoomOut,1)}};qm.id="zoomOut";var wc=class extends $t{constructor(t){super(t,{className:"psv-zoom-range",hoverScale:!1,collapsable:!1,tabbable:!1}),this.zoomRange=document.createElement("div"),this.zoomRange.className="psv-zoom-range-line",this.container.appendChild(this.zoomRange),this.zoomValue=document.createElement("div"),this.zoomValue.className="psv-zoom-range-handle",this.zoomRange.appendChild(this.zoomValue),this.slider=new _p(this.container,"HORIZONTAL",e=>this.__onSliderUpdate(e)),this.mediaMinWidth=parseInt(Gn(this.container,"max-width"),10),this.viewer.addEventListener(qn.type,this),this.viewer.state.ready?this.__moveZoomValue(this.viewer.getZoomLevel()):this.viewer.addEventListener(or.type,this)}destroy(){this.slider.destroy(),this.viewer.removeEventListener(qn.type,this),this.viewer.removeEventListener(or.type,this),super.destroy()}handleEvent(t){t instanceof qn?this.__moveZoomValue(t.zoomLevel):t instanceof or&&this.__moveZoomValue(this.viewer.getZoomLevel())}onClick(){}isSupported(){return Qo(St.isTouchEnabled)}autoSize(){this.state.supported&&(this.viewer.state.size.width<=this.mediaMinWidth&&this.state.visible?this.hide(!1):this.viewer.state.size.width>this.mediaMinWidth&&!this.state.visible&&this.show(!1))}__moveZoomValue(t){this.zoomValue.style.left=t/100*this.zoomRange.offsetWidth-this.zoomValue.offsetWidth/2+"px"}__onSliderUpdate(t){t.mousedown&&this.viewer.zoom(t.value*100)}};wc.id="zoomRange";wc.groupId="zoom";var Ym=class extends vp{constructor(t){super(),this.viewer=t}init(){}destroy(){}},Db=class extends Ym{constructor(t,e){super(t),this.config=this.constructor.configParser(e)}setOption(t,e){this.setOptions({[t]:e})}setOptions(t){const e={...this.config,...t},n=this.constructor,i=n.configParser,s=n.readonlyOptions,r=n.id;for(let[a,o]of Object.entries(t)){if(!(a in i.defaults)){xt(`${r}: Unknown option "${a}"`);continue}if(s.includes(a)){xt(`${r}: Option "${a}" cannot be updated`);continue}a in i.parsers&&(o=i.parsers[a](o,{rawConfig:e,defValue:i.defaults[a]})),this.config[a]=o}}};Db.readonlyOptions=[];function Cl(t){if(t){for(const[,e]of[["_",t],...Object.entries(t)])if(e.prototype instanceof Ym)return Ec(e.id,e.VERSION,"5.7.2"),e}return null}var Ls={panorama:null,container:null,adapter:[Ar,null],plugins:[],caption:null,description:null,downloadUrl:null,downloadName:null,loadingImg:null,loadingTxt:"",size:null,fisheye:0,minFov:30,maxFov:90,defaultZoomLvl:50,defaultYaw:0,defaultPitch:0,sphereCorrection:null,moveSpeed:1,zoomSpeed:1,moveInertia:!0,mousewheel:!0,mousemove:!0,mousewheelCtrlKey:!1,touchmoveTwoFingers:!1,panoData:null,requestHeaders:null,rendererParameters:{alpha:!0,antialias:!0},withCredentials:!1,navbar:["zoom","move","download","description","caption","fullscreen"],lang:{zoom:"Zoom",zoomOut:"Zoom out",zoomIn:"Zoom in",moveUp:"Move up",moveDown:"Move down",moveLeft:"Move left",moveRight:"Move right",description:"Description",download:"Download",fullscreen:"Fullscreen",loading:"Loading...",menu:"Menu",close:"Close",twoFingers:"Use two fingers to navigate",ctrlZoom:"Use ctrl + scroll to zoom the image",loadError:"The panorama can't be loaded"},keyboard:"fullscreen",keyboardActions:{[_t.ArrowUp]:"ROTATE_UP",[_t.ArrowDown]:"ROTATE_DOWN",[_t.ArrowRight]:"ROTATE_RIGHT",[_t.ArrowLeft]:"ROTATE_LEFT",[_t.PageUp]:"ZOOM_IN",[_t.PageDown]:"ZOOM_OUT",[_t.Plus]:"ZOOM_IN",[_t.Minus]:"ZOOM_OUT"}},ed={panorama:"Use setPanorama method to change the panorama",panoData:"Use setPanorama method to change the panorama",container:"Cannot change viewer container",adapter:"Cannot change adapter",plugins:"Cannot change plugins"},Ll={container:t=>{if(!t)throw new je("No value given for container.");return t},adapter:(t,{defValue:e})=>{if(t?Array.isArray(t)?t=[Qu(t[0]),t[1]]:t=[Qu(t),null]:t=e,!t[0])throw new je("An undefined value was given for adapter.");if(!t[0].id)throw new je("Adapter has no id.");return t},defaultYaw:t=>oi(t),defaultPitch:t=>oi(t,!0),defaultZoomLvl:t=>vt.clamp(t,0,100),minFov:(t,{rawConfig:e})=>(e.maxFov<t&&(xt("maxFov cannot be lower than minFov"),t=e.maxFov),vt.clamp(t,1,179)),maxFov:(t,{rawConfig:e})=>(t<e.minFov&&(t=e.minFov),vt.clamp(t,1,179)),lang:t=>({...Ls.lang,...t}),keyboard:t=>t?typeof t=="object"?(xt("Use keyboardActions to configure the keyboard actions, keyboard option must be either true, false, 'fullscreen' or 'always'"),"fullscreen"):t==="always"?"always":"fullscreen":!1,keyboardActions:(t,{rawConfig:e})=>e.keyboard&&typeof e.keyboard=="object"?e.keyboard:t,fisheye:t=>t===!0?1:t===!1?0:t,requestHeaders:t=>t&&typeof t=="object"?()=>t:typeof t=="function"?t:null,rendererParameters:(t,{defValue:e})=>({...t,...e}),plugins:t=>t.map((e,n)=>{if(Array.isArray(e)?e=[Cl(e[0]),e[1]]:e=[Cl(e),null],!e[0])throw new je(`An undefined value was given for plugin ${n}.`);if(!e[0].id)throw new je(`Plugin ${n} has no id.`);return e}),navbar:t=>t===!1?null:t===!0?vr(Ls.navbar):typeof t=="string"?t.split(/[ ,]/):t},Nb=ea(Ls,Ll),fs=class extends $t{constructor(t){super(t,{className:"psv-caption",hoverScale:!1,collapsable:!1,tabbable:!0}),this.contentWidth=0,this.state.width=0,this.contentElt=document.createElement("div"),this.contentElt.className="psv-caption-content",this.container.appendChild(this.contentElt),this.setCaption(this.viewer.config.caption)}hide(){this.contentElt.style.display="none",this.state.visible=!1}show(){this.contentElt.style.display="",this.state.visible=!0}onClick(){}setCaption(t){this.show(),this.contentElt.innerHTML=t??"",this.contentElt.innerHTML?this.contentWidth=this.contentElt.offsetWidth:this.contentWidth=0,this.autoSize()}autoSize(){this.toggle(this.container.offsetWidth>=this.contentWidth),this.__refreshButton()}__refreshButton(){var t;(t=this.viewer.navbar.getButton(Er.id,!1))==null||t.autoSize(!0)}};fs.id="caption";var Pl={},Uo={};function Ob(t,e){if(!t.id)throw new je("Button id is required");if(Pl[t.id]=t,t.groupId&&(Uo[t.groupId]=Uo[t.groupId]||[]).push(t),e){const n=Ls.navbar;switch(e){case"start":n.unshift(t.id);break;case"end":n.push(t.id);break;default:{const[i,s]=e.split(":"),r=n.indexOf(i);if(!i||!s||r===-1)throw new je(`Invalid defaultPosition ${e}`);n.splice(r+(s==="right"?1:0),0,t.id)}}}}[qm,wc,Xm,Er,fs,zm,Hm,km,Gm,Wm,Vm].forEach(t=>Ob(t));var Fb=class extends Gi{constructor(t){super(t,{className:`psv-navbar ${Tr}`}),this.collapsed=[],this.state.visible=!1}show(){this.viewer.container.classList.add("psv--has-navbar"),this.container.classList.add("psv-navbar--open"),this.state.visible=!0}hide(){this.viewer.container.classList.remove("psv--has-navbar"),this.container.classList.remove("psv-navbar--open"),this.state.visible=!1}setButtons(t){this.children.slice().forEach(e=>e.destroy()),this.children.length=0,t.indexOf(fs.id)!==-1&&t.indexOf(Er.id)===-1&&t.splice(t.indexOf(fs.id),0,Er.id),t.forEach(e=>{typeof e=="object"?new Lb(this,e):Pl[e]?new Pl[e](this):Uo[e]?Uo[e].forEach(n=>{new n(this)}):xt(`Unknown button ${e}`)}),new vo(this),this.children.forEach(e=>{e instanceof $t&&e.checkSupported()}),this.autoSize()}setCaption(t){this.children.some(e=>e instanceof fs?(e.setCaption(t),!0):!1)}getButton(t,e=!0){const n=this.children.find(i=>i instanceof $t&&i.id===t);return!n&&e&&xt(`button "${t}" not found in the navbar`),n}autoSize(){var i;this.children.forEach(s=>{s instanceof $t&&s.autoSize()});const t=this.container.offsetWidth;let e=0;const n=[];this.children.forEach(s=>{s.isVisible()&&s instanceof $t&&(e+=s.width,s.collapsable&&n.push(s))}),e!==0&&(t<e&&n.length>0?(n.forEach(s=>s.collapse()),this.collapsed=n,this.getButton(vo.id).show(!1)):t>=e&&this.collapsed.length>0&&(this.collapsed.forEach(s=>s.uncollapse()),this.collapsed=[],this.getButton(vo.id).hide(!1)),(i=this.getButton(fs.id,!1))==null||i.autoSize())}};vl.enabled=!1;var ls={enabled:!0,maxItems:10,ttl:10*60,items:{},purgeInterval:null,init(){vl.enabled&&(xt("ThreeJS cache should be disabled"),vl.enabled=!1),!this.purgeInterval&&this.enabled&&(this.purgeInterval=setInterval(()=>this.purge(),60*1e3))},add(t,e,n){this.enabled&&e&&(this.items[e]=this.items[e]??{files:{},lastAccess:null},this.items[e].files[t]=n,this.items[e].lastAccess=Date.now())},get(t,e){if(this.enabled&&e&&this.items[e])return this.items[e].lastAccess=Date.now(),this.items[e].files[t]},remove(t,e){this.enabled&&e&&this.items[e]&&(delete this.items[e].files[t],Object.keys(this.items[e].files).length===0&&delete this.items[e])},purge(){Object.entries(this.items).sort(([,t],[,e])=>e.lastAccess-t.lastAccess).forEach(([t,{lastAccess:e}],n)=>{n>0&&(Date.now()-e>=this.ttl*1e3||n>=this.maxItems)&&delete this.items[t]})}},Bb=class extends Gi{constructor(t){super(t,{className:"psv-loader-container"}),this.loader=document.createElement("div"),this.loader.className="psv-loader",this.container.appendChild(this.loader),this.size=this.loader.offsetWidth,this.canvas=document.createElementNS("http://www.w3.org/2000/svg","svg"),this.canvas.setAttribute("class","psv-loader-canvas"),this.canvas.setAttribute("viewBox",`0 0 ${this.size} ${this.size}`),this.loader.appendChild(this.canvas),this.textColor=Gn(this.loader,"color"),this.color=Gn(this.canvas,"color"),this.border=parseInt(Gn(this.loader,"--psv-loader-border"),10),this.thickness=parseInt(Gn(this.loader,"--psv-loader-tickness"),10),this.viewer.addEventListener(kt.type,this),this.__updateContent(),this.hide()}destroy(){this.viewer.removeEventListener(kt.type,this),super.destroy()}handleEvent(t){t instanceof kt&&t.containsOptions("loadingImg","loadingTxt")&&this.__updateContent()}setProgress(t){const e=Math.min(t,99.999)/100*Math.PI*2,n=this.size/2,i=n,s=this.thickness/2+this.border,r=(this.size-this.thickness)/2-this.border,a=Math.sin(e)*r+n,o=-Math.cos(e)*r+n,l=t>50?"1":"0";this.canvas.innerHTML=`
            <circle cx="${n}" cy="${n}" r="${n}" fill="${this.color}"/>
            <path d="M ${i} ${s} A ${r} ${r} 0 ${l} 1 ${a} ${o}" 
                  fill="none" stroke="${this.textColor}" stroke-width="${this.thickness}" stroke-linecap="round"/>
        `,this.viewer.dispatchEvent(new Zp(Math.round(t)))}__updateContent(){const t=this.loader.querySelector(".psv-loader-image, .psv-loader-text");t&&this.loader.removeChild(t);let e;if(this.viewer.config.loadingImg?(e=document.createElement("img"),e.className="psv-loader-image",e.src=this.viewer.config.loadingImg):this.viewer.config.loadingTxt!==null&&(e=document.createElement("div"),e.className="psv-loader-text",e.innerHTML=this.viewer.config.loadingTxt||this.viewer.config.lang.loading),e){const n=Math.round(Math.sqrt(2*Math.pow(this.size/2-this.thickness/2-this.border,2)));e.style.maxWidth=n+"px",e.style.maxHeight=n+"px",this.loader.appendChild(e)}}},zb=class extends Gi{constructor(t){super(t,{className:"psv-notification"}),this.state={visible:!1,contentId:null,timeout:null},this.content=document.createElement("div"),this.content.className="psv-notification-content",this.container.appendChild(this.content),this.content.addEventListener("click",()=>this.hide())}isVisible(t){return this.state.visible&&(!t||!this.state.contentId||this.state.contentId===t)}toggle(){throw new je("Notification cannot be toggled")}show(t){this.state.timeout&&(clearTimeout(this.state.timeout),this.state.timeout=null),typeof t=="string"&&(t={content:t}),this.state.contentId=t.id||null,this.content.innerHTML=t.content,this.container.classList.add("psv-notification--visible"),this.state.visible=!0,this.viewer.dispatchEvent(new ar(t.id)),t.timeout&&(this.state.timeout=setTimeout(()=>this.hide(this.state.contentId),t.timeout))}hide(t){if(this.isVisible(t)){const e=this.state.contentId;this.container.classList.remove("psv-notification--visible"),this.state.visible=!1,this.state.contentId=null,this.viewer.dispatchEvent(new sr(e))}}},Hb=class extends Gi{constructor(t){super(t,{className:`psv-overlay ${Tr}`}),this.state={visible:!1,contentId:null,dissmisable:!0},this.image=document.createElement("div"),this.image.className="psv-overlay-image",this.container.appendChild(this.image),this.title=document.createElement("div"),this.title.className="psv-overlay-title",this.container.appendChild(this.title),this.text=document.createElement("div"),this.text.className="psv-overlay-text",this.container.appendChild(this.text),this.container.addEventListener("click",this),this.viewer.addEventListener(mi.type,this),super.hide()}destroy(){this.viewer.removeEventListener(mi.type,this),super.destroy()}handleEvent(t){t.type==="click"?this.isVisible()&&this.state.dissmisable&&(this.hide(),t.stopPropagation()):t instanceof mi&&this.isVisible()&&this.state.dissmisable&&t.key===_t.Escape&&(this.hide(),t.preventDefault())}isVisible(t){return this.state.visible&&(!t||!this.state.contentId||this.state.contentId===t)}toggle(){throw new je("Overlay cannot be toggled")}show(t){typeof t=="string"&&(t={title:t}),this.state.contentId=t.id||null,this.state.dissmisable=t.dissmisable!==!1,this.image.innerHTML=t.image||"",this.title.innerHTML=t.title||"",this.text.innerHTML=t.text||"",super.show(),this.viewer.dispatchEvent(new _m(t.id))}hide(t){if(this.isVisible(t)){const e=this.state.contentId;super.hide(),this.state.contentId=null,this.viewer.dispatchEvent(new Vp(e))}}},Vb=200,Ya="psv-panel-content--no-interaction",kb=class extends Gi{constructor(t){super(t,{className:`psv-panel ${Tr}`}),this.state={visible:!1,contentId:null,mouseX:0,mouseY:0,mousedown:!1,clickHandler:null,keyHandler:null,width:{}};const e=document.createElement("div");e.className="psv-panel-resizer",this.container.appendChild(e);const n=document.createElement("div");n.className="psv-panel-close-button",n.innerHTML=_n.close,n.title=t.config.lang.close,this.container.appendChild(n),this.content=document.createElement("div"),this.content.className="psv-panel-content",this.container.appendChild(this.content),this.container.addEventListener("wheel",i=>i.stopPropagation()),n.addEventListener("click",()=>this.hide()),e.addEventListener("mousedown",this),e.addEventListener("touchstart",this),this.viewer.container.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchend",this),this.viewer.container.addEventListener("mousemove",this),this.viewer.container.addEventListener("touchmove",this),this.viewer.addEventListener(mi.type,this)}destroy(){this.viewer.removeEventListener(mi.type,this),this.viewer.container.removeEventListener("mousemove",this),this.viewer.container.removeEventListener("touchmove",this),this.viewer.container.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchend",this),super.destroy()}handleEvent(t){switch(t.type){case"mousedown":this.__onMouseDown(t);break;case"touchstart":this.__onTouchStart(t);break;case"mousemove":this.__onMouseMove(t);break;case"touchmove":this.__onTouchMove(t);break;case"mouseup":this.__onMouseUp(t);break;case"touchend":this.__onTouchEnd(t);break;case mi.type:this.__onKeyPress(t);break}}isVisible(t){return this.state.visible&&(!t||!this.state.contentId||this.state.contentId===t)}toggle(){throw new je("Panel cannot be toggled")}show(t){typeof t=="string"&&(t={content:t});const e=this.isVisible(t.id);this.state.contentId=t.id||null,this.state.visible=!0,this.state.clickHandler&&(this.content.removeEventListener("click",this.state.clickHandler),this.content.removeEventListener("keydown",this.state.keyHandler),this.state.clickHandler=null,this.state.keyHandler=null),t.id&&this.state.width[t.id]?this.container.style.width=this.state.width[t.id]:t.width?this.container.style.width=t.width:this.container.style.width=null,this.content.innerHTML=t.content,this.content.scrollTop=0,this.container.classList.add("psv-panel--open"),Jo(this.content,"psv-panel-content--no-margin",t.noMargin===!0),t.clickHandler&&(this.state.clickHandler=n=>{t.clickHandler(n.target)},this.state.keyHandler=n=>{n.key===_t.Enter&&t.clickHandler(n.target)},this.content.addEventListener("click",this.state.clickHandler),this.content.addEventListener("keydown",this.state.keyHandler),e||setTimeout(()=>{var n;(n=this.content.querySelector("a,button,[tabindex]"))==null||n.focus()},300)),this.viewer.dispatchEvent(new gi(t.id))}hide(t){if(this.isVisible(t)){const e=this.state.contentId;this.state.visible=!1,this.state.contentId=null,this.content.innerHTML=null,this.container.classList.remove("psv-panel--open"),this.state.clickHandler&&(this.content.removeEventListener("click",this.state.clickHandler),this.state.clickHandler=null),this.viewer.dispatchEvent(new pi(e))}}__onMouseDown(t){t.stopPropagation(),this.__startResize(t.clientX,t.clientY)}__onTouchStart(t){if(t.stopPropagation(),t.touches.length===1){const e=t.touches[0];this.__startResize(e.clientX,e.clientY)}}__onMouseUp(t){this.state.mousedown&&(t.stopPropagation(),this.state.mousedown=!1,this.content.classList.remove(Ya))}__onTouchEnd(t){this.state.mousedown&&(t.stopPropagation(),t.touches.length===0&&(this.state.mousedown=!1,this.content.classList.remove(Ya)))}__onMouseMove(t){this.state.mousedown&&(t.stopPropagation(),this.__resize(t.clientX,t.clientY))}__onTouchMove(t){if(this.state.mousedown){const e=t.touches[0];this.__resize(e.clientX,e.clientY)}}__onKeyPress(t){this.isVisible()&&t.key===_t.Escape&&(this.hide(),t.preventDefault())}__startResize(t,e){this.state.mouseX=t,this.state.mouseY=e,this.state.mousedown=!0,this.content.classList.add(Ya)}__resize(t,e){const n=t,i=e,s=Math.max(Vb,this.container.offsetWidth-(n-this.state.mouseX))+"px";this.state.contentId&&(this.state.width[this.state.contentId]=s),this.container.style.width=s,this.state.mouseX=n,this.state.mouseY=i}},Gb=class extends Gi{constructor(t,e){super(t,{className:"psv-tooltip"}),this.state={visible:!0,arrow:0,border:0,state:0,width:0,height:0,pos:"",config:null,data:null},this.content=document.createElement("div"),this.content.className="psv-tooltip-content",this.container.appendChild(this.content),this.arrow=document.createElement("div"),this.arrow.className="psv-tooltip-arrow",this.container.appendChild(this.arrow),this.container.addEventListener("transitionend",this),this.container.addEventListener("touchdown",n=>n.stopPropagation()),this.container.addEventListener("mousedown",n=>n.stopPropagation()),this.container.style.top="-1000px",this.container.style.left="-1000px",this.show(e)}handleEvent(t){t.type==="transitionend"&&this.__onTransitionEnd(t)}destroy(){delete this.state.data,super.destroy()}toggle(){throw new je("Tooltip cannot be toggled")}show(t){if(this.state.state!==0)throw new je("Initialized tooltip cannot be re-initialized");t.className&&fc(this.container,t.className),t.style&&Object.assign(this.container.style,t.style),this.state.state=3,this.update(t.content,t),this.state.data=t.data,this.state.state=1,this.viewer.dispatchEvent(new Sm(this,this.state.data)),this.__waitImages()}update(t,e){this.content.innerHTML=t;const n=this.container.getBoundingClientRect();this.state.width=n.right-n.left,this.state.height=n.bottom-n.top,this.state.arrow=parseInt(Gn(this.arrow,"border-top-width"),10),this.state.border=parseInt(Gn(this.container,"border-top-left-radius"),10),this.move(e??this.state.config),this.__waitImages()}move(t){var o;if(this.state.state!==1&&this.state.state!==3)throw new je("Uninitialized tooltip cannot be moved");t.box=t.box??((o=this.state.config)==null?void 0:o.box)??{width:0,height:0},this.state.config=t;const e=this.container,n=this.arrow,i={posClass:dp(t.position,{allowCenter:!1,cssOrder:!1})||["top","center"],width:this.state.width,height:this.state.height,top:0,left:0,arrowTop:0,arrowLeft:0};this.__computeTooltipPosition(i,t);let s=null,r=null;if(i.top<0?s="bottom":i.top+i.height>this.viewer.state.size.height&&(s="top"),i.left<0?r="right":i.left+i.width>this.viewer.state.size.width&&(r="left"),r||s){const l=xc(i.posClass);s&&(i.posClass[l?0:1]=s),r&&(i.posClass[l?1:0]=r),this.__computeTooltipPosition(i,t)}e.style.top=i.top+"px",e.style.left=i.left+"px",n.style.top=i.arrowTop+"px",n.style.left=i.arrowLeft+"px";const a=i.posClass.join("-");a!==this.state.pos&&(e.classList.remove(`psv-tooltip--${this.state.pos}`),this.state.pos=a,e.classList.add(`psv-tooltip--${this.state.pos}`))}hide(){this.container.classList.remove("psv-tooltip--visible"),this.state.state=2,this.viewer.dispatchEvent(new qp(this.state.data))}__onTransitionEnd(t){if(t.propertyName==="transform")switch(this.state.state){case 1:this.container.classList.add("psv-tooltip--visible"),this.state.state=3;break;case 2:this.state.state=0,this.destroy();break}}__computeTooltipPosition(t,e){const n=this.state.arrow,i=e.top,s=t.height,r=e.left,a=t.width,o=n+this.state.border,l=e.box.width/2+n*2,c=e.box.height/2+n*2;switch(t.posClass.join("-")){case"top-left":t.top=i-c-s,t.left=r+o-a,t.arrowTop=s,t.arrowLeft=a-o-n;break;case"top-center":t.top=i-c-s,t.left=r-a/2,t.arrowTop=s,t.arrowLeft=a/2-n;break;case"top-right":t.top=i-c-s,t.left=r-o,t.arrowTop=s,t.arrowLeft=n;break;case"bottom-left":t.top=i+c,t.left=r+o-a,t.arrowTop=-n*2,t.arrowLeft=a-o-n;break;case"bottom-center":t.top=i+c,t.left=r-a/2,t.arrowTop=-n*2,t.arrowLeft=a/2-n;break;case"bottom-right":t.top=i+c,t.left=r-o,t.arrowTop=-n*2,t.arrowLeft=n;break;case"left-top":t.top=i+o-s,t.left=r-l-a,t.arrowTop=s-o-n,t.arrowLeft=a;break;case"center-left":t.top=i-s/2,t.left=r-l-a,t.arrowTop=s/2-n,t.arrowLeft=a;break;case"left-bottom":t.top=i-o,t.left=r-l-a,t.arrowTop=n,t.arrowLeft=a;break;case"right-top":t.top=i+o-s,t.left=r+l,t.arrowTop=s-o-n,t.arrowLeft=-n*2;break;case"center-right":t.top=i-s/2,t.left=r+l,t.arrowTop=s/2-n,t.arrowLeft=-n*2;break;case"right-bottom":t.top=i-o,t.left=r+l,t.arrowTop=n,t.arrowLeft=-n*2;break}}__waitImages(){const t=this.content.querySelectorAll("img");if(t.length>0){const e=[];t.forEach(n=>{n.complete||e.push(new Promise(i=>{n.onload=i,n.onerror=i}))}),e.length&&Promise.all(e).then(()=>{if(this.state.state===1||this.state.state===3){const n=this.container.getBoundingClientRect();this.state.width=n.right-n.left,this.state.height=n.bottom-n.top,this.move(this.state.config)}})}}},Wb=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="15 15 70 70"><path fill="currentColor" d="M50,16.2c-18.6,0-33.8,15.1-33.8,33.8S31.4,83.7,50,83.7S83.8,68.6,83.8,50S68.6,16.2,50,16.2z M50,80.2c-16.7,0-30.2-13.6-30.2-30.2S33.3,19.7,50,19.7S80.3,33.3,80.3,50S66.7,80.2,50,80.2z"/><rect fill="currentColor" x="48" y="31.7" width="4" height="28"/><rect fill="currentColor" x="48" y="63.2" width="4" height="5"/><!--Created by Shastry from the Noun Project--></svg>
`,Cr=class{constructor(t){this.viewer=t,this.config=t.config,this.state=t.state}destroy(){}},ln=new V,oo=new yr(0,0,0,"ZXY"),Xb=class extends Cr{constructor(t){super(t)}fovToZoomLevel(t){const e=Math.round((t-this.config.minFov)/(this.config.maxFov-this.config.minFov)*100);return e-2*(e-50)}zoomLevelToFov(t){return this.config.maxFov+t/100*(this.config.minFov-this.config.maxFov)}vFovToHFov(t){return vt.radToDeg(2*Math.atan(Math.tan(vt.degToRad(t)/2)*this.state.aspect))}getAnimationProperties(t,e,n){const i=!mn(e),s=!mn(n),r={};let a=null;if(i){const o=this.viewer.getPosition(),l=Qf(o.yaw,e.yaw);r.yaw={start:o.yaw,end:o.yaw+l},r.pitch={start:o.pitch,end:e.pitch},a=wl(t,ep(o,e))}if(s){const o=this.viewer.getZoomLevel(),l=Math.abs(n-o);r.zoom={start:o,end:n},a===null&&(a=wl(t,Math.PI/4*l/100))}return a===null?typeof t=="number"?a=t:a=El:a=Math.max(El,a),{duration:a,properties:r}}textureCoordsToSphericalCoords(t){var n;if(!((n=this.state.textureData)!=null&&n.panoData))throw new je("Current adapter does not support texture coordinates or no texture has been loaded");const e=this.viewer.adapter.textureCoordsToSphericalCoords(t,this.state.textureData.panoData);return!oo.equals(this.viewer.renderer.panoramaPose)||!oo.equals(this.viewer.renderer.sphereCorrection)?(this.sphericalCoordsToVector3(e,ln),ln.applyEuler(this.viewer.renderer.panoramaPose),ln.applyEuler(this.viewer.renderer.sphereCorrection),this.vector3ToSphericalCoords(ln)):e}sphericalCoordsToTextureCoords(t){var e;if(!((e=this.state.textureData)!=null&&e.panoData))throw new je("Current adapter does not support texture coordinates or no texture has been loaded");return(!oo.equals(this.viewer.renderer.panoramaPose)||!oo.equals(this.viewer.renderer.sphereCorrection))&&(this.sphericalCoordsToVector3(t,ln),Tl(ln,this.viewer.renderer.sphereCorrection),Tl(ln,this.viewer.renderer.panoramaPose),t=this.vector3ToSphericalCoords(ln)),this.viewer.adapter.sphericalCoordsToTextureCoords(t,this.state.textureData.panoData)}sphericalCoordsToVector3(t,e,n=br){return e||(e=new V),e.x=n*-Math.cos(t.pitch)*Math.sin(t.yaw),e.y=n*Math.sin(t.pitch),e.z=n*Math.cos(t.pitch)*Math.cos(t.yaw),e}vector3ToSphericalCoords(t){const e=Math.acos(t.y/Math.sqrt(t.x*t.x+t.y*t.y+t.z*t.z)),n=Math.atan2(t.x,t.z);return{yaw:n<0?-n:Math.PI*2-n,pitch:Math.PI/2-e}}viewerCoordsToVector3(t){const e=this.viewer.renderer.getIntersections(t).filter(n=>n.object.userData[Mi]);return e.length?e[0].point:null}viewerCoordsToSphericalCoords(t){const e=this.viewerCoordsToVector3(t);return e?this.vector3ToSphericalCoords(e):null}vector3ToViewerCoords(t){const e=t.clone();return e.project(this.viewer.renderer.camera),{x:Math.round((e.x+1)/2*this.state.size.width),y:Math.round((1-e.y)/2*this.state.size.height)}}sphericalCoordsToViewerCoords(t){return this.sphericalCoordsToVector3(t,ln),this.vector3ToViewerCoords(ln)}isPointVisible(t){let e,n;if(t instanceof V)e=t,n=this.vector3ToViewerCoords(t);else if(vc(t))e=this.sphericalCoordsToVector3(t,ln),n=this.vector3ToViewerCoords(e);else return!1;return e.dot(this.viewer.state.direction)>0&&n.x>=0&&n.x<=this.viewer.state.size.width&&n.y>=0&&n.y<=this.viewer.state.size.height}cleanPosition(t){if("yaw"in t||"pitch"in t){if(!("yaw"in t)||!("pitch"in t))throw new je("Position is missing 'yaw' or 'pitch'");return{yaw:oi(t.yaw),pitch:oi(t.pitch,!this.state.littlePlanet)}}else return this.textureCoordsToSphericalCoords(t)}cleanSphereCorrection(t){return{pan:oi((t==null?void 0:t.pan)||0),tilt:oi((t==null?void 0:t.tilt)||0,!0),roll:oi((t==null?void 0:t.roll)||0,!0,!1)}}cleanPanoramaPose(t){return{pan:vt.degToRad((t==null?void 0:t.poseHeading)||0),tilt:vt.degToRad((t==null?void 0:t.posePitch)||0),roll:vt.degToRad((t==null?void 0:t.poseRoll)||0)}}},qb=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M33.38 33.2a1.96 1.96 0 0 0 1.5-3.23 10.61 10.61 0 0 1 7.18-17.51c.7-.06 1.31-.49 1.61-1.12a13.02 13.02 0 0 1 11.74-7.43c7.14 0 12.96 5.8 12.96 12.9 0 3.07-1.1 6.05-3.1 8.38-.7.82-.61 2.05.21 2.76.83.7 2.07.6 2.78-.22a16.77 16.77 0 0 0 4.04-10.91C72.3 7.54 64.72 0 55.4 0a16.98 16.98 0 0 0-14.79 8.7 14.6 14.6 0 0 0-12.23 14.36c0 3.46 1.25 6.82 3.5 9.45.4.45.94.69 1.5.69m45.74 43.55a22.13 22.13 0 0 1-5.23 12.4c-4 4.55-9.53 6.86-16.42 6.86-12.6 0-20.1-10.8-20.17-10.91a1.82 1.82 0 0 0-.08-.1c-5.3-6.83-14.55-23.82-17.27-28.87-.05-.1 0-.21.02-.23a6.3 6.3 0 0 1 8.24 1.85l9.38 12.59a1.97 1.97 0 0 0 3.54-1.17V25.34a4 4 0 0 1 1.19-2.87 3.32 3.32 0 0 1 2.4-.95c1.88.05 3.4 1.82 3.4 3.94v24.32a1.96 1.96 0 0 0 3.93 0v-33.1a3.5 3.5 0 0 1 7 0v35.39a1.96 1.96 0 0 0 3.93 0v-.44c.05-2.05 1.6-3.7 3.49-3.7 1.93 0 3.5 1.7 3.5 3.82v5.63c0 .24.04.48.13.71l.1.26a1.97 1.97 0 0 0 3.76-.37c.33-1.78 1.77-3.07 3.43-3.07 1.9 0 3.45 1.67 3.5 3.74l-1.77 18.1zM77.39 51c-1.25 0-2.45.32-3.5.9v-.15c0-4.27-3.33-7.74-7.42-7.74-1.26 0-2.45.33-3.5.9V16.69a7.42 7.42 0 0 0-14.85 0v1.86a7 7 0 0 0-3.28-.94 7.21 7.21 0 0 0-5.26 2.07 7.92 7.92 0 0 0-2.38 5.67v37.9l-5.83-7.82a10.2 10.2 0 0 0-13.35-2.92 4.1 4.1 0 0 0-1.53 5.48C20 64.52 28.74 80.45 34.07 87.34c.72 1.04 9.02 12.59 23.4 12.59 7.96 0 14.66-2.84 19.38-8.2a26.06 26.06 0 0 0 6.18-14.6l1.78-18.2v-.2c0-4.26-3.32-7.73-7.42-7.73z"/><!--Created by AomAm from the Noun Project--></svg>
`,Yb=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 17 79 79"><path fill="currentColor" d="M38.1 29.27c-.24 0-.44.2-.44.45v10.7a.45.45 0 00.9 0v-10.7c0-.25-.2-.45-.45-.45zm10.2 26.66a11.54 11.54 0 01-8.48-6.14.45.45 0 10-.8.41 12.45 12.45 0 009.22 6.62.45.45 0 00.07-.9zm24.55-13.08a23.04 23.04 0 00-22.56-23v7.07l-.01.05a2.83 2.83 0 012.39 2.78v14.03l.09-.02h8.84v-9.22a.45.45 0 11.9 0v9.22h10.35v-.9zm0 27.33V44.66H62.5c-.02 2.01-.52 4-1.47 5.76a.45.45 0 01-.61.18.45.45 0 01-.19-.61 11.54 11.54 0 001.36-5.33h-8.83l-.1-.01a2.83 2.83 0 01-2.83 2.84h-.04-.04a2.83 2.83 0 01-2.83-2.83v-14.9a2.82 2.82 0 012.47-2.8v-7.11a23.04 23.04 0 00-22.57 23v.91h14.72V29.88a8.2 8.2 0 015.02-7.57c.22-.1.5.01.59.24.1.23-.01.5-.24.6a7.3 7.3 0 00-4.47 6.73v13.88h3.9a.45.45 0 110 .9h-3.9v.15a7.32 7.32 0 0011.23 6.17.45.45 0 01.49.76 8.22 8.22 0 01-12.62-6.93v-.15H26.82v25.52a23.04 23.04 0 0023.01 23.01 23.04 23.04 0 0023.02-23.01zm1.8-27.33v27.33A24.85 24.85 0 0149.84 95a24.85 24.85 0 01-24.82-24.82V42.85a24.85 24.85 0 0124.82-24.82 24.85 24.85 0 0124.83 24.82zM57.98 29.88v9.36a.45.45 0 11-.9 0v-9.36a7.28 7.28 0 00-3.4-6.17.45.45 0 01.49-.76 8.18 8.18 0 013.8 6.93z"/><!-- Created by Icon Island from the Noun Project --></svg>
`,Lr=class jm{constructor(){this.$=jm.IDLE}is(...e){return e.some(n=>this.$&n)}set(e){this.$=e}add(e){this.$|=e}remove(e){this.$&=~e}};Lr.IDLE=0;Lr.CLICK=1;Lr.MOVING=2;Lr.INERTIA=4;var rt=Lr,jb=class extends Cr{constructor(t){super(t),this.data={startMouseX:0,startMouseY:0,mouseX:0,mouseY:0,mouseHistory:[],pinchDist:0,ctrlKeyDown:!1,dblclickData:null,dblclickTimeout:null,longtouchTimeout:null,twofingersTimeout:null,ctrlZoomTimeout:null},this.step=new rt,this.keyHandler=new ta,this.resizeObserver=new ResizeObserver(mc(()=>this.viewer.autoSize(),50)),this.moveThreshold=qf*St.pixelRatio}init(){window.addEventListener("keydown",this,{passive:!1}),window.addEventListener("keyup",this),this.viewer.container.addEventListener("mousedown",this),window.addEventListener("mousemove",this,{passive:!1}),window.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchstart",this,{passive:!1}),window.addEventListener("touchmove",this,{passive:!1}),window.addEventListener("touchend",this,{passive:!1}),this.viewer.container.addEventListener("wheel",this,{passive:!1}),document.addEventListener(St.fullscreenEvent,this),this.resizeObserver.observe(this.viewer.container)}destroy(){window.removeEventListener("keydown",this),window.removeEventListener("keyup",this),this.viewer.container.removeEventListener("mousedown",this),window.removeEventListener("mousemove",this),window.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchstart",this),window.removeEventListener("touchmove",this),window.removeEventListener("touchend",this),this.viewer.container.removeEventListener("wheel",this),document.removeEventListener(St.fullscreenEvent,this),this.resizeObserver.disconnect(),clearTimeout(this.data.dblclickTimeout),clearTimeout(this.data.longtouchTimeout),clearTimeout(this.data.twofingersTimeout),clearTimeout(this.data.ctrlZoomTimeout),super.destroy()}handleEvent(t){switch(t.type){case"keydown":this.__onKeyDown(t);break;case"keyup":this.__onKeyUp();break;case"mousemove":this.__onMouseMove(t);break;case"mouseup":this.__onMouseUp(t);break;case"touchmove":this.__onTouchMove(t);break;case"touchend":this.__onTouchEnd(t);break;case St.fullscreenEvent:this.__onFullscreenChange();break}if(!pc(t.target,"."+Tr))switch(t.type){case"mousedown":this.__onMouseDown(t);break;case"touchstart":this.__onTouchStart(t);break;case"wheel":this.__onMouseWheel(t);break}}__onKeyDown(t){var n;if(this.config.mousewheelCtrlKey&&(this.data.ctrlKeyDown=t.key===_t.Control,this.data.ctrlKeyDown&&(clearTimeout(this.data.ctrlZoomTimeout),this.viewer.overlay.hide(wt.CTRL_ZOOM))),!this.viewer.dispatchEvent(new mi(t.key))||!this.state.keyboardEnabled)return;const e=(n=this.config.keyboardActions)==null?void 0:n[t.key];if(typeof e=="function")e(this.viewer),t.preventDefault();else if(e&&!this.keyHandler.pending){switch(e!=="ZOOM_IN"&&e!=="ZOOM_OUT"&&this.viewer.stopAll(),e){case"ROTATE_UP":this.viewer.dynamics.position.roll({pitch:!1});break;case"ROTATE_DOWN":this.viewer.dynamics.position.roll({pitch:!0});break;case"ROTATE_RIGHT":this.viewer.dynamics.position.roll({yaw:!1});break;case"ROTATE_LEFT":this.viewer.dynamics.position.roll({yaw:!0});break;case"ZOOM_IN":this.viewer.dynamics.zoom.roll(!1);break;case"ZOOM_OUT":this.viewer.dynamics.zoom.roll(!0);break}this.keyHandler.down(),t.preventDefault()}}__onKeyUp(){this.data.ctrlKeyDown=!1,this.state.keyboardEnabled&&this.keyHandler.up(()=>{this.viewer.dynamics.position.stop(),this.viewer.dynamics.zoom.stop(),this.viewer.resetIdleTimer()})}__onMouseDown(t){this.step.add(rt.CLICK),this.data.startMouseX=t.clientX,this.data.startMouseY=t.clientY}__onMouseUp(t){this.step.is(rt.CLICK,rt.MOVING)&&this.__stopMove(t.clientX,t.clientY,t.target,t.button===2)}__onMouseMove(t){this.config.mousemove&&this.step.is(rt.CLICK,rt.MOVING)&&(t.preventDefault(),this.__doMove(t.clientX,t.clientY)),this.__handleObjectsEvents(t)}__onTouchStart(t){t.touches.length===1?(this.step.add(rt.CLICK),this.data.startMouseX=t.touches[0].clientX,this.data.startMouseY=t.touches[0].clientY,this.data.longtouchTimeout||(this.data.longtouchTimeout=setTimeout(()=>{const e=t.touches[0];this.__stopMove(e.clientX,e.clientY,e.target,!0),this.data.longtouchTimeout=null},jf))):t.touches.length===2&&(this.step.set(rt.IDLE),this.__cancelLongTouch(),this.config.mousemove&&(this.__cancelTwoFingersOverlay(),this.__startMoveZoom(t),t.preventDefault()))}__onTouchEnd(t){if(this.__cancelLongTouch(),this.step.is(rt.CLICK,rt.MOVING)){if(t.preventDefault(),this.__cancelTwoFingersOverlay(),t.touches.length===1)this.__stopMove(this.data.mouseX,this.data.mouseY);else if(t.touches.length===0){const e=t.changedTouches[0];this.__stopMove(e.clientX,e.clientY,e.target)}}}__onTouchMove(t){if(this.__cancelLongTouch(),!!this.config.mousemove)if(t.touches.length===1){if(this.config.touchmoveTwoFingers)this.step.is(rt.CLICK)&&!this.data.twofingersTimeout&&(this.data.twofingersTimeout=setTimeout(()=>{this.viewer.overlay.show({id:wt.TWO_FINGERS,image:qb,title:this.config.lang.twoFingers})},$f));else if(this.step.is(rt.CLICK,rt.MOVING)){t.preventDefault();const e=t.touches[0];this.__doMove(e.clientX,e.clientY)}}else this.__doMoveZoom(t),this.__cancelTwoFingersOverlay()}__cancelLongTouch(){this.data.longtouchTimeout&&(clearTimeout(this.data.longtouchTimeout),this.data.longtouchTimeout=null)}__cancelTwoFingersOverlay(){this.config.touchmoveTwoFingers&&(this.data.twofingersTimeout&&(clearTimeout(this.data.twofingersTimeout),this.data.twofingersTimeout=null),this.viewer.overlay.hide(wt.TWO_FINGERS))}__onMouseWheel(t){if(!this.config.mousewheel||!t.deltaY)return;if(this.config.mousewheelCtrlKey&&!this.data.ctrlKeyDown){this.viewer.overlay.show({id:wt.CTRL_ZOOM,image:Yb,title:this.config.lang.ctrlZoom}),clearTimeout(this.data.ctrlZoomTimeout),this.data.ctrlZoomTimeout=setTimeout(()=>this.viewer.overlay.hide(wt.CTRL_ZOOM),Kf);return}t.preventDefault(),t.stopPropagation();const e=t.deltaY/Math.abs(t.deltaY)*5*this.config.zoomSpeed;e!==0&&this.viewer.dynamics.zoom.step(-e,5)}__onFullscreenChange(){const t=this.viewer.isFullscreenEnabled();this.config.keyboard==="fullscreen"&&(t?this.viewer.startKeyboardControl():this.viewer.stopKeyboardControl()),this.viewer.dispatchEvent(new ir(t))}__resetMove(){this.step.set(rt.IDLE),this.data.mouseX=0,this.data.mouseY=0,this.data.startMouseX=0,this.data.startMouseY=0,this.data.mouseHistory.length=0}__startMoveZoom(t){this.viewer.stopAll(),this.__resetMove();const e=Sl(t);this.step.set(rt.MOVING),{distance:this.data.pinchDist,center:{x:this.data.mouseX,y:this.data.mouseY}}=e,this.__logMouseMove(this.data.mouseX,this.data.mouseY)}__stopMove(t,e,n,i=!1){this.step.is(rt.MOVING)?this.config.moveInertia?(this.__logMouseMove(t,e),this.__stopMoveInertia(t,e)):(this.__resetMove(),this.viewer.resetIdleTimer()):(this.step.is(rt.CLICK)&&!this.__moveThresholdReached(t,e)&&this.__doClick(t,e,n,i),this.step.remove(rt.CLICK),this.step.is(rt.INERTIA)||(this.__resetMove(),this.viewer.resetIdleTimer()))}__stopMoveInertia(t,e){const i=new Qw(this.data.mouseHistory.map(([,o,l])=>new Xe(o,l))).getTangent(1),s=this.data.mouseHistory.reduce(({total:o,prev:l},c)=>({total:l?o+dc({x:l[1],y:l[2]},{x:c[1],y:c[2]})/(c[0]-l[0]):0,prev:c}),{total:0,prev:null}).total/this.data.mouseHistory.length;if(!s){this.__resetMove(),this.viewer.resetIdleTimer();return}this.step.set(rt.INERTIA);let r=t,a=e;this.state.animation=new xr({properties:{speed:{start:s,end:0}},duration:1e3,easing:"outQuad",onTick:o=>{r+=o.speed*i.x*3*St.pixelRatio,a+=o.speed*i.y*3*St.pixelRatio,this.__applyMove(r,a)}}),this.state.animation.then(o=>{this.state.animation=null,o&&(this.__resetMove(),this.viewer.resetIdleTimer())})}__doClick(t,e,n,i=!1){const s=this.viewer.container.getBoundingClientRect(),r=t-s.left,a=e-s.top,o=this.viewer.renderer.getIntersections({x:r,y:a}),l=o.find(c=>c.object.userData[Mi]);if(l){const c=this.viewer.dataHelper.vector3ToSphericalCoords(l.point),h={rightclick:i,target:n,clientX:t,clientY:e,viewerX:r,viewerY:a,yaw:c.yaw,pitch:c.pitch,objects:o.map(u=>u.object).filter(u=>!u.userData[Mi])};try{const u=this.viewer.dataHelper.sphericalCoordsToTextureCoords(h);Object.assign(h,u)}catch{}this.data.dblclickTimeout?(Math.abs(this.data.dblclickData.clientX-h.clientX)<this.moveThreshold&&Math.abs(this.data.dblclickData.clientY-h.clientY)<this.moveThreshold&&this.viewer.dispatchEvent(new Dp(this.data.dblclickData)),clearTimeout(this.data.dblclickTimeout),this.data.dblclickTimeout=null,this.data.dblclickData=null):(this.viewer.dispatchEvent(new Cp(h)),this.data.dblclickData=vr(h),this.data.dblclickTimeout=setTimeout(()=>{this.data.dblclickTimeout=null,this.data.dblclickData=null},Yf))}}__handleObjectsEvents(t){if(!lp(this.state.objectsObservers)&&np(t.target,this.viewer.container)){const e=ip(this.viewer.container),n={x:t.clientX-e.x,y:t.clientY-e.y},i=this.viewer.renderer.getIntersections(n),s=(r,a,o)=>{this.viewer.dispatchEvent(new o(t,r,n,a))};for(const[r,a]of Object.entries(this.state.objectsObservers)){const o=i.find(l=>l.object.userData[r]);o?(a&&o.object!==a&&(s(a,r,Rl),this.state.objectsObservers[r]=null),a?s(o.object,r,Fm):(this.state.objectsObservers[r]=o.object,s(o.object,r,Im))):a&&(s(a,r,Rl),this.state.objectsObservers[r]=null)}}}__doMove(t,e){this.step.is(rt.CLICK)&&this.__moveThresholdReached(t,e)?(this.viewer.stopAll(),this.__resetMove(),this.step.set(rt.MOVING),this.data.mouseX=t,this.data.mouseY=e,this.__logMouseMove(t,e)):this.step.is(rt.MOVING)&&(this.__applyMove(t,e),this.__logMouseMove(t,e))}__moveThresholdReached(t,e){return Math.abs(t-this.data.startMouseX)>=this.moveThreshold||Math.abs(e-this.data.startMouseY)>=this.moveThreshold}__applyMove(t,e){const n={yaw:this.config.moveSpeed*((t-this.data.mouseX)/this.state.size.width)*vt.degToRad(this.state.littlePlanet?90:this.state.hFov),pitch:this.config.moveSpeed*((e-this.data.mouseY)/this.state.size.height)*vt.degToRad(this.state.littlePlanet?90:this.state.vFov)},i=this.viewer.getPosition();this.viewer.rotate({yaw:i.yaw-n.yaw,pitch:i.pitch+n.pitch}),this.data.mouseX=t,this.data.mouseY=e}__doMoveZoom(t){if(this.step.is(rt.MOVING)){t.preventDefault();const e=Sl(t),n=(e.distance-this.data.pinchDist)/St.pixelRatio*this.config.zoomSpeed;this.viewer.zoom(this.viewer.getZoomLevel()+n),this.__doMove(e.center.x,e.center.y),this.data.pinchDist=e.distance}}__logMouseMove(t,e){const n=Date.now(),i=this.data.mouseHistory.length?this.data.mouseHistory[this.data.mouseHistory.length-1]:[0,-1,-1];i[1]===t&&i[2]===e?i[0]=n:n===i[0]?(i[1]=t,i[2]=e):this.data.mouseHistory.push([n,t,e]);let s=null;for(let r=0;r<this.data.mouseHistory.length;)this.data.mouseHistory[r][0]<n-Ml?this.data.mouseHistory.splice(r,1):s&&this.data.mouseHistory[r][0]-s>Ml/10?(this.data.mouseHistory.splice(0,r),r=0,s=this.data.mouseHistory[r][0]):(s=this.data.mouseHistory[r][0],r++)}};Ze.enabled=!1;var ao=new Xe,td=new dt,nd=new Ns,$b=class extends Cr{constructor(t){super(t),this.frustumNeedsUpdate=!0,this.renderer=new Wf(this.config.rendererParameters),this.renderer.setPixelRatio(St.pixelRatio),this.renderer.outputColorSpace=Ln,this.renderer.domElement.className="psv-canvas",this.scene=new qu,this.camera=new tn(50,16/9,.1,2*br),this.camera.matrixWorldAutoUpdate=!1,this.mesh=this.viewer.adapter.createMesh(),this.mesh.userData={[Mi]:!0},this.meshContainer=new ds,this.meshContainer.add(this.mesh),this.scene.add(this.meshContainer),this.raycaster=new nb,this.frustum=new ac,this.container=document.createElement("div"),this.container.className="psv-canvas-container",this.container.appendChild(this.renderer.domElement),this.viewer.container.appendChild(this.container),this.viewer.addEventListener(lr.type,this),this.viewer.addEventListener(qn.type,this),this.viewer.addEventListener(rr.type,this),this.viewer.addEventListener(kt.type,this),this.hide()}get panoramaPose(){return this.mesh.rotation}get sphereCorrection(){return this.meshContainer.rotation}init(){this.show(),this.renderer.setAnimationLoop(t=>this.__renderLoop(t))}destroy(){this.renderer.setAnimationLoop(null),this.cleanScene(this.scene),this.viewer.container.removeChild(this.container),this.viewer.removeEventListener(lr.type,this),this.viewer.removeEventListener(qn.type,this),this.viewer.removeEventListener(rr.type,this),this.viewer.removeEventListener(kt.type,this),super.destroy()}handleEvent(t){switch(t.type){case lr.type:this.__onSizeUpdated();break;case qn.type:this.__onZoomUpdated();break;case rr.type:this.__onPositionUpdated();break;case kt.type:t.containsOptions("fisheye")&&this.__onPositionUpdated();break}}hide(){this.container.style.opacity="0"}show(){this.container.style.opacity="1"}setCustomRenderer(t){t?this.customRenderer=t(this.renderer):this.customRenderer=null,this.viewer.needsUpdate()}__onSizeUpdated(){this.renderer.setSize(this.state.size.width,this.state.size.height),this.camera.aspect=this.state.aspect,this.camera.updateProjectionMatrix(),this.viewer.needsUpdate(),this.frustumNeedsUpdate=!0}__onZoomUpdated(){this.camera.fov=this.state.vFov,this.camera.updateProjectionMatrix(),this.viewer.needsUpdate(),this.frustumNeedsUpdate=!0}__onPositionUpdated(){this.camera.position.set(0,0,0),this.camera.lookAt(this.state.direction),this.config.fisheye&&this.camera.position.copy(this.state.direction).multiplyScalar(this.config.fisheye/2).negate(),this.camera.updateMatrixWorld(),this.viewer.needsUpdate(),this.frustumNeedsUpdate=!0}__renderLoop(t){const e=this.timestamp?t-this.timestamp:0;this.timestamp=t,this.viewer.dispatchEvent(new yp(t,e)),this.viewer.dynamics.update(e),(this.state.needsUpdate||this.state.continuousUpdateCount>0)&&(this.state.needsUpdate=!1,(this.customRenderer||this.renderer).render(this.scene,this.camera),this.viewer.dispatchEvent(new dm))}setTexture(t){this.state.textureData&&this.viewer.adapter.disposeTexture(this.state.textureData),this.state.textureData=t,this.viewer.adapter.setTexture(this.mesh,t),this.viewer.needsUpdate()}setPanoramaPose(t,e=this.mesh){const n=this.viewer.dataHelper.cleanPanoramaPose(t);e.rotation.set(-n.tilt,-n.pan,-n.roll,"ZXY")}setSphereCorrection(t,e=this.meshContainer){const n=this.viewer.dataHelper.cleanSphereCorrection(t);e.rotation.set(n.tilt,n.pan,n.roll,"ZXY")}transition(t,e){const n=!mn(e.position),i=!mn(e.zoom),s=new Mc(n?this.viewer.dataHelper.cleanPosition(e.position):void 0,e.zoom);this.viewer.dispatchEvent(s);const r=new ds,a=this.viewer.adapter.createMesh(.5);if(this.viewer.adapter.setTexture(a,t,!0),this.viewer.adapter.setTextureOpacity(a,0),this.setPanoramaPose(t.panoData,a),this.setSphereCorrection(e.sphereCorrection,r),n&&e.transition==="fade-only"){const h=this.viewer.getPosition(),u=new V(0,1,0);r.rotateOnWorldAxis(u,s.position.yaw-h.yaw);const d=new V(0,1,0).cross(this.camera.getWorldDirection(new V)).normalize();r.rotateOnWorldAxis(d,s.position.pitch-h.pitch)}r.add(a),this.scene.add(r),this.renderer.setRenderTarget(new xi),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null);const{duration:o,properties:l}=this.viewer.dataHelper.getAnimationProperties(e.speed,e.transition===!0?s.position:null,s.zoomLevel),c=new xr({properties:{...l,opacity:{start:0,end:1}},duration:o,easing:"inOutCubic",onTick:h=>{this.viewer.adapter.setTextureOpacity(a,h.opacity),n&&e.transition===!0&&this.viewer.dynamics.position.setValue({yaw:h.yaw,pitch:h.pitch}),i&&this.viewer.dynamics.zoom.setValue(h.zoom),this.viewer.needsUpdate()}});return c.then(h=>{h?(this.setTexture(t),this.viewer.adapter.setTextureOpacity(this.mesh,1),this.setPanoramaPose(t.panoData),this.setSphereCorrection(e.sphereCorrection),n&&e.transition==="fade-only"&&this.viewer.rotate(e.position)):this.viewer.adapter.disposeTexture(t),this.scene.remove(r),a.geometry.dispose(),a.geometry=null}),c}getIntersections(t){var n;ao.x=2*t.x/this.state.size.width-1,ao.y=-2*t.y/this.state.size.height+1,this.raycaster.setFromCamera(ao,this.camera);const e=this.raycaster.intersectObjects(this.scene.children,!0).filter(i=>i.object.visible).filter(i=>i.object.isMesh&&!!i.object.userData);return(n=this.customRenderer)!=null&&n.getIntersections&&e.push(...this.customRenderer.getIntersections(this.raycaster,ao)),e}isObjectVisible(t){if(!t)return!1;if(this.frustumNeedsUpdate&&(td.multiplyMatrices(this.camera.projectionMatrix,this.camera.matrixWorldInverse),this.frustum.setFromProjectionMatrix(td),this.frustumNeedsUpdate=!1),t.isVector3)return this.frustum.containsPoint(t);if(t.isMesh&&t.geometry){const e=t;return e.geometry.boundingBox||e.geometry.computeBoundingBox(),nd.copy(e.geometry.boundingBox).applyMatrix4(e.matrixWorld),this.frustum.intersectsBox(nd)}else return t.isObject3D?this.frustum.intersectsObject(t):!1}addObject(t){this.scene.add(t)}removeObject(t){this.scene.remove(t)}cleanScene(t){const e=n=>{var i;(i=n.map)==null||i.dispose(),n.uniforms&&Object.values(n.uniforms).forEach(s=>{var r,a;(a=(r=s.value)==null?void 0:r.dispose)==null||a.call(r)}),n.dispose()};t.traverse(n=>{var i,s;(i=n.geometry)==null||i.dispose(),n.material&&(Array.isArray(n.material)?n.material.forEach(r=>{e(r)}):e(n.material)),n instanceof qu||(s=n.dispose)==null||s.call(n),n!==t&&this.cleanScene(n)})}},Kb=class extends hc{load(t,e,n,i,s){const r=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"});fetch(r,{signal:s}).then(a=>{if(a.status===200||a.status===0){const o=a.body.getReader(),l=a.headers.get("Content-Length")||a.headers.get("X-File-Size"),c=l?parseInt(l):0,h=c!==0;let u=0;const d=new ReadableStream({start(p){_();function _(){o.read().then(({done:v,value:m})=>{if(v)p.close();else{u+=m.byteLength;const f=new ProgressEvent("progress",{lengthComputable:h,loaded:u,total:c});n(f),p.enqueue(m),_()}}).catch(v=>{i(v)})}}});return new Response(d)}else throw new Error(`fetch for "${a.url}" responded with ${a.status}: ${a.statusText}`)}).then(a=>a.blob()).then(a=>{e(a)}).catch(a=>{i(a)})}},Zb=class extends hc{load(t,e,n,i){const s=document.createElement("img");function r(){l(),e(this)}function a(c){if(l(),i!=null&&i.aborted){const h=new Error;h.name="AbortError",h.message="The operation was aborted.",n(h)}else n(c)}function o(){s.src=""}function l(){s.removeEventListener("load",r,!1),s.removeEventListener("error",a,!1),i==null||i.removeEventListener("abort",o,!1)}return s.addEventListener("load",r,!1),s.addEventListener("error",a,!1),i==null||i.addEventListener("abort",o,!1),!t.startsWith("data:")&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),s.src=t,s}},Jb=class extends Cr{constructor(t){super(t),this.abortCtrl={},this.fileLoader=new Kb,this.imageLoader=new Zb,this.config.withCredentials&&(this.fileLoader.setWithCredentials(!0),this.imageLoader.setCrossOrigin("use-credentials"))}destroy(){this.abortLoading(),super.destroy()}abortLoading(){Object.values(this.abortCtrl).forEach(t=>t.abort()),this.abortCtrl={}}loadFile(t,e,n){const i=ls.get(t,n);if(i){if(i instanceof Blob)return e==null||e(100),Promise.resolve(i);ls.remove(t,n)}return this.config.requestHeaders&&this.fileLoader.setRequestHeader(this.config.requestHeaders(t)),new Promise((s,r)=>{let a=0;e==null||e(a),this.fileLoader.load(t,o=>{a=100,e==null||e(a),ls.add(t,n,o),s(o)},o=>{if(o.lengthComputable){const l=o.loaded/o.total*100;l>a&&(a=l,e==null||e(a))}},o=>{r(o)},this.__getAbortSignal(n))})}loadImage(t,e,n){const i=ls.get(t,n);return i?(e==null||e(100),i instanceof Blob?this.blobToImage(i):Promise.resolve(i)):!e&&!this.config.requestHeaders?new Promise((s,r)=>{this.imageLoader.load(t,a=>{ls.add(t,n,a),s(a)},a=>{r(a)},this.__getAbortSignal(n))}):this.loadFile(t,e,n).then(s=>this.blobToImage(s))}blobToImage(t){return new Promise((e,n)=>{const i=document.createElement("img");i.onload=()=>{URL.revokeObjectURL(i.src),e(i)},i.onerror=n,i.src=URL.createObjectURL(t)})}preloadPanorama(t){return this.viewer.adapter.supportsPreload(t)?this.viewer.adapter.loadTexture(t,!1):Promise.reject(new je("Current adapter does not support preload"))}__getAbortSignal(t){var e;return t?((e=this.abortCtrl[t])!=null&&e.signal.aborted&&delete this.abortCtrl[t],this.abortCtrl[t]||(this.abortCtrl[t]=new AbortController),this.abortCtrl[t].signal):null}},Qb=class extends Cr{constructor(t){super(t),this.zoom=new _o(e=>{this.viewer.state.vFov=this.viewer.dataHelper.zoomLevelToFov(e),this.viewer.state.hFov=this.viewer.dataHelper.vFovToHFov(this.viewer.state.vFov),this.viewer.dispatchEvent(new qn(e))},{defaultValue:this.viewer.config.defaultZoomLvl,min:0,max:100,wrap:!1}),this.position=new mp(e=>{this.viewer.dataHelper.sphericalCoordsToVector3(e,this.viewer.state.direction),this.viewer.dispatchEvent(new rr(e))},{yaw:new _o(null,{defaultValue:this.config.defaultYaw,min:0,max:2*Math.PI,wrap:!0}),pitch:new _o(null,{defaultValue:this.config.defaultPitch,min:this.viewer.state.littlePlanet?0:-Math.PI/2,max:this.viewer.state.littlePlanet?Math.PI*2:Math.PI/2,wrap:this.viewer.state.littlePlanet})}),this.updateSpeeds()}updateSpeeds(){this.zoom.setSpeed(this.config.zoomSpeed*50),this.position.setSpeed(vt.degToRad(this.config.moveSpeed*50))}update(t){this.zoom.update(t),this.position.update(t)}},eT=class{constructor(){this.ready=!1,this.needsUpdate=!1,this.continuousUpdateCount=0,this.keyboardEnabled=!1,this.direction=new V(0,0,br),this.vFov=60,this.hFov=60,this.aspect=1,this.animation=null,this.transitionAnimation=null,this.loadingPromise=null,this.littlePlanet=!1,this.idleTime=-1,this.objectsObservers={},this.size={width:0,height:0}}},tT=class extends vp{constructor(t){var e,n,i;super(),this.plugins={},this.children=[],this.onResize=mc(()=>this.navbar.autoSize(),500),ls.init(),St.load(),this.state=new eT,this.config=Nb(t),this.parent=tp(t.container),this.parent[Mi]=this,this.container=document.createElement("div"),this.container.classList.add("psv-container"),this.parent.appendChild(this.container),pp(this.container,"core"),this.adapter=new this.config.adapter[0](this,this.config.adapter[1]),this.renderer=new $b(this),this.textureLoader=new Jb(this),this.eventsHandler=new jb(this),this.dataHelper=new Xb(this),this.dynamics=new Qb(this),(n=(e=this.adapter).init)==null||n.call(e),this.loader=new Bb(this),this.navbar=new Fb(this),this.panel=new kb(this),this.notification=new zb(this),this.overlay=new Hb(this),this.resize(this.config.size),this.setCursor(null),_c(St.isTouchEnabled,s=>{Jo(this.container,"psv--is-touch",s)}),this.config.plugins.forEach(([s,r])=>{this.plugins[s.id]=new s(this,r)});for(const s of Object.values(this.plugins))(i=s.init)==null||i.call(s);this.config.navbar&&this.navbar.setButtons(this.config.navbar),this.state.loadingPromise||(this.config.panorama?this.setPanorama(this.config.panorama):this.loader.show())}destroy(){this.stopAll(),this.stopKeyboardControl(),this.exitFullscreen();for(const[t,e]of Object.entries(this.plugins))e.destroy(),delete this.plugins[t];this.children.slice().forEach(t=>t.destroy()),this.children.length=0,this.eventsHandler.destroy(),this.renderer.destroy(),this.textureLoader.destroy(),this.dataHelper.destroy(),this.adapter.destroy(),this.dynamics.destroy(),this.parent.removeChild(this.container),delete this.parent[Mi]}init(){this.eventsHandler.init(),this.renderer.init(),this.config.navbar&&this.navbar.show(),this.config.keyboard==="always"&&this.startKeyboardControl(),this.resetIdleTimer(),this.state.ready=!0,this.dispatchEvent(new or)}resetIdleTimer(){this.state.idleTime=performance.now()}disableIdleTimer(){this.state.idleTime=-1}getPlugin(t){if(typeof t=="string")return this.plugins[t];{const e=Cl(t);return e?this.plugins[e.id]:null}}getPosition(){return this.dataHelper.cleanPosition(this.dynamics.position.current)}getZoomLevel(){return this.dynamics.zoom.current}getSize(){return{...this.state.size}}isFullscreenEnabled(){return sp(this.parent)}needsUpdate(){this.state.needsUpdate=!0}needsContinuousUpdate(t){t?this.state.continuousUpdateCount++:this.state.continuousUpdateCount>0&&this.state.continuousUpdateCount--}autoSize(){(this.container.clientWidth!==this.state.size.width||this.container.clientHeight!==this.state.size.height)&&(this.state.size.width=Math.round(this.container.clientWidth),this.state.size.height=Math.round(this.container.clientHeight),this.state.aspect=this.state.size.width/this.state.size.height,this.state.hFov=this.dataHelper.vFovToHFov(this.state.vFov),this.dispatchEvent(new lr(this.getSize())),this.onResize())}setPanorama(t,e={}){var a;this.textureLoader.abortLoading(),(a=this.state.transitionAnimation)==null||a.cancel(),this.state.ready||["sphereCorrection","panoData"].forEach(o=>{o in e||(e[o]=this.config[o])}),e.transition===void 0&&(e.transition=!0),e.speed===void 0&&(e.speed=Xf),e.showLoader===void 0&&(e.showLoader=!0),e.caption===void 0&&(e.caption=this.config.caption),e.description===void 0&&(e.description=this.config.description),!e.panoData&&typeof this.config.panoData=="function"&&(e.panoData=this.config.panoData);const n=!mn(e.position),i=!mn(e.zoom);(n||i)&&this.stopAll(),this.hideError(),this.resetIdleTimer(),this.config.panorama=t,this.config.caption=e.caption,this.config.description=e.description;const s=o=>{if(up(o))return!1;if(this.loader.hide(),this.state.loadingPromise=null,o)throw this.navbar.setCaption(""),this.showError(this.config.lang.loadError),console.error(o),this.dispatchEvent(new rm(t,o)),o;return this.navbar.setCaption(this.config.caption),!0};this.navbar.setCaption(`<em>${this.config.lang.loading}</em>`),(e.showLoader||!this.state.ready)&&this.loader.show(),this.dispatchEvent(new em(t));const r=this.adapter.loadTexture(this.config.panorama,!0,e.panoData).then(o=>{if(o.panorama!==this.config.panorama)throw this.adapter.disposeTexture(o),yl();return o});return!e.transition||!this.state.ready||!this.adapter.supportsTransition(this.config.panorama)?this.state.loadingPromise=r.then(o=>{this.renderer.show(),this.renderer.setTexture(o),this.renderer.setPanoramaPose(o.panoData),this.renderer.setSphereCorrection(e.sphereCorrection),this.state.ready||this.init(),this.dispatchEvent(new Al(o)),i&&this.zoom(e.zoom),n&&this.rotate(e.position)}).then(()=>s(),o=>s(o)):this.state.loadingPromise=r.then(o=>(this.loader.hide(),this.dispatchEvent(new Al(o)),this.state.transitionAnimation=this.renderer.transition(o,e),this.state.transitionAnimation)).then(o=>{if(this.state.transitionAnimation=null,!o)throw yl()}).then(()=>s(),o=>s(o)),this.state.loadingPromise}setOptions(t){const e={...this.config,...t};for(let[n,i]of Object.entries(t)){if(!(n in Ls)){xt(`Unknown option ${n}`);continue}if(n in ed){xt(ed[n]);continue}switch(n in Ll&&(i=Ll[n](i,{rawConfig:e,defValue:Ls[n]})),this.config[n]=i,n){case"mousemove":this.state.cursorOverride||this.setCursor(null);break;case"caption":this.navbar.setCaption(this.config.caption);break;case"size":this.resize(this.config.size);break;case"sphereCorrection":this.renderer.setSphereCorrection(this.config.sphereCorrection);break;case"navbar":case"lang":this.navbar.setButtons(this.config.navbar);break;case"moveSpeed":case"zoomSpeed":this.dynamics.updateSpeeds();break;case"minFov":case"maxFov":this.dynamics.zoom.setValue(this.dataHelper.fovToZoomLevel(this.state.vFov)),this.dispatchEvent(new qn(this.getZoomLevel()));break;case"keyboard":this.config.keyboard==="always"?this.startKeyboardControl():this.stopKeyboardControl();break}}this.needsUpdate(),this.dispatchEvent(new kt(Object.keys(t)))}setOption(t,e){this.setOptions({[t]:e})}showError(t){this.overlay.show({id:wt.ERROR,image:Wb,title:t,dissmisable:!1})}hideError(){this.overlay.hide(wt.ERROR)}rotate(t){const e=new Tp(this.dataHelper.cleanPosition(t));this.dispatchEvent(e),!e.defaultPrevented&&this.dynamics.position.setValue(e.position)}zoom(t){this.dynamics.zoom.setValue(t)}zoomIn(t=1){this.dynamics.zoom.step(t)}zoomOut(t=1){this.dynamics.zoom.step(-t)}animate(t){const e=vc(t),n=!mn(t.zoom),i=new Mc(e?this.dataHelper.cleanPosition(t):void 0,t.zoom);if(this.dispatchEvent(i),i.defaultPrevented)return;this.stopAll();const{duration:s,properties:r}=this.dataHelper.getAnimationProperties(t.speed,i.position,i.zoomLevel);return s?(this.state.animation=new xr({properties:r,duration:s,easing:t.easing||"inOutSine",onTick:a=>{e&&this.dynamics.position.setValue({yaw:a.yaw,pitch:a.pitch}),n&&this.dynamics.zoom.setValue(a.zoom)}}),this.state.animation.then(()=>{this.state.animation=null,this.resetIdleTimer()}),this.state.animation):(e&&this.rotate(i.position),n&&this.zoom(i.zoomLevel),new xr(null))}stopAnimation(){return this.state.animation?(this.state.animation.cancel(),this.state.animation):Promise.resolve()}resize(t){const e=t;["width","height"].forEach(n=>{t&&e[n]&&(/^[0-9.]+$/.test(e[n])&&(e[n]+="px"),this.parent.style[n]=e[n])}),this.autoSize()}enterFullscreen(){this.isFullscreenEnabled()||rp(this.parent)}exitFullscreen(){this.isFullscreenEnabled()&&op()}toggleFullscreen(){this.isFullscreenEnabled()?this.exitFullscreen():this.enterFullscreen()}startKeyboardControl(){this.state.keyboardEnabled=!0}stopKeyboardControl(){this.state.keyboardEnabled=!1}createTooltip(t){return new Gb(this,t)}setCursor(t){this.state.cursorOverride=t,t?this.container.style.cursor=t:this.container.style.cursor=this.config.mousemove?"move":"default"}observeObjects(t){this.state.objectsObservers[t]||(this.state.objectsObservers[t]=null)}unobserveObjects(t){delete this.state.objectsObservers[t]}stopAll(){return this.dispatchEvent(new Am),this.disableIdleTimer(),this.stopAnimation()}};const nT={id:"viewer",style:{width:"100vw",height:"100vh"}},iT=Mr({__name:"PanoramaVeiwer",setup(t){return Bd(()=>{new tT({container:document.querySelector("#viewer"),adapter:[Ar,{interpolateBackground:!0}],panorama:"pano3.jpg"})}),(e,n)=>($l(),Kd("div",nT))}}),$m=Mr({__name:"HomeView",setup(t){return(e,n)=>($l(),Kd("main",null,[jt(iT)]))}}),sT=Mr({__name:"App",setup(t){return(e,n)=>($l(),F_($m))}}),rT=R0(sT,[["__scopeId","data-v-c2e7d6a7"]]),oT="modulepreload",aT=function(t){return"/"+t},id={},lT=function(e,n,i){let s=Promise.resolve();if(n&&n.length>0){const r=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),o=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=Promise.all(n.map(l=>{if(l=aT(l),l in id)return;id[l]=!0;const c=l.endsWith(".css"),h=c?'[rel="stylesheet"]':"";if(!!i)for(let p=r.length-1;p>=0;p--){const _=r[p];if(_.href===l&&(!c||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${h}`))return;const d=document.createElement("link");if(d.rel=c?"stylesheet":oT,c||(d.as="script",d.crossOrigin=""),d.href=l,o&&d.setAttribute("nonce",o),document.head.appendChild(d),c)return new Promise((p,_)=>{d.addEventListener("load",p),d.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${l}`)))})}))}return s.then(()=>e()).catch(r=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=r,window.dispatchEvent(a),!a.defaultPrevented)throw r})},cT=T0({history:t0("/"),routes:[{path:"/",name:"home",component:$m},{path:"/about",name:"about",component:()=>lT(()=>import("./AboutView-DQEAxb3S.js"),__vite__mapDeps([0,1]))}]}),Km=Mv(rT);Km.use(cT);Km.mount("#app");export{R0 as _,Jd as a,Kd as c,$l as o};
