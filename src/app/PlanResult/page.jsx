import { Suspense } from "react";
import PlanResultClient from "./PlanResultClient";

export default function PlanResultPage() {
  return (
    <Suspense fallback={<p>Loading payment status...</p>}>
      <PlanResultClient />
    </Suspense>
  );
}
