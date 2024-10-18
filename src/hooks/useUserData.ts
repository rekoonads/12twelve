"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@clerk/nextjs";

interface UserData {
  userId: string;
  userType: "influencer" | "brand" | null;
  firstName: string;
  lastName: string;
  email: string;
  // Add other user properties as needed
}

export function useUserData() {
  const { userId } = useAuth();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  useEffect(() => {
    async function fetchUserData() {
      if (!userId) {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `${backendUrl}/api/get-user?userId=${userId}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setUserData(data);
      } catch (err) {
        console.error("Error fetching user data:", err);
        setError(
          err instanceof Error
            ? err
            : new Error("An error occurred while fetching user data")
        );
      } finally {
        setLoading(false);
      }
    }

    fetchUserData();
  }, [userId, backendUrl]);

  return { userData, loading, error };
}
