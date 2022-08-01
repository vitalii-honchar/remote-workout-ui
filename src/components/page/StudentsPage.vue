<script>
import PageTemplate from '../lib/PageTemplate.vue'
import ListItems from "../lib/ListItems.vue";

export default {
  name: "StudentsPage",
  components: {
    PageTemplate,
    ListItems
  }
}
</script>

<template>
  <page-template title="Students">
    <list-items></list-items>
  </page-template>
</template>
