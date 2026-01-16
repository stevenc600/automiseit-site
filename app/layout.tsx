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
      <body className="text-gray-900">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
