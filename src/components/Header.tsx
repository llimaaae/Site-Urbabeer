import { useState } from 'react'
import { contato } from '../data/contato'

export function Header() {
  const [aberto, setAberto] = useState(false)

  return (
    <header className="border-b border-divider bg-bg">
      <div className="container flex items-center gap-3 py-2">
        <a href="#topo" className="shrink-0" aria-label="Início">
          <img
            src="/logo.jpeg"
            alt="UrbaBeer Empório"
            width={876}
            height={475}
            className="block h-10 w-auto max-w-full md:h-14"
          />
        </a>

        <nav className="hidden flex-1 items-center gap-6 pl-4 md:flex" aria-label="Principal">
          <a href="#promocoes" className="text-sm font-semibold text-text hover:underline">
            Promoções
          </a>
          <a href="#cardapio" className="text-sm font-semibold text-text hover:underline">
            Cardápio
          </a>
          <a href="#sobre" className="text-sm font-semibold text-text hover:underline">
            Sobre
          </a>
          <a href="#onde" className="text-sm font-semibold text-text hover:underline">
            Onde estamos
          </a>
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <a
            href={contato.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-9 w-9 items-center justify-center text-text hover:text-amber md:inline-flex"
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
            className="hidden bg-amber px-4 py-2 text-sm font-bold text-black hover:bg-amber/90 md:inline-flex"
          >
            WhatsApp
          </a>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center text-text md:hidden"
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
        <nav id="menu-mobile" className="border-t border-divider md:hidden" aria-label="Principal">
          <div className="container flex flex-col gap-1 py-3">
            <a href="#promocoes" className="py-2 text-sm font-semibold text-text" onClick={() => setAberto(false)}>
              Promoções
            </a>
            <a href="#cardapio" className="py-2 text-sm font-semibold text-text" onClick={() => setAberto(false)}>
              Cardápio
            </a>
            <a href="#sobre" className="py-2 text-sm font-semibold text-text" onClick={() => setAberto(false)}>
              Sobre
            </a>
            <a href="#onde" className="py-2 text-sm font-semibold text-text" onClick={() => setAberto(false)}>
              Onde estamos
            </a>
            <a
              href={contato.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 text-sm font-semibold text-text"
            >
              Instagram
            </a>
            <a
              href={contato.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 bg-amber px-4 py-2 text-center text-sm font-bold text-black"
            >
              WhatsApp
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}