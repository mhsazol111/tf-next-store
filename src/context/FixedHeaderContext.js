import { createContext, useEffect, useState } from 'react';

export const FixedHeaderContext = createContext();

export const FixedHeaderProvider = ({ children }) => {
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 38) {
      setIsHeaderFixed(true);
    } else {
      setIsHeaderFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  return (
    <FixedHeaderContext.Provider value={isHeaderFixed}>{children}</FixedHeaderContext.Provider>
  );
};
