"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[51870],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(t),f=i,g=d["".concat(l,".").concat(f)]||d[f]||s[f]||o;return t?r.createElement(g,a(a({ref:n},p),{},{components:t})):r.createElement(g,a({ref:n},p))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},88812:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s}});var r=t(87462),i=t(63366),o=(t(67294),t(3905)),a=["components"],c={},l=void 0,u={unversionedId:"reference/java_api/MigrationProgressType",id:"reference/java_api/MigrationProgressType",title:"MigrationProgressType",description:"Migration event type.",source:"@site/content/build/wallet.rs/production/documentation/docs/reference/java_api/MigrationProgressType.mdx",sourceDirName:"reference/java_api",slug:"/reference/java_api/MigrationProgressType",permalink:"/wallet.rs/reference/java_api/MigrationProgressType",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/production/documentation/content/build/wallet.rs/production/documentation/docs/reference/java_api/MigrationProgressType.mdx",tags:[],version:"current",frontMatter:{}},p={},s=[{value:"FETCHING_MIGRATION_DATA",id:"fetching_migration_data",level:3},{value:"MINING_BUNDLE",id:"mining_bundle",level:3},{value:"SIGNING_BUNDLE",id:"signing_bundle",level:3},{value:"BROADCASTING_BUNDLE",id:"broadcasting_bundle",level:3},{value:"TRANSACTION_CONFIRMED",id:"transaction_confirmed",level:3}],d={toc:s};function f(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Migration event type."),(0,o.kt)("h3",{id:"fetching_migration_data"},"FETCHING_MIGRATION_DATA"),(0,o.kt)("p",null,"Fetching migration data on the given address range."),(0,o.kt)("h3",{id:"mining_bundle"},"MINING_BUNDLE"),(0,o.kt)("p",null,"Mining the bundle with the given spent address."),(0,o.kt)("h3",{id:"signing_bundle"},"SIGNING_BUNDLE"),(0,o.kt)("p",null,"Signing the bundle."),(0,o.kt)("h3",{id:"broadcasting_bundle"},"BROADCASTING_BUNDLE"),(0,o.kt)("p",null,"Broadcasting the given bundle hash."),(0,o.kt)("h3",{id:"transaction_confirmed"},"TRANSACTION_CONFIRMED"),(0,o.kt)("p",null,"Transaction confirmation event."))}f.isMDXComponent=!0}}]);