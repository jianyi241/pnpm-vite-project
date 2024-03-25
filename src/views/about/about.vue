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
        <div style="border: 1px solid #ccc">
            <Toolbar
                style="border-bottom: 1px solid #ccc"
                :editor="editorRef"
                :defaultConfig="toolbarConfig"
                :mode="mode"
            />
            <Editor
                style="height: 500px; overflow-y: hidden;"
                v-model="valueHtml"
                :defaultConfig="editorConfig"
                :mode="mode"
                @onCreated="handleCreated"
            />
        </div>
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
        <div class="custom-table table-budget" v-if="0">
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
        <div class="animation">
            <div class="player-01"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref, onUnmounted, onMounted, onBeforeUnmount, shallowRef, watch} from 'vue'
import { useRouter } from 'vue-router'
import DropDown from '../../components/DropDown.vue'
import { MenuItem } from '../../model/components/DropDown'
import useCurrentInstance from '../../hook/useCurrentInstance'
import RouterUtil from '../../router/instance'
import Modal from '../../components/Modal.vue'
// import RichText from '../../components/RichText.vue'
import './about.js'
// import './demo.ts'
import './genshin-resources/index'
import {Editor, Toolbar} from '@wangeditor/editor-for-vue'
import '@wangeditor/editor/dist/css/style.css'
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

// editor instance, use `shallowRef`
const editorRef = shallowRef()


// content HTML
const valueHtml = ref('<p>hello</p>')

watch(() => valueHtml.value, (val) => {
    console.log('html change ', val)
})
const mode = 'default'
// Simulate ajax async set HTML
onMounted(() => {
    setTimeout(() => {
    }, 1500)
})

const toolbarConfig = {}
const editorConfig = {
    placeholder: 'Type here...',
    MENU_CONF: {
        uploadImage: {
            server: '/upload-img', // 这里设置你的上传图片接口
            // 其他图片上传配置...
        },
        uploadVideo: {
            server: '/upload-video', // 这里设置你的上传视频接口
            // 其他视频上传配置...
        }
    },
}

// Timely destroy `editor` before vue component destroy.
onBeforeUnmount(() => {
    const editor = editorRef.value
    if (editor == null) return
    editor.destroy()
})

const handleCreated = (editor) => {
    editorRef.value = editor // record editor instance
    editorRef.value.config.uploadImgServer = '/upload-img'
    editorRef.value.config.uploadVideoServer = '/api/upload-video'
}

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

.player-01 {
    width: 100%;
    height: 200px;
    animation: player01 0.5s 0s infinite normal ease forwards;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 0 0;
}

@keyframes player01 {
    0% {
        background-image: url('./animation-role/player_0001/06.png');
        background-position: 0 0;
    }
    14% {
        background-image: url('./animation-role/player_0001/07.png');
        background-position: 3px 0;
    }
    28% {
        background-image: url('./animation-role/player_0001/08.png');
        background-position: 6px 0;
    }
    42% {
        background-image: url('./animation-role/player_0001/09.png');
        background-position: 9px 0;
    }
    56% {
        background-image: url('./animation-role/player_0001/06.png');
        background-position: 12px 0;
    }
    70% {
        background-image: url('./animation-role/player_0001/07.png');
        background-position: 15px 0;
    }
    84% {
        background-image: url('./animation-role/player_0001/08.png');
        background-position: 18px 0;
    }
    98% {
        background-image: url('./animation-role/player_0001/09.png');
        background-position: 21px 0;
    }
}
</style>
