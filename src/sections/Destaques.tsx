import { destaques } from '../data/destaques'

export function Destaques() {
  return (
    <section id="destaques" className="border-t border-divider bg-surface">
      <div className="container py-16 md:py-20">
        <h2 className="font-display text-3xl md:text-4xl">Destaques</h2>
        <p className="mt-3 max-w-xl text-text/80">
          Alguns itens que saem bastante. Preços e disponibilidade, consulte no WhatsApp.
        </p>

        <ul className="mt-8 grid gap-6 md:grid-cols-2">
          {destaques.map((d) => (
            <li key={d.nome} className="min-w-0 border border-divider bg-bg">
              <div className="aspect-video bg-divider/40">
                <span className="flex h-full items-center justify-center text-xs text-text/50">foto aqui</span>
              </div>
              <div className="p-4">
                <p className="text-lg font-semibold">{d.nome}</p>
                <p className="text-sm text-text/70">{d.categoria}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}