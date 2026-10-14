import { abrirWhatsApp } from '../utils/whatsapp'

export function Delivery() {
  return (
    <section id="delivery" className="border-t border-divider bg-surface">
      <div className="container py-16 md:py-20">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl">Delivery</h2>
            <p className="mt-4 text-text/80">
              Por enquanto o pedido é feito pelo WhatsApp. Envie a lista de itens e combinamos área, taxa e horário.
            </p>
            <p className="mt-2 text-sm text-text/70">Consulte área e taxa pelo WhatsApp.</p>
            <button
              type="button"
              onClick={() => abrirWhatsApp('Olá! Gostaria de fazer um pedido.')}
              className="mt-6 bg-amber px-5 py-3 text-sm font-bold text-black hover:bg-amber/90"
            >
              Pedir pelo WhatsApp
            </button>
          </div>
          <div className="border border-divider bg-bg p-6">
            <p className="text-sm text-text/80">
              Pagamento e entrega combinados na conversa. Sem cadastro, sem carrinho.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}