<script>
import PageTemplate from '../../lib/PageTemplate.vue'
import FormTemplate from "@/components/lib/form/FormTemplate"
import {inject} from "vue"
import Student from "@/domain/student.mjs"

export default {
  name: "CreateStudentPage",
  components: {
    FormTemplate,
    PageTemplate
  },

  data() {
    return {
      student: new Student(),
      errorMessage: null
    }
  },

  async created() {
    this.studentService = inject('studentService')
  },

  methods: {

    async handleSaveStudent() {
      try {
        await this.studentService.createStudent(this.student)
        this.$router.push({
          name: 'students',
        })
      } catch (e) {
        this.errorMessage = e.message
      }
    },
  }
}
</script>

<template>
  <page-template title="Create Student">
    <form-template
        @submitted="handleSaveStudent"
        submit-button-name="Create"
        :error-message="errorMessage"
        :success-message="null"
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
