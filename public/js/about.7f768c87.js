(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"03cd":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"container"},[a("div",{staticClass:"jumbotron"},[a("center",[a("h3",{},[t._v("Estado de Cuenta en Linea")]),a("p",{},[t._v("El siguiente tramite en linea le permitirá solicitar su Estado de Cuenta.")])]),a("hr",{staticClass:"my-4"}),a("form",[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v("Numero de documento")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.document,expression:"document"}],staticClass:"form-control",attrs:{type:"text",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Ruc o DNI"},domProps:{value:t.document},on:{input:function(e){e.target.composing||(t.document=e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v("Nombres / Razon Social")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:""},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v("Celular")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"form-control",attrs:{type:"text",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Numero de celular"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v("Correo electronico")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"munipuntahermosa@gmail.com"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),a("small",{staticClass:"form-text text-muted",attrs:{id:"emailHelp"}},[t._v("Deberá registrar un correo electronico valido.")])]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v("Año de Estado de Cuenta")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.year,expression:"year"}],staticClass:"form-control",attrs:{type:"text",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"2019 ó 2018,2019,2020"},domProps:{value:t.year},on:{input:function(e){e.target.composing||(t.year=e.target.value)}}})]),a("center",[a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:t.createsolicitud}},[t._v("Solicitar Estado de Cuenta")])])],1)],1)])])},n=[],r=(a("b0c0"),a("bc3a")),s=a.n(r),i={name:"EstadoCuenta",data:function(){return{document:"",name:"",phone:"",email:"",year:""}},methods:{createsolicitud:function(){var t=this,e={document:this.document,name:this.name,phone:this.phone,email:this.email,year:this.year};s.a.post("solicitud/",e).then((function(e){t.error="",console.log("newEstado")}),(function(e){console.log(e.response),t.error=e.response.data.error}))}}},l=i,c=a("2877"),u=Object(c["a"])(l,o,n,!1,null,null,null);e["default"]=u.exports},"05a5":function(t,e,a){},"34c3":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v(" NAME: "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),a("br"),t._v(" EMAIL: "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"text"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),a("br"),t._v(" PASSWORD: "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),a("br"),a("button",{on:{click:t.signup}},[t._v("signup")]),t._v(" "+t._s(t.error)+" ")])},n=[],r=(a("b0c0"),a("bc3a")),s=a.n(r),i={name:"Signup",data:function(){return{name:"",email:"",password:"",error:""}},methods:{signup:function(){var t=this,e={name:this.name,email:this.email,password:this.password};s.a.post("/auth/signup",e).then((function(e){t.error="",t.$router.push("/login")}),(function(e){console.log(e.response),t.error=e.response.data.error}))}}},l=i,c=a("2877"),u=Object(c["a"])(l,o,n,!1,null,null,null);e["default"]=u.exports},"804d":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("br"),a("div",{staticClass:"container"},[a("nav",{attrs:{"aria-label":"breadcrumb"}},[a("ol",{staticClass:"breadcrumb"},[t._m(0),a("li",{staticClass:"breadcrumb-item"},[a("a",{staticClass:"btn btn-primary btn-sm",attrs:{href:"#"},on:{click:t.logout}},[t._v("Cerrar Sesión")])])])]),a("table",{staticClass:"table"},[t._m(1),a("tbody",t._l(t.estados,(function(e,o){return a("tr",{key:o},[a("td",[t._v(t._s(o+1))]),a("td",[t._v(t._s(e.document))]),a("td",[t._v(t._s(e.name))]),a("td",[t._v(t._s(e.phone))]),a("td",[t._v(t._s(e.email))]),a("td",[t._v(t._s(e.year))]),a("td",[t._v(t._s(e.date))]),"0"==e.status?a("td",{staticStyle:{color:"red"}},[t._v("Pendiente")]):a("td",{staticStyle:{color:"green"}},[t._v("Enviado")]),a("td",[a("button",{staticClass:"btn btn-success btn-sm",staticStyle:{"font-size":"9px"},on:{click:function(a){return t.EstadoCompletely(e)}}},[t._v(" Sí ")]),a("button",{staticClass:"btn btn-danger btn-sm",staticStyle:{"font-size":"9px"},on:{click:function(a){return t.EstadoPending(e,o)}}},[t._v(" No ")])])])})),0)])])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"breadcrumb-item"},[a("a",{attrs:{href:"#"}},[t._v("Solicitudes de Estados de Cuenta:")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",{staticClass:"thead-dark"},[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("#")]),a("th",{attrs:{scope:"col"}},[t._v("Documento")]),a("th",{attrs:{scope:"col"}},[t._v("Nombres")]),a("th",{attrs:{scope:"col"}},[t._v("Celular")]),a("th",{attrs:{scope:"col"}},[t._v("Email")]),a("th",{attrs:{scope:"col"}},[t._v("Año")]),a("th",{attrs:{scope:"col"}},[t._v("Fecha")]),a("th",{attrs:{scope:"col"}},[t._v("Estado")]),a("th",{attrs:{scope:"col"}},[t._v("Acción")])])])}],r=a("bc3a"),s=a.n(r),i={name:"EstadoCuenta",data:function(){return{_id:"",document:"",name:"",phone:"",email:"",year:"",status:"",date:"",estados:[],estadoEditar:"",estado:{_id:"",document:"",name:"",phone:"",email:"",year:"",status:"",date:""}}},created:function(){null===localStorage.getItem("token")&&this.$router.push("/login")},mounted:function(){var t=this;s.a.get("/solicitud/",{headers:{token:localStorage.getItem("token")}}).then((function(e){t.estados=e.data})).catch((function(e){console.log(e),t.$router.push("login")}))},methods:{logout:function(){localStorage.clear(),this.$router.push("/login")},EstadoCompletely:function(t){var e=this;s.a.put("/solicitud/complety/".concat(t._id),t).then((function(t){s.a.get("/solicitud/",{headers:{token:localStorage.getItem("token")}}).then((function(t){e.estados=t.data})).catch((function(t){console.log(t),e.$router.push("login")}))})).catch((function(t){console.log(t)}))},EstadoPending:function(t){var e=this;s.a.put("/solicitud/pending/".concat(t._id),t).then((function(t){s.a.get("/solicitud/",{headers:{token:localStorage.getItem("token")}}).then((function(t){e.estados=t.data})).catch((function(t){console.log(t),e.$router.push("login")}))})).catch((function(t){console.log(t)}))}}},l=i,c=(a("e046"),a("2877")),u=Object(c["a"])(l,o,n,!1,null,null,null);e["default"]=u.exports},a55b:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v(" EMAIL: "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"text"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),a("br"),t._v(" PASSWORD: "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),a("br"),a("button",{on:{click:t.login}},[t._v("login")]),t._v(" "+t._s(t.error)+" ")])},n=[],r=a("bc3a"),s=a.n(r),i={name:"Login",data:function(){return{email:"",password:"",error:""}},methods:{login:function(){var t=this,e={email:this.email,password:this.password};s.a.post("/auth/login",e).then((function(e){200===e.status&&(localStorage.setItem("token",e.data.token),t.$router.push("/platform"))}),(function(e){console.log(e.response),t.error=e.response.data.error}))}}},l=i,c=a("2877"),u=Object(c["a"])(l,o,n,!1,null,null,null);e["default"]=u.exports},b0c0:function(t,e,a){var o=a("83ab"),n=a("9bf2").f,r=Function.prototype,s=r.toString,i=/^\s*function ([^ (]*)/,l="name";o&&!(l in r)&&n(r,l,{configurable:!0,get:function(){try{return s.call(this).match(i)[1]}catch(t){return""}}})},b53f:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("button",{on:{click:t.logout}},[t._v("logout")]),a("h1",[t._v("HELLO "+t._s(t.name))]),a("h2",[t._v("your email is: "+t._s(t.email))])])},n=[],r=(a("b0c0"),a("bc3a")),s=a.n(r),i={name:"Landing",data:function(){return{name:"",email:""}},created:function(){null===localStorage.getItem("token")&&this.$router.push("/login")},mounted:function(){var t=this;s.a.get("/users/",{headers:{token:localStorage.getItem("token")}}).then((function(e){console.log(e.data),t.name=e.data.user.name,t.email=e.data.user.email}))},methods:{logout:function(){localStorage.clear(),this.$router.push("/login")}}},l=i,c=a("2877"),u=Object(c["a"])(l,o,n,!1,null,null,null);e["default"]=u.exports},e046:function(t,e,a){"use strict";var o=a("05a5"),n=a.n(o);n.a},f820:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("h1",[t._v("This is an about page")])])}],r=a("2877"),s={},i=Object(r["a"])(s,o,n,!1,null,null,null);e["default"]=i.exports}}]);
//# sourceMappingURL=about.7f768c87.js.map