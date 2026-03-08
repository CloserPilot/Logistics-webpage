
import styles from "./Tracking.module.css";

const Tracking = () => {
  return (
    <div className={styles.tracking}>
      <h1>Track Your Shipment</h1>
      <label htmlFor="number">Tracking number:</label>
      <input type="text" />
      <a href="tracking-detail.html" className={styles.trackingBtn}>
        Track
      </a>
    </div>
  );
};

export default Tracking;
