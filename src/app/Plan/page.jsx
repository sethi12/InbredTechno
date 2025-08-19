"use client";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Plan() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Check payment after redirect
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const orderId = urlParams.get("order_id");

    if (orderId) {
      verifyPayment(orderId);
    }
  }, []);

  const initiatePayment = async () => {
    setLoading(true);
    try {
      const order_id = `order_${Date.now()}`;
      const { payment_session_id } = (
        await axios.post(
          "https://inbredtechno-backend.onrender.com/api/payment/create-order",
          {
            order_id,
            order_amount: 1,
            customer_id: "cust_001",
            customer_email: "test@example.com",
            customer_phone: "9999999999",
          }
        )
      ).data;

      const cashfree = await loadCashfreeSDK();
      const cf = new cashfree({ mode: "production" });

      // Save order_id in URL params so we can check after redirect
      cf.checkout({
        paymentSessionId: payment_session_id,
        redirectTarget: "_self",
        redirectUrl: `/plan?order_id=${order_id}`, // 👈 add this
      });
    } catch (err) {
      console.error("Payment initiation failed:", err);
      alert("Payment initiation failed");
    } finally {
      setLoading(false);
    }
  };

  const verifyPayment = async (orderId) => {
    try {
      const verifyRes = await axios.get(
        `https://inbredtechno-backend.onrender.com/api/payment/verify/${orderId}`
      );
      if (verifyRes.data.order_status === "PAID") {
        setMessage("✅ Plan purchased successfully!");
      } else {
        setMessage("❌ No payment made or cancelled.");
      }
    } catch (err) {
      setMessage("⚠️ Could not verify payment.");
      console.error(err);
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
      {message && <p>{message}</p>}
    </div>
  );
}
