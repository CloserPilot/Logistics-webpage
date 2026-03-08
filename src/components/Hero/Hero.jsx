import styles from "./Hero.module.css";
import shipnowImage from "../../assets/shipnow.jpg";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <img src={shipnowImage} alt="Delivery Hero" className={styles.heroImg} />
      <div className={styles.heroText}>
        <h2>Nosotros cuidamos tu paquete</h2>
        <p>Rastrea tu paquete en la parte de abajo</p>
      </div>
    </section>
  );
};

export default Hero;
