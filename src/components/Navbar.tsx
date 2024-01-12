"use client";
import LoginButton from "./login-button";
import { SessionProvider } from "next-auth/react";

export default function Navbar() {
  return (
    <SessionProvider>
      <LoginButton />
    </SessionProvider>
  );
}
