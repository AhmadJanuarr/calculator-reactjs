import DarkModeToggle from "./darkModeToggle";
import Moon from "../../../public/assets/moon.svg";
import Sun from "../../../public/assets/sun.svg";
export default function DarkMode() {
  return (
    <div className="flex items-center justify-center w-full h-20 pt-5">
      <div className="w-24 h-10 bg-[#212738] rounded-2xl flex items-center justify-center ">
        <DarkModeToggle
          src={Moon}
          onClick={() => {
            console.log("click");
          }}
        />
        <DarkModeToggle src={Sun} onClick={() => {}} />
      </div>
    </div>
  );
}
