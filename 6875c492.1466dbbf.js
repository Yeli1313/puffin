(window.webpackJsonp=window.webpackJsonp||[]).push([[53,20],{154:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(213),l=t(236),s=t(209);a.default=function(e){const{metadata:a,items:t}=e,{allTagsPath:n,name:i,count:o}=a;return r.a.createElement(c.a,{title:`Posts tagged "${i}"`,description:`Blog | Tagged "${i}"`},r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("main",{className:"col col--8 col--offset-2"},r.a.createElement("h1",null,o," ",function(e,a){return e>1?a+"s":a}(o,"post"),' tagged with "',i,'"'),r.a.createElement(s.a,{href:n},"View All Tags"),r.a.createElement("div",{className:"margin-vert--xl"},t.map(({content:e})=>r.a.createElement(l.a,{key:e.metadata.permalink,frontMatter:e.frontMatter,metadata:e.metadata,truncated:!0},r.a.createElement(e,null))))))))}},214:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(211),l=t.n(c),s=t(35);t(95);a.a=e=>{const[a,c]=Object(n.useState)(!0),i=Object(n.useRef)(null),o=Object(n.useContext)(s.a);Object(n.useEffect)(()=>{const{siteConfig:e={}}=o,{themeConfig:{algolia:a}}=e;"undefined"!=typeof window?Promise.all([t.e(4),t.e(101),t.e(105)]).then(t.t.bind(null,215,7)).then(({default:e})=>{e({appId:a.appId,apiKey:a.apiKey,indexName:a.indexName,inputSelector:"#search_input_react",algoliaOptions:a.algoliaOptions})}):(console.warn("Search has failed to load and now is being disabled"),c(!1))},[]);const d=Object(n.useCallback)(a=>{i.current.contains(a.target)||i.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)},[e.isSearchBarExpanded]);return a?r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{role:"button",className:l()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:d,onKeyDown:d,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:l()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onFocus:d,onBlur:d,ref:i})):null}}}]);