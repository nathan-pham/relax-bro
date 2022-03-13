import { motion } from "framer-motion";

const pageVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    in: {
        opacity: 1,
        y: 0,
    },
    out: {
        opacity: 0,
        y: 100,
    },
};

const PageTransition = ({ children }) => {
    return (
        <div className="overflow-hidden">
            <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default PageTransition;
