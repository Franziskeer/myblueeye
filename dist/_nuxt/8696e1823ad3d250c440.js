(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{1063:function(t,e,n){"use strict";var o={props:{title:{type:String,default:null},description:{type:String,default:null},price:{type:String,default:null},color:{type:String,default:"accent"},icon:{type:String,default:null},iconColor:{type:String,default:null},raised:{type:Boolean,default:!1},ribbon:{type:String,default:null},action:{type:String,default:"Get started"},actionColor:{type:String,default:null},actionDisabled:{type:Boolean,default:!1}},computed:{localIconColor:function(){return this.iconColor||"outline-".concat(this.color)},localActionColor:function(){return this.actionColor||this.color},iconClass:function(){return"icon-holder--".concat(this.localIconColor)}}},r=n(11),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card card-group-row__card text-center o-hidden",class:{"card--raised":t.raised}},[t.ribbon?n("span",{staticClass:"corner-ribbon corner-ribbon--default-right-top corner-ribbon--shadow bg-accent text-white",domProps:{textContent:t._s(t.ribbon)}}):t._e(),t._v(" "),n("div",{staticClass:"card-body d-flex flex-column"},[n("div",{staticClass:"flex-grow-1 mb-16pt"},[n("span",{staticClass:"w-64 h-64 icon-holder rounded-circle d-inline-flex mb-16pt",class:t.iconClass},[n("md-icon",{domProps:{textContent:t._s(t.icon)}})],1),t._v(" "),n("h4",{staticClass:"mb-8pt"},[t._v(t._s(t.$t(t.title)))]),t._v(" "),n("p",{staticClass:"text-black-70"},[t._v(t._s(t.$t(t.description)))])]),t._v(" "),n("p",{staticClass:"d-flex justify-content-center align-items-center m-0"},[n("span",{staticClass:"h4 m-0 font-weight-normal"},[t._v("$")]),t._v(" "),n("span",{staticClass:"h1 m-0 font-weight-normal"},[t._v(t._s(t.price))]),t._v(" "),n("span",{staticClass:"h4 m-0 font-weight-normal"},[t._v("/ "+t._s(t.$t("month")))])]),t._v(" "),n("p",{staticClass:"lh-1 text-muted"},[n("small",[t._v(t._s(t.$t("after the free trial ends")))])])]),t._v(" "),n("div",{staticClass:"card-footer"},[n("b-btn",{attrs:{to:t.localePath("signup"),variant:t.localActionColor,disabled:t.actionDisabled},domProps:{textContent:t._s(t.$t(t.action))}})],1)])}),[],!1,null,null,null);e.a=component.exports},1212:function(t,e,n){"use strict";n.r(e);var o=n(917),r=n(943),c=n(947),l=n(1063),d={components:{EditAccountPage:r.a,PricingCard:l.a},extends:o.a,mixins:[c.a],data:function(){return{title:"Upgrade Account"}},computed:{headerClass:function(){return"mb-0"}}},h=n(11),component=Object(h.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("edit-account-page",{attrs:{title:this.title,nav:this.nav,"no-save":""}},[e("div",{staticClass:"row card-group-row mb-40pt"},[e("div",{staticClass:"col-lg-6 col-sm-6 card-group-row__col"},[e("pricing-card",{attrs:{title:"Student",description:"Access to over 1.000 high quality courses. For individuals.",price:"9",color:"secondary","action-color":"outline-secondary",action:"Current plan","action-disabled":"",icon:"person"}})],1),this._v(" "),e("div",{staticClass:"col-lg-6 col-sm-6 card-group-row__col"},[e("pricing-card",{attrs:{title:"Team",description:"Starts with 3 accounts with more seats available.",price:"19",color:"accent",raised:"",icon:"group"}})],1)])])}),[],!1,null,null,null);e.default=component.exports},917:function(t,e,n){"use strict";var o={mixins:[n(43).a],layout:function(t){return t.store.getters.settings.layout.layout},head:function(){return{title:"".concat(this.$t(this.title)," - ").concat(this.$store.state.brand)}},data:function(){return{title:null,redirectLayout:!0}},computed:{breadcrumb:function(){return[{text:this.$t("Home"),to:this.localePath("/")},{text:this.$t(this.title),active:!0}]},headerClass:function(){return null},headerEffects:function(){return"waterfall"},headerImage:function(){return null},headerContentClass:function(){return null},headerCondenses:function(){return!1},headerContentComponent:function(){return null},headerContentComponentProps:function(){return null},guest:function(){return!1},subLayout:function(){return!1},subLayoutDrawer:function(){return!1},subLayoutDrawerId:function(){return"sub-layout-drawer"},subLayoutDrawerAlign:function(){return"end"}},created:function(){this.emitOptions()},methods:{emitOptions:function(){var t=this;["guest","subLayout","subLayoutDrawerId","subLayoutDrawerAlign","subLayoutDrawer","headerClass","headerEffects","headerImage","headerContentClass","headerCondenses","headerContentComponent","headerContentComponentProps"].map((function(option){void 0!==t[option]&&t.$root.$emit("luma::".concat(option),t[option])}))}}},r=n(11),component=Object(r.a)(o,void 0,void 0,!1,null,null,null);e.a=component.exports},920:function(t,e,n){},921:function(t,e,n){},941:function(t,e,n){"use strict";var o=n(920);n.n(o).a},942:function(t,e,n){"use strict";var o=n(921);n.n(o).a},943:function(t,e,n){"use strict";var o={components:{FmvPerfectScrollbar:n(13).f},props:{title:{type:String,default:null},nav:{type:Array,required:!0},noSave:{type:Boolean,default:!1}},computed:{layoutConfig:function(){return this.$store.state.layoutConfig[this.$root.layoutName]},containerClass:function(){return this.layoutConfig.containerClass},breadcrumb:function(){return[{text:this.$t("Home"),to:this.localePath("index")},{text:this.$t("Edit Account"),active:!0}]}}},r=(n(941),n(942),n(11)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.containerClass},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg page__container pb-32pt"},[n("page-header",{staticClass:"mb-32pt",attrs:{title:t.$t(t.title),breadcrumb:t.breadcrumb,"container-class":null}}),t._v(" "),t._t("default")],2),t._v(" "),n("div",{staticClass:"col-lg-auto page-nav",attrs:{id:"page-nav"}},[n("fmv-perfect-scrollbar",{attrs:{"wheel-propagation":""}},[n("div",{staticClass:"page-section pt-lg-32pt"},[n("b-nav",{staticClass:"page-nav__menu"},t._l(t.nav,(function(e,o){return n("li",{key:"page-nav-"+o,staticClass:"nav-item"},[n("b-link",{staticClass:"nav-link",attrs:{to:e.route,exact:""},domProps:{textContent:t._s(e.label)}})],1)})),0),t._v(" "),t.noSave?t._e():n("div",{staticClass:"page-nav__content"},[n("b-btn",{attrs:{variant:"accent"},domProps:{textContent:t._s(t.$t("Save Changes"))}})],1)],1)])],1)])])}),[],!1,null,"4e4d194c",null);e.a=component.exports},947:function(t,e,n){"use strict";e.a={data:function(){return{nav:[{label:this.$t("Subscription"),route:this.localePath("account-edit-subscription")},{label:this.$t("Upgrade Account"),route:this.localePath("account-edit-upgrade")},{label:this.$t("Payment Information"),route:this.localePath("account-edit-payment-information")},{label:this.$t("Payment History"),route:this.localePath("account-edit-payment-history")},{label:this.$t("Invoice"),route:this.localePath("account-invoice")}]}}}}}]);