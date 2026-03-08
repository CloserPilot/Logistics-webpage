
import styles from "./Tracking.module.css";
import { Link } from "react-router";

const Tracking = () => {
  return (
    <div className={styles.tracking}>
      <h1>Rastrea tu paquete</h1>
      <label htmlFor="number" className={styles.trackingLabel}>ID de rastreo:</label>
      <input type="text" className={styles.trackingInput} />
      <Link to="/status" className={styles.trackingBtn}>
        Track
      </Link>
    </div>
  );
};

export default Tracking;
