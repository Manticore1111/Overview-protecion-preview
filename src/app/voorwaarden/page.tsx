import Link from "next/link";

import { siteConfig } from "@/lib/site-config";

export default function TermsPage() {
  return (
    <main className="grain min-h-screen px-6 py-8 sm:px-8 lg:px-12">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-6">
        <header className="panel rounded-[2rem] px-6 py-5">
          <p className="text-sm uppercase tracking-[0.28em] text-[#6a7685]">voorwaarden</p>
          <h1 className="display-font mt-3 text-4xl font-bold tracking-tight text-[#102033]">Algemene voorwaarden</h1>
          <p className="mt-4 text-base leading-7 text-[#556374]">
            Deze voorwaarden gelden voor offertes, opdrachten en beveiligingsdiensten van {siteConfig.businessName}.
          </p>
        </header>

        <section className="panel rounded-[2rem] p-7 text-sm leading-8 text-[#556374] sm:p-9">
          <div className="space-y-8">
            <div>
              <h2 className="display-font text-2xl font-bold text-[#102033]">1. Toepasselijkheid</h2>
              <p className="mt-3">Deze voorwaarden gelden voor offertes, opdrachten en beveiligingsdiensten van {siteConfig.businessName}. Afwijkingen zijn alleen geldig wanneer ze vooraf schriftelijk zijn afgesproken.</p>
            </div>
            <div>
              <h2 className="display-font text-2xl font-bold text-[#102033]">2. Aanvraag en overeenkomst</h2>
              <p className="mt-3">Een aanvraag is vrijblijvend. De overeenkomst ontstaat nadat de opdracht en de belangrijkste afspraken, zoals locatie, tijden, werkzaamheden en prijs, door beide partijen zijn bevestigd.</p>
            </div>
            <div>
              <h2 className="display-font text-2xl font-bold text-[#102033]">3. Uitvoering van de dienst</h2>
              <p className="mt-3">Wij voeren de opdracht zorgvuldig en professioneel uit volgens de gemaakte afspraken. De inzet kan in overleg worden aangepast wanneer de situatie, risico’s, planning of locatie daarom vraagt.</p>
            </div>
            <div>
              <h2 className="display-font text-2xl font-bold text-[#102033]">4. Verantwoordelijkheden van de opdrachtgever</h2>
              <p className="mt-3">De opdrachtgever verstrekt tijdig juiste informatie over de locatie, risico’s, contactpersonen en omstandigheden. Ook zorgt de opdrachtgever voor toegang tot de locatie en voor een veilige werkomgeving voor onze medewerkers.</p>
            </div>
            <div>
              <h2 className="display-font text-2xl font-bold text-[#102033]">5. Prijs, facturatie en annulering</h2>
              <p className="mt-3">De prijs en betaaltermijn staan in de offerte of opdrachtbevestiging. Extra werkzaamheden worden vooraf besproken. Bij annulering of wijziging kunnen kosten worden berekend wanneer wij al personeel, planning of middelen hebben gereserveerd.</p>
            </div>
            <div>
              <h2 className="display-font text-2xl font-bold text-[#102033]">6. Aansprakelijkheid</h2>
              <p className="mt-3">Wij zijn alleen aansprakelijk voor directe schade die het gevolg is van een aantoonbare tekortkoming in de uitvoering van de opdracht. Onze aansprakelijkheid is beperkt tot het bedrag dat voor de betreffende opdracht is betaald, tenzij dwingend recht anders bepaalt.</p>
            </div>
            <div>
              <h2 className="display-font text-2xl font-bold text-[#102033]">7. Contact</h2>
              <p className="mt-3">Heb je een vraag over een opdracht, offerte of deze voorwaarden? Neem dan contact op via {siteConfig.ownerEmail}. We bespreken wijzigingen of bijzonderheden zo snel mogelijk.</p>
            </div>
          </div>
        </section>

        <Link className="rounded-full bg-[#102033] px-5 py-3 text-center text-sm font-semibold text-white" href="/">
          Terug naar homepage
        </Link>
      </div>
    </main>
  );
}