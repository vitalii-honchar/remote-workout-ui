<script>
import FormTemplate from "@/components/lib/form/FormTemplate"
import Student from "@/domain/student.mjs"
import {inject} from "vue"

export default {
  name: "StudentWorkoutInput",
  components: {
    FormTemplate
  },
  props: {
    student: Student
  },

  data() {
    return {
      errorMessage: null,
      successMessage: null
    }
  },

  created() {
    this.studentService = inject('studentService')
  },

  methods: {

    async handleSaveStudentWorkouts() {
      try {
        await this.studentService.updateStudent(this.student)
        this.successMessage = "Student's workouts were successfully updated"
        this.errorMessage = null
      } catch (e) {
        this.successMessage = null
        this.errorMessage = e.message
      }
    }
  }
}
</script>

<template>
  <form-template
      @submitted="handleSaveStudentWorkouts"
      submit-button-name="Save"
      :error-message="errorMessage"
      :success-message="successMessage"
      :key="student.workouts"
  >
    <div class="form-group" v-for="workout in student.workouts" :key="workout.workoutId">
      <div>{{JSON.stringify(workout)}}</div>
    </div>
  </form-template>
</template>
