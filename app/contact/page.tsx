"use client";

import Image from "next/image";
import { useState, FormEvent } from "react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      company: formData.get('company'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
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
        <form onSubmit={handleSubmit} className="space-y-4 rounded-lg border border-gray-200 p-6">
          <div>
            <label htmlFor="name" className="text-sm font-medium">Name *</label>
            <input 
              id="name" 
              name="name" 
              required
              className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500" 
            />
          </div>
          <div>
            <label htmlFor="company" className="text-sm font-medium">Company</label>
            <input 
              id="company" 
              name="company" 
              className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500" 
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-medium">Email *</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-sm font-medium">Message *</label>
            <textarea 
              id="message" 
              name="message" 
              required
              className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500" 
              rows={5} 
            />
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-md bg-violet-600 px-4 py-2 text-sm font-semibold text-white hover:bg-violet-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>

          {submitStatus === 'success' && (
            <div className="rounded-md bg-green-50 border border-green-200 p-4">
              <p className="text-sm text-green-800">
                 Message sent successfully! We will get back to you soon.
              </p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="rounded-md bg-red-50 border border-red-200 p-4">
              <p className="text-sm text-red-800">
                 Failed to send message. Please try again or email us directly.
              </p>
            </div>
          )}
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
