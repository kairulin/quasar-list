<template>
  <div class="q-pa-xl position-relative bg-grey-4" :style="style">
    <q-layout view="lHh Lpr lFf" class="WAL__layout shadow-3" container>
      <q-header elevated>
        <q-toolbar class="bg-grey-3 text-black">
          <q-btn
            round
            flat
            icon="keyboard_arrow_left"
            class="WAL__drawer-open q-mr-sm"
            @click="toggleLeftDrawer"
          />

          <q-btn round flat>
            <q-avatar v-if="currentConversation.id ===1">
              <img :src="currentConversation.avatar" />
            </q-avatar>
            <q-avatar v-else>
              <q-icon :name="currentConversation.avatar" />
            </q-avatar>
          </q-btn>

          <span class="q-subtitle-1 q-pl-md">
            {{ currentConversation.person }}
          </span>

          <q-space />
          
          <q-btn round flat icon="more_vert">
            <q-menu auto-close :offset="[110, 0]">
              <q-list style="min-width: 150px">
                <q-item clickable>
                  <q-item-section>Contact data</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Block</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Select messages</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Silence</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Clear messages</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Erase messages</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        bordered
        :breakpoint="690"
      >

        <q-scroll-area style="height: calc(100% - 100px)">
          <q-list>
            <q-item
              v-for="(conversation, index) in conversations.slice(1)"
              :key="conversation.id"
              clickable
              v-ripple
              @click="setCurrentConversation(index)"
              :to="conversation.to"
            >
              <q-item-section avatar>
                <q-avatar>
                  <q-icon :name="conversation.avatar" /> 
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label lines="1">
                  {{ conversation.person }}
                </q-item-label>
              
              </q-item-section>

            </q-item>
          </q-list>
        </q-scroll-area>
      </q-drawer>

      <q-page-container class="bg-grey-2">
        <router-view />
      </q-page-container>

    </q-layout>
  </div>
</template>
<script>
// import PageInfo from '../components/PageInfo.vue'

import { useQuasar } from "quasar";
import { ref, computed } from "vue";
const conversations = [
  {
    id: 1,
    person: "Razvan Stoenescu",
    avatar: "https://cdn.quasar.dev/team/razvan_stoenescu.jpeg",
    caption: "I'm working on Quasar!",
    to: "/header/info",
    sent: true,
  },
  {
    id: 2,
    person: "個人資訊",
    avatar: "fas fa-portrait",
    caption: "I'm working on Quasar!",
    to: "/header/info",
    sent: true,
  },
  {
    id: 3,
    person: "更改密碼",
    avatar: "fas fa-key",
    caption: "I'm working on Quasar!",
    to: "/header/change",
    sent: true,
  },
  {
    id: 4,
    person: "上傳",
    avatar: "fas fa-rocket",
    caption: "I'm working on Quasar!",
    to: "/header/info",
    sent: true,
  },
  {
    id: 5,
    person: "歷史",
    avatar: "fas fa-file-alt",
    caption: "I'm working on Quasar!",
    to: "/header/info",
    sent: true,
  },
  {
    id: 6,
    person: "收藏",
    avatar: "fas fa-star",
    caption: "I'm working on Quasar!",
    to: "/header/info",
    sent: true,
  },
  {
    id: 7,
    person: "塗鴉",
    avatar: "fas fa-pen",
    caption: "I'm working on Quasar!",
    to: "/header/info",
    sent: true,
  },
  {
    id: 8,
    person: "許願",
    avatar: "fas fa-magic",
    caption: "I'm working on Quasar!",
    to: "/header/info",
    sent: true,
  },
];
export default {
  name: "WhatsappLayout",
  components: {
    // PageInfo
  },
  setup() {
    const $q = useQuasar();
    const leftDrawerOpen = ref(false);
    const search = ref("");
    const message = ref("");
    const currentConversationIndex = ref(0);
    const currentConversation = computed(() => {
      if(currentConversationIndex.value ===0){
        return conversations[currentConversationIndex.value];
      } else {
        return conversations[currentConversationIndex.value+1];
      }
    });
    const style = computed(() => ({
      height: $q.screen.height + "px",
    }));
    function toggleLeftDrawer() {
      leftDrawerOpen.value = !leftDrawerOpen.value;
    }
    function setCurrentConversation(index) {
      currentConversationIndex.value = index;
    }
    return {
      leftDrawerOpen,
      search,
      message,
      currentConversationIndex,
      conversations,
      currentConversation,
      setCurrentConversation,
      style,
      toggleLeftDrawer,
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
.conversation__summary
  margin-top: 4px
.conversation__more
  margin-top: 0!important
  font-size: 1.4rem
</style>