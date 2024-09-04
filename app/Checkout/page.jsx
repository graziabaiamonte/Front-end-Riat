"use client";
import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/navigation";
import { useState } from "react";

// Carica la chiave pubblica di Stripe
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
const baseUrl = process.env.NEXT_PUBLIC_API_URL;

const CheckoutButton1 = ({ amount, description, disabled, formData, selectedItem }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const router = useRouter();

  const handleCheckout = async () => {
    if (!amount || !description) {
      console.error('Missing required fields');
      router.push('/ErrorPage');
      return;
    }

    setIsProcessing(true);
    try {
      const data = {
        nome: formData.nome,
        cognome: formData.cognome,
        data: selectedItem?.acf.data_corso || selectedItem?.acf.data_evento,
        ora: selectedItem?.acf.ora_corso || selectedItem?.acf.ora_evento,
        email: formData.email,
        titolo: formData.titolo
      };
      localStorage.setItem('formData', JSON.stringify(data));

      const res = await fetch(`${baseUrl}/create-checkout-session`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount, description }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        console.error('API Error:', errorData);
        throw new Error('Network response was not ok.');
      }

      const { id: sessionId } = await res.json();
      console.log("Session ID received:", sessionId);

      if (!sessionId) {
        console.error('Session ID is missing.');
        router.push('/ErrorPage');
        return;
      }

      const stripe = await stripePromise;

      if (!stripe) {
        console.error('Stripe failed to initialize.');
        router.push('/ErrorPage');
        return;
      }

      const { error } = await stripe.redirectToCheckout({ sessionId });

      if (error) {
        console.error('Error redirecting to checkout:', error);
        router.push("/ErrorPage");
      } else {
        localStorage.removeItem('formData');
      }
    } catch (err) {
      console.error('Error during checkout:', err);
      router.push("/ErrorPage");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={disabled || isProcessing}
      className="bg-green hover:bg-pink text-white w-full uppercase fontPrimary p-2 focus:outline-none 
              focus:shadow-outline transition duration-300 ease-in-out"
    >
      {isProcessing ? 'Elaborazione...' : 'Prenota'}
    </button>
  );
};

export default CheckoutButton1;



