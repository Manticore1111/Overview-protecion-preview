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

  return (
    <main className="grain min-h-screen bg-[var(--background)] px-6 py-8 sm:px-8 lg:px-12">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <article className="border border-[rgba(255,255,255,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-7 text-[#d2d2d2] shadow-[0_24px_80px_rgba(0,0,0,0.25)] sm:p-10 lg:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">{service.index} {service.title}</p>
          <h1 className="display-font mt-4 text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
            {service.detailTitle}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[#b9b9b9] sm:text-lg">
            {service.detailIntro}
          </p>

          <div className="mt-8 overflow-hidden border border-[rgba(255,255,255,0.08)] bg-black/20">
            <img src={service.image} alt={service.title} className="h-[280px] w-full object-cover sm:h-[360px]" />
          </div>

          <div className="mt-8 space-y-6 text-base leading-8 text-[#c0c0c0] sm:text-lg">
            {service.detailParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 border-t border-[rgba(255,255,255,0.08)] pt-6 text-sm text-[#b7b7b7] sm:flex-row sm:items-center sm:justify-between">
            <Link className="transition hover:text-[var(--accent)]" href="/#diensten">
              Terug naar diensten
            </Link>
            <a className="transition hover:text-[var(--accent)]" href={`mailto:${siteConfig.ownerEmail}`}>
              {siteConfig.ownerEmail}
            </a>
          </div>
        </article>
      </div>
    </main>
  );
}