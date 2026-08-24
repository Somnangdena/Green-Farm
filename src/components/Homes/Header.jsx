import { motion } from "motion/react";

const Header = ({subtitle, title}) => {
  return (
    <>
      <motion.p 
        initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
      className="mb-2 font-semibold uppercase text-primary">{subtitle}</motion.p>
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
      className="text-3xl font-bold dark:text-white sm:text-4xl capitalize px-5">
        {title}
      </motion.h2>
    </>
  );
};

export default Header;
