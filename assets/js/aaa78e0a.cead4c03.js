"use strict";(self.webpackChunkadminforth=self.webpackChunkadminforth||[]).push([[2889],{9086:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var t=i(4848),r=i(8453);const s={},a=void 0,d={id:"tutorial/Plugins/AuditLog",title:"AuditLog",description:"AuditLog plugin allows to log all changes in the resources done from the admin panel.",source:"@site/docs/tutorial/05-Plugins/01-AuditLog.md",sourceDirName:"tutorial/05-Plugins",slug:"/tutorial/Plugins/AuditLog",permalink:"/docs/tutorial/Plugins/AuditLog",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Deploy in Docker",permalink:"/docs/tutorial/deploy"},next:{title:"Two-Factor Authentication Plugin",permalink:"/docs/tutorial/Plugins/TwoFactorsAuth"}},o={},l=[{value:"Installation",id:"installation",level:2},{value:"Creating table for storing activity data",id:"creating-table-for-storing-activity-data",level:2},{value:"Setting up the resource and dataSource for plugin",id:"setting-up-the-resource-and-datasource-for-plugin",level:2},{value:"Logging custom actions",id:"logging-custom-actions",level:2},{value:"Logging client ip address",id:"logging-client-ip-address",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"AuditLog plugin allows to log all changes in the resources done from the admin panel.\nIt will allow you to figure out who and when made changes in the data.\nRequires separate table in the database to store logs."}),"\n",(0,t.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm i @adminforth/audit-log --save\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Create ",(0,t.jsx)(n.code,{children:"auditLogs.ts"})," in ",(0,t.jsx)(n.code,{children:"resources"})," folder:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="./resources/auditLogs.ts"',children:"import AuditLogPlugin from '@adminforth/audit-log';\nimport { AdminForthDataTypes } from 'adminforth'\nimport { v4 as uuid } from 'uuid';\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/tutorial/gettingStarted",children:"Getting Started"})," will be used as base for this example."]}),"\n",(0,t.jsx)(n.h2,{id:"creating-table-for-storing-activity-data",children:"Creating table for storing activity data"}),"\n",(0,t.jsx)(n.p,{children:"For the first, to track records changes, we need to set up the database and table with certain fields inside where tracked data will be stored."}),"\n",(0,t.jsxs)(n.p,{children:["First of all you should create this table in your own database ",(0,t.jsx)(n.code,{children:"./schema.prisma"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:"title='./schema.prisma'",children:"model audit_logs {\n  id                String      @id\n  created_at        DateTime  /// timestamp of applied change\n  resource_id       String    /// identifier of resource where change were applied\n  user_id           String    /// identifier of user who made the changes\n  action            String    /// type of change (create, edit, delete)\n  diff              String?   /// delta betwen before/after versions\n  record_id         String?   /// identifier of record that been changed\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["And ",(0,t.jsx)(n.code,{children:"prisma migrate"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npx --yes prisma migrate dev --name add-audit-logs\n"})}),"\n",(0,t.jsx)(n.p,{children:"Also to make this code start"}),"\n",(0,t.jsx)(n.h2,{id:"setting-up-the-resource-and-datasource-for-plugin",children:"Setting up the resource and dataSource for plugin"}),"\n",(0,t.jsx)(n.p,{children:'Logger sets up for all the resources by default. But you can exclude unwanted resources with option "excludeResourceIds". In this example, we\'ll exclude resource "users" from logging.'}),"\n",(0,t.jsx)(n.p,{children:"Also, it excludes itself to avoid infinte logging loop."}),"\n",(0,t.jsxs)(n.p,{children:["Add this code in ",(0,t.jsx)(n.code,{children:"auditLogs.ts"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:"title='./resources/auditLogs.ts'",children:"  export default {\n    dataSource: 'maindb', \n    table: 'audit_logs',\n    columns: [\n      { name: 'id', primaryKey: true, required: false, fillOnCreate: ({initialRecord}: any) => uuid(), showIn: ['show'] },\n      { name: 'created_at', required: false },\n      { name: 'resource_id', required: false },\n      { name: 'user_id', required: false, \n          foreignResource: {\n          resourceId: 'users',\n        } },\n      { name: 'action', required: false },\n      { name: 'diff', required: false, type: AdminForthDataTypes.JSON, showIn: ['show'] },\n      { name: 'record_id', required: false },\n    ],\n    options: {\n      allowedActions: {\n        edit: false,\n        delete: false,\n        create: false\n      }\n    },\n    plugins: [\n      new AuditLogPlugin({\n        // if you want to exclude some resources from logging\n        //excludeResourceIds: ['users'],\n        resourceColumns: {\n          resourceIdColumnName: 'resource_id',\n          resourceActionColumnName: 'action',\n          resourceDataColumnName: 'diff',\n          resourceUserIdColumnName: 'user_id',\n          resourceRecordIdColumnName: 'record_id',\n          resourceCreatedColumnName: 'created_at'\n        }\n      }),\n    ],\n  }\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Then you need to import ",(0,t.jsx)(n.code,{children:"./resources/auditLogs"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="./index.ts"',children:'//diff-add\nimport auditLogsResource from "./resources/auditLogs"\n\n\n... new AdminForth({\n  dataSources: [...],\n    ...\n  resources: [\n    apartmentsResource,\n    usersResource,\n//diff-add\n    auditLogsResource\n  ],\n    ...\n]\n'})}),"\n",(0,t.jsx)(n.p,{children:"Also, we need to add it to menu:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"menu: [\n  ...\n//diff-add\n  {\n//diff-add\n      label: 'Audit Logs',\n//diff-add\n      icon: 'flowbite:search-outline',\n//diff-add\n      resourceId: 'audit_logs',\n//diff-add\n  }\n]\n"})}),"\n",(0,t.jsx)(n.p,{children:"That's it! Now you can see the logs in the table"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"alt text",src:i(3290).A+"",width:"3700",height:"1932"})}),"\n",(0,t.jsx)(n.h2,{id:"logging-custom-actions",children:"Logging custom actions"}),"\n",(0,t.jsxs)(n.p,{children:["Audit log is able to catch only standard actions like ",(0,t.jsx)(n.code,{children:"create"}),", ",(0,t.jsx)(n.code,{children:"update"}),", ",(0,t.jsx)(n.code,{children:"delete"})," or custom bulk actions."]}),"\n",(0,t.jsxs)(n.p,{children:["If you have a custom, self coded actions in your API, you can log them by calling ",(0,t.jsx)(n.code,{children:"logCustomAction"})," method of ",(0,t.jsx)(n.code,{children:"AuditLogPlugin"})," instance:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="./resources/auditLogs.ts"',children:"\napp.get(`${ADMIN_BASE_URL}/api/dashboard/`,\n  admin.express.authorize(\n    async (req, res) => {\n\n      admin.getPluginByClassName<AuditLogPlugin>('AuditLogPlugin').logCustomAction(\n        'aparts',\n        null, // recordId can be null if not applicable\n        'visitedDashboard',\n        { dashboard: 'main' },\n        req.adminUser,\n        req.headers //required if you want log client ip\n      )\n\n      ....\n\n"})}),"\n",(0,t.jsx)(n.h2,{id:"logging-client-ip-address",children:"Logging client ip address"}),"\n",(0,t.jsx)(n.p,{children:"Audit log can also log the client's IP address if needed."}),"\n",(0,t.jsxs)(n.p,{children:["First, you need to migrate the ",(0,t.jsx)(n.code,{children:"audit_logs"})," table in ",(0,t.jsx)(n.code,{children:"./schema.prisma"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:"title='./schema.prisma'",children:"model audit_logs {\n  id                String      @id\n  created_at        DateTime  /// timestamp of applied change\n  resource_id       String    /// identifier of resource where change were applied\n  user_id           String    /// identifier of user who made the changes\n  action            String    /// type of change (create, edit, delete)\n  diff              String?   /// delta betwen before/after versions\n  record_id         String?   /// identifier of record that been changed\n  //diff-add\n  ip_address        STRING?   /// client ip address\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["And ",(0,t.jsx)(n.code,{children:"prisma migrate"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npx --yes prisma migrate dev --name add-ip-address-to-audit-logs\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Also, update the resource configuration in ",(0,t.jsx)(n.code,{children:"./resources/auditLogs.ts"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:"title='./resources/auditLogs.ts'",children:"  export default {\n    dataSource: 'maindb', \n    table: 'audit_logs',\n    columns: [\n      ...\n      { name: 'action', required: false },\n      { name: 'diff', required: false, type: AdminForthDataTypes.JSON, showIn: ['show'] },\n      { name: 'record_id', required: false },\n      //diff-add\n      { name: 'ip_address', required: false },\n    ],\n    ...\n    plugins: [\n      new AuditLogPlugin({\n        resourceColumns: {\n          resourceIdColumnName: 'resource_id',\n          resourceActionColumnName: 'action',\n          resourceDataColumnName: 'diff',\n          resourceUserIdColumnName: 'user_id',\n          resourceRecordIdColumnName: 'record_id',\n          resourceCreatedColumnName: 'created_at'\n          //diff-add\n          resourceIpColumnName: \"ip_address\",\n        }\n      }),\n    ],\n  }\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},3290:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/AuditLog-3c39146fa0794aaa07158fc2eebfc648.png"},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>d});var t=i(6540);const r={},s=t.createContext(r);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);