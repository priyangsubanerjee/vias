import connectDatabase from "@/db/dbConnect";
import users from "@/db/models/users";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      httpOptions: {
        timeout: 80000,
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.SECRET_SALT,
};

export default NextAuth(authOptions);
