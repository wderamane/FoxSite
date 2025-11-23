/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Services from "./components/services";
import Projects from "./components/projects";
import Contact from "./components/contact";

import "./App.css";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />

      <footer className="footer">
        © 2025 Foxverse Entreprise — Tous droits réservés.
      </footer>
    </div>
  );
}
