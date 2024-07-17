import ButtonsPanel from "./components/ButtonsPanel";
import DarkMode from "./components/DarkMode";
import DisplayCalculator from "./components/Display";

import { useState } from "react";

export default function App() {
  const [display, setDisplay] = useState("0");

  const handleButton = (e) => {
    if (e === "AC") {
      setDisplay("0");
    } else if (e === "CE") {
      setDisplay((current) => current.slice(0, -1));
    } else if (e === "=") {
      setDisplay((current) => eval(current));
    } else {
      setDisplay((current) => (current == "0" ? e : current + e));
    }
  };

  const styled = {
    width: "330px",
    height: "630px",
  };
  return (
    <div className="bg-[#EAEAEA] w-[100vw] h-[100vh] flex justify-center items-center">
      <div
        className="overflow-hidden bg-[#191A1E] rounded-[3rem]"
        style={styled}
      >
        <div className="flex flex-col items-center w-full h-[250px] justify-between">
          <DarkMode />
          <DisplayCalculator>{display}</DisplayCalculator>
        </div>
        <ButtonsPanel handleButton={handleButton} />
      </div>
    </div>
  );
}
