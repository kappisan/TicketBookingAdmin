<template>
  <div id="app">
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
body {
  background: linear-gradient(to RIGHT, #002e5d, #420037);
}
button {
  background-color: #a00;
  color: #fff;
  border-width: 0;
  width: 324px;
  border-radius: 4px;
  height: 37px;
  &:hover {
    cursor: pointer;
    background-color: #e7001d;
  }
}
.grey {
  background-color: #666;
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
