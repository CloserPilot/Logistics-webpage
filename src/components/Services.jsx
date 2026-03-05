
import React from "react";
import styles from "./Services.module.css";

const Services = () => {
  return (
    <section className={styles.serviceSection}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={`${styles.card} wow fadeInUp`} data-wow-duration="1s" data-wow-delay="0s">
              <div className={styles.cardIcon}>
                <i className="fa-solid fa-plane"></i>
              </div>
              <div className={styles.cardBody}>
                <h5 className={styles.cardTitle}>Air Freight</h5>
                <p className={styles.cardText}>
                  Lorem ipsum dolor sit amet, consectetur notted adipisicing
                  elit sed do eiusmod.
                </p>
              </div>
              <div className={styles.imgBox}>
                <img
                  src="/assets/img/service/top-service-1.jpg"
                  className={styles.cardImgBottom}
                  alt="Air Freight"
                />
              </div>
            </div>
          </div>
          <div className={styles.col}>
            <div className={`${styles.card} wow fadeInUp`} data-wow-duration="1s" data-wow-delay="0.3s">
              <div className={styles.cardIcon}>
                <i className="fa-solid fa-ship"></i>
              </div>
              <div className={styles.cardBody}>
                <h5 className={styles.cardTitle}>Ocean Freight</h5>
                <p className={styles.cardText}>
                  Lorem ipsum dolor sit amet, consectetur notted adipisicing
                  elit sed do eiusmod.
                </p>
              </div>
              <div className={styles.imgBox}>
                <img
                  src="/assets/img/service/top-service-2.jpg"
                  className={styles.cardImgBottom}
                  alt="Ocean Freight"
                />
              </div>
            </div>
          </div>
          <div className={styles.col}>
            <div className={`${styles.card} wow fadeInUp`} data-wow-duration="1s" data-wow-delay="0.6s">
              <div className={styles.cardIcon}>
                <i className="fa-solid fa-truck"></i>
              </div>
              <div className={styles.cardBody}>
                <h5 className={styles.cardTitle}>Road Transport</h5>
                <p className={styles.cardText}>
                  Lorem ipsum dolor sit amet, consectetur notted adipisicing
                  elit sed do eiusmod.
                </p>
              </div>
              <div className={styles.imgBox}>
                <img
                  src="/assets/img/service/top-service-3.jpg"
                  className={styles.cardImgBottom}
                  alt="Road Transport"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.servicesText} wow fadeInUp`} data-wow-duration="1s" data-wow-delay="0.9s">
          <p>
            You can also find our
            <strong> Warehousing Solution </strong> to
            logistics around the world
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
