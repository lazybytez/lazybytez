<!--
//TODO: remove general template
//TODO: add a tag for linking the repo
 -->

<template>
  <div class="border-2 border-lazyDarkBlue hover:bg-lazyDarkBlue ease-in duration-150 shadow-lg hover:shadow-2xl rounded">
    <a :href="repo.html_url" class="flex justify-center items-center min-w-full min-h-full">
      <h1 class="text-2xl uppercase font-mono text-center">
        {{ repo.name }}
      </h1>
    </a>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['repo']
}
</script>

<style scoped>

</style>
