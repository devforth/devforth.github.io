"use strict";(self.webpackChunkadminforth=self.webpackChunkadminforth||[]).push([[8513],{846:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var o=t(4848),i=t(8453);const s={},a="Websocket",r={id:"tutorial/Customization/websocket",title:"Websocket",description:"AdminForth provide own build-in websocket interface which allows to stream some data to frontend from backend.",source:"@site/docs/tutorial/03-Customization/15-websocket.md",sourceDirName:"tutorial/03-Customization",slug:"/tutorial/Customization/websocket",permalink:"/docs/tutorial/Customization/websocket",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:15,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AdminForth Components Library",permalink:"/docs/tutorial/Customization/afcl"},next:{title:"Deploy in Docker",permalink:"/docs/tutorial/deploy"}},d={},c=[{value:"Usage example",id:"usage-example",level:2},{value:"Initial loading",id:"initial-loading",level:3},{value:"Subscribing authorization",id:"subscribing-authorization",level:3},{value:"Publish authorization",id:"publish-authorization",level:3}];function l(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"websocket",children:"Websocket"}),"\n",(0,o.jsx)(n.p,{children:"AdminForth provide own build-in websocket interface which allows to stream some data to frontend from backend."}),"\n",(0,o.jsx)(n.p,{children:"In two words, to subscribe to a topic from any frontend component you need to do next"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"import websocket from '@/websocket';\n\nwebsocket.subscribe('/topic-name', (data) => {\n  // this callback called when we receive publish in topic from the websocket\n  console.log(data);\n});\n"})}),"\n",(0,o.jsx)(n.p,{children:"On server you can publish data to the topic by calling"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"admin.websocket.publish('/topic-name', {some: 'data'});\n"})}),"\n",(0,o.jsx)(n.p,{children:"Let's consider a real-world example."}),"\n",(0,o.jsx)(n.h2,{id:"usage-example",children:"Usage example"}),"\n",(0,o.jsx)(n.p,{children:"Let's say we want to show realtor sum of all his properties in the AdminForth in header."}),"\n",(0,o.jsxs)(n.p,{children:["Create a component ",(0,o.jsx)(n.code,{children:"PropertyCost.vue"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",metastring:'title="./custom/PropertyCost.vue"',children:"<template>\n  <div v-show=\"totalCost !== null\" \n    class=\"flex items-center justify-center w-full h-full bg-gray-100 text-gray-800 text-xs font-medium p-1 rounded \n      dark:bg-gray-700 dark:text-gray-300\">\n      <Tooltip>\n        <template #tooltip>\n          <div class=\"text-sm\">Your total property cost</div>\n        </template>\n        <IconDollarOutline class=\"text-2xl opacity-50\" />\n        <div class=\"text-2xl text-gray-900 dark:text-white\"> {{totalCost}}</div>\n      </Tooltip>\n  </div>\n</template>\n\n<script setup lang=\"ts\">\nimport { onMounted, Ref } from 'vue';\nimport { ref } from 'vue';\nimport websocket from '@/websocket';\nimport { IconDollarOutline } from '@iconify-prerendered/vue-flowbite';\nimport { Tooltip } from '@/afcl';\n\nimport type { AdminUser } from '@/types/Common';\n\nconst props = defineProps({\n  adminUser: AdminUser,\n});\n\nconst totalCost: Ref<number|null> = ref(null);\n\nonMounted(() => {\n  websocket.subscribe(`/property-cost/${props.adminUser!.pk}`, (data: any) => {\n    // this callback called when we receive publish in topic from the websocket\n    totalCost.value = data.totalCost;\n  });\n});\n\nonOnUnmounted(() => {\n  // will be called on logout\n  websocket.unsubscribeAll();\n});\n\n<\/script>\n"})}),"\n",(0,o.jsx)(n.p,{children:"Add this component into the header of the AdminForth:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",metastring:'title="./index.ts"',children:"...\nconst admin = new AdminForth({\n  ...\n  customization: {\n    ...\n//diff-add      \n    globalInjections: {\n//diff-add\n      header: '@@/PropertyCost.vue',\n//diff-add\n    }\n  }\n});\n"})}),"\n",(0,o.jsx)(n.p,{children:"Now, in after-save hook on apartments we will calculate the sum price of all apartments for the realtor and send it to the frontend."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",metastring:'title="./resources/apartment.ts"',children:"hooks: {\n//diff-add\n  edit: {\n//diff-add\n    afterSave: async ({ record, adminUser, resource, adminforth }) => {\n//diff-add\n      //  if realtor id is set, recalculate total cost of all apartments\n//diff-add\n      if (record.realtor_id) {\n//diff-add\n        const totalCost = (await adminforth.resource('aparts').list(Filters.EQ('realtor_id', record.realtor_id)))\n//diff-add\n          .map((r) => r.price).reduce((a, b) => a + b, 0);\n//diff-add\n        adminforth.websocket.publish(`/property-cost/${record.realtor_id}`, { type: 'message', totalCost });\n//diff-add\n      }\n//diff-add\n      return { ok: true }\n//diff-add\n    }\n//diff-add\n  },\n}\n"})}),"\n",(0,o.jsx)(n.h3,{id:"initial-loading",children:"Initial loading"}),"\n",(0,o.jsx)(n.p,{children:"If you will try to load the page now it would not show up initial cost, but should show it once you re-save apartment."}),"\n",(0,o.jsx)(n.p,{children:"To fix this we can do 2 ways:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Create a dedicated API to load initial cost on PropertyCost component mount"}),"\n",(0,o.jsxs)(n.li,{children:["Catch connection to websocket, parse ",(0,o.jsx)(n.code,{children:"realtor_id"})," from the topic and stream initial cost"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Second way is more elegant and we will use it."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",metastring:'title="./index.ts"',children:"...\n\nconst admin = new AdminForth({\n  ...\n  auth: {\n//diff-add\n    websocketSubscribed: async (topic, adminUser) => {\n//diff-add\n      const [subject, param] = /^\\/(.+?)\\/(.+)/.exec(topic)!.slice(1);\n//diff-add\n      if (subject === 'property-cost') {\n//diff-add\n        const userId = param;\n//diff-add\n        const totalCost = (await admin.resource('aparts').list(Filters.EQ('realtor_id', userId)))\n//diff-add\n          .map((r) => r.price).reduce((a, b) => a + b, 0);\n//diff-add\n        admin.websocket.publish(topic, { type: 'message', totalCost });\n//diff-add\n      }\n//diff-add\n    }\n  }\n  ...\n});\n\n"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["\ud83d\udc46 Please not that ",(0,o.jsx)(n.code,{children:"adminUser"})," might be undefined in ",(0,o.jsx)(n.code,{children:"websocketSubscribed"})," callback if unauthorized client subscribes to ",(0,o.jsx)(n.code,{children:"/opentopic/"})," (see authorization section below)"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"subscribing-authorization",children:"Subscribing authorization"}),"\n",(0,o.jsx)(n.p,{children:"Currently, any user can subscribe to the any topic and receive published messages."}),"\n",(0,o.jsx)(n.p,{children:"However you can prevent some users from subscribing to some topics and prevent them to get data streamed to the topic. Or vise-versa you can prevent all users and allow only some users to subscribe to the topic."}),"\n",(0,o.jsxs)(n.p,{children:["In our example though topic already has user id in it, we should explicitly check that user can subscribe to his own topic using ",(0,o.jsx)(n.code,{children:"config.auth.websocketTopicAuth"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",metastring:'title="./index.ts"',children:"...\n\nconst admin = new AdminForth({\n  ...\n  auth: {\n//diff-add\n    websocketTopicAuth: async (topic: string, adminUser: AdminUser) => {\n//diff-add\n      if (!adminUser) {\n//diff-add\n        // don't allow anonymous users to subscribe\n//diff-add\n        return false;\n      }\n//diff-add\n      const [subject, param] = /^\\/(.+?)\\/(.+)/.exec(topic)!.slice(1);\n//diff-add\n      console.log(`Websocket user ${adminUser.username} tries to subscribe to topic ${subject} with param ${param}`);\n//diff-add\n      if (subject === 'property-cost') {\n//diff-add\n        return param === adminUser.dbUser.id;\n//diff-add\n      }\n//diff-add\n      // any other events are not allowed\n//diff-add\n      return false;\n//diff-add\n    },\n    websocketSubscribed:...\n  }\n  ...\n});\n  \n"})}),"\n",(0,o.jsxs)(n.p,{children:["There is still method to bypass this websocketTopicAuth check by using special topic ",(0,o.jsx)(n.code,{children:"/opentopic/"}),". In other words if topic starts with ",(0,o.jsx)(n.code,{children:"/opentopic/"})," it will be allowed to subscribe by any user bypassing ",(0,o.jsx)(n.code,{children:"websocketTopicAuth"})," call at all.\nInternally AdminForth uses ",(0,o.jsx)(n.code,{children:"/opentopic/"})," for menu badges and possibly for other internal purposes."]}),"\n",(0,o.jsx)(n.h3,{id:"publish-authorization",children:"Publish authorization"}),"\n",(0,o.jsx)(n.p,{children:"Best way to secure the data published to websoket is use websocketTopicAuth method. It will be called once on subscription and if it will not allow access it will completely prevent user from subscribing to the topic."}),"\n",(0,o.jsxs)(n.p,{children:["However you can move auth check to publish call. It has a third parameter of publish function. Imagine you rewrite ",(0,o.jsx)(n.code,{children:"websocketTopicAuth"})," to allow all users to subscribe to any topic:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",metastring:'title="./index.ts"',children:"...\nwebsocketTopicAuth: async (topic: string, adminUser: AdminUser) => {\n  return true;\n},\n...\n"})}),"\n",(0,o.jsxs)(n.p,{children:["(Or you are using ",(0,o.jsx)(n.code,{children:"/opentopic/"}),")"]}),"\n",(0,o.jsx)(n.p,{children:"Now you can move the check to publish call:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",metastring:'title="./index.ts"',children:"\nadmin.websocket.publish(topic, { type: 'message', totalCost }, async (adminUser: AdminUser): Promise<boolean> => {\n  return adminUser.dbUser.id === record.realtor_id;\n});\n\n"})}),"\n",(0,o.jsx)(n.p,{children:"In this case during publish call it will check all users who subscribed to the topic and do actual publish to only those who are allowed to receive the message. This method requires more CPU resources and generally is not recommended."})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var o=t(6540);const i={},s=o.createContext(i);function a(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);