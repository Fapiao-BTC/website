"use strict";(self.webpackChunkfapiao=self.webpackChunkfapiao||[]).push([[7736],{630:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var r=n(5893),o=n(1151);const s={sidebar_position:5},i="Contract deployment contract",a={id:"English/list/5",title:"Contract deployment contract",description:"",source:"@site/docs/English/list/5.md",sourceDirName:"English/list",slug:"/English/list/5",permalink:"/website/docs/English/list/5",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Call between contracts",permalink:"/website/docs/English/list/4"},next:{title:"Built-in functions and properties",permalink:"/website/docs/English/list/6"}},c={},d=[];function l(t){const e={code:"code",h1:"h1",pre:"pre",...(0,o.a)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"contract-deployment-contract",children:"Contract deployment contract"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-javascript",children:'/*\r\nclass Contract{\r\n\t\r\ninit(name,age,data){\r\nthis.name = name;\r\nthis.age = age;\r\nthis.data = data;\r\n};\r\n\t\r\n$name(){\r\nreturn this.name;\r\n}\r\n\r\n$age(){\r\nreturn this.age;\r\n}\r\n\r\n$data(){\r\nreturn this.data;\r\n}\r\n}\r\nHex = 636c61737320436f6e74726163747b696e6974286e616d652c6167652c64617461297b746869732e6e616d653d6e616d653b746869732e6167653d61 67653b746869732e646174613d646174613b7d3b246e616d6528297b72657475726e20746869732e6e616d653b7d0a2461676528297b72657475726e20746 869732e6167653b7d0a246461746128297b72657475726e20746869732e646174613b7d7d\r\n\r\nDeploy the contract in the contract\r\nNote: You should not and cannot deploy contracts in the init method\r\n\r\n  */\r\n\r\n\r\nclass Contract {\r\n\r\n\tscriptHex = "636c61737320436f6e74726163747b696e6974286e616d652c6167652c64617461297b746869732e6e616d653d6e616d653b746869732e6167653d6 167653b746869732e646174613d646174613b7d3b246e616d6528297b72657475726e20746869732e6e616d653b7d0a2461676528297b72657475726e2074 6869732e6167653b7d0a246461746128297b72657475726e20746869732e646174613b7d7d";\r\n\r\n\t//Note that this init function must exist, regardless of whether you will write content in it or not.\r\n\tinit() {\r\n\r\n\t};\r\n\r\n\t//This is to deploy a contract that requires passing parameters to the init function\r\n\t//If you don\u2019t need to pass parameters, you can ignore the second parameter\r\n\ttestDeploy() {\r\n\t    //After successful deployment, return the contract KID\r\n\t    let kid = this.deploy(\r\n\t    this.scriptHex,\r\n\t    ["testName", 18, { color: \'red\', height: 175 }]);\r\n\t    return kid;\r\n\t}\r\n}\n'})})]})}function u(t={}){const{wrapper:e}={...(0,o.a)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(l,{...t})}):l(t)}},1151:(t,e,n)=>{n.d(e,{Z:()=>a,a:()=>i});var r=n(7294);const o={},s=r.createContext(o);function i(t){const e=r.useContext(s);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:i(t.components),r.createElement(s.Provider,{value:e},t.children)}}}]);