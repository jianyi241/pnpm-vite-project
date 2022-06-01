<template>
    <div>
        <a-button @click="toPage('back')">返回</a-button>
        <h1>About</h1>
        <a-button type="primary" @click="showLoading" :loading="isLoading">显示loading</a-button>
        <drop-down name="下拉菜单" :menus="menuList" :triangle="true" @choose="chooseMenu"></drop-down>
        <a-button type="primary" @click="getEnvironmentInfo()">获取env信息</a-button>
        <a-button type="primary" @click="showLoading" :loading="isLoading"
            >显示loading</a-button
        >
        <drop-down
            name="下拉菜单"
            :menus="menuList"
            @choose="chooseMenu"
        ></drop-down>
        <a-button type="primary" @click="getEnvironmentInfo()"
            >获取env信息</a-button
        >
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DropDown from '../../components/DropDown.vue'
import { MenuItem } from '../../model/components/DropDown'
import useCurrentInstance from '../../hook/useCurrentInstance'
import RouterUtil from '../../router/instance'
import { useRouter } from 'vue-router'

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

const getEnvironmentInfo = () => {
    console.log('environment ', import.meta.env)
}

const chooseMenu = (e: MenuItem) => {
    console.log('value ', e.value)
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

<style scoped></style>
