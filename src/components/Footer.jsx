
import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.footerWidget}>
              <div className={styles.footerLogo}>
                <a href="index.html">
                  <img src="/assets/img/logo/logo-2.png" alt="" />
                </a>
              </div>
              <div className={styles.footerText}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.footerWidget}>
              <h3 className={styles.widgetTitle}>Our Services</h3>
              <ul className={styles.footerLink}>
                <li>
                  <a href="#">Web Design</a>
                </li>
                <li>
                  <a href="#">Web Development</a>
                </li>
                <li>
                  <a href="#">Product Management</a>
                </li>
                <li>
                  <a href="#">Marketing</a>
                </li>
                <li>
                  <a href="#">Graphic Design</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.footerWidget}>
              <h3 className={styles.widgetTitle}>Quick Links</h3>
              <ul className={styles.footerLink}>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms of Service</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.footerWidget}>
              <h3 className={styles.widgetTitle}>Get in Touch</h3>
              <div className={styles.footerContact}>
                <p>+1 234 567 890</p>
                <p>info@example.com</p>
                <p>123 Street, New York, USA</p>
              </div>
              <div className={styles.footerSocial}>
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>
            &copy; 2023 All Rights Reserved by <a href="#">Company Name</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
