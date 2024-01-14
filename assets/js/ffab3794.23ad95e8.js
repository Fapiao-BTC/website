"use strict";(self.webpackChunkfapiao=self.webpackChunkfapiao||[]).push([[2882],{3426:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var s=n(5893),i=n(1151);const r={sidebar_position:2},c="The first contract",o={id:"English/list/2",title:"The first contract",description:"Next we will use local test environment",source:"@site/docs/English/list/2.md",sourceDirName:"English/list",slug:"/English/list/2",permalink:"/website/docs/English/list/2",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Development preparation",permalink:"/website/docs/English/list/1"},next:{title:"Contract extends",permalink:"/website/docs/English/list/3"}},a={},l=[{value:"Create contract",id:"create-contract",level:2},{value:"Deploy contract",id:"deploy-contract",level:2},{value:"Contract interaction",id:"contract-interaction",level:2}];function d(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"the-first-contract",children:"The first contract"}),"\n",(0,s.jsxs)(t.p,{children:["Next we will use ",(0,s.jsx)(t.strong,{children:"local test environment"})]}),"\n",(0,s.jsxs)(t.p,{children:["Create a contract containing ",(0,s.jsx)(t.strong,{children:"Get and Set"})," functions to write and read the variable ",(0,s.jsx)(t.code,{children:"name"})]}),"\n",(0,s.jsx)(t.h2,{id:"create-contract",children:"Create contract"}),"\n",(0,s.jsxs)(t.p,{children:["Create a new ",(0,s.jsx)(t.code,{children:"new_test6.js"})," file:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"class Contract {\r\n\r\n     _name;\r\n\r\n     init(){\r\n        \r\n     }\r\n    \r\n     setName(name){\r\n         this._name = name;\r\n     }\r\n    \r\n     $getName(){\r\n         return this._name;\r\n     }\r\n    \r\n}\n"})}),"\n",(0,s.jsx)(t.admonition,{type:"caution",children:(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"In the Fp protocol, function names starting with $ are read-only functions, _ are private functions, and functions without any symbols are write functions"})})}),"\n",(0,s.jsx)(t.h2,{id:"deploy-contract",children:"Deploy contract"}),"\n",(0,s.jsx)(t.p,{children:"After deployment is completed, you will see the following interface:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(9493).Z+"",width:"2559",height:"1368"})}),"\n",(0,s.jsx)(t.h2,{id:"contract-interaction",children:"Contract interaction"}),"\n",(0,s.jsxs)(t.p,{children:["First, we call the ",(0,s.jsx)(t.code,{children:"$getName"})," function of the contract for the first time to obtain the ",(0,s.jsx)(t.code,{children:"name"})," value."]}),"\n",(0,s.jsxs)(t.p,{children:["As shown in the figure, the ",(0,s.jsx)(t.code,{children:"name"})," value at this time is empty."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(6810).Z+"",width:"1600",height:"550"})}),"\n",(0,s.jsxs)(t.p,{children:["Next we call the ",(0,s.jsx)(t.code,{children:"$setName"})," function of the contract and pass in ",(0,s.jsx)(t.code,{children:"Hello-BTC"})]}),"\n",(0,s.jsxs)(t.p,{children:["As shown in the figure, the transaction is successful ",(0,s.jsx)(t.code,{children:"success status: 1"})," ",(0,s.jsx)(t.code,{children:"failure status: 0"})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(2226).Z+"",width:"1582",height:"552"})}),"\n",(0,s.jsxs)(t.p,{children:["Next, we call the ",(0,s.jsx)(t.code,{children:"$getName"})," function of the contract again to obtain the ",(0,s.jsx)(t.code,{children:"name"})," value"]}),"\n",(0,s.jsxs)(t.p,{children:["As shown in the figure, the value at this time is already the ",(0,s.jsx)(t.code,{children:"Hello-BTC"})," we just passed in."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(7947).Z+"",width:"1524",height:"541"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Have you learned it?"})}),"\n",(0,s.jsx)(t.p,{children:"Let's take it one step further! ! !"})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},9493:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/1705109980623-529d2e53c25e6002bc8264a21c90909d.jpg"},6810:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/1705110597970-d66327cef148227fb7e27e11927a7607.jpg"},2226:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/1705110981648-06d6c0ec0490f87409ba9f0c3c4a6501.jpg"},7947:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/1705111119124-31700fb2467f2f90b192cd53fb7ce4af.jpg"},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>c});var s=n(7294);const i={},r=s.createContext(i);function c(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);