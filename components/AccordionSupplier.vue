<script setup>
  //STORE//
  import { s_supplies } from '@/stores/supplies'
  let s_supplies_data = s_supplies()
</script>

<template>
  <details class="supplier-details">
    <summary>
      <img width="40" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROJGo_BDmE1BQXej-UemTXxZG6RkDsA95ZnA&usqp=CAU"/>
      PIT3S-T-RL | 3mil Polymide
    </summary>

    <div class="supplier-details--list">
      <input type="checkbox" />
      <div class="truncate-text">
        <p>508mm (20") wide x 33m (36yd) long with release liner | (Tolerance is ± 0 asdsadas das das dadas dasas da dasdad</p>
        <small>SKU: PIT3S-T-RL/508 </small>
      </div>
      <input type="text" placeholder="1" />
    </div>
  </details>
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