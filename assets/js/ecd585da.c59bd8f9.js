"use strict";(self.webpackChunkmylar_3_website=self.webpackChunkmylar_3_website||[]).push([[643],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),f=a,d=u["".concat(s,".").concat(f)]||u[f]||m[f]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3682:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={},i="[API] changeStatus",p={unversionedId:"api/changestatus",id:"api/changestatus",title:"[API] changeStatus",description:"action: Change the status of a specific series, or all series from one status to another.",source:"@site/docs/api/changestatus.md",sourceDirName:"api",slug:"/api/changestatus",permalink:"/docs/api/changestatus",draft:!1,editUrl:"https://github.com/${organizationName}/${projectName}/tree/main/docs/api/changestatus.md",tags:[],version:"current",frontMatter:{}},s={},l=[],c={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"api-changestatus"},"[API]"," changeStatus"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"action"),": Change the status of a specific series, or all series from one status to another."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"restrictions"),": "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"action will be restricted based on options used.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"argument required")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"id")," --\x3e ",(0,a.kt)("em",{parentName:"p"},"(only one may be chosen)"),":"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"A specific comicid ",(0,a.kt)("em",{parentName:"p"},"(not 4050-XXXXXX, but just XXXXXX)"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"All")," --\x3e will perform action on all series in the watchlist.")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"status_from")," --\x3e status' to change from")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"status_to")," --\x3e what the status' will be upon completion"))),(0,a.kt)("p",null,"response Type: json"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"example call (with response):")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:8090/api?cmd=changeStatus&id=All&status_from=Skipped&status_to=Wanted&apikey=<apikey>")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-JSON"},' {\n  "success": true, \n  "data": "Updated 55 Issues from a status of Skipped to Wanted."\n }\n')))}m.isMDXComponent=!0}}]);