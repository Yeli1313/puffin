(self.webpackChunkpuffinv_3=self.webpackChunkpuffinv_3||[]).push([[8082],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=i.createContext({}),s=function(e){var t=i.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,m=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,f=p["".concat(m,".").concat(d)]||p[d]||u[d]||a;return n?i.createElement(f,o(o({ref:t},c),{},{components:n})):i.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4747:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return m},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var i=n(2122),r=n(9756),a=(n(7294),n(3905)),o=["components"],l={id:"email",title:"Email Setup",sidebar_label:"System Emails"},m=void 0,s={unversionedId:"email",id:"email",isDocsHomePage:!1,title:"Email Setup",description:"If you have opted for email based registration in your platform, you will need to do the below steps to customise your email which goes out.",source:"@site/docs/email.md",sourceDirName:".",slug:"/email",permalink:"/docs/email",editUrl:"https://github.com/TRADLY-PLATFORM/puffin/edit/master/puffin-v3/docs/email.md",version:"current",frontMatter:{id:"email",title:"Email Setup",sidebar_label:"System Emails"},sidebar:"mySidebar",previous:{title:"Website",permalink:"/docs/website"},next:{title:"Push Notifications",permalink:"/docs/pushnotification"}},c=[{value:"Email Verification",id:"email-verification",children:[]},{value:"Email Contents",id:"email-contents",children:[]},{value:"Welcome Email",id:"welcome-email",children:[]},{value:"OTP Email",id:"otp-email",children:[]},{value:"Resend OTP Email",id:"resend-otp-email",children:[]}],u={toc:c};function p(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If you have opted for email based registration in your platform, you will need to do the below steps to customise your email which goes out. "),(0,a.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Domain Verification")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Finish the ",(0,a.kt)("a",{parentName:"p",href:"/docs/domain"},"domain verification")," before doing this. "))),(0,a.kt)("h2",{id:"email-verification"},"Email Verification"),(0,a.kt)("p",null," (Feature is still in testing, Request via support portal for the change. Provide us the email, we will send from AWS to verify your email)."),(0,a.kt)("img",{src:"/img/verify-email.png",alt:"Email Verification",width:"500"}),(0,a.kt)("h2",{id:"email-contents"},"Email Contents"),(0,a.kt)("p",null,"Contents for "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Welcome Email "),(0,a.kt)("li",{parentName:"ol"},"OTP Email "),(0,a.kt)("li",{parentName:"ol"},"Reset Password Email ")),(0,a.kt)("p",null,"Other set of emails are added soon. "),(0,a.kt)("p",null,"End of 2021Q2, you will be able to "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Customise the email messaging template from SuperAdmin"),(0,a.kt)("li",{parentName:"ul"},"We released this feature recently but mergetags doesn't work as expected"),(0,a.kt)("li",{parentName:"ul"},"As of now, you can customise through manual request from the team (Any HTML will be possible)")),(0,a.kt)("p",null,"Current contents: "),(0,a.kt)("h2",{id:"welcome-email"},"Welcome Email"),(0,a.kt)("h2",{id:"otp-email"},"OTP Email"),(0,a.kt)("h2",{id:"resend-otp-email"},"Resend OTP Email"))}p.isMDXComponent=!0}}]);