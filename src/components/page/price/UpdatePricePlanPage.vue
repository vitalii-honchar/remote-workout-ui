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
        this.errorMessage = null
      } catch (e) {
        this.successMessage = null
        this.errorMessage = e.message
      }
    },

    async handleDeletePricePlan() {
      try {
        await this.pricePlanService.deletePricePlan(this.pricePlan)
        this.$router.push({ name: 'prices' })
      } catch (e) {
        this.successMessage = null
        this.errorMessage = e.message
      }
    }
  }
}
</script>

<template>
  <page-template :title='`Update "${pricePlan.name}"`'>
    <form-template @submitted="handleSavePricePlan"
                   @deleted="handleDeletePricePlan"
                   submit-button-name="Save"
                   delete-button-name="Delete"
                   :errorMessage="errorMessage"
                   :successMessage="successMessage">
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
