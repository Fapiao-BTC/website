"use strict";(self.webpackChunkfapiao=self.webpackChunkfapiao||[]).push([[8127],{8639:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(5893),s=n(1151);const a={sidebar_position:13},i="Real-time subscription (non-local)",l={id:"api/sub",title:"Real-time subscription (non-local)",description:"Interface overview",source:"@site/i18n/en/api/sub.md",sourceDirName:"api",slug:"/api/sub",permalink:"/api/sub",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"Local testing",permalink:"/api/local-test"},next:{title:"Quick Answer",permalink:"/problem/"}},o={},c=[{value:"Interface overview",id:"interface-overview",level:2},{value:"Request parameters",id:"request-parameters",level:2},{value:"Parameter Description",id:"parameter-description",level:2},{value:"Request example",id:"request-example",level:2},{value:"Request URL",id:"request-url",level:3},{value:"Request method",id:"request-method",level:3},{value:"Example",id:"example",level:3},{value:"use",id:"use",level:3}];function u(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"real-time-subscription-non-local",children:"Real-time subscription (non-local)"}),"\n",(0,r.jsx)(e.h2,{id:"interface-overview",children:"Interface overview"}),"\n",(0,r.jsx)(e.p,{children:"This interface provides the latest processed transactions and generated log push"}),"\n",(0,r.jsx)(e.h2,{id:"request-parameters",children:"Request parameters"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:"{\r\n\tevent: 10001 || 10002,\r\n\tdata: 'logs' || 'transactions'\r\n}\n"})}),"\n",(0,r.jsx)(e.h2,{id:"parameter-description",children:"Parameter Description"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"The local test environment does not provide this interface\n\n10001: Start subscribing\n10002:Cancel subscription\n\ndata: 'logs' || 'transactions'\n"})}),"\n",(0,r.jsx)(e.h2,{id:"request-example",children:"Request example"}),"\n",(0,r.jsx)(e.h3,{id:"request-url",children:"Request URL"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:"/api/subscribe"})}),"\n",(0,r.jsx)(e.h3,{id:"request-method",children:"Request method"}),"\n",(0,r.jsx)(e.p,{children:"WebSockets"}),"\n",(0,r.jsx)(e.h3,{id:"example",children:"Example"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-javascript",children:"const WebSocket = require('ws');\r\n\r\nlet ws = null\r\nlet subList = []\r\n\r\nfunction subscribe(nodeUrl, t, callback) {\r\n\ttry {\r\n\t\tif (null === ws) {\r\n\t\t\tws = new WebSocket(nodeUrl)\r\n\t\t\tws.on('open', function() {\r\n\t\t\t\tsub(t)\r\n\t\t\t});\r\n\r\n\t\t\tws.on('message', function(message) {\r\n\t\t\t\tlet msg = JSON.parse(message.toString(\"utf8\"))\r\n\t\t\t\tcallback(msg.data, null)\r\n\t\t\t});\r\n\r\n\t\t\tws.on('close', function() {\r\n\t\t\t\tconsole.log('WebSocket close');\r\n\t\t\t\tws = null\r\n\t\t\t});\r\n\r\n\t\t\tws.on('error', function(error) {\r\n\t\t\t\tconsole.error('WebSocket error: ', error);\r\n\t\t\t\tws = null\r\n\t\t\t\tcallback(null, error)\r\n\t\t\t});\r\n\t\t} else {\r\n\t\t\tif (subList.includes(t)) {\r\n\t\t\t\treturn\r\n\t\t\t}\r\n\t\t\tsub(t)\r\n\t\t}\r\n\r\n\t} catch (e) {\r\n\t\tcallback(null, e)\r\n\t}\r\n}\r\n\r\nfunction unsubscribe(t, callback) {\r\n\tlet error, result\r\n\ttry {\r\n\t\tresult = unSub(t)\r\n\t} catch (e) {\r\n\t\terror = e\r\n\t}\r\n\tcallback(result, error)\r\n}\r\n\r\n\r\nfunction clearSubscriptions() {\r\n\tif (ws) {\r\n\t\tsubList.forEach(sub => {\r\n\t\t\tunSub(sub)\r\n\t\t})\r\n\t\tws.close()\r\n\t\tws = null\r\n\t}\r\n}\r\n\r\n\r\nfunction sub(t) {\r\n\tif (ws) {\r\n\t\tif (t != \"logs\" && t != \"transactions\") {\r\n\t\t\tthrow new Error(\"not support\")\r\n\t\t}\r\n\t\tlet message = {\r\n\t\t\tevent: 10001,\r\n\t\t\tdata: t\r\n\t\t}\r\n\t\tsend(message);\r\n\t\tsubList.push(t)\r\n\t}\r\n}\r\n\r\nfunction unSub(t) {\r\n\tif (ws) {\r\n\t\tif (t != \"logs\" && t != \"transactions\") {\r\n\t\t\tthrow new Error(\"not support\")\r\n\t\t}\r\n\t\tlet message = {\r\n\t\t\tevent: 10002,\r\n\t\t\tdata: t\r\n\t\t}\r\n\t\treturn send(message);\r\n\t}\r\n}\r\n\r\n\r\nfunction send(message) {\r\n\tif (ws) {\r\n\t\tlet msg = JSON.stringify(message)\r\n\t\treturn ws.send(msg)\r\n\t}\r\n}\r\n\r\n\r\nmodule.exports = {\r\n\tFapiao: {\r\n\t\tsubscribe,\r\n\t\tunsubscribe,\r\n\t\tclearSubscriptions,\r\n\t}\r\n}\n"})}),"\n",(0,r.jsx)(e.h3,{id:"use",children:"use"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-javascript",children:'async function getTx(hash, subObj = null) {\r\n\tif (subObj) {\r\n\t\tsubTxMap[subObj.hash] = subObj.op\r\n\t\tFapiao.subscribe(FapiaoNode_Url + "/subscribe", "transactions", async function( /** @type {any[]} */\r\n\t\t\tresult, /** @type {{ toString: () => any; }} */ error) {\r\n\t\t\tif (error) {\r\n\t\t\t\tutil.log("error:", error.toString())\r\n\t\t\t}\r\n\t\t\tlet tx = result[0]\r\n\t\t\tlet op = subTxMap[tx.tx_hash]\r\n\t\t\tswitch (op) {\r\n\t\t\t\tcase "send":\r\n\t\t\t\t\tutil.log(tx)\r\n\t\t\t\t\tbreak;\r\n\t\t\t\tcase "deploy":\r\n\t\t\t\t\tif (tx.status === 1) {\r\n\t\t\t\t\t\tlet cObjd = await getContract(tx.kid);\r\n\t\t\t\t\t\tutil.log(cObjd)\r\n\t\t\t\t\t} else {\r\n\t\t\t\t\t\tutil.log(tx)\r\n\t\t\t\t\t}\r\n\t\t\t\t\tbreak;\r\n\t\t\t}\r\n\t\t\tdelete subTxMap[tx.tx_hash]\r\n\t\t\tutil.log(tx)\r\n\t\t})\r\n\t}else{\r\n\t\t...\r\n\t}\r\n}\n'})})]})}function d(t={}){const{wrapper:e}={...(0,s.a)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(u,{...t})}):u(t)}},1151:(t,e,n)=>{n.d(e,{Z:()=>l,a:()=>i});var r=n(7294);const s={},a=r.createContext(s);function i(t){const e=r.useContext(a);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function l(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:i(t.components),r.createElement(a.Provider,{value:e},t.children)}}}]);