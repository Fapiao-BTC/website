"use strict";(self.webpackChunkfapiao=self.webpackChunkfapiao||[]).push([[1094],{6304:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>d,toc:()=>i});var t=r(5893),l=r(1151);const a={},s="\u5feb\u95ee\u5feb\u7b54",d={id:"problem/problem",title:"\u5feb\u95ee\u5feb\u7b54",description:"\u5982\u4f55\u4f7f\u7528\u524d\u7aef\u8fdb\u884c\u5408\u7ea6\u4ea4\u4e92?",source:"@site/docs/problem/problem.md",sourceDirName:"problem",slug:"/problem/",permalink:"/website/docs/problem/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5b9e\u65f6\u8ba2\u9605(\u975e\u672c\u5730)",permalink:"/website/docs/API/sub"},next:{title:"\u8fd0\u884c\u8282\u70b9",permalink:"/website/docs/node/"}},o={},i=[{value:"\u5982\u4f55\u4f7f\u7528\u524d\u7aef\u8fdb\u884c\u5408\u7ea6\u4ea4\u4e92?",id:"\u5982\u4f55\u4f7f\u7528\u524d\u7aef\u8fdb\u884c\u5408\u7ea6\u4ea4\u4e92",level:3},{value:"TestNet || MianNet",id:"testnet--miannet",level:3},{value:"<code>send || deploy</code>",id:"send--deploy",level:4},{value:"TestNet || MianNet",id:"testnet--miannet-1",level:3},{value:"<code>call</code>",id:"call",level:4},{value:"LocalNet",id:"localnet",level:3},{value:"<code>send || deploy</code>",id:"send--deploy-1",level:4},{value:"LocalNet",id:"localnet-1",level:3},{value:"<code>call</code>",id:"call-1",level:4},{value:"\u5408\u7ea6\u5b58\u653e\u5728\u54ea\u91cc\uff1f",id:"\u5408\u7ea6\u5b58\u653e\u5728\u54ea\u91cc",level:3},{value:"Fp\u7684\u8282\u70b9\u7531\u8c01\u8fd0\u884c?",id:"fp\u7684\u8282\u70b9\u7531\u8c01\u8fd0\u884c",level:3},{value:"Fp\u7684\u539f\u751f\u4ee3\u5e01\u662f\u4ec0\u4e48?",id:"fp\u7684\u539f\u751f\u4ee3\u5e01\u662f\u4ec0\u4e48",level:3},{value:"\u540e\u7eed\u8ba1\u5212",id:"\u540e\u7eed\u8ba1\u5212",level:3}];function c(e){const n={admonition:"admonition",code:"code",h1:"h1",h3:"h3",h4:"h4",li:"li",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"\u5feb\u95ee\u5feb\u7b54",children:"\u5feb\u95ee\u5feb\u7b54"}),"\n",(0,t.jsx)(n.h3,{id:"\u5982\u4f55\u4f7f\u7528\u524d\u7aef\u8fdb\u884c\u5408\u7ea6\u4ea4\u4e92",children:"\u5982\u4f55\u4f7f\u7528\u524d\u7aef\u8fdb\u884c\u5408\u7ea6\u4ea4\u4e92?"}),"\n",(0,t.jsx)(n.h3,{id:"testnet--miannet",children:"TestNet || MianNet"}),"\n",(0,t.jsx)(n.h4,{id:"send--deploy",children:(0,t.jsx)(n.code,{children:"send || deploy"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"\r\n\u4f60\u53ef\u4ee5\u4f7f\u7528BTC\u76f8\u5173js\u5e93\u53bb\u6784\u5efa\u4e00\u4e2a\u7b26\u5408Fp\u534f\u8bae\u89c4\u5219\u7684Taproot\u4ea4\u6613,\u5e76\u5c06\u5b83\u5e7f\u64ad\u4e0a\u94fe.\r\n\r\n//\u811a\u672c\u793a\u4f8b\r\nconst script = [\r\n\t'Your Pubkey',\r\n\t'OP_CHECKSIG', \r\n\t'OP_0', \r\n\t'OP_IF', \r\n\tec.encode('fapiao.org'), \r\n\t'01', \r\n\tec.encode('send' || 'deploy'), \r\n\t'OP_0', \r\n\tec.encode('JavaScript Source Code' || JSON.stringify(callData)),\r\n\t'OP_ENDIF'\r\n]\r\n\r\n//\u4ea4\u6613\u5bf9\u8c61\r\n//OutAddress in TestNet: tb1pytjz9kryy8zf7p3s975j88xu0xt6e044a9v932eva5g9u5umdq7srt4skh\r\n//OutAddress in MainNet: tb1pytjz9kryy8zf7p3s975j88xu0xt6e044a9v932eva5g9u5umdq7srt4skh\r\n\r\nconst tx_data = await tapScript.Tx.create({\r\n\tversion: 2,\r\n\tvin: [...],\r\n\tvout: [{\r\n\t\tvalue: 1000_00,\r\n\t\t// This is the new script that we are locking our funds to.\r\n\t\tscriptPubKey: tapScript.Address.toScriptPubKey('OutAddress')\r\n\t}]\r\n})\r\n\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"TestNet:  tb1pytjz9kryy8zf7p3s975j88xu0xt6e044a9v932eva5g9u5umdq7srt4skh"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"MainNet:  tb1pytjz9kryy8zf7p3s975j88xu0xt6e044a9v932eva5g9u5umdq7srt4skh"})}),"\n"]})}),"\n",(0,t.jsx)(n.h3,{id:"testnet--miannet-1",children:"TestNet || MianNet"}),"\n",(0,t.jsx)(n.h4,{id:"call",children:(0,t.jsx)(n.code,{children:"call"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"\r\nlet callData = {\r\n\tkid: 'kid',\r\n\tmethod: 'method',\r\n\targs: [...args],\r\n}\r\n\r\nlet arg = JSON.stringify(callData);\r\n\r\n//\u518d\u8f6c\u4e3a16\u8fdb\u5236\u5b57\u7b26\u4e32\r\nlet hex = str2Hex(arg)\r\n//\u6784\u5efa\u6570\u636e\r\nlet data = {\r\n\tsender: account,\r\n\tsource: hex\r\n}\r\n\r\nlet response = await post(FapiaoNode_Url + \"/call\", data);\r\n\r\nconsole.log(response);\n"})}),"\n",(0,t.jsx)(n.h3,{id:"localnet",children:"LocalNet"}),"\n",(0,t.jsx)(n.h4,{id:"send--deploy-1",children:(0,t.jsx)(n.code,{children:"send || deploy"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'\r\n//Send\r\nlet callData = {\r\n\tkid: \'kid\',\r\n\tmethod: \'method\',\r\n\targs: [...args],\r\n}\r\n\r\nlet arg = JSON.stringify(callData);\r\n\r\nlet data = {\r\n\tsender: account,\r\n\toperation: "send",\r\n\tsource: str2Hex(arg)\r\n}\r\n\r\n//Deploy\r\n//npm install uglifyJS\r\nlet code = codeMinify(cScript)\r\n\r\nlet data = {\r\n\tsender: account,\r\n\toperation: "deploy",\r\n\tsource: str2Hex(code)\r\n}\r\n\r\nlet response = await post(FapiaoNode_Url + "/indexer", data);\r\n\r\nconsole.log(response);\r\n\r\nfunction codeMinify(code) {\r\n\tconst options = {\r\n\t\twarnings: true,\r\n\t\tkeep_fargs: true,\r\n\t\tkeep_fnames: true\r\n\t};\r\n\tconst result = uglifyJS.minify(code, options);\r\n\tif (result.error) throw result.error;\r\n\treturn result.code\r\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"localnet-1",children:"LocalNet"}),"\n",(0,t.jsx)(n.h4,{id:"call-1",children:(0,t.jsx)(n.code,{children:"call"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"\r\nlet callData = {\r\n\tkid: 'kid',\r\n\tmethod: 'method',\r\n\targs: [...args],\r\n}\r\n\r\nlet arg = JSON.stringify(callData);\r\n\r\n//\u518d\u8f6c\u4e3a16\u8fdb\u5236\u5b57\u7b26\u4e32\r\nlet hex = str2Hex(arg)\r\n//\u6784\u5efa\u6570\u636e\r\nlet data = {\r\n\tsender: account,\r\n\tsource: hex\r\n}\r\n\r\nlet response = await post(FapiaoNode_Url + \"/call\", data);\r\n\r\nconsole.log(response);\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u5408\u7ea6\u5b58\u653e\u5728\u54ea\u91cc",children:"\u5408\u7ea6\u5b58\u653e\u5728\u54ea\u91cc\uff1f"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"\u5408\u7ea6\u6e90\u7801\u53ca\u64cd\u4f5c\u6307\u4ee4\u90fd\u5b58\u50a8\u5728BTC\u94fe\u4e0a\r\n\u4f60\u53ef\u4ee5\u7528\u4efb\u4f55\u65b9\u5f0f\u53bb\u4eceFp\u5f00\u59cb\u7684\u533a\u5757\u53f7\u5230\u6700\u65b0\u533a\u5757\u53f7,\u8fdb\u884c\u63a8\u6f14\u83b7\u53d6\u6700\u65b0\u7ed3\u679c\n"})}),"\n",(0,t.jsx)(n.h3,{id:"fp\u7684\u8282\u70b9\u7531\u8c01\u8fd0\u884c",children:"Fp\u7684\u8282\u70b9\u7531\u8c01\u8fd0\u884c?"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"\u4efb\u4f55\u4eba\u90fd\u53ef\u4ee5\u53bb\u8fd0\u884cFp\u8282\u70b9\n"})}),"\n",(0,t.jsx)(n.h3,{id:"fp\u7684\u539f\u751f\u4ee3\u5e01\u662f\u4ec0\u4e48",children:"Fp\u7684\u539f\u751f\u4ee3\u5e01\u662f\u4ec0\u4e48?"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"\u6211\u4eec\u6ca1\u6709\u4e5f\u4e0d\u6253\u7b97\u53d1\u884c\u4ee3\u5e01\r\n\u8bf7\u4e0d\u8981\u76f8\u4fe1\u4efb\u4f55\u4ee5Fp\u539f\u751f\u4ee3\u5e01\u4e3a\u5ba3\u4f20\u53e3\u53f7\u7684\u9879\u76ee\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u540e\u7eed\u8ba1\u5212",children:"\u540e\u7eed\u8ba1\u5212"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"\u867d\u7136Fp\u4f7f\u5f97BTC\u6709\u56fe\u7075\u5408\u7ea6\u7684\u80fd\u529b,\u4f46\u77ff\u5de5\u6253\u5305\u7684\u901f\u5ea6\u4f9d\u7136\u5f88\u6162\r\n\u6211\u4eec\u5c06\u5bf9\u63d0\u5347Fp\u5904\u7406\u901f\u5ea6\u548c\u8282\u70b9\u6fc0\u52b1\u673a\u5236\u5c55\u5f00\u540e\u7eed\n"})})]})}function p(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>d,a:()=>s});var t=r(7294);const l={},a=t.createContext(l);function s(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);