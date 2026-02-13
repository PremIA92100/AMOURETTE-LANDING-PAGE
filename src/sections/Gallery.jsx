import { SplitText } from '../components/SplitText';
import InfiniteGallery from '../components/InfiniteGallery';

const Gallery = () => {
    return (
        <section id="gallery" className="relative bg-paper text-stone-900 py-24 overflow-hidden">
            <div className="container mx-auto px-6 mb-12 md:mb-20 text-center">
                <h2 className="text-amourette text-xs md:text-sm font-bold uppercase tracking-[0.4em] mb-4">
                    Ambiance
                </h2>
                <h3 className="text-4xl md:text-7xl font-serif text-stone-900">
                    <SplitText>
                        L'Esprit du Lieu
                    </SplitText>
                </h3>
            </div>

            <InfiniteGallery />

            <div className="flex justify-center mt-12 md:mt-20 px-6">
                <div className="text-center max-w-2xl">
                    <h4 className="text-2xl md:text-3xl font-serif text-stone-900 mb-8">
                        Venez vivre l'expérience
                    </h4>
                    <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} className="px-10 py-4 bg-amourette text-white font-bold uppercase tracking-widest hover:bg-stone-900 transition-colors">
                        Réserver votre table
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
