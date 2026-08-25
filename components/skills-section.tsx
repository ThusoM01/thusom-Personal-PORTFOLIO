import {
  Braces,
  Boxes,
  Wrench,
  BadgeCheck,
  BrainCog,
  Clock,
  ShieldCheck,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'

const TECHNICAL = [
  {
    icon: Braces,
    title: 'Languages',
    items: ['Python', 'JavaScript', 'SQL'],
  },
  {
    icon: Boxes,
    title: 'Frameworks & Libraries',
    items: ['React', 'Pandas'],
  },
  {
    icon: Wrench,
    title: 'Tools & Platforms',
    items: ['Git', 'AWS'],
  },
]

const SOFT = [
  { icon: ShieldCheck, label: 'Ethical conduct & professionalism' },
  { icon: BrainCog, label: 'Critical thinking & problem solving' },
  { icon: Clock, label: 'Time management' },
  { icon: BadgeCheck, label: 'Microsoft Office Suite' },
]

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 border-t border-border py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
            <span className="h-px w-8 bg-primary" />
            Skills
          </div>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            A toolkit for building real things.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TECHNICAL.map((group, i) => (
            <Reveal key={group.title} delay={i * 100}>
              <div className="group h-full rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50">
                <div className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <group.icon className="size-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">
                  {group.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-sm text-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-6 rounded-2xl border border-border bg-card p-6 sm:p-8">
            <h3 className="font-display text-lg font-semibold">Soft skills</h3>
            <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {SOFT.map((skill) => (
                <li key={skill.label} className="flex items-start gap-3">
                  <skill.icon className="mt-0.5 size-5 shrink-0 text-primary" />
                  <span className="text-sm leading-relaxed text-muted-foreground text-pretty">
                    {skill.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
