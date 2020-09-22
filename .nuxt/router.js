import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3d6ce610 = () => interopDefault(import('../pages/documentation/index.vue' /* webpackChunkName: "pages/documentation/index" */))
const _51664f4d = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _b887f180 = () => interopDefault(import('../pages/forgot-password.vue' /* webpackChunkName: "pages/forgot-password" */))
const _1e944a55 = () => interopDefault(import('../pages/landing/index.vue' /* webpackChunkName: "pages/landing/index" */))
const _1b0df264 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _3480b221 = () => interopDefault(import('../pages/messages.vue' /* webpackChunkName: "pages/messages" */))
const _466100fe = () => interopDefault(import('../pages/pricing.vue' /* webpackChunkName: "pages/pricing" */))
const _d9eb71a6 = () => interopDefault(import('../pages/signup.vue' /* webpackChunkName: "pages/signup" */))
const _743760f4 = () => interopDefault(import('../pages/account/invoice.vue' /* webpackChunkName: "pages/account/invoice" */))
const _bec029c6 = () => interopDefault(import('../pages/community/blog.vue' /* webpackChunkName: "pages/community/blog" */))
const _06f85e00 = () => interopDefault(import('../pages/community/blog-post.vue' /* webpackChunkName: "pages/community/blog-post" */))
const _52350a63 = () => interopDefault(import('../pages/community/discussion.vue' /* webpackChunkName: "pages/community/discussion" */))
const _0fd039c0 = () => interopDefault(import('../pages/community/discussions.vue' /* webpackChunkName: "pages/community/discussions" */))
const _59224f68 = () => interopDefault(import('../pages/community/discussions-ask.vue' /* webpackChunkName: "pages/community/discussions-ask" */))
const _7bb2d06b = () => interopDefault(import('../pages/community/faq.vue' /* webpackChunkName: "pages/community/faq" */))
const _76528736 = () => interopDefault(import('../pages/community/help-center.vue' /* webpackChunkName: "pages/community/help-center" */))
const _34810198 = () => interopDefault(import('../pages/community/instructor-profile.vue' /* webpackChunkName: "pages/community/instructor-profile" */))
const _7f1ea528 = () => interopDefault(import('../pages/community/student-profile.vue' /* webpackChunkName: "pages/community/student-profile" */))
const _122cd968 = () => interopDefault(import('../pages/community/teachers.vue' /* webpackChunkName: "pages/community/teachers" */))
const _baa48e40 = () => interopDefault(import('../pages/documentation/components.vue' /* webpackChunkName: "pages/documentation/components" */))
const _dd54c4f8 = () => interopDefault(import('../pages/documentation/installation.vue' /* webpackChunkName: "pages/documentation/installation" */))
const _1cecafaf = () => interopDefault(import('../pages/documentation/layouts.vue' /* webpackChunkName: "pages/documentation/layouts" */))
const _115e2dda = () => interopDefault(import('../pages/documentation/navbar.vue' /* webpackChunkName: "pages/documentation/navbar" */))
const _47258aea = () => interopDefault(import('../pages/documentation/pages.vue' /* webpackChunkName: "pages/documentation/pages" */))
const _28c05f36 = () => interopDefault(import('../pages/documentation/project-structure.vue' /* webpackChunkName: "pages/documentation/project-structure" */))
const _2cda43e0 = () => interopDefault(import('../pages/documentation/rtl.vue' /* webpackChunkName: "pages/documentation/rtl" */))
const _0586f026 = () => interopDefault(import('../pages/documentation/settings.vue' /* webpackChunkName: "pages/documentation/settings" */))
const _e900a1fc = () => interopDefault(import('../pages/documentation/sidebar.vue' /* webpackChunkName: "pages/documentation/sidebar" */))
const _08a08d0c = () => interopDefault(import('../pages/documentation/sidebar-menu.vue' /* webpackChunkName: "pages/documentation/sidebar-menu" */))
const _528facd7 = () => interopDefault(import('../pages/documentation/translation.vue' /* webpackChunkName: "pages/documentation/translation" */))
const _cfc3b660 = () => interopDefault(import('../pages/documentation/vuex-store.vue' /* webpackChunkName: "pages/documentation/vuex-store" */))
const _812e804a = () => interopDefault(import('../pages/instructor/courses.vue' /* webpackChunkName: "pages/instructor/courses" */))
const _475881f7 = () => interopDefault(import('../pages/instructor/dashboard.vue' /* webpackChunkName: "pages/instructor/dashboard" */))
const _b1bf02d4 = () => interopDefault(import('../pages/instructor/earnings.vue' /* webpackChunkName: "pages/instructor/earnings" */))
const _43c788e1 = () => interopDefault(import('../pages/instructor/edit-course.vue' /* webpackChunkName: "pages/instructor/edit-course" */))
const _20e1319b = () => interopDefault(import('../pages/instructor/edit-quiz.vue' /* webpackChunkName: "pages/instructor/edit-quiz" */))
const _5bc2fed6 = () => interopDefault(import('../pages/instructor/quizzes.vue' /* webpackChunkName: "pages/instructor/quizzes" */))
const _ed78495c = () => interopDefault(import('../pages/instructor/statement.vue' /* webpackChunkName: "pages/instructor/statement" */))
const _5d8050dd = () => interopDefault(import('../pages/landing/luma-bootstrap-html.vue' /* webpackChunkName: "pages/landing/luma-bootstrap-html" */))
const _a0139746 = () => interopDefault(import('../pages/landing/luma-vue-nuxt.vue' /* webpackChunkName: "pages/landing/luma-vue-nuxt" */))
const _fab047f8 = () => interopDefault(import('../pages/student/course.vue' /* webpackChunkName: "pages/student/course" */))
const _540174c2 = () => interopDefault(import('../pages/student/courses.vue' /* webpackChunkName: "pages/student/courses" */))
const _1264a6bb = () => interopDefault(import('../pages/student/dashboard.vue' /* webpackChunkName: "pages/student/dashboard" */))
const _424d6f08 = () => interopDefault(import('../pages/student/home.vue' /* webpackChunkName: "pages/student/home" */))
const _a5405abe = () => interopDefault(import('../pages/student/lesson.vue' /* webpackChunkName: "pages/student/lesson" */))
const _f46b9400 = () => interopDefault(import('../pages/student/my-courses.vue' /* webpackChunkName: "pages/student/my-courses" */))
const _31b25794 = () => interopDefault(import('../pages/student/my-paths.vue' /* webpackChunkName: "pages/student/my-paths" */))
const _222474fb = () => interopDefault(import('../pages/student/my-quizzes.vue' /* webpackChunkName: "pages/student/my-quizzes" */))
const _ae486964 = () => interopDefault(import('../pages/student/path.vue' /* webpackChunkName: "pages/student/path" */))
const _76493f95 = () => interopDefault(import('../pages/student/paths.vue' /* webpackChunkName: "pages/student/paths" */))
const _29fde27c = () => interopDefault(import('../pages/student/quiz-result.vue' /* webpackChunkName: "pages/student/quiz-result" */))
const _289fcce7 = () => interopDefault(import('../pages/student/skill-assessment.vue' /* webpackChunkName: "pages/student/skill-assessment" */))
const _5c9e8742 = () => interopDefault(import('../pages/student/skill-result.vue' /* webpackChunkName: "pages/student/skill-result" */))
const _f78673f0 = () => interopDefault(import('../pages/student/take-course.vue' /* webpackChunkName: "pages/student/take-course" */))
const _a21686b6 = () => interopDefault(import('../pages/student/take-lesson.vue' /* webpackChunkName: "pages/student/take-lesson" */))
const _affce6fc = () => interopDefault(import('../pages/student/take-quiz.vue' /* webpackChunkName: "pages/student/take-quiz" */))
const _2dfc4220 = () => interopDefault(import('../pages/account/edit/basic.vue' /* webpackChunkName: "pages/account/edit/basic" */))
const _cbcf1c82 = () => interopDefault(import('../pages/account/edit/payment-history.vue' /* webpackChunkName: "pages/account/edit/payment-history" */))
const _521a74d7 = () => interopDefault(import('../pages/account/edit/payment-information.vue' /* webpackChunkName: "pages/account/edit/payment-information" */))
const _1ac3939b = () => interopDefault(import('../pages/account/edit/profile.vue' /* webpackChunkName: "pages/account/edit/profile" */))
const _f55f8cca = () => interopDefault(import('../pages/account/edit/subscription.vue' /* webpackChunkName: "pages/account/edit/subscription" */))
const _bb8b9ae4 = () => interopDefault(import('../pages/account/edit/upgrade.vue' /* webpackChunkName: "pages/account/edit/upgrade" */))
const _976a0adc = () => interopDefault(import('../pages/components/layout/drawer.vue' /* webpackChunkName: "pages/components/layout/drawer" */))
const _0f231f75 = () => interopDefault(import('../pages/components/layout/drawer-layout.vue' /* webpackChunkName: "pages/components/layout/drawer-layout" */))
const _10e0b62e = () => interopDefault(import('../pages/components/layout/header.vue' /* webpackChunkName: "pages/components/layout/header" */))
const _19ec5c59 = () => interopDefault(import('../pages/components/layout/header-layout.vue' /* webpackChunkName: "pages/components/layout/header-layout" */))
const _7237bcd5 = () => interopDefault(import('../pages/components/layout/perfect-scrollbar.vue' /* webpackChunkName: "pages/components/layout/perfect-scrollbar" */))
const _a2731cea = () => interopDefault(import('../pages/components/layout/sidebar.vue' /* webpackChunkName: "pages/components/layout/sidebar" */))
const _2bcbb6de = () => interopDefault(import('../pages/components/layout/sidebar-menu.vue' /* webpackChunkName: "pages/components/layout/sidebar-menu" */))
const _036ec5ed = () => interopDefault(import('../pages/components/plugins/syntax-highlight.vue' /* webpackChunkName: "pages/components/plugins/syntax-highlight" */))
const _7d30498e = () => interopDefault(import('../pages/components/ui/alerts.vue' /* webpackChunkName: "pages/components/ui/alerts" */))
const _1cab9160 = () => interopDefault(import('../pages/components/ui/avatar.vue' /* webpackChunkName: "pages/components/ui/avatar" */))
const _1bfa20bc = () => interopDefault(import('../pages/components/ui/cards.vue' /* webpackChunkName: "pages/components/ui/cards" */))
const _05ce39bb = () => interopDefault(import('../pages/components/ui/form-image-group.vue' /* webpackChunkName: "pages/components/ui/form-image-group" */))
const _d31900f0 = () => interopDefault(import('../pages/components/ui/forms.vue' /* webpackChunkName: "pages/components/ui/forms" */))
const _50964e1a = () => interopDefault(import('../pages/components/ui/icons.vue' /* webpackChunkName: "pages/components/ui/icons" */))
const _6002c880 = () => interopDefault(import('../pages/components/ui/input-group-merge.vue' /* webpackChunkName: "pages/components/ui/input-group-merge" */))
const _77ff0a96 = () => interopDefault(import('../pages/components/ui/tabs.vue' /* webpackChunkName: "pages/components/ui/tabs" */))
const _022f60f6 = () => interopDefault(import('../pages/components/plugins/charts/area-chart.vue' /* webpackChunkName: "pages/components/plugins/charts/area-chart" */))
const _7e33eb0d = () => interopDefault(import('../pages/components/plugins/charts/bar-chart.vue' /* webpackChunkName: "pages/components/plugins/charts/bar-chart" */))
const _77c8d13a = () => interopDefault(import('../pages/components/plugins/charts/doughnut-chart.vue' /* webpackChunkName: "pages/components/plugins/charts/doughnut-chart" */))
const _2cb34ba8 = () => interopDefault(import('../pages/components/plugins/charts/line-chart.vue' /* webpackChunkName: "pages/components/plugins/charts/line-chart" */))
const _1f168400 = () => interopDefault(import('../pages/components/plugins/charts/radar-chart.vue' /* webpackChunkName: "pages/components/plugins/charts/radar-chart" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/myblueapp/'),
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  scrollBehavior,

  routes: [{
    path: "/documentation",
    component: _3d6ce610,
    name: "documentation___en"
  }, {
    path: "/es",
    component: _51664f4d,
    name: "index___es"
  }, {
    path: "/forgot-password",
    component: _b887f180,
    name: "forgot-password___en"
  }, {
    path: "/landing",
    component: _1e944a55,
    name: "landing___en"
  }, {
    path: "/login",
    component: _1b0df264,
    name: "login___en"
  }, {
    path: "/messages",
    component: _3480b221,
    name: "messages___en"
  }, {
    path: "/pricing",
    component: _466100fe,
    name: "pricing___en"
  }, {
    path: "/signup",
    component: _d9eb71a6,
    name: "signup___en"
  }, {
    path: "/account/invoice",
    component: _743760f4,
    name: "account-invoice___en"
  }, {
    path: "/community/blog",
    component: _bec029c6,
    name: "community-blog___en"
  }, {
    path: "/community/blog-post",
    component: _06f85e00,
    name: "community-blog-post___en"
  }, {
    path: "/community/discussion",
    component: _52350a63,
    name: "community-discussion___en"
  }, {
    path: "/community/discussions",
    component: _0fd039c0,
    name: "community-discussions___en"
  }, {
    path: "/community/discussions-ask",
    component: _59224f68,
    name: "community-discussions-ask___en"
  }, {
    path: "/community/faq",
    component: _7bb2d06b,
    name: "community-faq___en"
  }, {
    path: "/community/help-center",
    component: _76528736,
    name: "community-help-center___en"
  }, {
    path: "/community/instructor-profile",
    component: _34810198,
    name: "community-instructor-profile___en"
  }, {
    path: "/community/student-profile",
    component: _7f1ea528,
    name: "community-student-profile___en"
  }, {
    path: "/community/teachers",
    component: _122cd968,
    name: "community-teachers___en"
  }, {
    path: "/documentation/components",
    component: _baa48e40,
    name: "documentation-components___en"
  }, {
    path: "/documentation/installation",
    component: _dd54c4f8,
    name: "documentation-installation___en"
  }, {
    path: "/documentation/layouts",
    component: _1cecafaf,
    name: "documentation-layouts___en"
  }, {
    path: "/documentation/navbar",
    component: _115e2dda,
    name: "documentation-navbar___en"
  }, {
    path: "/documentation/pages",
    component: _47258aea,
    name: "documentation-pages___en"
  }, {
    path: "/documentation/project-structure",
    component: _28c05f36,
    name: "documentation-project-structure___en"
  }, {
    path: "/documentation/rtl",
    component: _2cda43e0,
    name: "documentation-rtl___en"
  }, {
    path: "/documentation/settings",
    component: _0586f026,
    name: "documentation-settings___en"
  }, {
    path: "/documentation/sidebar",
    component: _e900a1fc,
    name: "documentation-sidebar___en"
  }, {
    path: "/documentation/sidebar-menu",
    component: _08a08d0c,
    name: "documentation-sidebar-menu___en"
  }, {
    path: "/documentation/translation",
    component: _528facd7,
    name: "documentation-translation___en"
  }, {
    path: "/documentation/vuex-store",
    component: _cfc3b660,
    name: "documentation-vuex-store___en"
  }, {
    path: "/es/documentation",
    component: _3d6ce610,
    name: "documentation___es"
  }, {
    path: "/es/forgot-password",
    component: _b887f180,
    name: "forgot-password___es"
  }, {
    path: "/es/landing",
    component: _1e944a55,
    name: "landing___es"
  }, {
    path: "/es/login",
    component: _1b0df264,
    name: "login___es"
  }, {
    path: "/es/messages",
    component: _3480b221,
    name: "messages___es"
  }, {
    path: "/es/pricing",
    component: _466100fe,
    name: "pricing___es"
  }, {
    path: "/es/signup",
    component: _d9eb71a6,
    name: "signup___es"
  }, {
    path: "/instructor/courses",
    component: _812e804a,
    name: "instructor-courses___en"
  }, {
    path: "/instructor/dashboard",
    component: _475881f7,
    name: "instructor-dashboard___en"
  }, {
    path: "/instructor/earnings",
    component: _b1bf02d4,
    name: "instructor-earnings___en"
  }, {
    path: "/instructor/edit-course",
    component: _43c788e1,
    name: "instructor-edit-course___en"
  }, {
    path: "/instructor/edit-quiz",
    component: _20e1319b,
    name: "instructor-edit-quiz___en"
  }, {
    path: "/instructor/quizzes",
    component: _5bc2fed6,
    name: "instructor-quizzes___en"
  }, {
    path: "/instructor/statement",
    component: _ed78495c,
    name: "instructor-statement___en"
  }, {
    path: "/landing/luma-bootstrap-html",
    component: _5d8050dd,
    name: "landing-luma-bootstrap-html___en"
  }, {
    path: "/landing/luma-vue-nuxt",
    component: _a0139746,
    name: "landing-luma-vue-nuxt___en"
  }, {
    path: "/student/course",
    component: _fab047f8,
    name: "student-course___en"
  }, {
    path: "/student/courses",
    component: _540174c2,
    name: "student-courses___en"
  }, {
    path: "/student/dashboard",
    component: _1264a6bb,
    name: "student-dashboard___en"
  }, {
    path: "/student/home",
    component: _424d6f08,
    name: "student-home___en"
  }, {
    path: "/student/lesson",
    component: _a5405abe,
    name: "student-lesson___en"
  }, {
    path: "/student/my-courses",
    component: _f46b9400,
    name: "student-my-courses___en"
  }, {
    path: "/student/my-paths",
    component: _31b25794,
    name: "student-my-paths___en"
  }, {
    path: "/student/my-quizzes",
    component: _222474fb,
    name: "student-my-quizzes___en"
  }, {
    path: "/student/path",
    component: _ae486964,
    name: "student-path___en"
  }, {
    path: "/student/paths",
    component: _76493f95,
    name: "student-paths___en"
  }, {
    path: "/student/quiz-result",
    component: _29fde27c,
    name: "student-quiz-result___en"
  }, {
    path: "/student/skill-assessment",
    component: _289fcce7,
    name: "student-skill-assessment___en"
  }, {
    path: "/student/skill-result",
    component: _5c9e8742,
    name: "student-skill-result___en"
  }, {
    path: "/student/take-course",
    component: _f78673f0,
    name: "student-take-course___en"
  }, {
    path: "/student/take-lesson",
    component: _a21686b6,
    name: "student-take-lesson___en"
  }, {
    path: "/student/take-quiz",
    component: _affce6fc,
    name: "student-take-quiz___en"
  }, {
    path: "/account/edit/basic",
    component: _2dfc4220,
    name: "account-edit-basic___en"
  }, {
    path: "/account/edit/payment-history",
    component: _cbcf1c82,
    name: "account-edit-payment-history___en"
  }, {
    path: "/account/edit/payment-information",
    component: _521a74d7,
    name: "account-edit-payment-information___en"
  }, {
    path: "/account/edit/profile",
    component: _1ac3939b,
    name: "account-edit-profile___en"
  }, {
    path: "/account/edit/subscription",
    component: _f55f8cca,
    name: "account-edit-subscription___en"
  }, {
    path: "/account/edit/upgrade",
    component: _bb8b9ae4,
    name: "account-edit-upgrade___en"
  }, {
    path: "/components/layout/drawer",
    component: _976a0adc,
    name: "components-layout-drawer___en"
  }, {
    path: "/components/layout/drawer-layout",
    component: _0f231f75,
    name: "components-layout-drawer-layout___en"
  }, {
    path: "/components/layout/header",
    component: _10e0b62e,
    name: "components-layout-header___en"
  }, {
    path: "/components/layout/header-layout",
    component: _19ec5c59,
    name: "components-layout-header-layout___en"
  }, {
    path: "/components/layout/perfect-scrollbar",
    component: _7237bcd5,
    name: "components-layout-perfect-scrollbar___en"
  }, {
    path: "/components/layout/sidebar",
    component: _a2731cea,
    name: "components-layout-sidebar___en"
  }, {
    path: "/components/layout/sidebar-menu",
    component: _2bcbb6de,
    name: "components-layout-sidebar-menu___en"
  }, {
    path: "/components/plugins/syntax-highlight",
    component: _036ec5ed,
    name: "components-plugins-syntax-highlight___en"
  }, {
    path: "/components/ui/alerts",
    component: _7d30498e,
    name: "components-ui-alerts___en"
  }, {
    path: "/components/ui/avatar",
    component: _1cab9160,
    name: "components-ui-avatar___en"
  }, {
    path: "/components/ui/cards",
    component: _1bfa20bc,
    name: "components-ui-cards___en"
  }, {
    path: "/components/ui/form-image-group",
    component: _05ce39bb,
    name: "components-ui-form-image-group___en"
  }, {
    path: "/components/ui/forms",
    component: _d31900f0,
    name: "components-ui-forms___en"
  }, {
    path: "/components/ui/icons",
    component: _50964e1a,
    name: "components-ui-icons___en"
  }, {
    path: "/components/ui/input-group-merge",
    component: _6002c880,
    name: "components-ui-input-group-merge___en"
  }, {
    path: "/components/ui/tabs",
    component: _77ff0a96,
    name: "components-ui-tabs___en"
  }, {
    path: "/es/account/invoice",
    component: _743760f4,
    name: "account-invoice___es"
  }, {
    path: "/es/community/blog",
    component: _bec029c6,
    name: "community-blog___es"
  }, {
    path: "/es/community/blog-post",
    component: _06f85e00,
    name: "community-blog-post___es"
  }, {
    path: "/es/community/discussion",
    component: _52350a63,
    name: "community-discussion___es"
  }, {
    path: "/es/community/discussions",
    component: _0fd039c0,
    name: "community-discussions___es"
  }, {
    path: "/es/community/discussions-ask",
    component: _59224f68,
    name: "community-discussions-ask___es"
  }, {
    path: "/es/community/faq",
    component: _7bb2d06b,
    name: "community-faq___es"
  }, {
    path: "/es/community/help-center",
    component: _76528736,
    name: "community-help-center___es"
  }, {
    path: "/es/community/instructor-profile",
    component: _34810198,
    name: "community-instructor-profile___es"
  }, {
    path: "/es/community/student-profile",
    component: _7f1ea528,
    name: "community-student-profile___es"
  }, {
    path: "/es/community/teachers",
    component: _122cd968,
    name: "community-teachers___es"
  }, {
    path: "/es/documentation/components",
    component: _baa48e40,
    name: "documentation-components___es"
  }, {
    path: "/es/documentation/installation",
    component: _dd54c4f8,
    name: "documentation-installation___es"
  }, {
    path: "/es/documentation/layouts",
    component: _1cecafaf,
    name: "documentation-layouts___es"
  }, {
    path: "/es/documentation/navbar",
    component: _115e2dda,
    name: "documentation-navbar___es"
  }, {
    path: "/es/documentation/pages",
    component: _47258aea,
    name: "documentation-pages___es"
  }, {
    path: "/es/documentation/project-structure",
    component: _28c05f36,
    name: "documentation-project-structure___es"
  }, {
    path: "/es/documentation/rtl",
    component: _2cda43e0,
    name: "documentation-rtl___es"
  }, {
    path: "/es/documentation/settings",
    component: _0586f026,
    name: "documentation-settings___es"
  }, {
    path: "/es/documentation/sidebar",
    component: _e900a1fc,
    name: "documentation-sidebar___es"
  }, {
    path: "/es/documentation/sidebar-menu",
    component: _08a08d0c,
    name: "documentation-sidebar-menu___es"
  }, {
    path: "/es/documentation/translation",
    component: _528facd7,
    name: "documentation-translation___es"
  }, {
    path: "/es/documentation/vuex-store",
    component: _cfc3b660,
    name: "documentation-vuex-store___es"
  }, {
    path: "/es/instructor/courses",
    component: _812e804a,
    name: "instructor-courses___es"
  }, {
    path: "/es/instructor/dashboard",
    component: _475881f7,
    name: "instructor-dashboard___es"
  }, {
    path: "/es/instructor/earnings",
    component: _b1bf02d4,
    name: "instructor-earnings___es"
  }, {
    path: "/es/instructor/edit-course",
    component: _43c788e1,
    name: "instructor-edit-course___es"
  }, {
    path: "/es/instructor/edit-quiz",
    component: _20e1319b,
    name: "instructor-edit-quiz___es"
  }, {
    path: "/es/instructor/quizzes",
    component: _5bc2fed6,
    name: "instructor-quizzes___es"
  }, {
    path: "/es/instructor/statement",
    component: _ed78495c,
    name: "instructor-statement___es"
  }, {
    path: "/es/landing/luma-bootstrap-html",
    component: _5d8050dd,
    name: "landing-luma-bootstrap-html___es"
  }, {
    path: "/es/landing/luma-vue-nuxt",
    component: _a0139746,
    name: "landing-luma-vue-nuxt___es"
  }, {
    path: "/es/student/course",
    component: _fab047f8,
    name: "student-course___es"
  }, {
    path: "/es/student/courses",
    component: _540174c2,
    name: "student-courses___es"
  }, {
    path: "/es/student/dashboard",
    component: _1264a6bb,
    name: "student-dashboard___es"
  }, {
    path: "/es/student/home",
    component: _424d6f08,
    name: "student-home___es"
  }, {
    path: "/es/student/lesson",
    component: _a5405abe,
    name: "student-lesson___es"
  }, {
    path: "/es/student/my-courses",
    component: _f46b9400,
    name: "student-my-courses___es"
  }, {
    path: "/es/student/my-paths",
    component: _31b25794,
    name: "student-my-paths___es"
  }, {
    path: "/es/student/my-quizzes",
    component: _222474fb,
    name: "student-my-quizzes___es"
  }, {
    path: "/es/student/path",
    component: _ae486964,
    name: "student-path___es"
  }, {
    path: "/es/student/paths",
    component: _76493f95,
    name: "student-paths___es"
  }, {
    path: "/es/student/quiz-result",
    component: _29fde27c,
    name: "student-quiz-result___es"
  }, {
    path: "/es/student/skill-assessment",
    component: _289fcce7,
    name: "student-skill-assessment___es"
  }, {
    path: "/es/student/skill-result",
    component: _5c9e8742,
    name: "student-skill-result___es"
  }, {
    path: "/es/student/take-course",
    component: _f78673f0,
    name: "student-take-course___es"
  }, {
    path: "/es/student/take-lesson",
    component: _a21686b6,
    name: "student-take-lesson___es"
  }, {
    path: "/es/student/take-quiz",
    component: _affce6fc,
    name: "student-take-quiz___es"
  }, {
    path: "/components/plugins/charts/area-chart",
    component: _022f60f6,
    name: "components-plugins-charts-area-chart___en"
  }, {
    path: "/components/plugins/charts/bar-chart",
    component: _7e33eb0d,
    name: "components-plugins-charts-bar-chart___en"
  }, {
    path: "/components/plugins/charts/doughnut-chart",
    component: _77c8d13a,
    name: "components-plugins-charts-doughnut-chart___en"
  }, {
    path: "/components/plugins/charts/line-chart",
    component: _2cb34ba8,
    name: "components-plugins-charts-line-chart___en"
  }, {
    path: "/components/plugins/charts/radar-chart",
    component: _1f168400,
    name: "components-plugins-charts-radar-chart___en"
  }, {
    path: "/es/account/edit/basic",
    component: _2dfc4220,
    name: "account-edit-basic___es"
  }, {
    path: "/es/account/edit/payment-history",
    component: _cbcf1c82,
    name: "account-edit-payment-history___es"
  }, {
    path: "/es/account/edit/payment-information",
    component: _521a74d7,
    name: "account-edit-payment-information___es"
  }, {
    path: "/es/account/edit/profile",
    component: _1ac3939b,
    name: "account-edit-profile___es"
  }, {
    path: "/es/account/edit/subscription",
    component: _f55f8cca,
    name: "account-edit-subscription___es"
  }, {
    path: "/es/account/edit/upgrade",
    component: _bb8b9ae4,
    name: "account-edit-upgrade___es"
  }, {
    path: "/es/components/layout/drawer",
    component: _976a0adc,
    name: "components-layout-drawer___es"
  }, {
    path: "/es/components/layout/drawer-layout",
    component: _0f231f75,
    name: "components-layout-drawer-layout___es"
  }, {
    path: "/es/components/layout/header",
    component: _10e0b62e,
    name: "components-layout-header___es"
  }, {
    path: "/es/components/layout/header-layout",
    component: _19ec5c59,
    name: "components-layout-header-layout___es"
  }, {
    path: "/es/components/layout/perfect-scrollbar",
    component: _7237bcd5,
    name: "components-layout-perfect-scrollbar___es"
  }, {
    path: "/es/components/layout/sidebar",
    component: _a2731cea,
    name: "components-layout-sidebar___es"
  }, {
    path: "/es/components/layout/sidebar-menu",
    component: _2bcbb6de,
    name: "components-layout-sidebar-menu___es"
  }, {
    path: "/es/components/plugins/syntax-highlight",
    component: _036ec5ed,
    name: "components-plugins-syntax-highlight___es"
  }, {
    path: "/es/components/ui/alerts",
    component: _7d30498e,
    name: "components-ui-alerts___es"
  }, {
    path: "/es/components/ui/avatar",
    component: _1cab9160,
    name: "components-ui-avatar___es"
  }, {
    path: "/es/components/ui/cards",
    component: _1bfa20bc,
    name: "components-ui-cards___es"
  }, {
    path: "/es/components/ui/form-image-group",
    component: _05ce39bb,
    name: "components-ui-form-image-group___es"
  }, {
    path: "/es/components/ui/forms",
    component: _d31900f0,
    name: "components-ui-forms___es"
  }, {
    path: "/es/components/ui/icons",
    component: _50964e1a,
    name: "components-ui-icons___es"
  }, {
    path: "/es/components/ui/input-group-merge",
    component: _6002c880,
    name: "components-ui-input-group-merge___es"
  }, {
    path: "/es/components/ui/tabs",
    component: _77ff0a96,
    name: "components-ui-tabs___es"
  }, {
    path: "/es/components/plugins/charts/area-chart",
    component: _022f60f6,
    name: "components-plugins-charts-area-chart___es"
  }, {
    path: "/es/components/plugins/charts/bar-chart",
    component: _7e33eb0d,
    name: "components-plugins-charts-bar-chart___es"
  }, {
    path: "/es/components/plugins/charts/doughnut-chart",
    component: _77c8d13a,
    name: "components-plugins-charts-doughnut-chart___es"
  }, {
    path: "/es/components/plugins/charts/line-chart",
    component: _2cb34ba8,
    name: "components-plugins-charts-line-chart___es"
  }, {
    path: "/es/components/plugins/charts/radar-chart",
    component: _1f168400,
    name: "components-plugins-charts-radar-chart___es"
  }, {
    path: "/",
    component: _51664f4d,
    name: "index___en"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
