"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Check, ArrowRight, ShoppingCart } from "lucide-react";
import { currencySymbols, getPrice } from "@/lib/currencyConverter";
import { getStripe } from "@/lib/stripe-client";

type Currency = "USD" | "NGN" | "INR" | "AED" | "GBP" | "PKR";
type PlanType = "youtube" | "growth" | "professional" | "premium";

const plans = [
  {
    name: "YouTube Growth Package",
    type: "youtube" as PlanType,
    description: "Includes 1000 Subscribers & 1000 Hours",
    features: [
      "50 Hours of Monthly Support",
      "Priority Task Handling",
      "Regular updates on completed tasks",
      "Team Management",
      "Document Processing",
      "Transcription Services",
    ],
    discount: 10,
  },
  {
    name: "Growth Package",
    type: "growth" as PlanType,
    description: "For clients with more substantial needs",
    features: [
      "60 hours of work per month",
      "Basic Digital Marketing",
      "Social Media Ad Campaign",
      "Website Management",
      "Basic Reporting",
      "Set budget will be provide by the client",
    ],
    discount: 15,
    popular: true,
  },
  {
    name: "Professional Package",
    type: "professional" as PlanType,
    description: "For business professionals who need significant support",
    features: [
      "100 hours of work per month",
      "Detailed Reporting",
      "Website Management",
      "Content Curation",
      "Video Editing",
      "Dedicated Team",
      "Set budget will be provide by the client",
    ],
    discount: 20,
  },
  {
    name: "Premium Package",
    type: "premium" as PlanType,
    description: "Full month of service dedicated to one focus area",
    features: [
      "Video Editing",
      "Ads Management",
      "Website Management",
      "24/7 Customer Support",
      "Priority Service Level",
      "Set budget will be provide by the client",
    ],
    discount: 25,
  },
];

export default function PricingPage() {
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>("USD");
  const [isDiscountApplied, setIsDiscountApplied] = useState(false);
  const [isLoading, setIsLoading] = useState<PlanType | null>(null);

  const applyDiscount = () => {
    setIsDiscountApplied(!isDiscountApplied);
  };

  const handleCheckout = async (planType: PlanType) => {
    setIsLoading(planType);

    try {
      // Create checkout session
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          planType,
          currency: selectedCurrency,
          isDiscountApplied,
        }),
      });

      const { sessionId, error } = await response.json();

      if (error) {
        console.error("Error creating checkout session:", error);
        alert("Something went wrong. Please try again later.");
        setIsLoading(null);
        return;
      }

      // Redirect to Stripe Checkout
      const stripe = await getStripe();
      const { error: stripeError } = await stripe!.redirectToCheckout({
        sessionId,
      });

      if (stripeError) {
        console.error("Stripe checkout error:", stripeError);
        alert("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Error during checkout:", error);
      alert("Something went wrong. Please try again later.");
    }

    setIsLoading(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-900 text-white">
      <Navbar />

      <main className="container mx-auto px-4 py-16">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Service Packages & Pricing
        </motion.h1>
        <motion.p
          className="text-xl text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Your Growth, Our Strategy
        </motion.p>

        <div className="mb-8 text-center">
          <label htmlFor="currency-select" className="mr-2">
            Select Currency:
          </label>
          <select
            id="currency-select"
            value={selectedCurrency}
            onChange={(e) => setSelectedCurrency(e.target.value as Currency)}
            className="bg-purple-800 text-white rounded p-2"
          >
            {Object.entries(currencySymbols).map(([code, symbol]) => (
              <option key={code} value={code}>
                {symbol} {code}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-8 text-center">
          <button
            onClick={applyDiscount}
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            {isDiscountApplied ? "Remove 40% Discount" : "Apply 40% Discount"}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`bg-purple-800 rounded-lg shadow-lg overflow-hidden ${
                plan.popular ? "ring-2 ring-pink-500" : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {plan.popular && (
                <div className="bg-pink-500 text-white text-center py-2 text-sm font-semibold">
                  Most Popular
                </div>
              )}
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">{plan.name}</h2>
                <div className="mb-4">
                  <span className="text-4xl font-bold">
                    {currencySymbols[selectedCurrency]}
                    {getPrice(plan.type, selectedCurrency, isDiscountApplied)}
                  </span>
                  {isDiscountApplied && (
                    <span className="ml-2 text-2xl text-gray-400 line-through">
                      {currencySymbols[selectedCurrency]}
                      {getPrice(plan.type, selectedCurrency)}
                    </span>
                  )}
                </div>
                <p className="text-sm text-purple-300 mb-6">
                  {plan.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-sm text-pink-300 mb-4">
                  Note: ads Budget will be provided by the client.
                </div>
                <button
                  onClick={() => handleCheckout(plan.type)}
                  disabled={isLoading === plan.type}
                  className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-4 rounded transition duration-300 flex items-center justify-center"
                >
                  {isLoading === plan.type ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white mr-2"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-5 h-5 mr-2" />
                      Select Package
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 py-16 bg-gradient-to-r from-purple-600 to-purple-500 rounded-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
              Exclusive Free Perks with Every Package
            </h2>
            <p className="text-2xl md:text-3xl text-center text-yellow-300 font-bold mb-12">
              Get more value as you upgrade
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Growth Package */}
              <motion.div
                className="bg-white rounded-lg p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold text-purple-700 mb-6">
                  Growth Package
                </h3>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">
                  Free Perks Included
                </h4>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-purple-600 mr-2 mt-1 flex-shrink-0" />
                    <span>
                      Microsoft Office Premium upto 10 users per month
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-purple-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Free Canvas Pro per month</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-purple-600 mr-2 mt-1 flex-shrink-0" />
                    <span>30% on Adobe Licence</span>
                  </li>
                </ul>
              </motion.div>

              {/* Professional Package */}
              <motion.div
                className="bg-white rounded-lg p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-2xl font-bold text-purple-700 mb-6">
                  Professional Package
                </h3>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">
                  Free Perks Included
                </h4>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-purple-600 mr-2 mt-1 flex-shrink-0" />
                    <span>
                      Microsoft Office Premium upto 20 users per month
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-purple-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Free Canvas Pro per month</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-purple-600 mr-2 mt-1 flex-shrink-0" />
                    <span>30% on Adobe Licence</span>
                  </li>
                </ul>
              </motion.div>

              {/* Premium Package */}
              <motion.div
                className="bg-white rounded-lg p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-2xl font-bold text-purple-700 mb-6">
                  Premium Package
                </h3>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">
                  Free Perks Included
                </h4>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-purple-600 mr-2 mt-1 flex-shrink-0" />
                    <span>AWS Credits Upto $100K</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-purple-600 mr-2 mt-1 flex-shrink-0" />
                    <span>
                      Microsoft Office Premium upto 50 users per month
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-purple-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Free Canvas Pro per month</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-purple-600 mr-2 mt-1 flex-shrink-0" />
                    <span>30% on Adobe Licence</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-purple-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Stripe Credits $25K</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-16 bg-purple-800 p-8 rounded-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <h2 className="text-2xl font-bold mb-4">Why Choose 12Twelve?</h2>
          <ul className="space-y-2">
            <li className="flex items-start">
              <ArrowRight className="w-5 h-5 text-pink-500 mr-2 flex-shrink-0 mt-1" />
              <span>
                Our unique approach combines industry expertise, a
                customer-focused mindset, and cutting-edge technology to provide
                solutions that are both innovative and impactful.
              </span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="w-5 h-5 text-pink-500 mr-2 flex-shrink-0 mt-1" />
              <span>
                How we understand client needs & Developing tailored strategies
              </span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="w-5 h-5 text-pink-500 mr-2 flex-shrink-0 mt-1" />
              <span>
                Delivering results through high-quality content and campaigns
              </span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="w-5 h-5 text-pink-500 mr-2 flex-shrink-0 mt-1" />
              <span>Continuous analysis and optimization</span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="w-5 h-5 text-pink-500 mr-2 flex-shrink-0 mt-1" />
              <span>
                Transparent communication & Regular progress updates and
                feedback loops
              </span>
            </li>
          </ul>
        </motion.div>
      </main>

      <footer className="bg-purple-900 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-purple-300 mb-4">
            Ready to see the impact for yourself? Contact us today!
          </p>
          <p className="text-purple-300">
            Email:{" "}
            <a href="mailto:hello@12twelve.com" className="underline">
              hello@12twelve.com
            </a>{" "}
            | Website:{" "}
            <a
              href="https://www.my12twelve.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              www.my12twelve.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
