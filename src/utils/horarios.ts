// Sempre trate o horário em America/Sao_Paulo (UTC-3, sem horário de verão).
const OFFSET_SP_MS = -3 * 60 * 60 * 1000

const DIAS = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'] as const
export type DiaSemana = (typeof DIAS)[number]

// seg: 12:00 -> 24:00 (mesmo dia); ter-sáb: 12/10:00 -> 04:00 (madrugada seguinte)
const AGENDA: Record<number, { abertura: number; fechamento: number }> = {
  0: { abertura: 10 * 60, fechamento: 24 * 60 }, // domingo
  1: { abertura: 12 * 60, fechamento: 24 * 60 }, // segunda
  2: { abertura: 12 * 60, fechamento: 4 * 60 }, // terça
  3: { abertura: 12 * 60, fechamento: 4 * 60 }, // quarta
  4: { abertura: 10 * 60, fechamento: 4 * 60 }, // quinta
  5: { abertura: 10 * 60, fechamento: 4 * 60 }, // sexta
  6: { abertura: 10 * 60, fechamento: 4 * 60 }, // sábado
}

export type StatusHorario = {
  aberto: boolean
  fechaAs: string
  abreAs: string
  diaDoExpediente: DiaSemana
}

// Desloca a instância para que os getters locais (getDay, setHours) leiam a hora
// de parede de São Paulo, independente do fuso da máquina que executa o código.
function paraSP(agora: Date): Date {
  const tzMin = -agora.getTimezoneOffset() // ex.: -180 no horário de SP, 0 em UTC
  const shiftMs = OFFSET_SP_MS - tzMin * 60_000
  return new Date(agora.getTime() + shiftMs)
}

function inicioDoDia(data: Date): Date {
  const d = new Date(data)
  d.setHours(0, 0, 0, 0)
  return d
}

function formatarMinutos(min: number): string {
  const m = ((min % (24 * 60)) + 24 * 60) % (24 * 60)
  const h = Math.floor(m / 60)
  const r = m % 60
  return `${String(h).padStart(2, '0')}:${String(r).padStart(2, '0')}`
}

export function diaSemanaSP(agora: Date): DiaSemana {
  return DIAS[paraSP(agora).getDay()]
}

export function obterStatusAgora(agora: Date): StatusHorario {
  const sp = paraSP(agora)
  const hoje0 = inicioDoDia(sp)
  const ontem0 = new Date(hoje0.getTime() - 24 * 60 * 60 * 1000)
  const agoraMs = sp.getTime()

  const candidatos = [
    { base: hoje0, dia: hoje0.getDay() },
    { base: ontem0, dia: ontem0.getDay() },
  ]

  for (const c of candidatos) {
    const agenda = AGENDA[c.dia]
    const inicio = c.base.getTime() + agenda.abertura * 60 * 1000
    // fechamento menor que abertura cai na madrugada seguinte
    const fimMinutos = agenda.fechamento < agenda.abertura ? agenda.fechamento + 24 * 60 : agenda.fechamento
    const fim = c.base.getTime() + fimMinutos * 60 * 1000
    if (agoraMs >= inicio && agoraMs < fim) {
      return {
        aberto: true,
        fechaAs: formatarMinutos(agenda.fechamento),
        abreAs: formatarMinutos(agenda.abertura),
        diaDoExpediente: DIAS[c.dia],
      }
    }
  }

  const agendaHoje = AGENDA[hoje0.getDay()]
  return {
    aberto: false,
    fechaAs: formatarMinutos(agendaHoje.fechamento),
    abreAs: formatarMinutos(agendaHoje.abertura),
    diaDoExpediente: DIAS[hoje0.getDay()],
  }
}

export function mensagemDeStatus(status: StatusHorario): string {
  return status.aberto ? `Aberto até ${status.fechaAs}` : `Fechado. Abre hoje às ${status.abreAs}`
}