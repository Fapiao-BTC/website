"use strict";(self.webpackChunkfapiao=self.webpackChunkfapiao||[]).push([[9961],{2203:(n,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var e=t(5893),s=t(1151);const a={sidebar_position:3},i="\u5408\u7ea6\u7684\u7ee7\u627f",c={id:"list/3",title:"\u5408\u7ea6\u7684\u7ee7\u627f",description:"\u6211\u76f8\u4fe1\u8fd9\u5bf9\u4e8e\u5b66\u4e60\u8fc7 JavaScript \u7684\u4eba\u4eec\u6765\u8bf4\u662f\u4e00\u4ef6\u975e\u5e38\u5bb9\u6613\u7684\u4e8b\u60c5",source:"@site/docs/zh-CN/list/3.md",sourceDirName:"list",slug:"/list/3",permalink:"/zh-CN/list/3",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u7b2c\u4e00\u4e2a\u5408\u7ea6",permalink:"/zh-CN/list/2"},next:{title:"\u5408\u7ea6\u4e4b\u95f4\u8c03\u7528",permalink:"/zh-CN/list/4"}},o={},l=[];function d(n){const r={admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...n.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(r.h1,{id:"\u5408\u7ea6\u7684\u7ee7\u627f",children:"\u5408\u7ea6\u7684\u7ee7\u627f"}),"\n",(0,e.jsxs)(r.p,{children:["\u6211\u76f8\u4fe1\u8fd9\u5bf9\u4e8e\u5b66\u4e60\u8fc7 ",(0,e.jsx)(r.code,{children:"JavaScript"})," \u7684\u4eba\u4eec\u6765\u8bf4\u662f\u4e00\u4ef6\u975e\u5e38\u5bb9\u6613\u7684\u4e8b\u60c5"]}),"\n",(0,e.jsx)(r.p,{children:"\u6240\u4ee5\u522b\u5e9f\u8bdd\u4e86\uff0c\u5feb\u6765\u770b\u770b\u5427\uff01"}),"\n",(0,e.jsx)(r.pre,{children:(0,e.jsx)(r.code,{className:"language-javascript",children:"class TestName {\r\n\r\n     _name;\r\n\r\n     init(){\r\n        \r\n     }\r\n    \r\n     setName(name){\r\n         this._name = name;\r\n     }\r\n    \r\n     $getName(){\r\n         return this._name;\r\n     }\r\n    \r\n}\r\n\r\n\r\nclass Contract extends TestName{\r\n\r\n     init(){\r\n\r\n     }\r\n\r\n}\n"})}),"\n",(0,e.jsx)(r.p,{children:(0,e.jsx)(r.strong,{children:"\u6ca1\u9519\uff0c\u5c31\u662f\u8fd9\u6837 \u6211\u4eec\u7684 Contract \u7ee7\u627f\u4e86 TestName \u7684\u6240\u6709\u529f\u80fd"})}),"\n",(0,e.jsx)(r.p,{children:(0,e.jsx)(r.strong,{children:"\u6b64\u5916\uff0c\u8fd8\u53ef\u4ee5\u7ee7\u627fTestName\u4e0a\u7684\u5176\u4ed6\u7236\u7c7b"})}),"\n",(0,e.jsx)(r.p,{children:"\u5c31\u50cf\u8fd9\u6837"}),"\n",(0,e.jsx)(r.pre,{children:(0,e.jsx)(r.code,{className:"language-javascript",children:'let D = {\r\n\tsayHello: function() {\r\n\t\treturn "hello";\r\n\t}\r\n};\r\n\r\nclass C {\r\n\tdd = D;\r\n\tname = "123";\r\n\r\n\t$sayHello() {\r\n\t\treturn this.dd.sayHello();\r\n\t}\r\n\r\n\tsetName(name) {\r\n\t\tthis.name = name;\r\n\t}\r\n\r\n\t$viewName() {\r\n\t\treturn this.name;\r\n\t};\r\n\r\n}\r\n\r\nclass B extends C {\r\n\r\n\t$viewName2() {\r\n\t\treturn 12;\r\n\t};\r\n}\r\n\r\nclass A extends B {\r\n\t$viewName23() {\r\n\t\treturn 12;\r\n\t};\r\n\r\n}\r\n\r\nclass Contract {\r\n\taa = new A();\r\n\r\n\tinit() {\r\n\r\n\t}\r\n\r\n\tset(name) {\r\n\t\tthis.aa.setName(name)\r\n\t}\r\n\t$view() {\r\n\t\treturn this.aa.$viewName();\r\n\t}\r\n}\n'})}),"\n",(0,e.jsxs)(r.admonition,{type:"caution",children:[(0,e.jsx)(r.p,{children:(0,e.jsx)(r.strong,{children:"\u5408\u7ea6\u672c\u8eab\u53ca\u5176\u7ee7\u627f\u7684\u7236\u7c7b\u4e0d\u80fd\u6709\u663e\u5f0f\u51fd\u6570"})}),(0,e.jsx)(r.pre,{children:(0,e.jsx)(r.code,{className:"language-javascript",children:"testSetName2 = function(name){\r\n     this.setName(name);\r\n}\n"})})]})]})}function m(n={}){const{wrapper:r}={...(0,s.a)(),...n.components};return r?(0,e.jsx)(r,{...n,children:(0,e.jsx)(d,{...n})}):d(n)}},1151:(n,r,t)=>{t.d(r,{Z:()=>c,a:()=>i});var e=t(7294);const s={},a=e.createContext(s);function i(n){const r=e.useContext(a);return e.useMemo((function(){return"function"==typeof n?n(r):{...r,...n}}),[r,n])}function c(n){let r;return r=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:i(n.components),e.createElement(a.Provider,{value:r},n.children)}}}]);