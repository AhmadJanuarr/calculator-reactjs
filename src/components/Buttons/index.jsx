export default function Buttons({ children }) {
  return (
    <>
      <button className="px-4 py-3 text-xl font-bold text-white bg-[#181818] rounded-lg hover:bg-slate-800 ">
        {children}
      </button>
    </>
  );
}
