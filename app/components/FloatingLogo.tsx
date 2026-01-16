'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function FloatingLogo() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show logo after scrolling down 200px
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <Link
      href="/"
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
    >
      <div className="bg-white rounded-full shadow-2xl p-3 hover:scale-110 hover:shadow-3xl transition-all duration-300 border-2 border-violet-100">
        <Image
          src="/automiseit-logo.svg"
          alt="AutomiseIT - Back to Home"
          width={120}
          height={36}
          className="h-9 w-auto"
        />
      </div>
    </Link>
  );
}
