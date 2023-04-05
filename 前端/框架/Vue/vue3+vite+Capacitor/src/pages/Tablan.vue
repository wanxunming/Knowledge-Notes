<template>
  <router-view></router-view>
  <Tabbar v-model="objTirm.active" @change="onChange">
    <TabbarItem icon="home-o" :dot="trim" to="/">home</TabbarItem>
    <TabbarItem icon="friends-o" :badge="objTirm.unReadNum" to="/about"
      >about</TabbarItem
    >
    <TabbarItem icon="setting-o" badge="200" @click="routerFun">my</TabbarItem>
  </Tabbar>
</template>

<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { reactive, ref } from "vue";
import { Tabbar, TabbarItem } from "vant";
import { useRouter } from 'vue-router';

let trim = ref(true);
let objTirm = reactive({
  active: 0,
  unReadNum: 5,
});
const onChange = (index) => {
  trim.value = false;
  if (index == 1) {
    objTirm.unReadNum = null;
  }
};

const router = useRouter();
const routerFun = ()=>{
  router.push({path:'/detail',query:{userId:objTirm.unReadNum}})
}
</script>

<style scoped>
</style>
