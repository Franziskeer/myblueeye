<template>
  <div>
    <page-header
      :title="title"
      :breadcrumb="breadcrumb"
      :container-class="containerClass" />

    <div class="page-section border-bottom-2">
      <div :class="containerClass">

        <div class="row">
          <div class="col-md-8">
            
            <edit-quiz-questions />
            <new-quiz-question-card />

          </div>
          <div class="col-md-4">

            <b-card
              header-class="text-center"
              no-body>
              <template v-slot:header>
                <b-btn 
                  type="submit"
                  variant="accent"
                  v-text="$t('Save Changes')" />
              </template>
              
              <b-list-group class="list-group-flush border-top-0">
                <b-list-group-item class="d-flex">
                  <b-link 
                    class="flex">
                    <strong 
                      v-text="$t('Save Draft')" />
                  </b-link>
                  <md-icon 
                    class="text-muted"
                    v-text="'check'" />
                </b-list-group-item>
                <b-list-group-item>
                  <strong
                    class="text-danger" 
                    v-text="$t('Delete Quiz')" />
                </b-list-group-item>
              </b-list-group>
            </b-card>

            <page-separator
              :title="$t('Options')" />
            
            <b-card>
              <b-form-group
                :description="$t('Select a course.')" 
                :label="$t('Course')"
                label-class="form-label"
                class="mb-0">
                <b-form-select
                  value="Angular Fundamentals" 
                  :options="['Angular Fundamentals', 'Build an iOS Application in Swift']" />
              </b-form-group>
            </b-card>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<i18n locale="ro">
  {
    "Save Changes": "Salvează Modificări",
    "Save Draft": "Salvează Schiță",
    "Delete Quiz": "Șterge Testul",
    "Options": "Opțiuni",
    "Course": "Curs",
    "Select a course.": "Alege un curs."
  }
</i18n>

<script>
  import Page from '~/components/App/Page'
  import EditQuizQuestions from '~/components/App/Instructor/EditQuizQuestions'
  import NewQuizQuestionCard from '~/components/App/Instructor/NewQuizQuestionCard'

  export default {
    components: {
      EditQuizQuestions,
      NewQuizQuestionCard
    },
    extends: Page,
    data() {
      return {
        title: this.$t('Edit Quiz')
      }
    },
    async asyncData({ app }) {
      return {
        title: app.i18n.t('Edit Quiz')
      }
    }
  }
</script>
