/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export default function Services() {
  const services = ["Sites Web", "Applications", "Branding", "Design UI/UX"];

  return (
    <section id="services" className="section services-section">
      <motion.h2
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        Services
      </motion.h2>

      <div className="services-grid">
        {services.map((srv, i) => (
          <motion.div
            key={i}
            className="service-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <h3>{srv}</h3>
            <p>
              Solutions modernes pour renforcer l’image et l’efficacité de votre entreprise.
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
