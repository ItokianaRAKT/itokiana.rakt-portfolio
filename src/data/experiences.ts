export interface Experience {
  id: string
  company: string
  role: string
  period: string
  logo: string
  description: string
  highlights: string[]
}

export const experiences: Experience[] = [
  {
    id: 'stdhub',
    company: 'STDHUB',
    role: 'Développement logiciel',
    period: 'avril 2026 — aujourd\'hui',
    logo: '/stdhub.png',
    description:
      'Participation au développement et à la maintenance d\'une plateforme interne de HEI, au sein d\'une équipe de développement.',
    highlights: [
      'Contribution au développement et à la maintenance de la plateforme',
      'Travail en équipe sur une base de code existante',
      'Introduction d\'un nouveau rôle utilisateur au sein de la plateforme',
    ],
  },
  {
    id: 'gestion-presence',
    company: 'Macrotech',
    role: 'Responsable communication numérique',
    period: 'août 2026 — aujourd\'hui',
    logo: '/macrotech.jpg',
    description:
      'Gestion de la présence numérique d\'une petite entreprise à travers la création de contenu, l\'animation des réseaux sociaux et le suivi de leurs performances.',
    highlights: [
      'Gestion de comptes sur les réseaux sociaux',
      'Création et publication de contenu',
      'Analyse des performances et adaptation de la stratégie',
    ],
  },
  {
    id: 'aucta',
    company: 'Aucta',
    role: 'Fondatrice',
    period: 'septembre 2026 — aujourd\'hui',
    logo: '/aucta.png',
    description:
      'Création et développement d\'une initiative entrepreneuriale destinée à explorer la prestation de services dans le domaine de l\'IT.',
    highlights: [
      'Création de l\'initiative et définition de son positionnement',
      'Réflexion autour des services et de son développement futur',
      'Construction progressive de son identité et de sa présence',
    ],
  },
]
