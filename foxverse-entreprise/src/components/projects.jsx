/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <motion.h2
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projets
      </motion.h2>

      <div className="projects-grid">
        {[1, 2, 3].map((index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <h3>Projet {index}</h3>
            <p>Un projet moderne conçu pour maximiser impact et performance.</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
