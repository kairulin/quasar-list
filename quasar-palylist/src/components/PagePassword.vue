<template>
   <q-page class="flex column q-gutter-y-md q-pa-md">
    <div class="full-width row items-center">
      <div class="col-2 text-right q-pr-lg">舊密碼</div>
      <div class="col-9">
        <q-input outlined type="password" v-model="password" dense />
      </div>
    </div>

    <div class="full-width row items-center">
      <div class="col-2 text-right q-pr-lg">新密碼</div>
      <div class="col-9">
        <q-input outlined type="password" v-model="password" dense />
      </div>
    </div>

    <div class="full-width row items-center">
      <div class="col-2 text-right q-pr-lg">確認新密碼</div>
      <div class="col-9">
        <q-input outlined type="password" v-model="password" dense />
      </div>
    </div>

    <div class="full-width row items-center">
      <div class="col-2 text-right q-pr-lg"></div>
      <div class="col-9">
        <q-btn color="primary" label="更改密碼" />
      </div>
    </div>

    <div class="full-width row items-center">
      <div class="col-2 text-right q-pr-lg"></div>
      <div class="col-9">
        <q-btn flat style="color: #FF0080" label="忘記密碼" />
      </div>
    </div>
  </q-page>
</template>
<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      password: ref(''),
      ph: ref(''),
      dense: ref(false)
    }
  }
}
</script>