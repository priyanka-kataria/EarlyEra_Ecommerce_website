import React from 'react';
import { Truck, RefreshCw, ShieldCheck, LifeBuoy } from 'lucide-react';

const features = [
  {
    icon: <Truck className="h-8 w-8 text-primary" />,
    title: 'Worldwide Shipping',
    description: 'Order above $100',
  },
  {
    icon: <RefreshCw className="h-8 w-8 text-primary" />,
    title: 'Easy 30-Day Returns',
    description: 'Back returns in 7 days',
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: 'Money Back Guarantee',
    description: 'Guarantee within 30 days',
  },
  {
    icon: <LifeBuoy className="h-8 w-8 text-primary" />,
    title: 'Easy Online Support',
    description: '24/7 anytime support',
  },
];

const Features: React.FC = () => {
  return (
    <section className="my-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-surface border border-border-color p-6 rounded-lg flex items-center space-x-4 transition-transform transform hover:scale-105 duration-300 shadow-sm hover:shadow-lg">
            <div>{feature.icon}</div>
            <div>
              <h3 className="font-semibold text-text-main">{feature.title}</h3>
              <p className="text-sm text-text-secondary">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;