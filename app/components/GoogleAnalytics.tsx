// Google Analytics component
// To use: Get your GA4 measurement ID from Google Analytics
// Then uncomment the code below and add it to your layout.tsx

'use client';

import Script from 'next/script';

export default function GoogleAnalytics({ measurementId }: { measurementId: string }) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${measurementId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}

// To activate:
// 1. Get your GA4 Measurement ID (format: G-XXXXXXXXXX) from Google Analytics
// 2. Add to .env.local: NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
// 3. Import and add to layout.tsx:
//    import GoogleAnalytics from './components/GoogleAnalytics';
//    
//    Then in the body:
//    {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
//      <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
//    )}
