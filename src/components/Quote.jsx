
import React from "react";
import styles from "./Quote.module.css";

const Quote = () => {
  return (
    <section className={styles.quoteArea}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.secTitle}>
              <h3 className={styles.subTitle}>GET A QUOTE</h3>
              <h2>Request a free quote</h2>
            </div>
            <form className={styles.quoteForm}>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  className={styles.formControl}
                  placeholder="Your Name"
                />
              </div>
              <div className={styles.formGroup}>
                <input
                  type="email"
                  className={styles.formControl}
                  placeholder="Email Address"
                />
              </div>
              <div className={styles.formGroup}>
                <select className={styles.formControl}>
                  <option>Select a service</option>
                  <option>Service 1</option>
                  <option>Service 2</option>
                  <option>Service 3</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <textarea
                  className={styles.formControl}
                  rows="3"
                  placeholder="Message"
                ></textarea>
              </div>
              <button type="submit" className={`${styles.btn} ${styles.primaryBtn}`}>
                Submit Request
              </button>
            </form>
          </div>
          <div className={styles.col}>
            <div className={styles.quoteImg}>
              <img src="/assets/img/about/about-5.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote;
