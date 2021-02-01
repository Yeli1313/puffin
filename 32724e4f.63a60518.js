(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{131:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(7),a=(n(0),n(178)),i={id:"moengage",title:"Integrating Moengage",sidebar_label:"Moengage"},c={id:"moengage",isDocsHomePage:!1,title:"Integrating Moengage",description:"Introduction",source:"@site/docs/moengage.md",permalink:"/docs/moengage",editUrl:"https://github.com/TRADLY-PLATFORM/puffin/edit/master/puffin-v2/docs/moengage.md",sidebar_label:"Moengage",sidebar:"someSidebar",previous:{title:"Integrating Google Analytics",permalink:"/docs/ga"},next:{title:"Setting up Stripe",permalink:"/docs/stripe"}},u=[{value:"Introduction",id:"introduction",children:[]},{value:"Setup",id:"setup",children:[]}],l={rightToc:u};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"introduction"},"Introduction"),Object(a.b)("p",null,"Source: MoEngage\nMoEngage helps you delight customers and retain them for longer. With MoEngage, you can analyze customer behavior and delight them with personalized communication at every touchpoint across their lifecycle."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," Onboard ")," Help more customers discover your product value faster. Map their journey, reduce friction at touchpoints, and delight them from the very first interaction."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," Grow ")," Turn your customers into brand advocates. Understand their context, likes, preferences, and interests. Win long-term loyalty through tailor-made offerings and communication."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," Retain "),"\nKeep your customers engaged for longer. Show them that you care - win mindshare through contextual and personalized messages and offers."),Object(a.b)("h2",{id:"setup"},"Setup"),Object(a.b)("p",null,"You'll have to provide us with the APP ID to help us connect the Tradly Android app with your MoEngage dashboard.\nHere's what you need to do:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Sign up for a ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.moengage.com/?utm_source=tradly-platform&utm_campaign=portal&utm_medium=portal"}),"MoEngage")," account"),Object(a.b)("li",{parentName:"ol"},"It will leads you to app.moengage.com and navigate to Settings > App Settings"),Object(a.b)("li",{parentName:"ol"},"Copy the APP ID under Account Settings. It looks like this: BPNST4YDJLDU3EKKJJZGK59E"),Object(a.b)("li",{parentName:"ol"},"Visit SuperAdmin Portal and update this ID "),Object(a.b)("li",{parentName:"ol"},"You can verify whether you are starting to receive data after we have provided updated APK/BUILD via Firebase App Distribution and Apple TestFlight")))}p.isMDXComponent=!0},178:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},g=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=p(n),g=r,m=s["".concat(i,".").concat(g)]||s[g]||d[g]||a;return n?o.a.createElement(m,c(c({ref:t},l),{},{components:n})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=g;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"}}]);