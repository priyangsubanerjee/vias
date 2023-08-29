import connectDatabase from "@/db/dbConnect";
import users from "@/db/models/users";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      httpOptions: {
        timeout: 80000,
      },
    }),
    // CredentialsProvider({
    //   name: "credentials",
    //   credentials: {},
    //   async authorize(credentials) {
    //     const { credential, password } = credentials;
    //     console.log(credential, password);
    //     await connectDatabase();
    //     let existingUser = await users.findOne({ credential });
    //     let match = await bcrypt.compare(password, existingUser.password);
    //     if (match) {
    //       return {
    //         email: existingUser.credential,
    //       };
    //     } else {
    //       return null;
    //     }
    //   },
    // }),
  ],
  //   callbacks: {
  //     async session({ session, user, token }) {
  //       console.log(session);
  //       if (!session) return;

  //       await connectDatabase();
  //       let existingUser = null;
  //       let type = session.user.email.includes("@") ? "email" : "phone";

  //       console.log(type);

  //       if (type === "email") {
  //         existingUser = await users.findOne({ email: session.user.email });
  //       } else if (type === "phone") {
  //         existingUser = await users.findOne({ phone: session.user.email });
  //       }

  //       console.log(existingUser);

  //       if (existingUser) {
  //         return {
  //           ...session,
  //           user: {
  //             ...session.user,
  //             name: existingUser.name,
  //             email: existingUser.email,
  //             credential: existingUser.credential,
  //             id: existingUser._id,
  //           },
  //         };
  //       } else {
  //         let salts = bcrypt.genSaltSync(10);
  //         let random6Digitpassword = Math.floor(100000 + Math.random() * 900000);
  //         let hash = bcrypt.hashSync(random6Digitpassword.toString(), salts);
  //         let nUser = await users.create({
  //           name: session.user.name,
  //           email: session.user.email.includes("@") ? session.user.email : null,
  //           phone: session.user.email.includes("@") ? null : session.user.email,
  //           credential: session.user.email,
  //           password: hash,
  //           phone: null,
  //         });

  //         return {
  //           ...session,
  //           user: {
  //             ...session.user,
  //             name: session.user.name,
  //             credential: session.user.email,
  //             id: nUser._id,
  //           },
  //         };
  //       }
  //     },
  //   },
  secret: process.env.SECRET_SALT,
};

export default NextAuth(authOptions);
