<template>
    <div class="home-page" :style="{ backgroundPositionX: bgXOffset + 'px' }">
        <!--        <a-button @click="toPage('/about')"> 去About </a-button>-->
        <!--        <h1>Home</h1>-->
        <!--        <div class="input-group">-->
        <!--            <label for="varA">varA</label>-->
        <!--            <input v-model="obj.varA" type="number" name="varA" />-->
        <!--        </div>-->
        <!--        <div class="input-group">-->
        <!--            <label for="varA">varB</label>-->
        <!--            <input v-model="obj.varB" type="number" name="varA" />-->
        <!--        </div>-->
        <!--        <h1>Calc{{ calcPlus }}</h1>-->
        <!--        <HelloWorld msg="计算结果" :count="calcPlus" />-->
        <!--        <button v-bind="$attrs" @click="clickFunc($event)">点击提示</button>-->
        <!--        <button>attr 点击</button>-->
        <!--        <Modal :visible="showModal" @close="showModal = false">-->
        <!--            <template #title>-->
        <!--                <div />-->
        <!--            </template>-->
        <!--            <template #main>-->
        <!--                <div>content</div>-->
        <!--            </template>-->
        <!--            <template #footer>-->
        <!--                <a-button>确认</a-button>-->
        <!--                <a-button>取消</a-button>-->
        <!--            </template>-->
        <!--        </Modal>-->
        <!--        <Test />-->
        <h2 style="color: #ffffff">Mouse position is at: {{ x }}, {{ y }}</h2>
        <!--        <a-form style="width: 370px; margin: 0 auto">-->
        <!--            <a-form-item label="Name" required>-->
        <!--                <a-input v-focus style="width: 340px" />-->
        <!--            </a-form-item>-->
        <!--        </a-form>-->
        <!--        <div v-color="'red'">1111111111</div>-->
        <!--        <div v-color="'green'">2222222222</div>-->
        <!--        <div v-color="'blue'">3333333333</div>-->
        <!--        <h1 v-clock />-->
        <!--        <h1>{{ nowDateTime }}</h1>-->
        <!--        <a-button @click="showModal = !showModal"> 控制modal </a-button>-->
        <!--        <svg-icon name="icon-woman" color="red" style="font-size: 80px" />-->
        <!--        <h1 class="txt-blue">blue</h1>-->
        <!--        <h1 class="txt-green">green</h1>-->
        <!--        <h1 class="txt-red">red</h1>-->
        <h1 v-for="item in 100" style="color: #ffffff">
            Hello Earth Online{{ item }}
        </h1>
    </div>
</template>

<script setup lang="ts">
import {
    ref,
    reactive,
    computed,
    watch,
    watchEffect,
    onMounted,
    onBeforeUnmount,
    provide,
    defineAsyncComponent,
    onUnmounted,
    unref
} from 'vue'
import moment from 'moment/moment'
import { useRouter } from 'vue-router'
import HelloWorld from '../../components/HelloWorld.vue'
import Test from '../../components/Test.vue'
import SvgIcon from '../../components/SvgIcon.vue'
import RouterUtil from '../../router/instance'
import useCurrentInstance from '../../hook/useCurrentInstance'

const { globalProperties, proxy } = useCurrentInstance()

const Modal = defineAsyncComponent(() => import('../../components/Modal.vue'))

provide('message', 'hello inject')
provide('dd', 'bbbb')

const router = RouterUtil.instance()

router.updateSpinRefAndRouter(ref(false), useRouter())

const showModal = ref(false)

watchEffect(
    () => {
        // watchEffect() 中调用 unref() 来进行正确的追踪。
        const watchShowModal = unref(showModal)

        console.log('watchEffect showModal ', watchShowModal)
    },
    { flush: 'sync' }
)

const bgXOffset = ref(0)
const bgXPosition = ref(0)
const nowDateTime = moment(new Date()).format('yyyy-MM-dd HH:mm:ss')
const obj = reactive({
    varA: 2,
    varB: 4,
    varAB: 0
})

const toPage = (url: string) => {
    console.log('routerUtil')
    router.push(url)
}

const obj1 = reactive({
    numA: 101,
    numB: 102,
    numC: 0
})

const calcPlus = computed(() => obj.varA + obj.varB)

const clickFunc = (e: any) => {
    console.log('eeeee ', e)
}
const x = ref(0)
const y = ref(0)

function update(event: MouseEvent) {
    console.log('window.width ', window.innerWidth)
    x.value = event.pageX
    y.value = event.pageY
    const width = window.innerWidth
    if (x.value > width / 2) {
        bgXPosition.value = bgXOffset.value - (width / 2 - x.value)
    } else {
        bgXPosition.value = bgXOffset.value + (width / 2 - x.value)
    }
    console.log('x offset ', bgXOffset.value)
    console.log('x position ', bgXPosition.value)
}

const calcPosition = (): void => {
    const width = window.innerWidth
    const imgWidth = 4000
    if (width < imgWidth) {
        bgXOffset.value = 0
    }
}

onUnmounted(() => window.removeEventListener('mousemove', update))
onMounted(() => {
    calcPosition()
    window.addEventListener('mousemove', update)
    console.log('on mounted')
})

onBeforeUnmount(() => {
    console.log('on before unmount')
})

watchEffect(() => {
    console.log('this watchEffect ===> ', [obj, obj1])
})

watch([obj, obj1], (newValue, oldValue) => {
    obj.varAB = obj.varA + obj.varB
    console.log('watch newValue ', newValue)
    console.log('watch oldValue ', oldValue)
})
</script>

<style scoped lang="scss">
.home-page {
    height: 100vh;
    width: 100vw;
    background: url('../../assets/image/home_bg.jpg') center center/cover fixed
        no-repeat;
    overflow: auto;
}
.txt-blue {
    color: $blue;
}
.txt-red {
    color: $red;
}
.txt-green {
    color: $green;
}
</style>
