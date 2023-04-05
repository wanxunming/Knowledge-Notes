
<template>
  <CellGroup>
    <Cell title="选择单个日期" :value="date" @click="show = true" is-link />
  </CellGroup>
  <Calendar v-model:show="show" @confirm="onConfirm" />
</template>

<script setup>
import { ref } from "vue";
import { reactive } from "@vue/reactivity";
import { Calendar, Cell, CellGroup } from "vant";
import { useRoute } from 'vue-router';
const route = useRoute();
//query
let userIdquery=route.query.userId;

//params
// let userIdparams=route.params.userId;

defineProps({});
let date = ref("");
let show = ref(true);
const formatDate = (date) => `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
const onConfirm = (value) => {
  show.value = false;
  date.value = formatDate(value);
};
</script>

<style scoped>
</style>