
import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <NavLink className={styles.navbarBrand} to="/">
          <img
            src="/assets/img/logo/logo.png"
            alt="logixs - transport & logistics"
            title="logixs - transport & logistics"
          />
        </NavLink>
        <button
          className={styles.navbarToggler}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className={styles.navbarTogglerIcon}></span>
        </button>
        <div className={styles.navbarCollapse} id="navbarSupportedContent">
          <ul className={styles.navbarNav}>
            <li className={styles.navItem}>
              <NavLink className={styles.navLink} exact to="/">
                Home
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink className={styles.navLink} to="/about">
                About Us
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink className={styles.navLink} to="/contact">
                Contact
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink className={styles.navLink} to="/services">
                Services
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
