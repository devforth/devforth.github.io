"use strict";(self.webpackChunkadminforth=self.webpackChunkadminforth||[]).push([[6789],{8248:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>a,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var s=i(4848),l=i(8453);const r={},t="PluginOptions",o={id:"api/plugins/upload/types/type-aliases/PluginOptions",title:"PluginOptions",description:"PluginOptions: object",source:"@site/docs/api/plugins/upload/types/type-aliases/PluginOptions.md",sourceDirName:"api/plugins/upload/types/type-aliases",slug:"/api/plugins/upload/types/type-aliases/PluginOptions",permalink:"/docs/api/plugins/upload/types/type-aliases/PluginOptions",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"plugins/upload/types",permalink:"/docs/api/plugins/upload/types/"},next:{title:"types/AdminForthConfig",permalink:"/docs/api/types/AdminForthConfig/"}},d={},c=[{value:"Type declaration",id:"type-declaration",level:2},{value:"allowedFileExtensions?",id:"allowedfileextensions",level:3},{value:"generation?",id:"generation",level:3},{value:"generation.countToGenerate",id:"generationcounttogenerate",level:3},{value:"generation.fieldsForContext?",id:"generationfieldsforcontext",level:3},{value:"generation.openAiOptions",id:"generationopenaioptions",level:3},{value:"generation.openAiOptions.apiKey",id:"generationopenaioptionsapikey",level:3},{value:"generation.openAiOptions.model",id:"generationopenaioptionsmodel",level:3},{value:"generation.openAiOptions.size",id:"generationopenaioptionssize",level:3},{value:"generation.provider",id:"generationprovider",level:3},{value:"maxFileSize?",id:"maxfilesize",level:3},{value:"pathColumnName",id:"pathcolumnname",level:3},{value:"preview",id:"preview",level:3},{value:"preview.previewUrl()?",id:"previewpreviewurl",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"preview.showInList?",id:"previewshowinlist",level:3},{value:"preview.showInShow?",id:"previewshowinshow",level:3},{value:"s3ACL?",id:"s3acl",level:3},{value:"s3AccessKeyId",id:"s3accesskeyid",level:3},{value:"s3Bucket",id:"s3bucket",level:3},{value:"s3Path()",id:"s3path",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"s3Region",id:"s3region",level:3},{value:"s3SecretAccessKey",id:"s3secretaccesskey",level:3}];function h(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"pluginoptions",children:"PluginOptions"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"PluginOptions"}),": ",(0,s.jsx)(n.code,{children:"object"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"type-declaration",children:"Type declaration"}),"\n",(0,s.jsx)(n.h3,{id:"allowedfileextensions",children:"allowedFileExtensions?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"allowedFileExtensions"}),": ",(0,s.jsx)(n.code,{children:"string"}),"[]"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"the list of allowed file extensions"}),"\n",(0,s.jsx)(n.h3,{id:"generation",children:"generation?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"generation"}),": ",(0,s.jsx)(n.code,{children:"object"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"AI image generation options"}),"\n",(0,s.jsx)(n.h3,{id:"generationcounttogenerate",children:"generation.countToGenerate"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"countToGenerate"}),": ",(0,s.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The number of images to generate\nin one request"}),"\n",(0,s.jsx)(n.h3,{id:"generationfieldsforcontext",children:"generation.fieldsForContext?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"fieldsForContext"}),": ",(0,s.jsx)(n.code,{children:"string"}),"[]"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Fields of record to use for context. if supplied must be array of valid column names for resource\nwhere plugin is used."}),"\n",(0,s.jsx)(n.h3,{id:"generationopenaioptions",children:"generation.openAiOptions"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"openAiOptions"}),": ",(0,s.jsx)(n.code,{children:"object"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Options for OpenAI"}),"\n",(0,s.jsx)(n.h3,{id:"generationopenaioptionsapikey",children:"generation.openAiOptions.apiKey"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"apiKey"}),": ",(0,s.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The OpenAI API key"}),"\n",(0,s.jsx)(n.h3,{id:"generationopenaioptionsmodel",children:"generation.openAiOptions.model"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"model"}),": ",(0,s.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The model to use, e.g. 'dall-e-3'"}),"\n",(0,s.jsx)(n.h3,{id:"generationopenaioptionssize",children:"generation.openAiOptions.size"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"size"}),": ",(0,s.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The size of the image to generate, e.g. '1792x1024'"}),"\n",(0,s.jsx)(n.h3,{id:"generationprovider",children:"generation.provider"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"provider"}),": ",(0,s.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The provider to use for image generation\nfor now only 'openai-dall-e' is supported"}),"\n",(0,s.jsx)(n.h3,{id:"maxfilesize",children:"maxFileSize?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"maxFileSize"}),": ",(0,s.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"the maximum file size in bytes"}),"\n",(0,s.jsx)(n.h3,{id:"pathcolumnname",children:"pathColumnName"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"pathColumnName"}),": ",(0,s.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The name of the column where the path to the uploaded file is stored.\nOn place of this column, a file upload field will be shown."}),"\n",(0,s.jsx)(n.h3,{id:"preview",children:"preview"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"preview"}),": ",(0,s.jsx)(n.code,{children:"object"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"previewpreviewurl",children:"preview.previewUrl()?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"previewUrl"}),": (",(0,s.jsx)(n.code,{children:"{s3Path}"}),") => ",(0,s.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Used to display preview (if it is image) in list and show views.\nDefaulted to the AWS S3 presigned URL if resource is private or public URL if resource is public.\nCan be used to generate custom e.g. CDN(e.g. Cloudflare) URL to worm up cache and deliver preview faster."}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"previewUrl: ({record, path}) => `https://my-bucket.s3.amazonaws.com/${path}`,\n"})}),"\n",(0,s.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Parameter"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"{s3Path}"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"any"})})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"string"})}),"\n",(0,s.jsx)(n.h3,{id:"previewshowinlist",children:"preview.showInList?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"showInList"}),": ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Whether to show preview of image instead of path in list field\nBy default true"}),"\n",(0,s.jsx)(n.h3,{id:"previewshowinshow",children:"preview.showInShow?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"showInShow"}),": ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Whether to show preview of image instead of path in list field\nBy default true"}),"\n",(0,s.jsx)(n.h3,{id:"s3acl",children:"s3ACL?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"s3ACL"}),": ",(0,s.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"ACL which will be set to uploaded file, e.g. 'public-read'.\nIf you want to use 'public-read', it is your responsibility to set the \"ACL Enabled\" to true in the S3 bucket policy and Uncheck \"Block all public access\" in the bucket settings."}),"\n",(0,s.jsx)(n.h3,{id:"s3accesskeyid",children:"s3AccessKeyId"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"s3AccessKeyId"}),": ",(0,s.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"S3 access key id"}),"\n",(0,s.jsx)(n.h3,{id:"s3bucket",children:"s3Bucket"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"s3Bucket"}),": ",(0,s.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"S3 bucket name where we will upload the files, e.g. 'my-bucket'"}),"\n",(0,s.jsx)(n.h3,{id:"s3path",children:"s3Path()"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"s3Path"}),": (",(0,s.jsx)(n.code,{children:"{originalFilename, originalExtension, contentType}"}),") => ",(0,s.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The path where the file will be uploaded to the S3 bucket, same path will be stored in the database\nin the column specified in pathColumnName"}),"\n",(0,s.jsx)(n.p,{children:"example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"s3Path: ({record, originalFilename}) => `/aparts/${record.id}/${originalFilename}`\n"})}),"\n",(0,s.jsx)(n.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Parameter"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"{originalFilename, originalExtension, contentType}"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"any"})})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"returns-1",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"string"})}),"\n",(0,s.jsx)(n.h3,{id:"s3region",children:"s3Region"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"s3Region"}),": ",(0,s.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"S3 region, e.g. 'us-east-1'"}),"\n",(0,s.jsx)(n.h3,{id:"s3secretaccesskey",children:"s3SecretAccessKey"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"s3SecretAccessKey"}),": ",(0,s.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"S3 secret access key"})]})}function a(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>o});var s=i(6540);const l={},r=s.createContext(l);function t(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);