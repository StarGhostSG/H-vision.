import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";


export const navItems = [
  { label: "Services", href: "Equipe" },
  { label: "Equipe", href: "Matériels" },
  { label: "Matériels", href: "Client" },
  { label: "Client", href: "Testimonials" }, // Assure-toi que "href" correspond à l'id de la section Testimonials
];





export const Services = [
  {
    icon: <BotMessageSquare />,
    text: "Qui somme nous?",
    description:
      "H.VISION est une agence événementielle avant-gardiste algérienne, spécialisée dans l'événementiel. Pour vos soirées (gala, lancement de produit, inauguration, team building, séminaire, défilé d mode ou tout autre événement), notre agence analyse vo, besoins et envies afn de créer un événement optimal dans le respect de votr, cahier des chages. Notre équipe saura concevoir pour vous un événemen, innovant, créatif et à votre image.",
  },
  {
    icon: <Fingerprint />,
    text: "Nos services",
    description: (
      <>
        1- Evènementiel <br /> <br />
        2- SCÉNOGRAPHIE ARTISTIQUE <br /> <br />
        3- Technique évènementiel <br /> <br />
        4- Sonorisation <br /> <br />
        5- Eclairage
      </>
    )
  },
   
  {
    icon: <ShieldHalf />,
    text: "Notre équipe",
    description:
      "Notre agence est composée d'une jeune équipe professionnelle, d'éxperience et dynamique. Nous nous appuyons Sur un réseau de partenaires freelances locaux et un pole d'ingénieurs régionales. C'est ainsi que nous pouvons monter sur des projets conséquents en respectant des deadilines serrée. L'architecture et le pilotage de nos projets restent toujours gérés en interne par le manager",
  },
  {
    icon: <BatteryCharging />,
    text: "Nos réalisations",
    description:
      (
        <>
      Soirée cocktail dînatoire et dîner de gala. <br /><br />
      Lancement de produits et vernissage. Défilé, exposition artistique, salon…etc <br /><br />
      Réceptions d'entreprises : séminaires, congrès, symposium, Networking, team building, etc. <br /><br />
      Inaugurations, conférences. Evénements corporate. Concert. Compagne et caravane.
        </>
    )
  },
  {
    icon: <PlugZap />,
    text: "Nos Compténces ",
    description: (
      <>
      Architecture d'intérieur : mise en scène des espaces, design d'intérieur avec du mobilier, luminaire, tapis, art de la table, etc. <br /> <br />
      Décoration : décoration d'espace, casting, décoration florale, construction de stands. <br /> <br />
      Animation artistique : shows artistiques, spectacles, live painting, projection numérique, performance de danse, musiciens, magiciens, caricaturistes, close up, clown etc. <br /> <br />
      Technique : éclairage, structures, vidéo-projection, sonorisation, effets spéciaux.
      </>
    )
  },
  {
    icon: <GlobeLock />,
    text: "SONORISATION",
    description:
      "H.VISION intervient depuis plus de 20 ans dans la sonorisation de soirées et événements. Nous pourrons donc intervenir dans vos propres locaux ou dans une salle louée pour la soirée. Nous choisirons le kit son le mieux approprié à la salle et au nombre de personnes, allant des petites enceintes amplifiées à d'énormes kit son pour les concerts par exemple. Nous disposons également du matériel audio et du savoir-faire de DJ, nous pouvons donc assurer la partie musicale de votre événement.",
  },
];

export const Materiels = [
  {
    title: "Audio",
    features: [
      "Perche micro petit modèle K&M",
      "Parc Micro divers en usage et marque",
      "Micro HF Shure",
      "Micro serre-tête HF",
    ],
  },
  {
    title: "Lumière",
    features: [
      "Console MA pour Lumiere",
      "Sunlight",
      "Wach à led",
      "Projecteur découpe led",
    ],
  },
  {
    title: "Technique",
    features: [
      "Machine à fumée ",
      "Machine à bruyère",
      "Armoire électrique 125 A ",
      "Câblage électrique haute tension",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "+213 540 45 19 08" },
  { href: "https://www.facebook.com/profile.php?id=100075867280765&mibextid=ZbWKwL", text: "Facebook" },
  { href: "https://www.instagram.com/hvisi_on?igsh=MTJ6c2ZpaDg2N2x6MA==", text: "Instagrame" },
  { href: "https://vm.tiktok.com/ZMryDoFay/", text: "Tiktok" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Jobs" },
];