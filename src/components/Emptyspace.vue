<template>
  <div class="emptyspace">
    <h1>Coming soon . . .</h1>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator"

@Component({ name: "Emptyspace" })
export default class Emptyspace extends Vue {
}
</script>

<style lang="less">
.emptyspace {
  margin: 45vh 0;
  justify-content: center;
}
</style>
