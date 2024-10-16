"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CollaborationFormPage() {
  const params = useParams();
  const influencerSlug = params.influencer as string;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    // You would typically send this data to your backend API
  };

  return (
    <div className="min-h-screen bg-purple-950 py-16 px-4 sm:px-6 lg:px-8 text-purple-50">
      <div className="max-w-2xl mx-auto">
        <Link href={`/collaborate/${influencerSlug}`}>
          <Button
            variant="ghost"
            className="mb-8 text-purple-300 hover:text-purple-500"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Influencer Profile
          </Button>
        </Link>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="bg-purple-900 border-purple-700">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Collaboration Request Form
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-purple-300 mb-1"
                  >
                    Your Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-purple-800 border-purple-700 text-purple-100 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-purple-300 mb-1"
                  >
                    Your Email
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-purple-800 border-purple-700 text-purple-100 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-purple-300 mb-1"
                  >
                    Company Name
                  </label>
                  <Input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full bg-purple-800 border-purple-700 text-purple-100 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-purple-300 mb-1"
                  >
                    Collaboration Idea
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full bg-purple-800 border-purple-700 text-purple-100 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-purple-100 font-semibold py-2 px-4 rounded-full transition-all duration-300"
                  >
                    Submit Collaboration Request
                  </Button>
                </motion.div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
