(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{1008:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"question_index":"Question {index} of {total}"}}'),delete t.options._Ctor}},1009:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"ro":{"question_index":"Întrebarea {index} din {total}","Questions":"Întrebări","Answers":"Răspunsuri","Single Answer":"Un singur răspuns","Code":"Cod"}}'),delete t.options._Ctor}},1010:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"ro":{"New Question":"Întrebare Nouă","Question":"Întrebare","Shortly describe the question.":"Descrie întrebarea pe scurt.","Select a question type.":"Alege tipul întrebării","Question Type":"Tipul Întrebării","Multiple Answer":"Mai multe răspunsuri","Single Answer":"Un singur răspuns","Essay":"Eseu","Select one or more answers.":"Alege unul sau mai multe răspunsuri.","Answers":"Răspunsuri","Add Answer":"Adaugă Răspuns","Completion Points":"Punctaj","Add Question":"Adaugă Întrebare"}}'),delete t.options._Ctor}},1011:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"ro":{"Save Changes":"Salvează Modificări","Save Draft":"Salvează Schiță","Delete Quiz":"Șterge Testul","Options":"Opțiuni","Course":"Curs","Select a course.":"Alege un curs."}}'),delete t.options._Ctor}},1108:function(t,e,n){"use strict";var o=n(1008),r=n.n(o);e.default=r.a},1109:function(t,e,n){"use strict";var o=n(1009),r=n.n(o);e.default=r.a},1110:function(t,e,n){"use strict";var o=n(1010),r=n.n(o);e.default=r.a},1111:function(t,e,n){"use strict";var o=n(1011),r=n.n(o);e.default=r.a},1158:function(t,e,n){"use strict";n.r(e);n(51);var o=n(17),r=n(917),l={data:function(){return{items:[{id:1,question:"An angular 2 project written in typescript is* transpiled to javascript duri*ng the build process. Which of the following additional features are provided to the developer while programming on typescript over javascript?"},{id:2,question:"What will be the output of below program?",code:"\n          function f(input: boolean) {\n            let a = 100;\n\n            if (input) {\n                let b = a + 1;\n                return b;\n            }\n            return b;\n          }\n        "}]}}},c=n(11),d=n(1108),f=n(1109),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("page-separator",{attrs:{title:t.$t("Questions")}}),t._v(" "),n("ul",{staticClass:"list-group stack mb-40pt"},t._l(t.items,(function(e,o){return n("li",{key:e.id,staticClass:"list-group-item d-flex"},[n("i",{staticClass:"material-icons text-70 icon-16pt icon--left"},[t._v("drag_handle")]),t._v(" "),n("div",{staticClass:"flex d-flex flex-column"},[n("div",{staticClass:"card-title mb-4pt",domProps:{textContent:t._s(t.$t("question_index",{index:o+1,total:t.items.length}))}}),t._v(" "),n("div",{staticClass:"card-subtitle text-70 paragraph-max mb-16pt",domProps:{textContent:t._s(e.question)}}),t._v(" "),e.code?n("hljs",{staticClass:"card card-body bg-dark mb-16pt",attrs:{lang:"js",code:e.code}}):t._e(),t._v(" "),n("div",{staticClass:"d-flex"},[n("b-link",{staticClass:"chip chip-light d-inline-flex align-items-center"},[n("md-icon",{staticClass:"icon-16pt",attrs:{left:""},domProps:{textContent:t._s("keyboard_arrow_down")}}),t._v("\n            "+t._s(t.$t("Answers"))+"\n          ")],1),t._v(" "),n("div",{staticClass:"chip chip-outline-secondary",domProps:{textContent:t._s(t.$t("Single Answer"))}}),t._v(" "),e.code?n("div",{staticClass:"chip chip-outline-secondary",domProps:{textContent:t._s(t.$t("Code"))}}):t._e()],1)],1),t._v(" "),n("span",{staticClass:"text-muted mx-12pt"},[t._v("800 pt")])])})),0)],1)}),[],!1,null,null,null);"function"==typeof d.default&&Object(d.default)(component),"function"==typeof f.default&&Object(f.default)(component);var m=component.exports,v={data:function(){return{answers:["JavaScript","Angular","Bootstrap","CSS","HTML"],content:"An angular 2 project written in typescript is* transpiled to javascript duri*ng the build process. Which of the following additional features are provided to the developer while programming on typescript over javascript?",editorOption:{theme:"snow",placeholder:this.$t("Question"),modules:{toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"]]}}}}},_=n(1110),h=Object(c.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("page-separator",{attrs:{title:t.$t("New Question")}}),t._v(" "),n("b-card",[n("b-form-group",{attrs:{label:t.$t("Question"),description:t.$t("Shortly describe the question."),"label-class":"form-label"}},[n("client-only",[n("quill-editor",{ref:"editor",attrs:{options:t.editorOption},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1)],1),t._v(" "),n("b-form-group",{attrs:{description:t.$t("Select a question type."),label:t.$t("Question Type"),"label-class":"form-label"}},[n("b-form-select",{attrs:{value:t.$t("Multiple Answer"),options:[t.$t("Multiple Answer"),t.$t("Single Answer"),t.$t("Essay")]}})],1),t._v(" "),n("b-form-group",{attrs:{description:t.$t("Select one or more answers."),label:t.$t("Answers"),"label-class":"form-label"}},[n("b-form-tags",{attrs:{placeholder:t.$t("Add Answer")},model:{value:t.answers,callback:function(e){t.answers=e},expression:"answers"}})],1),t._v(" "),n("b-form-group",{attrs:{label:t.$t("Completion Points"),"label-class":"form-label"}},[n("b-form-input",{attrs:{value:"1000"}})],1),t._v(" "),n("b-btn",{attrs:{type:"submit",variant:"outline-secondary"},domProps:{textContent:t._s(t.$t("Add Question"))}})],1)],1)}),[],!1,null,null,null);"function"==typeof _.default&&Object(_.default)(h);var C={components:{EditQuizQuestions:m,NewQuizQuestionCard:h.exports},extends:r.a,data:function(){return{title:this.$t("Edit Quiz")}},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.app,e.abrupt("return",{title:n.i18n.t("Edit Quiz")});case 2:case"end":return e.stop()}}),e)})))()}},w=n(1111),x=Object(c.a)(C,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("page-header",{attrs:{title:t.title,breadcrumb:t.breadcrumb,"container-class":t.containerClass}}),t._v(" "),n("div",{staticClass:"page-section border-bottom-2"},[n("div",{class:t.containerClass},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-8"},[n("edit-quiz-questions"),t._v(" "),n("new-quiz-question-card")],1),t._v(" "),n("div",{staticClass:"col-md-4"},[n("b-card",{attrs:{"header-class":"text-center","no-body":""},scopedSlots:t._u([{key:"header",fn:function(){return[n("b-btn",{attrs:{type:"submit",variant:"accent"},domProps:{textContent:t._s(t.$t("Save Changes"))}})]},proxy:!0}])},[t._v(" "),n("b-list-group",{staticClass:"list-group-flush border-top-0"},[n("b-list-group-item",{staticClass:"d-flex"},[n("b-link",{staticClass:"flex"},[n("strong",{domProps:{textContent:t._s(t.$t("Save Draft"))}})]),t._v(" "),n("md-icon",{staticClass:"text-muted",domProps:{textContent:t._s("check")}})],1),t._v(" "),n("b-list-group-item",[n("strong",{staticClass:"text-danger",domProps:{textContent:t._s(t.$t("Delete Quiz"))}})])],1)],1),t._v(" "),n("page-separator",{attrs:{title:t.$t("Options")}}),t._v(" "),n("b-card",[n("b-form-group",{staticClass:"mb-0",attrs:{description:t.$t("Select a course."),label:t.$t("Course"),"label-class":"form-label"}},[n("b-form-select",{attrs:{value:"Angular Fundamentals",options:["Angular Fundamentals","Build an iOS Application in Swift"]}})],1)],1)],1)])])])],1)}),[],!1,null,null,null);"function"==typeof w.default&&Object(w.default)(x);e.default=x.exports},917:function(t,e,n){"use strict";var o={mixins:[n(43).a],layout:function(t){return t.store.getters.settings.layout.layout},head:function(){return{title:"".concat(this.$t(this.title)," - ").concat(this.$store.state.brand)}},data:function(){return{title:null,redirectLayout:!0}},computed:{breadcrumb:function(){return[{text:this.$t("Home"),to:this.localePath("/")},{text:this.$t(this.title),active:!0}]},headerClass:function(){return null},headerEffects:function(){return"waterfall"},headerImage:function(){return null},headerContentClass:function(){return null},headerCondenses:function(){return!1},headerContentComponent:function(){return null},headerContentComponentProps:function(){return null},guest:function(){return!1},subLayout:function(){return!1},subLayoutDrawer:function(){return!1},subLayoutDrawerId:function(){return"sub-layout-drawer"},subLayoutDrawerAlign:function(){return"end"}},created:function(){this.emitOptions()},methods:{emitOptions:function(){var t=this;["guest","subLayout","subLayoutDrawerId","subLayoutDrawerAlign","subLayoutDrawer","headerClass","headerEffects","headerImage","headerContentClass","headerCondenses","headerContentComponent","headerContentComponentProps"].map((function(option){void 0!==t[option]&&t.$root.$emit("luma::".concat(option),t[option])}))}}},r=n(11),component=Object(r.a)(o,void 0,void 0,!1,null,null,null);e.a=component.exports}}]);