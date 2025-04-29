export const getGitHubOAuthUrl = () => {
  const clientId = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID; // через NEXT_PUBLIC_
  const redirectUri = "http://localhost:3000/auth/callback"; // не /api
  return `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}`;
};
