(window.webpackJsonp=window.webpackJsonp||[]).push([[5,20],{105:function(e,a,n){"use strict";n.r(a);n(14);var t=n(0),r=n.n(t),c=n(213),s=n(209);a.default=function(e){const{tags:a}=e,n={};Object.keys(a).forEach(e=>{const a=function(e){return e[0].toUpperCase()}(e);n[a]=n[a]||[],n[a].push(e)});const t=Object.entries(n).sort(([e],[a])=>e===a?0:e>a?1:-1).map(([e,n])=>r.a.createElement("div",{key:e},r.a.createElement("h3",null,e),n.map(e=>r.a.createElement(s.a,{className:"padding-right--md",href:a[e].permalink,key:e},a[e].name," (",a[e].count,")")),r.a.createElement("hr",null))).filter(e=>null!=e);return r.a.createElement(c.a,{title:"Tags",description:"Blog Tags"},r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("main",{className:"col col--8 col--offset-2"},r.a.createElement("h1",null,"Tags"),r.a.createElement("div",{className:"margin-vert--lg"},t)))))}},214:function(e,a,n){"use strict";var t=n(0),r=n.n(t),c=n(211),s=n.n(c),l=n(35);n(95);a.a=e=>{const[a,c]=Object(t.useState)(!0),i=Object(t.useRef)(null),o=Object(t.useContext)(l.a);Object(t.useEffect)(()=>{const{siteConfig:e={}}=o,{themeConfig:{algolia:a}}=e;"undefined"!=typeof window?Promise.all([n.e(4),n.e(101),n.e(105)]).then(n.t.bind(null,215,7)).then(({default:e})=>{e({appId:a.appId,apiKey:a.apiKey,indexName:a.indexName,inputSelector:"#search_input_react",algoliaOptions:a.algoliaOptions})}):(console.warn("Search has failed to load and now is being disabled"),c(!1))},[]);const d=Object(t.useCallback)(a=>{i.current.contains(a.target)||i.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)},[e.isSearchBarExpanded]);return a?r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{role:"button",className:s()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:d,onKeyDown:d,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:s()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onFocus:d,onBlur:d,ref:i})):null}}}]);