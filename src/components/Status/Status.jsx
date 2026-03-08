import styles from "./Status.module.css";

function Status() {
  return (
    <div className={styles.trackingTimeline}>
      <h3>Tracking #: <span>AWB6856330</span></h3>
      <p><strong>From:</strong> Mumbai</p>
      <p><strong>To:</strong> Delhi</p>
      <br />

      <div className={`${styles.step} ${styles.completed}`}>
        <div className={styles.dot}><span>✔</span></div>
        <div className={styles.content}>
          <h4><i className="fas fa-box"></i> Package Received</h4>
          <p>Mumbai Warehouse</p>
          <small>April 20, 2025 – 11:00 AM</small>
        </div>
      </div>

      <div className={`${styles.step} ${styles.completed}`}>
        <div className={styles.dot}><span>✔</span></div>
        <div className={styles.content}>
          <h4>Shipped</h4>
          <p>Left Mumbai Facility</p>
          <small>April 21, 2025 – 02:45 PM</small>
        </div>
      </div>

      <div className={`${styles.step} ${styles.active}`}>
        <div className={styles.dot}></div>
        <div className={styles.content}>
          <h4>In Transit</h4>
          <p>Delhi Distribution Center</p>
          <small>April 22, 2025 – 08:15 AM</small>
        </div>
      </div>

      <div className={styles.step}>
        <div className={styles.dot}></div>
        <div className={styles.content}>
          <h4>Out for Delivery</h4>
          <p>Your Local Hub</p>
          <small>Expected: April 23, 2025</small>
        </div>
      </div>

      <div className={styles.step}>
        <div className={styles.dot}></div>
        <div className={styles.content}>
          <h4><i className="fa-solid fa-hand-holding-heart"></i> Expected Delivery Date</h4>
          <p>Connaught Place, Delhi</p>
          <small>April 23, 2025 – After 10:00 AM</small>
        </div>
      </div>
    </div>
  );
}

export default Status;