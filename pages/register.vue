<template>
    <div class='page-wrapper'>
        <div class="form-wrapper">
              <form @submit.stop.prevent="handleSubmit">
                  <fieldset class="uk-fieldset">
                      <legend class="uk-legend">Регистрация</legend>

                      <div class="uk-margin">
                        <input class="uk-input" v-model="username" type="text" placeholder="Имя">
                      </div>

                      <div class="uk-margin">
                        <input class="uk-input" v-model="email" type="email" placeholder="E-mail">
                      </div>

                      <div class="uk-margin">
                        <input class="uk-input" v-model="password" type="password" placeholder="Пароль">
                      </div>

                      <div class="uk-margin">
                        <button class="uk-button uk-width-1-1" :disabled="loading" type="submit">Зарегистрироваться</button>
                      </div>         

                  </fieldset>
              </form>

          </div>
      </div>
	</div>
</template>


<script>
import { mapMutations } from 'vuex'
import strapi from '~/utils/Strapi'

export default {
  data() {
    return {
      email: '',
      password: '',
      username: '',
      loading: false
    }
  },
  methods: {
    async handleSubmit() {
      try {
        this.loading = true
        const response = await strapi.register(
          this.username,
          this.email,
          this.password
        )
        this.loading = false
        this.setUser(response.user)
        this.$router.go(-1)
      } catch (err) {
        this.loading = false
        alert(err.message || 'An error occurred.')
      }
    },
   
    ...mapMutations({
      setUser: 'auth/setUser'
    })
  }
}
</script>