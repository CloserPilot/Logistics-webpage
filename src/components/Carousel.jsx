
import React from "react";
import styles from "./Carousel.module.css";

const Carousel = () => {
  return (
    <div id="carouselExampleControls" className={styles.carousel} data-bs-ride="carousel">
      <div className={styles.carouselInner}>
        <div className={`${styles.carouselItem} ${styles.active}`}>
          <div className={styles.carouselBg}></div>
          <div className={styles.carouselCaption}>
            <h2 className={`display-1 fw-bold ${styles.title}`}>
              We’re Global <br />
              Logistics Partners
            </h2>
            <p className={styles.description}>
              There are many of passages of lorem Ipsum, but the majori <br />
              have suffered alteration in some form.
            </p>
            <button className={`btn primary-btn ${styles.animatedButton}`}>
              Discover more
            </button>
          </div>
        </div>
      </div>
      <button
        className={styles.carouselControlPrev}
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className={styles.carouselControlPrevIcon} aria-hidden="true"></span>
        <span className={styles.visuallyHidden}>Previous</span>
      </button>
      <button
        className={styles.carouselControlNext}
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className={styles.carouselControlNextIcon} aria-hidden="true"></span>
        <span className={styles.visuallyHidden}>Next</span>
      </button>
    </div>
  );
};

export default Carousel;
