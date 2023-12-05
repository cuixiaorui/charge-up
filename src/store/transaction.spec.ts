import { beforeEach, it, expect, describe } from "vitest";
import { useTransaction } from "./transaction";
import { setActivePinia, createPinia } from "pinia";

describe("use transaction", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  describe("add transaction", () => {
    it("should add a transaction", () => {
      const store = useTransaction();
      const transaction = store.addTransaction("Deductions", -10000);

      expect(transaction).toEqual(
        expect.objectContaining({
          title: "Deductions",
          amount: -10000,
          type: "minus",
        })
      );

      expect(store.transactions[0]).toEqual(transaction);
    });

    it("should add a positive transaction", () => {
      const store = useTransaction();
      const transaction = store.addTransaction("Income", 20000);

      expect(transaction).toEqual(
        expect.objectContaining({
          title: "Income",
          amount: 20000,
          type: "plus",
        })
      );
      expect(store.transactions[0]).toEqual(transaction);
    });
  });

  describe("remove transaction", () => {
    it("should remove a transaction by its id", () => {
      const store = useTransaction();
      const transaction = store.addTransaction("Deductions", -10000);
      store.removeTransaction(transaction.id);

      expect(store.transactions.length).toBe(0);
    });

    it("should not remove a transaction if it doesn't exist", () => {
      const store = useTransaction();
      store.addTransaction("Deductions", -10000);

      store.removeTransaction(100);

      expect(store.transactions.length).toBe(1);
    });
  });

  it("should return the correct total amount for transactions", () => {
    const store = useTransaction();
    store.addTransaction("Deductions 1", 10000);
    store.addTransaction("Deductions 2", -5000);

    expect(store.totalAmount).toBe(5000);
  });

  it("income", () => {
    const store = useTransaction();
    store.addTransaction("Income 1", 5000);
    store.addTransaction("Income 2", 5000);

    expect(store.totalIncome).toBe(10000);
  });

  it("expense", () => {
    const store = useTransaction();
    store.addTransaction("Income 1", -5000);
    store.addTransaction("Income 2", -5000);

    expect(store.totalExpense).toBe(-10000);
  });
});
