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
            Deze voorwaarden gelden voor de digitale abonnementen van {siteConfig.businessName}.
          </p>
        </header>

        <section className="panel rounded-[2rem] p-7 text-sm leading-8 text-[#556374]">
          <p>1. Het aanbod bestaat uit digitale content, prompts, templates en aanverwante bestanden.</p>
          <p>2. Levering gebeurt digitaal via e-mail, link, Notion, Drive of een vergelijkbare online omgeving.</p>
          <p>3. Omdat het om digitale inhoud gaat, kan toegang na levering niet altijd worden teruggedraaid.</p>
          <p>4. De eigenaar behoudt het recht om de inhoud van maandelijkse drops te actualiseren of te verbeteren.</p>
          <p>5. Klanten mogen geleverde content niet doorverkopen, kopieren of verspreiden zonder toestemming.</p>
          <p>6. Voor vragen over levering of abonnementen kan contact worden opgenomen via {siteConfig.ownerEmail}.</p>
        </section>

        <Link className="rounded-full bg-[#102033] px-5 py-3 text-center text-sm font-semibold text-white" href="/">
          Terug naar homepage
        </Link>
      </div>
    </main>
  );
}