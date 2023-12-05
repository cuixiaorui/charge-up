<template>
  <div>
    <h3>History</h3>
    <ul class="list">
      <template v-for="transaction in store.transactions" :key="transaction.id">
        <li :class="transaction.type">
          {{ transaction.title }}
          <span>${{ transaction.amount }}</span>
          <button
            class="delete-btn"
            @click="store.removeTransaction(transaction.id)"
          >
            x
          </button>
        </li>
      </template>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useTransaction } from "../store/transaction";

const store = useTransaction();
</script>

<style scoped></style>
