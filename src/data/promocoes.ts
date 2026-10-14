export type Promocao = {
  titulo: string
  preco: string
  condicao: string
  destaque?: boolean
}

export const promocoes: Promocao[] = [
  {
    titulo: 'Gin',
    preco: '3 por R$ 30,00',
    condicao: 'Todo dia',
  },
  {
    titulo: 'Gin com fruta',
    preco: '3 por R$ 40,00',
    condicao: 'Todo dia',
  },
  {
    titulo: 'Master Gold',
    preco: '2 por R$ 20,00',
    condicao: 'Toda quarta-feira',
    destaque: true,
  },
]