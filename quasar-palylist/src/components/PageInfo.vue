<template>
  <q-page class="flex column q-gutter-y-md q-pa-md">
    <div class="full-width row items-center">
      <div class="col-2 text-right q-pr-lg">姓名</div>
      <div class="col-9">
        <q-input outlined v-model="text" dense />
      </div>
    </div>

    <div class="full-width row items-center">
      <div class="col-2 text-right q-pr-lg">用戶名稱</div>
      <div class="col-9">
        <q-input outlined v-model="text" dense />
      </div>
    </div>

    <div class="full-width row items-center">
      <div class="col-2 text-right q-pr-lg">電子郵件</div>
      <div class="col-9">
        <q-input outlined v-model="text" dense />
      </div>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      text: ref(""),
      ph: ref(""),
      dense: ref(false),
    };
  },
};
</script>
