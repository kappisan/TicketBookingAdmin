<template>
  <div id="app">
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
body {
  background-color: #000;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .content {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    overflow-x: hidden;
  }
}
</style>
