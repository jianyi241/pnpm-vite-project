<template>

</template>

<script lang="ts" setup>
import * as Phaser from 'phaser'
import Example from "@/views/phaser/Example.js";
import {onMounted} from 'vue'

onMounted(() => {
    const config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 200 }
            }
        },
        scene: Example
    };

    const game = new Phaser.Game(config);
})
</script>

<style scoped lang="scss">

</style>