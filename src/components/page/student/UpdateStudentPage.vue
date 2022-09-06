<script>
import PageTemplate from '../../lib/PageTemplate.vue'
import FormTemplate from "@/components/lib/form/FormTemplate"
import {inject} from "vue"
import Student from "@/domain/student.mjs"

export default {
  name: "UpdateStudentPage",
  components: {
    FormTemplate,
    PageTemplate
  },

  data() {
    return {
      student: new Student(),
      errorMessage: null,
      successMessage: null
    }
  },

  async created() {
    this.studentService = inject('studentService')
    this.student = await this.studentService.getStudent(this.$route.params.id)
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
  <page-template title="Update Student">
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
  </page-template>
</template>
