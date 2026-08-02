"use client";

import Link from "next/link";
import { useEffect } from "react";

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

const contactColumns = [
  {
    title: "Adres",
    lines: ["6942 EK Didam"],
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" />
      </svg>
    ),
  },
  {
    title: "Contact",
    lines: ["M. Yildiz 06-25168112", "S. Wien 06-82148222", "info@overviewprotection.com"],
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M6.62 10.79a15.46 15.46 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.56 3.57.56a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.3 21 3 13.7 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.19 2.45.56 3.57a1 1 0 0 1-.24 1.02l-2.2 2.2Z" />
      </svg>
    ),
  },
  {
    title: "Zakelijke info",
    lines: ["KVK Nummer: 97123048"],
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm1 15h-2v-6h2Zm0-8h-2V7h2Z" />
      </svg>
    ),
  },
];

export default function Home() {
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
              Werkgebieden waarin overzicht, rust en professionaliteit nodig zijn.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-[#a9a9a9]">
            Een heldere eerste indruk op de homepage, met verdieping altijd mogelijk in persoonlijk contact.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {services.map((service) => (
            <Link
              data-reveal
              key={service.slug}
              className="scroll-reveal group flex aspect-square w-full max-w-[300px] justify-self-center flex-col items-center justify-between overflow-hidden border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] p-7 text-center shadow-[0_18px_42px_rgba(0,0,0,0.18)] transition hover:border-[rgba(212,175,55,0.22)] hover:bg-[rgba(255,255,255,0.05)]"
              href={`/diensten/${service.slug}`}
            >
              <div className="w-full space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">{service.index}</p>
              {service.image ? (
                <div className="w-full overflow-hidden border border-[rgba(255,255,255,0.08)] bg-black/20 rounded-none">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-28 w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              ) : null}
                <h3 className="display-font text-[1.65rem] font-semibold tracking-tight text-white">{service.title}</h3>
                <p className="text-[15px] leading-6 text-[#cfcfcf]">{service.preview}</p>
              </div>
              <p className="w-full pt-4 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">Lees meer</p>
            </Link>
          ))}
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

      <section id="contact" className="mx-auto w-full max-w-7xl scroll-mt-36 px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div data-reveal className="scroll-reveal border border-[rgba(212,175,55,0.14)] bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] px-8 py-12 text-[#bcbcbc] shadow-[0_24px_80px_rgba(0,0,0,0.25)] sm:px-10 lg:px-14 lg:py-14">
          <div className="mb-12 flex flex-col gap-5 border-b border-[rgba(255,255,255,0.08)] pb-10 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">Contact</p>
              <h2 className="display-font mt-3 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
                Direct contact.
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-[#b2b2b2] sm:text-base">
              Bel of mail ons direct voor beveiliging op maat.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {contactColumns.map((column) => (
              <div data-reveal key={column.title} className="scroll-reveal border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] p-8 transition hover:border-[rgba(212,175,55,0.18)] hover:bg-[rgba(255,255,255,0.05)]">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--accent)] text-black shadow-[0_0_0_6px_rgba(212,175,55,0.08)]">
                  {column.icon}
                </div>
                <div className="mt-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white">{column.title}</p>
                  <div className="mt-4 space-y-3 text-sm leading-7 text-[#b9b9b9] sm:text-[15px]">
                    {column.lines.map((line) => (
                      <p key={line}>
                        {line.includes("@") ? (
                          <a className="text-[var(--accent)] transition hover:text-white" href={`mailto:${line}`}>
                            {line}
                          </a>
                        ) : line.includes("06-") ? (
                          <a className="text-[var(--accent)] transition hover:text-white" href={`tel:${line.replace(/[^\d+]/g, "")}`}>
                            {line}
                          </a>
                        ) : (
                          line
                        )}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-6 pb-16 pt-4 text-sm text-[#8f8f8f] sm:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-5 border-t border-[rgba(255,255,255,0.08)] py-8 sm:flex-row sm:items-center">
          <p className="text-[#9f9f9f]">{siteConfig.businessName} · Veiligheid begint met overzicht.</p>
          <div className="flex flex-wrap gap-5 uppercase tracking-[0.16em] text-[#b3b3b3]">
            <Link className="transition hover:text-[var(--accent)]" href="/voorwaarden">Voorwaarden</Link>
            <Link className="transition hover:text-[var(--accent)]" href="/privacy">Privacy</Link>
            <Link className="transition hover:text-[var(--accent)]" href="/owner">Eigenaar</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
