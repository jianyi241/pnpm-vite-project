<template>
    <div>
        <h1>About</h1>
        <a-button type="primary" @click="showLoading">显示loading</a-button>
        <drop-down name="下拉菜单" :menus="menuList" @choose="chooseMenu"></drop-down>
    </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import DropDown from "../../components/DropDown.vue";
import {MenuItem} from "../../model/components/DropDown";
import useCurrentInstance from "../../hook/useCurrentInstance";
const { globalProperties, proxy } = useCurrentInstance()

const menuList = ref<Array<MenuItem>>([
    {
        key: 'menu1',
        value: '菜单1'
    },{
        key: 'menu2',
        value: '菜单2'
    },{
        key: 'menu3',
        value: '菜单3'
    },{
        key: 'menu4',
        value: '菜单4'
    },
])

const chooseMenu = (e: MenuItem) => {
    console.log('value ', e.value)
}


const showLoading = () => {
  console.log('show or hide ', )
    proxy.$loading.show()
    setTimeout(() => {
        proxy.$loading.hide()
    }, 2000)
}
</script>

<style scoped>

</style>
