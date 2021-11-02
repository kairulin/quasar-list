<template>
  <div class="q-pa-md">
    <!-- <q-toggle
      v-model="padding"
      label="Padding"
      color="purple"
      class="text-weight-bold"
    /> -->

    <!-- <q-toggle
      v-model="vertical"
      label="Vertical"
      color="purple"
    /> -->

    <!-- <q-toggle
      v-model="arrows"
      label="Arrows"
      color="purple"
    /> -->

    <!-- <q-toggle
      v-model="navigation"
      label="Navigation"
      color="purple"
    /> -->

    <!-- <div class="row items-center q-mb-md">
      <div>Navigation position:</div>
      <q-option-group
        v-model="navPos"
        :options="navigationPositions"
        color="purple"
        inline
      />
    </div> -->

    <q-carousel

      v-model="slide"
      swipeable
      animated
      :padding="padding"
      :vertical="vertical"
    control-color="black"
      :navigation="navigation"
      :navigation-position="navPos"
      height="100vh"
      class="text-white rounded-borders"
    >
      <q-carousel-slide name="style" class="column no-wrap flex-center">
        <!-- <q-icon name="style" size="56px" /> -->
        <div class="q-mt-md text-center">
            <HelloWorld />
          <!-- {{ lorem }} -->
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="tv" class="column no-wrap flex-center">
        <!-- <q-icon name="live_tv" size="56px" /> -->
        <div class="q-mt-md text-center">
            <PageAbout />

          <!-- {{ lorem }} -->
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="layers" class="column no-wrap flex-center">
        <!-- <q-icon name="layers" size="56px" /> -->
        <div class="q-mt-md text-center">
            <PageSubscription />

          <!-- {{ lorem }} -->
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="map" class="column no-wrap flex-center">
        <!-- <q-icon name="terrain" size="56px" /> -->
        <div class="q-mt-md text-center">
            <PageContact />

          <!-- {{ lorem }} -->
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>
<script>
import { ref } from 'vue'
import HelloWorld from "../components/HelloWorld.vue";
import PageAbout from "../components/PageAbout.vue";
import PageSubscription from "../components/PageSubscription.vue";
import PageContact from "../components/PageContact.vue";


export default {
    
    components: {
    HelloWorld,
    PageAbout,
    PageSubscription,
    PageContact,
    // PageLogin,
    // PageRegister
  },
  setup () {
    const navPos = ref('left')
    const vertical = ref(false)

    // watch(vertical, val => {
    //   navPos.value = val === true
    //     ? 'right'
    //     : 'left'
    // })

    return {
      padding: ref(true),
      vertical,
      arrows: ref(false),
      navigation: ref(true),

      navPos,
      navigationPositions: [
        { value: 'top', label: 'top' },
        { value: 'right', label: 'right' },
        { value: 'bottom', label: 'bottom (default)' },
        { value: 'left', label: 'left' }
      ],

      slide: ref('style'),
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.'
    }
  }
}
</script>
<style lang="sass">

</style>