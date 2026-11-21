# Nova logo, fonte Poppins e cores Mercado Livre + Achou Barato

## O que muda
- **Logo**: a logo circular "Achou Barato" substitui o símbolo atual no topo do site e vira o ícone da aba do navegador.
- **Nome da marca**: "Garimpo do Dia" passa a ser "Achou Barato" no topo, rodapé e títulos das páginas (para combinar com a logo).
- **Fonte**: todos os textos (títulos e interface) passam a usar Poppins, sem fontes serifadas ou itálicas desenhadas.
- **Cores**: saem todos os verdes/sálvia. Nova paleta inspirada no Mercado Livre e na logo:
  - Amarelo Mercado Livre `#FFE600` (faixa do topo, destaques)
  - Azul Mercado Livre `#3483FA` (botões e links principais)
  - Laranja da logo `#FF7A00` e vermelho `#E62E2E` (etiquetas de oferta, selos de desconto)
  - Fundo cinza claro `#EDEDED`, cartões brancos, texto quase preto `#333333`
- Botões de WhatsApp e Telegram mantêm suas cores próprias.

## Detalhes técnicos
- Enviar a logo via lovable-assets e usar o pointer no cabeçalho; criar `public/favicon.png` 64x64 e trocar o link do ícone em `__root.tsx`, removendo `favicon.ico`.
- Trocar o link do Google Fonts para Poppins (400/500/600/700); `--font-sans` e `--font-display` = Poppins; remover `em` itálico do título.
- Reescrever tokens em `src/styles.css` (`--primary` azul, `--accent` amarelo, novo `--offer` laranja/vermelho), revisar usos de `--accent` em fundos de cartões.
- Atualizar nome em `src/data/catalog.ts` e heads das rotas; atualizar a memória da marca (paleta, fonte e nome).
