<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: tu
 * @Date: 2022-10-12 17:29:03
 * @LastEditors: tu
 * @LastEditTime: 2022-10-14 17:33:13
 * @FilePath: /vue3+pinia/src/pages/AboutView.vue
-->
<template>
  <div class="about">
    <h1>AboutView</h1>
    {{ store.count }}
    {{ store.getCount }}
    <button @click="add">add</button>
  </div>
</template>

<script setup>
import { useCounterStore } from "@/stores/counter.js";
let store = useCounterStore();
console.log("store: ", store);
const add = () => {
  store.addItem(5);
  // console.log("store.add: ", store.count);
};
</script>

<style></style>
