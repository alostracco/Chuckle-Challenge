import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HoverProps {
    children: ReactNode;
}

const Hover: React.FC<HoverProps> = ({ children }) => {
    return (
        <motion.div className="cardHover" whileHover={{ scale: 1.05, y: -5 }}>
            {children}
        </motion.div>
    );
};

export default Hover;
