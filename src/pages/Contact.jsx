import React from 'react';
import SectionCard from '../components/SectionCard';
import teamData from '../data/teamData.json';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    const { contact } = teamData;

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you! Your message has been sent.");
    };

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="flex flex-col lg:flex-row gap-12">
                {/* Contact Info */}
                <div className="lg:w-1/3 space-y-8">
                    <SectionCard title="Get In Touch">
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <MapPin className="text-club-yellow mt-1 mr-3" />
                                <div>
                                    <h4 className="font-bold">Address</h4>
                                    <p className="text-gray-600">{contact.address}</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <Mail className="text-club-yellow mt-1 mr-3" />
                                <div>
                                    <h4 className="font-bold">Email</h4>
                                    <a href={`mailto:${contact.email}`} className="text-gray-600 hover:text-club-black">{contact.email}</a>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <Phone className="text-club-yellow mt-1 mr-3" />
                                <div>
                                    <h4 className="font-bold">Phone</h4>
                                    {contact.phone.map((p, i) => (
                                        <p key={i} className="text-gray-600">{p}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </SectionCard>
                </div>

                {/* Contact Form */}
                <div className="lg:w-2/3">
                    <SectionCard title="Send us a Message">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold mb-2">Name</label>
                                    <input type="text" className="w-full p-3 border border-gray-300 rounded focus:border-club-yellow focus:ring-1 focus:ring-club-yellow outline-none" placeholder="Your Name" required />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold mb-2">Email</label>
                                    <input type="email" className="w-full p-3 border border-gray-300 rounded focus:border-club-yellow focus:ring-1 focus:ring-club-yellow outline-none" placeholder="Your Email" required />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold mb-2">Subject</label>
                                <input type="text" className="w-full p-3 border border-gray-300 rounded focus:border-club-yellow focus:ring-1 focus:ring-club-yellow outline-none" placeholder="Subject" required />
                            </div>
                            <div>
                                <label className="block text-sm font-bold mb-2">Message</label>
                                <textarea className="w-full p-3 border border-gray-300 rounded focus:border-club-yellow focus:ring-1 focus:ring-club-yellow outline-none h-32" placeholder="How can we help you?" required></textarea>
                            </div>
                            <button type="submit" className="btn-primary w-full md:w-auto flex items-center justify-center">
                                Send Message <Send size={18} className="ml-2" />
                            </button>
                        </form>
                    </SectionCard>
                </div>
            </div>
        </div>
    );
};

export default Contact;
