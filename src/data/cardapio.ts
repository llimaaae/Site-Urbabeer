// Cardápio de DEMONSTRAÇÃO: nomes e preços plausíveis de uma adega em São José dos Campos.
// Todos os itens têm demo: true e não representam o preço real do estabelecimento.
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
  preco: number
  demo: true
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
  // Cervejas
  { nome: 'Heineken long neck', categoria: 'Cervejas', preco: 9.9, demo: true },
  { nome: 'Heineken lata', categoria: 'Cervejas', preco: 6.5, demo: true },
  { nome: 'Corona Extra long neck', categoria: 'Cervejas', preco: 9.5, demo: true },
  { nome: 'Brahma Duplo Malte lata', categoria: 'Cervejas', preco: 5.5, demo: true },
  { nome: 'Amstel lata', categoria: 'Cervejas', preco: 5.9, demo: true },
  { nome: 'Budweiser lata', categoria: 'Cervejas', preco: 6.29, demo: true },
  { nome: 'Original lata', categoria: 'Cervejas', preco: 6.19, demo: true },
  { nome: 'Spaten garrafa 1L', categoria: 'Cervejas', preco: 22.9, demo: true },
  // Destilados
  { nome: 'Johnnie Walker Red Label', categoria: 'Destilados', preco: 99.9, demo: true },
  { nome: 'Johnnie Walker Black Label', categoria: 'Destilados', preco: 159.9, demo: true },
  { nome: 'Smirnoff Vodka', categoria: 'Destilados', preco: 39.9, demo: true },
  { nome: 'Cachaça 51', categoria: 'Destilados', preco: 21.9, demo: true },
  { nome: 'Ypióca Prata', categoria: 'Destilados', preco: 27.9, demo: true },
  { nome: 'Cachaça Salinas', categoria: 'Destilados', preco: 74.9, demo: true },
  // Gin
  { nome: 'Tanqueray London Dry', categoria: 'Gin', preco: 109.9, demo: true },
  { nome: 'Beefeater London Dry', categoria: 'Gin', preco: 94.9, demo: true },
  { nome: 'Gordon’s London Dry', categoria: 'Gin', preco: 59.9, demo: true },
  { nome: 'Bombay Sapphire', categoria: 'Gin', preco: 129.9, demo: true },
  { nome: 'Seagers', categoria: 'Gin', preco: 44.9, demo: true },
  // Vinhos
  { nome: 'Casillero del Diablo Cabernet Sauvignon', categoria: 'Vinhos', preco: 64.9, demo: true },
  { nome: 'Santa Helena Reservado Merlot', categoria: 'Vinhos', preco: 42.9, demo: true },
  { nome: 'Frontera Merlot', categoria: 'Vinhos', preco: 39.9, demo: true },
  { nome: 'Periquita Tinto', categoria: 'Vinhos', preco: 49.9, demo: true },
  { nome: 'Vinho Branco Frontera Chenin', categoria: 'Vinhos', preco: 38.9, demo: true },
  // Refrigerantes e Energéticos
  { nome: 'Coca-Cola lata', categoria: 'Refrigerantes e Energéticos', preco: 5.5, demo: true },
  { nome: 'Coca-Cola garrafa 2L', categoria: 'Refrigerantes e Energéticos', preco: 12.9, demo: true },
  { nome: 'Guaraná Antarctica lata', categoria: 'Refrigerantes e Energéticos', preco: 5.5, demo: true },
  { nome: 'Fanta Laranja lata', categoria: 'Refrigerantes e Energéticos', preco: 5.5, demo: true },
  { nome: 'Red Bull lata', categoria: 'Refrigerantes e Energéticos', preco: 12.9, demo: true },
  { nome: 'Monster Energy lata', categoria: 'Refrigerantes e Energéticos', preco: 11.9, demo: true },
  // Gelo e Carvão
  { nome: 'Gelo em cubo pacote', categoria: 'Gelo e Carvão', preco: 15, demo: true },
  { nome: 'Gelo picado pacote', categoria: 'Gelo e Carvão', preco: 9.9, demo: true },
  { nome: 'Carvão pacote', categoria: 'Gelo e Carvão', preco: 29.9, demo: true },
  { nome: 'Carvão premium pacote', categoria: 'Gelo e Carvão', preco: 39.9, demo: true },
  // Petiscos
  { nome: 'Amendoim torrado pacote', categoria: 'Petiscos', preco: 12.9, demo: true },
  { nome: 'Castanha de caju pacote', categoria: 'Petiscos', preco: 29.9, demo: true },
  { nome: 'Salame fatiado pacote', categoria: 'Petiscos', preco: 19.9, demo: true },
  { nome: 'Azeitona verde pacote', categoria: 'Petiscos', preco: 14.9, demo: true },
  { nome: 'Salgadinhos pacote', categoria: 'Petiscos', preco: 9.9, demo: true },
  { nome: 'Fumacinha pacote', categoria: 'Petiscos', preco: 16.9, demo: true },
]
