"use client"
import { Suspense } from "react";
import Plans from "./Plans";

export default function Page() {
  return (
    <Suspense fallback={<p className="text-white text-lg">Loading...</p>}>
     <h1>Hello users</h1>
    </Suspense>
  );
}
