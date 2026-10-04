export function PartnersSection() {
  return (
    <section id="partenaires" className="section alt-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Nos Partenaires</h2>
          <p className="section-desc">
            Ils nous soutiennent et contribuent à faire de TorchCoders un acteur clé
            de l'innovation à l'EST Tétouan.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center mt-8">
          {/* ESTT Community Partner */}
          <div className="partner-logo flex flex-col items-center gap-2">
            <div
              className="w-48 h-16 bg-white"
              style={{
                maskImage: 'url(/esttco-platform.svg)',
                WebkitMaskImage: 'url(/esttco-platform.svg)',
                maskSize: 'contain',
                WebkitMaskSize: 'contain',
                maskPosition: 'center',
                WebkitMaskPosition: 'center',
                maskRepeat: 'no-repeat',
                WebkitMaskRepeat: 'no-repeat',
              }}
              title=""
              aria-label=""
            />
            <span className="text-sm text-muted-foreground font-medium"></span>
          </div>
        </div>
      </div>
    </section>
  );
}
