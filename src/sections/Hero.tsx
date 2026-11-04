import { useEffect, useState } from 'react'
import { obterStatusAgora, mensagemDeStatus, type StatusHorario } from '../utils/horarios'
import { abrirWhatsApp } from '../utils/whatsapp'
import { Button } from '../components/ui/Button'
import { Badge } from '../components/ui/Badge'

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
    <section id="topo" className="relative border-b border-divider bg-alva pt-28 md:pt-36 lg:pt-40 pb-20 md:pb-28 lg:pb-32" aria-labelledby="hero-title">
      <div className="container grid gap-10 md:grid-cols-2 md:gap-16 lg:gap-20 md:items-center">
        <div className="max-w-xl animate-slide-up">
          <Badge variant="caramelo" className="mb-4 inline-block">Adega no Urbanova</Badge>
          <h1 id="hero-title" className="font-display font-semibold text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight text-balance">
            UrbaBeer Empório
          </h1>
          <p className="mt-6 text-lg text-text-secondary leading-relaxed text-pretty">
            Cerveja gelada na temperatura certa. Promoções todo dia. Atendimento até de madrugada.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3" role="status" aria-live="polite">
            <Badge
              variant={status.aberto ? 'olive' : 'espresso'}
              className="flex items-center gap-2 px-4 py-2 text-sm font-semibold"
            >
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span
                  className={`absolute inset-0 rounded-full ${
                    status.aberto ? 'bg-success animate-pulse-soft' : 'bg-espresso-40'
                  }`}
                />
                <span className={`relative block h-full w-full rounded-full bg-current/50`} />
              </span>
              {mensagemDeStatus(status)}
            </Badge>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4" style={{ animationDelay: '200ms' }}>
            <Button
              variant="primary"
              size="xl"
              onClick={() => abrirWhatsApp('Olá! Gostaria de fazer um pedido.')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 2C6.48 2 2 6.48 2 12c0 1.74.45 3.37 1.23 4.8L2 22l5.34-1.2A9.96 9.96 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              Falar no WhatsApp
            </Button>
            <Button variant="secondary" size="lg" as="a" href="#promocoes">
              Ver promoções
            </Button>
          </div>

          <p className="mt-8 text-xs text-text-subtle">Venda proibida para menores de 18 anos.</p>
        </div>

        <div className="relative animate-fade-in" style={{ animationDelay: '300ms', animationDuration: '700ms' }}>
          <div className="aspect-[4-5] overflow-hidden rounded-2xl border border-divider bg-surface-elevated shadow-xl">
            <img
              src="/geladeira.webp"
              alt="Geladeiras com cervejas e bebidas geladas na adega UrbaBeer"
              width={896}
              height={1120}
              fetchPriority="high"
              className="w-full h-full object-cover transition-transform duration-1000 hover:scale-[1.02]"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 bg-alva/95 backdrop-blur-sm text-text px-5 py-4 rounded-xl shadow-xl animate-slide-up border border-divider/50" style={{ animationDelay: '400ms' }}>
            <p className="font-display text-xl text-primary">Sempre gelada</p>
            <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">Na temperatura ideal</p>
          </div>
        </div>
      </div>
    </section>
  )
}