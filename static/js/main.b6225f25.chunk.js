(this["webpackJsonpnba-stats-app"]=this["webpackJsonpnba-stats-app"]||[]).push([[0],{369:function(e,t,a){},387:function(e,t,a){},388:function(e,t,a){},394:function(e,t,a){},396:function(e,t,a){},455:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),r=a(15),c=a.n(r),l=(a(369),a(16)),o=a.n(l),i=a(31),u=a(75),d=a(311),b=a(139),j=a.n(b);var p=function(e,t){var a={Points:0,Assists:0,Rebounds:0,Steals:0,Blocks:0,TOs:0,FGM:0,FGA:0,FTM:0,FTA:0,Total:0};return a.Points=(e.points*t.pts).toFixed(2),a.Rebounds=(e.rebounds*t.reb).toFixed(2),a.Assists=(e.assists*t.ast).toFixed(2),a.Steals=(e.steals*t.stl).toFixed(2),a.Blocks=(e.blocks*t.blk).toFixed(2),a.TOs=(e.TOs*t.turnover).toFixed(2),a.FGM=(e.FGM*t.fgm).toFixed(2),a.FGA=(e.FGA*t.fga).toFixed(2),a.FTA=(e.FTA*t.fta).toFixed(2),a.FTM=(e.FTM*t.ftm).toFixed(2),a.Total=(+a.Points+ +a.Rebounds+ +a.Assists+ +a.Steals+ +a.Blocks+ +a.TOs+ +a.FGA+ +a.FGM+ +a.FTA+ +a.FTM).toFixed(2),a},f=a(29),m=(a(387),new(a(233).default)("myDb"));m.version(2).stores({fantasyPoints:"name, Points, Assists, Rebounds, Steals, Blocks, TOs, FGM, FGA, FTM, FTA, TPM, TPA",roster:"name, Points, Assists, Rebounds, Steals, Blocks, TOs, FGM, FGA, FTM, FTA, TPM, TPA, Total"});var x=m,h=(a(388),a(6)),O=function(){return Object(h.jsxs)("div",{className:"nav",children:[Object(h.jsx)("div",{className:"navbarText",children:Object(h.jsx)("strong",{children:"NBA Stats App"})}),Object(h.jsxs)("ul",{className:"navbarLinks",children:[Object(h.jsxs)("li",{className:"link",children:[" ",Object(h.jsx)("a",{className:"navbarText",href:"../",children:" Search a Player "})]}),Object(h.jsxs)("li",{className:"link",children:[" ",Object(h.jsx)("a",{className:"navbarText",href:"/nba-stats-app/roster",children:" My Roster "})]})]})]})},v=function(){var e=Object(s.useState)(null),t=Object(u.a)(e,2),a=t[0],n=t[1],r=Object(s.useState)({}),c=Object(u.a)(r,2),l=c[0],b=c[1],m=Object(s.useState)({}),v=Object(u.a)(m,2),g=v[0],y=v[1],F=Object(s.useState)(!0),P=Object(u.a)(F,2),T=P[0],A=P[1],k=function(){var e=Object(i.a)(o.a.mark((function e(t){var a,s,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.fantasyPoints.get("user");case 2:a=e.sent,s={points:a.Points,assists:a.Assists,rebounds:a.Rebounds,steals:a.Steals,blocks:a.Blocks,TOs:a.TOs,FGM:a.FGM,FGA:a.FGA,FTM:a.FTM,FTA:a.FTA},n=p(s,t),y(n),console.log(n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(i.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t),j.a.get("https://www.balldontlie.io/api/v1/players?search=".concat(t.split(" ").join("_"))).then(function(){var e=Object(i.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==t.data.data[0]){e.next=4;break}alert("This player is either injured or hasn't played yet!"),e.next=12;break;case 4:if(!(t.data.data.length>1)){e.next=8;break}alert("Pleases specify the name more!"),e.next=12;break;case 8:return console.log(t.data.data[0]),n(t.data.data[0].first_name+" "+t.data.data[0].last_name),e.next=12,N(t.data.data[0].id);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(i.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:j.a.get("https://www.balldontlie.io/api/v1/season_averages?season=2020&player_ids[]=".concat(t)).then(function(){var e=Object(i.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:b(t.data.data[0]),k(t.data.data[0]);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=Object(f.f)().search;return console.log(M),T&&(console.log("here"),w(M),A(!1)),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(O,{}),Object(h.jsx)("div",{className:"playerName",children:a}),Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("div",{className:"regularStats",children:[Object(h.jsx)("strong",{children:" NBA Stats "}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),"Points: ",l.pts,Object(h.jsx)("br",{}),"Rebounds: ",l.reb,Object(h.jsx)("br",{}),"Assists: ",l.ast,Object(h.jsx)("br",{}),"Steals: ",l.stl,Object(h.jsx)("br",{}),"Blocks: ",l.blk,Object(h.jsx)("br",{}),"Turnovers: ",l.turnover,Object(h.jsx)("br",{}),"Field Goals Made: ",l.fgm,Object(h.jsx)("br",{}),"Field Goals Attempted: ",l.fga,Object(h.jsx)("br",{}),"Free Throws Made: ",l.ftm,Object(h.jsx)("br",{}),"Free Throws Attempted: ",l.fta,Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("strong",{children:" Shooting Percentages"}),Object(h.jsx)("br",{}),"Field Goal Percentage: ",l.fg_pct,Object(h.jsx)("br",{}),"Three Point Field Goal Percentage: ",l.fg3_pct,Object(h.jsx)("br",{}),"Free Throw Percentage: ",l.ft_pct,Object(h.jsx)("br",{})]}),Object(h.jsxs)("div",{className:"regularStats",children:[Object(h.jsx)("strong",{children:" Fantasy Points "}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),"Points: ",g.Points,Object(h.jsx)("br",{}),"Rebounds: ",g.Rebounds,Object(h.jsx)("br",{}),"Assists: ",g.Assists,Object(h.jsx)("br",{}),"Steals: ",g.Steals,Object(h.jsx)("br",{}),"Blocks: ",g.Blocks,Object(h.jsx)("br",{}),"Turnovers: ",g.TOs,Object(h.jsx)("br",{}),"Field Goals Made: ",g.FGM,Object(h.jsx)("br",{}),"Field Goals Attempted: ",g.FGA,Object(h.jsx)("br",{}),"Free Throws Made: ",g.FTM,Object(h.jsx)("br",{}),"Free Throws Attempted: ",g.FTA,Object(h.jsx)("br",{})]})]}),Object(h.jsxs)("div",{className:"totalPoints",children:["Total Fantasy Points: ",g.Total]}),Object(h.jsx)(d.a,{onClick:function(){x.roster.put({name:a,Points:g.Points,Assists:g.Assists,Rebounds:g.Rebounds,Steals:g.Steals,Blocks:g.Blocks,TOs:g.TOs,FGM:g.FGM,FGA:g.FGA,FTM:g.FTM,FTA:g.FTA,TPM:g.TPM,TPA:g.TPA,Total:g.Total})},children:"Add"})]})},g=(a(394),a(312)),y=a.p+"static/media/nbaLogo.fb65b6aa.png",F=a(189),P=a(353),T=a(234),A=a(348),k=a.n(A),w=a(188);var N=function(){var e=Object(s.useState)(""),t=Object(u.a)(e,2),a=t[0],n=t[1],r=Object(s.useState)(!1),c=Object(u.a)(r,2),l=c[0],d=c[1],b=Object(w.useLiveQuery)((function(){return x.fantasyPoints.toArray()}),[]);if(console.log(b),!b)return Object(h.jsx)("div",{});if(l)return Object(h.jsx)(f.a,{push:!0,to:"/stat/".concat(a)});var p=function(){var e=Object(i.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(b),0!==b.length){e.next=4;break}return e.next=4,x.fantasyPoints.add({name:"user"});case 4:console.log(t.target.value),x.fantasyPoints.update("user",{Points:t.target.value});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(i.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(b),0!==b.length){e.next=4;break}return e.next=4,x.fantasyPoints.add({name:"user"});case 4:console.log(t.target.value),x.fantasyPoints.update("user",{Blocks:t.target.value});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(i.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(b),0!==b.length){e.next=4;break}return e.next=4,x.fantasyPoints.add({name:"user"});case 4:console.log(t.target.value),x.fantasyPoints.update("user",{Assists:t.target.value});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(i.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(b),0!==b.length){e.next=4;break}return e.next=4,x.fantasyPoints.add({name:"user"});case 4:console.log(t.target.value),x.fantasyPoints.update("user",{Rebounds:t.target.value});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(i.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(b),0!==b.length){e.next=4;break}return e.next=4,x.fantasyPoints.add({name:"user"});case 4:console.log(t.target.value),x.fantasyPoints.update("user",{Steals:t.target.value});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(i.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(b),0!==b.length){e.next=4;break}return e.next=4,x.fantasyPoints.add({name:"user"});case 4:a=t.target.value<0?t.target.value:-t.target.value,console.log(a),x.fantasyPoints.update("user",{TOs:a});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=Object(i.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(b),0!==b.length){e.next=4;break}return e.next=4,x.fantasyPoints.add({name:"user"});case 4:console.log(t.target.value),x.fantasyPoints.update("user",{FGM:t.target.value});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(i.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(b),0!==b.length){e.next=4;break}return e.next=4,x.fantasyPoints.add({name:"user"});case 4:console.log(t.target.value),x.fantasyPoints.update("user",{FGA:t.target.value});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(i.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(b),0!==b.length){e.next=4;break}return e.next=4,x.fantasyPoints.add({name:"user"});case 4:console.log(t.target.value),x.fantasyPoints.update("user",{FTM:t.target.value});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(i.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(b),0!==b.length){e.next=4;break}return e.next=4,x.fantasyPoints.add({name:"user"});case 4:console.log(t.target.value),x.fantasyPoints.update("user",{FTA:t.target.value});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(i.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(b),0!==b.length){e.next=4;break}return e.next=4,x.fantasyPoints.add({name:"user"});case 4:console.log(t.target.value),x.fantasyPoints.update("user",{TPM:t.target.value});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(i.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(b),0!==b.length){e.next=4;break}return e.next=4,x.fantasyPoints.add({name:"user"});case 4:console.log(t.target.value),x.fantasyPoints.update("user",{TPA:t.target.value});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return console.log(b[0]),Object(h.jsxs)("div",{className:"Home",children:[Object(h.jsx)(O,{}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsxs)("div",{className:"Heading",children:[Object(h.jsxs)("div",{className:"Title",children:[Object(h.jsx)("h1",{id:"NBA",children:"NBA"}),Object(h.jsx)("h1",{id:"STATS",children:"STATS"})]}),Object(h.jsx)("div",{className:"NBALogo",children:Object(h.jsx)("img",{src:y,alt:"text"})})]}),Object(h.jsxs)("div",{className:"Glass",children:[Object(h.jsx)("div",{className:"Searchbar",children:Object(h.jsxs)(F.a,{component:"form",className:"root",onSubmit:function(e){e.preventDefault(),j.a.get("https://www.balldontlie.io/api/v1/players?search=".concat(a.split(" ").join("_"))).then(function(){var e=Object(i.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:void 0===t.data.data[0]?alert("This player is either injured or hasn't played yet!"):t.data.data.length>1?alert("Pleases specify the name more!"):d(!0);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e)}))},children:[Object(h.jsx)(P.a,{className:"input",placeholder:"Search NBA Player",inputProps:{"aria-label":"Search NBA Player"},onChange:function(e){n(e.target.value)}}),Object(h.jsx)(T.a,{type:"submit",className:"iconButton","aria-label":"search",children:Object(h.jsx)(k.a,{})})]})}),Object(h.jsx)("div",{className:"FantasyHeader",children:Object(h.jsx)("h3",{children:"Fantasy Category Values"})}),Object(h.jsxs)("form",{className:"Points",noValidate:!0,autoComplete:"off",children:[Object(h.jsx)("div",{className:"PointsInput",children:Object(h.jsx)(g.a,{defaultValue:b[0]?b[0].Points:null,id:"Points",label:"Points",type:"number",variant:"filled",color:"primary",className:"InputClass",size:"small",onChange:p})}),Object(h.jsx)("div",{className:"PointsInput",children:Object(h.jsx)(g.a,{defaultValue:b[0]?b[0].Assists:null,id:"Assists",label:"Assists",type:"number",variant:"filled",color:"primary",className:"InputClass",size:"small",onChange:v})}),Object(h.jsx)("div",{className:"PointsInput",children:Object(h.jsx)(g.a,{defaultValue:b[0]?b[0].Rebounds:null,id:"Rebounds",label:"Rebounds",type:"number",variant:"filled",color:"primary",className:"InputClass",size:"small",onChange:A})}),Object(h.jsx)("div",{className:"PointsInput",children:Object(h.jsx)(g.a,{defaultValue:b[0]?b[0].Steals:null,id:"Steals",label:"Steals",type:"number",variant:"filled",color:"primary",className:"InputClass",size:"small",onChange:N})}),Object(h.jsx)("div",{className:"PointsInput",children:Object(h.jsx)(g.a,{defaultValue:b[0]?b[0].Blocks:null,id:"Blocks",label:"Blocks",type:"number",variant:"filled",color:"primary",className:"InputClass",size:"small",onChange:m})}),Object(h.jsx)("div",{className:"PointsInput",children:Object(h.jsx)(g.a,{defaultValue:b[0]?b[0].TOs:null,id:"TOs",label:"TOs",type:"number",variant:"filled",color:"primary",className:"InputClass",size:"small",onChange:M})}),Object(h.jsx)("div",{className:"PointsInput",children:Object(h.jsx)(g.a,{defaultValue:b[0]?b[0].FGM:null,id:"FGM",label:"FGM",type:"number",variant:"filled",color:"primary",className:"InputClass",size:"small",onChange:G})}),Object(h.jsx)("div",{className:"PointsInput",children:Object(h.jsx)(g.a,{defaultValue:b[0]?b[0].FGA:null,id:"FGA",label:"FGA",type:"number",variant:"filled",color:"primary",className:"InputClass",size:"small",onChange:S})}),Object(h.jsx)("div",{className:"PointsInput",children:Object(h.jsx)(g.a,{defaultValue:b[0]?b[0].FTM:null,id:"FTM",label:"FTM",type:"number",variant:"filled",color:"primary",className:"InputClass",size:"small",onChange:C})}),Object(h.jsx)("div",{className:"PointsInput",children:Object(h.jsx)(g.a,{defaultValue:b[0]?b[0].FTA:null,id:"FTA",label:"FTA",type:"number",variant:"filled",color:"primary",className:"InputClass",size:"small",onChange:B})}),Object(h.jsx)("div",{className:"PointsInput",children:Object(h.jsx)(g.a,{defaultValue:b[0]?b[0].TPM:null,id:"3PM",label:"3PM",type:"number",variant:"filled",color:"primary",className:"InputClass",size:"small",onChange:I})}),Object(h.jsx)("div",{className:"PointsInput",children:Object(h.jsx)(g.a,{defaultValue:b[0]?b[0].TPA:null,id:"3PA",label:"3PA",type:"number",variant:"filled",color:"primary",className:"InputClass",size:"small",onChange:R})})]})]})]})},M=a(242),G=a(351),S=(a(396),a(238)),C=a.n(S),B=function(){var e=n.a.useState({columns:[{title:"Name",field:"name"},{title:"Total Fantasy Points",field:"Total",type:"numeric"},{title:"Points",field:"Points",type:"numeric"},{title:"Rebounds",field:"Rebounds",type:"numeric"},{title:"Assists",field:"Assists",type:"numeric"},{title:"Steals",field:"Steals",type:"numeric"},{title:"Blocks",field:"Blocks",type:"numeric"},{title:"Turnovers",field:"TOs",type:"numeric"},{title:"Field Goals Made",field:"FGM",type:"numeric"},{title:"Field Goals Attempted",field:"FGA",type:"numeric"},{title:"Free Throws Made",field:"FTM",type:"numeric"},{title:"Free Throws Attempted",field:"FTA",type:"numeric"},{title:"3 Pointers Made",field:"TPM",type:"numeric"},{title:"3 Pointers Attempted",field:"TPA",type:"numeric"}],data:[]}),t=Object(u.a)(e,2),a=t[0],s=t[1],r=Object(w.useLiveQuery)((function(){return x.roster.toArray()}),[]);return r?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(O,{}),Object(h.jsxs)("div",{className:"RosterInfo",children:[Object(h.jsxs)("div",{className:"info",children:[Object(h.jsxs)("strong",{children:["My Roster:",Object(h.jsx)("br",{})]}),'Click the "Search a Player" button to search for a player to add you your roster. Click the trash button to remove the player from your roster.']}),Object(h.jsx)("div",{})]}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)(C.a,{title:"My Roster",options:{paging:!1},localization:{body:{editRow:{deleteText:"Are you sure you want to remove this player from your roster?"}}},columns:a.columns,data:r,editable:{onRowDelete:function(e){return new Promise((function(t){setTimeout((function(){t(),s((function(t){var a=Object(G.a)(t.data);return a.splice(a.indexOf(e),1),Object(M.a)(Object(M.a)({},t),{},{data:a})})),console.log(e.name),x.roster.delete(e.name)}),600)}))}}})]}):Object(h.jsx)("div",{})},I=a(178),R=function(){return Object(h.jsxs)(I.a,{basename:"/nba-stats-app",children:[Object(h.jsx)(f.b,{path:"/",exact:!0,component:N}),Object(h.jsx)(f.b,{path:"/stat/:search",exact:!0,component:v}),Object(h.jsx)(f.b,{path:"/roster",exact:!0,component:B})]})},V=function(e){e&&e instanceof Function&&a.e(6).then(a.bind(null,859)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),s(e),n(e),r(e),c(e)}))};c.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(R,{})}),document.getElementById("root")),V()}},[[455,1,2]]]);
//# sourceMappingURL=main.b6225f25.chunk.js.map