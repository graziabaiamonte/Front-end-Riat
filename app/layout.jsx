"use client";
import { useEffect, useRef, Suspense } from "react";
import Footer from "./components/Footer";
import NavHome from "./components/NavHome";
import Nav from "./components/Nav";
import { usePathname } from "next/navigation";
import "./globals.css";
import Lenis from 'lenis';
import Link from "next/link";
import CookieConsent from 'react-cookie-consent';
import Head from "next/head";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const lenisRef = useRef(null);

  useEffect(() => {
    // Inizializza Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    // Reset scroll to top on pathname change
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true, force: true });
    }
  }, [pathname]);

  return (
    <html lang="it">
      <Head>
      <link rel="icon" href="/favicon.ico"  type="image/x-icon" sizes="16x16"/>
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png"/>
      </Head>
      <body>
        {pathname === "/" ? <NavHome /> : <Nav />}
          {children}
        <CookieConsent
          location="bottom"
          buttonText="Accetta"
          cookieName="cookieConsent"
          style={{ background: "#2B373B" }}
          buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
          expires={150}
        >
          Questo sito utilizza i cookie per offrirti la migliore esperienza possibile. 
          Cliccando su "Accetta" acconsenti all'uso dei cookie. 
          Per maggiori dettagli, consulta la nostra <Link href="/CookiePolicy" style={{ color: '#fff', textDecoration: 'underline' }}>Cookie Policy</Link>.
        </CookieConsent>
        <Footer />
      </body>
    </html>
  );
}
