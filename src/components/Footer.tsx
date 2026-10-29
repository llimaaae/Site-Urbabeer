import { contato } from '../data/contato'
import { DEMO } from '../data/config'

export function Footer() {
  return (
    <footer className="border-t border-divider bg-bg">
      <div className="container py-10">
        <img
          src="/logo.webp"
          alt="UrbaBeer Empório"
          width={1072}
          height={712}
          className="block h-auto w-30 max-w-full"
          loading="lazy"
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
        {DEMO && (
          <p className="mt-3 text-xs text-text/60">
            Projeto de demonstração. Sem vínculo oficial com o estabelecimento; preços do cardápio são exemplos.
          </p>
        )}
      </div>
    </footer>
  )
}