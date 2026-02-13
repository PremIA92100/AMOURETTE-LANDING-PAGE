import { motion } from "framer-motion";

const images = [
    "/images/terrasse-deck-paris.webp",
    "/images/desserts-fruits-rouges.webp",
    "/images/terrasse-rue-soleil.webp",
    "/images/terrasse-fontaine-wallace.webp",
    "/images/terrasse-vue-aerienne.webp",
];

const InfiniteGallery = () => {

    // We double the images to ensure seamless loop
    const galleryImages = [...images];

    return (
        <div className="w-full py-12 md:py-24 overflow-hidden bg-paper">
            {/* Drag constraint container could be implemented here for interactivity but let's stick to auto-scroll first with pause on hover */}

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
                        <div key={`g1-${index}`} className="relative w-[300px] h-[350px] md:w-[600px] md:h-[700px] flex-shrink-0 rounded-xl md:rounded-2xl overflow-hidden grayscale-[0.5] hover:grayscale-0 transition-all duration-500">
                            <img src={src} alt="Amourette atmosphere" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" />
                        </div>
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
                        <div key={`g2-${index}`} className="relative w-[300px] h-[350px] md:w-[600px] md:h-[700px] flex-shrink-0 rounded-xl md:rounded-2xl overflow-hidden grayscale-[0.5] hover:grayscale-0 transition-all duration-500">
                            <img src={src} alt="Amourette atmosphere" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" />
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default InfiniteGallery;
