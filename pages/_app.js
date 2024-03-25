import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { useEffect, useState } from "react";
import NextProgress from "next-progress";
import GlobalState from "@/context/GLobalStates";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const [doorColors, setDoorColors] = useState([]);

  const refreshDoorColors = async () => {
    const response = await fetch("/api/door/get");
    const { doors, success } = await response.json();
    success && setDoorColors(doors);
  };

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
    refreshDoorColors();
  }, []);

  return (
    <GlobalState.Provider
      value={{
        doorColors,
        refreshDoorColors,
      }}
    >
      {/* <SessionProvider session={session}>
        <NextProgress delay={300} options={{ showSpinner: false }} />
        <Layout>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </Layout>
      </SessionProvider> */}
      Error. Please try again later.
    </GlobalState.Provider>
  );
}
