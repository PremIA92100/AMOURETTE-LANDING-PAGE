import { motion } from 'framer-motion';
import InfiniteGallery from '../components/InfiniteGallery';

const easeOutExpo = [0.16, 1, 0.3, 1];

const Gallery = () => {
    return (
        <section id="gallery" className="relative bg-paper text-stone-900 py-24 overflow-hidden">
            <div className="container mx-auto px-6 mb-12 md:mb-20 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, ease: easeOutExpo }}
                    className="text-amourette text-xs md:text-sm font-bold uppercase tracking-[0.4em] mb-4"
                >
                    Ambiance
                </motion.h2>
                <h3 className="text-4xl md:text-7xl font-serif text-stone-900">
                    <span className="block overflow-hidden">
                        <motion.span
                            initial={{ y: "110%" }}
                            whileInView={{ y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.8, delay: 0.1, ease: easeOutExpo }}
                            className="block"
                        >
                            L'Esprit
                        </motion.span>
                    </span>
                    <span className="block overflow-hidden">
                        <motion.span
                            initial={{ y: "110%" }}
                            whileInView={{ y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: easeOutExpo }}
                            className="block italic text-amourette"
                        >
                            du Lieu
                        </motion.span>
                    </span>
                </h3>
            </div>

            <InfiniteGallery />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: easeOutExpo }}
                className="flex justify-center mt-12 md:mt-20 px-6"
            >
                <div className="text-center max-w-2xl">
                    <h4 className="text-2xl md:text-3xl font-serif text-stone-900 mb-8">
                        Venez vivre l'expérience
                    </h4>
                    <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} className="px-10 py-4 bg-amourette text-white font-bold uppercase tracking-widest hover:bg-stone-900 transition-colors duration-500">
                        Réserver votre table
                    </button>
                </div>
            </motion.div>
        </section>
    );
};

export default Gallery;
