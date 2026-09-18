import type { Experience } from '../data/experiences'

interface ExperienceCardProps {
  experience: Experience
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="group relative rounded-md border border-border-light p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary-light/40 dark:border-border-dark dark:bg-white/[0.025] dark:hover:border-primary-dark/40">
      <div className="mb-4 flex items-start gap-4">
        {experience.logo ? (
          <img
            src={experience.logo}
            alt={experience.company}
            className="h-16 w-16 shrink-0 rounded object-contain"
          />
        ) : (
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded bg-primary-light/10 dark:bg-primary-dark/10">
            <span className="text-[18px] font-semibold text-primary-light dark:text-primary-dark">
              {experience.company.charAt(0)}
            </span>
          </div>
        )}
        <div className="min-w-0 flex-1">
          <p className="text-[20px] font-semibold text-text-primary-light dark:text-text-primary-dark">
            {experience.role}
          </p>
          <p className="text-[18px] text-text-secondary-light dark:text-text-secondary-dark">
            {experience.company}
          </p>
          <p className="mt-0.5 text-[16px] text-text-secondary-light dark:text-text-secondary-dark md:absolute md:right-5 md:mt-0 md:top-5">
            {experience.period}
          </p>
        </div>
      </div>

      <p className="mb-3 text-[16px] leading-relaxed text-text-secondary-light dark:text-text-secondary-dark">
        {experience.description}
      </p>

      <ul className="space-y-1.5">
        {experience.highlights.map((highlight) => (
          <li
            key={highlight}
            className="flex items-start gap-2 text-[16px] leading-relaxed text-text-secondary-light dark:text-text-secondary-dark"
          >
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary-light dark:bg-primary-dark" />
            {highlight}
          </li>
        ))}
      </ul>
    </div>
  )
}
