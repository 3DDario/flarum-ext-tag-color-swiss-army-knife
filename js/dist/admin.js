(()=>{var t={n:o=>{var r=o&&o.__esModule?()=>o.default:()=>o;return t.d(r,{a:r}),r},d:(o,r)=>{for(var e in r)t.o(r,e)&&!t.o(o,e)&&Object.defineProperty(o,e,{enumerable:!0,get:r[e]})},o:(t,o)=>Object.prototype.hasOwnProperty.call(t,o),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},o={};(()=>{"use strict";t.r(o);const r=flarum.core.compat["common/extend"],e=flarum.core.compat["admin/app"];var a=t.n(e);const n=flarum.core.compat["common/components/ColorPreviewInput"];var l=t.n(n);const c=flarum.core.compat["common/utils/Stream"];var s=t.n(c);const i=flarum.core.compat["tags/admin/components/EditTagModal"];var d=t.n(i);a().initializers.add("3ddario/flarum-ext-tag-color-swiss-army-knife",(function(){(0,r.extend)(d().prototype,"oninit",(function(){this.textColor=s()(this.tag.attribute("textColor")||"")})),(0,r.extend)(d().prototype,"submitData",(function(t){t.textColor=this.textColor()})),(0,r.extend)(d().prototype,"fields",(function(t){var o=t.get("color");if(o&&o.children){var r=m("div",{class:"helpText"},a().translator.trans("3ddario-tag-color-swiss-army-knife.admin.stock_color.helptext"));o.children.splice(1,0,r)}t.add("textColor",m("div",{className:"Form-group"},m("label",null,a().translator.trans("3ddario-tag-color-swiss-army-knife.admin.text_color.custom_label")," "),m("div",{className:"helpText"},a().translator.trans("3ddario-tag-color-swiss-army-knife.admin.text_color.helptext")),m(l(),{className:"FormControl",placeholder:"#aaaaaa",bidi:this.textColor})),15)})),(0,r.extend)(d().prototype,"view",(function(t){var o=this,r=this.textColor();r.length>0&&t.children.forEach((function(t){t&&t.attrs&&"Modal-content"===t.attrs.className&&t.children.forEach((function(t){t&&t.tag&&"form"===t.tag&&t.children.forEach((function(t){t&&t.attrs&&"Modal-header"===t.attrs.className&&t.children.forEach((function(t){if(t&&t.attrs&&t.children&&0!==t.children.length){var e=t.children[0];e.attrs.className=e.attrs.className.replace("colored",""),e.attrs.style.background=o.color(),t.children.forEach((function(t){t&&t.attrs&&(t.attrs.style?t.attrs.style.color=r:t.attrs.style={color:r})}))}}))}))}))}))}))}))})(),module.exports=o})();
//# sourceMappingURL=admin.js.map