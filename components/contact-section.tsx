import { Mail, Phone, ArrowUpRight } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { Reveal } from '@/components/reveal'

const CHANNELS = [
  {
    icon: Mail,
    label: 'Email',
    value: 'thusomasango22@gmail.com',
    href: 'mailto:thusomasango22@gmail.com',
  },
  {
    icon: Phone,
    label: 'Mobile',
    value: '069 591 3585',
    href: 'tel:+27695913585',
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    value: 'github.com/ThusoM01',
    href: 'https://github.com/ThusoM01',
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'linkedin.com/in/ThusoM',
    href: 'https://linkedin.com/in/ThusoM',
  },
]

export function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-border py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 sm:p-12 lg:p-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-primary/15 blur-[100px]"
          />
          <div className="relative grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <Reveal>
                <div className="flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
                  <span className="h-px w-8 bg-primary" />
                  Contact
                </div>
                <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl">
                  Let&apos;s build something.
                </h2>
                <p className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground text-pretty">
                  I&apos;m actively looking for software developer
                  opportunities. The fastest way to reach me is a call — or drop
                  me a line and I&apos;ll get back to you.
                </p>
                <a
                  href="tel:+27695913585"
                  className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
                >
                  <Phone className="size-4" />
                  Call me
                </a>
              </Reveal>
            </div>

            <Reveal delay={120}>
              <ul className="flex flex-col divide-y divide-border">
                {CHANNELS.map((channel) => (
                  <li key={channel.label}>
                    <a
                      href={channel.href}
                      target={
                        channel.href.startsWith('http') ? '_blank' : undefined
                      }
                      rel={
                        channel.href.startsWith('http')
                          ? 'noopener noreferrer'
                          : undefined
                      }
                      className="group flex items-center gap-4 py-4 first:pt-0"
                    >
                      <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-secondary/60 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <channel.icon className="size-5" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-xs uppercase tracking-wider text-muted-foreground">
                          {channel.label}
                        </span>
                        <span className="block truncate font-medium">
                          {channel.value}
                        </span>
                      </span>
                      <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
