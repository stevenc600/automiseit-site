import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Digital Assessment - Free Process Automation Evaluation | AutomiseIT",
  description: "Get a complimentary digital assessment to identify automation opportunities in your organisation. Ongoing fees only based on verified value delivered.",
};

export default function DigitalAssessmentPage() {
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

      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Digital Assessment</h1>
      <p className="mt-4 text-lg sm:text-xl text-gray-600">
        Discover automation opportunities that deliver real value to your organisation.
      </p>

      <div className="mt-12 bg-violet-50 border-l-4 border-violet-600 p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">What You'll Get</h2>
        <p className="text-gray-700 mb-4">
          Our comprehensive digital assessment identifies specific opportunities to improve efficiency, 
          reduce costs, and eliminate manual work in your organisation.
        </p>
        <p className="text-lg font-semibold text-violet-600">
          Initial assessment is complimentary. Ongoing fees only apply based on verified value delivered.
        </p>
      </div>

      <div className="mt-12 space-y-8">
        <h2 className="text-2xl font-semibold text-gray-900">Assessment Process</h2>

        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-violet-600 text-white flex items-center justify-center font-bold text-lg">
              1
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Initial Consultation</h3>
              <p className="text-gray-600">
                We discuss your organisation's current processes, pain points, and goals. This helps us 
                understand where automation can provide the most value.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-violet-600 text-white flex items-center justify-center font-bold text-lg">
              2
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Process Analysis</h3>
              <p className="text-gray-600">
                We evaluate your workflows, systems, and data to identify specific automation opportunities. 
                This includes reviewing repetitive tasks, manual data entry, and integration possibilities.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-violet-600 text-white flex items-center justify-center font-bold text-lg">
              3
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Value Assessment</h3>
              <p className="text-gray-600">
                For each opportunity identified, we estimate the potential time savings, cost reduction, 
                and quality improvements. We're transparent about what's achievable.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-violet-600 text-white flex items-center justify-center font-bold text-lg">
              4
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Recommendations Report</h3>
              <p className="text-gray-600">
                You receive a clear, actionable report prioritizing automation opportunities by 
                expected ROI and implementation complexity.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-violet-600 text-white flex items-center justify-center font-bold text-lg">
              5
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Implementation Planning</h3>
              <p className="text-gray-600">
                If you choose to proceed, we create a detailed implementation plan with milestones 
                and success metrics. Ongoing fees only apply based on verified value delivered.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 grid sm:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center">
          <div className="text-3xl font-bold text-violet-600 mb-2">No Risk</div>
          <p className="text-gray-600">Initial assessment is complimentary</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center">
          <div className="text-3xl font-bold text-violet-600 mb-2">Clear ROI</div>
          <p className="text-gray-600">See the potential value before committing</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center">
          <div className="text-3xl font-bold text-violet-600 mb-2">Local Support</div>
          <p className="text-gray-600">100% Australian-based expertise</p>
        </div>
      </div>

      <div className="mt-12 bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Get Started?</h2>
        <p className="text-gray-700 mb-6">
          Contact Steve Congdon to schedule your complimentary digital assessment and discover 
          how automation can benefit your organisation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="/contact"
            className="inline-block px-8 py-4 rounded-lg bg-violet-600 text-white font-semibold hover:bg-violet-700 transition-colors text-center"
          >
            Request Your Assessment
          </a>
          <a
            href="tel:0411013193"
            className="inline-block px-8 py-4 rounded-lg border-2 border-violet-600 text-violet-600 font-semibold hover:bg-violet-50 transition-colors text-center"
          >
            Call 0411 013 193
          </a>
        </div>
      </div>
    </main>
  );
}
