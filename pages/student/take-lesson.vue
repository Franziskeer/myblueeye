<template>
  <div>
    <lesson-navbar />

    <div class="bg-primary pb-lg-64pt py-32pt">
      <div :class="containerClass">
        <nav class="course-nav">
          <b-link
            v-b-tooltip.hover.bottom="{ title: 'Getting Started with Angular: Introduction' }"
            :to="localePath('student-take-lesson')">
            <md-icon v-text="'check_circle'" />
          </b-link>

          <b-link
            v-b-tooltip.hover.bottom="{ title: 'Getting Started with Angular: Introduction to TypeScript' }"
            :to="localePath('student-take-lesson')">
            <md-icon v-text="'account_circle'" />
          </b-link>

          <b-link
            v-b-tooltip.hover.bottom="{ title: 'Getting Started with Angular: Comparing Angular to AngularJS' }"
            :to="localePath('student-take-lesson')">
            <md-icon v-text="'play_circle_outline'" />
          </b-link>

          <b-link
            v-b-tooltip.hover.bottom="{ title: 'Getting Started with Angular: Lesson 4' }"
            :to="localePath('student-take-quiz')">
            <md-icon v-text="'hourglass_empty'" />
          </b-link>
        </nav>

        <player
          ref="player"
          image="/images/illustration/player.svg"
          src="https://player.vimeo.com/video/97243285?title=0&amp;byline=0&amp;portrait=0" />

        <div class="d-flex flex-wrap align-items-end mb-16pt">
          <h1 class="text-white flex m-0">Introduction to TypeScript</h1>
          <p class="h1 text-white-50 font-weight-light m-0">50:13</p>
        </div>

        <p class="hero__lead measure-hero-lead text-white-50 mb-24pt">JavaScript is now used to power backends, create hybrid mobile applications, architect cloud solutions, design neural networks and even control robots. Enter TypeScript: a superset of JavaScript for scalable, secure, performant and feature-rich applications.</p>

        <div class="d-flex flex-column flex-sm-row align-items-center justify-content-start">
          <b-btn
            v-if="$refs.player"
            variant="outline-white" 
            class="mb-16pt mb-sm-0 mr-sm-16pt"
            @click="$refs.player.play">
            {{ $t('Watch trailer') }}
            <md-icon 
              right
              v-text="'play_circle_outline'" />
          </b-btn>
          <b-btn 
            :to="localePath('pricing')" 
            variant="white"
            v-text="$t('Get started')" />
        </div>
      </div>
    </div>

    <div class="page-section">
      <div :class="containerClass">

        <lesson-discussions />

      </div>
    </div>

  </div>
</template>

<script>
import Page from '~/components/App/Page'
import LessonNavbar from '~/components/App/Course/LessonNavbar'
import LessonDiscussions from '~/components/App/Course/LessonDiscussions'
import Player from '~/components/Player'

export default {
  components: {
    LessonNavbar,
    LessonDiscussions,
    Player
  },
  extends: Page,
  data () {
    return {
      title: this.$t('Take Lesson')
    }
  },
  computed: {
    headerClass() {
      return 'mb-0'
    }
  },
  async asyncData({ app }) {
    return {
      title: app.i18n.t('Take Lesson')
    }
  }
}
</script>
