"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[43541],{74848:function(e,t,n){n.d(t,{ZP:function(){return s}});var o=n(87462),r=n(63366),i=(n(67294),n(3905)),a=["components"],l={toc:[]};function s(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"More advanced examples can be found in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/iota.rs/tree/develop/examples"},"examples")," folder."))}s.isMDXComponent=!0},13103:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return _},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return k}});var o=n(87462),r=n(63366),i=(n(67294),n(3905)),a=n(69319),l=n(74848),s=["components"],c={title:"How To Get A Block"},d=void 0,u={unversionedId:"libraries/rust/how_to/get_block",id:"libraries/rust/how_to/get_block",title:"How To Get A Block",description:"Run it with",source:"@site/content/build/iota.rs/develop/documentation/docs/libraries/rust/how_to/get_block.mdx",sourceDirName:"libraries/rust/how_to",slug:"/libraries/rust/how_to/get_block",permalink:"/iota.rs/develop/libraries/rust/how_to/get_block",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/develop/documentation/content/build/iota.rs/develop/documentation/docs/libraries/rust/how_to/get_block.mdx",tags:[],version:"current",frontMatter:{title:"How To Get A Block"},sidebar:"docs",previous:{title:"How To Get Node Info",permalink:"/iota.rs/develop/libraries/rust/how_to/get_node_info"},next:{title:"How To Create A Block",permalink:"/iota.rs/develop/libraries/rust/how_to/create_block"}},p={},k=[],m={toc:k};function _(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(a.Z,{className:"language-rust",mdxType:"CodeBlock"},'// Copyright 2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! Calls `GET /api/core/v2/blocks/{blockId}`.\n//! Returns block data as JSON by its identifier.\n//! Run: `cargo run --example node_api_core_get_block --release -- [NODE URL] [BLOCK ID]`.\n\nuse std::str::FromStr;\n\nuse iota_client::{block::BlockId, Client, Result};\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    // Take the node URL from command line argument or use one from env as default.\n    let node_url = std::env::args().nth(1).unwrap_or_else(|| {\n        // This example uses dotenv, which is not safe for use in production.\n        dotenv::dotenv().ok();\n        std::env::var("NODE_URL").unwrap()\n    });\n\n    // Create a client with that node.\n    let client = Client::builder()\n        .with_node(&node_url)?\n        .with_node_sync_disabled()\n        .finish()?;\n\n    // Take the block ID from command line argument or...\n    let block_id = if let Some(Ok(block_id)) = std::env::args().nth(2).map(|s| BlockId::from_str(&s)) {\n        block_id\n    } else {\n        // ... fetch one from the node.\n        client.get_tips().await?[0]\n    };\n\n    // Get the block.\n    let block = client.get_block(&block_id).await?;\n\n    println!("{block:#?}");\n\n    Ok(())\n}\n'),(0,i.kt)("p",null,"Run it with"),(0,i.kt)(a.Z,{className:"language-bash",mdxType:"CodeBlock"},"cargo run --example node_api_core_get_block --release -- [NODE URL] [BLOCK ID]"),(0,i.kt)(l.ZP,{mdxType:"MoreExamples"}))}_.isMDXComponent=!0}}]);