"use strict";(self.webpackChunkfapiao=self.webpackChunkfapiao||[]).push([[9290],{7851:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var t=r(5893),a=r(1151);const s={sidebar_position:7},o="KFC20",i={id:"list/7",title:"KFC20",description:"\u5728Fp\u4e0a\u521b\u5efaKFC20\u4ee3\u5e01",source:"@site/i18n/zh-CN/list/7.md",sourceDirName:"list",slug:"/list/7",permalink:"/zh-CN/list/7",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"\u5185\u7f6e\u51fd\u6570\u548c\u5c5e\u6027",permalink:"/zh-CN/list/6"},next:{title:"\u5feb\u901f\u521b\u5efaKFC20\u4ee3\u5e01",permalink:"/zh-CN/list/8"}},l={},c=[{value:"\u5728Fp\u4e0a\u521b\u5efaKFC20\u4ee3\u5e01",id:"\u5728fp\u4e0a\u521b\u5efakfc20\u4ee3\u5e01",level:2}];function u(n){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"kfc20",children:"KFC20"}),"\n",(0,t.jsx)(e.h2,{id:"\u5728fp\u4e0a\u521b\u5efakfc20\u4ee3\u5e01",children:"\u5728Fp\u4e0a\u521b\u5efaKFC20\u4ee3\u5e01"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"KIP-20"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-javascript",children:'[\r\n\t"$name", \r\n\t"$symbol",\r\n\t"$totalSupply",\r\n\t"$balanceOf", \r\n\t"approve", \r\n\t"increaseAllowance",\r\n\t"decreaseAllowance", \r\n\t"$allowance", \r\n\t"transfer", \r\n\t"transferFrom"\r\n]\n'})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"\u5408\u7ea6\u6e90\u7801"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-javascript",children:"class Contract {\r\n\r\n    _name;\r\n    _symbol;\r\n    _totalSupply;\r\n    _balances = new Map();\r\n    _allowances = new Map();\r\n\r\n    init() {\r\n        this._name = 'KFC20';\r\n        this._symbol = 'K2';\r\n        this._totalSupply = SafeMath.val(100000000);\r\n        this._balances.setBucket(this._msgSender(), this._totalSupply);\r\n        this.event({\r\n            name: 'Transfer',\r\n            from: 'fapiao.org',\r\n            to: this._msgSender(),\r\n            amount: this._totalSupply\r\n        });\r\n    }\r\n\r\n    $name() {\r\n        return this._name;\r\n    };\r\n\r\n    $symbol() {\r\n        return this._symbol;\r\n    }\r\n\r\n    $totalSupply() {\r\n        return SafeMath.val(this._totalSupply);\r\n    };\r\n\r\n    $balanceOf(account) {\r\n        return SafeMath.val(this._balances.getBucket(account));\r\n    };\r\n\r\n    approve(sender, amount) {\r\n        this._approve(this._msgSender(), sender, amount);\r\n        return true;\r\n    };\r\n\r\n    increaseAllowance(spender, addedValue) {\r\n        let aOld = this._allowances.getBucket(owner, sender);\r\n        this._approve(this._msgSender(), spender, SafeMath.add(aOld, addedValue));\r\n        return true;\r\n    };\r\n\r\n    decreaseAllowance(spender, subtractedValue) {\r\n        let aOld = this.getBucket(owner, sender);\r\n        this._approve(this._msgSender(), spender, SafeMath.sub(aOld, subtractedValue));\r\n        return true;\r\n    };\r\n\r\n    $allowance(owner, sender) {\r\n        return SafeMath.val(this._allowances.getBucket(owner, sender));\r\n    };\r\n\r\n    transfer(recipient, amount) {\r\n        this._transfer(this._msgSender(), recipient, amount);\r\n        return true;\r\n    };\r\n\r\n    transferFrom(sender, recipient, amount) {\r\n        let aOld = this._allowances.getBucket(sender, this._msgSender());\r\n        require(SafeMath.gte(aOld, amount), 'KFC20: transfer amount exceeds allowance');\r\n        this._transfer(sender, recipient, amount);\r\n        this._approve(sender, this._msgSender(), SafeMath.sub(aOld, amount));\r\n        return true;\r\n    };\r\n\r\n    _approve(owner, sender, amount) {\r\n        this._allowances.setBucket(owner, sender, SafeMath.val(amount));\r\n        this.event({\r\n            name: 'Approve',\r\n            from: owner,\r\n            to: sender,\r\n            amount: amount\r\n        })\r\n    };\r\n\r\n    _transfer(owner, recipient, amount) {\r\n        let oldO = this._balances.getBucket(owner);\r\n\r\n        require(SafeMath.gte(oldO, amount), 'KFC20: transfer amount exceeds balance');\r\n\r\n        let oldR = this._balances.getBucket(recipient)\r\n\r\n        this._balances.setBucket(owner, SafeMath.sub(oldO, amount));\r\n        this._balances.setBucket(recipient, SafeMath.add(oldR, amount))\r\n\r\n        this.event({\r\n            name: 'Transfer',\r\n            from: owner,\r\n            to: recipient,\r\n            amount: amount\r\n        });\r\n    };\r\n\r\n    _msgSender() {\r\n        return this.msgSender;\r\n    }\r\n};\n"})})]})}function d(n={}){const{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(u,{...n})}):u(n)}},1151:(n,e,r)=>{r.d(e,{Z:()=>i,a:()=>o});var t=r(7294);const a={},s=t.createContext(a);function o(n){const e=t.useContext(s);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:o(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);