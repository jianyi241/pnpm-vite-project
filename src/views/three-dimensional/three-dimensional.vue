<template>
    <div class="three-dimensional">
        <div class="book-list">
            <div class="book">
                <div class="book-left"></div>
                <div class="book-right"></div>
                <div class="book-back"></div>
                <div class="book-front"></div>
                <div class="book-bottom"></div>
                <div class="book-top"></div>
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
        > .book {
            position: relative;
            width: 282px;
            height: 400px;
            transform-style: preserve-3d;
            transform-origin: 100px 100px;
            perspective-origin: center;
            background-color: #ffffff;
            > .book-left {
                width: 30px;
                height: 400px;
                background: rgba(0, 174, 236, 0.4);
                transform: skewY(20deg) translateY(6px);
                border: 1px solid #00aeec;
            }
            > .book-back {
                width: 282px;
                height: 400px;
                background: rgba(0, 174, 236, 0.4);
                transform: skewY(-13deg) translateY(-433px);
                border: 1px solid #00aeec;
            }
            > .book-right {
                position: absolute;
                width: 30px;
                height: 400px;
                background: rgba(0, 174, 236, 0.4);
                transform: skewY(8deg) translate(282px, -503px);
                border: 1px solid #00aeec;
            }
            > .book-top {
                position: absolute;
                width: 282px;
                height: 30px;
                background: rgba(0, 174, 236, 0.4);
                transform: skewY(8deg) translate(282px, -503px);
                border: 1px solid #00aeec;
            }
        }
    }
}
</style>
