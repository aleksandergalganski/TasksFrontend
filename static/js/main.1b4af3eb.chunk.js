(this.webpackJsonptasks=this.webpackJsonptasks||[]).push([[0],{121:function(e,a,t){e.exports=t(153)},152:function(e,a,t){},153:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(10),s=t.n(c),o=t(27),l=t(13),i=t(15),u=t(18),m=t.n(u),p=t(31),d=t(33),E=t.n(d),f=function(e){return function(){var a=Object(p.a)(m.a.mark((function a(t){return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:k(t,e);case 1:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},k=function(e,a){e({type:"AUTH_ERROR",payload:a}),setTimeout((function(){return e({type:"CLEAR_AUTH_ERROR"})}),2e3)},b=function(e){return function(){var a=Object(p.a)(m.a.mark((function a(t,n){var r;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,t({type:"SET_LOADING"}),a.next=4,E.a.get("".concat("https://tasks-app-backend.herokuapp.com","/api/v1/tasks"),{params:{type:e},headers:{"x-auth-token":n().auth.token}});case 4:r=a.sent,a.t0=e,a.next="running"===a.t0?8:"todo"===a.t0?10:"finished"===a.t0?12:14;break;case 8:return t({type:"GET_RUNNING_TASKS",payload:r.data.data}),a.abrupt("break",15);case 10:return t({type:"GET_TODO_TASKS",payload:r.data.data}),a.abrupt("break",15);case 12:return t({type:"GET_FINISHED_TASKS",payload:r.data.data}),a.abrupt("break",15);case 14:t({type:"GET_RUNNING_TASKS",payload:r.data.data});case 15:a.next=20;break;case 17:a.prev=17,a.t1=a.catch(0),console.error(a.t1.response.statusText);case 20:case"end":return a.stop()}}),a,null,[[0,17]])})));return function(e,t){return a.apply(this,arguments)}}()},g=function(e,a){return function(){var t=Object(p.a)(m.a.mark((function t(n,r){var c;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:"SET_LOADING"}),t.next=4,E.a.post("".concat("https://tasks-app-backend.herokuapp.com","/api/v1/tasks"),{type:e,name:a},{headers:{"Content-Type":"application/json","x-auth-token":r().auth.token}});case 4:c=t.sent,t.t0=e,t.next="running"===t.t0?8:"todo"===t.t0?10:12;break;case 8:return n({type:"ADD_RUNNING_TASK",payload:c.data.data}),t.abrupt("break",13);case 10:return n({type:"ADD_TODO_TASK ",payload:c.data.data}),t.abrupt("break",13);case 12:n({type:"ADD_RUNNING_TASK",payload:c.data.data});case 13:t.next=18;break;case 15:t.prev=15,t.t1=t.catch(0),console.error(t.t1.response.data.message);case 18:case"end":return t.stop()}}),t,null,[[0,15]])})));return function(e,a){return t.apply(this,arguments)}}()},h=t(193),T=t(197),y=t(51),O=t(198),v=t(106),j=t.n(v),A=Object(i.b)((function(e){return{auth:e.auth}}),{logout:function(){return function(e){e({type:"LOGOUT"})}},clearTasks:function(){return function(e){e({type:"CLEAR_TASKS"})}}})((function(e){var a=e.auth.isAuthenticated,t=e.logout,c=e.clearTasks;return r.a.createElement("nav",{style:{marginBottom:"80px"}},r.a.createElement(h.a,null,r.a.createElement(T.a,{className:"toolbar"},r.a.createElement(y.a,{variant:"h6"},"Tasks App"),r.a.createElement("div",{className:"toolbar__buttons"},a?r.a.createElement(n.Fragment,null,r.a.createElement(j.a,null),r.a.createElement(O.a,{color:"inherit",onClick:function(){t(),c()}},"Logout")):r.a.createElement(n.Fragment,null,r.a.createElement(O.a,{color:"primary"},r.a.createElement(o.b,{to:"/login"},"Login")),r.a.createElement(O.a,{color:"primary"},r.a.createElement(o.b,{to:"/register"},"Register")))))))})),_=t(21),S=t(219),N=function(e){return r.a.createElement(S.a,Object.assign({elevation:6,variant:"filled"},e,{style:{margin:"16px 0"}}))},x=t(200),w={display:"flex",justifyContent:"center"},R=function(){return r.a.createElement("div",{style:w},r.a.createElement(x.a,{style:{margin:"16px 0"},disableShrink:!0}))},D=t(203),C=t(224),I=t(202),G=t(67),L=t.n(G),K=t(58),F=t.n(K),U=t(201),B=t(204),M=Object(U.a)((function(e){return{login:{display:"flex",justifyContent:"center"},loginForm:{display:"flex",width:"400px",justifyContent:"center",flexDirection:"column"},formControl:{margin:e.spacing(2,0,2,0),width:"100%"}}})),H=Object(i.b)((function(e){return{auth:e.auth}}),{login:function(e,a){return function(){var t=Object(p.a)(m.a.mark((function t(n){var r,c;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:"SET_LOADING"}),r={email:e,password:a},t.next=5,E.a.post("".concat("https://tasks-app-backend.herokuapp.com","/api/v1/auth/login"),r,{headers:{"Content-Type":"application/json"}});case 5:c=t.sent,n({type:"LOGIN",payload:c.data.token}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),k(n,t.t0.response.data.message);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},setError:f})((function(e){var a=M(),t=e.auth,c=e.history,s=e.login,l=e.setError;Object(n.useEffect)((function(){t.isAuthenticated&&c.push("/")}),[t.isAuthenticated]);var i=Object(n.useState)(""),u=Object(_.a)(i,2),m=u[0],p=u[1],d=Object(n.useState)(""),E=Object(_.a)(d,2),f=E[0],k=E[1];return r.a.createElement(n.Fragment,null,t.loading&&r.a.createElement(R,null),r.a.createElement("section",{className:a.login},r.a.createElement("form",{className:a.loginForm,onSubmit:function(e){e.preventDefault(),""===m||""===f?l("Email and password are empty"):s(m,f)}},t.error&&r.a.createElement(N,{severity:"error"},t.error),r.a.createElement(y.a,{variant:"h5",align:"center"},"Login"),r.a.createElement(I.a,{className:a.formControl},r.a.createElement(C.a,{htmlFor:"email"},"Email"),r.a.createElement(D.a,{name:"email",type:"email",value:m,onChange:function(e){return p(e.target.value)},startAdornment:r.a.createElement(B.a,{position:"start"},r.a.createElement(L.a,null))})),r.a.createElement(I.a,{className:a.formControl},r.a.createElement(C.a,{htmlFor:"password"},"Password"),r.a.createElement(D.a,{name:"password",type:"password",value:f,onChange:function(e){return k(e.target.value)},startAdornment:r.a.createElement(B.a,{position:"start"},r.a.createElement(F.a,null))})),r.a.createElement(O.a,{variant:"contained",type:"submit",color:"primary",style:{width:"100%"}},"Submit"),r.a.createElement(o.b,{to:"/register",className:"auth-hint"},"Dont have an acccount? Register"))))})),P=Object(U.a)((function(e){return{login:{display:"flex",justifyContent:"center"},loginForm:{display:"flex",width:"400px",justifyContent:"center",flexDirection:"column"},formControl:{margin:e.spacing(2,0,2,0),width:"100%"}}})),Y=Object(i.b)((function(e){return{auth:e.auth}}),{register:function(e,a){return function(){var t=Object(p.a)(m.a.mark((function t(n){var r,c;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:"SET_LOADING"}),r={email:e,password:a},t.next=5,E.a.post("".concat("https://tasks-app-backend.herokuapp.com","/api/v1/auth/register"),r,{headers:{"Content-Type":"application/json"}});case 5:c=t.sent,n({type:"REGISTER",payload:c.data.token}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),k(n,t.t0.response.data.message);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},setError:f})((function(e){var a=P(),t=e.auth,c=e.history,s=e.register,l=e.setError;Object(n.useEffect)((function(){t.isAuthenticated&&c.push("/")}),[t.isAuthenticated]);var i=Object(n.useState)(""),u=Object(_.a)(i,2),m=u[0],p=u[1],d=Object(n.useState)(""),E=Object(_.a)(d,2),f=E[0],k=E[1],b=Object(n.useState)(""),g=Object(_.a)(b,2),h=g[0],T=g[1];return r.a.createElement(n.Fragment,null,t.loading&&r.a.createElement(R,null),r.a.createElement("section",{className:a.login},r.a.createElement("form",{className:a.loginForm,onSubmit:function(e){e.preventDefault(),""===m||""===f||""===h?l("Fill in all inputs"):f!==h?l("Passwords are not the same"):s(m,f)}},t.error&&r.a.createElement(N,{severity:"error"},t.error),r.a.createElement(y.a,{variant:"h5",align:"center"},"Register"),r.a.createElement(I.a,{className:a.formControl},r.a.createElement(C.a,{htmlFor:"email"},"Email"),r.a.createElement(D.a,{name:"email",type:"email",value:m,onChange:function(e){return p(e.target.value)},startAdornment:r.a.createElement(B.a,{position:"start"},r.a.createElement(L.a,null))})),r.a.createElement(I.a,{className:a.formControl},r.a.createElement(C.a,{htmlFor:"password"},"Password"),r.a.createElement(D.a,{name:"password",type:"password",value:f,onChange:function(e){return k(e.target.value)},startAdornment:r.a.createElement(B.a,{position:"start"},r.a.createElement(F.a,null))})),r.a.createElement(I.a,{className:a.formControl},r.a.createElement(C.a,{htmlFor:"password2"},"Confirm Password"),r.a.createElement(D.a,{name:"password2",type:"password",value:h,onChange:function(e){return T(e.target.value)},startAdornment:r.a.createElement(B.a,{position:"start"},r.a.createElement(F.a,null))})),r.a.createElement(O.a,{variant:"contained",color:"primary",type:"submit",style:{width:"100%"}},"Submit"),r.a.createElement(o.b,{to:"/login",className:"auth-hint"},"Already have an acccount? Login"))))})),z=t(107),J=t.n(z),W=t(205),q=t(208),Q=t(199),V=t(207),X=t(108),Z=t.n(X),$=t(221),ee=t(206),ae=Object(i.b)(null,{deleteTask:function(e,a){return function(){var t=Object(p.a)(m.a.mark((function t(n,r){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:"SET_LOADING"}),t.next=4,E.a.delete("".concat("https://tasks-app-backend.herokuapp.com","/api/v1/tasks/").concat(e),{headers:{"x-auth-token":r().auth.token}});case 4:t.t0=a,t.next="running"===t.t0?7:"todo"===t.t0?9:"finished"===t.t0?11:13;break;case 7:return n({type:"DELETE_RUNNING_TASK",payload:e}),t.abrupt("break",14);case 9:return n({type:"DELETE_TODO_TASK",payload:e}),t.abrupt("break",14);case 11:return n({type:"DELETE_FINISHED_TASK",payload:e}),t.abrupt("break",14);case 13:n({type:"DELETE_RUNNING_TASK",payload:e});case 14:t.next=19;break;case 16:t.prev=16,t.t1=t.catch(0),console.error(t.t1.response.statusText);case 19:case"end":return t.stop()}}),t,null,[[0,16]])})));return function(e,a){return t.apply(this,arguments)}}()},changeTaskType:function(e,a){return function(){var t=Object(p.a)(m.a.mark((function t(n,r){var c,s;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.prev=0,n({type:"SET_LOADING"}),c="",t.t0=a,t.next="todo"===t.t0?6:"running"===t.t0?8:10;break;case 6:return c="running",t.abrupt("break",11);case 8:return c="finished",t.abrupt("break",11);case 10:c="running";case 11:return t.next=13,E.a.put("".concat("https://tasks-app-backend.herokuapp.com","/api/v1/tasks/").concat(e),{type:c},{headers:{"x-auth-token":r().auth.token}});case 13:s=t.sent,t.t1=a,t.next="todo"===t.t1?17:"running"===t.t1?19:21;break;case 17:return n({type:"SET_TASK_AS_RUNNING",payload:s.data.data}),t.abrupt("break",22);case 19:return n({type:"SET_TASK_AS_FINISHED",payload:s.data.data}),t.abrupt("break",22);case 21:n({type:"SET_TASK_AS_RUNNING",payload:s.data.data});case 22:t.next=27;break;case 24:t.prev=24,t.t2=t.catch(0),console.error(t.t2.response);case 27:case"end":return t.stop()}}),t,null,[[0,24]])})));return function(e,a){return t.apply(this,arguments)}}()}})((function(e){var a=e.task,t=e.deleteTask,n=e.changeTaskType;return r.a.createElement(r.a.Fragment,null,r.a.createElement(W.a,null,"finished"!==a.type&&r.a.createElement(ee.a,null,r.a.createElement($.a,{edge:"start",disableRipple:!0,color:"primary",onClick:function(){n(a.id,a.type)}})),r.a.createElement(V.a,{primary:a.name,secondary:r.a.createElement(J.a,{format:"YYYY/MM/DD"},a.createdAt)}),r.a.createElement(q.a,null,r.a.createElement(Q.a,{edge:"end","aria-label":"delete",onClick:function(){t(a.id,a.type)}},r.a.createElement(Z.a,null)))))})),te=t(211),ne=t(209),re=t(210),ce=Object(i.b)((function(e){return{tasks:e.tasks}}),{getTasks:b})((function(e){var a=e.getTasks,t=e.tasks.finishedTasks;return Object(n.useEffect)((function(){a("finished")}),[]),r.a.createElement(ne.a,null,r.a.createElement(re.a,null,r.a.createElement(y.a,{variant:"h6",align:"center"},"Finished"),r.a.createElement(te.a,null,0!==t.length?t.map((function(e){return r.a.createElement(ae,{key:e.id,task:e})})):r.a.createElement(W.a,null,r.a.createElement(V.a,{primary:"Add Tasks"})))))})),se=t(223),oe=t(215),le=t(213),ie=t(212),ue=t(218),me=Object(U.a)((function(e){return{formControl:{margin:e.spacing(2,0,2,0),width:"100%"}}})),pe=function(e){var a=e.onClose,t=e.open,c=me(),s=Object(n.useState)(""),o=Object(_.a)(s,2),l=o[0],i=o[1];return r.a.createElement(se.a,{onClose:function(){a(!1)},"aria-labelledby":"simple-dialog-title",open:t},r.a.createElement(ie.a,{id:"simple-dialog-title"},"Add Task"),r.a.createElement(le.a,null,r.a.createElement(I.a,{className:c.formControl},r.a.createElement(ue.a,{id:"task",label:"Task",variant:"outlined",value:l,onChange:function(e){return i(e.target.value)}}))),r.a.createElement(oe.a,null,r.a.createElement(O.a,{variant:"contained",onClick:function(){a(l)},color:"primary"},"Add")))},de=t(216),Ee=t(71),fe=t.n(Ee),ke=Object(i.b)((function(e){return{tasks:e.tasks}}),{getTasks:b,addTask:g})((function(e){var a=e.getTasks,t=e.addTask,c=e.tasks.runningTasks;Object(n.useEffect)((function(){a("running")}),[]);var s=Object(n.useState)(!1),o=Object(_.a)(s,2),l=o[0],i=o[1];return r.a.createElement(n.Fragment,null,r.a.createElement(ne.a,null,r.a.createElement(re.a,null,r.a.createElement(y.a,{variant:"h6",align:"center"},"Running"),r.a.createElement(te.a,null,0!==c.length?c.map((function(e){return r.a.createElement(ae,{key:e.id,task:e})})):r.a.createElement(W.a,null,r.a.createElement(V.a,{primary:"Add Tasks"})),r.a.createElement(W.a,null,r.a.createElement(ee.a,null,r.a.createElement(de.a,{color:"primary",size:"small",onClick:function(){i(!0)}},r.a.createElement(fe.a,null))),r.a.createElement(V.a,{primary:"Add Running Task"}))))),r.a.createElement(pe,{open:l,onClose:function(e){i(!1),e&&t("running",e)}}))})),be=Object(i.b)((function(e){return{tasks:e.tasks}}),{getTasks:b,addTask:g})((function(e){var a=e.getTasks,t=e.addTask,c=e.tasks.todoTasks;Object(n.useEffect)((function(){a("todo")}),[]);var s=Object(n.useState)(!1),o=Object(_.a)(s,2),l=o[0],i=o[1];return r.a.createElement(n.Fragment,null,r.a.createElement(ne.a,null,r.a.createElement(re.a,null,r.a.createElement(y.a,{variant:"h6",align:"center"},"Todo"),r.a.createElement(te.a,null,0!==c.length?c.map((function(e){return r.a.createElement(ae,{key:e.id,task:e})})):r.a.createElement(W.a,null,r.a.createElement(V.a,{primary:"Add Tasks"})),r.a.createElement(W.a,null,r.a.createElement(ee.a,null,r.a.createElement(de.a,{color:"primary",size:"small",onClick:function(){i(!0)}},r.a.createElement(fe.a,null))),r.a.createElement(V.a,{primary:"Add Running Task"}))))),r.a.createElement(pe,{open:l,onClose:function(e){i(!1),e&&t("todo",e)}}))})),ge=t(217),he=t(222),Te=Object(i.b)((function(e){return{tasks:e.tasks}}),{clearSnackBar:function(){return function(e){return e({type:"CLEAR_SNACKBAR"})}}})((function(e){var a=e.tasks,t=a.snackBarMessage,c=a.loading,s=e.clearSnackBar;Object(n.useEffect)((function(){t&&setTimeout((function(){return s()}),1e3)}),[t]);return r.a.createElement(n.Fragment,null,c&&r.a.createElement(R,null),r.a.createElement("section",{style:{padding:"20px"}},r.a.createElement(ge.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(ge.a,{item:!0,lg:4,md:6,sm:12,xs:12},r.a.createElement(be,null)),r.a.createElement(ge.a,{item:!0,lg:4,md:6,sm:12,xs:12},r.a.createElement(ke,null)),r.a.createElement(ge.a,{item:!0,lg:4,md:6,sm:12,xs:12},r.a.createElement(ce,null))),t&&r.a.createElement(he.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:!0,message:t})))})),ye=t(111),Oe=Object(i.b)((function(e){return{auth:e.auth}}),{})((function(e){var a=e.component,t=e.auth,n=Object(ye.a)(e,["component","auth"]);return r.a.createElement(l.b,Object.assign({},n,{render:function(e){return t.isAuthenticated?r.a.createElement(a,e):r.a.createElement(l.a,{to:"/login"})}}))})),ve=(t(152),t(34)),je=t(109),Ae=t(110),_e=t(59),Se=t(7),Ne={todoTasks:[],runningTasks:[],finishedTasks:[],snackBarMessage:null,loading:!1,error:null},xe={token:localStorage.getItem("token"),isAuthenticated:!1,user:null,loading:!1,error:null},we=Object(ve.combineReducers)({tasks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"GET_TODO_TASKS":return Object(Se.a)(Object(Se.a)({},e),{},{todoTasks:a.payload,loading:!1});case"GET_RUNNING_TASKS":return Object(Se.a)(Object(Se.a)({},e),{},{runningTasks:a.payload,loading:!1});case"GET_FINISHED_TASKS":return Object(Se.a)(Object(Se.a)({},e),{},{finishedTasks:a.payload,loading:!1});case"SET_TASK_AS_RUNNING":return Object(Se.a)(Object(Se.a)({},e),{},{todoTasks:e.todoTasks.filter((function(e){return e.id!==a.payload.id})),runningTasks:[].concat(Object(_e.a)(e.runningTasks),[a.payload]),snackBarMessage:"Task set as running",loading:!1});case"SET_TASK_AS_FINISHED":return Object(Se.a)(Object(Se.a)({},e),{},{runningTasks:e.runningTasks.filter((function(e){return e.id!==a.payload.id})),finishedTasks:[].concat(Object(_e.a)(e.finishedTasks),[a.payload]),snackBarMessage:"Task set as finished",loading:!1});case"ADD_RUNNING_TASK":return Object(Se.a)(Object(Se.a)({},e),{},{runningTasks:[].concat(Object(_e.a)(e.runningTasks),[a.payload]),snackBarMessage:"Task added",loading:!1});case"ADD_TODO_TASK ":return Object(Se.a)(Object(Se.a)({},e),{},{todoTasks:[].concat(Object(_e.a)(e.todoTasks),[a.payload]),snackBarMessage:"Task added",loading:!1});case"DELETE_RUNNING_TASK":return Object(Se.a)(Object(Se.a)({},e),{},{runningTasks:e.runningTasks.filter((function(e){return e.id!==a.payload})),snackBarMessage:"Task deleted",loading:!1});case"DELETE_TODO_TASK":return Object(Se.a)(Object(Se.a)({},e),{},{todoTasks:e.todoTasks.filter((function(e){return e.id!==a.payload})),snackBarMessage:"Task deleted",loading:!1});case"DELETE_FINISHED_TASK":return Object(Se.a)(Object(Se.a)({},e),{},{finishedTasks:e.finishedTasks.filter((function(e){return e.id!==a.payload})),snackBarMessage:"Task deleted",loading:!1});case"CLEAR_TASKS":return Object(Se.a)(Object(Se.a)({},e),{},{finishedTasks:[],todoTasks:[],runningTasks:[]});case"SET_LOADING":return Object(Se.a)(Object(Se.a)({},e),{},{loading:!0});case"CLEAR_SNACKBAR":return Object(Se.a)(Object(Se.a)({},e),{},{snackBarMessage:null});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"LOGIN":case"REGISTER":return localStorage.setItem("token",a.payload),Object(Se.a)(Object(Se.a)({},e),{},{token:a.payload,isAuthenticated:!0,loading:!1});case"LOGOUT":return localStorage.removeItem("token"),Object(Se.a)(Object(Se.a)({},e),{},{token:null,isAuthenticated:!1,loading:!1});case"GET_USER":return Object(Se.a)(Object(Se.a)({},e),{},{user:a.payload,isAuthenticated:!0,loading:!1});case"AUTH_ERROR":return Object(Se.a)(Object(Se.a)({},e),{},{error:a.payload,isAuthenticated:!1,loading:!1});case"CLEAR_AUTH_ERROR":return Object(Se.a)(Object(Se.a)({},e),{},{error:null});case"SET_LOADING":return Object(Se.a)(Object(Se.a)({},e),{},{loading:!0});default:return e}}}),Re=[Ae.a],De=Object(ve.createStore)(we,{},Object(je.composeWithDevTools)(ve.applyMiddleware.apply(void 0,Re))),Ce=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"footer__icons"},r.a.createElement("div",{className:"footer__icon"},r.a.createElement("i",{className:"fab fa-facebook-f"})),r.a.createElement("div",{className:"footer__icon"},r.a.createElement("i",{className:"fab fa-twitter"})),r.a.createElement("div",{className:"footer__icon"},r.a.createElement("i",{className:"fab fa-instagram"}))),r.a.createElement(y.a,{variant:"body1",className:"footer__text"},"\xa9 2020 TasksApp"))},Ie=function(){return Object(n.useEffect)((function(){De.dispatch(function(){var e=Object(p.a)(m.a.mark((function e(a,t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.get("".concat("https://tasks-app-backend.herokuapp.com","/api/v1/auth/whoami"),{headers:{"x-auth-token":t().auth.token}});case 3:n=e.sent,a({type:"GET_USER",payload:n.data.data}),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(a,t){return e.apply(this,arguments)}}())}),[]),r.a.createElement(i.a,{store:De},r.a.createElement(o.a,null,r.a.createElement("main",null,r.a.createElement(A,null),r.a.createElement("div",{className:"container"},r.a.createElement(l.d,null,r.a.createElement(Oe,{exact:!0,path:"/",component:Te}),r.a.createElement(l.b,{exact:!0,path:"/login",component:H}),r.a.createElement(l.b,{exact:!0,path:"/register",component:Y})))),r.a.createElement(Ce,null)))};s.a.render(r.a.createElement(Ie,null),document.getElementById("root"))}},[[121,1,2]]]);
//# sourceMappingURL=main.1b4af3eb.chunk.js.map