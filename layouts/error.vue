<template>
  <div class="h-screen flex flex-col justify-between">
    <div class="m-auto">
      <ButtonGoBack />
      <div class="text-center text-4xl font-normal">
        <h1 v-if="error.statusCode === 404">
          404 Page not found
        </h1>
        <h1 v-else>
          An error occurred
        </h1>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'error',
  props: {
    error: {
      type: String,
      default: 'Error'
    }
  }
})
</script>

<style>

</style>
