export default function Buttons({ children, variants, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`${variants} py-3 text-xl font-bold text-white bg-[#181818] rounded-lg hover:bg-slate-800 w-16`}
    >
      {children}
    </button>
  );
}
