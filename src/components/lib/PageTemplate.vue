<script>
import "../../assets/css/nucleo-icons.css"
import "../../assets/css/nucleo-svg.css"
import "perfect-scrollbar/dist/perfect-scrollbar"
import "smooth-scrollbar/dist/smooth-scrollbar"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import SideBar from "@/components/lib/SideBar";
import NavBar from "@/components/lib/NavBar";

export default {
  name: "PageTemplate",
  props: {
    title: String
  },
  components: {
    SideBar,
    NavBar
  }
}
</script>

<template>
  <side-bar></side-bar>
  <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
    <nav-bar></nav-bar>
    <div class="container-fluid">
      <div class="row my-2">
        <div class="col-lg-12 col-md-12 mb-md-0 mb-4">
          <div class="card">
            <div class="card-header pb-0">
              <div class="row">
                <div class="col-lg-6 col-7">
                  <h6>{{ title }}</h6>
                </div>
              </div>
            </div>
            <div class="card-body px-0 pb-2">
              <slot/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
@import "@/assets/scss/soft-ui-dashboard.scss";
</style>
