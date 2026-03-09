import styles from "./Footer.module.css";
import { Link } from "react-router";

function Footer(){
  return (
    <footer className={styles.footer}>
      <div className={styles.footerColumns}>
        <ul className={styles.column}>
          <li className={styles.columnItem}><strong>Información</strong></li>
          <li className={styles.columnItem}>
            <i className="fa-solid fa-location-dot"></i>
            <Link to="/" className={styles.columnLink}>Destinos</Link>
          </li>
          <li className={styles.columnItem}>
            <i className="fa-solid fa-truck"></i>
            <Link to="/" className={styles.columnLink}>Entregas</Link>
          </li>
          <li className={styles.columnItem}>
            <i className="fa-solid fa-box"></i>
            <Link to="/" className={styles.columnLink}>Mercancías</Link>
          </li>
        </ul>

        <ul className={styles.column}>
          <li className={styles.columnItem}><strong>Contacto</strong></li>
          <li className={styles.columnItem}>
            <i className="fa-solid fa-phone"></i>
            <a href="tel:271XXXXXXX" className={styles.columnLink}>271-XXX-XXX</a>
          </li>
          <li className={styles.columnItem}>
            <i className="fa-solid fa-envelope"></i>
            <a href="mailto:info@logistics.com" className={styles.columnLink}>info@logistics.com</a>
          </li>
          <li className={styles.columnItem}>
            <i className="fa-solid fa-clock"></i>
            <span className={`${styles.noHover}`}>Lun-Vie 9:00 - 18:00</span>
          </li>
        </ul>
      </div>

      <div className={styles.footerBottom}>
        &copy; 2026 Logistics-Ph, created by Mario Pavon
      </div>
    </footer>
  );
};

export default Footer;