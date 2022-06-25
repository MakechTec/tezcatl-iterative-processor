(()=>{var e={231:(e,t)=>{"use strict";t.B=void 0,t.B={group:function(e,r){var n=e.map((function(e,t){return{criterial:r(e),index:t}})),i=n.map((function(e){return e.criterial}));return t.B.distinct(i).map((function(e){return n.filter((function(t){return t.criterial===e}))})).map((function(t){return t.map((function(t){return e[t.index]}))}))},distinct:function(e){return e.filter((function(e,t,r){return r.indexOf(e)===t}))}}},227:(e,t)=>{(()=>{"use strict";var e={d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},r={};e.r(r),e.d(r,{Action:()=>n,Pipe:()=>i});class n{action=()=>{};args=[];constructor(e=(()=>{}),...t){this.action=e,this.args=t}}class i{actions=[];mutable=null;constructor(e=null,t=[]){this.mutable=e,this.actions=t}addAction(e,...t){return this.actions.push(new n(e,...t)),this}setActions(e){this.actions=e}execActions(){let e=this.mutable;return this.actions.forEach((t=>{e=t.action(e,...t.args)})),e}}t.E6=r.Pipe})()},159:(e,t,r)=>{(()=>{"use strict";var e={d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},n={};e.r(n),e.d(n,{ARGUMENT_FLAG:()=>u,Argument:()=>f,CLI:()=>a,Pattern:()=>c,Reader:()=>s,Writter:()=>l});const i=r(742),o=r(561);var a={getArgumentValue:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.argv,r=t.find((function(t){return c.testArg(e,t)}));if(void 0===r)return new f(e,"");var n=r.split("=")[1];return new f(e,n)},getArgumentsGroup:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.argv;return t.filter((function(t){return c.testArg(e,t)})).map((function(t){return t.replace(e,"")})).map((function(e){var t=e.split("=")[0],r=e.split("=")[1];return new f(t,r)}))},getFlagsGroup:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i.argv;return e.filter((function(e){return c.testFlag(e)})).map((function(e){return e.replace(u,"")})).map((function(e){return new f(e,!0)}))},isFlag:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.argv;return t.includes(u+e)},getAllArguments:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i.argv,t=e.slice(2);return t.filter((function(e){return c.testIsArg(e)})).map((function(e){var t=e.split("=")[0],r=e.split("=")[1];return new f(t,r)}))}},u="--",c={testStart:function(e,t){return new RegExp("^"+e).test(t)},testArg:function(e,t){return new RegExp("^"+e).test(t)},testIsArg:function(e){return e.includes("=")},testFlag:function(e){return new RegExp("^"+u).test(e)},testHasDirectory:function(e){return new RegExp("/").test(e)},replacePlaceholder:function(e,t){var r=new RegExp("\\$\\{"+t.name+"\\}","g");return e.replace(r,t.value)},countMatches:function(e,t){var r=new RegExp(t,"g");return((e||"").match(r)||[]).length}},s={readTemplate:function(e){this.read(e)},read:function(e){return o.existsSync(e)?o.readFileSync(e,"utf8"):(console.error("file not found in : "+e),"")},changePlaceholders:function(e,t){var r=e;return t.forEach((function(e){r=c.replacePlaceholder(r,e)})),r},readConfig:function(e){}},l={writeFile:function(e,t){if(c.testHasDirectory(e)){var r=e.lastIndexOf("/"),n=e.substring(0,r);this.createDirectory(n)}o.writeFileSync(e,t)},createDirectory:function(e){o.mkdirSync(e,{recursive:!0})},insertInLine:function(e,t,r){if(t-=1,c.testHasDirectory(e)){var n=e.lastIndexOf("/"),i=e.substring(0,n);this.createDirectory(i)}var a=o.readFileSync(e,"utf8").split(/\r?\n/);a.splice(t,0,r);var u=a.join("\n");o.writeFileSync(e,u)}},f=function(e,t,r){return Object.defineProperty(e,"prototype",{writable:!1}),e}((function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.name=t,this.value=r}));t.hA=n.Argument,t.$5=n.CLI,t.Ej=n.Reader})()},561:e=>{"use strict";e.exports=require("node:fs")},742:e=>{"use strict";e.exports=require("node:process")}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};(()=>{"use strict";r.r(n),r.d(n,{END_FOREACH_STATEMENT:()=>p,FOREACH_STATEMENT:()=>d,IterativeProcessor:()=>s,SEPARATOR:()=>v});var e=r(227),t=r(159),i=r(231);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t,r){return t&&u(e.prototype,t),r&&u(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}var s=function(){function r(){a(this,r)}return c(r,[{key:"parse",value:function(t){for(var r=this,n=t,i=this.isAnyLoop(n);i;)n=new e.E6(n).addAction(this.read).addAction(this.createLoops).addAction((function(e){return r.evaluate(e,n)})).execActions(),i=this.isAnyLoop(n);return n}},{key:"evaluate",value:function(e,r){var n=this.loopWithLessDeep(e),i=n.iterableName(),o="",a=t.$5.getArgumentsGroup(i);this.createBags(a).map((function(e){return e.map((function(e){var r=e.name.substring(0,e.name.indexOf(".")+1);return r=e.name.replace(r,""),r=i+"."+r,new t.hA(r,e.value)}))})).forEach((function(e){var i=r.substring(n.start.endIndex,n.end.startIndex);o+=t.Ej.changePlaceholders(i,e)}));var u=r.substring(n.start.startIndex,n.end.endIndex);return r.replace(u,o)}},{key:"loopWithLessDeep",value:function(e){var t=e.map((function(e){return e.deep})).reduce((function(e,t){return Math.min(e,t)}));return e.find((function(e){return e.deep===t}))}},{key:"createLoops",value:function(e){for(var t=0,r=[],n=0;n<e.length;n++){var i=new RegExp(d),o=new RegExp(p);if(i.test(e[n].content)){t++;var a=new f;a.start=e[n],a.deep=t,r.push(a)}else if(o.test(e[n].content))for(var u=r.length-1;u>=0;u--)if(!r[u].completed){r[u].end=e[n],r[u].completed=!0,t--;break}}return r}},{key:"read",value:function(e){for(var t,r=new RegExp("(@foreach\\(.*?\\))|(@endforeach)","g"),n=[];null!==(t=r.exec(e));){var i=new l;i.startIndex=t.index,i.endIndex=r.lastIndex,i.content=t[0],n.push(i)}return n}},{key:"isAnyLoop",value:function(e){var t=new RegExp("(@foreach\\(.*\\))","g"),r=new RegExp("(@endforeach)","g");return t.test(e)&&r.test(e)}},{key:"createBags",value:function(e){return i.B.group(e,(function(e){return e.name.substring(0,e.name.indexOf("."))}))}}]),r}(),l=c((function e(){a(this,e),o(this,"startIndex",void 0),o(this,"endIndex",void 0),o(this,"content",void 0)})),f=function(){function e(){a(this,e),o(this,"start",void 0),o(this,"end",void 0),o(this,"deep",void 0),o(this,"loops",[]),o(this,"completed",!1)}return c(e,[{key:"iterableName",value:function(){return this.start.content.replace("@foreach(","").replace(")","")}}]),e}(),d="@foreach\\(.*\\)",p="@endforeach",v="."})(),exports.END_FOREACH_STATEMENT=n.END_FOREACH_STATEMENT,exports.FOREACH_STATEMENT=n.FOREACH_STATEMENT,exports.IterativeProcessor=n.IterativeProcessor,exports.SEPARATOR=n.SEPARATOR,Object.defineProperty(exports,"__esModule",{value:!0})})();