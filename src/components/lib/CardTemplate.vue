<script>

export default {
  name: "CardTemplate",
  props: {
    title: String
  }
}
</script>

<template>
  <div class="mb-md-0 mb-4 h-100">
    <div class="card h-100">
      <div class="card-header pb-0" v-show="title != null">
        <div class="row">
          <div class="col-lg-6 col-7">
            <h6>{{ title }}</h6>
          </div>
        </div>
      </div>
      <div class="card-body px-0 pb-2">
        <slot />
      </div>
    </div>
  </div>
</template>
