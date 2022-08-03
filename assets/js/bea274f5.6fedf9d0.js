"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[16802],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return f}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),s=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=s(e.components);return a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=s(t),f=r,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||o;return t?a.createElement(m,i(i({ref:n},l),{},{components:t})):a.createElement(m,i({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=p;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},77850:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return f}});var a=t(87462),r=t(63366),o=(t(67294),t(3905)),i=t(34259),c=t(18679),u=["components"],s={keywords:["functions","thunk","insert operations"],description:"Thunk functions encapsulate access and parameter checking and set up the type-safe function-specific contexts. Thunks are used to insert operations at the beginning or end of the other function to adapt it to changing requirements",image:"/img/logo/WASP_logo_dark.png"},l="Thunk Functions",d={unversionedId:"guide/schema/thunks",id:"guide/schema/thunks",title:"Thunk Functions",description:"Thunk functions encapsulate access and parameter checking and set up the type-safe function-specific contexts. Thunks are used to insert operations at the beginning or end of the other function to adapt it to changing requirements",source:"@site/content/build/wasp/develop/documentation/docs/guide/schema/thunks.mdx",sourceDirName:"guide/schema",slug:"/guide/schema/thunks",permalink:"/smart-contracts/develop/guide/schema/thunks",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/develop/documentation/content/build/wasp/develop/documentation/docs/guide/schema/thunks.mdx",tags:[],version:"current",frontMatter:{keywords:["functions","thunk","insert operations"],description:"Thunk functions encapsulate access and parameter checking and set up the type-safe function-specific contexts. Thunks are used to insert operations at the beginning or end of the other function to adapt it to changing requirements",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",previous:{title:"Function Results",permalink:"/smart-contracts/develop/guide/schema/results"},next:{title:"View-Only Functions",permalink:"/smart-contracts/develop/guide/schema/views"}},p={},f=[],m={toc:f};function h(e){var n=e.components,t=(0,r.Z)(e,u);return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"thunk-functions"},"Thunk Functions"),(0,o.kt)("p",null,"In computer programming, a thunk is a function used to inject a calculation into another\nfunction. Thunks are used to insert operations at the beginning or end of the other\nfunction to adapt it to changing requirements. If you remember from\nthe ",(0,o.kt)("a",{parentName:"p",href:"/smart-contracts/develop/guide/wasm_vm/context"},"function call context")," section, the ",(0,o.kt)("inlineCode",{parentName:"p"},"on_load")," function and\nskeleton function signatures looked like this:"),(0,o.kt)(i.Z,{defaultValue:"go",groupId:"language",values:[{label:"Go",value:"go"},{label:"Rust",value:"rust"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func OnLoad() {\n    exports := wasmlib.NewScExports()\n    exports.AddFunc("divide", funcDivide)\n    exports.AddFunc("init", funcInit)\n    exports.AddFunc("member", funcMember)\n    exports.AddFunc("setOwner", funcSetOwner)\n    exports.AddView("getFactor", viewGetFactor)\n    exports.AddView("getOwner", viewGetOwner)\n}\n\nfunc funcDivide(ctx wasmlib.ScFuncContext) {}\nfunc funcInit(ctx wasmlib.ScFuncContext) {}\nfunc funcMember(ctx wasmlib.ScFuncContext) {}\nfunc funcSetOwner(ctx wasmlib.ScFuncContext) {}\nfunc viewGetFactor(ctx wasmlib.ScViewContext) {}\nfunc viewGetOwner(ctx wasmlib.ScViewContext) {}\n'))),(0,o.kt)(c.Z,{value:"rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'fn on_load() {\n    let exports = ScExports::new();\n    exports.add_func("divide", func_divide);\n    exports.add_func("init", func_init);\n    exports.add_func("member", func_member);\n    exports.add_func("setOwner", func_set_owner);\n    exports.add_view("getFactor", view_get_factor);\n    exports.add_view("getOwner", view_get_owner);\n}\n\nfn func_divide(ctx: &ScFuncContext) {}\nfn func_init(ctx: &ScFuncContext) {}\nfn func_member(ctx: &ScFuncContext) {}\nfn func_set_owner(ctx: &ScFuncContext) {}\nfn view_get_factor(ctx: &ScViewContext) {}\nfn view_get_owner(ctx: &ScViewContext) {}\n'))),(0,o.kt)(c.Z,{value:"ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'export function on_load() {\n    let exports = new ScExports();\n    exports.addFunc("divide", funcDivide);\n    exports.addFunc("init", funcInit);\n    exports.addFunc("member", funcMember);\n    exports.addFunc("setOwner", funcSetOwner);\n    exports.addView("getFactor", viewGetFactor);\n    exports.addView("getOwner", viewGetOwner);\n}\n\nfunction funcDivide(ctx: ScFuncContext) {}\nfunction funcInit(ctx: ScFuncContext) {}\nfunction funcMember(ctx: ScFuncContext) {}\nfunction funcSetOwner(ctx: ScFuncContext) {}\nfunction viewGetFactor(ctx: ScViewContext) {}\nfunction viewGetOwner(ctx: ScViewContext) {}\n')))),(0,o.kt)("p",null,"Now that the schema tool introduces a bunch of automatically generated features, that is\nno longer sufficient. Luckily, the schema tool also generates thunks to inject these\nfeatures, before calling the function implementations that are maintained by the user.\nHere is the new ",(0,o.kt)("inlineCode",{parentName:"p"},"on_load")," function for the ",(0,o.kt)("inlineCode",{parentName:"p"},"dividend")," contract:"),(0,o.kt)(i.Z,{defaultValue:"go",groupId:"language",values:[{label:"Go",value:"go"},{label:"Rust",value:"rust"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func OnLoad() {\n    exports := wasmlib.NewScExports()\n    exports.AddFunc(FuncDivide, funcDivideThunk)\n    exports.AddFunc(FuncInit, funcInitThunk)\n    exports.AddFunc(FuncMember, funcMemberThunk)\n    exports.AddFunc(FuncSetOwner, funcSetOwnerThunk)\n    exports.AddView(ViewGetFactor, viewGetFactorThunk)\n    exports.AddView(ViewGetOwner, viewGetOwnerThunk)\n\n    for i, key := range keyMap {\n        idxMap[i] = key.KeyID()\n    }\n}\n"))),(0,o.kt)(c.Z,{value:"rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"fn on_load() {\n    let exports = ScExports::new();\n    exports.add_func(FUNC_DIVIDE, func_divide_thunk);\n    exports.add_func(FUNC_INIT, func_init_thunk);\n    exports.add_func(FUNC_MEMBER, func_member_thunk);\n    exports.add_func(FUNC_SET_OWNER, func_set_owner_thunk);\n    exports.add_view(VIEW_GET_FACTOR, view_get_factor_thunk);\n    exports.add_view(VIEW_GET_OWNER, view_get_owner_thunk);\n\n    unsafe {\n        for i in 0..KEY_MAP_LEN {\n            IDX_MAP[i] = get_key_id_from_string(KEY_MAP[i]);\n        }\n    }\n}\n"))),(0,o.kt)(c.Z,{value:"ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export function on_load(): void {\n    let exports = new wasmlib.ScExports();\n    exports.addFunc(sc.FuncDivide, funcDivideThunk);\n    exports.addFunc(sc.FuncInit, funcInitThunk);\n    exports.addFunc(sc.FuncMember, funcMemberThunk);\n    exports.addFunc(sc.FuncSetOwner, funcSetOwnerThunk);\n    exports.addView(sc.ViewGetFactor, viewGetFactorThunk);\n    exports.addView(sc.ViewGetOwner, viewGetOwnerThunk);\n\n    for (let i = 0; i < sc.keyMap.length; i++) {\n        sc.idxMap[i] = wasmlib.Key32.fromString(sc.keyMap[i]);\n    }\n}\n")))),(0,o.kt)("p",null,"As you can see, instead of calling the user functions directly, we now call thunk versions\nof these functions. We also added initialization of a local array that holds all key IDs\nnegotiated with the host, so that we can simply use (generated) indexes into this array\ninstead of having to negotiate these IDs each time we need them. The rest of the generated\ncode will use those indexes whenever a known key is used."),(0,o.kt)("p",null,"Here is an example of a thunk function for the ",(0,o.kt)("inlineCode",{parentName:"p"},"setOwner")," contract function. You can\nexamine the other thunks that all follow the same pattern in the generated ",(0,o.kt)("inlineCode",{parentName:"p"},"lib.xx"),":"),(0,o.kt)(i.Z,{defaultValue:"go",groupId:"language",values:[{label:"Go",value:"go"},{label:"Rust",value:"rust"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'type SetOwnerContext struct {\n    Params ImmutableSetOwnerParams\n    State  MutableDividendState\n}\n\nfunc funcSetOwnerThunk(ctx wasmlib.ScFuncContext) {\n    ctx.Log("dividend.funcSetOwner")\n    // only defined owner of contract can change owner\n    access := ctx.State().GetAgentID(wasmlib.Key("owner"))\n    ctx.Require(access.Exists(), "access not set: owner")\n    ctx.Require(ctx.Caller() == access.Value(), "no permission")\n\n    f := &SetOwnerContext{\n        Params: ImmutableSetOwnerParams{\n            id: wasmlib.OBJ_ID_PARAMS,\n        },\n        State: MutableDividendState{\n            id: wasmlib.OBJ_ID_STATE,\n        },\n    }\n    ctx.Require(f.Params.Owner().Exists(), "missing mandatory owner")\n    funcSetOwner(ctx, f)\n    ctx.Log("dividend.funcSetOwner ok")\n}\n'))),(0,o.kt)(c.Z,{value:"rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'pub struct SetOwnerContext {\n    params: ImmutableSetOwnerParams,\n    state:  MutableDividendState,\n}\n\nfn func_set_owner_thunk(ctx: &ScFuncContext) {\n    ctx.log("dividend.funcSetOwner");\n    // only defined owner of contract can change owner\n    let access = ctx.state().get_agent_id("owner");\n    ctx.require(access.exists(), "access not set: owner");\n    ctx.require(ctx.caller() == access.value(), "no permission");\n\n    let f = SetOwnerContext {\n        params: ImmutableSetOwnerParams {\n            id: OBJ_ID_PARAMS,\n        },\n        state: MutableDividendState {\n            id: OBJ_ID_STATE,\n        },\n    };\n    ctx.require(f.params.owner().exists(), "missing mandatory owner");\n    func_set_owner(ctx, &f);\n    ctx.log("dividend.funcSetOwner ok");\n}\n'))),(0,o.kt)(c.Z,{value:"ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'export class SetOwnerContext {\n    params: sc.ImmutableSetOwnerParams = new sc.ImmutableSetOwnerParams();\n    state: sc.MutableDividendState = new sc.MutableDividendState();\n}\n\nfunction funcSetOwnerThunk(ctx: wasmlib.ScFuncContext): void {\n    ctx.log("dividend.funcSetOwner");\n    // only defined owner of contract can change owner\n    let access = ctx.state().getAgentID(wasmlib.Key32.fromString("owner"));\n    ctx.require(access.exists(), "access not set: owner");\n    ctx.require(ctx.caller().equals(access.value()), "no permission");\n\n    let f = new sc.SetOwnerContext();\n    f.params.mapID = wasmlib.OBJ_ID_PARAMS;\n    f.state.mapID = wasmlib.OBJ_ID_STATE;\n    ctx.require(f.params.owner().exists(), "missing mandatory owner")\n    sc.funcSetOwner(ctx, f);\n    ctx.log("dividend.funcSetOwner ok");\n}\n')))),(0,o.kt)("p",null,"First, the thunk logs the contract and function name to show the call has started. Then it\nsets up the access control for the function according to the schema definition file.\nIn this case it retrieves the ",(0,o.kt)("inlineCode",{parentName:"p"},"owner")," state variable, requires that it exists, and then\nrequires that the caller() of the function equals that value. Any failing requirement will\npanic out of the function with an error message. So this code makes sure only the owner of\nthe contract can call this function."),(0,o.kt)("p",null,"Next, we set up a strongly typed function-specific context structure. First, we add the\nfunction-specific immutable ",(0,o.kt)("inlineCode",{parentName:"p"},"params")," interface structure, which is only present when the\nfunction can have parameters. Then we add the contract-specific ",(0,o.kt)("inlineCode",{parentName:"p"},"state")," interface\nstructure. In this case it is mutable because setOwner is a ",(0,o.kt)("a",{parentName:"p",href:"/smart-contracts/develop/guide/schema/funcs"},"Func"),". For\n",(0,o.kt)("a",{parentName:"p",href:"/smart-contracts/develop/guide/schema/views"},"Views")," this will be an immutable state interface. Finally, we add the\nfunction-specific mutable ",(0,o.kt)("inlineCode",{parentName:"p"},"results")," interface structure, which is only present when the\nfunction returns results. Obviously, this is not the case for this setOwner function."),(0,o.kt)("p",null,"Now we get to the point where we can use the function-specific ",(0,o.kt)("inlineCode",{parentName:"p"},"params")," interface to check\nfor mandatory parameters. Each mandatory parameter is required to exist, or else we will\npanic out of the function with an error message."),(0,o.kt)("p",null,"With the automated checks and setup completed, we now call the function implementation\nthat is maintained by the user. After the user function has completed, we log that the\ncontract function has completed successfully. Remember that any error within the user\nfunction will cause a panic, so this logging will never happen in that case."),(0,o.kt)("p",null,"In the next section we will look at the specifics of ",(0,o.kt)("a",{parentName:"p",href:"/smart-contracts/develop/guide/schema/views"},"view functions"),"."))}h.isMDXComponent=!0},18679:function(e,n,t){t.d(n,{Z:function(){return i}});var a=t(67294),r=t(86010),o="tabItem_Ymn6";function i(e){var n=e.children,t=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:t},n)}},34259:function(e,n,t){t.d(n,{Z:function(){return f}});var a=t(87462),r=t(67294),o=t(86010),i=t(51048),c=t(33609),u=t(1943),s=t(72957),l="tabList__CuJ",d="tabItem_LNqP";function p(e){var n,t,i=e.lazy,p=e.block,f=e.defaultValue,m=e.values,h=e.groupId,w=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),x=null!=m?m:g.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),v=(0,c.l)(x,(function(e,n){return e.value===n.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===f?f:null!=(n=null!=f?f:null==(t=g.find((function(e){return e.props.default})))?void 0:t.props.value)?n:g[0].props.value;if(null!==b&&!x.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+x.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,u.U)(),y=k.tabGroupChoices,_=k.setTabGroupChoices,O=(0,r.useState)(b),S=O[0],T=O[1],F=[],I=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var N=y[h];null!=N&&N!==S&&x.some((function(e){return e.value===N}))&&T(N)}var C=function(e){var n=e.currentTarget,t=F.indexOf(n),a=x[t].value;a!==S&&(I(n),T(a),null!=h&&_(h,String(a)))},E=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a,r=F.indexOf(e.currentTarget)+1;t=null!=(a=F[r])?a:F[0];break;case"ArrowLeft":var o,i=F.indexOf(e.currentTarget)-1;t=null!=(o=F[i])?o:F[F.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",l)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},w)},x.map((function(e){var n=e.value,t=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:S===n?0:-1,"aria-selected":S===n,key:n,ref:function(e){return F.push(e)},onKeyDown:E,onFocus:C,onClick:C},i,{className:(0,o.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":S===n})}),null!=t?t:n)}))),i?(0,r.cloneElement)(g.filter((function(e){return e.props.value===S}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==S})}))))}function f(e){var n=(0,i.Z)();return r.createElement(p,(0,a.Z)({key:String(n)},e))}}}]);