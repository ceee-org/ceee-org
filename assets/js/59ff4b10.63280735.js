"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[21857],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>p});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=c(t),p=r,f=m["".concat(l,".").concat(p)]||m[p]||u[p]||o;return t?a.createElement(f,i(i({ref:n},d),{},{components:t})):a.createElement(f,i({ref:n},d))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},48649:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var a=t(87462),r=(t(67294),t(3905)),o=t(54411),i=t(43305);const s={keywords:["functions","views","state","access","params","results"],image:"/img/logo/WASP_logo_dark.png",description:"The code generated for Funcs will be able to inspect and modify the smart contract state, whereas the code generated for Views will only be able to inspect the state."},l="Function Definitions",c={unversionedId:"guide/schema/funcs",id:"guide/schema/funcs",title:"Function Definitions",description:"The code generated for Funcs will be able to inspect and modify the smart contract state, whereas the code generated for Views will only be able to inspect the state.",source:"@site/content/build/wasp/production/documentation/docs/guide/schema/funcs.mdx",sourceDirName:"guide/schema",slug:"/guide/schema/funcs",permalink:"/smart-contracts/guide/schema/funcs",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/master/documentation/content/build/wasp/production/documentation/docs/guide/schema/funcs.mdx",tags:[],version:"current",frontMatter:{keywords:["functions","views","state","access","params","results"],image:"/img/logo/WASP_logo_dark.png",description:"The code generated for Funcs will be able to inspect and modify the smart contract state, whereas the code generated for Views will only be able to inspect the state."},sidebar:"tutorialSidebar",previous:{title:"Triggering Events",permalink:"/smart-contracts/guide/schema/events"},next:{title:"Limiting Access",permalink:"/smart-contracts/guide/schema/access"}},d={},u=[],m={toc:u};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"function-definitions"},"Function Definitions"),(0,r.kt)("p",null,"Here is the full schema definition file for the ",(0,r.kt)("inlineCode",{parentName:"p"},"dividend")," example. We will now focus on\nits ",(0,r.kt)("inlineCode",{parentName:"p"},"funcs")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"views")," sections. Since they are structured identically we will only need\nto explain the layout of these sections once."),(0,r.kt)(o.Z,{defaultValue:"yaml",values:[{label:"schema.yaml",value:"yaml"},{label:"schema.json",value:"json"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"json",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Dividend",\n  "description": "Simple dividend smart contract",\n  "state": {\n    "memberList": "Address[] // array with all the recipients of this dividend",\n    "members": "map[Address]Int64 // map with all the recipient factors of this dividend",\n    "owner": "AgentID // owner of contract, the only one who can call \'member\' func",\n    "totalFactor": "Int64 // sum of all recipient factors"\n  },\n  "funcs": {\n    "init": {\n      "params": {\n        "owner": "AgentID? // optional owner of contract, defaults to contract creator"\n      }\n    },\n    "member": {\n      "access": "owner // only defined owner of contract can add members",\n      "params": {\n        "address": "Address // address of dividend recipient",\n        "factor": "Int64 // relative division factor"\n      }\n    },\n    "divide": {\n    },\n    "setOwner": {\n      "access": "owner // only defined owner of contract can change owner",\n      "params": {\n        "owner": "AgentID // new owner of smart contract"\n      }\n    }\n  },\n  "views": {\n    "getFactor": {\n      "params": {\n        "address": "Address // address of dividend recipient"\n      },\n      "results": {\n        "factor": "Int64 // relative division factor"\n      }\n    }\n  }\n}\n'))),(0,r.kt)(i.Z,{value:"yaml",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-YAML"},"name: Dividend\ndescription: Simple dividend smart contract\nstate:\n  memberList: Address[] // array with all the recipients of this dividend\n  members: map[Address]Int64 // map with all the recipient factors of this dividend\n  owner: AgentID // owner of contract, the only one who can call 'member' func\n  totalFactor: Int64 // sum of all recipient factors\nfuncs:\n  init:\n    params:\n      owner: AgentID? // optional owner of contract, defaults to contract creator\n  member:\n    access: owner // only defined owner of contract can add members\n    params:\n      address: Address // address of dividend recipient\n      factor: Int64 // relative division factor\n  divide: {}\n  setOwner:\n    access: owner // only defined owner of contract can change owner\n    params:\n      owner: AgentID // new owner of smart contract\nviews:\n  getFactor:\n    params:\n      address: Address // address of dividend recipient\n    results:\n      factor: Int64 // relative division factor\n")))),(0,r.kt)("p",null,"As you can see each of the ",(0,r.kt)("inlineCode",{parentName:"p"},"funcs")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"views")," sections defines their functions in the\nsame way. The only resulting difference is in the way the schema tool generates code for\nthem. The code generated for Funcs will be able to inspect and modify the smart contract\nstate, whereas the code generated for Views will only be able to inspect the state."),(0,r.kt)("p",null,"Functions are defined as named subsections in the schema definition file. The name of the\nsubsection will become the name of the function. In turn, there can be 3 optional\nsubsections under each function subsection."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"access")," indicates who is allowed to access the function."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"params")," holds the field definitions that describe the function parameters."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"results")," holds the field definitions that describe the function results.")),(0,r.kt)("p",null,"We will now examine each subsection in more detail. In the next section we will first look\nat the ",(0,r.kt)("a",{parentName:"p",href:"/smart-contracts/guide/schema/access"},(0,r.kt)("inlineCode",{parentName:"a"},"access"))," subsection."))}p.isMDXComponent=!0},43305:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(67294),r=t(86010);const o="tabItem__kUE";function i(e){let{children:n,hidden:t,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:t},n)}},54411:(e,n,t)=>{t.d(n,{Z:()=>p});var a=t(87462),r=t(67294),o=t(86010),i=t(51048),s=t(33609),l=t(1943),c=t(72957);const d="tabList_fbd4",u="tabItem_v5XY";function m(e){var n,t;const{lazy:i,block:m,defaultValue:p,values:f,groupId:h,className:b}=e,w=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=f?f:w.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),g=(0,s.l)(v,((e,n)=>e.value===n.value));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===p?p:null!=(n=null!=p?p:null==(t=w.find((e=>e.props.default)))?void 0:t.props.value)?n:w[0].props.value;if(null!==y&&!v.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+v.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:k,setTabGroupChoices:T}=(0,l.U)(),[O,N]=(0,r.useState)(y),I=[],{blockElementScrollPositionUntilNextRender:E}=(0,c.o5)();if(null!=h){const e=k[h];null!=e&&e!==O&&v.some((n=>n.value===e))&&N(e)}const x=e=>{const n=e.currentTarget,t=I.indexOf(n),a=v[t].value;a!==O&&(E(n),N(a),null!=h&&T(h,String(a)))},D=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{var a;const n=I.indexOf(e.currentTarget)+1;t=null!=(a=I[n])?a:I[0];break}case"ArrowLeft":{var r;const n=I.indexOf(e.currentTarget)-1;t=null!=(r=I[n])?r:I[I.length-1];break}}null==(n=t)||n.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},b)},v.map((e=>{let{value:n,label:t,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===n?0:-1,"aria-selected":O===n,key:n,ref:e=>I.push(e),onKeyDown:D,onFocus:x,onClick:x},i,{className:(0,o.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":O===n})}),null!=t?t:n)}))),i?(0,r.cloneElement)(w.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},w.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==O})))))}function p(e){const n=(0,i.Z)();return r.createElement(m,(0,a.Z)({key:String(n)},e))}}}]);