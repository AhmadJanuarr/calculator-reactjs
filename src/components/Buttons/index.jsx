export default function Buttons({ children, className, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`${className} py-3 text-xl font-bold  bg-[#181818] rounded-lg hover:bg-slate-800 w-16`}
    >
      {children}
    </button>
  );
}
