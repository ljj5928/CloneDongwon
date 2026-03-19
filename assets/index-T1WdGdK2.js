(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(r){if(r.ep)return;r.ep=!0;const l=t(r);fetch(r.href,l)}})();function T3(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Rg={exports:{}},Cc={};var X1;function A3(){if(X1)return Cc;X1=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(i,r,l){var c=null;if(l!==void 0&&(c=""+l),r.key!==void 0&&(c=""+r.key),"key"in r){l={};for(var f in r)f!=="key"&&(l[f]=r[f])}else l=r;return r=l.ref,{$$typeof:s,type:i,key:c,ref:r!==void 0?r:null,props:l}}return Cc.Fragment=e,Cc.jsx=t,Cc.jsxs=t,Cc}var W1;function C3(){return W1||(W1=1,Rg.exports=A3()),Rg.exports}var V=C3(),wg={exports:{}},Mt={};var j1;function R3(){if(j1)return Mt;j1=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),v=Symbol.iterator;function x(I){return I===null||typeof I!="object"?null:(I=v&&I[v]||I["@@iterator"],typeof I=="function"?I:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,y={};function S(I,W,le){this.props=I,this.context=W,this.refs=y,this.updater=le||b}S.prototype.isReactComponent={},S.prototype.setState=function(I,W){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,W,"setState")},S.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function A(){}A.prototype=S.prototype;function N(I,W,le){this.props=I,this.context=W,this.refs=y,this.updater=le||b}var R=N.prototype=new A;R.constructor=N,M(R,S.prototype),R.isPureReactComponent=!0;var L=Array.isArray;function P(){}var D={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function w(I,W,le){var ye=le.ref;return{$$typeof:s,type:I,key:W,ref:ye!==void 0?ye:null,props:le}}function q(I,W){return w(I.type,W,I.props)}function H(I){return typeof I=="object"&&I!==null&&I.$$typeof===s}function k(I){var W={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(le){return W[le]})}var J=/\/+/g;function ee(I,W){return typeof I=="object"&&I!==null&&I.key!=null?k(""+I.key):W.toString(36)}function $(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(P,P):(I.status="pending",I.then(function(W){I.status==="pending"&&(I.status="fulfilled",I.value=W)},function(W){I.status==="pending"&&(I.status="rejected",I.reason=W)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function F(I,W,le,ye,we){var te=typeof I;(te==="undefined"||te==="boolean")&&(I=null);var ge=!1;if(I===null)ge=!0;else switch(te){case"bigint":case"string":case"number":ge=!0;break;case"object":switch(I.$$typeof){case s:case e:ge=!0;break;case m:return ge=I._init,F(ge(I._payload),W,le,ye,we)}}if(ge)return we=we(I),ge=ye===""?"."+ee(I,0):ye,L(we)?(le="",ge!=null&&(le=ge.replace(J,"$&/")+"/"),F(we,W,le,"",function(Je){return Je})):we!=null&&(H(we)&&(we=q(we,le+(we.key==null||I&&I.key===we.key?"":(""+we.key).replace(J,"$&/")+"/")+ge)),W.push(we)),1;ge=0;var Me=ye===""?".":ye+":";if(L(I))for(var Oe=0;Oe<I.length;Oe++)ye=I[Oe],te=Me+ee(ye,Oe),ge+=F(ye,W,le,te,we);else if(Oe=x(I),typeof Oe=="function")for(I=Oe.call(I),Oe=0;!(ye=I.next()).done;)ye=ye.value,te=Me+ee(ye,Oe++),ge+=F(ye,W,le,te,we);else if(te==="object"){if(typeof I.then=="function")return F($(I),W,le,ye,we);throw W=String(I),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.")}return ge}function z(I,W,le){if(I==null)return I;var ye=[],we=0;return F(I,ye,"","",function(te){return W.call(le,te,we++)}),ye}function ie(I){if(I._status===-1){var W=I._result;W=W(),W.then(function(le){(I._status===0||I._status===-1)&&(I._status=1,I._result=le)},function(le){(I._status===0||I._status===-1)&&(I._status=2,I._result=le)}),I._status===-1&&(I._status=0,I._result=W)}if(I._status===1)return I._result.default;throw I._result}var de=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var W=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(W))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)},G={map:z,forEach:function(I,W,le){z(I,function(){W.apply(this,arguments)},le)},count:function(I){var W=0;return z(I,function(){W++}),W},toArray:function(I){return z(I,function(W){return W})||[]},only:function(I){if(!H(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return Mt.Activity=_,Mt.Children=G,Mt.Component=S,Mt.Fragment=t,Mt.Profiler=r,Mt.PureComponent=N,Mt.StrictMode=i,Mt.Suspense=d,Mt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=D,Mt.__COMPILER_RUNTIME={__proto__:null,c:function(I){return D.H.useMemoCache(I)}},Mt.cache=function(I){return function(){return I.apply(null,arguments)}},Mt.cacheSignal=function(){return null},Mt.cloneElement=function(I,W,le){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var ye=M({},I.props),we=I.key;if(W!=null)for(te in W.key!==void 0&&(we=""+W.key),W)!T.call(W,te)||te==="key"||te==="__self"||te==="__source"||te==="ref"&&W.ref===void 0||(ye[te]=W[te]);var te=arguments.length-2;if(te===1)ye.children=le;else if(1<te){for(var ge=Array(te),Me=0;Me<te;Me++)ge[Me]=arguments[Me+2];ye.children=ge}return w(I.type,we,ye)},Mt.createContext=function(I){return I={$$typeof:c,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:l,_context:I},I},Mt.createElement=function(I,W,le){var ye,we={},te=null;if(W!=null)for(ye in W.key!==void 0&&(te=""+W.key),W)T.call(W,ye)&&ye!=="key"&&ye!=="__self"&&ye!=="__source"&&(we[ye]=W[ye]);var ge=arguments.length-2;if(ge===1)we.children=le;else if(1<ge){for(var Me=Array(ge),Oe=0;Oe<ge;Oe++)Me[Oe]=arguments[Oe+2];we.children=Me}if(I&&I.defaultProps)for(ye in ge=I.defaultProps,ge)we[ye]===void 0&&(we[ye]=ge[ye]);return w(I,te,we)},Mt.createRef=function(){return{current:null}},Mt.forwardRef=function(I){return{$$typeof:f,render:I}},Mt.isValidElement=H,Mt.lazy=function(I){return{$$typeof:m,_payload:{_status:-1,_result:I},_init:ie}},Mt.memo=function(I,W){return{$$typeof:h,type:I,compare:W===void 0?null:W}},Mt.startTransition=function(I){var W=D.T,le={};D.T=le;try{var ye=I(),we=D.S;we!==null&&we(le,ye),typeof ye=="object"&&ye!==null&&typeof ye.then=="function"&&ye.then(P,de)}catch(te){de(te)}finally{W!==null&&le.types!==null&&(W.types=le.types),D.T=W}},Mt.unstable_useCacheRefresh=function(){return D.H.useCacheRefresh()},Mt.use=function(I){return D.H.use(I)},Mt.useActionState=function(I,W,le){return D.H.useActionState(I,W,le)},Mt.useCallback=function(I,W){return D.H.useCallback(I,W)},Mt.useContext=function(I){return D.H.useContext(I)},Mt.useDebugValue=function(){},Mt.useDeferredValue=function(I,W){return D.H.useDeferredValue(I,W)},Mt.useEffect=function(I,W){return D.H.useEffect(I,W)},Mt.useEffectEvent=function(I){return D.H.useEffectEvent(I)},Mt.useId=function(){return D.H.useId()},Mt.useImperativeHandle=function(I,W,le){return D.H.useImperativeHandle(I,W,le)},Mt.useInsertionEffect=function(I,W){return D.H.useInsertionEffect(I,W)},Mt.useLayoutEffect=function(I,W){return D.H.useLayoutEffect(I,W)},Mt.useMemo=function(I,W){return D.H.useMemo(I,W)},Mt.useOptimistic=function(I,W){return D.H.useOptimistic(I,W)},Mt.useReducer=function(I,W,le){return D.H.useReducer(I,W,le)},Mt.useRef=function(I){return D.H.useRef(I)},Mt.useState=function(I){return D.H.useState(I)},Mt.useSyncExternalStore=function(I,W,le){return D.H.useSyncExternalStore(I,W,le)},Mt.useTransition=function(){return D.H.useTransition()},Mt.version="19.2.4",Mt}var Y1;function pv(){return Y1||(Y1=1,wg.exports=R3()),wg.exports}var ln=pv();const mv=T3(ln);var Dg={exports:{}},Rc={},Ng={exports:{}},Ug={};var q1;function w3(){return q1||(q1=1,(function(s){function e(F,z){var ie=F.length;F.push(z);e:for(;0<ie;){var de=ie-1>>>1,G=F[de];if(0<r(G,z))F[de]=z,F[ie]=G,ie=de;else break e}}function t(F){return F.length===0?null:F[0]}function i(F){if(F.length===0)return null;var z=F[0],ie=F.pop();if(ie!==z){F[0]=ie;e:for(var de=0,G=F.length,I=G>>>1;de<I;){var W=2*(de+1)-1,le=F[W],ye=W+1,we=F[ye];if(0>r(le,ie))ye<G&&0>r(we,le)?(F[de]=we,F[ye]=ie,de=ye):(F[de]=le,F[W]=ie,de=W);else if(ye<G&&0>r(we,ie))F[de]=we,F[ye]=ie,de=ye;else break e}}return z}function r(F,z){var ie=F.sortIndex-z.sortIndex;return ie!==0?ie:F.id-z.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();s.unstable_now=function(){return c.now()-f}}var d=[],h=[],m=1,_=null,v=3,x=!1,b=!1,M=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function R(F){for(var z=t(h);z!==null;){if(z.callback===null)i(h);else if(z.startTime<=F)i(h),z.sortIndex=z.expirationTime,e(d,z);else break;z=t(h)}}function L(F){if(M=!1,R(F),!b)if(t(d)!==null)b=!0,P||(P=!0,k());else{var z=t(h);z!==null&&$(L,z.startTime-F)}}var P=!1,D=-1,T=5,w=-1;function q(){return y?!0:!(s.unstable_now()-w<T)}function H(){if(y=!1,P){var F=s.unstable_now();w=F;var z=!0;try{e:{b=!1,M&&(M=!1,A(D),D=-1),x=!0;var ie=v;try{t:{for(R(F),_=t(d);_!==null&&!(_.expirationTime>F&&q());){var de=_.callback;if(typeof de=="function"){_.callback=null,v=_.priorityLevel;var G=de(_.expirationTime<=F);if(F=s.unstable_now(),typeof G=="function"){_.callback=G,R(F),z=!0;break t}_===t(d)&&i(d),R(F)}else i(d);_=t(d)}if(_!==null)z=!0;else{var I=t(h);I!==null&&$(L,I.startTime-F),z=!1}}break e}finally{_=null,v=ie,x=!1}z=void 0}}finally{z?k():P=!1}}}var k;if(typeof N=="function")k=function(){N(H)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,ee=J.port2;J.port1.onmessage=H,k=function(){ee.postMessage(null)}}else k=function(){S(H,0)};function $(F,z){D=S(function(){F(s.unstable_now())},z)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(F){F.callback=null},s.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<F?Math.floor(1e3/F):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_next=function(F){switch(v){case 1:case 2:case 3:var z=3;break;default:z=v}var ie=v;v=z;try{return F()}finally{v=ie}},s.unstable_requestPaint=function(){y=!0},s.unstable_runWithPriority=function(F,z){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var ie=v;v=F;try{return z()}finally{v=ie}},s.unstable_scheduleCallback=function(F,z,ie){var de=s.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?de+ie:de):ie=de,F){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=ie+G,F={id:m++,callback:z,priorityLevel:F,startTime:ie,expirationTime:G,sortIndex:-1},ie>de?(F.sortIndex=ie,e(h,F),t(d)===null&&F===t(h)&&(M?(A(D),D=-1):M=!0,$(L,ie-de))):(F.sortIndex=G,e(d,F),b||x||(b=!0,P||(P=!0,k()))),F},s.unstable_shouldYield=q,s.unstable_wrapCallback=function(F){var z=v;return function(){var ie=v;v=z;try{return F.apply(this,arguments)}finally{v=ie}}}})(Ug)),Ug}var Z1;function D3(){return Z1||(Z1=1,Ng.exports=w3()),Ng.exports}var Lg={exports:{}},bi={};var K1;function N3(){if(K1)return bi;K1=1;var s=pv();function e(d){var h="https://react.dev/errors/"+d;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var m=2;m<arguments.length;m++)h+="&args[]="+encodeURIComponent(arguments[m])}return"Minified React error #"+d+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var i={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},r=Symbol.for("react.portal");function l(d,h,m){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:r,key:_==null?null:""+_,children:d,containerInfo:h,implementation:m}}var c=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(d,h){if(d==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return bi.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,bi.createPortal=function(d,h){var m=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return l(d,h,null,m)},bi.flushSync=function(d){var h=c.T,m=i.p;try{if(c.T=null,i.p=2,d)return d()}finally{c.T=h,i.p=m,i.d.f()}},bi.preconnect=function(d,h){typeof d=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,i.d.C(d,h))},bi.prefetchDNS=function(d){typeof d=="string"&&i.d.D(d)},bi.preinit=function(d,h){if(typeof d=="string"&&h&&typeof h.as=="string"){var m=h.as,_=f(m,h.crossOrigin),v=typeof h.integrity=="string"?h.integrity:void 0,x=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;m==="style"?i.d.S(d,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:x}):m==="script"&&i.d.X(d,{crossOrigin:_,integrity:v,fetchPriority:x,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},bi.preinitModule=function(d,h){if(typeof d=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var m=f(h.as,h.crossOrigin);i.d.M(d,{crossOrigin:m,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&i.d.M(d)},bi.preload=function(d,h){if(typeof d=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var m=h.as,_=f(m,h.crossOrigin);i.d.L(d,m,{crossOrigin:_,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},bi.preloadModule=function(d,h){if(typeof d=="string")if(h){var m=f(h.as,h.crossOrigin);i.d.m(d,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:m,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else i.d.m(d)},bi.requestFormReset=function(d){i.d.r(d)},bi.unstable_batchedUpdates=function(d,h){return d(h)},bi.useFormState=function(d,h,m){return c.H.useFormState(d,h,m)},bi.useFormStatus=function(){return c.H.useHostTransitionStatus()},bi.version="19.2.4",bi}var Q1;function U3(){if(Q1)return Lg.exports;Q1=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Lg.exports=N3(),Lg.exports}var J1;function L3(){if(J1)return Rc;J1=1;var s=D3(),e=pv(),t=U3();function i(n){var a="https://react.dev/errors/"+n;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)a+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+n+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function l(n){var a=n,o=n;if(n.alternate)for(;a.return;)a=a.return;else{n=a;do a=n,(a.flags&4098)!==0&&(o=a.return),n=a.return;while(n)}return a.tag===3?o:null}function c(n){if(n.tag===13){var a=n.memoizedState;if(a===null&&(n=n.alternate,n!==null&&(a=n.memoizedState)),a!==null)return a.dehydrated}return null}function f(n){if(n.tag===31){var a=n.memoizedState;if(a===null&&(n=n.alternate,n!==null&&(a=n.memoizedState)),a!==null)return a.dehydrated}return null}function d(n){if(l(n)!==n)throw Error(i(188))}function h(n){var a=n.alternate;if(!a){if(a=l(n),a===null)throw Error(i(188));return a!==n?null:n}for(var o=n,u=a;;){var p=o.return;if(p===null)break;var g=p.alternate;if(g===null){if(u=p.return,u!==null){o=u;continue}break}if(p.child===g.child){for(g=p.child;g;){if(g===o)return d(p),n;if(g===u)return d(p),a;g=g.sibling}throw Error(i(188))}if(o.return!==u.return)o=p,u=g;else{for(var E=!1,O=p.child;O;){if(O===o){E=!0,o=p,u=g;break}if(O===u){E=!0,u=p,o=g;break}O=O.sibling}if(!E){for(O=g.child;O;){if(O===o){E=!0,o=g,u=p;break}if(O===u){E=!0,u=g,o=p;break}O=O.sibling}if(!E)throw Error(i(189))}}if(o.alternate!==u)throw Error(i(190))}if(o.tag!==3)throw Error(i(188));return o.stateNode.current===o?n:a}function m(n){var a=n.tag;if(a===5||a===26||a===27||a===6)return n;for(n=n.child;n!==null;){if(a=m(n),a!==null)return a;n=n.sibling}return null}var _=Object.assign,v=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),A=Symbol.for("react.consumer"),N=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),D=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),q=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function k(n){return n===null||typeof n!="object"?null:(n=H&&n[H]||n["@@iterator"],typeof n=="function"?n:null)}var J=Symbol.for("react.client.reference");function ee(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===J?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case M:return"Fragment";case S:return"Profiler";case y:return"StrictMode";case L:return"Suspense";case P:return"SuspenseList";case w:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case b:return"Portal";case N:return n.displayName||"Context";case A:return(n._context.displayName||"Context")+".Consumer";case R:var a=n.render;return n=n.displayName,n||(n=a.displayName||a.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case D:return a=n.displayName||null,a!==null?a:ee(n.type)||"Memo";case T:a=n._payload,n=n._init;try{return ee(n(a))}catch{}}return null}var $=Array.isArray,F=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie={pending:!1,data:null,method:null,action:null},de=[],G=-1;function I(n){return{current:n}}function W(n){0>G||(n.current=de[G],de[G]=null,G--)}function le(n,a){G++,de[G]=n.current,n.current=a}var ye=I(null),we=I(null),te=I(null),ge=I(null);function Me(n,a){switch(le(te,a),le(we,n),le(ye,null),a.nodeType){case 9:case 11:n=(n=a.documentElement)&&(n=n.namespaceURI)?h1(n):0;break;default:if(n=a.tagName,a=a.namespaceURI)a=h1(a),n=p1(a,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}W(ye),le(ye,n)}function Oe(){W(ye),W(we),W(te)}function Je(n){n.memoizedState!==null&&le(ge,n);var a=ye.current,o=p1(a,n.type);a!==o&&(le(we,n),le(ye,o))}function Ze(n){we.current===n&&(W(ye),W(we)),ge.current===n&&(W(ge),Mc._currentValue=ie)}var Lt,qe;function st(n){if(Lt===void 0)try{throw Error()}catch(o){var a=o.stack.trim().match(/\n( *(at )?)/);Lt=a&&a[1]||"",qe=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Lt+n+qe}var vt=!1;function ot(n,a){if(!n||vt)return"";vt=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(a){var Ee=function(){throw Error()};if(Object.defineProperty(Ee.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ee,[])}catch(me){var fe=me}Reflect.construct(n,[],Ee)}else{try{Ee.call()}catch(me){fe=me}n.call(Ee.prototype)}}else{try{throw Error()}catch(me){fe=me}(Ee=n())&&typeof Ee.catch=="function"&&Ee.catch(function(){})}}catch(me){if(me&&fe&&typeof me.stack=="string")return[me.stack,fe.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var p=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");p&&p.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var g=u.DetermineComponentFrameRoot(),E=g[0],O=g[1];if(E&&O){var j=E.split(`
`),oe=O.split(`
`);for(p=u=0;u<j.length&&!j[u].includes("DetermineComponentFrameRoot");)u++;for(;p<oe.length&&!oe[p].includes("DetermineComponentFrameRoot");)p++;if(u===j.length||p===oe.length)for(u=j.length-1,p=oe.length-1;1<=u&&0<=p&&j[u]!==oe[p];)p--;for(;1<=u&&0<=p;u--,p--)if(j[u]!==oe[p]){if(u!==1||p!==1)do if(u--,p--,0>p||j[u]!==oe[p]){var Se=`
`+j[u].replace(" at new "," at ");return n.displayName&&Se.includes("<anonymous>")&&(Se=Se.replace("<anonymous>",n.displayName)),Se}while(1<=u&&0<=p);break}}}finally{vt=!1,Error.prepareStackTrace=o}return(o=n?n.displayName||n.name:"")?st(o):""}function ue(n,a){switch(n.tag){case 26:case 27:case 5:return st(n.type);case 16:return st("Lazy");case 13:return n.child!==a&&a!==null?st("Suspense Fallback"):st("Suspense");case 19:return st("SuspenseList");case 0:case 15:return ot(n.type,!1);case 11:return ot(n.type.render,!1);case 1:return ot(n.type,!0);case 31:return st("Activity");default:return""}}function Y(n){try{var a="",o=null;do a+=ue(n,o),o=n,n=n.return;while(n);return a}catch(u){return`
Error generating stack: `+u.message+`
`+u.stack}}var Zt=Object.prototype.hasOwnProperty,Tt=s.unstable_scheduleCallback,dt=s.unstable_cancelCallback,je=s.unstable_shouldYield,B=s.unstable_requestPaint,C=s.unstable_now,K=s.unstable_getCurrentPriorityLevel,ve=s.unstable_ImmediatePriority,xe=s.unstable_UserBlockingPriority,pe=s.unstable_NormalPriority,Ve=s.unstable_LowPriority,De=s.unstable_IdlePriority,at=s.log,Ye=s.unstable_setDisableYieldValue,Ce=null,Ae=null;function Ge(n){if(typeof at=="function"&&Ye(n),Ae&&typeof Ae.setStrictMode=="function")try{Ae.setStrictMode(Ce,n)}catch{}}var Ie=Math.clz32?Math.clz32:X,ze=Math.log,gt=Math.LN2;function X(n){return n>>>=0,n===0?32:31-(ze(n)/gt|0)|0}var Ne=256,Re=262144,Pe=4194304;function Te(n){var a=n&42;if(a!==0)return a;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return n&261888;case 262144:case 524288:case 1048576:case 2097152:return n&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function _e(n,a,o){var u=n.pendingLanes;if(u===0)return 0;var p=0,g=n.suspendedLanes,E=n.pingedLanes;n=n.warmLanes;var O=u&134217727;return O!==0?(u=O&~g,u!==0?p=Te(u):(E&=O,E!==0?p=Te(E):o||(o=O&~n,o!==0&&(p=Te(o))))):(O=u&~g,O!==0?p=Te(O):E!==0?p=Te(E):o||(o=u&~n,o!==0&&(p=Te(o)))),p===0?0:a!==0&&a!==p&&(a&g)===0&&(g=p&-p,o=a&-a,g>=o||g===32&&(o&4194048)!==0)?a:p}function We(n,a){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&a)===0}function ut(n,a){switch(n){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xt(){var n=Pe;return Pe<<=1,(Pe&62914560)===0&&(Pe=4194304),n}function ke(n){for(var a=[],o=0;31>o;o++)a.push(n);return a}function et(n,a){n.pendingLanes|=a,a!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function At(n,a,o,u,p,g){var E=n.pendingLanes;n.pendingLanes=o,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=o,n.entangledLanes&=o,n.errorRecoveryDisabledLanes&=o,n.shellSuspendCounter=0;var O=n.entanglements,j=n.expirationTimes,oe=n.hiddenUpdates;for(o=E&~o;0<o;){var Se=31-Ie(o),Ee=1<<Se;O[Se]=0,j[Se]=-1;var fe=oe[Se];if(fe!==null)for(oe[Se]=null,Se=0;Se<fe.length;Se++){var me=fe[Se];me!==null&&(me.lane&=-536870913)}o&=~Ee}u!==0&&Be(n,u,0),g!==0&&p===0&&n.tag!==0&&(n.suspendedLanes|=g&~(E&~a))}function Be(n,a,o){n.pendingLanes|=a,n.suspendedLanes&=~a;var u=31-Ie(a);n.entangledLanes|=a,n.entanglements[u]=n.entanglements[u]|1073741824|o&261930}function pt(n,a){var o=n.entangledLanes|=a;for(n=n.entanglements;o;){var u=31-Ie(o),p=1<<u;p&a|n[u]&a&&(n[u]|=a),o&=~p}}function lt(n,a){var o=a&-a;return o=(o&42)!==0?1:mt(o),(o&(n.suspendedLanes|a))!==0?0:o}function mt(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function yn(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function xt(){var n=z.p;return n!==0?n:(n=window.event,n===void 0?32:I1(n.type))}function un(n,a){var o=z.p;try{return z.p=n,a()}finally{z.p=o}}var cn=Math.random().toString(36).slice(2),Ct="__reactFiber$"+cn,St="__reactProps$"+cn,zt="__reactContainer$"+cn,kn="__reactEvents$"+cn,fn="__reactListeners$"+cn,oi="__reactHandles$"+cn,Ni="__reactResources$"+cn,Sn="__reactMarker$"+cn;function Nn(n){delete n[Ct],delete n[St],delete n[kn],delete n[fn],delete n[oi]}function bn(n){var a=n[Ct];if(a)return a;for(var o=n.parentNode;o;){if(a=o[zt]||o[Ct]){if(o=a.alternate,a.child!==null||o!==null&&o.child!==null)for(n=S1(n);n!==null;){if(o=n[Ct])return o;n=S1(n)}return a}n=o,o=n.parentNode}return null}function Si(n){if(n=n[Ct]||n[zt]){var a=n.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return n}return null}function Ra(n){var a=n.tag;if(a===5||a===26||a===27||a===6)return n.stateNode;throw Error(i(33))}function U(n){var a=n[Ni];return a||(a=n[Ni]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function Z(n){n[Sn]=!0}var ce=new Set,se={};function ae(n,a){Le(n,a),Le(n+"Capture",a)}function Le(n,a){for(se[n]=a,n=0;n<a.length;n++)ce.add(a[n])}var He=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Fe={},Ke={};function Qe(n){return Zt.call(Ke,n)?!0:Zt.call(Fe,n)?!1:He.test(n)?Ke[n]=!0:(Fe[n]=!0,!1)}function _t(n,a,o){if(Qe(a))if(o===null)n.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":n.removeAttribute(a);return;case"boolean":var u=a.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){n.removeAttribute(a);return}}n.setAttribute(a,""+o)}}function bt(n,a,o){if(o===null)n.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(a);return}n.setAttribute(a,""+o)}}function $e(n,a,o,u){if(u===null)n.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(o);return}n.setAttributeNS(a,o,""+u)}}function Dt(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Cn(n){var a=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function Rn(n,a,o){var u=Object.getOwnPropertyDescriptor(n.constructor.prototype,a);if(!n.hasOwnProperty(a)&&typeof u<"u"&&typeof u.get=="function"&&typeof u.set=="function"){var p=u.get,g=u.set;return Object.defineProperty(n,a,{configurable:!0,get:function(){return p.call(this)},set:function(E){o=""+E,g.call(this,E)}}),Object.defineProperty(n,a,{enumerable:u.enumerable}),{getValue:function(){return o},setValue:function(E){o=""+E},stopTracking:function(){n._valueTracker=null,delete n[a]}}}}function Qt(n){if(!n._valueTracker){var a=Cn(n)?"checked":"value";n._valueTracker=Rn(n,a,""+n[a])}}function ti(n){if(!n)return!1;var a=n._valueTracker;if(!a)return!0;var o=a.getValue(),u="";return n&&(u=Cn(n)?n.checked?"true":"false":n.value),n=u,n!==o?(a.setValue(n),!0):!1}function it(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var Ui=/[\n"\\]/g;function yt(n){return n.replace(Ui,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function Li(n,a,o,u,p,g,E,O){n.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?n.type=E:n.removeAttribute("type"),a!=null?E==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+Dt(a)):n.value!==""+Dt(a)&&(n.value=""+Dt(a)):E!=="submit"&&E!=="reset"||n.removeAttribute("value"),a!=null?Ya(n,E,Dt(a)):o!=null?Ya(n,E,Dt(o)):u!=null&&n.removeAttribute("value"),p==null&&g!=null&&(n.defaultChecked=!!g),p!=null&&(n.checked=p&&typeof p!="function"&&typeof p!="symbol"),O!=null&&typeof O!="function"&&typeof O!="symbol"&&typeof O!="boolean"?n.name=""+Dt(O):n.removeAttribute("name")}function aa(n,a,o,u,p,g,E,O){if(g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(n.type=g),a!=null||o!=null){if(!(g!=="submit"&&g!=="reset"||a!=null)){Qt(n);return}o=o!=null?""+Dt(o):"",a=a!=null?""+Dt(a):o,O||a===n.value||(n.value=a),n.defaultValue=a}u=u??p,u=typeof u!="function"&&typeof u!="symbol"&&!!u,n.checked=O?n.checked:!!u,n.defaultChecked=!!u,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(n.name=E),Qt(n)}function Ya(n,a,o){a==="number"&&it(n.ownerDocument)===n||n.defaultValue===""+o||(n.defaultValue=""+o)}function ra(n,a,o,u){if(n=n.options,a){a={};for(var p=0;p<o.length;p++)a["$"+o[p]]=!0;for(o=0;o<n.length;o++)p=a.hasOwnProperty("$"+n[o].value),n[o].selected!==p&&(n[o].selected=p),p&&u&&(n[o].defaultSelected=!0)}else{for(o=""+Dt(o),a=null,p=0;p<n.length;p++){if(n[p].value===o){n[p].selected=!0,u&&(n[p].defaultSelected=!0);return}a!==null||n[p].disabled||(a=n[p])}a!==null&&(a.selected=!0)}}function nn(n,a,o){if(a!=null&&(a=""+Dt(a),a!==n.value&&(n.value=a),o==null)){n.defaultValue!==a&&(n.defaultValue=a);return}n.defaultValue=o!=null?""+Dt(o):""}function Xn(n,a,o,u){if(a==null){if(u!=null){if(o!=null)throw Error(i(92));if($(u)){if(1<u.length)throw Error(i(93));u=u[0]}o=u}o==null&&(o=""),a=o}o=Dt(a),n.defaultValue=o,u=n.textContent,u===o&&u!==""&&u!==null&&(n.value=u),Qt(n)}function Oi(n,a){if(a){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=a;return}}n.textContent=a}var Wn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function qa(n,a,o){var u=a.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?n.setProperty(a,""):a==="float"?n.cssFloat="":n[a]="":u?n.setProperty(a,o):typeof o!="number"||o===0||Wn.has(a)?a==="float"?n.cssFloat=o:n[a]=(""+o).trim():n[a]=o+"px"}function Dr(n,a,o){if(a!=null&&typeof a!="object")throw Error(i(62));if(n=n.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||a!=null&&a.hasOwnProperty(u)||(u.indexOf("--")===0?n.setProperty(u,""):u==="float"?n.cssFloat="":n[u]="");for(var p in a)u=a[p],a.hasOwnProperty(p)&&o[p]!==u&&qa(n,p,u)}else for(var g in a)a.hasOwnProperty(g)&&qa(n,g,a[g])}function fl(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var S2=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),b2=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ff(n){return b2.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}function Nr(){}var Tp=null;function Ap(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var dl=null,hl=null;function dx(n){var a=Si(n);if(a&&(n=a.stateNode)){var o=n[St]||null;e:switch(n=a.stateNode,a.type){case"input":if(Li(n,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),a=o.name,o.type==="radio"&&a!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+yt(""+a)+'"][type="radio"]'),a=0;a<o.length;a++){var u=o[a];if(u!==n&&u.form===n.form){var p=u[St]||null;if(!p)throw Error(i(90));Li(u,p.value,p.defaultValue,p.defaultValue,p.checked,p.defaultChecked,p.type,p.name)}}for(a=0;a<o.length;a++)u=o[a],u.form===n.form&&ti(u)}break e;case"textarea":nn(n,o.value,o.defaultValue);break e;case"select":a=o.value,a!=null&&ra(n,!!o.multiple,a,!1)}}}var Cp=!1;function hx(n,a,o){if(Cp)return n(a,o);Cp=!0;try{var u=n(a);return u}finally{if(Cp=!1,(dl!==null||hl!==null)&&(Md(),dl&&(a=dl,n=hl,hl=dl=null,dx(a),n)))for(a=0;a<n.length;a++)dx(n[a])}}function Hu(n,a){var o=n.stateNode;if(o===null)return null;var u=o[St]||null;if(u===null)return null;o=u[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(i(231,a,typeof o));return o}var Ur=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Rp=!1;if(Ur)try{var Gu={};Object.defineProperty(Gu,"passive",{get:function(){Rp=!0}}),window.addEventListener("test",Gu,Gu),window.removeEventListener("test",Gu,Gu)}catch{Rp=!1}var ys=null,wp=null,If=null;function px(){if(If)return If;var n,a=wp,o=a.length,u,p="value"in ys?ys.value:ys.textContent,g=p.length;for(n=0;n<o&&a[n]===p[n];n++);var E=o-n;for(u=1;u<=E&&a[o-u]===p[g-u];u++);return If=p.slice(n,1<u?1-u:void 0)}function zf(n){var a=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&a===13&&(n=13)):n=a,n===10&&(n=13),32<=n||n===13?n:0}function Bf(){return!0}function mx(){return!1}function Xi(n){function a(o,u,p,g,E){this._reactName=o,this._targetInst=p,this.type=u,this.nativeEvent=g,this.target=E,this.currentTarget=null;for(var O in n)n.hasOwnProperty(O)&&(o=n[O],this[O]=o?o(g):g[O]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Bf:mx,this.isPropagationStopped=mx,this}return _(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Bf)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Bf)},persist:function(){},isPersistent:Bf}),a}var go={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hf=Xi(go),Vu=_({},go,{view:0,detail:0}),M2=Xi(Vu),Dp,Np,ku,Gf=_({},Vu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lp,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ku&&(ku&&n.type==="mousemove"?(Dp=n.screenX-ku.screenX,Np=n.screenY-ku.screenY):Np=Dp=0,ku=n),Dp)},movementY:function(n){return"movementY"in n?n.movementY:Np}}),gx=Xi(Gf),E2=_({},Gf,{dataTransfer:0}),T2=Xi(E2),A2=_({},Vu,{relatedTarget:0}),Up=Xi(A2),C2=_({},go,{animationName:0,elapsedTime:0,pseudoElement:0}),R2=Xi(C2),w2=_({},go,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),D2=Xi(w2),N2=_({},go,{data:0}),_x=Xi(N2),U2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},L2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},O2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function P2(n){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(n):(n=O2[n])?!!a[n]:!1}function Lp(){return P2}var F2=_({},Vu,{key:function(n){if(n.key){var a=U2[n.key]||n.key;if(a!=="Unidentified")return a}return n.type==="keypress"?(n=zf(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?L2[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lp,charCode:function(n){return n.type==="keypress"?zf(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?zf(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),I2=Xi(F2),z2=_({},Gf,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vx=Xi(z2),B2=_({},Vu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lp}),H2=Xi(B2),G2=_({},go,{propertyName:0,elapsedTime:0,pseudoElement:0}),V2=Xi(G2),k2=_({},Gf,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),X2=Xi(k2),W2=_({},go,{newState:0,oldState:0}),j2=Xi(W2),Y2=[9,13,27,32],Op=Ur&&"CompositionEvent"in window,Xu=null;Ur&&"documentMode"in document&&(Xu=document.documentMode);var q2=Ur&&"TextEvent"in window&&!Xu,xx=Ur&&(!Op||Xu&&8<Xu&&11>=Xu),yx=" ",Sx=!1;function bx(n,a){switch(n){case"keyup":return Y2.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mx(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var pl=!1;function Z2(n,a){switch(n){case"compositionend":return Mx(a);case"keypress":return a.which!==32?null:(Sx=!0,yx);case"textInput":return n=a.data,n===yx&&Sx?null:n;default:return null}}function K2(n,a){if(pl)return n==="compositionend"||!Op&&bx(n,a)?(n=px(),If=wp=ys=null,pl=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return xx&&a.locale!=="ko"?null:a.data;default:return null}}var Q2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ex(n){var a=n&&n.nodeName&&n.nodeName.toLowerCase();return a==="input"?!!Q2[n.type]:a==="textarea"}function Tx(n,a,o,u){dl?hl?hl.push(u):hl=[u]:dl=u,a=Dd(a,"onChange"),0<a.length&&(o=new Hf("onChange","change",null,o,u),n.push({event:o,listeners:a}))}var Wu=null,ju=null;function J2(n){o1(n,0)}function Vf(n){var a=Ra(n);if(ti(a))return n}function Ax(n,a){if(n==="change")return a}var Cx=!1;if(Ur){var Pp;if(Ur){var Fp="oninput"in document;if(!Fp){var Rx=document.createElement("div");Rx.setAttribute("oninput","return;"),Fp=typeof Rx.oninput=="function"}Pp=Fp}else Pp=!1;Cx=Pp&&(!document.documentMode||9<document.documentMode)}function wx(){Wu&&(Wu.detachEvent("onpropertychange",Dx),ju=Wu=null)}function Dx(n){if(n.propertyName==="value"&&Vf(ju)){var a=[];Tx(a,ju,n,Ap(n)),hx(J2,a)}}function $2(n,a,o){n==="focusin"?(wx(),Wu=a,ju=o,Wu.attachEvent("onpropertychange",Dx)):n==="focusout"&&wx()}function eC(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Vf(ju)}function tC(n,a){if(n==="click")return Vf(a)}function nC(n,a){if(n==="input"||n==="change")return Vf(a)}function iC(n,a){return n===a&&(n!==0||1/n===1/a)||n!==n&&a!==a}var sa=typeof Object.is=="function"?Object.is:iC;function Yu(n,a){if(sa(n,a))return!0;if(typeof n!="object"||n===null||typeof a!="object"||a===null)return!1;var o=Object.keys(n),u=Object.keys(a);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var p=o[u];if(!Zt.call(a,p)||!sa(n[p],a[p]))return!1}return!0}function Nx(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Ux(n,a){var o=Nx(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=a&&u>=a)return{node:o,offset:a-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Nx(o)}}function Lx(n,a){return n&&a?n===a?!0:n&&n.nodeType===3?!1:a&&a.nodeType===3?Lx(n,a.parentNode):"contains"in n?n.contains(a):n.compareDocumentPosition?!!(n.compareDocumentPosition(a)&16):!1:!1}function Ox(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var a=it(n.document);a instanceof n.HTMLIFrameElement;){try{var o=typeof a.contentWindow.location.href=="string"}catch{o=!1}if(o)n=a.contentWindow;else break;a=it(n.document)}return a}function Ip(n){var a=n&&n.nodeName&&n.nodeName.toLowerCase();return a&&(a==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||a==="textarea"||n.contentEditable==="true")}var aC=Ur&&"documentMode"in document&&11>=document.documentMode,ml=null,zp=null,qu=null,Bp=!1;function Px(n,a,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Bp||ml==null||ml!==it(u)||(u=ml,"selectionStart"in u&&Ip(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),qu&&Yu(qu,u)||(qu=u,u=Dd(zp,"onSelect"),0<u.length&&(a=new Hf("onSelect","select",null,a,o),n.push({event:a,listeners:u}),a.target=ml)))}function _o(n,a){var o={};return o[n.toLowerCase()]=a.toLowerCase(),o["Webkit"+n]="webkit"+a,o["Moz"+n]="moz"+a,o}var gl={animationend:_o("Animation","AnimationEnd"),animationiteration:_o("Animation","AnimationIteration"),animationstart:_o("Animation","AnimationStart"),transitionrun:_o("Transition","TransitionRun"),transitionstart:_o("Transition","TransitionStart"),transitioncancel:_o("Transition","TransitionCancel"),transitionend:_o("Transition","TransitionEnd")},Hp={},Fx={};Ur&&(Fx=document.createElement("div").style,"AnimationEvent"in window||(delete gl.animationend.animation,delete gl.animationiteration.animation,delete gl.animationstart.animation),"TransitionEvent"in window||delete gl.transitionend.transition);function vo(n){if(Hp[n])return Hp[n];if(!gl[n])return n;var a=gl[n],o;for(o in a)if(a.hasOwnProperty(o)&&o in Fx)return Hp[n]=a[o];return n}var Ix=vo("animationend"),zx=vo("animationiteration"),Bx=vo("animationstart"),rC=vo("transitionrun"),sC=vo("transitionstart"),oC=vo("transitioncancel"),Hx=vo("transitionend"),Gx=new Map,Gp="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Gp.push("scrollEnd");function Za(n,a){Gx.set(n,a),ae(a,[n])}var kf=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)},wa=[],_l=0,Vp=0;function Xf(){for(var n=_l,a=Vp=_l=0;a<n;){var o=wa[a];wa[a++]=null;var u=wa[a];wa[a++]=null;var p=wa[a];wa[a++]=null;var g=wa[a];if(wa[a++]=null,u!==null&&p!==null){var E=u.pending;E===null?p.next=p:(p.next=E.next,E.next=p),u.pending=p}g!==0&&Vx(o,p,g)}}function Wf(n,a,o,u){wa[_l++]=n,wa[_l++]=a,wa[_l++]=o,wa[_l++]=u,Vp|=u,n.lanes|=u,n=n.alternate,n!==null&&(n.lanes|=u)}function kp(n,a,o,u){return Wf(n,a,o,u),jf(n)}function xo(n,a){return Wf(n,null,null,a),jf(n)}function Vx(n,a,o){n.lanes|=o;var u=n.alternate;u!==null&&(u.lanes|=o);for(var p=!1,g=n.return;g!==null;)g.childLanes|=o,u=g.alternate,u!==null&&(u.childLanes|=o),g.tag===22&&(n=g.stateNode,n===null||n._visibility&1||(p=!0)),n=g,g=g.return;return n.tag===3?(g=n.stateNode,p&&a!==null&&(p=31-Ie(o),n=g.hiddenUpdates,u=n[p],u===null?n[p]=[a]:u.push(a),a.lane=o|536870912),g):null}function jf(n){if(50<gc)throw gc=0,Jm=null,Error(i(185));for(var a=n.return;a!==null;)n=a,a=n.return;return n.tag===3?n.stateNode:null}var vl={};function lC(n,a,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function oa(n,a,o,u){return new lC(n,a,o,u)}function Xp(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Lr(n,a){var o=n.alternate;return o===null?(o=oa(n.tag,a,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=a,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&65011712,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,a=n.dependencies,o.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o.refCleanup=n.refCleanup,o}function kx(n,a){n.flags&=65011714;var o=n.alternate;return o===null?(n.childLanes=0,n.lanes=a,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=o.childLanes,n.lanes=o.lanes,n.child=o.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=o.memoizedProps,n.memoizedState=o.memoizedState,n.updateQueue=o.updateQueue,n.type=o.type,a=o.dependencies,n.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),n}function Yf(n,a,o,u,p,g){var E=0;if(u=n,typeof n=="function")Xp(n)&&(E=1);else if(typeof n=="string")E=h3(n,o,ye.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case w:return n=oa(31,o,a,p),n.elementType=w,n.lanes=g,n;case M:return yo(o.children,p,g,a);case y:E=8,p|=24;break;case S:return n=oa(12,o,a,p|2),n.elementType=S,n.lanes=g,n;case L:return n=oa(13,o,a,p),n.elementType=L,n.lanes=g,n;case P:return n=oa(19,o,a,p),n.elementType=P,n.lanes=g,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case N:E=10;break e;case A:E=9;break e;case R:E=11;break e;case D:E=14;break e;case T:E=16,u=null;break e}E=29,o=Error(i(130,n===null?"null":typeof n,"")),u=null}return a=oa(E,o,a,p),a.elementType=n,a.type=u,a.lanes=g,a}function yo(n,a,o,u){return n=oa(7,n,u,a),n.lanes=o,n}function Wp(n,a,o){return n=oa(6,n,null,a),n.lanes=o,n}function Xx(n){var a=oa(18,null,null,0);return a.stateNode=n,a}function jp(n,a,o){return a=oa(4,n.children!==null?n.children:[],n.key,a),a.lanes=o,a.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},a}var Wx=new WeakMap;function Da(n,a){if(typeof n=="object"&&n!==null){var o=Wx.get(n);return o!==void 0?o:(a={value:n,source:a,stack:Y(a)},Wx.set(n,a),a)}return{value:n,source:a,stack:Y(a)}}var xl=[],yl=0,qf=null,Zu=0,Na=[],Ua=0,Ss=null,lr=1,ur="";function Or(n,a){xl[yl++]=Zu,xl[yl++]=qf,qf=n,Zu=a}function jx(n,a,o){Na[Ua++]=lr,Na[Ua++]=ur,Na[Ua++]=Ss,Ss=n;var u=lr;n=ur;var p=32-Ie(u)-1;u&=~(1<<p),o+=1;var g=32-Ie(a)+p;if(30<g){var E=p-p%5;g=(u&(1<<E)-1).toString(32),u>>=E,p-=E,lr=1<<32-Ie(a)+p|o<<p|u,ur=g+n}else lr=1<<g|o<<p|u,ur=n}function Yp(n){n.return!==null&&(Or(n,1),jx(n,1,0))}function qp(n){for(;n===qf;)qf=xl[--yl],xl[yl]=null,Zu=xl[--yl],xl[yl]=null;for(;n===Ss;)Ss=Na[--Ua],Na[Ua]=null,ur=Na[--Ua],Na[Ua]=null,lr=Na[--Ua],Na[Ua]=null}function Yx(n,a){Na[Ua++]=lr,Na[Ua++]=ur,Na[Ua++]=Ss,lr=a.id,ur=a.overflow,Ss=n}var hi=null,Mn=null,Wt=!1,bs=null,La=!1,Zp=Error(i(519));function Ms(n){var a=Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ku(Da(a,n)),Zp}function qx(n){var a=n.stateNode,o=n.type,u=n.memoizedProps;switch(a[Ct]=n,a[St]=u,o){case"dialog":Ht("cancel",a),Ht("close",a);break;case"iframe":case"object":case"embed":Ht("load",a);break;case"video":case"audio":for(o=0;o<vc.length;o++)Ht(vc[o],a);break;case"source":Ht("error",a);break;case"img":case"image":case"link":Ht("error",a),Ht("load",a);break;case"details":Ht("toggle",a);break;case"input":Ht("invalid",a),aa(a,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0);break;case"select":Ht("invalid",a);break;case"textarea":Ht("invalid",a),Xn(a,u.value,u.defaultValue,u.children)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||a.textContent===""+o||u.suppressHydrationWarning===!0||f1(a.textContent,o)?(u.popover!=null&&(Ht("beforetoggle",a),Ht("toggle",a)),u.onScroll!=null&&Ht("scroll",a),u.onScrollEnd!=null&&Ht("scrollend",a),u.onClick!=null&&(a.onclick=Nr),a=!0):a=!1,a||Ms(n,!0)}function Zx(n){for(hi=n.return;hi;)switch(hi.tag){case 5:case 31:case 13:La=!1;return;case 27:case 3:La=!0;return;default:hi=hi.return}}function Sl(n){if(n!==hi)return!1;if(!Wt)return Zx(n),Wt=!0,!1;var a=n.tag,o;if((o=a!==3&&a!==27)&&((o=a===5)&&(o=n.type,o=!(o!=="form"&&o!=="button")||hg(n.type,n.memoizedProps)),o=!o),o&&Mn&&Ms(n),Zx(n),a===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(i(317));Mn=y1(n)}else if(a===31){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(i(317));Mn=y1(n)}else a===27?(a=Mn,Is(n.type)?(n=vg,vg=null,Mn=n):Mn=a):Mn=hi?Pa(n.stateNode.nextSibling):null;return!0}function So(){Mn=hi=null,Wt=!1}function Kp(){var n=bs;return n!==null&&(qi===null?qi=n:qi.push.apply(qi,n),bs=null),n}function Ku(n){bs===null?bs=[n]:bs.push(n)}var Qp=I(null),bo=null,Pr=null;function Es(n,a,o){le(Qp,a._currentValue),a._currentValue=o}function Fr(n){n._currentValue=Qp.current,W(Qp)}function Jp(n,a,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&a)!==a?(n.childLanes|=a,u!==null&&(u.childLanes|=a)):u!==null&&(u.childLanes&a)!==a&&(u.childLanes|=a),n===o)break;n=n.return}}function $p(n,a,o,u){var p=n.child;for(p!==null&&(p.return=n);p!==null;){var g=p.dependencies;if(g!==null){var E=p.child;g=g.firstContext;e:for(;g!==null;){var O=g;g=p;for(var j=0;j<a.length;j++)if(O.context===a[j]){g.lanes|=o,O=g.alternate,O!==null&&(O.lanes|=o),Jp(g.return,o,n),u||(E=null);break e}g=O.next}}else if(p.tag===18){if(E=p.return,E===null)throw Error(i(341));E.lanes|=o,g=E.alternate,g!==null&&(g.lanes|=o),Jp(E,o,n),E=null}else E=p.child;if(E!==null)E.return=p;else for(E=p;E!==null;){if(E===n){E=null;break}if(p=E.sibling,p!==null){p.return=E.return,E=p;break}E=E.return}p=E}}function bl(n,a,o,u){n=null;for(var p=a,g=!1;p!==null;){if(!g){if((p.flags&524288)!==0)g=!0;else if((p.flags&262144)!==0)break}if(p.tag===10){var E=p.alternate;if(E===null)throw Error(i(387));if(E=E.memoizedProps,E!==null){var O=p.type;sa(p.pendingProps.value,E.value)||(n!==null?n.push(O):n=[O])}}else if(p===ge.current){if(E=p.alternate,E===null)throw Error(i(387));E.memoizedState.memoizedState!==p.memoizedState.memoizedState&&(n!==null?n.push(Mc):n=[Mc])}p=p.return}n!==null&&$p(a,n,o,u),a.flags|=262144}function Zf(n){for(n=n.firstContext;n!==null;){if(!sa(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Mo(n){bo=n,Pr=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function pi(n){return Kx(bo,n)}function Kf(n,a){return bo===null&&Mo(n),Kx(n,a)}function Kx(n,a){var o=a._currentValue;if(a={context:a,memoizedValue:o,next:null},Pr===null){if(n===null)throw Error(i(308));Pr=a,n.dependencies={lanes:0,firstContext:a},n.flags|=524288}else Pr=Pr.next=a;return o}var uC=typeof AbortController<"u"?AbortController:function(){var n=[],a=this.signal={aborted:!1,addEventListener:function(o,u){n.push(u)}};this.abort=function(){a.aborted=!0,n.forEach(function(o){return o()})}},cC=s.unstable_scheduleCallback,fC=s.unstable_NormalPriority,jn={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function em(){return{controller:new uC,data:new Map,refCount:0}}function Qu(n){n.refCount--,n.refCount===0&&cC(fC,function(){n.controller.abort()})}var Ju=null,tm=0,Ml=0,El=null;function dC(n,a){if(Ju===null){var o=Ju=[];tm=0,Ml=ag(),El={status:"pending",value:void 0,then:function(u){o.push(u)}}}return tm++,a.then(Qx,Qx),a}function Qx(){if(--tm===0&&Ju!==null){El!==null&&(El.status="fulfilled");var n=Ju;Ju=null,Ml=0,El=null;for(var a=0;a<n.length;a++)(0,n[a])()}}function hC(n,a){var o=[],u={status:"pending",value:null,reason:null,then:function(p){o.push(p)}};return n.then(function(){u.status="fulfilled",u.value=a;for(var p=0;p<o.length;p++)(0,o[p])(a)},function(p){for(u.status="rejected",u.reason=p,p=0;p<o.length;p++)(0,o[p])(void 0)}),u}var Jx=F.S;F.S=function(n,a){PS=C(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&dC(n,a),Jx!==null&&Jx(n,a)};var Eo=I(null);function nm(){var n=Eo.current;return n!==null?n:gn.pooledCache}function Qf(n,a){a===null?le(Eo,Eo.current):le(Eo,a.pool)}function $x(){var n=nm();return n===null?null:{parent:jn._currentValue,pool:n}}var Tl=Error(i(460)),im=Error(i(474)),Jf=Error(i(542)),$f={then:function(){}};function ey(n){return n=n.status,n==="fulfilled"||n==="rejected"}function ty(n,a,o){switch(o=n[o],o===void 0?n.push(a):o!==a&&(a.then(Nr,Nr),a=o),a.status){case"fulfilled":return a.value;case"rejected":throw n=a.reason,iy(n),n;default:if(typeof a.status=="string")a.then(Nr,Nr);else{if(n=gn,n!==null&&100<n.shellSuspendCounter)throw Error(i(482));n=a,n.status="pending",n.then(function(u){if(a.status==="pending"){var p=a;p.status="fulfilled",p.value=u}},function(u){if(a.status==="pending"){var p=a;p.status="rejected",p.reason=u}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw n=a.reason,iy(n),n}throw Ao=a,Tl}}function To(n){try{var a=n._init;return a(n._payload)}catch(o){throw o!==null&&typeof o=="object"&&typeof o.then=="function"?(Ao=o,Tl):o}}var Ao=null;function ny(){if(Ao===null)throw Error(i(459));var n=Ao;return Ao=null,n}function iy(n){if(n===Tl||n===Jf)throw Error(i(483))}var Al=null,$u=0;function ed(n){var a=$u;return $u+=1,Al===null&&(Al=[]),ty(Al,n,a)}function ec(n,a){a=a.props.ref,n.ref=a!==void 0?a:null}function td(n,a){throw a.$$typeof===v?Error(i(525)):(n=Object.prototype.toString.call(a),Error(i(31,n==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":n)))}function ay(n){function a(ne,Q){if(n){var re=ne.deletions;re===null?(ne.deletions=[Q],ne.flags|=16):re.push(Q)}}function o(ne,Q){if(!n)return null;for(;Q!==null;)a(ne,Q),Q=Q.sibling;return null}function u(ne){for(var Q=new Map;ne!==null;)ne.key!==null?Q.set(ne.key,ne):Q.set(ne.index,ne),ne=ne.sibling;return Q}function p(ne,Q){return ne=Lr(ne,Q),ne.index=0,ne.sibling=null,ne}function g(ne,Q,re){return ne.index=re,n?(re=ne.alternate,re!==null?(re=re.index,re<Q?(ne.flags|=67108866,Q):re):(ne.flags|=67108866,Q)):(ne.flags|=1048576,Q)}function E(ne){return n&&ne.alternate===null&&(ne.flags|=67108866),ne}function O(ne,Q,re,be){return Q===null||Q.tag!==6?(Q=Wp(re,ne.mode,be),Q.return=ne,Q):(Q=p(Q,re),Q.return=ne,Q)}function j(ne,Q,re,be){var ct=re.type;return ct===M?Se(ne,Q,re.props.children,be,re.key):Q!==null&&(Q.elementType===ct||typeof ct=="object"&&ct!==null&&ct.$$typeof===T&&To(ct)===Q.type)?(Q=p(Q,re.props),ec(Q,re),Q.return=ne,Q):(Q=Yf(re.type,re.key,re.props,null,ne.mode,be),ec(Q,re),Q.return=ne,Q)}function oe(ne,Q,re,be){return Q===null||Q.tag!==4||Q.stateNode.containerInfo!==re.containerInfo||Q.stateNode.implementation!==re.implementation?(Q=jp(re,ne.mode,be),Q.return=ne,Q):(Q=p(Q,re.children||[]),Q.return=ne,Q)}function Se(ne,Q,re,be,ct){return Q===null||Q.tag!==7?(Q=yo(re,ne.mode,be,ct),Q.return=ne,Q):(Q=p(Q,re),Q.return=ne,Q)}function Ee(ne,Q,re){if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Q=Wp(""+Q,ne.mode,re),Q.return=ne,Q;if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case x:return re=Yf(Q.type,Q.key,Q.props,null,ne.mode,re),ec(re,Q),re.return=ne,re;case b:return Q=jp(Q,ne.mode,re),Q.return=ne,Q;case T:return Q=To(Q),Ee(ne,Q,re)}if($(Q)||k(Q))return Q=yo(Q,ne.mode,re,null),Q.return=ne,Q;if(typeof Q.then=="function")return Ee(ne,ed(Q),re);if(Q.$$typeof===N)return Ee(ne,Kf(ne,Q),re);td(ne,Q)}return null}function fe(ne,Q,re,be){var ct=Q!==null?Q.key:null;if(typeof re=="string"&&re!==""||typeof re=="number"||typeof re=="bigint")return ct!==null?null:O(ne,Q,""+re,be);if(typeof re=="object"&&re!==null){switch(re.$$typeof){case x:return re.key===ct?j(ne,Q,re,be):null;case b:return re.key===ct?oe(ne,Q,re,be):null;case T:return re=To(re),fe(ne,Q,re,be)}if($(re)||k(re))return ct!==null?null:Se(ne,Q,re,be,null);if(typeof re.then=="function")return fe(ne,Q,ed(re),be);if(re.$$typeof===N)return fe(ne,Q,Kf(ne,re),be);td(ne,re)}return null}function me(ne,Q,re,be,ct){if(typeof be=="string"&&be!==""||typeof be=="number"||typeof be=="bigint")return ne=ne.get(re)||null,O(Q,ne,""+be,ct);if(typeof be=="object"&&be!==null){switch(be.$$typeof){case x:return ne=ne.get(be.key===null?re:be.key)||null,j(Q,ne,be,ct);case b:return ne=ne.get(be.key===null?re:be.key)||null,oe(Q,ne,be,ct);case T:return be=To(be),me(ne,Q,re,be,ct)}if($(be)||k(be))return ne=ne.get(re)||null,Se(Q,ne,be,ct,null);if(typeof be.then=="function")return me(ne,Q,re,ed(be),ct);if(be.$$typeof===N)return me(ne,Q,re,Kf(Q,be),ct);td(Q,be)}return null}function tt(ne,Q,re,be){for(var ct=null,Jt=null,rt=Q,Nt=Q=0,kt=null;rt!==null&&Nt<re.length;Nt++){rt.index>Nt?(kt=rt,rt=null):kt=rt.sibling;var $t=fe(ne,rt,re[Nt],be);if($t===null){rt===null&&(rt=kt);break}n&&rt&&$t.alternate===null&&a(ne,rt),Q=g($t,Q,Nt),Jt===null?ct=$t:Jt.sibling=$t,Jt=$t,rt=kt}if(Nt===re.length)return o(ne,rt),Wt&&Or(ne,Nt),ct;if(rt===null){for(;Nt<re.length;Nt++)rt=Ee(ne,re[Nt],be),rt!==null&&(Q=g(rt,Q,Nt),Jt===null?ct=rt:Jt.sibling=rt,Jt=rt);return Wt&&Or(ne,Nt),ct}for(rt=u(rt);Nt<re.length;Nt++)kt=me(rt,ne,Nt,re[Nt],be),kt!==null&&(n&&kt.alternate!==null&&rt.delete(kt.key===null?Nt:kt.key),Q=g(kt,Q,Nt),Jt===null?ct=kt:Jt.sibling=kt,Jt=kt);return n&&rt.forEach(function(Vs){return a(ne,Vs)}),Wt&&Or(ne,Nt),ct}function ht(ne,Q,re,be){if(re==null)throw Error(i(151));for(var ct=null,Jt=null,rt=Q,Nt=Q=0,kt=null,$t=re.next();rt!==null&&!$t.done;Nt++,$t=re.next()){rt.index>Nt?(kt=rt,rt=null):kt=rt.sibling;var Vs=fe(ne,rt,$t.value,be);if(Vs===null){rt===null&&(rt=kt);break}n&&rt&&Vs.alternate===null&&a(ne,rt),Q=g(Vs,Q,Nt),Jt===null?ct=Vs:Jt.sibling=Vs,Jt=Vs,rt=kt}if($t.done)return o(ne,rt),Wt&&Or(ne,Nt),ct;if(rt===null){for(;!$t.done;Nt++,$t=re.next())$t=Ee(ne,$t.value,be),$t!==null&&(Q=g($t,Q,Nt),Jt===null?ct=$t:Jt.sibling=$t,Jt=$t);return Wt&&Or(ne,Nt),ct}for(rt=u(rt);!$t.done;Nt++,$t=re.next())$t=me(rt,ne,Nt,$t.value,be),$t!==null&&(n&&$t.alternate!==null&&rt.delete($t.key===null?Nt:$t.key),Q=g($t,Q,Nt),Jt===null?ct=$t:Jt.sibling=$t,Jt=$t);return n&&rt.forEach(function(E3){return a(ne,E3)}),Wt&&Or(ne,Nt),ct}function pn(ne,Q,re,be){if(typeof re=="object"&&re!==null&&re.type===M&&re.key===null&&(re=re.props.children),typeof re=="object"&&re!==null){switch(re.$$typeof){case x:e:{for(var ct=re.key;Q!==null;){if(Q.key===ct){if(ct=re.type,ct===M){if(Q.tag===7){o(ne,Q.sibling),be=p(Q,re.props.children),be.return=ne,ne=be;break e}}else if(Q.elementType===ct||typeof ct=="object"&&ct!==null&&ct.$$typeof===T&&To(ct)===Q.type){o(ne,Q.sibling),be=p(Q,re.props),ec(be,re),be.return=ne,ne=be;break e}o(ne,Q);break}else a(ne,Q);Q=Q.sibling}re.type===M?(be=yo(re.props.children,ne.mode,be,re.key),be.return=ne,ne=be):(be=Yf(re.type,re.key,re.props,null,ne.mode,be),ec(be,re),be.return=ne,ne=be)}return E(ne);case b:e:{for(ct=re.key;Q!==null;){if(Q.key===ct)if(Q.tag===4&&Q.stateNode.containerInfo===re.containerInfo&&Q.stateNode.implementation===re.implementation){o(ne,Q.sibling),be=p(Q,re.children||[]),be.return=ne,ne=be;break e}else{o(ne,Q);break}else a(ne,Q);Q=Q.sibling}be=jp(re,ne.mode,be),be.return=ne,ne=be}return E(ne);case T:return re=To(re),pn(ne,Q,re,be)}if($(re))return tt(ne,Q,re,be);if(k(re)){if(ct=k(re),typeof ct!="function")throw Error(i(150));return re=ct.call(re),ht(ne,Q,re,be)}if(typeof re.then=="function")return pn(ne,Q,ed(re),be);if(re.$$typeof===N)return pn(ne,Q,Kf(ne,re),be);td(ne,re)}return typeof re=="string"&&re!==""||typeof re=="number"||typeof re=="bigint"?(re=""+re,Q!==null&&Q.tag===6?(o(ne,Q.sibling),be=p(Q,re),be.return=ne,ne=be):(o(ne,Q),be=Wp(re,ne.mode,be),be.return=ne,ne=be),E(ne)):o(ne,Q)}return function(ne,Q,re,be){try{$u=0;var ct=pn(ne,Q,re,be);return Al=null,ct}catch(rt){if(rt===Tl||rt===Jf)throw rt;var Jt=oa(29,rt,null,ne.mode);return Jt.lanes=be,Jt.return=ne,Jt}}}var Co=ay(!0),ry=ay(!1),Ts=!1;function am(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function rm(n,a){n=n.updateQueue,a.updateQueue===n&&(a.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function As(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function Cs(n,a,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(tn&2)!==0){var p=u.pending;return p===null?a.next=a:(a.next=p.next,p.next=a),u.pending=a,a=jf(n),Vx(n,null,o),a}return Wf(n,u,a,o),jf(n)}function tc(n,a,o){if(a=a.updateQueue,a!==null&&(a=a.shared,(o&4194048)!==0)){var u=a.lanes;u&=n.pendingLanes,o|=u,a.lanes=o,pt(n,o)}}function sm(n,a){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var p=null,g=null;if(o=o.firstBaseUpdate,o!==null){do{var E={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};g===null?p=g=E:g=g.next=E,o=o.next}while(o!==null);g===null?p=g=a:g=g.next=a}else p=g=a;o={baseState:u.baseState,firstBaseUpdate:p,lastBaseUpdate:g,shared:u.shared,callbacks:u.callbacks},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=a:n.next=a,o.lastBaseUpdate=a}var om=!1;function nc(){if(om){var n=El;if(n!==null)throw n}}function ic(n,a,o,u){om=!1;var p=n.updateQueue;Ts=!1;var g=p.firstBaseUpdate,E=p.lastBaseUpdate,O=p.shared.pending;if(O!==null){p.shared.pending=null;var j=O,oe=j.next;j.next=null,E===null?g=oe:E.next=oe,E=j;var Se=n.alternate;Se!==null&&(Se=Se.updateQueue,O=Se.lastBaseUpdate,O!==E&&(O===null?Se.firstBaseUpdate=oe:O.next=oe,Se.lastBaseUpdate=j))}if(g!==null){var Ee=p.baseState;E=0,Se=oe=j=null,O=g;do{var fe=O.lane&-536870913,me=fe!==O.lane;if(me?(Vt&fe)===fe:(u&fe)===fe){fe!==0&&fe===Ml&&(om=!0),Se!==null&&(Se=Se.next={lane:0,tag:O.tag,payload:O.payload,callback:null,next:null});e:{var tt=n,ht=O;fe=a;var pn=o;switch(ht.tag){case 1:if(tt=ht.payload,typeof tt=="function"){Ee=tt.call(pn,Ee,fe);break e}Ee=tt;break e;case 3:tt.flags=tt.flags&-65537|128;case 0:if(tt=ht.payload,fe=typeof tt=="function"?tt.call(pn,Ee,fe):tt,fe==null)break e;Ee=_({},Ee,fe);break e;case 2:Ts=!0}}fe=O.callback,fe!==null&&(n.flags|=64,me&&(n.flags|=8192),me=p.callbacks,me===null?p.callbacks=[fe]:me.push(fe))}else me={lane:fe,tag:O.tag,payload:O.payload,callback:O.callback,next:null},Se===null?(oe=Se=me,j=Ee):Se=Se.next=me,E|=fe;if(O=O.next,O===null){if(O=p.shared.pending,O===null)break;me=O,O=me.next,me.next=null,p.lastBaseUpdate=me,p.shared.pending=null}}while(!0);Se===null&&(j=Ee),p.baseState=j,p.firstBaseUpdate=oe,p.lastBaseUpdate=Se,g===null&&(p.shared.lanes=0),Us|=E,n.lanes=E,n.memoizedState=Ee}}function sy(n,a){if(typeof n!="function")throw Error(i(191,n));n.call(a)}function oy(n,a){var o=n.callbacks;if(o!==null)for(n.callbacks=null,n=0;n<o.length;n++)sy(o[n],a)}var Cl=I(null),nd=I(0);function ly(n,a){n=Wr,le(nd,n),le(Cl,a),Wr=n|a.baseLanes}function lm(){le(nd,Wr),le(Cl,Cl.current)}function um(){Wr=nd.current,W(Cl),W(nd)}var la=I(null),Oa=null;function Rs(n){var a=n.alternate;le(zn,zn.current&1),le(la,n),Oa===null&&(a===null||Cl.current!==null||a.memoizedState!==null)&&(Oa=n)}function cm(n){le(zn,zn.current),le(la,n),Oa===null&&(Oa=n)}function uy(n){n.tag===22?(le(zn,zn.current),le(la,n),Oa===null&&(Oa=n)):ws()}function ws(){le(zn,zn.current),le(la,la.current)}function ua(n){W(la),Oa===n&&(Oa=null),W(zn)}var zn=I(0);function id(n){for(var a=n;a!==null;){if(a.tag===13){var o=a.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||gg(o)||_g(o)))return a}else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var Ir=0,wt=null,dn=null,Yn=null,ad=!1,Rl=!1,Ro=!1,rd=0,ac=0,wl=null,pC=0;function Pn(){throw Error(i(321))}function fm(n,a){if(a===null)return!1;for(var o=0;o<a.length&&o<n.length;o++)if(!sa(n[o],a[o]))return!1;return!0}function dm(n,a,o,u,p,g){return Ir=g,wt=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,F.H=n===null||n.memoizedState===null?jy:Cm,Ro=!1,g=o(u,p),Ro=!1,Rl&&(g=fy(a,o,u,p)),cy(n),g}function cy(n){F.H=oc;var a=dn!==null&&dn.next!==null;if(Ir=0,Yn=dn=wt=null,ad=!1,ac=0,wl=null,a)throw Error(i(300));n===null||qn||(n=n.dependencies,n!==null&&Zf(n)&&(qn=!0))}function fy(n,a,o,u){wt=n;var p=0;do{if(Rl&&(wl=null),ac=0,Rl=!1,25<=p)throw Error(i(301));if(p+=1,Yn=dn=null,n.updateQueue!=null){var g=n.updateQueue;g.lastEffect=null,g.events=null,g.stores=null,g.memoCache!=null&&(g.memoCache.index=0)}F.H=Yy,g=a(o,u)}while(Rl);return g}function mC(){var n=F.H,a=n.useState()[0];return a=typeof a.then=="function"?rc(a):a,n=n.useState()[0],(dn!==null?dn.memoizedState:null)!==n&&(wt.flags|=1024),a}function hm(){var n=rd!==0;return rd=0,n}function pm(n,a,o){a.updateQueue=n.updateQueue,a.flags&=-2053,n.lanes&=~o}function mm(n){if(ad){for(n=n.memoizedState;n!==null;){var a=n.queue;a!==null&&(a.pending=null),n=n.next}ad=!1}Ir=0,Yn=dn=wt=null,Rl=!1,ac=rd=0,wl=null}function Pi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Yn===null?wt.memoizedState=Yn=n:Yn=Yn.next=n,Yn}function Bn(){if(dn===null){var n=wt.alternate;n=n!==null?n.memoizedState:null}else n=dn.next;var a=Yn===null?wt.memoizedState:Yn.next;if(a!==null)Yn=a,dn=n;else{if(n===null)throw wt.alternate===null?Error(i(467)):Error(i(310));dn=n,n={memoizedState:dn.memoizedState,baseState:dn.baseState,baseQueue:dn.baseQueue,queue:dn.queue,next:null},Yn===null?wt.memoizedState=Yn=n:Yn=Yn.next=n}return Yn}function sd(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function rc(n){var a=ac;return ac+=1,wl===null&&(wl=[]),n=ty(wl,n,a),a=wt,(Yn===null?a.memoizedState:Yn.next)===null&&(a=a.alternate,F.H=a===null||a.memoizedState===null?jy:Cm),n}function od(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return rc(n);if(n.$$typeof===N)return pi(n)}throw Error(i(438,String(n)))}function gm(n){var a=null,o=wt.updateQueue;if(o!==null&&(a=o.memoCache),a==null){var u=wt.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(a={data:u.data.map(function(p){return p.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),o===null&&(o=sd(),wt.updateQueue=o),o.memoCache=a,o=a.data[a.index],o===void 0)for(o=a.data[a.index]=Array(n),u=0;u<n;u++)o[u]=q;return a.index++,o}function zr(n,a){return typeof a=="function"?a(n):a}function ld(n){var a=Bn();return _m(a,dn,n)}function _m(n,a,o){var u=n.queue;if(u===null)throw Error(i(311));u.lastRenderedReducer=o;var p=n.baseQueue,g=u.pending;if(g!==null){if(p!==null){var E=p.next;p.next=g.next,g.next=E}a.baseQueue=p=g,u.pending=null}if(g=n.baseState,p===null)n.memoizedState=g;else{a=p.next;var O=E=null,j=null,oe=a,Se=!1;do{var Ee=oe.lane&-536870913;if(Ee!==oe.lane?(Vt&Ee)===Ee:(Ir&Ee)===Ee){var fe=oe.revertLane;if(fe===0)j!==null&&(j=j.next={lane:0,revertLane:0,gesture:null,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null}),Ee===Ml&&(Se=!0);else if((Ir&fe)===fe){oe=oe.next,fe===Ml&&(Se=!0);continue}else Ee={lane:0,revertLane:oe.revertLane,gesture:null,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null},j===null?(O=j=Ee,E=g):j=j.next=Ee,wt.lanes|=fe,Us|=fe;Ee=oe.action,Ro&&o(g,Ee),g=oe.hasEagerState?oe.eagerState:o(g,Ee)}else fe={lane:Ee,revertLane:oe.revertLane,gesture:oe.gesture,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null},j===null?(O=j=fe,E=g):j=j.next=fe,wt.lanes|=Ee,Us|=Ee;oe=oe.next}while(oe!==null&&oe!==a);if(j===null?E=g:j.next=O,!sa(g,n.memoizedState)&&(qn=!0,Se&&(o=El,o!==null)))throw o;n.memoizedState=g,n.baseState=E,n.baseQueue=j,u.lastRenderedState=g}return p===null&&(u.lanes=0),[n.memoizedState,u.dispatch]}function vm(n){var a=Bn(),o=a.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=n;var u=o.dispatch,p=o.pending,g=a.memoizedState;if(p!==null){o.pending=null;var E=p=p.next;do g=n(g,E.action),E=E.next;while(E!==p);sa(g,a.memoizedState)||(qn=!0),a.memoizedState=g,a.baseQueue===null&&(a.baseState=g),o.lastRenderedState=g}return[g,u]}function dy(n,a,o){var u=wt,p=Bn(),g=Wt;if(g){if(o===void 0)throw Error(i(407));o=o()}else o=a();var E=!sa((dn||p).memoizedState,o);if(E&&(p.memoizedState=o,qn=!0),p=p.queue,Sm(my.bind(null,u,p,n),[n]),p.getSnapshot!==a||E||Yn!==null&&Yn.memoizedState.tag&1){if(u.flags|=2048,Dl(9,{destroy:void 0},py.bind(null,u,p,o,a),null),gn===null)throw Error(i(349));g||(Ir&127)!==0||hy(u,a,o)}return o}function hy(n,a,o){n.flags|=16384,n={getSnapshot:a,value:o},a=wt.updateQueue,a===null?(a=sd(),wt.updateQueue=a,a.stores=[n]):(o=a.stores,o===null?a.stores=[n]:o.push(n))}function py(n,a,o,u){a.value=o,a.getSnapshot=u,gy(a)&&_y(n)}function my(n,a,o){return o(function(){gy(a)&&_y(n)})}function gy(n){var a=n.getSnapshot;n=n.value;try{var o=a();return!sa(n,o)}catch{return!0}}function _y(n){var a=xo(n,2);a!==null&&Zi(a,n,2)}function xm(n){var a=Pi();if(typeof n=="function"){var o=n;if(n=o(),Ro){Ge(!0);try{o()}finally{Ge(!1)}}}return a.memoizedState=a.baseState=n,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zr,lastRenderedState:n},a}function vy(n,a,o,u){return n.baseState=o,_m(n,dn,typeof u=="function"?u:zr)}function gC(n,a,o,u,p){if(fd(n))throw Error(i(485));if(n=a.action,n!==null){var g={payload:p,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){g.listeners.push(E)}};F.T!==null?o(!0):g.isTransition=!1,u(g),o=a.pending,o===null?(g.next=a.pending=g,xy(a,g)):(g.next=o.next,a.pending=o.next=g)}}function xy(n,a){var o=a.action,u=a.payload,p=n.state;if(a.isTransition){var g=F.T,E={};F.T=E;try{var O=o(p,u),j=F.S;j!==null&&j(E,O),yy(n,a,O)}catch(oe){ym(n,a,oe)}finally{g!==null&&E.types!==null&&(g.types=E.types),F.T=g}}else try{g=o(p,u),yy(n,a,g)}catch(oe){ym(n,a,oe)}}function yy(n,a,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){Sy(n,a,u)},function(u){return ym(n,a,u)}):Sy(n,a,o)}function Sy(n,a,o){a.status="fulfilled",a.value=o,by(a),n.state=o,a=n.pending,a!==null&&(o=a.next,o===a?n.pending=null:(o=o.next,a.next=o,xy(n,o)))}function ym(n,a,o){var u=n.pending;if(n.pending=null,u!==null){u=u.next;do a.status="rejected",a.reason=o,by(a),a=a.next;while(a!==u)}n.action=null}function by(n){n=n.listeners;for(var a=0;a<n.length;a++)(0,n[a])()}function My(n,a){return a}function Ey(n,a){if(Wt){var o=gn.formState;if(o!==null){e:{var u=wt;if(Wt){if(Mn){t:{for(var p=Mn,g=La;p.nodeType!==8;){if(!g){p=null;break t}if(p=Pa(p.nextSibling),p===null){p=null;break t}}g=p.data,p=g==="F!"||g==="F"?p:null}if(p){Mn=Pa(p.nextSibling),u=p.data==="F!";break e}}Ms(u)}u=!1}u&&(a=o[0])}}return o=Pi(),o.memoizedState=o.baseState=a,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:My,lastRenderedState:a},o.queue=u,o=ky.bind(null,wt,u),u.dispatch=o,u=xm(!1),g=Am.bind(null,wt,!1,u.queue),u=Pi(),p={state:a,dispatch:null,action:n,pending:null},u.queue=p,o=gC.bind(null,wt,p,g,o),p.dispatch=o,u.memoizedState=n,[a,o,!1]}function Ty(n){var a=Bn();return Ay(a,dn,n)}function Ay(n,a,o){if(a=_m(n,a,My)[0],n=ld(zr)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var u=rc(a)}catch(E){throw E===Tl?Jf:E}else u=a;a=Bn();var p=a.queue,g=p.dispatch;return o!==a.memoizedState&&(wt.flags|=2048,Dl(9,{destroy:void 0},_C.bind(null,p,o),null)),[u,g,n]}function _C(n,a){n.action=a}function Cy(n){var a=Bn(),o=dn;if(o!==null)return Ay(a,o,n);Bn(),a=a.memoizedState,o=Bn();var u=o.queue.dispatch;return o.memoizedState=n,[a,u,!1]}function Dl(n,a,o,u){return n={tag:n,create:o,deps:u,inst:a,next:null},a=wt.updateQueue,a===null&&(a=sd(),wt.updateQueue=a),o=a.lastEffect,o===null?a.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,a.lastEffect=n),n}function Ry(){return Bn().memoizedState}function ud(n,a,o,u){var p=Pi();wt.flags|=n,p.memoizedState=Dl(1|a,{destroy:void 0},o,u===void 0?null:u)}function cd(n,a,o,u){var p=Bn();u=u===void 0?null:u;var g=p.memoizedState.inst;dn!==null&&u!==null&&fm(u,dn.memoizedState.deps)?p.memoizedState=Dl(a,g,o,u):(wt.flags|=n,p.memoizedState=Dl(1|a,g,o,u))}function wy(n,a){ud(8390656,8,n,a)}function Sm(n,a){cd(2048,8,n,a)}function vC(n){wt.flags|=4;var a=wt.updateQueue;if(a===null)a=sd(),wt.updateQueue=a,a.events=[n];else{var o=a.events;o===null?a.events=[n]:o.push(n)}}function Dy(n){var a=Bn().memoizedState;return vC({ref:a,nextImpl:n}),function(){if((tn&2)!==0)throw Error(i(440));return a.impl.apply(void 0,arguments)}}function Ny(n,a){return cd(4,2,n,a)}function Uy(n,a){return cd(4,4,n,a)}function Ly(n,a){if(typeof a=="function"){n=n();var o=a(n);return function(){typeof o=="function"?o():a(null)}}if(a!=null)return n=n(),a.current=n,function(){a.current=null}}function Oy(n,a,o){o=o!=null?o.concat([n]):null,cd(4,4,Ly.bind(null,a,n),o)}function bm(){}function Py(n,a){var o=Bn();a=a===void 0?null:a;var u=o.memoizedState;return a!==null&&fm(a,u[1])?u[0]:(o.memoizedState=[n,a],n)}function Fy(n,a){var o=Bn();a=a===void 0?null:a;var u=o.memoizedState;if(a!==null&&fm(a,u[1]))return u[0];if(u=n(),Ro){Ge(!0);try{n()}finally{Ge(!1)}}return o.memoizedState=[u,a],u}function Mm(n,a,o){return o===void 0||(Ir&1073741824)!==0&&(Vt&261930)===0?n.memoizedState=a:(n.memoizedState=o,n=IS(),wt.lanes|=n,Us|=n,o)}function Iy(n,a,o,u){return sa(o,a)?o:Cl.current!==null?(n=Mm(n,o,u),sa(n,a)||(qn=!0),n):(Ir&42)===0||(Ir&1073741824)!==0&&(Vt&261930)===0?(qn=!0,n.memoizedState=o):(n=IS(),wt.lanes|=n,Us|=n,a)}function zy(n,a,o,u,p){var g=z.p;z.p=g!==0&&8>g?g:8;var E=F.T,O={};F.T=O,Am(n,!1,a,o);try{var j=p(),oe=F.S;if(oe!==null&&oe(O,j),j!==null&&typeof j=="object"&&typeof j.then=="function"){var Se=hC(j,u);sc(n,a,Se,da(n))}else sc(n,a,u,da(n))}catch(Ee){sc(n,a,{then:function(){},status:"rejected",reason:Ee},da())}finally{z.p=g,E!==null&&O.types!==null&&(E.types=O.types),F.T=E}}function xC(){}function Em(n,a,o,u){if(n.tag!==5)throw Error(i(476));var p=By(n).queue;zy(n,p,a,ie,o===null?xC:function(){return Hy(n),o(u)})}function By(n){var a=n.memoizedState;if(a!==null)return a;a={memoizedState:ie,baseState:ie,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zr,lastRenderedState:ie},next:null};var o={};return a.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zr,lastRenderedState:o},next:null},n.memoizedState=a,n=n.alternate,n!==null&&(n.memoizedState=a),a}function Hy(n){var a=By(n);a.next===null&&(a=n.alternate.memoizedState),sc(n,a.next.queue,{},da())}function Tm(){return pi(Mc)}function Gy(){return Bn().memoizedState}function Vy(){return Bn().memoizedState}function yC(n){for(var a=n.return;a!==null;){switch(a.tag){case 24:case 3:var o=da();n=As(o);var u=Cs(a,n,o);u!==null&&(Zi(u,a,o),tc(u,a,o)),a={cache:em()},n.payload=a;return}a=a.return}}function SC(n,a,o){var u=da();o={lane:u,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},fd(n)?Xy(a,o):(o=kp(n,a,o,u),o!==null&&(Zi(o,n,u),Wy(o,a,u)))}function ky(n,a,o){var u=da();sc(n,a,o,u)}function sc(n,a,o,u){var p={lane:u,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null};if(fd(n))Xy(a,p);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=a.lastRenderedReducer,g!==null))try{var E=a.lastRenderedState,O=g(E,o);if(p.hasEagerState=!0,p.eagerState=O,sa(O,E))return Wf(n,a,p,0),gn===null&&Xf(),!1}catch{}if(o=kp(n,a,p,u),o!==null)return Zi(o,n,u),Wy(o,a,u),!0}return!1}function Am(n,a,o,u){if(u={lane:2,revertLane:ag(),gesture:null,action:u,hasEagerState:!1,eagerState:null,next:null},fd(n)){if(a)throw Error(i(479))}else a=kp(n,o,u,2),a!==null&&Zi(a,n,2)}function fd(n){var a=n.alternate;return n===wt||a!==null&&a===wt}function Xy(n,a){Rl=ad=!0;var o=n.pending;o===null?a.next=a:(a.next=o.next,o.next=a),n.pending=a}function Wy(n,a,o){if((o&4194048)!==0){var u=a.lanes;u&=n.pendingLanes,o|=u,a.lanes=o,pt(n,o)}}var oc={readContext:pi,use:od,useCallback:Pn,useContext:Pn,useEffect:Pn,useImperativeHandle:Pn,useLayoutEffect:Pn,useInsertionEffect:Pn,useMemo:Pn,useReducer:Pn,useRef:Pn,useState:Pn,useDebugValue:Pn,useDeferredValue:Pn,useTransition:Pn,useSyncExternalStore:Pn,useId:Pn,useHostTransitionStatus:Pn,useFormState:Pn,useActionState:Pn,useOptimistic:Pn,useMemoCache:Pn,useCacheRefresh:Pn};oc.useEffectEvent=Pn;var jy={readContext:pi,use:od,useCallback:function(n,a){return Pi().memoizedState=[n,a===void 0?null:a],n},useContext:pi,useEffect:wy,useImperativeHandle:function(n,a,o){o=o!=null?o.concat([n]):null,ud(4194308,4,Ly.bind(null,a,n),o)},useLayoutEffect:function(n,a){return ud(4194308,4,n,a)},useInsertionEffect:function(n,a){ud(4,2,n,a)},useMemo:function(n,a){var o=Pi();a=a===void 0?null:a;var u=n();if(Ro){Ge(!0);try{n()}finally{Ge(!1)}}return o.memoizedState=[u,a],u},useReducer:function(n,a,o){var u=Pi();if(o!==void 0){var p=o(a);if(Ro){Ge(!0);try{o(a)}finally{Ge(!1)}}}else p=a;return u.memoizedState=u.baseState=p,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:p},u.queue=n,n=n.dispatch=SC.bind(null,wt,n),[u.memoizedState,n]},useRef:function(n){var a=Pi();return n={current:n},a.memoizedState=n},useState:function(n){n=xm(n);var a=n.queue,o=ky.bind(null,wt,a);return a.dispatch=o,[n.memoizedState,o]},useDebugValue:bm,useDeferredValue:function(n,a){var o=Pi();return Mm(o,n,a)},useTransition:function(){var n=xm(!1);return n=zy.bind(null,wt,n.queue,!0,!1),Pi().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,a,o){var u=wt,p=Pi();if(Wt){if(o===void 0)throw Error(i(407));o=o()}else{if(o=a(),gn===null)throw Error(i(349));(Vt&127)!==0||hy(u,a,o)}p.memoizedState=o;var g={value:o,getSnapshot:a};return p.queue=g,wy(my.bind(null,u,g,n),[n]),u.flags|=2048,Dl(9,{destroy:void 0},py.bind(null,u,g,o,a),null),o},useId:function(){var n=Pi(),a=gn.identifierPrefix;if(Wt){var o=ur,u=lr;o=(u&~(1<<32-Ie(u)-1)).toString(32)+o,a="_"+a+"R_"+o,o=rd++,0<o&&(a+="H"+o.toString(32)),a+="_"}else o=pC++,a="_"+a+"r_"+o.toString(32)+"_";return n.memoizedState=a},useHostTransitionStatus:Tm,useFormState:Ey,useActionState:Ey,useOptimistic:function(n){var a=Pi();a.memoizedState=a.baseState=n;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=o,a=Am.bind(null,wt,!0,o),o.dispatch=a,[n,a]},useMemoCache:gm,useCacheRefresh:function(){return Pi().memoizedState=yC.bind(null,wt)},useEffectEvent:function(n){var a=Pi(),o={impl:n};return a.memoizedState=o,function(){if((tn&2)!==0)throw Error(i(440));return o.impl.apply(void 0,arguments)}}},Cm={readContext:pi,use:od,useCallback:Py,useContext:pi,useEffect:Sm,useImperativeHandle:Oy,useInsertionEffect:Ny,useLayoutEffect:Uy,useMemo:Fy,useReducer:ld,useRef:Ry,useState:function(){return ld(zr)},useDebugValue:bm,useDeferredValue:function(n,a){var o=Bn();return Iy(o,dn.memoizedState,n,a)},useTransition:function(){var n=ld(zr)[0],a=Bn().memoizedState;return[typeof n=="boolean"?n:rc(n),a]},useSyncExternalStore:dy,useId:Gy,useHostTransitionStatus:Tm,useFormState:Ty,useActionState:Ty,useOptimistic:function(n,a){var o=Bn();return vy(o,dn,n,a)},useMemoCache:gm,useCacheRefresh:Vy};Cm.useEffectEvent=Dy;var Yy={readContext:pi,use:od,useCallback:Py,useContext:pi,useEffect:Sm,useImperativeHandle:Oy,useInsertionEffect:Ny,useLayoutEffect:Uy,useMemo:Fy,useReducer:vm,useRef:Ry,useState:function(){return vm(zr)},useDebugValue:bm,useDeferredValue:function(n,a){var o=Bn();return dn===null?Mm(o,n,a):Iy(o,dn.memoizedState,n,a)},useTransition:function(){var n=vm(zr)[0],a=Bn().memoizedState;return[typeof n=="boolean"?n:rc(n),a]},useSyncExternalStore:dy,useId:Gy,useHostTransitionStatus:Tm,useFormState:Cy,useActionState:Cy,useOptimistic:function(n,a){var o=Bn();return dn!==null?vy(o,dn,n,a):(o.baseState=n,[n,o.queue.dispatch])},useMemoCache:gm,useCacheRefresh:Vy};Yy.useEffectEvent=Dy;function Rm(n,a,o,u){a=n.memoizedState,o=o(u,a),o=o==null?a:_({},a,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var wm={enqueueSetState:function(n,a,o){n=n._reactInternals;var u=da(),p=As(u);p.payload=a,o!=null&&(p.callback=o),a=Cs(n,p,u),a!==null&&(Zi(a,n,u),tc(a,n,u))},enqueueReplaceState:function(n,a,o){n=n._reactInternals;var u=da(),p=As(u);p.tag=1,p.payload=a,o!=null&&(p.callback=o),a=Cs(n,p,u),a!==null&&(Zi(a,n,u),tc(a,n,u))},enqueueForceUpdate:function(n,a){n=n._reactInternals;var o=da(),u=As(o);u.tag=2,a!=null&&(u.callback=a),a=Cs(n,u,o),a!==null&&(Zi(a,n,o),tc(a,n,o))}};function qy(n,a,o,u,p,g,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,g,E):a.prototype&&a.prototype.isPureReactComponent?!Yu(o,u)||!Yu(p,g):!0}function Zy(n,a,o,u){n=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(o,u),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(o,u),a.state!==n&&wm.enqueueReplaceState(a,a.state,null)}function wo(n,a){var o=a;if("ref"in a){o={};for(var u in a)u!=="ref"&&(o[u]=a[u])}if(n=n.defaultProps){o===a&&(o=_({},o));for(var p in n)o[p]===void 0&&(o[p]=n[p])}return o}function Ky(n){kf(n)}function Qy(n){console.error(n)}function Jy(n){kf(n)}function dd(n,a){try{var o=n.onUncaughtError;o(a.value,{componentStack:a.stack})}catch(u){setTimeout(function(){throw u})}}function $y(n,a,o){try{var u=n.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(p){setTimeout(function(){throw p})}}function Dm(n,a,o){return o=As(o),o.tag=3,o.payload={element:null},o.callback=function(){dd(n,a)},o}function eS(n){return n=As(n),n.tag=3,n}function tS(n,a,o,u){var p=o.type.getDerivedStateFromError;if(typeof p=="function"){var g=u.value;n.payload=function(){return p(g)},n.callback=function(){$y(a,o,u)}}var E=o.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(n.callback=function(){$y(a,o,u),typeof p!="function"&&(Ls===null?Ls=new Set([this]):Ls.add(this));var O=u.stack;this.componentDidCatch(u.value,{componentStack:O!==null?O:""})})}function bC(n,a,o,u,p){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(a=o.alternate,a!==null&&bl(a,o,p,!0),o=la.current,o!==null){switch(o.tag){case 31:case 13:return Oa===null?Ed():o.alternate===null&&Fn===0&&(Fn=3),o.flags&=-257,o.flags|=65536,o.lanes=p,u===$f?o.flags|=16384:(a=o.updateQueue,a===null?o.updateQueue=new Set([u]):a.add(u),tg(n,u,p)),!1;case 22:return o.flags|=65536,u===$f?o.flags|=16384:(a=o.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=a):(o=a.retryQueue,o===null?a.retryQueue=new Set([u]):o.add(u)),tg(n,u,p)),!1}throw Error(i(435,o.tag))}return tg(n,u,p),Ed(),!1}if(Wt)return a=la.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=p,u!==Zp&&(n=Error(i(422),{cause:u}),Ku(Da(n,o)))):(u!==Zp&&(a=Error(i(423),{cause:u}),Ku(Da(a,o))),n=n.current.alternate,n.flags|=65536,p&=-p,n.lanes|=p,u=Da(u,o),p=Dm(n.stateNode,u,p),sm(n,p),Fn!==4&&(Fn=2)),!1;var g=Error(i(520),{cause:u});if(g=Da(g,o),mc===null?mc=[g]:mc.push(g),Fn!==4&&(Fn=2),a===null)return!0;u=Da(u,o),o=a;do{switch(o.tag){case 3:return o.flags|=65536,n=p&-p,o.lanes|=n,n=Dm(o.stateNode,u,n),sm(o,n),!1;case 1:if(a=o.type,g=o.stateNode,(o.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Ls===null||!Ls.has(g))))return o.flags|=65536,p&=-p,o.lanes|=p,p=eS(p),tS(p,n,o,u),sm(o,p),!1}o=o.return}while(o!==null);return!1}var Nm=Error(i(461)),qn=!1;function mi(n,a,o,u){a.child=n===null?ry(a,null,o,u):Co(a,n.child,o,u)}function nS(n,a,o,u,p){o=o.render;var g=a.ref;if("ref"in u){var E={};for(var O in u)O!=="ref"&&(E[O]=u[O])}else E=u;return Mo(a),u=dm(n,a,o,E,g,p),O=hm(),n!==null&&!qn?(pm(n,a,p),Br(n,a,p)):(Wt&&O&&Yp(a),a.flags|=1,mi(n,a,u,p),a.child)}function iS(n,a,o,u,p){if(n===null){var g=o.type;return typeof g=="function"&&!Xp(g)&&g.defaultProps===void 0&&o.compare===null?(a.tag=15,a.type=g,aS(n,a,g,u,p)):(n=Yf(o.type,null,u,a,a.mode,p),n.ref=a.ref,n.return=a,a.child=n)}if(g=n.child,!Bm(n,p)){var E=g.memoizedProps;if(o=o.compare,o=o!==null?o:Yu,o(E,u)&&n.ref===a.ref)return Br(n,a,p)}return a.flags|=1,n=Lr(g,u),n.ref=a.ref,n.return=a,a.child=n}function aS(n,a,o,u,p){if(n!==null){var g=n.memoizedProps;if(Yu(g,u)&&n.ref===a.ref)if(qn=!1,a.pendingProps=u=g,Bm(n,p))(n.flags&131072)!==0&&(qn=!0);else return a.lanes=n.lanes,Br(n,a,p)}return Um(n,a,o,u,p)}function rS(n,a,o,u){var p=u.children,g=n!==null?n.memoizedState:null;if(n===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),u.mode==="hidden"){if((a.flags&128)!==0){if(g=g!==null?g.baseLanes|o:o,n!==null){for(u=a.child=n.child,p=0;u!==null;)p=p|u.lanes|u.childLanes,u=u.sibling;u=p&~g}else u=0,a.child=null;return sS(n,a,g,o,u)}if((o&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},n!==null&&Qf(a,g!==null?g.cachePool:null),g!==null?ly(a,g):lm(),uy(a);else return u=a.lanes=536870912,sS(n,a,g!==null?g.baseLanes|o:o,o,u)}else g!==null?(Qf(a,g.cachePool),ly(a,g),ws(),a.memoizedState=null):(n!==null&&Qf(a,null),lm(),ws());return mi(n,a,p,o),a.child}function lc(n,a){return n!==null&&n.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function sS(n,a,o,u,p){var g=nm();return g=g===null?null:{parent:jn._currentValue,pool:g},a.memoizedState={baseLanes:o,cachePool:g},n!==null&&Qf(a,null),lm(),uy(a),n!==null&&bl(n,a,u,!0),a.childLanes=p,null}function hd(n,a){return a=md({mode:a.mode,children:a.children},n.mode),a.ref=n.ref,n.child=a,a.return=n,a}function oS(n,a,o){return Co(a,n.child,null,o),n=hd(a,a.pendingProps),n.flags|=2,ua(a),a.memoizedState=null,n}function MC(n,a,o){var u=a.pendingProps,p=(a.flags&128)!==0;if(a.flags&=-129,n===null){if(Wt){if(u.mode==="hidden")return n=hd(a,u),a.lanes=536870912,lc(null,n);if(cm(a),(n=Mn)?(n=x1(n,La),n=n!==null&&n.data==="&"?n:null,n!==null&&(a.memoizedState={dehydrated:n,treeContext:Ss!==null?{id:lr,overflow:ur}:null,retryLane:536870912,hydrationErrors:null},o=Xx(n),o.return=a,a.child=o,hi=a,Mn=null)):n=null,n===null)throw Ms(a);return a.lanes=536870912,null}return hd(a,u)}var g=n.memoizedState;if(g!==null){var E=g.dehydrated;if(cm(a),p)if(a.flags&256)a.flags&=-257,a=oS(n,a,o);else if(a.memoizedState!==null)a.child=n.child,a.flags|=128,a=null;else throw Error(i(558));else if(qn||bl(n,a,o,!1),p=(o&n.childLanes)!==0,qn||p){if(u=gn,u!==null&&(E=lt(u,o),E!==0&&E!==g.retryLane))throw g.retryLane=E,xo(n,E),Zi(u,n,E),Nm;Ed(),a=oS(n,a,o)}else n=g.treeContext,Mn=Pa(E.nextSibling),hi=a,Wt=!0,bs=null,La=!1,n!==null&&Yx(a,n),a=hd(a,u),a.flags|=4096;return a}return n=Lr(n.child,{mode:u.mode,children:u.children}),n.ref=a.ref,a.child=n,n.return=a,n}function pd(n,a){var o=a.ref;if(o===null)n!==null&&n.ref!==null&&(a.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(i(284));(n===null||n.ref!==o)&&(a.flags|=4194816)}}function Um(n,a,o,u,p){return Mo(a),o=dm(n,a,o,u,void 0,p),u=hm(),n!==null&&!qn?(pm(n,a,p),Br(n,a,p)):(Wt&&u&&Yp(a),a.flags|=1,mi(n,a,o,p),a.child)}function lS(n,a,o,u,p,g){return Mo(a),a.updateQueue=null,o=fy(a,u,o,p),cy(n),u=hm(),n!==null&&!qn?(pm(n,a,g),Br(n,a,g)):(Wt&&u&&Yp(a),a.flags|=1,mi(n,a,o,g),a.child)}function uS(n,a,o,u,p){if(Mo(a),a.stateNode===null){var g=vl,E=o.contextType;typeof E=="object"&&E!==null&&(g=pi(E)),g=new o(u,g),a.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,g.updater=wm,a.stateNode=g,g._reactInternals=a,g=a.stateNode,g.props=u,g.state=a.memoizedState,g.refs={},am(a),E=o.contextType,g.context=typeof E=="object"&&E!==null?pi(E):vl,g.state=a.memoizedState,E=o.getDerivedStateFromProps,typeof E=="function"&&(Rm(a,o,E,u),g.state=a.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(E=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),E!==g.state&&wm.enqueueReplaceState(g,g.state,null),ic(a,u,g,p),nc(),g.state=a.memoizedState),typeof g.componentDidMount=="function"&&(a.flags|=4194308),u=!0}else if(n===null){g=a.stateNode;var O=a.memoizedProps,j=wo(o,O);g.props=j;var oe=g.context,Se=o.contextType;E=vl,typeof Se=="object"&&Se!==null&&(E=pi(Se));var Ee=o.getDerivedStateFromProps;Se=typeof Ee=="function"||typeof g.getSnapshotBeforeUpdate=="function",O=a.pendingProps!==O,Se||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(O||oe!==E)&&Zy(a,g,u,E),Ts=!1;var fe=a.memoizedState;g.state=fe,ic(a,u,g,p),nc(),oe=a.memoizedState,O||fe!==oe||Ts?(typeof Ee=="function"&&(Rm(a,o,Ee,u),oe=a.memoizedState),(j=Ts||qy(a,o,j,u,fe,oe,E))?(Se||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(a.flags|=4194308)):(typeof g.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=u,a.memoizedState=oe),g.props=u,g.state=oe,g.context=E,u=j):(typeof g.componentDidMount=="function"&&(a.flags|=4194308),u=!1)}else{g=a.stateNode,rm(n,a),E=a.memoizedProps,Se=wo(o,E),g.props=Se,Ee=a.pendingProps,fe=g.context,oe=o.contextType,j=vl,typeof oe=="object"&&oe!==null&&(j=pi(oe)),O=o.getDerivedStateFromProps,(oe=typeof O=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(E!==Ee||fe!==j)&&Zy(a,g,u,j),Ts=!1,fe=a.memoizedState,g.state=fe,ic(a,u,g,p),nc();var me=a.memoizedState;E!==Ee||fe!==me||Ts||n!==null&&n.dependencies!==null&&Zf(n.dependencies)?(typeof O=="function"&&(Rm(a,o,O,u),me=a.memoizedState),(Se=Ts||qy(a,o,Se,u,fe,me,j)||n!==null&&n.dependencies!==null&&Zf(n.dependencies))?(oe||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(u,me,j),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(u,me,j)),typeof g.componentDidUpdate=="function"&&(a.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof g.componentDidUpdate!="function"||E===n.memoizedProps&&fe===n.memoizedState||(a.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||E===n.memoizedProps&&fe===n.memoizedState||(a.flags|=1024),a.memoizedProps=u,a.memoizedState=me),g.props=u,g.state=me,g.context=j,u=Se):(typeof g.componentDidUpdate!="function"||E===n.memoizedProps&&fe===n.memoizedState||(a.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||E===n.memoizedProps&&fe===n.memoizedState||(a.flags|=1024),u=!1)}return g=u,pd(n,a),u=(a.flags&128)!==0,g||u?(g=a.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:g.render(),a.flags|=1,n!==null&&u?(a.child=Co(a,n.child,null,p),a.child=Co(a,null,o,p)):mi(n,a,o,p),a.memoizedState=g.state,n=a.child):n=Br(n,a,p),n}function cS(n,a,o,u){return So(),a.flags|=256,mi(n,a,o,u),a.child}var Lm={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Om(n){return{baseLanes:n,cachePool:$x()}}function Pm(n,a,o){return n=n!==null?n.childLanes&~o:0,a&&(n|=fa),n}function fS(n,a,o){var u=a.pendingProps,p=!1,g=(a.flags&128)!==0,E;if((E=g)||(E=n!==null&&n.memoizedState===null?!1:(zn.current&2)!==0),E&&(p=!0,a.flags&=-129),E=(a.flags&32)!==0,a.flags&=-33,n===null){if(Wt){if(p?Rs(a):ws(),(n=Mn)?(n=x1(n,La),n=n!==null&&n.data!=="&"?n:null,n!==null&&(a.memoizedState={dehydrated:n,treeContext:Ss!==null?{id:lr,overflow:ur}:null,retryLane:536870912,hydrationErrors:null},o=Xx(n),o.return=a,a.child=o,hi=a,Mn=null)):n=null,n===null)throw Ms(a);return _g(n)?a.lanes=32:a.lanes=536870912,null}var O=u.children;return u=u.fallback,p?(ws(),p=a.mode,O=md({mode:"hidden",children:O},p),u=yo(u,p,o,null),O.return=a,u.return=a,O.sibling=u,a.child=O,u=a.child,u.memoizedState=Om(o),u.childLanes=Pm(n,E,o),a.memoizedState=Lm,lc(null,u)):(Rs(a),Fm(a,O))}var j=n.memoizedState;if(j!==null&&(O=j.dehydrated,O!==null)){if(g)a.flags&256?(Rs(a),a.flags&=-257,a=Im(n,a,o)):a.memoizedState!==null?(ws(),a.child=n.child,a.flags|=128,a=null):(ws(),O=u.fallback,p=a.mode,u=md({mode:"visible",children:u.children},p),O=yo(O,p,o,null),O.flags|=2,u.return=a,O.return=a,u.sibling=O,a.child=u,Co(a,n.child,null,o),u=a.child,u.memoizedState=Om(o),u.childLanes=Pm(n,E,o),a.memoizedState=Lm,a=lc(null,u));else if(Rs(a),_g(O)){if(E=O.nextSibling&&O.nextSibling.dataset,E)var oe=E.dgst;E=oe,u=Error(i(419)),u.stack="",u.digest=E,Ku({value:u,source:null,stack:null}),a=Im(n,a,o)}else if(qn||bl(n,a,o,!1),E=(o&n.childLanes)!==0,qn||E){if(E=gn,E!==null&&(u=lt(E,o),u!==0&&u!==j.retryLane))throw j.retryLane=u,xo(n,u),Zi(E,n,u),Nm;gg(O)||Ed(),a=Im(n,a,o)}else gg(O)?(a.flags|=192,a.child=n.child,a=null):(n=j.treeContext,Mn=Pa(O.nextSibling),hi=a,Wt=!0,bs=null,La=!1,n!==null&&Yx(a,n),a=Fm(a,u.children),a.flags|=4096);return a}return p?(ws(),O=u.fallback,p=a.mode,j=n.child,oe=j.sibling,u=Lr(j,{mode:"hidden",children:u.children}),u.subtreeFlags=j.subtreeFlags&65011712,oe!==null?O=Lr(oe,O):(O=yo(O,p,o,null),O.flags|=2),O.return=a,u.return=a,u.sibling=O,a.child=u,lc(null,u),u=a.child,O=n.child.memoizedState,O===null?O=Om(o):(p=O.cachePool,p!==null?(j=jn._currentValue,p=p.parent!==j?{parent:j,pool:j}:p):p=$x(),O={baseLanes:O.baseLanes|o,cachePool:p}),u.memoizedState=O,u.childLanes=Pm(n,E,o),a.memoizedState=Lm,lc(n.child,u)):(Rs(a),o=n.child,n=o.sibling,o=Lr(o,{mode:"visible",children:u.children}),o.return=a,o.sibling=null,n!==null&&(E=a.deletions,E===null?(a.deletions=[n],a.flags|=16):E.push(n)),a.child=o,a.memoizedState=null,o)}function Fm(n,a){return a=md({mode:"visible",children:a},n.mode),a.return=n,n.child=a}function md(n,a){return n=oa(22,n,null,a),n.lanes=0,n}function Im(n,a,o){return Co(a,n.child,null,o),n=Fm(a,a.pendingProps.children),n.flags|=2,a.memoizedState=null,n}function dS(n,a,o){n.lanes|=a;var u=n.alternate;u!==null&&(u.lanes|=a),Jp(n.return,a,o)}function zm(n,a,o,u,p,g){var E=n.memoizedState;E===null?n.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:p,treeForkCount:g}:(E.isBackwards=a,E.rendering=null,E.renderingStartTime=0,E.last=u,E.tail=o,E.tailMode=p,E.treeForkCount=g)}function hS(n,a,o){var u=a.pendingProps,p=u.revealOrder,g=u.tail;u=u.children;var E=zn.current,O=(E&2)!==0;if(O?(E=E&1|2,a.flags|=128):E&=1,le(zn,E),mi(n,a,u,o),u=Wt?Zu:0,!O&&n!==null&&(n.flags&128)!==0)e:for(n=a.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&dS(n,o,a);else if(n.tag===19)dS(n,o,a);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===a)break e;for(;n.sibling===null;){if(n.return===null||n.return===a)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}switch(p){case"forwards":for(o=a.child,p=null;o!==null;)n=o.alternate,n!==null&&id(n)===null&&(p=o),o=o.sibling;o=p,o===null?(p=a.child,a.child=null):(p=o.sibling,o.sibling=null),zm(a,!1,p,o,g,u);break;case"backwards":case"unstable_legacy-backwards":for(o=null,p=a.child,a.child=null;p!==null;){if(n=p.alternate,n!==null&&id(n)===null){a.child=p;break}n=p.sibling,p.sibling=o,o=p,p=n}zm(a,!0,o,null,g,u);break;case"together":zm(a,!1,null,null,void 0,u);break;default:a.memoizedState=null}return a.child}function Br(n,a,o){if(n!==null&&(a.dependencies=n.dependencies),Us|=a.lanes,(o&a.childLanes)===0)if(n!==null){if(bl(n,a,o,!1),(o&a.childLanes)===0)return null}else return null;if(n!==null&&a.child!==n.child)throw Error(i(153));if(a.child!==null){for(n=a.child,o=Lr(n,n.pendingProps),a.child=o,o.return=a;n.sibling!==null;)n=n.sibling,o=o.sibling=Lr(n,n.pendingProps),o.return=a;o.sibling=null}return a.child}function Bm(n,a){return(n.lanes&a)!==0?!0:(n=n.dependencies,!!(n!==null&&Zf(n)))}function EC(n,a,o){switch(a.tag){case 3:Me(a,a.stateNode.containerInfo),Es(a,jn,n.memoizedState.cache),So();break;case 27:case 5:Je(a);break;case 4:Me(a,a.stateNode.containerInfo);break;case 10:Es(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,cm(a),null;break;case 13:var u=a.memoizedState;if(u!==null)return u.dehydrated!==null?(Rs(a),a.flags|=128,null):(o&a.child.childLanes)!==0?fS(n,a,o):(Rs(a),n=Br(n,a,o),n!==null?n.sibling:null);Rs(a);break;case 19:var p=(n.flags&128)!==0;if(u=(o&a.childLanes)!==0,u||(bl(n,a,o,!1),u=(o&a.childLanes)!==0),p){if(u)return hS(n,a,o);a.flags|=128}if(p=a.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),le(zn,zn.current),u)break;return null;case 22:return a.lanes=0,rS(n,a,o,a.pendingProps);case 24:Es(a,jn,n.memoizedState.cache)}return Br(n,a,o)}function pS(n,a,o){if(n!==null)if(n.memoizedProps!==a.pendingProps)qn=!0;else{if(!Bm(n,o)&&(a.flags&128)===0)return qn=!1,EC(n,a,o);qn=(n.flags&131072)!==0}else qn=!1,Wt&&(a.flags&1048576)!==0&&jx(a,Zu,a.index);switch(a.lanes=0,a.tag){case 16:e:{var u=a.pendingProps;if(n=To(a.elementType),a.type=n,typeof n=="function")Xp(n)?(u=wo(n,u),a.tag=1,a=uS(null,a,n,u,o)):(a.tag=0,a=Um(null,a,n,u,o));else{if(n!=null){var p=n.$$typeof;if(p===R){a.tag=11,a=nS(null,a,n,u,o);break e}else if(p===D){a.tag=14,a=iS(null,a,n,u,o);break e}}throw a=ee(n)||n,Error(i(306,a,""))}}return a;case 0:return Um(n,a,a.type,a.pendingProps,o);case 1:return u=a.type,p=wo(u,a.pendingProps),uS(n,a,u,p,o);case 3:e:{if(Me(a,a.stateNode.containerInfo),n===null)throw Error(i(387));u=a.pendingProps;var g=a.memoizedState;p=g.element,rm(n,a),ic(a,u,null,o);var E=a.memoizedState;if(u=E.cache,Es(a,jn,u),u!==g.cache&&$p(a,[jn],o,!0),nc(),u=E.element,g.isDehydrated)if(g={element:u,isDehydrated:!1,cache:E.cache},a.updateQueue.baseState=g,a.memoizedState=g,a.flags&256){a=cS(n,a,u,o);break e}else if(u!==p){p=Da(Error(i(424)),a),Ku(p),a=cS(n,a,u,o);break e}else for(n=a.stateNode.containerInfo,n.nodeType===9?n=n.body:n=n.nodeName==="HTML"?n.ownerDocument.body:n,Mn=Pa(n.firstChild),hi=a,Wt=!0,bs=null,La=!0,o=ry(a,null,u,o),a.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(So(),u===p){a=Br(n,a,o);break e}mi(n,a,u,o)}a=a.child}return a;case 26:return pd(n,a),n===null?(o=T1(a.type,null,a.pendingProps,null))?a.memoizedState=o:Wt||(o=a.type,n=a.pendingProps,u=Nd(te.current).createElement(o),u[Ct]=a,u[St]=n,gi(u,o,n),Z(u),a.stateNode=u):a.memoizedState=T1(a.type,n.memoizedProps,a.pendingProps,n.memoizedState),null;case 27:return Je(a),n===null&&Wt&&(u=a.stateNode=b1(a.type,a.pendingProps,te.current),hi=a,La=!0,p=Mn,Is(a.type)?(vg=p,Mn=Pa(u.firstChild)):Mn=p),mi(n,a,a.pendingProps.children,o),pd(n,a),n===null&&(a.flags|=4194304),a.child;case 5:return n===null&&Wt&&((p=u=Mn)&&(u=e3(u,a.type,a.pendingProps,La),u!==null?(a.stateNode=u,hi=a,Mn=Pa(u.firstChild),La=!1,p=!0):p=!1),p||Ms(a)),Je(a),p=a.type,g=a.pendingProps,E=n!==null?n.memoizedProps:null,u=g.children,hg(p,g)?u=null:E!==null&&hg(p,E)&&(a.flags|=32),a.memoizedState!==null&&(p=dm(n,a,mC,null,null,o),Mc._currentValue=p),pd(n,a),mi(n,a,u,o),a.child;case 6:return n===null&&Wt&&((n=o=Mn)&&(o=t3(o,a.pendingProps,La),o!==null?(a.stateNode=o,hi=a,Mn=null,n=!0):n=!1),n||Ms(a)),null;case 13:return fS(n,a,o);case 4:return Me(a,a.stateNode.containerInfo),u=a.pendingProps,n===null?a.child=Co(a,null,u,o):mi(n,a,u,o),a.child;case 11:return nS(n,a,a.type,a.pendingProps,o);case 7:return mi(n,a,a.pendingProps,o),a.child;case 8:return mi(n,a,a.pendingProps.children,o),a.child;case 12:return mi(n,a,a.pendingProps.children,o),a.child;case 10:return u=a.pendingProps,Es(a,a.type,u.value),mi(n,a,u.children,o),a.child;case 9:return p=a.type._context,u=a.pendingProps.children,Mo(a),p=pi(p),u=u(p),a.flags|=1,mi(n,a,u,o),a.child;case 14:return iS(n,a,a.type,a.pendingProps,o);case 15:return aS(n,a,a.type,a.pendingProps,o);case 19:return hS(n,a,o);case 31:return MC(n,a,o);case 22:return rS(n,a,o,a.pendingProps);case 24:return Mo(a),u=pi(jn),n===null?(p=nm(),p===null&&(p=gn,g=em(),p.pooledCache=g,g.refCount++,g!==null&&(p.pooledCacheLanes|=o),p=g),a.memoizedState={parent:u,cache:p},am(a),Es(a,jn,p)):((n.lanes&o)!==0&&(rm(n,a),ic(a,null,null,o),nc()),p=n.memoizedState,g=a.memoizedState,p.parent!==u?(p={parent:u,cache:u},a.memoizedState=p,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=p),Es(a,jn,u)):(u=g.cache,Es(a,jn,u),u!==p.cache&&$p(a,[jn],o,!0))),mi(n,a,a.pendingProps.children,o),a.child;case 29:throw a.pendingProps}throw Error(i(156,a.tag))}function Hr(n){n.flags|=4}function Hm(n,a,o,u,p){if((a=(n.mode&32)!==0)&&(a=!1),a){if(n.flags|=16777216,(p&335544128)===p)if(n.stateNode.complete)n.flags|=8192;else if(GS())n.flags|=8192;else throw Ao=$f,im}else n.flags&=-16777217}function mS(n,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!D1(a))if(GS())n.flags|=8192;else throw Ao=$f,im}function gd(n,a){a!==null&&(n.flags|=4),n.flags&16384&&(a=n.tag!==22?Xt():536870912,n.lanes|=a,Ol|=a)}function uc(n,a){if(!Wt)switch(n.tailMode){case"hidden":a=n.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?a||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function En(n){var a=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(a)for(var p=n.child;p!==null;)o|=p.lanes|p.childLanes,u|=p.subtreeFlags&65011712,u|=p.flags&65011712,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)o|=p.lanes|p.childLanes,u|=p.subtreeFlags,u|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=u,n.childLanes=o,a}function TC(n,a,o){var u=a.pendingProps;switch(qp(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return En(a),null;case 1:return En(a),null;case 3:return o=a.stateNode,u=null,n!==null&&(u=n.memoizedState.cache),a.memoizedState.cache!==u&&(a.flags|=2048),Fr(jn),Oe(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(n===null||n.child===null)&&(Sl(a)?Hr(a):n===null||n.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,Kp())),En(a),null;case 26:var p=a.type,g=a.memoizedState;return n===null?(Hr(a),g!==null?(En(a),mS(a,g)):(En(a),Hm(a,p,null,u,o))):g?g!==n.memoizedState?(Hr(a),En(a),mS(a,g)):(En(a),a.flags&=-16777217):(n=n.memoizedProps,n!==u&&Hr(a),En(a),Hm(a,p,n,u,o)),null;case 27:if(Ze(a),o=te.current,p=a.type,n!==null&&a.stateNode!=null)n.memoizedProps!==u&&Hr(a);else{if(!u){if(a.stateNode===null)throw Error(i(166));return En(a),null}n=ye.current,Sl(a)?qx(a):(n=b1(p,u,o),a.stateNode=n,Hr(a))}return En(a),null;case 5:if(Ze(a),p=a.type,n!==null&&a.stateNode!=null)n.memoizedProps!==u&&Hr(a);else{if(!u){if(a.stateNode===null)throw Error(i(166));return En(a),null}if(g=ye.current,Sl(a))qx(a);else{var E=Nd(te.current);switch(g){case 1:g=E.createElementNS("http://www.w3.org/2000/svg",p);break;case 2:g=E.createElementNS("http://www.w3.org/1998/Math/MathML",p);break;default:switch(p){case"svg":g=E.createElementNS("http://www.w3.org/2000/svg",p);break;case"math":g=E.createElementNS("http://www.w3.org/1998/Math/MathML",p);break;case"script":g=E.createElement("div"),g.innerHTML="<script><\/script>",g=g.removeChild(g.firstChild);break;case"select":g=typeof u.is=="string"?E.createElement("select",{is:u.is}):E.createElement("select"),u.multiple?g.multiple=!0:u.size&&(g.size=u.size);break;default:g=typeof u.is=="string"?E.createElement(p,{is:u.is}):E.createElement(p)}}g[Ct]=a,g[St]=u;e:for(E=a.child;E!==null;){if(E.tag===5||E.tag===6)g.appendChild(E.stateNode);else if(E.tag!==4&&E.tag!==27&&E.child!==null){E.child.return=E,E=E.child;continue}if(E===a)break e;for(;E.sibling===null;){if(E.return===null||E.return===a)break e;E=E.return}E.sibling.return=E.return,E=E.sibling}a.stateNode=g;e:switch(gi(g,p,u),p){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}u&&Hr(a)}}return En(a),Hm(a,a.type,n===null?null:n.memoizedProps,a.pendingProps,o),null;case 6:if(n&&a.stateNode!=null)n.memoizedProps!==u&&Hr(a);else{if(typeof u!="string"&&a.stateNode===null)throw Error(i(166));if(n=te.current,Sl(a)){if(n=a.stateNode,o=a.memoizedProps,u=null,p=hi,p!==null)switch(p.tag){case 27:case 5:u=p.memoizedProps}n[Ct]=a,n=!!(n.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||f1(n.nodeValue,o)),n||Ms(a,!0)}else n=Nd(n).createTextNode(u),n[Ct]=a,a.stateNode=n}return En(a),null;case 31:if(o=a.memoizedState,n===null||n.memoizedState!==null){if(u=Sl(a),o!==null){if(n===null){if(!u)throw Error(i(318));if(n=a.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(i(557));n[Ct]=a}else So(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;En(a),n=!1}else o=Kp(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=o),n=!0;if(!n)return a.flags&256?(ua(a),a):(ua(a),null);if((a.flags&128)!==0)throw Error(i(558))}return En(a),null;case 13:if(u=a.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(p=Sl(a),u!==null&&u.dehydrated!==null){if(n===null){if(!p)throw Error(i(318));if(p=a.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(i(317));p[Ct]=a}else So(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;En(a),p=!1}else p=Kp(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=p),p=!0;if(!p)return a.flags&256?(ua(a),a):(ua(a),null)}return ua(a),(a.flags&128)!==0?(a.lanes=o,a):(o=u!==null,n=n!==null&&n.memoizedState!==null,o&&(u=a.child,p=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(p=u.alternate.memoizedState.cachePool.pool),g=null,u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(g=u.memoizedState.cachePool.pool),g!==p&&(u.flags|=2048)),o!==n&&o&&(a.child.flags|=8192),gd(a,a.updateQueue),En(a),null);case 4:return Oe(),n===null&&lg(a.stateNode.containerInfo),En(a),null;case 10:return Fr(a.type),En(a),null;case 19:if(W(zn),u=a.memoizedState,u===null)return En(a),null;if(p=(a.flags&128)!==0,g=u.rendering,g===null)if(p)uc(u,!1);else{if(Fn!==0||n!==null&&(n.flags&128)!==0)for(n=a.child;n!==null;){if(g=id(n),g!==null){for(a.flags|=128,uc(u,!1),n=g.updateQueue,a.updateQueue=n,gd(a,n),a.subtreeFlags=0,n=o,o=a.child;o!==null;)kx(o,n),o=o.sibling;return le(zn,zn.current&1|2),Wt&&Or(a,u.treeForkCount),a.child}n=n.sibling}u.tail!==null&&C()>Sd&&(a.flags|=128,p=!0,uc(u,!1),a.lanes=4194304)}else{if(!p)if(n=id(g),n!==null){if(a.flags|=128,p=!0,n=n.updateQueue,a.updateQueue=n,gd(a,n),uc(u,!0),u.tail===null&&u.tailMode==="hidden"&&!g.alternate&&!Wt)return En(a),null}else 2*C()-u.renderingStartTime>Sd&&o!==536870912&&(a.flags|=128,p=!0,uc(u,!1),a.lanes=4194304);u.isBackwards?(g.sibling=a.child,a.child=g):(n=u.last,n!==null?n.sibling=g:a.child=g,u.last=g)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=C(),n.sibling=null,o=zn.current,le(zn,p?o&1|2:o&1),Wt&&Or(a,u.treeForkCount),n):(En(a),null);case 22:case 23:return ua(a),um(),u=a.memoizedState!==null,n!==null?n.memoizedState!==null!==u&&(a.flags|=8192):u&&(a.flags|=8192),u?(o&536870912)!==0&&(a.flags&128)===0&&(En(a),a.subtreeFlags&6&&(a.flags|=8192)):En(a),o=a.updateQueue,o!==null&&gd(a,o.retryQueue),o=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),u=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(u=a.memoizedState.cachePool.pool),u!==o&&(a.flags|=2048),n!==null&&W(Eo),null;case 24:return o=null,n!==null&&(o=n.memoizedState.cache),a.memoizedState.cache!==o&&(a.flags|=2048),Fr(jn),En(a),null;case 25:return null;case 30:return null}throw Error(i(156,a.tag))}function AC(n,a){switch(qp(a),a.tag){case 1:return n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 3:return Fr(jn),Oe(),n=a.flags,(n&65536)!==0&&(n&128)===0?(a.flags=n&-65537|128,a):null;case 26:case 27:case 5:return Ze(a),null;case 31:if(a.memoizedState!==null){if(ua(a),a.alternate===null)throw Error(i(340));So()}return n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 13:if(ua(a),n=a.memoizedState,n!==null&&n.dehydrated!==null){if(a.alternate===null)throw Error(i(340));So()}return n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 19:return W(zn),null;case 4:return Oe(),null;case 10:return Fr(a.type),null;case 22:case 23:return ua(a),um(),n!==null&&W(Eo),n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 24:return Fr(jn),null;case 25:return null;default:return null}}function gS(n,a){switch(qp(a),a.tag){case 3:Fr(jn),Oe();break;case 26:case 27:case 5:Ze(a);break;case 4:Oe();break;case 31:a.memoizedState!==null&&ua(a);break;case 13:ua(a);break;case 19:W(zn);break;case 10:Fr(a.type);break;case 22:case 23:ua(a),um(),n!==null&&W(Eo);break;case 24:Fr(jn)}}function cc(n,a){try{var o=a.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var p=u.next;o=p;do{if((o.tag&n)===n){u=void 0;var g=o.create,E=o.inst;u=g(),E.destroy=u}o=o.next}while(o!==p)}}catch(O){sn(a,a.return,O)}}function Ds(n,a,o){try{var u=a.updateQueue,p=u!==null?u.lastEffect:null;if(p!==null){var g=p.next;u=g;do{if((u.tag&n)===n){var E=u.inst,O=E.destroy;if(O!==void 0){E.destroy=void 0,p=a;var j=o,oe=O;try{oe()}catch(Se){sn(p,j,Se)}}}u=u.next}while(u!==g)}}catch(Se){sn(a,a.return,Se)}}function _S(n){var a=n.updateQueue;if(a!==null){var o=n.stateNode;try{oy(a,o)}catch(u){sn(n,n.return,u)}}}function vS(n,a,o){o.props=wo(n.type,n.memoizedProps),o.state=n.memoizedState;try{o.componentWillUnmount()}catch(u){sn(n,a,u)}}function fc(n,a){try{var o=n.ref;if(o!==null){switch(n.tag){case 26:case 27:case 5:var u=n.stateNode;break;case 30:u=n.stateNode;break;default:u=n.stateNode}typeof o=="function"?n.refCleanup=o(u):o.current=u}}catch(p){sn(n,a,p)}}function cr(n,a){var o=n.ref,u=n.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(p){sn(n,a,p)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(p){sn(n,a,p)}else o.current=null}function xS(n){var a=n.type,o=n.memoizedProps,u=n.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break e;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(p){sn(n,n.return,p)}}function Gm(n,a,o){try{var u=n.stateNode;qC(u,n.type,o,a),u[St]=a}catch(p){sn(n,n.return,p)}}function yS(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&Is(n.type)||n.tag===4}function Vm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||yS(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&Is(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function km(n,a,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,a?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(n,a):(a=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,a.appendChild(n),o=o._reactRootContainer,o!=null||a.onclick!==null||(a.onclick=Nr));else if(u!==4&&(u===27&&Is(n.type)&&(o=n.stateNode,a=null),n=n.child,n!==null))for(km(n,a,o),n=n.sibling;n!==null;)km(n,a,o),n=n.sibling}function _d(n,a,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,a?o.insertBefore(n,a):o.appendChild(n);else if(u!==4&&(u===27&&Is(n.type)&&(o=n.stateNode),n=n.child,n!==null))for(_d(n,a,o),n=n.sibling;n!==null;)_d(n,a,o),n=n.sibling}function SS(n){var a=n.stateNode,o=n.memoizedProps;try{for(var u=n.type,p=a.attributes;p.length;)a.removeAttributeNode(p[0]);gi(a,u,o),a[Ct]=n,a[St]=o}catch(g){sn(n,n.return,g)}}var Gr=!1,Zn=!1,Xm=!1,bS=typeof WeakSet=="function"?WeakSet:Set,li=null;function CC(n,a){if(n=n.containerInfo,fg=zd,n=Ox(n),Ip(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var p=u.anchorOffset,g=u.focusNode;u=u.focusOffset;try{o.nodeType,g.nodeType}catch{o=null;break e}var E=0,O=-1,j=-1,oe=0,Se=0,Ee=n,fe=null;t:for(;;){for(var me;Ee!==o||p!==0&&Ee.nodeType!==3||(O=E+p),Ee!==g||u!==0&&Ee.nodeType!==3||(j=E+u),Ee.nodeType===3&&(E+=Ee.nodeValue.length),(me=Ee.firstChild)!==null;)fe=Ee,Ee=me;for(;;){if(Ee===n)break t;if(fe===o&&++oe===p&&(O=E),fe===g&&++Se===u&&(j=E),(me=Ee.nextSibling)!==null)break;Ee=fe,fe=Ee.parentNode}Ee=me}o=O===-1||j===-1?null:{start:O,end:j}}else o=null}o=o||{start:0,end:0}}else o=null;for(dg={focusedElem:n,selectionRange:o},zd=!1,li=a;li!==null;)if(a=li,n=a.child,(a.subtreeFlags&1028)!==0&&n!==null)n.return=a,li=n;else for(;li!==null;){switch(a=li,g=a.alternate,n=a.flags,a.tag){case 0:if((n&4)!==0&&(n=a.updateQueue,n=n!==null?n.events:null,n!==null))for(o=0;o<n.length;o++)p=n[o],p.ref.impl=p.nextImpl;break;case 11:case 15:break;case 1:if((n&1024)!==0&&g!==null){n=void 0,o=a,p=g.memoizedProps,g=g.memoizedState,u=o.stateNode;try{var tt=wo(o.type,p);n=u.getSnapshotBeforeUpdate(tt,g),u.__reactInternalSnapshotBeforeUpdate=n}catch(ht){sn(o,o.return,ht)}}break;case 3:if((n&1024)!==0){if(n=a.stateNode.containerInfo,o=n.nodeType,o===9)mg(n);else if(o===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":mg(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(i(163))}if(n=a.sibling,n!==null){n.return=a.return,li=n;break}li=a.return}}function MS(n,a,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:kr(n,o),u&4&&cc(5,o);break;case 1:if(kr(n,o),u&4)if(n=o.stateNode,a===null)try{n.componentDidMount()}catch(E){sn(o,o.return,E)}else{var p=wo(o.type,a.memoizedProps);a=a.memoizedState;try{n.componentDidUpdate(p,a,n.__reactInternalSnapshotBeforeUpdate)}catch(E){sn(o,o.return,E)}}u&64&&_S(o),u&512&&fc(o,o.return);break;case 3:if(kr(n,o),u&64&&(n=o.updateQueue,n!==null)){if(a=null,o.child!==null)switch(o.child.tag){case 27:case 5:a=o.child.stateNode;break;case 1:a=o.child.stateNode}try{oy(n,a)}catch(E){sn(o,o.return,E)}}break;case 27:a===null&&u&4&&SS(o);case 26:case 5:kr(n,o),a===null&&u&4&&xS(o),u&512&&fc(o,o.return);break;case 12:kr(n,o);break;case 31:kr(n,o),u&4&&AS(n,o);break;case 13:kr(n,o),u&4&&CS(n,o),u&64&&(n=o.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(o=FC.bind(null,o),n3(n,o))));break;case 22:if(u=o.memoizedState!==null||Gr,!u){a=a!==null&&a.memoizedState!==null||Zn,p=Gr;var g=Zn;Gr=u,(Zn=a)&&!g?Xr(n,o,(o.subtreeFlags&8772)!==0):kr(n,o),Gr=p,Zn=g}break;case 30:break;default:kr(n,o)}}function ES(n){var a=n.alternate;a!==null&&(n.alternate=null,ES(a)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(a=n.stateNode,a!==null&&Nn(a)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var wn=null,Wi=!1;function Vr(n,a,o){for(o=o.child;o!==null;)TS(n,a,o),o=o.sibling}function TS(n,a,o){if(Ae&&typeof Ae.onCommitFiberUnmount=="function")try{Ae.onCommitFiberUnmount(Ce,o)}catch{}switch(o.tag){case 26:Zn||cr(o,a),Vr(n,a,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:Zn||cr(o,a);var u=wn,p=Wi;Is(o.type)&&(wn=o.stateNode,Wi=!1),Vr(n,a,o),yc(o.stateNode),wn=u,Wi=p;break;case 5:Zn||cr(o,a);case 6:if(u=wn,p=Wi,wn=null,Vr(n,a,o),wn=u,Wi=p,wn!==null)if(Wi)try{(wn.nodeType===9?wn.body:wn.nodeName==="HTML"?wn.ownerDocument.body:wn).removeChild(o.stateNode)}catch(g){sn(o,a,g)}else try{wn.removeChild(o.stateNode)}catch(g){sn(o,a,g)}break;case 18:wn!==null&&(Wi?(n=wn,_1(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,o.stateNode),Vl(n)):_1(wn,o.stateNode));break;case 4:u=wn,p=Wi,wn=o.stateNode.containerInfo,Wi=!0,Vr(n,a,o),wn=u,Wi=p;break;case 0:case 11:case 14:case 15:Ds(2,o,a),Zn||Ds(4,o,a),Vr(n,a,o);break;case 1:Zn||(cr(o,a),u=o.stateNode,typeof u.componentWillUnmount=="function"&&vS(o,a,u)),Vr(n,a,o);break;case 21:Vr(n,a,o);break;case 22:Zn=(u=Zn)||o.memoizedState!==null,Vr(n,a,o),Zn=u;break;default:Vr(n,a,o)}}function AS(n,a){if(a.memoizedState===null&&(n=a.alternate,n!==null&&(n=n.memoizedState,n!==null))){n=n.dehydrated;try{Vl(n)}catch(o){sn(a,a.return,o)}}}function CS(n,a){if(a.memoizedState===null&&(n=a.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{Vl(n)}catch(o){sn(a,a.return,o)}}function RC(n){switch(n.tag){case 31:case 13:case 19:var a=n.stateNode;return a===null&&(a=n.stateNode=new bS),a;case 22:return n=n.stateNode,a=n._retryCache,a===null&&(a=n._retryCache=new bS),a;default:throw Error(i(435,n.tag))}}function vd(n,a){var o=RC(n);a.forEach(function(u){if(!o.has(u)){o.add(u);var p=IC.bind(null,n,u);u.then(p,p)}})}function ji(n,a){var o=a.deletions;if(o!==null)for(var u=0;u<o.length;u++){var p=o[u],g=n,E=a,O=E;e:for(;O!==null;){switch(O.tag){case 27:if(Is(O.type)){wn=O.stateNode,Wi=!1;break e}break;case 5:wn=O.stateNode,Wi=!1;break e;case 3:case 4:wn=O.stateNode.containerInfo,Wi=!0;break e}O=O.return}if(wn===null)throw Error(i(160));TS(g,E,p),wn=null,Wi=!1,g=p.alternate,g!==null&&(g.return=null),p.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)RS(a,n),a=a.sibling}var Ka=null;function RS(n,a){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:ji(a,n),Yi(n),u&4&&(Ds(3,n,n.return),cc(3,n),Ds(5,n,n.return));break;case 1:ji(a,n),Yi(n),u&512&&(Zn||o===null||cr(o,o.return)),u&64&&Gr&&(n=n.updateQueue,n!==null&&(u=n.callbacks,u!==null&&(o=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var p=Ka;if(ji(a,n),Yi(n),u&512&&(Zn||o===null||cr(o,o.return)),u&4){var g=o!==null?o.memoizedState:null;if(u=n.memoizedState,o===null)if(u===null)if(n.stateNode===null){e:{u=n.type,o=n.memoizedProps,p=p.ownerDocument||p;t:switch(u){case"title":g=p.getElementsByTagName("title")[0],(!g||g[Sn]||g[Ct]||g.namespaceURI==="http://www.w3.org/2000/svg"||g.hasAttribute("itemprop"))&&(g=p.createElement(u),p.head.insertBefore(g,p.querySelector("head > title"))),gi(g,u,o),g[Ct]=n,Z(g),u=g;break e;case"link":var E=R1("link","href",p).get(u+(o.href||""));if(E){for(var O=0;O<E.length;O++)if(g=E[O],g.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&g.getAttribute("rel")===(o.rel==null?null:o.rel)&&g.getAttribute("title")===(o.title==null?null:o.title)&&g.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){E.splice(O,1);break t}}g=p.createElement(u),gi(g,u,o),p.head.appendChild(g);break;case"meta":if(E=R1("meta","content",p).get(u+(o.content||""))){for(O=0;O<E.length;O++)if(g=E[O],g.getAttribute("content")===(o.content==null?null:""+o.content)&&g.getAttribute("name")===(o.name==null?null:o.name)&&g.getAttribute("property")===(o.property==null?null:o.property)&&g.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&g.getAttribute("charset")===(o.charSet==null?null:o.charSet)){E.splice(O,1);break t}}g=p.createElement(u),gi(g,u,o),p.head.appendChild(g);break;default:throw Error(i(468,u))}g[Ct]=n,Z(g),u=g}n.stateNode=u}else w1(p,n.type,n.stateNode);else n.stateNode=C1(p,u,n.memoizedProps);else g!==u?(g===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):g.count--,u===null?w1(p,n.type,n.stateNode):C1(p,u,n.memoizedProps)):u===null&&n.stateNode!==null&&Gm(n,n.memoizedProps,o.memoizedProps)}break;case 27:ji(a,n),Yi(n),u&512&&(Zn||o===null||cr(o,o.return)),o!==null&&u&4&&Gm(n,n.memoizedProps,o.memoizedProps);break;case 5:if(ji(a,n),Yi(n),u&512&&(Zn||o===null||cr(o,o.return)),n.flags&32){p=n.stateNode;try{Oi(p,"")}catch(tt){sn(n,n.return,tt)}}u&4&&n.stateNode!=null&&(p=n.memoizedProps,Gm(n,p,o!==null?o.memoizedProps:p)),u&1024&&(Xm=!0);break;case 6:if(ji(a,n),Yi(n),u&4){if(n.stateNode===null)throw Error(i(162));u=n.memoizedProps,o=n.stateNode;try{o.nodeValue=u}catch(tt){sn(n,n.return,tt)}}break;case 3:if(Od=null,p=Ka,Ka=Ud(a.containerInfo),ji(a,n),Ka=p,Yi(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{Vl(a.containerInfo)}catch(tt){sn(n,n.return,tt)}Xm&&(Xm=!1,wS(n));break;case 4:u=Ka,Ka=Ud(n.stateNode.containerInfo),ji(a,n),Yi(n),Ka=u;break;case 12:ji(a,n),Yi(n);break;case 31:ji(a,n),Yi(n),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,vd(n,u)));break;case 13:ji(a,n),Yi(n),n.child.flags&8192&&n.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(yd=C()),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,vd(n,u)));break;case 22:p=n.memoizedState!==null;var j=o!==null&&o.memoizedState!==null,oe=Gr,Se=Zn;if(Gr=oe||p,Zn=Se||j,ji(a,n),Zn=Se,Gr=oe,Yi(n),u&8192)e:for(a=n.stateNode,a._visibility=p?a._visibility&-2:a._visibility|1,p&&(o===null||j||Gr||Zn||Do(n)),o=null,a=n;;){if(a.tag===5||a.tag===26){if(o===null){j=o=a;try{if(g=j.stateNode,p)E=g.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{O=j.stateNode;var Ee=j.memoizedProps.style,fe=Ee!=null&&Ee.hasOwnProperty("display")?Ee.display:null;O.style.display=fe==null||typeof fe=="boolean"?"":(""+fe).trim()}}catch(tt){sn(j,j.return,tt)}}}else if(a.tag===6){if(o===null){j=a;try{j.stateNode.nodeValue=p?"":j.memoizedProps}catch(tt){sn(j,j.return,tt)}}}else if(a.tag===18){if(o===null){j=a;try{var me=j.stateNode;p?v1(me,!0):v1(j.stateNode,!1)}catch(tt){sn(j,j.return,tt)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===n)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break e;for(;a.sibling===null;){if(a.return===null||a.return===n)break e;o===a&&(o=null),a=a.return}o===a&&(o=null),a.sibling.return=a.return,a=a.sibling}u&4&&(u=n.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,vd(n,o))));break;case 19:ji(a,n),Yi(n),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,vd(n,u)));break;case 30:break;case 21:break;default:ji(a,n),Yi(n)}}function Yi(n){var a=n.flags;if(a&2){try{for(var o,u=n.return;u!==null;){if(yS(u)){o=u;break}u=u.return}if(o==null)throw Error(i(160));switch(o.tag){case 27:var p=o.stateNode,g=Vm(n);_d(n,g,p);break;case 5:var E=o.stateNode;o.flags&32&&(Oi(E,""),o.flags&=-33);var O=Vm(n);_d(n,O,E);break;case 3:case 4:var j=o.stateNode.containerInfo,oe=Vm(n);km(n,oe,j);break;default:throw Error(i(161))}}catch(Se){sn(n,n.return,Se)}n.flags&=-3}a&4096&&(n.flags&=-4097)}function wS(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var a=n;wS(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),n=n.sibling}}function kr(n,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)MS(n,a.alternate,a),a=a.sibling}function Do(n){for(n=n.child;n!==null;){var a=n;switch(a.tag){case 0:case 11:case 14:case 15:Ds(4,a,a.return),Do(a);break;case 1:cr(a,a.return);var o=a.stateNode;typeof o.componentWillUnmount=="function"&&vS(a,a.return,o),Do(a);break;case 27:yc(a.stateNode);case 26:case 5:cr(a,a.return),Do(a);break;case 22:a.memoizedState===null&&Do(a);break;case 30:Do(a);break;default:Do(a)}n=n.sibling}}function Xr(n,a,o){for(o=o&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var u=a.alternate,p=n,g=a,E=g.flags;switch(g.tag){case 0:case 11:case 15:Xr(p,g,o),cc(4,g);break;case 1:if(Xr(p,g,o),u=g,p=u.stateNode,typeof p.componentDidMount=="function")try{p.componentDidMount()}catch(oe){sn(u,u.return,oe)}if(u=g,p=u.updateQueue,p!==null){var O=u.stateNode;try{var j=p.shared.hiddenCallbacks;if(j!==null)for(p.shared.hiddenCallbacks=null,p=0;p<j.length;p++)sy(j[p],O)}catch(oe){sn(u,u.return,oe)}}o&&E&64&&_S(g),fc(g,g.return);break;case 27:SS(g);case 26:case 5:Xr(p,g,o),o&&u===null&&E&4&&xS(g),fc(g,g.return);break;case 12:Xr(p,g,o);break;case 31:Xr(p,g,o),o&&E&4&&AS(p,g);break;case 13:Xr(p,g,o),o&&E&4&&CS(p,g);break;case 22:g.memoizedState===null&&Xr(p,g,o),fc(g,g.return);break;case 30:break;default:Xr(p,g,o)}a=a.sibling}}function Wm(n,a){var o=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),n=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(n=a.memoizedState.cachePool.pool),n!==o&&(n!=null&&n.refCount++,o!=null&&Qu(o))}function jm(n,a){n=null,a.alternate!==null&&(n=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==n&&(a.refCount++,n!=null&&Qu(n))}function Qa(n,a,o,u){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)DS(n,a,o,u),a=a.sibling}function DS(n,a,o,u){var p=a.flags;switch(a.tag){case 0:case 11:case 15:Qa(n,a,o,u),p&2048&&cc(9,a);break;case 1:Qa(n,a,o,u);break;case 3:Qa(n,a,o,u),p&2048&&(n=null,a.alternate!==null&&(n=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==n&&(a.refCount++,n!=null&&Qu(n)));break;case 12:if(p&2048){Qa(n,a,o,u),n=a.stateNode;try{var g=a.memoizedProps,E=g.id,O=g.onPostCommit;typeof O=="function"&&O(E,a.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(j){sn(a,a.return,j)}}else Qa(n,a,o,u);break;case 31:Qa(n,a,o,u);break;case 13:Qa(n,a,o,u);break;case 23:break;case 22:g=a.stateNode,E=a.alternate,a.memoizedState!==null?g._visibility&2?Qa(n,a,o,u):dc(n,a):g._visibility&2?Qa(n,a,o,u):(g._visibility|=2,Nl(n,a,o,u,(a.subtreeFlags&10256)!==0||!1)),p&2048&&Wm(E,a);break;case 24:Qa(n,a,o,u),p&2048&&jm(a.alternate,a);break;default:Qa(n,a,o,u)}}function Nl(n,a,o,u,p){for(p=p&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var g=n,E=a,O=o,j=u,oe=E.flags;switch(E.tag){case 0:case 11:case 15:Nl(g,E,O,j,p),cc(8,E);break;case 23:break;case 22:var Se=E.stateNode;E.memoizedState!==null?Se._visibility&2?Nl(g,E,O,j,p):dc(g,E):(Se._visibility|=2,Nl(g,E,O,j,p)),p&&oe&2048&&Wm(E.alternate,E);break;case 24:Nl(g,E,O,j,p),p&&oe&2048&&jm(E.alternate,E);break;default:Nl(g,E,O,j,p)}a=a.sibling}}function dc(n,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var o=n,u=a,p=u.flags;switch(u.tag){case 22:dc(o,u),p&2048&&Wm(u.alternate,u);break;case 24:dc(o,u),p&2048&&jm(u.alternate,u);break;default:dc(o,u)}a=a.sibling}}var hc=8192;function Ul(n,a,o){if(n.subtreeFlags&hc)for(n=n.child;n!==null;)NS(n,a,o),n=n.sibling}function NS(n,a,o){switch(n.tag){case 26:Ul(n,a,o),n.flags&hc&&n.memoizedState!==null&&p3(o,Ka,n.memoizedState,n.memoizedProps);break;case 5:Ul(n,a,o);break;case 3:case 4:var u=Ka;Ka=Ud(n.stateNode.containerInfo),Ul(n,a,o),Ka=u;break;case 22:n.memoizedState===null&&(u=n.alternate,u!==null&&u.memoizedState!==null?(u=hc,hc=16777216,Ul(n,a,o),hc=u):Ul(n,a,o));break;default:Ul(n,a,o)}}function US(n){var a=n.alternate;if(a!==null&&(n=a.child,n!==null)){a.child=null;do a=n.sibling,n.sibling=null,n=a;while(n!==null)}}function pc(n){var a=n.deletions;if((n.flags&16)!==0){if(a!==null)for(var o=0;o<a.length;o++){var u=a[o];li=u,OS(u,n)}US(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)LS(n),n=n.sibling}function LS(n){switch(n.tag){case 0:case 11:case 15:pc(n),n.flags&2048&&Ds(9,n,n.return);break;case 3:pc(n);break;case 12:pc(n);break;case 22:var a=n.stateNode;n.memoizedState!==null&&a._visibility&2&&(n.return===null||n.return.tag!==13)?(a._visibility&=-3,xd(n)):pc(n);break;default:pc(n)}}function xd(n){var a=n.deletions;if((n.flags&16)!==0){if(a!==null)for(var o=0;o<a.length;o++){var u=a[o];li=u,OS(u,n)}US(n)}for(n=n.child;n!==null;){switch(a=n,a.tag){case 0:case 11:case 15:Ds(8,a,a.return),xd(a);break;case 22:o=a.stateNode,o._visibility&2&&(o._visibility&=-3,xd(a));break;default:xd(a)}n=n.sibling}}function OS(n,a){for(;li!==null;){var o=li;switch(o.tag){case 0:case 11:case 15:Ds(8,o,a);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:Qu(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,li=u;else e:for(o=n;li!==null;){u=li;var p=u.sibling,g=u.return;if(ES(u),u===o){li=null;break e}if(p!==null){p.return=g,li=p;break e}li=g}}}var wC={getCacheForType:function(n){var a=pi(jn),o=a.data.get(n);return o===void 0&&(o=n(),a.data.set(n,o)),o},cacheSignal:function(){return pi(jn).controller.signal}},DC=typeof WeakMap=="function"?WeakMap:Map,tn=0,gn=null,Bt=null,Vt=0,rn=0,ca=null,Ns=!1,Ll=!1,Ym=!1,Wr=0,Fn=0,Us=0,No=0,qm=0,fa=0,Ol=0,mc=null,qi=null,Zm=!1,yd=0,PS=0,Sd=1/0,bd=null,Ls=null,ni=0,Os=null,Pl=null,jr=0,Km=0,Qm=null,FS=null,gc=0,Jm=null;function da(){return(tn&2)!==0&&Vt!==0?Vt&-Vt:F.T!==null?ag():xt()}function IS(){if(fa===0)if((Vt&536870912)===0||Wt){var n=Re;Re<<=1,(Re&3932160)===0&&(Re=262144),fa=n}else fa=536870912;return n=la.current,n!==null&&(n.flags|=32),fa}function Zi(n,a,o){(n===gn&&(rn===2||rn===9)||n.cancelPendingCommit!==null)&&(Fl(n,0),Ps(n,Vt,fa,!1)),et(n,o),((tn&2)===0||n!==gn)&&(n===gn&&((tn&2)===0&&(No|=o),Fn===4&&Ps(n,Vt,fa,!1)),fr(n))}function zS(n,a,o){if((tn&6)!==0)throw Error(i(327));var u=!o&&(a&127)===0&&(a&n.expiredLanes)===0||We(n,a),p=u?LC(n,a):eg(n,a,!0),g=u;do{if(p===0){Ll&&!u&&Ps(n,a,0,!1);break}else{if(o=n.current.alternate,g&&!NC(o)){p=eg(n,a,!1),g=!1;continue}if(p===2){if(g=a,n.errorRecoveryDisabledLanes&g)var E=0;else E=n.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){a=E;e:{var O=n;p=mc;var j=O.current.memoizedState.isDehydrated;if(j&&(Fl(O,E).flags|=256),E=eg(O,E,!1),E!==2){if(Ym&&!j){O.errorRecoveryDisabledLanes|=g,No|=g,p=4;break e}g=qi,qi=p,g!==null&&(qi===null?qi=g:qi.push.apply(qi,g))}p=E}if(g=!1,p!==2)continue}}if(p===1){Fl(n,0),Ps(n,a,0,!0);break}e:{switch(u=n,g=p,g){case 0:case 1:throw Error(i(345));case 4:if((a&4194048)!==a)break;case 6:Ps(u,a,fa,!Ns);break e;case 2:qi=null;break;case 3:case 5:break;default:throw Error(i(329))}if((a&62914560)===a&&(p=yd+300-C(),10<p)){if(Ps(u,a,fa,!Ns),_e(u,0,!0)!==0)break e;jr=a,u.timeoutHandle=m1(BS.bind(null,u,o,qi,bd,Zm,a,fa,No,Ol,Ns,g,"Throttled",-0,0),p);break e}BS(u,o,qi,bd,Zm,a,fa,No,Ol,Ns,g,null,-0,0)}}break}while(!0);fr(n)}function BS(n,a,o,u,p,g,E,O,j,oe,Se,Ee,fe,me){if(n.timeoutHandle=-1,Ee=a.subtreeFlags,Ee&8192||(Ee&16785408)===16785408){Ee={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Nr},NS(a,g,Ee);var tt=(g&62914560)===g?yd-C():(g&4194048)===g?PS-C():0;if(tt=m3(Ee,tt),tt!==null){jr=g,n.cancelPendingCommit=tt(YS.bind(null,n,a,g,o,u,p,E,O,j,Se,Ee,null,fe,me)),Ps(n,g,E,!oe);return}}YS(n,a,g,o,u,p,E,O,j)}function NC(n){for(var a=n;;){var o=a.tag;if((o===0||o===11||o===15)&&a.flags&16384&&(o=a.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var p=o[u],g=p.getSnapshot;p=p.value;try{if(!sa(g(),p))return!1}catch{return!1}}if(o=a.child,a.subtreeFlags&16384&&o!==null)o.return=a,a=o;else{if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function Ps(n,a,o,u){a&=~qm,a&=~No,n.suspendedLanes|=a,n.pingedLanes&=~a,u&&(n.warmLanes|=a),u=n.expirationTimes;for(var p=a;0<p;){var g=31-Ie(p),E=1<<g;u[g]=-1,p&=~E}o!==0&&Be(n,o,a)}function Md(){return(tn&6)===0?(_c(0),!1):!0}function $m(){if(Bt!==null){if(rn===0)var n=Bt.return;else n=Bt,Pr=bo=null,mm(n),Al=null,$u=0,n=Bt;for(;n!==null;)gS(n.alternate,n),n=n.return;Bt=null}}function Fl(n,a){var o=n.timeoutHandle;o!==-1&&(n.timeoutHandle=-1,QC(o)),o=n.cancelPendingCommit,o!==null&&(n.cancelPendingCommit=null,o()),jr=0,$m(),gn=n,Bt=o=Lr(n.current,null),Vt=a,rn=0,ca=null,Ns=!1,Ll=We(n,a),Ym=!1,Ol=fa=qm=No=Us=Fn=0,qi=mc=null,Zm=!1,(a&8)!==0&&(a|=a&32);var u=n.entangledLanes;if(u!==0)for(n=n.entanglements,u&=a;0<u;){var p=31-Ie(u),g=1<<p;a|=n[p],u&=~g}return Wr=a,Xf(),o}function HS(n,a){wt=null,F.H=oc,a===Tl||a===Jf?(a=ny(),rn=3):a===im?(a=ny(),rn=4):rn=a===Nm?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,ca=a,Bt===null&&(Fn=1,dd(n,Da(a,n.current)))}function GS(){var n=la.current;return n===null?!0:(Vt&4194048)===Vt?Oa===null:(Vt&62914560)===Vt||(Vt&536870912)!==0?n===Oa:!1}function VS(){var n=F.H;return F.H=oc,n===null?oc:n}function kS(){var n=F.A;return F.A=wC,n}function Ed(){Fn=4,Ns||(Vt&4194048)!==Vt&&la.current!==null||(Ll=!0),(Us&134217727)===0&&(No&134217727)===0||gn===null||Ps(gn,Vt,fa,!1)}function eg(n,a,o){var u=tn;tn|=2;var p=VS(),g=kS();(gn!==n||Vt!==a)&&(bd=null,Fl(n,a)),a=!1;var E=Fn;e:do try{if(rn!==0&&Bt!==null){var O=Bt,j=ca;switch(rn){case 8:$m(),E=6;break e;case 3:case 2:case 9:case 6:la.current===null&&(a=!0);var oe=rn;if(rn=0,ca=null,Il(n,O,j,oe),o&&Ll){E=0;break e}break;default:oe=rn,rn=0,ca=null,Il(n,O,j,oe)}}UC(),E=Fn;break}catch(Se){HS(n,Se)}while(!0);return a&&n.shellSuspendCounter++,Pr=bo=null,tn=u,F.H=p,F.A=g,Bt===null&&(gn=null,Vt=0,Xf()),E}function UC(){for(;Bt!==null;)XS(Bt)}function LC(n,a){var o=tn;tn|=2;var u=VS(),p=kS();gn!==n||Vt!==a?(bd=null,Sd=C()+500,Fl(n,a)):Ll=We(n,a);e:do try{if(rn!==0&&Bt!==null){a=Bt;var g=ca;t:switch(rn){case 1:rn=0,ca=null,Il(n,a,g,1);break;case 2:case 9:if(ey(g)){rn=0,ca=null,WS(a);break}a=function(){rn!==2&&rn!==9||gn!==n||(rn=7),fr(n)},g.then(a,a);break e;case 3:rn=7;break e;case 4:rn=5;break e;case 7:ey(g)?(rn=0,ca=null,WS(a)):(rn=0,ca=null,Il(n,a,g,7));break;case 5:var E=null;switch(Bt.tag){case 26:E=Bt.memoizedState;case 5:case 27:var O=Bt;if(E?D1(E):O.stateNode.complete){rn=0,ca=null;var j=O.sibling;if(j!==null)Bt=j;else{var oe=O.return;oe!==null?(Bt=oe,Td(oe)):Bt=null}break t}}rn=0,ca=null,Il(n,a,g,5);break;case 6:rn=0,ca=null,Il(n,a,g,6);break;case 8:$m(),Fn=6;break e;default:throw Error(i(462))}}OC();break}catch(Se){HS(n,Se)}while(!0);return Pr=bo=null,F.H=u,F.A=p,tn=o,Bt!==null?0:(gn=null,Vt=0,Xf(),Fn)}function OC(){for(;Bt!==null&&!je();)XS(Bt)}function XS(n){var a=pS(n.alternate,n,Wr);n.memoizedProps=n.pendingProps,a===null?Td(n):Bt=a}function WS(n){var a=n,o=a.alternate;switch(a.tag){case 15:case 0:a=lS(o,a,a.pendingProps,a.type,void 0,Vt);break;case 11:a=lS(o,a,a.pendingProps,a.type.render,a.ref,Vt);break;case 5:mm(a);default:gS(o,a),a=Bt=kx(a,Wr),a=pS(o,a,Wr)}n.memoizedProps=n.pendingProps,a===null?Td(n):Bt=a}function Il(n,a,o,u){Pr=bo=null,mm(a),Al=null,$u=0;var p=a.return;try{if(bC(n,p,a,o,Vt)){Fn=1,dd(n,Da(o,n.current)),Bt=null;return}}catch(g){if(p!==null)throw Bt=p,g;Fn=1,dd(n,Da(o,n.current)),Bt=null;return}a.flags&32768?(Wt||u===1?n=!0:Ll||(Vt&536870912)!==0?n=!1:(Ns=n=!0,(u===2||u===9||u===3||u===6)&&(u=la.current,u!==null&&u.tag===13&&(u.flags|=16384))),jS(a,n)):Td(a)}function Td(n){var a=n;do{if((a.flags&32768)!==0){jS(a,Ns);return}n=a.return;var o=TC(a.alternate,a,Wr);if(o!==null){Bt=o;return}if(a=a.sibling,a!==null){Bt=a;return}Bt=a=n}while(a!==null);Fn===0&&(Fn=5)}function jS(n,a){do{var o=AC(n.alternate,n);if(o!==null){o.flags&=32767,Bt=o;return}if(o=n.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!a&&(n=n.sibling,n!==null)){Bt=n;return}Bt=n=o}while(n!==null);Fn=6,Bt=null}function YS(n,a,o,u,p,g,E,O,j){n.cancelPendingCommit=null;do Ad();while(ni!==0);if((tn&6)!==0)throw Error(i(327));if(a!==null){if(a===n.current)throw Error(i(177));if(g=a.lanes|a.childLanes,g|=Vp,At(n,o,g,E,O,j),n===gn&&(Bt=gn=null,Vt=0),Pl=a,Os=n,jr=o,Km=g,Qm=p,FS=u,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,zC(pe,function(){return JS(),null})):(n.callbackNode=null,n.callbackPriority=0),u=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||u){u=F.T,F.T=null,p=z.p,z.p=2,E=tn,tn|=4;try{CC(n,a,o)}finally{tn=E,z.p=p,F.T=u}}ni=1,qS(),ZS(),KS()}}function qS(){if(ni===1){ni=0;var n=Os,a=Pl,o=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||o){o=F.T,F.T=null;var u=z.p;z.p=2;var p=tn;tn|=4;try{RS(a,n);var g=dg,E=Ox(n.containerInfo),O=g.focusedElem,j=g.selectionRange;if(E!==O&&O&&O.ownerDocument&&Lx(O.ownerDocument.documentElement,O)){if(j!==null&&Ip(O)){var oe=j.start,Se=j.end;if(Se===void 0&&(Se=oe),"selectionStart"in O)O.selectionStart=oe,O.selectionEnd=Math.min(Se,O.value.length);else{var Ee=O.ownerDocument||document,fe=Ee&&Ee.defaultView||window;if(fe.getSelection){var me=fe.getSelection(),tt=O.textContent.length,ht=Math.min(j.start,tt),pn=j.end===void 0?ht:Math.min(j.end,tt);!me.extend&&ht>pn&&(E=pn,pn=ht,ht=E);var ne=Ux(O,ht),Q=Ux(O,pn);if(ne&&Q&&(me.rangeCount!==1||me.anchorNode!==ne.node||me.anchorOffset!==ne.offset||me.focusNode!==Q.node||me.focusOffset!==Q.offset)){var re=Ee.createRange();re.setStart(ne.node,ne.offset),me.removeAllRanges(),ht>pn?(me.addRange(re),me.extend(Q.node,Q.offset)):(re.setEnd(Q.node,Q.offset),me.addRange(re))}}}}for(Ee=[],me=O;me=me.parentNode;)me.nodeType===1&&Ee.push({element:me,left:me.scrollLeft,top:me.scrollTop});for(typeof O.focus=="function"&&O.focus(),O=0;O<Ee.length;O++){var be=Ee[O];be.element.scrollLeft=be.left,be.element.scrollTop=be.top}}zd=!!fg,dg=fg=null}finally{tn=p,z.p=u,F.T=o}}n.current=a,ni=2}}function ZS(){if(ni===2){ni=0;var n=Os,a=Pl,o=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||o){o=F.T,F.T=null;var u=z.p;z.p=2;var p=tn;tn|=4;try{MS(n,a.alternate,a)}finally{tn=p,z.p=u,F.T=o}}ni=3}}function KS(){if(ni===4||ni===3){ni=0,B();var n=Os,a=Pl,o=jr,u=FS;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?ni=5:(ni=0,Pl=Os=null,QS(n,n.pendingLanes));var p=n.pendingLanes;if(p===0&&(Ls=null),yn(o),a=a.stateNode,Ae&&typeof Ae.onCommitFiberRoot=="function")try{Ae.onCommitFiberRoot(Ce,a,void 0,(a.current.flags&128)===128)}catch{}if(u!==null){a=F.T,p=z.p,z.p=2,F.T=null;try{for(var g=n.onRecoverableError,E=0;E<u.length;E++){var O=u[E];g(O.value,{componentStack:O.stack})}}finally{F.T=a,z.p=p}}(jr&3)!==0&&Ad(),fr(n),p=n.pendingLanes,(o&261930)!==0&&(p&42)!==0?n===Jm?gc++:(gc=0,Jm=n):gc=0,_c(0)}}function QS(n,a){(n.pooledCacheLanes&=a)===0&&(a=n.pooledCache,a!=null&&(n.pooledCache=null,Qu(a)))}function Ad(){return qS(),ZS(),KS(),JS()}function JS(){if(ni!==5)return!1;var n=Os,a=Km;Km=0;var o=yn(jr),u=F.T,p=z.p;try{z.p=32>o?32:o,F.T=null,o=Qm,Qm=null;var g=Os,E=jr;if(ni=0,Pl=Os=null,jr=0,(tn&6)!==0)throw Error(i(331));var O=tn;if(tn|=4,LS(g.current),DS(g,g.current,E,o),tn=O,_c(0,!1),Ae&&typeof Ae.onPostCommitFiberRoot=="function")try{Ae.onPostCommitFiberRoot(Ce,g)}catch{}return!0}finally{z.p=p,F.T=u,QS(n,a)}}function $S(n,a,o){a=Da(o,a),a=Dm(n.stateNode,a,2),n=Cs(n,a,2),n!==null&&(et(n,2),fr(n))}function sn(n,a,o){if(n.tag===3)$S(n,n,o);else for(;a!==null;){if(a.tag===3){$S(a,n,o);break}else if(a.tag===1){var u=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Ls===null||!Ls.has(u))){n=Da(o,n),o=eS(2),u=Cs(a,o,2),u!==null&&(tS(o,u,a,n),et(u,2),fr(u));break}}a=a.return}}function tg(n,a,o){var u=n.pingCache;if(u===null){u=n.pingCache=new DC;var p=new Set;u.set(a,p)}else p=u.get(a),p===void 0&&(p=new Set,u.set(a,p));p.has(o)||(Ym=!0,p.add(o),n=PC.bind(null,n,a,o),a.then(n,n))}function PC(n,a,o){var u=n.pingCache;u!==null&&u.delete(a),n.pingedLanes|=n.suspendedLanes&o,n.warmLanes&=~o,gn===n&&(Vt&o)===o&&(Fn===4||Fn===3&&(Vt&62914560)===Vt&&300>C()-yd?(tn&2)===0&&Fl(n,0):qm|=o,Ol===Vt&&(Ol=0)),fr(n)}function e1(n,a){a===0&&(a=Xt()),n=xo(n,a),n!==null&&(et(n,a),fr(n))}function FC(n){var a=n.memoizedState,o=0;a!==null&&(o=a.retryLane),e1(n,o)}function IC(n,a){var o=0;switch(n.tag){case 31:case 13:var u=n.stateNode,p=n.memoizedState;p!==null&&(o=p.retryLane);break;case 19:u=n.stateNode;break;case 22:u=n.stateNode._retryCache;break;default:throw Error(i(314))}u!==null&&u.delete(a),e1(n,o)}function zC(n,a){return Tt(n,a)}var Cd=null,zl=null,ng=!1,Rd=!1,ig=!1,Fs=0;function fr(n){n!==zl&&n.next===null&&(zl===null?Cd=zl=n:zl=zl.next=n),Rd=!0,ng||(ng=!0,HC())}function _c(n,a){if(!ig&&Rd){ig=!0;do for(var o=!1,u=Cd;u!==null;){if(n!==0){var p=u.pendingLanes;if(p===0)var g=0;else{var E=u.suspendedLanes,O=u.pingedLanes;g=(1<<31-Ie(42|n)+1)-1,g&=p&~(E&~O),g=g&201326741?g&201326741|1:g?g|2:0}g!==0&&(o=!0,a1(u,g))}else g=Vt,g=_e(u,u===gn?g:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(g&3)===0||We(u,g)||(o=!0,a1(u,g));u=u.next}while(o);ig=!1}}function BC(){t1()}function t1(){Rd=ng=!1;var n=0;Fs!==0&&KC()&&(n=Fs);for(var a=C(),o=null,u=Cd;u!==null;){var p=u.next,g=n1(u,a);g===0?(u.next=null,o===null?Cd=p:o.next=p,p===null&&(zl=o)):(o=u,(n!==0||(g&3)!==0)&&(Rd=!0)),u=p}ni!==0&&ni!==5||_c(n),Fs!==0&&(Fs=0)}function n1(n,a){for(var o=n.suspendedLanes,u=n.pingedLanes,p=n.expirationTimes,g=n.pendingLanes&-62914561;0<g;){var E=31-Ie(g),O=1<<E,j=p[E];j===-1?((O&o)===0||(O&u)!==0)&&(p[E]=ut(O,a)):j<=a&&(n.expiredLanes|=O),g&=~O}if(a=gn,o=Vt,o=_e(n,n===a?o:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),u=n.callbackNode,o===0||n===a&&(rn===2||rn===9)||n.cancelPendingCommit!==null)return u!==null&&u!==null&&dt(u),n.callbackNode=null,n.callbackPriority=0;if((o&3)===0||We(n,o)){if(a=o&-o,a===n.callbackPriority)return a;switch(u!==null&&dt(u),yn(o)){case 2:case 8:o=xe;break;case 32:o=pe;break;case 268435456:o=De;break;default:o=pe}return u=i1.bind(null,n),o=Tt(o,u),n.callbackPriority=a,n.callbackNode=o,a}return u!==null&&u!==null&&dt(u),n.callbackPriority=2,n.callbackNode=null,2}function i1(n,a){if(ni!==0&&ni!==5)return n.callbackNode=null,n.callbackPriority=0,null;var o=n.callbackNode;if(Ad()&&n.callbackNode!==o)return null;var u=Vt;return u=_e(n,n===gn?u:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),u===0?null:(zS(n,u,a),n1(n,C()),n.callbackNode!=null&&n.callbackNode===o?i1.bind(null,n):null)}function a1(n,a){if(Ad())return null;zS(n,a,!0)}function HC(){JC(function(){(tn&6)!==0?Tt(ve,BC):t1()})}function ag(){if(Fs===0){var n=Ml;n===0&&(n=Ne,Ne<<=1,(Ne&261888)===0&&(Ne=256)),Fs=n}return Fs}function r1(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Ff(""+n)}function s1(n,a){var o=a.ownerDocument.createElement("input");return o.name=a.name,o.value=a.value,n.id&&o.setAttribute("form",n.id),a.parentNode.insertBefore(o,a),n=new FormData(n),o.parentNode.removeChild(o),n}function GC(n,a,o,u,p){if(a==="submit"&&o&&o.stateNode===p){var g=r1((p[St]||null).action),E=u.submitter;E&&(a=(a=E[St]||null)?r1(a.formAction):E.getAttribute("formAction"),a!==null&&(g=a,E=null));var O=new Hf("action","action",null,u,p);n.push({event:O,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(Fs!==0){var j=E?s1(p,E):new FormData(p);Em(o,{pending:!0,data:j,method:p.method,action:g},null,j)}}else typeof g=="function"&&(O.preventDefault(),j=E?s1(p,E):new FormData(p),Em(o,{pending:!0,data:j,method:p.method,action:g},g,j))},currentTarget:p}]})}}for(var rg=0;rg<Gp.length;rg++){var sg=Gp[rg],VC=sg.toLowerCase(),kC=sg[0].toUpperCase()+sg.slice(1);Za(VC,"on"+kC)}Za(Ix,"onAnimationEnd"),Za(zx,"onAnimationIteration"),Za(Bx,"onAnimationStart"),Za("dblclick","onDoubleClick"),Za("focusin","onFocus"),Za("focusout","onBlur"),Za(rC,"onTransitionRun"),Za(sC,"onTransitionStart"),Za(oC,"onTransitionCancel"),Za(Hx,"onTransitionEnd"),Le("onMouseEnter",["mouseout","mouseover"]),Le("onMouseLeave",["mouseout","mouseover"]),Le("onPointerEnter",["pointerout","pointerover"]),Le("onPointerLeave",["pointerout","pointerover"]),ae("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ae("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ae("onBeforeInput",["compositionend","keypress","textInput","paste"]),ae("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ae("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ae("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),XC=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(vc));function o1(n,a){a=(a&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],p=u.event;u=u.listeners;e:{var g=void 0;if(a)for(var E=u.length-1;0<=E;E--){var O=u[E],j=O.instance,oe=O.currentTarget;if(O=O.listener,j!==g&&p.isPropagationStopped())break e;g=O,p.currentTarget=oe;try{g(p)}catch(Se){kf(Se)}p.currentTarget=null,g=j}else for(E=0;E<u.length;E++){if(O=u[E],j=O.instance,oe=O.currentTarget,O=O.listener,j!==g&&p.isPropagationStopped())break e;g=O,p.currentTarget=oe;try{g(p)}catch(Se){kf(Se)}p.currentTarget=null,g=j}}}}function Ht(n,a){var o=a[kn];o===void 0&&(o=a[kn]=new Set);var u=n+"__bubble";o.has(u)||(l1(a,n,2,!1),o.add(u))}function og(n,a,o){var u=0;a&&(u|=4),l1(o,n,u,a)}var wd="_reactListening"+Math.random().toString(36).slice(2);function lg(n){if(!n[wd]){n[wd]=!0,ce.forEach(function(o){o!=="selectionchange"&&(XC.has(o)||og(o,!1,n),og(o,!0,n))});var a=n.nodeType===9?n:n.ownerDocument;a===null||a[wd]||(a[wd]=!0,og("selectionchange",!1,a))}}function l1(n,a,o,u){switch(I1(a)){case 2:var p=v3;break;case 8:p=x3;break;default:p=Mg}o=p.bind(null,a,o,n),p=void 0,!Rp||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(p=!0),u?p!==void 0?n.addEventListener(a,o,{capture:!0,passive:p}):n.addEventListener(a,o,!0):p!==void 0?n.addEventListener(a,o,{passive:p}):n.addEventListener(a,o,!1)}function ug(n,a,o,u,p){var g=u;if((a&1)===0&&(a&2)===0&&u!==null)e:for(;;){if(u===null)return;var E=u.tag;if(E===3||E===4){var O=u.stateNode.containerInfo;if(O===p)break;if(E===4)for(E=u.return;E!==null;){var j=E.tag;if((j===3||j===4)&&E.stateNode.containerInfo===p)return;E=E.return}for(;O!==null;){if(E=bn(O),E===null)return;if(j=E.tag,j===5||j===6||j===26||j===27){u=g=E;continue e}O=O.parentNode}}u=u.return}hx(function(){var oe=g,Se=Ap(o),Ee=[];e:{var fe=Gx.get(n);if(fe!==void 0){var me=Hf,tt=n;switch(n){case"keypress":if(zf(o)===0)break e;case"keydown":case"keyup":me=I2;break;case"focusin":tt="focus",me=Up;break;case"focusout":tt="blur",me=Up;break;case"beforeblur":case"afterblur":me=Up;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":me=gx;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":me=T2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":me=H2;break;case Ix:case zx:case Bx:me=R2;break;case Hx:me=V2;break;case"scroll":case"scrollend":me=M2;break;case"wheel":me=X2;break;case"copy":case"cut":case"paste":me=D2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":me=vx;break;case"toggle":case"beforetoggle":me=j2}var ht=(a&4)!==0,pn=!ht&&(n==="scroll"||n==="scrollend"),ne=ht?fe!==null?fe+"Capture":null:fe;ht=[];for(var Q=oe,re;Q!==null;){var be=Q;if(re=be.stateNode,be=be.tag,be!==5&&be!==26&&be!==27||re===null||ne===null||(be=Hu(Q,ne),be!=null&&ht.push(xc(Q,be,re))),pn)break;Q=Q.return}0<ht.length&&(fe=new me(fe,tt,null,o,Se),Ee.push({event:fe,listeners:ht}))}}if((a&7)===0){e:{if(fe=n==="mouseover"||n==="pointerover",me=n==="mouseout"||n==="pointerout",fe&&o!==Tp&&(tt=o.relatedTarget||o.fromElement)&&(bn(tt)||tt[zt]))break e;if((me||fe)&&(fe=Se.window===Se?Se:(fe=Se.ownerDocument)?fe.defaultView||fe.parentWindow:window,me?(tt=o.relatedTarget||o.toElement,me=oe,tt=tt?bn(tt):null,tt!==null&&(pn=l(tt),ht=tt.tag,tt!==pn||ht!==5&&ht!==27&&ht!==6)&&(tt=null)):(me=null,tt=oe),me!==tt)){if(ht=gx,be="onMouseLeave",ne="onMouseEnter",Q="mouse",(n==="pointerout"||n==="pointerover")&&(ht=vx,be="onPointerLeave",ne="onPointerEnter",Q="pointer"),pn=me==null?fe:Ra(me),re=tt==null?fe:Ra(tt),fe=new ht(be,Q+"leave",me,o,Se),fe.target=pn,fe.relatedTarget=re,be=null,bn(Se)===oe&&(ht=new ht(ne,Q+"enter",tt,o,Se),ht.target=re,ht.relatedTarget=pn,be=ht),pn=be,me&&tt)t:{for(ht=WC,ne=me,Q=tt,re=0,be=ne;be;be=ht(be))re++;be=0;for(var ct=Q;ct;ct=ht(ct))be++;for(;0<re-be;)ne=ht(ne),re--;for(;0<be-re;)Q=ht(Q),be--;for(;re--;){if(ne===Q||Q!==null&&ne===Q.alternate){ht=ne;break t}ne=ht(ne),Q=ht(Q)}ht=null}else ht=null;me!==null&&u1(Ee,fe,me,ht,!1),tt!==null&&pn!==null&&u1(Ee,pn,tt,ht,!0)}}e:{if(fe=oe?Ra(oe):window,me=fe.nodeName&&fe.nodeName.toLowerCase(),me==="select"||me==="input"&&fe.type==="file")var Jt=Ax;else if(Ex(fe))if(Cx)Jt=nC;else{Jt=eC;var rt=$2}else me=fe.nodeName,!me||me.toLowerCase()!=="input"||fe.type!=="checkbox"&&fe.type!=="radio"?oe&&fl(oe.elementType)&&(Jt=Ax):Jt=tC;if(Jt&&(Jt=Jt(n,oe))){Tx(Ee,Jt,o,Se);break e}rt&&rt(n,fe,oe),n==="focusout"&&oe&&fe.type==="number"&&oe.memoizedProps.value!=null&&Ya(fe,"number",fe.value)}switch(rt=oe?Ra(oe):window,n){case"focusin":(Ex(rt)||rt.contentEditable==="true")&&(ml=rt,zp=oe,qu=null);break;case"focusout":qu=zp=ml=null;break;case"mousedown":Bp=!0;break;case"contextmenu":case"mouseup":case"dragend":Bp=!1,Px(Ee,o,Se);break;case"selectionchange":if(aC)break;case"keydown":case"keyup":Px(Ee,o,Se)}var Nt;if(Op)e:{switch(n){case"compositionstart":var kt="onCompositionStart";break e;case"compositionend":kt="onCompositionEnd";break e;case"compositionupdate":kt="onCompositionUpdate";break e}kt=void 0}else pl?bx(n,o)&&(kt="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(kt="onCompositionStart");kt&&(xx&&o.locale!=="ko"&&(pl||kt!=="onCompositionStart"?kt==="onCompositionEnd"&&pl&&(Nt=px()):(ys=Se,wp="value"in ys?ys.value:ys.textContent,pl=!0)),rt=Dd(oe,kt),0<rt.length&&(kt=new _x(kt,n,null,o,Se),Ee.push({event:kt,listeners:rt}),Nt?kt.data=Nt:(Nt=Mx(o),Nt!==null&&(kt.data=Nt)))),(Nt=q2?Z2(n,o):K2(n,o))&&(kt=Dd(oe,"onBeforeInput"),0<kt.length&&(rt=new _x("onBeforeInput","beforeinput",null,o,Se),Ee.push({event:rt,listeners:kt}),rt.data=Nt)),GC(Ee,n,oe,o,Se)}o1(Ee,a)})}function xc(n,a,o){return{instance:n,listener:a,currentTarget:o}}function Dd(n,a){for(var o=a+"Capture",u=[];n!==null;){var p=n,g=p.stateNode;if(p=p.tag,p!==5&&p!==26&&p!==27||g===null||(p=Hu(n,o),p!=null&&u.unshift(xc(n,p,g)),p=Hu(n,a),p!=null&&u.push(xc(n,p,g))),n.tag===3)return u;n=n.return}return[]}function WC(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function u1(n,a,o,u,p){for(var g=a._reactName,E=[];o!==null&&o!==u;){var O=o,j=O.alternate,oe=O.stateNode;if(O=O.tag,j!==null&&j===u)break;O!==5&&O!==26&&O!==27||oe===null||(j=oe,p?(oe=Hu(o,g),oe!=null&&E.unshift(xc(o,oe,j))):p||(oe=Hu(o,g),oe!=null&&E.push(xc(o,oe,j)))),o=o.return}E.length!==0&&n.push({event:a,listeners:E})}var jC=/\r\n?/g,YC=/\u0000|\uFFFD/g;function c1(n){return(typeof n=="string"?n:""+n).replace(jC,`
`).replace(YC,"")}function f1(n,a){return a=c1(a),c1(n)===a}function hn(n,a,o,u,p,g){switch(o){case"children":typeof u=="string"?a==="body"||a==="textarea"&&u===""||Oi(n,u):(typeof u=="number"||typeof u=="bigint")&&a!=="body"&&Oi(n,""+u);break;case"className":bt(n,"class",u);break;case"tabIndex":bt(n,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":bt(n,o,u);break;case"style":Dr(n,u,g);break;case"data":if(a!=="object"){bt(n,"data",u);break}case"src":case"href":if(u===""&&(a!=="a"||o!=="href")){n.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(o);break}u=Ff(""+u),n.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){n.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof g=="function"&&(o==="formAction"?(a!=="input"&&hn(n,a,"name",p.name,p,null),hn(n,a,"formEncType",p.formEncType,p,null),hn(n,a,"formMethod",p.formMethod,p,null),hn(n,a,"formTarget",p.formTarget,p,null)):(hn(n,a,"encType",p.encType,p,null),hn(n,a,"method",p.method,p,null),hn(n,a,"target",p.target,p,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(o);break}u=Ff(""+u),n.setAttribute(o,u);break;case"onClick":u!=null&&(n.onclick=Nr);break;case"onScroll":u!=null&&Ht("scroll",n);break;case"onScrollEnd":u!=null&&Ht("scrollend",n);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(i(61));if(o=u.__html,o!=null){if(p.children!=null)throw Error(i(60));n.innerHTML=o}}break;case"multiple":n.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":n.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){n.removeAttribute("xlink:href");break}o=Ff(""+u),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,""+u):n.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,""):n.removeAttribute(o);break;case"capture":case"download":u===!0?n.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,u):n.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?n.setAttribute(o,u):n.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?n.removeAttribute(o):n.setAttribute(o,u);break;case"popover":Ht("beforetoggle",n),Ht("toggle",n),_t(n,"popover",u);break;case"xlinkActuate":$e(n,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":$e(n,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":$e(n,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":$e(n,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":$e(n,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":$e(n,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":$e(n,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":$e(n,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":$e(n,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":_t(n,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=S2.get(o)||o,_t(n,o,u))}}function cg(n,a,o,u,p,g){switch(o){case"style":Dr(n,u,g);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(i(61));if(o=u.__html,o!=null){if(p.children!=null)throw Error(i(60));n.innerHTML=o}}break;case"children":typeof u=="string"?Oi(n,u):(typeof u=="number"||typeof u=="bigint")&&Oi(n,""+u);break;case"onScroll":u!=null&&Ht("scroll",n);break;case"onScrollEnd":u!=null&&Ht("scrollend",n);break;case"onClick":u!=null&&(n.onclick=Nr);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!se.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(p=o.endsWith("Capture"),a=o.slice(2,p?o.length-7:void 0),g=n[St]||null,g=g!=null?g[o]:null,typeof g=="function"&&n.removeEventListener(a,g,p),typeof u=="function")){typeof g!="function"&&g!==null&&(o in n?n[o]=null:n.hasAttribute(o)&&n.removeAttribute(o)),n.addEventListener(a,u,p);break e}o in n?n[o]=u:u===!0?n.setAttribute(o,""):_t(n,o,u)}}}function gi(n,a,o){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ht("error",n),Ht("load",n);var u=!1,p=!1,g;for(g in o)if(o.hasOwnProperty(g)){var E=o[g];if(E!=null)switch(g){case"src":u=!0;break;case"srcSet":p=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,a));default:hn(n,a,g,E,o,null)}}p&&hn(n,a,"srcSet",o.srcSet,o,null),u&&hn(n,a,"src",o.src,o,null);return;case"input":Ht("invalid",n);var O=g=E=p=null,j=null,oe=null;for(u in o)if(o.hasOwnProperty(u)){var Se=o[u];if(Se!=null)switch(u){case"name":p=Se;break;case"type":E=Se;break;case"checked":j=Se;break;case"defaultChecked":oe=Se;break;case"value":g=Se;break;case"defaultValue":O=Se;break;case"children":case"dangerouslySetInnerHTML":if(Se!=null)throw Error(i(137,a));break;default:hn(n,a,u,Se,o,null)}}aa(n,g,O,j,oe,E,p,!1);return;case"select":Ht("invalid",n),u=E=g=null;for(p in o)if(o.hasOwnProperty(p)&&(O=o[p],O!=null))switch(p){case"value":g=O;break;case"defaultValue":E=O;break;case"multiple":u=O;default:hn(n,a,p,O,o,null)}a=g,o=E,n.multiple=!!u,a!=null?ra(n,!!u,a,!1):o!=null&&ra(n,!!u,o,!0);return;case"textarea":Ht("invalid",n),g=p=u=null;for(E in o)if(o.hasOwnProperty(E)&&(O=o[E],O!=null))switch(E){case"value":u=O;break;case"defaultValue":p=O;break;case"children":g=O;break;case"dangerouslySetInnerHTML":if(O!=null)throw Error(i(91));break;default:hn(n,a,E,O,o,null)}Xn(n,u,p,g);return;case"option":for(j in o)o.hasOwnProperty(j)&&(u=o[j],u!=null)&&(j==="selected"?n.selected=u&&typeof u!="function"&&typeof u!="symbol":hn(n,a,j,u,o,null));return;case"dialog":Ht("beforetoggle",n),Ht("toggle",n),Ht("cancel",n),Ht("close",n);break;case"iframe":case"object":Ht("load",n);break;case"video":case"audio":for(u=0;u<vc.length;u++)Ht(vc[u],n);break;case"image":Ht("error",n),Ht("load",n);break;case"details":Ht("toggle",n);break;case"embed":case"source":case"link":Ht("error",n),Ht("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(oe in o)if(o.hasOwnProperty(oe)&&(u=o[oe],u!=null))switch(oe){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,a));default:hn(n,a,oe,u,o,null)}return;default:if(fl(a)){for(Se in o)o.hasOwnProperty(Se)&&(u=o[Se],u!==void 0&&cg(n,a,Se,u,o,void 0));return}}for(O in o)o.hasOwnProperty(O)&&(u=o[O],u!=null&&hn(n,a,O,u,o,null))}function qC(n,a,o,u){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var p=null,g=null,E=null,O=null,j=null,oe=null,Se=null;for(me in o){var Ee=o[me];if(o.hasOwnProperty(me)&&Ee!=null)switch(me){case"checked":break;case"value":break;case"defaultValue":j=Ee;default:u.hasOwnProperty(me)||hn(n,a,me,null,u,Ee)}}for(var fe in u){var me=u[fe];if(Ee=o[fe],u.hasOwnProperty(fe)&&(me!=null||Ee!=null))switch(fe){case"type":g=me;break;case"name":p=me;break;case"checked":oe=me;break;case"defaultChecked":Se=me;break;case"value":E=me;break;case"defaultValue":O=me;break;case"children":case"dangerouslySetInnerHTML":if(me!=null)throw Error(i(137,a));break;default:me!==Ee&&hn(n,a,fe,me,u,Ee)}}Li(n,E,O,j,oe,Se,g,p);return;case"select":me=E=O=fe=null;for(g in o)if(j=o[g],o.hasOwnProperty(g)&&j!=null)switch(g){case"value":break;case"multiple":me=j;default:u.hasOwnProperty(g)||hn(n,a,g,null,u,j)}for(p in u)if(g=u[p],j=o[p],u.hasOwnProperty(p)&&(g!=null||j!=null))switch(p){case"value":fe=g;break;case"defaultValue":O=g;break;case"multiple":E=g;default:g!==j&&hn(n,a,p,g,u,j)}a=O,o=E,u=me,fe!=null?ra(n,!!o,fe,!1):!!u!=!!o&&(a!=null?ra(n,!!o,a,!0):ra(n,!!o,o?[]:"",!1));return;case"textarea":me=fe=null;for(O in o)if(p=o[O],o.hasOwnProperty(O)&&p!=null&&!u.hasOwnProperty(O))switch(O){case"value":break;case"children":break;default:hn(n,a,O,null,u,p)}for(E in u)if(p=u[E],g=o[E],u.hasOwnProperty(E)&&(p!=null||g!=null))switch(E){case"value":fe=p;break;case"defaultValue":me=p;break;case"children":break;case"dangerouslySetInnerHTML":if(p!=null)throw Error(i(91));break;default:p!==g&&hn(n,a,E,p,u,g)}nn(n,fe,me);return;case"option":for(var tt in o)fe=o[tt],o.hasOwnProperty(tt)&&fe!=null&&!u.hasOwnProperty(tt)&&(tt==="selected"?n.selected=!1:hn(n,a,tt,null,u,fe));for(j in u)fe=u[j],me=o[j],u.hasOwnProperty(j)&&fe!==me&&(fe!=null||me!=null)&&(j==="selected"?n.selected=fe&&typeof fe!="function"&&typeof fe!="symbol":hn(n,a,j,fe,u,me));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ht in o)fe=o[ht],o.hasOwnProperty(ht)&&fe!=null&&!u.hasOwnProperty(ht)&&hn(n,a,ht,null,u,fe);for(oe in u)if(fe=u[oe],me=o[oe],u.hasOwnProperty(oe)&&fe!==me&&(fe!=null||me!=null))switch(oe){case"children":case"dangerouslySetInnerHTML":if(fe!=null)throw Error(i(137,a));break;default:hn(n,a,oe,fe,u,me)}return;default:if(fl(a)){for(var pn in o)fe=o[pn],o.hasOwnProperty(pn)&&fe!==void 0&&!u.hasOwnProperty(pn)&&cg(n,a,pn,void 0,u,fe);for(Se in u)fe=u[Se],me=o[Se],!u.hasOwnProperty(Se)||fe===me||fe===void 0&&me===void 0||cg(n,a,Se,fe,u,me);return}}for(var ne in o)fe=o[ne],o.hasOwnProperty(ne)&&fe!=null&&!u.hasOwnProperty(ne)&&hn(n,a,ne,null,u,fe);for(Ee in u)fe=u[Ee],me=o[Ee],!u.hasOwnProperty(Ee)||fe===me||fe==null&&me==null||hn(n,a,Ee,fe,u,me)}function d1(n){switch(n){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ZC(){if(typeof performance.getEntriesByType=="function"){for(var n=0,a=0,o=performance.getEntriesByType("resource"),u=0;u<o.length;u++){var p=o[u],g=p.transferSize,E=p.initiatorType,O=p.duration;if(g&&O&&d1(E)){for(E=0,O=p.responseEnd,u+=1;u<o.length;u++){var j=o[u],oe=j.startTime;if(oe>O)break;var Se=j.transferSize,Ee=j.initiatorType;Se&&d1(Ee)&&(j=j.responseEnd,E+=Se*(j<O?1:(O-oe)/(j-oe)))}if(--u,a+=8*(g+E)/(p.duration/1e3),n++,10<n)break}}if(0<n)return a/n/1e6}return navigator.connection&&(n=navigator.connection.downlink,typeof n=="number")?n:5}var fg=null,dg=null;function Nd(n){return n.nodeType===9?n:n.ownerDocument}function h1(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function p1(n,a){if(n===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&a==="foreignObject"?0:n}function hg(n,a){return n==="textarea"||n==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var pg=null;function KC(){var n=window.event;return n&&n.type==="popstate"?n===pg?!1:(pg=n,!0):(pg=null,!1)}var m1=typeof setTimeout=="function"?setTimeout:void 0,QC=typeof clearTimeout=="function"?clearTimeout:void 0,g1=typeof Promise=="function"?Promise:void 0,JC=typeof queueMicrotask=="function"?queueMicrotask:typeof g1<"u"?function(n){return g1.resolve(null).then(n).catch($C)}:m1;function $C(n){setTimeout(function(){throw n})}function Is(n){return n==="head"}function _1(n,a){var o=a,u=0;do{var p=o.nextSibling;if(n.removeChild(o),p&&p.nodeType===8)if(o=p.data,o==="/$"||o==="/&"){if(u===0){n.removeChild(p),Vl(a);return}u--}else if(o==="$"||o==="$?"||o==="$~"||o==="$!"||o==="&")u++;else if(o==="html")yc(n.ownerDocument.documentElement);else if(o==="head"){o=n.ownerDocument.head,yc(o);for(var g=o.firstChild;g;){var E=g.nextSibling,O=g.nodeName;g[Sn]||O==="SCRIPT"||O==="STYLE"||O==="LINK"&&g.rel.toLowerCase()==="stylesheet"||o.removeChild(g),g=E}}else o==="body"&&yc(n.ownerDocument.body);o=p}while(o);Vl(a)}function v1(n,a){var o=n;n=0;do{var u=o.nextSibling;if(o.nodeType===1?a?(o._stashedDisplay=o.style.display,o.style.display="none"):(o.style.display=o._stashedDisplay||"",o.getAttribute("style")===""&&o.removeAttribute("style")):o.nodeType===3&&(a?(o._stashedText=o.nodeValue,o.nodeValue=""):o.nodeValue=o._stashedText||""),u&&u.nodeType===8)if(o=u.data,o==="/$"){if(n===0)break;n--}else o!=="$"&&o!=="$?"&&o!=="$~"&&o!=="$!"||n++;o=u}while(o)}function mg(n){var a=n.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var o=a;switch(a=a.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":mg(o),Nn(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}n.removeChild(o)}}function e3(n,a,o,u){for(;n.nodeType===1;){var p=o;if(n.nodeName.toLowerCase()!==a.toLowerCase()){if(!u&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(u){if(!n[Sn])switch(a){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(g=n.getAttribute("rel"),g==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(g!==p.rel||n.getAttribute("href")!==(p.href==null||p.href===""?null:p.href)||n.getAttribute("crossorigin")!==(p.crossOrigin==null?null:p.crossOrigin)||n.getAttribute("title")!==(p.title==null?null:p.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(g=n.getAttribute("src"),(g!==(p.src==null?null:p.src)||n.getAttribute("type")!==(p.type==null?null:p.type)||n.getAttribute("crossorigin")!==(p.crossOrigin==null?null:p.crossOrigin))&&g&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(a==="input"&&n.type==="hidden"){var g=p.name==null?null:""+p.name;if(p.type==="hidden"&&n.getAttribute("name")===g)return n}else return n;if(n=Pa(n.nextSibling),n===null)break}return null}function t3(n,a,o){if(a==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!o||(n=Pa(n.nextSibling),n===null))return null;return n}function x1(n,a){for(;n.nodeType!==8;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!a||(n=Pa(n.nextSibling),n===null))return null;return n}function gg(n){return n.data==="$?"||n.data==="$~"}function _g(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState!=="loading"}function n3(n,a){var o=n.ownerDocument;if(n.data==="$~")n._reactRetry=a;else if(n.data!=="$?"||o.readyState!=="loading")a();else{var u=function(){a(),o.removeEventListener("DOMContentLoaded",u)};o.addEventListener("DOMContentLoaded",u),n._reactRetry=u}}function Pa(n){for(;n!=null;n=n.nextSibling){var a=n.nodeType;if(a===1||a===3)break;if(a===8){if(a=n.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return n}var vg=null;function y1(n){n=n.nextSibling;for(var a=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"||o==="/&"){if(a===0)return Pa(n.nextSibling);a--}else o!=="$"&&o!=="$!"&&o!=="$?"&&o!=="$~"&&o!=="&"||a++}n=n.nextSibling}return null}function S1(n){n=n.previousSibling;for(var a=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"||o==="$~"||o==="&"){if(a===0)return n;a--}else o!=="/$"&&o!=="/&"||a++}n=n.previousSibling}return null}function b1(n,a,o){switch(a=Nd(o),n){case"html":if(n=a.documentElement,!n)throw Error(i(452));return n;case"head":if(n=a.head,!n)throw Error(i(453));return n;case"body":if(n=a.body,!n)throw Error(i(454));return n;default:throw Error(i(451))}}function yc(n){for(var a=n.attributes;a.length;)n.removeAttributeNode(a[0]);Nn(n)}var Fa=new Map,M1=new Set;function Ud(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var Yr=z.d;z.d={f:i3,r:a3,D:r3,C:s3,L:o3,m:l3,X:c3,S:u3,M:f3};function i3(){var n=Yr.f(),a=Md();return n||a}function a3(n){var a=Si(n);a!==null&&a.tag===5&&a.type==="form"?Hy(a):Yr.r(n)}var Bl=typeof document>"u"?null:document;function E1(n,a,o){var u=Bl;if(u&&typeof a=="string"&&a){var p=yt(a);p='link[rel="'+n+'"][href="'+p+'"]',typeof o=="string"&&(p+='[crossorigin="'+o+'"]'),M1.has(p)||(M1.add(p),n={rel:n,crossOrigin:o,href:a},u.querySelector(p)===null&&(a=u.createElement("link"),gi(a,"link",n),Z(a),u.head.appendChild(a)))}}function r3(n){Yr.D(n),E1("dns-prefetch",n,null)}function s3(n,a){Yr.C(n,a),E1("preconnect",n,a)}function o3(n,a,o){Yr.L(n,a,o);var u=Bl;if(u&&n&&a){var p='link[rel="preload"][as="'+yt(a)+'"]';a==="image"&&o&&o.imageSrcSet?(p+='[imagesrcset="'+yt(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(p+='[imagesizes="'+yt(o.imageSizes)+'"]')):p+='[href="'+yt(n)+'"]';var g=p;switch(a){case"style":g=Hl(n);break;case"script":g=Gl(n)}Fa.has(g)||(n=_({rel:"preload",href:a==="image"&&o&&o.imageSrcSet?void 0:n,as:a},o),Fa.set(g,n),u.querySelector(p)!==null||a==="style"&&u.querySelector(Sc(g))||a==="script"&&u.querySelector(bc(g))||(a=u.createElement("link"),gi(a,"link",n),Z(a),u.head.appendChild(a)))}}function l3(n,a){Yr.m(n,a);var o=Bl;if(o&&n){var u=a&&typeof a.as=="string"?a.as:"script",p='link[rel="modulepreload"][as="'+yt(u)+'"][href="'+yt(n)+'"]',g=p;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":g=Gl(n)}if(!Fa.has(g)&&(n=_({rel:"modulepreload",href:n},a),Fa.set(g,n),o.querySelector(p)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(bc(g)))return}u=o.createElement("link"),gi(u,"link",n),Z(u),o.head.appendChild(u)}}}function u3(n,a,o){Yr.S(n,a,o);var u=Bl;if(u&&n){var p=U(u).hoistableStyles,g=Hl(n);a=a||"default";var E=p.get(g);if(!E){var O={loading:0,preload:null};if(E=u.querySelector(Sc(g)))O.loading=5;else{n=_({rel:"stylesheet",href:n,"data-precedence":a},o),(o=Fa.get(g))&&xg(n,o);var j=E=u.createElement("link");Z(j),gi(j,"link",n),j._p=new Promise(function(oe,Se){j.onload=oe,j.onerror=Se}),j.addEventListener("load",function(){O.loading|=1}),j.addEventListener("error",function(){O.loading|=2}),O.loading|=4,Ld(E,a,u)}E={type:"stylesheet",instance:E,count:1,state:O},p.set(g,E)}}}function c3(n,a){Yr.X(n,a);var o=Bl;if(o&&n){var u=U(o).hoistableScripts,p=Gl(n),g=u.get(p);g||(g=o.querySelector(bc(p)),g||(n=_({src:n,async:!0},a),(a=Fa.get(p))&&yg(n,a),g=o.createElement("script"),Z(g),gi(g,"link",n),o.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},u.set(p,g))}}function f3(n,a){Yr.M(n,a);var o=Bl;if(o&&n){var u=U(o).hoistableScripts,p=Gl(n),g=u.get(p);g||(g=o.querySelector(bc(p)),g||(n=_({src:n,async:!0,type:"module"},a),(a=Fa.get(p))&&yg(n,a),g=o.createElement("script"),Z(g),gi(g,"link",n),o.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},u.set(p,g))}}function T1(n,a,o,u){var p=(p=te.current)?Ud(p):null;if(!p)throw Error(i(446));switch(n){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(a=Hl(o.href),o=U(p).hoistableStyles,u=o.get(a),u||(u={type:"style",instance:null,count:0,state:null},o.set(a,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){n=Hl(o.href);var g=U(p).hoistableStyles,E=g.get(n);if(E||(p=p.ownerDocument||p,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},g.set(n,E),(g=p.querySelector(Sc(n)))&&!g._p&&(E.instance=g,E.state.loading=5),Fa.has(n)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},Fa.set(n,o),g||d3(p,n,o,E.state))),a&&u===null)throw Error(i(528,""));return E}if(a&&u!==null)throw Error(i(529,""));return null;case"script":return a=o.async,o=o.src,typeof o=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=Gl(o),o=U(p).hoistableScripts,u=o.get(a),u||(u={type:"script",instance:null,count:0,state:null},o.set(a,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,n))}}function Hl(n){return'href="'+yt(n)+'"'}function Sc(n){return'link[rel="stylesheet"]['+n+"]"}function A1(n){return _({},n,{"data-precedence":n.precedence,precedence:null})}function d3(n,a,o,u){n.querySelector('link[rel="preload"][as="style"]['+a+"]")?u.loading=1:(a=n.createElement("link"),u.preload=a,a.addEventListener("load",function(){return u.loading|=1}),a.addEventListener("error",function(){return u.loading|=2}),gi(a,"link",o),Z(a),n.head.appendChild(a))}function Gl(n){return'[src="'+yt(n)+'"]'}function bc(n){return"script[async]"+n}function C1(n,a,o){if(a.count++,a.instance===null)switch(a.type){case"style":var u=n.querySelector('style[data-href~="'+yt(o.href)+'"]');if(u)return a.instance=u,Z(u),u;var p=_({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(n.ownerDocument||n).createElement("style"),Z(u),gi(u,"style",p),Ld(u,o.precedence,n),a.instance=u;case"stylesheet":p=Hl(o.href);var g=n.querySelector(Sc(p));if(g)return a.state.loading|=4,a.instance=g,Z(g),g;u=A1(o),(p=Fa.get(p))&&xg(u,p),g=(n.ownerDocument||n).createElement("link"),Z(g);var E=g;return E._p=new Promise(function(O,j){E.onload=O,E.onerror=j}),gi(g,"link",u),a.state.loading|=4,Ld(g,o.precedence,n),a.instance=g;case"script":return g=Gl(o.src),(p=n.querySelector(bc(g)))?(a.instance=p,Z(p),p):(u=o,(p=Fa.get(g))&&(u=_({},o),yg(u,p)),n=n.ownerDocument||n,p=n.createElement("script"),Z(p),gi(p,"link",u),n.head.appendChild(p),a.instance=p);case"void":return null;default:throw Error(i(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(u=a.instance,a.state.loading|=4,Ld(u,o.precedence,n));return a.instance}function Ld(n,a,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),p=u.length?u[u.length-1]:null,g=p,E=0;E<u.length;E++){var O=u[E];if(O.dataset.precedence===a)g=O;else if(g!==p)break}g?g.parentNode.insertBefore(n,g.nextSibling):(a=o.nodeType===9?o.head:o,a.insertBefore(n,a.firstChild))}function xg(n,a){n.crossOrigin==null&&(n.crossOrigin=a.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=a.referrerPolicy),n.title==null&&(n.title=a.title)}function yg(n,a){n.crossOrigin==null&&(n.crossOrigin=a.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=a.referrerPolicy),n.integrity==null&&(n.integrity=a.integrity)}var Od=null;function R1(n,a,o){if(Od===null){var u=new Map,p=Od=new Map;p.set(o,u)}else p=Od,u=p.get(o),u||(u=new Map,p.set(o,u));if(u.has(n))return u;for(u.set(n,null),o=o.getElementsByTagName(n),p=0;p<o.length;p++){var g=o[p];if(!(g[Sn]||g[Ct]||n==="link"&&g.getAttribute("rel")==="stylesheet")&&g.namespaceURI!=="http://www.w3.org/2000/svg"){var E=g.getAttribute(a)||"";E=n+E;var O=u.get(E);O?O.push(g):u.set(E,[g])}}return u}function w1(n,a,o){n=n.ownerDocument||n,n.head.insertBefore(o,a==="title"?n.querySelector("head > title"):null)}function h3(n,a,o){if(o===1||a.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;return a.rel==="stylesheet"?(n=a.disabled,typeof a.precedence=="string"&&n==null):!0;case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function D1(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}function p3(n,a,o,u){if(o.type==="stylesheet"&&(typeof u.media!="string"||matchMedia(u.media).matches!==!1)&&(o.state.loading&4)===0){if(o.instance===null){var p=Hl(u.href),g=a.querySelector(Sc(p));if(g){a=g._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(n.count++,n=Pd.bind(n),a.then(n,n)),o.state.loading|=4,o.instance=g,Z(g);return}g=a.ownerDocument||a,u=A1(u),(p=Fa.get(p))&&xg(u,p),g=g.createElement("link"),Z(g);var E=g;E._p=new Promise(function(O,j){E.onload=O,E.onerror=j}),gi(g,"link",u),o.instance=g}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(o,a),(a=o.state.preload)&&(o.state.loading&3)===0&&(n.count++,o=Pd.bind(n),a.addEventListener("load",o),a.addEventListener("error",o))}}var Sg=0;function m3(n,a){return n.stylesheets&&n.count===0&&Id(n,n.stylesheets),0<n.count||0<n.imgCount?function(o){var u=setTimeout(function(){if(n.stylesheets&&Id(n,n.stylesheets),n.unsuspend){var g=n.unsuspend;n.unsuspend=null,g()}},6e4+a);0<n.imgBytes&&Sg===0&&(Sg=62500*ZC());var p=setTimeout(function(){if(n.waitingForImages=!1,n.count===0&&(n.stylesheets&&Id(n,n.stylesheets),n.unsuspend)){var g=n.unsuspend;n.unsuspend=null,g()}},(n.imgBytes>Sg?50:800)+a);return n.unsuspend=o,function(){n.unsuspend=null,clearTimeout(u),clearTimeout(p)}}:null}function Pd(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Id(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var Fd=null;function Id(n,a){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Fd=new Map,a.forEach(g3,n),Fd=null,Pd.call(n))}function g3(n,a){if(!(a.state.loading&4)){var o=Fd.get(n);if(o)var u=o.get(null);else{o=new Map,Fd.set(n,o);for(var p=n.querySelectorAll("link[data-precedence],style[data-precedence]"),g=0;g<p.length;g++){var E=p[g];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(o.set(E.dataset.precedence,E),u=E)}u&&o.set(null,u)}p=a.instance,E=p.getAttribute("data-precedence"),g=o.get(E)||u,g===u&&o.set(null,p),o.set(E,p),this.count++,u=Pd.bind(this),p.addEventListener("load",u),p.addEventListener("error",u),g?g.parentNode.insertBefore(p,g.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(p,n.firstChild)),a.state.loading|=4}}var Mc={$$typeof:N,Provider:null,Consumer:null,_currentValue:ie,_currentValue2:ie,_threadCount:0};function _3(n,a,o,u,p,g,E,O,j){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ke(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ke(0),this.hiddenUpdates=ke(null),this.identifierPrefix=u,this.onUncaughtError=p,this.onCaughtError=g,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=j,this.incompleteTransitions=new Map}function N1(n,a,o,u,p,g,E,O,j,oe,Se,Ee){return n=new _3(n,a,o,E,j,oe,Se,Ee,O),a=1,g===!0&&(a|=24),g=oa(3,null,null,a),n.current=g,g.stateNode=n,a=em(),a.refCount++,n.pooledCache=a,a.refCount++,g.memoizedState={element:u,isDehydrated:o,cache:a},am(g),n}function U1(n){return n?(n=vl,n):vl}function L1(n,a,o,u,p,g){p=U1(p),u.context===null?u.context=p:u.pendingContext=p,u=As(a),u.payload={element:o},g=g===void 0?null:g,g!==null&&(u.callback=g),o=Cs(n,u,a),o!==null&&(Zi(o,n,a),tc(o,n,a))}function O1(n,a){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<a?o:a}}function bg(n,a){O1(n,a),(n=n.alternate)&&O1(n,a)}function P1(n){if(n.tag===13||n.tag===31){var a=xo(n,67108864);a!==null&&Zi(a,n,67108864),bg(n,67108864)}}function F1(n){if(n.tag===13||n.tag===31){var a=da();a=mt(a);var o=xo(n,a);o!==null&&Zi(o,n,a),bg(n,a)}}var zd=!0;function v3(n,a,o,u){var p=F.T;F.T=null;var g=z.p;try{z.p=2,Mg(n,a,o,u)}finally{z.p=g,F.T=p}}function x3(n,a,o,u){var p=F.T;F.T=null;var g=z.p;try{z.p=8,Mg(n,a,o,u)}finally{z.p=g,F.T=p}}function Mg(n,a,o,u){if(zd){var p=Eg(u);if(p===null)ug(n,a,u,Bd,o),z1(n,u);else if(S3(p,n,a,o,u))u.stopPropagation();else if(z1(n,u),a&4&&-1<y3.indexOf(n)){for(;p!==null;){var g=Si(p);if(g!==null)switch(g.tag){case 3:if(g=g.stateNode,g.current.memoizedState.isDehydrated){var E=Te(g.pendingLanes);if(E!==0){var O=g;for(O.pendingLanes|=2,O.entangledLanes|=2;E;){var j=1<<31-Ie(E);O.entanglements[1]|=j,E&=~j}fr(g),(tn&6)===0&&(Sd=C()+500,_c(0))}}break;case 31:case 13:O=xo(g,2),O!==null&&Zi(O,g,2),Md(),bg(g,2)}if(g=Eg(u),g===null&&ug(n,a,u,Bd,o),g===p)break;p=g}p!==null&&u.stopPropagation()}else ug(n,a,u,null,o)}}function Eg(n){return n=Ap(n),Tg(n)}var Bd=null;function Tg(n){if(Bd=null,n=bn(n),n!==null){var a=l(n);if(a===null)n=null;else{var o=a.tag;if(o===13){if(n=c(a),n!==null)return n;n=null}else if(o===31){if(n=f(a),n!==null)return n;n=null}else if(o===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;n=null}else a!==n&&(n=null)}}return Bd=n,null}function I1(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(K()){case ve:return 2;case xe:return 8;case pe:case Ve:return 32;case De:return 268435456;default:return 32}default:return 32}}var Ag=!1,zs=null,Bs=null,Hs=null,Ec=new Map,Tc=new Map,Gs=[],y3="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function z1(n,a){switch(n){case"focusin":case"focusout":zs=null;break;case"dragenter":case"dragleave":Bs=null;break;case"mouseover":case"mouseout":Hs=null;break;case"pointerover":case"pointerout":Ec.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Tc.delete(a.pointerId)}}function Ac(n,a,o,u,p,g){return n===null||n.nativeEvent!==g?(n={blockedOn:a,domEventName:o,eventSystemFlags:u,nativeEvent:g,targetContainers:[p]},a!==null&&(a=Si(a),a!==null&&P1(a)),n):(n.eventSystemFlags|=u,a=n.targetContainers,p!==null&&a.indexOf(p)===-1&&a.push(p),n)}function S3(n,a,o,u,p){switch(a){case"focusin":return zs=Ac(zs,n,a,o,u,p),!0;case"dragenter":return Bs=Ac(Bs,n,a,o,u,p),!0;case"mouseover":return Hs=Ac(Hs,n,a,o,u,p),!0;case"pointerover":var g=p.pointerId;return Ec.set(g,Ac(Ec.get(g)||null,n,a,o,u,p)),!0;case"gotpointercapture":return g=p.pointerId,Tc.set(g,Ac(Tc.get(g)||null,n,a,o,u,p)),!0}return!1}function B1(n){var a=bn(n.target);if(a!==null){var o=l(a);if(o!==null){if(a=o.tag,a===13){if(a=c(o),a!==null){n.blockedOn=a,un(n.priority,function(){F1(o)});return}}else if(a===31){if(a=f(o),a!==null){n.blockedOn=a,un(n.priority,function(){F1(o)});return}}else if(a===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Hd(n){if(n.blockedOn!==null)return!1;for(var a=n.targetContainers;0<a.length;){var o=Eg(n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);Tp=u,o.target.dispatchEvent(u),Tp=null}else return a=Si(o),a!==null&&P1(a),n.blockedOn=o,!1;a.shift()}return!0}function H1(n,a,o){Hd(n)&&o.delete(a)}function b3(){Ag=!1,zs!==null&&Hd(zs)&&(zs=null),Bs!==null&&Hd(Bs)&&(Bs=null),Hs!==null&&Hd(Hs)&&(Hs=null),Ec.forEach(H1),Tc.forEach(H1)}function Gd(n,a){n.blockedOn===a&&(n.blockedOn=null,Ag||(Ag=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,b3)))}var Vd=null;function G1(n){Vd!==n&&(Vd=n,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Vd===n&&(Vd=null);for(var a=0;a<n.length;a+=3){var o=n[a],u=n[a+1],p=n[a+2];if(typeof u!="function"){if(Tg(u||o)===null)continue;break}var g=Si(o);g!==null&&(n.splice(a,3),a-=3,Em(g,{pending:!0,data:p,method:o.method,action:u},u,p))}}))}function Vl(n){function a(j){return Gd(j,n)}zs!==null&&Gd(zs,n),Bs!==null&&Gd(Bs,n),Hs!==null&&Gd(Hs,n),Ec.forEach(a),Tc.forEach(a);for(var o=0;o<Gs.length;o++){var u=Gs[o];u.blockedOn===n&&(u.blockedOn=null)}for(;0<Gs.length&&(o=Gs[0],o.blockedOn===null);)B1(o),o.blockedOn===null&&Gs.shift();if(o=(n.ownerDocument||n).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var p=o[u],g=o[u+1],E=p[St]||null;if(typeof g=="function")E||G1(o);else if(E){var O=null;if(g&&g.hasAttribute("formAction")){if(p=g,E=g[St]||null)O=E.formAction;else if(Tg(p)!==null)continue}else O=E.action;typeof O=="function"?o[u+1]=O:(o.splice(u,3),u-=3),G1(o)}}}function V1(){function n(g){g.canIntercept&&g.info==="react-transition"&&g.intercept({handler:function(){return new Promise(function(E){return p=E})},focusReset:"manual",scroll:"manual"})}function a(){p!==null&&(p(),p=null),u||setTimeout(o,20)}function o(){if(!u&&!navigation.transition){var g=navigation.currentEntry;g&&g.url!=null&&navigation.navigate(g.url,{state:g.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var u=!1,p=null;return navigation.addEventListener("navigate",n),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(o,100),function(){u=!0,navigation.removeEventListener("navigate",n),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),p!==null&&(p(),p=null)}}}function Cg(n){this._internalRoot=n}kd.prototype.render=Cg.prototype.render=function(n){var a=this._internalRoot;if(a===null)throw Error(i(409));var o=a.current,u=da();L1(o,u,n,a,null,null)},kd.prototype.unmount=Cg.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var a=n.containerInfo;L1(n.current,2,null,n,null,null),Md(),a[zt]=null}};function kd(n){this._internalRoot=n}kd.prototype.unstable_scheduleHydration=function(n){if(n){var a=xt();n={blockedOn:null,target:n,priority:a};for(var o=0;o<Gs.length&&a!==0&&a<Gs[o].priority;o++);Gs.splice(o,0,n),o===0&&B1(n)}};var k1=e.version;if(k1!=="19.2.4")throw Error(i(527,k1,"19.2.4"));z.findDOMNode=function(n){var a=n._reactInternals;if(a===void 0)throw typeof n.render=="function"?Error(i(188)):(n=Object.keys(n).join(","),Error(i(268,n)));return n=h(a),n=n!==null?m(n):null,n=n===null?null:n.stateNode,n};var M3={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xd=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xd.isDisabled&&Xd.supportsFiber)try{Ce=Xd.inject(M3),Ae=Xd}catch{}}return Rc.createRoot=function(n,a){if(!r(n))throw Error(i(299));var o=!1,u="",p=Ky,g=Qy,E=Jy;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(p=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError)),a=N1(n,1,!1,null,null,o,u,null,p,g,E,V1),n[zt]=a.current,lg(n),new Cg(a)},Rc.hydrateRoot=function(n,a,o){if(!r(n))throw Error(i(299));var u=!1,p="",g=Ky,E=Qy,O=Jy,j=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onUncaughtError!==void 0&&(g=o.onUncaughtError),o.onCaughtError!==void 0&&(E=o.onCaughtError),o.onRecoverableError!==void 0&&(O=o.onRecoverableError),o.formState!==void 0&&(j=o.formState)),a=N1(n,1,!0,a,o??null,u,p,j,g,E,O,V1),a.context=U1(null),o=a.current,u=da(),u=mt(u),p=As(u),p.callback=null,Cs(o,p,u),o=u,a.current.lanes=o,et(a,o),fr(a),n[zt]=a.current,lg(n),new kd(a)},Rc.version="19.2.4",Rc}var $1;function O3(){if($1)return Dg.exports;$1=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Dg.exports=L3(),Dg.exports}var P3=O3();const F3=[{group:"policy",items:[{label:"이용약관",href:"/terms"},{label:"공지사항",href:"/notice"},{label:"개인정보처리방침",href:"/privacy"},{label:"고객문의",href:"/qna"},{label:"이메일무단수집거부",href:"/email-deny"},{label:"신고하기",href:"/report"},{label:"사이트맵",href:"/sitemap"},{label:"답변확인",href:"/answer"}]},{group:"company",items:[{label:"동원산업 (주)"},{label:"사업자 등록번호",content:"229-81-11150"},{label:"대표 번호",content:"02-589-3333"},{label:"대표자",content:"김세훈, 장인성, 박상진"}]},{group:"site",items:[{label:"퇴직자 증명서 발급",href:"/"},{label:"방문 예약 신청",href:"/"}]}],Og=s=>F3.find(e=>e.group===s)?.items??[];function I0(s,e){(e==null||e>s.length)&&(e=s.length);for(var t=0,i=Array(e);t<e;t++)i[t]=s[t];return i}function I3(s){if(Array.isArray(s))return s}function z3(s){if(Array.isArray(s))return I0(s)}function B3(s,e){if(!(s instanceof e))throw new TypeError("Cannot call a class as a function")}function H3(s,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(s,dE(i.key),i)}}function G3(s,e,t){return e&&H3(s.prototype,e),Object.defineProperty(s,"prototype",{writable:!1}),s}function wh(s,e){var t=typeof Symbol<"u"&&s[Symbol.iterator]||s["@@iterator"];if(!t){if(Array.isArray(s)||(t=gv(s))||e){t&&(s=t);var i=0,r=function(){};return{s:r,n:function(){return i>=s.length?{done:!0}:{done:!1,value:s[i++]}},e:function(d){throw d},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var l,c=!0,f=!1;return{s:function(){t=t.call(s)},n:function(){var d=t.next();return c=d.done,d},e:function(d){f=!0,l=d},f:function(){try{c||t.return==null||t.return()}finally{if(f)throw l}}}}function Rt(s,e,t){return(e=dE(e))in s?Object.defineProperty(s,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):s[e]=t,s}function V3(s){if(typeof Symbol<"u"&&s[Symbol.iterator]!=null||s["@@iterator"]!=null)return Array.from(s)}function k3(s,e){var t=s==null?null:typeof Symbol<"u"&&s[Symbol.iterator]||s["@@iterator"];if(t!=null){var i,r,l,c,f=[],d=!0,h=!1;try{if(l=(t=t.call(s)).next,e===0){if(Object(t)!==t)return;d=!1}else for(;!(d=(i=l.call(t)).done)&&(f.push(i.value),f.length!==e);d=!0);}catch(m){h=!0,r=m}finally{try{if(!d&&t.return!=null&&(c=t.return(),Object(c)!==c))return}finally{if(h)throw r}}return f}}function X3(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function W3(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function eb(s,e){var t=Object.keys(s);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(s);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(s,r).enumerable})),t.push.apply(t,i)}return t}function Ue(s){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?eb(Object(t),!0).forEach(function(i){Rt(s,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(t)):eb(Object(t)).forEach(function(i){Object.defineProperty(s,i,Object.getOwnPropertyDescriptor(t,i))})}return s}function dp(s,e){return I3(s)||k3(s,e)||gv(s,e)||X3()}function sr(s){return z3(s)||V3(s)||gv(s)||W3()}function j3(s,e){if(typeof s!="object"||!s)return s;var t=s[Symbol.toPrimitive];if(t!==void 0){var i=t.call(s,e);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(s)}function dE(s){var e=j3(s,"string");return typeof e=="symbol"?e:e+""}function qh(s){"@babel/helpers - typeof";return qh=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},qh(s)}function gv(s,e){if(s){if(typeof s=="string")return I0(s,e);var t={}.toString.call(s).slice(8,-1);return t==="Object"&&s.constructor&&(t=s.constructor.name),t==="Map"||t==="Set"?Array.from(s):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?I0(s,e):void 0}}var tb=function(){},_v={},hE={},pE=null,mE={mark:tb,measure:tb};try{typeof window<"u"&&(_v=window),typeof document<"u"&&(hE=document),typeof MutationObserver<"u"&&(pE=MutationObserver),typeof performance<"u"&&(mE=performance)}catch{}var Y3=_v.navigator||{},nb=Y3.userAgent,ib=nb===void 0?"":nb,so=_v,An=hE,ab=pE,Wd=mE;so.document;var vs=!!An.documentElement&&!!An.head&&typeof An.addEventListener=="function"&&typeof An.createElement=="function",gE=~ib.indexOf("MSIE")||~ib.indexOf("Trident/"),Pg,q3=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Z3=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,_E={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},graphite:{"fa-thin":"thin",fagt:"thin"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},K3={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},vE=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],yi="classic",Rf="duotone",xE="sharp",yE="sharp-duotone",SE="chisel",bE="etch",ME="graphite",EE="jelly",TE="jelly-duo",AE="jelly-fill",CE="notdog",RE="notdog-duo",wE="slab",DE="slab-press",NE="thumbprint",UE="utility",LE="utility-duo",OE="utility-fill",PE="whiteboard",Q3="Classic",J3="Duotone",$3="Sharp",eR="Sharp Duotone",tR="Chisel",nR="Etch",iR="Graphite",aR="Jelly",rR="Jelly Duo",sR="Jelly Fill",oR="Notdog",lR="Notdog Duo",uR="Slab",cR="Slab Press",fR="Thumbprint",dR="Utility",hR="Utility Duo",pR="Utility Fill",mR="Whiteboard",FE=[yi,Rf,xE,yE,SE,bE,ME,EE,TE,AE,CE,RE,wE,DE,NE,UE,LE,OE,PE];Pg={},Rt(Rt(Rt(Rt(Rt(Rt(Rt(Rt(Rt(Rt(Pg,yi,Q3),Rf,J3),xE,$3),yE,eR),SE,tR),bE,nR),ME,iR),EE,aR),TE,rR),AE,sR),Rt(Rt(Rt(Rt(Rt(Rt(Rt(Rt(Rt(Pg,CE,oR),RE,lR),wE,uR),DE,cR),NE,fR),UE,dR),LE,hR),OE,pR),PE,mR);var gR={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},graphite:{100:"fagt"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},_R={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Graphite":{100:"fagt",normal:"fagt"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},vR=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["graphite",{defaultShortPrefixId:"fagt",defaultStyleId:"thin",styleIds:["thin"],futureStyleIds:[],defaultFontWeight:100}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),xR={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},graphite:{thin:"fagt"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},whiteboard:{semibold:"fawsb"}},IE=["fak","fa-kit","fakd","fa-kit-duotone"],rb={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},yR=["kit"],SR="kit",bR="kit-duotone",MR="Kit",ER="Kit Duotone";Rt(Rt({},SR,MR),bR,ER);var TR={kit:{"fa-kit":"fak"}},AR={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},CR={kit:{fak:"fa-kit"}},sb={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Fg,jd={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},RR=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],wR="classic",DR="duotone",NR="sharp",UR="sharp-duotone",LR="chisel",OR="etch",PR="graphite",FR="jelly",IR="jelly-duo",zR="jelly-fill",BR="notdog",HR="notdog-duo",GR="slab",VR="slab-press",kR="thumbprint",XR="utility",WR="utility-duo",jR="utility-fill",YR="whiteboard",qR="Classic",ZR="Duotone",KR="Sharp",QR="Sharp Duotone",JR="Chisel",$R="Etch",ew="Graphite",tw="Jelly",nw="Jelly Duo",iw="Jelly Fill",aw="Notdog",rw="Notdog Duo",sw="Slab",ow="Slab Press",lw="Thumbprint",uw="Utility",cw="Utility Duo",fw="Utility Fill",dw="Whiteboard";Fg={},Rt(Rt(Rt(Rt(Rt(Rt(Rt(Rt(Rt(Rt(Fg,wR,qR),DR,ZR),NR,KR),UR,QR),LR,JR),OR,$R),PR,ew),FR,tw),IR,nw),zR,iw),Rt(Rt(Rt(Rt(Rt(Rt(Rt(Rt(Rt(Fg,BR,aw),HR,rw),GR,sw),VR,ow),kR,lw),XR,uw),WR,cw),jR,fw),YR,dw);var hw="kit",pw="kit-duotone",mw="Kit",gw="Kit Duotone";Rt(Rt({},hw,mw),pw,gw);var _w={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},graphite:{"fa-thin":"fagt"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},vw={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],graphite:["fagt"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},z0={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},graphite:{fagt:"fa-thin"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},xw=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],zE=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fagt","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(RR,xw),yw=["solid","regular","light","thin","duotone","brands","semibold"],BE=[1,2,3,4,5,6,7,8,9,10],Sw=BE.concat([11,12,13,14,15,16,17,18,19,20]),bw=["aw","fw","pull-left","pull-right"],Mw=[].concat(sr(Object.keys(vw)),yw,bw,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",jd.GROUP,jd.SWAP_OPACITY,jd.PRIMARY,jd.SECONDARY]).concat(BE.map(function(s){return"".concat(s,"x")})).concat(Sw.map(function(s){return"w-".concat(s)})),Ew={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},fs="___FONT_AWESOME___",B0=16,HE="fa",GE="svg-inline--fa",al="data-fa-i2svg",H0="data-fa-pseudo-element",Tw="data-fa-pseudo-element-pending",vv="data-prefix",xv="data-icon",ob="fontawesome-i2svg",Aw="async",Cw=["HTML","HEAD","STYLE","SCRIPT"],VE=["::before","::after",":before",":after"],kE=(function(){try{return!0}catch{return!1}})();function wf(s){return new Proxy(s,{get:function(t,i){return i in t?t[i]:t[yi]}})}var XE=Ue({},_E);XE[yi]=Ue(Ue(Ue(Ue({},{"fa-duotone":"duotone"}),_E[yi]),rb.kit),rb["kit-duotone"]);var Rw=wf(XE),G0=Ue({},xR);G0[yi]=Ue(Ue(Ue(Ue({},{duotone:"fad"}),G0[yi]),sb.kit),sb["kit-duotone"]);var lb=wf(G0),V0=Ue({},z0);V0[yi]=Ue(Ue({},V0[yi]),CR.kit);var yv=wf(V0),k0=Ue({},_w);k0[yi]=Ue(Ue({},k0[yi]),TR.kit);wf(k0);var ww=q3,WE="fa-layers-text",Dw=Z3,Nw=Ue({},gR);wf(Nw);var Uw=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ig=K3,Lw=[].concat(sr(yR),sr(Mw)),Kc=so.FontAwesomeConfig||{};function Ow(s){var e=An.querySelector("script["+s+"]");if(e)return e.getAttribute(s)}function Pw(s){return s===""?!0:s==="false"?!1:s==="true"?!0:s}if(An&&typeof An.querySelector=="function"){var Fw=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Fw.forEach(function(s){var e=dp(s,2),t=e[0],i=e[1],r=Pw(Ow(t));r!=null&&(Kc[i]=r)})}var jE={styleDefault:"solid",familyDefault:yi,cssPrefix:HE,replacementClass:GE,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Kc.familyPrefix&&(Kc.cssPrefix=Kc.familyPrefix);var Mu=Ue(Ue({},jE),Kc);Mu.autoReplaceSvg||(Mu.observeMutations=!1);var ft={};Object.keys(jE).forEach(function(s){Object.defineProperty(ft,s,{enumerable:!0,set:function(t){Mu[s]=t,Qc.forEach(function(i){return i(ft)})},get:function(){return Mu[s]}})});Object.defineProperty(ft,"familyPrefix",{enumerable:!0,set:function(e){Mu.cssPrefix=e,Qc.forEach(function(t){return t(ft)})},get:function(){return Mu.cssPrefix}});so.FontAwesomeConfig=ft;var Qc=[];function Iw(s){return Qc.push(s),function(){Qc.splice(Qc.indexOf(s),1)}}var kl=B0,vr={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function zw(s){if(!(!s||!vs)){var e=An.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=s;for(var t=An.head.childNodes,i=null,r=t.length-1;r>-1;r--){var l=t[r],c=(l.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(c)>-1&&(i=l)}return An.head.insertBefore(e,i),s}}var Bw="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ub(){for(var s=12,e="";s-- >0;)e+=Bw[Math.random()*62|0];return e}function Fu(s){for(var e=[],t=(s||[]).length>>>0;t--;)e[t]=s[t];return e}function Sv(s){return s.classList?Fu(s.classList):(s.getAttribute("class")||"").split(" ").filter(function(e){return e})}function YE(s){return"".concat(s).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Hw(s){return Object.keys(s||{}).reduce(function(e,t){return e+"".concat(t,'="').concat(YE(s[t]),'" ')},"").trim()}function hp(s){return Object.keys(s||{}).reduce(function(e,t){return e+"".concat(t,": ").concat(s[t].trim(),";")},"")}function bv(s){return s.size!==vr.size||s.x!==vr.x||s.y!==vr.y||s.rotate!==vr.rotate||s.flipX||s.flipY}function Gw(s){var e=s.transform,t=s.containerWidth,i=s.iconWidth,r={transform:"translate(".concat(t/2," 256)")},l="translate(".concat(e.x*32,", ").concat(e.y*32,") "),c="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),f="rotate(".concat(e.rotate," 0 0)"),d={transform:"".concat(l," ").concat(c," ").concat(f)},h={transform:"translate(".concat(i/2*-1," -256)")};return{outer:r,inner:d,path:h}}function Vw(s){var e=s.transform,t=s.width,i=t===void 0?B0:t,r=s.height,l=r===void 0?B0:r,c="";return gE?c+="translate(".concat(e.x/kl-i/2,"em, ").concat(e.y/kl-l/2,"em) "):c+="translate(calc(-50% + ".concat(e.x/kl,"em), calc(-50% + ").concat(e.y/kl,"em)) "),c+="scale(".concat(e.size/kl*(e.flipX?-1:1),", ").concat(e.size/kl*(e.flipY?-1:1),") "),c+="rotate(".concat(e.rotate,"deg) "),c}var kw=`:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function qE(){var s=HE,e=GE,t=ft.cssPrefix,i=ft.replacementClass,r=kw;if(t!==s||i!==e){var l=new RegExp("\\.".concat(s,"\\-"),"g"),c=new RegExp("\\--".concat(s,"\\-"),"g"),f=new RegExp("\\.".concat(e),"g");r=r.replace(l,".".concat(t,"-")).replace(c,"--".concat(t,"-")).replace(f,".".concat(i))}return r}var cb=!1;function zg(){ft.autoAddCss&&!cb&&(zw(qE()),cb=!0)}var Xw={mixout:function(){return{dom:{css:qE,insertCss:zg}}},hooks:function(){return{beforeDOMElementCreation:function(){zg()},beforeI2svg:function(){zg()}}}},ds=so||{};ds[fs]||(ds[fs]={});ds[fs].styles||(ds[fs].styles={});ds[fs].hooks||(ds[fs].hooks={});ds[fs].shims||(ds[fs].shims=[]);var rr=ds[fs],ZE=[],KE=function(){An.removeEventListener("DOMContentLoaded",KE),Zh=1,ZE.map(function(e){return e()})},Zh=!1;vs&&(Zh=(An.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(An.readyState),Zh||An.addEventListener("DOMContentLoaded",KE));function Ww(s){vs&&(Zh?setTimeout(s,0):ZE.push(s))}function Df(s){var e=s.tag,t=s.attributes,i=t===void 0?{}:t,r=s.children,l=r===void 0?[]:r;return typeof s=="string"?YE(s):"<".concat(e," ").concat(Hw(i),">").concat(l.map(Df).join(""),"</").concat(e,">")}function fb(s,e,t){if(s&&s[e]&&s[e][t])return{prefix:e,iconName:t,icon:s[e][t]}}var Bg=function(e,t,i,r){var l=Object.keys(e),c=l.length,f=t,d,h,m;for(i===void 0?(d=1,m=e[l[0]]):(d=0,m=i);d<c;d++)h=l[d],m=f(m,e[h],h,e);return m};function QE(s){return sr(s).length!==1?null:s.codePointAt(0).toString(16)}function db(s){return Object.keys(s).reduce(function(e,t){var i=s[t],r=!!i.icon;return r?e[i.iconName]=i.icon:e[t]=i,e},{})}function X0(s,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=t.skipHooks,r=i===void 0?!1:i,l=db(e);typeof rr.hooks.addPack=="function"&&!r?rr.hooks.addPack(s,db(e)):rr.styles[s]=Ue(Ue({},rr.styles[s]||{}),l),s==="fas"&&X0("fa",e)}var hf=rr.styles,jw=rr.shims,JE=Object.keys(yv),Yw=JE.reduce(function(s,e){return s[e]=Object.keys(yv[e]),s},{}),Mv=null,$E={},eT={},tT={},nT={},iT={};function qw(s){return~Lw.indexOf(s)}function Zw(s,e){var t=e.split("-"),i=t[0],r=t.slice(1).join("-");return i===s&&r!==""&&!qw(r)?r:null}var aT=function(){var e=function(l){return Bg(hf,function(c,f,d){return c[d]=Bg(f,l,{}),c},{})};$E=e(function(r,l,c){if(l[3]&&(r[l[3]]=c),l[2]){var f=l[2].filter(function(d){return typeof d=="number"});f.forEach(function(d){r[d.toString(16)]=c})}return r}),eT=e(function(r,l,c){if(r[c]=c,l[2]){var f=l[2].filter(function(d){return typeof d=="string"});f.forEach(function(d){r[d]=c})}return r}),iT=e(function(r,l,c){var f=l[2];return r[c]=c,f.forEach(function(d){r[d]=c}),r});var t="far"in hf||ft.autoFetchSvg,i=Bg(jw,function(r,l){var c=l[0],f=l[1],d=l[2];return f==="far"&&!t&&(f="fas"),typeof c=="string"&&(r.names[c]={prefix:f,iconName:d}),typeof c=="number"&&(r.unicodes[c.toString(16)]={prefix:f,iconName:d}),r},{names:{},unicodes:{}});tT=i.names,nT=i.unicodes,Mv=pp(ft.styleDefault,{family:ft.familyDefault})};Iw(function(s){Mv=pp(s.styleDefault,{family:ft.familyDefault})});aT();function Ev(s,e){return($E[s]||{})[e]}function Kw(s,e){return(eT[s]||{})[e]}function jo(s,e){return(iT[s]||{})[e]}function rT(s){return tT[s]||{prefix:null,iconName:null}}function Qw(s){var e=nT[s],t=Ev("fas",s);return e||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function oo(){return Mv}var sT=function(){return{prefix:null,iconName:null,rest:[]}};function Jw(s){var e=yi,t=JE.reduce(function(i,r){return i[r]="".concat(ft.cssPrefix,"-").concat(r),i},{});return FE.forEach(function(i){(s.includes(t[i])||s.some(function(r){return Yw[i].includes(r)}))&&(e=i)}),e}function pp(s){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.family,i=t===void 0?yi:t,r=Rw[i][s];if(i===Rf&&!s)return"fad";var l=lb[i][s]||lb[i][r],c=s in rr.styles?s:null,f=l||c||null;return f}function $w(s){var e=[],t=null;return s.forEach(function(i){var r=Zw(ft.cssPrefix,i);r?t=r:i&&e.push(i)}),{iconName:t,rest:e}}function hb(s){return s.sort().filter(function(e,t,i){return i.indexOf(e)===t})}var pb=zE.concat(IE);function mp(s){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.skipLookups,i=t===void 0?!1:t,r=null,l=hb(s.filter(function(x){return pb.includes(x)})),c=hb(s.filter(function(x){return!pb.includes(x)})),f=l.filter(function(x){return r=x,!vE.includes(x)}),d=dp(f,1),h=d[0],m=h===void 0?null:h,_=Jw(l),v=Ue(Ue({},$w(c)),{},{prefix:pp(m,{family:_})});return Ue(Ue(Ue({},v),iD({values:s,family:_,styles:hf,config:ft,canonical:v,givenPrefix:r})),eD(i,r,v))}function eD(s,e,t){var i=t.prefix,r=t.iconName;if(s||!i||!r)return{prefix:i,iconName:r};var l=e==="fa"?rT(r):{},c=jo(i,r);return r=l.iconName||c||r,i=l.prefix||i,i==="far"&&!hf.far&&hf.fas&&!ft.autoFetchSvg&&(i="fas"),{prefix:i,iconName:r}}var tD=FE.filter(function(s){return s!==yi||s!==Rf}),nD=Object.keys(z0).filter(function(s){return s!==yi}).map(function(s){return Object.keys(z0[s])}).flat();function iD(s){var e=s.values,t=s.family,i=s.canonical,r=s.givenPrefix,l=r===void 0?"":r,c=s.styles,f=c===void 0?{}:c,d=s.config,h=d===void 0?{}:d,m=t===Rf,_=e.includes("fa-duotone")||e.includes("fad"),v=h.familyDefault==="duotone",x=i.prefix==="fad"||i.prefix==="fa-duotone";if(!m&&(_||v||x)&&(i.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(i.prefix="fab"),!i.prefix&&tD.includes(t)){var b=Object.keys(f).find(function(y){return nD.includes(y)});if(b||h.autoFetchSvg){var M=vR.get(t).defaultShortPrefixId;i.prefix=M,i.iconName=jo(i.prefix,i.iconName)||i.iconName}}return(i.prefix==="fa"||l==="fa")&&(i.prefix=oo()||"fas"),i}var aD=(function(){function s(){B3(this,s),this.definitions={}}return G3(s,[{key:"add",value:function(){for(var t=this,i=arguments.length,r=new Array(i),l=0;l<i;l++)r[l]=arguments[l];var c=r.reduce(this._pullDefinitions,{});Object.keys(c).forEach(function(f){t.definitions[f]=Ue(Ue({},t.definitions[f]||{}),c[f]),X0(f,c[f]);var d=yv[yi][f];d&&X0(d,c[f]),aT()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,i){var r=i.prefix&&i.iconName&&i.icon?{0:i}:i;return Object.keys(r).map(function(l){var c=r[l],f=c.prefix,d=c.iconName,h=c.icon,m=h[2];t[f]||(t[f]={}),m.length>0&&m.forEach(function(_){typeof _=="string"&&(t[f][_]=h)}),t[f][d]=h}),t}}])})(),mb=[],cu={},pu={},rD=Object.keys(pu);function sD(s,e){var t=e.mixoutsTo;return mb=s,cu={},Object.keys(pu).forEach(function(i){rD.indexOf(i)===-1&&delete pu[i]}),mb.forEach(function(i){var r=i.mixout?i.mixout():{};if(Object.keys(r).forEach(function(c){typeof r[c]=="function"&&(t[c]=r[c]),qh(r[c])==="object"&&Object.keys(r[c]).forEach(function(f){t[c]||(t[c]={}),t[c][f]=r[c][f]})}),i.hooks){var l=i.hooks();Object.keys(l).forEach(function(c){cu[c]||(cu[c]=[]),cu[c].push(l[c])})}i.provides&&i.provides(pu)}),t}function W0(s,e){for(var t=arguments.length,i=new Array(t>2?t-2:0),r=2;r<t;r++)i[r-2]=arguments[r];var l=cu[s]||[];return l.forEach(function(c){e=c.apply(null,[e].concat(i))}),e}function rl(s){for(var e=arguments.length,t=new Array(e>1?e-1:0),i=1;i<e;i++)t[i-1]=arguments[i];var r=cu[s]||[];r.forEach(function(l){l.apply(null,t)})}function lo(){var s=arguments[0],e=Array.prototype.slice.call(arguments,1);return pu[s]?pu[s].apply(null,e):void 0}function j0(s){s.prefix==="fa"&&(s.prefix="fas");var e=s.iconName,t=s.prefix||oo();if(e)return e=jo(t,e)||e,fb(oT.definitions,t,e)||fb(rr.styles,t,e)}var oT=new aD,oD=function(){ft.autoReplaceSvg=!1,ft.observeMutations=!1,rl("noAuto")},lD={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return vs?(rl("beforeI2svg",e),lo("pseudoElements2svg",e),lo("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot;ft.autoReplaceSvg===!1&&(ft.autoReplaceSvg=!0),ft.observeMutations=!0,Ww(function(){cD({autoReplaceSvgRoot:t}),rl("watch",e)})}},uD={icon:function(e){if(e===null)return null;if(qh(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:jo(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],i=pp(e[0]);return{prefix:i,iconName:jo(i,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(ft.cssPrefix,"-"))>-1||e.match(ww))){var r=mp(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||oo(),iconName:jo(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var l=oo();return{prefix:l,iconName:jo(l,e)||e}}}},Ca={noAuto:oD,config:ft,dom:lD,parse:uD,library:oT,findIconDefinition:j0,toHtml:Df},cD=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot,i=t===void 0?An:t;(Object.keys(rr.styles).length>0||ft.autoFetchSvg)&&vs&&ft.autoReplaceSvg&&Ca.dom.i2svg({node:i})};function gp(s,e){return Object.defineProperty(s,"abstract",{get:e}),Object.defineProperty(s,"html",{get:function(){return s.abstract.map(function(i){return Df(i)})}}),Object.defineProperty(s,"node",{get:function(){if(vs){var i=An.createElement("div");return i.innerHTML=s.html,i.children}}}),s}function fD(s){var e=s.children,t=s.main,i=s.mask,r=s.attributes,l=s.styles,c=s.transform;if(bv(c)&&t.found&&!i.found){var f=t.width,d=t.height,h={x:f/d/2,y:.5};r.style=hp(Ue(Ue({},l),{},{"transform-origin":"".concat(h.x+c.x/16,"em ").concat(h.y+c.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function dD(s){var e=s.prefix,t=s.iconName,i=s.children,r=s.attributes,l=s.symbol,c=l===!0?"".concat(e,"-").concat(ft.cssPrefix,"-").concat(t):l;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:Ue(Ue({},r),{},{id:c}),children:i}]}]}function hD(s){var e=["aria-label","aria-labelledby","title","role"];return e.some(function(t){return t in s})}function Tv(s){var e=s.icons,t=e.main,i=e.mask,r=s.prefix,l=s.iconName,c=s.transform,f=s.symbol,d=s.maskId,h=s.extra,m=s.watchable,_=m===void 0?!1:m,v=i.found?i:t,x=v.width,b=v.height,M=[ft.replacementClass,l?"".concat(ft.cssPrefix,"-").concat(l):""].filter(function(L){return h.classes.indexOf(L)===-1}).filter(function(L){return L!==""||!!L}).concat(h.classes).join(" "),y={children:[],attributes:Ue(Ue({},h.attributes),{},{"data-prefix":r,"data-icon":l,class:M,role:h.attributes.role||"img",viewBox:"0 0 ".concat(x," ").concat(b)})};!hD(h.attributes)&&!h.attributes["aria-hidden"]&&(y.attributes["aria-hidden"]="true"),_&&(y.attributes[al]="");var S=Ue(Ue({},y),{},{prefix:r,iconName:l,main:t,mask:i,maskId:d,transform:c,symbol:f,styles:Ue({},h.styles)}),A=i.found&&t.found?lo("generateAbstractMask",S)||{children:[],attributes:{}}:lo("generateAbstractIcon",S)||{children:[],attributes:{}},N=A.children,R=A.attributes;return S.children=N,S.attributes=R,f?dD(S):fD(S)}function gb(s){var e=s.content,t=s.width,i=s.height,r=s.transform,l=s.extra,c=s.watchable,f=c===void 0?!1:c,d=Ue(Ue({},l.attributes),{},{class:l.classes.join(" ")});f&&(d[al]="");var h=Ue({},l.styles);bv(r)&&(h.transform=Vw({transform:r,width:t,height:i}),h["-webkit-transform"]=h.transform);var m=hp(h);m.length>0&&(d.style=m);var _=[];return _.push({tag:"span",attributes:d,children:[e]}),_}function pD(s){var e=s.content,t=s.extra,i=Ue(Ue({},t.attributes),{},{class:t.classes.join(" ")}),r=hp(t.styles);r.length>0&&(i.style=r);var l=[];return l.push({tag:"span",attributes:i,children:[e]}),l}var Hg=rr.styles;function Y0(s){var e=s[0],t=s[1],i=s.slice(4),r=dp(i,1),l=r[0],c=null;return Array.isArray(l)?c={tag:"g",attributes:{class:"".concat(ft.cssPrefix,"-").concat(Ig.GROUP)},children:[{tag:"path",attributes:{class:"".concat(ft.cssPrefix,"-").concat(Ig.SECONDARY),fill:"currentColor",d:l[0]}},{tag:"path",attributes:{class:"".concat(ft.cssPrefix,"-").concat(Ig.PRIMARY),fill:"currentColor",d:l[1]}}]}:c={tag:"path",attributes:{fill:"currentColor",d:l}},{found:!0,width:e,height:t,icon:c}}var mD={found:!1,width:512,height:512};function gD(s,e){!kE&&!ft.showMissingIcons&&s&&console.error('Icon with name "'.concat(s,'" and prefix "').concat(e,'" is missing.'))}function q0(s,e){var t=e;return e==="fa"&&ft.styleDefault!==null&&(e=oo()),new Promise(function(i,r){if(t==="fa"){var l=rT(s)||{};s=l.iconName||s,e=l.prefix||e}if(s&&e&&Hg[e]&&Hg[e][s]){var c=Hg[e][s];return i(Y0(c))}gD(s,e),i(Ue(Ue({},mD),{},{icon:ft.showMissingIcons&&s?lo("missingIconAbstract")||{}:{}}))})}var _b=function(){},Z0=ft.measurePerformance&&Wd&&Wd.mark&&Wd.measure?Wd:{mark:_b,measure:_b},Hc='FA "7.2.0"',_D=function(e){return Z0.mark("".concat(Hc," ").concat(e," begins")),function(){return lT(e)}},lT=function(e){Z0.mark("".concat(Hc," ").concat(e," ends")),Z0.measure("".concat(Hc," ").concat(e),"".concat(Hc," ").concat(e," begins"),"".concat(Hc," ").concat(e," ends"))},Av={begin:_D,end:lT},Dh=function(){};function vb(s){var e=s.getAttribute?s.getAttribute(al):null;return typeof e=="string"}function vD(s){var e=s.getAttribute?s.getAttribute(vv):null,t=s.getAttribute?s.getAttribute(xv):null;return e&&t}function xD(s){return s&&s.classList&&s.classList.contains&&s.classList.contains(ft.replacementClass)}function yD(){if(ft.autoReplaceSvg===!0)return Nh.replace;var s=Nh[ft.autoReplaceSvg];return s||Nh.replace}function SD(s){return An.createElementNS("http://www.w3.org/2000/svg",s)}function bD(s){return An.createElement(s)}function uT(s){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.ceFn,i=t===void 0?s.tag==="svg"?SD:bD:t;if(typeof s=="string")return An.createTextNode(s);var r=i(s.tag);Object.keys(s.attributes||[]).forEach(function(c){r.setAttribute(c,s.attributes[c])});var l=s.children||[];return l.forEach(function(c){r.appendChild(uT(c,{ceFn:i}))}),r}function MD(s){var e=" ".concat(s.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Nh={replace:function(e){var t=e[0];if(t.parentNode)if(e[1].forEach(function(r){t.parentNode.insertBefore(uT(r),t)}),t.getAttribute(al)===null&&ft.keepOriginalSource){var i=An.createComment(MD(t));t.parentNode.replaceChild(i,t)}else t.remove()},nest:function(e){var t=e[0],i=e[1];if(~Sv(t).indexOf(ft.replacementClass))return Nh.replace(e);var r=new RegExp("".concat(ft.cssPrefix,"-.*"));if(delete i[0].attributes.id,i[0].attributes.class){var l=i[0].attributes.class.split(" ").reduce(function(f,d){return d===ft.replacementClass||d.match(r)?f.toSvg.push(d):f.toNode.push(d),f},{toNode:[],toSvg:[]});i[0].attributes.class=l.toSvg.join(" "),l.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",l.toNode.join(" "))}var c=i.map(function(f){return Df(f)}).join(`
`);t.setAttribute(al,""),t.innerHTML=c}};function xb(s){s()}function cT(s,e){var t=typeof e=="function"?e:Dh;if(s.length===0)t();else{var i=xb;ft.mutateApproach===Aw&&(i=so.requestAnimationFrame||xb),i(function(){var r=yD(),l=Av.begin("mutate");s.map(r),l(),t()})}}var Cv=!1;function fT(){Cv=!0}function K0(){Cv=!1}var Kh=null;function yb(s){if(ab&&ft.observeMutations){var e=s.treeCallback,t=e===void 0?Dh:e,i=s.nodeCallback,r=i===void 0?Dh:i,l=s.pseudoElementsCallback,c=l===void 0?Dh:l,f=s.observeMutationsRoot,d=f===void 0?An:f;Kh=new ab(function(h){if(!Cv){var m=oo();Fu(h).forEach(function(_){if(_.type==="childList"&&_.addedNodes.length>0&&!vb(_.addedNodes[0])&&(ft.searchPseudoElements&&c(_.target),t(_.target)),_.type==="attributes"&&_.target.parentNode&&ft.searchPseudoElements&&c([_.target],!0),_.type==="attributes"&&vb(_.target)&&~Uw.indexOf(_.attributeName))if(_.attributeName==="class"&&vD(_.target)){var v=mp(Sv(_.target)),x=v.prefix,b=v.iconName;_.target.setAttribute(vv,x||m),b&&_.target.setAttribute(xv,b)}else xD(_.target)&&r(_.target)})}}),vs&&Kh.observe(d,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function ED(){Kh&&Kh.disconnect()}function TD(s){var e=s.getAttribute("style"),t=[];return e&&(t=e.split(";").reduce(function(i,r){var l=r.split(":"),c=l[0],f=l.slice(1);return c&&f.length>0&&(i[c]=f.join(":").trim()),i},{})),t}function AD(s){var e=s.getAttribute("data-prefix"),t=s.getAttribute("data-icon"),i=s.innerText!==void 0?s.innerText.trim():"",r=mp(Sv(s));return r.prefix||(r.prefix=oo()),e&&t&&(r.prefix=e,r.iconName=t),r.iconName&&r.prefix||(r.prefix&&i.length>0&&(r.iconName=Kw(r.prefix,s.innerText)||Ev(r.prefix,QE(s.innerText))),!r.iconName&&ft.autoFetchSvg&&s.firstChild&&s.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=s.firstChild.data)),r}function CD(s){var e=Fu(s.attributes).reduce(function(t,i){return t.name!=="class"&&t.name!=="style"&&(t[i.name]=i.value),t},{});return e}function RD(){return{iconName:null,prefix:null,transform:vr,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Sb(s){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},t=AD(s),i=t.iconName,r=t.prefix,l=t.rest,c=CD(s),f=W0("parseNodeAttributes",{},s),d=e.styleParser?TD(s):[];return Ue({iconName:i,prefix:r,transform:vr,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:l,styles:d,attributes:c}},f)}var wD=rr.styles;function dT(s){var e=ft.autoReplaceSvg==="nest"?Sb(s,{styleParser:!1}):Sb(s);return~e.extra.classes.indexOf(WE)?lo("generateLayersText",s,e):lo("generateSvgReplacementMutation",s,e)}function DD(){return[].concat(sr(IE),sr(zE))}function bb(s){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!vs)return Promise.resolve();var t=An.documentElement.classList,i=function(_){return t.add("".concat(ob,"-").concat(_))},r=function(_){return t.remove("".concat(ob,"-").concat(_))},l=ft.autoFetchSvg?DD():vE.concat(Object.keys(wD));l.includes("fa")||l.push("fa");var c=[".".concat(WE,":not([").concat(al,"])")].concat(l.map(function(m){return".".concat(m,":not([").concat(al,"])")})).join(", ");if(c.length===0)return Promise.resolve();var f=[];try{f=Fu(s.querySelectorAll(c))}catch{}if(f.length>0)i("pending"),r("complete");else return Promise.resolve();var d=Av.begin("onTree"),h=f.reduce(function(m,_){try{var v=dT(_);v&&m.push(v)}catch(x){kE||x.name==="MissingIcon"&&console.error(x)}return m},[]);return new Promise(function(m,_){Promise.all(h).then(function(v){cT(v,function(){i("active"),i("complete"),r("pending"),typeof e=="function"&&e(),d(),m()})}).catch(function(v){d(),_(v)})})}function ND(s){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;dT(s).then(function(t){t&&cT([t],e)})}function UD(s){return function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(e||{}).icon?e:j0(e||{}),r=t.mask;return r&&(r=(r||{}).icon?r:j0(r||{})),s(i,Ue(Ue({},t),{},{mask:r}))}}var LD=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=t.transform,r=i===void 0?vr:i,l=t.symbol,c=l===void 0?!1:l,f=t.mask,d=f===void 0?null:f,h=t.maskId,m=h===void 0?null:h,_=t.classes,v=_===void 0?[]:_,x=t.attributes,b=x===void 0?{}:x,M=t.styles,y=M===void 0?{}:M;if(e){var S=e.prefix,A=e.iconName,N=e.icon;return gp(Ue({type:"icon"},e),function(){return rl("beforeDOMElementCreation",{iconDefinition:e,params:t}),Tv({icons:{main:Y0(N),mask:d?Y0(d.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:A,transform:Ue(Ue({},vr),r),symbol:c,maskId:m,extra:{attributes:b,styles:y,classes:v}})})}},OD={mixout:function(){return{icon:UD(LD)}},hooks:function(){return{mutationObserverCallbacks:function(t){return t.treeCallback=bb,t.nodeCallback=ND,t}}},provides:function(e){e.i2svg=function(t){var i=t.node,r=i===void 0?An:i,l=t.callback,c=l===void 0?function(){}:l;return bb(r,c)},e.generateSvgReplacementMutation=function(t,i){var r=i.iconName,l=i.prefix,c=i.transform,f=i.symbol,d=i.mask,h=i.maskId,m=i.extra;return new Promise(function(_,v){Promise.all([q0(r,l),d.iconName?q0(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(x){var b=dp(x,2),M=b[0],y=b[1];_([t,Tv({icons:{main:M,mask:y},prefix:l,iconName:r,transform:c,symbol:f,maskId:h,extra:m,watchable:!0})])}).catch(v)})},e.generateAbstractIcon=function(t){var i=t.children,r=t.attributes,l=t.main,c=t.transform,f=t.styles,d=hp(f);d.length>0&&(r.style=d);var h;return bv(c)&&(h=lo("generateAbstractTransformGrouping",{main:l,transform:c,containerWidth:l.width,iconWidth:l.width})),i.push(h||l.icon),{children:i,attributes:r}}}},PD={mixout:function(){return{layer:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.classes,l=r===void 0?[]:r;return gp({type:"layer"},function(){rl("beforeDOMElementCreation",{assembler:t,params:i});var c=[];return t(function(f){Array.isArray(f)?f.map(function(d){c=c.concat(d.abstract)}):c=c.concat(f.abstract)}),[{tag:"span",attributes:{class:["".concat(ft.cssPrefix,"-layers")].concat(sr(l)).join(" ")},children:c}]})}}}},FD={mixout:function(){return{counter:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};i.title;var r=i.classes,l=r===void 0?[]:r,c=i.attributes,f=c===void 0?{}:c,d=i.styles,h=d===void 0?{}:d;return gp({type:"counter",content:t},function(){return rl("beforeDOMElementCreation",{content:t,params:i}),pD({content:t.toString(),extra:{attributes:f,styles:h,classes:["".concat(ft.cssPrefix,"-layers-counter")].concat(sr(l))}})})}}}},ID={mixout:function(){return{text:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.transform,l=r===void 0?vr:r,c=i.classes,f=c===void 0?[]:c,d=i.attributes,h=d===void 0?{}:d,m=i.styles,_=m===void 0?{}:m;return gp({type:"text",content:t},function(){return rl("beforeDOMElementCreation",{content:t,params:i}),gb({content:t,transform:Ue(Ue({},vr),l),extra:{attributes:h,styles:_,classes:["".concat(ft.cssPrefix,"-layers-text")].concat(sr(f))}})})}}},provides:function(e){e.generateLayersText=function(t,i){var r=i.transform,l=i.extra,c=null,f=null;if(gE){var d=parseInt(getComputedStyle(t).fontSize,10),h=t.getBoundingClientRect();c=h.width/d,f=h.height/d}return Promise.resolve([t,gb({content:t.innerHTML,width:c,height:f,transform:r,extra:l,watchable:!0})])}}},hT=new RegExp('"',"ug"),Mb=[1105920,1112319],Eb=Ue(Ue(Ue(Ue({},{FontAwesome:{normal:"fas",400:"fas"}}),_R),Ew),AR),Q0=Object.keys(Eb).reduce(function(s,e){return s[e.toLowerCase()]=Eb[e],s},{}),zD=Object.keys(Q0).reduce(function(s,e){var t=Q0[e];return s[e]=t[900]||sr(Object.entries(t))[0][1],s},{});function BD(s){var e=s.replace(hT,"");return QE(sr(e)[0]||"")}function HD(s){var e=s.getPropertyValue("font-feature-settings").includes("ss01"),t=s.getPropertyValue("content"),i=t.replace(hT,""),r=i.codePointAt(0),l=r>=Mb[0]&&r<=Mb[1],c=i.length===2?i[0]===i[1]:!1;return l||c||e}function GD(s,e){var t=s.replace(/^['"]|['"]$/g,"").toLowerCase(),i=parseInt(e),r=isNaN(i)?"normal":i;return(Q0[t]||{})[r]||zD[t]}function Tb(s,e){var t="".concat(Tw).concat(e.replace(":","-"));return new Promise(function(i,r){if(s.getAttribute(t)!==null)return i();var l=Fu(s.children),c=l.filter(function(P){return P.getAttribute(H0)===e})[0],f=so.getComputedStyle(s,e),d=f.getPropertyValue("font-family"),h=d.match(Dw),m=f.getPropertyValue("font-weight"),_=f.getPropertyValue("content");if(c&&!h)return s.removeChild(c),i();if(h&&_!=="none"&&_!==""){var v=f.getPropertyValue("content"),x=GD(d,m),b=BD(v),M=h[0].startsWith("FontAwesome"),y=HD(f),S=Ev(x,b),A=S;if(M){var N=Qw(b);N.iconName&&N.prefix&&(S=N.iconName,x=N.prefix)}if(S&&!y&&(!c||c.getAttribute(vv)!==x||c.getAttribute(xv)!==A)){s.setAttribute(t,A),c&&s.removeChild(c);var R=RD(),L=R.extra;L.attributes[H0]=e,q0(S,x).then(function(P){var D=Tv(Ue(Ue({},R),{},{icons:{main:P,mask:sT()},prefix:x,iconName:A,extra:L,watchable:!0})),T=An.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?s.insertBefore(T,s.firstChild):s.appendChild(T),T.outerHTML=D.map(function(w){return Df(w)}).join(`
`),s.removeAttribute(t),i()}).catch(r)}else i()}else i()})}function VD(s){return Promise.all([Tb(s,"::before"),Tb(s,"::after")])}function kD(s){return s.parentNode!==document.head&&!~Cw.indexOf(s.tagName.toUpperCase())&&!s.getAttribute(H0)&&(!s.parentNode||s.parentNode.tagName!=="svg")}var XD=function(e){return!!e&&VE.some(function(t){return e.includes(t)})},WD=function(e){if(!e)return[];var t=new Set,i=e.split(/,(?![^()]*\))/).map(function(d){return d.trim()});i=i.flatMap(function(d){return d.includes("(")?d:d.split(",").map(function(h){return h.trim()})});var r=wh(i),l;try{for(r.s();!(l=r.n()).done;){var c=l.value;if(XD(c)){var f=VE.reduce(function(d,h){return d.replace(h,"")},c);f!==""&&f!=="*"&&t.add(f)}}}catch(d){r.e(d)}finally{r.f()}return t};function Ab(s){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(vs){var t;if(e)t=s;else if(ft.searchPseudoElementsFullScan)t=s.querySelectorAll("*");else{var i=new Set,r=wh(document.styleSheets),l;try{for(r.s();!(l=r.n()).done;){var c=l.value;try{var f=wh(c.cssRules),d;try{for(f.s();!(d=f.n()).done;){var h=d.value,m=WD(h.selectorText),_=wh(m),v;try{for(_.s();!(v=_.n()).done;){var x=v.value;i.add(x)}}catch(M){_.e(M)}finally{_.f()}}}catch(M){f.e(M)}finally{f.f()}}catch(M){ft.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(c.href," (").concat(M.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(M){r.e(M)}finally{r.f()}if(!i.size)return;var b=Array.from(i).join(", ");try{t=s.querySelectorAll(b)}catch{}}return new Promise(function(M,y){var S=Fu(t).filter(kD).map(VD),A=Av.begin("searchPseudoElements");fT(),Promise.all(S).then(function(){A(),K0(),M()}).catch(function(){A(),K0(),y()})})}}var jD={hooks:function(){return{mutationObserverCallbacks:function(t){return t.pseudoElementsCallback=Ab,t}}},provides:function(e){e.pseudoElements2svg=function(t){var i=t.node,r=i===void 0?An:i;ft.searchPseudoElements&&Ab(r)}}},Cb=!1,YD={mixout:function(){return{dom:{unwatch:function(){fT(),Cb=!0}}}},hooks:function(){return{bootstrap:function(){yb(W0("mutationObserverCallbacks",{}))},noAuto:function(){ED()},watch:function(t){var i=t.observeMutationsRoot;Cb?K0():yb(W0("mutationObserverCallbacks",{observeMutationsRoot:i}))}}}},Rb=function(e){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(i,r){var l=r.toLowerCase().split("-"),c=l[0],f=l.slice(1).join("-");if(c&&f==="h")return i.flipX=!0,i;if(c&&f==="v")return i.flipY=!0,i;if(f=parseFloat(f),isNaN(f))return i;switch(c){case"grow":i.size=i.size+f;break;case"shrink":i.size=i.size-f;break;case"left":i.x=i.x-f;break;case"right":i.x=i.x+f;break;case"up":i.y=i.y-f;break;case"down":i.y=i.y+f;break;case"rotate":i.rotate=i.rotate+f;break}return i},t)},qD={mixout:function(){return{parse:{transform:function(t){return Rb(t)}}}},hooks:function(){return{parseNodeAttributes:function(t,i){var r=i.getAttribute("data-fa-transform");return r&&(t.transform=Rb(r)),t}}},provides:function(e){e.generateAbstractTransformGrouping=function(t){var i=t.main,r=t.transform,l=t.containerWidth,c=t.iconWidth,f={transform:"translate(".concat(l/2," 256)")},d="translate(".concat(r.x*32,", ").concat(r.y*32,") "),h="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),m="rotate(".concat(r.rotate," 0 0)"),_={transform:"".concat(d," ").concat(h," ").concat(m)},v={transform:"translate(".concat(c/2*-1," -256)")},x={outer:f,inner:_,path:v};return{tag:"g",attributes:Ue({},x.outer),children:[{tag:"g",attributes:Ue({},x.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:Ue(Ue({},i.icon.attributes),x.path)}]}]}}}},Gg={x:0,y:0,width:"100%",height:"100%"};function wb(s){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return s.attributes&&(s.attributes.fill||e)&&(s.attributes.fill="black"),s}function ZD(s){return s.tag==="g"?s.children:[s]}var KD={hooks:function(){return{parseNodeAttributes:function(t,i){var r=i.getAttribute("data-fa-mask"),l=r?mp(r.split(" ").map(function(c){return c.trim()})):sT();return l.prefix||(l.prefix=oo()),t.mask=l,t.maskId=i.getAttribute("data-fa-mask-id"),t}}},provides:function(e){e.generateAbstractMask=function(t){var i=t.children,r=t.attributes,l=t.main,c=t.mask,f=t.maskId,d=t.transform,h=l.width,m=l.icon,_=c.width,v=c.icon,x=Gw({transform:d,containerWidth:_,iconWidth:h}),b={tag:"rect",attributes:Ue(Ue({},Gg),{},{fill:"white"})},M=m.children?{children:m.children.map(wb)}:{},y={tag:"g",attributes:Ue({},x.inner),children:[wb(Ue({tag:m.tag,attributes:Ue(Ue({},m.attributes),x.path)},M))]},S={tag:"g",attributes:Ue({},x.outer),children:[y]},A="mask-".concat(f||ub()),N="clip-".concat(f||ub()),R={tag:"mask",attributes:Ue(Ue({},Gg),{},{id:A,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[b,S]},L={tag:"defs",children:[{tag:"clipPath",attributes:{id:N},children:ZD(v)},R]};return i.push(L,{tag:"rect",attributes:Ue({fill:"currentColor","clip-path":"url(#".concat(N,")"),mask:"url(#".concat(A,")")},Gg)}),{children:i,attributes:r}}}},QD={provides:function(e){var t=!1;so.matchMedia&&(t=so.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var i=[],r={fill:"currentColor"},l={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};i.push({tag:"path",attributes:Ue(Ue({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var c=Ue(Ue({},l),{},{attributeName:"opacity"}),f={tag:"circle",attributes:Ue(Ue({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||f.children.push({tag:"animate",attributes:Ue(Ue({},l),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:Ue(Ue({},c),{},{values:"1;0;1;1;0;1;"})}),i.push(f),i.push({tag:"path",attributes:Ue(Ue({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:Ue(Ue({},c),{},{values:"1;0;0;0;0;1;"})}]}),t||i.push({tag:"path",attributes:Ue(Ue({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:Ue(Ue({},c),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:i}}}},JD={hooks:function(){return{parseNodeAttributes:function(t,i){var r=i.getAttribute("data-fa-symbol"),l=r===null?!1:r===""?!0:r;return t.symbol=l,t}}}},$D=[Xw,OD,PD,FD,ID,jD,YD,qD,KD,QD,JD];sD($D,{mixoutsTo:Ca});Ca.noAuto;var pf=Ca.config;Ca.library;Ca.dom;var pT=Ca.parse;Ca.findIconDefinition;Ca.toHtml;var eN=Ca.icon;Ca.layer;Ca.text;Ca.counter;function tN(s){return s=s-0,s===s}function mT(s){return tN(s)?s:(s=s.replace(/[_-]+(.)?/g,(e,t)=>t?t.toUpperCase():""),s.charAt(0).toLowerCase()+s.slice(1))}function nN(s){return s.charAt(0).toUpperCase()+s.slice(1)}var Xl=new Map,iN=1e3;function aN(s){if(Xl.has(s))return Xl.get(s);const e={};let t=0;const i=s.length;for(;t<i;){const r=s.indexOf(";",t),l=r===-1?i:r,c=s.slice(t,l).trim();if(c){const f=c.indexOf(":");if(f>0){const d=c.slice(0,f).trim(),h=c.slice(f+1).trim();if(d&&h){const m=mT(d);e[m.startsWith("webkit")?nN(m):m]=h}}}t=l+1}if(Xl.size===iN){const r=Xl.keys().next().value;r&&Xl.delete(r)}return Xl.set(s,e),e}function gT(s,e,t={}){if(typeof e=="string")return e;const i=(e.children||[]).map(m=>gT(s,m)),r=e.attributes||{},l={};for(const[m,_]of Object.entries(r))switch(!0){case m==="class":{l.className=_;break}case m==="style":{l.style=aN(String(_));break}case m.startsWith("aria-"):case m.startsWith("data-"):{l[m.toLowerCase()]=_;break}default:l[mT(m)]=_}const{style:c,role:f,"aria-label":d,...h}=t;return c&&(l.style=l.style?{...l.style,...c}:c),f&&(l.role=f),d&&(l["aria-label"]=d,l["aria-hidden"]="false"),s(e.tag,{...l,...h},...i)}var rN=gT.bind(null,mv.createElement),Db=(s,e)=>{const t=ln.useId();return s||(e?t:void 0)},sN=class{constructor(s="react-fontawesome"){this.enabled=!1;let e=!1;try{e=typeof process<"u"&&!1}catch{}this.scope=s,this.enabled=e}log(...s){this.enabled&&console.log(`[${this.scope}]`,...s)}warn(...s){this.enabled&&console.warn(`[${this.scope}]`,...s)}error(...s){this.enabled&&console.error(`[${this.scope}]`,...s)}},oN="searchPseudoElementsFullScan"in pf?"7.0.0":"6.0.0",lN=Number.parseInt(oN)>=7,Jc="fa",qr={beat:"fa-beat",fade:"fa-fade",beatFade:"fa-beat-fade",bounce:"fa-bounce",shake:"fa-shake",spin:"fa-spin",spinPulse:"fa-spin-pulse",spinReverse:"fa-spin-reverse",pulse:"fa-pulse"},uN={left:"fa-pull-left",right:"fa-pull-right"},cN={90:"fa-rotate-90",180:"fa-rotate-180",270:"fa-rotate-270"},fN={"2xs":"fa-2xs",xs:"fa-xs",sm:"fa-sm",lg:"fa-lg",xl:"fa-xl","2xl":"fa-2xl","1x":"fa-1x","2x":"fa-2x","3x":"fa-3x","4x":"fa-4x","5x":"fa-5x","6x":"fa-6x","7x":"fa-7x","8x":"fa-8x","9x":"fa-9x","10x":"fa-10x"},Zr={border:"fa-border",fixedWidth:"fa-fw",flip:"fa-flip",flipHorizontal:"fa-flip-horizontal",flipVertical:"fa-flip-vertical",inverse:"fa-inverse",rotateBy:"fa-rotate-by",swapOpacity:"fa-swap-opacity",widthAuto:"fa-width-auto"};function dN(s){const e=pf.cssPrefix||pf.familyPrefix||Jc;return e===Jc?s:s.replace(new RegExp(String.raw`(?<=^|\s)${Jc}-`,"g"),`${e}-`)}function hN(s){const{beat:e,fade:t,beatFade:i,bounce:r,shake:l,spin:c,spinPulse:f,spinReverse:d,pulse:h,fixedWidth:m,inverse:_,border:v,flip:x,size:b,rotation:M,pull:y,swapOpacity:S,rotateBy:A,widthAuto:N,className:R}=s,L=[];return R&&L.push(...R.split(" ")),e&&L.push(qr.beat),t&&L.push(qr.fade),i&&L.push(qr.beatFade),r&&L.push(qr.bounce),l&&L.push(qr.shake),c&&L.push(qr.spin),d&&L.push(qr.spinReverse),f&&L.push(qr.spinPulse),h&&L.push(qr.pulse),m&&L.push(Zr.fixedWidth),_&&L.push(Zr.inverse),v&&L.push(Zr.border),x===!0&&L.push(Zr.flip),(x==="horizontal"||x==="both")&&L.push(Zr.flipHorizontal),(x==="vertical"||x==="both")&&L.push(Zr.flipVertical),b!=null&&L.push(fN[b]),M!=null&&M!==0&&L.push(cN[M]),y!=null&&L.push(uN[y]),S&&L.push(Zr.swapOpacity),lN?(A&&L.push(Zr.rotateBy),N&&L.push(Zr.widthAuto),(pf.cssPrefix||pf.familyPrefix||Jc)===Jc?L:L.map(dN)):L}var pN=s=>typeof s=="object"&&"icon"in s&&!!s.icon;function Nb(s){if(s)return pN(s)?s:pT.icon(s)}function mN(s){return Object.keys(s)}var Ub=new sN("FontAwesomeIcon"),_T={border:!1,className:"",mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1},gN=new Set(Object.keys(_T)),Tn=mv.forwardRef((s,e)=>{const t={..._T,...s},{icon:i,mask:r,symbol:l,title:c,titleId:f,maskId:d,transform:h}=t,m=Db(d,!!r),_=Db(f,!!c),v=Nb(i);if(!v)return Ub.error("Icon lookup is undefined",i),null;const x=hN(t),b=typeof h=="string"?pT.transform(h):h,M=Nb(r),y=eN(v,{...x.length>0&&{classes:x},...b&&{transform:b},...M&&{mask:M},symbol:l,title:c,titleId:_,maskId:m});if(!y)return Ub.error("Could not find icon",v),null;const{abstract:S}=y,A={ref:e};for(const N of mN(t))gN.has(N)||(A[N]=t[N]);return rN(S[0],A)});Tn.displayName="FontAwesomeIcon";var _N={prefix:"fas",iconName:"minus",icon:[448,512,[8211,8722,10134,"subtract"],"f068","M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"]},Lb={prefix:"fas",iconName:"caret-right",icon:[256,512,[],"f0da","M249.3 235.8c10.2 12.6 9.5 31.1-2.2 42.8l-128 128c-9.2 9.2-22.9 11.9-34.9 6.9S64.5 396.9 64.5 384l0-256c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l128 128 2.2 2.4z"]},Ob={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},mf={prefix:"fas",iconName:"arrow-right-long",icon:[576,512,["long-arrow-right"],"f178","M566.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L466.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l434.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"]},vN={prefix:"fas",iconName:"x",icon:[384,512,[120],"58","M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"]},Uh={prefix:"fas",iconName:"arrow-right",icon:[512,512,[8594],"f061","M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-105.4 105.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"]},xN={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"]},wc={prefix:"fas",iconName:"angle-down",icon:[384,512,[8964],"f107","M169.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 306.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"]},yN={prefix:"fas",iconName:"circle-chevron-down",icon:[512,512,["chevron-circle-down"],"f13a","M256 0a256 256 0 1 0 0 512 256 256 0 1 0 0-512zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z"]},SN={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-160z"]},bN={prefix:"fas",iconName:"location-dot",icon:[384,512,["map-marker-alt"],"f3c5","M0 188.6C0 84.4 86 0 192 0S384 84.4 384 188.6c0 119.3-120.2 262.3-170.4 316.8-11.8 12.8-31.5 12.8-43.3 0-50.2-54.5-170.4-197.5-170.4-316.8zM192 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128z"]};const MN=()=>{const s=Og("policy"),e=Og("company");return Og("site"),V.jsxs("footer",{children:[V.jsxs("div",{className:"social-con",children:[V.jsx("h3",{children:"Social"}),V.jsxs("div",{children:[V.jsxs("a",{href:"#",children:["YouTube ",V.jsx(Tn,{icon:Uh})]}),V.jsxs("a",{href:"#",children:["Instagram ",V.jsx(Tn,{icon:Uh})]})]})]}),V.jsx("hr",{}),V.jsxs("div",{className:"fnb",children:[V.jsxs("div",{className:"foot-link-con",children:[V.jsx("ul",{className:"policy-nav",children:s.map(t=>V.jsx("li",{children:V.jsx("a",{href:"#",children:t.label})},t.label))}),V.jsxs("div",{className:"company-nav",children:[V.jsx("ul",{children:e.map(t=>V.jsxs("li",{children:[t.label,t.content&&V.jsx("span",{children:t.content})]},t.label))}),V.jsxs("a",{href:"https://map.naver.com/p/entry/place/1698208044?placePath=%2Fhome&c=15.00,0,0,0,dh",children:[V.jsx(Tn,{icon:bN})," 서울시 서초구 마방로 68(양재동 275) 동원산업빌딩"]})]})]}),V.jsxs("div",{className:"site-nav",children:[V.jsxs("div",{children:[V.jsx("button",{type:"button",children:V.jsx("a",{href:"#",children:"퇴직자 증명서 발급"})}),V.jsx("button",{type:"button",children:V.jsxs("a",{href:"#",children:["방문 예약 신청 ",V.jsx("span",{children:V.jsx(Tn,{icon:Uh})})]})})]}),V.jsxs("button",{type:"button",className:"family",children:["패밀리사이트 ",V.jsx("span",{children:V.jsx(Tn,{icon:yN})})]})]})]}),V.jsx("hr",{}),V.jsx("div",{className:"copyright",children:V.jsx("p",{children:"©2025                 Dongwon Group All rights reserved."})})]})},Vg=[{id:"about",label:"그룹소개",children:[{id:"philosophy",label:"경영철학"},{id:"History",label:"연혁"},{id:"data-room",label:"자료실"}]},{id:"Business field",label:"사업분야",children:[{id:"Ocean",label:"해양•물류",children:[{id:"Industries",label:"동원산업"},{id:"LOEX",label:"동원로엑스"},{id:"LOEX Refrigeration",label:"동원로엑스냉장"},{id:"LOEX Refrigeration2",label:"동원로엑스냉장투"},{id:"Global Terminal Busan",label:"동원글로벌터미널부산"},{id:"BIDC",label:"BIDC"}]},{id:"Food",label:"식품•유통",children:[{id:"F&B",label:"동원F&B"},{id:"Home Food",label:"동원홈푸드"},{id:"Farm",label:"동원팜스"}]},{id:"Service",label:"생활서비스",children:[{id:"Systems",label:"동원시스템즈"},{id:"Erection",label:"동원건설산업"},{id:"CNS",label:"동원CNS"},{id:"technology",label:"동원기술투자"}]},{id:"Global",label:"글로벌",children:[{id:"StarKist",label:"StarKist"},{id:"TALOFA",label:"TALOFA SYSTEMS"},{id:"S.C.A",label:"S.C.A SA"},{id:"CAPSEN",label:"CAPSEN"},{id:"TTP",label:"TTP"}]}]},{id:"Media",label:"미디어",children:[{id:"Contents",label:"콘텐츠룸"},{id:"News",label:"뉴스룸"}]},{id:"Management",label:"지속가능경영",children:[{id:"ESG",label:"ESG"},{id:"Ethical",label:"정도경영"},{id:"Management Report",label:"지속가능경영 보고서"}]},{id:"Investment",label:"투자정보",children:[{id:"Disclosure",label:"공시정보"},{id:"Announcement",label:"공고"},{id:"Report",label:"보고서"}]},{id:"Employment",label:"채용",children:[{id:"Talent",label:"인재상"},{id:"Culture",label:"기업 문화"},{id:"Site",label:"채용사이트→"}]}],EN=()=>{const[s,e]=ln.useState(!1),[t,i]=ln.useState(null),[r,l]=ln.useState([]),[c,f]=ln.useState(!1),[d,h]=ln.useState(!1),[m,_]=ln.useState("KR"),[v,x]=ln.useState(!1),[b,M]=ln.useState(!1),[y,S]=ln.useState(!0),A=ln.useRef(0);ln.useEffect(()=>{const D=setTimeout(()=>{S(!1)},1e3);return()=>clearTimeout(D)},[]),ln.useEffect(()=>{const D=()=>{const T=window.scrollY;window.innerWidth<=1024?x(!1):T>A.current&&T>80?x(!0):x(!1),A.current=T;const q=document.querySelectorAll(".header-light-section"),H=120;let k=!1;q.forEach(J=>{const ee=J.getBoundingClientRect();ee.top<=H&&ee.bottom>H&&(k=!0)}),M(k)};return D(),window.addEventListener("scroll",D),window.addEventListener("resize",D),()=>{window.removeEventListener("scroll",D),window.removeEventListener("resize",D)}},[]);const N=D=>{i(T=>T===D?null:D)},R=D=>{l(T=>T.includes(D)?T.filter(w=>w!==D):[...T,D])},L=()=>{h(!0),f(!1),i(null),e(!1)},P=()=>{h(!1)};return V.jsxs("header",{className:`
        ${y?"intro-hidden":""}
        ${v?"hide":""}
        ${b?"white-mode":""}
        ${c?"open":""}
        ${d?"search-open":""}
      `,children:[V.jsxs("nav",{children:[V.jsx("a",{href:"#",children:V.jsx("div",{className:"logo",children:V.jsx("img",{src:"https://www.dongwon.com/asset/image/logo/dongwon_blue.svg",alt:"로고"})})}),V.jsx("ul",{className:"gnb",children:Vg.map(D=>V.jsx("li",{children:V.jsx("a",{href:"#",children:D.label})},D.id))}),V.jsxs("div",{className:"nav-btn",children:[V.jsxs("div",{className:`lang-btn ${s?"active":""}`,onClick:()=>e(!s),onMouseLeave:()=>e(!1),children:[V.jsx("button",{children:m}),V.jsx("p",{children:V.jsx(Tn,{icon:wc})}),V.jsx("div",{children:V.jsxs("div",{className:"lang-select-box",children:[V.jsx("p",{onClick:()=>_("KR"),className:m==="KR"?"active":"",children:"KR"}),V.jsx("p",{onClick:()=>_("EN"),className:m==="EN"?"active":"",children:"EN"})]})})]}),d?V.jsx("button",{type:"button",className:"search-btn",onClick:P,children:V.jsx(Tn,{icon:vN})}):V.jsx("button",{type:"button",className:"search-btn",onClick:L,children:V.jsx(Tn,{icon:Ob})}),V.jsxs("button",{type:"button",className:"ham-btn",onClick:()=>f(D=>!D),children:[V.jsx("span",{}),V.jsx("span",{})]})]})]}),V.jsx("div",{className:"submenu",children:V.jsxs("div",{className:"submenu-i",children:[Vg.map((D,T)=>V.jsx("ul",{className:"submenu-groups",children:D.children.map(w=>V.jsxs("li",{className:`submenu-group ${t===w.id?"open":""}`,children:[V.jsx("div",{className:"submenu-title",children:w.children?.length>0?V.jsxs(V.Fragment,{children:[V.jsx("a",{href:"#",children:w.label}),V.jsx(Tn,{icon:wc,className:t===w.id?"open":"",onClick:()=>N(w.id)})]}):V.jsx("a",{href:"#",children:w.label})}),w.children?.length>0&&V.jsx("ul",{className:"submenu-items",children:w.children.map(q=>V.jsx("li",{className:"submenu-item",children:V.jsx("a",{href:"#",children:q.label})},q.id))})]},w.id))},T)),V.jsx("div",{className:"submenu-bottom-bar",children:V.jsx("video",{src:"./video/header-bottom.mp4",autoPlay:!0,muted:!0,loop:!0,playsInline:!0})})]})}),V.jsx("div",{className:`search-menu ${d?"open":""}`,children:V.jsxs("div",{className:"search-menu-inner",children:[V.jsxs("form",{className:"search-form",children:[V.jsx("input",{type:"text",placeholder:"검색어를 입력해 주세요.",className:"search-input"}),V.jsx("button",{type:"submit",className:"search-submit-btn",children:V.jsx(Tn,{icon:Ob})})]}),V.jsxs("div",{className:"search-tags",children:[V.jsx("button",{type:"button",children:"# 동원"}),V.jsx("button",{type:"button",children:"# ESG 경영"}),V.jsx("button",{type:"button",children:"# 채용"}),V.jsx("button",{type:"button",children:"# 사업분야"})]})]})}),V.jsx("div",{className:`mobile-menu ${c?"open":""}`,children:V.jsxs("div",{className:"mobile-menu-inner",children:[V.jsx("ul",{className:"mobile-menu-list",children:Vg.map(D=>V.jsxs("li",{className:`mobile-menu-group ${r.includes(D.id)?"open":""}`,children:[V.jsxs("button",{type:"button",className:"mobile-menu-title",onClick:()=>R(D.id),children:[V.jsx("span",{children:D.label}),V.jsx(Tn,{icon:wc,className:r.includes(D.id)?"open":""})]}),V.jsx("div",{className:"mobile-menu-items",children:V.jsx("div",{className:"mobile-menu-items-inner",children:D.children?.map(T=>V.jsxs("ul",{className:`mobile-menu-item ${t===T.id?"open":""}`,onClick:()=>N(T.id),children:[T.children?.length>0?V.jsxs("li",{className:"mobile-menu-item-head",children:[V.jsx("a",{href:"#",children:T.label}),V.jsx(Tn,{icon:wc,className:t===T.id?"open":""})]}):V.jsx("a",{href:"#",children:T.label}),T.children?.length>0&&V.jsx("ul",{className:"mobile-submenu-items",children:T.children.map(w=>V.jsx("li",{className:"mobile-submenu-item",children:V.jsx("a",{href:"#",children:w.label})},w.id))})]},T.id))})})]},D.id))}),V.jsxs("div",{className:`lang-btn ${s?"active":""}`,onClick:()=>e(!s),children:[V.jsx("button",{children:m}),V.jsx("p",{children:V.jsx(Tn,{icon:wc})}),V.jsx("div",{children:V.jsxs("div",{className:"lang-select-box",children:[V.jsx("p",{onClick:()=>_("KR"),className:m==="KR"?"active":"",children:"KR"}),V.jsx("p",{onClick:()=>_("EN"),className:m==="EN"?"active":"",children:"EN"})]})})]}),V.jsx("div",{className:"mobile-menu-bottom-bar",children:V.jsx("video",{src:"./video/header-bottom.mp4",autoPlay:!0,muted:!0,loop:!0,playsInline:!0})})]})})]})};const Rv="183",TN=0,Pb=1,AN=2,Lh=1,CN=2,Gc=3,uo=0,Ji=1,is=2,os=0,mu=1,Fb=2,Ib=3,zb=4,RN=5,Xo=100,wN=101,DN=102,NN=103,UN=104,LN=200,ON=201,PN=202,FN=203,J0=204,$0=205,IN=206,zN=207,BN=208,HN=209,GN=210,VN=211,kN=212,XN=213,WN=214,e_=0,t_=1,n_=2,Eu=3,i_=4,a_=5,r_=6,s_=7,vT=0,jN=1,YN=2,Mr=0,xT=1,yT=2,ST=3,bT=4,MT=5,ET=6,TT=7,AT=300,sl=301,Tu=302,kg=303,Xg=304,_p=306,o_=1e3,rs=1001,l_=1002,_i=1003,qN=1004,Yd=1005,$n=1006,Wg=1007,Yo=1008,Va=1009,CT=1010,RT=1011,gf=1012,wv=1013,Cr=1014,xr=1015,hs=1016,Dv=1017,Nv=1018,_f=1020,wT=35902,DT=35899,NT=1021,UT=1022,ka=1023,ps=1026,qo=1027,LT=1028,Uv=1029,Au=1030,Lv=1031,Ov=1033,Oh=33776,Ph=33777,Fh=33778,Ih=33779,u_=35840,c_=35841,f_=35842,d_=35843,h_=36196,p_=37492,m_=37496,g_=37488,__=37489,v_=37490,x_=37491,y_=37808,S_=37809,b_=37810,M_=37811,E_=37812,T_=37813,A_=37814,C_=37815,R_=37816,w_=37817,D_=37818,N_=37819,U_=37820,L_=37821,O_=36492,P_=36494,F_=36495,I_=36283,z_=36284,B_=36285,H_=36286,ZN=3200,KN=0,QN=1,Ks="",Ba="srgb",Cu="srgb-linear",Qh="linear",on="srgb",Wl=7680,Bb=519,JN=512,$N=513,eU=514,Pv=515,tU=516,nU=517,Fv=518,iU=519,Hb=35044,Gb="300 es",yr=2e3,Jh=2001;function aU(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function $h(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function rU(){const s=$h("canvas");return s.style.display="block",s}const Vb={};function kb(...s){const e="THREE."+s.shift();console.log(e,...s)}function OT(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Et(...s){s=OT(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function en(...s){s=OT(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function ep(...s){const e=s.join(" ");e in Vb||(Vb[e]=!0,Et(...s))}function sU(s,e,t){return new Promise(function(i,r){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:r();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:i()}}setTimeout(l,t)})}const oU={[e_]:t_,[n_]:r_,[i_]:s_,[Eu]:a_,[t_]:e_,[r_]:n_,[s_]:i_,[a_]:Eu};class Iu{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const l=r.indexOf(t);l!==-1&&r.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let l=0,c=r.length;l<c;l++)r[l].call(this,e);e.target=null}}}const Mi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],jg=Math.PI/180,G_=180/Math.PI;function Nf(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Mi[s&255]+Mi[s>>8&255]+Mi[s>>16&255]+Mi[s>>24&255]+"-"+Mi[e&255]+Mi[e>>8&255]+"-"+Mi[e>>16&15|64]+Mi[e>>24&255]+"-"+Mi[t&63|128]+Mi[t>>8&255]+"-"+Mi[t>>16&255]+Mi[t>>24&255]+Mi[i&255]+Mi[i>>8&255]+Mi[i>>16&255]+Mi[i>>24&255]).toLowerCase()}function jt(s,e,t){return Math.max(e,Math.min(t,s))}function lU(s,e){return(s%e+e)%e}function Yg(s,e,t){return(1-t)*s+t*e}function Dc(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ki(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Yt{constructor(e=0,t=0){Yt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=jt(this.x,e.x,t.x),this.y=jt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=jt(this.x,e,t),this.y=jt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*i-c*r+e.x,this.y=l*r+c*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zu{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,l,c,f){let d=i[r+0],h=i[r+1],m=i[r+2],_=i[r+3],v=l[c+0],x=l[c+1],b=l[c+2],M=l[c+3];if(_!==M||d!==v||h!==x||m!==b){let y=d*v+h*x+m*b+_*M;y<0&&(v=-v,x=-x,b=-b,M=-M,y=-y);let S=1-f;if(y<.9995){const A=Math.acos(y),N=Math.sin(A);S=Math.sin(S*A)/N,f=Math.sin(f*A)/N,d=d*S+v*f,h=h*S+x*f,m=m*S+b*f,_=_*S+M*f}else{d=d*S+v*f,h=h*S+x*f,m=m*S+b*f,_=_*S+M*f;const A=1/Math.sqrt(d*d+h*h+m*m+_*_);d*=A,h*=A,m*=A,_*=A}}e[t]=d,e[t+1]=h,e[t+2]=m,e[t+3]=_}static multiplyQuaternionsFlat(e,t,i,r,l,c){const f=i[r],d=i[r+1],h=i[r+2],m=i[r+3],_=l[c],v=l[c+1],x=l[c+2],b=l[c+3];return e[t]=f*b+m*_+d*x-h*v,e[t+1]=d*b+m*v+h*_-f*x,e[t+2]=h*b+m*x+f*v-d*_,e[t+3]=m*b-f*_-d*v-h*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,l=e._z,c=e._order,f=Math.cos,d=Math.sin,h=f(i/2),m=f(r/2),_=f(l/2),v=d(i/2),x=d(r/2),b=d(l/2);switch(c){case"XYZ":this._x=v*m*_+h*x*b,this._y=h*x*_-v*m*b,this._z=h*m*b+v*x*_,this._w=h*m*_-v*x*b;break;case"YXZ":this._x=v*m*_+h*x*b,this._y=h*x*_-v*m*b,this._z=h*m*b-v*x*_,this._w=h*m*_+v*x*b;break;case"ZXY":this._x=v*m*_-h*x*b,this._y=h*x*_+v*m*b,this._z=h*m*b+v*x*_,this._w=h*m*_-v*x*b;break;case"ZYX":this._x=v*m*_-h*x*b,this._y=h*x*_+v*m*b,this._z=h*m*b-v*x*_,this._w=h*m*_+v*x*b;break;case"YZX":this._x=v*m*_+h*x*b,this._y=h*x*_+v*m*b,this._z=h*m*b-v*x*_,this._w=h*m*_-v*x*b;break;case"XZY":this._x=v*m*_-h*x*b,this._y=h*x*_-v*m*b,this._z=h*m*b+v*x*_,this._w=h*m*_+v*x*b;break;default:Et("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],l=t[8],c=t[1],f=t[5],d=t[9],h=t[2],m=t[6],_=t[10],v=i+f+_;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(m-d)*x,this._y=(l-h)*x,this._z=(c-r)*x}else if(i>f&&i>_){const x=2*Math.sqrt(1+i-f-_);this._w=(m-d)/x,this._x=.25*x,this._y=(r+c)/x,this._z=(l+h)/x}else if(f>_){const x=2*Math.sqrt(1+f-i-_);this._w=(l-h)/x,this._x=(r+c)/x,this._y=.25*x,this._z=(d+m)/x}else{const x=2*Math.sqrt(1+_-i-f);this._w=(c-r)/x,this._x=(l+h)/x,this._y=(d+m)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(jt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,l=e._z,c=e._w,f=t._x,d=t._y,h=t._z,m=t._w;return this._x=i*m+c*f+r*h-l*d,this._y=r*m+c*d+l*f-i*h,this._z=l*m+c*h+i*d-r*f,this._w=c*m-i*f-r*d-l*h,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,l=e._z,c=e._w,f=this.dot(e);f<0&&(i=-i,r=-r,l=-l,c=-c,f=-f);let d=1-t;if(f<.9995){const h=Math.acos(f),m=Math.sin(h);d=Math.sin(d*h)/m,t=Math.sin(t*h)/m,this._x=this._x*d+i*t,this._y=this._y*d+r*t,this._z=this._z*d+l*t,this._w=this._w*d+c*t,this._onChangeCallback()}else this._x=this._x*d+i*t,this._y=this._y*d+r*t,this._z=this._z*d+l*t,this._w=this._w*d+c*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),l=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class he{constructor(e=0,t=0,i=0){he.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xb.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xb.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,l=e.elements;return this.x=l[0]*t+l[3]*i+l[6]*r,this.y=l[1]*t+l[4]*i+l[7]*r,this.z=l[2]*t+l[5]*i+l[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,l=e.elements,c=1/(l[3]*t+l[7]*i+l[11]*r+l[15]);return this.x=(l[0]*t+l[4]*i+l[8]*r+l[12])*c,this.y=(l[1]*t+l[5]*i+l[9]*r+l[13])*c,this.z=(l[2]*t+l[6]*i+l[10]*r+l[14])*c,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,l=e.x,c=e.y,f=e.z,d=e.w,h=2*(c*r-f*i),m=2*(f*t-l*r),_=2*(l*i-c*t);return this.x=t+d*h+c*_-f*m,this.y=i+d*m+f*h-l*_,this.z=r+d*_+l*m-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,l=e.elements;return this.x=l[0]*t+l[4]*i+l[8]*r,this.y=l[1]*t+l[5]*i+l[9]*r,this.z=l[2]*t+l[6]*i+l[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=jt(this.x,e.x,t.x),this.y=jt(this.y,e.y,t.y),this.z=jt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=jt(this.x,e,t),this.y=jt(this.y,e,t),this.z=jt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,l=e.z,c=t.x,f=t.y,d=t.z;return this.x=r*d-l*f,this.y=l*c-i*d,this.z=i*f-r*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return qg.copy(this).projectOnVector(e),this.sub(qg)}reflect(e){return this.sub(qg.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qg=new he,Xb=new zu;class Ut{constructor(e,t,i,r,l,c,f,d,h){Ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,l,c,f,d,h)}set(e,t,i,r,l,c,f,d,h){const m=this.elements;return m[0]=e,m[1]=r,m[2]=f,m[3]=t,m[4]=l,m[5]=d,m[6]=i,m[7]=c,m[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,l=this.elements,c=i[0],f=i[3],d=i[6],h=i[1],m=i[4],_=i[7],v=i[2],x=i[5],b=i[8],M=r[0],y=r[3],S=r[6],A=r[1],N=r[4],R=r[7],L=r[2],P=r[5],D=r[8];return l[0]=c*M+f*A+d*L,l[3]=c*y+f*N+d*P,l[6]=c*S+f*R+d*D,l[1]=h*M+m*A+_*L,l[4]=h*y+m*N+_*P,l[7]=h*S+m*R+_*D,l[2]=v*M+x*A+b*L,l[5]=v*y+x*N+b*P,l[8]=v*S+x*R+b*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],l=e[3],c=e[4],f=e[5],d=e[6],h=e[7],m=e[8];return t*c*m-t*f*h-i*l*m+i*f*d+r*l*h-r*c*d}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],l=e[3],c=e[4],f=e[5],d=e[6],h=e[7],m=e[8],_=m*c-f*h,v=f*d-m*l,x=h*l-c*d,b=t*_+i*v+r*x;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/b;return e[0]=_*M,e[1]=(r*h-m*i)*M,e[2]=(f*i-r*c)*M,e[3]=v*M,e[4]=(m*t-r*d)*M,e[5]=(r*l-f*t)*M,e[6]=x*M,e[7]=(i*d-h*t)*M,e[8]=(c*t-i*l)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,l,c,f){const d=Math.cos(l),h=Math.sin(l);return this.set(i*d,i*h,-i*(d*c+h*f)+c+e,-r*h,r*d,-r*(-h*c+d*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(Zg.makeScale(e,t)),this}rotate(e){return this.premultiply(Zg.makeRotation(-e)),this}translate(e,t){return this.premultiply(Zg.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Zg=new Ut,Wb=new Ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jb=new Ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function uU(){const s={enabled:!0,workingColorSpace:Cu,spaces:{},convert:function(r,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===on&&(r.r=ls(r.r),r.g=ls(r.g),r.b=ls(r.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(r.applyMatrix3(this.spaces[l].toXYZ),r.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===on&&(r.r=gu(r.r),r.g=gu(r.g),r.b=gu(r.b))),r},workingToColorSpace:function(r,l){return this.convert(r,this.workingColorSpace,l)},colorSpaceToWorking:function(r,l){return this.convert(r,l,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ks?Qh:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,l=this.workingColorSpace){return r.fromArray(this.spaces[l].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,l,c){return r.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,l){return ep("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(r,l)},toWorkingColorSpace:function(r,l){return ep("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(r,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[Cu]:{primaries:e,whitePoint:i,transfer:Qh,toXYZ:Wb,fromXYZ:jb,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ba},outputColorSpaceConfig:{drawingBufferColorSpace:Ba}},[Ba]:{primaries:e,whitePoint:i,transfer:on,toXYZ:Wb,fromXYZ:jb,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ba}}}),s}const Kt=uU();function ls(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function gu(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let jl;class cU{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{jl===void 0&&(jl=$h("canvas")),jl.width=e.width,jl.height=e.height;const r=jl.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=jl}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=$h("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),l=r.data;for(let c=0;c<l.length;c++)l[c]=ls(l[c]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ls(t[i]/255)*255):t[i]=ls(t[i]);return{data:t,width:e.width,height:e.height}}else return Et("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let fU=0;class Iv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fU++}),this.uuid=Nf(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let l;if(Array.isArray(r)){l=[];for(let c=0,f=r.length;c<f;c++)r[c].isDataTexture?l.push(Kg(r[c].image)):l.push(Kg(r[c]))}else l=Kg(r);i.url=l}return t||(e.images[this.uuid]=i),i}}function Kg(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?cU.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Et("Texture: Unable to serialize Texture."),{})}let dU=0;const Qg=new he;class wi extends Iu{constructor(e=wi.DEFAULT_IMAGE,t=wi.DEFAULT_MAPPING,i=rs,r=rs,l=$n,c=Yo,f=ka,d=Va,h=wi.DEFAULT_ANISOTROPY,m=Ks){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dU++}),this.uuid=Nf(),this.name="",this.source=new Iv(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=l,this.minFilter=c,this.anisotropy=h,this.format=f,this.internalFormat=null,this.type=d,this.offset=new Yt(0,0),this.repeat=new Yt(1,1),this.center=new Yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Qg).x}get height(){return this.source.getSize(Qg).y}get depth(){return this.source.getSize(Qg).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Et(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Et(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==AT)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case o_:e.x=e.x-Math.floor(e.x);break;case rs:e.x=e.x<0?0:1;break;case l_:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case o_:e.y=e.y-Math.floor(e.y);break;case rs:e.y=e.y<0?0:1;break;case l_:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}wi.DEFAULT_IMAGE=null;wi.DEFAULT_MAPPING=AT;wi.DEFAULT_ANISOTROPY=1;class Gn{constructor(e=0,t=0,i=0,r=1){Gn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*i+c[8]*r+c[12]*l,this.y=c[1]*t+c[5]*i+c[9]*r+c[13]*l,this.z=c[2]*t+c[6]*i+c[10]*r+c[14]*l,this.w=c[3]*t+c[7]*i+c[11]*r+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,l;const d=e.elements,h=d[0],m=d[4],_=d[8],v=d[1],x=d[5],b=d[9],M=d[2],y=d[6],S=d[10];if(Math.abs(m-v)<.01&&Math.abs(_-M)<.01&&Math.abs(b-y)<.01){if(Math.abs(m+v)<.1&&Math.abs(_+M)<.1&&Math.abs(b+y)<.1&&Math.abs(h+x+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const N=(h+1)/2,R=(x+1)/2,L=(S+1)/2,P=(m+v)/4,D=(_+M)/4,T=(b+y)/4;return N>R&&N>L?N<.01?(i=0,r=.707106781,l=.707106781):(i=Math.sqrt(N),r=P/i,l=D/i):R>L?R<.01?(i=.707106781,r=0,l=.707106781):(r=Math.sqrt(R),i=P/r,l=T/r):L<.01?(i=.707106781,r=.707106781,l=0):(l=Math.sqrt(L),i=D/l,r=T/l),this.set(i,r,l,t),this}let A=Math.sqrt((y-b)*(y-b)+(_-M)*(_-M)+(v-m)*(v-m));return Math.abs(A)<.001&&(A=1),this.x=(y-b)/A,this.y=(_-M)/A,this.z=(v-m)/A,this.w=Math.acos((h+x+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=jt(this.x,e.x,t.x),this.y=jt(this.y,e.y,t.y),this.z=jt(this.z,e.z,t.z),this.w=jt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=jt(this.x,e,t),this.y=jt(this.y,e,t),this.z=jt(this.z,e,t),this.w=jt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hU extends Iu{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Gn(0,0,e,t),this.scissorTest=!1,this.viewport=new Gn(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},l=new wi(r),c=i.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:$n,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,l=this.textures.length;r<l;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Iv(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Er extends hU{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class PT extends wi{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=_i,this.minFilter=_i,this.wrapR=rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class pU extends wi{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=_i,this.minFilter=_i,this.wrapR=rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ei{constructor(e,t,i,r,l,c,f,d,h,m,_,v,x,b,M,y){ei.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,l,c,f,d,h,m,_,v,x,b,M,y)}set(e,t,i,r,l,c,f,d,h,m,_,v,x,b,M,y){const S=this.elements;return S[0]=e,S[4]=t,S[8]=i,S[12]=r,S[1]=l,S[5]=c,S[9]=f,S[13]=d,S[2]=h,S[6]=m,S[10]=_,S[14]=v,S[3]=x,S[7]=b,S[11]=M,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ei().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/Yl.setFromMatrixColumn(e,0).length(),l=1/Yl.setFromMatrixColumn(e,1).length(),c=1/Yl.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*l,t[5]=i[5]*l,t[6]=i[6]*l,t[7]=0,t[8]=i[8]*c,t[9]=i[9]*c,t[10]=i[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,l=e.z,c=Math.cos(i),f=Math.sin(i),d=Math.cos(r),h=Math.sin(r),m=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const v=c*m,x=c*_,b=f*m,M=f*_;t[0]=d*m,t[4]=-d*_,t[8]=h,t[1]=x+b*h,t[5]=v-M*h,t[9]=-f*d,t[2]=M-v*h,t[6]=b+x*h,t[10]=c*d}else if(e.order==="YXZ"){const v=d*m,x=d*_,b=h*m,M=h*_;t[0]=v+M*f,t[4]=b*f-x,t[8]=c*h,t[1]=c*_,t[5]=c*m,t[9]=-f,t[2]=x*f-b,t[6]=M+v*f,t[10]=c*d}else if(e.order==="ZXY"){const v=d*m,x=d*_,b=h*m,M=h*_;t[0]=v-M*f,t[4]=-c*_,t[8]=b+x*f,t[1]=x+b*f,t[5]=c*m,t[9]=M-v*f,t[2]=-c*h,t[6]=f,t[10]=c*d}else if(e.order==="ZYX"){const v=c*m,x=c*_,b=f*m,M=f*_;t[0]=d*m,t[4]=b*h-x,t[8]=v*h+M,t[1]=d*_,t[5]=M*h+v,t[9]=x*h-b,t[2]=-h,t[6]=f*d,t[10]=c*d}else if(e.order==="YZX"){const v=c*d,x=c*h,b=f*d,M=f*h;t[0]=d*m,t[4]=M-v*_,t[8]=b*_+x,t[1]=_,t[5]=c*m,t[9]=-f*m,t[2]=-h*m,t[6]=x*_+b,t[10]=v-M*_}else if(e.order==="XZY"){const v=c*d,x=c*h,b=f*d,M=f*h;t[0]=d*m,t[4]=-_,t[8]=h*m,t[1]=v*_+M,t[5]=c*m,t[9]=x*_-b,t[2]=b*_-x,t[6]=f*m,t[10]=M*_+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mU,e,gU)}lookAt(e,t,i){const r=this.elements;return ha.subVectors(e,t),ha.lengthSq()===0&&(ha.z=1),ha.normalize(),ks.crossVectors(i,ha),ks.lengthSq()===0&&(Math.abs(i.z)===1?ha.x+=1e-4:ha.z+=1e-4,ha.normalize(),ks.crossVectors(i,ha)),ks.normalize(),qd.crossVectors(ha,ks),r[0]=ks.x,r[4]=qd.x,r[8]=ha.x,r[1]=ks.y,r[5]=qd.y,r[9]=ha.y,r[2]=ks.z,r[6]=qd.z,r[10]=ha.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,l=this.elements,c=i[0],f=i[4],d=i[8],h=i[12],m=i[1],_=i[5],v=i[9],x=i[13],b=i[2],M=i[6],y=i[10],S=i[14],A=i[3],N=i[7],R=i[11],L=i[15],P=r[0],D=r[4],T=r[8],w=r[12],q=r[1],H=r[5],k=r[9],J=r[13],ee=r[2],$=r[6],F=r[10],z=r[14],ie=r[3],de=r[7],G=r[11],I=r[15];return l[0]=c*P+f*q+d*ee+h*ie,l[4]=c*D+f*H+d*$+h*de,l[8]=c*T+f*k+d*F+h*G,l[12]=c*w+f*J+d*z+h*I,l[1]=m*P+_*q+v*ee+x*ie,l[5]=m*D+_*H+v*$+x*de,l[9]=m*T+_*k+v*F+x*G,l[13]=m*w+_*J+v*z+x*I,l[2]=b*P+M*q+y*ee+S*ie,l[6]=b*D+M*H+y*$+S*de,l[10]=b*T+M*k+y*F+S*G,l[14]=b*w+M*J+y*z+S*I,l[3]=A*P+N*q+R*ee+L*ie,l[7]=A*D+N*H+R*$+L*de,l[11]=A*T+N*k+R*F+L*G,l[15]=A*w+N*J+R*z+L*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],l=e[12],c=e[1],f=e[5],d=e[9],h=e[13],m=e[2],_=e[6],v=e[10],x=e[14],b=e[3],M=e[7],y=e[11],S=e[15],A=d*x-h*v,N=f*x-h*_,R=f*v-d*_,L=c*x-h*m,P=c*v-d*m,D=c*_-f*m;return t*(M*A-y*N+S*R)-i*(b*A-y*L+S*P)+r*(b*N-M*L+S*D)-l*(b*R-M*P+y*D)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],l=e[3],c=e[4],f=e[5],d=e[6],h=e[7],m=e[8],_=e[9],v=e[10],x=e[11],b=e[12],M=e[13],y=e[14],S=e[15],A=t*f-i*c,N=t*d-r*c,R=t*h-l*c,L=i*d-r*f,P=i*h-l*f,D=r*h-l*d,T=m*M-_*b,w=m*y-v*b,q=m*S-x*b,H=_*y-v*M,k=_*S-x*M,J=v*S-x*y,ee=A*J-N*k+R*H+L*q-P*w+D*T;if(ee===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const $=1/ee;return e[0]=(f*J-d*k+h*H)*$,e[1]=(r*k-i*J-l*H)*$,e[2]=(M*D-y*P+S*L)*$,e[3]=(v*P-_*D-x*L)*$,e[4]=(d*q-c*J-h*w)*$,e[5]=(t*J-r*q+l*w)*$,e[6]=(y*R-b*D-S*N)*$,e[7]=(m*D-v*R+x*N)*$,e[8]=(c*k-f*q+h*T)*$,e[9]=(i*q-t*k-l*T)*$,e[10]=(b*P-M*R+S*A)*$,e[11]=(_*R-m*P-x*A)*$,e[12]=(f*w-c*H-d*T)*$,e[13]=(t*H-i*w+r*T)*$,e[14]=(M*N-b*L-y*A)*$,e[15]=(m*L-_*N+v*A)*$,this}scale(e){const t=this.elements,i=e.x,r=e.y,l=e.z;return t[0]*=i,t[4]*=r,t[8]*=l,t[1]*=i,t[5]*=r,t[9]*=l,t[2]*=i,t[6]*=r,t[10]*=l,t[3]*=i,t[7]*=r,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),l=1-i,c=e.x,f=e.y,d=e.z,h=l*c,m=l*f;return this.set(h*c+i,h*f-r*d,h*d+r*f,0,h*f+r*d,m*f+i,m*d-r*c,0,h*d-r*f,m*d+r*c,l*d*d+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,l,c){return this.set(1,i,l,0,e,1,c,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,l=t._x,c=t._y,f=t._z,d=t._w,h=l+l,m=c+c,_=f+f,v=l*h,x=l*m,b=l*_,M=c*m,y=c*_,S=f*_,A=d*h,N=d*m,R=d*_,L=i.x,P=i.y,D=i.z;return r[0]=(1-(M+S))*L,r[1]=(x+R)*L,r[2]=(b-N)*L,r[3]=0,r[4]=(x-R)*P,r[5]=(1-(v+S))*P,r[6]=(y+A)*P,r[7]=0,r[8]=(b+N)*D,r[9]=(y-A)*D,r[10]=(1-(v+M))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const l=this.determinant();if(l===0)return i.set(1,1,1),t.identity(),this;let c=Yl.set(r[0],r[1],r[2]).length();const f=Yl.set(r[4],r[5],r[6]).length(),d=Yl.set(r[8],r[9],r[10]).length();l<0&&(c=-c),Ja.copy(this);const h=1/c,m=1/f,_=1/d;return Ja.elements[0]*=h,Ja.elements[1]*=h,Ja.elements[2]*=h,Ja.elements[4]*=m,Ja.elements[5]*=m,Ja.elements[6]*=m,Ja.elements[8]*=_,Ja.elements[9]*=_,Ja.elements[10]*=_,t.setFromRotationMatrix(Ja),i.x=c,i.y=f,i.z=d,this}makePerspective(e,t,i,r,l,c,f=yr,d=!1){const h=this.elements,m=2*l/(t-e),_=2*l/(i-r),v=(t+e)/(t-e),x=(i+r)/(i-r);let b,M;if(d)b=l/(c-l),M=c*l/(c-l);else if(f===yr)b=-(c+l)/(c-l),M=-2*c*l/(c-l);else if(f===Jh)b=-c/(c-l),M=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=m,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=_,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=b,h[14]=M,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,i,r,l,c,f=yr,d=!1){const h=this.elements,m=2/(t-e),_=2/(i-r),v=-(t+e)/(t-e),x=-(i+r)/(i-r);let b,M;if(d)b=1/(c-l),M=c/(c-l);else if(f===yr)b=-2/(c-l),M=-(c+l)/(c-l);else if(f===Jh)b=-1/(c-l),M=-l/(c-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=m,h[4]=0,h[8]=0,h[12]=v,h[1]=0,h[5]=_,h[9]=0,h[13]=x,h[2]=0,h[6]=0,h[10]=b,h[14]=M,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Yl=new he,Ja=new ei,mU=new he(0,0,0),gU=new he(1,1,1),ks=new he,qd=new he,ha=new he,Yb=new ei,qb=new zu;class ms{constructor(e=0,t=0,i=0,r=ms.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,l=r[0],c=r[4],f=r[8],d=r[1],h=r[5],m=r[9],_=r[2],v=r[6],x=r[10];switch(t){case"XYZ":this._y=Math.asin(jt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,x),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(f,x),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(jt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,x),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-jt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(jt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,h),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(f,x));break;case"XZY":this._z=Math.asin(-jt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-m,x),this._y=0);break;default:Et("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Yb.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yb,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qb.setFromEuler(this),this.setFromQuaternion(qb,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ms.DEFAULT_ORDER="XYZ";class FT{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _U=0;const Zb=new he,ql=new zu,Kr=new ei,Zd=new he,Nc=new he,vU=new he,xU=new zu,Kb=new he(1,0,0),Qb=new he(0,1,0),Jb=new he(0,0,1),$b={type:"added"},yU={type:"removed"},Zl={type:"childadded",child:null},Jg={type:"childremoved",child:null};class Ma extends Iu{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_U++}),this.uuid=Nf(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ma.DEFAULT_UP.clone();const e=new he,t=new ms,i=new zu,r=new he(1,1,1);function l(){i.setFromEuler(t,!1)}function c(){t.setFromQuaternion(i,void 0,!1)}t._onChange(l),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ei},normalMatrix:{value:new Ut}}),this.matrix=new ei,this.matrixWorld=new ei,this.matrixAutoUpdate=Ma.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ma.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new FT,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ql.setFromAxisAngle(e,t),this.quaternion.multiply(ql),this}rotateOnWorldAxis(e,t){return ql.setFromAxisAngle(e,t),this.quaternion.premultiply(ql),this}rotateX(e){return this.rotateOnAxis(Kb,e)}rotateY(e){return this.rotateOnAxis(Qb,e)}rotateZ(e){return this.rotateOnAxis(Jb,e)}translateOnAxis(e,t){return Zb.copy(e).applyQuaternion(this.quaternion),this.position.add(Zb.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Kb,e)}translateY(e){return this.translateOnAxis(Qb,e)}translateZ(e){return this.translateOnAxis(Jb,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Kr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Zd.copy(e):Zd.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Nc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kr.lookAt(Nc,Zd,this.up):Kr.lookAt(Zd,Nc,this.up),this.quaternion.setFromRotationMatrix(Kr),r&&(Kr.extractRotation(r.matrixWorld),ql.setFromRotationMatrix(Kr),this.quaternion.premultiply(ql.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(en("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($b),Zl.child=e,this.dispatchEvent(Zl),Zl.child=null):en("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yU),Jg.child=e,this.dispatchEvent(Jg),Jg.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Kr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Kr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Kr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($b),Zl.child=e,this.dispatchEvent(Zl),Zl.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const c=this.children[i].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let l=0,c=r.length;l<c;l++)r[l].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nc,e,vU),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nc,xU,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*i-l[8]*r,l[13]+=i-l[1]*t-l[5]*i-l[9]*r,l[14]+=r-l[2]*t-l[6]*i-l[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let l=0,c=r.length;l<c;l++)r[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(f=>({...f})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function l(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let h=0,m=d.length;h<m;h++){const _=d[h];l(e.shapes,_)}else l(e.shapes,d)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,h=this.material.length;d<h;d++)f.push(l(e.materials,this.material[d]));r.material=f}else r.material=l(e.materials,this.material);if(this.children.length>0){r.children=[];for(let f=0;f<this.children.length;f++)r.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];r.animations.push(l(e.animations,d))}}if(t){const f=c(e.geometries),d=c(e.materials),h=c(e.textures),m=c(e.images),_=c(e.shapes),v=c(e.skeletons),x=c(e.animations),b=c(e.nodes);f.length>0&&(i.geometries=f),d.length>0&&(i.materials=d),h.length>0&&(i.textures=h),m.length>0&&(i.images=m),_.length>0&&(i.shapes=_),v.length>0&&(i.skeletons=v),x.length>0&&(i.animations=x),b.length>0&&(i.nodes=b)}return i.object=r,i;function c(f){const d=[];for(const h in f){const m=f[h];delete m.metadata,d.push(m)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ma.DEFAULT_UP=new he(0,1,0);Ma.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ma.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Kd extends Ma{constructor(){super(),this.isGroup=!0,this.type="Group"}}const SU={type:"move"};class $g{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kd,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kd,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new he,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new he),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kd,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new he,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new he),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,l=null,c=null;const f=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const M of e.hand.values()){const y=t.getJointPose(M,i),S=this._getHandJoint(h,M);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const m=h.joints["index-finger-tip"],_=h.joints["thumb-tip"],v=m.position.distanceTo(_.position),x=.02,b=.005;h.inputState.pinching&&v>x+b?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&v<=x-b&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,i),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1));f!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&l!==null&&(r=l),r!==null&&(f.matrix.fromArray(r.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,r.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(r.linearVelocity)):f.hasLinearVelocity=!1,r.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(r.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(SU)))}return f!==null&&(f.visible=r!==null),d!==null&&(d.visible=l!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Kd;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const IT={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xs={h:0,s:0,l:0},Qd={h:0,s:0,l:0};function e0(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class mn{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ba){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Kt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Kt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Kt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Kt.workingColorSpace){if(e=lU(e,1),t=jt(t,0,1),i=jt(i,0,1),t===0)this.r=this.g=this.b=i;else{const l=i<=.5?i*(1+t):i+t-i*t,c=2*i-l;this.r=e0(c,l,e+1/3),this.g=e0(c,l,e),this.b=e0(c,l,e-1/3)}return Kt.colorSpaceToWorking(this,r),this}setStyle(e,t=Ba){function i(l){l!==void 0&&parseFloat(l)<1&&Et("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=r[1],f=r[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:Et("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=r[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);Et("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ba){const i=IT[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Et("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ls(e.r),this.g=ls(e.g),this.b=ls(e.b),this}copyLinearToSRGB(e){return this.r=gu(e.r),this.g=gu(e.g),this.b=gu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ba){return Kt.workingToColorSpace(Ei.copy(this),e),Math.round(jt(Ei.r*255,0,255))*65536+Math.round(jt(Ei.g*255,0,255))*256+Math.round(jt(Ei.b*255,0,255))}getHexString(e=Ba){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Kt.workingColorSpace){Kt.workingToColorSpace(Ei.copy(this),t);const i=Ei.r,r=Ei.g,l=Ei.b,c=Math.max(i,r,l),f=Math.min(i,r,l);let d,h;const m=(f+c)/2;if(f===c)d=0,h=0;else{const _=c-f;switch(h=m<=.5?_/(c+f):_/(2-c-f),c){case i:d=(r-l)/_+(r<l?6:0);break;case r:d=(l-i)/_+2;break;case l:d=(i-r)/_+4;break}d/=6}return e.h=d,e.s=h,e.l=m,e}getRGB(e,t=Kt.workingColorSpace){return Kt.workingToColorSpace(Ei.copy(this),t),e.r=Ei.r,e.g=Ei.g,e.b=Ei.b,e}getStyle(e=Ba){Kt.workingToColorSpace(Ei.copy(this),e);const t=Ei.r,i=Ei.g,r=Ei.b;return e!==Ba?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Xs),this.setHSL(Xs.h+e,Xs.s+t,Xs.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Xs),e.getHSL(Qd);const i=Yg(Xs.h,Qd.h,t),r=Yg(Xs.s,Qd.s,t),l=Yg(Xs.l,Qd.l,t);return this.setHSL(i,r,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,l=e.elements;return this.r=l[0]*t+l[3]*i+l[6]*r,this.g=l[1]*t+l[4]*i+l[7]*r,this.b=l[2]*t+l[5]*i+l[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ei=new mn;mn.NAMES=IT;class bU extends Ma{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ms,this.environmentIntensity=1,this.environmentRotation=new ms,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const $a=new he,Qr=new he,t0=new he,Jr=new he,Kl=new he,Ql=new he,eM=new he,n0=new he,i0=new he,a0=new he,r0=new Gn,s0=new Gn,o0=new Gn;class ar{constructor(e=new he,t=new he,i=new he){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),$a.subVectors(e,t),r.cross($a);const l=r.lengthSq();return l>0?r.multiplyScalar(1/Math.sqrt(l)):r.set(0,0,0)}static getBarycoord(e,t,i,r,l){$a.subVectors(r,t),Qr.subVectors(i,t),t0.subVectors(e,t);const c=$a.dot($a),f=$a.dot(Qr),d=$a.dot(t0),h=Qr.dot(Qr),m=Qr.dot(t0),_=c*h-f*f;if(_===0)return l.set(0,0,0),null;const v=1/_,x=(h*d-f*m)*v,b=(c*m-f*d)*v;return l.set(1-x-b,b,x)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Jr)===null?!1:Jr.x>=0&&Jr.y>=0&&Jr.x+Jr.y<=1}static getInterpolation(e,t,i,r,l,c,f,d){return this.getBarycoord(e,t,i,r,Jr)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,Jr.x),d.addScaledVector(c,Jr.y),d.addScaledVector(f,Jr.z),d)}static getInterpolatedAttribute(e,t,i,r,l,c){return r0.setScalar(0),s0.setScalar(0),o0.setScalar(0),r0.fromBufferAttribute(e,t),s0.fromBufferAttribute(e,i),o0.fromBufferAttribute(e,r),c.setScalar(0),c.addScaledVector(r0,l.x),c.addScaledVector(s0,l.y),c.addScaledVector(o0,l.z),c}static isFrontFacing(e,t,i,r){return $a.subVectors(i,t),Qr.subVectors(e,t),$a.cross(Qr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $a.subVectors(this.c,this.b),Qr.subVectors(this.a,this.b),$a.cross(Qr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ar.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ar.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,l){return ar.getInterpolation(e,this.a,this.b,this.c,t,i,r,l)}containsPoint(e){return ar.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ar.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,l=this.c;let c,f;Kl.subVectors(r,i),Ql.subVectors(l,i),n0.subVectors(e,i);const d=Kl.dot(n0),h=Ql.dot(n0);if(d<=0&&h<=0)return t.copy(i);i0.subVectors(e,r);const m=Kl.dot(i0),_=Ql.dot(i0);if(m>=0&&_<=m)return t.copy(r);const v=d*_-m*h;if(v<=0&&d>=0&&m<=0)return c=d/(d-m),t.copy(i).addScaledVector(Kl,c);a0.subVectors(e,l);const x=Kl.dot(a0),b=Ql.dot(a0);if(b>=0&&x<=b)return t.copy(l);const M=x*h-d*b;if(M<=0&&h>=0&&b<=0)return f=h/(h-b),t.copy(i).addScaledVector(Ql,f);const y=m*b-x*_;if(y<=0&&_-m>=0&&x-b>=0)return eM.subVectors(l,r),f=(_-m)/(_-m+(x-b)),t.copy(r).addScaledVector(eM,f);const S=1/(y+M+v);return c=M*S,f=v*S,t.copy(i).addScaledVector(Kl,c).addScaledVector(Ql,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Uf{constructor(e=new he(1/0,1/0,1/0),t=new he(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(er.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(er.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=er.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const l=i.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,er):er.fromBufferAttribute(l,c),er.applyMatrix4(e.matrixWorld),this.expandByPoint(er);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Jd.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Jd.copy(i.boundingBox)),Jd.applyMatrix4(e.matrixWorld),this.union(Jd)}const r=e.children;for(let l=0,c=r.length;l<c;l++)this.expandByObject(r[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,er),er.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Uc),$d.subVectors(this.max,Uc),Jl.subVectors(e.a,Uc),$l.subVectors(e.b,Uc),eu.subVectors(e.c,Uc),Ws.subVectors($l,Jl),js.subVectors(eu,$l),Uo.subVectors(Jl,eu);let t=[0,-Ws.z,Ws.y,0,-js.z,js.y,0,-Uo.z,Uo.y,Ws.z,0,-Ws.x,js.z,0,-js.x,Uo.z,0,-Uo.x,-Ws.y,Ws.x,0,-js.y,js.x,0,-Uo.y,Uo.x,0];return!l0(t,Jl,$l,eu,$d)||(t=[1,0,0,0,1,0,0,0,1],!l0(t,Jl,$l,eu,$d))?!1:(eh.crossVectors(Ws,js),t=[eh.x,eh.y,eh.z],l0(t,Jl,$l,eu,$d))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,er).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(er).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($r[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$r[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$r[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$r[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$r[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$r[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$r[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$r[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($r),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const $r=[new he,new he,new he,new he,new he,new he,new he,new he],er=new he,Jd=new Uf,Jl=new he,$l=new he,eu=new he,Ws=new he,js=new he,Uo=new he,Uc=new he,$d=new he,eh=new he,Lo=new he;function l0(s,e,t,i,r){for(let l=0,c=s.length-3;l<=c;l+=3){Lo.fromArray(s,l);const f=r.x*Math.abs(Lo.x)+r.y*Math.abs(Lo.y)+r.z*Math.abs(Lo.z),d=e.dot(Lo),h=t.dot(Lo),m=i.dot(Lo);if(Math.max(-Math.max(d,h,m),Math.min(d,h,m))>f)return!1}return!0}const Kn=new he,th=new Yt;let MU=0;class Tr{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:MU++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Hb,this.updateRanges=[],this.gpuType=xr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,l=this.itemSize;r<l;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)th.fromBufferAttribute(this,t),th.applyMatrix3(e),this.setXY(t,th.x,th.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Kn.fromBufferAttribute(this,t),Kn.applyMatrix3(e),this.setXYZ(t,Kn.x,Kn.y,Kn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Kn.fromBufferAttribute(this,t),Kn.applyMatrix4(e),this.setXYZ(t,Kn.x,Kn.y,Kn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Kn.fromBufferAttribute(this,t),Kn.applyNormalMatrix(e),this.setXYZ(t,Kn.x,Kn.y,Kn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Kn.fromBufferAttribute(this,t),Kn.transformDirection(e),this.setXYZ(t,Kn.x,Kn.y,Kn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Dc(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ki(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Dc(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ki(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Dc(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ki(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Dc(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ki(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Dc(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ki(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ki(t,this.array),i=Ki(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ki(t,this.array),i=Ki(i,this.array),r=Ki(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,l){return e*=this.itemSize,this.normalized&&(t=Ki(t,this.array),i=Ki(i,this.array),r=Ki(r,this.array),l=Ki(l,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Hb&&(e.usage=this.usage),e}}class zT extends Tr{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class BT extends Tr{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class us extends Tr{constructor(e,t,i){super(new Float32Array(e),t,i)}}const EU=new Uf,Lc=new he,u0=new he;class zv{constructor(e=new he,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):EU.setFromPoints(e).getCenter(i);let r=0;for(let l=0,c=e.length;l<c;l++)r=Math.max(r,i.distanceToSquared(e[l]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Lc.subVectors(e,this.center);const t=Lc.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Lc,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(u0.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Lc.copy(e.center).add(u0)),this.expandByPoint(Lc.copy(e.center).sub(u0))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let TU=0;const Ia=new ei,c0=new Ma,tu=new he,pa=new Uf,Oc=new Uf,ui=new he;class xs extends Iu{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:TU++}),this.uuid=Nf(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(aU(e)?BT:zT)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const l=new Ut().getNormalMatrix(e);i.applyNormalMatrix(l),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ia.makeRotationFromQuaternion(e),this.applyMatrix4(Ia),this}rotateX(e){return Ia.makeRotationX(e),this.applyMatrix4(Ia),this}rotateY(e){return Ia.makeRotationY(e),this.applyMatrix4(Ia),this}rotateZ(e){return Ia.makeRotationZ(e),this.applyMatrix4(Ia),this}translate(e,t,i){return Ia.makeTranslation(e,t,i),this.applyMatrix4(Ia),this}scale(e,t,i){return Ia.makeScale(e,t,i),this.applyMatrix4(Ia),this}lookAt(e){return c0.lookAt(e),c0.updateMatrix(),this.applyMatrix4(c0.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(tu).negate(),this.translate(tu.x,tu.y,tu.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,l=e.length;r<l;r++){const c=e[r];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new us(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const l=e[r];t.setXYZ(r,l.x,l.y,l.z||0)}e.length>t.count&&Et("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Uf);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){en("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new he(-1/0,-1/0,-1/0),new he(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const l=t[i];pa.setFromBufferAttribute(l),this.morphTargetsRelative?(ui.addVectors(this.boundingBox.min,pa.min),this.boundingBox.expandByPoint(ui),ui.addVectors(this.boundingBox.max,pa.max),this.boundingBox.expandByPoint(ui)):(this.boundingBox.expandByPoint(pa.min),this.boundingBox.expandByPoint(pa.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&en('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zv);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){en("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new he,1/0);return}if(e){const i=this.boundingSphere.center;if(pa.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const f=t[l];Oc.setFromBufferAttribute(f),this.morphTargetsRelative?(ui.addVectors(pa.min,Oc.min),pa.expandByPoint(ui),ui.addVectors(pa.max,Oc.max),pa.expandByPoint(ui)):(pa.expandByPoint(Oc.min),pa.expandByPoint(Oc.max))}pa.getCenter(i);let r=0;for(let l=0,c=e.count;l<c;l++)ui.fromBufferAttribute(e,l),r=Math.max(r,i.distanceToSquared(ui));if(t)for(let l=0,c=t.length;l<c;l++){const f=t[l],d=this.morphTargetsRelative;for(let h=0,m=f.count;h<m;h++)ui.fromBufferAttribute(f,h),d&&(tu.fromBufferAttribute(e,h),ui.add(tu)),r=Math.max(r,i.distanceToSquared(ui))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&en('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){en("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tr(new Float32Array(4*i.count),4));const c=this.getAttribute("tangent"),f=[],d=[];for(let T=0;T<i.count;T++)f[T]=new he,d[T]=new he;const h=new he,m=new he,_=new he,v=new Yt,x=new Yt,b=new Yt,M=new he,y=new he;function S(T,w,q){h.fromBufferAttribute(i,T),m.fromBufferAttribute(i,w),_.fromBufferAttribute(i,q),v.fromBufferAttribute(l,T),x.fromBufferAttribute(l,w),b.fromBufferAttribute(l,q),m.sub(h),_.sub(h),x.sub(v),b.sub(v);const H=1/(x.x*b.y-b.x*x.y);isFinite(H)&&(M.copy(m).multiplyScalar(b.y).addScaledVector(_,-x.y).multiplyScalar(H),y.copy(_).multiplyScalar(x.x).addScaledVector(m,-b.x).multiplyScalar(H),f[T].add(M),f[w].add(M),f[q].add(M),d[T].add(y),d[w].add(y),d[q].add(y))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let T=0,w=A.length;T<w;++T){const q=A[T],H=q.start,k=q.count;for(let J=H,ee=H+k;J<ee;J+=3)S(e.getX(J+0),e.getX(J+1),e.getX(J+2))}const N=new he,R=new he,L=new he,P=new he;function D(T){L.fromBufferAttribute(r,T),P.copy(L);const w=f[T];N.copy(w),N.sub(L.multiplyScalar(L.dot(w))).normalize(),R.crossVectors(P,w);const H=R.dot(d[T])<0?-1:1;c.setXYZW(T,N.x,N.y,N.z,H)}for(let T=0,w=A.length;T<w;++T){const q=A[T],H=q.start,k=q.count;for(let J=H,ee=H+k;J<ee;J+=3)D(e.getX(J+0)),D(e.getX(J+1)),D(e.getX(J+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Tr(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let v=0,x=i.count;v<x;v++)i.setXYZ(v,0,0,0);const r=new he,l=new he,c=new he,f=new he,d=new he,h=new he,m=new he,_=new he;if(e)for(let v=0,x=e.count;v<x;v+=3){const b=e.getX(v+0),M=e.getX(v+1),y=e.getX(v+2);r.fromBufferAttribute(t,b),l.fromBufferAttribute(t,M),c.fromBufferAttribute(t,y),m.subVectors(c,l),_.subVectors(r,l),m.cross(_),f.fromBufferAttribute(i,b),d.fromBufferAttribute(i,M),h.fromBufferAttribute(i,y),f.add(m),d.add(m),h.add(m),i.setXYZ(b,f.x,f.y,f.z),i.setXYZ(M,d.x,d.y,d.z),i.setXYZ(y,h.x,h.y,h.z)}else for(let v=0,x=t.count;v<x;v+=3)r.fromBufferAttribute(t,v+0),l.fromBufferAttribute(t,v+1),c.fromBufferAttribute(t,v+2),m.subVectors(c,l),_.subVectors(r,l),m.cross(_),i.setXYZ(v+0,m.x,m.y,m.z),i.setXYZ(v+1,m.x,m.y,m.z),i.setXYZ(v+2,m.x,m.y,m.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ui.fromBufferAttribute(e,t),ui.normalize(),e.setXYZ(t,ui.x,ui.y,ui.z)}toNonIndexed(){function e(f,d){const h=f.array,m=f.itemSize,_=f.normalized,v=new h.constructor(d.length*m);let x=0,b=0;for(let M=0,y=d.length;M<y;M++){f.isInterleavedBufferAttribute?x=d[M]*f.data.stride+f.offset:x=d[M]*m;for(let S=0;S<m;S++)v[b++]=h[x++]}return new Tr(v,m,_)}if(this.index===null)return Et("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new xs,i=this.index.array,r=this.attributes;for(const f in r){const d=r[f],h=e(d,i);t.setAttribute(f,h)}const l=this.morphAttributes;for(const f in l){const d=[],h=l[f];for(let m=0,_=h.length;m<_;m++){const v=h[m],x=e(v,i);d.push(x)}t.morphAttributes[f]=d}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,d=c.length;f<d;f++){const h=c[f];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const d in i){const h=i[d];e.data.attributes[d]=h.toJSON(e.data)}const r={};let l=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],m=[];for(let _=0,v=h.length;_<v;_++){const x=h[_];m.push(x.toJSON(e.data))}m.length>0&&(r[d]=m,l=!0)}l&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const h in r){const m=r[h];this.setAttribute(h,m.clone(t))}const l=e.morphAttributes;for(const h in l){const m=[],_=l[h];for(let v=0,x=_.length;v<x;v++)m.push(_[v].clone(t));this.morphAttributes[h]=m}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,m=c.length;h<m;h++){const _=c[h];this.addGroup(_.start,_.count,_.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let AU=0;class vp extends Iu{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:AU++}),this.uuid=Nf(),this.name="",this.type="Material",this.blending=mu,this.side=uo,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=J0,this.blendDst=$0,this.blendEquation=Xo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new mn(0,0,0),this.blendAlpha=0,this.depthFunc=Eu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bb,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wl,this.stencilZFail=Wl,this.stencilZPass=Wl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Et(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Et(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==mu&&(i.blending=this.blending),this.side!==uo&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==J0&&(i.blendSrc=this.blendSrc),this.blendDst!==$0&&(i.blendDst=this.blendDst),this.blendEquation!==Xo&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Eu&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bb&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wl&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Wl&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Wl&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(l){const c=[];for(const f in l){const d=l[f];delete d.metadata,c.push(d)}return c}if(t){const l=r(e.textures),c=r(e.images);l.length>0&&(i.textures=l),c.length>0&&(i.images=c)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let l=0;l!==r;++l)i[l]=t[l].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const es=new he,f0=new he,nh=new he,Ys=new he,d0=new he,ih=new he,h0=new he;class CU{constructor(e=new he,t=new he(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,es)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=es.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(es.copy(this.origin).addScaledVector(this.direction,t),es.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){f0.copy(e).add(t).multiplyScalar(.5),nh.copy(t).sub(e).normalize(),Ys.copy(this.origin).sub(f0);const l=e.distanceTo(t)*.5,c=-this.direction.dot(nh),f=Ys.dot(this.direction),d=-Ys.dot(nh),h=Ys.lengthSq(),m=Math.abs(1-c*c);let _,v,x,b;if(m>0)if(_=c*d-f,v=c*f-d,b=l*m,_>=0)if(v>=-b)if(v<=b){const M=1/m;_*=M,v*=M,x=_*(_+c*v+2*f)+v*(c*_+v+2*d)+h}else v=l,_=Math.max(0,-(c*v+f)),x=-_*_+v*(v+2*d)+h;else v=-l,_=Math.max(0,-(c*v+f)),x=-_*_+v*(v+2*d)+h;else v<=-b?(_=Math.max(0,-(-c*l+f)),v=_>0?-l:Math.min(Math.max(-l,-d),l),x=-_*_+v*(v+2*d)+h):v<=b?(_=0,v=Math.min(Math.max(-l,-d),l),x=v*(v+2*d)+h):(_=Math.max(0,-(c*l+f)),v=_>0?l:Math.min(Math.max(-l,-d),l),x=-_*_+v*(v+2*d)+h);else v=c>0?-l:l,_=Math.max(0,-(c*v+f)),x=-_*_+v*(v+2*d)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,_),r&&r.copy(f0).addScaledVector(nh,v),x}intersectSphere(e,t){es.subVectors(e.center,this.origin);const i=es.dot(this.direction),r=es.dot(es)-i*i,l=e.radius*e.radius;if(r>l)return null;const c=Math.sqrt(l-r),f=i-c,d=i+c;return d<0?null:f<0?this.at(d,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,l,c,f,d;const h=1/this.direction.x,m=1/this.direction.y,_=1/this.direction.z,v=this.origin;return h>=0?(i=(e.min.x-v.x)*h,r=(e.max.x-v.x)*h):(i=(e.max.x-v.x)*h,r=(e.min.x-v.x)*h),m>=0?(l=(e.min.y-v.y)*m,c=(e.max.y-v.y)*m):(l=(e.max.y-v.y)*m,c=(e.min.y-v.y)*m),i>c||l>r||((l>i||isNaN(i))&&(i=l),(c<r||isNaN(r))&&(r=c),_>=0?(f=(e.min.z-v.z)*_,d=(e.max.z-v.z)*_):(f=(e.max.z-v.z)*_,d=(e.min.z-v.z)*_),i>d||f>r)||((f>i||i!==i)&&(i=f),(d<r||r!==r)&&(r=d),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,es)!==null}intersectTriangle(e,t,i,r,l){d0.subVectors(t,e),ih.subVectors(i,e),h0.crossVectors(d0,ih);let c=this.direction.dot(h0),f;if(c>0){if(r)return null;f=1}else if(c<0)f=-1,c=-c;else return null;Ys.subVectors(this.origin,e);const d=f*this.direction.dot(ih.crossVectors(Ys,ih));if(d<0)return null;const h=f*this.direction.dot(d0.cross(Ys));if(h<0||d+h>c)return null;const m=-f*Ys.dot(h0);return m<0?null:this.at(m/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class HT extends vp{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new mn(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ms,this.combine=vT,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const tM=new ei,Oo=new CU,ah=new zv,nM=new he,rh=new he,sh=new he,oh=new he,p0=new he,lh=new he,iM=new he,uh=new he;class Rr extends Ma{constructor(e=new xs,t=new HT){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=r.length;l<c;l++){const f=r[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,l=i.morphAttributes.position,c=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const f=this.morphTargetInfluences;if(l&&f){lh.set(0,0,0);for(let d=0,h=l.length;d<h;d++){const m=f[d],_=l[d];m!==0&&(p0.fromBufferAttribute(_,e),c?lh.addScaledVector(p0,m):lh.addScaledVector(p0.sub(t),m))}t.add(lh)}return t}raycast(e,t){const i=this.geometry,r=this.material,l=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ah.copy(i.boundingSphere),ah.applyMatrix4(l),Oo.copy(e.ray).recast(e.near),!(ah.containsPoint(Oo.origin)===!1&&(Oo.intersectSphere(ah,nM)===null||Oo.origin.distanceToSquared(nM)>(e.far-e.near)**2))&&(tM.copy(l).invert(),Oo.copy(e.ray).applyMatrix4(tM),!(i.boundingBox!==null&&Oo.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Oo)))}_computeIntersections(e,t,i){let r;const l=this.geometry,c=this.material,f=l.index,d=l.attributes.position,h=l.attributes.uv,m=l.attributes.uv1,_=l.attributes.normal,v=l.groups,x=l.drawRange;if(f!==null)if(Array.isArray(c))for(let b=0,M=v.length;b<M;b++){const y=v[b],S=c[y.materialIndex],A=Math.max(y.start,x.start),N=Math.min(f.count,Math.min(y.start+y.count,x.start+x.count));for(let R=A,L=N;R<L;R+=3){const P=f.getX(R),D=f.getX(R+1),T=f.getX(R+2);r=ch(this,S,e,i,h,m,_,P,D,T),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=y.materialIndex,t.push(r))}}else{const b=Math.max(0,x.start),M=Math.min(f.count,x.start+x.count);for(let y=b,S=M;y<S;y+=3){const A=f.getX(y),N=f.getX(y+1),R=f.getX(y+2);r=ch(this,c,e,i,h,m,_,A,N,R),r&&(r.faceIndex=Math.floor(y/3),t.push(r))}}else if(d!==void 0)if(Array.isArray(c))for(let b=0,M=v.length;b<M;b++){const y=v[b],S=c[y.materialIndex],A=Math.max(y.start,x.start),N=Math.min(d.count,Math.min(y.start+y.count,x.start+x.count));for(let R=A,L=N;R<L;R+=3){const P=R,D=R+1,T=R+2;r=ch(this,S,e,i,h,m,_,P,D,T),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=y.materialIndex,t.push(r))}}else{const b=Math.max(0,x.start),M=Math.min(d.count,x.start+x.count);for(let y=b,S=M;y<S;y+=3){const A=y,N=y+1,R=y+2;r=ch(this,c,e,i,h,m,_,A,N,R),r&&(r.faceIndex=Math.floor(y/3),t.push(r))}}}}function RU(s,e,t,i,r,l,c,f){let d;if(e.side===Ji?d=i.intersectTriangle(c,l,r,!0,f):d=i.intersectTriangle(r,l,c,e.side===uo,f),d===null)return null;uh.copy(f),uh.applyMatrix4(s.matrixWorld);const h=t.ray.origin.distanceTo(uh);return h<t.near||h>t.far?null:{distance:h,point:uh.clone(),object:s}}function ch(s,e,t,i,r,l,c,f,d,h){s.getVertexPosition(f,rh),s.getVertexPosition(d,sh),s.getVertexPosition(h,oh);const m=RU(s,e,t,i,rh,sh,oh,iM);if(m){const _=new he;ar.getBarycoord(iM,rh,sh,oh,_),r&&(m.uv=ar.getInterpolatedAttribute(r,f,d,h,_,new Yt)),l&&(m.uv1=ar.getInterpolatedAttribute(l,f,d,h,_,new Yt)),c&&(m.normal=ar.getInterpolatedAttribute(c,f,d,h,_,new he),m.normal.dot(i.direction)>0&&m.normal.multiplyScalar(-1));const v={a:f,b:d,c:h,normal:new he,materialIndex:0};ar.getNormal(rh,sh,oh,v.normal),m.face=v,m.barycoord=_}return m}class wU extends wi{constructor(e=null,t=1,i=1,r,l,c,f,d,h=_i,m=_i,_,v){super(null,c,f,d,h,m,r,l,_,v),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const m0=new he,DU=new he,NU=new Ut;class Ho{constructor(e=new he(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=m0.subVectors(i,t).cross(DU.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(m0),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/r;return l<0||l>1?null:t.copy(e.start).addScaledVector(i,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||NU.getNormalMatrix(e),r=this.coplanarPoint(m0).applyMatrix4(e),l=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Po=new zv,UU=new Yt(.5,.5),fh=new he;class GT{constructor(e=new Ho,t=new Ho,i=new Ho,r=new Ho,l=new Ho,c=new Ho){this.planes=[e,t,i,r,l,c]}set(e,t,i,r,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(i),f[3].copy(r),f[4].copy(l),f[5].copy(c),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=yr,i=!1){const r=this.planes,l=e.elements,c=l[0],f=l[1],d=l[2],h=l[3],m=l[4],_=l[5],v=l[6],x=l[7],b=l[8],M=l[9],y=l[10],S=l[11],A=l[12],N=l[13],R=l[14],L=l[15];if(r[0].setComponents(h-c,x-m,S-b,L-A).normalize(),r[1].setComponents(h+c,x+m,S+b,L+A).normalize(),r[2].setComponents(h+f,x+_,S+M,L+N).normalize(),r[3].setComponents(h-f,x-_,S-M,L-N).normalize(),i)r[4].setComponents(d,v,y,R).normalize(),r[5].setComponents(h-d,x-v,S-y,L-R).normalize();else if(r[4].setComponents(h-d,x-v,S-y,L-R).normalize(),t===yr)r[5].setComponents(h+d,x+v,S+y,L+R).normalize();else if(t===Jh)r[5].setComponents(d,v,y,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Po.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Po.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Po)}intersectsSprite(e){Po.center.set(0,0,0);const t=UU.distanceTo(e.center);return Po.radius=.7071067811865476+t,Po.applyMatrix4(e.matrixWorld),this.intersectsSphere(Po)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(fh.x=r.normal.x>0?e.max.x:e.min.x,fh.y=r.normal.y>0?e.max.y:e.min.y,fh.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(fh)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class LU extends wi{constructor(e,t,i,r,l=$n,c=$n,f,d,h){super(e,t,i,r,l,c,f,d,h),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const m=this;function _(){m.needsUpdate=!0,m._requestVideoFrameCallbackId=e.requestVideoFrameCallback(_)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(_))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class VT extends wi{constructor(e=[],t=sl,i,r,l,c,f,d,h,m){super(e,t,i,r,l,c,f,d,h,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class vf extends wi{constructor(e,t,i=Cr,r,l,c,f=_i,d=_i,h,m=ps,_=1){if(m!==ps&&m!==qo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:t,depth:_};super(v,r,l,c,f,d,m,i,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Iv(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class OU extends vf{constructor(e,t=Cr,i=sl,r,l,c=_i,f=_i,d,h=ps){const m={width:e,height:e,depth:1},_=[m,m,m,m,m,m];super(e,e,t,i,r,l,c,f,d,h),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class kT extends wi{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Lf extends xs{constructor(e=1,t=1,i=1,r=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:l,depthSegments:c};const f=this;r=Math.floor(r),l=Math.floor(l),c=Math.floor(c);const d=[],h=[],m=[],_=[];let v=0,x=0;b("z","y","x",-1,-1,i,t,e,c,l,0),b("z","y","x",1,-1,i,t,-e,c,l,1),b("x","z","y",1,1,e,i,t,r,c,2),b("x","z","y",1,-1,e,i,-t,r,c,3),b("x","y","z",1,-1,e,t,i,r,l,4),b("x","y","z",-1,-1,e,t,-i,r,l,5),this.setIndex(d),this.setAttribute("position",new us(h,3)),this.setAttribute("normal",new us(m,3)),this.setAttribute("uv",new us(_,2));function b(M,y,S,A,N,R,L,P,D,T,w){const q=R/D,H=L/T,k=R/2,J=L/2,ee=P/2,$=D+1,F=T+1;let z=0,ie=0;const de=new he;for(let G=0;G<F;G++){const I=G*H-J;for(let W=0;W<$;W++){const le=W*q-k;de[M]=le*A,de[y]=I*N,de[S]=ee,h.push(de.x,de.y,de.z),de[M]=0,de[y]=0,de[S]=P>0?1:-1,m.push(de.x,de.y,de.z),_.push(W/D),_.push(1-G/T),z+=1}}for(let G=0;G<T;G++)for(let I=0;I<D;I++){const W=v+I+$*G,le=v+I+$*(G+1),ye=v+(I+1)+$*(G+1),we=v+(I+1)+$*G;d.push(W,le,we),d.push(le,ye,we),ie+=6}f.addGroup(x,ie,w),x+=ie,v+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lf(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Of extends xs{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const l=e/2,c=t/2,f=Math.floor(i),d=Math.floor(r),h=f+1,m=d+1,_=e/f,v=t/d,x=[],b=[],M=[],y=[];for(let S=0;S<m;S++){const A=S*v-c;for(let N=0;N<h;N++){const R=N*_-l;b.push(R,-A,0),M.push(0,0,1),y.push(N/f),y.push(1-S/d)}}for(let S=0;S<d;S++)for(let A=0;A<f;A++){const N=A+h*S,R=A+h*(S+1),L=A+1+h*(S+1),P=A+1+h*S;x.push(N,R,P),x.push(R,L,P)}this.setIndex(x),this.setAttribute("position",new us(b,3)),this.setAttribute("normal",new us(M,3)),this.setAttribute("uv",new us(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Of(e.width,e.height,e.widthSegments,e.heightSegments)}}function Ru(s){const e={};for(const t in s){e[t]={};for(const i in s[t]){const r=s[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Et("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function zi(s){const e={};for(let t=0;t<s.length;t++){const i=Ru(s[t]);for(const r in i)e[r]=i[r]}return e}function PU(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function XT(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Kt.workingColorSpace}const FU={clone:Ru,merge:zi};var IU=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zU=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class or extends vp{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=IU,this.fragmentShader=zU,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ru(e.uniforms),this.uniformsGroups=PU(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const c=this.uniforms[r].value;c&&c.isTexture?t.uniforms[r]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[r]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[r]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[r]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[r]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[r]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[r]={type:"m4",value:c.toArray()}:t.uniforms[r]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class BU extends or{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class HU extends vp{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ZN,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class GU extends vp{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const dh=new he,hh=new zu,dr=new he;class WT extends Ma{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ei,this.projectionMatrix=new ei,this.projectionMatrixInverse=new ei,this.coordinateSystem=yr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(dh,hh,dr),dr.x===1&&dr.y===1&&dr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(dh,hh,dr.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(dh,hh,dr),dr.x===1&&dr.y===1&&dr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(dh,hh,dr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const qs=new he,aM=new Yt,rM=new Yt;class ir extends WT{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=G_*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(jg*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return G_*2*Math.atan(Math.tan(jg*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){qs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(qs.x,qs.y).multiplyScalar(-e/qs.z),qs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(qs.x,qs.y).multiplyScalar(-e/qs.z)}getViewSize(e,t){return this.getViewBounds(e,aM,rM),t.subVectors(rM,aM)}setViewOffset(e,t,i,r,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(jg*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,l=-.5*r;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,h=c.fullHeight;l+=c.offsetX*r/d,t-=c.offsetY*i/h,r*=c.width/d,i*=c.height/h}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Bv extends WT{constructor(e=-1,t=1,i=1,r=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let l=i-e,c=i+e,f=r+t,d=r-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,c=l+h*this.view.width,f-=m*this.view.offsetY,d=f-m*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const nu=-90,iu=1;class VU extends Ma{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ir(nu,iu,e,t);r.layers=this.layers,this.add(r);const l=new ir(nu,iu,e,t);l.layers=this.layers,this.add(l);const c=new ir(nu,iu,e,t);c.layers=this.layers,this.add(c);const f=new ir(nu,iu,e,t);f.layers=this.layers,this.add(f);const d=new ir(nu,iu,e,t);d.layers=this.layers,this.add(d);const h=new ir(nu,iu,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,l,c,f,d]=t;for(const h of t)this.remove(h);if(e===yr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===Jh)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,d,h,m]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,1,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,2,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(i,3,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(i,4,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),e.setRenderTarget(_,v,x),e.xr.enabled=b,i.texture.needsPMREMUpdate=!0}}class kU extends ir{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function sM(s,e,t,i){const r=XU(i);switch(t){case NT:return s*e;case LT:return s*e/r.components*r.byteLength;case Uv:return s*e/r.components*r.byteLength;case Au:return s*e*2/r.components*r.byteLength;case Lv:return s*e*2/r.components*r.byteLength;case UT:return s*e*3/r.components*r.byteLength;case ka:return s*e*4/r.components*r.byteLength;case Ov:return s*e*4/r.components*r.byteLength;case Oh:case Ph:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Fh:case Ih:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case c_:case d_:return Math.max(s,16)*Math.max(e,8)/4;case u_:case f_:return Math.max(s,8)*Math.max(e,8)/2;case h_:case p_:case g_:case __:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case m_:case v_:case x_:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case y_:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case S_:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case b_:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case M_:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case E_:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case T_:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case A_:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case C_:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case R_:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case w_:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case D_:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case N_:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case U_:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case L_:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case O_:case P_:case F_:return Math.ceil(s/4)*Math.ceil(e/4)*16;case I_:case z_:return Math.ceil(s/4)*Math.ceil(e/4)*8;case B_:case H_:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function XU(s){switch(s){case Va:case CT:return{byteLength:1,components:1};case gf:case RT:case hs:return{byteLength:2,components:1};case Dv:case Nv:return{byteLength:2,components:4};case Cr:case wv:case xr:return{byteLength:4,components:1};case wT:case DT:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rv}}));typeof window<"u"&&(window.__THREE__?Et("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rv);function jT(){let s=null,e=!1,t=null,i=null;function r(l,c){t(l,c),i=s.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=s.requestAnimationFrame(r),e=!0)},stop:function(){s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function WU(s){const e=new WeakMap;function t(f,d){const h=f.array,m=f.usage,_=h.byteLength,v=s.createBuffer();s.bindBuffer(d,v),s.bufferData(d,h,m),f.onUploadCallback();let x;if(h instanceof Float32Array)x=s.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)x=s.HALF_FLOAT;else if(h instanceof Uint16Array)f.isFloat16BufferAttribute?x=s.HALF_FLOAT:x=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=s.SHORT;else if(h instanceof Uint32Array)x=s.UNSIGNED_INT;else if(h instanceof Int32Array)x=s.INT;else if(h instanceof Int8Array)x=s.BYTE;else if(h instanceof Uint8Array)x=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:f.version,size:_}}function i(f,d,h){const m=d.array,_=d.updateRanges;if(s.bindBuffer(h,f),_.length===0)s.bufferSubData(h,0,m);else{_.sort((x,b)=>x.start-b.start);let v=0;for(let x=1;x<_.length;x++){const b=_[v],M=_[x];M.start<=b.start+b.count+1?b.count=Math.max(b.count,M.start+M.count-b.start):(++v,_[v]=M)}_.length=v+1;for(let x=0,b=_.length;x<b;x++){const M=_[x];s.bufferSubData(h,M.start*m.BYTES_PER_ELEMENT,m,M.start,M.count)}d.clearUpdateRanges()}d.onUploadCallback()}function r(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=e.get(f);d&&(s.deleteBuffer(d.buffer),e.delete(f))}function c(f,d){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const m=e.get(f);(!m||m.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const h=e.get(f);if(h===void 0)e.set(f,t(f,d));else if(h.version<f.version){if(h.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,f,d),h.version=f.version}}return{get:r,remove:l,update:c}}var jU=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,YU=`#ifdef USE_ALPHAHASH
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
#endif`,qU=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ZU=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,KU=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,QU=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,JU=`#ifdef USE_AOMAP
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
#endif`,$U=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eL=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,tL=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nL=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,iL=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,aL=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rL=`#ifdef USE_IRIDESCENCE
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
#endif`,sL=`#ifdef USE_BUMPMAP
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
#endif`,oL=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lL=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uL=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cL=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fL=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,dL=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,hL=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,pL=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,mL=`#define PI 3.141592653589793
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
} // validated`,gL=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_L=`vec3 transformedNormal = objectNormal;
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
#endif`,vL=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xL=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yL=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,SL=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bL="gl_FragColor = linearToOutputTexel( gl_FragColor );",ML=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,EL=`#ifdef USE_ENVMAP
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
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,TL=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,AL=`#ifdef USE_ENVMAP
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
#endif`,CL=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,RL=`#ifdef USE_ENVMAP
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
#endif`,wL=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,DL=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,NL=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,UL=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,LL=`#ifdef USE_GRADIENTMAP
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
}`,OL=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,PL=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,FL=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,IL=`uniform bool receiveShadow;
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
#endif`,zL=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,BL=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,HL=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,GL=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,VL=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kL=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,XL=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,WL=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#endif`,jL=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,YL=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qL=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ZL=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,KL=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,QL=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,JL=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$L=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,eO=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,tO=`#if defined( USE_POINTS_UV )
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
#endif`,nO=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,iO=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,aO=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rO=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sO=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oO=`#ifdef USE_MORPHTARGETS
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
#endif`,lO=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uO=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,cO=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fO=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dO=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hO=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pO=`#ifdef USE_NORMALMAP
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
#endif`,mO=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gO=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_O=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vO=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xO=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yO=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,SO=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bO=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,MO=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,EO=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,TO=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,AO=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,CO=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,RO=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wO=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,DO=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,NO=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,UO=`#ifdef USE_SKINNING
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
#endif`,LO=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,OO=`#ifdef USE_SKINNING
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
#endif`,PO=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,FO=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,IO=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zO=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,BO=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,HO=`#ifdef USE_TRANSMISSION
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
#endif`,GO=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,VO=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kO=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,XO=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const WO=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jO=`uniform sampler2D t2D;
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
}`,YO=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qO=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ZO=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,KO=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QO=`#include <common>
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
}`,JO=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,$O=`#define DISTANCE
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
}`,eP=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,tP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nP=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iP=`uniform float scale;
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
}`,aP=`uniform vec3 diffuse;
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
}`,rP=`#include <common>
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
}`,sP=`uniform vec3 diffuse;
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
}`,oP=`#define LAMBERT
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
}`,lP=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,uP=`#define MATCAP
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
}`,cP=`#define MATCAP
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
}`,fP=`#define NORMAL
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
}`,dP=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,hP=`#define PHONG
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
}`,pP=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,mP=`#define STANDARD
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
}`,gP=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,_P=`#define TOON
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
}`,vP=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,xP=`uniform float size;
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
}`,yP=`uniform vec3 diffuse;
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
}`,SP=`#include <common>
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
}`,bP=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,MP=`uniform float rotation;
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
}`,EP=`uniform vec3 diffuse;
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
}`,Ot={alphahash_fragment:jU,alphahash_pars_fragment:YU,alphamap_fragment:qU,alphamap_pars_fragment:ZU,alphatest_fragment:KU,alphatest_pars_fragment:QU,aomap_fragment:JU,aomap_pars_fragment:$U,batching_pars_vertex:eL,batching_vertex:tL,begin_vertex:nL,beginnormal_vertex:iL,bsdfs:aL,iridescence_fragment:rL,bumpmap_pars_fragment:sL,clipping_planes_fragment:oL,clipping_planes_pars_fragment:lL,clipping_planes_pars_vertex:uL,clipping_planes_vertex:cL,color_fragment:fL,color_pars_fragment:dL,color_pars_vertex:hL,color_vertex:pL,common:mL,cube_uv_reflection_fragment:gL,defaultnormal_vertex:_L,displacementmap_pars_vertex:vL,displacementmap_vertex:xL,emissivemap_fragment:yL,emissivemap_pars_fragment:SL,colorspace_fragment:bL,colorspace_pars_fragment:ML,envmap_fragment:EL,envmap_common_pars_fragment:TL,envmap_pars_fragment:AL,envmap_pars_vertex:CL,envmap_physical_pars_fragment:zL,envmap_vertex:RL,fog_vertex:wL,fog_pars_vertex:DL,fog_fragment:NL,fog_pars_fragment:UL,gradientmap_pars_fragment:LL,lightmap_pars_fragment:OL,lights_lambert_fragment:PL,lights_lambert_pars_fragment:FL,lights_pars_begin:IL,lights_toon_fragment:BL,lights_toon_pars_fragment:HL,lights_phong_fragment:GL,lights_phong_pars_fragment:VL,lights_physical_fragment:kL,lights_physical_pars_fragment:XL,lights_fragment_begin:WL,lights_fragment_maps:jL,lights_fragment_end:YL,logdepthbuf_fragment:qL,logdepthbuf_pars_fragment:ZL,logdepthbuf_pars_vertex:KL,logdepthbuf_vertex:QL,map_fragment:JL,map_pars_fragment:$L,map_particle_fragment:eO,map_particle_pars_fragment:tO,metalnessmap_fragment:nO,metalnessmap_pars_fragment:iO,morphinstance_vertex:aO,morphcolor_vertex:rO,morphnormal_vertex:sO,morphtarget_pars_vertex:oO,morphtarget_vertex:lO,normal_fragment_begin:uO,normal_fragment_maps:cO,normal_pars_fragment:fO,normal_pars_vertex:dO,normal_vertex:hO,normalmap_pars_fragment:pO,clearcoat_normal_fragment_begin:mO,clearcoat_normal_fragment_maps:gO,clearcoat_pars_fragment:_O,iridescence_pars_fragment:vO,opaque_fragment:xO,packing:yO,premultiplied_alpha_fragment:SO,project_vertex:bO,dithering_fragment:MO,dithering_pars_fragment:EO,roughnessmap_fragment:TO,roughnessmap_pars_fragment:AO,shadowmap_pars_fragment:CO,shadowmap_pars_vertex:RO,shadowmap_vertex:wO,shadowmask_pars_fragment:DO,skinbase_vertex:NO,skinning_pars_vertex:UO,skinning_vertex:LO,skinnormal_vertex:OO,specularmap_fragment:PO,specularmap_pars_fragment:FO,tonemapping_fragment:IO,tonemapping_pars_fragment:zO,transmission_fragment:BO,transmission_pars_fragment:HO,uv_pars_fragment:GO,uv_pars_vertex:VO,uv_vertex:kO,worldpos_vertex:XO,background_vert:WO,background_frag:jO,backgroundCube_vert:YO,backgroundCube_frag:qO,cube_vert:ZO,cube_frag:KO,depth_vert:QO,depth_frag:JO,distance_vert:$O,distance_frag:eP,equirect_vert:tP,equirect_frag:nP,linedashed_vert:iP,linedashed_frag:aP,meshbasic_vert:rP,meshbasic_frag:sP,meshlambert_vert:oP,meshlambert_frag:lP,meshmatcap_vert:uP,meshmatcap_frag:cP,meshnormal_vert:fP,meshnormal_frag:dP,meshphong_vert:hP,meshphong_frag:pP,meshphysical_vert:mP,meshphysical_frag:gP,meshtoon_vert:_P,meshtoon_frag:vP,points_vert:xP,points_frag:yP,shadow_vert:SP,shadow_frag:bP,sprite_vert:MP,sprite_frag:EP},Xe={common:{diffuse:{value:new mn(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ut}},envmap:{envMap:{value:null},envMapRotation:{value:new Ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ut},normalScale:{value:new Yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new mn(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new mn(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new mn(16777215)},opacity:{value:1},center:{value:new Yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}}},gr={basic:{uniforms:zi([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:zi([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,Xe.lights,{emissive:{value:new mn(0)},envMapIntensity:{value:1}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:zi([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,Xe.lights,{emissive:{value:new mn(0)},specular:{value:new mn(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:zi([Xe.common,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.roughnessmap,Xe.metalnessmap,Xe.fog,Xe.lights,{emissive:{value:new mn(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:zi([Xe.common,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.gradientmap,Xe.fog,Xe.lights,{emissive:{value:new mn(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:zi([Xe.common,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:zi([Xe.points,Xe.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:zi([Xe.common,Xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:zi([Xe.common,Xe.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:zi([Xe.common,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:zi([Xe.sprite,Xe.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ut}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distance:{uniforms:zi([Xe.common,Xe.displacementmap,{referencePosition:{value:new he},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distance_vert,fragmentShader:Ot.distance_frag},shadow:{uniforms:zi([Xe.lights,Xe.fog,{color:{value:new mn(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};gr.physical={uniforms:zi([gr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ut},clearcoatNormalScale:{value:new Yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ut},sheen:{value:0},sheenColor:{value:new mn(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ut},transmissionSamplerSize:{value:new Yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ut},attenuationDistance:{value:0},attenuationColor:{value:new mn(0)},specularColor:{value:new mn(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ut},anisotropyVector:{value:new Yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ut}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};const ph={r:0,b:0,g:0},Fo=new ms,TP=new ei;function AP(s,e,t,i,r,l){const c=new mn(0);let f=r===!0?0:1,d,h,m=null,_=0,v=null;function x(A){let N=A.isScene===!0?A.background:null;if(N&&N.isTexture){const R=A.backgroundBlurriness>0;N=e.get(N,R)}return N}function b(A){let N=!1;const R=x(A);R===null?y(c,f):R&&R.isColor&&(y(R,1),N=!0);const L=s.xr.getEnvironmentBlendMode();L==="additive"?t.buffers.color.setClear(0,0,0,1,l):L==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||N)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function M(A,N){const R=x(N);R&&(R.isCubeTexture||R.mapping===_p)?(h===void 0&&(h=new Rr(new Lf(1,1,1),new or({name:"BackgroundCubeMaterial",uniforms:Ru(gr.backgroundCube.uniforms),vertexShader:gr.backgroundCube.vertexShader,fragmentShader:gr.backgroundCube.fragmentShader,side:Ji,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,P,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Fo.copy(N.backgroundRotation),Fo.x*=-1,Fo.y*=-1,Fo.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Fo.y*=-1,Fo.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(TP.makeRotationFromEuler(Fo)),h.material.toneMapped=Kt.getTransfer(R.colorSpace)!==on,(m!==R||_!==R.version||v!==s.toneMapping)&&(h.material.needsUpdate=!0,m=R,_=R.version,v=s.toneMapping),h.layers.enableAll(),A.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(d===void 0&&(d=new Rr(new Of(2,2),new or({name:"BackgroundMaterial",uniforms:Ru(gr.background.uniforms),vertexShader:gr.background.vertexShader,fragmentShader:gr.background.fragmentShader,side:uo,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(d)),d.material.uniforms.t2D.value=R,d.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,d.material.toneMapped=Kt.getTransfer(R.colorSpace)!==on,R.matrixAutoUpdate===!0&&R.updateMatrix(),d.material.uniforms.uvTransform.value.copy(R.matrix),(m!==R||_!==R.version||v!==s.toneMapping)&&(d.material.needsUpdate=!0,m=R,_=R.version,v=s.toneMapping),d.layers.enableAll(),A.unshift(d,d.geometry,d.material,0,0,null))}function y(A,N){A.getRGB(ph,XT(s)),t.buffers.color.setClear(ph.r,ph.g,ph.b,N,l)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return c},setClearColor:function(A,N=1){c.set(A),f=N,y(c,f)},getClearAlpha:function(){return f},setClearAlpha:function(A){f=A,y(c,f)},render:b,addToRenderList:M,dispose:S}}function CP(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},r=v(null);let l=r,c=!1;function f(H,k,J,ee,$){let F=!1;const z=_(H,ee,J,k);l!==z&&(l=z,h(l.object)),F=x(H,ee,J,$),F&&b(H,ee,J,$),$!==null&&e.update($,s.ELEMENT_ARRAY_BUFFER),(F||c)&&(c=!1,R(H,k,J,ee),$!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function d(){return s.createVertexArray()}function h(H){return s.bindVertexArray(H)}function m(H){return s.deleteVertexArray(H)}function _(H,k,J,ee){const $=ee.wireframe===!0;let F=i[k.id];F===void 0&&(F={},i[k.id]=F);const z=H.isInstancedMesh===!0?H.id:0;let ie=F[z];ie===void 0&&(ie={},F[z]=ie);let de=ie[J.id];de===void 0&&(de={},ie[J.id]=de);let G=de[$];return G===void 0&&(G=v(d()),de[$]=G),G}function v(H){const k=[],J=[],ee=[];for(let $=0;$<t;$++)k[$]=0,J[$]=0,ee[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:J,attributeDivisors:ee,object:H,attributes:{},index:null}}function x(H,k,J,ee){const $=l.attributes,F=k.attributes;let z=0;const ie=J.getAttributes();for(const de in ie)if(ie[de].location>=0){const I=$[de];let W=F[de];if(W===void 0&&(de==="instanceMatrix"&&H.instanceMatrix&&(W=H.instanceMatrix),de==="instanceColor"&&H.instanceColor&&(W=H.instanceColor)),I===void 0||I.attribute!==W||W&&I.data!==W.data)return!0;z++}return l.attributesNum!==z||l.index!==ee}function b(H,k,J,ee){const $={},F=k.attributes;let z=0;const ie=J.getAttributes();for(const de in ie)if(ie[de].location>=0){let I=F[de];I===void 0&&(de==="instanceMatrix"&&H.instanceMatrix&&(I=H.instanceMatrix),de==="instanceColor"&&H.instanceColor&&(I=H.instanceColor));const W={};W.attribute=I,I&&I.data&&(W.data=I.data),$[de]=W,z++}l.attributes=$,l.attributesNum=z,l.index=ee}function M(){const H=l.newAttributes;for(let k=0,J=H.length;k<J;k++)H[k]=0}function y(H){S(H,0)}function S(H,k){const J=l.newAttributes,ee=l.enabledAttributes,$=l.attributeDivisors;J[H]=1,ee[H]===0&&(s.enableVertexAttribArray(H),ee[H]=1),$[H]!==k&&(s.vertexAttribDivisor(H,k),$[H]=k)}function A(){const H=l.newAttributes,k=l.enabledAttributes;for(let J=0,ee=k.length;J<ee;J++)k[J]!==H[J]&&(s.disableVertexAttribArray(J),k[J]=0)}function N(H,k,J,ee,$,F,z){z===!0?s.vertexAttribIPointer(H,k,J,$,F):s.vertexAttribPointer(H,k,J,ee,$,F)}function R(H,k,J,ee){M();const $=ee.attributes,F=J.getAttributes(),z=k.defaultAttributeValues;for(const ie in F){const de=F[ie];if(de.location>=0){let G=$[ie];if(G===void 0&&(ie==="instanceMatrix"&&H.instanceMatrix&&(G=H.instanceMatrix),ie==="instanceColor"&&H.instanceColor&&(G=H.instanceColor)),G!==void 0){const I=G.normalized,W=G.itemSize,le=e.get(G);if(le===void 0)continue;const ye=le.buffer,we=le.type,te=le.bytesPerElement,ge=we===s.INT||we===s.UNSIGNED_INT||G.gpuType===wv;if(G.isInterleavedBufferAttribute){const Me=G.data,Oe=Me.stride,Je=G.offset;if(Me.isInstancedInterleavedBuffer){for(let Ze=0;Ze<de.locationSize;Ze++)S(de.location+Ze,Me.meshPerAttribute);H.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let Ze=0;Ze<de.locationSize;Ze++)y(de.location+Ze);s.bindBuffer(s.ARRAY_BUFFER,ye);for(let Ze=0;Ze<de.locationSize;Ze++)N(de.location+Ze,W/de.locationSize,we,I,Oe*te,(Je+W/de.locationSize*Ze)*te,ge)}else{if(G.isInstancedBufferAttribute){for(let Me=0;Me<de.locationSize;Me++)S(de.location+Me,G.meshPerAttribute);H.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let Me=0;Me<de.locationSize;Me++)y(de.location+Me);s.bindBuffer(s.ARRAY_BUFFER,ye);for(let Me=0;Me<de.locationSize;Me++)N(de.location+Me,W/de.locationSize,we,I,W*te,W/de.locationSize*Me*te,ge)}}else if(z!==void 0){const I=z[ie];if(I!==void 0)switch(I.length){case 2:s.vertexAttrib2fv(de.location,I);break;case 3:s.vertexAttrib3fv(de.location,I);break;case 4:s.vertexAttrib4fv(de.location,I);break;default:s.vertexAttrib1fv(de.location,I)}}}}A()}function L(){w();for(const H in i){const k=i[H];for(const J in k){const ee=k[J];for(const $ in ee){const F=ee[$];for(const z in F)m(F[z].object),delete F[z];delete ee[$]}}delete i[H]}}function P(H){if(i[H.id]===void 0)return;const k=i[H.id];for(const J in k){const ee=k[J];for(const $ in ee){const F=ee[$];for(const z in F)m(F[z].object),delete F[z];delete ee[$]}}delete i[H.id]}function D(H){for(const k in i){const J=i[k];for(const ee in J){const $=J[ee];if($[H.id]===void 0)continue;const F=$[H.id];for(const z in F)m(F[z].object),delete F[z];delete $[H.id]}}}function T(H){for(const k in i){const J=i[k],ee=H.isInstancedMesh===!0?H.id:0,$=J[ee];if($!==void 0){for(const F in $){const z=$[F];for(const ie in z)m(z[ie].object),delete z[ie];delete $[F]}delete J[ee],Object.keys(J).length===0&&delete i[k]}}}function w(){q(),c=!0,l!==r&&(l=r,h(l.object))}function q(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:f,reset:w,resetDefaultState:q,dispose:L,releaseStatesOfGeometry:P,releaseStatesOfObject:T,releaseStatesOfProgram:D,initAttributes:M,enableAttribute:y,disableUnusedAttributes:A}}function RP(s,e,t){let i;function r(h){i=h}function l(h,m){s.drawArrays(i,h,m),t.update(m,i,1)}function c(h,m,_){_!==0&&(s.drawArraysInstanced(i,h,m,_),t.update(m,i,_))}function f(h,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,m,0,_);let x=0;for(let b=0;b<_;b++)x+=m[b];t.update(x,i,1)}function d(h,m,_,v){if(_===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let b=0;b<h.length;b++)c(h[b],m[b],v[b]);else{x.multiDrawArraysInstancedWEBGL(i,h,0,m,0,v,0,_);let b=0;for(let M=0;M<_;M++)b+=m[M]*v[M];t.update(b,i,1)}}this.setMode=r,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function wP(s,e,t,i){let r;function l(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");r=s.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function c(D){return!(D!==ka&&i.convert(D)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(D){const T=D===hs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==Va&&i.convert(D)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==xr&&!T)}function d(D){if(D==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const m=d(h);m!==h&&(Et("WebGLRenderer:",h,"not supported, using",m,"instead."),h=m);const _=t.logarithmicDepthBuffer===!0,v=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),x=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),S=s.getParameter(s.MAX_VERTEX_ATTRIBS),A=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),N=s.getParameter(s.MAX_VARYING_VECTORS),R=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),L=s.getParameter(s.MAX_SAMPLES),P=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:c,textureTypeReadable:f,precision:h,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:x,maxVertexTextures:b,maxTextureSize:M,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:A,maxVaryings:N,maxFragmentUniforms:R,maxSamples:L,samples:P}}function DP(s){const e=this;let t=null,i=0,r=!1,l=!1;const c=new Ho,f=new Ut,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const x=_.length!==0||v||i!==0||r;return r=v,i=_.length,x},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,v){t=m(_,v,0)},this.setState=function(_,v,x){const b=_.clippingPlanes,M=_.clipIntersection,y=_.clipShadows,S=s.get(_);if(!r||b===null||b.length===0||l&&!y)l?m(null):h();else{const A=l?0:i,N=A*4;let R=S.clippingState||null;d.value=R,R=m(b,v,N,x);for(let L=0;L!==N;++L)R[L]=t[L];S.clippingState=R,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=A}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function m(_,v,x,b){const M=_!==null?_.length:0;let y=null;if(M!==0){if(y=d.value,b!==!0||y===null){const S=x+M*4,A=v.matrixWorldInverse;f.getNormalMatrix(A),(y===null||y.length<S)&&(y=new Float32Array(S));for(let N=0,R=x;N!==M;++N,R+=4)c.copy(_[N]).applyMatrix4(A,f),c.normal.toArray(y,R),y[R+3]=c.constant}d.value=y,d.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,y}}const Qs=4,oM=[.125,.215,.35,.446,.526,.582],Wo=20,NP=256,Pc=new Bv,lM=new mn;let g0=null,_0=0,v0=0,x0=!1;const UP=new he;class uM{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,l={}){const{size:c=256,position:f=UP}=l;g0=this._renderer.getRenderTarget(),_0=this._renderer.getActiveCubeFace(),v0=this._renderer.getActiveMipmapLevel(),x0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,i,r,d,f),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dM(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fM(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(g0,_0,v0),this._renderer.xr.enabled=x0,e.scissorTest=!1,au(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===sl||e.mapping===Tu?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),g0=this._renderer.getRenderTarget(),_0=this._renderer.getActiveCubeFace(),v0=this._renderer.getActiveMipmapLevel(),x0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:$n,minFilter:$n,generateMipmaps:!1,type:hs,format:ka,colorSpace:Cu,depthBuffer:!1},r=cM(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cM(e,t,i);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=LP(l)),this._blurMaterial=PP(l,e,t),this._ggxMaterial=OP(l,e,t)}return r}_compileMaterial(e){const t=new Rr(new xs,e);this._renderer.compile(t,Pc)}_sceneToCubeUV(e,t,i,r,l){const d=new ir(90,1,t,i),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,x=_.toneMapping;_.getClearColor(lM),_.toneMapping=Mr,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(r),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Rr(new Lf,new HT({name:"PMREM.Background",side:Ji,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,y=M.material;let S=!1;const A=e.background;A?A.isColor&&(y.color.copy(A),e.background=null,S=!0):(y.color.copy(lM),S=!0);for(let N=0;N<6;N++){const R=N%3;R===0?(d.up.set(0,h[N],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x+m[N],l.y,l.z)):R===1?(d.up.set(0,0,h[N]),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y+m[N],l.z)):(d.up.set(0,h[N],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y,l.z+m[N]));const L=this._cubeSize;au(r,R*L,N>2?L:0,L,L),_.setRenderTarget(r),S&&_.render(M,d),_.render(e,d)}_.toneMapping=x,_.autoClear=v,e.background=A}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===sl||e.mapping===Tu;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=dM()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fM());const l=r?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=l;const f=l.uniforms;f.envMap.value=e;const d=this._cubeSize;au(t,0,0,3*d,2*d),i.setRenderTarget(t),i.render(c,Pc)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let l=1;l<r;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,l=this._pingPongRenderTarget,c=this._ggxMaterial,f=this._lodMeshes[i];f.material=c;const d=c.uniforms,h=i/(this._lodMeshes.length-1),m=t/(this._lodMeshes.length-1),_=Math.sqrt(h*h-m*m),v=0+h*1.25,x=_*v,{_lodMax:b}=this,M=this._sizeLods[i],y=3*M*(i>b-Qs?i-b+Qs:0),S=4*(this._cubeSize-M);d.envMap.value=e.texture,d.roughness.value=x,d.mipInt.value=b-t,au(l,y,S,3*M,2*M),r.setRenderTarget(l),r.render(f,Pc),d.envMap.value=l.texture,d.roughness.value=0,d.mipInt.value=b-i,au(e,y,S,3*M,2*M),r.setRenderTarget(e),r.render(f,Pc)}_blur(e,t,i,r,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,i,r,"latitudinal",l),this._halfBlur(c,e,i,i,r,"longitudinal",l)}_halfBlur(e,t,i,r,l,c,f){const d=this._renderer,h=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&en("blur direction must be either latitudinal or longitudinal!");const m=3,_=this._lodMeshes[r];_.material=h;const v=h.uniforms,x=this._sizeLods[i]-1,b=isFinite(l)?Math.PI/(2*x):2*Math.PI/(2*Wo-1),M=l/b,y=isFinite(l)?1+Math.floor(m*M):Wo;y>Wo&&Et(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Wo}`);const S=[];let A=0;for(let D=0;D<Wo;++D){const T=D/M,w=Math.exp(-T*T/2);S.push(w),D===0?A+=w:D<y&&(A+=2*w)}for(let D=0;D<S.length;D++)S[D]=S[D]/A;v.envMap.value=e.texture,v.samples.value=y,v.weights.value=S,v.latitudinal.value=c==="latitudinal",f&&(v.poleAxis.value=f);const{_lodMax:N}=this;v.dTheta.value=b,v.mipInt.value=N-i;const R=this._sizeLods[r],L=3*R*(r>N-Qs?r-N+Qs:0),P=4*(this._cubeSize-R);au(t,L,P,3*R,2*R),d.setRenderTarget(t),d.render(_,Pc)}}function LP(s){const e=[],t=[],i=[];let r=s;const l=s-Qs+1+oM.length;for(let c=0;c<l;c++){const f=Math.pow(2,r);e.push(f);let d=1/f;c>s-Qs?d=oM[c-s+Qs-1]:c===0&&(d=0),t.push(d);const h=1/(f-2),m=-h,_=1+h,v=[m,m,_,m,_,_,m,m,_,_,m,_],x=6,b=6,M=3,y=2,S=1,A=new Float32Array(M*b*x),N=new Float32Array(y*b*x),R=new Float32Array(S*b*x);for(let P=0;P<x;P++){const D=P%3*2/3-1,T=P>2?0:-1,w=[D,T,0,D+2/3,T,0,D+2/3,T+1,0,D,T,0,D+2/3,T+1,0,D,T+1,0];A.set(w,M*b*P),N.set(v,y*b*P);const q=[P,P,P,P,P,P];R.set(q,S*b*P)}const L=new xs;L.setAttribute("position",new Tr(A,M)),L.setAttribute("uv",new Tr(N,y)),L.setAttribute("faceIndex",new Tr(R,S)),i.push(new Rr(L,null)),r>Qs&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function cM(s,e,t){const i=new Er(s,e,t);return i.texture.mapping=_p,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function au(s,e,t,i,r){s.viewport.set(e,t,i,r),s.scissor.set(e,t,i,r)}function OP(s,e,t){return new or({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:NP,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xp(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:os,depthTest:!1,depthWrite:!1})}function PP(s,e,t){const i=new Float32Array(Wo),r=new he(0,1,0);return new or({name:"SphericalGaussianBlur",defines:{n:Wo,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:xp(),fragmentShader:`

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
		`,blending:os,depthTest:!1,depthWrite:!1})}function fM(){return new or({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xp(),fragmentShader:`

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
		`,blending:os,depthTest:!1,depthWrite:!1})}function dM(){return new or({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:os,depthTest:!1,depthWrite:!1})}function xp(){return`

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
	`}class YT extends Er{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new VT(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Lf(5,5,5),l=new or({name:"CubemapFromEquirect",uniforms:Ru(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ji,blending:os});l.uniforms.tEquirect.value=t;const c=new Rr(r,l),f=t.minFilter;return t.minFilter===Yo&&(t.minFilter=$n),new VU(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,i,r);e.setRenderTarget(l)}}function FP(s){let e=new WeakMap,t=new WeakMap,i=null;function r(v,x=!1){return v==null?null:x?c(v):l(v)}function l(v){if(v&&v.isTexture){const x=v.mapping;if(x===kg||x===Xg)if(e.has(v)){const b=e.get(v).texture;return f(b,v.mapping)}else{const b=v.image;if(b&&b.height>0){const M=new YT(b.height);return M.fromEquirectangularTexture(s,v),e.set(v,M),v.addEventListener("dispose",h),f(M.texture,v.mapping)}else return null}}return v}function c(v){if(v&&v.isTexture){const x=v.mapping,b=x===kg||x===Xg,M=x===sl||x===Tu;if(b||M){let y=t.get(v);const S=y!==void 0?y.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==S)return i===null&&(i=new uM(s)),y=b?i.fromEquirectangular(v,y):i.fromCubemap(v,y),y.texture.pmremVersion=v.pmremVersion,t.set(v,y),y.texture;if(y!==void 0)return y.texture;{const A=v.image;return b&&A&&A.height>0||M&&A&&d(A)?(i===null&&(i=new uM(s)),y=b?i.fromEquirectangular(v):i.fromCubemap(v),y.texture.pmremVersion=v.pmremVersion,t.set(v,y),v.addEventListener("dispose",m),y.texture):null}}}return v}function f(v,x){return x===kg?v.mapping=sl:x===Xg&&(v.mapping=Tu),v}function d(v){let x=0;const b=6;for(let M=0;M<b;M++)v[M]!==void 0&&x++;return x===b}function h(v){const x=v.target;x.removeEventListener("dispose",h);const b=e.get(x);b!==void 0&&(e.delete(x),b.dispose())}function m(v){const x=v.target;x.removeEventListener("dispose",m);const b=t.get(x);b!==void 0&&(t.delete(x),b.dispose())}function _(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:_}}function IP(s){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=s.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&ep("WebGLRenderer: "+i+" extension not supported."),r}}}function zP(s,e,t,i){const r={},l=new WeakMap;function c(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const b in v.attributes)e.remove(v.attributes[b]);v.removeEventListener("dispose",c),delete r[v.id];const x=l.get(v);x&&(e.remove(x),l.delete(v)),i.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function f(_,v){return r[v.id]===!0||(v.addEventListener("dispose",c),r[v.id]=!0,t.memory.geometries++),v}function d(_){const v=_.attributes;for(const x in v)e.update(v[x],s.ARRAY_BUFFER)}function h(_){const v=[],x=_.index,b=_.attributes.position;let M=0;if(b===void 0)return;if(x!==null){const A=x.array;M=x.version;for(let N=0,R=A.length;N<R;N+=3){const L=A[N+0],P=A[N+1],D=A[N+2];v.push(L,P,P,D,D,L)}}else{const A=b.array;M=b.version;for(let N=0,R=A.length/3-1;N<R;N+=3){const L=N+0,P=N+1,D=N+2;v.push(L,P,P,D,D,L)}}const y=new(b.count>=65535?BT:zT)(v,1);y.version=M;const S=l.get(_);S&&e.remove(S),l.set(_,y)}function m(_){const v=l.get(_);if(v){const x=_.index;x!==null&&v.version<x.version&&h(_)}else h(_);return l.get(_)}return{get:f,update:d,getWireframeAttribute:m}}function BP(s,e,t){let i;function r(v){i=v}let l,c;function f(v){l=v.type,c=v.bytesPerElement}function d(v,x){s.drawElements(i,x,l,v*c),t.update(x,i,1)}function h(v,x,b){b!==0&&(s.drawElementsInstanced(i,x,l,v*c,b),t.update(x,i,b))}function m(v,x,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,x,0,l,v,0,b);let y=0;for(let S=0;S<b;S++)y+=x[S];t.update(y,i,1)}function _(v,x,b,M){if(b===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let S=0;S<v.length;S++)h(v[S]/c,x[S],M[S]);else{y.multiDrawElementsInstancedWEBGL(i,x,0,l,v,0,M,0,b);let S=0;for(let A=0;A<b;A++)S+=x[A]*M[A];t.update(S,i,1)}}this.setMode=r,this.setIndex=f,this.render=d,this.renderInstances=h,this.renderMultiDraw=m,this.renderMultiDrawInstances=_}function HP(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(l,c,f){switch(t.calls++,c){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:en("WebGLInfo: Unknown draw mode:",c);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function GP(s,e,t){const i=new WeakMap,r=new Gn;function l(c,f,d){const h=c.morphTargetInfluences,m=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=m!==void 0?m.length:0;let v=i.get(f);if(v===void 0||v.count!==_){let q=function(){T.dispose(),i.delete(f),f.removeEventListener("dispose",q)};var x=q;v!==void 0&&v.texture.dispose();const b=f.morphAttributes.position!==void 0,M=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,S=f.morphAttributes.position||[],A=f.morphAttributes.normal||[],N=f.morphAttributes.color||[];let R=0;b===!0&&(R=1),M===!0&&(R=2),y===!0&&(R=3);let L=f.attributes.position.count*R,P=1;L>e.maxTextureSize&&(P=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const D=new Float32Array(L*P*4*_),T=new PT(D,L,P,_);T.type=xr,T.needsUpdate=!0;const w=R*4;for(let H=0;H<_;H++){const k=S[H],J=A[H],ee=N[H],$=L*P*4*H;for(let F=0;F<k.count;F++){const z=F*w;b===!0&&(r.fromBufferAttribute(k,F),D[$+z+0]=r.x,D[$+z+1]=r.y,D[$+z+2]=r.z,D[$+z+3]=0),M===!0&&(r.fromBufferAttribute(J,F),D[$+z+4]=r.x,D[$+z+5]=r.y,D[$+z+6]=r.z,D[$+z+7]=0),y===!0&&(r.fromBufferAttribute(ee,F),D[$+z+8]=r.x,D[$+z+9]=r.y,D[$+z+10]=r.z,D[$+z+11]=ee.itemSize===4?r.w:1)}}v={count:_,texture:T,size:new Yt(L,P)},i.set(f,v),f.addEventListener("dispose",q)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(s,"morphTexture",c.morphTexture,t);else{let b=0;for(let y=0;y<h.length;y++)b+=h[y];const M=f.morphTargetsRelative?1:1-b;d.getUniforms().setValue(s,"morphTargetBaseInfluence",M),d.getUniforms().setValue(s,"morphTargetInfluences",h)}d.getUniforms().setValue(s,"morphTargetsTexture",v.texture,t),d.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:l}}function VP(s,e,t,i,r){let l=new WeakMap;function c(h){const m=r.render.frame,_=h.geometry,v=e.get(h,_);if(l.get(v)!==m&&(e.update(v),l.set(v,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),l.get(h)!==m&&(t.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,s.ARRAY_BUFFER),l.set(h,m))),h.isSkinnedMesh){const x=h.skeleton;l.get(x)!==m&&(x.update(),l.set(x,m))}return v}function f(){l=new WeakMap}function d(h){const m=h.target;m.removeEventListener("dispose",d),i.releaseStatesOfObject(m),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:c,dispose:f}}const kP={[xT]:"LINEAR_TONE_MAPPING",[yT]:"REINHARD_TONE_MAPPING",[ST]:"CINEON_TONE_MAPPING",[bT]:"ACES_FILMIC_TONE_MAPPING",[ET]:"AGX_TONE_MAPPING",[TT]:"NEUTRAL_TONE_MAPPING",[MT]:"CUSTOM_TONE_MAPPING"};function XP(s,e,t,i,r){const l=new Er(e,t,{type:s,depthBuffer:i,stencilBuffer:r}),c=new Er(e,t,{type:hs,depthBuffer:!1,stencilBuffer:!1}),f=new xs;f.setAttribute("position",new us([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new us([0,2,0,0,2,0],2));const d=new BU({uniforms:{tDiffuse:{value:null}},vertexShader:`
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

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

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
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Rr(f,d),m=new Bv(-1,1,1,-1,0,1);let _=null,v=null,x=!1,b,M=null,y=[],S=!1;this.setSize=function(A,N){l.setSize(A,N),c.setSize(A,N);for(let R=0;R<y.length;R++){const L=y[R];L.setSize&&L.setSize(A,N)}},this.setEffects=function(A){y=A,S=y.length>0&&y[0].isRenderPass===!0;const N=l.width,R=l.height;for(let L=0;L<y.length;L++){const P=y[L];P.setSize&&P.setSize(N,R)}},this.begin=function(A,N){if(x||A.toneMapping===Mr&&y.length===0)return!1;if(M=N,N!==null){const R=N.width,L=N.height;(l.width!==R||l.height!==L)&&this.setSize(R,L)}return S===!1&&A.setRenderTarget(l),b=A.toneMapping,A.toneMapping=Mr,!0},this.hasRenderPass=function(){return S},this.end=function(A,N){A.toneMapping=b,x=!0;let R=l,L=c;for(let P=0;P<y.length;P++){const D=y[P];if(D.enabled!==!1&&(D.render(A,L,R,N),D.needsSwap!==!1)){const T=R;R=L,L=T}}if(_!==A.outputColorSpace||v!==A.toneMapping){_=A.outputColorSpace,v=A.toneMapping,d.defines={},Kt.getTransfer(_)===on&&(d.defines.SRGB_TRANSFER="");const P=kP[v];P&&(d.defines[P]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=R.texture,A.setRenderTarget(M),A.render(h,m),M=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){l.dispose(),c.dispose(),f.dispose(),d.dispose()}}const qT=new wi,V_=new vf(1,1),ZT=new PT,KT=new pU,QT=new VT,hM=[],pM=[],mM=new Float32Array(16),gM=new Float32Array(9),_M=new Float32Array(4);function Bu(s,e,t){const i=s[0];if(i<=0||i>0)return s;const r=e*t;let l=hM[r];if(l===void 0&&(l=new Float32Array(r),hM[r]=l),e!==0){i.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=t,s[c].toArray(l,f)}return l}function ri(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function si(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function yp(s,e){let t=pM[e];t===void 0&&(t=new Int32Array(e),pM[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function WP(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function jP(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ri(t,e))return;s.uniform2fv(this.addr,e),si(t,e)}}function YP(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ri(t,e))return;s.uniform3fv(this.addr,e),si(t,e)}}function qP(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ri(t,e))return;s.uniform4fv(this.addr,e),si(t,e)}}function ZP(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(ri(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),si(t,e)}else{if(ri(t,i))return;_M.set(i),s.uniformMatrix2fv(this.addr,!1,_M),si(t,i)}}function KP(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(ri(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),si(t,e)}else{if(ri(t,i))return;gM.set(i),s.uniformMatrix3fv(this.addr,!1,gM),si(t,i)}}function QP(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(ri(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),si(t,e)}else{if(ri(t,i))return;mM.set(i),s.uniformMatrix4fv(this.addr,!1,mM),si(t,i)}}function JP(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function $P(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ri(t,e))return;s.uniform2iv(this.addr,e),si(t,e)}}function eF(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ri(t,e))return;s.uniform3iv(this.addr,e),si(t,e)}}function tF(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ri(t,e))return;s.uniform4iv(this.addr,e),si(t,e)}}function nF(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function iF(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ri(t,e))return;s.uniform2uiv(this.addr,e),si(t,e)}}function aF(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ri(t,e))return;s.uniform3uiv(this.addr,e),si(t,e)}}function rF(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ri(t,e))return;s.uniform4uiv(this.addr,e),si(t,e)}}function sF(s,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(s.uniform1i(this.addr,r),i[0]=r);let l;this.type===s.SAMPLER_2D_SHADOW?(V_.compareFunction=t.isReversedDepthBuffer()?Fv:Pv,l=V_):l=qT,t.setTexture2D(e||l,r)}function oF(s,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(s.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||KT,r)}function lF(s,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(s.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||QT,r)}function uF(s,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(s.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||ZT,r)}function cF(s){switch(s){case 5126:return WP;case 35664:return jP;case 35665:return YP;case 35666:return qP;case 35674:return ZP;case 35675:return KP;case 35676:return QP;case 5124:case 35670:return JP;case 35667:case 35671:return $P;case 35668:case 35672:return eF;case 35669:case 35673:return tF;case 5125:return nF;case 36294:return iF;case 36295:return aF;case 36296:return rF;case 35678:case 36198:case 36298:case 36306:case 35682:return sF;case 35679:case 36299:case 36307:return oF;case 35680:case 36300:case 36308:case 36293:return lF;case 36289:case 36303:case 36311:case 36292:return uF}}function fF(s,e){s.uniform1fv(this.addr,e)}function dF(s,e){const t=Bu(e,this.size,2);s.uniform2fv(this.addr,t)}function hF(s,e){const t=Bu(e,this.size,3);s.uniform3fv(this.addr,t)}function pF(s,e){const t=Bu(e,this.size,4);s.uniform4fv(this.addr,t)}function mF(s,e){const t=Bu(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function gF(s,e){const t=Bu(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function _F(s,e){const t=Bu(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function vF(s,e){s.uniform1iv(this.addr,e)}function xF(s,e){s.uniform2iv(this.addr,e)}function yF(s,e){s.uniform3iv(this.addr,e)}function SF(s,e){s.uniform4iv(this.addr,e)}function bF(s,e){s.uniform1uiv(this.addr,e)}function MF(s,e){s.uniform2uiv(this.addr,e)}function EF(s,e){s.uniform3uiv(this.addr,e)}function TF(s,e){s.uniform4uiv(this.addr,e)}function AF(s,e,t){const i=this.cache,r=e.length,l=yp(t,r);ri(i,l)||(s.uniform1iv(this.addr,l),si(i,l));let c;this.type===s.SAMPLER_2D_SHADOW?c=V_:c=qT;for(let f=0;f!==r;++f)t.setTexture2D(e[f]||c,l[f])}function CF(s,e,t){const i=this.cache,r=e.length,l=yp(t,r);ri(i,l)||(s.uniform1iv(this.addr,l),si(i,l));for(let c=0;c!==r;++c)t.setTexture3D(e[c]||KT,l[c])}function RF(s,e,t){const i=this.cache,r=e.length,l=yp(t,r);ri(i,l)||(s.uniform1iv(this.addr,l),si(i,l));for(let c=0;c!==r;++c)t.setTextureCube(e[c]||QT,l[c])}function wF(s,e,t){const i=this.cache,r=e.length,l=yp(t,r);ri(i,l)||(s.uniform1iv(this.addr,l),si(i,l));for(let c=0;c!==r;++c)t.setTexture2DArray(e[c]||ZT,l[c])}function DF(s){switch(s){case 5126:return fF;case 35664:return dF;case 35665:return hF;case 35666:return pF;case 35674:return mF;case 35675:return gF;case 35676:return _F;case 5124:case 35670:return vF;case 35667:case 35671:return xF;case 35668:case 35672:return yF;case 35669:case 35673:return SF;case 5125:return bF;case 36294:return MF;case 36295:return EF;case 36296:return TF;case 35678:case 36198:case 36298:case 36306:case 35682:return AF;case 35679:case 36299:case 36307:return CF;case 35680:case 36300:case 36308:case 36293:return RF;case 36289:case 36303:case 36311:case 36292:return wF}}class NF{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=cF(t.type)}}class UF{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=DF(t.type)}}class LF{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let l=0,c=r.length;l!==c;++l){const f=r[l];f.setValue(e,t[f.id],i)}}}const y0=/(\w+)(\])?(\[|\.)?/g;function vM(s,e){s.seq.push(e),s.map[e.id]=e}function OF(s,e,t){const i=s.name,r=i.length;for(y0.lastIndex=0;;){const l=y0.exec(i),c=y0.lastIndex;let f=l[1];const d=l[2]==="]",h=l[3];if(d&&(f=f|0),h===void 0||h==="["&&c+2===r){vM(t,h===void 0?new NF(f,s,e):new UF(f,s,e));break}else{let _=t.map[f];_===void 0&&(_=new LF(f),vM(t,_)),t=_}}}class zh{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<i;++c){const f=e.getActiveUniform(t,c),d=e.getUniformLocation(t,f.name);OF(f,d,this)}const r=[],l=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(c):l.push(c);r.length>0&&(this.seq=r.concat(l))}setValue(e,t,i,r){const l=this.map[t];l!==void 0&&l.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let l=0,c=t.length;l!==c;++l){const f=t[l],d=i[f.id];d.needsUpdate!==!1&&f.setValue(e,d.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,l=e.length;r!==l;++r){const c=e[r];c.id in t&&i.push(c)}return i}}function xM(s,e,t){const i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}const PF=37297;let FF=0;function IF(s,e){const t=s.split(`
`),i=[],r=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=r;c<l;c++){const f=c+1;i.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return i.join(`
`)}const yM=new Ut;function zF(s){Kt._getMatrix(yM,Kt.workingColorSpace,s);const e=`mat3( ${yM.elements.map(t=>t.toFixed(4))} )`;switch(Kt.getTransfer(s)){case Qh:return[e,"LinearTransferOETF"];case on:return[e,"sRGBTransferOETF"];default:return Et("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function SM(s,e,t){const i=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(i&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return t.toUpperCase()+`

`+l+`

`+IF(s.getShaderSource(e),f)}else return l}function BF(s,e){const t=zF(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const HF={[xT]:"Linear",[yT]:"Reinhard",[ST]:"Cineon",[bT]:"ACESFilmic",[ET]:"AgX",[TT]:"Neutral",[MT]:"Custom"};function GF(s,e){const t=HF[e];return t===void 0?(Et("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const mh=new he;function VF(){Kt.getLuminanceCoefficients(mh);const s=mh.x.toFixed(4),e=mh.y.toFixed(4),t=mh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kF(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vc).join(`
`)}function XF(s){const e=[];for(const t in s){const i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function WF(s,e){const t={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const l=s.getActiveAttrib(e,r),c=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[c]={type:l.type,location:s.getAttribLocation(e,c),locationSize:f}}return t}function Vc(s){return s!==""}function bM(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function MM(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jF=/^[ \t]*#include +<([\w\d./]+)>/gm;function k_(s){return s.replace(jF,qF)}const YF=new Map;function qF(s,e){let t=Ot[e];if(t===void 0){const i=YF.get(e);if(i!==void 0)t=Ot[i],Et('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return k_(t)}const ZF=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function EM(s){return s.replace(ZF,KF)}function KF(s,e,t,i){let r="";for(let l=parseInt(e);l<parseInt(t);l++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return r}function TM(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const QF={[Lh]:"SHADOWMAP_TYPE_PCF",[Gc]:"SHADOWMAP_TYPE_VSM"};function JF(s){return QF[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const $F={[sl]:"ENVMAP_TYPE_CUBE",[Tu]:"ENVMAP_TYPE_CUBE",[_p]:"ENVMAP_TYPE_CUBE_UV"};function e4(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":$F[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const t4={[Tu]:"ENVMAP_MODE_REFRACTION"};function n4(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":t4[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const i4={[vT]:"ENVMAP_BLENDING_MULTIPLY",[jN]:"ENVMAP_BLENDING_MIX",[YN]:"ENVMAP_BLENDING_ADD"};function a4(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":i4[s.combine]||"ENVMAP_BLENDING_NONE"}function r4(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function s4(s,e,t,i){const r=s.getContext(),l=t.defines;let c=t.vertexShader,f=t.fragmentShader;const d=JF(t),h=e4(t),m=n4(t),_=a4(t),v=r4(t),x=kF(t),b=XF(l),M=r.createProgram();let y,S,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Vc).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Vc).join(`
`),S.length>0&&(S+=`
`)):(y=[TM(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vc).join(`
`),S=[TM(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",t.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mr?"#define TONE_MAPPING":"",t.toneMapping!==Mr?Ot.tonemapping_pars_fragment:"",t.toneMapping!==Mr?GF("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ot.colorspace_pars_fragment,BF("linearToOutputTexel",t.outputColorSpace),VF(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vc).join(`
`)),c=k_(c),c=bM(c,t),c=MM(c,t),f=k_(f),f=bM(f,t),f=MM(f,t),c=EM(c),f=EM(f),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,y=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",t.glslVersion===Gb?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Gb?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const N=A+y+c,R=A+S+f,L=xM(r,r.VERTEX_SHADER,N),P=xM(r,r.FRAGMENT_SHADER,R);r.attachShader(M,L),r.attachShader(M,P),t.index0AttributeName!==void 0?r.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function D(H){if(s.debug.checkShaderErrors){const k=r.getProgramInfoLog(M)||"",J=r.getShaderInfoLog(L)||"",ee=r.getShaderInfoLog(P)||"",$=k.trim(),F=J.trim(),z=ee.trim();let ie=!0,de=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(ie=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(r,M,L,P);else{const G=SM(r,L,"vertex"),I=SM(r,P,"fragment");en("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+$+`
`+G+`
`+I)}else $!==""?Et("WebGLProgram: Program Info Log:",$):(F===""||z==="")&&(de=!1);de&&(H.diagnostics={runnable:ie,programLog:$,vertexShader:{log:F,prefix:y},fragmentShader:{log:z,prefix:S}})}r.deleteShader(L),r.deleteShader(P),T=new zh(r,M),w=WF(r,M)}let T;this.getUniforms=function(){return T===void 0&&D(this),T};let w;this.getAttributes=function(){return w===void 0&&D(this),w};let q=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return q===!1&&(q=r.getProgramParameter(M,PF)),q},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=FF++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=L,this.fragmentShader=P,this}let o4=0;class l4{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),l=this._getShaderStage(i),c=this._getShaderCacheForMaterial(e);return c.has(r)===!1&&(c.add(r),r.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new u4(e),t.set(e,i)),i}}class u4{constructor(e){this.id=o4++,this.code=e,this.usedTimes=0}}function c4(s,e,t,i,r,l){const c=new FT,f=new l4,d=new Set,h=[],m=new Map,_=i.logarithmicDepthBuffer;let v=i.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return d.add(T),T===0?"uv":`uv${T}`}function M(T,w,q,H,k){const J=H.fog,ee=k.geometry,$=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?H.environment:null,F=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,z=e.get(T.envMap||$,F),ie=z&&z.mapping===_p?z.image.height:null,de=x[T.type];T.precision!==null&&(v=i.getMaxPrecision(T.precision),v!==T.precision&&Et("WebGLProgram.getParameters:",T.precision,"not supported, using",v,"instead."));const G=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,I=G!==void 0?G.length:0;let W=0;ee.morphAttributes.position!==void 0&&(W=1),ee.morphAttributes.normal!==void 0&&(W=2),ee.morphAttributes.color!==void 0&&(W=3);let le,ye,we,te;if(de){const ke=gr[de];le=ke.vertexShader,ye=ke.fragmentShader}else le=T.vertexShader,ye=T.fragmentShader,f.update(T),we=f.getVertexShaderID(T),te=f.getFragmentShaderID(T);const ge=s.getRenderTarget(),Me=s.state.buffers.depth.getReversed(),Oe=k.isInstancedMesh===!0,Je=k.isBatchedMesh===!0,Ze=!!T.map,Lt=!!T.matcap,qe=!!z,st=!!T.aoMap,vt=!!T.lightMap,ot=!!T.bumpMap,ue=!!T.normalMap,Y=!!T.displacementMap,Zt=!!T.emissiveMap,Tt=!!T.metalnessMap,dt=!!T.roughnessMap,je=T.anisotropy>0,B=T.clearcoat>0,C=T.dispersion>0,K=T.iridescence>0,ve=T.sheen>0,xe=T.transmission>0,pe=je&&!!T.anisotropyMap,Ve=B&&!!T.clearcoatMap,De=B&&!!T.clearcoatNormalMap,at=B&&!!T.clearcoatRoughnessMap,Ye=K&&!!T.iridescenceMap,Ce=K&&!!T.iridescenceThicknessMap,Ae=ve&&!!T.sheenColorMap,Ge=ve&&!!T.sheenRoughnessMap,Ie=!!T.specularMap,ze=!!T.specularColorMap,gt=!!T.specularIntensityMap,X=xe&&!!T.transmissionMap,Ne=xe&&!!T.thicknessMap,Re=!!T.gradientMap,Pe=!!T.alphaMap,Te=T.alphaTest>0,_e=!!T.alphaHash,We=!!T.extensions;let ut=Mr;T.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(ut=s.toneMapping);const Xt={shaderID:de,shaderType:T.type,shaderName:T.name,vertexShader:le,fragmentShader:ye,defines:T.defines,customVertexShaderID:we,customFragmentShaderID:te,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:v,batching:Je,batchingColor:Je&&k._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&k.instanceColor!==null,instancingMorph:Oe&&k.morphTexture!==null,outputColorSpace:ge===null?s.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:Cu,alphaToCoverage:!!T.alphaToCoverage,map:Ze,matcap:Lt,envMap:qe,envMapMode:qe&&z.mapping,envMapCubeUVHeight:ie,aoMap:st,lightMap:vt,bumpMap:ot,normalMap:ue,displacementMap:Y,emissiveMap:Zt,normalMapObjectSpace:ue&&T.normalMapType===QN,normalMapTangentSpace:ue&&T.normalMapType===KN,metalnessMap:Tt,roughnessMap:dt,anisotropy:je,anisotropyMap:pe,clearcoat:B,clearcoatMap:Ve,clearcoatNormalMap:De,clearcoatRoughnessMap:at,dispersion:C,iridescence:K,iridescenceMap:Ye,iridescenceThicknessMap:Ce,sheen:ve,sheenColorMap:Ae,sheenRoughnessMap:Ge,specularMap:Ie,specularColorMap:ze,specularIntensityMap:gt,transmission:xe,transmissionMap:X,thicknessMap:Ne,gradientMap:Re,opaque:T.transparent===!1&&T.blending===mu&&T.alphaToCoverage===!1,alphaMap:Pe,alphaTest:Te,alphaHash:_e,combine:T.combine,mapUv:Ze&&b(T.map.channel),aoMapUv:st&&b(T.aoMap.channel),lightMapUv:vt&&b(T.lightMap.channel),bumpMapUv:ot&&b(T.bumpMap.channel),normalMapUv:ue&&b(T.normalMap.channel),displacementMapUv:Y&&b(T.displacementMap.channel),emissiveMapUv:Zt&&b(T.emissiveMap.channel),metalnessMapUv:Tt&&b(T.metalnessMap.channel),roughnessMapUv:dt&&b(T.roughnessMap.channel),anisotropyMapUv:pe&&b(T.anisotropyMap.channel),clearcoatMapUv:Ve&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:De&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Ye&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&b(T.sheenRoughnessMap.channel),specularMapUv:Ie&&b(T.specularMap.channel),specularColorMapUv:ze&&b(T.specularColorMap.channel),specularIntensityMapUv:gt&&b(T.specularIntensityMap.channel),transmissionMapUv:X&&b(T.transmissionMap.channel),thicknessMapUv:Ne&&b(T.thicknessMap.channel),alphaMapUv:Pe&&b(T.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(ue||je),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!ee.attributes.uv&&(Ze||Pe),fog:!!J,useFog:T.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||ee.attributes.normal===void 0&&ue===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Me,skinning:k.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:W,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&q.length>0,shadowMapType:s.shadowMap.type,toneMapping:ut,decodeVideoTexture:Ze&&T.map.isVideoTexture===!0&&Kt.getTransfer(T.map.colorSpace)===on,decodeVideoTextureEmissive:Zt&&T.emissiveMap.isVideoTexture===!0&&Kt.getTransfer(T.emissiveMap.colorSpace)===on,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===is,flipSided:T.side===Ji,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:We&&T.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(We&&T.extensions.multiDraw===!0||Je)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Xt.vertexUv1s=d.has(1),Xt.vertexUv2s=d.has(2),Xt.vertexUv3s=d.has(3),d.clear(),Xt}function y(T){const w=[];if(T.shaderID?w.push(T.shaderID):(w.push(T.customVertexShaderID),w.push(T.customFragmentShaderID)),T.defines!==void 0)for(const q in T.defines)w.push(q),w.push(T.defines[q]);return T.isRawShaderMaterial===!1&&(S(w,T),A(w,T),w.push(s.outputColorSpace)),w.push(T.customProgramCacheKey),w.join()}function S(T,w){T.push(w.precision),T.push(w.outputColorSpace),T.push(w.envMapMode),T.push(w.envMapCubeUVHeight),T.push(w.mapUv),T.push(w.alphaMapUv),T.push(w.lightMapUv),T.push(w.aoMapUv),T.push(w.bumpMapUv),T.push(w.normalMapUv),T.push(w.displacementMapUv),T.push(w.emissiveMapUv),T.push(w.metalnessMapUv),T.push(w.roughnessMapUv),T.push(w.anisotropyMapUv),T.push(w.clearcoatMapUv),T.push(w.clearcoatNormalMapUv),T.push(w.clearcoatRoughnessMapUv),T.push(w.iridescenceMapUv),T.push(w.iridescenceThicknessMapUv),T.push(w.sheenColorMapUv),T.push(w.sheenRoughnessMapUv),T.push(w.specularMapUv),T.push(w.specularColorMapUv),T.push(w.specularIntensityMapUv),T.push(w.transmissionMapUv),T.push(w.thicknessMapUv),T.push(w.combine),T.push(w.fogExp2),T.push(w.sizeAttenuation),T.push(w.morphTargetsCount),T.push(w.morphAttributeCount),T.push(w.numDirLights),T.push(w.numPointLights),T.push(w.numSpotLights),T.push(w.numSpotLightMaps),T.push(w.numHemiLights),T.push(w.numRectAreaLights),T.push(w.numDirLightShadows),T.push(w.numPointLightShadows),T.push(w.numSpotLightShadows),T.push(w.numSpotLightShadowsWithMaps),T.push(w.numLightProbes),T.push(w.shadowMapType),T.push(w.toneMapping),T.push(w.numClippingPlanes),T.push(w.numClipIntersection),T.push(w.depthPacking)}function A(T,w){c.disableAll(),w.instancing&&c.enable(0),w.instancingColor&&c.enable(1),w.instancingMorph&&c.enable(2),w.matcap&&c.enable(3),w.envMap&&c.enable(4),w.normalMapObjectSpace&&c.enable(5),w.normalMapTangentSpace&&c.enable(6),w.clearcoat&&c.enable(7),w.iridescence&&c.enable(8),w.alphaTest&&c.enable(9),w.vertexColors&&c.enable(10),w.vertexAlphas&&c.enable(11),w.vertexUv1s&&c.enable(12),w.vertexUv2s&&c.enable(13),w.vertexUv3s&&c.enable(14),w.vertexTangents&&c.enable(15),w.anisotropy&&c.enable(16),w.alphaHash&&c.enable(17),w.batching&&c.enable(18),w.dispersion&&c.enable(19),w.batchingColor&&c.enable(20),w.gradientMap&&c.enable(21),T.push(c.mask),c.disableAll(),w.fog&&c.enable(0),w.useFog&&c.enable(1),w.flatShading&&c.enable(2),w.logarithmicDepthBuffer&&c.enable(3),w.reversedDepthBuffer&&c.enable(4),w.skinning&&c.enable(5),w.morphTargets&&c.enable(6),w.morphNormals&&c.enable(7),w.morphColors&&c.enable(8),w.premultipliedAlpha&&c.enable(9),w.shadowMapEnabled&&c.enable(10),w.doubleSided&&c.enable(11),w.flipSided&&c.enable(12),w.useDepthPacking&&c.enable(13),w.dithering&&c.enable(14),w.transmission&&c.enable(15),w.sheen&&c.enable(16),w.opaque&&c.enable(17),w.pointsUvs&&c.enable(18),w.decodeVideoTexture&&c.enable(19),w.decodeVideoTextureEmissive&&c.enable(20),w.alphaToCoverage&&c.enable(21),T.push(c.mask)}function N(T){const w=x[T.type];let q;if(w){const H=gr[w];q=FU.clone(H.uniforms)}else q=T.uniforms;return q}function R(T,w){let q=m.get(w);return q!==void 0?++q.usedTimes:(q=new s4(s,w,T,r),h.push(q),m.set(w,q)),q}function L(T){if(--T.usedTimes===0){const w=h.indexOf(T);h[w]=h[h.length-1],h.pop(),m.delete(T.cacheKey),T.destroy()}}function P(T){f.remove(T)}function D(){f.dispose()}return{getParameters:M,getProgramCacheKey:y,getUniforms:N,acquireProgram:R,releaseProgram:L,releaseShaderCache:P,programs:h,dispose:D}}function f4(){let s=new WeakMap;function e(c){return s.has(c)}function t(c){let f=s.get(c);return f===void 0&&(f={},s.set(c,f)),f}function i(c){s.delete(c)}function r(c,f,d){s.get(c)[f]=d}function l(){s=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:l}}function d4(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function AM(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function CM(){const s=[];let e=0;const t=[],i=[],r=[];function l(){e=0,t.length=0,i.length=0,r.length=0}function c(v){let x=0;return v.isInstancedMesh&&(x+=2),v.isSkinnedMesh&&(x+=1),x}function f(v,x,b,M,y,S){let A=s[e];return A===void 0?(A={id:v.id,object:v,geometry:x,material:b,materialVariant:c(v),groupOrder:M,renderOrder:v.renderOrder,z:y,group:S},s[e]=A):(A.id=v.id,A.object=v,A.geometry=x,A.material=b,A.materialVariant=c(v),A.groupOrder=M,A.renderOrder=v.renderOrder,A.z=y,A.group=S),e++,A}function d(v,x,b,M,y,S){const A=f(v,x,b,M,y,S);b.transmission>0?i.push(A):b.transparent===!0?r.push(A):t.push(A)}function h(v,x,b,M,y,S){const A=f(v,x,b,M,y,S);b.transmission>0?i.unshift(A):b.transparent===!0?r.unshift(A):t.unshift(A)}function m(v,x){t.length>1&&t.sort(v||d4),i.length>1&&i.sort(x||AM),r.length>1&&r.sort(x||AM)}function _(){for(let v=e,x=s.length;v<x;v++){const b=s[v];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:t,transmissive:i,transparent:r,init:l,push:d,unshift:h,finish:_,sort:m}}function h4(){let s=new WeakMap;function e(i,r){const l=s.get(i);let c;return l===void 0?(c=new CM,s.set(i,[c])):r>=l.length?(c=new CM,l.push(c)):c=l[r],c}function t(){s=new WeakMap}return{get:e,dispose:t}}function p4(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new he,color:new mn};break;case"SpotLight":t={position:new he,direction:new he,color:new mn,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new he,color:new mn,distance:0,decay:0};break;case"HemisphereLight":t={direction:new he,skyColor:new mn,groundColor:new mn};break;case"RectAreaLight":t={color:new mn,position:new he,halfWidth:new he,halfHeight:new he};break}return s[e.id]=t,t}}}function m4(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let g4=0;function _4(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function v4(s){const e=new p4,t=m4(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new he);const r=new he,l=new ei,c=new ei;function f(h){let m=0,_=0,v=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let x=0,b=0,M=0,y=0,S=0,A=0,N=0,R=0,L=0,P=0,D=0;h.sort(_4);for(let w=0,q=h.length;w<q;w++){const H=h[w],k=H.color,J=H.intensity,ee=H.distance;let $=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===Au?$=H.shadow.map.texture:$=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)m+=k.r*J,_+=k.g*J,v+=k.b*J;else if(H.isLightProbe){for(let F=0;F<9;F++)i.probe[F].addScaledVector(H.sh.coefficients[F],J);D++}else if(H.isDirectionalLight){const F=e.get(H);if(F.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const z=H.shadow,ie=t.get(H);ie.shadowIntensity=z.intensity,ie.shadowBias=z.bias,ie.shadowNormalBias=z.normalBias,ie.shadowRadius=z.radius,ie.shadowMapSize=z.mapSize,i.directionalShadow[x]=ie,i.directionalShadowMap[x]=$,i.directionalShadowMatrix[x]=H.shadow.matrix,A++}i.directional[x]=F,x++}else if(H.isSpotLight){const F=e.get(H);F.position.setFromMatrixPosition(H.matrixWorld),F.color.copy(k).multiplyScalar(J),F.distance=ee,F.coneCos=Math.cos(H.angle),F.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),F.decay=H.decay,i.spot[M]=F;const z=H.shadow;if(H.map&&(i.spotLightMap[L]=H.map,L++,z.updateMatrices(H),H.castShadow&&P++),i.spotLightMatrix[M]=z.matrix,H.castShadow){const ie=t.get(H);ie.shadowIntensity=z.intensity,ie.shadowBias=z.bias,ie.shadowNormalBias=z.normalBias,ie.shadowRadius=z.radius,ie.shadowMapSize=z.mapSize,i.spotShadow[M]=ie,i.spotShadowMap[M]=$,R++}M++}else if(H.isRectAreaLight){const F=e.get(H);F.color.copy(k).multiplyScalar(J),F.halfWidth.set(H.width*.5,0,0),F.halfHeight.set(0,H.height*.5,0),i.rectArea[y]=F,y++}else if(H.isPointLight){const F=e.get(H);if(F.color.copy(H.color).multiplyScalar(H.intensity),F.distance=H.distance,F.decay=H.decay,H.castShadow){const z=H.shadow,ie=t.get(H);ie.shadowIntensity=z.intensity,ie.shadowBias=z.bias,ie.shadowNormalBias=z.normalBias,ie.shadowRadius=z.radius,ie.shadowMapSize=z.mapSize,ie.shadowCameraNear=z.camera.near,ie.shadowCameraFar=z.camera.far,i.pointShadow[b]=ie,i.pointShadowMap[b]=$,i.pointShadowMatrix[b]=H.shadow.matrix,N++}i.point[b]=F,b++}else if(H.isHemisphereLight){const F=e.get(H);F.skyColor.copy(H.color).multiplyScalar(J),F.groundColor.copy(H.groundColor).multiplyScalar(J),i.hemi[S]=F,S++}}y>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Xe.LTC_FLOAT_1,i.rectAreaLTC2=Xe.LTC_FLOAT_2):(i.rectAreaLTC1=Xe.LTC_HALF_1,i.rectAreaLTC2=Xe.LTC_HALF_2)),i.ambient[0]=m,i.ambient[1]=_,i.ambient[2]=v;const T=i.hash;(T.directionalLength!==x||T.pointLength!==b||T.spotLength!==M||T.rectAreaLength!==y||T.hemiLength!==S||T.numDirectionalShadows!==A||T.numPointShadows!==N||T.numSpotShadows!==R||T.numSpotMaps!==L||T.numLightProbes!==D)&&(i.directional.length=x,i.spot.length=M,i.rectArea.length=y,i.point.length=b,i.hemi.length=S,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=N,i.pointShadowMap.length=N,i.spotShadow.length=R,i.spotShadowMap.length=R,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=N,i.spotLightMatrix.length=R+L-P,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=D,T.directionalLength=x,T.pointLength=b,T.spotLength=M,T.rectAreaLength=y,T.hemiLength=S,T.numDirectionalShadows=A,T.numPointShadows=N,T.numSpotShadows=R,T.numSpotMaps=L,T.numLightProbes=D,i.version=g4++)}function d(h,m){let _=0,v=0,x=0,b=0,M=0;const y=m.matrixWorldInverse;for(let S=0,A=h.length;S<A;S++){const N=h[S];if(N.isDirectionalLight){const R=i.directional[_];R.direction.setFromMatrixPosition(N.matrixWorld),r.setFromMatrixPosition(N.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(y),_++}else if(N.isSpotLight){const R=i.spot[x];R.position.setFromMatrixPosition(N.matrixWorld),R.position.applyMatrix4(y),R.direction.setFromMatrixPosition(N.matrixWorld),r.setFromMatrixPosition(N.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(y),x++}else if(N.isRectAreaLight){const R=i.rectArea[b];R.position.setFromMatrixPosition(N.matrixWorld),R.position.applyMatrix4(y),c.identity(),l.copy(N.matrixWorld),l.premultiply(y),c.extractRotation(l),R.halfWidth.set(N.width*.5,0,0),R.halfHeight.set(0,N.height*.5,0),R.halfWidth.applyMatrix4(c),R.halfHeight.applyMatrix4(c),b++}else if(N.isPointLight){const R=i.point[v];R.position.setFromMatrixPosition(N.matrixWorld),R.position.applyMatrix4(y),v++}else if(N.isHemisphereLight){const R=i.hemi[M];R.direction.setFromMatrixPosition(N.matrixWorld),R.direction.transformDirection(y),M++}}}return{setup:f,setupView:d,state:i}}function RM(s){const e=new v4(s),t=[],i=[];function r(m){h.camera=m,t.length=0,i.length=0}function l(m){t.push(m)}function c(m){i.push(m)}function f(){e.setup(t)}function d(m){e.setupView(t,m)}const h={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:h,setupLights:f,setupLightsView:d,pushLight:l,pushShadow:c}}function x4(s){let e=new WeakMap;function t(r,l=0){const c=e.get(r);let f;return c===void 0?(f=new RM(s),e.set(r,[f])):l>=c.length?(f=new RM(s),c.push(f)):f=c[l],f}function i(){e=new WeakMap}return{get:t,dispose:i}}const y4=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,S4=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,b4=[new he(1,0,0),new he(-1,0,0),new he(0,1,0),new he(0,-1,0),new he(0,0,1),new he(0,0,-1)],M4=[new he(0,-1,0),new he(0,-1,0),new he(0,0,1),new he(0,0,-1),new he(0,-1,0),new he(0,-1,0)],wM=new ei,Fc=new he,S0=new he;function E4(s,e,t){let i=new GT;const r=new Yt,l=new Yt,c=new Gn,f=new HU,d=new GU,h={},m=t.maxTextureSize,_={[uo]:Ji,[Ji]:uo,[is]:is},v=new or({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Yt},radius:{value:4}},vertexShader:y4,fragmentShader:S4}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const b=new xs;b.setAttribute("position",new Tr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Rr(b,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lh;let S=this.type;this.render=function(P,D,T){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||P.length===0)return;this.type===CN&&(Et("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Lh);const w=s.getRenderTarget(),q=s.getActiveCubeFace(),H=s.getActiveMipmapLevel(),k=s.state;k.setBlending(os),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const J=S!==this.type;J&&D.traverse(function(ee){ee.material&&(Array.isArray(ee.material)?ee.material.forEach($=>$.needsUpdate=!0):ee.material.needsUpdate=!0)});for(let ee=0,$=P.length;ee<$;ee++){const F=P[ee],z=F.shadow;if(z===void 0){Et("WebGLShadowMap:",F,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const ie=z.getFrameExtents();r.multiply(ie),l.copy(z.mapSize),(r.x>m||r.y>m)&&(r.x>m&&(l.x=Math.floor(m/ie.x),r.x=l.x*ie.x,z.mapSize.x=l.x),r.y>m&&(l.y=Math.floor(m/ie.y),r.y=l.y*ie.y,z.mapSize.y=l.y));const de=s.state.buffers.depth.getReversed();if(z.camera._reversedDepth=de,z.map===null||J===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Gc){if(F.isPointLight){Et("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Er(r.x,r.y,{format:Au,type:hs,minFilter:$n,magFilter:$n,generateMipmaps:!1}),z.map.texture.name=F.name+".shadowMap",z.map.depthTexture=new vf(r.x,r.y,xr),z.map.depthTexture.name=F.name+".shadowMapDepth",z.map.depthTexture.format=ps,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=_i,z.map.depthTexture.magFilter=_i}else F.isPointLight?(z.map=new YT(r.x),z.map.depthTexture=new OU(r.x,Cr)):(z.map=new Er(r.x,r.y),z.map.depthTexture=new vf(r.x,r.y,Cr)),z.map.depthTexture.name=F.name+".shadowMap",z.map.depthTexture.format=ps,this.type===Lh?(z.map.depthTexture.compareFunction=de?Fv:Pv,z.map.depthTexture.minFilter=$n,z.map.depthTexture.magFilter=$n):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=_i,z.map.depthTexture.magFilter=_i);z.camera.updateProjectionMatrix()}const G=z.map.isWebGLCubeRenderTarget?6:1;for(let I=0;I<G;I++){if(z.map.isWebGLCubeRenderTarget)s.setRenderTarget(z.map,I),s.clear();else{I===0&&(s.setRenderTarget(z.map),s.clear());const W=z.getViewport(I);c.set(l.x*W.x,l.y*W.y,l.x*W.z,l.y*W.w),k.viewport(c)}if(F.isPointLight){const W=z.camera,le=z.matrix,ye=F.distance||W.far;ye!==W.far&&(W.far=ye,W.updateProjectionMatrix()),Fc.setFromMatrixPosition(F.matrixWorld),W.position.copy(Fc),S0.copy(W.position),S0.add(b4[I]),W.up.copy(M4[I]),W.lookAt(S0),W.updateMatrixWorld(),le.makeTranslation(-Fc.x,-Fc.y,-Fc.z),wM.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),z._frustum.setFromProjectionMatrix(wM,W.coordinateSystem,W.reversedDepth)}else z.updateMatrices(F);i=z.getFrustum(),R(D,T,z.camera,F,this.type)}z.isPointLightShadow!==!0&&this.type===Gc&&A(z,T),z.needsUpdate=!1}S=this.type,y.needsUpdate=!1,s.setRenderTarget(w,q,H)};function A(P,D){const T=e.update(M);v.defines.VSM_SAMPLES!==P.blurSamples&&(v.defines.VSM_SAMPLES=P.blurSamples,x.defines.VSM_SAMPLES=P.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Er(r.x,r.y,{format:Au,type:hs})),v.uniforms.shadow_pass.value=P.map.depthTexture,v.uniforms.resolution.value=P.mapSize,v.uniforms.radius.value=P.radius,s.setRenderTarget(P.mapPass),s.clear(),s.renderBufferDirect(D,null,T,v,M,null),x.uniforms.shadow_pass.value=P.mapPass.texture,x.uniforms.resolution.value=P.mapSize,x.uniforms.radius.value=P.radius,s.setRenderTarget(P.map),s.clear(),s.renderBufferDirect(D,null,T,x,M,null)}function N(P,D,T,w){let q=null;const H=T.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(H!==void 0)q=H;else if(q=T.isPointLight===!0?d:f,s.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const k=q.uuid,J=D.uuid;let ee=h[k];ee===void 0&&(ee={},h[k]=ee);let $=ee[J];$===void 0&&($=q.clone(),ee[J]=$,D.addEventListener("dispose",L)),q=$}if(q.visible=D.visible,q.wireframe=D.wireframe,w===Gc?q.side=D.shadowSide!==null?D.shadowSide:D.side:q.side=D.shadowSide!==null?D.shadowSide:_[D.side],q.alphaMap=D.alphaMap,q.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,q.map=D.map,q.clipShadows=D.clipShadows,q.clippingPlanes=D.clippingPlanes,q.clipIntersection=D.clipIntersection,q.displacementMap=D.displacementMap,q.displacementScale=D.displacementScale,q.displacementBias=D.displacementBias,q.wireframeLinewidth=D.wireframeLinewidth,q.linewidth=D.linewidth,T.isPointLight===!0&&q.isMeshDistanceMaterial===!0){const k=s.properties.get(q);k.light=T}return q}function R(P,D,T,w,q){if(P.visible===!1)return;if(P.layers.test(D.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&q===Gc)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,P.matrixWorld);const J=e.update(P),ee=P.material;if(Array.isArray(ee)){const $=J.groups;for(let F=0,z=$.length;F<z;F++){const ie=$[F],de=ee[ie.materialIndex];if(de&&de.visible){const G=N(P,de,w,q);P.onBeforeShadow(s,P,D,T,J,G,ie),s.renderBufferDirect(T,null,J,G,P,ie),P.onAfterShadow(s,P,D,T,J,G,ie)}}}else if(ee.visible){const $=N(P,ee,w,q);P.onBeforeShadow(s,P,D,T,J,$,null),s.renderBufferDirect(T,null,J,$,P,null),P.onAfterShadow(s,P,D,T,J,$,null)}}const k=P.children;for(let J=0,ee=k.length;J<ee;J++)R(k[J],D,T,w,q)}function L(P){P.target.removeEventListener("dispose",L);for(const T in h){const w=h[T],q=P.target.uuid;q in w&&(w[q].dispose(),delete w[q])}}}function T4(s,e){function t(){let X=!1;const Ne=new Gn;let Re=null;const Pe=new Gn(0,0,0,0);return{setMask:function(Te){Re!==Te&&!X&&(s.colorMask(Te,Te,Te,Te),Re=Te)},setLocked:function(Te){X=Te},setClear:function(Te,_e,We,ut,Xt){Xt===!0&&(Te*=ut,_e*=ut,We*=ut),Ne.set(Te,_e,We,ut),Pe.equals(Ne)===!1&&(s.clearColor(Te,_e,We,ut),Pe.copy(Ne))},reset:function(){X=!1,Re=null,Pe.set(-1,0,0,0)}}}function i(){let X=!1,Ne=!1,Re=null,Pe=null,Te=null;return{setReversed:function(_e){if(Ne!==_e){const We=e.get("EXT_clip_control");_e?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT),Ne=_e;const ut=Te;Te=null,this.setClear(ut)}},getReversed:function(){return Ne},setTest:function(_e){_e?ge(s.DEPTH_TEST):Me(s.DEPTH_TEST)},setMask:function(_e){Re!==_e&&!X&&(s.depthMask(_e),Re=_e)},setFunc:function(_e){if(Ne&&(_e=oU[_e]),Pe!==_e){switch(_e){case e_:s.depthFunc(s.NEVER);break;case t_:s.depthFunc(s.ALWAYS);break;case n_:s.depthFunc(s.LESS);break;case Eu:s.depthFunc(s.LEQUAL);break;case i_:s.depthFunc(s.EQUAL);break;case a_:s.depthFunc(s.GEQUAL);break;case r_:s.depthFunc(s.GREATER);break;case s_:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Pe=_e}},setLocked:function(_e){X=_e},setClear:function(_e){Te!==_e&&(Te=_e,Ne&&(_e=1-_e),s.clearDepth(_e))},reset:function(){X=!1,Re=null,Pe=null,Te=null,Ne=!1}}}function r(){let X=!1,Ne=null,Re=null,Pe=null,Te=null,_e=null,We=null,ut=null,Xt=null;return{setTest:function(ke){X||(ke?ge(s.STENCIL_TEST):Me(s.STENCIL_TEST))},setMask:function(ke){Ne!==ke&&!X&&(s.stencilMask(ke),Ne=ke)},setFunc:function(ke,et,At){(Re!==ke||Pe!==et||Te!==At)&&(s.stencilFunc(ke,et,At),Re=ke,Pe=et,Te=At)},setOp:function(ke,et,At){(_e!==ke||We!==et||ut!==At)&&(s.stencilOp(ke,et,At),_e=ke,We=et,ut=At)},setLocked:function(ke){X=ke},setClear:function(ke){Xt!==ke&&(s.clearStencil(ke),Xt=ke)},reset:function(){X=!1,Ne=null,Re=null,Pe=null,Te=null,_e=null,We=null,ut=null,Xt=null}}}const l=new t,c=new i,f=new r,d=new WeakMap,h=new WeakMap;let m={},_={},v=new WeakMap,x=[],b=null,M=!1,y=null,S=null,A=null,N=null,R=null,L=null,P=null,D=new mn(0,0,0),T=0,w=!1,q=null,H=null,k=null,J=null,ee=null;const $=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,z=0;const ie=s.getParameter(s.VERSION);ie.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(ie)[1]),F=z>=1):ie.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),F=z>=2);let de=null,G={};const I=s.getParameter(s.SCISSOR_BOX),W=s.getParameter(s.VIEWPORT),le=new Gn().fromArray(I),ye=new Gn().fromArray(W);function we(X,Ne,Re,Pe){const Te=new Uint8Array(4),_e=s.createTexture();s.bindTexture(X,_e),s.texParameteri(X,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(X,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let We=0;We<Re;We++)X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY?s.texImage3D(Ne,0,s.RGBA,1,1,Pe,0,s.RGBA,s.UNSIGNED_BYTE,Te):s.texImage2D(Ne+We,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Te);return _e}const te={};te[s.TEXTURE_2D]=we(s.TEXTURE_2D,s.TEXTURE_2D,1),te[s.TEXTURE_CUBE_MAP]=we(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[s.TEXTURE_2D_ARRAY]=we(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),te[s.TEXTURE_3D]=we(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),ge(s.DEPTH_TEST),c.setFunc(Eu),ot(!1),ue(Pb),ge(s.CULL_FACE),st(os);function ge(X){m[X]!==!0&&(s.enable(X),m[X]=!0)}function Me(X){m[X]!==!1&&(s.disable(X),m[X]=!1)}function Oe(X,Ne){return _[X]!==Ne?(s.bindFramebuffer(X,Ne),_[X]=Ne,X===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=Ne),X===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=Ne),!0):!1}function Je(X,Ne){let Re=x,Pe=!1;if(X){Re=v.get(Ne),Re===void 0&&(Re=[],v.set(Ne,Re));const Te=X.textures;if(Re.length!==Te.length||Re[0]!==s.COLOR_ATTACHMENT0){for(let _e=0,We=Te.length;_e<We;_e++)Re[_e]=s.COLOR_ATTACHMENT0+_e;Re.length=Te.length,Pe=!0}}else Re[0]!==s.BACK&&(Re[0]=s.BACK,Pe=!0);Pe&&s.drawBuffers(Re)}function Ze(X){return b!==X?(s.useProgram(X),b=X,!0):!1}const Lt={[Xo]:s.FUNC_ADD,[wN]:s.FUNC_SUBTRACT,[DN]:s.FUNC_REVERSE_SUBTRACT};Lt[NN]=s.MIN,Lt[UN]=s.MAX;const qe={[LN]:s.ZERO,[ON]:s.ONE,[PN]:s.SRC_COLOR,[J0]:s.SRC_ALPHA,[GN]:s.SRC_ALPHA_SATURATE,[BN]:s.DST_COLOR,[IN]:s.DST_ALPHA,[FN]:s.ONE_MINUS_SRC_COLOR,[$0]:s.ONE_MINUS_SRC_ALPHA,[HN]:s.ONE_MINUS_DST_COLOR,[zN]:s.ONE_MINUS_DST_ALPHA,[VN]:s.CONSTANT_COLOR,[kN]:s.ONE_MINUS_CONSTANT_COLOR,[XN]:s.CONSTANT_ALPHA,[WN]:s.ONE_MINUS_CONSTANT_ALPHA};function st(X,Ne,Re,Pe,Te,_e,We,ut,Xt,ke){if(X===os){M===!0&&(Me(s.BLEND),M=!1);return}if(M===!1&&(ge(s.BLEND),M=!0),X!==RN){if(X!==y||ke!==w){if((S!==Xo||R!==Xo)&&(s.blendEquation(s.FUNC_ADD),S=Xo,R=Xo),ke)switch(X){case mu:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Fb:s.blendFunc(s.ONE,s.ONE);break;case Ib:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case zb:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:en("WebGLState: Invalid blending: ",X);break}else switch(X){case mu:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Fb:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Ib:en("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case zb:en("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:en("WebGLState: Invalid blending: ",X);break}A=null,N=null,L=null,P=null,D.set(0,0,0),T=0,y=X,w=ke}return}Te=Te||Ne,_e=_e||Re,We=We||Pe,(Ne!==S||Te!==R)&&(s.blendEquationSeparate(Lt[Ne],Lt[Te]),S=Ne,R=Te),(Re!==A||Pe!==N||_e!==L||We!==P)&&(s.blendFuncSeparate(qe[Re],qe[Pe],qe[_e],qe[We]),A=Re,N=Pe,L=_e,P=We),(ut.equals(D)===!1||Xt!==T)&&(s.blendColor(ut.r,ut.g,ut.b,Xt),D.copy(ut),T=Xt),y=X,w=!1}function vt(X,Ne){X.side===is?Me(s.CULL_FACE):ge(s.CULL_FACE);let Re=X.side===Ji;Ne&&(Re=!Re),ot(Re),X.blending===mu&&X.transparent===!1?st(os):st(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),c.setFunc(X.depthFunc),c.setTest(X.depthTest),c.setMask(X.depthWrite),l.setMask(X.colorWrite);const Pe=X.stencilWrite;f.setTest(Pe),Pe&&(f.setMask(X.stencilWriteMask),f.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),f.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Zt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ge(s.SAMPLE_ALPHA_TO_COVERAGE):Me(s.SAMPLE_ALPHA_TO_COVERAGE)}function ot(X){q!==X&&(X?s.frontFace(s.CW):s.frontFace(s.CCW),q=X)}function ue(X){X!==TN?(ge(s.CULL_FACE),X!==H&&(X===Pb?s.cullFace(s.BACK):X===AN?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Me(s.CULL_FACE),H=X}function Y(X){X!==k&&(F&&s.lineWidth(X),k=X)}function Zt(X,Ne,Re){X?(ge(s.POLYGON_OFFSET_FILL),(J!==Ne||ee!==Re)&&(J=Ne,ee=Re,c.getReversed()&&(Ne=-Ne),s.polygonOffset(Ne,Re))):Me(s.POLYGON_OFFSET_FILL)}function Tt(X){X?ge(s.SCISSOR_TEST):Me(s.SCISSOR_TEST)}function dt(X){X===void 0&&(X=s.TEXTURE0+$-1),de!==X&&(s.activeTexture(X),de=X)}function je(X,Ne,Re){Re===void 0&&(de===null?Re=s.TEXTURE0+$-1:Re=de);let Pe=G[Re];Pe===void 0&&(Pe={type:void 0,texture:void 0},G[Re]=Pe),(Pe.type!==X||Pe.texture!==Ne)&&(de!==Re&&(s.activeTexture(Re),de=Re),s.bindTexture(X,Ne||te[X]),Pe.type=X,Pe.texture=Ne)}function B(){const X=G[de];X!==void 0&&X.type!==void 0&&(s.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function C(){try{s.compressedTexImage2D(...arguments)}catch(X){en("WebGLState:",X)}}function K(){try{s.compressedTexImage3D(...arguments)}catch(X){en("WebGLState:",X)}}function ve(){try{s.texSubImage2D(...arguments)}catch(X){en("WebGLState:",X)}}function xe(){try{s.texSubImage3D(...arguments)}catch(X){en("WebGLState:",X)}}function pe(){try{s.compressedTexSubImage2D(...arguments)}catch(X){en("WebGLState:",X)}}function Ve(){try{s.compressedTexSubImage3D(...arguments)}catch(X){en("WebGLState:",X)}}function De(){try{s.texStorage2D(...arguments)}catch(X){en("WebGLState:",X)}}function at(){try{s.texStorage3D(...arguments)}catch(X){en("WebGLState:",X)}}function Ye(){try{s.texImage2D(...arguments)}catch(X){en("WebGLState:",X)}}function Ce(){try{s.texImage3D(...arguments)}catch(X){en("WebGLState:",X)}}function Ae(X){le.equals(X)===!1&&(s.scissor(X.x,X.y,X.z,X.w),le.copy(X))}function Ge(X){ye.equals(X)===!1&&(s.viewport(X.x,X.y,X.z,X.w),ye.copy(X))}function Ie(X,Ne){let Re=h.get(Ne);Re===void 0&&(Re=new WeakMap,h.set(Ne,Re));let Pe=Re.get(X);Pe===void 0&&(Pe=s.getUniformBlockIndex(Ne,X.name),Re.set(X,Pe))}function ze(X,Ne){const Pe=h.get(Ne).get(X);d.get(Ne)!==Pe&&(s.uniformBlockBinding(Ne,Pe,X.__bindingPointIndex),d.set(Ne,Pe))}function gt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),m={},de=null,G={},_={},v=new WeakMap,x=[],b=null,M=!1,y=null,S=null,A=null,N=null,R=null,L=null,P=null,D=new mn(0,0,0),T=0,w=!1,q=null,H=null,k=null,J=null,ee=null,le.set(0,0,s.canvas.width,s.canvas.height),ye.set(0,0,s.canvas.width,s.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:ge,disable:Me,bindFramebuffer:Oe,drawBuffers:Je,useProgram:Ze,setBlending:st,setMaterial:vt,setFlipSided:ot,setCullFace:ue,setLineWidth:Y,setPolygonOffset:Zt,setScissorTest:Tt,activeTexture:dt,bindTexture:je,unbindTexture:B,compressedTexImage2D:C,compressedTexImage3D:K,texImage2D:Ye,texImage3D:Ce,updateUBOMapping:Ie,uniformBlockBinding:ze,texStorage2D:De,texStorage3D:at,texSubImage2D:ve,texSubImage3D:xe,compressedTexSubImage2D:pe,compressedTexSubImage3D:Ve,scissor:Ae,viewport:Ge,reset:gt}}function A4(s,e,t,i,r,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Yt,m=new WeakMap;let _;const v=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(B,C){return x?new OffscreenCanvas(B,C):$h("canvas")}function M(B,C,K){let ve=1;const xe=je(B);if((xe.width>K||xe.height>K)&&(ve=K/Math.max(xe.width,xe.height)),ve<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){const pe=Math.floor(ve*xe.width),Ve=Math.floor(ve*xe.height);_===void 0&&(_=b(pe,Ve));const De=C?b(pe,Ve):_;return De.width=pe,De.height=Ve,De.getContext("2d").drawImage(B,0,0,pe,Ve),Et("WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+pe+"x"+Ve+")."),De}else return"data"in B&&Et("WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),B;return B}function y(B){return B.generateMipmaps}function S(B){s.generateMipmap(B)}function A(B){return B.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?s.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function N(B,C,K,ve,xe=!1){if(B!==null){if(s[B]!==void 0)return s[B];Et("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let pe=C;if(C===s.RED&&(K===s.FLOAT&&(pe=s.R32F),K===s.HALF_FLOAT&&(pe=s.R16F),K===s.UNSIGNED_BYTE&&(pe=s.R8)),C===s.RED_INTEGER&&(K===s.UNSIGNED_BYTE&&(pe=s.R8UI),K===s.UNSIGNED_SHORT&&(pe=s.R16UI),K===s.UNSIGNED_INT&&(pe=s.R32UI),K===s.BYTE&&(pe=s.R8I),K===s.SHORT&&(pe=s.R16I),K===s.INT&&(pe=s.R32I)),C===s.RG&&(K===s.FLOAT&&(pe=s.RG32F),K===s.HALF_FLOAT&&(pe=s.RG16F),K===s.UNSIGNED_BYTE&&(pe=s.RG8)),C===s.RG_INTEGER&&(K===s.UNSIGNED_BYTE&&(pe=s.RG8UI),K===s.UNSIGNED_SHORT&&(pe=s.RG16UI),K===s.UNSIGNED_INT&&(pe=s.RG32UI),K===s.BYTE&&(pe=s.RG8I),K===s.SHORT&&(pe=s.RG16I),K===s.INT&&(pe=s.RG32I)),C===s.RGB_INTEGER&&(K===s.UNSIGNED_BYTE&&(pe=s.RGB8UI),K===s.UNSIGNED_SHORT&&(pe=s.RGB16UI),K===s.UNSIGNED_INT&&(pe=s.RGB32UI),K===s.BYTE&&(pe=s.RGB8I),K===s.SHORT&&(pe=s.RGB16I),K===s.INT&&(pe=s.RGB32I)),C===s.RGBA_INTEGER&&(K===s.UNSIGNED_BYTE&&(pe=s.RGBA8UI),K===s.UNSIGNED_SHORT&&(pe=s.RGBA16UI),K===s.UNSIGNED_INT&&(pe=s.RGBA32UI),K===s.BYTE&&(pe=s.RGBA8I),K===s.SHORT&&(pe=s.RGBA16I),K===s.INT&&(pe=s.RGBA32I)),C===s.RGB&&(K===s.UNSIGNED_INT_5_9_9_9_REV&&(pe=s.RGB9_E5),K===s.UNSIGNED_INT_10F_11F_11F_REV&&(pe=s.R11F_G11F_B10F)),C===s.RGBA){const Ve=xe?Qh:Kt.getTransfer(ve);K===s.FLOAT&&(pe=s.RGBA32F),K===s.HALF_FLOAT&&(pe=s.RGBA16F),K===s.UNSIGNED_BYTE&&(pe=Ve===on?s.SRGB8_ALPHA8:s.RGBA8),K===s.UNSIGNED_SHORT_4_4_4_4&&(pe=s.RGBA4),K===s.UNSIGNED_SHORT_5_5_5_1&&(pe=s.RGB5_A1)}return(pe===s.R16F||pe===s.R32F||pe===s.RG16F||pe===s.RG32F||pe===s.RGBA16F||pe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function R(B,C){let K;return B?C===null||C===Cr||C===_f?K=s.DEPTH24_STENCIL8:C===xr?K=s.DEPTH32F_STENCIL8:C===gf&&(K=s.DEPTH24_STENCIL8,Et("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===Cr||C===_f?K=s.DEPTH_COMPONENT24:C===xr?K=s.DEPTH_COMPONENT32F:C===gf&&(K=s.DEPTH_COMPONENT16),K}function L(B,C){return y(B)===!0||B.isFramebufferTexture&&B.minFilter!==_i&&B.minFilter!==$n?Math.log2(Math.max(C.width,C.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?C.mipmaps.length:1}function P(B){const C=B.target;C.removeEventListener("dispose",P),T(C),C.isVideoTexture&&m.delete(C)}function D(B){const C=B.target;C.removeEventListener("dispose",D),q(C)}function T(B){const C=i.get(B);if(C.__webglInit===void 0)return;const K=B.source,ve=v.get(K);if(ve){const xe=ve[C.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&w(B),Object.keys(ve).length===0&&v.delete(K)}i.remove(B)}function w(B){const C=i.get(B);s.deleteTexture(C.__webglTexture);const K=B.source,ve=v.get(K);delete ve[C.__cacheKey],c.memory.textures--}function q(B){const C=i.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),i.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let ve=0;ve<6;ve++){if(Array.isArray(C.__webglFramebuffer[ve]))for(let xe=0;xe<C.__webglFramebuffer[ve].length;xe++)s.deleteFramebuffer(C.__webglFramebuffer[ve][xe]);else s.deleteFramebuffer(C.__webglFramebuffer[ve]);C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer[ve])}else{if(Array.isArray(C.__webglFramebuffer))for(let ve=0;ve<C.__webglFramebuffer.length;ve++)s.deleteFramebuffer(C.__webglFramebuffer[ve]);else s.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&s.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let ve=0;ve<C.__webglColorRenderbuffer.length;ve++)C.__webglColorRenderbuffer[ve]&&s.deleteRenderbuffer(C.__webglColorRenderbuffer[ve]);C.__webglDepthRenderbuffer&&s.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const K=B.textures;for(let ve=0,xe=K.length;ve<xe;ve++){const pe=i.get(K[ve]);pe.__webglTexture&&(s.deleteTexture(pe.__webglTexture),c.memory.textures--),i.remove(K[ve])}i.remove(B)}let H=0;function k(){H=0}function J(){const B=H;return B>=r.maxTextures&&Et("WebGLTextures: Trying to use "+B+" texture units while this GPU supports only "+r.maxTextures),H+=1,B}function ee(B){const C=[];return C.push(B.wrapS),C.push(B.wrapT),C.push(B.wrapR||0),C.push(B.magFilter),C.push(B.minFilter),C.push(B.anisotropy),C.push(B.internalFormat),C.push(B.format),C.push(B.type),C.push(B.generateMipmaps),C.push(B.premultiplyAlpha),C.push(B.flipY),C.push(B.unpackAlignment),C.push(B.colorSpace),C.join()}function $(B,C){const K=i.get(B);if(B.isVideoTexture&&Tt(B),B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&K.__version!==B.version){const ve=B.image;if(ve===null)Et("WebGLRenderer: Texture marked for update but no image data found.");else if(ve.complete===!1)Et("WebGLRenderer: Texture marked for update but image is incomplete");else{te(K,B,C);return}}else B.isExternalTexture&&(K.__webglTexture=B.sourceTexture?B.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,K.__webglTexture,s.TEXTURE0+C)}function F(B,C){const K=i.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&K.__version!==B.version){te(K,B,C);return}else B.isExternalTexture&&(K.__webglTexture=B.sourceTexture?B.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,K.__webglTexture,s.TEXTURE0+C)}function z(B,C){const K=i.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&K.__version!==B.version){te(K,B,C);return}t.bindTexture(s.TEXTURE_3D,K.__webglTexture,s.TEXTURE0+C)}function ie(B,C){const K=i.get(B);if(B.isCubeDepthTexture!==!0&&B.version>0&&K.__version!==B.version){ge(K,B,C);return}t.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture,s.TEXTURE0+C)}const de={[o_]:s.REPEAT,[rs]:s.CLAMP_TO_EDGE,[l_]:s.MIRRORED_REPEAT},G={[_i]:s.NEAREST,[qN]:s.NEAREST_MIPMAP_NEAREST,[Yd]:s.NEAREST_MIPMAP_LINEAR,[$n]:s.LINEAR,[Wg]:s.LINEAR_MIPMAP_NEAREST,[Yo]:s.LINEAR_MIPMAP_LINEAR},I={[JN]:s.NEVER,[iU]:s.ALWAYS,[$N]:s.LESS,[Pv]:s.LEQUAL,[eU]:s.EQUAL,[Fv]:s.GEQUAL,[tU]:s.GREATER,[nU]:s.NOTEQUAL};function W(B,C){if(C.type===xr&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===$n||C.magFilter===Wg||C.magFilter===Yd||C.magFilter===Yo||C.minFilter===$n||C.minFilter===Wg||C.minFilter===Yd||C.minFilter===Yo)&&Et("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(B,s.TEXTURE_WRAP_S,de[C.wrapS]),s.texParameteri(B,s.TEXTURE_WRAP_T,de[C.wrapT]),(B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY)&&s.texParameteri(B,s.TEXTURE_WRAP_R,de[C.wrapR]),s.texParameteri(B,s.TEXTURE_MAG_FILTER,G[C.magFilter]),s.texParameteri(B,s.TEXTURE_MIN_FILTER,G[C.minFilter]),C.compareFunction&&(s.texParameteri(B,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(B,s.TEXTURE_COMPARE_FUNC,I[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===_i||C.minFilter!==Yd&&C.minFilter!==Yo||C.type===xr&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||i.get(C).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");s.texParameterf(B,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,r.getMaxAnisotropy())),i.get(C).__currentAnisotropy=C.anisotropy}}}function le(B,C){let K=!1;B.__webglInit===void 0&&(B.__webglInit=!0,C.addEventListener("dispose",P));const ve=C.source;let xe=v.get(ve);xe===void 0&&(xe={},v.set(ve,xe));const pe=ee(C);if(pe!==B.__cacheKey){xe[pe]===void 0&&(xe[pe]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,K=!0),xe[pe].usedTimes++;const Ve=xe[B.__cacheKey];Ve!==void 0&&(xe[B.__cacheKey].usedTimes--,Ve.usedTimes===0&&w(C)),B.__cacheKey=pe,B.__webglTexture=xe[pe].texture}return K}function ye(B,C,K){return Math.floor(Math.floor(B/K)/C)}function we(B,C,K,ve){const pe=B.updateRanges;if(pe.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,C.width,C.height,K,ve,C.data);else{pe.sort((Ce,Ae)=>Ce.start-Ae.start);let Ve=0;for(let Ce=1;Ce<pe.length;Ce++){const Ae=pe[Ve],Ge=pe[Ce],Ie=Ae.start+Ae.count,ze=ye(Ge.start,C.width,4),gt=ye(Ae.start,C.width,4);Ge.start<=Ie+1&&ze===gt&&ye(Ge.start+Ge.count-1,C.width,4)===ze?Ae.count=Math.max(Ae.count,Ge.start+Ge.count-Ae.start):(++Ve,pe[Ve]=Ge)}pe.length=Ve+1;const De=s.getParameter(s.UNPACK_ROW_LENGTH),at=s.getParameter(s.UNPACK_SKIP_PIXELS),Ye=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,C.width);for(let Ce=0,Ae=pe.length;Ce<Ae;Ce++){const Ge=pe[Ce],Ie=Math.floor(Ge.start/4),ze=Math.ceil(Ge.count/4),gt=Ie%C.width,X=Math.floor(Ie/C.width),Ne=ze,Re=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,gt),s.pixelStorei(s.UNPACK_SKIP_ROWS,X),t.texSubImage2D(s.TEXTURE_2D,0,gt,X,Ne,Re,K,ve,C.data)}B.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,De),s.pixelStorei(s.UNPACK_SKIP_PIXELS,at),s.pixelStorei(s.UNPACK_SKIP_ROWS,Ye)}}function te(B,C,K){let ve=s.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(ve=s.TEXTURE_2D_ARRAY),C.isData3DTexture&&(ve=s.TEXTURE_3D);const xe=le(B,C),pe=C.source;t.bindTexture(ve,B.__webglTexture,s.TEXTURE0+K);const Ve=i.get(pe);if(pe.version!==Ve.__version||xe===!0){t.activeTexture(s.TEXTURE0+K);const De=Kt.getPrimaries(Kt.workingColorSpace),at=C.colorSpace===Ks?null:Kt.getPrimaries(C.colorSpace),Ye=C.colorSpace===Ks||De===at?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let Ce=M(C.image,!1,r.maxTextureSize);Ce=dt(C,Ce);const Ae=l.convert(C.format,C.colorSpace),Ge=l.convert(C.type);let Ie=N(C.internalFormat,Ae,Ge,C.colorSpace,C.isVideoTexture);W(ve,C);let ze;const gt=C.mipmaps,X=C.isVideoTexture!==!0,Ne=Ve.__version===void 0||xe===!0,Re=pe.dataReady,Pe=L(C,Ce);if(C.isDepthTexture)Ie=R(C.format===qo,C.type),Ne&&(X?t.texStorage2D(s.TEXTURE_2D,1,Ie,Ce.width,Ce.height):t.texImage2D(s.TEXTURE_2D,0,Ie,Ce.width,Ce.height,0,Ae,Ge,null));else if(C.isDataTexture)if(gt.length>0){X&&Ne&&t.texStorage2D(s.TEXTURE_2D,Pe,Ie,gt[0].width,gt[0].height);for(let Te=0,_e=gt.length;Te<_e;Te++)ze=gt[Te],X?Re&&t.texSubImage2D(s.TEXTURE_2D,Te,0,0,ze.width,ze.height,Ae,Ge,ze.data):t.texImage2D(s.TEXTURE_2D,Te,Ie,ze.width,ze.height,0,Ae,Ge,ze.data);C.generateMipmaps=!1}else X?(Ne&&t.texStorage2D(s.TEXTURE_2D,Pe,Ie,Ce.width,Ce.height),Re&&we(C,Ce,Ae,Ge)):t.texImage2D(s.TEXTURE_2D,0,Ie,Ce.width,Ce.height,0,Ae,Ge,Ce.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){X&&Ne&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Pe,Ie,gt[0].width,gt[0].height,Ce.depth);for(let Te=0,_e=gt.length;Te<_e;Te++)if(ze=gt[Te],C.format!==ka)if(Ae!==null)if(X){if(Re)if(C.layerUpdates.size>0){const We=sM(ze.width,ze.height,C.format,C.type);for(const ut of C.layerUpdates){const Xt=ze.data.subarray(ut*We/ze.data.BYTES_PER_ELEMENT,(ut+1)*We/ze.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Te,0,0,ut,ze.width,ze.height,1,Ae,Xt)}C.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Te,0,0,0,ze.width,ze.height,Ce.depth,Ae,ze.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Te,Ie,ze.width,ze.height,Ce.depth,0,ze.data,0,0);else Et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Re&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Te,0,0,0,ze.width,ze.height,Ce.depth,Ae,Ge,ze.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Te,Ie,ze.width,ze.height,Ce.depth,0,Ae,Ge,ze.data)}else{X&&Ne&&t.texStorage2D(s.TEXTURE_2D,Pe,Ie,gt[0].width,gt[0].height);for(let Te=0,_e=gt.length;Te<_e;Te++)ze=gt[Te],C.format!==ka?Ae!==null?X?Re&&t.compressedTexSubImage2D(s.TEXTURE_2D,Te,0,0,ze.width,ze.height,Ae,ze.data):t.compressedTexImage2D(s.TEXTURE_2D,Te,Ie,ze.width,ze.height,0,ze.data):Et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Re&&t.texSubImage2D(s.TEXTURE_2D,Te,0,0,ze.width,ze.height,Ae,Ge,ze.data):t.texImage2D(s.TEXTURE_2D,Te,Ie,ze.width,ze.height,0,Ae,Ge,ze.data)}else if(C.isDataArrayTexture)if(X){if(Ne&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Pe,Ie,Ce.width,Ce.height,Ce.depth),Re)if(C.layerUpdates.size>0){const Te=sM(Ce.width,Ce.height,C.format,C.type);for(const _e of C.layerUpdates){const We=Ce.data.subarray(_e*Te/Ce.data.BYTES_PER_ELEMENT,(_e+1)*Te/Ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,_e,Ce.width,Ce.height,1,Ae,Ge,We)}C.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ce.width,Ce.height,Ce.depth,Ae,Ge,Ce.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ie,Ce.width,Ce.height,Ce.depth,0,Ae,Ge,Ce.data);else if(C.isData3DTexture)X?(Ne&&t.texStorage3D(s.TEXTURE_3D,Pe,Ie,Ce.width,Ce.height,Ce.depth),Re&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ce.width,Ce.height,Ce.depth,Ae,Ge,Ce.data)):t.texImage3D(s.TEXTURE_3D,0,Ie,Ce.width,Ce.height,Ce.depth,0,Ae,Ge,Ce.data);else if(C.isFramebufferTexture){if(Ne)if(X)t.texStorage2D(s.TEXTURE_2D,Pe,Ie,Ce.width,Ce.height);else{let Te=Ce.width,_e=Ce.height;for(let We=0;We<Pe;We++)t.texImage2D(s.TEXTURE_2D,We,Ie,Te,_e,0,Ae,Ge,null),Te>>=1,_e>>=1}}else if(gt.length>0){if(X&&Ne){const Te=je(gt[0]);t.texStorage2D(s.TEXTURE_2D,Pe,Ie,Te.width,Te.height)}for(let Te=0,_e=gt.length;Te<_e;Te++)ze=gt[Te],X?Re&&t.texSubImage2D(s.TEXTURE_2D,Te,0,0,Ae,Ge,ze):t.texImage2D(s.TEXTURE_2D,Te,Ie,Ae,Ge,ze);C.generateMipmaps=!1}else if(X){if(Ne){const Te=je(Ce);t.texStorage2D(s.TEXTURE_2D,Pe,Ie,Te.width,Te.height)}Re&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ae,Ge,Ce)}else t.texImage2D(s.TEXTURE_2D,0,Ie,Ae,Ge,Ce);y(C)&&S(ve),Ve.__version=pe.version,C.onUpdate&&C.onUpdate(C)}B.__version=C.version}function ge(B,C,K){if(C.image.length!==6)return;const ve=le(B,C),xe=C.source;t.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+K);const pe=i.get(xe);if(xe.version!==pe.__version||ve===!0){t.activeTexture(s.TEXTURE0+K);const Ve=Kt.getPrimaries(Kt.workingColorSpace),De=C.colorSpace===Ks?null:Kt.getPrimaries(C.colorSpace),at=C.colorSpace===Ks||Ve===De?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);const Ye=C.isCompressedTexture||C.image[0].isCompressedTexture,Ce=C.image[0]&&C.image[0].isDataTexture,Ae=[];for(let _e=0;_e<6;_e++)!Ye&&!Ce?Ae[_e]=M(C.image[_e],!0,r.maxCubemapSize):Ae[_e]=Ce?C.image[_e].image:C.image[_e],Ae[_e]=dt(C,Ae[_e]);const Ge=Ae[0],Ie=l.convert(C.format,C.colorSpace),ze=l.convert(C.type),gt=N(C.internalFormat,Ie,ze,C.colorSpace),X=C.isVideoTexture!==!0,Ne=pe.__version===void 0||ve===!0,Re=xe.dataReady;let Pe=L(C,Ge);W(s.TEXTURE_CUBE_MAP,C);let Te;if(Ye){X&&Ne&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Pe,gt,Ge.width,Ge.height);for(let _e=0;_e<6;_e++){Te=Ae[_e].mipmaps;for(let We=0;We<Te.length;We++){const ut=Te[We];C.format!==ka?Ie!==null?X?Re&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,We,0,0,ut.width,ut.height,Ie,ut.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,We,gt,ut.width,ut.height,0,ut.data):Et("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,We,0,0,ut.width,ut.height,Ie,ze,ut.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,We,gt,ut.width,ut.height,0,Ie,ze,ut.data)}}}else{if(Te=C.mipmaps,X&&Ne){Te.length>0&&Pe++;const _e=je(Ae[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Pe,gt,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(Ce){X?Re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Ae[_e].width,Ae[_e].height,Ie,ze,Ae[_e].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,gt,Ae[_e].width,Ae[_e].height,0,Ie,ze,Ae[_e].data);for(let We=0;We<Te.length;We++){const Xt=Te[We].image[_e].image;X?Re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,We+1,0,0,Xt.width,Xt.height,Ie,ze,Xt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,We+1,gt,Xt.width,Xt.height,0,Ie,ze,Xt.data)}}else{X?Re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Ie,ze,Ae[_e]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,gt,Ie,ze,Ae[_e]);for(let We=0;We<Te.length;We++){const ut=Te[We];X?Re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,We+1,0,0,Ie,ze,ut.image[_e]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,We+1,gt,Ie,ze,ut.image[_e])}}}y(C)&&S(s.TEXTURE_CUBE_MAP),pe.__version=xe.version,C.onUpdate&&C.onUpdate(C)}B.__version=C.version}function Me(B,C,K,ve,xe,pe){const Ve=l.convert(K.format,K.colorSpace),De=l.convert(K.type),at=N(K.internalFormat,Ve,De,K.colorSpace),Ye=i.get(C),Ce=i.get(K);if(Ce.__renderTarget=C,!Ye.__hasExternalTextures){const Ae=Math.max(1,C.width>>pe),Ge=Math.max(1,C.height>>pe);xe===s.TEXTURE_3D||xe===s.TEXTURE_2D_ARRAY?t.texImage3D(xe,pe,at,Ae,Ge,C.depth,0,Ve,De,null):t.texImage2D(xe,pe,at,Ae,Ge,0,Ve,De,null)}t.bindFramebuffer(s.FRAMEBUFFER,B),Zt(C)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ve,xe,Ce.__webglTexture,0,Y(C)):(xe===s.TEXTURE_2D||xe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ve,xe,Ce.__webglTexture,pe),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Oe(B,C,K){if(s.bindRenderbuffer(s.RENDERBUFFER,B),C.depthBuffer){const ve=C.depthTexture,xe=ve&&ve.isDepthTexture?ve.type:null,pe=R(C.stencilBuffer,xe),Ve=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Zt(C)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Y(C),pe,C.width,C.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,Y(C),pe,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,pe,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ve,s.RENDERBUFFER,B)}else{const ve=C.textures;for(let xe=0;xe<ve.length;xe++){const pe=ve[xe],Ve=l.convert(pe.format,pe.colorSpace),De=l.convert(pe.type),at=N(pe.internalFormat,Ve,De,pe.colorSpace);Zt(C)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Y(C),at,C.width,C.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,Y(C),at,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,at,C.width,C.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Je(B,C,K){const ve=C.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,B),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xe=i.get(C.depthTexture);if(xe.__renderTarget=C,(!xe.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),ve){if(xe.__webglInit===void 0&&(xe.__webglInit=!0,C.depthTexture.addEventListener("dispose",P)),xe.__webglTexture===void 0){xe.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,xe.__webglTexture),W(s.TEXTURE_CUBE_MAP,C.depthTexture);const Ye=l.convert(C.depthTexture.format),Ce=l.convert(C.depthTexture.type);let Ae;C.depthTexture.format===ps?Ae=s.DEPTH_COMPONENT24:C.depthTexture.format===qo&&(Ae=s.DEPTH24_STENCIL8);for(let Ge=0;Ge<6;Ge++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,0,Ae,C.width,C.height,0,Ye,Ce,null)}}else $(C.depthTexture,0);const pe=xe.__webglTexture,Ve=Y(C),De=ve?s.TEXTURE_CUBE_MAP_POSITIVE_X+K:s.TEXTURE_2D,at=C.depthTexture.format===qo?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(C.depthTexture.format===ps)Zt(C)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,at,De,pe,0,Ve):s.framebufferTexture2D(s.FRAMEBUFFER,at,De,pe,0);else if(C.depthTexture.format===qo)Zt(C)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,at,De,pe,0,Ve):s.framebufferTexture2D(s.FRAMEBUFFER,at,De,pe,0);else throw new Error("Unknown depthTexture format")}function Ze(B){const C=i.get(B),K=B.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==B.depthTexture){const ve=B.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),ve){const xe=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,ve.removeEventListener("dispose",xe)};ve.addEventListener("dispose",xe),C.__depthDisposeCallback=xe}C.__boundDepthTexture=ve}if(B.depthTexture&&!C.__autoAllocateDepthBuffer)if(K)for(let ve=0;ve<6;ve++)Je(C.__webglFramebuffer[ve],B,ve);else{const ve=B.texture.mipmaps;ve&&ve.length>0?Je(C.__webglFramebuffer[0],B,0):Je(C.__webglFramebuffer,B,0)}else if(K){C.__webglDepthbuffer=[];for(let ve=0;ve<6;ve++)if(t.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer[ve]),C.__webglDepthbuffer[ve]===void 0)C.__webglDepthbuffer[ve]=s.createRenderbuffer(),Oe(C.__webglDepthbuffer[ve],B,!1);else{const xe=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pe=C.__webglDepthbuffer[ve];s.bindRenderbuffer(s.RENDERBUFFER,pe),s.framebufferRenderbuffer(s.FRAMEBUFFER,xe,s.RENDERBUFFER,pe)}}else{const ve=B.texture.mipmaps;if(ve&&ve.length>0?t.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=s.createRenderbuffer(),Oe(C.__webglDepthbuffer,B,!1);else{const xe=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pe=C.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,pe),s.framebufferRenderbuffer(s.FRAMEBUFFER,xe,s.RENDERBUFFER,pe)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Lt(B,C,K){const ve=i.get(B);C!==void 0&&Me(ve.__webglFramebuffer,B,B.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),K!==void 0&&Ze(B)}function qe(B){const C=B.texture,K=i.get(B),ve=i.get(C);B.addEventListener("dispose",D);const xe=B.textures,pe=B.isWebGLCubeRenderTarget===!0,Ve=xe.length>1;if(Ve||(ve.__webglTexture===void 0&&(ve.__webglTexture=s.createTexture()),ve.__version=C.version,c.memory.textures++),pe){K.__webglFramebuffer=[];for(let De=0;De<6;De++)if(C.mipmaps&&C.mipmaps.length>0){K.__webglFramebuffer[De]=[];for(let at=0;at<C.mipmaps.length;at++)K.__webglFramebuffer[De][at]=s.createFramebuffer()}else K.__webglFramebuffer[De]=s.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){K.__webglFramebuffer=[];for(let De=0;De<C.mipmaps.length;De++)K.__webglFramebuffer[De]=s.createFramebuffer()}else K.__webglFramebuffer=s.createFramebuffer();if(Ve)for(let De=0,at=xe.length;De<at;De++){const Ye=i.get(xe[De]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=s.createTexture(),c.memory.textures++)}if(B.samples>0&&Zt(B)===!1){K.__webglMultisampledFramebuffer=s.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let De=0;De<xe.length;De++){const at=xe[De];K.__webglColorRenderbuffer[De]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,K.__webglColorRenderbuffer[De]);const Ye=l.convert(at.format,at.colorSpace),Ce=l.convert(at.type),Ae=N(at.internalFormat,Ye,Ce,at.colorSpace,B.isXRRenderTarget===!0),Ge=Y(B);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ge,Ae,B.width,B.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.RENDERBUFFER,K.__webglColorRenderbuffer[De])}s.bindRenderbuffer(s.RENDERBUFFER,null),B.depthBuffer&&(K.__webglDepthRenderbuffer=s.createRenderbuffer(),Oe(K.__webglDepthRenderbuffer,B,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(pe){t.bindTexture(s.TEXTURE_CUBE_MAP,ve.__webglTexture),W(s.TEXTURE_CUBE_MAP,C);for(let De=0;De<6;De++)if(C.mipmaps&&C.mipmaps.length>0)for(let at=0;at<C.mipmaps.length;at++)Me(K.__webglFramebuffer[De][at],B,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+De,at);else Me(K.__webglFramebuffer[De],B,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+De,0);y(C)&&S(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ve){for(let De=0,at=xe.length;De<at;De++){const Ye=xe[De],Ce=i.get(Ye);let Ae=s.TEXTURE_2D;(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(Ae=B.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ae,Ce.__webglTexture),W(Ae,Ye),Me(K.__webglFramebuffer,B,Ye,s.COLOR_ATTACHMENT0+De,Ae,0),y(Ye)&&S(Ae)}t.unbindTexture()}else{let De=s.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(De=B.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(De,ve.__webglTexture),W(De,C),C.mipmaps&&C.mipmaps.length>0)for(let at=0;at<C.mipmaps.length;at++)Me(K.__webglFramebuffer[at],B,C,s.COLOR_ATTACHMENT0,De,at);else Me(K.__webglFramebuffer,B,C,s.COLOR_ATTACHMENT0,De,0);y(C)&&S(De),t.unbindTexture()}B.depthBuffer&&Ze(B)}function st(B){const C=B.textures;for(let K=0,ve=C.length;K<ve;K++){const xe=C[K];if(y(xe)){const pe=A(B),Ve=i.get(xe).__webglTexture;t.bindTexture(pe,Ve),S(pe),t.unbindTexture()}}}const vt=[],ot=[];function ue(B){if(B.samples>0){if(Zt(B)===!1){const C=B.textures,K=B.width,ve=B.height;let xe=s.COLOR_BUFFER_BIT;const pe=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ve=i.get(B),De=C.length>1;if(De)for(let Ye=0;Ye<C.length;Ye++)t.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ye,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ye,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer);const at=B.texture.mipmaps;at&&at.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer);for(let Ye=0;Ye<C.length;Ye++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(xe|=s.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(xe|=s.STENCIL_BUFFER_BIT)),De){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ve.__webglColorRenderbuffer[Ye]);const Ce=i.get(C[Ye]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ce,0)}s.blitFramebuffer(0,0,K,ve,0,0,K,ve,xe,s.NEAREST),d===!0&&(vt.length=0,ot.length=0,vt.push(s.COLOR_ATTACHMENT0+Ye),B.depthBuffer&&B.resolveDepthBuffer===!1&&(vt.push(pe),ot.push(pe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ot)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,vt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),De)for(let Ye=0;Ye<C.length;Ye++){t.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ye,s.RENDERBUFFER,Ve.__webglColorRenderbuffer[Ye]);const Ce=i.get(C[Ye]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ye,s.TEXTURE_2D,Ce,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.resolveDepthBuffer===!1&&d){const C=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[C])}}}function Y(B){return Math.min(r.maxSamples,B.samples)}function Zt(B){const C=i.get(B);return B.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function Tt(B){const C=c.render.frame;m.get(B)!==C&&(m.set(B,C),B.update())}function dt(B,C){const K=B.colorSpace,ve=B.format,xe=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||K!==Cu&&K!==Ks&&(Kt.getTransfer(K)===on?(ve!==ka||xe!==Va)&&Et("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):en("WebGLTextures: Unsupported texture color space:",K)),C}function je(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(h.width=B.naturalWidth||B.width,h.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(h.width=B.displayWidth,h.height=B.displayHeight):(h.width=B.width,h.height=B.height),h}this.allocateTextureUnit=J,this.resetTextureUnits=k,this.setTexture2D=$,this.setTexture2DArray=F,this.setTexture3D=z,this.setTextureCube=ie,this.rebindTextures=Lt,this.setupRenderTarget=qe,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=Ze,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=Zt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function C4(s,e){function t(i,r=Ks){let l;const c=Kt.getTransfer(r);if(i===Va)return s.UNSIGNED_BYTE;if(i===Dv)return s.UNSIGNED_SHORT_4_4_4_4;if(i===Nv)return s.UNSIGNED_SHORT_5_5_5_1;if(i===wT)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===DT)return s.UNSIGNED_INT_10F_11F_11F_REV;if(i===CT)return s.BYTE;if(i===RT)return s.SHORT;if(i===gf)return s.UNSIGNED_SHORT;if(i===wv)return s.INT;if(i===Cr)return s.UNSIGNED_INT;if(i===xr)return s.FLOAT;if(i===hs)return s.HALF_FLOAT;if(i===NT)return s.ALPHA;if(i===UT)return s.RGB;if(i===ka)return s.RGBA;if(i===ps)return s.DEPTH_COMPONENT;if(i===qo)return s.DEPTH_STENCIL;if(i===LT)return s.RED;if(i===Uv)return s.RED_INTEGER;if(i===Au)return s.RG;if(i===Lv)return s.RG_INTEGER;if(i===Ov)return s.RGBA_INTEGER;if(i===Oh||i===Ph||i===Fh||i===Ih)if(c===on)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(i===Oh)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ph)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Fh)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ih)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(i===Oh)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ph)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Fh)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ih)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===u_||i===c_||i===f_||i===d_)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(i===u_)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===c_)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===f_)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===d_)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===h_||i===p_||i===m_||i===g_||i===__||i===v_||i===x_)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(i===h_||i===p_)return c===on?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(i===m_)return c===on?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(i===g_)return l.COMPRESSED_R11_EAC;if(i===__)return l.COMPRESSED_SIGNED_R11_EAC;if(i===v_)return l.COMPRESSED_RG11_EAC;if(i===x_)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===y_||i===S_||i===b_||i===M_||i===E_||i===T_||i===A_||i===C_||i===R_||i===w_||i===D_||i===N_||i===U_||i===L_)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(i===y_)return c===on?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===S_)return c===on?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===b_)return c===on?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===M_)return c===on?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===E_)return c===on?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===T_)return c===on?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===A_)return c===on?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===C_)return c===on?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===R_)return c===on?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===w_)return c===on?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===D_)return c===on?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===N_)return c===on?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===U_)return c===on?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===L_)return c===on?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===O_||i===P_||i===F_)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(i===O_)return c===on?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===P_)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===F_)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===I_||i===z_||i===B_||i===H_)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(i===I_)return l.COMPRESSED_RED_RGTC1_EXT;if(i===z_)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===B_)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===H_)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===_f?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:t}}const R4=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,w4=`
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

}`;class D4{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new kT(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new or({vertexShader:R4,fragmentShader:w4,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Rr(new Of(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class N4 extends Iu{constructor(e,t){super();const i=this;let r=null,l=1,c=null,f="local-floor",d=1,h=null,m=null,_=null,v=null,x=null,b=null;const M=typeof XRWebGLBinding<"u",y=new D4,S={},A=t.getContextAttributes();let N=null,R=null;const L=[],P=[],D=new Yt;let T=null;const w=new ir;w.viewport=new Gn;const q=new ir;q.viewport=new Gn;const H=[w,q],k=new kU;let J=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ge=L[te];return ge===void 0&&(ge=new $g,L[te]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(te){let ge=L[te];return ge===void 0&&(ge=new $g,L[te]=ge),ge.getGripSpace()},this.getHand=function(te){let ge=L[te];return ge===void 0&&(ge=new $g,L[te]=ge),ge.getHandSpace()};function $(te){const ge=P.indexOf(te.inputSource);if(ge===-1)return;const Me=L[ge];Me!==void 0&&(Me.update(te.inputSource,te.frame,h||c),Me.dispatchEvent({type:te.type,data:te.inputSource}))}function F(){r.removeEventListener("select",$),r.removeEventListener("selectstart",$),r.removeEventListener("selectend",$),r.removeEventListener("squeeze",$),r.removeEventListener("squeezestart",$),r.removeEventListener("squeezeend",$),r.removeEventListener("end",F),r.removeEventListener("inputsourceschange",z);for(let te=0;te<L.length;te++){const ge=P[te];ge!==null&&(P[te]=null,L[te].disconnect(ge))}J=null,ee=null,y.reset();for(const te in S)delete S[te];e.setRenderTarget(N),x=null,v=null,_=null,r=null,R=null,we.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){l=te,i.isPresenting===!0&&Et("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){f=te,i.isPresenting===!0&&Et("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(te){h=te},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return _===null&&M&&(_=new XRWebGLBinding(r,t)),_},this.getFrame=function(){return b},this.getSession=function(){return r},this.setSession=async function(te){if(r=te,r!==null){if(N=e.getRenderTarget(),r.addEventListener("select",$),r.addEventListener("selectstart",$),r.addEventListener("selectend",$),r.addEventListener("squeeze",$),r.addEventListener("squeezestart",$),r.addEventListener("squeezeend",$),r.addEventListener("end",F),r.addEventListener("inputsourceschange",z),A.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(D),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,Oe=null,Je=null;A.depth&&(Je=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=A.stencil?qo:ps,Oe=A.stencil?_f:Cr);const Ze={colorFormat:t.RGBA8,depthFormat:Je,scaleFactor:l};_=this.getBinding(),v=_.createProjectionLayer(Ze),r.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),R=new Er(v.textureWidth,v.textureHeight,{format:ka,type:Va,depthTexture:new vf(v.textureWidth,v.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Me={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:l};x=new XRWebGLLayer(r,t,Me),r.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),R=new Er(x.framebufferWidth,x.framebufferHeight,{format:ka,type:Va,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(d),h=null,c=await r.requestReferenceSpace(f),we.setContext(r),we.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function z(te){for(let ge=0;ge<te.removed.length;ge++){const Me=te.removed[ge],Oe=P.indexOf(Me);Oe>=0&&(P[Oe]=null,L[Oe].disconnect(Me))}for(let ge=0;ge<te.added.length;ge++){const Me=te.added[ge];let Oe=P.indexOf(Me);if(Oe===-1){for(let Ze=0;Ze<L.length;Ze++)if(Ze>=P.length){P.push(Me),Oe=Ze;break}else if(P[Ze]===null){P[Ze]=Me,Oe=Ze;break}if(Oe===-1)break}const Je=L[Oe];Je&&Je.connect(Me)}}const ie=new he,de=new he;function G(te,ge,Me){ie.setFromMatrixPosition(ge.matrixWorld),de.setFromMatrixPosition(Me.matrixWorld);const Oe=ie.distanceTo(de),Je=ge.projectionMatrix.elements,Ze=Me.projectionMatrix.elements,Lt=Je[14]/(Je[10]-1),qe=Je[14]/(Je[10]+1),st=(Je[9]+1)/Je[5],vt=(Je[9]-1)/Je[5],ot=(Je[8]-1)/Je[0],ue=(Ze[8]+1)/Ze[0],Y=Lt*ot,Zt=Lt*ue,Tt=Oe/(-ot+ue),dt=Tt*-ot;if(ge.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(dt),te.translateZ(Tt),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Je[10]===-1)te.projectionMatrix.copy(ge.projectionMatrix),te.projectionMatrixInverse.copy(ge.projectionMatrixInverse);else{const je=Lt+Tt,B=qe+Tt,C=Y-dt,K=Zt+(Oe-dt),ve=st*qe/B*je,xe=vt*qe/B*je;te.projectionMatrix.makePerspective(C,K,ve,xe,je,B),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function I(te,ge){ge===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ge.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(r===null)return;let ge=te.near,Me=te.far;y.texture!==null&&(y.depthNear>0&&(ge=y.depthNear),y.depthFar>0&&(Me=y.depthFar)),k.near=q.near=w.near=ge,k.far=q.far=w.far=Me,(J!==k.near||ee!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),J=k.near,ee=k.far),k.layers.mask=te.layers.mask|6,w.layers.mask=k.layers.mask&-5,q.layers.mask=k.layers.mask&-3;const Oe=te.parent,Je=k.cameras;I(k,Oe);for(let Ze=0;Ze<Je.length;Ze++)I(Je[Ze],Oe);Je.length===2?G(k,w,q):k.projectionMatrix.copy(w.projectionMatrix),W(te,k,Oe)};function W(te,ge,Me){Me===null?te.matrix.copy(ge.matrixWorld):(te.matrix.copy(Me.matrixWorld),te.matrix.invert(),te.matrix.multiply(ge.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ge.projectionMatrix),te.projectionMatrixInverse.copy(ge.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=G_*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(v===null&&x===null))return d},this.setFoveation=function(te){d=te,v!==null&&(v.fixedFoveation=te),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=te)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(k)},this.getCameraTexture=function(te){return S[te]};let le=null;function ye(te,ge){if(m=ge.getViewerPose(h||c),b=ge,m!==null){const Me=m.views;x!==null&&(e.setRenderTargetFramebuffer(R,x.framebuffer),e.setRenderTarget(R));let Oe=!1;Me.length!==k.cameras.length&&(k.cameras.length=0,Oe=!0);for(let qe=0;qe<Me.length;qe++){const st=Me[qe];let vt=null;if(x!==null)vt=x.getViewport(st);else{const ue=_.getViewSubImage(v,st);vt=ue.viewport,qe===0&&(e.setRenderTargetTextures(R,ue.colorTexture,ue.depthStencilTexture),e.setRenderTarget(R))}let ot=H[qe];ot===void 0&&(ot=new ir,ot.layers.enable(qe),ot.viewport=new Gn,H[qe]=ot),ot.matrix.fromArray(st.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(st.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(vt.x,vt.y,vt.width,vt.height),qe===0&&(k.matrix.copy(ot.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Oe===!0&&k.cameras.push(ot)}const Je=r.enabledFeatures;if(Je&&Je.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&M){_=i.getBinding();const qe=_.getDepthInformation(Me[0]);qe&&qe.isValid&&qe.texture&&y.init(qe,r.renderState)}if(Je&&Je.includes("camera-access")&&M){e.state.unbindTexture(),_=i.getBinding();for(let qe=0;qe<Me.length;qe++){const st=Me[qe].camera;if(st){let vt=S[st];vt||(vt=new kT,S[st]=vt);const ot=_.getCameraImage(st);vt.sourceTexture=ot}}}}for(let Me=0;Me<L.length;Me++){const Oe=P[Me],Je=L[Me];Oe!==null&&Je!==void 0&&Je.update(Oe,ge,h||c)}le&&le(te,ge),ge.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ge}),b=null}const we=new jT;we.setAnimationLoop(ye),this.setAnimationLoop=function(te){le=te},this.dispose=function(){}}}const Io=new ms,U4=new ei;function L4(s,e){function t(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function i(y,S){S.color.getRGB(y.fogColor.value,XT(s)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function r(y,S,A,N,R){S.isMeshBasicMaterial?l(y,S):S.isMeshLambertMaterial?(l(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(l(y,S),_(y,S)):S.isMeshPhongMaterial?(l(y,S),m(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(l(y,S),v(y,S),S.isMeshPhysicalMaterial&&x(y,S,R)):S.isMeshMatcapMaterial?(l(y,S),b(y,S)):S.isMeshDepthMaterial?l(y,S):S.isMeshDistanceMaterial?(l(y,S),M(y,S)):S.isMeshNormalMaterial?l(y,S):S.isLineBasicMaterial?(c(y,S),S.isLineDashedMaterial&&f(y,S)):S.isPointsMaterial?d(y,S,A,N):S.isSpriteMaterial?h(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function l(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,t(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===Ji&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,t(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===Ji&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,t(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,t(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const A=e.get(S),N=A.envMap,R=A.envMapRotation;N&&(y.envMap.value=N,Io.copy(R),Io.x*=-1,Io.y*=-1,Io.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Io.y*=-1,Io.z*=-1),y.envMapRotation.value.setFromMatrix4(U4.makeRotationFromEuler(Io)),y.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,y.aoMapTransform))}function c(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform))}function f(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function d(y,S,A,N){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*A,y.scale.value=N*.5,S.map&&(y.map.value=S.map,t(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function h(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function m(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function _(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function v(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function x(y,S,A){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Ji&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=A.texture,y.transmissionSamplerSize.value.set(A.width,A.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,S){S.matcap&&(y.matcap.value=S.matcap)}function M(y,S){const A=e.get(S).light;y.referencePosition.value.setFromMatrixPosition(A.matrixWorld),y.nearDistance.value=A.shadow.camera.near,y.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function O4(s,e,t,i){let r={},l={},c=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function d(A,N){const R=N.program;i.uniformBlockBinding(A,R)}function h(A,N){let R=r[A.id];R===void 0&&(b(A),R=m(A),r[A.id]=R,A.addEventListener("dispose",y));const L=N.program;i.updateUBOMapping(A,L);const P=e.render.frame;l[A.id]!==P&&(v(A),l[A.id]=P)}function m(A){const N=_();A.__bindingPointIndex=N;const R=s.createBuffer(),L=A.__size,P=A.usage;return s.bindBuffer(s.UNIFORM_BUFFER,R),s.bufferData(s.UNIFORM_BUFFER,L,P),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,N,R),R}function _(){for(let A=0;A<f;A++)if(c.indexOf(A)===-1)return c.push(A),A;return en("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(A){const N=r[A.id],R=A.uniforms,L=A.__cache;s.bindBuffer(s.UNIFORM_BUFFER,N);for(let P=0,D=R.length;P<D;P++){const T=Array.isArray(R[P])?R[P]:[R[P]];for(let w=0,q=T.length;w<q;w++){const H=T[w];if(x(H,P,w,L)===!0){const k=H.__offset,J=Array.isArray(H.value)?H.value:[H.value];let ee=0;for(let $=0;$<J.length;$++){const F=J[$],z=M(F);typeof F=="number"||typeof F=="boolean"?(H.__data[0]=F,s.bufferSubData(s.UNIFORM_BUFFER,k+ee,H.__data)):F.isMatrix3?(H.__data[0]=F.elements[0],H.__data[1]=F.elements[1],H.__data[2]=F.elements[2],H.__data[3]=0,H.__data[4]=F.elements[3],H.__data[5]=F.elements[4],H.__data[6]=F.elements[5],H.__data[7]=0,H.__data[8]=F.elements[6],H.__data[9]=F.elements[7],H.__data[10]=F.elements[8],H.__data[11]=0):(F.toArray(H.__data,ee),ee+=z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,k,H.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function x(A,N,R,L){const P=A.value,D=N+"_"+R;if(L[D]===void 0)return typeof P=="number"||typeof P=="boolean"?L[D]=P:L[D]=P.clone(),!0;{const T=L[D];if(typeof P=="number"||typeof P=="boolean"){if(T!==P)return L[D]=P,!0}else if(T.equals(P)===!1)return T.copy(P),!0}return!1}function b(A){const N=A.uniforms;let R=0;const L=16;for(let D=0,T=N.length;D<T;D++){const w=Array.isArray(N[D])?N[D]:[N[D]];for(let q=0,H=w.length;q<H;q++){const k=w[q],J=Array.isArray(k.value)?k.value:[k.value];for(let ee=0,$=J.length;ee<$;ee++){const F=J[ee],z=M(F),ie=R%L,de=ie%z.boundary,G=ie+de;R+=de,G!==0&&L-G<z.storage&&(R+=L-G),k.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=R,R+=z.storage}}}const P=R%L;return P>0&&(R+=L-P),A.__size=R,A.__cache={},this}function M(A){const N={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(N.boundary=4,N.storage=4):A.isVector2?(N.boundary=8,N.storage=8):A.isVector3||A.isColor?(N.boundary=16,N.storage=12):A.isVector4?(N.boundary=16,N.storage=16):A.isMatrix3?(N.boundary=48,N.storage=48):A.isMatrix4?(N.boundary=64,N.storage=64):A.isTexture?Et("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Et("WebGLRenderer: Unsupported uniform value type.",A),N}function y(A){const N=A.target;N.removeEventListener("dispose",y);const R=c.indexOf(N.__bindingPointIndex);c.splice(R,1),s.deleteBuffer(r[N.id]),delete r[N.id],delete l[N.id]}function S(){for(const A in r)s.deleteBuffer(r[A]);c=[],r={},l={}}return{bind:d,update:h,dispose:S}}const P4=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let hr=null;function F4(){return hr===null&&(hr=new wU(P4,16,16,Au,hs),hr.name="DFG_LUT",hr.minFilter=$n,hr.magFilter=$n,hr.wrapS=rs,hr.wrapT=rs,hr.generateMipmaps=!1,hr.needsUpdate=!0),hr}class I4{constructor(e={}){const{canvas:t=rU(),context:i=null,depth:r=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:x=Va}=e;this.isWebGLRenderer=!0;let b;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=i.getContextAttributes().alpha}else b=c;const M=x,y=new Set([Ov,Lv,Uv]),S=new Set([Va,Cr,gf,_f,Dv,Nv]),A=new Uint32Array(4),N=new Int32Array(4);let R=null,L=null;const P=[],D=[];let T=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Mr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let q=!1;this._outputColorSpace=Ba;let H=0,k=0,J=null,ee=-1,$=null;const F=new Gn,z=new Gn;let ie=null;const de=new mn(0);let G=0,I=t.width,W=t.height,le=1,ye=null,we=null;const te=new Gn(0,0,I,W),ge=new Gn(0,0,I,W);let Me=!1;const Oe=new GT;let Je=!1,Ze=!1;const Lt=new ei,qe=new he,st=new Gn,vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ot=!1;function ue(){return J===null?le:1}let Y=i;function Zt(U,Z){return t.getContext(U,Z)}try{const U={alpha:!0,depth:r,stencil:l,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:m,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Rv}`),t.addEventListener("webglcontextlost",We,!1),t.addEventListener("webglcontextrestored",ut,!1),t.addEventListener("webglcontextcreationerror",Xt,!1),Y===null){const Z="webgl2";if(Y=Zt(Z,U),Y===null)throw Zt(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(U){throw en("WebGLRenderer: "+U.message),U}let Tt,dt,je,B,C,K,ve,xe,pe,Ve,De,at,Ye,Ce,Ae,Ge,Ie,ze,gt,X,Ne,Re,Pe;function Te(){Tt=new IP(Y),Tt.init(),Ne=new C4(Y,Tt),dt=new wP(Y,Tt,e,Ne),je=new T4(Y,Tt),dt.reversedDepthBuffer&&v&&je.buffers.depth.setReversed(!0),B=new HP(Y),C=new f4,K=new A4(Y,Tt,je,C,dt,Ne,B),ve=new FP(w),xe=new WU(Y),Re=new CP(Y,xe),pe=new zP(Y,xe,B,Re),Ve=new VP(Y,pe,xe,Re,B),ze=new GP(Y,dt,K),Ae=new DP(C),De=new c4(w,ve,Tt,dt,Re,Ae),at=new L4(w,C),Ye=new h4,Ce=new x4(Tt),Ie=new AP(w,ve,je,Ve,b,d),Ge=new E4(w,Ve,dt),Pe=new O4(Y,B,dt,je),gt=new RP(Y,Tt,B),X=new BP(Y,Tt,B),B.programs=De.programs,w.capabilities=dt,w.extensions=Tt,w.properties=C,w.renderLists=Ye,w.shadowMap=Ge,w.state=je,w.info=B}Te(),M!==Va&&(T=new XP(M,t.width,t.height,r,l));const _e=new N4(w,Y);this.xr=_e,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const U=Tt.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){const U=Tt.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return le},this.setPixelRatio=function(U){U!==void 0&&(le=U,this.setSize(I,W,!1))},this.getSize=function(U){return U.set(I,W)},this.setSize=function(U,Z,ce=!0){if(_e.isPresenting){Et("WebGLRenderer: Can't change size while VR device is presenting.");return}I=U,W=Z,t.width=Math.floor(U*le),t.height=Math.floor(Z*le),ce===!0&&(t.style.width=U+"px",t.style.height=Z+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,U,Z)},this.getDrawingBufferSize=function(U){return U.set(I*le,W*le).floor()},this.setDrawingBufferSize=function(U,Z,ce){I=U,W=Z,le=ce,t.width=Math.floor(U*ce),t.height=Math.floor(Z*ce),this.setViewport(0,0,U,Z)},this.setEffects=function(U){if(M===Va){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(U){for(let Z=0;Z<U.length;Z++)if(U[Z].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(U||[])},this.getCurrentViewport=function(U){return U.copy(F)},this.getViewport=function(U){return U.copy(te)},this.setViewport=function(U,Z,ce,se){U.isVector4?te.set(U.x,U.y,U.z,U.w):te.set(U,Z,ce,se),je.viewport(F.copy(te).multiplyScalar(le).round())},this.getScissor=function(U){return U.copy(ge)},this.setScissor=function(U,Z,ce,se){U.isVector4?ge.set(U.x,U.y,U.z,U.w):ge.set(U,Z,ce,se),je.scissor(z.copy(ge).multiplyScalar(le).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(U){je.setScissorTest(Me=U)},this.setOpaqueSort=function(U){ye=U},this.setTransparentSort=function(U){we=U},this.getClearColor=function(U){return U.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor(...arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha(...arguments)},this.clear=function(U=!0,Z=!0,ce=!0){let se=0;if(U){let ae=!1;if(J!==null){const Le=J.texture.format;ae=y.has(Le)}if(ae){const Le=J.texture.type,He=S.has(Le),Fe=Ie.getClearColor(),Ke=Ie.getClearAlpha(),Qe=Fe.r,_t=Fe.g,bt=Fe.b;He?(A[0]=Qe,A[1]=_t,A[2]=bt,A[3]=Ke,Y.clearBufferuiv(Y.COLOR,0,A)):(N[0]=Qe,N[1]=_t,N[2]=bt,N[3]=Ke,Y.clearBufferiv(Y.COLOR,0,N))}else se|=Y.COLOR_BUFFER_BIT}Z&&(se|=Y.DEPTH_BUFFER_BIT),ce&&(se|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),se!==0&&Y.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",We,!1),t.removeEventListener("webglcontextrestored",ut,!1),t.removeEventListener("webglcontextcreationerror",Xt,!1),Ie.dispose(),Ye.dispose(),Ce.dispose(),C.dispose(),ve.dispose(),Ve.dispose(),Re.dispose(),Pe.dispose(),De.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",mt),_e.removeEventListener("sessionend",yn),xt.stop()};function We(U){U.preventDefault(),kb("WebGLRenderer: Context Lost."),q=!0}function ut(){kb("WebGLRenderer: Context Restored."),q=!1;const U=B.autoReset,Z=Ge.enabled,ce=Ge.autoUpdate,se=Ge.needsUpdate,ae=Ge.type;Te(),B.autoReset=U,Ge.enabled=Z,Ge.autoUpdate=ce,Ge.needsUpdate=se,Ge.type=ae}function Xt(U){en("WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function ke(U){const Z=U.target;Z.removeEventListener("dispose",ke),et(Z)}function et(U){At(U),C.remove(U)}function At(U){const Z=C.get(U).programs;Z!==void 0&&(Z.forEach(function(ce){De.releaseProgram(ce)}),U.isShaderMaterial&&De.releaseShaderCache(U))}this.renderBufferDirect=function(U,Z,ce,se,ae,Le){Z===null&&(Z=vt);const He=ae.isMesh&&ae.matrixWorld.determinant()<0,Fe=Ni(U,Z,ce,se,ae);je.setMaterial(se,He);let Ke=ce.index,Qe=1;if(se.wireframe===!0){if(Ke=pe.getWireframeAttribute(ce),Ke===void 0)return;Qe=2}const _t=ce.drawRange,bt=ce.attributes.position;let $e=_t.start*Qe,Dt=(_t.start+_t.count)*Qe;Le!==null&&($e=Math.max($e,Le.start*Qe),Dt=Math.min(Dt,(Le.start+Le.count)*Qe)),Ke!==null?($e=Math.max($e,0),Dt=Math.min(Dt,Ke.count)):bt!=null&&($e=Math.max($e,0),Dt=Math.min(Dt,bt.count));const Cn=Dt-$e;if(Cn<0||Cn===1/0)return;Re.setup(ae,se,Fe,ce,Ke);let Rn,Qt=gt;if(Ke!==null&&(Rn=xe.get(Ke),Qt=X,Qt.setIndex(Rn)),ae.isMesh)se.wireframe===!0?(je.setLineWidth(se.wireframeLinewidth*ue()),Qt.setMode(Y.LINES)):Qt.setMode(Y.TRIANGLES);else if(ae.isLine){let ti=se.linewidth;ti===void 0&&(ti=1),je.setLineWidth(ti*ue()),ae.isLineSegments?Qt.setMode(Y.LINES):ae.isLineLoop?Qt.setMode(Y.LINE_LOOP):Qt.setMode(Y.LINE_STRIP)}else ae.isPoints?Qt.setMode(Y.POINTS):ae.isSprite&&Qt.setMode(Y.TRIANGLES);if(ae.isBatchedMesh)if(ae._multiDrawInstances!==null)ep("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Qt.renderMultiDrawInstances(ae._multiDrawStarts,ae._multiDrawCounts,ae._multiDrawCount,ae._multiDrawInstances);else if(Tt.get("WEBGL_multi_draw"))Qt.renderMultiDraw(ae._multiDrawStarts,ae._multiDrawCounts,ae._multiDrawCount);else{const ti=ae._multiDrawStarts,it=ae._multiDrawCounts,Ui=ae._multiDrawCount,yt=Ke?xe.get(Ke).bytesPerElement:1,Li=C.get(se).currentProgram.getUniforms();for(let aa=0;aa<Ui;aa++)Li.setValue(Y,"_gl_DrawID",aa),Qt.render(ti[aa]/yt,it[aa])}else if(ae.isInstancedMesh)Qt.renderInstances($e,Cn,ae.count);else if(ce.isInstancedBufferGeometry){const ti=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,it=Math.min(ce.instanceCount,ti);Qt.renderInstances($e,Cn,it)}else Qt.render($e,Cn)};function Be(U,Z,ce){U.transparent===!0&&U.side===is&&U.forceSinglePass===!1?(U.side=Ji,U.needsUpdate=!0,kn(U,Z,ce),U.side=uo,U.needsUpdate=!0,kn(U,Z,ce),U.side=is):kn(U,Z,ce)}this.compile=function(U,Z,ce=null){ce===null&&(ce=U),L=Ce.get(ce),L.init(Z),D.push(L),ce.traverseVisible(function(ae){ae.isLight&&ae.layers.test(Z.layers)&&(L.pushLight(ae),ae.castShadow&&L.pushShadow(ae))}),U!==ce&&U.traverseVisible(function(ae){ae.isLight&&ae.layers.test(Z.layers)&&(L.pushLight(ae),ae.castShadow&&L.pushShadow(ae))}),L.setupLights();const se=new Set;return U.traverse(function(ae){if(!(ae.isMesh||ae.isPoints||ae.isLine||ae.isSprite))return;const Le=ae.material;if(Le)if(Array.isArray(Le))for(let He=0;He<Le.length;He++){const Fe=Le[He];Be(Fe,ce,ae),se.add(Fe)}else Be(Le,ce,ae),se.add(Le)}),L=D.pop(),se},this.compileAsync=function(U,Z,ce=null){const se=this.compile(U,Z,ce);return new Promise(ae=>{function Le(){if(se.forEach(function(He){C.get(He).currentProgram.isReady()&&se.delete(He)}),se.size===0){ae(U);return}setTimeout(Le,10)}Tt.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let pt=null;function lt(U){pt&&pt(U)}function mt(){xt.stop()}function yn(){xt.start()}const xt=new jT;xt.setAnimationLoop(lt),typeof self<"u"&&xt.setContext(self),this.setAnimationLoop=function(U){pt=U,_e.setAnimationLoop(U),U===null?xt.stop():xt.start()},_e.addEventListener("sessionstart",mt),_e.addEventListener("sessionend",yn),this.render=function(U,Z){if(Z!==void 0&&Z.isCamera!==!0){en("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(q===!0)return;const ce=_e.enabled===!0&&_e.isPresenting===!0,se=T!==null&&(J===null||ce)&&T.begin(w,J);if(U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(Z),Z=_e.getCamera()),U.isScene===!0&&U.onBeforeRender(w,U,Z,J),L=Ce.get(U,D.length),L.init(Z),D.push(L),Lt.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),Oe.setFromProjectionMatrix(Lt,yr,Z.reversedDepth),Ze=this.localClippingEnabled,Je=Ae.init(this.clippingPlanes,Ze),R=Ye.get(U,P.length),R.init(),P.push(R),_e.enabled===!0&&_e.isPresenting===!0){const He=w.xr.getDepthSensingMesh();He!==null&&un(He,Z,-1/0,w.sortObjects)}un(U,Z,0,w.sortObjects),R.finish(),w.sortObjects===!0&&R.sort(ye,we),ot=_e.enabled===!1||_e.isPresenting===!1||_e.hasDepthSensing()===!1,ot&&Ie.addToRenderList(R,U),this.info.render.frame++,Je===!0&&Ae.beginShadows();const ae=L.state.shadowsArray;if(Ge.render(ae,U,Z),Je===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset(),(se&&T.hasRenderPass())===!1){const He=R.opaque,Fe=R.transmissive;if(L.setupLights(),Z.isArrayCamera){const Ke=Z.cameras;if(Fe.length>0)for(let Qe=0,_t=Ke.length;Qe<_t;Qe++){const bt=Ke[Qe];Ct(He,Fe,U,bt)}ot&&Ie.render(U);for(let Qe=0,_t=Ke.length;Qe<_t;Qe++){const bt=Ke[Qe];cn(R,U,bt,bt.viewport)}}else Fe.length>0&&Ct(He,Fe,U,Z),ot&&Ie.render(U),cn(R,U,Z)}J!==null&&k===0&&(K.updateMultisampleRenderTarget(J),K.updateRenderTargetMipmap(J)),se&&T.end(w),U.isScene===!0&&U.onAfterRender(w,U,Z),Re.resetDefaultState(),ee=-1,$=null,D.pop(),D.length>0?(L=D[D.length-1],Je===!0&&Ae.setGlobalState(w.clippingPlanes,L.state.camera)):L=null,P.pop(),P.length>0?R=P[P.length-1]:R=null};function un(U,Z,ce,se){if(U.visible===!1)return;if(U.layers.test(Z.layers)){if(U.isGroup)ce=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(Z);else if(U.isLight)L.pushLight(U),U.castShadow&&L.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||Oe.intersectsSprite(U)){se&&st.setFromMatrixPosition(U.matrixWorld).applyMatrix4(Lt);const He=Ve.update(U),Fe=U.material;Fe.visible&&R.push(U,He,Fe,ce,st.z,null)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||Oe.intersectsObject(U))){const He=Ve.update(U),Fe=U.material;if(se&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),st.copy(U.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),st.copy(He.boundingSphere.center)),st.applyMatrix4(U.matrixWorld).applyMatrix4(Lt)),Array.isArray(Fe)){const Ke=He.groups;for(let Qe=0,_t=Ke.length;Qe<_t;Qe++){const bt=Ke[Qe],$e=Fe[bt.materialIndex];$e&&$e.visible&&R.push(U,He,$e,ce,st.z,bt)}}else Fe.visible&&R.push(U,He,Fe,ce,st.z,null)}}const Le=U.children;for(let He=0,Fe=Le.length;He<Fe;He++)un(Le[He],Z,ce,se)}function cn(U,Z,ce,se){const{opaque:ae,transmissive:Le,transparent:He}=U;L.setupLightsView(ce),Je===!0&&Ae.setGlobalState(w.clippingPlanes,ce),se&&je.viewport(F.copy(se)),ae.length>0&&St(ae,Z,ce),Le.length>0&&St(Le,Z,ce),He.length>0&&St(He,Z,ce),je.buffers.depth.setTest(!0),je.buffers.depth.setMask(!0),je.buffers.color.setMask(!0),je.setPolygonOffset(!1)}function Ct(U,Z,ce,se){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[se.id]===void 0){const $e=Tt.has("EXT_color_buffer_half_float")||Tt.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[se.id]=new Er(1,1,{generateMipmaps:!0,type:$e?hs:Va,minFilter:Yo,samples:Math.max(4,dt.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Kt.workingColorSpace})}const Le=L.state.transmissionRenderTarget[se.id],He=se.viewport||F;Le.setSize(He.z*w.transmissionResolutionScale,He.w*w.transmissionResolutionScale);const Fe=w.getRenderTarget(),Ke=w.getActiveCubeFace(),Qe=w.getActiveMipmapLevel();w.setRenderTarget(Le),w.getClearColor(de),G=w.getClearAlpha(),G<1&&w.setClearColor(16777215,.5),w.clear(),ot&&Ie.render(ce);const _t=w.toneMapping;w.toneMapping=Mr;const bt=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),L.setupLightsView(se),Je===!0&&Ae.setGlobalState(w.clippingPlanes,se),St(U,ce,se),K.updateMultisampleRenderTarget(Le),K.updateRenderTargetMipmap(Le),Tt.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let Dt=0,Cn=Z.length;Dt<Cn;Dt++){const Rn=Z[Dt],{object:Qt,geometry:ti,material:it,group:Ui}=Rn;if(it.side===is&&Qt.layers.test(se.layers)){const yt=it.side;it.side=Ji,it.needsUpdate=!0,zt(Qt,ce,se,ti,it,Ui),it.side=yt,it.needsUpdate=!0,$e=!0}}$e===!0&&(K.updateMultisampleRenderTarget(Le),K.updateRenderTargetMipmap(Le))}w.setRenderTarget(Fe,Ke,Qe),w.setClearColor(de,G),bt!==void 0&&(se.viewport=bt),w.toneMapping=_t}function St(U,Z,ce){const se=Z.isScene===!0?Z.overrideMaterial:null;for(let ae=0,Le=U.length;ae<Le;ae++){const He=U[ae],{object:Fe,geometry:Ke,group:Qe}=He;let _t=He.material;_t.allowOverride===!0&&se!==null&&(_t=se),Fe.layers.test(ce.layers)&&zt(Fe,Z,ce,Ke,_t,Qe)}}function zt(U,Z,ce,se,ae,Le){U.onBeforeRender(w,Z,ce,se,ae,Le),U.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),ae.onBeforeRender(w,Z,ce,se,U,Le),ae.transparent===!0&&ae.side===is&&ae.forceSinglePass===!1?(ae.side=Ji,ae.needsUpdate=!0,w.renderBufferDirect(ce,Z,se,ae,U,Le),ae.side=uo,ae.needsUpdate=!0,w.renderBufferDirect(ce,Z,se,ae,U,Le),ae.side=is):w.renderBufferDirect(ce,Z,se,ae,U,Le),U.onAfterRender(w,Z,ce,se,ae,Le)}function kn(U,Z,ce){Z.isScene!==!0&&(Z=vt);const se=C.get(U),ae=L.state.lights,Le=L.state.shadowsArray,He=ae.state.version,Fe=De.getParameters(U,ae.state,Le,Z,ce),Ke=De.getProgramCacheKey(Fe);let Qe=se.programs;se.environment=U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial?Z.environment:null,se.fog=Z.fog;const _t=U.isMeshStandardMaterial||U.isMeshLambertMaterial&&!U.envMap||U.isMeshPhongMaterial&&!U.envMap;se.envMap=ve.get(U.envMap||se.environment,_t),se.envMapRotation=se.environment!==null&&U.envMap===null?Z.environmentRotation:U.envMapRotation,Qe===void 0&&(U.addEventListener("dispose",ke),Qe=new Map,se.programs=Qe);let bt=Qe.get(Ke);if(bt!==void 0){if(se.currentProgram===bt&&se.lightsStateVersion===He)return oi(U,Fe),bt}else Fe.uniforms=De.getUniforms(U),U.onBeforeCompile(Fe,w),bt=De.acquireProgram(Fe,Ke),Qe.set(Ke,bt),se.uniforms=Fe.uniforms;const $e=se.uniforms;return(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&($e.clippingPlanes=Ae.uniform),oi(U,Fe),se.needsLights=Nn(U),se.lightsStateVersion=He,se.needsLights&&($e.ambientLightColor.value=ae.state.ambient,$e.lightProbe.value=ae.state.probe,$e.directionalLights.value=ae.state.directional,$e.directionalLightShadows.value=ae.state.directionalShadow,$e.spotLights.value=ae.state.spot,$e.spotLightShadows.value=ae.state.spotShadow,$e.rectAreaLights.value=ae.state.rectArea,$e.ltc_1.value=ae.state.rectAreaLTC1,$e.ltc_2.value=ae.state.rectAreaLTC2,$e.pointLights.value=ae.state.point,$e.pointLightShadows.value=ae.state.pointShadow,$e.hemisphereLights.value=ae.state.hemi,$e.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,$e.spotLightMatrix.value=ae.state.spotLightMatrix,$e.spotLightMap.value=ae.state.spotLightMap,$e.pointShadowMatrix.value=ae.state.pointShadowMatrix),se.currentProgram=bt,se.uniformsList=null,bt}function fn(U){if(U.uniformsList===null){const Z=U.currentProgram.getUniforms();U.uniformsList=zh.seqWithValue(Z.seq,U.uniforms)}return U.uniformsList}function oi(U,Z){const ce=C.get(U);ce.outputColorSpace=Z.outputColorSpace,ce.batching=Z.batching,ce.batchingColor=Z.batchingColor,ce.instancing=Z.instancing,ce.instancingColor=Z.instancingColor,ce.instancingMorph=Z.instancingMorph,ce.skinning=Z.skinning,ce.morphTargets=Z.morphTargets,ce.morphNormals=Z.morphNormals,ce.morphColors=Z.morphColors,ce.morphTargetsCount=Z.morphTargetsCount,ce.numClippingPlanes=Z.numClippingPlanes,ce.numIntersection=Z.numClipIntersection,ce.vertexAlphas=Z.vertexAlphas,ce.vertexTangents=Z.vertexTangents,ce.toneMapping=Z.toneMapping}function Ni(U,Z,ce,se,ae){Z.isScene!==!0&&(Z=vt),K.resetTextureUnits();const Le=Z.fog,He=se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial?Z.environment:null,Fe=J===null?w.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Cu,Ke=se.isMeshStandardMaterial||se.isMeshLambertMaterial&&!se.envMap||se.isMeshPhongMaterial&&!se.envMap,Qe=ve.get(se.envMap||He,Ke),_t=se.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,bt=!!ce.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),$e=!!ce.morphAttributes.position,Dt=!!ce.morphAttributes.normal,Cn=!!ce.morphAttributes.color;let Rn=Mr;se.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Rn=w.toneMapping);const Qt=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,ti=Qt!==void 0?Qt.length:0,it=C.get(se),Ui=L.state.lights;if(Je===!0&&(Ze===!0||U!==$)){const Wn=U===$&&se.id===ee;Ae.setState(se,U,Wn)}let yt=!1;se.version===it.__version?(it.needsLights&&it.lightsStateVersion!==Ui.state.version||it.outputColorSpace!==Fe||ae.isBatchedMesh&&it.batching===!1||!ae.isBatchedMesh&&it.batching===!0||ae.isBatchedMesh&&it.batchingColor===!0&&ae.colorTexture===null||ae.isBatchedMesh&&it.batchingColor===!1&&ae.colorTexture!==null||ae.isInstancedMesh&&it.instancing===!1||!ae.isInstancedMesh&&it.instancing===!0||ae.isSkinnedMesh&&it.skinning===!1||!ae.isSkinnedMesh&&it.skinning===!0||ae.isInstancedMesh&&it.instancingColor===!0&&ae.instanceColor===null||ae.isInstancedMesh&&it.instancingColor===!1&&ae.instanceColor!==null||ae.isInstancedMesh&&it.instancingMorph===!0&&ae.morphTexture===null||ae.isInstancedMesh&&it.instancingMorph===!1&&ae.morphTexture!==null||it.envMap!==Qe||se.fog===!0&&it.fog!==Le||it.numClippingPlanes!==void 0&&(it.numClippingPlanes!==Ae.numPlanes||it.numIntersection!==Ae.numIntersection)||it.vertexAlphas!==_t||it.vertexTangents!==bt||it.morphTargets!==$e||it.morphNormals!==Dt||it.morphColors!==Cn||it.toneMapping!==Rn||it.morphTargetsCount!==ti)&&(yt=!0):(yt=!0,it.__version=se.version);let Li=it.currentProgram;yt===!0&&(Li=kn(se,Z,ae));let aa=!1,Ya=!1,ra=!1;const nn=Li.getUniforms(),Xn=it.uniforms;if(je.useProgram(Li.program)&&(aa=!0,Ya=!0,ra=!0),se.id!==ee&&(ee=se.id,Ya=!0),aa||$!==U){je.buffers.depth.getReversed()&&U.reversedDepth!==!0&&(U._reversedDepth=!0,U.updateProjectionMatrix()),nn.setValue(Y,"projectionMatrix",U.projectionMatrix),nn.setValue(Y,"viewMatrix",U.matrixWorldInverse);const qa=nn.map.cameraPosition;qa!==void 0&&qa.setValue(Y,qe.setFromMatrixPosition(U.matrixWorld)),dt.logarithmicDepthBuffer&&nn.setValue(Y,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&nn.setValue(Y,"isOrthographic",U.isOrthographicCamera===!0),$!==U&&($=U,Ya=!0,ra=!0)}if(it.needsLights&&(Ui.state.directionalShadowMap.length>0&&nn.setValue(Y,"directionalShadowMap",Ui.state.directionalShadowMap,K),Ui.state.spotShadowMap.length>0&&nn.setValue(Y,"spotShadowMap",Ui.state.spotShadowMap,K),Ui.state.pointShadowMap.length>0&&nn.setValue(Y,"pointShadowMap",Ui.state.pointShadowMap,K)),ae.isSkinnedMesh){nn.setOptional(Y,ae,"bindMatrix"),nn.setOptional(Y,ae,"bindMatrixInverse");const Wn=ae.skeleton;Wn&&(Wn.boneTexture===null&&Wn.computeBoneTexture(),nn.setValue(Y,"boneTexture",Wn.boneTexture,K))}ae.isBatchedMesh&&(nn.setOptional(Y,ae,"batchingTexture"),nn.setValue(Y,"batchingTexture",ae._matricesTexture,K),nn.setOptional(Y,ae,"batchingIdTexture"),nn.setValue(Y,"batchingIdTexture",ae._indirectTexture,K),nn.setOptional(Y,ae,"batchingColorTexture"),ae._colorsTexture!==null&&nn.setValue(Y,"batchingColorTexture",ae._colorsTexture,K));const Oi=ce.morphAttributes;if((Oi.position!==void 0||Oi.normal!==void 0||Oi.color!==void 0)&&ze.update(ae,ce,Li),(Ya||it.receiveShadow!==ae.receiveShadow)&&(it.receiveShadow=ae.receiveShadow,nn.setValue(Y,"receiveShadow",ae.receiveShadow)),(se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial)&&se.envMap===null&&Z.environment!==null&&(Xn.envMapIntensity.value=Z.environmentIntensity),Xn.dfgLUT!==void 0&&(Xn.dfgLUT.value=F4()),Ya&&(nn.setValue(Y,"toneMappingExposure",w.toneMappingExposure),it.needsLights&&Sn(Xn,ra),Le&&se.fog===!0&&at.refreshFogUniforms(Xn,Le),at.refreshMaterialUniforms(Xn,se,le,W,L.state.transmissionRenderTarget[U.id]),zh.upload(Y,fn(it),Xn,K)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(zh.upload(Y,fn(it),Xn,K),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&nn.setValue(Y,"center",ae.center),nn.setValue(Y,"modelViewMatrix",ae.modelViewMatrix),nn.setValue(Y,"normalMatrix",ae.normalMatrix),nn.setValue(Y,"modelMatrix",ae.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const Wn=se.uniformsGroups;for(let qa=0,Dr=Wn.length;qa<Dr;qa++){const fl=Wn[qa];Pe.update(fl,Li),Pe.bind(fl,Li)}}return Li}function Sn(U,Z){U.ambientLightColor.needsUpdate=Z,U.lightProbe.needsUpdate=Z,U.directionalLights.needsUpdate=Z,U.directionalLightShadows.needsUpdate=Z,U.pointLights.needsUpdate=Z,U.pointLightShadows.needsUpdate=Z,U.spotLights.needsUpdate=Z,U.spotLightShadows.needsUpdate=Z,U.rectAreaLights.needsUpdate=Z,U.hemisphereLights.needsUpdate=Z}function Nn(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(U,Z,ce){const se=C.get(U);se.__autoAllocateDepthBuffer=U.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),C.get(U.texture).__webglTexture=Z,C.get(U.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:ce,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(U,Z){const ce=C.get(U);ce.__webglFramebuffer=Z,ce.__useDefaultFramebuffer=Z===void 0};const bn=Y.createFramebuffer();this.setRenderTarget=function(U,Z=0,ce=0){J=U,H=Z,k=ce;let se=null,ae=!1,Le=!1;if(U){const Fe=C.get(U);if(Fe.__useDefaultFramebuffer!==void 0){je.bindFramebuffer(Y.FRAMEBUFFER,Fe.__webglFramebuffer),F.copy(U.viewport),z.copy(U.scissor),ie=U.scissorTest,je.viewport(F),je.scissor(z),je.setScissorTest(ie),ee=-1;return}else if(Fe.__webglFramebuffer===void 0)K.setupRenderTarget(U);else if(Fe.__hasExternalTextures)K.rebindTextures(U,C.get(U.texture).__webglTexture,C.get(U.depthTexture).__webglTexture);else if(U.depthBuffer){const _t=U.depthTexture;if(Fe.__boundDepthTexture!==_t){if(_t!==null&&C.has(_t)&&(U.width!==_t.image.width||U.height!==_t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(U)}}const Ke=U.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(Le=!0);const Qe=C.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(Array.isArray(Qe[Z])?se=Qe[Z][ce]:se=Qe[Z],ae=!0):U.samples>0&&K.useMultisampledRTT(U)===!1?se=C.get(U).__webglMultisampledFramebuffer:Array.isArray(Qe)?se=Qe[ce]:se=Qe,F.copy(U.viewport),z.copy(U.scissor),ie=U.scissorTest}else F.copy(te).multiplyScalar(le).floor(),z.copy(ge).multiplyScalar(le).floor(),ie=Me;if(ce!==0&&(se=bn),je.bindFramebuffer(Y.FRAMEBUFFER,se)&&je.drawBuffers(U,se),je.viewport(F),je.scissor(z),je.setScissorTest(ie),ae){const Fe=C.get(U.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Fe.__webglTexture,ce)}else if(Le){const Fe=Z;for(let Ke=0;Ke<U.textures.length;Ke++){const Qe=C.get(U.textures[Ke]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+Ke,Qe.__webglTexture,ce,Fe)}}else if(U!==null&&ce!==0){const Fe=C.get(U.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Fe.__webglTexture,ce)}ee=-1},this.readRenderTargetPixels=function(U,Z,ce,se,ae,Le,He,Fe=0){if(!(U&&U.isWebGLRenderTarget)){en("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ke=C.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&He!==void 0&&(Ke=Ke[He]),Ke){je.bindFramebuffer(Y.FRAMEBUFFER,Ke);try{const Qe=U.textures[Fe],_t=Qe.format,bt=Qe.type;if(U.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Fe),!dt.textureFormatReadable(_t)){en("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!dt.textureTypeReadable(bt)){en("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=U.width-se&&ce>=0&&ce<=U.height-ae&&Y.readPixels(Z,ce,se,ae,Ne.convert(_t),Ne.convert(bt),Le)}finally{const Qe=J!==null?C.get(J).__webglFramebuffer:null;je.bindFramebuffer(Y.FRAMEBUFFER,Qe)}}},this.readRenderTargetPixelsAsync=async function(U,Z,ce,se,ae,Le,He,Fe=0){if(!(U&&U.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ke=C.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&He!==void 0&&(Ke=Ke[He]),Ke)if(Z>=0&&Z<=U.width-se&&ce>=0&&ce<=U.height-ae){je.bindFramebuffer(Y.FRAMEBUFFER,Ke);const Qe=U.textures[Fe],_t=Qe.format,bt=Qe.type;if(U.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Fe),!dt.textureFormatReadable(_t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!dt.textureTypeReadable(bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $e=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,$e),Y.bufferData(Y.PIXEL_PACK_BUFFER,Le.byteLength,Y.STREAM_READ),Y.readPixels(Z,ce,se,ae,Ne.convert(_t),Ne.convert(bt),0);const Dt=J!==null?C.get(J).__webglFramebuffer:null;je.bindFramebuffer(Y.FRAMEBUFFER,Dt);const Cn=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await sU(Y,Cn,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,$e),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,Le),Y.deleteBuffer($e),Y.deleteSync(Cn),Le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(U,Z=null,ce=0){const se=Math.pow(2,-ce),ae=Math.floor(U.image.width*se),Le=Math.floor(U.image.height*se),He=Z!==null?Z.x:0,Fe=Z!==null?Z.y:0;K.setTexture2D(U,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,ce,0,0,He,Fe,ae,Le),je.unbindTexture()};const Si=Y.createFramebuffer(),Ra=Y.createFramebuffer();this.copyTextureToTexture=function(U,Z,ce=null,se=null,ae=0,Le=0){let He,Fe,Ke,Qe,_t,bt,$e,Dt,Cn;const Rn=U.isCompressedTexture?U.mipmaps[Le]:U.image;if(ce!==null)He=ce.max.x-ce.min.x,Fe=ce.max.y-ce.min.y,Ke=ce.isBox3?ce.max.z-ce.min.z:1,Qe=ce.min.x,_t=ce.min.y,bt=ce.isBox3?ce.min.z:0;else{const Xn=Math.pow(2,-ae);He=Math.floor(Rn.width*Xn),Fe=Math.floor(Rn.height*Xn),U.isDataArrayTexture?Ke=Rn.depth:U.isData3DTexture?Ke=Math.floor(Rn.depth*Xn):Ke=1,Qe=0,_t=0,bt=0}se!==null?($e=se.x,Dt=se.y,Cn=se.z):($e=0,Dt=0,Cn=0);const Qt=Ne.convert(Z.format),ti=Ne.convert(Z.type);let it;Z.isData3DTexture?(K.setTexture3D(Z,0),it=Y.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(K.setTexture2DArray(Z,0),it=Y.TEXTURE_2D_ARRAY):(K.setTexture2D(Z,0),it=Y.TEXTURE_2D),Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,Z.flipY),Y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),Y.pixelStorei(Y.UNPACK_ALIGNMENT,Z.unpackAlignment);const Ui=Y.getParameter(Y.UNPACK_ROW_LENGTH),yt=Y.getParameter(Y.UNPACK_IMAGE_HEIGHT),Li=Y.getParameter(Y.UNPACK_SKIP_PIXELS),aa=Y.getParameter(Y.UNPACK_SKIP_ROWS),Ya=Y.getParameter(Y.UNPACK_SKIP_IMAGES);Y.pixelStorei(Y.UNPACK_ROW_LENGTH,Rn.width),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Rn.height),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,Qe),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,_t),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,bt);const ra=U.isDataArrayTexture||U.isData3DTexture,nn=Z.isDataArrayTexture||Z.isData3DTexture;if(U.isDepthTexture){const Xn=C.get(U),Oi=C.get(Z),Wn=C.get(Xn.__renderTarget),qa=C.get(Oi.__renderTarget);je.bindFramebuffer(Y.READ_FRAMEBUFFER,Wn.__webglFramebuffer),je.bindFramebuffer(Y.DRAW_FRAMEBUFFER,qa.__webglFramebuffer);for(let Dr=0;Dr<Ke;Dr++)ra&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,C.get(U).__webglTexture,ae,bt+Dr),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,C.get(Z).__webglTexture,Le,Cn+Dr)),Y.blitFramebuffer(Qe,_t,He,Fe,$e,Dt,He,Fe,Y.DEPTH_BUFFER_BIT,Y.NEAREST);je.bindFramebuffer(Y.READ_FRAMEBUFFER,null),je.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(ae!==0||U.isRenderTargetTexture||C.has(U)){const Xn=C.get(U),Oi=C.get(Z);je.bindFramebuffer(Y.READ_FRAMEBUFFER,Si),je.bindFramebuffer(Y.DRAW_FRAMEBUFFER,Ra);for(let Wn=0;Wn<Ke;Wn++)ra?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Xn.__webglTexture,ae,bt+Wn):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Xn.__webglTexture,ae),nn?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Oi.__webglTexture,Le,Cn+Wn):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Oi.__webglTexture,Le),ae!==0?Y.blitFramebuffer(Qe,_t,He,Fe,$e,Dt,He,Fe,Y.COLOR_BUFFER_BIT,Y.NEAREST):nn?Y.copyTexSubImage3D(it,Le,$e,Dt,Cn+Wn,Qe,_t,He,Fe):Y.copyTexSubImage2D(it,Le,$e,Dt,Qe,_t,He,Fe);je.bindFramebuffer(Y.READ_FRAMEBUFFER,null),je.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else nn?U.isDataTexture||U.isData3DTexture?Y.texSubImage3D(it,Le,$e,Dt,Cn,He,Fe,Ke,Qt,ti,Rn.data):Z.isCompressedArrayTexture?Y.compressedTexSubImage3D(it,Le,$e,Dt,Cn,He,Fe,Ke,Qt,Rn.data):Y.texSubImage3D(it,Le,$e,Dt,Cn,He,Fe,Ke,Qt,ti,Rn):U.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,Le,$e,Dt,He,Fe,Qt,ti,Rn.data):U.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,Le,$e,Dt,Rn.width,Rn.height,Qt,Rn.data):Y.texSubImage2D(Y.TEXTURE_2D,Le,$e,Dt,He,Fe,Qt,ti,Rn);Y.pixelStorei(Y.UNPACK_ROW_LENGTH,Ui),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,yt),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,Li),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,aa),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,Ya),Le===0&&Z.generateMipmaps&&Y.generateMipmap(it),je.unbindTexture()},this.initRenderTarget=function(U){C.get(U).__webglFramebuffer===void 0&&K.setupRenderTarget(U)},this.initTexture=function(U){U.isCubeTexture?K.setTextureCube(U,0):U.isData3DTexture?K.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?K.setTexture2DArray(U,0):K.setTexture2D(U,0),je.unbindTexture()},this.resetState=function(){H=0,k=0,J=null,je.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Kt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Kt._getUnpackColorSpace()}}const z4="/CloneDongwon/video/hero-1.mp4",B4="/CloneDongwon/video/hero-2.mp4",H4="/CloneDongwon/video/hero-3.mp4",G4=`
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`,V4=`
  varying vec2 vUv;

  uniform sampler2D uTextureCurrent;
  uniform sampler2D uTextureNext;
  uniform float uMix;
  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec2 uTextureAspectCurrent;
  uniform vec2 uTextureAspectNext;

  uniform vec2 uMouse;
  uniform vec2 uPrevMouse;
  uniform float uStrength;
  uniform float uRadius;

  vec2 coverUv(vec2 uv, vec2 screenSize, vec2 textureSize) {
    float screenRatio = screenSize.x / screenSize.y;
    float textureRatio = textureSize.x / textureSize.y;

    vec2 newUv = uv;

    if (screenRatio > textureRatio) {
      float scale = textureRatio / screenRatio;
      newUv.y = (uv.y - 0.5) * scale + 0.5;
    } else {
      float scale = screenRatio / textureRatio;
      newUv.x = (uv.x - 0.5) * scale + 0.5;
    }

    return newUv;
  }

  void main() {
    vec2 uv = vUv;
    vec2 warpedUv = uv;

    vec2 motion = uMouse - uPrevMouse;
    float motionLen = length(motion);

    vec2 dir = motionLen > 0.00001 ? normalize(motion) : vec2(1.0, 0.0);
    vec2 perp = vec2(-dir.y, dir.x);

    vec2 delta = uv - uMouse;
    float dist = length(delta);

    float headRadius = uRadius;
    float wakeLength = uRadius * 3.2;
    float wakeWidth = uRadius * 0.9;

    float head = smoothstep(headRadius, 0.0, dist);
    head = pow(head, 1.9);

    float along = dot(delta, dir);
    float across = dot(delta, perp);

    float behind = max(-along, 0.0);

    float wakeBody = smoothstep(wakeLength, 0.0, behind);
    float wakeSide = exp(-pow(across / wakeWidth, 2.0));
    float wakeFrontCut = 1.0 - smoothstep(-uRadius * 0.2, uRadius * 0.35, along);

    float wake = wakeBody * wakeSide * wakeFrontCut;
    wake *= clamp(motionLen * 28.0, 0.0, 1.0);

    vec2 headDir = dist > 0.0001 ? normalize(delta) : vec2(0.0);
    vec2 headPush = headDir * head * uStrength * 1.05;
    vec2 wakePull = dir * wake * uStrength * 0.95;
    vec2 wakeSpread = perp * across * wake * uStrength * 0.14;

    float ripple = sin((behind * 24.0) - uTime * 4.0) * 0.0014 * wake;

    warpedUv -= headPush;
    warpedUv += wakePull;
    warpedUv -= wakeSpread;
    warpedUv += dir * ripple;

    vec2 currentUv = coverUv(warpedUv, uResolution, uTextureAspectCurrent);
    vec2 nextUv = coverUv(warpedUv, uResolution, uTextureAspectNext);

    vec4 currentColor = texture2D(uTextureCurrent, currentUv);
    vec4 nextColor = texture2D(uTextureNext, nextUv);

    gl_FragColor = mix(currentColor, nextColor, uMix);
  }
`,k4=()=>{const[s,e]=ln.useState(!1),[t,i]=ln.useState(window.innerWidth<=1024),[r,l]=ln.useState(window.innerWidth<=768),c=ln.useRef(null);ln.useEffect(()=>{const m=setTimeout(()=>{e(!0)},100),_=()=>{i(window.innerWidth<=1024),l(window.innerWidth<=768)};return window.addEventListener("resize",_),()=>{clearTimeout(m),window.removeEventListener("resize",_)}},[]),ln.useEffect(()=>{const m=c.current;if(!m)return;let _=!0,v=null,x,b,M,y,S,A=[],N=[],R=0,L=1,P=performance.now();const D=5e3,T=1e3,w=new Yt(.5,.5),q=new Yt(.5,.5),H=new Yt(.5,.5),k=new Yt(0,0);let J=0;const ee=W=>{const le=W.videoWidth||1920,ye=W.videoHeight||1080;return new Yt(le,ye)},$=W=>new Promise((le,ye)=>{const we=()=>{ge(),le(W)},te=()=>{ge(),ye(new Error(`비디오 로드 실패: ${W.src}`))},ge=()=>{W.removeEventListener("loadeddata",we),W.removeEventListener("canplay",we),W.removeEventListener("error",te)};if(W.readyState>=2){le(W);return}W.addEventListener("loadeddata",we,{once:!0}),W.addEventListener("canplay",we,{once:!0}),W.addEventListener("error",te,{once:!0}),W.load()}),F=async W=>{const le=document.createElement("video");return le.src=W,le.muted=!0,le.loop=!0,le.playsInline=!0,le.preload="auto",le.crossOrigin="anonymous",await $(le),le},z=()=>{A.forEach(W=>{try{W.pause(),W.removeAttribute("src"),W.load()}catch(le){console.error(le)}})},ie=W=>{if(window.innerWidth<=768)return;const le=m.getBoundingClientRect(),ye=(W.clientX-le.left)/le.width,we=1-(W.clientY-le.top)/le.height;k.set(ye-q.x,we-q.y),q.set(ye,we);const te=k.length();J=Math.min(J+te*5.5,.8)},de=()=>{J=Math.max(J,.04)},G=()=>{if(!x||!y)return;const W=m.clientWidth,le=m.clientHeight;x.setSize(W,le),x.setPixelRatio(Math.min(window.devicePixelRatio,2)),y.uniforms.uResolution.value.set(W,le),y.uniforms.uRadius.value=window.innerWidth<=1024?.055:.065};return(async()=>{if(b=new bU,M=new Bv(-1,1,1,-1,0,1),x=new I4({antialias:!0,alpha:!0}),x.setPixelRatio(Math.min(window.devicePixelRatio,2)),x.setSize(m.clientWidth,m.clientHeight),m.appendChild(x.domElement),A=await Promise.all([F(z4),F(B4),F(H4)]),!_)return;N=A.map(le=>{const ye=new LU(le);return ye.minFilter=$n,ye.magFilter=$n,ye.generateMipmaps=!1,ye.format=ka,ye}),await Promise.all(A.map(le=>le.play().catch(()=>null))),y=new or({uniforms:{uTextureCurrent:{value:N[0]},uTextureNext:{value:N[1]},uMix:{value:0},uMouse:{value:w.clone()},uPrevMouse:{value:H.clone()},uTime:{value:0},uStrength:{value:window.innerWidth<=1024?.045:.058},uRadius:{value:window.innerWidth<=1024?.055:.065},uResolution:{value:new Yt(m.clientWidth,m.clientHeight)},uTextureAspectCurrent:{value:ee(A[0])},uTextureAspectNext:{value:ee(A[1])}},vertexShader:G4,fragmentShader:V4}),S=new Rr(new Of(2,2),y),b.add(S),m.addEventListener("pointermove",ie),m.addEventListener("pointerleave",de),window.addEventListener("resize",G);const W=le=>{if(!_)return;v=requestAnimationFrame(W);const ye=performance.now();ye-P>=D&&(P=ye,R=L,L=(L+1)%N.length,y.uniforms.uTextureCurrent.value=N[R],y.uniforms.uTextureNext.value=N[L],y.uniforms.uTextureAspectCurrent.value=ee(A[R]),y.uniforms.uTextureAspectNext.value=ee(A[L]));let te=0;const ge=D-T,Me=ye-P-ge;Me>0&&(te=Math.min(Me/T,1)),window.innerWidth>768?(H.lerp(w,.035),w.lerp(q,.18),k.multiplyScalar(.94),J*=.985):(H.lerp(w,.08),w.lerp(new Yt(.5,.5),.06),k.set(0,0),J=0);const Oe=k.length(),Je=window.innerWidth<=1024?.036:.046,Ze=window.innerWidth<=1024?.035:.05,Lt=window.innerWidth<=768?0:Je+J*Ze+Oe*.06;y.uniforms.uTime.value=le*.001,y.uniforms.uMix.value=te,y.uniforms.uMouse.value.copy(w),y.uniforms.uPrevMouse.value.copy(H),y.uniforms.uStrength.value=Lt,x.render(b,M)};W(0)})().catch(W=>{console.error(W)}),()=>{_=!1,m.removeEventListener("pointermove",ie),m.removeEventListener("pointerleave",de),window.removeEventListener("resize",G),v&&cancelAnimationFrame(v),N.forEach(W=>W.dispose()),z(),S&&S.geometry.dispose(),y&&y.dispose(),x&&(x.dispose(),x.domElement&&m.contains(x.domElement)&&m.removeChild(x.domElement)),m&&(m.innerHTML="")}},[]);const f=r?"77vw":t?"58vw":"45vw",d=r?"15vw":t?"11vw":"10vw",h=r?"31.5vw":t?"20.5%":"25%";return V.jsxs("div",{className:`hero-wrap ${s?"intro-start":""}`,children:[V.jsx("div",{className:"hero-overlay",children:V.jsxs("svg",{className:"hero-overlay-mask","aria-hidden":"true",children:[V.jsx("defs",{children:V.jsxs("mask",{id:"hero-pill-mask",children:[V.jsx("rect",{width:"100%",height:"100%",fill:"white"}),V.jsx("rect",{className:"hero-pill-hole",x:"20",y:h,width:f,height:d,rx:"20",ry:"20",fill:"black"})]})}),V.jsx("rect",{width:"100%",height:"100%",fill:"rgb(8, 12, 24)",mask:"url(#hero-pill-mask)"})]})}),V.jsxs("section",{className:"hero",children:[V.jsx("div",{ref:c,className:"hero-bg-three"}),V.jsx("h3",{className:"hero-title",children:"필요에 답하다"}),V.jsxs("div",{className:"hero-text",children:[V.jsx("p",{children:"세 상 에   필 요 한  답 을  찾 기  위 해"}),V.jsx("p",{children:"동 원 의   혁 신 은  계 속 됩 니 다 ."})]}),V.jsxs("div",{className:"hero-notice",children:[V.jsxs("div",{className:"notice-title",children:[V.jsx("h4",{children:"제57기 결산배당 기준일 공고"}),V.jsx("span",{children:V.jsx("a",{href:"#",children:V.jsx(Tn,{icon:mf})})})]}),V.jsx("p",{className:"notice-text",children:"제57기 결산 배당 기준일을 공고합니다."})]})]})]})},X4=({setJourneyActive:s})=>{const e=ln.useRef(null),[t,i]=ln.useState(!1),r=window.innerWidth<=768,l=()=>{const f=e.current;if(r){f.paused?(f.play(),i(!0)):(f.pause(),f.currentTime=0,i(!1));return}e.current.play(),i(!0),s(!0)},c=()=>{e.current.pause(),e.current.currentTime=0,i(!1),s(!1)};return V.jsxs("section",{className:`journey ${t?"active":""}`,children:[V.jsxs("div",{className:"journey-i",children:[V.jsx("aside",{children:"• 동 원"}),V.jsxs("div",{className:"journey-text",children:[V.jsx("h3",{children:"동원,세상을 향한 여정"}),V.jsxs("p",{children:["세상의 필요를 가장 먼저 찾아냅니다. ",V.jsx("br",{className:"pc-br"}),"최적의 답을 가장 먼",V.jsx("span",{children:"저 제시합니다."})]}),V.jsxs("button",{children:["경영철학 보기 ",V.jsx(Tn,{icon:mf})]})]}),V.jsx("aside",{children:"필요를 찾다"})]}),V.jsxs("div",{className:`journey-video ${t?"active":""}`,children:[V.jsxs("p",{children:[V.jsx(Tn,{icon:Lb})," 필요에 답하다 CF"]}),V.jsxs("div",{className:"video-box",onClick:l,children:[V.jsx("video",{ref:e,children:V.jsx("source",{src:"./video/journey-cf.mp4",type:"video/mp4"})}),!t&&V.jsx("button",{className:"video-play-btn",children:V.jsx(Tn,{icon:Lb})})]})]}),t&&V.jsx("button",{className:"video-close-btn",onClick:c,children:V.jsx(Tn,{icon:xN})})]})};function ts(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function JT(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}var Ea={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},wu={duration:.5,overwrite:!1,delay:0},Hv,xi,Dn,Xa=1e8,vn=1/Xa,X_=Math.PI*2,W4=X_/4,j4=0,$T=Math.sqrt,Y4=Math.cos,q4=Math.sin,di=function(e){return typeof e=="string"},In=function(e){return typeof e=="function"},gs=function(e){return typeof e=="number"},Gv=function(e){return typeof e>"u"},wr=function(e){return typeof e=="object"},$i=function(e){return e!==!1},Vv=function(){return typeof window<"u"},gh=function(e){return In(e)||di(e)},eA=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Di=Array.isArray,Z4=/random\([^)]+\)/g,K4=/,\s*/g,DM=/(?:-?\.?\d|\.)+/gi,tA=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,fu=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,b0=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,nA=/[+-]=-?[.\d]+/,Q4=/[^,'"\[\]\s]+/gi,J4=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ln,pr,W_,kv,Ta={},tp={},iA,aA=function(e){return(tp=Du(e,Ta))&&ia},Xv=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},xf=function(e,t){return!t&&console.warn(e)},rA=function(e,t){return e&&(Ta[e]=t)&&tp&&(tp[e]=t)||Ta},yf=function(){return 0},$4={suppressEvents:!0,isStart:!0,kill:!1},Bh={suppressEvents:!0,kill:!1},eI={suppressEvents:!0},Wv={},io=[],j_={},sA,_a={},M0={},NM=30,Hh=[],jv="",Yv=function(e){var t=e[0],i,r;if(wr(t)||In(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=Hh.length;r--&&!Hh[r].targetTest(t););i=Hh[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new DA(e[r],i)))||e.splice(r,1);return e},Qo=function(e){return e._gsap||Yv(Wa(e))[0]._gsap},oA=function(e,t,i){return(i=e[t])&&In(i)?e[t]():Gv(i)&&e.getAttribute&&e.getAttribute(t)||i},ea=function(e,t){return(e=e.split(",")).forEach(t)||e},Hn=function(e){return Math.round(e*1e5)/1e5||0},Un=function(e){return Math.round(e*1e7)/1e7||0},_u=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},tI=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},np=function(){var e=io.length,t=io.slice(0),i,r;for(j_={},io.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},qv=function(e){return!!(e._initted||e._startAt||e.add)},lA=function(e,t,i,r){io.length&&!xi&&np(),e.render(t,i,!!(xi&&t<0&&qv(e))),io.length&&!xi&&np()},uA=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Q4).length<2?t:di(e)?e.trim():e},cA=function(e){return e},Aa=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},nI=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},Du=function(e,t){for(var i in t)e[i]=t[i];return e},UM=function s(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=wr(t[i])?s(e[i]||(e[i]={}),t[i]):t[i]);return e},ip=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},$c=function(e){var t=e.parent||Ln,i=e.keyframes?nI(Di(e.keyframes)):Aa;if($i(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},iI=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},fA=function(e,t,i,r,l){var c=e[r],f;if(l)for(f=t[l];c&&c[l]>f;)c=c._prev;return c?(t._next=c._next,c._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=c,t.parent=t._dp=e,t},Sp=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var l=t._prev,c=t._next;l?l._next=c:e[i]===t&&(e[i]=c),c?c._prev=l:e[r]===t&&(e[r]=l),t._next=t._prev=t.parent=null},co=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Jo=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},aI=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Y_=function(e,t,i,r){return e._startAt&&(xi?e._startAt.revert(Bh):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},rI=function s(e){return!e||e._ts&&s(e.parent)},LM=function(e){return e._repeat?Nu(e._tTime,e=e.duration()+e._rDelay)*e:0},Nu=function(e,t){var i=Math.floor(e=Un(e/t));return e&&i===e?i-1:i},ap=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},bp=function(e){return e._end=Un(e._start+(e._tDur/Math.abs(e._ts||e._rts||vn)||0))},Mp=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Un(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),bp(e),i._dirty||Jo(i,e)),e},dA=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=ap(e.rawTime(),t),(!t._dur||Pf(0,t.totalDuration(),i)-t._tTime>vn)&&t.render(i,!0)),Jo(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-vn}},_r=function(e,t,i,r){return t.parent&&co(t),t._start=Un((gs(i)?i:i||e!==Ln?za(e,i,t):e._time)+t._delay),t._end=Un(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),fA(e,t,"_first","_last",e._sort?"_start":0),q_(t)||(e._recent=t),r||dA(e,t),e._ts<0&&Mp(e,e._tTime),e},hA=function(e,t){return(Ta.ScrollTrigger||Xv("scrollTrigger",t))&&Ta.ScrollTrigger.create(t,e)},pA=function(e,t,i,r,l){if(Kv(e,t,l),!e._initted)return 1;if(!i&&e._pt&&!xi&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&sA!==xa.frame)return io.push(e),e._lazy=[l,r],1},sI=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},q_=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},oI=function(e,t,i,r){var l=e.ratio,c=t<0||!t&&(!e._start&&sI(e)&&!(!e._initted&&q_(e))||(e._ts<0||e._dp._ts<0)&&!q_(e))?0:1,f=e._rDelay,d=0,h,m,_;if(f&&e._repeat&&(d=Pf(0,e._tDur,t),m=Nu(d,f),e._yoyo&&m&1&&(c=1-c),m!==Nu(e._tTime,f)&&(l=1-c,e.vars.repeatRefresh&&e._initted&&e.invalidate())),c!==l||xi||r||e._zTime===vn||!t&&e._zTime){if(!e._initted&&pA(e,t,r,i,d))return;for(_=e._zTime,e._zTime=t||(i?vn:0),i||(i=t&&!_),e.ratio=c,e._from&&(c=1-c),e._time=0,e._tTime=d,h=e._pt;h;)h.r(c,h.d),h=h._next;t<0&&Y_(e,t,i,!0),e._onUpdate&&!i&&Sa(e,"onUpdate"),d&&e._repeat&&!i&&e.parent&&Sa(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===c&&(c&&co(e,1),!i&&!xi&&(Sa(e,c?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},lI=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Uu=function(e,t,i,r){var l=e._repeat,c=Un(t)||0,f=e._tTime/e._tDur;return f&&!r&&(e._time*=c/e._dur),e._dur=c,e._tDur=l?l<0?1e10:Un(c*(l+1)+e._rDelay*l):c,f>0&&!r&&Mp(e,e._tTime=e._tDur*f),e.parent&&bp(e),i||Jo(e.parent,e),e},OM=function(e){return e instanceof Vi?Jo(e):Uu(e,e._dur)},uI={_start:0,endTime:yf,totalDuration:yf},za=function s(e,t,i){var r=e.labels,l=e._recent||uI,c=e.duration()>=Xa?l.endTime(!1):e._dur,f,d,h;return di(t)&&(isNaN(t)||t in r)?(d=t.charAt(0),h=t.substr(-1)==="%",f=t.indexOf("="),d==="<"||d===">"?(f>=0&&(t=t.replace(/=/,"")),(d==="<"?l._start:l.endTime(l._repeat>=0))+(parseFloat(t.substr(1))||0)*(h?(f<0?l:i).totalDuration()/100:1)):f<0?(t in r||(r[t]=c),r[t]):(d=parseFloat(t.charAt(f-1)+t.substr(f+1)),h&&i&&(d=d/100*(Di(i)?i[0]:i).totalDuration()),f>1?s(e,t.substr(0,f-1),i)+d:c+d)):t==null?c:+t},ef=function(e,t,i){var r=gs(t[1]),l=(r?2:1)+(e<2?0:1),c=t[l],f,d;if(r&&(c.duration=t[1]),c.parent=i,e){for(f=c,d=i;d&&!("immediateRender"in f);)f=d.vars.defaults||{},d=$i(d.vars.inherit)&&d.parent;c.immediateRender=$i(f.immediateRender),e<2?c.runBackwards=1:c.startAt=t[l-1]}return new Jn(t[0],c,t[l+1])},mo=function(e,t){return e||e===0?t(e):t},Pf=function(e,t,i){return i<e?e:i>t?t:i},Ci=function(e,t){return!di(e)||!(t=J4.exec(e))?"":t[1]},cI=function(e,t,i){return mo(i,function(r){return Pf(e,t,r)})},Z_=[].slice,mA=function(e,t){return e&&wr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&wr(e[0]))&&!e.nodeType&&e!==pr},fI=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var l;return di(r)&&!t||mA(r,1)?(l=i).push.apply(l,Wa(r)):i.push(r)})||i},Wa=function(e,t,i){return Dn&&!t&&Dn.selector?Dn.selector(e):di(e)&&!i&&(W_||!Lu())?Z_.call((t||kv).querySelectorAll(e),0):Di(e)?fI(e,i):mA(e)?Z_.call(e,0):e?[e]:[]},K_=function(e){return e=Wa(e)[0]||xf("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Wa(t,i.querySelectorAll?i:i===e?xf("Invalid scope")||kv.createElement("div"):e)}},gA=function(e){return e.sort(function(){return .5-Math.random()})},_A=function(e){if(In(e))return e;var t=wr(e)?e:{each:e},i=$o(t.ease),r=t.from||0,l=parseFloat(t.base)||0,c={},f=r>0&&r<1,d=isNaN(r)||f,h=t.axis,m=r,_=r;return di(r)?m=_={center:.5,edges:.5,end:1}[r]||0:!f&&d&&(m=r[0],_=r[1]),function(v,x,b){var M=(b||t).length,y=c[M],S,A,N,R,L,P,D,T,w;if(!y){if(w=t.grid==="auto"?0:(t.grid||[1,Xa])[1],!w){for(D=-Xa;D<(D=b[w++].getBoundingClientRect().left)&&w<M;);w<M&&w--}for(y=c[M]=[],S=d?Math.min(w,M)*m-.5:r%w,A=w===Xa?0:d?M*_/w-.5:r/w|0,D=0,T=Xa,P=0;P<M;P++)N=P%w-S,R=A-(P/w|0),y[P]=L=h?Math.abs(h==="y"?R:N):$T(N*N+R*R),L>D&&(D=L),L<T&&(T=L);r==="random"&&gA(y),y.max=D-T,y.min=T,y.v=M=(parseFloat(t.amount)||parseFloat(t.each)*(w>M?M-1:h?h==="y"?M/w:w:Math.max(w,M/w))||0)*(r==="edges"?-1:1),y.b=M<0?l-M:l,y.u=Ci(t.amount||t.each)||0,i=i&&M<0?CA(i):i}return M=(y[v]-y.min)/y.max||0,Un(y.b+(i?i(M):M)*y.v)+y.u}},Q_=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=Un(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(gs(i)?0:Ci(i))}},vA=function(e,t){var i=Di(e),r,l;return!i&&wr(e)&&(r=i=e.radius||Xa,e.values?(e=Wa(e.values),(l=!gs(e[0]))&&(r*=r)):e=Q_(e.increment)),mo(t,i?In(e)?function(c){return l=e(c),Math.abs(l-c)<=r?l:c}:function(c){for(var f=parseFloat(l?c.x:c),d=parseFloat(l?c.y:0),h=Xa,m=0,_=e.length,v,x;_--;)l?(v=e[_].x-f,x=e[_].y-d,v=v*v+x*x):v=Math.abs(e[_]-f),v<h&&(h=v,m=_);return m=!r||h<=r?e[m]:c,l||m===c||gs(c)?m:m+Ci(c)}:Q_(e))},xA=function(e,t,i,r){return mo(Di(e)?!t:i===!0?!!(i=0):!r,function(){return Di(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},dI=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(l,c){return c(l)},r)}},hI=function(e,t){return function(i){return e(parseFloat(i))+(t||Ci(i))}},pI=function(e,t,i){return SA(e,t,0,1,i)},yA=function(e,t,i){return mo(i,function(r){return e[~~t(r)]})},mI=function s(e,t,i){var r=t-e;return Di(e)?yA(e,s(0,e.length),t):mo(i,function(l){return(r+(l-e)%r)%r+e})},gI=function s(e,t,i){var r=t-e,l=r*2;return Di(e)?yA(e,s(0,e.length-1),t):mo(i,function(c){return c=(l+(c-e)%l)%l||0,e+(c>r?l-c:c)})},Sf=function(e){return e.replace(Z4,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(K4);return xA(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},SA=function(e,t,i,r,l){var c=t-e,f=r-i;return mo(l,function(d){return i+((d-e)/c*f||0)})},_I=function s(e,t,i,r){var l=isNaN(e+t)?0:function(x){return(1-x)*e+x*t};if(!l){var c=di(e),f={},d,h,m,_,v;if(i===!0&&(r=1)&&(i=null),c)e={p:e},t={p:t};else if(Di(e)&&!Di(t)){for(m=[],_=e.length,v=_-2,h=1;h<_;h++)m.push(s(e[h-1],e[h]));_--,l=function(b){b*=_;var M=Math.min(v,~~b);return m[M](b-M)},i=t}else r||(e=Du(Di(e)?[]:{},e));if(!m){for(d in t)Zv.call(f,e,d,"get",t[d]);l=function(b){return $v(b,f)||(c?e.p:e)}}}return mo(i,l)},PM=function(e,t,i){var r=e.labels,l=Xa,c,f,d;for(c in r)f=r[c]-t,f<0==!!i&&f&&l>(f=Math.abs(f))&&(d=c,l=f);return d},Sa=function(e,t,i){var r=e.vars,l=r[t],c=Dn,f=e._ctx,d,h,m;if(l)return d=r[t+"Params"],h=r.callbackScope||e,i&&io.length&&np(),f&&(Dn=f),m=d?l.apply(h,d):l.call(h),Dn=c,m},kc=function(e){return co(e),e.scrollTrigger&&e.scrollTrigger.kill(!!xi),e.progress()<1&&Sa(e,"onInterrupt"),e},du,bA=[],MA=function(e){if(e)if(e=!e.name&&e.default||e,Vv()||e.headless){var t=e.name,i=In(e),r=t&&!i&&e.init?function(){this._props=[]}:e,l={init:yf,render:$v,add:Zv,kill:LI,modifier:UI,rawVars:0},c={targetTest:0,get:0,getSetter:Jv,aliases:{},register:0};if(Lu(),e!==r){if(_a[t])return;Aa(r,Aa(ip(e,l),c)),Du(r.prototype,Du(l,ip(e,c))),_a[r.prop=t]=r,e.targetTest&&(Hh.push(r),Wv[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}rA(t,r),e.register&&e.register(ia,r,ta)}else bA.push(e)},_n=255,Xc={aqua:[0,_n,_n],lime:[0,_n,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,_n],navy:[0,0,128],white:[_n,_n,_n],olive:[128,128,0],yellow:[_n,_n,0],orange:[_n,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[_n,0,0],pink:[_n,192,203],cyan:[0,_n,_n],transparent:[_n,_n,_n,0]},E0=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*_n+.5|0},EA=function(e,t,i){var r=e?gs(e)?[e>>16,e>>8&_n,e&_n]:0:Xc.black,l,c,f,d,h,m,_,v,x,b;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Xc[e])r=Xc[e];else if(e.charAt(0)==="#"){if(e.length<6&&(l=e.charAt(1),c=e.charAt(2),f=e.charAt(3),e="#"+l+l+c+c+f+f+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&_n,r&_n,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&_n,e&_n]}else if(e.substr(0,3)==="hsl"){if(r=b=e.match(DM),!t)d=+r[0]%360/360,h=+r[1]/100,m=+r[2]/100,c=m<=.5?m*(h+1):m+h-m*h,l=m*2-c,r.length>3&&(r[3]*=1),r[0]=E0(d+1/3,l,c),r[1]=E0(d,l,c),r[2]=E0(d-1/3,l,c);else if(~e.indexOf("="))return r=e.match(tA),i&&r.length<4&&(r[3]=1),r}else r=e.match(DM)||Xc.transparent;r=r.map(Number)}return t&&!b&&(l=r[0]/_n,c=r[1]/_n,f=r[2]/_n,_=Math.max(l,c,f),v=Math.min(l,c,f),m=(_+v)/2,_===v?d=h=0:(x=_-v,h=m>.5?x/(2-_-v):x/(_+v),d=_===l?(c-f)/x+(c<f?6:0):_===c?(f-l)/x+2:(l-c)/x+4,d*=60),r[0]=~~(d+.5),r[1]=~~(h*100+.5),r[2]=~~(m*100+.5)),i&&r.length<4&&(r[3]=1),r},TA=function(e){var t=[],i=[],r=-1;return e.split(ao).forEach(function(l){var c=l.match(fu)||[];t.push.apply(t,c),i.push(r+=c.length+1)}),t.c=i,t},FM=function(e,t,i){var r="",l=(e+r).match(ao),c=t?"hsla(":"rgba(",f=0,d,h,m,_;if(!l)return e;if(l=l.map(function(v){return(v=EA(v,t,1))&&c+(t?v[0]+","+v[1]+"%,"+v[2]+"%,"+v[3]:v.join(","))+")"}),i&&(m=TA(e),d=i.c,d.join(r)!==m.c.join(r)))for(h=e.replace(ao,"1").split(fu),_=h.length-1;f<_;f++)r+=h[f]+(~d.indexOf(f)?l.shift()||c+"0,0,0,0)":(m.length?m:l.length?l:i).shift());if(!h)for(h=e.split(ao),_=h.length-1;f<_;f++)r+=h[f]+l[f];return r+h[_]},ao=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Xc)s+="|"+e+"\\b";return new RegExp(s+")","gi")})(),vI=/hsl[a]?\(/,AA=function(e){var t=e.join(" "),i;if(ao.lastIndex=0,ao.test(t))return i=vI.test(t),e[1]=FM(e[1],i),e[0]=FM(e[0],i,TA(e[1])),!0},bf,xa=(function(){var s=Date.now,e=500,t=33,i=s(),r=i,l=1e3/240,c=l,f=[],d,h,m,_,v,x,b=function M(y){var S=s()-r,A=y===!0,N,R,L,P;if((S>e||S<0)&&(i+=S-t),r+=S,L=r-i,N=L-c,(N>0||A)&&(P=++_.frame,v=L-_.time*1e3,_.time=L=L/1e3,c+=N+(N>=l?4:l-N),R=1),A||(d=h(M)),R)for(x=0;x<f.length;x++)f[x](L,v,P,y)};return _={time:0,frame:0,tick:function(){b(!0)},deltaRatio:function(y){return v/(1e3/(y||60))},wake:function(){iA&&(!W_&&Vv()&&(pr=W_=window,kv=pr.document||{},Ta.gsap=ia,(pr.gsapVersions||(pr.gsapVersions=[])).push(ia.version),aA(tp||pr.GreenSockGlobals||!pr.gsap&&pr||{}),bA.forEach(MA)),m=typeof requestAnimationFrame<"u"&&requestAnimationFrame,d&&_.sleep(),h=m||function(y){return setTimeout(y,c-_.time*1e3+1|0)},bf=1,b(2))},sleep:function(){(m?cancelAnimationFrame:clearTimeout)(d),bf=0,h=yf},lagSmoothing:function(y,S){e=y||1/0,t=Math.min(S||33,e)},fps:function(y){l=1e3/(y||240),c=_.time*1e3+l},add:function(y,S,A){var N=S?function(R,L,P,D){y(R,L,P,D),_.remove(N)}:y;return _.remove(y),f[A?"unshift":"push"](N),Lu(),N},remove:function(y,S){~(S=f.indexOf(y))&&f.splice(S,1)&&x>=S&&x--},_listeners:f},_})(),Lu=function(){return!bf&&xa.wake()},qt={},xI=/^[\d.\-M][\d.\-,\s]/,yI=/["']/g,SI=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],l=1,c=i.length,f,d,h;l<c;l++)d=i[l],f=l!==c-1?d.lastIndexOf(","):d.length,h=d.substr(0,f),t[r]=isNaN(h)?h.replace(yI,"").trim():+h,r=d.substr(f+1).trim();return t},bI=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},MI=function(e){var t=(e+"").split("("),i=qt[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[SI(t[1])]:bI(e).split(",").map(uA)):qt._CE&&xI.test(e)?qt._CE("",e):i},CA=function(e){return function(t){return 1-e(1-t)}},RA=function s(e,t){for(var i=e._first,r;i;)i instanceof Vi?s(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?s(i.timeline,t):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=t)),i=i._next},$o=function(e,t){return e&&(In(e)?e:qt[e]||MI(e))||t},cl=function(e,t,i,r){i===void 0&&(i=function(d){return 1-t(1-d)}),r===void 0&&(r=function(d){return d<.5?t(d*2)/2:1-t((1-d)*2)/2});var l={easeIn:t,easeOut:i,easeInOut:r},c;return ea(e,function(f){qt[f]=Ta[f]=l,qt[c=f.toLowerCase()]=i;for(var d in l)qt[c+(d==="easeIn"?".in":d==="easeOut"?".out":".inOut")]=qt[f+"."+d]=l[d]}),l},wA=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},T0=function s(e,t,i){var r=t>=1?t:1,l=(i||(e?.3:.45))/(t<1?t:1),c=l/X_*(Math.asin(1/r)||0),f=function(m){return m===1?1:r*Math.pow(2,-10*m)*q4((m-c)*l)+1},d=e==="out"?f:e==="in"?function(h){return 1-f(1-h)}:wA(f);return l=X_/l,d.config=function(h,m){return s(e,h,m)},d},A0=function s(e,t){t===void 0&&(t=1.70158);var i=function(c){return c?--c*c*((t+1)*c+t)+1:0},r=e==="out"?i:e==="in"?function(l){return 1-i(1-l)}:wA(i);return r.config=function(l){return s(e,l)},r};ea("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;cl(s+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});qt.Linear.easeNone=qt.none=qt.Linear.easeIn;cl("Elastic",T0("in"),T0("out"),T0());(function(s,e){var t=1/e,i=2*t,r=2.5*t,l=function(f){return f<t?s*f*f:f<i?s*Math.pow(f-1.5/e,2)+.75:f<r?s*(f-=2.25/e)*f+.9375:s*Math.pow(f-2.625/e,2)+.984375};cl("Bounce",function(c){return 1-l(1-c)},l)})(7.5625,2.75);cl("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});cl("Circ",function(s){return-($T(1-s*s)-1)});cl("Sine",function(s){return s===1?1:-Y4(s*W4)+1});cl("Back",A0("in"),A0("out"),A0());qt.SteppedEase=qt.steps=Ta.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),l=t?1:0,c=1-vn;return function(f){return((r*Pf(0,c,f)|0)+l)*i}}};wu.ease=qt["quad.out"];ea("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return jv+=s+","+s+"Params,"});var DA=function(e,t){this.id=j4++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:oA,this.set=t?t.getSetter:Jv},Mf=(function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Uu(this,+t.duration,1,1),this.data=t.data,Dn&&(this._ctx=Dn,Dn.data.push(this)),bf||xa.wake()}var e=s.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Uu(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(Lu(),!arguments.length)return this._tTime;var l=this._dp;if(l&&l.smoothChildTiming&&this._ts){for(Mp(this,i),!l._dp||l.parent||dA(l,this);l&&l.parent;)l.parent._time!==l._start+(l._ts>=0?l._tTime/l._ts:(l.totalDuration()-l._tTime)/-l._ts)&&l.totalTime(l._tTime,!0),l=l.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&_r(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===vn||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),lA(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+LM(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+LM(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var l=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*l,r):this._repeat?Nu(this._tTime,l)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-vn?0:this._rts;if(this._rts===i)return this;var l=this.parent&&this._ts?ap(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-vn?0:this._rts,this.totalTime(Pf(-Math.abs(this._delay),this.totalDuration(),l),r!==!1),bp(this),aI(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Lu(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==vn&&(this._tTime-=vn)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=Un(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&_r(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+($i(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ap(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=eI);var r=xi;return xi=i,qv(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),xi=r,this},e.globalTime=function(i){for(var r=this,l=arguments.length?i:r.rawTime();r;)l=r._start+l/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):l},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,OM(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,OM(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(za(this,i),$i(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,$i(r)),this._dur||(this._zTime=-vn),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-vn:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-vn,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,l;return!!(!i||this._ts&&this._initted&&i.isActive()&&(l=i.rawTime(!0))>=r&&l<this.endTime(!0)-vn)},e.eventCallback=function(i,r,l){var c=this.vars;return arguments.length>1?(r?(c[i]=r,l&&(c[i+"Params"]=l),i==="onUpdate"&&(this._onUpdate=r)):delete c[i],this):c[i]},e.then=function(i){var r=this,l=r._prom;return new Promise(function(c){var f=In(i)?i:cA,d=function(){var m=r.then;r.then=null,l&&l(),In(f)&&(f=f(r))&&(f.then||f===r)&&(r.then=m),c(f),r.then=m};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?d():r._prom=d})},e.kill=function(){kc(this)},s})();Aa(Mf.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-vn,_prom:0,_ps:!1,_rts:1});var Vi=(function(s){JT(e,s);function e(i,r){var l;return i===void 0&&(i={}),l=s.call(this,i)||this,l.labels={},l.smoothChildTiming=!!i.smoothChildTiming,l.autoRemoveChildren=!!i.autoRemoveChildren,l._sort=$i(i.sortChildren),Ln&&_r(i.parent||Ln,ts(l),r),i.reversed&&l.reverse(),i.paused&&l.paused(!0),i.scrollTrigger&&hA(ts(l),i.scrollTrigger),l}var t=e.prototype;return t.to=function(r,l,c){return ef(0,arguments,this),this},t.from=function(r,l,c){return ef(1,arguments,this),this},t.fromTo=function(r,l,c,f){return ef(2,arguments,this),this},t.set=function(r,l,c){return l.duration=0,l.parent=this,$c(l).repeatDelay||(l.repeat=0),l.immediateRender=!!l.immediateRender,new Jn(r,l,za(this,c),1),this},t.call=function(r,l,c){return _r(this,Jn.delayedCall(0,r,l),c)},t.staggerTo=function(r,l,c,f,d,h,m){return c.duration=l,c.stagger=c.stagger||f,c.onComplete=h,c.onCompleteParams=m,c.parent=this,new Jn(r,c,za(this,d)),this},t.staggerFrom=function(r,l,c,f,d,h,m){return c.runBackwards=1,$c(c).immediateRender=$i(c.immediateRender),this.staggerTo(r,l,c,f,d,h,m)},t.staggerFromTo=function(r,l,c,f,d,h,m,_){return f.startAt=c,$c(f).immediateRender=$i(f.immediateRender),this.staggerTo(r,l,f,d,h,m,_)},t.render=function(r,l,c){var f=this._time,d=this._dirty?this.totalDuration():this._tDur,h=this._dur,m=r<=0?0:Un(r),_=this._zTime<0!=r<0&&(this._initted||!h),v,x,b,M,y,S,A,N,R,L,P,D;if(this!==Ln&&m>d&&r>=0&&(m=d),m!==this._tTime||c||_){if(f!==this._time&&h&&(m+=this._time-f,r+=this._time-f),v=m,R=this._start,N=this._ts,S=!N,_&&(h||(f=this._zTime),(r||!l)&&(this._zTime=r)),this._repeat){if(P=this._yoyo,y=h+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(y*100+r,l,c);if(v=Un(m%y),m===d?(M=this._repeat,v=h):(L=Un(m/y),M=~~L,M&&M===L&&(v=h,M--),v>h&&(v=h)),L=Nu(this._tTime,y),!f&&this._tTime&&L!==M&&this._tTime-L*y-this._dur<=0&&(L=M),P&&M&1&&(v=h-v,D=1),M!==L&&!this._lock){var T=P&&L&1,w=T===(P&&M&1);if(M<L&&(T=!T),f=T?0:m%h?h:m,this._lock=1,this.render(f||(D?0:Un(M*y)),l,!h)._lock=0,this._tTime=m,!l&&this.parent&&Sa(this,"onRepeat"),this.vars.repeatRefresh&&!D&&(this.invalidate()._lock=1,L=M),f&&f!==this._time||S!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(h=this._dur,d=this._tDur,w&&(this._lock=2,f=T?h:-1e-4,this.render(f,!0),this.vars.repeatRefresh&&!D&&this.invalidate()),this._lock=0,!this._ts&&!S)return this;RA(this,D)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(A=lI(this,Un(f),Un(v)),A&&(m-=v-(v=A._start))),this._tTime=m,this._time=v,this._act=!N,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,f=0),!f&&m&&h&&!l&&!L&&(Sa(this,"onStart"),this._tTime!==m))return this;if(v>=f&&r>=0)for(x=this._first;x;){if(b=x._next,(x._act||v>=x._start)&&x._ts&&A!==x){if(x.parent!==this)return this.render(r,l,c);if(x.render(x._ts>0?(v-x._start)*x._ts:(x._dirty?x.totalDuration():x._tDur)+(v-x._start)*x._ts,l,c),v!==this._time||!this._ts&&!S){A=0,b&&(m+=this._zTime=-vn);break}}x=b}else{x=this._last;for(var q=r<0?r:v;x;){if(b=x._prev,(x._act||q<=x._end)&&x._ts&&A!==x){if(x.parent!==this)return this.render(r,l,c);if(x.render(x._ts>0?(q-x._start)*x._ts:(x._dirty?x.totalDuration():x._tDur)+(q-x._start)*x._ts,l,c||xi&&qv(x)),v!==this._time||!this._ts&&!S){A=0,b&&(m+=this._zTime=q?-vn:vn);break}}x=b}}if(A&&!l&&(this.pause(),A.render(v>=f?0:-vn)._zTime=v>=f?1:-1,this._ts))return this._start=R,bp(this),this.render(r,l,c);this._onUpdate&&!l&&Sa(this,"onUpdate",!0),(m===d&&this._tTime>=this.totalDuration()||!m&&f)&&(R===this._start||Math.abs(N)!==Math.abs(this._ts))&&(this._lock||((r||!h)&&(m===d&&this._ts>0||!m&&this._ts<0)&&co(this,1),!l&&!(r<0&&!f)&&(m||f||!d)&&(Sa(this,m===d&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(m<d&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,l){var c=this;if(gs(l)||(l=za(this,l,r)),!(r instanceof Mf)){if(Di(r))return r.forEach(function(f){return c.add(f,l)}),this;if(di(r))return this.addLabel(r,l);if(In(r))r=Jn.delayedCall(0,r);else return this}return this!==r?_r(this,r,l):this},t.getChildren=function(r,l,c,f){r===void 0&&(r=!0),l===void 0&&(l=!0),c===void 0&&(c=!0),f===void 0&&(f=-Xa);for(var d=[],h=this._first;h;)h._start>=f&&(h instanceof Jn?l&&d.push(h):(c&&d.push(h),r&&d.push.apply(d,h.getChildren(!0,l,c)))),h=h._next;return d},t.getById=function(r){for(var l=this.getChildren(1,1,1),c=l.length;c--;)if(l[c].vars.id===r)return l[c]},t.remove=function(r){return di(r)?this.removeLabel(r):In(r)?this.killTweensOf(r):(r.parent===this&&Sp(this,r),r===this._recent&&(this._recent=this._last),Jo(this))},t.totalTime=function(r,l){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Un(xa.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),s.prototype.totalTime.call(this,r,l),this._forcing=0,this):this._tTime},t.addLabel=function(r,l){return this.labels[r]=za(this,l),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,l,c){var f=Jn.delayedCall(0,l||yf,c);return f.data="isPause",this._hasPause=1,_r(this,f,za(this,r))},t.removePause=function(r){var l=this._first;for(r=za(this,r);l;)l._start===r&&l.data==="isPause"&&co(l),l=l._next},t.killTweensOf=function(r,l,c){for(var f=this.getTweensOf(r,c),d=f.length;d--;)Js!==f[d]&&f[d].kill(r,l);return this},t.getTweensOf=function(r,l){for(var c=[],f=Wa(r),d=this._first,h=gs(l),m;d;)d instanceof Jn?tI(d._targets,f)&&(h?(!Js||d._initted&&d._ts)&&d.globalTime(0)<=l&&d.globalTime(d.totalDuration())>l:!l||d.isActive())&&c.push(d):(m=d.getTweensOf(f,l)).length&&c.push.apply(c,m),d=d._next;return c},t.tweenTo=function(r,l){l=l||{};var c=this,f=za(c,r),d=l,h=d.startAt,m=d.onStart,_=d.onStartParams,v=d.immediateRender,x,b=Jn.to(c,Aa({ease:l.ease||"none",lazy:!1,immediateRender:!1,time:f,overwrite:"auto",duration:l.duration||Math.abs((f-(h&&"time"in h?h.time:c._time))/c.timeScale())||vn,onStart:function(){if(c.pause(),!x){var y=l.duration||Math.abs((f-(h&&"time"in h?h.time:c._time))/c.timeScale());b._dur!==y&&Uu(b,y,0,1).render(b._time,!0,!0),x=1}m&&m.apply(b,_||[])}},l));return v?b.render(0):b},t.tweenFromTo=function(r,l,c){return this.tweenTo(l,Aa({startAt:{time:za(this,r)}},c))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),PM(this,za(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),PM(this,za(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+vn)},t.shiftChildren=function(r,l,c){c===void 0&&(c=0);var f=this._first,d=this.labels,h;for(r=Un(r);f;)f._start>=c&&(f._start+=r,f._end+=r),f=f._next;if(l)for(h in d)d[h]>=c&&(d[h]+=r);return Jo(this)},t.invalidate=function(r){var l=this._first;for(this._lock=0;l;)l.invalidate(r),l=l._next;return s.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var l=this._first,c;l;)c=l._next,this.remove(l),l=c;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Jo(this)},t.totalDuration=function(r){var l=0,c=this,f=c._last,d=Xa,h,m,_;if(arguments.length)return c.timeScale((c._repeat<0?c.duration():c.totalDuration())/(c.reversed()?-r:r));if(c._dirty){for(_=c.parent;f;)h=f._prev,f._dirty&&f.totalDuration(),m=f._start,m>d&&c._sort&&f._ts&&!c._lock?(c._lock=1,_r(c,f,m-f._delay,1)._lock=0):d=m,m<0&&f._ts&&(l-=m,(!_&&!c._dp||_&&_.smoothChildTiming)&&(c._start+=Un(m/c._ts),c._time-=m,c._tTime-=m),c.shiftChildren(-m,!1,-1/0),d=0),f._end>l&&f._ts&&(l=f._end),f=h;Uu(c,c===Ln&&c._time>l?c._time:l,1,1),c._dirty=0}return c._tDur},e.updateRoot=function(r){if(Ln._ts&&(lA(Ln,ap(r,Ln)),sA=xa.frame),xa.frame>=NM){NM+=Ea.autoSleep||120;var l=Ln._first;if((!l||!l._ts)&&Ea.autoSleep&&xa._listeners.length<2){for(;l&&!l._ts;)l=l._next;l||xa.sleep()}}},e})(Mf);Aa(Vi.prototype,{_lock:0,_hasPause:0,_forcing:0});var EI=function(e,t,i,r,l,c,f){var d=new ta(this._pt,e,t,0,1,FA,null,l),h=0,m=0,_,v,x,b,M,y,S,A;for(d.b=i,d.e=r,i+="",r+="",(S=~r.indexOf("random("))&&(r=Sf(r)),c&&(A=[i,r],c(A,e,t),i=A[0],r=A[1]),v=i.match(b0)||[];_=b0.exec(r);)b=_[0],M=r.substring(h,_.index),x?x=(x+1)%5:M.substr(-5)==="rgba("&&(x=1),b!==v[m++]&&(y=parseFloat(v[m-1])||0,d._pt={_next:d._pt,p:M||m===1?M:",",s:y,c:b.charAt(1)==="="?_u(y,b)-y:parseFloat(b)-y,m:x&&x<4?Math.round:0},h=b0.lastIndex);return d.c=h<r.length?r.substring(h,r.length):"",d.fp=f,(nA.test(r)||S)&&(d.e=0),this._pt=d,d},Zv=function(e,t,i,r,l,c,f,d,h,m){In(r)&&(r=r(l||0,e,c));var _=e[t],v=i!=="get"?i:In(_)?h?e[t.indexOf("set")||!In(e["get"+t.substr(3)])?t:"get"+t.substr(3)](h):e[t]():_,x=In(_)?h?wI:OA:Qv,b;if(di(r)&&(~r.indexOf("random(")&&(r=Sf(r)),r.charAt(1)==="="&&(b=_u(v,r)+(Ci(v)||0),(b||b===0)&&(r=b))),!m||v!==r||J_)return!isNaN(v*r)&&r!==""?(b=new ta(this._pt,e,t,+v||0,r-(v||0),typeof _=="boolean"?NI:PA,0,x),h&&(b.fp=h),f&&b.modifier(f,this,e),this._pt=b):(!_&&!(t in e)&&Xv(t,r),EI.call(this,e,t,v,r,x,d||Ea.stringFilter,h))},TI=function(e,t,i,r,l){if(In(e)&&(e=tf(e,l,t,i,r)),!wr(e)||e.style&&e.nodeType||Di(e)||eA(e))return di(e)?tf(e,l,t,i,r):e;var c={},f;for(f in e)c[f]=tf(e[f],l,t,i,r);return c},NA=function(e,t,i,r,l,c){var f,d,h,m;if(_a[e]&&(f=new _a[e]).init(l,f.rawVars?t[e]:TI(t[e],r,l,c,i),i,r,c)!==!1&&(i._pt=d=new ta(i._pt,l,e,0,1,f.render,f,0,f.priority),i!==du))for(h=i._ptLookup[i._targets.indexOf(l)],m=f._props.length;m--;)h[f._props[m]]=d;return f},Js,J_,Kv=function s(e,t,i){var r=e.vars,l=r.ease,c=r.startAt,f=r.immediateRender,d=r.lazy,h=r.onUpdate,m=r.runBackwards,_=r.yoyoEase,v=r.keyframes,x=r.autoRevert,b=e._dur,M=e._startAt,y=e._targets,S=e.parent,A=S&&S.data==="nested"?S.vars.targets:y,N=e._overwrite==="auto"&&!Hv,R=e.timeline,L,P,D,T,w,q,H,k,J,ee,$,F,z;if(R&&(!v||!l)&&(l="none"),e._ease=$o(l,wu.ease),e._yEase=_?CA($o(_===!0?l:_,wu.ease)):0,_&&e._yoyo&&!e._repeat&&(_=e._yEase,e._yEase=e._ease,e._ease=_),e._from=!R&&!!r.runBackwards,!R||v&&!r.stagger){if(k=y[0]?Qo(y[0]).harness:0,F=k&&r[k.prop],L=ip(r,Wv),M&&(M._zTime<0&&M.progress(1),t<0&&m&&f&&!x?M.render(-1,!0):M.revert(m&&b?Bh:$4),M._lazy=0),c){if(co(e._startAt=Jn.set(y,Aa({data:"isStart",overwrite:!1,parent:S,immediateRender:!0,lazy:!M&&$i(d),startAt:null,delay:0,onUpdate:h&&function(){return Sa(e,"onUpdate")},stagger:0},c))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(xi||!f&&!x)&&e._startAt.revert(Bh),f&&b&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(m&&b&&!M){if(t&&(f=!1),D=Aa({overwrite:!1,data:"isFromStart",lazy:f&&!M&&$i(d),immediateRender:f,stagger:0,parent:S},L),F&&(D[k.prop]=F),co(e._startAt=Jn.set(y,D)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(xi?e._startAt.revert(Bh):e._startAt.render(-1,!0)),e._zTime=t,!f)s(e._startAt,vn,vn);else if(!t)return}for(e._pt=e._ptCache=0,d=b&&$i(d)||d&&!b,P=0;P<y.length;P++){if(w=y[P],H=w._gsap||Yv(y)[P]._gsap,e._ptLookup[P]=ee={},j_[H.id]&&io.length&&np(),$=A===y?P:A.indexOf(w),k&&(J=new k).init(w,F||L,e,$,A)!==!1&&(e._pt=T=new ta(e._pt,w,J.name,0,1,J.render,J,0,J.priority),J._props.forEach(function(ie){ee[ie]=T}),J.priority&&(q=1)),!k||F)for(D in L)_a[D]&&(J=NA(D,L,e,$,w,A))?J.priority&&(q=1):ee[D]=T=Zv.call(e,w,D,"get",L[D],$,A,0,r.stringFilter);e._op&&e._op[P]&&e.kill(w,e._op[P]),N&&e._pt&&(Js=e,Ln.killTweensOf(w,ee,e.globalTime(t)),z=!e.parent,Js=0),e._pt&&d&&(j_[H.id]=1)}q&&IA(e),e._onInit&&e._onInit(e)}e._onUpdate=h,e._initted=(!e._op||e._pt)&&!z,v&&t<=0&&R.render(Xa,!0,!0)},AI=function(e,t,i,r,l,c,f,d){var h=(e._pt&&e._ptCache||(e._ptCache={}))[t],m,_,v,x;if(!h)for(h=e._ptCache[t]=[],v=e._ptLookup,x=e._targets.length;x--;){if(m=v[x][t],m&&m.d&&m.d._pt)for(m=m.d._pt;m&&m.p!==t&&m.fp!==t;)m=m._next;if(!m)return J_=1,e.vars[t]="+=0",Kv(e,f),J_=0,d?xf(t+" not eligible for reset"):1;h.push(m)}for(x=h.length;x--;)_=h[x],m=_._pt||_,m.s=(r||r===0)&&!l?r:m.s+(r||0)+c*m.c,m.c=i-m.s,_.e&&(_.e=Hn(i)+Ci(_.e)),_.b&&(_.b=m.s+Ci(_.b))},CI=function(e,t){var i=e[0]?Qo(e[0]).harness:0,r=i&&i.aliases,l,c,f,d;if(!r)return t;l=Du({},t);for(c in r)if(c in l)for(d=r[c].split(","),f=d.length;f--;)l[d[f]]=l[c];return l},RI=function(e,t,i,r){var l=t.ease||r||"power1.inOut",c,f;if(Di(t))f=i[e]||(i[e]=[]),t.forEach(function(d,h){return f.push({t:h/(t.length-1)*100,v:d,e:l})});else for(c in t)f=i[c]||(i[c]=[]),c==="ease"||f.push({t:parseFloat(e),v:t[c],e:l})},tf=function(e,t,i,r,l){return In(e)?e.call(t,i,r,l):di(e)&&~e.indexOf("random(")?Sf(e):e},UA=jv+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",LA={};ea(UA+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return LA[s]=1});var Jn=(function(s){JT(e,s);function e(i,r,l,c){var f;typeof r=="number"&&(l.duration=r,r=l,l=null),f=s.call(this,c?r:$c(r))||this;var d=f.vars,h=d.duration,m=d.delay,_=d.immediateRender,v=d.stagger,x=d.overwrite,b=d.keyframes,M=d.defaults,y=d.scrollTrigger,S=d.yoyoEase,A=r.parent||Ln,N=(Di(i)||eA(i)?gs(i[0]):"length"in r)?[i]:Wa(i),R,L,P,D,T,w,q,H;if(f._targets=N.length?Yv(N):xf("GSAP target "+i+" not found. https://gsap.com",!Ea.nullTargetWarn)||[],f._ptLookup=[],f._overwrite=x,b||v||gh(h)||gh(m)){if(r=f.vars,R=f.timeline=new Vi({data:"nested",defaults:M||{},targets:A&&A.data==="nested"?A.vars.targets:N}),R.kill(),R.parent=R._dp=ts(f),R._start=0,v||gh(h)||gh(m)){if(D=N.length,q=v&&_A(v),wr(v))for(T in v)~UA.indexOf(T)&&(H||(H={}),H[T]=v[T]);for(L=0;L<D;L++)P=ip(r,LA),P.stagger=0,S&&(P.yoyoEase=S),H&&Du(P,H),w=N[L],P.duration=+tf(h,ts(f),L,w,N),P.delay=(+tf(m,ts(f),L,w,N)||0)-f._delay,!v&&D===1&&P.delay&&(f._delay=m=P.delay,f._start+=m,P.delay=0),R.to(w,P,q?q(L,w,N):0),R._ease=qt.none;R.duration()?h=m=0:f.timeline=0}else if(b){$c(Aa(R.vars.defaults,{ease:"none"})),R._ease=$o(b.ease||r.ease||"none");var k=0,J,ee,$;if(Di(b))b.forEach(function(F){return R.to(N,F,">")}),R.duration();else{P={};for(T in b)T==="ease"||T==="easeEach"||RI(T,b[T],P,b.easeEach);for(T in P)for(J=P[T].sort(function(F,z){return F.t-z.t}),k=0,L=0;L<J.length;L++)ee=J[L],$={ease:ee.e,duration:(ee.t-(L?J[L-1].t:0))/100*h},$[T]=ee.v,R.to(N,$,k),k+=$.duration;R.duration()<h&&R.to({},{duration:h-R.duration()})}}h||f.duration(h=R.duration())}else f.timeline=0;return x===!0&&!Hv&&(Js=ts(f),Ln.killTweensOf(N),Js=0),_r(A,ts(f),l),r.reversed&&f.reverse(),r.paused&&f.paused(!0),(_||!h&&!b&&f._start===Un(A._time)&&$i(_)&&rI(ts(f))&&A.data!=="nested")&&(f._tTime=-vn,f.render(Math.max(0,-m)||0)),y&&hA(ts(f),y),f}var t=e.prototype;return t.render=function(r,l,c){var f=this._time,d=this._tDur,h=this._dur,m=r<0,_=r>d-vn&&!m?d:r<vn?0:r,v,x,b,M,y,S,A,N,R;if(!h)oI(this,r,l,c);else if(_!==this._tTime||!r||c||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==m||this._lazy){if(v=_,N=this.timeline,this._repeat){if(M=h+this._rDelay,this._repeat<-1&&m)return this.totalTime(M*100+r,l,c);if(v=Un(_%M),_===d?(b=this._repeat,v=h):(y=Un(_/M),b=~~y,b&&b===y?(v=h,b--):v>h&&(v=h)),S=this._yoyo&&b&1,S&&(R=this._yEase,v=h-v),y=Nu(this._tTime,M),v===f&&!c&&this._initted&&b===y)return this._tTime=_,this;b!==y&&(N&&this._yEase&&RA(N,S),this.vars.repeatRefresh&&!S&&!this._lock&&v!==M&&this._initted&&(this._lock=c=1,this.render(Un(M*b),!0).invalidate()._lock=0))}if(!this._initted){if(pA(this,m?r:v,c,l,_))return this._tTime=0,this;if(f!==this._time&&!(c&&this.vars.repeatRefresh&&b!==y))return this;if(h!==this._dur)return this.render(r,l,c)}if(this._tTime=_,this._time=v,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=A=(R||this._ease)(v/h),this._from&&(this.ratio=A=1-A),!f&&_&&!l&&!y&&(Sa(this,"onStart"),this._tTime!==_))return this;for(x=this._pt;x;)x.r(A,x.d),x=x._next;N&&N.render(r<0?r:N._dur*N._ease(v/this._dur),l,c)||this._startAt&&(this._zTime=r),this._onUpdate&&!l&&(m&&Y_(this,r,l,c),Sa(this,"onUpdate")),this._repeat&&b!==y&&this.vars.onRepeat&&!l&&this.parent&&Sa(this,"onRepeat"),(_===this._tDur||!_)&&this._tTime===_&&(m&&!this._onUpdate&&Y_(this,r,!0,!0),(r||!h)&&(_===this._tDur&&this._ts>0||!_&&this._ts<0)&&co(this,1),!l&&!(m&&!f)&&(_||f||S)&&(Sa(this,_===d?"onComplete":"onReverseComplete",!0),this._prom&&!(_<d&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),s.prototype.invalidate.call(this,r)},t.resetTo=function(r,l,c,f,d){bf||xa.wake(),this._ts||this.play();var h=Math.min(this._dur,(this._dp._time-this._start)*this._ts),m;return this._initted||Kv(this,h),m=this._ease(h/this._dur),AI(this,r,l,c,f,m,h,d)?this.resetTo(r,l,c,f,1):(Mp(this,0),this.parent||fA(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,l){if(l===void 0&&(l="all"),!r&&(!l||l==="all"))return this._lazy=this._pt=0,this.parent?kc(this):this.scrollTrigger&&this.scrollTrigger.kill(!!xi),this;if(this.timeline){var c=this.timeline.totalDuration();return this.timeline.killTweensOf(r,l,Js&&Js.vars.overwrite!==!0)._first||kc(this),this.parent&&c!==this.timeline.totalDuration()&&Uu(this,this._dur*this.timeline._tDur/c,0,1),this}var f=this._targets,d=r?Wa(r):f,h=this._ptLookup,m=this._pt,_,v,x,b,M,y,S;if((!l||l==="all")&&iI(f,d))return l==="all"&&(this._pt=0),kc(this);for(_=this._op=this._op||[],l!=="all"&&(di(l)&&(M={},ea(l,function(A){return M[A]=1}),l=M),l=CI(f,l)),S=f.length;S--;)if(~d.indexOf(f[S])){v=h[S],l==="all"?(_[S]=l,b=v,x={}):(x=_[S]=_[S]||{},b=l);for(M in b)y=v&&v[M],y&&((!("kill"in y.d)||y.d.kill(M)===!0)&&Sp(this,y,"_pt"),delete v[M]),x!=="all"&&(x[M]=1)}return this._initted&&!this._pt&&m&&kc(this),this},e.to=function(r,l){return new e(r,l,arguments[2])},e.from=function(r,l){return ef(1,arguments)},e.delayedCall=function(r,l,c,f){return new e(l,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:l,onReverseComplete:l,onCompleteParams:c,onReverseCompleteParams:c,callbackScope:f})},e.fromTo=function(r,l,c){return ef(2,arguments)},e.set=function(r,l){return l.duration=0,l.repeatDelay||(l.repeat=0),new e(r,l)},e.killTweensOf=function(r,l,c){return Ln.killTweensOf(r,l,c)},e})(Mf);Aa(Jn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ea("staggerTo,staggerFrom,staggerFromTo",function(s){Jn[s]=function(){var e=new Vi,t=Z_.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var Qv=function(e,t,i){return e[t]=i},OA=function(e,t,i){return e[t](i)},wI=function(e,t,i,r){return e[t](r.fp,i)},DI=function(e,t,i){return e.setAttribute(t,i)},Jv=function(e,t){return In(e[t])?OA:Gv(e[t])&&e.setAttribute?DI:Qv},PA=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},NI=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},FA=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},$v=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},UI=function(e,t,i,r){for(var l=this._pt,c;l;)c=l._next,l.p===r&&l.modifier(e,t,i),l=c},LI=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Sp(this,t,"_pt"):t.dep||(i=1),t=r;return!i},OI=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},IA=function(e){for(var t=e._pt,i,r,l,c;t;){for(i=t._next,r=l;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:c)?t._prev._next=t:l=t,(t._next=r)?r._prev=t:c=t,t=i}e._pt=l},ta=(function(){function s(t,i,r,l,c,f,d,h,m){this.t=i,this.s=l,this.c=c,this.p=r,this.r=f||PA,this.d=d||this,this.set=h||Qv,this.pr=m||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(i,r,l){this.mSet=this.mSet||this.set,this.set=OI,this.m=i,this.mt=l,this.tween=r},s})();ea(jv+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return Wv[s]=1});Ta.TweenMax=Ta.TweenLite=Jn;Ta.TimelineLite=Ta.TimelineMax=Vi;Ln=new Vi({sortChildren:!1,defaults:wu,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ea.stringFilter=AA;var el=[],Gh={},PI=[],IM=0,FI=0,C0=function(e){return(Gh[e]||PI).map(function(t){return t()})},$_=function(){var e=Date.now(),t=[];e-IM>2&&(C0("matchMediaInit"),el.forEach(function(i){var r=i.queries,l=i.conditions,c,f,d,h;for(f in r)c=pr.matchMedia(r[f]).matches,c&&(d=1),c!==l[f]&&(l[f]=c,h=1);h&&(i.revert(),d&&t.push(i))}),C0("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),IM=e,C0("matchMedia"))},zA=(function(){function s(t,i){this.selector=i&&K_(i),this.data=[],this._r=[],this.isReverted=!1,this.id=FI++,t&&this.add(t)}var e=s.prototype;return e.add=function(i,r,l){In(i)&&(l=r,r=i,i=In);var c=this,f=function(){var h=Dn,m=c.selector,_;return h&&h!==c&&h.data.push(c),l&&(c.selector=K_(l)),Dn=c,_=r.apply(c,arguments),In(_)&&c._r.push(_),Dn=h,c.selector=m,c.isReverted=!1,_};return c.last=f,i===In?f(c,function(d){return c.add(null,d)}):i?c[i]=f:f},e.ignore=function(i){var r=Dn;Dn=null,i(this),Dn=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof s?i.push.apply(i,r.getTweens()):r instanceof Jn&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var l=this;if(i?(function(){for(var f=l.getTweens(),d=l.data.length,h;d--;)h=l.data[d],h.data==="isFlip"&&(h.revert(),h.getChildren(!0,!0,!1).forEach(function(m){return f.splice(f.indexOf(m),1)}));for(f.map(function(m){return{g:m._dur||m._delay||m._sat&&!m._sat.vars.immediateRender?m.globalTime(0):-1/0,t:m}}).sort(function(m,_){return _.g-m.g||-1/0}).forEach(function(m){return m.t.revert(i)}),d=l.data.length;d--;)h=l.data[d],h instanceof Vi?h.data!=="nested"&&(h.scrollTrigger&&h.scrollTrigger.revert(),h.kill()):!(h instanceof Jn)&&h.revert&&h.revert(i);l._r.forEach(function(m){return m(i,l)}),l.isReverted=!0})():this.data.forEach(function(f){return f.kill&&f.kill()}),this.clear(),r)for(var c=el.length;c--;)el[c].id===this.id&&el.splice(c,1)},e.revert=function(i){this.kill(i||{})},s})(),II=(function(){function s(t){this.contexts=[],this.scope=t,Dn&&Dn.data.push(this)}var e=s.prototype;return e.add=function(i,r,l){wr(i)||(i={matches:i});var c=new zA(0,l||this.scope),f=c.conditions={},d,h,m;Dn&&!c.selector&&(c.selector=Dn.selector),this.contexts.push(c),r=c.add("onMatch",r),c.queries=i;for(h in i)h==="all"?m=1:(d=pr.matchMedia(i[h]),d&&(el.indexOf(c)<0&&el.push(c),(f[h]=d.matches)&&(m=1),d.addListener?d.addListener($_):d.addEventListener("change",$_)));return m&&r(c,function(_){return c.add(null,_)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},s})(),rp={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return MA(r)})},timeline:function(e){return new Vi(e)},getTweensOf:function(e,t){return Ln.getTweensOf(e,t)},getProperty:function(e,t,i,r){di(e)&&(e=Wa(e)[0]);var l=Qo(e||{}).get,c=i?cA:uA;return i==="native"&&(i=""),e&&(t?c((_a[t]&&_a[t].get||l)(e,t,i,r)):function(f,d,h){return c((_a[f]&&_a[f].get||l)(e,f,d,h))})},quickSetter:function(e,t,i){if(e=Wa(e),e.length>1){var r=e.map(function(m){return ia.quickSetter(m,t,i)}),l=r.length;return function(m){for(var _=l;_--;)r[_](m)}}e=e[0]||{};var c=_a[t],f=Qo(e),d=f.harness&&(f.harness.aliases||{})[t]||t,h=c?function(m){var _=new c;du._pt=0,_.init(e,i?m+i:m,du,0,[e]),_.render(1,_),du._pt&&$v(1,du)}:f.set(e,d);return c?h:function(m){return h(e,d,i?m+i:m,f,1)}},quickTo:function(e,t,i){var r,l=ia.to(e,Aa((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),c=function(d,h,m){return l.resetTo(t,d,h,m)};return c.tween=l,c},isTweening:function(e){return Ln.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=$o(e.ease,wu.ease)),UM(wu,e||{})},config:function(e){return UM(Ea,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,l=e.defaults,c=e.extendTimeline;(r||"").split(",").forEach(function(f){return f&&!_a[f]&&!Ta[f]&&xf(t+" effect requires "+f+" plugin.")}),M0[t]=function(f,d,h){return i(Wa(f),Aa(d||{},l),h)},c&&(Vi.prototype[t]=function(f,d,h){return this.add(M0[t](f,wr(d)?d:(h=d)&&{},this),h)})},registerEase:function(e,t){qt[e]=$o(t)},parseEase:function(e,t){return arguments.length?$o(e,t):qt},getById:function(e){return Ln.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new Vi(e),r,l;for(i.smoothChildTiming=$i(e.smoothChildTiming),Ln.remove(i),i._dp=0,i._time=i._tTime=Ln._time,r=Ln._first;r;)l=r._next,(t||!(!r._dur&&r instanceof Jn&&r.vars.onComplete===r._targets[0]))&&_r(i,r,r._start-r._delay),r=l;return _r(Ln,i,0),i},context:function(e,t){return e?new zA(e,t):Dn},matchMedia:function(e){return new II(e)},matchMediaRefresh:function(){return el.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||$_()},addEventListener:function(e,t){var i=Gh[e]||(Gh[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=Gh[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:mI,wrapYoyo:gI,distribute:_A,random:xA,snap:vA,normalize:pI,getUnit:Ci,clamp:cI,splitColor:EA,toArray:Wa,selector:K_,mapRange:SA,pipe:dI,unitize:hI,interpolate:_I,shuffle:gA},install:aA,effects:M0,ticker:xa,updateRoot:Vi.updateRoot,plugins:_a,globalTimeline:Ln,core:{PropTween:ta,globals:rA,Tween:Jn,Timeline:Vi,Animation:Mf,getCache:Qo,_removeLinkedListItem:Sp,reverting:function(){return xi},context:function(e){return e&&Dn&&(Dn.data.push(e),e._ctx=Dn),Dn},suppressOverwrites:function(e){return Hv=e}}};ea("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return rp[s]=Jn[s]});xa.add(Vi.updateRoot);du=rp.to({},{duration:0});var zI=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},BI=function(e,t){var i=e._targets,r,l,c;for(r in t)for(l=i.length;l--;)c=e._ptLookup[l][r],c&&(c=c.d)&&(c._pt&&(c=zI(c,r)),c&&c.modifier&&c.modifier(t[r],e,i[l],r))},R0=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,l,c){c._onInit=function(f){var d,h;if(di(l)&&(d={},ea(l,function(m){return d[m]=1}),l=d),t){d={};for(h in l)d[h]=t(l[h]);l=d}BI(f,l)}}}},ia=rp.registerPlugin({name:"attr",init:function(e,t,i,r,l){var c,f,d;this.tween=i;for(c in t)d=e.getAttribute(c)||"",f=this.add(e,"setAttribute",(d||0)+"",t[c],r,l,0,0,c),f.op=c,f.b=d,this._props.push(c)},render:function(e,t){for(var i=t._pt;i;)xi?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},R0("roundProps",Q_),R0("modifiers"),R0("snap",vA))||rp;Jn.version=Vi.version=ia.version="3.14.2";iA=1;Vv()&&Lu();qt.Power0;qt.Power1;qt.Power2;qt.Power3;qt.Power4;qt.Linear;qt.Quad;qt.Cubic;qt.Quart;qt.Quint;qt.Strong;qt.Elastic;qt.Back;qt.SteppedEase;qt.Bounce;qt.Sine;qt.Expo;qt.Circ;var zM,$s,vu,ex,Zo,BM,tx,HI=function(){return typeof window<"u"},_s={},Go=180/Math.PI,xu=Math.PI/180,ru=Math.atan2,HM=1e8,nx=/([A-Z])/g,GI=/(left|right|width|margin|padding|x)/i,VI=/[\s,\(]\S/,Sr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},ev=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},kI=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},XI=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},WI=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},jI=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},BA=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},HA=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},YI=function(e,t,i){return e.style[t]=i},qI=function(e,t,i){return e.style.setProperty(t,i)},ZI=function(e,t,i){return e._gsap[t]=i},KI=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},QI=function(e,t,i,r,l){var c=e._gsap;c.scaleX=c.scaleY=i,c.renderTransform(l,c)},JI=function(e,t,i,r,l){var c=e._gsap;c[t]=i,c.renderTransform(l,c)},On="transform",na=On+"Origin",$I=function s(e,t){var i=this,r=this.target,l=r.style,c=r._gsap;if(e in _s&&l){if(this.tfm=this.tfm||{},e!=="transform")e=Sr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(f){return i.tfm[f]=ns(r,f)}):this.tfm[e]=c.x?c[e]:ns(r,e),e===na&&(this.tfm.zOrigin=c.zOrigin);else return Sr.transform.split(",").forEach(function(f){return s.call(i,f,t)});if(this.props.indexOf(On)>=0)return;c.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(na,t,"")),e=On}(l||t)&&this.props.push(e,t,l[e])},GA=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},ez=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,l,c;for(l=0;l<e.length;l+=3)e[l+1]?e[l+1]===2?t[e[l]](e[l+2]):t[e[l]]=e[l+2]:e[l+2]?i[e[l]]=e[l+2]:i.removeProperty(e[l].substr(0,2)==="--"?e[l]:e[l].replace(nx,"-$1").toLowerCase());if(this.tfm){for(c in this.tfm)r[c]=this.tfm[c];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),l=tx(),(!l||!l.isStart)&&!i[On]&&(GA(i),r.zOrigin&&i[na]&&(i[na]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},VA=function(e,t){var i={target:e,props:[],revert:ez,save:$I};return e._gsap||ia.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},kA,tv=function(e,t){var i=$s.createElementNS?$s.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):$s.createElement(e);return i&&i.style?i:$s.createElement(e)},ba=function s(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(nx,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&s(e,Ou(t)||t,1)||""},GM="O,Moz,ms,Ms,Webkit".split(","),Ou=function(e,t,i){var r=t||Zo,l=r.style,c=5;if(e in l&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);c--&&!(GM[c]+e in l););return c<0?null:(c===3?"ms":c>=0?GM[c]:"")+e},nv=function(){HI()&&window.document&&(zM=window,$s=zM.document,vu=$s.documentElement,Zo=tv("div")||{style:{}},tv("div"),On=Ou(On),na=On+"Origin",Zo.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",kA=!!Ou("perspective"),tx=ia.core.reverting,ex=1)},VM=function(e){var t=e.ownerSVGElement,i=tv("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),l;r.style.display="block",i.appendChild(r),vu.appendChild(i);try{l=r.getBBox()}catch{}return i.removeChild(r),vu.removeChild(i),l},kM=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},XA=function(e){var t,i;try{t=e.getBBox()}catch{t=VM(e),i=1}return t&&(t.width||t.height)||i||(t=VM(e)),t&&!t.width&&!t.x&&!t.y?{x:+kM(e,["x","cx","x1"])||0,y:+kM(e,["y","cy","y1"])||0,width:0,height:0}:t},WA=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&XA(e))},fo=function(e,t){if(t){var i=e.style,r;t in _s&&t!==na&&(t=On),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(nx,"-$1").toLowerCase())):i.removeAttribute(t)}},eo=function(e,t,i,r,l,c){var f=new ta(e._pt,t,i,0,1,c?HA:BA);return e._pt=f,f.b=r,f.e=l,e._props.push(i),f},XM={deg:1,rad:1,turn:1},tz={grid:1,flex:1},ho=function s(e,t,i,r){var l=parseFloat(i)||0,c=(i+"").trim().substr((l+"").length)||"px",f=Zo.style,d=GI.test(t),h=e.tagName.toLowerCase()==="svg",m=(h?"client":"offset")+(d?"Width":"Height"),_=100,v=r==="px",x=r==="%",b,M,y,S;if(r===c||!l||XM[r]||XM[c])return l;if(c!=="px"&&!v&&(l=s(e,t,i,"px")),S=e.getCTM&&WA(e),(x||c==="%")&&(_s[t]||~t.indexOf("adius")))return b=S?e.getBBox()[d?"width":"height"]:e[m],Hn(x?l/b*_:l/100*b);if(f[d?"width":"height"]=_+(v?c:r),M=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!h?e:e.parentNode,S&&(M=(e.ownerSVGElement||{}).parentNode),(!M||M===$s||!M.appendChild)&&(M=$s.body),y=M._gsap,y&&x&&y.width&&d&&y.time===xa.time&&!y.uncache)return Hn(l/y.width*_);if(x&&(t==="height"||t==="width")){var A=e.style[t];e.style[t]=_+r,b=e[m],A?e.style[t]=A:fo(e,t)}else(x||c==="%")&&!tz[ba(M,"display")]&&(f.position=ba(e,"position")),M===e&&(f.position="static"),M.appendChild(Zo),b=Zo[m],M.removeChild(Zo),f.position="absolute";return d&&x&&(y=Qo(M),y.time=xa.time,y.width=M[m]),Hn(v?b*l/_:b&&l?_/b*l:0)},ns=function(e,t,i,r){var l;return ex||nv(),t in Sr&&t!=="transform"&&(t=Sr[t],~t.indexOf(",")&&(t=t.split(",")[0])),_s[t]&&t!=="transform"?(l=Tf(e,r),l=t!=="transformOrigin"?l[t]:l.svg?l.origin:op(ba(e,na))+" "+l.zOrigin+"px"):(l=e.style[t],(!l||l==="auto"||r||~(l+"").indexOf("calc("))&&(l=sp[t]&&sp[t](e,t,i)||ba(e,t)||oA(e,t)||(t==="opacity"?1:0))),i&&!~(l+"").trim().indexOf(" ")?ho(e,t,l,i)+i:l},nz=function(e,t,i,r){if(!i||i==="none"){var l=Ou(t,e,1),c=l&&ba(e,l,1);c&&c!==i?(t=l,i=c):t==="borderColor"&&(i=ba(e,"borderTopColor"))}var f=new ta(this._pt,e.style,t,0,1,FA),d=0,h=0,m,_,v,x,b,M,y,S,A,N,R,L;if(f.b=i,f.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=ba(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(M=e.style[t],e.style[t]=r,r=ba(e,t)||r,M?e.style[t]=M:fo(e,t)),m=[i,r],AA(m),i=m[0],r=m[1],v=i.match(fu)||[],L=r.match(fu)||[],L.length){for(;_=fu.exec(r);)y=_[0],A=r.substring(d,_.index),b?b=(b+1)%5:(A.substr(-5)==="rgba("||A.substr(-5)==="hsla(")&&(b=1),y!==(M=v[h++]||"")&&(x=parseFloat(M)||0,R=M.substr((x+"").length),y.charAt(1)==="="&&(y=_u(x,y)+R),S=parseFloat(y),N=y.substr((S+"").length),d=fu.lastIndex-N.length,N||(N=N||Ea.units[t]||R,d===r.length&&(r+=N,f.e+=N)),R!==N&&(x=ho(e,t,M,N)||0),f._pt={_next:f._pt,p:A||h===1?A:",",s:x,c:S-x,m:b&&b<4||t==="zIndex"?Math.round:0});f.c=d<r.length?r.substring(d,r.length):""}else f.r=t==="display"&&r==="none"?HA:BA;return nA.test(r)&&(f.e=0),this._pt=f,f},WM={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},iz=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=WM[i]||i,t[1]=WM[r]||r,t.join(" ")},az=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,l=t.u,c=i._gsap,f,d,h;if(l==="all"||l===!0)r.cssText="",d=1;else for(l=l.split(","),h=l.length;--h>-1;)f=l[h],_s[f]&&(d=1,f=f==="transformOrigin"?na:On),fo(i,f);d&&(fo(i,On),c&&(c.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Tf(i,1),c.uncache=1,GA(r)))}},sp={clearProps:function(e,t,i,r,l){if(l.data!=="isFromStart"){var c=e._pt=new ta(e._pt,t,i,0,0,az);return c.u=r,c.pr=-10,c.tween=l,e._props.push(i),1}}},Ef=[1,0,0,1,0,0],jA={},YA=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},jM=function(e){var t=ba(e,On);return YA(t)?Ef:t.substr(7).match(tA).map(Hn)},ix=function(e,t){var i=e._gsap||Qo(e),r=e.style,l=jM(e),c,f,d,h;return i.svg&&e.getAttribute("transform")?(d=e.transform.baseVal.consolidate().matrix,l=[d.a,d.b,d.c,d.d,d.e,d.f],l.join(",")==="1,0,0,1,0,0"?Ef:l):(l===Ef&&!e.offsetParent&&e!==vu&&!i.svg&&(d=r.display,r.display="block",c=e.parentNode,(!c||!e.offsetParent&&!e.getBoundingClientRect().width)&&(h=1,f=e.nextElementSibling,vu.appendChild(e)),l=jM(e),d?r.display=d:fo(e,"display"),h&&(f?c.insertBefore(e,f):c?c.appendChild(e):vu.removeChild(e))),t&&l.length>6?[l[0],l[1],l[4],l[5],l[12],l[13]]:l)},iv=function(e,t,i,r,l,c){var f=e._gsap,d=l||ix(e,!0),h=f.xOrigin||0,m=f.yOrigin||0,_=f.xOffset||0,v=f.yOffset||0,x=d[0],b=d[1],M=d[2],y=d[3],S=d[4],A=d[5],N=t.split(" "),R=parseFloat(N[0])||0,L=parseFloat(N[1])||0,P,D,T,w;i?d!==Ef&&(D=x*y-b*M)&&(T=R*(y/D)+L*(-M/D)+(M*A-y*S)/D,w=R*(-b/D)+L*(x/D)-(x*A-b*S)/D,R=T,L=w):(P=XA(e),R=P.x+(~N[0].indexOf("%")?R/100*P.width:R),L=P.y+(~(N[1]||N[0]).indexOf("%")?L/100*P.height:L)),r||r!==!1&&f.smooth?(S=R-h,A=L-m,f.xOffset=_+(S*x+A*M)-S,f.yOffset=v+(S*b+A*y)-A):f.xOffset=f.yOffset=0,f.xOrigin=R,f.yOrigin=L,f.smooth=!!r,f.origin=t,f.originIsAbsolute=!!i,e.style[na]="0px 0px",c&&(eo(c,f,"xOrigin",h,R),eo(c,f,"yOrigin",m,L),eo(c,f,"xOffset",_,f.xOffset),eo(c,f,"yOffset",v,f.yOffset)),e.setAttribute("data-svg-origin",R+" "+L)},Tf=function(e,t){var i=e._gsap||new DA(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,l=i.scaleX<0,c="px",f="deg",d=getComputedStyle(e),h=ba(e,na)||"0",m,_,v,x,b,M,y,S,A,N,R,L,P,D,T,w,q,H,k,J,ee,$,F,z,ie,de,G,I,W,le,ye,we;return m=_=v=M=y=S=A=N=R=0,x=b=1,i.svg=!!(e.getCTM&&WA(e)),d.translate&&((d.translate!=="none"||d.scale!=="none"||d.rotate!=="none")&&(r[On]=(d.translate!=="none"?"translate3d("+(d.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(d.rotate!=="none"?"rotate("+d.rotate+") ":"")+(d.scale!=="none"?"scale("+d.scale.split(" ").join(",")+") ":"")+(d[On]!=="none"?d[On]:"")),r.scale=r.rotate=r.translate="none"),D=ix(e,i.svg),i.svg&&(i.uncache?(ie=e.getBBox(),h=i.xOrigin-ie.x+"px "+(i.yOrigin-ie.y)+"px",z=""):z=!t&&e.getAttribute("data-svg-origin"),iv(e,z||h,!!z||i.originIsAbsolute,i.smooth!==!1,D)),L=i.xOrigin||0,P=i.yOrigin||0,D!==Ef&&(H=D[0],k=D[1],J=D[2],ee=D[3],m=$=D[4],_=F=D[5],D.length===6?(x=Math.sqrt(H*H+k*k),b=Math.sqrt(ee*ee+J*J),M=H||k?ru(k,H)*Go:0,A=J||ee?ru(J,ee)*Go+M:0,A&&(b*=Math.abs(Math.cos(A*xu))),i.svg&&(m-=L-(L*H+P*J),_-=P-(L*k+P*ee))):(we=D[6],le=D[7],G=D[8],I=D[9],W=D[10],ye=D[11],m=D[12],_=D[13],v=D[14],T=ru(we,W),y=T*Go,T&&(w=Math.cos(-T),q=Math.sin(-T),z=$*w+G*q,ie=F*w+I*q,de=we*w+W*q,G=$*-q+G*w,I=F*-q+I*w,W=we*-q+W*w,ye=le*-q+ye*w,$=z,F=ie,we=de),T=ru(-J,W),S=T*Go,T&&(w=Math.cos(-T),q=Math.sin(-T),z=H*w-G*q,ie=k*w-I*q,de=J*w-W*q,ye=ee*q+ye*w,H=z,k=ie,J=de),T=ru(k,H),M=T*Go,T&&(w=Math.cos(T),q=Math.sin(T),z=H*w+k*q,ie=$*w+F*q,k=k*w-H*q,F=F*w-$*q,H=z,$=ie),y&&Math.abs(y)+Math.abs(M)>359.9&&(y=M=0,S=180-S),x=Hn(Math.sqrt(H*H+k*k+J*J)),b=Hn(Math.sqrt(F*F+we*we)),T=ru($,F),A=Math.abs(T)>2e-4?T*Go:0,R=ye?1/(ye<0?-ye:ye):0),i.svg&&(z=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!YA(ba(e,On)),z&&e.setAttribute("transform",z))),Math.abs(A)>90&&Math.abs(A)<270&&(l?(x*=-1,A+=M<=0?180:-180,M+=M<=0?180:-180):(b*=-1,A+=A<=0?180:-180)),t=t||i.uncache,i.x=m-((i.xPercent=m&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-m)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+c,i.y=_-((i.yPercent=_&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-_)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+c,i.z=v+c,i.scaleX=Hn(x),i.scaleY=Hn(b),i.rotation=Hn(M)+f,i.rotationX=Hn(y)+f,i.rotationY=Hn(S)+f,i.skewX=A+f,i.skewY=N+f,i.transformPerspective=R+c,(i.zOrigin=parseFloat(h.split(" ")[2])||!t&&i.zOrigin||0)&&(r[na]=op(h)),i.xOffset=i.yOffset=0,i.force3D=Ea.force3D,i.renderTransform=i.svg?sz:kA?qA:rz,i.uncache=0,i},op=function(e){return(e=e.split(" "))[0]+" "+e[1]},w0=function(e,t,i){var r=Ci(t);return Hn(parseFloat(t)+parseFloat(ho(e,"x",i+"px",r)))+r},rz=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,qA(e,t)},zo="0deg",Ic="0px",Bo=") ",qA=function(e,t){var i=t||this,r=i.xPercent,l=i.yPercent,c=i.x,f=i.y,d=i.z,h=i.rotation,m=i.rotationY,_=i.rotationX,v=i.skewX,x=i.skewY,b=i.scaleX,M=i.scaleY,y=i.transformPerspective,S=i.force3D,A=i.target,N=i.zOrigin,R="",L=S==="auto"&&e&&e!==1||S===!0;if(N&&(_!==zo||m!==zo)){var P=parseFloat(m)*xu,D=Math.sin(P),T=Math.cos(P),w;P=parseFloat(_)*xu,w=Math.cos(P),c=w0(A,c,D*w*-N),f=w0(A,f,-Math.sin(P)*-N),d=w0(A,d,T*w*-N+N)}y!==Ic&&(R+="perspective("+y+Bo),(r||l)&&(R+="translate("+r+"%, "+l+"%) "),(L||c!==Ic||f!==Ic||d!==Ic)&&(R+=d!==Ic||L?"translate3d("+c+", "+f+", "+d+") ":"translate("+c+", "+f+Bo),h!==zo&&(R+="rotate("+h+Bo),m!==zo&&(R+="rotateY("+m+Bo),_!==zo&&(R+="rotateX("+_+Bo),(v!==zo||x!==zo)&&(R+="skew("+v+", "+x+Bo),(b!==1||M!==1)&&(R+="scale("+b+", "+M+Bo),A.style[On]=R||"translate(0, 0)"},sz=function(e,t){var i=t||this,r=i.xPercent,l=i.yPercent,c=i.x,f=i.y,d=i.rotation,h=i.skewX,m=i.skewY,_=i.scaleX,v=i.scaleY,x=i.target,b=i.xOrigin,M=i.yOrigin,y=i.xOffset,S=i.yOffset,A=i.forceCSS,N=parseFloat(c),R=parseFloat(f),L,P,D,T,w;d=parseFloat(d),h=parseFloat(h),m=parseFloat(m),m&&(m=parseFloat(m),h+=m,d+=m),d||h?(d*=xu,h*=xu,L=Math.cos(d)*_,P=Math.sin(d)*_,D=Math.sin(d-h)*-v,T=Math.cos(d-h)*v,h&&(m*=xu,w=Math.tan(h-m),w=Math.sqrt(1+w*w),D*=w,T*=w,m&&(w=Math.tan(m),w=Math.sqrt(1+w*w),L*=w,P*=w)),L=Hn(L),P=Hn(P),D=Hn(D),T=Hn(T)):(L=_,T=v,P=D=0),(N&&!~(c+"").indexOf("px")||R&&!~(f+"").indexOf("px"))&&(N=ho(x,"x",c,"px"),R=ho(x,"y",f,"px")),(b||M||y||S)&&(N=Hn(N+b-(b*L+M*D)+y),R=Hn(R+M-(b*P+M*T)+S)),(r||l)&&(w=x.getBBox(),N=Hn(N+r/100*w.width),R=Hn(R+l/100*w.height)),w="matrix("+L+","+P+","+D+","+T+","+N+","+R+")",x.setAttribute("transform",w),A&&(x.style[On]=w)},oz=function(e,t,i,r,l){var c=360,f=di(l),d=parseFloat(l)*(f&&~l.indexOf("rad")?Go:1),h=d-r,m=r+h+"deg",_,v;return f&&(_=l.split("_")[1],_==="short"&&(h%=c,h!==h%(c/2)&&(h+=h<0?c:-c)),_==="cw"&&h<0?h=(h+c*HM)%c-~~(h/c)*c:_==="ccw"&&h>0&&(h=(h-c*HM)%c-~~(h/c)*c)),e._pt=v=new ta(e._pt,t,i,r,h,kI),v.e=m,v.u="deg",e._props.push(i),v},YM=function(e,t){for(var i in t)e[i]=t[i];return e},lz=function(e,t,i){var r=YM({},i._gsap),l="perspective,force3D,transformOrigin,svgOrigin",c=i.style,f,d,h,m,_,v,x,b;r.svg?(h=i.getAttribute("transform"),i.setAttribute("transform",""),c[On]=t,f=Tf(i,1),fo(i,On),i.setAttribute("transform",h)):(h=getComputedStyle(i)[On],c[On]=t,f=Tf(i,1),c[On]=h);for(d in _s)h=r[d],m=f[d],h!==m&&l.indexOf(d)<0&&(x=Ci(h),b=Ci(m),_=x!==b?ho(i,d,h,b):parseFloat(h),v=parseFloat(m),e._pt=new ta(e._pt,f,d,_,v-_,ev),e._pt.u=b||0,e._props.push(d));YM(f,r)};ea("padding,margin,Width,Radius",function(s,e){var t="Top",i="Right",r="Bottom",l="Left",c=(e<3?[t,i,r,l]:[t+l,t+i,r+i,r+l]).map(function(f){return e<2?s+f:"border"+f+s});sp[e>1?"border"+s:s]=function(f,d,h,m,_){var v,x;if(arguments.length<4)return v=c.map(function(b){return ns(f,b,h)}),x=v.join(" "),x.split(v[0]).length===5?v[0]:x;v=(m+"").split(" "),x={},c.forEach(function(b,M){return x[b]=v[M]=v[M]||v[(M-1)/2|0]}),f.init(d,x,_)}});var ZA={name:"css",register:nv,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,l){var c=this._props,f=e.style,d=i.vars.startAt,h,m,_,v,x,b,M,y,S,A,N,R,L,P,D,T,w;ex||nv(),this.styles=this.styles||VA(e),T=this.styles.props,this.tween=i;for(M in t)if(M!=="autoRound"&&(m=t[M],!(_a[M]&&NA(M,t,i,r,e,l)))){if(x=typeof m,b=sp[M],x==="function"&&(m=m.call(i,r,e,l),x=typeof m),x==="string"&&~m.indexOf("random(")&&(m=Sf(m)),b)b(this,e,M,m,i)&&(D=1);else if(M.substr(0,2)==="--")h=(getComputedStyle(e).getPropertyValue(M)+"").trim(),m+="",ao.lastIndex=0,ao.test(h)||(y=Ci(h),S=Ci(m),S?y!==S&&(h=ho(e,M,h,S)+S):y&&(m+=y)),this.add(f,"setProperty",h,m,r,l,0,0,M),c.push(M),T.push(M,0,f[M]);else if(x!=="undefined"){if(d&&M in d?(h=typeof d[M]=="function"?d[M].call(i,r,e,l):d[M],di(h)&&~h.indexOf("random(")&&(h=Sf(h)),Ci(h+"")||h==="auto"||(h+=Ea.units[M]||Ci(ns(e,M))||""),(h+"").charAt(1)==="="&&(h=ns(e,M))):h=ns(e,M),v=parseFloat(h),A=x==="string"&&m.charAt(1)==="="&&m.substr(0,2),A&&(m=m.substr(2)),_=parseFloat(m),M in Sr&&(M==="autoAlpha"&&(v===1&&ns(e,"visibility")==="hidden"&&_&&(v=0),T.push("visibility",0,f.visibility),eo(this,f,"visibility",v?"inherit":"hidden",_?"inherit":"hidden",!_)),M!=="scale"&&M!=="transform"&&(M=Sr[M],~M.indexOf(",")&&(M=M.split(",")[0]))),N=M in _s,N){if(this.styles.save(M),w=m,x==="string"&&m.substring(0,6)==="var(--"){if(m=ba(e,m.substring(4,m.indexOf(")"))),m.substring(0,5)==="calc("){var q=e.style.perspective;e.style.perspective=m,m=ba(e,"perspective"),q?e.style.perspective=q:fo(e,"perspective")}_=parseFloat(m)}if(R||(L=e._gsap,L.renderTransform&&!t.parseTransform||Tf(e,t.parseTransform),P=t.smoothOrigin!==!1&&L.smooth,R=this._pt=new ta(this._pt,f,On,0,1,L.renderTransform,L,0,-1),R.dep=1),M==="scale")this._pt=new ta(this._pt,L,"scaleY",L.scaleY,(A?_u(L.scaleY,A+_):_)-L.scaleY||0,ev),this._pt.u=0,c.push("scaleY",M),M+="X";else if(M==="transformOrigin"){T.push(na,0,f[na]),m=iz(m),L.svg?iv(e,m,0,P,0,this):(S=parseFloat(m.split(" ")[2])||0,S!==L.zOrigin&&eo(this,L,"zOrigin",L.zOrigin,S),eo(this,f,M,op(h),op(m)));continue}else if(M==="svgOrigin"){iv(e,m,1,P,0,this);continue}else if(M in jA){oz(this,L,M,v,A?_u(v,A+m):m);continue}else if(M==="smoothOrigin"){eo(this,L,"smooth",L.smooth,m);continue}else if(M==="force3D"){L[M]=m;continue}else if(M==="transform"){lz(this,m,e);continue}}else M in f||(M=Ou(M)||M);if(N||(_||_===0)&&(v||v===0)&&!VI.test(m)&&M in f)y=(h+"").substr((v+"").length),_||(_=0),S=Ci(m)||(M in Ea.units?Ea.units[M]:y),y!==S&&(v=ho(e,M,h,S)),this._pt=new ta(this._pt,N?L:f,M,v,(A?_u(v,A+_):_)-v,!N&&(S==="px"||M==="zIndex")&&t.autoRound!==!1?jI:ev),this._pt.u=S||0,N&&w!==m?(this._pt.b=h,this._pt.e=w,this._pt.r=WI):y!==S&&S!=="%"&&(this._pt.b=h,this._pt.r=XI);else if(M in f)nz.call(this,e,M,h,A?A+m:m);else if(M in e)this.add(e,M,h||e[M],A?A+m:m,r,l);else if(M!=="parseTransform"){Xv(M,m);continue}N||(M in f?T.push(M,0,f[M]):typeof e[M]=="function"?T.push(M,2,e[M]()):T.push(M,1,h||e[M])),c.push(M)}}D&&IA(this)},render:function(e,t){if(t.tween._time||!tx())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:ns,aliases:Sr,getSetter:function(e,t,i){var r=Sr[t];return r&&r.indexOf(",")<0&&(t=r),t in _s&&t!==na&&(e._gsap.x||ns(e,"x"))?i&&BM===i?t==="scale"?KI:ZI:(BM=i||{})&&(t==="scale"?QI:JI):e.style&&!Gv(e.style[t])?YI:~t.indexOf("-")?qI:Jv(e,t)},core:{_removeProperty:fo,_getMatrix:ix}};ia.utils.checkPrefix=Ou;ia.core.getStyleSaver=VA;(function(s,e,t,i){var r=ea(s+","+e+","+t,function(l){_s[l]=1});ea(e,function(l){Ea.units[l]="deg",jA[l]=1}),Sr[r[13]]=s+","+e,ea(i,function(l){var c=l.split(":");Sr[c[1]]=r[c[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ea("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Ea.units[s]="px"});ia.registerPlugin(ZA);var nr=ia.registerPlugin(ZA)||ia;nr.core.Tween;function uz(s,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(s,i.key,i)}}function cz(s,e,t){return e&&uz(s.prototype,e),s}var vi,Vh,ya,to,no,yu,KA,Vo,nf,QA,ss,tr,JA,$A=function(){return vi||typeof window<"u"&&(vi=window.gsap)&&vi.registerPlugin&&vi},e2=1,hu=[],It=[],Ar=[],af=Date.now,av=function(e,t){return t},fz=function(){var e=nf.core,t=e.bridge||{},i=e._scrollers,r=e._proxies;i.push.apply(i,It),r.push.apply(r,Ar),It=i,Ar=r,av=function(c,f){return t[c](f)}},ro=function(e,t){return~Ar.indexOf(e)&&Ar[Ar.indexOf(e)+1][t]},rf=function(e){return!!~QA.indexOf(e)},Ii=function(e,t,i,r,l){return e.addEventListener(t,i,{passive:r!==!1,capture:!!l})},Fi=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},_h="scrollLeft",vh="scrollTop",rv=function(){return ss&&ss.isPressed||It.cache++},lp=function(e,t){var i=function r(l){if(l||l===0){e2&&(ya.history.scrollRestoration="manual");var c=ss&&ss.isPressed;l=r.v=Math.round(l)||(ss&&ss.iOS?1:0),e(l),r.cacheID=It.cache,c&&av("ss",l)}else(t||It.cache!==r.cacheID||av("ref"))&&(r.cacheID=It.cache,r.v=e());return r.v+r.offset};return i.offset=0,e&&i},ki={s:_h,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:lp(function(s){return arguments.length?ya.scrollTo(s,ai.sc()):ya.pageXOffset||to[_h]||no[_h]||yu[_h]||0})},ai={s:vh,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:ki,sc:lp(function(s){return arguments.length?ya.scrollTo(ki.sc(),s):ya.pageYOffset||to[vh]||no[vh]||yu[vh]||0})},Qi=function(e,t){return(t&&t._ctx&&t._ctx.selector||vi.utils.toArray)(e)[0]||(typeof e=="string"&&vi.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},dz=function(e,t){for(var i=t.length;i--;)if(t[i]===e||t[i].contains(e))return!0;return!1},po=function(e,t){var i=t.s,r=t.sc;rf(e)&&(e=to.scrollingElement||no);var l=It.indexOf(e),c=r===ai.sc?1:2;!~l&&(l=It.push(e)-1),It[l+c]||Ii(e,"scroll",rv);var f=It[l+c],d=f||(It[l+c]=lp(ro(e,i),!0)||(rf(e)?r:lp(function(h){return arguments.length?e[i]=h:e[i]})));return d.target=e,f||(d.smooth=vi.getProperty(e,"scrollBehavior")==="smooth"),d},sv=function(e,t,i){var r=e,l=e,c=af(),f=c,d=t||50,h=Math.max(500,d*3),m=function(b,M){var y=af();M||y-c>d?(l=r,r=b,f=c,c=y):i?r+=b:r=l+(b-l)/(y-f)*(c-f)},_=function(){l=r=i?0:r,f=c=0},v=function(b){var M=f,y=l,S=af();return(b||b===0)&&b!==r&&m(b),c===f||S-f>h?0:(r+(i?y:-y))/((i?S:c)-M)*1e3};return{update:m,reset:_,getVelocity:v}},zc=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},qM=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},t2=function(){nf=vi.core.globals().ScrollTrigger,nf&&nf.core&&fz()},n2=function(e){return vi=e||$A(),!Vh&&vi&&typeof document<"u"&&document.body&&(ya=window,to=document,no=to.documentElement,yu=to.body,QA=[ya,to,no,yu],vi.utils.clamp,JA=vi.core.context||function(){},Vo="onpointerenter"in yu?"pointer":"mouse",KA=Vn.isTouch=ya.matchMedia&&ya.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ya||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,tr=Vn.eventTypes=("ontouchstart"in no?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in no?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return e2=0},500),t2(),Vh=1),Vh};ki.op=ai;It.cache=0;var Vn=(function(){function s(t){this.init(t)}var e=s.prototype;return e.init=function(i){Vh||n2(vi)||console.warn("Please gsap.registerPlugin(Observer)"),nf||t2();var r=i.tolerance,l=i.dragMinimum,c=i.type,f=i.target,d=i.lineHeight,h=i.debounce,m=i.preventDefault,_=i.onStop,v=i.onStopDelay,x=i.ignore,b=i.wheelSpeed,M=i.event,y=i.onDragStart,S=i.onDragEnd,A=i.onDrag,N=i.onPress,R=i.onRelease,L=i.onRight,P=i.onLeft,D=i.onUp,T=i.onDown,w=i.onChangeX,q=i.onChangeY,H=i.onChange,k=i.onToggleX,J=i.onToggleY,ee=i.onHover,$=i.onHoverEnd,F=i.onMove,z=i.ignoreCheck,ie=i.isNormalizer,de=i.onGestureStart,G=i.onGestureEnd,I=i.onWheel,W=i.onEnable,le=i.onDisable,ye=i.onClick,we=i.scrollSpeed,te=i.capture,ge=i.allowClicks,Me=i.lockAxis,Oe=i.onLockAxis;this.target=f=Qi(f)||no,this.vars=i,x&&(x=vi.utils.toArray(x)),r=r||1e-9,l=l||0,b=b||1,we=we||1,c=c||"wheel,touch,pointer",h=h!==!1,d||(d=parseFloat(ya.getComputedStyle(yu).lineHeight)||22);var Je,Ze,Lt,qe,st,vt,ot,ue=this,Y=0,Zt=0,Tt=i.passive||!m&&i.passive!==!1,dt=po(f,ki),je=po(f,ai),B=dt(),C=je(),K=~c.indexOf("touch")&&!~c.indexOf("pointer")&&tr[0]==="pointerdown",ve=rf(f),xe=f.ownerDocument||to,pe=[0,0,0],Ve=[0,0,0],De=0,at=function(){return De=af()},Ye=function(et,At){return(ue.event=et)&&x&&dz(et.target,x)||At&&K&&et.pointerType!=="touch"||z&&z(et,At)},Ce=function(){ue._vx.reset(),ue._vy.reset(),Ze.pause(),_&&_(ue)},Ae=function(){var et=ue.deltaX=qM(pe),At=ue.deltaY=qM(Ve),Be=Math.abs(et)>=r,pt=Math.abs(At)>=r;H&&(Be||pt)&&H(ue,et,At,pe,Ve),Be&&(L&&ue.deltaX>0&&L(ue),P&&ue.deltaX<0&&P(ue),w&&w(ue),k&&ue.deltaX<0!=Y<0&&k(ue),Y=ue.deltaX,pe[0]=pe[1]=pe[2]=0),pt&&(T&&ue.deltaY>0&&T(ue),D&&ue.deltaY<0&&D(ue),q&&q(ue),J&&ue.deltaY<0!=Zt<0&&J(ue),Zt=ue.deltaY,Ve[0]=Ve[1]=Ve[2]=0),(qe||Lt)&&(F&&F(ue),Lt&&(y&&Lt===1&&y(ue),A&&A(ue),Lt=0),qe=!1),vt&&!(vt=!1)&&Oe&&Oe(ue),st&&(I(ue),st=!1),Je=0},Ge=function(et,At,Be){pe[Be]+=et,Ve[Be]+=At,ue._vx.update(et),ue._vy.update(At),h?Je||(Je=requestAnimationFrame(Ae)):Ae()},Ie=function(et,At){Me&&!ot&&(ue.axis=ot=Math.abs(et)>Math.abs(At)?"x":"y",vt=!0),ot!=="y"&&(pe[2]+=et,ue._vx.update(et,!0)),ot!=="x"&&(Ve[2]+=At,ue._vy.update(At,!0)),h?Je||(Je=requestAnimationFrame(Ae)):Ae()},ze=function(et){if(!Ye(et,1)){et=zc(et,m);var At=et.clientX,Be=et.clientY,pt=At-ue.x,lt=Be-ue.y,mt=ue.isDragging;ue.x=At,ue.y=Be,(mt||(pt||lt)&&(Math.abs(ue.startX-At)>=l||Math.abs(ue.startY-Be)>=l))&&(Lt||(Lt=mt?2:1),mt||(ue.isDragging=!0),Ie(pt,lt))}},gt=ue.onPress=function(ke){Ye(ke,1)||ke&&ke.button||(ue.axis=ot=null,Ze.pause(),ue.isPressed=!0,ke=zc(ke),Y=Zt=0,ue.startX=ue.x=ke.clientX,ue.startY=ue.y=ke.clientY,ue._vx.reset(),ue._vy.reset(),Ii(ie?f:xe,tr[1],ze,Tt,!0),ue.deltaX=ue.deltaY=0,N&&N(ue))},X=ue.onRelease=function(ke){if(!Ye(ke,1)){Fi(ie?f:xe,tr[1],ze,!0);var et=!isNaN(ue.y-ue.startY),At=ue.isDragging,Be=At&&(Math.abs(ue.x-ue.startX)>3||Math.abs(ue.y-ue.startY)>3),pt=zc(ke);!Be&&et&&(ue._vx.reset(),ue._vy.reset(),m&&ge&&vi.delayedCall(.08,function(){if(af()-De>300&&!ke.defaultPrevented){if(ke.target.click)ke.target.click();else if(xe.createEvent){var lt=xe.createEvent("MouseEvents");lt.initMouseEvent("click",!0,!0,ya,1,pt.screenX,pt.screenY,pt.clientX,pt.clientY,!1,!1,!1,!1,0,null),ke.target.dispatchEvent(lt)}}})),ue.isDragging=ue.isGesturing=ue.isPressed=!1,_&&At&&!ie&&Ze.restart(!0),Lt&&Ae(),S&&At&&S(ue),R&&R(ue,Be)}},Ne=function(et){return et.touches&&et.touches.length>1&&(ue.isGesturing=!0)&&de(et,ue.isDragging)},Re=function(){return(ue.isGesturing=!1)||G(ue)},Pe=function(et){if(!Ye(et)){var At=dt(),Be=je();Ge((At-B)*we,(Be-C)*we,1),B=At,C=Be,_&&Ze.restart(!0)}},Te=function(et){if(!Ye(et)){et=zc(et,m),I&&(st=!0);var At=(et.deltaMode===1?d:et.deltaMode===2?ya.innerHeight:1)*b;Ge(et.deltaX*At,et.deltaY*At,0),_&&!ie&&Ze.restart(!0)}},_e=function(et){if(!Ye(et)){var At=et.clientX,Be=et.clientY,pt=At-ue.x,lt=Be-ue.y;ue.x=At,ue.y=Be,qe=!0,_&&Ze.restart(!0),(pt||lt)&&Ie(pt,lt)}},We=function(et){ue.event=et,ee(ue)},ut=function(et){ue.event=et,$(ue)},Xt=function(et){return Ye(et)||zc(et,m)&&ye(ue)};Ze=ue._dc=vi.delayedCall(v||.25,Ce).pause(),ue.deltaX=ue.deltaY=0,ue._vx=sv(0,50,!0),ue._vy=sv(0,50,!0),ue.scrollX=dt,ue.scrollY=je,ue.isDragging=ue.isGesturing=ue.isPressed=!1,JA(this),ue.enable=function(ke){return ue.isEnabled||(Ii(ve?xe:f,"scroll",rv),c.indexOf("scroll")>=0&&Ii(ve?xe:f,"scroll",Pe,Tt,te),c.indexOf("wheel")>=0&&Ii(f,"wheel",Te,Tt,te),(c.indexOf("touch")>=0&&KA||c.indexOf("pointer")>=0)&&(Ii(f,tr[0],gt,Tt,te),Ii(xe,tr[2],X),Ii(xe,tr[3],X),ge&&Ii(f,"click",at,!0,!0),ye&&Ii(f,"click",Xt),de&&Ii(xe,"gesturestart",Ne),G&&Ii(xe,"gestureend",Re),ee&&Ii(f,Vo+"enter",We),$&&Ii(f,Vo+"leave",ut),F&&Ii(f,Vo+"move",_e)),ue.isEnabled=!0,ue.isDragging=ue.isGesturing=ue.isPressed=qe=Lt=!1,ue._vx.reset(),ue._vy.reset(),B=dt(),C=je(),ke&&ke.type&&gt(ke),W&&W(ue)),ue},ue.disable=function(){ue.isEnabled&&(hu.filter(function(ke){return ke!==ue&&rf(ke.target)}).length||Fi(ve?xe:f,"scroll",rv),ue.isPressed&&(ue._vx.reset(),ue._vy.reset(),Fi(ie?f:xe,tr[1],ze,!0)),Fi(ve?xe:f,"scroll",Pe,te),Fi(f,"wheel",Te,te),Fi(f,tr[0],gt,te),Fi(xe,tr[2],X),Fi(xe,tr[3],X),Fi(f,"click",at,!0),Fi(f,"click",Xt),Fi(xe,"gesturestart",Ne),Fi(xe,"gestureend",Re),Fi(f,Vo+"enter",We),Fi(f,Vo+"leave",ut),Fi(f,Vo+"move",_e),ue.isEnabled=ue.isPressed=ue.isDragging=!1,le&&le(ue))},ue.kill=ue.revert=function(){ue.disable();var ke=hu.indexOf(ue);ke>=0&&hu.splice(ke,1),ss===ue&&(ss=0)},hu.push(ue),ie&&rf(f)&&(ss=ue),ue.enable(M)},cz(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s})();Vn.version="3.14.2";Vn.create=function(s){return new Vn(s)};Vn.register=n2;Vn.getAll=function(){return hu.slice()};Vn.getById=function(s){return hu.filter(function(e){return e.vars.id===s})[0]};$A()&&vi.registerPlugin(Vn);var nt,lu,Ft,xn,va,an,ax,up,Af,sf,Wc,xh,Ti,Ep,ov,Hi,ZM,KM,uu,i2,D0,a2,Bi,lv,r2,s2,Zs,uv,rx,Su,sx,of,cv,N0,yh=1,Ai=Date.now,U0=Ai(),ja=0,jc=0,QM=function(e,t,i){var r=ga(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},JM=function(e,t){return t&&(!ga(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},hz=function s(){return jc&&requestAnimationFrame(s)},$M=function(){return Ep=1},eE=function(){return Ep=0},mr=function(e){return e},Yc=function(e){return Math.round(e*1e5)/1e5||0},o2=function(){return typeof window<"u"},l2=function(){return nt||o2()&&(nt=window.gsap)&&nt.registerPlugin&&nt},ol=function(e){return!!~ax.indexOf(e)},u2=function(e){return(e==="Height"?sx:Ft["inner"+e])||va["client"+e]||an["client"+e]},c2=function(e){return ro(e,"getBoundingClientRect")||(ol(e)?function(){return Yh.width=Ft.innerWidth,Yh.height=sx,Yh}:function(){return as(e)})},pz=function(e,t,i){var r=i.d,l=i.d2,c=i.a;return(c=ro(e,"getBoundingClientRect"))?function(){return c()[r]}:function(){return(t?u2(l):e["client"+l])||0}},mz=function(e,t){return!t||~Ar.indexOf(e)?c2(e):function(){return Yh}},br=function(e,t){var i=t.s,r=t.d2,l=t.d,c=t.a;return Math.max(0,(i="scroll"+r)&&(c=ro(e,i))?c()-c2(e)()[l]:ol(e)?(va[i]||an[i])-u2(r):e[i]-e["offset"+r])},Sh=function(e,t){for(var i=0;i<uu.length;i+=3)(!t||~t.indexOf(uu[i+1]))&&e(uu[i],uu[i+1],uu[i+2])},ga=function(e){return typeof e=="string"},Ri=function(e){return typeof e=="function"},qc=function(e){return typeof e=="number"},ko=function(e){return typeof e=="object"},Bc=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},L0=function(e,t){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e)}):t(e);i&&i.totalTime&&(e.callbackAnimation=i)}},su=Math.abs,f2="left",d2="top",ox="right",lx="bottom",tl="width",nl="height",lf="Right",uf="Left",cf="Top",ff="Bottom",Qn="padding",Ha="margin",Pu="Width",ux="Height",ii="px",Ga=function(e){return Ft.getComputedStyle(e)},gz=function(e){var t=Ga(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},tE=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},as=function(e,t){var i=t&&Ga(e)[ov]!=="matrix(1, 0, 0, 1, 0, 0)"&&nt.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect();return i&&i.progress(0).kill(),r},cp=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},h2=function(e){var t=[],i=e.labels,r=e.duration(),l;for(l in i)t.push(i[l]/r);return t},_z=function(e){return function(t){return nt.utils.snap(h2(e),t)}},cx=function(e){var t=nt.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(r,l){return r-l});return i?function(r,l,c){c===void 0&&(c=.001);var f;if(!l)return t(r);if(l>0){for(r-=c,f=0;f<i.length;f++)if(i[f]>=r)return i[f];return i[f-1]}else for(f=i.length,r+=c;f--;)if(i[f]<=r)return i[f];return i[0]}:function(r,l,c){c===void 0&&(c=.001);var f=t(r);return!l||Math.abs(f-r)<c||f-r<0==l<0?f:t(l<0?r-e:r+e)}},vz=function(e){return function(t,i){return cx(h2(e))(t,i.direction)}},bh=function(e,t,i,r){return i.split(",").forEach(function(l){return e(t,l,r)})},fi=function(e,t,i,r,l){return e.addEventListener(t,i,{passive:!r,capture:!!l})},ci=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},Mh=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},nE={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Eh={toggleActions:"play",anticipatePin:0},fp={top:0,left:0,center:.5,bottom:1,right:1},kh=function(e,t){if(ga(e)){var i=e.indexOf("="),r=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(r*=t/100),e=e.substr(0,i-1)),e=r+(e in fp?fp[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Th=function(e,t,i,r,l,c,f,d){var h=l.startColor,m=l.endColor,_=l.fontSize,v=l.indent,x=l.fontWeight,b=xn.createElement("div"),M=ol(i)||ro(i,"pinType")==="fixed",y=e.indexOf("scroller")!==-1,S=M?an:i,A=e.indexOf("start")!==-1,N=A?h:m,R="border-color:"+N+";font-size:"+_+";color:"+N+";font-weight:"+x+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return R+="position:"+((y||d)&&M?"fixed;":"absolute;"),(y||d||!M)&&(R+=(r===ai?ox:lx)+":"+(c+parseFloat(v))+"px;"),f&&(R+="box-sizing:border-box;text-align:left;width:"+f.offsetWidth+"px;"),b._isStart=A,b.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),b.style.cssText=R,b.innerText=t||t===0?e+"-"+t:e,S.children[0]?S.insertBefore(b,S.children[0]):S.appendChild(b),b._offset=b["offset"+r.op.d2],Xh(b,0,r,A),b},Xh=function(e,t,i,r){var l={display:"block"},c=i[r?"os2":"p2"],f=i[r?"p2":"os2"];e._isFlipped=r,l[i.a+"Percent"]=r?-100:0,l[i.a]=r?"1px":0,l["border"+c+Pu]=1,l["border"+f+Pu]=0,l[i.p]=t+"px",nt.set(e,l)},Pt=[],fv={},Cf,iE=function(){return Ai()-ja>34&&(Cf||(Cf=requestAnimationFrame(cs)))},ou=function(){(!Bi||!Bi.isPressed||Bi.startX>an.clientWidth)&&(It.cache++,Bi?Cf||(Cf=requestAnimationFrame(cs)):cs(),ja||ul("scrollStart"),ja=Ai())},O0=function(){s2=Ft.innerWidth,r2=Ft.innerHeight},Zc=function(e){It.cache++,(e===!0||!Ti&&!a2&&!xn.fullscreenElement&&!xn.webkitFullscreenElement&&(!lv||s2!==Ft.innerWidth||Math.abs(Ft.innerHeight-r2)>Ft.innerHeight*.25))&&up.restart(!0)},ll={},xz=[],p2=function s(){return ci(Gt,"scrollEnd",s)||Ko(!0)},ul=function(e){return ll[e]&&ll[e].map(function(t){return t()})||xz},ma=[],m2=function(e){for(var t=0;t<ma.length;t+=5)(!e||ma[t+4]&&ma[t+4].query===e)&&(ma[t].style.cssText=ma[t+1],ma[t].getBBox&&ma[t].setAttribute("transform",ma[t+2]||""),ma[t+3].uncache=1)},g2=function(){return It.forEach(function(e){return Ri(e)&&++e.cacheID&&(e.rec=e())})},fx=function(e,t){var i;for(Hi=0;Hi<Pt.length;Hi++)i=Pt[Hi],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));of=!0,t&&m2(t),t||ul("revert")},_2=function(e,t){It.cache++,(t||!Gi)&&It.forEach(function(i){return Ri(i)&&i.cacheID++&&(i.rec=0)}),ga(e)&&(Ft.history.scrollRestoration=rx=e)},Gi,il=0,aE,yz=function(){if(aE!==il){var e=aE=il;requestAnimationFrame(function(){return e===il&&Ko(!0)})}},v2=function(){an.appendChild(Su),sx=!Bi&&Su.offsetHeight||Ft.innerHeight,an.removeChild(Su)},rE=function(e){return Af(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Ko=function(e,t){if(va=xn.documentElement,an=xn.body,ax=[Ft,xn,va,an],ja&&!e&&!of){fi(Gt,"scrollEnd",p2);return}v2(),Gi=Gt.isRefreshing=!0,of||g2();var i=ul("refreshInit");i2&&Gt.sort(),t||fx(),It.forEach(function(r){Ri(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),Pt.slice(0).forEach(function(r){return r.refresh()}),of=!1,Pt.forEach(function(r){if(r._subPinOffset&&r.pin){var l=r.vars.horizontal?"offsetWidth":"offsetHeight",c=r.pin[l];r.revert(!0,1),r.adjustPinSpacing(r.pin[l]-c),r.refresh()}}),cv=1,rE(!0),Pt.forEach(function(r){var l=br(r.scroller,r._dir),c=r.vars.end==="max"||r._endClamp&&r.end>l,f=r._startClamp&&r.start>=l;(c||f)&&r.setPositions(f?l-1:r.start,c?Math.max(f?l:r.start+1,l):r.end,!0)}),rE(!1),cv=0,i.forEach(function(r){return r&&r.render&&r.render(-1)}),It.forEach(function(r){Ri(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),_2(rx,1),up.pause(),il++,Gi=2,cs(2),Pt.forEach(function(r){return Ri(r.vars.onRefresh)&&r.vars.onRefresh(r)}),Gi=Gt.isRefreshing=!1,ul("refresh")},dv=0,Wh=1,df,cs=function(e){if(e===2||!Gi&&!of){Gt.isUpdating=!0,df&&df.update(0);var t=Pt.length,i=Ai(),r=i-U0>=50,l=t&&Pt[0].scroll();if(Wh=dv>l?-1:1,Gi||(dv=l),r&&(ja&&!Ep&&i-ja>200&&(ja=0,ul("scrollEnd")),Wc=U0,U0=i),Wh<0){for(Hi=t;Hi-- >0;)Pt[Hi]&&Pt[Hi].update(0,r);Wh=1}else for(Hi=0;Hi<t;Hi++)Pt[Hi]&&Pt[Hi].update(0,r);Gt.isUpdating=!1}Cf=0},hv=[f2,d2,lx,ox,Ha+ff,Ha+lf,Ha+cf,Ha+uf,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],jh=hv.concat([tl,nl,"boxSizing","max"+Pu,"max"+ux,"position",Ha,Qn,Qn+cf,Qn+lf,Qn+ff,Qn+uf]),Sz=function(e,t,i){bu(i);var r=e._gsap;if(r.spacerIsNative)bu(r.spacerState);else if(e._gsap.swappedIn){var l=t.parentNode;l&&(l.insertBefore(e,t),l.removeChild(t))}e._gsap.swappedIn=!1},P0=function(e,t,i,r){if(!e._gsap.swappedIn){for(var l=hv.length,c=t.style,f=e.style,d;l--;)d=hv[l],c[d]=i[d];c.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(c.display="inline-block"),f[lx]=f[ox]="auto",c.flexBasis=i.flexBasis||"auto",c.overflow="visible",c.boxSizing="border-box",c[tl]=cp(e,ki)+ii,c[nl]=cp(e,ai)+ii,c[Qn]=f[Ha]=f[d2]=f[f2]="0",bu(r),f[tl]=f["max"+Pu]=i[tl],f[nl]=f["max"+ux]=i[nl],f[Qn]=i[Qn],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},bz=/([A-Z])/g,bu=function(e){if(e){var t=e.t.style,i=e.length,r=0,l,c;for((e.t._gsap||nt.core.getCache(e.t)).uncache=1;r<i;r+=2)c=e[r+1],l=e[r],c?t[l]=c:t[l]&&t.removeProperty(l.replace(bz,"-$1").toLowerCase())}},Ah=function(e){for(var t=jh.length,i=e.style,r=[],l=0;l<t;l++)r.push(jh[l],i[jh[l]]);return r.t=e,r},Mz=function(e,t,i){for(var r=[],l=e.length,c=i?8:0,f;c<l;c+=2)f=e[c],r.push(f,f in t?t[f]:e[c+1]);return r.t=e.t,r},Yh={left:0,top:0},sE=function(e,t,i,r,l,c,f,d,h,m,_,v,x,b){Ri(e)&&(e=e(d)),ga(e)&&e.substr(0,3)==="max"&&(e=v+(e.charAt(4)==="="?kh("0"+e.substr(3),i):0));var M=x?x.time():0,y,S,A;if(x&&x.seek(0),isNaN(e)||(e=+e),qc(e))x&&(e=nt.utils.mapRange(x.scrollTrigger.start,x.scrollTrigger.end,0,v,e)),f&&Xh(f,i,r,!0);else{Ri(t)&&(t=t(d));var N=(e||"0").split(" "),R,L,P,D;A=Qi(t,d)||an,R=as(A)||{},(!R||!R.left&&!R.top)&&Ga(A).display==="none"&&(D=A.style.display,A.style.display="block",R=as(A),D?A.style.display=D:A.style.removeProperty("display")),L=kh(N[0],R[r.d]),P=kh(N[1]||"0",i),e=R[r.p]-h[r.p]-m+L+l-P,f&&Xh(f,P,r,i-P<20||f._isStart&&P>20),i-=i-P}if(b&&(d[b]=e||-.001,e<0&&(e=0)),c){var T=e+i,w=c._isStart;y="scroll"+r.d2,Xh(c,T,r,w&&T>20||!w&&(_?Math.max(an[y],va[y]):c.parentNode[y])<=T+1),_&&(h=as(f),_&&(c.style[r.op.p]=h[r.op.p]-r.op.m-c._offset+ii))}return x&&A&&(y=as(A),x.seek(v),S=as(A),x._caScrollDist=y[r.p]-S[r.p],e=e/x._caScrollDist*v),x&&x.seek(M),x?e:Math.round(e)},Ez=/(webkit|moz|length|cssText|inset)/i,oE=function(e,t,i,r){if(e.parentNode!==t){var l=e.style,c,f;if(t===an){e._stOrig=l.cssText,f=Ga(e);for(c in f)!+c&&!Ez.test(c)&&f[c]&&typeof l[c]=="string"&&c!=="0"&&(l[c]=f[c]);l.top=i,l.left=r}else l.cssText=e._stOrig;nt.core.getCache(e).uncache=1,t.appendChild(e)}},x2=function(e,t,i){var r=t,l=r;return function(c){var f=Math.round(e());return f!==r&&f!==l&&Math.abs(f-r)>3&&Math.abs(f-l)>3&&(c=f,i&&i()),l=r,r=Math.round(c),r}},Ch=function(e,t,i){var r={};r[t.p]="+="+i,nt.set(e,r)},lE=function(e,t){var i=po(e,t),r="_scroll"+t.p2,l=function c(f,d,h,m,_){var v=c.tween,x=d.onComplete,b={};h=h||i();var M=x2(i,h,function(){v.kill(),c.tween=0});return _=m&&_||0,m=m||f-h,v&&v.kill(),d[r]=f,d.inherit=!1,d.modifiers=b,b[r]=function(){return M(h+m*v.ratio+_*v.ratio*v.ratio)},d.onUpdate=function(){It.cache++,c.tween&&cs()},d.onComplete=function(){c.tween=0,x&&x.call(v)},v=c.tween=nt.to(e,d),v};return e[r]=i,i.wheelHandler=function(){return l.tween&&l.tween.kill()&&(l.tween=0)},fi(e,"wheel",i.wheelHandler),Gt.isTouch&&fi(e,"touchmove",i.wheelHandler),l},Gt=(function(){function s(t,i){lu||s.register(nt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),uv(this),this.init(t,i)}var e=s.prototype;return e.init=function(i,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!jc){this.update=this.refresh=this.kill=mr;return}i=tE(ga(i)||qc(i)||i.nodeType?{trigger:i}:i,Eh);var l=i,c=l.onUpdate,f=l.toggleClass,d=l.id,h=l.onToggle,m=l.onRefresh,_=l.scrub,v=l.trigger,x=l.pin,b=l.pinSpacing,M=l.invalidateOnRefresh,y=l.anticipatePin,S=l.onScrubComplete,A=l.onSnapComplete,N=l.once,R=l.snap,L=l.pinReparent,P=l.pinSpacer,D=l.containerAnimation,T=l.fastScrollEnd,w=l.preventOverlaps,q=i.horizontal||i.containerAnimation&&i.horizontal!==!1?ki:ai,H=!_&&_!==0,k=Qi(i.scroller||Ft),J=nt.core.getCache(k),ee=ol(k),$=("pinType"in i?i.pinType:ro(k,"pinType")||ee&&"fixed")==="fixed",F=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],z=H&&i.toggleActions.split(" "),ie="markers"in i?i.markers:Eh.markers,de=ee?0:parseFloat(Ga(k)["border"+q.p2+Pu])||0,G=this,I=i.onRefreshInit&&function(){return i.onRefreshInit(G)},W=pz(k,ee,q),le=mz(k,ee),ye=0,we=0,te=0,ge=po(k,q),Me,Oe,Je,Ze,Lt,qe,st,vt,ot,ue,Y,Zt,Tt,dt,je,B,C,K,ve,xe,pe,Ve,De,at,Ye,Ce,Ae,Ge,Ie,ze,gt,X,Ne,Re,Pe,Te,_e,We,ut;if(G._startClamp=G._endClamp=!1,G._dir=q,y*=45,G.scroller=k,G.scroll=D?D.time.bind(D):ge,Ze=ge(),G.vars=i,r=r||i.animation,"refreshPriority"in i&&(i2=1,i.refreshPriority===-9999&&(df=G)),J.tweenScroll=J.tweenScroll||{top:lE(k,ai),left:lE(k,ki)},G.tweenTo=Me=J.tweenScroll[q.p],G.scrubDuration=function(Be){Ne=qc(Be)&&Be,Ne?X?X.duration(Be):X=nt.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Ne,paused:!0,onComplete:function(){return S&&S(G)}}):(X&&X.progress(1).kill(),X=0)},r&&(r.vars.lazy=!1,r._initted&&!G.isReverted||r.vars.immediateRender!==!1&&i.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),G.animation=r.pause(),r.scrollTrigger=G,G.scrubDuration(_),ze=0,d||(d=r.vars.id)),R&&((!ko(R)||R.push)&&(R={snapTo:R}),"scrollBehavior"in an.style&&nt.set(ee?[an,va]:k,{scrollBehavior:"auto"}),It.forEach(function(Be){return Ri(Be)&&Be.target===(ee?xn.scrollingElement||va:k)&&(Be.smooth=!1)}),Je=Ri(R.snapTo)?R.snapTo:R.snapTo==="labels"?_z(r):R.snapTo==="labelsDirectional"?vz(r):R.directional!==!1?function(Be,pt){return cx(R.snapTo)(Be,Ai()-we<500?0:pt.direction)}:nt.utils.snap(R.snapTo),Re=R.duration||{min:.1,max:2},Re=ko(Re)?sf(Re.min,Re.max):sf(Re,Re),Pe=nt.delayedCall(R.delay||Ne/2||.1,function(){var Be=ge(),pt=Ai()-we<500,lt=Me.tween;if((pt||Math.abs(G.getVelocity())<10)&&!lt&&!Ep&&ye!==Be){var mt=(Be-qe)/dt,yn=r&&!H?r.totalProgress():mt,xt=pt?0:(yn-gt)/(Ai()-Wc)*1e3||0,un=nt.utils.clamp(-mt,1-mt,su(xt/2)*xt/.185),cn=mt+(R.inertia===!1?0:un),Ct,St,zt=R,kn=zt.onStart,fn=zt.onInterrupt,oi=zt.onComplete;if(Ct=Je(cn,G),qc(Ct)||(Ct=cn),St=Math.max(0,Math.round(qe+Ct*dt)),Be<=st&&Be>=qe&&St!==Be){if(lt&&!lt._initted&&lt.data<=su(St-Be))return;R.inertia===!1&&(un=Ct-mt),Me(St,{duration:Re(su(Math.max(su(cn-yn),su(Ct-yn))*.185/xt/.05||0)),ease:R.ease||"power3",data:su(St-Be),onInterrupt:function(){return Pe.restart(!0)&&fn&&fn(G)},onComplete:function(){G.update(),ye=ge(),r&&!H&&(X?X.resetTo("totalProgress",Ct,r._tTime/r._tDur):r.progress(Ct)),ze=gt=r&&!H?r.totalProgress():G.progress,A&&A(G),oi&&oi(G)}},Be,un*dt,St-Be-un*dt),kn&&kn(G,Me.tween)}}else G.isActive&&ye!==Be&&Pe.restart(!0)}).pause()),d&&(fv[d]=G),v=G.trigger=Qi(v||x!==!0&&x),ut=v&&v._gsap&&v._gsap.stRevert,ut&&(ut=ut(G)),x=x===!0?v:Qi(x),ga(f)&&(f={targets:v,className:f}),x&&(b===!1||b===Ha||(b=!b&&x.parentNode&&x.parentNode.style&&Ga(x.parentNode).display==="flex"?!1:Qn),G.pin=x,Oe=nt.core.getCache(x),Oe.spacer?je=Oe.pinState:(P&&(P=Qi(P),P&&!P.nodeType&&(P=P.current||P.nativeElement),Oe.spacerIsNative=!!P,P&&(Oe.spacerState=Ah(P))),Oe.spacer=K=P||xn.createElement("div"),K.classList.add("pin-spacer"),d&&K.classList.add("pin-spacer-"+d),Oe.pinState=je=Ah(x)),i.force3D!==!1&&nt.set(x,{force3D:!0}),G.spacer=K=Oe.spacer,Ie=Ga(x),at=Ie[b+q.os2],xe=nt.getProperty(x),pe=nt.quickSetter(x,q.a,ii),P0(x,K,Ie),C=Ah(x)),ie){Zt=ko(ie)?tE(ie,nE):nE,ue=Th("scroller-start",d,k,q,Zt,0),Y=Th("scroller-end",d,k,q,Zt,0,ue),ve=ue["offset"+q.op.d2];var Xt=Qi(ro(k,"content")||k);vt=this.markerStart=Th("start",d,Xt,q,Zt,ve,0,D),ot=this.markerEnd=Th("end",d,Xt,q,Zt,ve,0,D),D&&(We=nt.quickSetter([vt,ot],q.a,ii)),!$&&!(Ar.length&&ro(k,"fixedMarkers")===!0)&&(gz(ee?an:k),nt.set([ue,Y],{force3D:!0}),Ce=nt.quickSetter(ue,q.a,ii),Ge=nt.quickSetter(Y,q.a,ii))}if(D){var ke=D.vars.onUpdate,et=D.vars.onUpdateParams;D.eventCallback("onUpdate",function(){G.update(0,0,1),ke&&ke.apply(D,et||[])})}if(G.previous=function(){return Pt[Pt.indexOf(G)-1]},G.next=function(){return Pt[Pt.indexOf(G)+1]},G.revert=function(Be,pt){if(!pt)return G.kill(!0);var lt=Be!==!1||!G.enabled,mt=Ti;lt!==G.isReverted&&(lt&&(Te=Math.max(ge(),G.scroll.rec||0),te=G.progress,_e=r&&r.progress()),vt&&[vt,ot,ue,Y].forEach(function(yn){return yn.style.display=lt?"none":"block"}),lt&&(Ti=G,G.update(lt)),x&&(!L||!G.isActive)&&(lt?Sz(x,K,je):P0(x,K,Ga(x),Ye)),lt||G.update(lt),Ti=mt,G.isReverted=lt)},G.refresh=function(Be,pt,lt,mt){if(!((Ti||!G.enabled)&&!pt)){if(x&&Be&&ja){fi(s,"scrollEnd",p2);return}!Gi&&I&&I(G),Ti=G,Me.tween&&!lt&&(Me.tween.kill(),Me.tween=0),X&&X.pause(),M&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(Qe){return Qe.vars.immediateRender&&Qe.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),G.isReverted||G.revert(!0,!0),G._subPinOffset=!1;var yn=W(),xt=le(),un=D?D.duration():br(k,q),cn=dt<=.01||!dt,Ct=0,St=mt||0,zt=ko(lt)?lt.end:i.end,kn=i.endTrigger||v,fn=ko(lt)?lt.start:i.start||(i.start===0||!v?0:x?"0 0":"0 100%"),oi=G.pinnedContainer=i.pinnedContainer&&Qi(i.pinnedContainer,G),Ni=v&&Math.max(0,Pt.indexOf(G))||0,Sn=Ni,Nn,bn,Si,Ra,U,Z,ce,se,ae,Le,He,Fe,Ke;for(ie&&ko(lt)&&(Fe=nt.getProperty(ue,q.p),Ke=nt.getProperty(Y,q.p));Sn-- >0;)Z=Pt[Sn],Z.end||Z.refresh(0,1)||(Ti=G),ce=Z.pin,ce&&(ce===v||ce===x||ce===oi)&&!Z.isReverted&&(Le||(Le=[]),Le.unshift(Z),Z.revert(!0,!0)),Z!==Pt[Sn]&&(Ni--,Sn--);for(Ri(fn)&&(fn=fn(G)),fn=QM(fn,"start",G),qe=sE(fn,v,yn,q,ge(),vt,ue,G,xt,de,$,un,D,G._startClamp&&"_startClamp")||(x?-.001:0),Ri(zt)&&(zt=zt(G)),ga(zt)&&!zt.indexOf("+=")&&(~zt.indexOf(" ")?zt=(ga(fn)?fn.split(" ")[0]:"")+zt:(Ct=kh(zt.substr(2),yn),zt=ga(fn)?fn:(D?nt.utils.mapRange(0,D.duration(),D.scrollTrigger.start,D.scrollTrigger.end,qe):qe)+Ct,kn=v)),zt=QM(zt,"end",G),st=Math.max(qe,sE(zt||(kn?"100% 0":un),kn,yn,q,ge()+Ct,ot,Y,G,xt,de,$,un,D,G._endClamp&&"_endClamp"))||-.001,Ct=0,Sn=Ni;Sn--;)Z=Pt[Sn]||{},ce=Z.pin,ce&&Z.start-Z._pinPush<=qe&&!D&&Z.end>0&&(Nn=Z.end-(G._startClamp?Math.max(0,Z.start):Z.start),(ce===v&&Z.start-Z._pinPush<qe||ce===oi)&&isNaN(fn)&&(Ct+=Nn*(1-Z.progress)),ce===x&&(St+=Nn));if(qe+=Ct,st+=Ct,G._startClamp&&(G._startClamp+=Ct),G._endClamp&&!Gi&&(G._endClamp=st||-.001,st=Math.min(st,br(k,q))),dt=st-qe||(qe-=.01)&&.001,cn&&(te=nt.utils.clamp(0,1,nt.utils.normalize(qe,st,Te))),G._pinPush=St,vt&&Ct&&(Nn={},Nn[q.a]="+="+Ct,oi&&(Nn[q.p]="-="+ge()),nt.set([vt,ot],Nn)),x&&!(cv&&G.end>=br(k,q)))Nn=Ga(x),Ra=q===ai,Si=ge(),Ve=parseFloat(xe(q.a))+St,!un&&st>1&&(He=(ee?xn.scrollingElement||va:k).style,He={style:He,value:He["overflow"+q.a.toUpperCase()]},ee&&Ga(an)["overflow"+q.a.toUpperCase()]!=="scroll"&&(He.style["overflow"+q.a.toUpperCase()]="scroll")),P0(x,K,Nn),C=Ah(x),bn=as(x,!0),se=$&&po(k,Ra?ki:ai)(),b?(Ye=[b+q.os2,dt+St+ii],Ye.t=K,Sn=b===Qn?cp(x,q)+dt+St:0,Sn&&(Ye.push(q.d,Sn+ii),K.style.flexBasis!=="auto"&&(K.style.flexBasis=Sn+ii)),bu(Ye),oi&&Pt.forEach(function(Qe){Qe.pin===oi&&Qe.vars.pinSpacing!==!1&&(Qe._subPinOffset=!0)}),$&&ge(Te)):(Sn=cp(x,q),Sn&&K.style.flexBasis!=="auto"&&(K.style.flexBasis=Sn+ii)),$&&(U={top:bn.top+(Ra?Si-qe:se)+ii,left:bn.left+(Ra?se:Si-qe)+ii,boxSizing:"border-box",position:"fixed"},U[tl]=U["max"+Pu]=Math.ceil(bn.width)+ii,U[nl]=U["max"+ux]=Math.ceil(bn.height)+ii,U[Ha]=U[Ha+cf]=U[Ha+lf]=U[Ha+ff]=U[Ha+uf]="0",U[Qn]=Nn[Qn],U[Qn+cf]=Nn[Qn+cf],U[Qn+lf]=Nn[Qn+lf],U[Qn+ff]=Nn[Qn+ff],U[Qn+uf]=Nn[Qn+uf],B=Mz(je,U,L),Gi&&ge(0)),r?(ae=r._initted,D0(1),r.render(r.duration(),!0,!0),De=xe(q.a)-Ve+dt+St,Ae=Math.abs(dt-De)>1,$&&Ae&&B.splice(B.length-2,2),r.render(0,!0,!0),ae||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),D0(0)):De=dt,He&&(He.value?He.style["overflow"+q.a.toUpperCase()]=He.value:He.style.removeProperty("overflow-"+q.a));else if(v&&ge()&&!D)for(bn=v.parentNode;bn&&bn!==an;)bn._pinOffset&&(qe-=bn._pinOffset,st-=bn._pinOffset),bn=bn.parentNode;Le&&Le.forEach(function(Qe){return Qe.revert(!1,!0)}),G.start=qe,G.end=st,Ze=Lt=Gi?Te:ge(),!D&&!Gi&&(Ze<Te&&ge(Te),G.scroll.rec=0),G.revert(!1,!0),we=Ai(),Pe&&(ye=-1,Pe.restart(!0)),Ti=0,r&&H&&(r._initted||_e)&&r.progress()!==_e&&r.progress(_e||0,!0).render(r.time(),!0,!0),(cn||te!==G.progress||D||M||r&&!r._initted)&&(r&&!H&&(r._initted||te||r.vars.immediateRender!==!1)&&r.totalProgress(D&&qe<-.001&&!te?nt.utils.normalize(qe,st,0):te,!0),G.progress=cn||(Ze-qe)/dt===te?0:te),x&&b&&(K._pinOffset=Math.round(G.progress*De)),X&&X.invalidate(),isNaN(Fe)||(Fe-=nt.getProperty(ue,q.p),Ke-=nt.getProperty(Y,q.p),Ch(ue,q,Fe),Ch(vt,q,Fe-(mt||0)),Ch(Y,q,Ke),Ch(ot,q,Ke-(mt||0))),cn&&!Gi&&G.update(),m&&!Gi&&!Tt&&(Tt=!0,m(G),Tt=!1)}},G.getVelocity=function(){return(ge()-Lt)/(Ai()-Wc)*1e3||0},G.endAnimation=function(){Bc(G.callbackAnimation),r&&(X?X.progress(1):r.paused()?H||Bc(r,G.direction<0,1):Bc(r,r.reversed()))},G.labelToScroll=function(Be){return r&&r.labels&&(qe||G.refresh()||qe)+r.labels[Be]/r.duration()*dt||0},G.getTrailing=function(Be){var pt=Pt.indexOf(G),lt=G.direction>0?Pt.slice(0,pt).reverse():Pt.slice(pt+1);return(ga(Be)?lt.filter(function(mt){return mt.vars.preventOverlaps===Be}):lt).filter(function(mt){return G.direction>0?mt.end<=qe:mt.start>=st})},G.update=function(Be,pt,lt){if(!(D&&!lt&&!Be)){var mt=Gi===!0?Te:G.scroll(),yn=Be?0:(mt-qe)/dt,xt=yn<0?0:yn>1?1:yn||0,un=G.progress,cn,Ct,St,zt,kn,fn,oi,Ni;if(pt&&(Lt=Ze,Ze=D?ge():mt,R&&(gt=ze,ze=r&&!H?r.totalProgress():xt)),y&&x&&!Ti&&!yh&&ja&&(!xt&&qe<mt+(mt-Lt)/(Ai()-Wc)*y?xt=1e-4:xt===1&&st>mt+(mt-Lt)/(Ai()-Wc)*y&&(xt=.9999)),xt!==un&&G.enabled){if(cn=G.isActive=!!xt&&xt<1,Ct=!!un&&un<1,fn=cn!==Ct,kn=fn||!!xt!=!!un,G.direction=xt>un?1:-1,G.progress=xt,kn&&!Ti&&(St=xt&&!un?0:xt===1?1:un===1?2:3,H&&(zt=!fn&&z[St+1]!=="none"&&z[St+1]||z[St],Ni=r&&(zt==="complete"||zt==="reset"||zt in r))),w&&(fn||Ni)&&(Ni||_||!r)&&(Ri(w)?w(G):G.getTrailing(w).forEach(function(Si){return Si.endAnimation()})),H||(X&&!Ti&&!yh?(X._dp._time-X._start!==X._time&&X.render(X._dp._time-X._start),X.resetTo?X.resetTo("totalProgress",xt,r._tTime/r._tDur):(X.vars.totalProgress=xt,X.invalidate().restart())):r&&r.totalProgress(xt,!!(Ti&&(we||Be)))),x){if(Be&&b&&(K.style[b+q.os2]=at),!$)pe(Yc(Ve+De*xt));else if(kn){if(oi=!Be&&xt>un&&st+1>mt&&mt+1>=br(k,q),L)if(!Be&&(cn||oi)){var Sn=as(x,!0),Nn=mt-qe;oE(x,an,Sn.top+(q===ai?Nn:0)+ii,Sn.left+(q===ai?0:Nn)+ii)}else oE(x,K);bu(cn||oi?B:C),Ae&&xt<1&&cn||pe(Ve+(xt===1&&!oi?De:0))}}R&&!Me.tween&&!Ti&&!yh&&Pe.restart(!0),f&&(fn||N&&xt&&(xt<1||!N0))&&Af(f.targets).forEach(function(Si){return Si.classList[cn||N?"add":"remove"](f.className)}),c&&!H&&!Be&&c(G),kn&&!Ti?(H&&(Ni&&(zt==="complete"?r.pause().totalProgress(1):zt==="reset"?r.restart(!0).pause():zt==="restart"?r.restart(!0):r[zt]()),c&&c(G)),(fn||!N0)&&(h&&fn&&L0(G,h),F[St]&&L0(G,F[St]),N&&(xt===1?G.kill(!1,1):F[St]=0),fn||(St=xt===1?1:3,F[St]&&L0(G,F[St]))),T&&!cn&&Math.abs(G.getVelocity())>(qc(T)?T:2500)&&(Bc(G.callbackAnimation),X?X.progress(1):Bc(r,zt==="reverse"?1:!xt,1))):H&&c&&!Ti&&c(G)}if(Ge){var bn=D?mt/D.duration()*(D._caScrollDist||0):mt;Ce(bn+(ue._isFlipped?1:0)),Ge(bn)}We&&We(-mt/D.duration()*(D._caScrollDist||0))}},G.enable=function(Be,pt){G.enabled||(G.enabled=!0,fi(k,"resize",Zc),ee||fi(k,"scroll",ou),I&&fi(s,"refreshInit",I),Be!==!1&&(G.progress=te=0,Ze=Lt=ye=ge()),pt!==!1&&G.refresh())},G.getTween=function(Be){return Be&&Me?Me.tween:X},G.setPositions=function(Be,pt,lt,mt){if(D){var yn=D.scrollTrigger,xt=D.duration(),un=yn.end-yn.start;Be=yn.start+un*Be/xt,pt=yn.start+un*pt/xt}G.refresh(!1,!1,{start:JM(Be,lt&&!!G._startClamp),end:JM(pt,lt&&!!G._endClamp)},mt),G.update()},G.adjustPinSpacing=function(Be){if(Ye&&Be){var pt=Ye.indexOf(q.d)+1;Ye[pt]=parseFloat(Ye[pt])+Be+ii,Ye[1]=parseFloat(Ye[1])+Be+ii,bu(Ye)}},G.disable=function(Be,pt){if(Be!==!1&&G.revert(!0,!0),G.enabled&&(G.enabled=G.isActive=!1,pt||X&&X.pause(),Te=0,Oe&&(Oe.uncache=1),I&&ci(s,"refreshInit",I),Pe&&(Pe.pause(),Me.tween&&Me.tween.kill()&&(Me.tween=0)),!ee)){for(var lt=Pt.length;lt--;)if(Pt[lt].scroller===k&&Pt[lt]!==G)return;ci(k,"resize",Zc),ee||ci(k,"scroll",ou)}},G.kill=function(Be,pt){G.disable(Be,pt),X&&!pt&&X.kill(),d&&delete fv[d];var lt=Pt.indexOf(G);lt>=0&&Pt.splice(lt,1),lt===Hi&&Wh>0&&Hi--,lt=0,Pt.forEach(function(mt){return mt.scroller===G.scroller&&(lt=1)}),lt||Gi||(G.scroll.rec=0),r&&(r.scrollTrigger=null,Be&&r.revert({kill:!1}),pt||r.kill()),vt&&[vt,ot,ue,Y].forEach(function(mt){return mt.parentNode&&mt.parentNode.removeChild(mt)}),df===G&&(df=0),x&&(Oe&&(Oe.uncache=1),lt=0,Pt.forEach(function(mt){return mt.pin===x&&lt++}),lt||(Oe.spacer=0)),i.onKill&&i.onKill(G)},Pt.push(G),G.enable(!1,!1),ut&&ut(G),r&&r.add&&!dt){var At=G.update;G.update=function(){G.update=At,It.cache++,qe||st||G.refresh()},nt.delayedCall(.01,G.update),dt=.01,qe=st=0}else G.refresh();x&&yz()},s.register=function(i){return lu||(nt=i||l2(),o2()&&window.document&&s.enable(),lu=jc),lu},s.defaults=function(i){if(i)for(var r in i)Eh[r]=i[r];return Eh},s.disable=function(i,r){jc=0,Pt.forEach(function(c){return c[r?"kill":"disable"](i)}),ci(Ft,"wheel",ou),ci(xn,"scroll",ou),clearInterval(xh),ci(xn,"touchcancel",mr),ci(an,"touchstart",mr),bh(ci,xn,"pointerdown,touchstart,mousedown",$M),bh(ci,xn,"pointerup,touchend,mouseup",eE),up.kill(),Sh(ci);for(var l=0;l<It.length;l+=3)Mh(ci,It[l],It[l+1]),Mh(ci,It[l],It[l+2])},s.enable=function(){if(Ft=window,xn=document,va=xn.documentElement,an=xn.body,nt&&(Af=nt.utils.toArray,sf=nt.utils.clamp,uv=nt.core.context||mr,D0=nt.core.suppressOverwrites||mr,rx=Ft.history.scrollRestoration||"auto",dv=Ft.pageYOffset||0,nt.core.globals("ScrollTrigger",s),an)){jc=1,Su=document.createElement("div"),Su.style.height="100vh",Su.style.position="absolute",v2(),hz(),Vn.register(nt),s.isTouch=Vn.isTouch,Zs=Vn.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),lv=Vn.isTouch===1,fi(Ft,"wheel",ou),ax=[Ft,xn,va,an],nt.matchMedia?(s.matchMedia=function(h){var m=nt.matchMedia(),_;for(_ in h)m.add(_,h[_]);return m},nt.addEventListener("matchMediaInit",function(){g2(),fx()}),nt.addEventListener("matchMediaRevert",function(){return m2()}),nt.addEventListener("matchMedia",function(){Ko(0,1),ul("matchMedia")}),nt.matchMedia().add("(orientation: portrait)",function(){return O0(),O0})):console.warn("Requires GSAP 3.11.0 or later"),O0(),fi(xn,"scroll",ou);var i=an.hasAttribute("style"),r=an.style,l=r.borderTopStyle,c=nt.core.Animation.prototype,f,d;for(c.revert||Object.defineProperty(c,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",f=as(an),ai.m=Math.round(f.top+ai.sc())||0,ki.m=Math.round(f.left+ki.sc())||0,l?r.borderTopStyle=l:r.removeProperty("border-top-style"),i||(an.setAttribute("style",""),an.removeAttribute("style")),xh=setInterval(iE,250),nt.delayedCall(.5,function(){return yh=0}),fi(xn,"touchcancel",mr),fi(an,"touchstart",mr),bh(fi,xn,"pointerdown,touchstart,mousedown",$M),bh(fi,xn,"pointerup,touchend,mouseup",eE),ov=nt.utils.checkPrefix("transform"),jh.push(ov),lu=Ai(),up=nt.delayedCall(.2,Ko).pause(),uu=[xn,"visibilitychange",function(){var h=Ft.innerWidth,m=Ft.innerHeight;xn.hidden?(ZM=h,KM=m):(ZM!==h||KM!==m)&&Zc()},xn,"DOMContentLoaded",Ko,Ft,"load",Ko,Ft,"resize",Zc],Sh(fi),Pt.forEach(function(h){return h.enable(0,1)}),d=0;d<It.length;d+=3)Mh(ci,It[d],It[d+1]),Mh(ci,It[d],It[d+2])}},s.config=function(i){"limitCallbacks"in i&&(N0=!!i.limitCallbacks);var r=i.syncInterval;r&&clearInterval(xh)||(xh=r)&&setInterval(iE,r),"ignoreMobileResize"in i&&(lv=s.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(Sh(ci)||Sh(fi,i.autoRefreshEvents||"none"),a2=(i.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(i,r){var l=Qi(i),c=It.indexOf(l),f=ol(l);~c&&It.splice(c,f?6:2),r&&(f?Ar.unshift(Ft,r,an,r,va,r):Ar.unshift(l,r))},s.clearMatchMedia=function(i){Pt.forEach(function(r){return r._ctx&&r._ctx.query===i&&r._ctx.kill(!0,!0)})},s.isInViewport=function(i,r,l){var c=(ga(i)?Qi(i):i).getBoundingClientRect(),f=c[l?tl:nl]*r||0;return l?c.right-f>0&&c.left+f<Ft.innerWidth:c.bottom-f>0&&c.top+f<Ft.innerHeight},s.positionInViewport=function(i,r,l){ga(i)&&(i=Qi(i));var c=i.getBoundingClientRect(),f=c[l?tl:nl],d=r==null?f/2:r in fp?fp[r]*f:~r.indexOf("%")?parseFloat(r)*f/100:parseFloat(r)||0;return l?(c.left+d)/Ft.innerWidth:(c.top+d)/Ft.innerHeight},s.killAll=function(i){if(Pt.slice(0).forEach(function(l){return l.vars.id!=="ScrollSmoother"&&l.kill()}),i!==!0){var r=ll.killAll||[];ll={},r.forEach(function(l){return l()})}},s})();Gt.version="3.14.2";Gt.saveStyles=function(s){return s?Af(s).forEach(function(e){if(e&&e.style){var t=ma.indexOf(e);t>=0&&ma.splice(t,5),ma.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),nt.core.getCache(e),uv())}}):ma};Gt.revert=function(s,e){return fx(!s,e)};Gt.create=function(s,e){return new Gt(s,e)};Gt.refresh=function(s){return s?Zc(!0):(lu||Gt.register())&&Ko(!0)};Gt.update=function(s){return++It.cache&&cs(s===!0?2:0)};Gt.clearScrollMemory=_2;Gt.maxScroll=function(s,e){return br(s,e?ki:ai)};Gt.getScrollFunc=function(s,e){return po(Qi(s),e?ki:ai)};Gt.getById=function(s){return fv[s]};Gt.getAll=function(){return Pt.filter(function(s){return s.vars.id!=="ScrollSmoother"})};Gt.isScrolling=function(){return!!ja};Gt.snapDirectional=cx;Gt.addEventListener=function(s,e){var t=ll[s]||(ll[s]=[]);~t.indexOf(e)||t.push(e)};Gt.removeEventListener=function(s,e){var t=ll[s],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};Gt.batch=function(s,e){var t=[],i={},r=e.interval||.016,l=e.batchMax||1e9,c=function(h,m){var _=[],v=[],x=nt.delayedCall(r,function(){m(_,v),_=[],v=[]}).pause();return function(b){_.length||x.restart(!0),_.push(b.trigger),v.push(b),l<=_.length&&x.progress(1)}},f;for(f in e)i[f]=f.substr(0,2)==="on"&&Ri(e[f])&&f!=="onRefreshInit"?c(f,e[f]):e[f];return Ri(l)&&(l=l(),fi(Gt,"refresh",function(){return l=e.batchMax()})),Af(s).forEach(function(d){var h={};for(f in i)h[f]=i[f];h.trigger=d,t.push(Gt.create(h))}),t};var uE=function(e,t,i,r){return t>r?e(r):t<0&&e(0),i>r?(r-t)/(i-t):i<0?t/(t-i):1},F0=function s(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Vn.isTouch?" pinch-zoom":""):"none",e===va&&s(an,t)},Rh={auto:1,scroll:1},Tz=function(e){var t=e.event,i=e.target,r=e.axis,l=(t.changedTouches?t.changedTouches[0]:t).target,c=l._gsap||nt.core.getCache(l),f=Ai(),d;if(!c._isScrollT||f-c._isScrollT>2e3){for(;l&&l!==an&&(l.scrollHeight<=l.clientHeight&&l.scrollWidth<=l.clientWidth||!(Rh[(d=Ga(l)).overflowY]||Rh[d.overflowX]));)l=l.parentNode;c._isScroll=l&&l!==i&&!ol(l)&&(Rh[(d=Ga(l)).overflowY]||Rh[d.overflowX]),c._isScrollT=f}(c._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},y2=function(e,t,i,r){return Vn.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&Tz,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return i&&fi(xn,Vn.eventTypes[0],fE,!1,!0)},onDisable:function(){return ci(xn,Vn.eventTypes[0],fE,!0)}})},Az=/(input|label|select|textarea)/i,cE,fE=function(e){var t=Az.test(e.target.tagName);(t||cE)&&(e._gsapAllow=!0,cE=t)},Cz=function(e){ko(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,r=t.momentum,l=t.allowNestedScroll,c=t.onRelease,f,d,h=Qi(e.target)||va,m=nt.core.globals().ScrollSmoother,_=m&&m.get(),v=Zs&&(e.content&&Qi(e.content)||_&&e.content!==!1&&!_.smooth()&&_.content()),x=po(h,ai),b=po(h,ki),M=1,y=(Vn.isTouch&&Ft.visualViewport?Ft.visualViewport.scale*Ft.visualViewport.width:Ft.outerWidth)/Ft.innerWidth,S=0,A=Ri(r)?function(){return r(f)}:function(){return r||2.8},N,R,L=y2(h,e.type,!0,l),P=function(){return R=!1},D=mr,T=mr,w=function(){d=br(h,ai),T=sf(Zs?1:0,d),i&&(D=sf(0,br(h,ki))),N=il},q=function(){v._gsap.y=Yc(parseFloat(v._gsap.y)+x.offset)+"px",v.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(v._gsap.y)+", 0, 1)",x.offset=x.cacheID=0},H=function(){if(R){requestAnimationFrame(P);var ie=Yc(f.deltaY/2),de=T(x.v-ie);if(v&&de!==x.v+x.offset){x.offset=de-x.v;var G=Yc((parseFloat(v&&v._gsap.y)||0)-x.offset);v.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+G+", 0, 1)",v._gsap.y=G+"px",x.cacheID=It.cache,cs()}return!0}x.offset&&q(),R=!0},k,J,ee,$,F=function(){w(),k.isActive()&&k.vars.scrollY>d&&(x()>d?k.progress(1)&&x(d):k.resetTo("scrollY",d))};return v&&nt.set(v,{y:"+=0"}),e.ignoreCheck=function(z){return Zs&&z.type==="touchmove"&&H()||M>1.05&&z.type!=="touchstart"||f.isGesturing||z.touches&&z.touches.length>1},e.onPress=function(){R=!1;var z=M;M=Yc((Ft.visualViewport&&Ft.visualViewport.scale||1)/y),k.pause(),z!==M&&F0(h,M>1.01?!0:i?!1:"x"),J=b(),ee=x(),w(),N=il},e.onRelease=e.onGestureStart=function(z,ie){if(x.offset&&q(),!ie)$.restart(!0);else{It.cache++;var de=A(),G,I;i&&(G=b(),I=G+de*.05*-z.velocityX/.227,de*=uE(b,G,I,br(h,ki)),k.vars.scrollX=D(I)),G=x(),I=G+de*.05*-z.velocityY/.227,de*=uE(x,G,I,br(h,ai)),k.vars.scrollY=T(I),k.invalidate().duration(de).play(.01),(Zs&&k.vars.scrollY>=d||G>=d-1)&&nt.to({},{onUpdate:F,duration:de})}c&&c(z)},e.onWheel=function(){k._ts&&k.pause(),Ai()-S>1e3&&(N=0,S=Ai())},e.onChange=function(z,ie,de,G,I){if(il!==N&&w(),ie&&i&&b(D(G[2]===ie?J+(z.startX-z.x):b()+ie-G[1])),de){x.offset&&q();var W=I[2]===de,le=W?ee+z.startY-z.y:x()+de-I[1],ye=T(le);W&&le!==ye&&(ee+=ye-le),x(ye)}(de||ie)&&cs()},e.onEnable=function(){F0(h,i?!1:"x"),Gt.addEventListener("refresh",F),fi(Ft,"resize",F),x.smooth&&(x.target.style.scrollBehavior="auto",x.smooth=b.smooth=!1),L.enable()},e.onDisable=function(){F0(h,!0),ci(Ft,"resize",F),Gt.removeEventListener("refresh",F),L.kill()},e.lockAxis=e.lockAxis!==!1,f=new Vn(e),f.iOS=Zs,Zs&&!x()&&x(1),Zs&&nt.ticker.add(mr),$=f._dc,k=nt.to(f,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:x2(x,x(),function(){return k.pause()})},onUpdate:cs,onComplete:$.vars.onComplete}),f};Gt.sort=function(s){if(Ri(s))return Pt.sort(s);var e=Ft.pageYOffset||0;return Gt.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+Ft.innerHeight}),Pt.sort(s||function(t,i){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};Gt.observe=function(s){return new Vn(s)};Gt.normalizeScroll=function(s){if(typeof s>"u")return Bi;if(s===!0&&Bi)return Bi.enable();if(s===!1){Bi&&Bi.kill(),Bi=s;return}var e=s instanceof Vn?s:Cz(s);return Bi&&Bi.target===e.target&&Bi.kill(),ol(e.target)&&(Bi=e),e};Gt.core={_getVelocityProp:sv,_inputObserver:y2,_scrollers:It,_proxies:Ar,bridge:{ss:function(){ja||ul("scrollStart"),ja=Ai()},ref:function(){return Ti}}};l2()&&nt.registerPlugin(Gt);nr.registerPlugin(Gt);const Rz="동원은 새로운 가치를 창출하여 사회에 기여할 수 있도록 고민하고 실천합니다.<br/> 환경영향 저감을 위한 다양한 활동을 시행하고 있으며,<br/> 투명한 경영활동으로 지속가능한 발전을 위한 노력을 하고 있습니다.",wz=()=>{const s=ln.useRef(null),[e,t]=ln.useState([]);return ln.useEffect(()=>{const i=window.matchMedia("(max-width: 768px)"),r=l=>{const c=Rz.split(/<br\s*\/?>/i).map(f=>f.trim());l.matches?t([c.join(" ")]):t(c)};return r(i),i.addEventListener("change",r),()=>{i.removeEventListener("change",r)}},[]),ln.useEffect(()=>{if(!s.current)return;const i=nr.context(()=>{const r=nr.utils.selector(s.current),l=r(".answer-title img"),c=r(".scroll-p-box p"),f=r(".scroll-p-box a"),d=r(".scroll-p-box .char"),h=r(".text-percent p"),m=r(".answer-plan")[0],_=r(".scroll-p-box")[0];!m||!_||(nr.set(l,{opacity:0,y:60}),nr.set(c,{opacity:0,x:-60}),nr.set(f,{opacity:0,x:60}),nr.set(d,{opacity:.4}),nr.timeline({scrollTrigger:{trigger:s.current,start:"top 25%",once:!0}}).to(l,{opacity:1,y:0,duration:1,ease:"power3.out"}).to(c,{opacity:1,x:0,duration:1,ease:"power3.out"},"-=0.35").to(f,{opacity:1,x:0,duration:.8,ease:"power3.out"},"-=0.6"),nr.to(d,{opacity:1,stagger:.02,ease:"none",scrollTrigger:{trigger:_,start:"top 65%",end:"+=600",scrub:.6}}),h.forEach((v,x)=>{const b=Number(v.dataset.target||"0"),M={val:0};v.textContent="0",nr.to(M,{val:b,duration:1.5,ease:"power1.out",delay:x*.5,onUpdate:()=>{v.textContent=String(Math.round(M.val))},scrollTrigger:{trigger:m,start:"top 40%",once:!0}})}))},s);return()=>i.revert()},[e]),V.jsxs("section",{className:"answer",ref:s,children:[V.jsxs("div",{className:"answer-video-box",children:[V.jsx("video",{autoPlay:!0,muted:!0,loop:!0,playsInline:!0,children:V.jsx("source",{src:"./video/answer-bg.mp4",type:"video/mp4"})}),V.jsx("div",{className:"answer-title",children:V.jsx("img",{src:"./img/answer-title.png",alt:"타이틀"})})]}),V.jsxs("div",{className:"scroll-p-box",children:[V.jsx("p",{children:e.map((i,r)=>V.jsxs("span",{className:"line",children:[i.split("").map((l,c)=>V.jsx("span",{className:"char",style:{whiteSpace:l===" "?"pre":"normal"},children:l},`${r}-${c}`)),r!==e.length-1&&V.jsx("br",{})]},r))}),V.jsx("a",{href:"#",children:V.jsx(Tn,{icon:Uh})})]}),V.jsxs("div",{className:"answer-plan",children:[V.jsxs("div",{className:"plan-video",children:[V.jsx("video",{autoPlay:!0,muted:!0,loop:!0,children:V.jsx("source",{src:"./video/answer-plan.mp4",type:"video/mp4"})}),V.jsx("div",{className:"video-fade"})]}),V.jsxs("div",{className:"plan-text-con",children:[V.jsxs("div",{className:"plan-text-box",children:[V.jsxs("div",{className:"text-percent",children:[V.jsx(Tn,{icon:SN}),V.jsx("p",{"data-target":"30",children:"0"}),V.jsx("span",{children:"%"})]}),V.jsx("div",{className:"text-name",children:V.jsx("p",{children:"배당성향 확대 계획"})})]}),V.jsxs("div",{className:"plan-text-box",children:[V.jsxs("div",{className:"text-percent",children:[V.jsx(Tn,{icon:_N}),V.jsx("p",{"data-target":"40",children:"0"}),V.jsx("span",{children:"%"})]}),V.jsxs("div",{className:"text-name",children:[V.jsx("p",{children:"탄소 배출 저감 계획"}),V.jsx("span",{children:"*2030년까지"})]})]})]})]})]})},Dz=()=>{const s=[{id:1,title:"해양·물류",desc:["세계 최대 규모의 선단을 갖춘","글로벌 수산 기업이자 최첨단 콜드체인,","항만하역시설을 갖춘 종합물류기업입니다."],tag:["동원산업","동원로엑스","동원로엑스냉장","동원로엑스냉장부","동원글로벌터미널부산","BIDC"],image:"./img/business1.jpg"},{id:2,title:"식품·유통",desc:["3,000여 개 이상의 다양한 먹거리와","종합 단백질 식품을 제공하며 건강한 식문화를","선도하는 'Total Protein Provider'입니다."],tag:["동원F&B","동원홈푸드","동원팜스"],image:"./img/business2.jpg"},{id:3,title:"생활 서비스",desc:["국내 포장재 1위 기업으로","최첨단 아셉틱 · 이차전지 소재 사업에도 진출하며","그린 비즈니스로의 전환에 앞장서고 있습니다."],tag:["동원시스템즈","동원건설산업","동원CNS","동원기술투자"],image:"./img/business3.jpg"},{id:4,title:"글로벌",desc:["바다를 넘어 세계로,","대한민국과 동원그룹의 가치를 알립니다."],tag:["StarKist","TALOFA SYSTEMS","S.C.A SA","CAPSEN","TTP"],image:"./img/business4.jpg"}];return V.jsx("section",{className:"business",children:V.jsxs("div",{className:"business-inner",children:[V.jsxs("div",{className:"business-head",children:[V.jsx("h2",{className:"business-title",children:"사업 분야"}),V.jsxs("h3",{className:"business-sub",children:["체인 이노베이션 :",V.jsx("span",{className:"business-sub-blue",children:" 연쇄적 혁신"})]}),V.jsxs("div",{className:"business-desc",children:[V.jsxs("p",{children:["동원은 본업을 파고들면서도 혁신의 가능성을 발견하면 새로운"," ",V.jsx("br",{className:"pc-br"}),"분야에 도전하는 과감함을 잃지 않았습니다. 반드시 필요한"," ",V.jsx("br",{className:"pc-br"}),"비즈니스의 고리를 찾아내고 이를 연결하며 만들어가는 필연적"," ",V.jsx("br",{className:"pc-br"}),"혁신의 노력은 '체인 이노베이션'이라는 동원의 성장 DNA가 됐습니다."," ",V.jsx("br",{className:"pc-br"}),"지금 이 순간, 동원은 다음 어장을 위한 혁신의 고리를 찾아 항해 중입니다."]}),V.jsxs("button",{className:"business-btn",children:["체인 이노베이션 로드맵",V.jsx(Tn,{icon:mf})]})]})]}),V.jsx("div",{className:"business-container",children:s.map(e=>V.jsxs("div",{className:"business-item",children:[V.jsxs("div",{className:"business-text",children:[V.jsx("h3",{className:"business-item-title",children:e.title}),V.jsx("div",{className:"business-item-desc",children:V.jsx("p",{children:e.desc.map((t,i)=>V.jsxs(mv.Fragment,{children:[t,i!==e.desc.length-1&&V.jsx("br",{className:"business-desc-br"})]},i))})})]}),V.jsxs("div",{className:"business-image-wrap",children:[V.jsx("img",{src:e.image,alt:e.title,className:`business-image${e.id}`}),V.jsx("div",{className:"business-tags",children:e.tag.map((t,i)=>V.jsxs("span",{className:"business-tag",children:[t,V.jsxs("span",{className:"tag-plus",children:[V.jsx("span",{className:"dot dot-top"}),V.jsx("span",{className:"dot dot-right"}),V.jsx("span",{className:"dot dot-bottom"}),V.jsx("span",{className:"dot dot-left"})]})]},i))})]})]},e.id))})]})})},Nz=()=>{const s=[{id:1,type:"콘텐츠",date:"2026.03.11",title:"'삐빅- 환승입니다📟' 동원 이직썰 A to Z",image:"./img/media1.jpg"},{id:2,type:"콘텐츠",date:"2026.03.04",title:"예민한 성격과 비판적 사고? 기획에 도움 많이 될 거야 | JOB학사전 EP.13",image:"./img/media2.webp"},{id:3,type:"뉴스",date:"2026.03.13",title:"동원F&B 장수 브랜드 ‘쿨피스’, 15년 만에 바나나맛 신제품 출시",image:"./img/news1.jfif"},{id:4,type:"뉴스",date:"2026.03.11",title:"국내 최초 코팅막 출시한 동원시스템즈, '인터배터리 2026'서 공개",image:"./img/news2.webp"}],[e,t]=ln.useState("contents"),i=e==="contents"?s.filter(r=>r.type==="콘텐츠"):s.filter(r=>r.type==="뉴스");return V.jsx("section",{className:"media",children:V.jsxs("div",{className:"media-inner",children:[V.jsxs("div",{className:"media-head",children:[V.jsx("h2",{className:"media-title",children:"미디어"}),V.jsxs("div",{className:"media-actions",children:[V.jsxs("div",{className:"media-tabs",children:[V.jsx("button",{className:`media-tab ${e==="contents"?"active":""}`,onClick:()=>t("contents"),children:"콘텐츠룸"}),V.jsx("button",{className:`media-tab ${e==="news"?"active":""}`,onClick:()=>t("news"),children:"뉴스룸"})]}),V.jsxs("button",{className:"media-more",children:["더 보기",V.jsx(Tn,{icon:mf})]})]})]}),V.jsx("div",{className:"media-container",children:i.map(r=>V.jsxs("div",{className:"media-box",children:[V.jsxs("div",{className:"media-image-wrap",children:[V.jsx("img",{src:r.image,alt:r.title,className:"media-image"}),V.jsx("div",{className:"media-image-overlay",children:V.jsx(Tn,{icon:mf})})]}),V.jsxs("div",{className:"media-meta",children:[V.jsx("span",{className:"media-type",children:r.type}),V.jsx("span",{className:"media-date",children:r.date})]}),V.jsx("h3",{className:"media-box-title",children:r.title})]},r.id))})]})})},Uz=()=>{const[s,e]=ln.useState(!1);return V.jsxs("div",{children:[V.jsx(k4,{}),V.jsx("section",{className:s?"":"header-light-section",children:V.jsx(X4,{setJourneyActive:e})}),V.jsx(wz,{}),V.jsx("section",{className:"header-light-section",children:V.jsx(Dz,{})}),V.jsx("section",{className:"header-light-section",children:V.jsx(Nz,{})})]})};function Lz(){return V.jsxs(V.Fragment,{children:[V.jsx(EN,{}),V.jsx("main",{children:V.jsx(Uz,{})}),V.jsx(MN,{})]})}P3.createRoot(document.getElementById("root")).render(V.jsx(ln.StrictMode,{children:V.jsx(Lz,{})}));
