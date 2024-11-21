import { Inter } from "next/font/google";
import ContextWrapper from "./contextWrapper.jsx";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Faculties-O-MediCaps",
  description: "Medicaps faculties data",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex flex-col min-h-screen bg-primary text-light`}
      >
        <ContextWrapper>{children}</ContextWrapper>
      </body>
    </html>
  );
}
