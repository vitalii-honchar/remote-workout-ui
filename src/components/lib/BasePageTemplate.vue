<script>
import SideBar from "@/components/lib/SideBar";
import NavBar from "@/components/lib/NavBar";

export default {
  name: "BasePageTemplate",
  components: {
    SideBar,
    NavBar
  },
}
</script>

<template>
  <side-bar></side-bar>
  <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
    <nav-bar></nav-bar>
    <div class="container-fluid">
      <slot />
    </div>
  </main>
</template>
