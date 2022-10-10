<script>
import BasePageTemplate from "@/components/lib/BasePageTemplate"

export default {
  name: "PageTemplate",
  components: {
    BasePageTemplate
  },
  props: {
    title: String,
    withAddButton: {
      type: Boolean,
      default() {
        return false
      }
    },
    contentClasses: {
      type: String,
      default: () => "col-lg-12 col-md-12"
    }
  },
  emits: ["addClicked"],
  methods: {

    handleAdd() {
      this.$emit('addClicked')
    }
  }
}
</script>

<template>
  <base-page-template>
    <div class="row my-2">
      <div :class='[contentClasses, "mb-md-0 mb-4"]'>
        <div class="card">
          <div class="card-header pb-0">
            <div class="row">
              <div class="col-lg-6 col-7">
                <h6>{{ title }}</h6>
              </div>
              <div class="ms-auto col-2" v-show="withAddButton">
                <button class="btn btn-outline-success btn-sm mb-0" @click="handleAdd">
                  <font-awesome-icon icon="plus"/>
                  <span> Add</span>
                </button>
              </div>
            </div>
          </div>
          <div class="card-body px-0 pb-2">
            <slot/>
          </div>
        </div>
      </div>
    </div>
  </base-page-template>
</template>
