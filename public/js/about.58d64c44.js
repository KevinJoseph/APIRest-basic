(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"03cd":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"container"},[n("div",{staticClass:"jumbotron"},[n("center",[n("h3",{},[e._v("Estado de Cuenta en Linea")]),n("p",{},[e._v("El siguiente tramite en linea le permitirá solicitar su Estado de Cuenta.")])]),n("hr",{staticClass:"my-4"}),n("form",[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:""}},[e._v("Numero de documento")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.document,expression:"document"}],staticClass:"form-control",attrs:{type:"text",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Ruc o DNI"},domProps:{value:e.document},on:{input:function(t){t.target.composing||(e.document=t.target.value)}}})]),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:""}},[e._v("Nombres / Razon Social")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:""}},[e._v("Celular")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],staticClass:"form-control",attrs:{type:"text",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Numero de celular"},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}})]),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:""}},[e._v("Correo electronico")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"munipuntahermosa@gmail.com"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),n("small",{staticClass:"form-text text-muted",attrs:{id:"emailHelp"}},[e._v("Deberá registrar un correo electronico valido.")])]),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:""}},[e._v("Año de Estado de Cuenta")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.year,expression:"year"}],staticClass:"form-control",attrs:{type:"text",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"2019 ó 2018,2019,2020"},domProps:{value:e.year},on:{input:function(t){t.target.composing||(e.year=t.target.value)}}})]),n("center",[n("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:e.createsolicitud}},[e._v("Solicitar Estado de Cuenta")])])],1)],1)])])},o=[],a=(n("b0c0"),n("bc3a")),s=n.n(a),i={name:"EstadoCuenta",data:function(){return{document:"",name:"",phone:"",email:"",year:""}},methods:{createsolicitud:function(){var e=this,t={document:this.document,name:this.name,phone:this.phone,email:this.email,year:this.year};s.a.post("solicitud/",t).then((function(t){e.error="",console.log("newEstado")}),(function(t){console.log(t.response),e.error=t.response.data.error}))}}},c=i,u=n("2877"),l=Object(u["a"])(c,r,o,!1,null,null,null);t["default"]=l.exports},"05a5":function(e,t,n){},"0a06":function(e,t,n){"use strict";var r=n("c532"),o=n("30b5"),a=n("f6b4"),s=n("5270"),i=n("4a7b");function c(e){this.defaults=e,this.interceptors={request:new a,response:new a}}c.prototype.request=function(e){"string"===typeof e?(e=arguments[1]||{},e.url=arguments[0]):e=e||{},e=i(this.defaults,e),e.method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[s,void 0],n=Promise.resolve(e);this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));while(t.length)n=n.then(t.shift(),t.shift());return n},c.prototype.getUri=function(e){return e=i(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){c.prototype[e]=function(t,n){return this.request(r.merge(n||{},{method:e,url:t}))}})),r.forEach(["post","put","patch"],(function(e){c.prototype[e]=function(t,n,o){return this.request(r.merge(o||{},{method:e,url:t,data:n}))}})),e.exports=c},"0df6":function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},"1d2b":function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},2444:function(e,t,n){"use strict";(function(t){var r=n("c532"),o=n("c8af"),a={"Content-Type":"application/x-www-form-urlencoded"};function s(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function i(){var e;return("undefined"!==typeof XMLHttpRequest||"undefined"!==typeof t&&"[object process]"===Object.prototype.toString.call(t))&&(e=n("b50d")),e}var c={adapter:i(),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(s(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(s(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"===typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){c.headers[e]=r.merge(a)})),e.exports=c}).call(this,n("4362"))},"2d83":function(e,t,n){"use strict";var r=n("387f");e.exports=function(e,t,n,o,a){var s=new Error(e);return r(s,t,n,o,a)}},"2e67":function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},"30b5":function(e,t,n){"use strict";var r=n("c532");function o(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var a;if(n)a=n(t);else if(r.isURLSearchParams(t))a=t.toString();else{var s=[];r.forEach(t,(function(e,t){null!==e&&"undefined"!==typeof e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),s.push(o(t)+"="+o(e))})))})),a=s.join("&")}if(a){var i=e.indexOf("#");-1!==i&&(e=e.slice(0,i)),e+=(-1===e.indexOf("?")?"?":"&")+a}return e}},"34c3":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v(" NAME: "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(" "),n("br"),e._v(" EMAIL: "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._v(" "),n("br"),e._v(" PASSWORD: "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._v(" "),n("br"),n("button",{on:{click:e.signup}},[e._v("signup")]),e._v(" "+e._s(e.error)+" ")])},o=[],a=(n("b0c0"),n("bc3a")),s=n.n(a),i={name:"Signup",data:function(){return{name:"",email:"",password:"",error:""}},methods:{signup:function(){var e=this,t={name:this.name,email:this.email,password:this.password};s.a.post("/auth/signup",t).then((function(t){e.error="",e.$router.push("/login")}),(function(t){console.log(t.response),e.error=t.response.data.error}))}}},c=i,u=n("2877"),l=Object(u["a"])(c,r,o,!1,null,null,null);t["default"]=l.exports},"387f":function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},3934:function(e,t,n){"use strict";var r=n("c532");e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=o(window.location.href),function(t){var n=r.isString(t)?o(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return function(){return!0}}()},"467f":function(e,t,n){"use strict";var r=n("2d83");e.exports=function(e,t,n){var o=n.config.validateStatus;!o||o(n.status)?e(n):t(r("Request failed with status code "+n.status,n.config,null,n.request,n))}},"4a7b":function(e,t,n){"use strict";var r=n("c532");e.exports=function(e,t){t=t||{};var n={},o=["url","method","params","data"],a=["headers","auth","proxy"],s=["baseURL","url","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"];r.forEach(o,(function(e){"undefined"!==typeof t[e]&&(n[e]=t[e])})),r.forEach(a,(function(o){r.isObject(t[o])?n[o]=r.deepMerge(e[o],t[o]):"undefined"!==typeof t[o]?n[o]=t[o]:r.isObject(e[o])?n[o]=r.deepMerge(e[o]):"undefined"!==typeof e[o]&&(n[o]=e[o])})),r.forEach(s,(function(r){"undefined"!==typeof t[r]?n[r]=t[r]:"undefined"!==typeof e[r]&&(n[r]=e[r])}));var i=o.concat(a).concat(s),c=Object.keys(t).filter((function(e){return-1===i.indexOf(e)}));return r.forEach(c,(function(r){"undefined"!==typeof t[r]?n[r]=t[r]:"undefined"!==typeof e[r]&&(n[r]=e[r])})),n}},5270:function(e,t,n){"use strict";var r=n("c532"),o=n("c401"),a=n("2e67"),s=n("2444");function i(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){i(e),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]}));var t=e.adapter||s.adapter;return t(e).then((function(t){return i(e),t.data=o(t.data,t.headers,e.transformResponse),t}),(function(t){return a(t)||(i(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},"7a77":function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},"7aac":function(e,t,n){"use strict";var r=n("c532");e.exports=r.isStandardBrowserEnv()?function(){return{write:function(e,t,n,o,a,s){var i=[];i.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),r.isString(o)&&i.push("path="+o),r.isString(a)&&i.push("domain="+a),!0===s&&i.push("secure"),document.cookie=i.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},"804d":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("br"),n("div",{staticClass:"container"},[n("nav",{attrs:{"aria-label":"breadcrumb"}},[n("ol",{staticClass:"breadcrumb"},[e._m(0),n("li",{staticClass:"breadcrumb-item"},[n("a",{staticClass:"btn btn-primary btn-sm",attrs:{href:"#"},on:{click:e.logout}},[e._v("Cerrar Sesión")])])])]),n("table",{staticClass:"table"},[e._m(1),n("tbody",e._l(e.estados,(function(t,r){return n("tr",{key:r},[n("td",[e._v(e._s(r+1))]),n("td",[e._v(e._s(t.document))]),n("td",[e._v(e._s(t.name))]),n("td",[e._v(e._s(t.phone))]),n("td",[e._v(e._s(t.email))]),n("td",[e._v(e._s(t.year))]),n("td",[e._v(e._s(t.date))]),"0"==t.status?n("td",{staticStyle:{color:"red"}},[e._v("Pendiente")]):n("td",{staticStyle:{color:"green"}},[e._v("Enviado")]),n("td",[n("button",{staticClass:"btn btn-success btn-sm",staticStyle:{"font-size":"9px"},on:{click:function(n){return e.EstadoCompletely(t)}}},[e._v(" Sí ")]),n("button",{staticClass:"btn btn-danger btn-sm",staticStyle:{"font-size":"9px"},on:{click:function(n){return e.EstadoPending(t,r)}}},[e._v(" No ")])])])})),0)])])])},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{staticClass:"breadcrumb-item"},[n("a",{attrs:{href:"#"}},[e._v("Solicitudes de Estados de Cuenta:")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("thead",{staticClass:"thead-dark"},[n("tr",[n("th",{attrs:{scope:"col"}},[e._v("#")]),n("th",{attrs:{scope:"col"}},[e._v("Documento")]),n("th",{attrs:{scope:"col"}},[e._v("Nombres")]),n("th",{attrs:{scope:"col"}},[e._v("Celular")]),n("th",{attrs:{scope:"col"}},[e._v("Email")]),n("th",{attrs:{scope:"col"}},[e._v("Año")]),n("th",{attrs:{scope:"col"}},[e._v("Fecha")]),n("th",{attrs:{scope:"col"}},[e._v("Estado")]),n("th",{attrs:{scope:"col"}},[e._v("Acción")])])])}],a=n("bc3a"),s=n.n(a),i={name:"EstadoCuenta",data:function(){return{_id:"",document:"",name:"",phone:"",email:"",year:"",status:"",date:"",estados:[],estadoEditar:"",estado:{_id:"",document:"",name:"",phone:"",email:"",year:"",status:"",date:""}}},created:function(){null===localStorage.getItem("token")&&this.$router.push("/login")},mounted:function(){var e=this;s.a.get("/solicitud/",{headers:{token:localStorage.getItem("token")}}).then((function(t){e.estados=t.data})).catch((function(t){console.log(t),e.$router.push("login")}))},methods:{logout:function(){localStorage.clear(),this.$router.push("/login")},EstadoCompletely:function(e){var t=this;s.a.put("/solicitud/complety/".concat(e._id),e).then((function(e){s.a.get("/solicitud/",{headers:{token:localStorage.getItem("token")}}).then((function(e){t.estados=e.data})).catch((function(e){console.log(e),t.$router.push("login")}))})).catch((function(e){console.log(e)}))},EstadoPending:function(e){var t=this;s.a.put("/solicitud/pending/".concat(e._id),e).then((function(e){s.a.get("/solicitud/",{headers:{token:localStorage.getItem("token")}}).then((function(e){t.estados=e.data})).catch((function(e){console.log(e),t.$router.push("login")}))})).catch((function(e){console.log(e)}))}}},c=i,u=(n("e046"),n("2877")),l=Object(u["a"])(c,r,o,!1,null,null,null);t["default"]=l.exports},"83b9":function(e,t,n){"use strict";var r=n("d925"),o=n("e683");e.exports=function(e,t){return e&&!r(t)?o(e,t):t}},"8df4":function(e,t,n){"use strict";var r=n("7a77");function o(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e,t=new o((function(t){e=t}));return{token:t,cancel:e}},e.exports=o},a55b:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v(" EMAIL: "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._v(" "),n("br"),e._v(" PASSWORD: "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._v(" "),n("br"),n("button",{on:{click:e.login}},[e._v("login")]),e._v(" "+e._s(e.error)+" ")])},o=[],a=n("bc3a"),s=n.n(a),i={name:"Login",data:function(){return{email:"",password:"",error:""}},methods:{login:function(){var e=this,t={email:this.email,password:this.password};s.a.post("/auth/login",t).then((function(t){200===t.status&&(localStorage.setItem("token",t.data.token),e.$router.push("/platform"))}),(function(t){console.log(t.response),e.error=t.response.data.error}))}}},c=i,u=n("2877"),l=Object(u["a"])(c,r,o,!1,null,null,null);t["default"]=l.exports},b0c0:function(e,t,n){var r=n("83ab"),o=n("9bf2").f,a=Function.prototype,s=a.toString,i=/^\s*function ([^ (]*)/,c="name";r&&!(c in a)&&o(a,c,{configurable:!0,get:function(){try{return s.call(this).match(i)[1]}catch(e){return""}}})},b50d:function(e,t,n){"use strict";var r=n("c532"),o=n("467f"),a=n("30b5"),s=n("83b9"),i=n("c345"),c=n("3934"),u=n("2d83");e.exports=function(e){return new Promise((function(t,l){var f=e.data,d=e.headers;r.isFormData(f)&&delete d["Content-Type"];var p=new XMLHttpRequest;if(e.auth){var m=e.auth.username||"",h=e.auth.password||"";d.Authorization="Basic "+btoa(m+":"+h)}var v=s(e.baseURL,e.url);if(p.open(e.method.toUpperCase(),a(v,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,p.onreadystatechange=function(){if(p&&4===p.readyState&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in p?i(p.getAllResponseHeaders()):null,r=e.responseType&&"text"!==e.responseType?p.response:p.responseText,a={data:r,status:p.status,statusText:p.statusText,headers:n,config:e,request:p};o(t,l,a),p=null}},p.onabort=function(){p&&(l(u("Request aborted",e,"ECONNABORTED",p)),p=null)},p.onerror=function(){l(u("Network Error",e,null,p)),p=null},p.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),l(u(t,e,"ECONNABORTED",p)),p=null},r.isStandardBrowserEnv()){var g=n("7aac"),b=(e.withCredentials||c(v))&&e.xsrfCookieName?g.read(e.xsrfCookieName):void 0;b&&(d[e.xsrfHeaderName]=b)}if("setRequestHeader"in p&&r.forEach(d,(function(e,t){"undefined"===typeof f&&"content-type"===t.toLowerCase()?delete d[t]:p.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(p.withCredentials=!!e.withCredentials),e.responseType)try{p.responseType=e.responseType}catch(y){if("json"!==e.responseType)throw y}"function"===typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"===typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){p&&(p.abort(),l(e),p=null)})),void 0===f&&(f=null),p.send(f)}))}},b53f:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("button",{on:{click:e.logout}},[e._v("logout")]),n("h1",[e._v("HELLO "+e._s(e.name))]),n("h2",[e._v("your email is: "+e._s(e.email))])])},o=[],a=(n("b0c0"),n("bc3a")),s=n.n(a),i={name:"Landing",data:function(){return{name:"",email:""}},created:function(){null===localStorage.getItem("token")&&this.$router.push("/login")},mounted:function(){var e=this;s.a.get("/users/",{headers:{token:localStorage.getItem("token")}}).then((function(t){console.log(t.data),e.name=t.data.user.name,e.email=t.data.user.email}))},methods:{logout:function(){localStorage.clear(),this.$router.push("/login")}}},c=i,u=n("2877"),l=Object(u["a"])(c,r,o,!1,null,null,null);t["default"]=l.exports},bc3a:function(e,t,n){e.exports=n("cee4")},c345:function(e,t,n){"use strict";var r=n("c532"),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,a,s={};return e?(r.forEach(e.split("\n"),(function(e){if(a=e.indexOf(":"),t=r.trim(e.substr(0,a)).toLowerCase(),n=r.trim(e.substr(a+1)),t){if(s[t]&&o.indexOf(t)>=0)return;s[t]="set-cookie"===t?(s[t]?s[t]:[]).concat([n]):s[t]?s[t]+", "+n:n}})),s):s}},c401:function(e,t,n){"use strict";var r=n("c532");e.exports=function(e,t,n){return r.forEach(n,(function(n){e=n(e,t)})),e}},c532:function(e,t,n){"use strict";var r=n("1d2b"),o=Object.prototype.toString;function a(e){return"[object Array]"===o.call(e)}function s(e){return"undefined"===typeof e}function i(e){return null!==e&&!s(e)&&null!==e.constructor&&!s(e.constructor)&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function c(e){return"[object ArrayBuffer]"===o.call(e)}function u(e){return"undefined"!==typeof FormData&&e instanceof FormData}function l(e){var t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer,t}function f(e){return"string"===typeof e}function d(e){return"number"===typeof e}function p(e){return null!==e&&"object"===typeof e}function m(e){return"[object Date]"===o.call(e)}function h(e){return"[object File]"===o.call(e)}function v(e){return"[object Blob]"===o.call(e)}function g(e){return"[object Function]"===o.call(e)}function b(e){return p(e)&&g(e.pipe)}function y(e){return"undefined"!==typeof URLSearchParams&&e instanceof URLSearchParams}function x(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function _(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)}function w(e,t){if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),a(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}function E(){var e={};function t(t,n){"object"===typeof e[n]&&"object"===typeof t?e[n]=E(e[n],t):e[n]=t}for(var n=0,r=arguments.length;n<r;n++)w(arguments[n],t);return e}function C(){var e={};function t(t,n){"object"===typeof e[n]&&"object"===typeof t?e[n]=C(e[n],t):e[n]="object"===typeof t?C({},t):t}for(var n=0,r=arguments.length;n<r;n++)w(arguments[n],t);return e}function S(e,t,n){return w(t,(function(t,o){e[o]=n&&"function"===typeof t?r(t,n):t})),e}e.exports={isArray:a,isArrayBuffer:c,isBuffer:i,isFormData:u,isArrayBufferView:l,isString:f,isNumber:d,isObject:p,isUndefined:s,isDate:m,isFile:h,isBlob:v,isFunction:g,isStream:b,isURLSearchParams:y,isStandardBrowserEnv:_,forEach:w,merge:E,deepMerge:C,extend:S,trim:x}},c8af:function(e,t,n){"use strict";var r=n("c532");e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},cee4:function(e,t,n){"use strict";var r=n("c532"),o=n("1d2b"),a=n("0a06"),s=n("4a7b"),i=n("2444");function c(e){var t=new a(e),n=o(a.prototype.request,t);return r.extend(n,a.prototype,t),r.extend(n,t),n}var u=c(i);u.Axios=a,u.create=function(e){return c(s(u.defaults,e))},u.Cancel=n("7a77"),u.CancelToken=n("8df4"),u.isCancel=n("2e67"),u.all=function(e){return Promise.all(e)},u.spread=n("0df6"),e.exports=u,e.exports.default=u},d925:function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},e046:function(e,t,n){"use strict";var r=n("05a5"),o=n.n(r);o.a},e683:function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},f6b4:function(e,t,n){"use strict";var r=n("c532");function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},f820:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"about"},[n("h1",[e._v("This is an about page")])])}],a=n("2877"),s={},i=Object(a["a"])(s,r,o,!1,null,null,null);t["default"]=i.exports}}]);
//# sourceMappingURL=about.58d64c44.js.map