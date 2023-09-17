import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { useEffect } from "react";
import NextProgress from "next-progress";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  useEffect(() => {
    if (localStorage.getItem("cartVersion") === null) {
      localStorage.setItem("cart", JSON.stringify([]));
      localStorage.setItem("cartVersion", "1.0.0");
    } else {
      if (localStorage.getItem("cartVersion") !== "1.0.0") {
        localStorage.setItem("cart", JSON.stringify([]));
        localStorage.setItem("cartVersion", "1.0.0");
      }
    }
  }, []);

  return (
    <SessionProvider session={session}>
      <NextProgress delay={300} options={{ showSpinner: false }} />
      <Layout>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </Layout>
    </SessionProvider>
  );
}
