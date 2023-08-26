import dotenv from "dotenv";
dotenv.config();

import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const googleId = process.env.GOOGLE_ID;
if (googleId === undefined) {
  throw new Error("Missing env.GOOGLE_ID");
}

const googleSecret = process.env.GOOGLE_SECRET;
if (googleSecret === undefined) {
  throw new Error("Missing env.GOOGLE_SECRET");
}

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export const authOptions: NextAuthOptions = {
  debug: true,
  // https://next-auth.js.org/configuration/providers/oauth
  providers: [
    GoogleProvider.default({
      clientId: googleId,
      clientSecret: googleSecret,
      authorizationUrl:
        "https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code",
    }),
  ],
};

export default NextAuth.default(authOptions);
