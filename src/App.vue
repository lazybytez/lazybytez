<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"><font-awesome-icon :icon="['fas', 'home']" /></router-link>
      <router-link to="/gaming"><font-awesome-icon :icon="['fas', 'gamepad']" /></router-link>
    </div>
    <router-view/>
    <footer id="footer">
      <p>Coded with <font-awesome-icon class="thin" :icon="['far', 'heart']" /> </p>
    </footer>
  </div>
</template>

<style lang="less">
html {
  body {
    background-color: #161E2D;
    margin: 0;
    padding: 0;
  }
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #dcddde;
}
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
#footer {
  background-color: #1A2737;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
}
</style>
