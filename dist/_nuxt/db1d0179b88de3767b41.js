(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{1064:function(t,e,r){"use strict";var n={props:{title:{type:String,required:!0},description:{type:String,required:!0}}},o=r(11),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card card--elevated"},[r("div",{staticClass:"card-body d-flex"},[t._m(0),t._v(" "),r("div",{staticClass:"flex"},[r("a",{staticClass:"card-title mb-8pt",attrs:{href:""}},[t._v(t._s(t.title))]),t._v(" "),r("p",{staticClass:"text-70 mb-0"},[t._v(t._s(t.description))])])]),t._v(" "),t._m(1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon-holder icon-holder--outline-muted rounded-circle d-inline-flex mr-16pt"},[e("i",{staticClass:"material-icons"},[this._v("question_answer")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-footer d-flex lh-1 px-16pt py-8pt"},[e("div",{staticClass:"flex text-muted"},[e("small",[this._v("7 people found this useful")])]),this._v(" "),e("a",{staticClass:"text-20",attrs:{href:"#"}},[e("i",{staticClass:"material-icons icon-16pt"},[this._v("thumb_up")])])])}],!1,null,null,null);e.a=component.exports},1092:function(t,e,r){"use strict";var n=r(991),o=r.n(n);e.default=o.a},1093:function(t,e,r){"use strict";var n=r(992),o=r.n(n);e.default=o.a},1181:function(t,e,r){"use strict";r.r(e);r(51);var n=r(17),o=r(917),c={components:{FaqCard:r(1064).a},extends:o.a,data:function(){return{title:this.$t("FAQ")}},computed:{guest:function(){return!0}},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.app,e.abrupt("return",{title:r.i18n.t("FAQ")});case 2:case"end":return e.stop()}}),e)})))()}},l=r(11),d=r(1092),f=r(1093),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("page-header",{attrs:{title:t.title,breadcrumb:t.breadcrumb,"container-class":t.containerClass}}),t._v(" "),r("div",{staticClass:"page-section"},[r("div",{class:t.containerClass},[r("div",{staticClass:"flex search-form form-control-rounded search-form--light mb-16pt",staticStyle:{"min-width":"200px"}},[r("b-form-input",{attrs:{placeholder:t.$t("Search articles")}}),t._v(" "),r("b-btn",{staticClass:"pr-3",attrs:{type:"submit",variant:"flush"}},[r("md-icon",{domProps:{textContent:t._s("search")}})],1)],1),t._v(" "),r("div",{staticClass:"mb-32pt d-flex align-items-center"},[r("small",{staticClass:"text-black-70 text-headings text-uppercase mr-3",domProps:{textContent:t._s(t.$t("results",{results:10,total:5234}))}}),t._v(" "),r("b-dropdown",{staticClass:"ml-auto",attrs:{text:t.$t("All Topics"),variant:"flush text-black-70",right:""}},[r("b-dropdown-item",{attrs:{active:""}},[t._v("All Topics")]),t._v(" "),r("b-dropdown-item",[t._v("General")]),t._v(" "),r("b-dropdown-item",[t._v("Lessons")]),t._v(" "),r("b-dropdown-item",[t._v("Customer Support")])],1)],1),t._v(" "),r("div",{staticClass:"row card-group-row"},[r("div",{staticClass:"col-md-6 card-group-row__col"},[r("faq-card",{staticClass:"card-group-row__card",attrs:{title:"Do you offer a free trial?",description:"We offer everyone a 7 day free trial! You can take advantage of it by visiting our sign-up page! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, ab!"}})],1),t._v(" "),r("div",{staticClass:"col-md-6 card-group-row__col"},[r("faq-card",{staticClass:"card-group-row__card",attrs:{title:"Can I gift a subscription to someone?",description:"Yes! We do offer certificates. Please email us for more information. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, ad!"}})],1),t._v(" "),r("div",{staticClass:"col-md-6 card-group-row__col"},[r("faq-card",{staticClass:"card-group-row__card",attrs:{title:"I have a great idea for an application or website, but need help on where to begin. Can you guys help me?",description:"We advise posting personal requests in our Community Forum Lorem ipsum dolor sit amet."}})],1),t._v(" "),r("div",{staticClass:"col-md-6 card-group-row__col"},[r("faq-card",{staticClass:"card-group-row__card",attrs:{title:"I found a bug. Where can I report that?",description:"In the unlikely situation you stumble across a bug, go ahead and shoot us an email. Lorem ipsum dolor sit amet"}})],1)]),t._v(" "),r("pager")],1)])],1)}),[],!1,null,null,null);"function"==typeof d.default&&Object(d.default)(component),"function"==typeof f.default&&Object(f.default)(component);e.default=component.exports},917:function(t,e,r){"use strict";var n={mixins:[r(43).a],layout:function(t){return t.store.getters.settings.layout.layout},head:function(){return{title:"".concat(this.$t(this.title)," - ").concat(this.$store.state.brand)}},data:function(){return{title:null,redirectLayout:!0}},computed:{breadcrumb:function(){return[{text:this.$t("Home"),to:this.localePath("/")},{text:this.$t(this.title),active:!0}]},headerClass:function(){return null},headerEffects:function(){return"waterfall"},headerImage:function(){return null},headerContentClass:function(){return null},headerCondenses:function(){return!1},headerContentComponent:function(){return null},headerContentComponentProps:function(){return null},guest:function(){return!1},subLayout:function(){return!1},subLayoutDrawer:function(){return!1},subLayoutDrawerId:function(){return"sub-layout-drawer"},subLayoutDrawerAlign:function(){return"end"}},created:function(){this.emitOptions()},methods:{emitOptions:function(){var t=this;["guest","subLayout","subLayoutDrawerId","subLayoutDrawerAlign","subLayoutDrawer","headerClass","headerEffects","headerImage","headerContentClass","headerCondenses","headerContentComponent","headerContentComponentProps"].map((function(option){void 0!==t[option]&&t.$root.$emit("luma::".concat(option),t[option])}))}}},o=r(11),component=Object(o.a)(n,void 0,void 0,!1,null,null,null);e.a=component.exports},991:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"results":"Displaying {results} out of {total} articles"}}'),delete t.options._Ctor}},992:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"ro":{"Search articles":"Căutare articole","All Topics":"Toate Subiectele","results":"Se afișează {results} din {total} articole"}}'),delete t.options._Ctor}}}]);