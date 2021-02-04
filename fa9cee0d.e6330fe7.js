(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{178:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return b}));var i=a(2),n=a(7),r=(a(0),a(185)),o={id:"appstore",title:"Appstore Setup",sidebar_label:"Appstore"},l={id:"appstore",isDocsHomePage:!1,title:"Appstore Setup",description:"Pre-requisite",source:"@site/docs/appstore.md",permalink:"/docs/appstore",editUrl:"https://github.com/TRADLY-PLATFORM/puffin/edit/master/puffin-v2/docs/appstore.md",sidebar_label:"Appstore",sidebar:"someSidebar",previous:{title:"Things to setup in your Domain",permalink:"/docs/domain"},next:{title:"Things to setup in playstore",permalink:"/docs/playstore"}},c=[{value:"Official Resources",id:"official-resources",children:[]},{value:"If you are an organisation",id:"if-you-are-an-organisation",children:[]},{value:"Create new app in Appstore connect",id:"create-new-app-in-appstore-connect",children:[{value:"Creating Provisioning profile",id:"creating-provisioning-profile",children:[]},{value:"Creating Distribution Certificate",id:"creating-distribution-certificate",children:[]},{value:"Create App Identifier",id:"create-app-identifier",children:[]},{value:"Creating Push Key",id:"creating-push-key",children:[]}]},{value:"Appstore Management",id:"appstore-management",children:[]},{value:"FIRST Release",id:"first-release",children:[]},{value:"App Review Management",id:"app-review-management",children:[]},{value:"App Update",id:"app-update",children:[]}],p={rightToc:c};function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Pre-requisite "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Decide whether you want as a individual licence or Organization"),Object(r.b)("li",{parentName:"ul"},"Organisation level licence provide more benefits in terms of access management (Especially creating provisioning certificates)")),Object(r.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"You must have a macOS running computer/laptop to complete the provisioning exercises. If you do not have, setup a call with us"))),Object(r.b)("p",null,"Below are the steps to create provisioning certificates"),Object(r.b)("h2",{id:"official-resources"},"Official Resources"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"or Read below steps from our developers contribution (You can contribute if we are missing anything)")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Creating Certificates ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://help.apple.com/developer-account/#/deveedc0daa0"}),"https://help.apple.com/developer-account/#/deveedc0daa0")),Object(r.b)("li",{parentName:"ul"},"Register app id : ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://help.apple.com/developer-account/#/dev1b35d6f83"}),"https://help.apple.com/developer-account/#/dev1b35d6f83")),Object(r.b)("li",{parentName:"ul"},"Create appstore profile : ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://help.apple.com/developer-account/#/devbd904d1a5"}),"https://help.apple.com/developer-account/#/devbd904d1a5"))),Object(r.b)("h2",{id:"if-you-are-an-organisation"},"If you are an organisation"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Invite Tradly email we have given to you with Admin or Developer Access"),Object(r.b)("li",{parentName:"ul"},"If you do add as a Developer access, you need to create the provisioning certificates (refer below steps) "),Object(r.b)("li",{parentName:"ul"},"If you do add as a admin access, we take care of creating provisioning certificates ")),Object(r.b)("h2",{id:"create-new-app-in-appstore-connect"},"Create new app in Appstore connect"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Go to\xa0",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://appstoreconnect.apple.com/apps"}),"https://appstoreconnect.apple.com/apps")),Object(r.b)("li",{parentName:"ol"},"Click + Icon"),Object(r.b)("li",{parentName:"ol"},"Select \u2018New App\u2019"),Object(r.b)("li",{parentName:"ol"},"Select \u2018iOS\u2019 as platform"),Object(r.b)("li",{parentName:"ol"},"Name - This is your app name"),Object(r.b)("li",{parentName:"ol"},"Primary language for the app"),Object(r.b)("li",{parentName:"ol"},"Select the bundle id for the app."),Object(r.b)("li",{parentName:"ol"},"SKU - just enter bundle id itself"),Object(r.b)("li",{parentName:"ol"},"Select \u2018Full Access\u2019 for the User Access"),Object(r.b)("li",{parentName:"ol"},"Click \u2018Create\u2019")),Object(r.b)("h3",{id:"creating-provisioning-profile"},"Creating Provisioning profile"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Go to\xa0developer.apple.com"),Object(r.b)("li",{parentName:"ol"},"Select \u2018Account\u2019"),Object(r.b)("li",{parentName:"ol"},"Select \u2018Certificates , Identifiers & Profiles\u2019"),Object(r.b)("li",{parentName:"ol"},"Select \u2018Profiles\u2019"),Object(r.b)("li",{parentName:"ol"},"Click + Icon"),Object(r.b)("li",{parentName:"ol"},"Select \u2018Appstore\u2019 Under Distribution"),Object(r.b)("li",{parentName:"ol"},"Click \u2018Continue\u2019"),Object(r.b)("li",{parentName:"ol"},"Select the Bundle id\xa0"),Object(r.b)("li",{parentName:"ol"},"Select the certificate\xa0"),Object(r.b)("li",{parentName:"ol"},"Enter profile name (Example: appname_distributionprofile)"),Object(r.b)("li",{parentName:"ol"},"Click \u2018Generate\u2019"),Object(r.b)("li",{parentName:"ol"},"Download this file and save ( .mobileprovision )")),Object(r.b)("h3",{id:"creating-distribution-certificate"},"Creating Distribution Certificate"),Object(r.b)("p",null,"It has few main steps"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Create CSR"),Object(r.b)("li",{parentName:"ol"},"Register Certificate"),Object(r.b)("li",{parentName:"ol"},"Export Certificate")),Object(r.b)("h4",{id:"create-csr"},"Create CSR"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Open \u2018Keychain Access App\u2019 on your Mac"),Object(r.b)("li",{parentName:"ol"},"Click \u2018Keychain Access\u2019 in menu bar"),Object(r.b)("li",{parentName:"ol"},"Open sub menu under \u2018Certificate Assistant\u2019"),Object(r.b)("li",{parentName:"ol"},"Click \u2018Request a certificate from certificate authority\u2019"),Object(r.b)("li",{parentName:"ol"},"Enter your Apple ID email address and name"),Object(r.b)("li",{parentName:"ol"},"Select \u2018Saved to Disk\u2019 option"),Object(r.b)("li",{parentName:"ol"},"Click \u2018Continue\u2019"),Object(r.b)("li",{parentName:"ol"},"Save the file somewhere on your Mac ( .certSigningRequest )")),Object(r.b)("h4",{id:"register-certificate"},"Register Certificate"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Go to\xa0developer.apple.com"),Object(r.b)("li",{parentName:"ol"},"Select \u2018Account\u2019"),Object(r.b)("li",{parentName:"ol"},"Select \u2018Certificates , Identifiers & Profiles\u2019"),Object(r.b)("li",{parentName:"ol"},"Select \u2018Certificates\u2019"),Object(r.b)("li",{parentName:"ol"},"Click + Icon"),Object(r.b)("li",{parentName:"ol"},"Select iOS Distribution under Software"),Object(r.b)("li",{parentName:"ol"},"Click \u2018Continue\u2019"),Object(r.b)("li",{parentName:"ol"},"Upload the file downloaded on previous step"),Object(r.b)("li",{parentName:"ol"},"Click \u2018Process\u2019"),Object(r.b)("li",{parentName:"ol"},"Click \u2018Download\u2019"),Object(r.b)("li",{parentName:"ol"},"Save this file somewhere on your Mac ( .cer )")),Object(r.b)("h4",{id:"export-certificate"},"Export Certificate"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Please double click the file that downloaded on previous step"),Object(r.b)("li",{parentName:"ol"},"This will open Keychain Access app"),Object(r.b)("li",{parentName:"ol"},"Go to My Certificates"),Object(r.b)("li",{parentName:"ol"},"Select the certificate you opened\xa0"),Object(r.b)("li",{parentName:"ol"},"Right click that certificate"),Object(r.b)("li",{parentName:"ol"},"Select \u2018Export \u2026\u2019 option"),Object(r.b)("li",{parentName:"ol"},"Save the file with password\xa0( .p12 ) and password"),Object(r.b)("li",{parentName:"ol"},"Password can be empty. To keep it secure, please enter password and save/remember the password")),Object(r.b)("h3",{id:"create-app-identifier"},"Create App Identifier"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Go to\xa0developer.apple.com"),Object(r.b)("li",{parentName:"ol"},"Select \u2018Account\u2019"),Object(r.b)("li",{parentName:"ol"},"Select \u2018Certificates , Identifiers & Profiles\u2019"),Object(r.b)("li",{parentName:"ol"},"Select \u2018Identifier\u2019"),Object(r.b)("li",{parentName:"ol"},"Click + Icon"),Object(r.b)("li",{parentName:"ol"},"Select \u2018App IDs\u2019"),Object(r.b)("li",{parentName:"ol"},"Select \u2018App\u2019"),Object(r.b)("li",{parentName:"ol"},"Enter Description\xa0(you can put anything here for your reference)"),Object(r.b)("li",{parentName:"ol"},"Select \u2018Explicit\u2019 for Bundle ID. \xa0"),Object(r.b)("li",{parentName:"ol"},"Enter your app ID. Ex: com.tradly.app"),Object(r.b)("li",{parentName:"ol"},"Please tick capabilities for the app. This might vary when we add more features to the product. For now, Please tick below -Associated Domains, Push Notifications"),Object(r.b)("li",{parentName:"ol"},"Click \u2018Continue\u2019"),Object(r.b)("li",{parentName:"ol"},"Click \u2018Register\u2019"),Object(r.b)("li",{parentName:"ol"},"This will generate your bundle id.")),Object(r.b)("h3",{id:"creating-push-key"},"Creating Push Key"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Go to developer.apple.com"),Object(r.b)("li",{parentName:"ul"},"Click account"),Object(r.b)("li",{parentName:"ul"},"Select \u2018Cerificates , Identifiers & Profiles\u2019"),Object(r.b)("li",{parentName:"ul"},"Select Keys"),Object(r.b)("li",{parentName:"ul"},"Click + Icon"),Object(r.b)("li",{parentName:"ul"},"Enter Key Name (Example: appname_pushkey )"),Object(r.b)("li",{parentName:"ul"},"Tick \u2018Apple Push Notification service)"),Object(r.b)("li",{parentName:"ul"},"Click Continue"),Object(r.b)("li",{parentName:"ul"},"Confirm Register"),Object(r.b)("li",{parentName:"ul"},"Download and share that file to our team")),Object(r.b)("h2",{id:"appstore-management"},"Appstore Management"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"When the team has access to your appstore, we will directly upload the app(IPA) to your testflight "),Object(r.b)("li",{parentName:"ul"},"You can test this app through testflight apps in your iphone to make sure everything is working properly before the release")),Object(r.b)("h2",{id:"first-release"},"FIRST Release"),Object(r.b)("p",null,"Once all is good with the testing, you can go ahead and setup a release. "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Create new version "),Object(r.b)("div",Object(i.a)({parentName:"li"},{className:"admonition admonition-warning alert alert--danger"}),Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"Version Number")),Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"The version number is shown on the App Store and should match the one we used in Xcode.")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},'Enter "What\'s new in this version"')),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Update screenshots (You can take screenshots from the testflight app )")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Enter promotional text, descriptions, keywords, Support URL, MArketing URL ")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Add assets like App store icon, "),Object(r.b)("div",Object(i.a)({parentName:"li"},{className:"admonition admonition-warning alert alert--danger"}),Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"App Review Information")),Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Provide WORKING sign-in information for apple to sign into your app and do the review. If you provide wrong information, it will delay your app review. ")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Notes under App Review information. Below is an example of text what we provide to Apple to guide them how they can use the app. "),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Steps to experience the app")),Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},'You need approved tenantID before login to the app. Use "tradlysocial" case sensitive in the first page'),Object(r.b)("li",{parentName:"ol"},"Use the login address above to follow an store, making purchase with COD or adding listings, etc. "),Object(r.b)("li",{parentName:"ol"},"Logout option available in the MORE section through Navbar")))),Object(r.b)("p",null,"VIDEO GUIDE: ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://drive.google.com/file/d/1AZMB1CNFGUsNi4n_GM62a93Xvk9QIpen/view?usp=sharing"}),"https://drive.google.com/file/d/1AZMB1CNFGUsNi4n_GM62a93Xvk9QIpen/view?usp=sharing")),Object(r.b)("h2",{id:"app-review-management"},"App Review Management"),Object(r.b)("p",null,"Apple may review the app within a week. If you get approved, GREAT! If not, we will help you wherever you can. But remember you need to take care of this place by reading the messages you receive from them, reply properly. If any doubts on what to reply, ask us. "),Object(r.b)("h2",{id:"app-update"},"App Update"),Object(r.b)("p",null,"Similar to the app release, we will directly push the app to your testglight. You can do the same process of testing, creating a release and pushing the app to Appstore. "))}b.isMDXComponent=!0},185:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return u}));var i=a(0),n=a.n(i);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),b=function(e){var t=n.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=b(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=b(a),d=i,u=s["".concat(o,".").concat(d)]||s[d]||m[d]||r;return a?n.a.createElement(u,l(l({ref:t},p),{},{components:a})):n.a.createElement(u,l({ref:t},p))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=a[p];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);