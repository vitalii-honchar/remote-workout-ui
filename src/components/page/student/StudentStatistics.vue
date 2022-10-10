<script>
import Student from "@/domain/student.mjs"
import {inject} from "vue"

export default {
  name: "StudentStatistics",

  props: {
    id: String
  },

  data() {
    return {
      student: Student.createEmpty()
    }
  },

  async created() {
    this.studentService = inject('studentService')
    this.student = await this.studentService.getStudent(this.id)
  },
}
</script>

<template>
  <div class="d-flex h-100 align-items-center justify-content-center flex-column">
    <div>
      <h2>{{student.pricePlan ? student.pricePlan.price : 0}} UAH</h2>
    </div>
    <div>
      <h2>{{student.getCompletedWorkouts()}} / {{student.pricePlan ? student.pricePlan.workouts : 0}} workouts</h2>
    </div>
  </div>
</template>
