import { SiteNav } from '@/components/site-nav'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { SkillsSection } from '@/components/skills-section'
import { ProjectsSection } from '@/components/projects-section'
import { ExperienceSection } from '@/components/experience-section'
import { EducationSection } from '@/components/education-section'
import { ContactSection } from '@/components/contact-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteNav />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
