"use strict";(self.webpackChunkadminforth=self.webpackChunkadminforth||[]).push([[3709],{7253:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var s=o(4848),t=o(8453);const a={},r="Glossary",i={id:"Glossary",title:"Glossary",description:"dataSource",source:"@site/docs/Glossary.md",sourceDirName:".",slug:"/Glossary",permalink:"/docs/Glossary",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/docs/Getting Started"},next:{title:"AccessControl",permalink:"/docs/Plugins/AccessControl"}},c={},l=[{value:"dataSource",id:"datasource",level:2},{value:"resource",id:"resource",level:2},{value:"column",id:"column",level:2},{value:"record",id:"record",level:2},{value:"adminUser",id:"adminuser",level:2},{value:"hook",id:"hook",level:2},{value:"component",id:"component",level:2},{value:"field",id:"field",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"glossary",children:"Glossary"}),"\n",(0,s.jsx)(n.h2,{id:"datasource",children:"dataSource"}),"\n",(0,s.jsxs)(n.p,{children:["A DataSource is a connection to one database. Datasources has id for references from resources and URL which follows the standard URI format. For example ",(0,s.jsx)(n.code,{children:"mysql://user:password@localhost:3306/database"}),".\nIt used to:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Discover the columns in the database"}),"\n",(0,s.jsx)(n.li,{children:"Make queries to get the list and show records"}),"\n",(0,s.jsx)(n.li,{children:"Make queries to modify data"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"There might be several datasources in the system for various databases e.g. One 2 Mongo DBs and 1 Postgres DB."}),"\n",(0,s.jsx)(n.h2,{id:"resource",children:"resource"}),"\n",(0,s.jsxs)(n.p,{children:["A Resource is a representation of a table or collection in AdminForth. One resource is one table in the database.\nIt has a ",(0,s.jsx)(n.code,{children:"name"})," which should match name in database, a datasource id, and a list of columns.\nAlso it has various customization options."]}),"\n",(0,s.jsx)(n.h2,{id:"column",children:"column"}),"\n",(0,s.jsxs)(n.p,{children:["A Column is a representation of a column in a table. It has a ",(0,s.jsx)(n.code,{children:"name"})," which should be equal to name in database and various configuration options."]}),"\n",(0,s.jsx)(n.h2,{id:"record",children:"record"}),"\n",(0,s.jsx)(n.p,{children:"A record is a row in a relational database table. Or Document in document database table."}),"\n",(0,s.jsx)(n.h2,{id:"adminuser",children:"adminUser"}),"\n",(0,s.jsx)(n.p,{children:"Object which represents a user who logged in to the AdminForth"}),"\n",(0,s.jsx)(n.h2,{id:"hook",children:"hook"}),"\n",(0,s.jsx)(n.p,{children:"Hook is a optional async function which allows to inject in backend logic before executing the datasource query or after it"}),"\n",(0,s.jsx)(n.h2,{id:"component",children:"component"}),"\n",(0,s.jsx)(n.p,{children:"Component is a Vue component which is used to add or modify UI elements in AdminForth. It can be used as a full custom page with a link in menu or as a part of the existing AdminForth page"}),"\n",(0,s.jsx)(n.h2,{id:"field",children:"field"}),"\n",(0,s.jsxs)(n.p,{children:["Name of the column. To reduce glossary, in future we might rename it to ",(0,s.jsx)(n.code,{children:"columnName"})]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>i});var s=o(6540);const t={},a=s.createContext(t);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);