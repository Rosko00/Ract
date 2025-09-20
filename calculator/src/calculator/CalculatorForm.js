import Numberinput from "./NumberInout";
import Result from "./Result";

function CalculatorForm() {
  return (
    <div>
      <form className="CalculatorForm">
        <Numberinput name="a" label="Číslo 1: " />
        <Numberinput name="b" label="Číslo 2: " />
        <select options={[]} />
        <input type="submit" value="Spočítaj" />
      </form>
      <Result />
    </div>
  );
}

export default CalculatorForm;
