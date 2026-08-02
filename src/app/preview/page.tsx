import Link from "next/link";

import { siteConfig } from "@/lib/site-config";

export default function PreviewPage() {
  return (
    <main className="grain page-shell min-h-screen overflow-hidden px-6 py-8 sm:px-8 lg:px-12">
      <div className="ambient-orb ambient-orb-left" />
      <div className="ambient-orb ambient-orb-right" />
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
        <header className="panel flex flex-col justify-between gap-4 rounded-[2rem] px-6 py-5 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-[#6a7685]">sample preview</p>
            <h1 className="display-font mt-2 text-3xl font-bold tracking-tight text-[#102033] sm:text-4xl">
              Zo voelt een maand in {siteConfig.businessName}.
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <Link className="rounded-full border border-[var(--line)] bg-white px-4 py-2 text-sm font-medium text-[#102033]" href="/">
              Terug naar homepage
            </Link>
            <Link className="rounded-full border border-[var(--line)] bg-white px-4 py-2 text-sm font-medium text-[#102033]" href="/sign-in">
              Inloggen
            </Link>
            <Link className="rounded-full bg-[#102033] px-4 py-2 text-sm font-medium text-white" href="#faq">
              Bekijk FAQ
            </Link>
          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-[2.2rem] bg-[#102033] p-7 text-white shadow-[0_32px_90px_rgba(16,32,51,0.24)] sm:p-8">
            <p className="text-sm uppercase tracking-[0.28em] text-white/55">Preview drop</p>
            <h2 className="display-font mt-3 text-4xl font-bold">Leadflow pack voor high-ticket coaches</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/76">
              Dit is het type maandelijkse levering waar coaches direct omzetpotentie in zien: meer vertrouwen, meer DM-gesprekken en meer calls vanuit content.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                ["30", "stukken content"],
                ["25", "prompts"],
                ["4", "wekelijkse drops"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-[1.5rem] border border-white/10 bg-white/6 p-4">
                  <p className="display-font text-3xl font-bold">{value}</p>
                  <p className="mt-2 text-sm text-white/66">{label}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="panel rounded-[2.2rem] p-7 sm:p-8">
            <p className="text-sm uppercase tracking-[0.28em] text-[#6a7685]">Wat je verkoopt</p>
            <h2 className="display-font mt-3 text-3xl font-bold tracking-tight text-[#102033]">
              Geen software, maar content die richting verkoop beweegt.
            </h2>
            <p className="mt-4 text-base leading-7 text-[#556374]">
              Dat maakt dit model aantrekkelijker om snel te starten. Je klant wil calls, leads en aanvragen, niet nog een tool om te leren.
            </p>
            <div className="mt-6 rounded-[1.5rem] bg-[var(--accent-soft)] p-5 text-[#8a4331]">
              Levering zonder database: e-mail, Notion, Drive of een afgeschermde pagina met statische content.
            </div>
          </article>
        </section>

        <section className="panel rounded-[2.2rem] p-6 sm:p-8 lg:p-10">
          <div className="mb-7 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-[#6a7685]">Sample inhoud</p>
              <h2 className="display-font mt-3 text-4xl font-bold tracking-tight text-[#102033]">
                Elke maand lever je iets dat meteen gebruikt kan worden.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-[#556374]">
              Juist die directheid maakt dit koopbaar. Ondernemers willen niet brainstormen, ze willen posten en verkopen.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {siteConfig.sampleSections.map((section, index) => (
              <article key={section.title} className="rounded-[1.7rem] border border-[var(--line)] bg-white/75 p-6">
                <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#102033] text-lg font-bold text-white">
                  0{index + 1}
                </span>
                <h3 className="display-font text-2xl font-bold tracking-tight text-[#102033]">{section.title}</h3>
                <p className="mt-3 text-base leading-7 text-[#556374]">{section.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="faq" className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <article className="panel rounded-[2.2rem] p-7 sm:p-8">
            <p className="text-sm uppercase tracking-[0.28em] text-[#6a7685]">FAQ</p>
            <h2 className="display-font mt-3 text-3xl font-bold tracking-tight text-[#102033]">
              Handig als eerste product, omdat de setup klein blijft.
            </h2>
            <div className="mt-6 space-y-4">
              {siteConfig.faq.map((item) => (
                <div key={item.question} className="rounded-[1.5rem] border border-[var(--line)] bg-white/75 p-5">
                  <p className="display-font text-xl font-bold text-[#102033]">{item.question}</p>
                  <p className="mt-2 text-sm leading-7 text-[#556374]">{item.answer}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[2.2rem] bg-[var(--accent)] p-7 text-white shadow-[0_24px_80px_rgba(229,71,28,0.22)] sm:p-8">
            <p className="text-sm uppercase tracking-[0.28em] text-white/70">Volgende stap</p>
            <h2 className="display-font mt-3 text-3xl font-bold tracking-tight">
              Hierna hoef je alleen nog je echte betaal-link toe te voegen.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/84">
              De site is nu gericht op één helder verdienidee. Daarna kun je per plan een Stripe Payment Link koppelen en direct testen of bezoekers betalen.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#b9401c]" href="/checkout">
                Open checkout
              </Link>
              <Link className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white" href="/register?plan=growth-club">
                Registreren
              </Link>
              <Link className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white" href="#faq">
                Lees de uitleg
              </Link>
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}