
import React, { useEffect } from "react";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import styles from "./Testimonial.module.css";

const Testimonial = () => {
  useEffect(() => {
    new Swiper(".testimonial-swiper", {
      slidesPerView: 1,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
    });
  }, []);

  return (
    <section className={styles.testimonialSection}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={`${styles.colLg6} ${styles.contentColumn}`}>
            <div className="sec-title">
              <span className="sub-title">CLIENT TESTIMONIALS</span>
              <h2>What our client say about us</h2>
            </div>
            <div className="swiper-container testimonial-swiper">
              <div className="swiper-wrapper">
                <div className={`${styles.swiperSlide} swiper-slide`}>
                  <div className={styles.testimonialBlock}>
                    <div className={styles.innerBox}>
                      <div className={styles.icon}><i className="fa-solid fa-quote-left"></i></div>
                      <div className={styles.text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </div>
                      <div className={styles.infoBox}>
                        <div className={styles.thumb}><img src="/assets/img/customer/testi-thumb.png" alt="" /></div>
                        <h4 className={styles.name}>Jhon Smith</h4>
                        <span className={styles.designation}>CEO, logixs</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`${styles.swiperSlide} swiper-slide`}>
                  <div className={styles.testimonialBlock}>
                    <div className={styles.innerBox}>
                    <div className={styles.icon}><i className="fa-solid fa-quote-left"></i></div>
                      <div className={styles.text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </div>
                      <div className={styles.infoBox}>
                        <div className={styles.thumb}><img src="/assets/img/customer/testi-thumb.png" alt="" /></div>
                        <h4 className={styles.name}>Jhon Smith</h4>
                        <span className={styles.designation}>CEO, logixs</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.colLg6} ${styles.imageColumn}`}>
            <div className={styles.imageBox}>
              <img src="/assets/img/about/about-4.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
