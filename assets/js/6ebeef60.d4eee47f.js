"use strict";(self.webpackChunkadminforth=self.webpackChunkadminforth||[]).push([[3500],{8776:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>a,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var l=i(4848),t=i(8453);const s={},o="AdminForthConfigMenuItem",r={id:"api/types/Back/type-aliases/AdminForthConfigMenuItem",title:"AdminForthConfigMenuItem",description:"AdminForthConfigMenuItem: object",source:"@site/docs/api/types/Back/type-aliases/AdminForthConfigMenuItem.md",sourceDirName:"api/types/Back/type-aliases",slug:"/api/types/Back/type-aliases/AdminForthConfigMenuItem",permalink:"/docs/api/types/Back/type-aliases/AdminForthConfigMenuItem",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"IOperationalResource",permalink:"/docs/api/types/Back/interfaces/IOperationalResource"},next:{title:"AdminForthDataSource",permalink:"/docs/api/types/Back/type-aliases/AdminForthDataSource"}},d={},c=[{value:"Type declaration",id:"type-declaration",level:2},{value:"badge?",id:"badge",level:3},{value:"children?",id:"children",level:3},{value:"component?",id:"component",level:3},{value:"homepage?",id:"homepage",level:3},{value:"icon?",id:"icon",level:3},{value:"isStaticRoute?",id:"isstaticroute",level:3},{value:"label?",id:"label",level:3},{value:"meta?",id:"meta",level:3},{value:"meta.title?",id:"metatitle",level:3},{value:"open?",id:"open",level:3},{value:"path?",id:"path",level:3},{value:"resourceId?",id:"resourceid",level:3},{value:"type?",id:"type",level:3},{value:"visible()?",id:"visible",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"adminforthconfigmenuitem",children:"AdminForthConfigMenuItem"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"AdminForthConfigMenuItem"}),": ",(0,l.jsx)(n.code,{children:"object"})]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Menu item which displayed in the left sidebar of the admin panel."}),"\n",(0,l.jsx)(n.h2,{id:"type-declaration",children:"Type declaration"}),"\n",(0,l.jsx)(n.h3,{id:"badge",children:"badge?"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"optional"})," ",(0,l.jsx)(n.strong,{children:"badge"}),": ",(0,l.jsx)(n.code,{children:"string"})," | (",(0,l.jsx)(n.code,{children:"user"}),") => ",(0,l.jsx)(n.code,{children:"Promise"}),"<",(0,l.jsx)(n.code,{children:"string"}),">"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Optional callback which will be called before rendering the menu for each item.\nResult of callback if not null will be used as a small badge near the menu item."}),"\n",(0,l.jsx)(n.h3,{id:"children",children:"children?"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"optional"})," ",(0,l.jsx)(n.strong,{children:"children"}),": ",(0,l.jsx)(n.a,{href:"/docs/api/types/Back/type-aliases/AdminForthConfigMenuItem",children:(0,l.jsx)(n.code,{children:"AdminForthConfigMenuItem"})}),"[]"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Children menu items which will be displayed in this group.\nSupported for AdminForthMenuTypes.GROUP only!"}),"\n",(0,l.jsx)(n.h3,{id:"component",children:"component?"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"optional"})," ",(0,l.jsx)(n.strong,{children:"component"}),": ",(0,l.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["Component to be used for this menu item. Component should be placed in custom folder and referenced with ",(0,l.jsx)(n.code,{children:"@@/"})," prefix.\nSupported for AdminForthMenuTypes.PAGE only!\nExample:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"component: '@@/Dashboard.vue',\n"})}),"\n",(0,l.jsx)(n.h3,{id:"homepage",children:"homepage?"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"optional"})," ",(0,l.jsx)(n.strong,{children:"homepage"}),": ",(0,l.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"If true, group will be open by default after user login to the admin panel.\nAlso will be used to redirect from root path."}),"\n",(0,l.jsx)(n.h3,{id:"icon",children:"icon?"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"optional"})," ",(0,l.jsx)(n.strong,{children:"icon"}),": ",(0,l.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["Icon for menu item which will be displayed in the admin panel.\nSupports iconify icons in format ",(0,l.jsx)(n.code,{children:"<icon set name>:<icon name>"}),"\nBrowse available icons here: ",(0,l.jsx)(n.a,{href:"https://icon-sets.iconify.design/",children:"https://icon-sets.iconify.design/"})]}),"\n",(0,l.jsx)(n.p,{children:"Example:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"icon: 'flowbite:brain-solid', \n"})}),"\n",(0,l.jsx)(n.h3,{id:"isstaticroute",children:"isStaticRoute?"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"optional"})," ",(0,l.jsx)(n.strong,{children:"isStaticRoute"}),": ",(0,l.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"By default all pages are imported dynamically with lazy import().\nIf you wish to import page statically, set this option to true.\nHomepage will be imported statically by default. but you can override it with this option."}),"\n",(0,l.jsx)(n.h3,{id:"label",children:"label?"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"optional"})," ",(0,l.jsx)(n.strong,{children:"label"}),": ",(0,l.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Label for menu item which will be displayed in the admin panel."}),"\n",(0,l.jsx)(n.h3,{id:"meta",children:"meta?"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"optional"})," ",(0,l.jsx)(n.strong,{children:"meta"}),": ",(0,l.jsx)(n.code,{children:"object"})]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"metatitle",children:"meta.title?"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"optional"})," ",(0,l.jsx)(n.strong,{children:"title"}),": ",(0,l.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"open",children:"open?"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"optional"})," ",(0,l.jsx)(n.strong,{children:"open"}),": ",(0,l.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Where Group is open by default\nSupported for AdminForthMenuTypes.GROUP only!"}),"\n",(0,l.jsx)(n.h3,{id:"path",children:"path?"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"optional"})," ",(0,l.jsx)(n.strong,{children:"path"}),": ",(0,l.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Path to custom component which will be displayed in the admin panel."}),"\n",(0,l.jsx)(n.h3,{id:"resourceid",children:"resourceId?"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"optional"})," ",(0,l.jsx)(n.strong,{children:"resourceId"}),": ",(0,l.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Resource ID which will be used to fetch data from.\nSupported for AdminForthMenuTypes.RESOURCE only!"}),"\n",(0,l.jsx)(n.h3,{id:"type",children:"type?"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"optional"})," ",(0,l.jsx)(n.strong,{children:"type"}),": ",(0,l.jsx)(n.a,{href:"/docs/api/types/Back/enumerations/AdminForthMenuTypes",children:(0,l.jsx)(n.code,{children:"AdminForthMenuTypes"})})," | keyof ",(0,l.jsx)(n.em,{children:"typeof"})," ",(0,l.jsx)(n.a,{href:"/docs/api/types/Back/enumerations/AdminForthMenuTypes",children:(0,l.jsx)(n.code,{children:"AdminForthMenuTypes"})})]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"visible",children:"visible()?"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"optional"})," ",(0,l.jsx)(n.strong,{children:"visible"}),": (",(0,l.jsx)(n.code,{children:"user"}),") => ",(0,l.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Optional callback which will be called before rendering the menu for each item.\nYou can use it to hide menu items depending on some user"}),"\n",(0,l.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Parameter"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"user"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.a,{href:"/docs/api/types/Common/interfaces/AdminUser",children:(0,l.jsx)(n.code,{children:"AdminUser"})})})]})})]}),"\n",(0,l.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"boolean"})})]})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>r});var l=i(6540);const t={},s=l.createContext(t);function o(e){const n=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);