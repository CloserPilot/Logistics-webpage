import { useState, useEffect } from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router";
import { routes } from '../../routes/routes.jsx'

function Header(){
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // cerrar menú cuando pasa a desktop
  useEffect(() => {
    const media = window.matchMedia("(min-width: 615px)");

    const handleChange = (e) => {
      if (e.matches) setIsMenuOpen(false);
    };

    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  return (
    <header className={styles.header}>
      <div
        className={`${styles.menuOverlay} ${isMenuOpen ? styles.show : ""}`}
        onClick={() => setIsMenuOpen(false)}
      />

      <h1 className={styles.logoTitle}>
        <i className="fa-solid fa-truck-fast"></i> Logistics-PH
      </h1>

      <button
        className={`${styles.hamburger} ${isMenuOpen ? styles.open : ""}`}
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        <i className={`fa-solid ${isMenuOpen ? "fa-xmark" : "fa-bars"}`} />
      </button>

      <ul
        className={`${styles.navigation} ${isMenuOpen ? styles.show : ""}`}
        onClick={() => setIsMenuOpen(false)}
      >
        {routes
          .filter(route => route.showInNav)
          .map((route, index) => (
            <li key={route.path} style={{ "--i": index }}>
              <NavLink
                to={route.path}
                end={route.path === "/"}
                className={({ isActive }) =>
                  isActive ? styles.active : ""
                }
              >
                {route.label}
              </NavLink>
            </li>
          ))}
      </ul>
    </header>
  );
};

export default Header;