"use strict";(self.webpackChunkadminforth=self.webpackChunkadminforth||[]).push([[2133],{796:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=n(4848),r=n(8453);const i={},s="Import-Export",l={id:"tutorial/Plugins/import-export",title:"Import-Export",description:"Import-Export is a plugin that allows you to import and export data from and to a CSV file.",source:"@site/docs/tutorial/05-Plugins/08-import-export.md",sourceDirName:"tutorial/05-Plugins",slug:"/tutorial/Plugins/import-export",permalink:"/docs/tutorial/Plugins/import-export",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Email password reset",permalink:"/docs/tutorial/Plugins/email-password-reset"},next:{title:"Plugin development guide",permalink:"/docs/tutorial/Advanced/plugin-development"}},a={},p=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2}];function d(t){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"import-export",children:"Import-Export"}),"\n",(0,o.jsx)(e.p,{children:"Import-Export is a plugin that allows you to import and export data from and to a CSV file."}),"\n",(0,o.jsx)(e.p,{children:"This plugin is mostly useful for next use cases:"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"Move data from one environment to another (e.g. from development to production)"}),"\n",(0,o.jsx)(e.li,{children:"Export data for various purposes (e.g. backup, analysis)"}),"\n"]}),"\n",(0,o.jsx)(e.h2,{id:"installation",children:"Installation"}),"\n",(0,o.jsx)(e.p,{children:"To install the plugin:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:"npm install @adminforth/import-export\n"})}),"\n",(0,o.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(e.p,{children:["To use the plugin, you need to import it and call the ",(0,o.jsx)(e.code,{children:"importExport"})," function:"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-typescript",children:"import { importExport } from '@adminforth/import-export';\n"})}),"\n",(0,o.jsxs)(e.p,{children:["Add plugin instantiation to the ",(0,o.jsx)(e.code,{children:"plugins"})," array of resource where you want to use it:"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-typescript",children:"\nnew AdminForth({\n  ...\n  resources: [\n    {\n      resourceId: 'posts',\n      plugins: [\n        importExport({}),\n      ],\n    },\n  ],\n});\n"})})]})}function u(t={}){const{wrapper:e}={...(0,r.R)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(d,{...t})}):d(t)}},8453:(t,e,n)=>{n.d(e,{R:()=>s,x:()=>l});var o=n(6540);const r={},i=o.createContext(r);function s(t){const e=o.useContext(i);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function l(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:s(t.components),o.createElement(i.Provider,{value:e},t.children)}}}]);