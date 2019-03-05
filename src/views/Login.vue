<template>
  <div class="home">
    <OrbScape />
    <LoginComponent />
  </div>
</template>

<style>
  .mm-logo {
    width: 100px;
  }
</style>

<script>
// @ is an alias to /src
import OrbScape from '@/components/OrbScape.vue'
import LoginComponent from '@/components/LoginComponent.vue'

export default {
  name: 'home',
  components: {
    OrbScape,
    LoginComponent
  },
  mounted() {
    console.log("login page has mounted");
  }
}
</script>
