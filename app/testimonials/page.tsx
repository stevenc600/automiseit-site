import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Client Success Stories - AutomiseIT Testimonials",
  description: "Read how AutomiseIT has helped Australian organisations improve efficiency through digital automation and EUC support.",
};

export default function TestimonialsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
      {/* Logo */}
      <div className="flex justify-center mb-8">
        <Image
          src="/automiseit-logo.svg"
          alt="AutomiseIT"
          width={300}
          height={90}
          priority
          className="h-16 w-auto"
        />
      </div>

      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">Client Success Stories</h1>
      <p className="mt-4 text-lg text-gray-600 text-center max-w-2xl mx-auto">
        See how we've helped Australian organisations improve efficiency and reduce costs.
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {/* Placeholder testimonials - replace with real ones when available */}
        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 text-2xl font-bold">
              ?
            </div>
            <div>
              <div className="font-semibold text-gray-900">Your Company Name</div>
              <div className="text-sm text-gray-600">Industry</div>
            </div>
          </div>
          <p className="text-gray-700 italic mb-4">
            "Your testimonial will appear here once you've delivered value to your first clients."
          </p>
          <div className="text-sm text-gray-600">
            — Client Name, Position
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 text-2xl font-bold">
              ?
            </div>
            <div>
              <div className="font-semibold text-gray-900">Another Company</div>
              <div className="text-sm text-gray-600">Industry</div>
            </div>
          </div>
          <p className="text-gray-700 italic mb-4">
            "Success stories from satisfied clients will build credibility and trust."
          </p>
          <div className="text-sm text-gray-600">
            — Client Name, Position
          </div>
        </div>
      </div>

      <div className="mt-16 bg-gray-50 p-8 rounded-lg text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Create Your Success Story?</h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Start with a complimentary digital assessment and discover how automation can benefit your organisation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/digitalassessment"
            className="inline-block px-8 py-4 rounded-lg bg-violet-600 text-white font-semibold hover:bg-violet-700 transition-colors"
          >
            Request Assessment
          </a>
          <a
            href="/contact"
            className="inline-block px-8 py-4 rounded-lg border-2 border-violet-600 text-violet-600 font-semibold hover:bg-violet-50 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </main>
  );
}
