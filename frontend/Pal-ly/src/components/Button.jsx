export default function Button({ text }) {
  return (
    <button className="bg- mx-auto mt-4 w-20 rounded-xl border-[3px] border-black py-2 font-bold transition-all duration-150 hover:bg-black hover:text-customAccentGray">
      {text}
    </button>
  );
}
