import React, { useState } from 'react';
import { useCart } from '../hooks/useCart';
import { View } from '../App';
import { Lock } from 'lucide-react';

interface CheckoutViewProps {
  setView: (view: View) => void;
}

const CheckoutView: React.FC<CheckoutViewProps> = ({ setView }) => {
  const { cartItems, subtotal, tax, shipping, total, clearCart } = useCart();
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = (formData: FormData) => {
    const newErrors: Record<string, string> = {};
    const requiredFields = ['name', 'email', 'address', 'city', 'zip', 'card-number', 'expiry', 'cvc'];
    
    requiredFields.forEach(field => {
        if (!formData.get(field)) {
            newErrors[field] = 'This field is required';
        }
    });

    const email = formData.get('email') as string;
    if (email && !/\S+@\S+\.\S+/.test(email)) {
        newErrors['email'] = 'Please enter a valid email address.';
    }

    const cardNumber = formData.get('card-number') as string;
    if (cardNumber && !/^\d{16}$/.test(cardNumber.replace(/\s/g, ''))) {
        newErrors['card-number'] = 'Please enter a valid 16-digit card number.';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    if (validateForm(formData)) {
        clearCart();
        setView('orderSuccess');
    }
  };

  const InputField = ({ id, label, type = 'text', required = true, error }: {id: string, label: string, type?: string, required?: boolean, error?: string}) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-text-main">{label}</label>
        <input type={type} id={id} name={id} required={required} className={`mt-1 block w-full px-3 py-2 border ${error ? 'border-red-500' : 'border-border-color'} rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm`} />
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );

  return (
    <div className="mt-8">
      <h1 className="text-3xl font-bold text-text-main mb-8">Checkout</h1>
      <form onSubmit={handleSubmit} noValidate>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 bg-surface p-8 rounded-lg border border-border-color">
            <h2 className="text-xl font-semibold text-text-main mb-6">Shipping & Payment</h2>
            <div className="grid grid-cols-1 gap-6">
              <fieldset>
                <legend className="text-lg font-medium text-text-main mb-4">Shipping Information</legend>
                <div className="space-y-4">
                    <InputField id="name" label="Full Name" error={errors.name} />
                    <InputField id="email" label="Email Address" type="email" error={errors.email} />
                    <InputField id="address" label="Address" error={errors.address} />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <InputField id="city" label="City" error={errors.city} />
                        <InputField id="zip" label="ZIP / Postal Code" error={errors.zip} />
                    </div>
                </div>
              </fieldset>
              <fieldset>
                 <legend className="text-lg font-medium text-text-main mb-4 mt-6">Payment Details</legend>
                 <div className="space-y-4">
                    <InputField id="card-number" label="Card Number" error={errors['card-number']} />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <InputField id="expiry" label="Expiry Date (MM/YY)" error={errors.expiry} />
                        <InputField id="cvc" label="CVC" error={errors.cvc} />
                    </div>
                 </div>
              </fieldset>
            </div>
          </div>
          <div className="lg:col-span-1 bg-surface border border-border-color rounded-lg p-6 shadow-sm sticky top-24">
            <h2 className="text-xl font-bold text-text-main mb-6 border-b border-border-color pb-4">Order Summary</h2>
            <div className="space-y-2">
              {cartItems.map(item => (
                <div key={item.id} className="flex justify-between text-sm text-text-secondary">
                  <span>{item.name} x {item.quantity}</span>
                  <span className="font-medium text-text-main">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="space-y-2 text-text-secondary mt-6 pt-4 border-t border-border-color">
              <div className="flex justify-between"><p>Subtotal</p><p className="font-medium text-text-main">${subtotal.toFixed(2)}</p></div>
              <div className="flex justify-between"><p>Shipping</p><p className="font-medium text-text-main">${shipping.toFixed(2)}</p></div>
              <div className="flex justify-between"><p>Tax</p><p className="font-medium text-text-main">${tax.toFixed(2)}</p></div>
            </div>
             <div className="flex justify-between items-center text-lg font-bold text-text-main mt-4 pt-4 border-t border-border-color">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
             <button type="submit" className="w-full mt-8 bg-primary text-white font-bold py-3 rounded-lg hover:bg-primary-hover flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <Lock className="h-5 w-5 mr-2" />
                Place Order
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckoutView;