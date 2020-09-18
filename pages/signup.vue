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
        :subtitle="$t('Create a new account')"
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
            :label="`${$t('Name')}:`"
            label-for="name"
            label-class="form-label">
            <fmv-input-group-merge
              id="name"
              :placeholder="$t('Your first and last name')"
              type="text"
              required
              prepend>
              <span class="fas fa-user" />
            </fmv-input-group-merge>
          </b-form-group>
          
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

          <b-form-group
            :label="`${$t('Confirm password')}:`"
            label-for="password2"
            label-class="form-label">
            <fmv-input-group-merge
              id="password2"
              :placeholder="$t('Confirm password')"
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
              v-text="$t('Sign Up')" />
          </div>

          <div class="form-group text-center text-black-70 mb-0">
            <b-form-checkbox 
              id="terms"
              :checked="true"
              required>
              {{ $t('I agree to the') }}
              <b-link 
                :to="localePath('terms')" 
                class="text-black-70" 
                style="text-decoration: underline;"
                v-text="$t('Terms of Use')" />
            </b-form-checkbox>
          </div>
        </b-form>

        <div 
          slot="footer" 
          class="text-center text-black-50">
          {{ $t('Already signed up?') }} 
          <b-link
            :to="localePath('login')"
            v-text="$t('Login')" />
        </div>
      </card>

    </div>
  </div>  
</template>

<i18n locale="ro">
  {
    "Create a new account": "Crează un cont nou",
    "Continue with Google": "Continuă cu Google",
    "or": "sau",
    "Name": "Nume",
    "Your first and last name": "Nume și prenume",
    "Your email address": "Adresa ta de email",
    "Your password": "Parola",
    "Confirm password": "Confirmă parola",
    "I agree to the": "Sunt de acord cu",
    "Terms of Use": "Termenii de Utilizare",
    "Already signed up?": "Ai deja un cont?"
  }
</i18n>

<script>
export default {
  layout: 'blank',
  data() {
    return {
      title: 'Sign Up'
    }
  }
}
</script>
