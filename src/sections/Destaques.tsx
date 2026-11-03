import { destaques } from '../data/destaques'
import { formatarPreco } from '../utils/preco'
import { abrirWhatsApp } from '../utils/whatsapp'

export function Destaques() {
  return (
    <section id="destaques" className="border-t border-divider bg-bg-alt py-16 md:py-24 lg:py-28" aria-labelledby="destaques-title">
      <div className="container">
        <header className="max-w-2xl animate-slide-up">
          <h2 id="destaques-title" className="font-display text-3xl md:text-4xl">Destaques</h2>
          <p className="mt-3 max-w-xl text-text/70">
            Itens que saem bastante. Disponibilidade, consulte no WhatsApp.
          </p>
        </header>

        <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" role="list">
          {destaques.map((d, index) => (
            <li key={d.nome} className="card card-interactive group animate-slide-up" style={{ animationDelay: `${100 + index * 50}ms` }}>
              {d.foto ? (
                <>
                  <div className="aspect-[4/3] overflow-hidden rounded-t-2xl">
                    <img
                      src={d.foto.src}
                      alt={d.foto.alt}
                      width={d.foto.largura}
                      height={d.foto.altura}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <p className="font-display text-xl leading-tight text-text group-hover:text-amber transition-colors duration-200">{d.nome}</p>
                    <p className="mt-1 text-xs uppercase tracking-wide text-text-muted">
                      {d.categoria} · foto real do empório
                    </p>
                    {d.preco && (
                      <div className="mt-3 flex items-center gap-3">
                        <p className="font-display text-2xl text-amber tabular-nums">{formatarPreco(d.preco)}</p>
                        <button
                          type="button"
                          onClick={() => abrirWhatsApp(`Olá! Gostaria de pedir: ${d.nome}`)}
                          className="btn btn-ghost btn-sm ml-auto"
                          aria-label={`Pedir ${d.nome} pelo WhatsApp`}
                        >
                          Pedir
                        </button>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <div className="flex h-56 flex-col justify-between gap-4 p-6">
                  <p className="font-display text-xl leading-tight sm:text-2xl text-text">{d.nome}</p>
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="text-xs uppercase tracking-wide text-text-muted">{d.categoria}</span>
                    {d.preco && (
                      <>
                        <span className="font-display text-2xl text-amber tabular-nums">{formatarPreco(d.preco)}</span>
                        <button
                          type="button"
                          onClick={() => abrirWhatsApp(`Olá! Gostaria de pedir: ${d.nome}`)}
                          className="btn btn-ghost btn-sm"
                          aria-label={`Pedir ${d.nome} pelo WhatsApp`}
                        >
                          Pedir
                        </button>
                      </>
                    )}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}