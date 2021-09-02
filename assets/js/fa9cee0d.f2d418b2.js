(self.webpackChunkpuffinv_3=self.webpackChunkpuffinv_3||[]).push([[2111],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return u}});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=i.createContext({}),s=function(e){var t=i.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(a),u=n,k=m["".concat(p,".").concat(u)]||m[u]||d[u]||o;return a?i.createElement(k,r(r({ref:t},c),{},{components:a})):i.createElement(k,r({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var s=2;s<o;s++)r[s]=a[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7211:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var i=a(2122),n=a(9756),o=(a(7294),a(3905)),r=["components"],l={id:"appstore",title:"Appstore Setup",sidebar_label:"Appstore"},p=void 0,s={unversionedId:"appstore",id:"appstore",isDocsHomePage:!1,title:"Appstore Setup",description:"Here is the list of steps you need to do in AppStore before the release, steps to update the app, etc",source:"@site/docs/appstore.md",sourceDirName:".",slug:"/appstore",permalink:"/docs/appstore",editUrl:"https://github.com/TRADLY-PLATFORM/puffin/edit/master/puffin-v3/docs/appstore.md",version:"current",frontMatter:{id:"appstore",title:"Appstore Setup",sidebar_label:"Appstore"},sidebar:"mySidebar",previous:{title:"Domain",permalink:"/docs/domain"},next:{title:"Playstore",permalink:"/docs/playstore"}},c=[{value:"Checklist",id:"checklist",children:[]},{value:"Official Resources",id:"official-resources",children:[]},{value:"If you are an organization",id:"if-you-are-an-organization",children:[]},{value:"Create a new app in Appstore connect",id:"create-a-new-app-in-appstore-connect",children:[{value:"Creating Provisioning profile",id:"creating-provisioning-profile",children:[]},{value:"Creating Distribution Certificate",id:"creating-distribution-certificate",children:[]},{value:"Create App Identifier",id:"create-app-identifier",children:[]},{value:"Creating Push Key",id:"creating-push-key",children:[]},{value:"Key ID",id:"key-id",children:[]},{value:"Team ID",id:"team-id",children:[]}]},{value:"Uploading Push Key Firebase Console",id:"uploading-push-key-firebase-console",children:[]},{value:"Download Firebase Plist",id:"download-firebase-plist",children:[]},{value:"Appstore Management",id:"appstore-management",children:[]},{value:"FIRST Release",id:"first-release",children:[]},{value:"App Review Management",id:"app-review-management",children:[]},{value:"App Update",id:"app-update",children:[]},{value:"IPA Upload to Appstore via transporter",id:"ipa-upload-to-appstore-via-transporter",children:[]}],d={toc:c};function m(e){var t=e.components,a=(0,n.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Here is the list of steps you need to do in AppStore before the release, steps to update the app, etc"),(0,o.kt)("h2",{id:"checklist"},"Checklist"),(0,o.kt)("p",null,"All the below to be uploaded / added in SuperAdmin"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"appstore#creating-provisioning-profile"},"Create Provisioning Certificates")),(0,o.kt)("li",{parentName:"ol"},"Update Certificate password (Native integrations > Appstore)"),(0,o.kt)("li",{parentName:"ol"},"Update Profile (Native integrations > Appstore)"),(0,o.kt)("li",{parentName:"ol"},"Update Bundle ID (Native integrations > Appstore)"),(0,o.kt)("li",{parentName:"ol"},"Access of Appstore to Tech Email (Ask the team for the emailID)"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"appstore#download-firebase-plist"},"Download Firebase Plist and update")," (Native integrations > Appstore)"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/docs/branch"},"Branch.io integration Details to update")," (Native integrations > Branch)"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"appstore#uploading-push-key-firebase-console"},"Push Key needs to updated in firebase console")),(0,o.kt)("li",{parentName:"ol"},"App Icon (under Mobile App Config)"),(0,o.kt)("li",{parentName:"ol"},"Splash image (under Mobile App Config)"),(0,o.kt)("li",{parentName:"ol"},"Onboarding (under Mobile App Config)"),(0,o.kt)("li",{parentName:"ol"},"Theme color (under Mobile App Config)")),(0,o.kt)("p",null,"Pre-requisite "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Decide whether you want as an individual licence or Organization"),(0,o.kt)("li",{parentName:"ul"},"Organisation level license provides more benefits in terms of access management (Especially creating provisioning certificates)")),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You must have a macOS running computer/laptop to complete the provisioning exercises. If you do not have, set up a call with us"))),(0,o.kt)("p",null,"Below are the steps to create provisioning certificates"),(0,o.kt)("h2",{id:"official-resources"},"Official Resources"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"or Read below steps from our developer's contribution (You can contribute if we are missing anything)")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Creating Certificates ",(0,o.kt)("a",{parentName:"li",href:"https://help.apple.com/developer-account/#/deveedc0daa0"},"https://help.apple.com/developer-account/#/deveedc0daa0")),(0,o.kt)("li",{parentName:"ul"},"Register app id: ",(0,o.kt)("a",{parentName:"li",href:"https://help.apple.com/developer-account/#/dev1b35d6f83"},"https://help.apple.com/developer-account/#/dev1b35d6f83")),(0,o.kt)("li",{parentName:"ul"},"Create AppStore profile: ",(0,o.kt)("a",{parentName:"li",href:"https://help.apple.com/developer-account/#/devbd904d1a5"},"https://help.apple.com/developer-account/#/devbd904d1a5"))),(0,o.kt)("h2",{id:"if-you-are-an-organization"},"If you are an organization"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Invite Tradly email we have given to you with Admin or Developer Access"),(0,o.kt)("li",{parentName:"ul"},"If you do add as Developer access, you need to create the provisioning certificates (refer below steps) "),(0,o.kt)("li",{parentName:"ul"},"If you do add as admin access, we take care of creating provisioning certificates ")),(0,o.kt)("h2",{id:"create-a-new-app-in-appstore-connect"},"Create a new app in Appstore connect"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to\xa0",(0,o.kt)("a",{parentName:"li",href:"https://appstoreconnect.apple.com/apps"},"https://appstoreconnect.apple.com/apps")),(0,o.kt)("li",{parentName:"ol"},"Click + Icon"),(0,o.kt)("li",{parentName:"ol"},"Select \u2018New App\u2019"),(0,o.kt)("li",{parentName:"ol"},"Select \u2018iOS\u2019 as a platform"),(0,o.kt)("li",{parentName:"ol"},"Name - This is your app name"),(0,o.kt)("li",{parentName:"ol"},"Primary language for the app"),(0,o.kt)("li",{parentName:"ol"},"Select the bundle id for the app."),(0,o.kt)("li",{parentName:"ol"},"SKU - just enter bundle id itself"),(0,o.kt)("li",{parentName:"ol"},"Select \u2018Full Access\u2019 for the User Access"),(0,o.kt)("li",{parentName:"ol"},"Click \u2018Create\u2019")),(0,o.kt)("h3",{id:"creating-provisioning-profile"},"Creating Provisioning profile"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to\xa0developer.apple.com"),(0,o.kt)("li",{parentName:"ol"},"Select \u2018Account\u2019"),(0,o.kt)("li",{parentName:"ol"},"Select \u2018Certificates, Identifiers & Profiles\u2019"),(0,o.kt)("li",{parentName:"ol"},"Select \u2018Profiles\u2019"),(0,o.kt)("li",{parentName:"ol"},"Click + Icon"),(0,o.kt)("li",{parentName:"ol"},"Select \u2018Appstore\u2019 Under Distribution"),(0,o.kt)("li",{parentName:"ol"},"Click \u2018Continue\u2019"),(0,o.kt)("li",{parentName:"ol"},"Select the Bundle id\xa0"),(0,o.kt)("li",{parentName:"ol"},"Select the certificate\xa0"),(0,o.kt)("li",{parentName:"ol"},"Enter profile name (Example: appname_distributionprofile)"),(0,o.kt)("li",{parentName:"ol"},"Click \u2018Generate\u2019"),(0,o.kt)("li",{parentName:"ol"},"Download this file and save ( .mobileprovision )")),(0,o.kt)("h3",{id:"creating-distribution-certificate"},"Creating Distribution Certificate"),(0,o.kt)("p",null,"It has few main steps"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create CSR"),(0,o.kt)("li",{parentName:"ol"},"Register Certificate"),(0,o.kt)("li",{parentName:"ol"},"Export Certificate")),(0,o.kt)("h4",{id:"create-csr"},"Create CSR"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open \u2018Keychain Access App\u2019 on your Mac"),(0,o.kt)("li",{parentName:"ol"},"Click \u2018Keychain Access\u2019 in the menu bar"),(0,o.kt)("li",{parentName:"ol"},"Open sub-menu under \u2018Certificate Assistant\u2019"),(0,o.kt)("li",{parentName:"ol"},"Click \u2018Request a certificate from certificate authority\u2019"),(0,o.kt)("li",{parentName:"ol"},"Enter your Apple ID email address and name"),(0,o.kt)("li",{parentName:"ol"},"Select the \u2018Saved to Disk\u2019 option"),(0,o.kt)("li",{parentName:"ol"},"Click \u2018Continue\u2019"),(0,o.kt)("li",{parentName:"ol"},"Save the file somewhere on your Mac ( .certSigningRequest )")),(0,o.kt)("h4",{id:"register-certificate"},"Register Certificate"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to\xa0developer.apple.com"),(0,o.kt)("li",{parentName:"ol"},"Select \u2018Account\u2019"),(0,o.kt)("li",{parentName:"ol"},"Select \u2018Certificates, Identifiers & Profiles\u2019"),(0,o.kt)("li",{parentName:"ol"},"Select \u2018Certificates\u2019"),(0,o.kt)("li",{parentName:"ol"},"Click + Icon"),(0,o.kt)("li",{parentName:"ol"},"Select iOS Distribution under Software"),(0,o.kt)("li",{parentName:"ol"},"Click \u2018Continue\u2019"),(0,o.kt)("li",{parentName:"ol"},"Upload the file downloaded in the previous step"),(0,o.kt)("li",{parentName:"ol"},"Click \u2018Process\u2019"),(0,o.kt)("li",{parentName:"ol"},"Click \u2018Download\u2019"),(0,o.kt)("li",{parentName:"ol"},"Save this file somewhere on your Mac ( .cer )")),(0,o.kt)("h4",{id:"export-certificate"},"Export Certificate"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Please double click the file that downloaded in the previous step"),(0,o.kt)("li",{parentName:"ol"},"This will open the Keychain Access app"),(0,o.kt)("li",{parentName:"ol"},"Go to My Certificates"),(0,o.kt)("li",{parentName:"ol"},"Select the certificate you opened\xa0"),(0,o.kt)("li",{parentName:"ol"},"Right-click that certificate"),(0,o.kt)("li",{parentName:"ol"},"Select the \u2018Export \u2026\u2019 option"),(0,o.kt)("li",{parentName:"ol"},"Save the file with password\xa0( .p12 ) and password"),(0,o.kt)("li",{parentName:"ol"},"Password can be empty. To keep it secure, please enter the password and save/remember the password")),(0,o.kt)("h3",{id:"create-app-identifier"},"Create App Identifier"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to\xa0developer.apple.com"),(0,o.kt)("li",{parentName:"ol"},"Select \u2018Account\u2019"),(0,o.kt)("li",{parentName:"ol"},"Select \u2018Certificates, Identifiers & Profiles\u2019"),(0,o.kt)("li",{parentName:"ol"},"Select \u2018Identifier\u2019"),(0,o.kt)("li",{parentName:"ol"},"Click + Icon"),(0,o.kt)("li",{parentName:"ol"},"Select \u2018App IDs\u2019"),(0,o.kt)("li",{parentName:"ol"},"Select \u2018App\u2019"),(0,o.kt)("li",{parentName:"ol"},"Enter Description\xa0(you can put anything here for your reference)"),(0,o.kt)("li",{parentName:"ol"},"Select \u2018Explicit\u2019 for Bundle ID. \xa0"),(0,o.kt)("li",{parentName:"ol"},"Enter your app ID. Ex: com.tradly.app"),(0,o.kt)("li",{parentName:"ol"},"Please tick capabilities for the app. This might vary when we add more features to the product. For now, Please tick below -Associated Domains, Push Notifications"),(0,o.kt)("li",{parentName:"ol"},"Click \u2018Continue\u2019"),(0,o.kt)("li",{parentName:"ol"},"Click \u2018Register\u2019"),(0,o.kt)("li",{parentName:"ol"},"This will generate your bundle id.")),(0,o.kt)("h3",{id:"creating-push-key"},"Creating Push Key"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Go to developer.apple.com"),(0,o.kt)("li",{parentName:"ul"},"Click account"),(0,o.kt)("li",{parentName:"ul"},"Select \u2018Certificates, Identifiers & Profiles\u2019"),(0,o.kt)("li",{parentName:"ul"},"Select Keys"),(0,o.kt)("li",{parentName:"ul"},"Click + Icon"),(0,o.kt)("li",{parentName:"ul"},"Enter Key Name (Example: appname_pushkey )"),(0,o.kt)("li",{parentName:"ul"},"Tick \u2018Apple Push Notification service)"),(0,o.kt)("li",{parentName:"ul"},"Click Continue"),(0,o.kt)("li",{parentName:"ul"},"Confirm Register"),(0,o.kt)("li",{parentName:"ul"},"Download and share that file to our team")),(0,o.kt)("h3",{id:"key-id"},"Key ID"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to\xa0developer.apple.com"),(0,o.kt)("li",{parentName:"ol"},"Select \u2018Account\u2019"),(0,o.kt)("li",{parentName:"ol"},"Select \u2018Certificates , Identifiers and Profiles\u2019"),(0,o.kt)("li",{parentName:"ol"},"Select \u2018Keys\u2019"),(0,o.kt)("li",{parentName:"ol"},"Select the key you shared above"),(0,o.kt)("li",{parentName:"ol"},"You will see the Key ID there. Please share that \u2018Key ID\u2019 .")),(0,o.kt)("h3",{id:"team-id"},"Team ID"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to\xa0developer.apple.com"),(0,o.kt)("li",{parentName:"ol"},"Select \u2018Account\u2019 on Nav menu"),(0,o.kt)("li",{parentName:"ol"},"Select \u2018Membership\u2019 on Side Menu"),(0,o.kt)("li",{parentName:"ol"},"Please share that \u2018Team ID\u2019")),(0,o.kt)("h2",{id:"uploading-push-key-firebase-console"},"Uploading Push Key Firebase Console"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to ",(0,o.kt)("a",{parentName:"li",href:"https://console.firebase.google.com/"},"https://console.firebase.google.com/")),(0,o.kt)("li",{parentName:"ol"},"Select your firebase project"),(0,o.kt)("li",{parentName:"ol"},"On Top Left, Click 'Settings' Icon near Project Overview and then Click 'Project Settings'"),(0,o.kt)("li",{parentName:"ol"},"Select \u2018Cloud Messing\u2019 on navbar"),(0,o.kt)("li",{parentName:"ol"},"Under iOS app configuration, Click 'Upload Button' under 'APNs Authentication Key section'"),(0,o.kt)("li",{parentName:"ol"},"Upload push key (.p8) file generated on this section ","[https://portal.tradly.app/docs/appstore#creating-push-key]"),(0,o.kt)("li",{parentName:"ol"},"Enter Key ID (",(0,o.kt)("a",{parentName:"li",href:"https://portal.tradly.app/docs/appstore#key-id"},"https://portal.tradly.app/docs/appstore#key-id")," )"),(0,o.kt)("li",{parentName:"ol"},"Enter Team ID (",(0,o.kt)("a",{parentName:"li",href:"https://portal.tradly.app/docs/appstore#team-id"},"https://portal.tradly.app/docs/appstore#team-id")," )"),(0,o.kt)("li",{parentName:"ol"},"Upload it\nIf it is uploaded without any error, Push key for your project has been successfully configured.")),(0,o.kt)("h2",{id:"download-firebase-plist"},"Download Firebase Plist"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to ",(0,o.kt)("a",{parentName:"li",href:"https://console.firebase.google.com/"},"https://console.firebase.google.com/")),(0,o.kt)("li",{parentName:"ol"},"Select your project (You might have only one project)"),(0,o.kt)("li",{parentName:"ol"},"On Top Left, Click 'Settings' Icon near Project Overview and then Click 'Project Settings'"),(0,o.kt)("li",{parentName:"ol"},"Under General Tab, Go to \u2018Your apps\u2019 section"),(0,o.kt)("li",{parentName:"ol"},"Please select 'iOS app'"),(0,o.kt)("li",{parentName:"ol"},"Click button named 'GoogleService-Info.plist'"),(0,o.kt)("li",{parentName:"ol"},"It will download the Plist file into your system"),(0,o.kt)("li",{parentName:"ol"},"You have to upload this in super admin (Native integrations > Appstore )\nMake sure you see a green labeled notification that it is saved successffuly. ")),(0,o.kt)("h2",{id:"appstore-management"},"Appstore Management"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When the team has access to your Appstore, we will directly upload the app(IPA) to your Testflight "),(0,o.kt)("li",{parentName:"ul"},"You can test this app through Testflight apps on your iPhone to make sure everything is working properly before the release")),(0,o.kt)("h2",{id:"first-release"},"FIRST Release"),(0,o.kt)("p",null,"Once all is good with the testing, you can go ahead and set up a release. "),(0,o.kt)("img",{src:"/img/appstore1.png",alt:"navbar",width:"700"}),(0,o.kt)("img",{src:"/img/appstore2.png",alt:"navbar",width:"700"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Create a new version "),(0,o.kt)("div",{parentName:"li",className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Version Number")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The version number is shown on the App Store and should match the one we used in Xcode.")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Enter "What\'s new in this version"')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Update screenshots (You can take screenshots from the Testflight app )")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Enter promotional text, descriptions, keywords, Support URL, MArketing URL ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Add assets like App store icon, "),(0,o.kt)("div",{parentName:"li",className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"App Review Information")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Provide WORKING sign-in information for apple to sign in to your app and do the review. If you provide the wrong information, it will delay your app review. ")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Notes under App Review information. Below is an example of text what we provide to Apple to guide them on how they can use the app. "),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Steps to experience the app")),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},'You need an approved tenantID before login in to the app. Use "tradlysocial" case sensitive on the first page'),(0,o.kt)("li",{parentName:"ol"},"Use the login address above to follow a store, making a purchase with COD or adding listings, etc. "),(0,o.kt)("li",{parentName:"ol"},"Logout option available in the MORE section through Navbar")))),(0,o.kt)("p",null,"VIDEO GUIDE: ",(0,o.kt)("a",{parentName:"p",href:"https://drive.google.com/file/d/1AZMB1CNFGUsNi4n_GM62a93Xvk9QIpen/view?usp=sharing"},"https://drive.google.com/file/d/1AZMB1CNFGUsNi4n_GM62a93Xvk9QIpen/view?usp=sharing")),(0,o.kt)("h2",{id:"app-review-management"},"App Review Management"),(0,o.kt)("p",null,"Apple may review the app within a week. If you get approved, GREAT! If not, we will help you wherever you can. But remember you need to take care of this place by reading the messages you receive from them, reply properly. If any doubts on what to reply, ask us. "),(0,o.kt)("h2",{id:"app-update"},"App Update"),(0,o.kt)("p",null,"Similar to the app release, we will directly push the app to your Testflight. You can do the same process of testing, creating a release, and pushing the app to Appstore.\nReleasing UPDATE BUILD"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to\xa0",(0,o.kt)("a",{parentName:"li",href:"https://appstoreconnect.apple.com/apps"},"https://appstoreconnect.apple.com/apps")),(0,o.kt)("li",{parentName:"ol"},"Select your app"),(0,o.kt)("li",{parentName:"ol"},"Create new version"),(0,o.kt)("li",{parentName:"ol"},"Enter your version"),(0,o.kt)("li",{parentName:"ol"},"Please fill \u2018Whats new in the version\u2019"),(0,o.kt)("li",{parentName:"ol"},"Scroll down and Go to \u2018Build\u2019 section"),(0,o.kt)("li",{parentName:"ol"},"Please select the latest build you have uploaded on last step ( you can identify by version number and build number )"),(0,o.kt)("li",{parentName:"ol"},"Please select the Release options that you want. ( Automatic or Manual ) ( you can release automatically when apple approved , you can manually release after apple approved ) ."),(0,o.kt)("li",{parentName:"ol"},"Click \u2018Save\u2019"),(0,o.kt)("li",{parentName:"ol"},"Click \u2018Submit for review\u2019")),(0,o.kt)("h2",{id:"ipa-upload-to-appstore-via-transporter"},"IPA Upload to Appstore via transporter"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Uploading App to Appstore Connect via Transporter"),(0,o.kt)("li",{parentName:"ol"},"Download Transporter app from Appstore -\xa0",(0,o.kt)("a",{parentName:"li",href:"https://apps.apple.com/us/app/transporter/id1450874784?mt=12"},"https://apps.apple.com/us/app/transporter/id1450874784?mt=12")),(0,o.kt)("li",{parentName:"ol"},"Login using your apple account"),(0,o.kt)("li",{parentName:"ol"},"Drag and drop the .ipa file delivered by us on Transporter app"),(0,o.kt)("li",{parentName:"ol"},"Click \u2018Delivery\u2019 Button"),(0,o.kt)("li",{parentName:"ol"},"It will take some to upload build to your app store connect\xa0"),(0,o.kt)("li",{parentName:"ol"},"Once build uploaded and it will be available on TestFlight for testing"),(0,o.kt)("li",{parentName:"ol"},"Once testing done, you can create new release and upload build")))}m.isMDXComponent=!0}}]);