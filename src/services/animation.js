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

export const historyRevealAnimation = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2 },
  },
};

// experimenting with float animation
// import useViewport from '../hooks/useViewport';
// const testingFloatAnimation = (status, parent) => {
//   // Parent is the product itemRef
//   const { width, height } = useViewport();
//   const position = status && parent.getBoundingClientRect();

//   const { width: initialWidth, height: initialHeight, top: initialY, left: initialX } = position;
//   const finalY = height / 2 - initialHeight / 2;
//   const finalX = width / 2 - initialWidth / 2;

//   const variants = {
//     initial: { opacity: 1, y: initialY, x: initialX, width: initialWidth },
//     animate: {
//       opacity: 1,
//       width: 400,
//       y: finalY,
//       x: finalX,
//       transition: {
//         when: 'beforeChildren',
//         staggerChildren: 0.05,
//         duration: 0.2,
//       },
//     },
//     exit: { opacity: 0 },
//   }
// }
