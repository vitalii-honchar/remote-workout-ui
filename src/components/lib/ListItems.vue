<script>
export default {
  name: "ListItems",
  props: {
    headers: Object,
    values: Array[Object],
  },
  methods: {
    handleEdit(value) {
      this.$emit('edit', value)
    }
  },
  emits: ["edit", "create"]
}
</script>

<template>
  <div class="table-responsive">
    <table class="table align-items-center mb-0">
      <thead>
      <tr>
        <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7" v-for="header of headers" :key="header">
          {{ header }}
        </th>
        <th class="text-secondary opacity-7"></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="value in values" :key="value.id">
        <td v-for="(_, field) of headers" :key="field">
          <div class="d-flex px-2 py-1">
            <div class="d-flex flex-column justify-content-center">
              <h6 class="mb-0 text-sm">{{ value[field] }}</h6>
            </div>
          </div>
        </td>
        <td class="align-middle">
          <button class="btn btn-outline-primary btn-sm mb-0" @click="() => handleEdit(value)">Edit</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
