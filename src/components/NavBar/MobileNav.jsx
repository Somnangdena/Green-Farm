import { AnimatePresence, motion } from "motion/react";
import { NavLink } from "react-router-dom";

const MobileNav = ({ MenuBar, open, close }) => {
  const { id, name, link } = MenuBar;
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          onClick={close}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="fixed w-full h-screen top-20 left-0 z-20 md:hidden"
        >
          <div className="text-xl font-semibold bg-primary text-white py-10 mx-6 rounded-3xl">
            <ul className="flex flex-col justify-center items-center gap-5">
              {MenuBar.map((data) => (
                <li
                  key={data.id}
                  className="w-full flex flex-col items-center justify-center px-3"
                >
                  <NavLink
                    to={data.link}
                    className={({ isActive }) =>
                      `w-full text-center  py-5 rounded-xl ${
                        isActive
                          ? " bg-white/50 dark:bg-slate-700/50"
                          : "hover:bg-white/20 dark:hover:bg-slate-700/20"
                      }`
                    }
                  >
                    {data.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
