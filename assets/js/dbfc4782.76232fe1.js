"use strict";(self.webpackChunkadminforth=self.webpackChunkadminforth||[]).push([[8749],{1895:e=>{e.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"chatgpt-plugin","metadata":{"permalink":"/blog/chatgpt-plugin","source":"@site/blog/2024-08-05-chatgpt/index.md","title":"Chat-GPT plugin to co-write texts and strings","description":"Couple of days ago we released a plugin which allows you to co-write texts and strings with the AI.","date":"2024-08-05T00:00:00.000Z","tags":[{"inline":false,"label":"ChatGPT","permalink":"/blog/tags/chatgpt","description":"ChatGPT is a conversational AI model that can generate human-like responses to text inputs."},{"inline":false,"label":"Plugin","permalink":"/blog/tags/plugin","description":"Plugins are extensions that add new features or functionality to a AdminForth."}],"readingTime":3.765,"hasTruncateMarker":false,"authors":[{"name":"Ivan Borshcho","title":"Maintainer of AdminForth","url":"https://github.com/ivictbor","imageURL":"https://avatars.githubusercontent.com/u/1838656?v=4","key":"ivanb"}],"frontMatter":{"slug":"chatgpt-plugin","title":"Chat-GPT plugin to co-write texts and strings","authors":"ivanb","tags":["chatgpt","plugin"]},"unlisted":false},"content":"Couple of days ago we released a plugin which allows you to co-write texts and strings with the AI. \\n\\nToday LLM is already a must tool to speed-up writing, brainstorming, or generating ideas.\\n\\nHere is how it looks in action:\\n\\n![alt text](../../docs/tutorial/05-Plugins/demoChatGpt.gif)\\n\\n## Simple controls\\n\\nTo control plugin we use our open-source [vue-suggestion-input](https://github.com/devforth/vue-suggestion-input).\\nIt allows to:\\n* Complete suggestion with `Tab`.\\n* Complete word with `Ctrl + Right`.\\n* Regenerate suggestion with `Ctrl + Down`.\\n* On mobile suggestion word is accepted with swipe right on the screen.\\n\\n## Want to try it out?\\n\\nGo to a [Live Demo](https://demo.adminforth.dev/resource/aparts/create) and start creating a new apartment record. Type in the `title` and `description` field and see how the plugin works.\\n\\nIf you want to try it out on your hello-wrold admin panel, then, first follow the instructions in the [Getting Started](https://adminforth.dev/docs/tutorial/gettingStarted) tutorial to create a new project. To install the plugin, then, follow the instructions in the [Chat-GPT plugin page](https://adminforth.dev/docs/tutorial/Plugins/chat-gpt).\\n\\n\\n## Context matters, but with sane limit!\\n\\nWhen the prompts are called, the plugin passes to LLM not only previous text in current field to complete, but also passes values of other fields in record edited. This allows to generate more relevant completions. \\nFor example if you have a record with fields `title` and `description`, and you are editing `description`, the plugin will pass `title` value to LLM as well.\\n\\nBut obviously longer prompts lead to higher LLM costs and longer response times. That is why we created mechanics to limit the length of prompts passed to LLM.\\n\\nLimitation is done on 2 levels:\\n- plugin settings have `expert.promptInputLimit` - limits length of edited field passed to LLM. If field is longer, it will pass only last `promptInputLimit` characters.\\n- plugin settings have `expert.recordContext` which defines limits for other fields in record. Each field can\'t be longer then `maxFieldLength` (default is 300). If field is longer then it is split to parts `splitParts` and they are joined with \'...\'. Also if there are more non-empty fields then `maxFields`, then plugin selects top longest `maxFields` fields to pass to LLM.\\n\\nIn the end, total number of characters passed to LLM is limited by formula:\\n\\n```\\npromptInputLimit + maxFields * maxFieldLength + <LLM request static part>\\n```\\n\\nWhere `<LLM request static part>` is a constant part of request to LLM which looks like this:\\n\\n```\\nContinue writing for text/string field \\"${this.options.fieldName}\\" in the table \\"${resLabel}\\"\\\\n\\nRecord has values for the context: ${inputContext}\\\\n\\nCurrent field value: ${currentVal}\\\\n\\nDon\'t talk to me. Just write text. No quotes. Don\'t repeat current field value, just write completion\\\\n\\n```\\n\\n## Model configuration\\n\\nOf course you can define which model to use for completion. By default plugin uses `gpt-4o-mini` model ($0.150 / 1M input tokens, $0.600 / 1M output tokens for Aug 2024). But you can change it to any other model available in OpenAI API. More powerful replacement is `gpt-4o` model ($5.00 / 1M input tokens, $15.00 / 1M output tokens for Aug 2024).\\n\\nAlso you can define other parameters for completion like:\\n- `maxTokens` - most likely you don\'t want to waste tokens on longer completions, so default is 50 tokens.\\n- `temperature` - model temperature, default is 0.7. You can increase it to get more creative completions (but with risk of getting nonsense). Or decrease it to get more conservative completions.\\n- `debounceTime` - debounce time in milliseconds, default is 300. After typing each character, plugin waits for `debounceTime` milliseconds before sending request to LLM. If new character is typed during this time, then timer is reset. This is done to prevent sending too many requests to LLM.\\n\\n## Frontend story\\n\\nWhen we were working on plugin, we wanted to make it as user-friendly as possible. \\n\\nMost frontend packages for completion have old-fashioned dropdowns, which are not very convenient to use.\\n\\nWe wanted to have something very similar to Copilot or Google doc. So we created our own package [vue-suggestion-input](https://github.com/devforth/vue-suggestion-input). It is also MIT and open-source so you can use it in your projects as well.\\n\\nUnder the hood vue-suggestion-input uses [quill](https://quilljs.com/) editor. Quill is one of the WYSIWYG editors which have really good\\nAPI to work with DOM inside of editor. Basically all pieces of content in editor are represented as so called blots. And best thing - you can create your own custom blot. So we created our own blot which is responsible for rendering completion suggestion. Then you just \\"dance\\" around positioning of selection, suggestion and text modification, and thees things are easy-peasy with quill API."}]}}')}}]);