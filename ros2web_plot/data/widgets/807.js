"use strict";(self.webpackChunkros2web_plot=self.webpackChunkros2web_plot||[]).push([[807],{5408:(e,t,r)=>{r.d(t,{L7:()=>u,VO:()=>n,W8:()=>i,k9:()=>c});const n={xs:0,sm:600,md:900,lg:1200,xl:1536},o={keys:["xs","sm","md","lg","xl"],up:e=>`@media (min-width:${n[e]}px)`};function c(e,t,r){const c=e.theme||{};if(Array.isArray(t)){const e=c.breakpoints||o;return t.reduce(((n,o,c)=>(n[e.up(e.keys[c])]=r(t[c]),n)),{})}if("object"==typeof t){const e=c.breakpoints||o;return Object.keys(t).reduce(((o,c)=>{if(-1!==Object.keys(e.values||n).indexOf(c))o[e.up(c)]=r(t[c],c);else{const e=c;o[e]=t[e]}return o}),{})}return r(t)}function i(e={}){var t;return(null==e||null==(t=e.keys)?void 0:t.reduce(((t,r)=>(t[e.up(r)]={},t)),{}))||{}}function u(e,t){return e.reduce(((e,t)=>{const r=e[t];return(!r||0===Object.keys(r).length)&&delete e[t],e}),t)}},3195:(e,t,r)=>{r.r(t),r.d(t,{default:()=>l});var n=r(5893),o=r(9612),c=r(242),i=r(1508),u=["layout","useResizeHandler"];function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e){var t=e.layout,r=(e.useResizeHandler,function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,u)),f=(0,o.NB)(),s=f.width,l=f.height,p=f.ref,y=t?a(a({},t),{},{width:s||0,height:l||0}):{width:l||0,height:l||0};return(0,n.jsx)(i.Z,{ref:p,sx:{width:"100%",height:"100%"},children:(0,n.jsx)(c.Z,a(a({},r),{},{layout:y}))})}},242:(e,t,r)=>{r.d(t,{Z:()=>d});var n=r(5893),o=r(756),c=r.n(o),i=r(8660);function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},p(e,t)}function y(e,t){if(t&&("object"===u(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(s,e);var t,r,o,c,u,f=(c=s,u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=b(c);if(u){var r=b(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return y(this,e)});function s(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),t=f.call(this,e);var r=e.data,n=e.layout,o=e.config,c=e.frames;return t.state={data:r,layout:n,config:o,frames:c},t}return t=s,o=[{key:"getDerivedStateFromProps",value:function(e,t){return{data:e.data,layout:e.layout,config:e.config}}}],(r=[{key:"render",value:function(){var e=this;return(0,n.jsx)(i.Z,a(a({},this.props),{},{data:this.state.data,layout:this.state.layout,frames:this.state.frames,config:this.state.config,onInitialized:function(t){return e.setState(t)},onUpdate:function(t){return e.setState(t)}}))}}])&&l(t.prototype,r),o&&l(t,o),Object.defineProperty(t,"prototype",{writable:!1}),s}(c().Component);O.defaultProps={data:[],layout:{},config:{},frames:[]};const d=O}}]);