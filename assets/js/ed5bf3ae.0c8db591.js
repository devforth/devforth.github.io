"use strict";(self.webpackChunkadminforth=self.webpackChunkadminforth||[]).push([[1122],{7937:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var o=s(4848),t=s(8453);const r={},i="Limiting actions access",a={id:"tutorial/Customization/limitingAccess",title:"Limiting actions access",description:"As you might have noticed in diagrams from adminforth hooks section of this tutorial, AdminForth checks options.allowedActions before executing any action. In this section we will show real-code examples of how to limit access to actions based on user role or record values.",source:"@site/docs/tutorial/03-Customization/05-limitingAccess.md",sourceDirName:"tutorial/03-Customization",slug:"/tutorial/Customization/limitingAccess",permalink:"/docs/tutorial/Customization/limitingAccess",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Hooks",permalink:"/docs/tutorial/Customization/hooks"},next:{title:"Custom pages",permalink:"/docs/tutorial/Customization/customPages"}},d={},c=[{value:"Statically disable some action",id:"statically-disable-some-action",level:2},{value:"Disable some action based on logged in user record or role",id:"disable-some-action-based-on-logged-in-user-record-or-role",level:2},{value:"Reuse the same callback for multiple actions",id:"reuse-the-same-callback-for-multiple-actions",level:2},{value:"Customizing the access control based on resource values",id:"customizing-the-access-control-based-on-resource-values",level:2},{value:"Disable editing of the resource based on owner",id:"disable-editing-of-the-resource-based-on-owner",level:3},{value:"Disable deletion of the resource based on owner",id:"disable-deletion-of-the-resource-based-on-owner",level:3},{value:"Disable showing the resource based on owner",id:"disable-showing-the-resource-based-on-owner",level:3}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"limiting-actions-access",children:"Limiting actions access"}),"\n",(0,o.jsxs)(n.p,{children:["As you might have noticed in diagrams from ",(0,o.jsx)(n.a,{href:"/docs/tutorial/Customization/hooks",children:"adminforth hooks"})," section of this tutorial, AdminForth checks ",(0,o.jsx)(n.code,{children:"options.allowedActions"})," before executing any action. In this section we will show real-code examples of how to limit access to actions based on user role or record values."]}),"\n",(0,o.jsxs)(n.p,{children:["Before we start it is worth to mention that callbacks or scalars defined in ",(0,o.jsx)(n.code,{children:"allowedActions"}),' are called/parsed not only before actual request but also before displaying buttons in the UI. So first time, when frontend loads any page of resource, it "calls" ',(0,o.jsx)(n.code,{children:"allowedActions"})," to understand whether user has access to each function, and e.g. if it says that user can't delete record, AdminForth will not show delete icon in the UI:"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Resource any page request",src:s(8675).A+"",width:"2715",height:"2301"})}),"\n",(0,o.jsx)(n.p,{children:"As you can see allowedAction callbacks are called in parallel in async manner. However it is important to keep them fast and not to make any slow operations in them, to keep UI responsive."}),"\n",(0,o.jsx)(n.h2,{id:"statically-disable-some-action",children:"Statically disable some action"}),"\n",(0,o.jsxs)(n.p,{children:["You can use ",(0,o.jsx)(n.code,{children:"options.allowedActions"})," on resource to limit access to the resource actions (list, show, create, edit, delete)."]}),"\n",(0,o.jsx)(n.p,{children:"If you want to disable deletion of the resource records for all users:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",metastring:'title="./resources/users.ts"',children:"{\n  ...\n  resourceId: 'users',\n  ...\n//diff-add\n  options: {\n//diff-add\n    allowedActions: {\n//diff-add\n      delete: false\n//diff-add\n    }\n//diff-add\n  }\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"disable-some-action-based-on-logged-in-user-record-or-role",children:"Disable some action based on logged in user record or role"}),"\n",(0,o.jsxs)(n.p,{children:["If you want to disable deletion of apartments for all users apart from users with role ",(0,o.jsx)(n.code,{children:"superadmin"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",metastring:"title='./resources/apartments.ts'",children:"//diff-add\nimport type { AdminUser } from  'adminforth';\n\n{\n  ...\n  resourceId: 'aparts',\n  ...\n  options: {\n//diff-add\n    allowedActions: {\n//diff-add\n      delete: async ({ adminUser }: { adminUser: AdminUser }): Promise<boolean> => {\n//diff-add\n        return adminUser.dbUser.role === 'superadmin';\n//diff-add\n      }\n//diff-add\n    }\n    ...\n  }\n}\n"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"\u261d\ufe0f instead of reading role from user you can check permission using complex ACL/RBAC models with permissions stored in the database.\nHowever we recommend you to keep in mind that allowedActions callback is called on every request related to resource, so it should be fast.\nSo try to minimize requests to database as much as possible."}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"reuse-the-same-callback-for-multiple-actions",children:"Reuse the same callback for multiple actions"}),"\n",(0,o.jsxs)(n.p,{children:["Let's disable creating and editing of new users for all users apart from users with role ",(0,o.jsx)(n.code,{children:"superadmin"}),", and at the same time disable deletion for all users:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",metastring:'title="./resources/users.ts"',children:"//diff-add\nimport type { AdminUser } from  'adminforth';\n\n//diff-add\nasync function canModifyUsers({ adminUser }: { adminUser: AdminUser }): Promise<boolean> {\n//diff-add\n  return adminUser.dbUser.role === 'superadmin';\n//diff-add\n}\n\n{\n  ...\n  resourceId: 'users',\n  ...\n  options: {\n    allowedActions: {\n//diff-add\n      create: canModifyUsers,\n//diff-add\n      edit: canModifyUsers,\n      delete: false\n    }\n    ...\n  }\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"customizing-the-access-control-based-on-resource-values",children:"Customizing the access control based on resource values"}),"\n",(0,o.jsx)(n.p,{children:"In more advanced cases you might need to check access based on record value.\nGenerally it happens in multi-tenant applications where you need to check if user has access to the record based on some field value."}),"\n",(0,o.jsx)(n.h3,{id:"disable-editing-of-the-resource-based-on-owner",children:"Disable editing of the resource based on owner"}),"\n",(0,o.jsx)(n.p,{children:'For example, allow to edit apartments only if user is a realtor of the apartment (defined as realtor_id), otherwise return error\n"You are not assigned to this apartment and can\'t edit it":'}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",metastring:'title="./resources/apartments.ts"',children:"import type { AdminUser } from  'adminforth';\nimport { ActionCheckSource } from  'adminforth';\n\n\nasync function canModifyApart({ adminUser, source, meta }: { adminUser: AdminUser, meta: any, source: ActionCheckSource }): Promise<boolean | string> {\n  if (source === ActionCheckSource.DisplayButtons) {\n    // if check is done for displaying button - we show button to everyone\n    return true; \n  }\n  const { oldRecord, newRecord } = meta;\n  if (oldRecord.realtor_id !== adminUser.dbUser.id) {\n    return \"You are not assigned to this apartment and can't edit it\";\n  }\n  if (newRecord.realtor_id !== oldRecord.realtor_id) {\n    return \"You can't change the owner of the apartment\";\n  }\n  return true;\n}\n\n\n{\n  ...\n  resourceId: 'aparts',\n  ...\n  options: {\n    allowedActions: {\n      edit: canModifyApart,\n    }\n    ...\n  }\n}\n"})}),"\n",(0,o.jsx)(n.h3,{id:"disable-deletion-of-the-resource-based-on-owner",children:"Disable deletion of the resource based on owner"}),"\n",(0,o.jsx)(n.p,{children:"If we need to allow only owner to delete the apartment:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",metastring:'title="./resources/apartments.ts"',children:"import type { AdminUser } from  'adminforth';\n\nasync function canDeleteApart({ adminUser, meta }: { adminUser: AdminUser, meta: any }): Promise<boolean | string> {\n  const { record } = meta;\n  if (record.realtor_id !== adminUser.dbUser.id) {\n    return \"You are not assigned to this apartment and can't delete it\";\n  }\n  return true;\n}\n\n{\n  ...\n  resourceId: 'aparts',\n  ...\n  options: {\n    allowedActions: {\n      delete: canDeleteApart,\n    }\n    ...\n  }\n}\n"})}),"\n",(0,o.jsx)(n.h3,{id:"disable-showing-the-resource-based-on-owner",children:"Disable showing the resource based on owner"}),"\n",(0,o.jsxs)(n.p,{children:["This one might sound pretty tricky. If Update and Delete callbacks in allowedActions were called with ",(0,o.jsx)(n.code,{children:"meta"})," object which already had a records values,\nhere we need to fetch the record from the database to check if user is the owner of the record.\nThis is done because of architecture of AdminForth: ",(0,o.jsx)(n.code,{children:"show"})," callback is called before action ",(0,o.jsx)(n.code,{children:"list"})," or ",(0,o.jsx)(n.code,{children:"show"})," hooks and requests."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",metastring:'title="./resources/apartments.ts"',children:" allowedActions: {\n    ...\n    show: async ({adminUser, meta, source, adminforth}: any) => {\n      if (source === 'showRequest' || source === 'editLoadRequest') {\n        const record = await adminforth.resource('aparts').get(Filters.EQ('id', meta.pk));\n        return record.realtor_id === adminUser.dbUser.id;\n      }\n      return true;\n    },\n }\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Please note that show callback is called not only when user visits show page (source will be ",(0,o.jsx)(n.code,{children:"'showRequest'"})," during this check) but also\nwhen user visits edit page (source will be ",(0,o.jsx)(n.code,{children:"'editLoadRequest'"}),")."]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8675:(e,n,s)=>{s.d(n,{A:()=>o});const o=s.p+"assets/images/image-21-f555446d6d7cc39a3389e7623fc3cfa2.png"},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>a});var o=s(6540);const t={},r=o.createContext(t);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);