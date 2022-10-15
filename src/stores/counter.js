import { defineStore } from "pinia";

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    count: 0,
  }),
  getters: {
    getCount: (state) => {
      return state.count;
    },
  },
  actions: {
    addItem(val) {
      this.count = this.count + val;
    },
  },
});
