import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Navbar />
      <main className="min-h-screen">
        <Component {...pageProps} />
      </main>
      <Footer />
      <CartDrawer />
    </CartProvider>
  );
}
