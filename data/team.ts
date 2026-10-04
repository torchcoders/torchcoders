export interface TeamMember {
  role: string;
  name: string | null;
  photo?: string;
  linkedin?: string;
}

export const team: TeamMember[] = [
  { role: "Président", name: null },
  { role: "Vice-président", name: null },
  { role: "Secrétaire général", name: null },
  { role: "Trésorerie", name: null },
  { role: "Chef de projet", name: null },
  { role: "Responsable Ressources humaines", name: null },
  { role: "Responsable Événementiel", name: null },
  { role: "Responsable Social Média et Communication", name: null },
  { role: "Responsable Visuel", name: null },
];
