import image from "../../assets/images/farm.jpg"
import { motion } from "motion/react";

const items = [
  {
    id: 1,
    num: "15+",
    desc: "Years",
  },
  {
    id: 2,
    num: "20+",
    desc: "Products",
  },
  {
    id: 3,
    num: "100%",
    desc: "Fresh",
  },
];

const AboutMain = () => {
  return (
    <section className="container mx-auto">
      <article className="flex flex-col md:flex-row justify-around items-start  gap-10 px-10 my-10">
        <motion.div 
        initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        className="w-full h-full">
            <img className="rounded-2xl object-cover justify-self-center" src={image} alt="image" />
        </motion.div>
        <motion.div 
        initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        className="space-y-10">
          <div className="space-y-5 dark:text-gray-100">
            <h2 className="text-3xl font-bold">Farming With Passion</h2>
            <p className="text-sm">
              Green Farm started with a simple dream to provide fresh and
              healthy food to local families while taking care of the land.
            </p>
            <p className="text-sm">
              Today, Our continues to use responible farming methods and careful
              harvesting to maintain the quality of every product we grow.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-start sm:flex-row gap-2.5">
            {items.map((item) => (
              <div key={item.id} className="bg-primary/20 w-full sm:w-36 px-10 py-5 rounded-lg flex flex-col justify-center items-center">
                <h3 className="text-primary/80 dark:brightness-150 text-2xl font-bold">{item.num}</h3>
                <p className="text-sm font-semibold dark:text-gray-100">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </article>
    </section>
  );
};

export default AboutMain;
