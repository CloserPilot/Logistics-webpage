
import React from "react";
import styles from "./Client.module.css";

const Client = () => {
  return (
    <section className={styles.clientSection}>
      <div className={styles.container}>
        <div className={styles.swiper}>
          <div className={styles.swiperWrapper}>
            <div className={styles.swiperSlide}>
              <div className={styles.clientLogo}>
                <img src="/assets/img/brand/1.png" alt="" />
              </div>
            </div>
            <div className={styles.swiperSlide}>
              <div className={styles.clientLogo}>
                <img src="/assets/img/brand/2.png" alt="" />
              </div>
            </div>
            <div className={styles.swiperSlide}>
              <div className={styles.clientLogo}>
                <img src="/assets/img/brand/3.png" alt="" />
              </div>
            </div>
            <div className={styles.swiperSlide}>
              <div className={styles.clientLogo}>
                <img src="/assets/img/brand/4.png" alt="" />
              </div>
            </div>
            <div className={styles.swiperSlide}>
              <div className={styles.clientLogo}>
                <img src="/assets/img/brand/5.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Client;
