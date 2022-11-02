"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[1852],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),h=o,f=d["".concat(s,".").concat(h)]||d[h]||c[h]||a;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3416:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return p}});var r=n(3117),o=(n(7294),n(3905));const a={sidebar_label:"Consensus Full Node"},l="Setting up a Celestia Consensus Full Node",i={unversionedId:"nodes/consensus-full-node",id:"nodes/consensus-full-node",title:"Setting up a Celestia Consensus Full Node",description:"Consensus Full Nodes allow you to sync blockchain history in the Celestia",source:"@site/docs/nodes/consensus-full-node.md",sourceDirName:"nodes",slug:"/nodes/consensus-full-node",permalink:"/pr-preview/pr-290/fr/nodes/consensus-full-node",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/consensus-full-node.md",tags:[],version:"current",frontMatter:{sidebar_label:"Consensus Full Node"},sidebar:"nodes",previous:{title:"Validator Node",permalink:"/pr-preview/pr-290/fr/nodes/validator-node"},next:{title:"Data Availability",permalink:"/pr-preview/pr-290/fr/category/data-availability"}},s={},p=[{value:"Hardware requirements",id:"hardware-requirements",level:2},{value:"Setting up your consensus full node",id:"setting-up-your-consensus-full-node",level:2},{value:"Setup the dependencies",id:"setup-the-dependencies",level:3},{value:"Deploying the celestia-app",id:"deploying-the-celestia-app",level:2},{value:"Install celestia-app",id:"install-celestia-app",level:3},{value:"Setup the P2P networks",id:"setup-the-p2p-networks",level:3},{value:"Configure pruning",id:"configure-pruning",level:3},{value:"Reset network",id:"reset-network",level:3},{value:"Optional: quick-sync with snapshot",id:"optional-quick-sync-with-snapshot",level:3},{value:"Start the celestia-app",id:"start-the-celestia-app",level:3},{value:"Optional: configure for RPC endpoint",id:"optional-configure-for-rpc-endpoint",level:3},{value:"Start the celestia-app with SystemD",id:"start-the-celestia-app-with-systemd",level:3}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"setting-up-a-celestia-consensus-full-node"},"Setting up a Celestia Consensus Full Node"),(0,o.kt)("p",null,"Consensus Full Nodes allow you to sync blockchain history in the Celestia\nConsensus Layer."),(0,o.kt)("h2",{id:"hardware-requirements"},"Hardware requirements"),(0,o.kt)("p",null,"The following hardware minimum requirements are recommended for running the\nConsensus Full Node:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Memory: 8 GB RAM"),(0,o.kt)("li",{parentName:"ul"},"CPU: Quad-Core"),(0,o.kt)("li",{parentName:"ul"},"Disk: 250 GB SSD Storage"),(0,o.kt)("li",{parentName:"ul"},"Bandwidth: 1 Gbps for Download/100 Mbps for Upload")),(0,o.kt)("h2",{id:"setting-up-your-consensus-full-node"},"Setting up your consensus full node"),(0,o.kt)("p",null,"The following tutorial is done on an Ubuntu Linux 20.04 (LTS) x64\ninstance machine."),(0,o.kt)("h3",{id:"setup-the-dependencies"},"Setup the dependencies"),(0,o.kt)("p",null,"Follow the instructions on installing the dependencies ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-290/fr/developers/environment"},"here"),"."),(0,o.kt)("h2",{id:"deploying-the-celestia-app"},"Deploying the celestia-app"),(0,o.kt)("p",null,"This section describes part 1 of Celestia consensus full node setup:\nrunning a Celestia App daemon with an internal Celestia Core node."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: Make sure you have at least 100+ Gb of free space to safely install + run\nthe consensus full node.  ")),(0,o.kt)("h3",{id:"install-celestia-app"},"Install celestia-app"),(0,o.kt)("p",null,"Follow the tutorial on installing Celestia App ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-290/fr/developers/celestia-app"},"here"),"."),(0,o.kt)("h3",{id:"setup-the-p2p-networks"},"Setup the P2P networks"),(0,o.kt)("p",null,"For this section of the guide, select the network you want to connect to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/pr-preview/pr-290/fr/nodes/mamaki-testnet#setup-p2p-network"},"Mamaki"))),(0,o.kt)("p",null,"After that, you can proceed with the rest of the tutorial."),(0,o.kt)("h3",{id:"configure-pruning"},"Configure pruning"),(0,o.kt)("p",null,"For lower disk space usage we recommend setting up pruning using the\nconfigurations below. You can change this to your own pruning configurations\nif you want:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'PRUNING="custom"\nPRUNING_KEEP_RECENT="100"\nPRUNING_INTERVAL="10"\n\nsed -i -e "s/^pruning *=.*/pruning = \\"$PRUNING\\"/" $HOME/.celestia-app/config/app.toml\nsed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \\\n\\"$PRUNING_KEEP_RECENT\\"/" $HOME/.celestia-app/config/app.toml\nsed -i -e "s/^pruning-interval *=.*/pruning-interval = \\\n\\"$PRUNING_INTERVAL\\"/" $HOME/.celestia-app/config/app.toml\n')),(0,o.kt)("h3",{id:"reset-network"},"Reset network"),(0,o.kt)("p",null,"This will delete all data folders so we can start fresh:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd tendermint unsafe-reset-all --home $HOME/.celestia-app\n")),(0,o.kt)("h3",{id:"optional-quick-sync-with-snapshot"},"Optional: quick-sync with snapshot"),(0,o.kt)("p",null,"Syncing from Genesis can take a long time, depending on your hardware. Using\nthis method you can synchronize your Celestia node very quickly by downloading\na recent snapshot of the blockchain. If you would like to sync from the Genesis,\nthen you can skip this part."),(0,o.kt)("p",null,"If you want to use snapshot, determine the network you would like to sync\nto from the list below:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/pr-preview/pr-290/fr/nodes/mamaki-testnet#quick-sync-with-snapshot"},"Mamaki"))),(0,o.kt)("h3",{id:"start-the-celestia-app"},"Start the celestia-app"),(0,o.kt)("p",null,"In order to start your consensus full node, run the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd start\n")),(0,o.kt)("p",null,"This will let you sync the Celestia blockchain history."),(0,o.kt)("h3",{id:"optional-configure-for-rpc-endpoint"},"Optional: configure for RPC endpoint"),(0,o.kt)("p",null,"You can configure your Consensus Full Node to be a public RPC endpoint\nand listen to any connections from Data Availability Nodes in order to\nserve requests for the Data Availability API ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-290/fr/developers/node-tutorial"},"here"),"."),(0,o.kt)("p",null,"Note that you would need to ensure port 9090 is open for this."),(0,o.kt)("p",null,"Run the following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'EXTERNAL_ADDRESS=$(wget -qO- eth0.me)\nsed -i.bak -e "s/^external-address = \\"\\"/external-address = \\"$EXTERNAL_ADDRESS:26656\\"/" $HOME/.celestia-app/config/config.toml\nsed -i \'s#"tcp://127.0.0.1:26657"#"tcp://0.0.0.0:26657"#g\' ~/.celestia-app/config/config.toml\n')),(0,o.kt)("p",null,"Restart ",(0,o.kt)("inlineCode",{parentName:"p"},"celestia-appd")," in the previous step to load those configs."),(0,o.kt)("h3",{id:"start-the-celestia-app-with-systemd"},"Start the celestia-app with SystemD"),(0,o.kt)("p",null,"Follow the tutorial on setting up Celestia-App as a background process\nwith SystemD ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-290/fr/nodes/systemd#start-the-celestia-app-with-systemd"},"here"),"."))}c.isMDXComponent=!0}}]);