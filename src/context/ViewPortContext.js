import { createContext, useEffect, useState } from 'react';

export const ViewportContext = createContext({});

export const ViewportProvider = ({ children }) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  let resizeID;

  const doneResizing = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  const handleWindowResize = () => {
    clearTimeout(resizeID);
    resizeID = setTimeout(doneResizing, 500);
  };

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);

    // Trigger on window resize function
    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  });

  return <ViewportContext.Provider value={{ width, height }}>{children}</ViewportContext.Provider>;
};
