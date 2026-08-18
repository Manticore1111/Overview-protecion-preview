import { siteConfig } from "@/lib/site-config";
import { services } from "@/lib/services";

const contactPeople = [
  { name: "M. Yildiz", phone: "06 25168112" },
  { name: "S. Wien", phone: "06 82148222" },
];

export default function OverOnsPage() {
  return (
    <main className="grain min-h-screen overflow-hidden bg-[var(--background)]">
      <section className="mx-auto w-full max-w-7xl px-6 py-8 sm:px-8 lg:px-12 lg:py-12">
        <div className="grid overflow-hidden border border-[rgba(255,255,255,0.1)] bg-[linear-gradient(135deg,rgba(255,255,255,0.05),rgba(255,255,255,0.015))] shadow-[0_28px_80px_rgba(0,0,0,0.3)] lg:grid-cols-[1.06fr_0.94fr]">
          <div className="flex flex-col justify-center px-7 py-14 sm:px-10 lg:px-14 lg:py-20">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">Over Overview Protection</p>
            <h1 className="display-font mt-5 max-w-3xl text-5xl font-semibold leading-[0.96] tracking-[-0.04em] text-white sm:text-6xl">
              Een persoonlijk beveiligingsbedrijf vanuit Didam.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-[#c4c4c4] sm:text-lg">
              {siteConfig.businessName} ondersteunt organisaties met beveiliging die past bij de locatie, de mensen en het moment. Geen standaardoplossing, maar een heldere aanpak met persoonlijke afstemming.
            </p>
            <div className="mt-12 grid gap-5 border-t border-[rgba(255,255,255,0.1)] pt-6 sm:grid-cols-3">
              <div>
                <p className="display-font text-xl font-semibold text-[var(--accent)]">Didam</p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-[#a6a6a6]">Vestigingsplaats</p>
              </div>
              <div>
                <p className="display-font text-xl font-semibold text-[var(--accent)]">97123048</p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-[#a6a6a6]">KVK-nummer</p>
              </div>
              <div>
                <p className="display-font text-xl font-semibold text-[var(--accent)]">24/7</p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-[#a6a6a6]">Bereikbaar</p>
              </div>
            </div>
          </div>
          <div className="relative min-h-[360px] border-t border-[rgba(255,255,255,0.1)] lg:min-h-full lg:border-l lg:border-t-0">
            <img
              src="/stock-security-lobby.jpg"
              alt="Sfeerbeeld van beveiliging bij een zakelijke entree"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05),rgba(0,0,0,0.68))]" />
            <p className="absolute bottom-7 left-7 max-w-xs border-l-2 border-[var(--accent)] pl-4 text-xs leading-6 text-white/90 sm:bottom-10 sm:left-10">
              Sfeerbeeld van beveiliging bij een zakelijke entree. Foto: Collin via Unsplash.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:px-12 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">Wie wij zijn</p>
          <h2 className="display-font mt-4 text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
            Veiligheid begint met weten wie er naast u staat.
          </h2>
          <div className="mt-7 space-y-6 text-base leading-8 text-[#bebebe] sm:text-lg">
            <p>
              Overview Protection is een onafhankelijke beveiligingspartner voor bedrijven, winkels, zorginstellingen, horeca en evenementen. We werken vanuit Didam en stemmen iedere inzet af op de dagelijkse praktijk van de locatie.
            </p>
            <p>
              Onze manier van werken is direct en persoonlijk. Opdrachtgevers weten wie zij spreken, wat er is afgesproken en bij wie zij terechtkunnen wanneer er iets verandert.
            </p>
            <p>
              Wij combineren zichtbaar toezicht met een representatieve, gastvrije houding. Zo blijft een locatie veilig zonder dat bezoekers, medewerkers of gasten zich onwelkom voelen.
            </p>
          </div>
        </div>
        <figure className="border border-[rgba(255,255,255,0.08)] bg-black/20">
          <img
            src="/stock-security-professional.jpg"
            alt="Sfeerbeeld van een beveiligingsprofessional"
            className="aspect-[4/5] w-full object-cover object-[56%_center]"
          />
          <figcaption className="border-t border-[rgba(255,255,255,0.08)] px-5 py-4 text-xs leading-6 text-[#b7b7b7]">
            Sfeerbeeld van beveiliging. Foto: Job Moses via Unsplash.
          </figcaption>
        </figure>
      </section>

      <section className="border-y border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.018)]">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:px-12 lg:py-24">
          <figure className="order-2 overflow-hidden border border-[rgba(255,255,255,0.08)] bg-black/20 lg:order-1">
            <img
              src="/stock-security-cameras.jpg"
              alt="Sfeerbeeld van cameratoezicht in een stedelijke omgeving"
              className="h-full min-h-[340px] w-full object-cover grayscale"
            />
            <figcaption className="border-t border-[rgba(255,255,255,0.08)] px-5 py-4 text-xs leading-6 text-[#b7b7b7]">
              Sfeerbeeld van beveiliging en overzicht. Foto: Milan Malkomes via Unsplash.
            </figcaption>
          </figure>
          <div className="order-1 lg:order-2">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">Wat wij doen</p>
            <h2 className="display-font mt-4 max-w-2xl text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
              Beveiliging die aansluit op de omgeving.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#bebebe] sm:text-lg">
              We leveren beveiliging voor uiteenlopende situaties. De inzet verschilt per locatie, maar de basis blijft hetzelfde: overzicht, duidelijke afspraken en professioneel optreden.
            </p>
            <dl className="mt-10 grid gap-x-8 gap-y-5 border-t border-[rgba(255,255,255,0.1)] pt-6 sm:grid-cols-2">
              {services.map((service) => (
                <div key={service.slug} className="border-b border-[rgba(255,255,255,0.08)] pb-4">
                  <dt className="display-font text-xl font-semibold text-white">{service.title}</dt>
                  <dd className="mt-2 text-sm leading-6 text-[#aeaeae]">{service.preview}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="grid gap-12 border-t border-[rgba(255,255,255,0.08)] pt-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">Met wie u te maken heeft</p>
            <h2 className="display-font mt-4 text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
              Directe lijnen, herkenbare gezichten.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#bebebe] sm:text-lg">
              Bij Overview Protection heeft u rechtstreeks contact met de mensen die uw vraag kennen en de afspraken bewaken.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {contactPeople.map((person) => (
              <article key={person.name} className="border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.025)] p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">Contactpersoon</p>
                <h3 className="display-font mt-4 text-3xl font-semibold text-white">{person.name}</h3>
                <p className="mt-5 text-sm leading-7 text-[#c0c0c0]">{person.phone}</p>
              </article>
            ))}
            <article className="border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.025)] p-7 sm:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">Bedrijfsgegevens</p>
              <div className="mt-4 flex flex-col gap-2 text-sm leading-7 text-[#c0c0c0] sm:flex-row sm:items-center sm:justify-between">
                <p>6942 EK Didam · KVK 97123048</p>
                <p>{siteConfig.ownerEmail}</p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}