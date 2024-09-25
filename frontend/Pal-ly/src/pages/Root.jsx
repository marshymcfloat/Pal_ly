import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useSelector } from "react-redux";
export default function Root() {
  const isLoggedIn = useSelector((state) => state.account.isLoggedIn);
  const state = useSelector((state) => state.account);
  console.log(state);
  return (
    <>
      <NavBar isLoggedIn={isLoggedIn} />
      <Outlet />
    </>
  );
}
