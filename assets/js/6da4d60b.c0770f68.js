"use strict";(self.webpackChunkadminforth=self.webpackChunkadminforth||[]).push([[7942],{1504:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var i=s(4848),t=s(8453);const a={},o="Upload",r={id:"tutorial/Plugins/upload",title:"Upload",description:"This plugin allows you to upload files to Amazon S3 bucket.",source:"@site/docs/tutorial/05-Plugins/05-upload.md",sourceDirName:"tutorial/05-Plugins",slug:"/tutorial/Plugins/upload",permalink:"/docs/tutorial/Plugins/upload",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Rich editor",permalink:"/docs/tutorial/Plugins/RichEditor"},next:{title:"Chat-GPT",permalink:"/docs/tutorial/Plugins/chat-gpt"}},d={},l=[{value:"Installation",id:"installation",level:2},{value:"S3",id:"s3",level:2},{value:"S3 upload with public access",id:"s3-upload-with-public-access",level:3},{value:"Image generation",id:"image-generation",level:2},{value:"Rate limits",id:"rate-limits",level:3}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"upload",children:"Upload"}),"\n",(0,i.jsx)(n.p,{children:"This plugin allows you to upload files to Amazon S3 bucket."}),"\n",(0,i.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"npm i @adminforth/upload --save\n"})}),"\n",(0,i.jsx)(n.h2,{id:"s3",children:"S3"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Go to ",(0,i.jsx)(n.a,{href:"https://aws.amazon.com",children:"https://aws.amazon.com"})," and login."]}),"\n",(0,i.jsxs)(n.li,{children:["Go to Services -> S3 and create a bucket. Put in bucket name e.g. ",(0,i.jsx)(n.code,{children:"my-reality-bucket"}),".\nLeave all settings unchanged (ACL Disabled, Block all public access - checked)"]}),"\n",(0,i.jsx)(n.li,{children:"Go to bucket settings, Permissions, scroll down to Cross-origin resource sharing (CORS) and put in the following configuration:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'[\n    {\n        "AllowedHeaders": [\n            "*"\n        ],\n        "AllowedMethods": [\n            "PUT"\n        ],\n        "AllowedOrigins": [\n            "http://localhost:3500"\n        ],\n        "ExposeHeaders": []\n    }\n]\n'})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u261d\ufe0f In AllowedOrigins add all your domains. For example if you will serve admin on ",(0,i.jsx)(n.code,{children:"https://example.com/admin"})," you should add\n",(0,i.jsx)(n.code,{children:'"https://example.com"'})," to AllowedOrigins:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'[\n     "https://example.com",\n     "http://localhost:3500"\n]\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Every character matters, so don't forget to add ",(0,i.jsx)(n.code,{children:"http://"})," or ",(0,i.jsx)(n.code,{children:"https://"}),"!"]}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsxs)(n.li,{children:["Go to Services -> IAM and create a new user. Put in user name e.g. ",(0,i.jsx)(n.code,{children:"my-reality-user"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Attach existing policies directly -> ",(0,i.jsx)(n.code,{children:"AmazonS3FullAccess"}),". Go to your user -> ",(0,i.jsx)(n.code,{children:"Add permissions"})," -> ",(0,i.jsx)(n.code,{children:"Attach policies directly"})," -> ",(0,i.jsx)(n.code,{children:"AmazonS3FullAccess"})]}),"\n",(0,i.jsxs)(n.li,{children:["Go to Security credentials and create a new access key. Save ",(0,i.jsx)(n.code,{children:"Access key ID"})," and ",(0,i.jsx)(n.code,{children:"Secret access key"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Add credentials in your ",(0,i.jsx)(n.code,{children:".env"})," file:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:'title=".env"',children:"...\nNODE_ENV=development \n\n//diff-add\nAWS_ACCESS_KEY_ID=your_access_key_id\n//diff-add\nAWS_SECRET_ACCESS_KEY=your_secret_access_key\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Add column to ",(0,i.jsx)(n.code,{children:"aparts"})," resource configuration:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:'title="./resources/apartments.ts"',children:"//diff-add\nimport UploadPlugin from '@adminforth/upload';\n//diff-add\nimport { v4 as uuid } from 'uuid';\n\nexport const admin = new AdminForth({\n  ...\n  resourceId: 'aparts',\n  columns: [\n    ...\n//diff-add\n    {\n//diff-add\n      name: 'apartment_image',\n//diff-add\n      showIn: [], // You can set to ['list', 'show'] if you wish to show path column in list and show views\n//diff-add\n    }\n    ...\n  ],\n  plugins: [\n    ...\n//diff-add\n    new UploadPlugin({\n//diff-add\n      pathColumnName: 'apartment_image',\n//diff-add\n      s3Bucket: 'my-bucket', // \u2757 Your bucket name\n//diff-add\n      s3Region: 'us-east-1', // \u2757 Selected region\n//diff-add\n      s3AccessKeyId: process.env.AWS_ACCESS_KEY_ID,\n//diff-add\n      s3SecretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,\n//diff-add\n      allowedFileExtensions: ['jpg', 'jpeg', 'png', 'gif', 'webm', 'webp'],\n//diff-add\n      maxFileSize: 1024 * 1024 * 20, // 5MB\n//diff-add\n      s3Path: ({originalFilename, originalExtension, contentType}) => \n//diff-add\n            `aparts/${new Date().getFullYear()}/${uuid()}-${originalFilename}.${originalExtension}`,\n//diff-add\n    })\n//diff-add\n  ]\n  \n  ...\n\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Add a column for storing the path to the file in the database, add this statement to the ",(0,i.jsx)(n.code,{children:"./schema.prisma"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:'title="./schema.prisma"',children:"model apartments {\n  id                String     @id\n  created_at        DateTime? \n  title             String \n  square_meter      Float?\n  price             Decimal\n  number_of_rooms   Int?\n  description       String?\n  country           String?\n  listed            Boolean\n  realtor_id        String?\n//diff-add\n  apartment_image   String?\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"alt text",src:s(9284).A+"",width:"3700",height:"2800"})}),"\n",(0,i.jsx)(n.p,{children:"Here you can see how the plugin works:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"alt text",src:s(5544).A+"",width:"1889",height:"719"})}),"\n",(0,i.jsxs)(n.p,{children:["This setup will upload files to S3 bucket with private ACL and save path to file (relative to bucket root) in ",(0,i.jsx)(n.code,{children:"apartment_image"})," column."]}),"\n",(0,i.jsxs)(n.p,{children:["Once you will go to show or list view of ",(0,i.jsx)(n.code,{children:"aparts"})," resource you will see preview of uploaded file by using presigned temporary URLs\nwhich are generated by plugin."]}),"\n",(0,i.jsx)(n.p,{children:"If you want to draw such images in main non-admin app e.g. Nuxt, you should generate presigned URLs by yourself. Here is NodeJS an example of how to do it:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import AWS from 'aws-sdk';\n\nconst s3 = new AWS.S3({\n  accessKeyId: process.env.AWS_ACCESS_KEY_ID,\n  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,\n  region: 'us-east-1',\n});\n\nexport async function getPresignedUrl(s3Path: string): Promise<string> {\n  return s3.getSignedUrlPromise('getObject', {\n    Bucket: 'my-bucket',\n    Key: s3Path,\n    Expires: 60 * 60, // 1 hour\n  });\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"Alternatively you might want to make all objects public, let's consider how to do it."}),"\n",(0,i.jsx)(n.h3,{id:"s3-upload-with-public-access",children:"S3 upload with public access"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"First of all go to your bucket settings, Permissions, scroll down to Block public access (bucket settings for this bucket) and uncheck all checkboxes."}),"\n",(0,i.jsx)(n.li,{children:'Go to bucket settings, Permissions, Object ownership and select "ACLs Enabled" and "Bucket owner preferred" radio buttons.'}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Then you can change ACL in plugin configuration:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:'title="./index.ts"',children:"\n      new UploadPlugin({\n        pathColumnName: 'apartment_image',\n        s3Bucket: 'my-bucket',\n        s3Region: 'us-east-1',\n        s3AccessKeyId: process.env.AWS_ACCESS_KEY_ID,\n        s3SecretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,\n//diff-add\n        s3ACL: 'public-read',\n        allowedFileExtensions: ['jpg', 'jpeg', 'png', 'gif', 'webm'],\n        maxFileSize: 1024 * 1024 * 20, // 5MB\n        s3Path: ({originalFilename, originalExtension, contentType}) => \n                  `aparts/${new Date().getFullYear()}/${uuid()}-${originalFilename}.${originalExtension}`,\n      })\n      \n"})}),"\n",(0,i.jsxs)(n.p,{children:["Now every uploaded file will be public so in your custom app you can easily concatenate bucket URL with ",(0,i.jsx)(n.code,{children:"s3Path"})," to get public URL:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"export async function getPublicUrl(s3Path: string): string {\n  return `https://my-bucket.s3.${region}.amazonaws.com/${s3Path}`\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["For preview in AdminForth plugin will still use presigned URLs, but you can change it by providing ",(0,i.jsx)(n.code,{children:"previewUrl"})," function in plugin configuration:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:'title="./index.ts"',children:"\n  preview: {\n//diff-add\n      previewUrl: ({s3Path}) => `https://my-bucket.s3.us-east-1.amazonaws.com/${s3Path}`, \n  }\n"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:'Make sure that you change "my-bucket" and "us-east-1" to your own settings.'}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Also you might want to put CDN in front of your bucket, for example ",(0,i.jsx)(n.a,{href:"https://developers.cloudflare.com/support/third-party-software/others/configuring-an-amazon-web-services-static-site-to-use-cloudflare/",children:"CloudFlare"}),". In this case\nwe recommend route all AdminForth previews over CDN as well for faster worm up and better performance.\nIf for example your domain is ",(0,i.jsx)(n.code,{children:"my-domain.com"})," and you bucket has name ",(0,i.jsx)(n.code,{children:"static.my-domain.com"})," you should change preview URL like this:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:'title="./index.ts"',children:"\n  preview: {\n      showInList: true,\n//diff-remove\n      previewUrl: ({s3Path}) => `https://my-bucket.s3.us-east-1.amazonaws.com/${s3Path}`,\n\n//diff-add\n      previewUrl: ({s3Path}) => `https://static.my-domain.com/${s3Path}`,\n  }\n"})}),"\n",(0,i.jsx)(n.p,{children:"Also you will have to enable static website hosting in your bucket settings and set index.html and error.html to empty strings."}),"\n",(0,i.jsx)(n.h2,{id:"image-generation",children:"Image generation"}),"\n",(0,i.jsx)(n.p,{children:"Upload plugin supports AI generation for images"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:'title="./index.ts"',children:"\nnew UploadPlugin({\n  ...\n//diff-add\n  generation: {\n//diff-add\n    provider: 'openai-dall-e',\n//diff-add\n    countToGenerate: 2,  // how much images generate in one shot\n//diff-add\n    openAiOptions: {\n//diff-add\n      model: 'dall-e-3',  // one of models from OpenAI docs https://platform.openai.com/docs/api-reference/images/create\n//diff-add\n      size: '1792x1024',  // make sure that size is supported by model using OpenAI docs\n//diff-add\n      apiKey: process.env.OPENAI_API_KEY as string,\n//diff-add\n    },\n//diff-add\n    fieldsForContext: ['title'],\n\n},\n"})}),"\n",(0,i.jsx)(n.p,{children:"Here is how it works:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"alt text",src:s(1050).A+"",width:"1400",height:"1050"})}),"\n",(0,i.jsx)(n.h3,{id:"rate-limits",children:"Rate limits"}),"\n",(0,i.jsx)(n.p,{children:"You can set rate limits for image generation per IP address:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:'title="./index.ts"',children:"new UploadPlugin({\n  ...\n  generation: {\n    ...\n//diff-add\n  rateLimit: {\n    limit: '5/12h', // up to 5 times per 12 hour \n    errorMessage: 'You exhausted your image generation limit 5 times per 12 hours, please try again later',\n  }\n      ...\n});\n"})})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},9284:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/Upload-4597db59b9ee42124ea718716b9e87c3.png"},1050:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/demoImgGen-1-a819d48d26a84d9a3fd3e288cff7faed.gif"},5544:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/upload_gif-34c98c4dfbe3d08bf7d57af5162ceb5a.gif"},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>r});var i=s(6540);const t={},a=i.createContext(t);function o(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);