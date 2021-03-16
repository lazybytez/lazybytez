<template>
  <div class="mt-10 xl:mt-20">
    <div v-if="repos" class="auto-rows-repos grid gap-4 mb-16 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      <GitHubCard
        v-for="repo in repos"
        :key="repo.id"
        :repo="repo"
      />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      repos: []
    }
  },
  async fetch () {
    this.repos = await fetch('https://api.github.com/orgs/lazybytez/repos').then(res => res.json())
  }
}
</script>

<style scoped>

</style>
