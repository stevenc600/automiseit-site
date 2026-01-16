import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact Steve Congdon - AutomiseIT | 0411 013 193",
  description: "Get in touch with AutomiseIT for digital assessments and EUC support. Call Steve Congdon on 0411 013 193 or email Steve.Congdon@automiseit.com.au",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
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

      <h1 className="text-3xl font-semibold">Contact</h1>
      <p className="mt-4 text-gray-600">
        Tell us a bit about your organisation and what you want to improve.
      </p>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <form className="space-y-4 rounded-lg border border-gray-200 p-6">
          <div>
            <label htmlFor="name" className="text-sm font-medium">Name</label>
            <input id="name" name="name" className="mt-1 w-full rounded-md border border-gray-300 p-2" />
          </div>
          <div>
            <label htmlFor="company" className="text-sm font-medium">Company</label>
            <input id="company" name="company" className="mt-1 w-full rounded-md border border-gray-300 p-2" />
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-medium">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              className="mt-1 w-full rounded-md border border-gray-300 p-2"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-sm font-medium">Message</label>
            <textarea id="message" name="message" className="mt-1 w-full rounded-md border border-gray-300 p-2" rows={5} />
          </div>
          <button
            type="submit"
            className="rounded-md bg-violet-600 px-4 py-2 text-sm font-semibold text-white hover:bg-violet-700"
          >
            Send
          </button>
          <p className="text-xs text-gray-500">
            (We’ll wire this to email later — this is the layout.)
          </p>
        </form>

        <div className="rounded-lg bg-gray-50 p-6">
          <h2 className="text-lg font-semibold">Australian-based support</h2>
          <p className="mt-2 text-sm text-gray-600">
            Real people, ready to help. Outcome-based automation and practical EUC support for
            small to medium organisations.
          </p>

          <div className="mt-6 text-sm text-gray-700">
            <div className="font-semibold">Contact</div>
            <div className="text-gray-600">Steve Congdon</div>

            <div className="mt-4 font-semibold">Email</div>
            <div className="text-gray-600">Steve.Congdon@automiseit.com.au</div>

            <div className="mt-4 font-semibold">Phone</div>
            <div className="text-gray-600">0411 013 193</div>
          </div>
        </div>
      </div>
    </main>
  );
}
