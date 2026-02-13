import { motion } from 'framer-motion';

export const SplitText = ({ children, className, delay = 0 }) => {
    const text = children;
    const words = text.split(" ");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.05, delayChildren: 0.04 * i + delay },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.span
            className={`inline-block overflow-hidden ${className}`}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            {words.map((word, i) => (
                <span key={i} className="inline-block whitespace-nowrap mr-[0.25em]">
                    {Array.from(word).map((letter, index) => (
                        <motion.span variants={child} key={index} className="inline-block">
                            {letter}
                        </motion.span>
                    ))}
                </span>
            ))}
        </motion.span>
    );
};
