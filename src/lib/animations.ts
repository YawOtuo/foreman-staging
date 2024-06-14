import {
  AnimationProps,
  TargetAndTransition,
  VariantLabels,
} from "framer-motion";

type Animate = {
  exit: any;
  enter: any;
};

export const RotateScale = {
  open: {
    scale: [1, 2, 2, 1, 0],
    rotate: [0, 0, 270, 270, 0],
    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
  },
  closed: {
    scale: [0, 2, 2, 1, 1],
    rotate: [0, 0, 270, 270, 0],
    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
  },
};
export const HideShow = {
  open: {
    opacity: "flex",
  },
  closed: {
    display: "none",
  },
};

export const ExpandCircle = {
  open: (
    d = window.screen.height >= window.screen.width
      ? window.screen.height
      : window.screen.width,
  ) => ({
    clipPath: `circle(${d * 2 + 300}px at right top)`,
    transition: {
      type: "spring",
      stiffness: 13,
      restDelta: 2,
      duration: 0.2,
    },
  }),
  closed: {
    clipPath: "circle(0px at right top)",
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 40,
      duration: 0.2,
    },
  },
};

export const ExpandCircleFromBottom = {
  open: (
    d = window.screen.height >= window.screen.width
      ? window.screen.height
      : window.screen.width,
  ) => ({
    clipPath: `circle(${d * 2 + 300}px at right bottom)`,
    transition: {
      type: "spring",
      damping: 30,
      stiffness: 5,
      restDelta: 2,
      duration: "10",
    },
  }),
  closed: {
    clipPath: "circle(0px at right bottom)",
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 40,
      duration: "0.5",
    },
  },
};
export const FadeInOut = {
  open: {
    opacity: 1,
    transition: {
      // staggerChildren: 0.07,
      // delayChildren: 0.2,
      ease: "linear",
      duration: "0.3",
    },
    transitionEnd: {
      display: "flex",
    },
  },
  closed: {
    opacity: 0,
    transition: {
      // staggerChildren: 0.05,
      // staggerDirection: -1,
      ease: "linear",
      duration: "0.3",
    },
    transitionEnd: {
      display: "none",
    },
  },
};

export const SlideInFromLeft = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      ease: "linear",
      duration: "0.8",
    },
    transitionEnd: {
      display: "flex",
    },
  },
  closed: {
    x: "-100%", // Move the element 100% to the left
    opacity: 0,
    transition: {
      ease: "linear",
      duration: "0.8",
    },
    transitionEnd: {
      display: "none",
    },
  },
};

export const contentAccordionVariants = (height = "12rem") => {
  return {
    collapsed: { height: "auto" },
    expanded: { height },
  };
};

export const fadeUp = {
  initial: { y: 100, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true },
  transition: {
    duration: 1,
    ease: "easeInOut",
    stiffness: 100,
    velocity: 0.5,
  },
};

export const fadeInLeft = {
  initial: { x: 100, opacity: 0 },
  whileInView: { x: 0, opacity: 1 },
  viewport: { once: true },
  transition: {
    duration: 1,
    ease: "easeInOut",
    stiffness: 100,
    velocity: 0.5,
  },
};

export const fadeInRight = {
  initial: { x: -100, opacity: 0 },
  whileInView: { x: 0, opacity: 1 },
  viewport: { once: true },
  transition: {
    duration: 1,
    ease: "easeInOut",
    stiffness: 100,
    velocity: 0.5,
  },
};

export const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: {
    // duration: 1,
    ease: "easeInOut",
    stiffness: 100,
    velocity: 0.5,
  },
};
