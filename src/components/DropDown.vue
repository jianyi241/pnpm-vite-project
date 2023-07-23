<template>
    <div class="drop-downs">
        <div class="drop-down-name">{{ name }}</div>
        <div class="drop-down-menu">
            <div
                v-for="item in menus"
                :key="item.key"
                class="menu-item"
                @click="chooseMenuItem(item)"
            >
                {{ item.value }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, Prop, ref, SetupContext, toRef, toRefs } from 'vue'
import { MenuItem } from '../model/components/DropDown'

// eslint-disable-next-line vue/no-setup-props-destructure
const {
    name,
    menus,
    triangle = true
} = defineProps<{ name: string; menus: Array<MenuItem>; triangle: boolean }>()
const emit = defineEmits<{ (e: 'choose', value: MenuItem): void }>()
onMounted(() => {
    console.log('name ', name)
    console.log('menus ', menus)
})

const chooseMenuItem = (item: MenuItem) => {
    emit('choose', item)
}
</script>

<style scoped></style>
