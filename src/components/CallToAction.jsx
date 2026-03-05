
import React from "react";
import styles from "./CallToAction.module.css";

const CallToAction = () => {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col}>
            <h2>Ready to get started?</h2>
            <p>Contact us today for a free consultation</p>
          </div>
          <div className={styles.col}>
            <a href="#" className={`${styles.btn} ${styles.primaryBtn}`}>Contact Us</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
