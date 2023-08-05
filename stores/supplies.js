import { defineStore } from 'pinia'

export const s_supplies = defineStore({
  id: 'supplies_data',
  state: () => ({ 
    s_product_selected: '',
    s_product_num_selected: 0,
  }),
  actions: {
    selectProdFn(title) {
      this.s_product_selected = title
    }
  }
})