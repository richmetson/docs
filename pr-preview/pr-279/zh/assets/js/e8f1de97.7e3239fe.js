"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[3408],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(g,l(l({ref:t},p),{},{components:n})):a.createElement(g,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2209:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_label:"Run a Light Node"},l="\ud83e\udeb6\xa0Run a Celestia DA Light Node",o={unversionedId:"developers/gm-node",id:"developers/gm-node",title:"\ud83e\udeb6\xa0Run a Celestia DA Light Node",description:"A Celestia Light Node on the Mamaki Testnet is required to complete this",source:"@site/docs/developers/gm-node.md",sourceDirName:"developers",slug:"/developers/gm-node",permalink:"/pr-preview/pr-279/zh/developers/gm-node",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/gm-node.md",tags:[],version:"current",frontMatter:{sidebar_label:"Run a Light Node"},sidebar:"developers",previous:{title:"Setup",permalink:"/pr-preview/pr-279/zh/developers/gm-setup"},next:{title:"Build a Sovereign Rollup",permalink:"/pr-preview/pr-279/zh/developers/gm-rollmint"}},s={},c=[{value:"\ud83d\udddd Create a key",id:"-create-a-key",level:2},{value:"\ud83d\udfe2 Initialize Light Node",id:"-initialize-light-node",level:2},{value:"\ud83d\udeb0 Visit Faucet",id:"-visit-faucet",level:2}],p={toc:c};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"run-a-celestia-da-light-node"},"\ud83e\udeb6\xa0Run a Celestia DA Light Node"),(0,r.kt)("p",null,"A Celestia Light Node on the Mamaki Testnet is required to complete this\ntutorial. Run the following commands to install Celestia-Node:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd && rm -rf celestia-node\ngit clone https://github.com/celestiaorg/celestia-node.git\ncd celestia-node\ngit checkout tags/v0.3.0-rc2\nmake install\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"1.png",src:n(8731).Z,width:"2064",height:"1742"})),(0,r.kt)("p",null,"Inside the celestia-node repository is a utility named ",(0,r.kt)("inlineCode",{parentName:"p"},"cel-key"),"\xa0that uses the\nkey utility provided by Cosmos-SDK under the hood. The utility can be used to\n",(0,r.kt)("inlineCode",{parentName:"p"},"add"),",\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"delete"),", and manage keys for any DA node\ntype\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"(bridge || full || light)"),", or just keys in general."),(0,r.kt)("h2",{id:"-create-a-key"},"\ud83d\udddd Create a key"),(0,r.kt)("p",null,"Create your key for the node:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"make cel-key\n")),(0,r.kt)("p",null,"Verify the version of your Celestia-Node with the ",(0,r.kt)("inlineCode",{parentName:"p"},"celestia version")," command,\nit should be ",(0,r.kt)("inlineCode",{parentName:"p"},"v0.3.0-rc2"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"celestia version\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-output"},"# OUTPUT\n\nSemantic version: v0.3.0-rc2\nCommit: 89892d8b96660e334741987d84546c36f0996fbe\nBuild Date: Fri Oct  7 01:08:14 UTC 2022\nSystem version: amd64/linux\nGolang version: go1.18.2\n")),(0,r.kt)("h2",{id:"-initialize-light-node"},"\ud83d\udfe2 Initialize Light Node"),(0,r.kt)("p",null,"Now, we\u2019re ready to initialize the Celestia Light Node. You can do so by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"celestia light init\n")),(0,r.kt)("p",null,"Query our key's address using ",(0,r.kt)("inlineCode",{parentName:"p"},"cel-key")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./cel-key list --node.type light --keyring-backend test\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"2.png",src:n(6270).Z,width:"1280",height:"664"})),(0,r.kt)("h2",{id:"-visit-faucet"},"\ud83d\udeb0 Visit Faucet"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"#mamaki-faucet")," channel in the Celestia Discord to request testnet\ntokens:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$request <Wallet-Address>\n")),(0,r.kt)("p",null,"Start Celestia Light node with a connection to a public Core Endpoint:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"celestia light start --core.grpc https://rpc-mamaki.pops.one:9090 --keyring.accname my_celes_key\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"3.png",src:n(9724).Z,width:"2792",height:"1684"})),(0,r.kt)("p",null,"In another terminal window, check the balance from our visit to the faucet:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X GET http://localhost:26658/balance\n")),(0,r.kt)("p",null,"Your response should look like this, denominated in ",(0,r.kt)("inlineCode",{parentName:"p"},"utia")," in JSON format."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"denom":"utia","amount":"100000000"}\n')),(0,r.kt)("p",null,"Now that we are set with Go and Ignite CLI installed, and our Celestia Light\nNode running on our machine, we\u2019re ready to build, test, and launch our own\nsovereign rollup."))}d.isMDXComponent=!0},8731:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1-ab639ee1bf4ac0714d80ac083ef9afcb.png"},6270:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2-736eecc745acda7780fb8dc8389346ae.png"},9724:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/3-3cefa4b4d721bf9868ab226f8b9c7692.png"}}]);