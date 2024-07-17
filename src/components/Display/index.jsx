export default function DisplayCalculator({ children }) {
  return (
    <div className="flex items-end justify-end w-full h-32 pt-10 overflow-hidden">
      <h1 className="px-5 py-4 text-4xl font-bold text-white">{children}</h1>
    </div>
  );
}
