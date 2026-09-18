import { motion } from 'motion/react'
import { SectionLabel } from '../components/SectionLabel'
import { ExperienceCard } from '../components/ExperienceCard'
import { experiences } from '../data/experiences'

export function Experience() {
  return (
    <section id="experience" className="border-t border-border-light dark:border-border-dark">
      <div className="mx-auto px-6 py-16 md:px-11 md:py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <SectionLabel number="03" label="EXPÉRIENCE" />
        </motion.div>

        <div className="grid gap-12 md:grid-cols-[1fr_1.5fr] md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2
              id="experience-title"
              className="text-[32px] font-medium leading-[1.1] text-text-primary-light dark:text-text-primary-dark md:text-[36px]"
            >
              Apprendre, bâtir,
              <br />
              évoluer.
            </h2>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="mt-5 h-0.5 w-9 origin-left bg-primary-light dark:bg-primary-dark"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 max-w-105 text-[13px] leading-[1.7] text-text-secondary-light dark:text-text-secondary-dark md:text-[14px]"
            >
              Chaque expérience contribue à renforcer ma compréhension du
              développement logiciel et du fonctionnement des projets en
              conditions réelles.
            </motion.p>
          </motion.div>

          <div className="flex flex-col gap-3">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: 0.25 + index * 0.07 }}
              >
                <ExperienceCard experience={experience} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
