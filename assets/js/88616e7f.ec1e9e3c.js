"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[9897],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(n),m=i,y=p["".concat(s,".").concat(m)]||p[m]||u[m]||r;return n?a.createElement(y,l(l({ref:t},c),{},{components:n})):a.createElement(y,l({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var d=2;d<r;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},68207:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return d},metadata:function(){return u},toc:function(){return m}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),l=n(34259),o=n(18679),s=["components"],d={image:"/img/logo/integration_services.png",description:"The example-1 script authenticates an Integration Service client to manage Identities using the Admin identity created in example-0 and then creates a new Identity, creates a credential for that identity, and verifies the generated credential.",keywords:["how to","create identity","create credentials","verify credentials","authenticate","examples","maven","java","nodejs","javascript"]},c="Create Identity and Credentials",u={unversionedId:"how_tos/integration-services-sdk/create-identity-and-credentials",id:"how_tos/integration-services-sdk/create-identity-and-credentials",title:"Create Identity and Credentials",description:"The example-1 script authenticates an Integration Service client to manage Identities using the Admin identity created in example-0 and then creates a new Identity, creates a credential for that identity, and verifies the generated credential.",source:"@site/content/build/integration-services/production/documentation/docs/how_tos/integration-services-sdk/create-identity-and-credentials.mdx",sourceDirName:"how_tos/integration-services-sdk",slug:"/how_tos/integration-services-sdk/create-identity-and-credentials",permalink:"/integration-services/how_tos/integration-services-sdk/create-identity-and-credentials",draft:!1,editUrl:"https://github.com/iotaledger/integration-services/edit/develop/documentation/content/build/integration-services/production/documentation/docs/how_tos/integration-services-sdk/create-identity-and-credentials.mdx",tags:[],version:"current",frontMatter:{image:"/img/logo/integration_services.png",description:"The example-1 script authenticates an Integration Service client to manage Identities using the Admin identity created in example-0 and then creates a new Identity, creates a credential for that identity, and verifies the generated credential.",keywords:["how to","create identity","create credentials","verify credentials","authenticate","examples","maven","java","nodejs","javascript"]},sidebar:"docs",previous:{title:"Run How-Tos",permalink:"/integration-services/how_tos/integration-services-sdk/run-how-tos"},next:{title:"Update Users",permalink:"/integration-services/how_tos/integration-services-sdk/update-users"}},p={},m=[{value:"Authentication",id:"authentication",level:2},{value:"Create an Identity",id:"create-an-identity",level:2},{value:"Verify a Credential",id:"verify-a-credential",level:2}],y={toc:m};function v(e){var t=e.components,n=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-identity-and-credentials"},"Create Identity and Credentials"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"example-1")," script authenticates an Integration Service client to manage Identities using the Admin identity\ncreated in ",(0,r.kt)("a",{parentName:"p",href:"/integration-services/how_tos/integration-services-sdk/run-how-tos"},"example-0")," and then performs the following tasks:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Creates a new Identity (",(0,r.kt)("inlineCode",{parentName:"li"},"userIdentity"),")."),(0,r.kt)("li",{parentName:"ol"},"Creates a credential for that identity (",(0,r.kt)("inlineCode",{parentName:"li"},"userCredential"),")."),(0,r.kt)("li",{parentName:"ol"},"Verifies the generated credential (",(0,r.kt)("inlineCode",{parentName:"li"},"await identity.checkCredential(userCredential)"),").")),(0,r.kt)("p",null,"You can run the example with the following command:"),(0,r.kt)(l.Z,{groupId:"programmingLanguage",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mvn exec:_java -Dexec.mainClass=net.gradbase.how_tos.CreateIdentityAndCredential\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example source code"),": ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/albydeca/iota-is-sdk/blob/main/examples/src/main/java/net/gradbase/examples/CreateIdentityAndCredential.java"},"Example-1"))),(0,r.kt)(o.Z,{value:"Nodejs",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run example-1\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example source code"),": ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/integration-services/blob/master/clients/client-sdk/examples/1-CreateIdentityAndCredential.ts"},"Example-1")))),(0,r.kt)("h2",{id:"authentication"},"Authentication"),(0,r.kt)("p",null,"You can use the following script to authenticate the client using the admin identity and get the\nBasicIdentityCredential that the admin owns: this is a verifiable credential\nwhich is required for an issuer to sign verifiable credentials for other Identities."),(0,r.kt)(l.Z,{groupId:"programmingLanguage",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// Recover the admin identity\nfinal String didId = AddAsRootIdentity.authenticateRootIdentity(client);\nIdentityInternal admin = client.find(didId);\n\nif (admin == null) {\nthrow new Exception("admin identity is null");\n}\n\n// Get admin identity\'s VC\nArrayList<VerifiableCredential> vcs = (ArrayList<VerifiableCredential>) admin.getVerifiableCredentials();\n\nif (vcs.size() > 0) {\nVerifiableCredential firstCredential = vcs.get(0);\nSystem.out.println(firstCredential);\n} else {\nthrow new Exception("admin identity has no credentials");\n}\n\n'))),(0,r.kt)(o.Z,{value:"Nodejs",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { IdentityClient, IdentityKeys }  from '@iota/is-client';\n\n...\n\n// Initialize IdentityClient with previously setup parameters\nconst identity = new IdentityClient({\n  isGatewayUrl: process.env.IS_GATEWAY_URL,\n  ssiBridgeUrl: process.env.SSI_BRIDGE_URL,\n  auditTrailUrl: process.env.AUDIT_TRAIL_URL,\n  useGatewayUrl: process.env.USE_GATEWAY_URL === 'true' || false,\n  apiKey: process.env.API_KEY,\n  apiVersionAuditTrail: ApiVersion.v0_1,\n  apiVersionSsiBridge: ApiVersion.v0_2\n});\n\n// Recover the admin identity\nconst adminIdentity = JSON.parse(readFileSync(\"./adminIdentity.json\").toString()) as IdentityKeys;\n\n// Authenticate as the admin identity\nawait identity.authenticate(adminIdentity.id, adminIdentity.keys.sign.private);\n\n// Get admin identity data\nconst adminIdentityPublic = await identity.find(adminIdentity.id);\n\n// Get admin identy's VC\nconst identityCredential = adminIdentityPublic?.verifiableCredentials?.[0];\n\nconsole.log(\"Identity Credential of Admin\", identityCredential);\n")))),(0,r.kt)("h2",{id:"create-an-identity"},"Create an Identity"),(0,r.kt)("p",null,"The method ",(0,r.kt)("inlineCode",{parentName:"p"},"createCredential")," requires a valid verifiable credential of type\nBasicIdentity, the destination DID the type and the claim, which can be created using the following script."),(0,r.kt)(l.Z,{groupId:"programmingLanguage",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// Create identity for user\nJSONObject jsonClaim = new JSONObject().put("type", "Person").put("name", "randomName");\n\nClaim claim = new Claim(jsonClaim);\n\nfinal String randomUsername = Utils.getRandomUsernameOfLength(5);\nSystem.out.println("username: " + randomUsername);\nJSONObject newUserIdentity = client.create(randomUsername, claim);\nSystem.out.println("created new user " + newUserIdentity);\n\nVerifiableCredential assignedCredential = client.createCredential(vcs.get(0),\n    newUserIdentity.getJSONObject("doc").getString("id"), CredentialType.BASIC_IDENTITY,\n    new Claim(new JSONObject().put("type", "Person").put("position", "Professor")));\n\nSystem.out.println("Created credential for new user " + assignedCredential.toString());\n'))),(0,r.kt)(o.Z,{value:"Nodejs",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// Create identity for user\nconst userIdentity = await identity.create("User-" + Math.ceil(Math.random() * 100000);\n\nconsole.log("~~~~~~~~~~~~~~~~");\nconsole.log("Created user identity: ", userIdentity);\nconsole.log("~~~~~~~~~~~~~~~~");\n// Assign a verifiable credential to the user as rootIdentity.\n// With the BasicIdentityCredential the user is not allowed to issue further credentials\nconst userCredential = await identity.createCredential(\n  identityCredential,\n  userIdentity?.id,\n  CredentialTypes.BasicIdentityCredential,\n  UserType.Person,\n  {\n    profession: "Professor",\n  }\n);\n')))),(0,r.kt)("h2",{id:"verify-a-credential"},"Verify a Credential"),(0,r.kt)("p",null,"You can verify a credential using the following script:"),(0,r.kt)(l.Z,{groupId:"programmingLanguage",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'boolean verified = client.checkCredential(assignedCredential);\nSystem.out.println("Verification result: " + verified);\n'))),(0,r.kt)(o.Z,{value:"Nodejs",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const verified = await identity.checkCredential(userCredential);\n\nconsole.log("Verification result: ", verified);\n')))))}v.isMDXComponent=!0},18679:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(67294),i=n(86010),r="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(r,l),hidden:n},t)}},34259:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(87462),i=n(67294),r=n(86010),l=n(51048),o=n(33609),s=n(1943),d=n(72957),c="tabList__CuJ",u="tabItem_LNqP";function p(e){var t,n,l=e.lazy,p=e.block,m=e.defaultValue,y=e.values,v=e.groupId,f=e.className,g=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=y?y:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,o.l)(h,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===m?m:null!=(t=null!=m?m:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:g[0].props.value;if(null!==k&&!h.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,s.U)(),I=w.tabGroupChoices,C=w.setTabGroupChoices,T=(0,i.useState)(k),N=T[0],x=T[1],j=[],O=(0,d.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var E=I[v];null!=E&&E!==N&&h.some((function(e){return e.value===E}))&&x(E)}var _=function(e){var t=e.currentTarget,n=j.indexOf(t),a=h[n].value;a!==N&&(O(t),x(a),null!=v&&C(v,String(a)))},S=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,i=j.indexOf(e.currentTarget)+1;n=null!=(a=j[i])?a:j[0];break;case"ArrowLeft":var r,l=j.indexOf(e.currentTarget)-1;n=null!=(r=j[l])?r:j[j.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:(0,r.Z)("tabs-container",c)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":p},f)},h.map((function(e){var t=e.value,n=e.label,l=e.attributes;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return j.push(e)},onKeyDown:S,onFocus:_,onClick:_},l,{className:(0,r.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":N===t})}),null!=n?n:t)}))),l?(0,i.cloneElement)(g.filter((function(e){return e.props.value===N}))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function m(e){var t=(0,l.Z)();return i.createElement(p,(0,a.Z)({key:String(t)},e))}}}]);