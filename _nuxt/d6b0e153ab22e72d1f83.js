(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{1025:function(t,e,n){"use strict";var r=n(961),o=n.n(r);e.default=o.a},1052:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"ro":{"Discussions":"Discuții","Ask a Question":"Pune o Întrebare","See all discussions for this lesson":"Vezi toate discuțiile pentru această lecție"}}'),delete t.options._Ctor}},1062:function(t,e,n){"use strict";var r=n(25),o=function(){return{listeners:["button.onClick(click)"],get button(){return this.element.querySelector(".player__content")},play:function(){this.element.querySelector(".player__embed").classList.remove("d-none"),this.element.querySelector(".player__embed iframe").src+="&autoplay=1"},onClick:function(t){t.preventDefault(),this.play()}}};r.handler.register("player",o),r.handler.register("player",o);var l={props:{src:{type:String,required:!0},image:{type:String,required:!0}},mounted:function(){var t=this;this.$nextTick((function(){r.handler.upgradeElement(t.$el,"player")}))},beforeDestroy:function(){r.handler.downgradeElement(this.$el,"player")},methods:{play:function(){this.$el.player&&this.$el.player.play()}}},c=n(11),component=Object(c.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"embed-responsive embed-responsive-16by9 mb-32pt"},[e("div",{staticClass:"player embed-responsive-item"},[e("div",{staticClass:"player__content"},[e("div",{staticClass:"player__image",style:"--player-image: url("+this.image+")"}),this._v(" "),e("b-link",{staticClass:"player__play bg-primary"},[e("md-icon",{domProps:{textContent:this._s("play_arrow")}})],1)],1),this._v(" "),e("div",{staticClass:"player__embed d-none"},[e("iframe",{staticClass:"embed-responsive-item",attrs:{src:this.src,allowfullscreen:""}})])])])}),[],!1,null,null,null);e.a=component.exports},1071:function(t,e,n){"use strict";var r={mixins:[n(43).a]},o=n(11),l=n(1025),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-navbar",{staticClass:"border-0",attrs:{type:"light"}},[n("div",{class:t.containerClass},[n("nav",{staticClass:"nav navbar-nav"},[n("div",{staticClass:"nav-item py-16pt py-sm-0"},[n("b-media",{staticClass:"flex-nowrap",scopedSlots:t._u([{key:"aside",fn:function(){return[n("b-link",{attrs:{to:t.localePath("student-course")}},[n("img",{staticClass:"rounded",attrs:{src:"/images/paths/angular_64x64.png",width:"40",alt:"Angular"}})])]},proxy:!0}])},[t._v(" "),n("b-link",{staticClass:"card-title text-body mb-0",attrs:{to:t.localePath("student-course")},domProps:{textContent:t._s("Angular Fundamentals")}}),t._v(" "),n("p",{staticClass:"lh-1 d-flex align-items-center mb-0"},[n("span",{staticClass:"text-50 small font-weight-bold mr-8pt"},[t._v("Elijah Murray")]),t._v(" "),n("span",{staticClass:"text-50 small"},[t._v("Software Engineer and Developer")])])],1)],1)]),t._v(" "),n("b-navbar-nav",{staticClass:"ml-sm-auto align-items-center align-items-sm-end d-none d-lg-flex"},[n("b-nav-item",{staticClass:"active ml-sm-16pt"},[t._v(t._s(t.$t("Video")))]),t._v(" "),n("b-nav-item",[t._v(t._s(t.$t("Downloads")))]),t._v(" "),n("b-nav-item",[t._v(t._s(t.$t("Notes")))]),t._v(" "),n("b-nav-item",[t._v(t._s(t.$t("Discussions")))])],1)],1)])}),[],!1,null,null,null);"function"==typeof l.default&&Object(l.default)(component);e.a=component.exports},1144:function(t,e,n){"use strict";var r=n(1052),o=n.n(r);e.default=o.a},1171:function(t,e,n){"use strict";n.r(e);n(51);var r=n(17),o=n(917),l=n(1071),c={components:{Discussions:n(968).a},props:{pager:{type:Boolean}},data:function(){return{perPage:3,currentPage:1,items:[{avatarTitle:"LB",date:2,name:"Laza Bogdan",title:"Using Angular HttpClientModule instead of HttpModule",chips:["Angular fundamentals"],answers:2},{avatarTitle:"AC",date:3,name:"Adam Curtis",title:"Why am I getting an error when trying to install angular/http@2.4.2",answers:1}]}}},d=n(11),m=n(1144),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"d-flex align-items-center mb-heading"},[n("h4",{staticClass:"m-0",domProps:{textContent:t._s(t.$t("Discussions"))}}),t._v(" "),n("b-link",{staticClass:"text-underline ml-auto",attrs:{to:t.localePath("discussions-ask")},domProps:{textContent:t._s(t.$t("Ask a Question"))}})],1),t._v(" "),n("div",{staticClass:"border-top"},[n("discussions",{attrs:{id:"discussions-table",items:t.items,"per-page":t.perPage,"current-page":t.currentPage}}),t._v(" "),t.pager?n("pager",{attrs:{"total-rows":t.rows,"per-page":t.perPage,items:t.items,"aria-controls":"discussions-table"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}}):n("b-btn",{attrs:{to:t.localePath("discussions"),variant:"outline-secondary"},domProps:{textContent:t._s(t.$t("See all discussions for this lesson"))}})],1)])}),[],!1,null,null,null);"function"==typeof m.default&&Object(m.default)(component);var v=component.exports,h=n(1062),f={components:{LessonNavbar:l.a,LessonDiscussions:v,Player:h.a},extends:o.a,data:function(){return{title:this.$t("Take Lesson")}},computed:{headerClass:function(){return"mb-0"}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.app,e.abrupt("return",{title:n.i18n.t("Take Lesson")});case 2:case"end":return e.stop()}}),e)})))()}},_=Object(d.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("lesson-navbar"),t._v(" "),n("div",{staticClass:"bg-primary pb-lg-64pt py-32pt"},[n("div",{class:t.containerClass},[n("nav",{staticClass:"course-nav"},[n("b-link",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.bottom",value:{title:"Getting Started with Angular: Introduction"},expression:"{ title: 'Getting Started with Angular: Introduction' }",modifiers:{hover:!0,bottom:!0}}],attrs:{to:t.localePath("student-take-lesson")}},[n("md-icon",{domProps:{textContent:t._s("check_circle")}})],1),t._v(" "),n("b-link",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.bottom",value:{title:"Getting Started with Angular: Introduction to TypeScript"},expression:"{ title: 'Getting Started with Angular: Introduction to TypeScript' }",modifiers:{hover:!0,bottom:!0}}],attrs:{to:t.localePath("student-take-lesson")}},[n("md-icon",{domProps:{textContent:t._s("account_circle")}})],1),t._v(" "),n("b-link",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.bottom",value:{title:"Getting Started with Angular: Comparing Angular to AngularJS"},expression:"{ title: 'Getting Started with Angular: Comparing Angular to AngularJS' }",modifiers:{hover:!0,bottom:!0}}],attrs:{to:t.localePath("student-take-lesson")}},[n("md-icon",{domProps:{textContent:t._s("play_circle_outline")}})],1),t._v(" "),n("b-link",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.bottom",value:{title:"Getting Started with Angular: Lesson 4"},expression:"{ title: 'Getting Started with Angular: Lesson 4' }",modifiers:{hover:!0,bottom:!0}}],attrs:{to:t.localePath("student-take-quiz")}},[n("md-icon",{domProps:{textContent:t._s("hourglass_empty")}})],1)],1),t._v(" "),n("player",{ref:"player",attrs:{image:"/images/illustration/player.svg",src:"https://player.vimeo.com/video/97243285?title=0&byline=0&portrait=0"}}),t._v(" "),t._m(0),t._v(" "),n("p",{staticClass:"hero__lead measure-hero-lead text-white-50 mb-24pt"},[t._v("JavaScript is now used to power backends, create hybrid mobile applications, architect cloud solutions, design neural networks and even control robots. Enter TypeScript: a superset of JavaScript for scalable, secure, performant and feature-rich applications.")]),t._v(" "),n("div",{staticClass:"d-flex flex-column flex-sm-row align-items-center justify-content-start"},[t.$refs.player?n("b-btn",{staticClass:"mb-16pt mb-sm-0 mr-sm-16pt",attrs:{variant:"outline-white"},on:{click:t.$refs.player.play}},[t._v("\n          "+t._s(t.$t("Watch trailer"))+"\n          "),n("md-icon",{attrs:{right:""},domProps:{textContent:t._s("play_circle_outline")}})],1):t._e(),t._v(" "),n("b-btn",{attrs:{to:t.localePath("pricing"),variant:"white"},domProps:{textContent:t._s(t.$t("Get started"))}})],1)],1)]),t._v(" "),n("div",{staticClass:"page-section"},[n("div",{class:t.containerClass},[n("lesson-discussions")],1)])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"d-flex flex-wrap align-items-end mb-16pt"},[e("h1",{staticClass:"text-white flex m-0"},[this._v("Introduction to TypeScript")]),this._v(" "),e("p",{staticClass:"h1 text-white-50 font-weight-light m-0"},[this._v("50:13")])])}],!1,null,null,null);e.default=_.exports},917:function(t,e,n){"use strict";var r={mixins:[n(43).a],layout:function(t){return t.store.getters.settings.layout.layout},head:function(){return{title:"".concat(this.$t(this.title)," - ").concat(this.$store.state.brand)}},data:function(){return{title:null,redirectLayout:!0}},computed:{breadcrumb:function(){return[{text:this.$t("Home"),to:this.localePath("/")},{text:this.$t(this.title),active:!0}]},headerClass:function(){return null},headerEffects:function(){return"waterfall"},headerImage:function(){return null},headerContentClass:function(){return null},headerCondenses:function(){return!1},headerContentComponent:function(){return null},headerContentComponentProps:function(){return null},guest:function(){return!1},subLayout:function(){return!1},subLayoutDrawer:function(){return!1},subLayoutDrawerId:function(){return"sub-layout-drawer"},subLayoutDrawerAlign:function(){return"end"}},created:function(){this.emitOptions()},methods:{emitOptions:function(){var t=this;["guest","subLayout","subLayoutDrawerId","subLayoutDrawerAlign","subLayoutDrawer","headerClass","headerEffects","headerImage","headerContentClass","headerCondenses","headerContentComponent","headerContentComponentProps"].map((function(option){void 0!==t[option]&&t.$root.$emit("luma::".concat(option),t[option])}))}}},o=n(11),component=Object(o.a)(r,void 0,void 0,!1,null,null,null);e.a=component.exports},940:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"ro":{"answers":"răspuns | răspunsuri"}}'),delete t.options._Ctor}},955:function(t,e,n){"use strict";var r=n(940),o=n.n(r);e.default=o.a},961:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"ro":{"Downloads":"Descărcări","Notes":"Notițe","Discussions":"Discuții"}}'),delete t.options._Ctor}},968:function(t,e,n){"use strict";var r={props:{items:{type:Array,default:function(){return[]}}},computed:{localItems:function(){var t=this;return this.items.map((function(e){return e.date_for_humans=t.$t("diff_for_humans",{when:t.$tc("datetime_units.day",e.date,{value:e.date})}),e}))}}},o=n(11),l=n(955),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-list-group",{staticClass:"border-0",attrs:{flush:""}},t._l(t.localItems,(function(e){return n("b-list-group-item",{key:e.id,staticClass:"p-3"},[n("div",{staticClass:"row align-items-start"},[n("div",{staticClass:"col-md-3 mb-8pt mb-md-0"},[n("div",{staticClass:"media align-items-center"},[n("div",{staticClass:"media-left mr-12pt"},[n("fmv-avatar",{attrs:{to:t.localePath("community-student-profile"),title:e.avatarTitle,src:e.avatar,size:"sm",circle:""}})],1),t._v(" "),n("div",{staticClass:"d-flex flex-column media-body media-middle"},[n("b-link",{staticClass:"card-title",attrs:{to:t.localePath("community-student-profile")},domProps:{textContent:t._s(e.name)}}),t._v(" "),n("small",{staticClass:"text-muted",domProps:{textContent:t._s(e.date_for_humans)}})],1)])]),t._v(" "),n("div",{staticClass:"col mb-8pt mb-md-0"},[n("p",{class:{"mb-8pt":!!e.chips,"mb-0":!e.chips}},[n("b-link",{staticClass:"text-body",attrs:{to:t.localePath("community-discussion")}},[n("strong",[t._v(t._s(e.title))])])],1),t._v(" "),e.chips?t._l(e.chips,(function(e){return n("b-link",{key:e.id,staticClass:"chip chip-outline-secondary",attrs:{to:t.localePath("community-discussion"),exact:""}},[t._v(t._s(e))])})):t._e()],2),t._v(" "),n("div",{staticClass:"col-auto d-flex flex-column align-items-center justify-content-center"},[n("h5",{staticClass:"m-0"},[t._v(t._s(e.answers||1))]),t._v(" "),n("p",{staticClass:"lh-1 mb-0 small text-70",domProps:{textContent:t._s(t.$tc("answers",e.answers||1))}})])])])})),1)}),[],!1,null,null,null);"function"==typeof l.default&&Object(l.default)(component);e.a=component.exports}}]);