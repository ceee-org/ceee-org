"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[82866],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),h=a,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||i;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},82458:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={description:"The `wallet.rs` library is written in Rust. You can also find three bindings written in Node.js, Python and Java.",image:"/img/logo/wallet_light.png",keywords:["bindings","library","rust","python","node.js","account","multiple"]},o="IOTA Wallet Libraries",l={unversionedId:"libraries/overview",id:"libraries/overview",title:"IOTA Wallet Libraries",description:"The `wallet.rs` library is written in Rust. You can also find three bindings written in Node.js, Python and Java.",source:"@site/content/build/wallet.rs/develop/documentation/docs/libraries/overview.md",sourceDirName:"libraries",slug:"/libraries/overview",permalink:"/wallet.rs/develop/libraries/overview",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/develop/documentation/content/build/wallet.rs/develop/documentation/docs/libraries/overview.md",tags:[],version:"current",frontMatter:{description:"The `wallet.rs` library is written in Rust. You can also find three bindings written in Node.js, Python and Java.",image:"/img/logo/wallet_light.png",keywords:["bindings","library","rust","python","node.js","account","multiple"]},sidebar:"docs",previous:{title:"Overview",permalink:"/wallet.rs/develop/overview"},next:{title:"Getting Started with Rust",permalink:"/wallet.rs/develop/libraries/rust/getting_started"}},s={},c=[{value:"Getting Started",id:"getting-started",level:2},{value:"The Library in a Nutshell",id:"the-library-in-a-nutshell",level:2}],u={toc:c};function d(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"iota-wallet-libraries"},"IOTA Wallet Libraries"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"wallet.rs")," library is written in Rust.  You can also find a binding written in Node.js."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/wallet.rs/develop/libraries/rust/getting_started"},"Rust")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/wallet.rs/develop/libraries/nodejs/getting_started"},"Node.js")," ")),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"We recommended that you start your interactions with IOTA on a ",(0,a.kt)("em",{parentName:"p"},"testnet")," network. The ",(0,a.kt)("em",{parentName:"p"},"testnet")," will allow you to safely get acquainted with the ",(0,a.kt)("inlineCode",{parentName:"p"},"wallet.rs")," library, without the risk of losing any funds if you make a mistake along the way. You can use this API load balancer: ",(0,a.kt)("inlineCode",{parentName:"p"},"https://api.testnet.shimmer.network"),"  "),(0,a.kt)("p",null,"A network explorer is available at ","[IOTA Tangle Explorer]","(TODO: set correct explorer link).  You can use the network explorer to view transactions and data stored in the IOTA Tangle.    "),(0,a.kt)("p",null,"In order to properly test value-based transactions on testnet network, you are going to need some tokens! You can get some testnet tokens through our ",(0,a.kt)("a",{parentName:"p",href:"https://faucet.testnet.shimmer.network"},"faucet"),"."),(0,a.kt)("h2",{id:"the-library-in-a-nutshell"},"The Library in a Nutshell"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"wallet.rs")," uses an account model, so you can create an account for each of your users. You could also take another approach and use one account and generate many addresses, which you can link to your users in your database. "),(0,a.kt)("p",null,"The library allows users to assign a meaningful alias to each account. Users may also segregate their funds across multiple accounts or multiple addresses. It is up to a developer whether he chooses a single-account approach or multi-account approach."),(0,a.kt)("p",null,"The library is based on a ",(0,a.kt)("a",{parentName:"p",href:"https://chrysalis.docs.iota.org/guides/dev_guide#addresskey-space"},"derivation for multiple accounts from a single seed"),". An account is simply a deterministic identifier from which multiple addresses can be further derived. "),(0,a.kt)("p",null,"The following image illustrates the relationships between seed, accounts and addresses.  A single seed can contain multiple accounts.  Each account can also have multiple addresses which can be linked to users in your database. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Seed, accounts and Addresses",src:r(23672).Z,width:"1280",height:"720"})))}d.isMDXComponent=!0},23672:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/accounts_addresses-02801ccd82ae57c55e2aca45dbaa5a9a.svg"}}]);