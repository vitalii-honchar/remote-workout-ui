<script>
import FormTemplate from "@/components/lib/form/FormTemplate"
import Student, {ScheduledWorkout} from "@/domain/student.mjs"
import Datepicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import {inject} from "vue"

export default {
  name: "StudentWorkoutInput",
  components: {
    FormTemplate,
    Datepicker
  },
  props: {
    id: String
  },

  data() {
    return {
      student: Student.createEmpty(),
      studentWorkouts: [],
      workouts: [],
      errorMessage: null,
      successMessage: null
    }
  },

  async created() {
    const workoutService = inject('workoutService')
    this.studentService = inject('studentService')

    this.workouts = await workoutService.getWorkouts()
    this.student = await this.studentService.getStudent(this.id)

    this.studentWorkouts = this.student.workouts

    const workoutsToAdd = this.student.pricePlan.workouts - this.studentWorkouts.length
    if (workoutsToAdd > 0) {
      for (let i = 0; i < workoutsToAdd; i++) {
        this.studentWorkouts.push(new ScheduledWorkout())
      }
    }
  },

  methods: {

    async handleSaveStudentWorkouts() {
      try {
        this.student.workouts = this.studentWorkouts.filter(it => it.workoutId != null)
        await this.studentService.updateStudent(this.student)
        this.successMessage = "Student's workouts were successfully updated"
        this.errorMessage = null
      } catch (e) {
        this.successMessage = null
        this.errorMessage = e.message
      }
    },

    handleWorkoutChange(workout, event) {
      workout.workoutId = event.target.value
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
      :key="studentWorkouts"
  >
    <div v-for="(workout, index) in studentWorkouts" :key="workout.workoutId">
      <h4>Workout {{index + 1}}</h4>
      <div class="form-group">
        <label>Workout</label>
        <select @change="(e) => handleWorkoutChange(workout, e)" class="form-select" aria-label="Select workout" >
          <option disabled :selected="workout.workoutId == null" />
          <option
              :value="w.id"
              v-for="w in workouts" :key="w.id"
              :selected="workout.workoutId === w.id"
          >
            {{w.name}} - {{w.description}}
          </option>
        </select>
      </div>
      <div class="form-group">
        <label>Schedule time</label>
        <datepicker v-model="workout.scheduledTime"/>
      </div>
      <div class="form-check form-switch">
        <label class="form-check-label" for="doneSwitch">Done</label>
        <input class="form-check-input" type="checkbox" id="doneSwitch" v-model="workout.sent">
      </div>
    </div>
  </form-template>
</template>
