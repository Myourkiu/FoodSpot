import type { Metadata } from "next";
import { Poppins } from 'next/font/google'
import "./globals.css";
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "700", "800", "900", ],
});

export const metadata: Metadata = {
  title: "FoodSpot",
  description: "A new way to get delivery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`antialiased ${poppins.className} bg-bgColor`}
      >
        {children}
        <ToastContainer autoClose={3000} />
      </body>
    </html>
  );
}
