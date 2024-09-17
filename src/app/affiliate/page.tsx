"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

export default function AffiliateProgram() {
  const [couponCode, setCouponCode] = useState<string>("");
  const [generatedLink, setGeneratedLink] = useState<string>("");
  const router = useRouter();
  const generateCoupon = async () => {
    try {
      const response = await fetch("/api/generate-coupon", {
        method: "POST",
      });

      // Ensure response is successful
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      // Parse JSON response
      const data = await response.json();
      setCouponCode(data.couponCode);

      // Generate the link based on the coupon code
      setGeneratedLink(
        `${window.location.origin}/apply-discount?code=${data.couponCode}`
      );
    } catch (error) {
      console.error("Error generating coupon code:", error);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedLink);
    alert("Link copied to clipboard!");
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Generate Your Discount Code</h2>
      <Button onClick={generateCoupon} className="mb-4">
        Generate Coupon Code
      </Button>
      {couponCode && (
        <div className="mt-4">
          <p>
            Your Coupon Code: <strong>{couponCode}</strong>
          </p>
          <Input value={generatedLink} readOnly className="mt-2 mb-2" />
          <Button onClick={copyToClipboard}>Copy Discount Link</Button>
        </div>
      )}
    </div>
  );
}
