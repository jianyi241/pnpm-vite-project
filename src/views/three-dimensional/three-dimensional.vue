<template>
    <div class="three-dimensional">
        <div class="book-list">
            <div
                v-for="(item, index) in books"
                :key="index"
                class="book"
                :class="{ checked: activeIndex === index }"
                @click="activeBook(index)"
            >
                <div class="book-item book-left"></div>
                <div class="book-item book-right"></div>
                <div class="book-item book-back"></div>
                <div class="book-item book-front">
                    {{ item }}
                </div>
                <div class="book-item book-bottom"></div>
                <div class="book-item book-top"></div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeIndex = ref<number>(-1)
const books = ref([1, 2, 3, 4])

const activeBook = (idx: number) => {
    if (idx === activeIndex.value) {
        activeIndex.value = -1
        return
    }
    activeIndex.value = idx
}
</script>

<style scoped lang="scss">
.three-dimensional {
    width: 100vw;
    height: 100vh;
    background: #000000;

    > .book-list {
        position: relative;
        height: 600px;
        display: flex;
        justify-content: center;
        align-items: center;
        perspective: 9999px;

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
            &.checked {
                transform: rotateY(0deg) translateX(-40px) translateY(0);
                z-index: 999;
                animation: bookChecked 1s ease-in-out;
            }
            @keyframes bookChecked {
                0% {
                    transform: rotateY(0deg) translateX(0) translateY(0);
                }

                50% {
                    transform: rotateY(0deg) translateX(-40px) translateY(50px);
                }

                100% {
                    transform: rotateY(0deg) translateX(-40px) translateY(0);
                }
            }
            > .book-item {
                position: absolute;
            }

            > .book-left {
                width: 30px;
                height: 400px;
                background: rgba(0, 128, 0, 0.6);
                transform-origin: left;
                transform: rotateY(-90deg) translateZ(0px);
            }

            > .book-back {
                width: 282px;
                height: 400px;
                background: rgba(66, 133, 244, 0.4);
                //transform: rotateY(7deg) translateZ(-18px);
            }

            > .book-front {
                width: 282px;
                height: 400px;
                background: rgba(66, 133, 244, 0.4);
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
