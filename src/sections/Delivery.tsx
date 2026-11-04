import { contato } from '../data/contato'
import { abrirWhatsApp } from '../utils/whatsapp'
import { Button } from '../components/ui/Button'
import { Badge } from '../components/ui/Badge'
import { Card, CardContent } from '../components/ui/Card'

export function Delivery() {
  return (
    <section id="delivery" className="border-t border-divider bg-alva-alt py-20 md:py-28 lg:py-32" aria-labelledby="delivery-title">
      <div className="container">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="animate-slide-up">
            <header className="max-w-xl">
              <h2 id="delivery-title" className="font-display font-semibold text-3xl md:text-4xl">Entrega e retirada</h2>
              <p className="mt-4 text-text-secondary leading-relaxed">
                Peça pelo WhatsApp. Retire na adega ou receba em casa no Urbanova e arredores.
              </p>
            </header>

            <div className="mt-8 space-y-4">
              <Card variant="bordered">
                <CardContent className="p-5 flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex items-center gap-3">
                    <Badge variant="caramelo" className="shrink-0">Retirada</Badge>
                    <div>
                      <p className="font-medium text-text">Pronto em até 20 min</p>
                      <p className="text-sm text-text-muted">Avise quando chegar que levamos até o carro</p>
                    </div>
                  </div>
                  <Button
                    variant="primary"
                    size="sm"
                    className="ml-auto shrink-0"
                    onClick={() => abrirWhatsApp('Olá! Quero fazer um pedido para retirada.')}
                  >
                    Pedir para retirar
                  </Button>
                </CardContent>
              </Card>

              <Card variant="bordered">
                <CardContent className="p-5 flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex items-center gap-3">
                    <Badge variant="terracota" className="shrink-0">Delivery</Badge>
                    <div>
                      <p className="font-medium text-text">Urbanova e bairros próximos</p>
                      <p className="text-sm text-text-muted">Taxa sob consulta. Mínimo R$ 50</p>
                    </div>
                  </div>
                  <Button
                    variant="terracota"
                    size="sm"
                    className="ml-auto shrink-0"
                    onClick={() => abrirWhatsApp('Olá! Quero fazer um pedido para entrega.')}
                  >
                    Pedir entrega
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 p-5 bg-cream-100 rounded-xl border border-divider">
              <p className="text-sm text-text-secondary">
                <strong className="text-text">Horário de pedidos:</strong> Segunda 12h–22h · Ter–Qua 12h–02h · Qui–Sáb 10h–02h · Dom 10h–22h
              </p>
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
            <Card variant="elevated">
              <CardContent className="p-6 md:p-8">
                <h3 className="font-display text-xl text-text mb-6">Faça seu pedido</h3>

                <div className="space-y-4">
                  <Button
                    variant="primary"
                    size="xl"
                    fullWidth
                    onClick={() => abrirWhatsApp('Olá! Gostaria de fazer um pedido.')}
                    className="group"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="mr-2">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      <path d="M12 2C6.48 2 2 6.48 2 12c0 1.74.45 3.37 1.23 4.8L2 22l5.34-1.2A9.96 9.96 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" fill="none" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                    Falar no WhatsApp
                    <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true">→</span>
                  </Button>

                  <a
                    href={contato.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-text-secondary hover:text-primary hover:bg-cream-200 rounded-lg transition-all duration-200 border border-divider"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="3" y="3" width="18" height="18" rx="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                    </svg>
                    Ver novidades no Instagram
                  </a>
                </div>

                <p className="mt-6 text-xs text-text-subtle text-center">
                  Venda proibida para menores de 18 anos. Beba com moderação.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}