import React, { useMemo } from 'react';
import styles from './Status.module.css';
import useMediaQuery from '../../hooks/useMediaQuery';
import useStatusAnimation from '../../hooks/useStatusAnimation';

// --- Componente Interno (Presentacional) ---
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
function Status({ steps }) {
  const isMobile = useMediaQuery('(max-width: 700px)');

  // Creamos una key robusta que cambia si los datos o la vista cambian.
  // useMemo asegura que la key solo se recalcula si `steps` o `isMobile` cambian.
  const componentKey = useMemo(() => {
    // Usamos JSON.stringify para crear un identificador único basado en el contenido de steps.
    const stepsIdentifier = JSON.stringify(steps.map(s => `${s.title}-${s.completed}-${s.active}`));
    return `${isMobile ? 'mobile' : 'desktop'}-${stepsIdentifier}`;
  }, [steps, isMobile]);

  // Al cambiar la key, React desmonta el `StatusTimeline` antiguo y monta uno
  // nuevo, reseteando su estado y su animación de forma limpia y segura.
  return <StatusTimeline steps={steps} key={componentKey} />;
}

export default Status;
