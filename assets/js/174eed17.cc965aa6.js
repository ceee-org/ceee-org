"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[89821],{58838:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],l={description:"Getting started with the official IOTA Client Library Rust library.",image:"/img/logo/iota_mark_light.png",keywords:["Rust","install","cargo","system environment variables","how to"]},s="Getting Started With Rust",u={unversionedId:"libraries/rust/getting_started",id:"libraries/rust/getting_started",title:"Getting Started With Rust",description:"Getting started with the official IOTA Client Library Rust library.",source:"@site/external/iota.rs/documentation/docs/libraries/rust/getting_started.md",sourceDirName:"libraries/rust",slug:"/libraries/rust/getting_started",permalink:"/iota.rs/libraries/rust/getting_started",editUrl:"https://github.com/iotaledger/iota.rs/edit/mainnet/external/iota.rs/documentation/docs/libraries/rust/getting_started.md",tags:[],version:"current",frontMatter:{description:"Getting started with the official IOTA Client Library Rust library.",image:"/img/logo/iota_mark_light.png",keywords:["Rust","install","cargo","system environment variables","how to"]},sidebar:"docs",previous:{title:"IOTA Client Libraries",permalink:"/iota.rs/libraries/overview"},next:{title:"Examples",permalink:"/iota.rs/libraries/rust/examples"}},c={},p=[{value:"Requirements",id:"requirements",level:2},{value:"Using the Library",id:"using-the-library",level:2},{value:"Initialisation",id:"initialisation",level:3}],d={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started-with-rust"},"Getting Started With Rust"),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("p",null,"To use the library, you should update ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rust-lang/rustup.rs#keeping-rust-up-to-date"},"Rust to the latest stable version"),".\nYou can update your Rust installation by running the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"rustup update stable\n")),(0,a.kt)("p",null,"The nightly version should also be fine, but some changes might not be compatible."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"no_std")," is not currently supported.  We are working on it in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/bee"},"Bee"),", and will provide\nit as feature once the new implementation is ready."),(0,a.kt)("h2",{id:"using-the-library"},"Using the Library"),(0,a.kt)("p",null,"To use the iota.rs library, you will simply need to add it as dependency in your ",(0,a.kt)("inlineCode",{parentName:"p"},"Cargo.toml"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'[dependencies]\niota-client = { git = "https://github.com/iotaledger/iota.rs", branch = "dev" }\n# asynchronous runtime\ntokio = { version = "1.12.0", features = ["full"] }\n')),(0,a.kt)("p",null,"After you have added it, you can use the library in your code with ",(0,a.kt)("inlineCode",{parentName:"p"},"use iota_client;"),"."),(0,a.kt)("h3",{id:"initialisation"},"Initialisation"),(0,a.kt)("p",null,"You can use the following example to initialize the library and fetch node information."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'use iota_client::Client;\n\n#[tokio::main]\nasync fn main() {\n    let iota = Client::builder() // Crate a client instance builder\n        .with_node("https://api.lb-0.h.chrysalis-devnet.iota.cafe")\n        .unwrap()\n        .finish()\n        .await\n        .unwrap();\n\n    let info = iota.get_info().await.unwrap();\n    println!("Nodeinfo: {:?}", info);\n}\n')))}m.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);