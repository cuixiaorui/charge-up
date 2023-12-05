<template>
  <div>
    <div>
      <h4>余额</h4>
      <h1>${{ store.totalAmount }}</h1>
    </div>
    <div class="inc-exp-container">
      <div>
        <h4>收入</h4>
        <p class="money plus">+${{ store.totalIncome }}</p>
      </div>
      <div>
        <h4>支出</h4>
        <p class="money minus">-${{ store.totalExpense }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTransaction } from "../store/transaction";

const store = useTransaction();
</script>

<style scoped></style>
