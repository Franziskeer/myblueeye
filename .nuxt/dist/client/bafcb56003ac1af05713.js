(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{1068:function(t,e,n){"use strict";var r=n(16),o={data:function(){return{data:{labels:["JavaScript","HTML","Flinto","Vue.js","Sketch","Priciple","CSS","Angular"],datasets:[{data:[30,35,33,32,31,30,28,36],pointHoverBackgroundColor:r.a.colors.white,borderJoinStyle:"bevel",lineTension:.1}]}}}},l=n(11),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card",{attrs:{"header-class":"d-flex align-items-center","body-class":"p-24pt"}},[n("template",{slot:"header"},[n("div",{staticClass:"h2 mb-0 mr-3"},[t._v("116")]),t._v(" "),n("div",{staticClass:"flex"},[n("p",{staticClass:"card-title"},[t._v("Angular")]),t._v(" "),n("p",{staticClass:"card-subtitle text-50"},[t._v(t._s(t.$t("Best score")))])]),t._v(" "),n("b-dropdown",{attrs:{id:"ddown1",text:t.$t("Popular Topics"),size:"sm",variant:"outline-secondary",right:""}},[n("b-dropdown-item",[t._v(t._s(t.$t("Popular Topics")))]),t._v(" "),n("b-dropdown-item",[t._v("Web Design")])],1)],1),t._v(" "),n("radar-chart",{tag:"component",staticClass:"chart",staticStyle:{height:"344px"},attrs:{data:t.data,suffix:" "+t.$t("points")}})],2)}),[],!1,null,null,null);e.a=component.exports},1069:function(t,e,n){"use strict";n(6),n(52),n(7),n(46),n(48),n(18),n(30),n(31),n(3);var r=n(16),o=n(1),l=n.n(o),c=n(957);function d(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return l=t.done,t},e:function(t){c=!0,o=t},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw o}}}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var v=Object(c.extendMoment)(l.a),m={data:function(){return{options:{elements:{point:{pointStyle:"circle",radius:4,hoverRadius:5,backgroundColor:r.a.colors.white,borderColor:r.a.colors.primary[500],borderWidth:2}},scales:{yAxes:[{ticks:{display:!1}}],xAxes:[{gridLines:{display:!1},type:"time",distribution:"series",time:{unit:"day",stepSize:1,autoSkip:!1,displayFormats:{day:"dd"}}}]}}}},computed:{data:function(){var t,e=[],n=v().subtract(6,"days").format("YYYY-MM-DD"),o=v().format("YYYY-MM-DD"),l=d(v.range(n,o).by("day"));try{for(l.s();!(t=l.n()).done;){var c=t.value;e.push({y:Math.floor(200*Math.random())+15,x:c.toDate()})}}catch(t){l.e(t)}finally{l.f()}return{datasets:[{data:e,pointHoverBorderColor:r.a.colors.success[400],pointHoverBackgroundColor:r.a.colors.white}]}}}},_=n(11),component=Object(_.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card",{attrs:{"header-class":"d-flex align-items-center border-0"}},[n("template",{slot:"header"},[n("div",{staticClass:"h2 mb-0 mr-3"},[t._v("432")]),t._v(" "),n("div",{staticClass:"flex"},[n("p",{staticClass:"card-title"},[t._v("Experience IQ")]),t._v(" "),n("p",{staticClass:"card-subtitle text-50"},[t._v(t._s(t.$t("4 days streak this week")))])]),t._v(" "),n("md-icon",{staticClass:"text-muted ml-2"},[t._v("trending_up")])],1),t._v(" "),n("line-chart",{tag:"component",staticClass:"chart",staticStyle:{height:"112px"},attrs:{data:t.data,options:t.options,suffix:" "+t.$t("points")}})],2)}),[],!1,null,null,null);e.a=component.exports},1070:function(t,e,n){"use strict";var r={components:{Achievement:n(979).a},props:{prevControl:{type:Boolean,default:!1},items:{type:Array,default:function(){return[{image:"/images/achievements/flinto.png",logo:"/images/paths/flinto_40x40@2x.png",title:"Flinto",description:"Introduction to The App Design Application",date:"Jun 5, 2018"},{image:"/images/achievements/angular.png",logo:"/images/paths/angular_64x64.png",title:"Angular fundamentals",description:"Creating and Communicating Between Angular Components",date:"Jun 5, 2018"}]}}},methods:{prev:function(){this.$refs.myCarousel.prev()},next:function(){this.$refs.myCarousel.next()}}},o=n(11),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"carousel-card position-relative"},[n("b-carousel",{ref:"myCarousel",staticClass:"mb-24pt",attrs:{id:"carouselExampleFade"}},t._l(t.items,(function(e,r){return n("b-carousel-slide",{key:e.id,staticClass:"carousel-item",class:{active:1===r},scopedSlots:t._u([{key:"img",fn:function(){return[n("achievement",{attrs:{item:e}})]},proxy:!0}],null,!0)})})),1),t._v(" "),t.prevControl?n("a",{staticClass:"carousel-control-prev",attrs:{href:"#",role:"button"},on:{click:function(e){return e.preventDefault(),t.prev(e)}}},[n("span",{staticClass:"carousel-control-icon material-icons",attrs:{"aria-hidden":"true"}},[t._v("keyboard_arrow_left")]),t._v(" "),n("span",{staticClass:"sr-only"},[t._v("Previous")])]):t._e(),t._v(" "),n("a",{staticClass:"carousel-control-next",attrs:{href:"#",role:"button"},on:{click:function(e){return e.preventDefault(),t.next(e)}}},[n("span",{staticClass:"carousel-control-icon material-icons",attrs:{"aria-hidden":"true"}},[t._v("keyboard_arrow_right")]),t._v(" "),n("span",{staticClass:"sr-only"},[t._v("Next")])])],1)}),[],!1,null,null,null);e.a=component.exports},1170:function(t,e,n){"use strict";n.r(e);n(51);var r=n(17),o=n(917),l=n(1068),c=n(1069),d={components:{Discussions:n(968).a},data:function(){return{perPage:3,currentPage:1,items:[{avatarTitle:"LB",date:2,name:"Laza Bogdan",title:"Using Angular HttpClientModule instead of HttpModule",chips:["Angular fundamentals"],answers:2},{avatarTitle:"AC",date:3,name:"Adam Curtis",title:"Why am I getting an error when trying to install angular/http@2.4.2",answers:1}]}}},f=n(11),v=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("page-separator",[t._v(t._s(t.$t("Discussions")))]),t._v(" "),n("b-card",{attrs:{"no-body":""}},[n("discussions",{attrs:{id:"discussions-table",items:t.items,"per-page":t.perPage,"current-page":t.currentPage}}),t._v(" "),n("b-card-footer",{staticClass:"p-8pt"},[n("pager",{attrs:{"per-page":t.perPage,items:t.items,"aria-controls":"discussions-table"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1)],1)}),[],!1,null,null,null).exports,m=n(1070),_=n(953),h=n(978),y={name:"StudentDashboard",components:{StudentDashboardTopicIqChart:l.a,StudentDashboardExperienceIqChart:c.a,StudentDashboardDiscussions:v,StudentAchievementsCarousel:m.a,AccountPathCard:_.a,CoursesCarousel:h.a},extends:o.a,data:function(){return{title:this.$t("Dashboard"),paths:[{title:"Angular",image:"angular"},{title:"Swift",image:"swift",favorite:!0},{title:"React Native",image:"react",position:"left"}]}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.app,e.abrupt("return",{title:n.i18n.t("Dashboard")});case 2:case"end":return e.stop()}}),e)})))()}},x=Object(f.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("page-header",{attrs:{title:t.title,breadcrumb:t.breadcrumb,"container-class":t.containerClass}}),t._v(" "),n("div",{staticClass:"page-section",class:t.containerClass},[n("page-separator",[t._v(t._s(t.$t("Overview")))]),t._v(" "),n("div",{staticClass:"row mb-lg-8pt"},[n("div",{staticClass:"col-lg-6"},[n("student-dashboard-topic-iq-chart")],1),t._v(" "),n("div",{staticClass:"col-lg-6"},[n("student-dashboard-experience-iq-chart"),t._v(" "),n("student-achievements-carousel")],1)]),t._v(" "),n("div",{staticClass:"row mb-lg-16pt"},[n("div",{staticClass:"col-lg-6 mb-8pt mb-sm-0"},[n("page-separator",[t._v(t._s(t.$t("Learning Paths")))]),t._v(" "),t._l(t.paths,(function(t){return n("account-path-card",{key:t.id,attrs:{title:t.title,image:t.image,favorite:t.favorite}})}))],2),t._v(" "),n("div",{staticClass:"col-lg-6"},[n("page-separator",[t._v(t._s(t.$t("Courses")))]),t._v(" "),n("courses-carousel",{attrs:{"col-class":"col-sm-6",account:!0}})],1)]),t._v(" "),n("student-dashboard-discussions")],1)],1)}),[],!1,null,null,null);e.default=x.exports},926:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"lessons":"{lessons} lessons","minutes_left":"{minutes} minutes left","hours":"{hours} hours"}}'),delete t.options._Ctor}},927:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"ro":{"lessons":"{lessons} lecții","courses":"{courses} cursuri","hours":"{hours} ore","minutes_left":"{minutes} minute rămase","Start over":"Reîncepe","Resume":"Continuă","Add Favorite":"Adaugă Favorit","Remove Favorite":"Șterge Favorit","Beginner":"Începător","Your rating":"Evaluarea ta","Begin":"Începe"}}'),delete t.options._Ctor}},940:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"ro":{"answers":"răspuns | răspunsuri"}}'),delete t.options._Ctor}},950:function(t,e,n){"use strict";var r=n(926),o=n.n(r);e.default=o.a},951:function(t,e,n){"use strict";var r=n(927),o=n.n(r);e.default=o.a},953:function(t,e,n){"use strict";var r=n(928),o=n(25),l=(n(923),n(922)),c={mixins:[r.a],props:{cardClass:{type:String,default:"mb-16pt"},title:{type:String,default:null},description:{type:String,default:null},image:{type:String,default:null},account:{type:Boolean},favorite:{type:Boolean},details:{type:Boolean},cta:{type:Boolean},open:{type:Boolean},to:{type:String,default:null}},computed:{id:function(){return l("path_")},localDescription:function(){return this.description?this.description:"Learn the fundamentals of working with ".concat(this.title," and how to create basic applications.")}},mounted:function(){var t=this;this.$root.$on("bv::popover::show",(function(e){t.$root.$emit("bv::hide::popover")})),this.details||(this.$el.addEventListener("domfactory-component-upgraded",(function(){return t.onOverlayInit()})),this.$nextTick((function(){o.handler.upgradeElement(t.$el,"overlay"),t.open&&setTimeout((function(){return t.$root.$emit("bv::show::popover",t.id)}),100)})))},beforeDestroy:function(){this.details||o.handler.downgradeElement(this.$el,"overlay")},methods:{onOverlayInit:function(){this.$el.overlay.trigger="click"},showOverlay:function(){this.$el.overlay&&this.$el.overlay.show()},hideOverlay:function(){this.$el.overlay&&this.$el.overlay.hide()}}},d=n(11),f=n(950),v=n(951),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"overlay--primary d-flex flex-column",class:{"overlay--show":t.details&&t.account}},[n("div",{staticClass:"card stack stack--1",class:["flex",t.details?"card-lg":"card-sm",t.cardClass?t.cardClass:null],attrs:{id:t.id}},[n("div",{staticClass:"card-body d-flex flex-column"},[n("div",{staticClass:"d-flex align-items-center"},[n("div",{staticClass:"flex"},[n("div",{staticClass:"d-flex align-items-center"},[n("div",{staticClass:"rounded mr-12pt z-0 o-hidden"},[n("div",{staticClass:"overlay"},[n("img",{staticClass:"rounded",attrs:{src:"/images/paths/"+t.image+"_40x40@2x.png",width:"40",height:"40",alt:t.title}}),t._v(" "),t._m(0)])]),t._v(" "),n("div",{staticClass:"flex"},[n("div",{staticClass:"card-title"},[t._v(t._s(t.title))]),t._v(" "),n("p",{staticClass:"flex text-black-50 lh-1 mb-0"},[n("small",{domProps:{textContent:t._s(t.$t("courses",{courses:18}))}})])])])]),t._v(" "),t.cta?n("b-link",{staticClass:"ml-4pt btn btn-sm btn-link text-secondary",class:{"border-1 border-secondary":t.favorite},attrs:{to:t.localePath(t.to)},domProps:{textContent:t._s(t.$t("Resume"))}}):n("b-link",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",value:{title:t.favorite?t.$t("Remove Favorite"):t.$t("Add Favorite")},expression:"{ title: favorite ? $t('Remove Favorite') : $t('Add Favorite') }",modifiers:{hover:!0,top:!0}}],staticClass:"ml-4pt material-icons text-20 card-course__icon-favorite",attrs:{to:t.localePath(t.to)}},[t._v("favorite"),t.favorite?t._e():[t._v("_border")]],2)],1),t._v(" "),t.details?[t.account?n("div",{staticClass:"d-flex align-items-center mt-8pt"},[n("small",{staticClass:"text-black-50 mr-8pt",domProps:{textContent:t._s(t.$t("Your rating"))}}),t._v(" "),t._m(6),t._v(" "),n("small",{staticClass:"text-black-50"},[t._v("4/5")])]):n("div",{staticClass:"rating mt-8pt"},[t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5)]),t._v(" "),n("p",{staticClass:"mt-16pt text-black-70 flex"},[t._v(t._s(t.localDescription))]),t._v(" "),n("div",{staticClass:"mb-16pt d-none"},[n("div",{staticClass:"d-flex align-items-center"},[n("span",{staticClass:"material-icons icon-16pt text-black-50 mr-8pt"},[t._v("check")]),t._v(" "),n("p",{staticClass:"flex text-black-50 lh-1 mb-0"},[n("small",[t._v("Fundamentals of working with "+t._s(t.title))])])]),t._v(" "),n("div",{staticClass:"d-flex align-items-center"},[n("span",{staticClass:"material-icons icon-16pt text-black-50 mr-8pt"},[t._v("check")]),t._v(" "),n("p",{staticClass:"flex text-black-50 lh-1 mb-0"},[n("small",[t._v("Create complete "+t._s(t.title)+" applications")])])]),t._v(" "),n("div",{staticClass:"d-flex align-items-center"},[n("span",{staticClass:"material-icons icon-16pt text-black-50 mr-8pt"},[t._v("check")]),t._v(" "),n("p",{staticClass:"flex text-black-50 lh-1 mb-0"},[n("small",[t._v("Working with the "+t._s(t.title)+" CLI")])])]),t._v(" "),t._m(7),t._v(" "),n("div",{staticClass:"d-flex align-items-center"},[n("span",{staticClass:"material-icons icon-16pt text-black-50 mr-8pt"},[t._v("check")]),t._v(" "),n("p",{staticClass:"flex text-black-50 lh-1 mb-0"},[n("small",[t._v("Testing with "+t._s(t.title))])])])]),t._v(" "),t.account?[n("div",{staticClass:"d-flex align-items-center mb-8pt justify-content-center"},[n("div",{staticClass:"d-flex align-items-center mr-8pt"},[n("span",{staticClass:"material-icons icon-16pt text-black-50 mr-4pt"},[t._v("access_time")]),t._v(" "),n("p",{staticClass:"flex text-black-50 lh-1 mb-0"},[n("small",{domProps:{textContent:t._s(t.$t("minutes_left",{minutes:50}))}})])]),t._v(" "),n("div",{staticClass:"d-flex align-items-center"},[n("span",{staticClass:"material-icons icon-16pt text-black-50 mr-4pt"},[t._v("play_circle_outline")]),t._v(" "),n("p",{staticClass:"flex text-black-50 lh-1 mb-0"},[n("small",{domProps:{textContent:t._s(t.$t("lessons",{lessons:12}))}})])])]),t._v(" "),n("div",{staticClass:"d-flex align-items-center justify-content-center"},[n("b-btn",{attrs:{variant:"btn-primary"},domProps:{textContent:t._s(t.$t("Resume"))}})],1)]:n("div",{staticClass:"row align-items-center"},[n("div",{staticClass:"col-auto"},[n("div",{staticClass:"d-flex align-items-center mb-4pt"},[n("span",{staticClass:"material-icons icon-16pt text-black-50 mr-4pt"},[t._v("access_time")]),t._v(" "),n("p",{staticClass:"flex text-black-50 lh-1 mb-0"},[n("small",{domProps:{textContent:t._s(t.$t("hours",{hours:6}))}})])]),t._v(" "),n("div",{staticClass:"d-flex align-items-center mb-4pt"},[n("span",{staticClass:"material-icons icon-16pt text-black-50 mr-4pt"},[t._v("play_circle_outline")]),t._v(" "),n("p",{staticClass:"flex text-black-50 lh-1 mb-0"},[n("small",{domProps:{textContent:t._s(t.$t("lessons",{lessons:12}))}})])]),t._v(" "),n("div",{staticClass:"d-flex align-items-center"},[n("span",{staticClass:"material-icons icon-16pt text-black-50 mr-4pt"},[t._v("assessment")]),t._v(" "),n("p",{staticClass:"flex text-black-50 lh-1 mb-0"},[n("small",{domProps:{textContent:t._s(t.$t("Beginner"))}})])])]),t._v(" "),n("div",{staticClass:"col text-right"},[n("b-btn",{attrs:{variant:"outline-secondary"},domProps:{textContent:t._s(t.$t("Begin"))}})],1)])]:t._e()],2)]),t._v(" "),t.details?t._e():n("b-popover",{attrs:{triggers:"click",target:t.id,html:!0,container:t.popoverContainer,"custom-class":"popover-lg"},on:{show:t.showOverlay,hide:t.hideOverlay}},[n("div",{staticClass:"media"},[n("div",{staticClass:"media-left mr-12pt"},[n("img",{staticClass:"rounded",attrs:{src:"/images/paths/"+t.image+"_40x40@2x.png",width:"40",height:"40",alt:"Angular"}})]),t._v(" "),n("div",{staticClass:"media-body"},[n("div",{staticClass:"card-title"},[t._v(t._s(t.title))]),t._v(" "),n("p",{staticClass:"text-black-50 d-flex lh-1 mb-0 small",domProps:{textContent:t._s(t.$t("courses",{courses:18}))}})])]),t._v(" "),n("p",{staticClass:"mt-16pt text-black-70"},[t._v(t._s(t.localDescription))]),t._v(" "),n("div",{staticClass:"my-32pt"},[n("div",{staticClass:"d-flex align-items-center mb-8pt justify-content-center"},[n("div",{staticClass:"d-flex align-items-center mr-8pt"},[n("span",{staticClass:"material-icons icon-16pt text-black-50 mr-4pt"},[t._v("access_time")]),t._v(" "),n("p",{staticClass:"flex text-black-50 lh-1 mb-0"},[n("small",{domProps:{textContent:t._s(t.$t("minutes_left",{minutes:50}))}})])]),t._v(" "),n("div",{staticClass:"d-flex align-items-center"},[n("span",{staticClass:"material-icons icon-16pt text-black-50 mr-4pt"},[t._v("play_circle_outline")]),t._v(" "),n("p",{staticClass:"flex text-black-50 lh-1 mb-0"},[n("small",{domProps:{textContent:t._s(t.$t("lessons",{lessons:12}))}})])])]),t._v(" "),n("div",{staticClass:"d-flex align-items-center justify-content-center"},[n("b-btn",{staticClass:"mr-8pt",attrs:{variant:"primary"},domProps:{textContent:t._s(t.$t("Resume"))}}),t._v(" "),n("b-btn",{staticClass:"ml-0",attrs:{variant:"outline-secondary"},domProps:{textContent:t._s(t.$t("Start over"))}})],1)]),t._v(" "),n("div",{staticClass:"d-flex align-items-center"},[n("small",{staticClass:"text-black-50 mr-8pt",domProps:{textContent:t._s(t.$t("Your rating"))}}),t._v(" "),n("div",{staticClass:"rating mr-8pt"},[n("span",{staticClass:"rating__item"},[n("span",{staticClass:"material-icons text-primary"},[t._v("star")])]),t._v(" "),n("span",{staticClass:"rating__item"},[n("span",{staticClass:"material-icons text-primary"},[t._v("star")])]),t._v(" "),n("span",{staticClass:"rating__item"},[n("span",{staticClass:"material-icons text-primary"},[t._v("star")])]),t._v(" "),n("span",{staticClass:"rating__item"},[n("span",{staticClass:"material-icons text-primary"},[t._v("star")])]),t._v(" "),n("span",{staticClass:"rating__item"},[n("span",{staticClass:"material-icons text-primary"},[t._v("star_border")])])]),t._v(" "),n("small",{staticClass:"text-black-50"},[t._v("4/5")])])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"overlay__content overlay__content-transparent"},[e("span",{staticClass:"overlay__action d-flex flex-column text-center lh-1"},[e("small",{staticClass:"h6 small text-white mb-0",staticStyle:{"font-weight":"500"}},[this._v("80%")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"rating__item"},[e("span",{staticClass:"material-icons"},[this._v("star")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"rating__item"},[e("span",{staticClass:"material-icons"},[this._v("star")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"rating__item"},[e("span",{staticClass:"material-icons"},[this._v("star")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"rating__item"},[e("span",{staticClass:"material-icons"},[this._v("star")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"rating__item"},[e("span",{staticClass:"material-icons"},[this._v("star_border")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"rating mr-8pt"},[n("span",{staticClass:"rating__item"},[n("span",{staticClass:"material-icons text-primary"},[t._v("star")])]),t._v(" "),n("span",{staticClass:"rating__item"},[n("span",{staticClass:"material-icons text-primary"},[t._v("star")])]),t._v(" "),n("span",{staticClass:"rating__item"},[n("span",{staticClass:"material-icons text-primary"},[t._v("star")])]),t._v(" "),n("span",{staticClass:"rating__item"},[n("span",{staticClass:"material-icons text-primary"},[t._v("star")])]),t._v(" "),n("span",{staticClass:"rating__item"},[n("span",{staticClass:"material-icons text-primary"},[t._v("star_border")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"d-flex align-items-center"},[e("span",{staticClass:"material-icons icon-16pt text-black-50 mr-8pt"},[this._v("check")]),this._v(" "),e("p",{staticClass:"flex text-black-50 lh-1 mb-0"},[e("small",[this._v("Understanding Dependency Injection")])])])}],!1,null,null,null);"function"==typeof f.default&&Object(f.default)(component),"function"==typeof v.default&&Object(v.default)(component);e.a=component.exports},955:function(t,e,n){"use strict";var r=n(940),o=n.n(r);e.default=o.a},957:function(t,e,n){var r;t.exports=(r=n(1),function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=3)}([function(t,e,n){"use strict";var r=n(5)();t.exports=function(t){return t!==r&&null!==t}},function(t,e,n){"use strict";t.exports=n(18)()?Symbol:n(20)},function(t,e){t.exports=r},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t){return t.split("/")}Object.defineProperty(e,"__esModule",{value:!0}),e.DateRange=void 0;var s=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var u,a=t[Symbol.iterator]();!(r=(u=a.next()).done)&&(n.push(u.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&a.return&&a.return()}finally{if(o)throw i}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();e.extendMoment=function(t){return t.range=function(e,n){return"string"==typeof e&&f.hasOwnProperty(e)?new v(t(this).startOf(e),t(this).endOf(e)):new v(e,n)},t.rangeFromInterval=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t();if(t.isMoment(r)||(r=t(r)),!r.isValid())throw new Error("Invalid date.");var o=r.clone().add(n,e),i=[];return i.push(t.min(r,o)),i.push(t.max(r,o)),new v(i)},t.rangeFromISOString=function(e){var n=a(e),r=t.parseZone(n[0]),o=t.parseZone(n[1]);return new v(r,o)},t.parseZoneRange=t.rangeFromISOString,t.fn.range=t.range,t.range.constructor=v,t.isRange=function(t){return t instanceof v},t.fn.within=function(t){return t.contains(this.toDate())},t};var d=r(n(2)),p=r(n(1)),f={year:!0,quarter:!0,month:!0,week:!0,day:!0,hour:!0,minute:!0,second:!0},v=e.DateRange=function(){function t(e,n){i(this,t);var r=e,o=n;if(1===arguments.length||void 0===n)if("object"===(void 0===e?"undefined":l(e))&&2===e.length){var u=s(e,2);r=u[0],o=u[1]}else if("string"==typeof e){var c=a(e),f=s(c,2);r=f[0],o=f[1]}this.start=r||0===r?(0,d.default)(r):(0,d.default)(-864e13),this.end=o||0===o?(0,d.default)(o):(0,d.default)(864e13)}return c(t,[{key:"adjacent",value:function(t){var e=this.start.isSame(t.end),n=this.end.isSame(t.start);return e&&t.start.valueOf()<=this.start.valueOf()||n&&t.end.valueOf()>=this.end.valueOf()}},{key:"add",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{adjacent:!1};return this.overlaps(t,e)?new this.constructor(d.default.min(this.start,t.start),d.default.max(this.end,t.end)):null}},{key:"by",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{excludeEnd:!1,step:1},n=this;return o({},p.default.iterator,(function(){var r=e.step||1,o=Math.abs(n.start.diff(n.end,t))/r,i=e.excludeEnd||!1,u=0;return e.hasOwnProperty("exclusive")&&(i=e.exclusive),{next:function(){var e=n.start.clone().add(u*r,t),a=i?!(u<o):!(u<=o);return u++,{done:a,value:a?void 0:e}}}}))}},{key:"byRange",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{excludeEnd:!1,step:1},n=this,r=e.step||1,i=this.valueOf()/t.valueOf()/r,u=Math.floor(i),a=e.excludeEnd||!1,s=0;return e.hasOwnProperty("exclusive")&&(a=e.exclusive),o({},p.default.iterator,(function(){return u===1/0?{done:!0}:{next:function(){var e=(0,d.default)(n.start.valueOf()+t.valueOf()*s*r),o=u===i&&a?!(s<u):!(s<=u);return s++,{done:o,value:o?void 0:e}}}}))}},{key:"center",value:function(){var t=this.start.valueOf()+this.diff()/2;return(0,d.default)(t)}},{key:"clone",value:function(){return new this.constructor(this.start.clone(),this.end.clone())}},{key:"contains",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{excludeStart:!1,excludeEnd:!1},r=this.start.valueOf(),o=this.end.valueOf(),i=e.valueOf(),u=e.valueOf(),a=n.excludeStart||!1,s=n.excludeEnd||!1;n.hasOwnProperty("exclusive")&&(a=s=n.exclusive),e instanceof t&&(i=e.start.valueOf(),u=e.end.valueOf());var l=r<i||r<=i&&!a,c=o>u||o>=u&&!s;return l&&c}},{key:"diff",value:function(t,e){return this.end.diff(this.start,t,e)}},{key:"duration",value:function(t,e){return this.diff(t,e)}},{key:"intersect",value:function(t){var e=this.start.valueOf(),n=this.end.valueOf(),r=t.start.valueOf(),o=t.end.valueOf(),u=r==o;if(e==n){if(e==r||e==o)return null;if(e>r&&e<o)return this.clone()}else if(u){var s=r;if(s==e||s==n)return null;if(s>e&&s<n)return new this.constructor(s,s)}return e<=r&&r<n&&n<o?new this.constructor(r,n):r<e&&e<o&&o<=n?new this.constructor(e,o):r<e&&e<=n&&n<o?this.clone():e<=r&&r<=o&&o<=n?new this.constructor(r,o):null}},{key:"isEqual",value:function(t){return this.start.isSame(t.start)&&this.end.isSame(t.end)}},{key:"isSame",value:function(t){return this.isEqual(t)}},{key:"overlaps",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{adjacent:!1},n=null!==this.intersect(t);return e.adjacent&&!n?this.adjacent(t):n}},{key:"reverseBy",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{excludeStart:!1,step:1},n=this;return o({},p.default.iterator,(function(){var r=e.step||1,o=Math.abs(n.start.diff(n.end,t))/r,i=e.excludeStart||!1,u=0;return e.hasOwnProperty("exclusive")&&(i=e.exclusive),{next:function(){var e=n.end.clone().subtract(u*r,t),a=i?!(u<o):!(u<=o);return u++,{done:a,value:a?void 0:e}}}}))}},{key:"reverseByRange",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{excludeStart:!1,step:1},n=this,r=e.step||1,i=this.valueOf()/t.valueOf()/r,u=Math.floor(i),a=e.excludeStart||!1,s=0;return e.hasOwnProperty("exclusive")&&(a=e.exclusive),o({},p.default.iterator,(function(){return u===1/0?{done:!0}:{next:function(){var e=(0,d.default)(n.end.valueOf()-t.valueOf()*s*r),o=u===i&&a?!(s<u):!(s<=u);return s++,{done:o,value:o?void 0:e}}}}))}},{key:"snapTo",value:function(t){var e=this.clone();return e.start.isSame((0,d.default)(-864e13))||(e.start=e.start.startOf(t)),e.end.isSame((0,d.default)(864e13))||(e.end=e.end.endOf(t)),e}},{key:"subtract",value:function(t){var e=this.start.valueOf(),n=this.end.valueOf(),r=t.start.valueOf(),o=t.end.valueOf();return null===this.intersect(t)?[this]:r<=e&&e<n&&n<=o?[]:r<=e&&e<o&&o<n?[new this.constructor(o,n)]:e<r&&r<n&&n<=o?[new this.constructor(e,r)]:e<r&&r<o&&o<n?[new this.constructor(e,r),new this.constructor(o,n)]:e<r&&r<n&&o<n?[new this.constructor(e,r),new this.constructor(r,n)]:[]}},{key:"toDate",value:function(){return[this.start.toDate(),this.end.toDate()]}},{key:"toString",value:function(){return this.start.format()+"/"+this.end.format()}},{key:"valueOf",value:function(){return this.end.valueOf()-this.start.valueOf()}}]),t}()},function(t,e,n){"use strict";var r=n(6),i=n(13),u=n(9),a=n(15);(t.exports=function(t,e){var n,o,u,s,l;return arguments.length<2||"string"!=typeof t?(s=e,e=t,t=null):s=arguments[2],null==t?(n=u=!0,o=!1):(n=a.call(t,"c"),o=a.call(t,"e"),u=a.call(t,"w")),l={value:e,configurable:n,enumerable:o,writable:u},s?r(i(s),l):l}).gs=function(t,e,n){var o,s,l,c;return"string"!=typeof t?(l=n,n=e,e=t,t=null):l=arguments[3],null==e?e=void 0:u(e)?null==n?n=void 0:u(n)||(l=n,n=void 0):(l=e,e=n=void 0),null==t?(o=!0,s=!1):(o=a.call(t,"c"),s=a.call(t,"e")),c={get:e,set:n,configurable:o,enumerable:s},l?r(i(l),c):c}},function(t,e,n){"use strict";t.exports=function(){}},function(t,e,n){"use strict";t.exports=n(7)()?Object.assign:n(8)},function(t,e,n){"use strict";t.exports=function(){var t,e=Object.assign;return"function"==typeof e&&(e(t={foo:"raz"},{bar:"dwa"},{trzy:"trzy"}),t.foo+t.bar+t.trzy==="razdwatrzy")}},function(t,e,n){"use strict";var r=n(10),o=n(14),i=Math.max;t.exports=function(t,e){var n,u,a,s=i(arguments.length,2);for(t=Object(o(t)),a=function(r){try{t[r]=e[r]}catch(t){n||(n=t)}},u=1;u<s;++u)r(e=arguments[u]).forEach(a);if(void 0!==n)throw n;return t}},function(t,e,n){"use strict";t.exports=function(t){return"function"==typeof t}},function(t,e,n){"use strict";t.exports=n(11)()?Object.keys:n(12)},function(t,e,n){"use strict";t.exports=function(){try{return Object.keys("primitive"),!0}catch(t){return!1}}},function(t,e,n){"use strict";var r=n(0),o=Object.keys;t.exports=function(t){return o(r(t)?Object(t):t)}},function(t,e,n){"use strict";var r=n(0),o=Array.prototype.forEach,i=Object.create,u=function(t,e){var n;for(n in t)e[n]=t[n]};t.exports=function(t){var e=i(null);return o.call(arguments,(function(t){r(t)&&u(Object(t),e)})),e}},function(t,e,n){"use strict";var r=n(0);t.exports=function(t){if(!r(t))throw new TypeError("Cannot use null or undefined");return t}},function(t,e,n){"use strict";t.exports=n(16)()?String.prototype.contains:n(17)},function(t,e,n){"use strict";var r="razdwatrzy";t.exports=function(){return"function"==typeof r.contains&&!0===r.contains("dwa")&&!1===r.contains("foo")}},function(t,e,n){"use strict";var r=String.prototype.indexOf;t.exports=function(t){return r.call(this,t,arguments[1])>-1}},function(t,e,n){"use strict";var r={object:!0,symbol:!0};t.exports=function(){var t;if("function"!=typeof Symbol)return!1;t=Symbol("test symbol");try{String(t)}catch(t){return!1}return!!r[typeof Symbol.iterator]&&!!r[typeof Symbol.toPrimitive]&&!!r[typeof Symbol.toStringTag]}},function(t,e,n){"use strict";t.exports=function(t){return!!t&&("symbol"==typeof t||!!t.constructor&&"Symbol"===t.constructor.name&&"Symbol"===t[t.constructor.toStringTag])}},function(t,e,n){"use strict";var r,o,i,u,a=n(4),s=n(21),l=Object.create,c=Object.defineProperties,d=Object.defineProperty,f=Object.prototype,v=l(null);if("function"==typeof Symbol){r=Symbol;try{String(r()),u=!0}catch(t){}}var p=function(){var t=l(null);return function(e){for(var n,r,o=0;t[e+(o||"")];)++o;return t[e+=o||""]=!0,d(f,n="@@"+e,a.gs(null,(function(t){r||(r=!0,d(this,n,a(t)),r=!1)}))),n}}();i=function(t){if(this instanceof i)throw new TypeError("Symbol is not a constructor");return o(t)},t.exports=o=function t(e){var n;if(this instanceof t)throw new TypeError("Symbol is not a constructor");return u?r(e):(n=l(i.prototype),e=void 0===e?"":String(e),c(n,{__description__:a("",e),__name__:a("",p(e))}))},c(o,{for:a((function(t){return v[t]?v[t]:v[t]=o(String(t))})),keyFor:a((function(t){var e;for(e in s(t),v)if(v[e]===t)return e})),hasInstance:a("",r&&r.hasInstance||o("hasInstance")),isConcatSpreadable:a("",r&&r.isConcatSpreadable||o("isConcatSpreadable")),iterator:a("",r&&r.iterator||o("iterator")),match:a("",r&&r.match||o("match")),replace:a("",r&&r.replace||o("replace")),search:a("",r&&r.search||o("search")),species:a("",r&&r.species||o("species")),split:a("",r&&r.split||o("split")),toPrimitive:a("",r&&r.toPrimitive||o("toPrimitive")),toStringTag:a("",r&&r.toStringTag||o("toStringTag")),unscopables:a("",r&&r.unscopables||o("unscopables"))}),c(i.prototype,{constructor:a(o),toString:a("",(function(){return this.__name__}))}),c(o.prototype,{toString:a((function(){return"Symbol ("+s(this).__description__+")"})),valueOf:a((function(){return s(this)}))}),d(o.prototype,o.toPrimitive,a("",(function(){var t=s(this);return"symbol"==typeof t?t:t.toString()}))),d(o.prototype,o.toStringTag,a("c","Symbol")),d(i.prototype,o.toStringTag,a("c",o.prototype[o.toStringTag])),d(i.prototype,o.toPrimitive,a("c",o.prototype[o.toPrimitive]))},function(t,e,n){"use strict";var r=n(19);t.exports=function(t){if(!r(t))throw new TypeError(t+" is not a symbol");return t}}]))},968:function(t,e,n){"use strict";var r={props:{items:{type:Array,default:function(){return[]}}},computed:{localItems:function(){var t=this;return this.items.map((function(e){return e.date_for_humans=t.$t("diff_for_humans",{when:t.$tc("datetime_units.day",e.date,{value:e.date})}),e}))}}},o=n(11),l=n(955),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-list-group",{staticClass:"border-0",attrs:{flush:""}},t._l(t.localItems,(function(e){return n("b-list-group-item",{key:e.id,staticClass:"p-3"},[n("div",{staticClass:"row align-items-start"},[n("div",{staticClass:"col-md-3 mb-8pt mb-md-0"},[n("div",{staticClass:"media align-items-center"},[n("div",{staticClass:"media-left mr-12pt"},[n("fmv-avatar",{attrs:{to:t.localePath("community-student-profile"),title:e.avatarTitle,src:e.avatar,size:"sm",circle:""}})],1),t._v(" "),n("div",{staticClass:"d-flex flex-column media-body media-middle"},[n("b-link",{staticClass:"card-title",attrs:{to:t.localePath("community-student-profile")},domProps:{textContent:t._s(e.name)}}),t._v(" "),n("small",{staticClass:"text-muted",domProps:{textContent:t._s(e.date_for_humans)}})],1)])]),t._v(" "),n("div",{staticClass:"col mb-8pt mb-md-0"},[n("p",{class:{"mb-8pt":!!e.chips,"mb-0":!e.chips}},[n("b-link",{staticClass:"text-body",attrs:{to:t.localePath("community-discussion")}},[n("strong",[t._v(t._s(e.title))])])],1),t._v(" "),e.chips?t._l(e.chips,(function(e){return n("b-link",{key:e.id,staticClass:"chip chip-outline-secondary",attrs:{to:t.localePath("community-discussion"),exact:""}},[t._v(t._s(e))])})):t._e()],2),t._v(" "),n("div",{staticClass:"col-auto d-flex flex-column align-items-center justify-content-center"},[n("h5",{staticClass:"m-0"},[t._v(t._s(e.answers||1))]),t._v(" "),n("p",{staticClass:"lh-1 mb-0 small text-70",domProps:{textContent:t._s(t.$tc("answers",e.answers||1))}})])])])})),1)}),[],!1,null,null,null);"function"==typeof l.default&&Object(l.default)(component);e.a=component.exports},979:function(t,e,n){"use strict";var r={props:{item:{type:Object,default:null}}},o=n(11),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-link",{staticClass:"card border-0 mb-0",attrs:{to:""}},[n("img",{staticClass:"card-img",staticStyle:{"max-height":"100%",width:"initial"},attrs:{src:t.item.image,alt:t.item.title}}),t._v(" "),n("div",{staticClass:"fullbleed bg-primary",staticStyle:{opacity:".5"}}),t._v(" "),n("span",{staticClass:"card-body d-flex flex-column align-items-center justify-content-center fullbleed"},[n("span",{staticClass:"row flex-nowrap"},[n("span",{staticClass:"col-auto text-center d-flex flex-column justify-content-center align-items-center"},[n("span",{staticClass:"h5 text-white text-uppercase font-weight-normal m-0 d-block"},[t._v("Achievement")]),t._v(" "),n("span",{staticClass:"text-white-60 d-block mb-24pt"},[t._v(t._s(t.item.date))])]),t._v(" "),n("span",{staticClass:"col d-flex flex-column"},[n("span",{staticClass:"text-right flex mb-16pt"},[n("b-img",{staticClass:"rounded",attrs:{src:t.item.logo,width:"64",alt:t.item.title}})],1)])]),t._v(" "),n("span",{staticClass:"row flex-nowrap"},[n("span",{staticClass:"col-auto text-center d-flex flex-column justify-content-center align-items-center"},[n("b-img",{attrs:{src:"/images/illustration/achievement/128/white.png",width:"64",alt:"achievement"}})],1),t._v(" "),n("span",{staticClass:"col d-flex flex-column"},[n("span",[n("span",{staticClass:"card-title text-white mb-4pt d-block"},[t._v(t._s(t.item.title))]),t._v(" "),n("span",{staticClass:"text-white-60"},[t._v(t._s(t.item.description))])])])])])])}),[],!1,null,null,null);e.a=component.exports}}]);