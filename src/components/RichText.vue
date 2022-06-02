<template>
    <div class="rich-text">
        <div class="text-content" v-html="richTextContent"></div>
    </div>
</template>

<script setup lang="ts">
import { defineProps, watch, ref, onMounted } from 'vue'

const name = 'RichText'
const richTextContent = ref('')

const props = defineProps({
    id: {
        type: Number,
        required: true,
        default: 53434324
    },
    text: {
        type: String,
        required: true,
        default: ''
    },
    maxLength: {
        type: Number,
        default: 50,
        required: false
    }
})
const moreBtn = ref(null)

const showModal = () => {
    alert(props.text)
}

watch(
    props,
    (n, o) => {
        console.log('new value ', n)
        console.log('old value ', o)
        if (n.text && n.text.length) {
            let _text = n.text.replace(/<\/p>/g, '\n').replace(/<\/div>/g, '\n')
            console.log('text ', _text)
            if (_text.length > props.maxLength) {
                _text = _text.substring(0, 100)
                richTextContent.value = `${_text}<span class="more" id='moreBtn${props.id}'>...更多</span>`
                return
            }
            richTextContent.value = _text
        }
    },
    {
        deep: true,
        immediate: true
    }
)

onMounted(() => {
    const node: HTMLElement | null = document.getElementById(
        'moreBtn' + props.id
    )
    if (node) {
        node.addEventListener('click', (e) => {
            alert(props.text)
        })
    }
})
</script>

<style scoped lang="scss">
.rich-text {
    position: relative;
    background-color: #000000;
    color: #ffffff;
    padding: 15px;
    .text-content {
        ::v-deep(p) {
            position: relative;
            margin: 0;
            padding: 0;
            span.more {
                color: #096dd9;
                cursor: pointer;
            }
        }
    }
}
</style>
