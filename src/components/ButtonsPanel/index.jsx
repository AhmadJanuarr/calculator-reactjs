export default function ButtonsPanel({ children }) {
  return (
    <div className="w-full h-full bg-[#1D1F24] rounded-t-3xl">
      <div className="flex flex-wrap justify-center gap-3 pt-8">{children}</div>
    </div>
  );
}
