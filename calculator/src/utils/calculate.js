export const operations = [
  { value: "+", label: "Sčítanie" },
  { value: "-", label: "Odčítanie" },
  { value: "*", label: "Násobenie" },
  { value: "/", label: "Delenie" },
];

export function calculate(a, b, operations) {
  switch (operation) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    default:
      return null;
  }
}

export default calculate;
