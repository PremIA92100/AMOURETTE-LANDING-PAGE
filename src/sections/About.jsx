import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { content } from '../data/content';
import { SplitText } from '../components/SplitText';

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="about" className="py-24 md:py-32 bg-[#FDFCF8] relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div
                    ref={ref}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
                >
                    {/* Left Column - Image */}
                    <div className="lg:col-span-5 lg:sticky lg:top-32">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-amourette text-xs font-bold uppercase tracking-[0.5em] mb-10 block"
                        >
                            Notre Histoire
                        </motion.span>
                        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-8">
                            <motion.img
                                initial={{ scale: 1.2 }}
                                animate={isInView ? { scale: 1 } : {}}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                src="/images/devanture-vegetalisee.webp"
                                alt="Devanture Amourette"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h2 className="text-5xl md:text-7xl font-serif text-stone-900 leading-[1.1]">
                            <span className="block overflow-hidden">
                                <motion.span
                                    initial={{ y: "100%" }}
                                    animate={isInView ? { y: 0 } : {}}
                                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                    className="block"
                                >
                                    Notre
                                </motion.span>
                            </span>
                            <span className="block overflow-hidden">
                                <motion.span
                                    initial={{ y: "100%" }}
                                    animate={isInView ? { y: 0 } : {}}
                                    transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                                    className="block italic text-amourette"
                                >
                                    Philosophie
                                </motion.span>
                            </span>
                        </h2>
                    </div>

                    {/* Right Column - Content */}
                    <div className="lg:col-span-7 space-y-16 mt-12 lg:mt-32">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-xl md:text-2xl text-stone-600 font-light leading-relaxed"
                        >
                            <p className="first-letter:text-7xl first-letter:font-serif first-letter:text-amourette first-letter:float-left first-letter:mr-6 first-letter:mt-[-5px]">
                                {content.about.text}
                            </p>
                        </motion.div>

                        {/* Feature Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                { title: "Terroir", subtitle: "Produits frais et sourcés", desc: "Nous privilégions les circuits courts et la qualité brute." },
                                { title: "Partage", subtitle: "Une cuisine de cœur", desc: "Des plats pensés pour être partagés et célébrés ensemble." },
                                { title: "Vins", subtitle: "Sélection Pointue", desc: "Une carte de vins natures et vivants pour accompagner chaque instant." }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.6, delay: 0.6 + (i * 0.1) }}
                                    className="border-t border-stone-200 pt-6"
                                >
                                    <h4 className="text-amourette font-serif text-2xl mb-2">{item.title}</h4>
                                    <span className="text-xs uppercase tracking-widest text-stone-400 block mb-3">{item.subtitle}</span>
                                    <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
