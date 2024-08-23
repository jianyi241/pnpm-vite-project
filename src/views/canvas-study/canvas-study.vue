<template>
    <div class="canvas-study">
        <canvas id="canvas" ref="canvas"></canvas>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

const canvas = ref<HTMLCanvasElement | null>(null)

onMounted(() => {
    const el = canvas.value
    console.log('el ===> ', el)
    if (el && (el as HTMLCanvasElement)) {
        console.log('Is HtmlCanvasElement...')
        const ctx: CanvasRenderingContext2D = el.getContext(
            '2d'
        ) as CanvasRenderingContext2D
        console.log('ctx ===> ', ctx)
        ctx.fillStyle = 'red'
        ctx.fillRect(10, 10, 160, 90)
    }
})
</script>

<style scoped lang="scss"></style>
