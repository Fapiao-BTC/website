"use strict";(self.webpackChunkfapiao=self.webpackChunkfapiao||[]).push([[8654],{5187:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>d});var s=r(5893),a=r(1151);const t={sidebar_position:5},i="Built-in functions and properties",c={id:"list/5",title:"Built-in functions and properties",description:"Block height",source:"@site/docs/en/list/5.md",sourceDirName:"list",slug:"/list/5",permalink:"/list/5",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Call between contracts",permalink:"/list/4"},next:{title:"KFC20",permalink:"/list/6"}},l={},d=[];function o(n){const e={code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"built-in-functions-and-properties",children:"Built-in functions and properties"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Block height"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:"this.height\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Current contract address"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:"this.address\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Transaction source address"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:"this.txOrigin\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Current calling address"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:"this.msgSender\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"OP_RETURN"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:"this.memo\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Block timestamp"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:"this.timeStamp\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Transaction Hash"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:"this.txHash\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Load external contract"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:'let contract = NewContract("kid");\r\ncontract.call("funcName",...args);\n'})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Contract Event"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:"//There is no return allowed below the event code line. If you want to return other data after the event, you need to define another function to record the event.\r\n//The first Key must be name (event name), there can be multiple arg parameters\r\nthis.event({name:'EventName',arg1:'arg1',arg2:'arg2'});\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Random Number - Integer"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:"let min = 1;\r\nlet max = 100;\r\nthis.randomInt(min,max);\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Random Number-Decimal"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:"let min = 0.0001;\r\nlet max = 100.00;\r\nthis.randomFloat(min,max);\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"MD5 encryption"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:'md5e("Hello, World!");\n'})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"sha256 encryption"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:'sha256e("Hello, World!");\n'})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"keccak256 encryption"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:'keccak256("Hello, World!");\n'})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Base64 encoding"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:'base64e("Hello, World!");\n'})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Base64 decoding"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:'base64d("SGVsbG8sIFdvcmxkIQ==");\n'})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"SafeMath"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:"SafeMath.add(2,-1);\r\n\r\nSafeMath.sub(3,2);\r\n\r\nSafeMath.mul(2,3);\r\n\r\nSafeMath.div(6,2);\r\n\r\nSafeMath.mod(2,4);\r\n\r\nSafeMath.pow(2,3);\r\n\r\nSafeMath.fixed(100.03123,2)\r\n\r\nSafeMath.val(1);\r\n\r\nSafeMath.num(1);\r\n\r\nSafeMath.eq(1,1);\r\n\r\nSafeMath.neq(1,1);\r\n\r\nSafeMath.gt(2,1);\r\n\r\nSafeMath.lt(1,2);\r\n\r\nSafeMath.qte(1,2);\r\n\r\nSafeMath.lte(1,2);\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Map"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:'class Contract {\r\n\r\n     name;\r\n     _tMap = new Map();\r\n\r\n\r\n     init() {\r\n         this.name = "123";\r\n     }\r\n\r\n     setMap(k,v){\r\n        this._tMap.set(k,v)\r\n     }\r\n\r\n     $getMap(k){\r\n         return this._tMap.get(k)\r\n     }\r\n\r\n     delete(key){\r\n         this._tMap.delete(key)\r\n     }\r\n\r\n     $hasKey(key){\r\n         return this._tMap.hasKey(key)\r\n     }\r\n\r\n     $getName(){\r\n         return this.name;\r\n     }\r\n\r\n     setBucket(){\r\n         this._tMap.setBucket("key1", "key2", "value")\r\n     }\r\n\r\n     $getBucket(){\r\n         const value = this._tMap.getBucket("key1");\r\n         if(typeof value === \'object\'){\r\n             return JSON.stringify(value);\r\n         }else{\r\n             return value;\r\n         }\r\n     }\r\n\r\n     delBucket(){\r\n         this._tMap.delBucket("key1","key2")\r\n     }\r\n}\n'})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"BigNumber"})}),"\n",(0,s.jsx)(e.p,{children:"We have built-in bigNumber.js library, you can use it to complete high-precision business processing"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:"new BigNumber(1)\n"})})]})}function h(n={}){const{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(o,{...n})}):o(n)}},1151:(n,e,r)=>{r.d(e,{Z:()=>c,a:()=>i});var s=r(7294);const a={},t=s.createContext(a);function i(n){const e=s.useContext(t);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:i(n.components),s.createElement(t.Provider,{value:e},n.children)}}}]);