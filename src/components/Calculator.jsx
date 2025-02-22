import SquareButton from "./SquareButton";
import Screen from "./Screen";
import { useState } from "react";

export default function Calculator() {
  const [resultArr, updateResultArr] = useState([]);
  const [num, setNum] = useState("");

  const clickButton = (event) => {
    const btnText = event.target.textContent;

    switch (btnText) {
      case "C":
        updateResultArr((arr) => (arr = []));
        break;
      case "*":
        if (resultArr.length === 0) {
          console.log(resultArr);
          console.log(num);

          updateResultArr((arr) => (arr[0] = num));
          setNum("");
        } else if (resultArr.length === 1) {
          const total = Number(resultArr[0]) * Number(num);
          console.log(num);
          setNum(total);
          console.log(num);
        }

        break;
      case "/":
        setNum("");
        break;
      case "+":
        setNum("");
        break;
      case "-":
        setNum("");
        break;
      case "=":
        setNum("");
        break;

      case "00":
        setNum(num + "00");
        break;
      case "0":
        setNum(num + "0");
        break;
      case "1":
        setNum(num + "1");
        break;
      case "2":
        setNum(num + "2");
        break;
      case "3":
        setNum(num + "3");
        break;
      case "4":
        setNum(num + "4");
        break;
      case "5":
        setNum(num + "5");
        break;
      case "6":
        setNum(num + "6");
        break;
      case "7":
        setNum(num + "7");
        break;
      case "8":
        setNum(num + "8");
        break;
      case "9":
        setNum(num + "9");
        break;
    }
    console.log(num);
  };

  return (
    <div name="calc" className="calculator" onClick={clickButton}>
      <Screen />
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
