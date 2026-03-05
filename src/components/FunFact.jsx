
import React from "react";
import styles from "./FunFact.module.css";

const FunFact = () => {
  return (
    <section className={styles.factSection}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.colLg4}>
            <div className={styles.funfactItem}>
              <div className={styles.funfactIcon}>
                <i className="fa-solid fa-globe"></i>
              </div>
              <div className={styles.funfactContent}>
                <h3>145</h3>
                <p>Branches Across The World</p>
              </div>
            </div>
          </div>
          <div className={styles.colLg4}>
            <div className={styles.funfactItem}>
              <div className={styles.funfactIcon}>
                <i className="fa-solid fa-truck-fast"></i>
              </div>
              <div className={styles.funfactContent}>
                <h3>26K</h3>
                <p>Parcel Delivered by Riders</p>
              </div>
            </div>
          </div>
          <div className={styles.colLg4}>
            <div className={styles.funfactItem}>
              <div className={styles.funfactIcon}>
                <i className="fa-solid fa-box"></i>
              </div>
              <div className={styles.funfactContent}>
                <h3>78K</h3>
                <p>Tons of Products Transport</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunFact;
