<template>
  <div id="nav">
    <router-link to="/"><font-awesome-icon :icon="['fas', 'home']" /></router-link>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator"

@Component({ name: "AppHeader" })
export default class AppHeader extends Vue {
}
</script>

<style lang="less">
#nav {
  position:absolute;
  top: 0em;
  left: -10em;
  width: 30em;
  background-color: #222C45;
  display: flex;
  border-top: 5px solid #F35353;
  border-bottom: 5px solid #F35353;
  justify-content: center;
  transform: rotate(-45deg);
  a {
    margin: 50px 10px 50px 10px;
    font-size: 2em;
    color: #ffffff;
    opacity: 0.6;
    &.router-link-exact-active {
      color: #42b983;
      opacity: 1;
    }
    &:hover {
      color: #42b983;
    }
    &:first-child {
      margin-left: 0px;
    }
    &:last-child {
      margin-right: 0px;
    }
  }
}
</style>
