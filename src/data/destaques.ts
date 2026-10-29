import type { CardapioItem } from './cardapio'

// Fotos reais do estabelecimento usadas onde fazem sentido; os demais destaques
// são blocos tipográficos, sem foto de produto inventada.
export type Destaque = Pick<CardapioItem, 'nome'> & {
  categoria: string
  preco?: number
  foto?: {
    src: string
    largura: number
    altura: number
    alt: string
  }
}

export const destaques: Destaque[] = [
  {
    nome: 'Johnnie Walker Red Label',
    categoria: 'Destilados na geladeira',
    foto: {
      src: '/copao-red-label.webp',
      largura: 722,
      altura: 933,
      alt: 'Copo de bebida com gelo e garrafa de Red Label ao fundo, foto real do emporio',
    },
  },
  { nome: 'Heineken long neck', categoria: 'Cervejas', preco: 9.9 },
  { nome: 'Corona Extra long neck', categoria: 'Cervejas', preco: 9.5 },
  { nome: 'Red Bull lata', categoria: 'Refrigerantes e Energéticos', preco: 12.9 },
  { nome: 'Tanqueray London Dry', categoria: 'Gin', preco: 109.9 },
  { nome: 'Gelo em cubo pacote', categoria: 'Gelo e Carvão', preco: 15 },
]

export const fotoGeladeira = {
  src: '/geladeira.webp',
  largura: 896,
  altura: 758,
  alt: 'Geladeiras com cervejas e bebidas geladas, foto real do emporio',
}
