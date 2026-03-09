import { useState, useEffect } from 'react';

function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const listener = (e) => setMatches(e.matches);
    
    // Añadimos el listener moderno y seguro
    mediaQuery.addEventListener('change', listener);

    // Función de limpieza para remover el listener
    return () => mediaQuery.removeEventListener('change', listener);
  }, [query]); // El efecto se re-ejecuta si la query cambia

  return matches;
}

export default useMediaQuery;
