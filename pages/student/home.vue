<template>
  <div>
    <fmv-box
      v-if="localPageHeader"
      effects="parallax-background blend-background"
      box-image="/images/photodune-4161018-group-of-students-m.jpg"
      class="mdk-box--bg-primary bg-dark mb-0">
      
      <student-home-hero />
    </fmv-box>

    <div class="bg-white border-bottom-2 py-16pt">
      <div :class="containerClass">
        <div class="row align-items-center">
          <div class="d-flex col-md align-items-center border-bottom border-md-0 mb-16pt mb-md-0 pb-16pt pb-md-0">
            <div class="rounded-circle bg-primary w-64 h-64 d-inline-flex align-items-center justify-content-center mr-16pt">
              <md-icon class="text-white">subscriptions</md-icon>
            </div>
            <div class="flex">
              <div class="card-title mb-4pt">8,000+ Courses</div>
              <p class="card-subtitle text-black-70">Explore a wide range of skills.</p>
            </div>
          </div>
          <div class="d-flex col-md align-items-center border-bottom border-md-0 mb-16pt mb-md-0 pb-16pt pb-md-0">
            <div class="rounded-circle bg-primary w-64 h-64 d-inline-flex align-items-center justify-content-center mr-16pt">
              <md-icon class="material-icons text-white">verified_user</md-icon>
            </div>
            <div class="flex">
              <div class="card-title mb-4pt">By Industry Experts</div>
              <p class="card-subtitle text-black-70">Professional development from the best people.</p>
            </div>
          </div>
          <div class="d-flex col-md align-items-center">
            <div class="rounded-circle bg-primary w-64 h-64 d-inline-flex align-items-center justify-content-center mr-16pt">
              <md-icon class="material-icons text-white">update</md-icon>
            </div>
            <div class="flex">
              <div class="card-title mb-4pt">Unlimited Access</div>
              <p class="card-subtitle text-black-70">Unlock Library and learn any topic with one subscription.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="page-section border-bottom-2">
      <div :class="containerClass">

        <page-separator>From the blog</page-separator>

        <div class="row card-group-row">
          <div 
            v-for="item in blogPosts1"
            :key="item.id"
            class="col-md-6 col-lg-4 card-group-row__col">
            <post-featured-card
              :item="item"
              class="card-group-row__card" />
          </div>
        </div>

        <div class="posts-cards">
          <post-card
            v-for="item in blogPosts2"
            :key="item.id"
            :item="item"
            class="mb-0" />
        </div>

      </div>
    </div>

    <div class="page-section border-bottom-2">
      <div :class="containerClass">
        <page-separator>Learning Paths</page-separator>

        <div class="row card-group-row">
          <div
            v-for="item in paths1"
            :key="item.id" 
            class="col-sm-4 card-group-row__col">
            <account-path-card
              class="card-group-row__card" 
              :title="item.title" 
              :image="item.image"
              :open="item.open"
              :favorite="item.favorite"
              :account="false"
              :cta="false" />
          </div>
        </div>

        <div class="row card-group-row mb-lg-8pt">
          <div
            v-for="item in paths2"
            :key="item.id" 
            class="col-sm-4 card-group-row__col">
            <account-path-card
              class="card-group-row__card mb-lg-0" 
              :title="item.title" 
              :image="item.image"
              :open="item.open"
              :favorite="item.favorite"
              :account="false"
              :cta="false" />
          </div>
        </div>

      </div>  
    </div>

    <div class="page-section border-bottom-2">
      <div :class="containerClass">
        <page-separator>Design Courses</page-separator>

        <div class="row card-group-row">
          <div 
            v-for="item in courses"
            :key="item.id"
            class="col-md-6 col-lg-4 col-xl-3 card-group-row__col">
            <course-card
              :account="false"
              :title="item.title" 
              :image="item.image"
              :avatar="(item.avatar || item.image)"
              :free="item.free"
              :favorite="item.favorite"
              :position="item.position"
              :reveals="false"
              card-class="card-group-row__card mb-16pt"
              class="d-flex w-100" />
          </div>
        </div>
      </div>
    </div>

    <page-feedback />

  </div>
</template>

<script>
import Page from '~/components/App/Page'
import PostFeaturedCard from '~/components/App/Blog/PostFeaturedCard'
import PostCard from '~/components/App/Blog/PostCard'
import AccountPathCard from '~/components/App/AccountPathCard'
import CourseCard from '~/components/App/CourseCard'
import PageFeedback from '~/components/App/PageFeedback'
import StudentHomeHero from '~/components/App/Student/HomeHero'
import {FmvBox} from 'fmv-layout'

export default {
  components: {
    PostFeaturedCard,
    PostCard,
    AccountPathCard,
    CourseCard,
    PageFeedback,
    StudentHomeHero,
    FmvBox
  },
  extends: Page,
  data () {
    return {
      title: this.$t('Home'),
      blogPosts1: [{
        image: "sketch",
        category: "Sketch",
        title: "Merge Duplicates Inconsistent Symbols",
        author_avatar: "/images/256_luke-porter-261779-unsplash.jpg",
        to: 'community-blog-post'
      }, {
        image: "invision",
        category: "inVision",
        title: "Design Systems Essentials",
        author_avatar: "/images/256_michael-dam-258165-unsplash.jpg",
        to: 'community-blog-post'
      }, {
        image: "photoshop",
        category: "Photoshop",
        title: "Semantic Logo Design",
        author_avatar: "/images/256_rsz_1andy-lee-642320-unsplash.jpg",
        to: 'community-blog-post'
      }],
      blogPosts2: [{
        avatar: "/images/paths/invision_200x168.png",
        title: "Design Systems Essentials",
        views: 35,
        tag: "inVision",
        date: "11 Nov, 2018 07:46 AM",
        avatarGroup: true,
        avatarCount: 3,
        avatars: [
          "/images/256_rsz_1andy-lee-642320-unsplash.jpg",
          "/images/256_michael-dam-258165-unsplash.jpg",
          "/images/256_luke-porter-261779-unsplash.jpg"
        ],
        to: 'community-blog-post'
      }],
      paths1: [{
        title: 'React Native',
        image: 'react'
      }, {
        title: 'Dev Ops',
        image: 'devops'
      }, {
        title: 'Redis',
        image: 'redis'
      }],
      paths2: [{
        title: 'MailChimp',
        image: 'mailchimp'
      }, {
        title: 'Swift',
        image: 'swift'
      }, {
        title: 'WordPress',
        image: 'wordpress'
      }],
      courses: [{
        title: 'Learn Sketch',
        image: 'sketch'
      }, {
        title: 'Learn Flinto',
        image: 'flinto'
      }, {
        title: 'Learn Photoshop',
        image: 'photoshop'
      }, {
        title: 'Learn Figma', 
        image: 'figma'
      }]
    }
  },
  computed: {
    guest() {
      return true
    },
    localPageHeader() {
      return this.$root.layoutName !== 'fixed'
    },
    headerClass() {
      if (this.$root.layoutName === 'fixed') {
        return 'mdk-header--bg-dark bg-dark mb-0'
      }
    },
    headerEffects() {
      if (this.$root.layoutName === 'fixed') {
        return 'parallax-background waterfall'
      }
    },
    headerImage() {
      if (this.$root.layoutName === 'fixed') {
        return '/images/photodune-4161018-group-of-students-m.jpg'
      }
    },
    headerContentClass() {
      if (this.$root.layoutName === 'fixed') {
        return 'justify-content-center'
      }
    },
    headerCondenses() {
      return this.$root.layoutName === 'fixed'
    },
    headerContentComponent() {
      return StudentHomeHero
    }
  },
  async asyncData({ app }) {
    return {
      title: app.i18n.t('Home')
    }
  }
}
</script>
