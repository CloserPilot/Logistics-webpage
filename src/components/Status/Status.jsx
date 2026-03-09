import React from "react";
import styles from "./Status.module.css";

function Status() {
  const steps = [
    { title: "Package Received", location: "Mumbai Warehouse", date: "April 20, 2025 – 11:00 AM", completed: true },
    { title: "Shipped", location: "Left Mumbai Facility", date: "April 21, 2025 – 02:45 PM", completed: true },
    { title: "In Transit", location: "Delhi Distribution Center", date: "April 22, 2025 – 08:15 AM", active: true },
    { title: "Out for Delivery", location: "Your Local Hub", date: "Expected: April 23, 2025" },
    { title: "Expected Delivery Date", location: "Connaught Place, Delhi", date: "April 23, 2025 – After 10:00 AM" },
  ];

  return (
    <div className={styles.trackingTimeline}>
      <h3>Tracking #: <span>AWB6856330</span></h3>
      {steps.map((step, i) => (
        <div
          key={i}
          className={`${styles.step} ${step.completed ? styles.completed : ""} ${step.active ? styles.active : ""}`}
        >
          <div className={styles.dot}>{step.completed ? "✔" : ""}</div>
          <div className={styles.content}>
            <h4>{step.title}</h4>
            <p>{step.location}</p>
            <small>{step.date}</small>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Status;