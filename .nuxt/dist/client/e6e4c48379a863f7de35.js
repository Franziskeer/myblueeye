(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{1219:function(n,t,e){"use strict";e.r(t);var r={extends:e(918).a,data:function(){return{meta:{component:"FmvSidebarMenu",nav:["usage"]},title:"Sidebar Menu",code:"\n        <template>\n          <fmv-drawer :align=\"align\">\n            <fmv-sidebar\n              :align=\"align\"\n              type=\"dark\"\n              variant=\"bg-dark\">\n              <no-ssr>\n                <div class=\"sidebar-p-y\">\n                  <div class=\"sidebar-heading\">Applications</div>\n\n                  \x3c!-- Apps menu --\x3e\n                  <fmv-sidebar-menu \n                    :menu=\"apps\"\n                    class=\"sm-active-button-bg\" />\n\n                  \x3c!-- Components menu --\x3e\n                  <div class=\"sidebar-heading\">Components</div>\n                  <fmv-sidebar-menu :menu=\"components\" />\n\n                </div>\n              </no-ssr>\n            </fmv-sidebar>\n          </fmv-drawer>\n        </template>\n        \n        <script>\n        import {FmvDrawer, FmvSidebar, FmvSidebarMenu} from 'fmv-layout'\n\n        export default {\n          components: {\n            FmvDrawer,\n            FmvSidebar,\n            FmvSidebarMenu\n          },\n          data() {\n            return {\n              align: 'start',\n              apps: [\n                {\n                  label: 'Student',\n                  route: '/',\n                  icon: {\n                    type: 'md-icon',\n                    id: 'account_box'\n                  }\n                }\n              ],\n              components: [\n                {\n                  id: 'uiComponents',\n                  label: 'User Interface',\n                  icon: {\n                    type: 'md-icon',\n                    id: 'tune'\n                  },\n                  open: false,\n                  children: [\n                    {\n                      label: 'Forms',\n                      route: '/components/ui/forms'\n                    }\n                  ]\n                }\n              ]\n            }\n          }\n        }\n        <\/script>\n      "}}},o=e(11),component=Object(o.a)(r,(function(){var n=this.$createElement,t=this._self._c||n;return t("div",[t("docs-page",{attrs:{meta:this.meta,title:this.title,breadcrumb:this.breadcrumb}},[t("hljs",{staticClass:"card card-body bg-dark",attrs:{id:"usage",code:this.code}})],1)],1)}),[],!1,null,null,null);t.default=component.exports},917:function(n,t,e){"use strict";var r={mixins:[e(43).a],layout:function(n){return n.store.getters.settings.layout.layout},head:function(){return{title:"".concat(this.$t(this.title)," - ").concat(this.$store.state.brand)}},data:function(){return{title:null,redirectLayout:!0}},computed:{breadcrumb:function(){return[{text:this.$t("Home"),to:this.localePath("/")},{text:this.$t(this.title),active:!0}]},headerClass:function(){return null},headerEffects:function(){return"waterfall"},headerImage:function(){return null},headerContentClass:function(){return null},headerCondenses:function(){return!1},headerContentComponent:function(){return null},headerContentComponentProps:function(){return null},guest:function(){return!1},subLayout:function(){return!1},subLayoutDrawer:function(){return!1},subLayoutDrawerId:function(){return"sub-layout-drawer"},subLayoutDrawerAlign:function(){return"end"}},created:function(){this.emitOptions()},methods:{emitOptions:function(){var n=this;["guest","subLayout","subLayoutDrawerId","subLayoutDrawerAlign","subLayoutDrawer","headerClass","headerEffects","headerImage","headerContentClass","headerCondenses","headerContentComponent","headerContentComponentProps"].map((function(option){void 0!==n[option]&&n.$root.$emit("luma::".concat(option),n[option])}))}}},o=e(11),component=Object(o.a)(r,void 0,void 0,!1,null,null,null);t.a=component.exports},918:function(n,t,e){"use strict";var r={extends:e(917).a,computed:{breadcrumb:function(){return[{text:"Home",to:"/"},{text:"Components",to:"/"},{text:this.title,active:!0}]}}},o=e(11),component=Object(o.a)(r,void 0,void 0,!1,null,null,null);t.a=component.exports}}]);