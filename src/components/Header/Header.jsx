
import { useState } from "react";
import styles from "./Header.module.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.logoTitle}>
        <i className="fa-solid fa-truck-fast"></i> SHIPNETIC
      </h1>

      <button className={styles.hamburger} id="hamburger-btn" onClick={toggleMenu}>
        <i className="fa-solid fa-bars"></i>
      </button>

      <ul className={`${styles.navigation} ${isMenuOpen ? styles.show : ""}`}>
        <li>
          <a href="#Home">Home</a>
        </li>
        <li>
          <a href="index.html">Tracking</a>
        </li>
        <li>
          <a href="#Contact">Contact Us</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
