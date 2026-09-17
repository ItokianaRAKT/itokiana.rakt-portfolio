export interface Project {
  id: string
  number: string
  title: string
  description: string
  stack: string[]
  href?: string
  image?: string
  device?: 'laptop' | 'phone'
}

export const projects: Project[] = [
  {
    id: 'capsule',
    number: '02',
    title: 'CAPSULE',
    description: 'Capsules temporelles numériques.',
    stack: ['React', 'TypeScript', 'Spring Boot', 'PostgreSQL'],
    image: '/capsule.png',
  },
  {
    id: 'exam-hub',
    number: '03',
    title: 'EXAM HUB',
    description: "Plateforme d'examens en ligne par QCM.",
    stack: ['React', 'TypeScript', 'Express', 'PostgreSQL'],
    image: '/exam-hub.png',
  },
  {
    id: 'genespec',
    number: '04',
    title: 'GENESPEC',
    description: "Générateur qui automatise la rédaction de spécifications d'API.",
    stack: ['React', 'TypeScript', 'OpenAI'],
    image: '/genespec.png',
    href: 'https://genespec.vercel.app/',
  },
  {
    id: 'over-the-wire',
    number: '05',
    title: 'OVER THE WIRE',
    description: 'Write-up des challenges Linux et sécurité des niveaux Bandit.',
    stack: ['Linux', 'Bash', 'SSH'],
    image: '/owt.png',
  },
  {
    id: 'others',
    number: '06',
    title: 'AUTRES PROJETS',
    description: 'Petits projets, POC, et expérimentations.',
    stack: [],
    image: '/github.png',
    href: 'https://github.com/ItokianaRAKT',
  },
]
