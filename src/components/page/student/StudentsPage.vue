<script>
import PageTemplate from '../../lib/PageTemplate.vue'
import ListItems from "../../lib/ListItems.vue";
import {inject} from "vue"

export default {
  name: "StudentsPage",
  components: {
    PageTemplate,
    ListItems
  },

  data() {
    return {
      students: []
    }
  },

  async created() {
    const studentService = inject('studentService')
    this.students = await studentService.getStudents()
  },

  methods: {

    handleAddStudent() {
      this.$router.push({
        name: 'student-create'
      })
    },

    editParameters(student) {
      this.$router.push({
        name: 'student',
        params: {
          id: student.id
        }
      })
    }
  }
}
</script>

<template>
  <page-template title="Students" :with-add-button="true" @add-clicked="handleAddStudent">
    <list-items
        :headers="{firstName: 'First Name', lastName: 'Last Name'}"
        :values="students"
        @edit="editParameters"
    />
  </page-template>
</template>
