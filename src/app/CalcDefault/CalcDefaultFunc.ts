import { useState, useRef } from "react";

export default function useCalc() {
  const [value, setInputValue] = useState<string>("0");
  const [previousNumber, setPreviousNumber] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const displayRef = useRef<HTMLDivElement>(null);

  function handleButtonClick(value: string) {
    switch (value) {
      case "C":
        clearDisplay();
        break;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case "0":
      case ".":
        AddDisplay(value);
        break;
      case "CE":
        clearDisplayAndMemory();
        break;
      case "BACK":
        backspaceNumber();
        break;
      case "-":
      case "+":
      case "x":
      case "/":
        setOperatorAndStorePreviousNumber(value);
        break;
      case "sqrt":
      case "X^2":
      case "1/X":
        performSingleOperandOperation(value);
        break;
      case "=":
        calculate();
        break;
      default:
        console.log("Operação não reconhecida");
        break;
    }

    console.log("Valor clicado:", value);
  }

  function AddDisplay(value: string) {
    if (displayRef.current) {
      let valueDisplay = displayRef.current.innerHTML;
      if (valueDisplay === "0") {
        if (value === ".") {
          value = "0.";
        }
        displayRef.current.innerHTML = value;
      } else {
        displayRef.current.innerHTML += value;
      }
    }
  }

  function clearDisplay() {
    if (displayRef.current) {
      displayRef.current.innerHTML = "0";
    }
    setInputValue("0");
  }

  function clearDisplayAndMemory() {
    if (displayRef.current) {
      displayRef.current.innerHTML = "0";
    }
    setInputValue("0");
    setPreviousNumber(null);
    setOperator(null);
  }

  function setOperatorAndStorePreviousNumber(op: string) {
    if (displayRef.current) {
      setPreviousNumber(Number(displayRef.current.innerHTML));
      setOperator(op);
      clearDisplay();
    }
  }

  function performSingleOperandOperation(operation: string) {
    if (displayRef.current) {
      let currentNumber = Number(displayRef.current.innerHTML);
      let result = 0;

      switch (operation) {
        case "sqrt":
          result = Math.sqrt(currentNumber);
          break;
        case "X^2":
          result = currentNumber * currentNumber;
          break;
        case "1/X":
          result = 1 / currentNumber;
          break;
        default:
          console.log("Operação não reconhecida");
          return;
      }

      displayRef.current.innerHTML = result.toString();
      setOperator(null); // Reseta o operador após a operação
    }
  }

  function calculate() {
    if (displayRef.current && previousNumber !== null && operator !== null) {
      let currentNumber = Number(displayRef.current.innerHTML);
      let result = 0;

      switch (operator) {
        case "+":
          result = previousNumber + currentNumber;
          break;
        case "-":
          result = previousNumber - currentNumber;
          break;
        case "x":
          result = previousNumber * currentNumber;
          break;
        case "/":
          result = previousNumber / currentNumber;
          break;
        default:
          console.log("Operação não reconhecida");
          return;
      }

      displayRef.current.innerHTML = result.toString();
      setPreviousNumber(null);
      setOperator(null);
    }
  }

  function backspaceNumber() {
    if (displayRef.current) {
      let valueDisplay = displayRef.current.innerHTML;

      if (valueDisplay.length > 1) {
        displayRef.current.innerHTML = valueDisplay.slice(0, -1);
      } else {
        displayRef.current.innerHTML = "0";
      }
    }
  }

  return { handleButtonClick, displayRef };
}
