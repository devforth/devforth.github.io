"use strict";(self.webpackChunkadminforth=self.webpackChunkadminforth||[]).push([[2262],{9333:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var o=t(4848),i=t(8453);const s={},r="Branding and Theming",a={id:"tutorial/Customization/branding",title:"Branding and Theming",description:"The first things you would probably like to change are the logo, favicon and the name of the application.",source:"@site/docs/tutorial/03-Customization/01-branding.md",sourceDirName:"tutorial/03-Customization",slug:"/tutorial/Customization/branding",permalink:"/docs/tutorial/Customization/branding",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Glossary",permalink:"/docs/tutorial/glossary"},next:{title:"Custom record field rendering",permalink:"/docs/tutorial/Customization/customFieldRendering"}},c={},d=[{value:"Theming",id:"theming",level:2},{value:"Square vs rounded buttons?",id:"square-vs-rounded-buttons",level:2},{value:"Login background",id:"login-background",level:2}];function l(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"branding-and-theming",children:"Branding and Theming"}),"\n",(0,o.jsx)(e.p,{children:"The first things you would probably like to change are the logo, favicon and the name of the application."}),"\n",(0,o.jsxs)(e.p,{children:["First of all create directory named ",(0,o.jsx)(e.code,{children:"custom"})," at the same level with your TypeScript/JavaScript index file."]}),"\n",(0,o.jsxs)(e.p,{children:["We will use this directory for all custom components. If you want to use other name then ",(0,o.jsx)(e.code,{children:"custom"}),", use ",(0,o.jsx)(e.a,{href:"https://adminforth.dev/docs/api/types/AdminForthConfig/type-aliases/AdminForthConfig#customizationcustomcomponentsdir",children:"customComponentsDir"})]}),"\n",(0,o.jsxs)(e.p,{children:["Place your logo file into the ",(0,o.jsx)(e.code,{children:"custom"})," directory e.g. (",(0,o.jsx)(e.code,{children:"logo.svg"}),")"]}),"\n",(0,o.jsxs)(e.p,{children:["Also place your favicon into the ",(0,o.jsx)(e.code,{children:"custom"})," directory e.g. (",(0,o.jsx)(e.code,{children:"favicon.png"}),")"]}),"\n",(0,o.jsx)(e.p,{children:"Then you can change the branding of the application in the configuration:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",children:"\nconst admin = new AdminForth({\n  ...\n  customization: {\n    brandName: 'My App',  // used in header\n    title: 'My App Admin',  // used to set the title (HTML title tag in your pages)\n    brandLogo: '@@/logo.svg',\n    favicon: '@@/favicon.png',\n  },\n"})}),"\n",(0,o.jsxs)(e.p,{children:["Please note that ",(0,o.jsx)(e.code,{children:"@@/"})," is a special prefix which tells AdminForth to look for the file in the ",(0,o.jsx)(e.code,{children:"custom"})," directory.\nYou can use ",(0,o.jsx)(e.code,{children:"@@/"})," prefix for all paths in the configuration and also import images like this in your custom components e.g.:"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",children:'<template>\n  <img src="@@/myFile.svg" alt="logo">\n</template>\n'})}),"\n",(0,o.jsx)(e.h2,{id:"theming",children:"Theming"}),"\n",(0,o.jsx)(e.p,{children:"AdminForth uses TailwindCSS for styling. You can customize the look of the application by changing the TailwindCSS configuration."}),"\n",(0,o.jsxs)(e.p,{children:["Use ",(0,o.jsx)(e.a,{href:"https://github.com/devforth/adminforth/blob/main/adminforth/modules/styles.ts",children:"styles.ts"})," file to see which variables are available for change."]}),"\n",(0,o.jsx)(e.p,{children:"Let's say your brand has a primary purple color and you wish to make navigation bar purple with white text."}),"\n",(0,o.jsxs)(e.p,{children:["In ",(0,o.jsx)(e.code,{children:"index.ts"})," file set the ",(0,o.jsx)(e.code,{children:"styles"})," property in the configuration:"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",children:"import { AdminForth } from 'adminforth';\n\nconst admin = new AdminForth({\n  ...\n  styles: {\n    colors: {\n      'nav-menu-bg': 'purple',\n      'nav-menu-text': 'white',\n      'nav-menu-active-text': 'white',\n      \"nav-menu-icons\": \"white\",\n      'nav-menu-active': 'rgb(180 76 232)',\n      \"nav-menu-bg-hover\": \"rgb(194 99 242)\",\n    },\n  },\n  ...\n});\n"})}),"\n",(0,o.jsx)(e.h2,{id:"square-vs-rounded-buttons",children:"Square vs rounded buttons?"}),"\n",(0,o.jsx)(e.p,{children:"Not an issue, just change:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",children:'styles: {\n  borderRadius: {\n    "default": "0px"\n  }\n}\n'})}),"\n",(0,o.jsx)(e.h2,{id:"login-background",children:"Login background"}),"\n",(0,o.jsx)(e.p,{children:"Some why login background image matters."}),"\n",(0,o.jsxs)(e.p,{children:["For example you might want to get ",(0,o.jsx)(e.a,{href:"https://unsplash.com/s/photos/secure?license=free",children:"free sweet background"})," from Unsplash like\n",(0,o.jsx)(e.a,{href:"https://images.unsplash.com/photo-1516501312919-d0cb0b7b60b8?q=80&w=3404&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",children:"Nate Watson's appartments view"}),"."]}),"\n",(0,o.jsxs)(e.p,{children:["Download it to ",(0,o.jsx)(e.code,{children:"custom"})," directory, and just set it in the configuration:"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",children:"const admin = new AdminForth({\n  ...\n  customization: {\n    loginBackgroundImage: '@@/photo-1516501312919-d0cb0b7b60b8.jpeg',\n  },\n  ...\n});\n"})}),"\n",(0,o.jsx)(e.p,{children:"< screenshot here >"})]})}function h(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(l,{...n})}):l(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>r,x:()=>a});var o=t(6540);const i={},s=o.createContext(i);function r(n){const e=o.useContext(s);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),o.createElement(s.Provider,{value:e},n.children)}}}]);