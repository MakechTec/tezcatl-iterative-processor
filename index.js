(()=>{var e={227:(e,t)=>{(()=>{"use strict";var e={d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},r={};e.r(r),e.d(r,{Action:()=>n,Pipe:()=>o});class n{action=()=>{};args=[];constructor(e=(()=>{}),...t){this.action=e,this.args=t}}class o{actions=[];mutable=null;constructor(e=null,t=[]){this.mutable=e,this.actions=t}addAction(e,...t){return this.actions.push(new n(e,...t)),this}setActions(e){this.actions=e}execActions(){let e=this.mutable;return this.actions.forEach((t=>{e=t.action(e,...t.args)})),e}}t.E6=r.Pipe})()},159:(e,t,r)=>{(()=>{"use strict";var e={d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},n={};e.r(n),e.d(n,{ARGUMENT_FLAG:()=>u,Argument:()=>f,CLI:()=>a,Pattern:()=>c,Reader:()=>s,Writter:()=>l});const o=r(742),i=r(561);var a={getArgumentValue:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.argv,r=t.find((function(t){return c.testArg(e,t)}));if(void 0===r)return new f(e,"");var n=r.split("=")[1];return new f(e,n)},getArgumentsGroup:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.argv;return t.filter((function(t){return c.testArg(e,t)})).map((function(t){return t.replace(e,"")})).map((function(e){var t=e.split("=")[0],r=e.split("=")[1];return new f(t,r)}))},getFlagsGroup:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.argv;return e.filter((function(e){return c.testFlag(e)})).map((function(e){return e.replace(u,"")})).map((function(e){return new f(e,!0)}))},isFlag:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.argv;return t.includes(u+e)},getAllArguments:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.argv,t=e.slice(2);return t.filter((function(e){return c.testIsArg(e)})).map((function(e){var t=e.split("=")[0],r=e.split("=")[1];return new f(t,r)}))}},u="--",c={testStart:function(e,t){return new RegExp("^"+e).test(t)},testArg:function(e,t){return new RegExp("^"+e).test(t)},testIsArg:function(e){return e.includes("=")},testFlag:function(e){return new RegExp("^"+u).test(e)},testHasDirectory:function(e){return new RegExp("/").test(e)},replacePlaceholder:function(e,t){var r=new RegExp("\\$\\{"+t.name+"\\}","g");return e.replace(r,t.value)},countMatches:function(e,t){var r=new RegExp(t,"g");return((e||"").match(r)||[]).length}},s={readTemplate:function(e){this.read(e)},read:function(e){return i.existsSync(e)?i.readFileSync(e,"utf8"):(console.error("file not found in : "+e),"")},changePlaceholders:function(e,t){var r=e;return t.forEach((function(e){r=c.replacePlaceholder(r,e)})),r},readConfig:function(e){}},l={writeFile:function(e,t){if(c.testHasDirectory(e)){var r=e.lastIndexOf("/"),n=e.substring(0,r);this.createDirectory(n)}i.writeFileSync(e,t)},createDirectory:function(e){i.mkdirSync(e,{recursive:!0})},insertInLine:function(e,t,r){if(t-=1,c.testHasDirectory(e)){var n=e.lastIndexOf("/"),o=e.substring(0,n);this.createDirectory(o)}var a=i.readFileSync(e,"utf8").split(/\r?\n/);a.splice(t,0,r);var u=a.join("\n");i.writeFileSync(e,u)}},f=function(e,t,r){return Object.defineProperty(e,"prototype",{writable:!1}),e}((function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.name=t,this.value=r}));t.hA=n.Argument,t.$5=n.CLI,t.Ej=n.Reader})()},561:e=>{"use strict";e.exports=require("node:fs")},742:e=>{"use strict";e.exports=require("node:process")}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};(()=>{"use strict";r.r(n),r.d(n,{END_FOREACH_STATEMENT:()=>d,FOREACH_STATEMENT:()=>f,IterativeProcessor:()=>c});var e=r(227),t=r(159);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t,r){return t&&a(e.prototype,t),r&&a(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}var c=function(){function r(){i(this,r)}return u(r,[{key:"parse",value:function(t){for(var r=this,n=t,o=this.isAnyLoop(n);o;)n=new e.E6(n).addAction(this.read).addAction(this.createLoops).addAction((function(e){return r.evaluate(e,n)})).execActions(),o=this.isAnyLoop(n);return n}},{key:"evaluate",value:function(e,r){var n=this.loopWithLessDeep(e),o=n.iterableName(),i="";t.$5.getArgumentsGroup(o).map((function(e){return new t.hA(o,e.value)})).forEach((function(e){var o=r.substring(n.start.endIndex,n.end.startIndex);i+=t.Ej.changePlaceholders(o,[e])}));var a=r.substring(n.start.startIndex,n.end.endIndex);return r.replace(a,i)}},{key:"loopWithLessDeep",value:function(e){var t=e.map((function(e){return e.deep})).reduce((function(e,t){return Math.min(e,t)}));return e.find((function(e){return e.deep===t}))}},{key:"createLoops",value:function(e){for(var t=0,r=[],n=0;n<e.length;n++){var o=new RegExp(f),i=new RegExp(d);if(o.test(e[n].content)){t++;var a=new l;a.start=e[n],a.deep=t,r.push(a)}else if(i.test(e[n].content))for(var u=r.length-1;u>=0;u--)if(!r[u].completed){r[u].end=e[n],r[u].completed=!0,t--;break}}return r}},{key:"read",value:function(e){for(var t,r=new RegExp("(@foreach\\(.*?\\))|(@endforeach)","g"),n=[];null!==(t=r.exec(e));){var o=new s;o.startIndex=t.index,o.endIndex=r.lastIndex,o.content=t[0],n.push(o)}return n}},{key:"isAnyLoop",value:function(e){var t=new RegExp("(@foreach\\(.*\\))","g"),r=new RegExp("(@endforeach)","g");return t.test(e)&&r.test(e)}}]),r}(),s=u((function e(){i(this,e),o(this,"startIndex",void 0),o(this,"endIndex",void 0),o(this,"content",void 0)})),l=function(){function e(){i(this,e),o(this,"start",void 0),o(this,"end",void 0),o(this,"deep",void 0),o(this,"loops",[]),o(this,"completed",!1)}return u(e,[{key:"iterableName",value:function(){return this.start.content.replace("@foreach(","").replace(")","")}}]),e}(),f="@foreach\\(.*\\)",d="@endforeach"})(),exports.END_FOREACH_STATEMENT=n.END_FOREACH_STATEMENT,exports.FOREACH_STATEMENT=n.FOREACH_STATEMENT,exports.IterativeProcessor=n.IterativeProcessor,Object.defineProperty(exports,"__esModule",{value:!0})})();