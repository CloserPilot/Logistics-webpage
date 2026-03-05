
import React from "react";
import styles from "./News.module.css";

const News = () => {
  const newsData = [
    { 
      image: "/assets/img/news/news-1.jpg", 
      date: "20", 
      month: "APR",
      title: "The best ways to keep your shipments safe", 
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt..."
    },
    { 
      image: "/assets/img/news/news-2.jpg", 
      date: "25", 
      month: "APR",
      title: "How to handle your cargo with care", 
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt..."
    },
    { 
      image: "/assets/img/news/news-3.jpg", 
      date: "30", 
      month: "APR",
      title: "Solutions for all your supply chain needs", 
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt..."
    },
  ];

  return (
    <section className={styles.newsSection}>
      <div className={styles.container}>
        <div className={styles.secTitle}>
          <span className={styles.subTitle}>LATEST NEWS</span>
          <h2>Read our latest news</h2>
        </div>
        <div className={styles.row}>
          {newsData.map((news, index) => (
            <div className={styles.colLg4} key={index}>
              <div className={styles.newsBlock}>
                <div className={styles.innerBox}>
                  <div className={styles.imageBox}>
                    <figure className={styles.image}>
                      <a href="#"><img src={news.image} alt="" /></a>
                    </figure>
                    <span className={styles.postDate}>{news.date}<span>{news.month}</span></span>
                  </div>
                  <div className={styles.lowerContent}>
                    <h4><a href="#">{news.title}</a></h4>
                    <div className={styles.text}>{news.text}</div>
                    <a href="#" className={styles.readMore}>Read More <i className="fa-solid fa-arrow-right"></i></a>
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

export default News;
