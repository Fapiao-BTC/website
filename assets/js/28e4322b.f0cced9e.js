"use strict";(self.webpackChunkfapiao=self.webpackChunkfapiao||[]).push([[2990],{3278:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>i});var r=t(5893),o=t(1151);const a={},l="Quick Answer",s={id:"problem/problem",title:"Quick Answer",description:"How to use the front end for contract interaction?",source:"@site/docs/en/problem/problem.md",sourceDirName:"problem",slug:"/problem/",permalink:"/problem/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"JSON-RPC",permalink:"/jsonrpc/"},next:{title:"Run node",permalink:"/node/"}},c={},i=[{value:"How to use the front end for contract interaction?",id:"how-to-use-the-front-end-for-contract-interaction",level:3},{value:"TestNet || MianNet",id:"testnet--miannet",level:3},{value:"<code>send || deploy</code>",id:"send--deploy",level:4},{value:"TestNet || MianNet",id:"testnet--miannet-1",level:3},{value:"<code>call</code>",id:"call",level:4},{value:"LocalNet",id:"localnet",level:3},{value:"<code>send || deploy</code>",id:"send--deploy-1",level:4},{value:"LocalNet",id:"localnet-1",level:3},{value:"<code>call</code>",id:"call-1",level:4},{value:"Where is the contract stored?",id:"where-is-the-contract-stored",level:3},{value:"Who runs Fp\u2019s nodes?",id:"who-runs-fps-nodes",level:3},{value:"Follow-up plan",id:"follow-up-plan",level:3}];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",h3:"h3",h4:"h4",li:"li",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"quick-answer",children:"Quick Answer"}),"\n",(0,r.jsx)(n.h3,{id:"how-to-use-the-front-end-for-contract-interaction",children:"How to use the front end for contract interaction?"}),"\n",(0,r.jsx)(n.h3,{id:"testnet--miannet",children:"TestNet || MianNet"}),"\n",(0,r.jsx)(n.h4,{id:"send--deploy",children:(0,r.jsx)(n.code,{children:"send || deploy"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"\nYou can use the BTC related js library to build a Taproot transaction that complies with the Fp protocol rules and broadcast it to the chain.\n\r\n//JavaScript Source Code\r\nlet javaScript= '...'\r\n\r\n\r\n//Operation\r\nlet callData = {\n\tkid: 'kid',\n\tmethod: 'method',\n\targs: [...args],\n}\r\n\r\n\n//Script example\nconst script = [\r\n\t'Your Pubkey',\r\n\t'OP_CHECKSIG', \r\n\t'OP_0', \r\n\t'OP_IF', \r\n\tec.encode('fapiao.org'), \r\n\t'01', \r\n\tec.encode('send' || 'deploy'), \r\n\t'OP_0', \r\n\tec.encode(javaScript || JSON.stringify(callData)),\r\n\t'OP_ENDIF'\r\n]\r\n\r\n//OutAddress in TestNet: tb1qa7r68qpcccae9tx6klhp66u75wv4zt2vtajsyg\r\n//OutAddress in MainNet: bc1qa7r68qpcccae9tx6klhp66u75wv4zt2vpmfrlm\r\n\r\nconst tx_data = await tapScript.Tx.create({\r\n\tversion: 2,\r\n\tvin: [...],\r\n\tvout: [{\r\n\t\tvalue: 1000_00,\r\n\t\t// This is the new script that we are locking our funds to.\r\n\t\tscriptPubKey: tapScript.Address.toScriptPubKey('OutAddress')\r\n\t}]\r\n})\r\n\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"TestNet: tb1qa7r68qpcccae9tx6klhp66u75wv4zt2vtajsyg"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"MainNet: bc1qa7r68qpcccae9tx6klhp66u75wv4zt2vpmfrlm"})}),"\n"]})}),"\n",(0,r.jsx)(n.h3,{id:"testnet--miannet-1",children:"TestNet || MianNet"}),"\n",(0,r.jsx)(n.h4,{id:"call",children:(0,r.jsx)(n.code,{children:"call"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"let callData = {\r\n\tkid: 'kid',\r\n\tmethod: 'method',\r\n\targs: [...args],\r\n}\r\n\r\nlet arg = JSON.stringify(callData);\r\n\r\nlet hex = str2Hex(arg)\r\n\r\nlet data = {\r\n\tsender: account,\r\n\tsource: hex\r\n}\r\n\r\nlet response = await post(FapiaoNode_Url + \"/call\", data);\r\n\r\nconsole.log(response);\n"})}),"\n",(0,r.jsx)(n.h3,{id:"localnet",children:"LocalNet"}),"\n",(0,r.jsx)(n.h4,{id:"send--deploy-1",children:(0,r.jsx)(n.code,{children:"send || deploy"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:'//Send\nlet callData = {\r\n\tkid: \'kid\',\r\n\tmethod: \'method\',\r\n\targs: [...args],\r\n}\r\n\r\nlet arg = JSON.stringify(callData);\r\n\r\nlet data = {\r\n\tsender: account,\r\n\toperation: "send",\r\n\tsource: str2Hex(arg)\r\n}\r\n\r\n//Deploy\r\n//npm install uglifyJS\r\nlet code = codeMinify(cScript)\r\n\r\nlet data = {\r\n\tsender: account,\r\n\toperation: "deploy",\r\n\tsource: str2Hex(code)\r\n}\r\n\r\nlet response = await post(FapiaoNode_Url + "/indexer", data);\r\n\r\nconsole.log(response);\r\n\r\nfunction codeMinify(code) {\r\n\tconst options = {\r\n\t\twarnings: true,\r\n\t\tkeep_fargs: true,\r\n\t\tkeep_fnames: true\r\n\t};\r\n\tconst result = uglifyJS.minify(code, options);\r\n\tif (result.error) throw result.error;\r\n\treturn result.code\r\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"localnet-1",children:"LocalNet"}),"\n",(0,r.jsx)(n.h4,{id:"call-1",children:(0,r.jsx)(n.code,{children:"call"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"let callData = {\r\n\tkid: 'kid',\r\n\tmethod: 'method',\r\n\targs: [...args],\r\n}\r\n\r\nlet arg = JSON.stringify(callData);\r\n\r\n//Convert to hexadecimal string\r\nlet hex = str2Hex(arg)\r\n//Build data\r\nlet data = {\r\n\tsender: account,\r\n\tsource: hex\r\n}\r\n\r\nlet response = await post(FapiaoNode_Url + \"/call\", data);\r\n\r\nconsole.log(response);\n"})}),"\n",(0,r.jsx)(n.h3,{id:"where-is-the-contract-stored",children:"Where is the contract stored?"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"Contract source code and operation instructions are stored on the BTC chain\nYou can use any method to perform deduction from the block number starting from Fp to the latest block number to obtain the latest results.\n"})}),"\n",(0,r.jsx)(n.h3,{id:"who-runs-fps-nodes",children:"Who runs Fp\u2019s nodes?"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"Anyone can run Fp node\n"})}),"\n",(0,r.jsx)(n.h3,{id:"follow-up-plan",children:"Follow-up plan"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"Although Fp enables BTC to have the ability of Turing contracts, miners\u2019 packaging speed is still very slow.\nWe will follow up on improving Fp processing speed and node incentive mechanism\n"})})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>l});var r=t(7294);const o={},a=r.createContext(o);function l(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);