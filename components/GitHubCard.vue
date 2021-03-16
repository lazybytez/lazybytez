<!--
<template>
  <a :href="repo.html_url">
    <div class="mr-2 ml-2 mb-4 border-2 border-lazyDarkBlue hover:bg-lazyDarkBlue ease-in duration-150 shadow-2xl rounded">
      <h1 class="mb-40 mt-40 text-2xl uppercase font-mono text-center">
        {{ repo.name }}
      </h1>
    </div>
  </a>
</template>
-->

<!-- mb-40 mt-40 -->

<template>
  <div class="flex justify-center items-center border-2 border-lazyDarkBlue hover:bg-lazyDarkBlue ease-in duration-150 shadow-lg hover:shadow-2xl rounded">
    <h1 class="text-2xl uppercase font-mono text-center">
      {{ repo.name }}
    </h1>
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
