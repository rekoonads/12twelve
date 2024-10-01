"use client";

import { useAuth } from '@clerk/nextjs'
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  ArrowRightIcon,
  LinkIcon,
  CheckCircleIcon,
  CopyIcon,
  ZapIcon,
  TrendingUpIcon,
  DollarSignIcon,
} from "lucide-react";

export default function Affiliate() {
  const { userId } = useAuth()
  const [originalUrl, setOriginalUrl] = useState("");
  const [affiliateUrl, setAffiliateUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [affiliateVal, setAffiliateVal] = useState("");
  console.log("userid is : - ",userId)

  function generateUniqueString(length = 5) {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  const generateAffiliateUrl = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);

    const affiliate = generateUniqueString();
    setAffiliateVal(affiliate);

    try {
      // Step 1: Generate the affiliate link on the backend
      const response = await fetch(
        "https://one2twelvebackend.onrender.com/add-affiliate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            redirectLink: originalUrl,
            generatedVal: affiliate,
            userId
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to generate affiliate link");
      }

      // Step 2: Fetch the affiliate URL using the generated value
      const data = await response.json();
      console.log(data.savedAffiliate.generatedVal); // Inspect the response data

      // Assuming the backend responds with an object containing the affiliate URL
      setAffiliateUrl(
        `https://one2twelvebackend.onrender.com/affiliate?val=${data.savedAffiliate.generatedVal}`
      ); // Update this based on your actual response format
    } catch (error) {
      console.error(error);
      alert("Error generating affiliate link");
    } finally {
      setIsGenerating(false);
    }
  };

  const copyToClipboard = () => {
    console.log("Attempting to copy URL:", affiliateUrl); // Log the URL to verify
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(affiliateUrl)
        .then(() => {
          setCopied(true);
          console.log("Text copied to clipboard!");
          setTimeout(() => setCopied(false), 2000);
        })
        .catch((error) => {
          console.error("Failed to copy text:", error);
        });
    } else {
      console.error("Clipboard API not supported");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white flex items-center justify-center p-4 font-sans relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.05),transparent)] opacity-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.05),transparent)] opacity-50"></div>

      <div className="max-w-4xl w-full relative z-10">
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Affiliate 12twelve
          </h1>
          <p className="text-xl text-gray-300">
            Elevate your marketing game with next-gen affiliate links
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg p-8 rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-purple-500/20">
            <form onSubmit={generateAffiliateUrl} className="space-y-6">
              <div className="space-y-2">
                <Label
                  htmlFor="url"
                  className="text-sm font-medium text-gray-300"
                >
                  Your URL
                </Label>
                <div className="relative group">
                  <LinkIcon
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 transition-colors duration-200 group-hover:text-purple-400"
                    size={20}
                  />
                  <Input
                    id="url"
                    type="url"
                    placeholder="https://example.com/product"
                    value={originalUrl}
                    onChange={(e) => setOriginalUrl(e.target.value)}
                    className="pl-10 pr-4 py-2 w-full bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50 rounded-md"
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                disabled={isGenerating}
              >
                {isGenerating ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Generating...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    Generate 12twelve Link
                    <ArrowRightIcon className="ml-2 animate-pulse" size={16} />
                  </span>
                )}
              </Button>
            </form>

            {affiliateUrl && (
              <div className="mt-8 p-4 bg-gray-700 bg-opacity-50 backdrop-blur-lg rounded-md border border-gray-600 animate-fade-in-down">
                <Label
                  htmlFor="affiliate-url"
                  className="text-purple-400 font-semibold mb-2 block"
                >
                  Your 12twelve Affiliate Link
                </Label>
                <div className="relative">
                  <Input
                    id="affiliate-url"
                    value={`https://one2twelvebackend.onrender.com/affiliate?val=${affiliateVal}`}
                    readOnly
                    className="pr-20 bg-gray-800 border-gray-600 text-white focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50"
                  />
                  <Button
                    onClick={copyToClipboard}
                    className="absolute right-1 top-1/2 transform -translate-y-1/2 px-3 py-1 text-xs bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors duration-200"
                  >
                    {copied ? (
                      <CheckCircleIcon size={16} />
                    ) : (
                      <CopyIcon size={16} />
                    )}
                    <span className="ml-1">{copied ? "Copied!" : "Copy"}</span>
                  </Button>
                </div>
              </div>
            )}
          </div>

          <div className="space-y-8">
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg p-6 rounded-2xl shadow-xl">
              <h2 className="text-2xl font-bold mb-4 text-purple-400">
                Why Choose 12twelve?
              </h2>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <ZapIcon className="text-yellow-400 mr-2" size={20} />
                  <span>Lightning-fast link generation</span>
                </li>
                <li className="flex items-center">
                  <TrendingUpIcon className="text-green-400 mr-2" size={20} />
                  <span>Advanced analytics and tracking</span>
                </li>
                <li className="flex items-center">
                  <DollarSignIcon className="text-blue-400 mr-2" size={20} />
                  <span>Higher conversion rates</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg p-6 rounded-2xl shadow-xl">
              <h2 className="text-2xl font-bold mb-4 text-purple-400">
                Testimonial
              </h2>
              <blockquote className="italic text-gray-300">
                &quot;12twelve transformed my affiliate strategy. My earnings
                skyrocketed within weeks!&quot;
              </blockquote>
              <p className="text-right mt-2 text-gray-400">
                - Alex K., Top Affiliate
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-sm text-gray-300">
          <p>Need assistance? Our expert support team is here 24/7!</p>
          <a
            href="mailto:support@example.com"
            className="text-purple-400 hover:text-purple-300 font-medium hover:underline transition-colors duration-200"
          >
            support@example.com
          </a>
        </div>
      </div>
    </div>
  );
}
