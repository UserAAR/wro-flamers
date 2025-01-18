import { credentialsAuth as Credentials } from "./credentials";
import { AuthOptions } from "next-auth";
import { Users } from "@/models";

export const authOptions: AuthOptions = {
  secret: process.env.AUTH_SECRET,
  debug: true,
  providers: [Credentials],
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60,
    updateAge: 0,
  },
  callbacks: {
    session: async ({ session, token }) => {
      const _user = await Users.findOne({ email: token.email });
      if (!_user) {
        (session as any)._destroy = true;
        session.user = null;
      } else {
        session.user = _user;
      }

      return session;
    },
    signIn: async ({ user, account }) => {
      console.log(user);
      return true;
    },
  },
  pages: {
    signIn: "/auth/login",
  },
};
