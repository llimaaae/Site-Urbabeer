import { contato } from '../data/contato'

export function Footer() {
  return (
    <footer className="border-t border-divider bg-bg">
      <div className="container py-10">
        <img
          src="/logo.jpeg"
          alt="UrbaBeer Empório"
          width={132}
          height={88}
          className="h-8 w-auto max-w-[120px] object-contain"
        />
        <p className="mt-4 text-sm text-text/80">{contato.endereco}</p>
        <div className="mt-3 flex flex-wrap gap-4 text-sm">
          <a
            href={contato.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text hover:underline"
          >
            WhatsApp: (12) 98882-8861
          </a>
          <a
            href={contato.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text hover:underline"
          >
            Instagram: @urbabeer
          </a>
        </div>
        <p className="mt-6 text-xs text-text/60">
          Venda proibida para menores de 18 anos. Beba com moderação.
        </p>
      </div>
    </footer>
  )
}