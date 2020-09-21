<template>
  <div 
    class="d-flex align-items-center" 
    style="min-height: 100vh">
    <div 
      class="col-sm-8 col-md-6 col-lg-4 mx-auto"
      style="min-width: 300px;">
      <div class="text-center mt-5 mb-1">
        <fmv-avatar
          :to="localePath('student-dashboard')"
          :title="true"
          title-class="bg-primary">
          <b-img 
            src="/images/illustration/student/128/white.svg" 
            class="img-fluid"
            width="40" 
            :alt="$store.state.brand" />
        </fmv-avatar>
      </div>
      <div class="d-flex justify-content-center mb-4 navbar-light">
        <!-- Brand -->
        <b-link 
          :to="localePath('student-dashboard')"
          class="navbar-brand m-0"
          v-text="$store.state.brand" />
      </div>
      <card 
        :title="$t(title)"
        :subtitle="$t('Access your account')"
        header-class="text-center"
        class="navbar-shadow">

        <b-btn 
          :to="localePath('student-dashboard')"
          variant="light"
          exact
          block
          class="mb-16pt">
          <span class="fab fa-google mr-2" />
          {{ $t('Continue with Google') }}
        </b-btn>

        <page-separator
          :title="$t('or')"
          text-class="bg-white"
          center />

        <b-form 
          :action="localePath('student-dashboard')" 
          novalidate 
          method="get">
          
          <b-form-group
            :label="`${$t('Your email address')}:`"
            label-for="email"
            label-class="form-label">
            <fmv-input-group-merge
              id="email"
              :placeholder="$t('Your email address')"
              type="email"
              required
              prepend>
              <span class="fas fa-envelope" />
            </fmv-input-group-merge>
          </b-form-group>

          <b-form-group
            :label="`${$t('Your password')}:`"
            label-for="password"
            label-class="form-label">
            <fmv-input-group-merge
              id="password"
              :placeholder="$t('Your password')"
              type="password"
              class="form-control-prepended"
              required
              prepend>
              <span class="fas fa-key" />
            </fmv-input-group-merge>
          </b-form-group>

          <div class="form-group">
            <b-btn 
              type="submit" 
              variant="primary"
              block
              v-text="$t('Login')" />
          </div>

          <div class="text-center">
            <b-link
              :to="localePath('forgot-password')"
              class="text-black-70" 
              style="text-decoration: underline;"
              v-text="$t('Forgot Password?')" />
          </div>
        </b-form>

        <div 
          slot="footer" 
          class="text-center text-black-50">
          {{ $t('Not yet a student?') }} 
          <b-link
            :to="localePath('signup')"
            v-text="$t('Sign up')" />
        </div>
      </card>

    </div>
  </div>
</template>

<i18n locale="ro">
  {
    "Continue with Google": "Continuă cu Google",
    "or": "sau",
    "Your email address": "Adresa ta de email",
    "Your password": "Parola ta",
    "Have an account?": "Ai deja un cont?",
    "Access your account": "Accesează contul tău",
    "Not yet a student?": "Încă nu ai cont de student?",
    "Sign up": "Înscrie-te",
    "Forgot Password?": "Ai uitat parola?"
  }
</i18n>

<script>
export default {
  layout: 'blank',
  data() {
    return {
      title: 'Login'
    }
  },
  async asyncData() {
    return {
      title: 'Login'
    }
  }
}
</script>
