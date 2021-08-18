(self.webpackChunkpuffinv_3=self.webpackChunkpuffinv_3||[]).push([[6720],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return u}});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),p=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(a),u=n,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return a?o.createElement(h,r(r({ref:t},c),{},{components:a})):o.createElement(h,r({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var p=2;p<i;p++)r[p]=a[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7376:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var o=a(2122),n=a(9756),i=(a(7294),a(3905)),r=["components"],l={id:"deployment",title:"Deployment Steps",sidebar_label:"Deployment Steps"},s=void 0,p={unversionedId:"deployment",id:"deployment",isDocsHomePage:!1,title:"Deployment Steps",description:"Find the informations on how we deploy different Tradly Platform products into different tech stacks and list of activities you as a platform owner need to do and other informations from sandbox stage to production.",source:"@site/docs/deployment.md",sourceDirName:".",slug:"/deployment",permalink:"/docs/deployment",editUrl:"https://github.com/TRADLY-PLATFORM/puffin/edit/master/puffin-v3/docs/deployment.md",version:"current",frontMatter:{id:"deployment",title:"Deployment Steps",sidebar_label:"Deployment Steps"},sidebar:"mySidebar",previous:{title:"Checklist",permalink:"/docs/checklist"},next:{title:"Customising App",permalink:"/docs/appcustomisation"}},c=[{value:"1. Superadmin",id:"1-superadmin",children:[]},{value:"2. Google PlayStore",id:"2-google-playstore",children:[]},{value:"3. Apple AppStore",id:"3-apple-appstore",children:[]},{value:"4. 3rd Party Tools Signup",id:"4-3rd-party-tools-signup",children:[]},{value:"5. Media Assets",id:"5-media-assets",children:[]},{value:"6. Text Strings",id:"6-text-strings",children:[]},{value:"7. Company Details for app",id:"7-company-details-for-app",children:[]}],d={toc:c};function m(e){var t=e.components,a=(0,n.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Find the informations on how we deploy different Tradly Platform products into different tech stacks and list of activities you as a platform owner need to do and other informations from sandbox stage to production. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"}," Plus below are the mandatory things that needed from you for us to prepare a app build/bundle ")),(0,i.kt)("h2",{id:"1-superadmin"},"1. Superadmin"),(0,i.kt)("p",null,"Every platform owner whichever the products you subscribe from us will have super admin access. SuperAdmin Panel helps you to configure different settings of your apps and API in a user friendly way without coding involved. ",(0,i.kt)("a",{parentName:"p",href:"/docs/superadmin"},"Read more here"),". "),(0,i.kt)("p",null,"SuperAdmin panel are not hosted anywhere but in our own servers. Hence you will be accessing the production superAdmin panel from this link (htttps://superadmin.tradly.app). Apart from the sandbox access we have shared with you for testing, you will get a unique tenantID for your platform on your successful subscribed users. "),(0,i.kt)("h2",{id:"2-google-playstore"},"2. Google PlayStore"),(0,i.kt)("p",null,"Launching your apps in Google PlayStore through our managed apps will have this list of steps. "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"You buying a Google Play Developer Licence in this link : ",(0,i.kt)("a",{parentName:"li",href:"https://play.google.com/apps/publish"},"https://play.google.com/apps/publish")," (Play publish account and not developer account)"),(0,i.kt)("li",{parentName:"ol"},"Create your first app in Google play publish"),(0,i.kt)("li",{parentName:"ol"},"You providing access to Google Play access to Tradly Launchpad team (The team will send you the email address) as we need to do below activities (Admin level access should be needed for the first release, later you can change to Developer only access) "),(0,i.kt)("li",{parentName:"ol"},"Filling the informations like favicon, name, Privacy URL, etc under Superadmin is mandatory step before we go for production APK creation process. "),(0,i.kt)("li",{parentName:"ol"},"You can fill the \u201cStore Listing\u201d fields also under Store Presence"),(0,i.kt)("li",{parentName:"ol"},"APK Upload process: We Download & upload the SigningKey for your app, a mandatory process for Google. ",(0,i.kt)("a",{parentName:"li",href:"https://support.google.com/googleplay/android-developer/answer/7384423"},"Read more here on why it\u2019s needed"),".  "),(0,i.kt)("li",{parentName:"ol"},"Our team can upload the app under your account "),(0,i.kt)("li",{parentName:"ol"},"Wait for review, and fix any issues if highlighted by Google"),(0,i.kt)("li",{parentName:"ol"},"Let you know once it is approved. ")),(0,i.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Timelines")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Time taken to get a google Play licence: Instant"),(0,i.kt)("li",{parentName:"ul"},"Google Play licence: $25 per year and paid by you"),(0,i.kt)("li",{parentName:"ul"},"No of days Google takes to approve your app: 5-10 Working days"),(0,i.kt)("li",{parentName:"ul"},"No of days Google takes to approve your app updates from initial release: 3-5 Working days. ")))),(0,i.kt)("h2",{id:"3-apple-appstore"},"3. Apple AppStore"),(0,i.kt)("p",null,"Launching your apps in Apple AppStore involves more process than Google Playstore. Our launch time depends on this process"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Buy Apple Appstore developer licence "),(0,i.kt)("li",{parentName:"ol"},"Admin level access to Tradly Team for the first release, later you can change to developer only access (The team will send you the email address). Read different access level control here: ",(0,i.kt)("a",{parentName:"li",href:"https://developer.apple.com/support/roles/"},"https://developer.apple.com/support/roles/")," "),(0,i.kt)("li",{parentName:"ol"},"If you are not enrolled as organisation, then we need your time to setup a call to get the provisioning certificates for our developers to send the build to be updated in Appstore for you to review. (So if you have registered as a company, suggest signing up as a organisation)")),(0,i.kt)("p",null,'"If you\u2019re enrolled as an organization, you have the option of adding additional members to your team. The role you assign them controls access to the development(including certificate creation) and distribution tools included with your membership."'),(0,i.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Timelines")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Time taken to get  Apple licence: Depends and involves DUNS verification. (5-10Days)"),(0,i.kt)("li",{parentName:"ul"},"Apple licence: $99 per year and paid by you "),(0,i.kt)("li",{parentName:"ul"},"No of days Apple takes to approve your app: 5-10 Working days"),(0,i.kt)("li",{parentName:"ul"},"No of days Apple takes to approve your app updates from initial release: 3-5 Working days. ")))),(0,i.kt)("h2",{id:"4-3rd-party-tools-signup"},"4. 3rd Party Tools Signup"),(0,i.kt)("p",null,"We provide free add on otherwise called 3rd party tools and utilities implemented for you. So you don't need to worry about implemementing marketing, tracking tools, etc. "),(0,i.kt)("p",null,"Read the integrations section for step by step information on how to signup and setup the accounts. "),(0,i.kt)("p",null,"Below is the list "),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,i.kt)("a",{parentName:"li",href:"/docs/branch"},"Branch.io")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,i.kt)("a",{parentName:"li",href:"/docs/firebase"},"Firebase")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","AppStore access (Admin) "),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Appstore team ID ( )"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Plist from Firebase for AppStore "),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Android  access ( ) "),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Android keystore config(first name, last name, organisation)"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Stripe access "),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Stripe Standard or Express (Decision)")),(0,i.kt)("h2",{id:"5-media-assets"},"5. Media Assets"),(0,i.kt)("p",null,"Free resources: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"ILLUSTRATIONS : ",(0,i.kt)("a",{parentName:"li",href:"https://undraw.co/search"},"https://undraw.co/search")," : You can use undraw an opensource website to download personalised and rich SVG/PNG illustrations. Its used from facebook to startups, make use of it (remember you can change the color there)"),(0,i.kt)("li",{parentName:"ul"},"GENERAL: ",(0,i.kt)("a",{parentName:"li",href:"https://www.canva.com"},"https://www.canva.com"),": The famous canva also provide lot of free resources. "),(0,i.kt)("li",{parentName:"ul"},"ICONS: ",(0,i.kt)("a",{parentName:"li",href:"https://www.figma.com/file/ALx9XJzeRb0n6kjUjGo1Iq/TradlyPlatform-Icons?node-id=0%3A1"},"https://www.figma.com/file/ALx9XJzeRb0n6kjUjGo1Iq/TradlyPlatform-Icons?node-id=0%3A1")," : You can find icons from this figma file. We are trying to improve the resources here from contributors. "),(0,i.kt)("li",{parentName:"ul"},"WEBAPP: ",(0,i.kt)("a",{parentName:"li",href:"https://www.figma.com/file/N6JWLSTi65569BOmasbOeG/TradlyPlatform---webapp---Public?node-id=1%3A2"},"https://www.figma.com/file/N6JWLSTi65569BOmasbOeG/TradlyPlatform---webapp---Public?node-id=1%3A2")," (The webapp we will be releasing soon)"),(0,i.kt)("li",{parentName:"ul"},"DESIGN KIT: ",(0,i.kt)("a",{parentName:"li",href:"https://www.figma.com/file/CVL55dJAeCZm09qpepE9XQ/TradlyPlatform---DesignKit?node-id=8%3A0"},"https://www.figma.com/file/CVL55dJAeCZm09qpepE9XQ/TradlyPlatform---DesignKit?node-id=8%3A0")," if you want to play around on how your designs going to look in the app, you can share this with your design team to create mockups. (Just duplicate and use it)")),(0,i.kt)("h2",{id:"6-text-strings"},"6. Text Strings"),(0,i.kt)("p",null,"(applicable for multi language apps)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"TradlyTeam will share with you a google sheet. "),(0,i.kt)("li",{parentName:"ul"},"There will be a default protected key column which you might not need to edit"),(0,i.kt)("li",{parentName:"ul"},"Fill the other columns whichever the language is applicable for you (For example: English, Spanish, Chinese-simplified, Chinese-traditional)")),(0,i.kt)("h2",{id:"7-company-details-for-app"},"7. Company Details for app"),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Terms Condition  (Example: ",(0,i.kt)("a",{parentName:"li",href:"https://www.example.com/terms-conditions"},"https://www.example.com/terms-conditions"),")"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Privacy URL (Example: ",(0,i.kt)("a",{parentName:"li",href:"https://www.example.com/privacy-policy"},"https://www.example.com/privacy-policy"),")\nAs we are not providing web app as of now, you might need to host this in your static websites like squarespace, wordpress, etc.")))}m.isMDXComponent=!0}}]);