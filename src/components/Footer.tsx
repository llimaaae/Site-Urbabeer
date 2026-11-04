import { contato } from '../data/contato'
import { DEMO } from '../data/config'
import { Button } from './ui/Button'

export function Footer() {
  return (
    <footer className="bg-espresso text-alva border-t border-espresso-10" role="contentinfo">
      <div className="container py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <a href="#topo" className="block" aria-label="UrbaBeer Empório - Início">
              <img
                src="/logo.webp"
                alt=""
                width={1072}
                height={712}
                className="block h-auto w-32 max-w-full"
                loading="lazy"
                aria-hidden="true"
              />
            </a>
            <p className="mt-5 text-sm text-alva/85">{contato.endereco}</p>
            
            <div className="mt-6 flex items-center gap-3">
              <a
                href={contato.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-espresso-80 text-alva/80 hover:bg-primary hover:text-alva transition-all duration-200"
                aria-label="Instagram da UrbaBeer"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href={contato.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-espresso-80 text-alva/80 hover:bg-primary hover:text-alva transition-all duration-200"
                aria-label="WhatsApp da UrbaBeer"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 1.74.45 3.37 1.23 4.8L2 22l5.34-1.2A9.96 9.96 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </a>
            </div>
          </div>

          <div className="lg:col-span-1">
            <h3 className="font-display text-lg font-semibold">Contato</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-alva/80">
              <a
                href={contato.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary-light transition-colors duration-200"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 1.74.45 3.37 1.23 4.8L2 22l5.34-1.2A9.96 9.96 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                <span>WhatsApp: (12) 98882-8861</span>
              </a>
              <a
                href={contato.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary-light transition-colors duration-200"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
                <span>Instagram: @urbabeer</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-1">
            <h3 className="font-display text-lg font-semibold">Horário</h3>
            <div className="mt-4 space-y-2 text-sm text-alva/85 leading-relaxed">
              <p>Segunda: 12h – 00h</p>
              <p>Terça a Quarta: 12h – 04h</p>
              <p>Quinta a Sábado: 10h – 04h</p>
              <p>Domingo: 10h – 00h</p>
            </div>
            <Button
              variant="outline"
              size="sm"
              as="a"
              href={contato.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Como chegar
            </Button>
          </div>

          <div className="lg:col-span-1">
            <h3 className="font-display text-lg font-semibold">Links</h3>
            <nav className="mt-4 flex flex-col gap-2" aria-label="Links úteis">
              <a href="#promocoes" className="text-sm text-alva/80 hover:text-primary-light transition-colors duration-200">Promoções</a>
              <a href="#cardapio" className="text-sm text-alva/80 hover:text-primary-light transition-colors duration-200">Cardápio</a>
              <a href="#sobre" className="text-sm text-alva/80 hover:text-primary-light transition-colors duration-200">Sobre</a>
              <a href="#onde" className="text-sm text-alva/80 hover:text-primary-light transition-colors duration-200">Onde estamos</a>
              <a href={contato.whatsapp} target="_blank" rel="noopener noreferrer" className="text-sm text-alva/80 hover:text-primary-light transition-colors duration-200">Pedir no WhatsApp</a>
            </nav>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-espresso-20 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-xs text-alva/75">
            Venda proibida para menores de 18 anos. Beba com moderação.
          </p>
          {DEMO && (
            <p className="text-xs text-alva/65 text-center md:text-right">
              Projeto de demonstração. Sem vínculo oficial com o estabelecimento; preços do cardápio são exemplos.
            </p>
          )}
        </div>
      </div>
    </footer>
  )
}