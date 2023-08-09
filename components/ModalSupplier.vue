<script setup>
import { ref, watch } from "vue";
import SUPPLIER_JSON from "@/content/supplier.json";

//STORE//
import { s_supplies } from '@/stores/supplies'
let s_supplies_data = s_supplies()

let selectedData = ref(null)
const supplierList = ref(SUPPLIER_JSON.supplier_list)
const supplierNames = ref(supplierList.value.map(supplier => supplier.name))

function selectedProduct(data) {
  s_supplies_data.s_product_selected = data
  s_supplies_data.s_isSelected = true
  selectedData = data
}

</script>
<template>
  <div class="modal">
    <header class="modal-header">
      <img
        v-if="!s_supplies_data.s_product_num_selected === 0"
        class="btn-back" 
        @click="s_supplies_data.s_isSelected = false" 
        src="@/assets/img/back-btn.svg"
      />
      <h2 v-html="s_supplies_data.s_product_selected === '' ? 'Browse' : s_supplies_data.s_product_selected" />
    </header>
    <div class="modal-body">
      <v-combobox
          v-if="!s_supplies_data.s_isSelected"
          v-model="selectedData"
          :items="supplierNames"
          label="Product Search"
          variant="outlined"
        >
          <template v-slot:item="data">
            <v-list-item @click="selectedProduct(data.item.title)">
              {{ data.item.title }}
            </v-list-item>
          </template>
        </v-combobox>
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
  width: 751px;
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
  display: flex;
  align-items: center;
  h2 {
    color: #7b7b7b;
    font-size: 20px;
    font-weight: 400;
    margin: 0;
    text-align: center;
    flex-grow: 1;
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