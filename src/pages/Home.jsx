import { PortfolioNav } from '@/components/navigation/PortfolioNav'
import { Hero } from '@/components/hero/Hero'
import { About } from '@/components/sections/About'
import { ProjectsSection } from '@/components/projects/ProjectsSection'
import { SkillsSection } from '@/components/skills/SkillsSection'
import { Journey } from '@/components/sections/Journey'
import { Proof } from '@/components/sections/Proof'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/Footer'
import AnimatedContent from '@/components/AnimatedContent'

export default function Home() {
  return (
    <main id="main">
      <PortfolioNav />
      <AnimatedContent distance={80} direction="vertical" duration={0.8} ease="power3.out" blur={0} stagger={0.08} threshold={0.08} trigger="scroll" once>
        <Hero />
      </AnimatedContent>
      <AnimatedContent distance={80} direction="vertical" duration={0.8} ease="power3.out" blur={0} stagger={0.06} threshold={0.08} trigger="scroll" once>
        <About />
      </AnimatedContent>
      <AnimatedContent distance={80} direction="vertical" duration={0.8} ease="power3.out" blur={0} stagger={0.06} threshold={0.08} trigger="scroll" once>
        <ProjectsSection />
      </AnimatedContent>
      <AnimatedContent distance={80} direction="vertical" duration={0.8} ease="power3.out" blur={0} stagger={0.06} threshold={0.08} trigger="scroll" once>
        <SkillsSection />
      </AnimatedContent>
      <AnimatedContent distance={80} direction="vertical" duration={0.8} ease="power3.out" blur={0} stagger={0.06} threshold={0.08} trigger="scroll" once>
        <Journey />
      </AnimatedContent>
      <AnimatedContent distance={80} direction="vertical" duration={0.8} ease="power3.out" blur={0} stagger={0.06} threshold={0.08} trigger="scroll" once>
        <Proof />
      </AnimatedContent>
      <AnimatedContent distance={80} direction="vertical" duration={0.8} ease="power3.out" blur={0} stagger={0.06} threshold={0.08} trigger="scroll" once>
        <Contact />
      </AnimatedContent>
      <Footer />
    </main>
  )
}
