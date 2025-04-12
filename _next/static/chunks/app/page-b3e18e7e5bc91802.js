(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{5554:function(e,t,a){Promise.resolve().then(a.bind(a,3423))},3423:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return eV}});var n=a(7437),r=a(2265),s=a(8575),o=a(2239),l=a(1455);let c=(0,l.oM)({name:"authentication",initialState:null,reducers:{}}),i=e=>e.authentication.accessToken,d=e=>!!i(e);var u=c.reducer;let h=()=>{let e=(0,o.c)({client_id:"398759449450-vg8cjqnd5om8td4krs398f805k2em8uj.apps.googleusercontent.com",redirect_uri:"https://doehyunbaek.github.io/google-calendar-hours/",scope:"https://www.googleapis.com/auth/calendar.readonly https://www.googleapis.com/auth/calendar.events.readonly",response_type:"token"});return"https://accounts.google.com/o/oauth2/auth?".concat(e)};var p=()=>(0,n.jsxs)(r.Fragment,{children:[(0,n.jsx)("p",{children:"This web app lets you see how many hours you spend on a Google Calendar. It uses the Google Calendar API to fetch your calendars and events, crunches the data and displays it nicely. You can filter by day, week, month, year, total or add a custom time range."}),(0,n.jsx)("p",{children:"You need to authorize the app with the following link:"}),(0,n.jsx)("a",{href:h(),"data-testid":"AuthLink",children:(0,n.jsx)("img",{src:"./google_auth.png",alt:"Auth with Google",width:"191",height:"46"})}),(0,n.jsx)("h3",{children:"Privacy Policy"}),(0,n.jsx)("p",{children:"This app connects to the Google Calendar API to fetch your calendars and events, so that it can calculate the hours. This connection happens directly from your browser to the Google API. There are no server or services involved that might cache the data."}),(0,n.jsx)("p",{children:"None of the data fetched from the Google Calendar API is saved elsewhere but in your browser. After you close the browser window/tab all authentication data is delete (technical detail: sessionStorage is used). Thats why you need to reauthorize with Google the next time you visit the page."}),(0,n.jsx)("p",{children:"This app only has read-only access to your calendar data."})]}),m=a(1096),v=a.n(m);let y="https://www.googleapis.com/calendar/v3/",g=async e=>{let{url:t,accessToken:a,params:n}=e,r=await fetch("".concat(t,"?").concat((0,o.c)({access_token:a,...n})));return 200!==r.status?(sessionStorage.removeItem("accessToken"),window.location="/",Promise.reject()):r.json()},x=e=>{let{accessToken:t}=e;return g({url:"".concat(y,"users/me/calendarList"),accessToken:t})},w=async e=>{let{accessToken:t,calendarId:a,pageToken:n,acc:r}=e,{items:s,nextPageToken:o}=await g({url:"".concat(y,"calendars/").concat(encodeURIComponent(a),"/events"),accessToken:t,params:{singleEvents:!0,maxResults:2500,pageToken:n,timeMax:v()().add(2,"year").toJSON()}});return o?w({accessToken:t,calendarId:a,pageToken:o,acc:[...r,...s]}):[...r,...s]},j=e=>{let{accessToken:t,calendarId:a}=e;return w({accessToken:t,calendarId:a,acc:[]})};var _=a(2713);a(774);let f=(0,l.oM)({name:"calendarEvents",initialState:{loading:!1,map:{}},reducers:{setCalendarEvents:(e,t)=>{let{payload:a}=t;e.map[a.calendarId]=a.events},setLoading:(e,t)=>{let{payload:a}=t;e.loading=a}}}),{setCalendarEvents:b,setLoading:S}=f.actions,k=e=>{let{calendarId:t}=e;return async(e,a)=>{let n=i(a());try{e(S(!0));let a=await j({accessToken:n,calendarId:t});e(b({calendarId:t,events:a.map(e=>{let{id:t,summary:a,start:n,end:r}=e;return n.dateTime?{id:t,summary:a,start:n.dateTime,end:r.dateTime}:null}).filter(Boolean)}))}catch(e){}finally{e(S(!1))}}},N=e=>{var t,a;return null!==(a=null===(t=e.calendarEvents)||void 0===t?void 0:t.loading)&&void 0!==a&&a},D=(e,t)=>{var a,n;return null!==(n=!N(e)&&(null===(a=e.calendarEvents)||void 0===a?void 0:a.map[t]))&&void 0!==n?n:null};var T=f.reducer;let E=e=>{let t;try{t=JSON.parse(window.localStorage.getItem("config"))}catch(e){}let a={...t,...e};window.localStorage.setItem("config",JSON.stringify(a))},C=()=>{try{return JSON.parse(window.localStorage.getItem("config"))}catch(e){}return null},O={DAY:"day",WEEK:"week",MONTH:"month",YEAR:"year",TOTAL:"total",CUSTOM:"custom"},I="date",Y="amount",M={MONDAY:"monday",SUNDAY:"sunday"};var A=e=>Math.round(100*e)/100;let L=(0,l.oM)({name:"viewState",initialState:null,reducers:{setSelectedCalendarId:(e,t)=>{let{payload:a}=t;e.selectedCalendarId=a},setRangeType:(e,t)=>{let{payload:a}=t;e.selectedRangeType=a},changeRange:(e,t)=>{let{payload:a}=t;"prev"===a?e.currentDatePointerStart=v()(e.currentDatePointerStart).subtract(1,e.selectedRangeType).toJSON():"next"===a&&(e.currentDatePointerStart=v()(e.currentDatePointerStart).add(1,e.selectedRangeType).toJSON())},resetRange:e=>{e.currentDatePointerStart=v()().startOf("day").toJSON()},setWeekStart:(e,t)=>{let{payload:a}=t;e.weekStart=a},setStart:(e,t)=>{let{payload:a}=t;e.currentDatePointerStart=a},setEnd:(e,t)=>{let{payload:a}=t;e.currentDatePointerEnd=a}}}),{changeRange:R,resetRange:P}=L.actions,{setSelectedCalendarId:J,setRangeType:H,setWeekStart:B,setStart:F,setEnd:W}=L.actions,U=e=>e.viewState.selectedCalendarId,G=e=>e.viewState.currentDatePointerStart,Z=e=>e.viewState.selectedRangeType,q=e=>e.viewState.weekStart,K=e=>e.viewState.weekStart===M.SUNDAY?"en":"de",z=(0,_.P1)([e=>e],e=>{let t,a;let{selectedRangeType:n,currentDatePointerStart:r,currentDatePointerEnd:s}=e.viewState,o=v()(r);return n===O.CUSTOM?{start:v()(r),end:v()(s).add(1,"day")}:(n===O.DAY?a=(t=o.startOf("day")).add(1,"day"):n===O.WEEK?a=(t=o.locale(K(e)).startOf("day").weekday(0)).add(1,"week"):n===O.MONTH?a=(t=o.startOf("month")).add(1,"month"):n===O.YEAR?a=(t=o.startOf("year")).add(1,"year"):n===O.TOTAL&&(t=v()("2000-01-01T10:00:00Z"),a=v()("2040-01-01T10:00:00Z")),{start:t,end:a})}),V=(0,_.P1)([e=>e],e=>{let t=D(e,U(e));if(!t)return null;let{start:a,end:n}=z(e);return t.filter(e=>{let{start:t,end:r}=e;return!(new Date(r)<a||new Date(t)>n)}).map(e=>{let{start:t,end:r,...s}=e;return{...s,start:new Date(t)<a?a.toJSON():t,end:new Date(r)>n?n.toJSON():r}})}),X=e=>{let t=V(e);if(!t)return null;let a=0;return t.forEach(e=>{let{start:t,end:n}=e;a+=(new Date(n)-new Date(t))/1e3/60/60}),A(a)},Q=e=>{var t;return(null===(t=V(e))||void 0===t?void 0:t.length)||0},$=e=>{let{calendarId:t}=e;return(e,a)=>{e(J(t)),E({selectedCalendarId:t}),D(a(),t)||e(k({calendarId:t}))}},ee=e=>{let{range:t}=e;return(e,a)=>{if(t===O.CUSTOM){let{start:t,end:n}=z(a()),r=n.subtract(1,"day");e(F(t.toJSON())),e(W(r.toJSON())),E({start:t.toJSON(),end:r.toJSON()})}e(H(t)),E({selectedRangeType:t})}},et=e=>t=>{t(B(e)),E({weekStart:e})},ea=e=>t=>{t(F(e)),E({start:e})},en=e=>t=>{t(W(e)),E({end:e})};var er=L.reducer;let es=(0,l.oM)({name:"calendars",initialState:{list:null},reducers:{setCalendars:(e,t)=>{let{payload:a}=t;e.list=a}}}),{setCalendars:eo}=es.actions,el=()=>async(e,t)=>{let a=i(t());try{var n;let{items:t}=await x({accessToken:a}),r=t.map(e=>{let{id:t,summary:a}=e;return{id:t,label:a}});e(eo(r));let{selectedCalendarId:s}=null!==(n=C())&&void 0!==n?n:{};if(s){let t=null==r?void 0:r.find(e=>{let{id:t}=e;return t===s});e(t?$({calendarId:s}):$({calendarId:null}))}}catch(e){}},ec=e=>e.calendars.list;var ei=es.reducer,ed=()=>{let e=(0,s.I0)(),t=(0,s.v9)(ec),a=(0,s.v9)(U);return(0,n.jsxs)("select",{"data-testid":"CalendarsList",className:"form-select",onChange:t=>{e($({calendarId:t.target.value}))},value:null!=a?a:"",children:[!a&&(0,n.jsx)("option",{children:"Please select calendar"},"default"),t.map(e=>{let{id:t,label:a}=e;return(0,n.jsx)("option",{value:t,children:a},t)})]})},eu=()=>{let e=(0,s.I0)(),t=(0,s.v9)(Z);return(0,n.jsxs)("select",{"data-testid":"RangeSelectList",className:"form-select",onChange:t=>e(ee({range:t.target.value})),value:t,children:[(0,n.jsx)("option",{value:"day",children:"Day"}),(0,n.jsx)("option",{value:"week",children:"Week"}),(0,n.jsx)("option",{value:"month",children:"Month"}),(0,n.jsx)("option",{value:"year",children:"Year"}),(0,n.jsx)("option",{value:"total",children:"Total"}),(0,n.jsx)("option",{value:"custom",children:"Custom"})]})},eh=a(6760),ep=a.n(eh),em=()=>{let e=(0,s.I0)();return(0,n.jsxs)("div",{"data-testid":"RangeChanger",className:"btn-group",role:"group",children:[(0,n.jsx)("button",{type:"button",className:ep()("btn","btn-outline-secondary"),onClick:()=>e(R("prev")),children:"Prev"}),(0,n.jsx)("button",{type:"button",className:ep()("btn","btn-outline-secondary"),onClick:()=>e(P()),children:"Reset"}),(0,n.jsx)("button",{type:"button",className:ep()("btn","btn-outline-secondary"),onClick:()=>e(R("next")),children:"Next"})]})},ev=a(5304),ey=a.n(ev),eg=()=>{let e=(0,s.I0)(),{start:t,end:a}=(0,s.v9)(z);return(0,n.jsxs)("div",{className:ep()(ey().component,"input-group","input-group-sm"),"data-testid":"CustomRange",children:[(0,n.jsx)("label",{htmlFor:"dateStart",className:"input-group-text",children:"Start:"}),(0,n.jsx)("input",{className:ep()("form-control",ey().inputDate),type:"date",id:"dateStart",value:v()(t).format("YYYY-MM-DD"),onChange:t=>{let{target:a}=t;return e(ea(v()(a.value).toJSON()))}}),(0,n.jsx)("label",{htmlFor:"dateEnd",className:"input-group-text",children:"End:"}),(0,n.jsx)("input",{className:ep()("form-control",ey().inputDate),type:"date",id:"dateEnd",value:v()(a).subtract(1,"day").format("YYYY-MM-DD"),onChange:t=>{let{target:a}=t;return e(en(v()(a.value).toJSON()))}})]})},ex=a(6664),ew=a.n(ex),ej=()=>(0,n.jsx)("div",{className:ew().hours,children:"".concat((0,s.v9)(X),"h")}),e_=(e,t)=>new Intl.DateTimeFormat([navigator.language,"en-US"],t).format(e),ef=()=>{let e;let t=(0,s.v9)(G),a=(0,s.v9)(Z),r=(0,s.v9)(K),o=v()(t);if(a===O.DAY)e=e_(v()(o),{weekday:"long",day:"numeric",month:"long",year:"numeric"});else if(a===O.WEEK){let t=o.locale(r).weekday(0),a=e_(t,{day:"numeric",month:"numeric",year:"numeric"}),n=e_(t.add(1,"week").subtract(1,"day"),{day:"numeric",month:"numeric",year:"numeric"});e="".concat(a," - ").concat(n)}else a===O.MONTH?e=e_(o,{month:"long",year:"numeric"}):a===O.YEAR&&(e=e_(o,{year:"numeric"}));return(0,n.jsx)("div",{"data-testid":"RangeDisplay",children:e})},eb=a(5524),eS=a.n(eb),ek=e=>{let t=new Blob(["\uFEFF"+e],{type:"text/csv;charset=UTF-8"});return window.URL.createObjectURL(t)},eN=a(1546),eD=a.n(eN);v().extend(eS());let eT=(e,t)=>{let{hours:a}=e,{hours:n}=t;return a>n?-1:a<n?1:0},eE=(e,t)=>{let{start:a}=e,{start:n}=t;return a<n?-1:a>n?1:0},eC=async e=>{try{await navigator.clipboard.writeText(e)}catch(e){}},eO=e=>v()(e).format("DD.MM.YYYY HH:mm");var eI=()=>{var e;let t,a;let[o,l]=(0,r.useState)(I),c=(0,s.v9)(U),i=(0,s.v9)(V),d=(0,s.v9)(ec),u=(0,s.v9)(G),h=null===(e=d.find(e=>e.id===c))||void 0===e?void 0:e.label,p="dark",m=i.sort(eE).map((e,t,a)=>{var n,r;return v()(e.start).isoWeek()!==((null==a?void 0:null===(n=a[t-1])||void 0===n?void 0:n.start)&&v()(null==a?void 0:null===(r=a[t-1])||void 0===r?void 0:r.start).isoWeek())&&(p="dark"===p?"light":"dark"),{...e,hours:(new Date(e.end)-new Date(e.start))/1e3/60/60,background:p}});return o===Y?m=Object.entries(m.reduce((e,t)=>{let{summary:a,hours:n}=t;return e[a]=e[a]?e[a]+=n:n,e},{})).map(e=>{let[t,a]=e;return{summary:t,hours:a,id:t}}).sort(eT):(t=ek(["Start,End,Title,Hours"].concat(m.map(e=>{let{start:t,end:a,summary:n,hours:r}=e;return"".concat(eO(t),",").concat(eO(a),',"').concat(n,'",').concat(A(r))})).join("\n")),a="".concat(h,"_").concat(v()(u).locale("en").format("MMMM_YYYY"),"_(").concat(v()().format("YYYYMMDDHHmmss"),").csv")),(0,n.jsxs)("div",{children:[(0,n.jsx)("ul",{className:eD().list,children:m.map(e=>{let{id:t,start:a,end:r,summary:s,hours:l,background:c}=e;return(0,n.jsxs)("li",{className:ep()(eD().listItem,{[eD().listItemLight]:"light"===c,[eD().listItemDark]:"dark"===c}),children:[o===I&&(0,n.jsx)("span",{className:eD().eventDate,title:"".concat(e_(v()(a),{day:"2-digit",month:"2-digit",year:"numeric"}),", ").concat(e_(v()(a),{minute:"2-digit",hour:"2-digit"})," - ").concat(e_(v()(r),{minute:"2-digit",hour:"2-digit"})),children:e_(v()(a),{day:"2-digit",month:"2-digit"})}),(0,n.jsx)("span",{className:eD().eventName,title:s,children:s}),(0,n.jsx)("button",{type:"button",className:eD().copyButton,onClick:()=>eC(s),"aria-label":"Copy",children:(0,n.jsxs)("svg",{className:eD().copyIcon,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,n.jsx)("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),(0,n.jsx)("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]})}),(0,n.jsx)("span",{className:eD().eventHours,children:"".concat(A(l),"h")})]},t)})}),(0,n.jsxs)("div",{children:[(0,n.jsx)("span",{className:eD().sortByLabel,children:"Sort by:"}),(0,n.jsxs)("div",{className:ep()("btn-group","btn-group-sm"),role:"group",children:[(0,n.jsx)("input",{className:"btn-check",type:"radio",value:"date",id:"date",checked:o===I,onChange:e=>{let{target:t}=e;return l(t.value)}}),(0,n.jsx)("label",{className:ep()("btn","btn-outline-secondary"),htmlFor:"date",children:"Date"}),(0,n.jsx)("input",{className:"btn-check",type:"radio",value:"amount",id:"amount",checked:o===Y,onChange:e=>{let{target:t}=e;return l(t.value)}}),(0,n.jsx)("label",{className:ep()("btn","btn-outline-secondary"),htmlFor:"amount",children:"Amount"})]}),t&&(0,n.jsx)("a",{href:t,download:a,className:ep()(eD().downloadLink,"btn","btn-outline-secondary","btn-sm"),children:"Export as CSV"})]})]})},eY=a(5021),eM=a.n(eY),eA=()=>{let e=(0,s.I0)(),t=(0,s.v9)(q);return(0,n.jsxs)("div",{children:[(0,n.jsx)("span",{className:eM().weekStartLabel,children:"Week starts on:"}),(0,n.jsxs)("div",{className:ep()("btn-group","btn-group-sm"),role:"group",children:[(0,n.jsx)("input",{className:"btn-check",type:"radio",value:"sunday",id:"sunday",checked:t===M.SUNDAY,onChange:t=>{let{target:a}=t;return e(et(a.value))}}),(0,n.jsx)("label",{className:ep()("btn","btn-outline-secondary"),htmlFor:"sunday",children:"Sunday"}),(0,n.jsx)("input",{className:"btn-check",type:"radio",value:"monday",id:"monday",checked:t===M.MONDAY,onChange:t=>{let{target:a}=t;return e(et(a.value))}}),(0,n.jsx)("label",{className:ep()("btn","btn-outline-secondary"),htmlFor:"monday",children:"Monday"})]})]})},eL=a(1507),eR=a.n(eL),eP=e=>{let{isEventsOpen:t,setIsEventsOpen:a}=e,r=(0,s.v9)(Q);return(0,n.jsx)("div",{children:(0,n.jsx)("button",{type:"button","data-testid":t?"HideEventsButton":"ShowEventsButton",className:ep()(eR().showDetailsButton,"btn","btn-outline-secondary","btn-sm"),onClick:()=>a(!t),children:t?"hide details of ".concat(r," events"):"show details of ".concat(r," events")})})},eJ=a(8348),eH=a.n(eJ),eB=()=>{let e=(0,s.I0)(),[t,a]=(0,r.useState)(!1),o=(0,s.v9)(ec);(0,r.useEffect)(()=>{o||e(el())});let l=(0,s.v9)(U),c=(0,s.v9)(e=>D(e,l)),i=(0,s.v9)(N),d=(0,s.v9)(Z),u=(0,s.v9)(X);return(0,n.jsxs)("div",{className:eH().interface,children:[o?(0,n.jsx)(ed,{}):(0,n.jsx)("div",{children:"loading"}),i&&"loading",c&&(0,n.jsxs)(r.Fragment,{children:[(0,n.jsx)(eu,{}),d!==O.TOTAL&&d!==O.CUSTOM&&(0,n.jsx)(em,{}),d===O.CUSTOM&&(0,n.jsx)(eg,{}),(0,n.jsx)(ej,{}),d===O.WEEK&&(0,n.jsx)(eA,{}),d!==O.TOTAL&&(0,n.jsx)(ef,{}),!!u&&(0,n.jsx)(eP,{isEventsOpen:t,setIsEventsOpen:a}),!!u&&t&&(0,n.jsx)(eI,{})]})]})},eF=a(8130),eW=a.n(eF),eU=()=>{let e=(0,s.v9)(d),[t,a]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{var e,t,a;let n=(0,o.J)(null!==(a=null===(t=window.location)||void 0===t?void 0:null===(e=t.hash)||void 0===e?void 0:e.slice(1))&&void 0!==a?a:"");n.access_token&&(sessionStorage.setItem("accessToken",n.access_token),window.location="/")},[]),(0,r.useEffect)(()=>{a(!0)},[]),(0,n.jsx)("div",{className:eW().appWrapper,children:(0,n.jsx)("div",{className:eW().app,children:(0,n.jsxs)("div",{className:eW().sticky,children:[(0,n.jsxs)("div",{className:eW().content,children:[(0,n.jsx)("h1",{className:eW().headline,children:"Google Calendar Hours Calculator"}),!t&&!e&&(0,n.jsx)(p,{}),e&&(0,n.jsx)(eB,{})]}),(0,n.jsx)("footer",{className:eW().footer,children:(0,n.jsxs)("p",{children:[(0,n.jsx)("span",{children:"\xa9 2011 - 2025. This app is open source. "}),(0,n.jsx)("a",{href:"https://github.com/aronwoost/google-calendar-hours",target:"_blank",rel:"noreferrer",children:"Check it on GitHub"}),(0,n.jsx)("span",{children:"."})]})})]})})})},eG=a(7292),eZ=a.n(eG);v().extend(eZ());let eq=()=>{try{return sessionStorage.getItem("accessToken")}catch(e){}return null},eK=()=>{var e,t,a;let n=null!==(e=C())&&void 0!==e?e:{};return{selectedRangeType:null!==(t=n.selectedRangeType)&&void 0!==t?t:O.MONTH,currentDatePointerStart:n.selectedRangeType===O.CUSTOM?n.start:v()().startOf("day").toJSON(),currentDatePointerEnd:n.end,weekStart:null!==(a=n.weekStart)&&void 0!==a?a:M.MONDAY}};var ez=()=>(0,l.xC)({reducer:{authentication:u,calendars:ei,viewState:er,calendarEvents:T},preloadedState:{authentication:{accessToken:eq()},viewState:eK()}});function eV(){return(0,n.jsx)(s.zt,{store:ez(),children:(0,n.jsx)(eU,{})})}a(6278),a(3282)},3282:function(){},8130:function(e){e.exports={appWrapper:"App_appWrapper__4ujfq",app:"App_app___XJFW",sticky:"App_sticky__jFcSd",content:"App_content__N51C7",headline:"App_headline__q2cYV",footer:"App_footer__H44bm"}},8348:function(e){e.exports={interface:"Interface_interface__U3bJY"}},5304:function(e){e.exports={component:"CustomRange_component__JTYTq",inputDate:"CustomRange_inputDate__K4yXZ"}},1546:function(e){e.exports={list:"Events_list__2CQgB",listItem:"Events_listItem__tesqm",listItemDark:"Events_listItemDark__BJsyA",listItemLight:"Events_listItemLight__23Kx7",eventDate:"Events_eventDate__7peIM",eventName:"Events_eventName__HsZcZ",copyButton:"Events_copyButton__wTk3T",copyIcon:"Events_copyIcon__3N2B_",eventHours:"Events_eventHours__MqwGH",sortByLabel:"Events_sortByLabel__B3F3n",downloadLink:"Events_downloadLink__LW6Qr"}},6664:function(e){e.exports={hours:"Hours_hours__bZzAy"}},1507:function(e){e.exports={showDetailsButton:"ShowDetailsButton_showDetailsButton__cXVZk"}},5021:function(e){e.exports={weekStartLabel:"WeekStart_weekStartLabel__z4_jD"}}},function(e){e.O(0,[735,231,667,907,971,117,744],function(){return e(e.s=5554)}),_N_E=e.O()}]);