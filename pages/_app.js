import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import localFont from "@next/font/local";

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
      path: "../public/fonts/GeneralSans-SemiBold.ttf",
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

export default function App({ Component, pageProps }) {
  return (
    <div className={generalSans.variable}>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}
