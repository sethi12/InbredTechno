"use client";
import axios from "axios";
import { useState } from "react";

export default function Plan() {
  const [loading, setLoading] = useState(false);

  const initiatePayment = async () => {
    setLoading(true);
    try {
      const order_id = `order_${Date.now()}`;

      // Create order in backend
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
    <div>
      <h1>Buy Plan</h1>
      <button onClick={initiatePayment} disabled={loading}>
        {loading ? "Processing..." : "Pay Now"}
      </button>
    </div>
  );
}
