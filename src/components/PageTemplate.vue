<script>

export default {
  name: "PageTemplate",
  props: {
    title: String
  }
}
</script>

<template>
  <div class="container-fluid">
    <div class="row my-2">
      <div class="col-lg-12 col-md-12 mb-md-0 mb-4">
        <div class="card">
          <div class="card-header pb-0">
            <div class="row">
              <div class="col-lg-6 col-7">
                <h6>{{ title }}</h6>
              </div>
            </div>
          </div>
          <div class="card-body px-0 pb-2">
            <slot/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
