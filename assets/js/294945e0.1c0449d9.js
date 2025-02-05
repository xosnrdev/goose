"use strict";(self.webpackChunkgoose=self.webpackChunkgoose||[]).push([[2415],{5030:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"tutorials/jetbrains-mcp","title":"JetBrains Extension","description":"Add JetBrains MCP Server as a Goose Extension","source":"@site/docs/tutorials/jetbrains-mcp.md","sourceDirName":"tutorials","slug":"/tutorials/jetbrains-mcp","permalink":"/goose/docs/tutorials/jetbrains-mcp","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"JetBrains Extension","description":"Add JetBrains MCP Server as a Goose Extension"},"sidebar":"tutorialSidebar","previous":{"title":"GitHub Extension","permalink":"/goose/docs/tutorials/github-mcp"},"next":{"title":"Architecture Overview","permalink":"/goose/docs/category/architecture-overview"}}');var a=t(4848),r=t(8453),o=t(5537),i=t(9329);const l={title:"JetBrains Extension",description:"Add JetBrains MCP Server as a Goose Extension"},c=void 0,d={},u=[{value:"Configuration",id:"configuration",level:2},{value:"Example Usage",id:"example-usage",level:2},{value:"Goose Prompt",id:"goose-prompt",level:3},{value:"Goose Output",id:"goose-output",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"The JetBrains extension is designed to work within your IDE. Goose can accomplish a lot of the developer-centric tasks with the Developer extension that is enabled on install, however, the JetBrains extension provides a more integrated and project-aware way to work with code."}),"\n",(0,a.jsx)(n.p,{children:"This tutorial covers how to enable and use the JetBrains MCP Server as a built-in Goose extension to integrate with any JetBrains IDE."}),"\n",(0,a.jsx)(n.admonition,{title:"Known Limitation",type:"warning",children:(0,a.jsxs)(n.p,{children:["The JetBrains extension ",(0,a.jsx)(n.a,{href:"https://github.com/block/goose/issues/933",children:"does not work"})," with OpenAI models (e.g. gpt-4o)."]})}),"\n",(0,a.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Add the ",(0,a.jsx)(n.a,{href:"https://plugins.jetbrains.com/plugin/26071-mcp-server",children:"MCP Server plugin"})," to your IDE."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Enable built-in Goose extension:"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(o.A,{groupId:"interface",children:[(0,a.jsxs)(i.A,{value:"cli",label:"Goose CLI",default:!0,children:[(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Run the ",(0,a.jsx)(n.code,{children:"configure"})," command:"]}),"\n"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"goose configure\n"})}),(0,a.jsxs)(n.ol,{start:"2",children:["\n",(0,a.jsxs)(n.li,{children:["Choose to add a ",(0,a.jsx)(n.code,{children:"Built-in Extension"})]}),"\n"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"\u250c   goose-configure \n\u2502\n\u25c7  What would you like to configure?\n\u2502  Add Extension \n\u2502\n\u25c6  What type of extension would you like to add?\n// highlight-start    \n\u2502  \u25cf Built-in Extension (Use an extension that comes with Goose)\n// highlight-end  \n\u2502  \u25cb Command-line Extension \n\u2502  \u25cb Remote Extension \n\u2514  \n"})}),(0,a.jsxs)(n.ol,{start:"3",children:["\n",(0,a.jsxs)(n.li,{children:["Arrow down to the ",(0,a.jsx)(n.code,{children:"JetBrains"})," extension and press Enter"]}),"\n"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"\u250c   goose-configure \n\u2502\n\u25c7  What would you like to configure?\n\u2502  Add Extension \n\u2502\n\u25c7  What type of extension would you like to add?\n\u2502  Built-in Extension \n\u2502\n\u25c6  Which built-in extension would you like to enable?\n\u2502  \u25cb Developer Tools \n\u2502  \u25cb Computer Controller \n\u2502  \u25cb Google Drive \n\u2502  \u25cb Memory \n// highlight-start\n\u2502  \u25cf JetBrains (Connect to jetbrains IDEs)\n// highlight-end\n\u2514  Enabled jetbrains extension\n"})})]}),(0,a.jsx)(i.A,{value:"ui",label:"Goose Desktop",children:(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Click ",(0,a.jsx)(n.code,{children:"..."})," in the upper right corner"]}),"\n",(0,a.jsxs)(n.li,{children:["Click ",(0,a.jsx)(n.code,{children:"Settings"})]}),"\n",(0,a.jsxs)(n.li,{children:["Under ",(0,a.jsx)(n.code,{children:"Extensions"}),", toggle ",(0,a.jsx)(n.code,{children:"Jetbrains"})," to on."]}),"\n"]})})]}),"\n",(0,a.jsx)(n.h2,{id:"example-usage",children:"Example Usage"}),"\n",(0,a.jsx)(n.p,{children:"In this example, I'm going to upgrade a Java project to the latest LTS version."}),"\n",(0,a.jsx)(n.admonition,{title:"LLM",type:"info",children:(0,a.jsx)(n.p,{children:"Anthropic's Claude 3.5 Sonnet was used for this task."})}),"\n",(0,a.jsxs)(o.A,{groupId:"interface",children:[(0,a.jsxs)(i.A,{value:"cli",label:"Goose CLI",default:!0,children:[(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Open ",(0,a.jsx)(n.a,{href:"https://www.jetbrains.com/idea/download",children:"IntelliJ"})," (JetBrains' Java and Kotlin IDE)"]}),"\n",(0,a.jsx)(n.li,{children:"Open a terminal within your IDE and start a new Goose session:"}),"\n"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"goose session\n"})})]}),(0,a.jsxs)(i.A,{value:"ui",label:"Goose Desktop",children:[(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Open ",(0,a.jsx)(n.a,{href:"https://www.jetbrains.com/idea/download",children:"IntelliJ"})," (JetBrains' Java and Kotlin IDE)"]}),"\n",(0,a.jsx)(n.li,{children:"Open a new session in Goose Desktop"}),"\n"]}),(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsx)(n.p,{children:"You will interact with two separate apps: the Goose Desktop app and the IntelliJ IDE."})})]})]}),"\n",(0,a.jsxs)(n.admonition,{type:"tip",children:[(0,a.jsx)(n.mdxAdmonitionTitle,{}),(0,a.jsxs)(n.p,{children:["When using Goose to refactor code, it's recommended to commit your code to version control ",(0,a.jsx)(n.em,{children:"before"})," making changes. This way, you have a clean snapshot to compare against, making it easy to review Goose\u2019s modifications, revert if needed, and track improvements."]})]}),"\n",(0,a.jsx)(n.h3,{id:"goose-prompt",children:"Goose Prompt"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"using the JetBrains IDE tools, upgrade this project to use the latest Java LTS version and refactor the codebase to use newer Java features where beneficial.\n"})}),"\n",(0,a.jsx)(n.p,{children:"After 2 minutes, Goose was done with the upgrade! \ud83c\udf89"}),"\n",(0,a.jsx)(n.h3,{id:"goose-output",children:"Goose Output"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-md",children:"I'll make several improvements to modernize this codebase to use Java 21 (latest LTS) features. Here are the changes I'll implement:\n\n1. Update the `pom.xml` to use Java 21\n2. Use newer Java features \n\n[... code changes ...]\n\nHere's a summary of the modernization changes made:\n\n1. `pom.xml`:\n   - Set Java version to 21\n   - Enabled preview features\n   - Updated all dependencies to their latest stable versions\n\n2. `AccountsOverviewPage.java`:\n   - Made the class `final` since it extends the sealed `Page` class\n   - Updated stream collection to use `.toList()` instead of `collect(Collectors.toList())`\n   - Made fields final for better immutability\n\n3. `Page.java`:\n   - Converted to a sealed class\n   - Restricted which classes can extend it using `permits`\n   - Made fields protected and final where appropriate\n   - Added pattern matching for exception handling\n   - Implemented Optional for null safety\n   - Used String Templates for error messages\n   - Added functional programming concepts with Supplier\n   - Enhanced error handling with specific exception types\n\n4. `LoginComponent.java`:\n   - Added a private record for credentials\n   - Implemented pattern matching with record patterns\n   - Made fields final for better immutability\n\n5. `AccountTests.java`:\n   - Implemented structured concurrency using `StructuredTaskScope`\n   - Used parallel execution for UI and API tasks\n   - Improved error handling with structured task management\n   - Used pattern matching and type inference with `var`\n\n6. `BaseTests.java`:\n   - Implemented structured concurrency for setup tasks\n   - Improved resource management\n   - Better exception handling\n   - Used modern Duration API\n\n7. `APIUtil.java`:\n   - Implemented String Templates (Java 21 preview feature)\n   - Used modern text blocks\n\n8. `Customers.java`:\n   - Added sealed interface for customer types\n   - Implemented pattern matching for switch expressions\n   - Added pattern matching for instanceof\n   - Enhanced type safety with records\n\nKey modern Java features used:\n- String Templates (Java 21 Preview)\n- Pattern Matching for switch (Java 21)\n- Sealed Classes and Interfaces (Java 17)\n- Records (Java 16)\n- Pattern Matching for instanceof (Java 16)\n- Text Blocks (Java 15)\n- Switch Expressions (Java 14)\n\nThe codebase is now using the latest Java LTS version (21) and incorporates many modern Java features that improve:\n- Type safety\n- Null safety\n- Code readability\n- Error handling\n- Performance\n"})}),"\n",(0,a.jsx)(n.p,{children:"Using the JetBrains extension provided several advantages and made it easier for Goose to:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"navigate through the codebase"}),"\n",(0,a.jsx)(n.li,{children:"track changes"}),"\n",(0,a.jsx)(n.li,{children:"make consistent modifications across files"}),"\n",(0,a.jsx)(n.li,{children:"verify the content of files before and after changes"}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},9329:(e,n,t)=>{t.d(n,{A:()=>o});t(6540);var s=t(4164);const a={tabItem:"tabItem_Ymn6"};var r=t(4848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.A)(a.tabItem,o),hidden:t,children:n})}},5537:(e,n,t)=>{t.d(n,{A:()=>y});var s=t(6540),a=t(4164),r=t(5627),o=t(6347),i=t(372),l=t(604),c=t(1861),d=t(8749);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:a}}=e;return{value:n,label:t,attributes:s,default:a}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,o.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(r),(0,s.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(a.location.search);n.set(r,e),a.replace({...a.location,search:n.toString()})}),[r,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,r=h(e),[o,l]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:r}))),[c,u]=m({queryString:t,groupId:a}),[f,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,r]=(0,d.Dv)(t);return[a,(0,s.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:a}),g=(()=>{const e=c??f;return p({value:e,tabValues:r})?e:null})();(0,i.A)((()=>{g&&l(g)}),[g]);return{selectedValue:o,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),x(e)}),[u,x,r]),tabValues:r}}var x=t(9136);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(4848);function j(e){let{className:n,block:t,selectedValue:s,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),a=i[t].value;a!==s&&(c(n),o(a))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>{l.push(e)},onKeyDown:u,onClick:d,...r,className:(0,a.A)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function b(e){let{lazy:n,children:t,selectedValue:r}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function w(e){const n=f(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,v.jsx)(j,{...n,...e}),(0,v.jsx)(b,{...n,...e})]})}function y(e){const n=(0,x.A)();return(0,v.jsx)(w,{...e,children:u(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var s=t(6540);const a={},r=s.createContext(a);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);