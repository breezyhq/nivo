(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{Kd9P:function(e,t,a){"use strict";a.d(t,"c",(function(){return i})),a.d(t,"b",(function(){return d})),a.d(t,"a",(function(){return s}));var n=a("UutA"),r=a("UmRm");function l(){var e=c(["\n        & {\n            margin: 0 15px 50px;\n        }\n    "]);return l=function(){return e},e}function o(){var e=c(["\n        & {\n            margin: 0 15px 50px;\n        }\n    "]);return o=function(){return e},e}function c(e,t){return t||(t=e.slice(0)),e.raw=t,e}var i=n.d.div.withConfig({displayName:"styled__FullWidthBanner",componentId:"sc-1iih7ob-0"})(["background:",";margin-bottom:40px;padding:20px;"],(function(e){return e.theme.colors.cardBackground})),d=n.d.div.withConfig({displayName:"styled__DescriptionBlock",componentId:"sc-1iih7ob-1"})(["max-width:800px;margin:0 auto 50px;"," ",""],r.a.tablet(o()),r.a.mobile(l())),s=n.d.div.withConfig({displayName:"styled__Card",componentId:"sc-1iih7ob-2"})(["background:",";box-shadow:",";"],(function(e){return e.theme.colors.cardBackground}),(function(e){return e.theme.cardShadow}))},jG0L:function(e,t,a){"use strict";a.r(t);var n=a("mXGw"),r=a.n(n),l=a("NxE3"),o=a("TurY"),c=a("7oih"),i=a("vrFN"),d=a("kIY5"),s=(a("iexB"),a("1c7q"),a("PWxN")),u=a.n(s),m=a("L3zu"),h=[m.h,m.g,m.i,m.f,m.c,m.a,m.b,m.e,m.d],g=[{anchor:m.g,translateX:-160,translateY:-30},{anchor:m.e,translateX:-30,translateY:50},{anchor:m.f,translateX:-30,translateY:-60},{anchor:m.a,translateX:160,translateY:30}],p={containerWidth:740,containerHeight:240,itemWidth:120,itemHeight:16,itemsSpacing:4,direction:"column"},b=function(){var e=Object(o.b)();return r.a.createElement("div",null,r.a.createElement("h2",null,"Legend position"),r.a.createElement("p",null,"The legend can be positioned in your chart area using the ",r.a.createElement("code",null,"anchor")," ","property.",r.a.createElement("br",null),"You have 9 available directives:"),r.a.createElement("svg",{width:p.containerWidth+60,height:p.containerHeight+60,style:{background:e.colors.cardBackground}},r.a.createElement("text",{x:p.containerWidth/2+30,y:15,textAnchor:"middle",style:{alignmentBaseline:"middle",fill:e.colors.textLight,fontSize:"14px"}},"margin"),r.a.createElement("g",{transform:"translate(30,30)"},r.a.createElement("rect",{fill:e.colors.background,width:p.containerWidth,height:p.containerHeight}),h.map((function(t){return r.a.createElement(m.j,Object.assign({},p,{itemTextColor:e.colors.text,key:t,anchor:t,data:[{id:"a",label:t,color:e.colors.accent},{id:"b",label:"...",color:e.colors.accent},{id:"c",label:"...",color:e.colors.accent}]}))})))),r.a.createElement("p",null,"The legend's anchor is relative to the inner chart area (with margin applied), but depending on the chart type, you'll probably want to move it outside of this area.",r.a.createElement("br",null),"That's where ",r.a.createElement("code",null,"translateX")," & ",r.a.createElement("code",null,"translateY")," come into play, allowing to adjust the legend position from its original anchor."),r.a.createElement("svg",{width:p.containerWidth+60,height:p.containerHeight+60,style:{background:e.colors.cardBackground}},r.a.createElement("text",{x:p.containerWidth/2+30,y:15,textAnchor:"middle",style:{alignmentBaseline:"middle",fill:e.colors.textLight,fontSize:"14px"}},"margin"),r.a.createElement("g",{transform:"translate(30,30)"},r.a.createElement("rect",{fill:e.colors.background,width:p.containerWidth,height:p.containerHeight}),g.map((function(t,a){return r.a.createElement(m.j,Object.assign({key:a},p,u()(t,["translateX","translateY"]),{itemTextColor:e.colors.text,data:[{id:t.anchor,label:t.anchor+" (regular)",color:e.colors.text}]}))})),g.map((function(t,a){return r.a.createElement(m.j,Object.assign({key:a},p,t,{itemTextColor:e.colors.text,data:[{id:"a",label:t.anchor+" (translated)",color:e.colors.accent},{id:"b",label:"translateX: "+t.translateX,color:e.colors.accent},{id:"c",label:"translateY: "+t.translateY,color:e.colors.accent}]}))})))))},f={containerWidth:800,containerHeight:90,itemWidth:70,itemHeight:24},E=function(){var e=Object(o.b)();return r.a.createElement("div",null,r.a.createElement("h2",null,"Legend direction"),r.a.createElement("p",null,"Legends support two directions, using the ",r.a.createElement("code",null,"direction")," property,"," ",r.a.createElement("code",null,"column")," or ",r.a.createElement("code",null,"row"),"."),r.a.createElement("svg",{width:f.containerWidth,height:f.containerHeight},r.a.createElement(m.j,Object.assign({},f,{itemTextColor:e.colors.text,anchor:"left",direction:"column",data:[{id:"a",label:"column",color:e.colors.accent},{id:"b",label:"column",color:e.colors.accent},{id:"c",label:"column",color:e.colors.accent}]})),r.a.createElement(m.j,Object.assign({},f,{itemTextColor:e.colors.text,anchor:"left",translateX:260,direction:"row",data:[{id:"a",label:"row",color:e.colors.accent},{id:"b",label:"row",color:e.colors.accent},{id:"c",label:"row",color:e.colors.accent}]}))))},x=[m.l,m.m,m.n,m.k],y=function(){var e=Object(o.b)(),t={x:0,y:0,width:160,height:40,data:{id:"demo",color:e.colors.accent}};return r.a.createElement("div",null,r.a.createElement("h2",null,"Legend item direction"),r.a.createElement("p",null,"The ",r.a.createElement("code",null,"itemDirection")," property defines how symbol and label are positioned.",r.a.createElement("br",null),"You have 4 available directives:"),r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},x.map((function(a){return r.a.createElement("div",{key:a,style:{background:e.colors.cardBackground,padding:"10px 15px",borderRadius:2,display:"flex",boxShadow:"0 1px 3px rgba(0, 0, 0, 0.1)"}},r.a.createElement("svg",{width:t.width,height:t.height},r.a.createElement(m.p,Object.assign({},t,{textColor:e.colors.text,data:Object.assign({},t.data,{label:a}),direction:a}))))}))),r.a.createElement("p",null,"The behavior is slightly different if you set ",r.a.createElement("code",null,"justify")," to"," ",r.a.createElement("code",null,"true")," as the label will be positioned at the opposite of the symbol, filling up the whole width/height of the legend's item."),r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},x.map((function(a){return r.a.createElement("div",{key:a,style:{background:e.colors.cardBackground,padding:"9px 12px",display:"flex",boxShadow:"0 1px 2px rgba(0, 0, 0, 0.1)"}},r.a.createElement("svg",{key:a,width:t.width,height:t.height},r.a.createElement(m.p,Object.assign({},t,{textColor:e.colors.text,data:Object.assign({},t.data,{label:a}),direction:a,justify:!0}))))}))))},v=a("mBwQ"),w=["square","circle","triangle","diamond"],k="\nconst CustomSymbolShape = ({\n    x, y, size, fill, borderWidth, borderColor\n}) => (\n    <rect\n        x={x}\n        y={y}\n        transform={`rotate(45 ${size/2} ${size/2})`}\n        fill={fill}\n        strokeWidth={borderWidth}\n        stroke={borderColor}\n        width={size}\n        height={size}\n        style={{ pointerEvents: 'none' }}\n    />\n)\n".trim(),j=function(){var e=Object(o.b)(),t={x:0,y:0,width:160,height:40,data:{id:"demo",color:e.colors.accent}};return r.a.createElement("div",null,r.a.createElement("h2",null,"Symbol shape"),r.a.createElement("p",null,"You can customize symbols using ",r.a.createElement("code",null,"symbolShape")," property."),r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},w.map((function(a){return r.a.createElement("div",{key:a,style:{background:e.colors.cardBackground,padding:"10px 15px",borderRadius:2,display:"flex",boxShadow:"0 1px 3px rgba(0, 0, 0, 0.1)"}},r.a.createElement("svg",{width:t.width,height:t.height},r.a.createElement(m.p,Object.assign({},t,{textColor:e.colors.text,data:Object.assign({},t.data,{label:a}),direction:m.l,symbolShape:a}))))}))),r.a.createElement("p",null,"You can also use a custom shape passing a component to ",r.a.createElement("code",null,"symbolShape"),":"),r.a.createElement(v.a,{code:k,language:"jsx"}))},C=a("Kd9P");t.default=function(){var e=Object(o.b)();return r.a.createElement(c.a,null,r.a.createElement(l.kb.Provider,{value:e.nivo},r.a.createElement(i.a,{title:"Legends Guide"}),r.a.createElement(d.a,null,r.a.createElement("div",{className:"guide__header"},r.a.createElement("h1",null,"Legends"))),r.a.createElement(C.b,null,r.a.createElement("p",null,"Let's see how to add legends to your charts."),r.a.createElement("p",null,"Legend components are available via the ",r.a.createElement("code",null,"@nivo/legends")," package, however it's added as a dependency for most chart packages supporting them, in most cases you won't have to add it as a direct dependency."),r.a.createElement(b,null),r.a.createElement(E,null),r.a.createElement(y,null),r.a.createElement(j,null))))}},kIY5:function(e,t,a){"use strict";var n=a("UutA"),r=a("UmRm");function l(){var e=c(["\n        & {\n            margin: 0 15px;\n        }\n    "]);return l=function(){return e},e}function o(){var e=c(["\n        & {\n            margin: 0 30px;\n        }\n    "]);return o=function(){return e},e}function c(e,t){return t||(t=e.slice(0)),e.raw=t,e}t.a=n.d.div.withConfig({displayName:"PageContent",componentId:"xla6zc-0"})(["margin:0 50px;position:relative;"," ",""],r.a.tablet(o()),r.a.mobile(l()))}}]);
//# sourceMappingURL=component---src-pages-guides-legends-js-7c8a470b3a154b25b239.js.map