"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ApplyDiscount() {
  const router = useRouter();
  const { code } = router.query;

  useEffect(() => {
    if (code) {
      console.log(`Applying discount for code: ${code}`);
    }
  }, [code]);

  return (
    <div>
      <h1>Applying Discount...</h1>
    </div>
  );
}
