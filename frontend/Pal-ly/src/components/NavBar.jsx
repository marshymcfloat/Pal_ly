import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
export default function NavBar({ isLoggedIn }) {
  const accountName = useSelector((state) => state.account.username);
  return (
    <nav className="absolute flex h-14 w-full justify-between">
      <h1 className="ml-2 flex cursor-pointer items-center text-4xl font-bold text-customAccentGreen">
        <Link to="/">Pal-ly</Link>
      </h1>
      <ul className="flex w-[20%] items-center justify-around text-[125%] font-semibold text-[#e4e4e4]">
        {isLoggedIn ? (
          <li>
            <NavLink to="/"> {accountName}</NavLink>
          </li>
        ) : (
          <>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-customAccentGreen"
                    : "transition-all duration-150 hover:text-customAccentGray"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/rate"
                className={({ isActive }) =>
                  isActive
                    ? "text-customAccentGreen"
                    : "transition-all duration-150 hover:text-customAccentGray"
                }
              >
                Rate
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? "text-customAccentGreen"
                    : "transition-all duration-150 hover:text-customAccentGray"
                }
              >
                Login
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
