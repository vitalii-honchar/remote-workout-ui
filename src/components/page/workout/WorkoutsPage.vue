<script>
import PageTemplate from '../../lib/PageTemplate.vue'
import ListItems from "../../lib/ListItems.vue";
import {inject} from "vue"

export default {
  name: "WorkoutsPage",
  components: {
    PageTemplate,
    ListItems
  },
  data() {
    return {
      workouts: []
    }
  },

  async created() {
    const workoutService = inject('workoutService')
    this.workouts = await workoutService.getWorkouts()
  }
}
</script>

<template>
  <page-template title="Workout">
    <list-items
        :headers="{name: 'Workout', description: 'Description'}"
        :values="workouts"
    />
  </page-template>
</template>
