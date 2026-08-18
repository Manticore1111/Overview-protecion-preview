import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getServiceBySlug, services } from "@/lib/services";
import { siteConfig } from "@/lib/site-config";

type ServiceDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: siteConfig.businessName,
    };
  }

  return {
    title: `${service.title} | ${siteConfig.businessName}`,
    description: service.body,
  };
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const otherServices = services.filter((item) => item.slug !== service.slug);

  return (
    <main className="grain min-h-screen overflow-hidden bg-[var(--background)]">
      <section className="relative min-h-[520px] overflow-hidden border-y border-[rgba(255,255,255,0.1)] sm:min-h-[590px]">
        <img src={service.image} alt={service.title} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.9),rgba(0,0,0,0.64)_52%,rgba(0,0,0,0.24))]" />
        <div className="relative mx-auto flex min-h-[520px] w-full max-w-7xl flex-col justify-end px-6 py-12 sm:min-h-[590px] sm:px-8 lg:px-12 lg:py-16">
          <Link className="mb-auto w-fit text-xs font-semibold uppercase tracking-[0.2em] text-[#d0d0d0] transition hover:text-[var(--accent)]" href="/#diensten">
            Terug naar diensten
          </Link>
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">Dienst {service.index} · {service.title}</p>
            <h1 className="display-font mt-5 text-5xl font-semibold leading-[0.96] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              {service.detailTitle}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[#dedede] sm:text-xl">
              {service.detailIntro}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 sm:px-8 lg:grid-cols-[0.76fr_1.24fr] lg:px-12 lg:py-24">
        <aside className="h-fit border-y border-[rgba(212,175,55,0.34)] py-7 lg:sticky lg:top-36">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">In het kort</p>
          <p className="display-font mt-4 text-2xl font-semibold leading-8 text-white">{service.summary}</p>
          <dl className="mt-7 space-y-5 border-t border-[rgba(255,255,255,0.1)] pt-6 text-sm leading-7">
            <div>
              <dt className="uppercase tracking-[0.18em] text-[#9d9d9d]">Werkgebied</dt>
              <dd className="mt-1 text-[#d2d2d2]">{service.title}</dd>
            </div>
            <div>
              <dt className="uppercase tracking-[0.18em] text-[#9d9d9d]">Werkwijze</dt>
              <dd className="mt-1 text-[#d2d2d2]">Afgestemd op locatie, risico en planning.</dd>
            </div>
            <div>
              <dt className="uppercase tracking-[0.18em] text-[#9d9d9d]">Contact</dt>
              <dd className="mt-1 text-[#d2d2d2]">{siteConfig.ownerEmail}</dd>
            </div>
          </dl>
        </aside>

        <article>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">Over deze dienst</p>
          <h2 className="display-font mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
            Wat {service.title.toLowerCase()} voor uw locatie betekent.
          </h2>
          <div className="mt-8 space-y-7 text-base leading-8 text-[#c5c5c5] sm:text-lg">
            {service.detailParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </article>
      </section>

      <section className="border-y border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.018)]">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">Wat de inzet omvat</p>
            <h2 className="display-font mt-4 text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
              Rustig, zichtbaar en zorgvuldig georganiseerd.
            </h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {service.highlights.map((highlight, index) => (
              <article key={highlight} className="border-t border-[rgba(212,175,55,0.42)] pt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">0{index + 1}</p>
                <p className="display-font mt-4 text-xl font-semibold leading-8 text-white">{highlight}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="flex flex-col gap-6 border-t border-[rgba(255,255,255,0.1)] pt-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">Andere werkgebieden</p>
            <h2 className="display-font mt-4 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
              Bekijk ook onze andere diensten.
            </h2>
          </div>
          <a className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent)] transition hover:text-white" href={`mailto:${siteConfig.ownerEmail}`}>
            {siteConfig.ownerEmail}
          </a>
        </div>
        <div className="mt-10 grid border-y border-[rgba(255,255,255,0.1)] sm:grid-cols-2 lg:grid-cols-4">
          {otherServices.map((otherService) => (
            <Link
              key={otherService.slug}
              className="group border-b border-[rgba(255,255,255,0.1)] px-5 py-6 transition hover:bg-[rgba(255,255,255,0.035)] sm:border-r sm:last:border-r-0 lg:border-b-0"
              href={`/diensten/${otherService.slug}`}
            >
              <p className="display-font text-xl font-semibold text-white transition group-hover:text-[var(--accent)]">{otherService.title}</p>
              <p className="mt-2 text-sm leading-6 text-[#aaa]">{otherService.preview}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}