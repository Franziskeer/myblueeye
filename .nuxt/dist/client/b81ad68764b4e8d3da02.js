(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{1227:function(t,e,n){"use strict";n.r(e);var r={extends:n(918).a,data:function(){return{meta:{component:"BTabs",nav:["card_attached"]},title:"Tabs",code:'\n        <b-card no-body>\n          <b-tabs \n            nav-class="nav-tabs-card"\n            content-class="card-body">\n            <b-tab title="First">\n              // First tab content\n            </b-tab>\n            <b-tab title="Second">\n              // Second tab content\n            </b-tab>\n            <b-tab title="Third">\n              // Third tab content\n            </b-tab>\n          </b-tabs>\n        </b-card>\n      '}}},o=n(11),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("docs-page",{attrs:{meta:t.meta,title:t.title,breadcrumb:t.breadcrumb}},[n("b-card",{attrs:{id:"usage","no-body":""}},[n("b-tabs",{attrs:{"nav-class":"nav-tabs-card","content-class":"card-body"}},[n("b-tab",{attrs:{title:"First"}},[t._v("\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita consequatur porro molestias repudiandae a laboriosam ipsum cum architecto accusamus. Mollitia ratione officiis tenetur, vero voluptate atque aperiam deserunt ut eius.\n        ")]),t._v(" "),n("b-tab",{attrs:{title:"Second"}},[t._v("\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor earum veniam accusantium voluptatibus adipisci maxime nobis ea possimus rerum quos quae nostrum, consequuntur magnam omnis mollitia unde in, aut ad.\n        ")]),t._v(" "),n("b-tab",{attrs:{title:"Third"}},[t._v("\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde ad, laborum atque minus? Tempora nihil, explicabo optio eveniet. Deserunt est unde eius perspiciatis, minus sequi earum repudiandae eum, ex aut!\n        ")])],1)],1),t._v(" "),n("hljs",{staticClass:"card card-body bg-dark",attrs:{code:t.code}})],1)],1)}),[],!1,null,null,null);e.default=component.exports},917:function(t,e,n){"use strict";var r={mixins:[n(43).a],layout:function(t){return t.store.getters.settings.layout.layout},head:function(){return{title:"".concat(this.$t(this.title)," - ").concat(this.$store.state.brand)}},data:function(){return{title:null,redirectLayout:!0}},computed:{breadcrumb:function(){return[{text:this.$t("Home"),to:this.localePath("/")},{text:this.$t(this.title),active:!0}]},headerClass:function(){return null},headerEffects:function(){return"waterfall"},headerImage:function(){return null},headerContentClass:function(){return null},headerCondenses:function(){return!1},headerContentComponent:function(){return null},headerContentComponentProps:function(){return null},guest:function(){return!1},subLayout:function(){return!1},subLayoutDrawer:function(){return!1},subLayoutDrawerId:function(){return"sub-layout-drawer"},subLayoutDrawerAlign:function(){return"end"}},created:function(){this.emitOptions()},methods:{emitOptions:function(){var t=this;["guest","subLayout","subLayoutDrawerId","subLayoutDrawerAlign","subLayoutDrawer","headerClass","headerEffects","headerImage","headerContentClass","headerCondenses","headerContentComponent","headerContentComponentProps"].map((function(option){void 0!==t[option]&&t.$root.$emit("luma::".concat(option),t[option])}))}}},o=n(11),component=Object(o.a)(r,void 0,void 0,!1,null,null,null);e.a=component.exports},918:function(t,e,n){"use strict";var r={extends:n(917).a,computed:{breadcrumb:function(){return[{text:"Home",to:"/"},{text:"Components",to:"/"},{text:this.title,active:!0}]}}},o=n(11),component=Object(o.a)(r,void 0,void 0,!1,null,null,null);e.a=component.exports}}]);