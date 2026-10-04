import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, ArrowLeft, ExternalLink } from "lucide-react";
import { getEvents } from "@/lib/events";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CLUB_ID } from "@/lib/config";

const fmt = new Intl.DateTimeFormat("fr-FR", {
  day: "numeric",
  month: "long",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
});

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const events = await getEvents();
  const event = events.find((e) => e.id === id);
  if (!event) return { title: "Actualité introuvable" };
  return {
    title: event.title,
    description: event.content.slice(0, 160),
  };
}

export default async function ActualiteDetailPage({ params }: Props) {
  const { id } = await params;
  const events = await getEvents();
  const event = events.find((e) => e.id === id);

  if (!event) notFound();

  const formUrl =
    event.linkedFormId
      ? `https://www.estt.ma/clubs/${CLUB_ID}/forms/${event.linkedFormId}`
      : null;

  const typeLabels: Record<string, string> = {
    announcement: "Annonce",
    article: "Article",
    event: "Événement",
  };

  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <section className="section">
          <div className="container detail-container">
            <Link href="/actualites" className="back-link">
              <ArrowLeft size={16} aria-hidden="true" />
              Toutes les actualités
            </Link>

            <span className="badge badge-outline detail-type">
              {typeLabels[event.type] ?? event.type}
            </span>

            <h1 className="detail-title">{event.title}</h1>

            <p className="detail-date">
              <Calendar size={15} aria-hidden="true" />
              {fmt.format(new Date(event.createdAt))}
              {event.author && (
                <span className="detail-author"> · {event.author}</span>
              )}
            </p>

            {event.imageUrl && (
              <img
                src={event.imageUrl}
                alt={event.title}
                className="detail-image"
              />
            )}

            <div className="detail-content">
              {event.content.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {formUrl && (
              <a
                href={formUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Participer
                <ExternalLink size={15} aria-hidden="true" />
              </a>
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
