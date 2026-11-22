# Corrigir botões do WhatsApp e Telegram no celular

Hoje os dois botões ficam lado a lado e, em telas estreitas, passam da largura da página (o WhatsApp fica cortado à esquerda e o Telegram vaza à direita).

## O que muda
- Em telas pequenas (celular), os botões ficam um embaixo do outro, cada um ocupando a largura total da página, sem cortar nada.
- Em tablets e computadores, continuam lado a lado, centralizados.
- O texto do botão pode quebrar em duas linhas se a tela for muito estreita, em vez de vazar.

## Detalhes técnicos
- `src/styles.css`: `.social-actions` ganha `flex-wrap: wrap`; `.social-actions a` ganha `min-width:0; max-width:100%; white-space:normal; height:auto; min-height:43px`.
- No breakpoint mobile (até ~640px): `flex-direction: column` e `a { width:100% }`.
- Conferir com Playwright em 375px, 557px e desktop que não há rolagem horizontal.
