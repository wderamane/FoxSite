/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <motion.h2
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Une question, un projet ? Contactez-nous : <b>contact@foxverse.com</b>
      </motion.p>
    </section>
  );
}
