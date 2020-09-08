<template>
  <div id="app">
    <div id="nav">
      <div class="block-left">
        <router-link to="/"><h1 class="middle">Home</h1></router-link>
      </div>
      <div class="block-right">
        <router-link to="/about"><h1 class="middle">About</h1></router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">

html {
  body {
    margin: 0;
    padding: 0;
    section, div {
      height: 100vh;
    }
  }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  display: grid;
  .block-left {
    background-color: #222C45;
    grid-column: 1;
    a {
      color: #F35353;
    }
  }
  .block-right {
    background-color: #F35353;
    grid-column: 2;
    a {
      color: #222C45;
      &.router-link-exact-active {
        color: #01E6CE;
      }
    }
  }

  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
