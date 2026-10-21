import { useCallback, useRef } from 'react'
import { navItems } from '@/data/navigation'
import { StaggeredMenu } from '@/components/staggeredMenu/StaggeredMenu'
import { useScrollToSection } from '@/hooks/useScrollToSection'

const internalLinks = navItems.flatMap((group) =>
  group.links.filter((link) => link.href.startsWith('#'))
)
const externalLinks = navItems.flatMap((group) =>
  group.links.filter((link) => !link.href.startsWith('#'))
)

export function MobileNav() {
  const isLocked = useRef(false)
  const scrollToSection = useScrollToSection()

  const lockScroll = useCallback(() => {
    if (isLocked.current) return
    isLocked.current = true
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'
  }, [])

  const unlockScroll = useCallback(() => {
    if (!isLocked.current) return
    isLocked.current = false
    document.body.style.overflow = ''
    document.documentElement.style.overflow = ''
  }, [])

  return (
    <div className="md:hidden">
      <StaggeredMenu
        isFixed
        position="right"
        colors={['#16121f', '#1e1830', '#2a2340']}
        items={internalLinks.map((link) => ({
          label: link.label,
          link: link.href,
          ariaLabel: link.ariaLabel
        }))}
        socialItems={externalLinks.map((link) => ({ label: link.label, link: link.href }))}
        displaySocials
        displayItemNumbering
        accentColor="#B19CFF"
        menuButtonColor="#f4f1ff"
        openMenuButtonColor="#b19cff"
        changeMenuColorOnOpen
        closeOnClickAway
        onMenuOpen={lockScroll}
        onMenuClose={unlockScroll}
        onItemClick={scrollToSection}
      />
    </div>
  )
}