<script>
import PageTemplate from '../../lib/PageTemplate.vue'
import ListItems from "../../lib/ListItems.vue";
import {inject} from "vue"

export default {
  name: "PricePlanPage",
  components: {
    PageTemplate,
    ListItems
  },
  data() {
    return {
      pricePlans: []
    }
  },
  async created() {
    const pricePlanService = inject('pricePlanService')
    this.pricePlans = await pricePlanService.getPricePlans()
  }
}
</script>

<template>
  <page-template title="Price Plan">
    <list-items :headers="{name: 'Plan', price: 'Price $', workouts: 'Workouts'}" :values="pricePlans" />
  </page-template>
</template>
