"use strict";(self.webpackChunkmylar_3_website=self.webpackChunkmylar_3_website||[]).push([[434],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,k=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(k,l(l({ref:t},p),{},{components:n})):r.createElement(k,l({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5917:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={title:"Docker",description:"How to install via Docker image"},l="Installation - Docker Image",i={unversionedId:"installation/docker",id:"installation/docker",title:"Docker",description:"How to install via Docker image",source:"@site/docs/installation/docker.md",sourceDirName:"installation",slug:"/installation/docker",permalink:"/docs/installation/docker",draft:!1,editUrl:"https://github.com/${organizationName}/${projectName}/tree/main/docs/installation/docker.md",tags:[],version:"current",frontMatter:{title:"Docker",description:"How to install via Docker image"},sidebar:"docsSidebar",previous:{title:"Official methods",permalink:"/docs/category/official-methods"},next:{title:"From Source",permalink:"/docs/category/from-source"}},c={},s=[{value:"Requirements",id:"requirements",level:2},{value:"Installation",id:"installation",level:2}],p={toc:s},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installation---docker-image"},"Installation - Docker Image"),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("p",null,"In addition to the ",(0,a.kt)("a",{parentName:"p",href:"base_requirements"},"base requirements"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/"},"docker")," compatible runtime"),(0,a.kt)("li",{parentName:"ul"},"basic understanding of the command line"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/"},"docker-compose")," ","[","optional","]")),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Pull the docker image of choice"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"For ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/mylar3/mylar3/tree/master"},"stable")," releases: ",(0,a.kt)("inlineCode",{parentName:"li"},"docker pull lscr.io/linuxserver/mylar3:latest")),(0,a.kt)("li",{parentName:"ul"},"For ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/mylar3/mylar3/tree/python3-dev"},"development")," releases: ",(0,a.kt)("inlineCode",{parentName:"li"},"docker pull lscr.io/linuxserver/mylar3:nightly"))),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"BE AWARE"),": If the development releases break, you get to keep the parts.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run the image"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Using ",(0,a.kt)("inlineCode",{parentName:"p"},"docker run"),":"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"  docker run -d \\\n  --name=mylar3 \\\n  -e PUID=1000 \\\n  -e PGID=1000 \\\n  -e TZ=Etc/UTC \\\n  -p 8090:8090 \\\n  -v /path/to/data:/config \\\n  -v /path/to/comics:/comics \\\n  -v /path/to/downloads:/downloads \\\n  --restart unless-stopped \\\n  lscr.io/linuxserver/mylar3:latest\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Using ",(0,a.kt)("inlineCode",{parentName:"p"},"docker compose"),":"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "2.1"\nservices:\nmylar3:\n    image: lscr.io/linuxserver/mylar3:latest\n    container_name: mylar3\n    environment:\n    - PUID=1000\n    - PGID=1000\n    - TZ=Etc/UTC\n    volumes:\n    - /path/to/data:/config\n    - /path/to/comics:/comics\n    - /path/to/downloads:/downloads\n    ports:\n    - 8090:8090\n    restart: unless-stopped\n    ```\n'))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Access the Web Interface under ",(0,a.kt)("inlineCode",{parentName:"p"},"http://<your-host>:8090")))))}u.isMDXComponent=!0}}]);