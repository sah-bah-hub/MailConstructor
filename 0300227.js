(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{254:function(e,t,n){var content=n(265);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(128).default)("6dcbd5b6",content,!0,{sourceMap:!1})},255:function(e,t,n){var content=n(267);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(128).default)("d75b0428",content,!0,{sourceMap:!1})},257:function(e,t,n){var content=n(277);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(128).default)("4db94627",content,!0,{sourceMap:!1})},258:function(e,t,n){"use strict";var o=n(2),r=n(4),c=n(34),l=n(23),d=n(26),f=n(187),v=n(13),h=n(3),m=n(186),y=n(129),w=n(261),x=n(262),k=n(76),_=n(263),C=[],M=r(C.sort),A=r(C.push),j=h((function(){C.sort(void 0)})),T=h((function(){C.sort(null)})),B=y("sort"),E=!h((function(){if(k)return k<70;if(!(w&&w>3)){if(x)return!0;if(_)return _<603;var code,e,t,n,o="";for(code=65;code<76;code++){switch(e=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:t=3;break;case 68:case 71:t=4;break;default:t=2}for(n=0;n<47;n++)C.push({k:e+n,v:t})}for(C.sort((function(a,b){return b.v-a.v})),n=0;n<C.length;n++)e=C[n].k.charAt(0),o.charAt(o.length-1)!==e&&(o+=e);return"DGBEFHACIJK"!==o}}));o({target:"Array",proto:!0,forced:j||!T||!B||!E},{sort:function(e){void 0!==e&&c(e);var t=l(this);if(E)return void 0===e?M(t):M(t,e);var n,o,r=[],h=d(t);for(o=0;o<h;o++)o in t&&A(r,t[o]);for(m(r,function(e){return function(t,n){return void 0===n?-1:void 0===t?1:void 0!==e?+e(t,n)||0:v(t)>v(n)?1:-1}}(e)),n=d(r),o=0;o<n;)t[o]=r[o++];for(;o<h;)f(t,o++);return t}})},261:function(e,t,n){var o=n(58).match(/firefox\/(\d+)/i);e.exports=!!o&&+o[1]},262:function(e,t,n){var o=n(58);e.exports=/MSIE|Trident/.test(o)},263:function(e,t,n){var o=n(58).match(/AppleWebKit\/(\d+)\./);e.exports=!!o&&+o[1]},264:function(e,t,n){"use strict";var o=n(254),r=n.n(o);n.d(t,"default",(function(){return r.a}))},265:function(e,t,n){var o=n(127)(!1);o.push([e.i,".Add_wx6P3{cursor:pointer;display:flex;justify-content:space-around;margin:1rem 0;border-radius:10px;border:dashed;border-color:green;background:#f9fff1}.Add_wx6P3:hover{background:#dfffb6}.Add_wx6P3 img{margin:.5rem;height:2rem}",""]),o.locals={Add:"Add_wx6P3"},e.exports=o},266:function(e,t,n){"use strict";var o=n(255),r=n.n(o);n.d(t,"default",(function(){return r.a}))},267:function(e,t,n){var o=n(127)(!1);o.push([e.i,".Delete_PWJ3g{cursor:pointer;display:flex;justify-content:space-around;margin:1rem 0;border-radius:10px;border:dashed;border-color:maroon;background:#fff1f1}.Delete_PWJ3g:hover{background:#ffd8d8!important}.Delete_PWJ3g img{margin:.5rem;height:2rem}",""]),o.locals={Delete:"Delete_PWJ3g"},e.exports=o},270:function(e,t,n){"use strict";n.r(t);var o={name:"AddBlockComponent",data:function(){return{}},methods:{}},r=n(264),c=n(43);var component=Object(c.a)(o,(function(){var e=this,t=e._self._c;return t("div",{class:e.$style.Add,on:{click:function(t){return e.$emit("addBlock")}}},[t("img",{attrs:{src:n(259),alt:""}})])}),[],!1,(function(e){this.$style=r.default.locals||r.default}),null,null);t.default=component.exports},271:function(e,t,n){"use strict";n.r(t);var o={name:"DeleteBlockComponent",data:function(){return{}},methods:{}},r=n(266),c=n(43);var component=Object(c.a)(o,(function(){var e=this._self._c;return e("div",{class:this.$style.Delete},[e("img",{attrs:{src:n(260),alt:""}})])}),[],!1,(function(e){this.$style=r.default.locals||r.default}),null,null);t.default=component.exports},275:function(e,t,n){(function(n){var o,r,c;r=[],o=function(){"use strict";function b(a,b){return void 0===b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\ufeff",a],{type:a.type}):a}function t(a,b,e){var t=new XMLHttpRequest;t.open("GET",a),t.responseType="blob",t.onload=function(){g(t.response,b,e)},t.onerror=function(){console.error("could not download file")},t.send()}function o(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function r(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(e){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var c="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n&&n.global===n?n:void 0,a=c.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),g=c.saveAs||("object"!=typeof window||window!==c?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(b,g,e){var i=c.URL||c.webkitURL,n=document.createElement("a");g=g||b.name||"download",n.download=g,n.rel="noopener","string"==typeof b?(n.href=b,n.origin===location.origin?r(n):o(n.href)?t(b,g,e):r(n,n.target="_blank")):(n.href=i.createObjectURL(b),setTimeout((function(){i.revokeObjectURL(n.href)}),4e4),setTimeout((function(){r(n)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,g,n){if(g=g||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(b(e,n),g);else if(o(e))t(e,g,n);else{var i=document.createElement("a");i.href=e,i.target="_blank",setTimeout((function(){r(i)}))}}:function(b,e,n,g){if((g=g||open("","_blank"))&&(g.document.title=g.document.body.innerText="downloading..."),"string"==typeof b)return t(b,e,n);var o="application/octet-stream"===b.type,i=/constructor/i.test(c.HTMLElement)||c.safari,r=/CriOS\/[\d]+/.test(navigator.userAgent);if((r||o&&i||a)&&"undefined"!=typeof FileReader){var l=new FileReader;l.onloadend=function(){var a=l.result;a=r?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),g?g.location.href=a:location=a,g=null},l.readAsDataURL(b)}else{var d=c.URL||c.webkitURL,f=d.createObjectURL(b);g?g.location=f:location.href=f,g=null,setTimeout((function(){d.revokeObjectURL(f)}),4e4)}});c.saveAs=g.saveAs=g,e.exports=g},void 0===(c="function"==typeof o?o.apply(t,r):o)||(e.exports=c)}).call(this,n(35))},276:function(e,t,n){"use strict";var o=n(257),r=n.n(o);n.d(t,"default",(function(){return r.a}))},277:function(e,t,n){var o=n(127)(!1);o.push([e.i,'.MenuContainer_M7Hlv{background:#d3d3d3;padding:1rem}.MenuContainer_M7Hlv .typeContainer_5IlXV{margin:1rem 0;justify-content:space-between}.MenuContainer_M7Hlv .typeContainer_5IlXV,.MenuContainer_M7Hlv .typeContainer_5IlXV>div{display:flex;align-items:center}.MenuContainer_M7Hlv .subjectContainer_Vqqp4{display:flex;justify-content:space-between;align-items:center}.MenuContainer_M7Hlv .subjectContainer_Vqqp4 input{margin-left:.5rem;width:-webkit-fill-available;border-radius:4px;box-shadow:0 2px 5px rgba(0,0,0,.1);padding:.5rem;border:#d3d3d3}.MenuContainer_M7Hlv .subjectContainer_Vqqp4 input:focus{outline:0;box-shadow:0 2px 5px rgba(0,0,0,.3)}.switch{position:relative;display:inline-block;width:40px;height:22px}.switch input{display:none}.slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#87f321;transition:.4s}.slider:before{position:absolute;content:"";height:18px;width:18px;left:2px;bottom:2px;background-color:#fff;transition:.4s}input:checked+.slider{background-color:#2196f3}input:focus+.slider{box-shadow:0 0 1px #2196f3}input:checked+.slider:before{transform:translateX(18px)}.slider.round{border-radius:34px}.slider.round:before{border-radius:50%}',""]),o.locals={MenuContainer:"MenuContainer_M7Hlv",typeContainer:"typeContainer_5IlXV",subjectContainer:"subjectContainer_Vqqp4"},e.exports=o},281:function(e,t,n){"use strict";n.r(t);n(102),n(59),n(258),n(18),n(33),n(275);var o={name:"SideMenuComponent",props:["blocks","subject","type"],data:function(){return{text:"",dragging:!1,viewType:!0}},watch:{text:function(e){this.$emit("subjectChange",e)},viewType:function(e){this.$emit("typeChange",e)},dragging:function(e){e&&this.closeBlocs()}},created:function(){this.text=this.subject,this.viewType=this.type},methods:{closeBlocs:function(){this.$children.forEach((function(e){e.open=!1}))},sort:function(){this.blocks.sort((function(a,b){return a.index-b.index}))},dragged:function(e){this.dragging=e},addBlock:function(){this.blocks.push({index:this.blocks.length,links:[],boldeable:[],align:""})}}},r=n(276),c=n(43);var component=Object(c.a)(o,(function(){var e=this,t=e._self._c;return t("div",{class:e.$style.MenuContainer},[t("div",{class:e.$style.subjectContainer},[t("label",[e._v("Тема:")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.text,expression:"text"}],attrs:{type:"text"},domProps:{value:e.text},on:{input:function(t){t.target.composing||(e.text=t.target.value)}}})]),e._v(" "),t("div",{class:e.$style.typeContainer},[t("label",[e._v("Вид:")]),e._v(" "),t("div",[e._v("\n            Письмо \n            "),t("label",{staticClass:"switch"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.viewType,expression:"viewType"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.viewType)?e._i(e.viewType,null)>-1:e.viewType},on:{change:function(t){var n=e.viewType,o=t.target,r=!!o.checked;if(Array.isArray(n)){var c=e._i(n,null);o.checked?c<0&&(e.viewType=n.concat([null])):c>-1&&(e.viewType=n.slice(0,c).concat(n.slice(c+1)))}else e.viewType=r}}}),e._v(" "),t("span",{staticClass:"slider round"})]),e._v("\n             Json\n        ")])]),e._v(" "),t("div",{class:e.$style.blockContainer},e._l(e.blocks,(function(n,o){return t("BlockComponent",{key:o,attrs:{block:n,blockArray:e.blocks},on:{dragged:e.dragged,sort:e.sort}})})),1),e._v(" "),e.dragging?t("div",{class:e.$style.deletecontainer},[t("DeleteBlockComponent")],1):t("div",{class:e.$style.Addcontainer},[t("AddBlockComponent",{on:{addBlock:e.addBlock}})],1)])}),[],!1,(function(e){this.$style=r.default.locals||r.default}),null,null);t.default=component.exports;installComponents(component,{BlockComponent:n(282).default,AddBlockComponent:n(270).default,DeleteBlockComponent:n(271).default})}}]);