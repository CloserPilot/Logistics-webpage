
import React from "react";
import styles from "./Testimonials.module.css";

const Testimonials = () => {
  return (
    <section className={styles.testimonialSection}>
      <div className={styles.container}>
        <div className="sec-title text-center">
          <span className="sub-title">OUR TESTIMONIAL</span>
          <h2>What Our Client Say</h2>
        </div>
        <div className={styles.row}>
          {[1, 2, 3].map((item) => (
            <div className={styles.colLg4} key={item}>
              <div className={`${styles.testimonialItem} wow fadeInUp`} data-wow-duration="1s">
                <div className={styles.testimonialContent}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
                <div className={styles.testimonialAuthor}>
                  <img src={`/assets/img/testimonial/author-${item}.jpg`} alt="" />
                  <div className={styles.authorInfo}>
                    <h5>John Doe</h5>
                    <span>CEO, Company</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
