import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const FadeInUp = ({ children, index }) => {
  const variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
    ease: [0.1, 0.6, 0.8, 1],
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '0px 0px',
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.333, delay: index * 0.2 }}
      style={{ display: "inline-block" }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInUp;
