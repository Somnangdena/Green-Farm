import {
  RiCloseLargeFill,
  RiMenu3Line,
  RiMoonFill,
  RiPlantLine,
  RiSunFill,
} from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import MobileNav from "./MobileNav";
import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { MenuLinks } from "../../data/data";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <header className="bg-white dark:bg-slate-900 duration-200 sticky top-0 z-20">
        <div className="p-4">
          <div className="container m-auto flex justify-between items-center">
            <Link to={"/"} className="flex justify-center items-center gap-2">
              <RiPlantLine className="w-12 h-12 bg-primary rounded-full text-white text-lg p-1.5" />
              <div>
                <h2 className="text-primary dark:brightness-150 font-bold text-xl  leading-4">
                  Green Farm
                </h2>
                <p className="text-gray-400 text-xs">Fresh From Our Farm</p>
              </div>
            </Link>
            <nav className="hidden md:block">
              <ul className="flex items-center gap-4">
                {MenuLinks.map((data) => (
                  <li
                    key={data.id}
                    className="inline-block px-4 font-semibold text-gray-500 dark:text-white/70 hover:text-black dark:hover:text-white transition cursor-pointer"
                  >
                    <NavLink
                      to={data.link}
                      className={({ isActive }) =>
                        `transition-all duration-300 ${
                          isActive
                            ? "text-primary dark:brightness-150 font-bold"
                            : "dark:hover:text-white hover:text-black"
                        }`
                      }
                    >
                      {data.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex justify-center items-center gap-5">
              <div
                onClick={toggleTheme}
                className="w-10 h-10 border dark:border-white/70 cursor-pointer rounded-full flex justify-center items-center transition-all duration-300"
              >
                {theme === "dark" ? (
                  <RiSunFill className="text-2xl text-white/70" />
                ) : (
                  <RiMoonFill className="text-2xl" />
                )}
              </div>
              <div
                onClick={() => setIsOpen(!isOpen)}
                className="block md:hidden cursor-pointer"
              >
                {!isOpen ? (
                  <RiMenu3Line className="text-2xl dark:text-white/70" />
                ) : (
                  <RiCloseLargeFill className="text-2xl dark:text-white/70" />
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
      <MobileNav
        MenuBar={MenuLinks}
        open={isOpen}
        close={() => setIsOpen(!isOpen)}
      />
    </>
  );
};

export default NavBar;
