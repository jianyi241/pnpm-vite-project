<template>
    <div class="grid">
        <h1>Grid</h1>
        <div class="grid-box">
            <div style="background-color: red" class="box box-1">A</div>
            <div style="background-color: green" class="box box-2">B</div>
            <div style="background-color: blue" class="box box-3">C</div>
            <div style="background-color: orange" class="box box-4">D</div>
            <div style="background-color: #000000" class="box box-5">E</div>
            <div style="background-color: yellow" class="box box-6">F</div>
        </div>
        <!--        <c-form-item label="住址">-->
        <!--            <c-input-->
        <!--                v-model:value="address"-->
        <!--                input-type="text"-->
        <!--                placeholder="请输入"-->
        <!--            ></c-input>-->
        <!--        </c-form-item>-->
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue'
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
        //grid-template: repeat(auto-fill, 1fr);
        grid-template-columns: repeat(3, 1fr);
        //200px 200px 200px;
        grid-template-rows: repeat(2, 1fr);
        //150px 150px;
        gap: 15px 15px;
        grid-auto-flow: column;
        //justify-items: end;
        //align-items: start;
        place-items: start end;
        //row-gap: 15px;
        //column-gap: 15px;
        //grid-template-areas:
        //    'a f b'
        //    'c e d';
        > .box {
            color: #ffffff;
            font-size: 48px;
            //margin-right: 15px;
            //margin-bottom: 15px;
        }
        //> .box-1 {
        //    grid-area: a;
        //}
        //> .box-2 {
        //    grid-area: b;
        //}
        //> .box-3 {
        //    grid-area: c;
        //}
        //> .box-4 {
        //    grid-area: d;
        //}
        //> .box-5 {
        //    grid-area: e;
        //}
        //> .box-6 {
        //    grid-area: f;
        //}
    }
    .editor {
        height: 500px;
    }
}
</style>
