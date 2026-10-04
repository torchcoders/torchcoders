import { BookOpen, Code2, Trophy } from "lucide-react";

const values = [
  {
    icon: BookOpen,
    title: "Ateliers pratiques",
    description:
      "Participez à des sessions mains dans le code pour concevoir et implémenter des agents IA, du prototype à la mise en production.",
  },
  {
    icon: Code2,
    title: "Projets collaboratifs",
    description:
      "Travaillez en équipe sur des projets réels utilisant les dernières techniques d'agents IA : RAG, multi-agents, planification autonome.",
  },
  {
    icon: Trophy,
    title: "Compétitions",
    description:
      "Représentez l'EST Tétouan dans des hackathons et compétitions nationaux et internationaux centrés sur l'intelligence artificielle.",
  },
];

export function AboutSection() {
  return (
    <section id="apropos" className="section about-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">À propos de TorchCoders</h2>
          <p className="section-desc">
            TorchCoders est le club de l'École Supérieure de Technologie de
            Tétouan (EST Tétouan) dédié aux agents d'intelligence artificielle.
            Notre mission : former les étudiants à concevoir, développer et
            déployer des systèmes autonomes intelligents capables de résoudre
            des problèmes du monde réel.
          </p>
        </div>
        <div className="card-grid">
          {values.map(({ icon: Icon, title, description }) => (
            <article key={title} className="card">
              <div className="card-icon">
                <Icon size={24} aria-hidden="true" />
              </div>
              <h3 className="card-title">{title}</h3>
              <p className="card-desc">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
