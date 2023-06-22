import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const FadeInUp = ({ children, index }) => {
  const variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
    ease: [0.1, 0.6, 0.8, 1],
  };

  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the animation only once
    rootMargin: '0px 0px', // Adjust this value based on your needs
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"} // Use the inView value to determine animation state
      variants={variants}
      transition={{ duration: 0.333, delay: index * 0.2 }}
      style={{ display: "inline-block" }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInUp;
