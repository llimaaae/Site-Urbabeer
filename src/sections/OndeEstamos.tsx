import { contato } from '../data/contato'
import { Button } from '../components/ui/Button'

const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(contato.endereco)}&output=embed`

export function OndeEstamos() {
  return (
    <section id="onde" className="border-t border-divider bg-alva py-20 md:py-28 lg:py-32" aria-labelledby="onde-title">
      <div className="container">
        <header className="max-w-2xl animate-slide-up">
          <h2 id="onde-title" className="font-display font-semibold text-3xl md:text-4xl">Onde estamos</h2>
          <p className="mt-3 max-w-xl text-text-muted">
            No Urbanova, ao lado do Pátio Santa Fé. Estacionamento na porta.
          </p>
        </header>

        <div className="mt-10 grid gap-8 md:grid-cols-2 md:items-start">
          <div className="animate-slide-up" style={{ animationDelay: '100ms' }}>
            <div className="space-y-5">
              <article className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-muted text-primary">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-text">Endereço</h3>
                    <address className="mt-1 not-italic text-text-secondary leading-relaxed">
                      {contato.endereco}
                    </address>
                  </div>
                </div>
              </article>

              <article className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 flex h-12 w-12 items-center justify-center rounded-lg bg-terracota-muted text-secondary">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-text">Horário de funcionamento</h3>
                    <div className="mt-1 space-y-1 text-sm text-text-muted leading-relaxed">
                      <p>Segunda: 12h – 00h</p>
                      <p>Terça a Quarta: 12h – 04h</p>
                      <p>Quinta a Sábado: 10h – 04h</p>
                      <p>Domingo: 10h – 00h</p>
                    </div>
                  </div>
                </div>
              </article>

              <article className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 flex h-12 w-12 items-center justify-center rounded-lg bg-olive text-alva" style={{ backgroundColor: 'var(--color-success)' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-text">Contato rápido</h3>
                    <div className="mt-1 space-y-1 text-sm">
                      <a href={contato.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors duration-200">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                          <path d="M12 2C6.48 2 2 6.48 2 12c0 1.74.45 3.37 1.23 4.8L2 22l5.34-1.2A9.96 9.96 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" fill="none" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                        (12) 98882-8861
                      </a>
                      <a href={contato.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors duration-200">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <rect x="3" y="3" width="18" height="18" rx="5" />
                          <circle cx="12" cy="12" r="4" />
                          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                        </svg>
                        @urbabeer
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="aspect-[4-3] overflow-hidden rounded-2xl border border-divider bg-surface-elevated shadow-xl">
              <iframe
                title="Localização UrbaBeer Empório no Urbanova"
                src={mapsEmbed}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
            <Button
              variant="primary"
              size="lg"
              as="a"
              href={contato.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 w-full sm:w-auto"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Abrir no Google Maps
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}