<template>
  <div class="home">
    <Homepage/>
    <GithubProjects/>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import Homepage from "@/components/Homepage.vue"
import GithubProjects from "@/components/GithubProjects.vue"

export default Vue.extend({
  name: "Home",
  components: {
    Homepage,
    GithubProjects
  }
})
</script>
