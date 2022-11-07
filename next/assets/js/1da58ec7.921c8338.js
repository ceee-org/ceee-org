"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[40290],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(n),h=o,c=u["".concat(s,".").concat(h)]||u[h]||m[h]||r;return n?a.createElement(c,l(l({ref:t},p),{},{components:n})):a.createElement(c,l({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var d=2;d<r;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},24777:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var a=n(87462),o=(n(67294),n(3905));const r={description:"How to set up your own GoShimmer node in the GoShimmer testnet with Docker",image:"/img/tutorials/setup/dashboard.png",keywords:["node","set up","docker","http API","tcp","dashboard","prometheus","grafana"]},l="Setting up a GoShimmer node",i={unversionedId:"tutorials/setup",id:"tutorials/setup",title:"Setting up a GoShimmer node",description:"How to set up your own GoShimmer node in the GoShimmer testnet with Docker",source:"@site/next/external/goshimmer/documentation/docs/tutorials/setup.md",sourceDirName:"tutorials",slug:"/tutorials/setup",permalink:"/next/goshimmer/tutorials/setup",draft:!1,editUrl:"https://github.com/iotaledger/goshimmer/edit/develop/documentation/next/external/goshimmer/documentation/docs/tutorials/setup.md",tags:[],version:"current",frontMatter:{description:"How to set up your own GoShimmer node in the GoShimmer testnet with Docker",image:"/img/tutorials/setup/dashboard.png",keywords:["node","set up","docker","http API","tcp","dashboard","prometheus","grafana"]},sidebar:"docs",previous:{title:"FAQ",permalink:"/next/goshimmer/faq"},next:{title:"How to Obtain Tokens From the Faucet",permalink:"/next/goshimmer/tutorials/obtain_tokens"}},s={},d=[{value:"Why You Should Run a Node",id:"why-you-should-run-a-node",level:2},{value:"Installing GoShimmer with Docker",id:"installing-goshimmer-with-docker",level:2},{value:"Hardware Requirements",id:"hardware-requirements",level:4},{value:"Install Docker",id:"install-docker",level:4},{value:"Install Docker Compose",id:"install-docker-compose",level:3},{value:"Define the docker-compose.yml",id:"define-the-docker-composeyml",level:3},{value:"Running the GoShimmer Node",id:"running-the-goshimmer-node",level:2},{value:"Syncing",id:"syncing",level:3},{value:"Dashboard",id:"dashboard",level:4},{value:"HTTP API",id:"http-api",level:4},{value:"Managing the GoShimmer node lifecycle",id:"managing-the-goshimmer-node-lifecycle",level:2},{value:"Stopping the Node",id:"stopping-the-node",level:3},{value:"Resetting the Node",id:"resetting-the-node",level:3},{value:"Upgrading the Node",id:"upgrading-the-node",level:3},{value:"Following Log Output",id:"following-log-output",level:3},{value:"Create a log.txt",id:"create-a-logtxt",level:3},{value:"Update Grafana Dashboard",id:"update-grafana-dashboard",level:3},{value:"Setting up the Grafana dashboard",id:"setting-up-the-grafana-dashboard",level:2},{value:"Add Prometheus and Grafana Containers to <code>docker-compose.yml</code>",id:"add-prometheus-and-grafana-containers-to-docker-composeyml",level:3},{value:"Create Prometheus config",id:"create-prometheus-config",level:4},{value:"Create Grafana configs",id:"create-grafana-configs",level:4},{value:"Run GoShimmer with Prometheus and Grafana:",id:"run-goshimmer-with-prometheus-and-grafana",level:4},{value:"Installing Goshimmer by Building From Source",id:"installing-goshimmer-by-building-from-source",level:2},{value:"Software Requirements",id:"software-requirements",level:3},{value:"Installing RocksDB Compression Libraries",id:"installing-rocksdb-compression-libraries",level:4},{value:"GCC and G++",id:"gcc-and-g",level:4},{value:"Installing Golang-go",id:"installing-golang-go",level:4},{value:"Clone the Repository",id:"clone-the-repository",level:3},{value:"Download the Snapshot",id:"download-the-snapshot",level:3},{value:"Making the Node Dashboard Accessible",id:"making-the-node-dashboard-accessible",level:3},{value:"Run the GoShimmer Node",id:"run-the-goshimmer-node",level:3},{value:"Stopping the Node",id:"stopping-the-node-1",level:3}],p={toc:d};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"setting-up-a-goshimmer-node"},"Setting up a GoShimmer node"),(0,o.kt)("p",null,"This page describes how to set up your own GoShimmer node in the GoShimmer testnet with Docker."),(0,o.kt)("admonition",{title:"DISCLAIMER",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Note that there will be breaking changes frequently (approx. bi-weekly) where the entire network needs to upgrade. If you don't have time to continuously monitor and upgrade your node, then running a GoShimmer node might not be for you.")),(0,o.kt)("p",{parentName:"admonition"},"We want to emphasize that running a GoShimmer node requires proper knowledge in Linux and IT related topics such as networking and so on. It is not meant as a node to be run by people with little experience in the mentioned fields. ",(0,o.kt)("strong",{parentName:"p"},"Do not plan to run any production level services on your node/network."))),(0,o.kt)("h2",{id:"why-you-should-run-a-node"},"Why You Should Run a Node"),(0,o.kt)("p",null,"Running a node in the GoShimmer testnet helps us in the following ways:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It increases the amount of nodes in the network and thus lets it form a more realistic network."),(0,o.kt)("li",{parentName:"ul"},"Your node will be configured to send debug log blocks to a centralized logger from which we can assess and debug research questions and occurring problems."),(0,o.kt)("li",{parentName:"ul"},"Your node is configured to send metric data to a centralized analysis server where we store information such as resource consumption, traffic, and so on. This data helps us further fostering the development of GoShimmer and assessing network behavior."),(0,o.kt)("li",{parentName:"ul"},"If you expose your HTTP API port, you provide an entrypoint for other people to interact with the network.")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Any metric data is anonymous.")),(0,o.kt)("h2",{id:"installing-goshimmer-with-docker"},"Installing GoShimmer with Docker"),(0,o.kt)("h4",{id:"hardware-requirements"},"Hardware Requirements"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"We do not provide a Docker image or binaries for ARM based systems such as Raspberry Pis.")),(0,o.kt)("p",null,"We recommend running GoShimmer on a x86 VPS with following minimum hardware specs:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"2 cores / 4 threads"),(0,o.kt)("li",{parentName:"ul"},"4 GB of memory"),(0,o.kt)("li",{parentName:"ul"},"40 GB of disk space")),(0,o.kt)("p",null,"A cheap ",(0,o.kt)("a",{parentName:"p",href:"https://www.hetzner.de/cloud"},"CX21 Hetzner instance")," is thereby sufficient."),(0,o.kt)("p",null,"If you plan on running your GoShimmer node from home, please only do so if you know how to properly configure NAT on your router, as otherwise your node will not correctly participate in the network."),(0,o.kt)("hr",null),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"In the following sections we are going to use a CX21 Hetzner instance with Ubuntu 20.04 while being logged in as root")),(0,o.kt)("p",null,"Lets first upgrade the packages on our system:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"apt update && apt dist-upgrade -y\n")),(0,o.kt)("h4",{id:"install-docker"},"Install Docker"),(0,o.kt)("p",null,"Follow the official ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/ubuntu/"},"Docker installation guide")),(0,o.kt)("p",null,"On windows-subsystem for Linux (WSL2) it may be necessary to start docker seperately:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/etc/init.d/docker start\n")),(0,o.kt)("p",null,"Note, this may not work on WSL1."),(0,o.kt)("p",null,"Check whether docker is running by executing ",(0,o.kt)("inlineCode",{parentName:"p"},"docker ps"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker ps\nCONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES\n")),(0,o.kt)("h3",{id:"install-docker-compose"},"Install Docker Compose"),(0,o.kt)("p",null,"Docker compose gives us the ability to define our services with ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," files instead of having to define all container parameters directly on the CLI."),(0,o.kt)("p",null,"Download docker compose:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"apt-get install docker-compose-plugin\n")),(0,o.kt)("p",null,"Check that docker compose works:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker compose --version\nDocker Compose version v2.10.2\n")),(0,o.kt)("h3",{id:"define-the-docker-composeyml"},"Define the docker-compose.yml"),(0,o.kt)("p",null,"First, lets create a user defined bridged network. Unlike the already existing ",(0,o.kt)("inlineCode",{parentName:"p"},"bridge")," network, the user defined one will have container name DNS resolution for containers within that network. This is useful if later we want to setup additional containers which need to speak with the GoShimmer container."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker network create --driver=bridge goshimmer\nc726034d295c3df66803b92c71ca517a0cf0e3c65c1c6d84ee5fa34ae76cbcd4\n")),(0,o.kt)("p",null,"Lets create a folder holding our ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir /opt/goshimmer\n")),(0,o.kt)("p",null,"Lets create a folder holding our database:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd /opt/goshimmer\nsudo mkdir mainnetdb && sudo chown 65532:65532 mainnetdb\nsudo mkdir peerdb && sudo chown 65532:65532 peerdb\n")),(0,o.kt)("p",null,"Finally, lets create our ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"nano docker-compose.yml\n")),(0,o.kt)("p",null,"and add following content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'version: \'3.3\'\n\nnetworks:\n  outside:\n    external:\n      name: goshimmer\n\nservices:\n  goshimmer:\n    image: iotaledger/goshimmer:latest\n    container_name: goshimmer\n    hostname: goshimmer\n    stop_grace_period: 2m\n    volumes:\n      - "./mainnetdb:/app/mainnetdb:rw"\n      - "./peerdb:/app/peerdb:rw"\n      - "/etc/localtime:/etc/localtime:ro"\n    ports:\n      # Autopeering\n      - "0.0.0.0:14626:14626/udp"\n      # Gossip\n      - "0.0.0.0:14666:14666/tcp"\n      # HTTP API\n      - "0.0.0.0:8080:8080/tcp"\n      # Dashboard\n      - "0.0.0.0:8081:8081/tcp"\n      # pprof profiling\n      - "0.0.0.0:6061:6061/tcp"\n    environment:\n      - ANALYSIS_CLIENT_SERVERADDRESS=analysisentry-01.devnet.shimmer.iota.cafe:21888\n      - AUTOPEERING_BINDADDRESS=0.0.0.0:14626\n      - DASHBOARD_BINDADDRESS=0.0.0.0:8081\n      - GOSSIP_BINDADDRESS=0.0.0.0:14666\n      - WEBAPI_BINDADDRESS=0.0.0.0:8080\n      - PROFILING_BINDADDRESS=0.0.0.0:6061\n      - NETWORKDELAY_ORIGINPUBLICKEY=9DB3j9cWYSuEEtkvanrzqkzCQMdH1FGv3TawJdVbDxkd\n      - PROMETHEUS_BINDADDRESS=0.0.0.0:9311\n    command: >\n      --skip-config=true\n      --autoPeering.entryNodes=2PV5487xMw5rasGBXXWeqSi4hLz7r19YBt8Y1TGAsQbj@analysisentry-01.devnet.shimmer.iota.cafe:15626,5EDH4uY78EA6wrBkHHAVBWBMDt7EcksRq6pjzipoW15B@entry-0.devnet.tanglebay.com:14646,CAB87iQZR6BjBrCgEBupQJ4gpEBgvGKKv3uuGVRBKb4n@entry-1.devnet.tanglebay.com:14646\n      --node.disablePlugins=portcheck\n      --node.enablePlugins=remotelog,networkdelay,spammer,prometheus\n      --database.directory=/app/mainnetdb\n      --node.peerDBDirectory=/app/peerdb\n      --logger.level=info\n      --logger.disableEvents=false\n      --logger.remotelog.serverAddress=metrics-01.devnet.shimmer.iota.cafe:5213\n    networks:\n      - outside\n')),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"If performance is a concern, you can also run your containers with ",(0,o.kt)("inlineCode",{parentName:"p"},'network_mode: "host"'),", however, you must then adjust the hostnames in the configs for the corresponding containers and perhaps also create some iptable rules to block traffic from outside accessing your services directly.")),(0,o.kt)("p",null,"If your home network is IPv6-only (as is common for some ISPs in a few countries like Germany), make sure your docker installation is configured to support IPv6 as this is not always the default setting. If your ports and firewalls are configured correctly and your GoShimmer node does start but does not seem to find any neighbors even after a little while, this might be the solution to your problem. Find the very short guide to enable IPv6 support for docker in the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/config/daemon/ipv6/"},"Docker documentation"),"."),(0,o.kt)("p",null,":::"),(0,o.kt)("p",null,"Note how we are setting up NATs for different ports:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Port"),(0,o.kt)("th",{parentName:"tr",align:null},"Functionality"),(0,o.kt)("th",{parentName:"tr",align:null},"Protocol"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"14626"),(0,o.kt)("td",{parentName:"tr",align:null},"Autopeering"),(0,o.kt)("td",{parentName:"tr",align:null},"UDP")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"14666"),(0,o.kt)("td",{parentName:"tr",align:null},"Gossip"),(0,o.kt)("td",{parentName:"tr",align:null},"TCP")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"8080"),(0,o.kt)("td",{parentName:"tr",align:null},"HTTP API"),(0,o.kt)("td",{parentName:"tr",align:null},"TCP/HTTP")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"8081"),(0,o.kt)("td",{parentName:"tr",align:null},"Dashboard"),(0,o.kt)("td",{parentName:"tr",align:null},"TCP/HTTP")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"6061"),(0,o.kt)("td",{parentName:"tr",align:null},"pprof HTTP API"),(0,o.kt)("td",{parentName:"tr",align:null},"TCP/HTTP")))),(0,o.kt)("p",null,"It is important that the ports are correctly mapped so that the node can gain inbound neighbors."),(0,o.kt)("admonition",{title:"INFO",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"If the UDP NAT mapping is not configured correctly, GoShimmer will terminate with an error block stating to check the NAT configuration")),(0,o.kt)("h2",{id:"running-the-goshimmer-node"},"Running the GoShimmer Node"),(0,o.kt)("p",null,"Within the ",(0,o.kt)("inlineCode",{parentName:"p"},"/opt/goshimmer")," folder where the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," resides, simply execute:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker compose up -d\nPulling goshimmer (iotaledger/goshimmer:0.2.0)...\n...\n")),(0,o.kt)("p",null,"to start the GoShimmer node."),(0,o.kt)("p",null,"You should see your container running now:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                                                                                                                                    NAMES\n687f52b78cb5        iotaledger/goshimmer:0.2.0       "/run/goshimmer --sk\u2026"   19 seconds ago      Up 17 seconds       0.0.0.0:6061->6061/tcp, 0.0.0.0:8080-8081->8080-8081/tcp, 0.0.0.0:10895->10895/tcp, 0.0.0.0:14666->14666/tcp, 0.0.0.0:14626->14626/udp   goshimmer\n')),(0,o.kt)("p",null,"You can follow the log output of the node via:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker logs -f --since=1m goshimmer\n")),(0,o.kt)("h3",{id:"syncing"},"Syncing"),(0,o.kt)("p",null,"When the node starts for the first time, it must synchronize its state with the rest of the network. GoShimmer currently uses the Tangle Time to help nodes determine their synced status."),(0,o.kt)("h4",{id:"dashboard"},"Dashboard"),(0,o.kt)("p",null,"The dashboard of your GoShimmer node should be accessible via ",(0,o.kt)("inlineCode",{parentName:"p"},"http://<your-ip>:8081"),". If your node is still synchronizing, you might see a higher inflow of BPS."),(0,o.kt)("p",null,(0,o.kt)("a",{target:"_blank",href:n(17612).Z},(0,o.kt)("img",{alt:"GoShimmer Dashboard",src:n(86745).Z,width:"1908",height:"1581"}))),(0,o.kt)("p",null,"After a while, your node's dashboard should also display up to 8 neighbors:\n",(0,o.kt)("a",{target:"_blank",href:n(8166).Z},(0,o.kt)("img",{alt:"GoShimmer Dashboard Neighbors",src:n(44890).Z,width:"992",height:"659"}))),(0,o.kt)("h4",{id:"http-api"},"HTTP API"),(0,o.kt)("p",null,"GoShimmer also exposes an HTTP API. To check whether that works correctly, you can access it via ",(0,o.kt)("inlineCode",{parentName:"p"},"http://<your-ip>:8080/info")," which should return a JSON response in the form of:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "version": "v0.6.2",\n  "networkVersion": 30,\n  "tangleTime": {\n    "blockID": "6ndfmfogpH9H8C9X9Fbb7Jmuf8RJHQgSjsHNPdKUUhoJ",\n    "time": 1621879864032595415,\n    "synced": true\n  },\n  "identityID": "D9SPFofAGhA5V9QRDngc1E8qG9bTrnATmpZMdoyRiBoW",\n  "identityIDShort": "XBgY5DsUPng",\n  "publicKey": "9DB3j9cWYSuEEtkvanrzqkzCQMdH1FGv3TawJdVbDxkd",\n  "solidBlockCount": 74088,\n  "totalBlockCount": 74088,\n  "enabledPlugins": [\n    ...\n  ],\n  "disabledPlugins": [\n    ...\n  ],\n  "mana": {\n    "access": 1,\n    "accessTimestamp": "2021-05-24T20:11:05.451224937+02:00",\n    "consensus": 10439991680906,\n    "consensusTimestamp": "2021-05-24T20:11:05.451228137+02:00"\n  },\n  "manaDelegationAddress": "1HMQic52dz3xLY2aeDXcDhX53LgbsHghdfD8eGXR1qVHy",\n  "mana_decay": 0.00003209,\n  "scheduler": {\n    "running": true,\n    "rate": "5ms",\n    "nodeQueueSizes": {}\n  },\n  "rateSetter": {\n    "rate": 20000,\n    "size": 0\n  }\n}\n')),(0,o.kt)("h2",{id:"managing-the-goshimmer-node-lifecycle"},"Managing the GoShimmer node lifecycle"),(0,o.kt)("h3",{id:"stopping-the-node"},"Stopping the Node"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker compose stop\n")),(0,o.kt)("h3",{id:"resetting-the-node"},"Resetting the Node"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker compose down\n")),(0,o.kt)("h3",{id:"upgrading-the-node"},"Upgrading the Node"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Ensure that the image version in the ",(0,o.kt)("inlineCode",{parentName:"strong"},"docker-compose.yml")," is ",(0,o.kt)("inlineCode",{parentName:"strong"},"latest"))," then execute following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker compose down\nrm db/*\ndocker compose pull\ndocker compose up -d\n")),(0,o.kt)("h3",{id:"following-log-output"},"Following Log Output"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker logs -f --since=1m goshimmer\n")),(0,o.kt)("h3",{id:"create-a-logtxt"},"Create a log.txt"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker logs goshimmer > log.txt\n")),(0,o.kt)("h3",{id:"update-grafana-dashboard"},"Update Grafana Dashboard"),(0,o.kt)("p",null,'If you set up the Grafana dashboard for your node according to the next section "Setting up the Grafana dashboard", the following method will help you to update when a new version is released.'),(0,o.kt)("p",null,"You have to manually copy the new ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/goshimmer/blob/develop/tools/docker-network/grafana/dashboards/local_dashboard.json"},"dashboard file")," into ",(0,o.kt)("inlineCode",{parentName:"p"},"/opt/goshimmer/grafana/dashboards")," directory.\nSupposing you are at ",(0,o.kt)("inlineCode",{parentName:"p"},"/opt/goshimmer/"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"wget https://raw.githubusercontent.com/iotaledger/goshimmer/develop/tools/docker-network/grafana/dashboards/local_dashboard.json\ncp local_dashboard.json grafana/dashboards\n")),(0,o.kt)("p",null,"Restart the grafana container:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker restart grafana\n")),(0,o.kt)("h2",{id:"setting-up-the-grafana-dashboard"},"Setting up the Grafana dashboard"),(0,o.kt)("h3",{id:"add-prometheus-and-grafana-containers-to-docker-composeyml"},"Add Prometheus and Grafana Containers to ",(0,o.kt)("inlineCode",{parentName:"h3"},"docker-compose.yml")),(0,o.kt)("p",null,"Append the following to the previously described ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file (",(0,o.kt)("strong",{parentName:"p"},'make sure to also copy the space in front of "prometheus"/the entire whitespace'),"):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'  prometheus:\n    image: prom/prometheus:latest\n    container_name: prometheus\n    restart: unless-stopped\n    ports:\n      - "9090:9090/tcp"\n    command:\n      - --config.file=/etc/prometheus/prometheus.yml\n    volumes:\n      - ./prometheus/prometheus.yml:/etc/prometheus/prometheus.yml:ro\n      - ./prometheus/data:/prometheus:rw\n    depends_on:\n      - goshimmer\n    networks:\n      - outside\n\n  grafana:\n    image: grafana/grafana:latest\n    container_name: grafana\n    restart: unless-stopped\n    environment:\n      # path to provisioning definitions can only be defined as\n      # environment variables for grafana within docker\n      - GF_PATHS_PROVISIONING=/var/lib/grafana/provisioning\n    ports:\n      - "3000:3000/tcp"\n    user: "472"\n    volumes:\n      - ./grafana:/var/lib/grafana:rw\n    networks:\n      - outside\n')),(0,o.kt)("h4",{id:"create-prometheus-config"},"Create Prometheus config"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a ",(0,o.kt)("inlineCode",{parentName:"li"},"prometheus/data")," directory in ",(0,o.kt)("inlineCode",{parentName:"li"},"/opt/goshimmer"),":")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd /opt/goshimmer\nmkdir -p prometheus/data\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Create a ",(0,o.kt)("inlineCode",{parentName:"li"},"prometheus.yml")," in ",(0,o.kt)("inlineCode",{parentName:"li"},"prometheus")," directory:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"nano prometheus/prometheus.yml\n")),(0,o.kt)("p",null,"The content of the file should be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"scrape_configs:\n    - job_name: goshimmer_local\n      scrape_interval: 5s\n      static_configs:\n      - targets:\n        - goshimmer:9311\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Add permissions to ",(0,o.kt)("inlineCode",{parentName:"li"},"prometheus")," config directory:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"chmod -R 777 prometheus\n")),(0,o.kt)("h4",{id:"create-grafana-configs"},"Create Grafana configs"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create necessary config dirs in ",(0,o.kt)("inlineCode",{parentName:"li"},"/opt/goshimmer/"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir -p grafana/provisioning/datasources grafana/provisioning/dashboards grafana/provisioning/notifiers grafana/provisioning/plugins\nmkdir -p grafana/dashboards\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Create a datasource configuration file in ",(0,o.kt)("inlineCode",{parentName:"li"},"grafana/provisioning/datasources"),":")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"nano grafana/provisioning/datasources/datasources.yaml\n")),(0,o.kt)("p",null,"With the following content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: 1\n\ndatasources:\n  - name: Prometheus\n    type: prometheus\n    # <string, required> access mode. proxy or direct (Server or Browser in the UI). Required\n    access: proxy\n    orgId: 1\n    url: http://prometheus:9090\n    jsonData:\n      graphiteVersion: '1.1'\n      timeInterval: '1s'\n    # <string> json object of data that will be encrypted.\n    secureJsonData:\n      # <string> database password, if used\n      password:\n      # <string> basic auth password\n      basicAuthPassword:\n    version: 1\n    # <bool> allow users to edit datasources from the UI.\n    editable: true\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Create a dashboard configuration file in ",(0,o.kt)("inlineCode",{parentName:"li"},"grafana/provisioning/dashboards"),":")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"nano grafana/provisioning/dashboards/dashboards.yaml\n")),(0,o.kt)("p",null,"With the following content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: 1\n\nproviders:\n  - name: 'GoShimmer Local Metrics'\n    orgId: 1\n    folder: ''\n    type: file\n    disableDeletion: false\n    editable: true\n    updateIntervalSeconds: 10\n    allowUiUpdates: true\n    options:\n      path: /var/lib/grafana/dashboards\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Add predefined GoShimmer Local Metrics Dashboard.")),(0,o.kt)("p",null,"Head over to the GoShimmer repository and download ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/goshimmer/blob/develop/tools/docker-network/grafana/dashboards/local_dashboard.json"},"local_dashboard.json"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"wget https://raw.githubusercontent.com/iotaledger/goshimmer/develop/tools/docker-network/grafana/dashboards/local_dashboard.json\ncp local_dashboard.json grafana/dashboards\n")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Add permissions to Grafana config folder")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"chmod -R 777 grafana\n")),(0,o.kt)("h4",{id:"run-goshimmer-with-prometheus-and-grafana"},"Run GoShimmer with Prometheus and Grafana:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker compose up -d\n")),(0,o.kt)("p",null,"The Grafana dashboard should be accessible at ",(0,o.kt)("inlineCode",{parentName:"p"},"http://<your-ip>:3000"),"."),(0,o.kt)("p",null,"Default login credentials are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"username"),": admin"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"password"),": admin")),(0,o.kt)("h2",{id:"installing-goshimmer-by-building-from-source"},"Installing Goshimmer by Building From Source"),(0,o.kt)("h3",{id:"software-requirements"},"Software Requirements"),(0,o.kt)("p",null,"Upgrade your systems' packages by running the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"apt update && apt dist-upgrade -y\n")),(0,o.kt)("h4",{id:"installing-rocksdb-compression-libraries"},"Installing RocksDB Compression Libraries"),(0,o.kt)("p",null,"GoShimmer uses RocksDB as its underlying database engine. That requires installing its compression libraries. Please use the tutorial from RocksDB's Github:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"https://github.com/facebook/rocksdb/blob/main/INSTALL.md\n")),(0,o.kt)("h4",{id:"gcc-and-g"},"GCC and G++"),(0,o.kt)("p",null,"GCC and G++ are required for the compilation to work properly.  You can install them by running the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt install gcc g++\n")),(0,o.kt)("h4",{id:"installing-golang-go"},"Installing Golang-go"),(0,o.kt)("p",null,"In order for the build script to work later on, we have to install the programming language Go. Which version you need to install is specified in:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"https://github.com/iotaledger/goshimmer/blob/4e3ff2d23d65ddd31053f195fb40d530ef62acf3/go.mod#L3\n")),(0,o.kt)("p",null,"Use apt to install:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"apt install golang-go\n")),(0,o.kt)("p",null,"Check the go version:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"go version\n")),(0,o.kt)("p",null,"If apt did not install the correct go version, use the tutorial provided by the go.dev page:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"https://go.dev/doc/install\n")),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"go version")," to check if it successfully installed golang-go."),(0,o.kt)("h3",{id:"clone-the-repository"},"Clone the Repository"),(0,o.kt)("p",null,"Once you have installed the ",(0,o.kt)("a",{parentName:"p",href:"#software-requirements"},"software requirements"),", you should clone the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/goshimmer/"},"GoShimmer repository")," into the ",(0,o.kt)("inlineCode",{parentName:"p"},"/opt")," directory. You can do so by running the following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd /opt\ngit clone https://github.com/iotaledger/goshimmer.git\n")),(0,o.kt)("h3",{id:"download-the-snapshot"},"Download the Snapshot"),(0,o.kt)("p",null,"You can download the latest snapshot by running the following command from the goshimmer directory you created when you ",(0,o.kt)("a",{parentName:"p",href:"#clone-the-repository"},"cloned the repository"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sudo wget -O snapshot.bin https://dbfiles-goshimmer.s3.eu-central-1.amazonaws.com/snapshots/nectar/snapshot-latest.bin\n")),(0,o.kt)("h3",{id:"making-the-node-dashboard-accessible"},"Making the Node Dashboard Accessible"),(0,o.kt)("p",null,"You will need to modify your goshimmer configuration file to make the Node Dashboard accessible. Below we described a method using the nano text editor, but you can use your text editor of choice."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"nano config.default.json\n")),(0,o.kt)("p",null,"In the config file where it says ",(0,o.kt)("strong",{parentName:"p"},"dashboard"),", change the ",(0,o.kt)("strong",{parentName:"p"},"bindAddress")," from ",(0,o.kt)("inlineCode",{parentName:"p"},'"127.0.0.1:8081"')," to ",(0,o.kt)("inlineCode",{parentName:"p"},'"0.0.0.0:8081"'),"."),(0,o.kt)("p",null,"Rename the file to config.json and save your changes."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If you do not save the file as ",(0,o.kt)("inlineCode",{parentName:"p"},"config.json"),", the node dashboard will not be accessible through your browser.")),(0,o.kt)("h3",{id:"run-the-goshimmer-node"},"Run the GoShimmer Node"),(0,o.kt)("p",null,"You can now run the build script for the goshimmer binary with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"./scripts/build.sh\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"screen")," command to keep the node running if you terminate your current ssh session.")),(0,o.kt)("p",null,"You can now run the GoShimmer binary to start your node:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"./goshimmer\n")),(0,o.kt)("p",null,'You can "detach" from the GoShimmer screen by pressing your ',(0,o.kt)("inlineCode",{parentName:"p"},"CTRL+A+D")," keys. This will remove the GoShimmer window,  but it will still be running."),(0,o.kt)("p",null,"You need the number from the start of the window name to reattach it. If you forget it, you can always use the ",(0,o.kt)("inlineCode",{parentName:"p"},"-ls")," (list) option, as shown below, to get a list of the detached windows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"screen -ls\n")),(0,o.kt)("p",null,"You can use the -r (reattach) option and the number of the session to reattach it, like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"screen -r (your session id)\n")),(0,o.kt)("h3",{id:"stopping-the-node-1"},"Stopping the Node"),(0,o.kt)("p",null,"To stop a screen session and your GoShimmer node press ",(0,o.kt)("inlineCode",{parentName:"p"},"CTRL+A+K")," inside the running window. This will stop your screen session."))}m.isMDXComponent=!0},17612:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/dashboard-c7237f83e216a88a9e3d3eba956daf4a.png"},8166:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/dashboard_neighbors-aeb66260b5fc05df4a6c2d61bad8339e.png"},86745:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/dashboard-c7237f83e216a88a9e3d3eba956daf4a.png"},44890:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/dashboard_neighbors-aeb66260b5fc05df4a6c2d61bad8339e.png"}}]);