import { Link } from "react-router-dom";
import { motion } from "motion/react";

const Contact = () => {
  return (
    <section className="bg-primary/20">
      <article className="container mx-auto">
        <div className="py-15 px-5 flex flex-col justify-center items-center gap-5">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold dark:text-gray-200 text-center sm:text-4xl capitalize px-5"
          >
            Want to know more about our farm?
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-sm text-center dark:text-gray-300"
          >
            come visit our contact us to learn more about our fresh product
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center items-center mt-4">
            <Link
              to={"contact"}
              className="rounded-full bg-white dark:bg-black dark:text-white px-8 py-3 font-semibold text-primary cursor-pointer transition hover:bg-primary hover:text-white duration-300"
            >
              Contact Our Farm →
            </Link>
          </motion.div>
        </div>
      </article>
    </section>
  );
};

export default Contact;
