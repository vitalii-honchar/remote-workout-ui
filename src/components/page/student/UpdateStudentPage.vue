<script>
import BasePageTemplate from "@/components/lib/BasePageTemplate"
import RowTemplate from "@/components/lib/RowTemplate"
import CardTemplate from "@/components/lib/CardTemplate"
import StudentWorkoutInput from "@/components/page/student/StudentWorkoutInput"
import StudentInput from "@/components/page/student/StudentInput"
import StudentStatistics from "@/components/page/student/StudentStatistics"

export default {
  name: "UpdateStudentPage",
  components: {
    StudentStatistics,
    StudentWorkoutInput,
    StudentInput,
    BasePageTemplate,
    RowTemplate,
    CardTemplate
  },

  data() {
    return {
      studentId: this.$route.params.id
    }
  }
}
</script>

<template>
  <base-page-template>
    <row-template>
      <div class="col-md-8 pe-1">
        <card-template title="Student">
          <student-input :id="studentId"/>
        </card-template>
      </div>
      <div class="col-md-4 ps-1">
        <card-template>
          <student-statistics :id="studentId" />
        </card-template>
      </div>
    </row-template>
    <row-template>
      <card-template title="Student's workouts">
        <student-workout-input :id="studentId" />
      </card-template>
    </row-template>
  </base-page-template>
</template>
