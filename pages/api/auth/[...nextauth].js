import connectDatabase from "@/db/dbConnect";
import users from "@/db/models/users";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      httpOptions: {
        timeout: 80000,
      },
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        const { credential, password } = credentials;
        console.log("Credentials received", credentials);
        await connectDatabase();
        let existingUser = await users.findOne({ email: credential });

        if (!existingUser) {
          existingUser = await users.findOne({ phone: credential });

          if (!existingUser) {
            return null;
          }
        }
        let match = await bcrypt.compare(password, existingUser.password);

        if (match) {
          return {
            email: existingUser.email,
            name: existingUser.name,
          };
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, user, token }) {
      if (!session) return;
      await connectDatabase();

      let existingUser = await users.findOne({
        email: session.user.email,
      });

      if (!existingUser) {
        console.log("No user found");
        let existingUser = new users({
          name: session.user.name,
          email: session.user.email,
        });
        await existingUser.save();
        existingUser = await users.findOne({
          email: session.user.email,
        });
      }

      return {
        ...session,
        user: {
          ...session.user,
          email: existingUser.email,
          name: existingUser.name,
        },
      };
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.SECRET_SALT,
};

export default NextAuth(authOptions);
