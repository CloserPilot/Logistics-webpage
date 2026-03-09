import { useState, useLayoutEffect } from 'react';

function useStatusAnimation(steps) {
  // useState se encarga de la inicialización. El reseteo se fuerza con una key en el componente padre.
  const [animatedSteps, setAnimatedSteps] = useState(() => 
    steps.map(step => ({ ...step, visualStatus: 'pending', lineCompleted: false }))
  );

  useLayoutEffect(() => {
    const timeoutIds = [];
    const activeStepIndex = steps.findIndex(step => step.active);
    const lastCompletedStepIndex = steps.map(s => s.completed).lastIndexOf(true);
    const animateToIndex = activeStepIndex > -1 ? activeStepIndex : (lastCompletedStepIndex > -1 ? lastCompletedStepIndex : -1);

    if (animateToIndex === -1) return;

    const animate = (index) => {
      if (index > animateToIndex) return;

      if (index === activeStepIndex) {
        setAnimatedSteps(prev => prev.map((step, i) => i === index ? { ...step, visualStatus: 'active' } : step));
        return;
      }

      setAnimatedSteps(prev => prev.map((step, i) => (i === index ? { ...step, visualStatus: 'completed' } : step)));

      const t1 = setTimeout(() => {
        if (index < animateToIndex) {
            setAnimatedSteps(prev => prev.map((step, i) => (i === index ? { ...step, lineCompleted: true } : step)));
        }
        const t2 = setTimeout(() => animate(index + 1), 1500);
        timeoutIds.push(t2);
      }, 500);
      timeoutIds.push(t1);
    };

    // La línea problemática que causaba el re-render ha sido eliminada.

    const initialTimeout = setTimeout(() => animate(0), 100);
    timeoutIds.push(initialTimeout);

    return () => {
      timeoutIds.forEach(clearTimeout);
    };
  }, [steps]);

  return animatedSteps;
}

export default useStatusAnimation;
