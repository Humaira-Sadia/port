import{c as b}from"./@react-three-AYvoDJAM.js";var k="Expected a function",S=NaN,N="[object Symbol]",$=/^\s+|\s+$/g,A=/^[-+]0x[0-9a-f]+$/i,B=/^0b[01]+$/i,F=/^0o[0-7]+$/i,R=parseInt,_=typeof b=="object"&&b&&b.Object===Object&&b,G=typeof self=="object"&&self&&self.Object===Object&&self,P=_||G||Function("return this")(),D=Object.prototype,H=D.toString,U=Math.max,X=Math.min,v=function(){return P.Date.now()};function q(e,t,r){var f,a,m,u,i,c,s=0,h=!1,l=!1,j=!0;if(typeof e!="function")throw new TypeError(k);t=E(t)||0,y(r)&&(h=!!r.leading,l="maxWait"in r,m=l?U(E(r.maxWait)||0,t):m,j="trailing"in r?!!r.trailing:j);function T(n){var o=f,d=a;return f=a=void 0,s=n,u=e.apply(d,o),u}function L(n){return s=n,i=setTimeout(g,t),h?T(n):u}function W(n){var o=n-c,d=n-s,O=t-o;return l?X(O,m-d):O}function x(n){var o=n-c,d=n-s;return c===void 0||o>=t||o<0||l&&d>=m}function g(){var n=v();if(x(n))return I(n);i=setTimeout(g,W(n))}function I(n){return i=void 0,j&&f?T(n):(f=a=void 0,u)}function C(){i!==void 0&&clearTimeout(i),s=0,f=c=a=i=void 0}function M(){return i===void 0?u:I(v())}function p(){var n=v(),o=x(n);if(f=arguments,a=this,c=n,o){if(i===void 0)return L(c);if(l)return i=setTimeout(g,t),T(c)}return i===void 0&&(i=setTimeout(g,t)),u}return p.cancel=C,p.flush=M,p}function z(e,t,r){var f=!0,a=!0;if(typeof e!="function")throw new TypeError(k);return y(r)&&(f="leading"in r?!!r.leading:f,a="trailing"in r?!!r.trailing:a),q(e,t,{leading:f,maxWait:t,trailing:a})}function y(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function J(e){return!!e&&typeof e=="object"}function K(e){return typeof e=="symbol"||J(e)&&H.call(e)==N}function E(e){if(typeof e=="number")return e;if(K(e))return S;if(y(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=y(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace($,"");var r=B.test(e);return r||F.test(e)?R(e.slice(2),r?2:8):A.test(e)?S:+e}var V=z;export{V as l};
