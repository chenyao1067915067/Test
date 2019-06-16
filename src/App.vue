<template>
  <div id="app">
    
      <router-view></router-view>
   
  </div>
</template>

<script>

import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data(){
    return {
      
    }
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
#app {
  color:#454545;
}
</style>


