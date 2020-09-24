<template>
  <div id="app">
    <AppHeader/>
    <router-view/>
    <AppFooter/>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import AppHeader from "@/components/AppHeader"
import AppFooter from "@/components/AppFooter"

export default Vue.extend({
  name: "Home",
  components: {
    AppHeader,
    AppFooter
  }
})
</script>

<style lang="less">
html {
  body {
    background-color: #161E2D;
    margin: 0;
    padding: 0;
  }
  :hover {
    transition: 0.06s;
  }
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #dcddde;
}
</style>
