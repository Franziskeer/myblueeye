(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{1060:function(t,e,n){"use strict";var r={props:{item:{type:Object,required:!0}}},o=n(11),l={components:{ActivityCard:Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[n("div",{staticClass:"card-body"},[n("div",{staticClass:"d-flex mb-1"},[n("fmv-avatar",{staticClass:"mr-3",attrs:{title:t.item.avatar_title,circle:"",size:"sm"}}),t._v(" "),n("div",{staticClass:"flex"},[n("div",{staticClass:"d-flex align-items-center mb-1"},[n("strong",{staticClass:"card-title",domProps:{textContent:t._s(t.item.name)}}),t._v(" "),n("small",{staticClass:"ml-auto text-muted",domProps:{textContent:t._s(t.item.date)}})]),t._v(" "),n("div",{domProps:{innerHTML:t._s(t.item.content)}}),t._v(" "),t.item.card?n("b-link",{staticClass:"card my-3 text-body text-decoration-0 measure-lead"},[n("img",{staticClass:"card-img-top",attrs:{src:t.item.card.image,alt:"image"}}),t._v(" "),n("span",{staticClass:"card-footer d-flex flex-column"},[n("strong",{domProps:{textContent:t._s(t.item.card.title)}}),t._v(" "),n("span",{staticClass:"text-black-70",domProps:{textContent:t._s(t.item.card.description)}}),t._v(" "),n("span",{staticClass:"text-muted",domProps:{textContent:t._s(t.item.card.link)}})])]):t._e()],1)],1),t._v(" "),n("div",{staticClass:"d-flex align-items-center"},[n("b-link",{staticClass:"text-muted d-flex align-items-center text-decoration-0"},[n("i",{staticClass:"material-icons mr-1",staticStyle:{"font-size":"inherit"}},[t._v("favorite_border")]),t._v(" \n        "+t._s(t.item.favorites)+"\n      ")]),t._v(" "),n("b-link",{staticClass:"text-muted d-flex align-items-center text-decoration-0 ml-3"},[n("i",{staticClass:"material-icons mr-1",staticStyle:{"font-size":"inherit"}},[t._v("thumb_up")]),t._v(" \n        "+t._s(t.item.likes)+"\n      ")])],1)])])}),[],!1,null,null,null).exports},data:function(){return{items:[{avatar:"/images/people/50/guy-2.jpg",avatar_title:"LB",name:"Laza Bogdan",date:"3 days ago",content:'<p class="measure-lead">Thanks for contributing to the release of LearnPlus - Learning Management Template <a href="">https://www.frontendmatter.com/themes/learnpl...</a> 🔥</p><p><a href="">#themeforest</a> <a href="">#EnvatoMarket</a></p>',favorites:26,likes:123},{avatar:"/images/people/50/woman-5.jpg",avatar_title:"LB",name:"Laza Bogdan",date:"4 days ago",content:'<p class="measure-lead">Checkout our new JVC camera course on <a href="">https://t.co/Wh7jE0yz4h</a> 😉',card:{image:"/images/stories/256_rsz_phil-hearing-769014-unsplash.jpg",title:"Learn How To Operate a JVC Camera",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",link:"frontendmatter.com"},favorites:156,likes:351}]}}},c=n(995),d=Object(o.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this._l(this.items,(function(t){return e("activity-card",{key:t.id,attrs:{item:t}})})),this._v(" "),e("b-btn",{attrs:{block:"",variant:"light"},domProps:{textContent:this._s(this.$t("Load more ..."))}})],2)}),[],!1,null,null,null);"function"==typeof c.default&&Object(c.default)(d);e.a=d.exports},1096:function(t,e,n){"use strict";var r=n(996),o=n.n(r);e.default=o.a},1097:function(t,e,n){"use strict";var r=n(997),o=n.n(r);e.default=o.a},1165:function(t,e,n){"use strict";n.r(e);n(51);var r=n(17),o=n(917),l={data:function(){return{items:[{course:"Angular Routing In-Depth",image:"/images/paths/angular_routing_200x168.png",rating:3},{course:"Angular Unit Testing",image:"/images/paths/angular_testing_200x168.png",rating:4},{course:"Introduction to TypeScript",image:"/images/paths/typescript_200x168.png",rating:5},{course:"Learn Angular Fundamentals",image:"/images/paths/angular_200x168.png",rating:5}]}}},c=n(11),d=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row card-group-row mb-8pt"},t._l(t.items,(function(e){return n("div",{key:e.id,staticClass:"col-sm-6 card-group-row__col"},[n("div",{staticClass:"card card-sm card-group-row__card"},[n("div",{staticClass:"card-body d-flex align-items-center"},[n("fmv-avatar",{staticClass:"overlay overlay--primary mr-12pt",attrs:{to:t.localePath("student-course"),src:e.image,alt:e.course,landscape:""},scopedSlots:t._u([{key:"after-img",fn:function(){return[n("span",{staticClass:"overlay__content rounded"})]},proxy:!0}],null,!0)}),t._v(" "),n("div",{staticClass:"flex"},[n("b-link",{staticClass:"card-title mb-4pt",attrs:{to:t.localePath("student-course")},domProps:{textContent:t._s(e.course)}}),t._v(" "),n("b-form-rating",{staticClass:"b-rating-inline",attrs:{value:e.rating,variant:"rating",size:"sm","show-value":"","show-value-max":"",readonly:"",inline:"","no-border":""}})],1)],1)])])})),0)}),[],!1,null,null,null).exports,m={components:{ProfileActivity:n(1060).a,ProfileCourses:d},extends:o.a,data:function(){return{title:this.$t("Instructor Profile"),profile:{id:1,name:"Laza Bogdan",about:"Fueled by my passion for understanding the nuances of cross-cultural advertising, I consider myself a forever student, eager to both build on my academic foundations in psychology and sociology and stay in tune with the latest digital marketing strategies through continued coursework.",connect:"I’m currently working as a freelance marketing director and always interested in a challenge. Here’s how to reach out and connect."}}},computed:{headerClass:function(){return"mb-0"}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.app,e.abrupt("return",{title:n.i18n.t("Instructor Profile")});case 2:case"end":return e.stop()}}),e)})))()}},f=n(1096),v=n(1097),_=Object(c.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"page-section bg-primary border-bottom-white"},[n("div",{staticClass:"d-flex flex-column flex-md-row align-items-center text-center text-md-left",class:t.containerClass},[n("img",{staticClass:"mr-md-32pt mb-32pt mb-md-0",attrs:{src:"/images/illustration/teacher/128/white.svg",width:"104",alt:"student"}}),t._v(" "),n("div",{staticClass:"flex mb-32pt mb-md-0"},[n("h2",{staticClass:"text-white mb-0",domProps:{textContent:t._s(t.profile.name)}}),t._v(" "),n("p",{staticClass:"lead text-white-50 d-flex align-items-center"},[t._v("\n          "+t._s(t.$t("Instructor"))+"\n          "),n("span",{staticClass:"ml-16pt d-flex align-items-center"},[n("i",{staticClass:"material-icons icon-16pt mr-4pt"},[t._v("opacity")]),t._v("\n            "+t._s(t.$t("points",{points:2300}))+"\n          ")])])]),t._v(" "),n("b-btn",{attrs:{variant:"outline-white"},domProps:{textContent:t._s(t.$t("Follow"))}})],1)]),t._v(" "),n("div",{staticClass:"page-section bg-alt border-bottom-2"},[n("div",{class:t.containerClass},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6"},[n("h4",{domProps:{textContent:t._s(t.$t("About me"))}}),t._v(" "),n("p",{staticClass:"text-70",domProps:{textContent:t._s(t.profile.about)}})]),t._v(" "),n("div",{staticClass:"col-md-6"},[n("h4",{domProps:{textContent:t._s(t.$t("Connect"))}}),t._v(" "),n("p",{staticClass:"text-70",domProps:{textContent:t._s(t.profile.connect)}}),t._v(" "),n("div",{staticClass:"d-flex align-items-center"},[n("b-link",{staticClass:"text-accent fab fa-facebook-square font-size-24pt mr-8pt"}),t._v(" "),n("b-link",{staticClass:"text-accent fab fa-twitter-square font-size-24pt"})],1)])])])]),t._v(" "),n("div",{staticClass:"page-section"},[n("div",{class:t.containerClass},[n("page-headline",{attrs:{center:"",title:"Level-up Your Career",description:"Courses by "+t.profile.name}}),t._v(" "),n("profile-courses"),t._v(" "),n("profile-activity")],1)])])}),[],!1,null,null,null);"function"==typeof f.default&&Object(f.default)(_),"function"==typeof v.default&&Object(v.default)(_);e.default=_.exports},917:function(t,e,n){"use strict";var r={mixins:[n(43).a],layout:function(t){return t.store.getters.settings.layout.layout},head:function(){return{title:"".concat(this.$t(this.title)," - ").concat(this.$store.state.brand)}},data:function(){return{title:null,redirectLayout:!0}},computed:{breadcrumb:function(){return[{text:this.$t("Home"),to:this.localePath("/")},{text:this.$t(this.title),active:!0}]},headerClass:function(){return null},headerEffects:function(){return"waterfall"},headerImage:function(){return null},headerContentClass:function(){return null},headerCondenses:function(){return!1},headerContentComponent:function(){return null},headerContentComponentProps:function(){return null},guest:function(){return!1},subLayout:function(){return!1},subLayoutDrawer:function(){return!1},subLayoutDrawerId:function(){return"sub-layout-drawer"},subLayoutDrawerAlign:function(){return"end"}},created:function(){this.emitOptions()},methods:{emitOptions:function(){var t=this;["guest","subLayout","subLayoutDrawerId","subLayoutDrawerAlign","subLayoutDrawer","headerClass","headerEffects","headerImage","headerContentClass","headerCondenses","headerContentComponent","headerContentComponentProps"].map((function(option){void 0!==t[option]&&t.$root.$emit("luma::".concat(option),t[option])}))}}},o=n(11),component=Object(o.a)(r,void 0,void 0,!1,null,null,null);e.a=component.exports},956:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"ro":{"Load more ...":"Încarcă mai multe ..."}}'),delete t.options._Ctor}},995:function(t,e,n){"use strict";var r=n(956),o=n.n(r);e.default=o.a},996:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"points":"{points} points"}}'),delete t.options._Ctor}},997:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"ro":{"points":"{points} puncte","Follow":"Urmărește","About me":"Despre mine","Connect":"Conectare"}}'),delete t.options._Ctor}}}]);