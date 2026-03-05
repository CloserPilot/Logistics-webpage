
import React, { useEffect } from "react";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import styles from "./Team.module.css";

const Team = () => {
  useEffect(() => {
    new Swiper(".team-swiper", {
      slidesPerView: 4,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 4,
        },
      },
    });
  }, []);

  const teamMembers = [
    { name: "Ripon Hossain", role: "Software Engineer", img: "Ripon.jpg" },
    { name: "John Doe", role: "CEO", img: "customer.jpg" },
    { name: "Jane Smith", role: "Founder", img: "testi-thumb-1.jpg" },
    { name: "Sam Wilson", role: "CEO of Sarkar Group", img: "testi-thumb-2.jpg" },
  ];

  return (
    <section className={styles.teamSection}>
      <div className={`${styles.container} swiper-container team-swiper`}>
        <div className="sec-title text-center">
          <span className="sub-title">MEET THE TEAM</span>
          <h2>Expert people of transport</h2>
        </div>
        <div className="swiper-wrapper">
          {teamMembers.map((member, index) => (
            <div className={`${styles.swiperSlide} swiper-slide`} key={index}>
              <div className={styles.teamBlock}>
                <div className={styles.innerBox}>
                  <div className={styles.imageBox}>
                    <figure className={styles.image}>
                      <img src={`/assets/img/customer/${member.img}`} alt="" />
                    </figure>
                    <ul className={styles.socialLinks}>
                      <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                      <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                      <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                      <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                    </ul>
                  </div>
                  <div className={styles.infoBox}>
                    <h4 className={styles.name}><a href="#">{member.name}</a></h4>
                    <span className={styles.designation}>{member.role}</span>
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

export default Team;
