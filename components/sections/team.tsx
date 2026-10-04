import { User } from "lucide-react";
import Image from "next/image";
import { team } from "@/data/team";

function getMember(role: string) {
  return team.find((m) => m.role === role) || { role, name: null };
}

function TeamCard({ member }: { member: { role: string; name: string | null; photo?: string } }) {
  return (
    <article className="team-card relative overflow-hidden">
      {/* Background Icon */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center">
        <Image src="/logo.svg" alt="" width={150} height={150} className="object-contain" />
      </div>
      
      <div className="team-avatar-wrap relative z-10">
        {member.photo ? (
          <Image src={member.photo} alt={member.name || ""} fill className="object-cover rounded-xl" />
        ) : (
          <div className="team-avatar-placeholder">
            {member.name ? (
              <span className="avatar-initials">
                {member.name.split(" ").slice(0, 2).map((w) => w[0]).join("").toUpperCase()}
              </span>
            ) : (
              <User size={32} />
            )}
          </div>
        )}
      </div>
      
      <div className="relative z-10 flex flex-col items-center gap-1 mt-4">
        <p className="team-name text-lg">
          {member.name ?? <span className="team-undecided">Non décidé</span>}
        </p>
        <p className="team-role text-primary font-medium text-sm text-center">{member.role}</p>
      </div>
    </article>
  );
}

export function TeamSection() {
  const president = getMember("Président");
  const vicePresident = getMember("Vice-président");
  const level3 = ["Secrétaire général", "Trésorerie", "Chef de projet"].map(getMember);
  const level4 = [
    "Responsable Ressources humaines", 
    "Responsable Événementiel", 
    "Responsable Social Média et Communication", 
    "Responsable Visuel"
  ].map(getMember);

  return (
    <section id="equipe" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Le bureau</h2>
          <p className="section-desc">
            Les membres du bureau de TorchCoders seront prochainement désignés.
            Les candidatures sont ouvertes à tous les étudiants de l'EST
            Tétouan.
          </p>
        </div>
        
        <div className="organigram-container flex flex-col items-center gap-8 md:gap-12 relative">
          
          {/* Level 1: Président */}
          <div className="organigram-level flex justify-center w-full">
            <div className="organigram-node">
              <TeamCard member={president} />
            </div>
          </div>

          {/* Vertical connecting line */}
          <div className="w-px h-8 md:h-12 bg-white/20 -my-4 md:-my-6"></div>

          {/* Level 2: Vice-président */}
          <div className="organigram-level flex justify-center w-full">
            <div className="organigram-node">
              <TeamCard member={vicePresident} />
            </div>
          </div>

          {/* Vertical connecting line */}
          <div className="w-px h-8 md:h-12 bg-white/20 -my-4 md:-my-6"></div>

          {/* Level 3 */}
          <div className="organigram-level grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl relative">
            {/* Horizontal connecting line for level 3 */}
            <div className="hidden md:block absolute top-0 left-1/6 right-1/6 h-px bg-white/20 -translate-y-6"></div>
            {/* Vertical lines connecting to items */}
            <div className="hidden md:block absolute top-0 left-1/6 w-px h-6 bg-white/20 -translate-y-6"></div>
            <div className="hidden md:block absolute top-0 right-1/6 w-px h-6 bg-white/20 -translate-y-6"></div>

            {level3.map((m) => (
              <div key={m.role} className="organigram-node w-full">
                <TeamCard member={m} />
              </div>
            ))}
          </div>

          {/* Vertical connecting line from level 3 center to level 4 */}
          <div className="hidden md:block w-px h-8 md:h-12 bg-white/20 -my-4 md:-my-6"></div>

          {/* Level 4 */}
          <div className="organigram-level grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl relative">
            {/* Horizontal connecting line for level 4 */}
            <div className="hidden lg:block absolute top-0 left-[12.5%] right-[12.5%] h-px bg-white/20 -translate-y-6"></div>
            {/* Vertical lines connecting to items */}
            <div className="hidden lg:block absolute top-0 left-[12.5%] w-px h-6 bg-white/20 -translate-y-6"></div>
            <div className="hidden lg:block absolute top-0 left-[37.5%] w-px h-6 bg-white/20 -translate-y-6"></div>
            <div className="hidden lg:block absolute top-0 right-[37.5%] w-px h-6 bg-white/20 -translate-y-6"></div>
            <div className="hidden lg:block absolute top-0 right-[12.5%] w-px h-6 bg-white/20 -translate-y-6"></div>

            {level4.map((m) => (
              <div key={m.role} className="organigram-node w-full">
                <TeamCard member={m} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
