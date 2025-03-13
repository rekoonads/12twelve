"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [paymentInfo, setPaymentInfo] = useState<any>(null);

  useEffect(() => {
    if (sessionId) {
      // You could verify the session with Stripe here
      // For now, we'll just simulate a successful payment
      setTimeout(() => {
        setPaymentInfo({
          status: "success",
          customerEmail: "customer@example.com",
        });
        setLoading(false);
      }, 1000);
    } else {
      setError("No session ID found");
      setLoading(false);
    }
  }, [sessionId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-900 text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white mx-auto"></div>
          <p className="mt-4 text-xl">Verifying your payment...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-900 text-white flex items-center justify-center">
        <div className="text-center">
          <div className="bg-red-500 p-4 rounded-lg mb-4">
            <p className="text-xl">Error: {error}</p>
          </div>
          <Link
            href="/pricing"
            className="text-white bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-medium"
          >
            Return to Pricing
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-900 text-white flex items-center justify-center p-4">
      <div className="bg-purple-800 rounded-lg shadow-xl p-8 max-w-md w-full">
        <div className="text-center">
          <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>
          <p className="text-xl mb-6">Thank you for your purchase</p>

          <div className="bg-purple-700 rounded-lg p-4 mb-6">
            <p className="text-sm mb-2">Transaction ID:</p>
            <p className="font-mono text-xs bg-purple-600 p-2 rounded">
              {sessionId}
            </p>
          </div>

          <p className="mb-8">
            We&apos;ve sent a confirmation email with all the details of your
            purchase. Our team will contact you shortly to get started with your
            selected package.
          </p>

          <Link
            href="/"
            className="text-white bg-pink-600 hover:bg-pink-700 px-6 py-3 rounded-lg font-medium inline-block"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
