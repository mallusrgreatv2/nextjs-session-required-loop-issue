import { useSession, signIn, signOut } from "next-auth/react";
export default function LoginButton() {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <div>
        {session.user.id}
        <button onClick={() => signOut()} className="m-1 mt-0">
          Sign out
        </button>
      </div>
    );
  }
  return <button onClick={() => signIn("credentials")}>Sign in</button>;
}
