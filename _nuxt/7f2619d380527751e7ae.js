(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{1027:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"minutes_left":"{minutes} minutes left","lessons":"{lessons} lessons"}}'),delete t.options._Ctor}},1028:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"ro":{"Resume":"Continuă","Start over":"Reîncepe","Your rating":"Evaluarea ta","with":"cu","minutes_left":"{minutes} minute rămase","lessons":"{lessons} lecții"}}'),delete t.options._Ctor}},1123:function(t,e,n){"use strict";var l=n(1027),r=n.n(l);e.default=r.a},1124:function(t,e,n){"use strict";var l=n(1028),r=n.n(l);e.default=r.a},1161:function(t,e,n){"use strict";n.r(e);n(51);var l=n(17),r=n(917),o=n(11),c=n(1123),m=n(1124),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"card"},[n("img",{staticClass:"card-img",staticStyle:{"max-height":"100%",width:"initial"},attrs:{src:"/images/paths/typescript_892x286.png",alt:"TypeScript"}}),t._v(" "),n("div",{staticClass:"fullbleed bg-primary",staticStyle:{opacity:".5"}}),t._v(" "),n("img",{staticClass:"rounded position-absolute",staticStyle:{right:"1rem",top:"1rem"},attrs:{src:"/images/paths/typescript_64x64.svg",width:"64",alt:"Instruduction to TypeScript"}}),t._v(" "),n("div",{staticClass:"card-body d-flex align-items-center justify-content-center fullbleed"},[n("div",[n("h2",{staticClass:"text-white mb-16pt"},[t._v("Introduction to TypeScript")]),t._v(" "),n("div",{staticClass:"d-flex align-items-center mb-16pt justify-content-center"},[n("div",{staticClass:"d-flex align-items-center mr-16pt"},[n("span",{staticClass:"material-icons icon-16pt text-white-50 mr-4pt"},[t._v("access_time")]),t._v(" "),n("p",{staticClass:"flex text-white-50 lh-1 mb-0",domProps:{textContent:t._s(t.$t("minutes_left",{minutes:50}))}})]),t._v(" "),n("div",{staticClass:"d-flex align-items-center"},[n("span",{staticClass:"material-icons icon-16pt text-white-50 mr-4pt"},[t._v("play_circle_outline")]),t._v(" "),n("p",{staticClass:"flex text-white-50 lh-1 mb-0",domProps:{textContent:t._s(t.$t("lessons",{lessons:12}))}})])]),t._v(" "),n("div",{staticClass:"d-flex align-items-center justify-content-center"},[n("b-btn",{staticClass:"mr-8pt",attrs:{to:t.localePath("student-take-lesson"),variant:"white"},domProps:{textContent:t._s(t.$t("Resume"))}}),t._v(" "),n("b-btn",{staticClass:"ml-0",attrs:{to:t.localePath("student-take-course"),variant:"outline-white"},domProps:{textContent:t._s(t.$t("Start over"))}})],1)])])]),t._v(" "),n("div",{staticClass:"d-flex flex-wrap align-items-start"},[n("div",{staticClass:"d-flex align-items-center mr-24pt"},[n("b-link",{staticClass:"mr-12pt",attrs:{to:t.localePath("student-take-course")}},[n("img",{staticClass:"rounded",attrs:{src:"/images/paths/angular_64x64.svg",width:"40",alt:"Angular"}})]),t._v(" "),n("div",{staticClass:"flex"},[n("b-link",{staticClass:"card-title",attrs:{to:t.localePath("student-take-course")},domProps:{textContent:t._s("Angular Fundamentals")}}),t._v(" "),n("p",{staticClass:"lh-1 mb-0"},[n("span",{staticClass:"text-50 small",domProps:{textContent:t._s(t.$t("with"))}}),t._v(" "),n("span",{staticClass:"text-50 small"},[t._v("Elijah Murray")])])],1)],1),t._v(" "),n("div",{staticClass:"d-flex align-items-center py-4pt",staticStyle:{"white-space":"nowrap"}},[n("small",{staticClass:"text-50 mr-8pt",domProps:{textContent:t._s(t.$t("Your rating"))}}),t._v(" "),t._m(0),t._v(" "),n("small",{staticClass:"text-50"},[t._v("4/5")])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"rating mr-8pt"},[n("span",{staticClass:"rating__item"},[n("span",{staticClass:"material-icons text-primary"},[t._v("star")])]),t._v(" "),n("span",{staticClass:"rating__item"},[n("span",{staticClass:"material-icons text-primary"},[t._v("star")])]),t._v(" "),n("span",{staticClass:"rating__item"},[n("span",{staticClass:"material-icons text-primary"},[t._v("star")])]),t._v(" "),n("span",{staticClass:"rating__item"},[n("span",{staticClass:"material-icons text-primary"},[t._v("star")])]),t._v(" "),n("span",{staticClass:"rating__item"},[n("span",{staticClass:"material-icons text-primary"},[t._v("star_border")])])])}],!1,null,null,null);"function"==typeof c.default&&Object(c.default)(component),"function"==typeof m.default&&Object(m.default)(component);var d=component.exports,v=n(953),_=n(952),h=n(169),f=n(25),C=(n(1074),n(979)),x=n(922),y={components:{Achievement:C.a},props:{controls:{type:Boolean,default:!0},account:{type:Boolean},colClass:{type:String,default:"col-sm-6"}},data:function(){return{items:[{image:"/images/achievements/flinto.png",logo:"/images/paths/flinto_40x40@2x.png",title:"Flinto",description:"Introduction to The App Design Application",date:"Jun 5, 2018"},{image:"/images/achievements/angular.png",logo:"/images/paths/angular_64x64.png",title:"Angular fundamentals",description:"Creating and Communicating Between Angular Components",date:"Jun 5, 2018"}]}},computed:{id:function(){return x("achievements_carousel_")}},mounted:function(){var t=this;this.$nextTick((function(){t.$refs.carousel&&f.handler.upgradeElement(t.$refs.carousel,"mdk-carousel")}))},beforeDestroy:function(){f.handler.downgradeElement(this.$refs.carousel,"mdk-carousel")}},k=Object(o.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"position-relative carousel-card"},[n("div",{ref:"carousel",staticClass:"js-mdk-carousel row d-block",attrs:{id:t.id}},[t.controls?n("a",{staticClass:"carousel-control-next js-mdk-carousel-control",attrs:{href:"#"+t.id,role:"button","data-slide":"next"}},[n("span",{staticClass:"carousel-control-icon material-icons",attrs:{"aria-hidden":"true"}},[t._v("keyboard_arrow_right")]),t._v(" "),n("span",{staticClass:"sr-only"},[t._v("Next")])]):t._e(),t._v(" "),n("div",{staticClass:"mdk-carousel__content"},t._l(t.items,(function(e){return n("div",{key:e.id,staticClass:"col-12",class:t.colClass},[n("achievement",{attrs:{item:e}})],1)})),0)])])}),[],!1,null,null,null).exports,w={components:{ResumeCourse:d,AccountPathCard:v.a,CourseCard:_.a,Pager:h.a,AchievementsCarouselMulti:k},extends:r.a,data:function(){return{title:this.$t("My Courses"),paths:[{title:"Angular",image:"angular",description:"Angular is a platform for building mobile and desktop web applications.",favorite:!0},{title:"Swift",image:"swift",description:"Swift is a powerful and intuitive programming language for macOS, iOS, watchOS, tvOS and beyond."},{title:"React Native",image:"react"},{title:"WordPress",image:"wordpress",description:"WordPress is open source software you can use to create a beautiful website, blog, or app."},{title:"Dev Ops",image:"devops"},{title:"Redis",image:"redis"}],development_courses:[{title:"Learn Angular fundamentals",image:"angular",free:!0},{title:"Build an iOS Application in Swift",image:"swift",favorite:!0},{title:"Build a WordPress Website",image:"wordpress"},{title:"Become a React Native Developer",image:"react",position:"left"}],design_courses:[{title:"Learn Sketch",image:"sketch",open:!0},{title:"Learn Flinto",image:"flinto"},{title:"Learn Photoshop",image:"photoshop"},{title:"Newsletter Design",image:"mailchimp"}]}},asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.app,e.abrupt("return",{title:n.i18n.t("My Courses")});case 2:case"end":return e.stop()}}),e)})))()}},$=Object(o.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("page-header",{attrs:{title:t.title,breadcrumb:t.breadcrumb,"container-class":t.containerClass}}),t._v(" "),n("div",{staticClass:"page-section border-bottom-2"},[n("div",{class:t.containerClass},[n("resume-course")],1)]),t._v(" "),n("div",{class:t.containerClass},[n("div",{staticClass:"page-section"},[n("page-separator",[t._v("Learning Paths")]),t._v(" "),n("div",{staticClass:"row card-group-row mb-lg-8pt"},t._l(t.paths,(function(t){return n("div",{key:t.id,staticClass:"col-sm-4 card-group-row__col"},[n("account-path-card",{staticClass:"card-group-row__card",attrs:{title:t.title,description:t.description,image:t.image,favorite:t.favorite,account:!0,cta:!0}})],1)})),0),t._v(" "),n("div",{staticClass:"mb-32pt"},[n("pager")],1),t._v(" "),n("page-separator",[t._v("Development Courses")]),t._v(" "),n("div",{staticClass:"row card-group-row"},t._l(t.development_courses,(function(t){return n("div",{key:t.id,staticClass:"col-lg-3 card-group-row__col"},[n("course-card",{staticClass:"d-flex w-100",attrs:{account:!0,title:t.title,image:t.image,avatar:t.avatar||t.image,free:t.free,favorite:t.favorite,position:t.position,open:t.open,reveals:!1,"card-class":"card-group-row__card"}})],1)})),0),t._v(" "),n("div",{staticClass:"mb-32pt"},[n("pager")],1),t._v(" "),n("page-separator",[t._v("Design Courses")]),t._v(" "),n("div",{staticClass:"row card-group-row"},t._l(t.design_courses,(function(t){return n("div",{key:t.id,staticClass:"col-lg-3 card-group-row__col"},[n("course-card",{staticClass:"d-flex w-100",attrs:{account:!0,title:t.title,image:t.image,avatar:t.avatar||t.image,free:t.free,favorite:t.favorite,position:t.position,open:t.open,reveals:!1,"card-class":"card-group-row__card"}})],1)})),0),t._v(" "),n("div",{staticClass:"mb-32pt"},[n("pager")],1),t._v(" "),n("page-separator",[t._v("Achievements")]),t._v(" "),n("achievements-carousel-multi")],1)])],1)}),[],!1,null,null,null);e.default=$.exports},917:function(t,e,n){"use strict";var l={mixins:[n(43).a],layout:function(t){return t.store.getters.settings.layout.layout},head:function(){return{title:"".concat(this.$t(this.title)," - ").concat(this.$store.state.brand)}},data:function(){return{title:null,redirectLayout:!0}},computed:{breadcrumb:function(){return[{text:this.$t("Home"),to:this.localePath("/")},{text:this.$t(this.title),active:!0}]},headerClass:function(){return null},headerEffects:function(){return"waterfall"},headerImage:function(){return null},headerContentClass:function(){return null},headerCondenses:function(){return!1},headerContentComponent:function(){return null},headerContentComponentProps:function(){return null},guest:function(){return!1},subLayout:function(){return!1},subLayoutDrawer:function(){return!1},subLayoutDrawerId:function(){return"sub-layout-drawer"},subLayoutDrawerAlign:function(){return"end"}},created:function(){this.emitOptions()},methods:{emitOptions:function(){var t=this;["guest","subLayout","subLayoutDrawerId","subLayoutDrawerAlign","subLayoutDrawer","headerClass","headerEffects","headerImage","headerContentClass","headerCondenses","headerContentComponent","headerContentComponentProps"].map((function(option){void 0!==t[option]&&t.$root.$emit("luma::".concat(option),t[option])}))}}},r=n(11),component=Object(r.a)(l,void 0,void 0,!1,null,null,null);e.a=component.exports},924:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"lessons":"{lessons} lessons","minutes_left":"{minutes} minutes left","hours":"{hours} hours"}}'),delete t.options._Ctor}},925:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"ro":{"lessons":"{lessons} lecții","hours":"{hours} ore","minutes_left":"{minutes} minute rămase","Preview":"Previzualizare","Watch trailer":"Urmărește trailer","Start over":"Reîncepe","Resume":"Continuă","with":"cu","Add Favorite":"Adaugă Favorit","Remove Favorite":"Șterge Favorit","Beginner":"Începător","Edit Course":"Editează Cursul"}}'),delete t.options._Ctor}},926:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"lessons":"{lessons} lessons","minutes_left":"{minutes} minutes left","hours":"{hours} hours"}}'),delete t.options._Ctor}},927:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"ro":{"lessons":"{lessons} lecții","courses":"{courses} cursuri","hours":"{hours} ore","minutes_left":"{minutes} minute rămase","Start over":"Reîncepe","Resume":"Continuă","Add Favorite":"Adaugă Favorit","Remove Favorite":"Șterge Favorit","Beginner":"Începător","Your rating":"Evaluarea ta","Begin":"Începe"}}'),delete t.options._Ctor}},928:function(t,e,n){"use strict";e.a={data:function(){return{popoverContainer:null}},mounted:function(){var t=this;this.$nextTick((function(){var e=document.querySelector(".mdk-drawer-layout__content"),n=document.querySelector(".mdk-header-layout__content"),l=null;l=e?e.getAttribute("id"):l,l=n?n.getAttribute("id"):l,t.popoverContainer=l}))}}},948:function(t,e,n){"use strict";var l=n(924),r=n.n(l);e.default=r.a},949:function(t,e,n){"use strict";var l=n(925),r=n.n(l);e.default=r.a},950:function(t,e,n){"use strict";var l=n(926),r=n.n(l);e.default=r.a},951:function(t,e,n){"use strict";var l=n(927),r=n.n(l);e.default=r.a},952:function(t,e,n){"use strict";var l=n(915),r=(n(12),n(928)),o=n(25),c=(n(923),function(){return{properties:{position:{reflectToAttribute:!0,value:"center"},height:{reflectToAttribute:!0,value:"auto"}},get image(){return this.element.querySelector("img")},_reset:function(){this.image&&(this.element.style.display="block",this.element.style.position="relative",this.element.style.overflow="hidden",this.element.style.backgroundImage="url(".concat(this.image.src,")"),this.element.style.backgroundSize="cover",this.element.style.backgroundPosition=this.position,this.element.style.height="".concat("auto"===this.height?this.image.offsetHeight:this.height,"px"),this.image.style.visibility="hidden")}}});o.handler.register("image",c);o.handler.register("mdk-reveal",(function(){return{properties:{partialHeight:{reflectToAttribute:!0,type:Number,value:0},forceReveal:{type:Boolean,reflectToAttribute:!0},trigger:{value:"click",reflectToAttribute:!0},opened:{type:Boolean,reflectToAttribute:!0}},observers:["_onChange(opened)","_onChange(_translate)"],listeners:["_onEnter(mouseenter, touchstart)","_onLeave(mouseleave, touchend)","window._debounceResize(resize)","_onClick(click)","window._reset(load)","window._reset(DOMContentLoaded)"],get reveal(){return this.element.querySelector(".mdk-reveal__content")},get partial(){var t=this.reveal.querySelector(".mdk-reveal__partial");return t||((t=document.createElement("DIV")).classList.add("mdk-reveal__partial"),this.reveal.insertBefore(t,this.reveal.childNodes[0])),t},open:function(){this.opened=!0},close:function(){this.opened=!1},toggle:function(){this.opened=!this.opened},_reset:function(){this._translate="translateY("+-1*(this.reveal.offsetHeight-this.partialHeight)+"px)",0!==this.partialHeight&&(this.partial.style.height=this.partialHeight+"px"),this.element.style.height=this.reveal.offsetTop+this.partialHeight+"px",this.forceReveal&&!this.opened&&this.open()},_onChange:function(){o.util.transform(this.opened?this._translate:"translateY(0)",this.reveal)},_onEnter:function(){"hover"!==this.trigger||this.forceReveal||this.open()},_onClick:function(){"click"===this.trigger&&this.toggle()},_onLeave:function(){"hover"!==this.trigger||this.forceReveal||this.close()},_debounceResize:function(){var t=this;clearTimeout(this._debounceResizeTimer),this._debounceResizeTimer=setTimeout((function(){t._resizeWidth!==window.innerWidth&&(t._resizeWidth=window.innerWidth,t._reset())}),50)},init:function(){this._resizeWidth=window.innerWidth},destroy:function(){clearTimeout(this._debounceResizeTimer)}}})),o.handler.register("image",c);var m=n(922),d={mixins:[r.a],props:{cardClass:{type:String,default:"mb-16pt"},title:{type:String,default:null},description:{type:String,default:null},image:{type:String,default:null},avatar:{type:String,default:null},account:{type:Boolean},free:{type:Boolean},favorite:{type:Boolean},compact:{type:Boolean},open:{type:Boolean},position:{type:String,default:null},reveals:{type:Boolean,default:!0},revealPartialHeight:{type:Number,default:function(){return 44}}},computed:{id:function(){return m("course_")},localDescription:function(){return this.description?this.description:"Learn the fundamentals of working with ".concat(this.title," and how to create basic applications.")},cardClasses:function(){var t=[];return this.cardClass&&(Array.isArray(this.cardClass)?(Object(l.a)("classes"),t=this.cardClass):"string"==typeof this.cardClass&&t.push(this.cardClass)),this.reveals&&t.push("mdk-reveal"),t}},mounted:function(){var t=this;this.$root.$on("bv::popover::show",(function(e){t.$root.$emit("bv::hide::popover")})),this.$nextTick((function(){t.$refs.card&&(t.$refs.card.addEventListener("domfactory-component-upgraded",(function(){return t.update()})),o.handler.upgradeElement(t.$refs.card,"overlay"),t.reveals&&o.handler.upgradeElement(t.$refs.card,"mdk-reveal")),t.$refs.image&&o.handler.upgradeElement(t.$refs.image,"image"),t.open&&setTimeout((function(){return t.$root.$emit("bv::show::popover",t.id)}),100)}))},updated:function(){var t=this;this.$nextTick((function(){return t.update()}))},beforeDestroy:function(){o.handler.downgradeElement(this.$refs.card,"overlay"),o.handler.downgradeElement(this.$refs.image,"image"),this.reveals&&o.handler.downgradeElement(this.$refs.card,"mdk-reveal")},methods:{update:function(){this.$refs.card.overlay&&(this.$refs.card.overlay.trigger="click"),this.$refs.image.image&&this.$refs.image.image._reset(),this.reveals&&this.$refs.card.mdkReveal&&this.$refs.card.mdkReveal._reset()},show:function(){this.$refs.card.overlay&&this.$refs.card.overlay.show(),this.reveals&&this.$refs.card.mdkReveal&&this.$refs.card.mdkReveal.open()},hide:function(){this.$refs.card.overlay&&this.$refs.card.overlay.hide(),this.reveals&&this.$refs.card.mdkReveal&&this.$refs.card.mdkReveal.close()}}},v=n(11),_=n(948),h=n(949),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{ref:"card",staticClass:"card card-sm card--elevated p-relative o-hidden overlay--primary",class:t.cardClasses,attrs:{id:t.id,"data-partial-height":t.reveals?t.revealPartialHeight:null}},[n("span",{ref:"image",staticClass:"js-image",attrs:{"data-position":t.position,"data-height":t.reveals?168:128}},[n("img",{attrs:{src:"/images/paths/"+t.image+"_430x168.png",alt:"course"}}),t._v(" "),n("span",{staticClass:"overlay__content",class:[t.reveals?"align-items-start justify-content-start":null]},[n("span",{staticClass:"overlay__action d-flex",class:[t.reveals?"card-body align-items-center":"flex-column text-center"]},[n("md-icon",{class:t.reveals?"mr-4pt":"icon-32pt",domProps:{textContent:t._s("play_circle_outline")}}),t._v(" "),n("span",{staticClass:"card-title text-white"},[t.account?[t._v(t._s(t.$t("Resume")))]:[t._v(t._s(t.$t("Preview")))]],2)],1)])]),t._v(" "),t.free?n("span",{staticClass:"corner-ribbon corner-ribbon--default-right-top corner-ribbon--shadow bg-accent text-white"},[t._v("NEW")]):t._e(),t._v(" "),n("div",{staticClass:"mdk-reveal__content d-flex flex-column flex"},[n("div",{staticClass:"card-body"},[n("div",{staticClass:"d-flex"},[n("div",{staticClass:"flex"},[n("a",{staticClass:"card-title",attrs:{href:""}},[t._v(t._s(t.title))]),t._v(" "),n("small",{staticClass:"text-50 font-weight-bold mb-4pt"},[t._v("Elijah Murray")])]),t._v(" "),n("md-icon",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",value:{title:t.favorite?t.$t("Remove Favorite"):t.$t("Add Favorite")},expression:"{ title: favorite ? $t('Remove Favorite') : $t('Add Favorite') }",modifiers:{hover:!0,top:!0}}],staticClass:"ml-4pt text-20 card-course__icon-favorite"},[t._v("\n            favorite"),t.favorite?t._e():[t._v("_border")]],2)],1),t._v(" "),n("div",{staticClass:"d-flex"},[n("b-form-rating",{staticClass:"b-rating-inline",attrs:{value:4,variant:"rating",size:"sm","show-value":"","show-value-max":"",readonly:"",inline:"","no-border":""}}),t._v(" "),t.compact?n("small",{staticClass:"ml-auto text-50",domProps:{textContent:t._s(t.$t("hours",{hours:6}))}}):t._e()],1)]),t._v(" "),t.compact?t._e():n("div",{staticClass:"card-footer"},[n("div",{staticClass:"row justify-content-between"},[n("div",{staticClass:"col-auto d-flex align-items-center"},[n("span",{staticClass:"material-icons icon-16pt text-black-50 mr-4pt"},[t._v("access_time")]),t._v(" "),n("p",{staticClass:"flex text-black-50 lh-1 mb-0"},[n("small",{domProps:{textContent:t._s(t.$t("hours",{hours:6}))}})])]),t._v(" "),n("div",{staticClass:"col-auto d-flex align-items-center"},[n("span",{staticClass:"material-icons icon-16pt text-black-50 mr-4pt"},[t._v("play_circle_outline")]),t._v(" "),n("p",{staticClass:"flex text-black-50 lh-1 mb-0"},[n("small",{domProps:{textContent:t._s(t.$t("lessons",{lessons:12}))}})])])])])])]),t._v(" "),t.popoverContainer?n("b-popover",{attrs:{triggers:"click",target:t.id,html:!0,container:t.popoverContainer,"custom-class":"popover-lg"},on:{show:t.show,hide:t.hide}},[n("div",{staticClass:"media"},[n("div",{staticClass:"media-left mr-12pt"},[n("img",{staticClass:"rounded",attrs:{src:"/images/paths/"+t.avatar+"_40x40@2x.png",width:"40",height:"40",alt:t.avatar}})]),t._v(" "),n("div",{staticClass:"media-body"},[n("div",{staticClass:"card-title mb-0"},[t._v(t._s(t.title))]),t._v(" "),n("p",{staticClass:"lh-1 mb-0"},[n("span",{staticClass:"text-black-50 small",domProps:{textContent:t._s(t.$t("with"))}}),t._v(" "),n("span",{staticClass:"text-black-50 small font-weight-bold"},[t._v("Elijah Murray")])])])]),t._v(" "),n("p",{staticClass:"my-16pt text-black-70"},[t._v(t._s(t.localDescription))]),t._v(" "),n("div",{staticClass:"mb-16pt"},[n("div",{staticClass:"d-flex align-items-center"},[n("span",{staticClass:"material-icons icon-16pt text-black-50 mr-8pt"},[t._v("check")]),t._v(" "),n("p",{staticClass:"flex text-black-50 lh-1 mb-0"},[n("small",[t._v("Fundamentals of working with Angular")])])]),t._v(" "),n("div",{staticClass:"d-flex align-items-center"},[n("span",{staticClass:"material-icons icon-16pt text-black-50 mr-8pt"},[t._v("check")]),t._v(" "),n("p",{staticClass:"flex text-black-50 lh-1 mb-0"},[n("small",[t._v("Create complete Angular applications")])])]),t._v(" "),n("div",{staticClass:"d-flex align-items-center"},[n("span",{staticClass:"material-icons icon-16pt text-black-50 mr-8pt"},[t._v("check")]),t._v(" "),n("p",{staticClass:"flex text-black-50 lh-1 mb-0"},[n("small",[t._v("Working with the Angular CLI")])])]),t._v(" "),n("div",{staticClass:"d-flex align-items-center"},[n("span",{staticClass:"material-icons icon-16pt text-black-50 mr-8pt"},[t._v("check")]),t._v(" "),n("p",{staticClass:"flex text-black-50 lh-1 mb-0"},[n("small",[t._v("Understanding Dependency Injection")])])]),t._v(" "),n("div",{staticClass:"d-flex align-items-center"},[n("span",{staticClass:"material-icons icon-16pt text-black-50 mr-8pt"},[t._v("check")]),t._v(" "),n("p",{staticClass:"flex text-black-50 lh-1 mb-0"},[n("small",[t._v("Testing with Angular")])])])]),t._v(" "),t.account?[n("div",{staticClass:"my-32pt"},[n("div",{staticClass:"d-flex align-items-center mb-8pt justify-content-center"},[n("div",{staticClass:"d-flex align-items-center mr-8pt"},[n("span",{staticClass:"material-icons icon-16pt text-black-50 mr-4pt"},[t._v("access_time")]),t._v(" "),n("p",{staticClass:"flex text-black-50 lh-1 mb-0"},[n("small",{domProps:{textContent:t._s(t.$t("minutes_left",{minutes:50}))}})])]),t._v(" "),n("div",{staticClass:"d-flex align-items-center"},[n("span",{staticClass:"material-icons icon-16pt text-black-50 mr-4pt"},[t._v("play_circle_outline")]),t._v(" "),n("p",{staticClass:"flex text-black-50 lh-1 mb-0"},[n("small",{domProps:{textContent:t._s(t.$t("lessons",{lessons:12}))}})])])]),t._v(" "),n("div",{staticClass:"d-flex align-items-center justify-content-center"},[n("b-link",{staticClass:"btn btn-primary mr-8pt",attrs:{to:t.localePath("student-take-lesson")},domProps:{textContent:t._s(t.$t("Resume"))}}),t._v(" "),n("b-link",{staticClass:"btn btn-outline-secondary ml-0",attrs:{to:t.localePath("student-take-course")},domProps:{textContent:t._s(t.$t("Start over"))}})],1)]),t._v(" "),n("div",{staticClass:"d-flex align-items-center"},[n("small",{staticClass:"text-black-50 mr-8pt",domProps:{textContent:t._s(t.$t("Your rating"))}}),t._v(" "),n("div",{staticClass:"rating mr-8pt"},[n("span",{staticClass:"rating__item"},[n("span",{staticClass:"material-icons text-primary"},[t._v("star")])]),t._v(" "),n("span",{staticClass:"rating__item"},[n("span",{staticClass:"material-icons text-primary"},[t._v("star")])]),t._v(" "),n("span",{staticClass:"rating__item"},[n("span",{staticClass:"material-icons text-primary"},[t._v("star")])]),t._v(" "),n("span",{staticClass:"rating__item"},[n("span",{staticClass:"material-icons text-primary"},[t._v("star")])]),t._v(" "),n("span",{staticClass:"rating__item"},[n("span",{staticClass:"material-icons text-primary"},[t._v("star_border")])])]),t._v(" "),n("small",{staticClass:"text-black-50"},[t._v("4/5")])])]:n("div",{staticClass:"row align-items-center"},[n("div",{staticClass:"col-auto"},[n("div",{staticClass:"d-flex align-items-center mb-4pt"},[n("span",{staticClass:"material-icons icon-16pt text-black-50 mr-4pt"},[t._v("access_time")]),t._v(" "),n("p",{staticClass:"flex text-black-50 lh-1 mb-0"},[n("small",{domProps:{textContent:t._s(t.$t("hours",{hours:6}))}})])]),t._v(" "),n("div",{staticClass:"d-flex align-items-center mb-4pt"},[n("span",{staticClass:"material-icons icon-16pt text-black-50 mr-4pt"},[t._v("play_circle_outline")]),t._v(" "),n("p",{staticClass:"flex text-black-50 lh-1 mb-0"},[n("small",{domProps:{textContent:t._s(t.$t("lessons",{lessons:12}))}})])]),t._v(" "),n("div",{staticClass:"d-flex align-items-center"},[n("span",{staticClass:"material-icons icon-16pt text-black-50 mr-4pt"},[t._v("assessment")]),t._v(" "),n("p",{staticClass:"flex text-black-50 lh-1 mb-0"},[n("small",{domProps:{textContent:t._s(t.$t("Beginner"))}})])])]),t._v(" "),n("div",{staticClass:"col text-right"},[n("b-btn",{attrs:{to:t.localePath("student-lesson"),variant:"primary"},domProps:{textContent:t._s(t.$t("Watch trailer"))}})],1)])],2):t._e()],1)}),[],!1,null,null,null);"function"==typeof _.default&&Object(_.default)(component),"function"==typeof h.default&&Object(h.default)(component);e.a=component.exports},953:function(t,e,n){"use strict";var l=n(928),r=n(25),o=(n(923),n(922)),c={mixins:[l.a],props:{cardClass:{type:String,default:"mb-16pt"},title:{type:String,default:null},description:{type:String,default:null},image:{type:String,default:null},account:{type:Boolean},favorite:{type:Boolean},details:{type:Boolean},cta:{type:Boolean},open:{type:Boolean},to:{type:String,default:null}},computed:{id:function(){return o("path_")},localDescription:function(){return this.description?this.description:"Learn the fundamentals of working with ".concat(this.title," and how to create basic applications.")}},mounted:function(){var t=this;this.$root.$on("bv::popover::show",(function(e){t.$root.$emit("bv::hide::popover")})),this.details||(this.$el.addEventListener("domfactory-component-upgraded",(function(){return t.onOverlayInit()})),this.$nextTick((function(){r.handler.upgradeElement(t.$el,"overlay"),t.open&&setTimeout((function(){return t.$root.$emit("bv::show::popover",t.id)}),100)})))},beforeDestroy:function(){this.details||r.handler.downgradeElement(this.$el,"overlay")},methods:{onOverlayInit:function(){this.$el.overlay.trigger="click"},showOverlay:function(){this.$el.overlay&&this.$el.overlay.show()},hideOverlay:function(){this.$el.overlay&&this.$el.overlay.hide()}}},m=n(11),d=n(950),v=n(951),component=Object(m.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"overlay--primary d-flex flex-column",class:{"overlay--show":t.details&&t.account}},[n("div",{staticClass:"card stack stack--1",class:["flex",t.details?"card-lg":"card-sm",t.cardClass?t.cardClass:null],attrs:{id:t.id}},[n("div",{staticClass:"card-body d-flex flex-column"},[n("div",{staticClass:"d-flex align-items-center"},[n("div",{staticClass:"flex"},[n("div",{staticClass:"d-flex align-items-center"},[n("div",{staticClass:"rounded mr-12pt z-0 o-hidden"},[n("div",{staticClass:"overlay"},[n("img",{staticClass:"rounded",attrs:{src:"/images/paths/"+t.image+"_40x40@2x.png",width:"40",height:"40",alt:t.title}}),t._v(" "),t._m(0)])]),t._v(" "),n("div",{staticClass:"flex"},[n("div",{staticClass:"card-title"},[t._v(t._s(t.title))]),t._v(" "),n("p",{staticClass:"flex text-black-50 lh-1 mb-0"},[n("small",{domProps:{textContent:t._s(t.$t("courses",{courses:18}))}})])])])]),t._v(" "),t.cta?n("b-link",{staticClass:"ml-4pt btn btn-sm btn-link text-secondary",class:{"border-1 border-secondary":t.favorite},attrs:{to:t.localePath(t.to)},domProps:{textContent:t._s(t.$t("Resume"))}}):n("b-link",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",value:{title:t.favorite?t.$t("Remove Favorite"):t.$t("Add Favorite")},expression:"{ title: favorite ? $t('Remove Favorite') : $t('Add Favorite') }",modifiers:{hover:!0,top:!0}}],staticClass:"ml-4pt material-icons text-20 card-course__icon-favorite",attrs:{to:t.localePath(t.to)}},[t._v("favorite"),t.favorite?t._e():[t._v("_border")]],2)],1),t._v(" "),t.details?[t.account?n("div",{staticClass:"d-flex align-items-center mt-8pt"},[n("small",{staticClass:"text-black-50 mr-8pt",domProps:{textContent:t._s(t.$t("Your rating"))}}),t._v(" "),t._m(6),t._v(" "),n("small",{staticClass:"text-black-50"},[t._v("4/5")])]):n("div",{staticClass:"rating mt-8pt"},[t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5)]),t._v(" "),n("p",{staticClass:"mt-16pt text-black-70 flex"},[t._v(t._s(t.localDescription))]),t._v(" "),n("div",{staticClass:"mb-16pt d-none"},[n("div",{staticClass:"d-flex align-items-center"},[n("span",{staticClass:"material-icons icon-16pt text-black-50 mr-8pt"},[t._v("check")]),t._v(" "),n("p",{staticClass:"flex text-black-50 lh-1 mb-0"},[n("small",[t._v("Fundamentals of working with "+t._s(t.title))])])]),t._v(" "),n("div",{staticClass:"d-flex align-items-center"},[n("span",{staticClass:"material-icons icon-16pt text-black-50 mr-8pt"},[t._v("check")]),t._v(" "),n("p",{staticClass:"flex text-black-50 lh-1 mb-0"},[n("small",[t._v("Create complete "+t._s(t.title)+" applications")])])]),t._v(" "),n("div",{staticClass:"d-flex align-items-center"},[n("span",{staticClass:"material-icons icon-16pt text-black-50 mr-8pt"},[t._v("check")]),t._v(" "),n("p",{staticClass:"flex text-black-50 lh-1 mb-0"},[n("small",[t._v("Working with the "+t._s(t.title)+" CLI")])])]),t._v(" "),t._m(7),t._v(" "),n("div",{staticClass:"d-flex align-items-center"},[n("span",{staticClass:"material-icons icon-16pt text-black-50 mr-8pt"},[t._v("check")]),t._v(" "),n("p",{staticClass:"flex text-black-50 lh-1 mb-0"},[n("small",[t._v("Testing with "+t._s(t.title))])])])]),t._v(" "),t.account?[n("div",{staticClass:"d-flex align-items-center mb-8pt justify-content-center"},[n("div",{staticClass:"d-flex align-items-center mr-8pt"},[n("span",{staticClass:"material-icons icon-16pt text-black-50 mr-4pt"},[t._v("access_time")]),t._v(" "),n("p",{staticClass:"flex text-black-50 lh-1 mb-0"},[n("small",{domProps:{textContent:t._s(t.$t("minutes_left",{minutes:50}))}})])]),t._v(" "),n("div",{staticClass:"d-flex align-items-center"},[n("span",{staticClass:"material-icons icon-16pt text-black-50 mr-4pt"},[t._v("play_circle_outline")]),t._v(" "),n("p",{staticClass:"flex text-black-50 lh-1 mb-0"},[n("small",{domProps:{textContent:t._s(t.$t("lessons",{lessons:12}))}})])])]),t._v(" "),n("div",{staticClass:"d-flex align-items-center justify-content-center"},[n("b-btn",{attrs:{variant:"btn-primary"},domProps:{textContent:t._s(t.$t("Resume"))}})],1)]:n("div",{staticClass:"row align-items-center"},[n("div",{staticClass:"col-auto"},[n("div",{staticClass:"d-flex align-items-center mb-4pt"},[n("span",{staticClass:"material-icons icon-16pt text-black-50 mr-4pt"},[t._v("access_time")]),t._v(" "),n("p",{staticClass:"flex text-black-50 lh-1 mb-0"},[n("small",{domProps:{textContent:t._s(t.$t("hours",{hours:6}))}})])]),t._v(" "),n("div",{staticClass:"d-flex align-items-center mb-4pt"},[n("span",{staticClass:"material-icons icon-16pt text-black-50 mr-4pt"},[t._v("play_circle_outline")]),t._v(" "),n("p",{staticClass:"flex text-black-50 lh-1 mb-0"},[n("small",{domProps:{textContent:t._s(t.$t("lessons",{lessons:12}))}})])]),t._v(" "),n("div",{staticClass:"d-flex align-items-center"},[n("span",{staticClass:"material-icons icon-16pt text-black-50 mr-4pt"},[t._v("assessment")]),t._v(" "),n("p",{staticClass:"flex text-black-50 lh-1 mb-0"},[n("small",{domProps:{textContent:t._s(t.$t("Beginner"))}})])])]),t._v(" "),n("div",{staticClass:"col text-right"},[n("b-btn",{attrs:{variant:"outline-secondary"},domProps:{textContent:t._s(t.$t("Begin"))}})],1)])]:t._e()],2)]),t._v(" "),t.details?t._e():n("b-popover",{attrs:{triggers:"click",target:t.id,html:!0,container:t.popoverContainer,"custom-class":"popover-lg"},on:{show:t.showOverlay,hide:t.hideOverlay}},[n("div",{staticClass:"media"},[n("div",{staticClass:"media-left mr-12pt"},[n("img",{staticClass:"rounded",attrs:{src:"/images/paths/"+t.image+"_40x40@2x.png",width:"40",height:"40",alt:"Angular"}})]),t._v(" "),n("div",{staticClass:"media-body"},[n("div",{staticClass:"card-title"},[t._v(t._s(t.title))]),t._v(" "),n("p",{staticClass:"text-black-50 d-flex lh-1 mb-0 small",domProps:{textContent:t._s(t.$t("courses",{courses:18}))}})])]),t._v(" "),n("p",{staticClass:"mt-16pt text-black-70"},[t._v(t._s(t.localDescription))]),t._v(" "),n("div",{staticClass:"my-32pt"},[n("div",{staticClass:"d-flex align-items-center mb-8pt justify-content-center"},[n("div",{staticClass:"d-flex align-items-center mr-8pt"},[n("span",{staticClass:"material-icons icon-16pt text-black-50 mr-4pt"},[t._v("access_time")]),t._v(" "),n("p",{staticClass:"flex text-black-50 lh-1 mb-0"},[n("small",{domProps:{textContent:t._s(t.$t("minutes_left",{minutes:50}))}})])]),t._v(" "),n("div",{staticClass:"d-flex align-items-center"},[n("span",{staticClass:"material-icons icon-16pt text-black-50 mr-4pt"},[t._v("play_circle_outline")]),t._v(" "),n("p",{staticClass:"flex text-black-50 lh-1 mb-0"},[n("small",{domProps:{textContent:t._s(t.$t("lessons",{lessons:12}))}})])])]),t._v(" "),n("div",{staticClass:"d-flex align-items-center justify-content-center"},[n("b-btn",{staticClass:"mr-8pt",attrs:{variant:"primary"},domProps:{textContent:t._s(t.$t("Resume"))}}),t._v(" "),n("b-btn",{staticClass:"ml-0",attrs:{variant:"outline-secondary"},domProps:{textContent:t._s(t.$t("Start over"))}})],1)]),t._v(" "),n("div",{staticClass:"d-flex align-items-center"},[n("small",{staticClass:"text-black-50 mr-8pt",domProps:{textContent:t._s(t.$t("Your rating"))}}),t._v(" "),n("div",{staticClass:"rating mr-8pt"},[n("span",{staticClass:"rating__item"},[n("span",{staticClass:"material-icons text-primary"},[t._v("star")])]),t._v(" "),n("span",{staticClass:"rating__item"},[n("span",{staticClass:"material-icons text-primary"},[t._v("star")])]),t._v(" "),n("span",{staticClass:"rating__item"},[n("span",{staticClass:"material-icons text-primary"},[t._v("star")])]),t._v(" "),n("span",{staticClass:"rating__item"},[n("span",{staticClass:"material-icons text-primary"},[t._v("star")])]),t._v(" "),n("span",{staticClass:"rating__item"},[n("span",{staticClass:"material-icons text-primary"},[t._v("star_border")])])]),t._v(" "),n("small",{staticClass:"text-black-50"},[t._v("4/5")])])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"overlay__content overlay__content-transparent"},[e("span",{staticClass:"overlay__action d-flex flex-column text-center lh-1"},[e("small",{staticClass:"h6 small text-white mb-0",staticStyle:{"font-weight":"500"}},[this._v("80%")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"rating__item"},[e("span",{staticClass:"material-icons"},[this._v("star")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"rating__item"},[e("span",{staticClass:"material-icons"},[this._v("star")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"rating__item"},[e("span",{staticClass:"material-icons"},[this._v("star")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"rating__item"},[e("span",{staticClass:"material-icons"},[this._v("star")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"rating__item"},[e("span",{staticClass:"material-icons"},[this._v("star_border")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"rating mr-8pt"},[n("span",{staticClass:"rating__item"},[n("span",{staticClass:"material-icons text-primary"},[t._v("star")])]),t._v(" "),n("span",{staticClass:"rating__item"},[n("span",{staticClass:"material-icons text-primary"},[t._v("star")])]),t._v(" "),n("span",{staticClass:"rating__item"},[n("span",{staticClass:"material-icons text-primary"},[t._v("star")])]),t._v(" "),n("span",{staticClass:"rating__item"},[n("span",{staticClass:"material-icons text-primary"},[t._v("star")])]),t._v(" "),n("span",{staticClass:"rating__item"},[n("span",{staticClass:"material-icons text-primary"},[t._v("star_border")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"d-flex align-items-center"},[e("span",{staticClass:"material-icons icon-16pt text-black-50 mr-8pt"},[this._v("check")]),this._v(" "),e("p",{staticClass:"flex text-black-50 lh-1 mb-0"},[e("small",[this._v("Understanding Dependency Injection")])])])}],!1,null,null,null);"function"==typeof d.default&&Object(d.default)(component),"function"==typeof v.default&&Object(v.default)(component);e.a=component.exports},979:function(t,e,n){"use strict";var l={props:{item:{type:Object,default:null}}},r=n(11),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-link",{staticClass:"card border-0 mb-0",attrs:{to:""}},[n("img",{staticClass:"card-img",staticStyle:{"max-height":"100%",width:"initial"},attrs:{src:t.item.image,alt:t.item.title}}),t._v(" "),n("div",{staticClass:"fullbleed bg-primary",staticStyle:{opacity:".5"}}),t._v(" "),n("span",{staticClass:"card-body d-flex flex-column align-items-center justify-content-center fullbleed"},[n("span",{staticClass:"row flex-nowrap"},[n("span",{staticClass:"col-auto text-center d-flex flex-column justify-content-center align-items-center"},[n("span",{staticClass:"h5 text-white text-uppercase font-weight-normal m-0 d-block"},[t._v("Achievement")]),t._v(" "),n("span",{staticClass:"text-white-60 d-block mb-24pt"},[t._v(t._s(t.item.date))])]),t._v(" "),n("span",{staticClass:"col d-flex flex-column"},[n("span",{staticClass:"text-right flex mb-16pt"},[n("b-img",{staticClass:"rounded",attrs:{src:t.item.logo,width:"64",alt:t.item.title}})],1)])]),t._v(" "),n("span",{staticClass:"row flex-nowrap"},[n("span",{staticClass:"col-auto text-center d-flex flex-column justify-content-center align-items-center"},[n("b-img",{attrs:{src:"/images/illustration/achievement/128/white.png",width:"64",alt:"achievement"}})],1),t._v(" "),n("span",{staticClass:"col d-flex flex-column"},[n("span",[n("span",{staticClass:"card-title text-white mb-4pt d-block"},[t._v(t._s(t.item.title))]),t._v(" "),n("span",{staticClass:"text-white-60"},[t._v(t._s(t.item.description))])])])])])])}),[],!1,null,null,null);e.a=component.exports}}]);