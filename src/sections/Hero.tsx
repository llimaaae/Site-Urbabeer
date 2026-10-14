import { useEffect, useState } from 'react'
import { contato } from '../data/contato'
import { promocoes } from '../data/promocoes'
import { obterStatusAgora } from '../utils/horarios'

// Parâmetro ?agora=... serve para testar horários; remover antes de produção.
export function Hero() {
  const agoraParam = new URLSearchParams(window.location.search).get('agora')
  const [status, setStatus] = useState(() => {
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

  // Promoção do dia pela janela ATIVA (diaDoExpediente), não pelo calendário:
  // se o expediente é de quarta (inclusive madrugada de quinta), só Master Gold.
  const quarta = status.diaDoExpediente === 'quarta'
  const promoQuarta = promocoes.find((p) => p.destaque)
  const promosGin = promocoes.filter((p) => !p.destaque)

  return (
    <section id="topo" className="bg-bg">
      <div className="container py-12 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-end">
          <div>
            <p className="text-sm font-semibold tracking-wide text-amber">{contato.slogan}</p>
            <h1 className="mt-2 font-display text-5xl md:text-7xl">UrbaBeer Empório</h1>
            <p className="mt-4 max-w-md text-lg text-text">
              Adega no Urbanova. Cerveja bem gelada e promoções todos os dias. Atendimento até de madrugada.
            </p>

            <p
              className={
                status.aberto
                  ? 'mt-5 inline-block border border-divider px-3 py-1 text-sm font-semibold text-text'
                  : 'mt-5 inline-block border border-divider px-3 py-1 text-sm font-semibold text-red'
              }
              role="status"
            >
              {status.aberto ? `Aberto até ${status.fechaAs}` : `Fechado. Abre hoje às ${status.abreAs}`}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={contato.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber px-5 py-3 text-sm font-bold text-black hover:bg-amber/90"
              >
                Falar no WhatsApp
              </a>
              <a href="#promocoes" className="text-sm font-semibold text-text hover:underline">
                Ver promoções
              </a>
            </div>

            <p className="mt-6 text-xs text-text/70">Venda proibida para menores de 18 anos.</p>
          </div>

          <div>
            {quarta && promoQuarta ? (
              <div className="border border-divider bg-surface p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-amber">Promoção do dia</p>
                <p className="mt-2 font-display text-4xl text-amber">{promoQuarta.preco}</p>
                <p className="mt-1 text-xl font-semibold">{promoQuarta.titulo}</p>
                <p className="mt-1 text-sm text-text/70">{promoQuarta.condicao}</p>
              </div>
            ) : (
              <div className="grid gap-3 sm:grid-cols-2">
                {promosGin.map((p) => (
                  <div key={p.titulo} className="border border-divider bg-surface p-5">
                    <p className="text-xs font-semibold uppercase tracking-wide text-amber">Promoção</p>
                    <p className="mt-2 font-display text-3xl text-amber">{p.preco}</p>
                    <p className="mt-1 text-lg font-semibold">{p.titulo}</p>
                    <p className="mt-1 text-sm text-text/70">{p.condicao}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}