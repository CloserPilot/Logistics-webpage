
import React from "react";
import styles from "./Faqs.module.css";

const Faqs = () => {
  return (
    <section className={styles.faqsSection}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={`${styles.secTitle} ${styles.textCenter}`}>
              <h3 className={styles.subTitle}>CHECK OUR WORK</h3>
              <h2>Explore recent projects</h2>
            </div>

            <div className={styles.accordion}>
              <div className={styles.accordionItem}>
                <h2 className={styles.accordionHeader}>
                  <button
                    className={`${styles.accordionButton} ${styles.collapsed}`}
                    type="button"
                  >
                    Accordion Item #1
                  </button>
                </h2>
                <div className={styles.accordionCollapse}>
                  <div className={styles.accordionBody}>
                    <strong>This is the first item's accordion body.</strong> It
                    is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions.
                  </div>
                </div>
              </div>
              <div className={styles.accordionItem}>
                <h2 className={styles.accordionHeader}>
                  <button
                    className={`${styles.accordionButton} ${styles.collapsed}`}
                    type="button"
                  >
                    Accordion Item #2
                  </button>
                </h2>
                <div className={styles.accordionCollapse}>
                  <div className={styles.accordionBody}>
                    <strong>This is the second item's accordion body.</strong> It
                    is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions.
                  </div>
                </div>
              </div>
              <div className={styles.accordionItem}>
                <h2 className={styles.accordionHeader}>
                  <button
                    className={`${styles.accordionButton} ${styles.collapsed}`}
                    type="button"
                  >
                    Accordion Item #3
                  </button>
                </h2>
                <div className={styles.accordionCollapse}>
                  <div className={styles.accordionBody}>
                    <strong>This is the third item's accordion body.</strong> It
                    is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.col}>
            <img src="/assets/img/faqs/faqs-1.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
