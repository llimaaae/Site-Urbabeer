import { sobre } from '../data/sobre'
import { CardImage } from '../components/ui/Card'

export function Sobre() {
  return (
    <section id="sobre" className="border-t border-divider bg-alva py-20 md:py-28 lg:py-32" aria-labelledby="sobre-title">
      <div className="container">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="order-2 md:order-1 animate-slide-up">
            <header className="max-w-xl">
              <h2 id="sobre-title" className="font-display font-semibold text-3xl md:text-4xl">Nossa história</h2>
              <div className="mt-6 space-y-4 text-text-secondary leading-relaxed">
                <p>{sobre.texto}</p>
                <p>{sobre.diferencial}</p>
              </div>
            </header>

            <div className="mt-10 grid gap-4 sm:grid-cols-3" role="list">
              {sobre.pilares.map((pilar, index) => (
                <article key={pilar.titulo} className="card p-5 animate-slide-up" style={{ animationDelay: `${200 + index * 100}ms` }}>
                  <p className="font-display text-lg text-text">{pilar.titulo}</p>
                  <p className="mt-2 text-sm text-text-muted">{pilar.descricao}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="order-1 md:order-2 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="aspect-[4-5] overflow-hidden rounded-2xl border border-divider bg-surface-elevated shadow-xl">
              <CardImage
                src="/geladeira.webp"
                alt="Interior da adega UrbaBeer com geladeiras organizadas e variedade de cervejas"
                width={896}
                height={1120}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}