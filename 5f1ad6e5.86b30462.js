(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{138:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return b}));var a=r(2),n=(r(0),r(182));const o={id:"firebase",title:"Integrating Firebase",sidebar_label:"Firebase"},i={id:"firebase",isDocsHomePage:!1,title:"Integrating Firebase",description:"Introduction",source:"@site/docs/firebase.md",permalink:"/docs/firebase",editUrl:"https://github.com/TRADLY-PLATFORM/puffin/edit/master/puffin-v2/docs/firebase.md",sidebar_label:"Firebase",sidebar:"someSidebar",previous:{title:"Integrating Facebook Pixels & Analytics",permalink:"/docs/facebookapp"},next:{title:"Integrating Google Analytics",permalink:"/docs/ga"}},l=[{value:"Introduction",id:"introduction",children:[]},{value:"Step by Step",id:"step-by-step",children:[]}],c={rightToc:l};function b({components:e,...t}){return Object(n.b)("wrapper",Object(a.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"introduction"},"Introduction"),Object(n.b)("p",null,"Firebase which is owned by Google provide multiple set of features more specifically focused on Mobile app and gradually bringing new features for web apps as well.\nHaving a glance the URL : ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://firebase.google.com/"}),"https://firebase.google.com/")," can tell you every list of features they offer. Apart from confidential notes, we use firebase to allow you to "),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Check your app stability and Performance using their Crashlytics"),Object(n.b)("li",{parentName:"ul"},"We use App Distribution to share pre-release built with you, so you can share with your team to test the app before it get's published"),Object(n.b)("li",{parentName:"ul"},"It does bring you out of box features like Dynamic Links, Predictions, Cloud Messaging, etc.")),Object(n.b)("p",null,"Firebase done a good job of explaining each features through a short video on every page you navigate, so you will be educated if this is the first time you are using Firebase."),Object(n.b)("h2",{id:"step-by-step"},"Step by Step"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Go to ",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://firebase.google.com/?utm_source=tradly-platform&utm_campaign=portal&utm_medium=portal"}),"Firebase")," "),Object(n.b)("li",{parentName:"ol"},"Signup for a free account using your gmail account (It is recommended to have one GmailID or GoogleApps email for all your signup like this)"),Object(n.b)("li",{parentName:"ol"},"Create a new project as you see here ",Object(n.b)("img",Object(a.a)({parentName:"li"},{src:"/img/fb-newproject.png",alt:"fb-newproject"}))),Object(n.b)("li",{parentName:"ol"},"Name your project ",Object(n.b)("img",Object(a.a)({parentName:"li"},{src:"/img/fb-nameit.png",alt:"fb-nameit"}))),Object(n.b)("li",{parentName:"ol"},"As Google analytics comes on top of firebase and it's free. Consider enabling to get free mobile app analytics ",Object(n.b)("img",Object(a.a)({parentName:"li"},{src:"/img/fb-enablega.png",alt:"fb-enablega"}))),Object(n.b)("li",{parentName:"ol"},"You will not find anything like ist... but you need to create your Google cloud solution account as well  ",Object(n.b)("img",Object(a.a)({parentName:"li"},{src:"/img/fb-addgcp.png",alt:"fb-addgcp"}))),Object(n.b)("li",{parentName:"ol"},"From here you can go to upgrade your billing option as Blaze plan is necessary ",Object(n.b)("img",Object(a.a)({parentName:"li"},{src:"/img/fb-upgrade.png",alt:"fb-upgrade"}))),Object(n.b)("li",{parentName:"ol"},"Choose Blaze plan which is pay as you go plan ",Object(n.b)("img",Object(a.a)({parentName:"li"},{src:"/img/fb-blaze.png",alt:"fb-blaze"}))),Object(n.b)("li",{parentName:"ol"},"From here you can find the access control ",Object(n.b)("img",Object(a.a)({parentName:"li"},{src:"/img/fb-users.png",alt:"fb-users"}))),Object(n.b)("li",{parentName:"ol"},"Add TradlyTeam email sent to you as owner ",Object(n.b)("img",Object(a.a)({parentName:"li"},{src:"/img/fb-owner.png",alt:"fb-owner"})))),Object(n.b)("p",null,"Note: Blaze plan is mandatory to deploy push notification for chat messages"))}b.isMDXComponent=!0},182:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var b=n.a.createContext({}),s=function(e){var t=n.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},f=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=s(r),f=a,m=p["".concat(i,".").concat(f)]||p[f]||u[f]||o;return r?n.a.createElement(m,l(l({ref:t},b),{},{components:r})):n.a.createElement(m,l({ref:t},b))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var b=2;b<o;b++)i[b]=r[b];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);