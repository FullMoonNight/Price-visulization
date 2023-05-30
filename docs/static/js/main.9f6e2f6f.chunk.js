(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{47:function(e,a,t){e.exports=t(78)},78:function(e,a,t){"use strict";t.r(a);var r=t(1),n=t.n(r),l=t(43),o=t.n(l),u=t(15),i=t(71),c=t(18);t(79);c.d.register(c.c,c.i,c.l,c.h,c.j,c.f,c.p);var s,m=function(e){var a=e.data;return n.a.createElement(i.a,{data:a,options:{scales:{x:{type:"logarithmic",position:"left"}}}})},p=t(96),d=t(99),f=t(93),b=function(e){var a=e.paramName,t=e.defaultValue,r=e.range,l=e.step,o=e.onChange,i=e.label,c=r||[0,100],s=Object(u.a)(c,2),m=s[0],b=s[1];return n.a.createElement(p.a,{container:!0,spacing:2},n.a.createElement(p.a,{item:!0,xs:4},n.a.createElement(d.a,{variant:"subtitle2"},i||a)),n.a.createElement(p.a,{item:!0,xs:8},n.a.createElement(f.a,{"aria-label":a,marks:!0,min:m,max:b,step:l,track:!1,defaultValue:t||m,valueLabelDisplay:"auto",onChange:function(e,t){return o(a,t)}})))},g=function(e){var a=e.params,t=e.onChangeParameter;return n.a.createElement(p.a,{container:!0,columnSpacing:2,rowSpacing:4},a.map(function(e,a){return n.a.createElement(p.a,{key:a,item:!0,xl:4,md:6,xs:12},n.a.createElement(b,Object.assign({},e,{onChange:t})))}))},v=t(65),h=t(66).a.h1(s||(s=Object(v.a)(["\n  margin: 10;\n"]))),C=[{paramName:"avgSalary",label:"\u0421\u0440\u0435\u0434\u043d\u044f\u044f \u0437\u0430\u0440\u043f\u043b\u0430\u0442\u0430",range:[0,5e5],defaultValue:5e4,step:1e4},{paramName:"warehouseSpace",label:"\u041f\u043b\u043e\u0449\u0430\u0434\u044c \u0441\u043a\u043b\u0430\u0434\u0430",range:[0,1e3],defaultValue:10,step:50},{paramName:"warehouseSpaceCost",label:"\u0426\u0435\u043d\u0430 \u0437\u0430 \u043c\u0435\u0442\u0440 \u0441\u043a\u043b\u0430\u0434\u0430",range:[0,5e3],defaultValue:0,step:500},{paramName:"distanceFromCity",label:"\u041a\u043e\u044d\u0444\u0444\u0438\u0446\u0438\u0435\u043d\u0442 \u0443\u0434\u0430\u043b\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u043e\u0442 \u0433\u043e\u0440\u043e\u0434\u0430",range:[0,1],defaultValue:.5,step:.05},{paramName:"deliveryCostAvg",label:"\u0421\u0440\u0435\u0434\u043d\u044f\u044f \u0446\u0435\u043d\u0430 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438",range:[0,5e3],defaultValue:1e3,step:100},{paramName:"deliveryPercent",label:"\u041f\u0440\u043e\u0446\u0435\u043d\u0442 \u0437\u0430\u043a\u0430\u0437\u043e\u0432 \u0441 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u043e\u0439",range:[0,1],defaultValue:0,step:.01},{paramName:"productPrice",label:"\u0421\u0440\u0435\u0434\u043d\u044f\u044f \u0440\u044b\u043d\u043e\u0447\u043d\u0430\u044f \u0446\u0435\u043d\u0430 \u0442\u043e\u0432\u0430\u0440\u0430",range:[0,5e5],defaultValue:4e4,step:5e3},{paramName:"acquireSale",label:"\u0421\u043a\u0438\u0434\u043a\u0430 \u043d\u0430 \u0442\u043e\u0432\u0430\u0440 \u0434\u043b\u044f \u043d\u0430\u0441",range:[0,1],defaultValue:.3,step:.01},{paramName:"periodValuableUsage",label:"\u041f\u0435\u0440\u0438\u043e\u0434 \u043f\u043e\u043b\u0435\u0437\u043d\u043e\u0433\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f",range:[0,10],defaultValue:4,step:1},{paramName:"wearTearMulti",label:"\u0421\u0440\u0435\u0434\u043d\u0435\u0435 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u0442\u043e\u0432\u0430\u0440\u0430 \u0443 \u043d\u0430\u0441",range:[0,1],defaultValue:.7,step:.05},{paramName:"stealProbability",label:"\u0412\u0435\u0440\u043e\u044f\u0442\u043d\u043e\u0441\u0442\u044c \u043a\u0440\u0430\u0436\u0438",range:[0,1],defaultValue:.05,step:.01},{paramName:"overheadCosts",label:"\u041f\u0440\u043e\u0446\u0435\u043d\u0442 \u043d\u0430\u043a\u043b\u0430\u0434\u043d\u044b\u0445 \u0440\u0430\u0441\u0445\u043e\u0434\u043e\u0432",range:[0,1],defaultValue:.15,step:.01},{paramName:"prtTestDrive",label:"\u041f\u0440\u043e\u0446\u0435\u043d\u0442 \u043f\u0430\u0440\u0442\u043d\u0435\u0440\u0430\u043c \u0437\u0430 \u0442\u0435\u0441\u0442-\u0434\u0440\u0430\u0439\u0432",range:[0,1],defaultValue:.2,step:.05},{paramName:"conversion",label:"\u041a\u043e\u043d\u0432\u0435\u0440\u0441\u0438\u044f \u043d\u0430 \u043f\u0440\u043e\u0434\u0430\u0436\u0443 \u0441 \u0442\u0435\u0441\u0442-\u0434\u0440\u0430\u0439\u0432\u0430",range:[0,1],defaultValue:.3,step:.05},{paramName:"ourSale",label:"\u041d\u0430\u0448 \u043f\u0440\u043e\u0446\u0435\u043d\u0442 \u0441 \u043f\u0440\u043e\u0434\u0430\u0436\u0438",range:[0,1],defaultValue:.2,step:.05},{paramName:"upDelivery",label:"\u041f\u0440\u043e\u0446\u0435\u043d\u0442 \u043d\u0430\u0446\u0435\u043d\u043a\u0438 \u0437\u0430 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0443",range:[0,1],defaultValue:.1,step:.01},{paramName:"marketing",label:"\u0420\u0430\u0441\u0445\u043e\u0434 \u043d\u0430 \u043c\u0430\u0440\u043a\u0435\u0442\u0438\u043d\u0433",range:[0,1e3],defaultValue:300,step:1},{paramName:"dealCntMonth",label:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0434\u0435\u043b\u043e\u043a \u0434\u043b\u044f \u043e\u0434\u043d\u043e\u0433\u043e \u0442\u043e\u0432\u0430\u0440\u0430",defaultValue:4,range:[3,6],step:1},{paramName:"averageCost",label:"\u0421\u0440\u0435\u0434\u043d\u044f\u044f \u0446\u0435\u043d\u0430 \u0441\u0434\u0435\u043b\u043a\u0438",defaultValue:5e3,range:[1e3,2e4],step:500}],E=function(e){var a=e.onChangeParameter;return n.a.createElement(n.a.Fragment,null,n.a.createElement(h,null,"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"),n.a.createElement(g,{params:C,onChangeParameter:a}))},V=t(70),N=function(e){var a=e.avgSalary,t=e.warehouseSpace,r=e.warehouseSpaceCost,n=e.distanceFromCity,l=e.overheadCosts,o=e.marketing;return function(e){var u=t*r*n,i=1.404*a*(7+Math.floor(e/1e3));return(u+o+i)*(l+1)/e}},x=function(e){return function(a){return N(e)(a)*a}},S=function(e){var a=e.deliveryCostAvg,t=e.deliveryPercent,r=e.productPrice,n=e.periodValuableUsage,l=e.wearTearMulti,o=e.stealProbability,u=e.overheadCosts,i=e.acquireSale,c=e.conversion,s=e.dealCntMonth;return function(e){var m=r*(1-i);return((2+c)*a*t+m*l*o+m/(12*n*s))*(u+1)}},y=function(e){return function(a){return S(e)(a)*a}},k=function(e){return function(a){return x(e)(a)+y(e)(a)}},w=function(e){var a=e.averageCost,t=e.conversion,r=e.ourSale,n=e.productPrice,l=e.prtTestDrive,o=e.acquireSale;return function(e){return(1-l)*e*a+r*e*t*(n-a-n*(1-o))}},P=function(e,a){for(var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=[],n=[],l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;l<a;l+=t)r.push(l.toString()),n.push(e(l));return{dataset:n,labels:r}},j=function(e,a){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{total:!1,variable:!1,fixed:!1,profit:!1,income:!1,partner:!1},r=arguments.length>3?arguments[3]:void 0,n=[],l=[],o=t.total,u=t.fixed,i=t.profit,c=t.variable,s=t.income,m=t.partner;if(u){var p=r?x(e):N(e),d=P(p,a,10,1),f=d.dataset,b=d.labels;n.push({data:f,label:"fixed",backgroundColor:"#088fbd",borderColor:"#088fbd"}),l=b}if(c){var g=r?y(e):S(e),v=P(g,a,10,1),h=v.dataset,C=v.labels;n.push({data:h,label:"variable",backgroundColor:"#00ff00",borderColor:"#00ff00"}),l=C}if(o){var E=r?k(e):function(e){return function(a){return N(e)(a)+S(e)(a)}}(e),V=P(E,a,10,1),j=V.dataset,M=V.labels;n.push({data:j,label:"total",backgroundColor:"#ff0000",borderColor:"#ff0000"}),l=M}if(i){var D=function(e){return function(a){return w(e)(a)-k(e)(a)}}(e),O=P(D,a,10,1),T=O.dataset,q=O.labels;n.push({data:T,label:"profit",backgroundColor:"#cc9aff",borderColor:"#cc9aff"}),l=q}if(s){var F=w(e),A=P(F,a,10,1),J=A.dataset,U=A.labels;n.push({data:J,label:"income",backgroundColor:"purple",borderColor:"purple"}),l=U}if(m){var B=function(e){var a=e.prtTestDrive,t=e.averageCost,r=e.conversion,n=e.ourSale,l=e.productPrice,o=e.acquireSale;return function(e){return(l*(1-o)+l*o*(1-n))*e*r+a*t*e}}(e),I=P(B,a,10,1),L=I.dataset,R=I.labels;n.push({data:L,label:"partner",backgroundColor:"orange",borderColor:"orange"}),l=R}return{labels:l,datasets:n}},M=t(97),D=function(){var e=C.reduce(function(e,a){return e[a.paramName]=a.defaultValue,e},{}),a=Object(V.a)(e),t=Object(u.a)(a,2),r=t[0],l=t[1],o=j(r,2e4,{fixed:!0,total:!0,variable:!0}),i=j(r,2e4,{fixed:!0,total:!0,variable:!0},!0),c=j(r,2e4,{income:!0,total:!0},!0),s=j(r,2e4,{profit:!0},!0),d=j(r,2e4,{partner:!0},!0);return n.a.createElement(M.a,null,n.a.createElement(E,{onChangeParameter:function(e,a){l(function(t){t[e]=a})}}),n.a.createElement(p.a,{container:!0},n.a.createElement(p.a,{item:!0,xs:6},n.a.createElement(m,{data:o})),n.a.createElement(p.a,{item:!0,xs:6},n.a.createElement(m,{data:i})),n.a.createElement(p.a,{item:!0,xs:6},n.a.createElement(m,{data:c})),n.a.createElement(p.a,{item:!0,xs:6},n.a.createElement(m,{data:s})),n.a.createElement(p.a,{item:!0,xs:6},n.a.createElement(m,{data:d}))))};o.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(D,null)))}},[[47,2,1]]]);
//# sourceMappingURL=main.9f6e2f6f.chunk.js.map