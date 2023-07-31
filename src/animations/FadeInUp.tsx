import { motion, Transition, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ReactNode } from "react";

interface FadeInUpProps {
  children: ReactNode;
  index: number;
}

const FadeInUp: React.FC<FadeInUpProps> = ({ children, index }) => {
  const variants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "0px 0px",
  });

  const transition: Transition = {
    duration: 0.333,
    delay: index * 0.15,
    ease: [0.1, 0.6, 0.8, 1],
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={transition}
      style={{ display: "inline-block" }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInUp;