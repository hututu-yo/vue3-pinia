<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: tu
 * @Date: 2022-10-12 17:29:03
 * @LastEditors: tu
 * @LastEditTime: 2022-10-15 16:31:46
 * @FilePath: /vue3+pinia/src/pages/HomeView.vue
-->
<script setup>
import { userStore } from "@/stores/user.js";
let user = userStore();
const add = () => {
  user.nameAdd("ssss");
};
</script>

<template>
  <div>HomeView</div>
  <div>{{ user.name }}</div>
  <button @click="add">add</button>
</template>
