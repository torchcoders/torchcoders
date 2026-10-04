"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function SplashScreen() {
  const [show, setShow] = useState(true);
  const [animateOut, setAnimateOut] = useState(false);

  useEffect(() => {
    // Hide overflow on body while splash screen is active
    document.body.style.overflow = "hidden";

    // Start fade out after 2 seconds
    const timer = setTimeout(() => {
      setAnimateOut(true);
      document.body.style.overflow = "";
    }, 2000);

    // Completely remove from DOM after 2.5 seconds
    const hideTimer = setTimeout(() => {
      setShow(false);
    }, 2500);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-[999] flex flex-col items-center justify-center bg-background transition-opacity duration-500 ease-in-out ${
        animateOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <Image
        src="/icon-animated.svg"
        alt="TorchCoders Flame"
        width={150}
        height={150}
        className="drop-shadow-2xl"
      />
    </div>
  );
}
