<script>
import {inject} from "vue"
import {InvalidUsernameOrPassword} from "@/service/frontend/authentication-service.mjs"

export default {
  name: "LoginPage",

  data() {
    return {
      login: null,
      password: null,
      errorMessage: null
    }
  },

  created() {
    this.authenticationService = inject('authenticationService')
  },

  methods: {
    async handleLogin() {
      try {
        await this.authenticationService.login(this.login, this.password)
        this.$router.push({ name: 'index' })
      } catch (e) {
        if (e instanceof InvalidUsernameOrPassword) {
          this.errorMessage = e.message
        }
      }
    }
  }
}
</script>

<template>
  <main class="main-content mt-0">
    <div class="container">
      <div class="row">
        <div class="col-xl-4 col-lg-5 col-md-6 d-flex flex-column mx-auto">
          <div class="card card-plain mt-8">
            <div class="card-header pb-0 text-left bg-transparent text-center">
              <h3 class="font-weight-bolder text-info text-gradient">RemoteWorkout</h3>
            </div>
            <div class="card-body">
              <div class="alert alert-danger text-white" role="alert" v-show="errorMessage !== null">
                {{errorMessage}}
              </div>
              <form role="form">
                <label>Login</label>
                <div class="mb-3">
                  <input v-model="login" type="text" class="form-control" placeholder="Login" aria-label="Login">
                </div>
                <label>Password</label>
                <div class="mb-3">
                  <input v-model="password" type="password" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="password-addon">
                </div>
                <div class="text-center">
                  <button @click="handleLogin" type="button" class="btn bg-gradient-info w-100 mt-4 mb-0">Sign in</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
