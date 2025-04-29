import { cookies } from "next/headers";

export default function ProfilePage() {
  const cookieStore = cookies();
  const token = cookieStore.get("github_token")?.value;

  return (
    <div>
      <h1>Профиль</h1>
      <p>Твой GitHub токен (с сервера): {token ? "✔️ есть" : "❌ нет"}</p>
    </div>
  );
}
