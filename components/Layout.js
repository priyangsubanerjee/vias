import React from "react";
import localFont from "@next/font/local";
import { useSession } from "next-auth/react";

const generalSans = localFont({
  src: [
    {
      path: "../public/fonts/GeneralSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/GeneralSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/GeneralSans-Semibold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/GeneralSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-general",
});

function Layout({ children }) {
  const session = useSession();
  return (
    <div className={generalSans.variable}>
      <div className="bg-yellow-100 fixed right-0 top-1/2 p-3 z-20">
        <p>{session.status}</p>
        <p>{session.data?.user.email}</p>
        <p>{session.data?.user.id}</p>
      </div>
      {children}
    </div>
  );
}

export default Layout;
