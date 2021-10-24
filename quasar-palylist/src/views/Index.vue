<template>
  <q-layout view="hHh lpR fFf">
    
    <q-header reveal elevated class="bg-black text-white">
      <div class="q-pa-md">
        <q-toolbar class="bg-black text-white">
          <q-btn flat round dense class="q-mr-sm">
            <q-avatar>
              <img
                src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg"
              />
            </q-avatar>
          </q-btn>

          <q-toolbar-title> Plearnet </q-toolbar-title>

          <q-space />

          <q-btn stretch flat label="首頁" />

          <q-btn stretch flat label="關於Plearnet" />

          <q-btn stretch flat label="訂閱計畫" />

          <q-btn stretch flat label="聯絡我們" />

          <q-btn to="/about2" stretch flat label="登入" />
        </q-toolbar>
      </div>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
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
.q-toolbar__title
  @media (max-width: screen--sm)
    text-align: center
    body.screen--sm
      text-align: center
</style>