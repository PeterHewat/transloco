"use strict";(self.webpackChunktransloco_docs=self.webpackChunktransloco_docs||[]).push([[688],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6477:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={title:"Additional Functionality",description:"Additional Functionality | Transloco Angular i18n"},s=void 0,c={unversionedId:"additional-functionality",id:"additional-functionality",isDocsHomePage:!1,title:"Additional Functionality",description:"Additional Functionality | Transloco Angular i18n",source:"@site/docs/additional-functionality.mdx",sourceDirName:".",slug:"/additional-functionality",permalink:"/transloco/docs/additional-functionality",editUrl:"https://github.com/ngneat/transloco/edit/master/docs/docs/additional-functionality.mdx",tags:[],version:"current",frontMatter:{title:"Additional Functionality",description:"Additional Functionality | Transloco Angular i18n"},sidebar:"docs",previous:{title:"Multiple Languages Simultaneously",permalink:"/transloco/docs/multi-lang"},next:{title:"Loading Template",permalink:"/transloco/docs/loading-template"}},p=[{value:"Reference Other Keys",id:"reference-other-keys",children:[]},{value:"<code>translate()</code>",id:"translate",children:[]},{value:"<code>translateObject()</code>",id:"translateobject",children:[]},{value:"<code>getBrowserLang()</code>",id:"getbrowserlang",children:[]},{value:"<code>getBrowserCultureLang()</code>",id:"getbrowserculturelang",children:[]}],d={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"reference-other-keys"},"Reference Other Keys"),(0,o.kt)("p",null,"You can point to specific keys in other keys from the same translation file. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="en.json"',title:'"en.json"'},'{\n  "alert": "alert {{value}} english",\n  "home": "home english",\n  "fromList": "from {{home}}"\n}\n')),(0,o.kt)("p",null,"So the result of ",(0,o.kt)("inlineCode",{parentName:"p"},"service.translate('fromList')"),' will be: "from home english".'),(0,o.kt)("p",null,"When using this feature inside a ",(0,o.kt)("a",{parentName:"p",href:"./lazy-load/scope-configuration"},"scope"),", make sure you prefix the key reference with the scope name:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="admin/en.json"',title:'"admin/en.json"'},'{\n  "alert": "alert {{value}} english",\n  "home": "home english",\n  "fromList": "from {{admin.home}}"\n}\n')),(0,o.kt)("p",null,"So the result of ",(0,o.kt)("inlineCode",{parentName:"p"},"service.translate('admin.fromList')"),' will be: "from home english".'),(0,o.kt)("p",null,"You can also pass parameters to the reused key. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="en.json"',title:'"en.json"'},'{\n  "hello": "Hello {{name}},",\n  "greet": "{{hello}}, have a good day!"\n}\n')),(0,o.kt)("p",null,"So the result of ",(0,o.kt)("inlineCode",{parentName:"p"},"service.translate('greet', {name: 'John'})"),' will be: "Hello John, have a good day!".'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Watch out from creating circular referencing!")," For Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="en.json"',title:'"en.json"'},'{\n  "key": "{{key2}}",\n  "key2": "{{key}}"\n}\n')),(0,o.kt)("h3",{id:"translate"},(0,o.kt)("inlineCode",{parentName:"h3"},"translate()")),(0,o.kt)("p",null,"You don't have to inject the service each time you need to translate a key. Transloco has an exported ",(0,o.kt)("inlineCode",{parentName:"p"},"translate()")," function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { translate } from '@ngneat/transloco';\n\ntranslate('hello');\n")),(0,o.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Note that this function is a proxy to the ",(0,o.kt)("a",{parentName:"p",href:"./translation-api#translate"},"TranslocoService.translate")," method.\nIt will not work if the service didn't initialize.",(0,o.kt)("br",{parentName:"p"}),"\n","In order to safely use this method, you are responsible for ensuring that the translation files have been successfully loaded by the time it's called."))),(0,o.kt)("h3",{id:"translateobject"},(0,o.kt)("inlineCode",{parentName:"h3"},"translateObject()")),(0,o.kt)("p",null,"You don't have to inject the service each time you need to translate an object. Transloco has an exported ",(0,o.kt)("inlineCode",{parentName:"p"},"translateObject()")," function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { translateObject } from '@ngneat/transloco';\n\ntranslateObject('some.object');\n")),(0,o.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Note that this function is a proxy to the ",(0,o.kt)("a",{parentName:"p",href:"./translation-api#translateObject"},"TranslocoService.translateObject")," method.\nIt will not work if the service didn't initialize.",(0,o.kt)("br",{parentName:"p"}),"\n","In order to safely use this method, you are responsible for ensuring that the translation files have been successfully loaded by the time it's called."))),(0,o.kt)("h3",{id:"getbrowserlang"},(0,o.kt)("inlineCode",{parentName:"h3"},"getBrowserLang()")),(0,o.kt)("p",null,"Returns the language code name from the browser, e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},'"en"')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { getBrowserLang } from '@ngneat/transloco';\n\ngetBrowserLang();\n")),(0,o.kt)("h3",{id:"getbrowserculturelang"},(0,o.kt)("inlineCode",{parentName:"h3"},"getBrowserCultureLang()")),(0,o.kt)("p",null,"Returns the culture language code name from the browser, e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},'"en-US"')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { getBrowserCultureLang } from '@ngneat/transloco';\n\ngetBrowserCultureLang()\n")))}u.isMDXComponent=!0}}]);