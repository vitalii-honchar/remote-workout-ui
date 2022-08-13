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
  },

  methods: {

    handleAddWorkout() {
      this.$router.push({
        name: 'workout-create'
      })
    },

    editParameters(workout) {
      this.$router.push({
        name: 'workout',
        params: {
          id: workout.id
        }
      })
    }
  }
}
</script>

<template>
  <page-template title="Workout" :with-add-button="true" @add-clicked="handleAddWorkout">
    <list-items
        :headers="{name: 'Workout', description: 'Description'}"
        :values="workouts"
        @edit="editParameters"
    />
  </page-template>
</template>
