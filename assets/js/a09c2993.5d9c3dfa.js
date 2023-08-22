"use strict";(self.webpackChunkmylar_3_website=self.webpackChunkmylar_3_website||[]).push([[128],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8495:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const i={title:"Introduction",description:"Introduction"},o=void 0,l={unversionedId:"introduction",id:"introduction",title:"Introduction",description:"Introduction",source:"@site/docs/introduction.md",sourceDirName:".",slug:"/introduction",permalink:"/mylar3-website/docs/introduction",draft:!1,editUrl:"https://github.com/${organizationName}/${projectName}/tree/main/docs/introduction.md",tags:[],version:"current",frontMatter:{title:"Introduction",description:"Introduction"},sidebar:"docsSidebar",next:{title:"Installation",permalink:"/mylar3-website/docs/category/installation"}},s={},u=[{value:"What is Mylar(3)",id:"what-is-mylar3",level:2},{value:"What it cannot do",id:"what-it-cannot-do",level:2},{value:"Features",id:"features",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"what-is-mylar3"},"What is Mylar(3)"),(0,a.kt)("p",null,"Mylar is an application (built in python) that will allow you to organize, download and manage your existing digital comic collection. "),(0,a.kt)("h2",{id:"what-it-cannot-do"},"What it cannot do"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Manga."),(0,a.kt)("br",{parentName:"p"}),"\n","If you're looking for a manga downloader or organizer, while it may work in some aspects, mylar is not nor will it ever be built to be used with manga."),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create and maintain a watchlist of comic series that will be monitored for upcoming issues, existing issues, etc"),(0,a.kt)("li",{parentName:"ul"},"Abliity to be run on various OS' (windows, linux, macOS, Raspberry Pi, etc)"),(0,a.kt)("li",{parentName:"ul"},"Support for SABnzbd, NZBGet and various torrent clients (as well as Blackhole)"),(0,a.kt)("li",{parentName:"ul"},"Multiple newznabs support, prowlarr support"),(0,a.kt)("li",{parentName:"ul"},"Raw indexer and direct download (DDL) being available to use out of the gate"),(0,a.kt)("li",{parentName:"ul"},"Ability to see upcoming new releases for a particular week and take action on them if required"),(0,a.kt)("li",{parentName:"ul"},"View pullists up to 4 weeks in advance, or go back in the past up to several months prior"),(0,a.kt)("li",{parentName:"ul"},"TPB's and GN's are both supported as far as monitoring and post-processing (not import atm)"),(0,a.kt)("li",{parentName:"ul"},"Can scan your existing library and download any missing issues to help fill in the gaps"),(0,a.kt)("li",{parentName:"ul"},"Failed download handling will download a new issue if one fails"),(0,a.kt)("li",{parentName:"ul"},"Configurable file and folder renaming"),(0,a.kt)("li",{parentName:"ul"},"Metatagging of issues via modified version of the awesome ComicTagger "),(0,a.kt)("li",{parentName:"ul"},"Will automatically meta-tag downloaded issues either during (post-processing) or after (manual post-processing)"),(0,a.kt)("li",{parentName:"ul"},"Generation of series.json files which contain series information for 3rd party applications"),(0,a.kt)("li",{parentName:"ul"},"Notification on snatches / downloads using various notif applications"),(0,a.kt)("li",{parentName:"ul"},"Ability to add a story arc, monitor providers for missing / new issues and organize them all together as required")))}d.isMDXComponent=!0}}]);