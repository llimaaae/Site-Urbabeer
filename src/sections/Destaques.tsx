import { destaques } from '../data/destaques'
import { formatarPreco } from '../utils/preco'

export function Destaques() {
  return (
    <section id="destaques" className="border-t border-divider bg-surface">
      <div className="container py-16 md:py-20">
        <h2 className="font-display text-3xl md:text-4xl">Destaques</h2>
        <p className="mt-3 max-w-xl text-text/80">
          Itens que saem bastante. Disponibilidade, consulte no WhatsApp.
        </p>

        <ul className="mt-10 grid grid-cols-1 gap-px border border-divider bg-divider sm:grid-cols-2 lg:grid-cols-3">
          {destaques.map((d) => (
            <li key={d.nome} className="min-w-0 bg-surface">
              {d.foto ? (
                <>
                  <img
                    src={d.foto.src}
                    alt={d.foto.alt}
                    width={d.foto.largura}
                    height={d.foto.altura}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <p className="px-4 pt-4 font-display text-2xl leading-tight">{d.nome}</p>
                  <p className="px-4 pb-4 pt-1 text-xs uppercase tracking-wide text-text/60">
                    {d.categoria} · foto real do empório
                  </p>
                </>
              ) : (
                <div className="flex h-full flex-col justify-between gap-6 p-4">
                  <p className="font-display text-2xl leading-tight sm:text-3xl">{d.nome}</p>
                  <p className="flex items-baseline justify-between gap-2 text-xs uppercase tracking-wide text-text/60">
                    <span>{d.categoria}</span>
                    <span className="font-display text-2xl text-amber">
                      {formatarPreco(d.preco ?? 0)}
                    </span>
                  </p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
