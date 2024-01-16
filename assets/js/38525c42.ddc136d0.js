"use strict";(self.webpackChunkfapiao=self.webpackChunkfapiao||[]).push([[3514],{3960:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>c,metadata:()=>d,toc:()=>o});var r=n(5893),a=n(1151);const c={sidebar_position:4},s="Contract trading",d={id:"api/get-contract-tx",title:"Contract trading",description:"Interface overview",source:"@site/i18n/en/api/get-contract-tx.md",sourceDirName:"api",slug:"/api/get-contract-tx",permalink:"/api/get-contract-tx",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Get contract",permalink:"/api/get-contract"},next:{title:"Contract events",permalink:"/api/get-contract-event"}},i={},o=[{value:"Interface overview",id:"interface-overview",level:2},{value:"Request parameters",id:"request-parameters",level:2},{value:"Request example",id:"request-example",level:2},{value:"Request URL",id:"request-url",level:3},{value:"Request method",id:"request-method",level:3},{value:"Request sample parameters",id:"request-sample-parameters",level:3},{value:"Response example",id:"response-example",level:3}];function l(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"contract-trading",children:"Contract trading"}),"\n",(0,r.jsx)(t.h2,{id:"interface-overview",children:"Interface overview"}),"\n",(0,r.jsx)(t.p,{children:"This interface provides the ability to obtain the transaction list generated under the contract based on the contract address."}),"\n",(0,r.jsx)(t.h2,{id:"request-parameters",children:"Request parameters"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"kid"}),": 'Required parameters, contract address'"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"page"}),": 'optional parameter, page number'"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"request-example",children:"Request example"}),"\n",(0,r.jsx)(t.h3,{id:"request-url",children:"Request URL"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"http://127.0.0.1:8765/api/address/:kid-tx?page=1"})}),"\n",(0,r.jsx)(t.h3,{id:"request-method",children:"Request method"}),"\n",(0,r.jsx)(t.p,{children:"GET"}),"\n",(0,r.jsx)(t.h3,{id:"request-sample-parameters",children:"Request sample parameters"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"kid=kfc47abb2fbaa4c85cd388b2fcc4bd430ed152208563958d519944d327b26"})}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"response-example",children:"Response example"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\r\n\t"code": 200,\r\n\t"data": [{\r\n\t\t"height": 5027792,\r\n\t\t"tx_hash": "286b3ce4daef3b8aed6b69716c3c1f63b3871ef8990d972375a1a216fb5209cc",\r\n\t\t"sender": "2N7TYrDKNeZf4eVGXDVJyRKWaPdbx4qvCJj",\r\n\t\t"kid": "kfc47abb2fbaa4c85cd388b2fcc4bd430ed152208563958d519944d327b26",\r\n\t\t"op": "deploy",\r\n\t\t"input": "636c61737320436f6e747261637420657874656e6473204b464332307b696e697428297b746869732e5f6e616d653d224b46432d55534454222c746869732e5f73796d626f6c3d224b55534454222c746869732e5f746f74616c537570706c793d3965382c746869732e5f62616c616e6365732e7365744275636b657428746869732e5f6d736753656e64657228292c746869732e5f746f74616c537570706c79292c746869732e6576656e74287b6e616d653a225472616e73666572222c66726f6d3a223030303030222c746f3a746869732e5f6d736753656e64657228292c616d6f756e743a746869732e5f746f74616c537570706c797d297d7d",\r\n\t\t"out": "kfc47abb2fbaa4c85cd388b2fcc4bd430ed152208563958d519944d327b26",\r\n\t\t"time_stamp": 1705027792,\r\n\t\t"status": 1\r\n\t}],\r\n\t"msg": "success"\r\n}\n'})})]})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>s});var r=n(7294);const a={},c=r.createContext(a);function s(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);