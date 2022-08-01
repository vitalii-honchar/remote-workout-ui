<script>
import PageTemplate from '../lib/PageTemplate.vue'
import ListItems from "../lib/ListItems.vue";

export default {
  name: "PricePlanPage",
  components: {
    PageTemplate,
    ListItems
  }
}
</script>

<template>
  <page-template title="Price Plan">
    <list-items></list-items>
  </page-template>
</template>
