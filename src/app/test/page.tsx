"use client";

import { SessionProvider, useSession } from "next-auth/react";
import { ReactElement, useState } from "react";
export default function HomePage() {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 1000);
  if (loading) return <>Loading...</>;

  return (
    <SessionProvider>
      <Auth>
        <p>Successfully loaded</p>
      </Auth>
    </SessionProvider>
  );
}
function Auth({ children }: { children: ReactElement }) {
  const { status } = useSession({ required: true });

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return children;
}
