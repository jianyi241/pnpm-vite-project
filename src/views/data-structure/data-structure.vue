<template></template>

<script setup lang="ts">
interface Dog {
    name: string
    age: number
    color: string
}

interface Animal {
    animalName: string
    animalWeight: number
    animalType: string
}

import { onMounted } from 'vue'
import LinkedList from './LinkedList/LinkedList'

onMounted(() => {
    const linkedList = new LinkedList()
    linkedList.append('1')
    linkedList.append('2')
    linkedList.append('3')
    linkedList.append('4')
    linkedList.appendAt('99', 0)
    linkedList.appendAt('55', 5)
    linkedList.appendAt('33', 2)
    linkedList.removeAt(0)
    linkedList.removeAt(1)
    let getNode9 = linkedList.getNode(2)
    console.log('getNode9', getNode9)
    const indexOf2 = linkedList.indexOf('3')
    console.dir(linkedList, {
        depth: 100
    })

    console.log('index of ', indexOf2)

    linkedList.forEach((e, idx) => {
        console.log(idx, '-- ', e)
    })

    let arr = [1, 2, 3]
    let spliceResult = arr.splice(1, 1)
    console.log('arr ', arr)
    console.log('spliceResult ', spliceResult)

    const testArr: Dog[] & Animal[] = [
        {
            name: '咖啡猫',
            age: 10,
            color: 'red',
            animalName: 'koko',
            animalWeight: 10,
            animalType: '加菲猫'
        }
    ]
    console.log('testArr ', testArr)
})
</script>

<style scoped lang="scss"></style>
