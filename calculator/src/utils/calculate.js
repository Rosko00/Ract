export const operations = [
  { label: "+", fn: (a, b) => a + b },
  { label: "-", fn: (a, b) => a - b },
  { label: "*", fn: (a, b) => a * b },
  { label: "/", fn: (a, b) => (b === 0 ? NaN : a / b) },
];

export function calculate(a, b, opLabel) {
  const op = operations.find((o) => o.label === opLabel);
  return op ? op.fn(a, b) : NaN;
}
