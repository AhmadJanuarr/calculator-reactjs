export default function DarkModeToggle({ src, onClick }) {
  return (
    <div className="flex items-center justify-center w-10 h-10 cursor-pointer">
      <img src={src} onClick={onClick} />
    </div>
  );
}
