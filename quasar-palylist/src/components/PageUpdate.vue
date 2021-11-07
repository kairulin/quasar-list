<template>
  <q-page class="relative-position">
    <q-scroll-area class="absolute fullscreen" style="
    z-index: 0;">
      <h4 class="q-pl-xl">我上傳的筆記</h4>
      <div class="row justify-between q-pl-xl q-pr-xl">
        <div class="q-pl-xl">
          <div class="q-pl-lg q-gutter-sm">
            <q-btn flat color="white" text-color="black" label="全部" />
            <q-btn flat color="white" text-color="black" label="學術科" />
            <q-btn flat color="white" text-color="black" label="非學術科" />
          </div>
        </div>
        <div class="q-pr-xl">
          <div class="q-pr-lg">
            <q-btn class="glossy q-mr-md" rounded color="indigo-14" label="新增" to="/header/editor"/>
            <q-btn class="glossy" rounded color="deep-orange" label="刪除" />

            <!-- <q-btn icon="add" flat color="white" text-color="black"  to="/header/editor"/> -->
          </div>
        </div>
      </div>

      <div class="q-ml-xl q-mr-xl">
          <div class="q-ml-xl q-mr-xl ">
            <q-separator class="q-my-md q-ml-md q-mr-md" />
          </div>
      </div>

      <div class="row justify-center q-gutter-sm">
        <q-intersection
          class="example-item col-3"
          v-for="n in 9"
          :key="`sm-${n}`"
          once
          transition="scale"
        >
          <div class="my-content">
            <q-card class="q-ma-sm">
              <img src="https://cdn.quasar.dev/img/mountains.jpg" />

              <q-card-section>
                <div class="text-h6">Card #{{ index }}</div>
                <div class="text-subtitle2">by John Doe</div>
              </q-card-section>
            </q-card>
          </div>
        </q-intersection>
      </div>
    </q-scroll-area>
  </q-page>
</template>

<script>
import { ref } from "vue";
import { fabYoutube } from "@quasar/extras/fontawesome-v5";

export default {
  name: "MyLayout",
  components: {
    // PageLeftDrawerOpen
  },
  props: {
    display_type: String,
  },
  setup() {
    const leftDrawerOpen = ref(false);
    const rightDrawerOpen = ref(false);
    const search = ref("");

    function toggleLeftDrawer() {
      leftDrawerOpen.value = !leftDrawerOpen.value;
    }
    function toggleRightDrawer() {
      rightDrawerOpen.value = !rightDrawerOpen.value;
    }
    return {
      fabYoutube,
      search,
      leftDrawerOpen,
      toggleLeftDrawer,
      rightDrawerOpen,
      toggleRightDrawer,
      links1: [
        { icon: "home", text: "首頁", to: "/header" },
        { icon: "fas fa-portrait", text: "個人資料", to: "/header/info2" },
        { icon: "fas fa-key", text: "變更密碼",to: "/header/change" },
      ],
      links2: [
        // { icon: 'folder', text: 'Library' },
        { icon: "restore", text: "歷史",to: "/header/history" },
        // { icon: 'watch_later', text: 'Watch later' },
        { icon: "thumb_up_alt", text: "收藏" ,to: "/header/like"},
        { icon: "fas fa-pen", text: "塗鴉",to: "/header/paint" },
      ],

      links3: [
        { icon: "fas fa-cloud-upload-alt", text: "上傳",to: "/header/update" },
        { icon: "fas fa-magic", text: "許願",to: "/header/wish" },

        // { icon: fabYoutube, text: 'YouTube Premium' },
        // { icon: 'local_movies', text: 'Movies & Shows' },
        // { icon: 'videogame_asset', text: 'Gaming' },
        // { icon: 'live_tv', text: 'Live' }
      ],
      //   links4: [
      //     { icon: 'settings', text: 'Settings' },
      //     { icon: 'flag', text: 'Report history' },
      //     { icon: 'help', text: 'Help' },
      //     { icon: 'feedback', text: 'Send feedback' }
      //   ],
      //   buttons1: [
      //     { text: 'About' },
      //     { text: 'Press' },
      //     { text: 'Copyright' },
      //     { text: 'Contact us' },
      //     { text: 'Creators' },
      //     { text: 'Advertise' },
      //     { text: 'Developers' }
      //   ],
      //   buttons2: [
      //     { text: 'Terms' },
      //     { text: 'Privacy' },
      //     { text: 'Policy & Safety' },
      //     { text: 'Test new features' }
      //   ]
    };
  },
};
</script>

<style lang="sass">
.YL
    &__toolbar-input-container
        min-width: 100px
        width: 55%
    &__toolbar-input-btn
        border-radius: 0
        border-style: solid
        border-width: 1px 1px 1px 0
        border-color: rgba(0,0,0,.24)
        max-width: 60px
        width: 100%
    &__drawer-footer-link
        color: inherit
        text-decoration: none
        font-weight: 500
        font-size: .75rem
        &:hover
            color: #000


fullscreen
  z-index:0
</style>