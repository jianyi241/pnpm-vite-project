<template>
    <div class="c-form-item" :style="{ width: width + 'px' }">
        <div class="c-form-item-label">{{ label }}</div>
        <div class="c-form-item-input">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps({
    label: {
        type: String,
        required: true,
        default: ''
    },
    width: {
        type: Number,
        required: false,
        default: 240
    }
})

const handleClickInput = () => {
    console.log('click input ')
}
</script>

<style scoped lang="scss">
.c-form-item {
    position: relative;
    margin-bottom: 16px;
    .c-form-item-label {
        font-size: 14px;
        text-align: left;
    }
    .c-form-item-input {
    }
}
</style>
