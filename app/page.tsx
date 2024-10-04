"use client";

import { useUser } from "@auth0/nextjs-auth0/client";

export default function Home() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <a href="/api/auth/login">Login</a>
      <a href="/api/auth/logout">Logout</a>
      <div>
        <img src={user?.picture as string} alt={user?.name as string} />
        <h2>{user?.name}</h2>
        <p>{user?.email}</p>
      </div>
    </div>
  );
}
