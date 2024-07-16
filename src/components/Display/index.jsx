export default function DisplayCalculator({ children }) {
  return (
    <div className="flex items-end justify-end w-full h-32 pt-10 ">
      <h1 className="px-5 py-4 text-2xl font-bold text-white">{children}</h1>
    </div>
  );
}
