(this.webpackJsonpdictionary=this.webpackJsonpdictionary||[]).push([[0],{100:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(8),s=t.n(r),i=(t(71),t(42)),l=t.n(i),o=t(54),u=t(13),d=t(4),b=t(137),h=t(134),j=t(38),p=t(57),v=t.n(p),f=(t(91),t(92),t(6)),g=function(e){var a=e.meanings,t=e.word,n=e.LightTheme,c=e.category;return Object(f.jsxs)("div",{className:"meanings",children:[a[0]&&t&&"en"===c&&Object(f.jsx)("audio",{style:{backgroundColor:"#fff",borderRadius:10},src:a[0].phonetics[0]&&a[0].phonetics[0].audio,controls:!0,children:"Your browser does not support the audio element."}),""===t?Object(f.jsx)("span",{className:"subTitle",children:"Start by typing a word in search"}):a.map((function(e){return e.meanings.map((function(e){return e.definitions.map((function(e){return Object(f.jsxs)("div",{className:"singleMean",style:{backgroundColor:n?"#3b5360":"white",color:n?"white":"black"},children:[Object(f.jsx)("b",{children:e.definition}),Object(f.jsx)("hr",{style:{backgroundColor:"black",width:"100%"}}),e.example&&Object(f.jsxs)("span",{children:[Object(f.jsx)("b",{children:"Example :"})," ",e.example]}),e.synonyms&&Object(f.jsxs)("span",{children:[Object(f.jsx)("b",{children:"Synonyms :"})," ",e.synonyms.map((function(e){return"".concat(e,", ")}))]})]})}))}))}))]})},m=(t(94),t(60)),O=t(131),x=t(135),y=t(138),k=[{value:"English",label:"en"},{value:"Hindi",label:"hi"},{value:"Spanish",label:"es"},{value:"French",label:"fr"},{value:"Japanese",label:"ja"},{value:"Russian",label:"ru"},{value:"German",label:"de"},{value:"Italian",label:"it"},{value:"Korean",label:"ko"},{value:"Brazilian Portuguese",label:"pt-BR"},{value:"Arabic",label:"ar"},{value:"Turkish",label:"tr"}],w=function(e){var a=e.category,t=e.setCategory,n=e.word,c=e.setWord,r=Object(m.a)({palette:{primary:{main:"#fff"},type:"dark"}});return Object(f.jsxs)("div",{className:"header",children:[Object(f.jsx)("span",{className:"title",children:n||"Dictionary"}),Object(f.jsx)("div",{className:"inputs",children:Object(f.jsxs)(O.a,{theme:r,children:[Object(f.jsx)(x.a,{className:"search",id:"standard-basic",label:"word",variant:"standard",value:n,onChange:function(e){return c(e.target.value)}}),Object(f.jsx)(x.a,{className:"select",id:"standard-select-currency",select:!0,label:"Language",value:a,onChange:function(e){return a=e.target.value,t(a),void c("");var a},children:k.map((function(e){return Object(f.jsx)(y.a,{value:e.label,children:e.value},e.label)}))})]})})]})};var C=function(){var e=Object(n.useState)(""),a=Object(u.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)([]),s=Object(u.a)(r,2),i=s[0],p=s[1],m=Object(n.useState)("en"),O=Object(u.a)(m,2),x=O[0],y=O[1],k=Object(n.useState)(!1),C=Object(u.a)(k,2),N=C[0],S=C[1],T=function(){var e=Object(o.a)(l.a.mark((function e(){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.get("https://api.dictionaryapi.dev/api/v2/entries/".concat(x,"/").concat(t));case 3:a=e.sent,p(a.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();console.log(i),Object(n.useEffect)((function(){T()}),[t,x]);var L=Object(d.a)({switchBase:{color:j.a[50],"&$checked":{color:j.a[900]},"&$checked + $track":{backgroundColor:j.a[500]}},checked:{},track:{}})(b.a);return Object(f.jsx)("div",{className:"App",style:{height:"100vh",backgroundColor:N?"#fff":"#282c34",color:N?"black":"white",transition:"all 0.5s linear"},children:Object(f.jsxs)(h.a,{maxWidth:"md",style:{display:"flex",flexDirection:"column",height:"100vh",justifyContent:"space-evenly"},children:[Object(f.jsxs)("div",{style:{position:"absolute",top:0,right:15,paddingTop:10},children:[Object(f.jsxs)("span",{children:[N?"Dark":"Light"," Mode"]}),Object(f.jsx)(L,{checked:N,onChange:function(){return S(!N)}})]}),Object(f.jsx)(w,{setWord:c,category:x,setCategory:y,word:t,setMeanings:p,LightTheme:N}),i&&Object(f.jsx)(g,{meanings:i,word:t,LightTheme:N,category:x})]})})};s.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(C,{})}),document.getElementById("root"))},71:function(e,a,t){},91:function(e,a,t){},92:function(e,a,t){},94:function(e,a,t){}},[[100,1,2]]]);
//# sourceMappingURL=main.272679f3.chunk.js.map