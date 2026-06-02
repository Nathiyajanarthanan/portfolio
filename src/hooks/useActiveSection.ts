import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useActiveSection = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState(location.pathname);

  useEffect(() => {
    setActiveSection(location.pathname);
  }, [location]);

  return activeSection;
};
