"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { JOIN_URL } from "@/lib/config";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/apropos", label: "À propos" },
  { href: "/projets", label: "Projets" },
  { href: "/equipe", label: "Équipe" },
  { href: "/actualites", label: "Actualités" },
  { href: "/adhesion", label: "Adhésion" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  // Close menu on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed z-[100] bottom-6 right-6 md:bottom-10 md:right-10 w-16 h-16 rounded-full bg-primary text-white shadow-2xl flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
        aria-label="Menu de navigation"
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Floating Menu Backdrop */}
      <div 
        className={`fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Floating Menu Nav */}
      <nav
        className={`fixed z-[95] bottom-28 right-6 md:bottom-32 md:right-10 bg-[var(--card)] border border-white/10 rounded-2xl shadow-2xl p-4 min-w-[220px] flex flex-col gap-2 transition-all duration-300 transform origin-bottom-right ${
          open ? "scale-100 opacity-100" : "scale-50 opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="px-4 py-3 rounded-lg text-[1.05rem] font-medium hover:bg-white/10 transition-colors"
          >
            {link.label}
          </Link>
        ))}
        <div className="h-px bg-white/10 my-2" />
        <a
          href={JOIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
          className="px-4 py-3 rounded-lg text-[1.05rem] font-semibold text-primary hover:bg-primary/10 transition-colors text-center"
        >
          Rejoindre le club
        </a>
      </nav>
    </>
  );
}
