import { Instagram, Facebook, MapPin, Phone, Clock } from 'lucide-react';
import { content } from '../data/content';

const Footer = () => {
    return (
        <footer className="bg-stone-950 text-stone-400 py-16 border-t border-stone-900">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                    {/* Brand & Social */}
                    <div className="space-y-6">
                        <h3 className="text-3xl font-serif text-gold">Amourette</h3>
                        <p className="text-sm leading-relaxed max-w-xs">
                            Une cuisine de cœur, des vins d'auteurs et des moments à partager dans le 16ème arrondissement de Paris.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-gold transition-colors p-2 border border-stone-800 rounded-full hover:border-gold">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="hover:text-gold transition-colors p-2 border border-stone-800 rounded-full hover:border-gold">
                                <Facebook size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-serif text-white">Nous trouver</h4>
                        <div className="space-y-4 text-sm">
                            <div className="flex items-start space-x-3">
                                <MapPin className="text-gold mt-1 min-w-5" size={18} />
                                <span>{content.contact.address}</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Phone className="text-gold min-w-5" size={18} />
                                <a href={`tel:${content.contact.phone.replace(/\s/g, '')}`} className="hover:text-gold transition-colors">
                                    {content.contact.phone}
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Hours */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-serif text-white">Horaires</h4>
                        <div className="flex items-start space-x-3 text-sm">
                            <Clock className="text-gold mt-1 min-w-5" size={18} />
                            <div>
                                <p>{content.contact.hours}</p>
                                <p className="mt-2 text-stone-500 italic">Ouvert tous les jours</p>
                            </div>
                        </div>
                        <button className="mt-4 text-xs font-bold uppercase tracking-widest text-gold border-b border-gold pb-1 hover:opacity-80 transition-opacity">
                            Réserver votre table
                        </button>
                    </div>
                </div>

                <div className="border-t border-stone-900 mt-16 pt-8 text-center text-xs text-stone-600">
                    <p>&copy; {new Date().getFullYear()} Amourette Passy. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
