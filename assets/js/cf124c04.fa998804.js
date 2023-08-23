"use strict";(self.webpackChunkmylar_3_website=self.webpackChunkmylar_3_website||[]).push([[224],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>h});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(o),m=r,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return o?n.createElement(h,a(a({ref:t},c),{},{components:o})):n.createElement(h,a({ref:t},c))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,a[1]=l;for(var p=2;p<i;p++)a[p]=o[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},931:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=o(7462),r=(o(7294),o(3905));const i={title:"Download Options"},a=void 0,l={unversionedId:"guides/download_options",id:"guides/download_options",title:"Download Options",description:"Post-processing",source:"@site/docs/guides/download_options.md",sourceDirName:"guides",slug:"/guides/download_options",permalink:"/mylar3-website/docs/guides/download_options",draft:!1,editUrl:"https://github.com/${organizationName}/${projectName}/tree/main/docs/guides/download_options.md",tags:[],version:"current",frontMatter:{title:"Download Options"},sidebar:"docsSidebar",previous:{title:"Automatic Backups",permalink:"/mylar3-website/docs/guides/auto_backups"},next:{title:"CDH / ComicRN",permalink:"/mylar3-website/docs/guides/cdh_comicrn"}},s={},p=[{value:"Post-processing",id:"post-processing",level:2},{value:"DDL",id:"ddl",level:3},{value:"Newsgroups",id:"newsgroups",level:3},{value:"Torrents",id:"torrents",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"post-processing"},"Post-processing"),(0,r.kt)("p",null,"It is imperative that you enable the post-processing option if you require post-processing (",(0,r.kt)("em",{parentName:"p"},"Configuration --\x3e Quality & Post-Processing --\x3e Enable Post-Processing"),")"),(0,r.kt)("h3",{id:"ddl"},"DDL"),(0,r.kt)("p",null,"When using DDL, post-processing will be initiated immediately upon successful completion. By default the items are downloaded to the cache directory location and removed after post-processing. However, if you wish to change the default directory location, specify the full directory location in the config.ini ",(0,r.kt)("inlineCode",{parentName:"p"},"ddl_location")," field."),(0,r.kt)("h3",{id:"newsgroups"},"Newsgroups"),(0,r.kt)("p",null,"There are 2 ways to perform post-processing within Mylar (CDH & ComicRN detailed ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mylar3/mylar3/wiki/CDH-or-ComicRN"},"here"),"), however you cannot use both options simultaneously. "),(0,r.kt)("h3",{id:"torrents"},"Torrents"),(0,r.kt)("p",null,"There is no completed processing for torrents. There are methods available however:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Torrent client on same machine as Mylar installation")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Configuration tab --\x3e Quality & Post-Processing --\x3e Post-Processing")),(0,r.kt)("li",{parentName:"ul"},"set the post-processing action to copy if you want to seed your torrents, otherwise move",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Enable Folder Monitoring"),(0,r.kt)("li",{parentName:"ul"},"Folder location to monitor: set to the full location where your finished torrents are downloaded to."),(0,r.kt)("li",{parentName:"ul"},"Folder Monitor Scan Interval: do NOT set this to < 1 minute. Anywhere from 3-5 minutes should be ample.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Torrent client on different machine than Mylar")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/evilhero/harpoon/"},"harpoon")," to retrieve items back to your local install as soon as they are completed and have post-processing occur immediately (also works with other automated solutions)."),(0,r.kt)("li",{parentName:"ul"},"Any other method that involves having the files localized and then have Folder Monitor monitor the location for files.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Torrent client (rtorrent/deluge) on different machine than Mylar")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a built-in option for these clients that will monitor for completion and then perform post-processing on the given items."),(0,r.kt)("li",{parentName:"ul"},"files are located in the ",(0,r.kt)("inlineCode",{parentName:"li"},"post-processing/torrent-auto-snatch")," location within the mylar directory."),(0,r.kt)("li",{parentName:"ul"},"read the read.me therein for configuration / setup.")))}d.isMDXComponent=!0}}]);