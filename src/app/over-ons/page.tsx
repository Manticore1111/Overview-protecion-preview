import { siteConfig } from "@/lib/site-config";

export default function OverOnsPage() {
  return (
    <main className="grain min-h-screen bg-[var(--background)] px-6 py-8 sm:px-8 lg:px-12">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <article className="border border-[rgba(255,255,255,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-7 text-[#d2d2d2] shadow-[0_24px_80px_rgba(0,0,0,0.25)] sm:p-10 lg:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">Over ons</p>
          <h1 className="display-font mt-4 text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
            Veiligheid met aandacht, vertrouwen en professionaliteit.
          </h1>

          <div className="mt-8 space-y-6 text-base leading-8 text-[#c0c0c0] sm:text-lg">
            <p>
              Het verhaal van <strong className="text-white">{siteConfig.businessName}</strong> begint met een duidelijke visie:
              <em className="text-[var(--accent)]"> veiligheid voor alle mensen</em>. Wij geloven dat beveiliging meer is dan alleen toezicht houden; het gaat om vertrouwen, aandacht en het creëren van een omgeving waarin mensen zich welkom én beschermd voelen.
            </p>

            <p>
              Wat ons anders maakt? Onze overzichtelijke blik en focus op de kern:
              <strong className="text-white"> veiligheid, gastvrijheid, betrouwbaarheid en absolute integriteit</strong>. Wij combineren professionaliteit met persoonlijke aandacht en zijn toegewijd aan elk detail.
            </p>

            <p>
              Onze aanpak is geworteld in kwaliteit en verantwoordelijkheid. Elk lid van ons team is getraind om niet alleen risico’s te signaleren en te voorkomen, maar ook om gastvrij en servicegericht op te treden. Zo ontstaat een balans tussen waakzaamheid en vriendelijkheid, waardoor wij veiligheid bieden mét een menselijke touch.
            </p>

            <p>
              Bij {siteConfig.businessName} bent u verzekerd van een partner die meedenkt, flexibel inspeelt op uw situatie en altijd het hoogste niveau van professionaliteit nastreeft. Alles wat wij doen, weerspiegelt onze toewijding aan uitmuntendheid.
            </p>

            <p className="border-l-2 border-[var(--accent)] pl-5 text-white">
              Neem vandaag nog contact met ons op en ontdek hoe wij uw organisatie kunnen ondersteunen met op maat gemaakte beveiligingsoplossingen.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-4 border-t border-[rgba(255,255,255,0.08)] pt-6 text-sm text-[#b7b7b7] sm:flex-row sm:items-center sm:justify-between">
            <a className="transition hover:text-[var(--accent)]" href={`mailto:${siteConfig.ownerEmail}`}>
              {siteConfig.ownerEmail}
            </a>
            <p>{siteConfig.businessName} · Veiligheid begint met overzicht.</p>
          </div>
        </article>
      </div>
    </main>
  );
}