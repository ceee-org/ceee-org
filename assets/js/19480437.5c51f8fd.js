"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[9056],{3905:function(e,i,t){t.d(i,{Zo:function(){return l},kt:function(){return v}});var n=t(67294);function r(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function o(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);i&&(n=n.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?o(Object(t),!0).forEach((function(i){r(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function c(e,i){if(null==e)return{};var t,n,r=function(e,i){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],i.indexOf(t)>=0||(r[t]=e[t]);return r}(e,i);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),d=function(e){var i=n.useContext(s),t=i;return e&&(t="function"==typeof e?e(i):a(a({},i),e)),t},l=function(e){var i=d(e.components);return n.createElement(s.Provider,{value:i},e.children)},u={inlineCode:"code",wrapper:function(e){var i=e.children;return n.createElement(n.Fragment,{},i)}},p=n.forwardRef((function(e,i){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(t),v=r,f=p["".concat(s,".").concat(v)]||p[v]||u[v]||o;return t?n.createElement(f,a(a({ref:i},l),{},{components:t})):n.createElement(f,a({ref:i},l))}));function v(e,i){var t=arguments,r=i&&i.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=p;var c={};for(var s in i)hasOwnProperty.call(i,s)&&(c[s]=i[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var d=2;d<o;d++)a[d]=t[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},39006:function(e,i,t){t.r(i),t.d(i,{assets:function(){return l},contentTitle:function(){return s},default:function(){return v},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return u}});var n=t(87462),r=t(63366),o=(t(67294),t(3905)),a=["components"],c={image:"/img/integration-services/diagrams/ecommerce-ssi-bridge.jpeg",description:"The SSI Bridge Service API implementation provides an Identity Service, Authentication Service, and Verification Service to integrate IOTA Identity seamlessly.",keywords:["explanation","API definition","Architecture overview","identity services","Authentication Services","verification services"]},s="Software Architecture and APIs Definition",d={unversionedId:"explanations/services/SSI-bridge/API-definition",id:"explanations/services/SSI-bridge/API-definition",title:"Software Architecture and APIs Definition",description:"The SSI Bridge Service API implementation provides an Identity Service, Authentication Service, and Verification Service to integrate IOTA Identity seamlessly.",source:"@site/content/build/integration-services/production/documentation/docs/explanations/services/SSI-bridge/API-definition.md",sourceDirName:"explanations/services/SSI-bridge",slug:"/explanations/services/SSI-bridge/API-definition",permalink:"/integration-services/explanations/services/SSI-bridge/API-definition",draft:!1,editUrl:"https://github.com/iotaledger/integration-services/edit/develop/documentation/content/build/integration-services/production/documentation/docs/explanations/services/SSI-bridge/API-definition.md",tags:[],version:"current",frontMatter:{image:"/img/integration-services/diagrams/ecommerce-ssi-bridge.jpeg",description:"The SSI Bridge Service API implementation provides an Identity Service, Authentication Service, and Verification Service to integrate IOTA Identity seamlessly.",keywords:["explanation","API definition","Architecture overview","identity services","Authentication Services","verification services"]},sidebar:"docs",previous:{title:"SSI Bridge",permalink:"/integration-services/explanations/services/SSI-bridge/introduction"},next:{title:"Use Cases",permalink:"/integration-services/explanations/services/SSI-bridge/use-cases"}},l={},u=[{value:"Identity Service",id:"identity-service",level:2},{value:"Authentication Service",id:"authentication-service",level:2},{value:"Verification Service",id:"verification-service",level:2}],p={toc:u};function v(e){var i=e.components,c=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},p,c,{components:i,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"software-architecture-and-apis-definition"},"Software Architecture and APIs Definition"),(0,o.kt)("p",null,"The following diagram describes the software and services architecture and the list of provided APIs."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ecommerce-ssi-bridge",src:t(75364).Z,width:"981",height:"795"})),(0,o.kt)("h2",{id:"identity-service"},"Identity Service"),(0,o.kt)("p",null,"This service creates a decentralized identity on the IOTA Tangle and locally manages information for their indexing and\nsearch function. This service is provided centrally for ease of use, but we recommend installing it locally in a production-ready\nscenario."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Prefix:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"/api/{{version}}/identities")),(0,o.kt)("h2",{id:"authentication-service"},"Authentication Service"),(0,o.kt)("p",null,"You can use this service to allow previously created identities to be authenticated and authorized to use the Bridge.\nThis service is required to maintain the security of the Bridge and audit its use, but you can remove it if the Bridge\nis deployed locally to each party."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Prefix:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"/api/{{version}}/authentication")),(0,o.kt)("h2",{id:"verification-service"},"Verification Service"),(0,o.kt)("p",null,"You can use this service to verify identities and create and verify credentials. This abstraction layer allows every\nentity to seamlessly deal with ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.iota.org/identity.rs/introduction"},"IOTA decentralized (SSI) identity"),"\nimplementation."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Prefix:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"/api/{{version}}/verification")))}v.isMDXComponent=!0},75364:function(e,i,t){i.Z=t.p+"assets/images/ecommerce-ssi-bridge-dc780c55b6cf3e98bc1aadcb1e278189.jpeg"}}]);