"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[50531],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=c(r),u=a,m=f["".concat(l,".").concat(u)]||f[u]||d[u]||i;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},28522:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={},o="Interface: PreparedTransactionData",s={unversionedId:"references/nodejs/interfaces/PreparedTransactionData",id:"references/nodejs/interfaces/PreparedTransactionData",title:"Interface: PreparedTransactionData",description:"Prepared transaction data, useful for offline signing.",source:"@site/next/external/wallet.rs/documentation/docs/references/nodejs/interfaces/PreparedTransactionData.md",sourceDirName:"references/nodejs/interfaces",slug:"/references/nodejs/interfaces/PreparedTransactionData",permalink:"/next/wallet.rs/references/nodejs/interfaces/PreparedTransactionData",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/develop/documentation/next/external/wallet.rs/documentation/docs/references/nodejs/interfaces/PreparedTransactionData.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Interface: OutputOptions",permalink:"/next/wallet.rs/references/nodejs/interfaces/OutputOptions"},next:{title:"Interface: RemainderData",permalink:"/next/wallet.rs/references/nodejs/interfaces/RemainderData"}},l={},c=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"essence",id:"essence",level:3},{value:"inputsData",id:"inputsdata",level:3},{value:"remainder",id:"remainder",level:3}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"interface-preparedtransactiondata"},"Interface: PreparedTransactionData"),(0,a.kt)("p",null,"Prepared transaction data, useful for offline signing."),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/wallet.rs/references/nodejs/interfaces/PreparedTransactionData#essence"},"essence")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/wallet.rs/references/nodejs/interfaces/PreparedTransactionData#inputsdata"},"inputsData")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/wallet.rs/references/nodejs/interfaces/PreparedTransactionData#remainder"},"remainder"))),(0,a.kt)("h2",{id:"properties-1"},"Properties"),(0,a.kt)("h3",{id:"essence"},"essence"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"essence"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"ITransactionEssence")),(0,a.kt)("p",null,"Transaction essence"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"inputsdata"},"inputsData"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"inputsData"),": ",(0,a.kt)("a",{parentName:"p",href:"/next/wallet.rs/references/nodejs/interfaces/InputSigningData"},(0,a.kt)("inlineCode",{parentName:"a"},"InputSigningData")),"[]"),(0,a.kt)("p",null,"Required address information for signing"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"remainder"},"remainder"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"remainder"),": ",(0,a.kt)("a",{parentName:"p",href:"/next/wallet.rs/references/nodejs/interfaces/RemainderData"},(0,a.kt)("inlineCode",{parentName:"a"},"RemainderData"))),(0,a.kt)("p",null,"Optional remainder output information"))}d.isMDXComponent=!0}}]);