import { contato } from '../data/contato'
import { diaSemanaSP } from '../utils/horarios'

const DIAS = [
  { nome: 'Segunda', idx: 1, abertura: '12:00', fechamento: '00:00', madrugada: false },
  { nome: 'Terça', idx: 2, abertura: '12:00', fechamento: '04:00', madrugada: true },
  { nome: 'Quarta', idx: 3, abertura: '12:00', fechamento: '04:00', madrugada: true },
  { nome: 'Quinta', idx: 4, abertura: '10:00', fechamento: '04:00', madrugada: true },
  { nome: 'Sexta', idx: 5, abertura: '10:00', fechamento: '04:00', madrugada: true },
  { nome: 'Sábado', idx: 6, abertura: '10:00', fechamento: '04:00', madrugada: true },
  { nome: 'Domingo', idx: 0, abertura: '10:00', fechamento: '00:00', madrugada: false },
]

// Dia de hoje em São Paulo, fixo no carregamento da página (evita Date impuro no render).
const HOJE_SP = diaSemanaSP(new Date())

export function OndeEstamos() {
  const mapaSrc = `https://www.google.com/maps?q=${encodeURIComponent(contato.endereco)}&output=embed`

  return (
    <section id="onde" className="border-t border-divider bg-bg py-16 md:py-24 lg:py-28" aria-labelledby="onde-title">
      <div className="container">
        <header className="animate-slide-up">
          <h2 id="onde-title" className="font-display text-3xl md:text-4xl">Onde estamos</h2>
          <p className="mt-3 text-text/70">{contato.endereco}</p>
        </header>

        <div className="mt-10 animate-fade-in" style={{ animationDelay: '100ms' }}>
          <div className="aspect-[16/9] overflow-hidden rounded-2xl border border-divider bg-surface shadow-xl">
            <img
              src="/fachada.webp"
              alt="Fachada da UrbaBeer Empório com letreiro preto e mesas com guarda-sóis, foto real do empório"
              width={1160}
              height={586}
              loading="lazy"
              className="w-full h-full object-cover object-center transition-transform duration-1000 hover:scale-[1.03]"
            />
          </div>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:gap-12">
          <div className="animate-slide-up" style={{ animationDelay: '200ms' }}>
            <div className="rounded-2xl border border-divider bg-surface overflow-hidden shadow-md">
              <table className="w-full border-collapse text-sm" role="table">
                <caption className="visually-hidden">Horário de funcionamento</caption>
                <tbody>
                  {DIAS.map((d) => (
                    <tr
                      key={d.nome}
                      className={`${d.nome.toLowerCase() === HOJE_SP ? 'bg-amber/5' : ''} border-t border-divider/50 last:border-0 transition-colors`}
                      aria-current={d.nome.toLowerCase() === HOJE_SP ? 'date' : undefined}
                    >
                      <td className="px-5 py-4 font-semibold text-text">
                        {d.nome}
                        {d.nome.toLowerCase() === HOJE_SP && (
                          <span className="ml-2 inline-flex items-center px-2 py-1 text-xs font-semibold text-amber-strong bg-amber/10 rounded-full">
                            hoje
                          </span>
                        )}
                      </td>
                      <td className="px-5 py-4 text-text/70 tabular-nums">
                        {d.abertura} – {d.fechamento}
                        {d.madrugada && (
                          <span className="block text-xs text-text-muted">(madrugada seguinte)</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <a
              href={contato.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 btn btn-secondary"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Como chegar
            </a>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '300ms' }}>
            <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-divider">
              <iframe
                src={mapaSrc}
                title="Mapa do endereço da UrbaBeer Empório"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full border-0"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}