<template>
    <div class="grid">
        <h1>Grid</h1>
        <div class="grid-box parent-box">
            <div style="background-color: red" class="box child-box-1">11</div>
            <div style="background-color: green" class="box child-box-2">
                22
            </div>
            <div style="background-color: blue" class="box child-box-3">33</div>
            <div style="background-color: orange" class="box child-box-4">
                44
            </div>
            <div style="background-color: #000000" class="box child-box-5">
                55
            </div>
            <div style="background-color: yellow" class="box child-box-6">
                66
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Grid'
}
</script>

<style scoped lang="scss">
.grid {
    padding: 15px;
    > .grid-box {
        min-width: 600px;
        height: 300px;
        display: grid;
        //grid-template:
        //    minmax(150px, max-content)
        //    repeat(auto-fill, 150px) / minmax(200px, max-content) repeat(auto-fill, 200px);
        grid-template-columns: [c1] 200px [c2] 200px [c3] 200px;
        grid-template-rows: [r1] 150px [r2] 150px;
        gap: 15px 15px;
        //row-gap: 15px;
        //column-gap: 15px;
        grid-template-areas:
            'c2 c1 c1'
            'c1 c1 c2';
        > .box {
            display: flex;
            align-items: center;
            justify-content: center;
            color: #ffffff;
            font-size: 48px;
            //margin-right: 15px;
            //margin-bottom: 15px;
        }
    }
}
</style>
