'use client'

import { ArrowUpRight, Phone } from 'lucide-react'

export function HeroSection() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="home"
      className="relative flex min-h-svh items-center overflow-hidden pt-24"
    >
      {/* professional layered background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            'linear-gradient(to right, oklch(1 0 0 / 4%) 1px, transparent 1px), linear-gradient(to bottom, oklch(1 0 0 / 4%) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage:
            'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 size-[520px] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]"
      />

      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-primary" />
          </span>
          Open to software developer roles
        </div>

        <h1 className="mt-6 font-display text-5xl font-bold leading-[0.95] tracking-tight text-balance sm:text-7xl lg:text-8xl">
          Thuso Masango
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty sm:text-xl">
          I&apos;m a Computer Science student with a passion for software
          development — applying my skills to build{' '}
          <span className="text-foreground">practical solutions</span> across
          web, data, and cloud.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <button
            onClick={() => scrollTo('contact')}
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            Contact me
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
          <a
            href="tel:+27695913585"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
          >
            <Phone className="size-4" />
            069 591 3585
          </a>
        </div>

        <dl className="mt-14 grid max-w-2xl grid-cols-3 gap-6 border-t border-border pt-8">
          {[
            { k: '3+', v: 'Featured projects' },
            { k: 'AWS', v: 'Cloud Practitioner' },
            { k: '2', v: 'Years IT experience' },
          ].map((stat) => (
            <div key={stat.v}>
              <dt className="font-display text-3xl font-bold text-primary sm:text-4xl">
                {stat.k}
              </dt>
              <dd className="mt-1 text-sm text-muted-foreground text-pretty">
                {stat.v}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
