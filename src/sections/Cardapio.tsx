import { useState } from 'react'
import { cardapio, categorias, type Categoria } from '../data/cardapio'
import { DEMO } from '../data/config'
import { formatarPreco } from '../utils/preco'
import { abrirWhatsApp } from '../utils/whatsapp'

type Filtro = Categoria | 'Todas'

export function Cardapio() {
  const [filtro, setFiltro] = useState<Filtro>('Todas')

  const lista = filtro === 'Todas' ? cardapio : cardapio.filter((i) => i.categoria === filtro)

  return (
    <section id="cardapio" className="border-t border-divider bg-bg">
      <div className="container py-16 md:py-20">
        <h2 className="font-display text-3xl md:text-4xl">Cardápio</h2>
        {DEMO && (
          <p className="mt-3 max-w-xl text-sm text-text/60">
            Preços e itens ilustrativos, apenas para demonstração do projeto.
          </p>
        )}

        <div className="mt-6 flex flex-wrap gap-2" role="tablist" aria-label="Categorias">
          {(['Todas', ...categorias] as Filtro[]).map((c) => (
            <button
              key={c}
              type="button"
              role="tab"
              aria-selected={filtro === c}
              onClick={() => setFiltro(c)}
              className={
                filtro === c
                  ? 'bg-amber px-3 py-1.5 text-sm font-bold text-black'
                  : 'border border-divider px-3 py-1.5 text-sm font-semibold text-text hover:border-amber'
              }
            >
              {c}
            </button>
          ))}
        </div>

        <ul className="mt-10 divide-y divide-divider border-y border-divider">
          {lista.map((item) => (
            <li key={`${item.categoria}-${item.nome}`} className="flex min-w-0 items-baseline gap-2 py-3">
              <div className="min-w-0 grow">
                <p className="leading-snug font-semibold">{item.nome}</p>
                <p className="text-xs text-text/60">{item.categoria}</p>
              </div>
              <span aria-hidden="true" className="hidden grow self-center border-b border-dotted border-text/30 sm:block" />
              <button
                type="button"
                onClick={() => abrirWhatsApp(`Olá! Gostaria de pedir: ${item.nome}`)}
                className="shrink-0 basis-auto text-right font-display text-xl text-amber hover:underline sm:basis-0"
              >
                {formatarPreco(item.preco)}
                <span className="sr-only">. Pedir pelo WhatsApp.</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
