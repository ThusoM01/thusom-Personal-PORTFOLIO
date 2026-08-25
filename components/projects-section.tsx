import { LineChart, Cloud, LayoutDashboard } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const PROJECTS = [
  {
    n: '01',
    icon: LayoutDashboard,
    title: 'Student Progress Tracker',
    type: 'Web App',
    description:
      'A web app for tracking learner progress, built from real robotics-coaching experience. Coaches log attendance, skills covered, and notes per student, while parents and admins view a simple dashboard.',
    tech: ['React', 'Python / Flask', 'SQL'],
  },
  {
    n: '02',
    icon: LineChart,
    title: 'IT Ticket Analyzer',
    type: 'Data Project',
    description:
      'A tool that analyzes an IT support ticket dataset to surface patterns — most common issue types, average resolution time, and peak request windows — visualized with clear charts.',
    tech: ['Python', 'Pandas', 'SQL'],
  },
  {
    n: '03',
    icon: Cloud,
    title: 'Cloud-Hosted Deployment Pipeline',
    type: 'Cloud / DevOps',
    description:
      'Taking a real project from local to production on AWS — backend on EC2 / Lambda, database on RDS, and a static frontend on S3, all versioned and shipped through Git.',
    tech: ['AWS (EC2 / S3 / RDS / Lambda)', 'Git'],
  },
]

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 border-t border-border py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
            <span className="h-px w-8 bg-primary" />
            Projects
          </div>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            Selected work that ships.
          </h2>
        </Reveal>

        <div className="mt-14 flex flex-col gap-4">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.title} delay={i * 90} as="article">
              <div className="group grid gap-6 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50 sm:p-8 lg:grid-cols-12 lg:items-center lg:gap-8">
                <div className="flex items-center gap-5 lg:col-span-4">
                  <span className="font-display text-4xl font-bold text-muted-foreground/40 transition-colors group-hover:text-primary">
                    {project.n}
                  </span>
                  <div className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <project.icon className="size-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold leading-tight">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-primary">
                      {project.type}
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
                    {project.description}
                  </p>
                </div>

                <div className="lg:col-span-3">
                  <ul className="flex flex-wrap gap-2 lg:justify-end">
                    {project.tech.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs text-foreground"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
