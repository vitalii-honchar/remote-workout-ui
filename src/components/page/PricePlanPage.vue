<script>
import PageTemplate from '../lib/PageTemplate.vue'
import ListItems from "../lib/ListItems.vue";

export default {
  name: "PricePlanPage",
  components: {
    PageTemplate,
    ListItems
  },
  data() {
    return {
      pricePlans: [
        { name: "Cheap Price Plan", id: "123" },
        { name: "Expensive Price Plan", id: "123" },
        { name: "Individual Price Plan", id: "123" },
      ]
    }
  },
}
</script>

<template>
  <page-template title="Price Plan">
    <list-items :headers="{name: 'Price Plan'}" :values="pricePlans"></list-items>
  </page-template>
</template>
