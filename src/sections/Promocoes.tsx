import { contato } from '../data/contato'
import { promocoes } from '../data/promocoes'

export function Promocoes() {
  const master = promocoes.find((p) => p.destaque)
  const gins = promocoes.filter((p) => !p.destaque)

  return (
    <section id="promocoes" className="border-t border-divider bg-bg">
      <div className="container py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-5 md:items-start">
          <div className="md:col-span-2">
            <img
              src="/copao-red-label.png"
              alt="Copo de bebida com gelo e garrafa de whisky ao fundo"
              width={722}
              height={933}
              loading="lazy"
              className="w-full"
            />
          </div>

          <div className="md:col-span-3">
            <h2 className="font-display text-3xl md:text-4xl">Promoções</h2>
            <p className="mt-3 max-w-xl text-text/80">
              Valem todos os dias. A promoção de quarta vale só na quarta.
            </p>

            <ul className="mt-8 divide-y divide-divider border-y border-divider">
              {gins.map((p) => (
                <li key={p.titulo} className="flex items-center justify-between gap-4 py-5">
                  <div>
                    <p className="text-lg font-semibold">{p.titulo}</p>
                    <p className="text-sm text-text/70">{p.condicao}</p>
                  </div>
                  <p className="shrink-0 font-display text-3xl text-amber md:text-4xl">{p.preco}</p>
                </li>
              ))}
            </ul>

            {master && (
              <div className="mt-6 border border-amber p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-amber">Quarta-feira</p>
                <div className="mt-2 flex items-baseline justify-between gap-4">
                  <p className="text-xl font-semibold">{master.titulo}</p>
                  <p className="font-display text-4xl text-amber">{master.preco}</p>
                </div>
                <p className="mt-1 text-sm text-text/70">{master.condicao}</p>
                <a
                  href={contato.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-sm font-semibold text-text hover:underline"
                >
                  Chamar no WhatsApp
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}