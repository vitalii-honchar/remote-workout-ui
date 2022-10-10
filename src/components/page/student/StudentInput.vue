<script>
import FormTemplate from "@/components/lib/form/FormTemplate"
import Student from "@/domain/student.mjs"
import {inject} from "vue"

export default {
  name: "StudentInput",
  components: {
    FormTemplate
  },

  props: {
    id: String
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
    this.student = await this.studentService.getStudent(this.id)
  },

  methods: {

    async handleSaveStudent() {
      try {
        await this.studentService.updateStudent(this.student)
        this.successMessage = "Student was successfully updated"
        this.errorMessage = null
      } catch (e) {
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
</template>
