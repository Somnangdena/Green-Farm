import { RiMenu3Line, RiMoonFill, RiPlantLine, RiSunFill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import MobileNav from "./MobileNav";
import { useState } from "react";

const MenuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "About",
    link: "/about",
  },
  {
    id: 3,
    name: "Products",
    link: "/product",
  },
  {
    id: 4,
    name: "Contact",
    link: "/contact",
  },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      <header className="bg-white">
        <div className="p-4">
          <div className="container m-auto flex justify-between items-center">
            <Link to={"/"} className="flex justify-center items-center gap-2">
              <RiPlantLine className="w-12 h-12 bg-primary rounded-full text-white text-lg p-1.5" />
              <div>
                <h2 className="text-primary font-bold text-xl  leading-4">
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
                    className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
                  >
                    <NavLink
                      to={data.link}
                      className={({ isActive }) =>
                        `transition-all duration-300 ${
                          isActive
                            ? "text-primary font-bold"
                            : "hover:text-primary/60"
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
              <div onClick={() => setIsDark(!isDark)} className="w-10 h-10 border rounded-full flex justify-center items-center">
                {
                  isDark ?
                  <RiSunFill className="text-2xl"/>
                  :
                  <RiMoonFill className="text-2xl" />
                
                }
              </div>
              <div
                onClick={() => setIsOpen(!isOpen)}
                className="block md:hidden"
              >
                <RiMenu3Line className="text-2xl" />
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
