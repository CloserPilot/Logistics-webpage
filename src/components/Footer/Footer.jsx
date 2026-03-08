
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerColumns}>
        <ul className={styles.column}>
          <li className={styles.columnItem}>
            <strong>Company</strong>
          </li>
          <li className={styles.columnItem}>
            <a href="#" className={styles.columnLink}>About Us</a>
          </li>
          <li className={styles.columnItem}>
            <a href="#" className={styles.columnLink}>Careers</a>
          </li>
          <li className={styles.columnItem}>
            <a href="#" className={styles.columnLink}>Blog</a>
          </li>
        </ul>
        <ul className={styles.column}>
          <li className={styles.columnItem}>
            <strong>Support</strong>
          </li>
          <li className={styles.columnItem}>
            <a href="#" className={styles.columnLink}>Contact</a>
          </li>
          <li className={styles.columnItem}>
            <a href="#" className={styles.columnLink}>Help Center</a>
          </li>
          <li className={styles.columnItem}>
            <a href="#" className={styles.columnLink}>Track Shipment</a>
          </li>
        </ul>
        <ul className={styles.column}>
          <li className={styles.columnItem}>
            <strong>Legal</strong>
          </li>
          <li className={styles.columnItem}>
            <a href="#" className={styles.columnLink}>Privacy Policy</a>
          </li>
          <li className={styles.columnItem}>
            <a href="#" className={styles.columnLink}>Terms of Use</a>
          </li>
        </ul>
      </div>
      <div className={styles.footerBottom}>&copy; 2024 Shipnetic. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
