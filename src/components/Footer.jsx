import React from 'react';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-club-black text-white pt-12 pb-6">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-bold text-club-yellow mb-4">FC TamiLionS</h3>
                        <p className="text-gray-400 mb-4">
                            Creating Pathways to Success in Football. Join us in our journey to excellence.
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-xl font-bold mb-4">Contact Us</h4>
                        <div className="space-y-2 text-gray-300">
                            <div className="flex items-start">
                                <MapPin size={45} className="mr-2 mt-1 text-club-yellow" />
                                <span>No. 10/14, Second Floor, Thiruvalluvar Salai, J J Nagar, Mogappair East,
                                    Chennai - 600 037</span>
                            </div>
                            <div className="flex items-center">
                                <Mail size={18} className="mr-2 text-club-yellow" />
                                <a href="mailto:fctamilions@gmail.com" className="hover:text-white">contact@fctamilions.com</a>
                            </div>
                            <div className="flex items-center">
                                <Phone size={18} className="mr-2 text-club-yellow" />
                                <span>+91 76 3939 7770 / 6385 44 1585</span>
                            </div>
                        </div>
                    </div>

                    {/* Social / Quick Links */}
                    <div>
                        <h4 className="text-xl font-bold mb-4">Follow Us</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-club-yellow hover:text-black transition-colors">
                                <Instagram size={20} />
                            </a>
                            {/* Add more icons as needed */}
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} FC TamiLionS. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
