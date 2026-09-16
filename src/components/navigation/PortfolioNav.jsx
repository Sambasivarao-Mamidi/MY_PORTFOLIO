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
      baseColor="#1a1520"
      menuColor="#faf5ff"
      buttonBgColor="#f97316"
      buttonTextColor="#0c0a0d"
      ctaText="Contact me"
      onCtaClick={() => scrollToSection('#contact')}
    />
  )
}