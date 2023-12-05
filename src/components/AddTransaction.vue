<template>
  <div>
    <h3>添加记录</h3>
    <div class="form-control">
      <label for="text">Text</label>
      <input v-model="title" type="text" placeholder="enter text..." />
    </div>
    <div class="form-control">
      <label for="amount"
        >Amount<br />
        (negative - expense, positive - income)</label
      >
      <input v-model="amount" type="text" placeholder="enter amount..." />
    </div>
    <button class="btn" @click="handleAdd">添加记录</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useTransaction } from "../store/transaction";

const title = ref("");
const amount = ref(0);
const store = useTransaction();

function handleAdd() {
  store.addTransaction(title.value, Number(amount.value));
}
</script>

<style scoped></style>
