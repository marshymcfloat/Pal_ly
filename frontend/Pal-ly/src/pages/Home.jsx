export default function HomePage() {
  return (
    <>
      <main className="flex h-screen">
        <div
          id="textContainer"
          className="flex flex-1 items-center justify-center"
        >
          <div className="">
            <h1 className="w-[400px] text-5xl font-bold tracking-wider text-[#efefef]">
              <span className="text-customAccentGreen">Track</span>,
              <span className="text-customAccentGreen">Manage</span>, and
              <span className="text-customAccentGreen">Grow</span> Your Business
              with Precision.
            </h1>
          </div>
        </div>
        <div id="highlight1" className="flex-1"></div>
      </main>
    </>
  );
}
