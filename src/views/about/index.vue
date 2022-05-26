<template>
    <div>
        <h1>About</h1>
        <a-button type="primary" @click="showLoading">显示loading</a-button>
    </div>
</template>

<script setup lang="ts">
import { getCurrentInstance } from "vue";

const {proxy} = getCurrentInstance()
const showLoading = () => {
  console.log('show or hide')
  proxy.$loading.show()
  setTimeout(() => {
    proxy.$loading.hide()
  })
}
</script>

<style scoped>

</style>
