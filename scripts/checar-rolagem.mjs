// Checagens de rolagem e prontidão: compara scrollWidth/clientWidth em várias
// larguras e lista elementos que estouram. Uso: node scripts/checar-rolagem.mjs [url]
import { chromium } from 'playwright'

const url = process.argv[2] ?? 'http://localhost:4173/'
const larguras = [320, 360, 390, 412, 768, 1280]

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 390, height: 844 } })
await page.goto(url, { waitUntil: 'networkidle' })

const problemas = []
for (const width of larguras) {
  await page.setViewportSize({ width, height: 844 })
  const r = await page.evaluate(() => {
    const estourados = []
    for (const el of document.querySelectorAll('body *')) {
      const css = getComputedStyle(el)
      if (css.overflowX === 'auto' || css.overflowX === 'scroll') continue
      if (el.scrollWidth > el.clientWidth + 1 && el.clientWidth > 0) {
        estourados.push(
          el.tagName.toLowerCase() +
            (el.id ? '#' + el.id : '') +
            (typeof el.className === 'string' ? ' [' + el.className + ']' : '') +
            ` sw=${el.scrollWidth} cw=${el.clientWidth}`
        )
      }
    }
    return { sw: document.documentElement.scrollWidth, cw: document.documentElement.clientWidth, estourados }
  })
  const ok = r.sw === r.cw
  console.log(`${width}px sw=${r.sw} cw=${r.cw} ${ok ? 'OK' : 'ESTOURA'}${r.estourados.length ? ' -> ' + r.estourados.slice(0, 8).join(' | ') : ''}`)
  if (!ok) problemas.push(width)
}

await browser.close()
console.log(problemas.length ? `FALHAS: ${problemas.join(', ')}` : 'todas as larguras sem rolagem horizontal')
