import Link from "next/link";
import { getEvents } from "@/lib/events";
import { EventCard } from "@/components/event-card";

export async function NewsSection() {
  const events = await getEvents();
  const displayed = events.slice(0, 6);

  return (
    <section id="actualites" className="section alt-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Actualités</h2>
          <p className="section-desc">
            Les dernières annonces et articles du club TorchCoders.
          </p>
        </div>

        {displayed.length === 0 ? (
          <p className="empty-msg">Aucune actualité pour le moment.</p>
        ) : (
          <div className="card-grid">
            {displayed.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        )}

        <div className="section-cta">
          <Link href="/actualites" className="btn btn-secondary">
            Toutes les actualités
          </Link>
        </div>
      </div>
    </section>
  );
}
