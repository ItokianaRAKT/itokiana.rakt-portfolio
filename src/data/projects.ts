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
    id: 'exam-hub',
    number: '01',
    title: 'EXAM HUB',
    description: "Plateforme d'examens en ligne par QCM.",
    stack: ['React', 'TypeScript', 'Express', 'PostgreSQL'],
    image: '/exam-hub.png',
    href: 'https://github.com/Anonymat-HS/Exam-Hub-frontend.git',
  },
  {
    id: 'genespec',
    number: '02',
    title: 'GENESPEC',
    description: "Générateur qui automatise la rédaction de spécifications d'API.",
    stack: ['React', 'TypeScript', 'OpenAI'],
    image: '/genespec.png',
    href: 'https://genespec.vercel.app/',
  },
  {
    id: 'capsule',
    number: '03',
    title: 'CAPSULE',
    description: 'Capsules temporelles numériques.',
    stack: ['React', 'TypeScript', 'Spring Boot', 'PostgreSQL'],
    image: '/capsule.png',
  },
  {
    id: 'over-the-wire',
    number: '04',
    title: 'OVER THE WIRE',
    description: 'Write-up des challenges Linux et sécurité des niveaux Bandit.',
    stack: ['Linux', 'Bash', 'SSH'],
    image: '/owt.png',
  },
  {
    id: 'others',
    number: '05',
    title: 'AUTRES PROJETS',
    description: 'Petits projets, POC, et expérimentations.',
    stack: [],
    image: '/github.png',
    href: 'https://github.com/ItokianaRAKT',
  },
]
