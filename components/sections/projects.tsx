import { projects, type ProjectStatus } from "@/data/projects";

const statusColors: Record<ProjectStatus, string> = {
  "En cours": "badge-primary",
  "Terminé": "badge-muted",
  "À venir": "badge-outline",
};

export function ProjectsSection() {
  return (
    <section id="projets" className="section alt-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Nos projets</h2>
          <p className="section-desc">
            Des projets concrets autour des agents IA, conçus et développés par
            les membres de TorchCoders en collaboration avec l'EST Tétouan.
          </p>
        </div>
        <div className="card-grid">
          {projects.map((project) => (
            <article key={project.id} className="card">
              <div className="card-top">
                <span className={`badge ${statusColors[project.status]}`}>
                  {project.status}
                </span>
              </div>
              <h3 className="card-title">{project.title}</h3>
              <p className="card-desc">{project.description}</p>
              <div className="tag-list">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
