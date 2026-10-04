import Link from "next/link";
import { Logo } from "@/components/logo";
import { JOIN_URL, SITE_NAME } from "@/lib/config";

const navLinks = [
  { href: "#accueil", label: "Accueil" },
  { href: "#apropos", label: "À propos" },
  { href: "#projets", label: "Projets" },
  { href: "#equipe", label: "Équipe" },
  { href: "#actualites", label: "Actualités" },
  { href: "#adhesion", label: "Adhésion" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Logo size={36} />
          <div>
            <p className="footer-name">{SITE_NAME}</p>
            <p className="footer-sub">EST Tétouan</p>
          </div>
        </div>

        <nav className="footer-nav" aria-label="Liens du pied de page">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="footer-link">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="footer-actions">
          <a
            href={JOIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Rejoindre le club
          </a>
        </div>
      </div>
      <div className="footer-copy">
        <p>
          &copy; {year} {SITE_NAME} — EST Tétouan. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
