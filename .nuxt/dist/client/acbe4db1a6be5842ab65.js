(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{1190:function(t,e,n){"use strict";n.r(e);n(51);var r=n(17),o={extends:n(917).a,data:function(){return{title:this.$t("RTL"),meta:{prev:{title:"Settings",to:"documentation-settings"},next:{title:"Components",to:"documentation-components"}}}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.app,e.abrupt("return",{title:n.i18n.t("RTL")});case 2:case"end":return e.stop()}}),e)})))()}},c=n(11),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("docs-page",{attrs:{meta:t.meta,title:t.title,breadcrumb:t.breadcrumb}},[n("p",{staticClass:"text-70 measure-paragraph-max"},[t._v("Enable RTL or Right-to-Left mode from "),n("code",[t._v("store/settings.js")]),t._v(".")]),t._v(" "),n("hljs",{staticClass:"card card-body bg-dark measure-lead-max",attrs:{lang:"js",code:"\n      export const state = () => ({\n        state: {\n          layout: {\n            rtl: true\n          }\n        }\n      })\n    "}}),t._v(" "),n("h4",{staticClass:"mb-8pt"},[t._v("How it works")]),t._v(" "),n("p",{staticClass:"text-70 measure-paragraph-max"},[t._v("The process of converting regular styles to RTL is automatic and handled by "),n("code",[t._v("postcss-rtl")]),t._v(". This is already configured in "),n("code",[t._v("nuxt.config.js")]),t._v(".")]),t._v(" "),n("hljs",{staticClass:"card card-body bg-dark measure-lead-max",attrs:{lang:"js",code:"\n      module.exports = {\n\n        /*\n         ** Headers of the page\n         */\n        head() {\n          return {\n            htmlAttrs: {\n              dir: `${this.$store && this.$store.getters.settings.layout.rtl ? 'rtl' : 'ltr'}`\n            }\n          }\n        },\n\n        build: {\n          postcss: {\n            plugins: {\n              'postcss-rtl': {}\n            }\n          }\n        }\n      }\n    "}})],1)}),[],!1,null,null,null);e.default=component.exports},917:function(t,e,n){"use strict";var r={mixins:[n(43).a],layout:function(t){return t.store.getters.settings.layout.layout},head:function(){return{title:"".concat(this.$t(this.title)," - ").concat(this.$store.state.brand)}},data:function(){return{title:null,redirectLayout:!0}},computed:{breadcrumb:function(){return[{text:this.$t("Home"),to:this.localePath("/")},{text:this.$t(this.title),active:!0}]},headerClass:function(){return null},headerEffects:function(){return"waterfall"},headerImage:function(){return null},headerContentClass:function(){return null},headerCondenses:function(){return!1},headerContentComponent:function(){return null},headerContentComponentProps:function(){return null},guest:function(){return!1},subLayout:function(){return!1},subLayoutDrawer:function(){return!1},subLayoutDrawerId:function(){return"sub-layout-drawer"},subLayoutDrawerAlign:function(){return"end"}},created:function(){this.emitOptions()},methods:{emitOptions:function(){var t=this;["guest","subLayout","subLayoutDrawerId","subLayoutDrawerAlign","subLayoutDrawer","headerClass","headerEffects","headerImage","headerContentClass","headerCondenses","headerContentComponent","headerContentComponentProps"].map((function(option){void 0!==t[option]&&t.$root.$emit("luma::".concat(option),t[option])}))}}},o=n(11),component=Object(o.a)(r,void 0,void 0,!1,null,null,null);e.a=component.exports}}]);