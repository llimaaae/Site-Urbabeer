import { contato } from '../data/contato'

const DIAS = [
  { nome: 'Domingo', idx: 0, abertura: '10:00', fechamento: '00:00', madrugada: false },
  { nome: 'Segunda', idx: 1, abertura: '12:00', fechamento: '00:00', madrugada: false },
  { nome: 'Terça', idx: 2, abertura: '12:00', fechamento: '04:00', madrugada: true },
  { nome: 'Quarta', idx: 3, abertura: '12:00', fechamento: '04:00', madrugada: true },
  { nome: 'Quinta', idx: 4, abertura: '10:00', fechamento: '04:00', madrugada: true },
  { nome: 'Sexta', idx: 5, abertura: '10:00', fechamento: '04:00', madrugada: true },
  { nome: 'Sábado', idx: 6, abertura: '10:00', fechamento: '04:00', madrugada: true },
]

function diaAtualSP(): number {
  return new Date(new Date().getTime() - 3 * 60 * 60 * 1000).getDay()
}

export function OndeEstamos() {
  const hoje = diaAtualSP()
  const mapaSrc = `https://www.google.com/maps?q=${encodeURIComponent(contato.endereco)}&output=embed`

  return (
    <section id="onde" className="border-t border-divider bg-bg">
      <div className="container py-16 md:py-20">
        <h2 className="font-display text-3xl md:text-4xl">Onde estamos</h2>
        <p className="mt-3 text-text/80">{contato.endereco}</p>

        <img
          src="/fachada.png"
          alt="Fachada da UrbaBeer Empório com letreiro preto e mesas com guarda-sóis"
          width={1160}
          height={586}
          loading="lazy"
          className="mt-6 w-full aspect-[2/1] object-cover object-center"
        />

        <div className="mt-8 grid gap-10 md:grid-cols-2">
          <div>
            <table className="w-full border-collapse text-sm">
              <caption className="sr-only">Horário de funcionamento</caption>
              <tbody>
                {DIAS.map((d) => (
                  <tr key={d.nome} className={d.idx === hoje ? 'bg-surface' : ''}>
                    <td className="py-2 pr-4 font-semibold">{d.nome}</td>
                    <td className="py-2">
                      {d.abertura} – {d.fechamento}
                      {d.madrugada && (
                        <span className="ml-2 text-xs text-text/60">(madrugada seguinte)</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <a
              href={contato.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block border border-divider px-4 py-2 text-sm font-semibold text-text hover:border-amber"
            >
              Como chegar
            </a>
          </div>

          <div className="aspect-[4/3] overflow-hidden border border-divider">
            <iframe
              src={mapaSrc}
              title="Mapa do endereço da UrbaBeer Empório"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full border-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}