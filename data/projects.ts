export type ProjectStatus = "En cours" | "Terminé" | "À venir";

export interface Project {
  id: string;
  title: string;
  description: string;
  status: ProjectStatus;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: "agent-recherche",
    title: "Agent de Recherche Documentaire",
    description:
      "Un agent IA capable de parcourir des bases de données académiques, de synthétiser des articles scientifiques et de générer des résumés structurés à la demande des étudiants.",
    status: "En cours",
    tags: ["LLM", "RAG", "Python"],
  },
  {
    id: "agent-planificateur",
    title: "Agent Planificateur d'Emploi du Temps",
    description:
      "Agent autonome qui optimise les emplois du temps des étudiants en tenant compte des contraintes de salles, des préférences et des priorités pédagogiques.",
    status: "À venir",
    tags: ["Multi-agents", "Optimisation", "TypeScript"],
  },
  {
    id: "agent-tuteur",
    title: "Agent Tuteur Adaptatif",
    description:
      "Tuteur IA qui s'adapte au niveau de chaque apprenant pour proposer des exercices personnalisés, des explications et un suivi de progression en temps réel.",
    status: "À venir",
    tags: ["Éducation", "LLM", "Feedback"],
  },
];
