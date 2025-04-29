"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";

export default function AuthCallback() {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const router = useRouter();

  useEffect(() => {
    if (!code) return;

    const fetchToken = async () => {
      try {
        const response = await axios.post("/api/auth/callback", { code });
        const token = response.data.access_token;

        if (token) {
          localStorage.setItem("github_token", token);
          router.push("/profile");
        }
      } catch (error) {
        console.error("Ошибка получения токена:", error);
      }
    };

    fetchToken();
  }, [code]);

  return <p>Авторизация через GitHub...</p>;
}
