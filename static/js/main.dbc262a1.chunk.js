(this["webpackJsonpproject_memory-card"]=this["webpackJsonpproject_memory-card"]||[]).push([[0],{20:function(e,n,t){},21:function(e,n,t){},22:function(e,n,t){},26:function(e,n,t){"use strict";t.r(n);var a=t(1),i=t.n(a),c=t(12),r=t.n(c),o=(t(20),t(21),t(22),t(2)),d=t(3),s=t(4),l=t(5);function j(e,n){if(n>e.length)throw Error("number of cards taken (".concat(n,") exceed array length (").concat(e.length,")"));for(var t,a=Object(s.a)(e),i=[],c=0;c<n;c++)t=Math.floor(Math.random()*a.length),i.push.apply(i,Object(s.a)(a.splice(t,1)));return i}function b(e,n,t){if(0===t.length)return Object(s.a)(j(n,5));if(0===n.length)return Object(s.a)(j(t,10));switch(e){case"easy":return[].concat(Object(s.a)(j(n,4)),Object(s.a)(j(t,1)));case"medium":return[].concat(Object(s.a)(j(n,3)),Object(s.a)(j(t,2)));case"hard":return[].concat(Object(s.a)(j(n,1)),Object(s.a)(j(t,9)));default:throw Error("Oops, something went wrong in getPlayCards()!")}}var u,m,h,p=t(0),g=d.a.span(u||(u=Object(o.a)(["\n  @media (min-width: 320px) {\n    padding: 5px;\n  }\n\n  @media (min-width: 425px) {\n    padding: 15px;\n  }\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 2% 1%;\n\n  background-color: #f4dd03;\n  border: solid;\n  border-radius: 20px;\n  box-shadow: 2px 2px;\n"]))),x=d.a.img(m||(m=Object(o.a)(["\n  @media (min-width: 320px) {\n    width: 50px;\n  }\n\n  @media (min-width: 768px) {\n    width: 100px;\n  }\n\n  @media (min-width: 1070px) {\n    width: 150px;\n  }\n\n  border: inherit;\n  border-radius: inherit;\n"]))),O=d.a.span(h||(h=Object(o.a)(["\n  margin-top: 15px;\n  font-weight: bold;\n"])));var f,w=function(e){var n=e.name,t=e.imgSrc,a=e.handleClick;return Object(p.jsxs)(g,{children:[Object(p.jsx)(x,{src:t,alt:n,onClick:a,id:n}),Object(p.jsx)(O,{children:n})]})},k=d.a.aside(f||(f=Object(o.a)(["\n  position: fixed;\n  background: radial-gradient(#f4dd03, #9c8f0f);\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  border: solid 2px black;\n  box-shadow: 2px 2px black;\n  z-index: 2;\n"])));var M,A=function(e){var n=e.setIsInvincible,t=e.setIsDebugMode,a=e.isDebugMode,i=e.isInvincible;return Object(p.jsxs)(k,{children:[Object(p.jsx)("p",{children:"Set Invincibile Mode"}),Object(p.jsxs)("label",{className:"switch",children:[Object(p.jsx)("input",{type:"checkbox",checked:i,onChange:function(){n((function(e){return!e}))}}),Object(p.jsx)("span",{className:"slider round"})]}),Object(p.jsx)("p",{children:" Set Debug Mode"}),Object(p.jsxs)("label",{className:"switch",children:[Object(p.jsx)("input",{type:"checkbox",checked:a,onChange:function(){t((function(e){return!e}))}}),Object(p.jsx)("span",{className:"slider round"})]})]})},v=d.a.aside(M||(M=Object(o.a)(["\n  position: fixed;\n  left: 0;\n  width: 150px;\n  background-color: white;\n  border: solid 2px black;\n  padding: 10px;\n  z-index: 2;\n"])));var S,y,E,I,B,T,D=function(e){var n=e.leftOverCards,t=e.chosenCards;return Object(p.jsxs)(v,{children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:"Leftover Cards"}),n.map((function(e){return Object(p.jsxs)("li",{children:[e.name," "]},e.name)}))]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:"Chosen Cards"}),t.map((function(e){return Object(p.jsxs)("li",{children:[e.name," "]},e.name)}))]})]})},P=t.p+"static/media/Denki_Kaminari_Portrait.74495ee9.png",R=t.p+"static/media/Eijirou_Kirishima_Portrait.8c1fff17.png",Z=t.p+"static/media/Fumikage_Tokoyami_Portrait.ba442145.png",J=t.p+"static/media/Hanta_Sero_Portrait.c1ba1a4c.png",N=t.p+"static/media/Izuku_Midoriya_Portrait.157fa7ad.png",G=t.p+"static/media/Katsuki_Bakugo_Portrait.39c6f14f.png",Y=t.p+"static/media/Kouji_Kouda_Portrait.6f1ffabb.png",_=t.p+"static/media/Kyouka_Jirou_Portrait.c8299389.png",C=t.p+"static/media/Mashirao_Ojiro_Portrait.93a044ed.png",z=t.p+"static/media/Mezo_Shoji_Portrait.89caf3d5.png",L=t.p+"static/media/Mina_Ashido_Portrait.76a9500d.png",W=t.p+"static/media/Minoru_Mineta_Portrait.b76d53c1.png",U=t.p+"static/media/Momo_Yaoyorozu_Portrait.3ffd17ce.png",H=t.p+"static/media/Ochaco_Uraraka_Portrait.eafd574e.png",Q=t.p+"static/media/Rikido_Sato_Portrait.3a50cd24.png",X=t.p+"static/media/Shoto_Todoroki_Portrait.0ebb1314.png",F=t.p+"static/media/Tenya_Iida_Portrait.25e4a3dc.png",K=t.p+"static/media/Tooru_Hagakure_Portrait.af13e829.png",V=t.p+"static/media/Tsuyu_Asui_Portrait.e7d7da8e.png",q=t.p+"static/media/Yuuga_Aoyama_Portrait.06d3fa86.png",$=t.p+"static/media/All_Might_Approve.680750a0.png",ee=t.p+"static/media/My_Hero_Academia_Logo.1292fcc2.png",ne=d.a.div(S||(S=Object(o.a)(["\n  z-index: 3;\n  position: absolute;\n  top: 40%;\n  background: blanchedalmond;\n  padding: 50px 100px;\n  display: flex;\n  flex-direction: ",";\n  align-items: center;\n"])),(function(e){return e.flexDirection||"column"})),te=d.a.div(y||(y=Object(o.a)(["\n  z-index: 2;\n  position: fixed;\n  background: gray;\n  width: 100%;\n  height: 100%;\n  opacity: 50%;\n"]))),ae=d.a.button(E||(E=Object(o.a)(["\n  margin-top: 20px;\n  padding: 10px 20px;\n"]))),ie=d.a.img(I||(I=Object(o.a)(["\n  height: 200px;\n"]))),ce=d.a.img(B||(B=Object(o.a)(["\n  -webkit-transform: scaleX(-1);\n  transform: scaleX(-1);\n  height: 200px;\n"]))),re=d.a.div(T||(T=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"])));var oe=function(e){var n=e.correct,t=e.leftOver,a=e.isMaxScore,i=e.handleNewGame;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(te,{}),Object(p.jsx)(ne,{flexDirection:a?"row":"column",children:a?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(ie,{src:$}),Object(p.jsxs)(re,{children:[Object(p.jsx)("h2",{children:"Game Over!"}),Object(p.jsx)("h2",{children:"Plus Ultraaaa!!!! All Mights Approved!!"}),Object(p.jsx)("p",{children:"Congratulations!!! You got everything right and achieved the maximum score!"}),Object(p.jsx)(ae,{onClick:i,children:"New Game!"})]}),Object(p.jsx)(ce,{src:$})]}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h2",{children:"Game Over!"}),Object(p.jsxs)("p",{children:["Good job! You made ",n," correct choices! "]}),Object(p.jsxs)("p",{children:["Only ",t," unique cards left over!"]}),Object(p.jsx)(ae,{onClick:i,children:"New Game!"})]})})]})};var de,se=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:"How to Play"}),Object(p.jsx)("p",{children:"Memorize and pick 1 character card each turn. Make sure that you do not ever pick a character that you have picked before! Try to reach max score for a surprise!"})]})},le=d.a.span(de||(de=Object(o.a)(["\n  margin-right: 15px;\n  font-weight: bold;\n  text-shadow: 1px 1px black;\n"])));var je,be,ue,me=function(e){return Object(p.jsxs)("div",{children:[Object(p.jsxs)(le,{children:["Round: ",e.round]}),Object(p.jsxs)(le,{children:["Difficulty: ",e.difficulty]}),Object(p.jsxs)(le,{children:["Score: ",e.score]}),Object(p.jsxs)(le,{children:["Highscore: ",e.highScore]})]})},he=[{name:"Denki Kaminari",imgSrc:P},{name:"Eijirou Kirishima",imgSrc:R},{name:"Fumikage Tokoyami",imgSrc:Z},{name:"Hanta Sero",imgSrc:J},{name:"Izuku Midoriya",imgSrc:N},{name:"Katsuki Bakugo",imgSrc:G},{name:"Kouji Kouda",imgSrc:Y},{name:"Kyouka Jirou",imgSrc:_},{name:"Mashirao Ojiro",imgSrc:C},{name:"Mezo Shoji",imgSrc:z},{name:"Mina Ashido",imgSrc:L},{name:"Minoru Mineta",imgSrc:W},{name:"Momo Yaoyorozu",imgSrc:U},{name:"Ochaco Uraraka",imgSrc:H},{name:"Rikido Sato",imgSrc:Q},{name:"Shoto Todoroki",imgSrc:X},{name:"Tenya Iida",imgSrc:F},{name:"Tooru Hagakure",imgSrc:K},{name:"Tsuyu Asui",imgSrc:V},{name:"Yuuga Aoyama",imgSrc:q}],pe=d.a.section(je||(je=Object(o.a)(["\n  background-color: AliceBlue;\n  height: 100%;\n  width: 100%;\n  display: grid;\n  grid-template-rows: 1fr 4fr;\n"]))),ge=d.a.section(be||(be=Object(o.a)(["\n  background: radial-gradient(#db0917, #8b0912);\n  color: white;\n  border: solid 4px black;\n  padding: 15px 30%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  text-align: center;\n"]))),xe=d.a.section(ue||(ue=Object(o.a)(["\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  flex-wrap: wrap;\n  @media (max-width: 1520px) {\n    padding: 0% 0%;\n  }\n  padding: 0% 15%;\n  background-color: #ecc0a3;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ec7629' fill-opacity='0.4'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");\n"]))),Oe=he.length,fe=b("easy",he,[]);var we,ke,Me=function(){var e=Object(a.useState)(he),n=Object(l.a)(e,2),t=n[0],i=n[1],c=Object(a.useState)([]),r=Object(l.a)(c,2),o=r[0],d=r[1],j=Object(a.useState)(fe),u=Object(l.a)(j,2),m=u[0],h=u[1],g=Object(a.useState)(1),x=Object(l.a)(g,2),O=x[0],f=x[1],k=Object(a.useState)("easy"),M=Object(l.a)(k,2),v=M[0],S=M[1],y=Object(a.useState)(!1),E=Object(l.a)(y,2),I=E[0],B=E[1],T=Object(a.useState)(0),P=Object(l.a)(T,2),R=P[0],Z=P[1],J=Object(a.useState)(0),N=Object(l.a)(J,2),G=N[0],Y=N[1],_=Object(a.useState)(!1),C=Object(l.a)(_,2),z=C[0],L=C[1],W=Object(a.useState)(!1),U=Object(l.a)(W,2),H=U[0],Q=U[1],X=Object(a.useState)(!1),F=Object(l.a)(X,2),K=F[0],V=F[1];Object(a.useEffect)((function(){S(function(e,n){var t=Math.floor(n/3);return e<=t?"easy":e<=n-t?"medium":"hard"}(O,Oe)),O===Oe&&B(!0)}),[O]),Object(a.useEffect)((function(){var e=Object(s.a)(b(v,t,o));h(function(e){for(var n,t=Object(s.a)(e),a=t.length;0!==a;){n=Math.floor(Math.random()*a),a--;var i=[t[n],t[a]];t[a]=i[0],t[n]=i[1]}return t}(e))}),[O]),Object(a.useEffect)((function(){R>G&&Y(R),O===Oe&&L(!0)}),[I]);var q=function(e){var n=e.target.id;return function(e,n){return!!n.find((function(n){return n.name===e}))}(n,t)?$(n):ee()},$=function(e){var n,a=t.find((function(n){return n.name===e}));if(!a)throw Error("no card found!?");Z((function(e){return e+function(e){switch(e){case"easy":return 100;case"medium":return 200;case"hard":return 500;default:throw Error("Oops! Something went wrong with getScore()")}}(v)})),i((n=a,t.filter((function(e){return e.name!==n.name})))),d(function(e,n){return[].concat(Object(s.a)(n),[e])}(a,o)),f((function(e){return e+1}))},ee=function(){H&&!1===z||B(!0)};return Object(p.jsxs)(pe,{children:[Object(p.jsx)(A,{setIsDebugMode:V,setIsInvincible:Q,isDebugMode:K,isInvincible:H}),Object(p.jsxs)(ge,{children:[Object(p.jsx)(se,{}),Object(p.jsx)(me,{round:O,score:R,highScore:G,difficulty:v})]}),Object(p.jsxs)(xe,{children:[m.map((function(e){return Object(p.jsx)(w,{handleClick:I?null:q,name:e.name,imgSrc:e.imgSrc},e.name)})),I&&Object(p.jsx)(oe,{correct:o.length,leftOver:t.length,isMaxScore:z,handleNewGame:function(){Z(0),f(0),i(he),d([]),h(fe),B(!1),L(!1)}}),K&&Object(p.jsx)(D,{leftOverCards:t,chosenCards:o})]})]})},Ae=d.a.footer(we||(we=Object(o.a)(["\n  left: 0px;\n  bottom: 0px;\n  background-color: black;\n  width: 100%;\n  height: 5%;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),ve=d.a.a(ke||(ke=Object(o.a)(["\n  display: inline-block;\n  height: 32px;\n  width: 32px;\n  background-image: url(",");\n  background-repeat: no-repeat;\n  filter: invert(100%);\n  margin-left: 20px;\n"])),"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNTE3OEEyQTk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNTE3OEEyQjk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTI4OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTI5OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+m4QGuQAAAyRJREFUeNrEl21ojWEYx895TDPbMNlBK46IUiNmPvHBSUjaqc0H8pF5+aDUKPEBqU2NhRQpX5Rv5jWlDIWlMCv7MMSWsWwmb3tpXub4XXWdPHvc9/Gc41nu+nedc7/8r/99PffLdYdDPsvkwsgkTBwsA/PADJCnzX2gHTwBt8Hl7p537/3whn04XoDZDcpBlk+9P8AFcAghzRkJwPF4zGGw0Y9QS0mAM2AnQj77FqCzrtcwB1Hk81SYojHK4DyGuQ6mhIIrBWB9Xm7ug/6B/nZrBHBegrkFxoVGpnwBMSLR9EcEcC4qb8pP14BWcBcUgewMnF3T34VqhWMFkThLJAalwnENOAKiHpJq1FZgI2AT6HZtuxZwR9GidSHtI30jOrbawxlVX78/AbNfhHlomEUJJI89O2MqeE79T8/nk8nMBm/dK576hZgmA3cp/R4l9/UeSxiHLVIlNm4nFfT0bxyuIj7LHRTKai+zdJobwMKzcZSJb0ePV5PKN+BqAAKE47UlMnERELMM3EdYP/yrd+XYb2mOiYBiQ8OQnoRBlXrl9JZix7D1pHTazu4MoyBcnYamqAjIMTR8G4FT8LuhLsexXYYjICBiqhQBvYb6fLZIJCjPypVvaOoVAW2WcasCnL2Nq82xHJNSqlCeFcDshaPK0twkAhosjZL31QYw+1rlMpWGMArl23SBsZZO58F2tlJXmjOXS+s4WGvpMiBJT/I2PInZ6lIs9/hBsNS1hS6BG0DSqmYEDRlCXQrmy50P1oDRKTSegmNbUsA0zDMwRhPJXeCE3vWLPQMvan6X8AgIa1vcR4AkGZkDR4ejJ1UHpsaVI0g2LInpOsNFUud1rhxSV+fzC9Woz2EZkWQuja7/B+jUrgtIMpy9YCW4n4K41YfzRneW5E1KJTe4B2Zq1Q5EHEtj4U3AfEzR5SVY4l7QYQPJdN2as7RKBF0BPZqqH4VgMAMBL8Byxr7y8zCZiDlnOcEKIPmUpgB5Z2ww5RdOiiRiNajUmWda5IG6WbhsyY2fx6m8gLcoJDJFkH219M3We1+cnda93pfycZpIJEL/s/wSYADmOAwAQgdpBAAAAABJRU5ErkJggg==");var Se,ye,Ee,Ie=function(){return Object(p.jsxs)(Ae,{children:[Object(p.jsx)("span",{children:"Made by Lance Dang"}),Object(p.jsx)(ve,{href:"https://github.com/lancedang64/project_NAME"})]})},Be=d.a.header(Se||(Se=Object(o.a)(["\n  background-color: #f4dd03;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),Te=d.a.img(ye||(ye=Object(o.a)(["\n  height: 100px;\n"]))),De=d.a.h1(Ee||(Ee=Object(o.a)(["\n  font-weight: bold;\n  font-size: 36px;\n  margin-bottom: 10px;\n  background-color: #db0917;\n  color: white;\n  padding: 5px;\n  display: inline-block;\n"])));var Pe,Re=function(){return Object(p.jsxs)(Be,{children:[Object(p.jsx)(Te,{src:ee,alt:"My Hero Academia Logo"}),Object(p.jsx)(De,{children:"Memory Card Game"})]})},Ze=d.a.div(Pe||(Pe=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: space-between;\n  align-items: center;\n"])));var Je=function(){return Object(p.jsxs)(Ze,{className:"App",children:[Object(p.jsx)(Re,{}),Object(p.jsx)(Me,{}),Object(p.jsx)(Ie,{})]})};r.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(Je,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.dbc262a1.chunk.js.map