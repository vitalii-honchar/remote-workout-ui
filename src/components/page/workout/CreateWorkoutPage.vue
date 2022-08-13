<script>
import PageTemplate from '../../lib/PageTemplate.vue'
import FormTemplate from "@/components/lib/form/FormTemplate"
import WorkoutVideoInput from "@/components/page/workout/WorkoutVideoInput"
import {inject} from "vue"
import {Workout} from "@/domain/workout.mjs"

export default {
  name: "CreateWorkoutPage",
  components: {
    FormTemplate,
    PageTemplate,
    WorkoutVideoInput
  },

  data() {
    return {
      workout: new Workout(),
      errorMessage: null
    }
  },

  async created() {
    this.workoutService = inject('workoutService')
  },

  methods: {

    async handleSaveWorkout() {
      try {
        await this.workoutService.createWorkout(this.workout)
        this.$router.push({
          name: 'workouts',
        })
      } catch (e) {
        console.info(e)
        this.errorMessage = e.message
      }
    },

    handleUpdateVideos(videos) {
      this.workout.videos = videos
    }
  }
}
</script>

<template>
  <page-template title="Create Workout">
    <form-template
        @submitted="handleSaveWorkout"
        submit-button-name="Create"
        :error-message="errorMessage"
        :success-message="null"
    >
      <div class="form-group">
        <label class="form-control-label">Name</label>
        <input type="text" class="form-control" v-model="workout.name"/>
      </div>
      <div class="form-group">
        <label class="form-control-label">Description</label>
        <input type="text" class="form-control" v-model="workout.description"/>
      </div>
      <workout-video-input @videos-updated="handleUpdateVideos" :value="workout.videos" />
    </form-template>
  </page-template>
</template>
