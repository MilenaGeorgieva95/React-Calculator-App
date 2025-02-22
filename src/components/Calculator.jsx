import SquareButton from "./SquareButton";
import Screen from "./Screen";
import { useState } from "react";

export default function Calculator() {
  const [isFirstNum, setIsFirstNum] = useState(true);
  const [firstNum, setFirstNum] = useState("");
  const [secondNum, setSecondNum] = useState("");
  const [operator, setOperator] = useState("");
  const [value, setValue] = useState("0");
  const numsArr = ["00", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
  const operatorsArr = ["/", "*", "+", "-"];

  const clickButton = (event) => {
    const btnText = event.target.textContent;

    if (numsArr.includes(btnText) && isFirstNum === true) {
      setFirstNum(firstNum + btnText);
      setValue(firstNum + btnText);
    } else if (numsArr.includes(btnText)) {
      setSecondNum(secondNum + btnText);
      setValue(secondNum + btnText);
    } else if (operatorsArr.includes(btnText)) {
      setOperator(btnText);
      setIsFirstNum(false);
    } else if (btnText === "C") {
      setFirstNum("");
      setSecondNum("");
      setValue("0");
      setOperator("");
    } else if (btnText === "=") {
      let total = 0;

      switch (operator) {
        case "*":
          total = Number(firstNum) * Number(secondNum);
          break;
        case "/":
          total = Number(firstNum) / Number(secondNum);
          break;
        case "+":
          total = Number(firstNum) + Number(secondNum);
          break;
        case "-":
          total = Number(firstNum) - Number(secondNum);
          break;
      }
      setFirstNum(total);
      setSecondNum("");
      setIsFirstNum(true);
      setValue(total);
    }
  };

  return (
    <div name="calc" className="calculator" onClick={clickButton}>
      <Screen value={value} />
      <SquareButton text="C" extraClass="clear" />
      <SquareButton text="/" />
      <SquareButton text="*" />
      <SquareButton text="7" />
      <SquareButton text="8" />
      <SquareButton text="9" />
      <SquareButton text="-" />
      <SquareButton text="4" />
      <SquareButton text="5" />
      <SquareButton text="6" />
      <SquareButton text="+" extraClass="plus" />
      <SquareButton text="1" />
      <SquareButton text="2" />
      <SquareButton text="3" />
      <SquareButton text="0" />
      <SquareButton text="00" />
      <SquareButton text="." />
      <SquareButton text="=" extraClass="equal" />
    </div>
  );
}
