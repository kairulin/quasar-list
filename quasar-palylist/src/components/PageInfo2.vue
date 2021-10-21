<template>
  <div class="q-pa-xl position-relative bg-grey-4" :style="style">
    <q-layout view="lHh Lpr lFf" class="WAL__layout shadow-3" container>
          <div class="q-pa-xl ">
        <div class="q-gutter-md">
        <q-avatar size="100px">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
        </q-avatar>
    

            <div class="full-width row items-center">
            <div class="col-1 text-left q-pr-lg">姓名</div>
            <div class="col-9">
                <q-input outlined v-model="text" dense />
            </div>
            </div>

            <div class="full-width row items-center">
            <div class="col-1 text-left q-pr-lg">用戶名稱</div>
            <div class="col-9">
                <q-input outlined v-model="text" dense />
            </div>
            </div>

            <div class="full-width row items-center">
            <div class="col-1 text-left q-pr-lg">電子郵件</div>
            <div class="col-9">
                <q-input outlined v-model="text" dense />
            </div>
            </div>
        </div>
        </div>


    </q-layout>
  </div>
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
    // const leftDrawerOpen = ref(false);
    // const search = ref("");
    // const message = ref("");
    // const currentConversationIndex = ref(0);
    // const currentConversation = computed(() => {
    //   if(currentConversationIndex.value ===0){
    //     return conversations[currentConversationIndex.value];
    //   } else {
    //     return conversations[currentConversationIndex.value+1];
    //   }
    // });
    const style = computed(() => ({
      height: $q.screen.height + "px",
    }));
    // function toggleLeftDrawer() {
    //   leftDrawerOpen.value = !leftDrawerOpen.value;
    // }
    // function setCurrentConversation(index) {
    //   currentConversationIndex.value = index;
    // }
    return {
    //   leftDrawerOpen,
    //   search,
    //   message,
    //   currentConversationIndex,
    //   conversations,
    //   currentConversation,
    //   setCurrentConversation,
      style,
    //   toggleLeftDrawer,
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
// .conversation__summary
//   margin-top: 4px
// .conversation__more
//   margin-top: 0!important
//   font-size: 1.4rem
</style>