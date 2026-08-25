import { Reveal } from '@/components/reveal'

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
      <span className="h-px w-8 bg-primary" />
      {children}
    </div>
  )
}

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <SectionLabel>About me</SectionLabel>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <Reveal delay={80}>
              <p className="font-display text-2xl font-medium leading-snug tracking-tight text-balance sm:text-3xl">
                I design and develop software applications, websites, and
                database-driven systems.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
                While expanding my knowledge of programming, algorithms, and
                computer systems, I focus on turning ideas into working
                products. Through academic projects and personal development, I
                continuously sharpen my technical and analytical skills — and I
                bring a confident, problem-solving mindset to every team I join.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
