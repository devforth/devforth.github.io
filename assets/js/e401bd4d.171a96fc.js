"use strict";(self.webpackChunkadminforth=self.webpackChunkadminforth||[]).push([[1339],{5376:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var o=t(4848),i=t(8453);const r={},s="Alerts and confirmations",a={id:"tutorial/Customization/alert",title:"Alerts and confirmations",description:"When you are writing custom components or pages you might need to show alerts or confirmations to the user.",source:"@site/docs/tutorial/03-Customization/07-alert.md",sourceDirName:"tutorial/03-Customization",slug:"/tutorial/Customization/alert",permalink:"/docs/tutorial/Customization/alert",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Custom pages",permalink:"/docs/tutorial/Customization/customPages"},next:{title:"Page Injections",permalink:"/docs/tutorial/Customization/pageInjections"}},d={},c=[{value:"Announcement",id:"announcement",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"alerts-and-confirmations",children:"Alerts and confirmations"}),"\n",(0,o.jsx)(n.p,{children:"When you are writing custom components or pages you might need to show alerts or confirmations to the user."}),"\n",(0,o.jsx)(n.p,{children:"For example if fetch to the API fails you might want to show an error message to the user."}),"\n",(0,o.jsxs)(n.p,{children:["AdminForth has very simple ",(0,o.jsx)(n.a,{href:"/docs/api/types/FrontendAPI/interfaces/FrontendAPIInterface",children:"frontend API"})," for this."]}),"\n",(0,o.jsx)(n.p,{children:"To see an example of alerts, you can call them yourself."}),"\n",(0,o.jsx)(n.p,{children:"Create a Vue component in the custom directory of your project, e.g. Alerts.vue:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",metastring:'title="./custom/Alerts.vue"',children:"<template>\n    <div class=\"buttons\">\n        <button @click=\"callAlert\" class=\"focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800\">Call alert</button>\n        <button @click=\"callConfirmation\" class=\"focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900\">Confirmation</button>\n    </div>\n</template>\n<script setup>\nfunction callAlert(){\n    window.adminforth.alert({message: 'Example alert', variant: 'success'})\n};\nasync function callConfirmation(){\n    const isConfirmed = await window.adminforth.confirm({message: 'Are you sure?', yes: 'Yes', no: 'No'})\n}\n<\/script>\n<style>\n    .buttons {\n        margin-left: 30px;\n        margin-top: 80px;\n    }\n</style>\n"})}),"\n",(0,o.jsx)(n.p,{children:"Now let's add this page to the AdminForth menu:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",metastring:'title="/index.ts"',children:"menu: [\n//diff-add\n{\n//diff-add\n    label: 'Alerts',\n//diff-add\n    icon: 'flowbite:bell-active-alt-solid',\n//diff-add\n    component: '@@/Alerts.vue',\n//diff-add\n    path: '/alerts'\n//diff-add\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Here is how alert looks:\n",(0,o.jsx)(n.img,{alt:"alt text",src:t(3923).A+"",width:"1500",height:"1064"})]}),"\n",(0,o.jsxs)(n.p,{children:["And here is how confirmation looks:\n",(0,o.jsx)(n.img,{alt:"alt text",src:t(8522).A+"",width:"3700",height:"1932"})]}),"\n",(0,o.jsx)(n.h2,{id:"announcement",children:"Announcement"}),"\n",(0,o.jsx)(n.p,{children:"You can notify users of important information by displaying an announcement badge in side bar:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",metastring:'title="/index.ts"',children:'\n  customization: {\n//diff-add\n    announcementBadge: (adminUser: AdminUser) => {\n//diff-add\n      return { \n//diff-add\n        html: \'\u2b50 <a href="https://github.com/devforth/adminforth" style="font-weight: bold; text-decoration: underline" target="_blank">Star us on GitHub</a> to support a project!\',\n//diff-add\n        closable: true,\n//diff-add\n        title: \'Support us for free\',\n//diff-add\n      }\n//diff-add\n    }\n  },\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Here's what the announcement will look like:\n",(0,o.jsx)(n.img,{alt:"alt text",src:t(7064).A+"",width:"3670",height:"1923"})]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8522:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/Alerts and confirmations2-42ca7ef2feed7f83b31aec7a207ca762.png"},7064:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/image-11-74a0092c6655d2b79066bfc9d6d6fed6.png"},3923:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/image-12-8768c6964abb18fa35ac82030468c19f.png"},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var o=t(6540);const i={},r=o.createContext(i);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);