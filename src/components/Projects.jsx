
import React, { useEffect } from "react";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import styles from "./Projects.module.css";

const Projects = () => {
  useEffect(() => {
    new Swiper(".swiper-container", {
      slidesPerView: 4,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
    });
  }, []);

  return (
    <section className={styles.projectSection}>
      <div className="sec-title text-center">
        <span className="sub-title">CHECK OUR WORK</span>
        <h2>Explore recent projects</h2>
      </div>
      <div className={`${styles.containerFluid} swiper-container`}>
        <div className="swiper-wrapper">
          {[1, 2, 3, 4, 1, 2, 3, 4].map((item, index) => (
            <div className={`${styles.swiperSlide} swiper-slide`} key={index}>
              <div className={styles.projectBlock}>
                <div className={styles.innerBox}>
                  <div className={styles.imageBox}>
                    <figure className={styles.image}>
                      <a href={`/assets/img/project/project-${item}.jpg`} className={styles.lightboxImage}>
                        <img src={`/assets/img/project/project-${item}.jpg`} alt="" />
                      </a>
                    </figure>
                  </div>
                  <div className={styles.contentBox}>
                    <div className={styles.inner}>
                      <span className={styles.title}>Project {item}</span>
                      <h4>
                        <a href="#">Shipment Monitoring</a>
                      </h4>
                      <a href="#" className={styles.icon}>
                        <i className="fa-solid fa-arrow-right"></i>
                      </a>
                    </div>
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

export default Projects;
