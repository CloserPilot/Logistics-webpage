
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerColumns}>
        <ul className={styles.column}>
          <li>
            <strong>Company</strong>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>
        <ul className={styles.column}>
          <li>
            <strong>Support</strong>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Help Center</a>
          </li>
          <li>
            <a href="#">Track Shipment</a>
          </li>
        </ul>
        <ul className={styles.column}>
          <li>
            <strong>Legal</strong>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms of Use</a>
          </li>
        </ul>
      </div>
      <div className={styles.footerBottom}>&copy; 2024 Shipnetic. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
