import NextAuth, { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
export const authOptions: NextAuthConfig = {
  providers: [
    Credentials({
      authorize() {
        return {
          id: "signed in",
        };
      },
    }),
  ],
  secret: "test",
};
export const { auth, handlers, signIn, signOut } = NextAuth(authOptions);
