<template>
    <div class="page home">
        <h1>Home{{ ff }}</h1>
        <div class="input-group">
            <label for="varA">varA</label>
            <input type="number" name="varA" v-model="obj.varA"/>
        </div>
        <div class="input-group">
            <label for="varA">varB</label>
            <input type="number" name="varA" v-model="obj.varB"/>
        </div>
        <h1>Calc{{ calcPlus }}</h1>
        <HelloWorld msg="计算结果" :count="calcPlus"></HelloWorld>
        <button v-bind="$attrs" @click="clickFunc($event)">点击提示</button>
        <button>attr 点击</button>
        <Transition>
            <Modal v-show="showModal">
                <template #title>
                    <div></div>
                </template>
                <template #main>
                    <div>content</div>
                </template>
                <template #footer>
                    <a-button>确认</a-button>
                    <a-button>取消</a-button>
                </template>
            </Modal>
        </Transition>
        Mouse position is at: {{ x }}, {{ y }}
        <Test></Test>
        <a-form style="width: 370px;margin: 0 auto;">
            <a-form-item label="Name" required>
                <a-input style="width: 340px" v-focus />
            </a-form-item>
        </a-form>
        <div v-color="'red'">1111111111</div>
        <div v-color="'green'">2222222222</div>
        <div v-color="'blue'">3333333333</div>
        <h1 v-clock></h1>
        <h1>{{nowDateTime}}</h1>
        <a-button @click="showModal = !showModal">控制modal</a-button>
    </div>
</template>

<script setup lang="ts">
import {ref, reactive, computed, watch, watchEffect, onMounted, onBeforeUnmount, provide, defineAsyncComponent, onUnmounted} from 'vue'
import {ggg} from '../../util/date'
import HelloWorld from "../../components/HelloWorld.vue";
import Test from "../../components/Test.vue"
import moment from "moment/moment";
const Modal = defineAsyncComponent(() => import("../../components/Modal.vue"));

provide('message', 'hello inject')
provide('dd','bbbb')


const showModal = ref(false)
const nowDateTime = moment(new Date()).format('yyyy-MM-dd HH:mm:ss')
const ff = ref(ggg)
const obj = reactive({
    varA: 2,
    varB: 4,
    varAB: 0
})

const obj1 = reactive({
    numA: 101,
    numB: 102,
    numC: 0
})

const calcPlus = computed(() => {
    return obj.varA + obj.varB
})

const clickFunc = (e: any) => {
    console.log('eeeee ', e)
}
const x = ref(0)
const y = ref(0)

function update(event) {
    x.value = event.pageX
    y.value = event.pageY
}

onUnmounted(() => window.removeEventListener('mousemove', update))
onMounted(() => {
    window.addEventListener('mousemove', update)
    console.log('on mounted')
})

onBeforeUnmount(() => {
    console.log('on before unmount')
})

watchEffect(() => {
    console.log('this watchEffect ===> ', [obj, obj1])
})

watch([obj,obj1], (newValue, oldValue) => {
    obj.varAB = obj.varA + obj.varB
    console.log('watch newValue ', newValue)
    console.log('watch oldValue ', oldValue)
})

</script>

<style scoped lang="scss">
.router-link-active.router-link-exact-active {
    color: #42b983;
}
/* 下面我们会解释这些 class 是做什么的 */
.v-enter-active,
.v-leave-active {
    transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>
