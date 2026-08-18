"use client";

import Link from "next/link";
import { useEffect, useLayoutEffect } from "react";

import { services } from "@/lib/services";
import { siteConfig } from "@/lib/site-config";

const values = [
  {
    title: "Snelle inzet",
    body: "Direct schakelen voor structurele beveiliging, tijdelijke ondersteuning of spoed.",
  },
  {
    title: "Representatieve beveiligers",
    body: "Professionele aanwezigheid die past bij locatie, bezoekers en uitstraling.",
  },
  {
    title: "Maatwerk per locatie",
    body: "Elke inzet afgestemd op risico, routing, openingstijden en publieksstroom.",
  },
  {
    title: "Heldere communicatie",
    body: "Korte lijnen, duidelijke afspraken en een aanspreekpunt dat bereikbaar blijft.",
  },
];

const stats = [
  { value: "24/7", label: "Bereikbaar" },
  { value: "Direct", label: "Korte lijnen" },
  { value: "Maatwerk", label: "Per locatie" },
];

export default function Home() {
  useLayoutEffect(() => {
    const navigation = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;

    if (navigation?.type === "reload") {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, []);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    if (!elements.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main className="grain relative overflow-hidden">
      <section className="relative mx-auto flex min-h-screen w-full max-w-7xl overflow-hidden px-6 pb-24 pt-2 sm:px-8 lg:px-12">
        <div className="absolute inset-0">
          <video
            className="h-full w-full object-cover opacity-45"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/overview%20protection%20video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.82),rgba(0,0,0,0.64)_42%,rgba(0,0,0,0.84))]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.1),transparent_36%)]" />
        </div>

        <div className="relative z-10 flex flex-1 justify-center">
          <div className="max-w-4xl space-y-10 bg-[linear-gradient(180deg,rgba(12,12,12,0.42),rgba(12,12,12,0.18))] px-6 py-8 text-center shadow-[0_24px_60px_rgba(0,0,0,0.18)] sm:px-8 lg:px-10 lg:py-14">
            <div className="space-y-7">
              <p className="mx-auto text-sm font-medium uppercase tracking-[0.24em] text-[#8f8f8f]">
                {siteConfig.businessName} · Professionele inzet met korte lijnen
              </p>
              <h1 className="display-font mx-auto max-w-4xl text-5xl font-semibold leading-[0.92] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
                Beveiliging voor objecten, winkels, horeca, zorg en evenementen.
              </h1>
              <p className="mx-auto max-w-2xl text-lg leading-8 text-[#b4b4b4] sm:text-xl">
                Overview Protection levert representatieve beveiliging op maat, met snelle inzet, duidelijke communicatie en aandacht voor veiligheid én uitstraling.
              </p>
            </div>

            <div className="flex flex-col justify-center gap-5 sm:flex-row">
              <a
                className="bg-[var(--accent)] px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-[#e2c15a]"
                href="#contact"
              >
                Vraag beveiliging aan
              </a>
              <a
                className="border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.03)] px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:border-[var(--line)] hover:text-[var(--accent)]"
                href="#diensten"
              >
                Bekijk onze diensten
              </a>
            </div>

            <div className="grid gap-5 text-left md:grid-cols-3">
              {stats.map((item) => (
                <div key={item.label} className="border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] px-6 py-6">
                  <p className="display-font text-4xl font-semibold text-[var(--accent)]">{item.value}</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.18em] text-[#9a9a9a]">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="diensten" className="mx-auto w-full max-w-7xl scroll-mt-36 px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div data-reveal className="scroll-reveal mb-14 flex flex-col gap-6 border-t border-[rgba(255,255,255,0.08)] pt-12 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">Diensten</p>
            <h2 className="display-font mt-3 max-w-3xl text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
              Beveiliging die past bij uw locatie en uw mensen.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-[#a9a9a9]">
            Van een vaste inzet tot tijdelijke ondersteuning: iedere dienst begint met overzicht, duidelijke afspraken en een professionele uitstraling.
          </p>
        </div>
        <div className="grid overflow-hidden border-y border-[rgba(255,255,255,0.1)] lg:grid-cols-[0.94fr_1.06fr]">
          {services[0] ? (
            <Link
              data-reveal
              className="scroll-reveal group relative min-h-[430px] overflow-hidden border-b border-[rgba(255,255,255,0.1)] lg:min-h-[620px] lg:border-b-0 lg:border-r"
              href={`/diensten/${services[0].slug}`}
            >
              {services[0].image ? (
                <img
                  src={services[0].image}
                  alt={services[0].title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                />
              ) : null}
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05),rgba(0,0,0,0.84))]" />
              <div className="relative flex h-full min-h-[430px] flex-col justify-end p-7 sm:p-10 lg:min-h-[620px] lg:p-12">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">Uitgelichte dienst</p>
                <h3 className="display-font mt-4 text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">{services[0].title}</h3>
                <p className="mt-4 max-w-md text-base leading-7 text-[#e0e0e0] sm:text-lg">{services[0].preview}</p>
                <p className="mt-7 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">Bekijk dienst</p>
              </div>
            </Link>
          ) : null}

          <div className="divide-y divide-[rgba(255,255,255,0.1)]">
            {services.slice(1).map((service) => (
              <Link
                data-reveal
                key={service.slug}
                className="scroll-reveal group grid min-h-[150px] grid-cols-[90px_1fr] items-center gap-5 px-5 py-6 transition hover:bg-[rgba(255,255,255,0.035)] sm:grid-cols-[128px_1fr_auto] sm:gap-7 sm:px-8 sm:py-7 lg:min-h-[155px]"
                href={`/diensten/${service.slug}`}
              >
                {service.image ? (
                  <div className="h-24 w-[90px] overflow-hidden border border-[rgba(255,255,255,0.1)] bg-black/25 sm:h-28 sm:w-32">
                    <img
                      src={service.image}
                      alt=""
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                ) : (
                  <div className="h-24 w-[90px] border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] sm:h-28 sm:w-32" />
                )}
                <div>
                  <h3 className="display-font text-2xl font-semibold tracking-tight text-white sm:text-3xl">{service.title}</h3>
                  <p className="mt-2 max-w-lg text-sm leading-6 text-[#bdbdbd] sm:text-base">{service.preview}</p>
                </div>
                <span className="col-start-2 mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)] sm:col-start-auto sm:mt-0 sm:text-right">
                  Bekijk dienst
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="waarden" className="mx-auto w-full max-w-7xl scroll-mt-36 px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div data-reveal className="scroll-reveal border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] p-8 lg:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">Waarom Overview Protection</p>
            <h2 className="display-font mt-4 text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
              Zakelijke beveiliging vraagt om meer dan alleen aanwezigheid.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-[#aeaeae]">
              Opdrachtgevers kiezen voor duidelijke afspraken, representatief optreden en beveiliging die past bij de locatie.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {values.map((value) => (
              <div data-reveal key={value.title} className="scroll-reveal border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] p-8">
                <p className="display-font text-2xl font-semibold text-white">{value.title}</p>
                <p className="mt-3 text-sm leading-7 text-[#b3b3b3]">{value.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)]">
        <div className="mx-auto grid w-full max-w-7xl lg:grid-cols-[0.96fr_1.04fr]">
          <div data-reveal className="scroll-reveal min-h-[340px] overflow-hidden sm:min-h-[460px]">
            <img
              src="/Kernwaarde%20Overviewprotection.png"
              alt="Samenwerking binnen een professioneel beveiligingsteam"
              className="h-full w-full object-cover grayscale transition duration-700 hover:scale-[1.02]"
            />
          </div>
          <div data-reveal className="scroll-reveal flex flex-col justify-center px-6 py-16 sm:px-8 lg:px-14 lg:py-20">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">Samen sterk op locatie</p>
            <h2 className="display-font mt-4 max-w-2xl text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
              Een partner die er staat wanneer het telt.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-[#aeaeae]">
              Betrouwbare beveiliging ontstaat door heldere afspraken, professioneel optreden en collega&apos;s die als een team samenwerken.
            </p>
            <div className="mt-10 grid gap-5 border-t border-[rgba(255,255,255,0.1)] pt-6 sm:grid-cols-3">
              <div>
                <p className="display-font text-2xl font-semibold text-[var(--accent)]">24/7</p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-[#a8a8a8]">Bereikbaar</p>
              </div>
              <div>
                <p className="display-font text-2xl font-semibold text-[var(--accent)]">Direct</p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-[#a8a8a8]">Schakelen</p>
              </div>
              <div>
                <p className="display-font text-2xl font-semibold text-[var(--accent)]">Op maat</p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-[#a8a8a8]">Per locatie</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="grid gap-10 border-t border-[rgba(255,255,255,0.08)] pt-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12">
          <div data-reveal className="scroll-reveal border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] p-8 lg:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">{siteConfig.serviceArea.label}</p>
            <h2 className="display-font mt-4 text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
              {siteConfig.serviceArea.title}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-[#aeaeae]">
              {siteConfig.serviceArea.body}
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {siteConfig.serviceArea.items.map((item) => (
              <div
                data-reveal
                key={item.title}
                className="scroll-reveal border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] p-8"
              >
                <p className="display-font text-2xl font-semibold text-white">{item.title}</p>
                <p className="mt-3 text-sm leading-7 text-[#b3b3b3]">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-6 sm:px-8 lg:px-12 lg:py-10">
        <div data-reveal className="scroll-reveal border border-[rgba(212,175,55,0.35)] bg-[linear-gradient(110deg,rgba(212,175,55,0.14),rgba(255,255,255,0.04)_48%,rgba(255,255,255,0.02))] px-7 py-9 text-white shadow-[0_24px_60px_rgba(0,0,0,0.24)] sm:px-10 lg:px-14 lg:py-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--accent)]">24/7 bereikbaar</p>
              <h2 className="display-font mt-3 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
                Direct beveiliging nodig?
              </h2>
              <p className="mt-4 text-base leading-7 text-[#cfcfcf] sm:text-lg">
                Bel ons direct voor spoed, tijdelijke ondersteuning of een beveiligingsvraagstuk dat snel aandacht vraagt.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-stretch">
              <a
                className="bg-[var(--accent)] px-6 py-4 text-center text-sm font-semibold uppercase tracking-[0.16em] text-black transition hover:bg-[#e2c15a]"
                href="tel:+31625168112"
              >
                Bel 06 25168112
              </a>
              <a
                className="border border-[rgba(255,255,255,0.16)] px-6 py-4 text-center text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                href="#contact"
              >
                Stuur een aanvraag
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto w-full max-w-7xl scroll-mt-36 px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div data-reveal className="scroll-reveal border-t border-[rgba(212,175,55,0.32)] pt-12">
          <div className="grid gap-10 lg:grid-cols-[1.06fr_0.94fr] lg:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">Contact</p>
              <h2 className="display-font mt-4 max-w-2xl text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
                Een vraag over beveiliging? U spreekt direct met ons.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#b8b8b8] sm:text-lg">
                Voor een aanvraag, tijdelijke ondersteuning of overleg over een locatie: neem rechtstreeks contact op. We bespreken wat er nodig is en wie het aanspreekpunt wordt.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  className="bg-[var(--accent)] px-6 py-4 text-center text-sm font-semibold uppercase tracking-[0.16em] text-black transition hover:bg-[#e2c15a]"
                  href="tel:+31625168112"
                >
                  Bel 06 25168112
                </a>
                <a
                  className="border border-[rgba(255,255,255,0.15)] px-6 py-4 text-center text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  href="mailto:info@overviewprotection.com"
                >
                  Stuur een e-mail
                </a>
              </div>
            </div>

            <div className="border border-[rgba(255,255,255,0.1)] bg-[linear-gradient(160deg,rgba(255,255,255,0.045),rgba(255,255,255,0.015))] p-7 sm:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">Direct bereikbaar</p>
              <div className="mt-7 divide-y divide-[rgba(255,255,255,0.1)] border-y border-[rgba(255,255,255,0.1)]">
                <div className="py-5">
                  <p className="text-xs uppercase tracking-[0.18em] text-[#999]">M. Yildiz</p>
                  <a className="display-font mt-2 block text-2xl font-semibold text-white transition hover:text-[var(--accent)]" href="tel:+31625168112">
                    06 25168112
                  </a>
                </div>
                <div className="py-5">
                  <p className="text-xs uppercase tracking-[0.18em] text-[#999]">S. Wien</p>
                  <a className="display-font mt-2 block text-2xl font-semibold text-white transition hover:text-[var(--accent)]" href="tel:+31682148222">
                    06 82148222
                  </a>
                </div>
                <div className="py-5">
                  <p className="text-xs uppercase tracking-[0.18em] text-[#999]">E-mail</p>
                  <a className="mt-2 block break-all text-base text-[var(--accent)] transition hover:text-white" href="mailto:info@overviewprotection.com">
                    info@overviewprotection.com
                  </a>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm leading-6 text-[#a9a9a9]">
                <p>6942 EK Didam</p>
                <p>KVK 97123048</p>
                <p>24/7 bereikbaar</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-6 pb-16 pt-4 text-sm text-[#8f8f8f] sm:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-5 border-t border-[rgba(255,255,255,0.08)] py-8 sm:flex-row sm:items-center">
          <p className="text-[#9f9f9f]">{siteConfig.businessName} · Veiligheid begint met overzicht.</p>
          <div className="flex flex-wrap gap-5 uppercase tracking-[0.16em] text-[#b3b3b3]">
            <Link className="transition hover:text-[var(--accent)]" href="/voorwaarden">Voorwaarden</Link>
            <Link className="transition hover:text-[var(--accent)]" href="/privacy">Privacy</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
