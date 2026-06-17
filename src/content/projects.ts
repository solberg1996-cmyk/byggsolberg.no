import type { Project, ProjectCategory } from "@/types";

export const categoryLabels: Record<ProjectCategory, string> = {
  oppussing: "Oppussing",
  tilbygg: "Tilbygg",
  terrasse: "Terrasse",
  kledning: "Kledning",
  vinduer: "Vinduer & dører",
  service: "Service",
};

/**
 * Prosjektene som vises på nettsiden. SLIK BYTTER DU TIL EKTE PROSJEKTER:
 *
 *   1. Legg bildet i /public/images/projects/, f.eks. "mitt-prosjekt.jpg"
 *   2. Kopier en blokk under, fyll inn tekst, og sett:
 *         coverImage: "/images/projects/mitt-prosjekt.jpg"
 *      (la coverImage stå tom "" så lenge du ikke har foto – da vises platsholder)
 *   3. Legg gjerne flere bilder i `images: [...]` til detaljsidens galleri.
 *
 * Rekkefølgen her styrer galleriet og «Utvalgte prosjekter» på forsiden
 * (de tre første). Ekte prosjekter med foto ligger derfor først.
 * Galleri, filter, detaljside og sitemap oppdateres automatisk.
 */
export const projects: Project[] = [
  {
    slug: "ny-terrasse-horten",
    title: "Ny terrasse på 27 m²",
    category: "terrasse",
    location: "Horten",
    excerpt:
      "Den gamle terrassen ble revet og bygget opp på nytt — fra bjelkelag til levegg og rekkverk.",
    coverImage: "/images/projects/terrassehorten-hoved.jpg",
    images: [
      "/images/projects/terrassehorten-under1.jpg",
      "/images/projects/terrassehorten-under2.jpg",
      "/images/projects/terrassehorten-under3.jpg",
    ],
    year: 2026,
    challenge:
      "Den gamle terrassen var nedslitt, med råteskadet rekkverk og et bjelkelag som ikke lenger holdt mål. Kunden ønsket en solid, helt ny terrasse å nyte uterommet på i mange år framover.",
    solution:
      "Vi rev den gamle terrassen og bygde alt opp på nytt: komplett nytt bjelkelag, nye terrassebord, ny levegg og nytt rekkverk der det gamle var råteskadet. Resultatet ble en romslig terrasse på rundt 27 m².",
    testimonial: {
      quote:
        "Meget bra utført arbeid. Tydelig at Thomas kan jobben sin. Kan trygt anbefales til lignende oppdrag.",
      name: "Eva",
      location: "Horten",
      projectType: "Ny terrasse",
      rating: 5,
    },
  },
  {
    slug: "oppgradert-veranda-barkaker",
    title: "Oppgradert veranda",
    category: "terrasse",
    location: "Barkåker",
    excerpt:
      "Råteskadet bærestolpe byttet, ny levegg og forhøyet rekkverk på en eksisterende veranda.",
    coverImage: "/images/projects/veranda-barkaker-hoved.jpg",
    images: [
      "/images/projects/veranda-barkaker-for.jpg",
      "/images/projects/veranda-barkaker-under.jpg",
    ],
    year: 2026,
    challenge:
      "Verandaen hadde en råteskadet bærende stolpe som måtte utbedres. Kunden ønsket samtidig mer skjerming og et tryggere, høyere rekkverk.",
    solution:
      "Vi byttet den råteskadede stolpen, satte opp en ny levegg for bedre skjerming og forhøyet rekkverket. Verandaen står igjen solid, trygg og mer privat.",
    testimonial: {
      quote:
        "Jobben ble nøyaktig utført, til avtalt tid og pris. Meget godt fornøyd med utført arbeid.",
      name: "Ketil",
      location: "Barkåker",
      projectType: "Veranda – stolpe og levegg",
      rating: 5,
    },
  },
  {
    slug: "innebygd-garderobe-notteroy",
    title: "Innebygd garderobe",
    category: "service",
    location: "Nøtterøy",
    excerpt:
      "Et standard garderobeskap ble bygget inn for et mer helstøpt og eksklusivt uttrykk.",
    coverImage: "/images/projects/innebygd-garderobe-etter.jpg",
    images: [
      "/images/projects/innebygd-garderobe-for.jpg",
      "/images/projects/innebygd-garderobe-under.jpg",
    ],
    challenge:
      "Et frittstående garderobeskap fra IKEA løste oppbevaringen, men ble stående som et tydelig innkjøpt møbel midt i rommet. Kunden ønsket seg en innebygd løsning som lot skapet smelte sammen med veggen — for et mer komplett, helstøpt og eksklusivt uttrykk.",
    solution:
      "Vi bygde en ramme rundt skapet, kledde den med MDF-plater og sparklet skjøtene til en sømløs overflate. Resultatet fremstår som en integrert del av rommet framfor et møbel satt inntil veggen — klart til å males i samme farge som omgivelsene. Mens vi var i gang, tok vi også unna noe diverse småarbeid.",
    testimonial: {
      quote:
        "Jeg fikk hjelp av Thomas til å bygge inn et garderobeskap, pluss diverse småarbeid. Han er lett å kommunisere med, tilgjengelig og inntrykket var veldig bra og profesjonelt. Han kom på befaring og la frem flere forslag til løsninger som kunne passe. Resultatet ble veldig bra. Anbefales på det sterkeste.",
      name: "Johanne",
      location: "Nøtterøy",
      projectType: "Innebygd garderobe",
      rating: 5,
    },
  },
  {
    slug: "utetrapp-sittebenk-tolvsrod",
    title: "Utetrapp med sittebenk",
    category: "service",
    location: "Tolvsrød",
    excerpt:
      "En kombinert utetrapp og sittebenk som gjorde overgangen fra terrassedør til hage både praktisk og innbydende.",
    coverImage: "/images/projects/utetrapp-tolvsrod-2.jpg",
    images: [
      "/images/projects/utetrapp-tolvsrod-1.jpg",
      "/images/projects/utetrapp-tolvsrod-3.jpg",
      "/images/projects/utetrapp-tolvsrod-4.jpg",
      "/images/projects/utetrapp-tolvsrod-5.jpg",
    ],
    year: 2026,
    challenge:
      "Kunden ønsket en trapp ned fra terrassen, kombinert med en sittebenk — en løsning som både tok nivåforskjellen og ga en naturlig plass å slå seg ned.",
    solution:
      "Vi bygde og monterte en utetrapp med integrert sittebenk ved terrassedøren, tilpasset stedet. Hele jobben var ferdig på én dag.",
    testimonial: {
      quote:
        "Super fornøyd, lett å kommunisere med. Avtaler ble gjennomført i tide. Resultatet ble bra.",
      name: "Silje",
      location: "Tolvsrød",
      projectType: "Utetrapp med sittebenk",
      rating: 5,
    },
  },
  {
    slug: "ny-terrasse-og-utetrapp",
    title: "Ny terrasse og utetrapp",
    category: "terrasse",
    location: "Melsomvik",
    excerpt:
      "Råteskadet terrasse revet og bygget opp på nytt, med ny utetrapp og nytt rekkverk rundt kjellernedgangen.",
    coverImage: "/images/projects/ny-terrasse-utetrapp-etter2.jpg",
    images: [
      "/images/projects/ny-terrasse-utetrapp-for1.jpg",
      "/images/projects/ny-terrasse-utetrapp-for2.jpg",
      "/images/projects/ny-terrasse-utetrapp-for3.jpg",
      "/images/projects/ny-terrasse-utetrapp-hoved.jpg",
      "/images/projects/ny-terrasse-utetrapp-etter1.jpg",
      "/images/projects/ny-terrasse-utetrapp-etter3.jpg",
    ],
    year: 2026,
    challenge:
      "Både terrassen og rekkverket var råteskadet og måtte byttes. Samtidig trengte kjellernedgangen et nytt, trygt rekkverk.",
    solution:
      "Vi rev den gamle terrassen og bygde nytt bjelkelag og ny terrasse, satte opp en ny utetrapp, og monterte nytt rekkverk rundt kjellernedgangen. Et solid og trygt uterom, klart for mange år framover.",
  },
  {
    slug: "etterisolering-kledning-tolvsrod",
    title: "Etterisolering og ny kledning",
    category: "kledning",
    location: "Tolvsrød",
    excerpt:
      "To yttervegger etterisolert og kledd på nytt, med ny vindusåpning og to nye vinduer.",
    coverImage: "/images/projects/etterisolering-tolvsrod-3.jpg",
    images: [
      "/images/projects/etterisolering-tolvsrod-1.jpg",
      "/images/projects/etterisolering-tolvsrod-2.jpg",
    ],
    year: 2026,
    challenge:
      "To yttervegger hadde gammel kledning og for dårlig isolasjon. Kunden ønsket et varmere hus, et friskere uttrykk og mer dagslys inn i rommet.",
    solution:
      "Vi rev den gamle kledningen, etterisolerte begge veggene og kledde dem på nytt. Vi laget også en ny vindusåpning og satte inn to nye vinduer — for et tettere, lysere og penere resultat.",
    testimonial: {
      quote:
        "Kunne gjerne gitt 10 stjerner om det var mulig. Fantastisk håndverker som leverte høy kvalitet, holdt avtaler og var ryddig og hyggelig gjennom hele prosessen. Anbefales på det sterkeste!",
      name: "Henrik",
      location: "Tolvsrød",
      projectType: "Etterisolering og kledning",
      rating: 5,
    },
  },
];
