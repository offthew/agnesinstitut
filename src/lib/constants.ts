/**
 * AGNES INSTITUT - Business Constants
 * Institut de beauté et bien-être à Salles (33770)
 * 
 * Data source: Salles Prospector API + Planity + Google Maps
 * Last updated: January 6, 2026
 */

export const BUSINESS = {
  name: "Agnès Institut",
  fullName: "AGNES INSTITUT",
  tagline: "Votre havre de beauté au cœur de Salles",
  description: "Institut de beauté et bien-être",
  owner: "Agnès FOUCAUD",
  
  // Contact
  phone: "05 56 88 36 52",
  phoneSecondary: "06 06 56 84 24",
  email: null,
  
  // Address
  address: {
    street: "5 Place de la Carreyre",
    city: "Salles",
    postalCode: "33770",
    region: "Nouvelle-Aquitaine",
    country: "France",
    full: "5 Place de la Carreyre, 33770 Salles",
  },
  
  // Coordinates (Salles center)
  coordinates: {
    lat: 44.5528,
    lng: -0.8667,
  },
  
  // Links
  links: {
    planity: "https://www.planity.com/foucaud-agnes-33770-salles",
    instagram: "https://www.instagram.com/agnesinstitut33/",
    facebook: null,
    website: "http://www.agnes-institut33.fr", // Currently down
  },
  
  // Hours
  hours: [
    { day: "Lundi", hours: "08:30 – 12:00" },
    { day: "Mardi", hours: "09:00 – 19:00" },
    { day: "Mercredi", hours: "09:00 – 19:00" },
    { day: "Jeudi", hours: "09:00 – 19:00" },
    { day: "Vendredi", hours: "09:00 – 19:00" },
    { day: "Samedi", hours: "08:30 – 18:30" },
    { day: "Dimanche", hours: "Fermé" },
  ],
  
  // Stats (from real reviews)
  stats: {
    planityRating: 5.0,
    planityReviews: 510,
    googleRating: 4.8,
    googleReviews: 68,
    totalReviews: 584,
    averageRating: 4.9,
  },
} as const;

export const SERVICES = [
  {
    id: "soins-visage",
    icon: "Sparkles",
    title: "Soins Visage",
    description: "Soins personnalisés pour révéler l'éclat naturel de votre peau. Hydratants, purifiants ou anti-âge.",
    price: "À partir de 30€",
    duration: "40 min - 1h",
  },
  {
    id: "epilations",
    icon: "Flower2",
    title: "Épilations",
    description: "Épilations douces et précises pour une peau parfaitement lisse. Femmes et hommes.",
    price: "À partir de 9€",
    duration: "15 - 45 min",
  },
  {
    id: "massages",
    icon: "Heart",
    title: "Massages Bien-être",
    description: "Massages relaxants aux pierres chaudes ou californiens pour une détente absolue.",
    price: "À partir de 59€",
    duration: "40 min - 1h",
  },
  {
    id: "regard",
    icon: "Eye",
    title: "Beauté du Regard",
    description: "Réhaussement de cils, teinture, mise en beauté de vos yeux.",
    price: "À partir de 47€",
    duration: "45 min",
  },
  {
    id: "bronzage",
    icon: "Sun",
    title: "Bronzage",
    description: "Spray bronzant naturel pour un teint hâlé toute l'année.",
    price: "30€",
    duration: "30 min",
  },
  {
    id: "soins-corps",
    icon: "Leaf",
    title: "Soins Corps",
    description: "Gommages, enveloppements et soins du corps pour une peau douce et régénérée.",
    price: "Sur devis",
    duration: "Variable",
  },
] as const;

export const REVIEWS = [
  {
    id: 1,
    name: "Cliente Planity",
    rating: 5,
    text: "Soin de qualité, personne agréable, je recommande !!!",
    date: "Décembre 2025",
    source: "Planity",
    isFake: false,
  },
  {
    id: 2,
    name: "Cliente Planity",
    rating: 5,
    text: "Agnès est vraiment hyper pro et super sympa ! Merci à elle pour son accueil et ses bons conseils !",
    date: "Décembre 2025",
    source: "Planity",
    isFake: false,
  },
  {
    id: 3,
    name: "Julie D.",
    rating: 5,
    text: "Très bon accueil, Agnès est très professionnelle et douce. Je recommande vivement cet institut.",
    date: "2025",
    source: "Google",
    isFake: false,
  },
  {
    id: 4,
    name: "Stephanie D.",
    rating: 5,
    text: "Accueil parfait, des professionnelles discrètes, douces, souriantes et d'une gentillesse.",
    date: "Janvier 2022",
    source: "Facebook",
    isFake: false,
  },
] as const;

export const TRUST_BADGES = [
  {
    value: "510+",
    label: "Avis 5 étoiles",
    sublabel: "sur Planity",
  },
  {
    value: "4.9",
    label: "Note moyenne",
    sublabel: "sur 584 avis",
  },
  {
    value: "15+",
    label: "Années d'expérience",
    sublabel: "à votre service",
  },
  {
    value: "100%",
    label: "Satisfaction",
    sublabel: "clients fidèles",
  },
] as const;

export const SEO = {
  title: "Agnès Institut | Institut de Beauté à Salles (33770)",
  description: "Institut de beauté et bien-être à Salles. Soins visage, épilations, massages. Plus de 510 avis 5 étoiles. Prenez rendez-vous avec Agnès.",
  keywords: [
    "institut de beauté Salles",
    "Agnès Institut",
    "soins esthétiques Salles 33770",
    "épilation Salles",
    "soin visage Salles",
    "massage Salles Gironde",
    "réhaussement cils Salles",
    "bien-être Gironde",
  ],
} as const;
