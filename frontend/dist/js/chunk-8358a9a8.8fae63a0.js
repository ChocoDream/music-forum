(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8358a9a8"],{"122a":function(e,t,r){"use strict";r("d426")},a55b:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"wrapper"},[r("h2",[e._v(" Log In ")]),r("form",{staticClass:"wrapper-form",on:{submit:function(t){return t.preventDefault(),e.login(t)}}},[e._m(0),r("input",{staticClass:"form-control",class:{"is-invalid":e.errorMessage},attrs:{type:"email",id:"inputEmail",placeholder:"Enter email",pattern:"^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$",required:""},on:{change:function(t){e.errorMessage=""}}}),e._m(1),r("input",{staticClass:"form-control",class:{"is-invalid":e.errorMessage},attrs:{type:"password",id:"inputPassword",placeholder:"Enter password",required:""},on:{change:function(t){e.errorMessage=""}}}),r("p",{directives:[{name:"show",rawName:"v-show",value:e.errorMessage,expression:"errorMessage"}],staticClass:"text-danger"},[e._v(e._s(e.errorMessage))]),r("button",{staticClass:"btn btn-primary",attrs:{type:"submit",value:"submit"}},[e._v(" Log in ")]),r("div",[r("a",{staticClass:"register-user",on:{click:function(t){return e.registerUser()}}},[e._v(" Not a member? ")])])])])},n=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("label",{attrs:{for:"inputEmail"}},[r("h4",[e._v(" Email ")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("label",{attrs:{for:"inputPassword"}},[r("h4",[e._v(" Password ")])])}],s=(r("d3b7"),r("96cf"),r("1da1")),i=r("d4ec"),o=r("bee2"),c=r("262e"),u=r("2caf"),l=r("9ab4"),p=r("2b0e"),f=r("60a3"),d=function(e){Object(c["a"])(r,e);var t=Object(u["a"])(r);function r(){var e;return Object(i["a"])(this,r),e=t.apply(this,arguments),e.errorMessage="",e}return Object(o["a"])(r,[{key:"registerUser",value:function(){this.$router.push("/register")}},{key:"login",value:function(e){var t={email:e.target.inputEmail.value,password:e.target.inputPassword.value};this.attemptLogin(t)}},{key:"attemptLogin",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var r=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/login",{method:"POST",headers:{"Content-Type":"Application/json"},body:JSON.stringify(t)}).then((function(e){if(e.ok)return e.json();r.errorMessage="Wrong Password or Email"})).then((function(e){e&&(r.$store.dispatch("whoami"),r.$router.push("/"))})).catch((function(e){console.error(e)}));case 2:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()}]),r}(p["a"]);d=Object(l["a"])([f["a"]],d);var h=d,m=h,v=(r("122a"),r("2877")),g=Object(v["a"])(m,a,n,!1,null,"ec71e114",null);t["default"]=g.exports},d426:function(e,t,r){}}]);
//# sourceMappingURL=chunk-8358a9a8.8fae63a0.js.map