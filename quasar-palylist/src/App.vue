<template>
 
      <router-view />
  
</template>

<script>
// import { ref } from 'vue'
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "LayoutDefault",

  components: {
    // HelloWorld
  },

  setup() {
    return {
      // leftDrawerOpen: ref(false)
    };
  },
};
</script>
<style lang="sass">
fullscreen
  z-index: 0!important
</style>