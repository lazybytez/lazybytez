<template>
  <div class="footer">
    <footer id="footer">
      <div class="footer-inner">
        <span>Check out our</span><a target="_blank" href="https://discord.gg/Ns8Yygf"><font-awesome-icon class="bigIcon" :icon="['fab', 'discord']" /></a>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.component("AppFooter", {})
</script>

<style lang="less">
#footer {
  background-color: #1A2737;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
  .footer-inner {
    margin: 0;
    padding: 20px 0;
    display: flex;
    justify-content: center;
  }
  span {
    min-height: 30px;
    line-height: 30px;
    padding-right: 8px;
  }
  a {
    .bigIcon {
      font-size: 30px;
    }
    color: #dcddde;
    &:hover {
      color: #42b983;
      opacity: 1;
    }
  }
}
</style>
