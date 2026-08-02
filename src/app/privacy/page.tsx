import Link from "next/link";

import { siteConfig } from "@/lib/site-config";

export default function PrivacyPage() {
  return (
    <main className="grain min-h-screen px-6 py-8 sm:px-8 lg:px-12">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-6">
        <header className="panel rounded-[2rem] px-6 py-5">
          <p className="text-sm uppercase tracking-[0.28em] text-[#6a7685]">privacy</p>
          <h1 className="display-font mt-3 text-4xl font-bold tracking-tight text-[#102033]">Privacyverklaring</h1>
          <p className="mt-4 text-base leading-7 text-[#556374]">
            Deze privacyverklaring is bedoeld voor {siteConfig.businessName} en beschrijft hoe contactgegevens rond bestellingen worden verwerkt.
          </p>
        </header>

        <section className="panel rounded-[2rem] p-7 text-sm leading-8 text-[#556374]">
          <p>1. Bij een bestelling via e-mail ontvangt de eigenaar alleen de gegevens die de klant zelf meestuurt.</p>
          <p>2. Deze gegevens worden gebruikt om betaling, levering en klantenservice af te handelen.</p>
          <p>3. Zonder expliciete toestemming worden gegevens niet gedeeld met derden, behalve als dat nodig is voor betaling of levering.</p>
          <p>4. Klanten kunnen via {siteConfig.ownerEmail} vragen om inzage, wijziging of verwijdering van hun gegevens.</p>
          <p>5. Voor automatische betalingen via Stripe of een andere provider gelden ook de privacyvoorwaarden van die betaalprovider.</p>
        </section>

        <Link className="rounded-full bg-[#102033] px-5 py-3 text-center text-sm font-semibold text-white" href="/">
          Terug naar homepage
        </Link>
      </div>
    </main>
  );
}