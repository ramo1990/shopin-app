import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Ubuntu } from 'next/font/google';
import NavBar from '../components/navbar/NavBar'
import Footer from "@/components/footer/Footer";
import NavBarContainer from "@/components/navbar/NavBarcontainer";
import NavBarcontainer from "@/components/navbar/NavBarcontainer";

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
        <main className="w-full">
        <NavBarcontainer />
        <div className='h-2' />
        {children}
        <div className='h-10' />
        <Footer />
        </main>
      </body>
    </html>
  );
}
