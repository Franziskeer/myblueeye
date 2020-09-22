(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{1061:function(t,e,n){"use strict";var r={components:{LandingDemoLink:n(977).a},props:{item:{type:Object,required:!0}}},o=n(11),l={components:{LandingDemoCardItem:Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("landing-demo-link",{staticClass:"mb-8pt",attrs:{item:this.item}}),this._v(" "),e("div",{staticClass:"page-separator page-separator-demo mb-24pt"},[e("div",{staticClass:"page-separator__text bg-dark text-white",domProps:{textContent:this._s(this.item.title)}})])],1)}),[],!1,null,null,null).exports},props:{item:{type:Object,required:!0}}},c=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card bg-dark",attrs:{id:t.item.id}},[n("div",{staticClass:"card-header py-12pt"},[n("h4",{staticClass:"d-flex align-items-center justify-content-center m-0"},[n("img",{staticClass:"mr-8pt",attrs:{src:"/images/preview/icon/pages.png",alt:"Luma Education Template",width:"40"}}),t._v("\n      "+t._s(t.item.title)+"\n    ")])]),t._v(" "),n("div",{staticClass:"card-body p-24pt row align-items-center justify-content-center"},t._l(t.item.cols,(function(col,e){return n("div",{key:"landing-demo-card-item-"+e,class:[col.class?col.class:"col-md-6"]},[n("div",{staticClass:"row align-items-center",class:col.row_class},t._l(col.cols,(function(e,r){return n("div",{key:"landing-demo-card-item-subcol-"+r,class:[e.class?e.class:"col-sm"]},t._l(e.items,(function(t,e){return n("landing-demo-card-item",{key:"landing-demo-card-item-"+e,attrs:{item:t}})})),1)})),0)])})),0)])}),[],!1,null,null,null);e.a=c.exports},1198:function(t,e,n){"use strict";n.r(e);n(51);var r=n(17),o=n(917),l=n(966),c=n(1061),d=n(977),m={layout:"blank",components:{LandingPage:l.a,LandingDemoCard:c.a,LandingDemoLink:d.a},extends:o.a,data:function(){return{title:this.$t("Luma Vue Nuxt"),buyURL:null,docsURL:null,demos:[{id:"guest",title:"Guest Demo",cols:[{cols:[{items:[{title:"Home",src:"/images/preview/vue/home.png",alt:"Home Page - ".concat(this.title),demo_url:"/student/home"}]},{items:[{title:"Browse Courses",src:"/images/preview/vue/app-courses.png",alt:"Browse Courses - ".concat(this.title),demo_url:"/student/courses"},{title:"Browse Paths",src:"/images/preview/vue/app-paths.png",alt:"Browse Paths - ".concat(this.title),demo_url:"/student/paths"}]}]},{cols:[{items:[{title:"Course Preview",src:"/images/preview/vue/app-course.png",alt:"Course Preview - ".concat(this.title),demo_url:"/student/course"}]},{items:[{title:"Video Lesson",src:"/images/preview/vue/app-lesson.png",alt:"Video Lesson - ".concat(this.title),demo_url:"/student/lesson"},{title:"Pricing",src:"/images/preview/vue/app-pricing.png",alt:"Pricing - ".concat(this.title),demo_url:"/pricing"}]}]},{cols:[{items:[{title:"Blog",src:"/images/preview/vue/app-blog.png",alt:"Blog - ".concat(this.title),demo_url:"/community/blog-post"}]},{items:[{title:"Blog Post",src:"/images/preview/vue/app-blog-post.png",alt:"Blog Post - ".concat(this.title),demo_url:"/community/blog"}]}]}]},{id:"instructor",title:"Instructor Demo",cols:[{cols:[{items:[{title:"Instructor Dashboard",src:"/images/preview/vue/app-instructor-dashboard.png",alt:"Instructor Dashboard - ".concat(this.title),demo_url:"/instructor/dashboard"}]},{items:[{title:"Manage Courses",src:"/images/preview/vue/app-manage-courses.png",alt:"Manage Courses - ".concat(this.title),demo_url:"/instructor/courses"}]}]},{cols:[{items:[{title:"Edit Course",src:"/images/preview/vue/app-edit-course.png",alt:"Edit Course - ".concat(this.title),demo_url:"/instructor/edit-course"}]},{items:[{title:"Edit Quiz",src:"/images/preview/vue/app-edit-quiz.png",alt:"Edit Quiz - ".concat(this.title),demo_url:"/instructor/edit-quiz"}]}]},{cols:[{items:[{title:"Manage Quizzes",src:"/images/preview/vue/app-manage-quizzes.png",alt:"Manage Quizzes - ".concat(this.title),demo_url:"/instructor/quizzes"}]},{items:[{title:"Instructor Profile",src:"/images/preview/vue/app-instructor-profile.png",alt:"Instructor Profile - ".concat(this.title),demo_url:"/community/instructor-profile"}]}]},{cols:[{items:[{title:"Statement",src:"/images/preview/vue/app-statement.png",alt:"Instructor Statement - ".concat(this.title),demo_url:"/instructor/statement"}]},{items:[{title:"Earnings",src:"/images/preview/vue/app-earnings.png",alt:"Instructor Earnings - ".concat(this.title),demo_url:"/instructor/earnings"}]}]}]},{id:"student",title:"Student Demo",cols:[{cols:[{items:[{title:"Student Dashboard",src:"/images/preview/vue/app-student-dashboard.png",alt:"Student Dashboard - ".concat(this.title),demo_url:"/student/dashboard"},{title:"My Learning Paths",src:"/images/preview/vue/app-my-paths.png",alt:"My Learning Paths - ".concat(this.title),demo_url:"/student/paths"}]},{items:[{title:"My Courses",src:"/images/preview/vue/app-my-courses.png",alt:"My Courses - ".concat(this.title),demo_url:"/student/my-courses"}]}]},{cols:[{items:[{title:"Take Course",src:"/images/preview/vue/app-take-course.png",alt:"Take Course - ".concat(this.title),demo_url:"/student/take-course"}]},{items:[{title:"Take Lesson",src:"/images/preview/vue/app-take-lesson.png",alt:"Take Video Lesson - ".concat(this.title),demo_url:"/student/take-lesson"},{title:"Take Quiz",src:"/images/preview/vue/app-take-quiz.png",alt:"Take Quiz - ".concat(this.title),demo_url:"/student/take-quiz"},{title:"Quiz Result Details",src:"/images/preview/vue/app-quiz-result.png",alt:"Quiz Result Details - ".concat(this.title),demo_url:"/student/quiz-result"}]}]},{cols:[{items:[{title:"Skill Assessment",src:"/images/preview/vue/app-skill-assessment.png",alt:"Skill Assessment - ".concat(this.title),demo_url:"/student/skill-assessment"},{title:"Skill Result",src:"/images/preview/vue/app-skill-result.png",alt:"Skill Result - ".concat(this.title),demo_url:"/student/skill-result"}]},{items:[{title:"Take Path",src:"/images/preview/vue/app-take-path.png",alt:"Take Path - ".concat(this.title),demo_url:"/student/path"}]}]},{cols:[{items:[{title:"My Quizzes",src:"/images/preview/vue/app-my-quizzes.png",alt:"My Quizzes - ".concat(this.title),demo_url:"/student/my-quizzes"}]},{items:[{title:"Student Profile",src:"/images/preview/vue/app-student-profile.png",alt:"Student Profile - ".concat(this.title),demo_url:"/community/student-profile"}]}]}]},{id:"auth",title:"Authentication",cols:[{class:"col-lg-10",cols:[{items:[{title:"Login",src:"/images/preview/vue/login.png",alt:"Login - ".concat(this.title),demo_url:"/login"}]},{items:[{title:"Signup",src:"/images/preview/vue/signup.png",alt:"Signup - ".concat(this.title),demo_url:"/signup"}]},{items:[{title:"Forgot Password",src:"/images/preview/vue/forgot-password.png",alt:"Forgot Password - ".concat(this.title),demo_url:"/forgot-password"}]}]}]},{id:"account",title:"Account Management",cols:[{cols:[{items:[{title:"Edit Account",src:"/images/preview/vue/app-edit-account.png",alt:"Edit Account - ".concat(this.title),demo_url:"/account/edit/basic"}]},{items:[{title:"Edit Profile",src:"/images/preview/vue/app-edit-profile.png",alt:"Edit Profile - ".concat(this.title),demo_url:"/account/edit/profile"}]}]}]},{id:"billing",title:"Billing",cols:[{cols:[{items:[{title:"Billing",src:"/images/preview/vue/app-subscription.png",alt:"Billing - ".concat(this.title),demo_url:"/account/edit/subscription"}]},{items:[{title:"Upgrade Account",src:"/images/preview/vue/app-upgrade-account.png",alt:"Upgrade Account - ".concat(this.title),demo_url:"/account/edit/upgrade"}]}]},{cols:[{items:[{title:"Payment Information",src:"/images/preview/vue/app-payment-information.png",alt:"Payment Information - ".concat(this.title),demo_url:"/account/edit/payment-information"}]},{items:[{title:"Payment History",src:"/images/preview/vue/app-payment-history.png",alt:"Payment History - ".concat(this.title),demo_url:"/account/edit/payment-history"}]}]},{row_class:"justify-content-center",cols:[{class:"col-sm-6",items:[{title:"Invoice",src:"/images/preview/vue/app-invoice.png",alt:"Invoice - ".concat(this.title),demo_url:"/account/invoice"}]}]}]},{id:"messaging",title:"Messaging",cols:[{class:"col-sm-4",cols:[{class:"col",items:[{title:"Messages",src:"/images/preview/vue/app-messages.png",alt:"Messages - ".concat(this.title),demo_url:"/messages"}]}]}]}],layouts:[{id:"fixed",title:"Fixed Layout",src:"/images/preview/fixed-layout.png",demo_url:"/student/home"},{id:"default",title:"App Layout",src:"/images/preview/app-layout.png",demo_url:"/student/dashboard"},{id:"sticky",title:"Sticky Layout",src:"/images/preview/sticky-layout.png",demo_url:"/student/courses"},{id:"boxed",title:"Boxed Layout",src:"/images/preview/boxed-layout.png",demo_url:"/instructor/dashboard"}]}},watch:{buyURL:function(){this.$root.$emit("luma::setBuyURL",this.buyURL)},docsURL:function(){this.$root.$emit("luma::setDocsURL",this.docsURL)}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.app,e.abrupt("return",{title:n.i18n.t("Luma Vue Nuxt")});case 2:case"end":return e.stop()}}),e)})))()},created:function(){this.buyURL={href:"https://themeforest.net/item/luma-vue-nuxtjs-vuejs-learning-management-system-admin-template/27042844",title:this.title},this.docsURL={href:"/documentation",title:this.title}}},v=n(11),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("landing-page",{scopedSlots:t._u([{key:"header-content",fn:function(){return[n("div",{staticClass:"d-flex flex-column align-items-center justify-content-center mb-24pt"},[n("fmv-avatar",{staticClass:"mb-16pt",attrs:{title:!0,"title-class":"bg-dark",size:"xl","no-link":""}},[n("b-img",{staticClass:"img-fluid",attrs:{src:"/images/Vue.js_Logo_2.svg",alt:t.title}})],1),t._v(" "),n("h1",{staticClass:"text-white text-shadow mb-0",domProps:{textContent:t._s(t.title)}})],1),t._v(" "),n("p",{staticClass:"text-white text-shadow text-headings font-weight-normal measure-paragraph mx-auto"},[t._v("Aside the fact it's built entirely with Vue.js and Bootstrap Vue, Luma Vue is stacked on Nuxt.js - The Vue.js Framework. Nuxt.js presets all the configuration needed to make your development of a Vue.js application enjoyable.")]),t._v(" "),n("b-btn-group",{staticClass:"btn--raised"},[n("b-btn",{staticClass:"btn-rounded",attrs:{to:t.localePath("/student/home"),target:"_blank",size:"lg",variant:"white"},domProps:{textContent:t._s(t.$t("Vue Demo"))}}),t._v(" "),t.buyURL?n("b-btn",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.bottom",value:{title:t.buyURL.title},expression:"{ title: buyURL.title }",modifiers:{hover:!0,bottom:!0}}],staticClass:"btn-rounded",attrs:{href:t.buyURL.href,size:"lg",variant:"light"},domProps:{textContent:t._s(t.$t("Buy Now"))}}):t._e()],1)]},proxy:!0}])},[t._v(" "),n("div",{staticClass:"container-fluid page-section page__container bg-alt border-bottom-2"},[n("div",{staticClass:"mx-auto text-center",staticStyle:{"max-width":"850px"}},[n("page-separator",{staticClass:"mb-8pt",attrs:{title:"Vue & Nuxt Learning Management System",center:""}}),t._v(" "),n("p",{staticClass:"measure-lead-max mx-auto mb-24pt"},[t._v(t._s(t.title)+" is a beautifully crafted user interface for modern Education Platforms built in Vue.js and Nuxt. It includes Courses & Tutorials, Video Lessons, Student and Teacher Dashboard, Curriculum Management, Earnings and Reporting, ERP, HR, CMS, Tasks, Projects, eCommerce and more.")]),t._v(" "),n("div",{staticClass:"mx-auto",staticStyle:{"max-width":"590px"}},[n("landing-demo-link",{staticClass:"rounded position-relative o-hidden",attrs:{item:{src:"/images/preview/01_luma_vue.png",alt:t.title,demo_url:t.buyURL?t.buyURL.href:null,button:"Buy Now"}}})],1)],1)]),t._v(" "),n("div",{staticClass:"page-section page__container border-bottom-2"},[n("div",{staticClass:"container mx-auto text-center"},[n("page-headline",{attrs:{title:"Layouts",description:"Luma Vue includes several layouts, available for any page in the package. <strong>RTL Ready</strong> with a simple switch in the application settings.",center:""}}),t._v(" "),n("div",{staticClass:"row"},t._l(t.layouts,(function(e,r){return n("div",{key:"layout-"+r,staticClass:"col-md-6 col-lg-3"},[n("div",{staticClass:"mx-auto mb-24pt mb-lg-0",staticStyle:{"max-width":"272px"}},[n("h4",{staticClass:"card-title mb-8pt",domProps:{textContent:t._s(e.title)}}),t._v(" "),n("div",{staticClass:"mb-16pt"},[n("b-btn",{attrs:{to:e.demo_url+"#fm:layout.layout="+e.id+"&layout.rtl=false",target:"_blank",variant:"dark",size:"sm"},domProps:{textContent:t._s(e.title)}}),t._v(" "),n("b-btn",{attrs:{to:e.demo_url+"#fm:layout.layout="+e.id+"&layout.rtl=true",target:"_blank",variant:"dark",size:"sm"},domProps:{textContent:t._s("RTL")}})],1),t._v(" "),n("landing-demo-link",{staticClass:"rounded position-relative o-hidden",attrs:{item:{src:e.src,alt:e.title,demo_url:e.demo_url+"#fm:layout.layout="+e.id+"&layout.rtl=false"}}})],1)])})),0)],1)]),t._v(" "),n("div",{staticClass:"container-fluid page-section page__container bg-alt border-bottom-2"},[n("div",{staticClass:"mx-auto",staticStyle:{"max-width":"850px"}},t._l(t.demos,(function(t){return n("landing-demo-card",{key:t.id,attrs:{item:t}})})),1)])])}),[],!1,null,null,null);e.default=component.exports},917:function(t,e,n){"use strict";var r={mixins:[n(43).a],layout:function(t){return t.store.getters.settings.layout.layout},head:function(){return{title:"".concat(this.$t(this.title)," - ").concat(this.$store.state.brand)}},data:function(){return{title:null,redirectLayout:!0}},computed:{breadcrumb:function(){return[{text:this.$t("Home"),to:this.localePath("/")},{text:this.$t(this.title),active:!0}]},headerClass:function(){return null},headerEffects:function(){return"waterfall"},headerImage:function(){return null},headerContentClass:function(){return null},headerCondenses:function(){return!1},headerContentComponent:function(){return null},headerContentComponentProps:function(){return null},guest:function(){return!1},subLayout:function(){return!1},subLayoutDrawer:function(){return!1},subLayoutDrawerId:function(){return"sub-layout-drawer"},subLayoutDrawerAlign:function(){return"end"}},created:function(){this.emitOptions()},methods:{emitOptions:function(){var t=this;["guest","subLayout","subLayoutDrawerId","subLayoutDrawerAlign","subLayoutDrawer","headerClass","headerEffects","headerImage","headerContentClass","headerCondenses","headerContentComponent","headerContentComponentProps"].map((function(option){void 0!==t[option]&&t.$root.$emit("luma::".concat(option),t[option])}))}}},o=n(11),component=Object(o.a)(r,void 0,void 0,!1,null,null,null);e.a=component.exports},923:function(t,e,n){(function(t){t.handler.register("overlay",()=>({properties:{overlayOnloadShow:{type:Boolean,reflectToAttribute:!0},trigger:{value:"hover",reflectToAttribute:!0}},observers:["_onChange(shown)"],listeners:["_onEnter(mouseenter, touchstart)","_onLeave(mouseleave, touchend)","_onClick(click)"],show(){this.shown=!0},hide(){this.shown=!1},toggle(){this.shown=!this.shown},_onChange(){if(this.shown)return this.element.classList.add("overlay--show");this.element.classList.remove("overlay--show")},_onEnter(){"hover"===this.trigger&&this.show()},_onLeave(){"hover"===this.trigger&&this.hide()},_onClick(){"click"===this.trigger&&this.toggle()},init(){"ontouchstart"in window&&this.element.classList.add("overlay--duserselect")},_reset(){this.overlayOnloadShow&&!this.shown&&this.show()}}))}).call(this,n(25))},966:function(t,e,n){"use strict";var r=n(13),o=n(168),l=n(43),c={mixins:[o.a,l.a],props:{guest:{type:Boolean},navbarClass:{type:String,default:""},navbarType:{type:String,default:"dark"},navbarToggleClass:{type:String,default:null},navbarBrandClass:{type:String,default:null}},data:function(){return{buyURL:null,docsURL:null}},computed:{ctaClass:function(){return"dark"===this.navbarType?"outline-white":"outline-dark"},brandImage:function(){return"/images/illustration/student/128/white.svg"},navbarConfigKey:function(){return this.$store.getters.settings.mainNavbar.navbar}},created:function(){var t=this;this.$root.$on("luma::setBuyURL",(function(e){return t.buyURL=e})),this.$root.$on("luma::setDocsURL",(function(e){return t.docsURL=e}))}},d=n(11),m=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-navbar",{staticClass:"px-0",class:t.navbarClass,attrs:{id:"default-navbar",type:t.navbarType,variant:" navbar-dark-dodger-blue will-fade-background"}},[n("div",{class:t.navbarContainerClass},[n("b-navbar-brand",{class:t.navbarBrandClass,attrs:{to:"/"}},[n("fmv-avatar",{staticClass:"navbar-brand-icon mr-0 mr-lg-8pt",attrs:{title:!0,"title-class":"bg-primary",size:"sm","no-link":""}},[n("b-img",{staticClass:"img-fluid",attrs:{src:t.brandImage,width:"40",alt:t.$store.state.brand}})],1),t._v(" "),n("span",{staticClass:"d-none d-lg-block",domProps:{textContent:t._s(t.$store.state.brand)}})],1),t._v(" "),n("b-navbar-nav",{staticClass:"flex justify-content-start",attrs:{id:"default-nav"}},[n("b-nav-item",{attrs:{to:t.localePath("landing-luma-vue-nuxt")}},[n("img",{staticClass:"mr-2",attrs:{src:"/images/Vue.js_Logo_2.svg",alt:"Vue Nuxt",width:"24"}}),t._v(" "),n("strong",[t._v("Vue")])]),t._v(" "),n("b-nav-item",{attrs:{to:t.localePath("landing-luma-bootstrap-html")}},[n("img",{staticClass:"mr-2",attrs:{src:"/images/logo/bootstrap.svg",alt:"Bootstrap",width:"24"}}),t._v(" "),n("strong",[t._v("Bootstrap")])]),t._v(" "),t._e()],1),t._v(" "),t.docsURL||t.buyURL?n("b-navbar-nav",{staticClass:"ml-auto mr-0"},[[t.docsURL?n("b-nav-item",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.bottom",value:{title:t.$t(t.docsURL.title+" Documentation")},expression:"{ title: $t(`${docsURL.title} Documentation`) }",modifiers:{hover:!0,bottom:!0}}],attrs:{href:t.docsURL.href,target:"_blank"}},[n("md-icon",[t._v("help_outline")])],1):t._e(),t._v(" "),t.buyURL?n("li",{staticClass:"nav-item"},[n("b-btn",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.bottom",value:{title:t.$t(t.buyURL.title)},expression:"{ title: $t(buyURL.title) }",modifiers:{hover:!0,bottom:!0}}],attrs:{href:t.buyURL.href,target:"_blank",variant:t.ctaClass}},[t._v("\n            "+t._s(t.$t("Buy"))+" "),n("span",{staticClass:"d-none d-sm-inline-block ml-4pt"},[t._v(t._s(t.$t("Now")))])])],1):t._e()]],2):t._e()],1)])}),[],!1,null,null,null).exports,v=(n(65),n(50)),h=n(66),f={components:{FmvHeaderLayout:r.e,AppNavbar:m,AppFooter:h.a},mixins:[v.a,l.a],head:{bodyAttrs:{class:"layout-fixed"}},data:function(){return{navbarClass:{"bg-transparent":!0}}},methods:{handleScroll:function(t){this.navbarClass["bg-transparent"]=t.progress<=.2}}},_=Object(d.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("fmv-header-layout",{attrs:{"content-id":"header-layout-content","content-class":"page-content","header-effects":"parallax-background waterfall","header-image":"/images/photodune-4161018-group-of-students-m.jpg","header-class":"mdk-header--bg-dark bg-dark mb-0","header-content-class":"justify-content-center","header-condenses":"","header-fixed":""},on:{"header-target-scroll":function(e){return t.handleScroll(e)}}},[n("template",{slot:"header"},[n("app-navbar",{class:t.navbarClass,attrs:{"data-primary":""}}),t._v(" "),n("div",{staticClass:"text-center py-112pt flex-column align-items-center justify-content-center",class:t.containerClass},[t._t("header-content",[n("div",{staticClass:"d-flex flex-column align-items-center justify-content-center mb-24pt"},[n("fmv-avatar",{staticClass:"mb-16pt",attrs:{title:!0,"title-class":"bg-primary",size:"xl",to:"/"}},[n("b-img",{staticClass:"img-fluid",attrs:{src:"/images/illustration/student/128/white.svg",alt:"Luma Vue Nuxt"}})],1),t._v(" "),n("h1",{staticClass:"text-white text-shadow mb-4pt",domProps:{textContent:t._s("Luma Education Platform")}}),t._v(" "),n("b-form-rating",{staticClass:"b-rating-inline",attrs:{value:"5",variant:"rating",size:"lg",readonly:"",inline:"","no-border":""}})],1),t._v(" "),n("p",{staticClass:"text-white text-shadow text-headings font-weight-normal measure-paragraph mx-auto mb-4pt"},[t._v("“ Incredible value for a fraction of what would cost to commission an advanced UI/UX for any modern Education Platform with tools for Enterprise Resource Planning and for Teachers to bring their knowledge online „")]),t._v(" "),n("p",{staticClass:"text-white text-headings mb-0"},[n("small",[t._v("— Laza Bogdan @ FrontendMatter")])])])],2)],1),t._v(" "),t._t("default"),t._v(" "),n("app-footer",{staticClass:"bg-white",attrs:{"container-class":t.containerClass}})],2)],1)}),[],!1,null,null,null);e.a=_.exports},977:function(t,e,n){"use strict";var r=n(25),o=(n(923),{props:{item:{type:Object,required:!0}},beforeDestroy:function(){r.handler.downgradeElement(this.$el,"overlay")},mounted:function(){var t=this;this.$nextTick((function(){r.handler.upgradeElement(t.$el,"overlay")}))}}),l=n(11),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"d-block overlay",attrs:{target:!1!==t.item.target?t.item.target||"_blank":null,href:t.item.demo_url}},[n("img",{staticClass:"img-fluid",attrs:{src:t.item.src,alt:t.item.alt}}),t._v(" "),n("span",{staticClass:"overlay__content"},[t.item.demo_url&&!1!==t.item.button?n("span",{staticClass:"btn btn-accent btn-rounded btn--raised overlay__action",domProps:{textContent:t._s(t.item.button||"Demo")}}):t._e()])])}),[],!1,null,null,null);e.a=component.exports}}]);