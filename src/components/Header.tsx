import { useEffect, useState } from 'react'
import { contato } from '../data/contato'

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
      className={`fixed top-0 left-0 right-0 z-[var(--z-sticky)] bg-bg/80 backdrop-blur-md border-b border-divider transition-all duration-300 ${
        scrolled ? 'shadow-lg' : ''
      }`}
      role="banner"
    >
      <div className="container box-border flex min-w-0 items-center gap-4 py-3 md:py-4">
        <a href="#topo" className="shrink-0" aria-label="UrbaBeer Empório - Início">
          <img
            src="/logo.webp"
            alt=""
            width={1072}
            height={712}
            className="block h-[44px] w-auto min-w-0 max-w-full md:h-[56px]"
            aria-hidden="true"
          />
        </a>

        <nav className="hidden flex-1 items-center justify-center gap-1 md:flex" aria-label="Navegação principal">
          <a href="#promocoes" className="px-3 py-2 text-sm font-semibold text-text/80 hover:text-amber transition-colors duration-200 rounded-lg">
            Promoções
          </a>
          <a href="#cardapio" className="px-3 py-2 text-sm font-semibold text-text/80 hover:text-amber transition-colors duration-200 rounded-lg">
            Cardápio
          </a>
          <a href="#sobre" className="px-3 py-2 text-sm font-semibold text-text/80 hover:text-amber transition-colors duration-200 rounded-lg">
            Sobre
          </a>
          <a href="#onde" className="px-3 py-2 text-sm font-semibold text-text/80 hover:text-amber transition-colors duration-200 rounded-lg">
            Onde estamos
          </a>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <a
            href={contato.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-10 w-10 items-center justify-center text-text/70 hover:text-amber hover:bg-bg-alt rounded-full transition-all duration-200 md:inline-flex"
            aria-label="Instagram da UrbaBeer"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a
            href={contato.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden btn btn-primary btn-sm md:inline-flex"
          >
            WhatsApp
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center text-text/70 hover:text-amber hover:bg-bg-alt rounded-full transition-all duration-200 md:hidden"
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
        <nav id="menu-mobile" className="border-t border-divider bg-bg md:hidden animate-slide-down" aria-label="Navegação principal">
          <div className="container flex flex-col gap-1 py-4">
            <a href="#promocoes" className="px-4 py-3 text-sm font-semibold text-text/80 hover:text-amber hover:bg-bg-alt rounded-lg transition-colors duration-200" onClick={() => setAberto(false)}>
              Promoções
            </a>
            <a href="#cardapio" className="px-4 py-3 text-sm font-semibold text-text/80 hover:text-amber hover:bg-bg-alt rounded-lg transition-colors duration-200" onClick={() => setAberto(false)}>
              Cardápio
            </a>
            <a href="#sobre" className="px-4 py-3 text-sm font-semibold text-text/80 hover:text-amber hover:bg-bg-alt rounded-lg transition-colors duration-200" onClick={() => setAberto(false)}>
              Sobre
            </a>
            <a href="#onde" className="px-4 py-3 text-sm font-semibold text-text/80 hover:text-amber hover:bg-bg-alt rounded-lg transition-colors duration-200" onClick={() => setAberto(false)}>
              Onde estamos
            </a>
            <a
              href={contato.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 text-sm font-semibold text-text/80 hover:text-amber hover:bg-bg-alt rounded-lg transition-colors duration-200"
            >
              Instagram
            </a>
            <a
              href={contato.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 btn btn-primary btn-md text-center"
            >
              WhatsApp
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}