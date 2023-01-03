const coerceAmount = (amount: number | { amount: number }) => {
  if (typeof amount === "object") {
    return amount;
  }
  return amount;
};

coerceAmount({ amount: 20 });
coerceAmount(20);
