<script setup>
  import PRODUCT_JSON from "@/content/product.json";
  //STORE//
  import { s_supplies } from '@/stores/supplies'
  let s_supplies_data = s_supplies()

  const isCheckboxChecked = ref(false)
  const selected = ref("")
</script>

<template>
  <v-expansion-panels>
    <v-expansion-panel v-for="(list_prod, list_prod_index) in PRODUCT_JSON.poduct" :key="list_prod_index">
      <template v-slot:title>
        <img width="40" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROJGo_BDmE1BQXej-UemTXxZG6RkDsA95ZnA&usqp=CAU" alt="img"/>
        {{ list_prod.title }}
      </template>
      <template v-slot:text>
        <v-row 
          class="supplier-details--list"
          v-for="(child_prod, child_prod_index) in list_prod.child_product" :key="child_prod_index"
          >
          <v-col md="1">
            <v-checkbox
              v-model="selected"
              value="John"
            ></v-checkbox>
          </v-col>
          <v-col md="9" class="truncate-text">
            <p>{{ child_prod.title }}</p>
            <small>{{ child_prod.sub_title }}</small>
          </v-col>
          <v-col md="2">
            <v-text-field variant="outlined" :disabled="!child_prod.selected"></v-text-field>
          </v-col>
        </v-row>
      </template>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<style>
details[open] summary {
  margin-bottom: 10px;
}
summary {
  position: relative;
  padding: 20px 0;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: margin 150ms ease-out;
}

.supplier-details--list {
  display: flex;
  align-items: center;
}
.supplier-details--list > * {
  flex-grow: 1;
}
.supplier-details--list input {
  width: auto;
}
.supplier-details--list .truncate-text {
  white-space: nowrap;
  overflow: hidden;
  max-width: 470px;
  width: 100%;
}
.supplier-details--list .truncate-text p{
  overflow: hidden;
  text-overflow: ellipsis;
}
.supplier-details--list input:last-child {
  max-width: 68px;
  max-height: 20px;
}
</style>