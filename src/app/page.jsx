"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Plans() {
    const [bubbles, setBubbles] = useState([]);

    const plans = [
        { title: "1-Day Boost", price: "₹19", duration: "1 day", color: "cyan", highlight: false },
        { title: "1-Week Boost", price: "₹99", duration: "7 days", color: "fuchsia", highlight: true },
        { title: "1-Month Boost", price: "₹249", duration: "30 days", color: "lime", highlight: false },
        { title: "Blue Tick", price: "₹199", duration: "Verified Badge", color: "purple", highlight: false },
    ];

    useEffect(() => {
        const newBubbles = Array.from({ length: 20 }).map(() => ({
            width: `${Math.random() * 5 + 3}px`,
            height: `${Math.random() * 5 + 3}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 4 + 3}s`,
        }));
        setBubbles(newBubbles);
    }, []);

const getSessionId = async () => {
  try {
    const res = await axios.post("http://localhost:5000/payment", {
      amount: 1.0,
      customerId: "Sethi1234567890",
      customerEmail: "Sethichaitanya03@gmail.com",
      customerPhone: "1234567890",
    });

    console.log("Session ID:", res.data.sessionId);
    return res.data.sessionId;
  } catch (error) {
    console.error("Frontend error:", error.message);
  }
};

const handleClick = async () => {
  await getSessionId();
};
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
                                onClick={handleClick}
                                className="relative z-20 px-6 py-3 rounded-full font-semibold w-full sm:w-auto transition text-sm sm:text-base"
                                style={{
                                    background: plan.color,
                                    color: "black",
                                    boxShadow: `0 0 12px ${plan.color}, 0 0 25px ${plan.color}`,
                                }}
                            >
                                Buy Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
