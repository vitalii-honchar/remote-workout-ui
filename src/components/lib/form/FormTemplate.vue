<script>
export default {
  name: "FormTemplate",
  props: {
    submitButtonName: String,
    deleteButtonName: {
      type: String,
      default() {
        return null
      }
    },
    errorMessage: String,
    successMessage: String
  },
  emits: ["submitted", "deleted"],
  methods: {
    handleSubmitClick() {
      this.$emit("submitted")
    },

    handleDeleteClick() {
      this.$emit("deleted")
    }
  }
}
</script>

<template>
  <form class="p-3">
    <div class="alert alert-danger text-white" role="alert" v-show="errorMessage !== null">
      {{errorMessage}}
    </div>
    <div class="alert alert-success text-white" role="alert" v-show="successMessage !== null">
      {{successMessage}}
    </div>
    <slot />
    <div class="form-group text-center">
      <button class="btn btn-outline-danger btn-sm mb-0 me-2" @click="handleDeleteClick" v-show="deleteButtonName != null">
        {{ deleteButtonName }}
      </button>
      <button class="btn btn-outline-primary btn-sm mb-0" @click="handleSubmitClick">
        {{ submitButtonName }}
      </button>
    </div>
  </form>
</template>
