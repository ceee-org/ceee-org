"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[94356],{98521:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return l},default:function(){return b},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return m}});var o=n(87462),a=n(63366),i=(n(67294),n(3905)),s=n(69319),r=n(83586),u=["components"],c={title:"How To Claim Outputs"},l=void 0,d={unversionedId:"libraries/nodejs/how_to/claim_outputs",id:"libraries/nodejs/how_to/claim_outputs",title:"How To Claim Outputs",description:"",source:"@site/content/build/wallet.rs/develop/documentation/docs/libraries/nodejs/how_to/8_claim_outputs.mdx",sourceDirName:"libraries/nodejs/how_to",slug:"/libraries/nodejs/how_to/claim_outputs",permalink:"/wallet.rs/develop/libraries/nodejs/how_to/claim_outputs",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/develop/documentation/content/build/wallet.rs/develop/documentation/docs/libraries/nodejs/how_to/8_claim_outputs.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"How To Claim Outputs"},sidebar:"docs",previous:{title:"How To Get Balance",permalink:"/wallet.rs/develop/libraries/nodejs/how_to/get_balance"},next:{title:"How To Mint Native Tokens",permalink:"/wallet.rs/develop/libraries/nodejs/how_to/mint_native_tokens"}},p={},m=[],w={toc:m};function b(t){var e=t.components,n=(0,a.Z)(t,u);return(0,i.kt)("wrapper",(0,o.Z)({},w,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)(s.Z,{className:"language-javascript",mdxType:"CodeBlock"},"/**\n * This example sends IOTA tokens with an expiration date and claims them.\n */\n\nconst getUnlockedManager = require('./account-manager');\n\nlet manager\nlet bob\n\nasync function run() {\n    try {\n        manager = await getUnlockedManager();\n        const alice = await manager.getAccount('Alice');\n        bob = await manager.getAccount('Bob');\n\n        manager.listen(['NewOutput'], handleNewOutputOfBob)\n\n        const recipientAddress = bob.meta.publicAddresses[0].address\n        const amount = '1000000';\n\n        const outputData = await alice.prepareOutput(\n            {\n                recipientAddress,\n                amount,\n                unlocks: {\n                    expiration: {\n                        unixTime: Math.round(new Date().getTime() / 1000) + 15000\n                    }\n                }\n            },\n        );\n\n        const resp = await alice.sendOutputs([outputData])\n        console.log('Transaction is sent', resp)\n\n        // Sync account to get the output event\n        setTimeout(async () => {\n            await bob.sync();\n        }, 10000)\n    } catch (error) {\n        console.log('Error: ', error);\n    }\n}\n\nasync function handleNewOutputOfBob(err, data) {\n    console.log('Output received:', data)\n    const event = JSON.parse(data)\n    if (event.accountIndex === bob.meta.index) {\n        const outputId = event.event.NewOutput.output.outputId\n        await bob.sync()\n        const resp = await bob.claimOutputs([outputId])\n        console.log('Output has been claimed in the following transaction:', resp)\n        process.exit(0)\n    }\n}\nrun();\n"),(0,i.kt)(r.ZP,{mdxType:"MoreExamples"}))}b.isMDXComponent=!0},83586:function(t,e,n){n.d(e,{ZP:function(){return u}});var o=n(87462),a=n(63366),i=(n(67294),n(3905)),s=["components"],r={toc:[]};function u(t){var e=t.components,n=(0,a.Z)(t,s);return(0,i.kt)("wrapper",(0,o.Z)({},r,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"More advanced examples can be found in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wallet.rs/tree/develop/bindings/nodejs/examples"},"examples")," folder."))}u.isMDXComponent=!0}}]);