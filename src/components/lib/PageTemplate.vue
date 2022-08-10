<script>
import SideBar from "@/components/lib/SideBar";
import NavBar from "@/components/lib/NavBar";

export default {
  name: "PageTemplate",
  components: {
    SideBar,
    NavBar
  },
  props: {
    title: String,
    withAddButton: {
      type: Boolean,
      default() {
        return false
      }
    },
    contentClasses: {
      type: String,
      default: () => "col-lg-12 col-md-12"
    }
  },
  emits: ["addClicked"],
  methods: {

    handleAdd() {
      this.$emit('addClicked')
    }
  }
}
</script>

<template>
  <side-bar></side-bar>
  <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
    <nav-bar></nav-bar>
    <div class="container-fluid">
      <div class="row my-2">
        <div :class='[contentClasses, "mb-md-0 mb-4"]'>
          <div class="card">
            <div class="card-header pb-0">
              <div class="row">
                <div class="col-lg-6 col-7">
                  <h6>{{ title }}</h6>
                </div>
                <div class="ms-auto col-2" v-show="withAddButton">
                  <button class="btn btn-outline-success btn-sm mb-0" @click="handleAdd">
                    <font-awesome-icon icon="plus"/>
                    <span> Add</span>
                  </button>
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
