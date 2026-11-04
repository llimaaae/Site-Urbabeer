import { useEffect, useState } from 'react'
import { contato } from '../data/contato'
import { Button } from './ui/Button'
import { abrirWhatsApp } from '../utils/whatsapp'

export function Header() {
  const [aberto, setAberto] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!aberto) return
    const aoTeclar = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setAberto(false)
    }
    window.addEventListener('keydown', aoTeclar)
    return () => window.removeEventListener('keydown', aoTeclar)
  }, [aberto])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[var(--z-sticky)] bg-alva/90 backdrop-blur-sm border-b border-divider transition-all duration-300 ${
        scrolled ? 'shadow-md' : ''
      }`}
      role="banner"
    >
      <div className="container box-border flex min-w-0 items-center justify-between gap-4 py-3 md:py-4">
        <a href="#topo" className="shrink-0" aria-label="UrbaBeer Empório - Início">
          <img
            src="/logo.webp"
            alt=""
            width={1072}
            height={712}
            className="block h-10 md:h-12 w-auto min-w-0 max-w-full"
            aria-hidden="true"
          />
        </a>

        <nav className="hidden flex-1 items-center justify-center gap-1 md:flex" aria-label="Navegação principal">
          <a href="#promocoes" className="px-3 py-2 text-sm font-medium text-text-secondary hover:text-primary transition-colors duration-200 rounded-lg">
            Promoções
          </a>
          <a href="#cardapio" className="px-3 py-2 text-sm font-medium text-text-secondary hover:text-primary transition-colors duration-200 rounded-lg">
            Cardápio
          </a>
          <a href="#sobre" className="px-3 py-2 text-sm font-medium text-text-secondary hover:text-primary transition-colors duration-200 rounded-lg">
            Sobre
          </a>
          <a href="#onde" className="px-3 py-2 text-sm font-medium text-text-secondary hover:text-primary transition-colors duration-200 rounded-lg">
            Onde estamos
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={contato.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-10 w-10 items-center justify-center text-text-muted hover:text-primary hover:bg-cream-100 rounded-full transition-all duration-200 md:inline-flex"
            aria-label="Instagram da UrbaBeer"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <Button
            variant="primary"
            size="sm"
            onClick={() => abrirWhatsApp()}
            className="hidden md:inline-flex"
          >
            WhatsApp
          </Button>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center text-text-muted hover:text-primary hover:bg-cream-100 rounded-full transition-all duration-200 md:hidden"
            aria-expanded={aberto}
            aria-controls="menu-mobile"
            aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setAberto((v) => !v)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {aberto ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {aberto && (
        <nav id="menu-mobile" className="border-t border-divider bg-alva md:hidden animate-slide-down" aria-label="Navegação principal">
          <div className="container flex flex-col gap-1 py-4">
            <a href="#promocoes" className="px-4 py-3 text-sm font-medium text-text-secondary hover:text-primary hover:bg-cream-100 rounded-lg transition-colors duration-200" onClick={() => setAberto(false)}>
              Promoções
            </a>
            <a href="#cardapio" className="px-4 py-3 text-sm font-medium text-text-secondary hover:text-primary hover:bg-cream-100 rounded-lg transition-colors duration-200" onClick={() => setAberto(false)}>
              Cardápio
            </a>
            <a href="#sobre" className="px-4 py-3 text-sm font-medium text-text-secondary hover:text-primary hover:bg-cream-100 rounded-lg transition-colors duration-200" onClick={() => setAberto(false)}>
              Sobre
            </a>
            <a href="#onde" className="px-4 py-3 text-sm font-medium text-text-secondary hover:text-primary hover:bg-cream-100 rounded-lg transition-colors duration-200" onClick={() => setAberto(false)}>
              Onde estamos
            </a>
            <a
              href={contato.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 text-sm font-medium text-text-secondary hover:text-primary hover:bg-cream-100 rounded-lg transition-colors duration-200"
            >
              Instagram
            </a>
            <Button
              variant="primary"
              size="md"
              className="mt-2 w-full"
              onClick={() => { setAberto(false); abrirWhatsApp(); }}
            >
              WhatsApp
            </Button>
          </div>
        </nav>
      )}
    </header>
  )
}