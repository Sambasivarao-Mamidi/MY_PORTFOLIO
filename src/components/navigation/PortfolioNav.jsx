import CardNav from '../CardNav'
import { navItems } from '@/data/navigation'
import { useScrollToSection } from '@/hooks/useScrollToSection'

export function PortfolioNav() {
  const scrollToSection = useScrollToSection()

  return (
    <CardNav
      logo="/logo.svg"
      logoAlt="SambaSivaRao logo"
      items={navItems}
      baseColor="#0f0d14"
      menuColor="#f4f1ff"
      buttonBgColor="#b19cff"
      buttonTextColor="#0a0812"
      ctaText="Contact me"
      onCtaClick={() => scrollToSection('#contact')}
    />
  )
}