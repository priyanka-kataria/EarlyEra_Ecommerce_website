import React from 'react';
import { Sparkles, Target, Users } from 'lucide-react';

const AboutView: React.FC = () => {
  return (
    <div className="py-12 bg-surface rounded-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">About Us</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-text-main sm:text-4xl">
            Welcome to EarlyEra
          </p>
          <p className="mt-4 max-w-2xl text-xl text-text-secondary mx-auto">
            Your destination for quality goods that define the modern lifestyle. We are passionate about curation and dedicated to bringing you the best products from around the world.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div>
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                  <Sparkles />
                </div>
                <div className="mt-5">
                  <h3 className="text-lg leading-6 font-medium text-text-main">Our Vision</h3>
                  <p className="mt-2 text-base text-text-secondary">
                    To be the most trusted source for lifestyle enthusiasts, providing not just products, but inspiration to help you live your best life.
                  </p>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                  <Target />
                </div>
                <div className="mt-5">
                  <h3 className="text-lg leading-6 font-medium text-text-main">Our Mission</h3>
                  <p className="mt-2 text-base text-text-secondary">
                    To curate a collection of high-quality, innovative products and deliver a seamless shopping experience, backed by expert customer service and a commitment to your satisfaction.
                  </p>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                  <Users />
                </div>
                <div className="mt-5">
                  <h3 className="text-lg leading-6 font-medium text-text-main">Our Team</h3>
                  <p className="mt-2 text-base text-text-secondary">
                    We're a diverse team of style lovers, connoisseurs, and experts dedicated to finding the best products for our customers.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12 md:mt-0">
                <img className="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5" src="https://picsum.photos/seed/about/500/600" alt="About us"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutView;
