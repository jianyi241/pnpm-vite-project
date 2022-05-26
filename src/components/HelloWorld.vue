<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{ msg: string, count: number }>()
</script>

<template>
  <h1>{{ props.msg + ' --- '+ props.count }}</h1>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
