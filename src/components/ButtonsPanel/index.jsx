import Buttons from "../Buttons";

const BUTTONS_DATA = [
  {
    id: 1,
    children: "AC",
    className: "text-[#24E1CA]",
  },
  {
    id: 2,
    children: "+/-",
    className: "text-[#24E1CA]",
  },
  {
    id: 3,
    children: "%",
    className: "text-[#24E1CA]",
  },
];
export default function ButtonsPanel() {
  return (
    <div className="w-full h-full bg-[#1D1F24] rounded-t-3xl">
      <div className="flex flex-wrap justify-center gap-3 pt-8">
        <Buttons>AC</Buttons>
        <Buttons>AC</Buttons>
        <Buttons>AC</Buttons>
        <Buttons>AC</Buttons>
        <Buttons>AC</Buttons>
        <Buttons>AC</Buttons>
        <Buttons>AC</Buttons>
        <Buttons>AC</Buttons>
        <Buttons>AC</Buttons>
        <Buttons>AC</Buttons>
        <Buttons>AC</Buttons>
        <Buttons>AC</Buttons>
        <Buttons>AC</Buttons>
        <Buttons>AC</Buttons>
        <Buttons>AC</Buttons>
        <Buttons>AC</Buttons>
      </div>
    </div>
  );
}
