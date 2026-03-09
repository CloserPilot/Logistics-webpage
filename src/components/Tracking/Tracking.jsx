import styles from "./Tracking.module.css";

function Tracking(){
  return (
    <div className={styles.tracking}>
      <h1>Rastrea tu paquete</h1>

      <form className={styles.trackingForm}>
        <div className={styles.trackingBar}>
          <input
            id="tracking"
            type="text"
            placeholder="Ingresa tu ID de rastreo"
            className={styles.trackingInput}
          />

          <button type="submit" className={styles.trackingBtn}>
            Track
          </button>
        </div>
      </form>
    </div>
  );
};

export default Tracking;