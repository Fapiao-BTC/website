"use strict";(self.webpackChunkfapiao=self.webpackChunkfapiao||[]).push([[4586],{9499:(t,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var e=r(5893),s=r(1151);const l={sidebar_position:13},i="\u5b9e\u65f6\u8ba2\u9605(\u975e\u672c\u5730)",a={id:"api/sub",title:"\u5b9e\u65f6\u8ba2\u9605(\u975e\u672c\u5730)",description:"\u63a5\u53e3\u6982\u8ff0",source:"@site/i18n/zh-CN/api/sub.md",sourceDirName:"api",slug:"/api/sub",permalink:"/zh-CN/api/sub",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"\u672c\u5730\u6d4b\u8bd5",permalink:"/zh-CN/api/local-test"},next:{title:"\u5feb\u95ee\u5feb\u7b54",permalink:"/zh-CN/problem/"}},o={},c=[{value:"\u63a5\u53e3\u6982\u8ff0",id:"\u63a5\u53e3\u6982\u8ff0",level:2},{value:"\u8bf7\u6c42\u53c2\u6570",id:"\u8bf7\u6c42\u53c2\u6570",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8bf7\u6c42\u793a\u4f8b",id:"\u8bf7\u6c42\u793a\u4f8b",level:2},{value:"\u8bf7\u6c42URL",id:"\u8bf7\u6c42url",level:3},{value:"\u8bf7\u6c42\u65b9\u6cd5",id:"\u8bf7\u6c42\u65b9\u6cd5",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:3},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:3}];function u(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...t.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(n.h1,{id:"\u5b9e\u65f6\u8ba2\u9605\u975e\u672c\u5730",children:"\u5b9e\u65f6\u8ba2\u9605(\u975e\u672c\u5730)"}),"\n",(0,e.jsx)(n.h2,{id:"\u63a5\u53e3\u6982\u8ff0",children:"\u63a5\u53e3\u6982\u8ff0"}),"\n",(0,e.jsx)(n.p,{children:"\u8be5\u63a5\u53e3\u63d0\u4f9b\u6700\u65b0\u5904\u7406\u7684\u4ea4\u6613\u548c\u4ea7\u751f\u7684\u65e5\u5fd7\u63a8\u9001"}),"\n",(0,e.jsx)(n.h2,{id:"\u8bf7\u6c42\u53c2\u6570",children:"\u8bf7\u6c42\u53c2\u6570"}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-json",children:"{\r\n\tevent: 10001 || 10002,\r\n\tdata: 'logs' || 'transactions'\r\n}\n"})}),"\n",(0,e.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-bash",children:"\u672c\u5730\u6d4b\u8bd5\u73af\u5883\u4e0d\u63d0\u4f9b\u8be5\u63a5\u53e3\r\n\r\n10001:\u5f00\u59cb\u8ba2\u9605\r\n10002:\u53d6\u6d88\u8ba2\u9605\r\n\r\ndata: 'logs' || 'transactions'\n"})}),"\n",(0,e.jsx)(n.h2,{id:"\u8bf7\u6c42\u793a\u4f8b",children:"\u8bf7\u6c42\u793a\u4f8b"}),"\n",(0,e.jsx)(n.h3,{id:"\u8bf7\u6c42url",children:"\u8bf7\u6c42URL"}),"\n",(0,e.jsx)(n.p,{children:(0,e.jsx)(n.code,{children:"/api/subscribe"})}),"\n",(0,e.jsx)(n.h3,{id:"\u8bf7\u6c42\u65b9\u6cd5",children:"\u8bf7\u6c42\u65b9\u6cd5"}),"\n",(0,e.jsx)(n.p,{children:"WebSocket"}),"\n",(0,e.jsx)(n.h3,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-javascript",children:"const WebSocket = require('ws');\r\n\r\nlet ws = null\r\nlet subList = []\r\n\r\nfunction subscribe(nodeUrl, t, callback) {\r\n\ttry {\r\n\t\tif (null === ws) {\r\n\t\t\tws = new WebSocket(nodeUrl)\r\n\t\t\tws.on('open', function() {\r\n\t\t\t\t//\u521d\u59cb\u5316\u540e\u518d\u8ba2\u9605\r\n\t\t\t\tsub(t)\r\n\t\t\t});\r\n\r\n\t\t\tws.on('message', function(message) {\r\n\t\t\t\tlet msg = JSON.parse(message.toString(\"utf8\"))\r\n\t\t\t\tcallback(msg.data, null)\r\n\t\t\t});\r\n\r\n\t\t\tws.on('close', function() {\r\n\t\t\t\tconsole.log('WebSocket close');\r\n\t\t\t\tws = null\r\n\t\t\t});\r\n\r\n\t\t\tws.on('error', function(error) {\r\n\t\t\t\tconsole.error('WebSocket error: ', error);\r\n\t\t\t\tws = null\r\n\t\t\t\tcallback(null, error)\r\n\t\t\t});\r\n\t\t} else {\r\n\t\t\t//\u5982\u679c\u5df2\u7ecf\u8ba2\u9605\u8fc7\u76f4\u63a5\u8fd4\u56de\r\n\t\t\tif (subList.includes(t)) {\r\n\t\t\t\treturn\r\n\t\t\t}\r\n\t\t\t//\u76f4\u63a5\u5f00\u59cb\u8ba2\u9605\r\n\t\t\tsub(t)\r\n\t\t}\r\n\r\n\t} catch (e) {\r\n\t\tcallback(null, e)\r\n\t}\r\n}\r\n\r\nfunction unsubscribe(t, callback) {\r\n\tlet error, result\r\n\ttry {\r\n\t\tresult = unSub(t)\r\n\t} catch (e) {\r\n\t\terror = e\r\n\t}\r\n\tcallback(result, error)\r\n}\r\n\r\n\r\nfunction clearSubscriptions() {\r\n\tif (ws) {\r\n\t\tsubList.forEach(sub => {\r\n\t\t\tunSub(sub)\r\n\t\t})\r\n\t\tws.close()\r\n\t\tws = null\r\n\t}\r\n}\r\n\r\n\r\nfunction sub(t) {\r\n\tif (ws) {\r\n\t\tif (t != \"logs\" && t != \"transactions\") {\r\n\t\t\tthrow new Error(\"\u4e0d\u652f\u6301\u7684\u8ba2\u9605\u7c7b\u578b\")\r\n\t\t}\r\n\t\tlet message = {\r\n\t\t\tevent: 10001,\r\n\t\t\tdata: t\r\n\t\t}\r\n\t\tsend(message);\r\n\t\t//\u6dfb\u52a0\u6240\u6709\u8ba2\u9605\u540d\u79f0\r\n\t\tsubList.push(t)\r\n\t}\r\n}\r\n\r\nfunction unSub(t) {\r\n\tif (ws) {\r\n\t\tif (t != \"logs\" && t != \"transactions\") {\r\n\t\t\tthrow new Error(\"\u4e0d\u652f\u6301\u7684\u8ba2\u9605\u7c7b\u578b\")\r\n\t\t}\r\n\t\tlet message = {\r\n\t\t\tevent: 10002,\r\n\t\t\tdata: t\r\n\t\t}\r\n\t\treturn send(message);\r\n\t}\r\n}\r\n\r\n\r\nfunction send(message) {\r\n\tif (ws) {\r\n\t\tlet msg = JSON.stringify(message)\r\n\t\treturn ws.send(msg)\r\n\t}\r\n}\r\n\r\n\r\nmodule.exports = {\r\n\tFapiao: {\r\n\t\tsubscribe,\r\n\t\tunsubscribe,\r\n\t\tclearSubscriptions,\r\n\t}\r\n}\n"})}),"\n",(0,e.jsx)(n.h3,{id:"\u4f7f\u7528",children:"\u4f7f\u7528"}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-javascript",children:'//\u83b7\u53d6\u4ea4\u6613\u8be6\u60c5\r\nasync function getTx(hash, subObj = null) {\r\n\tif (subObj) {\r\n\t\tutil.log("Tx Hash:", hash, "\u4ea4\u6613\u6253\u5305\u4e2d...")\r\n\t\t//\u6dfb\u52a0\u4ea4\u6613Hash\u5230\u8ba2\u9605\u5217\u8868\r\n\t\tsubTxMap[subObj.hash] = subObj.op //\u8ba2\u9605\u8be5\u4ea4\u6613\r\n\t\t//\u8ba2\u9605\u8be5\u4ea4\u6613\r\n\t\tFapiao.subscribe(FapiaoNode_Url + "/subscribe", "transactions", async function( /** @type {any[]} */\r\n\t\t\tresult, /** @type {{ toString: () => any; }} */ error) {\r\n\t\t\tif (error) {\r\n\t\t\t\tutil.log("\u8ba2\u9605\u9519\u8bef:", error.toString())\r\n\t\t\t}\r\n\t\t\tlet tx = result[0]\r\n\t\t\t//\u83b7\u53d6\u4e34\u65f6\u5b58\u8d77\u6765\u9700\u8981\u5904\u7406\u7684\u4ea4\u6613\r\n\t\t\tlet op = subTxMap[tx.tx_hash]\r\n\t\t\tswitch (op) {\r\n\t\t\t\tcase "send":\r\n\t\t\t\t\tutil.log(tx)\r\n\t\t\t\t\tbreak;\r\n\t\t\t\tcase "deploy":\r\n\t\t\t\t\t//\u5982\u679c\u90e8\u7f72\u6210\u529f\u83b7\u53d6\u5408\u7ea6\u4fe1\u606f\r\n\t\t\t\t\tif (tx.status === 1) {\r\n\t\t\t\t\t\tlet cObjd = await getContract(tx.kid);\r\n\t\t\t\t\t\tutil.log(cObjd)\r\n\t\t\t\t\t} else {\r\n\t\t\t\t\t\t//\u90e8\u7f72\u5931\u8d25\r\n\t\t\t\t\t\tutil.log(tx)\r\n\t\t\t\t\t}\r\n\t\t\t\t\tbreak;\r\n\t\t\t}\r\n\t\t\t//\u5904\u7406\u5b8c\u6bd5\u5220\u9664\u6389\r\n\t\t\tdelete subTxMap[tx.tx_hash]\r\n\t\t\t//\u6253\u5370\u4e00\u4e0b\u4ea4\u6613\u65e5\u5fd7\r\n\t\t\tutil.log(tx)\r\n\t\t})\r\n\t}else{\r\n\t\t//\u6765\u81ea\u672c\u5730\u6d4b\u8bd5\u73af\u5883\r\n\t\t//\u53ef\u76f4\u63a5\u8c03\u7528\u63a5\u53e3\u83b7\u53d6\u4ea4\u6613\u8be6\u60c5\r\n\t\t...\r\n\t}\r\n}\n'})})]})}function d(t={}){const{wrapper:n}={...(0,s.a)(),...t.components};return n?(0,e.jsx)(n,{...t,children:(0,e.jsx)(u,{...t})}):u(t)}},1151:(t,n,r)=>{r.d(n,{Z:()=>a,a:()=>i});var e=r(7294);const s={},l=e.createContext(s);function i(t){const n=e.useContext(l);return e.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function a(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:i(t.components),e.createElement(l.Provider,{value:n},t.children)}}}]);