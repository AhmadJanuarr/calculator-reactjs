import ButtonsPanel from "./components/ButtonsPanel";
import DarkMode from "./components/DarkMode";
import DisplayCalculator from "./components/Display";
import BUTTONS_DATA from "./utils/buttons_data";
import Buttons from "./components/Buttons/index";
import { useEffect, useState } from "react";

export default function App() {
  const [display, setDisplay] = useState(0);
  const handleButton = (e) => {
    const value = e.target.textContent;

    if (
      value === "1" ||
      value === "2" ||
      value === "3" ||
      value === "4" ||
      value === "5" ||
      value === "6" ||
      value === "7" ||
      value === "8" ||
      value === "9" ||
      value === "0"
    ) {
      setDisplay(display + value);
    }
  };

  useEffect(() => {
    console.log(display);
  }, [display]);

  const styled = {
    width: "320px",
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
        <ButtonsPanel>
          {BUTTONS_DATA.length &&
            BUTTONS_DATA.map((button) => (
              <Buttons
                key={button.id}
                variants={button.className}
                onClick={handleButton}
              >
                {button.children}
              </Buttons>
            ))}{" "}
        </ButtonsPanel>
      </div>
    </div>
  );
}
