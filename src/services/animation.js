export const ease = [0.6, 0.01, -0.05, 0.7];

export const dropdownWrapperAnimation = {
  initial: { opacity: 0, scaleY: 0 },
  animate: {
    opacity: 1,
    scaleY: 1,
    transition: {
      staggerChildren: 0.03,
      when: 'beforeChildren',
    },
  },
  exit: {
    opacity: 0,
    scaleY: 0,
  },
};

export const dropdownItemAnimation = {
  initial: { x: -5, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 0.2 } },
};

export const overlayAnimation = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { when: 'beforeChildren', staggerChildren: 0.15, duration: 0.3 },
  },
  exit: { opacity: 0, transition: { when: 'afterChildren', staggerChildren: 0.1, duration: 0.3 } },
};
