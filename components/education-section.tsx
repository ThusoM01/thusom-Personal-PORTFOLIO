import { GraduationCap, Award } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const EDUCATION = [
  {
    degree: 'BSc Computer Science',
    school: 'University of Johannesburg',
    location: 'Auckland Park',
    dates: '2025 — Present',
    note: 'Hackathon participant',
  },
  {
    degree: 'Information Technology (Undergraduate)',
    school: 'University of Johannesburg',
    location: 'Auckland Park',
    dates: '2020 — 2023',
    note: null,
  },
]

const CERTS = [
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: 'April 2023',
  },
]

export function EducationSection() {
  return (
    <section
      id="education"
      className="scroll-mt-20 border-t border-border py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
            <span className="h-px w-8 bg-primary" />
            Education &amp; Certifications
          </div>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            Foundations &amp; credentials.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-border bg-card p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="grid size-10 place-items-center rounded-xl bg-primary/10 text-primary">
                  <GraduationCap className="size-5" />
                </div>
                <h3 className="font-display text-lg font-semibold">
                  Education
                </h3>
              </div>
              <ul className="mt-6 flex flex-col gap-6">
                {EDUCATION.map((edu) => (
                  <li
                    key={edu.degree}
                    className="border-t border-border pt-6 first:border-t-0 first:pt-0"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h4 className="font-medium">{edu.degree}</h4>
                      <span className="text-sm font-medium text-primary">
                        {edu.dates}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {edu.school} · {edu.location}
                    </p>
                    {edu.note && (
                      <p className="mt-2 inline-block rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs text-foreground">
                        {edu.note}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="h-full rounded-2xl border border-border bg-card p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="grid size-10 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Award className="size-5" />
                </div>
                <h3 className="font-display text-lg font-semibold">
                  Certifications
                </h3>
              </div>
              <ul className="mt-6 flex flex-col gap-6">
                {CERTS.map((cert) => (
                  <li key={cert.title}>
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h4 className="font-medium text-balance">{cert.title}</h4>
                      <span className="text-sm font-medium text-primary">
                        {cert.date}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {cert.issuer}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
