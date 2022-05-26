<template>
  <Transition>
    <div class="loading" v-show="visible">
      <div class="loading-mask"></div>
      <div class="loading-box">
        <svg-icon class="icon" :size="80" color="#999999" name="icon-loading1"></svg-icon>
      </div>
    </div>
  </Transition>
</template>

<script lang="ts">

import {ref} from "vue";
import SvgIcon from "../../components/SvgIcon.vue";
export default {
  name: 'Loading',
  components: {SvgIcon},
  setup() {
    const visible = ref(false)

    const show = () => {
      visible.value = true
    }

    const hide = () => {
      visible.value = false
    }
    return {
      visible,
      show,
      hide
    }
  }
}

</script>

<style scoped lang="scss">
.loading {
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  left: 0;
  top: 0;

  > .loading-mask {
    position: absolute;
    width: inherit;
    height: inherit;
    left: 0;
    top: 0;
    z-index: inherit;
    background-color: rgba(255, 255, 255, .3);
  }

  > .loading-box {
    position: absolute;
    width: 80px;
    height: 80px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: inherit;
    animation: rotateAnim 1.5s linear infinite;
    @keyframes rotateAnim {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    > .icon {
    }
  }
}

/* 下面我们会解释这些 class 是做什么的 */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
