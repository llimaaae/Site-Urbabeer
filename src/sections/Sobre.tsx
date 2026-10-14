export function Sobre() {
  return (
    <section id="sobre" className="border-t border-divider bg-bg">
      <div className="container py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div className="min-w-0">
            <h2 className="font-display text-3xl md:text-4xl">Sobre a adega</h2>
            <p className="mt-4 text-text/80">
              A UrbaBeer Empório é uma adega no bairro Urbanova, em São José dos Campos. Trabalhamos com cerveja bem
              gelada, destilados, gin, vinho, energéticos, gelo e petiscos, com preços diretos no WhatsApp.
            </p>
            <p className="mt-4 text-text/80">
              Temos promoções todos os dias e atendimento até de madrugada em vários dias da semana. Passe no endereço
              ou chame no WhatsApp para conferir estoque, taxa e área de entrega.
            </p>
          </div>
          <img
            src="/geladeira.png"
            alt="Geladeiras com cervejas e bebidas, com garrafa grande de whisky em primeiro plano"
            width={896}
            height={758}
            loading="lazy"
            className="w-full"
          />
        </div>
      </div>
    </section>
  )
}