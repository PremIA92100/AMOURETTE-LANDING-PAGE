import { motion } from "framer-motion";

const easeOutExpo = [0.16, 1, 0.3, 1];

const images = [
    "/images/terrasse-deck-paris.webp",
    "/images/desserts-fruits-rouges.webp",
    "/images/terrasse-rue-soleil.webp",
    "/images/terrasse-fontaine-wallace.webp",
    "/images/terrasse-vue-aerienne.webp",
];

const GalleryImage = ({ src, index }) => (
    <motion.div
        initial={{ opacity: 0, scale: 1.08 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: index * 0.1, ease: easeOutExpo }}
        className="relative w-[300px] h-[350px] md:w-[600px] md:h-[700px] flex-shrink-0 rounded-xl md:rounded-2xl overflow-hidden grayscale-[0.5] hover:grayscale-0 transition-all duration-500"
    >
        <img src={src} alt="Amourette atmosphere" loading="lazy" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" />
    </motion.div>
);

const InfiniteGallery = () => {
    const galleryImages = [...images];

    return (
        <div className="w-full py-12 md:py-24 overflow-hidden bg-paper">
            <div className="flex relative w-full">
                <motion.div
                    className="flex flex-nowrap gap-4 md:gap-8 px-2 md:px-4"
                    animate={{ x: "-100%" }}
                    transition={{
                        duration: 40,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    {galleryImages.map((src, index) => (
                        <GalleryImage key={`g1-${index}`} src={src} index={index} />
                    ))}
                </motion.div>

                <motion.div
                    className="flex flex-nowrap gap-4 md:gap-8 px-2 md:px-4"
                    animate={{ x: "-100%" }}
                    transition={{
                        duration: 40,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    {galleryImages.map((src, index) => (
                        <GalleryImage key={`g2-${index}`} src={src} index={index} />
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default InfiniteGallery;
