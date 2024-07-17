import Buttons from "../Buttons";
import BUTTONS_DATA from "../../utils/buttons_data";
export default function ButtonsPanel({ handleButton }) {
  return (
    <div className="w-full h-full bg-[#1D1F24] rounded-t-3xl">
      <div className="flex flex-wrap justify-center gap-3 pt-8">
        {" "}
        {BUTTONS_DATA.length &&
          BUTTONS_DATA.map((button) => (
            <Buttons
              key={button.id}
              className={`${button.className}`}
              onClick={() => handleButton(button.children)}
            >
              {button.children}
            </Buttons>
          ))}
      </div>
    </div>
  );
}
