<template>
  <HelloWorld id="a1"/>
  <PageAbout id="a2"/>
  <PageSubscription id="a3"/>
  <PageContact id="a4"/>
  <!-- <PageLogin /> -->
  <!-- <PageRegister /> -->
</template>

<script>
// @ is an alias to /src
import HelloWorld from "../components/HelloWorld.vue";
import PageAbout from "../components/PageAbout.vue";
import PageSubscription from "../components/PageSubscription.vue";
// import PageLogin from '../components/PageLogin.vue'
// import PageRegister from '../components/PageRegister.vue'
import PageContact from "../components/PageContact.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    PageAbout,
    PageSubscription,
    PageContact,
    // PageLogin,
    // PageRegister
  },
};
</script>

