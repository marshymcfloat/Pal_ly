import { NavLink } from "react-router-dom";
export default function SideBar() {
  return (
    <nav className="relative left-[0px] flex h-screen w-[300px] flex-col items-center rounded-r-2xl border-[4px] border-[yellow] bg-customBg text-white">
      <h1 className="my-4 text-4xl font-bold tracking-widest">BeautyFeel</h1>
      <ul className="flex h-[90%] w-[90%] flex-col items-center rounded bg-slate-100 text-black">
        <NavLink to="overview">Overview</NavLink>
        <NavLink to="analysis">Analysis</NavLink>
      </ul>
    </nav>
  );
}
