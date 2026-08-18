import Link from "next/link";

import { siteConfig } from "@/lib/site-config";

export default function PrivacyPage() {
  return (
    <main className="grain min-h-screen px-6 py-8 sm:px-8 lg:px-12">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-6">
        <header className="panel rounded-[2rem] px-6 py-8 sm:px-8 sm:py-9">
          <p className="text-sm uppercase tracking-[0.28em] text-[var(--accent)]">privacy</p>
          <h1 className="display-font mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">Privacyverklaring</h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-[#bdbdbd]">
            Deze privacyverklaring beschrijft hoe {siteConfig.businessName} persoonsgegevens verwerkt bij aanvragen, opdrachten en contact.
          </p>
        </header>

        <section className="panel rounded-[2rem] p-7 text-sm leading-8 text-[#bdbdbd] sm:p-9">
          <div className="space-y-8">
            <div>
              <h2 className="display-font text-2xl font-bold text-white">1. Wie wij zijn</h2>
              <p className="mt-3">Overview Protection is gevestigd in Didam en levert beveiligingsdiensten voor objecten, winkels, horeca, zorginstellingen en evenementen. Voor vragen over deze verklaring kun je contact opnemen via {siteConfig.ownerEmail}.</p>
            </div>
            <div>
              <h2 className="display-font text-2xl font-bold text-white">2. Welke gegevens wij verwerken</h2>
              <p className="mt-3">Wij verwerken alleen gegevens die nodig zijn om contact op te nemen, een aanvraag te beoordelen, een beveiligingsinzet voor te bereiden of een bestaande opdracht uit te voeren. Het kan gaan om je naam, bedrijfsnaam, telefoonnummer, e-mailadres, locatiegegevens en informatie over de gewenste inzet.</p>
            </div>
            <div>
              <h2 className="display-font text-2xl font-bold text-white">3. Waarvoor wij gegevens gebruiken</h2>
              <p className="mt-3">We gebruiken gegevens voor offerte- en intakegesprekken, planning, communicatie, facturatie, uitvoering van afspraken en klantenservice. We verkopen persoonsgegevens niet en gebruiken ze niet voor andere doeleinden dan waarvoor ze zijn verzameld.</p>
            </div>
            <div>
              <h2 className="display-font text-2xl font-bold text-white">4. Bewaren en delen</h2>
              <p className="mt-3">We bewaren gegevens niet langer dan nodig is voor de opdracht of zolang de wet dat verplicht. Gegevens worden alleen gedeeld met partijen die nodig zijn voor onze dienstverlening, zoals een boekhouder, hostingprovider of betaalprovider, en alleen voor dat doel.</p>
            </div>
            <div>
              <h2 className="display-font text-2xl font-bold text-white">5. Jouw rechten</h2>
              <p className="mt-3">Je kunt vragen om inzage, correctie, verwijdering, beperking van verwerking of overdracht van je gegevens. Stuur je verzoek naar {siteConfig.ownerEmail}. Je kunt ook een klacht indienen bij de Autoriteit Persoonsgegevens.</p>
            </div>
            <div>
              <h2 className="display-font text-2xl font-bold text-white">6. Wijzigingen</h2>
              <p className="mt-3">Deze privacyverklaring kan worden aangepast wanneer onze dienstverlening of de wetgeving verandert. Op deze pagina staat altijd de meest recente versie.</p>
            </div>
          </div>
        </section>

        <Link className="rounded-full bg-[var(--accent)] px-5 py-3 text-center text-sm font-semibold text-black transition hover:bg-[#e2c15a]" href="/">
          Terug naar homepage
        </Link>
      </div>
    </main>
  );
}