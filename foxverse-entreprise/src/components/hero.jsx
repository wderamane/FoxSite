/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <header className="hero">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Bienvenue chez Foxverse Entreprise
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Des solutions modernes, professionnelles et élégantes pour votre entreprise.
      </motion.p>

      <motion.a
        href="#projects"
        className="cta-button"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        Découvrir nos projets
      </motion.a>
    </header>
  );
}
