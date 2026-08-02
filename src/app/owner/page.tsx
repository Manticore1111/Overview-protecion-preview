import Link from "next/link";

import { hasPaymentLinks, siteConfig } from "@/lib/site-config";

const ownerUsesFallback = !process.env.OWNER_USERNAME || !process.env.OWNER_PASSWORD;

export default function OwnerPage() {
  const hasLinks = hasPaymentLinks();

  return (
    <main className="grain min-h-screen px-6 py-8 sm:px-8 lg:px-12">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
        <header className="panel flex flex-col justify-between gap-4 rounded-[2rem] px-6 py-5 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-[#6a7685]">eigenaarspagina</p>
            <Link href="/">
              <h1 className="display-font mt-2 text-3xl font-bold tracking-tight text-[#102033] transition hover:text-[#1b3149] sm:text-4xl">
                Beheer {siteConfig.businessName}
              </h1>
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <Link className="rounded-full border border-[var(--line)] bg-white px-4 py-2 text-sm font-medium text-[#102033]" href="/">
              Homepage
            </Link>
            <Link className="rounded-full bg-[#102033] px-4 py-2 text-sm font-medium text-white" href="/checkout">
              Checkout
            </Link>
          </div>
        </header>

        {ownerUsesFallback ? (
          <div className="rounded-[1.6rem] border border-[#f4b49f] bg-[#fff2eb] px-5 py-4 text-sm leading-7 text-[#91442f]">
            Owner-login gebruikt momenteel de ingestelde fallback `admin` en `cerberus1`. Zet `OWNER_USERNAME` en `OWNER_PASSWORD` als omgevingvariabelen voor productie.
          </div>
        ) : null}

        <section className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <article className="rounded-[2.2rem] bg-[#102033] p-7 text-white shadow-[0_32px_90px_rgba(16,32,51,0.24)] sm:p-8">
            <p className="text-sm uppercase tracking-[0.28em] text-white/55">Business overview</p>
            <h2 className="display-font mt-3 text-4xl font-bold">Klaar voor klanten</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/76">
              Deze app is opgezet als directe verkoopsite. Klanten kunnen plannen bekijken, sample inhoud zien en bestellen via e-mail of betaal-link.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                [String(siteConfig.plans.length), "verkoopbare plannen"],
                [hasLinks ? "Ja" : "Nee", "directe betaal-links"],
                [siteConfig.ownerEmail, "ontvangstadres"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-[1.5rem] border border-white/10 bg-white/6 p-4">
                  <p className="display-font break-all text-2xl font-bold">{value}</p>
                  <p className="mt-2 text-sm text-white/66">{label}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="panel rounded-[2.2rem] p-7 sm:p-8">
            <p className="text-sm uppercase tracking-[0.28em] text-[#6a7685]">Acties voor de eigenaar</p>
            <h2 className="display-font mt-3 text-3xl font-bold tracking-tight text-[#102033]">
              Wat jij nog moet invullen of bewaken.
            </h2>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-[#556374]">
              <li>• Controleer of het e-mailadres in `site-config.ts` jouw echte verkoopadres is.</li>
              <li>• Voeg Stripe Payment Links toe via `NEXT_PUBLIC_*_CHECKOUT_URL` als je automatische betalingen wilt.</li>
              <li>• Pas `OWNER_USERNAME` en `OWNER_PASSWORD` aan voor een private eigenaarspagina.</li>
              <li>• Vervang sample content door jouw echte maandelijkse drops.</li>
            </ul>
          </article>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.96fr_1.04fr]">
          <article className="panel rounded-[2.2rem] p-7 sm:p-8">
            <p className="text-sm uppercase tracking-[0.28em] text-[#6a7685]">Admin control room</p>
            <h2 className="display-font mt-3 text-3xl font-bold tracking-tight text-[#102033]">
              Alles wat je als admin wilt beheren.
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                ["Klantauth", "Login, registratie en wachtwoordwijziging draaien via signed cookies."],
                ["Checkout", "Elk plan heeft een directe klant-checkout en fallback naar e-mailbestelling."],
                ["Inhoud", "Alle pricing, perks en sample content komen uit één configuratiebestand."],
                ["Routebeveiliging", "Admin en dashboard zijn afgeschermd met respectievelijk basic auth en klantsession."],
              ].map(([title, body]) => (
                <div key={title} className="rounded-[1.5rem] border border-[var(--line)] bg-white/75 p-5">
                  <p className="display-font text-xl font-bold text-[#102033]">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-[#556374]">{body}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[2.2rem] bg-[#102033] p-7 text-white shadow-[0_32px_90px_rgba(16,32,51,0.24)] sm:p-8">
            <p className="text-sm uppercase tracking-[0.28em] text-white/55">Launch checklist</p>
            <h2 className="display-font mt-3 text-3xl font-bold">Wat je live moet zetten</h2>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-white/80">
              <li>• Voeg echte betaal-links toe per plan.</li>
              <li>• Vervang sample content door echte drops voor klanten.</li>
              <li>• Zet een productiewachtwoord voor admin in je omgevingsvariabelen.</li>
              <li>• Test registratie, login, wachtwoordwijziging en checkout van begin tot eind.</li>
            </ul>
          </article>
        </section>

        <section className="panel rounded-[2.2rem] p-6 sm:p-8 lg:p-10">
          <div className="mb-7 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-[#6a7685]">Planbeheer</p>
              <h2 className="display-font mt-3 text-4xl font-bold tracking-tight text-[#102033]">
                Overzicht van wat klanten zien.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-[#556374]">
              Alle commerciële inhoud komt uit één configuratiebestand. Daardoor kun je prijzen, perks en leveringswijze snel aanpassen zonder database of CMS.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {siteConfig.plans.map((plan) => (
              <article key={plan.slug} className="rounded-[1.7rem] border border-[var(--line)] bg-white/75 p-6">
                <p className="text-sm uppercase tracking-[0.24em] text-[#6a7685]">{plan.slug}</p>
                <h3 className="display-font mt-3 text-2xl font-bold tracking-tight text-[#102033]">{plan.name}</h3>
                <p className="mt-3 text-base leading-7 text-[#556374]">{plan.description}</p>
                <p className="mt-4 text-sm font-medium text-[#102033]">EUR{plan.price} / maand</p>
                <p className="mt-2 text-sm leading-6 text-[#556374]">{plan.delivery}</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link className="rounded-full bg-[#102033] px-4 py-2 text-sm font-semibold text-white" href={`/checkout?plan=${plan.slug}`}>
                    Bekijk checkout
                  </Link>
                  <span className="rounded-full border border-[var(--line)] px-4 py-2 text-sm text-[#556374]">
                    {plan.paymentUrl ? "Betaal-link actief" : "E-mail bestelling"}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="panel rounded-[2.2rem] p-6 sm:p-8 lg:p-10">
          <div className="mb-7 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-[#6a7685]">Quick links</p>
              <h2 className="display-font mt-3 text-4xl font-bold tracking-tight text-[#102033]">
                Spring direct naar elk deel van de app.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-[#556374]">
              Dit maakt de adminpagina veel bruikbaarder als dagelijkse cockpit voor verkoop, support en contentbeheer.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Homepage", "/"],
              ["Preview", "/preview"],
              ["Checkout", "/checkout"],
              ["Klantlogin", "/sign-in"],
              ["Registratie", "/register"],
              ["Klantdashboard", "/dashboard"],
              ["Privacy", "/privacy"],
              ["Voorwaarden", "/voorwaarden"],
            ].map(([label, href]) => (
              <Link key={href} className="rounded-[1.4rem] border border-[var(--line)] bg-white/75 px-4 py-4 text-sm font-semibold text-[#102033] transition hover:bg-[#fff8ee]" href={href}>
                {label}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}