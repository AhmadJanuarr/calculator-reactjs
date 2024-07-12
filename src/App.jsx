import ButtonsPanel from "./components/ButtonsPanel";
import DarkMode from "./components/DarkMode";
import DisplayCalculator from "./components/Display";

function App() {
  const styled = {
    width: "320px",
    height: "580px",
  };
  return (
    <div className="bg-[#EAEAEA] w-[100vw] h-[100vh] flex justify-center items-center">
      <div
        className="overflow-hidden bg-[#191A1E] rounded-[3rem]"
        style={styled}
      >
        <div className="flex flex-col items-center w-full h-[250px] justify-between">
          <DarkMode />
          <DisplayCalculator />
        </div>
        <ButtonsPanel />
      </div>
    </div>
  );
}

export default App;
