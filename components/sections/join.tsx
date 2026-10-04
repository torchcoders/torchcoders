import { UserPlus, ClipboardList, CheckCircle } from "lucide-react";
import { JOIN_URL } from "@/lib/config";

const steps = [
  {
    icon: UserPlus,
    step: "1",
    title: "Créer un compte",
    desc: "Inscrivez-vous sur la plateforme de l'EST Tétouan avec votre adresse email universitaire.",
  },
  {
    icon: ClipboardList,
    step: "2",
    title: "Remplir le formulaire",
    desc: "Complétez le formulaire d'adhésion en précisant vos motivations et vos compétences.",
  },
  {
    icon: CheckCircle,
    step: "3",
    title: "Valider l'adhésion",
    desc: "Le bureau valide votre demande. Vous recevrez une confirmation par email sous 48 heures.",
  },
];

export function JoinSection() {
  return (
    <section id="adhesion" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Rejoignez TorchCoders</h2>
          <p className="section-desc">
            Vous êtes étudiant à l'EST Tétouan et passionné par l'intelligence
            artificielle ? Rejoignez-nous en trois étapes simples.
          </p>
        </div>
        <div className="steps-grid">
          {steps.map(({ icon: Icon, step, title, desc }) => (
            <div key={step} className="step-card">
              <div className="step-number">{step}</div>
              <div className="step-icon">
                <Icon size={22} aria-hidden="true" />
              </div>
              <h3 className="step-title">{title}</h3>
              <p className="step-desc">{desc}</p>
            </div>
          ))}
        </div>
        <div className="join-cta">
          <a
            href={JOIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg"
          >
            Adhérer maintenant
          </a>
        </div>
      </div>
    </section>
  );
}
