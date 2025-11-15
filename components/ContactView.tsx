import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

interface ContactViewProps {
  setView: (view: string) => void;
}

const ContactView: React.FC<ContactViewProps> = ({ setView }) => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

  return (
    <div className="bg-surface py-12 px-4 sm:px-6 lg:px-8 rounded-lg">
      <div className="relative max-w-xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-text-main sm:text-4xl">Contact Us</h2>
          <p className="mt-4 text-lg leading-6 text-text-secondary">
            Have a question or feedback? We'd love to hear from you.
          </p>
        </div>
        <div className="mt-12">
            {submitted ? (
                <div className="text-center p-8 bg-green-100 text-green-800 rounded-lg">
                    <h3 className="text-2xl font-bold">Thank you!</h3>
                    <p className="mt-2">Your message has been sent. We'll get back to you shortly.</p>
                    <button
                        onClick={() => setView('products')}
                        className="mt-6 bg-primary text-white font-bold py-2 px-6 rounded-lg hover:bg-primary-hover transition-colors duration-300"
                    >
                        Back to Shopping
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                    <div className="sm:col-span-2">
                        <label htmlFor="name" className="block text-sm font-medium text-text-main">Full name</label>
                        <div className="mt-1">
                        <input type="text" name="name" id="name" required className="py-3 px-4 block w-full shadow-sm focus:ring-primary focus:border-primary border-border-color rounded-md" />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-sm font-medium text-text-main">Email</label>
                        <div className="mt-1">
                        <input id="email" name="email" type="email" autoComplete="email" required className="py-3 px-4 block w-full shadow-sm focus:ring-primary focus:border-primary border-border-color rounded-md" />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block text-sm font-medium text-text-main">Message</label>
                        <div className="mt-1">
                        <textarea id="message" name="message" rows={4} required className="py-3 px-4 block w-full shadow-sm focus:ring-primary focus:border-primary border-border-color rounded-md"></textarea>
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <button type="submit" className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                        Send Message
                        </button>
                    </div>
                </form>
            )}
        </div>
      </div>
    </div>
  );
};

export default ContactView;