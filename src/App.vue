<template>
  <div>
    <h2>记账</h2>
    <div class="container">
      <Balance></Balance>
      <History></History>
      <AddTransaction></AddTransaction>
    </div>
  </div>
</template>

<script setup lang="ts">
import Balance from "./components/Balance.vue";
import History from "./components/History.vue";
import AddTransaction from "./components/AddTransaction.vue";
</script>
