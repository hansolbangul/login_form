(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{131:function(e,t,n){},132:function(e,t,n){},150:function(e,t,n){},156:function(e,t,n){},229:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n(28),r=n.n(a),c=(n(131),n(132),n(39)),i=n(18),o=n(36),l=n.n(o),j=(n(150),n.p,n(236)),u=n(237),d=n(7);var m=Object(i.f)((function(e){return Object(s.useEffect)((function(){l.a.get("/api/hello").then((function(e){return console.log(e.data)}))}),[]),Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"Link",children:[Object(d.jsx)("div",{className:"Home",children:Object(d.jsx)(c.b,{to:"/",children:Object(d.jsx)(j.a,{style:{fontSize:"40px",marginLeft:"14px",color:"black"}})})}),Object(d.jsx)("div",{className:"Menu",children:Object(d.jsx)(c.b,{to:"/Community",children:"\ucee4\ubba4\ub2c8\ud2f0"})}),Object(d.jsxs)("div",{className:"Log",children:[Object(d.jsx)(c.b,{to:"/login",children:"\ub85c\uadf8\uc778"}),Object(d.jsx)(c.b,{onClick:function(){l.a.get("/api/users/logout").then((function(t){t.data.success?e.history.push("/login"):alert("\ub85c\uadf8\uc544\uc6c3 \ud558\ub294\ub370 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4.")}))},children:"\ub85c\uadf8\uc544\uc6c3"})]})]}),Object(d.jsxs)("div",{className:"body",children:[Object(d.jsx)(u.a,{style:{fontSize:"4rem"}}),Object(d.jsx)("span",{style:{fontSize:"2rem"},children:"hello hansol homepage default"})]})]})})),h=n(46),b="login_user",p="register_user",O="auth_user";function f(){var e=l.a.get("/api/users/auth").then((function(e){return e.data}));return{type:O,payload:e}}var x=n(231),g=n(233),y=n(235),v=n(122),w=n(238),P=n(239),I=(n(156),Object(i.f)((function(e){var t=Object(h.b)();return Object(d.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100vh"},children:Object(d.jsxs)(x.a,{name:"normal_login",className:"login-form",initialValues:{remember:!0},onFinish:function(n){console.log("Received values of form: ",n),t(function(e){var t=l.a.post("/api/users/login",e).then((function(e){return e.data}));return{type:b,payload:t}}(n)).then((function(t){t.payload.loginSuccess?e.history.push("/"):alert("Error")}))},children:[Object(d.jsx)(x.a.Item,{name:"email",rules:[{required:!0,message:"Please input your Username!"}],children:Object(d.jsx)(g.a,{prefix:Object(d.jsx)(w.a,{className:"site-form-item-icon"}),placeholder:"Username"})}),Object(d.jsx)(x.a.Item,{name:"password",rules:[{required:!0,message:"Please input your Password!"}],children:Object(d.jsx)(g.a,{prefix:Object(d.jsx)(P.a,{className:"site-form-item-icon"}),type:"password",placeholder:"Password"})}),Object(d.jsxs)(x.a.Item,{children:[Object(d.jsx)(x.a.Item,{name:"remember",valuePropName:"checked",noStyle:!0,children:Object(d.jsx)(y.a,{children:"Remember me"})}),Object(d.jsx)("a",{className:"login-form-forgot",href:"",children:"Forgot password"})]}),Object(d.jsx)(x.a.Item,{children:Object(d.jsx)(v.a,{type:"primary",htmlType:"submit",className:"login-form-button",children:"Log in"})}),"Or ",Object(d.jsx)("a",{href:"/register",children:"register now!"})]})})}))),E=n(26),N=n(92),_=(n(232).a.Option,{labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}}),C={wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}},F=Object(i.f)((function(e){var t=Object(h.b)(),n=x.a.useForm(),a=Object(N.a)(n,1)[0],r=Object(s.useState)([]),c=Object(N.a)(r,2);c[0],c[1];return Object(d.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100vh"},children:Object(d.jsxs)(x.a,Object(E.a)(Object(E.a)({},_),{},{form:a,name:"register",onFinish:function(n){if(console.log("Received values of form: ",n),n.password!==n.ConfirmPassword)return alert("\ube44\ubc00\ubc88\ud638\uc640 \ube44\ubc00\ubc88\ud638 \ud655\uc778\uc740 \uac19\uc544\uc57c \ud569\ub2c8\ub2e4.");t(function(e){var t=l.a.post("/api/users/register",e).then((function(e){return e.data}));return{type:p,payload:t}}(n)).then((function(t){t.payload.success?e.history.push("/login"):alert("Failed to sign up")}))},scrollToFirstError:!0,children:[Object(d.jsx)(x.a.Item,{name:"email",label:"E-mail",rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}],children:Object(d.jsx)(g.a,{})}),Object(d.jsx)(x.a.Item,{name:"password",label:"Password",rules:[{required:!0,message:"Please input your password!"}],hasFeedback:!0,children:Object(d.jsx)(g.a.Password,{})}),Object(d.jsx)(x.a.Item,{name:"ConfirmPassword",label:"Confirm",dependencies:["password"],hasFeedback:!0,rules:[{required:!0,message:"Please confirm your password!"},function(e){var t=e.getFieldValue;return{validator:function(e,n){return n&&t("password")!==n?Promise.reject(new Error("The two passwords that you entered do not match!")):Promise.resolve()}}}],children:Object(d.jsx)(g.a.Password,{})}),Object(d.jsx)(x.a.Item,{name:"name",label:"name",tooltip:"What do you want others to call you?",rules:[{required:!0,message:"Please input your name!",whitespace:!0}],children:Object(d.jsx)(g.a,{})}),Object(d.jsx)(x.a.Item,{name:"phonenumber",label:"Phone",rules:[{required:!0,message:"Please input your phone number!"}],children:Object(d.jsx)(g.a,{style:{width:"100%"}})}),Object(d.jsx)(x.a.Item,Object(E.a)(Object(E.a)({name:"agreement",valuePropName:"checked",rules:[{validator:function(e,t){return t?Promise.resolve():Promise.reject(new Error("Should accept agreement"))}}]},C),{},{children:Object(d.jsxs)(y.a,{children:["I have read the ",Object(d.jsx)("a",{href:"",children:"agreement"})]})})),Object(d.jsx)(x.a.Item,Object(E.a)(Object(E.a)({},C),{},{children:Object(d.jsx)(v.a,{type:"primary",htmlType:"submit",children:"Register"})}))]}))})})),S=function(){return Object(d.jsx)("div",{children:"Community"})},T=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;function a(a){var r=Object(h.b)();return Object(s.useEffect)((function(){r(f()).then((function(e){console.log(e),e.payload.isAuth?(n&&!e.payload.isAdmin||!1===t)&&a.history.push("/"):t&&a.history.push("/login")}))}),[]),Object(d.jsx)(e,{})}return a};var k=function(){return Object(d.jsx)(c.a,{children:Object(d.jsx)("div",{children:Object(d.jsxs)(i.c,{children:[Object(d.jsx)(i.a,{exact:!0,path:"/",component:m}),Object(d.jsx)(i.a,{exact:!0,path:"/login",component:T(I,!1)}),Object(d.jsx)(i.a,{exact:!0,path:"/register",component:T(F,!1)}),Object(d.jsx)(i.a,{exact:!0,path:"/Community",component:S})]})})})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,240)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),s(e),a(e),r(e),c(e)}))},q=(n(225),n(60)),D=n(118),R=n.n(D),U=n(119),V=Object(q.b)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(E.a)(Object(E.a)({},e),{},{loginSuccess:t.payload});case p:return Object(E.a)(Object(E.a)({},e),{},{regiser:t.payload});case O:return Object(E.a)(Object(E.a)({},e),{},{userData:t.payload});default:return e}}}),X=Object(q.a)(R.a,U.a)(q.c);r.a.render(Object(d.jsx)(h.a,{store:X(V,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),children:Object(d.jsx)(k,{})}),document.getElementById("root")),L()}},[[229,1,2]]]);
//# sourceMappingURL=main.b5c4a690.chunk.js.map