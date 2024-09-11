import { useState } from "react";

export default function useCalc() {
  const [inputValue, setInputValue] = useState('');

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
        AddDisplay(value);
        break;
      default:
        console.log("Operação não reconhecida");
        break;
    }

    console.log("Valor clicado:", value);
  }

  function AddDisplay(value: string) {
    let display = document.getElementById("display");
    display && (display.innerHTML += value);
  }

  function clearDisplay() {
    let display = document.getElementById("display");
    display && (display.innerHTML = "0");  
  }

  return { handleButtonClick };
}
