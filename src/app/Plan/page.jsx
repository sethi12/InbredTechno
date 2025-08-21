"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Plans() {
  const [bubbles, setBubbles] = useState([]);
  const [loading, setLoading] = useState(false);
  const plans = [
    { title: "1-Day Boost", price: "₹1", duration: "1 day", color: "cyan", highlight: false },
    { title: "1-Week Boost", price: "₹99", duration: "7 days", color: "fuchsia", highlight: true },
    { title: "1-Month Boost", price: "₹249", duration: "30 days", color: "lime", highlight: false },
    { title: "Blue Tick", price: "₹199", duration: "Verified Badge", color: "purple", highlight: false },
  ];

 useEffect(() => {
    const newBubbles = Array.from({ length: 20 }).map(() => ({
      width: `${Math.random() * 10 + 5}px`,
      height: `${Math.random() * 10 + 5}px`,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationDuration: `${Math.random() * 8 + 5}s`,
    }));
    setBubbles(newBubbles);
  }, []);

  const initiatePayment = async (orderamount, customeremail, customerphone) => {
    setLoading(true);
    try {
      const order_id = `order_${Date.now()}`;

      // Create order in backend
      const { payment_session_id } = (await axios.post(
        "https://inbredtechno-backend.onrender.com/api/payment/create-order",
        {
          order_id,
          order_amount: orderamount,
          customer_id: "cust_001",
          customer_email: customeremail,
          customer_phone: customerphone,
        }
      )).data;

      // Load Cashfree SDK
      const cashfree = await loadCashfreeSDK();
      const cf = new cashfree({ mode: "production" });

      // Redirect to Cashfree payment page
      cf.checkout({
        paymentSessionId: payment_session_id,
        redirectTarget: "_self",
        redirectUrl: `/PlanResult?order_id=${order_id}`, // redirect to result page
      });

    } catch (err) {
      console.error("Payment initiation failed:", err);
      alert("Payment initiation failed");
    } finally {
      setLoading(false);
    }
  };

  const loadCashfreeSDK = () =>
    new Promise((resolve) => {
      if (window.Cashfree) return resolve(window.Cashfree);
      const script = document.createElement("script");
      script.src = "https://sdk.cashfree.com/js/v3/cashfree.js";
      script.onload = () => resolve(window.Cashfree);
      document.body.appendChild(script);
    });




  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center px-4 py-10 overflow-hidden bg-black">
      {/* Particle Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {bubbles.map((bubble, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white opacity-20 animate-pulse"
            style={bubble}
          />
        ))}
      </div>

      {/* Title */}
      <h2 className="relative z-10 text-center text-3xl sm:text-5xl font-extrabold text-cyan-400 mb-8 drop-shadow-[0_0_10px_cyan]">
        💎 All Plans of Zizzle
      </h2>

      {/* Pricing Cards */}
      <div className="relative z-10 w-full max-w-7xl grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="relative rounded-2xl p-6 shadow-lg transform transition-all duration-500 hover:scale-105"
            style={{
              boxShadow: `0 0 12px ${plan.color}, 0 0 25px ${plan.color}`,
              border: `2px solid ${plan.color}`,
              background: "rgba(0,0,0,0.65)",
              backdropFilter: "blur(10px)",
            }}
          >
            {/* Neon Glow Border Animation */}
            <div
              className="absolute inset-0 rounded-2xl animate-pulse"
              style={{
                boxShadow: `0 0 15px ${plan.color}, inset 0 0 15px ${plan.color}`,
                opacity: 0.3,
              }}
            ></div>

            {/* Badge */}
            {plan.highlight && (
              <span
                className="relative z-20 bg-black text-white text-xs px-3 py-1 rounded-full mb-4 inline-block"
                style={{
                  boxShadow: `0 0 10px ${plan.color}`,
                  border: `1px solid ${plan.color}`,
                }}
              >
                🚀 Most Popular
              </span>
            )}

            {/* Card Content */}
            <h3
              className="relative z-20 text-lg sm:text-xl font-bold mb-2 text-center"
              style={{ color: plan.color, textShadow: `0 0 8px ${plan.color}` }}
            >
              {plan.title}
            </h3>
            <p
              className="relative z-20 text-3xl sm:text-4xl font-extrabold mb-1 text-center"
              style={{ color: plan.color, textShadow: `0 0 12px ${plan.color}` }}
            >
              {plan.price}
            </p>
            <p className="relative z-20 text-gray-300 mb-5 text-center text-sm sm:text-base">
              {plan.duration}
            </p>

            <div className="flex justify-center">
              <button
      onClick={() =>
        initiatePayment(
          plan.price.replace("₹", ""),
          "sethichaitanya08@gmail.com",
          "9267926408"
        )
      }
      disabled={loading}
      className="relative z-20 px-6 py-3 rounded-full font-semibold w-full sm:w-auto transition text-sm sm:text-base flex items-center justify-center"
      style={{
        background: plan.color,
        color: "black",
        boxShadow: `0 0 12px ${plan.color}, 0 0 25px ${plan.color}`,
      }}
    >
      {loading ? (
        // Circular progress indicator (spinner)
        <svg
          className="animate-spin h-5 w-5 text-black"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          ></path>
        </svg>
      ) : (
        "Buy Now"
      )}
    </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )


}


// orignal code




