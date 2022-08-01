<script>
import PageTemplate from '../lib/PageTemplate.vue'
import ListItems from "../lib/ListItems.vue";

export default {
  name: "WorkoutPage",
  components: {
    PageTemplate,
    ListItems
  }
}
</script>

<template>
  <page-template title="Workout">
    <list-items></list-items>
  </page-template>
</template>
