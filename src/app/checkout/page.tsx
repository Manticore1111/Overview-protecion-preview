import Link from "next/link";

import { buildMailtoForPlan, getPlanBySlug, hasPaymentLinks, siteConfig } from "@/lib/site-config";

type CheckoutPageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export default async function CheckoutPage({ searchParams }: CheckoutPageProps) {
  const resolvedParams = (await searchParams) ?? {};
  const selectedPlan = getPlanBySlug(typeof resolvedParams.plan === "string" ? resolvedParams.plan : undefined);
  const hasLinks = hasPaymentLinks();

  return (
    <main className="grain page-shell min-h-screen overflow-hidden px-6 py-8 sm:px-8 lg:px-12">
      <div className="ambient-orb ambient-orb-left" />
      <div className="ambient-orb ambient-orb-right" />
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
        <header className="panel flex flex-col justify-between gap-4 rounded-[2rem] px-6 py-5 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-[#6a7685]">checkout</p>
            <h1 className="display-font mt-2 text-3xl font-bold tracking-tight text-[#102033] sm:text-4xl">
              Kies hoe je {selectedPlan.name} verkoopt.
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <Link className="rounded-full border border-[var(--line)] bg-white px-4 py-2 text-sm font-medium text-[#102033]" href="/">
              Terug naar homepage
            </Link>
            <Link className="rounded-full border border-[var(--line)] bg-white px-4 py-2 text-sm font-medium text-[#102033]" href="/sign-in">
              Inloggen
            </Link>
            <Link className="rounded-full border border-[var(--line)] bg-white px-4 py-2 text-sm font-medium text-[#102033]" href={`/register?plan=${selectedPlan.slug}`}>
              Registreren
            </Link>
            <Link className="rounded-full bg-[#102033] px-4 py-2 text-sm font-medium text-white" href="/owner">
              Eigenaarspagina
            </Link>
          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
          <article className="rounded-[2.2rem] bg-[#102033] p-7 text-white shadow-[0_32px_90px_rgba(16,32,51,0.24)] sm:p-8">
            <p className="text-sm uppercase tracking-[0.28em] text-white/55">Gekozen plan</p>
            <h2 className="display-font mt-3 text-4xl font-bold">{selectedPlan.name}</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/76">{selectedPlan.description}</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/6 p-5">
                <p className="text-sm uppercase tracking-[0.24em] text-white/55">Prijs</p>
                <p className="display-font mt-3 text-4xl font-bold">EUR{selectedPlan.price}</p>
                <p className="mt-2 text-sm text-white/72">per maand</p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-white/6 p-5">
                <p className="text-sm uppercase tracking-[0.24em] text-white/55">Levering</p>
                <p className="mt-3 text-base leading-7 text-white/82">{selectedPlan.delivery}</p>
              </div>
            </div>

            <div className="mt-8 rounded-[1.6rem] border border-white/10 bg-white/6 p-5">
              <p className="text-sm uppercase tracking-[0.24em] text-white/55">Voor wie</p>
              <p className="mt-3 text-base leading-7 text-white/82">{selectedPlan.audience}</p>
            </div>
          </article>

          <article className="panel rounded-[2.2rem] p-7 sm:p-8">
            <p className="text-sm uppercase tracking-[0.28em] text-[#6a7685]">Bestelroute</p>
            <h2 className="display-font mt-3 text-3xl font-bold tracking-tight text-[#102033]">
              Klanten kunnen direct bestellen.
            </h2>
            <p className="mt-4 text-base leading-7 text-[#556374]">
              Deze app ondersteunt twee routes: direct via een ingestelde betaal-link of handmatig via e-mailbestelling. Daardoor is hij direct inzetbaar, ook zonder database.
            </p>

            <div className="mt-8 grid gap-4">
              {selectedPlan.paymentUrl ? (
                <a
                  className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-strong)]"
                  href={selectedPlan.paymentUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Reken direct af
                </a>
              ) : null}

              <a
                className="inline-flex items-center justify-center rounded-full bg-[#102033] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1b3149]"
                href={buildMailtoForPlan(selectedPlan)}
              >
                Bestel via e-mail
              </a>

              <Link
                className="inline-flex items-center justify-center rounded-full border border-[var(--line)] bg-white px-5 py-3 text-sm font-semibold text-[#102033] transition hover:bg-[#f8f2e8]"
                href={`/bedankt?plan=${selectedPlan.slug}`}
              >
                Ik heb besteld
              </Link>
            </div>

            <div className="mt-8 rounded-[1.6rem] bg-[var(--accent-soft)] p-5 text-[#86412f]">
              {hasLinks
                ? "Minstens één plan heeft al een directe checkout-link. Niet-geconfigureerde plannen vallen automatisch terug op e-mailbestelling."
                : "Nog geen betaal-links ingesteld. De app werkt al via e-mailbestellingen; voor automatische betalingen voeg je straks Stripe Payment Links toe op de eigenaarspagina."}
            </div>

            <ul className="mt-8 space-y-3 text-sm leading-7 text-[#556374]">
              {selectedPlan.perks.map((perk) => (
                <li key={perk}>• {perk}</li>
              ))}
            </ul>
          </article>
        </section>
      </div>
    </main>
  );
}