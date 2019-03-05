<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png">-->
    <OrbScape msg="Welcome to Your Vue.js App"/>
    <LoginComponent />
  </div>
</template>

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
    console.log("i have mounted");
  }
}
</script>
