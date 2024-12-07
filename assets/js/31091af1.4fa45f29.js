"use strict";(self.webpackChunkadminforth=self.webpackChunkadminforth||[]).push([[103],{2862:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var s=i(4848),t=i(8453);const r={},a="Open Signup",l={id:"tutorial/Plugins/open-signup",title:"Open Signup",description:"Open Signup plugin allows users to register in adminforth by them-selfs without admin.",source:"@site/docs/tutorial/05-Plugins/09-open-signup.md",sourceDirName:"tutorial/05-Plugins",slug:"/tutorial/Plugins/open-signup",permalink:"/docs/tutorial/Plugins/open-signup",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Import-Export",permalink:"/docs/tutorial/Plugins/import-export"},next:{title:"Plugin development guide",permalink:"/docs/tutorial/Advanced/plugin-development"}},o={},d=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Email verification",id:"email-verification",level:2}];function u(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"open-signup",children:"Open Signup"}),"\n",(0,s.jsx)(n.p,{children:"Open Signup plugin allows users to register in adminforth by them-selfs without admin.\nThis is useful when you want to allow anyone to sign up and assign some low-level permissions to them."}),"\n",(0,s.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(n.p,{children:"To install the plugin:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm install @adminforth/open-signup\n"})}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.p,{children:"To use the plugin, instantiate to to user resource:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",metastring:'title="./resources/user.ts"',children:"import OpenSignupPlugin from '@adminforth/open-signup';\n"})}),"\n",(0,s.jsx)(n.p,{children:"Like this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",metastring:'title="./resources/user.ts"',children:"new OpenSignupPlugin({\n    emailField: 'email',\n    passwordField: 'password',\n    passwordHashField: 'password_hash',\n    defaultFieldValues: {\n      role: 'user',\n    },\n  }),\n"})}),"\n",(0,s.jsx)(n.p,{children:"Please note that in this mode users will be able to sign up without email verification. For enabling email verification, see below."}),"\n",(0,s.jsx)(n.h2,{id:"email-verification",children:"Email verification"}),"\n",(0,s.jsxs)(n.p,{children:["First, you need to migrate the ",(0,s.jsx)(n.code,{children:"users"})," table in ",(0,s.jsx)(n.code,{children:"./schema.prisma"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:"title='./schema.prisma'",children:"model users {\n  ...\n  //diff-add\n  email_confirmed Boolean? @default(false)\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"And prisma migrate:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npx --yes prisma migrate dev --name add-email-confirmed-to-users\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Also, update the resource configuration in ",(0,s.jsx)(n.code,{children:"./resources/users.ts"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:"title='./resources/users.ts'",children:'...\n//diff-add\nimport EmailAdapterAwsSes from \'@adminforth/email-adapter-aws-ses\';\n\nexport default {\n  dataSource: \'maindb\',\n  table: \'users\',\n  resourceId: \'users\',\n  label: \'Users\',\n  recordLabel: (r) => `\ud83d\udc64 ${r.email}`,\n  columns: [\n    ...\n    //diff-add\n    { name: \'email_confirmed\' }\n  ],\n  ...\n  plugins: [\n    ...\n    new OpenSignupPlugin({\n      emailField: "email",\n      passwordField: "password",\n      passwordHashField: "password_hash",\n      defaultFieldValues: {\n        role: "user",\n      },\n      //diff-add\n      confirmEmails: {\n        //diff-add\n        emailConfirmedField: "email_confirmed",\n        //diff-add\n        sendFrom: "no-reply@devforth.io",\n        //diff-add\n        adapter: new EmailAdapterAwsSes({\n          //diff-add\n          region: "eu-central-1",\n          //diff-add\n          accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,\n          //diff-add\n          secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,\n          //diff-add\n        }),\n      },\n    }),\n    ...\n  ],\n  ...\n}\n'})})]})}function c(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>l});var s=i(6540);const t={},r=s.createContext(t);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);