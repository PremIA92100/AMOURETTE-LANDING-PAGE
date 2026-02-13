import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { content } from '../data/content';
import { ArrowDown } from 'lucide-react';
import { SplitText } from '../components/SplitText';
import Magnetic from '../components/Magnetic';

const Hero = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Parallax */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 z-0"
            >
                {/* Slightly darker overlay for text readability */}
                <div className="absolute inset-0 bg-black/30 z-10" />
                <img
                    src="/images/facade-terrasse-animee.webp"
                    alt="Amourette Passy Terrasse"
                    className="w-full h-full object-cover"
                />
            </motion.div>

            {/* Content */}
            <motion.div
                style={{ opacity }}
                className="relative z-10 text-center px-6 max-w-4xl mx-auto"
            >
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="block text-white/90 text-xs md:text-sm uppercase tracking-[0.5em] mb-8 font-bold drop-shadow-md"
                >
                    Bienvenue à Paris 16ème
                </motion.span>

                <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif text-white mb-10 leading-none tracking-tight drop-shadow-lg">
                    <span className="block">Amourette</span>
                    <span className="italic font-light text-amourette block mt-2">Passy</span>
                </h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-xl md:text-2xl text-stone-100 font-light max-w-2xl mx-auto mb-14 leading-relaxed drop-shadow-md"
                >
                    {content.hero.subtitle}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex justify-center"
                >
                    <Magnetic>
                        <button className="px-10 py-4 bg-amourette text-white text-sm font-bold uppercase tracking-widest hover:bg-stone-900 transition-all duration-300 backdrop-blur-sm">
                            {content.hero.cta}
                        </button>
                    </Magnetic>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-stone-900 flex flex-col items-center gap-2 cursor-pointer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            >
                <span className="text-[10px] uppercase tracking-widest text-amourette font-bold">Découvrir</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ArrowDown size={20} className="text-amourette" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
