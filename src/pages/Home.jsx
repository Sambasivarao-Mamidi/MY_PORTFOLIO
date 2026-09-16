import { PortfolioNav } from '@/components/navigation/PortfolioNav'
import { Hero } from '@/components/hero/Hero'
import { About } from '@/components/sections/About'
import { ProjectsSection } from '@/components/projects/ProjectsSection'
import { SkillsSection } from '@/components/skills/SkillsSection'
import { Journey } from '@/components/sections/Journey'
import { Proof } from '@/components/sections/Proof'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <PortfolioNav />
      <Hero />
      <About />
      <ProjectsSection />
      <SkillsSection />
      <Journey />
      <Proof />
      <Contact />
      <Footer />
    </>
  )
}