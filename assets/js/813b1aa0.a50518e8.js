"use strict";(self.webpackChunkadminforth=self.webpackChunkadminforth||[]).push([[9996],{7276:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var i=d(4848),t=d(8453);const a={},r=void 0,s={id:"tutorial/Plugins/AuditLog",title:"AuditLog",description:"AuditLog plugin allows to limit access to the resource actions (list, show, create, update, delete) based on custom callback.",source:"@site/docs/tutorial/Plugins/AuditLog.md",sourceDirName:"tutorial/Plugins",slug:"/tutorial/Plugins/AuditLog",permalink:"/docs/tutorial/Plugins/AuditLog",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Deploy in Docker",permalink:"/docs/tutorial/deploy"},next:{title:"ForeignInlineList",permalink:"/docs/tutorial/Plugins/ForeignInlineList"}},o={},l=[{value:"Installation",id:"installation",level:2},{value:"Creating table for storing activity data",id:"creating-table-for-storing-activity-data",level:2},{value:"Setting up the resource and dataSource for plugin",id:"setting-up-the-resource-and-datasource-for-plugin",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["AuditLog plugin allows to limit access to the resource actions (list, show, create, update, delete) based on custom callback.\nCallback accepts ",(0,i.jsx)(n.a,{href:"/docs/api/types/AdminForthConfig/type-aliases/AdminUser/",children:"AdminUser"})," which you can use to define access rules."]}),"\n",(0,i.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(n.p,{children:"Plugin is already installed into adminforth, to import:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import AuditLogPlugin from 'adminforth/plugins/AuditLogPlugin';\n"})}),"\n",(0,i.jsx)(n.p,{children:"If yu are using pure Node without TypeScript, you can use the following code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import AuditLogPlugin from 'adminforth/dist/plugins/AuditLogPlugin/index.ts';\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/tutorial/gettingStarted",children:"Getting Started"})," will be used as base for this example."]}),"\n",(0,i.jsx)(n.h2,{id:"creating-table-for-storing-activity-data",children:"Creating table for storing activity data"}),"\n",(0,i.jsx)(n.p,{children:"For the first, to track records changes, we need to set up the database and table with certain fields inside where tracked data will be stored."}),"\n",(0,i.jsxs)(n.p,{children:["First of all you should create this table in your own database. In our example we will continue using SQLite database we created\nin ",(0,i.jsx)(n.a,{href:"/docs/tutorial/gettingStarted",children:"Getting Started"}),". Just add the following code to the end of ",(0,i.jsx)(n.code,{children:"initDataBase"})," function in ",(0,i.jsx)(n.code,{children:"index.ts"})," file:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:"title='./index.ts'",children:"async function initDataBase() {\n  ...\n//diff-add\n  const auditTableExists = db.prepare(`SELECT name FROM sqlite_master WHERE type='table' AND name='audit_logs';`).get();\n//diff-add\n  if (!auditTableExists) {\n//diff-add\n    await db.prepare(`\n//diff-add\n      CREATE TABLE audit_logs (\n//diff-add\n        id uuid NOT NULL,  -- identifier of applied change record \n//diff-add\n        created_at timestamp without time zone, -- timestamp of applied change\n//diff-add\n        resource_id varchar(255), -- identifier of resource where change were applied\n//diff-add\n        user_id uuid, -- identifier of user who made the changes\n//diff-add\n        \"action\" varchar(255), -- type of change (create, edit, delete)\n//diff-add\n        diff text, -- delta betwen before/after versions\n//diff-add\n        record_id varchar, -- identifier of record that been changed\n//diff-add\n        PRIMARY KEY(id)\n//diff-add\n      );`).run();\n//diff-add\n  }\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"Also to make this code start"}),"\n",(0,i.jsx)(n.h2,{id:"setting-up-the-resource-and-datasource-for-plugin",children:"Setting up the resource and dataSource for plugin"}),"\n",(0,i.jsx)(n.p,{children:'Logger sets up for all the resources by default. But you can exclude unwanted resources with option "excludeResourceIds". In this example, we\'ll exclude resource "users" from logging.'}),"\n",(0,i.jsx)(n.p,{children:"Also, it excludes itself to avoid infinte logging loop."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:"title='./index.ts'",children:"  resources: [\n  ...\n//diff-add\n  {\n//diff-add\n      dataSource: 'maindb', \n//diff-add\n      table: 'audit_logs',\n//diff-add\n      columns: [\n//diff-add\n        { name: 'id', primaryKey: true, required: false, fillOnCreate: ({initialRecord}: any) => uuid() },\n//diff-add\n        { name: 'created_at', required: false },\n//diff-add\n        { name: 'resource_id', required: false },\n//diff-add\n        { name: 'user_id', required: false },\n//diff-add\n        { name: 'action', required: false },\n//diff-add\n        { name: 'diff', required: false },\n//diff-add\n        { name: 'record_id', required: false },\n//diff-add\n      ],\n//diff-add\n      options: {\n//diff-add\n        allowedActions: {\n//diff-add\n            edit: false,\n//diff-add\n            delete: false,\n//diff-add\n        }\n//diff-add\n      },\n//diff-add\n      plugins: [\n//diff-add\n        new AuditLogPlugin({\n//diff-add\n            // if you want to exclude some resources from logging\n//diff-add\n            //excludeResourceIds: ['users'],\n//diff-add\n            resourceColumns: {\n//diff-add\n                resourceIdColumnName: 'resource_id',\n//diff-add\n                resourceActionColumnName: 'action',\n//diff-add\n                resourceDataColumnName: 'diff',\n//diff-add\n                resourceUserIdColumnName: 'user_id',\n//diff-add\n                resourceRecordIdColumnName: 'record_id',\n//diff-add\n                resourceCreatedColumnName: 'created_at'\n//diff-add\n            }\n//diff-add\n        }),\n//diff-add\n      ],\n//diff-add\n    }\n  ]\n"})}),"\n",(0,i.jsx)(n.p,{children:"Also, we need to add it to menu:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"menu: [\n  ...\n//diff-add\n  {\n//diff-add\n      label: 'Audit Logs',\n//diff-add\n      icon: 'flowbite:search-outline',\n//diff-add\n      resourceId: 'audit_logs',\n//diff-add\n  }\n]\n"})}),"\n",(0,i.jsx)(n.p,{children:"That's it! Now you can see the logs in the table"}),"\n",(0,i.jsxs)(n.p,{children:['< replace this screenshot, make same but "Audit Logs" should be in menu >\n',(0,i.jsx)(n.img,{alt:"alt text",src:d(6746).A+"",width:"3811",height:"1251"})]}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"/docs/api/plugins/AuditLogPlugin/types/type-aliases/PluginOptions",children:"API Reference"})," for more all options."]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},6746:(e,n,d)=>{d.d(n,{A:()=>i});const i=d.p+"assets/images/localhost_3500_resource_audit_logs-8996765a6d534b48c3e52b9949e4cc89.png"},8453:(e,n,d)=>{d.d(n,{R:()=>r,x:()=>s});var i=d(6540);const t={},a=i.createContext(t);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);