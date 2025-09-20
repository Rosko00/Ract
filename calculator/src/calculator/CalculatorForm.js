import { useState } from "react";
import { calculate, operations } from "../utils/calculate";
import NumberInput from "./NumberInput";
import Result from "./Result";

function CalculatorForm() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [operation, setOperation] = useState(operations[0].label);
  const [result, setResult] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    const numberA = Number(a);
    const numberB = Number(b);
    setResult(calculate(numberA, numberB, operation));
  };

  return (
    <div>
      <form className="CalculatorForm" onSubmit={handleSubmit}>
        <NumberInput
          name="a"
          label="Number 1: "
          value={a}
          onChange={(e) => setA(e.target.value)}
        />
        <NumberInput
          name="b"
          label="Number 2: "
          value={b}
          onChange={(e) => setB(e.target.value)}
        />

        <select
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
        >
          {operations.map((op) => (
            <option key={op.label} value={op.label}>
              {op.label}
            </option>
          ))}
        </select>

        <input type="submit" value="Calculate" />
      </form>

      <Result value={result} />
    </div>
  );
}

export default CalculatorForm;
