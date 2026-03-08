import { useState } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.logoTitle}>
        <i className="fa-solid fa-truck-fast"></i> Logistics-PH
      </h1>

      <button className={`${styles.hamburger} ${isMenuOpen ? styles.open : ""}`} id="hamburger-btn" onClick={toggleMenu}>
        <i className={`fa-solid ${isMenuOpen ? "fa-xmark" : "fa-bars"}`}></i>
      </button>

      <ul className={`${styles.navigation} ${isMenuOpen ? styles.show : ""}`}>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/tracking">Rastreo</Link>
        </li>
        <li>
          <Link to="/contacto">Contacto</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
