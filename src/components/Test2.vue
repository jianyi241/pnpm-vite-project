<template>
    <div class="test2">{{msg}}</div>
</template>

<script setup>
import {inject, onMounted, ref} from "vue";

const msg = ref(inject('message'))
onMounted(() => {
    console.log('msg ', msg.value)
})
</script>

<style scoped>

</style>