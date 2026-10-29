import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { WhatsAppFloat } from './components/WhatsAppFloat'
import { Hero } from './sections/Hero'
import { Promocoes } from './sections/Promocoes'
import { Destaques } from './sections/Destaques'
import { Cardapio } from './sections/Cardapio'
import { Sobre } from './sections/Sobre'
import { Delivery } from './sections/Delivery'
import { OndeEstamos } from './sections/OndeEstamos'

export default function App() {
  return (
    <div id="app">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-amber focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-black"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Promocoes />
        <Destaques />
        <Cardapio />
        <Sobre />
        <Delivery />
        <OndeEstamos />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}