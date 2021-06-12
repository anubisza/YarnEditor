!function(e){var t={};function s(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=t,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s="jlOC")}({"5tLK":function(e,t,s){"use strict";try{self["workbox:routing:5.1.3"]&&_()}catch(e){}},Bxln:function(e,t,s){"use strict";try{self["workbox:core:5.1.3"]&&_()}catch(e){}},aqiC:function(e,t,s){"use strict";try{self["workbox:strategies:5.1.3"]&&_()}catch(e){}},jlOC:function(e,t,s){"use strict";s.r(t);s("xwD5");const n=[],r={get:()=>n,add(e){n.push(...e)}};s("Bxln");const o={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},i=e=>[o.prefix,e,o.suffix].filter(e=>e&&e.length>0).join("-"),c=e=>e||i(o.precache),a=e=>e||i(o.runtime),h=e=>new URL(String(e),location.href).href.replace(new RegExp("^"+location.origin),""),u=(e,...t)=>{let s=e;return t.length>0&&(s+=" :: "+JSON.stringify(t)),s};class l extends Error{constructor(e,t){super(u(e,t)),this.name=e,this.details=t}}const f=new Set;const d=(e,t)=>e.filter(e=>t in e),p=async({request:e,mode:t,plugins:s=[]})=>{const n=d(s,"cacheKeyWillBeUsed");let r=e;for(const e of n)r=await e.cacheKeyWillBeUsed.call(e,{mode:t,request:r}),"string"==typeof r&&(r=new Request(r));return r},g=async({cacheName:e,request:t,event:s,matchOptions:n,plugins:r=[]})=>{const o=await self.caches.open(e),i=await p({plugins:r,request:t,mode:"read"});let c=await o.match(i,n);for(const t of r)if("cachedResponseWillBeUsed"in t){const r=t.cachedResponseWillBeUsed;c=await r.call(t,{cacheName:e,event:s,matchOptions:n,cachedResponse:c,request:i})}return c},w=async({cacheName:e,request:t,response:s,event:n,plugins:r=[],matchOptions:o})=>{const i=await p({plugins:r,request:t,mode:"write"});if(!s)throw new l("cache-put-with-no-response",{url:h(i.url)});const c=await(async({request:e,response:t,event:s,plugins:n=[]})=>{let r=t,o=!1;for(const t of n)if("cacheWillUpdate"in t){o=!0;const n=t.cacheWillUpdate;if(r=await n.call(t,{request:e,response:r,event:s}),!r)break}return o||(r=r&&200===r.status?r:void 0),r||null})({event:n,plugins:r,response:s,request:i});if(!c)return void 0;const a=await self.caches.open(e),u=d(r,"cacheDidUpdate"),w=u.length>0?await g({cacheName:e,matchOptions:o,request:i}):null;try{await a.put(i,c)}catch(e){throw"QuotaExceededError"===e.name&&await async function(){for(const e of f)await e()}(),e}for(const t of u)await t.cacheDidUpdate.call(t,{cacheName:e,event:n,oldResponse:w,newResponse:c,request:i})},y=g,m=async({request:e,fetchOptions:t,event:s,plugins:n=[]})=>{if("string"==typeof e&&(e=new Request(e)),s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const r=d(n,"fetchDidFail"),o=r.length>0?e.clone():null;try{for(const t of n)if("requestWillFetch"in t){const n=t.requestWillFetch,r=e.clone();e=await n.call(t,{request:r,event:s})}}catch(e){throw new l("plugin-error-request-will-fetch",{thrownError:e})}const i=e.clone();try{let r;r="navigate"===e.mode?await fetch(e):await fetch(e,t);for(const e of n)"fetchDidSucceed"in e&&(r=await e.fetchDidSucceed.call(e,{event:s,request:i,response:r}));return r}catch(e){0;for(const t of r)await t.fetchDidFail.call(t,{error:e,event:s,originalRequest:o.clone(),request:i.clone()});throw e}};let _;async function v(e,t){const s=e.clone(),n={headers:new Headers(s.headers),status:s.status,statusText:s.statusText},r=t?t(n):n,o=function(){if(void 0===_){const e=new Response("");if("body"in e)try{new Response(e.body),_=!0}catch(e){_=!1}_=!1}return _}()?s.body:await s.blob();return new Response(o,r)}function R(e){if(!e)throw new l("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:t,url:s}=e;if(!s)throw new l("add-to-cache-list-unexpected-type",{entry:e});if(!t){const e=new URL(s,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(s,location.href),r=new URL(s,location.href);return n.searchParams.set("__WB_REVISION__",t),{cacheKey:n.href,url:r.href}}class q{constructor(e){this._cacheName=c(e),this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map}addToCacheList(e){const t=[];for(const s of e){"string"==typeof s?t.push(s):s&&void 0===s.revision&&t.push(s.url);const{cacheKey:e,url:n}=R(s),r="string"!=typeof s&&s.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new l("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof s&&s.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==s.integrity)throw new l("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,s.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,r),t.length>0){const e=`Workbox is precaching URLs without revision info: ${t.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}async install({event:e,plugins:t}={}){const s=[],n=[],r=await self.caches.open(this._cacheName),o=await r.keys(),i=new Set(o.map(e=>e.url));for(const[e,t]of this._urlsToCacheKeys)i.has(t)?n.push(e):s.push({cacheKey:t,url:e});const c=s.map(({cacheKey:s,url:n})=>{const r=this._cacheKeysToIntegrities.get(s),o=this._urlsToCacheModes.get(n);return this._addURLToCache({cacheKey:s,cacheMode:o,event:e,integrity:r,plugins:t,url:n})});return await Promise.all(c),{updatedURLs:s.map(e=>e.url),notUpdatedURLs:n}}async activate(){const e=await self.caches.open(this._cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),n=[];for(const r of t)s.has(r.url)||(await e.delete(r),n.push(r.url));return{deletedURLs:n}}async _addURLToCache({cacheKey:e,url:t,cacheMode:s,event:n,plugins:r,integrity:o}){const i=new Request(t,{integrity:o,cache:s,credentials:"same-origin"});let c,a=await m({event:n,plugins:r,request:i});for(const e of r||[])"cacheWillUpdate"in e&&(c=e);if(!(c?await c.cacheWillUpdate({event:n,request:i,response:a}):a.status<400))throw new l("bad-precaching-response",{url:t,status:a.status});a.redirected&&(a=await v(a)),await w({event:n,plugins:r,response:a,request:e===t?i:new Request(e),cacheName:this._cacheName,matchOptions:{ignoreSearch:!0}})}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this._cacheName)).match(s)}}createHandler(e=!0){return async({request:t})=>{try{const e=await this.matchPrecache(t);if(e)return e;throw new l("missing-precache-entry",{cacheName:this._cacheName,url:t instanceof Request?t.url:t})}catch(s){if(e)return fetch(t);throw s}}}createHandlerBoundToURL(e,t=!0){if(!this.getCacheKeyForURL(e))throw new l("non-precached-url",{url:e});const s=this.createHandler(t),n=new Request(e);return()=>s({request:n})}}let U;const L=()=>(U||(U=new q),U);const T=(e,t)=>{const s=L().getURLsToCacheKeys();for(const n of function*(e,{ignoreURLParametersMatching:t,directoryIndex:s,cleanURLs:n,urlManipulation:r}={}){const o=new URL(e,location.href);o.hash="",yield o.href;const i=function(e,t=[]){for(const s of[...e.searchParams.keys()])t.some(e=>e.test(s))&&e.searchParams.delete(s);return e}(o,t);if(yield i.href,s&&i.pathname.endsWith("/")){const e=new URL(i.href);e.pathname+=s,yield e.href}if(n){const e=new URL(i.href);e.pathname+=".html",yield e.href}if(r){const e=r({url:o});for(const t of e)yield t.href}}(e,t)){const e=s.get(n);if(e)return e}};let x=!1;function C(e){x||((({ignoreURLParametersMatching:e=[/^utm_/],directoryIndex:t="index.html",cleanURLs:s=!0,urlManipulation:n}={})=>{const r=c();self.addEventListener("fetch",o=>{const i=T(o.request.url,{cleanURLs:s,directoryIndex:t,ignoreURLParametersMatching:e,urlManipulation:n});if(!i)return void 0;let c=self.caches.open(r).then(e=>e.match(i)).then(e=>e||fetch(i));o.respondWith(c)})})(e),x=!0)}const b=e=>{const t=L(),s=r.get();e.waitUntil(t.install({event:e,plugins:s}).catch(e=>{throw e}))},K=e=>{const t=L();e.waitUntil(t.activate())};s("aqiC");const O={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null};s("5tLK");const N=e=>e&&"object"==typeof e?e:{handle:e};class M{constructor(e,t,s="GET"){this.handler=N(t),this.match=e,this.method=s}}class P extends M{constructor(e,t,s){super(({url:t})=>{const s=e.exec(t.href);if(s&&(t.origin===location.origin||0===s.index))return s.slice(1)},t,s)}}class k{constructor(){this._routes=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)})}addCacheListener(){self.addEventListener("message",e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data;0;const s=Promise.all(t.urlsToCache.map(e=>{"string"==typeof e&&(e=[e]);const t=new Request(...e);return this.handleRequest({request:t})}));e.waitUntil(s),e.ports&&e.ports[0]&&s.then(()=>e.ports[0].postMessage(!0))}})}handleRequest({request:e,event:t}){const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http"))return void 0;const{params:n,route:r}=this.findMatchingRoute({url:s,request:e,event:t});let o=r&&r.handler;if(!o&&this._defaultHandler&&(o=this._defaultHandler),!o)return void 0;let i;try{i=o.handle({url:s,request:e,event:t,params:n})}catch(e){i=Promise.reject(e)}return i instanceof Promise&&this._catchHandler&&(i=i.catch(n=>this._catchHandler.handle({url:s,request:e,event:t}))),i}findMatchingRoute({url:e,request:t,event:s}){const n=this._routes.get(t.method)||[];for(const r of n){let n;const o=r.match({url:e,request:t,event:s});if(o)return n=o,(Array.isArray(o)&&0===o.length||o.constructor===Object&&0===Object.keys(o).length||"boolean"==typeof o)&&(n=void 0),{route:r,params:n}}return{}}setDefaultHandler(e){this._defaultHandler=N(e)}setCatchHandler(e){this._catchHandler=N(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new l("unregister-route-but-not-found-with-method",{method:e.method});const t=this._routes.get(e.method).indexOf(e);if(!(t>-1))throw new l("unregister-route-route-not-registered");this._routes.get(e.method).splice(t,1)}}let S;const E=()=>(S||(S=new k,S.addFetchListener(),S.addCacheListener()),S);var W;console.log("Yarn's service worker is caching files"),function(e,t,s){let n;if("string"==typeof e){const r=new URL(e,location.href);0,n=new M(({url:e})=>e.href===r.href,t,s)}else if(e instanceof RegExp)n=new P(e,t,s);else if("function"==typeof e)n=new M(e,t,s);else{if(!(e instanceof M))throw new l("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});n=e}E().registerRoute(n)}(/https:\/\/yarnspinnertool\.github\.io\/YarnEditor\//,new class{constructor(e={}){if(this._cacheName=a(e.cacheName),e.plugins){const t=e.plugins.some(e=>!!e.cacheWillUpdate);this._plugins=t?e.plugins:[O,...e.plugins]}else this._plugins=[O];this._networkTimeoutSeconds=e.networkTimeoutSeconds||0,this._fetchOptions=e.fetchOptions,this._matchOptions=e.matchOptions}async handle({event:e,request:t}){const s=[];"string"==typeof t&&(t=new Request(t));const n=[];let r;if(this._networkTimeoutSeconds){const{id:o,promise:i}=this._getTimeoutPromise({request:t,event:e,logs:s});r=o,n.push(i)}const o=this._getNetworkPromise({timeoutId:r,request:t,event:e,logs:s});n.push(o);let i=await Promise.race(n);if(i||(i=await o),!i)throw new l("no-response",{url:t.url});return i}_getTimeoutPromise({request:e,logs:t,event:s}){let n;return{promise:new Promise(t=>{n=setTimeout(async()=>{t(await this._respondFromCache({request:e,event:s}))},1e3*this._networkTimeoutSeconds)}),id:n}}async _getNetworkPromise({timeoutId:e,request:t,logs:s,event:n}){let r,o;try{o=await m({request:t,event:n,fetchOptions:this._fetchOptions,plugins:this._plugins})}catch(e){r=e}if(e&&clearTimeout(e),r||!o)o=await this._respondFromCache({request:t,event:n});else{const e=o.clone(),s=w({cacheName:this._cacheName,request:t,response:e,event:n,plugins:this._plugins});if(n)try{n.waitUntil(s)}catch(e){0}}return o}_respondFromCache({event:e,request:t}){return y({cacheName:this._cacheName,request:t,event:e,matchOptions:this._matchOptions,plugins:this._plugins})}}),function(e){L().addToCacheList(e),e.length>0&&(self.addEventListener("install",b),self.addEventListener("activate",K))}([{'revision':'2eaaeb82bee7cfe47fe4e434e0d8840a','url':'css/0.css'},{'revision':'cc26e986ac53238679cef6af5cbc5104','url':'fonts/context-menu-icons.eot'},{'revision':'66fe7d78e602880e529daf66c8cb85d3','url':'fonts/context-menu-icons.ttf'},{'revision':'4568f559933f6b3db786835cf61387b1','url':'fonts/context-menu-icons.woff'},{'revision':'3124260e1569c74431e23dd130111455','url':'fonts/context-menu-icons.woff2'},{'revision':'a267c0b23e4794a4d9f2092027ab0fc7','url':'fonts/droid-sans-mono.ttf'},{'revision':'0158a98eda5da93408305a8f817bd61e','url':'icon.ico'},{'revision':'54a04953b96717b70ace1f2bcae537c1','url':'icon_128x128.png'},{'revision':'bd585463236696d22e72c822e9e2c36e','url':'icon_192x192.png'},{'revision':'0158a98eda5da93408305a8f817bd61e','url':'icon_32x32.ico'},{'revision':'41a610c236dfc4ca3db11af9f1d1efd1','url':'icon_512x512.png'},{'revision':'4f50d85588e2e334596e0bcc71892e42','url':'icon_96x96.png'},{'revision':'37a6fe26a7772d2fee9f159584f20d5e','url':'index.html'},{'revision':'fdf7da144bc270b21378c09fb960d0f8','url':'js/main.1ce3a016044c513843a1.js'},{'revision':'bac88d544bdbbe5a66ee018b2815af84','url':'js/runtime.1ce3a016044c513843a1.js'},{'revision':'82916c330efd52a91eccdb1c8664978d','url':'manifest.json'},{'revision':'ff0059b0644df7008c9f635f77da7601','url':'public/dictionaries/en/index.aff'},{'revision':'2f6e098411997f3d1217865bb468947f','url':'public/dictionaries/en/index.dic'},{'revision':'a267c0b23e4794a4d9f2092027ab0fc7','url':'public/droid-sans-mono.ttf'},{'revision':'0158a98eda5da93408305a8f817bd61e','url':'public/icon.ico'},{'revision':'73d45685f29fa05223dbb6cf7fb57097','url':'public/icon.png'},{'revision':'a6b5dbbf657b6b6bac1067ae1d3d4342','url':'public/icons.svg'},{'revision':'51e2de798b41db26b6a0ec187959d394','url':'public/images/dropbox.ico'},{'revision':'3fdc8ff827628cf143324f63f8f03dd0','url':'public/images/jsoneditor-icons.svg'},{'revision':'85f678b520893f6007833e0ae0a1f106','url':'public/images/pixel.png'},{'revision':'83e847f2aeb1d4f8f7f05cbb6be593c8','url':'public/images/twine-favicon-152.png'},{'revision':'b7e3efc21b5dde8aaaae7d470bb3f9eb','url':'public/mode-javascript.js'},{'revision':'96ab149ad451ee1ca76e4eb7ef9c5051','url':'public/mode-yarn.js'},{'revision':'e151201b5c305abc067a1486994e6a50','url':'public/plugins/bondage/renderer.js'},{'revision':'23e51238776f85ee9436e57620cf6b4c','url':'public/plugins/index.js'},{'revision':'471c2f30461240551aa221a5879c2942','url':'public/plugins/js-editor.js'},{'revision':'2b9b4872cd25494093c1eb14f0264a0b','url':'public/plugins/jsoneditor/dist/img/jsoneditor-icons.svg'},{'revision':'1a3b4fb9922a7b092790b51a74bef590','url':'public/plugins/jsoneditor/dist/jsoneditor-minimalist.js'},{'revision':'665a55227fa6e499d100c9f1e317f5a4','url':'public/plugins/jsoneditor/dist/jsoneditor-minimalist.min.js'},{'revision':'4e85d02f9d89868770cda21ce6ba97d6','url':'public/plugins/jsoneditor/dist/jsoneditor.css'},{'revision':'d109f381555b5710c9a718e740fcf3b4','url':'public/plugins/jsoneditor/dist/jsoneditor.min.css'},{'revision':'1c14790f39a9f2ba05e99a7755b690b4','url':'public/plugins/jsoneditor/dist/which files do I need.md'},{'revision':'299b3d05b953fab69b39e9f7a0a8372a','url':'public/plugins/jsoneditor/json-editor-darktheme.css'},{'revision':'f84d1197ae655002c1a933b69dd28ce8','url':'public/plugins/jsoneditor/size-overrides.css'},{'revision':'a63e83b71fe3d0b5be7baa0b2d15d443','url':'public/plugins/kaboom/kaboom.mjs'},{'revision':'54cebcbc2393ea585ba44fcb9e5cb36d','url':'public/plugins/runner.js'},{'revision':'c2e90e13f00a8d211533a3c301abef07','url':'public/plugins/var-store.js'},{'revision':'df3a64e933f73f88115992eedc6c80a6','url':'public/templates/node.html'},{'revision':'dc2634f62a57727efe69b5f01ef6d3b2','url':'public/theme-monokai.js'},{'revision':'2fe43fbb7c796eddba021471ef0262ea','url':'public/theme-yarn.js'},{'revision':'7382d49b9fc41ab1fb520e1369f55eed','url':'public/themes/blueprint.css'},{'revision':'5d979276428e7e5bf92a2f6699feb32e','url':'public/themes/classic.css'},{'revision':'cae13e83879c440faa9ae652d35a584a','url':'public/themes/dracula.css'},{'revision':'b826b66dcc6a5f0565c932c2b0dc49b1','url':'public/version.json'}]),C(W)},xwD5:function(e,t,s){"use strict";try{self["workbox:precaching:5.1.3"]&&_()}catch(e){}}});