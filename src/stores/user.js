/*
 * @Description:
 * @Version: 1.0
 * @Autor: tu
 * @Date: 2022-10-15 16:22:20
 * @LastEditors: tu
 * @LastEditTime: 2022-10-15 16:30:00
 * @FilePath: /vue3+pinia/src/stores/user.js
 */
import { defineStore } from "pinia";
import { ref } from "vue";

export const userStore = defineStore("user", () => {
  let name = ref("aaaa");
  const nameAdd = (val) => {
    name.value = name.value + val;
  };
  return {
    name,
    nameAdd,
  };
});
