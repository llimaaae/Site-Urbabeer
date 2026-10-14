const NUMERO = '5512988828861'

export function abrirWhatsApp(mensagem?: string): void {
  const texto = mensagem ? `?text=${encodeURIComponent(mensagem)}` : ''
  window.open(`https://wa.me/${NUMERO}${texto}`, '_blank', 'noopener,noreferrer')
}