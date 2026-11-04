import { cardapio } from '../data/cardapio'
import { formatarPreco } from '../utils/preco'
import { abrirWhatsApp } from '../utils/whatsapp'
import { CardContent } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { Badge } from '../components/ui/Badge'

export function Cardapio() {
  const categorias = [...new Set(cardapio.map((item) => item.categoria))]

  return (
    <section id="cardapio" className="border-t border-divider bg-alva-alt py-20 md:py-28 lg:py-32" aria-labelledby="cardapio-title">
      <div className="container">
        <header className="max-w-2xl animate-slide-up">
          <h2 id="cardapio-title" className="font-display font-semibold text-3xl md:text-4xl">Cardápio completo</h2>
          <p className="mt-3 max-w-xl text-text-muted">
            {cardapio.length} itens. Valores referência. Consulte disponibilidade no WhatsApp.
          </p>
        </header>

        <div className="mt-10 space-y-12" role="list">
          {categorias.map((cat, catIndex) => {
            const itens = cardapio.filter((i) => i.categoria === cat)
            return (
              <div key={cat} className="animate-slide-up" style={{ animationDelay: `${100 + catIndex * 100}ms` }}>
                <h3 className="font-display text-xl md:text-2xl text-text mb-5 pb-3 border-b border-divider/50 flex items-center gap-3">
                  <Badge variant="espresso" className="shrink-0">{cat}</Badge>
                </h3>

                <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3" role="list">
                  {itens.map((item, idx) => (
                    <li key={item.nome} className="card group animate-slide-up" style={{ animationDelay: `${idx * 30}ms` }}>
                      <CardContent className="p-5 flex flex-col h-full">
                        <p className="font-display text-lg leading-tight text-text group-hover:text-primary transition-colors duration-200">{item.nome}</p>
                        <p className="mt-1 text-xs uppercase tracking-wide text-text-muted">{item.categoria}</p>

                        <div className="mt-auto flex items-center justify-between pt-3 border-t border-divider/30">
                          <p className="font-display text-xl text-primary tabular-nums">{formatarPreco(item.preco)}</p>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => abrirWhatsApp(`Olá! Gostaria de pedir: ${item.nome} - ${formatarPreco(item.preco)}`)}
                            aria-label={`Pedir ${item.nome} pelo WhatsApp`}
                          >
                            Pedir
                          </Button>
                        </div>
                      </CardContent>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}