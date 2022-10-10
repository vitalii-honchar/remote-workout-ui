<script>
import BasePageTemplate from "@/components/lib/BasePageTemplate"
import RowTemplate from "@/components/lib/RowTemplate"
import CardTemplate from "@/components/lib/CardTemplate"
import FormTemplate from "@/components/lib/form/FormTemplate"
import {inject} from "vue"
import Student from "@/domain/student.mjs"

export default {
  name: "UpdateStudentPage",
  components: {
    FormTemplate,
    BasePageTemplate,
    RowTemplate,
    CardTemplate
  },

  data() {
    return {
      student: Student.createEmpty(),
      errorMessage: null,
      successMessage: null
    }
  },

  async created() {
    this.studentService = inject('studentService')
    this.student = await this.studentService.getStudent(this.$route.params.id)
    console.dir({
      msg: "Received student",
      student: this.student
    })
  },

  methods: {

    async handleSaveStudent() {
      try {
        await this.studentService.updateStudent(this.student)
        this.successMessage = "Student was successfully updated"
        this.errorMessage = null
      } catch (e) {
        console.info(e)
        this.successMessage = null
        this.errorMessage = e.message
      }
    },

    async handleDeleteStudent() {
      try {
        await this.studentService.deleteStudent(this.student)
        this.$router.push({ name: 'students' })
      } catch (e) {
        this.successMessage = null
        this.errorMessage = e.message
      }
    }
  }
}
</script>

<template>
  <base-page-template>
    <row-template>
      <div class="col-md-8 pe-1">
        <card-template title="Student">
          <form-template
              @submitted="handleSaveStudent"
              @deleted="handleDeleteStudent"
              submit-button-name="Save"
              delete-button-name="Delete"
              :error-message="errorMessage"
              :success-message="successMessage"
              :key="this.student"
          >
            <div class="form-group">
              <label class="form-control-label">First Name</label>
              <input type="text" class="form-control" v-model="student.firstName"/>
            </div>
            <div class="form-group">
              <label class="form-control-label">Last Name</label>
              <input type="text" class="form-control" v-model="student.lastName"/>
            </div>
          </form-template>
        </card-template>
      </div>
      <div class="col-md-4 ps-1">
        <card-template>
          <div class="d-flex h-100 align-items-center justify-content-center flex-column">
            <div>
              <h2>{{student.pricePlan.price}} UAH</h2>
            </div>
            <div>
              <h2>{{student.getCompletedWorkouts()}} / {{student.pricePlan.workouts}} workouts</h2>
            </div>
          </div>
        </card-template>
      </div>
    </row-template>
    <row-template>
      <card-template title="Student's workouts">
        <form-template
            @submitted="handleSaveStudent"
            @deleted="handleDeleteStudent"
            submit-button-name="Save"
            :error-message="errorMessage"
            :success-message="successMessage"
            :key="this.student"
        >
          <div class="form-group">
            <label class="form-control-label">Workout 1</label>
            <input type="text" class="form-control" v-model="student.firstName"/>
          </div>
          <div class="form-group">
            <label class="form-control-label">Workout 2</label>
            <input type="text" class="form-control" v-model="student.lastName"/>
          </div>
          <div class="form-group">
            <label class="form-control-label">Workout 3</label>
            <input type="text" class="form-control" v-model="student.lastName"/>
          </div>
        </form-template>
      </card-template>
    </row-template>
  </base-page-template>
</template>
