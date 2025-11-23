/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section">
      <motion.h2
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        À propos
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Foxverse Entreprise développe des solutions modernes adaptées aux besoins
        professionnels : design, performance et innovation.
      </motion.p>
    </section>
  );
}
