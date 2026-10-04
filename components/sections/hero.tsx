import Link from "next/link";
import Image from "next/image";
import { JOIN_URL } from "@/lib/config";

export function HeroSection() {
  return (
    <section id="accueil" className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/school-overview.jpg"
          alt="EST Tétouan Overview"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
      
      {/* Gradient Overlay (Dark/Solid on Left fading to Transparent on Right) */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#371D4C] via-[#371D4C]/80 to-transparent" />

      {/* Content */}
      <div className="container relative z-10 w-full">
        <div className="flex flex-col max-w-2xl py-12 md:py-24">
          
          <div className="flex items-center gap-4 mb-6">
            <Image
              src="/logo.svg"
              alt="TorchCoders Logo"
              width={64}
              height={64}
              className="drop-shadow-lg"
            />
            <p className="hero-eyebrow m-0 text-primary uppercase tracking-widest font-semibold">
              TorchCoders
            </p>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
            Concevez les agents IA de demain
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-lg">
            TorchCoders est le club officiel de l'EST Tétouan dédié aux agents
            d'intelligence artificielle. Apprenez, construisez et déployez des
            agents IA au sein d'une communauté passionnée.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a
              href={JOIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              Rejoindre le club
            </a>
            <Link href="/actualites" className="btn btn-secondary btn-lg bg-white/5 border-white/20 hover:bg-white/10 text-white">
              Voir les actualités
            </Link>
          </div>
          
        </div>
      </div>
    </section>
  );
}
