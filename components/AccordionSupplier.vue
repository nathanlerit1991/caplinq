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
        <p>508mm (20") wide x 33m asdsad sad sa dsa das das das das das dasdasd sadasdasdasdasdasd sad as das das das das da as dasd</p>
      </div>
      <input type="text" />
    </div>
  </details>
</template>

<style>
details {
  box-sizing: border-box;
}
details[open],
details[open] summary {
  background: #F5F5F5;
}
details[open] summary {
  margin-bottom: 10px;
}


summary {
  position: relative;
  padding: 10px 0;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: margin 150ms ease-out;
}
summary:before {
  content:'►';
  position: absolute;
  right: 0;
}
details[open] summary:before {
  content:'▼';
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
  min-width: 370px;
}
.supplier-details--list .truncate-text p{
  overflow: hidden;
  text-overflow: ellipsis;
}
.supplier-details--list input:last-child {
  max-width: 100px;
  max-height: 20px;
}
</style>