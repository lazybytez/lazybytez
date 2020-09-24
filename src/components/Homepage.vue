<template>
  <div class="homepage">
    <div class="introduction">
      <h1>Welcome to LazyBytez!</h1>
      <h2>Just a few people who like developing stuff.</h2>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator"

@Component({ name: "Homepage" })
export default class Homepage extends Vue {
}
</script>
