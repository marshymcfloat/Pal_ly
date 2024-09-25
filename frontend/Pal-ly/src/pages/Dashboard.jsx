import SideBar from "../components/SideBar";
import InfoContainer from "../components/InfoContainer";
export default function Dashboard() {
  return (
    <>
      <main className="flex flex-wrap items-start">
        <SideBar />
        <InfoContainer />
        <InfoContainer />
      </main>
    </>
  );
}
