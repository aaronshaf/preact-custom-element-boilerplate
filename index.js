!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(3),i=o(r);customElements.define("my-element",i.default)},function(e,t,n){!function(e,n){n(t)}(this,function(e){function t(e,t,n){this.nodeName=e,this.attributes=t,this.children=n,this.key=t&&t.key}function n(e,n){var o,r,i,a,l=[];for(a=arguments.length;a-- >2;)A.push(arguments[a]);for(n&&n.children&&(A.length||A.push(n.children),delete n.children);A.length;)if((r=A.pop())instanceof Array)for(a=r.length;a--;)A.push(r[a]);else null!=r&&r!==!1&&("number"!=typeof r&&r!==!0||(r=String(r)),i="string"==typeof r,i&&o?l[l.length-1]+=r:(l.push(r),o=i));var u=new t(e,n||void 0,l);return z.vnode&&z.vnode(u),u}function o(e,t){if(t)for(var n in t)e[n]=t[n];return e}function r(e){return o({},e)}function i(e,t){for(var n=t.split("."),o=0;o<n.length&&e;o++)e=e[n[o]];return e}function a(e){return"function"==typeof e}function l(e){return"string"==typeof e}function u(e){var t="";for(var n in e)e[n]&&(t&&(t+=" "),t+=n);return t}function c(e,t){return n(e.nodeName,o(r(e.attributes),t),arguments.length>2?[].slice.call(arguments,2):e.children)}function s(e,t,n){var o=t.split(".");return function(t){for(var r=t&&t.target||this,a={},u=a,c=l(n)?i(t,n):r.nodeName?r.type.match(/^che|rad/)?r.checked:r.value:t,s=0;s<o.length-1;s++)u=u[o[s]]||(u[o[s]]=!s&&e.state[o[s]]||{});u[o[s]]=c,e.setState(a)}}function f(e){!e._dirty&&(e._dirty=!0)&&1==Q.push(e)&&(z.debounceRendering||F)(p)}function p(){var e,t=Q;for(Q=[];e=t.pop();)e._dirty&&B(e)}function d(e){var t=e&&e.nodeName;return t&&a(t)&&!(t.prototype&&t.prototype.render)}function h(e,t){return e.nodeName(b(e),t||I)}function m(e,t){return l(t)?e instanceof Text:l(t.nodeName)?v(e,t.nodeName):a(t.nodeName)?e._componentConstructor===t.nodeName||d(t):void 0}function v(e,t){return e.normalizedNodeName===t||V(e.nodeName)===V(t)}function b(e){var t=r(e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(n)for(var o in n)void 0===t[o]&&(t[o]=n[o]);return t}function _(e){var t=e.parentNode;t&&t.removeChild(e)}function y(e,t,n,o,r){if("className"===t&&(t="class"),"class"===t&&o&&"object"==typeof o&&(o=u(o)),"key"===t);else if("class"!==t||r)if("style"===t){if((!o||l(o)||l(n))&&(e.style.cssText=o||""),o&&"object"==typeof o){if(!l(n))for(var i in n)i in o||(e.style[i]="");for(var i in o)e.style[i]="number"!=typeof o[i]||J[i]?o[i]:o[i]+"px"}}else if("dangerouslySetInnerHTML"===t)o&&(e.innerHTML=o.__html);else if("o"==t[0]&&"n"==t[1]){var c=e._listeners||(e._listeners={});t=V(t.substring(2)),o?c[t]||e.addEventListener(t,g,!!K[t]):c[t]&&e.removeEventListener(t,g,!!K[t]),c[t]=o}else if("list"!==t&&"type"!==t&&!r&&t in e)x(e,t,null==o?"":o),null!=o&&o!==!1||e.removeAttribute(t);else{var s=r&&t.match(/^xlink\:?(.+)/);null==o||o===!1?s?e.removeAttributeNS("http://www.w3.org/1999/xlink",V(s[1])):e.removeAttribute(t):"object"==typeof o||a(o)||(s?e.setAttributeNS("http://www.w3.org/1999/xlink",V(s[1]),o):e.setAttribute(t,o))}else e.className=o||""}function x(e,t,n){try{e[t]=n}catch(e){}}function g(e){return this._listeners[e.type](z.event&&z.event(e)||e)}function N(e){if(_(e),e instanceof Element){e._component=e._componentConstructor=null;var t=e.normalizedNodeName||V(e.nodeName);(X[t]||(X[t]=[])).push(e)}}function C(e,t){var n=V(e),o=X[n]&&X[n].pop()||(t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e));return o.normalizedNodeName=n,o}function k(){for(var e;e=Y.pop();)z.afterMount&&z.afterMount(e),e.componentDidMount&&e.componentDidMount()}function w(e,t,n,o,r,i){Z++||($=r instanceof SVGElement);var a=S(e,t,n,o);return r&&a.parentNode!==r&&r.appendChild(a),--Z||i||k(),a}function S(e,t,n,o){for(var r=t&&t.attributes;d(t);)t=h(t,n);if(null==t&&(t=""),l(t)){if(e){if(e instanceof Text&&e.parentNode)return e.nodeValue!=t&&(e.nodeValue=t),e;j(e)}return document.createTextNode(t)}if(a(t.nodeName))return L(e,t,n,o);var i=e,u=t.nodeName,c=$,s=t.children;if(l(u)||(u=String(u)),$="svg"===u||"foreignObject"!==u&&$,e){if(!v(e,u)){for(i=C(u,$);e.firstChild;)i.appendChild(e.firstChild);j(e)}}else i=C(u,$);s&&1===s.length&&"string"==typeof s[0]&&1===i.childNodes.length&&i.firstChild instanceof Text?i.firstChild.nodeValue!=s[0]&&(i.firstChild.nodeValue=s[0]):(s&&s.length||i.firstChild)&&O(i,s,n,o);var f=i[q];if(!f){i[q]=f={};for(var p=i.attributes,m=p.length;m--;)f[p[m].name]=p[m].value}return E(i,t.attributes,f),r&&"function"==typeof r.ref&&(f.ref=r.ref)(i),$=c,i}function O(e,t,n,o){var r,i,l,u,c=e.childNodes,s=[],f={},p=0,d=0,h=c.length,v=0,b=t&&t.length;if(h)for(var _=0;_<h;_++){var y=c[_],x=b?(i=y._component)?i.__key:(i=y[q])?i.key:null:null;x||0===x?(p++,f[x]=y):s[v++]=y}if(b)for(var _=0;_<b;_++){l=t[_],u=null;var x=l.key;if(null!=x)p&&x in f&&(u=f[x],f[x]=void 0,p--);else if(!u&&d<v){for(r=d;r<v;r++)if(i=s[r],i&&m(i,l)){u=i,s[r]=void 0,r===v-1&&v--,r===d&&d++;break}!u&&d<v&&a(l.nodeName)&&o&&(u=s[d],s[d++]=void 0)}u=S(u,l,n,o),u&&u!==e&&u!==c[_]&&e.insertBefore(u,c[_]||null)}if(p)for(var _ in f)f[_]&&j(f[_]);d<v&&M(s)}function M(e,t){for(var n=e.length;n--;)e[n]&&j(e[n],t)}function j(e,t){var n=e._component;n?H(n,!t):(e[q]&&e[q].ref&&e[q].ref(null),t||N(e),e.childNodes&&e.childNodes.length&&M(e.childNodes,t))}function E(e,t,n){for(var o in n)t&&o in t||null==n[o]||y(e,o,n[o],n[o]=void 0,$);if(t)for(var r in t)"children"===r||"innerHTML"===r||r in n&&t[r]===("value"===r||"checked"===r?e[r]:n[r])||y(e,r,n[r],n[r]=t[r],$)}function P(e){var t=e.constructor.name,n=ee[t];n?n.push(e):ee[t]=[e]}function U(e,t,n){var o=new e(t,n),r=ee[e.name];if(R.call(o,t,n),r)for(var i=r.length;i--;)if(r[i].constructor===e){o.nextBase=r[i].nextBase,r.splice(i,1);break}return o}function T(e,t,n,o,r){e._disable||(e._disable=!0,(e.__ref=t.ref)&&delete t.ref,(e.__key=t.key)&&delete t.key,!e.base||r?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,o),o&&o!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=o),e.prevProps||(e.prevProps=e.props),e.props=t,e._disable=!1,0!==n&&(1!==n&&z.syncComponentUpdates===!1&&e.base?f(e):B(e,1,r)),e.__ref&&e.__ref(e))}function B(e,t,n,i){if(!e._disable){var l,u,c,s,f=e.props,p=e.state,m=e.context,v=e.prevProps||f,_=e.prevState||p,y=e.prevContext||m,x=e.base,g=e.nextBase,N=x||g,C=e._component;if(x&&(e.props=v,e.state=_,e.context=y,2!==t&&e.shouldComponentUpdate&&e.shouldComponentUpdate(f,p,m)===!1?l=!0:e.componentWillUpdate&&e.componentWillUpdate(f,p,m),e.props=f,e.state=p,e.context=m),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!l){for(e.render&&(u=e.render(f,p,m)),e.getChildContext&&(m=o(r(m),e.getChildContext()));d(u);)u=h(u,m);var S,O,M=u&&u.nodeName;if(a(M)){c=C;var E=b(u);c&&c.constructor===M?T(c,E,1,m):(S=c,c=U(M,E,m),c.nextBase=c.nextBase||g,c._parentComponent=e,e._component=c,T(c,E,0,m),B(c,1,n,!0)),O=c.base}else s=N,S=C,S&&(s=e._component=null),(N||1===t)&&(s&&(s._component=null),O=w(s,u,m,n||!x,N&&N.parentNode,!0));if(N&&O!==N&&c!==C){var P=N.parentNode;P&&O!==P&&(P.replaceChild(O,N),S||(N._component=null,j(N)))}if(S&&H(S,O!==N),e.base=O,O&&!i){for(var L=e,R=e;R=R._parentComponent;)(L=R).base=O;O._component=L,O._componentConstructor=L.constructor}}!x||n?Y.unshift(e):l||(e.componentDidUpdate&&e.componentDidUpdate(v,_,y),z.afterUpdate&&z.afterUpdate(e));var W,A=e._renderCallbacks;if(A)for(;W=A.pop();)W.call(e);Z||i||k()}}function L(e,t,n,o){for(var r=e&&e._component,i=e,a=r&&e._componentConstructor===t.nodeName,l=a,u=b(t);r&&!l&&(r=r._parentComponent);)l=r.constructor===t.nodeName;return r&&l&&(!o||r._component)?(T(r,u,3,n,o),e=r.base):(r&&!a&&(H(r,!0),e=i=null),r=U(t.nodeName,u,n),e&&!r.nextBase&&(r.nextBase=e,i=null),T(r,u,1,n,o),e=r.base,i&&e!==i&&(i._component=null,j(i))),e}function H(e,t){z.beforeUnmount&&z.beforeUnmount(e);var n=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var o=e._component;o?H(o,t):n&&(n[q]&&n[q].ref&&n[q].ref(null),e.nextBase=n,t&&(_(n),P(e)),M(n.childNodes,!t)),e.__ref&&e.__ref(null),e.componentDidUnmount&&e.componentDidUnmount()}function R(e,t){this._dirty=!0,this.context=t,this.props=e,this.state||(this.state={})}function W(e,t,n){return w(n,e,{},!1,t)}var z={},A=[],D={},V=function(e){return D[e]||(D[e]=e.toLowerCase())},G="undefined"!=typeof Promise&&Promise.resolve(),F=G?function(e){G.then(e)}:setTimeout,I={},q="undefined"!=typeof Symbol?Symbol.for("preactattr"):"__preactattr_",J={boxFlex:1,boxFlexGroup:1,columnCount:1,fillOpacity:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,fontWeight:1,lineClamp:1,lineHeight:1,opacity:1,order:1,orphans:1,strokeOpacity:1,widows:1,zIndex:1,zoom:1},K={blur:1,error:1,focus:1,load:1,resize:1,scroll:1},Q=[],X={},Y=[],Z=0,$=!1,ee={};o(R.prototype,{linkState:function(e,t){var n=this._linkedStates||(this._linkedStates={});return n[e+t]||(n[e+t]=s(this,e,t))},setState:function(e,t){var n=this.state;this.prevState||(this.prevState=r(n)),o(n,a(e)?e(n,this.props):e),t&&(this._renderCallbacks=this._renderCallbacks||[]).push(t),f(this)},forceUpdate:function(){B(this,2)},render:function(){}}),e.h=n,e.cloneElement=c,e.Component=R,e.render=W,e.rerender=p,e.options=z})},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(1),c=o(u),s=function(e){function t(e){r(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={},n}return a(t,e),l(t,[{key:"render",value:function(){return c.default.h("div",null,"Hello, world!")}}]),t}(u.Component);t.default=s},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=o(r),a=n(2),l=o(a),u=n(4),c=o(u),s=(0,c.default)({connectedCallback:function(){var e=this;this.input=this.querySelector("input");var t={border:"0",clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:"0",position:"fixed",width:"1px"};Object.keys(t).forEach(function(n){e.input.style[n]=t[n]}),this.updateRendering()},updateRendering:function(){i.default.render(i.default.h(l.default,{input:this.input}),this,this.lastChild),this.rendered=!0},attributeChangedCallback:function(e,t,n){this.rendered&&this.updateRendering()}});s.observedAttributes=[],t.default=s},function(e,t){function n(e){function t(){var e="undefined"!=typeof Reflect?Reflect.construct(HTMLElement,[],t):HTMLElement.call(Object.create(t.prototype));return e.initialize&&e.initialize(),e}return Object.setPrototypeOf(t,HTMLElement),t.prototype=Object.create(HTMLElement.prototype),Object.keys(e).forEach(function(n){t.prototype[n]=e[n]}),t}e.exports=n}]);