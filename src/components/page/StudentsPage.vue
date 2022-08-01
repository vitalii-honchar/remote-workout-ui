<script>
import PageTemplate from '../lib/PageTemplate.vue'
import ListItems from "../lib/ListItems.vue";

export default {
  name: "StudentsPage",
  data() {
    return {
      students: [
        { name: "Vitalii Honchar", id: "123" },
        { name: "Kateryna Biliak", id: "123" },
        { name: "Test 31", id: "123" },
        { name: "Test 21", id: "123" }
      ]
    }
  },
  components: {
    PageTemplate,
    ListItems
  }
}
</script>

<template>
  <page-template title="Students">
    <list-items :headers="{name: 'Student Name'}" :values="students"></list-items>
  </page-template>
</template>
