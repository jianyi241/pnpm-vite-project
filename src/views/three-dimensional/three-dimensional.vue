<template>
    <div class="three-dimensional">
        <div class="book-list">
            <div
                v-for="(item, index) in books"
                :key="index"
                class="book"
                :class="{ active: item.active, put: item.put }"
                @click="activeBook(index)"
            >
                <div class="book-item book-left"></div>
                <div class="book-item book-right"></div>
                <div class="book-item book-back"></div>
                <div class="book-item book-front">
                    {{ item.name }}
                </div>
                <div class="book-item book-bottom"></div>
                <div class="book-item book-top"></div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Book {
    name: string
    author: string
    active: boolean
    put: boolean
}

const activeIndex = ref<number>(-1)
const books = ref<Array<Book>>([
    {
        name: '活着',
        author: '余华',
        active: false,
        put: false
    },
    {
        name: '生死疲劳',
        author: '莫言',
        active: false,
        put: false
    }
])

const activeBook = (idx: number) => {
    if (idx === activeIndex.value) {
        activeIndex.value = -1
        books.value[idx].active = false
        books.value[idx].put = true
        setTimeout(() => {
            books.value[idx].put = false
        }, 1000)
        return
    }
    activeIndex.value = idx
    books.value[idx].active = true
}
</script>

<style scoped lang="scss">
.three-dimensional {
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.38);

    > .book-list {
        position: relative;
        height: 600px;
        display: flex;
        justify-content: center;
        align-items: center;
        perspective: 2000px;

        > .book {
            position: relative;
            width: 282px;
            height: 400px;
            transform-style: preserve-3d;
            transform: rotateY(45deg);
            cursor: pointer;
            margin-left: -240px;
            //transition: transform 0.5s ease-in-out;
            &:hover {
            }
            &.active {
                transform: rotateY(0deg) translateX(-40px) translateY(0);
                z-index: 999;
                animation: bookActive 1s ease-in-out;
            }
            &.put {
                animation: bookPut 1s ease-in-out;
            }
            @keyframes bookActive {
                0% {
                    transform: rotateY(45deg);
                }

                50% {
                    transform: rotateY(0deg) translateX(-20px) translateY(-80px);
                }

                100% {
                    transform: rotateY(0deg) translateX(-40px) translateY(0);
                }
            }

            @keyframes bookPut {
                0% {
                    transform: rotateY(0deg) translateX(-40px) translateY(0);
                }

                50% {
                    transform: rotateY(0deg) translateX(-20px) translateY(-80px);
                }

                100% {
                    transform: rotateY(45deg);
                }
            }

            > .book-item {
                position: absolute;
            }

            > .book-left {
                width: 30px;
                height: 400px;
                background: #ffffff;
                transform-origin: left;
                transform: rotateY(-90deg) translateZ(0px);
            }

            > .book-back {
                width: 282px;
                height: 400px;
                background: #ffffff;
                //transform: rotateY(7deg) translateZ(-18px);
            }

            > .book-front {
                width: 282px;
                height: 400px;
                background: #000000;
                color: #ffffff;
                transform-origin: left;
                transform: rotateY(0) translateZ(30px) translateX(0);
            }

            > .book-right {
                width: 30px;
                height: 400px;
                background: rgba(0, 128, 0, 0.6);
                transform-origin: left;
                transform: rotateY(90deg) translateZ(282px) translateX(-30px);
            }

            > .book-top {
                width: 282px;
                height: 30px;
                background: rgba(246, 25, 43, 0.7);
                transform-origin: top;
                transform: rotateX(90deg);
            }

            > .book-bottom {
                width: 282px;
                height: 30px;
                background: rgba(246, 25, 43, 0.7);
                transform-origin: top;
                transform: rotateX(90deg) translateZ(-400px);
            }
        }
    }
}
</style>
