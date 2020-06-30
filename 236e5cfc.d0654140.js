(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{112:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),i=(n(0),n(155)),o={id:"internalanalytics",title:"Analytics Features",sidebar_label:"Analytics Features"},s={id:"internalanalytics",isDocsHomePage:!1,title:"Analytics Features",description:"Here you can find statistics about the marketplace",source:"@site/docs/internalanalytics.md",permalink:"/docs/internalanalytics",editUrl:"https://github.com/TRADLY-PLATFORM/marketplace-api/edit/master/tradly-portal/docs/internalanalytics.md",sidebar_label:"Analytics Features",sidebar:"someSidebar",previous:{title:"superadminconfig",permalink:"/docs/superadminconfig"},next:{title:"25+ features available in tradly apps",permalink:"/docs/appfeatures"}},l=[],c={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Here you can find statistics about the marketplace"),Object(i.b)("p",null,"USER: How many users registered in the app?"),Object(i.b)("p",null,"STORES: How many stores have been created in the app? (For education marketplace: It can be institutions, it can be still users, It can be Tutor profiles) "),Object(i.b)("p",null,"STORE FOLLOWERS: This just gives an indication of how many followers are following the stores. (Example: If 25 people follow 50 stores, then it will give 25",Object(i.b)("em",{parentName:"p"},"50 = 1250 followers) "),"However this is not a good indication, we need to improve this or remove this (ankur to work on)"),Object(i.b)("p",null,"LISTINGS: This shows the total number of listings by all users (Example: if 10 users have posted 2 listings each. That means 10*2 listings = 20 Listings) "),Object(i.b)("p",null,"LISTINGS SOLD (or closed/Booked): If an listings is not available by multiple reasons (Example: sold out, booked, no space, etc). In a trading marketplace, SOLD status gives the indication of the success of marketplace.  "),Object(i.b)("p",null,"LISTING LIKES: This is same as Listings followers but just that this is LIKES of a listing "))}p.isMDXComponent=!0},155:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,d=u["".concat(o,".").concat(b)]||u[b]||f[b]||i;return n?a.a.createElement(d,s(s({ref:t},c),{},{components:n})):a.a.createElement(d,s({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);