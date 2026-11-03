## Resumo das mudanças

### ETAPA 0 - Reconhecimento
- Projeto: React 19 + TypeScript + Vite + Tailwind CSS v4
- Paleta existente mantida: bg #000000, surface #151515, divider #2a2a2a, text #f5f5f5, amber #f59e0b, red #dc2626, brown #7c2d12
- Tipografia: Alfa Slab One (display) + Source Sans 3 (body)
- Build inicial: ✅ passa sem erros

### ETAPA 1 - Design System (tokens.css + index.css)
- **Cores**: Paleta base + tons derivados (hover, muted, elevated, semantic roles primary/danger/success)
- **Tipografia**: Escala fluida com clamp(), tracking/leading consistentes
- **Espaçamento**: Escala 4px (space-1 a space-24)
- **Raio**: 6 níveis (none → full)
- **Sombras**: 5 níveis + versões dark mode
- **Componentes padronizados**: .btn (primary/secondary/ghost, 3 tamanhos), .input, .card, .badge (4 variantes), .alert (3 variantes)
- **Animações**: fade-in, slide-up/down, scale-in + prefers-reduced-motion
- **Utilitários**: scrollbar, selection, container, focus-visible

### ETAPA 2 - Redesign das Telas
- **Header**: fixed, backdrop-blur, shadow on scroll, nav com hover states, menu mobile animado
- **Footer**: grid 3 colunas, ícones SVG, links acessíveis, demo notice
- **WhatsAppFloat**: button semântico, hover/tap scale, shadow escalonado
- **Hero**: layout assimétrico, badge de status animado, botões com sistema .btn, imagem com hover zoom, badge "Gelada na hora"
- **Promoções**: lista com hover states, preços em tabular-nums, master promo com destaque amber, botão WhatsApp integrado
- **Destaques**: cards interativos com hover zoom, preços formatados, fallback sem foto
- **Cardápio**: filtros como tabs acessíveis (role=tablist), lista com hover, botões WhatsApp ghost
- **Sobre**: layout 2 colunas, CTA WhatsApp, imagem com hover zoom
- **Delivery**: grid 2 colunas, feature cards com ícones, CTA proeminente
- **OndeEstamos**: foto fachada + mapa, tabela horários com destaque "hoje", link "Como chegar"

### ETAPA 3 - Qualidade
- ✅ Build de produção passa
- ✅ Lint (oxlint) limpo
- ✅ Testes (17/17) passam
- ✅ Acessibilidade: focus-visible, aria-labels, roles semânticos, contraste mantido
- ✅ Performance: imagens com loading=lazy, fetchPriority no hero, transições otimizadas
- ✅ SEO/metadados preservados no index.html

### Como reverter
```bash
git checkout pre-redesign
# ou
git revert 0caf94d
```