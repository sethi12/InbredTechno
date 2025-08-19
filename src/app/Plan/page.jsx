"use client";
import axios from "axios";
import { useState } from "react";

export default function Plan() {
  const [loading, setLoading] = useState(false);

  const initiatePayment = async () => {
    setLoading(true);
    try {
      const order_id = `order_${Date.now()}`;
      const { payment_session_id } = (await axios.post(
        "https://inbredtechno-backend.onrender.com/api/payment/create-order",
        {
          order_id,
          order_amount: 1,
          customer_id: "cust_001",
          customer_email: "test@example.com",
          customer_phone: "9999999999",
        }
      )).data;

      const cashfree = await loadCashfreeSDK();

      // Initialize SDK in production mode
      const cf = new cashfree({ mode: "production" });

      cf.checkout({
        paymentSessionId: payment_session_id,
        redirectTarget: "_self", // Opens in the same window
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
      script.src = "https://sdk.cashfree.com/js/v3/cashfree.js"; // Correct production SDK
      script.onload = () => resolve(window.Cashfree);
      document.body.appendChild(script);
    });

  return (
    <div>
      <h1>Buy Plan</h1>
      <button onClick={initiatePayment} disabled={loading}>
        {loading ? "Processing..." : "Pay Now"}
      </button>
    </div>
  );
}
