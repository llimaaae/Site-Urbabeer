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
    <section id="cardapio" className="border-t border-divider bg-bg py-16 md:py-24" aria-labelledby="cardapio-title">
      <div className="container">
        <header className="animate-slide-up">
          <h2 id="cardapio-title" className="font-display text-3xl md:text-4xl">Cardápio</h2>
          {DEMO && (
            <p className="mt-3 max-w-xl text-sm text-text/60">
              Preços e itens ilustrativos, apenas para demonstração do projeto.
            </p>
          )}
        </header>

        <div className="mt-6 flex flex-wrap gap-2" role="tablist" aria-label="Categorias do cardápio">
          {(['Todas', ...categorias] as Filtro[]).map((c) => (
            <button
              key={c}
              type="button"
              role="tab"
              aria-selected={filtro === c}
              onClick={() => setFiltro(c)}
              className={`btn transition-all duration-150 ${
                filtro === c ? 'btn-primary' : 'btn-secondary'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-8 animate-fade-in" style={{ animationDelay: '100ms' }}>
          <div className="rounded-xl border border-divider bg-surface overflow-hidden">
            <ul className="divide-y divide-divider" role="list">
              {lista.map((item, index) => (
                <li
                  key={`${item.categoria}-${item.nome}`}
                  className="flex min-w-0 items-center gap-4 px-5 py-4 transition-colors duration-150 hover:bg-surface-elevated"
                  style={{ animationDelay: `${index * 20}ms` }}
                >
                  <div className="min-w-0 grow">
                    <p className="font-semibold text-text truncate">{item.nome}</p>
                    <p className="text-xs text-text/50">{item.categoria}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => abrirWhatsApp(`Olá! Gostaria de pedir: ${item.nome}`)}
                    className="shrink-0 btn btn-ghost btn-sm font-display text-amber hover:bg-amber/10"
                    aria-label={`Pedir ${item.nome} pelo WhatsApp`}
                  >
                    {formatarPreco(item.preco)}
                  </button>
                </li>
              ))}
              {lista.length === 0 && (
                <li className="px-5 py-8 text-center text-text/50">
                  Nenhum item nesta categoria.
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}