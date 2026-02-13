import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Magnetic from '../components/Magnetic';
import { SplitText } from '../components/SplitText';
import { content } from '../data/content';

const easeOutExpo = [0.16, 1, 0.3, 1];

const categories = [
    { key: 'partager', label: 'À Partager' },
    { key: 'entrees', label: 'Entrées' },
    { key: 'plats', label: 'Plats' },
    { key: 'desserts', label: 'Desserts' },
];

const Menu = () => {
    const [activeTab, setActiveTab] = useState('partager');

    return (
        <section id="menu" className="py-32 bg-[#FDFCF8] relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-stone-100/40 via-[#FDFCF8] to-[#FDFCF8]" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, ease: easeOutExpo }}
                        className="text-amourette text-xs md:text-sm font-bold uppercase tracking-[0.5em] mb-8 block"
                    >
                        Cuisine de Partage
                    </motion.span>

                    <h2 className="text-5xl md:text-8xl font-serif text-stone-900 mb-16">
                        <SplitText>
                            La Carte
                        </SplitText>
                    </h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: 0.2, ease: easeOutExpo }}
                        className="text-stone-600 text-xl md:text-2xl font-light leading-relaxed mb-16 max-w-3xl mx-auto"
                    >
                        Une cuisine sincère et vivante, qui évolue au gré des saisons et des arrivages.
                        Retrouvez nos classiques et nos créations du moment.
                    </motion.p>
                </div>

                {/* Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: 0.3, ease: easeOutExpo }}
                    className="max-w-4xl mx-auto mb-12"
                >
                    <div className="flex overflow-x-auto scrollbar-hide gap-2 md:gap-4 justify-center pb-2">
                        {categories.map((cat) => (
                            <button
                                key={cat.key}
                                onClick={() => setActiveTab(cat.key)}
                                className={`relative px-5 py-2.5 md:px-8 md:py-3 text-xs md:text-sm uppercase tracking-widest font-medium whitespace-nowrap rounded-full border transition-all duration-500 ${
                                    activeTab === cat.key
                                        ? 'bg-amourette text-white border-amourette'
                                        : 'bg-transparent text-stone-500 border-stone-300 hover:border-amourette hover:text-amourette'
                                }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Menu Items */}
                <div className="max-w-3xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.4, ease: easeOutExpo }}
                            className="divide-y divide-stone-200"
                        >
                            {content.menu[activeTab].map((item, index) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.05, ease: easeOutExpo }}
                                    className="flex justify-between items-baseline py-5 group"
                                >
                                    <span className="text-stone-800 font-serif text-lg md:text-xl group-hover:text-amourette transition-colors duration-300 pr-4">
                                        {item.name}
                                    </span>
                                    <span className="text-stone-500 text-sm md:text-base font-light whitespace-nowrap">
                                        {item.price}
                                    </span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* PDF Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: 0.3, ease: easeOutExpo }}
                    className="flex flex-col items-center mt-16"
                >
                    <Magnetic>
                        <a
                            href="#"
                            className="group inline-flex items-center gap-4 px-8 py-5 md:px-12 md:py-6 bg-stone-900 text-[#FDFCF8] rounded-full hover:bg-amourette transition-all duration-500 shadow-xl hover:shadow-amourette/20"
                        >
                            <span className="uppercase tracking-widest text-sm font-medium">Consulter le Menu PDF</span>
                            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                        </a>
                    </Magnetic>
                    <span className="mt-4 text-xs text-stone-400 uppercase tracking-widest font-medium">Format PDF</span>
                </motion.div>
            </div>
        </section>
    );
};

export default Menu;
