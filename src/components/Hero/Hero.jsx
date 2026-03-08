import styles from "./Hero.module.css";
import shipnowImage from "../../assets/shipnow.jpg";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <img src={shipnowImage} alt="Delivery Hero" className={styles.heroImg} />
      <div className={styles.heroText}>
        <h2>Your package is in safe hands.</h2>
        <p>Track your shipment below.</p>
      </div>
    </section>
  );
};

export default Hero;
