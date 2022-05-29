<template>
    <Transition>
        <div class="modal" v-show="visible">
            <div class="modal-mask" v-if="mask"></div>
            <div class="modal-box">
                <a-button size="small" @click="close()">关闭</a-button>
                <div class="modal-title">
                    <slot name="title">
                        <div class="title-txt">{{ title }}</div>
                    </slot>
                </div>
                <div class="modal-main">
                    <slot name="main"></slot>
                </div>
                <div class="modal-footer">
                    <slot name="footer">
                        <button>确定</button>
                        <button>取消</button>
                    </slot>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script lang="ts">
import {ref, watch, toRefs} from 'vue'

export default {
    name: "Modal",
    props: {
        visible: {
            default: false
        },
        mask: {
            default: true
        },
        title: {
            default: '提示'
        }
    },
    setup(props,context) {
        const close = () => {
            context.emit('close', false)
        }

        return {
            close
        }
    }
}
</script>

<style scoped lang="scss">
/* 下面我们会解释这些 class 是做什么的 */
.v-enter-active,
.v-leave-active {
    transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

.modal {
    position: fixed;
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
    z-index: 999;

    > .modal-mask {
        position: absolute;
        width: 100%;
        height: 100%;
        //background-color: rgba(0,0,0,.6);
        background: -webkit-repeating-radial-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, 1));
        background: -moz-repeating-radial-gradient(rgba(0, 0, 0, .9), rgba(0, 0, 0, .9), rgba(0, 0, 0, .9), rgba(0, 0, 0, .8));
        z-index: 998;
    }

    > .modal-box {
        position: absolute;
        min-width: 600px;
        min-height: 400px;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #ffffff;
        z-index: 999;

        > .modal-title, > .modal-main, > .modal-footer {
            padding: 8px 16px;
        }
    }
}
</style>