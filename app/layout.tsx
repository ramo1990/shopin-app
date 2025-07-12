import type { Metadata } from "next";
import "./globals.css";
import { Ubuntu } from 'next/font/google';
import Footer from "@/components/footer/Footer";
import NavBarContainer from "@/components/navbar/NavBarcontainer";
import NavBarcontainer from "@/components/navbar/NavBarcontainer";
import { CartProvider } from "@/context/CartContext";
import Providers from "./providers";

const ubuntu = Ubuntu({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
})
export const metadata: Metadata = {
  // title: "Create Next App",
  title: "Shopin",
  description: "Achat de produits en ligne",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <Providers>
          <main className="w-full">
            <NavBarcontainer />
            <div className='h-2' />
            {children}
            <div className='h-10' />
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
