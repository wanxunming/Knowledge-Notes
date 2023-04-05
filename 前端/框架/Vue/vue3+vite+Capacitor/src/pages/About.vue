
<template>
  <div>
    <h2>about</h2>
  </div>
</template>

<script setup>
import {Toast} from 'vant'
const toast = Toast.loading({
  duration: 0,
  forbidClick: true,
  message: '倒计时 3 秒',
});

let second = 3;
const timer = setInterval(() => {
  second--;
  if (second) {
    toast.message = `倒计时 ${second} 秒`;
  } else {
    clearInterval(timer);
    Toast.clear();
  }
}, 1000);

</script>

<style scoped>
</style>