<script>
import PageTemplate from '../../lib/PageTemplate.vue'
import FormTemplate from "@/components/lib/form/FormTemplate"
import WorkoutVideoInput from "@/components/page/workout/WorkoutVideoInput"
import {inject} from "vue"
import {Workout} from "@/domain/workout.mjs"

export default {
  name: "UpdateWorkoutPage",
  components: {
    FormTemplate,
    PageTemplate,
    WorkoutVideoInput
  },

  data() {
    return {
      workout: new Workout(),
      errorMessage: null,
      successMessage: null
    }
  },

  async created() {
    this.workoutService = inject('workoutService')
    this.workout = await this.workoutService.getWorkout(this.$route.params.id)
  },

  methods: {

    async handleSaveWorkout() {
      try {
        await this.workoutService.updateWorkout(this.workout)
        this.successMessage = "Workout was successfully updated"
        this.errorMessage = null
      } catch (e) {
        console.info(e)
        this.successMessage = null
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
  <page-template title="Update Workout">
    <form-template
        @submitted="handleSaveWorkout"
        submit-button-name="Save"
        :error-message="errorMessage"
        :success-message="successMessage"
        :key="this.workout"
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
