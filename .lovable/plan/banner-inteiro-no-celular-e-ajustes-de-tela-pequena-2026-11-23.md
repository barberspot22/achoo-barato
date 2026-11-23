# Banner inteiro no celular e ajustes de tela pequena

## O que muda
- **Banner no celular**: hoje ele é esticado para 300px de altura e corta as laterais (o fone e o presente somem). No celular a imagem passa a aparecer inteira, na proporção original, sem escurecimento por cima.
- **Texto do banner no celular**: o título, a frase e o botão "Explorar achadinhos" saem de cima da imagem e ficam logo abaixo dela, num bloco escuro arredondado junto ao banner. O botão ocupa a largura da tela.
- **No computador nada muda**: texto continua sobre o lado esquerdo do banner.
- **Revisão geral no celular (393px)**: conferir cabeçalho, botões WhatsApp/Telegram, categorias, faixas de produtos, benefícios e rodapé; corrigir qualquer coisa que passe da largura da tela ou fique cortada.

## Detalhes técnicos
- Em `src/styles.css`, no `@media (max-width:767px)`: `.hero-banner` vira bloco normal (sem aspect-ratio/min-height), `img` com `position:static; aspect-ratio:3/1; height:auto; object-fit:contain`, remover `::after`, `.hero-copy` com padding próprio e fundo escuro.
- Checar com Playwright em 393x767 e 1280: largura da página = largura da tela, banner com imagem completa.
