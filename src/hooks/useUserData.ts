"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@clerk/nextjs";

interface UserData {
  userId: string;
  userType: string;
  // Add other user properties as needed
}

export function useUserData() {
  const { userId } = useAuth();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  useEffect(() => {
    if (userId) {
      fetch(`${backendUrl}/get-user?userId=${userId}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch user data");
          }
          return response.json();
        })
        .then((data) => {
          setUserData(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [userId]);

  return { userData, loading, error };
}
