'use client';

import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

interface FormError {
  name?: string;
  email?: string;
  message?: string;
  general?: string;
}

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState<FormError>({});
    const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

    const contactInfo = [
        {
            icon: <FaEnvelope className="w-6 h-6" />,
            title: "Email",
            details: "birukendalew090@gmail.com",
            link: "mailto:birukendalew090@gmail.com"
        },
        {
            icon: <FaPhone className="w-6 h-6" />,
            title: "Phone",
            details: "+251 940566330",
            link: "tel:+251940566330"
        },
        {
            icon: <FaMapMarkerAlt className="w-6 h-6" />,
            title: "Location",
            details: "Addis Ababa, Ethiopia",
            link: "https://maps.google.com/?q=Addis+Ababa+Ethiopia"
        }
    ];

    const validateForm = (): boolean => {
        const newErrors: FormError = {};
        
        if (!name.trim()) {
            newErrors.name = 'Name is required';
        } else if (name.length < 2) {
            newErrors.name = 'Name must be at least 2 characters';
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!emailRegex.test(email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!message.trim()) {
            newErrors.message = 'Message is required';
        } else if (message.length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitStatus(null);
        
        if (!validateForm()) {
            return;
        }

        setLoading(true);

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    message,
                }),
            });

            const data = await res.json();

            if (res.ok) {
                setSubmitStatus('success');
                setName('');
                setEmail('');
                setMessage('');
                setErrors({});
            } else {
                setSubmitStatus('error');
                setErrors({ general: data.message || 'Failed to send message' });
            }
        } catch (error) {
            console.error(error)
            setSubmitStatus('error');
            setErrors({ general: 'Network error. Please try again later.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="py-20 bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-white mb-12">
                    Contact Me
                </h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="bg-gray-700 rounded-xl p-8 shadow-lg">
                        <h3 className="text-2xl font-semibold text-white mb-6">
                            Send Me a Message
                        </h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-300"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className={`mt-1 block w-full rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:text-white
                                        ${errors.name ? 'border-red-500' : 'border-gray-500'}`}
                                />
                                {errors.name && (
                                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                                )}
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-300"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className={`mt-1 block w-full rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:text-white
                                        ${errors.email ? 'border-red-500' : 'border-gray-500'}`}
                                />
                                {errors.email && (
                                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                                )}
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-300"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    rows={4}
                                    className={`mt-1 block w-full rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:text-white
                                        ${errors.message ? 'border-red-500' : 'border-gray-500'}`}
                                />
                                {errors.message && (
                                    <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                                )}
                            </div>

                            {errors.general && (
                                <div className="bg-red-900/30 border border-red-400 text-red-400 px-4 py-3 rounded relative">
                                    {errors.general}
                                </div>
                            )}

                            {submitStatus === 'success' && (
                                <div className="bg-green-900/30 border border-green-400 text-green-400 px-4 py-3 rounded relative">
                                    Message sent successfully!
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={loading}
                                className={`w-full px-6 py-3 rounded-md text-white transition-all duration-200 
                                    ${loading 
                                        ? 'bg-gray-400 cursor-not-allowed' 
                                        : 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800'}`}
                            >
                                {loading ? (
                                    <span className="flex items-center justify-center">
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Sending...
                                    </span>
                                ) : 'Send Message'}
                            </button>
                        </form>
                    </div>

                    {/* Contact Information Cards */}
                    <div className="space-y-6">
                        {contactInfo.map((info, index) => (
                            <a
                                key={index}
                                href={info.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="flex items-center space-x-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400">
                                        {info.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium text-white">
                                            {info.title}
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-300">
                                            {info.details}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}