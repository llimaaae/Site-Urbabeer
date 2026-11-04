import { destaques } from '../data/destaques'
import { formatarPreco } from '../utils/preco'
import { abrirWhatsApp } from '../utils/whatsapp'
import { CardContent, CardImage } from '../components/ui/Card'
import { Button } from '../components/ui/Button'

export function Destaques() {
  return (
    <section id="destaques" className="border-t border-divider bg-alva py-20 md:py-28 lg:py-32" aria-labelledby="destaques-title">
      <div className="container">
        <header className="max-w-2xl animate-slide-up">
          <h2 id="destaques-title" className="font-display font-semibold text-3xl md:text-4xl">Destaques</h2>
          <p className="mt-3 max-w-xl text-text-muted text-base">
            Itens que saem bastante. Disponibilidade, consulte no WhatsApp.
          </p>
        </header>

        <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" role="list">
          {destaques.map((d, index) => (
            <li key={d.nome} className="card card-interactive group animate-slide-up" style={{ animationDelay: `${100 + index * 50}ms` }}>
              {d.foto ? (
                <>
                  <CardImage
                    src={d.foto.src}
                    alt={d.foto.alt}
                    width={d.foto.largura}
                    height={d.foto.altura}
                  />
                  <CardContent className="p-5">
                    <p className="font-display text-xl leading-tight text-text group-hover:text-primary transition-colors duration-200">{d.nome}</p>
                    <p className="mt-1 text-xs uppercase tracking-wide text-text-muted">
                      {d.categoria} · foto real do empório
                    </p>
                    {d.preco && (
                      <div className="mt-3 flex items-center justify-between">
                        <p className="font-display text-2xl text-primary tabular-nums">{formatarPreco(d.preco)}</p>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => abrirWhatsApp(`Olá! Gostaria de pedir: ${d.nome}`)}
                          className="ml-auto"
                          aria-label={`Pedir ${d.nome} pelo WhatsApp`}
                        >
                          Pedir
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </>
              ) : (
                <div className="flex h-56 flex-col justify-between gap-4 p-6">
                  <p className="font-display text-xl leading-tight sm:text-2xl text-text">{d.nome}</p>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                    <span className="text-xs uppercase tracking-wide text-text-muted">{d.categoria}</span>
                    {d.preco && (
                      <>
                        <span className="font-display text-2xl text-primary tabular-nums">{formatarPreco(d.preco)}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => abrirWhatsApp(`Olá! Gostaria de pedir: ${d.nome}`)}
                          aria-label={`Pedir ${d.nome} pelo WhatsApp`}
                        >
                          Pedir
                        </Button>
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