<template>
    <div class="c-input">
        <input v-model="_value" :placeholder="placeholder" :type="inputType" />
    </div>
</template>

<script lang="ts" setup>
import { useVModel } from '@vueuse/core'

const props = defineProps({
    inputType: {
        type: String,
        required: true,
        default: 'text'
    },
    placeholder: {
        type: String,
        required: false,
        default: ''
    },
    value: {
        type: String,
        required: true,
        default: ''
    }
})

const emit = defineEmits(['update:value'])
const _value = useVModel(props, 'value', emit)
</script>

<style scoped lang="scss">
.c-input {
    width: 100%;
    > input {
        width: 100%;
        height: 32px;
        font-size: 14px;
        border: 1px solid #ccc;
        outline: none;
        padding: 0 6px;
        &:focus {
            border-color: #5bc0de;
            box-shadow: 0 0 2px #5bc0de;
        }
    }
}
</style>
