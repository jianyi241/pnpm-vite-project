<template>
    <div>
        <spine-player
            :width="775"
            :height="916"
            :manifest="manifest"
            :spine-data="spineData"
            :resolution-ratio="1"
        ></spine-player>
    </div>
</template>

<script setup lang="ts">
import { manifest, spineData } from './index.js'
import SpinePlayer from '@/views/genshin-animation/spine-player.vue'
</script>

<style scoped lang="scss"></style>
