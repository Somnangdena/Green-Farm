import { motion } from "motion/react";

const Hero = () => {
  return (
    <section>
      <article className="w-full py-15 px-5 bg-primary flex flex-col justify-center items-center text-center gap-2">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl font-bold uppercase text-white/70"
        >
          About Us
        </motion.h2>
        <motion.h4
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl font-semibold text-white"
        >
          Our Farm Story
        </motion.h4>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-sm font-semibold text-white/70"
        >
          We group fresh food with passion, care and respect for nature
        </motion.p>
      </article>
    </section>
  );
};

export default Hero;
