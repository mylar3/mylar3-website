"use strict";(self.webpackChunkmylar_3_website=self.webpackChunkmylar_3_website||[]).push([[3399],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,g=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return r?n.createElement(g,o(o({ref:t},c),{},{components:r})):n.createElement(g,o({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4558:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const i={},o="[API] regenerateCovers",l={unversionedId:"api/regeneratecovers",id:"api/regeneratecovers",title:"[API] regenerateCovers",description:"action: regenerate the image covers for series in the watchlist in a single-threaded background job.",source:"@site/docs/api/regeneratecovers.md",sourceDirName:"api",slug:"/api/regeneratecovers",permalink:"/docs/api/regeneratecovers",draft:!1,editUrl:"https://github.com/${organizationName}/${projectName}/tree/main/docs/api/regeneratecovers.md",tags:[],version:"current",frontMatter:{}},p={},s=[],c={toc:s},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"api-regeneratecovers"},"[API]"," regenerateCovers"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"action"),": regenerate the image covers for series in the watchlist in a single-threaded background job."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"restrictions"),": "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"4 second pause between each individual image retrieval to try not to hammer CV with requests."),(0,a.kt)("li",{parentName:"ul"},"argument provided will restrict the data-set.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"argument required")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"id")," --\x3e ",(0,a.kt)("em",{parentName:"p"},"(only one may be chosen)"),":"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"A specific comicid ",(0,a.kt)("em",{parentName:"p"},"(not 4050-XXXXXX, but just XXXXXX)"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"in list format ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"[ (XXXXX, XXXXX, XXXXX) ]")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"missing")," --\x3e will perform action on all series that do not currently have a cover image file.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"all")," --\x3e will perform action on all series in the watchlist."))))),(0,a.kt)("p",null,"response Type: json"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"example calls (with responses):")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:8090/api?cmd=regenerateCovers&id=missing&apikey=<apikey>")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-JSON"},' {\n  "success": true, \n  "data": "RegenerateCovers successfully submitted for 55 series."\n }\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:8090/api?cmd=regenerateCovers&id=all&apikey=<apikey>")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n "success": true, \n "data": "RegenerateCovers successfully submitted for 1064 series."\n}\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:8090/api?cmd=regenerateCovers&id=38911&apikey=<apikey>")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n "success": true, \n "data": "RegenerateCovers successfully submitted for 1 series."\n}\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:8090/api?cmd=regenerateCovers&id=[(38911,38912,47182,83891,112191)]&apikey=<apikey>")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n "success": true, \n "data": "RegenerateCovers successfully submitted for 5 series."\n}\n')))}m.isMDXComponent=!0}}]);