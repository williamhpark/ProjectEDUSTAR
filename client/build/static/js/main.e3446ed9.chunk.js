(this.webpackJsonpproject_edustar=this.webpackJsonpproject_edustar||[]).push([[0],{35:function(t,e,n){},36:function(t,e,n){},56:function(t,e,n){},63:function(t,e,n){},64:function(t,e,n){},65:function(t,e,n){},66:function(t,e,n){},67:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),s=n(29),i=n.n(s),o=(n(35),n(10)),r=n(2),u=(n(36),n.p+"static/media/school.e3a18722.png"),j=n(8),l=n.n(j),b=n(11),p=n(4),d=n(12),m=n.n(d),h=(n(56),n(1)),O=function(){var t=Object(a.useState)([]),e=Object(p.a)(t,2),n=e[0],c=e[1],s=Object(r.f)(),i=function(){var t=Object(b.a)(l.a.mark((function t(){var e;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.get("/api/school/all");case 2:e=t.sent,c(e.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){i()}),[]),Object(h.jsxs)("div",{className:"home-page-container",children:[Object(h.jsx)("button",{onClick:function(){return s.push("/submit")},children:"Create"}),n.slice().reverse().map((function(t){return Object(h.jsx)(o.b,{className:"link school-link",to:"/".concat(t._id),children:Object(h.jsx)("h3",{children:t.name})},t._id)}))]})},f=n(15),x=(n(63),n(64),function(t){var e=t.name,n=t.setName,a=t.about,c=t.setAbout,s=t.location,i=t.setLocation,o=t.admissions,r=t.setAdmissions,u=t.setFile,j=t.handleSubmit;return Object(h.jsx)("div",{className:"submission-form-container",children:Object(h.jsxs)("form",{className:"submission-form",onSubmit:j,children:[Object(h.jsx)("label",{htmlFor:"image-input",children:"Image (gif, jpeg, jpg, png):"}),Object(h.jsx)("input",{id:"image-input",name:"image-input",type:"file",accept:"image/*",onChange:function(t){return u(t.target.files[0])},required:!0}),Object(h.jsx)("label",{htmlFor:"school-name-input",children:"School Name:"}),Object(h.jsx)("input",{id:"school-name-input",name:"school-name-input",type:"text",value:e,onChange:function(t){return n(t.target.value)},required:!0}),Object(h.jsx)("label",{htmlFor:"about-input",children:"About:"}),Object(h.jsx)("textarea",{id:"about-input",name:"about-input",type:"textarea",rows:3,cols:50,value:a,onChange:function(t){return c(t.target.value)}}),Object(h.jsx)("label",{htmlFor:"location-input",children:"Location:"}),Object(h.jsx)("textarea",{id:"location-input",name:"location-input",type:"textarea",rows:3,cols:50,value:s,onChange:function(t){return i(t.target.value)}}),Object(h.jsx)("label",{htmlFor:"admissions-input",children:"Admissions:"}),Object(h.jsx)("textarea",{id:"admissions-input",name:"admissions-input",type:"textarea",rows:3,cols:50,value:o,onChange:function(t){return r(t.target.value)}}),Object(h.jsx)("input",{type:"submit",value:"Submit"})]})})}),g=function(){var t=Object(a.useState)(""),e=Object(p.a)(t,2),n=e[0],c=e[1],s=Object(a.useState)(""),i=Object(p.a)(s,2),o=i[0],u=i[1],j=Object(a.useState)(""),d=Object(p.a)(j,2),O=d[0],g=d[1],v=Object(a.useState)(""),S=Object(p.a)(v,2),w=S[0],F=S[1],N=Object(a.useState)(""),y=Object(p.a)(N,2),C=y[0],k=y[1],A=Object(r.f)(),L={name:n,setName:c,about:o,setAbout:u,location:O,setLocation:g,admissions:w,setAdmissions:F,setFile:k,handleSubmit:function(){var t=Object(b.a)(l.a.mark((function t(e){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),(a=new FormData).append("name",n),a.append("about",o),a.append("location",O),a.append("admissions",w),a.append("file",C),t.next=9,m.a.post("/api/school/instance",a,{headers:{"Content-Type":"multipart/form-data"}});case 9:A.push("/");case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};return Object(h.jsx)("div",{children:Object(h.jsx)(x,Object(f.a)({},L))})},v=(n(65),function(t){var e=Object(a.useState)({}),n=Object(p.a)(e,2),c=n[0],s=n[1],i=Object(r.f)(),o=function(){var e=Object(b.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("/api/school/instance/".concat(t.match.params.id));case 2:n=e.sent,s(n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){o()}),[]),Object(h.jsxs)("div",{className:"instance-page-container",children:[Object(h.jsx)("h1",{children:c.name}),c.about&&Object(h.jsx)("p",{children:c.about}),c.location&&Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{children:"Location:"})," ",c.location]}),c.admissions&&Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{children:"Admissions:"})," ",c.admissions]}),Object(h.jsx)("img",{className:"school-image",src:c.image,alt:"School image"}),Object(h.jsx)("button",{onClick:function(){return i.push("/".concat(t.match.params.id,"/update"))},children:"Update"})]})}),S=(n(66),function(t){var e=Object(a.useState)(""),n=Object(p.a)(e,2),c=n[0],s=n[1],i=Object(a.useState)(""),o=Object(p.a)(i,2),u=o[0],j=o[1],d=Object(a.useState)(""),O=Object(p.a)(d,2),g=O[0],v=O[1],S=Object(a.useState)(""),w=Object(p.a)(S,2),F=w[0],N=w[1],y=Object(a.useState)(""),C=Object(p.a)(y,2),k=C[0],A=C[1],L=Object(r.f)(),D={name:c,setName:s,about:u,setAbout:j,location:g,setLocation:v,admissions:F,setAdmissions:N,setFile:A,handleSubmit:function(){var e=Object(b.a)(l.a.mark((function e(n){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),(a=new FormData).append("name",c),a.append("about",u),a.append("location",g),a.append("admissions",F),a.append("file",k),e.next=9,m.a.put("/api/school/instance/".concat(t.match.params.id),a,{headers:{"Content-Type":"multipart/form-data"}});case 9:L.push("/");case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};return Object(h.jsx)("div",{children:Object(h.jsx)(x,Object(f.a)({},D))})}),w=function(){return Object(h.jsx)(o.a,{children:Object(h.jsxs)("div",{className:"app",children:[Object(h.jsxs)("div",{className:"logo-container",children:[Object(h.jsx)("img",{className:"logo-image",src:u,alt:"Logo image"}),Object(h.jsx)(o.b,{className:"link logo-text",to:"/",children:"Project EDUSTAR"})]}),Object(h.jsxs)(r.c,{children:[Object(h.jsx)(r.a,{exact:!0,path:"/submit",children:Object(h.jsx)(g,{})}),Object(h.jsx)(r.a,{exact:!0,path:"/:id/update",children:function(t){var e=t.match;return Object(h.jsx)(S,{match:e})}}),Object(h.jsx)(r.a,{exact:!0,path:"/:id",children:function(t){var e=t.match;return Object(h.jsx)(v,{match:e})}}),Object(h.jsx)(r.a,{exact:!0,path:"/",children:Object(h.jsx)(O,{})})]})]})})},F=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,68)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,s=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),s(t),i(t)}))};i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(w,{})}),document.getElementById("root")),F()}},[[67,1,2]]]);
//# sourceMappingURL=main.e3446ed9.chunk.js.map