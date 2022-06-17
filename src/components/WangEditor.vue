<template>
    <div class="wang-editor">
        <Toolbar
            style="border-bottom: 1px solid #ccc"
            :editor="editorRef"
            :default-config="toolbarConfig"
            :mode="mode"
        ></Toolbar>
        <Editor
            v-model="valueHtml"
            style="height: 500px; overflow-y: hidden"
            :default-config="editorConfig"
            :mode="mode"
            @onCreated="handleCreated"
            @onChange="handleChange"
            @onDestroyed="handleDestroyed"
            @onFocus="handleFocus"
            @onBlur="handleBlur"
            @customAlert="customAlert"
            @customPaste="customPaste"
        ></Editor>
    </div>
</template>

<script lang="ts" setup>
import '@wangeditor/editor/dist/css/style.css'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { onBeforeUnmount, onMounted, ref, shallowRef } from 'vue'
import { IEditorConfig, IToolbarConfig } from '@wangeditor/editor'

const emits = defineEmits<{(e: 'change', value: string): void }>()

const valueHtml = ref()
const editorConfig = ref<Partial<IEditorConfig>>() // 编辑器配置项
const mode = ref('default')
const editorRef = shallowRef()
const toolbarConfig = ref<Partial<IToolbarConfig>>() // 工具栏配置项

const handleCreated = (e) => {
    editorRef.value = e
}

const handleChange = (e) => {
    // console.log('handleChange ', e)
    emits('change', e.getHtml())
}
const handleDestroyed = (e) => {
    // console.log('handleDestroyed ', e)
}
const handleFocus = (e) => {
    // console.log('handleBlur ', e)
}
const handleBlur = (e) => {
    // console.log('handleBlur ', e)
}
const customAlert = (e) => {
    // console.log('customAlert ', e)
}
const customPaste = (e) => {
    // console.log('customPaste ', e)
}

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
    const editor = editorRef.value
    if (editor === null) {
        return
    }
    editor.destroy()
})

onMounted(() => {
    console.log('init wang editor...')
})
</script>
<style scoped lang="scss">
.wang-editor {
    position: relative;
    width: 1000px;
    border: 1px solid #cccccc;
}
</style>
