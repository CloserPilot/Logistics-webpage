import React from 'react';
import styles from './Status.module.css';
import useMediaQuery from '../../hooks/useMediaQuery';
import useStatusAnimation from '../../hooks/useStatusAnimation';

// --- Componente Interno (Presentacional) ---
// Es un componente "tonto" que solo se encarga de renderizar la UI.
// No tiene lógica de estado propia.
function StatusTimeline({ steps }) {
  const animatedSteps = useStatusAnimation(steps);

  return (
    <div className={styles.trackingTimeline}>
      <h3>Tracking #: <span>AWB6856330</span></h3>
      {animatedSteps.map((step, i) => (
        <div
          key={i}
          className={`${styles.step} ${styles[step.visualStatus]} ${step.lineCompleted ? styles.lineCompleted : ''}`}>
          <div className={styles.dot}>
            {step.visualStatus === 'completed' && "✔"}
          </div>
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

// --- Componente Envoltorio (Contenedor) ---
// Se encarga de la lógica de re-montaje para evitar bugs visuales.
function Status({ steps }) {
  // 1. Usa el hook para saber si estamos en móvil.
  const isMobile = useMediaQuery('(max-width: 700px)');

  // 2. Usa esa información para generar una key, forzando el re-montaje
  // del componente hijo al cruzar el breakpoint.
  return <StatusTimeline steps={steps} key={isMobile ? 'mobile' : 'desktop'} />;
}

export default Status;
