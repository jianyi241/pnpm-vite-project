<template>
    <div class="app-main">
        <router-view></router-view>
    </div>
</template>

<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import { onMounted,computed } from "vue";
import {useStore} from "vuex";
import { mapGetters } from "vuex";

  const store = useStore()
  const globalNum = computed(() => store.getters.getGlobalNum)


  const calc = (type: string) => {
    if (type === 'plus') {
      // store.commit('CHANGE_GLOBAL_NUM',{calcType: 'plus'})
      store.dispatch('changeGlobalNum', {calcType: 'plus'})
    } else {
      // store.commit('CHANGE_GLOBAL_NUM',{calcType: 'reduce'})
      store.dispatch('changeGlobalNum', {calcType: 'reduct'})
    }
  }

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.router-link-active.router-link-exact-active {
  color: $yellow;
      //#42b983;
}
</style>
