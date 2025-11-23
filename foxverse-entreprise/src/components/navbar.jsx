import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Foxverse Entreprise</div>
      <ul>
        <li><a href="#about">À propos</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#projects">Projets</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
