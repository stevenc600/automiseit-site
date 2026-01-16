import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Privacy Policy - AutomiseIT",
  description: "AutomiseIT's privacy policy outlining how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
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

      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Privacy Policy</h1>
      <p className="mt-4 text-sm text-gray-500">Last updated: January 16, 2026</p>

      <div className="mt-8 space-y-8 text-gray-700">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Introduction</h2>
          <p>
            AutomiseIT ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy 
            explains how we collect, use, disclose, and safeguard your information when you visit our website 
            or use our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Information We Collect</h2>
          <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-4">Personal Information</h3>
          <p className="mb-3">We may collect personal information that you voluntarily provide to us, including:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Name and contact information (email address, phone number)</li>
            <li>Company name and business information</li>
            <li>Communication preferences</li>
            <li>Information provided in inquiries or correspondence</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-4">Automatically Collected Information</h3>
          <p className="mb-3">When you visit our website, we may automatically collect:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>IP address</li>
            <li>Pages visited and time spent on pages</li>
            <li>Referring website addresses</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">How We Use Your Information</h2>
          <p className="mb-3">We use the information we collect to:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Respond to your inquiries and provide customer support</li>
            <li>Provide and improve our services</li>
            <li>Send you information about our services (with your consent)</li>
            <li>Analyze website usage and improve user experience</li>
            <li>Comply with legal obligations</li>
            <li>Prevent fraud and ensure security</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Information Sharing and Disclosure</h2>
          <p className="mb-3">
            We do not sell, trade, or rent your personal information to third parties. We may share your 
            information only in the following circumstances:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>With your explicit consent</li>
            <li>To comply with legal obligations or court orders</li>
            <li>To protect our rights, privacy, safety, or property</li>
            <li>With trusted service providers who assist in operating our website (subject to confidentiality agreements)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information 
            against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission 
            over the internet or electronic storage is 100% secure.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Your Rights</h2>
          <p className="mb-3">Under Australian privacy law, you have the right to:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your information (subject to legal obligations)</li>
            <li>Opt-out of marketing communications</li>
            <li>Lodge a complaint with the Australian Privacy Commissioner</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Cookies and Tracking</h2>
          <p>
            Our website may use cookies and similar tracking technologies to enhance user experience. 
            You can control cookie settings through your browser preferences.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for the privacy 
            practices of these external sites. We encourage you to review their privacy policies.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted on this page with 
            an updated "Last updated" date. Continued use of our services after changes constitutes acceptance 
            of the updated policy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Contact Us</h2>
          <p className="mb-3">
            If you have questions about this Privacy Policy or wish to exercise your privacy rights, please contact:
          </p>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="font-semibold text-gray-900">AutomiseIT</p>
            <p>Steve Congdon</p>
            <p>Email: <a href="mailto:Steve.Congdon@automiseit.com.au" className="text-violet-600 hover:underline">Steve.Congdon@automiseit.com.au</a></p>
            <p>Phone: <a href="tel:0411013193" className="text-violet-600 hover:underline">0411 013 193</a></p>
          </div>
        </section>

        <section className="border-t pt-8">
          <p className="text-sm text-gray-600">
            This privacy policy is governed by the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs).
          </p>
        </section>
      </div>
    </main>
  );
}
