"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[92603],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=c(n),p=i,g=m["".concat(l,".").concat(p)]||m[p]||u[p]||a;return n?r.createElement(g,o(o({ref:t},d),{},{components:n})):r.createElement(g,o({ref:t},d))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},51456:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],s={image:"/img/integration-services/logo/integration_services.png",description:"The example-3 script authenticates an Integration Service client to manage Identities using the Admin identity created in example-0 and then creates a new identity, removes it from Integration Services, and verifies that the identity still exists on the Tangle.",keywords:["how to","delete users","retrieve identity from tangle","verify identity","example","manage identity","integration services backend"]},l="Delete Users",c={unversionedId:"examples/node/delete-users",id:"examples/node/delete-users",title:"Delete Users",description:"The example-3 script authenticates an Integration Service client to manage Identities using the Admin identity created in example-0 and then creates a new identity, removes it from Integration Services, and verifies that the identity still exists on the Tangle.",source:"@site/content/build/integration-services/production/documentation/docs/examples/node/delete-users.md",sourceDirName:"examples/node",slug:"/examples/node/delete-users",permalink:"/integration-services/examples/node/delete-users",draft:!1,editUrl:"https://github.com/iotaledger/integration-services/edit/develop/documentation/content/build/integration-services/production/documentation/docs/examples/node/delete-users.md",tags:[],version:"current",frontMatter:{image:"/img/integration-services/logo/integration_services.png",description:"The example-3 script authenticates an Integration Service client to manage Identities using the Admin identity created in example-0 and then creates a new identity, removes it from Integration Services, and verifies that the identity still exists on the Tangle.",keywords:["how to","delete users","retrieve identity from tangle","verify identity","example","manage identity","integration services backend"]},sidebar:"docs",previous:{title:"Update Users",permalink:"/integration-services/examples/node/update-users"},next:{title:"Trusted Authorities",permalink:"/integration-services/examples/node/trusted-authorities"}},d={},u=[{value:"Remove User from Integration Services Database",id:"remove-user-from-integration-services-database",level:2},{value:"Get an Identity Directly from the Tangle",id:"get-an-identity-directly-from-the-tangle",level:2}],m={toc:u};function p(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"delete-users"},"Delete Users"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/integration-services/blob/master/clients/client-sdk/examples/3-DeleteUser.ts"},"example-3"),"\nscript authenticates an Integration Service client to manage Identities using the Admin identity created in ",(0,a.kt)("a",{parentName:"p",href:"./how-to-run-examples"},"example-0")," and then performs the following tasks:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Creates a new identity."),(0,a.kt)("li",{parentName:"ol"},"Removes it from Integration Services."),(0,a.kt)("li",{parentName:"ol"},"Verifies that the identity still exists on the Tangle.")),(0,a.kt)("p",null,"You can run the example with the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm run example-3\n")),(0,a.kt)("h2",{id:"remove-user-from-integration-services-database"},"Remove User from Integration Services Database"),(0,a.kt)("p",null,"You can remove an identity from the Integration Services backend by running the following script:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// Remove the user and also revoke the user's credentials\nawait identity.remove(userIdentity.id, true);\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"You can only remove an identity in the Integration Services backend, ",(0,a.kt)("strong",{parentName:"p"},"the Identity cannot be removed from the Tangle"),".")),(0,a.kt)("h2",{id:"get-an-identity-directly-from-the-tangle"},"Get an Identity Directly from the Tangle"),(0,a.kt)("p",null,"You can retrieve an Identity from the Tangle by running the following script:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const recoveredIdentity = await identity.latestDocument(userIdentity.id);\n")))}p.isMDXComponent=!0}}]);