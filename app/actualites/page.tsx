import type { Metadata } from "next";
import Link from "next/link";
import { getEvents } from "@/lib/events";
import { EventCard } from "@/components/event-card";

import { SITE_NAME } from "@/lib/config";

export const metadata: Metadata = {
  title: "Actualités",
  description: `Toutes les annonces et articles du club ${SITE_NAME} — EST Tétouan.`,
};

export default async function ActualitesPage() {
  const events = await getEvents();

  return (
    <main id="main-content">
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h1 className="section-title">Toutes les actualités</h1>
            <p className="section-desc">
              Retrouvez l'ensemble des annonces, articles et événements du
              club TorchCoders.
            </p>
          </div>

          {events.length === 0 ? (
            <p className="empty-msg">Aucune actualité pour le moment.</p>
          ) : (
            <div className="card-grid">
              {events.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          )}

          <div className="section-cta">
            <Link href="/" className="btn btn-secondary">
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
