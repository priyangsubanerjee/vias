import React from "react";
import localFont from "@next/font/local";
import { useSession } from "next-auth/react";
import MiniCart from "./MiniCart";

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
      {children}
      <MiniCart />
    </div>
  );
}

export default Layout;
