import { useEffect, useState } from 'react'
import { contato } from '../data/contato'
import { obterStatusAgora, mensagemDeStatus, type StatusHorario } from '../utils/horarios'

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
    <section id="topo" className="border-b border-divider bg-bg">
      <div className="container grid items-center gap-10 py-12 md:grid-cols-2 md:py-20">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-amber">{contato.slogan}</p>
          <h1 className="mt-2 font-display text-5xl md:text-6xl lg:text-7xl">UrbaBeer Empório</h1>
          <p className="mt-4 max-w-md text-lg text-text">
            Adega no Urbanova. Cerveja bem gelada, promoções todos os dias e atendimento até de madrugada.
          </p>

          <p
            className={
              status.aberto
                ? 'mt-6 inline-block border border-amber px-3 py-1 text-sm font-semibold text-amber'
                : 'mt-6 inline-block border border-divider px-3 py-1 text-sm font-semibold text-red'
            }
            role="status"
          >
            {mensagemDeStatus(status)}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={contato.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber px-5 py-3 text-sm font-bold text-black hover:bg-amber/90"
            >
              Falar no WhatsApp
            </a>
            <a href="#promocoes" className="text-sm font-semibold text-text underline decoration-divider underline-offset-4 hover:decoration-amber">
              Ver promoções
            </a>
          </div>

          <p className="mt-8 text-xs text-text/70">Venda proibida para menores de 18 anos.</p>
        </div>

        <img
          src="/geladeira.webp"
          alt="Geladeiras com cervejas e bebidas geladas na adega"
          width={896}
          height={758}
          fetchPriority="high"
          className="w-full border border-divider"
        />
      </div>
    </section>
  )
}
