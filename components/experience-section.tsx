import { Reveal } from '@/components/reveal'

const EXPERIENCE = [
  {
    role: 'Graduate Software Developer',
    company: 'Red Hat — Grad Programme',
    location: 'Sandton',
    dates: 'Nov 2024 — Nov 2025',
    points: [
      'Assisted in the design, development, and testing of software applications under senior developer supervision.',
      'Wrote and debugged code across assigned languages within the team.',
      'Participated in daily stand-ups, sprint planning, and other Agile / Scrum ceremonies.',
      'Contributed to technical specs, user guides, and code documentation.',
    ],
  },
  {
    role: 'Coding & Robotics Coach',
    company: 'Meadowlands Primary School',
    location: 'Meadowlands',
    dates: 'Nov 2021 — Aug 2022',
    points: [
      'Planned and delivered coding lessons (Scratch, Python, block-based) tailored to each age group.',
      'Taught robotics fundamentals — building, programming, and troubleshooting LEGO Mindstorms, micro:bit, and Arduino kits.',
      'Guided students through hands-on projects and adapted pacing to different skill levels.',
      'Assessed progress and communicated updates to students, parents, and coordinators.',
    ],
  },
]

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 border-t border-border py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
            <span className="h-px w-8 bg-primary" />
            Experience
          </div>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            Where I&apos;ve put skills to work.
          </h2>
        </Reveal>

        <div className="mt-14 flex flex-col">
          {EXPERIENCE.map((job, i) => (
            <Reveal key={job.company} delay={i * 100} as="article">
              <div className="relative grid gap-6 border-l border-border pb-12 pl-8 last:pb-0 lg:grid-cols-12 lg:gap-8">
                <span className="absolute -left-[7px] top-1.5 size-3.5 rounded-full border-2 border-background bg-primary" />
                <div className="lg:col-span-4">
                  <p className="text-sm font-medium text-primary">
                    {job.dates}
                  </p>
                  <h3 className="mt-1 font-display text-xl font-semibold leading-tight">
                    {job.role}
                  </h3>
                  <p className="mt-1 text-muted-foreground">{job.company}</p>
                  <p className="text-sm text-muted-foreground">
                    {job.location}
                  </p>
                </div>
                <ul className="flex flex-col gap-3 lg:col-span-8">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-sm leading-relaxed text-muted-foreground text-pretty"
                    >
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
