# Agnès Institut - Site Web

Site vitrine professionnel pour **Agnès Institut**, institut de beauté et bien-être à Salles (33770).

## 📊 Données Business

- **Note moyenne**: 4.9/5 (584 avis)
- **Planity**: 510+ avis 5 étoiles
- **Google Maps**: 68 avis, 4.8/5
- **Adresse**: 5 Place de la Carreyre, 33770 Salles
- **Téléphone**: 05 56 88 36 52

## 🛠️ Stack Technique

- **React 19** - UI library
- **Vite 7** - Build tool & dev server
- **TypeScript 5** - Type safety
- **Tailwind CSS 4** - Styling
- **shadcn/ui** - Pre-built accessible components
- **Motion** - Animations

## 🚀 Démarrage

```bash
# Installation des dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Ouvrir http://localhost:5173
```

## 📦 Build Production

```bash
npm run build
npm run preview
```

## 🌐 Déploiement

Hébergeurs recommandés:

- **Vercel** (gratuit) - `npx vercel`
- **Netlify** (gratuit) - glisser-déposer le dossier `dist/`
- **OVH** (domaine .fr)

## 🎨 Personnalisation

### Couleurs
Les couleurs sont définies dans `src/index.css`:
- **Primary**: Rose (#D4A5A5)
- **Accent**: Lavande (#9B8AA5)

### Contenu
Toutes les données business sont dans `src/lib/constants.ts`:
- Informations de contact
- Services et tarifs
- Avis clients
- Horaires d'ouverture

### Images
Remplacez les placeholders dans le code par vos vraies images.

## 📁 Structure du Projet

```
src/
├── components/
│   ├── layout/         # Navigation
│   ├── sections/       # Hero, Services, About, etc.
│   └── ui/             # shadcn/ui components
├── hooks/
│   └── useTheme.ts     # Dark mode toggle
├── lib/
│   ├── constants.ts    # Business data
│   └── utils.ts        # Utility functions
├── App.tsx             # Main app
├── main.tsx            # Entry point
└── index.css           # Tailwind + theme
```

## 📄 Documentation

Voir `ALLINFOSFOUND.md` pour toutes les informations collectées sur l'entreprise.

## ✅ Features

- [x] Design Bien-être / Wellness
- [x] Mode sombre
- [x] Animations fluides
- [x] Responsive (mobile-first)
- [x] SEO optimisé
- [x] Avis clients réels
- [x] Lien Planity pour réservation

## 📞 Contact

- **Site**: http://www.agnes-institut33.fr (actuellement hors service)
- **Réservation**: [Planity](https://www.planity.com/foucaud-agnes-33770-salles)
- **Instagram**: [@agnesinstitut33](https://www.instagram.com/agnesinstitut33/)

---

© 2026 Agnès Institut. Tous droits réservés.

*Site généré avec le Landing Page Generator - January 2026*
