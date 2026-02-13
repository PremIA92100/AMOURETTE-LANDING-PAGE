import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Menu from './sections/Menu';
import Gallery from './sections/Gallery';
import Contact from './sections/Contact';
import CustomCursor from './components/CustomCursor';
import Loader from './components/Loader';
import ZenchefWidget from './components/ZenchefWidget';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5, // Increased from 1.2 for "heavier" feel
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical', // Vertical scrolling
      gestureOrientation: 'vertical', // Vertical gestures
      smoothWheel: true,
      wheelMultiplier: 0.8, // Reduced from 1 for more control/weight
      smoothTouch: false,
      touchMultiplier: 1.5, // Slightly reduced
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Simulate loading time (assets etc)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      lenis.destroy();
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="bg-paper bg-noise text-stone-900 min-h-screen font-sans">
      <AnimatePresence mode="wait">
        {isLoading && <Loader key="loader" onLoadingComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Menu />
            <Gallery />
            <Contact />
          </main>
          <Footer />
          <ZenchefWidget />
        </>
      )}
    </div>
  );
}

export default App;
