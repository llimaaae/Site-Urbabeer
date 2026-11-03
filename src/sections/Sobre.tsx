import { abrirWhatsApp } from '../utils/whatsapp'

export function Sobre() {
  return (
    <section id="sobre" className="border-t border-divider bg-bg py-16 md:py-24 lg:py-28" aria-labelledby="sobre-title">
      <div className="container">
        <div className="grid gap-10 md:grid-cols-2 md:items-start lg:gap-16">
          <div className="min-w-0 animate-slide-up">
            <h2 id="sobre-title" className="font-display text-3xl md:text-4xl">Sobre a adega</h2>
            <p className="mt-4 text-text/70 leading-relaxed text-pretty">
              A UrbaBeer Empório é uma adega no bairro Urbanova, em São José dos Campos. Trabalhamos com cerveja bem
              gelada, destilados, gin, vinho, energéticos, gelo e petiscos, com preços diretos no WhatsApp.
            </p>
            <p className="mt-4 text-text/70 leading-relaxed text-pretty">
              Temos promoções todos os dias e atendimento até de madrugada em vários dias da semana. Passe no endereço
              ou chame no WhatsApp para conferir estoque, taxa e área de entrega.
            </p>
            <button
              type="button"
              onClick={() => abrirWhatsApp('Olá! Gostaria de saber mais sobre a adega.')}
              className="mt-6 btn btn-primary"
            >
              Falar no WhatsApp
            </button>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-divider bg-surface shadow-xl">
              <img
                src="/geladeira.webp"
                alt="Geladeiras com cervejas e bebidas, com garrafa grande de whisky em primeiro plano, foto real do empório"
                width={896}
                height={758}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-[1.03]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}