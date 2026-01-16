import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AutomiseIT - Digital & Process Automation Assessments",
  description: "Digital and process automation assessments for medium-sized organisations. 100% Australian-based support with outcome-based pricing.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon-192.png" type="image/png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="text-gray-900">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
