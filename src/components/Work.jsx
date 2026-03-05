
import React from "react";
import styles from "./Work.module.css";

const Work = () => {
  return (
    <section className={styles.workArea}>
      <div className={styles.container}>
        <div className="sec-title text-center">
          <span className="sub-title">HOW WE WORK</span>
          <h2>We aim to contribute well to your company</h2>
        </div>
        <div className={styles.row}>
          <div className={styles.colLg3}>
            <div className={`${styles.workBlock} wow fadeInUp`} data-wow-delay="0s">
              <div className={styles.innerBox}>
                <div className={styles.workIcon}>
                  <i className="fa-solid fa-box"></i>
                </div>
                <div className={styles.workTitle}>
                  <h4>Replenishment and Picking</h4>
                </div>
                <div className={styles.workDescription}>
                  <p>Dolores molestias excepturi occaecati cupiditated non provident quas.</p>
                </div>
                <div className={styles.count}>01</div>
              </div>
            </div>
          </div>
          <div className={styles.colLg3}>
            <div className={`${styles.workBlock} wow fadeInUp`} data-wow-delay="300ms">
              <div className={styles.innerBox}>
                <div className={styles.workIcon}>
                  <i className="fa-solid fa-warehouse"></i>
                </div>
                <div className={styles.workTitle}>
                  <h4>Warehousing Operation</h4>
                </div>
                <div className={styles.workDescription}>
                  <p>Dolores molestias excepturi occaecati cupiditated non provident quas.</p>
                </div>
                <div className={styles.count}>02</div>
              </div>
            </div>
          </div>
          <div className={styles.colLg3}>
            <div className={`${styles.workBlock} wow fadeInUp`} data-wow-delay="600ms">
              <div className={styles.innerBox}>
                <div className={styles.workIcon}>
                  <i className="fa-solid fa-dolly"></i>
                </div>
                <div className={styles.workTitle}>
                  <h4>Packaging and Distribution</h4>
                </div>
                <div className={styles.workDescription}>
                  <p>Dolores molestias excepturi occaecati cupiditated non provident quas.</p>
                </div>
                <div className={styles.count}>03</div>
              </div>
            </div>
          </div>
          <div className={styles.colLg3}>
            <div className={`${styles.workBlock} wow fadeInUp`} data-wow-delay="900ms">
              <div className={styles.innerBox}>
                <div className={styles.workIcon}>
                  <i className="fa-solid fa-truck-fast"></i>
                </div>
                <div className={styles.workTitle}>
                  <h4>Transportation Process</h4>
                </div>
                <div className={styles.workDescription}>
                  <p>Dolores molestias excepturi occaecati cupiditated non provident quas.</p>
                </div>
                <div className={styles.count}>04</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
