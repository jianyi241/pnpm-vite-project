<template>
    <div class="antx6 flex flex-column gap16">
        <h1>AntX6 Demo</h1>
        <div class="antx6-content" ref="antx6Content"></div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { Graph } from '@antv/x6'

const antx6Content = ref<HTMLElement>()

onMounted(() => {
    // 1.初始化实例
    const graph = new Graph({
        container: antx6Content.value,
        width: 1300,
        height: 1300,
        background: {
            color: '#fff'
        },
        grid: true
    })
    console.log('graph ', graph)
    // 2. 添加Node
    graph.addNode({
        shape: 'rect',
        x: 40,
        y: 40,
        width: 120,
        height: 60,
        attrs: {
            text: {
                id: 1001
            },
            image: {
                'xlink:href':
                    'http://localhost:9998/vite-demo/antx6/demo-item1.png'
            }
        },
        label: '1号位置',
        visible: true
    })
})
</script>

<style scoped lang="scss">
.antx6 {
    height: 100vh;
    padding: 16px;
    background: #000000;
    h1 {
        color: #ffffff;
    }
    .antx6-content {
        width: 1300px;
        height: 1300px;
        background: #000 url('./demo.png') 0 0 / contain no-repeat;
        border: 1px solid #f00;
    }
}
</style>
