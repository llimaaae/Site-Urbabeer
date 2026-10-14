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
      <Header />
      <main>
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