
import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.colLg6}>
            <div className={styles.aboutBanner}>
              <div className={styles.aboutBannerImg}>
                <img src="/assets/img/about/about-2.jpg" alt="About Us" />
              </div>
              <div className={styles.aboutExpertInfo}>
                <h2>30</h2>
                <p>Years of experience</p>
              </div>
            </div>
          </div>
          <div className={styles.colLg6}>
            <div className={styles.aboutContent}>
              <div className="sec-title">
                <span className="sub-title">WELCOME TO LOGIXS</span>
                <h2>Providing full range of transportation</h2>
              </div>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution
              </p>
              <blockquote className={styles.blockquote}>
                <p>
                  You can simplifying your freight & logistics needs with a
                  personal approach on logixs company.
                </p>
              </blockquote>
              <div className={styles.row}>
                <div className={styles.colMd7}>
                  <ul className={styles.list}>
                    <li>
                      <i className="fa-solid fa-check-circle"></i> Safety and reliable service
                    </li>
                    <li>
                      <i className="fa-solid fa-check-circle"></i> On-time delivery service
                    </li>
                  </ul>
                </div>
                <div className={styles.colMd5}>
                  <div className={styles.youtubeBtn}>
                    <img src="/assets/img/about/about-3.jpg" alt="" />
                    <div className={styles.wrapper}>
                      <div className={styles.videoMain}>
                        <div className={styles.promoVideo}>
                          <div className={`${styles.waves} ${styles.wave1}`}></div>
                          <div className={`${styles.waves} ${styles.wave2}`}></div>
                          <div className={`${styles.waves} ${styles.wave3}`}></div>
                        </div>
                        <a
                          href="https://www.youtube.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.video}
                        >
                          <i className="fa fa-play"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
