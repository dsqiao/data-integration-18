(this["webpackJsonphello-react"]=this["webpackJsonphello-react"]||[]).push([[0],{279:function(e,t,i){},280:function(e,t,i){},293:function(e,t,i){"use strict";i.r(t);var n=i(3),a=i.n(n),c=i(51),o=i.n(c),l=(i(279),i(264)),s=i(296),r=i(297),d=i(131),u=i(38),j=(i(280),i(118)),p=i(24),h=s.a.Sider,m=s.a.Content,b=[{type:"\u5206\u7c7b\u4e00",value:27},{type:"\u5206\u7c7b\u4e8c",value:25},{type:"\u5206\u7c7b\u4e09",value:18},{type:"\u5206\u7c7b\u56db",value:15},{type:"\u5206\u7c7b\u4e94",value:10},{type:"\u5176\u4ed6",value:5}];var x=function(){return Object(n.useEffect)((function(){new j.Pie("container",{appendPadding:10,data:b,angleField:"value",colorField:"type",radius:1,innerRadius:.64,meta:{value:{formatter:function(e){return"\xa5 ".concat(e)}}},label:{type:"inner",offset:"-50%",autoRotate:!1,style:{textAlign:"center"},formatter:function(e){var t=e.percent;return"".concat((100*t).toFixed(0),"%")}},statistic:{title:{offsetY:-8},content:{offsetY:-4}},interactions:[{type:"element-selected"},{type:"element-active"},{type:"pie-statistic-active",cfg:{start:[{trigger:"element:mouseenter",action:"pie-statistic:change"},{trigger:"legend-item:mouseenter",action:"pie-statistic:change"}],end:[{trigger:"element:mouseleave",action:"pie-statistic:reset"},{trigger:"legend-item:mouseleave",action:"pie-statistic:reset"}]}}]}).render()}),[]),Object(p.jsxs)(s.a,{children:[Object(p.jsx)(h,{theme:"light",width:"250px"}),Object(p.jsx)(m,{children:Object(p.jsx)("div",{id:"container",style:{width:"80%",marginLeft:"10%",marginTop:"160px"}})})]})},f=s.a.Sider,y=s.a.Content;var g=function(){return Object(n.useEffect)((function(){fetch("https://dsqiao.github.io/data-integration/data/sales.json").then((function(e){return e.json()})).then((function(e){new j.Column("container",{data:e,isGroup:!0,xField:"category_id",yField:"value",seriesField:"item_id",minColumnWidth:1,columnStyle:{fill:"#722ED1"},legend:!1,label:{position:"top",layout:[{type:"interval-adjust-position"},{type:"interval-hide-overlap"},{type:"adjust-color"}]},xAxis:{label:{autoRotate:!1},title:{text:"category_id"}},yAxis:{title:{text:"\u9500\u91cf"}},slider:{start:0,end:.04,formatter:function(){return""}}}).render()}))}),[]),Object(n.useEffect)((function(){fetch("https://dsqiao.github.io/data-integration/data/buy_time.json").then((function(e){return e.json()})).then((function(e){new j.Column("buy-time-container",{data:e,xField:"time",yField:"value",label:{position:"top",style:{fill:"#000",opacity:.6},layout:[{type:"interval-adjust-position"},{type:"interval-hide-overlap"}]},maxColumnWidth:8,columnStyle:{fill:"#722ED1"},xAxis:{label:{autoHide:!0,autoRotate:!1},title:{text:"\u65f6\u95f4"}},yAxis:{title:{text:"\u8ba2\u5355\u91cf"}},meta:{time:{alias:"\u65f6\u95f4"},value:{alias:"\u8ba2\u5355\u91cf"}}}).render()}))}),[]),Object(p.jsxs)(s.a,{children:[Object(p.jsx)(f,{theme:"light",width:"250px"}),Object(p.jsxs)(y,{style:{padding:"100px 0px"},children:[Object(p.jsx)("div",{id:"container",style:{width:"70%",marginLeft:"15%",marginTop:"160px"}}),Object(p.jsx)("div",{id:"buy-time-container",style:{width:"70%",marginLeft:"16%",marginTop:"160px"}})]})]})},v=s.a.Header;var O=function(){var e=Object(n.useState)("1"),t=Object(l.a)(e,2),i=t[0],a=t[1];return Object(p.jsx)("div",{className:"App",children:Object(p.jsxs)(s.a,{style:{backgroundColor:"#000"},children:[Object(p.jsxs)(v,{children:[Object(p.jsx)("div",{className:"title",children:"\u7b2c20\u7ec4\u6210\u679c\u5c55\u793a"}),Object(p.jsxs)(r.a,{className:"menu",onClick:function(e){a(e.key)},mode:"horizontal",selectedKeys:[i],children:[Object(p.jsx)(r.a.Item,{children:Object(p.jsx)(d.b,{to:"/table",children:"\u6570\u636e\u8868\u90e8\u5206"})},"1"),Object(p.jsx)(r.a.Item,{children:Object(p.jsx)(d.b,{to:"/flow",children:"\u6d41\u6570\u636e\u90e8\u5206"})},"2")]})]}),Object(p.jsxs)(u.c,{children:[Object(p.jsx)(u.a,{path:"/table",component:g}),Object(p.jsx)(u.a,{path:"/flow",component:x}),Object(p.jsx)(u.a,{path:"/",component:g})]})]})})},w=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,298)).then((function(t){var i=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;i(e),n(e),a(e),c(e),o(e)}))};o.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(d.a,{children:Object(p.jsx)(O,{})})}),document.getElementById("root")),w()}},[[293,1,2]]]);
//# sourceMappingURL=main.d3a63f68.chunk.js.map