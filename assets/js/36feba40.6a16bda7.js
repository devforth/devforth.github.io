"use strict";(self.webpackChunkadminforth=self.webpackChunkadminforth||[]).push([[4980],{6521:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>o});var s=r(4848),n=r(8453);const c={},i="BeforeDataSourceRequestFunction()",d={id:"api/types/Back/type-aliases/BeforeDataSourceRequestFunction",title:"BeforeDataSourceRequestFunction()",description:"BeforeDataSourceRequestFunction: (params) => Promise\\",source:"@site/docs/api/types/Back/type-aliases/BeforeDataSourceRequestFunction.md",sourceDirName:"api/types/Back/type-aliases",slug:"/api/types/Back/type-aliases/BeforeDataSourceRequestFunction",permalink:"/docs/api/types/Back/type-aliases/BeforeDataSourceRequestFunction",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"AllowedActions",permalink:"/docs/api/types/Back/type-aliases/AllowedActions"},next:{title:"BeforeLoginConfirmationFunction",permalink:"/docs/api/types/Back/type-aliases/BeforeLoginConfirmationFunction"}},l={},o=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"error?",id:"error",level:3},{value:"ok",id:"ok",level:3}];function a(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"beforedatasourcerequestfunction",children:"BeforeDataSourceRequestFunction()"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"BeforeDataSourceRequestFunction"}),": (",(0,s.jsx)(t.code,{children:"params"}),") => ",(0,s.jsx)(t.code,{children:"Promise"}),"<",(0,s.jsx)(t.code,{children:"object"}),">"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Modify query to change how data is fetched from database.\nReturn ok: false and error: string to stop execution and show error message to user. Return ok: true to continue execution."}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"params"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"object"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"params.adminUser"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/docs/api/types/Common/interfaces/AdminUser",children:(0,s.jsx)(t.code,{children:"AdminUser"})})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"params.adminforth"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/docs/api/types/Back/interfaces/IAdminForth",children:(0,s.jsx)(t.code,{children:"IAdminForth"})})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"params.extra"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"object"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"params.extra.body"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"any"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"params.extra.cookies"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"Record"}),"<",(0,s.jsx)(t.code,{children:"string"}),", ",(0,s.jsx)(t.code,{children:"string"}),">"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"params.extra.headers"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"Record"}),"<",(0,s.jsx)(t.code,{children:"string"}),", ",(0,s.jsx)(t.code,{children:"string"}),">"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"params.extra.query"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"Record"}),"<",(0,s.jsx)(t.code,{children:"string"}),", ",(0,s.jsx)(t.code,{children:"string"}),">"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"params.query"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"any"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"params.resource"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/docs/api/types/Back/interfaces/AdminForthResource",children:(0,s.jsx)(t.code,{children:"AdminForthResource"})})})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"Promise"}),"<",(0,s.jsx)(t.code,{children:"object"}),">"]}),"\n",(0,s.jsx)(t.h3,{id:"error",children:"error?"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"optional"})," ",(0,s.jsx)(t.strong,{children:"error"}),": ",(0,s.jsx)(t.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"ok",children:"ok"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"ok"}),": ",(0,s.jsx)(t.code,{children:"boolean"})]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>d});var s=r(6540);const n={},c=s.createContext(n);function i(e){const t=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(c.Provider,{value:t},e.children)}}}]);