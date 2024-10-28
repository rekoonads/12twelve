"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { Rocket, Building2 } from "lucide-react";

export default function UserTypeSelection({
  userId,
  firstName,
  lastName,
  email,
}: {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSelection = async (userType: "influencer" | "brand") => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://one2twelvebackend.onrender.com/api/create-user",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: {
              id: userId,
              userType: userType,
              first_name: firstName,
              last_name: lastName,
              email_addresses: [{ email_address: email }],
            },
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to create user");
      }

      const userData = await response.json();
      console.log("User created:", userData);

      toast({
        title: "Account created",
        description: `Your ${userType} account has been created successfully.`,
      });

      if (userType === "influencer") {
        router.push(`/influencers/${userId}`);
      } else {
        router.push(`/brands/${userId}`);
      }
    } catch (error) {
      console.error("Error creating user:", error);
      toast({
        title: "Error",
        description: "Failed to create user. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[url('/space-background.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-purple-900/70 backdrop-blur-sm"></div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-4xl px-4"
      >
        <Card className="bg-purple-800/50 border-purple-500/30 shadow-2xl backdrop-blur-md">
          <CardHeader className="text-center">
            <motion.div
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <CardTitle className="text-4xl font-bold text-white mb-2">
                Choose Your Cosmic Path
              </CardTitle>
              <CardDescription className="text-purple-200 text-lg">
                Embark on your journey as an Influencer or a Brand
              </CardDescription>
            </motion.div>
          </CardHeader>
          <CardContent className="grid gap-6 sm:grid-cols-2">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              className="relative overflow-hidden rounded-lg shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-indigo-600 opacity-75"></div>
              <Button
                onClick={() => handleSelection("influencer")}
                disabled={isLoading}
                className="relative w-full h-full py-8 bg-transparent hover:bg-purple-700/50 transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-4 text-white"
              >
                <Rocket className="w-16 h-16" />
                <span className="text-2xl font-bold">Influencer</span>
                <span className="text-sm opacity-75">
                  Launch your personal brand into the stars
                </span>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
              className="relative overflow-hidden rounded-lg shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-600 opacity-75"></div>
              <Button
                onClick={() => handleSelection("brand")}
                disabled={isLoading}
                className="relative w-full h-full py-8 bg-transparent hover:bg-indigo-700/50 transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-4 text-white"
              >
                <Building2 className="w-16 h-16" />
                <span className="text-2xl font-bold">Brand</span>
                <span className="text-sm opacity-75">
                  Establish your cosmic corporate empire
                </span>
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
      <div className="absolute bottom-4 left-4 text-white/60 text-sm">
        Welcome, {firstName}! Your journey begins here.
      </div>
    </div>
  );
}
