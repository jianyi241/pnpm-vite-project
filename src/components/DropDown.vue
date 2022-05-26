<template>
    <div class="drop-downs">
        <div class="drop-down-name">{{ name }}

        </div>
        <div class="drop-down-menu">
            <div class="menu-item" v-for="item in menus" :key="item.key" @click="chooseMenuItem(item)">
                {{ item.value }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {defineProps, onMounted, Prop, ref, SetupContext, toRef, toRefs} from "vue";
import {MenuItem} from "../model/components/DropDown";

const {name, menus, triangle = true} = defineProps<{ name: string, menus: Array<MenuItem>, triangle: boolean }>()
const emit = defineEmits<{
    (e: 'choose', value: MenuItem): void
}>()
onMounted(() => {
    console.log('name ', name)
    console.log('menus ', menus)
})

const chooseMenuItem = (item: MenuItem) => {
    emit('choose', item)
}

</script>

<style scoped>

</style>