!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),v=Object.prototype.toString,g=Math.max,m=Math.min,b=function(){return d.Date.now()};function p(e,t,n){var r,i,a,u,f,l,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function p(t){var n=r,o=i;return r=i=void 0,c=t,u=e.apply(o,n)}function T(e){return c=e,f=setTimeout(O,t),s?p(e):u}function j(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function O(){var e=b();if(j(e))return h(e);f=setTimeout(O,function(e){var n=t-(e-l);return d?m(n,a-(e-c)):n}(e))}function h(e){return f=void 0,v&&r?p(e):(r=i=void 0,u)}function N(){var e=b(),n=j(e);if(r=arguments,i=this,l=e,n){if(void 0===f)return T(l);if(d)return f=setTimeout(O,t),p(l)}return void 0===f&&(f=setTimeout(O,t)),u}return t=S(t)||0,y(n)&&(s=!!n.leading,a=(d="maxWait"in n)?g(S(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),N.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},N.flush=function(){return void 0===f?u:h(b())},N}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=u.test(t);return o||f.test(t)?l(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:r,maxWait:t,trailing:i})};var T=document.querySelector(".feedback-form");T.addEventListener("input",e(t)((function(e){"INPUT"===e.target.nodeName&&(h(e.target.name,e.target.value),console.log(e.target.value));"TEXTAREA"===e.target.nodeName&&(h(e.target.name,e.target.value),console.log(e.target.value))}),500)),T.addEventListener("submit",(function(e){e.preventDefault(),e.target.reset(),console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),localStorage.removeItem("feedback-form-state")}));var j,O={};(j=JSON.parse(localStorage.getItem("feedback-form-state")))&&(T.email.value=j.email,T.message.value=j.message);var h=function(e,t){try{O[e]=t,localStorage.setItem("feedback-form-state",JSON.stringify(O))}catch(e){console.error("Set state error: ",e.message)}}}();
//# sourceMappingURL=03-feedback.0cc8b03b.js.map
