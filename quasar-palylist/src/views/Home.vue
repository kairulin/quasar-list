<template>
    <HelloWorld />
    <PageAbout />
    <PageSubscription />
    <PageLogin />
    <PageRegister />
</template>

<script>
// @ is an alias to /src
import HelloWorld from '../components/HelloWorld.vue'
import PageAbout from '../components/PageAbout.vue'
import PageSubscription from '../components/PageSubscription.vue'
import PageLogin from '../components/PageLogin.vue'
import PageRegister from '../components/PageRegister.vue'



export default {
  name: 'Home',
  components: {
    HelloWorld,
    PageAbout,
    PageSubscription,
    PageLogin,
    PageRegister
  }
}
</script>

