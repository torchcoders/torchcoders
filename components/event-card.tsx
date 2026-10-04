import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, Tag, ExternalLink } from "lucide-react";
import type { Event } from "@/lib/events";
import { CLUB_ID } from "@/lib/config";

const fmt = new Intl.DateTimeFormat("fr-FR", {
  day: "numeric",
  month: "long",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
});

const typeLabels: Record<string, string> = {
  announcement: "Annonce",
  article: "Article",
  event: "Événement",
};

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  const isUpcoming = event.createdAt >= Date.now();
  const formUrl =
    event.linkedFormId
      ? `https://www.estt.ma/clubs/${CLUB_ID}/forms/${event.linkedFormId}`
      : null;

  return (
    <article className="card event-card">
      {event.imageUrl && (
        <div className="event-image-wrap">
          <img
            src={event.imageUrl}
            alt={event.title}
            className="event-image"
            loading="lazy"
          />
        </div>
      )}
      <div className="event-body">
        <div className="event-meta">
          <span className={`badge ${isUpcoming ? "badge-primary" : "badge-muted"}`}>
            {isUpcoming ? "À venir" : "Publié"}
          </span>
          <span className="badge badge-outline">
            <Tag size={11} aria-hidden="true" />
            {typeLabels[event.type] ?? event.type}
          </span>
        </div>
        <h3 className="card-title">{event.title}</h3>
        <p className="event-date">
          <Calendar size={14} aria-hidden="true" />
          {fmt.format(new Date(event.createdAt))}
        </p>
        <p className="card-desc line-clamp">{event.content}</p>
        <a
          href={`https://www.estt.ma/clubs/${CLUB_ID}/posts/${event.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="event-link"
        >
          En savoir plus
          <ExternalLink size={14} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}
