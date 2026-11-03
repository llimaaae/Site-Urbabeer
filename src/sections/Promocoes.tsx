import { promocoes } from '../data/promocoes'
import { abrirWhatsApp } from '../utils/whatsapp'

export function Promocoes() {
  const master = promocoes.find((p) => p.destaque)
  const gins = promocoes.filter((p) => !p.destaque)

  return (
    <section id="promocoes" className="border-t border-divider bg-bg py-16 md:py-24 lg:py-28" aria-labelledby="promocoes-title">
      <div className="container">
        <div className="grid gap-10 md:grid-cols-5 md:items-start">
          <div className="min-w-0 md:col-span-2 animate-slide-up">
            <div className="aspect-[3/4] overflow-hidden rounded-2xl border border-divider bg-surface shadow-lg">
              <img
                src="/copao-red-label.webp"
                alt="Copo de bebida com gelo e garrafa de whisky ao fundo, foto real do empório"
                width={722}
                height={933}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-[1.03]"
              />
            </div>
          </div>

          <div className="min-w-0 md:col-span-3 animate-slide-up" style={{ animationDelay: '100ms' }}>
            <header className="mb-8">
              <h2 id="promocoes-title" className="font-display text-3xl md:text-4xl">Promoções</h2>
              <p className="mt-3 max-w-xl text-text/70">
                Valem todos os dias. A promoção de quarta vale só na quarta.
              </p>
            </header>

            <div className="rounded-2xl border border-divider bg-surface overflow-hidden shadow-md">
              <ul className="divide-y divide-divider/50">
                {gins.map((p, index) => (
                  <li
                    key={p.titulo}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-5 px-6 transition-all duration-200 hover:bg-bg-alt"
                    style={{ animationDelay: `${200 + index * 50}ms` }}
                  >
                    <div className="min-w-0">
                      <p className="text-lg font-semibold text-text">{p.titulo}</p>
                      <p className="text-sm text-text-muted">{p.condicao}</p>
                    </div>
                    <p className="shrink-0 font-display text-2xl sm:text-3xl md:text-4xl text-amber tabular-nums">{p.preco}</p>
                  </li>
                ))}
              </ul>

              {master && (
                <div className="border-t border-amber/30 p-6 bg-amber/5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-amber">Quarta-feira especial</p>
                  <div className="mt-3 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-4">
                    <p className="text-xl font-semibold text-text">{master.titulo}</p>
                    <p className="font-display text-wrap text-3xl sm:text-4xl text-amber tabular-nums">{master.preco}</p>
                  </div>
                  <p className="mt-2 text-sm text-text-muted">{master.condicao}</p>
                  <button
                    type="button"
                    onClick={() => abrirWhatsApp(`Olá! Quero aproveitar a promoção de quarta: ${master.titulo}`)}
                    className="mt-4 btn btn-primary btn-sm"
                  >
                    Chamar no WhatsApp
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}