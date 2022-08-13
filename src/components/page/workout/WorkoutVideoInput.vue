<script>

import {WorkoutVideo} from "@/domain/workout.mjs"

export default {
  name: "WorkoutVideoInput",
  props: {
    value: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      content: this.value
    }
  },

  methods: {
    handleAddVideo() {
      this.content.push(new WorkoutVideo())
      this.$emit('videos-updated', this.content)
    },

    handleRemoveVideo(index) {
      this.content.splice(index, 1)
      this.$emit('videos-updated', this.content)
    }
  }
}
</script>

<template>
  <div class="form-group">
    <label class="form-control-label">Videos</label>
    <div class="form-group" v-for="(video, index) in content" :key="index">
      <label>Video Link {{index + 1}}</label>
      <div class="d-flex">
        <input type="text" class="form-control" v-model="video.link" />
        <button @click="() => handleRemoveVideo(index)" class="btn btn-danger btn-sm mb-0 ms-2">X</button>
      </div>
    </div>
    <div>
      <button @click="handleAddVideo" class="btn btn-outline-primary btn-sm mb-0">
        <font-awesome-icon icon="plus"/>
        <span class="ms-2">Add video</span>
      </button>
    </div>
  </div>
</template>
