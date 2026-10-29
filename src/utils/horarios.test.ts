import { describe, expect, it } from 'vitest'
import { obterStatusAgora, mensagemDeStatus } from './horarios'

// Semana de referência (2026-10-25 é domingo em São Paulo, fuso fixo UTC-3).
const SP = '-03:00'

function sp(iso: string): Date {
  return new Date(`${iso}${SP}`)
}

describe('obterStatusAgora', () => {
  it('segunda 11:59 tem uma hora antes de abrir', () => {
    const s = obterStatusAgora(sp('2026-10-26T11:59:00'))
    expect(s.aberto).toBe(false)
    expect(s.abreAs).toBe('12:00')
    expect(mensagemDeStatus(s)).toBe('Fechado. Abre hoje às 12:00')
  })

  it('segunda 12:00 abre e fecha à meia-noite', () => {
    const s = obterStatusAgora(sp('2026-10-26T12:00:00'))
    expect(s.aberto).toBe(true)
    expect(s.fechaAs).toBe('00:00')
  })

  it('segunda 23:59 ainda está aberto', () => {
    const s = obterStatusAgora(sp('2026-10-26T23:59:00'))
    expect(s.aberto).toBe(true)
    expect(s.diaDoExpediente).toBe('segunda')
  })

  it('terça 00:00 fecha e abre às 12:00 no mesmo dia', () => {
    const s = obterStatusAgora(sp('2026-10-27T00:00:00'))
    expect(s.aberto).toBe(false)
    expect(s.abreAs).toBe('12:00')
    expect(s.diaDoExpediente).toBe('terça')
  })

  it('terça 03:00 fechado: madrugada de segunda não abre', () => {
    const s = obterStatusAgora(sp('2026-10-27T03:00:00'))
    expect(s.aberto).toBe(false)
  })

  it('quarta 03:59 fecha às 04:00 (madrugada da terça)', () => {
    const s = obterStatusAgora(sp('2026-10-28T03:59:00'))
    expect(s.aberto).toBe(true)
    expect(s.diaDoExpediente).toBe('terça')
  })

  it('quarta 04:00 fecha e abre às 12:00', () => {
    const s = obterStatusAgora(sp('2026-10-28T04:00:00'))
    expect(s.aberto).toBe(false)
    expect(s.abreAs).toBe('12:00')
    expect(s.diaDoExpediente).toBe('quarta')
  })

  it('quinta 09:59 ainda fechado', () => {
    const s = obterStatusAgora(sp('2026-10-29T09:59:00'))
    expect(s.aberto).toBe(false)
    expect(s.abreAs).toBe('10:00')
  })

  it('quinta 10:00 abre e vai até 04:00', () => {
    const s = obterStatusAgora(sp('2026-10-29T10:00:00'))
    expect(s.aberto).toBe(true)
    expect(s.fechaAs).toBe('04:00')
  })

  it('sábado 02:00 segue aberto pela madrugada de sexta', () => {
    const s = obterStatusAgora(sp('2026-10-31T02:00:00'))
    expect(s.aberto).toBe(true)
    expect(s.diaDoExpediente).toBe('sexta')
  })

  it('domingo 02:00 segue aberto pela madrugada de sábado', () => {
    const s = obterStatusAgora(sp('2026-10-25T02:00:00'))
    expect(s.aberto).toBe(true)
    expect(s.fechaAs).toBe('04:00')
    expect(s.diaDoExpediente).toBe('sábado')
  })

  it('domingo 04:00 fecha e abre às 10:00', () => {
    const s = obterStatusAgora(sp('2026-10-25T04:00:00'))
    expect(s.aberto).toBe(false)
    expect(s.abreAs).toBe('10:00')
    expect(s.diaDoExpediente).toBe('domingo')
  })

  it('domingo 23:59 fecha à meia-noite', () => {
    const s = obterStatusAgora(sp('2026-10-25T23:59:00'))
    expect(s.aberto).toBe(true)
    expect(s.fechaAs).toBe('00:00')
    expect(s.diaDoExpediente).toBe('domingo')
  })

  it('segunda 00:00 fecha e abre às 12:00', () => {
    const s = obterStatusAgora(sp('2026-10-26T00:00:00'))
    expect(s.aberto).toBe(false)
    expect(s.abreAs).toBe('12:00')
    expect(s.diaDoExpediente).toBe('segunda')
  })

  it('segunda 02:00 continua fechado', () => {
    const s = obterStatusAgora(sp('2026-10-26T02:00:00'))
    expect(s.aberto).toBe(false)
  })

  it('04:00 fecha em terça, quinta, sexta e sábado (fim da madrugada anterior)', () => {
    for (const [iso, dia] of [
      ['2026-10-27T04:00:00', 'terça'],
      ['2026-10-29T04:00:00', 'quinta'],
      ['2026-10-30T04:00:00', 'sexta'],
      ['2026-10-31T04:00:00', 'sábado'],
    ] as const) {
      const s = obterStatusAgora(sp(iso))
      expect(s.aberto, iso).toBe(false)
      expect(s.diaDoExpediente, iso).toBe(dia)
    }
  })

  it('data vinda em UTC é interpretada no fuso de São Paulo', () => {
    // 2026-10-14T02:00:00Z = terça 23:00 em São Paulo.
    const s = obterStatusAgora(new Date('2026-10-14T02:00:00Z'))
    expect(s.aberto).toBe(true)
    expect(s.diaDoExpediente).toBe('terça')
    expect(s.fechaAs).toBe('04:00')
  })
})
