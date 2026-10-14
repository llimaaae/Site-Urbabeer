import { useState } from 'react'
import { cardapio, categorias, type Categoria } from '../data/cardapio'
import { abrirWhatsApp } from '../utils/whatsapp'

type Filtro = Categoria | 'Todas'

export function Cardapio() {
  const [filtro, setFiltro] = useState<Filtro>('Todas')

  const lista = filtro === 'Todas' ? cardapio : cardapio.filter((i) => i.categoria === filtro)

  return (
    <section id="cardapio" className="border-t border-divider bg-bg">
      <div className="container py-16 md:py-20">
        <h2 className="font-display text-3xl md:text-4xl">Cardápio</h2>
        <p className="mt-3 max-w-xl text-text/80">
          Preços e disponibilidade no WhatsApp.
        </p>

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

        <ul className="mt-8 divide-y divide-divider border-y border-divider">
          {lista.map((item) => (
            <li key={item.nome} className="flex flex-wrap items-center justify-between gap-2 py-4">
              <div className="min-w-0">
                <p className="font-semibold">{item.nome}</p>
                <p className="text-xs text-text/60">{item.categoria}</p>
              </div>
              <button
                type="button"
                onClick={() => abrirWhatsApp(`Olá! Gostaria de saber preço e disponibilidade de: ${item.nome}`)}
                className="shrink-0 text-sm font-semibold text-amber hover:underline"
              >
                Consulte pelo WhatsApp
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}