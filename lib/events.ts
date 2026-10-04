import { z } from "zod";

export const EventSchema = z.object({
  id: z.string(),
  title: z.string(),
  content: z.string(),
  author: z.string().optional(),
  createdAt: z.number(),
  imageUrl: z.string().optional(),
  likeCount: z.number().optional(),
  likes: z.number().optional(),
  linkedFormId: z.string().optional(),
  type: z.enum(["announcement", "article", "event"]).default("announcement"),
});

export type Event = z.infer<typeof EventSchema>;

function parseEvents(data: unknown): Event[] {
  if (!data || typeof data !== "object") return [];
  const result: Event[] = [];
  for (const [id, value] of Object.entries(data as Record<string, unknown>)) {
    const parsed = EventSchema.safeParse({ id, ...(value as object) });
    if (parsed.success) result.push(parsed.data);
  }
  return result;
}

export async function getEvents(): Promise<Event[]> {
  const url = process.env.EVENTS_API_URL;

  if (url) {
    try {
      const res = await fetch(url, { next: { revalidate: 300 } });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data: unknown = await res.json();
      const events = parseEvents(data);
      if (events.length > 0) return sortEvents(events);
    } catch {
      // Fall through to mock data
    }
  }

  const { mockEvents } = await import("@/data/mock-events");
  return sortEvents(mockEvents);
}

function sortEvents(events: Event[]): Event[] {
  const now = Date.now();
  const upcoming = events
    .filter((e) => e.createdAt >= now)
    .sort((a, b) => a.createdAt - b.createdAt);
  const past = events
    .filter((e) => e.createdAt < now)
    .sort((a, b) => b.createdAt - a.createdAt);
  return [...upcoming, ...past];
}
