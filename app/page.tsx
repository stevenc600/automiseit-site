import Image from "next/image";

export default function Home() {
  return (
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 max-w-3xl leading-tight px-4">
            Digital & Process Automation for Australian Businesses
          </h1>
          <p className="text-lg sm:text-xl text-center text-gray-600 max-w-2xl px-4">
            Expert assessments and ongoing support. Pay only for verified value delivered.
          </p>
        </div>

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto px-4">
          <a
            href="/digitalassessment"
            className="w-full sm:w-auto px-8 py-4 rounded-lg bg-violet-600 text-white font-semibold text-lg hover:bg-violet-700 transition-colors shadow-lg hover:shadow-xl text-center"
          >
            Get Your Assessment
          </a>
          <a
            href="/contact"
            className="w-full sm:w-auto px-8 py-4 rounded-lg border-2 border-violet-600 text-violet-600 font-semibold text-lg hover:bg-violet-50 transition-colors text-center"
          >
            Contact Us
          </a>
        </div>

        {/* Key Benefits */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 w-full mt-4 sm:mt-8 px-4">
          <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-md">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Outcome-Based</h3>
            <p className="text-gray-600">Pay ongoing fees only based on verified value delivered</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-md">
            <div className="text-4xl mb-4">🇦🇺</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">100% Australian</h3>
            <p className="text-gray-600">Real people, ready to help with local support</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-md sm:col-span-2 md:col-span-1">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Practical Solutions</h3>
            <p className="text-gray-600">Automation and EUC support for medium-sized organisations</p>
          </div>
        </div>
      </main>
    </div>
  );
}
