"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[47545],{3905:function(t,e,r){r.d(e,{Zo:function(){return m},kt:function(){return u}});var n=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var c=n.createContext({}),l=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):a(a({},e),t)),r},m=function(t){var e=l(t.components);return n.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,i=t.originalType,c=t.parentName,m=s(t,["components","mdxType","originalType","parentName"]),p=l(r),u=o,h=p["".concat(c,".").concat(u)]||p[u]||d[u]||i;return r?n.createElement(h,a(a({ref:e},m),{},{components:r})):n.createElement(h,a({ref:e},m))}));function u(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=r.length,a=new Array(i);a[0]=p;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},7868:function(t,e,r){r.r(e),r.d(e,{assets:function(){return m},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],s={description:"The current release of IOTA Smart Contracts also has experimental support for EVM/Solidity, providing limited compatibility with existing smart contracts and tooling from other EVM based chains like Ethereum.",image:"/img/logo/WASP_logo_dark.png",keywords:["EVM","Solidity","smart contracts","Ethereum","explanation"]},c="EVM/Solidity Based Smart Contracts",l={unversionedId:"guide/evm/introduction",id:"guide/evm/introduction",title:"EVM/Solidity Based Smart Contracts",description:"The current release of IOTA Smart Contracts also has experimental support for EVM/Solidity, providing limited compatibility with existing smart contracts and tooling from other EVM based chains like Ethereum.",source:"@site/content/build/wasp/develop/documentation/docs/guide/evm/introduction.md",sourceDirName:"guide/evm",slug:"/guide/evm/introduction",permalink:"/smart-contracts/develop/guide/evm/introduction",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/develop/documentation/content/build/wasp/develop/documentation/docs/guide/evm/introduction.md",tags:[],version:"current",frontMatter:{description:"The current release of IOTA Smart Contracts also has experimental support for EVM/Solidity, providing limited compatibility with existing smart contracts and tooling from other EVM based chains like Ethereum.",image:"/img/logo/WASP_logo_dark.png",keywords:["EVM","Solidity","smart contracts","Ethereum","explanation"]},sidebar:"tutorialSidebar",previous:{title:"Colored Tokens and Time Locks",permalink:"/smart-contracts/develop/guide/schema/timelock"},next:{title:"EVM compatibility in IOTA Smart Contracts",permalink:"/smart-contracts/develop/guide/evm/compatibility"}},m={},d=[{value:"What is EVM/Solidity",id:"what-is-evmsolidity",level:3},{value:"How IOTA Smart Contracts Work With EVM",id:"how-iota-smart-contracts-work-with-evm",level:3}],p={toc:d};function u(t){var e=t.components,r=(0,o.Z)(t,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"evmsolidity-based-smart-contracts"},"EVM/Solidity Based Smart Contracts"),(0,i.kt)("p",null,"The current release of IOTA Smart Contracts has experimental support for\nEVM/Solidity smart contracts as well as Wasm based smart contracts, providing\nlimited compatibility with existing smart contracts and tooling from other EVM\nbased chains like Ethereum. This allows us to offer the existing ecosystem\naround EVM/Solidity a familiar alternative."),(0,i.kt)("h3",{id:"what-is-evmsolidity"},"What is EVM/Solidity"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://ethereum.org/en/developers/docs/evm/"},"EVM"),' stands for "Ethereum Virtual Machine", and is currently the tried and proven virtual machine running most smart contract implementations.\n',(0,i.kt)("a",{parentName:"p",href:"https://soliditylang.org/"},"Solidity")," is the programming language of choice with EVM, being created for this specific purpose."),(0,i.kt)("p",null,"The main benefit of using EVM/Solidity right now is the sheer amount of resources available from it from years of development and experimentation on Ethereum. There are many articles, tutorials, examples and tools available for EVM/Solidity, and the IOTA Smart Contracts implementation is fully compatible with them. If you have experience developing on other EVM based chains you will feel right at home, and any existing contracts you've written will probably need no (or very minimal) changes to function on IOTA Smart Contracts as well."),(0,i.kt)("h3",{id:"how-iota-smart-contracts-work-with-evm"},"How IOTA Smart Contracts Work With EVM"),(0,i.kt)("p",null,"Every deployed IOTA Smart Contracts chain automatically includes a core contract called ",(0,i.kt)("inlineCode",{parentName:"p"},"evm"),". This core contract is responsible for running EVM code and storing the EVM state. The Wasp node also provides a standard JSON-RPC service, which allows you to interact with the EVM layer using existing tooling like ",(0,i.kt)("a",{parentName:"p",href:"https://metamask.io/"},"MetaMask"),", ",(0,i.kt)("a",{parentName:"p",href:"https://remix.ethereum.org/"},"Remix")," or ",(0,i.kt)("a",{parentName:"p",href:"https://hardhat.org/"},"Hardhat"),". Deploying EVM contracts is as easy as pointing your tools to the JSON-RPC endpoint."))}u.isMDXComponent=!0}}]);