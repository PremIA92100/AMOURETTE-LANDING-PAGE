import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Magnetic from './Magnetic';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Le Restaurant', href: '#about' },
        { name: 'La Carte', href: '#menu' },
        { name: 'Philosophie', href: '#philosophy' },
        { name: 'Infos & Contact', href: '#contact' },
    ];

    return (
        <>
            <motion.nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-paper/90 backdrop-blur-md py-4 shadow-sm border-b border-stone-100/50' : 'bg-transparent py-8'
                    }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <a href="#" className={`text-2xl font-serif font-bold tracking-tighter transition-colors ${isScrolled ? 'text-amourette' : 'text-white md:text-stone-900'}`}>
                        Amourette
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`transition-colors text-sm uppercase tracking-widest font-medium ${isScrolled ? 'text-stone-600 hover:text-amourette' : 'text-stone-300 hover:text-white'}`}
                            >
                                {link.name}
                            </a>
                        ))}
                        <Magnetic>
                            <button className={`px-6 py-2 border uppercase text-xs tracking-widest font-bold transition-all duration-300 ${isScrolled
                                ? 'border-amourette text-amourette hover:bg-amourette hover:text-white'
                                : 'border-white text-white hover:bg-white hover:text-stone-900'
                                }`}>
                                Réserver
                            </button>
                        </Magnetic>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className={`transition-colors ${isScrolled ? 'text-stone-900' : 'text-white'}`}
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-paper pt-24 px-6 md:hidden flex flex-col items-center space-y-8"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-2xl font-serif text-stone-600 hover:text-amourette transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                        <button className="px-8 py-3 bg-amourette text-white font-bold uppercase tracking-widest mt-8">
                            Réserver une table
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
