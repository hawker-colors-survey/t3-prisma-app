import { type GetServerSidePropsContext } from "next";
import {
  getServerSession,
  type NextAuthOptions,
  type DefaultSession,
  type User,
  type Profile,
} from "next-auth";
import { type JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

import { env } from "~/src/env.mjs";
import { prisma } from "~/src/server/db";
import { randomUUID } from "crypto";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: User & DefaultSession["user"];
  }
}

async function syncGuestUser({
  profile,
  token,
}: {
  token: JWT;
  profile: Profile;
}) {
  const data = { name: profile.name, email: profile.email };
  const foundUser = await prisma.user.update({
    where: { email: token.email || "" },
    data,
  });

  await prisma.account.deleteMany({
    where: { userId: foundUser.id, provider: "email" },
  });
}

export const authOptions: NextAuthOptions = {
  callbacks: {
    async jwt({ token, account, profile = {} }) {
      if (account?.provider === "google" && token.name === "Guest User") {
        if (profile.email && profile.name) {
          // if token is out of sync with google account
          await syncGuestUser({ token, profile });
        }

        return {
          name: profile.name || "",
          email: profile.email || "",
          sub: profile.sub || "",
        };
      }
      return token;
    },
    session({ session, token }) {
      if (!token) return session;
      return {
        ...session,
        user: {
          name: token.name || "",
          email: token.email || "",
        },
      };
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 3 * 60 * 60,
  },
  jwt: { maxAge: 3 * 60 * 60 },
  adapter: PrismaAdapter(prisma),
  pages: {
    signIn: "/auth/signin",
  },
  providers: [
    CredentialsProvider({
      credentials: {},
      async authorize(credentials) {
        const { email = "" } = credentials as { email: string };

        if (Boolean(email)) {
          const user = await prisma.user.findFirst({ where: { email } });
          if (user) return user;
        }

        const anonymousAccount = await prisma.user.create({
          data: { email: `${randomUUID()}@example.com`, name: "Guest User" },
        });
        await prisma.account.create({
          data: {
            userId: anonymousAccount.id,
            type: "",
            provider: "email",
            providerAccountId: randomUUID(),
          },
        });

        return anonymousAccount;
      },
    }),
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
  ],
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["res"];
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions);
};
