"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[58766],{84637:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],l={description:"Getting started with the official IOTA Client Library Node.js binding.",image:"/img/logo/iota_mark_light.png",keywords:["Node.js","dotenv","install","npm","yarn","security","how to"]},s="Getting Started With Node.js",c={unversionedId:"libraries/nodejs/getting_started",id:"libraries/nodejs/getting_started",title:"Getting Started With Node.js",description:"Getting started with the official IOTA Client Library Node.js binding.",source:"@site/external/iota.rs/documentation/docs/libraries/nodejs/getting_started.md",sourceDirName:"libraries/nodejs",slug:"/libraries/nodejs/getting_started",permalink:"/iota.rs/libraries/nodejs/getting_started",editUrl:"https://github.com/iotaledger/iota.rs/edit/mainnet/external/iota.rs/documentation/docs/libraries/nodejs/getting_started.md",tags:[],version:"current",frontMatter:{description:"Getting started with the official IOTA Client Library Node.js binding.",image:"/img/logo/iota_mark_light.png",keywords:["Node.js","dotenv","install","npm","yarn","security","how to"]},sidebar:"docs",previous:{title:"API Reference",permalink:"/iota.rs/libraries/rust/api_reference"},next:{title:"Examples",permalink:"/iota.rs/libraries/nodejs/examples"}},u={},d=[{value:"Requirements",id:"requirements",level:2},{value:"Installing the Library",id:"installing-the-library",level:2},{value:"NPM",id:"npm",level:3},{value:"Yarn",id:"yarn",level:3},{value:"Using the Library",id:"using-the-library",level:2}],p={toc:d};function g(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started-with-nodejs"},"Getting Started With Node.js"),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("p",null,"Before you can get started with the Node.js binding for the iota.rs client library, please make sure that you have\ninstalled ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/en/"},"Node"),",\n",(0,a.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/cargo/getting-started/installation.html"},"Rust and Cargo"),", and ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"NPM"),"\nor ",(0,a.kt)("a",{parentName:"p",href:"https://yarnpkg.com/"},"Yarn"),"."),(0,a.kt)("h2",{id:"installing-the-library"},"Installing the Library"),(0,a.kt)("h3",{id:"npm"},"NPM"),(0,a.kt)("p",null,"If you are using NPM, you can install the binding in your project by running the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @iota/client\n")),(0,a.kt)("h3",{id:"yarn"},"Yarn"),(0,a.kt)("p",null,"If you are using Yarn, you can install the binding in your project by running the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @iota/client\n")),(0,a.kt)("h2",{id:"using-the-library"},"Using the Library"),(0,a.kt)("p",null,"The following example shows you how to include the library and connect to a devnet node. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const { ClientBuilder } = require('@iota/client')\nconst client = new ClientBuilder()\n    .node('https://api.lb-0.h.chrysalis-devnet.iota.cafe')\n    .build()\nclient.getInfo().then(console.log).catch(console.error)\n")))}g.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),g=i,m=p["".concat(s,".").concat(g)]||p[g]||d[g]||a;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);