import Link from "next/link";

import { getPlanBySlug, siteConfig } from "@/lib/site-config";

type SuccessPageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export default async function ThankYouPage({ searchParams }: SuccessPageProps) {
  const resolvedParams = (await searchParams) ?? {};
  const plan = getPlanBySlug(typeof resolvedParams.plan === "string" ? resolvedParams.plan : undefined);

  return (
    <main className="grain min-h-screen px-6 py-8 sm:px-8 lg:px-12">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
        <section className="rounded-[2.4rem] bg-[#102033] p-8 text-white shadow-[0_32px_90px_rgba(16,32,51,0.24)] sm:p-10">
          <p className="text-sm uppercase tracking-[0.28em] text-white/55">bedankt</p>
          <h1 className="display-font mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Je aanvraag voor {plan.name} is klaar.
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-white/78">
            Als je via e-mail hebt besteld, ontvangt {siteConfig.ownerName} jouw aanvraag op {siteConfig.ownerEmail}. Als je via een checkout-link hebt betaald, kun je nu handmatig de levering versturen of klanttoegang delen.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#102033]" href="/preview">
              Bekijk sample inhoud
            </Link>
            <Link className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white" href="/owner">
              Naar eigenaarspagina
            </Link>
          </div>
        </section>

        <section className="panel rounded-[2rem] p-7 sm:p-8">
          <p className="text-sm uppercase tracking-[0.28em] text-[#6a7685]">Volgende stap</p>
          <ol className="mt-4 space-y-4 text-sm leading-7 text-[#556374]">
            <li>1. Bevestig de bestelling of betaling.</li>
            <li>2. Stuur de eerste maandelijkse drop of toegangslink naar de klant.</li>
            <li>3. Plan terugkerende levering of follow-up voor de volgende maand.</li>
          </ol>
        </section>
      </div>
    </main>
  );
}