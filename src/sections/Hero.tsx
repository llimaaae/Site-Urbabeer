import { useEffect, useState } from 'react'
import { contato } from '../data/contato'
import { obterStatusAgora, mensagemDeStatus, type StatusHorario } from '../utils/horarios'
import { abrirWhatsApp } from '../utils/whatsapp'

// Parâmetro ?agora=... serve para testar horários em demonstração; ver README.
export function Hero() {
  const agoraParam = new URLSearchParams(window.location.search).get('agora')
  const [status, setStatus] = useState<StatusHorario>(() => {
    const base = agoraParam ? new Date(agoraParam) : new Date()
    return obterStatusAgora(base)
  })

  useEffect(() => {
    const atualizar = () => {
      const base = agoraParam ? new Date(agoraParam) : new Date()
      setStatus(obterStatusAgora(base))
    }
    atualizar()
    const id = setInterval(atualizar, 60000)
    return () => clearInterval(id)
  }, [agoraParam])

  return (
    <section id="topo" className="relative border-b border-divider bg-bg pt-20 pb-16 md:pt-32 md:pb-24" aria-labelledby="hero-title">
      <div className="container grid gap-10 md:grid-cols-2 md:gap-16 md:items-center">
        <div className="max-w-xl animate-slide-up" style={{ animationDelay: '100ms' }}>
          <p className="text-xs font-semibold uppercase tracking-widest text-amber">{contato.slogan}</p>
          <h1 id="hero-title" className="mt-3 font-display text-5xl md:text-6xl lg:text-7xl text-text leading-[1.05]">
            UrbaBeer Empório
          </h1>
          <p className="mt-5 text-lg text-text/80 leading-relaxed">
            Adega no Urbanova. Cerveja bem gelada, promoções todos os dias e atendimento até de madrugada.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3" role="status" aria-live="polite">
            <span
              className={`inline-flex items-center gap-2 px-3 py-1.5 text-sm font-semibold rounded-full border transition-colors duration-150 ${
                status.aberto
                  ? 'border-amber bg-amber/10 text-amber'
                  : 'border-red bg-red/10 text-red'
              }`}
            >
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span
                  className={`absolute inset-0 rounded-full ${
                    status.aberto ? 'bg-amber animate-pulse' : 'bg-red'
                  }`}
                />
                <span className={`relative block h-full w-full rounded-full bg-current opacity-50`} />
              </span>
              {mensagemDeStatus(status)}
            </span>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4" style={{ animationDelay: '200ms' }}>
            <button
              type="button"
              onClick={() => abrirWhatsApp('Olá! Gostaria de fazer um pedido.')}
              className="btn btn-primary btn-lg"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 2C6.48 2 2 6.48 2 12c0 1.74.45 3.37 1.23 4.8L2 22l5.34-1.2A9.96 9.96 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              Falar no WhatsApp
            </button>
            <a href="#promocoes" className="btn btn-secondary btn-lg">
              Ver promoções
            </a>
          </div>

          <p className="mt-8 text-xs text-text/60">Venda proibida para menores de 18 anos.</p>
        </div>

        <div className="relative animate-fade-in" style={{ animationDelay: '300ms', animationDuration: '600ms' }}>
          <div className="aspect-[4/3] overflow-hidden rounded-xl border border-divider bg-surface">
            <img
              src="/geladeira.webp"
              alt="Geladeiras com cervejas e bebidas geladas na adega UrbaBeer"
              width={896}
              height={758}
              fetchPriority="high"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-amber text-black px-4 py-3 rounded-xl shadow-xl animate-slide-up" style={{ animationDelay: '400ms' }}>
            <p className="font-display text-xl">Gelada</p>
            <p className="text-xs font-semibold uppercase tracking-wide">na hora</p>
          </div>
        </div>
      </div>
    </section>
  )
}