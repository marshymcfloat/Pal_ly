import BarGraph from "./BarGraph";

export default function InfoContainer() {
  return (
    <div className="mx-8 my-4 flex h-auto w-auto flex-shrink-0 flex-grow-0 items-end overflow-y-auto rounded-2xl border-[4px] border-white px-16 py-4">
      <BarGraph height={200} />
      <BarGraph height={250} />
    </div>
  );
}
