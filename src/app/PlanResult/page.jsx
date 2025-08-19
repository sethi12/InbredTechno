"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "next/navigation";

export default function PlanResult() {
  const [message, setMessage] = useState("Checking payment...");
  const searchParams = useSearchParams();
  const order_id = searchParams.get("order_id");

  useEffect(() => {
    if (!order_id) return;
    const verifyPayment = async () => {
      try {
        const res = await axios.get(
          `https://inbredtechno-backend.onrender.com/api/payment/verify/${order_id}`
        );
        if (res.data.order_status === "PAID") {
          setMessage("✅ Plan purchased successfully!");
        } else {
          setMessage("❌ No payment made or cancelled.");
        }
      } catch (err) {
        console.error(err);
        setMessage("⚠️ Could not verify payment.");
      }
    };
    verifyPayment();
  }, [order_id]);

  return (
    <div>
      <h1>Payment Result</h1>
      <p>{message}</p>
    </div>
  );
}
