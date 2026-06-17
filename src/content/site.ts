// Sentral firma- og navigasjonsinfo. Brukes av header, footer, sticky-bar m.m.
// Org.nr er placeholder til vi får det reelle nummeret.

export const site = {
  name: "Solberg Byggservice AS",
  shortName: "Solberg Byggservice",
  tagline: "Faglært tømrer i Tønsberg og Vestfold.",

  phone: "+47 922 13 112",
  phoneHref: "tel:+4792213112",
  email: "post@byggsolberg.no",
  emailHref: "mailto:post@byggsolberg.no",
  responseTime: "Vi svarer som regel innen 24 timer.",

  instagram: "https://www.instagram.com/solbergbyggservice",
  instagramHandle: "@solbergbyggservice",

  // Hovedbilder – sett inn sti når foto er klart, ellers vises platsholder.
  heroImage: "/images/hero/hero-2.jpg",
  portraitImage: "", // f.eks. "/images/about/thomas.jpg"

  orgNr: "937 013 248", // TODO: sett inn reelt org.nr før lansering

  // Hovednavigasjon (Kontakt dekkes av CTA-knappen)
  nav: [
    { label: "Tjenester", href: "/tjenester" },
    { label: "Prosjekter", href: "/prosjekter" },
    { label: "Om oss", href: "/om-oss" },
  ],

  // De seks tjenestene. Slug brukes når detaljsidene bygges i fase 2;
  // inntil da peker footer-lenkene til oversikten (/tjenester).
  services: [
    {
      label: "Oppussing og rehabilitering",
      slug: "oppussing-rehabilitering",
      short: "Nytt liv til rom, overflater og planløsning — gjennomført med omtanke for detaljene.",
      intro:
        "Vi gir rom, overflater og planløsning nytt liv — fra enkeltrom til full rehabilitering av boligen.",
      includes: [
        "Kjøkken og oppholdsrom",
        "Gulv, vegger og himling",
        "Endring av planløsning",
        "Listverk og overflater",
        "Rehabilitering av eldre bolig",
      ],
    },
    {
      label: "Tilbygg og ombygging",
      slug: "tilbygg-ombygging",
      short: "Mer plass og bedre flyt, fra idé og tegning til ferdig, bærende konstruksjon.",
      intro:
        "Trenger du mer plass eller bedre flyt? Vi tar tilbygg og ombygging fra idé og tegning til ferdig konstruksjon.",
      includes: [
        "Tilbygg og påbygg",
        "Endring av bærende konstruksjon",
        "Åpne opp mellom rom",
        "Nye rom og soner",
        "Samarbeid med arkitekt eller ingeniør ved behov",
      ],
    },
    {
      label: "Terrasse og uteområder",
      slug: "terrasse-uteomrade",
      short: "Uterom i kvalitetstre som tåler årstidene og hever hele eiendommen.",
      intro:
        "Et godt uterom hever hele eiendommen. Vi bygger terrasser og uteområder i kvalitetstre som varer.",
      includes: [
        "Terrasse og platting",
        "Rekkverk og trapp",
        "Levegg og skjerming",
        "Boder og uthus",
        "Utbedring av eksisterende terrasse",
      ],
    },
    {
      label: "Kledning og utvendig arbeid",
      slug: "kledning-utvendig",
      short: "Ny kledning og utvendige detaljer som beskytter og løfter husets uttrykk.",
      intro:
        "Ny kledning beskytter huset og løfter uttrykket. Vi tar utvendig arbeid med vekt på detaljene som varer.",
      includes: [
        "Ny kledning",
        "Utskifting av råteskader",
        "Vindsperre og lekter",
        "Vannbord, hjørner og beslag",
        "Utvendig listverk",
      ],
    },
    {
      label: "Vinduer og dører",
      slug: "vinduer-dorer",
      short: "Riktig montering av vinduer og dører — tett, pent og energivennlig.",
      intro:
        "Riktig montert blir vinduer og dører tette, pene og energivennlige i mange år.",
      includes: [
        "Utskifting av vinduer",
        "Nye ytter- og innerdører",
        "Utvidelse av åpninger",
        "Tetting og listverk",
        "Balkong- og terrassedører",
      ],
    },
    {
      label: "Service og småjobber",
      slug: "service-smajobber",
      short: "De mindre oppdragene løst raskt og ryddig, med samme faglige standard.",
      intro:
        "De mindre oppdragene fortjener samme faglige standard. Vi hjelper med service og småjobber, raskt og ryddig.",
      includes: [
        "Mindre snekkerarbeid",
        "Reparasjoner og utbedring",
        "Montering og tilpasning",
        "Utbedring etter skade",
        "Diverse vedlikehold",
      ],
    },
  ],

  areas: ["Tønsberg", "Færder", "Horten", "Sandefjord", "Holmestrand", "Re"],
} as const;
