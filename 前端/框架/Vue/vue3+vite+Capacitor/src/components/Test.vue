<template>
  <div>{{ testMsg }}</div>
  <Button @click="emitFunc">Test测试</Button>
  <div>
    <Button @click="changeLoad">加载开关测试</Button>
    <Button :loading="firm" type="primary" loading-type="spinner" />
  </div>
  <!-- <router-link to="/FomrTest">进入表单页面</router-link> -->
</template>

<script setup>
import { ref,reactive } from "@vue/reactivity";
import {Button} from 'vant'

defineProps({
  testMsg: String,
});
let firm = ref(false);
let loginForm = reactive({
  name:String,
  password:Number
})
const emit = defineEmits(["changeFunc1"]);

const emitFunc = () => {
  emit("changeFunc1");
};

function changeLoad() {
  firm.value = !firm.value;
}
</script>

<style scoped>
</style>