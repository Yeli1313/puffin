(window.webpackJsonp=window.webpackJsonp||[]).push([[104,20],{214:function(e,a,n){"use strict";var t=n(0),r=n.n(t),c=n(211),o=n.n(c),l=n(35);n(95);a.a=e=>{const[a,c]=Object(t.useState)(!0),i=Object(t.useRef)(null),s=Object(t.useContext)(l.a);Object(t.useEffect)(()=>{const{siteConfig:e={}}=s,{themeConfig:{algolia:a}}=e;"undefined"!=typeof window?Promise.all([n.e(4),n.e(101),n.e(105)]).then(n.t.bind(null,215,7)).then(({default:e})=>{e({appId:a.appId,apiKey:a.apiKey,indexName:a.indexName,inputSelector:"#search_input_react",algoliaOptions:a.algoliaOptions})}):(console.warn("Search has failed to load and now is being disabled"),c(!1))},[]);const d=Object(t.useCallback)(a=>{i.current.contains(a.target)||i.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)},[e.isSearchBarExpanded]);return a?r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{role:"button",className:o()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:d,onKeyDown:d,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:o()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onFocus:d,onBlur:d,ref:i})):null}},244:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),c=n(213);a.default=function(){return r.a.createElement(c.a,{title:"Page Not Found"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);