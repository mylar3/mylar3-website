"use strict";(self.webpackChunkmylar_3_website=self.webpackChunkmylar_3_website||[]).push([[827],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,d=u["".concat(s,".").concat(m)]||u[m]||h[m]||i;return n?a.createElement(d,o(o({ref:t},c),{},{components:n})):a.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2175:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={title:"Basic Usage"},o=void 0,l={unversionedId:"usage",id:"usage",title:"Basic Usage",description:"From a command line/shell and in the location where Mylar is installed - typing  Mylar.py --help will give a list of available options, and/or removing the `--help` switch will start Mylar.",source:"@site/docs/usage.md",sourceDirName:".",slug:"/usage",permalink:"/docs/usage",draft:!1,editUrl:"https://github.com/${organizationName}/${projectName}/tree/main/docs/usage.md",tags:[],version:"current",frontMatter:{title:"Basic Usage"}},s={},p=[{value:"It&#39;s running - now what?",id:"its-running---now-what",level:2},{value:"Other Important Notes",id:"other-important-notes",level:2}],c={toc:p},u="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"From a command line/shell and in the location where Mylar is installed - typing ",(0,r.kt)("inlineCode",{parentName:"p"},"<python executable> Mylar.py --help")," will give a list of available options, and/or removing the ",(0,r.kt)("inlineCode",{parentName:"p"},"--help")," switch will start Mylar."),(0,r.kt)("p",null,"When Mylar is ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mylar3/mylar3/wiki/Installation-Instructions#how-to-start-mylar"},"first started"),", it will generate a default config.ini, a mylar.db and will listen on the local interface only. Here are the 2 most common setups:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Mylar is on same machine as the browser you're going to use:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Browse to ",(0,r.kt)("inlineCode",{parentName:"li"},"http://localhost:8090")," / ",(0,r.kt)("inlineCode",{parentName:"li"},"http://127.0.0.1:8090")))),(0,r.kt)("li",{parentName:"ul"},"Mylar is on a different machine than the browser you're going to use:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Start Mylar up, then shut it down (so that the config.ini is generated)."),(0,r.kt)("li",{parentName:"ul"},"edit the config.ini (located in the main directory of the mylar installation)."),(0,r.kt)("li",{parentName:"ul"},"locate the field ",(0,r.kt)("inlineCode",{parentName:"li"},"http_host")," under the ","[Interface]"," heading within the config.ini"),(0,r.kt)("li",{parentName:"ul"},"set the value to either ",(0,r.kt)("inlineCode",{parentName:"li"},"0.0.0.0")," if you want Mylar to listen to all interfaces (including external), or the local IP address if you want any other local network devices to have access."),(0,r.kt)("li",{parentName:"ul"},"save the config, close it down. Then start up Mylar as per normal usage."),(0,r.kt)("li",{parentName:"ul"},"Browse to ",(0,r.kt)("inlineCode",{parentName:"li"},"http://<mylar machine IP>:8090")),(0,r.kt)("li",{parentName:"ul"},"Note that if you are allowing Mylar to have external access (0.0.0.0), you should set a username/password within the configuration of Mylar to help ensure that no unauthorised access will take place.")))),(0,r.kt)("h2",{id:"its-running---now-what"},"It's running - now what?"),(0,r.kt)("p",null,"The 2 most important things you need prior to doing anything:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"add your ComicVine API Key"),(0,r.kt)("li",{parentName:"ul"},"set your Comic Location path")),(0,r.kt)("p",null,"Both are set via the gears icon (configuration settings) located in the upper right of the page:"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"ComicVine API Key"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Set the ",(0,r.kt)("strong",{parentName:"li"},"ComicVine (CV) API Key")," on the ",(0,r.kt)("em",{parentName:"li"},"2nd")," tab of the ",(0,r.kt)("em",{parentName:"li"},"Configuration page")," (Web Interface). Make sure that there are no spaces at the beginning and end, as well as removing the word None if it's present prior to entering the key. Without the CV API Key, Mylar cannot search/add/update series, so it's kind of important.")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"Comic Location path"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Just beneath that is the ",(0,r.kt)("strong",{parentName:"li"},"Comic Location")," field. This is the location where you want Mylar to start storing comics (ie. the root) - when adding series, post-processing issues, metatagging, renaming, etc this location is where Mylar will both look and send files (unless changed). Directories will be created beneath the path specified, in the format that is specified (this is called Folder Format and is on the Advanced Settings tab of the Configuration).")),(0,r.kt)("h2",{id:"other-important-notes"},"Other Important Notes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In order for Mylar to properly manage everything beneath this folder - it has to have complete access to the folder/sub-folders. In Linux terms, that's a ",(0,r.kt)("inlineCode",{parentName:"p"},"7")," on the octet scale depending on if the user running mylar is the owner of the folder, or is part of the group. Windows permissions should be the typical ",(0,r.kt)("inlineCode",{parentName:"p"},"+rwx"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If you set your Comic Location path to a remote location (ie. not on the same physical machine as Mylar), even if it's within your internal LAN, you need to ensure that the ",(0,r.kt)("strong",{parentName:"p"},"Enforce Permissions")," option is Disabled (Configuration tab / Web Interface). While some users can enable this and not have any problems due to their mounting setup, the vast majority of users using remote mounts will encounter problems creating directories, moving files, etc if this is enabled. Disabling it just means that your OS will handle the permissions which are usually enforced from the parent directory.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Docker Users"),": Mylar can't read your docker-compose file, so it cannot know what your mounts points are without you telling it where they are. Which means you NEED to set the Comic Location path to whatever you mounted it as within the docker. Setting it in the just the compose file (or via CLI) and calling it a day will not work."))))}h.isMDXComponent=!0}}]);