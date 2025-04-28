"use client";

import { getGitHubOAuthUrl } from "@/utils/getGitHubOAuthUrl";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const handleLogin = () => {
    window.location.href = getGitHubOAuthUrl();
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Button onClick={handleLogin}>Войти через GitHub</Button>
    </div>
  );
}
