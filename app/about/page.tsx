import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About AutomiseIT - Australian Automation & EUC Support",
  description: "Learn about AutomiseIT's outcome-based approach to digital automation and end user computing support for Australian medium-sized organisations.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 sm:px-6 py-12 sm:py-16">
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

      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">About AutomiseIT</h1>
      
      <div className="mt-8 space-y-6 text-gray-700 leading-relaxed">
        <p className="text-lg">
          AutomiseIT helps medium-sized Australian organisations improve efficiency and reduce costs 
          through practical digital and process automation solutions.
        </p>

        <div className="bg-violet-50 border-l-4 border-violet-600 p-6 my-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Our Unique Approach</h2>
          <p className="text-gray-700">
            We only charge ongoing fees based on verified value delivered. This means you pay for results, 
            not just promises. Our assessments identify opportunities, and we stand behind our recommendations.
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">What We Do</h2>
        
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-lg font-semibold text-violet-600 mb-2">Digital Assessments</h3>
            <p className="text-gray-600">
              Comprehensive evaluation of your current processes and systems to identify automation 
              opportunities that deliver real value.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-lg font-semibold text-violet-600 mb-2">End User Computing Support</h3>
            <p className="text-gray-600">
              Practical, hands-on support for your team's day-to-day technology needs, from 
              troubleshooting to optimization.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-lg font-semibold text-violet-600 mb-2">Process Automation</h3>
            <p className="text-gray-600">
              Implementation of automation solutions that streamline workflows, reduce manual work, 
              and eliminate repetitive tasks.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-lg font-semibold text-violet-600 mb-2">Ongoing Support</h3>
            <p className="text-gray-600">
              Continuous optimization and support to ensure your automation solutions continue 
              delivering value as your business evolves.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">Why Choose AutomiseIT</h2>
        
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-violet-600 font-bold mr-3">✓</span>
            <span><strong>100% Australian-based:</strong> Local support from people who understand Australian business.</span>
          </li>
          <li className="flex items-start">
            <span className="text-violet-600 font-bold mr-3">✓</span>
            <span><strong>Outcome-based pricing:</strong> Pay ongoing fees only for verified value delivered.</span>
          </li>
          <li className="flex items-start">
            <span className="text-violet-600 font-bold mr-3">✓</span>
            <span><strong>Medium-sized business focus:</strong> Solutions tailored for organizations of your size and complexity.</span>
          </li>
          <li className="flex items-start">
            <span className="text-violet-600 font-bold mr-3">✓</span>
            <span><strong>Practical approach:</strong> No buzzwords or overselling—just real solutions that work.</span>
          </li>
          <li className="flex items-start">
            <span className="text-violet-600 font-bold mr-3">✓</span>
            <span><strong>Experienced leadership:</strong> Led by Steve Congdon with deep expertise in automation and EUC support.</span>
          </li>
        </ul>

        <div className="bg-gray-50 p-8 rounded-lg mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Get Started</h2>
          <p className="text-gray-700 mb-6">
            Ready to explore how automation can benefit your organisation? Start with a free digital assessment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/digitalassessment"
              className="inline-block px-6 py-3 rounded-lg bg-violet-600 text-white font-semibold hover:bg-violet-700 transition-colors text-center"
            >
              Request Assessment
            </a>
            <a
              href="/contact"
              className="inline-block px-6 py-3 rounded-lg border-2 border-violet-600 text-violet-600 font-semibold hover:bg-violet-50 transition-colors text-center"
            >
              Contact Steve
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
