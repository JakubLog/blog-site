export const snippetVariant = {
  initial: {
    opacity: 0,
    scale: 0.8
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      type: 'spring',
      stiffness: 200
    }
  },
  hover: {
    scale: 1.05
  }
};