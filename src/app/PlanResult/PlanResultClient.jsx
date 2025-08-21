"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "next/navigation";

export default function PlanResultClient() {
  const searchParams = useSearchParams();
  const order_id = searchParams.get("order_id");

  const [message, setMessage] = useState("Checking payment...");

  useEffect(() => {
    const verifyPayment = async () => {
      if (!order_id) {
        setMessage("⚠️ Invalid request. No order ID found.");
        return;
      }

      try {
        setMessage("🔄 Verifying your payment...");

        const res = await axios.get(
          `https://inbredtechno-backend.onrender.com/api/payment/verify/${order_id}`
        );

        if (res.data.order_status === "PAID") {
          setMessage("✅ Plan purchased successfully!");
        } else {
          setMessage("❌ No payment made or payment was cancelled.");
        }
      } catch (err) {
        console.error("Payment verification error:", err);
        setMessage("⚠️ Could not verify payment.");
      }
    };

    verifyPayment();
  }, [order_id]);

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        textAlign: "center",
        fontFamily: "sans-serif",
      }}
    >
      <h1>Payment Result</h1>
      <p style={{ fontSize: "18px", margin: "20px 0" }}>{message}</p>
    </div>
  );
}
