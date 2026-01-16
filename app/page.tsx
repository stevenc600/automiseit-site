import Image from "next/image";
import Link from "next/link";

export default function Home() {
  // Structured data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'AutomiseIT',
    description: 'Digital and process automation assessments for medium-sized Australian organisations',
    url: 'https://automiseit.com.au',
    telephone: '+61411013193',
    email: 'Steve.Congdon@automiseit.com.au',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'AU',
    },
    founder: {
      '@type': 'Person',
      name: 'Steve Congdon',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Australia',
    },
    priceRange: 'Outcome-based pricing',
    serviceType: ['Process Automation', 'Digital Assessment', 'End User Computing Support'],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-violet-50 via-white to-blue-50">
      <main className="flex w-full max-w-5xl flex-col items-center gap-12 sm:gap-16 px-4 sm:px-6 py-12 sm:py-20">
        {/* Prominent Logo */}
        <div className="flex flex-col items-center gap-6 sm:gap-8">
          <Image
            src="/automiseit-logo.svg"
            alt="AutomiseIT"
            width={400}
            height={120}
            priority
            className="w-full max-w-xs sm:max-w-md h-auto"
          />
          
          {/* Launch Badge */}
          <Link 
            href="/testimonials"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-600 to-blue-600 text-white rounded-full text-sm font-semibold shadow-lg hover:from-violet-700 hover:to-blue-700 transition-all hover:scale-105 cursor-pointer"
          >
            <span className="text-lg">🚀</span>
            <span>Launching 2026 • Early Adopter Pricing Available</span>
          </Link>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 max-w-3xl leading-tight px-4">
            <span className="bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
              Digital & Process Automation
            </span>
            {" "}for Australian Organisations
          </h1>
          <p className="text-lg sm:text-xl text-center text-gray-600 max-w-2xl px-4">
            Expert assessments and ongoing support. <span className="font-semibold text-violet-600">Pay only for verified and agreed value delivered.</span>
          </p>
        </div>

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto px-4">
          <a
            href="/digitalassessment"
            className="w-full sm:w-auto px-8 py-4 rounded-lg bg-violet-600 text-white font-semibold text-lg hover:bg-violet-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl text-center"
          >
            Get Your Assessment
          </a>
          <a
            href="/contact"
            className="w-full sm:w-auto px-8 py-4 rounded-lg border-2 border-violet-600 text-violet-600 font-semibold text-lg hover:bg-violet-50 hover:scale-105 transition-all duration-300 text-center"
          >
            Contact Us
          </a>
        </div>

        {/* Key Benefits */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 w-full mt-4 sm:mt-8 px-4">
          <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Outcome-Based</h3>
            <p className="text-gray-600">Pay ongoing fees only based on verified and agreed value delivered</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl mb-4">🇦🇺</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">100% Australian</h3>
            <p className="text-gray-600">Real people, ready to help with local support</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-md hover:shadow-xl transition-shadow duration-300 sm:col-span-2 md:col-span-1">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Practical Solutions</h3>
            <p className="text-gray-600">Automation and EUC support for medium-sized organisations</p>
          </div>
        </div>

        {/* Trust Indicators - NEW */}
        <div className="w-full mt-12 px-4">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="group cursor-default">
                <div className="text-4xl font-bold text-violet-600 mb-1 group-hover:scale-110 transition-transform">10+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="group cursor-default">
                <div className="text-4xl font-bold text-violet-600 mb-1 group-hover:scale-110 transition-transform">100%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
              <div className="group cursor-default">
                <div className="text-4xl font-bold text-violet-600 mb-1 group-hover:scale-110 transition-transform">30+</div>
                <div className="text-sm text-gray-600">Hours Saved/Week</div>
              </div>
              <div className="group cursor-default">
                <div className="text-4xl font-bold text-violet-600 mb-1 group-hover:scale-110 transition-transform">AU</div>
                <div className="text-sm text-gray-600">Based & Operated</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    </>
  );
}
