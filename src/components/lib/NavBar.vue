<script>
import {inject} from "vue"

export default {
  name: "NavBar",

  created() {
    this.authenticationService = inject('authenticationService')
  },

  methods: {

    async handleLogOut() {
      await this.authenticationService.logout()
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

<template>
  <nav class="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur"
       navbar-scroll="true">
    <div class="container-fluid py-1 px-3">
      <div class="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
        <div class="ms-md-auto pe-md-3 d-flex align-items-center"></div>
        <ul class="navbar-nav justify-content-end">
          <li class="nav-item d-flex align-items-center">
            <a @click="handleLogOut" href="javascript:;" class="nav-link text-body font-weight-bold px-0">
              <font-awesome-icon icon="right-from-bracket" />
              <span class="d-sm-inline d-none"> Log Out</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
