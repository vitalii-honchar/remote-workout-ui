<script>
import PageTemplate from '../../lib/PageTemplate.vue'
import ListItems from "../../lib/ListItems.vue";

export default {
  name: "WorkoutsPage",
  components: {
    PageTemplate,
    ListItems
  },
  data() {
    return {
      workouts: [
        { name: "Workout 1", category: 'Boxing', id: "123" },
        { name: "Workout 2", category: 'Boxing', id: "123" },
        { name: "Workout 3", category: 'Gym', id: "123" },
        { name: "Workout 4", category: 'Gym', id: "123" }
      ]
    }
  },
}
</script>

<template>
  <page-template title="Workout">
    <list-items :headers="{name: 'Workout', category: 'Category'}" :values="workouts"></list-items>
  </page-template>
</template>
