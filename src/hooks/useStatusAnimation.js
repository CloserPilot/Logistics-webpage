import { useState, useLayoutEffect } from 'react';

function useStatusAnimation(steps) {
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

    // Se reinicia el estado visual al principio para una animación limpia
    setAnimatedSteps(steps.map(step => ({ ...step, visualStatus: 'pending', lineCompleted: false })));

    const initialTimeout = setTimeout(() => animate(0), 100);
    timeoutIds.push(initialTimeout);

    return () => {
      timeoutIds.forEach(clearTimeout);
    };
  }, [steps]); // Dependencia clave: la animación se reinicia si los pasos cambian.

  return animatedSteps;
}

export default useStatusAnimation;
