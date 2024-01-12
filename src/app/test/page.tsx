"use client";

import { SessionProvider, useSession } from "next-auth/react";
import { ReactElement } from "react";
import useSWR from "swr";
const fetcher = (url: string) => fetch(url).then((r) => r.json());
export default function HomePage() {
  const { data, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/posts/1",
    fetcher
  );
  if (isLoading) return <>Loading...</>;

  return (
    <SessionProvider>
      <Auth>
        <p>
          Hey
          <br />
          {JSON.stringify(data)}
        </p>
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
