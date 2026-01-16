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

      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">Join Our Early Adopters</h1>
      <p className="mt-4 text-lg text-gray-600 text-center max-w-2xl mx-auto">
        We're working with forward-thinking organisations to automate their processes. 
        Be part of our launch and get <span className="font-semibold text-violet-600">preferred pricing</span>.
      </p>

      <div className="mt-12 bg-gradient-to-br from-violet-50 to-blue-50 rounded-2xl p-8 sm:p-12 border border-violet-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
            🚀 Early Adopter Benefits
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Preferential Pricing</h3>
              <p className="text-gray-600">
                Lock in early adopter rates and save on our outcome-based pricing structure.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Priority Support</h3>
              <p className="text-gray-600">
                Direct access and faster response times as we build our initial client base.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Shape Our Services</h3>
              <p className="text-gray-600">
                Your feedback directly influences how we develop our automation solutions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-3">📈</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Be Our Case Study</h3>
              <p className="text-gray-600">
                Get featured as a success story and gain exposure for your organisation.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600 mb-4">
              Limited to first <span className="font-bold text-violet-600">10 organisations</span>
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-violet-600 to-blue-600 text-white font-semibold hover:from-violet-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              Apply for Early Adopter Program
            </a>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-semibold text-gray-900 text-center mb-8">What You'll Get</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Free Assessment</h3>
            <p className="text-gray-600">
              Comprehensive analysis of your automation opportunities - normally $2,500 value
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Quick Implementation</h3>
            <p className="text-gray-600">
              Priority scheduling to get your first automation live within 2-4 weeks
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-5xl mb-4">🎓</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Team Training</h3>
            <p className="text-gray-600">
              Complimentary training session for your team on the automated processes
            </p>
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
