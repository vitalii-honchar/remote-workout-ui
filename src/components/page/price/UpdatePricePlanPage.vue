<script>
import PageTemplate from '../../lib/PageTemplate.vue'
import FormTemplate from "@/components/lib/form/FormTemplate"
import {inject} from "vue"
import PricePlan from "@/domain/price-plan.mjs"

export default {
  name: "UpdatePricePlanPage",
  components: {
    PageTemplate,
    FormTemplate
  },
  data() {
    return {
      pricePlan: new PricePlan(),
      errorMessage: null,
      successMessage: null
    }
  },
  async created() {
    this.pricePlanService = inject('pricePlanService')
    this.pricePlan = await this.pricePlanService.getPricePlan(this.$route.params.name)
  },
  methods: {
    async handleSavePricePlan() {
      try {
        await this.pricePlanService.updatePricePlan(this.pricePlan)
        this.successMessage = "Price plan was successfully updated"
      } catch (e) {
        console.info(e)
        this.errorMessage = e.message
      }
    }
  }
}
</script>

<template>
  <page-template title="Update Price Plan">
    <form-template @submitted="handleSavePricePlan" submitButtonName="Save" :errorMessage="errorMessage"
                   :successMessage="successMessage">
      <div class="form-group">
        <label for="example-text-input" class="form-control-label">Name</label>
        <input type="text" class="form-control" v-model="pricePlan.name"/>
      </div>
      <div class="form-group">
        <label for="example-text-input" class="form-control-label">Price</label>
        <input type="number" class="form-control" v-model="pricePlan.price"/>
      </div>
      <div class="form-group">
        <label for="example-text-input" class="form-control-label">Workouts</label>
        <input type="number" class="form-control" v-model="pricePlan.workouts"/>
      </div>
    </form-template>
  </page-template>
</template>
