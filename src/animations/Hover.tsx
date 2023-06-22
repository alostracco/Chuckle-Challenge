import { motion } from "framer-motion";

const Hover: React.FC = ({ children }) => {


    return (
        <motion.div
            className='cardHover'
            whileHover={{ scale: 1.05, y: -5 }}
        >
            {children}
        </motion.div>
    );
};

export default Hover;