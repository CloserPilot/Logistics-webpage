import React from 'react';
import styles from './Cta.module.css';

const Cta = () => {
  return (
    <section className={`cta-area py-5 ${styles.ctaArea}`}>
      <div className="container">
        <div className={styles.ctaWrapper}>
          <div className="row align-items-center">
            <div className="col-md-7">
              <div className={styles.ctaContent}>
                <h3>We are here to help you</h3>
                <h2>We have a professional team to help your business</h2>
              </div>
            </div>
            <div className="col-md-5 text-end">
              <a href="#" className={`${styles.btn} ${styles.primaryBtn}`}>Get Started</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;