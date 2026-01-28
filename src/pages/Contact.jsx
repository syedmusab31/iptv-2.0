import React, { useState, useRef } from "react";
// In a real project, you would install emailjs-com, but we'll use a placeholder import here.
import emailjs from 'emailjs-com';



import {EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
// --- PLACEHOLDER EMAILJS CREDENTIALS ---
// REPLACE THESE WITH YOUR ACTUAL KEYS


const SERVICE_ID = "service_1j7pmsw";
const TEMPLATE_ID = "template_xmv7iga";
const PUBLIC_KEY = "rxceti4RGK6CE-Uiy"; // User ID

const Contact = () => {
    // State for form data
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        phone: '',
        message: ''
    });

    // State for UI feedback
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null); // 'success', 'error', or null

    // Ref for the form element, necessary for emailjs.sendForm
    const form = useRef();

    // Handler for all input changes
    const handleChange = (e) => {
        setStatus(null); // Clear status on new input
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Handler for form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Basic validation check
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.message || !formData.subject || !formData.phone) {
            setStatus('error');
            return;
        }

        setLoading(true);

        try {
            // Note: emailjs.sendForm requires the service ID, template ID, the form reference, and the public key
            // The form fields must have 'name' attributes matching your EmailJS template variables.
            const result = await emailjs.sendForm(
                SERVICE_ID, 
                TEMPLATE_ID, 
                form.current, 
                PUBLIC_KEY
            );

            if (result.status === 200) {
                setStatus('success');
                // Reset form state after successful submission
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    subject: '',
                    phone: '',
                    message: ''
                });
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('EmailJS Error:', error);
            setStatus('error');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-gray-50 py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Header */}
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                        Contact With Us
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-slate-600">
                        Ready to get in touch with <span className="font-semibold text-indigo-600">Us</span>.
                        We're here to assist you with any questions or concerns you may have. Please don't hesitate to reach out.
                    </p>
                </div>

                {/* Contact Info + Form */}
                <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
                    {/* Left: Info */}
                    <div className="space-y-8">
                        <h3 className="text-3xl font-extrabold text-slate-900 mb-6 border-b pb-2 border-indigo-100">Contact Info</h3>
                        
                        <div className="flex items-start space-x-4">
                            <EnvelopeIcon className="h-6 w-6 text-indigo-600 mt-1 flex-shrink-0" />
                            <div>
                                <h4 className="font-semibold text-slate-900">Email</h4>
                                <p className="text-slate-600">mohcin15000@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <PhoneIcon className="h-6 w-6 text-indigo-600 mt-1 flex-shrink-0" />
                            <div>
                                <h4 className="font-semibold text-slate-900">Phone</h4>
                                <p className="text-slate-600">+212-7001-12722</p>
                            </div>
                        </div>
                            

                       
                    </div>

                    {/* Right: Contact Form */}
                    <div className="bg-white rounded-2xl p-8 shadow-xl border border-indigo-100">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6">Quick Contact</h3>
                        <p className="mb-6 text-slate-600">Interested in discussing? Please feel free to get in touch using the form below.</p>
                        
                        <form ref={form} onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <input
                                    type="text"
                                    name="firstName" // IMPORTANT: Used as template variable
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder="First Name *"
                                    required
                                    className="w-full rounded-lg border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:outline-none focus:ring-indigo-600 sm:text-sm"
                                />
                                <input
                                    type="text"
                                    name="lastName" // IMPORTANT: Used as template variable
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder="Last Name"
                                    className="w-full rounded-lg border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:outline-none focus:ring-indigo-600 sm:text-sm"
                                />
                            </div>
                            <input
                                type="email"
                                name="email" // IMPORTANT: Used as template variable
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email *"
                                required
                                className="w-full rounded-lg border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:outline-none focus:ring-indigo-600 sm:text-sm"
                            />

                            <input
                                type="text"
                                name="subject" // IMPORTANT: Used as template variable
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Subject"
                                className="w-full rounded-lg border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:outline-none focus:ring-indigo-600 sm:text-sm"
                            />
                            <input
                                type="tel"
                                name="phone" // IMPORTANT: Used as template variable
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Phone"
                                className="w-full rounded-lg border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:outline-none focus:ring-indigo-600 sm:text-sm"
                            />
                            <textarea
                                name="message" // IMPORTANT: Used as template variable
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Enter your Comment *"
                                rows={4}
                                required
                                className="w-full rounded-lg border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:outline-none focus:ring-indigo-600 sm:text-sm"
                            />
                            
                            {/* Status Messages */}
                            {status === 'success' && (
                                <p className="text-sm font-medium text-green-600 bg-green-50 p-3 rounded-lg border border-green-200">
                                    Message sent successfully! We'll get back to you soon.
                                </p>
                            )}
                            {status === 'error' && (
                                <p className="text-sm font-medium text-red-600 bg-red-50 p-3 rounded-lg border border-red-200">
                                    Failed to send message. Please check required fields or try again later.
                                </p>
                            )}

                            <button
                                type="submit"
                                disabled={loading}
                                className={`w-full rounded-md px-4 py-2.5 text-white font-semibold shadow focus:ring-2 focus:outline-none transition-opacity duration-300 
                                    ${loading 
                                        ? 'bg-indigo-400 cursor-not-allowed opacity-75' 
                                        : 'bg-indigo-600 hover:bg-indigo-500 focus:ring-indigo-600'
                                    }`}
                            >
                                {loading ? 'Sending...' : 'Let\'s Talk'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;