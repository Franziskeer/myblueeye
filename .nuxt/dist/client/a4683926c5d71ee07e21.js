(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{1186:function(t,e,n){"use strict";n.r(e);n(51);var r=n(17),o={extends:n(917).a,data:function(){return{title:this.$t("Layouts"),meta:{prev:{title:"Navbar",to:"documentation-navbar"},next:{title:"Pages",to:"documentation-pages"}}}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.app,e.abrupt("return",{title:n.i18n.t("Layouts")});case 2:case"end":return e.stop()}}),e)})))()}},l=n(11),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("docs-page",{attrs:{meta:t.meta,title:t.title,breadcrumb:t.breadcrumb}},[n("p",{staticClass:"text-70 measure-paragraph-max"},[t._v("The "),n("code",[t._v("layouts/")]),t._v(" directory contains your Application Layouts. More information about the usage of this directory in "),n("a",{staticClass:"text-accent",attrs:{target:"_blank",href:"https://nuxtjs.org/guide/views#layouts"}},[t._v("the documentation")]),t._v(".")]),t._v(" "),n("hljs",{staticClass:"card card-body bg-dark measure-lead-max",attrs:{code:"\n      ├── layouts\n      │   ├── README.md\n      │   ├── blank.vue\n      │   ├── default.vue\n      │   ├── error.vue\n      │   ├── fixed.vue\n      │   └── home.vue\n    "}}),t._v(" "),n("h4",{staticClass:"mb-8pt"},[t._v("Default Layout")]),t._v(" "),n("p",{staticClass:"text-70 measure-paragraph-max"},[t._v("Set the default layout from "),n("code",[t._v("store/settings.js")]),t._v(". Possible values are any layout file names available in the "),n("code",[t._v("layouts/")]),t._v(" folder.")]),t._v(" "),n("hljs",{staticClass:"card card-body bg-dark measure-lead-max",attrs:{lang:"js",code:"\n      export const state = () => ({\n        state: {\n          layout: {\n            layout: 'default'\n          }\n        }\n      })\n    "}})],1)}),[],!1,null,null,null);e.default=component.exports},917:function(t,e,n){"use strict";var r={mixins:[n(43).a],layout:function(t){return t.store.getters.settings.layout.layout},head:function(){return{title:"".concat(this.$t(this.title)," - ").concat(this.$store.state.brand)}},data:function(){return{title:null,redirectLayout:!0}},computed:{breadcrumb:function(){return[{text:this.$t("Home"),to:this.localePath("/")},{text:this.$t(this.title),active:!0}]},headerClass:function(){return null},headerEffects:function(){return"waterfall"},headerImage:function(){return null},headerContentClass:function(){return null},headerCondenses:function(){return!1},headerContentComponent:function(){return null},headerContentComponentProps:function(){return null},guest:function(){return!1},subLayout:function(){return!1},subLayoutDrawer:function(){return!1},subLayoutDrawerId:function(){return"sub-layout-drawer"},subLayoutDrawerAlign:function(){return"end"}},created:function(){this.emitOptions()},methods:{emitOptions:function(){var t=this;["guest","subLayout","subLayoutDrawerId","subLayoutDrawerAlign","subLayoutDrawer","headerClass","headerEffects","headerImage","headerContentClass","headerCondenses","headerContentComponent","headerContentComponentProps"].map((function(option){void 0!==t[option]&&t.$root.$emit("luma::".concat(option),t[option])}))}}},o=n(11),component=Object(o.a)(r,void 0,void 0,!1,null,null,null);e.a=component.exports}}]);