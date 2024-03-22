"use strict";(self.webpackChunkfapiao=self.webpackChunkfapiao||[]).push([[8654],{5187:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>i,toc:()=>d});var s=r(5893),a=r(1151);const t={sidebar_position:5},c="Properties",i={id:"list/5",title:"Properties",description:"Block height",source:"@site/docs/en/list/5.md",sourceDirName:"list",slug:"/list/5",permalink:"/list/5",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Call between contracts",permalink:"/list/4"},next:{title:"KFC20",permalink:"/list/6"}},l={},d=[];function o(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"properties",children:"Properties"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Block height"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"this.height\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Current contract address"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"this.address\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Transaction source address"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"this.txOrigin\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Current calling address"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"this.msgSender\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Transaction Memo"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"this.memo //Parse from the last output script, empty if there is none\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Block timestamp"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"this.timeStamp\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Transaction Hash"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"this.txHash\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Load external contract"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'let contract = this.Caller("kid");\r\ncontract.call("funcName",...args);\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Contract Event"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"//There is no return allowed below the event code line. If you want to return other data after the event, you need to define another function to record the event.\r\n//The first Key must be name (event name), there can be multiple arg parameters\r\nthis.event({name:'EventName',arg1:'arg1',arg2:'arg2'});\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Random Number - Integer"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"let min = 1;\r\nlet max = 100;\r\nthis.randomInt(min,max);\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Random Number-Decimal"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"let min = 0.0001;\r\nlet max = 100.00;\r\nthis.randomFloat(min,max);\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"MD5 encryption"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'md5e("Hello, World!");\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"sha256 encryption"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'sha256e("Hello, World!");\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"keccak256 encryption"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'keccak256("Hello, World!");\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Base64 encoding"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'base64e("Hello, World!");\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Base64 decoding"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'base64d("SGVsbG8sIFdvcmxkIQ==");\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"SafeMath"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"SafeMath.add(2,-1);\r\n\r\nSafeMath.sub(3,2);\r\n\r\nSafeMath.mul(2,3);\r\n\r\nSafeMath.div(6,2);\r\n\r\nSafeMath.mod(2,4);\r\n\r\nSafeMath.pow(2,3);\r\n\r\nSafeMath.fixed(100.03123,2)\r\n\r\nSafeMath.val(1);\r\n\r\nSafeMath.num(1);\r\n\r\nSafeMath.eq(1,1);\r\n\r\nSafeMath.neq(1,1);\r\n\r\nSafeMath.gt(2,1);\r\n\r\nSafeMath.lt(1,2);\r\n\r\nSafeMath.qte(1,2);\r\n\r\nSafeMath.lte(1,2);\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Map"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'class Contract {\r\n\r\n     name;\r\n     _tMap = new Map();\r\n\r\n\r\n     init() {\r\n         this.name = "123";\r\n     }\r\n\r\n     setMap(k,v){\r\n        this._tMap.set(k,v)\r\n     }\r\n\r\n     $getMap(k){\r\n         return this._tMap.get(k)\r\n     }\r\n\r\n     delete(key){\r\n         this._tMap.delete(key)\r\n     }\r\n\r\n     $hasKey(key){\r\n         return this._tMap.hasKey(key)\r\n     }\r\n\r\n     $getName(){\r\n         return this.name;\r\n     }\r\n\r\n     setBucket(){\r\n         this._tMap.setBucket("key1", "key2", "value")\r\n     }\r\n\r\n     $getBucket(){\r\n         const value = this._tMap.getBucket("key1");\r\n         if(typeof value === \'object\'){\r\n             return JSON.stringify(value);\r\n         }else{\r\n             return value;\r\n         }\r\n     }\r\n\r\n     delBucket(){\r\n         this._tMap.delBucket("key1","key2")\r\n     }\r\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"BigNumber"})}),"\n",(0,s.jsx)(n.p,{children:"We have built-in bigNumber.js library, you can use it to complete high-precision business processing"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"new BigNumber(1)\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>c});var s=r(7294);const a={},t=s.createContext(a);function c(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);