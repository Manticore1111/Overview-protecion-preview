export type Plan = {
  slug: string;
  name: string;
  price: number;
  description: string;
  audience: string;
  delivery: string;
  featured?: boolean;
  paymentUrl?: string;
  perks: string[];
};

export const siteConfig = {
  businessName: "Overview Protection",
  tagline: "Veiligheid begint met overzicht",
  ownerName: "Overview Protection",
  ownerEmail: process.env.NEXT_PUBLIC_OWNER_EMAIL || "info@overviewprotection.com",
  ownerLocation: "Nederland",
  supportHours: "24/7 beschikbaar voor dringende vragen",
  promise:
    "Professionele beveiligingsoplossingen voor objecten, winkels, evenementen en horeca – met oog voor detail, gastvrijheid en betrouwbaarheid.",
  sampleAudience: "Bedrijven, winkeliers en organisatoren",
  plans: [
    {
      slug: "object-beveiliging",
      name: "Objectbeveiliging",
      price: 1290,
      description: "Continue bewaking en professionele beveiliging voor bedrijfspanden, kantoren en terreinen.",
      audience: "Bedrijfsgebouwen en kantoren",
      delivery: "Vaste inzet of mobiel team op locatie",
      paymentUrl: process.env.NEXT_PUBLIC_STARTER_CHECKOUT_URL,
      perks: ["24/7 bewaking", "Professioneel team", "Duidelijke rapportage"],
    },
    {
      slug: "winkel-surveillance",
      name: "Winkelsurveillance",
      price: 890,
      description: "Zichtbare aanwezigheid, preventie van diefstal en een rustige winkelomgeving voor bezoekers en personeel.",
      audience: "Winkels en retaillocaties",
      delivery: "Flexibele inzet op werkdagen en piekmomenten",
      paymentUrl: process.env.NEXT_PUBLIC_GROWTH_CHECKOUT_URL,
      featured: true,
      perks: ["Preventie van diefstal", "Gastvrije aanwezigheid", "Maatwerk per locatie"],
    },
    {
      slug: "evenementen-beveiliging",
      name: "Evenementenbeveiliging",
      price: 1490,
      description: "Veiligheid, orde en een gastvrije sfeer op zakelijke evenementen en private bijeenkomsten.",
      audience: "Evenementen en private bijeenkomsten",
      delivery: "Opschaling per evenement en schaalniveau",
      paymentUrl: process.env.NEXT_PUBLIC_PREMIUM_CHECKOUT_URL,
      perks: ["Risicoanalyse", "Team op maat", "Professionele coördinatie"],
    },
  ] satisfies Plan[],
  audience: ["kantoren", "winkels", "horeca", "zorginstellingen", "evenementen", "industriële locaties"],
  benefits: [
    {
      title: "Professionele inzet",
      body: "Wij leveren beveiliging met oog voor detail, discipline en een heldere aanpak op locatie.",
    },
    {
      title: "Persoonlijke service",
      body: "Elke opdracht begint met luisteren. We ontwerpen een oplossing die past bij jouw risico’s en omgeving.",
    },
    {
      title: "Betrouwbare partner",
      body: "Onze focus ligt op stabiliteit, communicatie en een constante kwaliteit in elke opdracht.",
    },
  ],
  proofPoints: [
    "24/7 inzetbaarheid",
    "Professionele beveiligers met vakmanschap",
    "Maatwerk per locatie en situatie",
  ],
  serviceArea: {
    label: "Werkgebied",
    title: "Beveiliging vanuit Didam, afgestemd op locatie en inzet.",
    body:
      "Overview Protection is gevestigd in Didam en bespreekt per opdracht de gewenste inzet, locatie en schaal. Voor objectbeveiliging, retail, horeca, zorg en evenementen stemmen wij de beveiliging af op bereikbaarheid, risico en planning.",
    items: [
      {
        title: "Vestigingsplaats",
        body: "Didam als vaste uitvalsbasis voor intake, afstemming en inzetvoorbereiding.",
      },
      {
        title: "Inzet op locatie",
        body: "Per opdracht afgestemd op bereikbaarheid, openingstijden, publieksstroom en risico.",
      },
      {
        title: "Type dekking",
        body: "Geschikt voor structurele beveiliging, tijdelijke ondersteuning en projectmatige inzet.",
      },
      {
        title: "Beschikbaarheid",
        body: "Overdag, in de avond, 's nachts of op piekmomenten wanneer de situatie daarom vraagt.",
      },
    ],
  },
  sampleSections: [
    {
      title: "Locatieanalyse",
      body: "We beoordelen risico’s, toegangswegen en specifieke behoeften voordat we een beveiligingsplan opstellen.",
    },
    {
      title: "Uitvoering op locatie",
      body: "Wij zorgen voor een heldere inzet, duidelijke communicatie en een veilige omgeving voor medewerkers en gasten.",
    },
    {
      title: "Continu contact",
      body: "Na de opdracht blijven we beschikbaar voor evaluatie, ondersteuning en eventuele nieuwe wensen.",
    },
  ],
  faq: [
    {
      question: "Welke locaties kunt u beveiligen?",
      answer: "Wij leveren beveiliging voor kantoren, winkels, horecagelegenheden, evenementen, zorginstellingen en industriële objecten.",
    },
    {
      question: "Is de dienstverlening op maat?",
      answer: "Ja. We ontwerpen per locatie en per situatie een passende aanpak, van korte inzet tot langdurige beveiliging.",
    },
    {
      question: "Hoe verloopt de eerste intake?",
      answer: "We beginnen met een korte intake en locatiebeoordeling zodat we een passend beveiligingsplan kunnen adviseren.",
    },
    {
      question: "Bent u ook beschikbaar voor urgente aanvragen?",
      answer: "Ja. We zijn bereikbaar voor snelle advisering en kunnen indien nodig direct worden ingezet.",
    },
  ],
} as const;

export function getPlanBySlug(slug?: string) {
  return siteConfig.plans.find((plan) => plan.slug === slug) ?? siteConfig.plans[1];
}

export function buildMailtoForPlan(plan: Plan) {
  const subject = encodeURIComponent(`Bestelling ${plan.name} - ${siteConfig.businessName}`);
  const body = encodeURIComponent(
    [
      `Hallo ${siteConfig.ownerName},`,
      "",
      `Ik wil graag het plan \"${plan.name}\" bestellen.`,
      `Prijs: EUR ${plan.price} per maand`,
      "",
      "Mijn gegevens:",
      "Naam:",
      "Bedrijfsnaam:",
      "E-mailadres:",
      "Instagram/Website:",
      "",
      "Stuur mij alsjeblieft de volgende stap voor betaling en toegang.",
    ].join("\n"),
  );

  return `mailto:${siteConfig.ownerEmail}?subject=${subject}&body=${body}`;
}

export function hasPaymentLinks() {
  return siteConfig.plans.some((plan) => Boolean(plan.paymentUrl));
}