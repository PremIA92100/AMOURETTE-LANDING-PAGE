import { motion } from 'framer-motion';

const easeOutExpo = [0.16, 1, 0.3, 1];

const Loader = ({ onLoadingComplete }) => {
    return (
        <motion.div
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: easeOutExpo }}
            className="fixed inset-0 z-[999] bg-[#FDFCF8] flex items-center justify-center pointer-events-none"
        >
            <div className="relative overflow-hidden p-10 text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-6"
                >
                    <span className="text-amourette text-xs font-bold uppercase tracking-[0.4em]">Paris 16ème</span>
                </motion.div>

                <div className="overflow-hidden">
                    <motion.h1
                        initial={{ y: "110%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
                        className="text-stone-900 text-6xl md:text-9xl font-serif italic"
                    >
                        Amourette
                    </motion.h1>
                </div>
            </div>
        </motion.div>
    );
};

export default Loader;
