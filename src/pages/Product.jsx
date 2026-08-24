import ProductsList from "../components/Homes/ProductsList";
import { motion } from "motion/react";

const Product = () => {
  return (
    <main>
      <section className="bg-primary/5">
        <div className="container mx-auto py-15">
          <div className="mb-10 text-center">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-2 font-semibold text-xl uppercase text-primary"
            >
              our products
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl font-bold dark:text-white sm:text-4xl capitalize px-5"
            >
              Fresh From our farm
            </motion.h2>
          </div>
          <ProductsList />
        </div>
      </section>
    </main>
  );
};

export default Product;
