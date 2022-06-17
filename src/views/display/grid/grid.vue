<template>
    <div class="grid">
        <h1>Grid</h1>
        <!--        <div class="grid-box parent-box">-->
        <!--            <div style="background-color: red" class="box child-box-1">11</div>-->
        <!--            <div style="background-color: green" class="box child-box-2">-->
        <!--                22-->
        <!--            </div>-->
        <!--            <div style="background-color: blue" class="box child-box-3">33</div>-->
        <!--            <div style="background-color: orange" class="box child-box-4">-->
        <!--                44-->
        <!--            </div>-->
        <!--            <div style="background-color: #000000" class="box child-box-5">-->
        <!--                55-->
        <!--            </div>-->
        <!--            <div style="background-color: yellow" class="box child-box-6">-->
        <!--                66-->
        <!--            </div>-->
        <!--        </div>-->
        <!--        <div class="editor-wrapper">-->
        <!--            <div id="editor" class="editor"></div>-->
        <!--        </div>-->
        <!--        <WangEditor @change="handleChangeEditor"></WangEditor>-->
        <c-form-item label="住址">
            <c-input
                v-model:value="address"
                input-type="text"
                placeholder="请输入"
            ></c-input>
        </c-form-item>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue'
import WangEditor from '../../../components/WangEditor.vue'
import CFormItem from '../../../components/form/CFormItem.vue'
import CInput from '../../../components/form/CInput.vue'

onMounted(() => {
    console.log('grid onMounted...')
})

const address = ref()
watch(address, (n, o) => {
    console.log('address change ', n)
})

const handleChangeEditor = (e: string) => {
    console.log(e, 'html')
}
</script>

<style scoped lang="scss">
.grid {
    padding: 15px;
    > .grid-box {
        min-width: 600px;
        height: 300px;
        display: grid;
        //grid-template:
        //    minmax(150px, max-content)
        //    repeat(auto-fill, 150px) / minmax(200px, max-content) repeat(auto-fill, 200px);
        grid-template-columns: 200px 200px 200px;
        grid-template-rows: 150px 150px;
        gap: 15px 15px;
        //row-gap: 15px;
        //column-gap: 15px;
        grid-template-areas:
            'c2 c1 c1'
            'c1 c1 c2';
        > .box {
            display: flex;
            align-items: center;
            justify-content: center;
            color: #ffffff;
            font-size: 48px;
            //margin-right: 15px;
            //margin-bottom: 15px;
        }
    }
    .editor {
        height: 500px;
    }
}
</style>
