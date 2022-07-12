<template>
    <div class="three-dimensional">
        <div class="book-list">
            <div class="book">
                <div class="book-item book-left"></div>
                <div class="book-item book-right"></div>
                <div class="book-item book-back"></div>
                <div class="book-item book-front"></div>
                <div class="book-item book-bottom"></div>
                <div class="book-item book-top"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ThreeDimensional'
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
        perspective: 600px;

        > .book {
            position: relative;
            width: 282px;
            height: 400px;
            transform-style: preserve-3d;
            transform: rotateY(20deg);
            > .book-item {
                position: absolute;
            }

            > .book-left {
                width: 30px;
                height: 400px;
                background: rgba(0, 174, 236, 0.4);
                transform-origin: left;
                transform: rotateY(-77deg) translateZ(0px);
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
                transform: rotateY(0deg) translateZ(29px) translateX(6px);
            }

            > .book-right {
                width: 30px;
                height: 400px;
                background: rgba(0, 174, 236, 0.4);
                transform: rotateY(-30deg) translateZ(-163px) translateX(224px);
            }

            //> .book-top {
            //    width: 282px;
            //    height: 30px;
            //    background: rgba(0, 174, 236, 0.4);
            //    transform: skewY(8deg) translate(282px, -503px);
            //    border: 1px solid #00aeec;
            //}
        }
    }
}
</style>
