<script setup>
import { ref, computed } from "vue";
import SUPPLIER_JSON from "@/content/supplier.json";

//STORE//
import { s_supplies } from '@/stores/supplies'
let s_supplies_data = s_supplies()

const searchData = ref("")
const searchItem = computed(() => {
  return SUPPLIER_JSON.supplier_list.filter((item) => {
    return item.name.toLowerCase().includes(searchData.value.toLowerCase())
  });
});
</script>
<template>
  <div class="modal">
    <header class="modal-header">
      <a href="">
        <img src="@/assets/img/back-btn.svg"/>
      </a>
      <h2 v-html="s_supplies_data.s_product_selected === '' ? 'Browse' : s_supplies_data.s_product_selected" />
    </header>
    <div class="modal-body">
      <input
        class="search"
        type="text" placeholder="Search products"
        v-model="searchData"
      />
      <div 
        v-if="searchItem.length === 1" 
        class="supplier-list">
        <label
            v-for="(list, list_index) in searchItem" :key="list_index"
            @click="s_supplies_data.selectProdFn(list.name)"
          >{{list.name}}
        </label>
      </div>
      <select v-if="searchItem.length > 1" :size="searchItem.length" autofocus>
        <option 
          v-for="(list, list_index) in searchItem" :key="list_index"
          @click="s_supplies_data.selectProdFn(list.name)">
          {{list.name}}
        </option>
      </select>
      <AccordionSupplier />
    </div>
    <div class="modal-footer">
      <div class="product-select">
        <p>{{ s_supplies_data.s_product_num_selected }} product selected</p>
      </div>

      <div>
        <button class="primary">Cancel</button>
        <button disabled>Add</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  border: solid 1px #c4c4c4;
  box-shadow: 2px 2px 3px rgba(0,0,0,.1);
  width: 600px;
  box-sizing: border-box;
}

.modal .modal-body {
  padding: 40px;
}
.supplier-list,
.modal-body select {
  margin-top: 24px;
}

.modal .modal-header {
  padding: 40px 40px 0 40px;
  h2 {
    color: #7b7b7b;
    font-size: 20px;
    font-weight: 400;
    margin: 0;
    text-align: center;
  }
}

.modal .modal-footer {
  padding: 0 40px 40px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div > button {
    margin-left: 10px;
  }
}
</style>