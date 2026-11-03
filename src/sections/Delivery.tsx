import { abrirWhatsApp } from '../utils/whatsapp'

export function Delivery() {
  return (
    <section id="delivery" className="border-t border-divider bg-surface py-16 md:py-24" aria-labelledby="delivery-title">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div className="min-w-0 animate-slide-up">
            <h2 id="delivery-title" className="font-display text-3xl md:text-4xl">Delivery</h2>
            <p className="mt-4 text-text/80 leading-relaxed">
              Por enquanto o pedido é feito pelo WhatsApp. Envie a lista de itens e combinamos área, taxa e horário.
            </p>
            <p className="mt-2 text-sm text-text/60">Consulte área e taxa pelo WhatsApp.</p>
            <button
              type="button"
              onClick={() => abrirWhatsApp('Olá! Gostaria de fazer um pedido.')}
              className="mt-6 btn btn-primary btn-lg"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 2C6.48 2 2 6.48 2 12c0 1.74.45 3.37 1.23 4.8L2 22l5.34-1.2A9.96 9.96 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              Pedir pelo WhatsApp
            </button>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="rounded-xl border border-divider bg-bg p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="shrink-0 flex h-12 w-12 items-center justify-center rounded-lg bg-amber/10 text-amber" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-xl text-text">Sem burocracia</h3>
                  <p className="mt-2 text-text/80">
                    Pagamento e entrega combinados na conversa. Sem cadastro, sem carrinho, direto com a gente.
                  </p>
                </div>
              </div>
              <div className="mt-6 flex items-start gap-4">
                <div className="shrink-0 flex h-12 w-12 items-center justify-center rounded-lg bg-amber/10 text-amber" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-xl text-text">Até de madrugada</h3>
                  <p className="mt-2 text-text/80">
                    Entregamos nos dias de funcionamento estendido. Confira o horário na seção "Onde estamos".
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}