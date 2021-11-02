<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-1" >
    <q-header elevated class="bg-black text-white q-py-xs" height-hint="58">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="toggleLeftDrawer"
          aria-label="Menu"
          icon="menu"
        />

        <q-btn flat no-caps no-wrap class="q-ml-xs" v-if="$q.screen.gt.xs" to="/">
          <!-- <q-icon :name="fabYoutube" color="red" size="28px" /> -->
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          <q-toolbar-title shrink class="text-weight-bold">
            Plearnet
          </q-toolbar-title>
        </q-btn>

        <q-space />

        <div class="YL__toolbar-input-container row no-wrap">
          <q-input
            dense
            outlined
            square
            v-model="search"
            placeholder="Search"
            class="bg-white col"
          />
          <q-btn
            class="YL__toolbar-input-btn"
            color="black"
            text-color="white"
            icon="search"
            unelevated
          />
        </div>

        <q-space />

        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn
            round
            dense
            flat
            color="grey-8"
            icon="video_call"
            v-if="$q.screen.gt.sm"
          >
            <q-tooltip>Create a video or post</q-tooltip>
          </q-btn>
          <q-btn
            round
            dense
            flat
            color="grey-8"
            icon="apps"
            v-if="$q.screen.gt.sm"
          >
            <q-tooltip>Apps</q-tooltip>
          </q-btn>
          <q-btn
            round
            dense
            flat
            color="grey-8"
            icon="message"
            v-if="$q.screen.gt.sm"
          >
            <q-tooltip>Messages</q-tooltip>
          </q-btn>
          <q-btn round dense flat color="grey-8" icon="notifications">
            <q-badge color="red" text-color="white" floating> 2 </q-badge>
            <q-tooltip>Notifications</q-tooltip>
          </q-btn>
          <q-btn round flat to="/header/info2">
            <q-avatar size="26px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
            <q-tooltip>Account</q-tooltip>
          </q-btn>
        </div>
        <!-- <q-btn dense flat round icon="fas fa-chevron-down" @click="toggleRightDrawer" /> -->
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-grey-2"
      :width="240"
    >
      <q-scroll-area class="fit">
        <q-list padding>
          <q-item
            v-for="link in links1"
            :key="link.text"
            v-ripple
            clickable
            :to="link.to"
            header
            exact
          >
            <q-item-section avatar >
              <q-icon color="grey" :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator class="q-my-md" />

          <q-item v-for="link in links2" :key="link.text" v-ripple clickable :to="link.to" >
            <q-item-section avatar>
              <q-icon color="grey" :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator class="q-my-md" />

          <!-- <q-separator class="q-mt-md q-mb-xs" /> -->

          <!--  <q-item-label header class="text-weight-bold text-uppercase">
            More from Youtube
          </q-item-label> -->

          <q-item v-for="link in links3" :key="link.text" v-ripple clickable :to="link.to">
            <q-item-section avatar>
              <q-icon color="grey" :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>

          <!--   <q-separator class="q-my-md" />

           <q-item v-for="link in links4" :key="link.text" v-ripple clickable>
            <q-item-section avatar>
              <q-icon color="grey" :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator class="q-mt-md q-mb-lg" />

          <div class="q-px-md text-grey-9">
            <div class="row items-center q-gutter-x-sm q-gutter-y-xs">
              <a
                v-for="button in buttons1"
                :key="button.text"
                class="YL__drawer-footer-link"
                href="javascript:void(0)"
              >
                {{ button.text }}
              </a>
            </div>
          </div>
          <div class="q-py-md q-px-md text-grey-9">
            <div class="row items-center q-gutter-x-sm q-gutter-y-xs">
              <a
                v-for="button in buttons2"
                :key="button.text"
                class="YL__drawer-footer-link"
                href="javascript:void(0)"
              >
                {{ button.text }}
              </a>
            </div>
          </div> -->
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
      <!-- <div class="row q-col-gutter-sm">
        <div class="col-4" v-for="n in 6" :key="`sm-${n}`">
          <div class="my-content">
            <img src="https://cdn.quasar.dev/img/mountains.jpg" style="width:500px">
            <q-card-section>
            <div class="text-h6">Card #{{ index }}</div>
            <div class="text-subtitle2">by John Doe</div>
          </q-card-section>
          </div>
        </div>
      </div> -->
      <!-- <PageNote /> -->
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import { fabYoutube } from "@quasar/extras/fontawesome-v5";
// import PageNote from "../components/PageNote.vue";

export default {
  name: "MyLayout",
  components: {
    // PageNote
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
        { icon: "fas fa-key", text: "變更密碼" ,to: "/header/change"},
      ],
      links2: [
        // { icon: 'folder', text: 'Library' },
        { icon: "restore", text: "歷史",to:"/header/history" },
        // { icon: 'watch_later', text: 'Watch later' },
        { icon: "thumb_up_alt", text: "收藏" ,to:"/header/like"},
        { icon: "fas fa-pen", text: "塗鴉" ,to:"/header/paint"},
      ],

      links3: [
        { icon: "fas fa-cloud-upload-alt", text: "上傳",to:"/header/update" },
        { icon: "fas fa-magic", text: "許願",to:"/header/wish" },

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

.my-content
  margin: 10px
  padding: 10px 15px
  background: rgba(86,61,124,.15)
  border: 1px solid rgba(86,61,124,.2)
</style>