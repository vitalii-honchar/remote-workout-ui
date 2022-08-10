
<script>
import "@/assets/css/nucleo-icons.css"
import "@/assets/css/nucleo-svg.css"
import "perfect-scrollbar/dist/perfect-scrollbar"
import "smooth-scrollbar/dist/smooth-scrollbar"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import { RouterView } from 'vue-router'
import {inject} from "vue";

export default {
  name: 'App',
  components: {
    RouterView
  },
  async created() {
    if (this.$route.name !== 'login') {
      const authenticationService = inject('authenticationService')
      const authorized = await authenticationService.isAuthorized()
      if (!authorized) {
        this.$router.push({ name: 'login' })
      }
    }
  }
}
</script>

<template>
  <router-view></router-view>
</template>

<style lang="scss">
@import "@/assets/scss/soft-ui-dashboard.scss";
</style>
