"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[88125],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>p});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),d=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=d(r),p=n,h=g["".concat(l,".").concat(p)]||g[p]||u[p]||i;return r?a.createElement(h,o(o({ref:t},c),{},{components:r})):a.createElement(h,o({ref:t},c))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var d=2;d<i;d++)o[d]=r[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},35407:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=r(87462),n=(r(67294),r(3905));const i={title:"Firefly Ledger user guide",description:"Firefly user guide for owners of Ledger Nano hardware wallets"},o=void 0,s={unversionedId:"wallets/firefly/user-guide-ledger",id:"wallets/firefly/user-guide-ledger",title:"Firefly Ledger user guide",description:"Firefly user guide for owners of Ledger Nano hardware wallets",source:"@site/shimmer/use/wallets/firefly/user-guide-ledger.md",sourceDirName:"wallets/firefly",slug:"/wallets/firefly/user-guide-ledger",permalink:"/shimmer/use/wallets/firefly/user-guide-ledger",draft:!1,editUrl:"https://github.com/iota-wiki/iota-wiki/edit/main/shimmer/use/wallets/firefly/user-guide-ledger.md",tags:[],version:"current",lastUpdatedAt:1666041643,formattedLastUpdatedAt:"Oct 17, 2022",frontMatter:{title:"Firefly Ledger user guide",description:"Firefly user guide for owners of Ledger Nano hardware wallets"},sidebar:"use",previous:{title:"Firefly user guide",permalink:"/shimmer/use/wallets/firefly/user-guide"},next:{title:"Firefly FAQ",permalink:"/shimmer/use/wallets/firefly/faq-and-troubleshooting"}},l={},d=[{value:"What is a Ledger Nano?",id:"what-is-a-ledger-nano",level:2},{value:"Before you start, make sure",id:"before-you-start-make-sure",level:2},{value:"Install the Shimmer app on your ledger device",id:"install-the-shimmer-app-on-your-ledger-device",level:2},{value:"Creating a new Ledger profile",id:"creating-a-new-ledger-profile",level:3},{value:"Receiving tokens",id:"receiving-tokens",level:3},{value:"Sending tokens",id:"sending-tokens",level:3},{value:"Creating wallets and sending internal transfers",id:"creating-wallets-and-sending-internal-transfers",level:3},{value:"Restoring an existing Ledger profile",id:"restoring-an-existing-ledger-profile",level:3},{value:"Adding a second Ledger device to Firefly",id:"adding-a-second-ledger-device-to-firefly",level:3}],c={toc:d};function u(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Firefly is available on Windows, Mac and Linux and supports Ledger Nano X and Ledger Nano S via USB connection. The Ledger Nano integration is straightforward and similar to using Firefly with a non-Ledger profile. This guide serves as an additional resource to help you understand how you can use your ledger to secure your tokens with Firefly and what you need to be aware of when you perform certain actions while using the wallet."),(0,n.kt)("h2",{id:"what-is-a-ledger-nano"},"What is a Ledger Nano?"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.ledger.com/"},"Ledger Nano")," is a hardware device that connects to your computer via USB (other models are available with bluetooth support but this is not currently supported in Firefly). When you set up your Ledger Nano, you are instructed to safely store a recovery phrase. This recovery phrase is used by the device to sign transactions and generate addresses. It is not possible to extract the recovery phrase (or private keys generated from it) from the Ledger device. So it is important to store your recovery phrase safely. The hardware device creates a boundary between your computer and the private keys needed to access your funds. It provides a level of security that is simply not possible with software alone."),(0,n.kt)("h2",{id:"before-you-start-make-sure"},"Before you start, make sure"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You have ",(0,n.kt)("a",{parentName:"li",href:"https://support.ledgerwallet.com/hc/en-us/articles/360000613793"},"initialized")," your Ledger device."),(0,n.kt)("li",{parentName:"ul"},"Ledger Live is ",(0,n.kt)("a",{parentName:"li",href:"https://www.ledger.com/ledger-live/download"},"installed and ready to use"),"."),(0,n.kt)("li",{parentName:"ul"},"The latest firmware is ",(0,n.kt)("a",{parentName:"li",href:"https://support.ledgerwallet.com/hc/en-us/articles/360002731113"},"installed"),"."),(0,n.kt)("li",{parentName:"ul"},"You have installed the latest version of Firefly")),(0,n.kt)("h2",{id:"install-the-shimmer-app-on-your-ledger-device"},"Install the Shimmer app on your ledger device"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Open the Manager tab in Ledger Live."),(0,n.kt)("li",{parentName:"ul"},"Connect and unlock your Ledger device."),(0,n.kt)("li",{parentName:"ul"},"Follow the onscreen instructions and allow Ledger Manager."),(0,n.kt)("li",{parentName:"ul"},"Find and install Shimmer in the app catalog.")),(0,n.kt)("h3",{id:"creating-a-new-ledger-profile"},"Creating a new Ledger profile"),(0,n.kt)("p",null,'Creating a new Ledger profile in Firefly is quick and simple. Once you have downloaded Firefly, open the app and follow the setup instructions. You first need to review and accept the terms and conditions, set a theme (dark or light), then select "Create a new Shimmer profile".'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"setup a shimmer profile",src:r(23310).Z,width:"3456",height:"2234"})),(0,n.kt)("p",null,'Press "Create a hardware profile" to begin the Ledger profile setup process.'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"create a hardware profile",src:r(33344).Z,width:"3456",height:"2234"})),(0,n.kt)("p",null,"Choose a profile name. On the next page, you will be asked to set a PIN code. This PIN is used to log in to your wallet and blocks other people from logging in and viewing your balance transaction history. Choose a PIN that only you know and re-enter your PIN to confirm."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"set profile pin",src:r(3190).Z,width:"3456",height:"2234"})),(0,n.kt)("p",null,'Now, Firefly will check that your Ledger Nano is connected. Make sure the Shimmer app is open on your device and that Ledger Live is closed. If you have connection problems follow the "Tips if your Ledger isn\'t connecting" guide in Firefly.'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"connect ledger shimmer",src:r(42631).Z,width:"3456",height:"2234"})),(0,n.kt)("p",null,'Hit "Finish Setup" and just wait for the dashboard to load. That\'s all there is to it. It really is that simple. You can now enter the dashboard and begin exploring Firefly.'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"finish setup ledger",src:r(26021).Z,width:"3456",height:"2234"})),(0,n.kt)("h3",{id:"receiving-tokens"},"Receiving tokens"),(0,n.kt)("p",null,'If you would like to receive funds to your new Ledger profile just click within the "Receive funds" button on the dashboard. Firefly will then copy the address to the clipboard.'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"copied to clipboard",src:r(53216).Z,width:"3456",height:"2234"})),(0,n.kt)("p",null,"You can now share it with a friend or an exchange from which you wish to receive tokens."),(0,n.kt)("h3",{id:"sending-tokens"},"Sending tokens"),(0,n.kt)("p",null,'Once you have received tokens to an address, your balance will update and you will be able to view the transaction in the transaction history. To send these tokens, press the "Send funds" button from the dashboard. Here you can fill in the address you want to send to, enter an amount, and hit "Send". Review your transaction details and then hit "Confirm".'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"send funds ledger",src:r(74498).Z,width:"3456",height:"2234"})),(0,n.kt)("p",null,'You will then need to confirm that the full transaction details match what is displayed on your Ledger device. Confirm the details match by pressing both buttons when your Ledger reads "Accept". If they do not match press "Deny".'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"confirm send ledger",src:r(75821).Z,width:"3456",height:"2234"})),(0,n.kt)("p",null,"Note: This is a security check to ensure that you are connected to the official, secure version of Firefly. It ensures that no malicious software can alter the contents of your transaction and ensures you are sending the right amount to the correct address."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"dispaly amount ledger",src:r(67697).Z,width:"900",height:"228"}),(0,n.kt)("img",{alt:"display accept ledger",src:r(62405).Z,width:"904",height:"234"})),(0,n.kt)("h3",{id:"creating-wallets-and-sending-internal-transfers"},"Creating wallets and sending internal transfers"),(0,n.kt)("p",null,'Firefly makes it possible to organize your tokens into different wallets within your profile. These tokens are kept separate from one another. Technically speaking, they are stored on addresses generated on different sub-accounts on your Ledger. To add a new wallet to your profile, navigate to the wallet summary view and press "Add a wallet". Choose a name for your new wallet and press "Create".'),(0,n.kt)("p",null,"Note: Your Ledger device must be unlocked and the Shimmer app must be opened in order to generate an address for the new wallet. "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"add wallet ledger",src:r(17202).Z,width:"3456",height:"2234"}),(0,n.kt)("img",{alt:"new wallet name ledger",src:r(31397).Z,width:"3456",height:"2234"})),(0,n.kt)("p",null,'With multiple wallets, you can then send between them and split your tokens up to organize them however you like. In the "Send funds" view you can now automatically choose other wallets on your profile to send to.'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"multiple wallet send ledger",src:r(17649).Z,width:"3456",height:"2234"})),(0,n.kt)("h3",{id:"restoring-an-existing-ledger-profile"},"Restoring an existing Ledger profile"),(0,n.kt)("p",null,'If you need to restore an existing Firefly profile with a new device, or you somehow lose access to Firefly, you can plug in your Ledger and restore an existing profile in a few simple steps. To do so, select "Restore Shimmer profile" in setup and then "Use Ledger device".'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"setup a shimmer profile",src:r(23310).Z,width:"3456",height:"2234"}),(0,n.kt)("img",{alt:"use ledger device",src:r(5858).Z,width:"3456",height:"2234"})),(0,n.kt)("p",null,"Note: Backups of your transaction history for Ledger Nano users are not currently supported but will be added in a later version. Once a profile is restored, Firefly will sync your transaction history. It will always find your balance. In a future version, we will add support for retrieving your full transaction history from a node that stores the complete history of the Shimmer Tangle."),(0,n.kt)("h3",{id:"adding-a-second-ledger-device-to-firefly"},"Adding a second Ledger device to Firefly"),(0,n.kt)("p",null,"It is possible to have more than one Ledger device with the same Firefly app. You can add another device by creating an additional profile from the login page. Firefly will always check that the right device is connected and you will receive an error message if you try to generate an address or send a transaction with the wrong device."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"multiple ledger profiles",src:r(12869).Z,width:"3456",height:"2234"})))}u.isMDXComponent=!0},17202:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/add_wallet_ledger-e6dcb2fcaabdd18ca1ee1eade90a904e.png"},75821:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/confirm_send_ledger-d8cf9a80d8d4c1c5d3d247b3f337d11c.png"},42631:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/connect_ledger_shimmer-5fab7a012e5749e8793b63af0ff33ba6.png"},53216:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/copied_to_clipboard-cfcee600cd34b8bfcdbd79b315cb3529.png"},33344:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/create_a_hardware_profile-b6bf597ee512e3a96eae51f9f037500e.png"},67697:(e,t,r)=>{r.d(t,{Z:()=>a});const a="data:image/png;base64,UklGRioBAABXRUJQVlA4TB0BAAAvg8M4ABcgEEhS2B92jYEQCyaTyB+0Z/4DtwZ0Y9t2bUXTmajoprNQ0WGT5lPF/R/RfQteRP8n4PvT/0///xPyB+5PkkzIhIQkISEhSZIESDIhISFJMjNJSBJISO7+dmIgSfKhBGjyEPkQCckJgyYP0LZbbZvXaEKb3Nr8EbRJ284PB01edH+NaXL+eW2f/vsT1Dz/tM0DNM8w2WwT2oRmk2yzbfN8kUdpl9JsNmk275hNmhwxL/IskHkY6b52MV8GCclJICGPcvl6kMlJ4KsAeYQ2afMOupCXQnIW+MBxm0D30Sa02R20eYyrZ4vX+um/f8prAs1rTaAJNK80gSZ5TsmEJC+SJEmSfOTAJws4Vp54TLK/sjz9//T/c7QA"},62405:(e,t,r)=>{r.d(t,{Z:()=>a});const a="data:image/png;base64,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"},26021:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/finish_setup_ledger-71521142765614abdde636e96a89ea1e.png"},12869:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/multiple_ledger_profiles-15831f13e5257d722d63b0058e3fc1d1.png"},17649:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/multiple_wallet_send_ledger-c57cefedaab1f4ea9319349ab3d16371.png"},31397:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/new_wallet_name_ledger-c2bff5c812546f05641ff89d35697cd9.png"},74498:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/send_funds_ledger-5549c395d48437fab1f3f11f3bc43214.png"},3190:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/set_profile_pin-3c3c063e700cd586114a6e90e0ec2830.png"},23310:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/setup_a_shimmer_profile-76aa6777f6483d347d170964f37980eb.png"},5858:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/use_ledger_device-5d36b0ba1583c59c7ad9c3c399bbb54b.png"}}]);