"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5893],{47842:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>t,contentTitle:()=>r,default:()=>x,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var s=d(74848),h=d(28453);const i={sidebar_position:12},r="1.2 Hashlib \u6a21\u5757API\u624b\u518c",l={id:"CanaanK230/part5/HashlibmoduleAPImanual",title:"1.2 Hashlib \u6a21\u5757API\u624b\u518c",description:"\u524d\u8a00",source:"@site/docs/CanaanK230/part5/12_HashlibmoduleAPImanual.md",sourceDirName:"CanaanK230/part5",slug:"/CanaanK230/part5/HashlibmoduleAPImanual",permalink:"/ATK-Prod/ATK-k230/k230/docs/CanaanK230/part5/HashlibmoduleAPImanual",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/CanaanK230/part5/12_HashlibmoduleAPImanual.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"canaanK230Sidebar",previous:{title:"1.1 Ucryptolib \u6a21\u5757API\u624b\u518c",permalink:"/ATK-Prod/ATK-k230/k230/docs/CanaanK230/part5/UcryptolibmoduleAPImanual"},next:{title:"1.3 utime \u65f6\u95f4\u76f8\u5173\u7684\u529f\u80fd API\u624b\u518c",permalink:"/ATK-Prod/ATK-k230/k230/docs/CanaanK230/part5/utimetime-dependentfunctionmoduleAPImanual"}},t={},c=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:3},{value:"\u8bfb\u8005\u5bf9\u8c61",id:"\u8bfb\u8005\u5bf9\u8c61",level:3},{value:"\u7f29\u7565\u8bcd\u5b9a\u4e49",id:"\u7f29\u7565\u8bcd\u5b9a\u4e49",level:3},{value:"\u4fee\u8ba2\u8bb0\u5f55",id:"\u4fee\u8ba2\u8bb0\u5f55",level:3},{value:"1. \u6982\u8ff0",id:"1-\u6982\u8ff0",level:2},{value:"2. API\u63cf\u8ff0",id:"2-api\u63cf\u8ff0",level:2},{value:"2.1 \u7c7b sha256",id:"21-\u7c7b-sha256",level:3},{value:"2.1.1 \u6570\u636e\u66f4\u65b0\u51fd\u6570 update()",id:"211-\u6570\u636e\u66f4\u65b0\u51fd\u6570-update",level:4},{value:"2.1.2 \u6d88\u606f\u6458\u8981\u51fd\u6570 digest()",id:"212-\u6d88\u606f\u6458\u8981\u51fd\u6570-digest",level:4},{value:"2.1.3 \u5341\u516d\u8fdb\u5236\u6d88\u606f\u6458\u8981\u51fd\u6570 hexdigest()",id:"213-\u5341\u516d\u8fdb\u5236\u6d88\u606f\u6458\u8981\u51fd\u6570-hexdigest",level:4},{value:"3. \u793a\u4f8b\u7a0b\u5e8f",id:"3-\u793a\u4f8b\u7a0b\u5e8f",level:2},{value:"\u8ba1\u7b97 hash \u503c",id:"\u8ba1\u7b97-hash-\u503c",level:3},{value:"4. \u4f7f\u7528\u6307\u5357",id:"4-\u4f7f\u7528\u6307\u5357",level:2}];function a(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,h.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"12-hashlib-\u6a21\u5757api\u624b\u518c",children:"1.2 Hashlib \u6a21\u5757API\u624b\u518c"})}),"\n",(0,s.jsx)(n.h2,{id:"\u524d\u8a00",children:"\u524d\u8a00"}),"\n",(0,s.jsx)(n.h3,{id:"\u6982\u8ff0",children:"\u6982\u8ff0"}),"\n",(0,s.jsx)(n.p,{children:"\u672c\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd CanMV \u9879\u76ee\u4e2d\u52a0\u89e3\u5bc6\u7b97\u6cd5\u5e93-uhashlib\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u8bfb\u8005\u5bf9\u8c61",children:"\u8bfb\u8005\u5bf9\u8c61"}),"\n",(0,s.jsx)(n.p,{children:"\u672c\u6587\u6863\uff08\u672c\u6307\u5357\uff09\u4e3b\u8981\u9002\u7528\u4e8e\u4ee5\u4e0b\u4eba\u5458\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u6280\u672f\u652f\u6301\u5de5\u7a0b\u5e08"}),"\n",(0,s.jsx)(n.li,{children:"\u8f6f\u4ef6\u5f00\u53d1\u5de5\u7a0b\u5e08"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u7f29\u7565\u8bcd\u5b9a\u4e49",children:"\u7f29\u7565\u8bcd\u5b9a\u4e49"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u7b80\u79f0"}),(0,s.jsx)(n.th,{children:"\u8bf4\u660e"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"SHA1"}),(0,s.jsx)(n.td,{children:"Secure Hash Algorithm 1"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"SHA2"}),(0,s.jsx)(n.td,{children:"Secure Hash Algorithm 2"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"\u4fee\u8ba2\u8bb0\u5f55",children:"\u4fee\u8ba2\u8bb0\u5f55"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u6587\u6863\u7248\u672c\u53f7"}),(0,s.jsx)(n.th,{children:"\u4fee\u6539\u8bf4\u660e"}),(0,s.jsx)(n.th,{children:"\u4fee\u6539\u8005"}),(0,s.jsx)(n.th,{children:"\u65e5\u671f"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"V1.0"}),(0,s.jsx)(n.td,{children:"\u521d\u7248"}),(0,s.jsx)(n.td,{children:"\u6768\u5e06"}),(0,s.jsx)(n.td,{children:"2023-09-15"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"V1.1"}),(0,s.jsx)(n.td,{children:"\u4fee\u6539\u793a\u4f8b\u7a0b\u5e8f\uff0c\u65b0\u589e\u4f7f\u7528\u6307\u5357"}),(0,s.jsx)(n.td,{children:"\u6768\u5e06"}),(0,s.jsx)(n.td,{children:"2023-10-10"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"V1.2"}),(0,s.jsx)(n.td,{children:"\u589e\u52a0 SHA1 \u548c MD5 \u8f6f\u4ef6\u6e90\u751f\u5b9e\u73b0"}),(0,s.jsx)(n.td,{children:"\u6768\u5e06"}),(0,s.jsx)(n.td,{children:"2023-10-13"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"1-\u6982\u8ff0",children:"1. \u6982\u8ff0"}),"\n",(0,s.jsx)(n.p,{children:"Uhashlib \u5e93\u63d0\u4f9b\u4e86\u57fa\u4e8e MD5\u3001SHA1\u3001SHA2 \u4e8c\u8fdb\u5236\u6570\u636e\u7684\u54c8\u5e0c\u7b97\u6cd5\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"2-api\u63cf\u8ff0",children:"2. API\u63cf\u8ff0"}),"\n",(0,s.jsx)(n.p,{children:"Uhashlib \u5e93\u63d0\u4f9b\u4e86\u4e09\u4e2a\u7c7b\uff1amd5\u3001sha1 \u548c sha256\uff0c\u8fd9\u4e9b\u7c7b\u5206\u522b\u5b9e\u73b0\u4e86\u4e24\u4e2a\u51fd\u6570\uff0c\u6570\u636e\u66f4\u65b0\u51fd\u6570 update()\uff0c\u6d88\u606f\u6458\u8981\u51fd\u6570 digest()\u3002\u5176\u4e2d\uff0cmd5 \u548c sha1 \u662f micropython \u7684\u8f6f\u4ef6\u6e90\u751f\u5b9e\u73b0\uff1bsha256 \u7531\u5e95\u5c42\u786c\u4ef6\u52a0\u901f\u5668\u8fdb\u884c\u52a0\u901f\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:(0,s.jsxs)(n.strong,{children:["\u6ce8\u610f\uff1a\u672c\u6587\u6863\u4e0d\u4f1a\u4ecb\u7ecd md5 \u548c sha1 \u8be6\u7ec6\u6b65\u9aa4\uff0c\u5177\u4f53\u8bf7\u53c2\u8003 micropython [hash\u5b98\u65b9\u6587\u6863] ",(0,s.jsx)(n.a,{href:"https://docs.micropython.org/en/latest/library/hashlib.html",children:"https://docs.micropython.org/en/latest/library/hashlib.html"})]})})}),"\n",(0,s.jsx)(n.h3,{id:"21-\u7c7b-sha256",children:"2.1 \u7c7b sha256"}),"\n",(0,s.jsx)(n.p,{children:"\u3010\u63cf\u8ff0\u3011"}),"\n",(0,s.jsx)(n.p,{children:"\u7c7b sha256 \u7528\u4e8e\u521b\u5efa\u4e00\u4e2a SHA256 \u54c8\u5e0c\u5bf9\u8c61\uff0c\u5e76\u6709\u9009\u62e9\u5730\u5411\u5176\u4e2d\u53d1\u9001\u6570\u636e\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u3010\u8bed\u6cd5\u3011"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"uhashlib.sha256([data])\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u3010\u53c2\u6570\u3011"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u53c2\u6570\u540d\u79f0"}),(0,s.jsx)(n.th,{children:"\u63cf\u8ff0"}),(0,s.jsx)(n.th,{children:"\u8f93\u5165/\u8f93\u51fa"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"data(\u53ef\u9009)"}),(0,s.jsx)(n.td,{children:"\u4e8c\u8fdb\u5236\u6570\u636e"}),(0,s.jsx)(n.td,{children:"\u8f93\u5165"})]})})]}),"\n",(0,s.jsx)(n.p,{children:"\u3010\u8fd4\u56de\u503c\u3011"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u8fd4\u56de\u503c"}),(0,s.jsx)(n.th,{children:"\u63cf\u8ff0"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"\u6210\u529f"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u975e 0"}),(0,s.jsx)(n.td,{children:"\u5931\u8d25"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"\u3010\u6ce8\u610f\u3011"}),"\n",(0,s.jsx)(n.p,{children:"\u65e0"}),"\n",(0,s.jsx)(n.p,{children:"\u3010\u4e3e\u4f8b\u3011"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"data = bytes([0]*64)\nhash_obj = uhashlib.sha256(data)\nhash_obj.update(data)\ndgst = hash_obj.digest()\nprint(dgst)\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u3010\u76f8\u5173\u4e3b\u9898\u3011"}),"\n",(0,s.jsx)(n.p,{children:"\u65e0"}),"\n",(0,s.jsx)(n.h4,{id:"211-\u6570\u636e\u66f4\u65b0\u51fd\u6570-update",children:"2.1.1 \u6570\u636e\u66f4\u65b0\u51fd\u6570 update()"}),"\n",(0,s.jsx)(n.p,{children:"\u3010\u63cf\u8ff0\u3011"}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679c\u9700\u8981\u591a\u6b21\u8f93\u5165\u4e8c\u8fdb\u5236\u6570\u636e\uff0c\u53ef\u4ee5\u8c03\u7528 update() \u51fd\u6570\u66f4\u65b0\u6570\u636e\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u3010\u8bed\u6cd5\u3011"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"obj.update(data)\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u3010\u53c2\u6570\u3011"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u53c2\u6570\u540d\u79f0"}),(0,s.jsx)(n.th,{children:"\u63cf\u8ff0"}),(0,s.jsx)(n.th,{children:"\u8f93\u5165/\u8f93\u51fa"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"data"}),(0,s.jsx)(n.td,{children:"\u8f93\u5165\u4e8c\u8fdb\u5236\u6570\u636e"}),(0,s.jsx)(n.td,{children:"\u8f93\u5165"})]})})]}),"\n",(0,s.jsx)(n.p,{children:"\u3010\u8fd4\u56de\u503c\u3011"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u8fd4\u56de\u503c"}),(0,s.jsx)(n.th,{children:"\u63cf\u8ff0"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"\u6210\u529f"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u975e 0"}),(0,s.jsx)(n.td,{children:"\u5931\u8d25"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"\u3010\u6ce8\u610f\u3011"}),"\n",(0,s.jsx)(n.p,{children:"\u65e0"}),"\n",(0,s.jsx)(n.p,{children:"\u3010\u4e3e\u4f8b\u3011"}),"\n",(0,s.jsx)(n.p,{children:"\u65e0"}),"\n",(0,s.jsx)(n.p,{children:"\u3010\u76f8\u5173\u4e3b\u9898\u3011"}),"\n",(0,s.jsx)(n.p,{children:"\u65e0"}),"\n",(0,s.jsx)(n.h4,{id:"212-\u6d88\u606f\u6458\u8981\u51fd\u6570-digest",children:"2.1.2 \u6d88\u606f\u6458\u8981\u51fd\u6570 digest()"}),"\n",(0,s.jsx)(n.p,{children:"\u3010\u63cf\u8ff0\u3011"}),"\n",(0,s.jsx)(n.p,{children:"\u8fd4\u56de\u6240\u6709\u8f93\u5165\u6570\u636e\u7684\u54c8\u5e0c\u503c\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"\u6ce8\u610f\uff1a\u5728micropython\u4e2d\uff0c\u4f7f\u7528\u6b64\u51fd\u6570\u4f1a\u5b8c\u6210\u6700\u540e\u7684\u8ba1\u7b97\uff0c\u4e0d\u662f\u5355\u7eaf\u7684\u5c06\u7ed3\u679c\u663e\u793a\u51fa\u6765\uff0c\u6240\u4ee5\u53ea\u80fd\u8c03\u7528\u4e00\u6b21\uff0c\u5982\u679c\u8981\u591a\u6b21\u4f7f\u7528\u8be5\u503c\uff0c\u8bf7\u4fdd\u5b58\u5230\u53d8\u91cf\u4e2d\u3002"})})}),"\n",(0,s.jsx)(n.p,{children:"\u3010\u8bed\u6cd5\u3011"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"dgst = hash.digest()\nprint(dgst)\n\n/*********** note ***********/\na = hash.digest()\nb = hash.digest() # Error\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u3010\u53c2\u6570\u3011"}),"\n",(0,s.jsx)(n.p,{children:"\u65e0"}),"\n",(0,s.jsx)(n.p,{children:"\u3010\u8fd4\u56de\u503c\u3011"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u8fd4\u56de\u503c"}),(0,s.jsx)(n.th,{children:"\u63cf\u8ff0"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"\u6210\u529f"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u975e 0"}),(0,s.jsx)(n.td,{children:"\u5931\u8d25"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"\u3010\u6ce8\u610f\u3011"}),"\n",(0,s.jsx)(n.p,{children:"\u65e0"}),"\n",(0,s.jsx)(n.p,{children:"\u3010\u4e3e\u4f8b\u3011"}),"\n",(0,s.jsx)(n.p,{children:"\u65e0"}),"\n",(0,s.jsx)(n.p,{children:"\u3010\u76f8\u5173\u4e3b\u9898\u3011"}),"\n",(0,s.jsx)(n.p,{children:"\u65e0"}),"\n",(0,s.jsx)(n.h4,{id:"213-\u5341\u516d\u8fdb\u5236\u6d88\u606f\u6458\u8981\u51fd\u6570-hexdigest",children:"2.1.3 \u5341\u516d\u8fdb\u5236\u6d88\u606f\u6458\u8981\u51fd\u6570 hexdigest()"}),"\n",(0,s.jsx)(n.p,{children:"\u8be5\u65b9\u6cd5\u672a\u5b9e\u73b0\u3002\u4f7f\u7528 binascii.hexlify(hash.digest()) \u53ef\u4ee5\u8fbe\u5230\u7c7b\u4f3c\u7684\u6548\u679c\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"3-\u793a\u4f8b\u7a0b\u5e8f",children:"3. \u793a\u4f8b\u7a0b\u5e8f"}),"\n",(0,s.jsx)(n.h3,{id:"\u8ba1\u7b97-hash-\u503c",children:"\u8ba1\u7b97 hash \u503c"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"import uhashlib\nimport binascii\n\n# init sha256 obj\nobj = uhashlib.sha256()\n# input data1\nobj.update(b'hello')\n# input data2\nobj.update(b'world')\n# compute digest\ndgst = obj.digest()\nprint(binascii.hexlify(dgst))\n# b'936a185caaa266bb9cbe981e9e05cb78cd732b0b3280eb944412bb6f8f8f07af'\n"})}),"\n",(0,s.jsx)(n.h2,{id:"4-\u4f7f\u7528\u6307\u5357",children:"4. \u4f7f\u7528\u6307\u5357"}),"\n",(0,s.jsxs)(n.p,{children:["\u622a\u6b62\u5230\u5f53\u524d\u7248\u672c\uff0cuhashlib \u5e93\u5df2\u7ecf\u6d4b\u8bd5\u4e86\u4e0b\u5217 case\u3002\u6d4b\u8bd5\u7a0b\u5e8f\u53c2\u8003 ",(0,s.jsx)(n.em,{children:"./tests/cipher/cipher.py"}),"\uff0c\u542f\u52a8 canmv \u5f00\u53d1\u677f\uff0c\u8fdb\u5165 REPL \u4e4b\u540e\uff0c\u901a\u8fc7\u547d\u4ee4 ",(0,s.jsx)(n.strong,{children:"import sdcard.app.tests.cipher.cipher"})," \u53ef\u76f4\u63a5\u8fd0\u884c\u6d4b\u8bd5 demo\u3002"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u7c7b"}),(0,s.jsx)(n.th,{children:"\u6d4b\u8bd5 case"}),(0,s.jsx)(n.th,{children:"\u6d4b\u8bd5\u7ed3\u679c"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"uhashlib"}),(0,s.jsx)(n.td,{children:"\u8c03\u7528\u4e00\u6b21 update() \u66f4\u65b0\u6570\u636e"}),(0,s.jsx)(n.td,{children:"pass"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"uhashlib"}),(0,s.jsx)(n.td,{children:"\u8c03\u7528\u591a\u6b21 update() \u66f4\u65b0\u6570\u636e"}),(0,s.jsx)(n.td,{children:"pass"})]})]})]})]})}function x(e={}){const{wrapper:n}={...(0,h.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,d)=>{d.d(n,{R:()=>r,x:()=>l});var s=d(96540);const h={},i=s.createContext(h);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(h):e.components||h:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);