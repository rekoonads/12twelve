"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";

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
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Choose Your Dashboard</CardTitle>
          <CardDescription>
            Select the type of account you want to use
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <Button
            onClick={() => handleSelection("influencer")}
            disabled={isLoading}
            className="w-full"
          >
            Influencer Dashboard
          </Button>
          <Button
            onClick={() => handleSelection("brand")}
            disabled={isLoading}
            variant="outline"
            className="w-full"
          >
            Brand Dashboard
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
