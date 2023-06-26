import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ReactNode } from "react";

interface FadeInUpProps {
  children: ReactNode;
  index: number;
}

const TabFadeInUp: React.FC<FadeInUpProps> = ({ children, index }) => {
  const variants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  const [ref, inView] = useInView({
    triggerOnce: false,
    rootMargin: "0px 0px",
  });

  const transitionIn = {
    duration: 0.333,
    delay: index * 0.15,
    ease: [0.1, 0.6, 0.8, 1],
  };

  const transitionOut = {
    duration: 0,
    delay: 0,
    ease: 0,
    display: 'hidden',
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={inView ? transitionIn : transitionOut}
      style={{ display: "inline-block" }}
    >
      {children}
    </motion.div>
  );
};

export default TabFadeInUp;
