import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "End User Computing Support - Australian IT Help | AutomiseIT",
  description: "Practical EUC support for your team's day-to-day technology needs. 100% Australian-based, responsive support from real people.",
};

export default function EndUserSupportPage() {
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

      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">End User Computing Support</h1>
      <p className="mt-4 text-lg sm:text-xl text-gray-600">
        Practical, hands-on technology support for your team's day-to-day needs.
      </p>

      <div className="mt-12 bg-blue-50 border-l-4 border-blue-600 p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Real People, Ready to Help</h2>
        <p className="text-gray-700">
          Our EUC support provides your team with responsive, knowledgeable assistance for their 
          technology needs—from troubleshooting to optimization. 100% Australian-based support 
          means we understand your business environment and time zone.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">What We Support</h2>
        
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="text-3xl mb-3">💻</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Desktop Applications</h3>
            <p className="text-gray-600">
              Microsoft Office, business applications, software installation, and configuration support.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="text-3xl mb-3">📊</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Spreadsheet Automation</h3>
            <p className="text-gray-600">
              Excel macros, formulas, data processing, and dashboard creation to save time and reduce errors.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="text-3xl mb-3">🔧</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Troubleshooting</h3>
            <p className="text-gray-600">
              Quick resolution of technical issues, error messages, and software problems affecting productivity.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="text-3xl mb-3">📈</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Process Optimization</h3>
            <p className="text-gray-600">
              Identifying and implementing better ways to use technology for routine tasks and workflows.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="text-3xl mb-3">🎓</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Training & Guidance</h3>
            <p className="text-gray-600">
              Helping your team learn new tools, features, and best practices for their software.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="text-3xl mb-3">🔗</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Integration Support</h3>
            <p className="text-gray-600">
              Connecting different systems and tools to streamline data flow and reduce manual work.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">Our Support Approach</h2>

        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-violet-600">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">📞 Responsive</h3>
          <p className="text-gray-600">
            Quick turnaround on support requests. We understand that technology issues impact productivity, 
            so we prioritize timely responses.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-violet-600">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">🎯 Practical</h3>
          <p className="text-gray-600">
            Solutions that work in the real world. We focus on fixing problems efficiently rather than 
            over-engineering or using unnecessary technical jargon.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-violet-600">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">🇦🇺 Local</h3>
          <p className="text-gray-600">
            Australian-based support means no language barriers, same time zone, and understanding 
            of local business practices and systems.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-violet-600">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">💡 Proactive</h3>
          <p className="text-gray-600">
            We don't just fix problems—we identify opportunities to prevent future issues and 
            improve your team's efficiency.
          </p>
        </div>
      </div>

      <div className="mt-12 bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Get Support</h2>
        <p className="text-gray-700 mb-6">
          Contact Steve Congdon to discuss your end user computing support needs and how we can 
          help your team work more efficiently.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="/contact"
            className="inline-block px-8 py-4 rounded-lg bg-violet-600 text-white font-semibold hover:bg-violet-700 transition-colors text-center"
          >
            Contact Us
          </a>
          <a
            href="tel:0411013193"
            className="inline-block px-8 py-4 rounded-lg border-2 border-violet-600 text-violet-600 font-semibold hover:bg-violet-50 transition-colors text-center"
          >
            Call 0411 013 193
          </a>
        </div>
        <p className="mt-6 text-sm text-gray-600">
          Email: <a href="mailto:Steve.Congdon@automiseit.com.au" className="text-violet-600 hover:underline">Steve.Congdon@automiseit.com.au</a>
        </p>
      </div>
    </main>
  );
}
