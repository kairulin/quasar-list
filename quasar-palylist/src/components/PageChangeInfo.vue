<template>
  <q-page class="relative-position">
    <q-scroll-area class="absolute fullscreen" style="z-index: 0!">
      <div class="q-pa-xl bg-grey-4 relative-position" :style="style">
        <q-layout view="lHh Lpr lFf" class="WAL__layout shadow-3" container>
          <div class="q-pa-xl">
            <div class="q-gutter-md column items-center">
              <q-avatar size="100px">
                <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
              </q-avatar>

              <div class="full-width row items-center">
                <div class="col-2 text-left q-pr-lg">姓名</div>
                <div class="col-9">
                  <q-input outlined v-model="text" dense />
                </div>
              </div>

              <div class="full-width row items-center">
                <div class="col-2 text-left q-pr-lg">用戶名稱</div>
                <div class="col-9">
                  <q-input outlined v-model="text" dense />
                </div>
              </div>

              <div class="full-width row items-center">
                <div class="col-2 text-left q-pr-lg">電子郵件</div>
                <div class="col-9">
                  <q-input outlined v-model="text" dense />
                </div>
              </div>

              <!-- <div class="full-width row items-center"> -->
                <!-- <div class="col-2 text-right q-pr-lg"></div> -->
                <!-- <div class="col-9"> -->
                  <q-btn color="primary" label="確定" />
                <!-- </div> -->
              <!-- </div> -->
            </div>
          </div>
        </q-layout>
      </div>
    </q-scroll-area>
  </q-page>
</template>
<script>
// import PageInfo from '../components/PageInfo.vue'

import { useQuasar } from "quasar";
import { computed } from "vue";
// import { ref, computed } from "vue";

export default {
  name: "WhatsappLayout",
  components: {
    // PageInfo
  },
  setup() {
    const $q = useQuasar();

    const style = computed(() => ({
      height: $q.screen.height + "px",
    }));
    return {
      style,
    };
  },
};
</script>

<style lang="sass">
.WAL
  width: 100%
  height: 100%
  padding-top: 20px
  padding-bottom: 20px
  &:before
    content: ''
    height: 127px
    position: fixed
    top: 0
    width: 100%
    background-color: #009688
  &__layout
    margin: 0 auto
    // z-index: 4000
    height: 100%
    width: 90%
    max-width: 950px
    border-radius: 5px
  &__field.q-field--outlined .q-field__control:before
    border: none
  .q-drawer--standard
    .WAL__drawer-close
      display: none
@media (max-width: 850px)
  .WAL
    padding: 0
    &__layout
      width: 100%
      border-radius: 0
@media (min-width: 691px)
  .WAL
    &__drawer-open
      display: none

</style>