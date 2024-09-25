export default function InputGroup({ label, name }) {
  return (
    <div className="mx-auto my-4 flex flex-col">
      <label htmlFor={label} className="text-xl font-semibold">
        {label}
      </label>
      <input
        id={label}
        name={name}
        type="text"
        className="mt-2 h-[50px] w-[300px] rounded-md px-2 text-xl"
      />
    </div>
  );
}
