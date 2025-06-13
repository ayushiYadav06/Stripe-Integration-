"use client";

import CheckoutPage from "@/components/CheckoutPage";
import convertToSubcurrency from "@/lib/convertToSubcurrency";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function Home() {
  const amount = 1000;

  return (
    <main className="mx-auto p-10 text-white text-center border m-10 rounded-md " style={{ maxWidth: "45rem" , backgroundColor:"#EFEFF6" , borderRadius:"20px" }}>
      <div className="mb-1">
        <h1 className="text-4xl font-extrabold mb-2" style={{color:"#2C2D67" , fontSize:"20px" , textAlign:"left"}}>Payment Method</h1>
      
      </div>

      <Elements
        stripe={stripePromise}
        options={{
          mode: "payment",
          amount: convertToSubcurrency(amount),
          currency: "usd",
        }}

      >
        <CheckoutPage amount={amount} />
      </Elements>
    </main>
  );
}
