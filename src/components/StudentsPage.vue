<script>
import PageTemplate from './PageTemplate'
import ListItems from "@/components/ListItems";

export default {
  name: "StudentsPage",
  components: {
    PageTemplate,
    ListItems
  }
}
</script>

<template>
  <page-template title="Students">
    <list-items></list-items>
  </page-template>
</template>
