import { defineStore } from "pinia";
import { computed, reactive } from "vue";

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: "plus" | "minus";
}

let Id = 0;

export const useTransaction = defineStore("transaction", () => {
  const transactions = reactive<Transaction[]>([]);

  // 实现添加 transaction 的函数
  const addTransaction = (title: string, amount: number) => {
    const id = Id++;
    const transaction: Transaction = {
      id,
      title,
      amount,
      type: amount > 0 ? "plus" : "minus",
    };
    transactions.push(transaction);

    return transaction;
  };

  // 实现删除 transaction 函数
  const removeTransaction = (id: number) => {
    const index = transactions.findIndex((t) => t.id === id);
    if (index !== -1) {
      transactions.splice(index, 1);
    }
  };

  // 实现计算总余额
  const totalAmount = computed(() => {
    return transactions.reduce((total, t) => total + t.amount, 0);
  });

  // 实现计算总收入
  const totalIncome = computed(() =>
    transactions
      .filter((t) => t.type === "plus")
      .reduce((total, t) => total + t.amount, 0)
  );

  // 实现计算总支出
  const totalExpense = computed(() =>
    transactions
      .filter((t) => t.type === "minus")
      .reduce((total, t) => total + t.amount, 0)
  );

  return {
    totalAmount,
    totalIncome,
    totalExpense,
    transactions,
    removeTransaction,
    addTransaction,
  };
});
