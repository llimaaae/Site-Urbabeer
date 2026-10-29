// Gerais prints de docs/: rola a página toda (para disparar lazy loading) e
// captura a página completa em desktop e mobile. Uso: node scripts/gerar-prints.mjs [url]
import { chromium } from 'playwright'

const url = process.argv[2] ?? 'http://localhost:4173/'
const browser = await chromium.launch()

const alvos = [
  { viewport: { width: 1280, height: 900 }, arquivo: 'docs/desktop.png' },
  { viewport: { width: 390, height: 844 }, arquivo: 'docs/mobile.png' },
]

for (const alvo of alvos) {
  const page = await browser.newPage({ viewport: alvo.viewport })
  await page.goto(url, { waitUntil: 'networkidle' })
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 400) {
      window.scrollTo(0, y)
      await new Promise((r) => setTimeout(r, 120))
    }
    window.scrollTo(0, 0)
    await new Promise((r) => setTimeout(r, 300))
  })
  await page.screenshot({ path: alvo.arquivo, fullPage: true })
  console.log(alvo.arquivo)
  await page.close()
}

await browser.close()
