<template>
  <side-bar></side-bar>
  <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
    <nav-bar></nav-bar>
    <students-page></students-page>
  </main>
</template>

<script>
import "./assets/css/nucleo-icons.css"
import "./assets/css/nucleo-svg.css"
import SideBar from "./components/SideBar.vue"
import "perfect-scrollbar/dist/perfect-scrollbar"
import "smooth-scrollbar/dist/smooth-scrollbar"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import NavBar from "@/components/NavBar";
import StudentsPage from "@/components/StudentsPage";

export default {
  name: 'App',
  components: {
    StudentsPage,
    NavBar,
    SideBar
  }
}
</script>

<style lang="scss">
  @import "@/assets/scss/soft-ui-dashboard.scss";
</style>
