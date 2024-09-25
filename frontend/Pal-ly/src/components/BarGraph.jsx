export default function BarGraph({ height }) {
  console.log(height);
  return (
    <div
      className="mx-4 w-20 bg-customAccentGreen"
      style={{ height: `${height}px` }}
    ></div>
  );
}
