export type Categoria =
  | 'Cervejas'
  | 'Destilados'
  | 'Gin'
  | 'Vinhos'
  | 'Refrigerantes e Energéticos'
  | 'Gelo e Carvão'
  | 'Petiscos'

export type CardapioItem = {
  nome: string
  categoria: Categoria
  demo: true
  preco: null
}

export const categorias: Categoria[] = [
  'Cervejas',
  'Destilados',
  'Gin',
  'Vinhos',
  'Refrigerantes e Energéticos',
  'Gelo e Carvão',
  'Petiscos',
]

export const cardapio: CardapioItem[] = [
  { nome: 'Heineken 330ml', categoria: 'Cervejas', demo: true, preco: null },
  { nome: 'Corona 355ml', categoria: 'Cervejas', demo: true, preco: null },
  { nome: 'Brahma Duplo Malte', categoria: 'Cervejas', demo: true, preco: null },
  { nome: 'Johnnie Walker Red 1L', categoria: 'Destilados', demo: true, preco: null },
  { nome: 'Smirnoff Vodka', categoria: 'Destilados', demo: true, preco: null },
  { nome: 'Tanqueray', categoria: 'Gin', demo: true, preco: null },
  { nome: 'Beefeater', categoria: 'Gin', demo: true, preco: null },
  { nome: 'Vinho Tinto - Casa Silva', categoria: 'Vinhos', demo: true, preco: null },
  { nome: 'Red Bull 250ml', categoria: 'Refrigerantes e Energéticos', demo: true, preco: null },
  { nome: 'Coca-Cola 2L', categoria: 'Refrigerantes e Energéticos', demo: true, preco: null },
  { nome: 'Gelo em cubo 5kg', categoria: 'Gelo e Carvão', demo: true, preco: null },
  { nome: 'Carvão 4kg', categoria: 'Gelo e Carvão', demo: true, preco: null },
  { nome: 'Amendoim torrado', categoria: 'Petiscos', demo: true, preco: null },
  { nome: 'Castanha de caju', categoria: 'Petiscos', demo: true, preco: null },
]