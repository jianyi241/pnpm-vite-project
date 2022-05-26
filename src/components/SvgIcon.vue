<template>
    <svg aria-hidden="true" class="svg-icon" :style="{fontSize: size + 'px'}">
        <use :xlink:href="symbolId" rel="external nofollow"  :fill="props.color" />
    </svg>
</template>

<script setup lang="ts">
import {computed, SetupContext, toRefs} from "vue";

const props = defineProps({
    prefix: {
        type: String,
        default: 'icon'
    },
    name: {
        type: String,
        required: true
    },
    color: {
        type: String,
        default: '#333'
    },
    size: {
        type: Number,
        default: 32
    }
})

const symbolId = computed(() => `#${props.prefix}-${props.name}`)

</script>

<style scoped>
.svg-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
</style>
