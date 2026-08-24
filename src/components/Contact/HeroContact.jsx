import { motion } from "motion/react"

const HeroContact = () => {
  return (
     <section>
      <article className="w-full py-15 px-5 bg-primary flex flex-col justify-center items-center text-center gap-4">
        <motion.h2 
        initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
        className="text-5xl font-bold uppercase text-white/70">Contact Us</motion.h2>
        <motion.p 
        initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
        className="text-sm font-semibold text-white/70">Have a question about our farm or products? we would love to hear from you. </motion.p>
      </article>
    </section>
  )
}

export default HeroContact