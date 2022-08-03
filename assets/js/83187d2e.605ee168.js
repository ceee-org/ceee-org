"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[70763],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return v}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(r),v=i,f=p["".concat(u,".").concat(v)]||p[v]||d[v]||o;return r?n.createElement(f,a(a({ref:t},s),{},{components:r})):n.createElement(f,a({ref:t},s))}));function v(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},98679:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return v},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var n=r(87462),i=r(63366),o=(r(67294),r(3905)),a=["components"],l={title:"Tutorials Overview",sidebar_label:"Overview",description:"Provide overview of the tutorials",image:"/img/Identity_icon.png",keywords:["tutorials"]},u=void 0,c={unversionedId:"tutorials/overview",id:"tutorials/overview",title:"Tutorials Overview",description:"Provide overview of the tutorials",source:"@site/content/build/identity.rs/develop/documentation/docs/tutorials/overview.md",sourceDirName:"tutorials",slug:"/tutorials/overview",permalink:"/identity.rs/develop/tutorials/overview",draft:!1,editUrl:"https://github.com/iotaledger/identity.rs/edit/dev/documentation/content/build/identity.rs/develop/documentation/docs/tutorials/overview.md",tags:[],version:"current",frontMatter:{title:"Tutorials Overview",sidebar_label:"Overview",description:"Provide overview of the tutorials",image:"/img/Identity_icon.png",keywords:["tutorials"]},sidebar:"docs",previous:{title:"API Reference",permalink:"/identity.rs/develop/libraries/wasm/api_reference"},next:{title:"Digitally Validate a Degree",permalink:"/identity.rs/develop/tutorials/validate_university_degree"}},s={},d=[],p={toc:d};function v(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this section you will find end-to-end examples using the library to achieve common use-cases."),(0,o.kt)("p",null,"List of tutorials:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./validate_university_degree"},"Digitally Validate a Degree"),": Use the Wasm bindings to digitally prove the existence and validity of a degree.")))}v.isMDXComponent=!0}}]);