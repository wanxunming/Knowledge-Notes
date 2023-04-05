<template>
  <div class="flexCont">
    <span>Message: {{ msg }}</span>
    <span>name: {{ obj.name }}</span>
    <span>age: {{ obj.age }}</span>
  </div>
  <Button @click="testFunc">测试</Button>
  <Test :testMsg="obj.name" @changeFunc1="testFunc" />
</template>

<script setup>
import { reactive, ref } from "@vue/reactivity";
import { Button } from "vant";
import HelloWorld from "@/components/HelloWorld.vue";
import Test from "@/components/Test.vue";
const msg = ref("hello vue");
let obj = reactive({ name: "wxm", age: 25 });
const testFunc = () => {
  console.log(msg.value);
  obj.age++;
};

const getAge = () => {
  return obj.age;
};
</script>

<style scoped>
.flexCont {
  display: flex;
  justify-content: space-between;
}
</style>