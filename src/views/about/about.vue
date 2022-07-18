<template>
    <div style="padding: 100px">
        <a-button @click="toPage('back')"> 返回</a-button>
        <h1>About</h1>
        <a-button type="primary" :loading="isLoading" @click="showLoading">
            显示loading
        </a-button>
        <drop-down
            name="下拉菜单"
            :menus="menuList"
            :triangle="true"
            @choose="chooseMenu"
        />
        <a-button type="primary" @click="getEnvironmentInfo()">
            获取env信息
        </a-button>
        <a-button type="primary" :loading="isLoading" @click="showLoading">
            显示loading
        </a-button>
        <!--        <drop-down-->
        <!--            name="下拉菜单"-->
        <!--            :menus="menuList"-->
        <!--            @choose="chooseMenu"-->
        <!--        ></drop-down>-->
        <a-button type="primary" @click="getEnvironmentInfo()">
            获取env信息
        </a-button>
        <!--        <rich-text-->
        <!--            style="width: 220px"-->
        <!--            :text="htmlText"-->
        <!--            :id="74534534"-->
        <!--        ></rich-text>-->
        <div v-if="0" class="box-wrapper">
            <div class="box1" />
            <div class="box2" />
            <div class="box3" />
        </div>
        <div class="text-mode">
            <div class="text" style="writing-mode: vertical-lr">
                Writing mode.
            </div>
            <div class="text" style="writing-mode: vertical-rl">
                Writing mode.
            </div>
            <div class="text" style="writing-mode: horizontal-tb">
                Writing mode.
            </div>
            <div class="text" style="writing-mode: sideways-lr">
                Writing mode.
            </div>
            <div class="text" style="writing-mode: sideways-rl">
                Writing mode.
            </div>
        </div>
        <button @click="changeDialog()">trigger</button>
        <div v-if="visible" class="dialog-wrapper">
            <Transition>
                <dialog :open="visible">原生dialog</dialog>
            </Transition>
        </div>
        <div class="custom-table table-budget">
            <div class="thead">
                <div class="tr">
                    <div class="th">Project</div>
                    <div class="th">Budget</div>
                    <div class="th">Used to Date</div>
                    <div class="th">Balance (h)</div>
                    <div class="th">Used to Date (%)</div>
                    <div class="th">Achieved to Date (%)</div>
                </div>
            </div>
            <div class="tbody">
                <div
                    v-for="i in 20"
                    class="tr"
                    ng-repeat="budget in budgetHList"
                >
                    <div class="td">
                        22-212 Total Constructions Miranda{{ i }}
                    </div>
                    <div class="td">504h</div>
                    <div class="td">102h</div>
                    <div class="td">402</div>
                    <div class="td">20.00%</div>
                    <div class="td">10.00%</div>
                </div>
            </div>
            <div class="tfooter">
                <div class="tr">
                    <div class="td">Totals</div>
                    <div class="td">1,504h</div>
                    <div class="td">122h</div>
                    <div class="td">1,382h</div>
                    <div class="td"></div>
                    <div class="td"></div>
                </div>
            </div>
        </div>
        <div class="font-demo font-pinyin">带有拼音的字体，得了吧</div>
        <div class="font-demo font-bamboo_stone">杨任东竹石体</div>
        <div class="font-demo font-roboto_regular">Roboto-Regular-D0-2</div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import DropDown from '../../components/DropDown.vue'
import { MenuItem } from '../../model/components/DropDown'
import useCurrentInstance from '../../hook/useCurrentInstance'
import RouterUtil from '../../router/instance'
import Modal from '../../components/Modal.vue'
// import RichText from '../../components/RichText.vue'
import './about.js'
import './demo.ts'
import '../data-structure/LinkedList/LinkedList.js'

const { globalProperties, proxy } = useCurrentInstance()
const router = RouterUtil.instance()

router.updateSpinRefAndRouter(ref(false), useRouter())
const menuList = ref<Array<MenuItem>>([
    {
        key: 'menu1',
        value: '菜单1'
    },
    {
        key: 'menu2',
        value: '菜单2'
    },
    {
        key: 'menu3',
        value: '菜单3'
    },
    {
        key: 'menu4',
        value: '菜单4'
    }
])

const visible = ref(false)

const changeDialog = () => {
    visible.value = !visible.value
}

const htmlText = ref(`
    <p>丙辰中秋，欢饮达旦，大醉，作此篇，兼怀子由。</p>
    <p>明月几时有？把酒问青天。不知天上宫阙，今夕是何年。我欲乘风归去，又恐琼楼玉宇，高处不胜寒。起舞弄清影，何似在人间。</p>
    <p>转朱阁，低绮户，照无眠。不应有恨，何事长向别时圆？人有悲欢离合，月有阴晴圆缺，此事古难全。但愿人长久，千里共婵娟。</p>
`)

const getEnvironmentInfo = () => {
    console.log('environment ', import.meta.env)
}

const chooseMenu = (item: MenuItem): void => {
    console.log('value ', item.value)
}

const toPage = (url: string) => {
    if (url === 'back') {
        router.back()
    }
}

const isLoading = ref<boolean>(false)

const showLoading = () => {
    console.log('show or hide ')
    proxy.$loading.show()
    isLoading.value = true
    setTimeout(() => {
        proxy.$loading.hide()
        isLoading.value = false
    }, 2000)
}
</script>

<style scoped lang="scss">
@import 'about.scss';
.box-wrapper {
    width: 1000px;
    display: flex;
    height: 500px;
    border-radius: 4px;
    padding: 100px;
    > .box1 {
        flex: 1;
        background-color: red;
    }

    > .box2 {
        flex: 1;
        background-color: green;
    }

    > .box3 {
        flex: 1;
        background-color: blue;
    }

    .v-enter-active,
    .v-leave-active {
        transition: opacity 0.3s ease;
    }

    .v-enter-from,
    .v-leave-to {
        opacity: 0;
    }
}
.font-demo {
    font-size: 24px;
    display: inline-block;
    &.font-pinyin {
        font-family: Pinyin;
    }
    &.font-bamboo_stone {
        font-family: BambooStone;
    }
    &.font-roboto_regular {
        font-family: RobotoRegular;
        background: linear-gradient(
            85deg,
            #f98e2b 0.16%,
            #f88a33 5.81%,
            #f57459 37%,
            #f46770 62.02%,
            #f36279 77.6%,
            #f35a84 95.16%,
            #f144a1 125.9%,
            #f02bc2 154.54%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
}
</style>
