import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "@/utils/db";
import bcryptjs from "bcryptjs";
import NextAuth from "next-auth/next";
const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {
        username: { label: "username", type: "text", placeholder: "Username" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(credentials: any) {
        const { username, password } = credentials as {
          username: string;
          password: string;
        };

        const user = await db.user.findUnique({
          where: {
            username,
          },
        });

        if (!user) {
          return null;
        }

        const isMatch = await bcryptjs.compare(password, user.password);

        if (!isMatch) {
          return null;
        }

        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile, user }: any) {
      if (account?.provider === "credentials") {
        token.id = user.id;
        token.name = user.name;
        token.username = user.username;
      }

      return token;
    },

    async session({ session, token }: any) {
      if ("username" in token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.username = token.username;
      }
      return session;
    },
  },
  pages: {
    signIn: "/sign-in",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
