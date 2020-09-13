<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"><font-awesome-icon :icon="['fas', 'home']" /></router-link>
      <router-link to="/gaming"><font-awesome-icon :icon="['fas', 'gamepad']" /></router-link>
    </div>
    <router-view/>
    <footer></footer>
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

  // display: grid;
  // .block-left {
  //   background-color: #222C45;
  //   grid-column: 1;
  //   a {
  //     color: #F35353;
  //   }
  // }
  // .block-right {
  //   background-color: #F35353;
  //   grid-column: 2;
  //   a {
  //     color: #222C45;
  //     &.router-link-exact-active {
  //       color: #01E6CE;
  //     }
  //   }
  // }

  // a {
  //   font-weight: bold;
  //   color: #2c3e50;
  //   &.router-link-exact-active {
  //     color: #42b983;
  //   }
  // }
}
</style>
