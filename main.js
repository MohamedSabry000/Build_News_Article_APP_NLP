var Client=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t),n.d(t,"postFormDataToserver",(function(){return r})),n.d(t,"handleSubmit",(function(){return o})),n.d(t,"is_URL_Valid",(function(){return i}));const r=async(e="",t={})=>{const n=await fetch(e,{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});try{return await n.json()}catch(e){console.log("error",e)}},o=async e=>{e.preventDefault();const t={url:document.getElementById("name").value};if(Client.is_URL_Valid(t.url)){const e=await Client.postFormDataToserver("http://localhost:8081/test",t),n="P+"===e.score_tag?"STRONG POSITIVE":"P"===e.score_tag?"POSITIVE":"NEW"===e.score_tag?"NEUTRAL":"N"===e.score_tag?"NEGATIVE":"N+"===e.score_tag?"STRONG NEGATIVE":"NONE"===e.score_tag?"NO SENTIMENT":"NO DEFINED SENTIMENT";document.getElementById("results").innerHTML="Polarity: "+n,document.getElementById("results").innerHTML+="<br>Agreement: "+e.agreement,document.getElementById("results").innerHTML+="<br>Subjectivity: "+e.subjectivity,document.getElementById("results").innerHTML+="<br>Confidence: "+e.confidence,document.getElementById("results").innerHTML+="<br>Irony: "+e.irony}else $("#Modal").modal("toggle"),$(".closemodal").on("click",()=>{$("#Modal").modal("hide")})},i=e=>null==e.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g)?0:1;n(0),n(1),n(2),n(3),n(4)}]);