<script>
import PageTemplate from '../../lib/PageTemplate.vue'
import ListItems from "../../lib/ListItems.vue";
import {inject} from "vue"

export default {
  name: "PricesPlanPage",
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
  },
  methods: {

    editParameters(pricePlan) {
      this.$router.push({
        name: 'price',
        params: {
          name: pricePlan.name
        }
      })
    }
  }
}
</script>

<template>
  <page-template title="Prices Plan">
    <list-items
        :headers="{name: 'Plan', price: 'Price $', workouts: 'Workouts'}"
        :values="pricePlans"
        @edit="editParameters"
    />
  </page-template>
</template>
