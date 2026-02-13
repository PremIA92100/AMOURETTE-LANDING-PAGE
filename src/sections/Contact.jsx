import { content } from '../data/content';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="py-24 pb-40 md:pb-24 bg-paper relative">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <div className="space-y-12">
                        <div>
                            <span className="text-amourette text-sm font-bold uppercase tracking-[0.2em] mb-4 block">
                                Infos Pratiques
                            </span>
                            <h2 className="text-4xl md:text-6xl font-serif text-stone-900 mb-8">
                                Nous Contacter
                            </h2>
                            <p className="text-stone-500 text-lg font-light leading-relaxed">
                                Pour toute demande d'événement privatisé ou de groupe de plus de 8 personnes, n'hésitez pas à nous contacter directement.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="flex items-start space-x-6 group">
                                <div className="p-4 rounded-full border border-stone-200 text-amourette group-hover:bg-amourette group-hover:text-white transition-colors duration-300">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="text-stone-900 text-xl font-serif mb-2">Adresse</h4>
                                    <p className="text-stone-500">{content.contact.address}</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-6 group">
                                <div className="p-4 rounded-full border border-stone-200 text-amourette group-hover:bg-amourette group-hover:text-white transition-colors duration-300">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="text-stone-900 text-xl font-serif mb-2">Téléphone</h4>
                                    <p className="text-stone-500">{content.contact.phone}</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-6 group">
                                <div className="p-4 rounded-full border border-stone-200 text-amourette group-hover:bg-amourette group-hover:text-white transition-colors duration-300">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h4 className="text-stone-900 text-xl font-serif mb-2">Horaires</h4>
                                    <p className="text-stone-500">{content.contact.hours}</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <button className="w-full md:w-auto px-10 py-4 bg-stone-900 text-white font-bold uppercase tracking-widest hover:bg-amourette transition-colors duration-300">
                                Réserver une table
                            </button>
                        </div>
                    </div>

                    {/* Map / Image Placeholder */}
                    <div className="relative h-[600px] w-full overflow-hidden rounded-lg border border-stone-200 grayscale hover:grayscale-0 transition-all duration-700">
                        {/* Ideally a Google Map iframe here, using a placeholder image for now */}
                        <img
                            src="/images/devanture-vegetalisee.webp"
                            alt="Amourette Façade Végétalisée"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-stone-900/10 pointer-events-none" />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
