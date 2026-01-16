import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingLogo from "./components/FloatingLogo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL('https://automiseit.com.au'),
  title: {
    default: "AutomiseIT - Digital & Process Automation Assessments",
    template: "%s | AutomiseIT"
  },
  description: "Digital and process automation assessments for medium-sized organisations. 100% Australian-based support with outcome-based pricing.",
  keywords: [
    'automation',
    'digital transformation',
    'process automation',
    'RPA',
    'workflow automation',
    'business process automation',
    'Australian IT consulting',
    'EUC support',
    'end user computing',
    'digital assessment',
    'Melbourne automation',
    'Australian automation services'
  ],
  authors: [{ name: 'Steve Congdon' }],
  creator: 'AutomiseIT',
  publisher: 'AutomiseIT',
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://automiseit.com.au',
    siteName: 'AutomiseIT',
    title: 'AutomiseIT - Digital & Process Automation Assessments',
    description: 'Digital and process automation assessments for medium-sized organisations. 100% Australian-based support with outcome-based pricing.',
    images: [
      {
        url: '/automiseit-logo.svg',
        width: 400,
        height: 120,
        alt: 'AutomiseIT Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AutomiseIT - Digital & Process Automation',
    description: 'Australian automation consulting with outcome-based pricing',
    images: ['/automiseit-logo.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your Google Search Console verification code here when you get it
    // google: 'your-verification-code',
  },
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
        <FloatingLogo />
      </body>
    </html>
  );
}
